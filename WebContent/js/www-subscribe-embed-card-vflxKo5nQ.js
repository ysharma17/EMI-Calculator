(function(){var k=this;function l(a,b){var c=a.split("."),d=k;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}function aa(a){a=a.split(".");for(var b=k,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function n(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function q(a){return"string"==typeof a};function t(a,b){return a<b?-1:a>b?1:0};var v=Array.prototype,ba=v.indexOf?function(a,b,c){return v.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ca=v.filter?function(a,b,c){return v.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var p=g[h];b.call(c,p,h,a)&&(e[f++]=p)}return e};
function da(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e,f;(f="array"==n(d))||(e=d,f=n(e),f=(e="array"==f||"object"==f&&"number"==typeof e.length)&&Object.prototype.hasOwnProperty.call(d,"callee"));if(f)a.push.apply(a,d);else if(e){f=a.length;for(var g=d.length,h=0;h<g;h++)a[f+h]=d[h]}else a.push(d)}};function ea(a){if(a.classList)return a.classList;a=a.className;return q(a)&&a.match(/\S+/g)||[]}function fa(a,b){var c;a.classList?c=a.classList.contains(b):(c=ea(a),c=0<=ba(c,b));return c}function ga(a,b){a.classList?a.classList.add(b):fa(a,b)||(a.className+=0<a.className.length?" "+b:b)}function ha(a,b){a.classList?a.classList.remove(b):fa(a,b)&&(a.className=ca(ea(a),function(a){return a!=b}).join(" "))};function ia(a,b){this.width=a;this.height=b};var ja="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ka(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ja.length;f++)c=ja[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var y;r:{var la=k.navigator;if(la){var ma=la.userAgent;if(ma){y=ma;break r}}y=""};var na=-1!=y.indexOf("Opera")||-1!=y.indexOf("OPR"),z=-1!=y.indexOf("Trident")||-1!=y.indexOf("MSIE"),B=-1!=y.indexOf("Gecko")&&-1==y.toLowerCase().indexOf("webkit")&&!(-1!=y.indexOf("Trident")||-1!=y.indexOf("MSIE")),oa=-1!=y.toLowerCase().indexOf("webkit");function pa(){var a=k.document;return a?a.documentMode:void 0}
var qa=function(){var a="",b;if(na&&k.opera)return a=k.opera.version,"function"==n(a)?a():a;B?b=/rv\:([^\);]+)(\)|;)/:z?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:oa&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(y))?a[1]:"");return z&&(b=pa(),b>parseFloat(a))?String(b):a}(),ra={};
function sa(a){if(!ra[a]){for(var b=0,c=String(qa).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",p=RegExp("(\\d*)(\\D*)","g"),u=RegExp("(\\d*)(\\D*)","g");do{var m=p.exec(g)||["","",""],r=u.exec(h)||["","",""];if(0==m[0].length&&0==r[0].length)break;b=t(0==m[1].length?0:parseInt(m[1],10),0==r[1].length?0:parseInt(r[1],10))||t(0==m[2].length,0==r[2].length)||t(m[2],
r[2])}while(0==b)}ra[a]=0<=b}}var ta=k.document,ua=ta&&z?pa()||("CSS1Compat"==ta.compatMode?parseInt(qa,10):5):void 0;var C;if(!(C=!B&&!z)){var D;if(D=z)D=z&&9<=ua;C=D}C||B&&sa("1.9.1");z&&sa("9");function va(){var a=document;return q("yt-subscribe-card")?a.getElementById("yt-subscribe-card"):"yt-subscribe-card"};function wa(a){var b=a.offsetWidth,c=a.offsetHeight,d=oa&&!b&&!c;if((void 0===b||d)&&a.getBoundingClientRect){var e;r:{try{e=a.getBoundingClientRect()}catch(f){e={left:0,top:0,right:0,bottom:0};break r}z&&a.ownerDocument.body&&(a=a.ownerDocument,e.left-=a.documentElement.clientLeft+a.body.clientLeft,e.top-=a.documentElement.clientTop+a.body.clientTop)}return new ia(e.right-e.left,e.bottom-e.top)}return new ia(b,c)};var E=window,F=document,xa=E.location;function ya(){}var za=/\[native code\]/;function G(a,b,c){return a[b]=a[b]||c}function Aa(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}function Ba(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}function H(){var a;if((a=Object.create)&&za.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}var I=G(E,"gapi",{});var J;J=G(E,"___jsl",H());G(J,"I",0);G(J,"hel",10);function Ca(){var a=xa.href,b;if(J.dpo)b=J.h;else{b=J.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}function Da(a){var b=G(J,"PQ",[]);J.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}function K(a){return G(G(J,"H",H()),a,H())};var L=G(J,"perf",H());G(L,"g",H());var Ea=G(L,"i",H());G(L,"r",[]);H();H();function M(a,b,c){b&&0<b.length&&(b=Fa(b),c&&0<c.length&&(b+="___"+Fa(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=G(Ea,"_p",H()),G(b,c,H())[a]=(new Date).getTime(),b=L.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}function Fa(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")};var Ga=H(),N=[];function O(a){throw Error("Bad hint"+(a?": "+a:""));};N.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?J[b]=G(J,b,[]).concat(c):G(J,b,c)}if(b=a.u)a=G(J,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);var Ha=/^(\/[a-zA-Z0-9_\-]+)+$/,Ia=/^[a-zA-Z0-9\-_\.,!]+$/,Ja=/^gapi\.loaded_[0-9]+$/,Ka=/^[a-zA-Z0-9,._-]+$/;function La(a,b,c,d){var e=a.split(";"),f=Ga[e.shift()],g=null;f&&(g=f(e,b,c,d));if(b=g)b=g,c=b.match(Ma),d=b.match(Na),b=!!d&&1===d.length&&Oa.test(b)&&!!c&&1===c.length;b||O(a);return g}
function Pa(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}a=Qa(a);Ja.test(c)||O("invalid_callback");b=Ra(b);d=d&&d.length?Ra(d):null;return[encodeURIComponent(a.g).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.a?"/am="+e(a.a):"",a.b?"/rs="+e(a.b):"","/cb=",e(c)].join("")}
function Qa(a){"/"!==a.charAt(0)&&O("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))O("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Ha.test(b)||O("invalid_prefix");c=P(a,"k",!0);d=P(a,"am");a=P(a,"rs");return{g:b,version:c,a:d,b:a}}
function Ra(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Ka.test(e)&&b.push(e)}return b.join(",")}function P(a,b,c){a=a[b];!a&&c&&O("missing: "+b);if(a){if(Ia.test(a))return a;O("invalid: "+b)}return null}var Oa=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Na=/\/cb=/g,Ma=/\/\//g;function Sa(){var a=Ca();if(!a)throw Error("Bad hint");return a}
Ga.m=function(a,b,c,d){(a=a[0])||O("missing_hint");return"https://apis.google.com"+Pa(a,b,c,d)};var Q=decodeURI("%73cript");function Ta(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>Aa.call(b,e)&&c.push(e)}return c}function Ua(a){"loading"!=F.readyState?Va(a):F.write("<"+Q+' src="'+encodeURI(a)+'"></'+Q+">")}function Va(a){var b=F.createElement(Q);b.setAttribute("src",a);b.async="true";(a=F.getElementsByTagName(Q)[0])?a.parentNode.insertBefore(b,a):(F.head||F.body||F.documentElement).appendChild(b)}
function Wa(a,b){var c=b&&b._c;if(c)for(var d=0;d<N.length;d++){var e=N[d][0],f=N[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}function Xa(a,b){Ya(function(){var c;c=b===Ca()?G(I,"_",H()):H();c=G(K(b),"_",c);a(c)})}
function R(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Wa(a,c);var d=a?a.split(":"):[],e=c.h||Sa(),f=G(J,"ah",H());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var p=h.split("."),p=f[h]||f[p[1]&&"ns:"+p[0]||""]||e,u=g.length&&g[g.length-1]||null,m=u;u&&u.hint==p||(m={hint:p,d:[]},g.push(m));m.d.push(h)}var r=g.length;if(1<r){var A=c.callback;A&&(c.callback=function(){0==--r&&A()})}for(;d=g.shift();)Za(d.d,c,d.hint)}else Za(d||[],c,e)}
function Za(a,b,c){function d(a,b){if(u)return 0;E.clearTimeout(p);r.push.apply(r,s);var d=((I||{}).config||{}).update;d?d(f):f&&G(J,"cu",[]).push(f);if(b){M("me0",a,A);try{Xa(b,c)}finally{M("me1",a,A)}}return 1}a=Ba(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,p=null,u=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var m=G(K(c),"r",[]).sort(),r=G(K(c),"L",[]).sort(),A=[].concat(m);0<g&&(p=E.setTimeout(function(){u=!0;h()},g));
var s=Ta(a,r);if(s.length){var s=Ta(a,m),w=G(J,"CP",[]),x=w.length;w[x]=function(a){function b(){var a=w[x+1];a&&a()}function c(b){w[x]=null;d(s,a)&&Da(function(){e&&e();b()})}if(!a)return 0;M("ml1",s,A);0<x&&w[x-1]?w[x]=function(){c(b)}:c(b)};if(s.length){var X="loaded_"+J.I++;I[X]=function(a){w[x](a);I[X]=null};a=La(c,s,"gapi."+X,m);m.push.apply(m,s);M("ml0",s,A);b.sync||E.___gapisync?Ua(a):Va(a)}else w[x](ya)}else d(s)&&e&&e()};function Ya(a){if(J.hee&&0<J.hel)try{return a()}catch(b){J.hel--,R("debug_error",function(){try{window.___jsl.hefn(b)}catch(a){throw b;}})}else return a()};I.load=function(a,b){return Ya(function(){return R(a,b)})};var S=window.yt&&window.yt.config_||{};l("yt.config_",S);l("yt.tokens_",window.yt&&window.yt.tokens_||{});l("yt.msgs_",window.yt&&window.yt.msgs_||{});function $a(){return aa("gapi.iframes.getContext")()}function ab(){return aa("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER")};function bb(a){try{var b=cb,c=ab();a.register("msg-hovercard-subscription",b,c)}catch(d){}}function cb(a){if(a){a=!!a.isSubscribed;var b=va();a?ha(b,"subscribe"):ga(b,"subscribe");a?ga(b,"subscribed"):ha(b,"subscribed")}};var T;
function U(){var a;a=va();var b;n:{b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.display||b.getPropertyValue("display")||"";break n}b=""}if("none"!=(b||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display))a=wa(a);else{b=a.style;var c=b.display,d=b.visibility,e=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";a=wa(a);b.display=c;b.position=e;b.visibility=d}a=
{width:a.width,height:a.height};$a().ready(a,null,void 0);a=ab();$a().addOnOpenerHandler(bb,null,a)}T="function"==n(U)?{callback:U}:U||{};
if("GAPI_HINT_OVERRIDE"in S&&S.GAPI_HINT_OVERRIDE){var db;var V=document.location.href;if(-1!=V.indexOf("?")){var V=(V||"").split("#")[0],eb=V.split("?",2),W=1<eb.length?eb[1]:eb[0];"?"==W.charAt(0)&&(W=W.substr(1));for(var fb=W.split("&"),Y={},gb=0,hb=fb.length;gb<hb;gb++){var Z=fb[gb].split("=");if(1==Z.length&&Z[0]||2==Z.length){var $=decodeURIComponent((Z[0]||"").replace(/\+/g," ")),ib=decodeURIComponent((Z[1]||"").replace(/\+/g," "));$ in Y?"array"==n(Y[$])?da(Y[$],ib):Y[$]=[Y[$],ib]:Y[$]=ib}}db=
Y}else db={};var jb=db.gapi_jsh;jb&&ka(T,{_c:{jsl:{h:jb}}})}R("gapi.iframes:gapi.iframes.style.common",T);})();