(this.webpackJsonpecommerceapp=this.webpackJsonpecommerceapp||[]).push([[18],{554:function(r,i,t){"use strict";t.r(i),t.d(i,"amplify_button",(function(){return n})),t.d(i,"amplify_loading_spinner",(function(){return a})),t.d(i,"amplify_section",(function(){return l}));var o=t(29),e=(t(73),t(15),t(48),t(218)),n=function(){function r(r){var i=this;Object(o.k)(this,r),this.type="button",this.variant="button",this.disabled=!1,this.handleClick=function(r){if(i.handleButtonClick)i.handleButtonClick(r);else if(Object(e.e)(i.el)&&"submit"==i.type){var t=i.el.closest("form");if(!t){var o=i.el.closest("amplify-form-section");t=o&&o.shadowRoot.querySelector("form")}if(t){r.preventDefault();var n=document.createElement("button");n.type=i.type,n.style.display="none",t.appendChild(n),n.click(),n.remove()}}}}return r.prototype.render=function(){var r;return Object(o.i)("button",{class:(r={},r[this.variant]=!0,r),type:this.type,disabled:this.disabled,onClick:this.handleClick},"icon"===this.variant&&Object(o.i)("amplify-icon",{name:this.icon}),Object(o.i)("slot",null))},Object.defineProperty(r.prototype,"el",{get:function(){return Object(o.h)(this)},enumerable:!1,configurable:!0}),r}();n.style=":host{--background-color:var(--amplify-primary-color);--background-color-active:var(--amplify-primary-shade);--background-color-disable:var(--amplify-primary-tint);--color:var(--amplify-primary-contrast);--border-width:0;--border-color:initial;--border-style:initial;--link-color:var(--amplify-primary-color);--link-hover:var(--amplify-primary-tint);--link-active:var(--amplify-primary-shade);--text-transform:uppercase;--icon-fill:var(--amplify-white);--icon-height:1.25rem;--padding:1rem;--width:100%;width:var(--width);text-align:center}@media (min-width: 672px){:host{width:inherit}}.button{width:100%;min-width:153px;display:inline-block;margin-bottom:0;font-size:var(--amplify-text-sm);font-family:var(--amplify-font-family);font-weight:600;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;color:var(--color);padding:var(--padding);letter-spacing:0.75px;text-transform:var(--text-transform);background-color:var(--background-color);border-width:var(--border-width);border-color:var(--border-color);border-style:var(--border-style)}.button:active{opacity:1;background-color:var(--background-color-active)}.button:hover{opacity:0.8}.button:disabled{opacity:0.65;cursor:auto;background-color:var(--background-color-disable)}.icon{background-color:inherit;border:none;font:inherit;cursor:pointer;padding:var(--padding)}.icon amplify-icon{--icon-fill-color:var(--icon-fill);--height:var(--icon-height)}.anchor{color:var(--link-color);background-color:inherit;padding:0;border:none;font:inherit;cursor:pointer}.anchor:link{color:var(--link-color);text-decoration:none}.anchor:hover{color:var(--link-hover);text-decoration:underline}.anchor:active{color:var(--link-active);text-decoration:underline}";var a=function(){function r(r){Object(o.k)(this,r)}return r.prototype.render=function(){return Object(o.i)("amplify-icon",{class:"loading-spinner",name:"loading"})},r}();a.style=":host{--spinner-circle-fill:var(--amplify-smoke-white);--spinner-bar-fill:var(--amplify-primary-color);--width:0.875rem;--height:0.875rem}.loading-spinner svg{-webkit-animation:loading-spinner 1s linear infinite;animation:loading-spinner 1s linear infinite;width:var(--width);height:var(--height)}.loading-spinner svg #spinner-circle{fill:var(--spinner-circle-fill)}.loading-spinner svg #spinner-bar{fill:var(--spinner-bar-fill)}@-webkit-keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";var l=function(){function r(r){Object(o.k)(this,r),this.role="application"}return r.prototype.render=function(){return Object(o.i)("section",{class:"section",role:this.role},Object(o.i)("slot",null))},Object.defineProperty(r.prototype,"el",{get:function(){return Object(o.h)(this)},enumerable:!1,configurable:!0}),r}();l.style=":host{--font-family:var(--amplify-font-family);--background-color:var(--amplify-background-color)}.section{position:relative;margin-bottom:var(--margin-bottom, 20px);background-color:var(--background-color);padding:var(--padding, 35px 40px);text-align:left;display:inline-block;border-radius:var(--border-radius, 6px);-webkit-box-shadow:var(--box-shadow, 1px 1px 4px 0 rgba(0, 0, 0, 0.15));box-shadow:var(--box-shadow, 1px 1px 4px 0 rgba(0, 0, 0, 0.15));-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--font-family);width:100%;min-width:var(--min-width, 20rem)}@media (min-width: 672px){.section{width:var(--width, 28.75rem)}}"}}]);
//# sourceMappingURL=18.18e40f74.chunk.js.map