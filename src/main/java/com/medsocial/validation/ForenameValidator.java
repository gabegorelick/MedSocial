package com.medsocial.validation;

import java.util.regex.Pattern;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class ForenameValidator implements ConstraintValidator<Forename, String> {
	private static final Pattern VALID = Pattern.compile("[\\p{L}'\\-,.]+");

	public void initialize(Forename constraintAnnotation) {
	}

	public boolean isValid(String value, ConstraintValidatorContext context) {
		return VALID.matcher(value).matches();
	}
}