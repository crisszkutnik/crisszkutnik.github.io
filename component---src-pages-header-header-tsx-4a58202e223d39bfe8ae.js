(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6kRj":function(e,t,n){},iUgQ:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var o=n("q1tI"),r=n.n(o),a=(n("6kRj"),n("0L7f")),i=n("oBNZ"),l=n.n(i);function u(){return r.a.createElement("div",{id:"header"},r.a.createElement(l.a,{left:!0},r.a.createElement("div",{id:"left-side"},r.a.createElement(a.a.Consumer,null,(function(e){return e?r.a.createElement("div",{id:"left-content"},r.a.createElement("div",{id:"name-text"},r.a.createElement("p",null,e.header_top),r.a.createElement("h1",null,"CRISTOBAL SZKUTNIK"),r.a.createElement("h2",null,e.header_degree)),r.a.createElement("div",{id:"description-text"},r.a.createElement("p",null,function(e){var t=new Date(2001,3,25),n=new Date(Date.now()-t.getTime()).getUTCFullYear()-1970+"";return e.replace("$AGE",n)}(e.header_text))),r.a.createElement("div",{id:"header-button"},r.a.createElement("span",{onClick:function(){return window.scrollTo(0,window.innerHeight)}},e.header_btn))):r.a.createElement(r.a.Fragment,null)})))))}},oBNZ:function(e,t,n){"use strict";function o(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function r(e,t){var n=t.left,o=t.right,r=t.up,a=t.down,i=t.top,l=t.bottom,u=t.big,d=t.mirror,f=t.opposite,s=(n?1:0)|(o?2:0)|(i||a?4:0)|(l||r?8:0)|(d?16:0)|(f?32:0)|(e?64:0)|(u?128:0);if(m.hasOwnProperty(s))return m[s];var v=n||o||r||a||i||l,p=void 0,b=void 0;if(v){if(!d!=!(e&&f)){var h=[o,n,l,i,a,r];n=h[0],o=h[1],i=h[2],l=h[3],r=h[4],a=h[5]}var w=u?"2000px":"100%";p=n?"-"+w:o?w:"0",b=a||i?"-"+w:r||l?w:"0"}return m[s]=(0,c.animation)((e?"to":"from")+" {"+(v?" transform: translate3d("+p+", "+b+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),m[s]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.defaults,t=e.children,n=(e.out,e.forever),a=e.timeout,i=e.duration,l=void 0===i?c.defaults.duration:i,u=e.delay,f=void 0===u?c.defaults.delay:u,m=e.count,s=void 0===m?c.defaults.count:m,v=o(e,["children","out","forever","timeout","duration","delay","count"]),p={make:r,duration:void 0===a?l:a,delay:f,forever:n,count:s,style:{animationFillMode:"both"},reverse:v.left};return(0,d.default)(v,p,p,t)}Object.defineProperty(t,"__esModule",{value:!0});var i,l=n("17x9"),u=n("eH+L"),d=(i=u)&&i.__esModule?i:{default:i},c=n("ar19"),f={out:l.bool,left:l.bool,right:l.bool,top:l.bool,bottom:l.bool,big:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool},m={};a.propTypes=f,t.default=a,e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-header-header-tsx-4a58202e223d39bfe8ae.js.map