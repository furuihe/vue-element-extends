(window["webpackJsonpVueElementExtends"]=window["webpackJsonpVueElementExtends"]||[]).push([["table-scroll"],{b8ba:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"生成数据中，请稍后...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[a("p",{staticStyle:{color:"red","font-size":"12px"}},[e._v("启用滚动渲染，可以非常流畅的支撑百万数据")]),a("p",{staticStyle:{color:"red","font-size":"12px"}},[e._v("出于性能考虑：不支持滚动动画；不支持显示默认的索引列；只支持固定行高的表格")]),a("div",{staticClass:"scroll0w-table-oper"},[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:e.exportCsvEvent}},[e._v("导出")])],1),a("elx-table",{ref:"elxTable",staticStyle:{width:"100%"},attrs:{border:"",data:e.list,config:{render:"scroll"}},on:{"update:data":function(t){e.list=t}}},[a("elx-table-column",{attrs:{type:"selection",width:"55"}}),a("elx-table-column",{attrs:{prop:"_index",label:"#",align:"center",width:"55"}}),a("elx-table-column",{attrs:{prop:"name",label:"名字","show-overflow-tooltip":""},scopedSlots:e._u([{key:"header",fn:function(t){return[a("i",{staticClass:"el-icon-question"}),e._v("名字\n      ")]}}])}),a("elx-table-column",{attrs:{prop:"date",label:"日期",formatter:e.formatterDate}}),a("elx-table-column",{attrs:{prop:"rate",label:"评分"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900"},model:{value:t.row.rate,callback:function(a){e.$set(t.row,"rate",a)},expression:"scope.row.rate"}})]}}])}),a("elx-table-column",{attrs:{prop:"updateTime",label:"更新时间",formatter:e.formatterDate}}),a("elx-table-column",{attrs:{prop:"createTime",label:"创建时间",formatter:e.formatterDate}})],1)],1)},l=[],o=a("0a0d"),r=a.n(o),i=(a("c5f6"),a("c695")),s=a.n(i),c={data:function(){return{loading:!1,list:[],formData:{name:null,sex:null,role:null}}},created:function(){this.findList()},methods:{findList:function(){var e=this;this.loading=!0,this.list=[];var t=Number(this.$route.params.number);setTimeout(function(){if(window["CACHE_LIST_".concat(t)])e.list=window["CACHE_LIST_".concat(t)].slice(0,t),e.loading=!1;else{var a=r()(),n=[],l=function l(){for(var o=0;o<4e3;o++)a+=5e3,n.push({_index:o+1,id:"".concat(1e4+o),name:"name_".concat(o),date:a,rate:o%4===0?4:o%3===0?3:o%2===0?2:1,updateTime:a,createTime:a});n.length>=t?(window["CACHE_LIST_".concat(t)]=n,e.list=n.slice(0,t),e.loading=!1):setTimeout(l,50)};l()}},500)},formatterDate:function(e,t,a,n){return s.a.toDateString(a,"yyyy-MM-dd HH:mm:ss")},exportCsvEvent:function(){this.$refs.elxTable.exportCsv()}},beforeRouteUpdate:function(e,t,a){a(),this.findList()}},d=c,u=(a("dd09"),a("2877")),f=Object(u["a"])(d,n,l,!1,null,null,null);t["default"]=f.exports},ca7a:function(e,t,a){},dd09:function(e,t,a){"use strict";var n=a("ca7a"),l=a.n(n);l.a}}]);