(window["webpackJsonpVueElementExtends"]=window["webpackJsonpVueElementExtends"]||[]).push([["table-scroll"],{b8ba:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"生成数据中，请稍后...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[a("p",{staticStyle:{color:"red","font-size":"12px"}},[e._v("启用滚动渲染，可以流畅的支撑海量数据")]),a("p",{staticStyle:{color:"red","font-size":"12px"}},[e._v("出于性能考虑：避免使用 data 双向绑定大数据，vue 监听会消耗大量性能，应该使用 reload 函数加载；不支持滚动动画；不支持动态行高；不支持树结构")]),a("elx-table",{ref:"elxTable",staticStyle:{width:"100%"},attrs:{border:"",config:{render:"scroll"}}},[a("elx-table-column",{attrs:{type:"selection",width:"55"}}),a("elx-table-column",{attrs:{type:"index",width:"100"}}),a("elx-table-column",{attrs:{prop:"name",label:"名字","min-width":"100","show-overflow-tooltip":""},scopedSlots:e._u([{key:"header",fn:function(t){return[a("i",{staticClass:"el-icon-question"}),e._v("名字\n      ")]}}])}),a("elx-table-column",{attrs:{prop:"date",width:"220",label:"日期",formatter:e.formatterDate}}),a("elx-table-column",{attrs:{prop:"rate",width:"220",label:"评分"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900"},model:{value:t.row.rate,callback:function(a){e.$set(t.row,"rate",a)},expression:"scope.row.rate"}})]}}])}),a("elx-table-column",{attrs:{prop:"updateTime",label:"更新时间",width:"200",formatter:e.formatterDate}}),a("elx-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"200",formatter:e.formatterDate}})],1)],1)},n=[],o=(a("c5f6"),a("c695")),r=a.n(o),i={data:function(){return{loading:!1,formData:{name:null,sex:null,role:null}}},created:function(){this.findList()},methods:{findList:function(){var e=this;this.loading=!0;var t=Number(this.$route.params.number);setTimeout(function(){e.$refs.elxTable.reload(window.CACHE_DATA_LIST.slice(0,t)),e.loading=!1},300)},formatterDate:function(e,t,a,l){return r.a.toDateString(a,"yyyy-MM-dd HH:mm:ss")},exportCsvEvent:function(){this.$refs.elxTable.exportCsv()}},beforeRouteUpdate:function(e,t,a){a(),this.findList()}},s=i,d=(a("dd09"),a("2877")),c=Object(d["a"])(s,l,n,!1,null,null,null);t["default"]=c.exports},ca7a:function(e,t,a){},dd09:function(e,t,a){"use strict";var l=a("ca7a"),n=a.n(l);n.a}}]);