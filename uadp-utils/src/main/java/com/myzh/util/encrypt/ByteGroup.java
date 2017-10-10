/**
 * Copyright (c) 2011-2014, hubin (jobob@qq.com).
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package com.myzh.util.encrypt;

import java.util.ArrayList;

/**
 * <p>
 * 字节组处理
 * </p>
 * 
 * @author hubin
 * @Date 2015-01-09
 */
public class ByteGroup {

	private ArrayList<Byte> byteContainer = new ArrayList<Byte>();


	public byte[] toBytes() {
		byte[] bytes = new byte[byteContainer.size()];
		for ( int i = 0 ; i < byteContainer.size() ; i++ ) {
			bytes[i] = byteContainer.get(i);
		}
		return bytes;
	}


	public ByteGroup addBytes( byte[] bytes ) {
		for ( byte b : bytes ) {
			byteContainer.add(b);
		}
		return this;
	}


	public int size() {
		return byteContainer.size();
	}
}