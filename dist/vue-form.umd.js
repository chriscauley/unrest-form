var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,r)=>t in e?__defProp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__spreadValues=(e,t)=>{for(var r in t||(t={}))__hasOwnProp.call(t,r)&&__defNormalProp(e,r,t[r]);if(__getOwnPropSymbols)for(var r of __getOwnPropSymbols(t))__propIsEnum.call(t,r)&&__defNormalProp(e,r,t[r]);return e},__spreadProps=(e,t)=>__defProps(e,__getOwnPropDescs(t));!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("vue"),require("jsonschema")):"function"==typeof define&&define.amd?define(["vue","jsonschema"],t):(e="undefined"!=typeof globalThis?globalThis:e||self)["@unrest/form"]=t(e.Vue,e.jsonschema)}(this,(function(e,t){"use strict";const r=e=>{const t={};return Object.entries(e).forEach((([e,n])=>{if(null==n||""===n)return;if(n.constructor!==Object)return void(t[e]=n);const o=r(n);Object.keys(o).length>0&&(t[e]=o)})),t};const n=(e,t)=>{if("object"===t.type){const r=e||{};return Object.entries(t.properties).forEach((([e,o])=>{var a;const i=n((null==(a=t.default)?void 0:a[e])||r[e],o);void 0!==i&&(r[e]=i)})),r}return e=e||t.default,["integer","number"].includes(t.type)?isNaN(Number(e))?e:Number(e):e};var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a={exports:{}};!function(e,t){var r="__lodash_hash_undefined__",n=9007199254740991,a="[object Arguments]",i="[object Boolean]",l="[object Date]",c="[object Function]",s="[object GeneratorFunction]",u="[object Map]",d="[object Number]",p="[object Object]",f="[object Promise]",h="[object RegExp]",m="[object Set]",_="[object String]",v="[object Symbol]",y="[object WeakMap]",b="[object ArrayBuffer]",g="[object DataView]",j="[object Float32Array]",k="[object Float64Array]",V="[object Int8Array]",w="[object Int16Array]",O="[object Int32Array]",B="[object Uint8Array]",C="[object Uint8ClampedArray]",x="[object Uint16Array]",A="[object Uint32Array]",N=/\w*$/,S=/^\[object .+?Constructor\]$/,E=/^(?:0|[1-9]\d*)$/,P={};P[a]=P["[object Array]"]=P[b]=P[g]=P[i]=P[l]=P[j]=P[k]=P[V]=P[w]=P[O]=P[u]=P[d]=P[p]=P[h]=P[m]=P[_]=P[v]=P[B]=P[C]=P[x]=P[A]=!0,P["[object Error]"]=P[c]=P[y]=!1;var $="object"==typeof o&&o&&o.Object===Object&&o,I="object"==typeof self&&self&&self.Object===Object&&self,D=$||I||Function("return this")(),F=t&&!t.nodeType&&t,U=F&&e&&!e.nodeType&&e,L=U&&U.exports===F;function T(e,t){return e.set(t[0],t[1]),e}function M(e,t){return e.add(t),e}function R(e,t,r,n){var o=-1,a=e?e.length:0;for(n&&a&&(r=e[++o]);++o<a;)r=t(r,e[o],o,e);return r}function q(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(r){}return t}function z(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function W(e,t){return function(r){return e(t(r))}}function G(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var H,Z=Array.prototype,J=Function.prototype,K=Object.prototype,Q=D["__core-js_shared__"],X=(H=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+H:"",Y=J.toString,ee=K.hasOwnProperty,te=K.toString,re=RegExp("^"+Y.call(ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ne=L?D.Buffer:void 0,oe=D.Symbol,ae=D.Uint8Array,ie=W(Object.getPrototypeOf,Object),le=Object.create,ce=K.propertyIsEnumerable,se=Z.splice,ue=Object.getOwnPropertySymbols,de=ne?ne.isBuffer:void 0,pe=W(Object.keys,Object),fe=Ue(D,"DataView"),he=Ue(D,"Map"),me=Ue(D,"Promise"),_e=Ue(D,"Set"),ve=Ue(D,"WeakMap"),ye=Ue(Object,"create"),be=qe(fe),ge=qe(he),je=qe(me),ke=qe(_e),Ve=qe(ve),we=oe?oe.prototype:void 0,Oe=we?we.valueOf:void 0;function Be(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ce(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function xe(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ae(e){this.__data__=new Ce(e)}function Ne(e,t){var r=We(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&Ge(e)}(e)&&ee.call(e,"callee")&&(!ce.call(e,"callee")||te.call(e)==a)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],n=r.length,o=!!n;for(var i in e)!t&&!ee.call(e,i)||o&&("length"==i||Me(i,n))||r.push(i);return r}function Se(e,t,r){var n=e[t];ee.call(e,t)&&ze(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function Ee(e,t){for(var r=e.length;r--;)if(ze(e[r][0],t))return r;return-1}function Pe(e,t,r,n,o,f,y){var S;if(n&&(S=f?n(e,o,f,y):n(e)),void 0!==S)return S;if(!Je(e))return e;var E=We(e);if(E){if(S=function(e){var t=e.length,r=e.constructor(t);t&&"string"==typeof e[0]&&ee.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!t)return function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(e,S)}else{var $=Te(e),I=$==c||$==s;if(He(e))return function(e,t){if(t)return e.slice();var r=new e.constructor(e.length);return e.copy(r),r}(e,t);if($==p||$==a||I&&!f){if(q(e))return f?e:{};if(S=function(e){return"function"!=typeof e.constructor||Re(e)?{}:(t=ie(e),Je(t)?le(t):{});var t}(I?{}:e),!t)return function(e,t){return De(e,Le(e),t)}(e,function(e,t){return e&&De(t,Ke(t),e)}(S,e))}else{if(!P[$])return f?e:{};S=function(e,t,r,n){var o=e.constructor;switch(t){case b:return Ie(e);case i:case l:return new o(+e);case g:return function(e,t){var r=t?Ie(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,n);case j:case k:case V:case w:case O:case B:case C:case x:case A:return function(e,t){var r=t?Ie(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,n);case u:return function(e,t,r){return R(t?r(z(e),!0):z(e),T,new e.constructor)}(e,n,r);case d:case _:return new o(e);case h:return function(e){var t=new e.constructor(e.source,N.exec(e));return t.lastIndex=e.lastIndex,t}(e);case m:return function(e,t,r){return R(t?r(G(e),!0):G(e),M,new e.constructor)}(e,n,r);case v:return a=e,Oe?Object(Oe.call(a)):{}}var a}(e,$,Pe,t)}}y||(y=new Ae);var D=y.get(e);if(D)return D;if(y.set(e,S),!E)var F=r?function(e){return function(e,t,r){var n=t(e);return We(e)?n:function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}(n,r(e))}(e,Ke,Le)}(e):Ke(e);return function(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););}(F||e,(function(o,a){F&&(o=e[a=o]),Se(S,a,Pe(o,t,r,n,a,e,y))})),S}function $e(e){return!(!Je(e)||(t=e,X&&X in t))&&(Ze(e)||q(e)?re:S).test(qe(e));var t}function Ie(e){var t=new e.constructor(e.byteLength);return new ae(t).set(new ae(e)),t}function De(e,t,r,n){r||(r={});for(var o=-1,a=t.length;++o<a;){var i=t[o],l=n?n(r[i],e[i],i,r,e):void 0;Se(r,i,void 0===l?e[i]:l)}return r}function Fe(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function Ue(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return $e(r)?r:void 0}Be.prototype.clear=function(){this.__data__=ye?ye(null):{}},Be.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},Be.prototype.get=function(e){var t=this.__data__;if(ye){var n=t[e];return n===r?void 0:n}return ee.call(t,e)?t[e]:void 0},Be.prototype.has=function(e){var t=this.__data__;return ye?void 0!==t[e]:ee.call(t,e)},Be.prototype.set=function(e,t){return this.__data__[e]=ye&&void 0===t?r:t,this},Ce.prototype.clear=function(){this.__data__=[]},Ce.prototype.delete=function(e){var t=this.__data__,r=Ee(t,e);return!(r<0)&&(r==t.length-1?t.pop():se.call(t,r,1),!0)},Ce.prototype.get=function(e){var t=this.__data__,r=Ee(t,e);return r<0?void 0:t[r][1]},Ce.prototype.has=function(e){return Ee(this.__data__,e)>-1},Ce.prototype.set=function(e,t){var r=this.__data__,n=Ee(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},xe.prototype.clear=function(){this.__data__={hash:new Be,map:new(he||Ce),string:new Be}},xe.prototype.delete=function(e){return Fe(this,e).delete(e)},xe.prototype.get=function(e){return Fe(this,e).get(e)},xe.prototype.has=function(e){return Fe(this,e).has(e)},xe.prototype.set=function(e,t){return Fe(this,e).set(e,t),this},Ae.prototype.clear=function(){this.__data__=new Ce},Ae.prototype.delete=function(e){return this.__data__.delete(e)},Ae.prototype.get=function(e){return this.__data__.get(e)},Ae.prototype.has=function(e){return this.__data__.has(e)},Ae.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Ce){var n=r.__data__;if(!he||n.length<199)return n.push([e,t]),this;r=this.__data__=new xe(n)}return r.set(e,t),this};var Le=ue?W(ue,Object):function(){return[]},Te=function(e){return te.call(e)};function Me(e,t){return!!(t=null==t?n:t)&&("number"==typeof e||E.test(e))&&e>-1&&e%1==0&&e<t}function Re(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||K)}function qe(e){if(null!=e){try{return Y.call(e)}catch(t){}try{return e+""}catch(t){}}return""}function ze(e,t){return e===t||e!=e&&t!=t}(fe&&Te(new fe(new ArrayBuffer(1)))!=g||he&&Te(new he)!=u||me&&Te(me.resolve())!=f||_e&&Te(new _e)!=m||ve&&Te(new ve)!=y)&&(Te=function(e){var t=te.call(e),r=t==p?e.constructor:void 0,n=r?qe(r):void 0;if(n)switch(n){case be:return g;case ge:return u;case je:return f;case ke:return m;case Ve:return y}return t});var We=Array.isArray;function Ge(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}(e.length)&&!Ze(e)}var He=de||function(){return!1};function Ze(e){var t=Je(e)?te.call(e):"";return t==c||t==s}function Je(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Ke(e){return Ge(e)?Ne(e):function(e){if(!Re(e))return pe(e);var t=[];for(var r in Object(e))ee.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)}e.exports=function(e){return Pe(e,!0,!0)}}(a,a.exports);var i=a.exports,l=e=>(e=e.replace(/([A-Z])/g," $1").toLowerCase().replace(/_/g," "))[0].toUpperCase()+e.slice(1);const c=["number","string","boolean"],s=e=>{if(null==e)return{};for(let t=0;t<c.length;t++)if(typeof e===c[t])return{default:e,type:c[t]};if(Array.isArray(e))return{type:"array",default:e,items:s(e[0])};if("lazy"===e.type){const t={};return Object.entries(e).forEach((([e,r])=>t[e]=s(r))),delete t.type,{type:"object",properties:t}}if(e.type)return e;throw"Unrecognized schema object for parseLazySchema"},u=e=>"hidden"===e.format||"HiddenInput"===e.__widget?"unrest-hidden":"date-time"===e.format?"unrest-date-time":"object"===e.type?"unrest-object":e.enum||e.getChoices?"unrest-select":"boolean"===e.type?"unrest-checkbox":"image"===e.type?"unrest-image":"password"===e.format?"unrest-password":"array"===e.type&&e.items.enum?"unrest-checkboxes":"unrest-text";var d=(e,t,{ui:r={}}={},n=[])=>("lazy"===(t=i(t)).type&&(t=s(t)),t.name=e,t.id=`id__${t.name}`,t.ui=((e,t)=>{const r={type:"text",tagName:u(e)};return"number"===e.type&&(r.type="number"),"password"===e.format&&(r.type="password"),"email"===e.format&&(r.type="email"),"color"===e.format&&(r.type="color"),Object.assign(r,t[e.name],e.ui)})(t,r),void 0===t.title&&(t.title=l(t.name)),t.__path=n.slice(),"__root"!==e&&t.__path.push(t.name),"object"===t.type&&t.default&&Object.entries(t.default).forEach((([e,r])=>{t.properties[e]&&!t.properties[e].default&&(t.properties[e].default=r)})),t);const p={provide(){return{ur_form:this}},props:{schema:Object,ui:Object,state:{type:Object,default:()=>e.reactive({})},onError:Function,onSubmit:Function,onChange:Function,onInput:Function,errors:Object,focus:{type:Boolean,default:()=>!0},onCancel:Function},emits:["error"],data:()=>({internal_errors:null,loading:!1}),computed:{computed_errors(){const e=__spreadValues(__spreadValues({},this.errors),this.internal_errors);return e.__all__&&(e.__root=e.__all__),e.__root&&!Array.isArray(e.__root)&&(e.__root=[e.__root]),e},prepped_schema(){return d("__root",this.schema)}},beforeMount(){n(this.state,this.prepped_schema)},mounted(){var e;this.focus&&(null==(e=this.$el.querySelector("input"))||e.focus())},methods:{setErrors(e){this.internal_errors=e,e&&this.$emit("error",e)},handleError(e){var t,r,n,o;throw this.loading=!1,e.message&&this.setErrors({__root:e.message||e}),(null==(r=null==(t=e.response)?void 0:t.data)?void 0:r.errors)&&this.setErrors(null==(o=null==(n=e.response)?void 0:n.data)?void 0:o.errors),e},change(e){var t;null==(t=this.onChange)||t.call(this,this.state,e)},input(e){var t;null==(t=this.onInput)||t.call(this,this.state,e)},submit(e){var n;if(!this.loading){if(this.setErrors(((e,n)=>{const o=t.validate(r(e),n);if(!o.errors.length)return null;const a={};return o.errors.forEach((({path:e,argument:t,message:r,name:n})=>{e=[...e,t],a[e.join(".")]="required"===n?"This field is required.":r})),a})(this.state,this.prepped_schema)),this.internal_errors)return console.error(this.state),void console.error(this.internal_errors);try{this.loading=!0,Promise.resolve(null==(n=this.onSubmit)?void 0:n.call(this,this.state,e)).then((e=>(this.loading=!1,e))).catch(this.handleError)}catch(o){this.handleError(o)}}}}},f={key:0,class:"ur-form__actions"},h=e.createVNode("button",{type:"submit",class:"btn -primary"},"Submit",-1);p.render=function(t,r,n,o,a,i){var l;const c=e.resolveComponent("unrest-field");return e.openBlock(),e.createBlock("form",{onSubmit:r[3]||(r[3]=e.withModifiers(((...e)=>i.submit&&i.submit(...e)),["prevent"])),class:["ur-form",t.loading&&"-loading"]},[e.createVNode(c,{modelValue:n.state,"onUpdate:modelValue":r[1]||(r[1]=e=>n.state=e),field:i.prepped_schema,key:i.prepped_schema.id,onChange:i.change,onInput:i.input},null,8,["modelValue","field","onChange","onInput"]),(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(null==(l=i.computed_errors)?void 0:l.__root,((t,r)=>(e.openBlock(),e.createBlock("div",{key:r,class:"form-error"},e.toDisplayString(t.message||t),1)))),128)),n.onSubmit?(e.openBlock(),e.createBlock("div",f,[e.renderSlot(t.$slots,"actions",{},(()=>[n.onCancel?(e.openBlock(),e.createBlock("div",{key:0,type:"cancel",class:"btn -secondary",onClick:r[2]||(r[2]=(...e)=>n.onCancel&&n.onCancel(...e))},"Cancel")):e.createCommentVNode("",!0),h,e.renderSlot(t.$slots,"extra_actions")]))])):e.createCommentVNode("",!0)],34)};const m={inject:["ur_form"],props:{field:Object,form:Object,modelValue:null},emits:["update:modelValue"],computed:{error(){var e;let t=null==(e=this.ur_form.internal_errors)?void 0:e[this.field.__path.join(".")];return Array.isArray(t)&&(t=t[0]),(null==t?void 0:t.message)&&(t=t.message),t},css(){return{root:[`form-group form-group__${this.field.name}`,{"-error":this.error}]}}},methods:{showLabel:e=>e.title&&"__root"!==e.name&&!["unrest-checkbox"].includes(e.ui.tagName)}},_={class:"input-wrapper"},v={key:1,class:"form-error"},y={key:2,class:"description"};m.render=function(t,r,n,o,a,i){return"unrest-hidden"!==n.field.ui.tagName?(e.openBlock(),e.createBlock("div",{key:0,class:i.css.root},[i.showLabel(n.field)?(e.openBlock(),e.createBlock("label",{key:0,for:n.field.id},e.toDisplayString(n.field.title),9,["for"])):e.createCommentVNode("",!0),e.createVNode("div",_,[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(n.field.ui.tagName),{field:n.field,modelValue:n.modelValue,"onUpdate:modelValue":r[1]||(r[1]=e=>t.$emit("update:modelValue",e))},null,8,["field","modelValue"]))]),i.error?(e.openBlock(),e.createBlock("div",v,e.toDisplayString(i.error),1)):n.field.description?(e.openBlock(),e.createBlock("div",y,e.toDisplayString(n.field.description),1)):e.createCommentVNode("",!0)],2)):e.createCommentVNode("",!0)};const b={props:{modelValue:null,field:Object},emits:["update:modelValue"],computed:{mixed(){return"mixed"===this.modelValue},css(){const{mixed:e}=this,{disabled:t}=this.field;return[this.field.ui.css,"ur-checkbox -"+this.icon,{"-mixed":e,"-disabled":t}]},icon(){return this.mixed?"indeterminate":this.modelValue?"checked":"unchecked"}},methods:{onChange(){this.field.disabled||this.$emit("update:modelValue",!this.modelValue)}}};b.render=function(t,r,n,o,a,i){return e.openBlock(),e.createBlock("label",{class:i.css},[e.createVNode("input",{type:"checkbox",id:n.field.id,checked:n.modelValue,onInput:r[1]||(r[1]=(...e)=>i.onChange&&i.onChange(...e)),name:n.field.name},null,40,["id","checked","name"]),e.createTextVNode(" "+e.toDisplayString(n.field.title),1)],2)};var g=(e,t={})=>Array.isArray(e)?((e,t={})=>{if(!t.type||"array"===t.type)return e;if("string"===t.type)return e.join(",");if("object"===t.type)return Object.fromEntries(e.map((e=>[e,!0])));throw`Unknow value "${e}" for field type "${t.type}"`})(e,t):"number"===t.type||"integer"===t.type?""===e?NaN:Number(e):"array"===t.type&&"string"==typeof e?e.split(t.delimiter||",").map((e=>e.trim())).filter(Boolean):e,j=e=>{var t,r;let n;if(e.getChoices)n=e.getChoices();else{const o=e.enum||(null==(t=e.items)?void 0:t.enum),a=e.enumNames||(null==(r=e.items)?void 0:r.enumNames)||o;n=o.map(((e,t)=>({value:e,name:a[t]})))}return e.placeholder&&n.unshift({name:e.placeholder,value:""}),n};const k=e=>(e||(e=[]),"string"==typeof e&&(e=e.split(",")),Array.isArray(e)||(e=Object.keys(e).filter((t=>e[t]))),e),V={props:{modelValue:null,field:Object},emits:["update:modelValue"],data(){return{internal_value:k(this.modelValue)}},computed:{choices(){const e=j(this.field),{disabled:t}=this.field;return e.forEach((e=>{var r;e.checked=null==(r=this.internal_value)?void 0:r.includes(e.value),e.class=["ur-checkbox",e.checked?"-checked":"-unchecked",t&&"-disabled"]})),e}},watch:{modelValue(){this.internal_value=k(this.modelValue)}},methods:{change(e){this.field.disabled||(this.internal_value.includes(e)?this.internal_value=this.internal_value.filter((t=>t!==e)):this.internal_value.push(e),this.$emit("update:modelValue",g(this.internal_value,this.field)))}}},w={class:"unrest-checkboxes"};let O;V.render=function(t,r,n,o,a,i){return e.openBlock(),e.createBlock("div",w,[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(i.choices,((t,r)=>(e.openBlock(),e.createBlock("label",{class:t.class,key:r},[e.createVNode("input",{type:"checkbox",checked:t.checked,onInput:()=>i.change(t.value),name:t.name},null,40,["checked","onInput","name"]),e.createTextVNode(" "+e.toDisplayString(t.name),1)],2)))),128))])};const B={props:{modelValue:String,field:Object},emits:["update:modelValue"],data(){return{internal_value:this.modelValue}},mounted(){if(!O&&!this.$.appContext.components["date-picker"])if(O=!0,this.$.appContext.components.datepicker)console.error('"datepicker" component should be registered as "date-picker"');else{const e="https://github.com/chriscauley/unrest-vue-form#datetime-fields";console.error(`Warning, unable to find vue date picker. See ${e}`)}},methods:{close(){var e;const{internal_value:t}=this;this.$emit("update:modelValue",(null==(e=null==t?void 0:t.toISOString)?void 0:e.call(t))||null);this.$el.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0}))}}},C={class:"unrest-datetime"};B.render=function(t,r,n,o,a,i){const l=e.resolveComponent("date-picker");return e.openBlock(),e.createBlock("div",C,[e.createVNode(l,{modelValue:a.internal_value,"onUpdate:modelValue":r[1]||(r[1]=e=>a.internal_value=e),onClosed:i.close},null,8,["modelValue","onClosed"])])};const x={props:{modelValue:null,field:Object},emits:["update:modelValue"],data(){return{original:this.modelValue}},computed:{name(){var e,t,r;return(null==(e=this.modelValue)?void 0:e.name)||(null==(r=null==(t=this.modelValue)?void 0:t.split)?void 0:r.call(t,"/").pop())},css(){var e,t;return[null==(t=null==(e=this.field)?void 0:e.ui)?void 0:t.css,"ur-file"]},src(){var e;return(null==(e=this.modelValue)?void 0:e.dataURL)||this.modelValue},required:()=>!1},methods:{set(e){this.$emit("update:modelValue",e);const t=document.createEvent("HTMLEvents");t.initEvent("change",!0,!0),this.$el.dispatchEvent(t)},onChange(e){const t=this.$refs.input.files[0];if(!t)return;const r=new FileReader;r.addEventListener("load",(()=>{const n={dataURL:r.result,name:t.name};this.$emit("update:modelValue",n),this.$refs.input.value="",this.$el.dispatchEvent(e)}),!1),r.readAsDataURL(t)}}},A={class:"name"},N=e.createVNode("div",{class:"btn -primary"}," Choose File ",-1);x.render=function(t,r,n,o,a,i){return e.openBlock(),e.createBlock("label",{for:n.field.id,class:i.css},[e.createVNode("input",{style:{display:"none"},type:"file",id:n.field.id,onChange:r[1]||(r[1]=e.withModifiers(((...e)=>i.onChange&&i.onChange(...e)),["stop"])),ref:"input"},null,40,["id"]),e.createVNode("div",null,[n.modelValue?(e.openBlock(),e.createBlock("img",{key:0,src:i.src},null,8,["src"])):e.createCommentVNode("",!0)]),e.createVNode("div",null,[e.createVNode("div",A,e.toDisplayString(i.name),1),a.original&&a.original!==n.modelValue?(e.openBlock(),e.createBlock("div",{key:0,class:"fa fa-undo cursor-pointer",onClick:r[2]||(r[2]=e.withModifiers((e=>i.set(a.original)),["prevent"])),title:"Revert to original value",role:"button"})):e.createCommentVNode("",!0),i.src&&!i.required?(e.openBlock(),e.createBlock("div",{key:1,class:"fa fa-trash",onClick:r[3]||(r[3]=e=>i.set(null))})):e.createCommentVNode("",!0),N])],10,["for"])};const S={inject:["ur_form"],props:{field:Object,modelValue:Object},computed:{children(){return Object.entries(this.field.properties).map((([e,t])=>d(e,t,this.ur_form,this.field.__path)))}}};S.render=function(t,r,n,o,a,i){const l=e.resolveComponent("unrest-field");return e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(i.children,(t=>(e.openBlock(),e.createBlock(l,{key:t.id,field:t,modelValue:n.modelValue[t.name],"onUpdate:modelValue":e=>n.modelValue[t.name]=e},null,8,["field","modelValue","onUpdate:modelValue"])))),128)};var E=9007199254740991,P="[object Arguments]",$="[object Function]",I="[object GeneratorFunction]",D="[object Symbol]",F="object"==typeof o&&o&&o.Object===Object&&o,U="object"==typeof self&&self&&self.Object===Object&&self,L=F||U||Function("return this")();function T(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function M(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}var R=Object.prototype,q=R.hasOwnProperty,z=R.toString,W=L.Symbol,G=R.propertyIsEnumerable,H=W?W.isConcatSpreadable:void 0,Z=Math.max;function J(e,t,r,n,o){var a=-1,i=e.length;for(r||(r=K),o||(o=[]);++a<i;){var l=e[a];t>0&&r(l)?t>1?J(l,t-1,r,n,o):M(o,l):n||(o[o.length]=l)}return o}function K(e){return X(e)||function(e){return function(e){return Y(e)&&function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=E}(e.length)&&!function(e){var t=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}(e)?z.call(e):"";return t==$||t==I}(e)}(e)}(e)&&q.call(e,"callee")&&(!G.call(e,"callee")||z.call(e)==P)}(e)||!!(H&&e&&e[H])}function Q(e){if("string"==typeof e||function(e){return"symbol"==typeof e||Y(e)&&z.call(e)==D}(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}var X=Array.isArray;function Y(e){return!!e&&"object"==typeof e}var ee,te,re=(ee=function(e,t){return null==e?{}:function(e,t){return function(e,t,r){for(var n=-1,o=t.length,a={};++n<o;){var i=t[n],l=e[i];r(l,i)&&(a[i]=l)}return a}(e=Object(e),t,(function(t,r){return r in e}))}(e,function(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}(J(t,1),Q))},te=Z(void 0===te?ee.length-1:te,0),function(){for(var e=arguments,t=-1,r=Z(e.length-te,0),n=Array(r);++t<r;)n[t]=e[te+t];t=-1;for(var o=Array(te+1);++t<te;)o[t]=e[t];return o[te]=n,T(ee,this,o)});const ne={props:{modelValue:null,field:Object},emits:["update:modelValue"],data(){return{showError:!1,value:this.modelValue}},computed:{inputAttrs(){const e=re(this.field,["name","disabled","placeholder","id","readOnly"]);return e.type=this.field.ui.type,e.class="form-control",e},textarea(){return"Textarea"===this.field.__widget}},watch:{modelValue(){this.value=this.modelValue}},methods:{onChange(){const e=g(this.value,this.field);"number"===this.field.type&&isNaN(e)||this.$emit("update:modelValue",e)}}};ne.render=function(t,r,n,o,a,i){return i.textarea?e.withDirectives((e.openBlock(),e.createBlock("textarea",e.mergeProps({key:0},i.inputAttrs,{"onUpdate:modelValue":r[1]||(r[1]=e=>a.value=e),onInput:r[2]||(r[2]=(...e)=>i.onChange&&i.onChange(...e))}),null,16)),[[e.vModelText,a.value]]):e.withDirectives((e.openBlock(),e.createBlock("input",e.mergeProps({key:1},i.inputAttrs,{"onUpdate:modelValue":r[3]||(r[3]=e=>a.value=e),onInput:r[4]||(r[4]=(...e)=>i.onChange&&i.onChange(...e))}),null,16)),[[e.vModelDynamic,a.value]])};const oe={mixins:[ne],data:()=>({show_password:!1}),computed:{iconClass(){return"input-group-append cursor-pointer fa fa-eye"+(this.show_password?"-slash":"")},type(){return this.show_password?"text":"password"}}},ae={class:"input-group"};oe.render=function(t,r,n,o,a,i){return e.openBlock(),e.createBlock("div",ae,[e.withDirectives(e.createVNode("input",e.mergeProps(t.inputAttrs,{onInput:r[1]||(r[1]=(...e)=>t.onChange&&t.onChange(...e)),"onUpdate:modelValue":r[2]||(r[2]=e=>t.value=e),class:"form-control",type:i.type}),null,16,["type"]),[[e.vModelDynamic,t.value]]),e.createVNode("i",{class:i.iconClass,onClick:r[3]||(r[3]=e=>a.show_password=!a.show_password)},null,2)])};const ie={props:{field:Object,modelValue:Number},emits:["update:modelValue"],computed:{inputAttrs(){return re(this.field.ui,["min","max","step"])}},methods:{change(e){this.$emit("update:modelValue",Number(e.target.value))}}},le={class:"ur-range"},ce={class:"ur-range__value"};ie.render=function(t,r,n,o,a,i){return e.openBlock(),e.createBlock("div",le,[e.createVNode("input",e.mergeProps({type:"range"},i.inputAttrs,{onInput:r[1]||(r[1]=(...e)=>i.change&&i.change(...e)),onChange:r[2]||(r[2]=(...e)=>i.change&&i.change(...e)),value:n.modelValue}),null,16,["value"]),e.createVNode("div",ce,e.toDisplayString(n.modelValue),1)])};const se={props:{modelValue:null,field:Object,form:Object},emits:["update:modelValue"],computed:{choices(){return j(this.field)}},methods:{onChange(e){const t=g(e.target.value,this.field);this.$emit("update:modelValue",t)}}};se.render=function(t,r,n,o,a,i){return e.openBlock(),e.createBlock("select",{onInput:r[1]||(r[1]=(...e)=>i.onChange&&i.onChange(...e)),value:n.modelValue,id:n.field.id,class:"form-control",disabled:n.field.disabled},[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(i.choices,(t=>(e.openBlock(),e.createBlock("option",{value:t.value,key:t.name},e.toDisplayString(t.name),9,["value"])))),128))],40,["value","id","disabled"])};const ue={Form:p,Field:m,Checkbox:b,Checkboxes:V,DateTime:B,Image:x,Object:S,Range:ie,Select:se,Text:ne,Password:oe},de=__spreadProps(__spreadValues({coerce:g,getChoices:j,prepField:d,parseLazySchema:s,plugin:{install:e=>{console.warn("DEPRACATED: app.use(UrForm) is now preferred"),e.use(de)}}},ue),{install:e=>{Object.entries(ue).forEach((([t,r])=>e.component("Unrest"+t,r)))}});return de}));
