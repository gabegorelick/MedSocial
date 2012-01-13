package com.medsocial.model;

import java.io.IOException;

import org.codehaus.jackson.JsonParser;
import org.codehaus.jackson.JsonProcessingException;
import org.codehaus.jackson.map.DeserializationContext;
import org.codehaus.jackson.map.JsonDeserializer;
import org.joda.time.DateTimeFieldType;
import org.joda.time.Partial;
import org.joda.time.format.DateTimeFormat;

public class PartialJsonDeserialier extends JsonDeserializer<Partial> {
	@Override
	public Partial deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException, JsonProcessingException {
		String day = jp.readValueAsTree().get("day").asText();
		int dayOfWeek = DateTimeFormat.forPattern("EEE").parseDateTime(day).getDayOfWeek();
		return new Partial().with(DateTimeFieldType.dayOfWeek(), dayOfWeek);
	}
}
