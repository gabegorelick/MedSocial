package com.medsocial.model;

import java.io.IOException;

import org.codehaus.jackson.JsonGenerator;
import org.codehaus.jackson.JsonProcessingException;
import org.codehaus.jackson.map.JsonSerializer;
import org.codehaus.jackson.map.SerializerProvider;
import org.joda.time.LocalTime;

public class LocalTimeJsonSerializer extends JsonSerializer<LocalTime> {

	@Override
	public void serialize(LocalTime value, JsonGenerator jgen, SerializerProvider provider) throws IOException,
			JsonProcessingException {
		
		jgen.writeString(value.toString());
	}

}
