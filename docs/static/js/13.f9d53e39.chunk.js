(this.webpackJsonpecommerceapp=this.webpackJsonpecommerceapp||[]).push([[13],{574:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_s3_text",(function(){return p}));var r=n(29),o=n(60),a=n(13),i=n(219),c=n(15),u=(n(48),n(181),n(613)),l=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function c(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))},s=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},f=new o.a("S3Text"),p=function(){function e(e){Object(r.k)(this,e),this.contentType="text/*",this.level=i.a.Public,this.fallbackText=c.a.TEXT_FALLBACK_CONTENT}return e.prototype.watchHandler=function(){return l(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,this.load()];case 1:return e.sent(),[2]}}))}))},e.prototype.componentWillLoad=function(){return l(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,this.load()];case 1:return e.sent(),[2]}}))}))},e.prototype.load=function(){return l(this,void 0,void 0,(function(){var e,t,n,r,o,a,i,c,l,p,d;return s(this,(function(s){switch(s.label){case 0:return t=(e=this).path,n=e.textKey,r=e.body,o=e.contentType,a=e.level,i=e.track,c=e.identityId,n||t?(l=n||t,f.debug("loading "+l+"..."),r?[4,Object(u.e)(n,r,a,i,o,f)]:[3,2]):(f.debug("empty textKey and path"),[2]);case 1:s.sent(),s.label=2;case 2:return s.trys.push([2,4,,5]),p=this,[4,Object(u.a)(l,a,i,c,f)];case 3:return p.src=s.sent(),[3,5];case 4:throw d=s.sent(),f.debug(d),new Error(d);case 5:return[2]}}))}))},e.prototype.render=function(){return Object(r.i)("div",null,Object(r.i)("div",{class:"text-container"},this.src?Object(r.i)("pre",null,this.src):Object(r.i)("pre",null,a.a.get(this.fallbackText))))},Object.defineProperty(e,"watchers",{get:function(){return{textKey:["watchHandler"],body:["watchHandler"]}},enumerable:!1,configurable:!0}),e}();p.style=":host{--container-color:var(--amplify-smoke-white);--border-color:var(--amplify-light-grey);--font-size:var(--amplify-text-md);--text-color:var(--amplify-secondary-color)}.text-container{background-color:var(--container-color);border:1px solid var(--border-color);border-radius:5px;margin-bottom:10px}pre{display:block;margin:0.5rem 0;padding:0.5rem;line-height:1rem;max-height:50rem;font-size:var(--font-size);color:var(--text-color);word-break:break-all;overflow-y:scroll;overflow-x:auto}"},613:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return f}));var r=n(48),o=n(181),a=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function c(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))},i=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},c=new Set(["apng","bmp","gif","ico","cur","jpg","jpeg","jfif","pjpeg","pjp","png","svg","tif","tiff","webp"]),u=function(e,t){var n=e.name,r=e.size,o=e.type,a=encodeURI(n);return t&&((a="string"===typeof t?t:"function"===typeof t?t({name:n,size:r,type:o}):encodeURI(JSON.stringify(t)))||(a="empty_key")),a.replace(/\s/g,"_")},l=function(e,t,n,c,u){return a(void 0,void 0,void 0,(function(){var a,l;return i(this,(function(i){switch(i.label){case 0:if(!o.a||"function"!==typeof o.a.get)throw new Error(r.n);i.label=1;case 1:return i.trys.push([1,3,,4]),[4,o.a.get(e,{level:t,track:n,identityId:c})];case 2:return a=i.sent(),u.debug("Storage image get",a),[2,a];case 3:throw l=i.sent(),new Error(l);case 4:return[2]}}))}))},s=function(e,t,n,c,u){return a(void 0,void 0,void 0,(function(){var a,l;return i(this,(function(i){switch(i.label){case 0:if(!o.a||"function"!==typeof o.a.get)throw new Error(r.n);i.label=1;case 1:return i.trys.push([1,4,,5]),[4,o.a.get(e,{download:!0,level:t,track:n,identityId:c})];case 2:return a=i.sent(),u.debug(a),[4,(s=a.Body,new Promise((function(e,t){var n=new FileReader;n.onload=function(){e(n.result)},n.onerror=function(){t("Failed to read file!"),n.abort()},n.readAsText(s)})))];case 3:return[2,i.sent()];case 4:throw l=i.sent(),new Error(l);case 5:return[2]}var s}))}))},f=function(e,t,n,c,u,l){return a(void 0,void 0,void 0,(function(){var a,s;return i(this,(function(i){switch(i.label){case 0:if(!o.a||"function"!==typeof o.a.put)throw new Error(r.n);i.label=1;case 1:return i.trys.push([1,3,,4]),[4,o.a.put(e,t,{contentType:u,level:n,track:c})];case 2:return a=i.sent(),l.debug("Upload data",a),[3,4];case 3:throw s=i.sent(),new Error(s);case 4:return[2]}}))}))}}}]);
//# sourceMappingURL=13.f9d53e39.chunk.js.map