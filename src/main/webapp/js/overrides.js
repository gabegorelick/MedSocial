// fix from http://www.sencha.com/forum/showthread.php?153432-1.1.1-broke-store.sync-for-modified-records&p=687288&viewfull=1#post687288

if (Ext.version == '1.1.1') {
    
    // fix: modified records are not marked as dirty and therefore ignored on store sync
    Ext.override(Ext.util.Stateful, {
        
        /**
         * Sets the given field to the given value, marks the instance as dirty
         * @param {String|Object} fieldName The field to set, or an object containing key/value pairs
         * @param {Mixed} value The value to set
         */
        set: function(fieldName, value) {
            var me = this,
                fields = me.fields,
                modified = me.modified,
                convertFields = [],
                field, key, i;
            
            /*
             * If we're passed an object, iterate over that object. NOTE: we pull out fields with a convert function and
             * set those last so that all other possible data is set before the convert function is called
             */
            if (arguments.length == 1 && Ext.isObject(fieldName)) {
                for (key in fieldName) {
                    if (!fieldName.hasOwnProperty(key)) {
                        continue;
                    }
                    
                    //here we check for the custom convert function. Note that if a field doesn't have a convert function,
                    //we default it to its type's convert function, so we have to check that here. This feels rather dirty.
                    field = fields.get(key);
                    if (field && field.convert !== field.type.convert) {
                        convertFields.push(key);
                        continue;
                    }
                    
                    me.set(key, fieldName[key]);
                }
                
                for (i = 0; i < convertFields.length; i++) {
                    field = convertFields[i];
                    me.set(field, fieldName[field]);
                }
                
            } else {
                if (fields) {
                    field = fields.get(fieldName);
                    
                    if (field && field.convert) {
                        value = field.convert(value, me);
                    }
                }
                // *** added line ***
                currentValue = me.get(fieldName);
                me[me.persistanceProperty][fieldName] = value;
                
                // *** edited line *** if (field && field.persist && !me.isEqual(currentValue, value)) {
                if (!me.isEqual(currentValue, value)) {
                    if (me.isModified(fieldName)) {
                        if (me.isEqual(modified[fieldName], value)) {
                            // the original value in me.modified equals the new value, so the
                            // field is no longer modified
                            delete modified[fieldName];
                            // we might have removed the last modified field, so check to see if
                            // there are any modified fields remaining and correct me.dirty:
                            me.dirty = false;
                            for (key in modified) {
                                if (modified.hasOwnProperty(key)){
                                    me.dirty = true;
                                    break;
                                }
                            }
                        }
                    } else {
                        me.dirty = true;
                        modified[fieldName] = currentValue;
                    }
                }
                
                // fix
                me.dirty = true;
                
                if (!me.editing) {
                    me.afterEdit();
                }
            }
        },
        
        // *** added function ***
        /**
         * Checks if two values are equal, taking into account certain
         * special factors, for example dates.
         * @private
         * @param {Object} a The first value
         * @param {Object} b The second value
         * @return {Boolean} True if the values are equal
         */
        isEqual: function(a, b){
            if (Ext.isDate(a) && Ext.isDate(b)) {
                return a.getTime() === b.getTime();
            }
            return a === b;
        }
        
    });
    
};