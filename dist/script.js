!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}(function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))switch(typeof e[t]){case"function":break;case"object":e[t]=function(t){var n=t.slice(1),r=e[t[0]];return function(e,t,o){r.apply(this,[e,t,o].concat(n))}}(e[t]);break;default:e[t]=e[e[t]]}return e}([function(e,t,n){"use strict";n(119),n(120),n(123),n(122),n(121),n(58),n(57),n(4),n(8),n(9),n(56),n(53),n(29),n(51),n(54),n(30),n(52);var r=n(1);r.mail.addEventListener("click",function(){var e="wlodarcz.marek",t="@gmail.com";window.location="mailto:"+e+t}),r.tel.addEventListener("click",function(){var e="864-116";window.location="tel:+48-664-"+e})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.tel=t.mail=t.deviceMockups=t.projectText=t.menuExit=t.menuArrow=t.menuItems=t.menu=t.shadows=t.clippedAreas=t.masthead=t.containers=void 0;var o=n(55),i=r(o),u=(0,i.default)(document.getElementsByClassName("js_sel-container")),c=document.getElementById("masthead"),a=(0,i.default)(document.getElementsByClassName("js_sel-clipped")),f=(0,i.default)(document.getElementsByClassName("js_sel-shadow")),s=document.getElementById("menu"),l=(0,i.default)(document.getElementsByClassName("js_sel-menu-items")),p=document.getElementById("menu-arrow-icon"),d=document.getElementById("menu-exit-button"),v=(0,i.default)(document.getElementsByClassName("js_sel-project-text")),h=(0,i.default)(document.getElementsByClassName("js_sel-mockup")),m=document.getElementById("mail"),g=document.getElementById("tel");t.containers=u,t.masthead=c,t.clippedAreas=a,t.shadows=f,t.menu=s,t.menuItems=l,t.menuArrow=p,t.menuExit=d,t.projectText=v,t.deviceMockups=h,t.mail=m,t.tel=g},function(e,t){var n=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},[136,42,45,10],function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.page=t.changePage=void 0;var o=n(1),i=n(9),u=n(17),c=r(u),a=0,f=function(e){for(;e>a;)o.containers[a].className+=" fade-out",o.containers[a+1].className+=" container--up",t.page=a+=1},s=function(e){for(;e<a;)(0,c.default)(o.containers[a],"container--up"),(0,c.default)(o.containers[a-1],"fade-out"),t.page=a-=1},l=function(e){(0,c.default)(o.containers[a],"repeating-animations"),0===e?(0,i.showHomeMenu)():(0===a||i.fullMenuOnPage)&&(0,i.minimizeMenu)(),e>a?f(e):e<a&&s(e),o.containers[a].className+=" repeating-animations"};t.changePage=l,t.page=a},[126,19],function(e,t,n){var r=n(10),o=n(2),i=n(35),u=n(15),c="prototype",a=function(e,t,n){var f,s,l,p=e&a.F,d=e&a.G,v=e&a.S,h=e&a.P,m=e&a.B,g=e&a.W,y=d?o:o[t]||(o[t]={}),x=y[c],w=d?r:v?r[t]:(r[t]||{})[c];d&&(n=t);for(f in n)s=!p&&w&&void 0!==w[f],s&&f in y||(l=s?w[f]:n[f],y[f]=d&&"function"!=typeof w[f]?n[f]:m&&s?i(l,r):g&&w[f]==l?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t[c]=e[c],t}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((y.virtual||(y.virtual={}))[f]=l,e&a.R&&x&&!x[f]&&u(x,f,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,e.exports=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(64);var r={clipPath:"polygon(30% 30%, 90% 30%, 90% 60%, 30% 60%)",transformOrigin:"10% 10%",transform:"scale(1.1) translate(20px, 30px)",filter:"blur(5px)"},o=function(e){var t={},n=document.createElement("testElement"),r=function(r){if(!e.hasOwnProperty(r))return"continue";var o=""+r[0].toUpperCase()+r.slice(1),i=[r,"Webkit"+o,"ms"+o,"Moz"+o],u=r.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),c=new RegExp(u),a=i.find(function(t){return n.style[t]=e[r],c.test(n.getAttribute("style"))});a&&(t[r]=a)};for(var o in e){r(o)}return t},i=o(r);if(i.clipPath)i.clipProp=i.clipPath,delete i.clipPath;else{var u=o({clip:"rect(10px, 10px, 10px, 10px)"});i.clipProp=u.clip}t.default=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.project=t.changeProject=void 0;var o=n(1),i=n(17),u=r(i),c=0,a=function(e){if(e>c)for(;e>c;)o.projectText[c].className+=" fade-out",o.deviceMockups[c].className+=" device-mockup--left fade-out",t.project=c+=1;else if(c>e)for(;e<c;)o.projectText[c].className+=" fade-out",o.deviceMockups[c].className+=" device-mockup--right fade-out",t.project=c-=1;(0,u.default)(o.deviceMockups[c],"fade-out","device-mockup--left","device-mockup--right"),setTimeout(function(){(0,u.default)(o.projectText[c],"fade-out")},500)};t.changeProject=a,t.project=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.fullMenuOnPage=t.showFullMenu=t.showHomeMenu=t.minimizeMenu=void 0;var o=n(1),i=n(7),u=r(i),c=n(17),a=r(c),f=n(4),s=u.default.filter,l=!1,p=function(){s?(0,a.default)(o.containers[f.page],"container--blur"):(0,a.default)(o.containers[f.page],"container--darken")},d=function(){t.fullMenuOnPage=l=!1,o.menu.className+=" menu--minimized",(0,a.default)(o.menu,"menu--home-page","menu--full"),p()},v=function(){t.fullMenuOnPage=l=!1,o.menu.className+=" menu--home-page",(0,a.default)(o.menu,"menu--minimized","menu--full"),p()},h=function(){t.fullMenuOnPage=l=!0,o.menu.className+=" menu--full",(0,a.default)(o.menu,"menu--home-page","menu--minimized"),s?o.containers[f.page].className+=" container--blur":o.containers[f.page].className+=" container--darken"};o.menuExit.addEventListener("click",d),o.menuArrow.addEventListener("click",h),t.minimizeMenu=d,t.showHomeMenu=v,t.showFullMenu=h,t.fullMenuOnPage=l},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},[131,13,75,89,5],10,[124,20],function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},[128,11,22,5],function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];n.forEach(function(t){var n=new RegExp(" "+t,"g");e.className=e.className.replace(n,"")})}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},16,function(e,t){e.exports={}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(42)("keys"),o=n(45);e.exports=function(e){return r[e]||(r[e]=o(e))}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},[134,18],2,[126,48],[128,110,111,27],function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),i=r(o),u=i.default.transform;t.default=function(e,t,n,r,o,i,c){e.style.transition="none",t.style.transition="none",e.style[u]="scale("+o+") translate("+i/n+"px, "+c/r+"px)",t.style[u]="scale("+o+") translate("+i/n+"px, "+c/r+"px)"}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.clientHeight=t.clientWidth=void 0;var o=n(33),i=r(o),u=n(7),c=r(u),a=n(31),f=n(1),s=n(32),l=c.default.clipProp,p=document.documentElement.clientWidth,d=document.documentElement.clientHeight,v=function(){t.clientWidth=p=document.documentElement.clientWidth,t.clientHeight=d=document.documentElement.clientHeight,"clip"===l&&f.clippedAreas.forEach(function(e,t){a.clip.apply(void 0,[e,f.shadows[t]].concat((0,i.default)(s.optionsClip[t]),[l,p,d]))})};window.addEventListener("resize",v),t.clientWidth=p,t.clientHeight=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.clip=t.initialClip=t.clipPath=void 0;var o=n(7),i=r(o),u=i.default.transformOrigin,c=i.default.transform,a=function(e,t,n){t.style[c]="scale("+n+")",e.style[c]="scale("+n+")",t.style.boxShadow="0px 5px 25px 5px rgba(0,0,0,0.8)"},f=function(e,t,n,r,o,i){t.style.top=n+"%",t.style.left=i+"%",t.style.width=100-i-r+"%",t.style.height=100-n-o+"%",e.style[u]=i+(100-i-r)/2+"% "+(n+(100-n-o)/2)+"%"},s=function(e,t,n,r,o,i,u,c,s){setTimeout(function(){f(e,t,r,o,i,u),e.style[""+c]="polygon("+u+"% "+r+"%, "+(100-o)+"% "+r+"%, "+(100-o)+"% "+(100-i)+"%, "+u+"% "+(100-i)+"%)",a(e,t,n)},s)},l=function(e,t,n,r,o,i,u,c,a){f(e,t,n,r,o,i),e.style[""+u]="rect("+n/100*a+"px, "+(c-r/100*c)+"px, "+(a-o/100*a)+"px, "+i/100*c+"px)"},p=function(e,t,n,r,o,i,u,c,f,s,p){setTimeout(function(){l(e,t,r,o,i,u,c,f,s),a(e,t,n)},p)};t.clipPath=s,t.initialClip=p,t.clip=l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[[90,100,1.1],[40,40,1.08],[70,70,1.08],[30,55,1.05]],r=[[0,0,30,50],[0,40,45,0],[50,30,10,40],[30,52,0,0]];t.optionsTransform=n,t.optionsClip=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(59),i=r(o);t.default=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return(0,i.default)(e)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},[125,70],[127,20,10],function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var r=n(13),o=n(39),i=n(37),u=n(23)("IE_PROTO"),c=function(){},a="prototype",f=function(){var e,t=n(36)("iframe"),r=i.length,o="<",u=">";for(t.style.display="none",n(74).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write(o+"script"+u+"document.F=Object"+o+"/script"+u),e.close(),f=e.F;r--;)delete f[a][i[r]];return f()};e.exports=Object.create||function(e,t){var n;return null!==e?(c[a]=r(e),n=new c,c[a]=null,n[u]=e):n=f(),void 0===t?n:o(n,t)}},function(e,t,n){var r=n(11),o=n(13),i=n(40);e.exports=n(5)?Object.defineProperties:function(e,t){o(e);for(var n,u=i(t),c=u.length,a=0;c>a;)r.f(e,n=u[a++],t[n]);return e}},function(e,t,n){var r=n(84),o=n(37);e.exports=Object.keys||function(e){return r(e,o)}},function(e,t,n){var r=n(11).f,o=n(14),i=n(3)("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,i)&&r(e,i,{configurable:!0,value:t})}},[132,10],function(e,t,n){var r=n(76),o=n(18);e.exports=function(e){return r(o(e))}},[133,24],function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},34,[125,97],19,45,[136,113,49,12],function(e,t,n){"use strict";var r=n(1),o=n(8),i=n(4),u=n(9),c=!0,a=function(e){var t=e.keyCode||e.which;if(c){if((13===t||32===t||40===t||39===t)&&i.page<r.containers.length-1){if(u.fullMenuOnPage)return;e.preventDefault(),3===i.page&&o.project<1?(0,o.changeProject)(o.project+1):(0,i.changePage)(i.page+1)}else if((38===t||37===t)&&i.page>0){if(u.fullMenuOnPage)return;e.preventDefault(),3===i.page&&o.project>0?(0,o.changeProject)(o.project-1):(0,i.changePage)(i.page-1)}c=!1,setTimeout(function(){c=!0},500)}};window.addEventListener("keydown",a)},function(e,t,n){"use strict";var r=n(4),o=n(8),i=n(1);i.menuItems.forEach(function(e,t){e.href&&(e.href="javascript:"),e.addEventListener("click",function(e){t<=3?(0,o.changeProject)(0):4===t&&(0,o.changeProject)(1),(0,r.changePage)(t)})})},function(e,t,n){"use strict";var r=n(1),o=n(8),i=n(4),u=n(9),c=!0,a=function(e){u.fullMenuOnPage||(e.preventDefault(),c&&(e.deltaY>0&&i.page<r.containers.length-1?3===i.page&&o.project<1?(0,o.changeProject)(o.project+1):(0,i.changePage)(i.page+1):e.deltaY<0&&i.page>0&&(3===i.page&&o.project>0?(0,o.changeProject)(o.project-1):(0,i.changePage)(i.page-1)),c=!1,setTimeout(function(){c=!0},1e3)))};window.addEventListener("wheel",a)},function(e,t,n){"use strict";var r=n(1),o=n(9),i=n(4),u=n(8),c=void 0,a=void 0,f=void 0,s=void 0;"function"==typeof MouseEvent?s=new MouseEvent("click",{bubbles:!1,cancelable:!0,view:window}):(s=document.createEvent("MouseEvent"),s.initEvent("click",!1,!0));var l=function(e){e.preventDefault();var t=e.touches[0];c=t.pageX,a=t.pageY,f=e.target},p=function(e){var t=e.changedTouches[0],n=t.pageX,l=t.pageY,p=function(){return Math.abs(l-a)>50&&Math.abs(l-a)>Math.abs(n-c)?l-a:0}(),d=function(){return Math.abs(n-c)>50&&Math.abs(n-c)>Math.abs(l-a)?n-c:0}();if(0===p&&0===d){f.dispatchEvent(s);var v=f.href||f.parentNode.href;v&&"javascript:"!==v&&window.open(v)}else o.fullMenuOnPage?p>0&&(0,o.minimizeMenu)():f===r.menuArrow?p<0&&(0,o.showFullMenu)():3===i.page?u.project<1&&(p<0||d<0)?(0,u.changeProject)(u.project+1):u.project>0&&(p>0||d>0)?(0,u.changeProject)(u.project-1):1===u.project&&(p<0||d<0)?(0,i.changePage)(i.page+1):0===u.project&&(p>0||d>0)&&(0,i.changePage)(i.page-1):p<0&&i.page<r.containers.length-1?(0,i.changePage)(i.page+1):p>0&&i.page>0&&(0,i.changePage)(i.page-1)};window.addEventListener("touchstart",function(e){var t=e||window.event;1===t.touches.length&&l(t)}),window.addEventListener("touchend",function(e){var t=e||window.event;1===t.changedTouches.length&&p(t)})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.prototype.slice.call(e)}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(33),i=r(o),u=n(1),c=n(32),a=n(7),f=r(a),s=n(31),l=n(29),p=r(l),d=n(30),v=f.default.clipProp,h=function(){if(/clippath/i.test(v))u.clippedAreas.forEach(function(e,t){s.clipPath.apply(void 0,[e,u.shadows[t],c.optionsTransform[t][2]].concat((0,i.default)(c.optionsClip[t]),[v,0]))});else{if("clip"!==v)return;u.clippedAreas.forEach(function(e,t){s.initialClip.apply(void 0,[e,u.shadows[t],c.optionsTransform[t][2]].concat((0,i.default)(c.optionsClip[t]),[v,d.clientWidth,d.clientHeight,0]))})}setTimeout(function(){u.masthead.addEventListener("mousemove",function(e){var t=e.clientX-d.clientWidth/2,n=e.clientY-d.clientHeight/2;u.clippedAreas.forEach(function(e,r){p.default.apply(void 0,[e,u.shadows[r]].concat((0,i.default)(c.optionsTransform[r]),[t,n]))})})},2e3)};window.onload=h()},function(e,t,n){"use strict";var r=n(1),o=function(){r.projectText.slice(1).forEach(function(e){r.projectText[0].parentNode.appendChild(e),e.className+=" fade-out"}),r.deviceMockups.slice(1).forEach(function(e){r.deviceMockups[0].parentNode.appendChild(e),e.className+=" device-mockup--right fade-out"})};document.addEventListener("DOMContentLoaded",o)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(60),i=r(o),u=n(63),c=r(u),a=n(62),f=r(a),s=n(61),l=r(s);/*! Copyright (c) Andrea Giammarchi - MIT License */
!function(e,t,n){function r(e){this._=e,this.currentTarget=e.currentTarget}if(!(!(n=!!e.pointerEnabled)&&!e.msPointerEnabled||"ontouchend"in t)){var o=n?"setPointerCapture":"msSetPointerCapture",u=n?"releasePointerCapture":"msReleasePointerCapture";e=Element.prototype;var a=l.default,s=f.default,p=function(e){var t=e.toLowerCase();return e="MS"+e,O[e]=O[t],n?t:e},d=function(e){return{value:function(){_[e].call(this),this._[e]()}}},v=function(e){var t="_on"+e;return{enumerable:!0,configurable:!0,get:function(){return this[t]||null},set:function(n){this[t]&&this.removeEventListener(e,this[t]),(this[t]=n)&&this.addEventListener(e,n)}}},h=function(e,t){var n=e[t];s(e,t,{configurable:!0,value:function(e,t,r){e in E&&n.call(this,E[e],M,r),n.call(this,e,t,r)}})},m=function(e){return{get:function(){return this._[e]}}},g=function(e){return function(t){var n=t.pointerId,r=P[n],o=t.currentTarget;delete P[n],u in o&&o[u](t.pointerId),y(e,t,r),delete j[n]}},y=function(e,n,r){var o=t.createEvent("Event");o.initEvent(e,!0,!0),w.value=n,b.currentTarget.value=r.currentTarget,a(o,b),r.currentTarget.dispatchEvent(o)},x=function(e,t){function n(e){return t[e]}return function(){return w.value=(0,c.default)(t).map(n),s(this,e,w)[e]}},w={value:null},P=(0,i.default)(null),j=(0,i.default)(null),_=t.createEvent("Event"),b={_:w,touches:{configurable:!0,get:x("touches",P)},changedTouches:{configurable:!0,get:x("changedTouches",j)},currentTarget:{value:null},relatedTarget:m("relatedTarget"),target:m("target"),altKey:m("altKey"),metaKey:m("metaKey"),ctrlKey:m("ctrlKey"),shiftKey:m("shiftKey"),preventDefault:d("preventDefault"),stopPropagation:d("stopPropagation"),stopImmediatePropagation:d("stopImmediatePropagation")},E=(0,i.default)(null),M=function(e){var t;e:{switch(e.pointerType){case"mouse":case e.MSPOINTER_TYPE_MOUSE:t="mouse";break e}t="touch"}"touch"===t&&O[e.type](e)},O={pointerdown:function(e){var t=new r(e),n=e.pointerId,i=e.currentTarget;j[n]=P[n]=t,o in i&&i[o](e.pointerId),y("touchstart",e,t)},pointermove:function(e){var t=e.pointerId,n=P[t];n._=e,y("touchmove",e,n),j[t]._=e},pointerup:g("touchend"),pointercancel:g("touchcancel")},d={ontouchstart:v("touchstart"),ontouchmove:v("touchmove"),ontouchend:v("touchend"),ontouchcancel:v("touchcancel")};a(r.prototype,{identifier:m("pointerId"),target:m("target"),screenX:m("screenX"),screenY:m("screenY"),clientX:m("clientX"),clientY:m("clientY"),pageX:m("pageX"),pageY:m("pageY")}),E.touchstart=p("PointerDown"),E.touchmove=p("PointerMove"),E.touchend=p("PointerUp"),E.touchcancel=p("PointerCancel"),h(t,"addEventListener"),h(t,"removeEventListener"),h(e,"addEventListener"),h(e,"removeEventListener"),a(t,d),a(e,d)}}(navigator,document)},function(e,t,n){e.exports={default:n(65),__esModule:!0}},function(e,t,n){e.exports={default:n(66),__esModule:!0}},function(e,t,n){e.exports={default:n(67),__esModule:!0}},function(e,t,n){e.exports={default:n(68),__esModule:!0}},function(e,t,n){e.exports={default:n(69),__esModule:!0}},function(e,t,n){n(118),e.exports=n(26).Array.find},function(e,t,n){n(96),n(91),e.exports=n(2).Array.from},function(e,t,n){n(92);var r=n(2).Object;e.exports=function(e,t){return r.create(e,t)}},function(e,t,n){n(93);var r=n(2).Object;e.exports=function(e,t){return r.defineProperties(e,t)}},function(e,t,n){n(94);var r=n(2).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},function(e,t,n){n(95),e.exports=n(2).Object.keys},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var r=n(43),o=n(44),i=n(88);e.exports=function(e){return function(t,n,u){var c,a=r(t),f=o(a.length),s=i(u,f);if(e&&n!=n){for(;f>s;)if(c=a[s++],c!=c)return!0}else for(;f>s;s++)if((e||s in a)&&a[s]===n)return e||s||0;return!e&&-1}}},function(e,t,n){var r=n(34),o=n(3)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,n,c;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=u(t=Object(e),o))?n:i?r(t):"Object"==(c=r(t))&&"function"==typeof t.callee?"Arguments":c}},function(e,t,n){"use strict";var r=n(11),o=n(22);e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},function(e,t,n){e.exports=n(10).document&&document.documentElement},[129,5,19,36],[130,34],function(e,t,n){var r=n(21),o=n(3)("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||i[o]===e)}},function(e,t,n){var r=n(13);e.exports=function(e,t,n,o){try{return o?t(r(n)[0],n[1]):t(n)}catch(t){var i=e.return;throw void 0!==i&&r(i.call(e)),t}}},function(e,t,n){"use strict";var r=n(38),o=n(22),i=n(41),u={};n(15)(u,n(3)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=r(u,{next:o(1,n)}),i(e,t+" Iterator")}},function(e,t,n){"use strict";var r=n(82),o=n(6),i=n(86),u=n(15),c=n(14),a=n(21),f=n(79),s=n(41),l=n(83),p=n(3)("iterator"),d=!([].keys&&"next"in[].keys()),v="@@iterator",h="keys",m="values",g=function(){return this};e.exports=function(e,t,n,y,x,w,P){f(n,t,y);var j,_,b,E=function(e){if(!d&&e in A)return A[e];switch(e){case h:return function(){return new n(this,e)};case m:return function(){return new n(this,e)}}return function(){return new n(this,e)}},M=t+" Iterator",O=x==m,T=!1,A=e.prototype,k=A[p]||A[v]||x&&A[x],S=k||E(x),C=x?O?E("entries"):S:void 0,N="Array"==t?A.entries||k:k;if(N&&(b=l(N.call(new e)),b!==Object.prototype&&(s(b,M,!0),r||c(b,p)||u(b,p,g))),O&&k&&k.name!==m&&(T=!0,S=function(){return k.call(this)}),r&&!P||!d&&!T&&A[p]||u(A,p,S),a[t]=S,a[M]=g,x)if(j={values:O?S:E(m),keys:w?S:E(h),entries:C},P)for(_ in j)_ in A||i(A,_,j[_]);else o(o.P+o.F*(d||T),t,j);return j}},function(e,t,n){var r=n(3)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},e(i)}catch(e){}return n}},function(e,t){e.exports=!0},function(e,t,n){var r=n(14),o=n(25),i=n(23)("IE_PROTO"),u=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=o(e),r(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?u:null}},function(e,t,n){var r=n(14),o=n(43),i=n(71)(!1),u=n(23)("IE_PROTO");e.exports=function(e,t){var n,c=o(e),a=0,f=[];for(n in c)n!=u&&r(c,n)&&f.push(n);for(;t.length>a;)r(c,n=t[a++])&&(~i(f,n)||f.push(n));return f}},function(e,t,n){var r=n(6),o=n(2),i=n(19);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],u={};u[e]=t(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(e,t,n){e.exports=n(15)},function(e,t,n){var r=n(24),o=n(18);e.exports=function(e){return function(t,n){var i,u,c=String(o(t)),a=r(n),f=c.length;return a<0||a>=f?e?"":void 0:(i=c.charCodeAt(a),i<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?e?c.charAt(a):i:e?c.slice(a,a+2):(i-55296<<10)+(u-56320)+65536)}}},function(e,t,n){var r=n(24),o=Math.max,i=Math.min;e.exports=function(e,t){return e=r(e),e<0?o(e+t,0):i(e,t)}},[135,20],function(e,t,n){var r=n(72),o=n(3)("iterator"),i=n(21);e.exports=n(2).getIteratorMethod=function(e){if(void 0!=e)return e[o]||e["@@iterator"]||i[r(e)]}},function(e,t,n){"use strict";var r=n(35),o=n(6),i=n(25),u=n(78),c=n(77),a=n(44),f=n(73),s=n(90);o(o.S+o.F*!n(81)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,o,l,p=i(e),d="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,m=void 0!==h,g=0,y=s(p);if(m&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==y||d==Array&&c(y))for(t=a(p.length),n=new d(t);t>g;g++)f(n,g,m?h(p[g],g):p[g]);else for(l=y.call(p),n=new d;!(o=l.next()).done;g++)f(n,g,m?u(l,h,[o.value,g],!0):o.value);return n.length=g,n}})},function(e,t,n){var r=n(6);r(r.S,"Object",{create:n(38)})},function(e,t,n){var r=n(6);r(r.S+r.F*!n(5),"Object",{defineProperties:n(39)})},function(e,t,n){var r=n(6);r(r.S+r.F*!n(5),"Object",{defineProperty:n(11).f})},function(e,t,n){var r=n(25),o=n(40);n(85)("keys",function(){return function(e){return o(r(e))}})},function(e,t,n){"use strict";var r=n(87)(!0);n(80)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})})},70,function(e,t,n){var r=n(50)("unscopables"),o=Array.prototype;void 0==o[r]&&n(28)(o,r,{}),e.exports=function(e){o[r][e]=!0}},[124,16],function(e,t,n){var r=n(47),o=n(108),i=n(116),u=n(115),c=n(102);e.exports=function(e,t){var n=1==e,a=2==e,f=3==e,s=4==e,l=6==e,p=5==e||l,d=t||c;return function(t,c,v){for(var h,m,g=i(t),y=o(g),x=r(c,v,3),w=u(y.length),P=0,j=n?d(t,w):a?d(t,0):void 0;w>P;P++)if((p||P in y)&&(h=y[P],m=x(h,P,g),e))if(n)j[P]=m;else if(m)switch(e){case 3:return!0;case 5:return h;case 6:return P;case 2:j.push(h)}else if(s)return!1;return l?-1:f||s?s:j}}},function(e,t,n){var r=n(16),o=n(109),i=n(50)("species");e.exports=function(e){var t;return o(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!o(t.prototype)||(t=void 0),r(t)&&(t=t[i],null===t&&(t=void 0))),void 0===t?Array:t}},function(e,t,n){var r=n(101);e.exports=function(e,t){return new(r(e))(t)}},18,[127,16,12],function(e,t,n){var r=n(12),o=n(26),i=n(28),u=n(112),c=n(47),a="prototype",f=function(e,t,n){var s,l,p,d,v=e&f.F,h=e&f.G,m=e&f.S,g=e&f.P,y=e&f.B,x=h?r:m?r[t]||(r[t]={}):(r[t]||{})[a],w=h?o:o[t]||(o[t]={}),P=w[a]||(w[a]={});h&&(n=t);for(s in n)l=!v&&x&&void 0!==x[s],p=(l?x:n)[s],d=y&&l?c(p,r):g&&"function"==typeof p?c(Function.call,p):p,x&&u(x,s,p,e&f.U),w[s]!=p&&i(w,s,d),g&&P[s]!=p&&(P[s]=p)};r.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,e.exports=f},14,[129,27,48,104],[130,46],function(e,t,n){var r=n(46);e.exports=Array.isArray||function(e){return"Array"==r(e)}},[131,99,107,117,27],22,function(e,t,n){var r=n(12),o=n(28),i=n(106),u=n(49)("src"),c="toString",a=Function[c],f=(""+a).split(c);n(26).inspectSource=function(e){return a.call(e)},(e.exports=function(e,t,n,c){var a="function"==typeof n;a&&(i(n,"name")||o(n,"name",t)),e[t]!==n&&(a&&(i(n,u)||o(n,u,e[t]?""+e[t]:f.join(String(t)))),e===r?e[t]=n:c?e[t]?e[t]=n:o(e,t,n):(delete e[t],o(e,t,n)))})(Function.prototype,c,function(){return"function"==typeof this&&this[u]||a.call(this)})},[132,12],24,[133,114],[134,103],[135,16],function(e,t,n){"use strict";var r=n(105),o=n(100)(5),i="find",u=!0;i in[]&&Array(1)[i](function(){u=!1}),r(r.P+r.F*u,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(98)(i)},function(e,t){},119,function(e,t,n){e.exports=n.p+"./pics/device-mockup.png"},function(e,t,n){e.exports=n.p+"./pics/me.png"},function(e,t,n){e.exports=n.p+"./pics/sprite.png"},function(e,t,n,r){var o=n(r);e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},function(e,t,n,r){var o=n(r);e.exports=function(e,t,n){if(o(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},function(e,t,n,r){e.exports=!n(r)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,n,r,o){var i=n(r),u=n(o).document,c=i(u)&&i(u.createElement);e.exports=function(e){return c?u.createElement(e):{}}},function(e,t,n,r,o,i){var u=n(r),c=n(o);e.exports=n(i)?function(e,t,n){return u.f(e,t,c(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n,r,o,i){e.exports=!n(r)&&!n(o)(function(){return 7!=Object.defineProperty(n(i)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n,r){var o=n(r);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==o(e)?e.split(""):Object(e)}},function(e,t,n,r,o,i,u){var c=n(r),a=n(o),f=n(i),s=Object.defineProperty;t.f=n(u)?Object.defineProperty:function(e,t,n){if(c(e),t=f(t,!0),c(n),a)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n,r){var o=n(r),i="__core-js_shared__",u=o[i]||(o[i]={});e.exports=function(e){return u[e]||(u[e]={})}},function(e,t,n,r){var o=n(r),i=Math.min;e.exports=function(e){return e>0?i(o(e),9007199254740991):0}},function(e,t,n,r){var o=n(r);e.exports=function(e){return Object(o(e))}},function(e,t,n,r){var o=n(r);e.exports=function(e,t){if(!o(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!o(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},function(e,t,n,r,o,i){var u=n(r)("wks"),c=n(o),a=n(i).Symbol,f="function"==typeof a,s=e.exports=function(e){return u[e]||(u[e]=f&&a[e]||(f?a:c)("Symbol."+e))};s.store=u}]));