(function(e){function t(t){for(var r,i,o=t[0],u=t[1],l=t[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&f.push(c[i][0]),c[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/unrest-form/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var s=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,a,i){var o=Object(r["l"])("playground-form");return Object(r["h"])(),Object(r["c"])(o,{schema:a.schema},null,8,["schema"])}var a={class:"playground-form"},i={class:"playground-form__schema"},o=Object(r["f"])("div",null,"Form schema",-1),u={key:0,class:"alert alert-danger"},l={class:"playground-form__form"},s=Object(r["f"])("div",null,"Form",-1),d={class:"playground-result"},f=Object(r["f"])("div",null,"Form State",-1),m={class:"playground-result__body"};function h(e,t,n,c,h,p){var b=Object(r["l"])("ur-form");return Object(r["h"])(),Object(r["c"])("div",a,[Object(r["f"])("div",i,[o,Object(r["p"])(Object(r["f"])("textarea",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return h.text_schema=e})},null,512),[[r["o"],h.text_schema]]),h.error?(Object(r["h"])(),Object(r["c"])("div",u,Object(r["n"])(h.error.message),1)):Object(r["d"])("",!0)]),Object(r["f"])("div",l,[s,Object(r["f"])(b,Object(r["g"])(p.form_attrs,{onChange:p.sync}),null,16,["onChange"])]),Object(r["f"])("div",d,[f,Object(r["f"])("div",m,Object(r["n"])(h.text_state),1)])])}n("b0c0");var p={key:0,class:"form-error"},b=Object(r["f"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1);function O(e,t,n,c,a,i){var o=Object(r["l"])("Field");return Object(r["h"])(),Object(r["c"])("form",{onSubmit:t[1]||(t[1]=Object(r["q"])((function(){return i.submit&&i.submit.apply(i,arguments)}),["prevent"])),class:"ur-form"},[(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(i.fields,(function(e){return Object(r["h"])(),Object(r["c"])(o,{modelValue:n.state[e.name],"onUpdate:modelValue":function(t){return n.state[e.name]=t},key:e.id,field:e,change:i.change},null,8,["modelValue","onUpdate:modelValue","field","change"])})),128)),i.root_error?(Object(r["h"])(),Object(r["c"])("div",p,Object(r["n"])(i.root_error),1)):Object(r["d"])("",!0),Object(r["k"])(e.$slots,"actions",{},(function(){return[b]}))],32)}n("159b");var j=n("3835"),v=(n("d81d"),n("4fad"),n("fb6a"),function(e){return e.enum?"ur-select":"boolean"===e.type?"ur-checkbox":"image"===e.type?"ur-image":"color"===e.format?"ur-color":"ur-text"}),g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.entries(e.properties).map((function(e){var n=Object(j["a"])(e,2),r=n[0],c=Object.assign({},n[1]);c.name=r,c.id="id__".concat(c.name);var a={type:"text",tagName:v(c)};return c.ui=Object.assign(a,t[r],c.ui),"number"===c.type&&(c.ui.type="number"),c.title||(c.title=c.name[0].toUpperCase()+c.name.slice(1)),c}))},y=(n("a4d3"),n("e01a"),{class:"input-wrapper"}),_={key:1,class:"form-error"},V={key:2,class:"description"};function w(e,t,n,c,a,i){return"ur-hidden"!==n.field.ui.tagName?(Object(r["h"])(),Object(r["c"])("div",{key:0,class:i.css.root},[i.showLabel(n.field)?(Object(r["h"])(),Object(r["c"])("label",{key:0,for:n.field.id},Object(r["n"])(n.field.title),9,["for"])):Object(r["d"])("",!0),Object(r["f"])("div",y,[(Object(r["h"])(),Object(r["c"])(Object(r["m"])(n.field.ui.tagName),{field:n.field,modelValue:n.modelValue,"onUpdate:modelValue":t[1]||(t[1]=function(e){return n.change(n.field.name,e)})},null,8,["field","modelValue"]))]),i.error?(Object(r["h"])(),Object(r["c"])("div",_,Object(r["n"])(i.error),1)):n.field.description?(Object(r["h"])(),Object(r["c"])("div",V,Object(r["n"])(n.field.description),1)):Object(r["d"])("",!0)],2)):Object(r["d"])("",!0)}n("caad");function x(e,t,n,c,a,i){return Object(r["h"])(),Object(r["c"])("label",{class:i.css},[Object(r["f"])("input",{type:"checkbox",id:n.field.id,checked:n.modelValue,onChange:t[1]||(t[1]=function(){return i.onChange&&i.onChange.apply(i,arguments)})},null,40,["id","checked"]),Object(r["e"])(" "+Object(r["n"])(n.field.title),1)],2)}var k={props:{modelValue:null,field:Object},emits:["update:modelValue"],computed:{mixed:function(){return"mixed"===this.modelValue},css:function(){var e=this.mixed,t=this.field.disabled;return[this.field.ui.css,"ur-checkbox -"+this.icon,{"-mixed":e,"-disabled":t}]},icon:function(){return this.mixed?"indeterminate":this.modelValue?"checked":"unchecked"}},methods:{onChange:function(){this.field.disabled||this.$emit("update:modelValue",!this.modelValue)}}};k.render=x;var C=k,S=(n("1276"),n("ac1f"),{key:0,class:"original"}),N={class:"name"},F={key:1,class:"preview"},U={class:"name"},P={key:2,class:"btn -primary"};function A(e,t,n,c,a,i){return Object(r["h"])(),Object(r["c"])("label",{for:n.field.id,class:i.css},[Object(r["f"])("input",{style:{display:"none"},type:"file",id:n.field.id,onChange:t[1]||(t[1]=function(){return i.onChange&&i.onChange.apply(i,arguments)}),ref:"input"},null,40,["id"]),a.original?(Object(r["h"])(),Object(r["c"])("div",S,[Object(r["f"])("img",{src:a.original},null,8,["src"]),Object(r["f"])("div",N,Object(r["n"])(a.original.split("/").pop()),1)])):Object(r["d"])("",!0),a.preview?(Object(r["h"])(),Object(r["c"])("div",F,[Object(r["f"])("img",{src:a.preview.dataURL},null,8,["src"]),Object(r["f"])("div",U,[Object(r["e"])(Object(r["n"])(a.preview.name)+" ",1),a.preview?(Object(r["h"])(),Object(r["c"])("button",{key:0,onClick:t[2]||(t[2]=Object(r["q"])((function(){return i.clear&&i.clear.apply(i,arguments)}),["prevent"]))},"Clear")):Object(r["d"])("",!0)])])):(Object(r["h"])(),Object(r["c"])("div",P," Choose File "))],10,["for"])}var $={props:{modelValue:null,field:Object},emits:["update:modelValue"],data:function(){return{preview:null,original:this.modelValue}},computed:{css:function(){var e,t;return[null===(e=this.field)||void 0===e||null===(t=e.ui)||void 0===t?void 0:t.css,"ur-file"]}},methods:{clear:function(){this.$refs.input.value=null,this.preview=null},onChange:function(){var e=this,t=this.$refs.input.files[0],n=new FileReader;n.addEventListener("load",(function(){e.preview={dataURL:n.result,name:t.name},e.$emit("update:modelValue",e.preview)}),!1),t&&n.readAsDataURL(t)}}};$.render=A;var E=$,L={class:"ur-range"},J={class:"ur-range__value"};function M(e,t,n,c,a,i){return Object(r["h"])(),Object(r["c"])("div",L,[Object(r["f"])("input",Object(r["g"])({type:"range"},i.inputAttrs,{onInput:t[1]||(t[1]=function(){return i.change&&i.change.apply(i,arguments)}),onChange:t[2]||(t[2]=function(){return i.change&&i.change.apply(i,arguments)}),value:n.modelValue}),null,16,["value"]),Object(r["f"])("div",J,Object(r["n"])(n.modelValue),1)])}n("a9e3");var R=n("88bc"),I=n.n(R),T={props:{field:Object,modelValue:Number},emits:["update:modelValue"],computed:{inputAttrs:function(){return I()(this.field.ui,["min","max","step"])}},methods:{change:function(e){this.$emit("update:modelValue",Number(e.target.value))}}};T.render=M;var q=T;function D(e,t,n,c,a,i){return Object(r["h"])(),Object(r["c"])("select",{onChange:t[1]||(t[1]=function(){return i.onChange&&i.onChange.apply(i,arguments)}),value:n.modelValue,id:n.field.id,class:"form-control"},[(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(i.choices,(function(e){return Object(r["h"])(),Object(r["c"])("option",{value:e.value,key:e.name},Object(r["n"])(e.name),9,["value"])})),128))],40,["value","id"])}var Y={props:{modelValue:null,field:Object,form:Object},emits:["update:modelValue"],computed:{choices:function(){var e=this.field.enumNames||this.field.enum;return this.field.enum.map((function(t,n){return{value:t,name:e[n]}}))}},methods:{onChange:function(e){this.$emit("update:modelValue",e.target.value)}}};Y.render=D;var z=Y;function B(e,t,n,c,a,i){return Object(r["h"])(),Object(r["c"])("input",Object(r["g"])(i.inputAttrs,{onInput:t[1]||(t[1]=function(){return i.onChange&&i.onChange.apply(i,arguments)}),class:"form-control"}),null,16)}var G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"number"===t.type?""===e?NaN:Number(e):e},H={props:{modelValue:null,field:Object},emits:["update:modelValue"],data:function(){return{showError:!1}},computed:{inputAttrs:function(){var e=I()(this.field,["name","disabled","placeholder","id"]);return e.value=this.modelValue,e.type=this.field.ui.type,e.class="form-control",e}},methods:{onChange:function(e){var t=G(e.target.value,this.field);"number"===this.field.type&&isNaN(t)||this.$emit("update:modelValue",t)}}};H.render=B;var K=H,Q={components:{UrCheckbox:C,UrImage:E,UrRange:q,UrSelect:z,UrText:K},inject:["ur_form"],props:{field:Object,form:Object,modelValue:null,change:Function},computed:{error:function(){var e;return null===(e=this.ur_form.errors)||void 0===e?void 0:e[this.field.name]},css:function(){return{root:["form-group form-group__".concat(this.field.name),{"-error":this.error}]}}},methods:{showLabel:function(e){return e.title&&!["ur-checkbox"].includes(e.ui.tagName)}}};Q.render=w;var W=Q,X={components:{Field:W},provide:function(){return{ur_form:this}},props:{schema:Object,uiSchema:Object,state:{type:Object,default:function(){return Object(r["i"])({})}},onSubmit:{type:Function,default:function(){}},onChange:{type:Function,default:function(){}},errors:Object},data:function(){return{error:null}},computed:{fields:function(){return g(this.schema,this.uiSchema)},root_error:function(){var e;return this.error||(null===(e=this.errors)||void 0===e?void 0:e.__all__)}},beforeMount:function(){var e=this.state,t=this.fields;t.forEach((function(t){e.hasOwnProperty(t.name)||(e[t.name]=t.default)}))},methods:{handleError:function(e){throw e},change:function(e,t){this.state[e]=t,this.onChange(this.state,{name:e,value:t})},submit:function(){this.error=void 0;try{var e;null===(e=this.onSubmit(this.state))||void 0===e||e.catch(this.handleError)}catch(t){this.handleError(t)}}}};X.render=O;var Z=X,ee={prepFields:g,install:function(e){e.component("ur-form",Z)}},te={props:{schema:Object,state:{type:Object,default:function(){return{}}}},data:function(){var e=JSON.stringify(this.schema,null,4);return{text_schema:e,current_schema:this.schema,error:null,text_state:null}},computed:{form_attrs:function(){var e=this.current_schema,t=this.state;return{schema:e,state:t}}},mounted:function(){this.sync()},watch:{text_schema:"sync"},methods:{sync:function(){this.error=null;try{var e=JSON.parse(this.text_schema);ee.prepFields(e),this.current_schema=e}catch(t){window.E=t,this.error=t}this.text_state=JSON.stringify(this.state,null,2)}}};te.render=h;var ne=te,re={type:"object",properties:{name:{type:"text"},color:{type:"text",enum:["red","green","blue"]},newsletter:{type:"boolean",title:"Sign up for our newsletter"},avatar:{type:"image",title:"Avatar",default:"https://i.imgur.com/YSPe6yA.jpg"},hidden:{type:"string",title:"Shouldn't see me",default:"Foo",ul:{tagName:"ur-hidden"}}}},ce={name:"App",components:{PlaygroundForm:ne},data:function(){return{schema:re}}};ce.render=c;var ae=ce,ie=(n("adcf"),Object(r["b"])(ae));ie.use(ee),ie.mount("#app")},adcf:function(e,t,n){}});
//# sourceMappingURL=app.b066708a.js.map