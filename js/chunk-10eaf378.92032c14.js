(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10eaf378"],{6230:function(t,s,o){},"9b47":function(t,s,o){"use strict";var r=o("6230"),a=o.n(r);a.a},cf2a:function(t,s,o){"use strict";o.r(s);var r=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"OrderWrap"},[o("header",[o("router-link",{attrs:{to:"/storedetails"}},[o("i",{staticClass:"el-icon-arrow-left"})]),o("div",[t._v("确认订单")])],1),o("div",{staticClass:"adder",on:{click:t.site}},[o("i",{staticClass:"el-icon-location-outline"}),o("span",[t._v("请添加一个收货地址")]),o("i",{staticClass:"el-icon-arrow-right"})]),t._m(0),o("div",{staticClass:"fangshi"},[o("ul",[o("li",{on:{click:t.choose_payment}},[o("span",[t._v("支付方式")]),o("span",{staticStyle:{"font-size":".6rem",color:"#aaa"},on:{click:function(t){}}},[t._v("在线支付")]),o("i",{staticClass:"el-icon-arrow-right"})]),t._m(1)])]),o("div",{staticClass:"orderinfo"},[o("ul",[o("li",[o("img",{staticClass:"orderimg",attrs:{src:"https://elm.cangdu.org/img/"+this.shopinfo.image_path,alt:""}}),o("span",[t._v(t._s(this.shopinfo.name))])]),t._l(t.orderArr,(function(s,r){return o("li",{key:s._id},[o("span",[t._v(t._s(s.pro.name))]),o("span",{staticStyle:{color:"red"}},[t._v("x"+t._s(s.count))]),o("span",[t._v("￥"+t._s(s.pro.specfoods[0].price))])])})),t._m(2),t._m(3),o("li",[o("span",[t._v("订单￥"+t._s(t.total+23+4))]),o("span",{staticStyle:{color:"red"}},[t._v("待支付￥"+t._s(t.total+23+4))])])],2)]),o("div",{staticClass:"foot"},[o("p",[t._v("待支付￥"+t._s(t.total+23+4))]),o("p",[t._v("确认下单")])]),o("payment",{ref:"fo",attrs:{pay_choose:t.showmask}})],1)},a=[function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"time"},[o("span",{staticStyle:{"font-size":".8rem",color:"#333","font-weight":"700","padding-left":".3rem"}},[t._v("送达时间")]),o("div",{staticClass:"time-right"},[o("p",[t._v("尽快送达 | 预计 12:42")]),o("span",[t._v("蜂鸟专送")])])])},function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("li",[o("span",{staticStyle:{"font-size":".6rem",color:"#aaa"}},[t._v(" 红包")]),o("span",{staticStyle:{color:"#aaa"}},[t._v("暂时只在饿了么APP中支持")])])},function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("li",[o("span",[t._v("餐盒")]),o("span",[t._v("￥23")])])},function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("li",[o("span",[t._v("配送")]),o("span",[t._v("￥4")])])}],e={name:"order",data:function(){return{orderArr:[],pid:"",shopinfo:{},showmask:!1,shop:[]}},created:function(){var t=this;this.shop=JSON.parse(localStorage.getItem("shop")),this.orderArr=this.$route.query.proArr,console.log(this.orderArr),this.pid=this.$route.query.pid,this.axios.get("shopping/restaurant/"+this.shop.id).then((function(s){t.shopinfo=s})).catch((function(t){}))},computed:{total:function(){for(var t=0,s=0;s<this.orderArr.length;s++){var o=0;o=this.orderArr[s].count*this.orderArr[s].pro.specfoods[0].price,t+=o}return t}},methods:{choose_payment:function(){this.showmask=!this.showmask,console.log("这是订单页"+this.showmask)},site:function(){console.log(),this.$router.push({path:"/address"}).catch((function(t){}))}}},i=e,n=(o("9b47"),o("2877")),c=Object(n["a"])(i,r,a,!1,null,"5f38e22d",null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-10eaf378.92032c14.js.map