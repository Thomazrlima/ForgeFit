package br.com.forgefit.persistencia.jpa.adapters;

import java.time.ZoneId;
import java.util.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;

public class DateTimeConverter {
	
	public static Date toDate(LocalDateTime localDateTime) {
		if (localDateTime == null) return null;
		return Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
	}
	
	public static Date toDate(LocalDate localDate) {
		if (localDate == null) return null;
		return Date.from(localDate.atStartOfDay(ZoneId.systemDefault()).toInstant());
	}
	
	public static LocalDateTime toLocalDateTime(Date date) {
		if (date == null) return null;
		return date.toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();
	}
	
	public static LocalDate toLocalDate(Date date) {
		if (date == null) return null;
		return date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
	}
}
