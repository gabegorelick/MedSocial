package com.medsocial.model;

import java.io.IOException;

import org.codehaus.jackson.JsonGenerator;
import org.codehaus.jackson.JsonProcessingException;
import org.codehaus.jackson.map.JsonSerializer;
import org.codehaus.jackson.map.SerializerProvider;
import org.joda.time.Partial;


public class PartialJsonSerializer extends JsonSerializer<Partial> {

	@Override
	public void serialize(Partial value, JsonGenerator jgen, SerializerProvider provider) throws IOException,
			JsonProcessingException {
		
		new DateJsonSerializer().serialize(value.toDateTime(null).toDate(), jgen, provider);	
	}

}
