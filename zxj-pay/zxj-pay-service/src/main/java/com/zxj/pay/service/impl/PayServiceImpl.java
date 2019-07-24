package com.zxj.pay.service.impl;

import java.util.Map;

import com.alibaba.dubbo.config.annotation.Service;
import com.zxj.pay.service.PayService;

@Service
public class PayServiceImpl implements PayService{

	@Override
	public Map<String, Object> createNative() {
		
		return null;
	}

}
