var Tl=Object.defineProperty;var Ml=(s,t,e)=>t in s?Tl(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var O=(s,t,e)=>Ml(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();function Pn(){}function Cr(s){return s()}function Wa(){return Object.create(null)}function _s(s){s.forEach(Cr)}function wr(s){return typeof s=="function"}function El(s,t){return s!=s?t==t:s!==t||s&&typeof s=="object"||typeof s=="function"}function xl(s){return Object.keys(s).length===0}function Ye(s,t){s.appendChild(t)}function ue(s,t,e){s.insertBefore(t,e||null)}function ce(s){s.parentNode&&s.parentNode.removeChild(s)}function Sl(s,t){for(let e=0;e<s.length;e+=1)s[e]&&s[e].d(t)}function ye(s){return document.createElement(s)}function Rr(s){return document.createTextNode(s)}function Ne(){return Rr(" ")}function bl(s,t,e,i){return s.addEventListener(t,e,i),()=>s.removeEventListener(t,e,i)}function ee(s,t,e){e==null?s.removeAttribute(t):s.getAttribute(t)!==e&&s.setAttribute(t,e)}function Al(s){return Array.from(s.childNodes)}function Pl(s,t){t=""+t,s.data!==t&&(s.data=t)}let Cn;function Sn(s){Cn=s}function Cl(){if(!Cn)throw new Error("Function called outside component initialization");return Cn}function wl(s){Cl().$$.on_mount.push(s)}const sn=[],Ya=[];let rn=[];const Xa=[],Rl=Promise.resolve();let ha=!1;function Ll(){ha||(ha=!0,Rl.then(Lr))}function da(s){rn.push(s)}const Cs=new Set;let Fi=0;function Lr(){if(Fi!==0)return;const s=Cn;do{try{for(;Fi<sn.length;){const t=sn[Fi];Fi++,Sn(t),Il(t.$$)}}catch(t){throw sn.length=0,Fi=0,t}for(Sn(null),sn.length=0,Fi=0;Ya.length;)Ya.pop()();for(let t=0;t<rn.length;t+=1){const e=rn[t];Cs.has(e)||(Cs.add(e),e())}rn.length=0}while(sn.length);for(;Xa.length;)Xa.pop()();ha=!1,Cs.clear(),Sn(s)}function Il(s){if(s.fragment!==null){s.update(),_s(s.before_update);const t=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,t),s.after_update.forEach(da)}}function Dl(s){const t=[],e=[];rn.forEach(i=>s.indexOf(i)===-1?t.push(i):e.push(i)),e.forEach(i=>i()),rn=t}const Ol=new Set;function Nl(s,t){s&&s.i&&(Ol.delete(s),s.i(t))}function $a(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function zl(s,t,e){const{fragment:i,after_update:n}=s.$$;i&&i.m(t,e),da(()=>{const a=s.$$.on_mount.map(Cr).filter(wr);s.$$.on_destroy?s.$$.on_destroy.push(...a):_s(a),s.$$.on_mount=[]}),n.forEach(da)}function Ul(s,t){const e=s.$$;e.fragment!==null&&(Dl(e.after_update),_s(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function Fl(s,t){s.$$.dirty[0]===-1&&(sn.push(s),Ll(),s.$$.dirty.fill(0)),s.$$.dirty[t/31|0]|=1<<t%31}function Gl(s,t,e,i,n,a,r=null,o=[-1]){const c=Cn;Sn(s);const l=s.$$={fragment:null,ctx:[],props:a,update:Pn,not_equal:n,bound:Wa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Wa(),dirty:o,skip_bound:!1,root:t.target||c.$$.root};r&&r(l.root);let d=!1;if(l.ctx=e?e(s,t.props||{},(u,p,...m)=>{const g=m.length?m[0]:p;return l.ctx&&n(l.ctx[u],l.ctx[u]=g)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](g),d&&Fl(s,u)),p}):[],l.update(),d=!0,_s(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){const u=Al(t.target);l.fragment&&l.fragment.l(u),u.forEach(ce)}else l.fragment&&l.fragment.c();t.intro&&Nl(s.$$.fragment),zl(s,t.target,t.anchor),Lr()}Sn(c)}class Bl{constructor(){O(this,"$$");O(this,"$$set")}$destroy(){Ul(this,1),this.$destroy=Pn}$on(t,e){if(!wr(e))return Pn;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(e),()=>{const n=i.indexOf(e);n!==-1&&i.splice(n,1)}}$set(t){this.$$set&&!xl(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const kl="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(kl);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ba="160",Gi={ROTATE:0,DOLLY:1,PAN:2},Bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hl=0,Ka=1,Vl=2,Ir=1,Wl=2,ai=3,Ti=0,Le=1,oi=2,vi=0,ln=1,qa=2,ja=3,Za=4,Yl=5,Ci=100,Xl=101,$l=102,Ja=103,Qa=104,Kl=200,ql=201,jl=202,Zl=203,ua=204,fa=205,Jl=206,Ql=207,tc=208,ec=209,ic=210,nc=211,sc=212,ac=213,oc=214,rc=0,lc=1,cc=2,cs=3,hc=4,dc=5,uc=6,fc=7,Aa=0,pc=1,mc=2,_i=0,gc=1,vc=2,_c=3,yc=4,Tc=5,Mc=6,Dr=300,hn=301,dn=302,pa=303,ma=304,ys=306,ga=1e3,$e=1001,va=1002,Pe=1003,to=1004,ws=1005,Ge=1006,Ec=1007,wn=1008,yi=1009,xc=1010,Sc=1011,Pa=1012,Or=1013,mi=1014,gi=1015,Rn=1016,Nr=1017,zr=1018,Ri=1020,bc=1021,Ke=1023,Ac=1024,Pc=1025,Li=1026,un=1027,Cc=1028,Ur=1029,wc=1030,Fr=1031,Gr=1033,Rs=33776,Ls=33777,Is=33778,Ds=33779,eo=35840,io=35841,no=35842,so=35843,Br=36196,ao=37492,oo=37496,ro=37808,lo=37809,co=37810,ho=37811,uo=37812,fo=37813,po=37814,mo=37815,go=37816,vo=37817,_o=37818,yo=37819,To=37820,Mo=37821,Os=36492,Eo=36494,xo=36495,Rc=36283,So=36284,bo=36285,Ao=36286,kr=3e3,Ii=3001,Lc=3200,Ic=3201,Hr=0,Dc=1,ke="",Te="srgb",li="srgb-linear",Ca="display-p3",Ts="display-p3-linear",hs="linear",ie="srgb",ds="rec709",us="p3",ki=7680,Po=519,Oc=512,Nc=513,zc=514,Vr=515,Uc=516,Fc=517,Gc=518,Bc=519,Co=35044,wo="300 es",_a=1035,ri=2e3,fs=2001;class Ui{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const a=n.indexOf(e);a!==-1&&n.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let a=0,r=n.length;a<r;a++)n[a].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rs=Math.PI/180,ya=180/Math.PI;function Ln(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ee[s&255]+Ee[s>>8&255]+Ee[s>>16&255]+Ee[s>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]).toLowerCase()}function Ce(s,t,e){return Math.max(t,Math.min(e,s))}function kc(s,t){return(s%t+t)%t}function Ns(s,t,e){return(1-e)*s+e*t}function Ro(s){return(s&s-1)===0&&s!==0}function Ta(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function vn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function we(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Hc={DEG2RAD:rs};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*n+t.x,this.y=a*n+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,i,n,a,r,o,c,l){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,r,o,c,l)}set(t,e,i,n,a,r,o,c,l){const d=this.elements;return d[0]=t,d[1]=n,d[2]=o,d[3]=e,d[4]=a,d[5]=c,d[6]=i,d[7]=r,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,r=i[0],o=i[3],c=i[6],l=i[1],d=i[4],u=i[7],p=i[2],m=i[5],g=i[8],v=n[0],h=n[3],f=n[6],T=n[1],_=n[4],y=n[7],M=n[2],S=n[5],x=n[8];return a[0]=r*v+o*T+c*M,a[3]=r*h+o*_+c*S,a[6]=r*f+o*y+c*x,a[1]=l*v+d*T+u*M,a[4]=l*h+d*_+u*S,a[7]=l*f+d*y+u*x,a[2]=p*v+m*T+g*M,a[5]=p*h+m*_+g*S,a[8]=p*f+m*y+g*x,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],d=t[8];return e*r*d-e*o*l-i*a*d+i*o*c+n*a*l-n*r*c}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],d=t[8],u=d*r-o*l,p=o*c-d*a,m=l*a-r*c,g=e*u+i*p+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(n*l-d*i)*v,t[2]=(o*i-n*r)*v,t[3]=p*v,t[4]=(d*e-n*c)*v,t[5]=(n*a-o*e)*v,t[6]=m*v,t[7]=(i*c-l*e)*v,t[8]=(r*e-i*a)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*r+l*o)+r+t,-n*l,n*c,-n*(-l*r+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(zs.makeScale(t,e)),this}rotate(t){return this.premultiply(zs.makeRotation(-t)),this}translate(t,e){return this.premultiply(zs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zs=new jt;function Wr(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ps(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Vc(){const s=ps("canvas");return s.style.display="block",s}const Lo={};function bn(s){s in Lo||(Lo[s]=!0,console.warn(s))}const Io=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Do=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zn={[li]:{transfer:hs,primaries:ds,toReference:s=>s,fromReference:s=>s},[Te]:{transfer:ie,primaries:ds,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ts]:{transfer:hs,primaries:us,toReference:s=>s.applyMatrix3(Do),fromReference:s=>s.applyMatrix3(Io)},[Ca]:{transfer:ie,primaries:us,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Do),fromReference:s=>s.applyMatrix3(Io).convertLinearToSRGB()}},Wc=new Set([li,Ts]),Qt={enabled:!0,_workingColorSpace:li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Wc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=zn[t].toReference,n=zn[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return zn[s].primaries},getTransfer:function(s){return s===ke?hs:zn[s].transfer}};function cn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Hi;class Yr{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hi===void 0&&(Hi=ps("canvas")),Hi.width=t.width,Hi.height=t.height;const i=Hi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ps("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),a=n.data;for(let r=0;r<a.length;r++)a[r]=cn(a[r]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(cn(e[i]/255)*255):e[i]=cn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yc=0;class Xr{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Ln(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?a.push(Fs(n[r].image)):a.push(Fs(n[r]))}else a=Fs(n);i.url=a}return e||(t.images[this.uuid]=i),i}}function Fs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xc=0;class ze extends Ui{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,i=$e,n=$e,a=Ge,r=wn,o=Ke,c=yi,l=ze.DEFAULT_ANISOTROPY,d=ke){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Ln(),this.name="",this.source=new Xr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(bn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Ii?Te:ke),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dr)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ga:t.x=t.x-Math.floor(t.x);break;case $e:t.x=t.x<0?0:1;break;case va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ga:t.y=t.y-Math.floor(t.y);break;case $e:t.y=t.y<0?0:1;break;case va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Te?Ii:kr}set encoding(t){bn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ii?Te:ke}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Dr;ze.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,i=0,n=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n+r[12]*a,this.y=r[1]*e+r[5]*i+r[9]*n+r[13]*a,this.z=r[2]*e+r[6]*i+r[10]*n+r[14]*a,this.w=r[3]*e+r[7]*i+r[11]*n+r[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,a;const c=t.elements,l=c[0],d=c[4],u=c[8],p=c[1],m=c[5],g=c[9],v=c[2],h=c[6],f=c[10];if(Math.abs(d-p)<.01&&Math.abs(u-v)<.01&&Math.abs(g-h)<.01){if(Math.abs(d+p)<.1&&Math.abs(u+v)<.1&&Math.abs(g+h)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,y=(m+1)/2,M=(f+1)/2,S=(d+p)/4,x=(u+v)/4,z=(g+h)/4;return _>y&&_>M?_<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(_),n=S/i,a=x/i):y>M?y<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(y),i=S/n,a=z/n):M<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(M),i=x/a,n=z/a),this.set(i,n,a,e),this}let T=Math.sqrt((h-g)*(h-g)+(u-v)*(u-v)+(p-d)*(p-d));return Math.abs(T)<.001&&(T=1),this.x=(h-g)/T,this.y=(u-v)/T,this.z=(p-d)/T,this.w=Math.acos((l+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $c extends Ui{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const n={width:t,height:e,depth:1};i.encoding!==void 0&&(bn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ii?Te:ke),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ze(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Xr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends $c{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class $r extends ze{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kc extends ze{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,a,r,o){let c=i[n+0],l=i[n+1],d=i[n+2],u=i[n+3];const p=a[r+0],m=a[r+1],g=a[r+2],v=a[r+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=d,t[e+3]=u;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==p||l!==m||d!==g){let h=1-o;const f=c*p+l*m+d*g+u*v,T=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const M=Math.sqrt(_),S=Math.atan2(M,f*T);h=Math.sin(h*S)/M,o=Math.sin(o*S)/M}const y=o*T;if(c=c*h+p*y,l=l*h+m*y,d=d*h+g*y,u=u*h+v*y,h===1-o){const M=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=M,l*=M,d*=M,u*=M}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,a,r){const o=i[n],c=i[n+1],l=i[n+2],d=i[n+3],u=a[r],p=a[r+1],m=a[r+2],g=a[r+3];return t[e]=o*g+d*u+c*m-l*p,t[e+1]=c*g+d*p+l*u-o*m,t[e+2]=l*g+d*m+o*p-c*u,t[e+3]=d*g-o*u-c*p-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,a=t._z,r=t._order,o=Math.cos,c=Math.sin,l=o(i/2),d=o(n/2),u=o(a/2),p=c(i/2),m=c(n/2),g=c(a/2);switch(r){case"XYZ":this._x=p*d*u+l*m*g,this._y=l*m*u-p*d*g,this._z=l*d*g+p*m*u,this._w=l*d*u-p*m*g;break;case"YXZ":this._x=p*d*u+l*m*g,this._y=l*m*u-p*d*g,this._z=l*d*g-p*m*u,this._w=l*d*u+p*m*g;break;case"ZXY":this._x=p*d*u-l*m*g,this._y=l*m*u+p*d*g,this._z=l*d*g+p*m*u,this._w=l*d*u-p*m*g;break;case"ZYX":this._x=p*d*u-l*m*g,this._y=l*m*u+p*d*g,this._z=l*d*g-p*m*u,this._w=l*d*u+p*m*g;break;case"YZX":this._x=p*d*u+l*m*g,this._y=l*m*u+p*d*g,this._z=l*d*g-p*m*u,this._w=l*d*u-p*m*g;break;case"XZY":this._x=p*d*u-l*m*g,this._y=l*m*u-p*d*g,this._z=l*d*g+p*m*u,this._w=l*d*u+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],a=e[8],r=e[1],o=e[5],c=e[9],l=e[2],d=e[6],u=e[10],p=i+o+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-c)*m,this._y=(a-l)*m,this._z=(r-n)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(d-c)/m,this._x=.25*m,this._y=(n+r)/m,this._z=(a+l)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(a-l)/m,this._x=(n+r)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(r-n)/m,this._x=(a+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,a=t._z,r=t._w,o=e._x,c=e._y,l=e._z,d=e._w;return this._x=i*d+r*o+n*l-a*c,this._y=n*d+r*c+a*o-i*l,this._z=a*d+r*l+i*c-n*o,this._w=r*d-i*o-n*c-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,a=this._z,r=this._w;let o=r*t._w+i*t._x+n*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=n,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*r+e*this._w,this._x=m*i+e*this._x,this._y=m*n+e*this._y,this._z=m*a+e*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),u=Math.sin((1-e)*d)/l,p=Math.sin(e*d)/l;return this._w=r*u+this._w*p,this._x=i*u+this._x*p,this._y=n*u+this._y*p,this._z=a*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(a),i*Math.cos(a),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,e=0,i=0){Z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*n,this.y=a[1]*e+a[4]*i+a[7]*n,this.z=a[2]*e+a[5]*i+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=t.elements,r=1/(a[3]*e+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*n+a[12])*r,this.y=(a[1]*e+a[5]*i+a[9]*n+a[13])*r,this.z=(a[2]*e+a[6]*i+a[10]*n+a[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,a=t.x,r=t.y,o=t.z,c=t.w,l=2*(r*n-o*i),d=2*(o*e-a*n),u=2*(a*i-r*e);return this.x=e+c*l+r*u-o*d,this.y=i+c*d+o*l-a*u,this.z=n+c*u+a*d-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n,this.y=a[1]*e+a[5]*i+a[9]*n,this.z=a[2]*e+a[6]*i+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,a=t.z,r=e.x,o=e.y,c=e.z;return this.x=n*c-a*o,this.y=a*r-i*c,this.z=i*o-n*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Gs.copy(this).projectOnVector(t),this.sub(Gs)}reflect(t){return this.sub(Gs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gs=new Z,Oo=new Ni;class In{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,He):He.fromBufferAttribute(a,r),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Un.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Un.copy(i.boundingBox)),Un.applyMatrix4(t.matrixWorld),this.union(Un)}const n=t.children;for(let a=0,r=n.length;a<r;a++)this.expandByObject(n[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_n),Fn.subVectors(this.max,_n),Vi.subVectors(t.a,_n),Wi.subVectors(t.b,_n),Yi.subVectors(t.c,_n),ci.subVectors(Wi,Vi),hi.subVectors(Yi,Wi),xi.subVectors(Vi,Yi);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-xi.z,xi.y,ci.z,0,-ci.x,hi.z,0,-hi.x,xi.z,0,-xi.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-xi.y,xi.x,0];return!Bs(e,Vi,Wi,Yi,Fn)||(e=[1,0,0,0,1,0,0,0,1],!Bs(e,Vi,Wi,Yi,Fn))?!1:(Gn.crossVectors(ci,hi),e=[Gn.x,Gn.y,Gn.z],Bs(e,Vi,Wi,Yi,Fn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ti=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],He=new Z,Un=new In,Vi=new Z,Wi=new Z,Yi=new Z,ci=new Z,hi=new Z,xi=new Z,_n=new Z,Fn=new Z,Gn=new Z,Si=new Z;function Bs(s,t,e,i,n){for(let a=0,r=s.length-3;a<=r;a+=3){Si.fromArray(s,a);const o=n.x*Math.abs(Si.x)+n.y*Math.abs(Si.y)+n.z*Math.abs(Si.z),c=t.dot(Si),l=e.dot(Si),d=i.dot(Si);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const qc=new In,yn=new Z,ks=new Z;class wa{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):qc.setFromPoints(t).getCenter(i);let n=0;for(let a=0,r=t.length;a<r;a++)n=Math.max(n,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yn.subVectors(t,this.center);const e=yn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(yn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ks.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yn.copy(t.center).add(ks)),this.expandByPoint(yn.copy(t.center).sub(ks))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new Z,Hs=new Z,Bn=new Z,di=new Z,Vs=new Z,kn=new Z,Ws=new Z;class Ra{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Hs.copy(t).add(e).multiplyScalar(.5),Bn.copy(e).sub(t).normalize(),di.copy(this.origin).sub(Hs);const a=t.distanceTo(e)*.5,r=-this.direction.dot(Bn),o=di.dot(this.direction),c=-di.dot(Bn),l=di.lengthSq(),d=Math.abs(1-r*r);let u,p,m,g;if(d>0)if(u=r*c-o,p=r*o-c,g=a*d,u>=0)if(p>=-g)if(p<=g){const v=1/d;u*=v,p*=v,m=u*(u+r*p+2*o)+p*(r*u+p+2*c)+l}else p=a,u=Math.max(0,-(r*p+o)),m=-u*u+p*(p+2*c)+l;else p=-a,u=Math.max(0,-(r*p+o)),m=-u*u+p*(p+2*c)+l;else p<=-g?(u=Math.max(0,-(-r*a+o)),p=u>0?-a:Math.min(Math.max(-a,-c),a),m=-u*u+p*(p+2*c)+l):p<=g?(u=0,p=Math.min(Math.max(-a,-c),a),m=p*(p+2*c)+l):(u=Math.max(0,-(r*a+o)),p=u>0?a:Math.min(Math.max(-a,-c),a),m=-u*u+p*(p+2*c)+l);else p=r>0?-a:a,u=Math.max(0,-(r*p+o)),m=-u*u+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Hs).addScaledVector(Bn,p),m}intersectSphere(t,e){ei.subVectors(t.center,this.origin);const i=ei.dot(this.direction),n=ei.dot(ei)-i*i,a=t.radius*t.radius;if(n>a)return null;const r=Math.sqrt(a-n),o=i-r,c=i+r;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,a,r,o,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(i=(t.min.x-p.x)*l,n=(t.max.x-p.x)*l):(i=(t.max.x-p.x)*l,n=(t.min.x-p.x)*l),d>=0?(a=(t.min.y-p.y)*d,r=(t.max.y-p.y)*d):(a=(t.max.y-p.y)*d,r=(t.min.y-p.y)*d),i>r||a>n||((a>i||isNaN(i))&&(i=a),(r<n||isNaN(n))&&(n=r),u>=0?(o=(t.min.z-p.z)*u,c=(t.max.z-p.z)*u):(o=(t.max.z-p.z)*u,c=(t.min.z-p.z)*u),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,i,n,a){Vs.subVectors(e,t),kn.subVectors(i,t),Ws.crossVectors(Vs,kn);let r=this.direction.dot(Ws),o;if(r>0){if(n)return null;o=1}else if(r<0)o=-1,r=-r;else return null;di.subVectors(this.origin,t);const c=o*this.direction.dot(kn.crossVectors(di,kn));if(c<0)return null;const l=o*this.direction.dot(Vs.cross(di));if(l<0||c+l>r)return null;const d=-o*di.dot(Ws);return d<0?null:this.at(d/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,i,n,a,r,o,c,l,d,u,p,m,g,v,h){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,r,o,c,l,d,u,p,m,g,v,h)}set(t,e,i,n,a,r,o,c,l,d,u,p,m,g,v,h){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=n,f[1]=a,f[5]=r,f[9]=o,f[13]=c,f[2]=l,f[6]=d,f[10]=u,f[14]=p,f[3]=m,f[7]=g,f[11]=v,f[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Xi.setFromMatrixColumn(t,0).length(),a=1/Xi.setFromMatrixColumn(t,1).length(),r=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),d=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){const p=r*d,m=r*u,g=o*d,v=o*u;e[0]=c*d,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=p-v*l,e[9]=-o*c,e[2]=v-p*l,e[6]=g+m*l,e[10]=r*c}else if(t.order==="YXZ"){const p=c*d,m=c*u,g=l*d,v=l*u;e[0]=p+v*o,e[4]=g*o-m,e[8]=r*l,e[1]=r*u,e[5]=r*d,e[9]=-o,e[2]=m*o-g,e[6]=v+p*o,e[10]=r*c}else if(t.order==="ZXY"){const p=c*d,m=c*u,g=l*d,v=l*u;e[0]=p-v*o,e[4]=-r*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=r*d,e[9]=v-p*o,e[2]=-r*l,e[6]=o,e[10]=r*c}else if(t.order==="ZYX"){const p=r*d,m=r*u,g=o*d,v=o*u;e[0]=c*d,e[4]=g*l-m,e[8]=p*l+v,e[1]=c*u,e[5]=v*l+p,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=r*c}else if(t.order==="YZX"){const p=r*c,m=r*l,g=o*c,v=o*l;e[0]=c*d,e[4]=v-p*u,e[8]=g*u+m,e[1]=u,e[5]=r*d,e[9]=-o*d,e[2]=-l*d,e[6]=m*u+g,e[10]=p-v*u}else if(t.order==="XZY"){const p=r*c,m=r*l,g=o*c,v=o*l;e[0]=c*d,e[4]=-u,e[8]=l*d,e[1]=p*u+v,e[5]=r*d,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*d,e[10]=v*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jc,t,Zc)}lookAt(t,e,i){const n=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),ui.crossVectors(i,De),ui.lengthSq()===0&&(Math.abs(i.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),ui.crossVectors(i,De)),ui.normalize(),Hn.crossVectors(De,ui),n[0]=ui.x,n[4]=Hn.x,n[8]=De.x,n[1]=ui.y,n[5]=Hn.y,n[9]=De.y,n[2]=ui.z,n[6]=Hn.z,n[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,r=i[0],o=i[4],c=i[8],l=i[12],d=i[1],u=i[5],p=i[9],m=i[13],g=i[2],v=i[6],h=i[10],f=i[14],T=i[3],_=i[7],y=i[11],M=i[15],S=n[0],x=n[4],z=n[8],E=n[12],A=n[1],F=n[5],U=n[9],K=n[13],R=n[2],N=n[6],k=n[10],W=n[14],H=n[3],q=n[7],Q=n[11],it=n[15];return a[0]=r*S+o*A+c*R+l*H,a[4]=r*x+o*F+c*N+l*q,a[8]=r*z+o*U+c*k+l*Q,a[12]=r*E+o*K+c*W+l*it,a[1]=d*S+u*A+p*R+m*H,a[5]=d*x+u*F+p*N+m*q,a[9]=d*z+u*U+p*k+m*Q,a[13]=d*E+u*K+p*W+m*it,a[2]=g*S+v*A+h*R+f*H,a[6]=g*x+v*F+h*N+f*q,a[10]=g*z+v*U+h*k+f*Q,a[14]=g*E+v*K+h*W+f*it,a[3]=T*S+_*A+y*R+M*H,a[7]=T*x+_*F+y*N+M*q,a[11]=T*z+_*U+y*k+M*Q,a[15]=T*E+_*K+y*W+M*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],a=t[12],r=t[1],o=t[5],c=t[9],l=t[13],d=t[2],u=t[6],p=t[10],m=t[14],g=t[3],v=t[7],h=t[11],f=t[15];return g*(+a*c*u-n*l*u-a*o*p+i*l*p+n*o*m-i*c*m)+v*(+e*c*m-e*l*p+a*r*p-n*r*m+n*l*d-a*c*d)+h*(+e*l*u-e*o*m-a*r*u+i*r*m+a*o*d-i*l*d)+f*(-n*o*d-e*c*u+e*o*p+n*r*u-i*r*p+i*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],d=t[8],u=t[9],p=t[10],m=t[11],g=t[12],v=t[13],h=t[14],f=t[15],T=u*h*l-v*p*l+v*c*m-o*h*m-u*c*f+o*p*f,_=g*p*l-d*h*l-g*c*m+r*h*m+d*c*f-r*p*f,y=d*v*l-g*u*l+g*o*m-r*v*m-d*o*f+r*u*f,M=g*u*c-d*v*c-g*o*p+r*v*p+d*o*h-r*u*h,S=e*T+i*_+n*y+a*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const x=1/S;return t[0]=T*x,t[1]=(v*p*a-u*h*a-v*n*m+i*h*m+u*n*f-i*p*f)*x,t[2]=(o*h*a-v*c*a+v*n*l-i*h*l-o*n*f+i*c*f)*x,t[3]=(u*c*a-o*p*a-u*n*l+i*p*l+o*n*m-i*c*m)*x,t[4]=_*x,t[5]=(d*h*a-g*p*a+g*n*m-e*h*m-d*n*f+e*p*f)*x,t[6]=(g*c*a-r*h*a-g*n*l+e*h*l+r*n*f-e*c*f)*x,t[7]=(r*p*a-d*c*a+d*n*l-e*p*l-r*n*m+e*c*m)*x,t[8]=y*x,t[9]=(g*u*a-d*v*a-g*i*m+e*v*m+d*i*f-e*u*f)*x,t[10]=(r*v*a-g*o*a+g*i*l-e*v*l-r*i*f+e*o*f)*x,t[11]=(d*o*a-r*u*a-d*i*l+e*u*l+r*i*m-e*o*m)*x,t[12]=M*x,t[13]=(d*v*n-g*u*n+g*i*p-e*v*p-d*i*h+e*u*h)*x,t[14]=(g*o*n-r*v*n-g*i*c+e*v*c+r*i*h-e*o*h)*x,t[15]=(r*u*n-d*o*n+d*i*c-e*u*c-r*i*p+e*o*p)*x,this}scale(t){const e=this.elements,i=t.x,n=t.y,a=t.z;return e[0]*=i,e[4]*=n,e[8]*=a,e[1]*=i,e[5]*=n,e[9]*=a,e[2]*=i,e[6]*=n,e[10]*=a,e[3]*=i,e[7]*=n,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),a=1-i,r=t.x,o=t.y,c=t.z,l=a*r,d=a*o;return this.set(l*r+i,l*o-n*c,l*c+n*o,0,l*o+n*c,d*o+i,d*c-n*r,0,l*c-n*o,d*c+n*r,a*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,a,r){return this.set(1,i,a,0,t,1,r,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,a=e._x,r=e._y,o=e._z,c=e._w,l=a+a,d=r+r,u=o+o,p=a*l,m=a*d,g=a*u,v=r*d,h=r*u,f=o*u,T=c*l,_=c*d,y=c*u,M=i.x,S=i.y,x=i.z;return n[0]=(1-(v+f))*M,n[1]=(m+y)*M,n[2]=(g-_)*M,n[3]=0,n[4]=(m-y)*S,n[5]=(1-(p+f))*S,n[6]=(h+T)*S,n[7]=0,n[8]=(g+_)*x,n[9]=(h-T)*x,n[10]=(1-(p+v))*x,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let a=Xi.set(n[0],n[1],n[2]).length();const r=Xi.set(n[4],n[5],n[6]).length(),o=Xi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),t.x=n[12],t.y=n[13],t.z=n[14],Ve.copy(this);const l=1/a,d=1/r,u=1/o;return Ve.elements[0]*=l,Ve.elements[1]*=l,Ve.elements[2]*=l,Ve.elements[4]*=d,Ve.elements[5]*=d,Ve.elements[6]*=d,Ve.elements[8]*=u,Ve.elements[9]*=u,Ve.elements[10]*=u,e.setFromRotationMatrix(Ve),i.x=a,i.y=r,i.z=o,this}makePerspective(t,e,i,n,a,r,o=ri){const c=this.elements,l=2*a/(e-t),d=2*a/(i-n),u=(e+t)/(e-t),p=(i+n)/(i-n);let m,g;if(o===ri)m=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===fs)m=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,a,r,o=ri){const c=this.elements,l=1/(e-t),d=1/(i-n),u=1/(r-a),p=(e+t)*l,m=(i+n)*d;let g,v;if(o===ri)g=(r+a)*u,v=-2*u;else if(o===fs)g=a*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Xi=new Z,Ve=new fe,jc=new Z(0,0,0),Zc=new Z(1,1,1),ui=new Z,Hn=new Z,De=new Z,No=new fe,zo=new Ni;class Ms{constructor(t=0,e=0,i=0,n=Ms.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,a=n[0],r=n[4],o=n[8],c=n[1],l=n[5],d=n[9],u=n[2],p=n[6],m=n[10];switch(e){case"XYZ":this._y=Math.asin(Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ce(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return No.makeRotationFromQuaternion(t),this.setFromRotationMatrix(No,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zo.setFromEuler(this),this.setFromQuaternion(zo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ms.DEFAULT_ORDER="XYZ";class La{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jc=0;const Uo=new Z,$i=new Ni,ii=new fe,Vn=new Z,Tn=new Z,Qc=new Z,th=new Ni,Fo=new Z(1,0,0),Go=new Z(0,1,0),Bo=new Z(0,0,1),eh={type:"added"},ih={type:"removed"};class Se extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new Z,e=new Ms,i=new Ni,n=new Z(1,1,1);function a(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new fe},normalMatrix:{value:new jt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new La,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(Fo,t)}rotateY(t){return this.rotateOnAxis(Go,t)}rotateZ(t){return this.rotateOnAxis(Bo,t)}translateOnAxis(t,e){return Uo.copy(t).applyQuaternion(this.quaternion),this.position.add(Uo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fo,t)}translateY(t){return this.translateOnAxis(Go,t)}translateZ(t){return this.translateOnAxis(Bo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Vn.copy(t):Vn.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Tn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Tn,Vn,this.up):ii.lookAt(Vn,Tn,this.up),this.quaternion.setFromRotationMatrix(ii),n&&(ii.extractRotation(n.matrixWorld),$i.setFromRotationMatrix(ii),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(eh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ih)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tn,t,Qc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tn,th,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const a=e[i];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let a=0,r=n.length;a<r;a++){const o=n[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];a(t.shapes,u)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(t.materials,this.material[c]));n.material=o}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];n.animations.push(a(t.animations,c))}}if(e){const o=r(t.geometries),c=r(t.materials),l=r(t.textures),d=r(t.images),u=r(t.shapes),p=r(t.skeletons),m=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function r(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Se.DEFAULT_UP=new Z(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const We=new Z,ni=new Z,Ys=new Z,si=new Z,Ki=new Z,qi=new Z,ko=new Z,Xs=new Z,$s=new Z,Ks=new Z;let Wn=!1;class Xe{constructor(t=new Z,e=new Z,i=new Z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),We.subVectors(t,e),n.cross(We);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,e,i,n,a){We.subVectors(n,e),ni.subVectors(i,e),Ys.subVectors(t,e);const r=We.dot(We),o=We.dot(ni),c=We.dot(Ys),l=ni.dot(ni),d=ni.dot(Ys),u=r*l-o*o;if(u===0)return a.set(0,0,0),null;const p=1/u,m=(l*c-o*d)*p,g=(r*d-o*c)*p;return a.set(1-m-g,g,m)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getUV(t,e,i,n,a,r,o,c){return Wn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wn=!0),this.getInterpolation(t,e,i,n,a,r,o,c)}static getInterpolation(t,e,i,n,a,r,o,c){return this.getBarycoord(t,e,i,n,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,si.x),c.addScaledVector(r,si.y),c.addScaledVector(o,si.z),c)}static isFrontFacing(t,e,i,n){return We.subVectors(i,e),ni.subVectors(t,e),We.cross(ni).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),We.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,a){return Wn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wn=!0),Xe.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}getInterpolation(t,e,i,n,a){return Xe.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,a=this.c;let r,o;Ki.subVectors(n,i),qi.subVectors(a,i),Xs.subVectors(t,i);const c=Ki.dot(Xs),l=qi.dot(Xs);if(c<=0&&l<=0)return e.copy(i);$s.subVectors(t,n);const d=Ki.dot($s),u=qi.dot($s);if(d>=0&&u<=d)return e.copy(n);const p=c*u-d*l;if(p<=0&&c>=0&&d<=0)return r=c/(c-d),e.copy(i).addScaledVector(Ki,r);Ks.subVectors(t,a);const m=Ki.dot(Ks),g=qi.dot(Ks);if(g>=0&&m<=g)return e.copy(a);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(qi,o);const h=d*g-m*u;if(h<=0&&u-d>=0&&m-g>=0)return ko.subVectors(a,n),o=(u-d)/(u-d+(m-g)),e.copy(n).addScaledVector(ko,o);const f=1/(h+v+p);return r=v*f,o=p*f,e.copy(i).addScaledVector(Ki,r).addScaledVector(qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Kr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Yn={h:0,s:0,l:0};function qs(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Qt.workingColorSpace){if(t=kc(t,1),e=Ce(e,0,1),i=Ce(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,r=2*i-a;this.r=qs(r,a,t+1/3),this.g=qs(r,a,t),this.b=qs(r,a,t-1/3)}return Qt.toWorkingColorSpace(this,n),this}setStyle(t,e=Te){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=n[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){const i=Kr[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cn(t.r),this.g=cn(t.g),this.b=cn(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return Qt.fromWorkingColorSpace(xe.copy(this),t),Math.round(Ce(xe.r*255,0,255))*65536+Math.round(Ce(xe.g*255,0,255))*256+Math.round(Ce(xe.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(xe.copy(this),e);const i=xe.r,n=xe.g,a=xe.b,r=Math.max(i,n,a),o=Math.min(i,n,a);let c,l;const d=(o+r)/2;if(o===r)c=0,l=0;else{const u=r-o;switch(l=d<=.5?u/(r+o):u/(2-r-o),r){case i:c=(n-a)/u+(n<a?6:0);break;case n:c=(a-i)/u+2;break;case a:c=(i-n)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(xe.copy(this),e),t.r=xe.r,t.g=xe.g,t.b=xe.b,t}getStyle(t=Te){Qt.fromWorkingColorSpace(xe.copy(this),t);const e=xe.r,i=xe.g,n=xe.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Yn);const i=Ns(fi.h,Yn.h,e),n=Ns(fi.s,Yn.s,e),a=Ns(fi.l,Yn.l,e);return this.setHSL(i,n,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*n,this.g=a[1]*e+a[4]*i+a[7]*n,this.b=a[2]*e+a[5]*i+a[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xe=new Jt;Jt.NAMES=Kr;let nh=0;class Dn extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=ln,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=fa,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ln&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ua&&(i.blendSrc=this.blendSrc),this.blendDst!==fa&&(i.blendDst=this.blendDst),this.blendEquation!==Ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Po&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(e){const a=n(t.textures),r=n(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ms extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new Z,Xn=new kt;class Ze{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Co,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Xn.fromBufferAttribute(this,e),Xn.applyMatrix3(t),this.setXY(e,Xn.x,Xn.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=we(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array),n=we(n,this.array),a=we(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Co&&(t.usage=this.usage),t}}class qr extends Ze{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class jr extends Ze{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class be extends Ze{constructor(t,e,i){super(new Float32Array(t),e,i)}}let sh=0;const Fe=new fe,js=new Se,ji=new Z,Oe=new In,Mn=new In,ve=new Z;class Je extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wr(t)?jr:qr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new jt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,i){return Fe.makeTranslation(t,e,i),this.applyMatrix4(Fe),this}scale(t,e,i){return Fe.makeScale(t,e,i),this.applyMatrix4(Fe),this}lookAt(t){return js.lookAt(t),js.updateMatrix(),this.applyMatrix4(js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new be(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const a=e[i];Oe.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Z,1/0);return}if(t){const i=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];Mn.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Oe.min,Mn.min),Oe.expandByPoint(ve),ve.addVectors(Oe.max,Mn.max),Oe.expandByPoint(ve)):(Oe.expandByPoint(Mn.min),Oe.expandByPoint(Mn.max))}Oe.getCenter(i);let n=0;for(let a=0,r=t.count;a<r;a++)ve.fromBufferAttribute(t,a),n=Math.max(n,i.distanceToSquared(ve));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)ve.fromBufferAttribute(o,l),c&&(ji.fromBufferAttribute(t,l),ve.add(ji)),n=Math.max(n,i.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,a=e.normal.array,r=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],d=[];for(let A=0;A<o;A++)l[A]=new Z,d[A]=new Z;const u=new Z,p=new Z,m=new Z,g=new kt,v=new kt,h=new kt,f=new Z,T=new Z;function _(A,F,U){u.fromArray(n,A*3),p.fromArray(n,F*3),m.fromArray(n,U*3),g.fromArray(r,A*2),v.fromArray(r,F*2),h.fromArray(r,U*2),p.sub(u),m.sub(u),v.sub(g),h.sub(g);const K=1/(v.x*h.y-h.x*v.y);isFinite(K)&&(f.copy(p).multiplyScalar(h.y).addScaledVector(m,-v.y).multiplyScalar(K),T.copy(m).multiplyScalar(v.x).addScaledVector(p,-h.x).multiplyScalar(K),l[A].add(f),l[F].add(f),l[U].add(f),d[A].add(T),d[F].add(T),d[U].add(T))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let A=0,F=y.length;A<F;++A){const U=y[A],K=U.start,R=U.count;for(let N=K,k=K+R;N<k;N+=3)_(i[N+0],i[N+1],i[N+2])}const M=new Z,S=new Z,x=new Z,z=new Z;function E(A){x.fromArray(a,A*3),z.copy(x);const F=l[A];M.copy(F),M.sub(x.multiplyScalar(x.dot(F))).normalize(),S.crossVectors(z,F);const K=S.dot(d[A])<0?-1:1;c[A*4]=M.x,c[A*4+1]=M.y,c[A*4+2]=M.z,c[A*4+3]=K}for(let A=0,F=y.length;A<F;++A){const U=y[A],K=U.start,R=U.count;for(let N=K,k=K+R;N<k;N+=3)E(i[N+0]),E(i[N+1]),E(i[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const n=new Z,a=new Z,r=new Z,o=new Z,c=new Z,l=new Z,d=new Z,u=new Z;if(t)for(let p=0,m=t.count;p<m;p+=3){const g=t.getX(p+0),v=t.getX(p+1),h=t.getX(p+2);n.fromBufferAttribute(e,g),a.fromBufferAttribute(e,v),r.fromBufferAttribute(e,h),d.subVectors(r,a),u.subVectors(n,a),d.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,h),o.add(d),c.add(d),l.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(h,l.x,l.y,l.z)}else for(let p=0,m=e.count;p<m;p+=3)n.fromBufferAttribute(e,p+0),a.fromBufferAttribute(e,p+1),r.fromBufferAttribute(e,p+2),d.subVectors(r,a),u.subVectors(n,a),d.cross(u),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,c){const l=o.array,d=o.itemSize,u=o.normalized,p=new l.constructor(c.length*d);let m=0,g=0;for(let v=0,h=c.length;v<h;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*d;for(let f=0;f<d;f++)p[g++]=l[m++]}return new Ze(p,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,i=this.index.array,n=this.attributes;for(const o in n){const c=n[o],l=t(c,i);e.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let d=0,u=l.length;d<u;d++){const p=l[d],m=t(p,i);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const n={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,p=l.length;u<p;u++){const m=l[u];d.push(m.toJSON(t.data))}d.length>0&&(n[c]=d,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const l in n){const d=n[l];this.setAttribute(l,d.clone(e))}const a=t.morphAttributes;for(const l in a){const d=[],u=a[l];for(let p=0,m=u.length;p<m;p++)d.push(u[p].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,d=r.length;l<d;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ho=new fe,bi=new Ra,$n=new wa,Vo=new Z,Zi=new Z,Ji=new Z,Qi=new Z,Zs=new Z,Kn=new Z,qn=new kt,jn=new kt,Zn=new kt,Wo=new Z,Yo=new Z,Xo=new Z,Jn=new Z,Qn=new Z;class te extends Se{constructor(t=new Je,e=new ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(a&&o){Kn.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const d=o[c],u=a[c];d!==0&&(Zs.fromBufferAttribute(u,t),r?Kn.addScaledVector(Zs,d):Kn.addScaledVector(Zs.sub(e),d))}e.add(Kn)}return e}raycast(t,e){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$n.copy(i.boundingSphere),$n.applyMatrix4(a),bi.copy(t.ray).recast(t.near),!($n.containsPoint(bi.origin)===!1&&(bi.intersectSphere($n,Vo)===null||bi.origin.distanceToSquared(Vo)>(t.far-t.near)**2))&&(Ho.copy(a).invert(),bi.copy(t.ray).applyMatrix4(Ho),!(i.boundingBox!==null&&bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,i){let n;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,d=a.attributes.uv1,u=a.attributes.normal,p=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=p.length;g<v;g++){const h=p[g],f=r[h.materialIndex],T=Math.max(h.start,m.start),_=Math.min(o.count,Math.min(h.start+h.count,m.start+m.count));for(let y=T,M=_;y<M;y+=3){const S=o.getX(y),x=o.getX(y+1),z=o.getX(y+2);n=ts(this,f,t,i,l,d,u,S,x,z),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=h.materialIndex,e.push(n))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let h=g,f=v;h<f;h+=3){const T=o.getX(h),_=o.getX(h+1),y=o.getX(h+2);n=ts(this,r,t,i,l,d,u,T,_,y),n&&(n.faceIndex=Math.floor(h/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,v=p.length;g<v;g++){const h=p[g],f=r[h.materialIndex],T=Math.max(h.start,m.start),_=Math.min(c.count,Math.min(h.start+h.count,m.start+m.count));for(let y=T,M=_;y<M;y+=3){const S=y,x=y+1,z=y+2;n=ts(this,f,t,i,l,d,u,S,x,z),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=h.materialIndex,e.push(n))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let h=g,f=v;h<f;h+=3){const T=h,_=h+1,y=h+2;n=ts(this,r,t,i,l,d,u,T,_,y),n&&(n.faceIndex=Math.floor(h/3),e.push(n))}}}}function ah(s,t,e,i,n,a,r,o){let c;if(t.side===Le?c=i.intersectTriangle(r,a,n,!0,o):c=i.intersectTriangle(n,a,r,t.side===Ti,o),c===null)return null;Qn.copy(o),Qn.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Qn);return l<e.near||l>e.far?null:{distance:l,point:Qn.clone(),object:s}}function ts(s,t,e,i,n,a,r,o,c,l){s.getVertexPosition(o,Zi),s.getVertexPosition(c,Ji),s.getVertexPosition(l,Qi);const d=ah(s,t,e,i,Zi,Ji,Qi,Jn);if(d){n&&(qn.fromBufferAttribute(n,o),jn.fromBufferAttribute(n,c),Zn.fromBufferAttribute(n,l),d.uv=Xe.getInterpolation(Jn,Zi,Ji,Qi,qn,jn,Zn,new kt)),a&&(qn.fromBufferAttribute(a,o),jn.fromBufferAttribute(a,c),Zn.fromBufferAttribute(a,l),d.uv1=Xe.getInterpolation(Jn,Zi,Ji,Qi,qn,jn,Zn,new kt),d.uv2=d.uv1),r&&(Wo.fromBufferAttribute(r,o),Yo.fromBufferAttribute(r,c),Xo.fromBufferAttribute(r,l),d.normal=Xe.getInterpolation(Jn,Zi,Ji,Qi,Wo,Yo,Xo,new Z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new Z,materialIndex:0};Xe.getNormal(Zi,Ji,Qi,u.normal),d.face=u}return d}class Re extends Je{constructor(t=1,e=1,i=1,n=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:a,depthSegments:r};const o=this;n=Math.floor(n),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],d=[],u=[];let p=0,m=0;g("z","y","x",-1,-1,i,e,t,r,a,0),g("z","y","x",1,-1,i,e,-t,r,a,1),g("x","z","y",1,1,t,i,e,n,r,2),g("x","z","y",1,-1,t,i,-e,n,r,3),g("x","y","z",1,-1,t,e,i,n,a,4),g("x","y","z",-1,-1,t,e,-i,n,a,5),this.setIndex(c),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(u,2));function g(v,h,f,T,_,y,M,S,x,z,E){const A=y/x,F=M/z,U=y/2,K=M/2,R=S/2,N=x+1,k=z+1;let W=0,H=0;const q=new Z;for(let Q=0;Q<k;Q++){const it=Q*F-K;for(let J=0;J<N;J++){const B=J*A-U;q[v]=B*T,q[h]=it*_,q[f]=R,l.push(q.x,q.y,q.z),q[v]=0,q[h]=0,q[f]=S>0?1:-1,d.push(q.x,q.y,q.z),u.push(J/x),u.push(1-Q/z),W+=1}}for(let Q=0;Q<z;Q++)for(let it=0;it<x;it++){const J=p+it+N*Q,B=p+it+N*(Q+1),et=p+(it+1)+N*(Q+1),ot=p+(it+1)+N*Q;c.push(J,B,ot),c.push(B,et,ot),H+=6}o.addGroup(m,H,E),m+=H,p+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fn(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ae(s){const t={};for(let e=0;e<s.length;e++){const i=fn(s[e]);for(const n in i)t[n]=i[n]}return t}function oh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Zr(s){return s.getRenderTarget()===null?s.outputColorSpace:Qt.workingColorSpace}const rh={clone:fn,merge:Ae};var lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ch=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lh,this.fragmentShader=ch,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fn(t.uniforms),this.uniformsGroups=oh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?e.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[n]={type:"m4",value:r.toArray()}:e.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Jr extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Be extends Jr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ya*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(rs*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,a=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*n/c,e-=r.offsetY*i/l,n*=r.width/c,i*=r.height/l}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const tn=-90,en=1;class hh extends Se{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Be(tn,en,t,e);n.layers=this.layers,this.add(n);const a=new Be(tn,en,t,e);a.layers=this.layers,this.add(a);const r=new Be(tn,en,t,e);r.layers=this.layers,this.add(r);const o=new Be(tn,en,t,e);o.layers=this.layers,this.add(o);const c=new Be(tn,en,t,e);c.layers=this.layers,this.add(c);const l=new Be(tn,en,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,a,r,o,c]=e;for(const l of e)this.remove(l);if(t===ri)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===fs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,d]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,a),t.setRenderTarget(i,1,n),t.render(e,r),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,c),t.setRenderTarget(i,4,n),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),t.render(e,d),t.setRenderTarget(u,p,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Qr extends ze{constructor(t,e,i,n,a,r,o,c,l,d){t=t!==void 0?t:[],e=e!==void 0?e:hn,super(t,e,i,n,a,r,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dh extends Oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(bn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ii?Te:ke),this.texture=new Qr(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Re(5,5,5),a=new zi({name:"CubemapFromEquirect",uniforms:fn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Le,blending:vi});a.uniforms.tEquirect.value=e;const r=new te(n,a),o=e.minFilter;return e.minFilter===wn&&(e.minFilter=Ge),new hh(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,n){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,n);t.setRenderTarget(a)}}const Js=new Z,uh=new Z,fh=new jt;class pi{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Js.subVectors(i,e).cross(uh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Js),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||fh.getNormalMatrix(t),n=this.coplanarPoint(Js).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new wa,es=new Z;class Ia{constructor(t=new pi,e=new pi,i=new pi,n=new pi,a=new pi,r=new pi){this.planes=[t,e,i,n,a,r]}set(t,e,i,n,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ri){const i=this.planes,n=t.elements,a=n[0],r=n[1],o=n[2],c=n[3],l=n[4],d=n[5],u=n[6],p=n[7],m=n[8],g=n[9],v=n[10],h=n[11],f=n[12],T=n[13],_=n[14],y=n[15];if(i[0].setComponents(c-a,p-l,h-m,y-f).normalize(),i[1].setComponents(c+a,p+l,h+m,y+f).normalize(),i[2].setComponents(c+r,p+d,h+g,y+T).normalize(),i[3].setComponents(c-r,p-d,h-g,y-T).normalize(),i[4].setComponents(c-o,p-u,h-v,y-_).normalize(),e===ri)i[5].setComponents(c+o,p+u,h+v,y+_).normalize();else if(e===fs)i[5].setComponents(o,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(es.x=n.normal.x>0?t.max.x:t.min.x,es.y=n.normal.y>0?t.max.y:t.min.y,es.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(es)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tl(){let s=null,t=!1,e=null,i=null;function n(a,r){e(a,r),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function ph(s,t){const e=t.isWebGL2,i=new WeakMap;function n(l,d){const u=l.array,p=l.usage,m=u.byteLength,g=s.createBuffer();s.bindBuffer(d,g),s.bufferData(d,u,p),l.onUploadCallback();let v;if(u instanceof Float32Array)v=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=s.SHORT;else if(u instanceof Uint32Array)v=s.UNSIGNED_INT;else if(u instanceof Int32Array)v=s.INT;else if(u instanceof Int8Array)v=s.BYTE;else if(u instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function a(l,d,u){const p=d.array,m=d._updateRange,g=d.updateRanges;if(s.bindBuffer(u,l),m.count===-1&&g.length===0&&s.bufferSubData(u,0,p),g.length!==0){for(let v=0,h=g.length;v<h;v++){const f=g[v];e?s.bufferSubData(u,f.start*p.BYTES_PER_ELEMENT,p,f.start,f.count):s.bufferSubData(u,f.start*p.BYTES_PER_ELEMENT,p.subarray(f.start,f.start+f.count))}d.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):s.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const d=i.get(l);d&&(s.deleteBuffer(d.buffer),i.delete(l))}function c(l,d){if(l.isGLBufferAttribute){const p=i.get(l);(!p||p.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);if(u===void 0)i.set(l,n(l,d));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(u.buffer,l,d),u.version=l.version}}return{get:r,remove:o,update:c}}class Da extends Je{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const a=t/2,r=e/2,o=Math.floor(i),c=Math.floor(n),l=o+1,d=c+1,u=t/o,p=e/c,m=[],g=[],v=[],h=[];for(let f=0;f<d;f++){const T=f*p-r;for(let _=0;_<l;_++){const y=_*u-a;g.push(y,-T,0),v.push(0,0,1),h.push(_/o),h.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<o;T++){const _=T+l*f,y=T+l*(f+1),M=T+1+l*(f+1),S=T+1+l*f;m.push(_,y,S),m.push(y,M,S)}this.setIndex(m),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(v,3)),this.setAttribute("uv",new be(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Da(t.width,t.height,t.widthSegments,t.heightSegments)}}var mh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Th=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Eh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,bh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ah=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ph=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ch=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$h=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,id=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ad=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ld=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ud=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,md=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_d=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Md=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ed=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ad=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Rd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Id=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ud=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$d=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,su=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,au=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ou=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ru=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,du=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Eu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Su=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Au=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ru=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Du=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ou=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ku=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$u=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:mh,alphahash_pars_fragment:gh,alphamap_fragment:vh,alphamap_pars_fragment:_h,alphatest_fragment:yh,alphatest_pars_fragment:Th,aomap_fragment:Mh,aomap_pars_fragment:Eh,batching_pars_vertex:xh,batching_vertex:Sh,begin_vertex:bh,beginnormal_vertex:Ah,bsdfs:Ph,iridescence_fragment:Ch,bumpmap_pars_fragment:wh,clipping_planes_fragment:Rh,clipping_planes_pars_fragment:Lh,clipping_planes_pars_vertex:Ih,clipping_planes_vertex:Dh,color_fragment:Oh,color_pars_fragment:Nh,color_pars_vertex:zh,color_vertex:Uh,common:Fh,cube_uv_reflection_fragment:Gh,defaultnormal_vertex:Bh,displacementmap_pars_vertex:kh,displacementmap_vertex:Hh,emissivemap_fragment:Vh,emissivemap_pars_fragment:Wh,colorspace_fragment:Yh,colorspace_pars_fragment:Xh,envmap_fragment:$h,envmap_common_pars_fragment:Kh,envmap_pars_fragment:qh,envmap_pars_vertex:jh,envmap_physical_pars_fragment:ld,envmap_vertex:Zh,fog_vertex:Jh,fog_pars_vertex:Qh,fog_fragment:td,fog_pars_fragment:ed,gradientmap_pars_fragment:id,lightmap_fragment:nd,lightmap_pars_fragment:sd,lights_lambert_fragment:ad,lights_lambert_pars_fragment:od,lights_pars_begin:rd,lights_toon_fragment:cd,lights_toon_pars_fragment:hd,lights_phong_fragment:dd,lights_phong_pars_fragment:ud,lights_physical_fragment:fd,lights_physical_pars_fragment:pd,lights_fragment_begin:md,lights_fragment_maps:gd,lights_fragment_end:vd,logdepthbuf_fragment:_d,logdepthbuf_pars_fragment:yd,logdepthbuf_pars_vertex:Td,logdepthbuf_vertex:Md,map_fragment:Ed,map_pars_fragment:xd,map_particle_fragment:Sd,map_particle_pars_fragment:bd,metalnessmap_fragment:Ad,metalnessmap_pars_fragment:Pd,morphcolor_vertex:Cd,morphnormal_vertex:wd,morphtarget_pars_vertex:Rd,morphtarget_vertex:Ld,normal_fragment_begin:Id,normal_fragment_maps:Dd,normal_pars_fragment:Od,normal_pars_vertex:Nd,normal_vertex:zd,normalmap_pars_fragment:Ud,clearcoat_normal_fragment_begin:Fd,clearcoat_normal_fragment_maps:Gd,clearcoat_pars_fragment:Bd,iridescence_pars_fragment:kd,opaque_fragment:Hd,packing:Vd,premultiplied_alpha_fragment:Wd,project_vertex:Yd,dithering_fragment:Xd,dithering_pars_fragment:$d,roughnessmap_fragment:Kd,roughnessmap_pars_fragment:qd,shadowmap_pars_fragment:jd,shadowmap_pars_vertex:Zd,shadowmap_vertex:Jd,shadowmask_pars_fragment:Qd,skinbase_vertex:tu,skinning_pars_vertex:eu,skinning_vertex:iu,skinnormal_vertex:nu,specularmap_fragment:su,specularmap_pars_fragment:au,tonemapping_fragment:ou,tonemapping_pars_fragment:ru,transmission_fragment:lu,transmission_pars_fragment:cu,uv_pars_fragment:hu,uv_pars_vertex:du,uv_vertex:uu,worldpos_vertex:fu,background_vert:pu,background_frag:mu,backgroundCube_vert:gu,backgroundCube_frag:vu,cube_vert:_u,cube_frag:yu,depth_vert:Tu,depth_frag:Mu,distanceRGBA_vert:Eu,distanceRGBA_frag:xu,equirect_vert:Su,equirect_frag:bu,linedashed_vert:Au,linedashed_frag:Pu,meshbasic_vert:Cu,meshbasic_frag:wu,meshlambert_vert:Ru,meshlambert_frag:Lu,meshmatcap_vert:Iu,meshmatcap_frag:Du,meshnormal_vert:Ou,meshnormal_frag:Nu,meshphong_vert:zu,meshphong_frag:Uu,meshphysical_vert:Fu,meshphysical_frag:Gu,meshtoon_vert:Bu,meshtoon_frag:ku,points_vert:Hu,points_frag:Vu,shadow_vert:Wu,shadow_frag:Yu,sprite_vert:Xu,sprite_frag:$u},At={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},je={basic:{uniforms:Ae([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ae([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ae([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ae([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ae([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ae([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ae([At.points,At.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ae([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ae([At.common,At.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ae([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ae([At.sprite,At.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Ae([At.common,At.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Ae([At.lights,At.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};je.physical={uniforms:Ae([je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const is={r:0,b:0,g:0};function Ku(s,t,e,i,n,a,r){const o=new Jt(0);let c=a===!0?0:1,l,d,u=null,p=0,m=null;function g(h,f){let T=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?e:t).get(_)),_===null?v(o,c):_&&_.isColor&&(v(_,1),T=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ys)?(d===void 0&&(d=new te(new Re(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:fn(je.backgroundCube.uniforms),vertexShader:je.backgroundCube.vertexShader,fragmentShader:je.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(M,S,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,d.material.toneMapped=Qt.getTransfer(_.colorSpace)!==ie,(u!==_||p!==_.version||m!==s.toneMapping)&&(d.material.needsUpdate=!0,u=_,p=_.version,m=s.toneMapping),d.layers.enableAll(),h.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new te(new Da(2,2),new zi({name:"BackgroundMaterial",uniforms:fn(je.background.uniforms),vertexShader:je.background.vertexShader,fragmentShader:je.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(_.colorSpace)!==ie,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||p!==_.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,p=_.version,m=s.toneMapping),l.layers.enableAll(),h.unshift(l,l.geometry,l.material,0,0,null))}function v(h,f){h.getRGB(is,Zr(s)),i.buffers.color.setClear(is.r,is.g,is.b,f,r)}return{getClearColor:function(){return o},setClearColor:function(h,f=1){o.set(h),c=f,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(h){c=h,v(o,c)},render:g}}function qu(s,t,e,i){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),r=i.isWebGL2||a!==null,o={},c=h(null);let l=c,d=!1;function u(R,N,k,W,H){let q=!1;if(r){const Q=v(W,k,N);l!==Q&&(l=Q,m(l.object)),q=f(R,W,k,H),q&&T(R,W,k,H)}else{const Q=N.wireframe===!0;(l.geometry!==W.id||l.program!==k.id||l.wireframe!==Q)&&(l.geometry=W.id,l.program=k.id,l.wireframe=Q,q=!0)}H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(q||d)&&(d=!1,z(R,N,k,W),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function p(){return i.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function m(R){return i.isWebGL2?s.bindVertexArray(R):a.bindVertexArrayOES(R)}function g(R){return i.isWebGL2?s.deleteVertexArray(R):a.deleteVertexArrayOES(R)}function v(R,N,k){const W=k.wireframe===!0;let H=o[R.id];H===void 0&&(H={},o[R.id]=H);let q=H[N.id];q===void 0&&(q={},H[N.id]=q);let Q=q[W];return Q===void 0&&(Q=h(p()),q[W]=Q),Q}function h(R){const N=[],k=[],W=[];for(let H=0;H<n;H++)N[H]=0,k[H]=0,W[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:W,object:R,attributes:{},index:null}}function f(R,N,k,W){const H=l.attributes,q=N.attributes;let Q=0;const it=k.getAttributes();for(const J in it)if(it[J].location>=0){const et=H[J];let ot=q[J];if(ot===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(ot=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(ot=R.instanceColor)),et===void 0||et.attribute!==ot||ot&&et.data!==ot.data)return!0;Q++}return l.attributesNum!==Q||l.index!==W}function T(R,N,k,W){const H={},q=N.attributes;let Q=0;const it=k.getAttributes();for(const J in it)if(it[J].location>=0){let et=q[J];et===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(et=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(et=R.instanceColor));const ot={};ot.attribute=et,et&&et.data&&(ot.data=et.data),H[J]=ot,Q++}l.attributes=H,l.attributesNum=Q,l.index=W}function _(){const R=l.newAttributes;for(let N=0,k=R.length;N<k;N++)R[N]=0}function y(R){M(R,0)}function M(R,N){const k=l.newAttributes,W=l.enabledAttributes,H=l.attributeDivisors;k[R]=1,W[R]===0&&(s.enableVertexAttribArray(R),W[R]=1),H[R]!==N&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,N),H[R]=N)}function S(){const R=l.newAttributes,N=l.enabledAttributes;for(let k=0,W=N.length;k<W;k++)N[k]!==R[k]&&(s.disableVertexAttribArray(k),N[k]=0)}function x(R,N,k,W,H,q,Q){Q===!0?s.vertexAttribIPointer(R,N,k,H,q):s.vertexAttribPointer(R,N,k,W,H,q)}function z(R,N,k,W){if(i.isWebGL2===!1&&(R.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const H=W.attributes,q=k.getAttributes(),Q=N.defaultAttributeValues;for(const it in q){const J=q[it];if(J.location>=0){let B=H[it];if(B===void 0&&(it==="instanceMatrix"&&R.instanceMatrix&&(B=R.instanceMatrix),it==="instanceColor"&&R.instanceColor&&(B=R.instanceColor)),B!==void 0){const et=B.normalized,ot=B.itemSize,Mt=e.get(B);if(Mt===void 0)continue;const w=Mt.buffer,D=Mt.type,$=Mt.bytesPerElement,V=i.isWebGL2===!0&&(D===s.INT||D===s.UNSIGNED_INT||B.gpuType===Or);if(B.isInterleavedBufferAttribute){const Y=B.data,I=Y.stride,_t=B.offset;if(Y.isInstancedInterleavedBuffer){for(let vt=0;vt<J.locationSize;vt++)M(J.location+vt,Y.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let vt=0;vt<J.locationSize;vt++)y(J.location+vt);s.bindBuffer(s.ARRAY_BUFFER,w);for(let vt=0;vt<J.locationSize;vt++)x(J.location+vt,ot/J.locationSize,D,et,I*$,(_t+ot/J.locationSize*vt)*$,V)}else{if(B.isInstancedBufferAttribute){for(let Y=0;Y<J.locationSize;Y++)M(J.location+Y,B.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let Y=0;Y<J.locationSize;Y++)y(J.location+Y);s.bindBuffer(s.ARRAY_BUFFER,w);for(let Y=0;Y<J.locationSize;Y++)x(J.location+Y,ot/J.locationSize,D,et,ot*$,ot/J.locationSize*Y*$,V)}}else if(Q!==void 0){const et=Q[it];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(J.location,et);break;case 3:s.vertexAttrib3fv(J.location,et);break;case 4:s.vertexAttrib4fv(J.location,et);break;default:s.vertexAttrib1fv(J.location,et)}}}}S()}function E(){U();for(const R in o){const N=o[R];for(const k in N){const W=N[k];for(const H in W)g(W[H].object),delete W[H];delete N[k]}delete o[R]}}function A(R){if(o[R.id]===void 0)return;const N=o[R.id];for(const k in N){const W=N[k];for(const H in W)g(W[H].object),delete W[H];delete N[k]}delete o[R.id]}function F(R){for(const N in o){const k=o[N];if(k[R.id]===void 0)continue;const W=k[R.id];for(const H in W)g(W[H].object),delete W[H];delete k[R.id]}}function U(){K(),d=!0,l!==c&&(l=c,m(l.object))}function K(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:U,resetDefaultState:K,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:y,disableUnusedAttributes:S}}function ju(s,t,e,i){const n=i.isWebGL2;let a;function r(d){a=d}function o(d,u){s.drawArrays(a,d,u),e.update(u,a,1)}function c(d,u,p){if(p===0)return;let m,g;if(n)m=s,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](a,d,u,p),e.update(u,a,p)}function l(d,u,p){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<p;g++)this.render(d[g],u[g]);else{m.multiDrawArraysWEBGL(a,d,0,u,0,p);let g=0;for(let v=0;v<p;v++)g+=u[v];e.update(g,a,1)}}this.setMode=r,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Zu(s,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=a(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=r||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),h=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,y=r||t.has("OES_texture_float"),M=_&&y,S=r?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:n,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:h,maxVaryings:f,maxFragmentUniforms:T,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:S}}function Ju(s){const t=this;let e=null,i=0,n=!1,a=!1;const r=new pi,o=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||i!==0||n;return n=p,i=u.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,p){e=d(u,p,0)},this.setState=function(u,p,m){const g=u.clippingPlanes,v=u.clipIntersection,h=u.clipShadows,f=s.get(u);if(!n||g===null||g.length===0||a&&!h)a?d(null):l();else{const T=a?0:i,_=T*4;let y=f.clippingState||null;c.value=y,y=d(g,p,_,m);for(let M=0;M!==_;++M)y[M]=e[M];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(u,p,m,g){const v=u!==null?u.length:0;let h=null;if(v!==0){if(h=c.value,g!==!0||h===null){const f=m+v*4,T=p.matrixWorldInverse;o.getNormalMatrix(T),(h===null||h.length<f)&&(h=new Float32Array(f));for(let _=0,y=m;_!==v;++_,y+=4)r.copy(u[_]).applyMatrix4(T,o),r.normal.toArray(h,y),h[y+3]=r.constant}c.value=h,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,h}}function Qu(s){let t=new WeakMap;function e(r,o){return o===pa?r.mapping=hn:o===ma&&(r.mapping=dn),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===pa||o===ma)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new dh(c.height/2);return l.fromEquirectangularTexture(s,r),t.set(r,l),r.addEventListener("dispose",n),e(l.texture,r.mapping)}else return null}}return r}function n(r){const o=r.target;o.removeEventListener("dispose",n);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class el extends Jr{constructor(t=-1,e=1,i=1,n=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-t,r=i+t,o=n+e,c=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const an=4,$o=[.125,.215,.35,.446,.526,.582],wi=20,Qs=new el,Ko=new Jt;let ta=null,ea=0,ia=0;const Pi=(1+Math.sqrt(5))/2,nn=1/Pi,qo=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,Pi,nn),new Z(0,Pi,-nn),new Z(nn,0,Pi),new Z(-nn,0,Pi),new Z(Pi,nn,0),new Z(-Pi,nn,0)];class jo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,n,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ta,ea,ia),t.scissorTest=!1,ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hn||t.mapping===dn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Rn,format:Ke,colorSpace:li,depthBuffer:!1},n=Zo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zo(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tf(a)),this._blurMaterial=ef(a,t,e)}return n}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,Qs)}_sceneToCubeUV(t,e,i,n){const o=new Be(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Ko),d.toneMapping=_i,d.autoClear=!1;const m=new ms({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new te(new Re,m);let v=!1;const h=t.background;h?h.isColor&&(m.color.copy(h),t.background=null,v=!0):(m.color.copy(Ko),v=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):T===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const _=this._cubeSize;ns(n,T*_,f>2?_:0,_,_),d.setRenderTarget(n),v&&d.render(g,o),d.render(t,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=p,d.autoClear=u,t.background=h}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===hn||t.mapping===dn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jo());const a=n?this._cubemapMaterial:this._equirectMaterial,r=new te(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const c=this._cubeSize;ns(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,Qs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),r=qo[(n-1)%qo.length];this._blur(t,n-1,n,a,r)}e.autoClear=i}_blur(t,e,i,n,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,n,"latitudinal",a),this._halfBlur(r,t,i,i,n,"longitudinal",a)}_halfBlur(t,e,i,n,a,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new te(this._lodPlanes[n],l),p=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*wi-1),v=a/g,h=isFinite(a)?1+Math.floor(d*v):wi;h>wi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${wi}`);const f=[];let T=0;for(let x=0;x<wi;++x){const z=x/v,E=Math.exp(-z*z/2);f.push(E),x===0?T+=E:x<h&&(T+=2*E)}for(let x=0;x<f.length;x++)f[x]=f[x]/T;p.envMap.value=t.texture,p.samples.value=h,p.weights.value=f,p.latitudinal.value=r==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:_}=this;p.dTheta.value=g,p.mipInt.value=_-i;const y=this._sizeLods[n],M=3*y*(n>_-an?n-_+an:0),S=4*(this._cubeSize-y);ns(e,M,S,3*y,2*y),c.setRenderTarget(e),c.render(u,Qs)}}function tf(s){const t=[],e=[],i=[];let n=s;const a=s-an+1+$o.length;for(let r=0;r<a;r++){const o=Math.pow(2,n);e.push(o);let c=1/o;r>s-an?c=$o[r-s+an-1]:r===0&&(c=0),i.push(c);const l=1/(o-2),d=-l,u=1+l,p=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,g=6,v=3,h=2,f=1,T=new Float32Array(v*g*m),_=new Float32Array(h*g*m),y=new Float32Array(f*g*m);for(let S=0;S<m;S++){const x=S%3*2/3-1,z=S>2?0:-1,E=[x,z,0,x+2/3,z,0,x+2/3,z+1,0,x,z,0,x+2/3,z+1,0,x,z+1,0];T.set(E,v*g*S),_.set(p,h*g*S);const A=[S,S,S,S,S,S];y.set(A,f*g*S)}const M=new Je;M.setAttribute("position",new Ze(T,v)),M.setAttribute("uv",new Ze(_,h)),M.setAttribute("faceIndex",new Ze(y,f)),t.push(M),n>an&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Zo(s,t,e){const i=new Oi(s,t,e);return i.texture.mapping=ys,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ns(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function ef(s,t,e){const i=new Float32Array(wi),n=new Z(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Jo(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Qo(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Oa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nf(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===pa||c===ma,d=c===hn||c===dn;if(l||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new jo(s)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(l&&u&&u.height>0||d&&u&&n(u)){e===null&&(e=new jo(s));const p=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,p),o.addEventListener("dispose",a),p.texture}else return null}}}return o}function n(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function sf(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function af(s,t,e,i){const n={},a=new WeakMap;function r(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const v=p.morphAttributes[g];for(let h=0,f=v.length;h<f;h++)t.remove(v[h])}p.removeEventListener("dispose",r),delete n[p.id];const m=a.get(p);m&&(t.remove(m),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(u,p){return n[p.id]===!0||(p.addEventListener("dispose",r),n[p.id]=!0,e.memory.geometries++),p}function c(u){const p=u.attributes;for(const g in p)t.update(p[g],s.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const v=m[g];for(let h=0,f=v.length;h<f;h++)t.update(v[h],s.ARRAY_BUFFER)}}function l(u){const p=[],m=u.index,g=u.attributes.position;let v=0;if(m!==null){const T=m.array;v=m.version;for(let _=0,y=T.length;_<y;_+=3){const M=T[_+0],S=T[_+1],x=T[_+2];p.push(M,S,S,x,x,M)}}else if(g!==void 0){const T=g.array;v=g.version;for(let _=0,y=T.length/3-1;_<y;_+=3){const M=_+0,S=_+1,x=_+2;p.push(M,S,S,x,x,M)}}else return;const h=new(Wr(p)?jr:qr)(p,1);h.version=v;const f=a.get(u);f&&t.remove(f),a.set(u,h)}function d(u){const p=a.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&l(u)}else l(u);return a.get(u)}return{get:o,update:c,getWireframeAttribute:d}}function of(s,t,e,i){const n=i.isWebGL2;let a;function r(m){a=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function d(m,g){s.drawElements(a,g,o,m*c),e.update(g,a,1)}function u(m,g,v){if(v===0)return;let h,f;if(n)h=s,f="drawElementsInstanced";else if(h=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[f](a,g,o,m*c,v),e.update(g,a,v)}function p(m,g,v){if(v===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<v;f++)this.render(m[f]/c,g[f]);else{h.multiDrawElementsWEBGL(a,g,0,o,m,0,v);let f=0;for(let T=0;T<v;T++)f+=g[T];e.update(f,a,1)}}this.setMode=r,this.setIndex=l,this.render=d,this.renderInstances=u,this.renderMultiDraw=p}function rf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function lf(s,t){return s[0]-t[0]}function cf(s,t){return Math.abs(t[1])-Math.abs(s[1])}function hf(s,t,e){const i={},n=new Float32Array(8),a=new WeakMap,r=new _e,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,d,u){const p=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let h=a.get(d);if(h===void 0||h.count!==v){let N=function(){K.dispose(),a.delete(d),d.removeEventListener("dispose",N)};var m=N;h!==void 0&&h.texture.dispose();const _=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],x=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let E=0;_===!0&&(E=1),y===!0&&(E=2),M===!0&&(E=3);let A=d.attributes.position.count*E,F=1;A>t.maxTextureSize&&(F=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const U=new Float32Array(A*F*4*v),K=new $r(U,A,F,v);K.type=gi,K.needsUpdate=!0;const R=E*4;for(let k=0;k<v;k++){const W=S[k],H=x[k],q=z[k],Q=A*F*4*k;for(let it=0;it<W.count;it++){const J=it*R;_===!0&&(r.fromBufferAttribute(W,it),U[Q+J+0]=r.x,U[Q+J+1]=r.y,U[Q+J+2]=r.z,U[Q+J+3]=0),y===!0&&(r.fromBufferAttribute(H,it),U[Q+J+4]=r.x,U[Q+J+5]=r.y,U[Q+J+6]=r.z,U[Q+J+7]=0),M===!0&&(r.fromBufferAttribute(q,it),U[Q+J+8]=r.x,U[Q+J+9]=r.y,U[Q+J+10]=r.z,U[Q+J+11]=q.itemSize===4?r.w:1)}}h={count:v,texture:K,size:new kt(A,F)},a.set(d,h),d.addEventListener("dispose",N)}let f=0;for(let _=0;_<p.length;_++)f+=p[_];const T=d.morphTargetsRelative?1:1-f;u.getUniforms().setValue(s,"morphTargetBaseInfluence",T),u.getUniforms().setValue(s,"morphTargetInfluences",p),u.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}else{const g=p===void 0?0:p.length;let v=i[d.id];if(v===void 0||v.length!==g){v=[];for(let y=0;y<g;y++)v[y]=[y,0];i[d.id]=v}for(let y=0;y<g;y++){const M=v[y];M[0]=y,M[1]=p[y]}v.sort(cf);for(let y=0;y<8;y++)y<g&&v[y][1]?(o[y][0]=v[y][0],o[y][1]=v[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(lf);const h=d.morphAttributes.position,f=d.morphAttributes.normal;let T=0;for(let y=0;y<8;y++){const M=o[y],S=M[0],x=M[1];S!==Number.MAX_SAFE_INTEGER&&x?(h&&d.getAttribute("morphTarget"+y)!==h[S]&&d.setAttribute("morphTarget"+y,h[S]),f&&d.getAttribute("morphNormal"+y)!==f[S]&&d.setAttribute("morphNormal"+y,f[S]),n[y]=x,T+=x):(h&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),f&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),n[y]=0)}const _=d.morphTargetsRelative?1:1-T;u.getUniforms().setValue(s,"morphTargetBaseInfluence",_),u.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:c}}function df(s,t,e,i){let n=new WeakMap;function a(c){const l=i.render.frame,d=c.geometry,u=t.get(c,d);if(n.get(u)!==l&&(t.update(u),n.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),n.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;n.get(p)!==l&&(p.update(),n.set(p,l))}return u}function r(){n=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:r}}class il extends ze{constructor(t,e,i,n,a,r,o,c,l,d){if(d=d!==void 0?d:Li,d!==Li&&d!==un)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Li&&(i=mi),i===void 0&&d===un&&(i=Ri),super(null,n,a,r,o,c,d,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Pe,this.minFilter=c!==void 0?c:Pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const nl=new ze,sl=new il(1,1);sl.compareFunction=Vr;const al=new $r,ol=new Kc,rl=new Qr,tr=[],er=[],ir=new Float32Array(16),nr=new Float32Array(9),sr=new Float32Array(4);function mn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let a=tr[n];if(a===void 0&&(a=new Float32Array(n),tr[n]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function pe(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function me(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Es(s,t){let e=er[t];e===void 0&&(e=new Int32Array(t),er[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function uf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2fv(this.addr,t),me(e,t)}}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;s.uniform3fv(this.addr,t),me(e,t)}}function mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4fv(this.addr,t),me(e,t)}}function gf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;sr.set(i),s.uniformMatrix2fv(this.addr,!1,sr),me(e,i)}}function vf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;nr.set(i),s.uniformMatrix3fv(this.addr,!1,nr),me(e,i)}}function _f(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;ir.set(i),s.uniformMatrix4fv(this.addr,!1,ir),me(e,i)}}function yf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Tf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2iv(this.addr,t),me(e,t)}}function Mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3iv(this.addr,t),me(e,t)}}function Ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4iv(this.addr,t),me(e,t)}}function xf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2uiv(this.addr,t),me(e,t)}}function bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3uiv(this.addr,t),me(e,t)}}function Af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4uiv(this.addr,t),me(e,t)}}function Pf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);const a=this.type===s.SAMPLER_2D_SHADOW?sl:nl;e.setTexture2D(t||a,n)}function Cf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||ol,n)}function wf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||rl,n)}function Rf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||al,n)}function Lf(s){switch(s){case 5126:return uf;case 35664:return ff;case 35665:return pf;case 35666:return mf;case 35674:return gf;case 35675:return vf;case 35676:return _f;case 5124:case 35670:return yf;case 35667:case 35671:return Tf;case 35668:case 35672:return Mf;case 35669:case 35673:return Ef;case 5125:return xf;case 36294:return Sf;case 36295:return bf;case 36296:return Af;case 35678:case 36198:case 36298:case 36306:case 35682:return Pf;case 35679:case 36299:case 36307:return Cf;case 35680:case 36300:case 36308:case 36293:return wf;case 36289:case 36303:case 36311:case 36292:return Rf}}function If(s,t){s.uniform1fv(this.addr,t)}function Df(s,t){const e=mn(t,this.size,2);s.uniform2fv(this.addr,e)}function Of(s,t){const e=mn(t,this.size,3);s.uniform3fv(this.addr,e)}function Nf(s,t){const e=mn(t,this.size,4);s.uniform4fv(this.addr,e)}function zf(s,t){const e=mn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Uf(s,t){const e=mn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Ff(s,t){const e=mn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Gf(s,t){s.uniform1iv(this.addr,t)}function Bf(s,t){s.uniform2iv(this.addr,t)}function kf(s,t){s.uniform3iv(this.addr,t)}function Hf(s,t){s.uniform4iv(this.addr,t)}function Vf(s,t){s.uniform1uiv(this.addr,t)}function Wf(s,t){s.uniform2uiv(this.addr,t)}function Yf(s,t){s.uniform3uiv(this.addr,t)}function Xf(s,t){s.uniform4uiv(this.addr,t)}function $f(s,t,e){const i=this.cache,n=t.length,a=Es(e,n);pe(i,a)||(s.uniform1iv(this.addr,a),me(i,a));for(let r=0;r!==n;++r)e.setTexture2D(t[r]||nl,a[r])}function Kf(s,t,e){const i=this.cache,n=t.length,a=Es(e,n);pe(i,a)||(s.uniform1iv(this.addr,a),me(i,a));for(let r=0;r!==n;++r)e.setTexture3D(t[r]||ol,a[r])}function qf(s,t,e){const i=this.cache,n=t.length,a=Es(e,n);pe(i,a)||(s.uniform1iv(this.addr,a),me(i,a));for(let r=0;r!==n;++r)e.setTextureCube(t[r]||rl,a[r])}function jf(s,t,e){const i=this.cache,n=t.length,a=Es(e,n);pe(i,a)||(s.uniform1iv(this.addr,a),me(i,a));for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||al,a[r])}function Zf(s){switch(s){case 5126:return If;case 35664:return Df;case 35665:return Of;case 35666:return Nf;case 35674:return zf;case 35675:return Uf;case 35676:return Ff;case 5124:case 35670:return Gf;case 35667:case 35671:return Bf;case 35668:case 35672:return kf;case 35669:case 35673:return Hf;case 5125:return Vf;case 36294:return Wf;case 36295:return Yf;case 36296:return Xf;case 35678:case 36198:case 36298:case 36306:case 35682:return $f;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return qf;case 36289:case 36303:case 36311:case 36292:return jf}}class Jf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Lf(e.type)}}class Qf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zf(e.type)}}class tp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let a=0,r=n.length;a!==r;++a){const o=n[a];o.setValue(t,e[o.id],i)}}}const na=/(\w+)(\])?(\[|\.)?/g;function ar(s,t){s.seq.push(t),s.map[t.id]=t}function ep(s,t,e){const i=s.name,n=i.length;for(na.lastIndex=0;;){const a=na.exec(i),r=na.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===n){ar(e,l===void 0?new Jf(o,s,t):new Qf(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new tp(o),ar(e,u)),e=u}}}class ls{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=t.getActiveUniform(e,n),r=t.getUniformLocation(e,a.name);ep(a,r,this)}}setValue(t,e,i,n){const a=this.map[e];a!==void 0&&a.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let a=0,r=e.length;a!==r;++a){const o=e[a],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,a=t.length;n!==a;++n){const r=t[n];r.id in e&&i.push(r)}return i}}function or(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const ip=37297;let np=0;function sp(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=n;r<a;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}function ap(s){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(s);let i;switch(t===e?i="":t===us&&e===ds?i="LinearDisplayP3ToLinearSRGB":t===ds&&e===us&&(i="LinearSRGBToLinearDisplayP3"),s){case li:case Ts:return[i,"LinearTransferOETF"];case Te:case Ca:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function rr(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+n+`

`+sp(s.getShaderSource(t),r)}else return n}function op(s,t){const e=ap(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function rp(s,t){let e;switch(t){case gc:e="Linear";break;case vc:e="Reinhard";break;case _c:e="OptimizedCineon";break;case yc:e="ACESFilmic";break;case Mc:e="AgX";break;case Tc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function lp(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(on).join(`
`)}function cp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(on).join(`
`)}function hp(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function dp(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=s.getActiveAttrib(t,n),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function on(s){return s!==""}function lr(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cr(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const up=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ma(s){return s.replace(up,pp)}const fp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function pp(s,t){let e=Yt[t];if(e===void 0){const i=fp.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ma(e)}const mp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hr(s){return s.replace(mp,gp)}function gp(s,t,e,i){let n="";for(let a=parseInt(t);a<parseInt(e);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function dr(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ir?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Wl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function _p(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case hn:case dn:t="ENVMAP_TYPE_CUBE";break;case ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case dn:t="ENVMAP_MODE_REFRACTION";break}return t}function Tp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Aa:t="ENVMAP_BLENDING_MULTIPLY";break;case pc:t="ENVMAP_BLENDING_MIX";break;case mc:t="ENVMAP_BLENDING_ADD";break}return t}function Mp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Ep(s,t,e,i){const n=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const c=vp(e),l=_p(e),d=yp(e),u=Tp(e),p=Mp(e),m=e.isWebGL2?"":lp(e),g=cp(e),v=hp(a),h=n.createProgram();let f,T,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(on).join(`
`),f.length>0&&(f+=`
`),T=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(on).join(`
`),T.length>0&&(T+=`
`)):(f=[dr(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(on).join(`
`),T=[m,dr(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?Yt.tonemapping_pars_fragment:"",e.toneMapping!==_i?rp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,op("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(on).join(`
`)),r=Ma(r),r=lr(r,e),r=cr(r,e),o=Ma(o),o=lr(o,e),o=cr(o,e),r=hr(r),o=hr(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,T=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const y=_+f+r,M=_+T+o,S=or(n,n.VERTEX_SHADER,y),x=or(n,n.FRAGMENT_SHADER,M);n.attachShader(h,S),n.attachShader(h,x),e.index0AttributeName!==void 0?n.bindAttribLocation(h,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(h,0,"position"),n.linkProgram(h);function z(U){if(s.debug.checkShaderErrors){const K=n.getProgramInfoLog(h).trim(),R=n.getShaderInfoLog(S).trim(),N=n.getShaderInfoLog(x).trim();let k=!0,W=!0;if(n.getProgramParameter(h,n.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,h,S,x);else{const H=rr(n,S,"vertex"),q=rr(n,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(h,n.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+H+`
`+q)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(R===""||N==="")&&(W=!1);W&&(U.diagnostics={runnable:k,programLog:K,vertexShader:{log:R,prefix:f},fragmentShader:{log:N,prefix:T}})}n.deleteShader(S),n.deleteShader(x),E=new ls(n,h),A=dp(n,h)}let E;this.getUniforms=function(){return E===void 0&&z(this),E};let A;this.getAttributes=function(){return A===void 0&&z(this),A};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=n.getProgramParameter(h,ip)),F},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(h),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=np++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=S,this.fragmentShader=x,this}let xp=0;class Sp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new bp(t),e.set(t,i)),i}}class bp{constructor(t){this.id=xp++,this.code=t,this.usedTimes=0}}function Ap(s,t,e,i,n,a,r){const o=new La,c=new Sp,l=[],d=n.isWebGL2,u=n.logarithmicDepthBuffer,p=n.vertexTextures;let m=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function h(E,A,F,U,K){const R=U.fog,N=K.geometry,k=E.isMeshStandardMaterial?U.environment:null,W=(E.isMeshStandardMaterial?e:t).get(E.envMap||k),H=W&&W.mapping===ys?W.image.height:null,q=g[E.type];E.precision!==null&&(m=n.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const Q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,it=Q!==void 0?Q.length:0;let J=0;N.morphAttributes.position!==void 0&&(J=1),N.morphAttributes.normal!==void 0&&(J=2),N.morphAttributes.color!==void 0&&(J=3);let B,et,ot,Mt;if(q){const re=je[q];B=re.vertexShader,et=re.fragmentShader}else B=E.vertexShader,et=E.fragmentShader,c.update(E),ot=c.getVertexShaderID(E),Mt=c.getFragmentShaderID(E);const w=s.getRenderTarget(),D=K.isInstancedMesh===!0,$=K.isBatchedMesh===!0,V=!!E.map,Y=!!E.matcap,I=!!W,_t=!!E.aoMap,vt=!!E.lightMap,xt=!!E.bumpMap,Tt=!!E.normalMap,Nt=!!E.displacementMap,It=!!E.emissiveMap,P=!!E.metalnessMap,b=!!E.roughnessMap,j=E.anisotropy>0,ct=E.clearcoat>0,rt=E.iridescence>0,lt=E.sheen>0,dt=E.transmission>0,ut=j&&!!E.anisotropyMap,mt=ct&&!!E.clearcoatMap,gt=ct&&!!E.clearcoatNormalMap,Et=ct&&!!E.clearcoatRoughnessMap,ht=rt&&!!E.iridescenceMap,zt=rt&&!!E.iridescenceThicknessMap,Lt=lt&&!!E.sheenColorMap,Rt=lt&&!!E.sheenRoughnessMap,wt=!!E.specularMap,bt=!!E.specularColorMap,L=!!E.specularIntensityMap,ft=dt&&!!E.transmissionMap,Ct=dt&&!!E.thicknessMap,St=!!E.gradientMap,pt=!!E.alphaMap,G=E.alphaTest>0,yt=!!E.alphaHash,Pt=!!E.extensions,Ut=!!N.attributes.uv1,Gt=!!N.attributes.uv2,$t=!!N.attributes.uv3;let Kt=_i;return E.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Kt=s.toneMapping),{isWebGL2:d,shaderID:q,shaderType:E.type,shaderName:E.name,vertexShader:B,fragmentShader:et,defines:E.defines,customVertexShaderID:ot,customFragmentShaderID:Mt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:$,instancing:D,instancingColor:D&&K.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:w===null?s.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:li,map:V,matcap:Y,envMap:I,envMapMode:I&&W.mapping,envMapCubeUVHeight:H,aoMap:_t,lightMap:vt,bumpMap:xt,normalMap:Tt,displacementMap:p&&Nt,emissiveMap:It,normalMapObjectSpace:Tt&&E.normalMapType===Dc,normalMapTangentSpace:Tt&&E.normalMapType===Hr,metalnessMap:P,roughnessMap:b,anisotropy:j,anisotropyMap:ut,clearcoat:ct,clearcoatMap:mt,clearcoatNormalMap:gt,clearcoatRoughnessMap:Et,iridescence:rt,iridescenceMap:ht,iridescenceThicknessMap:zt,sheen:lt,sheenColorMap:Lt,sheenRoughnessMap:Rt,specularMap:wt,specularColorMap:bt,specularIntensityMap:L,transmission:dt,transmissionMap:ft,thicknessMap:Ct,gradientMap:St,opaque:E.transparent===!1&&E.blending===ln,alphaMap:pt,alphaTest:G,alphaHash:yt,combine:E.combine,mapUv:V&&v(E.map.channel),aoMapUv:_t&&v(E.aoMap.channel),lightMapUv:vt&&v(E.lightMap.channel),bumpMapUv:xt&&v(E.bumpMap.channel),normalMapUv:Tt&&v(E.normalMap.channel),displacementMapUv:Nt&&v(E.displacementMap.channel),emissiveMapUv:It&&v(E.emissiveMap.channel),metalnessMapUv:P&&v(E.metalnessMap.channel),roughnessMapUv:b&&v(E.roughnessMap.channel),anisotropyMapUv:ut&&v(E.anisotropyMap.channel),clearcoatMapUv:mt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:gt&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&v(E.sheenRoughnessMap.channel),specularMapUv:wt&&v(E.specularMap.channel),specularColorMapUv:bt&&v(E.specularColorMap.channel),specularIntensityMapUv:L&&v(E.specularIntensityMap.channel),transmissionMapUv:ft&&v(E.transmissionMap.channel),thicknessMapUv:Ct&&v(E.thicknessMap.channel),alphaMapUv:pt&&v(E.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Tt||j),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Ut,vertexUv2s:Gt,vertexUv3s:$t,pointsUvs:K.isPoints===!0&&!!N.attributes.uv&&(V||pt),fog:!!R,useFog:E.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:J,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:Kt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:V&&E.map.isVideoTexture===!0&&Qt.getTransfer(E.map.colorSpace)===ie,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===oi,flipSided:E.side===Le,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Pt&&E.extensions.derivatives===!0,extensionFragDepth:Pt&&E.extensions.fragDepth===!0,extensionDrawBuffers:Pt&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Pt&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Pt&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const F in E.defines)A.push(F),A.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(T(A,E),_(A,E),A.push(s.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function T(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function _(E,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),E.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function y(E){const A=g[E.type];let F;if(A){const U=je[A];F=rh.clone(U.uniforms)}else F=E.uniforms;return F}function M(E,A){let F;for(let U=0,K=l.length;U<K;U++){const R=l[U];if(R.cacheKey===A){F=R,++F.usedTimes;break}}return F===void 0&&(F=new Ep(s,A,E,a),l.push(F)),F}function S(E){if(--E.usedTimes===0){const A=l.indexOf(E);l[A]=l[l.length-1],l.pop(),E.destroy()}}function x(E){c.remove(E)}function z(){c.dispose()}return{getParameters:h,getProgramCacheKey:f,getUniforms:y,acquireProgram:M,releaseProgram:S,releaseShaderCache:x,programs:l,dispose:z}}function Pp(){let s=new WeakMap;function t(a){let r=s.get(a);return r===void 0&&(r={},s.set(a,r)),r}function e(a){s.delete(a)}function i(a,r,o){s.get(a)[r]=o}function n(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function Cp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ur(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function fr(){const s=[];let t=0;const e=[],i=[],n=[];function a(){t=0,e.length=0,i.length=0,n.length=0}function r(u,p,m,g,v,h){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:p,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:h},s[t]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=h),t++,f}function o(u,p,m,g,v,h){const f=r(u,p,m,g,v,h);m.transmission>0?i.push(f):m.transparent===!0?n.push(f):e.push(f)}function c(u,p,m,g,v,h){const f=r(u,p,m,g,v,h);m.transmission>0?i.unshift(f):m.transparent===!0?n.unshift(f):e.unshift(f)}function l(u,p){e.length>1&&e.sort(u||Cp),i.length>1&&i.sort(p||ur),n.length>1&&n.sort(p||ur)}function d(){for(let u=t,p=s.length;u<p;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:a,push:o,unshift:c,finish:d,sort:l}}function wp(){let s=new WeakMap;function t(i,n){const a=s.get(i);let r;return a===void 0?(r=new fr,s.set(i,[r])):n>=a.length?(r=new fr,a.push(r)):r=a[n],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function Rp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Z,color:new Jt};break;case"SpotLight":e={position:new Z,direction:new Z,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[t.id]=e,e}}}function Lp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Ip=0;function Dp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Op(s,t){const e=new Rp,i=Lp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new Z);const a=new Z,r=new fe,o=new fe;function c(d,u){let p=0,m=0,g=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let v=0,h=0,f=0,T=0,_=0,y=0,M=0,S=0,x=0,z=0,E=0;d.sort(Dp);const A=u===!0?Math.PI:1;for(let U=0,K=d.length;U<K;U++){const R=d[U],N=R.color,k=R.intensity,W=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)p+=N.r*k*A,m+=N.g*k*A,g+=N.b*k*A;else if(R.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(R.sh.coefficients[q],k);E++}else if(R.isDirectionalLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity*A),R.castShadow){const Q=R.shadow,it=i.get(R);it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,n.directionalShadow[v]=it,n.directionalShadowMap[v]=H,n.directionalShadowMatrix[v]=R.shadow.matrix,y++}n.directional[v]=q,v++}else if(R.isSpotLight){const q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(N).multiplyScalar(k*A),q.distance=W,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,n.spot[f]=q;const Q=R.shadow;if(R.map&&(n.spotLightMap[x]=R.map,x++,Q.updateMatrices(R),R.castShadow&&z++),n.spotLightMatrix[f]=Q.matrix,R.castShadow){const it=i.get(R);it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,n.spotShadow[f]=it,n.spotShadowMap[f]=H,S++}f++}else if(R.isRectAreaLight){const q=e.get(R);q.color.copy(N).multiplyScalar(k),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),n.rectArea[T]=q,T++}else if(R.isPointLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity*A),q.distance=R.distance,q.decay=R.decay,R.castShadow){const Q=R.shadow,it=i.get(R);it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,it.shadowCameraNear=Q.camera.near,it.shadowCameraFar=Q.camera.far,n.pointShadow[h]=it,n.pointShadowMap[h]=H,n.pointShadowMatrix[h]=R.shadow.matrix,M++}n.point[h]=q,h++}else if(R.isHemisphereLight){const q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(k*A),q.groundColor.copy(R.groundColor).multiplyScalar(k*A),n.hemi[_]=q,_++}}T>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=g;const F=n.hash;(F.directionalLength!==v||F.pointLength!==h||F.spotLength!==f||F.rectAreaLength!==T||F.hemiLength!==_||F.numDirectionalShadows!==y||F.numPointShadows!==M||F.numSpotShadows!==S||F.numSpotMaps!==x||F.numLightProbes!==E)&&(n.directional.length=v,n.spot.length=f,n.rectArea.length=T,n.point.length=h,n.hemi.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=S+x-z,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=z,n.numLightProbes=E,F.directionalLength=v,F.pointLength=h,F.spotLength=f,F.rectAreaLength=T,F.hemiLength=_,F.numDirectionalShadows=y,F.numPointShadows=M,F.numSpotShadows=S,F.numSpotMaps=x,F.numLightProbes=E,n.version=Ip++)}function l(d,u){let p=0,m=0,g=0,v=0,h=0;const f=u.matrixWorldInverse;for(let T=0,_=d.length;T<_;T++){const y=d[T];if(y.isDirectionalLight){const M=n.directional[p];M.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(f),p++}else if(y.isSpotLight){const M=n.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(f),g++}else if(y.isRectAreaLight){const M=n.rectArea[v];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),o.identity(),r.copy(y.matrixWorld),r.premultiply(f),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const M=n.point[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),m++}else if(y.isHemisphereLight){const M=n.hemi[h];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(f),h++}}}return{setup:c,setupView:l,state:n}}function pr(s,t){const e=new Op(s,t),i=[],n=[];function a(){i.length=0,n.length=0}function r(u){i.push(u)}function o(u){n.push(u)}function c(u){e.setup(i,u)}function l(u){e.setupView(i,u)}return{init:a,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:c,setupLightsView:l,pushLight:r,pushShadow:o}}function Np(s,t){let e=new WeakMap;function i(a,r=0){const o=e.get(a);let c;return o===void 0?(c=new pr(s,t),e.set(a,[c])):r>=o.length?(c=new pr(s,t),o.push(c)):c=o[r],c}function n(){e=new WeakMap}return{get:i,dispose:n}}class zp extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Up extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Fp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bp(s,t,e){let i=new Ia;const n=new kt,a=new kt,r=new _e,o=new zp({depthPacking:Ic}),c=new Up,l={},d=e.maxTextureSize,u={[Ti]:Le,[Le]:Ti,[oi]:oi},p=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Fp,fragmentShader:Gp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new Je;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new te(g,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ir;let f=this.type;this.render=function(S,x,z){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||S.length===0)return;const E=s.getRenderTarget(),A=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),U=s.state;U.setBlending(vi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const K=f!==ai&&this.type===ai,R=f===ai&&this.type!==ai;for(let N=0,k=S.length;N<k;N++){const W=S[N],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const q=H.getFrameExtents();if(n.multiply(q),a.copy(H.mapSize),(n.x>d||n.y>d)&&(n.x>d&&(a.x=Math.floor(d/q.x),n.x=a.x*q.x,H.mapSize.x=a.x),n.y>d&&(a.y=Math.floor(d/q.y),n.y=a.y*q.y,H.mapSize.y=a.y)),H.map===null||K===!0||R===!0){const it=this.type!==ai?{minFilter:Pe,magFilter:Pe}:{};H.map!==null&&H.map.dispose(),H.map=new Oi(n.x,n.y,it),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const Q=H.getViewportCount();for(let it=0;it<Q;it++){const J=H.getViewport(it);r.set(a.x*J.x,a.y*J.y,a.x*J.z,a.y*J.w),U.viewport(r),H.updateMatrices(W,it),i=H.getFrustum(),y(x,z,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===ai&&T(H,z),H.needsUpdate=!1}f=this.type,h.needsUpdate=!1,s.setRenderTarget(E,A,F)};function T(S,x){const z=t.update(v);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Oi(n.x,n.y)),p.uniforms.shadow_pass.value=S.map.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(x,null,z,p,v,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(x,null,z,m,v,null)}function _(S,x,z,E){let A=null;const F=z.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(F!==void 0)A=F;else if(A=z.isPointLight===!0?c:o,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const U=A.uuid,K=x.uuid;let R=l[U];R===void 0&&(R={},l[U]=R);let N=R[K];N===void 0&&(N=A.clone(),R[K]=N,x.addEventListener("dispose",M)),A=N}if(A.visible=x.visible,A.wireframe=x.wireframe,E===ai?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:u[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,z.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const U=s.properties.get(A);U.light=z}return A}function y(S,x,z,E,A){if(S.visible===!1)return;if(S.layers.test(x.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===ai)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld);const K=t.update(S),R=S.material;if(Array.isArray(R)){const N=K.groups;for(let k=0,W=N.length;k<W;k++){const H=N[k],q=R[H.materialIndex];if(q&&q.visible){const Q=_(S,q,E,A);S.onBeforeShadow(s,S,x,z,K,Q,H),s.renderBufferDirect(z,null,K,Q,S,H),S.onAfterShadow(s,S,x,z,K,Q,H)}}}else if(R.visible){const N=_(S,R,E,A);S.onBeforeShadow(s,S,x,z,K,N,null),s.renderBufferDirect(z,null,K,N,S,null),S.onAfterShadow(s,S,x,z,K,N,null)}}const U=S.children;for(let K=0,R=U.length;K<R;K++)y(U[K],x,z,E,A)}function M(S){S.target.removeEventListener("dispose",M);for(const z in l){const E=l[z],A=S.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function kp(s,t,e){const i=e.isWebGL2;function n(){let G=!1;const yt=new _e;let Pt=null;const Ut=new _e(0,0,0,0);return{setMask:function(Gt){Pt!==Gt&&!G&&(s.colorMask(Gt,Gt,Gt,Gt),Pt=Gt)},setLocked:function(Gt){G=Gt},setClear:function(Gt,$t,Kt,ne,re){re===!0&&(Gt*=ne,$t*=ne,Kt*=ne),yt.set(Gt,$t,Kt,ne),Ut.equals(yt)===!1&&(s.clearColor(Gt,$t,Kt,ne),Ut.copy(yt))},reset:function(){G=!1,Pt=null,Ut.set(-1,0,0,0)}}}function a(){let G=!1,yt=null,Pt=null,Ut=null;return{setTest:function(Gt){Gt?$(s.DEPTH_TEST):V(s.DEPTH_TEST)},setMask:function(Gt){yt!==Gt&&!G&&(s.depthMask(Gt),yt=Gt)},setFunc:function(Gt){if(Pt!==Gt){switch(Gt){case rc:s.depthFunc(s.NEVER);break;case lc:s.depthFunc(s.ALWAYS);break;case cc:s.depthFunc(s.LESS);break;case cs:s.depthFunc(s.LEQUAL);break;case hc:s.depthFunc(s.EQUAL);break;case dc:s.depthFunc(s.GEQUAL);break;case uc:s.depthFunc(s.GREATER);break;case fc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pt=Gt}},setLocked:function(Gt){G=Gt},setClear:function(Gt){Ut!==Gt&&(s.clearDepth(Gt),Ut=Gt)},reset:function(){G=!1,yt=null,Pt=null,Ut=null}}}function r(){let G=!1,yt=null,Pt=null,Ut=null,Gt=null,$t=null,Kt=null,ne=null,re=null;return{setTest:function(Zt){G||(Zt?$(s.STENCIL_TEST):V(s.STENCIL_TEST))},setMask:function(Zt){yt!==Zt&&!G&&(s.stencilMask(Zt),yt=Zt)},setFunc:function(Zt,he,qe){(Pt!==Zt||Ut!==he||Gt!==qe)&&(s.stencilFunc(Zt,he,qe),Pt=Zt,Ut=he,Gt=qe)},setOp:function(Zt,he,qe){($t!==Zt||Kt!==he||ne!==qe)&&(s.stencilOp(Zt,he,qe),$t=Zt,Kt=he,ne=qe)},setLocked:function(Zt){G=Zt},setClear:function(Zt){re!==Zt&&(s.clearStencil(Zt),re=Zt)},reset:function(){G=!1,yt=null,Pt=null,Ut=null,Gt=null,$t=null,Kt=null,ne=null,re=null}}}const o=new n,c=new a,l=new r,d=new WeakMap,u=new WeakMap;let p={},m={},g=new WeakMap,v=[],h=null,f=!1,T=null,_=null,y=null,M=null,S=null,x=null,z=null,E=new Jt(0,0,0),A=0,F=!1,U=null,K=null,R=null,N=null,k=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,q=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Q)[1]),H=q>=1):Q.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),H=q>=2);let it=null,J={};const B=s.getParameter(s.SCISSOR_BOX),et=s.getParameter(s.VIEWPORT),ot=new _e().fromArray(B),Mt=new _e().fromArray(et);function w(G,yt,Pt,Ut){const Gt=new Uint8Array(4),$t=s.createTexture();s.bindTexture(G,$t),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Kt=0;Kt<Pt;Kt++)i&&(G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY)?s.texImage3D(yt,0,s.RGBA,1,1,Ut,0,s.RGBA,s.UNSIGNED_BYTE,Gt):s.texImage2D(yt+Kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Gt);return $t}const D={};D[s.TEXTURE_2D]=w(s.TEXTURE_2D,s.TEXTURE_2D,1),D[s.TEXTURE_CUBE_MAP]=w(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(D[s.TEXTURE_2D_ARRAY]=w(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),D[s.TEXTURE_3D]=w(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),$(s.DEPTH_TEST),c.setFunc(cs),It(!1),P(Ka),$(s.CULL_FACE),Tt(vi);function $(G){p[G]!==!0&&(s.enable(G),p[G]=!0)}function V(G){p[G]!==!1&&(s.disable(G),p[G]=!1)}function Y(G,yt){return m[G]!==yt?(s.bindFramebuffer(G,yt),m[G]=yt,i&&(G===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=yt),G===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=yt)),!0):!1}function I(G,yt){let Pt=v,Ut=!1;if(G)if(Pt=g.get(yt),Pt===void 0&&(Pt=[],g.set(yt,Pt)),G.isWebGLMultipleRenderTargets){const Gt=G.texture;if(Pt.length!==Gt.length||Pt[0]!==s.COLOR_ATTACHMENT0){for(let $t=0,Kt=Gt.length;$t<Kt;$t++)Pt[$t]=s.COLOR_ATTACHMENT0+$t;Pt.length=Gt.length,Ut=!0}}else Pt[0]!==s.COLOR_ATTACHMENT0&&(Pt[0]=s.COLOR_ATTACHMENT0,Ut=!0);else Pt[0]!==s.BACK&&(Pt[0]=s.BACK,Ut=!0);Ut&&(e.isWebGL2?s.drawBuffers(Pt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Pt))}function _t(G){return h!==G?(s.useProgram(G),h=G,!0):!1}const vt={[Ci]:s.FUNC_ADD,[Xl]:s.FUNC_SUBTRACT,[$l]:s.FUNC_REVERSE_SUBTRACT};if(i)vt[Ja]=s.MIN,vt[Qa]=s.MAX;else{const G=t.get("EXT_blend_minmax");G!==null&&(vt[Ja]=G.MIN_EXT,vt[Qa]=G.MAX_EXT)}const xt={[Kl]:s.ZERO,[ql]:s.ONE,[jl]:s.SRC_COLOR,[ua]:s.SRC_ALPHA,[ic]:s.SRC_ALPHA_SATURATE,[tc]:s.DST_COLOR,[Jl]:s.DST_ALPHA,[Zl]:s.ONE_MINUS_SRC_COLOR,[fa]:s.ONE_MINUS_SRC_ALPHA,[ec]:s.ONE_MINUS_DST_COLOR,[Ql]:s.ONE_MINUS_DST_ALPHA,[nc]:s.CONSTANT_COLOR,[sc]:s.ONE_MINUS_CONSTANT_COLOR,[ac]:s.CONSTANT_ALPHA,[oc]:s.ONE_MINUS_CONSTANT_ALPHA};function Tt(G,yt,Pt,Ut,Gt,$t,Kt,ne,re,Zt){if(G===vi){f===!0&&(V(s.BLEND),f=!1);return}if(f===!1&&($(s.BLEND),f=!0),G!==Yl){if(G!==T||Zt!==F){if((_!==Ci||S!==Ci)&&(s.blendEquation(s.FUNC_ADD),_=Ci,S=Ci),Zt)switch(G){case ln:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qa:s.blendFunc(s.ONE,s.ONE);break;case ja:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Za:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ln:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qa:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ja:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Za:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}y=null,M=null,x=null,z=null,E.set(0,0,0),A=0,T=G,F=Zt}return}Gt=Gt||yt,$t=$t||Pt,Kt=Kt||Ut,(yt!==_||Gt!==S)&&(s.blendEquationSeparate(vt[yt],vt[Gt]),_=yt,S=Gt),(Pt!==y||Ut!==M||$t!==x||Kt!==z)&&(s.blendFuncSeparate(xt[Pt],xt[Ut],xt[$t],xt[Kt]),y=Pt,M=Ut,x=$t,z=Kt),(ne.equals(E)===!1||re!==A)&&(s.blendColor(ne.r,ne.g,ne.b,re),E.copy(ne),A=re),T=G,F=!1}function Nt(G,yt){G.side===oi?V(s.CULL_FACE):$(s.CULL_FACE);let Pt=G.side===Le;yt&&(Pt=!Pt),It(Pt),G.blending===ln&&G.transparent===!1?Tt(vi):Tt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),o.setMask(G.colorWrite);const Ut=G.stencilWrite;l.setTest(Ut),Ut&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),j(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?$(s.SAMPLE_ALPHA_TO_COVERAGE):V(s.SAMPLE_ALPHA_TO_COVERAGE)}function It(G){U!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),U=G)}function P(G){G!==Hl?($(s.CULL_FACE),G!==K&&(G===Ka?s.cullFace(s.BACK):G===Vl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):V(s.CULL_FACE),K=G}function b(G){G!==R&&(H&&s.lineWidth(G),R=G)}function j(G,yt,Pt){G?($(s.POLYGON_OFFSET_FILL),(N!==yt||k!==Pt)&&(s.polygonOffset(yt,Pt),N=yt,k=Pt)):V(s.POLYGON_OFFSET_FILL)}function ct(G){G?$(s.SCISSOR_TEST):V(s.SCISSOR_TEST)}function rt(G){G===void 0&&(G=s.TEXTURE0+W-1),it!==G&&(s.activeTexture(G),it=G)}function lt(G,yt,Pt){Pt===void 0&&(it===null?Pt=s.TEXTURE0+W-1:Pt=it);let Ut=J[Pt];Ut===void 0&&(Ut={type:void 0,texture:void 0},J[Pt]=Ut),(Ut.type!==G||Ut.texture!==yt)&&(it!==Pt&&(s.activeTexture(Pt),it=Pt),s.bindTexture(G,yt||D[G]),Ut.type=G,Ut.texture=yt)}function dt(){const G=J[it];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ut(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function mt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function gt(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Et(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function zt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Lt(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Rt(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function wt(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function bt(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function L(G){ot.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),ot.copy(G))}function ft(G){Mt.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Mt.copy(G))}function Ct(G,yt){let Pt=u.get(yt);Pt===void 0&&(Pt=new WeakMap,u.set(yt,Pt));let Ut=Pt.get(G);Ut===void 0&&(Ut=s.getUniformBlockIndex(yt,G.name),Pt.set(G,Ut))}function St(G,yt){const Ut=u.get(yt).get(G);d.get(yt)!==Ut&&(s.uniformBlockBinding(yt,Ut,G.__bindingPointIndex),d.set(yt,Ut))}function pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},it=null,J={},m={},g=new WeakMap,v=[],h=null,f=!1,T=null,_=null,y=null,M=null,S=null,x=null,z=null,E=new Jt(0,0,0),A=0,F=!1,U=null,K=null,R=null,N=null,k=null,ot.set(0,0,s.canvas.width,s.canvas.height),Mt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:$,disable:V,bindFramebuffer:Y,drawBuffers:I,useProgram:_t,setBlending:Tt,setMaterial:Nt,setFlipSided:It,setCullFace:P,setLineWidth:b,setPolygonOffset:j,setScissorTest:ct,activeTexture:rt,bindTexture:lt,unbindTexture:dt,compressedTexImage2D:ut,compressedTexImage3D:mt,texImage2D:wt,texImage3D:bt,updateUBOMapping:Ct,uniformBlockBinding:St,texStorage2D:Lt,texStorage3D:Rt,texSubImage2D:gt,texSubImage3D:Et,compressedTexSubImage2D:ht,compressedTexSubImage3D:zt,scissor:L,viewport:ft,reset:pt}}function Hp(s,t,e,i,n,a,r){const o=n.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return m?new OffscreenCanvas(P,b):ps("canvas")}function v(P,b,j,ct){let rt=1;if((P.width>ct||P.height>ct)&&(rt=ct/Math.max(P.width,P.height)),rt<1||b===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const lt=b?Ta:Math.floor,dt=lt(rt*P.width),ut=lt(rt*P.height);u===void 0&&(u=g(dt,ut));const mt=j?g(dt,ut):u;return mt.width=dt,mt.height=ut,mt.getContext("2d").drawImage(P,0,0,dt,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+dt+"x"+ut+")."),mt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function h(P){return Ro(P.width)&&Ro(P.height)}function f(P){return o?!1:P.wrapS!==$e||P.wrapT!==$e||P.minFilter!==Pe&&P.minFilter!==Ge}function T(P,b){return P.generateMipmaps&&b&&P.minFilter!==Pe&&P.minFilter!==Ge}function _(P){s.generateMipmap(P)}function y(P,b,j,ct,rt=!1){if(o===!1)return b;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let lt=b;if(b===s.RED&&(j===s.FLOAT&&(lt=s.R32F),j===s.HALF_FLOAT&&(lt=s.R16F),j===s.UNSIGNED_BYTE&&(lt=s.R8)),b===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(lt=s.R8UI),j===s.UNSIGNED_SHORT&&(lt=s.R16UI),j===s.UNSIGNED_INT&&(lt=s.R32UI),j===s.BYTE&&(lt=s.R8I),j===s.SHORT&&(lt=s.R16I),j===s.INT&&(lt=s.R32I)),b===s.RG&&(j===s.FLOAT&&(lt=s.RG32F),j===s.HALF_FLOAT&&(lt=s.RG16F),j===s.UNSIGNED_BYTE&&(lt=s.RG8)),b===s.RGBA){const dt=rt?hs:Qt.getTransfer(ct);j===s.FLOAT&&(lt=s.RGBA32F),j===s.HALF_FLOAT&&(lt=s.RGBA16F),j===s.UNSIGNED_BYTE&&(lt=dt===ie?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(lt=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(lt=s.RGB5_A1)}return(lt===s.R16F||lt===s.R32F||lt===s.RG16F||lt===s.RG32F||lt===s.RGBA16F||lt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function M(P,b,j){return T(P,j)===!0||P.isFramebufferTexture&&P.minFilter!==Pe&&P.minFilter!==Ge?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function S(P){return P===Pe||P===to||P===ws?s.NEAREST:s.LINEAR}function x(P){const b=P.target;b.removeEventListener("dispose",x),E(b),b.isVideoTexture&&d.delete(b)}function z(P){const b=P.target;b.removeEventListener("dispose",z),F(b)}function E(P){const b=i.get(P);if(b.__webglInit===void 0)return;const j=P.source,ct=p.get(j);if(ct){const rt=ct[b.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&A(P),Object.keys(ct).length===0&&p.delete(j)}i.remove(P)}function A(P){const b=i.get(P);s.deleteTexture(b.__webglTexture);const j=P.source,ct=p.get(j);delete ct[b.__cacheKey],r.memory.textures--}function F(P){const b=P.texture,j=i.get(P),ct=i.get(b);if(ct.__webglTexture!==void 0&&(s.deleteTexture(ct.__webglTexture),r.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(j.__webglFramebuffer[rt]))for(let lt=0;lt<j.__webglFramebuffer[rt].length;lt++)s.deleteFramebuffer(j.__webglFramebuffer[rt][lt]);else s.deleteFramebuffer(j.__webglFramebuffer[rt]);j.__webglDepthbuffer&&s.deleteRenderbuffer(j.__webglDepthbuffer[rt])}else{if(Array.isArray(j.__webglFramebuffer))for(let rt=0;rt<j.__webglFramebuffer.length;rt++)s.deleteFramebuffer(j.__webglFramebuffer[rt]);else s.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&s.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&s.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let rt=0;rt<j.__webglColorRenderbuffer.length;rt++)j.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(j.__webglColorRenderbuffer[rt]);j.__webglDepthRenderbuffer&&s.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let rt=0,lt=b.length;rt<lt;rt++){const dt=i.get(b[rt]);dt.__webglTexture&&(s.deleteTexture(dt.__webglTexture),r.memory.textures--),i.remove(b[rt])}i.remove(b),i.remove(P)}let U=0;function K(){U=0}function R(){const P=U;return P>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+n.maxTextures),U+=1,P}function N(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function k(P,b){const j=i.get(P);if(P.isVideoTexture&&Nt(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const ct=P.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(j,P,b);return}}e.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+b)}function W(P,b){const j=i.get(P);if(P.version>0&&j.__version!==P.version){ot(j,P,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+b)}function H(P,b){const j=i.get(P);if(P.version>0&&j.__version!==P.version){ot(j,P,b);return}e.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+b)}function q(P,b){const j=i.get(P);if(P.version>0&&j.__version!==P.version){Mt(j,P,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+b)}const Q={[ga]:s.REPEAT,[$e]:s.CLAMP_TO_EDGE,[va]:s.MIRRORED_REPEAT},it={[Pe]:s.NEAREST,[to]:s.NEAREST_MIPMAP_NEAREST,[ws]:s.NEAREST_MIPMAP_LINEAR,[Ge]:s.LINEAR,[Ec]:s.LINEAR_MIPMAP_NEAREST,[wn]:s.LINEAR_MIPMAP_LINEAR},J={[Oc]:s.NEVER,[Bc]:s.ALWAYS,[Nc]:s.LESS,[Vr]:s.LEQUAL,[zc]:s.EQUAL,[Gc]:s.GEQUAL,[Uc]:s.GREATER,[Fc]:s.NOTEQUAL};function B(P,b,j){if(j?(s.texParameteri(P,s.TEXTURE_WRAP_S,Q[b.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Q[b.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Q[b.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,it[b.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,it[b.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==$e||b.wrapT!==$e)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,S(b.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,S(b.minFilter)),b.minFilter!==Pe&&b.minFilter!==Ge&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,J[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ct=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Pe||b.minFilter!==ws&&b.minFilter!==wn||b.type===gi&&t.has("OES_texture_float_linear")===!1||o===!1&&b.type===Rn&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(s.texParameterf(P,ct.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function et(P,b){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",x));const ct=b.source;let rt=p.get(ct);rt===void 0&&(rt={},p.set(ct,rt));const lt=N(b);if(lt!==P.__cacheKey){rt[lt]===void 0&&(rt[lt]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,j=!0),rt[lt].usedTimes++;const dt=rt[P.__cacheKey];dt!==void 0&&(rt[P.__cacheKey].usedTimes--,dt.usedTimes===0&&A(b)),P.__cacheKey=lt,P.__webglTexture=rt[lt].texture}return j}function ot(P,b,j){let ct=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ct=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ct=s.TEXTURE_3D);const rt=et(P,b),lt=b.source;e.bindTexture(ct,P.__webglTexture,s.TEXTURE0+j);const dt=i.get(lt);if(lt.version!==dt.__version||rt===!0){e.activeTexture(s.TEXTURE0+j);const ut=Qt.getPrimaries(Qt.workingColorSpace),mt=b.colorSpace===ke?null:Qt.getPrimaries(b.colorSpace),gt=b.colorSpace===ke||ut===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Et=f(b)&&h(b.image)===!1;let ht=v(b.image,Et,!1,n.maxTextureSize);ht=It(b,ht);const zt=h(ht)||o,Lt=a.convert(b.format,b.colorSpace);let Rt=a.convert(b.type),wt=y(b.internalFormat,Lt,Rt,b.colorSpace,b.isVideoTexture);B(ct,b,zt);let bt;const L=b.mipmaps,ft=o&&b.isVideoTexture!==!0&&wt!==Br,Ct=dt.__version===void 0||rt===!0,St=M(b,ht,zt);if(b.isDepthTexture)wt=s.DEPTH_COMPONENT,o?b.type===gi?wt=s.DEPTH_COMPONENT32F:b.type===mi?wt=s.DEPTH_COMPONENT24:b.type===Ri?wt=s.DEPTH24_STENCIL8:wt=s.DEPTH_COMPONENT16:b.type===gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Li&&wt===s.DEPTH_COMPONENT&&b.type!==Pa&&b.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=mi,Rt=a.convert(b.type)),b.format===un&&wt===s.DEPTH_COMPONENT&&(wt=s.DEPTH_STENCIL,b.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ri,Rt=a.convert(b.type))),Ct&&(ft?e.texStorage2D(s.TEXTURE_2D,1,wt,ht.width,ht.height):e.texImage2D(s.TEXTURE_2D,0,wt,ht.width,ht.height,0,Lt,Rt,null));else if(b.isDataTexture)if(L.length>0&&zt){ft&&Ct&&e.texStorage2D(s.TEXTURE_2D,St,wt,L[0].width,L[0].height);for(let pt=0,G=L.length;pt<G;pt++)bt=L[pt],ft?e.texSubImage2D(s.TEXTURE_2D,pt,0,0,bt.width,bt.height,Lt,Rt,bt.data):e.texImage2D(s.TEXTURE_2D,pt,wt,bt.width,bt.height,0,Lt,Rt,bt.data);b.generateMipmaps=!1}else ft?(Ct&&e.texStorage2D(s.TEXTURE_2D,St,wt,ht.width,ht.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht.width,ht.height,Lt,Rt,ht.data)):e.texImage2D(s.TEXTURE_2D,0,wt,ht.width,ht.height,0,Lt,Rt,ht.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ft&&Ct&&e.texStorage3D(s.TEXTURE_2D_ARRAY,St,wt,L[0].width,L[0].height,ht.depth);for(let pt=0,G=L.length;pt<G;pt++)bt=L[pt],b.format!==Ke?Lt!==null?ft?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,0,bt.width,bt.height,ht.depth,Lt,bt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pt,wt,bt.width,bt.height,ht.depth,0,bt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?e.texSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,0,bt.width,bt.height,ht.depth,Lt,Rt,bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,pt,wt,bt.width,bt.height,ht.depth,0,Lt,Rt,bt.data)}else{ft&&Ct&&e.texStorage2D(s.TEXTURE_2D,St,wt,L[0].width,L[0].height);for(let pt=0,G=L.length;pt<G;pt++)bt=L[pt],b.format!==Ke?Lt!==null?ft?e.compressedTexSubImage2D(s.TEXTURE_2D,pt,0,0,bt.width,bt.height,Lt,bt.data):e.compressedTexImage2D(s.TEXTURE_2D,pt,wt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?e.texSubImage2D(s.TEXTURE_2D,pt,0,0,bt.width,bt.height,Lt,Rt,bt.data):e.texImage2D(s.TEXTURE_2D,pt,wt,bt.width,bt.height,0,Lt,Rt,bt.data)}else if(b.isDataArrayTexture)ft?(Ct&&e.texStorage3D(s.TEXTURE_2D_ARRAY,St,wt,ht.width,ht.height,ht.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Lt,Rt,ht.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,wt,ht.width,ht.height,ht.depth,0,Lt,Rt,ht.data);else if(b.isData3DTexture)ft?(Ct&&e.texStorage3D(s.TEXTURE_3D,St,wt,ht.width,ht.height,ht.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Lt,Rt,ht.data)):e.texImage3D(s.TEXTURE_3D,0,wt,ht.width,ht.height,ht.depth,0,Lt,Rt,ht.data);else if(b.isFramebufferTexture){if(Ct)if(ft)e.texStorage2D(s.TEXTURE_2D,St,wt,ht.width,ht.height);else{let pt=ht.width,G=ht.height;for(let yt=0;yt<St;yt++)e.texImage2D(s.TEXTURE_2D,yt,wt,pt,G,0,Lt,Rt,null),pt>>=1,G>>=1}}else if(L.length>0&&zt){ft&&Ct&&e.texStorage2D(s.TEXTURE_2D,St,wt,L[0].width,L[0].height);for(let pt=0,G=L.length;pt<G;pt++)bt=L[pt],ft?e.texSubImage2D(s.TEXTURE_2D,pt,0,0,Lt,Rt,bt):e.texImage2D(s.TEXTURE_2D,pt,wt,Lt,Rt,bt);b.generateMipmaps=!1}else ft?(Ct&&e.texStorage2D(s.TEXTURE_2D,St,wt,ht.width,ht.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Lt,Rt,ht)):e.texImage2D(s.TEXTURE_2D,0,wt,Lt,Rt,ht);T(b,zt)&&_(ct),dt.__version=lt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Mt(P,b,j){if(b.image.length!==6)return;const ct=et(P,b),rt=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+j);const lt=i.get(rt);if(rt.version!==lt.__version||ct===!0){e.activeTexture(s.TEXTURE0+j);const dt=Qt.getPrimaries(Qt.workingColorSpace),ut=b.colorSpace===ke?null:Qt.getPrimaries(b.colorSpace),mt=b.colorSpace===ke||dt===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const gt=b.isCompressedTexture||b.image[0].isCompressedTexture,Et=b.image[0]&&b.image[0].isDataTexture,ht=[];for(let pt=0;pt<6;pt++)!gt&&!Et?ht[pt]=v(b.image[pt],!1,!0,n.maxCubemapSize):ht[pt]=Et?b.image[pt].image:b.image[pt],ht[pt]=It(b,ht[pt]);const zt=ht[0],Lt=h(zt)||o,Rt=a.convert(b.format,b.colorSpace),wt=a.convert(b.type),bt=y(b.internalFormat,Rt,wt,b.colorSpace),L=o&&b.isVideoTexture!==!0,ft=lt.__version===void 0||ct===!0;let Ct=M(b,zt,Lt);B(s.TEXTURE_CUBE_MAP,b,Lt);let St;if(gt){L&&ft&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,bt,zt.width,zt.height);for(let pt=0;pt<6;pt++){St=ht[pt].mipmaps;for(let G=0;G<St.length;G++){const yt=St[G];b.format!==Ke?Rt!==null?L?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,G,0,0,yt.width,yt.height,Rt,yt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,G,bt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,G,0,0,yt.width,yt.height,Rt,wt,yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,G,bt,yt.width,yt.height,0,Rt,wt,yt.data)}}}else{St=b.mipmaps,L&&ft&&(St.length>0&&Ct++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,bt,ht[0].width,ht[0].height));for(let pt=0;pt<6;pt++)if(Et){L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,ht[pt].width,ht[pt].height,Rt,wt,ht[pt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,bt,ht[pt].width,ht[pt].height,0,Rt,wt,ht[pt].data);for(let G=0;G<St.length;G++){const Pt=St[G].image[pt].image;L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,G+1,0,0,Pt.width,Pt.height,Rt,wt,Pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,G+1,bt,Pt.width,Pt.height,0,Rt,wt,Pt.data)}}else{L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Rt,wt,ht[pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,bt,Rt,wt,ht[pt]);for(let G=0;G<St.length;G++){const yt=St[G];L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,G+1,0,0,Rt,wt,yt.image[pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,G+1,bt,Rt,wt,yt.image[pt])}}}T(b,Lt)&&_(s.TEXTURE_CUBE_MAP),lt.__version=rt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function w(P,b,j,ct,rt,lt){const dt=a.convert(j.format,j.colorSpace),ut=a.convert(j.type),mt=y(j.internalFormat,dt,ut,j.colorSpace);if(!i.get(b).__hasExternalTextures){const Et=Math.max(1,b.width>>lt),ht=Math.max(1,b.height>>lt);rt===s.TEXTURE_3D||rt===s.TEXTURE_2D_ARRAY?e.texImage3D(rt,lt,mt,Et,ht,b.depth,0,dt,ut,null):e.texImage2D(rt,lt,mt,Et,ht,0,dt,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),Tt(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,rt,i.get(j).__webglTexture,0,xt(b)):(rt===s.TEXTURE_2D||rt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ct,rt,i.get(j).__webglTexture,lt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function D(P,b,j){if(s.bindRenderbuffer(s.RENDERBUFFER,P),b.depthBuffer&&!b.stencilBuffer){let ct=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(j||Tt(b)){const rt=b.depthTexture;rt&&rt.isDepthTexture&&(rt.type===gi?ct=s.DEPTH_COMPONENT32F:rt.type===mi&&(ct=s.DEPTH_COMPONENT24));const lt=xt(b);Tt(b)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,ct,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,ct,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,ct,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(b.depthBuffer&&b.stencilBuffer){const ct=xt(b);j&&Tt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,s.DEPTH24_STENCIL8,b.width,b.height):Tt(b)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const ct=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let rt=0;rt<ct.length;rt++){const lt=ct[rt],dt=a.convert(lt.format,lt.colorSpace),ut=a.convert(lt.type),mt=y(lt.internalFormat,dt,ut,lt.colorSpace),gt=xt(b);j&&Tt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,mt,b.width,b.height):Tt(b)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt,mt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,mt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function $(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k(b.depthTexture,0);const ct=i.get(b.depthTexture).__webglTexture,rt=xt(b);if(b.depthTexture.format===Li)Tt(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ct,0,rt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ct,0);else if(b.depthTexture.format===un)Tt(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ct,0,rt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function V(P){const b=i.get(P),j=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");$(b.__webglFramebuffer,P)}else if(j){b.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ct]),b.__webglDepthbuffer[ct]=s.createRenderbuffer(),D(b.__webglDepthbuffer[ct],P,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),D(b.__webglDepthbuffer,P,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Y(P,b,j){const ct=i.get(P);b!==void 0&&w(ct.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&V(P)}function I(P){const b=P.texture,j=i.get(P),ct=i.get(b);P.addEventListener("dispose",z),P.isWebGLMultipleRenderTargets!==!0&&(ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture()),ct.__version=b.version,r.memory.textures++);const rt=P.isWebGLCubeRenderTarget===!0,lt=P.isWebGLMultipleRenderTargets===!0,dt=h(P)||o;if(rt){j.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(o&&b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[ut]=[];for(let mt=0;mt<b.mipmaps.length;mt++)j.__webglFramebuffer[ut][mt]=s.createFramebuffer()}else j.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let ut=0;ut<b.mipmaps.length;ut++)j.__webglFramebuffer[ut]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(lt)if(n.drawBuffers){const ut=P.texture;for(let mt=0,gt=ut.length;mt<gt;mt++){const Et=i.get(ut[mt]);Et.__webglTexture===void 0&&(Et.__webglTexture=s.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&Tt(P)===!1){const ut=lt?b:[b];j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let mt=0;mt<ut.length;mt++){const gt=ut[mt];j.__webglColorRenderbuffer[mt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[mt]);const Et=a.convert(gt.format,gt.colorSpace),ht=a.convert(gt.type),zt=y(gt.internalFormat,Et,ht,gt.colorSpace,P.isXRRenderTarget===!0),Lt=xt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,zt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,j.__webglColorRenderbuffer[mt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),D(j.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(rt){e.bindTexture(s.TEXTURE_CUBE_MAP,ct.__webglTexture),B(s.TEXTURE_CUBE_MAP,b,dt);for(let ut=0;ut<6;ut++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let mt=0;mt<b.mipmaps.length;mt++)w(j.__webglFramebuffer[ut][mt],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,mt);else w(j.__webglFramebuffer[ut],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);T(b,dt)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){const ut=P.texture;for(let mt=0,gt=ut.length;mt<gt;mt++){const Et=ut[mt],ht=i.get(Et);e.bindTexture(s.TEXTURE_2D,ht.__webglTexture),B(s.TEXTURE_2D,Et,dt),w(j.__webglFramebuffer,P,Et,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,0),T(Et,dt)&&_(s.TEXTURE_2D)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?ut=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,ct.__webglTexture),B(ut,b,dt),o&&b.mipmaps&&b.mipmaps.length>0)for(let mt=0;mt<b.mipmaps.length;mt++)w(j.__webglFramebuffer[mt],P,b,s.COLOR_ATTACHMENT0,ut,mt);else w(j.__webglFramebuffer,P,b,s.COLOR_ATTACHMENT0,ut,0);T(b,dt)&&_(ut),e.unbindTexture()}P.depthBuffer&&V(P)}function _t(P){const b=h(P)||o,j=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ct=0,rt=j.length;ct<rt;ct++){const lt=j[ct];if(T(lt,b)){const dt=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ut=i.get(lt).__webglTexture;e.bindTexture(dt,ut),_(dt),e.unbindTexture()}}}function vt(P){if(o&&P.samples>0&&Tt(P)===!1){const b=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],j=P.width,ct=P.height;let rt=s.COLOR_BUFFER_BIT;const lt=[],dt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=i.get(P),mt=P.isWebGLMultipleRenderTargets===!0;if(mt)for(let gt=0;gt<b.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let gt=0;gt<b.length;gt++){lt.push(s.COLOR_ATTACHMENT0+gt),P.depthBuffer&&lt.push(dt);const Et=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(Et===!1&&(P.depthBuffer&&(rt|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(rt|=s.STENCIL_BUFFER_BIT)),mt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ut.__webglColorRenderbuffer[gt]),Et===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[dt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[dt])),mt){const ht=i.get(b[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ht,0)}s.blitFramebuffer(0,0,j,ct,0,0,j,ct,rt,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),mt)for(let gt=0;gt<b.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,ut.__webglColorRenderbuffer[gt]);const Et=i.get(b[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,Et,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function xt(P){return Math.min(n.maxSamples,P.samples)}function Tt(P){const b=i.get(P);return o&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Nt(P){const b=r.render.frame;d.get(P)!==b&&(d.set(P,b),P.update())}function It(P,b){const j=P.colorSpace,ct=P.format,rt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===_a||j!==li&&j!==ke&&(Qt.getTransfer(j)===ie?o===!1?t.has("EXT_sRGB")===!0&&ct===Ke?(P.format=_a,P.minFilter=Ge,P.generateMipmaps=!1):b=Yr.sRGBToLinear(b):(ct!==Ke||rt!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),b}this.allocateTextureUnit=R,this.resetTextureUnits=K,this.setTexture2D=k,this.setTexture2DArray=W,this.setTexture3D=H,this.setTextureCube=q,this.rebindTextures=Y,this.setupRenderTarget=I,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=V,this.setupFrameBufferTexture=w,this.useMultisampledRTT=Tt}function Vp(s,t,e){const i=e.isWebGL2;function n(a,r=ke){let o;const c=Qt.getTransfer(r);if(a===yi)return s.UNSIGNED_BYTE;if(a===Nr)return s.UNSIGNED_SHORT_4_4_4_4;if(a===zr)return s.UNSIGNED_SHORT_5_5_5_1;if(a===xc)return s.BYTE;if(a===Sc)return s.SHORT;if(a===Pa)return s.UNSIGNED_SHORT;if(a===Or)return s.INT;if(a===mi)return s.UNSIGNED_INT;if(a===gi)return s.FLOAT;if(a===Rn)return i?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===bc)return s.ALPHA;if(a===Ke)return s.RGBA;if(a===Ac)return s.LUMINANCE;if(a===Pc)return s.LUMINANCE_ALPHA;if(a===Li)return s.DEPTH_COMPONENT;if(a===un)return s.DEPTH_STENCIL;if(a===_a)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===Cc)return s.RED;if(a===Ur)return s.RED_INTEGER;if(a===wc)return s.RG;if(a===Fr)return s.RG_INTEGER;if(a===Gr)return s.RGBA_INTEGER;if(a===Rs||a===Ls||a===Is||a===Ds)if(c===ie)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Rs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ls)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Is)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ds)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Rs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ls)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Is)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ds)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===eo||a===io||a===no||a===so)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===eo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===io)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===no)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===so)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Br)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===ao||a===oo)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(a===ao)return c===ie?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===oo)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===ro||a===lo||a===co||a===ho||a===uo||a===fo||a===po||a===mo||a===go||a===vo||a===_o||a===yo||a===To||a===Mo)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(a===ro)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===lo)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===co)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ho)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===uo)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===fo)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===po)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===mo)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===go)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===vo)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===_o)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===yo)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===To)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Mo)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Os||a===Eo||a===xo)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(a===Os)return c===ie?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Eo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===xo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Rc||a===So||a===bo||a===Ao)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(a===Os)return o.COMPRESSED_RED_RGTC1_EXT;if(a===So)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===bo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Ao)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ri?i?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:n}}class Wp extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class En extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yp={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const v of t.hand.values()){const h=e.getJointPose(v,i),f=this._getHandJoint(l,v);h!==null&&(f.matrix.fromArray(h.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=h.radius),f.visible=h!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=d.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&p>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yp)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new En;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Xp extends Ui{constructor(t,e){super();const i=this;let n=null,a=1,r=null,o="local-floor",c=1,l=null,d=null,u=null,p=null,m=null,g=null;const v=e.getContextAttributes();let h=null,f=null;const T=[],_=[],y=new kt;let M=null;const S=new Be;S.layers.enable(1),S.viewport=new _e;const x=new Be;x.layers.enable(2),x.viewport=new _e;const z=[S,x],E=new Wp;E.layers.enable(1),E.layers.enable(2);let A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let et=T[B];return et===void 0&&(et=new sa,T[B]=et),et.getTargetRaySpace()},this.getControllerGrip=function(B){let et=T[B];return et===void 0&&(et=new sa,T[B]=et),et.getGripSpace()},this.getHand=function(B){let et=T[B];return et===void 0&&(et=new sa,T[B]=et),et.getHandSpace()};function U(B){const et=_.indexOf(B.inputSource);if(et===-1)return;const ot=T[et];ot!==void 0&&(ot.update(B.inputSource,B.frame,l||r),ot.dispatchEvent({type:B.type,data:B.inputSource}))}function K(){n.removeEventListener("select",U),n.removeEventListener("selectstart",U),n.removeEventListener("selectend",U),n.removeEventListener("squeeze",U),n.removeEventListener("squeezestart",U),n.removeEventListener("squeezeend",U),n.removeEventListener("end",K),n.removeEventListener("inputsourceschange",R);for(let B=0;B<T.length;B++){const et=_[B];et!==null&&(_[B]=null,T[B].disconnect(et))}A=null,F=null,t.setRenderTarget(h),m=null,p=null,u=null,n=null,f=null,J.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(B){if(n=B,n!==null){if(h=t.getRenderTarget(),n.addEventListener("select",U),n.addEventListener("selectstart",U),n.addEventListener("selectend",U),n.addEventListener("squeeze",U),n.addEventListener("squeezestart",U),n.addEventListener("squeezeend",U),n.addEventListener("end",K),n.addEventListener("inputsourceschange",R),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(y),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const et={antialias:n.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(n,e,et),n.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Oi(m.framebufferWidth,m.framebufferHeight,{format:Ke,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let et=null,ot=null,Mt=null;v.depth&&(Mt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=v.stencil?un:Li,ot=v.stencil?Ri:mi);const w={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:a};u=new XRWebGLBinding(n,e),p=u.createProjectionLayer(w),n.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),f=new Oi(p.textureWidth,p.textureHeight,{format:Ke,type:yi,depthTexture:new il(p.textureWidth,p.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const D=t.properties.get(f);D.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await n.requestReferenceSpace(o),J.setContext(n),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function R(B){for(let et=0;et<B.removed.length;et++){const ot=B.removed[et],Mt=_.indexOf(ot);Mt>=0&&(_[Mt]=null,T[Mt].disconnect(ot))}for(let et=0;et<B.added.length;et++){const ot=B.added[et];let Mt=_.indexOf(ot);if(Mt===-1){for(let D=0;D<T.length;D++)if(D>=_.length){_.push(ot),Mt=D;break}else if(_[D]===null){_[D]=ot,Mt=D;break}if(Mt===-1)break}const w=T[Mt];w&&w.connect(ot)}}const N=new Z,k=new Z;function W(B,et,ot){N.setFromMatrixPosition(et.matrixWorld),k.setFromMatrixPosition(ot.matrixWorld);const Mt=N.distanceTo(k),w=et.projectionMatrix.elements,D=ot.projectionMatrix.elements,$=w[14]/(w[10]-1),V=w[14]/(w[10]+1),Y=(w[9]+1)/w[5],I=(w[9]-1)/w[5],_t=(w[8]-1)/w[0],vt=(D[8]+1)/D[0],xt=$*_t,Tt=$*vt,Nt=Mt/(-_t+vt),It=Nt*-_t;et.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(It),B.translateZ(Nt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const P=$+Nt,b=V+Nt,j=xt-It,ct=Tt+(Mt-It),rt=Y*V/b*P,lt=I*V/b*P;B.projectionMatrix.makePerspective(j,ct,rt,lt,P,b),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function H(B,et){et===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(et.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(n===null)return;E.near=x.near=S.near=B.near,E.far=x.far=S.far=B.far,(A!==E.near||F!==E.far)&&(n.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,F=E.far);const et=B.parent,ot=E.cameras;H(E,et);for(let Mt=0;Mt<ot.length;Mt++)H(ot[Mt],et);ot.length===2?W(E,S,x):E.projectionMatrix.copy(S.projectionMatrix),q(B,E,et)};function q(B,et,ot){ot===null?B.matrix.copy(et.matrixWorld):(B.matrix.copy(ot.matrixWorld),B.matrix.invert(),B.matrix.multiply(et.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(et.projectionMatrix),B.projectionMatrixInverse.copy(et.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ya*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(B){c=B,p!==null&&(p.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)};let Q=null;function it(B,et){if(d=et.getViewerPose(l||r),g=et,d!==null){const ot=d.views;m!==null&&(t.setRenderTargetFramebuffer(f,m.framebuffer),t.setRenderTarget(f));let Mt=!1;ot.length!==E.cameras.length&&(E.cameras.length=0,Mt=!0);for(let w=0;w<ot.length;w++){const D=ot[w];let $=null;if(m!==null)$=m.getViewport(D);else{const Y=u.getViewSubImage(p,D);$=Y.viewport,w===0&&(t.setRenderTargetTextures(f,Y.colorTexture,p.ignoreDepthValues?void 0:Y.depthStencilTexture),t.setRenderTarget(f))}let V=z[w];V===void 0&&(V=new Be,V.layers.enable(w),V.viewport=new _e,z[w]=V),V.matrix.fromArray(D.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(D.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set($.x,$.y,$.width,$.height),w===0&&(E.matrix.copy(V.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Mt===!0&&E.cameras.push(V)}}for(let ot=0;ot<T.length;ot++){const Mt=_[ot],w=T[ot];Mt!==null&&w!==void 0&&w.update(Mt,et,l||r)}Q&&Q(B,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}const J=new tl;J.setAnimationLoop(it),this.setAnimationLoop=function(B){Q=B},this.dispose=function(){}}}function $p(s,t){function e(h,f){h.matrixAutoUpdate===!0&&h.updateMatrix(),f.value.copy(h.matrix)}function i(h,f){f.color.getRGB(h.fogColor.value,Zr(s)),f.isFog?(h.fogNear.value=f.near,h.fogFar.value=f.far):f.isFogExp2&&(h.fogDensity.value=f.density)}function n(h,f,T,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(h,f):f.isMeshToonMaterial?(a(h,f),u(h,f)):f.isMeshPhongMaterial?(a(h,f),d(h,f)):f.isMeshStandardMaterial?(a(h,f),p(h,f),f.isMeshPhysicalMaterial&&m(h,f,y)):f.isMeshMatcapMaterial?(a(h,f),g(h,f)):f.isMeshDepthMaterial?a(h,f):f.isMeshDistanceMaterial?(a(h,f),v(h,f)):f.isMeshNormalMaterial?a(h,f):f.isLineBasicMaterial?(r(h,f),f.isLineDashedMaterial&&o(h,f)):f.isPointsMaterial?c(h,f,T,_):f.isSpriteMaterial?l(h,f):f.isShadowMaterial?(h.color.value.copy(f.color),h.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(h,f){h.opacity.value=f.opacity,f.color&&h.diffuse.value.copy(f.color),f.emissive&&h.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(h.map.value=f.map,e(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,e(f.alphaMap,h.alphaMapTransform)),f.bumpMap&&(h.bumpMap.value=f.bumpMap,e(f.bumpMap,h.bumpMapTransform),h.bumpScale.value=f.bumpScale,f.side===Le&&(h.bumpScale.value*=-1)),f.normalMap&&(h.normalMap.value=f.normalMap,e(f.normalMap,h.normalMapTransform),h.normalScale.value.copy(f.normalScale),f.side===Le&&h.normalScale.value.negate()),f.displacementMap&&(h.displacementMap.value=f.displacementMap,e(f.displacementMap,h.displacementMapTransform),h.displacementScale.value=f.displacementScale,h.displacementBias.value=f.displacementBias),f.emissiveMap&&(h.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,h.emissiveMapTransform)),f.specularMap&&(h.specularMap.value=f.specularMap,e(f.specularMap,h.specularMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest);const T=t.get(f).envMap;if(T&&(h.envMap.value=T,h.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=f.reflectivity,h.ior.value=f.ior,h.refractionRatio.value=f.refractionRatio),f.lightMap){h.lightMap.value=f.lightMap;const _=s._useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=f.lightMapIntensity*_,e(f.lightMap,h.lightMapTransform)}f.aoMap&&(h.aoMap.value=f.aoMap,h.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,h.aoMapTransform))}function r(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,f.map&&(h.map.value=f.map,e(f.map,h.mapTransform))}function o(h,f){h.dashSize.value=f.dashSize,h.totalSize.value=f.dashSize+f.gapSize,h.scale.value=f.scale}function c(h,f,T,_){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.size.value=f.size*T,h.scale.value=_*.5,f.map&&(h.map.value=f.map,e(f.map,h.uvTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,e(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function l(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.rotation.value=f.rotation,f.map&&(h.map.value=f.map,e(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,e(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function d(h,f){h.specular.value.copy(f.specular),h.shininess.value=Math.max(f.shininess,1e-4)}function u(h,f){f.gradientMap&&(h.gradientMap.value=f.gradientMap)}function p(h,f){h.metalness.value=f.metalness,f.metalnessMap&&(h.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,h.metalnessMapTransform)),h.roughness.value=f.roughness,f.roughnessMap&&(h.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,h.roughnessMapTransform)),t.get(f).envMap&&(h.envMapIntensity.value=f.envMapIntensity)}function m(h,f,T){h.ior.value=f.ior,f.sheen>0&&(h.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),h.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(h.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,h.sheenColorMapTransform)),f.sheenRoughnessMap&&(h.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,h.sheenRoughnessMapTransform))),f.clearcoat>0&&(h.clearcoat.value=f.clearcoat,h.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(h.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,h.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(h.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Le&&h.clearcoatNormalScale.value.negate())),f.iridescence>0&&(h.iridescence.value=f.iridescence,h.iridescenceIOR.value=f.iridescenceIOR,h.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(h.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,h.iridescenceMapTransform)),f.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),f.transmission>0&&(h.transmission.value=f.transmission,h.transmissionSamplerMap.value=T.texture,h.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(h.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,h.transmissionMapTransform)),h.thickness.value=f.thickness,f.thicknessMap&&(h.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=f.attenuationDistance,h.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(h.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(h.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=f.specularIntensity,h.specularColor.value.copy(f.specularColor),f.specularColorMap&&(h.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,h.specularColorMapTransform)),f.specularIntensityMap&&(h.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,f){f.matcap&&(h.matcap.value=f.matcap)}function v(h,f){const T=t.get(f).light;h.referencePosition.value.setFromMatrixPosition(T.matrixWorld),h.nearDistance.value=T.shadow.camera.near,h.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Kp(s,t,e,i){let n={},a={},r=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(T,_){const y=_.program;i.uniformBlockBinding(T,y)}function l(T,_){let y=n[T.id];y===void 0&&(g(T),y=d(T),n[T.id]=y,T.addEventListener("dispose",h));const M=_.program;i.updateUBOMapping(T,M);const S=t.render.frame;a[T.id]!==S&&(p(T),a[T.id]=S)}function d(T){const _=u();T.__bindingPointIndex=_;const y=s.createBuffer(),M=T.__size,S=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,M,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function u(){for(let T=0;T<o;T++)if(r.indexOf(T)===-1)return r.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){const _=n[T.id],y=T.uniforms,M=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let S=0,x=y.length;S<x;S++){const z=Array.isArray(y[S])?y[S]:[y[S]];for(let E=0,A=z.length;E<A;E++){const F=z[E];if(m(F,S,E,M)===!0){const U=F.__offset,K=Array.isArray(F.value)?F.value:[F.value];let R=0;for(let N=0;N<K.length;N++){const k=K[N],W=v(k);typeof k=="number"||typeof k=="boolean"?(F.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,U+R,F.__data)):k.isMatrix3?(F.__data[0]=k.elements[0],F.__data[1]=k.elements[1],F.__data[2]=k.elements[2],F.__data[3]=0,F.__data[4]=k.elements[3],F.__data[5]=k.elements[4],F.__data[6]=k.elements[5],F.__data[7]=0,F.__data[8]=k.elements[6],F.__data[9]=k.elements[7],F.__data[10]=k.elements[8],F.__data[11]=0):(k.toArray(F.__data,R),R+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(T,_,y,M){const S=T.value,x=_+"_"+y;if(M[x]===void 0)return typeof S=="number"||typeof S=="boolean"?M[x]=S:M[x]=S.clone(),!0;{const z=M[x];if(typeof S=="number"||typeof S=="boolean"){if(z!==S)return M[x]=S,!0}else if(z.equals(S)===!1)return z.copy(S),!0}return!1}function g(T){const _=T.uniforms;let y=0;const M=16;for(let x=0,z=_.length;x<z;x++){const E=Array.isArray(_[x])?_[x]:[_[x]];for(let A=0,F=E.length;A<F;A++){const U=E[A],K=Array.isArray(U.value)?U.value:[U.value];for(let R=0,N=K.length;R<N;R++){const k=K[R],W=v(k),H=y%M;H!==0&&M-H<W.boundary&&(y+=M-H),U.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=W.storage}}}const S=y%M;return S>0&&(y+=M-S),T.__size=y,T.__cache={},this}function v(T){const _={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(_.boundary=4,_.storage=4):T.isVector2?(_.boundary=8,_.storage=8):T.isVector3||T.isColor?(_.boundary=16,_.storage=12):T.isVector4?(_.boundary=16,_.storage=16):T.isMatrix3?(_.boundary=48,_.storage=48):T.isMatrix4?(_.boundary=64,_.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),_}function h(T){const _=T.target;_.removeEventListener("dispose",h);const y=r.indexOf(_.__bindingPointIndex);r.splice(y,1),s.deleteBuffer(n[_.id]),delete n[_.id],delete a[_.id]}function f(){for(const T in n)s.deleteBuffer(n[T]);r=[],n={},a={}}return{bind:c,update:l,dispose:f}}class ll{constructor(t={}){const{canvas:e=Vc(),context:i=null,depth:n=!0,stencil:a=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=r;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,h=null;const f=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this._useLegacyLights=!1,this.toneMapping=_i,this.toneMappingExposure=1;const _=this;let y=!1,M=0,S=0,x=null,z=-1,E=null;const A=new _e,F=new _e;let U=null;const K=new Jt(0);let R=0,N=e.width,k=e.height,W=1,H=null,q=null;const Q=new _e(0,0,N,k),it=new _e(0,0,N,k);let J=!1;const B=new Ia;let et=!1,ot=!1,Mt=null;const w=new fe,D=new kt,$=new Z,V={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Y(){return x===null?W:1}let I=i;function _t(C,tt){for(let st=0;st<C.length;st++){const at=C[st],nt=e.getContext(at,tt);if(nt!==null)return nt}return null}try{const C={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ba}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",G,!1),e.addEventListener("webglcontextcreationerror",yt,!1),I===null){const tt=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&tt.shift(),I=_t(tt,C),I===null)throw _t(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let vt,xt,Tt,Nt,It,P,b,j,ct,rt,lt,dt,ut,mt,gt,Et,ht,zt,Lt,Rt,wt,bt,L,ft;function Ct(){vt=new sf(I),xt=new Zu(I,vt,t),vt.init(xt),bt=new Vp(I,vt,xt),Tt=new kp(I,vt,xt),Nt=new rf(I),It=new Pp,P=new Hp(I,vt,Tt,It,xt,bt,Nt),b=new Qu(_),j=new nf(_),ct=new ph(I,xt),L=new qu(I,vt,ct,xt),rt=new af(I,ct,Nt,L),lt=new df(I,rt,ct,Nt),Lt=new hf(I,xt,P),Et=new Ju(It),dt=new Ap(_,b,j,vt,xt,L,Et),ut=new $p(_,It),mt=new wp,gt=new Np(vt,xt),zt=new Ku(_,b,j,Tt,lt,p,c),ht=new Bp(_,lt,xt),ft=new Kp(I,Nt,xt,Tt),Rt=new ju(I,vt,Nt,xt),wt=new of(I,vt,Nt,xt),Nt.programs=dt.programs,_.capabilities=xt,_.extensions=vt,_.properties=It,_.renderLists=mt,_.shadowMap=ht,_.state=Tt,_.info=Nt}Ct();const St=new Xp(_,I);this.xr=St,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=vt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=vt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(N,k,!1))},this.getSize=function(C){return C.set(N,k)},this.setSize=function(C,tt,st=!0){if(St.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,k=tt,e.width=Math.floor(C*W),e.height=Math.floor(tt*W),st===!0&&(e.style.width=C+"px",e.style.height=tt+"px"),this.setViewport(0,0,C,tt)},this.getDrawingBufferSize=function(C){return C.set(N*W,k*W).floor()},this.setDrawingBufferSize=function(C,tt,st){N=C,k=tt,W=st,e.width=Math.floor(C*st),e.height=Math.floor(tt*st),this.setViewport(0,0,C,tt)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(Q)},this.setViewport=function(C,tt,st,at){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,tt,st,at),Tt.viewport(A.copy(Q).multiplyScalar(W).floor())},this.getScissor=function(C){return C.copy(it)},this.setScissor=function(C,tt,st,at){C.isVector4?it.set(C.x,C.y,C.z,C.w):it.set(C,tt,st,at),Tt.scissor(F.copy(it).multiplyScalar(W).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(C){Tt.setScissorTest(J=C)},this.setOpaqueSort=function(C){H=C},this.setTransparentSort=function(C){q=C},this.getClearColor=function(C){return C.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(C=!0,tt=!0,st=!0){let at=0;if(C){let nt=!1;if(x!==null){const Dt=x.texture.format;nt=Dt===Gr||Dt===Fr||Dt===Ur}if(nt){const Dt=x.texture.type,Ft=Dt===yi||Dt===mi||Dt===Pa||Dt===Ri||Dt===Nr||Dt===zr,Bt=zt.getClearColor(),Ht=zt.getClearAlpha(),Xt=Bt.r,Vt=Bt.g,Wt=Bt.b;Ft?(m[0]=Xt,m[1]=Vt,m[2]=Wt,m[3]=Ht,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=Xt,g[1]=Vt,g[2]=Wt,g[3]=Ht,I.clearBufferiv(I.COLOR,0,g))}else at|=I.COLOR_BUFFER_BIT}tt&&(at|=I.DEPTH_BUFFER_BIT),st&&(at|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",G,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),mt.dispose(),gt.dispose(),It.dispose(),b.dispose(),j.dispose(),lt.dispose(),L.dispose(),ft.dispose(),dt.dispose(),St.dispose(),St.removeEventListener("sessionstart",re),St.removeEventListener("sessionend",Zt),Mt&&(Mt.dispose(),Mt=null),he.stop()};function pt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=Nt.autoReset,tt=ht.enabled,st=ht.autoUpdate,at=ht.needsUpdate,nt=ht.type;Ct(),Nt.autoReset=C,ht.enabled=tt,ht.autoUpdate=st,ht.needsUpdate=at,ht.type=nt}function yt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Pt(C){const tt=C.target;tt.removeEventListener("dispose",Pt),Ut(tt)}function Ut(C){Gt(C),It.remove(C)}function Gt(C){const tt=It.get(C).programs;tt!==void 0&&(tt.forEach(function(st){dt.releaseProgram(st)}),C.isShaderMaterial&&dt.releaseShaderCache(C))}this.renderBufferDirect=function(C,tt,st,at,nt,Dt){tt===null&&(tt=V);const Ft=nt.isMesh&&nt.matrixWorld.determinant()<0,Bt=gl(C,tt,st,at,nt);Tt.setMaterial(at,Ft);let Ht=st.index,Xt=1;if(at.wireframe===!0){if(Ht=rt.getWireframeAttribute(st),Ht===void 0)return;Xt=2}const Vt=st.drawRange,Wt=st.attributes.position;let le=Vt.start*Xt,Ie=(Vt.start+Vt.count)*Xt;Dt!==null&&(le=Math.max(le,Dt.start*Xt),Ie=Math.min(Ie,(Dt.start+Dt.count)*Xt)),Ht!==null?(le=Math.max(le,0),Ie=Math.min(Ie,Ht.count)):Wt!=null&&(le=Math.max(le,0),Ie=Math.min(Ie,Wt.count));const ge=Ie-le;if(ge<0||ge===1/0)return;L.setup(nt,at,Bt,st,Ht);let Qe,ae=Rt;if(Ht!==null&&(Qe=ct.get(Ht),ae=wt,ae.setIndex(Qe)),nt.isMesh)at.wireframe===!0?(Tt.setLineWidth(at.wireframeLinewidth*Y()),ae.setMode(I.LINES)):ae.setMode(I.TRIANGLES);else if(nt.isLine){let qt=at.linewidth;qt===void 0&&(qt=1),Tt.setLineWidth(qt*Y()),nt.isLineSegments?ae.setMode(I.LINES):nt.isLineLoop?ae.setMode(I.LINE_LOOP):ae.setMode(I.LINE_STRIP)}else nt.isPoints?ae.setMode(I.POINTS):nt.isSprite&&ae.setMode(I.TRIANGLES);if(nt.isBatchedMesh)ae.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else if(nt.isInstancedMesh)ae.renderInstances(le,ge,nt.count);else if(st.isInstancedBufferGeometry){const qt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ss=Math.min(st.instanceCount,qt);ae.renderInstances(le,ge,Ss)}else ae.render(le,ge)};function $t(C,tt,st){C.transparent===!0&&C.side===oi&&C.forceSinglePass===!1?(C.side=Le,C.needsUpdate=!0,Nn(C,tt,st),C.side=Ti,C.needsUpdate=!0,Nn(C,tt,st),C.side=oi):Nn(C,tt,st)}this.compile=function(C,tt,st=null){st===null&&(st=C),h=gt.get(st),h.init(),T.push(h),st.traverseVisible(function(nt){nt.isLight&&nt.layers.test(tt.layers)&&(h.pushLight(nt),nt.castShadow&&h.pushShadow(nt))}),C!==st&&C.traverseVisible(function(nt){nt.isLight&&nt.layers.test(tt.layers)&&(h.pushLight(nt),nt.castShadow&&h.pushShadow(nt))}),h.setupLights(_._useLegacyLights);const at=new Set;return C.traverse(function(nt){const Dt=nt.material;if(Dt)if(Array.isArray(Dt))for(let Ft=0;Ft<Dt.length;Ft++){const Bt=Dt[Ft];$t(Bt,st,nt),at.add(Bt)}else $t(Dt,st,nt),at.add(Dt)}),T.pop(),h=null,at},this.compileAsync=function(C,tt,st=null){const at=this.compile(C,tt,st);return new Promise(nt=>{function Dt(){if(at.forEach(function(Ft){It.get(Ft).currentProgram.isReady()&&at.delete(Ft)}),at.size===0){nt(C);return}setTimeout(Dt,10)}vt.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Kt=null;function ne(C){Kt&&Kt(C)}function re(){he.stop()}function Zt(){he.start()}const he=new tl;he.setAnimationLoop(ne),typeof self<"u"&&he.setContext(self),this.setAnimationLoop=function(C){Kt=C,St.setAnimationLoop(C),C===null?he.stop():he.start()},St.addEventListener("sessionstart",re),St.addEventListener("sessionend",Zt),this.render=function(C,tt){if(tt!==void 0&&tt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(St.cameraAutoUpdate===!0&&St.updateCamera(tt),tt=St.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,tt,x),h=gt.get(C,T.length),h.init(),T.push(h),w.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),B.setFromProjectionMatrix(w),ot=this.localClippingEnabled,et=Et.init(this.clippingPlanes,ot),v=mt.get(C,f.length),v.init(),f.push(v),qe(C,tt,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(H,q),this.info.render.frame++,et===!0&&Et.beginShadows();const st=h.state.shadowsArray;if(ht.render(st,C,tt),et===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),zt.render(v,C),h.setupLights(_._useLegacyLights),tt.isArrayCamera){const at=tt.cameras;for(let nt=0,Dt=at.length;nt<Dt;nt++){const Ft=at[nt];Fa(v,C,Ft,Ft.viewport)}}else Fa(v,C,tt);x!==null&&(P.updateMultisampleRenderTarget(x),P.updateRenderTargetMipmap(x)),C.isScene===!0&&C.onAfterRender(_,C,tt),L.resetDefaultState(),z=-1,E=null,T.pop(),T.length>0?h=T[T.length-1]:h=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function qe(C,tt,st,at){if(C.visible===!1)return;if(C.layers.test(tt.layers)){if(C.isGroup)st=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(tt);else if(C.isLight)h.pushLight(C),C.castShadow&&h.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||B.intersectsSprite(C)){at&&$.setFromMatrixPosition(C.matrixWorld).applyMatrix4(w);const Ft=lt.update(C),Bt=C.material;Bt.visible&&v.push(C,Ft,Bt,st,$.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||B.intersectsObject(C))){const Ft=lt.update(C),Bt=C.material;if(at&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),$.copy(C.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),$.copy(Ft.boundingSphere.center)),$.applyMatrix4(C.matrixWorld).applyMatrix4(w)),Array.isArray(Bt)){const Ht=Ft.groups;for(let Xt=0,Vt=Ht.length;Xt<Vt;Xt++){const Wt=Ht[Xt],le=Bt[Wt.materialIndex];le&&le.visible&&v.push(C,Ft,le,st,$.z,Wt)}}else Bt.visible&&v.push(C,Ft,Bt,st,$.z,null)}}const Dt=C.children;for(let Ft=0,Bt=Dt.length;Ft<Bt;Ft++)qe(Dt[Ft],tt,st,at)}function Fa(C,tt,st,at){const nt=C.opaque,Dt=C.transmissive,Ft=C.transparent;h.setupLightsView(st),et===!0&&Et.setGlobalState(_.clippingPlanes,st),Dt.length>0&&ml(nt,Dt,tt,st),at&&Tt.viewport(A.copy(at)),nt.length>0&&On(nt,tt,st),Dt.length>0&&On(Dt,tt,st),Ft.length>0&&On(Ft,tt,st),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function ml(C,tt,st,at){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;const Dt=xt.isWebGL2;Mt===null&&(Mt=new Oi(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")?Rn:yi,minFilter:wn,samples:Dt?4:0})),_.getDrawingBufferSize(D),Dt?Mt.setSize(D.x,D.y):Mt.setSize(Ta(D.x),Ta(D.y));const Ft=_.getRenderTarget();_.setRenderTarget(Mt),_.getClearColor(K),R=_.getClearAlpha(),R<1&&_.setClearColor(16777215,.5),_.clear();const Bt=_.toneMapping;_.toneMapping=_i,On(C,st,at),P.updateMultisampleRenderTarget(Mt),P.updateRenderTargetMipmap(Mt);let Ht=!1;for(let Xt=0,Vt=tt.length;Xt<Vt;Xt++){const Wt=tt[Xt],le=Wt.object,Ie=Wt.geometry,ge=Wt.material,Qe=Wt.group;if(ge.side===oi&&le.layers.test(at.layers)){const ae=ge.side;ge.side=Le,ge.needsUpdate=!0,Ga(le,st,at,Ie,ge,Qe),ge.side=ae,ge.needsUpdate=!0,Ht=!0}}Ht===!0&&(P.updateMultisampleRenderTarget(Mt),P.updateRenderTargetMipmap(Mt)),_.setRenderTarget(Ft),_.setClearColor(K,R),_.toneMapping=Bt}function On(C,tt,st){const at=tt.isScene===!0?tt.overrideMaterial:null;for(let nt=0,Dt=C.length;nt<Dt;nt++){const Ft=C[nt],Bt=Ft.object,Ht=Ft.geometry,Xt=at===null?Ft.material:at,Vt=Ft.group;Bt.layers.test(st.layers)&&Ga(Bt,tt,st,Ht,Xt,Vt)}}function Ga(C,tt,st,at,nt,Dt){C.onBeforeRender(_,tt,st,at,nt,Dt),C.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),nt.onBeforeRender(_,tt,st,at,C,Dt),nt.transparent===!0&&nt.side===oi&&nt.forceSinglePass===!1?(nt.side=Le,nt.needsUpdate=!0,_.renderBufferDirect(st,tt,at,nt,C,Dt),nt.side=Ti,nt.needsUpdate=!0,_.renderBufferDirect(st,tt,at,nt,C,Dt),nt.side=oi):_.renderBufferDirect(st,tt,at,nt,C,Dt),C.onAfterRender(_,tt,st,at,nt,Dt)}function Nn(C,tt,st){tt.isScene!==!0&&(tt=V);const at=It.get(C),nt=h.state.lights,Dt=h.state.shadowsArray,Ft=nt.state.version,Bt=dt.getParameters(C,nt.state,Dt,tt,st),Ht=dt.getProgramCacheKey(Bt);let Xt=at.programs;at.environment=C.isMeshStandardMaterial?tt.environment:null,at.fog=tt.fog,at.envMap=(C.isMeshStandardMaterial?j:b).get(C.envMap||at.environment),Xt===void 0&&(C.addEventListener("dispose",Pt),Xt=new Map,at.programs=Xt);let Vt=Xt.get(Ht);if(Vt!==void 0){if(at.currentProgram===Vt&&at.lightsStateVersion===Ft)return ka(C,Bt),Vt}else Bt.uniforms=dt.getUniforms(C),C.onBuild(st,Bt,_),C.onBeforeCompile(Bt,_),Vt=dt.acquireProgram(Bt,Ht),Xt.set(Ht,Vt),at.uniforms=Bt.uniforms;const Wt=at.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Wt.clippingPlanes=Et.uniform),ka(C,Bt),at.needsLights=_l(C),at.lightsStateVersion=Ft,at.needsLights&&(Wt.ambientLightColor.value=nt.state.ambient,Wt.lightProbe.value=nt.state.probe,Wt.directionalLights.value=nt.state.directional,Wt.directionalLightShadows.value=nt.state.directionalShadow,Wt.spotLights.value=nt.state.spot,Wt.spotLightShadows.value=nt.state.spotShadow,Wt.rectAreaLights.value=nt.state.rectArea,Wt.ltc_1.value=nt.state.rectAreaLTC1,Wt.ltc_2.value=nt.state.rectAreaLTC2,Wt.pointLights.value=nt.state.point,Wt.pointLightShadows.value=nt.state.pointShadow,Wt.hemisphereLights.value=nt.state.hemi,Wt.directionalShadowMap.value=nt.state.directionalShadowMap,Wt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Wt.spotShadowMap.value=nt.state.spotShadowMap,Wt.spotLightMatrix.value=nt.state.spotLightMatrix,Wt.spotLightMap.value=nt.state.spotLightMap,Wt.pointShadowMap.value=nt.state.pointShadowMap,Wt.pointShadowMatrix.value=nt.state.pointShadowMatrix),at.currentProgram=Vt,at.uniformsList=null,Vt}function Ba(C){if(C.uniformsList===null){const tt=C.currentProgram.getUniforms();C.uniformsList=ls.seqWithValue(tt.seq,C.uniforms)}return C.uniformsList}function ka(C,tt){const st=It.get(C);st.outputColorSpace=tt.outputColorSpace,st.batching=tt.batching,st.instancing=tt.instancing,st.instancingColor=tt.instancingColor,st.skinning=tt.skinning,st.morphTargets=tt.morphTargets,st.morphNormals=tt.morphNormals,st.morphColors=tt.morphColors,st.morphTargetsCount=tt.morphTargetsCount,st.numClippingPlanes=tt.numClippingPlanes,st.numIntersection=tt.numClipIntersection,st.vertexAlphas=tt.vertexAlphas,st.vertexTangents=tt.vertexTangents,st.toneMapping=tt.toneMapping}function gl(C,tt,st,at,nt){tt.isScene!==!0&&(tt=V),P.resetTextureUnits();const Dt=tt.fog,Ft=at.isMeshStandardMaterial?tt.environment:null,Bt=x===null?_.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:li,Ht=(at.isMeshStandardMaterial?j:b).get(at.envMap||Ft),Xt=at.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Vt=!!st.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Wt=!!st.morphAttributes.position,le=!!st.morphAttributes.normal,Ie=!!st.morphAttributes.color;let ge=_i;at.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(ge=_.toneMapping);const Qe=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ae=Qe!==void 0?Qe.length:0,qt=It.get(at),Ss=h.state.lights;if(et===!0&&(ot===!0||C!==E)){const Ue=C===E&&at.id===z;Et.setState(at,C,Ue)}let oe=!1;at.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Ss.state.version||qt.outputColorSpace!==Bt||nt.isBatchedMesh&&qt.batching===!1||!nt.isBatchedMesh&&qt.batching===!0||nt.isInstancedMesh&&qt.instancing===!1||!nt.isInstancedMesh&&qt.instancing===!0||nt.isSkinnedMesh&&qt.skinning===!1||!nt.isSkinnedMesh&&qt.skinning===!0||nt.isInstancedMesh&&qt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&qt.instancingColor===!1&&nt.instanceColor!==null||qt.envMap!==Ht||at.fog===!0&&qt.fog!==Dt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Et.numPlanes||qt.numIntersection!==Et.numIntersection)||qt.vertexAlphas!==Xt||qt.vertexTangents!==Vt||qt.morphTargets!==Wt||qt.morphNormals!==le||qt.morphColors!==Ie||qt.toneMapping!==ge||xt.isWebGL2===!0&&qt.morphTargetsCount!==ae)&&(oe=!0):(oe=!0,qt.__version=at.version);let Mi=qt.currentProgram;oe===!0&&(Mi=Nn(at,tt,nt));let Ha=!1,gn=!1,bs=!1;const Me=Mi.getUniforms(),Ei=qt.uniforms;if(Tt.useProgram(Mi.program)&&(Ha=!0,gn=!0,bs=!0),at.id!==z&&(z=at.id,gn=!0),Ha||E!==C){Me.setValue(I,"projectionMatrix",C.projectionMatrix),Me.setValue(I,"viewMatrix",C.matrixWorldInverse);const Ue=Me.map.cameraPosition;Ue!==void 0&&Ue.setValue(I,$.setFromMatrixPosition(C.matrixWorld)),xt.logarithmicDepthBuffer&&Me.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Me.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,gn=!0,bs=!0)}if(nt.isSkinnedMesh){Me.setOptional(I,nt,"bindMatrix"),Me.setOptional(I,nt,"bindMatrixInverse");const Ue=nt.skeleton;Ue&&(xt.floatVertexTextures?(Ue.boneTexture===null&&Ue.computeBoneTexture(),Me.setValue(I,"boneTexture",Ue.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}nt.isBatchedMesh&&(Me.setOptional(I,nt,"batchingTexture"),Me.setValue(I,"batchingTexture",nt._matricesTexture,P));const As=st.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0&&xt.isWebGL2===!0)&&Lt.update(nt,st,Mi),(gn||qt.receiveShadow!==nt.receiveShadow)&&(qt.receiveShadow=nt.receiveShadow,Me.setValue(I,"receiveShadow",nt.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Ei.envMap.value=Ht,Ei.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),gn&&(Me.setValue(I,"toneMappingExposure",_.toneMappingExposure),qt.needsLights&&vl(Ei,bs),Dt&&at.fog===!0&&ut.refreshFogUniforms(Ei,Dt),ut.refreshMaterialUniforms(Ei,at,W,k,Mt),ls.upload(I,Ba(qt),Ei,P)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(ls.upload(I,Ba(qt),Ei,P),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Me.setValue(I,"center",nt.center),Me.setValue(I,"modelViewMatrix",nt.modelViewMatrix),Me.setValue(I,"normalMatrix",nt.normalMatrix),Me.setValue(I,"modelMatrix",nt.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Ue=at.uniformsGroups;for(let Ps=0,yl=Ue.length;Ps<yl;Ps++)if(xt.isWebGL2){const Va=Ue[Ps];ft.update(Va,Mi),ft.bind(Va,Mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mi}function vl(C,tt){C.ambientLightColor.needsUpdate=tt,C.lightProbe.needsUpdate=tt,C.directionalLights.needsUpdate=tt,C.directionalLightShadows.needsUpdate=tt,C.pointLights.needsUpdate=tt,C.pointLightShadows.needsUpdate=tt,C.spotLights.needsUpdate=tt,C.spotLightShadows.needsUpdate=tt,C.rectAreaLights.needsUpdate=tt,C.hemisphereLights.needsUpdate=tt}function _l(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(C,tt,st){It.get(C.texture).__webglTexture=tt,It.get(C.depthTexture).__webglTexture=st;const at=It.get(C);at.__hasExternalTextures=!0,at.__hasExternalTextures&&(at.__autoAllocateDepthBuffer=st===void 0,at.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),at.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,tt){const st=It.get(C);st.__webglFramebuffer=tt,st.__useDefaultFramebuffer=tt===void 0},this.setRenderTarget=function(C,tt=0,st=0){x=C,M=tt,S=st;let at=!0,nt=null,Dt=!1,Ft=!1;if(C){const Ht=It.get(C);Ht.__useDefaultFramebuffer!==void 0?(Tt.bindFramebuffer(I.FRAMEBUFFER,null),at=!1):Ht.__webglFramebuffer===void 0?P.setupRenderTarget(C):Ht.__hasExternalTextures&&P.rebindTextures(C,It.get(C.texture).__webglTexture,It.get(C.depthTexture).__webglTexture);const Xt=C.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ft=!0);const Vt=It.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Vt[tt])?nt=Vt[tt][st]:nt=Vt[tt],Dt=!0):xt.isWebGL2&&C.samples>0&&P.useMultisampledRTT(C)===!1?nt=It.get(C).__webglMultisampledFramebuffer:Array.isArray(Vt)?nt=Vt[st]:nt=Vt,A.copy(C.viewport),F.copy(C.scissor),U=C.scissorTest}else A.copy(Q).multiplyScalar(W).floor(),F.copy(it).multiplyScalar(W).floor(),U=J;if(Tt.bindFramebuffer(I.FRAMEBUFFER,nt)&&xt.drawBuffers&&at&&Tt.drawBuffers(C,nt),Tt.viewport(A),Tt.scissor(F),Tt.setScissorTest(U),Dt){const Ht=It.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ht.__webglTexture,st)}else if(Ft){const Ht=It.get(C.texture),Xt=tt||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ht.__webglTexture,st||0,Xt)}z=-1},this.readRenderTargetPixels=function(C,tt,st,at,nt,Dt,Ft){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=It.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(Bt=Bt[Ft]),Bt){Tt.bindFramebuffer(I.FRAMEBUFFER,Bt);try{const Ht=C.texture,Xt=Ht.format,Vt=Ht.type;if(Xt!==Ke&&bt.convert(Xt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Wt=Vt===Rn&&(vt.has("EXT_color_buffer_half_float")||xt.isWebGL2&&vt.has("EXT_color_buffer_float"));if(Vt!==yi&&bt.convert(Vt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===gi&&(xt.isWebGL2||vt.has("OES_texture_float")||vt.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=C.width-at&&st>=0&&st<=C.height-nt&&I.readPixels(tt,st,at,nt,bt.convert(Xt),bt.convert(Vt),Dt)}finally{const Ht=x!==null?It.get(x).__webglFramebuffer:null;Tt.bindFramebuffer(I.FRAMEBUFFER,Ht)}}},this.copyFramebufferToTexture=function(C,tt,st=0){const at=Math.pow(2,-st),nt=Math.floor(tt.image.width*at),Dt=Math.floor(tt.image.height*at);P.setTexture2D(tt,0),I.copyTexSubImage2D(I.TEXTURE_2D,st,0,0,C.x,C.y,nt,Dt),Tt.unbindTexture()},this.copyTextureToTexture=function(C,tt,st,at=0){const nt=tt.image.width,Dt=tt.image.height,Ft=bt.convert(st.format),Bt=bt.convert(st.type);P.setTexture2D(st,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,st.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,st.unpackAlignment),tt.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,at,C.x,C.y,nt,Dt,Ft,Bt,tt.image.data):tt.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,at,C.x,C.y,tt.mipmaps[0].width,tt.mipmaps[0].height,Ft,tt.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,at,C.x,C.y,Ft,Bt,tt.image),at===0&&st.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(C,tt,st,at,nt=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Dt=C.max.x-C.min.x+1,Ft=C.max.y-C.min.y+1,Bt=C.max.z-C.min.z+1,Ht=bt.convert(at.format),Xt=bt.convert(at.type);let Vt;if(at.isData3DTexture)P.setTexture3D(at,0),Vt=I.TEXTURE_3D;else if(at.isDataArrayTexture||at.isCompressedArrayTexture)P.setTexture2DArray(at,0),Vt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,at.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,at.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,at.unpackAlignment);const Wt=I.getParameter(I.UNPACK_ROW_LENGTH),le=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ie=I.getParameter(I.UNPACK_SKIP_PIXELS),ge=I.getParameter(I.UNPACK_SKIP_ROWS),Qe=I.getParameter(I.UNPACK_SKIP_IMAGES),ae=st.isCompressedTexture?st.mipmaps[nt]:st.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ae.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ae.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,C.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,C.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,C.min.z),st.isDataTexture||st.isData3DTexture?I.texSubImage3D(Vt,nt,tt.x,tt.y,tt.z,Dt,Ft,Bt,Ht,Xt,ae.data):st.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Vt,nt,tt.x,tt.y,tt.z,Dt,Ft,Bt,Ht,ae.data)):I.texSubImage3D(Vt,nt,tt.x,tt.y,tt.z,Dt,Ft,Bt,Ht,Xt,ae),I.pixelStorei(I.UNPACK_ROW_LENGTH,Wt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,le),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ie),I.pixelStorei(I.UNPACK_SKIP_ROWS,ge),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qe),nt===0&&at.generateMipmaps&&I.generateMipmap(Vt),Tt.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Tt.unbindTexture()},this.resetState=function(){M=0,S=0,x=null,Tt.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ca?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===Ts?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Te?Ii:kr}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ii?Te:li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class qp extends ll{}qp.prototype.isWebGL1Renderer=!0;class jp extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class gs extends Je{constructor(t=1,e=1,i=1,n=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;n=Math.floor(n),a=Math.floor(a);const d=[],u=[],p=[],m=[];let g=0;const v=[],h=i/2;let f=0;T(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new be(u,3)),this.setAttribute("normal",new be(p,3)),this.setAttribute("uv",new be(m,2));function T(){const y=new Z,M=new Z;let S=0;const x=(e-t)/i;for(let z=0;z<=a;z++){const E=[],A=z/a,F=A*(e-t)+t;for(let U=0;U<=n;U++){const K=U/n,R=K*c+o,N=Math.sin(R),k=Math.cos(R);M.x=F*N,M.y=-A*i+h,M.z=F*k,u.push(M.x,M.y,M.z),y.set(N,x,k).normalize(),p.push(y.x,y.y,y.z),m.push(K,1-A),E.push(g++)}v.push(E)}for(let z=0;z<n;z++)for(let E=0;E<a;E++){const A=v[E][z],F=v[E+1][z],U=v[E+1][z+1],K=v[E][z+1];d.push(A,F,K),d.push(F,U,K),S+=6}l.addGroup(f,S,0),f+=S}function _(y){const M=g,S=new kt,x=new Z;let z=0;const E=y===!0?t:e,A=y===!0?1:-1;for(let U=1;U<=n;U++)u.push(0,h*A,0),p.push(0,A,0),m.push(.5,.5),g++;const F=g;for(let U=0;U<=n;U++){const R=U/n*c+o,N=Math.cos(R),k=Math.sin(R);x.x=E*k,x.y=h*A,x.z=E*N,u.push(x.x,x.y,x.z),p.push(0,A,0),S.x=N*.5+.5,S.y=k*.5*A+.5,m.push(S.x,S.y),g++}for(let U=0;U<n;U++){const K=M+U,R=F+U;y===!0?d.push(R,R+1,K):d.push(R+1,R,K),z+=3}l.addGroup(f,z,y===!0?1:2),f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xs extends Je{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const a=[],r=[];o(n),l(i),d(),this.setAttribute("position",new be(a,3)),this.setAttribute("normal",new be(a.slice(),3)),this.setAttribute("uv",new be(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const _=new Z,y=new Z,M=new Z;for(let S=0;S<e.length;S+=3)m(e[S+0],_),m(e[S+1],y),m(e[S+2],M),c(_,y,M,T)}function c(T,_,y,M){const S=M+1,x=[];for(let z=0;z<=S;z++){x[z]=[];const E=T.clone().lerp(y,z/S),A=_.clone().lerp(y,z/S),F=S-z;for(let U=0;U<=F;U++)U===0&&z===S?x[z][U]=E:x[z][U]=E.clone().lerp(A,U/F)}for(let z=0;z<S;z++)for(let E=0;E<2*(S-z)-1;E++){const A=Math.floor(E/2);E%2===0?(p(x[z][A+1]),p(x[z+1][A]),p(x[z][A])):(p(x[z][A+1]),p(x[z+1][A+1]),p(x[z+1][A]))}}function l(T){const _=new Z;for(let y=0;y<a.length;y+=3)_.x=a[y+0],_.y=a[y+1],_.z=a[y+2],_.normalize().multiplyScalar(T),a[y+0]=_.x,a[y+1]=_.y,a[y+2]=_.z}function d(){const T=new Z;for(let _=0;_<a.length;_+=3){T.x=a[_+0],T.y=a[_+1],T.z=a[_+2];const y=h(T)/2/Math.PI+.5,M=f(T)/Math.PI+.5;r.push(y,1-M)}g(),u()}function u(){for(let T=0;T<r.length;T+=6){const _=r[T+0],y=r[T+2],M=r[T+4],S=Math.max(_,y,M),x=Math.min(_,y,M);S>.9&&x<.1&&(_<.2&&(r[T+0]+=1),y<.2&&(r[T+2]+=1),M<.2&&(r[T+4]+=1))}}function p(T){a.push(T.x,T.y,T.z)}function m(T,_){const y=T*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function g(){const T=new Z,_=new Z,y=new Z,M=new Z,S=new kt,x=new kt,z=new kt;for(let E=0,A=0;E<a.length;E+=9,A+=6){T.set(a[E+0],a[E+1],a[E+2]),_.set(a[E+3],a[E+4],a[E+5]),y.set(a[E+6],a[E+7],a[E+8]),S.set(r[A+0],r[A+1]),x.set(r[A+2],r[A+3]),z.set(r[A+4],r[A+5]),M.copy(T).add(_).add(y).divideScalar(3);const F=h(M);v(S,A+0,T,F),v(x,A+2,_,F),v(z,A+4,y,F)}}function v(T,_,y,M){M<0&&T.x===1&&(r[_]=T.x-1),y.x===0&&y.z===0&&(r[_]=M/2/Math.PI+.5)}function h(T){return Math.atan2(T.z,-T.x)}function f(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.vertices,t.indices,t.radius,t.details)}}class Na extends xs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Na(t.radius,t.detail)}}class za extends xs{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new za(t.radius,t.detail)}}class An extends Je{constructor(t=1,e=32,i=16,n=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(r+o,Math.PI);let l=0;const d=[],u=new Z,p=new Z,m=[],g=[],v=[],h=[];for(let f=0;f<=i;f++){const T=[],_=f/i;let y=0;f===0&&r===0?y=.5/e:f===i&&c===Math.PI&&(y=-.5/e);for(let M=0;M<=e;M++){const S=M/e;u.x=-t*Math.cos(n+S*a)*Math.sin(r+_*o),u.y=t*Math.cos(r+_*o),u.z=t*Math.sin(n+S*a)*Math.sin(r+_*o),g.push(u.x,u.y,u.z),p.copy(u).normalize(),v.push(p.x,p.y,p.z),h.push(S+y,1-_),T.push(l++)}d.push(T)}for(let f=0;f<i;f++)for(let T=0;T<e;T++){const _=d[f][T+1],y=d[f][T],M=d[f+1][T],S=d[f+1][T+1];(f!==0||r>0)&&m.push(_,y,S),(f!==i-1||c<Math.PI)&&m.push(y,M,S)}this.setIndex(m),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(v,3)),this.setAttribute("uv",new be(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class se extends Dn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Jt(16777215),this.specular=new Jt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cl extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const aa=new fe,mr=new Z,gr=new Z;class Zp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ia,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;mr.setFromMatrixPosition(t.matrixWorld),e.position.copy(mr),gr.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gr),e.updateMatrixWorld(),aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Jp extends Zp{constructor(){super(new el(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vr extends cl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new Jp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class _r extends cl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qp{constructor(t,e,i=0,n=1/0){this.ray=new Ra(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new La,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Ea(t,this,i,e),i.sort(yr),i}intersectObjects(t,e=!0,i=[]){for(let n=0,a=t.length;n<a;n++)Ea(t[n],this,i,e);return i.sort(yr),i}}function yr(s,t){return s.distance-t.distance}function Ea(s,t,e,i){if(s.layers.test(t.layers)&&s.raycast(t,e),i===!0){const n=s.children;for(let a=0,r=n.length;a<r;a++)Ea(n[a],t,e,!0)}}class xa{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);const Tr={type:"change"},oa={type:"start"},Mr={type:"end"},ss=new Ra,Er=new pi,tm=Math.cos(70*Hc.DEG2RAD);class em extends Ui{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:Bi.ROTATE,TWO:Bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",gt),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",gt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Tr),i.update(),a=n.NONE},this.update=function(){const L=new Z,ft=new Ni().setFromUnitVectors(t.up,new Z(0,1,0)),Ct=ft.clone().invert(),St=new Z,pt=new Ni,G=new Z,yt=2*Math.PI;return function(Ut=null){const Gt=i.object.position;L.copy(Gt).sub(i.target),L.applyQuaternion(ft),o.setFromVector3(L),i.autoRotate&&a===n.NONE&&U(A(Ut)),i.enableDamping?(o.theta+=c.theta*i.dampingFactor,o.phi+=c.phi*i.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let $t=i.minAzimuthAngle,Kt=i.maxAzimuthAngle;isFinite($t)&&isFinite(Kt)&&($t<-Math.PI?$t+=yt:$t>Math.PI&&($t-=yt),Kt<-Math.PI?Kt+=yt:Kt>Math.PI&&(Kt-=yt),$t<=Kt?o.theta=Math.max($t,Math.min(Kt,o.theta)):o.theta=o.theta>($t+Kt)/2?Math.max($t,o.theta):Math.min(Kt,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&S||i.object.isOrthographicCamera?o.radius=Q(o.radius):o.radius=Q(o.radius*l),L.setFromSpherical(o),L.applyQuaternion(Ct),Gt.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),d.set(0,0,0));let ne=!1;if(i.zoomToCursor&&S){let re=null;if(i.object.isPerspectiveCamera){const Zt=L.length();re=Q(Zt*l);const he=Zt-re;i.object.position.addScaledVector(y,he),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Zt=new Z(M.x,M.y,0);Zt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),ne=!0;const he=new Z(M.x,M.y,0);he.unproject(i.object),i.object.position.sub(he).add(Zt),i.object.updateMatrixWorld(),re=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;re!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(re).add(i.object.position):(ss.origin.copy(i.object.position),ss.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ss.direction))<tm?t.lookAt(i.target):(Er.setFromNormalAndCoplanarPoint(i.object.up,i.target),ss.intersectPlane(Er,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),ne=!0);return l=1,S=!1,ne||St.distanceToSquared(i.object.position)>r||8*(1-pt.dot(i.object.quaternion))>r||G.distanceToSquared(i.target)>0?(i.dispatchEvent(Tr),St.copy(i.object.position),pt.copy(i.object.quaternion),G.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",zt),i.domElement.removeEventListener("pointerdown",P),i.domElement.removeEventListener("pointercancel",j),i.domElement.removeEventListener("wheel",lt),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",j),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",gt),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=n.NONE;const r=1e-6,o=new xa,c=new xa;let l=1;const d=new Z,u=new kt,p=new kt,m=new kt,g=new kt,v=new kt,h=new kt,f=new kt,T=new kt,_=new kt,y=new Z,M=new kt;let S=!1;const x=[],z={};let E=!1;function A(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function F(L){const ft=Math.abs(L*.01);return Math.pow(.95,i.zoomSpeed*ft)}function U(L){c.theta-=L}function K(L){c.phi-=L}const R=function(){const L=new Z;return function(Ct,St){L.setFromMatrixColumn(St,0),L.multiplyScalar(-Ct),d.add(L)}}(),N=function(){const L=new Z;return function(Ct,St){i.screenSpacePanning===!0?L.setFromMatrixColumn(St,1):(L.setFromMatrixColumn(St,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(Ct),d.add(L)}}(),k=function(){const L=new Z;return function(Ct,St){const pt=i.domElement;if(i.object.isPerspectiveCamera){const G=i.object.position;L.copy(G).sub(i.target);let yt=L.length();yt*=Math.tan(i.object.fov/2*Math.PI/180),R(2*Ct*yt/pt.clientHeight,i.object.matrix),N(2*St*yt/pt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(R(Ct*(i.object.right-i.object.left)/i.object.zoom/pt.clientWidth,i.object.matrix),N(St*(i.object.top-i.object.bottom)/i.object.zoom/pt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function W(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(L,ft){if(!i.zoomToCursor)return;S=!0;const Ct=i.domElement.getBoundingClientRect(),St=L-Ct.left,pt=ft-Ct.top,G=Ct.width,yt=Ct.height;M.x=St/G*2-1,M.y=-(pt/yt)*2+1,y.set(M.x,M.y,1).unproject(i.object).sub(i.object.position).normalize()}function Q(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function it(L){u.set(L.clientX,L.clientY)}function J(L){q(L.clientX,L.clientX),f.set(L.clientX,L.clientY)}function B(L){g.set(L.clientX,L.clientY)}function et(L){p.set(L.clientX,L.clientY),m.subVectors(p,u).multiplyScalar(i.rotateSpeed);const ft=i.domElement;U(2*Math.PI*m.x/ft.clientHeight),K(2*Math.PI*m.y/ft.clientHeight),u.copy(p),i.update()}function ot(L){T.set(L.clientX,L.clientY),_.subVectors(T,f),_.y>0?W(F(_.y)):_.y<0&&H(F(_.y)),f.copy(T),i.update()}function Mt(L){v.set(L.clientX,L.clientY),h.subVectors(v,g).multiplyScalar(i.panSpeed),k(h.x,h.y),g.copy(v),i.update()}function w(L){q(L.clientX,L.clientY),L.deltaY<0?H(F(L.deltaY)):L.deltaY>0&&W(F(L.deltaY)),i.update()}function D(L){let ft=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?K(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,i.keyPanSpeed),ft=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?K(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,-i.keyPanSpeed),ft=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(i.keyPanSpeed,0),ft=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(-i.keyPanSpeed,0),ft=!0;break}ft&&(L.preventDefault(),i.update())}function $(L){if(x.length===1)u.set(L.pageX,L.pageY);else{const ft=bt(L),Ct=.5*(L.pageX+ft.x),St=.5*(L.pageY+ft.y);u.set(Ct,St)}}function V(L){if(x.length===1)g.set(L.pageX,L.pageY);else{const ft=bt(L),Ct=.5*(L.pageX+ft.x),St=.5*(L.pageY+ft.y);g.set(Ct,St)}}function Y(L){const ft=bt(L),Ct=L.pageX-ft.x,St=L.pageY-ft.y,pt=Math.sqrt(Ct*Ct+St*St);f.set(0,pt)}function I(L){i.enableZoom&&Y(L),i.enablePan&&V(L)}function _t(L){i.enableZoom&&Y(L),i.enableRotate&&$(L)}function vt(L){if(x.length==1)p.set(L.pageX,L.pageY);else{const Ct=bt(L),St=.5*(L.pageX+Ct.x),pt=.5*(L.pageY+Ct.y);p.set(St,pt)}m.subVectors(p,u).multiplyScalar(i.rotateSpeed);const ft=i.domElement;U(2*Math.PI*m.x/ft.clientHeight),K(2*Math.PI*m.y/ft.clientHeight),u.copy(p)}function xt(L){if(x.length===1)v.set(L.pageX,L.pageY);else{const ft=bt(L),Ct=.5*(L.pageX+ft.x),St=.5*(L.pageY+ft.y);v.set(Ct,St)}h.subVectors(v,g).multiplyScalar(i.panSpeed),k(h.x,h.y),g.copy(v)}function Tt(L){const ft=bt(L),Ct=L.pageX-ft.x,St=L.pageY-ft.y,pt=Math.sqrt(Ct*Ct+St*St);T.set(0,pt),_.set(0,Math.pow(T.y/f.y,i.zoomSpeed)),W(_.y),f.copy(T);const G=(L.pageX+ft.x)*.5,yt=(L.pageY+ft.y)*.5;q(G,yt)}function Nt(L){i.enableZoom&&Tt(L),i.enablePan&&xt(L)}function It(L){i.enableZoom&&Tt(L),i.enableRotate&&vt(L)}function P(L){i.enabled!==!1&&(x.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",b),i.domElement.addEventListener("pointerup",j)),Lt(L),L.pointerType==="touch"?Et(L):ct(L))}function b(L){i.enabled!==!1&&(L.pointerType==="touch"?ht(L):rt(L))}function j(L){Rt(L),x.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",j)),i.dispatchEvent(Mr),a=n.NONE}function ct(L){let ft;switch(L.button){case 0:ft=i.mouseButtons.LEFT;break;case 1:ft=i.mouseButtons.MIDDLE;break;case 2:ft=i.mouseButtons.RIGHT;break;default:ft=-1}switch(ft){case Gi.DOLLY:if(i.enableZoom===!1)return;J(L),a=n.DOLLY;break;case Gi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;B(L),a=n.PAN}else{if(i.enableRotate===!1)return;it(L),a=n.ROTATE}break;case Gi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;it(L),a=n.ROTATE}else{if(i.enablePan===!1)return;B(L),a=n.PAN}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(oa)}function rt(L){switch(a){case n.ROTATE:if(i.enableRotate===!1)return;et(L);break;case n.DOLLY:if(i.enableZoom===!1)return;ot(L);break;case n.PAN:if(i.enablePan===!1)return;Mt(L);break}}function lt(L){i.enabled===!1||i.enableZoom===!1||a!==n.NONE||(L.preventDefault(),i.dispatchEvent(oa),w(dt(L)),i.dispatchEvent(Mr))}function dt(L){const ft=L.deltaMode,Ct={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(ft){case 1:Ct.deltaY*=16;break;case 2:Ct.deltaY*=100;break}return L.ctrlKey&&!E&&(Ct.deltaY*=10),Ct}function ut(L){L.key==="Control"&&(E=!0,document.addEventListener("keyup",mt,{passive:!0,capture:!0}))}function mt(L){L.key==="Control"&&(E=!1,document.removeEventListener("keyup",mt,{passive:!0,capture:!0}))}function gt(L){i.enabled===!1||i.enablePan===!1||D(L)}function Et(L){switch(wt(L),x.length){case 1:switch(i.touches.ONE){case Bi.ROTATE:if(i.enableRotate===!1)return;$(L),a=n.TOUCH_ROTATE;break;case Bi.PAN:if(i.enablePan===!1)return;V(L),a=n.TOUCH_PAN;break;default:a=n.NONE}break;case 2:switch(i.touches.TWO){case Bi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;I(L),a=n.TOUCH_DOLLY_PAN;break;case Bi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;_t(L),a=n.TOUCH_DOLLY_ROTATE;break;default:a=n.NONE}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(oa)}function ht(L){switch(wt(L),a){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;vt(L),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;xt(L),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Nt(L),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;It(L),i.update();break;default:a=n.NONE}}function zt(L){i.enabled!==!1&&L.preventDefault()}function Lt(L){x.push(L.pointerId)}function Rt(L){delete z[L.pointerId];for(let ft=0;ft<x.length;ft++)if(x[ft]==L.pointerId){x.splice(ft,1);return}}function wt(L){let ft=z[L.pointerId];ft===void 0&&(ft=new kt,z[L.pointerId]=ft),ft.set(L.pageX,L.pageY)}function bt(L){const ft=L.pointerId===x[0]?x[1]:x[0];return z[ft]}i.domElement.addEventListener("contextmenu",zt),i.domElement.addEventListener("pointerdown",P),i.domElement.addEventListener("pointercancel",j),i.domElement.addEventListener("wheel",lt,{passive:!1}),document.addEventListener("keydown",ut,{passive:!0,capture:!0}),this.update()}}const X={SEED:null,MAZE_DEGREE:4,MIN_MAZE_DEGREE:4,MAX_MAZE_DEGREE:16,BRANCHING_FACTOR:.1,BRAID_FACTOR:.1,SHADOW_SIZE_FACTOR:.075,TELEPORT_MAP_OPACITY:.25,PLAYER_COLLISION_RADIUS:.275,PLAYER_COLLISION_OFFSET_X:0,PLAYER_COLLISION_OFFSET_Y:-.125,PLAYER_START_X:.5,PLAYER_START_Y:1.7,PLAYER_SHADOW_OFFSET_X:-.28,PLAYER_SHADOW_OFFSET_Y:-.15,PLAYER_SHADOW_WIDTH_FACTOR:.45,PLAYER_SHADOW_HEIGHT_FACTOR:.25,SHOW_COLLISION_DEBUG:!1,MOVE_SPEED_FACTOR:2,ROT_SPEED:3,HUNTER_SPEED:600,VORTEX_SPEED_NORMAL:1.5,VORTEX_SPEED_FAST:6,JELLY_PORTAL_COUNT:0,getHunterCount(s){return s>=16?4:s>=12?3:s>=8?2:1},getKeyCount(s){return this.getHunterCount(s)*2},getTeleportCount(s){if(s<8)return Math.ceil(s/2);const t=s-8;return Math.floor(.125*t*t+1.5*t+4)},getPathfinderCount(s){return s>=11?Math.floor(9+(s-11)*1.4):this.getTeleportCount(s)},COLORS:{WALL:"#444",PATH_KNOWN:"#88ccff",PATH_VISITED:"#888",NEON_UP:"#00ffff",NEON_DOWN:"#ff00ff",NEON_UP_UNUSED:"#006666",NEON_DOWN_UNUSED:"#660066",START:"#ff0",EXIT:"#0f0",PLAYER:"#f00",PLAYER_OUTLINE:"#ffffff",HUNTER:"#a0f",TELEPORT:"#ff8c00",TELEPORT_INACTIVE:"#555555",REVEALED_PATH:"#ffffff",ELEVATOR_BIDIRECTIONAL:"#ffffff",JELLY_PORTAL:"#a020f0",THREE_PLAYER:16711680,THREE_HUNTER:11141375,THREE_START:16776960,THREE_EXIT:65280,THREE_VISITED:8947848,THREE_KNOWN:8965375,THREE_ELEVATOR_UP:65535,THREE_ELEVATOR_DOWN:16711935,THREE_TELEPORT:16747520,THREE_KEY:16766720,THREE_JELLY_PORTAL:10494192,THREE_ELEVATOR_SHAFT:{bottom:16711935,top:65535}}},Sa={en:{gameTitle:"VOID ESCAPE",gameCredits:"a game by Bernard Rodrigues",activeHunters:"Active Hunters",activeTeleports:"Active Teleports",activeKeys:"Active Keys",availablePathfinders:"Available Pathfinders",mazeDegree:"Maze Degree",safeMode:"Safe Mode",generateMaze:"NEW GAME",continue:"CONTINUE",tutorialsMenu:"TUTORIALS",tutorialsTitle:"TUTORIALS",back:"BACK",tutorialSuccess:"Success!",nextTutorial:"Next Tutorial",tutKeysTitle:"Key Collection",tutHuntersTitle:"Hunters",start:"START",cancel:"CANCEL",degreeHint:"Controls the grid size. Higher values create larger, more complex mazes.",safeModeHint:"When active, no hunters will spawn in the maze.",storyMsg1:"The mystical church of chaos worship!",storyMsg2:"The greatest monument to chaos worship.",storyMsg3:"I am a priestess of the word of the Jelly god.",storyMsg4:"But their word is a lie! The chaos is a lie!",storyMsg5:"So I was condemned to exile...",storyMsg6:"Condemned to the void...",hudKeys:"KEYS",hudPathfinders:"PATHFINDERS",hudFloor:"Floor",hudVisited:"Visited",proximityDetector:"PROXIMITY DETECTOR",mapLegendTitle:"MAP LEGEND",legendVisited:"Visited Path",legendKnown:"Known Path",legendStart:"Starting Point",legendExit:"Maze Exit",legendHunter:"Void Hunter",legendTeleport:"Teleport",legendElevator:"Elevator",controlsHintTitle:"CONTROLS HINT",actionMove:"Move / Rotate",actionElevator:"Elevator Up / Down",actionMap:"3D Holographic Map",actionZoom:"Zoom Minimap",msgVoidHuntersDetected:"Void Hunters Detected",msgKeySecured:"Key secured ({collected}/{total})",msgExitUnlocked:"Exit unlocked",msgKeysRemaining:"{count} key(s) remaining",msgNoOtherActiveTeleport:"No other active teleports",msgExitFound:"Exit found",msgNoPathfindersRemaining:"No pathfinders remaining",msgExitNotFoundYet:"Exit not found yet",msgSafePointTeleport:"Safe point... Teleport?",msgOopsNoisyShit:"Oops... noisy sh*t!",msgWhereAmI:"Where am I?",msgElevatorUp:"Up?",msgElevatorDown:"Down?",msgWhichWay:"Which way?",msgDidYouHearThat:"Did you hear that?",msgIWasDetected:"Damn! I was detected.",msgFoundPathfinder:"Found a pathfinder!",msgWorldSaved:"World saved. What now?",msgKeyDropped:"Oh! Just dropped a key...",msgPlayerRespawn:"Ok.. ok.. guess I'm alive..",statusLabel:"HUNTER STATUS:",statusScanning:"SCANNING",statusActive:"ACTIVE",statusSleeping:"SLEEPING",statusTracking:"TRACKING MODE",statusConverging:"HUNTERS CONVERGING ({ticks} Ticks)",pauseTitle:"PAUSED",resume:"RESUME",victoryTitle:"Mission Accomplished",victoryText:"You have successfully navigated the 3D void.",victoryCompletion:"MAP COMPLETION: {percent}%",mapCompletion:"MAP COMPLETION",victoryDeaths:"DEATHS",victoryDegree:"MAZE DEGREE",victoryTime:"COMPLETION TIME",playAgain:"PLAY AGAIN",mainMenu:"MAIN MENU",gameOverTitle:"Terminated",gameOverText:"You were caught by the void hunters.",saving:"SAVING...",generatingMaze:"GENERATING MAZE...",hudMana:"Mana",victoryMana:"MANA COLLECTED",msgManaSecured:"Mana secured ({collected}/{total})",teleportAnomaly:"TELEPORT ANOMALY",ticks:"TICKS",map3dInstructions:"Drag to rotate | Scroll to zoom | M to return",teleportWarning:"TELEPORT",map:"MAP",teleport:"TELEPORT",teleportationLink:"TELEPORTATION LINK",teleportJumpSector:"Jump to Sector {floor}F?",teleportTargetGrid:"Target Grid: ({x}, {y})",teleportGo:"GO",teleportCancel:"CANCEL",actionJellyPortal:"Jelly God Portal",msgJellyPortalEarned:"I got a little power!",msgJellyPortalNotHere:"I can't do this here...",msgJellyPortalActivated:"Portal of the Jelly God!",msgJellyPortalNoPortalCount:"I need mana...",msgJellyPortalNotSafe:"Not safe, but teleport-able...",msgHunterReturned:"These things... they resurrect..."},ptBr:{gameTitle:"VOID ESCAPE",gameCredits:"um jogo de Bernard Rodrigues",activeHunters:"Caçadores Ativos",activeTeleports:"Teleportes Ativos",activeKeys:"Chaves Ativas",availablePathfinders:"Localizadores Disponíveis",mazeDegree:"Grau do Labirinto",safeMode:"Modo Seguro",generateMaze:"NOVO JOGO",continue:"CONTINUAR",tutorialsMenu:"TUTORIAIS",tutorialsTitle:"TUTORIAIS",back:"VOLTAR",tutorialSuccess:"Sucesso!",nextTutorial:"Próximo Tutorial",tutKeysTitle:"Coleta de Chaves",tutHuntersTitle:"Caçadores",start:"INICIAR",cancel:"CANCELAR",degreeHint:"Controla o tamanho da grade. Valores maiores criam labirintos maiores e mais complexos.",safeModeHint:"Quando ativo, nenhum caçador surgirá no labirinto.",storyMsg1:"A igreja mística do culto ao caos!",storyMsg2:"O maior monumento ao culto do caos.",storyMsg3:"Sou uma sacerdotisa da palavra do deus Geleia.",storyMsg4:"Mas sua palavra é uma mentira! O caos é uma mentira!",storyMsg5:"Então fui condenada ao exílio...",storyMsg6:"Condenada ao vazio...",hudKeys:"CHAVES",hudPathfinders:"LOCALIZADORES",hudFloor:"Andar",hudVisited:"Visitado",proximityDetector:"DETECTOR DE PROXIMIDADE",mapLegendTitle:"LEGENDA DO MAPA",legendVisited:"Caminho Visitado",legendKnown:"Caminho Conhecido",legendStart:"Ponto de Partida",legendExit:"Saída do Labirinto",legendHunter:"Caçador do Vazio",legendTeleport:"Teleporte",legendElevator:"Elevador",controlsHintTitle:"DICA DE CONTROLES",actionMove:"Mover / Girar",actionElevator:"Elevador Subir / Descer",actionMap:"Mapa Holográfico 3D",actionZoom:"Zoom do Minimapa",msgVoidHuntersDetected:"Caçadores do Vazio Detectados",msgKeySecured:"Chave obtida ({collected}/{total})",msgExitUnlocked:"Saída destrancada",msgKeysRemaining:"{count} chave(s) restante(s)",msgNoOtherActiveTeleport:"Nenhum outro teleporte ativo",msgExitFound:"Saída encontrada",msgNoPathfindersRemaining:"Nenhum localizador restante",msgExitNotFoundYet:"Saída ainda não encontrada",msgSafePointTeleport:"Ponto seguro... Teleportar?",msgOopsNoisyShit:"Ops... troço barulhento!",msgWhereAmI:"Onde estou?",msgElevatorUp:"Subir?",msgElevatorDown:"Descer?",msgWhichWay:"Que direção?",msgDidYouHearThat:"Ouviu alguma coisa?",msgIWasDetected:"Droga! Fui detectada.",msgFoundPathfinder:"Localizador encontrado!",msgWorldSaved:"Salvei o mundo. E agora?",msgKeyDropped:"Ih... Derrubei uma chave...",msgPlayerRespawn:"Ok.. ok.. sobrevivi..",statusLabel:"STATUS DO CAÇADOR:",statusScanning:"ESCANEANDO",statusActive:"ATIVO",statusSleeping:"DORMINDO",statusTracking:"MODO DE RASTREAMENTO",statusConverging:"CAÇADORES CONVERGINDO ({ticks} Ticks)",pauseTitle:"PAUSA",resume:"RETOMAR",victoryTitle:"Missão Cumprida",victoryText:"Você atravessou o vazio 3D com sucesso.",victoryCompletion:"MAPA COMPLETO: {percent}%",mapCompletion:"MAPA COMPLETO",victoryDeaths:"MORTES",victoryDegree:"GRAU DO LABIRINTO",victoryTime:"TEMPO DE CONCLUSÃO",playAgain:"JOGAR NOVAMENTE",mainMenu:"MENU PRINCIPAL",gameOverTitle:"Eliminado",gameOverText:"Você foi pego pelos caçadores do vazio.",saving:"SALVANDO...",generatingMaze:"GERANDO LABIRINTO...",hudMana:"Mana",victoryMana:"MANA COLETADA",msgManaSecured:"Mana absorvida ({collected}/{total})",teleportAnomaly:"ANOMALIA DE TELEPORTE",ticks:"TICKS",map3dInstructions:"Arraste para girar | Role para zoom | M para voltar",teleportWarning:"TELEPORTE",map:"MAPA",teleport:"TELEPORTE",teleportationLink:"LINK DE TELEPORTE",teleportJumpSector:"Pular para o Setor {floor}F?",teleportTargetGrid:"Coordenada Alvo: ({x}, {y})",teleportGo:"IR",teleportCancel:"CANCELAR",actionJellyPortal:"Portal do Deus Geléia",msgJellyPortalEarned:"Ganhei um poderzinho!",msgJellyPortalNotHere:"Aqui eu não posso...",msgJellyPortalActivated:"Portal do Deus Geléia!",msgJellyPortalNoPortalCount:"Preciso de mana...",msgJellyPortalNotSafe:"Não seguro, mas teleportável...",msgHunterReturned:"Essas coisas ressuscitam..."},ja:{gameTitle:"ヴォイド・エスケープ",gameCredits:"ベルナルド・ホドリゲス制作",activeHunters:"アクティブなハンター",activeTeleports:"アクティブなテレポート",activeKeys:"アクティブな鍵",availablePathfinders:"使用可能なパスファインダー",mazeDegree:"迷路の難易度",safeMode:"セーフモード",generateMaze:"ニューゲーム",continue:"つづきから",tutorialsMenu:"チュートリアル",tutorialsTitle:"チュートリアル",back:"戻る",tutorialSuccess:"成功！",nextTutorial:"次のチュートリアル",tutKeysTitle:"鍵の収集",tutHuntersTitle:"ハンター",start:"スタート",cancel:"キャンセル",degreeHint:"グリッドのサイズを調整します。値が大きいほど、より広く複雑な迷路になります。",safeModeHint:"有効にすると、迷路にハンターが出現しなくなります。",storyMsg1:"混沌崇拝の神秘的な教会!",storyMsg2:"混沌崇拝の最大の記念碑。",storyMsg3:"私はゼリー神の言葉に仕える巫女よ。",storyMsg4:"でも彼らの言葉は嘘!混沌なんて嘘っぱちなんだから!",storyMsg5:"だから追放の刑に処されたの…",storyMsg6:"虚空へと追放されて…",hudKeys:"鍵",hudPathfinders:"パスファインダー",hudFloor:"階層",hudVisited:"訪問済み",proximityDetector:"近接探知機",mapLegendTitle:"マップ凡例",legendVisited:"訪問済みの道",legendKnown:"既知の道",legendStart:"スタート地点",legendExit:"迷路の出口",legendHunter:"虚空のハンター",legendTeleport:"テレポート",legendElevator:"エレベーター",controlsHintTitle:"操作方法",actionMove:"移動 / 回転",actionElevator:"エレベーター 上昇 / 下降",actionMap:"3Dホログラフィックマップ",actionZoom:"ミニマップのズーム",msgVoidHuntersDetected:"虚空のハンターを検知",msgKeySecured:"鍵を入手 ({collected}/{total})",msgExitUnlocked:"出口の鍵が開いた",msgKeysRemaining:"残り{count}個の鍵",msgNoOtherActiveTeleport:"他に有効なテレポートはない",msgExitFound:"出口を発見",msgNoPathfindersRemaining:"パスファインダーが残っていない",msgExitNotFoundYet:"出口はまだ見つかっていない",msgSafePointTeleport:"安全地帯…テレポートする?",msgOopsNoisyShit:"あら…うるさいったらないわね!",msgWhereAmI:"ここどこ?",msgElevatorUp:"上る?",msgElevatorDown:"下る?",msgWhichWay:"どっちの道?",msgDidYouHearThat:"今の聞こえた?",msgIWasDetected:"しまった、見つかっちゃった!",msgFoundPathfinder:"パスファインダー発見!",msgWorldSaved:"世界を救っちゃった。さて、次は?",msgKeyDropped:"あ、鍵落としちゃった…",msgPlayerRespawn:"よしよし…どうやらまだ生きてるな…",statusLabel:"ハンターの状態:",statusScanning:"スキャン中",statusActive:"アクティブ",statusSleeping:"スリープ中",statusTracking:"追跡モード",statusConverging:"ハンターが接近中 ({ticks} ティック)",pauseTitle:"一時停止",resume:"再開",victoryTitle:"任務完了",victoryText:"3Dの虚空を無事に踏破した。",victoryCompletion:"マップ達成度: {percent}%",mapCompletion:"マップ達成度",victoryDeaths:"死亡数",victoryDegree:"迷路の次数",victoryTime:"クリア時間",playAgain:"もう一度プレイ",mainMenu:"メインメニュー",gameOverTitle:"終了",gameOverText:"虚空のハンターに捕まってしまった。",saving:"セーブ中…",generatingMaze:"迷路生成中...",hudMana:"マナ",victoryMana:"マナ回収量",msgManaSecured:"マナを獲得しました ({collected}/{total})",teleportAnomaly:"テレポート異常",ticks:"ティック",map3dInstructions:"ドラッグで回転 | スクロールでズーム | Mキーで戻る",teleportWarning:"テレポート",map:"マップ",teleport:"テレポート",teleportationLink:"テレポートリンク",teleportJumpSector:"{floor}階のセクターへ移動する?",teleportTargetGrid:"目標座標: ({x}, {y})",teleportGo:"移動",teleportCancel:"キャンセル",actionJellyPortal:"ゼリー神のポータル",msgJellyPortalEarned:"ちょっとした力を手に入れた！",msgJellyPortalNotHere:"ここでは使えないわ...",msgJellyPortalActivated:"ゼリー神のポータル！",msgJellyPortalNoPortalCount:"マナが必要よ...",msgJellyPortalNotSafe:"安全ではないけれど、テレポートはできるわ...",msgHunterReturned:"あいつら、蘇るの…？"},es:{gameTitle:"ESCAPE DEL VACÍO",gameCredits:"un juego de Bernard Rodrigues",activeHunters:"Cazadores Activos",activeTeleports:"Teletransportes Activos",activeKeys:"Llaves Activas",availablePathfinders:"Localizadores Disponibles",mazeDegree:"Grado del Laberinto",safeMode:"Modo Seguro",generateMaze:"NUEVA PARTIDA",continue:"CONTINUAR",tutorialsMenu:"TUTORIALES",tutorialsTitle:"TUTORIALES",back:"VOLVER",tutorialSuccess:"¡Éxito!",nextTutorial:"Siguiente Tutorial",tutKeysTitle:"Recolección de Llaves",tutHuntersTitle:"Cazadores",start:"INICIAR",cancel:"CANCELAR",degreeHint:"Controla el tamaño de la cuadrícula. Valores más altos crean laberintos más grandes y complejos.",safeModeHint:"Cuando está activo, no aparecerán cazadores en el laberinto.",storyMsg1:"¡La mística iglesia del culto al caos!",storyMsg2:"El mayor monumento al culto del caos.",storyMsg3:"Soy una sacerdotisa de la palabra del dios Gelatina.",storyMsg4:"¡Pero su palabra es una mentira! ¡El caos es mentira!",storyMsg5:"Así que fui condenada al exilio...",storyMsg6:"Condenada al vacío...",hudKeys:"LLAVES",hudPathfinders:"LOCALIZADORES",hudFloor:"Piso",hudVisited:"Visitado",proximityDetector:"DETECTOR DE PROXIMIDAD",mapLegendTitle:"LEYENDA DEL MAPA",legendVisited:"Camino Visitado",legendKnown:"Camino Conocido",legendStart:"Punto de Partida",legendExit:"Salida del Laberinto",legendHunter:"Cazador del Vacío",legendTeleport:"Teletransporte",legendElevator:"Ascensor",controlsHintTitle:"AYUDA DE CONTROLES",actionMove:"Mover / Girar",actionElevator:"Ascensor Subir / Bajar",actionMap:"Mapa Holográfico 3D",actionZoom:"Zoom del Minimapa",msgVoidHuntersDetected:"Cazadores del Vacío Detectados",msgKeySecured:"Llave obtenida ({collected}/{total})",msgExitUnlocked:"Salida desbloqueada",msgKeysRemaining:"{count} llave(s) restante(s)",msgNoOtherActiveTeleport:"No hay otros teletransportes activos",msgExitFound:"Salida encontrada",msgNoPathfindersRemaining:"No quedan localizadores",msgExitNotFoundYet:"Salida aún no encontrada",msgSafePointTeleport:"Punto seguro... ¿Teletransportarse?",msgOopsNoisyShit:"Ups... ¡qué cosa tan ruidosa!",msgWhereAmI:"¿Dónde estoy?",msgElevatorUp:"¿Subir?",msgElevatorDown:"¿Bajar?",msgWhichWay:"¿Por dónde?",msgDidYouHearThat:"¿Escuchaste eso?",msgIWasDetected:"¡Rayos! Fui detectada.",msgFoundPathfinder:"¡Localizador encontrado!",msgWorldSaved:"Salvé el mundo. ¿Y ahora qué?",msgKeyDropped:"¡Ah! Se me cayó una llave...",msgPlayerRespawn:"Vale.. vale.. parece que sigo viva..",statusLabel:"ESTADO DEL CAZADOR:",statusScanning:"ESCANEANDO",statusActive:"ACTIVO",statusSleeping:"DURMIENDO",statusTracking:"MODO DE RASTREO",statusConverging:"CAZADORES CONVERGIENDO ({ticks} Ticks)",pauseTitle:"PAUSA",resume:"REANUDAR",victoryTitle:"Misión Cumplida",victoryText:"Atravesaste el vacío 3D con éxito.",victoryCompletion:"MAPA COMPLETADO: {percent}%",mapCompletion:"MAPA COMPLETADO",victoryDeaths:"MUERTES",victoryDegree:"GRADO DEL LABERINTO",victoryTime:"TIEMPO DE FINALIZACIÓN",playAgain:"JUGAR DE NUEVO",mainMenu:"MENÚ PRINCIPAL",gameOverTitle:"Eliminada",gameOverText:"Fuiste atrapada por los cazadores del vacío.",saving:"GUARDANDO...",generatingMaze:"GENERANDO LABIRINTO...",hudMana:"Maná",victoryMana:"MANÁ RECOLECTADA",msgManaSecured:"Maná asegurado ({collected}/{total})",teleportAnomaly:"ANOMALÍA DE TELETRANSPORTE",ticks:"TICKS",map3dInstructions:"Arrastra para girar | Desplázate para zoom | M para volver",teleportWarning:"TELETRANSPORTE",map:"MAPA",teleport:"TELETRANSPORTE",teleportationLink:"ENLACE DE TELETRANSPORTE",teleportJumpSector:"¿Saltar al Sector {floor}F?",teleportTargetGrid:"Coordenada Objetivo: ({x}, {y})",teleportGo:"IR",teleportCancel:"CANCELAR",actionJellyPortal:"Portal del Dios Gelatina",msgJellyPortalEarned:"¡Tengo un pequeno poder!",msgJellyPortalNotHere:"No puedo hacer esto aquí...",msgJellyPortalActivated:"¡Portal del Dios Gelatina!",msgJellyPortalNoPortalCount:"Necesito maná...",msgJellyPortalNotSafe:"No es seguro, pero se puede teletransportar...",msgHunterReturned:"Esas cosas resucitan..."}};let pn="en";function as(s){Sa[s]?pn=s:pn="en"}function xr(){return pn}function im(){if(typeof navigator<"u"){const s=navigator.language||navigator.userLanguage;if(s){const t=s.toLowerCase();if(t.startsWith("pt")){as("ptBr");return}if(t.startsWith("ja")){as("ja");return}if(t.startsWith("es")){as("es");return}}}as("en")}im();function Ot(s,t={},e=pn){var n,a;let i=((n=Sa[e])==null?void 0:n[s])||((a=Sa.en)==null?void 0:a[s])||s;return Object.keys(t).forEach(r=>{i=i.replace(`{${r}}`,t[r])}),i}function xn(s=pn){typeof document<"u"&&document.querySelectorAll("[data-i18n]").forEach(e=>{const i=e.getAttribute("data-i18n");if(i){const n=Ot(i,{},s);n!==i&&(e instanceof HTMLInputElement&&e.type==="button"?e.value=n:e.textContent=n)}})}class hl{constructor(){O(this,"_data");this._data=[]}get size(){return this._data.length}push(t){this._data.push(t),this._bubbleUp(this._data.length-1)}pop(){const t=this._data[0],e=this._data.pop();return this._data.length>0&&e!==void 0&&(this._data[0]=e,this._siftDown(0)),t}_bubbleUp(t){for(;t>0;){const e=t-1>>1;if(this._data[e].f<=this._data[t].f)break;[this._data[e],this._data[t]]=[this._data[t],this._data[e]],t=e}}_siftDown(t){const e=this._data.length;for(;;){let i=t;const n=2*t+1,a=2*t+2;if(n<e&&this._data[n].f<this._data[i].f&&(i=n),a<e&&this._data[a].f<this._data[i].f&&(i=a),i===t)break;[this._data[i],this._data[t]]=[this._data[t],this._data[i]],t=i}}}const nm=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1}],dl=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];function vs(s,t,e,i,n,a){return Math.abs(s-i)+Math.abs(t-n)+Math.abs(e-a)}function ul(s,t,e,i,n=0,a=null){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return[];const r=new Map,o=new Map,c=`${s.x},${s.y},${s.z}`;o.set(c,0);const l=new hl;for(l.push({f:vs(s.x,s.y,s.z,t.x,t.y,t.z),node:s});l.size>0;){const d=l.pop();if(!d)continue;const{node:u}=d,p=`${u.x},${u.y},${u.z}`;if(u.x===t.x&&u.y===t.y&&u.z===t.z)return sm(r,p);const m=o.get(p)??0;for(const{dx:g,dy:v,dz:h}of dl){const f=u.x+g,T=u.y+v,_=u.z+h;if(f<0||f>=i||T<0||T>=i||_<0||_>=i||a&&f===a.x&&T===a.y&&_===a.z)continue;const y=e[f*i*i+T*i+_];if(y===n||y===8)continue;if(h!==0){const x=u.z+h/2;if(e[u.x*i*i+u.y*i+x]===n)continue}const M=`${f},${T},${_}`,S=m+1;S<(o.get(M)??1/0)&&(r.set(M,u),o.set(M,S),l.push({f:S+vs(f,T,_,t.x,t.y,t.z),node:{x:f,y:T,z:_}}))}}return null}function sm(s,t){const e=[];let i=t;for(;s.has(i);){const n=s.get(i);if(!n)break;const[a,r,o]=i.split(",").map(Number);e.push({x:a,y:r,z:o}),i=`${n.x},${n.y},${n.z}`}return e.reverse(),e}function am(s,t,e,i,n=0,a=1/0,r=null){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return 0;const o=new Map,c=`${s.x},${s.y},${s.z}`;o.set(c,0);const l=new hl;for(l.push({f:vs(s.x,s.y,s.z,t.x,t.y,t.z),node:s});l.size>0;){const d=l.pop();if(!d)continue;const{node:u}=d,p=`${u.x},${u.y},${u.z}`,m=o.get(p)??0;if(m>a)return 1/0;if(u.x===t.x&&u.y===t.y&&u.z===t.z)return m;for(const{dx:g,dy:v,dz:h}of dl){const f=u.x+g,T=u.y+v,_=u.z+h;if(f<0||f>=i||T<0||T>=i||_<0||_>=i||r&&f===r.x&&T===r.y&&_===r.z)continue;const y=e[f*i*i+T*i+_];if(y===n||y===8)continue;if(h!==0){const x=u.z+h/2;if(e[u.x*i*i+u.y*i+x]===n)continue}const M=`${f},${T},${_}`,S=m+1;S<(o.get(M)??1/0)&&(o.set(M,S),l.push({f:S+vs(f,T,_,t.x,t.y,t.z),node:{x:f,y:T,z:_}}))}}return 1/0}function om(s,t,e,i,n=0,a=10){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return 0;const r=[{x:s.x,y:s.y,z:s.z,dist:0}];let o=0;const c=new Map;for(c.set(`${s.x},${s.y},${s.z}`,0);o<r.length;){const l=r[o++];if(!(l.dist>a))for(const{dx:d,dy:u,dz:p}of nm){const m=l.x+d,g=l.y+u,v=l.z+p;if(m<0||m>=i||g<0||g>=i||v<0||v>=i)continue;const h=e[m*i*i+g*i+v];if(h===n||h===8)continue;const f=`${m},${g},${v}`,_=v%2===0?0:1,y=l.dist+_;if(y<(c.get(f)??1/0)){if(c.set(f,y),m===t.x&&g===t.y&&v===t.z)return y;_===0?r.splice(o,0,{x:m,y:g,z:v,dist:y}):r.push({x:m,y:g,z:v,dist:y})}}}return 1/0}function rm(s,t,e,i,n,a){const r=[{x:s.x,y:s.y,z:s.z,path:[]}];let o=0;const c=new Uint8Array(i*i*i);for(c[s.x*i*i+s.y*i+s.z]=1;o<r.length;){const l=r[o++],d=`${l.x},${l.y},${l.z}`;if(!t.has(d))return l.path;const u=a(l.x,l.y,l.z,e,n,!1);for(const p of u){const m=p.x*i*i+p.y*i+p.z;c[m]||(c[m]=1,r.push({x:p.x,y:p.y,z:p.z,path:[...l.path,p]}))}}return null}class ra{constructor(t,e,i){O(this,"maze");O(this,"id");O(this,"history");O(this,"visitedNodes");O(this,"pathToTarget");O(this,"x");O(this,"y");O(this,"z");O(this,"visualX");O(this,"visualY");O(this,"visualZ");O(this,"state");O(this,"lastPos");O(this,"jellyTime");O(this,"respawnThresholdPercentage");O(this,"lowCanvas");O(this,"lctx");this.maze=t,this.id=i,this.history=[],this.visitedNodes=new Set,this.pathToTarget=[],e?(this.x=e.x,this.y=e.y,this.z=e.z,this.visualX=e.x,this.visualY=e.y,this.visualZ=e.z,this.state="WANDERING",this.lastPos={x:this.x,y:this.y,z:this.z},this.visitedNodes.add(`${this.x},${this.y},${this.z}`)):(this.x=null,this.y=null,this.z=null,this.visualX=null,this.visualY=null,this.visualZ=null,this.state="SLEEP",this.lastPos=null),this.jellyTime=0,this.respawnThresholdPercentage=null,typeof document<"u"&&(this.lowCanvas=document.createElement("canvas"),this.lowCanvas.width=64,this.lowCanvas.height=64,this.lctx=this.lowCanvas.getContext("2d",{willReadFrequently:!0}))}generateCloudTexture(t=.016){if(this.state==="SLEEP"||(this.jellyTime+=t,typeof document>"u"||!this.lctx))return;const e=64,i=this.lctx;i.globalCompositeOperation="destination-out",i.fillStyle="rgba(0, 0, 0, 0.22)",i.fillRect(0,0,e,e),i.globalCompositeOperation="source-over";const n=this.jellyTime;try{const a=i.getImageData(0,0,e,e),r=a.data;for(let o=0;o<e;o++)for(let c=0;c<e;c++){const l=c-e/2,d=o-e/2,u=Math.sqrt(l*l+d*d),p=Math.sin(n*1.5+c*.08)*2.5,m=e*.35+p;if(u<m+Math.random()*1.5){const g=90+Math.floor(Math.random()*45),v=10+Math.floor(Math.random()*20),h=140+Math.floor(Math.random()*60),f=(o*e+c)*4;r[f]=g,r[f+1]=v,r[f+2]=h,r[f+3]=255}}i.putImageData(a,0,0)}catch{}if(Math.random()<.04){i.fillStyle=Math.random()<.7?"#ffffff":"#b3ffff";const a=e/2-8+Math.random()*16,r=e/2-8+Math.random()*16;i.fillRect(a,r,2+Math.random()*3,4+Math.random()*10)}if(Math.random()<.12){const a=Math.floor(Math.random()*3)+1,r=["#00ff66","#ff0055","#00ccff","#ffff00","#ffffff"];for(let o=0;o<a;o++){const c=Math.floor(Math.random()*e),l=Math.floor(Math.random()*e),d=c-e/2,u=l-e/2;if(Math.sqrt(d*d+u*u)<e*.32){const m=Math.floor(Math.random()*4)+2,g=Math.floor(Math.random()*2)+1;i.fillStyle=r[Math.floor(Math.random()*r.length)],i.fillRect(c,l,m,g)}}}if(Math.random()<.08){const a=Math.floor(Math.random()*e),r=Math.floor(Math.random()*6)+2,o=Math.floor(Math.random()*6)-3;try{const c=i.getImageData(0,a,e,r);i.clearRect(0,a,e,r),i.putImageData(c,o,a)}catch{}}}move(t,e,i){if(this.state==="SLEEP"||this.state==="DEAD_BY_JELLY"||this.x===null||this.y===null||this.z===null)return;const n=this.getValidNeighbors(e,i);if(n.length===0)return;const a=Math.round(Math.cbrt(e.length)),r=e.get?e.get(this.x,this.y,this.z):e[this.x*a*a+this.y*a+this.z]??0;(r===i.VISITED||r===i.JELLY_PORTAL)&&this.state!=="TELEPORT_TRACKING"&&this.state!=="TRACKING"&&(this.state="TRACKING",this.pathToTarget=[],this.visitedNodes.clear(),this.visitedNodes.add(`${this.x},${this.y},${this.z}`));let o;if(this.pathToTarget.length>0){const c=this.pathToTarget[0],l=e[c.x*a*a+c.y*a+c.z];(this.state==="TRACKING"?l===i.VISITED||l===i.START||l===i.EXIT||l===i.JELLY_PORTAL:l!==i.WALL)?o=this.pathToTarget.shift():this.pathToTarget=[]}if(!o)if(this.state==="TELEPORT_TRACKING")o=void 0;else{let c=this.findPathToNearestUnvisited(e,i);if((!c||c.length===0)&&(this.visitedNodes.clear(),this.visitedNodes.add(`${this.x},${this.y},${this.z}`),c=this.findPathToNearestUnvisited(e,i)),c&&c.length>0)this.pathToTarget=c,o=this.pathToTarget.shift();else{const l=this.lastPos||{x:this.x,y:this.y,z:this.z},d=n.filter(u=>u.x!==l.x||u.y!==l.y||u.z!==l.z);o=d.length>0?d[Math.floor(Math.random()*d.length)]:n[0]}}o&&(this.history.push({x:this.x,y:this.y,z:this.z}),this.history.length>2&&this.history.shift(),this.lastPos={x:this.x,y:this.y,z:this.z},this.x=o.x,this.y=o.y,this.z=o.z,this.visitedNodes.add(`${this.x},${this.y},${this.z}`))}findPathToTarget(t,e,i){const n=Math.round(Math.cbrt(e.length));return ul({x:this.x,y:this.y,z:this.z},t,e,n,i.WALL,this.maze.startPos)}findPathToNearestUnvisited(t,e){const i=Math.round(Math.cbrt(t.length));return rm({x:this.x,y:this.y,z:this.z},this.visitedNodes,t,i,e,(n,a,r,o,c)=>this.getValidNeighbors(o,c,n,a,r,this.state==="TRACKING"))}getValidNeighbors(t,e,i=this.x,n=this.y,a=this.z,r=this.state==="TRACKING"){const o=[],c=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}],l=Math.round(Math.cbrt(t.length));for(const d of c){const u=i+d.dx,p=n+d.dy,m=a+d.dz;if(u>=0&&u<l&&p>=0&&p<l&&m>=0&&m<l){const g=Math.floor(this.maze.startPos.x),v=Math.floor(this.maze.startPos.y),h=this.maze.startPos.z,f=this.maze.inactiveTeleportPos&&this.maze.inactiveTeleportPos.x===g&&this.maze.inactiveTeleportPos.y===v&&this.maze.inactiveTeleportPos.z===h;if(u===g&&p===v&&m===h&&!f)continue;const T=t[u*l*l+p*l+m];if(T===e.EXIT)continue;if(T!==e.WALL&&T!==8){if(d.dz!==0){const _=a+d.dz/2;if(t[i*l*l+n*l+_]===e.WALL)continue}r?(T===e.VISITED||T===e.START||T===e.EXIT||T===e.JELLY_PORTAL||this.maze.visitedCells&&this.maze.visitedCells.has(`${u},${p},${m}`))&&o.push({x:u,y:p,z:m}):o.push({x:u,y:p,z:m})}}}return o}}const Di=[{id:"tutorial_keys",title:{en:"Key Collection",ptBr:"Coleta de Chaves",ja:"鍵の収集",es:"Recolección de Llaves"},description:{en:"Collect all available keys to unlock the exit portal.",ptBr:"Capture todas as chaves disponíveis para liberar a saída.",ja:"出口ポータルを解放するために、利用可能なすべての鍵を収集します。",es:"Recoge todas las llaves disponibles para liberar la salida."},layers:[["#######","#######","#######","#######","#######"],["#######","S....K#","###.###","#K....E","#######"],["#######","#######","#######","#######","#######"]],pathfinders:0,mana:0,jellyPortals:0},{id:"tutorial_elevators",title:{en:"Elevators",ptBr:"Elevadores",ja:"エレベーター",es:"Ascensores"},description:{en:"Use the elevators to visit the adjacent floors.",ptBr:"Utilize os elevadores para visitar os andares adjacentes.",ja:"エレベーターを使用して、隣接するフロアを訪問します。",es:"Utiliza los ascensores para visitar los pisos adyacentes."},layers:[["#######","#######","#######","#######","#######"],["#######","S.....E","#######","#######","#######"],["#######","###.###","#######","#######","#######"],["#######","#K...K#","#######","#######","#######"],["#######","###.###","#######","#######","#######"],["#######","###.###","###.###","###K###","#######"]],pathfinders:0,mana:0,jellyPortals:0},{id:"tutorial_teleport",title:{en:"Teleportation",ptBr:"Teletransporte",ja:"テレポート",es:"Teletransporte"},description:{en:"Use the teleporters to move between different areas of the level. Step on a teleport block, activate it with one of the action screens, and select another available teleporter to move to it.",ptBr:"Utilize os teletransportadores para se mover entre diferentes áreas do nível. Ao pisar sobre um bloco de teleporte, acione-o com uma das telas de ação e selecione outro teleporte disponível para se mover para ele.",ja:"テレポートを使用して、レベルの異なるエリア間を移動します。テレポートブロックの上に立ち、アクション画面の1つでそれをアクティブにし、移動するために別の利用可能なテレポーターを選択します。",es:"Utiliza los teletransportadores para moverte entre diferentes áreas del nivel. Pisa un bloque de teletransporte, actívalo con una de las pantallas de acción y selecciona otro teletransportador disponible para moverte a él."},layers:[["#######","#######","#######","#######","#######"],["#######","S..#.T#","##.#.##","#K.#..E","#######"],["#######","###.###","#######","#######","#######"]],pathfinders:0,mana:0,jellyPortals:0,revealed:!0},{id:"tutorial_hunters",title:{en:"Hunters",ptBr:"Caçadores",ja:"ハンター",es:"Cazadores"},description:{en:"Avoid the hunters or use the environment to your advantage. The entrance and teleporters are safe points.",ptBr:"Evite os caçadores ou use o ambiente a seu favor. A entrada e teleportes são pontos seguros.",ja:"ハンターを避けたり、環境を有利に利用したりします。入り口とテレポーターは安全なポイントです。",es:"Evita a los cazadores o utiliza el entorno a tu favor. La entrada y los teletransportadores son puntos seguros."},layers:[["#######","#######","#######","#######","#######"],["#######","S..H..E","###.###","#K...T#","#######"],["#######","#######","#######","#######","#######"]],pathfinders:0,mana:0,jellyPortals:0,revealed:!0,hunterBehavior:{static:!1,respawn:!0,fixed:!0}},{id:"tutorial_map_and_zoom",title:{en:"Map and Zoom",ptBr:"Mapa e Zoom",ja:"マップとズーム",es:"Mapa y Zoom"},description:{en:"Some maps may be too large to fit on the screen. Use the map and zoom to navigate.",ptBr:"Alguns mapas podem ser grandes demais para caber na tela. Use o mapa e o zoom para se localizar.",ja:"一部のマップは画面に収まらないほど大きい場合があります。マップとズームを使用してナビゲートします。",es:"Algunos mapas pueden ser demasiado grandes para caber en la pantalla. Utiliza el mapa y el zoom para navegar."},layers:[["##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################"],["##############################","S............................E","##############.###############","############A#.#A#############","##############.###############","##############.###############","##############.###############","############A#.#A#############","##############.###############","##############.###############","##############.###############","############A#.#A#############","##############.###############","##############.###############","##############.###############","############A#.#A#############","##############.###############","##############.###############","##############.###############","############A#.#A#############","##############.###############","##############.###############","##############.###############","############A#.#A#############","##############.###############","##############.###############","####A###A###A#.#A###A###A#####","##############.###############","#K............T.............K#","##############################"],["##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################"]],pathfinders:0,mana:0,jellyPortals:0},{id:"tutorial_mana_and_jelly_portals",title:{en:"Mana and Jelly Portals",ptBr:"Mana e Portais de Geleia",ja:"マナとジェリーのポータル",es:"Mana y Portales de Gelatina"},description:{en:"Collect mana to unlock your secret ability and activate jelly portals to traverse the level. The jelly god portal adds a jelly portal at the player's position (save point, but not safe) and destroys all void hunters in the action area. Visited points will be forgotten.",ptBr:"Colete mana para obter sua habilidade secreta e destrave os portais de geléia para atravessar o nível. O portal do deus geleia adiciona um portal de geleia na posição do jogador (save point, mas não seguro) e destrói todos os void hunters na área de ação. Os pontos visitados serão esquecidos.",ja:"マナを収集して秘密の能力をアンロックし、ジェリーのポータルをアクティブにしてレベルを移動します。ジェリーの神のポータルは、プレイヤーの位置にジェリーポータルを追加し（セーブポイントですが安全ではありません）、アクションエリア内のすべてのボイドハンターを破壊します。 訪問したポイントは忘れられます。",es:"Recoge mana para desbloquear tu habilidad secreta y activa los portales de gelatina para atravesar el nivel. El portal del dios de la gelatina agrega un portal de gelatina en la posición del jugador (punto de guardado, pero no seguro) y destruye a todos los cazadores del vacío en el área de acción. Los puntos visitados serán olvidados."},layers:[["######","######","######","######","######"],["######","S...M#","##.###","#M..HE","######"],["######","######","######","######","######"]],pathfinders:0,mana:8,jellyPortals:0,hunterBehavior:{static:!0,respawn:!1,fixed:!0}},{id:"tutorial_pathfinder",title:{en:"Pathfinding",ptBr:"Localizador de Caminhos",ja:"パスファインディング",es:"Localizador de Caminos"},description:{en:"Use the pathfinder to reveal the shortest route to the exit portal. Some levels can be extremely complex. To activate, open the map and click on teleporters, adjacent blocks, or the maze exit if discovered.",ptBr:"Use o localizador de caminhos para revelar a rota mais curta até o portal de saída. Algumas fases podem ser extremamente complexas. Para ativar, abra o mapa e clique sobre teleportes, blocos vizinhos ou a saída do labirinto, se descoberta.",ja:"パスファインダーを使用して、出口ポータルへの最短ルートを明らかにします。一部のレベルは非常に複雑な場合があります。有効にするには、マップを開き、テレポーター、隣接するブロック、または迷路の出口（発見された場合）をクリックします。",es:"Utiliza el localizador de caminos para revelar la rota más corta al portal de salida. Algunos niveles pueden ser extremadamente complejos. Para activarlo, abre el mapa y haz clic en los teletransportadores, bloques adyacentes o la salida del laberinto si se ha descubierto."},layers:[["###########","###########","###########","###########","###########","###########","###########"],["###########","#...#.....#","#.#######.#","#.#...#.#.#","#.#.#.#.#.#","#.#.#.#.#.E","###########"],["###########","###.#.#####","###########","#######.###","###########","###.#######","###########"],["###########","#.#.#.###.#","#.#.#.###.#","#...#.#...#","#.#.#.###.#","#.#.#.###.#","###########"],["###########","#.#######.#","###########","###########","###########","#####.###.#","###########"],["###########","#.........#","#.###.###.#","#.#A#.#A#.#","#.#A#.#A#.#","S.###.###.#","###########"],["###########","###########","###########","###########","###########","###########","###########"]],pathfinders:5,mana:0,jellyPortals:0,revealed:!0}];class Sr{constructor(t,e,i=null){O(this,"n");O(this,"branchingFactor");O(this,"size");O(this,"seed");O(this,"random");O(this,"matrix");O(this,"TYPES");O(this,"startPos");O(this,"tutorialHunterSpawns",[]);const n=t!==void 0?t:X.MAZE_DEGREE!==void 0?X.MAZE_DEGREE:8,a=e!==void 0?e:X.BRANCHING_FACTOR!==void 0?X.BRANCHING_FACTOR:.2;this.n=Math.max(3,Math.min(16,n)),this.branchingFactor=Math.max(0,Math.min(1,a)),this.size=2*this.n+1,i!=null?(this.seed=i,this.random=this.createSeededRandom(i)):(this.seed=null,this.random=Math.random),this.matrix=this.initMatrix(),this.TYPES={WALL:0,PATH:1,VISITED:2,START:3,EXIT:4,ELEVATOR_VISITED:5,TELEPORT:6,KEY:7,STATUE:8,MANA:9,JELLY_PORTAL:10},this.startPos={x:X.PLAYER_START_X!==void 0?X.PLAYER_START_X:.5,y:X.PLAYER_START_Y!==void 0?X.PLAYER_START_Y:1.5,z:0}}createSeededRandom(t){let e=0;if(typeof t=="string")for(let i=0;i<t.length;i++)e=Math.imul(31,e)+t.charCodeAt(i)|0;else e=t|0;return function(){let i=e+=1831565813;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}initMatrix(){return new Int8Array(this.size*this.size*this.size)}_idx(t,e,i){return t*this.size*this.size+e*this.size+i}generate(){const t=[],e=1+2*Math.floor(this.random()*this.n),i=1+2*Math.floor(this.random()*this.n),n=1+2*Math.floor(this.random()*this.n);for(this.matrix[this._idx(e,i,n)]=this.TYPES.PATH,t.push({x:e,y:i,z:n});t.length>0;){let o=this.random()>this.branchingFactor?t.length-1:Math.floor(this.random()*t.length);const c=t[o],l=this.getUnvisitedNeighbors(c.x,c.y,c.z);if(l.length>0){const d=l[Math.floor(this.random()*l.length)];this.matrix[this._idx(d.x,d.y,d.z)]=this.TYPES.PATH,this.matrix[this._idx((c.x+d.x)/2,(c.y+d.y)/2,(c.z+d.z)/2)]=this.TYPES.PATH,t.push(d)}else t.splice(o,1)}this.setEntryAndExit(),this.placeTeleports(),this.placeKeys(),this.applyBraid(),this.placeStatues(),this.placeManas();const a=this.size,r=this.matrix;return r.size=a,r.get=(o,c,l)=>r[o*a*a+c*a+l],r.set=(o,c,l,d)=>{r[o*a*a+c*a+l]=d},r}getUnvisitedNeighbors(t,e,i){const n=[],a=[{dx:2,dy:0,dz:0},{dx:-2,dy:0,dz:0},{dx:0,dy:2,dz:0},{dx:0,dy:-2,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const r of a){const o=t+r.dx,c=e+r.dy,l=i+r.dz;this.isValid(o,c,l)&&this.matrix[this._idx(o,c,l)]===this.TYPES.WALL&&n.push({x:o,y:c,z:l})}return n}isValid(t,e,i){return t>0&&t<this.size-1&&e>0&&e<this.size-1&&i>0&&i<this.size-1}setEntryAndExit(){const t=1+2*Math.floor(this.random()*this.n);this.matrix[this._idx(1,1,t)]=this.TYPES.PATH,this.matrix[this._idx(0,1,t)]=this.TYPES.TELEPORT,this.startPos={x:X.PLAYER_START_X!==void 0?X.PLAYER_START_X:.5,y:X.PLAYER_START_Y!==void 0?X.PLAYER_START_Y:1.5,z:t};const e=1+2*Math.floor(this.random()*this.n),i=2*this.n-1;this.matrix[this._idx(i,i,e)]=this.TYPES.PATH,this.matrix[this._idx(2*this.n,i,e)]=this.TYPES.EXIT}_findExitPos(){for(let t=0;t<this.size;t++)for(let e=0;e<this.size;e++)for(let i=0;i<this.size;i++)if(this.matrix[this._idx(t,e,i)]===this.TYPES.EXIT)return{x:t,y:e,z:i};return{x:2*this.n,y:2*this.n-1,z:this.startPos.z}}_collectDeadEndsAndPaths(){const t=[],e=[],i=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1}];for(let n=1;n<this.size-1;n++)for(let a=1;a<this.size-1;a++)for(let r=1;r<this.size-1;r++){if(this.matrix[this._idx(n,a,r)]!==this.TYPES.PATH)continue;const o=r+1<this.size&&this.matrix[this._idx(n,a,r+1)]!==this.TYPES.WALL,c=r-1>=0&&this.matrix[this._idx(n,a,r-1)]!==this.TYPES.WALL;if(o||c)continue;let l=0;for(const d of i){const u=n+d.dx,p=a+d.dy,m=r+d.dz;u>=0&&u<this.size&&p>=0&&p<this.size&&m>=0&&m<this.size&&this.matrix[this._idx(u,p,m)]!==this.TYPES.WALL&&l++}(l===1?t:e).push({x:n,y:a,z:r})}return{deadEnds:t,normalPaths:e}}_greedyFill(t,e,i,n,a){const r={x:0,y:1,z:this.startPos.z},o=this._findExitPos(),c=(u,p)=>Math.abs(u.x-p.x)+Math.abs(u.y-p.y)+Math.abs(u.z-p.z);let l=4,d=4;for(;t.length<i&&l>0;){a&&(t.length=0);const u=e.filter(p=>c(p,r)<l||c(p,o)<l?!1:!n.includes(this.matrix[this._idx(p.x,p.y,p.z)]));for(;t.length<i;){let p=null,m=-1;for(const g of u){if(t.some(h=>h.x===g.x&&h.y===g.y&&h.z===g.z))continue;let v=1/0;for(const h of t){const f=c(g,h);f<v&&(v=f)}if(v>=d){const h=Math.min(c(g,r),c(g,o),v);h>m&&(m=h,p=g)}}if(p)t.push(p);else break}t.length<i&&(d>1?d--:l--)}}placeTeleports(){const t=X.getTeleportCount(this.n),{deadEnds:e,normalPaths:i}=this._collectDeadEndsAndPaths(),n=[];this._greedyFill(n,e,t,[],!0),n.length<t&&this._greedyFill(n,i,t,[],!1);for(const a of n)this.matrix[this._idx(a.x,a.y,a.z)]=this.TYPES.TELEPORT}placeKeys(){const t=X.getKeyCount(this.n),{deadEnds:e,normalPaths:i}=this._collectDeadEndsAndPaths(),n=[];this._greedyFill(n,e,t,[this.TYPES.TELEPORT],!0),n.length<t&&this._greedyFill(n,i,t,[this.TYPES.TELEPORT],!1);for(const a of n)this.matrix[this._idx(a.x,a.y,a.z)]=this.TYPES.KEY}applyBraid(){const t=this.size,e=[];for(let r=1;r<t-1;r++)for(let o=1;o<t-1;o++)for(let c=1;c<t-1;c++)if(this.matrix[this._idx(r,o,c)]===this.TYPES.WALL){const l=r%2===0&&o%2!==0&&c%2!==0,d=o%2===0&&r%2!==0&&c%2!==0,u=c%2===0&&r%2!==0&&o%2!==0;if(l){const p=this.matrix[this._idx(r-1,o,c)],m=this.matrix[this._idx(r+1,o,c)];p!==this.TYPES.WALL&&m!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&m!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&m!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&m!==this.TYPES.KEY&&e.push({x:r,y:o,z:c,type:"X"})}else if(d){const p=this.matrix[this._idx(r,o-1,c)],m=this.matrix[this._idx(r,o+1,c)];p!==this.TYPES.WALL&&m!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&m!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&m!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&m!==this.TYPES.KEY&&e.push({x:r,y:o,z:c,type:"Y"})}else if(u){const p=this.matrix[this._idx(r,o,c-1)],m=this.matrix[this._idx(r,o,c+1)];p!==this.TYPES.WALL&&m!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&m!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&m!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&m!==this.TYPES.KEY&&e.push({x:r,y:o,z:c,type:"Z"})}}for(let r=e.length-1;r>0;r--){const o=Math.floor(this.random()*(r+1)),c=e[r];e[r]=e[o],e[o]=c}const i=X.BRAID_FACTOR||.1,n=Math.floor(e.length*i);let a=0;for(const r of e){if(a>=n)break;this.isWideConnection(r.x,r.y,r.z)||r.type==="Z"&&this.isAdjacentElevator(r.x,r.y,r.z)||(this.matrix[this._idx(r.x,r.y,r.z)]=this.TYPES.PATH,a++)}}isWideConnection(t,e,i){const n=this.size,a=(l,d,u)=>l<0||l>=n||d<0||d>=n||u<0||u>=n?!1:l===t&&d===e&&u===i?!0:this.matrix[this._idx(l,d,u)]!==this.TYPES.WALL;return!!(a(t,e+1,i)&&a(t+1,e,i)&&a(t+1,e+1,i)||a(t-1,e,i)&&a(t-1,e+1,i)&&a(t,e+1,i)||a(t,e-1,i)&&a(t+1,e-1,i)&&a(t+1,e,i)||a(t-1,e-1,i)&&a(t,e-1,i)&&a(t-1,e,i)||a(t,e,i+1)&&a(t+1,e,i)&&a(t+1,e,i+1)||a(t-1,e,i)&&a(t-1,e,i+1)&&a(t,e,i+1)||a(t,e,i-1)&&a(t+1,e,i-1)&&a(t+1,e,i)||a(t-1,e,i-1)&&a(t,e,i-1)&&a(t-1,e,i)||a(t,e,i+1)&&a(t,e+1,i)&&a(t,e+1,i+1)||a(t,e-1,i)&&a(t,e-1,i+1)&&a(t,e,i+1)||a(t,e,i-1)&&a(t,e+1,i-1)&&a(t,e+1,i)||a(t,e-1,i-1)&&a(t,e,i-1)&&a(t,e-1,i))}isAdjacentElevator(t,e,i){const n=this.size,a=[{dx:-1,dy:-1},{dx:-1,dy:0},{dx:-1,dy:1},{dx:0,dy:-1},{dx:0,dy:1},{dx:1,dy:-1},{dx:1,dy:0},{dx:1,dy:1}];for(const r of a){const o=t+r.dx,c=e+r.dy;if(!(o<0||o>=n||c<0||c>=n)&&(this.matrix[this._idx(o,c,i)]!==this.TYPES.WALL||i-2>=0&&this.matrix[this._idx(o,c,i-2)]!==this.TYPES.WALL||i+2<n&&this.matrix[this._idx(o,c,i+2)]!==this.TYPES.WALL))return!0}return!1}isDeadEndZ(t,e,i){if(t%2===0||e%2===0||i%2===0)return!1;const n=this.matrix[this._idx(t,e,i)];if(n===this.TYPES.WALL||n===this.TYPES.START||n===this.TYPES.EXIT||n===this.TYPES.TELEPORT||n===this.TYPES.KEY)return!1;const a=this.size,r=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(const c of r){const l=t+c.dx,d=e+c.dy;if(!(l<0||l>=a||d<0||d>=a)&&this.matrix[this._idx(l,d,i)]!==this.TYPES.WALL)return!1}let o=0;return i-1>=0&&this.matrix[this._idx(t,e,i-1)]!==this.TYPES.WALL&&o++,i+1<a&&this.matrix[this._idx(t,e,i+1)]!==this.TYPES.WALL&&o++,o===1}isSolvable(){const t=this.size,e={x:Math.floor(this.startPos.x),y:Math.floor(this.startPos.y),z:this.startPos.z},i=[];let n=null;for(let l=0;l<t;l++)for(let d=0;d<t;d++)for(let u=0;u<t;u++){const p=this.matrix[this._idx(l,d,u)];p===this.TYPES.KEY?i.push(`${l},${d},${u}`):p===this.TYPES.EXIT&&(n=`${l},${d},${u}`)}const a=[e],r=new Set([`${e.x},${e.y},${e.z}`]),o=new Set;let c=!1;for(;a.length>0;){const l=a.shift();if(!l)continue;const d=`${l.x},${l.y},${l.z}`;i.includes(d)&&o.add(d),d===n&&(c=!0);const u=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(const p of u){const m=l.x+p.dx,g=l.y+p.dy,v=l.z;if(m>=0&&m<t&&g>=0&&g<t){const h=`${m},${g},${v}`,f=this.matrix[this._idx(m,g,v)];f!==this.TYPES.WALL&&f!==this.TYPES.STATUE&&!r.has(h)&&(r.add(h),a.push({x:m,y:g,z:v}))}}for(const p of[-2,2]){const m=l.z+p;if(m>=0&&m<t){const g=l.z+p/2,v=this.matrix[this._idx(l.x,l.y,g)],h=this.matrix[this._idx(l.x,l.y,m)];if(v!==this.TYPES.WALL&&v!==this.TYPES.STATUE&&h!==this.TYPES.WALL&&h!==this.TYPES.STATUE){const f=`${l.x},${l.y},${m}`;r.has(f)||(r.add(f),a.push({x:l.x,y:l.y,z:m}))}}}}if(!c||o.size!==i.length)return!1;for(let l=0;l<t;l++)for(let d=0;d<t;d++)for(let u=1;u<t;u+=2){const p=this.matrix[this._idx(l,d,u)];if(p!==this.TYPES.WALL&&p!==this.TYPES.STATUE&&!r.has(`${l},${d},${u}`))return!1}return!0}placeStatues(){const t=this.size,e=[];for(let o=0;o<t;o++)for(let c=0;c<t;c++)for(let l=0;l<t;l++)this.isDeadEndZ(o,c,l)&&e.push({x:o,y:c,z:l});let i=0;const n=(o,c,l,d,u)=>{const p=this._idx(o,c,l),m=this.matrix[p];m!==d&&(this.matrix[p]=d,u.push({x:o,y:c,z:l,oldVal:m}))},a=o=>{for(let c=o.length-1;c>=0;c--){const l=o[c];this.matrix[this._idx(l.x,l.y,l.z)]=l.oldVal}},r=(o,c,l,d)=>{n(o,c,l,this.TYPES.STATUE,d);const u=l-1,p=l+1;u>=0&&n(o,c,u,this.TYPES.WALL,d),p<t&&n(o,c,p,this.TYPES.WALL,d);const m=[-2,2];for(const g of m){const v=l+g;v>=0&&v<t&&this.isDeadEndZ(o,c,v)&&r(o,c,v,d)}};for(const o of e){if(this.matrix[this._idx(o.x,o.y,o.z)]===this.TYPES.STATUE||!this.isDeadEndZ(o.x,o.y,o.z))continue;const c=[];if(r(o.x,o.y,o.z,c),this.isSolvable()){const l=c.filter(d=>d.oldVal!==this.TYPES.STATUE&&this.matrix[this._idx(d.x,d.y,d.z)]===this.TYPES.STATUE).length;i+=l}else a(c)}return i}placeManas(){const{deadEnds:t}=this._collectDeadEndsAndPaths();for(const e of t){const i=this._idx(e.x,e.y,e.z);if(this.matrix[i]===this.TYPES.PATH){let a=!1;e.z-1>=0&&this.matrix[this._idx(e.x,e.y,e.z-1)]!==this.TYPES.WALL&&(a=!0),e.z+1<this.size&&this.matrix[this._idx(e.x,e.y,e.z+1)]!==this.TYPES.WALL&&(a=!0),a||(this.matrix[i]=this.TYPES.MANA)}}}generateFromLayout(t){const e=t.layers.length,i=t.layers[0].length,n=t.layers[0][0].length,a=Math.max(n,i,e),r=a%2!==0?a:a+1;this.size=r,this.n=(r-1)/2,this.matrix=this.initMatrix(),this.tutorialHunterSpawns=[];for(let l=0;l<e;l++){const d=t.layers[l];for(let u=0;u<i;u++){const p=d[u];for(let m=0;m<n;m++){const g=p[m],v=this._idx(m,u,l);switch(g){case"#":this.matrix[v]=this.TYPES.WALL;break;case".":this.matrix[v]=this.TYPES.PATH;break;case"S":this.matrix[v]=this.TYPES.TELEPORT,this.startPos={x:m+.5,y:u+.5,z:l};break;case"E":this.matrix[v]=this.TYPES.EXIT;break;case"T":this.matrix[v]=this.TYPES.TELEPORT;break;case"K":this.matrix[v]=this.TYPES.KEY;break;case"M":this.matrix[v]=this.TYPES.MANA;break;case"A":this.matrix[v]=this.TYPES.STATUE;break;case"H":this.matrix[v]=this.TYPES.PATH,this.tutorialHunterSpawns.push({x:m,y:u,z:l});break;default:this.matrix[v]=this.TYPES.WALL}}}}const o=this.size,c=this.matrix;return c.size=o,c.get=(l,d,u)=>c[l*o*o+d*o+u],c.set=(l,d,u,p)=>{c[l*o*o+d*o+u]=p},c}}class lm{constructor(){O(this,"uiFloorSpan");O(this,"uiMap3dContainer");O(this,"uiMobileControls");O(this,"uiProximeterContainer");O(this,"uiProximeterCells");O(this,"uiProximeterBar");O(this,"uiVictoryScreen");O(this,"uiGameOverScreen");O(this,"uiMobileUp");O(this,"uiMobileDown");O(this,"uiMobileMap");O(this,"uiSavingIndicator");O(this,"savingIndicatorTimeout");O(this,"uiVisitedPercent");O(this,"uiHunterStatusVal");O(this,"uiStatusLabel");O(this,"uiMarqueeContainer");O(this,"uiLegendHunter");O(this,"uiCanvas");O(this,"uiKeysCollected");O(this,"uiKeysTotal");O(this,"uiKeysList");O(this,"uiPauseScreen");O(this,"uiMobilePauseBtn");O(this,"uiPathfindersRemaining");O(this,"uiPathfindersTotal");O(this,"uiControlsHintContent");O(this,"uiManaCollectedDesktop");O(this,"uiManaTotalDesktop");O(this,"uiManaCollectedMobile");O(this,"uiManaTotalMobile");O(this,"uiJellyPortalCountDesktop");O(this,"uiJellyPortalCountMobile");O(this,"uiMobileJellyPortalBtn");O(this,"onInfoBanner");O(this,"bannerMessage","");this.uiFloorSpan=document.getElementById("current-floor"),this.uiMap3dContainer=document.getElementById("map3d-container"),this.uiMobileControls=document.getElementById("mobile-controls"),this.uiProximeterContainer=document.getElementById("proximeter-container"),this.uiProximeterCells=document.querySelectorAll(".proximeter-cell"),this.uiProximeterBar=document.querySelector(".proximeter-bar"),this.uiVictoryScreen=document.getElementById("victory-screen"),this.uiGameOverScreen=document.getElementById("game-over-screen"),this.uiMobileUp=document.getElementById("mobile-up"),this.uiMobileDown=document.getElementById("mobile-down"),this.uiMobileMap=document.getElementById("mobile-map"),this.uiSavingIndicator=document.getElementById("saving-indicator"),this.savingIndicatorTimeout=null,this.uiVisitedPercent=document.getElementById("visited-percent"),this.uiHunterStatusVal=document.getElementById("hunter-status-val"),this.uiStatusLabel=document.querySelector("#hunter-status-panel .status-label"),this.uiMarqueeContainer=document.querySelector(".status-marquee-container"),this.uiLegendHunter=document.getElementById("legend-hunter"),this.uiCanvas=document.getElementById("main-2d-canvas"),this.uiKeysCollected=document.getElementById("keys-collected-count"),this.uiKeysTotal=document.getElementById("keys-total-count"),this.uiKeysList=document.getElementById("keys-list-container"),this.uiPauseScreen=document.getElementById("pause-screen"),this.uiMobilePauseBtn=document.getElementById("mobile-pause-btn"),this.uiPathfindersRemaining=document.getElementById("pathfinders-remaining-count"),this.uiPathfindersTotal=document.getElementById("pathfinders-total-count"),this.uiControlsHintContent=document.getElementById("controls-hint-content"),this.uiManaCollectedDesktop=document.getElementById("mana-collected-count-desktop"),this.uiManaTotalDesktop=document.getElementById("mana-total-count-desktop"),this.uiManaCollectedMobile=document.getElementById("mana-collected-count-mobile"),this.uiManaTotalMobile=document.getElementById("mana-total-count-mobile"),this.uiJellyPortalCountDesktop=document.getElementById("jelly-portal-count-desktop"),this.uiJellyPortalCountMobile=document.getElementById("jelly-portal-count-mobile"),this.uiMobileJellyPortalBtn=document.getElementById("mobile-jelly-portal-btn"),this.localizeDOM()}localizeDOM(t=pn){xn(t)}showPause(){this.uiPauseScreen&&this.uiPauseScreen.classList.remove("hidden")}hidePause(){this.uiPauseScreen&&this.uiPauseScreen.classList.add("hidden")}showVictory(t=0,e=0,i=8,n=0,a=0,r=0,o=!1,c=!1){if(this.hideGameUI(),this.uiVictoryScreen){this.uiVictoryScreen.classList.remove("hidden");const h=this.uiVictoryScreen.querySelector("h1");h&&(h.innerText=Ot(o?"tutorialSuccess":"victoryTitle"));const f=this.uiVictoryScreen.querySelector('p[data-i18n="victoryText"]');f&&(f.style.display=o?"none":""),this.uiVictoryScreen.querySelectorAll(".victory-stats").forEach(_=>{_.style.display=o?"none":""})}const l=document.getElementById("menu-btn-victory");l&&(l.innerText=Ot(o?"back":"mainMenu"));const d=document.getElementById("next-tut-btn-victory");d&&(d.classList.toggle("hidden",!c),d.innerText=Ot("nextTutorial"));const u=document.getElementById("victory-mana-count");u&&(u.innerText=`${a}/${r}`);const p=document.getElementById("victory-completion-rate");p&&(p.innerText=`${t}%`);const m=document.getElementById("victory-deaths-count");m&&(m.innerText=String(e));const g=document.getElementById("victory-maze-degree");g&&(g.innerText=String(i));const v=document.getElementById("victory-completion-time");if(v){const h=Math.floor(n/3600),f=Math.floor(n%3600/60),T=Math.floor(n%60),_=M=>String(M).padStart(2,"0"),y=h>0?`${_(h)}:${_(f)}:${_(T)}`:`${_(f)}:${_(T)}`;v.innerText=y}}showDeath(t=!1){this.hideGameUI(),this.uiGameOverScreen&&this.uiGameOverScreen.classList.remove("hidden");const e=document.getElementById("continue-btn-death");e&&(e.style.display=t?"":"none")}hideGameUI(){this.uiMobileControls&&this.uiMobileControls.classList.add("hidden"),this.uiMobilePauseBtn&&this.uiMobilePauseBtn.classList.add("hidden"),this.uiMap3dContainer&&this.uiMap3dContainer.classList.add("hidden"),this.uiProximeterContainer&&this.uiProximeterContainer.classList.add("hidden"),this.uiProximeterBar&&this.uiProximeterBar.classList.remove("critical-alert"),this.uiProximeterCells.forEach(t=>t.classList.remove("active")),this.uiCanvas&&this.uiCanvas.classList.remove("hunted-map-effect","nearby-map-effect")}initGameUI(t=!1){this.uiMobileControls&&this.uiMobileControls.classList.remove("hidden"),this.uiMobilePauseBtn&&this.uiMobilePauseBtn.classList.remove("hidden"),this.uiMobileMap&&(this.uiMobileMap.disabled=!0),t?(this.uiStatusLabel&&(this.uiStatusLabel.innerText="SAFE MODE:"),this.uiHunterStatusVal&&(this.uiHunterStatusVal.innerText="ACTIVE",this.uiHunterStatusVal.className="status-marquee-text status--scanning"),this.uiLegendHunter&&this.uiLegendHunter.classList.add("hidden")):(this.uiStatusLabel&&(this.uiStatusLabel.innerText="HUNTER STATUS:"),this.uiLegendHunter&&this.uiLegendHunter.classList.remove("hidden"))}updateVisitedPercent(t){this.uiVisitedPercent&&(this.uiVisitedPercent.innerText=String(t))}updateManaHUD(t,e){this.uiManaCollectedDesktop&&(this.uiManaCollectedDesktop.innerText=String(t)),this.uiManaTotalDesktop&&(this.uiManaTotalDesktop.innerText=String(e)),this.uiManaCollectedMobile&&(this.uiManaCollectedMobile.innerText=String(t)),this.uiManaTotalMobile&&(this.uiManaTotalMobile.innerText=String(e))}updateJellyPortalHUD(t){this.uiJellyPortalCountDesktop&&(this.uiJellyPortalCountDesktop.innerText=String(t)),this.uiJellyPortalCountMobile&&(this.uiJellyPortalCountMobile.innerText=String(t)),this.uiMobileJellyPortalBtn&&(t>0?this.uiMobileJellyPortalBtn.classList.add("jelly-portal-btn--active"):this.uiMobileJellyPortalBtn.classList.remove("jelly-portal-btn--active"))}updateFloor(t,e,i){if(this.uiFloorSpan){const n=(t+1)/2;this.uiFloorSpan.innerText=String(n)}this.uiMobileUp&&(this.uiMobileUp.disabled=!e),this.uiMobileDown&&(this.uiMobileDown.disabled=!i)}updateKeysHUD(t,e){if(this.uiKeysCollected&&(this.uiKeysCollected.innerText=String(t)),this.uiKeysTotal&&(this.uiKeysTotal.innerText=String(e)),this.uiKeysList){this.uiKeysList.innerHTML="";for(let i=0;i<e;i++){const n=document.createElement("span");n.className="key-dot"+(i<t?" key-dot--collected":""),this.uiKeysList.appendChild(n)}}}updatePathfindersHUD(t,e){this.uiPathfindersRemaining&&(this.uiPathfindersRemaining.innerText=String(t)),this.uiPathfindersTotal&&(this.uiPathfindersTotal.innerText=String(e))}showSavingIndicator(){this.uiSavingIndicator&&(this.savingIndicatorTimeout&&clearTimeout(this.savingIndicatorTimeout),this.uiSavingIndicator.classList.remove("hidden"),this.uiSavingIndicator.classList.add("saving-pulse"),this.savingIndicatorTimeout=window.setTimeout(()=>{this.uiSavingIndicator&&(this.uiSavingIndicator.classList.add("hidden"),this.uiSavingIndicator.classList.remove("saving-pulse"))},2e3))}showInfoBanner(t){this.bannerMessage=t,this.onInfoBanner&&this.onInfoBanner(t)}setMap3DVisible(t){this.uiMap3dContainer&&(t?this.uiMap3dContainer.classList.remove("hidden"):this.uiMap3dContainer.classList.add("hidden"))}updateHazardWarning(t,e,i=!1,n=!1){if(!this.uiHunterStatusVal)return;let a=Ot("statusScanning"),r="status--scanning",o=!1;i?(a=Ot("statusActive"),r="status--scanning"):n?(a=Ot("statusSleeping"),r="status--sleeping"):e>0?(a=Ot("statusConverging",{ticks:e}),r="status--converging",o=!0):t&&(a=Ot("statusTracking"),r="status--tracking",o=!0),this.uiHunterStatusVal.innerText!==a&&(this.uiHunterStatusVal.innerText=a,this.uiHunterStatusVal.className="status-marquee-text "+r),this.uiCanvas&&(o?this.uiCanvas.classList.add("hunted-map-effect"):this.uiCanvas.classList.remove("hunted-map-effect"))}setNearbyWarning(t){this.uiCanvas&&(t?this.uiCanvas.classList.add("nearby-map-effect"):this.uiCanvas.classList.remove("nearby-map-effect"))}updateProximeter(t,e,i){if(!this.uiProximeterContainer)return;if(e>0&&!i)this.uiProximeterContainer.classList.remove("hidden");else{this.uiProximeterContainer.classList.add("hidden");return}let n=0;t<=10&&(n=11-t),this.uiProximeterCells.forEach(a=>{parseInt(a.getAttribute("data-index")||"0")<=n?a.classList.add("active"):a.classList.remove("active")}),this.uiProximeterBar&&(n===10?this.uiProximeterBar.classList.add("critical-alert"):this.uiProximeterBar.classList.remove("critical-alert"))}updateMobileMapButton(t,e,i,n=!1){this.uiMobileMap&&i&&(t&&!e?(this.uiMobileMap.innerText=Ot("teleport"),n?(this.uiMobileMap.style.borderColor="#a020f0",this.uiMobileMap.style.color="#a020f0",this.uiMobileMap.style.background="rgba(160, 32, 240, 0.2)"):(this.uiMobileMap.style.borderColor="var(--clr-teleport, #ff8c00)",this.uiMobileMap.style.color="var(--clr-teleport, #ff8c00)",this.uiMobileMap.style.background="rgba(255, 140, 0, 0.2)")):(this.uiMobileMap.innerText=Ot("map"),this.uiMobileMap.style.borderColor="",this.uiMobileMap.style.color="",this.uiMobileMap.style.background=""))}updateControlsHint(t,e=!0){this.uiControlsHintContent&&(t==="gamepad"?this.uiControlsHintContent.innerHTML=`
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-round kbd-dark">LS</kbd>
                        <span style="color:var(--clr-text-dim);font-size:0.9em;margin:0 2px;">or</span>
                        <kbd class="kbd-dark">D-Pad</kbd>
                    </div>
                    <span class="hint-action">${Ot("actionMove")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-round kbd-a">A</kbd>
                        <span style="color:var(--clr-text-dim);font-size:0.9em;margin:0 2px;">/</span>
                        <kbd class="kbd-round kbd-y">Y</kbd>
                    </div>
                    <span class="hint-action">${Ot("actionElevator")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-dark" style="min-width: calc(var(--h-unit) * 3); min-width: calc(var(--d-h-unit) * 3);">Back</kbd>
                    </div>
                    <span class="hint-action">${Ot("actionMap")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-round kbd-b">B</kbd>
                    </div>
                    <span class="hint-action">${Ot("actionZoom")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-dark">RB</kbd>
                    </div>
                    <span class="hint-action">${Ot("actionJellyPortal")}</span>
                </div>
            `:this.uiControlsHintContent.innerHTML=`
                <div class="hint-row">
                    <div class="wasd-container">
                        <div class="wasd-row"><kbd>W</kbd></div>
                        <div class="wasd-row"><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></div>
                    </div>
                    <span class="hint-action">${Ot("actionMove")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>Q</kbd>
                        <span style="color:var(--clr-text-dim);font-size:0.9em;margin:0 2px;">/</span>
                        <kbd>E</kbd>
                    </div>
                    <span class="hint-action">${Ot("actionElevator")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>M</kbd>
                    </div>
                    <span class="hint-action">${Ot("actionMap")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>Z</kbd>
                    </div>
                    <span class="hint-action">${Ot("actionZoom")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>R</kbd>
                    </div>
                    <span class="hint-action">${Ot("actionJellyPortal")}</span>
                </div>
            `)}destroy(){this.savingIndicatorTimeout&&clearTimeout(this.savingIndicatorTimeout)}}class cm{constructor(){O(this,"keys");O(this,"touchStart");O(this,"touchMoveVector");O(this,"preventScrollKeys");O(this,"handleKeyDown");O(this,"handleKeyUp");O(this,"handleTouchStart");O(this,"handleTouchMove");O(this,"handleTouchEnd");this.keys={},this.touchStart=null,this.touchMoveVector=null,this.preventScrollKeys=["arrowup","arrowdown","arrowleft","arrowright"," ","pageup","pagedown"],this.handleKeyDown=null,this.handleKeyUp=null,this.handleTouchStart=null,this.handleTouchMove=null,this.handleTouchEnd=null,this.init()}init(){this.handleKeyDown=t=>{const e=t.key.toLowerCase();this.keys[e]=!0,this.preventScrollKeys.includes(e)&&t.preventDefault()},this.handleKeyUp=t=>{this.keys[t.key.toLowerCase()]=!1},window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp)}setupTouch(t,e){this.handleTouchStart=i=>{const n=i.target;t()||e()||n&&n.closest&&n.closest("button")||(i.cancelable&&i.preventDefault(),this.touchStart={x:i.touches[0].clientX,y:i.touches[0].clientY})},this.handleTouchMove=i=>{if(!this.touchStart||t()||e())return;i.cancelable&&i.preventDefault();const n=i.touches[0].clientX-this.touchStart.x,a=i.touches[0].clientY-this.touchStart.y,r=Math.sqrt(n*n+a*a);r>10&&(this.touchMoveVector={x:n/r,y:a/r})},this.handleTouchEnd=()=>{this.touchStart=null,this.touchMoveVector=null},window.addEventListener("touchstart",this.handleTouchStart,{passive:!1}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),window.addEventListener("touchend",this.handleTouchEnd)}destroy(){this.handleKeyDown&&window.removeEventListener("keydown",this.handleKeyDown),this.handleKeyUp&&window.removeEventListener("keyup",this.handleKeyUp),this.handleTouchStart&&window.removeEventListener("touchstart",this.handleTouchStart),this.handleTouchMove&&window.removeEventListener("touchmove",this.handleTouchMove),this.handleTouchEnd&&window.removeEventListener("touchend",this.handleTouchEnd)}}const Ua="void-escape-save";function hm(s){const t=new Uint8Array(s.buffer);let e="";for(let i=0;i<t.length;i++)e+=String.fromCharCode(t[i]);return btoa(e)}function dm(s){const t=atob(s),e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return new Int8Array(e.buffer)}function um(s){return{x:s.x,y:s.y,z:s.z,id:s.id,state:s.state,lastPos:s.lastPos?{...s.lastPos}:null,history:s.history.map(t=>({...t})),visitedNodes:Array.from(s.visitedNodes),pathToTarget:s.pathToTarget.map(t=>({...t})),respawnThresholdPercentage:s.respawnThresholdPercentage!==void 0?s.respawnThresholdPercentage:null}}function os(s){try{const t={version:1,timestamp:Date.now(),degree:s.degree,branchingFactor:s.branchingFactor,isSafeMode:s.isSafeMode,seed:s.seed,mazeSize:s.mazeGen.size,mazeStartPos:{...s.mazeGen.startPos},matrix:hm(s.mazeGen.matrix),player:{...s.player},hunters:s.hunters.map(um),discoveredTeleports:Array.from(s.discoveredTeleports),inactiveTeleportPos:s.inactiveTeleportPos?{...s.inactiveTeleportPos}:null,teleportCooldownTicks:s.teleportCooldownTicks,revealedPathSet:Array.from(s.revealedPathSet),keysCollected:s.keysCollected,totalKeys:s.totalKeys,manaCollected:s.manaCollected,totalMana:s.totalMana,jellyPortalCount:s.jellyPortalCount,totalPathfinders:s.totalPathfinders,pathfindersRemaining:s.pathfindersRemaining,pathfinderRewardsGranted:s.pathfinderRewardsGranted!==void 0?s.pathfinderRewardsGranted:0,mapCompletion100Triggered:s.mapCompletion100Triggered||!1,dialogueUpTriggered:s.dialogueUpTriggered||!1,dialogueDownTriggered:s.dialogueDownTriggered||!1,dialogueWhichWayTriggered:s.dialogueWhichWayTriggered||!1,dialogueDetectedTriggered:s.dialogueDetectedTriggered||!1,hunterOnSameFloorDetected:s.hunterOnSameFloorDetected||!1,deathsCount:s.deathsCount!==void 0?s.deathsCount:0,elapsedTime:s.elapsedTime!==void 0?s.elapsedTime:0};localStorage.setItem(Ua,JSON.stringify(t))}catch(t){console.warn("[SaveManager] Could not save game state:",t)}}function fl(){try{const s=localStorage.getItem(Ua);if(!s)return null;const t=JSON.parse(s);return!t||t.version!==1?null:t}catch(s){return console.warn("[SaveManager] Could not load save data:",s),null}}function pl(){localStorage.removeItem(Ua)}function br(){return fl()!==null}function fm(s,t){s.x=t.x,s.y=t.y,s.z=t.z,s.visualX=t.x,s.visualY=t.y,s.visualZ=t.z,s.state=t.state,s.lastPos=t.lastPos?{...t.lastPos}:null,s.history=t.history.map(e=>({...e})),s.visitedNodes=new Set(t.visitedNodes),s.pathToTarget=t.pathToTarget.map(e=>({...e})),s.respawnThresholdPercentage=t.respawnThresholdPercentage!==void 0?t.respawnThresholdPercentage:null}function pm(s,t){const e=dm(t);for(let i=0;i<e.length;i++)s.matrix[i]=e[i]}function la(s,t,e){return Math.abs(t-s)<=e?t:s+Math.sign(t-s)*e}class ca{constructor(t,e,i=null,n=null){O(this,"degree");O(this,"branchingFactor");O(this,"isSafeMode");O(this,"vScale");O(this,"ui");O(this,"input");O(this,"canvas");O(this,"ctx");O(this,"seed");O(this,"mazeGen");O(this,"maze");O(this,"isResumedFromSave");O(this,"mapCompletion100Triggered");O(this,"hunterOnSameFloorDetected");O(this,"dialogueUpTriggered");O(this,"dialogueDownTriggered");O(this,"dialogueWhichWayTriggered");O(this,"dialogueDetectedTriggered");O(this,"wallImage");O(this,"floorImage");O(this,"keyImage");O(this,"manaImage");O(this,"statueImage");O(this,"mageImages");O(this,"playerSide");O(this,"playerVertical");O(this,"playerWalkCycle");O(this,"playerSquashTargetX");O(this,"playerSquashTargetY");O(this,"playerSquashX");O(this,"playerSquashY");O(this,"player");O(this,"hunters");O(this,"keyMeshes");O(this,"exitMesh");O(this,"keysCollected");O(this,"totalKeys");O(this,"manaCollected");O(this,"totalMana");O(this,"manaMeshes");O(this,"totalPathfinders");O(this,"pathfindersRemaining");O(this,"activeMapFloor");O(this,"visualActiveFloor");O(this,"mapCursor");O(this,"pathfinderRewardsGranted");O(this,"isometricCanvas");O(this,"isometricCtx");O(this,"floorClickRects");O(this,"teleportModalClickRects");O(this,"mapZoom");O(this,"mapPanOffsetX");O(this,"mapPanOffsetY");O(this,"isZoomTransitionActive");O(this,"zoomTransitionTimer");O(this,"preloadedStoryImages");O(this,"storyImagesLoadedCount");O(this,"storyImagesTotalCount");O(this,"storyImagesPreloadPromise");O(this,"lastFrameTime");O(this,"revealedPathSet");O(this,"activePathReveal");O(this,"revealedPathProgress");O(this,"knownMeshes");O(this,"gridMeshes");O(this,"pathRevealInterval");O(this,"pathfinderBlockedUntil");O(this,"isMap3DActive");O(this,"isGameOver");O(this,"deathAnimation");O(this,"isTutorialMode");O(this,"currentTutorialId");O(this,"currentTutorialStage");O(this,"notificationQueue");O(this,"activeNotification");O(this,"isPaused");O(this,"isDestroyed");O(this,"isIntroPlaying");O(this,"isStoryActive");O(this,"pulsatingMaterials");O(this,"hunterMeshes");O(this,"discoveredTeleports");O(this,"visitedCells");O(this,"lastSavePos");O(this,"suppressWakeHuntersBanner");O(this,"allTeleports");O(this,"vortexAngles");O(this,"isTouchDevice");O(this,"isMouseOrTouchDetected");O(this,"teleportGoBtnClickRect");O(this,"lastTeleportCloseTime");O(this,"staticMapCacheCanvas");O(this,"staticMapCacheCtx");O(this,"staticMapCacheDirty");O(this,"zoomVisibleCells");O(this,"scene");O(this,"camera");O(this,"renderer");O(this,"controls");O(this,"teleportMeshes");O(this,"inactiveTeleportPos");O(this,"teleportCooldownTicks");O(this,"storyImages");O(this,"storyOpacity");O(this,"storyOverlayOpacity");O(this,"storyFrameIndex");O(this,"storyTimer");O(this,"storyTextQueue");O(this,"storyTextIndex");O(this,"storyDisplayedText");O(this,"storyState");O(this,"storyWaitTimer");O(this,"storyTextHeight");O(this,"storyWidthProgress");O(this,"storyCharIndex");O(this,"storyTypeTimer");O(this,"storyMsgIndex");O(this,"storyCloseProgress");O(this,"selectedTeleportIndex");O(this,"teleportConfirmModalActive");O(this,"teleportModalSelection");O(this,"teleportDotsClickRects");O(this,"isTeleportMode");O(this,"floorTransition");O(this,"hasSavePoint");O(this,"lastPlayerCell");O(this,"exitPathfinderUnlocked");O(this,"isZoomActive");O(this,"lastInputDevice");O(this,"fullyRevealedCells");O(this,"revealedCellsAnimation");O(this,"skipCellAnimations");O(this,"activeSkipHandler");O(this,"activeIntroTimer");O(this,"activeContinueTimer");O(this,"raycaster");O(this,"pointer");O(this,"handleKeyDownExtra");O(this,"handleKeyboardDetection");O(this,"handleResize");O(this,"handleStoryKeyDown");O(this,"handleStoryClick");O(this,"handleStoryTouch");O(this,"handleCanvasClick");O(this,"handlePointerDown");O(this,"handlePointerUp");O(this,"lastHunterMove");O(this,"lastLockedWarningTime");O(this,"prevGamepadButtons");O(this,"isPreloadingActive");O(this,"prevGamepadStick");O(this,"gamepadTeleportSelectedIndex");O(this,"deathsCount");O(this,"elapsedTime");if(this.degree=t!==void 0?t:X.MAZE_DEGREE!==void 0?X.MAZE_DEGREE:8,this.branchingFactor=e!==void 0?e:X.BRANCHING_FACTOR!==void 0?X.BRANCHING_FACTOR:.2,i)this.isSafeMode=i.isSafeMode??!1;else{const u=document.getElementById("safe-mode");this.isSafeMode=u?u.checked:!1}this.vScale=2,this.ui=new lm,this.input=new cm,this.input.setupTouch(()=>this.isMap3DActive,()=>this.isGameOver),this.canvas=document.getElementById("main-2d-canvas"),this.ctx=this.canvas.getContext("2d"),this.seed=i?i.seed:X.SEED!==null&&X.SEED!==void 0?X.SEED:Date.now(),this.isTutorialMode=!!n,this.currentTutorialId=n?n.id:null,this.currentTutorialStage=n,this.isTutorialMode?(this.mazeGen=new Sr,this.maze=this.mazeGen.generateFromLayout(n)):(this.mazeGen=new Sr(t,e,this.seed),this.maze=this.mazeGen.generate()),this.isResumedFromSave=!!i,this.deathsCount=i&&i.deathsCount||0,this.elapsedTime=i&&i.elapsedTime||0,this.mapCompletion100Triggered=!1,this.hunterOnSameFloorDetected=!1,this.dialogueUpTriggered=!1,this.dialogueDownTriggered=!1,this.dialogueWhichWayTriggered=!1,this.dialogueDetectedTriggered=!1,this.wallImage=new Image,this.wallImage.onload=()=>{this.staticMapCacheDirty=!0},this.wallImage.src="assets/images/wall.png",this.floorImage=new Image,this.floorImage.onload=()=>{this.staticMapCacheDirty=!0},this.floorImage.src="assets/images/floor.png",this.keyImage=new Image,this.keyImage.onload=()=>{this.staticMapCacheDirty=!0},this.keyImage.src="assets/images/key.png",this.manaImage=new Image,this.manaImage.onload=()=>{this.staticMapCacheDirty=!0},this.manaImage.src="assets/images/mana.png",this.statueImage=new Image,this.statueImage.onload=()=>{this.staticMapCacheDirty=!0},this.statueImage.src="assets/images/statue.png",this.mageImages={down_left:new Image,down_right:new Image,up_left:new Image,up_right:new Image};for(const u in this.mageImages)this.mageImages[u].onload=()=>{this.staticMapCacheDirty=!0},this.mageImages[u].src=`assets/images/mage_${u}.png`;if(this.playerSide="right",this.playerVertical="down",this.playerWalkCycle=0,this.playerSquashTargetX=1,this.playerSquashTargetY=1,this.playerSquashX=1,this.playerSquashY=1,this.player={x:this.mazeGen.startPos.x,y:this.mazeGen.startPos.y,z:this.mazeGen.startPos.z,dir:0},this.hunters=[],this.isTutorialMode){if(this.mazeGen.tutorialHunterSpawns&&this.mazeGen.tutorialHunterSpawns.length>0&&!this.isSafeMode){let u=1;for(const p of this.mazeGen.tutorialHunterSpawns){const m=new ra(this.mazeGen,{x:p.x,y:p.y,z:p.z},u++);this.hunters.push(m)}}this.lastHunterMove=performance.now()}else this.initHunters(t);if(this.keyMeshes=[],this.exitMesh=null,this.keysCollected=0,this.isTutorialMode){let u=0;const p=this.mazeGen.size;for(let m=0;m<p;m++)for(let g=0;g<p;g++)for(let v=0;v<p;v++)this.maze.get(m,g,v)===this.mazeGen.TYPES.KEY&&u++;this.totalKeys=u}else this.totalKeys=X.getKeyCount(t);this.isTutorialMode?(this.totalPathfinders=n.pathfinders!==void 0?n.pathfinders:0,this.pathfindersRemaining=this.totalPathfinders,this.manaCharges=n.mana!==void 0?n.mana:0,this.activeMapFloor=this.mazeGen.startPos.z,this.visualActiveFloor=this.mazeGen.startPos.z,this.player.x=this.mazeGen.startPos.x,this.player.y=this.mazeGen.startPos.y,this.player.z=this.mazeGen.startPos.z):(this.totalPathfinders=X.getPathfinderCount(t),this.pathfindersRemaining=this.totalPathfinders,this.activeMapFloor=1,this.visualActiveFloor=1),this.mapCursor={x:0,y:0,z:1},this.pathfinderRewardsGranted=0,this.isometricCanvas=null,this.isometricCtx=null,this.floorClickRects=[],this.mapZoom=1,this.mapPanOffsetX=0,this.isZoomTransitionActive=!1,this.zoomTransitionTimer=0,this.preloadedStoryImages=[],this.storyImagesLoadedCount=0,this.storyImagesTotalCount=0,this.storyImagesPreloadPromise=null,this.preloadStoryImages(),this.lastFrameTime=performance.now(),this.revealedPathSet=new Set,this.activePathReveal=[],this.revealedPathProgress=0,this.knownMeshes=[],this.gridMeshes=null,this.pathRevealInterval=null,this.pathfinderBlockedUntil=0,this.manaCollected=this.isTutorialMode&&n&&n.mana!==void 0?n.mana:0,this.totalMana=0,this.manaMeshes=[];const a=this.mazeGen.size;for(let u=0;u<a;u++)for(let p=0;p<a;p++)for(let m=0;m<a;m++)this.maze.get(u,p,m)===this.mazeGen.TYPES.MANA&&this.totalMana++;this.isTutorialMode&&n&&n.mana!==void 0&&(this.totalMana+=n.mana),this.isTutorialMode?this.jellyPortalCount=n&&n.jellyPortals!==void 0?n.jellyPortals:0:this.jellyPortalCount=this.totalMana<10?1:X.JELLY_PORTAL_COUNT||0,this.jellyPortalFreezeTimer=0,this.jellyPortalResetCells=new Set,this.jellyPortalResetDuration=1.5,this.jellyPortalResetElapsed=0,this.dyingHunters=[],this.ui.initGameUI(this.isSafeMode),this.ui.onInfoBanner=u=>this.queueNotification(u),this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.ui.updateManaHUD(this.manaCollected,this.totalMana),this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),this.ui.updateJellyPortalHUD(this.jellyPortalCount),this.isMap3DActive=!1,this.isGameOver=!1,this.deathAnimation=null,this.notificationQueue=[],this.activeNotification=null,this.isPaused=!1,this.isDestroyed=!1,this.isIntroPlaying=!1,this.isStoryActive=!1,this.pulsatingMaterials=[],this.hunterMeshes=[],this.discoveredTeleports=new Set,this.visitedCells=new Set,this.lastSavePos=null,this.suppressWakeHuntersBanner=!1;const r=Math.floor(this.player.x),o=Math.floor(this.player.y),c=this.player.z;this.discoveredTeleports.add(`${r},${o},${c}`),this.allTeleports=[];const l=this.mazeGen.size,d=this.mazeGen.TYPES;for(let u=0;u<l;u++)for(let p=0;p<l;p++)for(let m=0;m<l;m++)this.maze.get(m,p,u)===d.TELEPORT&&this.allTeleports.push({x:m,y:p,z:u});this.allTeleports.sort((u,p)=>u.z!==p.z?u.z-p.z:u.y!==p.y?u.y-p.y:u.x-p.x),this.selectedTeleportIndex=this.allTeleports.findIndex(u=>u.x===r&&u.y===o&&u.z===c),this.selectedTeleportIndex===-1&&(this.selectedTeleportIndex=0),this.teleportConfirmModalActive=!1,this.teleportModalSelection="go",this.isMouseOrTouchDetected=!1,this.teleportGoBtnClickRect=null,this.lastTeleportCloseTime=0,this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0,this.teleportMeshes=[],this.isTeleportMode=!1,this.teleportCooldownTicks=0,this.inactiveTeleportPos=null,this.floorTransition=null,this.hasSavePoint=!1,this.lastPlayerCell={x:r,y:o,z:c},this.exitPathfinderUnlocked=!1,this.isZoomActive=!0,this.zoomVisibleCells=11,this.lastInputDevice="keyboard",this.staticMapCacheCanvas=document.createElement("canvas"),this.staticMapCacheCtx=this.staticMapCacheCanvas.getContext("2d"),this.staticMapCacheDirty=!0,this.fullyRevealedCells=new Set,this.revealedCellsAnimation=new Map,this.vortexAngles=new Map,this.skipCellAnimations=!0,this.populateFullyRevealedCells(this.player.z),this.activeSkipHandler=null,this.activeIntroTimer=null,this.activeContinueTimer=null,this.raycaster=new Qp,this.pointer=new kt,this.exitPathfinderUnlocked=this.checkExitNeighborVisited(),this.initThree(),this.populateVisitedCells(),this.init(i)}populateVisitedCells(){this.visitedCells.clear();const t=this.mazeGen.size,e=this.mazeGen.TYPES,i=this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.revealed;for(let n=0;n<t;n++)for(let a=0;a<t;a++)for(let r=0;r<t;r++){const o=this.maze.get(n,a,r);if(i){if(o!==e.WALL){this.visitedCells.add(`${n},${a},${r}`);const c=r<t-1&&this.maze.get(n,a,r+1)!==e.WALL,l=r>0&&this.maze.get(n,a,r-1)!==e.WALL,d=c||l;o===e.PATH?d?this.maze.set(n,a,r,e.ELEVATOR_VISITED):this.maze.set(n,a,r,e.VISITED):o===e.TELEPORT&&this.discoveredTeleports.add(`${n},${a},${r}`)}}else{const c=o===e.TELEPORT&&this.discoveredTeleports.has(`${n},${a},${r}`);(o===e.VISITED||o===e.START||o===e.ELEVATOR_VISITED||c)&&this.visitedCells.add(`${n},${a},${r}`)}}}destroy(){this.isDestroyed=!0,this.hideGameUI(),this.input.destroy(),this.ui.destroy(),window.removeEventListener("keydown",this.handleKeyDownExtra),this.handleKeyboardDetection&&window.removeEventListener("keydown",this.handleKeyboardDetection),window.removeEventListener("resize",this.handleResize),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this.activeIntroTimer&&(clearTimeout(this.activeIntroTimer),this.activeIntroTimer=null),this.activeContinueTimer&&(clearTimeout(this.activeContinueTimer),this.activeContinueTimer=null),this.handleStoryKeyDown&&(window.removeEventListener("keydown",this.handleStoryKeyDown),this.handleStoryKeyDown=null);const t=document.getElementById("story-screen");t&&(this.handleStoryClick&&(t.removeEventListener("click",this.handleStoryClick),this.handleStoryClick=null),this.handleStoryTouch&&(t.removeEventListener("touchstart",this.handleStoryTouch),this.handleStoryTouch=null),t.classList.add("hidden")),this.controls&&this.controls.dispose(),this.renderer&&this.renderer.domElement&&(this.renderer.domElement.removeEventListener("click",this.handleCanvasClick),this.renderer.domElement.removeEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.removeEventListener("pointerup",this.handlePointerUp)),this.renderer&&(this.renderer.dispose(),this.renderer.domElement.remove()),this.ui.uiMobileUp&&(this.ui.uiMobileUp.onclick=null),this.ui.uiMobileDown&&(this.ui.uiMobileDown.onclick=null),this.ui.uiMobileMap&&(this.ui.uiMobileMap.onclick=null),this.pathRevealInterval&&clearInterval(this.pathRevealInterval)}preloadStoryImages(){const t=["assets/images/presentation/1-mystical-church-of-chaos.jpg","assets/images/presentation/2-mystical-church-of-chaos.jpg","assets/images/presentation/3-the-jelly-god.jpg","assets/images/presentation/4-player-alone.jpg","assets/images/presentation/5-player-thrown.jpg"];this.storyImagesLoadedCount=0,this.storyImagesTotalCount=t.length,this.storyImagesPreloadPromise=Promise.all(t.map((e,i)=>new Promise(n=>{const a=new Image;a.src=e,a.onload=()=>{this.preloadedStoryImages[i]=a,this.storyImagesLoadedCount++,n()},a.onerror=()=>{console.warn(`Failed to preload story image: ${e}`),n()}})))}initHunters(t){const e=this.isSafeMode?0:X.getHunterCount(t);if(e!==0){for(let i=1;i<=e;i++)this.hunters.push(new ra(this.mazeGen,null,i));this.lastHunterMove=performance.now()}}wakeHunters(){const t=this.mazeGen.size,e=[],i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,r=Math.floor(this.mazeGen.startPos.x),o=Math.floor(this.mazeGen.startPos.y),c=this.mazeGen.startPos.z;for(let g=0;g<t;g++)for(let v=0;v<t;v++)for(let h=0;h<t;h++){const f=g===r&&v===o&&h===c;this.maze.get(g,v,h)===this.mazeGen.TYPES.PATH&&h%2!==0&&!f&&e.push({x:g,y:v,z:h})}if(e.length===0)for(let g=0;g<t;g++)for(let v=0;v<t;v++)for(let h=0;h<t;h++){const f=this.maze.get(g,v,h),T=g===r&&v===o&&h===c,_=f===this.mazeGen.TYPES.EXIT;f!==this.mazeGen.TYPES.WALL&&!_&&h%2!==0&&(g!==i||v!==n||h!==a)&&!T&&e.push({x:g,y:v,z:h})}for(let g=e.length-1;g>0;g--){const v=Math.floor(Math.random()*(g+1)),h=e[g];e[g]=e[v],e[v]=h}const l=(g,v)=>Math.abs(g.x-v.x)+Math.abs(g.y-v.y)+Math.abs(g.z-v.z),d=[],u=this.hunters.filter(g=>g.state==="SLEEP");let p=Math.max(3,Math.floor(t*.45)),m=4;for(;d.length<u.length&&p>0;){d.length=0;const g=e.filter(v=>l(v,{x:i,y:n,z:a})>=p);for(let v=0;v<u.length;v++){let h=null;for(const f of g){if(d.some(_=>_.x===f.x&&_.y===f.y&&_.z===f.z))continue;let T=!0;for(const _ of d)if(l(f,_)<m){T=!1;break}if(T){h=f;break}}if(h)d.push(h);else break}d.length<u.length&&(m>1?m--:p--)}if(d.length<u.length)for(const g of e){if(d.length>=u.length)break;d.some(v=>v.x===g.x&&v.y===g.y&&v.z===g.z)||d.push(g)}for(let g=0;g<u.length&&g<d.length;g++){const v=u[g],h=d[g];v.x=h.x,v.y=h.y,v.z=h.z,v.visualX=h.x,v.visualY=h.y,v.visualZ=h.z,v.lastPos={x:h.x,y:h.y,z:h.z},v.state="WANDERING",v.visitedNodes.clear(),v.visitedNodes.add(`${h.x},${h.y},${h.z}`),v.history=[]}this.suppressWakeHuntersBanner||this.ui.showInfoBanner(Ot("msgVoidHuntersDetected")),this.suppressWakeHuntersBanner=!1,this.staticMapCacheDirty=!0,this.isMap3DActive&&this.build3DMap()}getExitPos(){for(let t=0;t<this.mazeGen.size;t++)for(let e=0;e<this.mazeGen.size;e++)for(let i=0;i<this.mazeGen.size;i++)if(this.maze.get(t,e,i)===this.mazeGen.TYPES.EXIT)return{x:t,y:e,z:i};return{x:1,y:1,z:1}}triggerSave(){this.isTutorialMode||(os(this),this.hasSavePoint=!0,this.lastSavePos={x:this.player.x,y:this.player.y,z:this.player.z},this.ui.showSavingIndicator())}tryActivateJellyPortal(){if(this.isGameOver||this.isPaused||this.isIntroPlaying||this.isStoryActive||this.jellyPortalFreezeTimer>0)return;const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=this.maze.get(t,e,i),a=i<this.mazeGen.size-1&&this.maze.get(t,e,i+1)!==this.mazeGen.TYPES.WALL,r=i>0&&this.maze.get(t,e,i-1)!==this.mazeGen.TYPES.WALL,o=a||r,c=t===Math.floor(this.mazeGen.startPos.x)&&e===Math.floor(this.mazeGen.startPos.y)&&i===this.mazeGen.startPos.z,l=n===this.mazeGen.TYPES.TELEPORT;if(o||l||c||n!==this.mazeGen.TYPES.VISITED){this.ui.showInfoBanner(Ot("msgJellyPortalNotHere"));return}if(this.jellyPortalCount<=0){this.ui.showInfoBanner(Ot("msgJellyPortalNoPortalCount"));return}this.jellyPortalCount--,this.ui.updateJellyPortalHUD(this.jellyPortalCount),this.maze.set(t,e,i,this.mazeGen.TYPES.JELLY_PORTAL);const d=`${t},${e},${i}`;this.discoveredTeleports.add(d),this.allTeleports.push({x:t,y:e,z:i}),this.allTeleports.sort((m,g)=>m.z!==g.z?m.z-g.z:m.x!==g.x?m.x-g.x:m.y-g.y),this.selectedTeleportIndex=this.allTeleports.findIndex(m=>m.x===t&&m.y===e&&m.z===i),this.staticMapCacheDirty=!0,this.ui.showInfoBanner(Ot("msgJellyPortalActivated")),this.triggerSave(),this.jellyPortalFreezeTimer=1.5,this.jellyPortalResetElapsed=0,this.jellyPortalResetCells.clear();const u=this.mazeGen.size;for(let m=0;m<u;m++)for(let g=0;g<u;g++)Math.abs(m-t)+Math.abs(g-e)<=5&&this.jellyPortalResetCells.add(`${m},${g}`);const p=this.getMapVisitedPercentage();for(const m of this.hunters)m.state!=="SLEEP"&&m.state!=="DEAD_BY_JELLY"&&m.state!=="DYING"&&m.z===i&&Math.abs(m.x-t)+Math.abs(m.y-e)<=5&&(m.state="DYING",m.respawnThresholdPercentage=p)}executeJellyPortalReset(t,e,i){const n=this.mazeGen.size,a=this.mazeGen.TYPES,r=Math.floor(this.mazeGen.startPos.x),o=Math.floor(this.mazeGen.startPos.y),c=this.mazeGen.startPos.z;for(let l=0;l<n;l++)for(let d=0;d<n;d++){const u=Math.abs(l-t)+Math.abs(d-e);if(u<=5){const p=this.maze.get(l,d,i),m=`${l},${d},${i}`;if(p===a.STATUE)continue;if(p===a.WALL){let g=!1;for(const[v,h]of[[1,0],[-1,0],[0,1],[0,-1]]){const f=l+v,T=d+h;if(f>=0&&f<n&&T>=0&&T<n&&this.maze.get(f,T,i)===a.STATUE){g=!0;break}}if(g)continue}if(l===r&&d===o&&i===c||l===t&&d===e)continue;if(this.visitedCells.delete(m),this.fullyRevealedCells.delete(m),this.revealedCellsAnimation.delete(m),u===1){(p===a.VISITED||p===a.ELEVATOR_VISITED)&&this.maze.set(l,d,i,a.PATH),p===a.TELEPORT&&this.discoveredTeleports.delete(m);continue}p===a.VISITED||p===a.ELEVATOR_VISITED?this.maze.set(l,d,i,a.PATH):p===a.TELEPORT&&this.discoveredTeleports.delete(m)}}for(const l of this.hunters)l.state==="DYING"&&(l.state="DEAD_BY_JELLY",l.x=null,l.y=null,l.z=null,l.visualX=null,l.visualY=null,l.visualZ=null,l.pathToTarget=[],l.history=[]);this.dyingHunters.length>0&&(this.respawnDyingHunters(),this.dyingHunters=[]),this.staticMapCacheDirty=!0,this.triggerSave()}respawnSingleHunter(t){const e=this.mazeGen.size,i=[],n=Math.floor(this.player.x),a=Math.floor(this.player.y),r=this.player.z,o=Math.floor(this.mazeGen.startPos.x),c=Math.floor(this.mazeGen.startPos.y),l=this.mazeGen.startPos.z;for(let d=0;d<e;d++)for(let u=0;u<e;u++)for(let p=0;p<e;p++){const m=d===o&&u===c&&p===l,g=this.maze.get(d,u,p)===this.mazeGen.TYPES.EXIT;if(this.maze.get(d,u,p)===this.mazeGen.TYPES.PATH&&p%2!==0&&!m&&!g){if(p===r&&Math.abs(d-n)+Math.abs(u-a)<=5)continue;i.push({x:d,y:u,z:p})}}if(i.length===0)for(let d=0;d<e;d++)for(let u=0;u<e;u++)for(let p=0;p<e;p++){const m=this.maze.get(d,u,p),g=d===o&&u===c&&p===l,v=m===this.mazeGen.TYPES.EXIT;if(m!==this.mazeGen.TYPES.WALL&&!v&&p%2!==0&&!g&&(d!==n||u!==a||p!==r)){if(p===r&&Math.abs(d-n)+Math.abs(u-a)<=5)continue;i.push({x:d,y:u,z:p})}}if(i.length>0){const d=i[Math.floor(Math.random()*i.length)];t.x=d.x,t.y=d.y,t.z=d.z,t.visualX=d.x,t.visualY=d.y,t.visualZ=d.z,t.lastPos={x:d.x,y:d.y,z:d.z},t.state="WANDERING",t.visitedNodes.clear(),t.visitedNodes.add(`${d.x},${d.y},${d.z}`),t.history=[],t.respawnThresholdPercentage=null,this.staticMapCacheDirty=!0,this.triggerSave()}}respawnDyingHunters(){const t=this.mazeGen.size,e=[],i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,r=Math.floor(this.mazeGen.startPos.x),o=Math.floor(this.mazeGen.startPos.y),c=this.mazeGen.startPos.z;for(let d=0;d<t;d++)for(let u=0;u<t;u++)for(let p=0;p<t;p++){const m=d===r&&u===o&&p===c,g=this.maze.get(d,u,p)===this.mazeGen.TYPES.EXIT;if(this.maze.get(d,u,p)===this.mazeGen.TYPES.PATH&&p%2!==0&&!m&&!g){if(p===a&&Math.abs(d-i)+Math.abs(u-n)<=5)continue;e.push({x:d,y:u,z:p})}}if(e.length===0)for(let d=0;d<t;d++)for(let u=0;u<t;u++)for(let p=0;p<t;p++){const m=this.maze.get(d,u,p),g=d===r&&u===o&&p===c,v=m===this.mazeGen.TYPES.EXIT;if(m!==this.mazeGen.TYPES.WALL&&!v&&p%2!==0&&!g&&(d!==i||u!==n||p!==a)){if(p===a&&Math.abs(d-i)+Math.abs(u-n)<=5)continue;e.push({x:d,y:u,z:p})}}for(let d=e.length-1;d>0;d--){const u=Math.floor(Math.random()*(d+1)),p=e[d];e[d]=e[u],e[u]=p}let l=0;for(const d of this.dyingHunters)if(l<e.length){const u=e[l++];d.x=u.x,d.y=u.y,d.z=u.z,d.visualX=u.x,d.visualY=u.y,d.visualZ=u.z,d.lastPos={x:u.x,y:u.y,z:u.z},d.state="WANDERING",d.visitedNodes.clear(),d.visitedNodes.add(`${u.x},${u.y},${u.z}`),d.history=[],d.pathToTarget=[]}}triggerVictory(){this.isGameOver=!0,this.isTutorialMode||pl();let t=!1;if(this.isTutorialMode&&this.currentTutorialId){const i=Di.findIndex(n=>n.id===this.currentTutorialId);t=i!==-1&&i+1<Di.length}const e=this.getMapVisitedPercentage();this.ui.showVictory(e,this.deathsCount,this.degree,this.elapsedTime,this.manaCollected,this.totalMana,this.isTutorialMode,t)}triggerDeath(){this.isGameOver=!0,this.ui.showDeath(this.hasSavePoint)}collectKey(t,e,i){if(this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${t},${e},${i}`),this.keysCollected++,this.staticMapCacheDirty=!0,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.ui.showInfoBanner(Ot("msgKeySecured",{collected:this.keysCollected,total:this.totalKeys})),this.keysCollected===this.totalKeys&&(this.ui.showInfoBanner(Ot("msgExitUnlocked")),this.exitMesh)){this.exitMesh.material.color.setHex(X.COLORS.THREE_EXIT),this.exitMesh.material.emissive.setHex(X.COLORS.THREE_EXIT),this.exitMesh.material.emissiveIntensity=.5;const n=this.exitMesh.children[0];n&&this.exitMesh.remove(n)}}collectMana(t,e,i){this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${t},${e},${i}`),this.manaCollected++,this.staticMapCacheDirty=!0,this.ui.updateManaHUD(this.manaCollected,this.totalMana),this.ui.showInfoBanner(Ot("msgManaSecured",{collected:this.manaCollected,total:this.totalMana})),this.manaCollected%10===0&&(this.jellyPortalCount++,this.ui.updateJellyPortalHUD(this.jellyPortalCount),setTimeout(()=>{this.ui.showInfoBanner(Ot("msgJellyPortalEarned"))},1200))}triggerLockedExitWarning(){const t=Date.now();if(!this.lastLockedWarningTime||t-this.lastLockedWarningTime>1500){this.lastLockedWarningTime=t;const e=this.totalKeys-this.keysCollected;this.ui.showInfoBanner(Ot("msgKeysRemaining",{count:e}))}}restoreFromSave(t){this.seed=t.seed,pm(this.mazeGen,t.matrix),this.player.x=t.player.x,this.player.y=t.player.y,this.player.z=t.player.z,this.player.dir=t.player.dir;const e=this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.hunterBehavior&&this.currentTutorialStage.hunterBehavior.fixed;for(let d=0;d<this.hunters.length&&d<t.hunters.length;d++)if(e&&this.mazeGen.tutorialHunterSpawns&&this.mazeGen.tutorialHunterSpawns[d]){const u=this.mazeGen.tutorialHunterSpawns[d],p=this.hunters[d];p.x=u.x,p.y=u.y,p.z=u.z,p.visualX=u.x,p.visualY=u.y,p.visualZ=u.z,p.state="WANDERING",p.lastPos={x:u.x,y:u.y,z:u.z},p.visitedNodes.clear(),p.visitedNodes.add(`${u.x},${u.y},${u.z}`),p.history=[],p.pathToTarget=[],p.respawnThresholdPercentage=null}else fm(this.hunters[d],t.hunters[d]);this.discoveredTeleports=new Set(t.discoveredTeleports),this.inactiveTeleportPos=t.inactiveTeleportPos,this.teleportCooldownTicks=t.teleportCooldownTicks,this.allTeleports=[];const i=this.mazeGen.size,n=this.mazeGen.TYPES;for(let d=0;d<i;d++)for(let u=0;u<i;u++)for(let p=0;p<i;p++){const m=this.maze.get(p,u,d);(m===n.TELEPORT||m===n.JELLY_PORTAL)&&this.allTeleports.push({x:p,y:u,z:d})}this.allTeleports.sort((d,u)=>d.z!==u.z?d.z-u.z:d.y!==u.y?d.y-u.y:d.x-u.x);const a=Math.floor(this.player.x),r=Math.floor(this.player.y),o=this.player.z;this.selectedTeleportIndex=this.allTeleports.findIndex(d=>d.x===a&&d.y===r&&d.z===o),this.selectedTeleportIndex===-1&&(this.selectedTeleportIndex=0),this.keysCollected=t.keysCollected!==void 0?t.keysCollected:0,this.totalKeys=t.totalKeys!==void 0?t.totalKeys:X.getKeyCount(this.degree),this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.manaCollected=t.manaCollected!==void 0?t.manaCollected:0,this.totalMana=t.totalMana!==void 0?t.totalMana:0,this.ui.updateManaHUD(this.manaCollected,this.totalMana),this.jellyPortalCount=t.jellyPortalCount!==void 0?t.jellyPortalCount:this.totalMana<10?1:0,this.ui.updateJellyPortalHUD(this.jellyPortalCount),this.totalPathfinders=t.totalPathfinders!==void 0?t.totalPathfinders:X.getPathfinderCount(this.degree),this.pathfindersRemaining=t.pathfindersRemaining!==void 0?t.pathfindersRemaining:this.totalPathfinders,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders);const c=this.degree>=12?10:this.degree>=8?20:0,l=this.getMapVisitedPercentage();this.pathfinderRewardsGranted=t.pathfinderRewardsGranted!==void 0?t.pathfinderRewardsGranted:c>0?Math.floor(l/c):0,this.revealedPathSet=new Set(t.revealedPathSet),this.mapCompletion100Triggered=t.mapCompletion100Triggered||!1,this.dialogueUpTriggered=t.dialogueUpTriggered||!1,this.dialogueDownTriggered=t.dialogueDownTriggered||!1,this.dialogueWhichWayTriggered=t.dialogueWhichWayTriggered||!1,this.dialogueDetectedTriggered=t.dialogueDetectedTriggered||!1,this.deathsCount=t.deathsCount!==void 0?t.deathsCount:0,this.elapsedTime=t.elapsedTime!==void 0?t.elapsedTime:0,this.populateVisitedCells(),this.lastSavePos={x:t.player.x,y:t.player.y,z:t.player.z},this.hunterOnSameFloorDetected=t.hunterOnSameFloorDetected||!1,this.hasSavePoint=!0,this.lastPlayerCell={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.populateFullyRevealedCells(this.player.z),this.exitPathfinderUnlocked=this.checkExitNeighborVisited()}checkHunterCollision(){if(this.deathAnimation&&this.deathAnimation.active)return;const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=Math.floor(this.mazeGen.startPos.x),a=Math.floor(this.mazeGen.startPos.y),r=this.mazeGen.startPos.z,o=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===n&&this.inactiveTeleportPos.y===a&&this.inactiveTeleportPos.z===r;if(!(t===n&&e===a&&i===r&&!o)){for(const c of this.hunters)if(!(c.state==="SLEEP"||c.state==="DEAD_BY_JELLY")&&c.x===t&&c.y===e&&c.z===i){c.visualX=c.x,c.visualY=c.y,c.visualZ=c.z,this.isGameOver=!0,this.deathsCount++,this.hideGameUI(),this.ui.showInfoBanner(Ot("msgKeyDropped")),this.deathAnimation={active:!0,hunter:c,playerPos:{x:this.player.x,y:this.player.y,z:this.player.z},elapsed:0,duration:1.8,screenFilled:!1,reversing:!1,delayElapsed:0,delayDuration:1.5,glitchElapsed:0,glitchDuration:1.5,uiFade:0,uiTriggered:!1};return}}}hideGameUI(){this.ui.hideGameUI(),this.ui.hidePause(),this.canvas.classList.remove("hunted-map-effect"),this.isMap3DActive=!1}initThree(){this.scene=new jp,this.camera=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new ll({antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.appendChild(this.renderer.domElement),this.controls=new em(this.camera,this.renderer.domElement),this.controls.enableDamping=!0}init(t=null){this.handleKeyDownExtra=c=>{const l=c.key.toLowerCase();if(l==="escape"){if(this.isMap3DActive){this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D(),c.preventDefault();return}this.togglePause();return}if(!this.isPaused&&(l==="m"&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D()),l==="z"&&this.toggleZoom(),this.isMap3DActive&&!this.isIntroPlaying)){if(this.isTeleportMode){if(this.teleportConfirmModalActive){if((l==="a"||l==="arrowleft"||l==="d"||l==="arrowright")&&(this.teleportModalSelection=this.teleportModalSelection==="go"?"cancel":"go",c.preventDefault()),l==="enter"||l===" "||l==="y"){if(this.teleportModalSelection==="go"&&this.selectedTeleportIndex!==null){const u=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(u.x,u.y,u.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;c.preventDefault()}(l==="escape"||l==="backspace")&&(this.teleportConfirmModalActive=!1,c.preventDefault());return}const d=this.getSelectableTeleportIndices();if(d.length>0){let u=d.indexOf(this.selectedTeleportIndex);if(l==="a"||l==="arrowleft"){u=(u-1+d.length)%d.length,this.selectedTeleportIndex=d[u];const p=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=p.z,this.mapCursor={x:p.x,y:p.y,z:p.z},c.preventDefault()}if(l==="d"||l==="arrowright"){u=(u+1)%d.length,this.selectedTeleportIndex=d[u];const p=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=p.z,this.mapCursor={x:p.x,y:p.y,z:p.z},c.preventDefault()}if((l==="enter"||l===" "||l==="y")&&this.selectedTeleportIndex!==null){const p=this.allTeleports[this.selectedTeleportIndex],m=Math.floor(this.player.x),g=Math.floor(this.player.y),v=this.player.z,h=p&&p.x===m&&p.y===g&&p.z===v;p&&!h&&(this.teleportTo(p.x,p.y,p.z),this.toggleTeleportMap(!1)),c.preventDefault()}}(l==="escape"||l==="backspace")&&(this.toggleTeleportMap(!1),c.preventDefault());return}if((l==="q"||l==="pagedown")&&(this.activeMapFloor-2>=1&&(this.activeMapFloor-=2),c.preventDefault()),(l==="e"||l==="pageup")&&(this.activeMapFloor+2<=this.mazeGen.size-2&&(this.activeMapFloor+=2),c.preventDefault()),(l==="a"||l==="arrowleft")&&(this.navigateCursor("left"),c.preventDefault()),(l==="d"||l==="arrowright")&&(this.navigateCursor("right"),c.preventDefault()),(l==="w"||l==="arrowup")&&(this.navigateCursor("up"),c.preventDefault()),(l==="s"||l==="arrowdown")&&(this.navigateCursor("down"),c.preventDefault()),l==="enter"||l===" "||l==="y"){const d=this.mapCursor.x,u=this.mapCursor.y,p=this.mapCursor.z;this.getInteractiveElements(this.activeMapFloor).some(v=>v.x===d&&v.y===u&&v.z===p)&&this.triggerPathReveal(d,u,p),c.preventDefault()}}},this.handleResize=()=>this.resize(),this.handleKeyboardDetection=()=>{this.lastInputDevice!=="keyboard"&&(this.lastInputDevice="keyboard",this.ui.updateControlsHint("keyboard",this.mazeGen.size>11)),this.isMouseOrTouchDetected=!1},window.addEventListener("keydown",this.handleKeyDownExtra),window.addEventListener("keydown",this.handleKeyboardDetection),window.addEventListener("resize",this.handleResize);const e=document.getElementById("mobile-zoom-btn");e&&(e.onclick=c=>{c.stopPropagation(),!(Date.now()-this.lastTeleportCloseTime<500)&&this.toggleZoom()}),this.ui.uiMobileUp&&(this.ui.uiMobileUp.onclick=()=>{Date.now()-this.lastTeleportCloseTime<500||this.changeFloor(2)}),this.ui.uiMobileDown&&(this.ui.uiMobileDown.onclick=()=>{Date.now()-this.lastTeleportCloseTime<500||this.changeFloor(-2)}),this.ui.uiMobileMap&&(this.ui.uiMobileMap.onclick=()=>{if(Date.now()-this.lastTeleportCloseTime<500)return;if(this.isMap3DActive){this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D();return}const c=Math.floor(this.player.x),l=Math.floor(this.player.y),d=this.player.z,u=this.maze.get(c,l,d)===this.mazeGen.TYPES.JELLY_PORTAL,p=this.maze.get(c,l,d)===this.mazeGen.TYPES.TELEPORT||u,m=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===c&&this.inactiveTeleportPos.y===l&&this.inactiveTeleportPos.z===d;p&&!m?this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(Ot("msgNoOtherActiveTeleport")):this.toggleMap3D()});let i=!1,n=0,a=0;if(this.handlePointerDown=c=>{i=!1,n=c.clientX,a=c.clientY},this.handlePointerUp=c=>{const l=c.clientX-n,d=c.clientY-a;Math.sqrt(l*l+d*d)>5&&(i=!0)},this.handleCanvasClick=c=>{i||Date.now()-this.lastTeleportCloseTime<500||this.onCanvasClick(c)},this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerup",this.handlePointerUp),this.renderer.domElement.addEventListener("click",this.handleCanvasClick),this.resize(),this.updateFloorUI(),this.hideCanvasInstant(),t)this.restoreFromSave(t),this.playContinueAnimation();else if(this.isTutorialMode){this.isStoryActive=!1,this.isIntroPlaying=!1;const c=document.getElementById("map-area-container"),l=document.getElementById("left-hud-panel"),d=document.getElementById("right-hud-panel"),u=document.getElementById("bottom-hud-container");c&&c.classList.remove("hidden","intro-hidden"),l&&l.classList.remove("hidden","intro-hidden"),d&&d.classList.remove("hidden","intro-hidden"),u&&u.classList.remove("hidden","intro-hidden"),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1),this.ui.setMap3DVisible(!1),this.isMap3DActive=!1,this.staticMapCacheDirty=!0,this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2}else this.startStorytelling();this.loop();const r=this.mazeGen.size,o=document.getElementById("mobile-zoom-btn");r<=11?o&&o.classList.add("hidden"):o&&o.classList.remove("hidden"),this.ui.updateControlsHint(this.lastInputDevice,r>11)}hideCanvasInstant(){const t=document.getElementById("map-area-container"),e=document.getElementById("left-hud-panel"),i=document.getElementById("right-hud-panel"),n=document.getElementById("bottom-hud-container");t&&(t.style.transition="none",t.classList.remove("intro-reveal"),t.classList.add("intro-hidden"),t.offsetHeight,t.style.transition=""),e&&(e.style.transition="none",e.classList.remove("intro-reveal"),e.classList.add("intro-hidden"),e.offsetHeight,e.style.transition=""),i&&(i.style.transition="none",i.classList.remove("intro-reveal"),i.classList.add("intro-hidden"),i.offsetHeight,i.style.transition=""),n&&(n.style.transition="none",n.classList.remove("intro-reveal"),n.classList.add("intro-hidden"),n.offsetHeight,n.style.transition="")}drawElevator2D(t,e,i,n,a,r,o,c,l=!1,d=0){const u=e===Math.floor(o)&&i===Math.floor(c);if(u){const h=.85+.15*Math.sin(Date.now()/150);t.save(),t.globalAlpha=h}const p=a&&this.maze.get(e,i,d+1)===this.mazeGen.TYPES.ELEVATOR_VISITED,m=r&&this.maze.get(e,i,d-1)===this.mazeGen.TYPES.ELEVATOR_VISITED;if(l)if(a&&r){let h=!1,f=!1;if(this.activePathReveal){const y=this.activePathReveal.findIndex(M=>M.x===e&&M.y===i&&M.z===d);if(y!==-1&&y<this.activePathReveal.length-1){const M=this.activePathReveal[y+1];M.z>d&&(h=!0),M.z<d&&(f=!0)}}!h&&!f&&(h=this.revealedPathSet.has(`${e},${i},${d+1}`)||this.revealedPathSet.has(`${e},${i},${d+2}`),f=this.revealedPathSet.has(`${e},${i},${d-1}`)||this.revealedPathSet.has(`${e},${i},${d-2}`));const T=h||!h&&!f,_=f||!h&&!f;t.fillStyle=T?X.COLORS.REVEALED_PATH:p?X.COLORS.NEON_UP:X.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n/2),t.fillStyle=_?X.COLORS.REVEALED_PATH:m?X.COLORS.NEON_DOWN:X.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n+n/2,n,n/2)}else t.fillStyle=X.COLORS.REVEALED_PATH,t.fillRect(e*n,i*n,n,n);else a&&r?(t.fillStyle=p?X.COLORS.NEON_UP:X.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n/2),t.fillStyle=m?X.COLORS.NEON_DOWN:X.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n+n/2,n,n/2)):a?(t.fillStyle=p?X.COLORS.NEON_UP:X.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n)):(t.fillStyle=m?X.COLORS.NEON_DOWN:X.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n,n,n));const g=e*n+n/2,v=i*n+n/2;if(t.fillStyle="#000000",a&&r){const h=n*.28,f=v-n/5,T=v+n/5;t.beginPath(),t.moveTo(g,f-h/2),t.lineTo(g-h*.6,f+h/2),t.lineTo(g+h*.6,f+h/2),t.closePath(),t.fill(),t.beginPath(),t.moveTo(g,T+h/2),t.lineTo(g-h*.6,T-h/2),t.lineTo(g+h*.6,T-h/2),t.closePath(),t.fill()}else if(a){const h=n*.45;t.beginPath(),t.moveTo(g,v-h/2),t.lineTo(g-h*.6,v+h/2),t.lineTo(g+h*.6,v+h/2),t.closePath(),t.fill()}else{const h=n*.45;t.beginPath(),t.moveTo(g,v+h/2),t.lineTo(g-h*.6,v-h/2),t.lineTo(g+h*.6,v-h/2),t.closePath(),t.fill()}u&&t.restore()}drawCellShadow2D(t,e,i,n,a,r,o){if(r===4)return;const c=(p,m)=>p<0||p>=a||m<0||m>=a?!1:this.isWallVisible(p,m,o),l=c(e,i+1),d=c(e+1,i),u=c(e+1,i+1);if(l||d||u){t.fillStyle="rgba(0, 0, 0, 0.4)";const p=n*X.SHADOW_SIZE_FACTOR;if(l&&t.fillRect(e*n,(i+1)*n-p,n,p),d){const m=l?n-p:n;t.fillRect((e+1)*n-p,i*n,p,m)}!l&&!d&&u&&t.fillRect((e+1)*n-p,(i+1)*n-p,p,p)}}updateRendererSize(){this.renderer&&(this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix())}resize(){const e=window.innerHeight>window.innerWidth?window.innerWidth*.82:window.innerHeight*.75;this.canvas.width=e,this.canvas.height=e,this.staticMapCacheDirty=!0,this.updateRendererSize()}getMapVisitedPercentage(){let t=0,e=0;const i=this.mazeGen.size,n=this.mazeGen.TYPES;for(let a=0;a<i;a++)for(let r=0;r<i;r++)for(let o=0;o<i;o++){const c=this.maze.get(a,r,o);if(c===n.WALL||c===n.EXIT||c===n.STATUE)continue;t++,(c===n.VISITED||c===n.START||c===n.ELEVATOR_VISITED||c===n.TELEPORT&&this.discoveredTeleports.has(`${a},${r},${o}`))&&e++}return t===0?0:Math.floor(e/t*100)}updateFloorUI(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=i+1<this.mazeGen.size&&this.maze.get(t,e,i+1)!==this.mazeGen.TYPES.WALL,a=i-1>=0&&this.maze.get(t,e,i-1)!==this.mazeGen.TYPES.WALL;this.ui.updateFloor(i,n,a);const r=this.getMapVisitedPercentage();this.ui.updateVisitedPercent(r),r===100&&!this.mapCompletion100Triggered&&(this.ui.showInfoBanner(Ot("msgWorldSaved")),this.mapCompletion100Triggered=!0),this.checkPathfinderRewards(r)}checkPathfinderRewards(t){const e=this.degree>=12?10:this.degree>=8?20:0;if(e===0)return;this.pathfinderRewardsGranted===void 0&&(this.pathfinderRewardsGranted=0);const i=Math.floor(t/e);if(i>this.pathfinderRewardsGranted){const n=i-this.pathfinderRewardsGranted;this.pathfindersRemaining+=n,this.totalPathfinders+=n,this.pathfinderRewardsGranted=i,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),this.ui.showInfoBanner(Ot("msgFoundPathfinder")),os(this)}}getTeleportCandidates(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z;return Array.from(this.discoveredTeleports).map(n=>{const[a,r,o]=n.split(",").map(Number);return{x:a,y:r,z:o}}).filter(n=>!(n.x===t&&n.y===e&&n.z===i||this.inactiveTeleportPos&&this.inactiveTeleportPos.x===n.x&&this.inactiveTeleportPos.y===n.y&&this.inactiveTeleportPos.z===n.z))}getSelectableTeleportIndices(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z;return this.allTeleports.map((n,a)=>({t:n,idx:a})).filter(n=>{const a=`${n.t.x},${n.t.y},${n.t.z}`,r=this.discoveredTeleports.has(a),o=this.inactiveTeleportPos&&n.t.x===this.inactiveTeleportPos.x&&n.t.y===this.inactiveTeleportPos.y&&n.t.z===this.inactiveTeleportPos.z,c=n.t.x===t&&n.t.y===e&&n.t.z===i;return r&&!o&&!c}).map(n=>n.idx)}updateGamepad(t){const e=navigator.getGamepads?navigator.getGamepads():[],i=e[0]||e.find(v=>v!==null);if(!i)return;const n=.25;(Math.abs(i.axes[0])>n||Math.abs(i.axes[1])>n||i.axes[2]!==void 0&&Math.abs(i.axes[2])>n||i.axes[3]!==void 0&&Math.abs(i.axes[3])>n||i.buttons.some(v=>v.pressed))&&(this.isMouseOrTouchDetected=!1,this.lastInputDevice!=="gamepad"&&(this.lastInputDevice="gamepad",this.ui.updateControlsHint("gamepad",this.mazeGen.size>11)));const r=i.axes[0],o=i.axes[1];let c=r<-n,l=r>n,d=o<-n,u=o>n;if(i.buttons[12]&&i.buttons[12].pressed&&(d=!0),i.buttons[13]&&i.buttons[13].pressed&&(u=!0),i.buttons[14]&&i.buttons[14].pressed&&(c=!0),i.buttons[15]&&i.buttons[15].pressed&&(l=!0),c?this.input.keys.arrowleft=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowleft=!1),l?this.input.keys.arrowright=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowright=!1),d?this.input.keys.arrowup=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowup=!1),u?this.input.keys.arrowdown=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowdown=!1),!this.prevGamepadButtons){this.prevGamepadButtons=i.buttons.map(v=>v.pressed);return}const p=v=>this.prevGamepadButtons[v],m=v=>i.buttons[v]&&i.buttons[v].pressed,g=v=>m(v)&&!p(v);if(this.isStoryActive){if(g(9))this.skipStory();else if(!this.isPreloadingActive){for(let v=0;v<i.buttons.length;v++)if(v!==9&&g(v)){this.triggerAdvanceStory();break}}this.prevGamepadButtons=i.buttons.map(v=>v.pressed);return}if(g(9)){this.togglePause(),this.prevGamepadButtons=i.buttons.map(v=>v.pressed);return}if(this.isPaused){this.prevGamepadButtons=i.buttons.map(v=>v.pressed);return}if(this.isMap3DActive&&!this.isIntroPlaying){const v=m(7),h=m(6);if(v||h){const M=this.mazeGen.size;let S=window.innerWidth*.7/M;S=Math.max(20,Math.min(48,S));const x=S*this.mapZoom,z=x/2,E=x/4,A=z*5,F=window.innerWidth/2+this.mapPanOffsetX,U=window.innerHeight/2+this.mapPanOffsetY,K=this.mapCursor.x,R=this.mapCursor.y,N=this.mapCursor.z,k=this.visualActiveFloor,W=(K-R)*z+F,H=(K+R)*E-(N-k)*A+U,q=this.mapZoom,Q=1.025;let it=v?q*Q:q/Q;if(it=Math.max(.5,Math.min(4,it)),it!==q){const J=it/q;this.mapPanOffsetX=W-(W-(window.innerWidth/2+this.mapPanOffsetX))*J-window.innerWidth/2,this.mapPanOffsetY=H-(H-(window.innerHeight/2+this.mapPanOffsetY))*J-window.innerHeight/2,this.mapZoom=it}}const f=c&&(!this.prevGamepadStick||!this.prevGamepadStick.left),T=l&&(!this.prevGamepadStick||!this.prevGamepadStick.right),_=d&&(!this.prevGamepadStick||!this.prevGamepadStick.up),y=u&&(!this.prevGamepadStick||!this.prevGamepadStick.down);if(this.prevGamepadStick={left:c,right:l,up:d,down:u},this.isTeleportMode){if(this.teleportConfirmModalActive){if((f||g(14)||T||g(15))&&(this.teleportModalSelection=this.teleportModalSelection==="go"?"cancel":"go"),g(0)||g(3)||g(2))if(this.teleportModalSelection==="go"){const M=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(M.x,M.y,M.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;g(1)&&(this.teleportConfirmModalActive=!1)}else{const M=this.getSelectableTeleportIndices();if(M.length>0){let S=M.indexOf(this.selectedTeleportIndex);if(f||g(14)){S=(S-1+M.length)%M.length,this.selectedTeleportIndex=M[S];const x=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=x.z,this.mapCursor={x:x.x,y:x.y,z:x.z}}if(T||g(15)){S=(S+1)%M.length,this.selectedTeleportIndex=M[S];const x=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=x.z,this.mapCursor={x:x.x,y:x.y,z:x.z}}if(g(0)||g(3)||g(2)){const x=this.allTeleports[this.selectedTeleportIndex],z=Math.floor(this.player.x),E=Math.floor(this.player.y),A=this.player.z,F=x&&x.x===z&&x.y===E&&x.z===A;x&&!F&&(this.teleportTo(x.x,x.y,x.z),this.toggleTeleportMap(!1))}}(g(1)||g(8))&&this.toggleTeleportMap(!1)}this.prevGamepadButtons=i.buttons.map(M=>M.pressed);return}if((f||g(14))&&this.navigateCursor("left"),(T||g(15))&&this.navigateCursor("right"),(_||g(12))&&this.navigateCursor("up"),(y||g(13))&&this.navigateCursor("down"),(g(0)||g(4))&&this.activeMapFloor-2>=1&&(this.activeMapFloor-=2),g(5)&&this.activeMapFloor+2<=this.mazeGen.size-2&&(this.activeMapFloor+=2),g(3)||g(2)){const M=this.mapCursor.x,S=this.mapCursor.y,x=this.mapCursor.z;this.getInteractiveElements(this.activeMapFloor).some(A=>A.x===M&&A.y===S&&A.z===x)&&this.triggerPathReveal(M,S,x)}(g(1)||g(8))&&this.toggleMap3D(),this.prevGamepadButtons=i.buttons.map(M=>M.pressed);return}if(g(0)){if(this.isTeleportMode){const h=this.getTeleportCandidates()[this.gamepadTeleportSelectedIndex];h&&this.teleportTo(h.x,h.y,h.z)}else if(!this.isMap3DActive){const v=Math.floor(this.player.x),h=Math.floor(this.player.y),f=this.player.z,T=f>0&&this.maze.get(v,h,f-1)!==0,y=this.maze.get(v,h,f)===this.mazeGen.TYPES.TELEPORT,M=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===v&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===f;(!(y&&this.discoveredTeleports.has(`${v},${h},${f}`))||M)&&T&&this.changeFloor(-2)}}if(g(1)&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleZoom()),g(2)&&!this.isTeleportMode&&!this.isMap3DActive){const v=Math.floor(this.player.x),h=Math.floor(this.player.y),f=this.player.z,T=this.maze.get(v,h,f),_=T===this.mazeGen.TYPES.JELLY_PORTAL,y=T===this.mazeGen.TYPES.TELEPORT||_,M=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===v&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===f;y&&this.discoveredTeleports.has(`${v},${h},${f}`)&&!M&&(this.discoveredTeleports.size>=2?(this.toggleTeleportMap(!0),this.gamepadTeleportSelectedIndex=0):this.ui.showInfoBanner(Ot("msgNoOtherActiveTeleport")))}if(g(3)&&!this.isTeleportMode&&!this.isMap3DActive){const v=Math.floor(this.player.x),h=Math.floor(this.player.y),f=this.player.z,T=f<this.mazeGen.size-1&&this.maze.get(v,h,f+1)!==0,y=this.maze.get(v,h,f)===this.mazeGen.TYPES.TELEPORT,M=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===v&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===f;(!(y&&this.discoveredTeleports.has(`${v},${h},${f}`))||M)&&T&&this.changeFloor(2)}if(g(8)&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D()),this.isTeleportMode){const v=g(4)||g(14),h=g(5)||g(15);if(v||h){const f=this.getTeleportCandidates();f.length>0&&(v?this.gamepadTeleportSelectedIndex=(this.gamepadTeleportSelectedIndex-1+f.length)%f.length:this.gamepadTeleportSelectedIndex=(this.gamepadTeleportSelectedIndex+1)%f.length)}}if(g(5)&&!this.isTeleportMode&&!this.isMap3DActive&&this.tryActivateJellyPortal(),this.isMap3DActive&&this.controls){const v=i.axes[2],h=i.axes[3],f=i.buttons[7]?i.buttons[7].value:0,T=i.buttons[6]?i.buttons[6].value:0,_=.15,y=.15,M=(X.ROT_SPEED!==void 0?X.ROT_SPEED:2)*t,S=20*t,x=Math.abs(v)>_||Math.abs(h)>_,z=f>y||T>y;if(x||z){const E=new Z().copy(this.camera.position).sub(this.controls.target),A=new xa().setFromVector3(E);if(Math.abs(v)>_&&(A.theta-=v*M),Math.abs(h)>_){A.phi-=h*M;const K=this.controls.minPolarAngle||0,R=this.controls.maxPolarAngle||Math.PI;A.phi=Math.max(K,Math.min(R,A.phi))}f>y&&(A.radius-=f*S),T>y&&(A.radius+=T*S);const F=this.controls.minDistance||2,U=this.controls.maxDistance||100;A.radius=Math.max(F,Math.min(U,A.radius)),A.makeSafe(),E.setFromSpherical(A),this.camera.position.copy(this.controls.target).add(E),this.controls.update()}}this.prevGamepadButtons=i.buttons.map(v=>v.pressed)}queueNotification(t){this.notificationQueue.push(t)}updateNotification(t){if(!this.activeNotification){if(this.notificationQueue.length>0){const i=this.notificationQueue.shift();this.activeNotification={text:i,displayText:"",state:"OPENING",widthProgress:0,typeTimer:0,charIndex:0,waitTimer:0,closeProgress:1}}return}const e=this.activeNotification;e.state==="OPENING"?(e.widthProgress+=t/.15,e.widthProgress>=1&&(e.widthProgress=1,e.state="TYPING")):e.state==="TYPING"?(e.typeTimer+=t,e.typeTimer>=.025&&(e.typeTimer=0,e.charIndex++,e.displayText=e.text.substring(0,e.charIndex),e.charIndex>=e.text.length&&(e.state="WAITING",e.waitTimer=0))):e.state==="WAITING"?(this.isZoomTransitionActive||(e.waitTimer+=t),e.waitTimer>=1&&(e.state="CLOSING",e.closeProgress=1)):e.state==="CLOSING"&&(e.closeProgress-=t/.15,e.closeProgress<=0&&(e.closeProgress=0,this.activeNotification=null))}update(t){if(this.isGameOver||this.isDestroyed||!t)return;if(this.jellyPortalFreezeTimer>0){this.jellyPortalFreezeTimer-=t,this.jellyPortalResetElapsed+=t,this.jellyPortalFreezeTimer<=0&&(this.jellyPortalFreezeTimer=0,this.executeJellyPortalReset(Math.floor(this.player.x),Math.floor(this.player.y),this.player.z),this.jellyPortalResetCells.clear()),this.updateNotification(t),this.updateGamepad(t);return}if(!this.isPaused&&!this.isIntroPlaying&&!this.isStoryActive&&(this.elapsedTime+=t),this.isStoryActive){this.updateGamepad(t),this.updateStory(t);return}if(this.isZoomTransitionActive&&(this.zoomTransitionTimer-=t,this.zoomTransitionTimer<=0&&(this.isZoomTransitionActive=!1,this.zoomTransitionTimer=0)),this.updateNotification(t),this.updateGamepad(t),this.isPaused)return;this.isIntroPlaying||this.hunters.some(c=>c.state!=="SLEEP"&&c.z===this.player.z)&&(this.hunterOnSameFloorDetected||(this.ui.showInfoBanner(Ot("msgDidYouHearThat")),this.hunterOnSameFloorDetected=!0)),this.hunters.some(o=>o.state==="SLEEP")&&this.getMapVisitedPercentage()>=10&&this.wakeHunters();const e=this.getMapVisitedPercentage(),i=this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.hunterBehavior&&this.currentTutorialStage.hunterBehavior.respawn===!1;for(const o of this.hunters)o.state==="DEAD_BY_JELLY"&&o.respawnThresholdPercentage!==null&&!i&&e>=o.respawnThresholdPercentage&&(this.respawnSingleHunter(o),this.ui.showInfoBanner(Ot("msgHunterReturned")));const a=1e3/X.HUNTER_SPEED*t;for(const o of this.hunters)o.visualX===null&&(o.visualX=o.x),o.visualY===null&&(o.visualY=o.y),o.visualZ===null&&(o.visualZ=o.z),!(o.state==="DEAD_BY_JELLY"||o.x===null||o.y===null||o.z===null)&&(o.visualX=la(o.visualX,o.x,a),o.visualY=la(o.visualY,o.y,a),o.visualZ=la(o.visualZ,o.z,a*2),o.generateCloudTexture(t));if(this.isMap3DActive){this.controls&&this.controls.update();const o=this.mazeGen.size,c=this.isTeleportMode?.25:1;for(const l of this.hunterMeshes){const d=l.hunter,u=l.mesh;if(d.state==="DEAD_BY_JELLY"){u.visible=!1;continue}if(u.visible=!0,d.visualX===null||d.visualZ===null||d.visualY===null)continue;u.position.set(d.visualX-o/2,(d.visualZ-o/2)*this.vScale,d.visualY-o/2);const p=d.jellyTime;let m=1+Math.sin(p*1.2)*.07,g=1+Math.cos(p*.8)*.07,v=1+Math.sin(p*1.5)*.07;if(d.state==="DYING"){const M=1-Math.min(1,this.jellyPortalResetElapsed/this.jellyPortalResetDuration);m*=M,g*=M,v*=M;const S=(Math.random()-.5)*.15,x=(Math.random()-.5)*.15,z=(Math.random()-.5)*.15;u.position.add({x:S,y:x,z})}if(l.coreMesh&&(l.coreMesh.scale.set(m,g,v),l.coreMesh.material)){let y=(.8+.2*Math.sin(p*3)+(Math.random()<.1?(Math.random()-.5)*.4:0))*c;if(d.state==="DYING"){const M=Math.min(1,this.jellyPortalResetElapsed/this.jellyPortalResetDuration);y*=1-M}l.coreMesh.material.emissiveIntensity=y}l.particles&&l.particles.forEach(y=>{const M=y.userData;M.angle+=M.speed*t;const S=Math.cos(M.angle)*M.radius,x=Math.sin(M.angle)*M.radius,z=Math.sin(M.angle*2+M.phaseY)*.25;let E=0,A=0,F=0;Math.random()<.15?(E=(Math.random()-.5)*.12,A=(Math.random()-.5)*.12,F=(Math.random()-.5)*.12,y.scale.set(1.4+Math.random()*.4,.6+Math.random()*.3,1.4+Math.random()*.4)):y.scale.set(1,1,1),y.position.set(S+E,z+A,x+F)});const h=d.x-d.visualX,f=d.y-d.visualY,T=Math.sqrt(h*h+f*f),_=Math.max(0,Math.min(1,1-T));if(d.lastPos&&(d.lastPos.x!==d.x||d.lastPos.y!==d.y)){l.trail1.position.set(d.lastPos.x-o/2,(d.lastPos.z-o/2)*this.vScale,d.lastPos.y-o/2),l.trail1.visible=!0;const y=d.jellyTime-.2,M=.95-_*.47,S=M*(1+Math.sin(y*1.2)*.07),x=M*(1+Math.cos(y*.8)*.07),z=M*(1+Math.sin(y*1.5)*.07);l.trail1.scale.set(S,x,z),l.trail1.material&&(l.trail1.material.opacity=(.4-_*.2)*c)}else l.trail1.visible=!1;if(d.history&&d.history.length===2){const y=d.history[0];l.trail2.position.set(y.x-o/2,(y.z-o/2)*this.vScale,y.y-o/2);const M=.48*(1-_);if(M>.02){l.trail2.visible=!0;const S=d.jellyTime-.4,x=M*(1+Math.sin(S*1.2)*.07),z=M*(1+Math.cos(S*.8)*.07),E=M*(1+Math.sin(S*1.5)*.07);l.trail2.scale.set(x,z,E),l.trail2.material&&(l.trail2.material.opacity=.2*(1-_)*c)}else l.trail2.visible=!1}else l.trail2.visible=!1}if(this.keyMeshes)for(const l of this.keyMeshes)l.rotation.y+=1.5*t,l.rotation.x+=.5*t;if(this.isTeleportMode&&this.teleportMeshes&&this.gamepadTeleportSelectedIndex!==void 0){const d=this.getTeleportCandidates()[this.gamepadTeleportSelectedIndex];this.teleportMeshes.forEach(u=>{const{gridX:p,gridY:m,gridZ:g}=u.userData;if(d&&p===d.x&&m===d.y&&g===d.z){const h=1.3+.25*Math.sin(Date.now()/100);u.scale.set(h,h,h),u.material&&u.material.emissive&&(u.material.emissive.setHex(16755200),u.material.emissiveIntensity=3.5)}else{const h=p===Math.floor(this.player.x)&&m===Math.floor(this.player.y)&&g===this.player.z,f=this.teleportCooldownTicks>0;let T=1;if(h&&(T=1.4),u.scale.set(T,T,T),u.material&&u.material.emissive)if(f)u.material.color.setHex(4473924),u.material.emissive.setHex(4473924),u.material.emissiveIntensity=0,u.material.opacity=.4;else if(h)u.material.color.setHex(65535),u.material.emissive.setHex(65535),u.material.emissiveIntensity=3,u.material.opacity=.5;else if(p===Math.floor(this.mazeGen.startPos.x)&&m===Math.floor(this.mazeGen.startPos.y)&&g===this.mazeGen.startPos.z)u.material.color.setHex(X.COLORS.THREE_START),u.material.emissive.setHex(X.COLORS.THREE_START),u.material.emissiveIntensity=this.isTeleportMode?2.5:.5,u.material.opacity=this.isTeleportMode?.95:.8;else{const M=this.maze.get(p,m,g)===this.mazeGen.TYPES.JELLY_PORTAL?X.COLORS.THREE_JELLY_PORTAL:X.COLORS.THREE_TELEPORT;u.material.color.setHex(M),u.material.emissive.setHex(M),u.material.emissiveIntensity=2.5,u.material.opacity=.95}}})}}if(!this.isMap3DActive&&!this.isZoomTransitionActive){let o=0,c=0;const u=1e3/X.HUNTER_SPEED*X.MOVE_SPEED_FACTOR*t;let p=0,m=0;if(this.input.touchMoveVector?(p=this.input.touchMoveVector.x,m=this.input.touchMoveVector.y):((this.input.keys.w||this.input.keys.arrowup)&&(m-=1),(this.input.keys.s||this.input.keys.arrowdown)&&(m+=1),(this.input.keys.a||this.input.keys.arrowleft)&&(p-=1),(this.input.keys.d||this.input.keys.arrowright)&&(p+=1)),p!==0||m!==0){const x=Math.sqrt(p*p+m*m);o=p/x*u,c=m/x*u,this.player.dir=Math.atan2(c,o)}let g=!1;if(o!==0||c!==0){g=!0;const x=.01,z=Math.abs(o)>x,E=Math.abs(c)>x;z&&E?(this.playerSide=o>0?"right":"left",this.playerVertical=c>0?"down":"up"):z?this.playerSide=o>0?"right":"left":E&&(this.playerVertical=c>0?"down":"up")}if(g?(this.playerWalkCycle=(this.playerWalkCycle||0)+t*18,this.playerSquashTargetX=1+Math.sin(this.playerWalkCycle)*.15,this.playerSquashTargetY=1-Math.sin(this.playerWalkCycle)*.15):(this.playerSquashTargetX=1,this.playerSquashTargetY=1),this.playerSquashX=this.playerSquashX||1,this.playerSquashY=this.playerSquashY||1,this.playerSquashX+=(this.playerSquashTargetX-this.playerSquashX)*.25,this.playerSquashY+=(this.playerSquashTargetY-this.playerSquashY)*.25,o!==0||c!==0){const x=Math.floor(this.player.x),z=Math.floor(this.player.y),E=this.player.x+o,A=this.player.y+c,F=(J,B,et)=>{const ot=this.maze.get(J,B,et);return ot===this.mazeGen.TYPES.WALL||ot===this.mazeGen.TYPES.STATUE?!1:ot===this.mazeGen.TYPES.EXIT&&this.keysCollected<this.totalKeys?(this.triggerLockedExitWarning(),!1):!0},U=X.PLAYER_COLLISION_RADIUS,K=X.PLAYER_COLLISION_OFFSET_X||0,R=X.PLAYER_COLLISION_OFFSET_Y||0,N=(J,B,et)=>{const ot=Math.floor(J+K-U),Mt=Math.floor(J+K+U),w=Math.floor(B+R-U),D=Math.floor(B+R+U);for(let $=ot;$<=Mt;$++)for(let V=w;V<=D;V++)if($<0||$>=this.mazeGen.size||V<0||V>=this.mazeGen.size||!F($,V,et))return!1;return!0};N(E,this.player.y,this.player.z)&&(this.player.x=E),N(this.player.x,A,this.player.z)&&(this.player.y=A);const k=Math.floor(this.player.x),W=Math.floor(this.player.y),H=this.player.z;if(k!==x||W!==z){const J=this.maze.get(x,z,H);if(J===this.mazeGen.TYPES.VISITED||J===this.mazeGen.TYPES.START||J===this.mazeGen.TYPES.TELEPORT){const et=H+1<this.mazeGen.size&&this.maze.get(k,W,H+1)!==this.mazeGen.TYPES.WALL,ot=H-1>=0&&this.maze.get(k,W,H-1)!==this.mazeGen.TYPES.WALL;et&&ot?this.dialogueWhichWayTriggered||(this.ui.showInfoBanner(Ot("msgWhichWay")),this.dialogueWhichWayTriggered=!0):et?this.dialogueUpTriggered||(this.ui.showInfoBanner(Ot("msgElevatorUp")),this.dialogueUpTriggered=!0):ot&&(this.dialogueDownTriggered||(this.ui.showInfoBanner(Ot("msgElevatorDown")),this.dialogueDownTriggered=!0))}}const Q=(J,B,et)=>{const ot=this.maze.get(J,B,et);(ot===this.mazeGen.TYPES.PATH||ot===this.mazeGen.TYPES.KEY||ot===this.mazeGen.TYPES.MANA)&&(ot===this.mazeGen.TYPES.KEY?this.collectKey(J,B,et):ot===this.mazeGen.TYPES.MANA?this.collectMana(J,B,et):(this.maze.set(J,B,et,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${J},${B},${et}`)),this.staticMapCacheDirty=!0)};Q(k,W,H),k!==x&&W!==z&&(Q(k,z,H),Q(x,W,H));const it=this.maze.get(k,W,H);!this.exitPathfinderUnlocked&&this.checkExitNeighborVisited()&&(this.exitPathfinderUnlocked=!0,this.ui.showInfoBanner(Ot("msgExitFound"))),it===this.mazeGen.TYPES.EXIT&&this.triggerVictory()}if((o!==0||c!==0)&&(this.skipCellAnimations=!1),this.checkHunterCollision(),this.isGameOver)return;const v=Math.floor(this.player.x),h=Math.floor(this.player.y),f=this.player.z,T=this.maze.get(v,h,f)===this.mazeGen.TYPES.JELLY_PORTAL,_=this.maze.get(v,h,f)===this.mazeGen.TYPES.TELEPORT||T,y=this.teleportCooldownTicks>0;if(v>=0&&v<this.mazeGen.size&&h>=0&&h<this.mazeGen.size){if(this.maze.get(v,h,f)===this.mazeGen.TYPES.PATH)this.maze.set(v,h,f,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${v},${h},${f}`),this.staticMapCacheDirty=!0;else if(_){const F=`${v},${h},${f}`;!(this.lastPlayerCell&&this.lastPlayerCell.x===v&&this.lastPlayerCell.y===h&&this.lastPlayerCell.z===f)&&!y&&(this.discoveredTeleports.add(F),this.staticMapCacheDirty=!0,T?(this.triggerSave(),this.ui.showInfoBanner(Ot("msgJellyPortalNotSafe"))):(this.triggerSave(),this.ui.showInfoBanner(Ot("msgSafePointTeleport"))))}const x=f<this.mazeGen.size-1&&this.maze.get(v,h,f+1)!==this.mazeGen.TYPES.WALL,z=f>0&&this.maze.get(v,h,f-1)!==this.mazeGen.TYPES.WALL,E=x||z;if(this.lastPlayerCell){const F=this.lastPlayerCell.x,U=this.lastPlayerCell.y,K=this.lastPlayerCell.z,R=K<this.mazeGen.size-1&&this.maze.get(F,U,K+1)!==this.mazeGen.TYPES.WALL,N=K>0&&this.maze.get(F,U,K-1)!==this.mazeGen.TYPES.WALL;if((R||N)&&(F!==v||U!==h||K!==f)){const H=`${F},${U},${K}`;this.revealedPathSet.has(H)&&(this.revealedPathSet.delete(H),this.staticMapCacheDirty=!0)}}const A=`${v},${h},${f}`;!E&&this.revealedPathSet.has(A)&&(this.revealedPathSet.delete(A),this.staticMapCacheDirty=!0)}_&&!y?(this.input.keys.e||this.input.keys.pageup||this.input.keys.q||this.input.keys.pagedown)&&(["e","q","pageup","pagedown"].forEach(x=>this.input.keys[x]=!1),this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(Ot("msgNoOtherActiveTeleport"))):((this.input.keys.e||this.input.keys.pageup)&&this.changeFloor(2),(this.input.keys.q||this.input.keys.pagedown)&&this.changeFloor(-2)),this.input.keys.r&&(this.input.keys.r=!1,this.tryActivateJellyPortal()),(!this.lastPlayerCell||this.lastPlayerCell.x!==v||this.lastPlayerCell.y!==h||this.lastPlayerCell.z!==f)&&(this.staticMapCacheDirty=!0);const S=window.innerHeight>window.innerWidth;this.ui.updateMobileMapButton(_,!!y,S,T),this.updateFloorUI(),this.lastPlayerCell={x:v,y:h,z:f}}const r=performance.now();if(r-this.lastHunterMove>X.HUNTER_SPEED){if(this.lastHunterMove=r,this.teleportCooldownTicks>0&&(this.teleportCooldownTicks--,this.staticMapCacheDirty=!0,this.teleportCooldownTicks===0)){this.inactiveTeleportPos=null;for(const h of this.hunters){if(h.state==="DEAD_BY_JELLY")continue;const f=this.maze.get(h.x,h.y,h.z);if(f===this.mazeGen.TYPES.VISITED||f===this.mazeGen.TYPES.START||f===this.mazeGen.TYPES.EXIT){const T=h.state;h.state="TRACKING",T!=="TRACKING"&&!this.dialogueDetectedTriggered&&(this.ui.showInfoBanner(Ot("msgIWasDetected")),this.dialogueDetectedTriggered=!0)}else h.state="WANDERING",h.pathToTarget=[],h.visitedNodes.clear(),h.visitedNodes.add(`${h.x},${h.y},${h.z}`)}}let o=0,c=0;const l=this.hunters.some(h=>h.state==="SLEEP");for(const h of this.hunters){if(h.state==="SLEEP"||h.state==="DEAD_BY_JELLY"||h.state==="DYING")continue;if(this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.hunterBehavior&&this.currentTutorialStage.hunterBehavior.static){if(this.checkHunterCollision(),this.isGameOver)return;continue}const T=h.state;h.move(this.player,this.maze,this.mazeGen.TYPES),h.state==="TRACKING"&&T!=="TRACKING"&&!this.dialogueDetectedTriggered&&(this.ui.showInfoBanner(Ot("msgIWasDetected")),this.dialogueDetectedTriggered=!0),(h.state==="TRACKING"||h.state==="TELEPORT_TRACKING")&&o++;const _=h.z===this.player.z;let y=!1;if(_)y=!0;else{const M=Math.max(5,Math.floor(this.degree*1.2));am({x:h.x,y:h.y,z:h.z},{x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.maze,this.mazeGen.size,this.mazeGen.TYPES.WALL,M,this.mazeGen.startPos)<=M&&(y=!0)}if(y&&c++,this.checkHunterCollision(),this.isGameOver)return}const d=o>0;this.ui.updateHazardWarning(d,this.teleportCooldownTicks,this.isSafeMode,l),d?this.canvas.classList.add("hunted-map-effect"):this.canvas.classList.remove("hunted-map-effect"),this.ui.setNearbyWarning(c>0);let u=1/0;const p=Math.floor(this.player.x),m=Math.floor(this.player.y),g=this.player.z,v=this.hunters.filter(h=>h.state!=="SLEEP");for(const h of v){const f=om({x:h.x,y:h.y,z:h.z},{x:p,y:m,z:g},this.maze,this.mazeGen.size,this.mazeGen.TYPES.WALL);f<u&&(u=f)}this.ui.updateProximeter(u,v.length,this.isGameOver)}}changeFloor(t){if(this.isGameOver||this.floorTransition)return;this.skipCellAnimations=!0;const e=Math.floor(this.player.x),i=Math.floor(this.player.y),n=this.player.z,a=n+1<this.mazeGen.size&&this.maze.get(e,i,n+1)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,n+1)!==this.mazeGen.TYPES.STATUE,r=n-1>=0&&this.maze.get(e,i,n-1)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,n-1)!==this.mazeGen.TYPES.STATUE;if(t>0&&a||t<0&&r){const o=n+t;if(o>=0&&o<this.mazeGen.size&&this.maze.get(e,i,o)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,o)!==this.mazeGen.TYPES.STATUE){const c=n+t/2;this.maze.get(e,i,c)!==this.mazeGen.TYPES.ELEVATOR_VISITED&&(this.maze.set(e,i,c,this.mazeGen.TYPES.ELEVATOR_VISITED),this.staticMapCacheDirty=!0);const l=`${e},${i},${c}`;this.revealedPathSet.delete(l);const d=document.createElement("canvas");d.width=this.canvas.width,d.height=this.canvas.height;const u=d.getContext("2d");this.renderMapToContext(u,this.player.z),this.player.x=e+X.PLAYER_START_X,this.player.y=i+X.PLAYER_START_Y%1,this.player.z=o,this.staticMapCacheDirty=!0,this.populateFullyRevealedCells(o),this.maze.get(e,i,o)===this.mazeGen.TYPES.PATH&&this.maze.set(e,i,o,this.mazeGen.TYPES.VISITED);const p=document.createElement("canvas");p.width=this.canvas.width,p.height=this.canvas.height;const m=p.getContext("2d");this.renderMapToContext(m,this.player.z),this.floorTransition={canvasOld:d,canvasNew:p,progress:0,duration:.4,delta:t},this.updateFloorUI(),this.draw2DMap(0),this.maze.get(e,i,o)===this.mazeGen.TYPES.EXIT&&this.triggerVictory()}}}toggleMap3D(){this.isMap3DActive=!this.isMap3DActive,this.isTeleportMode=!1;const t=document.getElementById("mobile-teleport-exit-btn");if(t&&t.classList.add("hidden"),this.isMap3DActive){this.ui.setMap3DVisible(!0),this.activeMapFloor=this.player.z,this.visualActiveFloor=this.player.z,this.mapCursor={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.mapZoom=1,this.mapPanOffsetX=0,this.mapPanOffsetY=0,this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="none");const e=document.getElementById("map3d-instructions");e&&(e.style.display="none"),this.isometricCanvas||this.initIsometricCanvas(),this.isometricCanvas.style.display="block"}else this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.remove("hidden"),this.ui.setMap3DVisible(!1),this.isometricCanvas&&(this.isometricCanvas.style.display="none")}build3DMap(t=!1){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(new _r(16777215,.6));const e=new vr(16777215,.4);e.position.set(10,20,10),this.scene.add(e),this.pulsatingMaterials=[],this.hunterMeshes=[],this.teleportMeshes=[],this.knownMeshes=[],this.keyMeshes=[],this.manaMeshes=[],this.exitMesh=null;const i=this.mazeGen.size,n=(T,_,y)=>{if(y<0||y>=i)return!1;const M=this.maze.get(T,_,y);return M===2||M===3||M===4||M===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${T},${_},${y}`)||this.visitedCells.has(`${T},${_},${y}`)};this.gridMeshes=new Array(i*i*i).fill(null);const a=new Re(.9,.9,.9),r=this.isTeleportMode?X.TELEPORT_MAP_OPACITY:1,o=new Re(.9,.425,.9),c=new Re(.9,.425,.9),l=new gs(.35,.35,2*this.vScale,8);new se({color:X.COLORS.THREE_VISITED,transparent:!0,opacity:.8*r});for(let T=0;T<i;T++)for(let _=0;_<i;_++)for(let y=0;y<i;y++){const M=this.maze.get(T,_,y);if(M===this.mazeGen.TYPES.WALL||M===this.mazeGen.TYPES.STATUE)continue;if(y%2===0&&M!==0){const W=`${T},${_},${y}`,H=this.revealedPathSet.has(W),q=M===this.mazeGen.TYPES.ELEVATOR_VISITED,Q=M===1&&(n(T,_,y-1)||n(T,_,y+1));if(q||Q||H||t){let it;if(H)it=new se({color:16777215,transparent:!0,opacity:.95*r,emissive:16777215,emissiveIntensity:2*r});else if(q)it=new se({color:X.COLORS.THREE_VISITED,transparent:!0,opacity:.8*r});else if(Q||t){const B=t?X.COLORS.THREE_VISITED:X.COLORS.THREE_KNOWN;it=new se({color:B,transparent:!0,opacity:t?.72:.6*r,emissive:B,emissiveIntensity:t?0:.5*r}),t||this.pulsatingMaterials.push(it)}const J=new te(l,it);J.position.set(T-i/2,(y-i/2)*this.vScale,_-i/2),this.scene.add(J),this.gridMeshes[T*i*i+_*i+y]=J,Q&&!H&&(J.userData={gridX:T,gridY:_,gridZ:y},this.knownMeshes.push(J))}continue}const x=M===this.mazeGen.TYPES.JELLY_PORTAL,z=M===this.mazeGen.TYPES.TELEPORT||x,E=z&&this.discoveredTeleports.has(`${T},${_},${y}`),A=M===2||M===3||M===4||M===5||E,F=(M===1||z&&!E)&&this.isNearVisited(T,_,y);if(E){const W=T===Math.floor(this.mazeGen.startPos.x)&&_===Math.floor(this.mazeGen.startPos.y)&&y===this.mazeGen.startPos.z,H=this.teleportCooldownTicks>0;if(W){const w=H?0:this.isTeleportMode?2.5:.5,D=H?4473924:X.COLORS.THREE_START,$=H?.4:this.isTeleportMode?.95:.8*r,V=new se({color:D,emissive:D,emissiveIntensity:w*r,transparent:!0,opacity:$}),Y=new te(a,V);Y.position.set(T-i/2,(y-i/2)*this.vScale,_-i/2),this.isTeleportMode&&Y.scale.set(1.4,1.4,1.4),Y.userData={isTeleport:!0,gridX:T,gridY:_,gridZ:y},this.scene.add(Y),this.teleportMeshes.push(Y);continue}const q=T===Math.floor(this.player.x)&&_===Math.floor(this.player.y)&&y===this.player.z;let Q=this.isTeleportMode?.9:.45,it=this.isTeleportMode?2.5:.8,J=x?X.COLORS.THREE_JELLY_PORTAL:X.COLORS.THREE_TELEPORT,B=.95;H?(J=4473924,it=0,B=.4):this.isTeleportMode&&q&&(J=65535,B=.5,it=3);const et=new An(Q,16,16),ot=new se({color:J,emissive:J,emissiveIntensity:it,transparent:!0,opacity:B}),Mt=new te(et,ot);Mt.position.set(T-i/2,(y-i/2)*this.vScale,_-i/2),Mt.userData={isTeleport:!0,gridX:T,gridY:_,gridZ:y},this.scene.add(Mt),this.teleportMeshes.push(Mt);continue}if(M===this.mazeGen.TYPES.KEY){const W=new za(.3,0),H=new se({color:X.COLORS.THREE_KEY,emissive:X.COLORS.THREE_KEY,emissiveIntensity:.6*r,shininess:100}),q=new te(W,H);if(q.position.set(T-i/2,(y-i/2)*this.vScale,_-i/2),q.userData={isKey:!0,gridX:T,gridY:_,gridZ:y},this.scene.add(q),this.keyMeshes.push(q),this.pulsatingMaterials.push(H),!this.visitedCells.has(`${T},${_},${y}`))continue}if(M===this.mazeGen.TYPES.MANA){const W=new Na(.22,0),H=new se({color:65535,emissive:65535,emissiveIntensity:.7*r,shininess:120}),q=new te(W,H);if(q.position.set(T-i/2,(y-i/2)*this.vScale,_-i/2),q.userData={isMana:!0,gridX:T,gridY:_,gridZ:y},this.scene.add(q),this.manaMeshes.push(q),this.pulsatingMaterials.push(H),!this.visitedCells.has(`${T},${_},${y}`))continue}const R=`${T},${_},${y}`,N=this.revealedPathSet.has(R);if(t?M!==this.mazeGen.TYPES.WALL:A||F||N){let W=t?X.COLORS.THREE_VISITED:X.COLORS.THREE_KNOWN,H;N?(W=16777215,H=new se({color:W,transparent:!0,opacity:.95*r,emissive:W,emissiveIntensity:2*r})):A||t?(W=X.COLORS.THREE_VISITED,M===3?W=X.COLORS.THREE_START:M===4&&(W=this.keysCollected===this.totalKeys?X.COLORS.THREE_EXIT:16724736),H=new se({color:W,transparent:!0,opacity:t?.72:.8*r})):F&&(H=new se({color:W,transparent:!0,opacity:.6*r,emissive:W,emissiveIntensity:.5*r}),this.pulsatingMaterials.push(H));const q=y<i-1&&this.maze.get(T,_,y+1)!==0,Q=y>0&&this.maze.get(T,_,y-1)!==0;if(q||Q){const et=this.pulsatingMaterials.indexOf(H);if(et>-1&&this.pulsatingMaterials.splice(et,1),q&&Q){let ot=!1,Mt=!1;if(N){if(this.activePathReveal){const _t=this.activePathReveal.findIndex(vt=>vt.x===T&&vt.y===_&&vt.z===y);if(_t!==-1&&_t<this.activePathReveal.length-1){const vt=this.activePathReveal[_t+1];vt.z>y&&(ot=!0),vt.z<y&&(Mt=!0)}}!ot&&!Mt&&(ot=this.revealedPathSet.has(`${T},${_},${y+1}`)||this.revealedPathSet.has(`${T},${_},${y+2}`),Mt=this.revealedPathSet.has(`${T},${_},${y-1}`)||this.revealedPathSet.has(`${T},${_},${y-2}`))}const w=N&&(ot||!ot&&!Mt),D=N&&(Mt||!ot&&!Mt),$=new se({color:D?16777215:X.COLORS.THREE_ELEVATOR_DOWN,transparent:!0,opacity:.9*r,emissive:D?16777215:X.COLORS.THREE_ELEVATOR_DOWN,emissiveIntensity:(D?2:.4)*r}),V=new se({color:w?16777215:X.COLORS.THREE_ELEVATOR_UP,transparent:!0,opacity:.9*r,emissive:w?16777215:X.COLORS.THREE_ELEVATOR_UP,emissiveIntensity:(w?2:.4)*r}),Y=new te(o,$),I=new te(c,V);Y.position.set(T-i/2,(y-i/2)*this.vScale-.2125,_-i/2),I.position.set(T-i/2,(y-i/2)*this.vScale+.2125,_-i/2),this.scene.add(Y),this.scene.add(I),this.gridMeshes[T*i*i+_*i+y]=I,F&&!N&&(Y.userData={gridX:T,gridY:_,gridZ:y},I.userData={gridX:T,gridY:_,gridZ:y},this.knownMeshes.push(Y),this.knownMeshes.push(I));continue}else{const ot=N?16777215:q?X.COLORS.THREE_ELEVATOR_UP:X.COLORS.THREE_ELEVATOR_DOWN,Mt=N?2:.4;H=new se({color:ot,transparent:!0,opacity:.9*r,emissive:ot,emissiveIntensity:Mt*r})}}const it=T===Math.floor(this.player.x)&&_===Math.floor(this.player.y)&&y===this.player.z,J=this.hunters.some(et=>et.x===T&&et.y===_&&et.z===y);if(it||J){const et=new Re(.9,.05,.9),ot=new te(et,H);ot.position.set(T-i/2,(y-i/2)*this.vScale-.425,_-i/2),this.scene.add(ot),this.gridMeshes[T*i*i+_*i+y]=ot;continue}const B=new te(a,H);if(B.position.set(T-i/2,(y-i/2)*this.vScale,_-i/2),M===4&&(this.exitMesh=B,this.keysCollected<this.totalKeys)){const et=new Re(.95,.95,.95),ot=new ms({color:16711680,wireframe:!0}),Mt=new te(et,ot);B.add(Mt)}this.scene.add(B),this.gridMeshes[T*i*i+_*i+y]=B,(F||M===this.mazeGen.TYPES.EXIT)&&!N&&(B.userData={gridX:T,gridY:_,gridZ:y},this.knownMeshes.push(B))}}if(t)return;const d=new An(.42,16,16),u=new se({color:16711680,emissive:16711680,emissiveIntensity:.8,depthWrite:!1}),p=new te(d,u);p.position.set(Math.floor(this.player.x)-i/2,(this.player.z-i/2)*this.vScale+.05,Math.floor(this.player.y)-i/2),this.scene.add(p);const m=new An(.4),g=new se({color:X.COLORS.THREE_HUNTER,emissive:X.COLORS.THREE_HUNTER,emissiveIntensity:.8,depthWrite:!1}),v=new se({color:X.COLORS.THREE_HUNTER,transparent:!0,opacity:.4,emissive:X.COLORS.THREE_HUNTER,emissiveIntensity:.3,depthWrite:!1}),h=new se({color:X.COLORS.THREE_HUNTER,transparent:!0,opacity:.15,emissive:X.COLORS.THREE_HUNTER,emissiveIntensity:.1,depthWrite:!1}),f=m;for(let T=0;T<this.hunters.length;T++){const _=this.hunters[T];if(_.state==="SLEEP")continue;const y=new te(f,h),M=new te(f,v);y.visible=!1,M.visible=!1,y.renderOrder=99,M.renderOrder=99,this.scene.add(y),this.scene.add(M);const S=new En;S.renderOrder=99;const x=new te(m,g);S.add(x);const z=4,E=[],A=new Re(.18,.18,.18),F=[X.COLORS.THREE_HUNTER,16711935,65535,16776960];for(let U=0;U<z;U++){const K=new se({color:F[U%F.length],transparent:!0,opacity:.8,emissive:F[U%F.length],emissiveIntensity:.8,depthWrite:!1}),R=new te(A,K);R.userData={angle:U/z*Math.PI*2,radius:.35+Math.random()*.1,speed:1+Math.random()*1.5,phaseY:Math.random()*Math.PI*2},S.add(R),E.push(R)}S.position.set(_.x-i/2,(_.z-i/2)*this.vScale,_.y-i/2),this.scene.add(S),this.hunterMeshes.push({hunter:_,mesh:S,coreMesh:x,particles:E,trail1:M,trail2:y})}this.camera.position.set(i,i*this.vScale,i),this.controls.target.set(0,0,0),this.controls.update()}draw2DMap(t=.016){if(this.deathAnimation&&this.deathAnimation.active){if(this.deathAnimation.delayElapsed<this.deathAnimation.delayDuration)this.deathAnimation.delayElapsed+=t,this.updateNotification(t);else if(this.deathAnimation.screenFilled)this.deathAnimation.reversing&&(this.deathAnimation.elapsed-=t,this.deathAnimation.elapsed<=0&&(this.deathAnimation=null,this.isGameOver=!1,this.ui.initGameUI(this.isSafeMode),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1),this.ui.showInfoBanner(Ot("msgPlayerRespawn"))));else if(this.deathAnimation.elapsed+=t,this.updateNotification(t),this.deathAnimation.elapsed>=this.deathAnimation.duration){this.deathAnimation.screenFilled=!0,this.activeNotification=null,this.notificationQueue=[];const n=Math.floor(this.deathAnimation.playerPos.x),a=Math.floor(this.deathAnimation.playerPos.y),r=this.deathAnimation.playerPos.z;if(this.maze.get(n,a,r)===this.mazeGen.TYPES.JELLY_PORTAL){const u=this.mazeGen.size,p=[],m=Math.floor(this.mazeGen.startPos.x),g=Math.floor(this.mazeGen.startPos.y),v=this.mazeGen.startPos.z;for(let h=0;h<u;h++)for(let f=0;f<u;f++)for(let T=0;T<u;T++){const _=this.maze.get(h,f,T),y=h===m&&f===g&&T===v,M=h===n&&f===a&&T===r;(_===this.mazeGen.TYPES.PATH||_===this.mazeGen.TYPES.VISITED)&&T%2!==0&&!y&&!M&&p.push({x:h,y:f,z:T})}if(p.length>0){const h=p[Math.floor(Math.random()*p.length)];this.maze.set(h.x,h.y,h.z,this.mazeGen.TYPES.KEY)}else this.maze.set(n,a,r,this.mazeGen.TYPES.KEY)}else this.maze.set(n,a,r,this.mazeGen.TYPES.KEY);this.totalKeys++,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.staticMapCacheDirty=!0;let c=this.mazeGen.startPos.x,l=this.mazeGen.startPos.y,d=this.mazeGen.startPos.z;if(this.lastSavePos&&(c=this.lastSavePos.x,l=this.lastSavePos.y,d=this.lastSavePos.z),this.player.x=c,this.player.y=l,this.player.z=d,this.activeMapFloor=d,this.visualActiveFloor=d,this.lastPlayerCell={x:Math.floor(c),y:Math.floor(l),z:d},this.hunters=[],this.isTutorialMode){const u=this.currentTutorialStage&&this.currentTutorialStage.hunterBehavior&&this.currentTutorialStage.hunterBehavior.fixed;if(this.mazeGen.tutorialHunterSpawns&&!this.isSafeMode){let p=1;for(const m of this.mazeGen.tutorialHunterSpawns){const g=new ra(this.mazeGen,{x:m.x,y:m.y,z:m.z},p++);if(!u){const v=[],h=this.mazeGen.size,f=Math.floor(this.mazeGen.startPos.x),T=Math.floor(this.mazeGen.startPos.y),_=this.mazeGen.startPos.z;for(let y=0;y<h;y++)for(let M=0;M<h;M++)for(let S=0;S<h;S++){const x=this.maze.get(y,M,S),z=y===f&&M===T&&S===_,E=x===this.mazeGen.TYPES.EXIT;x!==this.mazeGen.TYPES.WALL&&!E&&!z&&(y!==Math.floor(c)||M!==Math.floor(l)||S!==d)&&v.push({x:y,y:M,z:S})}if(v.length>0){const y=v[Math.floor(Math.random()*v.length)];g.x=y.x,g.y=y.y,g.z=y.z,g.visualX=y.x,g.visualY=y.y,g.visualZ=y.z,g.lastPos={x:y.x,y:y.y,z:y.z},g.visitedNodes.clear(),g.visitedNodes.add(`${y.x},${y.y},${y.z}`)}}this.hunters.push(g)}}}else this.initHunters(this.degree);this.suppressWakeHuntersBanner=!0,this.isTutorialMode||os(this),this.deathAnimation.reversing=!0}}this.floorTransition&&(this.floorTransition.progress+=t/this.floorTransition.duration,this.floorTransition.progress>=1&&(this.floorTransition=null));const e=this.mazeGen.size,i=this.isZoomActive?11:e;if(this.zoomVisibleCells===void 0?this.zoomVisibleCells=i:(this.zoomVisibleCells+=(i-this.zoomVisibleCells)*(1-Math.exp(-12*t)),Math.abs(this.zoomVisibleCells-i)<.01&&(this.zoomVisibleCells=i)),this.floorTransition){const n=this.floorTransition.progress,a=this.canvas.width/2,r=this.canvas.height/2,o=this.floorTransition.delta>0;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let c,l;o?(c=1-.2*n,l=1.2-.2*n):(c=1+.2*n,l=.8+.2*n),this.ctx.save(),this.ctx.globalAlpha=1-n,this.ctx.translate(a,r),this.ctx.scale(c,c),this.ctx.drawImage(this.floorTransition.canvasOld,-a,-r),this.ctx.restore(),this.ctx.save(),this.ctx.globalAlpha=n,this.ctx.translate(a,r),this.ctx.scale(l,l),this.ctx.drawImage(this.floorTransition.canvasNew,-a,-r),this.ctx.restore()}else this.renderMapToContext(this.ctx,this.player.z)}renderMapToContext(t,e){t.clearRect(0,0,t.canvas.width,t.canvas.height);const i=this.mazeGen.size,n=i>11,a=n?t.canvas.width/11:t.canvas.width/i,r=this.player.x,o=this.player.y,c=Math.floor(r),l=Math.floor(o);let d=n||this.isZoomTransitionActive,u=n?this.zoomVisibleCells:i;if(this.isZoomTransitionActive){const v=Math.min(1,(2-this.zoomTransitionTimer)/2),f=(y=>1-Math.pow(1-y,3))(v),T=3;u=T+((n?11:i)-T)*f}if(d){t.save();const g=(n?11:i)/u,v=u/2;let h=r,f=o;h<v&&(h=v),h>i-v&&(h=i-v),f<v&&(f=v),f>i-v&&(f=i-v);const T=t.canvas.width/2,_=t.canvas.height/2;t.translate(T,_),t.scale(g,g),t.translate(-h*a,-f*a)}const p=n?i*a:this.canvas.width,m=n?i*a:this.canvas.height;(this.staticMapCacheDirty||this.staticMapCacheCanvas.width!==p||this.staticMapCacheCanvas.height!==m||this.jellyPortalFreezeTimer>0)&&this.updateStaticMapCache(e),t.drawImage(this.staticMapCacheCanvas,0,0);for(const g of this.hunters){if(g.state==="SLEEP")continue;const v=g.visualZ!==null?g.visualZ:g.z,h=g.visualX!==null?g.visualX:g.x,f=g.visualY!==null?g.visualY:g.y;if(v===null||h===null||f===null)continue;const T=Math.abs(v-e),_=Math.max(0,1-T);if(_<=0)continue;const y=g.x!==null?g.x:h,M=g.y!==null?g.y:f,S=y-h,x=M-f,z=Math.sqrt(S*S+x*x),E=Math.max(0,Math.min(1,1-z)),A=[];if(g.lastPos&&(g.lastPos.x!==y||g.lastPos.y!==M)&&g.lastPos.z===e){const F=.95-E*.47,U=.4-E*.2;A.push({pos:g.lastPos,sizeFactor:F,opacityFactor:U,age:1})}if(g.history&&g.history.length===2){const F=g.history[0];if(F.z===e){const U=.48*(1-E),K=.2*(1-E);U>.01&&A.push({pos:F,sizeFactor:U,opacityFactor:K,age:2})}}if(A.forEach(F=>{if(g.lowCanvas){const U=F.pos.x*a+a/2,K=F.pos.y*a+a/2,R=a*F.sizeFactor*_,N=g.jellyTime-F.age*.2,k=Math.sin(N)*6,W=Math.cos(N*.7)*4,H=1+Math.sin(N*1.2)*.06,q=1+Math.cos(N*.8)*.06,Q=k*Math.PI/180,it=W*Math.PI/180;t.save(),t.globalAlpha=F.opacityFactor,t.translate(U,K),t.transform(H,Math.tan(it),Math.tan(Q),q,0,0),t.imageSmoothingEnabled=!1,t.drawImage(g.lowCanvas,-R/2,-R/2,R,R),t.restore()}}),g.lowCanvas){const F=h*a+a/2,U=f*a+a/2,K=a*.95*_,R=g.jellyTime,N=Math.sin(R)*6,k=Math.cos(R*.7)*4,W=1+Math.sin(R*1.2)*.06,H=1+Math.cos(R*.8)*.06,q=N*Math.PI/180,Q=k*Math.PI/180;t.save();let it=.35,J=K;if(g.state==="DYING"){const Mt=Math.min(1,this.jellyPortalResetElapsed/this.jellyPortalResetDuration);J=K*(1-Mt),it=.35*(1-Mt)}const B=-a*.12*_,et=-a*.12*_;t.translate(F+B,U+et),t.transform(W,Math.tan(Q),Math.tan(q),H,0,0),t.filter=`brightness(0) blur(1px) opacity(${it})`,t.imageSmoothingEnabled=!1,t.drawImage(g.lowCanvas,-J/2,-J/2,J,J),t.restore(),t.save();let ot=1;if(g.state==="DYING"){const Mt=Math.min(1,this.jellyPortalResetElapsed/this.jellyPortalResetDuration);J=K*(1-Mt),ot=1-Mt;const w=(Math.random()-.5)*a*.15,D=(Math.random()-.5)*a*.15;t.translate(w,D)}t.globalAlpha=ot,t.translate(F,U),t.transform(W,Math.tan(Q),Math.tan(q),H,0,0),t.imageSmoothingEnabled=!1,t.drawImage(g.lowCanvas,-J/2,-J/2,J,J),t.restore()}}if(!this.deathAnimation||!this.deathAnimation.screenFilled){const g=`${this.playerVertical}_${this.playerSide}`,v=this.mageImages[g],h=r*a,f=o*a,T=X.PLAYER_SHADOW_OFFSET_X!==void 0?X.PLAYER_SHADOW_OFFSET_X:-.28,_=X.PLAYER_SHADOW_OFFSET_Y!==void 0?X.PLAYER_SHADOW_OFFSET_Y:-.28,y=h+a*T,M=f+a*_;t.save(),t.beginPath();const S=X.PLAYER_SHADOW_WIDTH_FACTOR!==void 0?X.PLAYER_SHADOW_WIDTH_FACTOR:.45,x=X.PLAYER_SHADOW_HEIGHT_FACTOR!==void 0?X.PLAYER_SHADOW_HEIGHT_FACTOR:.3,z=a*S,E=a*x;t.ellipse(y,M,z,E,0,0,Math.PI*2),t.fillStyle="rgba(0, 0, 0, 0.4)",t.fill(),t.restore();const A=Math.max(0,Math.floor((y-z)/a)),F=Math.min(i-1,Math.floor((y+z)/a)),U=Math.max(0,Math.floor((M-E)/a)),K=Math.min(i-1,Math.floor((M+E)/a));for(let N=A;N<=F;N++)for(let k=U;k<=K;k++)this.isWallVisible(N,k,e)&&(t.save(),this.wallImage.complete&&this.wallImage.naturalWidth!==0?t.drawImage(this.wallImage,N*a,k*a,a,a):(t.fillStyle=X.COLORS.WALL,t.fillRect(N*a,k*a,a,a)),t.restore());let R=1;if(this.deathAnimation&&this.deathAnimation.active&&(Math.floor(Date.now()/120)%2===0||(R=.2)),v&&v.complete){t.save(),t.globalAlpha=R;const N=a*.9,k=N,W=N*(v.height/v.width);t.translate(h,f),t.scale(this.playerSquashX||1,this.playerSquashY||1);const H=-W*.85;t.drawImage(v,-k/2,H,k,W),t.restore()}else t.save(),t.globalAlpha=R,t.strokeStyle=X.COLORS.PLAYER_OUTLINE,t.lineWidth=1,t.strokeRect(c*a+2,l*a+2,a-4,a-4),t.fillStyle=X.COLORS.PLAYER,t.beginPath(),t.arc(h,f,a*.4,0,Math.PI*2),t.fill(),t.strokeStyle=X.COLORS.PLAYER,t.lineWidth=2,t.beginPath(),t.moveTo(h,f),t.lineTo(h+Math.cos(this.player.dir)*a*1,f+Math.sin(this.player.dir)*a*1),t.stroke(),t.restore();if(X.SHOW_COLLISION_DEBUG){t.save(),t.strokeStyle="#ff0000",t.lineWidth=1.5;const N=X.PLAYER_COLLISION_RADIUS*2*a,k=(X.PLAYER_COLLISION_OFFSET_X||0)*a,W=(X.PLAYER_COLLISION_OFFSET_Y||0)*a;t.strokeRect(h+k-N/2,f+W-N/2,N,N),t.restore()}if(this.deathAnimation&&this.deathAnimation.active){const N=Math.min(1,this.deathAnimation.delayElapsed/this.deathAnimation.delayDuration),k=-(v&&v.complete?a*.9*(v.height/v.width)*.85:a*.5),W=a*.7,H=(1-N)*k-4*W*N*(1-N);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){t.save();const q=this.keyImage,Q=q.naturalWidth/q.naturalHeight,it=a*.55;let J=it,B=it;Q>1?B=it/Q:J=it*Q,t.drawImage(q,h-J/2,f+H-B/2,J,B),t.restore()}else t.save(),t.beginPath(),t.arc(h,f+H,a*.15,0,2*Math.PI),t.fillStyle="#ffd700",t.fill(),t.restore()}}if(this.activeNotification){const g=this.activeNotification;t.save(),t.font=`bold ${a*.22}px monospace`;const v=t.measureText(g.text).width,h=a*.4,f=v+h,T=a*.48,_=r*a,y=o*a-a*1.5;let M=f;g.state==="OPENING"?M=f*g.widthProgress:g.state==="CLOSING"&&(M=f*g.closeProgress);const S=this.mazeGen.size*a,x=this.mazeGen.size*a;let z=_;z-M/2<0?z=M/2:z+M/2>S&&(z=S-M/2);let E=y;E-T/2<0?E=T/2:E+T/2>x&&(E=x-T/2),t.fillStyle="#000000",t.fillRect(z-M/2,E-T/2,M,T),t.strokeStyle="#00ffff",t.lineWidth=Math.max(1.5,a*.04),t.strokeRect(z-M/2,E-T/2,M,T),(g.state==="TYPING"||g.state==="WAITING")&&(t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.fillText(g.displayText,z,E)),t.restore()}if(d&&t.restore(),this.isZoomTransitionActive){const h=1-Math.min(1,(2-this.zoomTransitionTimer)/2);t.save(),t.fillStyle=`rgba(0, 0, 0, ${h})`,t.fillRect(0,0,t.canvas.width,t.canvas.height),t.restore()}if(this.deathAnimation&&this.deathAnimation.active){const g=this.deathAnimation.hunter;let v=g.visualX+.5,h=g.visualY+.5;this.deathAnimation.reversing&&(v=this.player.x,h=this.player.y);let f,T;if(n){const _=11/this.zoomVisibleCells,y=this.zoomVisibleCells/2;let M=r,S=o;M<y&&(M=y),M>i-y&&(M=i-y),S<y&&(S=y),S>i-y&&(S=i-y);const x=t.canvas.width/2,z=t.canvas.height/2;f=x+(v-M)*a*_,T=z+(h-S)*a*_}else f=v*a,T=h*a;if(!this.deathAnimation.screenFilled||this.deathAnimation.reversing){const _=Math.hypot(t.canvas.width,t.canvas.height)*1.1,y=this.deathAnimation.elapsed/this.deathAnimation.duration,S=y*y*(3-2*y)*_;t.save(),t.beginPath(),t.arc(f,T,S,0,Math.PI*2),t.clip(),t.fillStyle="rgba(15, 0, 25, 0.96)",t.fillRect(0,0,t.canvas.width,t.canvas.height);const x=45,z=n?11/this.zoomVisibleCells:1;for(let E=0;E<x;E++){const A=Math.random()*Math.PI*2,F=Math.pow(Math.random(),.7)*S,U=f+Math.cos(A)*F,K=T+Math.sin(A)*F,R=(15+Math.random()*70)*z,N=(3+Math.random()*12)*z,k=80+Math.floor(Math.random()*50),W=Math.floor(Math.random()*25),H=130+Math.floor(Math.random()*70);t.fillStyle=Math.random()<.12?"#00ff66":Math.random()<.12?"#00ccff":Math.random()<.08?"#ffffff":`rgb(${k},${W},${H})`,t.fillRect(U-R/2,K-N/2,R,N)}if(Math.random()<.3){t.fillStyle=Math.random()<.7?"#ffffff":"#b3ffff";const E=f+(Math.random()-.5)*S*.8,A=T+(Math.random()-.5)*S*.8,F=(2+Math.random()*5)*z,U=(10+Math.random()*30)*z;t.fillRect(E-F/2,A-U/2,F,U)}t.restore()}else{t.fillStyle="rgba(10, 0, 15, 1.0)",t.fillRect(0,0,t.canvas.width,t.canvas.height),t.fillStyle="rgba(138, 3, 196, 0.08)";for(let M=0;M<t.canvas.height;M+=6)Math.random()<.6&&t.fillRect(0,M+Math.sin(Date.now()*.01+M)*2,t.canvas.width,2);const _=Math.floor(Math.random()*5)+3,y=["#00ff66","#ff0055","#00ccff","#ffff00","#8a03c4","#ffffff"];for(let M=0;M<_;M++){const S=Math.random()*t.canvas.width,x=Math.random()*t.canvas.height,z=80+Math.random()*250,E=8+Math.random()*30;t.fillStyle=y[Math.floor(Math.random()*y.length)],t.globalAlpha=.12+Math.random()*.18,t.fillRect(S,x,z,E)}if(t.globalAlpha=1,Math.random()<.35){const M=Math.floor(Math.random()*t.canvas.height),S=15+Math.floor(Math.random()*80),x=Math.floor(Math.random()*40)-20;t.drawImage(t.canvas,0,M,t.canvas.width,S,x,M,t.canvas.width,S)}Math.random()<.15&&(t.fillStyle="rgba(255, 255, 255, 0.05)",t.fillRect(0,Math.random()*t.canvas.height,t.canvas.width,5+Math.random()*20))}}}updateStaticMapCache(t){const e=this.mazeGen.size,i=e>11,n=i?this.canvas.width/11:this.canvas.width/e,a=i?e*n:this.canvas.width,r=i?e*n:this.canvas.height;(this.staticMapCacheCanvas.width!==a||this.staticMapCacheCanvas.height!==r)&&(this.staticMapCacheCanvas.width=a,this.staticMapCacheCanvas.height=r);const o=this.staticMapCacheCtx;o.clearRect(0,0,a,r);const c=this.player.x,l=this.player.y,d=Math.floor(this.mazeGen.startPos.x),u=Math.floor(this.mazeGen.startPos.y),p=this.mazeGen.startPos.z,m=Date.now();let g=!1;const v=(h,f,T)=>{const _=`${h},${f},${t}`;if(this.skipCellAnimations||this.fullyRevealedCells.has(_))T(),this.skipCellAnimations&&this.fullyRevealedCells.add(_);else{let y=this.revealedCellsAnimation.get(_);y===void 0&&(this.revealedCellsAnimation.set(_,m),y=m);const M=m-y,x=Math.min(1,M/400);x<1?(o.save(),o.globalAlpha=x,T(),o.restore(),g=!0):(T(),this.revealedCellsAnimation.delete(_),this.fullyRevealedCells.add(_))}};for(let h=0;h<e;h++)for(let f=0;f<e;f++){const T=this.maze.get(h,f,t);if(this.jellyPortalFreezeTimer>0&&this.jellyPortalResetCells.has(`${h},${f}`)){const K=1.5-this.jellyPortalFreezeTimer,R=.6;let N=0;K>R&&(N=Math.min(1,(K-R)/.9)),o.save();const k=Math.round(100*(1-N));o.filter=`invert(${k}%)`;const W=h===Math.floor(c)&&f===Math.floor(l),H=T===this.mazeGen.TYPES.STATUE;if(!W&&!H&&(o.globalAlpha=1-N),T===this.mazeGen.TYPES.WALL)this.wallImage.complete&&this.wallImage.naturalWidth!==0?o.drawImage(this.wallImage,h*n,f*n,n,n):(o.fillStyle=X.COLORS.WALL,o.fillRect(h*n,f*n,n,n));else if(H)if(this.floorImage.complete&&this.floorImage.naturalWidth!==0?o.drawImage(this.floorImage,h*n,f*n,n,n):(o.fillStyle=X.COLORS.PATH_VISITED,o.fillRect(h*n,f*n,n,n)),o.fillStyle="rgba(0, 0, 0, 0.4)",o.beginPath(),o.ellipse(h*n+n/2,(f+1)*n-n*.15,n*.35,n*.12,0,0,Math.PI*2),o.fill(),this.statueImage.complete&&this.statueImage.naturalWidth!==0){const Q=this.statueImage.width/this.statueImage.height,it=n*.85,J=it/Q,B=(f+1)*n-n*.05;o.drawImage(this.statueImage,h*n+n/2-it/2,B-J,it,J)}else o.fillStyle="#555555",o.fillRect(h*n+n*.3,f*n+n*.1,n*.4,n*.8);else if(this.floorImage.complete&&this.floorImage.naturalWidth!==0?o.drawImage(this.floorImage,h*n,f*n,n,n):(o.fillStyle=X.COLORS.PATH_VISITED,o.fillRect(h*n,f*n,n,n)),W)this.drawVortex2D(o,h,f,n,X.COLORS.JELLY_PORTAL,!1,`${h},${f},${t}`);else if(T===this.mazeGen.TYPES.TELEPORT)this.drawVortex2D(o,h,f,n,X.COLORS.TELEPORT_INACTIVE,!1,`${h},${f},${t}`);else if(T===this.mazeGen.TYPES.EXIT)this.drawVortex2D(o,h,f,n,X.COLORS.EXIT,!1,`${h},${f},${t}`);else if(T===this.mazeGen.TYPES.KEY){const Q=n*.05*Math.sin(Date.now()/300);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){const it=this.keyImage,J=it.naturalWidth/it.naturalHeight,B=n*.7;let et=B,ot=B;J>1?ot=B/J:et=B*J,o.drawImage(it,h*n+(n-et)/2,f*n+(n-ot)/2+Q,et,ot)}}else if(T===this.mazeGen.TYPES.MANA){const Q=n*.05*Math.sin(Date.now()/250);if(this.manaImage.complete&&this.manaImage.naturalWidth!==0){const it=this.manaImage,J=it.naturalWidth/it.naturalHeight,B=n*.7;let et=B,ot=B;J>1?ot=B/J:et=B*J,o.drawImage(it,h*n+(n-et)/2,f*n+(n-ot)/2+Q,et,ot)}}o.restore(),g=!0;continue}if(T===this.mazeGen.TYPES.STATUE){v(h,f,()=>{if(this.floorImage.complete&&this.floorImage.naturalWidth!==0?o.drawImage(this.floorImage,h*n,f*n,n,n):(o.fillStyle=X.COLORS.PATH_VISITED,o.fillRect(h*n,f*n,n,n)),o.fillStyle="rgba(0, 0, 0, 0.4)",o.beginPath(),o.ellipse(h*n+n/2,(f+1)*n-n*.15,n*.35,n*.12,0,0,Math.PI*2),o.fill(),this.statueImage.complete&&this.statueImage.naturalWidth!==0){const K=this.statueImage.width/this.statueImage.height,R=n*.85,N=R/K,k=h*n+n/2,W=(f+1)*n-n*.05;o.drawImage(this.statueImage,k-R/2,W-N,R,N)}else o.fillStyle="#555555",o.fillRect(h*n+n*.3,f*n+n*.1,n*.4,n*.8)});continue}const _=this.allTeleports.some(K=>K.x===h&&K.y===f&&K.z===t),y=_&&this.discoveredTeleports.has(`${h},${f},${t}`),M=T===2||T===3||T===4||T===5||y,S=T===this.mazeGen.TYPES.KEY,x=T===this.mazeGen.TYPES.MANA,z=(T===1||_&&!y)&&this.isNearVisited(h,f,t),E=this.revealedPathSet.has(`${h},${f},${t}`),A=t<e-1&&this.maze.get(h,f,t+1)!==0,F=t>0&&this.maze.get(h,f,t-1)!==0,U=A||F;E?v(h,f,()=>{U?this.drawElevator2D(o,h,f,n,A,F,c,l,!0,t):(o.fillStyle=X.COLORS.REVEALED_PATH,o.fillRect(h*n,f*n,n,n))}):M?v(h,f,()=>{if(y){const K=h===d&&f===u&&t===p,R=`${h},${f},${t}`,N=this.teleportCooldownTicks>0;if(K){const k=Math.floor(c)===h&&Math.floor(l)===f&&t===this.player.z,W=N?X.COLORS.TELEPORT_INACTIVE:k?X.COLORS.TELEPORT:X.COLORS.START;this.drawVortex2D(o,h,f,n,W,k&&!N,R)}else{const k=T===this.mazeGen.TYPES.JELLY_PORTAL,W=N?X.COLORS.TELEPORT_INACTIVE:k?X.COLORS.JELLY_PORTAL:X.COLORS.TELEPORT,H=Math.floor(c)===h&&Math.floor(l)===f&&t===this.player.z;this.drawVortex2D(o,h,f,n,W,H&&!N,R)}g=!0}else if(U)this.drawElevator2D(o,h,f,n,A,F,c,l,!1,t);else if(T===2&&this.floorImage.complete&&this.floorImage.naturalWidth!==0)o.drawImage(this.floorImage,h*n,f*n,n,n);else if(T===this.mazeGen.TYPES.EXIT){const K=`${h},${f},${t}`;if(this.drawVortex2D(o,h,f,n,X.COLORS.EXIT,!1,K),g=!0,this.keysCollected<this.totalKeys){const R=h*n+n/2,N=f*n+n/2,k=n*.45,W=n*.38,H=k*.75,q=R-k/2,Q=N-W/4,it=Math.max(3,n*.06);o.beginPath(),o.arc(R,Q,H/2,Math.PI,0),o.strokeStyle="#ff3300",o.lineWidth=Math.max(2.5,n*.07),o.lineCap="round",o.stroke();const J=o.createLinearGradient(q,Q,q,Q+W);J.addColorStop(0,"#2e0808"),J.addColorStop(1,"#140303"),o.fillStyle=J,o.beginPath(),o.roundRect?o.roundRect(q,Q,k,W,it):o.rect&&o.rect(q,Q,k,W),o.fill(),o.strokeStyle="#ff3300",o.lineWidth=Math.max(1.5,n*.04),o.stroke();const B=String(this.totalKeys-this.keysCollected),et=B.length>1?Math.max(8,n*.22):Math.max(10,n*.28);o.save(),o.fillStyle="#ff8888",o.font=`bold ${et}px "Outfit", "Inter", sans-serif`,o.textAlign="center",o.textBaseline="middle",o.shadowColor="#ff3300",o.shadowBlur=Math.max(2,n*.08),o.fillText(B,R,N+W/4),o.restore()}}else if(T===2)o.fillStyle=X.COLORS.PATH_VISITED,o.fillRect(h*n,f*n,n,n);else{const K=`${h},${f},${t}`,R=Math.floor(c)===h&&Math.floor(l)===f&&t===this.player.z,N=R?X.COLORS.TELEPORT:X.COLORS.START;this.drawVortex2D(o,h,f,n,N,R,K),g=!0}this.drawCellShadow2D(o,h,f,n,e,T,t)}):S?(v(h,f,()=>{if(this.visitedCells.has(`${h},${f},${t}`))if(y){const N=h===d&&f===u&&t===p,k=`${h},${f},${t}`,W=this.teleportCooldownTicks>0;if(N){const H=Math.floor(c)===h&&Math.floor(l)===f&&t===this.player.z,q=W?X.COLORS.TELEPORT_INACTIVE:H?X.COLORS.TELEPORT:X.COLORS.START;this.drawVortex2D(o,h,f,n,q,H&&!W,k)}else{const H=W?X.COLORS.TELEPORT_INACTIVE:X.COLORS.TELEPORT,q=Math.floor(c)===h&&Math.floor(l)===f&&t===this.player.z;this.drawVortex2D(o,h,f,n,H,q&&!W,k)}g=!0}else U?this.drawElevator2D(o,h,f,n,A,F,c,l,!1,t):this.floorImage.complete&&this.floorImage.naturalWidth!==0?o.drawImage(this.floorImage,h*n,f*n,n,n):(o.fillStyle=X.COLORS.PATH_VISITED,o.fillRect(h*n,f*n,n,n));const R=n*.05*Math.sin(Date.now()/300);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){const N=this.keyImage,k=N.naturalWidth/N.naturalHeight,W=n*.7;let H=W,q=W;k>1?q=W/k:H=W*k;const Q=h*n+(n-H)/2,it=f*n+(n-q)/2+R;o.drawImage(N,Q,it,H,q)}else o.beginPath(),o.arc(h*n+n/2,f*n+n/2+R,n*.25,0,2*Math.PI),o.fillStyle="#ffd700",o.fill();this.drawCellShadow2D(o,h,f,n,e,T,t)}),g=!0):x?(v(h,f,()=>{this.visitedCells.has(`${h},${f},${t}`)&&(this.floorImage.complete&&this.floorImage.naturalWidth!==0?o.drawImage(this.floorImage,h*n,f*n,n,n):(o.fillStyle=X.COLORS.PATH_VISITED,o.fillRect(h*n,f*n,n,n)));const R=n*.05*Math.sin(Date.now()/250);if(this.manaImage.complete&&this.manaImage.naturalWidth!==0){const N=this.manaImage,k=N.naturalWidth/N.naturalHeight,W=n*.7;let H=W,q=W;k>1?q=W/k:H=W*k;const Q=h*n+(n-H)/2,it=f*n+(n-q)/2+R;o.save(),o.shadowColor="rgba(0, 255, 255, 0.85)",o.shadowBlur=n*.35,o.shadowOffsetX=0,o.shadowOffsetY=0,o.drawImage(N,Q,it,H,q),o.restore()}else o.beginPath(),o.arc(h*n+n/2,f*n+n/2+R,n*.2,0,2*Math.PI),o.fillStyle="#00ffff",o.fill();this.drawCellShadow2D(o,h,f,n,e,T,t)}),g=!0):z?(v(h,f,()=>{if(this.floorImage.complete&&this.floorImage.naturalWidth!==0){o.save(),o.globalAlpha=.35,o.drawImage(this.floorImage,h*n,f*n,n,n),o.restore();const K=.22+.12*Math.sin(Date.now()/250);o.fillStyle=`rgba(136, 204, 255, ${K})`,o.fillRect(h*n,f*n,n,n)}else o.fillStyle=X.COLORS.PATH_KNOWN,o.fillRect(h*n,f*n,n,n)}),g=!0):this.isWallVisible(h,f,t)&&v(h,f,()=>{this.wallImage.complete&&this.wallImage.naturalWidth!==0?o.drawImage(this.wallImage,h*n,f*n,n,n):(o.fillStyle=X.COLORS.WALL,o.fillRect(h*n,f*n,n,n))})}g?this.staticMapCacheDirty=!0:this.staticMapCacheDirty=!1}isAdjacentToNonWall(t,e,i){const n=this.mazeGen.size;for(let a=-1;a<=1;a++)for(let r=-1;r<=1;r++){if(a===0&&r===0)continue;const o=t+a,c=e+r;if(o>=0&&o<n&&c>=0&&c<n&&this.maze.get(o,c,i)!==this.mazeGen.TYPES.WALL)return!0}return!1}isWallVisible(t,e,i){if(this.maze.get(t,e,i)!==0)return!1;const a=this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.revealed;return this.isNearVisited(t,e,i)||this.isAdjacentToStatue(t,e,i)||a&&this.isAdjacentToNonWall(t,e,i)}isNearVisited(t,e,i){for(let n=-1;n<=1;n++)for(let a=-1;a<=1;a++){const r=t+n,o=e+a;if(r>=0&&r<this.mazeGen.size&&o>=0&&o<this.mazeGen.size){const c=this.maze.get(r,o,i);if(c===2||c===3||c===this.mazeGen.TYPES.JELLY_PORTAL||c===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${r},${o},${i}`))return!0}}return!1}isAdjacentToStatue(t,e,i){const n=this.mazeGen.size,a=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:1},{dx:-1,dy:1},{dx:1,dy:-1},{dx:-1,dy:-1}];for(const r of a){const o=t+r.dx,c=e+r.dy;if(o>=0&&o<n&&c>=0&&c<n&&this.maze.get(o,c,i)===this.mazeGen.TYPES.STATUE)return!0}return!1}populateFullyRevealedCells(t){const e=this.mazeGen.size;for(let i=0;i<e;i++)for(let n=0;n<e;n++){const a=this.maze.get(i,n,t),r=a===this.mazeGen.TYPES.TELEPORT,o=r&&this.discoveredTeleports.has(`${i},${n},${t}`),c=a===2||a===3||a===4||a===5||o,l=(a===1||r&&!o)&&this.isNearVisited(i,n,t),d=this.revealedPathSet.has(`${i},${n},${t}`);(c||l||d||this.isWallVisible(i,n,t))&&this.fullyRevealedCells.add(`${i},${n},${t}`)}}updatePulse(){if(!this.isMap3DActive||this.pulsatingMaterials.length===0)return;const t=.2+.5*Math.abs(Math.sin(Date.now()*.003));this.pulsatingMaterials.forEach(e=>{e.emissiveIntensity=t})}loop(){if(this.isDestroyed)return;const t=performance.now(),e=(t-this.lastFrameTime)/1e3;this.lastFrameTime=t;const i=Math.min(e,.1);if(this.isIntroPlaying?this.controls.update():this.update(i),this.updateVortexAngles(i),this.isMap3DActive||this.isIntroPlaying)if(this.isIntroPlaying)this.renderer.render(this.scene,this.camera);else{const n=1-Math.exp(-10*i);this.visualActiveFloor+=(this.activeMapFloor-this.visualActiveFloor)*n,Math.abs(this.activeMapFloor-this.visualActiveFloor)<.001&&(this.visualActiveFloor=this.activeMapFloor),this.drawIsometricMap()}else this.draw2DMap(i);requestAnimationFrame(()=>this.loop())}updateVortexAngles(t){if(!this.vortexAngles)return;const e=Math.floor(this.player.x),i=Math.floor(this.player.y),n=this.player.z,a=Math.floor(this.mazeGen.startPos.x),r=Math.floor(this.mazeGen.startPos.y),o=this.mazeGen.startPos.z,c=`${a},${r},${o}`,d=e===a&&i===r&&n===o?X.VORTEX_SPEED_FAST:X.VORTEX_SPEED_NORMAL;this.vortexAngles.set(c,(this.vortexAngles.get(c)||0)+t*d),this.allTeleports&&this.allTeleports.forEach(p=>{const m=`${p.x},${p.y},${p.z}`,g=e===p.x&&i===p.y&&n===p.z,v=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===p.x&&this.inactiveTeleportPos.y===p.y&&this.inactiveTeleportPos.z===p.z,h=g&&!v?X.VORTEX_SPEED_FAST:X.VORTEX_SPEED_NORMAL;this.vortexAngles.set(m,(this.vortexAngles.get(m)||0)+t*h)});const u=this.getExitPos();if(u){const p=`${u.x},${u.y},${u.z}`,m=X.VORTEX_SPEED_NORMAL;this.vortexAngles.set(p,(this.vortexAngles.get(p)||0)+t*m)}}getHexColorVariation(t,e){let i=t.replace("#","");i.length===3&&(i=i.split("").map(c=>c+c).join(""));let n=parseInt(i,16),a=(n>>16)+e,r=(n>>8&255)+e,o=(n&255)+e;return a=Math.max(0,Math.min(255,a)),r=Math.max(0,Math.min(255,r)),o=Math.max(0,Math.min(255,o)),`#${((1<<24)+(a<<16)+(r<<8)+o).toString(16).slice(1)}`}drawVortex2D(t,e,i,n,a,r,o){const c=e*n+n/2,l=i*n+n/2;t.save(),t.translate(c,l),t.fillStyle=a,t.fillRect(-n/2,-n/2,n,n);const d=this.vortexAngles.get(o)||0;t.rotate(d);const u=this.getHexColorVariation(a,45),p=this.getHexColorVariation(a,-45),m=t.createRadialGradient(0,0,0,0,0,n*.45);m.addColorStop(0,u),m.addColorStop(.4,a),m.addColorStop(1,p);const g=t.createRadialGradient(0,0,0,0,0,n*.45);g.addColorStop(0,"#ffffff"),g.addColorStop(.3,u),g.addColorStop(1,"rgba(255, 255, 255, 0)");const v=3,h=n*.45;for(let f=0;f<v;f++){const T=f*2*Math.PI/v;t.beginPath(),t.strokeStyle=m,t.lineWidth=n*.09,t.lineCap="round";for(let _=0;_<=h;_+=1){const y=5/h,M=T+_*y,S=_*Math.cos(M),x=_*Math.sin(M);_===0?t.moveTo(S,x):t.lineTo(S,x)}t.stroke(),t.beginPath(),t.strokeStyle=g,t.lineWidth=n*.04,t.lineCap="round";for(let _=n*.12;_<=h;_+=1){const y=5/h,M=T+_*y+.15,S=_*Math.cos(M),x=_*Math.sin(M);_===Math.floor(n*.12)?t.moveTo(S,x):t.lineTo(S,x)}t.stroke()}t.restore()}playContinueAnimation(){this.isIntroPlaying=!0;const t=this.mazeGen.size;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="block");const e=document.getElementById("map3d-instructions");e&&(e.style.display="block"),this.isometricCanvas&&(this.isometricCanvas.style.display="none"),this.ui.setMap3DVisible(!0),this.isMap3DActive=!0,this.updateRendererSize(),this.build3DMap(!1),this.camera.position.set(t*.9,t*this.vScale*.6,t*.9),this.controls.target.set(0,0,0),this.controls.update(),this.hideCanvasInstant(),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=2,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableRotate=!1;const i=()=>{this.activeContinueTimer&&(clearTimeout(this.activeContinueTimer),this.activeContinueTimer=null),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this.controls.autoRotate=!1,this.animateCameraToPlayer(()=>{this._transitionToGame()})};this.activeSkipHandler=()=>i(),window.addEventListener("keydown",this.activeSkipHandler,{once:!0}),window.addEventListener("touchstart",this.activeSkipHandler,{once:!0}),this.activeContinueTimer=setTimeout(i,2500)}animateCameraToPlayer(t){const e=this.mazeGen.size,i=this.player.x-e/2,n=(this.player.z-e/2)*this.vScale,a=this.player.y-e/2,r=this.controls.target.clone(),o=new Z(i,n,a),c=this.camera.position.clone(),l=new Z(i+4,n+5,a+4),d=1100,u=performance.now(),p=m=>{if(this.isDestroyed)return;const g=m-u,v=Math.min(g/d,1),h=v<.5?4*v*v*v:1-Math.pow(-2*v+2,3)/2;this.controls.target.lerpVectors(r,o,h),this.camera.position.lerpVectors(c,l,h),this.controls.update(),v<1?requestAnimationFrame(p):t&&t()};requestAnimationFrame(p)}playIntroAnimation(){this.isIntroPlaying=!0;const t=this.mazeGen.size;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="block");const e=document.getElementById("map3d-instructions");for(e&&(e.style.display="block"),this.isometricCanvas&&(this.isometricCanvas.style.display="none");this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(new _r(16777215,.7));const i=new vr(16777215,.5);i.position.set(10,20,10),this.scene.add(i),this.ui.setMap3DVisible(!0),this.isMap3DActive=!0,this.updateRendererSize(),this.camera.position.set(t*.9,t*this.vScale*.6,t*.9),this.controls.target.set(0,0,0),this.controls.update(),this.hideCanvasInstant();const n=this.mazeGen.startPos,a=this.getExitPos(),r=new Re(.92,.92,.92),o=new se({color:X.COLORS.THREE_START,emissive:X.COLORS.THREE_START,emissiveIntensity:.6,transparent:!0,opacity:.95}),c=new te(r,o);c.position.set(Math.floor(n.x)-t/2,(n.z-t/2)*this.vScale,Math.floor(n.y)-t/2),this.scene.add(c);const l=new se({color:16724736,emissive:16724736,emissiveIntensity:.6,transparent:!0,opacity:.95}),d=new te(r,l);d.position.set(a.x-t/2,(a.z-t/2)*this.vScale,a.y-t/2);const u=new Re(.95,.95,.95),p=new ms({color:16711680,wireframe:!0}),m=new te(u,p);d.add(m),this.scene.add(d);const g=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],v=`${Math.floor(n.x)},${Math.floor(n.y)},${n.z}`,h=`${a.x},${a.y},${a.z}`,f=new Set([v,h]),T=[{x:Math.floor(n.x),y:Math.floor(n.y),z:n.z}],_=[{x:a.x,y:a.y,z:a.z}];let y=0,M=0;const S=[];for(;y<T.length||M<_.length;){if(y<T.length){const{x:W,y:H,z:q}=T[y++];for(const[Q,it,J]of g){const B=W+Q,et=H+it,ot=q+J,Mt=`${B},${et},${ot}`;B>=0&&B<t&&et>=0&&et<t&&ot>=0&&ot<t&&!f.has(Mt)&&this.maze.get(B,et,ot)!==this.mazeGen.TYPES.WALL&&(f.add(Mt),T.push({x:B,y:et,z:ot}),S.push({x:B,y:et,z:ot}))}}if(M<_.length){const{x:W,y:H,z:q}=_[M++];for(const[Q,it,J]of g){const B=W+Q,et=H+it,ot=q+J,Mt=`${B},${et},${ot}`;B>=0&&B<t&&et>=0&&et<t&&ot>=0&&ot<t&&!f.has(Mt)&&this.maze.get(B,et,ot)!==this.mazeGen.TYPES.WALL&&(f.add(Mt),_.push({x:B,y:et,z:ot}),S.push({x:B,y:et,z:ot}))}}}this.controls.autoRotate=!0,this.controls.autoRotateSpeed=1.8,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableRotate=!1;const x=new Re(.88,.88,.88),z=new se({color:X.COLORS.THREE_VISITED,transparent:!0,opacity:.72}),E=20,A=200,F=S.length,U=Math.max(1,Math.ceil(F/A));let K=0;this.activeIntroTimer=null;const R=[],N=()=>{this.activeIntroTimer&&(clearTimeout(this.activeIntroTimer),this.activeIntroTimer=null),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this._playGlitchAndTransition(R)};this.activeSkipHandler=()=>N(),window.addEventListener("keydown",this.activeSkipHandler,{once:!0}),window.addEventListener("touchstart",this.activeSkipHandler,{once:!0});const k=()=>{if(this.isDestroyed)return;const W=Math.min(K+U,S.length);for(;K<W;K++){const{x:H,y:q,z:Q}=S[K],it=Q%2===0;let J;it?J=new gs(.35,.35,2*this.vScale,8):J=x;const B=new te(J,z);B.position.set(H-t/2,(Q-t/2)*this.vScale,q-t/2),this.scene.add(B),R.push(B)}K<S.length?this.activeIntroTimer=setTimeout(k,E):(this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this._playGlitchAndTransition(R))};this.activeIntroTimer=setTimeout(k,E)}_playGlitchAndTransition(t){if(this.isDestroyed)return;const e=5,i=90;let n=0;const a=()=>{if(this.isDestroyed)return;const r=n%2===0;t.forEach(o=>{o&&(o.visible=r)}),n++,n<e*2?setTimeout(a,i):(t.forEach(o=>{o&&(o.visible=!1)}),setTimeout(()=>this._transitionToGame(),400))};a()}_transitionToGame(){this.isDestroyed||(this.controls&&(this.controls.autoRotate=!1,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls.enableRotate=!0),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.classList.add("intro-fade-out"),setTimeout(()=>{if(this.isDestroyed)return;this.ui.setMap3DVisible(!1),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.classList.remove("intro-fade-out"),this.isMap3DActive=!1,this.isIntroPlaying=!1,this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1);const t=document.getElementById("map-area-container"),e=document.getElementById("left-hud-panel"),i=document.getElementById("right-hud-panel"),n=document.getElementById("bottom-hud-container");t&&(t.classList.remove("intro-hidden"),t.classList.add("intro-reveal"),setTimeout(()=>t.classList.remove("intro-reveal"),700)),e&&(e.classList.remove("intro-hidden"),e.classList.add("intro-reveal"),setTimeout(()=>e.classList.remove("intro-reveal"),700)),i&&(i.classList.remove("intro-hidden"),i.classList.add("intro-reveal"),setTimeout(()=>i.classList.remove("intro-reveal"),700)),n&&(n.classList.remove("intro-hidden"),n.classList.add("intro-reveal"),setTimeout(()=>n.classList.remove("intro-reveal"),700)),this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2,this.isResumedFromSave||this.ui.showInfoBanner(Ot("msgWhereAmI"))},600))}startStorytelling(){this.isStoryActive=!0,this.storyMsgIndex=0,this.storyState="OPENING",this.storyWidthProgress=0,this.storyCloseProgress=1,this.storyCharIndex=0,this.storyTypeTimer=0;const t=document.getElementById("story-screen");t&&t.classList.remove("hidden");const e=document.getElementById("story-image-loader"),i=document.getElementById("story-dialogue");this.isPreloadingActive=!1;const n=()=>{this.isPreloadingActive=!1,i&&(i.style.transform="scaleX(0)"),this.updateStoryImage(),this.handleStoryKeyDown=r=>{r.key.toLowerCase()==="escape"?this.skipStory():this.isPreloadingActive||this.triggerAdvanceStory(),r.preventDefault()},window.addEventListener("keydown",this.handleStoryKeyDown),this.handleStoryClick=r=>{const o=r.target;o&&o.closest("#story-skip-btn")||this.isPreloadingActive||this.triggerAdvanceStory()},this.handleStoryTouch=r=>{const o=r.target;o&&o.closest("#story-skip-btn")||(this.isPreloadingActive||this.triggerAdvanceStory(),r.preventDefault())},t&&(t.addEventListener("click",this.handleStoryClick),t.addEventListener("touchstart",this.handleStoryTouch,{passive:!1}))},a=document.getElementById("story-skip-btn");if(a&&(a.onclick=r=>{r.stopPropagation(),this.skipStory()}),e&&i&&(i.style.transform="scaleX(0)",this.storyImagesLoadedCount<this.storyImagesTotalCount)){this.isPreloadingActive=!0,e.classList.remove("hidden"),this.storyImagesPreloadPromise.then(()=>{e.classList.add("hidden"),n()});return}n()}endStorytelling(){this.isStoryActive=!1,this.isPreloadingActive=!1;const t=document.getElementById("story-screen");t&&t.classList.add("hidden"),this.handleStoryKeyDown&&(window.removeEventListener("keydown",this.handleStoryKeyDown),this.handleStoryKeyDown=null),this.handleStoryClick&&t&&(t.removeEventListener("click",this.handleStoryClick),this.handleStoryClick=null),this.handleStoryTouch&&t&&(t.removeEventListener("touchstart",this.handleStoryTouch),this.handleStoryTouch=null),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1);const e=document.getElementById("map-area-container"),i=document.getElementById("left-hud-panel"),n=document.getElementById("right-hud-panel"),a=document.getElementById("bottom-hud-container");e&&(e.classList.remove("hidden","intro-hidden"),e.classList.add("intro-reveal"),setTimeout(()=>e.classList.remove("intro-reveal"),700)),i&&(i.classList.remove("hidden","intro-hidden"),i.classList.add("intro-reveal"),setTimeout(()=>i.classList.remove("intro-reveal"),700)),n&&(n.classList.remove("hidden","intro-hidden"),n.classList.add("intro-reveal"),setTimeout(()=>n.classList.remove("intro-reveal"),700)),a&&(a.classList.remove("hidden","intro-hidden"),a.classList.add("intro-reveal"),setTimeout(()=>a.classList.remove("intro-reveal"),700)),this.ui.setMap3DVisible(!1),this.isMap3DActive=!1,this.isIntroPlaying=!1,this.staticMapCacheDirty=!0,this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2,this.isResumedFromSave||this.ui.showInfoBanner(Ot("msgWhereAmI"))}updateStoryImage(){const t=document.getElementById("story-img"),e=document.getElementById("story-image-canvas");if(!(!t||!e))if(e.style.background="#0b0b0b",this.storyMsgIndex===5)t.style.display="none",e.style.background="radial-gradient(circle, #222222 0%, #000000 80%)",e.removeAttribute("data-placeholder");else{const i=this.preloadedStoryImages[this.storyMsgIndex];if(i)t.src=i.src,t.style.display="block",e.removeAttribute("data-placeholder");else{let n="";this.storyMsgIndex===0?n="assets/images/presentation/1-mystical-church-of-chaos.jpg":this.storyMsgIndex===1?n="assets/images/presentation/2-mystical-church-of-chaos.jpg":this.storyMsgIndex===2?n="assets/images/presentation/3-the-jelly-god.jpg":this.storyMsgIndex===3?n="assets/images/presentation/4-player-alone.jpg":this.storyMsgIndex===4&&(n="assets/images/presentation/5-player-thrown.jpg"),t.src=n,t.onerror=()=>{t.style.display="none",e.setAttribute("data-placeholder",`[Image ${this.storyMsgIndex+1}]`)},t.onload=()=>{t.style.display="block",e.removeAttribute("data-placeholder")}}}}updateStory(t){if(!this.isStoryActive||this.isPreloadingActive)return;const e=document.getElementById("story-text"),i=document.getElementById("story-dialogue"),n=document.getElementById("story-arrow");if(!i||!e)return;const a=["storyMsg1","storyMsg2","storyMsg3","storyMsg4","storyMsg5","storyMsg6"];if(this.storyMsgIndex>=a.length){this.endStorytelling();return}const r=Ot(a[this.storyMsgIndex]),o=c=>c<.5?4*c*c*c:1-Math.pow(-2*c+2,3)/2;this.storyState==="OPENING"?(e.textContent="",n&&n.classList.add("hidden"),this.storyWidthProgress+=t/.45,this.storyWidthProgress>=1&&(this.storyWidthProgress=1,this.storyState="TYPING",this.storyCharIndex=0,this.storyTypeTimer=0),i.style.transform=`scaleX(${o(this.storyWidthProgress)})`):this.storyState==="TYPING"?(i.style.transform="scaleX(1)",n&&n.classList.add("hidden"),this.storyTypeTimer+=t,this.storyTypeTimer>=.025&&(this.storyTypeTimer=0,this.storyCharIndex++,e.textContent=r.substring(0,this.storyCharIndex),this.storyCharIndex>=r.length&&(this.storyState="WAITING"))):this.storyState==="WAITING"?(i.style.transform="scaleX(1)",e.textContent=r,n&&n.classList.remove("hidden")):this.storyState==="CLOSING"&&(e.textContent="",n&&n.classList.add("hidden"),this.storyCloseProgress-=t/.45,this.storyCloseProgress<=0&&(this.storyCloseProgress=0,this.endStorytelling()),i.style.transform=`scaleX(${o(this.storyCloseProgress)})`)}triggerAdvanceStory(){const t=["storyMsg1","storyMsg2","storyMsg3","storyMsg4","storyMsg5","storyMsg6"];if(this.storyMsgIndex>=t.length)return;const e=Ot(t[this.storyMsgIndex]);if(this.storyState==="CLOSING"){this.skipStory();return}if(this.storyState==="OPENING")this.storyState="TYPING",this.storyWidthProgress=1,this.storyCharIndex=0,this.storyTypeTimer=0;else if(this.storyState==="TYPING"){this.storyState="WAITING",this.storyCharIndex=e.length;const i=document.getElementById("story-text");i&&(i.textContent=e)}else if(this.storyState==="WAITING")if(this.storyMsgIndex+1<t.length){this.storyMsgIndex++,this.storyState="TYPING",this.storyCharIndex=0,this.storyTypeTimer=0,this.updateStoryImage();const i=document.getElementById("story-text");i&&(i.textContent="")}else this.storyState="CLOSING",this.storyCloseProgress=1}skipStory(){this.endStorytelling()}toggleTeleportMap(t){this.isMap3DActive=t,this.isTeleportMode=t;const e=document.getElementById("mobile-teleport-exit-btn");if(t){this.isMouseOrTouchDetected=!1,e&&e.classList.remove("hidden"),this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.add("hidden"),this.ui.setMap3DVisible(!0),this.activeMapFloor=this.player.z,this.visualActiveFloor=this.player.z,this.mapCursor={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.mapZoom=1,this.mapPanOffsetX=0,this.mapPanOffsetY=0;const i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,r=this.allTeleports.findIndex(c=>c.x===i&&c.y===n&&c.z===a);r!==-1&&(this.selectedTeleportIndex=r),this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="none");const o=document.getElementById("map3d-instructions");o&&(o.style.display="none"),this.isometricCanvas?this.isometricCanvas.style.display="block":this.initIsometricCanvas(),this.teleportConfirmModalActive=!1}else this.lastTeleportCloseTime=Date.now(),e&&e.classList.add("hidden"),this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.remove("hidden"),this.ui.setMap3DVisible(!1),this.isometricCanvas&&(this.isometricCanvas.style.display="none"),this.teleportConfirmModalActive=!1}onCanvasClick(t){if(!this.isMap3DActive)return;const e=this.renderer.domElement.getBoundingClientRect();if(this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.isTeleportMode){const i=this.raycaster.intersectObjects(this.teleportMeshes);if(i.length>0){const n=i[0].object,{gridX:a,gridY:r,gridZ:o}=n.userData,c=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===a&&this.inactiveTeleportPos.y===r&&this.inactiveTeleportPos.z===o,l=Math.floor(this.player.x),d=Math.floor(this.player.y),u=this.player.z;a===l&&r===d&&o===u?this.toggleTeleportMap(!1):c||this.teleportTo(a,r,o)}}else{const i=this.raycaster.intersectObjects(this.knownMeshes);if(i.length>0){const n=i[0].object,{gridX:a,gridY:r,gridZ:o}=n.userData;this.triggerPathReveal(a,r,o)}}}toggleZoom(){if(this.mazeGen.size<=11)return;this.isZoomActive=!this.isZoomActive,this.staticMapCacheDirty=!0;const t=document.getElementById("zoom-out-icon"),e=document.getElementById("zoom-in-icon");t&&e&&(this.isZoomActive?(t.classList.remove("hidden"),e.classList.add("hidden")):(t.classList.add("hidden"),e.classList.remove("hidden")))}togglePause(){this.isGameOver||this.isDestroyed||this.isIntroPlaying||(this.isPaused=!this.isPaused,this.isPaused?(this.ui.showPause(),this.ui.uiMobilePauseBtn&&this.ui.uiMobilePauseBtn.classList.add("hidden")):(this.ui.hidePause(),this.ui.uiMobilePauseBtn&&!this.ui.uiMobileControls.classList.contains("hidden")&&this.ui.uiMobilePauseBtn.classList.remove("hidden")))}checkExitNeighborVisited(){const t=this.getExitPos(),e=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const i of e){const n=t.x+i.dx,a=t.y+i.dy,r=t.z+i.dz;if(n>=0&&n<this.mazeGen.size&&a>=0&&a<this.mazeGen.size&&r>=0&&r<this.mazeGen.size){const o=this.maze.get(n,a,r);if(o!==this.mazeGen.TYPES.WALL&&(o===this.mazeGen.TYPES.VISITED||o===this.mazeGen.TYPES.START||o===this.mazeGen.TYPES.ELEVATOR_VISITED))return!0}}return!1}findShortestPath(t,e,i=!1){const n=this.mazeGen.size,a=new Int8Array(n*n*n);for(let r=0;r<n;r++)for(let o=0;o<n;o++)for(let c=0;c<n;c++){const l=r*n*n+o*n+c,d=this.maze.get(r,o,c),u=r===t.x&&o===t.y&&c===t.z,p=r===e.x&&o===e.y&&c===e.z,m=r===e.x&&o===e.y&&(c===e.z-1||c===e.z+1)&&c%2===0;if(d===this.mazeGen.TYPES.WALL){a[l]=0;continue}const v=d===this.mazeGen.TYPES.TELEPORT,h=v&&this.discoveredTeleports.has(`${r},${o},${c}`),f=d===this.mazeGen.TYPES.VISITED||d===this.mazeGen.TYPES.START||d===this.mazeGen.TYPES.ELEVATOR_VISITED||h,T=(d===this.mazeGen.TYPES.PATH||v&&!h)&&this.isNearVisited(r,o,c);let _=!1;i?_=f||u||p||m:_=f||T||u||p||m,a[l]=_?1:0}return ul(t,e,a,n,0)??[]}triggerPathReveal(t,e,i){if(this.pathRevealInterval||this.pathfinderBlockedUntil&&Date.now()<this.pathfinderBlockedUntil)return;if(this.pathfindersRemaining<=0){this.ui.showInfoBanner(Ot("msgNoPathfindersRemaining"));return}this.pathRevealInterval&&(clearInterval(this.pathRevealInterval),this.pathRevealInterval=null),this.revealedPathSet.clear();const n=this.maze.get(t,e,i)===this.mazeGen.TYPES.EXIT;if(n&&!this.exitPathfinderUnlocked){this.ui.showInfoBanner(Ot("msgExitNotFoundYet"));return}let a=i;i%2===0&&(a=this.player.z<i?i+1:i-1,a<1&&(a=1),a>=this.mazeGen.size&&(a=this.mazeGen.size-2));const r={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},o={x:t,y:e,z:a},c=this.findShortestPath(r,o,n);!c||c.length===0||(this.pathfindersRemaining--,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),os(this),this.activePathReveal=c,this.revealedPathProgress=0,this.revealedPathSet.add(`${t},${e},${i}`),this.pathRevealInterval=setInterval(()=>{if(this.revealedPathProgress<this.activePathReveal.length){const l=this.activePathReveal[this.revealedPathProgress],d=`${l.x},${l.y},${l.z}`;if(this.revealedPathSet.add(d),this.revealedPathProgress>0){const u=this.activePathReveal[this.revealedPathProgress-1];if(Math.abs(l.z-u.z)===2){const p=(l.z+u.z)/2,m=`${l.x},${l.y},${p}`;if(this.revealedPathSet.add(m),this.isMap3DActive&&this.gridMeshes){const g=this.mazeGen.size,v=this.gridMeshes[l.x*g*g+l.y*g+p];v&&(v.material=new se({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.95*(this.isTeleportMode?.2:1)}))}}}if(this.staticMapCacheDirty=!0,this.isMap3DActive&&this.gridMeshes){const u=this.mazeGen.size,p=this.gridMeshes[l.x*u*u+l.y*u+l.z];p&&(p.material=new se({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.95*(this.isTeleportMode?.2:1)}))}this.revealedPathProgress++}else clearInterval(this.pathRevealInterval),this.pathRevealInterval=null,this.pathfinderBlockedUntil=Date.now()+600},120))}teleportTo(t,e,i){if(this.skipCellAnimations=!0,this.player.x=t+X.PLAYER_START_X,this.player.y=e+X.PLAYER_START_Y%1,this.player.z=i,this.staticMapCacheDirty=!0,this.toggleTeleportMap(!1),this.maze.get(t,e,i)===this.mazeGen.TYPES.PATH&&(this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${t},${e},${i}`)),!this.isSafeMode){const n=Math.floor(this.degree*1.5)+3;this.teleportCooldownTicks=n,this.inactiveTeleportPos={x:t,y:e,z:i},this.ui.showInfoBanner(Ot("msgOopsNoisyShit"));for(const a of this.hunters){if(a.state==="DEAD_BY_JELLY")continue;a.state="TELEPORT_TRACKING";const r=a.findPathToTarget({x:t,y:e,z:i},this.maze,this.mazeGen.TYPES);r?a.pathToTarget=r:a.pathToTarget=[]}}this.updateFloorUI(),this.draw2DMap(),this.input.keys={}}initIsometricCanvas(){const t=document.createElement("canvas");this.isometricCanvas=t,t.id="isometric-map-canvas",t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.zIndex="101",this.isometricCtx=t.getContext("2d"),this.ui.uiMap3dContainer.appendChild(t),t.addEventListener("click",h=>this.handleIsometricClick(h));const e=()=>{this.isMouseOrTouchDetected||(this.isMouseOrTouchDetected=!0)};t.addEventListener("mousemove",e),t.addEventListener("pointerdown",e);let i=null,n=null,a=0,r=0,o=0,c=0,l=!1,d=!1,u=!1,p=0;t.addEventListener("touchstart",h=>{if(!(!this.isMap3DActive||this.isIntroPlaying)){if(p=0,u=!1,h.touches.length===1){const f=h.touches[0];a=f.clientX,r=f.clientY,o=this.mapPanOffsetX,c=this.mapPanOffsetY,d=!0,l=!1}else if(h.touches.length===2){l=!0,d=!1;const f=h.touches[0],T=h.touches[1];i=Math.hypot(f.clientX-T.clientX,f.clientY-T.clientY),n=this.mapZoom}}},{passive:!1}),t.addEventListener("touchmove",h=>{if(!(!this.isMap3DActive||this.isIntroPlaying)){if(l&&h.touches.length===2){h.preventDefault();const f=h.touches[0],T=h.touches[1],_=Math.hypot(f.clientX-T.clientX,f.clientY-T.clientY);if(i&&i>0&&n){const y=t.getBoundingClientRect(),M=(f.clientX+T.clientX)/2-y.left,S=(f.clientY+T.clientY)/2-y.top,x=this.mapZoom;let z=n*(_/i);z=Math.max(.5,Math.min(4,z));const E=z/x;this.mapPanOffsetX=M-(M-(y.width/2+this.mapPanOffsetX))*E-y.width/2,this.mapPanOffsetY=S-(S-(y.height/2+this.mapPanOffsetY))*E-y.height/2,this.mapZoom=z,p=100}}else if(d&&h.touches.length===1){const f=h.touches[0],T=f.clientX-a,_=f.clientY-r,y=Math.hypot(T,_);if(p=Math.max(p,y),!u&&Math.abs(_)>40&&Math.abs(_)>Math.abs(T)*1.5){const M=this.mazeGen.size;_<-40?this.activeMapFloor-2>=1&&(this.activeMapFloor-=2,u=!0):_>40&&this.activeMapFloor+2<=M-2&&(this.activeMapFloor+=2,u=!0)}u||(this.mapPanOffsetX=o+T,this.mapPanOffsetY=c+_),h.preventDefault()}}},{passive:!1}),t.addEventListener("touchend",h=>{if(l=!1,d=!1,p<8&&!u){const f=h.changedTouches[0];if(f){const T={clientX:f.clientX,clientY:f.clientY};this.handleIsometricClick(T)}}}),t.addEventListener("wheel",h=>{if(!this.isMap3DActive||this.isIntroPlaying)return;h.preventDefault();const f=t.getBoundingClientRect(),T=h.clientX-f.left,_=h.clientY-f.top,y=this.mapZoom,M=1.15;let S=h.deltaY<0?y*M:y/M;S=Math.max(.5,Math.min(4,S));const x=f.width,z=f.height,E=S/y;this.mapPanOffsetX=T-(T-(x/2+this.mapPanOffsetX))*E-x/2,this.mapPanOffsetY=_-(_-(z/2+this.mapPanOffsetY))*E-z/2,this.mapZoom=S},{passive:!1});let m=!1,g=0,v=0;t.addEventListener("mousedown",h=>{if(!this.isMap3DActive||this.isIntroPlaying)return;const f=t.getBoundingClientRect(),T=h.clientX-f.left,_=h.clientY-f.top;if(!(this.floorClickRects&&this.floorClickRects.some(y=>T>=y.x&&T<=y.x+y.w&&_>=y.y&&_<=y.y+y.h))){if(this.isTeleportMode){if(this.teleportConfirmModalActive&&this.teleportModalClickRects&&this.teleportModalClickRects.some(y=>T>=y.x&&T<=y.x+y.w&&_>=y.y&&_<=y.y+y.h)||!this.teleportConfirmModalActive&&this.teleportDotsClickRects&&this.teleportDotsClickRects.some(y=>T>=y.x&&T<=y.x+y.w&&_>=y.y&&_<=y.y+y.h))return;if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const y=this.teleportGoBtnClickRect;if(T>=y.x&&T<=y.x+y.w&&_>=y.y&&_<=y.y+y.h)return}}m=!0,g=h.clientX,v=h.clientY}}),window.addEventListener("mousemove",h=>{if(m){const f=h.clientX-g,T=h.clientY-v;this.mapPanOffsetX+=f,this.mapPanOffsetY+=T,g=h.clientX,v=h.clientY}}),window.addEventListener("mouseup",()=>{m=!1}),t.addEventListener("mousemove",h=>{if(!this.isMap3DActive||this.isIntroPlaying)return;const f=t.getBoundingClientRect(),T=h.clientX-f.left,_=h.clientY-f.top;if(t.style.cursor="default",this.isTeleportMode){if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const y=this.teleportGoBtnClickRect;if(T>=y.x&&T<=y.x+y.w&&_>=y.y&&_<=y.y+y.h){t.style.cursor="pointer";return}}if(this.teleportConfirmModalActive&&this.teleportModalClickRects){for(const y of this.teleportModalClickRects)if(T>=y.x&&T<=y.x+y.w&&_>=y.y&&_<=y.y+y.h){this.teleportModalSelection=y.selection,t.style.cursor="pointer";return}}else if(this.teleportDotsClickRects){const y=this.getSelectableTeleportIndices();for(const M of this.teleportDotsClickRects)if(T>=M.x&&T<=M.x+M.w&&_>=M.y&&_<=M.y+M.h&&y.includes(M.index)){this.selectedTeleportIndex=M.index;const S=this.allTeleports[M.index];this.activeMapFloor=S.z,this.mapCursor={x:S.x,y:S.y,z:S.z},t.style.cursor="pointer";return}}}if(!this.isTeleportMode){const y=this.mazeGen.size,M=this.activeMapFloor;let S=f.width*.7/y;S=Math.max(20,Math.min(48,S));const x=S*this.mapZoom,z=x/2,E=x/4,A=z*5,F=f.width/2+this.mapPanOffsetX,U=f.height/2+this.mapPanOffsetY,K=[];M+2<=y-2&&K.push(M+2),M+1<y&&K.push(M+1),K.push(M),M-1>=0&&K.push(M-1),M-2>=1&&K.push(M-2);for(const R of K){const N=U-(R-M)*A,k=(T-F)/z,W=(_-N)/E,H=Math.round((k+W)/2),q=Math.round((W-k)/2);if(H>=0&&H<y&&q>=0&&q<y&&this.getInteractiveElements(M).some(J=>J.x===H&&J.y===q&&J.z===R)){this.mapCursor={x:H,y:q,z:R},t.style.cursor="pointer";return}}}})}handleIsometricClick(t){if(!this.isMap3DActive||this.isIntroPlaying||t instanceof MouseEvent&&Date.now()-this.lastTeleportCloseTime<500)return;const e=this.isometricCanvas.getBoundingClientRect(),i=t.clientX-e.left,n=t.clientY-e.top;if(this.isTeleportMode){if(this.teleportConfirmModalActive){if(this.teleportModalClickRects){for(const _ of this.teleportModalClickRects)if(i>=_.x&&i<=_.x+_.w&&n>=_.y&&n<=_.y+_.h){if(_.selection==="go"){const y=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(y.x,y.y,y.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;return}}this.teleportConfirmModalActive=!1;return}if(!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const _=this.teleportGoBtnClickRect;if(i>=_.x&&i<=_.x+_.w&&n>=_.y&&n<=_.y+_.h){const y=this.allTeleports[this.selectedTeleportIndex],M=Math.floor(this.player.x),S=Math.floor(this.player.y),x=this.player.z,z=y&&y.x===M&&y.y===S&&y.z===x;y&&!z&&(this.teleportTo(y.x,y.y,y.z),this.toggleTeleportMap(!1));return}}if(this.teleportDotsClickRects){const _=this.teleportDotsClickRects.find(y=>i>=y.x&&i<=y.x+y.w&&n>=y.y&&n<=y.y+y.h);if(_){if(this.getSelectableTeleportIndices().includes(_.index)){this.selectedTeleportIndex=_.index;const M=this.allTeleports[_.index];this.activeMapFloor=M.z,this.mapCursor={x:M.x,y:M.y,z:M.z}}return}}}if(this.floorClickRects){for(const _ of this.floorClickRects)if(i>=_.x&&i<=_.x+_.w&&n>=_.y&&n<=_.y+_.h){this.activeMapFloor=_.floor;return}}const a=this.mazeGen.size,r=this.activeMapFloor;let o=e.width*.7/a;o=Math.max(20,Math.min(48,o));const c=o*this.mapZoom,l=c/2,d=c/4,u=l*5,p=e.width/2+this.mapPanOffsetX,m=e.height/2+this.mapPanOffsetY,g=(_,y,M)=>{const S=(_-y)*l+p,x=(_+y)*d-(M-r)*u+m;return{x:S,y:x}};if(this.isTeleportMode){const _=this.getInteractiveElements(r);let y=null,M=1/0;const S=this.isTouchDevice?52:35;for(const x of _){if(x.type!=="teleport")continue;const z=g(x.x,x.y,x.z),E=i-z.x,A=n-z.y,F=Math.sqrt(E*E+A*A);F<M&&(M=F,y=x)}if(y&&M<=S){const{x,y:z,z:E}=y,A=this.allTeleports.findIndex(U=>U.x===x&&U.y===z&&U.z===E),F=this.getSelectableTeleportIndices();A!==-1&&F.includes(A)&&(this.selectedTeleportIndex=A,this.mapCursor={x,y:z,z:E})}return}const v=this.getInteractiveElements(r);let h=null,f=1/0;const T=this.isTouchDevice?52:35;for(const _ of v){const y=g(_.x,_.y,_.z),M=i-y.x,S=n-y.y,x=Math.sqrt(M*M+S*S);x<f&&(f=x,h=_)}if(h&&f<=T){this.mapCursor={x:h.x,y:h.y,z:h.z},this.triggerPathReveal(h.x,h.y,h.z);return}}navigateCursor(t){const e=this.activeMapFloor,i=this.getInteractiveElements(e);if(i.length===0)return;const n=this.mapCursor.x,a=this.mapCursor.y,r=this.mapCursor.z,o=this.mazeGen.size;if(t==="left"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e+1&&r===e-1)){this.mapCursor={x:n,y:a,z:e+1};return}for(let l=n-1;l>=0;l--){const d=i.filter(u=>u.x===l&&u.y===a);if(d.length>0){const u=d.find(m=>m.z===e-1),p=d.find(m=>m.z===e+1);u&&p?this.mapCursor={x:l,y:a,z:e-1}:this.mapCursor={x:l,y:a,z:d[0].z};return}}}else if(t==="right"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e-1&&r===e+1)){this.mapCursor={x:n,y:a,z:e-1};return}for(let l=n+1;l<o;l++){const d=i.filter(u=>u.x===l&&u.y===a);if(d.length>0){const u=d.find(m=>m.z===e-1),p=d.find(m=>m.z===e+1);u&&p?this.mapCursor={x:l,y:a,z:e+1}:this.mapCursor={x:l,y:a,z:d[0].z};return}}}else if(t==="up"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e-1&&r===e+1)){this.mapCursor={x:n,y:a,z:e-1};return}for(let l=a-1;l>=0;l--){const d=i.filter(u=>u.y===l);if(d.length>0){let u=-1,p=1/0;for(const h of d){const f=Math.abs(h.x-n);f<p?(p=f,u=h.x):f===p&&h.x<u&&(u=h.x)}const m=d.filter(h=>h.x===u),g=m.find(h=>h.z===e-1),v=m.find(h=>h.z===e+1);g&&v?this.mapCursor={x:u,y:l,z:e+1}:this.mapCursor={x:u,y:l,z:m[0].z};return}}}else if(t==="down"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e+1&&r===e-1)){this.mapCursor={x:n,y:a,z:e+1};return}for(let l=a+1;l<o;l++){const d=i.filter(u=>u.y===l);if(d.length>0){let u=-1,p=1/0;for(const h of d){const f=Math.abs(h.x-n);f<p?(p=f,u=h.x):f===p&&h.x<u&&(u=h.x)}const m=d.filter(h=>h.x===u),g=m.find(h=>h.z===e-1),v=m.find(h=>h.z===e+1);g&&v?this.mapCursor={x:u,y:l,z:e-1}:this.mapCursor={x:u,y:l,z:m[0].z};return}}}}getInteractiveElements(t){const e=[],i=this.mazeGen.size,n=this.mazeGen.TYPES,a=(r,o,c)=>{if(c<0||c>=i)return!1;const l=this.maze.get(r,o,c);return l===n.VISITED||l===n.START||l===n.ELEVATOR_VISITED||l===n.TELEPORT&&this.discoveredTeleports.has(`${r},${o},${c}`)};for(let r=0;r<i;r++)for(let o=0;o<i;o++){const c=this.maze.get(r,o,t);if(c===n.WALL)continue;const l=c===n.TELEPORT,d=l&&this.discoveredTeleports.has(`${r},${o},${t}`);if(d){e.push({x:r,y:o,z:t,type:"teleport"});continue}if(c===n.START){e.push({x:r,y:o,z:t,type:"start"});continue}if(c===n.EXIT){this.keysCollected===this.totalKeys&&this.exitPathfinderUnlocked&&e.push({x:r,y:o,z:t,type:"exit"});continue}(c===n.PATH||l&&!d)&&this.isNearVisited(r,o,t)&&e.push({x:r,y:o,z:t,type:"known"})}for(const r of[t-1,t+1])if(!(r<0||r>=i||r-1<1||r+1>=i))for(let o=0;o<i;o++)for(let c=0;c<i;c++){const l=this.maze.get(o,c,r);if(l===n.WALL)continue;const d=l===n.ELEVATOR_VISITED;l===1&&(a(o,c,r-1)||a(o,c,r+1))&&!d&&a(o,c,t)&&e.push({x:o,y:c,z:r,type:"shaft"})}return e}drawIsometricMap(){if(!this.isMap3DActive||this.isIntroPlaying)return;const t=this.isometricCanvas,e=this.isometricCtx;if(!t||!e)return;const i=t.width=window.innerWidth,n=t.height=window.innerHeight;e.clearRect(0,0,i,n),e.fillStyle="#000000",e.fillRect(0,0,i,n);const a=this.mazeGen.size,r=this.activeMapFloor,o=this.visualActiveFloor;let c=i*.7/a;c=Math.max(20,Math.min(48,c));const l=c*this.mapZoom,d=l/2,u=l/2,p=l/4,m=u*5,g=i/2+this.mapPanOffsetX,v=n/2+this.mapPanOffsetY,h=(w,D,$)=>{const V=w,Y=D,I=(V-Y)*u+g,_t=(V+Y)*p-($-o)*m+v;return{x:I,y:_t}},f=w=>{e.strokeStyle=`rgba(0, 255, 0, ${.15*w})`,e.lineWidth=1;for(let D=0;D<a;D++)for(let $=0;$<a;$++){const V=h($,D,r);e.beginPath(),e.moveTo(V.x,V.y-p),e.lineTo(V.x+u,V.y),e.lineTo(V.x,V.y+p),e.lineTo(V.x-u,V.y),e.closePath(),e.stroke()}},T=(w,D,$,V,Y,I,_t=1)=>{e.save(),e.globalAlpha=_t,e.beginPath(),e.moveTo(w-$,D),e.lineTo(w,D+V),e.lineTo(w,D+V-Y),e.lineTo(w-$,D-Y),e.closePath(),e.fillStyle=I,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(w,D+V),e.lineTo(w+$,D),e.lineTo(w+$,D-Y),e.lineTo(w,D+V-Y),e.closePath(),e.fillStyle=I,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.beginPath(),e.moveTo(w-$,D-Y),e.lineTo(w,D+V-Y),e.lineTo(w+$,D-Y),e.lineTo(w,D-V-Y),e.closePath(),e.fillStyle=I,e.fill(),e.restore()},_=(w,D,$,V,Y,I,_t,vt,xt=1)=>{e.save(),e.globalAlpha=xt,e.beginPath(),e.moveTo(w-$,D),e.lineTo(w,D+V),e.lineTo(w,D+V-Y),e.lineTo(w-$,D-Y),e.closePath(),e.fillStyle=I,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(w,D+V),e.lineTo(w+$,D),e.lineTo(w+$,D-Y),e.lineTo(w,D+V-Y),e.closePath(),e.fillStyle=I,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.restore(),e.save(),e.globalAlpha=xt,e.beginPath(),e.moveTo(w-$,D-Y),e.lineTo(w,D+V-Y),e.lineTo(w+$,D-Y),e.lineTo(w,D-V-Y),e.closePath(),e.fillStyle=I,e.fill(),e.clip(),e.translate(w,D-Y),e.scale(1,.5);const Tt=this.vortexAngles.get(vt)||0;e.rotate(Tt);const Nt=this.getHexColorVariation(I,45),It=this.getHexColorVariation(I,-45),P=$,b=e.createRadialGradient(0,0,0,0,0,P);b.addColorStop(0,Nt),b.addColorStop(.4,I),b.addColorStop(1,It);const j=e.createRadialGradient(0,0,0,0,0,P);j.addColorStop(0,"#ffffff"),j.addColorStop(.3,Nt),j.addColorStop(1,"rgba(255, 255, 255, 0)");const ct=3;for(let rt=0;rt<ct;rt++){const lt=rt*2*Math.PI/ct;e.beginPath(),e.strokeStyle=b,e.lineWidth=$*.18,e.lineCap="round";for(let dt=0;dt<=P;dt+=1){const ut=5/P,mt=lt+dt*ut,gt=dt*Math.cos(mt),Et=dt*Math.sin(mt);dt===0?e.moveTo(gt,Et):e.lineTo(gt,Et)}e.stroke(),e.beginPath(),e.strokeStyle=j,e.lineWidth=$*.08,e.lineCap="round";for(let dt=P*.12;dt<=P;dt+=1){const ut=5/P,mt=lt+dt*ut+.15,gt=dt*Math.cos(mt),Et=dt*Math.sin(mt);dt===Math.floor(P*.12)?e.moveTo(gt,Et):e.lineTo(gt,Et)}e.stroke()}e.restore()},y=(w,D,$)=>{if($<0||$>=a)return!1;const V=this.maze.get(w,D,$);return V===this.mazeGen.TYPES.VISITED||V===this.mazeGen.TYPES.START||V===this.mazeGen.TYPES.ELEVATOR_VISITED||V===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${w},${D},${$}`)},M=(w,D,$,V,Y,I,_t,vt,xt,Tt)=>{e.save(),e.globalAlpha=Tt;const Nt=xt?"#ffffff":vt?X.COLORS.NEON_UP:X.COLORS.NEON_UP_UNUSED,It=xt?"#ffffff":vt?X.COLORS.NEON_DOWN:X.COLORS.NEON_DOWN_UNUSED;if(I&&_t)e.beginPath(),e.moveTo(w,D-Y-V),e.lineTo(w-$,D-Y),e.lineTo(w,D-Y+V),e.lineTo(w,D-Y),e.closePath(),e.fillStyle=It,e.fill(),e.beginPath(),e.moveTo(w,D-Y-V),e.lineTo(w,D-Y),e.lineTo(w,D-Y+V),e.lineTo(w+$,D-Y),e.closePath(),e.fillStyle=Nt,e.fill(),e.beginPath(),e.moveTo(w-$,D),e.lineTo(w,D+V),e.lineTo(w,D+V-Y),e.lineTo(w-$,D-Y),e.closePath(),e.fillStyle=It,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(w,D+V),e.lineTo(w+$,D),e.lineTo(w+$,D-Y),e.lineTo(w,D+V-Y),e.closePath(),e.fillStyle=Nt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill();else{const P=I?Nt:It;e.beginPath(),e.moveTo(w-$,D-Y),e.lineTo(w,D+V-Y),e.lineTo(w+$,D-Y),e.lineTo(w,D-V-Y),e.closePath(),e.fillStyle=P,e.fill(),e.beginPath(),e.moveTo(w-$,D),e.lineTo(w,D+V),e.lineTo(w,D+V-Y),e.lineTo(w-$,D-Y),e.closePath(),e.fillStyle=P,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(w,D+V),e.lineTo(w+$,D),e.lineTo(w+$,D-Y),e.lineTo(w,D+V-Y),e.closePath(),e.fillStyle=P,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill()}e.restore()},S=(w,D)=>{const $=this.mazeGen.TYPES;for(let V=0;V<a;V++)for(let Y=0;Y<a;Y++){const I=this.maze.get(Y,V,w),_t=h(Y,V,w);if(this.jellyPortalFreezeTimer>0&&this.jellyPortalResetCells.has(`${Y},${V}`)&&w===this.player.z){const dt=1.5-this.jellyPortalFreezeTimer,ut=.6;let mt=0;dt>ut&&(mt=Math.min(1,(dt-ut)/.9)),e.save();const gt=Math.round(100*(1-mt));e.filter=`invert(${gt}%)`;const Et=Y===Math.floor(this.player.x)&&V===Math.floor(this.player.y),ht=I===$.STATUE;if(!Et&&!ht?e.globalAlpha=(1-mt)*D:e.globalAlpha=D,I===$.WALL||ht)if(ht)T(_t.x,_t.y,u,p,1.5,"#444444",D),F(_t.x,_t.y,D);else{const Rt=u*.45,wt=p*.45,bt=d*.25,L="rgba(90, 20, 160, 0.8)",ft=[{dx:-.23,dy:-.23},{dx:.23,dy:-.23},{dx:-.23,dy:.23},{dx:.23,dy:.23}];for(const Ct of ft){const St=h(Y+Ct.dx,V+Ct.dy,w);T(St.x,St.y,Rt,wt,bt,L,D)}}else{let Lt="#444444",Rt=!1,wt="";Et?(wt=X.COLORS.JELLY_PORTAL,Rt=!0):I===$.TELEPORT?(wt=X.COLORS.TELEPORT_INACTIVE,Rt=!0):I===$.EXIT&&(wt=X.COLORS.EXIT,Rt=!0),Rt?_(_t.x,_t.y,u,p,1.5,wt,!1,`${Y},${V},${w}`,D):T(_t.x,_t.y,u,p,1.5,Lt,D),I===$.KEY?z(_t.x,_t.y-1.5,D):I===$.MANA&&E(_t.x,_t.y-1.5,D)}e.restore();continue}const xt=I===$.JELLY_PORTAL,Tt=I===$.TELEPORT||xt,Nt=Tt&&this.discoveredTeleports.has(`${Y},${V},${w}`),It=I===$.VISITED||I===$.START||I===$.ELEVATOR_VISITED||Nt,P=(I===$.PATH||Tt&&!Nt)&&this.isNearVisited(Y,V,w),b=this.revealedPathSet.has(`${Y},${V},${w}`),j=I===$.KEY,ct=I===$.MANA,rt=I===$.EXIT;if(I===$.WALL||I===$.STATUE){if(I===$.WALL&&this.isWallVisible(Y,V,w)||I===$.STATUE&&(this.isNearVisited(Y,V,w)||this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.revealed)){const ut=u*.45,mt=p*.45,gt=d*.25,Et="rgba(90, 20, 160, 0.8)",ht=[{dx:-.23,dy:-.23},{dx:.23,dy:-.23},{dx:-.23,dy:.23},{dx:.23,dy:.23}];for(const zt of ht){const Lt=h(Y+zt.dx,V+zt.dy,w);T(Lt.x,Lt.y,ut,mt,gt,Et,D)}}continue}for(const dt of this.hunters){if(dt.state==="SLEEP"||dt.state==="DEAD_BY_JELLY")continue;const ut=dt.visualZ!==null?dt.visualZ:dt.z,mt=dt.visualX!==null?dt.visualX:dt.x,gt=dt.visualY!==null?dt.visualY:dt.y;if(ut===null||mt===null||gt===null)continue;const Et=Math.round((ut-1)/2)*2+1,ht=Math.max(0,Math.min(a-1,Math.floor(mt))),zt=Math.max(0,Math.min(a-1,Math.floor(gt)));if(Y===ht&&V===zt&&w===Et){const Lt=h(mt,gt,ut);K(dt,Lt.x,Lt.y-1.5,D)}}if(It||P||b||j||ct||rt){const ut=w<a-1&&this.maze.get(Y,V,w+1)!==$.WALL&&this.maze.get(Y,V,w+1)!==$.STATUE,mt=w>0&&this.maze.get(Y,V,w-1)!==$.WALL&&this.maze.get(Y,V,w-1)!==$.STATUE,gt=this.mapCursor.x===Y&&this.mapCursor.y===V&&this.mapCursor.z===w;if((It||b)&&(ut||mt))M(_t.x,_t.y,u,p,1.5,ut,mt,It,b,D);else{let zt="#222222",Lt=!1,Rt="";const wt=Math.floor(this.player.x)===Y&&Math.floor(this.player.y)===V&&w===this.player.z,bt=`${Y},${V},${w}`;if(b)zt="#ffffff";else if(rt)Rt=this.keysCollected===this.totalKeys?X.COLORS.EXIT:"#ff3300",Lt=!0;else if(Nt){const L=Y===Math.floor(this.mazeGen.startPos.x)&&V===Math.floor(this.mazeGen.startPos.y)&&w===this.mazeGen.startPos.z,ft=this.teleportCooldownTicks>0;L?Rt=ft?X.COLORS.TELEPORT_INACTIVE:wt?X.COLORS.TELEPORT:X.COLORS.START:Rt=ft?X.COLORS.TELEPORT_INACTIVE:xt?X.COLORS.JELLY_PORTAL:X.COLORS.TELEPORT,Lt=!0}else if(It)I===$.START?(Rt=this.teleportCooldownTicks>0?X.COLORS.TELEPORT_INACTIVE:wt?X.COLORS.TELEPORT:X.COLORS.START,Lt=!0):zt="#444444";else if(P)if(gt){const L=.5+.5*Math.sin(performance.now()/120);zt=`rgb(${Math.floor(31+224*L)}, ${Math.floor(58+197*L)}, ${Math.floor(82+173*L)})`}else zt="#1f3a52";else(j||ct)&&(zt="#111111");Lt?_(_t.x,_t.y,u,p,1.5,Rt,wt,bt,D):T(_t.x,_t.y,u,p,1.5,zt,D)}if(j&&z(_t.x,_t.y-1.5,D),ct&&E(_t.x,_t.y-1.5,D),Nt){const zt=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===Y&&this.inactiveTeleportPos.y===V&&this.inactiveTeleportPos.z===w;let Lt=X.COLORS.TELEPORT;zt&&(Lt=X.COLORS.TELEPORT_INACTIVE),A(_t.x,_t.y-1.5,Lt,D,gt)}Y===Math.floor(this.player.x)&&V===Math.floor(this.player.y)&&w===this.player.z&&U(_t.x,_t.y-1.5,D)}}},x=(w,D)=>{const $=this.mazeGen.TYPES;for(let V=0;V<a;V++)for(let Y=0;Y<a;Y++){const I=this.maze.get(Y,V,w);if(I===$.WALL)continue;const _t=this.revealedPathSet.has(`${Y},${V},${w}`),vt=I===$.ELEVATOR_VISITED;if(I===1&&(y(Y,V,w-1)||y(Y,V,w+1)),_t||y(Y,V,r)){const xt=h(Y,V,w-1);xt.y-=1.5;const Tt=h(Y,V,w+1);let Nt=X.COLORS.PATH_KNOWN;_t?Nt="#ffffff":vt&&(Nt=X.COLORS.PATH_VISITED);const It=this.mapCursor.x===Y&&this.mapCursor.y===V&&this.mapCursor.z===w;let P=Nt,b=D;It&&(b=.4+.6*(.5+.5*Math.sin(performance.now()/120)),P="#ffffff");const ct=(dt=>{const ut=dt.replace("#",""),mt=parseInt(ut,16),gt=mt>>16&255,Et=mt>>8&255,ht=mt&255;return`${gt}, ${Et}, ${ht}`})(P),rt=u*.25;e.save(),e.globalAlpha=b;const lt=e.createLinearGradient(0,xt.y,0,Tt.y);lt.addColorStop(0,`rgba(${ct}, 0.15)`),lt.addColorStop(.2,`rgba(${ct}, 0.65)`),lt.addColorStop(.5,`rgba(${ct}, 0.95)`),lt.addColorStop(.8,`rgba(${ct}, 0.65)`),lt.addColorStop(1,`rgba(${ct}, 0.15)`),e.beginPath(),e.moveTo(xt.x-rt,xt.y),e.lineTo(xt.x,xt.y+rt/2),e.lineTo(Tt.x,Tt.y+rt/2),e.lineTo(Tt.x-rt,Tt.y),e.closePath(),e.fillStyle=lt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(xt.x,xt.y+rt/2),e.lineTo(xt.x+rt,xt.y),e.lineTo(Tt.x+rt,Tt.y),e.lineTo(Tt.x,Tt.y+rt/2),e.closePath(),e.fillStyle=lt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.restore()}}},z=(w,D,$)=>{e.save(),e.globalAlpha=$;const V=Math.sin(performance.now()/200)*3-6,Y=D+V;if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){const I=this.keyImage,_t=I.naturalWidth/I.naturalHeight,vt=l*.55;let xt=vt,Tt=vt;_t>1?Tt=vt/_t:xt=vt*_t,e.drawImage(I,w-xt/2,Y-Tt/2,xt,Tt)}else e.beginPath(),e.moveTo(w,Y-5),e.lineTo(w+4,Y),e.lineTo(w,Y+5),e.lineTo(w-4,Y),e.closePath(),e.fillStyle="#ffd700",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();e.restore()},E=(w,D,$)=>{e.save(),e.globalAlpha=$;const V=Math.sin(performance.now()/250)*3-6,Y=D+V;if(this.manaImage.complete&&this.manaImage.naturalWidth!==0){const I=this.manaImage,_t=I.naturalWidth/I.naturalHeight,vt=l*.55;let xt=vt,Tt=vt;_t>1?Tt=vt/_t:xt=vt*_t,e.shadowColor="rgba(0, 255, 255, 0.85)",e.shadowBlur=l*.25,e.shadowOffsetX=0,e.shadowOffsetY=0,e.drawImage(I,w-xt/2,Y-Tt/2,xt,Tt)}else e.beginPath(),e.moveTo(w,Y-5),e.lineTo(w+4,Y),e.lineTo(w,Y+5),e.lineTo(w-4,Y),e.closePath(),e.fillStyle="#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();e.restore()},A=(w,D,$,V,Y)=>{e.save(),e.globalAlpha=V;const I=Math.sin(performance.now()/250)*2-4,_t=D+I;if(Y){e.save();const vt=1+.35*(.5+.5*Math.sin(performance.now()/100));e.beginPath(),e.arc(w,_t,7*vt,0,Math.PI*2),e.fillStyle="rgba(255, 255, 255, 0.4)",e.fill(),e.restore()}e.beginPath(),e.arc(w,_t,5,0,Math.PI*2),e.fillStyle=Y?"#ffffff":$,e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.2,e.stroke(),e.restore()},F=(w,D,$)=>{if(this.statueImage&&this.statueImage.complete&&this.statueImage.naturalWidth!==0){e.save(),e.beginPath();const V=u*.7,Y=p*.7;e.ellipse(w,D,V,Y,0,0,Math.PI*2),e.fillStyle="rgba(0, 0, 0, 0.45)",e.fill(),e.restore(),e.save(),e.globalAlpha=$;const I=this.statueImage.width/this.statueImage.height,_t=l*.8,vt=_t/I;e.drawImage(this.statueImage,w-_t/2,D-vt,_t,vt),e.restore()}else T(w,D,u*.4,p*.4,d*.8,"#555555",$)},U=(w,D,$)=>{const V=`${this.playerVertical}_${this.playerSide}`,Y=this.mageImages[V];let I=$;this.deathAnimation&&this.deathAnimation.active&&(Math.floor(Date.now()/120)%2===0||(I=.2));const _t=u*.55,vt=p*.55,xt=w-u*.12,Tt=D-p*.12;if(e.save(),e.beginPath(),e.ellipse(xt,Tt,_t,vt,0,0,Math.PI*2),e.fillStyle=`rgba(0, 0, 0, ${I*.45})`,e.fill(),e.restore(),Y&&Y.complete){e.save(),e.globalAlpha=I;const Nt=l*.7,It=Nt,P=Nt*(Y.height/Y.width),b=D-P;e.drawImage(Y,w-It/2,b,It,P),e.restore()}else e.save(),e.globalAlpha=I,e.beginPath(),e.arc(w,D-3,5,0,Math.PI*2),e.fillStyle=X.COLORS.PLAYER,e.fill(),e.strokeStyle=X.COLORS.PLAYER_OUTLINE,e.lineWidth=1.5,e.stroke(),e.restore();if(this.deathAnimation&&this.deathAnimation.active){const Nt=Math.min(1,this.deathAnimation.delayElapsed/this.deathAnimation.delayDuration),It=-(Y&&Y.complete?l*.7*(Y.height/Y.width):l*.5),P=l*.7,b=(1-Nt)*It-4*P*Nt*(1-Nt);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){e.save();const j=this.keyImage,ct=j.naturalWidth/j.naturalHeight,rt=l*.55;let lt=rt,dt=rt;ct>1?dt=rt/ct:lt=rt*ct,e.drawImage(j,w-lt/2,D-dt/2+b,lt,dt),e.restore()}else e.save(),e.beginPath(),e.arc(w,D+b,l*.15,0,2*Math.PI),e.fillStyle="#ffd700",e.fill(),e.restore()}if(X.SHOW_COLLISION_DEBUG){e.save();const Nt=X.PLAYER_COLLISION_OFFSET_X||0,It=X.PLAYER_COLLISION_OFFSET_Y||0,P=(Nt-It)*u,b=(Nt+It)*p,j=w+P,ct=D+b;e.beginPath(),e.moveTo(j,ct-X.PLAYER_COLLISION_RADIUS*d),e.lineTo(j+X.PLAYER_COLLISION_RADIUS*l,ct),e.lineTo(j,ct+X.PLAYER_COLLISION_RADIUS*d),e.lineTo(j-X.PLAYER_COLLISION_RADIUS*l,ct),e.closePath(),e.strokeStyle="#ff0000",e.lineWidth=1.5,e.stroke(),e.restore()}},K=(w,D,$,V)=>{if(w&&w.lowCanvas){e.save(),e.globalAlpha=V;const Y=l*.9;e.save(),e.beginPath();const I=u*.6,_t=p*.6;e.ellipse(D,$,I,_t,0,0,Math.PI*2),e.fillStyle="rgba(0, 0, 0, 0.35)",e.fill(),e.restore();const vt=Math.sin(w.jellyTime*3)*(l*.06),xt=l*.38+vt,Tt=$-xt,Nt=w.jellyTime,It=Math.sin(Nt)*6,P=Math.cos(Nt*.7)*4,b=1+Math.sin(Nt*1.2)*.06,j=1+Math.cos(Nt*.8)*.06,ct=It*Math.PI/180,rt=P*Math.PI/180;e.save(),e.translate(D,Tt),e.transform(b,Math.tan(rt),Math.tan(ct),j,0,0),e.imageSmoothingEnabled=!1,e.drawImage(w.lowCanvas,-Y/2,-Y/2,Y,Y),e.restore(),e.restore()}else{e.save(),e.globalAlpha=V;const Y=4+Math.sin(performance.now()/100)*1.5;e.beginPath(),e.arc(D,$-3,Y,0,Math.PI*2),e.fillStyle=X.COLORS.HUNTER||"#ff00ff",e.fill(),e.strokeStyle="#ff0000",e.lineWidth=1,e.stroke(),e.restore()}},R=w=>{const D=Math.abs(w-o);return D<=2?1-D/2*(1-.35):D<4?.35*(1-(D-2)/2):0};for(let w=1;w<a;w+=2){if(w-1>=0&&(w-1===r-1||w-1===r+1)){const $=R(w-2),V=R(w),Y=Math.max($,V)*.8;Y>.01&&x(w-1,Y)}const D=R(w);D>.01&&(w===r&&f(D),S(w,D))}const N=this.getInteractiveElements(r);if(N.forEach(w=>{if(w.type==="shaft"){const D=h(w.x,w.y,w.z),$=this.mapCursor.x===w.x&&this.mapCursor.y===w.y&&this.mapCursor.z===w.z;e.save();const V=.5+.5*Math.sin(performance.now()/150);e.beginPath(),e.arc(D.x,D.y,7.5+V*2.5,0,Math.PI*2),e.fillStyle=$?"#ffffff":"#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke(),e.restore()}}),this.mapCursor.x===Math.floor(this.player.x)&&this.mapCursor.y===Math.floor(this.player.y)&&this.mapCursor.z===this.player.z||N.some(w=>w.x===this.mapCursor.x&&w.y===this.mapCursor.y&&w.z===this.mapCursor.z)){const w=h(this.mapCursor.x,this.mapCursor.y,this.mapCursor.z),D=Math.sin(performance.now()/150)*4;e.save();const $=1-D/16,V=h(this.mapCursor.x,this.mapCursor.y,r);e.translate(V.x,V.y),e.scale(1,.5),e.beginPath(),e.arc(0,0,8*$,0,Math.PI*2),e.fillStyle=`rgba(0, 0, 0, ${.55*$})`,e.fill(),e.restore(),e.save();const Y=w.x,I=w.y-d-12+D;e.beginPath(),e.moveTo(Y,I),e.lineTo(Y-6,I-8),e.lineTo(Y-3,I-8),e.lineTo(Y-3,I-16),e.lineTo(Y+3,I-16),e.lineTo(Y+3,I-8),e.lineTo(Y+6,I-8),e.closePath(),e.fillStyle="#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke(),e.restore()}const H=this.isTouchDevice?65:45,q=n/3,Q=n/3*2,it=i-H;e.save(),e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=4,e.lineCap="round",e.beginPath(),e.moveTo(it,q),e.lineTo(it,Q),e.stroke(),e.strokeStyle="rgba(0, 255, 255, 0.4)",e.lineWidth=1.5;for(let w=q;w<=Q;w+=(Q-q)/6)e.beginPath(),e.moveTo(it-5,w),e.lineTo(it+5,w),e.stroke();e.restore();const J=(q+Q)/2,B=(Q-q)/2,et=o-r,ot=J-et/2*B;if(e.save(),e.fillStyle="#00ffff",e.beginPath(),e.arc(it,ot,this.isTouchDevice?8:5,0,Math.PI*2),e.fill(),e.restore(),this.floorClickRects=[],[{floor:r+2,y:q,label:`${(r+2+1)/2}F`,valid:r+2<=a-2},{floor:r,y:J,label:`${(r+1)/2}F`,valid:!0},{floor:r-2,y:Q,label:`${(r-2+1)/2}F`,valid:r-2>=1}].forEach(w=>{if(!w.valid)return;const D=this.isTouchDevice,$=D?90:60,V=D?50:36,Y=it-$-(D?20:15),I=w.y-V/2,_t=w.floor===r;e.save(),e.beginPath(),e.moveTo(Y+6,I),e.lineTo(Y+$,I),e.lineTo(Y+$,I+V-6),e.lineTo(Y+$-6,I+V),e.lineTo(Y,I+V),e.lineTo(Y,I+6),e.closePath(),e.fillStyle=_t?"rgba(0, 255, 255, 0.25)":"rgba(0, 0, 0, 0.6)",e.strokeStyle=_t?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=_t?2:1,e.fill(),e.stroke(),e.restore(),e.strokeStyle=_t?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=_t?2:1,e.beginPath(),e.moveTo(Y+$,w.y),e.lineTo(it-2,w.y),e.stroke(),e.fillStyle=_t?"#00ffff":"rgba(255, 255, 255, 0.5)",e.font=D?'bold 12px "Courier New"':'bold 8px "Courier New"',e.textAlign="center",e.textBaseline="top",e.fillText("LEVEL",Y+$/2,I+(D?8:6)),e.fillStyle="#ffffff",e.font=D?'bold 22px "Courier New"':'bold 15px "Courier New"',e.textBaseline="top",e.fillText(w.label,Y+$/2,I+(D?22:16)),this.floorClickRects.push({floor:w.floor,x:Y,y:I,w:$+(D?25:15),h:V})}),!this.isTeleportMode){const w=this.isTouchDevice,D=w?30:25,$=30,V=w?160:120,Y=w?50:36;e.save(),e.beginPath(),e.moveTo(D+6,$),e.lineTo(D+V,$),e.lineTo(D+V,$+Y-6),e.lineTo(D+V-6,$+Y),e.lineTo(D,$+Y),e.lineTo(D,$+6),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.7)",e.strokeStyle="rgba(0, 255, 255, 0.35)",e.lineWidth=1.5,e.fill(),e.stroke(),e.restore(),e.fillStyle="rgba(0, 255, 255, 0.7)",e.font=`bold ${w?11:8}px 'Roboto', sans-serif`,e.textAlign="center",e.textBaseline="top",e.fillText(Ot("hudPathfinders"),D+V/2,$+(w?8:5)),e.fillStyle="#ffffff",e.font=`bold ${w?18:13}px 'Roboto', sans-serif`,e.textBaseline="top",e.fillText(`${this.pathfindersRemaining} / ${this.totalPathfinders}`,D+V/2,$+(w?23:16))}if(this.isTeleportMode){const $=i/2-90,V=30;e.save(),e.beginPath(),e.moveTo($+8,V),e.lineTo($+180-8,V),e.lineTo($+180,V+8),e.lineTo($+180,V+38-8),e.lineTo($+180-8,V+38),e.lineTo($+8,V+38),e.lineTo($,V+38-8),e.lineTo($,V+8),e.closePath(),e.fillStyle="rgba(255, 140, 0, 0.22)",e.strokeStyle="#ff8c00",e.lineWidth=2.5,e.fill(),e.stroke(),e.restore(),e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Ot("teleportWarning"),i/2,V+38/2)}if(this.isTeleportMode){const w=this.allTeleports.length,D=this.isTouchDevice,$=D?72:56,V=D?16:10,Y=D?24:15,I=D?38:25,_t=D?90:62,vt=D?46:30,xt=D?46:36,Tt=!this.teleportConfirmModalActive,Nt=Tt?xt+_t:0,It=i-40,P=(w-1)*$,b=P+60+Nt,j=D&&b>It;let ct,rt,lt,dt;if(this.teleportDotsClickRects=[],j){const ut=Math.ceil(w/2),mt=w-ut,gt=(ut-1)*$,Et=(mt-1)*$,ht=Math.max(gt,Et);ct=ht+60+Nt,rt=124,lt=n-145,dt=i/2-ct/2;const zt=ht,Lt=dt+30+(zt-gt)/2,Rt=dt+30+(zt-Et)/2,wt=lt+35,bt=lt+89;if(e.save(),e.beginPath(),e.moveTo(dt+10,lt),e.lineTo(dt+ct-10,lt),e.lineTo(dt+ct,lt+10),e.lineTo(dt+ct,lt+rt-10),e.lineTo(dt+ct-10,lt+rt),e.lineTo(dt+10,lt+rt),e.lineTo(dt,lt+rt-10),e.lineTo(dt,lt+10),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.72)",e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=1.5,e.fill(),e.stroke(),e.restore(),this.allTeleports.forEach((L,ft)=>{const Ct=ft<ut,St=Ct?ft:ft-ut,pt=(Ct?Lt:Rt)+St*$,G=Ct?wt:bt,yt=`${L.x},${L.y},${L.z}`,Pt=this.discoveredTeleports.has(yt),Ut=ft===this.selectedTeleportIndex,Gt=L.x===Math.floor(this.player.x)&&L.y===Math.floor(this.player.y)&&L.z===this.player.z,$t=this.inactiveTeleportPos&&L.x===this.inactiveTeleportPos.x&&L.y===this.inactiveTeleportPos.y&&L.z===this.inactiveTeleportPos.z;if(e.save(),!Pt)e.beginPath(),e.arc(pt,G,V,0,Math.PI*2),e.fillStyle="rgba(100, 100, 100, 0.45)",e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.15)",e.stroke();else if($t)e.beginPath(),e.arc(pt,G,V,0,Math.PI*2),e.fillStyle="rgba(255, 45, 0, 0.2)",e.fill(),e.strokeStyle="rgba(255, 45, 0, 0.4)",e.lineWidth=1.2,e.stroke();else{if(Ut){const Kt=1+.3*(.5+.5*Math.sin(performance.now()/120)),ne=(D?36:22)*Kt;e.beginPath(),e.arc(pt,G,ne,0,Math.PI*2),e.fillStyle="rgba(0, 255, 255, 0.18)",e.fill()}e.beginPath(),e.arc(pt,G,Ut?Y:V,0,Math.PI*2),e.fillStyle=Ut?"#ffffff":"#00b3ff",e.fill(),e.strokeStyle=Ut?"#00ffff":"#ffffff",e.lineWidth=Ut?2:1,e.stroke(),Gt&&(e.beginPath(),e.arc(pt,G,Ut?D?12:8:D?8:5,0,Math.PI*2),e.fillStyle="#39ff14",e.fill())}e.restore(),this.teleportDotsClickRects.push({x:pt-I,y:G-I,w:I*2,h:I*2,index:ft})}),Tt){const L=dt+30+zt+xt,ft=lt+rt/2-vt/2;e.save(),e.beginPath(),e.roundRect?e.roundRect(L,ft,_t,vt,6):e.rect&&e.rect(L,ft,_t,vt),e.fillStyle="rgba(0, 255, 255, 0.15)",e.strokeStyle="#00ffff",e.lineWidth=2,e.fill(),e.stroke(),e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Ot("teleportGo"),L+_t/2,ft+vt/2),e.restore(),this.teleportGoBtnClickRect={x:L,y:ft,w:_t,h:vt}}else this.teleportGoBtnClickRect=null}else{const ut=n-(D?70:60);ct=P+60+Nt,rt=D?86:62,lt=ut-rt/2,dt=i/2-ct/2;const mt=dt+30;if(e.save(),e.beginPath(),e.moveTo(dt+6,lt),e.lineTo(dt+ct-6,lt),e.lineTo(dt+ct,lt+6),e.lineTo(dt+ct,lt+rt-6),e.lineTo(dt+ct-6,lt+rt),e.lineTo(dt+6,lt+rt),e.lineTo(dt,lt+rt-6),e.lineTo(dt,lt+6),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.72)",e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=1,e.fill(),e.stroke(),e.restore(),this.allTeleports.forEach((gt,Et)=>{const ht=mt+Et*$,zt=`${gt.x},${gt.y},${gt.z}`,Lt=this.discoveredTeleports.has(zt),Rt=Et===this.selectedTeleportIndex,wt=gt.x===Math.floor(this.player.x)&&gt.y===Math.floor(this.player.y)&&gt.z===this.player.z,bt=this.inactiveTeleportPos&&gt.x===this.inactiveTeleportPos.x&&gt.y===this.inactiveTeleportPos.y&&gt.z===this.inactiveTeleportPos.z;if(e.save(),!Lt)e.beginPath(),e.arc(ht,ut,V,0,Math.PI*2),e.fillStyle="rgba(100, 100, 100, 0.45)",e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.15)",e.stroke();else if(bt)e.beginPath(),e.arc(ht,ut,V,0,Math.PI*2),e.fillStyle="rgba(255, 45, 0, 0.2)",e.fill(),e.strokeStyle="rgba(255, 45, 0, 0.4)",e.lineWidth=1.2,e.stroke();else{if(Rt){const L=1+.3*(.5+.5*Math.sin(performance.now()/120)),ft=(D?36:22)*L;e.beginPath(),e.arc(ht,ut,ft,0,Math.PI*2),e.fillStyle="rgba(0, 255, 255, 0.18)",e.fill()}e.beginPath(),e.arc(ht,ut,Rt?Y:V,0,Math.PI*2),e.fillStyle=Rt?"#ffffff":"#00b3ff",e.fill(),e.strokeStyle=Rt?"#00ffff":"#ffffff",e.lineWidth=Rt?2:1,e.stroke(),wt&&(e.beginPath(),e.arc(ht,ut,Rt?D?12:8:D?8:5,0,Math.PI*2),e.fillStyle="#39ff14",e.fill())}e.restore(),this.teleportDotsClickRects.push({x:ht-I,y:ut-I,w:I*2,h:I*2,index:Et})}),Tt){const gt=mt+P+xt,Et=ut-vt/2;e.save(),e.beginPath(),e.rect(gt,Et,_t,vt),e.fillStyle="rgba(0, 255, 255, 0.15)",e.strokeStyle="#00ffff",e.lineWidth=1.5,e.fill(),e.stroke(),e.fillStyle="#ffffff",e.font=`bold ${D?15:12}px 'Roboto', sans-serif`,e.textAlign="center",e.textBaseline="middle",e.fillText(Ot("teleportGo"),gt+_t/2,Et+vt/2),e.restore(),this.teleportGoBtnClickRect={x:gt,y:Et,w:_t,h:vt}}else this.teleportGoBtnClickRect=null}if(this.teleportConfirmModalActive){e.fillStyle="rgba(0, 0, 0, 0.6)",e.fillRect(0,0,i,n);const ut=320,mt=160,gt=i/2-ut/2,Et=n/2-mt/2;e.save(),e.beginPath(),e.moveTo(gt+10,Et),e.lineTo(gt+ut-10,Et),e.lineTo(gt+ut,Et+10),e.lineTo(gt+ut,Et+mt-10),e.lineTo(gt+ut-10,Et+mt),e.lineTo(gt+10,Et+mt),e.lineTo(gt,Et+mt-10),e.lineTo(gt,Et+10),e.closePath(),e.fillStyle="rgba(10, 18, 30, 0.94)",e.strokeStyle="#00ffff",e.lineWidth=2,e.fill(),e.stroke(),e.restore(),e.fillStyle="#00ffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="top",e.fillText(Ot("teleportationLink"),i/2,Et+16),e.strokeStyle="rgba(0, 255, 255, 0.2)",e.lineWidth=1,e.beginPath(),e.moveTo(gt+15,Et+34),e.lineTo(gt+ut-15,Et+34),e.stroke();const ht=this.allTeleports[this.selectedTeleportIndex];e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.fillText(Ot("teleportJumpSector",{floor:(ht.z+1)/2}),i/2,Et+52),e.fillStyle="rgba(255, 255, 255, 0.7)",e.font="13px 'Roboto', sans-serif",e.fillText(Ot("teleportTargetGrid",{x:ht.x,y:ht.y}),i/2,Et+75);const zt=100,Lt=30,Rt=i/2-zt-15,wt=Et+105,bt=i/2+15,L=Et+105;this.teleportModalClickRects=[{x:Rt,y:wt,w:zt,h:Lt,selection:"go"},{x:bt,y:L,w:zt,h:Lt,selection:"cancel"}];const ft=(Ct,St,pt,G)=>{const yt=this.teleportModalSelection===G;e.save(),e.beginPath(),e.moveTo(Ct+4,St),e.lineTo(Ct+zt-4,St),e.lineTo(Ct+zt,St+4),e.lineTo(Ct+zt,St+Lt-4),e.lineTo(Ct+zt-4,St+Lt),e.lineTo(Ct+4,St+Lt),e.lineTo(Ct,St+Lt-4),e.lineTo(Ct,St+4),e.closePath(),e.fillStyle=yt?"rgba(0, 255, 255, 0.35)":"rgba(0, 0, 0, 0.6)",e.strokeStyle=yt?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=yt?2:1,e.fill(),e.stroke(),e.restore(),e.fillStyle=yt?"#ffffff":"#00ffff",e.font="bold 13px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(pt,Ct+zt/2,St+Lt/2)};ft(Rt,wt,Ot("teleportGo"),"go"),ft(bt,L,Ot("teleportCancel"),"cancel")}}}}function Ar(s,t,e){const i=s.slice();return i[9]=t[e],i[11]=e,i}function Pr(s){let t,e,i,n,a=(s[9].title[s[0]]||s[9].title.en)+"",r,o,c,l;function d(){return s[2](s[9])}return{c(){t=ye("button"),e=ye("span"),e.textContent=`${s[11]+1}.`,i=Ne(),n=ye("span"),r=Rr(a),o=Ne(),ee(e,"class","tut-num"),ee(n,"class","tut-title"),ee(t,"class","tutorial-item-btn"),ee(t,"data-stage-id",s[9].id)},m(u,p){ue(u,t,p),Ye(t,e),Ye(t,i),Ye(t,n),Ye(n,r),Ye(t,o),c||(l=bl(t,"click",d),c=!0)},p(u,p){s=u,p&1&&a!==(a=(s[9].title[s[0]]||s[9].title.en)+"")&&Pl(r,a)},d(u){u&&ce(t),c=!1,l()}}}function mm(s){let t,e,i,n,a,r,o,c,l,d,u,p,m,g,v,h,f,T,_,y,M,S,x,z,E,A=$a(Di),F=[];for(let U=0;U<A.length;U+=1)F[U]=Pr(Ar(s,A,U));return{c(){t=ye("section"),t.innerHTML='<div class="menu-content"><header><h1 class="game-title" data-i18n="gameTitle">VOID ESCAPE</h1></header> <div class="menu-stats-grid"><div class="stat-container hunter"><div class="stat-label" data-i18n="activeHunters">Active Hunters</div> <div class="stat-value" id="hunter-count">-</div></div> <div class="stat-container teleport"><div class="stat-label" data-i18n="activeTeleports">Active Teleports</div> <div class="stat-value" id="teleport-count">-</div></div> <div class="stat-container keys"><div class="stat-label" data-i18n="activeKeys">Active Keys</div> <div class="stat-value" id="keys-count">-</div></div> <div class="stat-container pathfinder"><div class="stat-label" data-i18n="availablePathfinders">Available Pathfinders</div> <div class="stat-value" id="pathfinder-count">-</div></div></div> <div class="control-group"><div class="degree-full-row"><span class="degree-label" data-i18n="mazeDegree">Maze Degree</span> <span class="degree-value" id="degree-val">-</span></div> <input type="range" id="maze-degree" aria-label="Ajustar Grau do Labirinto"/> <p class="hint" data-i18n="degreeHint">Controls the grid size. Higher values create larger, more complex mazes.</p></div> <div class="control-group switch-group"><div class="switch-container"><span class="switch-label" data-i18n="safeMode">Safe Mode</span> <label class="switch" for="safe-mode"><input type="checkbox" id="safe-mode" aria-label="Safe Mode"/> <span class="slider"></span></label></div> <p class="hint" data-i18n="safeModeHint">When active, no hunters will spawn in the maze.</p></div> <div class="menu-tutorials-row"><button id="tutorials-btn-menu" class="tutorials-btn" data-i18n="tutorialsMenu">TUTORIALS</button></div> <div class="menu-action-btns"><button id="start-btn" data-i18n="generateMaze">NEW GAME</button> <button id="continue-btn-menu" class="continue-btn" style="display:none" data-i18n="continue">CONTINUE</button></div> <p class="game-credits" data-i18n="gameCredits">a game by Bernard Rodrigues</p></div>',e=Ne(),i=ye("section"),n=ye("div"),a=ye("header"),a.innerHTML='<h1 class="game-title" data-i18n="tutorialsTitle">TUTORIALS</h1>',r=Ne(),o=ye("div");for(let U=0;U<F.length;U+=1)F[U].c();c=Ne(),l=ye("div"),l.innerHTML='<button id="back-to-menu-btn" data-i18n="back">BACK</button>',d=Ne(),u=ye("div"),u.innerHTML='<div class="modal-overlay"></div> <div class="modal-container"><h2 id="tut-modal-title">-</h2> <p id="tut-modal-description">-</p> <div class="modal-buttons"><button id="tut-modal-start-btn" class="modal-confirm-btn" data-i18n="start">START</button> <button id="tut-modal-cancel-btn" class="modal-cancel-btn" data-i18n="cancel">CANCEL</button></div></div>',p=Ne(),m=ye("section"),m.innerHTML='<div class="story-container"><div id="story-image-canvas" class="story-image-box"><div id="story-image-loader" class="story-loader hidden"><div class="spinner"></div> <span data-i18n="loading">LOADING...</span></div> <img id="story-img" src="" alt="Story Image" style="display: none; max-width: 100%; max-height: 100%;"/></div> <div id="story-dialogue" class="story-dialogue-box"><span id="story-text"></span> <span id="story-arrow" class="story-arrow hidden">▼</span></div> <div class="story-actions"><button id="story-skip-btn">SKIP</button></div></div>',g=Ne(),v=ye("section"),v.innerHTML='<div class="popup-container victory"><h1 data-i18n="victoryTitle">Mission Accomplished</h1> <p data-i18n="victoryText">You have successfully navigated the 3D void.</p> <p class="victory-stats"><span data-i18n="mapCompletion">MAP COMPLETION</span>: <span id="victory-completion-rate">0%</span></p> <p class="victory-stats"><span data-i18n="victoryDeaths">DEATHS</span>: <span id="victory-deaths-count">0</span></p> <p class="victory-stats"><span data-i18n="victoryDegree">MAZE DEGREE</span>: <span id="victory-maze-degree">0</span></p> <p class="victory-stats"><span data-i18n="victoryTime">COMPLETION TIME</span>: <span id="victory-completion-time">00:00</span></p> <p class="victory-stats"><span data-i18n="victoryMana">MANA COLLECTED</span>: <span id="victory-mana-count">0/0</span></p> <div class="end-game-btns"><button id="next-tut-btn-victory" class="end-btn hidden" data-i18n="nextTutorial">NEXT TUTORIAL</button> <button id="restart-btn-victory" class="end-btn" data-i18n="playAgain">PLAY AGAIN</button> <button id="menu-btn-victory" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',h=Ne(),f=ye("section"),f.innerHTML='<div class="popup-container death"><h1 data-i18n="gameOverTitle">Terminated</h1> <p data-i18n="gameOverText">You were caught by the void hunters.</p> <div class="end-game-btns"><button id="continue-btn-death" class="end-btn continue-highlight" data-i18n="continue">CONTINUE</button> <button id="retry-btn-death" class="end-btn" data-i18n="playAgain">PLAY AGAIN</button> <button id="menu-btn-death" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',T=Ne(),_=ye("section"),_.innerHTML='<div class="popup-container pause"><h1 data-i18n="pauseTitle">PAUSED</h1> <div class="end-game-btns"><button id="resume-btn" class="end-btn continue-highlight" data-i18n="resume">RESUME</button> <button id="menu-btn-pause" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',y=Ne(),M=ye("div"),M.innerHTML='<span class="saving-icon">💾</span> <span data-i18n="saving">SAVING...</span>',S=Ne(),x=ye("main"),x.innerHTML='<button id="mobile-pause-btn" class="hidden" aria-label="Pause Game">✕</button> <button id="mobile-teleport-exit-btn" class="hidden" aria-label="Exit Teleport Map">✕</button> <div id="left-hud-panel" class="intro-hidden"><div class="hud-item-group"><div class="keys-title" data-i18n="hudKeys">KEYS</div> <div class="keys-counter"><span id="keys-collected-count">0</span> / <span id="keys-total-count">0</span></div> <div id="keys-list-container"></div></div> <div class="hud-item-group" id="pathfinder-hud-group"><div class="pathfinders-title" data-i18n="hudPathfinders">PATHFINDERS</div> <div class="pathfinders-counter"><span id="pathfinders-remaining-count">0</span> / <span id="pathfinders-total-count">0</span></div></div></div> <div id="map-area-container" class="intro-hidden"><div id="desktop-hud-row"><div id="mana-counter-desktop" class="mana-panel-hud"><span class="mana-icon">✨</span> <span class="mana-label" data-i18n="hudMana">MANA:</span> <span id="mana-collected-count-desktop">0</span>/<span id="mana-total-count-desktop">0</span></div> <div id="hunter-status-panel"><span class="status-label" data-i18n="statusLabel">HUNTER STATUS:</span> <div class="status-marquee-container"><span id="hunter-status-val" class="status-marquee-text status--scanning" data-i18n="statusScanning">SCANNING</span></div></div> <div id="jelly-portal-counter-desktop" class="jelly-portal-panel-hud"><div class="jelly-balls-container"><span class="jelly-ball gold-ball-1"></span> <span class="jelly-ball gold-ball-2"></span></div> <span class="jelly-portal-count-label">x<span id="jelly-portal-count-desktop">0</span></span></div></div> <div style="position: relative; display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 90vw; margin-bottom: calc(var(--h-unit) * 2); margin-bottom: calc(var(--d-h-unit) * 2);"><canvas id="main-2d-canvas" aria-label="2D Navigation Map" style="margin-bottom: 0;"></canvas> <button id="mobile-jelly-portal-btn" aria-label="Jelly God Portal"><svg class="jelly-portal-spiral" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M12 12a1 1 0 0 1 1 1c0 1.1-.9 2-2 2a3 3 0 0 1-3-3c0-2.2 1.8-4 4-4a5 5 0 0 1 5 5c0 3.3-2.7 6-6 6a7 7 0 0 1-7-7c0-4.4 3.6-8 8-8a9 9 0 0 1 9 9"></path></svg></button> <button id="mobile-zoom-btn" aria-label="Toggle Zoom"><svg id="zoom-out-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;"><circle cx="11" cy="11" r="6"></circle><line x1="21" y1="21" x2="15.5" y2="15.5"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg> <svg id="zoom-in-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;" class="hidden"><circle cx="11" cy="11" r="6"></circle><line x1="21" y1="21" x2="15.5" y2="15.5"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg></button></div> <div id="mobile-proximeter-row"><div id="mana-counter-mobile" class="mana-panel-hud"><span class="mana-icon">✨</span> <span class="mana-label" data-i18n="hudMana">MANA:</span> <span id="mana-collected-count-mobile">0</span>/<span id="mana-total-count-mobile">0</span></div> <div id="proximeter-container" class="hidden"><div class="proximeter-label" data-i18n="proximityDetector">PROXIMITY DETECTOR</div> <div class="proximeter-bar"><span class="proximeter-cell" data-index="1"></span> <span class="proximeter-cell" data-index="2"></span> <span class="proximeter-cell" data-index="3"></span> <span class="proximeter-cell" data-index="4"></span> <span class="proximeter-cell" data-index="5"></span> <span class="proximeter-cell" data-index="6"></span> <span class="proximeter-cell" data-index="7"></span> <span class="proximeter-cell" data-index="8"></span> <span class="proximeter-cell" data-index="9"></span> <span class="proximeter-cell" data-index="10"></span></div></div> <div id="jelly-portal-counter-mobile" class="jelly-portal-panel-hud"><div class="jelly-balls-container"><span class="jelly-ball gold-ball-1"></span> <span class="jelly-ball gold-ball-2"></span></div> <span class="jelly-portal-count-label">x<span id="jelly-portal-count-mobile">0</span></span></div></div> <div id="bottom-hud-container" class="intro-hidden"><div id="floor-display" aria-live="polite"><span class="hud-label" data-i18n="hudFloor">Floor</span> <span id="current-floor">0</span></div> <div id="visited-display" aria-live="polite"><span class="hud-label" data-i18n="hudVisited">Visited</span> <span class="visited-value"><span id="visited-percent">0</span>%</span></div></div></div> <div id="right-hud-panel" class="intro-hidden"><aside id="map-legend"><h3 data-i18n="mapLegendTitle">MAP LEGEND</h3> <div class="legend-item"><span class="color-box color-box--visited"></span> <span data-i18n="legendVisited">Visited Path</span></div> <div class="legend-item"><span class="color-box color-box--known"></span> <span data-i18n="legendKnown">Known Path</span></div> <div class="legend-item"><span class="color-box color-box--start"></span> <span data-i18n="legendStart">Starting Point</span></div> <div class="legend-item"><span class="color-box color-box--exit"></span> <span data-i18n="legendExit">Maze Exit</span></div> <div id="legend-hunter" class="legend-item"><span class="color-box color-box--hunter"></span> <span data-i18n="legendHunter">Void Hunter</span></div> <div class="legend-item"><span class="color-box color-box--teleport"></span> <span data-i18n="legendTeleport">Teleport</span></div> <div class="legend-item"><span class="symbol-box"><svg viewBox="0 0 24 24" fill="none" style="width: 100%; height: 100%;"><path d="M12 2L5 9H9V11H15V9H19L12 2Z" fill="#00ffff"></path><path d="M12 22L19 15H15V13H9V15H5L12 22Z" fill="#ff00ff"></path></svg></span> <span data-i18n="legendElevator">Elevator</span></div></aside> <aside id="controls-hint"><h3 data-i18n="controlsHintTitle">CONTROLS HINT</h3> <div id="controls-hint-content"></div></aside></div> <nav id="mobile-controls" class="hidden"><button id="mobile-down" class="mobile-btn" disabled="" aria-label="Go Down">▼</button> <button id="mobile-map" class="mobile-btn" disabled="" aria-label="Open Map" data-i18n="map">MAP</button> <button id="mobile-up" class="mobile-btn" disabled="" aria-label="Go Up">▲</button></nav> <div id="map3d-container" class="hidden"></div>',z=Ne(),E=ye("section"),E.innerHTML='<div class="story-loader"><div class="spinner"></div> <span data-i18n="generatingMaze">GENERATING MAZE...</span></div>',ee(t,"id","start-menu"),ee(o,"class","tutorials-list"),ee(l,"class","menu-action-btns"),ee(n,"class","menu-content"),ee(i,"id","tutorials-menu"),ee(i,"class","hidden"),ee(u,"id","tutorial-instructions-modal"),ee(u,"class","hidden"),ee(m,"id","story-screen"),ee(m,"class","hidden"),ee(v,"id","victory-screen"),ee(v,"class","hidden"),ee(f,"id","game-over-screen"),ee(f,"class","hidden"),ee(_,"id","pause-screen"),ee(_,"class","hidden"),ee(M,"id","saving-indicator"),ee(M,"class","hidden"),ee(x,"id","game-container"),ee(E,"id","loading-screen"),ee(E,"class","hidden")},m(U,K){ue(U,t,K),ue(U,e,K),ue(U,i,K),Ye(i,n),Ye(n,a),Ye(n,r),Ye(n,o);for(let R=0;R<F.length;R+=1)F[R]&&F[R].m(o,null);Ye(n,c),Ye(n,l),ue(U,d,K),ue(U,u,K),ue(U,p,K),ue(U,m,K),ue(U,g,K),ue(U,v,K),ue(U,h,K),ue(U,f,K),ue(U,T,K),ue(U,_,K),ue(U,y,K),ue(U,M,K),ue(U,S,K),ue(U,x,K),ue(U,z,K),ue(U,E,K)},p(U,[K]){if(K&3){A=$a(Di);let R;for(R=0;R<A.length;R+=1){const N=Ar(U,A,R);F[R]?F[R].p(N,K):(F[R]=Pr(N),F[R].c(),F[R].m(o,null))}for(;R<F.length;R+=1)F[R].d(1);F.length=A.length}},i:Pn,o:Pn,d(U){U&&(ce(t),ce(e),ce(i),ce(d),ce(u),ce(p),ce(m),ce(g),ce(v),ce(h),ce(f),ce(T),ce(_),ce(y),ce(M),ce(S),ce(x),ce(z),ce(E)),Sl(F,U)}}}function gm(s,t,e){let i=null,n="en";function a(p){var g,v,h;i&&i.destroy(),pl(),(g=document.getElementById("start-menu"))==null||g.classList.add("hidden"),(v=document.getElementById("victory-screen"))==null||v.classList.add("hidden"),(h=document.getElementById("game-over-screen"))==null||h.classList.add("hidden");const m=document.getElementById("loading-screen");m&&(m.classList.remove("hidden"),xn()),setTimeout(()=>{try{i=new ca(p,X.BRANCHING_FACTOR)}finally{m&&m.classList.add("hidden")}},50)}let r=null;function o(p){var h;r=p;const m=xr(),g=document.getElementById("tut-modal-title"),v=document.getElementById("tut-modal-description");g&&(g.innerText=p.title[m]||p.title.en),v&&(v.innerText=p.description[m]||p.description.en),(h=document.getElementById("tutorial-instructions-modal"))==null||h.classList.remove("hidden")}function c(p){var g,v,h,f;i&&i.destroy(),(g=document.getElementById("tutorial-instructions-modal"))==null||g.classList.add("hidden"),(v=document.getElementById("tutorials-menu"))==null||v.classList.add("hidden"),(h=document.getElementById("victory-screen"))==null||h.classList.add("hidden"),(f=document.getElementById("game-over-screen"))==null||f.classList.add("hidden");const m=document.getElementById("loading-screen");m&&(m.classList.remove("hidden"),xn()),setTimeout(()=>{try{i=new ca(p.degree||3,X.BRANCHING_FACTOR,null,p)}finally{m&&m.classList.add("hidden")}},50)}function l(){var g,v,h;const p=fl();if(!p)return;i&&i.destroy(),(g=document.getElementById("start-menu"))==null||g.classList.add("hidden"),(v=document.getElementById("victory-screen"))==null||v.classList.add("hidden"),(h=document.getElementById("game-over-screen"))==null||h.classList.add("hidden");const m=document.getElementById("loading-screen");m&&(m.classList.remove("hidden"),xn()),setTimeout(()=>{try{i=new ca(p.degree,p.branchingFactor,p)}finally{m&&m.classList.add("hidden")}},50)}function d(){var m,g,v;i&&i.destroy(),(m=document.getElementById("victory-screen"))==null||m.classList.add("hidden"),(g=document.getElementById("game-over-screen"))==null||g.classList.add("hidden");const p=document.getElementById("continue-btn-menu");p&&(p.style.display=br()?"":"none"),(v=document.getElementById("start-menu"))==null||v.classList.remove("hidden")}return wl(()=>{xn();const p=document.getElementById("maze-degree"),m=document.getElementById("degree-val"),g=document.getElementById("hunter-count"),v=document.getElementById("teleport-count"),h=document.getElementById("keys-count"),f=document.getElementById("pathfinder-count"),T=document.getElementById("safe-mode"),_=w=>{const $=T&&T.checked?0:X.getHunterCount(w);g&&(g.innerText=String($),g.style.color=$>0?"#f00":"#88ccff")};T&&p&&(T.onchange=()=>{_(parseInt(p.value))});const y=w=>{const D=X.getTeleportCount(w);v&&(v.innerText=String(D))},M=w=>{const D=X.getHunterCount(w)*2;h&&(h.innerText=String(D))},S=w=>{const D=X.getPathfinderCount(w);f&&(f.innerText=String(D))};if(p){X.MIN_MAZE_DEGREE!==void 0&&(p.min=String(X.MIN_MAZE_DEGREE)),X.MAX_MAZE_DEGREE!==void 0&&(p.max=String(X.MAX_MAZE_DEGREE)),X.MAZE_DEGREE!==void 0&&(p.value=String(X.MAZE_DEGREE)),p.oninput=()=>{const D=parseInt(p.value);m&&(m.innerText=String(D)),_(D),y(D),M(D),S(D)};const w=parseInt(p.value);m&&(m.innerText=String(w)),_(w),y(w),M(w),S(w)}const x=document.getElementById("continue-btn-menu");x&&(x.style.display=br()?"":"none");const z=document.getElementById("mobile-pause-btn");z&&(z.onclick=w=>{w.stopPropagation(),i&&i.togglePause()});const E=document.getElementById("mobile-teleport-exit-btn");E&&(E.onclick=w=>{w.stopPropagation(),i&&i.isTeleportMode&&i.toggleTeleportMap(!1)});const A=document.getElementById("mobile-jelly-portal-btn");A&&(A.onclick=w=>{w.stopPropagation(),i&&i.tryActivateJellyPortal()});const F=document.getElementById("start-btn");F&&p&&(F.onclick=()=>{a(parseInt(p.value))});const U=document.getElementById("restart-btn-victory");U&&p&&(U.onclick=()=>{i&&i.isTutorialMode&&i.currentTutorialStage?c(i.currentTutorialStage):a(parseInt(p.value))});const K=document.getElementById("continue-btn-menu");K&&(K.onclick=()=>{l()});const R=document.getElementById("menu-btn-victory");R&&(R.onclick=()=>{var w,D;i&&i.isTutorialMode?((w=document.getElementById("victory-screen"))==null||w.classList.add("hidden"),(D=document.getElementById("tutorials-menu"))==null||D.classList.remove("hidden")):d()});const N=document.getElementById("next-tut-btn-victory");N&&(N.onclick=()=>{var w;if(i&&i.isTutorialMode&&i.currentTutorialId){const D=Di.findIndex($=>$.id===i.currentTutorialId);if(D!==-1&&D+1<Di.length){const $=Di[D+1];(w=document.getElementById("victory-screen"))==null||w.classList.add("hidden"),o($)}}});const k=document.getElementById("continue-btn-death");k&&(k.onclick=()=>{l()});const W=document.getElementById("retry-btn-death");W&&p&&(W.onclick=()=>{i&&i.isTutorialMode&&i.currentTutorialStage?c(i.currentTutorialStage):a(parseInt(p.value))});const H=document.getElementById("menu-btn-death");H&&(H.onclick=()=>{d()});const q=document.getElementById("resume-btn");q&&(q.onclick=()=>{i&&i.togglePause()});const Q=document.getElementById("menu-btn-pause");Q&&(Q.onclick=()=>{d()});const it=document.getElementById("tutorials-btn-menu"),J=document.getElementById("tutorials-menu"),B=document.getElementById("start-menu"),et=document.getElementById("back-to-menu-btn");it&&(it.onclick=()=>{e(0,n=xr()),B==null||B.classList.add("hidden"),J==null||J.classList.remove("hidden")}),et&&(et.onclick=()=>{J==null||J.classList.add("hidden"),B==null||B.classList.remove("hidden")});const ot=document.getElementById("tut-modal-start-btn"),Mt=document.getElementById("tut-modal-cancel-btn");ot&&(ot.onclick=()=>{r&&c(r)}),Mt&&(Mt.onclick=()=>{var w;(w=document.getElementById("tutorial-instructions-modal"))==null||w.classList.add("hidden"),r=null})}),[n,o,p=>o(p)]}class vm extends Bl{constructor(t){super(),Gl(this,t,gm,mm,El,{})}}new vm({target:document.getElementById("app")});
