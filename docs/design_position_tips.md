# 位置标识设计

- pubdate: 2013-08-02 22:58:57

------------------------

## 概述

实现未知标识，根据site信息定位

### 站点信息：

	sites:[{
		"id":"1",
		"name":"siteName",
		"point":{"x":"150","y":"60"},
		"info":"站点信息"
	}]

### 初始化站点 initSite

1. 添加`<div class="sr-point" id="site-?id"></div>`
    

2. 将sr-point定位

   利用arale-position定位

3. 绑定tip

   利用arale-tips绑定tip

4. 添加button 
  
   在tip内部添加button

   button添加data-status，值为：0，1

5. 绑定 [button的click事件][#1]
  
   绑定button事件，根据data-status值确定click事件方法

------------------------------------------------------

[#1]: ./design-button-click.html "button的click事件"


