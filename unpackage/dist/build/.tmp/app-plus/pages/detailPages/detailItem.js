(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detailPages/detailItem"],{"0ff9":function(e,t,i){"use strict";i.r(t);var s=i("4106"),n=i("a737");for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);var a,l=i("f0c5"),u=Object(l["a"])(n["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],a);t["default"]=u.exports},1241:function(e,t,i){"use strict";(function(e){i("5f6c"),i("921b");s(i("66fd"));var t=s(i("0ff9"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])},4106:function(e,t,i){"use strict";var s,n=function(){var e=this,t=e.$createElement;e._self._c},o=[];i.d(t,"b",function(){return n}),i.d(t,"c",function(){return o}),i.d(t,"a",function(){return s})},a737:function(e,t,i){"use strict";i.r(t);var s=i("eb33"),n=i.n(s);for(var o in s)"default"!==o&&function(e){i.d(t,e,function(){return s[e]})}(o);t["default"]=n.a},eb33:function(e,t,i){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={data:function(){return{itemDetail:{name:"校园卡招领",author:"网技小萃",avatar:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",imgUrlList:["https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"],pubTime:1579766216,text:"丢失了一张校园卡",keyWords:["天山堂","校园卡"],type:0},Fixtime:"",itemId:-1}},onLoad:function(t){this.itemId=t.ItemId,console.log(e(this.itemId," at pages\\detailPages\\detailItem.vue:77")),this.getItemDetail()},methods:{ViewImage:function(e){i.previewImage({urls:this.itemDetail.imgUrlList,current:e})},getItemDetail:function(){this.Fixtime=this.unixTimeToDateTime(this.itemDetail.pubTime)},unixTimeToDateTime:function(e){var t=new Date(1e3*e),i=t.getFullYear(),s=t.getMonth()+1,n=t.getDate();return i+"-"+(s<10?"0"+s:s)+"-"+(n<10?"0"+n:n)+" "+t.toTimeString().substr(0,8)}}};t.default=s}).call(this,i("0de9")["default"],i("6e42")["default"])}},[["1241","common/runtime","common/vendor"]]]);