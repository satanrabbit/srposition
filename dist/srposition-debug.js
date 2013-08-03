define("arale/srposition/1.0.0/srposition-debug", [ "arale/widget/1.1.1/widget-debug", "arale/base/1.1.1/base-debug", "arale/class/1.1.0/class-debug", "arale/events/1.1.0/events-debug", "$-debug", "arale/position/1.0.1/position-debug", "arale/tip/1.1.4/atip-debug", "arale/popup/1.1.2/popup-debug", "arale/overlay/1.1.2/overlay-debug", "arale/iframe-shim/1.0.2/iframe-shim-debug" ], function(require, exports, module) {
    var Widget = require("arale/widget/1.1.1/widget-debug");
    var Position = require("arale/position/1.0.1/position-debug");
    var Atip = require("arale/tip/1.1.4/atip-debug");
    var Events = require("arale/events/1.1.0/events-debug");
    var $ = require("$-debug");
    var Srposition = Widget.extend({
        attrs: {
            // 提示内容
            width: 400,
            height: 300,
            sites: [],
            //site数据格式：{"id":"数字格式的ID","name":"字符串格式name","point":{"x":"数值","y":"数值"}}
            tipBtns: function(site) {}
        },
        setup: function() {
            this.element.css({
                "background-color": "#09f",
                position: "relative",
                width: this.get("width") + "px",
                height: this.get("height") + "px"
            });
            var $this = this;
            $.each(this.get("sites"), function(i, site) {
                $this.initSite(site);
                $this.initSite(site);
            });
        },
        //初始化站点
        initSite: function(site) {
            var siteID = "site-" + site.id;
            if ($(siteID).length == 0) {
                this.element.append("<div class='sr-point' id='" + siteID + "'></div>");
            }
            var $site = $("#" + siteID);
            //定位
            Position.pin({
                element: "#" + siteID,
                x: "center",
                y: "center"
            }, {
                element: this.element,
                x: site.point.x + "px",
                y: site.point.y + "px"
            });
            //绑定tip
            var siteTipID = "siteTip-" + site.id;
            var siteTip = new Atip({
                // 提示框
                // 触发器        
                trigger: "#" + siteID,
                // 提示框在触发器上方
                arrowPosition: 7,
                content: "<div id='" + siteTipID + "'>" + site.info + "</div>",
                inViewport: true
            });
        }
    });
    module.exports = Srposition;
});
