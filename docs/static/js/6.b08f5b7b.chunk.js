(this.webpackJsonpecommerceapp=this.webpackJsonpecommerceapp||[]).push([[6],{557:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_confirm_sign_in",(function(){return b})),n.d(t,"amplify_confirm_sign_up",(function(){return g})),n.d(t,"amplify_forgot_password",(function(){return F})),n.d(t,"amplify_require_new_password",(function(){return v})),n.d(t,"amplify_sign_in",(function(){return w})),n.d(t,"amplify_sign_up",(function(){return O})),n.d(t,"amplify_verify_contact",(function(){return _}));var r=n(29),i=n(13),a=n(60),s=n(52),o=n(73),u=n(138),l=n(15),h=n(48),c=n(218),d=n(614),p=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function s(e){try{u(r.next(e))}catch(t){a(t)}}function o(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}u((r=r.apply(e,t||[])).next())}))},f=function(e,t){var n,r,i,a,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(o){a=[6,o],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}},m=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var a=arguments[t],s=0,o=a.length;s<o;s++,i++)r[i]=a[s];return r},b=function(){function e(e){var t=this;Object(r.k)(this,e),this.handleSubmit=function(e){return t.confirm(e)},this.headerText=l.a.CONFIRM_SMS_CODE,this.submitButtonText=l.a.CONFIRM,this.handleAuthStateChange=c.d,this.formFields=[{type:"code",required:!0,handleInputChange:function(e){return t.handleCodeChange(e)}}],this.mfaOption=o.c.SMS,this.loading=!1}return e.prototype.componentWillLoad=function(){this.user&&this.user.challengeName===o.b.SoftwareTokenMFA&&(this.mfaOption=o.c.TOTP,this.headerText===l.a.CONFIRM_SMS_CODE&&(this.headerText=l.a.CONFIRM_TOTP_CODE))},e.prototype.handleCodeChange=function(e){this.code=e.target.value},e.prototype.confirm=function(e){return p(this,void 0,void 0,(function(){var t,n;return f(this,(function(r){switch(r.label){case 0:if(e&&e.preventDefault(),t=this.user.challengeName===o.b.SoftwareTokenMFA?o.b.SoftwareTokenMFA:null,!u.a||"function"!==typeof u.a.confirmSignIn)throw new Error(h.d);this.loading=!0,r.label=1;case 1:return r.trys.push([1,4,5,6]),[4,u.a.confirmSignIn(this.user,this.code,t)];case 2:return r.sent(),[4,Object(d.a)(this.user,this.handleAuthStateChange)];case 3:return r.sent(),[3,6];case 4:return n=r.sent(),Object(c.a)(n),[3,6];case 5:return this.loading=!1,[7];case 6:return[2]}}))}))},e.prototype.render=function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:i.a.get(this.headerText),handleSubmit:this.handleSubmit,submitButtonText:i.a.get(this.submitButtonText),loading:this.loading,secondaryFooterContent:Object(r.i)("span",null,Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.a.SignIn)}},i.a.get(l.a.BACK_TO_SIGN_IN)))},Object(r.i)("amplify-auth-fields",{formFields:this.formFields})))},e}(),g=function(){function e(e){var t=this;Object(r.k)(this,e),this.handleSubmit=function(e){return t.confirmSignUp(e)},this.headerText=l.a.CONFIRM_SIGN_UP_HEADER_TEXT,this.submitButtonText=l.a.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT,this.formFields=[],this.handleAuthStateChange=c.d,this.usernameAlias="username",this.loading=!1,this.userInput=this.user?this.user.username:null,this._signUpAttrs=this.user&&this.user.signUpAttrs?this.user.signUpAttrs:null,this.newFormFields=[],this.phoneNumber={countryDialCodeValue:h.q,phoneNumberValue:null}}return e.prototype.componentWillLoad=function(){Object(c.c)(this.usernameAlias),this.buildFormFields()},e.prototype.formFieldsHandler=function(){this.buildFormFields()},e.prototype.buildDefaultFormFields=function(){var e=this;this.newFormFields=[{type:""+this.usernameAlias,required:!0,handleInputChange:this.handleFormFieldInputChange(""+this.usernameAlias),value:this.userInput,disabled:!!this.userInput},{type:"code",label:i.a.get(l.a.CONFIRM_SIGN_UP_CODE_LABEL),placeholder:i.a.get(l.a.CONFIRM_SIGN_UP_CODE_PLACEHOLDER),required:!0,hint:Object(r.i)("div",null,i.a.get(l.a.CONFIRM_SIGN_UP_LOST_CODE)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.resendConfirmCode()}},i.a.get(l.a.CONFIRM_SIGN_UP_RESEND_CODE))),handleInputChange:this.handleFormFieldInputChange("code")}]},e.prototype.buildFormFields=function(){var e=this;if(0===this.formFields.length)this.buildDefaultFormFields();else{var t=[];this.formFields.forEach((function(n){var a=Object.assign({},n);"code"===a.type&&(a.hint=Object(c.g)(a)?Object(r.i)("div",null,i.a.get(l.a.CONFIRM_SIGN_UP_LOST_CODE)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.resendConfirmCode()}},i.a.get(l.a.CONFIRM_SIGN_UP_RESEND_CODE))):a.hint),a.handleInputChange=function(t){return e.handleFormFieldInputWithCallback(t,n)},t.push(a)})),this.newFormFields=t}},e.prototype.handleFormFieldInputChange=function(e){var t=this;switch(e){case"username":case"email":return function(e){return t.userInput=e.target.value};case"phone_number":return function(e){return Object(c.f)(e,t.phoneNumber)};case"code":return function(e){return t.code=e.target.value};default:return}},e.prototype.setFieldValue=function(e){switch(e.type){case"username":case"email":void 0===e.value?this.userInput="":this.userInput=e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value}},e.prototype.handleFormFieldInputWithCallback=function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))},e.prototype.resendConfirmCode=function(){return p(this,void 0,void 0,(function(){var e;return f(this,(function(t){switch(t.label){case 0:if(event&&event.preventDefault(),!u.a||"function"!==typeof u.a.resendSignUp)throw new Error(h.d);t.label=1;case 1:if(t.trys.push([1,3,,4]),!this.userInput)throw new Error("Username can not be empty");return[4,u.a.resendSignUp(this.userInput)];case 2:return t.sent(),this.handleAuthStateChange(o.a.ConfirmSignUp),[3,4];case 3:return e=t.sent(),Object(c.a)(e),[3,4];case 4:return[2]}}))}))},e.prototype.confirmSignUp=function(e){return p(this,void 0,void 0,(function(){var t;return f(this,(function(n){switch(n.label){case 0:if(e&&e.preventDefault(),!u.a||"function"!==typeof u.a.confirmSignUp)throw new Error(h.d);switch(this.loading=!0,this.usernameAlias){case"phone_number":try{this.userInput=Object(c.b)(this.phoneNumber)}catch(r){Object(c.a)(r)}}n.label=1;case 1:return n.trys.push([1,6,7,8]),[4,u.a.confirmSignUp(this.userInput,this.code)];case 2:if(!n.sent())throw new Error(i.a.get(l.a.CONFIRM_SIGN_UP_FAILED));return this._signUpAttrs&&this._signUpAttrs.password&&""!==this._signUpAttrs.password?[4,Object(d.b)(this.userInput,this._signUpAttrs.password,this.handleAuthStateChange)]:[3,4];case 3:return n.sent(),[3,5];case 4:this.handleAuthStateChange(o.a.SignIn),n.label=5;case 5:return[3,8];case 6:return t=n.sent(),Object(c.a)(t),[3,8];case 7:return this.loading=!1,[7];case 8:return[2]}}))}))},e.prototype.render=function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:i.a.get(this.headerText),submitButtonText:i.a.get(this.submitButtonText),handleSubmit:this.handleSubmit,secondaryFooterContent:Object(r.i)("div",null,Object(r.i)("span",null,Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.a.SignIn)}},i.a.get(l.a.BACK_TO_SIGN_IN))))},Object(r.i)("amplify-auth-fields",{formFields:this.newFormFields})))},Object.defineProperty(e,"watchers",{get:function(){return{formFields:["formFieldsHandler"]}},enumerable:!1,configurable:!0}),e}(),y=new a.a("ForgotPassword"),F=function(){function e(e){var t=this;Object(r.k)(this,e),this.headerText=l.a.RESET_YOUR_PASSWORD,this.sendButtonText=l.a.SEND_CODE,this.submitButtonText=l.a.SUBMIT,this.formFields=[],this.handleSend=function(e){return t.send(e)},this.handleSubmit=function(e){return t.submit(e)},this.handleAuthStateChange=c.d,this.usernameAlias="username",this.delivery=null,this.loading=!1,this.phoneNumber={countryDialCodeValue:h.q,phoneNumberValue:null},this.newFormFields=[],this.forgotPasswordAttrs={userInput:"",password:"",code:""}}return e.prototype.componentWillLoad=function(){Object(c.c)(this.usernameAlias),this.buildFormFields()},e.prototype.formFieldsHandler=function(){this.buildFormFields()},e.prototype.buildFormFields=function(){var e=this;0===this.formFields.length?this.buildDefaultFormFields():this.formFields.forEach((function(t){var n=Object.assign({},t);n.handleInputChange=function(n){return e.handleFormFieldInputWithCallback(n,t)},e.newFormFields.push(n)}))},e.prototype.buildDefaultFormFields=function(){switch(this.usernameAlias){case"email":this.newFormFields=[{type:"email",required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"forgot-password-email-input"}}];break;case"phone_number":this.newFormFields=[{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"forgot-password-phone-number-input"}}];break;case"username":default:this.newFormFields=[{type:"username",required:!0,handleInputChange:this.handleFormFieldInputChange("username"),inputProps:{"data-test":"forgot-password-username-input"}}]}},e.prototype.handleFormFieldInputChange=function(e){var t=this;switch(e){case"username":case"email":return function(e){return t.forgotPasswordAttrs.userInput=e.target.value};case"phone_number":return function(e){return Object(c.f)(e,t.phoneNumber)};case"password":case"code":return function(n){return t.forgotPasswordAttrs[e]=n.target.value};default:return}},e.prototype.setFieldValue=function(e,t){switch(e.type){case"username":case"email":void 0===e.value?t.userInput="":t.userInput=e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value;break;case"password":case"code":void 0===e.value?t[e.type]="":t[e.type]=e.value}},e.prototype.handleFormFieldInputWithCallback=function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))},e.prototype.send=function(e){return p(this,void 0,void 0,(function(){var t,n;return f(this,(function(r){switch(r.label){case 0:if(e&&e.preventDefault(),!u.a||"function"!==typeof u.a.forgotPassword)throw new Error(h.d);switch(this.loading=!0,this.usernameAlias){case"phone_number":try{this.forgotPasswordAttrs.userInput=Object(c.b)(this.phoneNumber)}catch(a){Object(c.a)(a)}}r.label=1;case 1:return r.trys.push([1,3,4,5]),[4,u.a.forgotPassword(this.forgotPasswordAttrs.userInput)];case 2:return t=r.sent(),y.debug(t),this.newFormFields=[{type:"code",required:!0,handleInputChange:this.handleFormFieldInputChange("code"),inputProps:{"data-test":"forgot-password-code-input"}},{type:"password",required:!0,handleInputChange:this.handleFormFieldInputChange("password"),label:i.a.get(l.a.NEW_PASSWORD_LABEL),placeholder:i.a.get(l.a.NEW_PASSWORD_PLACEHOLDER)}],this.delivery=t.CodeDeliveryDetails,[3,5];case 3:return n=r.sent(),Object(c.a)(n),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},e.prototype.submit=function(e){return p(this,void 0,void 0,(function(){var t,n,r,i,a,s;return f(this,(function(l){switch(l.label){case 0:if(e&&e.preventDefault(),!u.a||"function"!==typeof u.a.forgotPasswordSubmit)throw new Error(h.d);this.loading=!0,l.label=1;case 1:return l.trys.push([1,3,4,5]),t=this.forgotPasswordAttrs,n=t.userInput,r=t.code,i=t.password,[4,u.a.forgotPasswordSubmit(n,r,i)];case 2:return a=l.sent(),y.debug(a),this.handleAuthStateChange(o.a.SignIn),this.delivery=null,[3,5];case 3:return s=l.sent(),Object(c.a)(s),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},e.prototype.render=function(){var e=this,t=this.delivery?function(t){return e.handleSubmit(t)}:function(t){return e.handleSend(t)},n=this.delivery?this.submitButtonText:this.sendButtonText;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:i.a.get(this.headerText),handleSubmit:t,loading:this.loading,secondaryFooterContent:Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.a.SignIn)},"data-test":"forgot-password-back-to-sign-in-link"},i.a.get(l.a.BACK_TO_SIGN_IN)),testDataPrefix:"forgot-password",submitButtonText:i.a.get(n)},Object(r.i)("amplify-auth-fields",{formFields:this.newFormFields})))},Object.defineProperty(e,"watchers",{get:function(){return{formFields:["formFieldsHandler"]}},enumerable:!1,configurable:!0}),e}(),C=new a.a("amplify-require-new-password"),v=function(){function e(e){var t=this;Object(r.k)(this,e),this.headerText=l.a.CHANGE_PASSWORD,this.submitButtonText=l.a.CHANGE_PASSWORD_ACTION,this.handleSubmit=function(e){return t.completeNewPassword(e)},this.handleAuthStateChange=c.d,this.formFields=[{type:o.e.Password,required:!0,handleInputChange:function(e){return t.handlePasswordChange(e)},label:i.a.get(l.a.NEW_PASSWORD_LABEL),placeholder:i.a.get(l.a.NEW_PASSWORD_PLACEHOLDER),inputProps:{"data-test":"require-new-password-password-input"}}],this.currentUser=this.user,this.loading=!1,this.requiredAttributes={},this.newFormFields=this.formFields}return e.prototype.handleRequiredAttributeInputChange=function(e,t){this.requiredAttributes[e]=t.target.value},e.prototype.componentWillLoad=function(){return p(this,void 0,void 0,(function(){var e,t,n=this;return f(this,(function(r){switch(r.label){case 0:if(this.user)return[3,4];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,u.a.currentAuthenticatedUser()];case 2:return(e=r.sent())&&(this.currentUser=e),[3,4];case 3:return t=r.sent(),Object(c.a)(t),[3,4];case 4:return this.currentUser&&this.currentUser.challengeParam.requiredAttributes&&this.currentUser.challengeParam.requiredAttributes.forEach((function(e){var t={type:e,required:!0,label:c.i[e].label,placeholder:c.i[e].placeholder,handleInputChange:function(t){return n.handleRequiredAttributeInputChange(e,t)},inputProps:{"data-test":"require-new-password-"+e+"-input"}};n.newFormFields.push(t)})),[2]}}))}))},e.prototype.handlePasswordChange=function(e){this.password=e.target.value},e.prototype.completeNewPassword=function(e){return p(this,void 0,void 0,(function(){var t,n;return f(this,(function(r){switch(r.label){case 0:if(e&&e.preventDefault(),!u.a||"function"!==typeof u.a.completeNewPassword)throw new Error(h.d);this.loading=!0,r.label=1;case 1:return r.trys.push([1,8,9,10]),[4,u.a.completeNewPassword(this.currentUser,this.password,this.requiredAttributes)];case 2:switch(t=r.sent(),C.debug("complete new password",t),t.challengeName){case o.b.SMSMFA:return[3,3];case o.b.MFASetup:return[3,4]}return[3,5];case 3:return this.handleAuthStateChange(o.a.ConfirmSignIn,t),[3,7];case 4:return C.debug("TOTP setup",t.challengeParam),this.handleAuthStateChange(o.a.TOTPSetup,t),[3,7];case 5:return[4,Object(d.a)(t,this.handleAuthStateChange)];case 6:r.sent(),r.label=7;case 7:return[3,10];case 8:return n=r.sent(),Object(c.a)(n),[3,10];case 9:return this.loading=!1,[7];case 10:return[2]}}))}))},e.prototype.render=function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:i.a.get(this.headerText),handleSubmit:this.handleSubmit,loading:this.loading,secondaryFooterContent:Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.a.SignIn)}},i.a.get(l.a.BACK_TO_SIGN_IN)),submitButtonText:i.a.get(this.submitButtonText)},Object(r.i)("amplify-auth-fields",{formFields:this.newFormFields})))},e}(),w=function(){function e(e){var t=this;Object(r.k)(this,e),this.handleSubmit=function(e){return t.signIn(e)},this.headerText=l.a.SIGN_IN_HEADER_TEXT,this.submitButtonText=l.a.SIGN_IN_ACTION,this.handleAuthStateChange=c.d,this.usernameAlias="username",this.formFields=[],this.hideSignUp=!1,this.newFormFields=[],this.loading=!1,this.phoneNumber={countryDialCodeValue:h.q,phoneNumberValue:null},this.signInAttributes={userInput:"",password:""}}return e.prototype.componentWillLoad=function(){Object(c.c)(this.usernameAlias),this.buildFormFields()},e.prototype.formFieldsHandler=function(){this.buildFormFields()},e.prototype.handleFormFieldInputChange=function(e){var t=this;switch(e){case"username":case"email":return function(e){return t.signInAttributes.userInput=e.target.value};case"phone_number":return function(e){return Object(c.f)(e,t.phoneNumber)};case"password":return function(e){return t.signInAttributes.password=e.target.value}}},e.prototype.handleFormFieldInputWithCallback=function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))},e.prototype.signIn=function(e){return p(this,void 0,void 0,(function(){return f(this,(function(t){switch(t.label){case 0:switch(e&&e.preventDefault(),this.loading=!0,this.usernameAlias){case"phone_number":try{this.signInAttributes.userInput=Object(c.b)(this.phoneNumber)}catch(n){Object(c.a)(n)}}return[4,Object(d.b)(this.signInAttributes.userInput,this.signInAttributes.password,this.handleAuthStateChange)];case 1:return t.sent(),this.loading=!1,[2]}}))}))},e.prototype.buildDefaultFormFields=function(){var e=this,t=[];switch(this.usernameAlias){case"email":t.push({type:"email",required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-in-email-input"}});break;case"phone_number":t.push({type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-in-phone-number-input"}});break;case"username":default:t.push({type:"username",required:!0,handleInputChange:this.handleFormFieldInputChange("username"),inputProps:{"data-test":"sign-in-username-input"}})}t.push({type:"password",hint:Object(r.i)("div",null,i.a.get(l.a.FORGOT_PASSWORD_TEXT)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.a.ForgotPassword)},"data-test":"sign-in-forgot-password-link"},i.a.get(l.a.RESET_PASSWORD_TEXT))),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-in-password-input"}}),this.newFormFields=m(t)},e.prototype.buildFormFields=function(){var e=this;if(0===this.formFields.length)this.buildDefaultFormFields();else{var t=[];this.formFields.forEach((function(n){var a=Object.assign({},n);"password"===a.type&&(a.hint=Object(c.g)(a)?Object(r.i)("div",null,i.a.get(l.a.FORGOT_PASSWORD_TEXT)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.a.ForgotPassword)},"data-test":"sign-in-forgot-password-link"},i.a.get(l.a.RESET_PASSWORD_TEXT))):a.hint),a.handleInputChange=function(t){return e.handleFormFieldInputWithCallback(t,n)},e.setFieldValue(a,e.signInAttributes),t.push(a)})),this.newFormFields=t}},e.prototype.setFieldValue=function(e,t){switch(e.type){case"username":case"email":void 0===e.value?t.userInput="":t.userInput=e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value;break;case"password":void 0===e.value?t.password="":t.password=e.value}},e.prototype.render=function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:i.a.get(this.headerText),handleSubmit:this.handleSubmit,testDataPrefix:"sign-in"},Object(r.i)("div",{slot:"subtitle"},Object(r.i)("slot",{name:"header-subtitle"})),Object(r.i)("slot",{name:"federated-buttons"},Object(r.i)("amplify-federated-buttons",{handleAuthStateChange:this.handleAuthStateChange,federated:this.federated})),!Object(s.d)(this.federated)&&Object(r.i)("amplify-strike",null,"or"),Object(r.i)("amplify-auth-fields",{formFields:this.newFormFields}),Object(r.i)("div",{slot:"amplify-form-section-footer",class:"sign-in-form-footer"},Object(r.i)("slot",{name:"footer"},Object(r.i)("slot",{name:"secondary-footer-content"},this.hideSignUp?Object(r.i)("span",null):Object(r.i)("span",null,i.a.get(l.a.NO_ACCOUNT_TEXT)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.a.SignUp)},"data-test":"sign-in-create-account-link"},i.a.get(l.a.CREATE_ACCOUNT_TEXT)))),Object(r.i)("slot",{name:"primary-footer-content"},Object(r.i)("amplify-button",{type:"submit",disabled:this.loading,"data-test":"sign-in-sign-in-button"},this.loading?Object(r.i)("amplify-loading-spinner",null):Object(r.i)("span",null,i.a.get(this.submitButtonText))))))))},Object.defineProperty(e,"watchers",{get:function(){return{formFields:["formFieldsHandler"]}},enumerable:!1,configurable:!0}),e}();w.style=":host{--footer-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--footer-font-family:var(--amplify-font-family);--font-weight:var(--amplify-font-weight)}.sign-in-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-in-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-in-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-in-form-footer amplify-button{margin-bottom:0}}.sign-in-form-footer *+*{margin-bottom:15px}";var O=function(){function e(e){var t=this;Object(r.k)(this,e),this.handleSubmit=function(e){return t.signUp(e)},this.headerText=l.a.SIGN_UP_HEADER_TEXT,this.submitButtonText=l.a.SIGN_UP_SUBMIT_BUTTON_TEXT,this.haveAccountText=l.a.SIGN_UP_HAVE_ACCOUNT_TEXT,this.signInText=l.a.SIGN_IN_TEXT,this.formFields=[],this.handleAuthStateChange=c.d,this.usernameAlias="username",this.newFormFields=[],this.phoneNumber={countryDialCodeValue:h.q,phoneNumberValue:null},this.loading=!1,this.signUpAttributes={username:"",password:"",attributes:{}}}return e.prototype.handleFormFieldInputChange=function(e){var t=this;switch(e){case"username":return function(e){return t.signUpAttributes.username=e.target.value};case"password":return function(e){return t.signUpAttributes.password=e.target.value};case"email":return function(e){return t.signUpAttributes.attributes.email=e.target.value};case"phone_number":return function(e){return Object(c.f)(e,t.phoneNumber)};default:return function(n){return t.signUpAttributes.attributes[e]=n.target.value}}},e.prototype.handleFormFieldInputWithCallback=function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))},e.prototype.signUp=function(e){return p(this,void 0,void 0,(function(){var t,n,r;return f(this,(function(i){switch(i.label){case 0:if(e&&e.preventDefault(),!u.a||"function"!==typeof u.a.signUp)throw new Error(h.d);if(this.phoneNumber.phoneNumberValue)try{this.signUpAttributes.attributes.phone_number=Object(c.b)(this.phoneNumber)}catch(a){Object(c.a)(a)}switch(this.usernameAlias){case"email":case"phone_number":this.signUpAttributes.username=this.signUpAttributes.attributes[this.usernameAlias]}i.label=1;case 1:return i.trys.push([1,6,,7]),[4,u.a.signUp(this.signUpAttributes)];case 2:if(!(t=i.sent()))throw new Error(l.a.SIGN_UP_FAILED);return t.userConfirmed?[4,Object(d.b)(this.signUpAttributes.username,this.signUpAttributes.password,this.handleAuthStateChange)]:[3,4];case 3:return i.sent(),[3,5];case 4:n=Object.assign({},this.signUpAttributes),this.handleAuthStateChange(o.a.ConfirmSignUp,Object.assign(Object.assign({},t.user),{signUpAttrs:n})),i.label=5;case 5:return[3,7];case 6:return r=i.sent(),Object(c.a)(r),[3,7];case 7:return[2]}}))}))},e.prototype.buildDefaultFormFields=function(){switch(this.usernameAlias){case"email":this.newFormFields=[{type:"email",placeholder:i.a.get(l.a.SIGN_UP_EMAIL_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-up-email-input"}},{type:"password",placeholder:i.a.get(l.a.SIGN_UP_PASSWORD_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-up-password-input"}},{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-up-phone-number-input"}}];break;case"phone_number":this.newFormFields=[{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-up-phone-number-input"}},{type:"password",placeholder:i.a.get(l.a.SIGN_UP_PASSWORD_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-up-password-input"}},{type:"email",placeholder:i.a.get(l.a.SIGN_UP_EMAIL_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-up-email-input"}}];break;case"username":default:this.newFormFields=[{type:"username",placeholder:i.a.get(l.a.SIGN_UP_USERNAME_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("username"),inputProps:{"data-test":"sign-up-username-input"}},{type:"password",placeholder:i.a.get(l.a.SIGN_UP_PASSWORD_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-up-password-input"}},{type:"email",placeholder:i.a.get(l.a.SIGN_UP_EMAIL_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-up-email-input"}},{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-up-phone-number-input"}}]}},e.prototype.buildFormFields=function(){var e=this;if(0===this.formFields.length)this.buildDefaultFormFields();else{var t=[];this.formFields.forEach((function(n){var r=Object.assign({},n);r.handleInputChange=function(t){return e.handleFormFieldInputWithCallback(t,n)},e.setFieldValue(n,e.signUpAttributes),t.push(r)})),this.newFormFields=t}},e.prototype.setFieldValue=function(e,t){switch(e.type){case"username":void 0===e.value?t.username="":t.username=e.value;break;case"password":void 0===e.value?t.password="":t.password=e.value;break;case"email":t.attributes.email=e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value;break;default:t.attributes[e.type]=e.value}},e.prototype.componentWillLoad=function(){Object(c.c)(this.usernameAlias),this.buildFormFields()},e.prototype.formFieldsHandler=function(){this.buildFormFields()},e.prototype.render=function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:i.a.get(this.headerText),handleSubmit:this.handleSubmit,testDataPrefix:"sign-up"},Object(r.i)("div",{slot:"subtitle"},Object(r.i)("slot",{name:"header-subtitle"})),Object(r.i)("amplify-auth-fields",{formFields:this.newFormFields}),Object(r.i)("div",{class:"sign-up-form-footer",slot:"amplify-form-section-footer"},Object(r.i)("slot",{name:"footer"},Object(r.i)("slot",{name:"secondary-footer-content"},Object(r.i)("span",null,i.a.get(this.haveAccountText)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.a.SignIn)},"data-test":"sign-up-sign-in-link"},i.a.get(this.signInText)))),Object(r.i)("slot",{name:"primary-footer-content"},Object(r.i)("amplify-button",{type:"submit","data-test":"sign-up-create-account-button"},this.loading?Object(r.i)("amplify-loading-spinner",null):Object(r.i)("span",null,i.a.get(this.submitButtonText))))))))},Object.defineProperty(e,"watchers",{get:function(){return{formFields:["formFieldsHandler"]}},enumerable:!1,configurable:!0}),e}();O.style=":host{--footer-font-family:var(--amplify-font-family);--footer-font-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--font-weight:var(--amplify-font-weight)}.sign-up-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-font-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-up-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-up-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-up-form-footer amplify-button{margin-bottom:0}}.sign-up-form-footer *+*{margin-bottom:15px}";var I=new a.a("AmplifyVerifyContact"),_=function(){function e(e){Object(r.k)(this,e),this.handleAuthStateChange=c.d,this.loading=!1}return e.prototype.handleSubmit=function(e){e.preventDefault(),this.verifyAttr?this.submit(this.code):this.verify(this.contact)},e.prototype.submit=function(e){return p(this,void 0,void 0,(function(){var t,n,r;return f(this,(function(i){switch(i.label){case 0:if(t=this.verifyAttr,!u.a||"function"!==typeof u.a.verifyCurrentUserAttributeSubmit)throw new Error(h.d);this.loading=!0,i.label=1;case 1:return i.trys.push([1,3,4,5]),[4,u.a.verifyCurrentUserAttributeSubmit(t,e)];case 2:return n=i.sent(),I.debug(n),this.handleAuthStateChange(o.a.SignedIn,this.user),this.verifyAttr=null,[3,5];case 3:return r=i.sent(),Object(c.a)(r),I.error(r),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},e.prototype.verify=function(e){return p(this,void 0,void 0,(function(){var t,n;return f(this,(function(r){switch(r.label){case 0:if(!e)return I.error("Neither Email nor Phone Number selected"),[2];if(!u.a||"function"!==typeof u.a.verifyCurrentUserAttribute)throw new Error(h.d);this.loading=!0,r.label=1;case 1:return r.trys.push([1,3,4,5]),[4,u.a.verifyCurrentUserAttribute(e)];case 2:return t=r.sent(),I.debug(t),this.verifyAttr=e,[3,5];case 3:return n=r.sent(),Object(c.a)(n),I.error(n),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},e.prototype.handleInputChange=function(e){var t=e.target.name;"code"===t?this.code=e.target.value:"contact"===t&&(this.contact=e.target.value)},e.prototype.renderSubmit=function(){var e=this;return Object(r.i)("div",null,Object(r.i)("amplify-input",{inputProps:{autocomplete:"off","data-test":"verify-contact-code-input"},name:"code",placeholder:i.a.get(l.a.CODE_PLACEHOLDER),handleInputChange:function(t){return e.handleInputChange(t)}}))},e.prototype.renderVerify=function(){var e=this,t=this.user;if(!t)return I.debug("No user to verify"),null;var n=t.unverified;if(!n)return I.debug("Unverified variable does not exist on user"),null;var a=n.email,s=n.phone_number;return Object(r.i)("div",null,a&&Object(r.i)("amplify-radio-button",{label:i.a.get(l.a.VERIFY_CONTACT_EMAIL_LABEL),key:"email",name:"contact",value:"email",handleInputChange:function(t){return e.handleInputChange(t)},inputProps:{"data-test":"verify-contact-email-radio"}}),s&&Object(r.i)("amplify-radio-button",{label:i.a.get(l.a.VERIFY_CONTACT_PHONE_LABEL),key:"phone_number",name:"contact",value:"phone_number",handleInputChange:function(t){return e.handleInputChange(t)},inputProps:{"data-test":"verify-contact-email-radio"}}))},e.prototype.render=function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{handleSubmit:function(t){return e.handleSubmit(t)},headerText:i.a.get(l.a.VERIFY_CONTACT_HEADER_TEXT),loading:this.loading,secondaryFooterContent:Object(r.i)("span",null,Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.a.SignedIn,e.user)}},"Skip")),submitButtonText:this.verifyAttr?i.a.get(l.a.VERIFY_CONTACT_SUBMIT_LABEL):i.a.get(l.a.VERIFY_CONTACT_VERIFY_LABEL)},this.verifyAttr?this.renderSubmit():this.renderVerify()))},e}()},614:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var r=n(60),i=n(52),a=n(73),s=n(138),o=n(48),u=n(218),l=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function s(e){try{u(r.next(e))}catch(t){a(t)}}function o(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}u((r=r.apply(e,t||[])).next())}))},h=function(e,t){var n,r,i,a,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(o){a=[6,o],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}},c=new r.a("auth-helpers");function d(e,t){return l(this,void 0,void 0,(function(){var n,r,l;return h(this,(function(h){switch(h.label){case 0:if(!s.a||"function"!==typeof s.a.verifiedContact)throw new Error(o.d);h.label=1;case 1:return h.trys.push([1,3,,4]),[4,s.a.verifiedContact(e)];case 2:return n=h.sent(),!Object(i.d)(n.verified)||Object(i.d)(n.unverified)?t(a.a.SignedIn,e):(r=Object.assign(e,n),t(a.a.VerifyContact,r)),[3,4];case 3:return l=h.sent(),Object(u.a)(l),[3,4];case 4:return[2]}}))}))}var p=function(e,t,n){return l(void 0,void 0,void 0,(function(){var r,i;return h(this,(function(l){switch(l.label){case 0:if(!s.a||"function"!==typeof s.a.signIn)throw new Error(o.d);l.label=1;case 1:return l.trys.push([1,9,,10]),[4,s.a.signIn(e,t)];case 2:return r=l.sent(),c.debug(r),r.challengeName!==a.b.SMSMFA&&r.challengeName!==a.b.SoftwareTokenMFA?[3,3]:(c.debug("confirm user with "+r.challengeName),n(a.a.ConfirmSignIn,r),[3,8]);case 3:return r.challengeName!==a.b.NewPasswordRequired?[3,4]:(c.debug("require new password",r.challengeParam),n(a.a.ResetPassword,r),[3,8]);case 4:return r.challengeName!==a.b.MFASetup?[3,5]:(c.debug("TOTP setup",r.challengeParam),n(a.a.TOTPSetup,r),[3,8]);case 5:return r.challengeName===a.b.CustomChallenge&&r.challengeParam&&"true"===r.challengeParam.trigger?(c.debug("custom challenge",r.challengeParam),n(a.a.CustomConfirmSignIn,r),[3,8]):[3,6];case 6:return[4,d(r,n)];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:return i=l.sent(),Object(u.a)(i),"UserNotConfirmedException"===i.code?(c.debug("the user is not confirmed"),n(a.a.ConfirmSignUp,{username:e})):"PasswordResetRequiredException"===i.code&&(c.debug("the user requires a new password"),n(a.a.ForgotPassword,{username:e})),[3,10];case 10:return[2]}}))}))}}}]);
//# sourceMappingURL=6.b08f5b7b.chunk.js.map