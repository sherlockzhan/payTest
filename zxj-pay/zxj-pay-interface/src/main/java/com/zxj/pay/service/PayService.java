package com.zxj.pay.service;

import java.util.Map;

public interface PayService {

	/**
	 * 需求：获取二维码地址
	 */
	public Map<String, Object> createNative();
}
