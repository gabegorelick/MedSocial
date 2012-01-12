package com.medsocial.model;

import java.io.IOException;

import org.codehaus.jackson.JsonParser;
import org.codehaus.jackson.JsonProcessingException;
import org.codehaus.jackson.map.DeserializationContext;
import org.codehaus.jackson.map.JsonDeserializer;
import org.joda.time.LocalTime;
import org.joda.time.format.ISODateTimeFormat;

public class LocalTimeJsonDeserializer extends JsonDeserializer<LocalTime> {
	
	@Override
	public LocalTime deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException,
			JsonProcessingException {

		return LocalTime.parse(jp.getText(), ISODateTimeFormat.dateTime());
	}

}
