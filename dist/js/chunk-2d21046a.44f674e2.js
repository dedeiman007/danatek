(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21046a"],{b6cc:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container-form"},[s("notifications",{attrs:{group:"foo",position:"top right"}}),s("div",[s("div",{staticClass:"px-3 line d-block d-lg-none"}),s("h4",{staticClass:"fw-ekstra-bold mb-0"},[t._v(" List Review User ")]),s("p",{staticClass:"mt-2 text-gray500"},[t._v(" Lorem ipsum dolor sit amet consectetur, ")]),t.lists.length>0?[s("div",{staticClass:"modern-table-boxed mt-4"},[t._m(0),t._l(t.lists,(function(a,e){return s("div",{key:a.id,staticClass:"d-table-row"},[s("div",{staticClass:"d-table-cell"},[t._v(" "+t._s(e+1)+". ")]),s("div",{staticClass:"d-table-cell"},[t._v(" "+t._s(a.name)+" ")]),s("div",{staticClass:"d-table-cell"},[t._v(" "+t._s(a.mobile_phone)+" ")]),s("div",{staticClass:"d-table-cell"},[t._v(" "+t._s(a.email)+" ")]),s("div",{staticClass:"d-table-cell"},[t._v(" "+t._s(a.type)+" ")]),s("div",{staticClass:"d-table-cell"},[s("a",{staticClass:"text-dark",attrs:{href:"javascript:void(0)","data-bs-toggle":"tooltip","data-bs-placement":"top",title:a.message}},[s("u",[t._v(" Check Message ")])])])])}))],2)]:[t._m(1)]],2)],1)},l=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"d-table-row header"},[s("div",{staticClass:"d-table-cell",staticStyle:{width:"60px"}},[t._v(" No ")]),s("div",{staticClass:"d-table-cell"},[t._v(" Name ")]),s("div",{staticClass:"d-table-cell"},[t._v(" Mobile Phone ")]),s("div",{staticClass:"d-table-cell"},[t._v(" Email ")]),s("div",{staticClass:"d-table-cell"},[t._v(" Type ")]),s("div",{staticClass:"d-table-cell"},[t._v(" Message ")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"text-center mt-5"},[s("img",{attrs:{src:a("5c25"),width:"170",alt:""}}),s("h5",{staticClass:"mt-2 text-gray500 size-22"},[t._v(" No data ")])])}],i=a("3a75"),c=a("7b17"),d={name:"admin-contact",data(){return{lists:[]}},created(){this.getContactus()},mounted(){new c["a"](document.body,{selector:"[data-bs-toggle='tooltip']"})},methods:{getContactus(){i["a"].get("/contactus").then(t=>{var s=t.data.data;this.lists=s}).catch(t=>{console.log(t)})}}},o=d,n=a("2877"),r=Object(n["a"])(o,e,l,!1,null,null,null);s["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d21046a.44f674e2.js.map