package com.medsocial.web;

import java.io.IOException;
import java.util.Date;

import org.codehaus.jackson.JsonGenerator;
import org.codehaus.jackson.JsonProcessingException;
import org.codehaus.jackson.map.JsonSerializer;
import org.codehaus.jackson.map.SerializerProvider;

public class JsonDateSerializer extends JsonSerializer<Date> {
	
	@Override
	public void serialize(Date value, JsonGenerator jgen, SerializerProvider provider) throws IOException,
			JsonProcessingException {

		// Ext expects it in seconds, Java gives in milliseconds, Ext wins
		long time = value.getTime() / 1000;
		jgen.writeNumber(time);
	}
}
