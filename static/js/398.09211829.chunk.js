"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[398],{7247:function(t,e,n){var r=n(5318);e.Z=void 0;var o=r(n(5649)),a=n(184),i=(0,o.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=i},1286:function(t,e,n){var r=n(5318);e.Z=void 0;var o=r(n(5649)),a=n(184),i=(0,o.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");e.Z=i},4708:function(t,e,n){var r=n(7462),o=n(2791),a=n(1402),i=n(5502),u=n(184),l=function(t,e){return(0,r.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},e&&{colorScheme:t.palette.mode})},c=function(t){return(0,r.Z)({color:(t.vars||t).palette.text.primary},t.typography.body1,{backgroundColor:(t.vars||t).palette.background.default,"@media print":{backgroundColor:(t.vars||t).palette.common.white}})};e.ZP=function(t){var e=(0,a.Z)({props:t,name:"MuiCssBaseline"}),n=e.children,s=e.enableColorScheme,d=void 0!==s&&s;return(0,u.jsxs)(o.Fragment,{children:[(0,u.jsx)(i.Z,{styles:function(t){return function(t){var e,n,o={html:l(t,arguments.length>1&&void 0!==arguments[1]&&arguments[1]),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:t.typography.fontWeightBold},body:(0,r.Z)({margin:0},c(t),{"&::backdrop":{backgroundColor:(t.vars||t).palette.background.default}})},a=null==(e=t.components)||null==(n=e.MuiCssBaseline)?void 0:n.styleOverrides;return a&&(o=[o,a]),o}(t,d)}}),n]})}},5193:function(t,e,n){var r;n.d(e,{Z:function(){return f}});var o=n(885),a=n(2791),i=n(7301),u=n(3073),l=n(162);function c(t,e,n,r,i){var u="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,c=a.useState((function(){return i&&u?n(t).matches:r?r(t).matches:e})),s=(0,o.Z)(c,2),d=s[0],f=s[1];return(0,l.Z)((function(){var e=!0;if(u){var r=n(t),o=function(){e&&f(r.matches)};return o(),r.addListener(o),function(){e=!1,r.removeListener(o)}}}),[t,n,u]),d}var s=(r||(r=n.t(a,2))).useSyncExternalStore;function d(t,e,n,r){var i=a.useCallback((function(){return e}),[e]),u=a.useMemo((function(){if(null!==r){var e=r(t).matches;return function(){return e}}return i}),[i,t,r]),l=a.useMemo((function(){if(null===n)return[i,function(){return function(){}}];var e=n(t);return[function(){return e.matches},function(t){return e.addListener(t),function(){e.removeListener(t)}}]}),[i,n,t]),c=(0,o.Z)(l,2),d=c[0],f=c[1];return s(f,d,u)}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,i.Z)(),r="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,o=(0,u.Z)({name:"MuiUseMediaQuery",props:e,theme:n}),a=o.defaultMatches,l=void 0!==a&&a,f=o.matchMedia,v=void 0===f?r?window.matchMedia:null:f,h=o.ssrMatchMedia,m=void 0===h?null:h,p=o.noSsr;var y="function"===typeof t?t(n):t;y=y.replace(/^@media( ?)/m,"");var g=void 0!==s?d:c,b=g(y,l,v,m,p);return b}},5899:function(t,e,n){n.d(e,{frZ:function(){return d}});var r=n(2791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),i=function(){return i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)},u=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function l(t){return t&&t.map((function(t,e){return r.createElement(t.tag,i({key:e},t.attr),l(t.child))}))}function c(t){return function(e){return r.createElement(s,i({attr:i({},t.attr)},e),l(t.child))}}function s(t){var e=function(e){var n,o=t.attr,a=t.size,l=t.title,c=u(t,["attr","size","title"]),s=a||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,c,{className:n,style:i(i({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),t.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(t){return e(t)})):e(o)}function d(t){return c({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{opacity:"0.2",fillRule:"evenodd",clipRule:"evenodd",d:"M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"currentColor"}},{tag:"path",attr:{d:"M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z",fill:"currentColor"}}]})(t)}}}]);
//# sourceMappingURL=398.09211829.chunk.js.map