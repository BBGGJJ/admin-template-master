package com.bj66nao.admin.utils;


import java.math.BigDecimal;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.function.Consumer;

import com.google.common.base.Preconditions;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import com.google.common.collect.Sets;
import org.apache.logging.log4j.util.Strings;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.util.StringUtils;

/**
 * 避免一些异常情况的工具类
 *
 * @author yushen.ma
 * @version 1.0 2016-04-11
 */
public class Safes {

	final private static Logger logger = LoggerFactory.getLogger(Safes.class);

	public static <K, V> Map<K, V> of(Map<K, V> source) {
		return Optional.ofNullable(source).orElse(Maps.newHashMapWithExpectedSize(0));
	}

	public static <T> Iterator<T> of(Iterator<T> source) {
		return Optional.ofNullable(source).orElse(Lists.<T>newArrayListWithCapacity(0).iterator());
	}

	public static <T> Collection<T> of(Collection<T> source) {
		return Optional.ofNullable(source).orElse(Lists.newArrayListWithCapacity(0));
	}

	public static <T> Iterable<T> of(Iterable<T> source) {
		return Optional.ofNullable(source).orElse(Lists.newArrayListWithCapacity(0));
	}

	public static <T> List<T> of(List<T> source) {
		return Optional.ofNullable(source).orElse(Lists.newArrayListWithCapacity(0));
	}

	public static <T> Set<T> of(Set<T> source) {
		return Optional.ofNullable(source).orElse(Sets.newHashSetWithExpectedSize(0));
	}

	public static BigDecimal of(BigDecimal source) {
		return Optional.ofNullable(source).orElse(BigDecimal.ZERO);
	}

	public static String of(String source) {
		return Optional.ofNullable(source).orElse(Strings.EMPTY);
	}

	public static String of(String source, String defaultStr) {
		return Optional.ofNullable(source).orElse(defaultStr);
	}

	public static <T> T first(Collection<T> source) {
		if (org.springframework.util.CollectionUtils.isEmpty(source)) {
			return null;
		}
		T t = null;
		Iterator<T> iterator = source.iterator();
		if (iterator.hasNext()) {
			t = iterator.next();
		}
		return t;
	}

	public static BigDecimal toBigDecimal(String source, BigDecimal defaultValue) {
		Preconditions.checkNotNull(defaultValue);
		try {
			return new BigDecimal(trimToEmpty(source));
		}
		catch (Throwable t) {
			logger.warn("未能识别的boolean类型, source:{}", source, t);
			return defaultValue;
		}
	}

	public static int toInt(String source, int defaultValue) {
		if (!StringUtils.hasText(source)) {
			return defaultValue;
		}
		try {
			return Integer.parseInt(trimToEmpty(source));
		}
		catch (Throwable t) {
			logger.warn("未能识别的整形 {}", source);
			return defaultValue;
		}
	}

	public static long toLong(String source, long defaultValue) {
		if (!StringUtils.hasText(source)) {
			return defaultValue;
		}
		try {
			return Long.parseLong(trimToEmpty(source));
		}
		catch (Throwable t) {
			logger.warn("未能识别的长整形 {}", source);
			return defaultValue;
		}
	}

	public static boolean toBoolean(String source, boolean defaultValue) {
		if (!StringUtils.hasText(source)) {
			return defaultValue;
		}
		try {
			return Boolean.parseBoolean(trimToEmpty(source));
		}
		catch (Throwable t) {
			logger.warn("未能识别的boolean类型, source:{}", source, t);
			return defaultValue;
		}
	}

	public static void run(Runnable runnable, Consumer<Throwable> error) {
		try {
			runnable.run();
		}
		catch (Throwable t) {
			error.accept(t);
		}
	}

	static String trimToEmpty(String str) {
		return str == null ? Strings.EMPTY : str.trim();
	}
}