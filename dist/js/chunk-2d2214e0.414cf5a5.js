(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2214e0"],{ca7c:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-form"},[e("notifications",{attrs:{group:"foo",position:"top right"}}),t._m(0),e("div",{staticClass:"box mt-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("label",{staticClass:"mb-2 fw-medium"},[t._v("Title")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.req.title,expression:"req.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter title"},domProps:{value:t.req.title},on:{input:function(e){e.target.composing||t.$set(t.req,"title",e.target.value)}}}),e("div",[t.validation_errors["title"]?e("small",{staticClass:"text-danger size-12"},[t._v(" "+t._s(t.validation_errors.title[0])+" ")]):t._e()])]),e("div",{staticClass:"col-md-6"},[e("label",{staticClass:"mb-2 fw-medium"},[t._v("Status")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.req.status,expression:"req.status"}],staticClass:"form-control form-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.req,"status",e.target.multiple?a:a[0])}}},[e("option",{attrs:{value:""}},[t._v("Pilih status")]),e("option",{attrs:{value:"Aktif"}},[t._v("Aktif")]),e("option",{attrs:{value:"Tidak Aktif"}},[t._v("Tidak Aktif")])]),e("div",[t.validation_errors["title"]?e("small",{staticClass:"text-danger size-12"},[t._v(" "+t._s(t.validation_errors.title[0])+" ")]):t._e()])]),e("div",{staticClass:"col-md-12 mt-3"},[e("label",{staticClass:"mb-2 fw-medium"},[t._v("Image")]),e("div",{staticClass:"image-text",style:{"background-image":"url("+t.req.image+")"}},[e("div",{staticClass:"mt-4 ml-4"},[e("label",{staticClass:"upload-button single-image",attrs:{for:"image"}},[t._v(" Upload Gambar "),e("input",{attrs:{type:"file",id:"image"},on:{change:function(e){return t.changeImage()}}})])])])]),e("div",{staticClass:"col-md-12 mt-3"},[e("label",{staticClass:"mb-2 fw-medium"},[t._v("Description")]),e("textarea",{attrs:{id:"description"}}),e("div",[t.validation_errors["description"]?e("small",{staticClass:"text-danger size-12"},[t._v(" "+t._s(t.validation_errors.description[0])+" ")]):t._e()])])])]),e("div",{staticClass:"mt-3"},[e("button",{staticClass:"btn btn-primary px-5 me-3",on:{click:function(e){return t.updateArticle()}}},[t._v("Update")]),e("router-link",{class:{"":!0,active:"admin-article"==this.$route.name},attrs:{to:{name:"admin-article"}}},[e("a",{staticClass:"btn btn-outline-primary px-5"},[t._v(" Cancel ")])])],1)],1)},s=[function(){var t=this,e=t._self._c;return e("div",[e("h4",{staticClass:"fw-ekstra-bold mb-0"},[t._v(" Edit Article ")]),e("p",{staticClass:"mt-2 text-gray500"},[t._v(" Lorem ipsum dolor sit amet consectetur, ")])])}],r=a("3a75"),o=a("1157"),l=a.n(o),n={props:["id"],name:"admin-article-edit",data(){return{req:{title:"",image:"",description:"",status:""},validation_errors:[],is_changing_image:!1}},created(){this.getArticles()},mounted(){l()("#description").summernote({placeholder:"Enter description",tabsize:2,height:230})},methods:{getArticles(){r["a"].get("/article/"+this.$route.params.id,{headers:{token:""+localStorage.getItem("token")}}).then(t=>{var e=t.data.data;this.req=e,l()("#description").summernote("code",e.description)}).catch(t=>{console.log(t)})},updateArticle(){var t=l()("#image")[0].files[0],e=l()("#description").summernote("code"),a=new FormData;a.append("title",this.req.title),a.append("status",this.req.status),a.append("description",e),this.is_changing_image&&a.append("image",t),r["a"].post("article/update/"+this.$route.params.id,a,{headers:{token:""+localStorage.getItem("token")}}).then(t=>{var e=t.data;this.is_changing_image=!1,this.$notify({group:"foo",type:"success",title:"Success",text:"Data updated"}),1==e.success&&setTimeout(()=>window.location.href="/admin/article",1500)}).catch(t=>{this.validation_errors=t.response.data.data})},changeImage(){var t=new FileReader;t.onload=function(t){l()(".image-text").css("background-image","url("+t.target.result+")")},t.readAsDataURL(l()("#image")[0].files[0]),this.is_changing_image=!0}}},c=n,d=a("2877"),m=Object(d["a"])(c,i,s,!1,null,"44b8b56b",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d2214e0.414cf5a5.js.map