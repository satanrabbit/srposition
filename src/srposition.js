define(function(require, exports, module) {  	
   	var Widget = require('widget');    
   	var Position=require("position");
   	var Atip=require("atip");
   	var Events = require('events');
   	var  $ = require('$');
    var Srposition=	Widget.extend({ 
    	 attrs: {
            // 提示内容
            width: 400,
            height:300,
            sites:[], //site数据格式：{"id":"数字格式的ID","name":"字符串格式name","point":{"x":"数值","y":"数值"}}
            tipBtns:function(site){}
        },
        setup: function() {
	        this.element.css({ 'background-color':"#09f",'position':'relative','width':this.get('width')+"px",'height':this.get('height')+"px"});
	        var $this=this;
	        $.each(this.get("sites"),function(i,site){
	        	$this.initSite(site);
	        	$this.initSite(site);
	       });
	    },
	    //初始化站点
	    initSite:function(site){
	    	 var siteID="site-"+site.id;
	    	 if($(siteID).length==0){
	    	 	this.element.append("<div class='sr-point' id='"+siteID+"'></div>");
	    	 }
	    	 var $site =$("#"+siteID);
	    	 //定位
	    	 Position.pin({element: "#"+siteID , x: 'center', y: "center"},{element:this.element,x:site.point.x+"px",y:site.point.y+"px"});
	    	 //绑定tip
	    	 var siteTipID="siteTip-"+site.id;
	    	 var siteTip=new Atip({ 
	    	 	// 提示框
	    	 	 // 触发器        
		        trigger: "#"+siteID,
		        // 提示框在触发器上方
		        arrowPosition: 7,
		        content: "<div id='"+siteTipID+"'>"+site.info+"</div>",
		        inViewport :true
		         
		    });
	    	 //绑定事件
	    }
  	});
 	module.exports = Srposition;
});
