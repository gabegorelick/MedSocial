package com.medsocial.validation;

import javax.validation.constraints.NotNull;

import com.medsocial.security.AppRole;

public class RegistrationForm {

	@NotNull
	private String forename;

	@NotNull
	private String surname;
	
	@NotNull
	private AccountType accountType;
	
	private String doctorId;
	
	public String getForename() {
		return forename;
	}

	public void setForename(String forename) {
		this.forename = forename;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}
	
	public AccountType getAccountType() {
		return accountType;
	}
	
	public void setAccountType(AccountType role) {
		this.accountType = role;
	}
	
	public String getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(String doctorId) {
		this.doctorId = doctorId;
	}

	/**
	 * Limit {@link AppRole} to Doctor or Patient.
	 * @author Gabe Gorelick
	 *
	 */
	public static enum AccountType {
		// TODO this may work better as a parent class of AppRole
		
		PATIENT(AppRole.PATIENT), DOCTOR(AppRole.DOCTOR);
		
		private AppRole role;
		
		AccountType(AppRole role) {
			this.role = role;
		}
		
		public AppRole getRole() {
			return role;
		}
	}
}