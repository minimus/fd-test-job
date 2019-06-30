module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=15)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react-localize-redux")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-leaflet-universal")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("cookie-parser")},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("helmet")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("redux-thunk")},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){n(e,t,r[t])})}return e}r.r(t);var i=r(9),a=r.n(i),s=r(5),u=r.n(s),l=r(10),c=r.n(l),m=r(11),d=r.n(m),f=r(12),p=r.n(f),_=r(0),h=r.n(_),b=r(8),g=r.n(b),y=r(3),N=r(7),v=r(2),E=r(4);function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function O(e,t,r){return t&&P(e.prototype,t),r&&P(e,r),e}function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e){return(S="function"==typeof Symbol&&"symbol"===R(Symbol.iterator)?function(e){return R(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":R(e)})(e)}function k(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}var T=r(1),A=r.n(T),C=r(13),x="D:\\frontend-tasks\\fd-test-job\\src\\shared\\components\\home\\LabeledInput.js";function I(e){var t=e.id,r=e.value,n=e.handler,o=e.pass,i=void 0!==o&&o?"password":"text";return h.a.createElement("div",{className:"labeled-input",__source:{fileName:x,lineNumber:10},__self:this},"password"===i?h.a.createElement(v.Translate,{id:"login.password",__source:{fileName:x,lineNumber:11},__self:this}):h.a.createElement(v.Translate,{id:"login.email",__source:{fileName:x,lineNumber:11},__self:this}),h.a.createElement("input",{id:t,type:i,value:r,onChange:n,__source:{fileName:x,lineNumber:12},__self:this}))}I.propTypes={id:A.a.string.isRequired,value:A.a.string.isRequired,handler:A.a.func.isRequired,pass:A.a.bool},I.defaultProps={pass:!1};var D=Object(v.withLocalize)(I),H="D:\\frontend-tasks\\fd-test-job\\src\\shared\\components\\home\\HomeLogin.js",z=function(e){function t(){return w(this,t),k(this,j(t).apply(this,arguments))}return q(t,_["Component"]),O(t,[{key:"render",value:function(){var e=this.props,t=e.username,r=e.password,n=e.loggedIn,o=e.rememberMe,i=e.trackName,a=e.trackPass,s=e.changeRememberMe,u=e.passwordRecoveryNeeded,l=e.signIn,c=e.signOut;return h.a.createElement("div",{id:"home-component-login",__source:{fileName:H,lineNumber:14},__self:this},h.a.createElement("h1",{__source:{fileName:H,lineNumber:15},__self:this},h.a.createElement(v.Translate,{id:"login.header",__source:{fileName:H,lineNumber:15},__self:this})),h.a.createElement(D,{handler:i,id:"username",value:t,__source:{fileName:H,lineNumber:16},__self:this}),h.a.createElement(D,{handler:a,id:"password",value:r,pass:!0,__source:{fileName:H,lineNumber:17},__self:this}),h.a.createElement("div",{__source:{fileName:H,lineNumber:18},__self:this},h.a.createElement("label",{id:"remember-me-label",htmlFor:"remember-me",__source:{fileName:H,lineNumber:19},__self:this},h.a.createElement("input",{id:"remember-me",type:"checkbox",checked:o,onClick:s,__source:{fileName:H,lineNumber:20},__self:this}),h.a.createElement(v.Translate,{id:"login.rememberMe",__source:{fileName:H,lineNumber:21},__self:this}))),h.a.createElement("div",{className:"login-buttons",__source:{fileName:H,lineNumber:24},__self:this},h.a.createElement("button",{id:"sign-in",className:"sign-in-button",type:"button",onClick:n?c:l,__source:{fileName:H,lineNumber:25},__self:this},n?h.a.createElement(v.Translate,{id:"login.signOut",__source:{fileName:H,lineNumber:31},__self:this}):h.a.createElement(v.Translate,{id:"login.signIn",__source:{fileName:H,lineNumber:31},__self:this})),h.a.createElement("button",{id:"recovery",className:"link-button",type:"button",onClick:u,__source:{fileName:H,lineNumber:33},__self:this},h.a.createElement(v.Translate,{id:"login.forgotPass",__source:{fileName:H,lineNumber:39},__self:this}))))}}]),t}();z.propTypes={username:A.a.string.isRequired,password:A.a.string.isRequired,rememberMe:A.a.bool.isRequired,loggedIn:A.a.bool.isRequired,trackName:A.a.func.isRequired,trackPass:A.a.func.isRequired,changeRememberMe:A.a.func.isRequired,passwordRecoveryNeeded:A.a.func.isRequired,signIn:A.a.func.isRequired,signOut:A.a.func.isRequired};var L=Object(v.withLocalize)(z),G="D:\\frontend-tasks\\fd-test-job\\src\\shared\\components\\home\\HomeRecovery.js",U=function(e){function t(){return w(this,t),k(this,j(t).apply(this,arguments))}return q(t,_["Component"]),O(t,[{key:"render",value:function(){var e=this.props,t=e.username,r=e.trackName,n=e.passwordRecoverySent;return h.a.createElement("div",{id:"home-component-recovery",__source:{fileName:G,lineNumber:11},__self:this},h.a.createElement("h1",{__source:{fileName:G,lineNumber:12},__self:this},h.a.createElement(v.Translate,{id:"recovery.header",__source:{fileName:G,lineNumber:12},__self:this})),h.a.createElement(D,{handler:r,id:"username",value:t,__source:{fileName:G,lineNumber:13},__self:this}),h.a.createElement("p",{__source:{fileName:G,lineNumber:14},__self:this},h.a.createElement(v.Translate,{id:"recovery.help",__source:{fileName:G,lineNumber:14},__self:this})),h.a.createElement("div",{className:"login-buttons",__source:{fileName:G,lineNumber:15},__self:this},h.a.createElement("button",{id:"send-request",className:"sign-in-button",type:"button",onClick:n,__source:{fileName:G,lineNumber:16},__self:this},h.a.createElement(v.Translate,{id:"recovery.sendRequest",__source:{fileName:G,lineNumber:22},__self:this}))))}}]),t}();U.propTypes={username:A.a.string.isRequired,trackName:A.a.func.isRequired,passwordRecoverySent:A.a.func.isRequired};var V=Object(v.withLocalize)(U),W="D:\\frontend-tasks\\fd-test-job\\src\\shared\\components\\home\\Home.js",Y=function(e){function t(){var e,r,n;w(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return k(n,(r=n=k(this,(e=j(t)).call.apply(e,[this].concat(i))),n.dialogContent=function(){return n.props.recovery?h.a.createElement(V,Object.assign({},n.props,{__source:{fileName:W,lineNumber:9},__self:this})):h.a.createElement(L,Object.assign({},n.props,{__source:{fileName:W,lineNumber:10},__self:this}))},r))}return q(t,_["Component"]),O(t,[{key:"render",value:function(){return h.a.createElement("section",{id:"home-component",__source:{fileName:W,lineNumber:15},__self:this},this.dialogContent())}}]),t}();function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Y.propTypes={recovery:A.a.bool.isRequired};var F=r(6),Z="D:\\frontend-tasks\\fd-test-job\\src\\shared\\components\\map\\BackgroundMap.js",J=function(e){function t(){var e,r,n;w(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return k(n,(r=n=k(this,(e=j(t)).call.apply(e,[this].concat(i))),n.handleViewportChanged=function(e){var t=n.props,r=t.history,o=t.viewportChanged,i=t.currentPosition,a=B(e.center,2),s=a[0],u=a[1];(i.latitude&&i.latitude!==s||i.longitude&&i.longitude!==u)&&r.push("/".concat(s,"/").concat(u)),o(e)},r))}return q(t,_["Component"]),O(t,[{key:"render",value:function(){var e=this.props,t=e.position,r=t.latitude,n=t.longitude,o=e.currentPosition,i=o.latitude,a=o.longitude,s=e.zoom;return h.a.createElement("div",{id:"maps",__source:{fileName:Z,lineNumber:32},__self:this},h.a.createElement(F.Map,{center:[r,n],zoom:s,maxZoom:10,attributionControl:!0,doubleClickZoom:!0,scrollWheelZoom:!0,zoomControl:!1,dragging:!0,animate:!0,easeLinearity:.35,style:{width:"100%",height:"100%"},onViewportChanged:this.handleViewportChanged,__source:{fileName:Z,lineNumber:33},__self:this},h.a.createElement(F.TileLayer,{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',__source:{fileName:Z,lineNumber:47},__self:this}),h.a.createElement(F.Marker,{position:[i,a],__source:{fileName:Z,lineNumber:51},__self:this},h.a.createElement(F.Popup,{__source:{fileName:Z,lineNumber:52},__self:this},h.a.createElement(v.Translate,{id:"maps.markerPosition",__source:{fileName:Z,lineNumber:52},__self:this})))))}}]),t}();J.propTypes={position:A.a.objectOf.isRequired,currentPosition:A.a.objectOf.isRequired,zoom:A.a.objectOf.isRequired,viewportChanged:A.a.func.isRequired,history:A.a.objectOf.isRequired};var $=Object(v.withLocalize)(J);function K(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=e&&t?7:-1,n=new Date;n.setDate(n.getDate()+r),document.cookie="username=".concat(e,"; expires=").concat(n.toUTCString())}function Q(){return{en:{latitude:40.73061,longitude:-73.935242},de:{latitude:52.520008,longitude:13.404954},ru:{latitude:55.751244,longitude:37.618423}}[arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en"]}var X="HOME_USERNAME_CHANGED",ee="HOME_PASSWORD_CHANGED",te="HOME_SIGN_IN",re="HOME_SIGN_OUT",ne="HOME_REMEMBER_ME_CHANGED",oe="HOME_PASSWORD_RECOVERY_NEEDED",ie="HOME_PASSWORD_RECOVERY_SENT",ae="APPLICATION_GET_USER_PROPERTIES",se="MAP_USER_POSITION_CHANGE_STARTED",ue="MAP_USER_POSITION_CHANGE_FINISHED",le="MAP_USER_POSITION_CHANGE_ERROR",ce="MAP_VIEWPORT_CHANGED";var me={username:"",password:"",rememberMe:!1,recovery:!1,locale:"en",position:Q("en"),currentPosition:Q("en"),storedPosition:{stored:!1,latitude:null,longitude:null},zoom:9,loggedIn:!1};var de="D:\\frontend-tasks\\fd-test-job\\src\\shared\\containers\\home\\HomeContainer.js",fe=function(e){function t(){return w(this,t),k(this,j(t).apply(this,arguments))}return q(t,_["Component"]),O(t,[{key:"componentDidMount",value:function(){this.props.changeUserPosition()}},{key:"render",value:function(){return h.a.createElement("div",{id:"home-container",__source:{fileName:de,lineNumber:20},__self:this},h.a.createElement($,Object.assign({},this.props,{__source:{fileName:de,lineNumber:21},__self:this})),h.a.createElement(Y,Object.assign({},this.props,{__source:{fileName:de,lineNumber:22},__self:this})))}}]),t}();fe.propTypes={changeUserPosition:A.a.func.isRequired};var pe={trackName:function(e){return function(t){var r=e.target.value;t({type:X,payload:r})}},trackPass:function(e){return function(t){var r=e.target.value;t({type:ee,payload:r})}},getUserProperties:function(){return function(e){e({type:ae,payload:{}})}},changeUserPosition:function(){return function(e){e({type:se,payload:!0}),setTimeout(function(){(function(e){if(window)return new Promise(function(t,r){return window.navigator.geolocation.getCurrentPosition(t,r,e)})})({enableHighAccuracy:!1,timeout:5e3,maximumAge:0}).then(function(t){var r=t.coords,n=r.latitude,o=r.longitude;e({type:ue,payload:{latitude:n,longitude:o}})}).catch(function(t){e({type:le,payload:t})})},1500)}},viewportChanged:function(e){return function(t){var r=B(e.center,2),n=r[0],o=r[1],i=e.zoom;t({type:ce,payload:{position:{latitude:n,longitude:o},zoom:i}})}},changeRememberMe:function(e){return function(t){t({type:ne,payload:e.target.checked})}},passwordRecoveryNeeded:function(){return function(e){e({type:oe,payload:!0})}},passwordRecoverySent:function(){return function(e){e({type:ie,payload:!1})}},signIn:function(){return function(e){e({type:te,payload:!0})}},signOut:function(){return function(e){e({type:re,payload:!1})}}},_e=Object(N.connect)(function(e){return{locale:e.home.locale,position:e.home.position,currentPosition:e.home.currentPosition,zoom:e.home.zoom,username:e.home.username,password:e.home.password,rememberMe:e.home.rememberMe,recovery:e.home.recovery,loggedIn:e.home.loggedIn}},pe)(Object(C.withRouter)(fe)),he="D:\\frontend-tasks\\fd-test-job\\src\\shared\\Application.js",be=function(e){function t(){return w(this,t),k(this,j(t).apply(this,arguments))}return q(t,_["Component"]),O(t,[{key:"render",value:function(){return h.a.createElement("article",{id:"main",__source:{fileName:he,lineNumber:8},__self:this},h.a.createElement(E.Switch,{__source:{fileName:he,lineNumber:9},__self:this},h.a.createElement(E.Route,{path:"/",component:_e,__source:{fileName:he,lineNumber:10},__self:this}),h.a.createElement(E.Route,{path:"/:latitude/:longitude",component:_e,__source:{fileName:he,lineNumber:11},__self:this})))}}]),t}(),ge=r(14),ye=r.n(ge),Ne=(Object(y.applyMiddleware)(ye.a)(y.createStore),Object(y.combineReducers)({home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return e;case ue:var r=e.storedPosition;return o({},e,{position:r.stored?{latitude:r.latitude,longitude:r.longitude}:t.payload,currentPosition:o({},t.payload),zoom:10});case le:var n=e.storedPosition,i=Q(e.locale);return o({},e,{position:n.stored?{latitude:n.latitude,longitude:n.longitude}:i,currentPosition:o({},i),zoom:10});case ce:return o({},e,t.payload);case X:return o({},e,{username:t.payload});case ee:return o({},e,{password:t.payload});case te:return K(e.username,e.rememberMe),o({},e,{loggedIn:t.payload});case re:return K(e.username,!1),o({},e,{loggedIn:t.payload});case ne:return o({},e,{rememberMe:t.payload});case oe:case ie:return o({},e,{recovery:t.payload});default:return e}}})),ve="D:\\frontend-tasks\\fd-test-job\\src\\server\\server.js",Ee=u()();Ee.use(p()());function we(e,t){var r=e.get("Accept-Language"),n=r?function(e){if(e){var t=e.split(",")[0];if(/^(ru|en|de)/gi.test(t))return t.split("-")[0].toLowerCase()}else if(window)return/^(ru|de|en)/gi.test(window.navigator.language)?window.navigator.language.split("-")[0].toLowerCase():"en";return"en"}(r.split(",")[0]):"en",i=Q(n),a=function(e){var t={en:{maps:{markerPosition:"You are here.",markerNearPosition:"You are here... Maybe..."},login:{header:"Please, log in",email:"E-mail",password:"Password",rememberMe:"Remember Me",signIn:"Sign In",signOut:"Sign Out",forgotPass:"Forgot Password?"},recovery:{header:"Password Recovery",sendRequest:"Send Request",help:'Enter your email and click "Send Request" button. You will be sent a letter with detailed instructions.'}},de:{maps:{markerPosition:"Du bist hier.",markerNearPosition:"Du bist hier... Vielleicht..."},login:{header:"Anmeldung",email:"E-mail",password:"Passwort",rememberMe:"Erinnere dich an mich",signIn:"Einloggen",signOut:"Ausloggen",forgotPass:"Passwort vergessen?"},recovery:{header:"Passwort-Wiederherstellung",sendRequest:"Anfrage senden",help:'Geben Sie Ihre E-Mail-Adresse ein und klicken Sie auf "Anfrage senden". Sie erhalten einen Brief mit detaillierten Anweisungen.'}},ru:{maps:{markerPosition:"Вы здесь.",markerNearPosition:"Вы здесь... Возможно..."},login:{header:"Авторизация",email:"E-mail",password:"Пароль",rememberMe:"Запомнить меня",signIn:"Вход",signOut:"Выйти",forgotPass:"Забыли пароль?"},recovery:{header:"Восстановление пароля",sendRequest:"Отправить запрос",help:"Введите адрес электронной почты и нажмите кнопку «Отправить запрос». Вам будет отправлено письмо с подробными инструкциями."}}};return/^(en|de|ru)$/.test(e)?t[e]:t.en}(n),s=e.params,u=s.latitude,l=s.longitude,c={latitude:parseFloat(u),longitude:parseFloat(l),stored:!!u&&!!l},m=e.cookies.username,d=void 0===m?"":m,f=!!d,p={languages:[{name:"English",code:"en"},{name:"German",code:"de"},{name:"Russian",code:"ru"}],translation:{maps:{markerPosition:["You are here.","Du bist hier.","Вы здесь."],markerNearPosition:["You are here... Maybe...","Du bist hier... Vielleicht...","Вы здесь... Возможно..."]},login:{header:["Please, log in","Anmeldung","Авторизация"],email:["E-mail","E-mail","E-mail"],password:["Password","Passwort","Пароль"],rememberMe:["Remember Me","Erinnere dich an mich","Запомнить меня"],signIn:["Sign In","Einloggen","Вход"],signOut:["Sign Out","Ausloggen","Выйти"],forgotPass:["Forgot Password?","Passwort vergessen?","Забыли пароль?"]},recovery:{header:["Password Recovery","Passwort-Wiederherstellung","Восстановление пароля"],sendRequest:["Send Request","Anfrage senden","Отправить запрос"],help:['Enter your email and click "Send Request" button. You will be sent a letter with detailed instructions.','Geben Sie Ihre E-Mail-Adresse ein und klicken Sie auf "Anfrage senden". Sie erhalten einen Brief mit detaillierten Anweisungen.',"Введите адрес электронной почты и нажмите кнопку «Отправить запрос». Вам будет отправлено письмо с подробными инструкциями."]}},options:{defaultLanguage:n,renderToStaticMarkup:g.a.renderToStaticMarkup}},_=Object(y.createStore)(Ne),b=g.a.renderToString(h.a.createElement(N.Provider,{store:_,__source:{fileName:ve,lineNumber:122},__self:this},h.a.createElement(v.LocalizeProvider,{initialize:p,store:_,__source:{fileName:ve,lineNumber:123},__self:this},h.a.createElement(E.StaticRouter,{location:e.url,context:{},__source:{fileName:ve,lineNumber:124},__self:this},h.a.createElement(be,{__source:{fileName:ve,lineNumber:125},__self:this}))))),w=_.getState(),P=o({},w,{home:o({},w.home,{locale:n,position:i,storedPosition:c,strings:a,username:d,rememberMe:f})});t.send(function(e,t){var r=t.home.locale;return'\n    <!doctype html>\n    <html lang="'.concat(r,'">\n      <head>\n        <title>TheBoats.com test job</title>\n        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i&subset=cyrillic" rel="stylesheet">\n        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css">\n        <link href="/css/style.css" rel="stylesheet">\n      </head>\n      <body>\n        <div id="app">').concat(e,"</div>\n        <script>\n          window.__PRELOADED_STATE__ = ").concat(JSON.stringify(t).replace(/</g,"\\u003c"),'\n        <\/script>\n        <script src="/js/bundle.js"><\/script>\n      </body>\n    </html>\n    ')}(b,P))}Ee.use(u.a.json()),Ee.use(u.a.urlencoded({extended:!1})),Ee.use(c()()),Ee.use(d()()),Ee.use(u.a.static(a.a.join("./","public"))),process.env.BROWSER=!1,Ee.use("/:latitude/:longitude",we),Ee.use("/",we),Ee.listen(3e3)}]);
//# sourceMappingURL=server.js.map