var El=Object.defineProperty;var Ml=(s,t,e)=>t in s?El(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var N=(s,t,e)=>Ml(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();function Cn(){}function wr(s){return s()}function Wa(){return Object.create(null)}function ys(s){s.forEach(wr)}function Rr(s){return typeof s=="function"}function Sl(s,t){return s!=s?t==t:s!==t||s&&typeof s=="object"||typeof s=="function"}function xl(s){return Object.keys(s).length===0}function Ye(s,t){s.appendChild(t)}function ce(s,t,e){s.insertBefore(t,e||null)}function re(s){s.parentNode&&s.parentNode.removeChild(s)}function bl(s,t){for(let e=0;e<s.length;e+=1)s[e]&&s[e].d(t)}function ye(s){return document.createElement(s)}function Lr(s){return document.createTextNode(s)}function Le(){return Lr(" ")}function Al(s,t,e,i){return s.addEventListener(t,e,i),()=>s.removeEventListener(t,e,i)}function ie(s,t,e){e==null?s.removeAttribute(t):s.getAttribute(t)!==e&&s.setAttribute(t,e)}function Pl(s){return Array.from(s.childNodes)}function Cl(s,t){t=""+t,s.data!==t&&(s.data=t)}let wn;function xn(s){wn=s}function wl(){if(!wn)throw new Error("Function called outside component initialization");return wn}function Rl(s){wl().$$.on_mount.push(s)}const sn=[],Ya=[];let rn=[];const Xa=[],Ll=Promise.resolve();let ha=!1;function Il(){ha||(ha=!0,Ll.then(Ir))}function da(s){rn.push(s)}const Cs=new Set;let Fi=0;function Ir(){if(Fi!==0)return;const s=wn;do{try{for(;Fi<sn.length;){const t=sn[Fi];Fi++,xn(t),Dl(t.$$)}}catch(t){throw sn.length=0,Fi=0,t}for(xn(null),sn.length=0,Fi=0;Ya.length;)Ya.pop()();for(let t=0;t<rn.length;t+=1){const e=rn[t];Cs.has(e)||(Cs.add(e),e())}rn.length=0}while(sn.length);for(;Xa.length;)Xa.pop()();ha=!1,Cs.clear(),xn(s)}function Dl(s){if(s.fragment!==null){s.update(),ys(s.before_update);const t=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,t),s.after_update.forEach(da)}}function Ol(s){const t=[],e=[];rn.forEach(i=>s.indexOf(i)===-1?t.push(i):e.push(i)),e.forEach(i=>i()),rn=t}const Nl=new Set;function zl(s,t){s&&s.i&&(Nl.delete(s),s.i(t))}function $a(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function Ul(s,t,e){const{fragment:i,after_update:n}=s.$$;i&&i.m(t,e),da(()=>{const a=s.$$.on_mount.map(wr).filter(Rr);s.$$.on_destroy?s.$$.on_destroy.push(...a):ys(a),s.$$.on_mount=[]}),n.forEach(da)}function Fl(s,t){const e=s.$$;e.fragment!==null&&(Ol(e.after_update),ys(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function Gl(s,t){s.$$.dirty[0]===-1&&(sn.push(s),Il(),s.$$.dirty.fill(0)),s.$$.dirty[t/31|0]|=1<<t%31}function Bl(s,t,e,i,n,a,r=null,o=[-1]){const c=wn;xn(s);const l=s.$$={fragment:null,ctx:[],props:a,update:Cn,not_equal:n,bound:Wa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Wa(),dirty:o,skip_bound:!1,root:t.target||c.$$.root};r&&r(l.root);let u=!1;if(l.ctx=e?e(s,t.props||{},(f,p,...m)=>{const T=m.length?m[0]:p;return l.ctx&&n(l.ctx[f],l.ctx[f]=T)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](T),u&&Gl(s,f)),p}):[],l.update(),u=!0,ys(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){const f=Pl(t.target);l.fragment&&l.fragment.l(f),f.forEach(re)}else l.fragment&&l.fragment.c();t.intro&&zl(s.$$.fragment),Ul(s,t.target,t.anchor),Ir()}xn(c)}class kl{constructor(){N(this,"$$");N(this,"$$set")}$destroy(){Fl(this,1),this.$destroy=Cn}$on(t,e){if(!Rr(e))return Cn;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(e),()=>{const n=i.indexOf(e);n!==-1&&i.splice(n,1)}}$set(t){this.$$set&&!xl(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Hl="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Hl);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ba="160",Gi={ROTATE:0,DOLLY:1,PAN:2},Bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vl=0,Ka=1,Wl=2,Dr=1,Yl=2,ai=3,Ti=0,Ie=1,oi=2,vi=0,ln=1,ja=2,qa=3,Za=4,Xl=5,Ci=100,$l=101,Kl=102,Ja=103,Qa=104,jl=200,ql=201,Zl=202,Jl=203,ua=204,fa=205,Ql=206,tc=207,ec=208,ic=209,nc=210,sc=211,ac=212,oc=213,rc=214,lc=0,cc=1,hc=2,hs=3,dc=4,uc=5,fc=6,pc=7,Aa=0,mc=1,gc=2,yi=0,vc=1,yc=2,_c=3,Tc=4,Ec=5,Mc=6,Or=300,hn=301,dn=302,pa=303,ma=304,_s=306,ga=1e3,$e=1001,va=1002,Ce=1003,to=1004,ws=1005,Ge=1006,Sc=1007,Rn=1008,_i=1009,xc=1010,bc=1011,Pa=1012,Nr=1013,mi=1014,gi=1015,Ln=1016,zr=1017,Ur=1018,Ri=1020,Ac=1021,Ke=1023,Pc=1024,Cc=1025,Li=1026,un=1027,wc=1028,Fr=1029,Rc=1030,Gr=1031,Br=1033,Rs=33776,Ls=33777,Is=33778,Ds=33779,eo=35840,io=35841,no=35842,so=35843,kr=36196,ao=37492,oo=37496,ro=37808,lo=37809,co=37810,ho=37811,uo=37812,fo=37813,po=37814,mo=37815,go=37816,vo=37817,yo=37818,_o=37819,To=37820,Eo=37821,Os=36492,Mo=36494,So=36495,Lc=36283,xo=36284,bo=36285,Ao=36286,Hr=3e3,Ii=3001,Ic=3200,Dc=3201,Vr=0,Oc=1,ke="",Te="srgb",li="srgb-linear",Ca="display-p3",Ts="display-p3-linear",ds="linear",ne="srgb",us="rec709",fs="p3",ki=7680,Po=519,Nc=512,zc=513,Uc=514,Wr=515,Fc=516,Gc=517,Bc=518,kc=519,Co=35044,wo="300 es",ya=1035,ri=2e3,ps=2001;class Ui{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const a=n.indexOf(e);a!==-1&&n.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let a=0,r=n.length;a<r;a++)n[a].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ls=Math.PI/180,_a=180/Math.PI;function In(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Me[s&255]+Me[s>>8&255]+Me[s>>16&255]+Me[s>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]).toLowerCase()}function we(s,t,e){return Math.max(t,Math.min(e,s))}function Hc(s,t){return(s%t+t)%t}function Ns(s,t,e){return(1-e)*s+e*t}function Ro(s){return(s&s-1)===0&&s!==0}function Ta(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function vn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Vc={DEG2RAD:ls};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*n+t.x,this.y=a*n+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,i,n,a,r,o,c,l){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,r,o,c,l)}set(t,e,i,n,a,r,o,c,l){const u=this.elements;return u[0]=t,u[1]=n,u[2]=o,u[3]=e,u[4]=a,u[5]=c,u[6]=i,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,r=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],p=i[2],m=i[5],T=i[8],_=n[0],h=n[3],d=n[6],y=n[1],g=n[4],v=n[7],E=n[2],b=n[5],S=n[8];return a[0]=r*_+o*y+c*E,a[3]=r*h+o*g+c*b,a[6]=r*d+o*v+c*S,a[1]=l*_+u*y+f*E,a[4]=l*h+u*g+f*b,a[7]=l*d+u*v+f*S,a[2]=p*_+m*y+T*E,a[5]=p*h+m*g+T*b,a[8]=p*d+m*v+T*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*r*u-e*o*l-i*a*u+i*o*c+n*a*l-n*r*c}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*r-o*l,p=o*c-u*a,m=l*a-r*c,T=e*f+i*p+n*m;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/T;return t[0]=f*_,t[1]=(n*l-u*i)*_,t[2]=(o*i-n*r)*_,t[3]=p*_,t[4]=(u*e-n*c)*_,t[5]=(n*a-o*e)*_,t[6]=m*_,t[7]=(i*c-l*e)*_,t[8]=(r*e-i*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*r+l*o)+r+t,-n*l,n*c,-n*(-l*r+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(zs.makeScale(t,e)),this}rotate(t){return this.premultiply(zs.makeRotation(-t)),this}translate(t,e){return this.premultiply(zs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zs=new qt;function Yr(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ms(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wc(){const s=ms("canvas");return s.style.display="block",s}const Lo={};function bn(s){s in Lo||(Lo[s]=!0,console.warn(s))}const Io=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Do=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Un={[li]:{transfer:ds,primaries:us,toReference:s=>s,fromReference:s=>s},[Te]:{transfer:ne,primaries:us,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ts]:{transfer:ds,primaries:fs,toReference:s=>s.applyMatrix3(Do),fromReference:s=>s.applyMatrix3(Io)},[Ca]:{transfer:ne,primaries:fs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Do),fromReference:s=>s.applyMatrix3(Io).convertLinearToSRGB()}},Yc=new Set([li,Ts]),te={enabled:!0,_workingColorSpace:li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Yc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=Un[t].toReference,n=Un[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Un[s].primaries},getTransfer:function(s){return s===ke?ds:Un[s].transfer}};function cn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Hi;class Xr{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hi===void 0&&(Hi=ms("canvas")),Hi.width=t.width,Hi.height=t.height;const i=Hi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ms("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),a=n.data;for(let r=0;r<a.length;r++)a[r]=cn(a[r]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(cn(e[i]/255)*255):e[i]=cn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xc=0;class $r{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=In(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?a.push(Fs(n[r].image)):a.push(Fs(n[r]))}else a=Fs(n);i.url=a}return e||(t.images[this.uuid]=i),i}}function Fs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Xr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $c=0;class ze extends Ui{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,i=$e,n=$e,a=Ge,r=Rn,o=Ke,c=_i,l=ze.DEFAULT_ANISOTROPY,u=ke){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=In(),this.name="",this.source=new $r(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(bn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ii?Te:ke),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Or)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ga:t.x=t.x-Math.floor(t.x);break;case $e:t.x=t.x<0?0:1;break;case va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ga:t.y=t.y-Math.floor(t.y);break;case $e:t.y=t.y<0?0:1;break;case va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Te?Ii:Hr}set encoding(t){bn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ii?Te:ke}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Or;ze.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,i=0,n=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n+r[12]*a,this.y=r[1]*e+r[5]*i+r[9]*n+r[13]*a,this.z=r[2]*e+r[6]*i+r[10]*n+r[14]*a,this.w=r[3]*e+r[7]*i+r[11]*n+r[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,a;const c=t.elements,l=c[0],u=c[4],f=c[8],p=c[1],m=c[5],T=c[9],_=c[2],h=c[6],d=c[10];if(Math.abs(u-p)<.01&&Math.abs(f-_)<.01&&Math.abs(T-h)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+_)<.1&&Math.abs(T+h)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(l+1)/2,v=(m+1)/2,E=(d+1)/2,b=(u+p)/4,S=(f+_)/4,z=(T+h)/4;return g>v&&g>E?g<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(g),n=b/i,a=S/i):v>E?v<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(v),i=b/n,a=z/n):E<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(E),i=S/a,n=z/a),this.set(i,n,a,e),this}let y=Math.sqrt((h-T)*(h-T)+(f-_)*(f-_)+(p-u)*(p-u));return Math.abs(y)<.001&&(y=1),this.x=(h-T)/y,this.y=(f-_)/y,this.z=(p-u)/y,this.w=Math.acos((l+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kc extends Ui{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const n={width:t,height:e,depth:1};i.encoding!==void 0&&(bn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ii?Te:ke),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ze(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $r(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends Kc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Kr extends ze{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jc extends ze{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,a,r,o){let c=i[n+0],l=i[n+1],u=i[n+2],f=i[n+3];const p=a[r+0],m=a[r+1],T=a[r+2],_=a[r+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=T,t[e+3]=_;return}if(f!==_||c!==p||l!==m||u!==T){let h=1-o;const d=c*p+l*m+u*T+f*_,y=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const E=Math.sqrt(g),b=Math.atan2(E,d*y);h=Math.sin(h*b)/E,o=Math.sin(o*b)/E}const v=o*y;if(c=c*h+p*v,l=l*h+m*v,u=u*h+T*v,f=f*h+_*v,h===1-o){const E=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=E,l*=E,u*=E,f*=E}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,n,a,r){const o=i[n],c=i[n+1],l=i[n+2],u=i[n+3],f=a[r],p=a[r+1],m=a[r+2],T=a[r+3];return t[e]=o*T+u*f+c*m-l*p,t[e+1]=c*T+u*p+l*f-o*m,t[e+2]=l*T+u*m+o*p-c*f,t[e+3]=u*T-o*f-c*p-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,a=t._z,r=t._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(n/2),f=o(a/2),p=c(i/2),m=c(n/2),T=c(a/2);switch(r){case"XYZ":this._x=p*u*f+l*m*T,this._y=l*m*f-p*u*T,this._z=l*u*T+p*m*f,this._w=l*u*f-p*m*T;break;case"YXZ":this._x=p*u*f+l*m*T,this._y=l*m*f-p*u*T,this._z=l*u*T-p*m*f,this._w=l*u*f+p*m*T;break;case"ZXY":this._x=p*u*f-l*m*T,this._y=l*m*f+p*u*T,this._z=l*u*T+p*m*f,this._w=l*u*f-p*m*T;break;case"ZYX":this._x=p*u*f-l*m*T,this._y=l*m*f+p*u*T,this._z=l*u*T-p*m*f,this._w=l*u*f+p*m*T;break;case"YZX":this._x=p*u*f+l*m*T,this._y=l*m*f+p*u*T,this._z=l*u*T-p*m*f,this._w=l*u*f-p*m*T;break;case"XZY":this._x=p*u*f-l*m*T,this._y=l*m*f-p*u*T,this._z=l*u*T+p*m*f,this._w=l*u*f+p*m*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],a=e[8],r=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],p=i+o+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-c)*m,this._y=(a-l)*m,this._z=(r-n)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-c)/m,this._x=.25*m,this._y=(n+r)/m,this._z=(a+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(a-l)/m,this._x=(n+r)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(r-n)/m,this._x=(a+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,a=t._z,r=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+r*o+n*l-a*c,this._y=n*u+r*c+a*o-i*l,this._z=a*u+r*l+i*c-n*o,this._w=r*u-i*o-n*c-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,a=this._z,r=this._w;let o=r*t._w+i*t._x+n*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=n,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*r+e*this._w,this._x=m*i+e*this._x,this._y=m*n+e*this._y,this._z=m*a+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-e)*u)/l,p=Math.sin(e*u)/l;return this._w=r*f+this._w*p,this._x=i*f+this._x*p,this._y=n*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(a),i*Math.cos(a),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,e=0,i=0){Q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*n,this.y=a[1]*e+a[4]*i+a[7]*n,this.z=a[2]*e+a[5]*i+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=t.elements,r=1/(a[3]*e+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*n+a[12])*r,this.y=(a[1]*e+a[5]*i+a[9]*n+a[13])*r,this.z=(a[2]*e+a[6]*i+a[10]*n+a[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,a=t.x,r=t.y,o=t.z,c=t.w,l=2*(r*n-o*i),u=2*(o*e-a*n),f=2*(a*i-r*e);return this.x=e+c*l+r*f-o*u,this.y=i+c*u+o*l-a*f,this.z=n+c*f+a*u-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n,this.y=a[1]*e+a[5]*i+a[9]*n,this.z=a[2]*e+a[6]*i+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,a=t.z,r=e.x,o=e.y,c=e.z;return this.x=n*c-a*o,this.y=a*r-i*c,this.z=i*o-n*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Gs.copy(this).projectOnVector(t),this.sub(Gs)}reflect(t){return this.sub(Gs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gs=new Q,Oo=new Ni;class Dn{constructor(t=new Q(1/0,1/0,1/0),e=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,He):He.fromBufferAttribute(a,r),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fn.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fn.copy(i.boundingBox)),Fn.applyMatrix4(t.matrixWorld),this.union(Fn)}const n=t.children;for(let a=0,r=n.length;a<r;a++)this.expandByObject(n[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yn),Gn.subVectors(this.max,yn),Vi.subVectors(t.a,yn),Wi.subVectors(t.b,yn),Yi.subVectors(t.c,yn),ci.subVectors(Wi,Vi),hi.subVectors(Yi,Wi),Si.subVectors(Vi,Yi);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Si.z,Si.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Si.z,0,-Si.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Si.y,Si.x,0];return!Bs(e,Vi,Wi,Yi,Gn)||(e=[1,0,0,0,1,0,0,0,1],!Bs(e,Vi,Wi,Yi,Gn))?!1:(Bn.crossVectors(ci,hi),e=[Bn.x,Bn.y,Bn.z],Bs(e,Vi,Wi,Yi,Gn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ti=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],He=new Q,Fn=new Dn,Vi=new Q,Wi=new Q,Yi=new Q,ci=new Q,hi=new Q,Si=new Q,yn=new Q,Gn=new Q,Bn=new Q,xi=new Q;function Bs(s,t,e,i,n){for(let a=0,r=s.length-3;a<=r;a+=3){xi.fromArray(s,a);const o=n.x*Math.abs(xi.x)+n.y*Math.abs(xi.y)+n.z*Math.abs(xi.z),c=t.dot(xi),l=e.dot(xi),u=i.dot(xi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const qc=new Dn,_n=new Q,ks=new Q;class wa{constructor(t=new Q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):qc.setFromPoints(t).getCenter(i);let n=0;for(let a=0,r=t.length;a<r;a++)n=Math.max(n,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_n.subVectors(t,this.center);const e=_n.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(_n,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ks.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_n.copy(t.center).add(ks)),this.expandByPoint(_n.copy(t.center).sub(ks))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new Q,Hs=new Q,kn=new Q,di=new Q,Vs=new Q,Hn=new Q,Ws=new Q;class Ra{constructor(t=new Q,e=new Q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Hs.copy(t).add(e).multiplyScalar(.5),kn.copy(e).sub(t).normalize(),di.copy(this.origin).sub(Hs);const a=t.distanceTo(e)*.5,r=-this.direction.dot(kn),o=di.dot(this.direction),c=-di.dot(kn),l=di.lengthSq(),u=Math.abs(1-r*r);let f,p,m,T;if(u>0)if(f=r*c-o,p=r*o-c,T=a*u,f>=0)if(p>=-T)if(p<=T){const _=1/u;f*=_,p*=_,m=f*(f+r*p+2*o)+p*(r*f+p+2*c)+l}else p=a,f=Math.max(0,-(r*p+o)),m=-f*f+p*(p+2*c)+l;else p=-a,f=Math.max(0,-(r*p+o)),m=-f*f+p*(p+2*c)+l;else p<=-T?(f=Math.max(0,-(-r*a+o)),p=f>0?-a:Math.min(Math.max(-a,-c),a),m=-f*f+p*(p+2*c)+l):p<=T?(f=0,p=Math.min(Math.max(-a,-c),a),m=p*(p+2*c)+l):(f=Math.max(0,-(r*a+o)),p=f>0?a:Math.min(Math.max(-a,-c),a),m=-f*f+p*(p+2*c)+l);else p=r>0?-a:a,f=Math.max(0,-(r*p+o)),m=-f*f+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(Hs).addScaledVector(kn,p),m}intersectSphere(t,e){ei.subVectors(t.center,this.origin);const i=ei.dot(this.direction),n=ei.dot(ei)-i*i,a=t.radius*t.radius;if(n>a)return null;const r=Math.sqrt(a-n),o=i-r,c=i+r;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,a,r,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(i=(t.min.x-p.x)*l,n=(t.max.x-p.x)*l):(i=(t.max.x-p.x)*l,n=(t.min.x-p.x)*l),u>=0?(a=(t.min.y-p.y)*u,r=(t.max.y-p.y)*u):(a=(t.max.y-p.y)*u,r=(t.min.y-p.y)*u),i>r||a>n||((a>i||isNaN(i))&&(i=a),(r<n||isNaN(n))&&(n=r),f>=0?(o=(t.min.z-p.z)*f,c=(t.max.z-p.z)*f):(o=(t.max.z-p.z)*f,c=(t.min.z-p.z)*f),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,i,n,a){Vs.subVectors(e,t),Hn.subVectors(i,t),Ws.crossVectors(Vs,Hn);let r=this.direction.dot(Ws),o;if(r>0){if(n)return null;o=1}else if(r<0)o=-1,r=-r;else return null;di.subVectors(this.origin,t);const c=o*this.direction.dot(Hn.crossVectors(di,Hn));if(c<0)return null;const l=o*this.direction.dot(Vs.cross(di));if(l<0||c+l>r)return null;const u=-o*di.dot(Ws);return u<0?null:this.at(u/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,i,n,a,r,o,c,l,u,f,p,m,T,_,h){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,r,o,c,l,u,f,p,m,T,_,h)}set(t,e,i,n,a,r,o,c,l,u,f,p,m,T,_,h){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=n,d[1]=a,d[5]=r,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=p,d[3]=m,d[7]=T,d[11]=_,d[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Xi.setFromMatrixColumn(t,0).length(),a=1/Xi.setFromMatrixColumn(t,1).length(),r=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),u=Math.cos(a),f=Math.sin(a);if(t.order==="XYZ"){const p=r*u,m=r*f,T=o*u,_=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=m+T*l,e[5]=p-_*l,e[9]=-o*c,e[2]=_-p*l,e[6]=T+m*l,e[10]=r*c}else if(t.order==="YXZ"){const p=c*u,m=c*f,T=l*u,_=l*f;e[0]=p+_*o,e[4]=T*o-m,e[8]=r*l,e[1]=r*f,e[5]=r*u,e[9]=-o,e[2]=m*o-T,e[6]=_+p*o,e[10]=r*c}else if(t.order==="ZXY"){const p=c*u,m=c*f,T=l*u,_=l*f;e[0]=p-_*o,e[4]=-r*f,e[8]=T+m*o,e[1]=m+T*o,e[5]=r*u,e[9]=_-p*o,e[2]=-r*l,e[6]=o,e[10]=r*c}else if(t.order==="ZYX"){const p=r*u,m=r*f,T=o*u,_=o*f;e[0]=c*u,e[4]=T*l-m,e[8]=p*l+_,e[1]=c*f,e[5]=_*l+p,e[9]=m*l-T,e[2]=-l,e[6]=o*c,e[10]=r*c}else if(t.order==="YZX"){const p=r*c,m=r*l,T=o*c,_=o*l;e[0]=c*u,e[4]=_-p*f,e[8]=T*f+m,e[1]=f,e[5]=r*u,e[9]=-o*u,e[2]=-l*u,e[6]=m*f+T,e[10]=p-_*f}else if(t.order==="XZY"){const p=r*c,m=r*l,T=o*c,_=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=p*f+_,e[5]=r*u,e[9]=m*f-T,e[2]=T*f-m,e[6]=o*u,e[10]=_*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zc,t,Jc)}lookAt(t,e,i){const n=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),ui.crossVectors(i,Oe),ui.lengthSq()===0&&(Math.abs(i.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),ui.crossVectors(i,Oe)),ui.normalize(),Vn.crossVectors(Oe,ui),n[0]=ui.x,n[4]=Vn.x,n[8]=Oe.x,n[1]=ui.y,n[5]=Vn.y,n[9]=Oe.y,n[2]=ui.z,n[6]=Vn.z,n[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,r=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],p=i[9],m=i[13],T=i[2],_=i[6],h=i[10],d=i[14],y=i[3],g=i[7],v=i[11],E=i[15],b=n[0],S=n[4],z=n[8],M=n[12],A=n[1],G=n[5],k=n[9],q=n[13],w=n[2],O=n[6],B=n[10],X=n[14],Y=n[3],Z=n[7],V=n[11],K=n[15];return a[0]=r*b+o*A+c*w+l*Y,a[4]=r*S+o*G+c*O+l*Z,a[8]=r*z+o*k+c*B+l*V,a[12]=r*M+o*q+c*X+l*K,a[1]=u*b+f*A+p*w+m*Y,a[5]=u*S+f*G+p*O+m*Z,a[9]=u*z+f*k+p*B+m*V,a[13]=u*M+f*q+p*X+m*K,a[2]=T*b+_*A+h*w+d*Y,a[6]=T*S+_*G+h*O+d*Z,a[10]=T*z+_*k+h*B+d*V,a[14]=T*M+_*q+h*X+d*K,a[3]=y*b+g*A+v*w+E*Y,a[7]=y*S+g*G+v*O+E*Z,a[11]=y*z+g*k+v*B+E*V,a[15]=y*M+g*q+v*X+E*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],a=t[12],r=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],p=t[10],m=t[14],T=t[3],_=t[7],h=t[11],d=t[15];return T*(+a*c*f-n*l*f-a*o*p+i*l*p+n*o*m-i*c*m)+_*(+e*c*m-e*l*p+a*r*p-n*r*m+n*l*u-a*c*u)+h*(+e*l*f-e*o*m-a*r*f+i*r*m+a*o*u-i*l*u)+d*(-n*o*u-e*c*f+e*o*p+n*r*f-i*r*p+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],p=t[10],m=t[11],T=t[12],_=t[13],h=t[14],d=t[15],y=f*h*l-_*p*l+_*c*m-o*h*m-f*c*d+o*p*d,g=T*p*l-u*h*l-T*c*m+r*h*m+u*c*d-r*p*d,v=u*_*l-T*f*l+T*o*m-r*_*m-u*o*d+r*f*d,E=T*f*c-u*_*c-T*o*p+r*_*p+u*o*h-r*f*h,b=e*y+i*g+n*v+a*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/b;return t[0]=y*S,t[1]=(_*p*a-f*h*a-_*n*m+i*h*m+f*n*d-i*p*d)*S,t[2]=(o*h*a-_*c*a+_*n*l-i*h*l-o*n*d+i*c*d)*S,t[3]=(f*c*a-o*p*a-f*n*l+i*p*l+o*n*m-i*c*m)*S,t[4]=g*S,t[5]=(u*h*a-T*p*a+T*n*m-e*h*m-u*n*d+e*p*d)*S,t[6]=(T*c*a-r*h*a-T*n*l+e*h*l+r*n*d-e*c*d)*S,t[7]=(r*p*a-u*c*a+u*n*l-e*p*l-r*n*m+e*c*m)*S,t[8]=v*S,t[9]=(T*f*a-u*_*a-T*i*m+e*_*m+u*i*d-e*f*d)*S,t[10]=(r*_*a-T*o*a+T*i*l-e*_*l-r*i*d+e*o*d)*S,t[11]=(u*o*a-r*f*a-u*i*l+e*f*l+r*i*m-e*o*m)*S,t[12]=E*S,t[13]=(u*_*n-T*f*n+T*i*p-e*_*p-u*i*h+e*f*h)*S,t[14]=(T*o*n-r*_*n-T*i*c+e*_*c+r*i*h-e*o*h)*S,t[15]=(r*f*n-u*o*n+u*i*c-e*f*c-r*i*p+e*o*p)*S,this}scale(t){const e=this.elements,i=t.x,n=t.y,a=t.z;return e[0]*=i,e[4]*=n,e[8]*=a,e[1]*=i,e[5]*=n,e[9]*=a,e[2]*=i,e[6]*=n,e[10]*=a,e[3]*=i,e[7]*=n,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),a=1-i,r=t.x,o=t.y,c=t.z,l=a*r,u=a*o;return this.set(l*r+i,l*o-n*c,l*c+n*o,0,l*o+n*c,u*o+i,u*c-n*r,0,l*c-n*o,u*c+n*r,a*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,a,r){return this.set(1,i,a,0,t,1,r,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,a=e._x,r=e._y,o=e._z,c=e._w,l=a+a,u=r+r,f=o+o,p=a*l,m=a*u,T=a*f,_=r*u,h=r*f,d=o*f,y=c*l,g=c*u,v=c*f,E=i.x,b=i.y,S=i.z;return n[0]=(1-(_+d))*E,n[1]=(m+v)*E,n[2]=(T-g)*E,n[3]=0,n[4]=(m-v)*b,n[5]=(1-(p+d))*b,n[6]=(h+y)*b,n[7]=0,n[8]=(T+g)*S,n[9]=(h-y)*S,n[10]=(1-(p+_))*S,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let a=Xi.set(n[0],n[1],n[2]).length();const r=Xi.set(n[4],n[5],n[6]).length(),o=Xi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),t.x=n[12],t.y=n[13],t.z=n[14],Ve.copy(this);const l=1/a,u=1/r,f=1/o;return Ve.elements[0]*=l,Ve.elements[1]*=l,Ve.elements[2]*=l,Ve.elements[4]*=u,Ve.elements[5]*=u,Ve.elements[6]*=u,Ve.elements[8]*=f,Ve.elements[9]*=f,Ve.elements[10]*=f,e.setFromRotationMatrix(Ve),i.x=a,i.y=r,i.z=o,this}makePerspective(t,e,i,n,a,r,o=ri){const c=this.elements,l=2*a/(e-t),u=2*a/(i-n),f=(e+t)/(e-t),p=(i+n)/(i-n);let m,T;if(o===ri)m=-(r+a)/(r-a),T=-2*r*a/(r-a);else if(o===ps)m=-r/(r-a),T=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=T,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,a,r,o=ri){const c=this.elements,l=1/(e-t),u=1/(i-n),f=1/(r-a),p=(e+t)*l,m=(i+n)*u;let T,_;if(o===ri)T=(r+a)*f,_=-2*f;else if(o===ps)T=a*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-T,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Xi=new Q,Ve=new fe,Zc=new Q(0,0,0),Jc=new Q(1,1,1),ui=new Q,Vn=new Q,Oe=new Q,No=new fe,zo=new Ni;class Es{constructor(t=0,e=0,i=0,n=Es.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,a=n[0],r=n[4],o=n[8],c=n[1],l=n[5],u=n[9],f=n[2],p=n[6],m=n[10];switch(e){case"XYZ":this._y=Math.asin(we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(we(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-we(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(we(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-we(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return No.makeRotationFromQuaternion(t),this.setFromRotationMatrix(No,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zo.setFromEuler(this),this.setFromQuaternion(zo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Es.DEFAULT_ORDER="XYZ";class La{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qc=0;const Uo=new Q,$i=new Ni,ii=new fe,Wn=new Q,Tn=new Q,th=new Q,eh=new Ni,Fo=new Q(1,0,0),Go=new Q(0,1,0),Bo=new Q(0,0,1),ih={type:"added"},nh={type:"removed"};class be extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new Q,e=new Es,i=new Ni,n=new Q(1,1,1);function a(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new fe},normalMatrix:{value:new qt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new La,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(Fo,t)}rotateY(t){return this.rotateOnAxis(Go,t)}rotateZ(t){return this.rotateOnAxis(Bo,t)}translateOnAxis(t,e){return Uo.copy(t).applyQuaternion(this.quaternion),this.position.add(Uo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fo,t)}translateY(t){return this.translateOnAxis(Go,t)}translateZ(t){return this.translateOnAxis(Bo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Wn.copy(t):Wn.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Tn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Tn,Wn,this.up):ii.lookAt(Wn,Tn,this.up),this.quaternion.setFromRotationMatrix(ii),n&&(ii.extractRotation(n.matrixWorld),$i.setFromRotationMatrix(ii),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ih)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tn,t,th),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tn,eh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const a=e[i];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let a=0,r=n.length;a<r;a++){const o=n[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];a(t.shapes,f)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(t.materials,this.material[c]));n.material=o}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];n.animations.push(a(t.animations,c))}}if(e){const o=r(t.geometries),c=r(t.materials),l=r(t.textures),u=r(t.images),f=r(t.shapes),p=r(t.skeletons),m=r(t.animations),T=r(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),T.length>0&&(i.nodes=T)}return i.object=n,i;function r(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}be.DEFAULT_UP=new Q(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const We=new Q,ni=new Q,Ys=new Q,si=new Q,Ki=new Q,ji=new Q,ko=new Q,Xs=new Q,$s=new Q,Ks=new Q;let Yn=!1;class Xe{constructor(t=new Q,e=new Q,i=new Q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),We.subVectors(t,e),n.cross(We);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,e,i,n,a){We.subVectors(n,e),ni.subVectors(i,e),Ys.subVectors(t,e);const r=We.dot(We),o=We.dot(ni),c=We.dot(Ys),l=ni.dot(ni),u=ni.dot(Ys),f=r*l-o*o;if(f===0)return a.set(0,0,0),null;const p=1/f,m=(l*c-o*u)*p,T=(r*u-o*c)*p;return a.set(1-m-T,T,m)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getUV(t,e,i,n,a,r,o,c){return Yn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yn=!0),this.getInterpolation(t,e,i,n,a,r,o,c)}static getInterpolation(t,e,i,n,a,r,o,c){return this.getBarycoord(t,e,i,n,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,si.x),c.addScaledVector(r,si.y),c.addScaledVector(o,si.z),c)}static isFrontFacing(t,e,i,n){return We.subVectors(i,e),ni.subVectors(t,e),We.cross(ni).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),We.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,a){return Yn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yn=!0),Xe.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}getInterpolation(t,e,i,n,a){return Xe.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,a=this.c;let r,o;Ki.subVectors(n,i),ji.subVectors(a,i),Xs.subVectors(t,i);const c=Ki.dot(Xs),l=ji.dot(Xs);if(c<=0&&l<=0)return e.copy(i);$s.subVectors(t,n);const u=Ki.dot($s),f=ji.dot($s);if(u>=0&&f<=u)return e.copy(n);const p=c*f-u*l;if(p<=0&&c>=0&&u<=0)return r=c/(c-u),e.copy(i).addScaledVector(Ki,r);Ks.subVectors(t,a);const m=Ki.dot(Ks),T=ji.dot(Ks);if(T>=0&&m<=T)return e.copy(a);const _=m*l-c*T;if(_<=0&&l>=0&&T<=0)return o=l/(l-T),e.copy(i).addScaledVector(ji,o);const h=u*T-m*f;if(h<=0&&f-u>=0&&m-T>=0)return ko.subVectors(a,n),o=(f-u)/(f-u+(m-T)),e.copy(n).addScaledVector(ko,o);const d=1/(h+_+p);return r=_*d,o=p*d,e.copy(i).addScaledVector(Ki,r).addScaledVector(ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const jr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Xn={h:0,s:0,l:0};function js(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=te.workingColorSpace){if(t=Hc(t,1),e=we(e,0,1),i=we(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,r=2*i-a;this.r=js(r,a,t+1/3),this.g=js(r,a,t),this.b=js(r,a,t-1/3)}return te.toWorkingColorSpace(this,n),this}setStyle(t,e=Te){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=n[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){const i=jr[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cn(t.r),this.g=cn(t.g),this.b=cn(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return te.fromWorkingColorSpace(Se.copy(this),t),Math.round(we(Se.r*255,0,255))*65536+Math.round(we(Se.g*255,0,255))*256+Math.round(we(Se.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Se.copy(this),e);const i=Se.r,n=Se.g,a=Se.b,r=Math.max(i,n,a),o=Math.min(i,n,a);let c,l;const u=(o+r)/2;if(o===r)c=0,l=0;else{const f=r-o;switch(l=u<=.5?f/(r+o):f/(2-r-o),r){case i:c=(n-a)/f+(n<a?6:0);break;case n:c=(a-i)/f+2;break;case a:c=(i-n)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=Te){te.fromWorkingColorSpace(Se.copy(this),t);const e=Se.r,i=Se.g,n=Se.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Xn);const i=Ns(fi.h,Xn.h,e),n=Ns(fi.s,Xn.s,e),a=Ns(fi.l,Xn.l,e);return this.setHSL(i,n,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*n,this.g=a[1]*e+a[4]*i+a[7]*n,this.b=a[2]*e+a[5]*i+a[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new Jt;Jt.NAMES=jr;let sh=0;class On extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=In(),this.name="",this.type="Material",this.blending=ln,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=fa,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ln&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ua&&(i.blendSrc=this.blendSrc),this.blendDst!==fa&&(i.blendDst=this.blendDst),this.blendEquation!==Ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Po&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(e){const a=n(t.textures),r=n(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class gs extends On{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new Q,$n=new kt;class Ze{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Co,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)$n.fromBufferAttribute(this,e),$n.applyMatrix3(t),this.setXY(e,$n.x,$n.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Re(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),n=Re(n,this.array),a=Re(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Co&&(t.usage=this.usage),t}}class qr extends Ze{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Zr extends Ze{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ae extends Ze{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ah=0;const Fe=new fe,qs=new be,qi=new Q,Ne=new Dn,En=new Dn,ve=new Q;class Je extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yr(t)?Zr:qr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new qt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,i){return Fe.makeTranslation(t,e,i),this.applyMatrix4(Fe),this}scale(t,e,i){return Fe.makeScale(t,e,i),this.applyMatrix4(Fe),this}lookAt(t){return qs.lookAt(t),qs.updateMatrix(),this.applyMatrix4(qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const a=e[i];Ne.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Q,1/0);return}if(t){const i=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];En.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Ne.min,En.min),Ne.expandByPoint(ve),ve.addVectors(Ne.max,En.max),Ne.expandByPoint(ve)):(Ne.expandByPoint(En.min),Ne.expandByPoint(En.max))}Ne.getCenter(i);let n=0;for(let a=0,r=t.count;a<r;a++)ve.fromBufferAttribute(t,a),n=Math.max(n,i.distanceToSquared(ve));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)ve.fromBufferAttribute(o,l),c&&(qi.fromBufferAttribute(t,l),ve.add(qi)),n=Math.max(n,i.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,a=e.normal.array,r=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let A=0;A<o;A++)l[A]=new Q,u[A]=new Q;const f=new Q,p=new Q,m=new Q,T=new kt,_=new kt,h=new kt,d=new Q,y=new Q;function g(A,G,k){f.fromArray(n,A*3),p.fromArray(n,G*3),m.fromArray(n,k*3),T.fromArray(r,A*2),_.fromArray(r,G*2),h.fromArray(r,k*2),p.sub(f),m.sub(f),_.sub(T),h.sub(T);const q=1/(_.x*h.y-h.x*_.y);isFinite(q)&&(d.copy(p).multiplyScalar(h.y).addScaledVector(m,-_.y).multiplyScalar(q),y.copy(m).multiplyScalar(_.x).addScaledVector(p,-h.x).multiplyScalar(q),l[A].add(d),l[G].add(d),l[k].add(d),u[A].add(y),u[G].add(y),u[k].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let A=0,G=v.length;A<G;++A){const k=v[A],q=k.start,w=k.count;for(let O=q,B=q+w;O<B;O+=3)g(i[O+0],i[O+1],i[O+2])}const E=new Q,b=new Q,S=new Q,z=new Q;function M(A){S.fromArray(a,A*3),z.copy(S);const G=l[A];E.copy(G),E.sub(S.multiplyScalar(S.dot(G))).normalize(),b.crossVectors(z,G);const q=b.dot(u[A])<0?-1:1;c[A*4]=E.x,c[A*4+1]=E.y,c[A*4+2]=E.z,c[A*4+3]=q}for(let A=0,G=v.length;A<G;++A){const k=v[A],q=k.start,w=k.count;for(let O=q,B=q+w;O<B;O+=3)M(i[O+0]),M(i[O+1]),M(i[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const n=new Q,a=new Q,r=new Q,o=new Q,c=new Q,l=new Q,u=new Q,f=new Q;if(t)for(let p=0,m=t.count;p<m;p+=3){const T=t.getX(p+0),_=t.getX(p+1),h=t.getX(p+2);n.fromBufferAttribute(e,T),a.fromBufferAttribute(e,_),r.fromBufferAttribute(e,h),u.subVectors(r,a),f.subVectors(n,a),u.cross(f),o.fromBufferAttribute(i,T),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,h),o.add(u),c.add(u),l.add(u),i.setXYZ(T,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(h,l.x,l.y,l.z)}else for(let p=0,m=e.count;p<m;p+=3)n.fromBufferAttribute(e,p+0),a.fromBufferAttribute(e,p+1),r.fromBufferAttribute(e,p+2),u.subVectors(r,a),f.subVectors(n,a),u.cross(f),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,f=o.normalized,p=new l.constructor(c.length*u);let m=0,T=0;for(let _=0,h=c.length;_<h;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*u;for(let d=0;d<u;d++)p[T++]=l[m++]}return new Ze(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,i=this.index.array,n=this.attributes;for(const o in n){const c=n[o],l=t(c,i);e.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let u=0,f=l.length;u<f;u++){const p=l[u],m=t(p,i);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const n={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,p=l.length;f<p;f++){const m=l[f];u.push(m.toJSON(t.data))}u.length>0&&(n[c]=u,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const l in n){const u=n[l];this.setAttribute(l,u.clone(e))}const a=t.morphAttributes;for(const l in a){const u=[],f=a[l];for(let p=0,m=f.length;p<m;p++)u.push(f[p].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,u=r.length;l<u;l++){const f=r[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ho=new fe,bi=new Ra,Kn=new wa,Vo=new Q,Zi=new Q,Ji=new Q,Qi=new Q,Zs=new Q,jn=new Q,qn=new kt,Zn=new kt,Jn=new kt,Wo=new Q,Yo=new Q,Xo=new Q,Qn=new Q,ts=new Q;class Qt extends be{constructor(t=new Je,e=new gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(a&&o){jn.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=o[c],f=a[c];u!==0&&(Zs.fromBufferAttribute(f,t),r?jn.addScaledVector(Zs,u):jn.addScaledVector(Zs.sub(e),u))}e.add(jn)}return e}raycast(t,e){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kn.copy(i.boundingSphere),Kn.applyMatrix4(a),bi.copy(t.ray).recast(t.near),!(Kn.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Kn,Vo)===null||bi.origin.distanceToSquared(Vo)>(t.far-t.near)**2))&&(Ho.copy(a).invert(),bi.copy(t.ray).applyMatrix4(Ho),!(i.boundingBox!==null&&bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,i){let n;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,p=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(r))for(let T=0,_=p.length;T<_;T++){const h=p[T],d=r[h.materialIndex],y=Math.max(h.start,m.start),g=Math.min(o.count,Math.min(h.start+h.count,m.start+m.count));for(let v=y,E=g;v<E;v+=3){const b=o.getX(v),S=o.getX(v+1),z=o.getX(v+2);n=es(this,d,t,i,l,u,f,b,S,z),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=h.materialIndex,e.push(n))}}else{const T=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let h=T,d=_;h<d;h+=3){const y=o.getX(h),g=o.getX(h+1),v=o.getX(h+2);n=es(this,r,t,i,l,u,f,y,g,v),n&&(n.faceIndex=Math.floor(h/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(r))for(let T=0,_=p.length;T<_;T++){const h=p[T],d=r[h.materialIndex],y=Math.max(h.start,m.start),g=Math.min(c.count,Math.min(h.start+h.count,m.start+m.count));for(let v=y,E=g;v<E;v+=3){const b=v,S=v+1,z=v+2;n=es(this,d,t,i,l,u,f,b,S,z),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=h.materialIndex,e.push(n))}}else{const T=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let h=T,d=_;h<d;h+=3){const y=h,g=h+1,v=h+2;n=es(this,r,t,i,l,u,f,y,g,v),n&&(n.faceIndex=Math.floor(h/3),e.push(n))}}}}function oh(s,t,e,i,n,a,r,o){let c;if(t.side===Ie?c=i.intersectTriangle(r,a,n,!0,o):c=i.intersectTriangle(n,a,r,t.side===Ti,o),c===null)return null;ts.copy(o),ts.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ts);return l<e.near||l>e.far?null:{distance:l,point:ts.clone(),object:s}}function es(s,t,e,i,n,a,r,o,c,l){s.getVertexPosition(o,Zi),s.getVertexPosition(c,Ji),s.getVertexPosition(l,Qi);const u=oh(s,t,e,i,Zi,Ji,Qi,Qn);if(u){n&&(qn.fromBufferAttribute(n,o),Zn.fromBufferAttribute(n,c),Jn.fromBufferAttribute(n,l),u.uv=Xe.getInterpolation(Qn,Zi,Ji,Qi,qn,Zn,Jn,new kt)),a&&(qn.fromBufferAttribute(a,o),Zn.fromBufferAttribute(a,c),Jn.fromBufferAttribute(a,l),u.uv1=Xe.getInterpolation(Qn,Zi,Ji,Qi,qn,Zn,Jn,new kt),u.uv2=u.uv1),r&&(Wo.fromBufferAttribute(r,o),Yo.fromBufferAttribute(r,c),Xo.fromBufferAttribute(r,l),u.normal=Xe.getInterpolation(Qn,Zi,Ji,Qi,Wo,Yo,Xo,new Q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new Q,materialIndex:0};Xe.getNormal(Zi,Ji,Qi,f.normal),u.face=f}return u}class xe extends Je{constructor(t=1,e=1,i=1,n=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:a,depthSegments:r};const o=this;n=Math.floor(n),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],u=[],f=[];let p=0,m=0;T("z","y","x",-1,-1,i,e,t,r,a,0),T("z","y","x",1,-1,i,e,-t,r,a,1),T("x","z","y",1,1,t,i,e,n,r,2),T("x","z","y",1,-1,t,i,-e,n,r,3),T("x","y","z",1,-1,t,e,i,n,a,4),T("x","y","z",-1,-1,t,e,-i,n,a,5),this.setIndex(c),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(f,2));function T(_,h,d,y,g,v,E,b,S,z,M){const A=v/S,G=E/z,k=v/2,q=E/2,w=b/2,O=S+1,B=z+1;let X=0,Y=0;const Z=new Q;for(let V=0;V<B;V++){const K=V*G-q;for(let J=0;J<O;J++){const F=J*A-k;Z[_]=F*y,Z[h]=K*g,Z[d]=w,l.push(Z.x,Z.y,Z.z),Z[_]=0,Z[h]=0,Z[d]=b>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(J/S),f.push(1-V/z),X+=1}}for(let V=0;V<z;V++)for(let K=0;K<S;K++){const J=p+K+O*V,F=p+K+O*(V+1),tt=p+(K+1)+O*(V+1),nt=p+(K+1)+O*V;c.push(J,F,nt),c.push(F,tt,nt),Y+=6}o.addGroup(m,Y,M),m+=Y,p+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fn(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Pe(s){const t={};for(let e=0;e<s.length;e++){const i=fn(s[e]);for(const n in i)t[n]=i[n]}return t}function rh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Jr(s){return s.getRenderTarget()===null?s.outputColorSpace:te.workingColorSpace}const lh={clone:fn,merge:Pe};var ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends On{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ch,this.fragmentShader=hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fn(t.uniforms),this.uniformsGroups=rh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?e.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[n]={type:"m4",value:r.toArray()}:e.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Qr extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Be extends Qr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _a*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ls*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,a=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*n/c,e-=r.offsetY*i/l,n*=r.width/c,i*=r.height/l}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const tn=-90,en=1;class dh extends be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Be(tn,en,t,e);n.layers=this.layers,this.add(n);const a=new Be(tn,en,t,e);a.layers=this.layers,this.add(a);const r=new Be(tn,en,t,e);r.layers=this.layers,this.add(r);const o=new Be(tn,en,t,e);o.layers=this.layers,this.add(o);const c=new Be(tn,en,t,e);c.layers=this.layers,this.add(c);const l=new Be(tn,en,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,a,r,o,c]=e;for(const l of e)this.remove(l);if(t===ri)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,u]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,a),t.setRenderTarget(i,1,n),t.render(e,r),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,c),t.setRenderTarget(i,4,n),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,u),t.setRenderTarget(f,p,m),t.xr.enabled=T,i.texture.needsPMREMUpdate=!0}}class tl extends ze{constructor(t,e,i,n,a,r,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:hn,super(t,e,i,n,a,r,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uh extends Oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(bn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ii?Te:ke),this.texture=new tl(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new xe(5,5,5),a=new zi({name:"CubemapFromEquirect",uniforms:fn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ie,blending:vi});a.uniforms.tEquirect.value=e;const r=new Qt(n,a),o=e.minFilter;return e.minFilter===Rn&&(e.minFilter=Ge),new dh(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,n){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,n);t.setRenderTarget(a)}}const Js=new Q,fh=new Q,ph=new qt;class pi{constructor(t=new Q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Js.subVectors(i,e).cross(fh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Js),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ph.getNormalMatrix(t),n=this.coplanarPoint(Js).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new wa,is=new Q;class Ia{constructor(t=new pi,e=new pi,i=new pi,n=new pi,a=new pi,r=new pi){this.planes=[t,e,i,n,a,r]}set(t,e,i,n,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ri){const i=this.planes,n=t.elements,a=n[0],r=n[1],o=n[2],c=n[3],l=n[4],u=n[5],f=n[6],p=n[7],m=n[8],T=n[9],_=n[10],h=n[11],d=n[12],y=n[13],g=n[14],v=n[15];if(i[0].setComponents(c-a,p-l,h-m,v-d).normalize(),i[1].setComponents(c+a,p+l,h+m,v+d).normalize(),i[2].setComponents(c+r,p+u,h+T,v+y).normalize(),i[3].setComponents(c-r,p-u,h-T,v-y).normalize(),i[4].setComponents(c-o,p-f,h-_,v-g).normalize(),e===ri)i[5].setComponents(c+o,p+f,h+_,v+g).normalize();else if(e===ps)i[5].setComponents(o,f,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(is.x=n.normal.x>0?t.max.x:t.min.x,is.y=n.normal.y>0?t.max.y:t.min.y,is.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(is)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function el(){let s=null,t=!1,e=null,i=null;function n(a,r){e(a,r),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function mh(s,t){const e=t.isWebGL2,i=new WeakMap;function n(l,u){const f=l.array,p=l.usage,m=f.byteLength,T=s.createBuffer();s.bindBuffer(u,T),s.bufferData(u,f,p),l.onUploadCallback();let _;if(f instanceof Float32Array)_=s.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=s.SHORT;else if(f instanceof Uint32Array)_=s.UNSIGNED_INT;else if(f instanceof Int32Array)_=s.INT;else if(f instanceof Int8Array)_=s.BYTE;else if(f instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:T,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:m}}function a(l,u,f){const p=u.array,m=u._updateRange,T=u.updateRanges;if(s.bindBuffer(f,l),m.count===-1&&T.length===0&&s.bufferSubData(f,0,p),T.length!==0){for(let _=0,h=T.length;_<h;_++){const d=T[_];e?s.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):s.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):s.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(s.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const p=i.get(l);(!p||p.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);if(f===void 0)i.set(l,n(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(f.buffer,l,u),f.version=l.version}}return{get:r,remove:o,update:c}}class Da extends Je{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const a=t/2,r=e/2,o=Math.floor(i),c=Math.floor(n),l=o+1,u=c+1,f=t/o,p=e/c,m=[],T=[],_=[],h=[];for(let d=0;d<u;d++){const y=d*p-r;for(let g=0;g<l;g++){const v=g*f-a;T.push(v,-y,0),_.push(0,0,1),h.push(g/o),h.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<o;y++){const g=y+l*d,v=y+l*(d+1),E=y+1+l*(d+1),b=y+1+l*d;m.push(g,v,b),m.push(v,E,b)}this.setIndex(m),this.setAttribute("position",new Ae(T,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Da(t.width,t.height,t.widthSegments,t.heightSegments)}}var gh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vh=`#ifdef USE_ALPHAHASH
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
#endif`,yh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Th=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Eh=`#ifdef USE_ALPHATEST
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
#endif`,Sh=`#ifdef USE_AOMAP
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
#endif`,bh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ah=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ph=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ch=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wh=`#ifdef USE_IRIDESCENCE
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
#endif`,Rh=`#ifdef USE_BUMPMAP
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
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gh=`#define PI 3.141592653589793
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
} // validated`,Bh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kh=`vec3 transformedNormal = objectNormal;
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
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xh="gl_FragColor = linearToOutputTexel( gl_FragColor );",$h=`
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
}`,Kh=`#ifdef USE_ENVMAP
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
#endif`,jh=`#ifdef USE_ENVMAP
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
#endif`,Zh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jh=`#ifdef USE_ENVMAP
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
#endif`,Qh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nd=`#ifdef USE_GRADIENTMAP
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
}`,sd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ld=`uniform bool receiveShadow;
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
#endif`,cd=`#ifdef USE_ENVMAP
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
#endif`,hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pd=`PhysicalMaterial material;
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
#endif`,md=`struct PhysicalMaterial {
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
}`,gd=`
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
#endif`,vd=`#if defined( RE_IndirectDiffuse )
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
#endif`,yd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_d=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Td=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ed=`#ifdef USE_LOGDEPTHBUF
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
#endif`,Sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ad=`#if defined( USE_POINTS_UV )
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
#endif`,Pd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rd=`#ifdef USE_MORPHNORMALS
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
#endif`,Ld=`#ifdef USE_MORPHTARGETS
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
#endif`,Id=`#ifdef USE_MORPHTARGETS
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
#endif`,Dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Od=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fd=`#ifdef USE_NORMALMAP
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
#endif`,Gd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tu=`float getShadowMask() {
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
}`,eu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iu=`#ifdef USE_SKINNING
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
#endif`,nu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,su=`#ifdef USE_SKINNING
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
#endif`,au=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ou=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ru=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cu=`#ifdef USE_TRANSMISSION
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
#endif`,hu=`#ifdef USE_TRANSMISSION
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
#endif`,du=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gu=`uniform sampler2D t2D;
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
}`,vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eu=`#include <common>
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
}`,Su=`#define DISTANCE
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
}`,bu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Au=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pu=`uniform float scale;
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
}`,Cu=`uniform vec3 diffuse;
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
}`,wu=`#include <common>
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
}`,Ru=`uniform vec3 diffuse;
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
}`,Lu=`#define LAMBERT
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
}`,Iu=`#define LAMBERT
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
}`,Du=`#define MATCAP
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
}`,Ou=`#define MATCAP
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
}`,Nu=`#define NORMAL
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
}`,zu=`#define NORMAL
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
}`,Uu=`#define PHONG
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
}`,Fu=`#define PHONG
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
}`,Gu=`#define STANDARD
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
}`,Bu=`#define STANDARD
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
}`,ku=`#define TOON
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
}`,Hu=`#define TOON
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
}`,Vu=`uniform float size;
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
}`,Wu=`uniform vec3 diffuse;
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
}`,Yu=`#include <common>
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
}`,Xu=`uniform vec3 color;
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
}`,$u=`uniform float rotation;
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
}`,Ku=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:gh,alphahash_pars_fragment:vh,alphamap_fragment:yh,alphamap_pars_fragment:_h,alphatest_fragment:Th,alphatest_pars_fragment:Eh,aomap_fragment:Mh,aomap_pars_fragment:Sh,batching_pars_vertex:xh,batching_vertex:bh,begin_vertex:Ah,beginnormal_vertex:Ph,bsdfs:Ch,iridescence_fragment:wh,bumpmap_pars_fragment:Rh,clipping_planes_fragment:Lh,clipping_planes_pars_fragment:Ih,clipping_planes_pars_vertex:Dh,clipping_planes_vertex:Oh,color_fragment:Nh,color_pars_fragment:zh,color_pars_vertex:Uh,color_vertex:Fh,common:Gh,cube_uv_reflection_fragment:Bh,defaultnormal_vertex:kh,displacementmap_pars_vertex:Hh,displacementmap_vertex:Vh,emissivemap_fragment:Wh,emissivemap_pars_fragment:Yh,colorspace_fragment:Xh,colorspace_pars_fragment:$h,envmap_fragment:Kh,envmap_common_pars_fragment:jh,envmap_pars_fragment:qh,envmap_pars_vertex:Zh,envmap_physical_pars_fragment:cd,envmap_vertex:Jh,fog_vertex:Qh,fog_pars_vertex:td,fog_fragment:ed,fog_pars_fragment:id,gradientmap_pars_fragment:nd,lightmap_fragment:sd,lightmap_pars_fragment:ad,lights_lambert_fragment:od,lights_lambert_pars_fragment:rd,lights_pars_begin:ld,lights_toon_fragment:hd,lights_toon_pars_fragment:dd,lights_phong_fragment:ud,lights_phong_pars_fragment:fd,lights_physical_fragment:pd,lights_physical_pars_fragment:md,lights_fragment_begin:gd,lights_fragment_maps:vd,lights_fragment_end:yd,logdepthbuf_fragment:_d,logdepthbuf_pars_fragment:Td,logdepthbuf_pars_vertex:Ed,logdepthbuf_vertex:Md,map_fragment:Sd,map_pars_fragment:xd,map_particle_fragment:bd,map_particle_pars_fragment:Ad,metalnessmap_fragment:Pd,metalnessmap_pars_fragment:Cd,morphcolor_vertex:wd,morphnormal_vertex:Rd,morphtarget_pars_vertex:Ld,morphtarget_vertex:Id,normal_fragment_begin:Dd,normal_fragment_maps:Od,normal_pars_fragment:Nd,normal_pars_vertex:zd,normal_vertex:Ud,normalmap_pars_fragment:Fd,clearcoat_normal_fragment_begin:Gd,clearcoat_normal_fragment_maps:Bd,clearcoat_pars_fragment:kd,iridescence_pars_fragment:Hd,opaque_fragment:Vd,packing:Wd,premultiplied_alpha_fragment:Yd,project_vertex:Xd,dithering_fragment:$d,dithering_pars_fragment:Kd,roughnessmap_fragment:jd,roughnessmap_pars_fragment:qd,shadowmap_pars_fragment:Zd,shadowmap_pars_vertex:Jd,shadowmap_vertex:Qd,shadowmask_pars_fragment:tu,skinbase_vertex:eu,skinning_pars_vertex:iu,skinning_vertex:nu,skinnormal_vertex:su,specularmap_fragment:au,specularmap_pars_fragment:ou,tonemapping_fragment:ru,tonemapping_pars_fragment:lu,transmission_fragment:cu,transmission_pars_fragment:hu,uv_pars_fragment:du,uv_pars_vertex:uu,uv_vertex:fu,worldpos_vertex:pu,background_vert:mu,background_frag:gu,backgroundCube_vert:vu,backgroundCube_frag:yu,cube_vert:_u,cube_frag:Tu,depth_vert:Eu,depth_frag:Mu,distanceRGBA_vert:Su,distanceRGBA_frag:xu,equirect_vert:bu,equirect_frag:Au,linedashed_vert:Pu,linedashed_frag:Cu,meshbasic_vert:wu,meshbasic_frag:Ru,meshlambert_vert:Lu,meshlambert_frag:Iu,meshmatcap_vert:Du,meshmatcap_frag:Ou,meshnormal_vert:Nu,meshnormal_frag:zu,meshphong_vert:Uu,meshphong_frag:Fu,meshphysical_vert:Gu,meshphysical_frag:Bu,meshtoon_vert:ku,meshtoon_frag:Hu,points_vert:Vu,points_frag:Wu,shadow_vert:Yu,shadow_frag:Xu,sprite_vert:$u,sprite_frag:Ku},Lt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},qe={basic:{uniforms:Pe([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Pe([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Pe([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Pe([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Pe([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Pe([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Pe([Lt.points,Lt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Pe([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Pe([Lt.common,Lt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Pe([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Pe([Lt.sprite,Lt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Pe([Lt.common,Lt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Pe([Lt.lights,Lt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};qe.physical={uniforms:Pe([qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const ns={r:0,b:0,g:0};function ju(s,t,e,i,n,a,r){const o=new Jt(0);let c=a===!0?0:1,l,u,f=null,p=0,m=null;function T(h,d){let y=!1,g=d.isScene===!0?d.background:null;g&&g.isTexture&&(g=(d.backgroundBlurriness>0?e:t).get(g)),g===null?_(o,c):g&&g.isColor&&(_(g,1),y=!0);const v=s.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),g&&(g.isCubeTexture||g.mapping===_s)?(u===void 0&&(u=new Qt(new xe(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:fn(qe.backgroundCube.uniforms),vertexShader:qe.backgroundCube.vertexShader,fragmentShader:qe.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,b,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=te.getTransfer(g.colorSpace)!==ne,(f!==g||p!==g.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,f=g,p=g.version,m=s.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new Qt(new Da(2,2),new zi({name:"BackgroundMaterial",uniforms:fn(qe.background.uniforms),vertexShader:qe.background.vertexShader,fragmentShader:qe.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=te.getTransfer(g.colorSpace)!==ne,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||p!==g.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,f=g,p=g.version,m=s.toneMapping),l.layers.enableAll(),h.unshift(l,l.geometry,l.material,0,0,null))}function _(h,d){h.getRGB(ns,Jr(s)),i.buffers.color.setClear(ns.r,ns.g,ns.b,d,r)}return{getClearColor:function(){return o},setClearColor:function(h,d=1){o.set(h),c=d,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(h){c=h,_(o,c)},render:T}}function qu(s,t,e,i){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),r=i.isWebGL2||a!==null,o={},c=h(null);let l=c,u=!1;function f(w,O,B,X,Y){let Z=!1;if(r){const V=_(X,B,O);l!==V&&(l=V,m(l.object)),Z=d(w,X,B,Y),Z&&y(w,X,B,Y)}else{const V=O.wireframe===!0;(l.geometry!==X.id||l.program!==B.id||l.wireframe!==V)&&(l.geometry=X.id,l.program=B.id,l.wireframe=V,Z=!0)}Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(Z||u)&&(u=!1,z(w,O,B,X),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function p(){return i.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function m(w){return i.isWebGL2?s.bindVertexArray(w):a.bindVertexArrayOES(w)}function T(w){return i.isWebGL2?s.deleteVertexArray(w):a.deleteVertexArrayOES(w)}function _(w,O,B){const X=B.wireframe===!0;let Y=o[w.id];Y===void 0&&(Y={},o[w.id]=Y);let Z=Y[O.id];Z===void 0&&(Z={},Y[O.id]=Z);let V=Z[X];return V===void 0&&(V=h(p()),Z[X]=V),V}function h(w){const O=[],B=[],X=[];for(let Y=0;Y<n;Y++)O[Y]=0,B[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:X,object:w,attributes:{},index:null}}function d(w,O,B,X){const Y=l.attributes,Z=O.attributes;let V=0;const K=B.getAttributes();for(const J in K)if(K[J].location>=0){const tt=Y[J];let nt=Z[J];if(nt===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(nt=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(nt=w.instanceColor)),tt===void 0||tt.attribute!==nt||nt&&tt.data!==nt.data)return!0;V++}return l.attributesNum!==V||l.index!==X}function y(w,O,B,X){const Y={},Z=O.attributes;let V=0;const K=B.getAttributes();for(const J in K)if(K[J].location>=0){let tt=Z[J];tt===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(tt=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(tt=w.instanceColor));const nt={};nt.attribute=tt,tt&&tt.data&&(nt.data=tt.data),Y[J]=nt,V++}l.attributes=Y,l.attributesNum=V,l.index=X}function g(){const w=l.newAttributes;for(let O=0,B=w.length;O<B;O++)w[O]=0}function v(w){E(w,0)}function E(w,O){const B=l.newAttributes,X=l.enabledAttributes,Y=l.attributeDivisors;B[w]=1,X[w]===0&&(s.enableVertexAttribArray(w),X[w]=1),Y[w]!==O&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](w,O),Y[w]=O)}function b(){const w=l.newAttributes,O=l.enabledAttributes;for(let B=0,X=O.length;B<X;B++)O[B]!==w[B]&&(s.disableVertexAttribArray(B),O[B]=0)}function S(w,O,B,X,Y,Z,V){V===!0?s.vertexAttribIPointer(w,O,B,Y,Z):s.vertexAttribPointer(w,O,B,X,Y,Z)}function z(w,O,B,X){if(i.isWebGL2===!1&&(w.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();const Y=X.attributes,Z=B.getAttributes(),V=O.defaultAttributeValues;for(const K in Z){const J=Z[K];if(J.location>=0){let F=Y[K];if(F===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(F=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(F=w.instanceColor)),F!==void 0){const tt=F.normalized,nt=F.itemSize,vt=e.get(F);if(vt===void 0)continue;const wt=vt.buffer,L=vt.type,D=vt.bytesPerElement,H=i.isWebGL2===!0&&(L===s.INT||L===s.UNSIGNED_INT||F.gpuType===Nr);if(F.isInterleavedBufferAttribute){const W=F.data,C=W.stride,ut=F.offset;if(W.isInstancedInterleavedBuffer){for(let it=0;it<J.locationSize;it++)E(J.location+it,W.meshPerAttribute);w.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let it=0;it<J.locationSize;it++)v(J.location+it);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let it=0;it<J.locationSize;it++)S(J.location+it,nt/J.locationSize,L,tt,C*D,(ut+nt/J.locationSize*it)*D,H)}else{if(F.isInstancedBufferAttribute){for(let W=0;W<J.locationSize;W++)E(J.location+W,F.meshPerAttribute);w.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let W=0;W<J.locationSize;W++)v(J.location+W);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let W=0;W<J.locationSize;W++)S(J.location+W,nt/J.locationSize,L,tt,nt*D,nt/J.locationSize*W*D,H)}}else if(V!==void 0){const tt=V[K];if(tt!==void 0)switch(tt.length){case 2:s.vertexAttrib2fv(J.location,tt);break;case 3:s.vertexAttrib3fv(J.location,tt);break;case 4:s.vertexAttrib4fv(J.location,tt);break;default:s.vertexAttrib1fv(J.location,tt)}}}}b()}function M(){k();for(const w in o){const O=o[w];for(const B in O){const X=O[B];for(const Y in X)T(X[Y].object),delete X[Y];delete O[B]}delete o[w]}}function A(w){if(o[w.id]===void 0)return;const O=o[w.id];for(const B in O){const X=O[B];for(const Y in X)T(X[Y].object),delete X[Y];delete O[B]}delete o[w.id]}function G(w){for(const O in o){const B=o[O];if(B[w.id]===void 0)continue;const X=B[w.id];for(const Y in X)T(X[Y].object),delete X[Y];delete B[w.id]}}function k(){q(),u=!0,l!==c&&(l=c,m(l.object))}function q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:k,resetDefaultState:q,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:G,initAttributes:g,enableAttribute:v,disableUnusedAttributes:b}}function Zu(s,t,e,i){const n=i.isWebGL2;let a;function r(u){a=u}function o(u,f){s.drawArrays(a,u,f),e.update(f,a,1)}function c(u,f,p){if(p===0)return;let m,T;if(n)m=s,T="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),T="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[T](a,u,f,p),e.update(f,a,p)}function l(u,f,p){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let T=0;T<p;T++)this.render(u[T],f[T]);else{m.multiDrawArraysWEBGL(a,u,0,f,0,p);let T=0;for(let _=0;_<p;_++)T+=f[_];e.update(T,a,1)}}this.setMode=r,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Ju(s,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=a(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=r||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),T=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),h=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),g=p>0,v=r||t.has("OES_texture_float"),E=g&&v,b=r?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:n,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:T,maxAttributes:_,maxVertexUniforms:h,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:g,floatFragmentTextures:v,floatVertexTextures:E,maxSamples:b}}function Qu(s){const t=this;let e=null,i=0,n=!1,a=!1;const r=new pi,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||i!==0||n;return n=p,i=f.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){e=u(f,p,0)},this.setState=function(f,p,m){const T=f.clippingPlanes,_=f.clipIntersection,h=f.clipShadows,d=s.get(f);if(!n||T===null||T.length===0||a&&!h)a?u(null):l();else{const y=a?0:i,g=y*4;let v=d.clippingState||null;c.value=v,v=u(T,p,g,m);for(let E=0;E!==g;++E)v[E]=e[E];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,p,m,T){const _=f!==null?f.length:0;let h=null;if(_!==0){if(h=c.value,T!==!0||h===null){const d=m+_*4,y=p.matrixWorldInverse;o.getNormalMatrix(y),(h===null||h.length<d)&&(h=new Float32Array(d));for(let g=0,v=m;g!==_;++g,v+=4)r.copy(f[g]).applyMatrix4(y,o),r.normal.toArray(h,v),h[v+3]=r.constant}c.value=h,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,h}}function tf(s){let t=new WeakMap;function e(r,o){return o===pa?r.mapping=hn:o===ma&&(r.mapping=dn),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===pa||o===ma)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new uh(c.height/2);return l.fromEquirectangularTexture(s,r),t.set(r,l),r.addEventListener("dispose",n),e(l.texture,r.mapping)}else return null}}return r}function n(r){const o=r.target;o.removeEventListener("dispose",n);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class il extends Qr{constructor(t=-1,e=1,i=1,n=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-t,r=i+t,o=n+e,c=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const an=4,$o=[.125,.215,.35,.446,.526,.582],wi=20,Qs=new il,Ko=new Jt;let ta=null,ea=0,ia=0;const Pi=(1+Math.sqrt(5))/2,nn=1/Pi,jo=[new Q(1,1,1),new Q(-1,1,1),new Q(1,1,-1),new Q(-1,1,-1),new Q(0,Pi,nn),new Q(0,Pi,-nn),new Q(nn,0,Pi),new Q(-nn,0,Pi),new Q(Pi,nn,0),new Q(-Pi,nn,0)];class qo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,n,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ta,ea,ia),t.scissorTest=!1,ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hn||t.mapping===dn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Ln,format:Ke,colorSpace:li,depthBuffer:!1},n=Zo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zo(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ef(a)),this._blurMaterial=nf(a,t,e)}return n}_compileMaterial(t){const e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,Qs)}_sceneToCubeUV(t,e,i,n){const o=new Be(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Ko),u.toneMapping=yi,u.autoClear=!1;const m=new gs({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),T=new Qt(new xe,m);let _=!1;const h=t.background;h?h.isColor&&(m.color.copy(h),t.background=null,_=!0):(m.color.copy(Ko),_=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):y===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const g=this._cubeSize;ss(n,y*g,d>2?g:0,g,g),u.setRenderTarget(n),_&&u.render(T,o),u.render(t,o)}T.geometry.dispose(),T.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=h}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===hn||t.mapping===dn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jo());const a=n?this._cubemapMaterial:this._equirectMaterial,r=new Qt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const c=this._cubeSize;ss(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,Qs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),r=jo[(n-1)%jo.length];this._blur(t,n-1,n,a,r)}e.autoClear=i}_blur(t,e,i,n,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,n,"latitudinal",a),this._halfBlur(r,t,i,i,n,"longitudinal",a)}_halfBlur(t,e,i,n,a,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Qt(this._lodPlanes[n],l),p=l.uniforms,m=this._sizeLods[i]-1,T=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*wi-1),_=a/T,h=isFinite(a)?1+Math.floor(u*_):wi;h>wi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${wi}`);const d=[];let y=0;for(let S=0;S<wi;++S){const z=S/_,M=Math.exp(-z*z/2);d.push(M),S===0?y+=M:S<h&&(y+=2*M)}for(let S=0;S<d.length;S++)d[S]=d[S]/y;p.envMap.value=t.texture,p.samples.value=h,p.weights.value=d,p.latitudinal.value=r==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:g}=this;p.dTheta.value=T,p.mipInt.value=g-i;const v=this._sizeLods[n],E=3*v*(n>g-an?n-g+an:0),b=4*(this._cubeSize-v);ss(e,E,b,3*v,2*v),c.setRenderTarget(e),c.render(f,Qs)}}function ef(s){const t=[],e=[],i=[];let n=s;const a=s-an+1+$o.length;for(let r=0;r<a;r++){const o=Math.pow(2,n);e.push(o);let c=1/o;r>s-an?c=$o[r-s+an-1]:r===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,f=1+l,p=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,T=6,_=3,h=2,d=1,y=new Float32Array(_*T*m),g=new Float32Array(h*T*m),v=new Float32Array(d*T*m);for(let b=0;b<m;b++){const S=b%3*2/3-1,z=b>2?0:-1,M=[S,z,0,S+2/3,z,0,S+2/3,z+1,0,S,z,0,S+2/3,z+1,0,S,z+1,0];y.set(M,_*T*b),g.set(p,h*T*b);const A=[b,b,b,b,b,b];v.set(A,d*T*b)}const E=new Je;E.setAttribute("position",new Ze(y,_)),E.setAttribute("uv",new Ze(g,h)),E.setAttribute("faceIndex",new Ze(v,d)),t.push(E),n>an&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Zo(s,t,e){const i=new Oi(s,t,e);return i.texture.mapping=_s,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ss(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function nf(s,t,e){const i=new Float32Array(wi),n=new Q(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Oa(),fragmentShader:`

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
	`}function sf(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===pa||c===ma,u=c===hn||c===dn;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return e===null&&(e=new qo(s)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{const f=o.image;if(l&&f&&f.height>0||u&&f&&n(f)){e===null&&(e=new qo(s));const p=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,p),o.addEventListener("dispose",a),p.texture}else return null}}}return o}function n(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function af(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function of(s,t,e,i){const n={},a=new WeakMap;function r(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const T in p.attributes)t.remove(p.attributes[T]);for(const T in p.morphAttributes){const _=p.morphAttributes[T];for(let h=0,d=_.length;h<d;h++)t.remove(_[h])}p.removeEventListener("dispose",r),delete n[p.id];const m=a.get(p);m&&(t.remove(m),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(f,p){return n[p.id]===!0||(p.addEventListener("dispose",r),n[p.id]=!0,e.memory.geometries++),p}function c(f){const p=f.attributes;for(const T in p)t.update(p[T],s.ARRAY_BUFFER);const m=f.morphAttributes;for(const T in m){const _=m[T];for(let h=0,d=_.length;h<d;h++)t.update(_[h],s.ARRAY_BUFFER)}}function l(f){const p=[],m=f.index,T=f.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let g=0,v=y.length;g<v;g+=3){const E=y[g+0],b=y[g+1],S=y[g+2];p.push(E,b,b,S,S,E)}}else if(T!==void 0){const y=T.array;_=T.version;for(let g=0,v=y.length/3-1;g<v;g+=3){const E=g+0,b=g+1,S=g+2;p.push(E,b,b,S,S,E)}}else return;const h=new(Yr(p)?Zr:qr)(p,1);h.version=_;const d=a.get(f);d&&t.remove(d),a.set(f,h)}function u(f){const p=a.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&l(f)}else l(f);return a.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function rf(s,t,e,i){const n=i.isWebGL2;let a;function r(m){a=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function u(m,T){s.drawElements(a,T,o,m*c),e.update(T,a,1)}function f(m,T,_){if(_===0)return;let h,d;if(n)h=s,d="drawElementsInstanced";else if(h=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](a,T,o,m*c,_),e.update(T,a,_)}function p(m,T,_){if(_===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<_;d++)this.render(m[d]/c,T[d]);else{h.multiDrawElementsWEBGL(a,T,0,o,m,0,_);let d=0;for(let y=0;y<_;y++)d+=T[y];e.update(d,a,1)}}this.setMode=r,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=p}function lf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function cf(s,t){return s[0]-t[0]}function hf(s,t){return Math.abs(t[1])-Math.abs(s[1])}function df(s,t,e){const i={},n=new Float32Array(8),a=new WeakMap,r=new _e,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,f){const p=l.morphTargetInfluences;if(t.isWebGL2===!0){const T=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=T!==void 0?T.length:0;let h=a.get(u);if(h===void 0||h.count!==_){let O=function(){q.dispose(),a.delete(u),u.removeEventListener("dispose",O)};var m=O;h!==void 0&&h.texture.dispose();const g=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],z=u.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),E===!0&&(M=3);let A=u.attributes.position.count*M,G=1;A>t.maxTextureSize&&(G=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const k=new Float32Array(A*G*4*_),q=new Kr(k,A,G,_);q.type=gi,q.needsUpdate=!0;const w=M*4;for(let B=0;B<_;B++){const X=b[B],Y=S[B],Z=z[B],V=A*G*4*B;for(let K=0;K<X.count;K++){const J=K*w;g===!0&&(r.fromBufferAttribute(X,K),k[V+J+0]=r.x,k[V+J+1]=r.y,k[V+J+2]=r.z,k[V+J+3]=0),v===!0&&(r.fromBufferAttribute(Y,K),k[V+J+4]=r.x,k[V+J+5]=r.y,k[V+J+6]=r.z,k[V+J+7]=0),E===!0&&(r.fromBufferAttribute(Z,K),k[V+J+8]=r.x,k[V+J+9]=r.y,k[V+J+10]=r.z,k[V+J+11]=Z.itemSize===4?r.w:1)}}h={count:_,texture:q,size:new kt(A,G)},a.set(u,h),u.addEventListener("dispose",O)}let d=0;for(let g=0;g<p.length;g++)d+=p[g];const y=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(s,"morphTargetBaseInfluence",y),f.getUniforms().setValue(s,"morphTargetInfluences",p),f.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}else{const T=p===void 0?0:p.length;let _=i[u.id];if(_===void 0||_.length!==T){_=[];for(let v=0;v<T;v++)_[v]=[v,0];i[u.id]=_}for(let v=0;v<T;v++){const E=_[v];E[0]=v,E[1]=p[v]}_.sort(hf);for(let v=0;v<8;v++)v<T&&_[v][1]?(o[v][0]=_[v][0],o[v][1]=_[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(cf);const h=u.morphAttributes.position,d=u.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const E=o[v],b=E[0],S=E[1];b!==Number.MAX_SAFE_INTEGER&&S?(h&&u.getAttribute("morphTarget"+v)!==h[b]&&u.setAttribute("morphTarget"+v,h[b]),d&&u.getAttribute("morphNormal"+v)!==d[b]&&u.setAttribute("morphNormal"+v,d[b]),n[v]=S,y+=S):(h&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),d&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),n[v]=0)}const g=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(s,"morphTargetBaseInfluence",g),f.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:c}}function uf(s,t,e,i){let n=new WeakMap;function a(c){const l=i.render.frame,u=c.geometry,f=t.get(c,u);if(n.get(f)!==l&&(t.update(f),n.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),n.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;n.get(p)!==l&&(p.update(),n.set(p,l))}return f}function r(){n=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:r}}class nl extends ze{constructor(t,e,i,n,a,r,o,c,l,u){if(u=u!==void 0?u:Li,u!==Li&&u!==un)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Li&&(i=mi),i===void 0&&u===un&&(i=Ri),super(null,n,a,r,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ce,this.minFilter=c!==void 0?c:Ce,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const sl=new ze,al=new nl(1,1);al.compareFunction=Wr;const ol=new Kr,rl=new jc,ll=new tl,tr=[],er=[],ir=new Float32Array(16),nr=new Float32Array(9),sr=new Float32Array(4);function mn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let a=tr[n];if(a===void 0&&(a=new Float32Array(n),tr[n]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function pe(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function me(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Ms(s,t){let e=er[t];e===void 0&&(e=new Int32Array(t),er[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function ff(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2fv(this.addr,t),me(e,t)}}function mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;s.uniform3fv(this.addr,t),me(e,t)}}function gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4fv(this.addr,t),me(e,t)}}function vf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;sr.set(i),s.uniformMatrix2fv(this.addr,!1,sr),me(e,i)}}function yf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;nr.set(i),s.uniformMatrix3fv(this.addr,!1,nr),me(e,i)}}function _f(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;ir.set(i),s.uniformMatrix4fv(this.addr,!1,ir),me(e,i)}}function Tf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2iv(this.addr,t),me(e,t)}}function Mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3iv(this.addr,t),me(e,t)}}function Sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4iv(this.addr,t),me(e,t)}}function xf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2uiv(this.addr,t),me(e,t)}}function Af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3uiv(this.addr,t),me(e,t)}}function Pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4uiv(this.addr,t),me(e,t)}}function Cf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);const a=this.type===s.SAMPLER_2D_SHADOW?al:sl;e.setTexture2D(t||a,n)}function wf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||rl,n)}function Rf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||ll,n)}function Lf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||ol,n)}function If(s){switch(s){case 5126:return ff;case 35664:return pf;case 35665:return mf;case 35666:return gf;case 35674:return vf;case 35675:return yf;case 35676:return _f;case 5124:case 35670:return Tf;case 35667:case 35671:return Ef;case 35668:case 35672:return Mf;case 35669:case 35673:return Sf;case 5125:return xf;case 36294:return bf;case 36295:return Af;case 36296:return Pf;case 35678:case 36198:case 36298:case 36306:case 35682:return Cf;case 35679:case 36299:case 36307:return wf;case 35680:case 36300:case 36308:case 36293:return Rf;case 36289:case 36303:case 36311:case 36292:return Lf}}function Df(s,t){s.uniform1fv(this.addr,t)}function Of(s,t){const e=mn(t,this.size,2);s.uniform2fv(this.addr,e)}function Nf(s,t){const e=mn(t,this.size,3);s.uniform3fv(this.addr,e)}function zf(s,t){const e=mn(t,this.size,4);s.uniform4fv(this.addr,e)}function Uf(s,t){const e=mn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Ff(s,t){const e=mn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Gf(s,t){const e=mn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Bf(s,t){s.uniform1iv(this.addr,t)}function kf(s,t){s.uniform2iv(this.addr,t)}function Hf(s,t){s.uniform3iv(this.addr,t)}function Vf(s,t){s.uniform4iv(this.addr,t)}function Wf(s,t){s.uniform1uiv(this.addr,t)}function Yf(s,t){s.uniform2uiv(this.addr,t)}function Xf(s,t){s.uniform3uiv(this.addr,t)}function $f(s,t){s.uniform4uiv(this.addr,t)}function Kf(s,t,e){const i=this.cache,n=t.length,a=Ms(e,n);pe(i,a)||(s.uniform1iv(this.addr,a),me(i,a));for(let r=0;r!==n;++r)e.setTexture2D(t[r]||sl,a[r])}function jf(s,t,e){const i=this.cache,n=t.length,a=Ms(e,n);pe(i,a)||(s.uniform1iv(this.addr,a),me(i,a));for(let r=0;r!==n;++r)e.setTexture3D(t[r]||rl,a[r])}function qf(s,t,e){const i=this.cache,n=t.length,a=Ms(e,n);pe(i,a)||(s.uniform1iv(this.addr,a),me(i,a));for(let r=0;r!==n;++r)e.setTextureCube(t[r]||ll,a[r])}function Zf(s,t,e){const i=this.cache,n=t.length,a=Ms(e,n);pe(i,a)||(s.uniform1iv(this.addr,a),me(i,a));for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||ol,a[r])}function Jf(s){switch(s){case 5126:return Df;case 35664:return Of;case 35665:return Nf;case 35666:return zf;case 35674:return Uf;case 35675:return Ff;case 35676:return Gf;case 5124:case 35670:return Bf;case 35667:case 35671:return kf;case 35668:case 35672:return Hf;case 35669:case 35673:return Vf;case 5125:return Wf;case 36294:return Yf;case 36295:return Xf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return Kf;case 35679:case 36299:case 36307:return jf;case 35680:case 36300:case 36308:case 36293:return qf;case 36289:case 36303:case 36311:case 36292:return Zf}}class Qf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=If(e.type)}}class tp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jf(e.type)}}class ep{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let a=0,r=n.length;a!==r;++a){const o=n[a];o.setValue(t,e[o.id],i)}}}const na=/(\w+)(\])?(\[|\.)?/g;function ar(s,t){s.seq.push(t),s.map[t.id]=t}function ip(s,t,e){const i=s.name,n=i.length;for(na.lastIndex=0;;){const a=na.exec(i),r=na.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===n){ar(e,l===void 0?new Qf(o,s,t):new tp(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new ep(o),ar(e,f)),e=f}}}class cs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=t.getActiveUniform(e,n),r=t.getUniformLocation(e,a.name);ip(a,r,this)}}setValue(t,e,i,n){const a=this.map[e];a!==void 0&&a.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let a=0,r=e.length;a!==r;++a){const o=e[a],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,a=t.length;n!==a;++n){const r=t[n];r.id in e&&i.push(r)}return i}}function or(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const np=37297;let sp=0;function ap(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=n;r<a;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}function op(s){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(s);let i;switch(t===e?i="":t===fs&&e===us?i="LinearDisplayP3ToLinearSRGB":t===us&&e===fs&&(i="LinearSRGBToLinearDisplayP3"),s){case li:case Ts:return[i,"LinearTransferOETF"];case Te:case Ca:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function rr(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+n+`

`+ap(s.getShaderSource(t),r)}else return n}function rp(s,t){const e=op(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function lp(s,t){let e;switch(t){case vc:e="Linear";break;case yc:e="Reinhard";break;case _c:e="OptimizedCineon";break;case Tc:e="ACESFilmic";break;case Mc:e="AgX";break;case Ec:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function cp(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(on).join(`
`)}function hp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(on).join(`
`)}function dp(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function up(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=s.getActiveAttrib(t,n),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function on(s){return s!==""}function lr(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cr(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ea(s){return s.replace(fp,mp)}const pp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function mp(s,t){let e=Yt[t];if(e===void 0){const i=pp.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ea(e)}const gp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hr(s){return s.replace(gp,vp)}function vp(s,t,e,i){let n="";for(let a=parseInt(t);a<parseInt(e);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function dr(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function yp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Dr?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Yl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function _p(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case hn:case dn:t="ENVMAP_TYPE_CUBE";break;case _s:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case dn:t="ENVMAP_MODE_REFRACTION";break}return t}function Ep(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Aa:t="ENVMAP_BLENDING_MULTIPLY";break;case mc:t="ENVMAP_BLENDING_MIX";break;case gc:t="ENVMAP_BLENDING_ADD";break}return t}function Mp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Sp(s,t,e,i){const n=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const c=yp(e),l=_p(e),u=Tp(e),f=Ep(e),p=Mp(e),m=e.isWebGL2?"":cp(e),T=hp(e),_=dp(a),h=n.createProgram();let d,y,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(on).join(`
`),d.length>0&&(d+=`
`),y=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(on).join(`
`),y.length>0&&(y+=`
`)):(d=[dr(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(on).join(`
`),y=[m,dr(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==yi?lp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,rp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(on).join(`
`)),r=Ea(r),r=lr(r,e),r=cr(r,e),o=Ea(o),o=lr(o,e),o=cr(o,e),r=hr(r),o=hr(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,d=[T,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const v=g+d+r,E=g+y+o,b=or(n,n.VERTEX_SHADER,v),S=or(n,n.FRAGMENT_SHADER,E);n.attachShader(h,b),n.attachShader(h,S),e.index0AttributeName!==void 0?n.bindAttribLocation(h,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(h,0,"position"),n.linkProgram(h);function z(k){if(s.debug.checkShaderErrors){const q=n.getProgramInfoLog(h).trim(),w=n.getShaderInfoLog(b).trim(),O=n.getShaderInfoLog(S).trim();let B=!0,X=!0;if(n.getProgramParameter(h,n.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,h,b,S);else{const Y=rr(n,b,"vertex"),Z=rr(n,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(h,n.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+Y+`
`+Z)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(w===""||O==="")&&(X=!1);X&&(k.diagnostics={runnable:B,programLog:q,vertexShader:{log:w,prefix:d},fragmentShader:{log:O,prefix:y}})}n.deleteShader(b),n.deleteShader(S),M=new cs(n,h),A=up(n,h)}let M;this.getUniforms=function(){return M===void 0&&z(this),M};let A;this.getAttributes=function(){return A===void 0&&z(this),A};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=n.getProgramParameter(h,np)),G},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(h),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sp++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=b,this.fragmentShader=S,this}let xp=0;class bp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ap(t),e.set(t,i)),i}}class Ap{constructor(t){this.id=xp++,this.code=t,this.usedTimes=0}}function Pp(s,t,e,i,n,a,r){const o=new La,c=new bp,l=[],u=n.isWebGL2,f=n.logarithmicDepthBuffer,p=n.vertexTextures;let m=n.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function h(M,A,G,k,q){const w=k.fog,O=q.geometry,B=M.isMeshStandardMaterial?k.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||B),Y=X&&X.mapping===_s?X.image.height:null,Z=T[M.type];M.precision!==null&&(m=n.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const V=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,K=V!==void 0?V.length:0;let J=0;O.morphAttributes.position!==void 0&&(J=1),O.morphAttributes.normal!==void 0&&(J=2),O.morphAttributes.color!==void 0&&(J=3);let F,tt,nt,vt;if(Z){const ae=qe[Z];F=ae.vertexShader,tt=ae.fragmentShader}else F=M.vertexShader,tt=M.fragmentShader,c.update(M),nt=c.getVertexShaderID(M),vt=c.getFragmentShaderID(M);const wt=s.getRenderTarget(),L=q.isInstancedMesh===!0,D=q.isBatchedMesh===!0,H=!!M.map,W=!!M.matcap,C=!!X,ut=!!M.aoMap,it=!!M.lightMap,Mt=!!M.bumpMap,ft=!!M.normalMap,Tt=!!M.displacementMap,mt=!!M.emissiveMap,P=!!M.metalnessMap,x=!!M.roughnessMap,j=M.anisotropy>0,pt=M.clearcoat>0,rt=M.iridescence>0,ot=M.sheen>0,_t=M.transmission>0,ct=j&&!!M.anisotropyMap,yt=pt&&!!M.clearcoatMap,xt=pt&&!!M.clearcoatNormalMap,At=pt&&!!M.clearcoatRoughnessMap,st=rt&&!!M.iridescenceMap,zt=rt&&!!M.iridescenceThicknessMap,Dt=ot&&!!M.sheenColorMap,It=ot&&!!M.sheenRoughnessMap,Ct=!!M.specularMap,Pt=!!M.specularColorMap,I=!!M.specularIntensityMap,dt=_t&&!!M.transmissionMap,bt=_t&&!!M.thicknessMap,St=!!M.gradientMap,gt=!!M.alphaMap,U=M.alphaTest>0,Et=!!M.alphaHash,Rt=!!M.extensions,Gt=!!O.attributes.uv1,Ut=!!O.attributes.uv2,$t=!!O.attributes.uv3;let Kt=yi;return M.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(Kt=s.toneMapping),{isWebGL2:u,shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:F,fragmentShader:tt,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:vt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:D,instancing:L,instancingColor:L&&q.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:wt===null?s.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:li,map:H,matcap:W,envMap:C,envMapMode:C&&X.mapping,envMapCubeUVHeight:Y,aoMap:ut,lightMap:it,bumpMap:Mt,normalMap:ft,displacementMap:p&&Tt,emissiveMap:mt,normalMapObjectSpace:ft&&M.normalMapType===Oc,normalMapTangentSpace:ft&&M.normalMapType===Vr,metalnessMap:P,roughnessMap:x,anisotropy:j,anisotropyMap:ct,clearcoat:pt,clearcoatMap:yt,clearcoatNormalMap:xt,clearcoatRoughnessMap:At,iridescence:rt,iridescenceMap:st,iridescenceThicknessMap:zt,sheen:ot,sheenColorMap:Dt,sheenRoughnessMap:It,specularMap:Ct,specularColorMap:Pt,specularIntensityMap:I,transmission:_t,transmissionMap:dt,thicknessMap:bt,gradientMap:St,opaque:M.transparent===!1&&M.blending===ln,alphaMap:gt,alphaTest:U,alphaHash:Et,combine:M.combine,mapUv:H&&_(M.map.channel),aoMapUv:ut&&_(M.aoMap.channel),lightMapUv:it&&_(M.lightMap.channel),bumpMapUv:Mt&&_(M.bumpMap.channel),normalMapUv:ft&&_(M.normalMap.channel),displacementMapUv:Tt&&_(M.displacementMap.channel),emissiveMapUv:mt&&_(M.emissiveMap.channel),metalnessMapUv:P&&_(M.metalnessMap.channel),roughnessMapUv:x&&_(M.roughnessMap.channel),anisotropyMapUv:ct&&_(M.anisotropyMap.channel),clearcoatMapUv:yt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:xt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:It&&_(M.sheenRoughnessMap.channel),specularMapUv:Ct&&_(M.specularMap.channel),specularColorMapUv:Pt&&_(M.specularColorMap.channel),specularIntensityMapUv:I&&_(M.specularIntensityMap.channel),transmissionMapUv:dt&&_(M.transmissionMap.channel),thicknessMapUv:bt&&_(M.thicknessMap.channel),alphaMapUv:gt&&_(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ft||j),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Gt,vertexUv2s:Ut,vertexUv3s:$t,pointsUvs:q.isPoints===!0&&!!O.attributes.uv&&(H||gt),fog:!!w,useFog:M.fog===!0,fogExp2:w&&w.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:J,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:Kt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:H&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===ne,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===oi,flipSided:M.side===Ie,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Rt&&M.extensions.derivatives===!0,extensionFragDepth:Rt&&M.extensions.fragDepth===!0,extensionDrawBuffers:Rt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Rt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Rt&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const G in M.defines)A.push(G),A.push(M.defines[G]);return M.isRawShaderMaterial===!1&&(y(A,M),g(A,M),A.push(s.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function y(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function g(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function v(M){const A=T[M.type];let G;if(A){const k=qe[A];G=lh.clone(k.uniforms)}else G=M.uniforms;return G}function E(M,A){let G;for(let k=0,q=l.length;k<q;k++){const w=l[k];if(w.cacheKey===A){G=w,++G.usedTimes;break}}return G===void 0&&(G=new Sp(s,A,M,a),l.push(G)),G}function b(M){if(--M.usedTimes===0){const A=l.indexOf(M);l[A]=l[l.length-1],l.pop(),M.destroy()}}function S(M){c.remove(M)}function z(){c.dispose()}return{getParameters:h,getProgramCacheKey:d,getUniforms:v,acquireProgram:E,releaseProgram:b,releaseShaderCache:S,programs:l,dispose:z}}function Cp(){let s=new WeakMap;function t(a){let r=s.get(a);return r===void 0&&(r={},s.set(a,r)),r}function e(a){s.delete(a)}function i(a,r,o){s.get(a)[r]=o}function n(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function wp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ur(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function fr(){const s=[];let t=0;const e=[],i=[],n=[];function a(){t=0,e.length=0,i.length=0,n.length=0}function r(f,p,m,T,_,h){let d=s[t];return d===void 0?(d={id:f.id,object:f,geometry:p,material:m,groupOrder:T,renderOrder:f.renderOrder,z:_,group:h},s[t]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=m,d.groupOrder=T,d.renderOrder=f.renderOrder,d.z=_,d.group=h),t++,d}function o(f,p,m,T,_,h){const d=r(f,p,m,T,_,h);m.transmission>0?i.push(d):m.transparent===!0?n.push(d):e.push(d)}function c(f,p,m,T,_,h){const d=r(f,p,m,T,_,h);m.transmission>0?i.unshift(d):m.transparent===!0?n.unshift(d):e.unshift(d)}function l(f,p){e.length>1&&e.sort(f||wp),i.length>1&&i.sort(p||ur),n.length>1&&n.sort(p||ur)}function u(){for(let f=t,p=s.length;f<p;f++){const m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:a,push:o,unshift:c,finish:u,sort:l}}function Rp(){let s=new WeakMap;function t(i,n){const a=s.get(i);let r;return a===void 0?(r=new fr,s.set(i,[r])):n>=a.length?(r=new fr,a.push(r)):r=a[n],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function Lp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Q,color:new Jt};break;case"SpotLight":e={position:new Q,direction:new Q,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Q,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Q,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[t.id]=e,e}}}function Ip(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Dp=0;function Op(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Np(s,t){const e=new Lp,i=Ip(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new Q);const a=new Q,r=new fe,o=new fe;function c(u,f){let p=0,m=0,T=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let _=0,h=0,d=0,y=0,g=0,v=0,E=0,b=0,S=0,z=0,M=0;u.sort(Op);const A=f===!0?Math.PI:1;for(let k=0,q=u.length;k<q;k++){const w=u[k],O=w.color,B=w.intensity,X=w.distance,Y=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)p+=O.r*B*A,m+=O.g*B*A,T+=O.b*B*A;else if(w.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(w.sh.coefficients[Z],B);M++}else if(w.isDirectionalLight){const Z=e.get(w);if(Z.color.copy(w.color).multiplyScalar(w.intensity*A),w.castShadow){const V=w.shadow,K=i.get(w);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,n.directionalShadow[_]=K,n.directionalShadowMap[_]=Y,n.directionalShadowMatrix[_]=w.shadow.matrix,v++}n.directional[_]=Z,_++}else if(w.isSpotLight){const Z=e.get(w);Z.position.setFromMatrixPosition(w.matrixWorld),Z.color.copy(O).multiplyScalar(B*A),Z.distance=X,Z.coneCos=Math.cos(w.angle),Z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),Z.decay=w.decay,n.spot[d]=Z;const V=w.shadow;if(w.map&&(n.spotLightMap[S]=w.map,S++,V.updateMatrices(w),w.castShadow&&z++),n.spotLightMatrix[d]=V.matrix,w.castShadow){const K=i.get(w);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,n.spotShadow[d]=K,n.spotShadowMap[d]=Y,b++}d++}else if(w.isRectAreaLight){const Z=e.get(w);Z.color.copy(O).multiplyScalar(B),Z.halfWidth.set(w.width*.5,0,0),Z.halfHeight.set(0,w.height*.5,0),n.rectArea[y]=Z,y++}else if(w.isPointLight){const Z=e.get(w);if(Z.color.copy(w.color).multiplyScalar(w.intensity*A),Z.distance=w.distance,Z.decay=w.decay,w.castShadow){const V=w.shadow,K=i.get(w);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,K.shadowCameraNear=V.camera.near,K.shadowCameraFar=V.camera.far,n.pointShadow[h]=K,n.pointShadowMap[h]=Y,n.pointShadowMatrix[h]=w.shadow.matrix,E++}n.point[h]=Z,h++}else if(w.isHemisphereLight){const Z=e.get(w);Z.skyColor.copy(w.color).multiplyScalar(B*A),Z.groundColor.copy(w.groundColor).multiplyScalar(B*A),n.hemi[g]=Z,g++}}y>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=T;const G=n.hash;(G.directionalLength!==_||G.pointLength!==h||G.spotLength!==d||G.rectAreaLength!==y||G.hemiLength!==g||G.numDirectionalShadows!==v||G.numPointShadows!==E||G.numSpotShadows!==b||G.numSpotMaps!==S||G.numLightProbes!==M)&&(n.directional.length=_,n.spot.length=d,n.rectArea.length=y,n.point.length=h,n.hemi.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=b+S-z,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=z,n.numLightProbes=M,G.directionalLength=_,G.pointLength=h,G.spotLength=d,G.rectAreaLength=y,G.hemiLength=g,G.numDirectionalShadows=v,G.numPointShadows=E,G.numSpotShadows=b,G.numSpotMaps=S,G.numLightProbes=M,n.version=Dp++)}function l(u,f){let p=0,m=0,T=0,_=0,h=0;const d=f.matrixWorldInverse;for(let y=0,g=u.length;y<g;y++){const v=u[y];if(v.isDirectionalLight){const E=n.directional[p];E.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(d),p++}else if(v.isSpotLight){const E=n.spot[T];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(d),T++}else if(v.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(d),o.identity(),r.copy(v.matrixWorld),r.premultiply(d),o.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const E=n.point[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(d),m++}else if(v.isHemisphereLight){const E=n.hemi[h];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(d),h++}}}return{setup:c,setupView:l,state:n}}function pr(s,t){const e=new Np(s,t),i=[],n=[];function a(){i.length=0,n.length=0}function r(f){i.push(f)}function o(f){n.push(f)}function c(f){e.setup(i,f)}function l(f){e.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:c,setupLightsView:l,pushLight:r,pushShadow:o}}function zp(s,t){let e=new WeakMap;function i(a,r=0){const o=e.get(a);let c;return o===void 0?(c=new pr(s,t),e.set(a,[c])):r>=o.length?(c=new pr(s,t),o.push(c)):c=o[r],c}function n(){e=new WeakMap}return{get:i,dispose:n}}class Up extends On{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ic,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fp extends On{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Gp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bp=`uniform sampler2D shadow_pass;
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
}`;function kp(s,t,e){let i=new Ia;const n=new kt,a=new kt,r=new _e,o=new Up({depthPacking:Dc}),c=new Fp,l={},u=e.maxTextureSize,f={[Ti]:Ie,[Ie]:Ti,[oi]:oi},p=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Gp,fragmentShader:Bp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const T=new Je;T.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qt(T,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dr;let d=this.type;this.render=function(b,S,z){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||b.length===0)return;const M=s.getRenderTarget(),A=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),k=s.state;k.setBlending(vi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const q=d!==ai&&this.type===ai,w=d===ai&&this.type!==ai;for(let O=0,B=b.length;O<B;O++){const X=b[O],Y=X.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;n.copy(Y.mapSize);const Z=Y.getFrameExtents();if(n.multiply(Z),a.copy(Y.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(a.x=Math.floor(u/Z.x),n.x=a.x*Z.x,Y.mapSize.x=a.x),n.y>u&&(a.y=Math.floor(u/Z.y),n.y=a.y*Z.y,Y.mapSize.y=a.y)),Y.map===null||q===!0||w===!0){const K=this.type!==ai?{minFilter:Ce,magFilter:Ce}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Oi(n.x,n.y,K),Y.map.texture.name=X.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const V=Y.getViewportCount();for(let K=0;K<V;K++){const J=Y.getViewport(K);r.set(a.x*J.x,a.y*J.y,a.x*J.z,a.y*J.w),k.viewport(r),Y.updateMatrices(X,K),i=Y.getFrustum(),v(S,z,Y.camera,X,this.type)}Y.isPointLightShadow!==!0&&this.type===ai&&y(Y,z),Y.needsUpdate=!1}d=this.type,h.needsUpdate=!1,s.setRenderTarget(M,A,G)};function y(b,S){const z=t.update(_);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Oi(n.x,n.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(S,null,z,p,_,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(S,null,z,m,_,null)}function g(b,S,z,M){let A=null;const G=z.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(G!==void 0)A=G;else if(A=z.isPointLight===!0?c:o,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const k=A.uuid,q=S.uuid;let w=l[k];w===void 0&&(w={},l[k]=w);let O=w[q];O===void 0&&(O=A.clone(),w[q]=O,S.addEventListener("dispose",E)),A=O}if(A.visible=S.visible,A.wireframe=S.wireframe,M===ai?A.side=S.shadowSide!==null?S.shadowSide:S.side:A.side=S.shadowSide!==null?S.shadowSide:f[S.side],A.alphaMap=S.alphaMap,A.alphaTest=S.alphaTest,A.map=S.map,A.clipShadows=S.clipShadows,A.clippingPlanes=S.clippingPlanes,A.clipIntersection=S.clipIntersection,A.displacementMap=S.displacementMap,A.displacementScale=S.displacementScale,A.displacementBias=S.displacementBias,A.wireframeLinewidth=S.wireframeLinewidth,A.linewidth=S.linewidth,z.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const k=s.properties.get(A);k.light=z}return A}function v(b,S,z,M,A){if(b.visible===!1)return;if(b.layers.test(S.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===ai)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld);const q=t.update(b),w=b.material;if(Array.isArray(w)){const O=q.groups;for(let B=0,X=O.length;B<X;B++){const Y=O[B],Z=w[Y.materialIndex];if(Z&&Z.visible){const V=g(b,Z,M,A);b.onBeforeShadow(s,b,S,z,q,V,Y),s.renderBufferDirect(z,null,q,V,b,Y),b.onAfterShadow(s,b,S,z,q,V,Y)}}}else if(w.visible){const O=g(b,w,M,A);b.onBeforeShadow(s,b,S,z,q,O,null),s.renderBufferDirect(z,null,q,O,b,null),b.onAfterShadow(s,b,S,z,q,O,null)}}const k=b.children;for(let q=0,w=k.length;q<w;q++)v(k[q],S,z,M,A)}function E(b){b.target.removeEventListener("dispose",E);for(const z in l){const M=l[z],A=b.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}function Hp(s,t,e){const i=e.isWebGL2;function n(){let U=!1;const Et=new _e;let Rt=null;const Gt=new _e(0,0,0,0);return{setMask:function(Ut){Rt!==Ut&&!U&&(s.colorMask(Ut,Ut,Ut,Ut),Rt=Ut)},setLocked:function(Ut){U=Ut},setClear:function(Ut,$t,Kt,se,ae){ae===!0&&(Ut*=se,$t*=se,Kt*=se),Et.set(Ut,$t,Kt,se),Gt.equals(Et)===!1&&(s.clearColor(Ut,$t,Kt,se),Gt.copy(Et))},reset:function(){U=!1,Rt=null,Gt.set(-1,0,0,0)}}}function a(){let U=!1,Et=null,Rt=null,Gt=null;return{setTest:function(Ut){Ut?D(s.DEPTH_TEST):H(s.DEPTH_TEST)},setMask:function(Ut){Et!==Ut&&!U&&(s.depthMask(Ut),Et=Ut)},setFunc:function(Ut){if(Rt!==Ut){switch(Ut){case lc:s.depthFunc(s.NEVER);break;case cc:s.depthFunc(s.ALWAYS);break;case hc:s.depthFunc(s.LESS);break;case hs:s.depthFunc(s.LEQUAL);break;case dc:s.depthFunc(s.EQUAL);break;case uc:s.depthFunc(s.GEQUAL);break;case fc:s.depthFunc(s.GREATER);break;case pc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Rt=Ut}},setLocked:function(Ut){U=Ut},setClear:function(Ut){Gt!==Ut&&(s.clearDepth(Ut),Gt=Ut)},reset:function(){U=!1,Et=null,Rt=null,Gt=null}}}function r(){let U=!1,Et=null,Rt=null,Gt=null,Ut=null,$t=null,Kt=null,se=null,ae=null;return{setTest:function(Zt){U||(Zt?D(s.STENCIL_TEST):H(s.STENCIL_TEST))},setMask:function(Zt){Et!==Zt&&!U&&(s.stencilMask(Zt),Et=Zt)},setFunc:function(Zt,de,je){(Rt!==Zt||Gt!==de||Ut!==je)&&(s.stencilFunc(Zt,de,je),Rt=Zt,Gt=de,Ut=je)},setOp:function(Zt,de,je){($t!==Zt||Kt!==de||se!==je)&&(s.stencilOp(Zt,de,je),$t=Zt,Kt=de,se=je)},setLocked:function(Zt){U=Zt},setClear:function(Zt){ae!==Zt&&(s.clearStencil(Zt),ae=Zt)},reset:function(){U=!1,Et=null,Rt=null,Gt=null,Ut=null,$t=null,Kt=null,se=null,ae=null}}}const o=new n,c=new a,l=new r,u=new WeakMap,f=new WeakMap;let p={},m={},T=new WeakMap,_=[],h=null,d=!1,y=null,g=null,v=null,E=null,b=null,S=null,z=null,M=new Jt(0,0,0),A=0,G=!1,k=null,q=null,w=null,O=null,B=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Z=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=Z>=2);let K=null,J={};const F=s.getParameter(s.SCISSOR_BOX),tt=s.getParameter(s.VIEWPORT),nt=new _e().fromArray(F),vt=new _e().fromArray(tt);function wt(U,Et,Rt,Gt){const Ut=new Uint8Array(4),$t=s.createTexture();s.bindTexture(U,$t),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Kt=0;Kt<Rt;Kt++)i&&(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)?s.texImage3D(Et,0,s.RGBA,1,1,Gt,0,s.RGBA,s.UNSIGNED_BYTE,Ut):s.texImage2D(Et+Kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ut);return $t}const L={};L[s.TEXTURE_2D]=wt(s.TEXTURE_2D,s.TEXTURE_2D,1),L[s.TEXTURE_CUBE_MAP]=wt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(L[s.TEXTURE_2D_ARRAY]=wt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),L[s.TEXTURE_3D]=wt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),D(s.DEPTH_TEST),c.setFunc(hs),mt(!1),P(Ka),D(s.CULL_FACE),ft(vi);function D(U){p[U]!==!0&&(s.enable(U),p[U]=!0)}function H(U){p[U]!==!1&&(s.disable(U),p[U]=!1)}function W(U,Et){return m[U]!==Et?(s.bindFramebuffer(U,Et),m[U]=Et,i&&(U===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Et),U===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Et)),!0):!1}function C(U,Et){let Rt=_,Gt=!1;if(U)if(Rt=T.get(Et),Rt===void 0&&(Rt=[],T.set(Et,Rt)),U.isWebGLMultipleRenderTargets){const Ut=U.texture;if(Rt.length!==Ut.length||Rt[0]!==s.COLOR_ATTACHMENT0){for(let $t=0,Kt=Ut.length;$t<Kt;$t++)Rt[$t]=s.COLOR_ATTACHMENT0+$t;Rt.length=Ut.length,Gt=!0}}else Rt[0]!==s.COLOR_ATTACHMENT0&&(Rt[0]=s.COLOR_ATTACHMENT0,Gt=!0);else Rt[0]!==s.BACK&&(Rt[0]=s.BACK,Gt=!0);Gt&&(e.isWebGL2?s.drawBuffers(Rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Rt))}function ut(U){return h!==U?(s.useProgram(U),h=U,!0):!1}const it={[Ci]:s.FUNC_ADD,[$l]:s.FUNC_SUBTRACT,[Kl]:s.FUNC_REVERSE_SUBTRACT};if(i)it[Ja]=s.MIN,it[Qa]=s.MAX;else{const U=t.get("EXT_blend_minmax");U!==null&&(it[Ja]=U.MIN_EXT,it[Qa]=U.MAX_EXT)}const Mt={[jl]:s.ZERO,[ql]:s.ONE,[Zl]:s.SRC_COLOR,[ua]:s.SRC_ALPHA,[nc]:s.SRC_ALPHA_SATURATE,[ec]:s.DST_COLOR,[Ql]:s.DST_ALPHA,[Jl]:s.ONE_MINUS_SRC_COLOR,[fa]:s.ONE_MINUS_SRC_ALPHA,[ic]:s.ONE_MINUS_DST_COLOR,[tc]:s.ONE_MINUS_DST_ALPHA,[sc]:s.CONSTANT_COLOR,[ac]:s.ONE_MINUS_CONSTANT_COLOR,[oc]:s.CONSTANT_ALPHA,[rc]:s.ONE_MINUS_CONSTANT_ALPHA};function ft(U,Et,Rt,Gt,Ut,$t,Kt,se,ae,Zt){if(U===vi){d===!0&&(H(s.BLEND),d=!1);return}if(d===!1&&(D(s.BLEND),d=!0),U!==Xl){if(U!==y||Zt!==G){if((g!==Ci||b!==Ci)&&(s.blendEquation(s.FUNC_ADD),g=Ci,b=Ci),Zt)switch(U){case ln:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ja:s.blendFunc(s.ONE,s.ONE);break;case qa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Za:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ln:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ja:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case qa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Za:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,E=null,S=null,z=null,M.set(0,0,0),A=0,y=U,G=Zt}return}Ut=Ut||Et,$t=$t||Rt,Kt=Kt||Gt,(Et!==g||Ut!==b)&&(s.blendEquationSeparate(it[Et],it[Ut]),g=Et,b=Ut),(Rt!==v||Gt!==E||$t!==S||Kt!==z)&&(s.blendFuncSeparate(Mt[Rt],Mt[Gt],Mt[$t],Mt[Kt]),v=Rt,E=Gt,S=$t,z=Kt),(se.equals(M)===!1||ae!==A)&&(s.blendColor(se.r,se.g,se.b,ae),M.copy(se),A=ae),y=U,G=!1}function Tt(U,Et){U.side===oi?H(s.CULL_FACE):D(s.CULL_FACE);let Rt=U.side===Ie;Et&&(Rt=!Rt),mt(Rt),U.blending===ln&&U.transparent===!1?ft(vi):ft(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),o.setMask(U.colorWrite);const Gt=U.stencilWrite;l.setTest(Gt),Gt&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),j(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?D(s.SAMPLE_ALPHA_TO_COVERAGE):H(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(U){k!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),k=U)}function P(U){U!==Vl?(D(s.CULL_FACE),U!==q&&(U===Ka?s.cullFace(s.BACK):U===Wl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):H(s.CULL_FACE),q=U}function x(U){U!==w&&(Y&&s.lineWidth(U),w=U)}function j(U,Et,Rt){U?(D(s.POLYGON_OFFSET_FILL),(O!==Et||B!==Rt)&&(s.polygonOffset(Et,Rt),O=Et,B=Rt)):H(s.POLYGON_OFFSET_FILL)}function pt(U){U?D(s.SCISSOR_TEST):H(s.SCISSOR_TEST)}function rt(U){U===void 0&&(U=s.TEXTURE0+X-1),K!==U&&(s.activeTexture(U),K=U)}function ot(U,Et,Rt){Rt===void 0&&(K===null?Rt=s.TEXTURE0+X-1:Rt=K);let Gt=J[Rt];Gt===void 0&&(Gt={type:void 0,texture:void 0},J[Rt]=Gt),(Gt.type!==U||Gt.texture!==Et)&&(K!==Rt&&(s.activeTexture(Rt),K=Rt),s.bindTexture(U,Et||L[U]),Gt.type=U,Gt.texture=Et)}function _t(){const U=J[K];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ct(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function zt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function I(U){nt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),nt.copy(U))}function dt(U){vt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),vt.copy(U))}function bt(U,Et){let Rt=f.get(Et);Rt===void 0&&(Rt=new WeakMap,f.set(Et,Rt));let Gt=Rt.get(U);Gt===void 0&&(Gt=s.getUniformBlockIndex(Et,U.name),Rt.set(U,Gt))}function St(U,Et){const Gt=f.get(Et).get(U);u.get(Et)!==Gt&&(s.uniformBlockBinding(Et,Gt,U.__bindingPointIndex),u.set(Et,Gt))}function gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},K=null,J={},m={},T=new WeakMap,_=[],h=null,d=!1,y=null,g=null,v=null,E=null,b=null,S=null,z=null,M=new Jt(0,0,0),A=0,G=!1,k=null,q=null,w=null,O=null,B=null,nt.set(0,0,s.canvas.width,s.canvas.height),vt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:D,disable:H,bindFramebuffer:W,drawBuffers:C,useProgram:ut,setBlending:ft,setMaterial:Tt,setFlipSided:mt,setCullFace:P,setLineWidth:x,setPolygonOffset:j,setScissorTest:pt,activeTexture:rt,bindTexture:ot,unbindTexture:_t,compressedTexImage2D:ct,compressedTexImage3D:yt,texImage2D:Ct,texImage3D:Pt,updateUBOMapping:bt,uniformBlockBinding:St,texStorage2D:Dt,texStorage3D:It,texSubImage2D:xt,texSubImage3D:At,compressedTexSubImage2D:st,compressedTexSubImage3D:zt,scissor:I,viewport:dt,reset:gt}}function Vp(s,t,e,i,n,a,r){const o=n.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,x){return m?new OffscreenCanvas(P,x):ms("canvas")}function _(P,x,j,pt){let rt=1;if((P.width>pt||P.height>pt)&&(rt=pt/Math.max(P.width,P.height)),rt<1||x===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ot=x?Ta:Math.floor,_t=ot(rt*P.width),ct=ot(rt*P.height);f===void 0&&(f=T(_t,ct));const yt=j?T(_t,ct):f;return yt.width=_t,yt.height=ct,yt.getContext("2d").drawImage(P,0,0,_t,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+_t+"x"+ct+")."),yt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function h(P){return Ro(P.width)&&Ro(P.height)}function d(P){return o?!1:P.wrapS!==$e||P.wrapT!==$e||P.minFilter!==Ce&&P.minFilter!==Ge}function y(P,x){return P.generateMipmaps&&x&&P.minFilter!==Ce&&P.minFilter!==Ge}function g(P){s.generateMipmap(P)}function v(P,x,j,pt,rt=!1){if(o===!1)return x;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ot=x;if(x===s.RED&&(j===s.FLOAT&&(ot=s.R32F),j===s.HALF_FLOAT&&(ot=s.R16F),j===s.UNSIGNED_BYTE&&(ot=s.R8)),x===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(ot=s.R8UI),j===s.UNSIGNED_SHORT&&(ot=s.R16UI),j===s.UNSIGNED_INT&&(ot=s.R32UI),j===s.BYTE&&(ot=s.R8I),j===s.SHORT&&(ot=s.R16I),j===s.INT&&(ot=s.R32I)),x===s.RG&&(j===s.FLOAT&&(ot=s.RG32F),j===s.HALF_FLOAT&&(ot=s.RG16F),j===s.UNSIGNED_BYTE&&(ot=s.RG8)),x===s.RGBA){const _t=rt?ds:te.getTransfer(pt);j===s.FLOAT&&(ot=s.RGBA32F),j===s.HALF_FLOAT&&(ot=s.RGBA16F),j===s.UNSIGNED_BYTE&&(ot=_t===ne?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(ot=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(ot=s.RGB5_A1)}return(ot===s.R16F||ot===s.R32F||ot===s.RG16F||ot===s.RG32F||ot===s.RGBA16F||ot===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function E(P,x,j){return y(P,j)===!0||P.isFramebufferTexture&&P.minFilter!==Ce&&P.minFilter!==Ge?Math.log2(Math.max(x.width,x.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?x.mipmaps.length:1}function b(P){return P===Ce||P===to||P===ws?s.NEAREST:s.LINEAR}function S(P){const x=P.target;x.removeEventListener("dispose",S),M(x),x.isVideoTexture&&u.delete(x)}function z(P){const x=P.target;x.removeEventListener("dispose",z),G(x)}function M(P){const x=i.get(P);if(x.__webglInit===void 0)return;const j=P.source,pt=p.get(j);if(pt){const rt=pt[x.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&A(P),Object.keys(pt).length===0&&p.delete(j)}i.remove(P)}function A(P){const x=i.get(P);s.deleteTexture(x.__webglTexture);const j=P.source,pt=p.get(j);delete pt[x.__cacheKey],r.memory.textures--}function G(P){const x=P.texture,j=i.get(P),pt=i.get(x);if(pt.__webglTexture!==void 0&&(s.deleteTexture(pt.__webglTexture),r.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(j.__webglFramebuffer[rt]))for(let ot=0;ot<j.__webglFramebuffer[rt].length;ot++)s.deleteFramebuffer(j.__webglFramebuffer[rt][ot]);else s.deleteFramebuffer(j.__webglFramebuffer[rt]);j.__webglDepthbuffer&&s.deleteRenderbuffer(j.__webglDepthbuffer[rt])}else{if(Array.isArray(j.__webglFramebuffer))for(let rt=0;rt<j.__webglFramebuffer.length;rt++)s.deleteFramebuffer(j.__webglFramebuffer[rt]);else s.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&s.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&s.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let rt=0;rt<j.__webglColorRenderbuffer.length;rt++)j.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(j.__webglColorRenderbuffer[rt]);j.__webglDepthRenderbuffer&&s.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let rt=0,ot=x.length;rt<ot;rt++){const _t=i.get(x[rt]);_t.__webglTexture&&(s.deleteTexture(_t.__webglTexture),r.memory.textures--),i.remove(x[rt])}i.remove(x),i.remove(P)}let k=0;function q(){k=0}function w(){const P=k;return P>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+n.maxTextures),k+=1,P}function O(P){const x=[];return x.push(P.wrapS),x.push(P.wrapT),x.push(P.wrapR||0),x.push(P.magFilter),x.push(P.minFilter),x.push(P.anisotropy),x.push(P.internalFormat),x.push(P.format),x.push(P.type),x.push(P.generateMipmaps),x.push(P.premultiplyAlpha),x.push(P.flipY),x.push(P.unpackAlignment),x.push(P.colorSpace),x.join()}function B(P,x){const j=i.get(P);if(P.isVideoTexture&&Tt(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const pt=P.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(j,P,x);return}}e.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+x)}function X(P,x){const j=i.get(P);if(P.version>0&&j.__version!==P.version){nt(j,P,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+x)}function Y(P,x){const j=i.get(P);if(P.version>0&&j.__version!==P.version){nt(j,P,x);return}e.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+x)}function Z(P,x){const j=i.get(P);if(P.version>0&&j.__version!==P.version){vt(j,P,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+x)}const V={[ga]:s.REPEAT,[$e]:s.CLAMP_TO_EDGE,[va]:s.MIRRORED_REPEAT},K={[Ce]:s.NEAREST,[to]:s.NEAREST_MIPMAP_NEAREST,[ws]:s.NEAREST_MIPMAP_LINEAR,[Ge]:s.LINEAR,[Sc]:s.LINEAR_MIPMAP_NEAREST,[Rn]:s.LINEAR_MIPMAP_LINEAR},J={[Nc]:s.NEVER,[kc]:s.ALWAYS,[zc]:s.LESS,[Wr]:s.LEQUAL,[Uc]:s.EQUAL,[Bc]:s.GEQUAL,[Fc]:s.GREATER,[Gc]:s.NOTEQUAL};function F(P,x,j){if(j?(s.texParameteri(P,s.TEXTURE_WRAP_S,V[x.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,V[x.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,V[x.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,K[x.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,K[x.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(x.wrapS!==$e||x.wrapT!==$e)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,b(x.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,b(x.minFilter)),x.minFilter!==Ce&&x.minFilter!==Ge&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,J[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const pt=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===Ce||x.minFilter!==ws&&x.minFilter!==Rn||x.type===gi&&t.has("OES_texture_float_linear")===!1||o===!1&&x.type===Ln&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(s.texParameterf(P,pt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function tt(P,x){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,x.addEventListener("dispose",S));const pt=x.source;let rt=p.get(pt);rt===void 0&&(rt={},p.set(pt,rt));const ot=O(x);if(ot!==P.__cacheKey){rt[ot]===void 0&&(rt[ot]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,j=!0),rt[ot].usedTimes++;const _t=rt[P.__cacheKey];_t!==void 0&&(rt[P.__cacheKey].usedTimes--,_t.usedTimes===0&&A(x)),P.__cacheKey=ot,P.__webglTexture=rt[ot].texture}return j}function nt(P,x,j){let pt=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(pt=s.TEXTURE_3D);const rt=tt(P,x),ot=x.source;e.bindTexture(pt,P.__webglTexture,s.TEXTURE0+j);const _t=i.get(ot);if(ot.version!==_t.__version||rt===!0){e.activeTexture(s.TEXTURE0+j);const ct=te.getPrimaries(te.workingColorSpace),yt=x.colorSpace===ke?null:te.getPrimaries(x.colorSpace),xt=x.colorSpace===ke||ct===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const At=d(x)&&h(x.image)===!1;let st=_(x.image,At,!1,n.maxTextureSize);st=mt(x,st);const zt=h(st)||o,Dt=a.convert(x.format,x.colorSpace);let It=a.convert(x.type),Ct=v(x.internalFormat,Dt,It,x.colorSpace,x.isVideoTexture);F(pt,x,zt);let Pt;const I=x.mipmaps,dt=o&&x.isVideoTexture!==!0&&Ct!==kr,bt=_t.__version===void 0||rt===!0,St=E(x,st,zt);if(x.isDepthTexture)Ct=s.DEPTH_COMPONENT,o?x.type===gi?Ct=s.DEPTH_COMPONENT32F:x.type===mi?Ct=s.DEPTH_COMPONENT24:x.type===Ri?Ct=s.DEPTH24_STENCIL8:Ct=s.DEPTH_COMPONENT16:x.type===gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Li&&Ct===s.DEPTH_COMPONENT&&x.type!==Pa&&x.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=mi,It=a.convert(x.type)),x.format===un&&Ct===s.DEPTH_COMPONENT&&(Ct=s.DEPTH_STENCIL,x.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Ri,It=a.convert(x.type))),bt&&(dt?e.texStorage2D(s.TEXTURE_2D,1,Ct,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Ct,st.width,st.height,0,Dt,It,null));else if(x.isDataTexture)if(I.length>0&&zt){dt&&bt&&e.texStorage2D(s.TEXTURE_2D,St,Ct,I[0].width,I[0].height);for(let gt=0,U=I.length;gt<U;gt++)Pt=I[gt],dt?e.texSubImage2D(s.TEXTURE_2D,gt,0,0,Pt.width,Pt.height,Dt,It,Pt.data):e.texImage2D(s.TEXTURE_2D,gt,Ct,Pt.width,Pt.height,0,Dt,It,Pt.data);x.generateMipmaps=!1}else dt?(bt&&e.texStorage2D(s.TEXTURE_2D,St,Ct,st.width,st.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,Dt,It,st.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,st.width,st.height,0,Dt,It,st.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){dt&&bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,St,Ct,I[0].width,I[0].height,st.depth);for(let gt=0,U=I.length;gt<U;gt++)Pt=I[gt],x.format!==Ke?Dt!==null?dt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,0,Pt.width,Pt.height,st.depth,Dt,Pt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,gt,Ct,Pt.width,Pt.height,st.depth,0,Pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,0,Pt.width,Pt.height,st.depth,Dt,It,Pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,gt,Ct,Pt.width,Pt.height,st.depth,0,Dt,It,Pt.data)}else{dt&&bt&&e.texStorage2D(s.TEXTURE_2D,St,Ct,I[0].width,I[0].height);for(let gt=0,U=I.length;gt<U;gt++)Pt=I[gt],x.format!==Ke?Dt!==null?dt?e.compressedTexSubImage2D(s.TEXTURE_2D,gt,0,0,Pt.width,Pt.height,Dt,Pt.data):e.compressedTexImage2D(s.TEXTURE_2D,gt,Ct,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?e.texSubImage2D(s.TEXTURE_2D,gt,0,0,Pt.width,Pt.height,Dt,It,Pt.data):e.texImage2D(s.TEXTURE_2D,gt,Ct,Pt.width,Pt.height,0,Dt,It,Pt.data)}else if(x.isDataArrayTexture)dt?(bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,St,Ct,st.width,st.height,st.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Dt,It,st.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,st.width,st.height,st.depth,0,Dt,It,st.data);else if(x.isData3DTexture)dt?(bt&&e.texStorage3D(s.TEXTURE_3D,St,Ct,st.width,st.height,st.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Dt,It,st.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,st.width,st.height,st.depth,0,Dt,It,st.data);else if(x.isFramebufferTexture){if(bt)if(dt)e.texStorage2D(s.TEXTURE_2D,St,Ct,st.width,st.height);else{let gt=st.width,U=st.height;for(let Et=0;Et<St;Et++)e.texImage2D(s.TEXTURE_2D,Et,Ct,gt,U,0,Dt,It,null),gt>>=1,U>>=1}}else if(I.length>0&&zt){dt&&bt&&e.texStorage2D(s.TEXTURE_2D,St,Ct,I[0].width,I[0].height);for(let gt=0,U=I.length;gt<U;gt++)Pt=I[gt],dt?e.texSubImage2D(s.TEXTURE_2D,gt,0,0,Dt,It,Pt):e.texImage2D(s.TEXTURE_2D,gt,Ct,Dt,It,Pt);x.generateMipmaps=!1}else dt?(bt&&e.texStorage2D(s.TEXTURE_2D,St,Ct,st.width,st.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Dt,It,st)):e.texImage2D(s.TEXTURE_2D,0,Ct,Dt,It,st);y(x,zt)&&g(pt),_t.__version=ot.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function vt(P,x,j){if(x.image.length!==6)return;const pt=tt(P,x),rt=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+j);const ot=i.get(rt);if(rt.version!==ot.__version||pt===!0){e.activeTexture(s.TEXTURE0+j);const _t=te.getPrimaries(te.workingColorSpace),ct=x.colorSpace===ke?null:te.getPrimaries(x.colorSpace),yt=x.colorSpace===ke||_t===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const xt=x.isCompressedTexture||x.image[0].isCompressedTexture,At=x.image[0]&&x.image[0].isDataTexture,st=[];for(let gt=0;gt<6;gt++)!xt&&!At?st[gt]=_(x.image[gt],!1,!0,n.maxCubemapSize):st[gt]=At?x.image[gt].image:x.image[gt],st[gt]=mt(x,st[gt]);const zt=st[0],Dt=h(zt)||o,It=a.convert(x.format,x.colorSpace),Ct=a.convert(x.type),Pt=v(x.internalFormat,It,Ct,x.colorSpace),I=o&&x.isVideoTexture!==!0,dt=ot.__version===void 0||pt===!0;let bt=E(x,zt,Dt);F(s.TEXTURE_CUBE_MAP,x,Dt);let St;if(xt){I&&dt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,bt,Pt,zt.width,zt.height);for(let gt=0;gt<6;gt++){St=st[gt].mipmaps;for(let U=0;U<St.length;U++){const Et=St[U];x.format!==Ke?It!==null?I?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,U,0,0,Et.width,Et.height,It,Et.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,U,Pt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,U,0,0,Et.width,Et.height,It,Ct,Et.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,U,Pt,Et.width,Et.height,0,It,Ct,Et.data)}}}else{St=x.mipmaps,I&&dt&&(St.length>0&&bt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,bt,Pt,st[0].width,st[0].height));for(let gt=0;gt<6;gt++)if(At){I?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,st[gt].width,st[gt].height,It,Ct,st[gt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Pt,st[gt].width,st[gt].height,0,It,Ct,st[gt].data);for(let U=0;U<St.length;U++){const Rt=St[U].image[gt].image;I?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,U+1,0,0,Rt.width,Rt.height,It,Ct,Rt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,U+1,Pt,Rt.width,Rt.height,0,It,Ct,Rt.data)}}else{I?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,It,Ct,st[gt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Pt,It,Ct,st[gt]);for(let U=0;U<St.length;U++){const Et=St[U];I?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,U+1,0,0,It,Ct,Et.image[gt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,U+1,Pt,It,Ct,Et.image[gt])}}}y(x,Dt)&&g(s.TEXTURE_CUBE_MAP),ot.__version=rt.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function wt(P,x,j,pt,rt,ot){const _t=a.convert(j.format,j.colorSpace),ct=a.convert(j.type),yt=v(j.internalFormat,_t,ct,j.colorSpace);if(!i.get(x).__hasExternalTextures){const At=Math.max(1,x.width>>ot),st=Math.max(1,x.height>>ot);rt===s.TEXTURE_3D||rt===s.TEXTURE_2D_ARRAY?e.texImage3D(rt,ot,yt,At,st,x.depth,0,_t,ct,null):e.texImage2D(rt,ot,yt,At,st,0,_t,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),ft(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,rt,i.get(j).__webglTexture,0,Mt(x)):(rt===s.TEXTURE_2D||rt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,rt,i.get(j).__webglTexture,ot),e.bindFramebuffer(s.FRAMEBUFFER,null)}function L(P,x,j){if(s.bindRenderbuffer(s.RENDERBUFFER,P),x.depthBuffer&&!x.stencilBuffer){let pt=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(j||ft(x)){const rt=x.depthTexture;rt&&rt.isDepthTexture&&(rt.type===gi?pt=s.DEPTH_COMPONENT32F:rt.type===mi&&(pt=s.DEPTH_COMPONENT24));const ot=Mt(x);ft(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,pt,x.width,x.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,pt,x.width,x.height)}else s.renderbufferStorage(s.RENDERBUFFER,pt,x.width,x.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(x.depthBuffer&&x.stencilBuffer){const pt=Mt(x);j&&ft(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,s.DEPTH24_STENCIL8,x.width,x.height):ft(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,s.DEPTH24_STENCIL8,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const pt=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let rt=0;rt<pt.length;rt++){const ot=pt[rt],_t=a.convert(ot.format,ot.colorSpace),ct=a.convert(ot.type),yt=v(ot.internalFormat,_t,ct,ot.colorSpace),xt=Mt(x);j&&ft(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,yt,x.width,x.height):ft(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt,yt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,yt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function D(P,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),B(x.depthTexture,0);const pt=i.get(x.depthTexture).__webglTexture,rt=Mt(x);if(x.depthTexture.format===Li)ft(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pt,0,rt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pt,0);else if(x.depthTexture.format===un)ft(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pt,0,rt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function H(P){const x=i.get(P),j=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!x.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");D(x.__webglFramebuffer,P)}else if(j){x.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[pt]),x.__webglDepthbuffer[pt]=s.createRenderbuffer(),L(x.__webglDepthbuffer[pt],P,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),L(x.__webglDepthbuffer,P,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function W(P,x,j){const pt=i.get(P);x!==void 0&&wt(pt.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&H(P)}function C(P){const x=P.texture,j=i.get(P),pt=i.get(x);P.addEventListener("dispose",z),P.isWebGLMultipleRenderTargets!==!0&&(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=x.version,r.memory.textures++);const rt=P.isWebGLCubeRenderTarget===!0,ot=P.isWebGLMultipleRenderTargets===!0,_t=h(P)||o;if(rt){j.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(o&&x.mipmaps&&x.mipmaps.length>0){j.__webglFramebuffer[ct]=[];for(let yt=0;yt<x.mipmaps.length;yt++)j.__webglFramebuffer[ct][yt]=s.createFramebuffer()}else j.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){j.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)j.__webglFramebuffer[ct]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(ot)if(n.drawBuffers){const ct=P.texture;for(let yt=0,xt=ct.length;yt<xt;yt++){const At=i.get(ct[yt]);At.__webglTexture===void 0&&(At.__webglTexture=s.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&ft(P)===!1){const ct=ot?x:[x];j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let yt=0;yt<ct.length;yt++){const xt=ct[yt];j.__webglColorRenderbuffer[yt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[yt]);const At=a.convert(xt.format,xt.colorSpace),st=a.convert(xt.type),zt=v(xt.internalFormat,At,st,xt.colorSpace,P.isXRRenderTarget===!0),Dt=Mt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,zt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,j.__webglColorRenderbuffer[yt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),L(j.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(rt){e.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),F(s.TEXTURE_CUBE_MAP,x,_t);for(let ct=0;ct<6;ct++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let yt=0;yt<x.mipmaps.length;yt++)wt(j.__webglFramebuffer[ct][yt],P,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,yt);else wt(j.__webglFramebuffer[ct],P,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);y(x,_t)&&g(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){const ct=P.texture;for(let yt=0,xt=ct.length;yt<xt;yt++){const At=ct[yt],st=i.get(At);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),F(s.TEXTURE_2D,At,_t),wt(j.__webglFramebuffer,P,At,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,0),y(At,_t)&&g(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?ct=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,pt.__webglTexture),F(ct,x,_t),o&&x.mipmaps&&x.mipmaps.length>0)for(let yt=0;yt<x.mipmaps.length;yt++)wt(j.__webglFramebuffer[yt],P,x,s.COLOR_ATTACHMENT0,ct,yt);else wt(j.__webglFramebuffer,P,x,s.COLOR_ATTACHMENT0,ct,0);y(x,_t)&&g(ct),e.unbindTexture()}P.depthBuffer&&H(P)}function ut(P){const x=h(P)||o,j=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let pt=0,rt=j.length;pt<rt;pt++){const ot=j[pt];if(y(ot,x)){const _t=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ct=i.get(ot).__webglTexture;e.bindTexture(_t,ct),g(_t),e.unbindTexture()}}}function it(P){if(o&&P.samples>0&&ft(P)===!1){const x=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],j=P.width,pt=P.height;let rt=s.COLOR_BUFFER_BIT;const ot=[],_t=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=i.get(P),yt=P.isWebGLMultipleRenderTargets===!0;if(yt)for(let xt=0;xt<x.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let xt=0;xt<x.length;xt++){ot.push(s.COLOR_ATTACHMENT0+xt),P.depthBuffer&&ot.push(_t);const At=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(At===!1&&(P.depthBuffer&&(rt|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(rt|=s.STENCIL_BUFFER_BIT)),yt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ct.__webglColorRenderbuffer[xt]),At===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[_t]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_t])),yt){const st=i.get(x[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,st,0)}s.blitFramebuffer(0,0,j,pt,0,0,j,pt,rt,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ot)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),yt)for(let xt=0;xt<x.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,ct.__webglColorRenderbuffer[xt]);const At=i.get(x[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,At,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function Mt(P){return Math.min(n.maxSamples,P.samples)}function ft(P){const x=i.get(P);return o&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Tt(P){const x=r.render.frame;u.get(P)!==x&&(u.set(P,x),P.update())}function mt(P,x){const j=P.colorSpace,pt=P.format,rt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===ya||j!==li&&j!==ke&&(te.getTransfer(j)===ne?o===!1?t.has("EXT_sRGB")===!0&&pt===Ke?(P.format=ya,P.minFilter=Ge,P.generateMipmaps=!1):x=Xr.sRGBToLinear(x):(pt!==Ke||rt!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),x}this.allocateTextureUnit=w,this.resetTextureUnits=q,this.setTexture2D=B,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=Z,this.rebindTextures=W,this.setupRenderTarget=C,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=ft}function Wp(s,t,e){const i=e.isWebGL2;function n(a,r=ke){let o;const c=te.getTransfer(r);if(a===_i)return s.UNSIGNED_BYTE;if(a===zr)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Ur)return s.UNSIGNED_SHORT_5_5_5_1;if(a===xc)return s.BYTE;if(a===bc)return s.SHORT;if(a===Pa)return s.UNSIGNED_SHORT;if(a===Nr)return s.INT;if(a===mi)return s.UNSIGNED_INT;if(a===gi)return s.FLOAT;if(a===Ln)return i?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===Ac)return s.ALPHA;if(a===Ke)return s.RGBA;if(a===Pc)return s.LUMINANCE;if(a===Cc)return s.LUMINANCE_ALPHA;if(a===Li)return s.DEPTH_COMPONENT;if(a===un)return s.DEPTH_STENCIL;if(a===ya)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===wc)return s.RED;if(a===Fr)return s.RED_INTEGER;if(a===Rc)return s.RG;if(a===Gr)return s.RG_INTEGER;if(a===Br)return s.RGBA_INTEGER;if(a===Rs||a===Ls||a===Is||a===Ds)if(c===ne)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Rs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ls)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Is)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ds)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Rs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ls)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Is)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ds)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===eo||a===io||a===no||a===so)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===eo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===io)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===no)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===so)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===kr)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===ao||a===oo)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(a===ao)return c===ne?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===oo)return c===ne?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===ro||a===lo||a===co||a===ho||a===uo||a===fo||a===po||a===mo||a===go||a===vo||a===yo||a===_o||a===To||a===Eo)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(a===ro)return c===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===lo)return c===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===co)return c===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ho)return c===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===uo)return c===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===fo)return c===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===po)return c===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===mo)return c===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===go)return c===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===vo)return c===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===yo)return c===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===_o)return c===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===To)return c===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Eo)return c===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Os||a===Mo||a===So)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(a===Os)return c===ne?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Mo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===So)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Lc||a===xo||a===bo||a===Ao)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(a===Os)return o.COMPRESSED_RED_RGTC1_EXT;if(a===xo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===bo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Ao)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ri?i?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:n}}class Yp extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Mn extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xp={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const _ of t.hand.values()){const h=e.getJointPose(_,i),d=this._getHandJoint(l,_);h!==null&&(d.matrix.fromArray(h.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=h.radius),d.visible=h!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=u.position.distanceTo(f.position),m=.02,T=.005;l.inputState.pinching&&p>m+T?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=m-T&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xp)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Mn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class $p extends Ui{constructor(t,e){super();const i=this;let n=null,a=1,r=null,o="local-floor",c=1,l=null,u=null,f=null,p=null,m=null,T=null;const _=e.getContextAttributes();let h=null,d=null;const y=[],g=[],v=new kt;let E=null;const b=new Be;b.layers.enable(1),b.viewport=new _e;const S=new Be;S.layers.enable(2),S.viewport=new _e;const z=[b,S],M=new Yp;M.layers.enable(1),M.layers.enable(2);let A=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let tt=y[F];return tt===void 0&&(tt=new sa,y[F]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(F){let tt=y[F];return tt===void 0&&(tt=new sa,y[F]=tt),tt.getGripSpace()},this.getHand=function(F){let tt=y[F];return tt===void 0&&(tt=new sa,y[F]=tt),tt.getHandSpace()};function k(F){const tt=g.indexOf(F.inputSource);if(tt===-1)return;const nt=y[tt];nt!==void 0&&(nt.update(F.inputSource,F.frame,l||r),nt.dispatchEvent({type:F.type,data:F.inputSource}))}function q(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",w);for(let F=0;F<y.length;F++){const tt=g[F];tt!==null&&(g[F]=null,y[F].disconnect(tt))}A=null,G=null,t.setRenderTarget(h),m=null,p=null,f=null,n=null,d=null,J.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(v.width,v.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){a=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return T},this.getSession=function(){return n},this.setSession=async function(F){if(n=F,n!==null){if(h=t.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",q),n.addEventListener("inputsourceschange",w),_.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(v),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const tt={antialias:n.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(n,e,tt),n.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Oi(m.framebufferWidth,m.framebufferHeight,{format:Ke,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let tt=null,nt=null,vt=null;_.depth&&(vt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=_.stencil?un:Li,nt=_.stencil?Ri:mi);const wt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:a};f=new XRWebGLBinding(n,e),p=f.createProjectionLayer(wt),n.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),d=new Oi(p.textureWidth,p.textureHeight,{format:Ke,type:_i,depthTexture:new nl(p.textureWidth,p.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const L=t.properties.get(d);L.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await n.requestReferenceSpace(o),J.setContext(n),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function w(F){for(let tt=0;tt<F.removed.length;tt++){const nt=F.removed[tt],vt=g.indexOf(nt);vt>=0&&(g[vt]=null,y[vt].disconnect(nt))}for(let tt=0;tt<F.added.length;tt++){const nt=F.added[tt];let vt=g.indexOf(nt);if(vt===-1){for(let L=0;L<y.length;L++)if(L>=g.length){g.push(nt),vt=L;break}else if(g[L]===null){g[L]=nt,vt=L;break}if(vt===-1)break}const wt=y[vt];wt&&wt.connect(nt)}}const O=new Q,B=new Q;function X(F,tt,nt){O.setFromMatrixPosition(tt.matrixWorld),B.setFromMatrixPosition(nt.matrixWorld);const vt=O.distanceTo(B),wt=tt.projectionMatrix.elements,L=nt.projectionMatrix.elements,D=wt[14]/(wt[10]-1),H=wt[14]/(wt[10]+1),W=(wt[9]+1)/wt[5],C=(wt[9]-1)/wt[5],ut=(wt[8]-1)/wt[0],it=(L[8]+1)/L[0],Mt=D*ut,ft=D*it,Tt=vt/(-ut+it),mt=Tt*-ut;tt.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(mt),F.translateZ(Tt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const P=D+Tt,x=H+Tt,j=Mt-mt,pt=ft+(vt-mt),rt=W*H/x*P,ot=C*H/x*P;F.projectionMatrix.makePerspective(j,pt,rt,ot,P,x),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function Y(F,tt){tt===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(tt.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(n===null)return;M.near=S.near=b.near=F.near,M.far=S.far=b.far=F.far,(A!==M.near||G!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,G=M.far);const tt=F.parent,nt=M.cameras;Y(M,tt);for(let vt=0;vt<nt.length;vt++)Y(nt[vt],tt);nt.length===2?X(M,b,S):M.projectionMatrix.copy(b.projectionMatrix),Z(F,M,tt)};function Z(F,tt,nt){nt===null?F.matrix.copy(tt.matrixWorld):(F.matrix.copy(nt.matrixWorld),F.matrix.invert(),F.matrix.multiply(tt.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(tt.projectionMatrix),F.projectionMatrixInverse.copy(tt.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=_a*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(F){c=F,p!==null&&(p.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)};let V=null;function K(F,tt){if(u=tt.getViewerPose(l||r),T=tt,u!==null){const nt=u.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let vt=!1;nt.length!==M.cameras.length&&(M.cameras.length=0,vt=!0);for(let wt=0;wt<nt.length;wt++){const L=nt[wt];let D=null;if(m!==null)D=m.getViewport(L);else{const W=f.getViewSubImage(p,L);D=W.viewport,wt===0&&(t.setRenderTargetTextures(d,W.colorTexture,p.ignoreDepthValues?void 0:W.depthStencilTexture),t.setRenderTarget(d))}let H=z[wt];H===void 0&&(H=new Be,H.layers.enable(wt),H.viewport=new _e,z[wt]=H),H.matrix.fromArray(L.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(L.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(D.x,D.y,D.width,D.height),wt===0&&(M.matrix.copy(H.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),vt===!0&&M.cameras.push(H)}}for(let nt=0;nt<y.length;nt++){const vt=g[nt],wt=y[nt];vt!==null&&wt!==void 0&&wt.update(vt,tt,l||r)}V&&V(F,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),T=null}const J=new el;J.setAnimationLoop(K),this.setAnimationLoop=function(F){V=F},this.dispose=function(){}}}function Kp(s,t){function e(h,d){h.matrixAutoUpdate===!0&&h.updateMatrix(),d.value.copy(h.matrix)}function i(h,d){d.color.getRGB(h.fogColor.value,Jr(s)),d.isFog?(h.fogNear.value=d.near,h.fogFar.value=d.far):d.isFogExp2&&(h.fogDensity.value=d.density)}function n(h,d,y,g,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(h,d):d.isMeshToonMaterial?(a(h,d),f(h,d)):d.isMeshPhongMaterial?(a(h,d),u(h,d)):d.isMeshStandardMaterial?(a(h,d),p(h,d),d.isMeshPhysicalMaterial&&m(h,d,v)):d.isMeshMatcapMaterial?(a(h,d),T(h,d)):d.isMeshDepthMaterial?a(h,d):d.isMeshDistanceMaterial?(a(h,d),_(h,d)):d.isMeshNormalMaterial?a(h,d):d.isLineBasicMaterial?(r(h,d),d.isLineDashedMaterial&&o(h,d)):d.isPointsMaterial?c(h,d,y,g):d.isSpriteMaterial?l(h,d):d.isShadowMaterial?(h.color.value.copy(d.color),h.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(h,d){h.opacity.value=d.opacity,d.color&&h.diffuse.value.copy(d.color),d.emissive&&h.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(h.map.value=d.map,e(d.map,h.mapTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,e(d.alphaMap,h.alphaMapTransform)),d.bumpMap&&(h.bumpMap.value=d.bumpMap,e(d.bumpMap,h.bumpMapTransform),h.bumpScale.value=d.bumpScale,d.side===Ie&&(h.bumpScale.value*=-1)),d.normalMap&&(h.normalMap.value=d.normalMap,e(d.normalMap,h.normalMapTransform),h.normalScale.value.copy(d.normalScale),d.side===Ie&&h.normalScale.value.negate()),d.displacementMap&&(h.displacementMap.value=d.displacementMap,e(d.displacementMap,h.displacementMapTransform),h.displacementScale.value=d.displacementScale,h.displacementBias.value=d.displacementBias),d.emissiveMap&&(h.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,h.emissiveMapTransform)),d.specularMap&&(h.specularMap.value=d.specularMap,e(d.specularMap,h.specularMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest);const y=t.get(d).envMap;if(y&&(h.envMap.value=y,h.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=d.reflectivity,h.ior.value=d.ior,h.refractionRatio.value=d.refractionRatio),d.lightMap){h.lightMap.value=d.lightMap;const g=s._useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=d.lightMapIntensity*g,e(d.lightMap,h.lightMapTransform)}d.aoMap&&(h.aoMap.value=d.aoMap,h.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,h.aoMapTransform))}function r(h,d){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,d.map&&(h.map.value=d.map,e(d.map,h.mapTransform))}function o(h,d){h.dashSize.value=d.dashSize,h.totalSize.value=d.dashSize+d.gapSize,h.scale.value=d.scale}function c(h,d,y,g){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,h.size.value=d.size*y,h.scale.value=g*.5,d.map&&(h.map.value=d.map,e(d.map,h.uvTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,e(d.alphaMap,h.alphaMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest)}function l(h,d){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,h.rotation.value=d.rotation,d.map&&(h.map.value=d.map,e(d.map,h.mapTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,e(d.alphaMap,h.alphaMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest)}function u(h,d){h.specular.value.copy(d.specular),h.shininess.value=Math.max(d.shininess,1e-4)}function f(h,d){d.gradientMap&&(h.gradientMap.value=d.gradientMap)}function p(h,d){h.metalness.value=d.metalness,d.metalnessMap&&(h.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,h.metalnessMapTransform)),h.roughness.value=d.roughness,d.roughnessMap&&(h.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,h.roughnessMapTransform)),t.get(d).envMap&&(h.envMapIntensity.value=d.envMapIntensity)}function m(h,d,y){h.ior.value=d.ior,d.sheen>0&&(h.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),h.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(h.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,h.sheenColorMapTransform)),d.sheenRoughnessMap&&(h.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,h.sheenRoughnessMapTransform))),d.clearcoat>0&&(h.clearcoat.value=d.clearcoat,h.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(h.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,h.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(h.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ie&&h.clearcoatNormalScale.value.negate())),d.iridescence>0&&(h.iridescence.value=d.iridescence,h.iridescenceIOR.value=d.iridescenceIOR,h.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(h.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,h.iridescenceMapTransform)),d.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),d.transmission>0&&(h.transmission.value=d.transmission,h.transmissionSamplerMap.value=y.texture,h.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(h.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,h.transmissionMapTransform)),h.thickness.value=d.thickness,d.thicknessMap&&(h.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=d.attenuationDistance,h.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(h.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(h.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=d.specularIntensity,h.specularColor.value.copy(d.specularColor),d.specularColorMap&&(h.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,h.specularColorMapTransform)),d.specularIntensityMap&&(h.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,h.specularIntensityMapTransform))}function T(h,d){d.matcap&&(h.matcap.value=d.matcap)}function _(h,d){const y=t.get(d).light;h.referencePosition.value.setFromMatrixPosition(y.matrixWorld),h.nearDistance.value=y.shadow.camera.near,h.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function jp(s,t,e,i){let n={},a={},r=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,g){const v=g.program;i.uniformBlockBinding(y,v)}function l(y,g){let v=n[y.id];v===void 0&&(T(y),v=u(y),n[y.id]=v,y.addEventListener("dispose",h));const E=g.program;i.updateUBOMapping(y,E);const b=t.render.frame;a[y.id]!==b&&(p(y),a[y.id]=b)}function u(y){const g=f();y.__bindingPointIndex=g;const v=s.createBuffer(),E=y.__size,b=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,E,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,g,v),v}function f(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const g=n[y.id],v=y.uniforms,E=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,g);for(let b=0,S=v.length;b<S;b++){const z=Array.isArray(v[b])?v[b]:[v[b]];for(let M=0,A=z.length;M<A;M++){const G=z[M];if(m(G,b,M,E)===!0){const k=G.__offset,q=Array.isArray(G.value)?G.value:[G.value];let w=0;for(let O=0;O<q.length;O++){const B=q[O],X=_(B);typeof B=="number"||typeof B=="boolean"?(G.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,k+w,G.__data)):B.isMatrix3?(G.__data[0]=B.elements[0],G.__data[1]=B.elements[1],G.__data[2]=B.elements[2],G.__data[3]=0,G.__data[4]=B.elements[3],G.__data[5]=B.elements[4],G.__data[6]=B.elements[5],G.__data[7]=0,G.__data[8]=B.elements[6],G.__data[9]=B.elements[7],G.__data[10]=B.elements[8],G.__data[11]=0):(B.toArray(G.__data,w),w+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(y,g,v,E){const b=y.value,S=g+"_"+v;if(E[S]===void 0)return typeof b=="number"||typeof b=="boolean"?E[S]=b:E[S]=b.clone(),!0;{const z=E[S];if(typeof b=="number"||typeof b=="boolean"){if(z!==b)return E[S]=b,!0}else if(z.equals(b)===!1)return z.copy(b),!0}return!1}function T(y){const g=y.uniforms;let v=0;const E=16;for(let S=0,z=g.length;S<z;S++){const M=Array.isArray(g[S])?g[S]:[g[S]];for(let A=0,G=M.length;A<G;A++){const k=M[A],q=Array.isArray(k.value)?k.value:[k.value];for(let w=0,O=q.length;w<O;w++){const B=q[w],X=_(B),Y=v%E;Y!==0&&E-Y<X.boundary&&(v+=E-Y),k.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=X.storage}}}const b=v%E;return b>0&&(v+=E-b),y.__size=v,y.__cache={},this}function _(y){const g={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(g.boundary=4,g.storage=4):y.isVector2?(g.boundary=8,g.storage=8):y.isVector3||y.isColor?(g.boundary=16,g.storage=12):y.isVector4?(g.boundary=16,g.storage=16):y.isMatrix3?(g.boundary=48,g.storage=48):y.isMatrix4?(g.boundary=64,g.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),g}function h(y){const g=y.target;g.removeEventListener("dispose",h);const v=r.indexOf(g.__bindingPointIndex);r.splice(v,1),s.deleteBuffer(n[g.id]),delete n[g.id],delete a[g.id]}function d(){for(const y in n)s.deleteBuffer(n[y]);r=[],n={},a={}}return{bind:c,update:l,dispose:d}}class cl{constructor(t={}){const{canvas:e=Wc(),context:i=null,depth:n=!0,stencil:a=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=r;const m=new Uint32Array(4),T=new Int32Array(4);let _=null,h=null;const d=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this._useLegacyLights=!1,this.toneMapping=yi,this.toneMappingExposure=1;const g=this;let v=!1,E=0,b=0,S=null,z=-1,M=null;const A=new _e,G=new _e;let k=null;const q=new Jt(0);let w=0,O=e.width,B=e.height,X=1,Y=null,Z=null;const V=new _e(0,0,O,B),K=new _e(0,0,O,B);let J=!1;const F=new Ia;let tt=!1,nt=!1,vt=null;const wt=new fe,L=new kt,D=new Q,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function W(){return S===null?X:1}let C=i;function ut(R,et){for(let lt=0;lt<R.length;lt++){const ht=R[lt],at=e.getContext(ht,et);if(at!==null)return at}return null}try{const R={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ba}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",Et,!1),C===null){const et=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&et.shift(),C=ut(et,R),C===null)throw ut(et)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&C instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let it,Mt,ft,Tt,mt,P,x,j,pt,rt,ot,_t,ct,yt,xt,At,st,zt,Dt,It,Ct,Pt,I,dt;function bt(){it=new af(C),Mt=new Ju(C,it,t),it.init(Mt),Pt=new Wp(C,it,Mt),ft=new Hp(C,it,Mt),Tt=new lf(C),mt=new Cp,P=new Vp(C,it,ft,mt,Mt,Pt,Tt),x=new tf(g),j=new sf(g),pt=new mh(C,Mt),I=new qu(C,it,pt,Mt),rt=new of(C,pt,Tt,I),ot=new uf(C,rt,pt,Tt),Dt=new df(C,Mt,P),At=new Qu(mt),_t=new Pp(g,x,j,it,Mt,I,At),ct=new Kp(g,mt),yt=new Rp,xt=new zp(it,Mt),zt=new ju(g,x,j,ft,ot,p,c),st=new kp(g,ot,Mt),dt=new jp(C,Tt,Mt,ft),It=new Zu(C,it,Tt,Mt),Ct=new rf(C,it,Tt,Mt),Tt.programs=_t.programs,g.capabilities=Mt,g.extensions=it,g.properties=mt,g.renderLists=yt,g.shadowMap=st,g.state=ft,g.info=Tt}bt();const St=new $p(g,C);this.xr=St,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const R=it.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=it.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(R){R!==void 0&&(X=R,this.setSize(O,B,!1))},this.getSize=function(R){return R.set(O,B)},this.setSize=function(R,et,lt=!0){if(St.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,B=et,e.width=Math.floor(R*X),e.height=Math.floor(et*X),lt===!0&&(e.style.width=R+"px",e.style.height=et+"px"),this.setViewport(0,0,R,et)},this.getDrawingBufferSize=function(R){return R.set(O*X,B*X).floor()},this.setDrawingBufferSize=function(R,et,lt){O=R,B=et,X=lt,e.width=Math.floor(R*lt),e.height=Math.floor(et*lt),this.setViewport(0,0,R,et)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(V)},this.setViewport=function(R,et,lt,ht){R.isVector4?V.set(R.x,R.y,R.z,R.w):V.set(R,et,lt,ht),ft.viewport(A.copy(V).multiplyScalar(X).floor())},this.getScissor=function(R){return R.copy(K)},this.setScissor=function(R,et,lt,ht){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,et,lt,ht),ft.scissor(G.copy(K).multiplyScalar(X).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(R){ft.setScissorTest(J=R)},this.setOpaqueSort=function(R){Y=R},this.setTransparentSort=function(R){Z=R},this.getClearColor=function(R){return R.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(R=!0,et=!0,lt=!0){let ht=0;if(R){let at=!1;if(S!==null){const Ot=S.texture.format;at=Ot===Br||Ot===Gr||Ot===Fr}if(at){const Ot=S.texture.type,Ft=Ot===_i||Ot===mi||Ot===Pa||Ot===Ri||Ot===zr||Ot===Ur,Bt=zt.getClearColor(),Ht=zt.getClearAlpha(),Xt=Bt.r,Vt=Bt.g,Wt=Bt.b;Ft?(m[0]=Xt,m[1]=Vt,m[2]=Wt,m[3]=Ht,C.clearBufferuiv(C.COLOR,0,m)):(T[0]=Xt,T[1]=Vt,T[2]=Wt,T[3]=Ht,C.clearBufferiv(C.COLOR,0,T))}else ht|=C.COLOR_BUFFER_BIT}et&&(ht|=C.DEPTH_BUFFER_BIT),lt&&(ht|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),yt.dispose(),xt.dispose(),mt.dispose(),x.dispose(),j.dispose(),ot.dispose(),I.dispose(),dt.dispose(),_t.dispose(),St.dispose(),St.removeEventListener("sessionstart",ae),St.removeEventListener("sessionend",Zt),vt&&(vt.dispose(),vt=null),de.stop()};function gt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const R=Tt.autoReset,et=st.enabled,lt=st.autoUpdate,ht=st.needsUpdate,at=st.type;bt(),Tt.autoReset=R,st.enabled=et,st.autoUpdate=lt,st.needsUpdate=ht,st.type=at}function Et(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Rt(R){const et=R.target;et.removeEventListener("dispose",Rt),Gt(et)}function Gt(R){Ut(R),mt.remove(R)}function Ut(R){const et=mt.get(R).programs;et!==void 0&&(et.forEach(function(lt){_t.releaseProgram(lt)}),R.isShaderMaterial&&_t.releaseShaderCache(R))}this.renderBufferDirect=function(R,et,lt,ht,at,Ot){et===null&&(et=H);const Ft=at.isMesh&&at.matrixWorld.determinant()<0,Bt=vl(R,et,lt,ht,at);ft.setMaterial(ht,Ft);let Ht=lt.index,Xt=1;if(ht.wireframe===!0){if(Ht=rt.getWireframeAttribute(lt),Ht===void 0)return;Xt=2}const Vt=lt.drawRange,Wt=lt.attributes.position;let he=Vt.start*Xt,De=(Vt.start+Vt.count)*Xt;Ot!==null&&(he=Math.max(he,Ot.start*Xt),De=Math.min(De,(Ot.start+Ot.count)*Xt)),Ht!==null?(he=Math.max(he,0),De=Math.min(De,Ht.count)):Wt!=null&&(he=Math.max(he,0),De=Math.min(De,Wt.count));const ge=De-he;if(ge<0||ge===1/0)return;I.setup(at,ht,Bt,lt,Ht);let Qe,oe=It;if(Ht!==null&&(Qe=pt.get(Ht),oe=Ct,oe.setIndex(Qe)),at.isMesh)ht.wireframe===!0?(ft.setLineWidth(ht.wireframeLinewidth*W()),oe.setMode(C.LINES)):oe.setMode(C.TRIANGLES);else if(at.isLine){let jt=ht.linewidth;jt===void 0&&(jt=1),ft.setLineWidth(jt*W()),at.isLineSegments?oe.setMode(C.LINES):at.isLineLoop?oe.setMode(C.LINE_LOOP):oe.setMode(C.LINE_STRIP)}else at.isPoints?oe.setMode(C.POINTS):at.isSprite&&oe.setMode(C.TRIANGLES);if(at.isBatchedMesh)oe.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else if(at.isInstancedMesh)oe.renderInstances(he,ge,at.count);else if(lt.isInstancedBufferGeometry){const jt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,xs=Math.min(lt.instanceCount,jt);oe.renderInstances(he,ge,xs)}else oe.render(he,ge)};function $t(R,et,lt){R.transparent===!0&&R.side===oi&&R.forceSinglePass===!1?(R.side=Ie,R.needsUpdate=!0,zn(R,et,lt),R.side=Ti,R.needsUpdate=!0,zn(R,et,lt),R.side=oi):zn(R,et,lt)}this.compile=function(R,et,lt=null){lt===null&&(lt=R),h=xt.get(lt),h.init(),y.push(h),lt.traverseVisible(function(at){at.isLight&&at.layers.test(et.layers)&&(h.pushLight(at),at.castShadow&&h.pushShadow(at))}),R!==lt&&R.traverseVisible(function(at){at.isLight&&at.layers.test(et.layers)&&(h.pushLight(at),at.castShadow&&h.pushShadow(at))}),h.setupLights(g._useLegacyLights);const ht=new Set;return R.traverse(function(at){const Ot=at.material;if(Ot)if(Array.isArray(Ot))for(let Ft=0;Ft<Ot.length;Ft++){const Bt=Ot[Ft];$t(Bt,lt,at),ht.add(Bt)}else $t(Ot,lt,at),ht.add(Ot)}),y.pop(),h=null,ht},this.compileAsync=function(R,et,lt=null){const ht=this.compile(R,et,lt);return new Promise(at=>{function Ot(){if(ht.forEach(function(Ft){mt.get(Ft).currentProgram.isReady()&&ht.delete(Ft)}),ht.size===0){at(R);return}setTimeout(Ot,10)}it.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Kt=null;function se(R){Kt&&Kt(R)}function ae(){de.stop()}function Zt(){de.start()}const de=new el;de.setAnimationLoop(se),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(R){Kt=R,St.setAnimationLoop(R),R===null?de.stop():de.start()},St.addEventListener("sessionstart",ae),St.addEventListener("sessionend",Zt),this.render=function(R,et){if(et!==void 0&&et.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),et.parent===null&&et.matrixWorldAutoUpdate===!0&&et.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(St.cameraAutoUpdate===!0&&St.updateCamera(et),et=St.getCamera()),R.isScene===!0&&R.onBeforeRender(g,R,et,S),h=xt.get(R,y.length),h.init(),y.push(h),wt.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),F.setFromProjectionMatrix(wt),nt=this.localClippingEnabled,tt=At.init(this.clippingPlanes,nt),_=yt.get(R,d.length),_.init(),d.push(_),je(R,et,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(Y,Z),this.info.render.frame++,tt===!0&&At.beginShadows();const lt=h.state.shadowsArray;if(st.render(lt,R,et),tt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset(),zt.render(_,R),h.setupLights(g._useLegacyLights),et.isArrayCamera){const ht=et.cameras;for(let at=0,Ot=ht.length;at<Ot;at++){const Ft=ht[at];Fa(_,R,Ft,Ft.viewport)}}else Fa(_,R,et);S!==null&&(P.updateMultisampleRenderTarget(S),P.updateRenderTargetMipmap(S)),R.isScene===!0&&R.onAfterRender(g,R,et),I.resetDefaultState(),z=-1,M=null,y.pop(),y.length>0?h=y[y.length-1]:h=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function je(R,et,lt,ht){if(R.visible===!1)return;if(R.layers.test(et.layers)){if(R.isGroup)lt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(et);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||F.intersectsSprite(R)){ht&&D.setFromMatrixPosition(R.matrixWorld).applyMatrix4(wt);const Ft=ot.update(R),Bt=R.material;Bt.visible&&_.push(R,Ft,Bt,lt,D.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||F.intersectsObject(R))){const Ft=ot.update(R),Bt=R.material;if(ht&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),D.copy(R.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),D.copy(Ft.boundingSphere.center)),D.applyMatrix4(R.matrixWorld).applyMatrix4(wt)),Array.isArray(Bt)){const Ht=Ft.groups;for(let Xt=0,Vt=Ht.length;Xt<Vt;Xt++){const Wt=Ht[Xt],he=Bt[Wt.materialIndex];he&&he.visible&&_.push(R,Ft,he,lt,D.z,Wt)}}else Bt.visible&&_.push(R,Ft,Bt,lt,D.z,null)}}const Ot=R.children;for(let Ft=0,Bt=Ot.length;Ft<Bt;Ft++)je(Ot[Ft],et,lt,ht)}function Fa(R,et,lt,ht){const at=R.opaque,Ot=R.transmissive,Ft=R.transparent;h.setupLightsView(lt),tt===!0&&At.setGlobalState(g.clippingPlanes,lt),Ot.length>0&&gl(at,Ot,et,lt),ht&&ft.viewport(A.copy(ht)),at.length>0&&Nn(at,et,lt),Ot.length>0&&Nn(Ot,et,lt),Ft.length>0&&Nn(Ft,et,lt),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function gl(R,et,lt,ht){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;const Ot=Mt.isWebGL2;vt===null&&(vt=new Oi(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")?Ln:_i,minFilter:Rn,samples:Ot?4:0})),g.getDrawingBufferSize(L),Ot?vt.setSize(L.x,L.y):vt.setSize(Ta(L.x),Ta(L.y));const Ft=g.getRenderTarget();g.setRenderTarget(vt),g.getClearColor(q),w=g.getClearAlpha(),w<1&&g.setClearColor(16777215,.5),g.clear();const Bt=g.toneMapping;g.toneMapping=yi,Nn(R,lt,ht),P.updateMultisampleRenderTarget(vt),P.updateRenderTargetMipmap(vt);let Ht=!1;for(let Xt=0,Vt=et.length;Xt<Vt;Xt++){const Wt=et[Xt],he=Wt.object,De=Wt.geometry,ge=Wt.material,Qe=Wt.group;if(ge.side===oi&&he.layers.test(ht.layers)){const oe=ge.side;ge.side=Ie,ge.needsUpdate=!0,Ga(he,lt,ht,De,ge,Qe),ge.side=oe,ge.needsUpdate=!0,Ht=!0}}Ht===!0&&(P.updateMultisampleRenderTarget(vt),P.updateRenderTargetMipmap(vt)),g.setRenderTarget(Ft),g.setClearColor(q,w),g.toneMapping=Bt}function Nn(R,et,lt){const ht=et.isScene===!0?et.overrideMaterial:null;for(let at=0,Ot=R.length;at<Ot;at++){const Ft=R[at],Bt=Ft.object,Ht=Ft.geometry,Xt=ht===null?Ft.material:ht,Vt=Ft.group;Bt.layers.test(lt.layers)&&Ga(Bt,et,lt,Ht,Xt,Vt)}}function Ga(R,et,lt,ht,at,Ot){R.onBeforeRender(g,et,lt,ht,at,Ot),R.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),at.onBeforeRender(g,et,lt,ht,R,Ot),at.transparent===!0&&at.side===oi&&at.forceSinglePass===!1?(at.side=Ie,at.needsUpdate=!0,g.renderBufferDirect(lt,et,ht,at,R,Ot),at.side=Ti,at.needsUpdate=!0,g.renderBufferDirect(lt,et,ht,at,R,Ot),at.side=oi):g.renderBufferDirect(lt,et,ht,at,R,Ot),R.onAfterRender(g,et,lt,ht,at,Ot)}function zn(R,et,lt){et.isScene!==!0&&(et=H);const ht=mt.get(R),at=h.state.lights,Ot=h.state.shadowsArray,Ft=at.state.version,Bt=_t.getParameters(R,at.state,Ot,et,lt),Ht=_t.getProgramCacheKey(Bt);let Xt=ht.programs;ht.environment=R.isMeshStandardMaterial?et.environment:null,ht.fog=et.fog,ht.envMap=(R.isMeshStandardMaterial?j:x).get(R.envMap||ht.environment),Xt===void 0&&(R.addEventListener("dispose",Rt),Xt=new Map,ht.programs=Xt);let Vt=Xt.get(Ht);if(Vt!==void 0){if(ht.currentProgram===Vt&&ht.lightsStateVersion===Ft)return ka(R,Bt),Vt}else Bt.uniforms=_t.getUniforms(R),R.onBuild(lt,Bt,g),R.onBeforeCompile(Bt,g),Vt=_t.acquireProgram(Bt,Ht),Xt.set(Ht,Vt),ht.uniforms=Bt.uniforms;const Wt=ht.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Wt.clippingPlanes=At.uniform),ka(R,Bt),ht.needsLights=_l(R),ht.lightsStateVersion=Ft,ht.needsLights&&(Wt.ambientLightColor.value=at.state.ambient,Wt.lightProbe.value=at.state.probe,Wt.directionalLights.value=at.state.directional,Wt.directionalLightShadows.value=at.state.directionalShadow,Wt.spotLights.value=at.state.spot,Wt.spotLightShadows.value=at.state.spotShadow,Wt.rectAreaLights.value=at.state.rectArea,Wt.ltc_1.value=at.state.rectAreaLTC1,Wt.ltc_2.value=at.state.rectAreaLTC2,Wt.pointLights.value=at.state.point,Wt.pointLightShadows.value=at.state.pointShadow,Wt.hemisphereLights.value=at.state.hemi,Wt.directionalShadowMap.value=at.state.directionalShadowMap,Wt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Wt.spotShadowMap.value=at.state.spotShadowMap,Wt.spotLightMatrix.value=at.state.spotLightMatrix,Wt.spotLightMap.value=at.state.spotLightMap,Wt.pointShadowMap.value=at.state.pointShadowMap,Wt.pointShadowMatrix.value=at.state.pointShadowMatrix),ht.currentProgram=Vt,ht.uniformsList=null,Vt}function Ba(R){if(R.uniformsList===null){const et=R.currentProgram.getUniforms();R.uniformsList=cs.seqWithValue(et.seq,R.uniforms)}return R.uniformsList}function ka(R,et){const lt=mt.get(R);lt.outputColorSpace=et.outputColorSpace,lt.batching=et.batching,lt.instancing=et.instancing,lt.instancingColor=et.instancingColor,lt.skinning=et.skinning,lt.morphTargets=et.morphTargets,lt.morphNormals=et.morphNormals,lt.morphColors=et.morphColors,lt.morphTargetsCount=et.morphTargetsCount,lt.numClippingPlanes=et.numClippingPlanes,lt.numIntersection=et.numClipIntersection,lt.vertexAlphas=et.vertexAlphas,lt.vertexTangents=et.vertexTangents,lt.toneMapping=et.toneMapping}function vl(R,et,lt,ht,at){et.isScene!==!0&&(et=H),P.resetTextureUnits();const Ot=et.fog,Ft=ht.isMeshStandardMaterial?et.environment:null,Bt=S===null?g.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:li,Ht=(ht.isMeshStandardMaterial?j:x).get(ht.envMap||Ft),Xt=ht.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Vt=!!lt.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),Wt=!!lt.morphAttributes.position,he=!!lt.morphAttributes.normal,De=!!lt.morphAttributes.color;let ge=yi;ht.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(ge=g.toneMapping);const Qe=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,oe=Qe!==void 0?Qe.length:0,jt=mt.get(ht),xs=h.state.lights;if(tt===!0&&(nt===!0||R!==M)){const Ue=R===M&&ht.id===z;At.setState(ht,R,Ue)}let le=!1;ht.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==xs.state.version||jt.outputColorSpace!==Bt||at.isBatchedMesh&&jt.batching===!1||!at.isBatchedMesh&&jt.batching===!0||at.isInstancedMesh&&jt.instancing===!1||!at.isInstancedMesh&&jt.instancing===!0||at.isSkinnedMesh&&jt.skinning===!1||!at.isSkinnedMesh&&jt.skinning===!0||at.isInstancedMesh&&jt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&jt.instancingColor===!1&&at.instanceColor!==null||jt.envMap!==Ht||ht.fog===!0&&jt.fog!==Ot||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==At.numPlanes||jt.numIntersection!==At.numIntersection)||jt.vertexAlphas!==Xt||jt.vertexTangents!==Vt||jt.morphTargets!==Wt||jt.morphNormals!==he||jt.morphColors!==De||jt.toneMapping!==ge||Mt.isWebGL2===!0&&jt.morphTargetsCount!==oe)&&(le=!0):(le=!0,jt.__version=ht.version);let Ei=jt.currentProgram;le===!0&&(Ei=zn(ht,et,at));let Ha=!1,gn=!1,bs=!1;const Ee=Ei.getUniforms(),Mi=jt.uniforms;if(ft.useProgram(Ei.program)&&(Ha=!0,gn=!0,bs=!0),ht.id!==z&&(z=ht.id,gn=!0),Ha||M!==R){Ee.setValue(C,"projectionMatrix",R.projectionMatrix),Ee.setValue(C,"viewMatrix",R.matrixWorldInverse);const Ue=Ee.map.cameraPosition;Ue!==void 0&&Ue.setValue(C,D.setFromMatrixPosition(R.matrixWorld)),Mt.logarithmicDepthBuffer&&Ee.setValue(C,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&Ee.setValue(C,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,gn=!0,bs=!0)}if(at.isSkinnedMesh){Ee.setOptional(C,at,"bindMatrix"),Ee.setOptional(C,at,"bindMatrixInverse");const Ue=at.skeleton;Ue&&(Mt.floatVertexTextures?(Ue.boneTexture===null&&Ue.computeBoneTexture(),Ee.setValue(C,"boneTexture",Ue.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}at.isBatchedMesh&&(Ee.setOptional(C,at,"batchingTexture"),Ee.setValue(C,"batchingTexture",at._matricesTexture,P));const As=lt.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0&&Mt.isWebGL2===!0)&&Dt.update(at,lt,Ei),(gn||jt.receiveShadow!==at.receiveShadow)&&(jt.receiveShadow=at.receiveShadow,Ee.setValue(C,"receiveShadow",at.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(Mi.envMap.value=Ht,Mi.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),gn&&(Ee.setValue(C,"toneMappingExposure",g.toneMappingExposure),jt.needsLights&&yl(Mi,bs),Ot&&ht.fog===!0&&ct.refreshFogUniforms(Mi,Ot),ct.refreshMaterialUniforms(Mi,ht,X,B,vt),cs.upload(C,Ba(jt),Mi,P)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(cs.upload(C,Ba(jt),Mi,P),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&Ee.setValue(C,"center",at.center),Ee.setValue(C,"modelViewMatrix",at.modelViewMatrix),Ee.setValue(C,"normalMatrix",at.normalMatrix),Ee.setValue(C,"modelMatrix",at.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const Ue=ht.uniformsGroups;for(let Ps=0,Tl=Ue.length;Ps<Tl;Ps++)if(Mt.isWebGL2){const Va=Ue[Ps];dt.update(Va,Ei),dt.bind(Va,Ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ei}function yl(R,et){R.ambientLightColor.needsUpdate=et,R.lightProbe.needsUpdate=et,R.directionalLights.needsUpdate=et,R.directionalLightShadows.needsUpdate=et,R.pointLights.needsUpdate=et,R.pointLightShadows.needsUpdate=et,R.spotLights.needsUpdate=et,R.spotLightShadows.needsUpdate=et,R.rectAreaLights.needsUpdate=et,R.hemisphereLights.needsUpdate=et}function _l(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(R,et,lt){mt.get(R.texture).__webglTexture=et,mt.get(R.depthTexture).__webglTexture=lt;const ht=mt.get(R);ht.__hasExternalTextures=!0,ht.__hasExternalTextures&&(ht.__autoAllocateDepthBuffer=lt===void 0,ht.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ht.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,et){const lt=mt.get(R);lt.__webglFramebuffer=et,lt.__useDefaultFramebuffer=et===void 0},this.setRenderTarget=function(R,et=0,lt=0){S=R,E=et,b=lt;let ht=!0,at=null,Ot=!1,Ft=!1;if(R){const Ht=mt.get(R);Ht.__useDefaultFramebuffer!==void 0?(ft.bindFramebuffer(C.FRAMEBUFFER,null),ht=!1):Ht.__webglFramebuffer===void 0?P.setupRenderTarget(R):Ht.__hasExternalTextures&&P.rebindTextures(R,mt.get(R.texture).__webglTexture,mt.get(R.depthTexture).__webglTexture);const Xt=R.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ft=!0);const Vt=mt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Vt[et])?at=Vt[et][lt]:at=Vt[et],Ot=!0):Mt.isWebGL2&&R.samples>0&&P.useMultisampledRTT(R)===!1?at=mt.get(R).__webglMultisampledFramebuffer:Array.isArray(Vt)?at=Vt[lt]:at=Vt,A.copy(R.viewport),G.copy(R.scissor),k=R.scissorTest}else A.copy(V).multiplyScalar(X).floor(),G.copy(K).multiplyScalar(X).floor(),k=J;if(ft.bindFramebuffer(C.FRAMEBUFFER,at)&&Mt.drawBuffers&&ht&&ft.drawBuffers(R,at),ft.viewport(A),ft.scissor(G),ft.setScissorTest(k),Ot){const Ht=mt.get(R.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ht.__webglTexture,lt)}else if(Ft){const Ht=mt.get(R.texture),Xt=et||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ht.__webglTexture,lt||0,Xt)}z=-1},this.readRenderTargetPixels=function(R,et,lt,ht,at,Ot,Ft){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=mt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Bt=Bt[Ft]),Bt){ft.bindFramebuffer(C.FRAMEBUFFER,Bt);try{const Ht=R.texture,Xt=Ht.format,Vt=Ht.type;if(Xt!==Ke&&Pt.convert(Xt)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Wt=Vt===Ln&&(it.has("EXT_color_buffer_half_float")||Mt.isWebGL2&&it.has("EXT_color_buffer_float"));if(Vt!==_i&&Pt.convert(Vt)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===gi&&(Mt.isWebGL2||it.has("OES_texture_float")||it.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}et>=0&&et<=R.width-ht&&lt>=0&&lt<=R.height-at&&C.readPixels(et,lt,ht,at,Pt.convert(Xt),Pt.convert(Vt),Ot)}finally{const Ht=S!==null?mt.get(S).__webglFramebuffer:null;ft.bindFramebuffer(C.FRAMEBUFFER,Ht)}}},this.copyFramebufferToTexture=function(R,et,lt=0){const ht=Math.pow(2,-lt),at=Math.floor(et.image.width*ht),Ot=Math.floor(et.image.height*ht);P.setTexture2D(et,0),C.copyTexSubImage2D(C.TEXTURE_2D,lt,0,0,R.x,R.y,at,Ot),ft.unbindTexture()},this.copyTextureToTexture=function(R,et,lt,ht=0){const at=et.image.width,Ot=et.image.height,Ft=Pt.convert(lt.format),Bt=Pt.convert(lt.type);P.setTexture2D(lt,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,lt.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,lt.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,lt.unpackAlignment),et.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ht,R.x,R.y,at,Ot,Ft,Bt,et.image.data):et.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ht,R.x,R.y,et.mipmaps[0].width,et.mipmaps[0].height,Ft,et.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,ht,R.x,R.y,Ft,Bt,et.image),ht===0&&lt.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(R,et,lt,ht,at=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ot=R.max.x-R.min.x+1,Ft=R.max.y-R.min.y+1,Bt=R.max.z-R.min.z+1,Ht=Pt.convert(ht.format),Xt=Pt.convert(ht.type);let Vt;if(ht.isData3DTexture)P.setTexture3D(ht,0),Vt=C.TEXTURE_3D;else if(ht.isDataArrayTexture||ht.isCompressedArrayTexture)P.setTexture2DArray(ht,0),Vt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,ht.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ht.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,ht.unpackAlignment);const Wt=C.getParameter(C.UNPACK_ROW_LENGTH),he=C.getParameter(C.UNPACK_IMAGE_HEIGHT),De=C.getParameter(C.UNPACK_SKIP_PIXELS),ge=C.getParameter(C.UNPACK_SKIP_ROWS),Qe=C.getParameter(C.UNPACK_SKIP_IMAGES),oe=lt.isCompressedTexture?lt.mipmaps[at]:lt.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,oe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,oe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,R.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,R.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,R.min.z),lt.isDataTexture||lt.isData3DTexture?C.texSubImage3D(Vt,at,et.x,et.y,et.z,Ot,Ft,Bt,Ht,Xt,oe.data):lt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(Vt,at,et.x,et.y,et.z,Ot,Ft,Bt,Ht,oe.data)):C.texSubImage3D(Vt,at,et.x,et.y,et.z,Ot,Ft,Bt,Ht,Xt,oe),C.pixelStorei(C.UNPACK_ROW_LENGTH,Wt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,he),C.pixelStorei(C.UNPACK_SKIP_PIXELS,De),C.pixelStorei(C.UNPACK_SKIP_ROWS,ge),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Qe),at===0&&ht.generateMipmaps&&C.generateMipmap(Vt),ft.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),ft.unbindTexture()},this.resetState=function(){E=0,b=0,S=null,ft.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ca?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===Ts?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Te?Ii:Hr}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ii?Te:li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class qp extends cl{}qp.prototype.isWebGL1Renderer=!0;class Zp extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class An extends Je{constructor(t=1,e=1,i=1,n=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;n=Math.floor(n),a=Math.floor(a);const u=[],f=[],p=[],m=[];let T=0;const _=[],h=i/2;let d=0;y(),r===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new Ae(f,3)),this.setAttribute("normal",new Ae(p,3)),this.setAttribute("uv",new Ae(m,2));function y(){const v=new Q,E=new Q;let b=0;const S=(e-t)/i;for(let z=0;z<=a;z++){const M=[],A=z/a,G=A*(e-t)+t;for(let k=0;k<=n;k++){const q=k/n,w=q*c+o,O=Math.sin(w),B=Math.cos(w);E.x=G*O,E.y=-A*i+h,E.z=G*B,f.push(E.x,E.y,E.z),v.set(O,S,B).normalize(),p.push(v.x,v.y,v.z),m.push(q,1-A),M.push(T++)}_.push(M)}for(let z=0;z<n;z++)for(let M=0;M<a;M++){const A=_[M][z],G=_[M+1][z],k=_[M+1][z+1],q=_[M][z+1];u.push(A,G,q),u.push(G,k,q),b+=6}l.addGroup(d,b,0),d+=b}function g(v){const E=T,b=new kt,S=new Q;let z=0;const M=v===!0?t:e,A=v===!0?1:-1;for(let k=1;k<=n;k++)f.push(0,h*A,0),p.push(0,A,0),m.push(.5,.5),T++;const G=T;for(let k=0;k<=n;k++){const w=k/n*c+o,O=Math.cos(w),B=Math.sin(w);S.x=M*B,S.y=h*A,S.z=M*O,f.push(S.x,S.y,S.z),p.push(0,A,0),b.x=O*.5+.5,b.y=B*.5*A+.5,m.push(b.x,b.y),T++}for(let k=0;k<n;k++){const q=E+k,w=G+k;v===!0?u.push(w,w+1,q):u.push(w+1,w,q),z+=3}l.addGroup(d,z,v===!0?1:2),d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ss extends Je{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const a=[],r=[];o(n),l(i),u(),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(a.slice(),3)),this.setAttribute("uv",new Ae(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const g=new Q,v=new Q,E=new Q;for(let b=0;b<e.length;b+=3)m(e[b+0],g),m(e[b+1],v),m(e[b+2],E),c(g,v,E,y)}function c(y,g,v,E){const b=E+1,S=[];for(let z=0;z<=b;z++){S[z]=[];const M=y.clone().lerp(v,z/b),A=g.clone().lerp(v,z/b),G=b-z;for(let k=0;k<=G;k++)k===0&&z===b?S[z][k]=M:S[z][k]=M.clone().lerp(A,k/G)}for(let z=0;z<b;z++)for(let M=0;M<2*(b-z)-1;M++){const A=Math.floor(M/2);M%2===0?(p(S[z][A+1]),p(S[z+1][A]),p(S[z][A])):(p(S[z][A+1]),p(S[z+1][A+1]),p(S[z+1][A]))}}function l(y){const g=new Q;for(let v=0;v<a.length;v+=3)g.x=a[v+0],g.y=a[v+1],g.z=a[v+2],g.normalize().multiplyScalar(y),a[v+0]=g.x,a[v+1]=g.y,a[v+2]=g.z}function u(){const y=new Q;for(let g=0;g<a.length;g+=3){y.x=a[g+0],y.y=a[g+1],y.z=a[g+2];const v=h(y)/2/Math.PI+.5,E=d(y)/Math.PI+.5;r.push(v,1-E)}T(),f()}function f(){for(let y=0;y<r.length;y+=6){const g=r[y+0],v=r[y+2],E=r[y+4],b=Math.max(g,v,E),S=Math.min(g,v,E);b>.9&&S<.1&&(g<.2&&(r[y+0]+=1),v<.2&&(r[y+2]+=1),E<.2&&(r[y+4]+=1))}}function p(y){a.push(y.x,y.y,y.z)}function m(y,g){const v=y*3;g.x=t[v+0],g.y=t[v+1],g.z=t[v+2]}function T(){const y=new Q,g=new Q,v=new Q,E=new Q,b=new kt,S=new kt,z=new kt;for(let M=0,A=0;M<a.length;M+=9,A+=6){y.set(a[M+0],a[M+1],a[M+2]),g.set(a[M+3],a[M+4],a[M+5]),v.set(a[M+6],a[M+7],a[M+8]),b.set(r[A+0],r[A+1]),S.set(r[A+2],r[A+3]),z.set(r[A+4],r[A+5]),E.copy(y).add(g).add(v).divideScalar(3);const G=h(E);_(b,A+0,y,G),_(S,A+2,g,G),_(z,A+4,v,G)}}function _(y,g,v,E){E<0&&y.x===1&&(r[g]=y.x-1),v.x===0&&v.z===0&&(r[g]=E/2/Math.PI+.5)}function h(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.vertices,t.indices,t.radius,t.details)}}class Na extends Ss{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Na(t.radius,t.detail)}}class za extends Ss{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new za(t.radius,t.detail)}}class Pn extends Je{constructor(t=1,e=32,i=16,n=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(r+o,Math.PI);let l=0;const u=[],f=new Q,p=new Q,m=[],T=[],_=[],h=[];for(let d=0;d<=i;d++){const y=[],g=d/i;let v=0;d===0&&r===0?v=.5/e:d===i&&c===Math.PI&&(v=-.5/e);for(let E=0;E<=e;E++){const b=E/e;f.x=-t*Math.cos(n+b*a)*Math.sin(r+g*o),f.y=t*Math.cos(r+g*o),f.z=t*Math.sin(n+b*a)*Math.sin(r+g*o),T.push(f.x,f.y,f.z),p.copy(f).normalize(),_.push(p.x,p.y,p.z),h.push(b+v,1-g),y.push(l++)}u.push(y)}for(let d=0;d<i;d++)for(let y=0;y<e;y++){const g=u[d][y+1],v=u[d][y],E=u[d+1][y],b=u[d+1][y+1];(d!==0||r>0)&&m.push(g,v,b),(d!==i-1||c<Math.PI)&&m.push(v,E,b)}this.setIndex(m),this.setAttribute("position",new Ae(T,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ee extends On{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Jt(16777215),this.specular=new Jt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hl extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const aa=new fe,mr=new Q,gr=new Q;class Jp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ia,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;mr.setFromMatrixPosition(t.matrixWorld),e.position.copy(mr),gr.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gr),e.updateMatrixWorld(),aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Qp extends Jp{constructor(){super(new il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vr extends hl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Qp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yr extends hl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class tm{constructor(t,e,i=0,n=1/0){this.ray=new Ra(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new La,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Ma(t,this,i,e),i.sort(_r),i}intersectObjects(t,e=!0,i=[]){for(let n=0,a=t.length;n<a;n++)Ma(t[n],this,i,e);return i.sort(_r),i}}function _r(s,t){return s.distance-t.distance}function Ma(s,t,e,i){if(s.layers.test(t.layers)&&s.raycast(t,e),i===!0){const n=s.children;for(let a=0,r=n.length;a<r;a++)Ma(n[a],t,e,!0)}}class Sa{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);const Tr={type:"change"},oa={type:"start"},Er={type:"end"},as=new Ra,Mr=new pi,em=Math.cos(70*Vc.DEG2RAD);class im extends Ui{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:Bi.ROTATE,TWO:Bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",xt),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",xt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Tr),i.update(),a=n.NONE},this.update=function(){const I=new Q,dt=new Ni().setFromUnitVectors(t.up,new Q(0,1,0)),bt=dt.clone().invert(),St=new Q,gt=new Ni,U=new Q,Et=2*Math.PI;return function(Gt=null){const Ut=i.object.position;I.copy(Ut).sub(i.target),I.applyQuaternion(dt),o.setFromVector3(I),i.autoRotate&&a===n.NONE&&k(A(Gt)),i.enableDamping?(o.theta+=c.theta*i.dampingFactor,o.phi+=c.phi*i.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let $t=i.minAzimuthAngle,Kt=i.maxAzimuthAngle;isFinite($t)&&isFinite(Kt)&&($t<-Math.PI?$t+=Et:$t>Math.PI&&($t-=Et),Kt<-Math.PI?Kt+=Et:Kt>Math.PI&&(Kt-=Et),$t<=Kt?o.theta=Math.max($t,Math.min(Kt,o.theta)):o.theta=o.theta>($t+Kt)/2?Math.max($t,o.theta):Math.min(Kt,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&b||i.object.isOrthographicCamera?o.radius=V(o.radius):o.radius=V(o.radius*l),I.setFromSpherical(o),I.applyQuaternion(bt),Ut.copy(i.target).add(I),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let se=!1;if(i.zoomToCursor&&b){let ae=null;if(i.object.isPerspectiveCamera){const Zt=I.length();ae=V(Zt*l);const de=Zt-ae;i.object.position.addScaledVector(v,de),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Zt=new Q(E.x,E.y,0);Zt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),se=!0;const de=new Q(E.x,E.y,0);de.unproject(i.object),i.object.position.sub(de).add(Zt),i.object.updateMatrixWorld(),ae=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ae!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ae).add(i.object.position):(as.origin.copy(i.object.position),as.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(as.direction))<em?t.lookAt(i.target):(Mr.setFromNormalAndCoplanarPoint(i.object.up,i.target),as.intersectPlane(Mr,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),se=!0);return l=1,b=!1,se||St.distanceToSquared(i.object.position)>r||8*(1-gt.dot(i.object.quaternion))>r||U.distanceToSquared(i.target)>0?(i.dispatchEvent(Tr),St.copy(i.object.position),gt.copy(i.object.quaternion),U.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",zt),i.domElement.removeEventListener("pointerdown",P),i.domElement.removeEventListener("pointercancel",j),i.domElement.removeEventListener("wheel",ot),i.domElement.removeEventListener("pointermove",x),i.domElement.removeEventListener("pointerup",j),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",xt),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=n.NONE;const r=1e-6,o=new Sa,c=new Sa;let l=1;const u=new Q,f=new kt,p=new kt,m=new kt,T=new kt,_=new kt,h=new kt,d=new kt,y=new kt,g=new kt,v=new Q,E=new kt;let b=!1;const S=[],z={};let M=!1;function A(I){return I!==null?2*Math.PI/60*i.autoRotateSpeed*I:2*Math.PI/60/60*i.autoRotateSpeed}function G(I){const dt=Math.abs(I*.01);return Math.pow(.95,i.zoomSpeed*dt)}function k(I){c.theta-=I}function q(I){c.phi-=I}const w=function(){const I=new Q;return function(bt,St){I.setFromMatrixColumn(St,0),I.multiplyScalar(-bt),u.add(I)}}(),O=function(){const I=new Q;return function(bt,St){i.screenSpacePanning===!0?I.setFromMatrixColumn(St,1):(I.setFromMatrixColumn(St,0),I.crossVectors(i.object.up,I)),I.multiplyScalar(bt),u.add(I)}}(),B=function(){const I=new Q;return function(bt,St){const gt=i.domElement;if(i.object.isPerspectiveCamera){const U=i.object.position;I.copy(U).sub(i.target);let Et=I.length();Et*=Math.tan(i.object.fov/2*Math.PI/180),w(2*bt*Et/gt.clientHeight,i.object.matrix),O(2*St*Et/gt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(w(bt*(i.object.right-i.object.left)/i.object.zoom/gt.clientWidth,i.object.matrix),O(St*(i.object.top-i.object.bottom)/i.object.zoom/gt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function X(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(I,dt){if(!i.zoomToCursor)return;b=!0;const bt=i.domElement.getBoundingClientRect(),St=I-bt.left,gt=dt-bt.top,U=bt.width,Et=bt.height;E.x=St/U*2-1,E.y=-(gt/Et)*2+1,v.set(E.x,E.y,1).unproject(i.object).sub(i.object.position).normalize()}function V(I){return Math.max(i.minDistance,Math.min(i.maxDistance,I))}function K(I){f.set(I.clientX,I.clientY)}function J(I){Z(I.clientX,I.clientX),d.set(I.clientX,I.clientY)}function F(I){T.set(I.clientX,I.clientY)}function tt(I){p.set(I.clientX,I.clientY),m.subVectors(p,f).multiplyScalar(i.rotateSpeed);const dt=i.domElement;k(2*Math.PI*m.x/dt.clientHeight),q(2*Math.PI*m.y/dt.clientHeight),f.copy(p),i.update()}function nt(I){y.set(I.clientX,I.clientY),g.subVectors(y,d),g.y>0?X(G(g.y)):g.y<0&&Y(G(g.y)),d.copy(y),i.update()}function vt(I){_.set(I.clientX,I.clientY),h.subVectors(_,T).multiplyScalar(i.panSpeed),B(h.x,h.y),T.copy(_),i.update()}function wt(I){Z(I.clientX,I.clientY),I.deltaY<0?Y(G(I.deltaY)):I.deltaY>0&&X(G(I.deltaY)),i.update()}function L(I){let dt=!1;switch(I.code){case i.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,i.keyPanSpeed),dt=!0;break;case i.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,-i.keyPanSpeed),dt=!0;break;case i.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?k(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(i.keyPanSpeed,0),dt=!0;break;case i.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?k(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(-i.keyPanSpeed,0),dt=!0;break}dt&&(I.preventDefault(),i.update())}function D(I){if(S.length===1)f.set(I.pageX,I.pageY);else{const dt=Pt(I),bt=.5*(I.pageX+dt.x),St=.5*(I.pageY+dt.y);f.set(bt,St)}}function H(I){if(S.length===1)T.set(I.pageX,I.pageY);else{const dt=Pt(I),bt=.5*(I.pageX+dt.x),St=.5*(I.pageY+dt.y);T.set(bt,St)}}function W(I){const dt=Pt(I),bt=I.pageX-dt.x,St=I.pageY-dt.y,gt=Math.sqrt(bt*bt+St*St);d.set(0,gt)}function C(I){i.enableZoom&&W(I),i.enablePan&&H(I)}function ut(I){i.enableZoom&&W(I),i.enableRotate&&D(I)}function it(I){if(S.length==1)p.set(I.pageX,I.pageY);else{const bt=Pt(I),St=.5*(I.pageX+bt.x),gt=.5*(I.pageY+bt.y);p.set(St,gt)}m.subVectors(p,f).multiplyScalar(i.rotateSpeed);const dt=i.domElement;k(2*Math.PI*m.x/dt.clientHeight),q(2*Math.PI*m.y/dt.clientHeight),f.copy(p)}function Mt(I){if(S.length===1)_.set(I.pageX,I.pageY);else{const dt=Pt(I),bt=.5*(I.pageX+dt.x),St=.5*(I.pageY+dt.y);_.set(bt,St)}h.subVectors(_,T).multiplyScalar(i.panSpeed),B(h.x,h.y),T.copy(_)}function ft(I){const dt=Pt(I),bt=I.pageX-dt.x,St=I.pageY-dt.y,gt=Math.sqrt(bt*bt+St*St);y.set(0,gt),g.set(0,Math.pow(y.y/d.y,i.zoomSpeed)),X(g.y),d.copy(y);const U=(I.pageX+dt.x)*.5,Et=(I.pageY+dt.y)*.5;Z(U,Et)}function Tt(I){i.enableZoom&&ft(I),i.enablePan&&Mt(I)}function mt(I){i.enableZoom&&ft(I),i.enableRotate&&it(I)}function P(I){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(I.pointerId),i.domElement.addEventListener("pointermove",x),i.domElement.addEventListener("pointerup",j)),Dt(I),I.pointerType==="touch"?At(I):pt(I))}function x(I){i.enabled!==!1&&(I.pointerType==="touch"?st(I):rt(I))}function j(I){It(I),S.length===0&&(i.domElement.releasePointerCapture(I.pointerId),i.domElement.removeEventListener("pointermove",x),i.domElement.removeEventListener("pointerup",j)),i.dispatchEvent(Er),a=n.NONE}function pt(I){let dt;switch(I.button){case 0:dt=i.mouseButtons.LEFT;break;case 1:dt=i.mouseButtons.MIDDLE;break;case 2:dt=i.mouseButtons.RIGHT;break;default:dt=-1}switch(dt){case Gi.DOLLY:if(i.enableZoom===!1)return;J(I),a=n.DOLLY;break;case Gi.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enablePan===!1)return;F(I),a=n.PAN}else{if(i.enableRotate===!1)return;K(I),a=n.ROTATE}break;case Gi.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enableRotate===!1)return;K(I),a=n.ROTATE}else{if(i.enablePan===!1)return;F(I),a=n.PAN}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(oa)}function rt(I){switch(a){case n.ROTATE:if(i.enableRotate===!1)return;tt(I);break;case n.DOLLY:if(i.enableZoom===!1)return;nt(I);break;case n.PAN:if(i.enablePan===!1)return;vt(I);break}}function ot(I){i.enabled===!1||i.enableZoom===!1||a!==n.NONE||(I.preventDefault(),i.dispatchEvent(oa),wt(_t(I)),i.dispatchEvent(Er))}function _t(I){const dt=I.deltaMode,bt={clientX:I.clientX,clientY:I.clientY,deltaY:I.deltaY};switch(dt){case 1:bt.deltaY*=16;break;case 2:bt.deltaY*=100;break}return I.ctrlKey&&!M&&(bt.deltaY*=10),bt}function ct(I){I.key==="Control"&&(M=!0,document.addEventListener("keyup",yt,{passive:!0,capture:!0}))}function yt(I){I.key==="Control"&&(M=!1,document.removeEventListener("keyup",yt,{passive:!0,capture:!0}))}function xt(I){i.enabled===!1||i.enablePan===!1||L(I)}function At(I){switch(Ct(I),S.length){case 1:switch(i.touches.ONE){case Bi.ROTATE:if(i.enableRotate===!1)return;D(I),a=n.TOUCH_ROTATE;break;case Bi.PAN:if(i.enablePan===!1)return;H(I),a=n.TOUCH_PAN;break;default:a=n.NONE}break;case 2:switch(i.touches.TWO){case Bi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;C(I),a=n.TOUCH_DOLLY_PAN;break;case Bi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ut(I),a=n.TOUCH_DOLLY_ROTATE;break;default:a=n.NONE}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(oa)}function st(I){switch(Ct(I),a){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;it(I),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;Mt(I),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Tt(I),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;mt(I),i.update();break;default:a=n.NONE}}function zt(I){i.enabled!==!1&&I.preventDefault()}function Dt(I){S.push(I.pointerId)}function It(I){delete z[I.pointerId];for(let dt=0;dt<S.length;dt++)if(S[dt]==I.pointerId){S.splice(dt,1);return}}function Ct(I){let dt=z[I.pointerId];dt===void 0&&(dt=new kt,z[I.pointerId]=dt),dt.set(I.pageX,I.pageY)}function Pt(I){const dt=I.pointerId===S[0]?S[1]:S[0];return z[dt]}i.domElement.addEventListener("contextmenu",zt),i.domElement.addEventListener("pointerdown",P),i.domElement.addEventListener("pointercancel",j),i.domElement.addEventListener("wheel",ot,{passive:!1}),document.addEventListener("keydown",ct,{passive:!0,capture:!0}),this.update()}}const $={SEED:null,MAZE_DEGREE:4,MIN_MAZE_DEGREE:4,MAX_MAZE_DEGREE:16,BRANCHING_FACTOR:.1,BRAID_FACTOR:.1,SHADOW_SIZE_FACTOR:.075,TELEPORT_MAP_OPACITY:.25,PLAYER_COLLISION_RADIUS:.275,PLAYER_COLLISION_OFFSET_X:0,PLAYER_COLLISION_OFFSET_Y:-.125,PLAYER_START_X:.5,PLAYER_START_Y:1.7,PLAYER_SHADOW_OFFSET_X:-.28,PLAYER_SHADOW_OFFSET_Y:-.15,PLAYER_SHADOW_WIDTH_FACTOR:.45,PLAYER_SHADOW_HEIGHT_FACTOR:.25,SHOW_COLLISION_DEBUG:!1,MOVE_SPEED_FACTOR:2,ROT_SPEED:3,HUNTER_SPEED:600,VORTEX_SPEED_NORMAL:1.5,VORTEX_SPEED_FAST:6,JELLY_PORTAL_COUNT:0,getHunterCount(s){return s>=16?4:s>=12?3:s>=8?2:1},getKeyCount(s){return this.getHunterCount(s)*2},getTeleportCount(s){if(s<8)return Math.ceil(s/2);const t=s-8;return Math.floor(.125*t*t+1.5*t+4)},getPathfinderCount(s){return s>=11?Math.floor(9+(s-11)*1.4):this.getTeleportCount(s)},COLORS:{WALL:"#444",PATH_KNOWN:"#88ccff",PATH_VISITED:"#888",NEON_UP:"#00ffff",NEON_DOWN:"#ff00ff",NEON_UP_UNUSED:"#006666",NEON_DOWN_UNUSED:"#660066",START:"#ff0",EXIT:"#0f0",PLAYER:"#f00",PLAYER_OUTLINE:"#ffffff",HUNTER:"#a0f",TELEPORT:"#ff8c00",TELEPORT_INACTIVE:"#555555",REVEALED_PATH:"#ffffff",ELEVATOR_BIDIRECTIONAL:"#ffffff",JELLY_PORTAL:"#a020f0",THREE_PLAYER:16711680,THREE_HUNTER:11141375,THREE_START:16776960,THREE_EXIT:65280,THREE_VISITED:4473924,THREE_KNOWN:2046546,THREE_ELEVATOR_UP:65535,THREE_ELEVATOR_DOWN:16711935,THREE_ELEVATOR_UP_UNUSED:26214,THREE_ELEVATOR_DOWN_UNUSED:6684774,THREE_TELEPORT:16747520,THREE_KEY:16766720,THREE_JELLY_PORTAL:10494192,THREE_ELEVATOR_SHAFT:{bottom:16711935,top:65535}}},xa={en:{gameTitle:"VOID ESCAPE",gameCredits:"a game by Bernard Rodrigues",activeHunters:"Active Hunters",activeTeleports:"Active Teleports",activeKeys:"Active Keys",availablePathfinders:"Available Pathfinders",mazeDegree:"Maze Degree",safeMode:"Safe Mode",generateMaze:"NEW GAME",continue:"CONTINUE",tutorialsMenu:"TUTORIALS",tutorialsTitle:"TUTORIALS",back:"BACK",tutorialSuccess:"Success!",nextTutorial:"Next Tutorial",tutKeysTitle:"Key Collection",tutHuntersTitle:"Hunters",start:"START",cancel:"CANCEL",confirm:"CONFIRM",pathfinderConfirmTitle:"Use Pathfinder?",pathfinderConfirmDesc:"This will consume 1 Pathfinder charge to reveal the shortest route.",degreeHint:"Controls the grid size. Higher values create larger, more complex mazes.",safeModeHint:"When active, no hunters will spawn in the maze.",storyMsg1:"The mystical church of chaos worship!",storyMsg2:"The greatest monument to chaos worship.",storyMsg3:"I am a priestess of the word of the Jelly god.",storyMsg4:"But their word is a lie! The chaos is a lie!",storyMsg5:"So I was condemned to exile...",storyMsg6:"Condemned to the void...",hudKeys:"KEYS",hudPathfinders:"PATHFINDERS",hudFloor:"Floor",hudVisited:"Visited",proximityDetector:"PROXIMITY DETECTOR",mapLegendTitle:"MAP LEGEND",legendVisited:"Visited Path",legendKnown:"Known Path",legendStart:"Starting Point",legendExit:"Maze Exit",legendHunter:"Void Hunter",legendTeleport:"Teleport",legendElevator:"Elevator",controlsHintTitle:"CONTROLS HINT",actionMove:"Move / Rotate",actionElevator:"Elevator Up / Down",actionMap:"3D Holographic Map",actionZoom:"Zoom Minimap",msgVoidHuntersDetected:"Void Hunters Detected",msgKeySecured:"Key secured ({collected}/{total})",msgExitUnlocked:"Exit unlocked",msgKeysRemaining:"{count} key(s) remaining",msgNoOtherActiveTeleport:"No other active teleports",msgExitFound:"Exit found",msgNoPathfindersRemaining:"No pathfinders remaining",msgExitNotFoundYet:"Exit not found yet",msgSafePointTeleport:"Safe point... Teleport?",msgOopsNoisyShit:"Oops... noisy sh*t!",msgWhereAmI:"Where am I?",msgElevatorUp:"Up?",msgElevatorDown:"Down?",msgWhichWay:"Which way?",msgDidYouHearThat:"Did you hear that?",msgIWasDetected:"Damn! I was detected.",msgFoundPathfinder:"Found a pathfinder!",msgWorldSaved:"World saved. What now?",msgKeyDropped:"Oh! Just dropped a key...",msgPlayerRespawn:"Ok.. ok.. guess I'm alive..",statusLabel:"HUNTER STATUS:",statusScanning:"SCANNING",statusActive:"ACTIVE",statusSleeping:"SLEEPING",statusTracking:"TRACKING MODE",statusConverging:"HUNTERS CONVERGING ({ticks} Ticks)",pauseTitle:"PAUSED",resume:"RESUME",victoryTitle:"Mission Accomplished",victoryText:"You have successfully navigated the 3D void.",victoryCompletion:"MAP COMPLETION: {percent}%",mapCompletion:"MAP COMPLETION",victoryDeaths:"DEATHS",victoryDegree:"MAZE DEGREE",victoryTime:"COMPLETION TIME",playAgain:"PLAY AGAIN",mainMenu:"MAIN MENU",gameOverTitle:"Terminated",gameOverText:"You were caught by the void hunters.",saving:"SAVING...",generatingMaze:"GENERATING MAZE...",hudMana:"Mana",victoryMana:"MANA COLLECTED",msgManaSecured:"Mana secured ({collected}/{total})",teleportAnomaly:"TELEPORT ANOMALY",ticks:"TICKS",map3dInstructions:"Drag to rotate | Scroll to zoom | M to return",teleportWarning:"TELEPORT",map:"MAP",teleport:"TELEPORT",teleportationLink:"TELEPORTATION LINK",teleportJumpSector:"Jump to Sector {floor}F?",teleportTargetGrid:"Target Grid: ({x}, {y})",teleportGo:"GO",teleportCancel:"CANCEL",actionJellyPortal:"Jelly God Portal",msgJellyPortalEarned:"I got a little power!",msgJellyPortalNotHere:"I can't do this here...",msgJellyPortalActivated:"Portal of the Jelly God!",msgJellyPortalNoPortalCount:"I need mana...",msgJellyPortalNotSafe:"Not safe, but teleport-able...",msgHunterReturned:"These things... they resurrect..."},ptBr:{gameTitle:"VOID ESCAPE",gameCredits:"um jogo de Bernard Rodrigues",activeHunters:"Caçadores Ativos",activeTeleports:"Teleportes Ativos",activeKeys:"Chaves Ativas",availablePathfinders:"Localizadores Disponíveis",mazeDegree:"Grau do Labirinto",safeMode:"Modo Seguro",generateMaze:"NOVO JOGO",continue:"CONTINUAR",tutorialsMenu:"TUTORIAIS",tutorialsTitle:"TUTORIAIS",back:"VOLTAR",tutorialSuccess:"Sucesso!",nextTutorial:"Próximo Tutorial",tutKeysTitle:"Coleta de Chaves",tutHuntersTitle:"Caçadores",start:"INICIAR",cancel:"CANCELAR",confirm:"CONFIRMAR",pathfinderConfirmTitle:"Usar Localizador?",pathfinderConfirmDesc:"Isso consumirá 1 carga de Localizador para revelar a rota mais curta.",degreeHint:"Controla o tamanho da grade. Valores maiores criam labirintos maiores e mais complexos.",safeModeHint:"Quando ativo, nenhum caçador surgirá no labirinto.",storyMsg1:"A igreja mística do culto ao caos!",storyMsg2:"O maior monumento ao culto do caos.",storyMsg3:"Sou uma sacerdotisa da palavra do deus Geleia.",storyMsg4:"Mas sua palavra é uma mentira! O caos é uma mentira!",storyMsg5:"Então fui condenada ao exílio...",storyMsg6:"Condenada ao vazio...",hudKeys:"CHAVES",hudPathfinders:"LOCALIZADORES",hudFloor:"Andar",hudVisited:"Visitado",proximityDetector:"DETECTOR DE PROXIMIDADE",mapLegendTitle:"LEGENDA DO MAPA",legendVisited:"Caminho Visitado",legendKnown:"Caminho Conhecido",legendStart:"Ponto de Partida",legendExit:"Saída do Labirinto",legendHunter:"Caçador do Vazio",legendTeleport:"Teleporte",legendElevator:"Elevador",controlsHintTitle:"DICA DE CONTROLES",actionMove:"Mover / Girar",actionElevator:"Elevador Subir / Descer",actionMap:"Mapa Holográfico 3D",actionZoom:"Zoom do Minimapa",msgVoidHuntersDetected:"Caçadores do Vazio Detectados",msgKeySecured:"Chave obtida ({collected}/{total})",msgExitUnlocked:"Saída destrancada",msgKeysRemaining:"{count} chave(s) restante(s)",msgNoOtherActiveTeleport:"Nenhum outro teleporte ativo",msgExitFound:"Saída encontrada",msgNoPathfindersRemaining:"Nenhum localizador restante",msgExitNotFoundYet:"Saída ainda não encontrada",msgSafePointTeleport:"Ponto seguro... Teleportar?",msgOopsNoisyShit:"Ops... troço barulhento!",msgWhereAmI:"Onde estou?",msgElevatorUp:"Subir?",msgElevatorDown:"Descer?",msgWhichWay:"Que direção?",msgDidYouHearThat:"Ouviu alguma coisa?",msgIWasDetected:"Droga! Fui detectada.",msgFoundPathfinder:"Localizador encontrado!",msgWorldSaved:"Salvei o mundo. E agora?",msgKeyDropped:"Ih... Derrubei uma chave...",msgPlayerRespawn:"Ok.. ok.. sobrevivi..",statusLabel:"STATUS DO CAÇADOR:",statusScanning:"ESCANEANDO",statusActive:"ATIVO",statusSleeping:"DORMINDO",statusTracking:"MODO DE RASTREAMENTO",statusConverging:"CAÇADORES CONVERGINDO ({ticks} Ticks)",pauseTitle:"PAUSA",resume:"RETOMAR",victoryTitle:"Missão Cumprida",victoryText:"Você atravessou o vazio 3D com sucesso.",victoryCompletion:"MAPA COMPLETO: {percent}%",mapCompletion:"MAPA COMPLETO",victoryDeaths:"MORTES",victoryDegree:"GRAU DO LABIRINTO",victoryTime:"TEMPO DE CONCLUSÃO",playAgain:"JOGAR NOVAMENTE",mainMenu:"MENU PRINCIPAL",gameOverTitle:"Eliminado",gameOverText:"Você foi pego pelos caçadores do vazio.",saving:"SALVANDO...",generatingMaze:"GERANDO LABIRINTO...",hudMana:"Mana",victoryMana:"MANA COLETADA",msgManaSecured:"Mana absorvida ({collected}/{total})",teleportAnomaly:"ANOMALIA DE TELEPORTE",ticks:"TICKS",map3dInstructions:"Arraste para girar | Role para zoom | M para voltar",teleportWarning:"TELEPORTE",map:"MAPA",teleport:"TELEPORTE",teleportationLink:"LINK DE TELEPORTE",teleportJumpSector:"Pular para o Setor {floor}F?",teleportTargetGrid:"Coordenada Alvo: ({x}, {y})",teleportGo:"IR",teleportCancel:"CANCELAR",actionJellyPortal:"Portal do Deus Geléia",msgJellyPortalEarned:"Ganhei um poderzinho!",msgJellyPortalNotHere:"Aqui eu não posso...",msgJellyPortalActivated:"Portal do Deus Geléia!",msgJellyPortalNoPortalCount:"Preciso de mana...",msgJellyPortalNotSafe:"Não seguro, mas teleportável...",msgHunterReturned:"Essas coisas ressuscitam..."},ja:{gameTitle:"ヴォイド・エスケープ",gameCredits:"ベルナルド・ホドリゲス制作",activeHunters:"アクティブなハンター",activeTeleports:"アクティブなテレポート",activeKeys:"アクティブな鍵",availablePathfinders:"使用可能なパスファインダー",mazeDegree:"迷路の難易度",safeMode:"セーフモード",generateMaze:"ニューゲーム",continue:"つづきから",tutorialsMenu:"チュートリアル",tutorialsTitle:"チュートリアル",back:"戻る",tutorialSuccess:"成功！",nextTutorial:"次のチュートリアル",tutKeysTitle:"鍵の収集",tutHuntersTitle:"ハンター",start:"スタート",cancel:"キャンセル",confirm:"確認",pathfinderConfirmTitle:"パスファインダーを使用しますか？",pathfinderConfirmDesc:"最短ルートを表示するためにパスファインダーを1チャージ消費します。",degreeHint:"グリッドのサイズを調整します。値が大きいほど、より広く複雑な迷路になります。",safeModeHint:"有効にすると、迷路にハンターが出現しなくなります。",storyMsg1:"混沌崇拝の神秘的な教会!",storyMsg2:"混沌崇拝の最大の記念碑。",storyMsg3:"私はゼリー神の言葉に仕える巫女よ。",storyMsg4:"でも彼らの言葉は嘘!混沌なんて嘘っぱちなんだから!",storyMsg5:"だから追放の刑に処されたの…",storyMsg6:"虚空へと追放されて…",hudKeys:"鍵",hudPathfinders:"パスファインダー",hudFloor:"階層",hudVisited:"訪問済み",proximityDetector:"近接探知機",mapLegendTitle:"マップ凡例",legendVisited:"訪問済みの道",legendKnown:"既知の道",legendStart:"スタート地点",legendExit:"迷路の出口",legendHunter:"虚空のハンター",legendTeleport:"テレポート",legendElevator:"エレベーター",controlsHintTitle:"操作方法",actionMove:"移動 / 回転",actionElevator:"エレベーター 上昇 / 下降",actionMap:"3Dホログラフィックマップ",actionZoom:"ミニマップのズーム",msgVoidHuntersDetected:"虚空のハンターを検知",msgKeySecured:"鍵を入手 ({collected}/{total})",msgExitUnlocked:"出口の鍵が開いた",msgKeysRemaining:"残り{count}個の鍵",msgNoOtherActiveTeleport:"他に有効なテレポートはない",msgExitFound:"出口を発見",msgNoPathfindersRemaining:"パスファインダーが残っていない",msgExitNotFoundYet:"出口はまだ見つかっていない",msgSafePointTeleport:"安全地帯…テレポートする?",msgOopsNoisyShit:"あら…うるさいったらないわね!",msgWhereAmI:"ここどこ?",msgElevatorUp:"上る?",msgElevatorDown:"下る?",msgWhichWay:"どっちの道?",msgDidYouHearThat:"今の聞こえた?",msgIWasDetected:"しまった、見つかっちゃった!",msgFoundPathfinder:"パスファインダー発見!",msgWorldSaved:"世界を救っちゃった。さて、次は?",msgKeyDropped:"あ、鍵落としちゃった…",msgPlayerRespawn:"よしよし…どうやらまだ生きてるな…",statusLabel:"ハンターの状態:",statusScanning:"スキャン中",statusActive:"アクティブ",statusSleeping:"スリープ中",statusTracking:"追跡モード",statusConverging:"ハンターが接近中 ({ticks} ティック)",pauseTitle:"一時停止",resume:"再開",victoryTitle:"任務完了",victoryText:"3Dの虚空を無事に踏破した。",victoryCompletion:"マップ達成度: {percent}%",mapCompletion:"マップ達成度",victoryDeaths:"死亡数",victoryDegree:"迷路の次数",victoryTime:"クリア時間",playAgain:"もう一度プレイ",mainMenu:"メインメニュー",gameOverTitle:"終了",gameOverText:"虚空のハンターに捕まってしまった。",saving:"セーブ中…",generatingMaze:"迷路生成中...",hudMana:"マナ",victoryMana:"マナ回収量",msgManaSecured:"マナを獲得しました ({collected}/{total})",teleportAnomaly:"テレポート異常",ticks:"ティック",map3dInstructions:"ドラッグで回転 | スクロールでズーム | Mキーで戻る",teleportWarning:"テレポート",map:"マップ",teleport:"テレポート",teleportationLink:"テレポートリンク",teleportJumpSector:"{floor}階のセクターへ移動する?",teleportTargetGrid:"目標座標: ({x}, {y})",teleportGo:"移動",teleportCancel:"キャンセル",actionJellyPortal:"ゼリー神のポータル",msgJellyPortalEarned:"ちょっとした力を手に入れた！",msgJellyPortalNotHere:"ここでは使えないわ...",msgJellyPortalActivated:"ゼリー神のポータル！",msgJellyPortalNoPortalCount:"マナが必要よ...",msgJellyPortalNotSafe:"安全ではないけれど、テレポートはできるわ...",msgHunterReturned:"あいつら、蘇るの…？"},es:{gameTitle:"ESCAPE DEL VACÍO",gameCredits:"un juego de Bernard Rodrigues",activeHunters:"Cazadores Activos",activeTeleports:"Teletransportes Activos",activeKeys:"Llaves Activas",availablePathfinders:"Localizadores Disponibles",mazeDegree:"Grado del Laberinto",safeMode:"Modo Seguro",generateMaze:"NUEVA PARTIDA",continue:"CONTINUAR",tutorialsMenu:"TUTORIALES",tutorialsTitle:"TUTORIALES",back:"VOLVER",tutorialSuccess:"¡Éxito!",nextTutorial:"Siguiente Tutorial",tutKeysTitle:"Recolección de Llaves",tutHuntersTitle:"Cazadores",start:"INICIAR",cancel:"CANCELAR",confirm:"CONFIRMAR",pathfinderConfirmTitle:"¿Usar localizador?",pathfinderConfirmDesc:"Esto consumirá 1 carga de localizador para revelar la ruta más corta.",degreeHint:"Controla el tamaño de la cuadrícula. Valores más altos crean laberintos más grandes y complejos.",safeModeHint:"Cuando está activo, no aparecerán cazadores en el laberinto.",storyMsg1:"¡La mística iglesia del culto al caos!",storyMsg2:"El mayor monumento al culto del caos.",storyMsg3:"Soy una sacerdotisa de la palabra del dios Gelatina.",storyMsg4:"¡Pero su palabra es una mentira! ¡El caos es mentira!",storyMsg5:"Así que fui condenada al exilio...",storyMsg6:"Condenada al vacío...",hudKeys:"LLAVES",hudPathfinders:"LOCALIZADORES",hudFloor:"Piso",hudVisited:"Visitado",proximityDetector:"DETECTOR DE PROXIMIDAD",mapLegendTitle:"LEYENDA DEL MAPA",legendVisited:"Camino Visitado",legendKnown:"Camino Conocido",legendStart:"Punto de Partida",legendExit:"Salida del Laberinto",legendHunter:"Cazador del Vacío",legendTeleport:"Teletransporte",legendElevator:"Ascensor",controlsHintTitle:"AYUDA DE CONTROLES",actionMove:"Mover / Girar",actionElevator:"Ascensor Subir / Bajar",actionMap:"Mapa Holográfico 3D",actionZoom:"Zoom del Minimapa",msgVoidHuntersDetected:"Cazadores del Vacío Detectados",msgKeySecured:"Llave obtenida ({collected}/{total})",msgExitUnlocked:"Salida desbloqueada",msgKeysRemaining:"{count} llave(s) restante(s)",msgNoOtherActiveTeleport:"No hay otros teletransportes activos",msgExitFound:"Salida encontrada",msgNoPathfindersRemaining:"No quedan localizadores",msgExitNotFoundYet:"Salida aún no encontrada",msgSafePointTeleport:"Punto seguro... ¿Teletransportarse?",msgOopsNoisyShit:"Ups... ¡qué cosa tan ruidosa!",msgWhereAmI:"¿Dónde estoy?",msgElevatorUp:"¿Subir?",msgElevatorDown:"¿Bajar?",msgWhichWay:"¿Por dónde?",msgDidYouHearThat:"¿Escuchaste eso?",msgIWasDetected:"¡Rayos! Fui detectada.",msgFoundPathfinder:"¡Localizador encontrado!",msgWorldSaved:"Salvé el mundo. ¿Y ahora qué?",msgKeyDropped:"¡Ah! Se me cayó una llave...",msgPlayerRespawn:"Vale.. vale.. parece que sigo viva..",statusLabel:"ESTADO DEL CAZADOR:",statusScanning:"ESCANEANDO",statusActive:"ACTIVO",statusSleeping:"DURMIENDO",statusTracking:"MODO DE RASTREO",statusConverging:"CAZADORES CONVERGIENDO ({ticks} Ticks)",pauseTitle:"PAUSA",resume:"REANUDAR",victoryTitle:"Misión Cumplida",victoryText:"Atravesaste el vacío 3D con éxito.",victoryCompletion:"MAPA COMPLETADO: {percent}%",mapCompletion:"MAPA COMPLETADO",victoryDeaths:"MUERTES",victoryDegree:"GRADO DEL LABERINTO",victoryTime:"TIEMPO DE FINALIZACIÓN",playAgain:"JUGAR DE NUEVO",mainMenu:"MENÚ PRINCIPAL",gameOverTitle:"Eliminada",gameOverText:"Fuiste atrapada por los cazadores del vacío.",saving:"GUARDANDO...",generatingMaze:"GENERANDO LABIRINTO...",hudMana:"Maná",victoryMana:"MANÁ RECOLECTADA",msgManaSecured:"Maná asegurado ({collected}/{total})",teleportAnomaly:"ANOMALÍA DE TELETRANSPORTE",ticks:"TICKS",map3dInstructions:"Arrastra para girar | Desplázate para zoom | M para volver",teleportWarning:"TELETRANSPORTE",map:"MAPA",teleport:"TELETRANSPORTE",teleportationLink:"ENLACE DE TELETRANSPORTE",teleportJumpSector:"¿Saltar al Sector {floor}F?",teleportTargetGrid:"Coordenada Objetivo: ({x}, {y})",teleportGo:"IR",teleportCancel:"CANCELAR",actionJellyPortal:"Portal del Dios Gelatina",msgJellyPortalEarned:"¡Tengo un pequeno poder!",msgJellyPortalNotHere:"No puedo hacer esto aquí...",msgJellyPortalActivated:"¡Portal del Dios Gelatina!",msgJellyPortalNoPortalCount:"Necesito maná...",msgJellyPortalNotSafe:"No es seguro, pero se puede teletransportar...",msgHunterReturned:"Esas cosas resucitan..."}};let pn="en";function os(s){xa[s]?pn=s:pn="en"}function Sr(){return pn}function nm(){if(typeof navigator<"u"){const s=navigator.language||navigator.userLanguage;if(s){const t=s.toLowerCase();if(t.startsWith("pt")){os("ptBr");return}if(t.startsWith("ja")){os("ja");return}if(t.startsWith("es")){os("es");return}}}os("en")}nm();function Nt(s,t={},e=pn){var n,a;let i=((n=xa[e])==null?void 0:n[s])||((a=xa.en)==null?void 0:a[s])||s;return Object.keys(t).forEach(r=>{i=i.replace(`{${r}}`,t[r])}),i}function Sn(s=pn){typeof document<"u"&&document.querySelectorAll("[data-i18n]").forEach(e=>{const i=e.getAttribute("data-i18n");if(i){const n=Nt(i,{},s);n!==i&&(e instanceof HTMLInputElement&&e.type==="button"?e.value=n:e.textContent=n)}})}class dl{constructor(){N(this,"_data");this._data=[]}get size(){return this._data.length}push(t){this._data.push(t),this._bubbleUp(this._data.length-1)}pop(){const t=this._data[0],e=this._data.pop();return this._data.length>0&&e!==void 0&&(this._data[0]=e,this._siftDown(0)),t}_bubbleUp(t){for(;t>0;){const e=t-1>>1;if(this._data[e].f<=this._data[t].f)break;[this._data[e],this._data[t]]=[this._data[t],this._data[e]],t=e}}_siftDown(t){const e=this._data.length;for(;;){let i=t;const n=2*t+1,a=2*t+2;if(n<e&&this._data[n].f<this._data[i].f&&(i=n),a<e&&this._data[a].f<this._data[i].f&&(i=a),i===t)break;[this._data[i],this._data[t]]=[this._data[t],this._data[i]],t=i}}}const sm=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1}],ul=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];function vs(s,t,e,i,n,a){return Math.abs(s-i)+Math.abs(t-n)+Math.abs(e-a)}function fl(s,t,e,i,n=0,a=null){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return[];const r=new Map,o=new Map,c=`${s.x},${s.y},${s.z}`;o.set(c,0);const l=new dl;for(l.push({f:vs(s.x,s.y,s.z,t.x,t.y,t.z),node:s});l.size>0;){const u=l.pop();if(!u)continue;const{node:f}=u,p=`${f.x},${f.y},${f.z}`;if(f.x===t.x&&f.y===t.y&&f.z===t.z)return am(r,p);const m=o.get(p)??0;for(const{dx:T,dy:_,dz:h}of ul){const d=f.x+T,y=f.y+_,g=f.z+h;if(d<0||d>=i||y<0||y>=i||g<0||g>=i||a&&d===a.x&&y===a.y&&g===a.z)continue;const v=e[d*i*i+y*i+g];if(v===n||v===8)continue;if(h!==0){const S=f.z+h/2;if(e[f.x*i*i+f.y*i+S]===n)continue}const E=`${d},${y},${g}`,b=m+1;b<(o.get(E)??1/0)&&(r.set(E,f),o.set(E,b),l.push({f:b+vs(d,y,g,t.x,t.y,t.z),node:{x:d,y,z:g}}))}}return null}function am(s,t){const e=[];let i=t;for(;s.has(i);){const n=s.get(i);if(!n)break;const[a,r,o]=i.split(",").map(Number);e.push({x:a,y:r,z:o}),i=`${n.x},${n.y},${n.z}`}return e.reverse(),e}function om(s,t,e,i,n=0,a=1/0,r=null){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return 0;const o=new Map,c=`${s.x},${s.y},${s.z}`;o.set(c,0);const l=new dl;for(l.push({f:vs(s.x,s.y,s.z,t.x,t.y,t.z),node:s});l.size>0;){const u=l.pop();if(!u)continue;const{node:f}=u,p=`${f.x},${f.y},${f.z}`,m=o.get(p)??0;if(m>a)return 1/0;if(f.x===t.x&&f.y===t.y&&f.z===t.z)return m;for(const{dx:T,dy:_,dz:h}of ul){const d=f.x+T,y=f.y+_,g=f.z+h;if(d<0||d>=i||y<0||y>=i||g<0||g>=i||r&&d===r.x&&y===r.y&&g===r.z)continue;const v=e[d*i*i+y*i+g];if(v===n||v===8)continue;if(h!==0){const S=f.z+h/2;if(e[f.x*i*i+f.y*i+S]===n)continue}const E=`${d},${y},${g}`,b=m+1;b<(o.get(E)??1/0)&&(o.set(E,b),l.push({f:b+vs(d,y,g,t.x,t.y,t.z),node:{x:d,y,z:g}}))}}return 1/0}function rm(s,t,e,i,n=0,a=10){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return 0;const r=[{x:s.x,y:s.y,z:s.z,dist:0}];let o=0;const c=new Map;for(c.set(`${s.x},${s.y},${s.z}`,0);o<r.length;){const l=r[o++];if(!(l.dist>a))for(const{dx:u,dy:f,dz:p}of sm){const m=l.x+u,T=l.y+f,_=l.z+p;if(m<0||m>=i||T<0||T>=i||_<0||_>=i)continue;const h=e[m*i*i+T*i+_];if(h===n||h===8)continue;const d=`${m},${T},${_}`,g=_%2===0?0:1,v=l.dist+g;if(v<(c.get(d)??1/0)){if(c.set(d,v),m===t.x&&T===t.y&&_===t.z)return v;g===0?r.splice(o,0,{x:m,y:T,z:_,dist:v}):r.push({x:m,y:T,z:_,dist:v})}}}return 1/0}function lm(s,t,e,i,n,a){const r=[{x:s.x,y:s.y,z:s.z,path:[]}];let o=0;const c=new Uint8Array(i*i*i);for(c[s.x*i*i+s.y*i+s.z]=1;o<r.length;){const l=r[o++],u=`${l.x},${l.y},${l.z}`;if(!t.has(u))return l.path;const f=a(l.x,l.y,l.z,e,n,!1);for(const p of f){const m=p.x*i*i+p.y*i+p.z;c[m]||(c[m]=1,r.push({x:p.x,y:p.y,z:p.z,path:[...l.path,p]}))}}return null}class ra{constructor(t,e,i){N(this,"maze");N(this,"id");N(this,"history");N(this,"visitedNodes");N(this,"pathToTarget");N(this,"x");N(this,"y");N(this,"z");N(this,"visualX");N(this,"visualY");N(this,"visualZ");N(this,"state");N(this,"lastPos");N(this,"jellyTime");N(this,"respawnThresholdPercentage");N(this,"lowCanvas");N(this,"lctx");this.maze=t,this.id=i,this.history=[],this.visitedNodes=new Set,this.pathToTarget=[],e?(this.x=e.x,this.y=e.y,this.z=e.z,this.visualX=e.x,this.visualY=e.y,this.visualZ=e.z,this.state="WANDERING",this.lastPos={x:this.x,y:this.y,z:this.z},this.visitedNodes.add(`${this.x},${this.y},${this.z}`)):(this.x=null,this.y=null,this.z=null,this.visualX=null,this.visualY=null,this.visualZ=null,this.state="SLEEP",this.lastPos=null),this.jellyTime=0,this.respawnThresholdPercentage=null,typeof document<"u"&&(this.lowCanvas=document.createElement("canvas"),this.lowCanvas.width=64,this.lowCanvas.height=64,this.lctx=this.lowCanvas.getContext("2d",{willReadFrequently:!0}))}generateCloudTexture(t=.016){if(this.state==="SLEEP"||(this.jellyTime+=t,typeof document>"u"||!this.lctx))return;const e=64,i=this.lctx;i.globalCompositeOperation="destination-out",i.fillStyle="rgba(0, 0, 0, 0.22)",i.fillRect(0,0,e,e),i.globalCompositeOperation="source-over";const n=this.jellyTime;try{const a=i.getImageData(0,0,e,e),r=a.data;for(let o=0;o<e;o++)for(let c=0;c<e;c++){const l=c-e/2,u=o-e/2,f=Math.sqrt(l*l+u*u),p=Math.sin(n*1.5+c*.08)*2.5,m=e*.35+p;if(f<m+Math.random()*1.5){const T=90+Math.floor(Math.random()*45),_=10+Math.floor(Math.random()*20),h=140+Math.floor(Math.random()*60),d=(o*e+c)*4;r[d]=T,r[d+1]=_,r[d+2]=h,r[d+3]=255}}i.putImageData(a,0,0)}catch{}if(Math.random()<.04){i.fillStyle=Math.random()<.7?"#ffffff":"#b3ffff";const a=e/2-8+Math.random()*16,r=e/2-8+Math.random()*16;i.fillRect(a,r,2+Math.random()*3,4+Math.random()*10)}if(Math.random()<.12){const a=Math.floor(Math.random()*3)+1,r=["#00ff66","#ff0055","#00ccff","#ffff00","#ffffff"];for(let o=0;o<a;o++){const c=Math.floor(Math.random()*e),l=Math.floor(Math.random()*e),u=c-e/2,f=l-e/2;if(Math.sqrt(u*u+f*f)<e*.32){const m=Math.floor(Math.random()*4)+2,T=Math.floor(Math.random()*2)+1;i.fillStyle=r[Math.floor(Math.random()*r.length)],i.fillRect(c,l,m,T)}}}if(Math.random()<.08){const a=Math.floor(Math.random()*e),r=Math.floor(Math.random()*6)+2,o=Math.floor(Math.random()*6)-3;try{const c=i.getImageData(0,a,e,r);i.clearRect(0,a,e,r),i.putImageData(c,o,a)}catch{}}}move(t,e,i){if(this.state==="SLEEP"||this.state==="DEAD_BY_JELLY"||this.x===null||this.y===null||this.z===null)return;const n=this.getValidNeighbors(e,i);if(n.length===0)return;const a=Math.round(Math.cbrt(e.length)),r=e.get?e.get(this.x,this.y,this.z):e[this.x*a*a+this.y*a+this.z]??0;(r===i.VISITED||r===i.JELLY_PORTAL)&&this.state!=="TELEPORT_TRACKING"&&this.state!=="TRACKING"&&(this.state="TRACKING",this.pathToTarget=[],this.visitedNodes.clear(),this.visitedNodes.add(`${this.x},${this.y},${this.z}`));let o;if(this.pathToTarget.length>0){const c=this.pathToTarget[0],l=e[c.x*a*a+c.y*a+c.z];(this.state==="TRACKING"?l===i.VISITED||l===i.START||l===i.EXIT||l===i.JELLY_PORTAL:l!==i.WALL)?o=this.pathToTarget.shift():this.pathToTarget=[]}if(!o)if(this.state==="TELEPORT_TRACKING")o=void 0;else{let c=this.findPathToNearestUnvisited(e,i);if((!c||c.length===0)&&(this.visitedNodes.clear(),this.visitedNodes.add(`${this.x},${this.y},${this.z}`),c=this.findPathToNearestUnvisited(e,i)),c&&c.length>0)this.pathToTarget=c,o=this.pathToTarget.shift();else{const l=this.lastPos||{x:this.x,y:this.y,z:this.z},u=n.filter(f=>f.x!==l.x||f.y!==l.y||f.z!==l.z);o=u.length>0?u[Math.floor(Math.random()*u.length)]:n[0]}}o&&(this.history.push({x:this.x,y:this.y,z:this.z}),this.history.length>2&&this.history.shift(),this.lastPos={x:this.x,y:this.y,z:this.z},this.x=o.x,this.y=o.y,this.z=o.z,this.visitedNodes.add(`${this.x},${this.y},${this.z}`))}findPathToTarget(t,e,i){const n=Math.round(Math.cbrt(e.length));return fl({x:this.x,y:this.y,z:this.z},t,e,n,i.WALL,this.maze.startPos)}findPathToNearestUnvisited(t,e){const i=Math.round(Math.cbrt(t.length));return lm({x:this.x,y:this.y,z:this.z},this.visitedNodes,t,i,e,(n,a,r,o,c)=>this.getValidNeighbors(o,c,n,a,r,this.state==="TRACKING"))}getValidNeighbors(t,e,i=this.x,n=this.y,a=this.z,r=this.state==="TRACKING"){const o=[],c=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}],l=Math.round(Math.cbrt(t.length));for(const u of c){const f=i+u.dx,p=n+u.dy,m=a+u.dz;if(f>=0&&f<l&&p>=0&&p<l&&m>=0&&m<l){const T=Math.floor(this.maze.startPos.x),_=Math.floor(this.maze.startPos.y),h=this.maze.startPos.z,d=this.maze.inactiveTeleportPos&&this.maze.inactiveTeleportPos.x===T&&this.maze.inactiveTeleportPos.y===_&&this.maze.inactiveTeleportPos.z===h;if(f===T&&p===_&&m===h&&!d)continue;const y=t[f*l*l+p*l+m];if(y===e.EXIT)continue;if(y!==e.WALL&&y!==8){if(u.dz!==0){const g=a+u.dz/2;if(t[i*l*l+n*l+g]===e.WALL)continue}r?(y===e.VISITED||y===e.START||y===e.EXIT||y===e.JELLY_PORTAL||this.maze.visitedCells&&this.maze.visitedCells.has(`${f},${p},${m}`))&&o.push({x:f,y:p,z:m}):o.push({x:f,y:p,z:m})}}}return o}}const Di=[{id:"tutorial_keys",title:{en:"Key Collection",ptBr:"Coleta de Chaves",ja:"鍵集め",es:"Recolección de Llaves"},description:{en:"Collect all available keys to unlock the exit portal.{img}The number of remaining keys is displayed in the game info panel.{img}Once all keys are collected, the exit portal will be unlocked.{img}",ptBr:"Capture todas as chaves disponíveis para liberar a saída.{img}O número de chaves restantes é exibido no painel de informações do jogo.{img}Ao coletar todas as chaves, o portal de saída será liberado.{img}",ja:"すべての鍵を集めて、出口ポータルを開放しよう。{img}残りの鍵の数は、ゲームの情報パネルに表示される。{img}すべての鍵を集めると、出口ポータルが開放される。{img}",es:"Recoge todas las llaves disponibles para liberar la salida.{img}El número de llaves restantes se muestra en el panel de información del juego.{img}Una vez recogidas todas las llaves, se liberará el portal de salida.{img}"},images:["assets/images/tutorials/tutorial1-1.png","assets/images/tutorials/tutorial1-2.png","assets/images/tutorials/tutorial1-3.png"],layers:[["#######","#######","#######","#######","#######"],["#######","S....K#","###.###","#K....E","#######"],["#######","#######","#######","#######","#######"]],pathfinders:0,mana:0,jellyPortals:0},{id:"tutorial_elevators",title:{en:"Elevators",ptBr:"Elevadores",ja:"エレベーター",es:"Ascensores"},description:{en:`Use the elevators to reach the floors above and below.{img}{img}{img}Press E (desktop)/Y (gamepad) to go up and Q (desktop)/A (gamepad) to go down.
On mobile devices, use the panel at the bottom of the screen.{img}`,ptBr:`Utilize os elevadores para visitar os andares adjacentes.{img}{img}{img}Utilize E (desktop)/Y (gamepad) para subir e Q (desktop)/A (gamepad) para descer.
Em dispositivos móveis, use o painel da parte inferior da tela.{img}`,ja:`エレベーターを使って、上下の階を移動しよう。{img}{img}{img}E(デスクトップ)/Y(ゲームパッド)で上昇、Q(デスクトップ)/A(ゲームパッド)で下降できる。
モバイル端末では、画面下部のパネルを使おう。{img}`,es:`Utiliza los ascensores para visitar los pisos adyacentes.{img}{img}{img}Presiona E (escritorio)/Y (mando) para subir y Q (escritorio)/A (mando) para bajar.
En dispositivos móviles, usa el panel en la parte inferior de la pantalla.{img}`},images:["assets/images/tutorials/tutorial2-1.png","assets/images/tutorials/tutorial2-2.png","assets/images/tutorials/tutorial2-3.png","assets/images/tutorials/tutorial2-4.png"],layers:[["#######","#######","#######","#######","#######"],["#######","S.....E","#######","#######","#######"],["#######","###.###","#######","#######","#######"],["#######","#K...K#","#######","#######","#######"],["#######","###.###","#######","#######","#######"],["#######","###.###","###.###","###K###","#######"]],pathfinders:0,mana:0,jellyPortals:0},{id:"tutorial_teleport",title:{en:"Teleportation",ptBr:"Teleporte",ja:"テレポート",es:"Teletransporte"},description:{en:"Use the teleporters to move between different areas of the level.{img}{img}{img} Step onto a teleporter block, activate it with an action button, then select another available teleporter to warp there.{img}Teleporters are noisy and draw the hunters' attention.{img}Once activated, all hunters will converge on the newly chosen position for a period of time. Keep an eye on the hunters' status panel.{img}After a trip, teleporters will become temporarily unavailable and will no longer be safe points.{img}",ptBr:"Utilize os teleportes para se mover entre diferentes áreas do nível.{img}{img}{img} Ao pisar sobre um bloco de teleporte, acione-o com um dos botões de ação e selecione outro teleporte disponível para se mover para ele.{img}Teleportes são barulhentos e chamam a atenção dos hunters.{img}Uma vez ativados, todos os caçadores irão convergir para a nova posição escolhida durante um período de tempo. Acompanhe o painel de status dos caçadores.{img}Após uma viagem, os teleportes ficarão temporariamente indisponíveis e deixarão de ser pontos seguros.{img}",ja:"テレポーターを使えば、レベル内の離れたエリアへ移動できる。{img}{img}{img}テレポートブロックの上に乗ってアクションボタンで起動し、行き先のテレポーターを選ぼう。{img}テレポーターは音を立てるため、ハンターに気づかれてしまう。{img}起動すると、しばらくの間すべてのハンターが選択した新しい地点に集まってくる。ハンターのステータスパネルを確認しよう。{img}移動した後、そのテレポーターは一時的に使用できなくなり、安全地帯ではなくなる。{img}",es:"Utiliza los teletransportes para moverte entre diferentes áreas del nivel.{img}{img}{img} Párate en un bloque de teletransporte, actívalo con uno de los botones de acción y selecciona otro teletransportador disponible para moverte a él.{img}Los teletransportadores son ruidosos y llaman la atención de los cazadores.{img}Una vez activados, todos los cazadores convergerán hacia la nueva posición elegida durante un período de tiempo. Presta atención al panel de estado de los cazadores.{img}Tras un viaje, los teletransportadores quedarán temporalmente inhabilitados y dejarán de ser puntos seguros.{img}"},images:["assets/images/tutorials/tutorial3-1.png","assets/images/tutorials/tutorial3-2.png","assets/images/tutorials/tutorial3-3.png","assets/images/tutorials/tutorial3-4.png","assets/images/tutorials/tutorial3-5.png","assets/images/tutorials/tutorial3-6.png","assets/images/tutorials/tutorial3-7.png"],layers:[["#######","#######","#######","#######","#######"],["#######","S..#.T#","##.#.##","#K.#..E","#######"],["#######","###.###","#######","#######","#######"]],pathfinders:0,mana:0,jellyPortals:0,revealed:!0},{id:"tutorial_hunters",title:{en:"Hunters",ptBr:"Caçadores",ja:"ハンター",es:"Cazadores"},description:{en:`Avoid the hunters or use the environment to your advantage.{img}The entrance and teleporters are safe points.{img}If you die, your character will drop a key at the location of death.{img}They will be sent back to the last safe point visited.
Keep an eye on the Proximity Detector!{img}And watch the hunters' status panel!{img}The search modes are:
- SLEEPING: void hunters are not active on the map. They will appear once the map reaches a certain completion percentage;
- SCANNING: void hunters search the entire map for a position visited by the player;
- TRACKING MODE: void hunters narrow their search area to positions visited by the player only;
- HUNTERS CONVERGING: when a teleporter is activated, the noise draws the void hunters' attention, and they head toward the destination teleporter;
- INACTIVE: the default mode for Safe Mode maps. There will be no void hunters in these matches.`,ptBr:`Evite os caçadores ou use o ambiente a seu favor.{img}A entrada e teleportes são pontos seguros.{img}Se você morrer, seu personagem irá deixar uma chave no local da morte.{img}Ele será transportado para o último ponto seguro visitado.
Fique atento ao Detector de Proximidade!{img}E de olho no painel de status dos caçadores!{img}Os métodos de busca são:
- DORMINDO: Os void hunters não estão ativos no mapa. Eles irão aparecer após certa conclusão do mapa;
- ESCANEANDO: Os void hunters visitam todo o mapa em busca de uma posição visitada pelo jogador;
- MODO DE RESTREAMENTO: Os void hunters reduzem a área de busca para apenas posições visitadas pelo jogador;
- HUNTERS CONVERGINDO: Quando um temeporte é ativado, o som chama a atenção dos void hunters, que partem para a direção do teleporte de destino;
- INATIVO: é o modo padrão de mapas em Modo Seguro. Não existirão void hunters nessas partidas.`,ja:`ハンターを避けるか、周囲の地形をうまく利用しよう。{img}入り口とテレポーターは安全地帯だ。{img}死亡すると、キャラクターはその場所に鍵を落としてしまう。{img}そして、最後に訪れた安全地帯へ送り返される。
近接検知機に注意しよう!{img}ハンターのステータスパネルも忘れずにチェックしよう!{img}探索モードは以下の通りだ:
- 待機中: ボイドハンターはマップ上で活動していない。マップの進行度が一定の割合に達すると出現する;
- 探索中: ボイドハンターがマップ全体を巡回し、プレイヤーが訪れた地点を探している;
- 追跡モード: ボイドハンターの捜索範囲が、プレイヤーが訪れた地点のみに絞られる;
- ハンター収束中: テレポーターが起動すると、その音でボイドハンターに気づかれ、目的地のテレポーターへ向かってくる;
- 非アクティブ: セーフモードのマップにおける標準状態。この場合、ボイドハンターは一切出現しない。`,es:`Evita a los cazadores o utiliza el entorno a tu favor.{img}La entrada y los teletransportadores son puntos seguros.{img}Si mueres, tu personaje dejará una llave en el lugar de la muerte.{img}Será transportado de vuelta al último punto seguro visitado.
¡Presta atención al Detector de Proximidad!{img}¡Y no pierdas de vista el panel de estado de los cazadores!{img}Los modos de búsqueda son:
- DURMIENDO: los cazadores del vacío no están activos en el mapa. Aparecerán una vez que el mapa alcance cierto porcentaje de finalización;
- ESCANEANDO: los cazadores del vacío recorren todo el mapa en busca de una posición visitada por el jugador;
- MODO DE RASTREO: los cazadores del vacío reducen su área de búsqueda solo a las posiciones visitadas por el jugador;
- CAZADORES CONVERGIENDO: cuando se activa un teletransportador, el sonido llama la atención de los cazadores del vacío, que se dirigen hacia el teletransportador de destino;
- INACTIVO: es el modo predeterminado de los mapas en Modo Seguro. No habrá cazadores del vacío en estas partidas.`},images:["assets/images/tutorials/tutorial4-1.png","assets/images/tutorials/tutorial4-2.png","assets/images/tutorials/tutorial4-3.png","assets/images/tutorials/tutorial4-4.png"],layers:[["#######","#######","#######","#######","#######","#######","#######"],["#######","S..H..E","###.###","#K...T#","###.###","#T...K#","#######"],["#######","#######","#######","#######","#######","#######","#######"]],pathfinders:0,mana:0,jellyPortals:0,revealed:!0,hunterBehavior:{static:!1,respawn:!0,fixed:!0}},{id:"tutorial_map_and_zoom",title:{en:"Map and Zoom",ptBr:"Mapa e Zoom",ja:"マップとズーム",es:"Mapa y Zoom"},description:{en:`Some maps may be too large to fit on the screen.{img}Use the map and zoom to navigate.
The map can be toggled with the Z key (desktop) or the SELECT button (gamepad).
On mobile devices, use the panel at the bottom of the screen.{img}{img}Zoom can be toggled with the Z key (desktop) or the B button (gamepad).
On mobile devices, use the magnifying glass at the bottom right of the screen.{img}`,ptBr:`Alguns mapas podem ser grandes demais para caber na tela.{img}Use o mapa e o zoom para se localizar.
O mapa pode ser ativado através da tela Z (desktop) ou do botão SELECT (gamepad).
Em dispositivos móveis, use o painel na parte inferior da tela.{img}{img}O zoom pode ser alternado utilizando a tecla Z (desktop) ou o botão B (gamepad).
Em dispositivos móveis, use a lupa na parte inferior direita da tela.{img}`,ja:`マップによっては画面に収まらないほど広い場合がある。{img}マップとズーム機能を使って移動しよう。
マップはZキー(デスクトップ)またはSELECTボタン(ゲームパッド)で切り替えられる。
モバイル端末では、画面下部のパネルを使おう。{img}{img}ズームはZキー(デスクトップ)またはBボタン(ゲームパッド)で切り替えられる。
モバイル端末では、画面右下の虫眼鏡アイコンを使おう。{img}`,es:`Algunos mapas pueden ser demasiado grandes para caber en la pantalla.{img}Utiliza el mapa y el zoom para navegar.
El mapa se puede activar con la tecla Z (escritorio) o el botón SELECT (mando).
En dispositivos móviles, usa el panel en la parte inferior de la pantalla.{img}{img}El zoom se puede alternar con la tecla Z (escritorio) o el botón B (mando).
En dispositivos móviles, usa la lupa en la parte inferior derecha de la pantalla.{img}`},images:["assets/images/tutorials/tutorial5-1.png","assets/images/tutorials/tutorial5-2.png","assets/images/tutorials/tutorial5-3.png","assets/images/tutorials/tutorial5-4.png"],layers:[["##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################"],["##############################","S.............T..............E","##############.###############","############A#.#A#############","##############.###############","##############.###############","##############.###############","############A#.#A#############","##############.###############","##############.###############","##############.###############","############A#.#A#############","##############.###############","##############.###############","##############.###############","############A#.#A#############","##############.###############","##############.###############","##############.###############","############A#.#A#############","##############.###############","##############.###############","##############.###############","############A#.#A#############","##############.###############","##############.###############","####A###A###A#.#A###A###A#####","##############.###############","#K............T.............K#","##############################"],["##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################"]],pathfinders:0,mana:0,jellyPortals:0},{id:"tutorial_mana_and_jelly_portals",title:{en:"Mana and Jelly Portals",ptBr:"Mana e Portais de Geleia",ja:"マナとジェリーのポータル",es:"Mana y Portales de Gelatina"},description:{en:"Collect mana as you explore the maze.{img}For every 10 mana collected, you gain one charge of power.{img}These charges can be used to activate your secret ability: the Portal of the Jelly God!{img}Use R (desktop)/RB (gamepad) to activate this ability, or use the activation button in the bottom left corner on mobile devices.{img}This ability adds a teleport portal at the player's current position (a save point, but not a safe one).{img}It also destroys all void hunters in the area of effect.{img}Previously visited points will be forgotten.{img}{img}The Portal of the Jelly God's area of effect reaches 5 tiles away (Manhattan distance; diagonals are not taken into account).{img}",ptBr:"Colete mana durante sua exploração do loabirinto.{img}A cada 10 mana coletado, você ganha uma carga de poderzinho.{img}Essas cargas podem ser utilizadas para ativar sua habilidade secreta: o Portal do Deus Geleia!{img}Use R (desktop)/RB (gamepad) para ativar essa habilidade ou utilize o botão de ativação no canto inferior esquerdo, em dispositivos mobile.{img}Essa habilidade adiciona um portal de teleporte na posição atual do jogador (um ponto de salvamento, mas não seguro).{img}Além disso, destrói todos os void hunters na área de efeito.{img}Pontos visitados anteriormente serão esquecidos.{img}{img}A área de atuação do Portal do Deus Geleia é de 5 quadros de distância (distância de Manhattan; diagonais não são levadas em consideração).{img}",ja:"迷路を探索しながらマナを集めよう。{img}マナを10集めるごとに、パワーのチャージが1つ手に入る。{img}このチャージを使えば、秘密の能力——ジェリーの神のポータル——を発動できる!{img}このアビリティはR(デスクトップ)/RB(ゲームパッド)で発動できる。モバイル端末では、画面左下の発動ボタンを使おう。{img}この能力は、プレイヤーの現在地にテレポートポータルを追加する(セーブポイントだが安全とは限らない)。{img}さらに、効果範囲内のボイドハンターをすべて消し去る。{img}一度訪れたポイントは忘れられてしまう。{img}{img}ジェリーの神のポータルの効果範囲は、5マス以内だ(マンハッタン距離。斜め方向は考慮されない)。{img}",es:"Recoge mana mientras exploras el laberinto.{img}Por cada 10 de mana recogido, obtienes una carga de poder.{img}Estas cargas pueden usarse para activar tu habilidad secreta: ¡el Portal del Dios de la Gelatina!{img}Usa R (escritorio)/RB (mando) para activar esta habilidad, o utiliza el botón de activación en la esquina inferior izquierda en dispositivos móviles.{img}Esta habilidad añade un portal de teletransporte en la posición actual del jugador (un punto de guardado, pero no seguro).{img}Además, destruye a todos los cazadores del vacío en el área de efecto.{img}Los puntos visitados anteriormente se olvidarán.{img}{img}El área de efecto del Portal del Dios de la Gelatina alcanza 5 casillas de distancia (distancia de Manhattan; las diagonales no se toman en cuenta).{img}"},images:["assets/images/tutorials/tutorial6-1.png","assets/images/tutorials/tutorial6-2.png","assets/images/tutorials/tutorial6-3.png","assets/images/tutorials/tutorial6-4.png","assets/images/tutorials/tutorial6-5.png","assets/images/tutorials/tutorial6-6.png","assets/images/tutorials/tutorial6-7.png","assets/images/tutorials/tutorial6-8.png","assets/images/tutorials/tutorial6-9.png"],layers:[["######","######","######","######","######"],["######","S...M#","##.###","#M..HE","######"],["######","######","######","######","######"]],pathfinders:0,mana:8,jellyPortals:0,hunterBehavior:{static:!0,respawn:!1,fixed:!0}},{id:"tutorial_pathfinder",title:{en:"Pathfinding",ptBr:"Localizador de Caminhos",ja:"経路探索",es:"Localizador de Caminos"},description:{en:`Use pathfinders to find the shortest route to teleporters, unvisited adjacent blocks, or the maze exit.{img}The shortest path to the destination will be highlighted on both the maze and the map.{img}To activate a pathfinder, simply click on the point of interest, or navigate to it and press space or enter (desktop) or X (gamepad).
A confirmation message will be shown.{img}The number of available pathfinders will be displayed on the game's info panel.{img}`,ptBr:`Use localizadores para encontrar a rota mais curta até teleportes, blocos adjacentes não visitados ou a saída do labirinto.{img}O caminho mais curto até o destino será destacado no labirinto e no mapa.{img}Para ativar um localizador, basta clicar sobre o ponto de interesse ou navegar e pressionar espaço ou enter (desktop) ou X (gamepad).
Uma mensagem de confirmação será exibida.{img}O número de localizadores disponíveis será exibido no painel de informações do jogo.{img}`,ja:`パスファインダーを使って、テレポーター、まだ訪れていない隣接ブロック、または迷路の出口までの最短ルートを見つけよう。{img}目的地までの最短経路は、迷路とマップの両方でハイライト表示される。{img}パスファインダーを起動するには、対象の地点をクリックするか、そこまで移動してスペースキーかEnterキー(デスクトップ)、またはXボタン(ゲームパッド)を押そう。
確認メッセージが表示される。{img}利用可能なパスファインダーの数は、ゲームの情報パネルに表示される。{img}`,es:`Utiliza los localizadores para encontrar la ruta más corta hacia teletransportadores, bloques adyacentes no visitados o la salida del laberinto.{img}El camino más corto hasta el destino se resaltará tanto en el laberinto como en el mapa.{img}Para activar un localizador, simplemente haz clic sobre el punto de interés, o navega hasta él y presiona espacio o intro (escritorio) o X (mando).
Se mostrará un mensaje de confirmación.{img}El número de localizadores disponibles se mostrará en el panel de información del juego.{img}`},images:["assets/images/tutorials/tutorial7-1.png","assets/images/tutorials/tutorial7-2.png","assets/images/tutorials/tutorial7-3.png","assets/images/tutorials/tutorial7-4.png"],layers:[["###########","###########","###########","###########","###########","###########","###########"],["###########","#...#.....#","#.#######.#","#.#...#.#.#","#.#.#.#.#.#","#.#.#.#.#.E","###########"],["###########","###.#.#####","###########","#######.###","###########","###.#######","###########"],["###########","#.#.#.###.#","#.#.#.###.#","#...#.#...#","#.#.#.###.#","#.#.#.###.#","###########"],["###########","#.#######.#","###########","###########","###########","#####.###.#","###########"],["###########","#.........#","#.###.###.#","#.#A#.#A#.#","#.#A#.#A#.#","S.###.###.#","###########"],["###########","###########","###########","###########","###########","###########","###########"]],pathfinders:5,mana:0,jellyPortals:0,revealed:!0}];function xr(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function cm(s,t){const e=c=>c.replace(/\n/g,"<br/>").replace(/\\n/g,"<br/>");if(!t||t.length===0||!s.includes("{img}"))return e(xr(s));const i=s.split("{img}"),n=[];let a=0;i[0]&&n.push({type:"text",content:i[0]});let r=[];for(let c=1;c<i.length;c++){a<t.length&&r.push(t[a++]);const l=i[c];l.trim()===""||(r.length>0&&(n.push({type:"image-group",content:"",images:r}),r=[]),n.push({type:"text",content:l}))}r.length>0&&n.push({type:"image-group",content:"",images:r});let o="";for(let c=0;c<n.length;c++){const l=n[c];if(l.type==="text")o+=`<span>${e(xr(l.content))}</span>`;else if(l.type==="image-group"&&l.images&&l.images.length>0){const u=c>0&&n[c-1].type==="text",f=c+1<n.length&&n[c+1].type==="text",p=u?"<br/>":"",m=f?"<br/>":"";if(l.images.length===1)o+=`${p}<img src="${l.images[0]}" class="tutorial-desc-image" alt="Tutorial Screenshot" />${m}`;else{let T="";for(const _ of l.images)T+=`<img src="${_}" class="tutorial-desc-image-in-group" alt="Tutorial Screenshot" />`;o+=`${p}<div class="tutorial-desc-image-group">${T}</div>${m}`}}}return o}class br{constructor(t,e,i=null){N(this,"n");N(this,"branchingFactor");N(this,"size");N(this,"seed");N(this,"random");N(this,"matrix");N(this,"TYPES");N(this,"startPos");N(this,"tutorialHunterSpawns",[]);const n=t!==void 0?t:$.MAZE_DEGREE!==void 0?$.MAZE_DEGREE:8,a=e!==void 0?e:$.BRANCHING_FACTOR!==void 0?$.BRANCHING_FACTOR:.2;this.n=Math.max(3,Math.min(16,n)),this.branchingFactor=Math.max(0,Math.min(1,a)),this.size=2*this.n+1,i!=null?(this.seed=i,this.random=this.createSeededRandom(i)):(this.seed=null,this.random=Math.random),this.matrix=this.initMatrix(),this.TYPES={WALL:0,PATH:1,VISITED:2,START:3,EXIT:4,ELEVATOR_VISITED:5,TELEPORT:6,KEY:7,STATUE:8,MANA:9,JELLY_PORTAL:10},this.startPos={x:$.PLAYER_START_X!==void 0?$.PLAYER_START_X:.5,y:$.PLAYER_START_Y!==void 0?$.PLAYER_START_Y:1.5,z:0}}createSeededRandom(t){let e=0;if(typeof t=="string")for(let i=0;i<t.length;i++)e=Math.imul(31,e)+t.charCodeAt(i)|0;else e=t|0;return function(){let i=e+=1831565813;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}initMatrix(){return new Int8Array(this.size*this.size*this.size)}_idx(t,e,i){return t*this.size*this.size+e*this.size+i}generate(){const t=[],e=1+2*Math.floor(this.random()*this.n),i=1+2*Math.floor(this.random()*this.n),n=1+2*Math.floor(this.random()*this.n);for(this.matrix[this._idx(e,i,n)]=this.TYPES.PATH,t.push({x:e,y:i,z:n});t.length>0;){let o=this.random()>this.branchingFactor?t.length-1:Math.floor(this.random()*t.length);const c=t[o],l=this.getUnvisitedNeighbors(c.x,c.y,c.z);if(l.length>0){const u=l[Math.floor(this.random()*l.length)];this.matrix[this._idx(u.x,u.y,u.z)]=this.TYPES.PATH,this.matrix[this._idx((c.x+u.x)/2,(c.y+u.y)/2,(c.z+u.z)/2)]=this.TYPES.PATH,t.push(u)}else t.splice(o,1)}this.setEntryAndExit(),this.placeTeleports(),this.placeKeys(),this.applyBraid(),this.placeStatues(),this.placeManas();const a=this.size,r=this.matrix;return r.size=a,r.get=(o,c,l)=>r[o*a*a+c*a+l],r.set=(o,c,l,u)=>{r[o*a*a+c*a+l]=u},r}getUnvisitedNeighbors(t,e,i){const n=[],a=[{dx:2,dy:0,dz:0},{dx:-2,dy:0,dz:0},{dx:0,dy:2,dz:0},{dx:0,dy:-2,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const r of a){const o=t+r.dx,c=e+r.dy,l=i+r.dz;this.isValid(o,c,l)&&this.matrix[this._idx(o,c,l)]===this.TYPES.WALL&&n.push({x:o,y:c,z:l})}return n}isValid(t,e,i){return t>0&&t<this.size-1&&e>0&&e<this.size-1&&i>0&&i<this.size-1}setEntryAndExit(){const t=1+2*Math.floor(this.random()*this.n);this.matrix[this._idx(1,1,t)]=this.TYPES.PATH,this.matrix[this._idx(0,1,t)]=this.TYPES.TELEPORT,this.startPos={x:$.PLAYER_START_X!==void 0?$.PLAYER_START_X:.5,y:$.PLAYER_START_Y!==void 0?$.PLAYER_START_Y:1.5,z:t};const e=1+2*Math.floor(this.random()*this.n),i=2*this.n-1;this.matrix[this._idx(i,i,e)]=this.TYPES.PATH,this.matrix[this._idx(2*this.n,i,e)]=this.TYPES.EXIT}_findExitPos(){for(let t=0;t<this.size;t++)for(let e=0;e<this.size;e++)for(let i=0;i<this.size;i++)if(this.matrix[this._idx(t,e,i)]===this.TYPES.EXIT)return{x:t,y:e,z:i};return{x:2*this.n,y:2*this.n-1,z:this.startPos.z}}_collectDeadEndsAndPaths(){const t=[],e=[],i=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1}];for(let n=1;n<this.size-1;n++)for(let a=1;a<this.size-1;a++)for(let r=1;r<this.size-1;r++){if(this.matrix[this._idx(n,a,r)]!==this.TYPES.PATH)continue;const o=r+1<this.size&&this.matrix[this._idx(n,a,r+1)]!==this.TYPES.WALL,c=r-1>=0&&this.matrix[this._idx(n,a,r-1)]!==this.TYPES.WALL;if(o||c)continue;let l=0;for(const u of i){const f=n+u.dx,p=a+u.dy,m=r+u.dz;f>=0&&f<this.size&&p>=0&&p<this.size&&m>=0&&m<this.size&&this.matrix[this._idx(f,p,m)]!==this.TYPES.WALL&&l++}(l===1?t:e).push({x:n,y:a,z:r})}return{deadEnds:t,normalPaths:e}}_greedyFill(t,e,i,n,a){const r={x:0,y:1,z:this.startPos.z},o=this._findExitPos(),c=(f,p)=>Math.abs(f.x-p.x)+Math.abs(f.y-p.y)+Math.abs(f.z-p.z);let l=4,u=4;for(;t.length<i&&l>0;){a&&(t.length=0);const f=e.filter(p=>c(p,r)<l||c(p,o)<l?!1:!n.includes(this.matrix[this._idx(p.x,p.y,p.z)]));for(;t.length<i;){let p=null,m=-1;for(const T of f){if(t.some(h=>h.x===T.x&&h.y===T.y&&h.z===T.z))continue;let _=1/0;for(const h of t){const d=c(T,h);d<_&&(_=d)}if(_>=u){const h=Math.min(c(T,r),c(T,o),_);h>m&&(m=h,p=T)}}if(p)t.push(p);else break}t.length<i&&(u>1?u--:l--)}}placeTeleports(){const t=$.getTeleportCount(this.n),{deadEnds:e,normalPaths:i}=this._collectDeadEndsAndPaths(),n=[];this._greedyFill(n,e,t,[],!0),n.length<t&&this._greedyFill(n,i,t,[],!1);for(const a of n)this.matrix[this._idx(a.x,a.y,a.z)]=this.TYPES.TELEPORT}placeKeys(){const t=$.getKeyCount(this.n),{deadEnds:e,normalPaths:i}=this._collectDeadEndsAndPaths(),n=[];this._greedyFill(n,e,t,[this.TYPES.TELEPORT],!0),n.length<t&&this._greedyFill(n,i,t,[this.TYPES.TELEPORT],!1);for(const a of n)this.matrix[this._idx(a.x,a.y,a.z)]=this.TYPES.KEY}applyBraid(){const t=this.size,e=[];for(let r=1;r<t-1;r++)for(let o=1;o<t-1;o++)for(let c=1;c<t-1;c++)if(this.matrix[this._idx(r,o,c)]===this.TYPES.WALL){const l=r%2===0&&o%2!==0&&c%2!==0,u=o%2===0&&r%2!==0&&c%2!==0,f=c%2===0&&r%2!==0&&o%2!==0;if(l){const p=this.matrix[this._idx(r-1,o,c)],m=this.matrix[this._idx(r+1,o,c)];p!==this.TYPES.WALL&&m!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&m!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&m!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&m!==this.TYPES.KEY&&e.push({x:r,y:o,z:c,type:"X"})}else if(u){const p=this.matrix[this._idx(r,o-1,c)],m=this.matrix[this._idx(r,o+1,c)];p!==this.TYPES.WALL&&m!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&m!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&m!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&m!==this.TYPES.KEY&&e.push({x:r,y:o,z:c,type:"Y"})}else if(f){const p=this.matrix[this._idx(r,o,c-1)],m=this.matrix[this._idx(r,o,c+1)];p!==this.TYPES.WALL&&m!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&m!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&m!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&m!==this.TYPES.KEY&&e.push({x:r,y:o,z:c,type:"Z"})}}for(let r=e.length-1;r>0;r--){const o=Math.floor(this.random()*(r+1)),c=e[r];e[r]=e[o],e[o]=c}const i=$.BRAID_FACTOR||.1,n=Math.floor(e.length*i);let a=0;for(const r of e){if(a>=n)break;this.isWideConnection(r.x,r.y,r.z)||r.type==="Z"&&this.isAdjacentElevator(r.x,r.y,r.z)||(this.matrix[this._idx(r.x,r.y,r.z)]=this.TYPES.PATH,a++)}}isWideConnection(t,e,i){const n=this.size,a=(l,u,f)=>l<0||l>=n||u<0||u>=n||f<0||f>=n?!1:l===t&&u===e&&f===i?!0:this.matrix[this._idx(l,u,f)]!==this.TYPES.WALL;return!!(a(t,e+1,i)&&a(t+1,e,i)&&a(t+1,e+1,i)||a(t-1,e,i)&&a(t-1,e+1,i)&&a(t,e+1,i)||a(t,e-1,i)&&a(t+1,e-1,i)&&a(t+1,e,i)||a(t-1,e-1,i)&&a(t,e-1,i)&&a(t-1,e,i)||a(t,e,i+1)&&a(t+1,e,i)&&a(t+1,e,i+1)||a(t-1,e,i)&&a(t-1,e,i+1)&&a(t,e,i+1)||a(t,e,i-1)&&a(t+1,e,i-1)&&a(t+1,e,i)||a(t-1,e,i-1)&&a(t,e,i-1)&&a(t-1,e,i)||a(t,e,i+1)&&a(t,e+1,i)&&a(t,e+1,i+1)||a(t,e-1,i)&&a(t,e-1,i+1)&&a(t,e,i+1)||a(t,e,i-1)&&a(t,e+1,i-1)&&a(t,e+1,i)||a(t,e-1,i-1)&&a(t,e,i-1)&&a(t,e-1,i))}isAdjacentElevator(t,e,i){const n=this.size,a=[{dx:-1,dy:-1},{dx:-1,dy:0},{dx:-1,dy:1},{dx:0,dy:-1},{dx:0,dy:1},{dx:1,dy:-1},{dx:1,dy:0},{dx:1,dy:1}];for(const r of a){const o=t+r.dx,c=e+r.dy;if(!(o<0||o>=n||c<0||c>=n)&&(this.matrix[this._idx(o,c,i)]!==this.TYPES.WALL||i-2>=0&&this.matrix[this._idx(o,c,i-2)]!==this.TYPES.WALL||i+2<n&&this.matrix[this._idx(o,c,i+2)]!==this.TYPES.WALL))return!0}return!1}isDeadEndZ(t,e,i){if(t%2===0||e%2===0||i%2===0)return!1;const n=this.matrix[this._idx(t,e,i)];if(n===this.TYPES.WALL||n===this.TYPES.START||n===this.TYPES.EXIT||n===this.TYPES.TELEPORT||n===this.TYPES.KEY)return!1;const a=this.size,r=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(const c of r){const l=t+c.dx,u=e+c.dy;if(!(l<0||l>=a||u<0||u>=a)&&this.matrix[this._idx(l,u,i)]!==this.TYPES.WALL)return!1}let o=0;return i-1>=0&&this.matrix[this._idx(t,e,i-1)]!==this.TYPES.WALL&&o++,i+1<a&&this.matrix[this._idx(t,e,i+1)]!==this.TYPES.WALL&&o++,o===1}isSolvable(){const t=this.size,e={x:Math.floor(this.startPos.x),y:Math.floor(this.startPos.y),z:this.startPos.z},i=[];let n=null;for(let l=0;l<t;l++)for(let u=0;u<t;u++)for(let f=0;f<t;f++){const p=this.matrix[this._idx(l,u,f)];p===this.TYPES.KEY?i.push(`${l},${u},${f}`):p===this.TYPES.EXIT&&(n=`${l},${u},${f}`)}const a=[e],r=new Set([`${e.x},${e.y},${e.z}`]),o=new Set;let c=!1;for(;a.length>0;){const l=a.shift();if(!l)continue;const u=`${l.x},${l.y},${l.z}`;i.includes(u)&&o.add(u),u===n&&(c=!0);const f=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(const p of f){const m=l.x+p.dx,T=l.y+p.dy,_=l.z;if(m>=0&&m<t&&T>=0&&T<t){const h=`${m},${T},${_}`,d=this.matrix[this._idx(m,T,_)];d!==this.TYPES.WALL&&d!==this.TYPES.STATUE&&!r.has(h)&&(r.add(h),a.push({x:m,y:T,z:_}))}}for(const p of[-2,2]){const m=l.z+p;if(m>=0&&m<t){const T=l.z+p/2,_=this.matrix[this._idx(l.x,l.y,T)],h=this.matrix[this._idx(l.x,l.y,m)];if(_!==this.TYPES.WALL&&_!==this.TYPES.STATUE&&h!==this.TYPES.WALL&&h!==this.TYPES.STATUE){const d=`${l.x},${l.y},${m}`;r.has(d)||(r.add(d),a.push({x:l.x,y:l.y,z:m}))}}}}if(!c||o.size!==i.length)return!1;for(let l=0;l<t;l++)for(let u=0;u<t;u++)for(let f=1;f<t;f+=2){const p=this.matrix[this._idx(l,u,f)];if(p!==this.TYPES.WALL&&p!==this.TYPES.STATUE&&!r.has(`${l},${u},${f}`))return!1}return!0}placeStatues(){const t=this.size,e=[];for(let o=0;o<t;o++)for(let c=0;c<t;c++)for(let l=0;l<t;l++)this.isDeadEndZ(o,c,l)&&e.push({x:o,y:c,z:l});let i=0;const n=(o,c,l,u,f)=>{const p=this._idx(o,c,l),m=this.matrix[p];m!==u&&(this.matrix[p]=u,f.push({x:o,y:c,z:l,oldVal:m}))},a=o=>{for(let c=o.length-1;c>=0;c--){const l=o[c];this.matrix[this._idx(l.x,l.y,l.z)]=l.oldVal}},r=(o,c,l,u)=>{n(o,c,l,this.TYPES.STATUE,u);const f=l-1,p=l+1;f>=0&&n(o,c,f,this.TYPES.WALL,u),p<t&&n(o,c,p,this.TYPES.WALL,u);const m=[-2,2];for(const T of m){const _=l+T;_>=0&&_<t&&this.isDeadEndZ(o,c,_)&&r(o,c,_,u)}};for(const o of e){if(this.matrix[this._idx(o.x,o.y,o.z)]===this.TYPES.STATUE||!this.isDeadEndZ(o.x,o.y,o.z))continue;const c=[];if(r(o.x,o.y,o.z,c),this.isSolvable()){const l=c.filter(u=>u.oldVal!==this.TYPES.STATUE&&this.matrix[this._idx(u.x,u.y,u.z)]===this.TYPES.STATUE).length;i+=l}else a(c)}return i}placeManas(){const{deadEnds:t}=this._collectDeadEndsAndPaths();for(const e of t){const i=this._idx(e.x,e.y,e.z);if(this.matrix[i]===this.TYPES.PATH){let a=!1;e.z-1>=0&&this.matrix[this._idx(e.x,e.y,e.z-1)]!==this.TYPES.WALL&&(a=!0),e.z+1<this.size&&this.matrix[this._idx(e.x,e.y,e.z+1)]!==this.TYPES.WALL&&(a=!0),a||(this.matrix[i]=this.TYPES.MANA)}}}generateFromLayout(t){const e=t.layers.length,i=t.layers[0].length,n=t.layers[0][0].length,a=Math.max(n,i,e),r=a%2!==0?a:a+1;this.size=r,this.n=(r-1)/2,this.matrix=this.initMatrix(),this.tutorialHunterSpawns=[];for(let l=0;l<e;l++){const u=t.layers[l];for(let f=0;f<i;f++){const p=u[f];for(let m=0;m<n;m++){const T=p[m],_=this._idx(m,f,l);switch(T){case"#":this.matrix[_]=this.TYPES.WALL;break;case".":this.matrix[_]=this.TYPES.PATH;break;case"S":this.matrix[_]=this.TYPES.TELEPORT,this.startPos={x:m+.5,y:f+.5,z:l};break;case"E":this.matrix[_]=this.TYPES.EXIT;break;case"T":this.matrix[_]=this.TYPES.TELEPORT;break;case"K":this.matrix[_]=this.TYPES.KEY;break;case"M":this.matrix[_]=this.TYPES.MANA;break;case"A":this.matrix[_]=this.TYPES.STATUE;break;case"H":this.matrix[_]=this.TYPES.PATH,this.tutorialHunterSpawns.push({x:m,y:f,z:l});break;default:this.matrix[_]=this.TYPES.WALL}}}}const o=this.size,c=this.matrix;return c.size=o,c.get=(l,u,f)=>c[l*o*o+u*o+f],c.set=(l,u,f,p)=>{c[l*o*o+u*o+f]=p},c}}class hm{constructor(){N(this,"uiFloorSpan");N(this,"uiMap3dContainer");N(this,"uiMobileControls");N(this,"uiProximeterContainer");N(this,"uiProximeterCells");N(this,"uiProximeterBar");N(this,"uiVictoryScreen");N(this,"uiGameOverScreen");N(this,"uiMobileUp");N(this,"uiMobileDown");N(this,"uiMobileMap");N(this,"uiSavingIndicator");N(this,"savingIndicatorTimeout");N(this,"uiVisitedPercent");N(this,"uiHunterStatusVal");N(this,"uiStatusLabel");N(this,"uiMarqueeContainer");N(this,"uiLegendHunter");N(this,"uiCanvas");N(this,"uiKeysCollected");N(this,"uiKeysTotal");N(this,"uiKeysList");N(this,"uiPauseScreen");N(this,"uiMobilePauseBtn");N(this,"uiPathfindersRemaining");N(this,"uiPathfindersTotal");N(this,"uiControlsHintContent");N(this,"uiManaCollectedDesktop");N(this,"uiManaTotalDesktop");N(this,"uiManaCollectedMobile");N(this,"uiManaTotalMobile");N(this,"uiJellyPortalCountDesktop");N(this,"uiJellyPortalCountMobile");N(this,"uiMobileJellyPortalBtn");N(this,"onInfoBanner");N(this,"bannerMessage","");this.uiFloorSpan=document.getElementById("current-floor"),this.uiMap3dContainer=document.getElementById("map3d-container"),this.uiMobileControls=document.getElementById("mobile-controls"),this.uiProximeterContainer=document.getElementById("proximeter-container"),this.uiProximeterCells=document.querySelectorAll(".proximeter-cell"),this.uiProximeterBar=document.querySelector(".proximeter-bar"),this.uiVictoryScreen=document.getElementById("victory-screen"),this.uiGameOverScreen=document.getElementById("game-over-screen"),this.uiMobileUp=document.getElementById("mobile-up"),this.uiMobileDown=document.getElementById("mobile-down"),this.uiMobileMap=document.getElementById("mobile-map"),this.uiSavingIndicator=document.getElementById("saving-indicator"),this.savingIndicatorTimeout=null,this.uiVisitedPercent=document.getElementById("visited-percent"),this.uiHunterStatusVal=document.getElementById("hunter-status-val"),this.uiStatusLabel=document.querySelector("#hunter-status-panel .status-label"),this.uiMarqueeContainer=document.querySelector(".status-marquee-container"),this.uiLegendHunter=document.getElementById("legend-hunter"),this.uiCanvas=document.getElementById("main-2d-canvas"),this.uiKeysCollected=document.getElementById("keys-collected-count"),this.uiKeysTotal=document.getElementById("keys-total-count"),this.uiKeysList=document.getElementById("keys-list-container"),this.uiPauseScreen=document.getElementById("pause-screen"),this.uiMobilePauseBtn=document.getElementById("mobile-pause-btn"),this.uiPathfindersRemaining=document.getElementById("pathfinders-remaining-count"),this.uiPathfindersTotal=document.getElementById("pathfinders-total-count"),this.uiControlsHintContent=document.getElementById("controls-hint-content"),this.uiManaCollectedDesktop=document.getElementById("mana-collected-count-desktop"),this.uiManaTotalDesktop=document.getElementById("mana-total-count-desktop"),this.uiManaCollectedMobile=document.getElementById("mana-collected-count-mobile"),this.uiManaTotalMobile=document.getElementById("mana-total-count-mobile"),this.uiJellyPortalCountDesktop=document.getElementById("jelly-portal-count-desktop"),this.uiJellyPortalCountMobile=document.getElementById("jelly-portal-count-mobile"),this.uiMobileJellyPortalBtn=document.getElementById("mobile-jelly-portal-btn"),this.localizeDOM()}localizeDOM(t=pn){Sn(t)}showPause(){this.uiPauseScreen&&this.uiPauseScreen.classList.remove("hidden")}hidePause(){this.uiPauseScreen&&this.uiPauseScreen.classList.add("hidden")}showVictory(t=0,e=0,i=8,n=0,a=0,r=0,o=!1,c=!1){if(this.hideGameUI(),this.uiVictoryScreen){this.uiVictoryScreen.classList.remove("hidden");const h=this.uiVictoryScreen.querySelector("h1");h&&(h.innerText=Nt(o?"tutorialSuccess":"victoryTitle"));const d=this.uiVictoryScreen.querySelector('p[data-i18n="victoryText"]');d&&(d.style.display=o?"none":""),this.uiVictoryScreen.querySelectorAll(".victory-stats").forEach(g=>{g.style.display=o?"none":""})}const l=document.getElementById("menu-btn-victory");l&&(l.innerText=Nt(o?"back":"mainMenu"));const u=document.getElementById("next-tut-btn-victory");u&&(u.classList.toggle("hidden",!c),u.innerText=Nt("nextTutorial"));const f=document.getElementById("victory-mana-count");f&&(f.innerText=`${a}/${r}`);const p=document.getElementById("victory-completion-rate");p&&(p.innerText=`${t}%`);const m=document.getElementById("victory-deaths-count");m&&(m.innerText=String(e));const T=document.getElementById("victory-maze-degree");T&&(T.innerText=String(i));const _=document.getElementById("victory-completion-time");if(_){const h=Math.floor(n/3600),d=Math.floor(n%3600/60),y=Math.floor(n%60),g=E=>String(E).padStart(2,"0"),v=h>0?`${g(h)}:${g(d)}:${g(y)}`:`${g(d)}:${g(y)}`;_.innerText=v}}showDeath(t=!1){this.hideGameUI(),this.uiGameOverScreen&&this.uiGameOverScreen.classList.remove("hidden");const e=document.getElementById("continue-btn-death");e&&(e.style.display=t?"":"none")}hideGameUI(){this.uiMobileControls&&this.uiMobileControls.classList.add("hidden"),this.uiMobilePauseBtn&&this.uiMobilePauseBtn.classList.add("hidden"),this.uiMap3dContainer&&this.uiMap3dContainer.classList.add("hidden"),this.uiProximeterContainer&&this.uiProximeterContainer.classList.add("hidden"),this.uiProximeterBar&&this.uiProximeterBar.classList.remove("critical-alert"),this.uiProximeterCells.forEach(t=>t.classList.remove("active")),this.uiCanvas&&this.uiCanvas.classList.remove("hunted-map-effect","nearby-map-effect")}initGameUI(t=!1){this.uiMobileControls&&this.uiMobileControls.classList.remove("hidden"),this.uiMobilePauseBtn&&this.uiMobilePauseBtn.classList.remove("hidden"),this.uiMobileMap&&(this.uiMobileMap.disabled=!0),t?(this.uiStatusLabel&&(this.uiStatusLabel.innerText="SAFE MODE:"),this.uiHunterStatusVal&&(this.uiHunterStatusVal.innerText="ACTIVE",this.uiHunterStatusVal.className="status-marquee-text status--scanning"),this.uiLegendHunter&&this.uiLegendHunter.classList.add("hidden")):(this.uiStatusLabel&&(this.uiStatusLabel.innerText="HUNTER STATUS:"),this.uiLegendHunter&&this.uiLegendHunter.classList.remove("hidden"))}updateVisitedPercent(t){this.uiVisitedPercent&&(this.uiVisitedPercent.innerText=String(t))}updateManaHUD(t,e){this.uiManaCollectedDesktop&&(this.uiManaCollectedDesktop.innerText=String(t)),this.uiManaTotalDesktop&&(this.uiManaTotalDesktop.innerText=String(e)),this.uiManaCollectedMobile&&(this.uiManaCollectedMobile.innerText=String(t)),this.uiManaTotalMobile&&(this.uiManaTotalMobile.innerText=String(e))}updateJellyPortalHUD(t){this.uiJellyPortalCountDesktop&&(this.uiJellyPortalCountDesktop.innerText=String(t)),this.uiJellyPortalCountMobile&&(this.uiJellyPortalCountMobile.innerText=String(t)),this.uiMobileJellyPortalBtn&&(t>0?this.uiMobileJellyPortalBtn.classList.add("jelly-portal-btn--active"):this.uiMobileJellyPortalBtn.classList.remove("jelly-portal-btn--active"))}updateFloor(t,e,i){if(this.uiFloorSpan){const n=(t+1)/2;this.uiFloorSpan.innerText=String(n)}this.uiMobileUp&&(this.uiMobileUp.disabled=!e),this.uiMobileDown&&(this.uiMobileDown.disabled=!i)}updateKeysHUD(t,e){if(this.uiKeysCollected&&(this.uiKeysCollected.innerText=String(t)),this.uiKeysTotal&&(this.uiKeysTotal.innerText=String(e)),this.uiKeysList){this.uiKeysList.innerHTML="";for(let i=0;i<e;i++){const n=document.createElement("span");n.className="key-dot"+(i<t?" key-dot--collected":""),this.uiKeysList.appendChild(n)}}}updatePathfindersHUD(t,e){this.uiPathfindersRemaining&&(this.uiPathfindersRemaining.innerText=String(t)),this.uiPathfindersTotal&&(this.uiPathfindersTotal.innerText=String(e))}showSavingIndicator(){this.uiSavingIndicator&&(this.savingIndicatorTimeout&&clearTimeout(this.savingIndicatorTimeout),this.uiSavingIndicator.classList.remove("hidden"),this.uiSavingIndicator.classList.add("saving-pulse"),this.savingIndicatorTimeout=window.setTimeout(()=>{this.uiSavingIndicator&&(this.uiSavingIndicator.classList.add("hidden"),this.uiSavingIndicator.classList.remove("saving-pulse"))},2e3))}showInfoBanner(t){this.bannerMessage=t,this.onInfoBanner&&this.onInfoBanner(t)}setMap3DVisible(t){this.uiMap3dContainer&&(t?this.uiMap3dContainer.classList.remove("hidden"):this.uiMap3dContainer.classList.add("hidden"))}updateHazardWarning(t,e,i=!1,n=!1){if(!this.uiHunterStatusVal)return;let a=Nt("statusScanning"),r="status--scanning",o=!1;i?(a=Nt("statusActive"),r="status--scanning"):n?(a=Nt("statusSleeping"),r="status--sleeping"):e>0?(a=Nt("statusConverging",{ticks:e}),r="status--converging",o=!0):t&&(a=Nt("statusTracking"),r="status--tracking",o=!0),this.uiHunterStatusVal.innerText!==a&&(this.uiHunterStatusVal.innerText=a,this.uiHunterStatusVal.className="status-marquee-text "+r),this.uiCanvas&&(o?this.uiCanvas.classList.add("hunted-map-effect"):this.uiCanvas.classList.remove("hunted-map-effect"))}setNearbyWarning(t){this.uiCanvas&&(t?this.uiCanvas.classList.add("nearby-map-effect"):this.uiCanvas.classList.remove("nearby-map-effect"))}updateProximeter(t,e,i){if(!this.uiProximeterContainer)return;if(e>0&&!i)this.uiProximeterContainer.classList.remove("hidden");else{this.uiProximeterContainer.classList.add("hidden");return}let n=0;t<=10&&(n=11-t),this.uiProximeterCells.forEach(a=>{parseInt(a.getAttribute("data-index")||"0")<=n?a.classList.add("active"):a.classList.remove("active")}),this.uiProximeterBar&&(n===10?this.uiProximeterBar.classList.add("critical-alert"):this.uiProximeterBar.classList.remove("critical-alert"))}updateMobileMapButton(t,e,i,n=!1){this.uiMobileMap&&i&&(t&&!e?(this.uiMobileMap.innerText=Nt("teleport"),n?(this.uiMobileMap.style.borderColor="#a020f0",this.uiMobileMap.style.color="#a020f0",this.uiMobileMap.style.background="rgba(160, 32, 240, 0.2)"):(this.uiMobileMap.style.borderColor="var(--clr-teleport, #ff8c00)",this.uiMobileMap.style.color="var(--clr-teleport, #ff8c00)",this.uiMobileMap.style.background="rgba(255, 140, 0, 0.2)")):(this.uiMobileMap.innerText=Nt("map"),this.uiMobileMap.style.borderColor="",this.uiMobileMap.style.color="",this.uiMobileMap.style.background=""))}updateControlsHint(t,e=!0){this.uiControlsHintContent&&(t==="gamepad"?this.uiControlsHintContent.innerHTML=`
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-round kbd-dark">LS</kbd>
                        <span style="color:var(--clr-text-dim);font-size:0.9em;margin:0 2px;">or</span>
                        <kbd class="kbd-dark">D-Pad</kbd>
                    </div>
                    <span class="hint-action">${Nt("actionMove")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-round kbd-a">A</kbd>
                        <span style="color:var(--clr-text-dim);font-size:0.9em;margin:0 2px;">/</span>
                        <kbd class="kbd-round kbd-y">Y</kbd>
                    </div>
                    <span class="hint-action">${Nt("actionElevator")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-dark" style="min-width: calc(var(--h-unit) * 3); min-width: calc(var(--d-h-unit) * 3);">Back</kbd>
                    </div>
                    <span class="hint-action">${Nt("actionMap")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-round kbd-b">B</kbd>
                    </div>
                    <span class="hint-action">${Nt("actionZoom")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-dark">RB</kbd>
                    </div>
                    <span class="hint-action">${Nt("actionJellyPortal")}</span>
                </div>
            `:this.uiControlsHintContent.innerHTML=`
                <div class="hint-row">
                    <div class="wasd-container">
                        <div class="wasd-row"><kbd>W</kbd></div>
                        <div class="wasd-row"><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></div>
                    </div>
                    <span class="hint-action">${Nt("actionMove")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>Q</kbd>
                        <span style="color:var(--clr-text-dim);font-size:0.9em;margin:0 2px;">/</span>
                        <kbd>E</kbd>
                    </div>
                    <span class="hint-action">${Nt("actionElevator")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>M</kbd>
                    </div>
                    <span class="hint-action">${Nt("actionMap")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>Z</kbd>
                    </div>
                    <span class="hint-action">${Nt("actionZoom")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>R</kbd>
                    </div>
                    <span class="hint-action">${Nt("actionJellyPortal")}</span>
                </div>
            `)}destroy(){this.savingIndicatorTimeout&&clearTimeout(this.savingIndicatorTimeout)}}class dm{constructor(){N(this,"keys");N(this,"touchStart");N(this,"touchMoveVector");N(this,"preventScrollKeys");N(this,"handleKeyDown");N(this,"handleKeyUp");N(this,"handleTouchStart");N(this,"handleTouchMove");N(this,"handleTouchEnd");this.keys={},this.touchStart=null,this.touchMoveVector=null,this.preventScrollKeys=["arrowup","arrowdown","arrowleft","arrowright"," ","pageup","pagedown"],this.handleKeyDown=null,this.handleKeyUp=null,this.handleTouchStart=null,this.handleTouchMove=null,this.handleTouchEnd=null,this.init()}init(){this.handleKeyDown=t=>{const e=t.key.toLowerCase();this.keys[e]=!0,this.preventScrollKeys.includes(e)&&t.preventDefault()},this.handleKeyUp=t=>{this.keys[t.key.toLowerCase()]=!1},window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp)}setupTouch(t,e){this.handleTouchStart=i=>{const n=i.target;t()||e()||n&&n.closest&&n.closest("button")||(i.cancelable&&i.preventDefault(),this.touchStart={x:i.touches[0].clientX,y:i.touches[0].clientY})},this.handleTouchMove=i=>{if(!this.touchStart||t()||e())return;i.cancelable&&i.preventDefault();const n=i.touches[0].clientX-this.touchStart.x,a=i.touches[0].clientY-this.touchStart.y,r=Math.sqrt(n*n+a*a);r>10&&(this.touchMoveVector={x:n/r,y:a/r})},this.handleTouchEnd=()=>{this.touchStart=null,this.touchMoveVector=null},window.addEventListener("touchstart",this.handleTouchStart,{passive:!1}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),window.addEventListener("touchend",this.handleTouchEnd)}destroy(){this.handleKeyDown&&window.removeEventListener("keydown",this.handleKeyDown),this.handleKeyUp&&window.removeEventListener("keyup",this.handleKeyUp),this.handleTouchStart&&window.removeEventListener("touchstart",this.handleTouchStart),this.handleTouchMove&&window.removeEventListener("touchmove",this.handleTouchMove),this.handleTouchEnd&&window.removeEventListener("touchend",this.handleTouchEnd)}}const Ua="void-escape-save";function um(s){const t=new Uint8Array(s.buffer);let e="";for(let i=0;i<t.length;i++)e+=String.fromCharCode(t[i]);return btoa(e)}function fm(s){const t=atob(s),e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return new Int8Array(e.buffer)}function pm(s){return{x:s.x,y:s.y,z:s.z,id:s.id,state:s.state,lastPos:s.lastPos?{...s.lastPos}:null,history:s.history.map(t=>({...t})),visitedNodes:Array.from(s.visitedNodes),pathToTarget:s.pathToTarget.map(t=>({...t})),respawnThresholdPercentage:s.respawnThresholdPercentage!==void 0?s.respawnThresholdPercentage:null}}function rs(s){try{const t={version:1,timestamp:Date.now(),degree:s.degree,branchingFactor:s.branchingFactor,isSafeMode:s.isSafeMode,seed:s.seed,mazeSize:s.mazeGen.size,mazeStartPos:{...s.mazeGen.startPos},matrix:um(s.mazeGen.matrix),player:{...s.player},hunters:s.hunters.map(pm),discoveredTeleports:Array.from(s.discoveredTeleports),inactiveTeleportPos:s.inactiveTeleportPos?{...s.inactiveTeleportPos}:null,teleportCooldownTicks:s.teleportCooldownTicks,revealedPathSet:Array.from(s.revealedPathSet),keysCollected:s.keysCollected,totalKeys:s.totalKeys,manaCollected:s.manaCollected,totalMana:s.totalMana,jellyPortalCount:s.jellyPortalCount,totalPathfinders:s.totalPathfinders,pathfindersRemaining:s.pathfindersRemaining,pathfinderRewardsGranted:s.pathfinderRewardsGranted!==void 0?s.pathfinderRewardsGranted:0,mapCompletion100Triggered:s.mapCompletion100Triggered||!1,dialogueUpTriggered:s.dialogueUpTriggered||!1,dialogueDownTriggered:s.dialogueDownTriggered||!1,dialogueWhichWayTriggered:s.dialogueWhichWayTriggered||!1,dialogueDetectedTriggered:s.dialogueDetectedTriggered||!1,hunterOnSameFloorDetected:s.hunterOnSameFloorDetected||!1,deathsCount:s.deathsCount!==void 0?s.deathsCount:0,elapsedTime:s.elapsedTime!==void 0?s.elapsedTime:0};localStorage.setItem(Ua,JSON.stringify(t))}catch(t){console.warn("[SaveManager] Could not save game state:",t)}}function pl(){try{const s=localStorage.getItem(Ua);if(!s)return null;const t=JSON.parse(s);return!t||t.version!==1?null:t}catch(s){return console.warn("[SaveManager] Could not load save data:",s),null}}function ml(){localStorage.removeItem(Ua)}function Ar(){return pl()!==null}function mm(s,t){s.x=t.x,s.y=t.y,s.z=t.z,s.visualX=t.x,s.visualY=t.y,s.visualZ=t.z,s.state=t.state,s.lastPos=t.lastPos?{...t.lastPos}:null,s.history=t.history.map(e=>({...e})),s.visitedNodes=new Set(t.visitedNodes),s.pathToTarget=t.pathToTarget.map(e=>({...e})),s.respawnThresholdPercentage=t.respawnThresholdPercentage!==void 0?t.respawnThresholdPercentage:null}function gm(s,t){const e=fm(t);for(let i=0;i<e.length;i++)s.matrix[i]=e[i]}function la(s,t,e){return Math.abs(t-s)<=e?t:s+Math.sign(t-s)*e}class ca{constructor(t,e,i=null,n=null){N(this,"degree");N(this,"branchingFactor");N(this,"isSafeMode");N(this,"vScale");N(this,"ui");N(this,"input");N(this,"canvas");N(this,"ctx");N(this,"seed");N(this,"mazeGen");N(this,"maze");N(this,"isResumedFromSave");N(this,"mapCompletion100Triggered");N(this,"hunterOnSameFloorDetected");N(this,"dialogueUpTriggered");N(this,"dialogueDownTriggered");N(this,"dialogueWhichWayTriggered");N(this,"dialogueDetectedTriggered");N(this,"wallImage");N(this,"floorImage");N(this,"keyImage");N(this,"manaImage");N(this,"statueImage");N(this,"mageImages");N(this,"playerSide");N(this,"playerVertical");N(this,"playerWalkCycle");N(this,"playerSquashTargetX");N(this,"playerSquashTargetY");N(this,"playerSquashX");N(this,"playerSquashY");N(this,"player");N(this,"hunters");N(this,"keyMeshes");N(this,"exitMesh");N(this,"keysCollected");N(this,"totalKeys");N(this,"manaCollected");N(this,"totalMana");N(this,"manaMeshes");N(this,"totalPathfinders");N(this,"pathfindersRemaining");N(this,"activeMapFloor");N(this,"visualActiveFloor");N(this,"mapCursor");N(this,"pathfinderRewardsGranted");N(this,"isometricCanvas");N(this,"isometricCtx");N(this,"floorClickRects");N(this,"teleportModalClickRects");N(this,"mapZoom");N(this,"mapPanOffsetX");N(this,"mapPanOffsetY");N(this,"isZoomTransitionActive");N(this,"zoomTransitionTimer");N(this,"preloadedStoryImages");N(this,"storyImagesLoadedCount");N(this,"storyImagesTotalCount");N(this,"storyImagesPreloadPromise");N(this,"lastFrameTime");N(this,"revealedPathSet");N(this,"activePathReveal");N(this,"revealedPathProgress");N(this,"knownMeshes");N(this,"gridMeshes");N(this,"pathRevealInterval");N(this,"pathfinderBlockedUntil");N(this,"isMap3DActive");N(this,"teleportAnim");N(this,"auraHeight");N(this,"auraTime");N(this,"isGameOver");N(this,"deathAnimation");N(this,"isTutorialMode");N(this,"currentTutorialId");N(this,"currentTutorialStage");N(this,"notificationQueue");N(this,"activeNotification");N(this,"isPaused");N(this,"manaCharges");N(this,"jellyPortalCount");N(this,"jellyPortalFreezeTimer");N(this,"jellyPortalResetCells");N(this,"jellyPortalResetDuration");N(this,"jellyPortalResetElapsed");N(this,"dyingHunters");N(this,"pathfinderConfirmTarget");N(this,"isDestroyed");N(this,"isIntroPlaying");N(this,"isStoryActive");N(this,"pulsatingMaterials");N(this,"hunterMeshes");N(this,"discoveredTeleports");N(this,"visitedCells");N(this,"lastSavePos");N(this,"suppressWakeHuntersBanner");N(this,"allTeleports");N(this,"vortexAngles");N(this,"isTouchDevice");N(this,"isMouseOrTouchDetected");N(this,"teleportGoBtnClickRect");N(this,"lastTeleportCloseTime");N(this,"staticMapCacheCanvas");N(this,"staticMapCacheCtx");N(this,"staticMapCacheDirty");N(this,"zoomVisibleCells");N(this,"scene");N(this,"camera");N(this,"renderer");N(this,"controls");N(this,"teleportMeshes");N(this,"inactiveTeleportPos");N(this,"teleportCooldownTicks");N(this,"storyImages");N(this,"storyOpacity");N(this,"storyOverlayOpacity");N(this,"storyFrameIndex");N(this,"storyTimer");N(this,"storyTextQueue");N(this,"storyTextIndex");N(this,"storyDisplayedText");N(this,"storyState");N(this,"storyWaitTimer");N(this,"storyTextHeight");N(this,"storyWidthProgress");N(this,"storyCharIndex");N(this,"storyTypeTimer");N(this,"storyMsgIndex");N(this,"storyCloseProgress");N(this,"selectedTeleportIndex");N(this,"teleportConfirmModalActive");N(this,"teleportModalSelection");N(this,"teleportDotsClickRects");N(this,"isTeleportMode");N(this,"floorTransition");N(this,"hasSavePoint");N(this,"lastPlayerCell");N(this,"exitPathfinderUnlocked");N(this,"isZoomActive");N(this,"lastInputDevice");N(this,"fullyRevealedCells");N(this,"revealedCellsAnimation");N(this,"skipCellAnimations");N(this,"activeSkipHandler");N(this,"activeIntroTimer");N(this,"activeContinueTimer");N(this,"raycaster");N(this,"pointer");N(this,"handleKeyDownExtra");N(this,"handleKeyboardDetection");N(this,"handleResize");N(this,"handleStoryKeyDown");N(this,"handleStoryClick");N(this,"handleStoryTouch");N(this,"handleCanvasClick");N(this,"handlePointerDown");N(this,"handlePointerUp");N(this,"lastHunterMove");N(this,"lastLockedWarningTime");N(this,"prevGamepadButtons");N(this,"isPreloadingActive");N(this,"prevGamepadStick");N(this,"gamepadTeleportSelectedIndex");N(this,"deathsCount");N(this,"elapsedTime");if(this.degree=t!==void 0?t:$.MAZE_DEGREE!==void 0?$.MAZE_DEGREE:8,this.branchingFactor=e!==void 0?e:$.BRANCHING_FACTOR!==void 0?$.BRANCHING_FACTOR:.2,i)this.isSafeMode=i.isSafeMode??!1;else{const f=document.getElementById("safe-mode");this.isSafeMode=f?f.checked:!1}this.vScale=2,this.ui=new hm,this.input=new dm,this.input.setupTouch(()=>this.isMap3DActive,()=>this.isGameOver),this.canvas=document.getElementById("main-2d-canvas"),this.ctx=this.canvas.getContext("2d"),this.seed=i?i.seed:$.SEED!==null&&$.SEED!==void 0?$.SEED:Date.now(),this.isTutorialMode=!!n,this.currentTutorialId=n?n.id:null,this.currentTutorialStage=n,this.isTutorialMode?(this.mazeGen=new br,this.maze=this.mazeGen.generateFromLayout(n)):(this.mazeGen=new br(t,e,this.seed),this.maze=this.mazeGen.generate()),this.isResumedFromSave=!!i,this.deathsCount=i&&i.deathsCount||0,this.elapsedTime=i&&i.elapsedTime||0,this.mapCompletion100Triggered=!1,this.hunterOnSameFloorDetected=!1,this.dialogueUpTriggered=!1,this.dialogueDownTriggered=!1,this.dialogueWhichWayTriggered=!1,this.dialogueDetectedTriggered=!1,this.wallImage=new Image,this.wallImage.onload=()=>{this.staticMapCacheDirty=!0},this.wallImage.src="assets/images/wall.png",this.floorImage=new Image,this.floorImage.onload=()=>{this.staticMapCacheDirty=!0},this.floorImage.src="assets/images/floor.png",this.keyImage=new Image,this.keyImage.onload=()=>{this.staticMapCacheDirty=!0},this.keyImage.src="assets/images/key.png",this.manaImage=new Image,this.manaImage.onload=()=>{this.staticMapCacheDirty=!0},this.manaImage.src="assets/images/mana.png",this.statueImage=new Image,this.statueImage.onload=()=>{this.staticMapCacheDirty=!0},this.statueImage.src="assets/images/statue.png",this.mageImages={down_left:new Image,down_right:new Image,up_left:new Image,up_right:new Image};for(const f in this.mageImages)this.mageImages[f].onload=()=>{this.staticMapCacheDirty=!0},this.mageImages[f].src=`assets/images/mage_${f}.png`;if(this.playerSide="right",this.playerVertical="down",this.playerWalkCycle=0,this.playerSquashTargetX=1,this.playerSquashTargetY=1,this.playerSquashX=1,this.playerSquashY=1,this.player={x:this.mazeGen.startPos.x,y:this.mazeGen.startPos.y,z:this.mazeGen.startPos.z,dir:0},this.hunters=[],this.isTutorialMode){if(this.mazeGen.tutorialHunterSpawns&&this.mazeGen.tutorialHunterSpawns.length>0&&!this.isSafeMode){let f=1;for(const p of this.mazeGen.tutorialHunterSpawns){const m=new ra(this.mazeGen,{x:p.x,y:p.y,z:p.z},f++);this.hunters.push(m)}}this.lastHunterMove=performance.now()}else this.initHunters(t);if(this.keyMeshes=[],this.exitMesh=null,this.keysCollected=0,this.isTutorialMode){let f=0;const p=this.mazeGen.size;for(let m=0;m<p;m++)for(let T=0;T<p;T++)for(let _=0;_<p;_++)this.maze.get(m,T,_)===this.mazeGen.TYPES.KEY&&f++;this.totalKeys=f}else this.totalKeys=$.getKeyCount(t);this.isTutorialMode?(this.totalPathfinders=n.pathfinders!==void 0?n.pathfinders:0,this.pathfindersRemaining=this.totalPathfinders,this.manaCharges=n.mana!==void 0?n.mana:0,this.activeMapFloor=this.mazeGen.startPos.z,this.visualActiveFloor=this.mazeGen.startPos.z,this.player.x=this.mazeGen.startPos.x,this.player.y=this.mazeGen.startPos.y,this.player.z=this.mazeGen.startPos.z):(this.totalPathfinders=$.getPathfinderCount(t),this.pathfindersRemaining=this.totalPathfinders,this.activeMapFloor=1,this.visualActiveFloor=1),this.mapCursor={x:0,y:0,z:1},this.pathfinderRewardsGranted=0,this.isometricCanvas=null,this.isometricCtx=null,this.floorClickRects=[],this.mapZoom=1,this.mapPanOffsetX=0,this.isZoomTransitionActive=!1,this.zoomTransitionTimer=0,this.preloadedStoryImages=[],this.storyImagesLoadedCount=0,this.storyImagesTotalCount=0,this.storyImagesPreloadPromise=null,this.preloadStoryImages(),this.lastFrameTime=performance.now(),this.revealedPathSet=new Set,this.activePathReveal=[],this.revealedPathProgress=0,this.knownMeshes=[],this.gridMeshes=null,this.pathRevealInterval=null,this.pathfinderBlockedUntil=0,this.manaCollected=this.isTutorialMode&&n&&n.mana!==void 0?n.mana:0,this.totalMana=0,this.manaMeshes=[];const a=this.mazeGen.size;for(let f=0;f<a;f++)for(let p=0;p<a;p++)for(let m=0;m<a;m++)this.maze.get(f,p,m)===this.mazeGen.TYPES.MANA&&this.totalMana++;this.isTutorialMode&&n&&n.mana!==void 0&&(this.totalMana+=n.mana),this.isTutorialMode?this.jellyPortalCount=n&&n.jellyPortals!==void 0?n.jellyPortals:0:this.jellyPortalCount=this.totalMana<10?1:$.JELLY_PORTAL_COUNT||0,this.jellyPortalFreezeTimer=0,this.jellyPortalResetCells=new Set,this.jellyPortalResetDuration=1.5,this.jellyPortalResetElapsed=0,this.dyingHunters=[],this.ui.initGameUI(this.isSafeMode),this.ui.onInfoBanner=f=>this.queueNotification(f),this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.ui.updateManaHUD(this.manaCollected,this.totalMana),this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),this.ui.updateJellyPortalHUD(this.jellyPortalCount),this.isMap3DActive=!1,this.teleportAnim=null,this.auraHeight=0,this.auraTime=0,this.isGameOver=!1,this.deathAnimation=null,this.notificationQueue=[],this.activeNotification=null,this.isPaused=!1,this.isDestroyed=!1,this.isIntroPlaying=!1,this.isStoryActive=!1,this.pulsatingMaterials=[],this.hunterMeshes=[],this.discoveredTeleports=new Set,this.visitedCells=new Set,this.lastSavePos=null,this.suppressWakeHuntersBanner=!1;const r=Math.floor(this.player.x),o=Math.floor(this.player.y),c=this.player.z;this.discoveredTeleports.add(`${r},${o},${c}`),this.allTeleports=[];const l=this.mazeGen.size,u=this.mazeGen.TYPES;for(let f=0;f<l;f++)for(let p=0;p<l;p++)for(let m=0;m<l;m++)this.maze.get(m,p,f)===u.TELEPORT&&this.allTeleports.push({x:m,y:p,z:f});this.allTeleports.sort((f,p)=>f.z!==p.z?f.z-p.z:f.y!==p.y?f.y-p.y:f.x-p.x),this.selectedTeleportIndex=this.allTeleports.findIndex(f=>f.x===r&&f.y===o&&f.z===c),this.selectedTeleportIndex===-1&&(this.selectedTeleportIndex=0),this.teleportConfirmModalActive=!1,this.teleportModalSelection="go",this.pathfinderConfirmTarget=null,this.isMouseOrTouchDetected=!1,this.teleportGoBtnClickRect=null,this.lastTeleportCloseTime=0,this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0,this.teleportMeshes=[],this.isTeleportMode=!1,this.teleportCooldownTicks=0,this.inactiveTeleportPos=null,this.floorTransition=null,this.hasSavePoint=!1,this.lastPlayerCell={x:r,y:o,z:c},this.exitPathfinderUnlocked=!1,this.isZoomActive=!0,this.zoomVisibleCells=11,this.lastInputDevice="keyboard",this.staticMapCacheCanvas=document.createElement("canvas"),this.staticMapCacheCtx=this.staticMapCacheCanvas.getContext("2d"),this.staticMapCacheDirty=!0,this.fullyRevealedCells=new Set,this.revealedCellsAnimation=new Map,this.vortexAngles=new Map,this.skipCellAnimations=!0,this.populateFullyRevealedCells(this.player.z),this.activeSkipHandler=null,this.activeIntroTimer=null,this.activeContinueTimer=null,this.raycaster=new tm,this.pointer=new kt,this.exitPathfinderUnlocked=this.checkExitNeighborVisited(),this.initThree(),this.populateVisitedCells(),this.init(i)}populateVisitedCells(){this.visitedCells.clear();const t=this.mazeGen.size,e=this.mazeGen.TYPES,i=this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.revealed;for(let n=0;n<t;n++)for(let a=0;a<t;a++)for(let r=0;r<t;r++){const o=this.maze.get(n,a,r);if(i){if(o!==e.WALL){this.visitedCells.add(`${n},${a},${r}`);const c=r<t-1&&this.maze.get(n,a,r+1)!==e.WALL,l=r>0&&this.maze.get(n,a,r-1)!==e.WALL,u=c||l;o===e.PATH?u?this.maze.set(n,a,r,e.ELEVATOR_VISITED):this.maze.set(n,a,r,e.VISITED):o===e.TELEPORT&&this.discoveredTeleports.add(`${n},${a},${r}`)}}else{const c=o===e.TELEPORT&&this.discoveredTeleports.has(`${n},${a},${r}`);(o===e.VISITED||o===e.START||o===e.ELEVATOR_VISITED||c)&&this.visitedCells.add(`${n},${a},${r}`)}}}destroy(){this.isDestroyed=!0,this.hideGameUI(),this.input.destroy(),this.ui.destroy(),window.removeEventListener("keydown",this.handleKeyDownExtra),this.handleKeyboardDetection&&window.removeEventListener("keydown",this.handleKeyboardDetection),window.removeEventListener("resize",this.handleResize),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this.activeIntroTimer&&(clearTimeout(this.activeIntroTimer),this.activeIntroTimer=null),this.activeContinueTimer&&(clearTimeout(this.activeContinueTimer),this.activeContinueTimer=null),this.handleStoryKeyDown&&(window.removeEventListener("keydown",this.handleStoryKeyDown),this.handleStoryKeyDown=null);const t=document.getElementById("story-screen");t&&(this.handleStoryClick&&(t.removeEventListener("click",this.handleStoryClick),this.handleStoryClick=null),this.handleStoryTouch&&(t.removeEventListener("touchstart",this.handleStoryTouch),this.handleStoryTouch=null),t.classList.add("hidden")),this.controls&&this.controls.dispose(),this.renderer&&this.renderer.domElement&&(this.renderer.domElement.removeEventListener("click",this.handleCanvasClick),this.renderer.domElement.removeEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.removeEventListener("pointerup",this.handlePointerUp)),this.renderer&&(this.renderer.dispose(),this.renderer.domElement.remove()),this.ui.uiMobileUp&&(this.ui.uiMobileUp.onclick=null),this.ui.uiMobileDown&&(this.ui.uiMobileDown.onclick=null),this.ui.uiMobileMap&&(this.ui.uiMobileMap.onclick=null),this.pathRevealInterval&&clearInterval(this.pathRevealInterval)}preloadStoryImages(){const t=["assets/images/presentation/1-mystical-church-of-chaos.jpg","assets/images/presentation/2-mystical-church-of-chaos.jpg","assets/images/presentation/3-the-jelly-god.jpg","assets/images/presentation/4-player-alone.jpg","assets/images/presentation/5-player-thrown.jpg"];this.storyImagesLoadedCount=0,this.storyImagesTotalCount=t.length,this.storyImagesPreloadPromise=Promise.all(t.map((e,i)=>new Promise(n=>{const a=new Image;a.src=e,a.onload=()=>{this.preloadedStoryImages[i]=a,this.storyImagesLoadedCount++,n()},a.onerror=()=>{console.warn(`Failed to preload story image: ${e}`),n()}})))}initHunters(t){const e=this.isSafeMode?0:$.getHunterCount(t);if(e!==0){for(let i=1;i<=e;i++)this.hunters.push(new ra(this.mazeGen,null,i));this.lastHunterMove=performance.now()}}wakeHunters(){const t=this.mazeGen.size,e=[],i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,r=Math.floor(this.mazeGen.startPos.x),o=Math.floor(this.mazeGen.startPos.y),c=this.mazeGen.startPos.z;for(let T=0;T<t;T++)for(let _=0;_<t;_++)for(let h=0;h<t;h++){const d=T===r&&_===o&&h===c;this.maze.get(T,_,h)===this.mazeGen.TYPES.PATH&&h%2!==0&&!d&&e.push({x:T,y:_,z:h})}if(e.length===0)for(let T=0;T<t;T++)for(let _=0;_<t;_++)for(let h=0;h<t;h++){const d=this.maze.get(T,_,h),y=T===r&&_===o&&h===c,g=d===this.mazeGen.TYPES.EXIT;d!==this.mazeGen.TYPES.WALL&&!g&&h%2!==0&&(T!==i||_!==n||h!==a)&&!y&&e.push({x:T,y:_,z:h})}for(let T=e.length-1;T>0;T--){const _=Math.floor(Math.random()*(T+1)),h=e[T];e[T]=e[_],e[_]=h}const l=(T,_)=>Math.abs(T.x-_.x)+Math.abs(T.y-_.y)+Math.abs(T.z-_.z),u=[],f=this.hunters.filter(T=>T.state==="SLEEP");let p=Math.max(3,Math.floor(t*.45)),m=4;for(;u.length<f.length&&p>0;){u.length=0;const T=e.filter(_=>l(_,{x:i,y:n,z:a})>=p);for(let _=0;_<f.length;_++){let h=null;for(const d of T){if(u.some(g=>g.x===d.x&&g.y===d.y&&g.z===d.z))continue;let y=!0;for(const g of u)if(l(d,g)<m){y=!1;break}if(y){h=d;break}}if(h)u.push(h);else break}u.length<f.length&&(m>1?m--:p--)}if(u.length<f.length)for(const T of e){if(u.length>=f.length)break;u.some(_=>_.x===T.x&&_.y===T.y&&_.z===T.z)||u.push(T)}for(let T=0;T<f.length&&T<u.length;T++){const _=f[T],h=u[T];_.x=h.x,_.y=h.y,_.z=h.z,_.visualX=h.x,_.visualY=h.y,_.visualZ=h.z,_.lastPos={x:h.x,y:h.y,z:h.z},_.state="WANDERING",_.visitedNodes.clear(),_.visitedNodes.add(`${h.x},${h.y},${h.z}`),_.history=[]}this.suppressWakeHuntersBanner||this.ui.showInfoBanner(Nt("msgVoidHuntersDetected")),this.suppressWakeHuntersBanner=!1,this.staticMapCacheDirty=!0,this.isMap3DActive&&this.build3DMap()}getExitPos(){for(let t=0;t<this.mazeGen.size;t++)for(let e=0;e<this.mazeGen.size;e++)for(let i=0;i<this.mazeGen.size;i++)if(this.maze.get(t,e,i)===this.mazeGen.TYPES.EXIT)return{x:t,y:e,z:i};return{x:1,y:1,z:1}}triggerSave(){this.isTutorialMode||(rs(this),this.hasSavePoint=!0,this.lastSavePos={x:this.player.x,y:this.player.y,z:this.player.z},this.ui.showSavingIndicator())}tryActivateJellyPortal(){if(this.isGameOver||this.isPaused||this.isIntroPlaying||this.isStoryActive||this.jellyPortalFreezeTimer>0)return;const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=this.maze.get(t,e,i),a=i<this.mazeGen.size-1&&this.maze.get(t,e,i+1)!==this.mazeGen.TYPES.WALL,r=i>0&&this.maze.get(t,e,i-1)!==this.mazeGen.TYPES.WALL,o=a||r,c=t===Math.floor(this.mazeGen.startPos.x)&&e===Math.floor(this.mazeGen.startPos.y)&&i===this.mazeGen.startPos.z,l=n===this.mazeGen.TYPES.TELEPORT;if(o||l||c||n!==this.mazeGen.TYPES.VISITED){this.ui.showInfoBanner(Nt("msgJellyPortalNotHere"));return}if(this.jellyPortalCount<=0){this.ui.showInfoBanner(Nt("msgJellyPortalNoPortalCount"));return}this.jellyPortalCount--,this.ui.updateJellyPortalHUD(this.jellyPortalCount),this.maze.set(t,e,i,this.mazeGen.TYPES.JELLY_PORTAL);const u=`${t},${e},${i}`;this.discoveredTeleports.add(u),this.allTeleports.push({x:t,y:e,z:i}),this.allTeleports.sort((m,T)=>m.z!==T.z?m.z-T.z:m.x!==T.x?m.x-T.x:m.y-T.y),this.selectedTeleportIndex=this.allTeleports.findIndex(m=>m.x===t&&m.y===e&&m.z===i),this.staticMapCacheDirty=!0,this.ui.showInfoBanner(Nt("msgJellyPortalActivated")),this.triggerSave(),this.jellyPortalFreezeTimer=1.5,this.jellyPortalResetElapsed=0,this.jellyPortalResetCells.clear();const f=this.mazeGen.size;for(let m=0;m<f;m++)for(let T=0;T<f;T++)Math.abs(m-t)+Math.abs(T-e)<=5&&this.jellyPortalResetCells.add(`${m},${T}`);const p=this.getMapVisitedPercentage();for(const m of this.hunters)m.state!=="SLEEP"&&m.state!=="DEAD_BY_JELLY"&&m.state!=="DYING"&&m.z===i&&m.x!==null&&m.y!==null&&Math.abs(m.x-t)+Math.abs(m.y-e)<=5&&(m.state="DYING",m.respawnThresholdPercentage=p)}executeJellyPortalReset(t,e,i){const n=this.mazeGen.size,a=this.mazeGen.TYPES,r=Math.floor(this.mazeGen.startPos.x),o=Math.floor(this.mazeGen.startPos.y),c=this.mazeGen.startPos.z;for(let l=0;l<n;l++)for(let u=0;u<n;u++){const f=Math.abs(l-t)+Math.abs(u-e);if(f<=5){const p=this.maze.get(l,u,i),m=`${l},${u},${i}`;if(p===a.STATUE)continue;if(p===a.WALL){let T=!1;for(const[_,h]of[[1,0],[-1,0],[0,1],[0,-1]]){const d=l+_,y=u+h;if(d>=0&&d<n&&y>=0&&y<n&&this.maze.get(d,y,i)===a.STATUE){T=!0;break}}if(T)continue}if(l===r&&u===o&&i===c||l===t&&u===e)continue;if(this.visitedCells.delete(m),this.fullyRevealedCells.delete(m),this.revealedCellsAnimation.delete(m),f===1){(p===a.VISITED||p===a.ELEVATOR_VISITED)&&this.maze.set(l,u,i,a.PATH),p===a.TELEPORT&&this.discoveredTeleports.delete(m);continue}p===a.VISITED||p===a.ELEVATOR_VISITED?this.maze.set(l,u,i,a.PATH):p===a.TELEPORT&&this.discoveredTeleports.delete(m)}}for(const l of this.hunters)l.state==="DYING"&&(l.state="DEAD_BY_JELLY",l.x=null,l.y=null,l.z=null,l.visualX=null,l.visualY=null,l.visualZ=null,l.pathToTarget=[],l.history=[]);this.dyingHunters.length>0&&(this.respawnDyingHunters(),this.dyingHunters=[]),this.staticMapCacheDirty=!0,this.triggerSave()}respawnSingleHunter(t){const e=this.mazeGen.size,i=[],n=Math.floor(this.player.x),a=Math.floor(this.player.y),r=this.player.z,o=Math.floor(this.mazeGen.startPos.x),c=Math.floor(this.mazeGen.startPos.y),l=this.mazeGen.startPos.z;for(let u=0;u<e;u++)for(let f=0;f<e;f++)for(let p=0;p<e;p++){const m=u===o&&f===c&&p===l,T=this.maze.get(u,f,p)===this.mazeGen.TYPES.EXIT;if(this.maze.get(u,f,p)===this.mazeGen.TYPES.PATH&&p%2!==0&&!m&&!T){if(p===r&&Math.abs(u-n)+Math.abs(f-a)<=5)continue;i.push({x:u,y:f,z:p})}}if(i.length===0)for(let u=0;u<e;u++)for(let f=0;f<e;f++)for(let p=0;p<e;p++){const m=this.maze.get(u,f,p),T=u===o&&f===c&&p===l,_=m===this.mazeGen.TYPES.EXIT;if(m!==this.mazeGen.TYPES.WALL&&!_&&p%2!==0&&!T&&(u!==n||f!==a||p!==r)){if(p===r&&Math.abs(u-n)+Math.abs(f-a)<=5)continue;i.push({x:u,y:f,z:p})}}if(i.length>0){const u=i[Math.floor(Math.random()*i.length)];t.x=u.x,t.y=u.y,t.z=u.z,t.visualX=u.x,t.visualY=u.y,t.visualZ=u.z,t.lastPos={x:u.x,y:u.y,z:u.z},t.state="WANDERING",t.visitedNodes.clear(),t.visitedNodes.add(`${u.x},${u.y},${u.z}`),t.history=[],t.respawnThresholdPercentage=null,this.staticMapCacheDirty=!0,this.triggerSave()}}respawnDyingHunters(){const t=this.mazeGen.size,e=[],i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,r=Math.floor(this.mazeGen.startPos.x),o=Math.floor(this.mazeGen.startPos.y),c=this.mazeGen.startPos.z;for(let u=0;u<t;u++)for(let f=0;f<t;f++)for(let p=0;p<t;p++){const m=u===r&&f===o&&p===c,T=this.maze.get(u,f,p)===this.mazeGen.TYPES.EXIT;if(this.maze.get(u,f,p)===this.mazeGen.TYPES.PATH&&p%2!==0&&!m&&!T){if(p===a&&Math.abs(u-i)+Math.abs(f-n)<=5)continue;e.push({x:u,y:f,z:p})}}if(e.length===0)for(let u=0;u<t;u++)for(let f=0;f<t;f++)for(let p=0;p<t;p++){const m=this.maze.get(u,f,p),T=u===r&&f===o&&p===c,_=m===this.mazeGen.TYPES.EXIT;if(m!==this.mazeGen.TYPES.WALL&&!_&&p%2!==0&&!T&&(u!==i||f!==n||p!==a)){if(p===a&&Math.abs(u-i)+Math.abs(f-n)<=5)continue;e.push({x:u,y:f,z:p})}}for(let u=e.length-1;u>0;u--){const f=Math.floor(Math.random()*(u+1));[e[u],e[f]]=[e[f],e[u]]}let l=0;for(const u of this.dyingHunters)if(l<e.length){const f=e[l++];u.x=f.x,u.y=f.y,u.z=f.z,u.visualX=f.x,u.visualY=f.y,u.visualZ=f.z,u.lastPos={x:f.x,y:f.y,z:f.z},u.state="WANDERING",u.visitedNodes.clear(),u.visitedNodes.add(`${f.x},${f.y},${f.z}`),u.history=[],u.pathToTarget=[]}}triggerVictory(){this.isGameOver=!0,this.isTutorialMode||ml();let t=!1;if(this.isTutorialMode&&this.currentTutorialId){const i=Di.findIndex(n=>n.id===this.currentTutorialId);t=i!==-1&&i+1<Di.length}const e=this.getMapVisitedPercentage();this.ui.showVictory(e,this.deathsCount,this.degree,this.elapsedTime,this.manaCollected,this.totalMana,this.isTutorialMode,t)}triggerDeath(){this.isGameOver=!0,this.ui.showDeath(this.hasSavePoint)}collectKey(t,e,i){if(this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${t},${e},${i}`),this.keysCollected++,this.staticMapCacheDirty=!0,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.ui.showInfoBanner(Nt("msgKeySecured",{collected:this.keysCollected,total:this.totalKeys})),this.keysCollected===this.totalKeys&&(this.ui.showInfoBanner(Nt("msgExitUnlocked")),this.exitMesh)){this.exitMesh.material.color.setHex($.COLORS.THREE_EXIT),this.exitMesh.material.emissive.setHex($.COLORS.THREE_EXIT),this.exitMesh.material.emissiveIntensity=.5;const n=this.exitMesh.children[0];n&&this.exitMesh.remove(n)}}collectMana(t,e,i){this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${t},${e},${i}`),this.manaCollected++,this.staticMapCacheDirty=!0,this.ui.updateManaHUD(this.manaCollected,this.totalMana),this.ui.showInfoBanner(Nt("msgManaSecured",{collected:this.manaCollected,total:this.totalMana})),this.manaCollected%10===0&&(this.jellyPortalCount++,this.ui.updateJellyPortalHUD(this.jellyPortalCount),setTimeout(()=>{this.ui.showInfoBanner(Nt("msgJellyPortalEarned"))},1200))}triggerLockedExitWarning(){const t=Date.now();if(!this.lastLockedWarningTime||t-this.lastLockedWarningTime>1500){this.lastLockedWarningTime=t;const e=this.totalKeys-this.keysCollected;this.ui.showInfoBanner(Nt("msgKeysRemaining",{count:e}))}}restoreFromSave(t){this.seed=t.seed,gm(this.mazeGen,t.matrix),this.player.x=t.player.x,this.player.y=t.player.y,this.player.z=t.player.z,this.player.dir=t.player.dir;const e=this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.hunterBehavior&&this.currentTutorialStage.hunterBehavior.fixed;for(let u=0;u<this.hunters.length&&u<t.hunters.length;u++)if(e&&this.mazeGen.tutorialHunterSpawns&&this.mazeGen.tutorialHunterSpawns[u]){const f=this.mazeGen.tutorialHunterSpawns[u],p=this.hunters[u];p.x=f.x,p.y=f.y,p.z=f.z,p.visualX=f.x,p.visualY=f.y,p.visualZ=f.z,p.state="WANDERING",p.lastPos={x:f.x,y:f.y,z:f.z},p.visitedNodes.clear(),p.visitedNodes.add(`${f.x},${f.y},${f.z}`),p.history=[],p.pathToTarget=[],p.respawnThresholdPercentage=null}else mm(this.hunters[u],t.hunters[u]);this.discoveredTeleports=new Set(t.discoveredTeleports),this.inactiveTeleportPos=t.inactiveTeleportPos,this.teleportCooldownTicks=t.teleportCooldownTicks,this.allTeleports=[];const i=this.mazeGen.size,n=this.mazeGen.TYPES;for(let u=0;u<i;u++)for(let f=0;f<i;f++)for(let p=0;p<i;p++){const m=this.maze.get(p,f,u);(m===n.TELEPORT||m===n.JELLY_PORTAL)&&this.allTeleports.push({x:p,y:f,z:u})}this.allTeleports.sort((u,f)=>u.z!==f.z?u.z-f.z:u.y!==f.y?u.y-f.y:u.x-f.x);const a=Math.floor(this.player.x),r=Math.floor(this.player.y),o=this.player.z;this.selectedTeleportIndex=this.allTeleports.findIndex(u=>u.x===a&&u.y===r&&u.z===o),this.selectedTeleportIndex===-1&&(this.selectedTeleportIndex=0),this.keysCollected=t.keysCollected!==void 0?t.keysCollected:0,this.totalKeys=t.totalKeys!==void 0?t.totalKeys:$.getKeyCount(this.degree),this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.manaCollected=t.manaCollected!==void 0?t.manaCollected:0,this.totalMana=t.totalMana!==void 0?t.totalMana:0,this.ui.updateManaHUD(this.manaCollected,this.totalMana),this.jellyPortalCount=t.jellyPortalCount!==void 0?t.jellyPortalCount:this.totalMana<10?1:0,this.ui.updateJellyPortalHUD(this.jellyPortalCount),this.totalPathfinders=t.totalPathfinders!==void 0?t.totalPathfinders:$.getPathfinderCount(this.degree),this.pathfindersRemaining=t.pathfindersRemaining!==void 0?t.pathfindersRemaining:this.totalPathfinders,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders);const c=this.degree>=12?10:this.degree>=8?20:0,l=this.getMapVisitedPercentage();this.pathfinderRewardsGranted=t.pathfinderRewardsGranted!==void 0?t.pathfinderRewardsGranted:c>0?Math.floor(l/c):0,this.revealedPathSet=new Set(t.revealedPathSet),this.mapCompletion100Triggered=t.mapCompletion100Triggered||!1,this.dialogueUpTriggered=t.dialogueUpTriggered||!1,this.dialogueDownTriggered=t.dialogueDownTriggered||!1,this.dialogueWhichWayTriggered=t.dialogueWhichWayTriggered||!1,this.dialogueDetectedTriggered=t.dialogueDetectedTriggered||!1,this.deathsCount=t.deathsCount!==void 0?t.deathsCount:0,this.elapsedTime=t.elapsedTime!==void 0?t.elapsedTime:0,this.populateVisitedCells(),this.lastSavePos={x:t.player.x,y:t.player.y,z:t.player.z},this.hunterOnSameFloorDetected=t.hunterOnSameFloorDetected||!1,this.hasSavePoint=!0,this.lastPlayerCell={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.populateFullyRevealedCells(this.player.z),this.exitPathfinderUnlocked=this.checkExitNeighborVisited()}checkHunterCollision(){if(this.deathAnimation&&this.deathAnimation.active)return;const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=Math.floor(this.mazeGen.startPos.x),a=Math.floor(this.mazeGen.startPos.y),r=this.mazeGen.startPos.z,o=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===n&&this.inactiveTeleportPos.y===a&&this.inactiveTeleportPos.z===r;if(!(t===n&&e===a&&i===r&&!o)){for(const c of this.hunters)if(!(c.state==="SLEEP"||c.state==="DEAD_BY_JELLY")&&c.x===t&&c.y===e&&c.z===i){c.visualX=c.x,c.visualY=c.y,c.visualZ=c.z,this.isGameOver=!0,this.deathsCount++,this.hideGameUI(),this.ui.showInfoBanner(Nt("msgKeyDropped")),this.deathAnimation={active:!0,hunter:c,playerPos:{x:this.player.x,y:this.player.y,z:this.player.z},elapsed:0,duration:1.8,screenFilled:!1,reversing:!1,delayElapsed:0,delayDuration:1.5,glitchElapsed:0,glitchDuration:1.5,uiFade:0,uiTriggered:!1};return}}}hideGameUI(){this.ui.hideGameUI(),this.ui.hidePause(),this.canvas.classList.remove("hunted-map-effect"),this.isMap3DActive=!1}initThree(){this.scene=new Zp,this.camera=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new cl({antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.appendChild(this.renderer.domElement),this.controls=new im(this.camera,this.renderer.domElement),this.controls.enableDamping=!0}init(t=null){this.handleKeyDownExtra=c=>{const l=c.key.toLowerCase();if(this.pathfinderConfirmTarget){if(l==="enter"||l===" "||l==="y"){const y=this.pathfinderConfirmTarget;this.pathfinderConfirmTarget=null;const g=document.getElementById("pathfinder-confirm-modal");g&&g.classList.add("hidden"),this.triggerPathReveal(y.x,y.y,y.z,!0),c.preventDefault()}if(l==="escape"||l==="backspace"){this.pathfinderConfirmTarget=null;const y=document.getElementById("pathfinder-confirm-modal");y&&y.classList.add("hidden"),c.preventDefault()}return}if(l==="escape"){if(this.isMap3DActive){this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D(),c.preventDefault();return}this.togglePause();return}if(this.isPaused)return;const u=Math.floor(this.player.x),f=Math.floor(this.player.y),p=this.player.z,m=this.maze.get(u,f,p),T=m===this.mazeGen.TYPES.JELLY_PORTAL,_=m===this.mazeGen.TYPES.TELEPORT||T,h=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===u&&this.inactiveTeleportPos.y===f&&this.inactiveTeleportPos.z===p,d=_&&this.discoveredTeleports.has(`${u},${f},${p}`);if(!this.isMap3DActive&&d&&!h&&(l==="q"||l==="e"||l==="m"||l===" "||l==="enter")){c.preventDefault(),this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(Nt("msgNoOtherActiveTeleport"));return}if(l==="m"&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D()),l==="z"&&this.toggleZoom(),this.isMap3DActive&&!this.isIntroPlaying){if(this.isTeleportMode){if(this.teleportConfirmModalActive){if((l==="a"||l==="arrowleft"||l==="d"||l==="arrowright")&&(this.teleportModalSelection=this.teleportModalSelection==="go"?"cancel":"go",c.preventDefault()),l==="enter"||l===" "||l==="y"){if(this.teleportModalSelection==="go"&&this.selectedTeleportIndex!==null){const g=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(g.x,g.y,g.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;c.preventDefault()}(l==="escape"||l==="backspace")&&(this.teleportConfirmModalActive=!1,c.preventDefault());return}const y=this.getSelectableTeleportIndices();if(y.length>0){let g=y.indexOf(this.selectedTeleportIndex);if(l==="a"||l==="arrowleft"){g=(g-1+y.length)%y.length,this.selectedTeleportIndex=y[g];const v=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=v.z,this.mapCursor={x:v.x,y:v.y,z:v.z},c.preventDefault()}if(l==="d"||l==="arrowright"){g=(g+1)%y.length,this.selectedTeleportIndex=y[g];const v=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=v.z,this.mapCursor={x:v.x,y:v.y,z:v.z},c.preventDefault()}if((l==="enter"||l===" "||l==="y")&&this.selectedTeleportIndex!==null){const v=this.allTeleports[this.selectedTeleportIndex],E=Math.floor(this.player.x),b=Math.floor(this.player.y),S=this.player.z,z=v&&v.x===E&&v.y===b&&v.z===S;v&&!z&&(this.teleportTo(v.x,v.y,v.z),this.toggleTeleportMap(!1)),c.preventDefault()}}(l==="escape"||l==="backspace")&&(this.toggleTeleportMap(!1),c.preventDefault());return}if((l==="q"||l==="pagedown")&&(this.activeMapFloor-2>=1&&(this.activeMapFloor-=2),c.preventDefault()),(l==="e"||l==="pageup")&&(this.activeMapFloor+2<=this.mazeGen.size-2&&(this.activeMapFloor+=2),c.preventDefault()),(l==="a"||l==="arrowleft")&&(this.navigateCursor("left"),c.preventDefault()),(l==="d"||l==="arrowright")&&(this.navigateCursor("right"),c.preventDefault()),(l==="w"||l==="arrowup")&&(this.navigateCursor("up"),c.preventDefault()),(l==="s"||l==="arrowdown")&&(this.navigateCursor("down"),c.preventDefault()),l==="enter"||l===" "||l==="y"){const y=this.mapCursor.x,g=this.mapCursor.y,v=this.mapCursor.z;this.getInteractiveElements(this.activeMapFloor).some(S=>S.x===y&&S.y===g&&S.z===v)&&this.triggerPathReveal(y,g,v),c.preventDefault()}}},this.handleResize=()=>this.resize(),this.handleKeyboardDetection=()=>{this.lastInputDevice!=="keyboard"&&(this.lastInputDevice="keyboard",this.ui.updateControlsHint("keyboard",this.mazeGen.size>11)),this.isMouseOrTouchDetected=!1},window.addEventListener("keydown",this.handleKeyDownExtra),window.addEventListener("keydown",this.handleKeyboardDetection),window.addEventListener("resize",this.handleResize);const e=document.getElementById("mobile-zoom-btn");e&&(e.onclick=c=>{c.stopPropagation(),!(Date.now()-this.lastTeleportCloseTime<500)&&this.toggleZoom()}),this.ui.uiMobileUp&&(this.ui.uiMobileUp.onclick=()=>{Date.now()-this.lastTeleportCloseTime<500||this.changeFloor(2)}),this.ui.uiMobileDown&&(this.ui.uiMobileDown.onclick=()=>{Date.now()-this.lastTeleportCloseTime<500||this.changeFloor(-2)}),this.ui.uiMobileMap&&(this.ui.uiMobileMap.onclick=()=>{if(Date.now()-this.lastTeleportCloseTime<500)return;if(this.isMap3DActive){this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D();return}const c=Math.floor(this.player.x),l=Math.floor(this.player.y),u=this.player.z,f=this.maze.get(c,l,u)===this.mazeGen.TYPES.JELLY_PORTAL,p=this.maze.get(c,l,u)===this.mazeGen.TYPES.TELEPORT||f,m=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===c&&this.inactiveTeleportPos.y===l&&this.inactiveTeleportPos.z===u;p&&!m?this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(Nt("msgNoOtherActiveTeleport")):this.toggleMap3D()});let i=!1,n=0,a=0;if(this.handlePointerDown=c=>{i=!1,n=c.clientX,a=c.clientY},this.handlePointerUp=c=>{const l=c.clientX-n,u=c.clientY-a;Math.sqrt(l*l+u*u)>5&&(i=!0)},this.handleCanvasClick=c=>{i||Date.now()-this.lastTeleportCloseTime<500||this.onCanvasClick(c)},this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerup",this.handlePointerUp),this.renderer.domElement.addEventListener("click",this.handleCanvasClick),this.resize(),this.updateFloorUI(),this.hideCanvasInstant(),t)this.restoreFromSave(t),this.playContinueAnimation();else if(this.isTutorialMode){this.isStoryActive=!1,this.isIntroPlaying=!1;const c=document.getElementById("map-area-container"),l=document.getElementById("left-hud-panel"),u=document.getElementById("right-hud-panel"),f=document.getElementById("bottom-hud-container");c&&c.classList.remove("hidden","intro-hidden"),l&&l.classList.remove("hidden","intro-hidden"),u&&u.classList.remove("hidden","intro-hidden"),f&&f.classList.remove("hidden","intro-hidden"),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1),this.ui.setMap3DVisible(!1),this.isMap3DActive=!1,this.staticMapCacheDirty=!0,this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2}else this.startStorytelling();this.loop();const r=this.mazeGen.size,o=document.getElementById("mobile-zoom-btn");r<=11?o&&o.classList.add("hidden"):o&&o.classList.remove("hidden"),this.ui.updateControlsHint(this.lastInputDevice,r>11)}hideCanvasInstant(){const t=document.getElementById("map-area-container"),e=document.getElementById("left-hud-panel"),i=document.getElementById("right-hud-panel"),n=document.getElementById("bottom-hud-container");t&&(t.style.transition="none",t.classList.remove("intro-reveal"),t.classList.add("intro-hidden"),t.offsetHeight,t.style.transition=""),e&&(e.style.transition="none",e.classList.remove("intro-reveal"),e.classList.add("intro-hidden"),e.offsetHeight,e.style.transition=""),i&&(i.style.transition="none",i.classList.remove("intro-reveal"),i.classList.add("intro-hidden"),i.offsetHeight,i.style.transition=""),n&&(n.style.transition="none",n.classList.remove("intro-reveal"),n.classList.add("intro-hidden"),n.offsetHeight,n.style.transition="")}drawElevator2D(t,e,i,n,a,r,o,c,l=!1,u=0){const f=e===Math.floor(o)&&i===Math.floor(c);if(f){const h=.85+.15*Math.sin(Date.now()/150);t.save(),t.globalAlpha=h}const p=a&&this.maze.get(e,i,u+1)===this.mazeGen.TYPES.ELEVATOR_VISITED,m=r&&this.maze.get(e,i,u-1)===this.mazeGen.TYPES.ELEVATOR_VISITED;if(l)if(a&&r){let h=!1,d=!1;if(this.activePathReveal){const v=this.activePathReveal.findIndex(E=>E.x===e&&E.y===i&&E.z===u);if(v!==-1&&v<this.activePathReveal.length-1){const E=this.activePathReveal[v+1];E.z>u&&(h=!0),E.z<u&&(d=!0)}}!h&&!d&&(h=this.revealedPathSet.has(`${e},${i},${u+1}`)||this.revealedPathSet.has(`${e},${i},${u+2}`),d=this.revealedPathSet.has(`${e},${i},${u-1}`)||this.revealedPathSet.has(`${e},${i},${u-2}`));const y=h||!h&&!d,g=d||!h&&!d;t.fillStyle=y?$.COLORS.REVEALED_PATH:p?$.COLORS.NEON_UP:$.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n/2),t.fillStyle=g?$.COLORS.REVEALED_PATH:m?$.COLORS.NEON_DOWN:$.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n+n/2,n,n/2)}else t.fillStyle=$.COLORS.REVEALED_PATH,t.fillRect(e*n,i*n,n,n);else a&&r?(t.fillStyle=p?$.COLORS.NEON_UP:$.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n/2),t.fillStyle=m?$.COLORS.NEON_DOWN:$.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n+n/2,n,n/2)):a?(t.fillStyle=p?$.COLORS.NEON_UP:$.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n)):(t.fillStyle=m?$.COLORS.NEON_DOWN:$.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n,n,n));const T=e*n+n/2,_=i*n+n/2;if(t.fillStyle="#000000",a&&r){const h=n*.28,d=_-n/5,y=_+n/5;t.beginPath(),t.moveTo(T,d-h/2),t.lineTo(T-h*.6,d+h/2),t.lineTo(T+h*.6,d+h/2),t.closePath(),t.fill(),t.beginPath(),t.moveTo(T,y+h/2),t.lineTo(T-h*.6,y-h/2),t.lineTo(T+h*.6,y-h/2),t.closePath(),t.fill()}else if(a){const h=n*.45;t.beginPath(),t.moveTo(T,_-h/2),t.lineTo(T-h*.6,_+h/2),t.lineTo(T+h*.6,_+h/2),t.closePath(),t.fill()}else{const h=n*.45;t.beginPath(),t.moveTo(T,_+h/2),t.lineTo(T-h*.6,_-h/2),t.lineTo(T+h*.6,_-h/2),t.closePath(),t.fill()}f&&t.restore()}drawCellShadow2D(t,e,i,n,a,r,o){if(r===4)return;const c=(p,m)=>p<0||p>=a||m<0||m>=a?!1:this.isWallVisible(p,m,o),l=c(e,i+1),u=c(e+1,i),f=c(e+1,i+1);if(l||u||f){t.fillStyle="rgba(0, 0, 0, 0.4)";const p=n*$.SHADOW_SIZE_FACTOR;if(l&&t.fillRect(e*n,(i+1)*n-p,n,p),u){const m=l?n-p:n;t.fillRect((e+1)*n-p,i*n,p,m)}!l&&!u&&f&&t.fillRect((e+1)*n-p,(i+1)*n-p,p,p)}}updateRendererSize(){this.renderer&&(this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix())}resize(){const e=window.innerHeight>window.innerWidth?window.innerWidth*.82:window.innerHeight*.75;this.canvas.width=e,this.canvas.height=e,this.staticMapCacheDirty=!0,this.updateRendererSize()}getMapVisitedPercentage(){let t=0,e=0;const i=this.mazeGen.size,n=this.mazeGen.TYPES;for(let a=0;a<i;a++)for(let r=0;r<i;r++)for(let o=0;o<i;o++){const c=this.maze.get(a,r,o);if(c===n.WALL||c===n.EXIT||c===n.STATUE)continue;t++,(c===n.VISITED||c===n.START||c===n.ELEVATOR_VISITED||c===n.TELEPORT&&this.discoveredTeleports.has(`${a},${r},${o}`))&&e++}return t===0?0:Math.floor(e/t*100)}updateFloorUI(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=i+1<this.mazeGen.size&&this.maze.get(t,e,i+1)!==this.mazeGen.TYPES.WALL,a=i-1>=0&&this.maze.get(t,e,i-1)!==this.mazeGen.TYPES.WALL;this.ui.updateFloor(i,n,a);const r=this.getMapVisitedPercentage();this.ui.updateVisitedPercent(r),r===100&&!this.mapCompletion100Triggered&&(this.ui.showInfoBanner(Nt("msgWorldSaved")),this.mapCompletion100Triggered=!0),this.checkPathfinderRewards(r)}checkPathfinderRewards(t){const e=this.degree>=12?10:this.degree>=8?20:0;if(e===0)return;this.pathfinderRewardsGranted===void 0&&(this.pathfinderRewardsGranted=0);const i=Math.floor(t/e);if(i>this.pathfinderRewardsGranted){const n=i-this.pathfinderRewardsGranted;this.pathfindersRemaining+=n,this.totalPathfinders+=n,this.pathfinderRewardsGranted=i,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),this.ui.showInfoBanner(Nt("msgFoundPathfinder")),rs(this)}}getTeleportCandidates(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z;return Array.from(this.discoveredTeleports).map(n=>{const[a,r,o]=n.split(",").map(Number);return{x:a,y:r,z:o}}).filter(n=>!(n.x===t&&n.y===e&&n.z===i||this.inactiveTeleportPos&&this.inactiveTeleportPos.x===n.x&&this.inactiveTeleportPos.y===n.y&&this.inactiveTeleportPos.z===n.z))}getSelectableTeleportIndices(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z;return this.allTeleports.map((n,a)=>({t:n,idx:a})).filter(n=>{const a=`${n.t.x},${n.t.y},${n.t.z}`,r=this.discoveredTeleports.has(a),o=this.inactiveTeleportPos&&n.t.x===this.inactiveTeleportPos.x&&n.t.y===this.inactiveTeleportPos.y&&n.t.z===this.inactiveTeleportPos.z,c=n.t.x===t&&n.t.y===e&&n.t.z===i;return r&&!o&&!c}).map(n=>n.idx)}updateGamepad(t){const e=navigator.getGamepads?navigator.getGamepads():[],i=e[0]||e.find(_=>_!==null);if(!i)return;const n=.25;(Math.abs(i.axes[0])>n||Math.abs(i.axes[1])>n||i.axes[2]!==void 0&&Math.abs(i.axes[2])>n||i.axes[3]!==void 0&&Math.abs(i.axes[3])>n||i.buttons.some(_=>_.pressed))&&(this.isMouseOrTouchDetected=!1,this.lastInputDevice!=="gamepad"&&(this.lastInputDevice="gamepad",this.ui.updateControlsHint("gamepad",this.mazeGen.size>11)));const r=i.axes[0],o=i.axes[1];let c=r<-n,l=r>n,u=o<-n,f=o>n;if(i.buttons[12]&&i.buttons[12].pressed&&(u=!0),i.buttons[13]&&i.buttons[13].pressed&&(f=!0),i.buttons[14]&&i.buttons[14].pressed&&(c=!0),i.buttons[15]&&i.buttons[15].pressed&&(l=!0),c?this.input.keys.arrowleft=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowleft=!1),l?this.input.keys.arrowright=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowright=!1),u?this.input.keys.arrowup=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowup=!1),f?this.input.keys.arrowdown=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowdown=!1),!this.prevGamepadButtons){this.prevGamepadButtons=i.buttons.map(_=>_.pressed);return}const p=_=>this.prevGamepadButtons[_],m=_=>i.buttons[_]&&i.buttons[_].pressed,T=_=>m(_)&&!p(_);if(this.pathfinderConfirmTarget){if(T(0)||T(2)){const _=this.pathfinderConfirmTarget;this.pathfinderConfirmTarget=null;const h=document.getElementById("pathfinder-confirm-modal");h&&h.classList.add("hidden"),this.triggerPathReveal(_.x,_.y,_.z,!0)}if(T(1)||T(8)){this.pathfinderConfirmTarget=null;const _=document.getElementById("pathfinder-confirm-modal");_&&_.classList.add("hidden")}this.prevGamepadButtons=i.buttons.map(_=>_.pressed);return}if(this.isStoryActive){if(T(9))this.skipStory();else if(!this.isPreloadingActive){for(let _=0;_<i.buttons.length;_++)if(_!==9&&T(_)){this.triggerAdvanceStory();break}}this.prevGamepadButtons=i.buttons.map(_=>_.pressed);return}if(T(9)){this.togglePause(),this.prevGamepadButtons=i.buttons.map(_=>_.pressed);return}if(this.isPaused){this.prevGamepadButtons=i.buttons.map(_=>_.pressed);return}if(this.isMap3DActive&&!this.isIntroPlaying){const _=m(7),h=m(6);if(_||h){const E=this.mazeGen.size;let b=window.innerWidth*.7/E;b=Math.max(20,Math.min(48,b));const S=b*this.mapZoom,z=S/2,M=S/4,A=z*5,G=window.innerWidth/2+this.mapPanOffsetX,k=window.innerHeight/2+this.mapPanOffsetY,q=this.mapCursor.x,w=this.mapCursor.y,O=this.mapCursor.z,B=this.visualActiveFloor,X=(q-w)*z+G,Y=(q+w)*M-(O-B)*A+k,Z=this.mapZoom,V=1.025;let K=_?Z*V:Z/V;if(K=Math.max(.5,Math.min(4,K)),K!==Z){const J=K/Z;this.mapPanOffsetX=X-(X-(window.innerWidth/2+this.mapPanOffsetX))*J-window.innerWidth/2,this.mapPanOffsetY=Y-(Y-(window.innerHeight/2+this.mapPanOffsetY))*J-window.innerHeight/2,this.mapZoom=K}}const d=c&&(!this.prevGamepadStick||!this.prevGamepadStick.left),y=l&&(!this.prevGamepadStick||!this.prevGamepadStick.right),g=u&&(!this.prevGamepadStick||!this.prevGamepadStick.up),v=f&&(!this.prevGamepadStick||!this.prevGamepadStick.down);if(this.prevGamepadStick={left:c,right:l,up:u,down:f},this.isTeleportMode){if(this.teleportConfirmModalActive){if((d||T(14)||y||T(15))&&(this.teleportModalSelection=this.teleportModalSelection==="go"?"cancel":"go"),T(0)||T(3)||T(2))if(this.teleportModalSelection==="go"){const E=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(E.x,E.y,E.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;T(1)&&(this.teleportConfirmModalActive=!1)}else{const E=this.getSelectableTeleportIndices();if(E.length>0){let b=E.indexOf(this.selectedTeleportIndex);if(d||T(14)){b=(b-1+E.length)%E.length,this.selectedTeleportIndex=E[b];const S=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=S.z,this.mapCursor={x:S.x,y:S.y,z:S.z}}if(y||T(15)){b=(b+1)%E.length,this.selectedTeleportIndex=E[b];const S=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=S.z,this.mapCursor={x:S.x,y:S.y,z:S.z}}if(T(0)||T(3)||T(2)){const S=this.allTeleports[this.selectedTeleportIndex],z=Math.floor(this.player.x),M=Math.floor(this.player.y),A=this.player.z,G=S&&S.x===z&&S.y===M&&S.z===A;S&&!G&&(this.teleportTo(S.x,S.y,S.z),this.toggleTeleportMap(!1))}}(T(1)||T(8))&&this.toggleTeleportMap(!1)}this.prevGamepadButtons=i.buttons.map(E=>E.pressed);return}if((d||T(14))&&this.navigateCursor("left"),(y||T(15))&&this.navigateCursor("right"),(g||T(12))&&this.navigateCursor("up"),(v||T(13))&&this.navigateCursor("down"),(T(0)||T(4))&&this.activeMapFloor-2>=1&&(this.activeMapFloor-=2),T(5)&&this.activeMapFloor+2<=this.mazeGen.size-2&&(this.activeMapFloor+=2),T(3)||T(2)){const E=this.mapCursor.x,b=this.mapCursor.y,S=this.mapCursor.z;this.getInteractiveElements(this.activeMapFloor).some(A=>A.x===E&&A.y===b&&A.z===S)&&this.triggerPathReveal(E,b,S)}(T(1)||T(8))&&this.toggleMap3D(),this.prevGamepadButtons=i.buttons.map(E=>E.pressed);return}if(!this.isMap3DActive&&!this.isTeleportMode){const _=Math.floor(this.player.x),h=Math.floor(this.player.y),d=this.player.z,y=this.maze.get(_,h,d),g=y===this.mazeGen.TYPES.JELLY_PORTAL,v=y===this.mazeGen.TYPES.TELEPORT||g,E=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===_&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===d;if(v&&this.discoveredTeleports.has(`${_},${h},${d}`)&&!E&&(T(0)||T(2)||T(3)||T(8))){this.discoveredTeleports.size>=2?(this.toggleTeleportMap(!0),this.gamepadTeleportSelectedIndex=0):this.ui.showInfoBanner(Nt("msgNoOtherActiveTeleport")),this.prevGamepadButtons=i.buttons.map(S=>S.pressed);return}}if(T(0)){if(this.isTeleportMode){const h=this.getTeleportCandidates()[this.gamepadTeleportSelectedIndex];h&&this.teleportTo(h.x,h.y,h.z)}else if(!this.isMap3DActive){const _=Math.floor(this.player.x),h=Math.floor(this.player.y),d=this.player.z,y=d>0&&this.maze.get(_,h,d-1)!==0,v=this.maze.get(_,h,d)===this.mazeGen.TYPES.TELEPORT,E=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===_&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===d;(!(v&&this.discoveredTeleports.has(`${_},${h},${d}`))||E)&&y&&this.changeFloor(-2)}}if(T(1)&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleZoom()),T(2)&&!this.isTeleportMode&&!this.isMap3DActive){const _=Math.floor(this.player.x),h=Math.floor(this.player.y),d=this.player.z,y=this.maze.get(_,h,d),g=y===this.mazeGen.TYPES.JELLY_PORTAL,v=y===this.mazeGen.TYPES.TELEPORT||g,E=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===_&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===d;v&&this.discoveredTeleports.has(`${_},${h},${d}`)&&!E&&(this.discoveredTeleports.size>=2?(this.toggleTeleportMap(!0),this.gamepadTeleportSelectedIndex=0):this.ui.showInfoBanner(Nt("msgNoOtherActiveTeleport")))}if(T(3)&&!this.isTeleportMode&&!this.isMap3DActive){const _=Math.floor(this.player.x),h=Math.floor(this.player.y),d=this.player.z,y=d<this.mazeGen.size-1&&this.maze.get(_,h,d+1)!==0,v=this.maze.get(_,h,d)===this.mazeGen.TYPES.TELEPORT,E=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===_&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===d;(!(v&&this.discoveredTeleports.has(`${_},${h},${d}`))||E)&&y&&this.changeFloor(2)}if(T(8)&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D()),this.isTeleportMode){const _=T(4)||T(14),h=T(5)||T(15);if(_||h){const d=this.getTeleportCandidates();d.length>0&&(_?this.gamepadTeleportSelectedIndex=(this.gamepadTeleportSelectedIndex-1+d.length)%d.length:this.gamepadTeleportSelectedIndex=(this.gamepadTeleportSelectedIndex+1)%d.length)}}if(T(5)&&!this.isTeleportMode&&!this.isMap3DActive&&this.tryActivateJellyPortal(),this.isMap3DActive&&this.controls){const _=i.axes[2],h=i.axes[3],d=i.buttons[7]?i.buttons[7].value:0,y=i.buttons[6]?i.buttons[6].value:0,g=.15,v=.15,E=($.ROT_SPEED!==void 0?$.ROT_SPEED:2)*t,b=20*t,S=Math.abs(_)>g||Math.abs(h)>g,z=d>v||y>v;if(S||z){const M=new Q().copy(this.camera.position).sub(this.controls.target),A=new Sa().setFromVector3(M);if(Math.abs(_)>g&&(A.theta-=_*E),Math.abs(h)>g){A.phi-=h*E;const q=this.controls.minPolarAngle||0,w=this.controls.maxPolarAngle||Math.PI;A.phi=Math.max(q,Math.min(w,A.phi))}d>v&&(A.radius-=d*b),y>v&&(A.radius+=y*b);const G=this.controls.minDistance||2,k=this.controls.maxDistance||100;A.radius=Math.max(G,Math.min(k,A.radius)),A.makeSafe(),M.setFromSpherical(A),this.camera.position.copy(this.controls.target).add(M),this.controls.update()}}this.prevGamepadButtons=i.buttons.map(_=>_.pressed)}queueNotification(t){this.notificationQueue.push(t)}updateNotification(t){if(!this.activeNotification){if(this.notificationQueue.length>0){const i=this.notificationQueue.shift();this.activeNotification={text:i,displayText:"",state:"OPENING",widthProgress:0,typeTimer:0,charIndex:0,waitTimer:0,closeProgress:1}}return}const e=this.activeNotification;e.state==="OPENING"?(e.widthProgress+=t/.15,e.widthProgress>=1&&(e.widthProgress=1,e.state="TYPING")):e.state==="TYPING"?(e.typeTimer+=t,e.typeTimer>=.025&&(e.typeTimer=0,e.charIndex++,e.displayText=e.text.substring(0,e.charIndex),e.charIndex>=e.text.length&&(e.state="WAITING",e.waitTimer=0))):e.state==="WAITING"?(this.isZoomTransitionActive||(e.waitTimer+=t),e.waitTimer>=1&&(e.state="CLOSING",e.closeProgress=1)):e.state==="CLOSING"&&(e.closeProgress-=t/.15,e.closeProgress<=0&&(e.closeProgress=0,this.activeNotification=null))}update(t){if(this.isGameOver||this.isDestroyed||!t)return;if(this.teleportAnim&&this.teleportAnim.active){if(this.teleportAnim.elapsed+=t,this.auraTime=(this.auraTime||0)+t,this.teleportAnim.elapsed>=this.teleportAnim.duration)if(this.teleportAnim.stage==="OUT"){this.player.x=this.teleportAnim.targetX,this.player.y=this.teleportAnim.targetY,this.player.z=this.teleportAnim.targetZ,this.activeMapFloor=this.teleportAnim.targetZ,this.visualActiveFloor=this.teleportAnim.targetZ,this.lastPlayerCell={x:Math.floor(this.teleportAnim.targetX),y:Math.floor(this.teleportAnim.targetY),z:this.teleportAnim.targetZ};const o=Math.floor(this.player.x),c=Math.floor(this.player.y),l=this.player.z;this.maze.get(o,c,l)===this.mazeGen.TYPES.PATH&&(this.maze.set(o,c,l,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${o},${c},${l}`)),this.updateFloorUI(),this.staticMapCacheDirty=!0,this.teleportAnim.stage="IN",this.teleportAnim.elapsed=0}else this.teleportAnim=null;this.updateNotification(t),this.updateGamepad(t);return}if(this.jellyPortalFreezeTimer>0){this.jellyPortalFreezeTimer-=t,this.jellyPortalResetElapsed+=t,this.jellyPortalFreezeTimer<=0&&(this.jellyPortalFreezeTimer=0,this.executeJellyPortalReset(Math.floor(this.player.x),Math.floor(this.player.y),this.player.z),this.jellyPortalResetCells.clear()),this.updateNotification(t),this.updateGamepad(t);return}if(!this.isPaused&&!this.isIntroPlaying&&!this.isStoryActive){this.elapsedTime+=t;const o=Math.floor(this.player.x),c=Math.floor(this.player.y),l=this.player.z,u=this.maze.get(o,c,l),f=o===Math.floor(this.mazeGen.startPos.x)&&c===Math.floor(this.mazeGen.startPos.y)&&l===this.mazeGen.startPos.z,m=(u===this.mazeGen.TYPES.TELEPORT||u===this.mazeGen.TYPES.START||f)&&u!==this.mazeGen.TYPES.JELLY_PORTAL?1:0;this.auraHeight<m?this.auraHeight=Math.min(m,this.auraHeight+t*4):this.auraHeight>m&&(this.auraHeight=Math.max(m,this.auraHeight-t*4)),this.auraTime=(this.auraTime||0)+t}if(this.isStoryActive){this.updateGamepad(t),this.updateStory(t);return}if(this.isZoomTransitionActive&&(this.zoomTransitionTimer-=t,this.zoomTransitionTimer<=0&&(this.isZoomTransitionActive=!1,this.zoomTransitionTimer=0)),this.updateNotification(t),this.updateGamepad(t),this.isPaused)return;this.isIntroPlaying||this.hunters.some(c=>c.state!=="SLEEP"&&c.z===this.player.z)&&(this.hunterOnSameFloorDetected||(this.ui.showInfoBanner(Nt("msgDidYouHearThat")),this.hunterOnSameFloorDetected=!0)),this.hunters.some(o=>o.state==="SLEEP")&&this.getMapVisitedPercentage()>=10&&this.wakeHunters();const e=this.getMapVisitedPercentage(),i=this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.hunterBehavior&&this.currentTutorialStage.hunterBehavior.respawn===!1;for(const o of this.hunters)o.state==="DEAD_BY_JELLY"&&o.respawnThresholdPercentage!==null&&!i&&e>=o.respawnThresholdPercentage&&(this.respawnSingleHunter(o),this.ui.showInfoBanner(Nt("msgHunterReturned")));const a=1e3/$.HUNTER_SPEED*t;for(const o of this.hunters)o.visualX===null&&(o.visualX=o.x),o.visualY===null&&(o.visualY=o.y),o.visualZ===null&&(o.visualZ=o.z),!(o.state==="DEAD_BY_JELLY"||o.x===null||o.y===null||o.z===null)&&(o.visualX=la(o.visualX,o.x,a),o.visualY=la(o.visualY,o.y,a),o.visualZ=la(o.visualZ,o.z,a*2),o.generateCloudTexture(t));if(this.isMap3DActive){this.controls&&this.controls.update();const o=this.mazeGen.size,c=this.isTeleportMode?.25:1;for(const l of this.hunterMeshes){const u=l.hunter,f=l.mesh;if(u.state==="DEAD_BY_JELLY"){f.visible=!1;continue}if(f.visible=!0,u.visualX===null||u.visualZ===null||u.visualY===null)continue;f.position.set(u.visualX-o/2,(u.visualZ-o/2)*this.vScale,u.visualY-o/2);const p=u.jellyTime;let m=1+Math.sin(p*1.2)*.07,T=1+Math.cos(p*.8)*.07,_=1+Math.sin(p*1.5)*.07;if(u.state==="DYING"){const E=1-Math.min(1,this.jellyPortalResetElapsed/this.jellyPortalResetDuration);m*=E,T*=E,_*=E;const b=(Math.random()-.5)*.15,S=(Math.random()-.5)*.15,z=(Math.random()-.5)*.15;f.position.add({x:b,y:S,z})}if(l.coreMesh&&(l.coreMesh.scale.set(m,T,_),l.coreMesh.material)){let v=(.8+.2*Math.sin(p*3)+(Math.random()<.1?(Math.random()-.5)*.4:0))*c;if(u.state==="DYING"){const E=Math.min(1,this.jellyPortalResetElapsed/this.jellyPortalResetDuration);v*=1-E}l.coreMesh.material.emissiveIntensity=v}l.particles&&l.particles.forEach(v=>{const E=v.userData;E.angle+=E.speed*t;const b=Math.cos(E.angle)*E.radius,S=Math.sin(E.angle)*E.radius,z=Math.sin(E.angle*2+E.phaseY)*.25;let M=0,A=0,G=0;Math.random()<.15?(M=(Math.random()-.5)*.12,A=(Math.random()-.5)*.12,G=(Math.random()-.5)*.12,v.scale.set(1.4+Math.random()*.4,.6+Math.random()*.3,1.4+Math.random()*.4)):v.scale.set(1,1,1),v.position.set(b+M,z+A,S+G)});const h=u.x-u.visualX,d=u.y-u.visualY,y=Math.sqrt(h*h+d*d),g=Math.max(0,Math.min(1,1-y));if(u.lastPos&&(u.lastPos.x!==u.x||u.lastPos.y!==u.y)){l.trail1.position.set(u.lastPos.x-o/2,(u.lastPos.z-o/2)*this.vScale,u.lastPos.y-o/2),l.trail1.visible=!0;const v=u.jellyTime-.2,E=.95-g*.47,b=E*(1+Math.sin(v*1.2)*.07),S=E*(1+Math.cos(v*.8)*.07),z=E*(1+Math.sin(v*1.5)*.07);l.trail1.scale.set(b,S,z),l.trail1.material&&(l.trail1.material.opacity=(.4-g*.2)*c)}else l.trail1.visible=!1;if(u.history&&u.history.length===2){const v=u.history[0];l.trail2.position.set(v.x-o/2,(v.z-o/2)*this.vScale,v.y-o/2);const E=.48*(1-g);if(E>.02){l.trail2.visible=!0;const b=u.jellyTime-.4,S=E*(1+Math.sin(b*1.2)*.07),z=E*(1+Math.cos(b*.8)*.07),M=E*(1+Math.sin(b*1.5)*.07);l.trail2.scale.set(S,z,M),l.trail2.material&&(l.trail2.material.opacity=.2*(1-g)*c)}else l.trail2.visible=!1}else l.trail2.visible=!1}if(this.keyMeshes)for(const l of this.keyMeshes)l.rotation.y+=1.5*t,l.rotation.x+=.5*t;if(this.isTeleportMode&&this.teleportMeshes&&this.gamepadTeleportSelectedIndex!==void 0){const u=this.getTeleportCandidates()[this.gamepadTeleportSelectedIndex];this.teleportMeshes.forEach(f=>{const{gridX:p,gridY:m,gridZ:T}=f.userData;if(u&&p===u.x&&m===u.y&&T===u.z){const h=1.3+.25*Math.sin(Date.now()/100);f.scale.set(h,h,h),f.material&&f.material.emissive&&(f.material.emissive.setHex(16755200),f.material.emissiveIntensity=3.5)}else{const h=p===Math.floor(this.player.x)&&m===Math.floor(this.player.y)&&T===this.player.z,d=this.teleportCooldownTicks>0;let y=1;if(h&&(y=1.4),f.scale.set(y,y,y),f.material&&f.material.emissive)if(d)f.material.color.setHex(4473924),f.material.emissive.setHex(4473924),f.material.emissiveIntensity=0,f.material.opacity=.4;else if(h)f.material.color.setHex(65535),f.material.emissive.setHex(65535),f.material.emissiveIntensity=3,f.material.opacity=.5;else if(p===Math.floor(this.mazeGen.startPos.x)&&m===Math.floor(this.mazeGen.startPos.y)&&T===this.mazeGen.startPos.z)f.material.color.setHex($.COLORS.THREE_START),f.material.emissive.setHex($.COLORS.THREE_START),f.material.emissiveIntensity=this.isTeleportMode?2.5:.5,f.material.opacity=this.isTeleportMode?.95:.8;else{const E=this.maze.get(p,m,T)===this.mazeGen.TYPES.JELLY_PORTAL?$.COLORS.THREE_JELLY_PORTAL:$.COLORS.THREE_TELEPORT;f.material.color.setHex(E),f.material.emissive.setHex(E),f.material.emissiveIntensity=2.5,f.material.opacity=.95}}})}}if(!this.isMap3DActive&&!this.isZoomTransitionActive){let o=0,c=0;const f=1e3/$.HUNTER_SPEED*$.MOVE_SPEED_FACTOR*t;let p=0,m=0;if(this.input.touchMoveVector?(p=this.input.touchMoveVector.x,m=this.input.touchMoveVector.y):((this.input.keys.w||this.input.keys.arrowup)&&(m-=1),(this.input.keys.s||this.input.keys.arrowdown)&&(m+=1),(this.input.keys.a||this.input.keys.arrowleft)&&(p-=1),(this.input.keys.d||this.input.keys.arrowright)&&(p+=1)),p!==0||m!==0){const S=Math.sqrt(p*p+m*m);o=p/S*f,c=m/S*f,this.player.dir=Math.atan2(c,o)}let T=!1;if(o!==0||c!==0){T=!0;const S=.01,z=Math.abs(o)>S,M=Math.abs(c)>S;z&&M?(this.playerSide=o>0?"right":"left",this.playerVertical=c>0?"down":"up"):z?this.playerSide=o>0?"right":"left":M&&(this.playerVertical=c>0?"down":"up")}if(T?(this.playerWalkCycle=(this.playerWalkCycle||0)+t*18,this.playerSquashTargetX=1+Math.sin(this.playerWalkCycle)*.15,this.playerSquashTargetY=1-Math.sin(this.playerWalkCycle)*.15):(this.playerSquashTargetX=1,this.playerSquashTargetY=1),this.playerSquashX=this.playerSquashX||1,this.playerSquashY=this.playerSquashY||1,this.playerSquashX+=(this.playerSquashTargetX-this.playerSquashX)*.25,this.playerSquashY+=(this.playerSquashTargetY-this.playerSquashY)*.25,o!==0||c!==0){const S=Math.floor(this.player.x),z=Math.floor(this.player.y),M=this.player.x+o,A=this.player.y+c,G=(J,F,tt)=>{const nt=this.maze.get(J,F,tt);return nt===this.mazeGen.TYPES.WALL||nt===this.mazeGen.TYPES.STATUE?!1:nt===this.mazeGen.TYPES.EXIT&&this.keysCollected<this.totalKeys?(this.triggerLockedExitWarning(),!1):!0},k=$.PLAYER_COLLISION_RADIUS,q=$.PLAYER_COLLISION_OFFSET_X||0,w=$.PLAYER_COLLISION_OFFSET_Y||0,O=(J,F,tt)=>{const nt=Math.floor(J+q-k),vt=Math.floor(J+q+k),wt=Math.floor(F+w-k),L=Math.floor(F+w+k);for(let D=nt;D<=vt;D++)for(let H=wt;H<=L;H++)if(D<0||D>=this.mazeGen.size||H<0||H>=this.mazeGen.size||!G(D,H,tt))return!1;return!0};O(M,this.player.y,this.player.z)&&(this.player.x=M),O(this.player.x,A,this.player.z)&&(this.player.y=A);const B=Math.floor(this.player.x),X=Math.floor(this.player.y),Y=this.player.z;if(B!==S||X!==z){const J=this.maze.get(S,z,Y);if(J===this.mazeGen.TYPES.VISITED||J===this.mazeGen.TYPES.START||J===this.mazeGen.TYPES.TELEPORT){const tt=Y+1<this.mazeGen.size&&this.maze.get(B,X,Y+1)!==this.mazeGen.TYPES.WALL,nt=Y-1>=0&&this.maze.get(B,X,Y-1)!==this.mazeGen.TYPES.WALL;tt&&nt?this.dialogueWhichWayTriggered||(this.ui.showInfoBanner(Nt("msgWhichWay")),this.dialogueWhichWayTriggered=!0):tt?this.dialogueUpTriggered||(this.ui.showInfoBanner(Nt("msgElevatorUp")),this.dialogueUpTriggered=!0):nt&&(this.dialogueDownTriggered||(this.ui.showInfoBanner(Nt("msgElevatorDown")),this.dialogueDownTriggered=!0))}}const V=(J,F,tt)=>{const nt=this.maze.get(J,F,tt);(nt===this.mazeGen.TYPES.PATH||nt===this.mazeGen.TYPES.KEY||nt===this.mazeGen.TYPES.MANA)&&(nt===this.mazeGen.TYPES.KEY?this.collectKey(J,F,tt):nt===this.mazeGen.TYPES.MANA?this.collectMana(J,F,tt):(this.maze.set(J,F,tt,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${J},${F},${tt}`)),this.staticMapCacheDirty=!0)};V(B,X,Y),B!==S&&X!==z&&(V(B,z,Y),V(S,X,Y));const K=this.maze.get(B,X,Y);!this.exitPathfinderUnlocked&&this.checkExitNeighborVisited()&&(this.exitPathfinderUnlocked=!0,this.ui.showInfoBanner(Nt("msgExitFound"))),K===this.mazeGen.TYPES.EXIT&&this.triggerVictory()}if((o!==0||c!==0)&&(this.skipCellAnimations=!1),this.checkHunterCollision(),this.isGameOver)return;const _=Math.floor(this.player.x),h=Math.floor(this.player.y),d=this.player.z,y=this.maze.get(_,h,d)===this.mazeGen.TYPES.JELLY_PORTAL,g=this.maze.get(_,h,d)===this.mazeGen.TYPES.TELEPORT||y,v=this.teleportCooldownTicks>0;if(_>=0&&_<this.mazeGen.size&&h>=0&&h<this.mazeGen.size){if(this.maze.get(_,h,d)===this.mazeGen.TYPES.PATH)this.maze.set(_,h,d,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${_},${h},${d}`),this.staticMapCacheDirty=!0;else if(g){const G=`${_},${h},${d}`;!(this.lastPlayerCell&&this.lastPlayerCell.x===_&&this.lastPlayerCell.y===h&&this.lastPlayerCell.z===d)&&!v&&(this.discoveredTeleports.add(G),this.staticMapCacheDirty=!0,y?(this.triggerSave(),this.ui.showInfoBanner(Nt("msgJellyPortalNotSafe"))):(this.triggerSave(),this.ui.showInfoBanner(Nt("msgSafePointTeleport"))))}const S=d<this.mazeGen.size-1&&this.maze.get(_,h,d+1)!==this.mazeGen.TYPES.WALL,z=d>0&&this.maze.get(_,h,d-1)!==this.mazeGen.TYPES.WALL,M=S||z;if(this.lastPlayerCell){const G=this.lastPlayerCell.x,k=this.lastPlayerCell.y,q=this.lastPlayerCell.z,w=q<this.mazeGen.size-1&&this.maze.get(G,k,q+1)!==this.mazeGen.TYPES.WALL,O=q>0&&this.maze.get(G,k,q-1)!==this.mazeGen.TYPES.WALL;if((w||O)&&(G!==_||k!==h||q!==d)){const Y=`${G},${k},${q}`;this.revealedPathSet.has(Y)&&(this.revealedPathSet.delete(Y),this.staticMapCacheDirty=!0)}}const A=`${_},${h},${d}`;!M&&this.revealedPathSet.has(A)&&(this.revealedPathSet.delete(A),this.staticMapCacheDirty=!0)}g&&!v?(this.input.keys.e||this.input.keys.pageup||this.input.keys.q||this.input.keys.pagedown)&&(["e","q","pageup","pagedown"].forEach(S=>this.input.keys[S]=!1),this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(Nt("msgNoOtherActiveTeleport"))):((this.input.keys.e||this.input.keys.pageup)&&this.changeFloor(2),(this.input.keys.q||this.input.keys.pagedown)&&this.changeFloor(-2)),this.input.keys.r&&(this.input.keys.r=!1,this.tryActivateJellyPortal()),(!this.lastPlayerCell||this.lastPlayerCell.x!==_||this.lastPlayerCell.y!==h||this.lastPlayerCell.z!==d)&&(this.staticMapCacheDirty=!0);const b=window.innerHeight>window.innerWidth;this.ui.updateMobileMapButton(g,!!v,b,y),this.updateFloorUI(),this.lastPlayerCell={x:_,y:h,z:d}}const r=performance.now();if(r-this.lastHunterMove>$.HUNTER_SPEED){if(this.lastHunterMove=r,this.teleportCooldownTicks>0&&(this.teleportCooldownTicks--,this.staticMapCacheDirty=!0,this.teleportCooldownTicks===0)){this.inactiveTeleportPos=null;for(const h of this.hunters){if(h.state==="DEAD_BY_JELLY")continue;const d=this.maze.get(h.x,h.y,h.z);if(d===this.mazeGen.TYPES.VISITED||d===this.mazeGen.TYPES.START||d===this.mazeGen.TYPES.EXIT){const y=h.state;h.state="TRACKING",y!=="TRACKING"&&!this.dialogueDetectedTriggered&&(this.ui.showInfoBanner(Nt("msgIWasDetected")),this.dialogueDetectedTriggered=!0)}else h.state="WANDERING",h.pathToTarget=[],h.visitedNodes.clear(),h.visitedNodes.add(`${h.x},${h.y},${h.z}`)}}let o=0,c=0;const l=this.hunters.some(h=>h.state==="SLEEP");for(const h of this.hunters){if(h.state==="SLEEP"||h.state==="DEAD_BY_JELLY"||h.state==="DYING")continue;if(this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.hunterBehavior&&this.currentTutorialStage.hunterBehavior.static){if(this.checkHunterCollision(),this.isGameOver)return;continue}const y=h.state;h.move(this.player,this.maze,this.mazeGen.TYPES),h.state==="TRACKING"&&y!=="TRACKING"&&!this.dialogueDetectedTriggered&&(this.ui.showInfoBanner(Nt("msgIWasDetected")),this.dialogueDetectedTriggered=!0),(h.state==="TRACKING"||h.state==="TELEPORT_TRACKING")&&o++;const g=h.z===this.player.z;let v=!1;if(g)v=!0;else{const E=Math.max(5,Math.floor(this.degree*1.2));om({x:h.x,y:h.y,z:h.z},{x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.maze,this.mazeGen.size,this.mazeGen.TYPES.WALL,E,this.mazeGen.startPos)<=E&&(v=!0)}if(v&&c++,this.checkHunterCollision(),this.isGameOver)return}const u=o>0;this.ui.updateHazardWarning(u,this.teleportCooldownTicks,this.isSafeMode,l),u?this.canvas.classList.add("hunted-map-effect"):this.canvas.classList.remove("hunted-map-effect"),this.ui.setNearbyWarning(c>0);let f=1/0;const p=Math.floor(this.player.x),m=Math.floor(this.player.y),T=this.player.z,_=this.hunters.filter(h=>h.state!=="SLEEP");for(const h of _){const d=rm({x:h.x,y:h.y,z:h.z},{x:p,y:m,z:T},this.maze,this.mazeGen.size,this.mazeGen.TYPES.WALL);d<f&&(f=d)}this.ui.updateProximeter(f,_.length,this.isGameOver)}}changeFloor(t){if(this.isGameOver||this.floorTransition)return;this.skipCellAnimations=!0;const e=Math.floor(this.player.x),i=Math.floor(this.player.y),n=this.player.z,a=n+1<this.mazeGen.size&&this.maze.get(e,i,n+1)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,n+1)!==this.mazeGen.TYPES.STATUE,r=n-1>=0&&this.maze.get(e,i,n-1)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,n-1)!==this.mazeGen.TYPES.STATUE;if(t>0&&a||t<0&&r){const o=n+t;if(o>=0&&o<this.mazeGen.size&&this.maze.get(e,i,o)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,o)!==this.mazeGen.TYPES.STATUE){const c=n+t/2;this.maze.get(e,i,c)!==this.mazeGen.TYPES.ELEVATOR_VISITED&&(this.maze.set(e,i,c,this.mazeGen.TYPES.ELEVATOR_VISITED),this.staticMapCacheDirty=!0);const l=`${e},${i},${c}`;this.revealedPathSet.delete(l);const u=document.createElement("canvas");u.width=this.canvas.width,u.height=this.canvas.height;const f=u.getContext("2d");this.renderMapToContext(f,this.player.z),this.player.x=e+$.PLAYER_START_X,this.player.y=i+$.PLAYER_START_Y%1,this.player.z=o,this.staticMapCacheDirty=!0,this.populateFullyRevealedCells(o),this.maze.get(e,i,o)===this.mazeGen.TYPES.PATH&&this.maze.set(e,i,o,this.mazeGen.TYPES.VISITED);const p=document.createElement("canvas");p.width=this.canvas.width,p.height=this.canvas.height;const m=p.getContext("2d");this.renderMapToContext(m,this.player.z),this.floorTransition={canvasOld:u,canvasNew:p,progress:0,duration:.4,delta:t},this.updateFloorUI(),this.draw2DMap(0),this.maze.get(e,i,o)===this.mazeGen.TYPES.EXIT&&this.triggerVictory()}}}toggleMap3D(){this.isMap3DActive=!this.isMap3DActive,this.isTeleportMode=!1;const t=document.getElementById("mobile-teleport-exit-btn");if(t&&t.classList.add("hidden"),this.isMap3DActive){this.ui.setMap3DVisible(!0),this.activeMapFloor=this.player.z,this.visualActiveFloor=this.player.z,this.mapCursor={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.mapZoom=1,this.mapPanOffsetX=0,this.mapPanOffsetY=0,this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="none");const e=document.getElementById("map3d-instructions");e&&(e.style.display="none"),this.isometricCanvas||this.initIsometricCanvas(),this.isometricCanvas.style.display="block"}else this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.remove("hidden"),this.ui.setMap3DVisible(!1),this.isometricCanvas&&(this.isometricCanvas.style.display="none")}build3DMap(t=!1){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(new yr(16777215,.6));const e=new vr(16777215,.4);e.position.set(10,20,10),this.scene.add(e),this.pulsatingMaterials=[],this.hunterMeshes=[],this.teleportMeshes=[],this.knownMeshes=[],this.keyMeshes=[],this.manaMeshes=[],this.exitMesh=null;const i=this.mazeGen.size,n=(y,g,v)=>{if(v<0||v>=i)return!1;const E=this.maze.get(y,g,v);return E===2||E===3||E===4||E===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${y},${g},${v}`)||this.visitedCells.has(`${y},${g},${v}`)};this.gridMeshes=new Array(i*i*i).fill(null);const a=new xe(.9,.9,.9),r=this.isTeleportMode?$.TELEPORT_MAP_OPACITY:1,o=new xe(.9,.425,.9),c=new xe(.9,.425,.9),l=new An(.35,.35,2*this.vScale,8);new ee({color:$.COLORS.THREE_VISITED,transparent:!0,opacity:.8*r});for(let y=0;y<i;y++)for(let g=0;g<i;g++)for(let v=0;v<i;v++){const E=this.maze.get(y,g,v);if(E===this.mazeGen.TYPES.WALL||E===this.mazeGen.TYPES.STATUE){if(t||E===this.mazeGen.TYPES.WALL&&this.isWallVisible(y,g,v)||E===this.mazeGen.TYPES.STATUE&&(this.isNearVisited(y,g,v)||this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.revealed)){const Y=new xe(.35,.3*this.vScale,.35),Z=new ee({color:5903520,emissive:5903520,emissiveIntensity:.35*r,transparent:!0,opacity:.8*r}),V=[{dx:-.23,dy:-.23},{dx:.23,dy:-.23},{dx:-.23,dy:.23},{dx:.23,dy:.23}];for(const K of V){const J=new Qt(Y,Z);J.position.set(y+K.dx-i/2,(v-i/2)*this.vScale-.3*this.vScale,g+K.dy-i/2),this.scene.add(J)}if(E===this.mazeGen.TYPES.STATUE){const K=new xe(.5,.1*this.vScale,.5),J=new ee({color:3355443,transparent:!0,opacity:.9*r}),F=new Qt(K,J),tt=(v-i/2)*this.vScale-.4*this.vScale;F.position.set(y-i/2,tt,g-i/2),this.scene.add(F);const nt=new An(.18,.22,.5*this.vScale,8),vt=new ee({color:7829367,transparent:!0,opacity:.9*r}),wt=new Qt(nt,vt);wt.position.set(y-i/2,tt+.3*this.vScale,g-i/2),this.scene.add(wt)}}continue}if(v%2===0&&E!==0){const X=`${y},${g},${v}`,Y=this.revealedPathSet.has(X),Z=E===this.mazeGen.TYPES.ELEVATOR_VISITED,V=E===1&&(n(y,g,v-1)||n(y,g,v+1));if(Z||V||Y||t){let K;if(Y)K=new ee({color:16777215,transparent:!0,opacity:.95*r,emissive:16777215,emissiveIntensity:2*r});else if(Z)K=new ee({color:$.COLORS.THREE_VISITED,transparent:!0,opacity:.8*r});else if(V||t){const F=t?$.COLORS.THREE_VISITED:$.COLORS.THREE_KNOWN;K=new ee({color:F,transparent:!0,opacity:t?.72:.6*r,emissive:F,emissiveIntensity:t?0:.5*r}),t||this.pulsatingMaterials.push(K)}const J=new Qt(l,K);J.position.set(y-i/2,(v-i/2)*this.vScale,g-i/2),this.scene.add(J),this.gridMeshes[y*i*i+g*i+v]=J,V&&!Y&&(J.userData={gridX:y,gridY:g,gridZ:v},this.knownMeshes.push(J))}continue}const S=E===this.mazeGen.TYPES.JELLY_PORTAL,z=E===this.mazeGen.TYPES.TELEPORT||S,M=z&&this.discoveredTeleports.has(`${y},${g},${v}`),A=E===2||E===3||E===4||E===5||M,G=(E===1||z&&!M)&&this.isNearVisited(y,g,v);if(M){const X=y===Math.floor(this.mazeGen.startPos.x)&&g===Math.floor(this.mazeGen.startPos.y)&&v===this.mazeGen.startPos.z,Y=this.teleportCooldownTicks>0;if(X){const wt=Y?0:this.isTeleportMode?2.5:.5,L=Y?4473924:$.COLORS.THREE_START,D=Y?.4:this.isTeleportMode?.95:.8*r,H=new ee({color:L,emissive:L,emissiveIntensity:wt*r,transparent:!0,opacity:D}),W=new Qt(a,H);W.position.set(y-i/2,(v-i/2)*this.vScale,g-i/2),this.isTeleportMode&&W.scale.set(1.4,1.4,1.4),W.userData={isTeleport:!0,gridX:y,gridY:g,gridZ:v},this.scene.add(W),this.teleportMeshes.push(W);continue}const Z=y===Math.floor(this.player.x)&&g===Math.floor(this.player.y)&&v===this.player.z;let V=this.isTeleportMode?.9:.45,K=this.isTeleportMode?2.5:.8,J=S?$.COLORS.THREE_JELLY_PORTAL:$.COLORS.THREE_TELEPORT,F=.95;Y?(J=4473924,K=0,F=.4):this.isTeleportMode&&Z&&(J=65535,F=.5,K=3);const tt=new Pn(V,16,16),nt=new ee({color:J,emissive:J,emissiveIntensity:K,transparent:!0,opacity:F}),vt=new Qt(tt,nt);vt.position.set(y-i/2,(v-i/2)*this.vScale,g-i/2),vt.userData={isTeleport:!0,gridX:y,gridY:g,gridZ:v},this.scene.add(vt),this.teleportMeshes.push(vt);continue}if(E===this.mazeGen.TYPES.KEY){const X=new za(.3,0),Y=new ee({color:$.COLORS.THREE_KEY,emissive:$.COLORS.THREE_KEY,emissiveIntensity:.6*r,shininess:100}),Z=new Qt(X,Y);if(Z.position.set(y-i/2,(v-i/2)*this.vScale,g-i/2),Z.userData={isKey:!0,gridX:y,gridY:g,gridZ:v},this.scene.add(Z),this.keyMeshes.push(Z),this.pulsatingMaterials.push(Y),!this.visitedCells.has(`${y},${g},${v}`))continue}if(E===this.mazeGen.TYPES.MANA){const X=new Na(.22,0),Y=new ee({color:65535,emissive:65535,emissiveIntensity:.7*r,shininess:120}),Z=new Qt(X,Y);if(Z.position.set(y-i/2,(v-i/2)*this.vScale,g-i/2),Z.userData={isMana:!0,gridX:y,gridY:g,gridZ:v},this.scene.add(Z),this.manaMeshes.push(Z),this.pulsatingMaterials.push(Y),!this.visitedCells.has(`${y},${g},${v}`))continue}const w=`${y},${g},${v}`,O=this.revealedPathSet.has(w);if(t?E!==this.mazeGen.TYPES.WALL:A||G||O){let X=t?$.COLORS.THREE_VISITED:$.COLORS.THREE_KNOWN,Y;O?(X=16777215,Y=new ee({color:X,transparent:!0,opacity:.95*r,emissive:X,emissiveIntensity:2*r})):A||t?(X=$.COLORS.THREE_VISITED,E===3?X=$.COLORS.THREE_START:E===4&&(X=this.keysCollected===this.totalKeys?$.COLORS.THREE_EXIT:16724736),Y=new ee({color:X,transparent:!0,opacity:t?.72:.8*r})):G&&(Y=new ee({color:X,transparent:!0,opacity:.6*r,emissive:X,emissiveIntensity:.5*r}),this.pulsatingMaterials.push(Y));const Z=v<i-1&&this.maze.get(y,g,v+1)!==0,V=v>0&&this.maze.get(y,g,v-1)!==0;if(Z||V){const tt=this.pulsatingMaterials.indexOf(Y);if(tt>-1&&this.pulsatingMaterials.splice(tt,1),Z&&V){let nt=!1,vt=!1;if(O){if(this.activePathReveal){const Mt=this.activePathReveal.findIndex(ft=>ft.x===y&&ft.y===g&&ft.z===v);if(Mt!==-1&&Mt<this.activePathReveal.length-1){const ft=this.activePathReveal[Mt+1];ft.z>v&&(nt=!0),ft.z<v&&(vt=!0)}}!nt&&!vt&&(nt=this.revealedPathSet.has(`${y},${g},${v+1}`)||this.revealedPathSet.has(`${y},${g},${v+2}`),vt=this.revealedPathSet.has(`${y},${g},${v-1}`)||this.revealedPathSet.has(`${y},${g},${v-2}`))}const wt=O&&(nt||!nt&&!vt),L=O&&(vt||!nt&&!vt),D=L?16777215:A?$.COLORS.THREE_ELEVATOR_DOWN:$.COLORS.THREE_ELEVATOR_DOWN_UNUSED,H=wt?16777215:A?$.COLORS.THREE_ELEVATOR_UP:$.COLORS.THREE_ELEVATOR_UP_UNUSED,W=new ee({color:D,transparent:!0,opacity:.9*r,emissive:D,emissiveIntensity:(L?2:.4)*r}),C=new ee({color:H,transparent:!0,opacity:.9*r,emissive:H,emissiveIntensity:(wt?2:.4)*r}),ut=new Qt(o,W),it=new Qt(c,C);ut.position.set(y-i/2,(v-i/2)*this.vScale-.2125,g-i/2),it.position.set(y-i/2,(v-i/2)*this.vScale+.2125,g-i/2),this.scene.add(ut),this.scene.add(it),this.gridMeshes[y*i*i+g*i+v]=it,G&&!O&&(ut.userData={gridX:y,gridY:g,gridZ:v},it.userData={gridX:y,gridY:g,gridZ:v},this.knownMeshes.push(ut),this.knownMeshes.push(it));continue}else{const nt=Z?$.COLORS.THREE_ELEVATOR_UP:$.COLORS.THREE_ELEVATOR_DOWN,vt=Z?$.COLORS.THREE_ELEVATOR_UP_UNUSED:$.COLORS.THREE_ELEVATOR_DOWN_UNUSED,wt=O?16777215:A?nt:vt,L=O?2:.4;Y=new ee({color:wt,transparent:!0,opacity:.9*r,emissive:wt,emissiveIntensity:L*r})}}const K=y===Math.floor(this.player.x)&&g===Math.floor(this.player.y)&&v===this.player.z,J=this.hunters.some(tt=>tt.x===y&&tt.y===g&&tt.z===v);if(K||J){const tt=new xe(.9,.05,.9),nt=new Qt(tt,Y);nt.position.set(y-i/2,(v-i/2)*this.vScale-.425,g-i/2),this.scene.add(nt),this.gridMeshes[y*i*i+g*i+v]=nt;continue}const F=new Qt(a,Y);if(F.position.set(y-i/2,(v-i/2)*this.vScale,g-i/2),E===4&&(this.exitMesh=F,this.keysCollected<this.totalKeys)){const tt=new xe(.95,.95,.95),nt=new gs({color:16711680,wireframe:!0}),vt=new Qt(tt,nt);F.add(vt)}this.scene.add(F),this.gridMeshes[y*i*i+g*i+v]=F,(G||E===this.mazeGen.TYPES.EXIT)&&!O&&(F.userData={gridX:y,gridY:g,gridZ:v},this.knownMeshes.push(F))}}if(t)return;const u=new Pn(.42,16,16),f=new ee({color:16711680,emissive:16711680,emissiveIntensity:.8,depthWrite:!1}),p=new Qt(u,f);p.position.set(Math.floor(this.player.x)-i/2,(this.player.z-i/2)*this.vScale+.05,Math.floor(this.player.y)-i/2),this.scene.add(p);const m=new Pn(.4),T=new ee({color:$.COLORS.THREE_HUNTER,emissive:$.COLORS.THREE_HUNTER,emissiveIntensity:.8,depthWrite:!1}),_=new ee({color:$.COLORS.THREE_HUNTER,transparent:!0,opacity:.4,emissive:$.COLORS.THREE_HUNTER,emissiveIntensity:.3,depthWrite:!1}),h=new ee({color:$.COLORS.THREE_HUNTER,transparent:!0,opacity:.15,emissive:$.COLORS.THREE_HUNTER,emissiveIntensity:.1,depthWrite:!1}),d=m;for(let y=0;y<this.hunters.length;y++){const g=this.hunters[y];if(g.state==="SLEEP")continue;const v=new Qt(d,h),E=new Qt(d,_);v.visible=!1,E.visible=!1,v.renderOrder=99,E.renderOrder=99,this.scene.add(v),this.scene.add(E);const b=new Mn;b.renderOrder=99;const S=new Qt(m,T);b.add(S);const z=4,M=[],A=new xe(.18,.18,.18),G=[$.COLORS.THREE_HUNTER,16711935,65535,16776960];for(let k=0;k<z;k++){const q=new ee({color:G[k%G.length],transparent:!0,opacity:.8,emissive:G[k%G.length],emissiveIntensity:.8,depthWrite:!1}),w=new Qt(A,q);w.userData={angle:k/z*Math.PI*2,radius:.35+Math.random()*.1,speed:1+Math.random()*1.5,phaseY:Math.random()*Math.PI*2},b.add(w),M.push(w)}b.position.set(g.x-i/2,(g.z-i/2)*this.vScale,g.y-i/2),this.scene.add(b),this.hunterMeshes.push({hunter:g,mesh:b,coreMesh:S,particles:M,trail1:E,trail2:v})}this.camera.position.set(i,i*this.vScale,i),this.controls.target.set(0,0,0),this.controls.update()}draw2DMap(t=.016){if(this.deathAnimation&&this.deathAnimation.active){if(this.deathAnimation.delayElapsed<this.deathAnimation.delayDuration)this.deathAnimation.delayElapsed+=t,this.updateNotification(t);else if(this.deathAnimation.screenFilled)this.deathAnimation.reversing&&(this.deathAnimation.elapsed-=t,this.deathAnimation.elapsed<=0&&(this.deathAnimation=null,this.isGameOver=!1,this.ui.initGameUI(this.isSafeMode),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1),this.ui.showInfoBanner(Nt("msgPlayerRespawn"))));else if(this.deathAnimation.elapsed+=t,this.updateNotification(t),this.deathAnimation.elapsed>=this.deathAnimation.duration){this.deathAnimation.screenFilled=!0,this.activeNotification=null,this.notificationQueue=[];const n=Math.floor(this.deathAnimation.playerPos.x),a=Math.floor(this.deathAnimation.playerPos.y),r=this.deathAnimation.playerPos.z;if(this.maze.get(n,a,r)===this.mazeGen.TYPES.JELLY_PORTAL){const f=this.mazeGen.size,p=[],m=Math.floor(this.mazeGen.startPos.x),T=Math.floor(this.mazeGen.startPos.y),_=this.mazeGen.startPos.z;for(let h=0;h<f;h++)for(let d=0;d<f;d++)for(let y=0;y<f;y++){const g=this.maze.get(h,d,y),v=h===m&&d===T&&y===_,E=h===n&&d===a&&y===r;(g===this.mazeGen.TYPES.PATH||g===this.mazeGen.TYPES.VISITED)&&y%2!==0&&!v&&!E&&p.push({x:h,y:d,z:y})}if(p.length>0){const h=p[Math.floor(Math.random()*p.length)];this.maze.set(h.x,h.y,h.z,this.mazeGen.TYPES.KEY)}else this.maze.set(n,a,r,this.mazeGen.TYPES.KEY)}else this.maze.set(n,a,r,this.mazeGen.TYPES.KEY);this.totalKeys++,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.staticMapCacheDirty=!0;let c=this.mazeGen.startPos.x,l=this.mazeGen.startPos.y,u=this.mazeGen.startPos.z;if(this.lastSavePos&&(c=this.lastSavePos.x,l=this.lastSavePos.y,u=this.lastSavePos.z),this.player.x=c,this.player.y=l,this.player.z=u,this.activeMapFloor=u,this.visualActiveFloor=u,this.lastPlayerCell={x:Math.floor(c),y:Math.floor(l),z:u},this.hunters=[],this.isTutorialMode){const f=this.currentTutorialStage&&this.currentTutorialStage.hunterBehavior&&this.currentTutorialStage.hunterBehavior.fixed;if(this.mazeGen.tutorialHunterSpawns&&!this.isSafeMode){let p=1;for(const m of this.mazeGen.tutorialHunterSpawns){const T=new ra(this.mazeGen,{x:m.x,y:m.y,z:m.z},p++);if(!f){const _=[],h=this.mazeGen.size,d=Math.floor(this.mazeGen.startPos.x),y=Math.floor(this.mazeGen.startPos.y),g=this.mazeGen.startPos.z;for(let v=0;v<h;v++)for(let E=0;E<h;E++)for(let b=0;b<h;b++){const S=this.maze.get(v,E,b),z=v===d&&E===y&&b===g,M=S===this.mazeGen.TYPES.EXIT;S!==this.mazeGen.TYPES.WALL&&!M&&!z&&(v!==Math.floor(c)||E!==Math.floor(l)||b!==u)&&_.push({x:v,y:E,z:b})}if(_.length>0){const v=_[Math.floor(Math.random()*_.length)];T.x=v.x,T.y=v.y,T.z=v.z,T.visualX=v.x,T.visualY=v.y,T.visualZ=v.z,T.lastPos={x:v.x,y:v.y,z:v.z},T.visitedNodes.clear(),T.visitedNodes.add(`${v.x},${v.y},${v.z}`)}}this.hunters.push(T)}}}else this.initHunters(this.degree);this.suppressWakeHuntersBanner=!0,this.isTutorialMode||rs(this),this.deathAnimation.reversing=!0}}this.floorTransition&&(this.floorTransition.progress+=t/this.floorTransition.duration,this.floorTransition.progress>=1&&(this.floorTransition=null));const e=this.mazeGen.size,i=this.isZoomActive?11:e;if(this.zoomVisibleCells===void 0?this.zoomVisibleCells=i:(this.zoomVisibleCells+=(i-this.zoomVisibleCells)*(1-Math.exp(-12*t)),Math.abs(this.zoomVisibleCells-i)<.01&&(this.zoomVisibleCells=i)),this.floorTransition){const n=this.floorTransition.progress,a=this.canvas.width/2,r=this.canvas.height/2,o=this.floorTransition.delta>0;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let c,l;o?(c=1-.2*n,l=1.2-.2*n):(c=1+.2*n,l=.8+.2*n),this.ctx.save(),this.ctx.globalAlpha=1-n,this.ctx.translate(a,r),this.ctx.scale(c,c),this.ctx.drawImage(this.floorTransition.canvasOld,-a,-r),this.ctx.restore(),this.ctx.save(),this.ctx.globalAlpha=n,this.ctx.translate(a,r),this.ctx.scale(l,l),this.ctx.drawImage(this.floorTransition.canvasNew,-a,-r),this.ctx.restore()}else this.renderMapToContext(this.ctx,this.player.z)}renderMapToContext(t,e){t.clearRect(0,0,t.canvas.width,t.canvas.height);const i=this.mazeGen.size,n=i>11,a=n?t.canvas.width/11:t.canvas.width/i;let r=this.player.x,o=this.player.y,c=1,l=1,u=1;if(this.teleportAnim&&this.teleportAnim.active){const d=this.teleportAnim,y=Math.min(1,d.elapsed/d.duration);d.stage==="OUT"?(r=d.startX,o=d.startY,c=1-y*.9,l=1+y*2,u=1-y):(r=d.targetX,o=d.targetY,c=y,l=3-y*2,u=y)}const f=Math.floor(r),p=Math.floor(o);let m=n||this.isZoomTransitionActive,T=n?this.zoomVisibleCells:i;if(this.isZoomTransitionActive){const y=Math.min(1,(2-this.zoomTransitionTimer)/2),v=(S=>1-Math.pow(1-S,3))(y),E=3;T=E+((n?11:i)-E)*v}if(m){t.save();const d=(n?11:i)/T,y=T/2;let g=r,v=o;g<y&&(g=y),g>i-y&&(g=i-y),v<y&&(v=y),v>i-y&&(v=i-y);const E=t.canvas.width/2,b=t.canvas.height/2;t.translate(E,b),t.scale(d,d),t.translate(-g*a,-v*a)}const _=n?i*a:this.canvas.width,h=n?i*a:this.canvas.height;(this.staticMapCacheDirty||this.staticMapCacheCanvas.width!==_||this.staticMapCacheCanvas.height!==h||this.jellyPortalFreezeTimer>0)&&this.updateStaticMapCache(e),t.drawImage(this.staticMapCacheCanvas,0,0);for(const d of this.hunters){if(d.state==="SLEEP")continue;const y=d.visualZ!==null?d.visualZ:d.z,g=d.visualX!==null?d.visualX:d.x,v=d.visualY!==null?d.visualY:d.y;if(y===null||g===null||v===null)continue;const E=Math.abs(y-e),b=Math.max(0,1-E);if(b<=0)continue;const S=d.x!==null?d.x:g,z=d.y!==null?d.y:v,M=S-g,A=z-v,G=Math.sqrt(M*M+A*A),k=Math.max(0,Math.min(1,1-G)),q=[];if(d.lastPos&&(d.lastPos.x!==S||d.lastPos.y!==z)&&d.lastPos.z===e){const w=.95-k*.47,O=.4-k*.2;q.push({pos:d.lastPos,sizeFactor:w,opacityFactor:O,age:1})}if(d.history&&d.history.length===2){const w=d.history[0];if(w.z===e){const O=.48*(1-k),B=.2*(1-k);O>.01&&q.push({pos:w,sizeFactor:O,opacityFactor:B,age:2})}}if(q.forEach(w=>{if(d.lowCanvas){const O=w.pos.x*a+a/2,B=w.pos.y*a+a/2,X=a*w.sizeFactor*b,Y=d.jellyTime-w.age*.2,Z=Math.sin(Y)*6,V=Math.cos(Y*.7)*4,K=1+Math.sin(Y*1.2)*.06,J=1+Math.cos(Y*.8)*.06,F=Z*Math.PI/180,tt=V*Math.PI/180;t.save(),t.globalAlpha=w.opacityFactor,t.translate(O,B),t.transform(K,Math.tan(tt),Math.tan(F),J,0,0),t.imageSmoothingEnabled=!1,t.drawImage(d.lowCanvas,-X/2,-X/2,X,X),t.restore()}}),d.lowCanvas){const w=g*a+a/2,O=v*a+a/2,B=a*.95*b,X=d.jellyTime,Y=Math.sin(X)*6,Z=Math.cos(X*.7)*4,V=1+Math.sin(X*1.2)*.06,K=1+Math.cos(X*.8)*.06,J=Y*Math.PI/180,F=Z*Math.PI/180;t.save();let tt=.35,nt=B;if(d.state==="DYING"){const D=Math.min(1,this.jellyPortalResetElapsed/this.jellyPortalResetDuration);nt=B*(1-D),tt=.35*(1-D)}const vt=-a*.12*b,wt=-a*.12*b;t.translate(w+vt,O+wt),t.transform(V,Math.tan(F),Math.tan(J),K,0,0),t.filter=`brightness(0) blur(1px) opacity(${tt})`,t.imageSmoothingEnabled=!1,t.drawImage(d.lowCanvas,-nt/2,-nt/2,nt,nt),t.restore(),t.save();let L=1;if(d.state==="DYING"){const D=Math.min(1,this.jellyPortalResetElapsed/this.jellyPortalResetDuration);nt=B*(1-D),L=1-D;const H=(Math.random()-.5)*a*.15,W=(Math.random()-.5)*a*.15;t.translate(H,W)}t.globalAlpha=L,t.translate(w,O),t.transform(V,Math.tan(F),Math.tan(J),K,0,0),t.imageSmoothingEnabled=!1,t.drawImage(d.lowCanvas,-nt/2,-nt/2,nt,nt),t.restore()}}if(!this.deathAnimation||!this.deathAnimation.screenFilled){const d=`${this.playerVertical}_${this.playerSide}`,y=this.mageImages[d],g=r*a,v=o*a;let E=1;this.deathAnimation&&this.deathAnimation.active&&(Math.floor(Date.now()/120)%2===0||(E=.2));const b=$.PLAYER_SHADOW_OFFSET_X!==void 0?$.PLAYER_SHADOW_OFFSET_X:-.28,S=$.PLAYER_SHADOW_OFFSET_Y!==void 0?$.PLAYER_SHADOW_OFFSET_Y:-.28,z=g+a*b,M=v+a*S;t.save(),t.beginPath();const A=$.PLAYER_SHADOW_WIDTH_FACTOR!==void 0?$.PLAYER_SHADOW_WIDTH_FACTOR:.45,G=$.PLAYER_SHADOW_HEIGHT_FACTOR!==void 0?$.PLAYER_SHADOW_HEIGHT_FACTOR:.3,k=a*A,q=a*G;t.ellipse(z,M,k,q,0,0,Math.PI*2),t.fillStyle="rgba(0, 0, 0, 0.4)",t.fill(),t.restore();const w=(V,K,J,F,tt)=>{const nt=a*1.2,vt=nt*J;if(vt<=0)return;const wt=this.auraTime||0,L=a*.45;t.save(),t.globalAlpha=F*.7;const D="rgba(0, 220, 255, 0.4)",H="rgba(0, 255, 255, 0.8)",W=t.createLinearGradient(V,K,V,K-vt);if(W.addColorStop(0,`rgba(0, 220, 255, ${F*.35})`),W.addColorStop(.3,`rgba(0, 200, 255, ${F*.25})`),W.addColorStop(1,"rgba(0, 150, 255, 0.0)"),tt==="BACK"){t.beginPath(),t.arc(V,K,L,Math.PI,0,!1),t.strokeStyle=D,t.lineWidth=1.5,t.stroke(),t.fillStyle=W,t.beginPath(),t.rect(V-L,K-vt,L*2,vt),t.fill();for(let ut=0;ut<3;ut++){const it=(wt*.8+ut/3)%1*J,Mt=K-nt*it;if(Mt>K-vt){const ft=(1-it)*F*.5;t.beginPath(),t.arc(V,Mt,L,Math.PI,0,!1),t.strokeStyle=`rgba(0, 255, 255, ${ft})`,t.lineWidth=1,t.stroke()}}const C=(1-J*.3)*F*.8;t.beginPath(),t.arc(V,K-vt,L,Math.PI,0,!1),t.strokeStyle=`rgba(0, 255, 255, ${C})`,t.stroke()}else{t.beginPath(),t.arc(V,K,L,0,Math.PI,!1),t.strokeStyle=H,t.lineWidth=2,t.stroke();const C=t.createLinearGradient(V,K,V,K-vt);C.addColorStop(0,`rgba(0, 255, 255, ${F*.2})`),C.addColorStop(1,"rgba(0, 255, 255, 0.0)"),t.fillStyle=C,t.beginPath(),t.rect(V-L,K-vt,L*2,vt),t.fill();const ut=t.createLinearGradient(V,K,V,K-vt);ut.addColorStop(0,`rgba(0, 255, 255, ${F*.7})`),ut.addColorStop(1,"rgba(0, 255, 255, 0.0)"),t.strokeStyle=ut,t.lineWidth=1.5,t.beginPath(),t.moveTo(V-L,K),t.lineTo(V-L,K-vt),t.moveTo(V+L,K),t.lineTo(V+L,K-vt),t.stroke();for(let Mt=0;Mt<3;Mt++){const ft=(wt*.8+Mt/3)%1*J,Tt=K-nt*ft;if(Tt>K-vt){const mt=(1-ft)*F*.7;t.beginPath(),t.arc(V,Tt,L,0,Math.PI,!1),t.strokeStyle=`rgba(0, 255, 255, ${mt})`,t.lineWidth=1.5,t.stroke()}}const it=(1-J*.3)*F*.8;t.beginPath(),t.arc(V,K-vt,L,0,Math.PI,!1),t.strokeStyle=`rgba(0, 255, 255, ${it})`,t.stroke()}t.restore()},O=this.getAuraHeightAt(f,p,e);O>0&&w(g,v,O,E*u,"BACK");const B=Math.max(0,Math.floor((z-k)/a)),X=Math.min(i-1,Math.floor((z+k)/a)),Y=Math.max(0,Math.floor((M-q)/a)),Z=Math.min(i-1,Math.floor((M+q)/a));for(let V=B;V<=X;V++)for(let K=Y;K<=Z;K++)this.isWallVisible(V,K,e)&&(t.save(),this.wallImage.complete&&this.wallImage.naturalWidth!==0?t.drawImage(this.wallImage,V*a,K*a,a,a):(t.fillStyle=$.COLORS.WALL,t.fillRect(V*a,K*a,a,a)),t.restore());if(y&&y.complete){t.save(),t.globalAlpha=E*u;const V=a*.9,K=V,J=V*(y.height/y.width);t.translate(g,v),t.scale((this.playerSquashX||1)*c,(this.playerSquashY||1)*l);const F=-J*.85;t.drawImage(y,-K/2,F,K,J),t.restore()}else t.save(),t.globalAlpha=E*u,t.translate(g,v),t.scale(c,l),t.strokeStyle=$.COLORS.PLAYER_OUTLINE,t.lineWidth=1,t.strokeRect(-a/2+2,-a/2+2,a-4,a-4),t.fillStyle=$.COLORS.PLAYER,t.beginPath(),t.arc(0,0,a*.4,0,Math.PI*2),t.fill(),t.strokeStyle=$.COLORS.PLAYER,t.lineWidth=2,t.beginPath(),t.moveTo(0,0),t.lineTo(Math.cos(this.player.dir)*a*1,Math.sin(this.player.dir)*a*1),t.stroke(),t.restore();if(O>0&&w(g,v,O,E*u,"FRONT"),$.SHOW_COLLISION_DEBUG){t.save(),t.strokeStyle="#ff0000",t.lineWidth=1.5;const V=$.PLAYER_COLLISION_RADIUS*2*a,K=($.PLAYER_COLLISION_OFFSET_X||0)*a,J=($.PLAYER_COLLISION_OFFSET_Y||0)*a;t.strokeRect(g+K-V/2,v+J-V/2,V,V),t.restore()}if(this.deathAnimation&&this.deathAnimation.active){const V=Math.min(1,this.deathAnimation.delayElapsed/this.deathAnimation.delayDuration),K=-(y&&y.complete?a*.9*(y.height/y.width)*.85:a*.5),J=a*.7,F=(1-V)*K-4*J*V*(1-V);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){t.save();const tt=this.keyImage,nt=tt.naturalWidth/tt.naturalHeight,vt=a*.55;let wt=vt,L=vt;nt>1?L=vt/nt:wt=vt*nt,t.drawImage(tt,g-wt/2,v+F-L/2,wt,L),t.restore()}else t.save(),t.beginPath(),t.arc(g,v+F,a*.15,0,2*Math.PI),t.fillStyle="#ffd700",t.fill(),t.restore()}}if(this.activeNotification){const d=this.activeNotification;t.save(),t.font=`bold ${a*.22}px monospace`;const y=t.measureText(d.text).width,g=a*.4,v=y+g,E=a*.48,b=r*a,S=o*a-a*1.5;let z=v;d.state==="OPENING"?z=v*d.widthProgress:d.state==="CLOSING"&&(z=v*d.closeProgress);const M=this.mazeGen.size*a,A=this.mazeGen.size*a;let G=b;G-z/2<0?G=z/2:G+z/2>M&&(G=M-z/2);let k=S;k-E/2<0?k=E/2:k+E/2>A&&(k=A-E/2),t.fillStyle="#000000",t.fillRect(G-z/2,k-E/2,z,E),t.strokeStyle="#00ffff",t.lineWidth=Math.max(1.5,a*.04),t.strokeRect(G-z/2,k-E/2,z,E),(d.state==="TYPING"||d.state==="WAITING")&&(t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.fillText(d.displayText,G,k)),t.restore()}if(m&&t.restore(),this.isZoomTransitionActive){const g=1-Math.min(1,(2-this.zoomTransitionTimer)/2);t.save(),t.fillStyle=`rgba(0, 0, 0, ${g})`,t.fillRect(0,0,t.canvas.width,t.canvas.height),t.restore()}if(this.deathAnimation&&this.deathAnimation.active){const d=this.deathAnimation.hunter;let y=d.visualX+.5,g=d.visualY+.5;this.deathAnimation.reversing&&(y=this.player.x,g=this.player.y);let v,E;if(n){const b=11/this.zoomVisibleCells,S=this.zoomVisibleCells/2;let z=r,M=o;z<S&&(z=S),z>i-S&&(z=i-S),M<S&&(M=S),M>i-S&&(M=i-S);const A=t.canvas.width/2,G=t.canvas.height/2;v=A+(y-z)*a*b,E=G+(g-M)*a*b}else v=y*a,E=g*a;if(!this.deathAnimation.screenFilled||this.deathAnimation.reversing){const b=Math.hypot(t.canvas.width,t.canvas.height)*1.1,S=this.deathAnimation.elapsed/this.deathAnimation.duration,M=S*S*(3-2*S)*b;t.save(),t.beginPath(),t.arc(v,E,M,0,Math.PI*2),t.clip(),t.fillStyle="rgba(15, 0, 25, 0.96)",t.fillRect(0,0,t.canvas.width,t.canvas.height);const A=45,G=n?11/this.zoomVisibleCells:1;for(let k=0;k<A;k++){const q=Math.random()*Math.PI*2,w=Math.pow(Math.random(),.7)*M,O=v+Math.cos(q)*w,B=E+Math.sin(q)*w,X=(15+Math.random()*70)*G,Y=(3+Math.random()*12)*G,Z=80+Math.floor(Math.random()*50),V=Math.floor(Math.random()*25),K=130+Math.floor(Math.random()*70);t.fillStyle=Math.random()<.12?"#00ff66":Math.random()<.12?"#00ccff":Math.random()<.08?"#ffffff":`rgb(${Z},${V},${K})`,t.fillRect(O-X/2,B-Y/2,X,Y)}if(Math.random()<.3){t.fillStyle=Math.random()<.7?"#ffffff":"#b3ffff";const k=v+(Math.random()-.5)*M*.8,q=E+(Math.random()-.5)*M*.8,w=(2+Math.random()*5)*G,O=(10+Math.random()*30)*G;t.fillRect(k-w/2,q-O/2,w,O)}t.restore()}else{t.fillStyle="rgba(10, 0, 15, 1.0)",t.fillRect(0,0,t.canvas.width,t.canvas.height),t.fillStyle="rgba(138, 3, 196, 0.08)";for(let z=0;z<t.canvas.height;z+=6)Math.random()<.6&&t.fillRect(0,z+Math.sin(Date.now()*.01+z)*2,t.canvas.width,2);const b=Math.floor(Math.random()*5)+3,S=["#00ff66","#ff0055","#00ccff","#ffff00","#8a03c4","#ffffff"];for(let z=0;z<b;z++){const M=Math.random()*t.canvas.width,A=Math.random()*t.canvas.height,G=80+Math.random()*250,k=8+Math.random()*30;t.fillStyle=S[Math.floor(Math.random()*S.length)],t.globalAlpha=.12+Math.random()*.18,t.fillRect(M,A,G,k)}if(t.globalAlpha=1,Math.random()<.35){const z=Math.floor(Math.random()*t.canvas.height),M=15+Math.floor(Math.random()*80),A=Math.floor(Math.random()*40)-20;t.drawImage(t.canvas,0,z,t.canvas.width,M,A,z,t.canvas.width,M)}Math.random()<.15&&(t.fillStyle="rgba(255, 255, 255, 0.05)",t.fillRect(0,Math.random()*t.canvas.height,t.canvas.width,5+Math.random()*20))}}}updateStaticMapCache(t){const e=this.mazeGen.size,i=e>11,n=i?this.canvas.width/11:this.canvas.width/e,a=i?e*n:this.canvas.width,r=i?e*n:this.canvas.height;(this.staticMapCacheCanvas.width!==a||this.staticMapCacheCanvas.height!==r)&&(this.staticMapCacheCanvas.width=a,this.staticMapCacheCanvas.height=r);const o=this.staticMapCacheCtx;o.clearRect(0,0,a,r);const c=this.player.x,l=this.player.y,u=Math.floor(this.mazeGen.startPos.x),f=Math.floor(this.mazeGen.startPos.y),p=this.mazeGen.startPos.z,m=Date.now();let T=!1;const _=(h,d,y)=>{const g=`${h},${d},${t}`;if(this.skipCellAnimations||this.fullyRevealedCells.has(g))y(),this.skipCellAnimations&&this.fullyRevealedCells.add(g);else{let v=this.revealedCellsAnimation.get(g);v===void 0&&(this.revealedCellsAnimation.set(g,m),v=m);const E=m-v,S=Math.min(1,E/400);S<1?(o.save(),o.globalAlpha=S,y(),o.restore(),T=!0):(y(),this.revealedCellsAnimation.delete(g),this.fullyRevealedCells.add(g))}};for(let h=0;h<e;h++)for(let d=0;d<e;d++){const y=this.maze.get(h,d,t);if(this.jellyPortalFreezeTimer>0&&this.jellyPortalResetCells.has(`${h},${d}`)){const q=1.5-this.jellyPortalFreezeTimer,w=.6;let O=0;q>w&&(O=Math.min(1,(q-w)/.9)),o.save();const B=Math.round(100*(1-O));o.filter=`invert(${B}%)`;const X=h===Math.floor(c)&&d===Math.floor(l),Y=y===this.mazeGen.TYPES.STATUE;if(!X&&!Y&&(o.globalAlpha=1-O),y===this.mazeGen.TYPES.WALL)this.wallImage.complete&&this.wallImage.naturalWidth!==0?o.drawImage(this.wallImage,h*n,d*n,n,n):(o.fillStyle=$.COLORS.WALL,o.fillRect(h*n,d*n,n,n));else if(Y)if(this.floorImage.complete&&this.floorImage.naturalWidth!==0?o.drawImage(this.floorImage,h*n,d*n,n,n):(o.fillStyle=$.COLORS.PATH_VISITED,o.fillRect(h*n,d*n,n,n)),o.fillStyle="rgba(0, 0, 0, 0.4)",o.beginPath(),o.ellipse(h*n+n/2,(d+1)*n-n*.15,n*.35,n*.12,0,0,Math.PI*2),o.fill(),this.statueImage.complete&&this.statueImage.naturalWidth!==0){const V=this.statueImage.width/this.statueImage.height,K=n*.85,J=K/V,F=(d+1)*n-n*.05;o.drawImage(this.statueImage,h*n+n/2-K/2,F-J,K,J)}else o.fillStyle="#555555",o.fillRect(h*n+n*.3,d*n+n*.1,n*.4,n*.8);else if(this.floorImage.complete&&this.floorImage.naturalWidth!==0?o.drawImage(this.floorImage,h*n,d*n,n,n):(o.fillStyle=$.COLORS.PATH_VISITED,o.fillRect(h*n,d*n,n,n)),X)this.drawVortex2D(o,h,d,n,$.COLORS.JELLY_PORTAL,!1,`${h},${d},${t}`);else if(y===this.mazeGen.TYPES.TELEPORT)this.drawVortex2D(o,h,d,n,$.COLORS.TELEPORT_INACTIVE,!1,`${h},${d},${t}`);else if(y===this.mazeGen.TYPES.EXIT)this.drawVortex2D(o,h,d,n,$.COLORS.EXIT,!1,`${h},${d},${t}`);else if(y===this.mazeGen.TYPES.KEY){const V=n*.05*Math.sin(Date.now()/300);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){const K=this.keyImage,J=K.naturalWidth/K.naturalHeight,F=n*.7;let tt=F,nt=F;J>1?nt=F/J:tt=F*J,o.drawImage(K,h*n+(n-tt)/2,d*n+(n-nt)/2+V,tt,nt)}}else if(y===this.mazeGen.TYPES.MANA){const V=n*.05*Math.sin(Date.now()/250);if(this.manaImage.complete&&this.manaImage.naturalWidth!==0){const K=this.manaImage,J=K.naturalWidth/K.naturalHeight,F=n*.7;let tt=F,nt=F;J>1?nt=F/J:tt=F*J,o.drawImage(K,h*n+(n-tt)/2,d*n+(n-nt)/2+V,tt,nt)}}o.restore(),T=!0;continue}if(y===this.mazeGen.TYPES.STATUE){_(h,d,()=>{if(this.floorImage.complete&&this.floorImage.naturalWidth!==0?o.drawImage(this.floorImage,h*n,d*n,n,n):(o.fillStyle=$.COLORS.PATH_VISITED,o.fillRect(h*n,d*n,n,n)),o.fillStyle="rgba(0, 0, 0, 0.4)",o.beginPath(),o.ellipse(h*n+n/2,(d+1)*n-n*.15,n*.35,n*.12,0,0,Math.PI*2),o.fill(),this.statueImage.complete&&this.statueImage.naturalWidth!==0){const q=this.statueImage.width/this.statueImage.height,w=n*.85,O=w/q,B=h*n+n/2,X=(d+1)*n-n*.05;o.drawImage(this.statueImage,B-w/2,X-O,w,O)}else o.fillStyle="#555555",o.fillRect(h*n+n*.3,d*n+n*.1,n*.4,n*.8)});continue}const g=this.allTeleports.some(q=>q.x===h&&q.y===d&&q.z===t),v=g&&this.discoveredTeleports.has(`${h},${d},${t}`),E=y===2||y===3||y===4||y===5||v,b=y===this.mazeGen.TYPES.KEY,S=y===this.mazeGen.TYPES.MANA,z=(y===1||g&&!v)&&this.isNearVisited(h,d,t),M=this.revealedPathSet.has(`${h},${d},${t}`),A=t<e-1&&this.maze.get(h,d,t+1)!==0,G=t>0&&this.maze.get(h,d,t-1)!==0,k=A||G;M?_(h,d,()=>{k?this.drawElevator2D(o,h,d,n,A,G,c,l,!0,t):(o.fillStyle=$.COLORS.REVEALED_PATH,o.fillRect(h*n,d*n,n,n))}):E?_(h,d,()=>{if(v){const q=h===u&&d===f&&t===p,w=`${h},${d},${t}`,O=this.teleportCooldownTicks>0;if(q){const B=Math.floor(c)===h&&Math.floor(l)===d&&t===this.player.z,X=O?$.COLORS.TELEPORT_INACTIVE:B?$.COLORS.TELEPORT:$.COLORS.START;this.drawVortex2D(o,h,d,n,X,B&&!O,w)}else{const B=y===this.mazeGen.TYPES.JELLY_PORTAL,X=O?$.COLORS.TELEPORT_INACTIVE:B?$.COLORS.JELLY_PORTAL:$.COLORS.TELEPORT,Y=Math.floor(c)===h&&Math.floor(l)===d&&t===this.player.z;this.drawVortex2D(o,h,d,n,X,Y&&!O,w)}T=!0}else if(k)this.drawElevator2D(o,h,d,n,A,G,c,l,!1,t);else if(y===2&&this.floorImage.complete&&this.floorImage.naturalWidth!==0)o.drawImage(this.floorImage,h*n,d*n,n,n);else if(y===this.mazeGen.TYPES.EXIT){const q=`${h},${d},${t}`;if(this.drawVortex2D(o,h,d,n,$.COLORS.EXIT,!1,q),T=!0,this.keysCollected<this.totalKeys){const w=h*n+n/2,O=d*n+n/2,B=n*.45,X=n*.38,Y=B*.75,Z=w-B/2,V=O-X/4,K=Math.max(3,n*.06);o.beginPath(),o.arc(w,V,Y/2,Math.PI,0),o.strokeStyle="#ff3300",o.lineWidth=Math.max(2.5,n*.07),o.lineCap="round",o.stroke();const J=o.createLinearGradient(Z,V,Z,V+X);J.addColorStop(0,"#2e0808"),J.addColorStop(1,"#140303"),o.fillStyle=J,o.beginPath(),o.roundRect?o.roundRect(Z,V,B,X,K):o.rect&&o.rect(Z,V,B,X),o.fill(),o.strokeStyle="#ff3300",o.lineWidth=Math.max(1.5,n*.04),o.stroke();const F=String(this.totalKeys-this.keysCollected),tt=F.length>1?Math.max(8,n*.22):Math.max(10,n*.28);o.save(),o.fillStyle="#ff8888",o.font=`bold ${tt}px "Outfit", "Inter", sans-serif`,o.textAlign="center",o.textBaseline="middle",o.shadowColor="#ff3300",o.shadowBlur=Math.max(2,n*.08),o.fillText(F,w,O+X/4),o.restore()}}else if(y===2)o.fillStyle=$.COLORS.PATH_VISITED,o.fillRect(h*n,d*n,n,n);else{const q=`${h},${d},${t}`,w=Math.floor(c)===h&&Math.floor(l)===d&&t===this.player.z,O=w?$.COLORS.TELEPORT:$.COLORS.START;this.drawVortex2D(o,h,d,n,O,w,q),T=!0}this.drawCellShadow2D(o,h,d,n,e,y,t)}):b?(_(h,d,()=>{if(this.visitedCells.has(`${h},${d},${t}`))if(v){const O=h===u&&d===f&&t===p,B=`${h},${d},${t}`,X=this.teleportCooldownTicks>0;if(O){const Y=Math.floor(c)===h&&Math.floor(l)===d&&t===this.player.z,Z=X?$.COLORS.TELEPORT_INACTIVE:Y?$.COLORS.TELEPORT:$.COLORS.START;this.drawVortex2D(o,h,d,n,Z,Y&&!X,B)}else{const Y=X?$.COLORS.TELEPORT_INACTIVE:$.COLORS.TELEPORT,Z=Math.floor(c)===h&&Math.floor(l)===d&&t===this.player.z;this.drawVortex2D(o,h,d,n,Y,Z&&!X,B)}T=!0}else k?this.drawElevator2D(o,h,d,n,A,G,c,l,!1,t):this.floorImage.complete&&this.floorImage.naturalWidth!==0?o.drawImage(this.floorImage,h*n,d*n,n,n):(o.fillStyle=$.COLORS.PATH_VISITED,o.fillRect(h*n,d*n,n,n));const w=n*.05*Math.sin(Date.now()/300);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){const O=this.keyImage,B=O.naturalWidth/O.naturalHeight,X=n*.7;let Y=X,Z=X;B>1?Z=X/B:Y=X*B;const V=h*n+(n-Y)/2,K=d*n+(n-Z)/2+w;o.drawImage(O,V,K,Y,Z)}else o.beginPath(),o.arc(h*n+n/2,d*n+n/2+w,n*.25,0,2*Math.PI),o.fillStyle="#ffd700",o.fill();this.drawCellShadow2D(o,h,d,n,e,y,t)}),T=!0):S?(_(h,d,()=>{this.visitedCells.has(`${h},${d},${t}`)&&(this.floorImage.complete&&this.floorImage.naturalWidth!==0?o.drawImage(this.floorImage,h*n,d*n,n,n):(o.fillStyle=$.COLORS.PATH_VISITED,o.fillRect(h*n,d*n,n,n)));const w=n*.05*Math.sin(Date.now()/250);if(this.manaImage.complete&&this.manaImage.naturalWidth!==0){const O=this.manaImage,B=O.naturalWidth/O.naturalHeight,X=n*.7;let Y=X,Z=X;B>1?Z=X/B:Y=X*B;const V=h*n+(n-Y)/2,K=d*n+(n-Z)/2+w;o.save(),o.shadowColor="rgba(0, 255, 255, 0.85)",o.shadowBlur=n*.35,o.shadowOffsetX=0,o.shadowOffsetY=0,o.drawImage(O,V,K,Y,Z),o.restore()}else o.beginPath(),o.arc(h*n+n/2,d*n+n/2+w,n*.2,0,2*Math.PI),o.fillStyle="#00ffff",o.fill();this.drawCellShadow2D(o,h,d,n,e,y,t)}),T=!0):z?(_(h,d,()=>{if(this.floorImage.complete&&this.floorImage.naturalWidth!==0){o.save(),o.globalAlpha=.35,o.drawImage(this.floorImage,h*n,d*n,n,n),o.restore();const q=.22+.12*Math.sin(Date.now()/250);o.fillStyle=`rgba(136, 204, 255, ${q})`,o.fillRect(h*n,d*n,n,n)}else o.fillStyle=$.COLORS.PATH_KNOWN,o.fillRect(h*n,d*n,n,n)}),T=!0):this.isWallVisible(h,d,t)&&_(h,d,()=>{this.wallImage.complete&&this.wallImage.naturalWidth!==0?o.drawImage(this.wallImage,h*n,d*n,n,n):(o.fillStyle=$.COLORS.WALL,o.fillRect(h*n,d*n,n,n))})}T?this.staticMapCacheDirty=!0:this.staticMapCacheDirty=!1}isAdjacentToNonWall(t,e,i){const n=this.mazeGen.size;for(let a=-1;a<=1;a++)for(let r=-1;r<=1;r++){if(a===0&&r===0)continue;const o=t+a,c=e+r;if(o>=0&&o<n&&c>=0&&c<n&&this.maze.get(o,c,i)!==this.mazeGen.TYPES.WALL)return!0}return!1}getAuraHeightAt(t,e,i){const n=this.maze.get(t,e,i),a=t===Math.floor(this.mazeGen.startPos.x)&&e===Math.floor(this.mazeGen.startPos.y)&&i===this.mazeGen.startPos.z;if(!((n===this.mazeGen.TYPES.TELEPORT||n===this.mazeGen.TYPES.START||a)&&n!==this.mazeGen.TYPES.JELLY_PORTAL))return 0;if(this.teleportAnim&&this.teleportAnim.active){const c=this.teleportAnim,l=Math.min(1,c.elapsed/c.duration);if(c.stage==="OUT"){if(t===Math.floor(c.startX)&&e===Math.floor(c.startY)&&i===c.startZ)return 1-l}else if(c.stage==="IN"&&t===Math.floor(c.targetX)&&e===Math.floor(c.targetY)&&i===c.targetZ)return l;return 0}return t===Math.floor(this.player.x)&&e===Math.floor(this.player.y)&&i===this.player.z&&this.auraHeight||0}isWallVisible(t,e,i){if(this.maze.get(t,e,i)!==0)return!1;const a=this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.revealed;return this.isNearVisited(t,e,i)||this.isAdjacentToStatue(t,e,i)||a&&this.isAdjacentToNonWall(t,e,i)}isNearVisited(t,e,i){for(let n=-1;n<=1;n++)for(let a=-1;a<=1;a++){const r=t+n,o=e+a;if(r>=0&&r<this.mazeGen.size&&o>=0&&o<this.mazeGen.size){const c=this.maze.get(r,o,i);if(c===2||c===3||c===this.mazeGen.TYPES.JELLY_PORTAL||c===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${r},${o},${i}`))return!0}}return!1}isAdjacentToStatue(t,e,i){const n=this.mazeGen.size,a=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:1},{dx:-1,dy:1},{dx:1,dy:-1},{dx:-1,dy:-1}];for(const r of a){const o=t+r.dx,c=e+r.dy;if(o>=0&&o<n&&c>=0&&c<n&&this.maze.get(o,c,i)===this.mazeGen.TYPES.STATUE)return!0}return!1}populateFullyRevealedCells(t){const e=this.mazeGen.size;for(let i=0;i<e;i++)for(let n=0;n<e;n++){const a=this.maze.get(i,n,t),r=a===this.mazeGen.TYPES.TELEPORT,o=r&&this.discoveredTeleports.has(`${i},${n},${t}`),c=a===2||a===3||a===4||a===5||o,l=(a===1||r&&!o)&&this.isNearVisited(i,n,t),u=this.revealedPathSet.has(`${i},${n},${t}`);(c||l||u||this.isWallVisible(i,n,t))&&this.fullyRevealedCells.add(`${i},${n},${t}`)}}updatePulse(){if(!this.isMap3DActive||this.pulsatingMaterials.length===0)return;const t=.2+.5*Math.abs(Math.sin(Date.now()*.003));this.pulsatingMaterials.forEach(e=>{e.emissiveIntensity=t})}loop(){if(this.isDestroyed)return;const t=performance.now(),e=(t-this.lastFrameTime)/1e3;this.lastFrameTime=t;const i=Math.min(e,.1);if(this.isIntroPlaying?this.controls.update():this.update(i),this.updateVortexAngles(i),this.isMap3DActive||this.isIntroPlaying)if(this.isIntroPlaying)this.renderer.render(this.scene,this.camera);else{const n=1-Math.exp(-10*i);this.visualActiveFloor+=(this.activeMapFloor-this.visualActiveFloor)*n,Math.abs(this.activeMapFloor-this.visualActiveFloor)<.001&&(this.visualActiveFloor=this.activeMapFloor),this.drawIsometricMap()}else this.draw2DMap(i);requestAnimationFrame(()=>this.loop())}updateVortexAngles(t){if(!this.vortexAngles)return;const e=Math.floor(this.player.x),i=Math.floor(this.player.y),n=this.player.z,a=Math.floor(this.mazeGen.startPos.x),r=Math.floor(this.mazeGen.startPos.y),o=this.mazeGen.startPos.z,c=`${a},${r},${o}`,u=e===a&&i===r&&n===o?$.VORTEX_SPEED_FAST:$.VORTEX_SPEED_NORMAL;this.vortexAngles.set(c,(this.vortexAngles.get(c)||0)+t*u),this.allTeleports&&this.allTeleports.forEach(p=>{const m=`${p.x},${p.y},${p.z}`,T=e===p.x&&i===p.y&&n===p.z,_=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===p.x&&this.inactiveTeleportPos.y===p.y&&this.inactiveTeleportPos.z===p.z,h=T&&!_?$.VORTEX_SPEED_FAST:$.VORTEX_SPEED_NORMAL;this.vortexAngles.set(m,(this.vortexAngles.get(m)||0)+t*h)});const f=this.getExitPos();if(f){const p=`${f.x},${f.y},${f.z}`,m=$.VORTEX_SPEED_NORMAL;this.vortexAngles.set(p,(this.vortexAngles.get(p)||0)+t*m)}}getHexColorVariation(t,e){let i=t.replace("#","");i.length===3&&(i=i.split("").map(c=>c+c).join(""));let n=parseInt(i,16),a=(n>>16)+e,r=(n>>8&255)+e,o=(n&255)+e;return a=Math.max(0,Math.min(255,a)),r=Math.max(0,Math.min(255,r)),o=Math.max(0,Math.min(255,o)),`#${((1<<24)+(a<<16)+(r<<8)+o).toString(16).slice(1)}`}drawVortex2D(t,e,i,n,a,r,o){const c=e*n+n/2,l=i*n+n/2;t.save(),t.translate(c,l),t.fillStyle=a,t.fillRect(-n/2,-n/2,n,n);const u=this.vortexAngles.get(o)||0;t.rotate(u);const f=this.getHexColorVariation(a,45),p=this.getHexColorVariation(a,-45),m=t.createRadialGradient(0,0,0,0,0,n*.45);m.addColorStop(0,f),m.addColorStop(.4,a),m.addColorStop(1,p);const T=t.createRadialGradient(0,0,0,0,0,n*.45);T.addColorStop(0,"#ffffff"),T.addColorStop(.3,f),T.addColorStop(1,"rgba(255, 255, 255, 0)");const _=3,h=n*.45;for(let d=0;d<_;d++){const y=d*2*Math.PI/_;t.beginPath(),t.strokeStyle=m,t.lineWidth=n*.09,t.lineCap="round";for(let g=0;g<=h;g+=1){const v=5/h,E=y+g*v,b=g*Math.cos(E),S=g*Math.sin(E);g===0?t.moveTo(b,S):t.lineTo(b,S)}t.stroke(),t.beginPath(),t.strokeStyle=T,t.lineWidth=n*.04,t.lineCap="round";for(let g=n*.12;g<=h;g+=1){const v=5/h,E=y+g*v+.15,b=g*Math.cos(E),S=g*Math.sin(E);g===Math.floor(n*.12)?t.moveTo(b,S):t.lineTo(b,S)}t.stroke()}t.restore()}playContinueAnimation(){this.isIntroPlaying=!0;const t=this.mazeGen.size;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="block");const e=document.getElementById("map3d-instructions");e&&(e.style.display="block"),this.isometricCanvas&&(this.isometricCanvas.style.display="none"),this.ui.setMap3DVisible(!0),this.isMap3DActive=!0,this.updateRendererSize(),this.build3DMap(!1),this.camera.position.set(t*.9,t*this.vScale*.6,t*.9),this.controls.target.set(0,0,0),this.controls.update(),this.hideCanvasInstant(),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=2,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableRotate=!1;const i=()=>{this.activeContinueTimer&&(clearTimeout(this.activeContinueTimer),this.activeContinueTimer=null),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this.controls.autoRotate=!1,this.animateCameraToPlayer(()=>{this._transitionToGame()})};this.activeSkipHandler=()=>i(),window.addEventListener("keydown",this.activeSkipHandler,{once:!0}),window.addEventListener("touchstart",this.activeSkipHandler,{once:!0}),this.activeContinueTimer=setTimeout(i,2500)}animateCameraToPlayer(t){const e=this.mazeGen.size,i=this.player.x-e/2,n=(this.player.z-e/2)*this.vScale,a=this.player.y-e/2,r=this.controls.target.clone(),o=new Q(i,n,a),c=this.camera.position.clone(),l=new Q(i+4,n+5,a+4),u=1100,f=performance.now(),p=m=>{if(this.isDestroyed)return;const T=m-f,_=Math.min(T/u,1),h=_<.5?4*_*_*_:1-Math.pow(-2*_+2,3)/2;this.controls.target.lerpVectors(r,o,h),this.camera.position.lerpVectors(c,l,h),this.controls.update(),_<1?requestAnimationFrame(p):t&&t()};requestAnimationFrame(p)}playIntroAnimation(){this.isIntroPlaying=!0;const t=this.mazeGen.size;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="block");const e=document.getElementById("map3d-instructions");for(e&&(e.style.display="block"),this.isometricCanvas&&(this.isometricCanvas.style.display="none");this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(new yr(16777215,.7));const i=new vr(16777215,.5);i.position.set(10,20,10),this.scene.add(i),this.ui.setMap3DVisible(!0),this.isMap3DActive=!0,this.updateRendererSize(),this.camera.position.set(t*.9,t*this.vScale*.6,t*.9),this.controls.target.set(0,0,0),this.controls.update(),this.hideCanvasInstant();const n=this.mazeGen.startPos,a=this.getExitPos(),r=new xe(.92,.92,.92),o=new ee({color:$.COLORS.THREE_START,emissive:$.COLORS.THREE_START,emissiveIntensity:.6,transparent:!0,opacity:.95}),c=new Qt(r,o);c.position.set(Math.floor(n.x)-t/2,(n.z-t/2)*this.vScale,Math.floor(n.y)-t/2),this.scene.add(c);const l=new ee({color:16724736,emissive:16724736,emissiveIntensity:.6,transparent:!0,opacity:.95}),u=new Qt(r,l);u.position.set(a.x-t/2,(a.z-t/2)*this.vScale,a.y-t/2);const f=new xe(.95,.95,.95),p=new gs({color:16711680,wireframe:!0}),m=new Qt(f,p);u.add(m),this.scene.add(u);const T=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],_=`${Math.floor(n.x)},${Math.floor(n.y)},${n.z}`,h=`${a.x},${a.y},${a.z}`,d=new Set([_,h]),y=[{x:Math.floor(n.x),y:Math.floor(n.y),z:n.z}],g=[{x:a.x,y:a.y,z:a.z}];let v=0,E=0;const b=[];for(;v<y.length||E<g.length;){if(v<y.length){const{x:X,y:Y,z:Z}=y[v++];for(const[V,K,J]of T){const F=X+V,tt=Y+K,nt=Z+J,vt=`${F},${tt},${nt}`;F>=0&&F<t&&tt>=0&&tt<t&&nt>=0&&nt<t&&!d.has(vt)&&this.maze.get(F,tt,nt)!==this.mazeGen.TYPES.WALL&&(d.add(vt),y.push({x:F,y:tt,z:nt}),b.push({x:F,y:tt,z:nt}))}}if(E<g.length){const{x:X,y:Y,z:Z}=g[E++];for(const[V,K,J]of T){const F=X+V,tt=Y+K,nt=Z+J,vt=`${F},${tt},${nt}`;F>=0&&F<t&&tt>=0&&tt<t&&nt>=0&&nt<t&&!d.has(vt)&&this.maze.get(F,tt,nt)!==this.mazeGen.TYPES.WALL&&(d.add(vt),g.push({x:F,y:tt,z:nt}),b.push({x:F,y:tt,z:nt}))}}}this.controls.autoRotate=!0,this.controls.autoRotateSpeed=1.8,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableRotate=!1;const S=new xe(.88,.88,.88),z=new ee({color:$.COLORS.THREE_VISITED,transparent:!0,opacity:.72}),M=20,A=200,G=b.length,k=Math.max(1,Math.ceil(G/A));let q=0;this.activeIntroTimer=null;const w=[],O=()=>{this.activeIntroTimer&&(clearTimeout(this.activeIntroTimer),this.activeIntroTimer=null),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this._playGlitchAndTransition(w)};this.activeSkipHandler=()=>O(),window.addEventListener("keydown",this.activeSkipHandler,{once:!0}),window.addEventListener("touchstart",this.activeSkipHandler,{once:!0});const B=()=>{if(this.isDestroyed)return;const X=Math.min(q+k,b.length);for(;q<X;q++){const{x:Y,y:Z,z:V}=b[q],K=V%2===0;let J;K?J=new An(.35,.35,2*this.vScale,8):J=S;const F=new Qt(J,z);F.position.set(Y-t/2,(V-t/2)*this.vScale,Z-t/2),this.scene.add(F),w.push(F)}q<b.length?this.activeIntroTimer=setTimeout(B,M):(this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this._playGlitchAndTransition(w))};this.activeIntroTimer=setTimeout(B,M)}_playGlitchAndTransition(t){if(this.isDestroyed)return;const e=5,i=90;let n=0;const a=()=>{if(this.isDestroyed)return;const r=n%2===0;t.forEach(o=>{o&&(o.visible=r)}),n++,n<e*2?setTimeout(a,i):(t.forEach(o=>{o&&(o.visible=!1)}),setTimeout(()=>this._transitionToGame(),400))};a()}_transitionToGame(){this.isDestroyed||(this.controls&&(this.controls.autoRotate=!1,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls.enableRotate=!0),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.classList.add("intro-fade-out"),setTimeout(()=>{if(this.isDestroyed)return;this.ui.setMap3DVisible(!1),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.classList.remove("intro-fade-out"),this.isMap3DActive=!1,this.isIntroPlaying=!1,this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1);const t=document.getElementById("map-area-container"),e=document.getElementById("left-hud-panel"),i=document.getElementById("right-hud-panel"),n=document.getElementById("bottom-hud-container");t&&(t.classList.remove("intro-hidden"),t.classList.add("intro-reveal"),setTimeout(()=>t.classList.remove("intro-reveal"),700)),e&&(e.classList.remove("intro-hidden"),e.classList.add("intro-reveal"),setTimeout(()=>e.classList.remove("intro-reveal"),700)),i&&(i.classList.remove("intro-hidden"),i.classList.add("intro-reveal"),setTimeout(()=>i.classList.remove("intro-reveal"),700)),n&&(n.classList.remove("intro-hidden"),n.classList.add("intro-reveal"),setTimeout(()=>n.classList.remove("intro-reveal"),700)),this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2,this.isResumedFromSave||this.ui.showInfoBanner(Nt("msgWhereAmI"))},600))}startStorytelling(){this.isStoryActive=!0,this.storyMsgIndex=0,this.storyState="OPENING",this.storyWidthProgress=0,this.storyCloseProgress=1,this.storyCharIndex=0,this.storyTypeTimer=0;const t=document.getElementById("story-screen");t&&t.classList.remove("hidden");const e=document.getElementById("story-image-loader"),i=document.getElementById("story-dialogue");this.isPreloadingActive=!1;const n=()=>{this.isPreloadingActive=!1,i&&(i.style.transform="scaleX(0)"),this.updateStoryImage(),this.handleStoryKeyDown=r=>{r.key.toLowerCase()==="escape"?this.skipStory():this.isPreloadingActive||this.triggerAdvanceStory(),r.preventDefault()},window.addEventListener("keydown",this.handleStoryKeyDown),this.handleStoryClick=r=>{const o=r.target;o&&o.closest("#story-skip-btn")||this.isPreloadingActive||this.triggerAdvanceStory()},this.handleStoryTouch=r=>{const o=r.target;o&&o.closest("#story-skip-btn")||(this.isPreloadingActive||this.triggerAdvanceStory(),r.preventDefault())},t&&(t.addEventListener("click",this.handleStoryClick),t.addEventListener("touchstart",this.handleStoryTouch,{passive:!1}))},a=document.getElementById("story-skip-btn");if(a&&(a.onclick=r=>{r.stopPropagation(),this.skipStory()}),e&&i&&(i.style.transform="scaleX(0)",this.storyImagesLoadedCount<this.storyImagesTotalCount)){this.isPreloadingActive=!0,e.classList.remove("hidden"),this.storyImagesPreloadPromise.then(()=>{e.classList.add("hidden"),n()});return}n()}endStorytelling(){this.isStoryActive=!1,this.isPreloadingActive=!1;const t=document.getElementById("story-screen");t&&t.classList.add("hidden"),this.handleStoryKeyDown&&(window.removeEventListener("keydown",this.handleStoryKeyDown),this.handleStoryKeyDown=null),this.handleStoryClick&&t&&(t.removeEventListener("click",this.handleStoryClick),this.handleStoryClick=null),this.handleStoryTouch&&t&&(t.removeEventListener("touchstart",this.handleStoryTouch),this.handleStoryTouch=null),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1);const e=document.getElementById("map-area-container"),i=document.getElementById("left-hud-panel"),n=document.getElementById("right-hud-panel"),a=document.getElementById("bottom-hud-container");e&&(e.classList.remove("hidden","intro-hidden"),e.classList.add("intro-reveal"),setTimeout(()=>e.classList.remove("intro-reveal"),700)),i&&(i.classList.remove("hidden","intro-hidden"),i.classList.add("intro-reveal"),setTimeout(()=>i.classList.remove("intro-reveal"),700)),n&&(n.classList.remove("hidden","intro-hidden"),n.classList.add("intro-reveal"),setTimeout(()=>n.classList.remove("intro-reveal"),700)),a&&(a.classList.remove("hidden","intro-hidden"),a.classList.add("intro-reveal"),setTimeout(()=>a.classList.remove("intro-reveal"),700)),this.ui.setMap3DVisible(!1),this.isMap3DActive=!1,this.isIntroPlaying=!1,this.staticMapCacheDirty=!0,this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2,this.isResumedFromSave||this.ui.showInfoBanner(Nt("msgWhereAmI"))}updateStoryImage(){const t=document.getElementById("story-img"),e=document.getElementById("story-image-canvas");if(!(!t||!e))if(e.style.background="#0b0b0b",this.storyMsgIndex===5)t.style.display="none",e.style.background="radial-gradient(circle, #222222 0%, #000000 80%)",e.removeAttribute("data-placeholder");else{const i=this.preloadedStoryImages[this.storyMsgIndex];if(i)t.src=i.src,t.style.display="block",e.removeAttribute("data-placeholder");else{let n="";this.storyMsgIndex===0?n="assets/images/presentation/1-mystical-church-of-chaos.jpg":this.storyMsgIndex===1?n="assets/images/presentation/2-mystical-church-of-chaos.jpg":this.storyMsgIndex===2?n="assets/images/presentation/3-the-jelly-god.jpg":this.storyMsgIndex===3?n="assets/images/presentation/4-player-alone.jpg":this.storyMsgIndex===4&&(n="assets/images/presentation/5-player-thrown.jpg"),t.src=n,t.onerror=()=>{t.style.display="none",e.setAttribute("data-placeholder",`[Image ${this.storyMsgIndex+1}]`)},t.onload=()=>{t.style.display="block",e.removeAttribute("data-placeholder")}}}}updateStory(t){if(!this.isStoryActive||this.isPreloadingActive)return;const e=document.getElementById("story-text"),i=document.getElementById("story-dialogue"),n=document.getElementById("story-arrow");if(!i||!e)return;const a=["storyMsg1","storyMsg2","storyMsg3","storyMsg4","storyMsg5","storyMsg6"];if(this.storyMsgIndex>=a.length){this.endStorytelling();return}const r=Nt(a[this.storyMsgIndex]),o=c=>c<.5?4*c*c*c:1-Math.pow(-2*c+2,3)/2;this.storyState==="OPENING"?(e.textContent="",n&&n.classList.add("hidden"),this.storyWidthProgress+=t/.45,this.storyWidthProgress>=1&&(this.storyWidthProgress=1,this.storyState="TYPING",this.storyCharIndex=0,this.storyTypeTimer=0),i.style.transform=`scaleX(${o(this.storyWidthProgress)})`):this.storyState==="TYPING"?(i.style.transform="scaleX(1)",n&&n.classList.add("hidden"),this.storyTypeTimer+=t,this.storyTypeTimer>=.025&&(this.storyTypeTimer=0,this.storyCharIndex++,e.textContent=r.substring(0,this.storyCharIndex),this.storyCharIndex>=r.length&&(this.storyState="WAITING"))):this.storyState==="WAITING"?(i.style.transform="scaleX(1)",e.textContent=r,n&&n.classList.remove("hidden")):this.storyState==="CLOSING"&&(e.textContent="",n&&n.classList.add("hidden"),this.storyCloseProgress-=t/.45,this.storyCloseProgress<=0&&(this.storyCloseProgress=0,this.endStorytelling()),i.style.transform=`scaleX(${o(this.storyCloseProgress)})`)}triggerAdvanceStory(){const t=["storyMsg1","storyMsg2","storyMsg3","storyMsg4","storyMsg5","storyMsg6"];if(this.storyMsgIndex>=t.length)return;const e=Nt(t[this.storyMsgIndex]);if(this.storyState==="CLOSING"){this.skipStory();return}if(this.storyState==="OPENING")this.storyState="TYPING",this.storyWidthProgress=1,this.storyCharIndex=0,this.storyTypeTimer=0;else if(this.storyState==="TYPING"){this.storyState="WAITING",this.storyCharIndex=e.length;const i=document.getElementById("story-text");i&&(i.textContent=e)}else if(this.storyState==="WAITING")if(this.storyMsgIndex+1<t.length){this.storyMsgIndex++,this.storyState="TYPING",this.storyCharIndex=0,this.storyTypeTimer=0,this.updateStoryImage();const i=document.getElementById("story-text");i&&(i.textContent="")}else this.storyState="CLOSING",this.storyCloseProgress=1}skipStory(){this.endStorytelling()}toggleTeleportMap(t){this.isMap3DActive=t,this.isTeleportMode=t;const e=document.getElementById("mobile-teleport-exit-btn");if(t){this.isMouseOrTouchDetected=!1,e&&e.classList.remove("hidden"),this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.add("hidden"),this.ui.setMap3DVisible(!0),this.activeMapFloor=this.player.z,this.visualActiveFloor=this.player.z,this.mapCursor={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.mapZoom=1,this.mapPanOffsetX=0,this.mapPanOffsetY=0;const i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,r=this.allTeleports.findIndex(c=>c.x===i&&c.y===n&&c.z===a);r!==-1&&(this.selectedTeleportIndex=r),this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="none");const o=document.getElementById("map3d-instructions");o&&(o.style.display="none"),this.isometricCanvas?this.isometricCanvas.style.display="block":this.initIsometricCanvas(),this.teleportConfirmModalActive=!1}else this.lastTeleportCloseTime=Date.now(),e&&e.classList.add("hidden"),this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.remove("hidden"),this.ui.setMap3DVisible(!1),this.isometricCanvas&&(this.isometricCanvas.style.display="none"),this.teleportConfirmModalActive=!1}onCanvasClick(t){if(!this.isMap3DActive)return;const e=this.renderer.domElement.getBoundingClientRect();if(this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.isTeleportMode){const i=this.raycaster.intersectObjects(this.teleportMeshes);if(i.length>0){const n=i[0].object,{gridX:a,gridY:r,gridZ:o}=n.userData,c=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===a&&this.inactiveTeleportPos.y===r&&this.inactiveTeleportPos.z===o,l=Math.floor(this.player.x),u=Math.floor(this.player.y),f=this.player.z;a===l&&r===u&&o===f?this.toggleTeleportMap(!1):c||this.teleportTo(a,r,o)}}else{const i=this.raycaster.intersectObjects(this.knownMeshes);if(i.length>0){const n=i[0].object,{gridX:a,gridY:r,gridZ:o}=n.userData;this.triggerPathReveal(a,r,o)}}}toggleZoom(){if(this.mazeGen.size<=11)return;this.isZoomActive=!this.isZoomActive,this.staticMapCacheDirty=!0;const t=document.getElementById("zoom-out-icon"),e=document.getElementById("zoom-in-icon");t&&e&&(this.isZoomActive?(t.classList.remove("hidden"),e.classList.add("hidden")):(t.classList.add("hidden"),e.classList.remove("hidden")))}togglePause(){this.isGameOver||this.isDestroyed||this.isIntroPlaying||(this.isPaused=!this.isPaused,this.isPaused?(this.ui.showPause(),this.ui.uiMobilePauseBtn&&this.ui.uiMobilePauseBtn.classList.add("hidden")):(this.ui.hidePause(),this.ui.uiMobilePauseBtn&&!this.ui.uiMobileControls.classList.contains("hidden")&&this.ui.uiMobilePauseBtn.classList.remove("hidden")))}checkExitNeighborVisited(){const t=this.getExitPos(),e=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const i of e){const n=t.x+i.dx,a=t.y+i.dy,r=t.z+i.dz;if(n>=0&&n<this.mazeGen.size&&a>=0&&a<this.mazeGen.size&&r>=0&&r<this.mazeGen.size){const o=this.maze.get(n,a,r);if(o!==this.mazeGen.TYPES.WALL&&(o===this.mazeGen.TYPES.VISITED||o===this.mazeGen.TYPES.START||o===this.mazeGen.TYPES.ELEVATOR_VISITED))return!0}}return!1}findShortestPath(t,e,i=!1){const n=this.mazeGen.size,a=new Int8Array(n*n*n);for(let r=0;r<n;r++)for(let o=0;o<n;o++)for(let c=0;c<n;c++){const l=r*n*n+o*n+c,u=this.maze.get(r,o,c),f=r===t.x&&o===t.y&&c===t.z,p=r===e.x&&o===e.y&&c===e.z,m=r===e.x&&o===e.y&&(c===e.z-1||c===e.z+1)&&c%2===0;if(u===this.mazeGen.TYPES.WALL){a[l]=0;continue}const _=u===this.mazeGen.TYPES.TELEPORT,h=_&&this.discoveredTeleports.has(`${r},${o},${c}`),d=u===this.mazeGen.TYPES.VISITED||u===this.mazeGen.TYPES.START||u===this.mazeGen.TYPES.ELEVATOR_VISITED||h,y=(u===this.mazeGen.TYPES.PATH||_&&!h)&&this.isNearVisited(r,o,c);let g=!1;i?g=d||f||p||m:g=d||y||f||p||m,a[l]=g?1:0}return fl(t,e,a,n,0)??[]}triggerPathReveal(t,e,i,n=!1){if(this.pathRevealInterval||this.pathfinderBlockedUntil&&Date.now()<this.pathfinderBlockedUntil)return;if(this.pathfindersRemaining<=0){this.ui.showInfoBanner(Nt("msgNoPathfindersRemaining"));return}const a=this.maze.get(t,e,i)===this.mazeGen.TYPES.EXIT;if(a&&!this.exitPathfinderUnlocked){this.ui.showInfoBanner(Nt("msgExitNotFoundYet"));return}if(!n){const u=document.getElementById("pathfinder-confirm-modal");if(u){this.pathfinderConfirmTarget={x:t,y:e,z:i},u.classList.remove("hidden"),this.ui.localizeDOM();return}}this.pathRevealInterval&&(clearInterval(this.pathRevealInterval),this.pathRevealInterval=null),this.revealedPathSet.clear();let r=i;i%2===0&&(r=this.player.z<i?i+1:i-1,r<1&&(r=1),r>=this.mazeGen.size&&(r=this.mazeGen.size-2));const o={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},c={x:t,y:e,z:r},l=this.findShortestPath(o,c,a);!l||l.length===0||(this.pathfindersRemaining--,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),rs(this),this.activePathReveal=l,this.revealedPathProgress=0,this.revealedPathSet.add(`${t},${e},${i}`),this.pathRevealInterval=setInterval(()=>{if(this.revealedPathProgress<this.activePathReveal.length){const u=this.activePathReveal[this.revealedPathProgress],f=`${u.x},${u.y},${u.z}`;if(this.revealedPathSet.add(f),this.revealedPathProgress>0){const p=this.activePathReveal[this.revealedPathProgress-1];if(Math.abs(u.z-p.z)===2){const m=(u.z+p.z)/2,T=`${u.x},${u.y},${m}`;if(this.revealedPathSet.add(T),this.isMap3DActive&&this.gridMeshes){const _=this.mazeGen.size,h=this.gridMeshes[u.x*_*_+u.y*_+m];h&&(h.material=new ee({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.95*(this.isTeleportMode?.2:1)}))}}}if(this.staticMapCacheDirty=!0,this.isMap3DActive&&this.gridMeshes){const p=this.mazeGen.size,m=this.gridMeshes[u.x*p*p+u.y*p+u.z];m&&(m.material=new ee({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.95*(this.isTeleportMode?.2:1)}))}this.revealedPathProgress++}else clearInterval(this.pathRevealInterval),this.pathRevealInterval=null,this.pathfinderBlockedUntil=Date.now()+600},120))}teleportTo(t,e,i){if(this.toggleTeleportMap(!1),this.teleportAnim={active:!0,stage:"OUT",startX:this.player.x,startY:this.player.y,startZ:this.player.z,targetX:t+$.PLAYER_START_X,targetY:e+$.PLAYER_START_Y%1,targetZ:i,duration:.4,elapsed:0},this.skipCellAnimations=!0,!this.isSafeMode){const n=Math.floor(this.degree*1.5)+3;this.teleportCooldownTicks=n,this.inactiveTeleportPos={x:t,y:e,z:i},this.ui.showInfoBanner(Nt("msgOopsNoisyShit"));for(const a of this.hunters){if(a.state==="DEAD_BY_JELLY")continue;a.state="TELEPORT_TRACKING";const r=a.findPathToTarget({x:t,y:e,z:i},this.maze,this.mazeGen.TYPES);r?a.pathToTarget=r:a.pathToTarget=[]}}this.input.keys={}}initIsometricCanvas(){const t=document.createElement("canvas");this.isometricCanvas=t,t.id="isometric-map-canvas",t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.zIndex="101",this.isometricCtx=t.getContext("2d"),this.ui.uiMap3dContainer.appendChild(t),t.addEventListener("click",h=>this.handleIsometricClick(h));const e=()=>{this.isMouseOrTouchDetected||(this.isMouseOrTouchDetected=!0)};t.addEventListener("mousemove",e),t.addEventListener("pointerdown",e);let i=null,n=null,a=0,r=0,o=0,c=0,l=!1,u=!1,f=!1,p=0;t.addEventListener("touchstart",h=>{if(!(!this.isMap3DActive||this.isIntroPlaying)){if(p=0,f=!1,h.touches.length===1){const d=h.touches[0];a=d.clientX,r=d.clientY,o=this.mapPanOffsetX,c=this.mapPanOffsetY,u=!0,l=!1}else if(h.touches.length===2){l=!0,u=!1;const d=h.touches[0],y=h.touches[1];i=Math.hypot(d.clientX-y.clientX,d.clientY-y.clientY),n=this.mapZoom}}},{passive:!1}),t.addEventListener("touchmove",h=>{if(!(!this.isMap3DActive||this.isIntroPlaying)){if(l&&h.touches.length===2){h.preventDefault();const d=h.touches[0],y=h.touches[1],g=Math.hypot(d.clientX-y.clientX,d.clientY-y.clientY);if(i&&i>0&&n){const v=t.getBoundingClientRect(),E=(d.clientX+y.clientX)/2-v.left,b=(d.clientY+y.clientY)/2-v.top,S=this.mapZoom;let z=n*(g/i);z=Math.max(.5,Math.min(4,z));const M=z/S;this.mapPanOffsetX=E-(E-(v.width/2+this.mapPanOffsetX))*M-v.width/2,this.mapPanOffsetY=b-(b-(v.height/2+this.mapPanOffsetY))*M-v.height/2,this.mapZoom=z,p=100}}else if(u&&h.touches.length===1){const d=h.touches[0],y=d.clientX-a,g=d.clientY-r,v=Math.hypot(y,g);if(p=Math.max(p,v),!f&&Math.abs(g)>40&&Math.abs(g)>Math.abs(y)*1.5){const E=this.mazeGen.size;g<-40?this.activeMapFloor-2>=1&&(this.activeMapFloor-=2,f=!0):g>40&&this.activeMapFloor+2<=E-2&&(this.activeMapFloor+=2,f=!0)}f||(this.mapPanOffsetX=o+y,this.mapPanOffsetY=c+g),h.preventDefault()}}},{passive:!1}),t.addEventListener("touchend",h=>{if(l=!1,u=!1,p<8&&!f){const d=h.changedTouches[0];if(d){const y={clientX:d.clientX,clientY:d.clientY};this.handleIsometricClick(y)}}}),t.addEventListener("wheel",h=>{if(!this.isMap3DActive||this.isIntroPlaying)return;h.preventDefault();const d=t.getBoundingClientRect(),y=h.clientX-d.left,g=h.clientY-d.top,v=this.mapZoom,E=1.15;let b=h.deltaY<0?v*E:v/E;b=Math.max(.5,Math.min(4,b));const S=d.width,z=d.height,M=b/v;this.mapPanOffsetX=y-(y-(S/2+this.mapPanOffsetX))*M-S/2,this.mapPanOffsetY=g-(g-(z/2+this.mapPanOffsetY))*M-z/2,this.mapZoom=b},{passive:!1});let m=!1,T=0,_=0;t.addEventListener("mousedown",h=>{if(!this.isMap3DActive||this.isIntroPlaying)return;const d=t.getBoundingClientRect(),y=h.clientX-d.left,g=h.clientY-d.top;if(!(this.floorClickRects&&this.floorClickRects.some(v=>y>=v.x&&y<=v.x+v.w&&g>=v.y&&g<=v.y+v.h))){if(this.isTeleportMode){if(this.teleportConfirmModalActive&&this.teleportModalClickRects&&this.teleportModalClickRects.some(v=>y>=v.x&&y<=v.x+v.w&&g>=v.y&&g<=v.y+v.h)||!this.teleportConfirmModalActive&&this.teleportDotsClickRects&&this.teleportDotsClickRects.some(v=>y>=v.x&&y<=v.x+v.w&&g>=v.y&&g<=v.y+v.h))return;if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const v=this.teleportGoBtnClickRect;if(y>=v.x&&y<=v.x+v.w&&g>=v.y&&g<=v.y+v.h)return}}m=!0,T=h.clientX,_=h.clientY}}),window.addEventListener("mousemove",h=>{if(m){const d=h.clientX-T,y=h.clientY-_;this.mapPanOffsetX+=d,this.mapPanOffsetY+=y,T=h.clientX,_=h.clientY}}),window.addEventListener("mouseup",()=>{m=!1}),t.addEventListener("mousemove",h=>{if(!this.isMap3DActive||this.isIntroPlaying)return;const d=t.getBoundingClientRect(),y=h.clientX-d.left,g=h.clientY-d.top;if(t.style.cursor="default",this.isTeleportMode){if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const v=this.teleportGoBtnClickRect;if(y>=v.x&&y<=v.x+v.w&&g>=v.y&&g<=v.y+v.h){t.style.cursor="pointer";return}}if(this.teleportConfirmModalActive&&this.teleportModalClickRects){for(const v of this.teleportModalClickRects)if(y>=v.x&&y<=v.x+v.w&&g>=v.y&&g<=v.y+v.h){this.teleportModalSelection=v.selection,t.style.cursor="pointer";return}}else if(this.teleportDotsClickRects){const v=this.getSelectableTeleportIndices();for(const E of this.teleportDotsClickRects)if(y>=E.x&&y<=E.x+E.w&&g>=E.y&&g<=E.y+E.h&&v.includes(E.index)){this.selectedTeleportIndex=E.index;const b=this.allTeleports[E.index];this.activeMapFloor=b.z,this.mapCursor={x:b.x,y:b.y,z:b.z},t.style.cursor="pointer";return}}}if(!this.isTeleportMode){const v=this.mazeGen.size,E=this.activeMapFloor;let b=d.width*.7/v;b=Math.max(20,Math.min(48,b));const S=b*this.mapZoom,z=S/2,M=S/4,A=z*5,G=d.width/2+this.mapPanOffsetX,k=d.height/2+this.mapPanOffsetY,q=[];E+2<=v-2&&q.push(E+2),E+1<v&&q.push(E+1),q.push(E),E-1>=0&&q.push(E-1),E-2>=1&&q.push(E-2);for(const w of q){const O=k-(w-E)*A,B=(y-G)/z,X=(g-O)/M,Y=Math.round((B+X)/2),Z=Math.round((X-B)/2);if(Y>=0&&Y<v&&Z>=0&&Z<v&&this.getInteractiveElements(E).some(J=>J.x===Y&&J.y===Z&&J.z===w)){this.mapCursor={x:Y,y:Z,z:w},t.style.cursor="pointer";return}}}})}handleIsometricClick(t){if(!this.isMap3DActive||this.isIntroPlaying||t instanceof MouseEvent&&Date.now()-this.lastTeleportCloseTime<500)return;const e=this.isometricCanvas.getBoundingClientRect(),i=t.clientX-e.left,n=t.clientY-e.top;if(this.isTeleportMode){if(this.teleportConfirmModalActive){if(this.teleportModalClickRects){for(const g of this.teleportModalClickRects)if(i>=g.x&&i<=g.x+g.w&&n>=g.y&&n<=g.y+g.h){if(g.selection==="go"){const v=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(v.x,v.y,v.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;return}}this.teleportConfirmModalActive=!1;return}if(!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const g=this.teleportGoBtnClickRect;if(i>=g.x&&i<=g.x+g.w&&n>=g.y&&n<=g.y+g.h){const v=this.allTeleports[this.selectedTeleportIndex],E=Math.floor(this.player.x),b=Math.floor(this.player.y),S=this.player.z,z=v&&v.x===E&&v.y===b&&v.z===S;v&&!z&&(this.teleportTo(v.x,v.y,v.z),this.toggleTeleportMap(!1));return}}if(this.teleportDotsClickRects){const g=this.teleportDotsClickRects.find(v=>i>=v.x&&i<=v.x+v.w&&n>=v.y&&n<=v.y+v.h);if(g){if(this.getSelectableTeleportIndices().includes(g.index)){this.selectedTeleportIndex=g.index;const E=this.allTeleports[g.index];this.activeMapFloor=E.z,this.mapCursor={x:E.x,y:E.y,z:E.z}}return}}}if(this.floorClickRects){for(const g of this.floorClickRects)if(i>=g.x&&i<=g.x+g.w&&n>=g.y&&n<=g.y+g.h){this.activeMapFloor=g.floor;return}}const a=this.mazeGen.size,r=this.activeMapFloor;let o=e.width*.7/a;o=Math.max(20,Math.min(48,o));const c=o*this.mapZoom,l=c/2,u=c/4,f=l*5,p=e.width/2+this.mapPanOffsetX,m=e.height/2+this.mapPanOffsetY,T=(g,v,E)=>{const b=(g-v)*l+p,S=(g+v)*u-(E-r)*f+m;return{x:b,y:S}};if(this.isTeleportMode){const g=this.getInteractiveElements(r);let v=null,E=1/0;const b=this.isTouchDevice?52:35;for(const S of g){if(S.type!=="teleport")continue;const z=T(S.x,S.y,S.z),M=i-z.x,A=n-z.y,G=Math.sqrt(M*M+A*A);G<E&&(E=G,v=S)}if(v&&E<=b){const{x:S,y:z,z:M}=v,A=this.allTeleports.findIndex(k=>k.x===S&&k.y===z&&k.z===M),G=this.getSelectableTeleportIndices();A!==-1&&G.includes(A)&&(this.selectedTeleportIndex=A,this.mapCursor={x:S,y:z,z:M})}return}const _=this.getInteractiveElements(r);let h=null,d=1/0;const y=this.isTouchDevice?52:35;for(const g of _){const v=T(g.x,g.y,g.z),E=i-v.x,b=n-v.y,S=Math.sqrt(E*E+b*b);S<d&&(d=S,h=g)}if(h&&d<=y){this.mapCursor={x:h.x,y:h.y,z:h.z},this.triggerPathReveal(h.x,h.y,h.z);return}}navigateCursor(t){const e=this.activeMapFloor,i=this.getInteractiveElements(e);if(i.length===0)return;const n=this.mapCursor.x,a=this.mapCursor.y,r=this.mapCursor.z,o=this.mazeGen.size;if(t==="left"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e+1&&r===e-1)){this.mapCursor={x:n,y:a,z:e+1};return}for(let l=n-1;l>=0;l--){const u=i.filter(f=>f.x===l&&f.y===a);if(u.length>0){const f=u.find(m=>m.z===e-1),p=u.find(m=>m.z===e+1);f&&p?this.mapCursor={x:l,y:a,z:e-1}:this.mapCursor={x:l,y:a,z:u[0].z};return}}}else if(t==="right"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e-1&&r===e+1)){this.mapCursor={x:n,y:a,z:e-1};return}for(let l=n+1;l<o;l++){const u=i.filter(f=>f.x===l&&f.y===a);if(u.length>0){const f=u.find(m=>m.z===e-1),p=u.find(m=>m.z===e+1);f&&p?this.mapCursor={x:l,y:a,z:e+1}:this.mapCursor={x:l,y:a,z:u[0].z};return}}}else if(t==="up"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e-1&&r===e+1)){this.mapCursor={x:n,y:a,z:e-1};return}for(let l=a-1;l>=0;l--){const u=i.filter(f=>f.y===l);if(u.length>0){let f=-1,p=1/0;for(const h of u){const d=Math.abs(h.x-n);d<p?(p=d,f=h.x):d===p&&h.x<f&&(f=h.x)}const m=u.filter(h=>h.x===f),T=m.find(h=>h.z===e-1),_=m.find(h=>h.z===e+1);T&&_?this.mapCursor={x:f,y:l,z:e+1}:this.mapCursor={x:f,y:l,z:m[0].z};return}}}else if(t==="down"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e+1&&r===e-1)){this.mapCursor={x:n,y:a,z:e+1};return}for(let l=a+1;l<o;l++){const u=i.filter(f=>f.y===l);if(u.length>0){let f=-1,p=1/0;for(const h of u){const d=Math.abs(h.x-n);d<p?(p=d,f=h.x):d===p&&h.x<f&&(f=h.x)}const m=u.filter(h=>h.x===f),T=m.find(h=>h.z===e-1),_=m.find(h=>h.z===e+1);T&&_?this.mapCursor={x:f,y:l,z:e-1}:this.mapCursor={x:f,y:l,z:m[0].z};return}}}}getInteractiveElements(t){const e=[],i=this.mazeGen.size,n=this.mazeGen.TYPES,a=(r,o,c)=>{if(c<0||c>=i)return!1;const l=this.maze.get(r,o,c);return l===n.VISITED||l===n.START||l===n.ELEVATOR_VISITED||l===n.TELEPORT&&this.discoveredTeleports.has(`${r},${o},${c}`)};for(let r=0;r<i;r++)for(let o=0;o<i;o++){const c=this.maze.get(r,o,t);if(c===n.WALL)continue;const l=c===n.TELEPORT,u=l&&this.discoveredTeleports.has(`${r},${o},${t}`);if(u){e.push({x:r,y:o,z:t,type:"teleport"});continue}if(c===n.START){e.push({x:r,y:o,z:t,type:"start"});continue}if(c===n.EXIT){this.keysCollected===this.totalKeys&&this.exitPathfinderUnlocked&&e.push({x:r,y:o,z:t,type:"exit"});continue}(c===n.PATH||l&&!u)&&this.isNearVisited(r,o,t)&&e.push({x:r,y:o,z:t,type:"known"})}for(const r of[t-1,t+1])if(!(r<0||r>=i||r-1<1||r+1>=i))for(let o=0;o<i;o++)for(let c=0;c<i;c++){const l=this.maze.get(o,c,r);if(l===n.WALL)continue;const u=l===n.ELEVATOR_VISITED;l===1&&(a(o,c,r-1)||a(o,c,r+1))&&!u&&a(o,c,t)&&e.push({x:o,y:c,z:r,type:"shaft"})}return e}drawIsometricMap(){if(!this.isMap3DActive||this.isIntroPlaying)return;const t=this.isometricCanvas,e=this.isometricCtx;if(!t||!e)return;const i=t.width=window.innerWidth,n=t.height=window.innerHeight;e.clearRect(0,0,i,n),e.fillStyle="#000000",e.fillRect(0,0,i,n);const a=this.mazeGen.size,r=this.activeMapFloor,o=this.visualActiveFloor;let c=i*.7/a;c=Math.max(20,Math.min(48,c));const l=c*this.mapZoom,u=l/2,f=l/2,p=l/4,m=f*5,T=i/2+this.mapPanOffsetX,_=n/2+this.mapPanOffsetY,h=(L,D,H)=>{const W=L,C=D,ut=(W-C)*f+T,it=(W+C)*p-(H-o)*m+_;return{x:ut,y:it}},d=L=>{e.strokeStyle=`rgba(0, 255, 0, ${.15*L})`,e.lineWidth=1;for(let D=0;D<a;D++)for(let H=0;H<a;H++){const W=h(H,D,r);e.beginPath(),e.moveTo(W.x,W.y-p),e.lineTo(W.x+f,W.y),e.lineTo(W.x,W.y+p),e.lineTo(W.x-f,W.y),e.closePath(),e.stroke()}},y=(L,D,H,W,C,ut,it=1)=>{e.save(),e.globalAlpha=it,e.beginPath(),e.moveTo(L-H,D),e.lineTo(L,D+W),e.lineTo(L,D+W-C),e.lineTo(L-H,D-C),e.closePath(),e.fillStyle=ut,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(L,D+W),e.lineTo(L+H,D),e.lineTo(L+H,D-C),e.lineTo(L,D+W-C),e.closePath(),e.fillStyle=ut,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.beginPath(),e.moveTo(L-H,D-C),e.lineTo(L,D+W-C),e.lineTo(L+H,D-C),e.lineTo(L,D-W-C),e.closePath(),e.fillStyle=ut,e.fill(),e.restore()},g=(L,D,H,W,C,ut,it,Mt,ft=1)=>{e.save(),e.globalAlpha=ft,e.beginPath(),e.moveTo(L-H,D),e.lineTo(L,D+W),e.lineTo(L,D+W-C),e.lineTo(L-H,D-C),e.closePath(),e.fillStyle=ut,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(L,D+W),e.lineTo(L+H,D),e.lineTo(L+H,D-C),e.lineTo(L,D+W-C),e.closePath(),e.fillStyle=ut,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.restore(),e.save(),e.globalAlpha=ft,e.beginPath(),e.moveTo(L-H,D-C),e.lineTo(L,D+W-C),e.lineTo(L+H,D-C),e.lineTo(L,D-W-C),e.closePath(),e.fillStyle=ut,e.fill(),e.clip(),e.translate(L,D-C),e.scale(1,.5);const Tt=this.vortexAngles.get(Mt)||0;e.rotate(Tt);const mt=this.getHexColorVariation(ut,45),P=this.getHexColorVariation(ut,-45),x=H,j=e.createRadialGradient(0,0,0,0,0,x);j.addColorStop(0,mt),j.addColorStop(.4,ut),j.addColorStop(1,P);const pt=e.createRadialGradient(0,0,0,0,0,x);pt.addColorStop(0,"#ffffff"),pt.addColorStop(.3,mt),pt.addColorStop(1,"rgba(255, 255, 255, 0)");const rt=3;for(let ot=0;ot<rt;ot++){const _t=ot*2*Math.PI/rt;e.beginPath(),e.strokeStyle=j,e.lineWidth=H*.18,e.lineCap="round";for(let ct=0;ct<=x;ct+=1){const yt=5/x,xt=_t+ct*yt,At=ct*Math.cos(xt),st=ct*Math.sin(xt);ct===0?e.moveTo(At,st):e.lineTo(At,st)}e.stroke(),e.beginPath(),e.strokeStyle=pt,e.lineWidth=H*.08,e.lineCap="round";for(let ct=x*.12;ct<=x;ct+=1){const yt=5/x,xt=_t+ct*yt+.15,At=ct*Math.cos(xt),st=ct*Math.sin(xt);ct===Math.floor(x*.12)?e.moveTo(At,st):e.lineTo(At,st)}e.stroke()}e.restore()},v=(L,D,H)=>{if(H<0||H>=a)return!1;const W=this.maze.get(L,D,H);return W===this.mazeGen.TYPES.VISITED||W===this.mazeGen.TYPES.START||W===this.mazeGen.TYPES.ELEVATOR_VISITED||W===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${L},${D},${H}`)},E=(L,D,H,W,C,ut,it,Mt,ft,Tt)=>{e.save(),e.globalAlpha=Tt;const mt=ft?"#ffffff":Mt?$.COLORS.NEON_UP:$.COLORS.NEON_UP_UNUSED,P=ft?"#ffffff":Mt?$.COLORS.NEON_DOWN:$.COLORS.NEON_DOWN_UNUSED;if(ut&&it)e.beginPath(),e.moveTo(L,D-C-W),e.lineTo(L-H,D-C),e.lineTo(L,D-C+W),e.lineTo(L,D-C),e.closePath(),e.fillStyle=P,e.fill(),e.beginPath(),e.moveTo(L,D-C-W),e.lineTo(L,D-C),e.lineTo(L,D-C+W),e.lineTo(L+H,D-C),e.closePath(),e.fillStyle=mt,e.fill(),e.beginPath(),e.moveTo(L-H,D),e.lineTo(L,D+W),e.lineTo(L,D+W-C),e.lineTo(L-H,D-C),e.closePath(),e.fillStyle=P,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(L,D+W),e.lineTo(L+H,D),e.lineTo(L+H,D-C),e.lineTo(L,D+W-C),e.closePath(),e.fillStyle=mt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill();else{const x=ut?mt:P;e.beginPath(),e.moveTo(L-H,D-C),e.lineTo(L,D+W-C),e.lineTo(L+H,D-C),e.lineTo(L,D-W-C),e.closePath(),e.fillStyle=x,e.fill(),e.beginPath(),e.moveTo(L-H,D),e.lineTo(L,D+W),e.lineTo(L,D+W-C),e.lineTo(L-H,D-C),e.closePath(),e.fillStyle=x,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(L,D+W),e.lineTo(L+H,D),e.lineTo(L+H,D-C),e.lineTo(L,D+W-C),e.closePath(),e.fillStyle=x,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill()}e.restore()},b=(L,D)=>{const H=this.mazeGen.TYPES;for(let W=0;W<a;W++)for(let C=0;C<a;C++){const ut=this.maze.get(C,W,L),it=h(C,W,L);if(this.jellyPortalFreezeTimer>0&&this.jellyPortalResetCells.has(`${C},${W}`)&&L===this.player.z){const ct=1.5-this.jellyPortalFreezeTimer,yt=.6;let xt=0;ct>yt&&(xt=Math.min(1,(ct-yt)/.9)),e.save();const At=Math.round(100*(1-xt));e.filter=`invert(${At}%)`;const st=C===Math.floor(this.player.x)&&W===Math.floor(this.player.y),zt=ut===H.STATUE;if(!st&&!zt?e.globalAlpha=(1-xt)*D:e.globalAlpha=D,ut===H.WALL||zt)if(zt)y(it.x,it.y,f,p,1.5,"#444444",D),G(it.x,it.y,D);else{const Ct=f*.45,Pt=p*.45,I=u*.25,dt="rgba(90, 20, 160, 0.8)",bt=[{dx:-.23,dy:-.23},{dx:.23,dy:-.23},{dx:-.23,dy:.23},{dx:.23,dy:.23}];for(const St of bt){const gt=h(C+St.dx,W+St.dy,L);y(gt.x,gt.y,Ct,Pt,I,dt,D)}}else{let It="#444444",Ct=!1,Pt="";st?(Pt=$.COLORS.JELLY_PORTAL,Ct=!0):ut===H.TELEPORT?(Pt=$.COLORS.TELEPORT_INACTIVE,Ct=!0):ut===H.EXIT&&(Pt=$.COLORS.EXIT,Ct=!0),Ct?g(it.x,it.y,f,p,1.5,Pt,!1,`${C},${W},${L}`,D):y(it.x,it.y,f,p,1.5,It,D),ut===H.KEY?z(it.x,it.y-1.5,D):ut===H.MANA&&M(it.x,it.y-1.5,D)}e.restore();continue}const ft=ut===H.JELLY_PORTAL,Tt=ut===H.TELEPORT||ft,mt=Tt&&this.discoveredTeleports.has(`${C},${W},${L}`),P=ut===H.VISITED||ut===H.START||ut===H.ELEVATOR_VISITED||mt,x=(ut===H.PATH||Tt&&!mt)&&this.isNearVisited(C,W,L),j=this.revealedPathSet.has(`${C},${W},${L}`),pt=ut===H.KEY,rt=ut===H.MANA,ot=ut===H.EXIT;if(ut===H.WALL||ut===H.STATUE){if(ut===H.WALL&&this.isWallVisible(C,W,L)||ut===H.STATUE&&(this.isNearVisited(C,W,L)||this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.revealed)){const yt=f*.45,xt=p*.45,At=u*.25,st="rgba(90, 20, 160, 0.8)",zt=[{dx:-.23,dy:-.23},{dx:.23,dy:-.23},{dx:-.23,dy:.23},{dx:.23,dy:.23}];for(const Dt of zt){const It=h(C+Dt.dx,W+Dt.dy,L);y(It.x,It.y,yt,xt,At,st,D)}}continue}for(const ct of this.hunters){if(ct.state==="SLEEP"||ct.state==="DEAD_BY_JELLY")continue;const yt=ct.visualZ!==null?ct.visualZ:ct.z,xt=ct.visualX!==null?ct.visualX:ct.x,At=ct.visualY!==null?ct.visualY:ct.y;if(yt===null||xt===null||At===null)continue;const st=Math.round((yt-1)/2)*2+1,zt=Math.max(0,Math.min(a-1,Math.floor(xt))),Dt=Math.max(0,Math.min(a-1,Math.floor(At)));if(C===zt&&W===Dt&&L===st){const It=h(xt,At,yt);w(ct,It.x,It.y-1.5,D)}}if(P||x||j||pt||rt||ot){const yt=L<a-1&&this.maze.get(C,W,L+1)!==H.WALL&&this.maze.get(C,W,L+1)!==H.STATUE,xt=L>0&&this.maze.get(C,W,L-1)!==H.WALL&&this.maze.get(C,W,L-1)!==H.STATUE,At=this.mapCursor.x===C&&this.mapCursor.y===W&&this.mapCursor.z===L;if((P||j)&&(yt||xt))E(it.x,it.y,f,p,1.5,yt,xt,P,j,D);else{let dt="#222222",bt=!1,St="";const gt=Math.floor(this.player.x)===C&&Math.floor(this.player.y)===W&&L===this.player.z,U=`${C},${W},${L}`;if(j)dt="#ffffff";else if(ot)St=this.keysCollected===this.totalKeys?$.COLORS.EXIT:"#ff3300",bt=!0;else if(mt){const Et=C===Math.floor(this.mazeGen.startPos.x)&&W===Math.floor(this.mazeGen.startPos.y)&&L===this.mazeGen.startPos.z,Rt=this.teleportCooldownTicks>0;Et?St=Rt?$.COLORS.TELEPORT_INACTIVE:gt?$.COLORS.TELEPORT:$.COLORS.START:St=Rt?$.COLORS.TELEPORT_INACTIVE:ft?$.COLORS.JELLY_PORTAL:$.COLORS.TELEPORT,bt=!0}else if(P)ut===H.START?(St=this.teleportCooldownTicks>0?$.COLORS.TELEPORT_INACTIVE:gt?$.COLORS.TELEPORT:$.COLORS.START,bt=!0):dt="#444444";else if(x)if(At){const Et=.5+.5*Math.sin(performance.now()/120);dt=`rgb(${Math.floor(31+224*Et)}, ${Math.floor(58+197*Et)}, ${Math.floor(82+173*Et)})`}else dt="#1f3a52";else(pt||rt)&&(dt="#111111");bt?g(it.x,it.y,f,p,1.5,St,gt,U,D):y(it.x,it.y,f,p,1.5,dt,D)}if(pt&&z(it.x,it.y-1.5,D),rt&&M(it.x,it.y-1.5,D),mt){const dt=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===C&&this.inactiveTeleportPos.y===W&&this.inactiveTeleportPos.z===L;let bt=$.COLORS.TELEPORT;dt&&(bt=$.COLORS.TELEPORT_INACTIVE),A(it.x,it.y-1.5,bt,D,At)}let Dt=C===Math.floor(this.player.x)&&W===Math.floor(this.player.y)&&L===this.player.z,It=1,Ct=1,Pt=1;if(this.teleportAnim&&this.teleportAnim.active){const dt=this.teleportAnim,bt=Math.min(1,dt.elapsed/dt.duration);dt.stage==="OUT"?(Dt=C===Math.floor(dt.startX)&&W===Math.floor(dt.startY)&&L===dt.startZ,It=1-bt*.9,Ct=1+bt*2,Pt=1-bt):(Dt=C===Math.floor(dt.targetX)&&W===Math.floor(dt.targetY)&&L===dt.targetZ,It=bt,Ct=3-bt*2,Pt=bt)}const I=this.getAuraHeightAt(C,W,L);I>0&&k(it.x,it.y-1.5,f*.6,p*.6,u*1,I,D*Pt),Dt&&q(it.x,it.y-1.5,D*Pt,It,Ct),I>0&&k(it.x,it.y-1.5,f*.6,p*.6,u*1,I,D*Pt)}}},S=(L,D)=>{const H=this.mazeGen.TYPES;for(let W=0;W<a;W++)for(let C=0;C<a;C++){const ut=this.maze.get(C,W,L);if(ut===H.WALL)continue;const it=this.revealedPathSet.has(`${C},${W},${L}`),Mt=ut===H.ELEVATOR_VISITED;if(ut===1&&(v(C,W,L-1)||v(C,W,L+1)),it||v(C,W,r)){const ft=h(C,W,L-1);ft.y-=1.5;const Tt=h(C,W,L+1);let mt=$.COLORS.PATH_KNOWN;it?mt="#ffffff":Mt&&(mt=$.COLORS.PATH_VISITED);const P=this.mapCursor.x===C&&this.mapCursor.y===W&&this.mapCursor.z===L;let x=mt,j=D;P&&(j=.4+.6*(.5+.5*Math.sin(performance.now()/120)),x="#ffffff");const rt=(ct=>{const yt=ct.replace("#",""),xt=parseInt(yt,16),At=xt>>16&255,st=xt>>8&255,zt=xt&255;return`${At}, ${st}, ${zt}`})(x),ot=f*.25;e.save(),e.globalAlpha=j;const _t=e.createLinearGradient(0,ft.y,0,Tt.y);_t.addColorStop(0,`rgba(${rt}, 0.15)`),_t.addColorStop(.2,`rgba(${rt}, 0.65)`),_t.addColorStop(.5,`rgba(${rt}, 0.95)`),_t.addColorStop(.8,`rgba(${rt}, 0.65)`),_t.addColorStop(1,`rgba(${rt}, 0.15)`),e.beginPath(),e.moveTo(ft.x-ot,ft.y),e.lineTo(ft.x,ft.y+ot/2),e.lineTo(Tt.x,Tt.y+ot/2),e.lineTo(Tt.x-ot,Tt.y),e.closePath(),e.fillStyle=_t,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(ft.x,ft.y+ot/2),e.lineTo(ft.x+ot,ft.y),e.lineTo(Tt.x+ot,Tt.y),e.lineTo(Tt.x,Tt.y+ot/2),e.closePath(),e.fillStyle=_t,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.restore()}}},z=(L,D,H)=>{e.save(),e.globalAlpha=H;const W=Math.sin(performance.now()/200)*3-6,C=D+W;if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){const ut=this.keyImage,it=ut.naturalWidth/ut.naturalHeight,Mt=l*.55;let ft=Mt,Tt=Mt;it>1?Tt=Mt/it:ft=Mt*it,e.drawImage(ut,L-ft/2,C-Tt/2,ft,Tt)}else e.beginPath(),e.moveTo(L,C-5),e.lineTo(L+4,C),e.lineTo(L,C+5),e.lineTo(L-4,C),e.closePath(),e.fillStyle="#ffd700",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();e.restore()},M=(L,D,H)=>{e.save(),e.globalAlpha=H;const W=Math.sin(performance.now()/250)*3-6,C=D+W;if(this.manaImage.complete&&this.manaImage.naturalWidth!==0){const ut=this.manaImage,it=ut.naturalWidth/ut.naturalHeight,Mt=l*.55;let ft=Mt,Tt=Mt;it>1?Tt=Mt/it:ft=Mt*it,e.shadowColor="rgba(0, 255, 255, 0.85)",e.shadowBlur=l*.25,e.shadowOffsetX=0,e.shadowOffsetY=0,e.drawImage(ut,L-ft/2,C-Tt/2,ft,Tt)}else e.beginPath(),e.moveTo(L,C-5),e.lineTo(L+4,C),e.lineTo(L,C+5),e.lineTo(L-4,C),e.closePath(),e.fillStyle="#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();e.restore()},A=(L,D,H,W,C)=>{e.save(),e.globalAlpha=W;const ut=Math.sin(performance.now()/250)*2-4,it=D+ut;if(C){e.save();const Mt=1+.35*(.5+.5*Math.sin(performance.now()/100));e.beginPath(),e.arc(L,it,7*Mt,0,Math.PI*2),e.fillStyle="rgba(255, 255, 255, 0.4)",e.fill(),e.restore()}e.beginPath(),e.arc(L,it,5,0,Math.PI*2),e.fillStyle=C?"#ffffff":H,e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.2,e.stroke(),e.restore()},G=(L,D,H)=>{if(this.statueImage&&this.statueImage.complete&&this.statueImage.naturalWidth!==0){e.save(),e.beginPath();const W=f*.7,C=p*.7;e.ellipse(L,D,W,C,0,0,Math.PI*2),e.fillStyle="rgba(0, 0, 0, 0.45)",e.fill(),e.restore(),e.save(),e.globalAlpha=H;const ut=this.statueImage.width/this.statueImage.height,it=l*.8,Mt=it/ut;e.drawImage(this.statueImage,L-it/2,D-Mt,it,Mt),e.restore()}else y(L,D,f*.4,p*.4,u*.8,"#555555",H)},k=(L,D,H,W,C,ut,it,Mt)=>{const ft=C*ut;if(ft<=0)return;const Tt=this.auraTime||0;e.save(),e.beginPath(),e.ellipse(L,D,H,W,0,0,Math.PI*2),e.fillStyle="rgba(0, 220, 255, 0.05)",e.fill(),e.lineWidth=1.5,e.strokeStyle=`rgba(0, 220, 255, ${it*.4})`,e.stroke();const mt=e.createLinearGradient(L,D,L,D-ft);mt.addColorStop(0,`rgba(0, 220, 255, ${it*.45})`),mt.addColorStop(.3,`rgba(0, 200, 255, ${it*.3})`),mt.addColorStop(1,"rgba(0, 150, 255, 0.0)"),e.beginPath(),e.moveTo(L-H,D),e.lineTo(L-H,D-ft),e.ellipse(L,D-ft,H,W,0,Math.PI,0,!0),e.lineTo(L+H,D),e.ellipse(L,D,H,W,0,0,Math.PI,!1),e.fillStyle=mt,e.fill();const P=e.createLinearGradient(L,D,L,D-ft);P.addColorStop(0,`rgba(0, 255, 255, ${it*.7})`),P.addColorStop(1,"rgba(0, 255, 255, 0.0)"),e.strokeStyle=P,e.lineWidth=1.5,e.beginPath(),e.moveTo(L-H,D),e.lineTo(L-H,D-ft),e.moveTo(L+H,D),e.lineTo(L+H,D-ft),e.stroke();for(let j=0;j<3;j++){const pt=(Tt*.8+j/3)%1*ut,rt=D-C*pt;if(rt>D-ft){const ot=(1-pt)*it*.6;e.beginPath(),e.ellipse(L,rt,H,W,0,0,Math.PI*2),e.strokeStyle=`rgba(0, 255, 255, ${ot})`,e.lineWidth=1,e.stroke()}}const x=(1-ut*.3)*it*.8;e.beginPath(),e.ellipse(L,D-ft,H,W,0,0,Math.PI*2),e.fillStyle=`rgba(0, 255, 255, ${x*.1})`,e.fill(),e.strokeStyle=`rgba(0, 255, 255, ${x})`,e.lineWidth=1.5,e.stroke(),e.restore()},q=(L,D,H,W=1,C=1)=>{const ut=`${this.playerVertical}_${this.playerSide}`,it=this.mageImages[ut];let Mt=H;this.deathAnimation&&this.deathAnimation.active&&(Math.floor(Date.now()/120)%2===0||(Mt=.2));const ft=f*.55*W,Tt=p*.55,mt=L-f*.12,P=D-p*.12;if(e.save(),e.beginPath(),e.ellipse(mt,P,ft,Tt,0,0,Math.PI*2),e.fillStyle=`rgba(0, 0, 0, ${Mt*.45})`,e.fill(),e.restore(),it&&it.complete){e.save(),e.globalAlpha=Mt;const x=l*.7,j=x,pt=x*(it.height/it.width);e.translate(L,D),e.scale(W,C);const rt=-pt;e.drawImage(it,-j/2,rt,j,pt),e.restore()}else e.save(),e.globalAlpha=Mt,e.translate(L,D),e.scale(W,C),e.beginPath(),e.arc(0,-3,5,0,Math.PI*2),e.fillStyle=$.COLORS.PLAYER,e.fill(),e.strokeStyle=$.COLORS.PLAYER_OUTLINE,e.lineWidth=1.5,e.stroke(),e.restore();if(this.deathAnimation&&this.deathAnimation.active){const x=Math.min(1,this.deathAnimation.delayElapsed/this.deathAnimation.delayDuration),j=-(it&&it.complete?l*.7*(it.height/it.width):l*.5),pt=l*.7,rt=(1-x)*j-4*pt*x*(1-x);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){e.save();const ot=this.keyImage,_t=ot.naturalWidth/ot.naturalHeight,ct=l*.55;let yt=ct,xt=ct;_t>1?xt=ct/_t:yt=ct*_t,e.drawImage(ot,L-yt/2,D-xt/2+rt,yt,xt),e.restore()}else e.save(),e.beginPath(),e.arc(L,D+rt,l*.15,0,2*Math.PI),e.fillStyle="#ffd700",e.fill(),e.restore()}if($.SHOW_COLLISION_DEBUG){e.save();const x=$.PLAYER_COLLISION_OFFSET_X||0,j=$.PLAYER_COLLISION_OFFSET_Y||0,pt=(x-j)*f,rt=(x+j)*p,ot=L+pt,_t=D+rt;e.beginPath(),e.moveTo(ot,_t-$.PLAYER_COLLISION_RADIUS*u),e.lineTo(ot+$.PLAYER_COLLISION_RADIUS*l,_t),e.lineTo(ot,_t+$.PLAYER_COLLISION_RADIUS*u),e.lineTo(ot-$.PLAYER_COLLISION_RADIUS*l,_t),e.closePath(),e.strokeStyle="#ff0000",e.lineWidth=1.5,e.stroke(),e.restore()}},w=(L,D,H,W)=>{if(L&&L.lowCanvas){e.save(),e.globalAlpha=W;const C=l*.9;e.save(),e.beginPath();const ut=f*.6,it=p*.6;e.ellipse(D,H,ut,it,0,0,Math.PI*2),e.fillStyle="rgba(0, 0, 0, 0.35)",e.fill(),e.restore();const Mt=Math.sin(L.jellyTime*3)*(l*.06),ft=l*.38+Mt,Tt=H-ft,mt=L.jellyTime,P=Math.sin(mt)*6,x=Math.cos(mt*.7)*4,j=1+Math.sin(mt*1.2)*.06,pt=1+Math.cos(mt*.8)*.06,rt=P*Math.PI/180,ot=x*Math.PI/180;e.save(),e.translate(D,Tt),e.transform(j,Math.tan(ot),Math.tan(rt),pt,0,0),e.imageSmoothingEnabled=!1,e.drawImage(L.lowCanvas,-C/2,-C/2,C,C),e.restore(),e.restore()}else{e.save(),e.globalAlpha=W;const C=4+Math.sin(performance.now()/100)*1.5;e.beginPath(),e.arc(D,H-3,C,0,Math.PI*2),e.fillStyle=$.COLORS.HUNTER||"#ff00ff",e.fill(),e.strokeStyle="#ff0000",e.lineWidth=1,e.stroke(),e.restore()}},O=L=>{const D=Math.abs(L-o);return D<=2?1-D/2*(1-.35):D<4?.35*(1-(D-2)/2):0};for(let L=1;L<a;L+=2){if(L-1>=0&&(L-1===r-1||L-1===r+1)){const H=O(L-2),W=O(L),C=Math.max(H,W)*.8;C>.01&&S(L-1,C)}const D=O(L);D>.01&&(L===r&&d(D),b(L,D))}const B=this.getInteractiveElements(r);if(B.forEach(L=>{if(L.type==="shaft"){const D=h(L.x,L.y,L.z),H=this.mapCursor.x===L.x&&this.mapCursor.y===L.y&&this.mapCursor.z===L.z;e.save();const W=.5+.5*Math.sin(performance.now()/150);e.beginPath(),e.arc(D.x,D.y,7.5+W*2.5,0,Math.PI*2),e.fillStyle=H?"#ffffff":"#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke(),e.restore()}}),this.mapCursor.x===Math.floor(this.player.x)&&this.mapCursor.y===Math.floor(this.player.y)&&this.mapCursor.z===this.player.z||B.some(L=>L.x===this.mapCursor.x&&L.y===this.mapCursor.y&&L.z===this.mapCursor.z)){const L=h(this.mapCursor.x,this.mapCursor.y,this.mapCursor.z),D=Math.sin(performance.now()/150)*4;e.save();const H=1-D/16,W=h(this.mapCursor.x,this.mapCursor.y,r);e.translate(W.x,W.y),e.scale(1,.5),e.beginPath(),e.arc(0,0,8*H,0,Math.PI*2),e.fillStyle=`rgba(0, 0, 0, ${.55*H})`,e.fill(),e.restore(),e.save();const C=L.x,ut=L.y-u-12+D;e.beginPath(),e.moveTo(C,ut),e.lineTo(C-6,ut-8),e.lineTo(C-3,ut-8),e.lineTo(C-3,ut-16),e.lineTo(C+3,ut-16),e.lineTo(C+3,ut-8),e.lineTo(C+6,ut-8),e.closePath(),e.fillStyle="#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke(),e.restore()}const Z=this.isTouchDevice?65:45,V=n/3,K=n/3*2,J=i-Z;e.save(),e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=4,e.lineCap="round",e.beginPath(),e.moveTo(J,V),e.lineTo(J,K),e.stroke(),e.strokeStyle="rgba(0, 255, 255, 0.4)",e.lineWidth=1.5;for(let L=V;L<=K;L+=(K-V)/6)e.beginPath(),e.moveTo(J-5,L),e.lineTo(J+5,L),e.stroke();e.restore();const F=(V+K)/2,tt=(K-V)/2,nt=o-r,vt=F-nt/2*tt;if(e.save(),e.fillStyle="#00ffff",e.beginPath(),e.arc(J,vt,this.isTouchDevice?8:5,0,Math.PI*2),e.fill(),e.restore(),this.floorClickRects=[],[{floor:r+2,y:V,label:`${(r+2+1)/2}F`,valid:r+2<=a-2},{floor:r,y:F,label:`${(r+1)/2}F`,valid:!0},{floor:r-2,y:K,label:`${(r-2+1)/2}F`,valid:r-2>=1}].forEach(L=>{if(!L.valid)return;const D=this.isTouchDevice,H=D?90:60,W=D?50:36,C=J-H-(D?20:15),ut=L.y-W/2,it=L.floor===r;e.save(),e.beginPath(),e.moveTo(C+6,ut),e.lineTo(C+H,ut),e.lineTo(C+H,ut+W-6),e.lineTo(C+H-6,ut+W),e.lineTo(C,ut+W),e.lineTo(C,ut+6),e.closePath(),e.fillStyle=it?"rgba(0, 255, 255, 0.25)":"rgba(0, 0, 0, 0.6)",e.strokeStyle=it?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=it?2:1,e.fill(),e.stroke(),e.restore(),e.strokeStyle=it?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=it?2:1,e.beginPath(),e.moveTo(C+H,L.y),e.lineTo(J-2,L.y),e.stroke(),e.fillStyle=it?"#00ffff":"rgba(255, 255, 255, 0.5)",e.font=D?'bold 12px "Courier New"':'bold 8px "Courier New"',e.textAlign="center",e.textBaseline="top",e.fillText("LEVEL",C+H/2,ut+(D?8:6)),e.fillStyle="#ffffff",e.font=D?'bold 22px "Courier New"':'bold 15px "Courier New"',e.textBaseline="top",e.fillText(L.label,C+H/2,ut+(D?22:16)),this.floorClickRects.push({floor:L.floor,x:C,y:ut,w:H+(D?25:15),h:W})}),!this.isTeleportMode){const L=this.isTouchDevice,D=L?30:25,H=30,W=L?160:120,C=L?50:36;e.save(),e.beginPath(),e.moveTo(D+6,H),e.lineTo(D+W,H),e.lineTo(D+W,H+C-6),e.lineTo(D+W-6,H+C),e.lineTo(D,H+C),e.lineTo(D,H+6),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.7)",e.strokeStyle="rgba(0, 255, 255, 0.35)",e.lineWidth=1.5,e.fill(),e.stroke(),e.restore(),e.fillStyle="rgba(0, 255, 255, 0.7)",e.font=`bold ${L?11:8}px 'Roboto', sans-serif`,e.textAlign="center",e.textBaseline="top",e.fillText(Nt("hudPathfinders"),D+W/2,H+(L?8:5)),e.fillStyle="#ffffff",e.font=`bold ${L?18:13}px 'Roboto', sans-serif`,e.textBaseline="top",e.fillText(`${this.pathfindersRemaining} / ${this.totalPathfinders}`,D+W/2,H+(L?23:16))}if(this.isTeleportMode){const H=i/2-90,W=30;e.save(),e.beginPath(),e.moveTo(H+8,W),e.lineTo(H+180-8,W),e.lineTo(H+180,W+8),e.lineTo(H+180,W+38-8),e.lineTo(H+180-8,W+38),e.lineTo(H+8,W+38),e.lineTo(H,W+38-8),e.lineTo(H,W+8),e.closePath(),e.fillStyle="rgba(255, 140, 0, 0.22)",e.strokeStyle="#ff8c00",e.lineWidth=2.5,e.fill(),e.stroke(),e.restore(),e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Nt("teleportWarning"),i/2,W+38/2)}if(this.isTeleportMode){const L=this.allTeleports.length,D=this.isTouchDevice,H=D?72:56,W=D?16:10,C=D?24:15,ut=D?38:25,it=D?90:62,Mt=D?46:30,ft=D?46:36,Tt=!this.teleportConfirmModalActive,mt=Tt?ft+it:0,P=i-40,x=(L-1)*H,j=x+60+mt,pt=D&&j>P;let rt,ot,_t,ct;if(this.teleportDotsClickRects=[],pt){const yt=Math.ceil(L/2),xt=L-yt,At=(yt-1)*H,st=(xt-1)*H,zt=Math.max(At,st);rt=zt+60+mt,ot=124,_t=n-145,ct=i/2-rt/2;const Dt=zt,It=ct+30+(Dt-At)/2,Ct=ct+30+(Dt-st)/2,Pt=_t+35,I=_t+89;if(e.save(),e.beginPath(),e.moveTo(ct+10,_t),e.lineTo(ct+rt-10,_t),e.lineTo(ct+rt,_t+10),e.lineTo(ct+rt,_t+ot-10),e.lineTo(ct+rt-10,_t+ot),e.lineTo(ct+10,_t+ot),e.lineTo(ct,_t+ot-10),e.lineTo(ct,_t+10),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.72)",e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=1.5,e.fill(),e.stroke(),e.restore(),this.allTeleports.forEach((dt,bt)=>{const St=bt<yt,gt=St?bt:bt-yt,U=(St?It:Ct)+gt*H,Et=St?Pt:I,Rt=`${dt.x},${dt.y},${dt.z}`,Gt=this.discoveredTeleports.has(Rt),Ut=bt===this.selectedTeleportIndex,$t=dt.x===Math.floor(this.player.x)&&dt.y===Math.floor(this.player.y)&&dt.z===this.player.z,Kt=this.inactiveTeleportPos&&dt.x===this.inactiveTeleportPos.x&&dt.y===this.inactiveTeleportPos.y&&dt.z===this.inactiveTeleportPos.z;if(e.save(),!Gt)e.beginPath(),e.arc(U,Et,W,0,Math.PI*2),e.fillStyle="rgba(100, 100, 100, 0.45)",e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.15)",e.stroke();else if(Kt)e.beginPath(),e.arc(U,Et,W,0,Math.PI*2),e.fillStyle="rgba(255, 45, 0, 0.2)",e.fill(),e.strokeStyle="rgba(255, 45, 0, 0.4)",e.lineWidth=1.2,e.stroke();else{if(Ut){const se=1+.3*(.5+.5*Math.sin(performance.now()/120)),ae=(D?36:22)*se;e.beginPath(),e.arc(U,Et,ae,0,Math.PI*2),e.fillStyle="rgba(0, 255, 255, 0.18)",e.fill()}e.beginPath(),e.arc(U,Et,Ut?C:W,0,Math.PI*2),e.fillStyle=Ut?"#ffffff":"#00b3ff",e.fill(),e.strokeStyle=Ut?"#00ffff":"#ffffff",e.lineWidth=Ut?2:1,e.stroke(),$t&&(e.beginPath(),e.arc(U,Et,Ut?D?12:8:D?8:5,0,Math.PI*2),e.fillStyle="#39ff14",e.fill())}e.restore(),this.teleportDotsClickRects.push({x:U-ut,y:Et-ut,w:ut*2,h:ut*2,index:bt})}),Tt){const dt=ct+30+Dt+ft,bt=_t+ot/2-Mt/2;e.save(),e.beginPath(),e.roundRect?e.roundRect(dt,bt,it,Mt,6):e.rect&&e.rect(dt,bt,it,Mt),e.fillStyle="rgba(0, 255, 255, 0.15)",e.strokeStyle="#00ffff",e.lineWidth=2,e.fill(),e.stroke(),e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Nt("teleportGo"),dt+it/2,bt+Mt/2),e.restore(),this.teleportGoBtnClickRect={x:dt,y:bt,w:it,h:Mt}}else this.teleportGoBtnClickRect=null}else{const yt=n-(D?70:60);rt=x+60+mt,ot=D?86:62,_t=yt-ot/2,ct=i/2-rt/2;const xt=ct+30;if(e.save(),e.beginPath(),e.moveTo(ct+6,_t),e.lineTo(ct+rt-6,_t),e.lineTo(ct+rt,_t+6),e.lineTo(ct+rt,_t+ot-6),e.lineTo(ct+rt-6,_t+ot),e.lineTo(ct+6,_t+ot),e.lineTo(ct,_t+ot-6),e.lineTo(ct,_t+6),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.72)",e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=1,e.fill(),e.stroke(),e.restore(),this.allTeleports.forEach((At,st)=>{const zt=xt+st*H,Dt=`${At.x},${At.y},${At.z}`,It=this.discoveredTeleports.has(Dt),Ct=st===this.selectedTeleportIndex,Pt=At.x===Math.floor(this.player.x)&&At.y===Math.floor(this.player.y)&&At.z===this.player.z,I=this.inactiveTeleportPos&&At.x===this.inactiveTeleportPos.x&&At.y===this.inactiveTeleportPos.y&&At.z===this.inactiveTeleportPos.z;if(e.save(),!It)e.beginPath(),e.arc(zt,yt,W,0,Math.PI*2),e.fillStyle="rgba(100, 100, 100, 0.45)",e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.15)",e.stroke();else if(I)e.beginPath(),e.arc(zt,yt,W,0,Math.PI*2),e.fillStyle="rgba(255, 45, 0, 0.2)",e.fill(),e.strokeStyle="rgba(255, 45, 0, 0.4)",e.lineWidth=1.2,e.stroke();else{if(Ct){const dt=1+.3*(.5+.5*Math.sin(performance.now()/120)),bt=(D?36:22)*dt;e.beginPath(),e.arc(zt,yt,bt,0,Math.PI*2),e.fillStyle="rgba(0, 255, 255, 0.18)",e.fill()}e.beginPath(),e.arc(zt,yt,Ct?C:W,0,Math.PI*2),e.fillStyle=Ct?"#ffffff":"#00b3ff",e.fill(),e.strokeStyle=Ct?"#00ffff":"#ffffff",e.lineWidth=Ct?2:1,e.stroke(),Pt&&(e.beginPath(),e.arc(zt,yt,Ct?D?12:8:D?8:5,0,Math.PI*2),e.fillStyle="#39ff14",e.fill())}e.restore(),this.teleportDotsClickRects.push({x:zt-ut,y:yt-ut,w:ut*2,h:ut*2,index:st})}),Tt){const At=xt+x+ft,st=yt-Mt/2;e.save(),e.beginPath(),e.rect(At,st,it,Mt),e.fillStyle="rgba(0, 255, 255, 0.15)",e.strokeStyle="#00ffff",e.lineWidth=1.5,e.fill(),e.stroke(),e.fillStyle="#ffffff",e.font=`bold ${D?15:12}px 'Roboto', sans-serif`,e.textAlign="center",e.textBaseline="middle",e.fillText(Nt("teleportGo"),At+it/2,st+Mt/2),e.restore(),this.teleportGoBtnClickRect={x:At,y:st,w:it,h:Mt}}else this.teleportGoBtnClickRect=null}if(this.teleportConfirmModalActive){e.fillStyle="rgba(0, 0, 0, 0.6)",e.fillRect(0,0,i,n);const yt=320,xt=160,At=i/2-yt/2,st=n/2-xt/2;e.save(),e.beginPath(),e.moveTo(At+10,st),e.lineTo(At+yt-10,st),e.lineTo(At+yt,st+10),e.lineTo(At+yt,st+xt-10),e.lineTo(At+yt-10,st+xt),e.lineTo(At+10,st+xt),e.lineTo(At,st+xt-10),e.lineTo(At,st+10),e.closePath(),e.fillStyle="rgba(10, 18, 30, 0.94)",e.strokeStyle="#00ffff",e.lineWidth=2,e.fill(),e.stroke(),e.restore(),e.fillStyle="#00ffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="top",e.fillText(Nt("teleportationLink"),i/2,st+16),e.strokeStyle="rgba(0, 255, 255, 0.2)",e.lineWidth=1,e.beginPath(),e.moveTo(At+15,st+34),e.lineTo(At+yt-15,st+34),e.stroke();const zt=this.allTeleports[this.selectedTeleportIndex];e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.fillText(Nt("teleportJumpSector",{floor:(zt.z+1)/2}),i/2,st+52),e.fillStyle="rgba(255, 255, 255, 0.7)",e.font="13px 'Roboto', sans-serif",e.fillText(Nt("teleportTargetGrid",{x:zt.x,y:zt.y}),i/2,st+75);const Dt=100,It=30,Ct=i/2-Dt-15,Pt=st+105,I=i/2+15,dt=st+105;this.teleportModalClickRects=[{x:Ct,y:Pt,w:Dt,h:It,selection:"go"},{x:I,y:dt,w:Dt,h:It,selection:"cancel"}];const bt=(St,gt,U,Et)=>{const Rt=this.teleportModalSelection===Et;e.save(),e.beginPath(),e.moveTo(St+4,gt),e.lineTo(St+Dt-4,gt),e.lineTo(St+Dt,gt+4),e.lineTo(St+Dt,gt+It-4),e.lineTo(St+Dt-4,gt+It),e.lineTo(St+4,gt+It),e.lineTo(St,gt+It-4),e.lineTo(St,gt+4),e.closePath(),e.fillStyle=Rt?"rgba(0, 255, 255, 0.35)":"rgba(0, 0, 0, 0.6)",e.strokeStyle=Rt?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=Rt?2:1,e.fill(),e.stroke(),e.restore(),e.fillStyle=Rt?"#ffffff":"#00ffff",e.font="bold 13px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(U,St+Dt/2,gt+It/2)};bt(Ct,Pt,Nt("teleportGo"),"go"),bt(I,dt,Nt("teleportCancel"),"cancel")}}}}function Pr(s,t,e){const i=s.slice();return i[13]=t[e],i[15]=e,i}function Cr(s){let t,e,i,n,a=(s[13].title[s[0]]||s[13].title.en)+"",r,o,c,l;function u(){return s[2](s[13])}return{c(){t=ye("button"),e=ye("span"),e.textContent=`${s[15]+1}.`,i=Le(),n=ye("span"),r=Lr(a),o=Le(),ie(e,"class","tut-num"),ie(n,"class","tut-title"),ie(t,"class","tutorial-item-btn"),ie(t,"data-stage-id",s[13].id)},m(f,p){ce(f,t,p),Ye(t,e),Ye(t,i),Ye(t,n),Ye(n,r),Ye(t,o),c||(l=Al(t,"click",u),c=!0)},p(f,p){s=f,p&1&&a!==(a=(s[13].title[s[0]]||s[13].title.en)+"")&&Cl(r,a)},d(f){f&&re(t),c=!1,l()}}}function vm(s){let t,e,i,n,a,r,o,c,l,u,f,p,m,T,_,h,d,y,g,v,E,b,S,z,M,A,G,k=$a(Di),q=[];for(let w=0;w<k.length;w+=1)q[w]=Cr(Pr(s,k,w));return{c(){t=ye("section"),t.innerHTML='<div class="menu-content"><header><h1 class="game-title" data-i18n="gameTitle">VOID ESCAPE</h1></header> <div class="menu-stats-grid"><div class="stat-container hunter"><div class="stat-label" data-i18n="activeHunters">Active Hunters</div> <div class="stat-value" id="hunter-count">-</div></div> <div class="stat-container teleport"><div class="stat-label" data-i18n="activeTeleports">Active Teleports</div> <div class="stat-value" id="teleport-count">-</div></div> <div class="stat-container keys"><div class="stat-label" data-i18n="activeKeys">Active Keys</div> <div class="stat-value" id="keys-count">-</div></div> <div class="stat-container pathfinder"><div class="stat-label" data-i18n="availablePathfinders">Available Pathfinders</div> <div class="stat-value" id="pathfinder-count">-</div></div></div> <div class="control-group"><div class="degree-full-row"><span class="degree-label" data-i18n="mazeDegree">Maze Degree</span> <span class="degree-value" id="degree-val">-</span></div> <input type="range" id="maze-degree" aria-label="Ajustar Grau do Labirinto"/> <p class="hint" data-i18n="degreeHint">Controls the grid size. Higher values create larger, more complex mazes.</p></div> <div class="control-group switch-group"><div class="switch-container"><span class="switch-label" data-i18n="safeMode">Safe Mode</span> <label class="switch" for="safe-mode"><input type="checkbox" id="safe-mode" aria-label="Safe Mode"/> <span class="slider"></span></label></div> <p class="hint" data-i18n="safeModeHint">When active, no hunters will spawn in the maze.</p></div> <div class="menu-tutorials-row"><button id="tutorials-btn-menu" class="tutorials-btn" data-i18n="tutorialsMenu">TUTORIALS</button></div> <div class="menu-action-btns"><button id="start-btn" data-i18n="generateMaze">NEW GAME</button> <button id="continue-btn-menu" class="continue-btn" style="display:none" data-i18n="continue">CONTINUE</button></div> <p class="game-credits" data-i18n="gameCredits">a game by Bernard Rodrigues</p></div>',e=Le(),i=ye("section"),n=ye("div"),a=ye("header"),a.innerHTML='<h1 class="game-title" data-i18n="tutorialsTitle">TUTORIALS</h1>',r=Le(),o=ye("div");for(let w=0;w<q.length;w+=1)q[w].c();c=Le(),l=ye("div"),l.innerHTML='<button id="back-to-menu-btn" data-i18n="back">BACK</button>',u=Le(),f=ye("div"),f.innerHTML='<div class="modal-overlay"></div> <div class="modal-container"><h2 id="tut-modal-title">-</h2> <p id="tut-modal-description">-</p> <div class="modal-buttons"><button id="tut-modal-start-btn" class="modal-confirm-btn" data-i18n="start">START</button> <button id="tut-modal-cancel-btn" class="modal-cancel-btn" data-i18n="cancel">CANCEL</button></div></div>',p=Le(),m=ye("div"),m.innerHTML='<div class="modal-overlay"></div> <div class="modal-container"><h2 data-i18n="pathfinderConfirmTitle">Use Pathfinder?</h2> <p data-i18n="pathfinderConfirmDesc">This will consume 1 Pathfinder charge to reveal the shortest route.</p> <div class="modal-buttons"><button id="pathfinder-modal-confirm-btn" class="modal-confirm-btn" data-i18n="confirm">CONFIRM</button> <button id="pathfinder-modal-cancel-btn" class="modal-cancel-btn" data-i18n="cancel">CANCEL</button></div></div>',T=Le(),_=ye("section"),_.innerHTML='<div class="story-container"><div id="story-image-canvas" class="story-image-box"><div id="story-image-loader" class="story-loader hidden"><div class="spinner"></div> <span data-i18n="loading">LOADING...</span></div> <img id="story-img" src="" alt="Story Image" style="display: none; max-width: 100%; max-height: 100%;"/></div> <div id="story-dialogue" class="story-dialogue-box"><span id="story-text"></span> <span id="story-arrow" class="story-arrow hidden">▼</span></div> <div class="story-actions"><button id="story-skip-btn">SKIP</button></div></div>',h=Le(),d=ye("section"),d.innerHTML='<div class="popup-container victory"><h1 data-i18n="victoryTitle">Mission Accomplished</h1> <p data-i18n="victoryText">You have successfully navigated the 3D void.</p> <p class="victory-stats"><span data-i18n="mapCompletion">MAP COMPLETION</span>: <span id="victory-completion-rate">0%</span></p> <p class="victory-stats"><span data-i18n="victoryDeaths">DEATHS</span>: <span id="victory-deaths-count">0</span></p> <p class="victory-stats"><span data-i18n="victoryDegree">MAZE DEGREE</span>: <span id="victory-maze-degree">0</span></p> <p class="victory-stats"><span data-i18n="victoryTime">COMPLETION TIME</span>: <span id="victory-completion-time">00:00</span></p> <p class="victory-stats"><span data-i18n="victoryMana">MANA COLLECTED</span>: <span id="victory-mana-count">0/0</span></p> <div class="end-game-btns"><button id="next-tut-btn-victory" class="end-btn hidden" data-i18n="nextTutorial">NEXT TUTORIAL</button> <button id="restart-btn-victory" class="end-btn" data-i18n="playAgain">PLAY AGAIN</button> <button id="menu-btn-victory" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',y=Le(),g=ye("section"),g.innerHTML='<div class="popup-container death"><h1 data-i18n="gameOverTitle">Terminated</h1> <p data-i18n="gameOverText">You were caught by the void hunters.</p> <div class="end-game-btns"><button id="continue-btn-death" class="end-btn continue-highlight" data-i18n="continue">CONTINUE</button> <button id="retry-btn-death" class="end-btn" data-i18n="playAgain">PLAY AGAIN</button> <button id="menu-btn-death" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',v=Le(),E=ye("section"),E.innerHTML='<div class="popup-container pause"><h1 data-i18n="pauseTitle">PAUSED</h1> <div class="end-game-btns"><button id="resume-btn" class="end-btn continue-highlight" data-i18n="resume">RESUME</button> <button id="menu-btn-pause" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',b=Le(),S=ye("div"),S.innerHTML='<span class="saving-icon">💾</span> <span data-i18n="saving">SAVING...</span>',z=Le(),M=ye("main"),M.innerHTML='<button id="mobile-pause-btn" class="hidden" aria-label="Pause Game">✕</button> <button id="mobile-teleport-exit-btn" class="hidden" aria-label="Exit Teleport Map">✕</button> <div id="left-hud-panel" class="intro-hidden"><div class="hud-item-group"><div class="keys-title" data-i18n="hudKeys">KEYS</div> <div class="keys-counter"><span id="keys-collected-count">0</span> / <span id="keys-total-count">0</span></div> <div id="keys-list-container"></div></div> <div class="hud-item-group" id="pathfinder-hud-group"><div class="pathfinders-title" data-i18n="hudPathfinders">PATHFINDERS</div> <div class="pathfinders-counter"><span id="pathfinders-remaining-count">0</span> / <span id="pathfinders-total-count">0</span></div></div></div> <div id="map-area-container" class="intro-hidden"><div id="desktop-hud-row"><div id="mana-counter-desktop" class="mana-panel-hud"><span class="mana-icon">✨</span> <span class="mana-label" data-i18n="hudMana">MANA:</span> <span id="mana-collected-count-desktop">0</span>/<span id="mana-total-count-desktop">0</span></div> <div id="hunter-status-panel"><span class="status-label" data-i18n="statusLabel">HUNTER STATUS:</span> <div class="status-marquee-container"><span id="hunter-status-val" class="status-marquee-text status--scanning" data-i18n="statusScanning">SCANNING</span></div></div> <div id="jelly-portal-counter-desktop" class="jelly-portal-panel-hud"><div class="jelly-balls-container"><span class="jelly-ball gold-ball-1"></span> <span class="jelly-ball gold-ball-2"></span></div> <span class="jelly-portal-count-label">x<span id="jelly-portal-count-desktop">0</span></span></div></div> <div style="position: relative; display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 90vw; margin-bottom: calc(var(--h-unit) * 2); margin-bottom: calc(var(--d-h-unit) * 2);"><canvas id="main-2d-canvas" aria-label="2D Navigation Map" style="margin-bottom: 0;"></canvas> <button id="mobile-jelly-portal-btn" aria-label="Jelly God Portal"><svg class="jelly-portal-spiral" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M12 12a1 1 0 0 1 1 1c0 1.1-.9 2-2 2a3 3 0 0 1-3-3c0-2.2 1.8-4 4-4a5 5 0 0 1 5 5c0 3.3-2.7 6-6 6a7 7 0 0 1-7-7c0-4.4 3.6-8 8-8a9 9 0 0 1 9 9"></path></svg></button> <button id="mobile-zoom-btn" aria-label="Toggle Zoom"><svg id="zoom-out-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;"><circle cx="11" cy="11" r="6"></circle><line x1="21" y1="21" x2="15.5" y2="15.5"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg> <svg id="zoom-in-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;" class="hidden"><circle cx="11" cy="11" r="6"></circle><line x1="21" y1="21" x2="15.5" y2="15.5"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg></button></div> <div id="mobile-proximeter-row"><div id="mana-counter-mobile" class="mana-panel-hud"><span class="mana-icon">✨</span> <span class="mana-label" data-i18n="hudMana">MANA:</span> <span id="mana-collected-count-mobile">0</span>/<span id="mana-total-count-mobile">0</span></div> <div id="proximeter-container" class="hidden"><div class="proximeter-label" data-i18n="proximityDetector">PROXIMITY DETECTOR</div> <div class="proximeter-bar"><span class="proximeter-cell" data-index="1"></span> <span class="proximeter-cell" data-index="2"></span> <span class="proximeter-cell" data-index="3"></span> <span class="proximeter-cell" data-index="4"></span> <span class="proximeter-cell" data-index="5"></span> <span class="proximeter-cell" data-index="6"></span> <span class="proximeter-cell" data-index="7"></span> <span class="proximeter-cell" data-index="8"></span> <span class="proximeter-cell" data-index="9"></span> <span class="proximeter-cell" data-index="10"></span></div></div> <div id="jelly-portal-counter-mobile" class="jelly-portal-panel-hud"><div class="jelly-balls-container"><span class="jelly-ball gold-ball-1"></span> <span class="jelly-ball gold-ball-2"></span></div> <span class="jelly-portal-count-label">x<span id="jelly-portal-count-mobile">0</span></span></div></div> <div id="bottom-hud-container" class="intro-hidden"><div id="floor-display" aria-live="polite"><span class="hud-label" data-i18n="hudFloor">Floor</span> <span id="current-floor">0</span></div> <div id="visited-display" aria-live="polite"><span class="hud-label" data-i18n="hudVisited">Visited</span> <span class="visited-value"><span id="visited-percent">0</span>%</span></div></div></div> <div id="right-hud-panel" class="intro-hidden"><aside id="map-legend"><h3 data-i18n="mapLegendTitle">MAP LEGEND</h3> <div class="legend-item"><span class="color-box color-box--visited"></span> <span data-i18n="legendVisited">Visited Path</span></div> <div class="legend-item"><span class="color-box color-box--known"></span> <span data-i18n="legendKnown">Known Path</span></div> <div class="legend-item"><span class="color-box color-box--start"></span> <span data-i18n="legendStart">Starting Point</span></div> <div class="legend-item"><span class="color-box color-box--exit"></span> <span data-i18n="legendExit">Maze Exit</span></div> <div id="legend-hunter" class="legend-item"><span class="color-box color-box--hunter"></span> <span data-i18n="legendHunter">Void Hunter</span></div> <div class="legend-item"><span class="color-box color-box--teleport"></span> <span data-i18n="legendTeleport">Teleport</span></div> <div class="legend-item"><span class="symbol-box"><svg viewBox="0 0 24 24" fill="none" style="width: 100%; height: 100%;"><path d="M12 2L5 9H9V11H15V9H19L12 2Z" fill="#00ffff"></path><path d="M12 22L19 15H15V13H9V15H5L12 22Z" fill="#ff00ff"></path></svg></span> <span data-i18n="legendElevator">Elevator</span></div></aside> <aside id="controls-hint"><h3 data-i18n="controlsHintTitle">CONTROLS HINT</h3> <div id="controls-hint-content"></div></aside></div> <nav id="mobile-controls" class="hidden"><button id="mobile-down" class="mobile-btn" disabled="" aria-label="Go Down">▼</button> <button id="mobile-map" class="mobile-btn" disabled="" aria-label="Open Map" data-i18n="map">MAP</button> <button id="mobile-up" class="mobile-btn" disabled="" aria-label="Go Up">▲</button></nav> <div id="map3d-container" class="hidden"></div>',A=Le(),G=ye("section"),G.innerHTML='<div class="story-loader"><div class="spinner"></div> <span data-i18n="generatingMaze">GENERATING MAZE...</span></div>',ie(t,"id","start-menu"),ie(o,"class","tutorials-list"),ie(l,"class","menu-action-btns"),ie(n,"class","menu-content"),ie(i,"id","tutorials-menu"),ie(i,"class","hidden"),ie(f,"id","tutorial-instructions-modal"),ie(f,"class","hidden"),ie(m,"id","pathfinder-confirm-modal"),ie(m,"class","hidden"),ie(_,"id","story-screen"),ie(_,"class","hidden"),ie(d,"id","victory-screen"),ie(d,"class","hidden"),ie(g,"id","game-over-screen"),ie(g,"class","hidden"),ie(E,"id","pause-screen"),ie(E,"class","hidden"),ie(S,"id","saving-indicator"),ie(S,"class","hidden"),ie(M,"id","game-container"),ie(G,"id","loading-screen"),ie(G,"class","hidden")},m(w,O){ce(w,t,O),ce(w,e,O),ce(w,i,O),Ye(i,n),Ye(n,a),Ye(n,r),Ye(n,o);for(let B=0;B<q.length;B+=1)q[B]&&q[B].m(o,null);Ye(n,c),Ye(n,l),ce(w,u,O),ce(w,f,O),ce(w,p,O),ce(w,m,O),ce(w,T,O),ce(w,_,O),ce(w,h,O),ce(w,d,O),ce(w,y,O),ce(w,g,O),ce(w,v,O),ce(w,E,O),ce(w,b,O),ce(w,S,O),ce(w,z,O),ce(w,M,O),ce(w,A,O),ce(w,G,O)},p(w,[O]){if(O&3){k=$a(Di);let B;for(B=0;B<k.length;B+=1){const X=Pr(w,k,B);q[B]?q[B].p(X,O):(q[B]=Cr(X),q[B].c(),q[B].m(o,null))}for(;B<q.length;B+=1)q[B].d(1);q.length=k.length}},i:Cn,o:Cn,d(w){w&&(re(t),re(e),re(i),re(u),re(f),re(p),re(m),re(T),re(_),re(h),re(d),re(y),re(g),re(v),re(E),re(b),re(S),re(z),re(M),re(A),re(G)),bl(q,w)}}}function ym(s,t,e){let i=null,n="en",a=[],r=-1;function o(){const h=Array.from(document.querySelectorAll('section:not(.hidden), div[id$="-modal"]:not(.hidden), div[id$="-screen"]:not(.hidden)'));if(h.length===0){a=[],r=-1;return}const d=h[h.length-1];a=Array.from(d.querySelectorAll('button, input:not([type="hidden"])')),a=a.filter(v=>{const E=window.getComputedStyle(v);return E.display!=="none"&&E.visibility!=="hidden"&&!v.disabled});const y=document.activeElement,g=a.indexOf(y);g!==-1?r=g:r=-1}function c(h){o(),a.length!==0&&(r===-1?r=h>0?0:a.length-1:r=(r+h+a.length)%a.length,a[r].focus())}function l(h){var y,g,v;i&&i.destroy(),ml(),(y=document.getElementById("start-menu"))==null||y.classList.add("hidden"),(g=document.getElementById("victory-screen"))==null||g.classList.add("hidden"),(v=document.getElementById("game-over-screen"))==null||v.classList.add("hidden");const d=document.getElementById("loading-screen");d&&(d.classList.remove("hidden"),Sn()),setTimeout(()=>{try{i=new ca(h,$.BRANCHING_FACTOR)}finally{d&&d.classList.add("hidden")}},50)}let u=null;function f(h){var v;u=h;const d=Sr(),y=document.getElementById("tut-modal-title"),g=document.getElementById("tut-modal-description");if(y&&(y.innerText=h.title[d]||h.title.en),g){const E=h.description[d]||h.description.en;g.innerHTML=cm(E,h.images),g.scrollTop=0}(v=document.getElementById("tutorial-instructions-modal"))==null||v.classList.remove("hidden")}function p(h){var y,g,v,E;i&&i.destroy(),(y=document.getElementById("tutorial-instructions-modal"))==null||y.classList.add("hidden"),(g=document.getElementById("tutorials-menu"))==null||g.classList.add("hidden"),(v=document.getElementById("victory-screen"))==null||v.classList.add("hidden"),(E=document.getElementById("game-over-screen"))==null||E.classList.add("hidden");const d=document.getElementById("loading-screen");d&&(d.classList.remove("hidden"),Sn()),setTimeout(()=>{try{i=new ca(h.degree||3,$.BRANCHING_FACTOR,null,h)}finally{d&&d.classList.add("hidden")}},50)}function m(){var y,g,v;const h=pl();if(!h)return;i&&i.destroy(),(y=document.getElementById("start-menu"))==null||y.classList.add("hidden"),(g=document.getElementById("victory-screen"))==null||g.classList.add("hidden"),(v=document.getElementById("game-over-screen"))==null||v.classList.add("hidden");const d=document.getElementById("loading-screen");d&&(d.classList.remove("hidden"),Sn()),setTimeout(()=>{try{i=new ca(h.degree,h.branchingFactor,h)}finally{d&&d.classList.add("hidden")}},50)}function T(){var d,y,g;i&&i.destroy(),(d=document.getElementById("victory-screen"))==null||d.classList.add("hidden"),(y=document.getElementById("game-over-screen"))==null||y.classList.add("hidden");const h=document.getElementById("continue-btn-menu");h&&(h.style.display=Ar()?"":"none"),(g=document.getElementById("start-menu"))==null||g.classList.remove("hidden")}return Rl(()=>{Sn();const h=document.getElementById("maze-degree"),d=document.getElementById("degree-val"),y=document.getElementById("hunter-count"),g=document.getElementById("teleport-count"),v=document.getElementById("keys-count"),E=document.getElementById("pathfinder-count"),b=document.getElementById("safe-mode"),S=Tt=>{const P=b&&b.checked?0:$.getHunterCount(Tt);y&&(y.innerText=String(P),y.style.color=P>0?"#f00":"#88ccff")};b&&h&&(b.onchange=()=>{S(parseInt(h.value))});const z=Tt=>{const mt=$.getTeleportCount(Tt);g&&(g.innerText=String(mt))},M=Tt=>{const mt=$.getHunterCount(Tt)*2;v&&(v.innerText=String(mt))},A=Tt=>{const mt=$.getPathfinderCount(Tt);E&&(E.innerText=String(mt))};if(h){$.MIN_MAZE_DEGREE!==void 0&&(h.min=String($.MIN_MAZE_DEGREE)),$.MAX_MAZE_DEGREE!==void 0&&(h.max=String($.MAX_MAZE_DEGREE)),$.MAZE_DEGREE!==void 0&&(h.value=String($.MAZE_DEGREE)),h.oninput=()=>{const mt=parseInt(h.value);d&&(d.innerText=String(mt)),S(mt),z(mt),M(mt),A(mt)};const Tt=parseInt(h.value);d&&(d.innerText=String(Tt)),S(Tt),z(Tt),M(Tt),A(Tt)}const G=document.getElementById("continue-btn-menu");G&&(G.style.display=Ar()?"":"none");const k=document.getElementById("mobile-pause-btn");k&&(k.onclick=Tt=>{Tt.stopPropagation(),i&&i.togglePause()});const q=document.getElementById("mobile-teleport-exit-btn");q&&(q.onclick=Tt=>{Tt.stopPropagation(),i&&i.isTeleportMode&&i.toggleTeleportMap(!1)});const w=document.getElementById("mobile-jelly-portal-btn");w&&(w.onclick=Tt=>{Tt.stopPropagation(),i&&i.tryActivateJellyPortal()});const O=document.getElementById("start-btn");O&&h&&(O.onclick=()=>{l(parseInt(h.value))});const B=document.getElementById("restart-btn-victory");B&&h&&(B.onclick=()=>{i&&i.isTutorialMode&&i.currentTutorialStage?p(i.currentTutorialStage):l(parseInt(h.value))});const X=document.getElementById("continue-btn-menu");X&&(X.onclick=()=>{m()});const Y=document.getElementById("menu-btn-victory");Y&&(Y.onclick=()=>{var Tt,mt;i&&i.isTutorialMode?((Tt=document.getElementById("victory-screen"))==null||Tt.classList.add("hidden"),(mt=document.getElementById("tutorials-menu"))==null||mt.classList.remove("hidden")):T()});const Z=document.getElementById("next-tut-btn-victory");Z&&(Z.onclick=()=>{var Tt;if(i&&i.isTutorialMode&&i.currentTutorialId){const mt=Di.findIndex(P=>P.id===i.currentTutorialId);if(mt!==-1&&mt+1<Di.length){const P=Di[mt+1];(Tt=document.getElementById("victory-screen"))==null||Tt.classList.add("hidden"),f(P)}}});const V=document.getElementById("continue-btn-death");V&&(V.onclick=()=>{m()});const K=document.getElementById("retry-btn-death");K&&h&&(K.onclick=()=>{i&&i.isTutorialMode&&i.currentTutorialStage?p(i.currentTutorialStage):l(parseInt(h.value))});const J=document.getElementById("menu-btn-death");J&&(J.onclick=()=>{T()});const F=document.getElementById("resume-btn");F&&(F.onclick=()=>{i&&i.togglePause()});const tt=document.getElementById("menu-btn-pause");tt&&(tt.onclick=()=>{T()});const nt=document.getElementById("tutorials-btn-menu"),vt=document.getElementById("tutorials-menu"),wt=document.getElementById("start-menu"),L=document.getElementById("back-to-menu-btn");nt&&(nt.onclick=()=>{e(0,n=Sr()),wt==null||wt.classList.add("hidden"),vt==null||vt.classList.remove("hidden")}),L&&(L.onclick=()=>{vt==null||vt.classList.add("hidden"),wt==null||wt.classList.remove("hidden")});const D=document.getElementById("tut-modal-start-btn"),H=document.getElementById("tut-modal-cancel-btn");D&&(D.onclick=()=>{u&&p(u)}),H&&(H.onclick=()=>{var Tt,mt;(Tt=document.getElementById("tutorial-instructions-modal"))==null||Tt.classList.add("hidden"),i&&(i.isTutorialMode?(i.destroy(),i=null,(mt=document.getElementById("tutorials-menu"))==null||mt.classList.remove("hidden")):T()),u=null});const W=document.getElementById("pathfinder-modal-confirm-btn"),C=document.getElementById("pathfinder-modal-cancel-btn"),ut=document.getElementById("pathfinder-confirm-modal");W&&(W.onclick=()=>{if(i&&i.pathfinderConfirmTarget){const Tt=i.pathfinderConfirmTarget;i.pathfinderConfirmTarget=null,ut==null||ut.classList.add("hidden"),i.triggerPathReveal(Tt.x,Tt.y,Tt.z,!0)}}),C&&(C.onclick=()=>{i&&(i.pathfinderConfirmTarget=null),ut==null||ut.classList.add("hidden")}),window.addEventListener("keydown",Tt=>{if(!i||i.isPaused||document.getElementById("victory-screen")&&!document.getElementById("victory-screen").classList.contains("hidden")||document.getElementById("game-over-screen")&&!document.getElementById("game-over-screen").classList.contains("hidden")||document.getElementById("pathfinder-confirm-modal")&&!document.getElementById("pathfinder-confirm-modal").classList.contains("hidden")){const P=Tt.key.toLowerCase(),x=document.activeElement;if(x&&x.type==="range"&&(P==="arrowleft"||P==="arrowright")){const pt=parseInt(x.step||"1"),rt=parseInt(x.min||"3"),ot=parseInt(x.max||"15");let _t=parseInt(x.value);P==="arrowleft"?_t=Math.max(rt,_t-pt):_t=Math.min(ot,_t+pt),x.value=String(_t),typeof x.oninput=="function"&&x.oninput(new Event("input")),Tt.preventDefault();return}P==="arrowdown"||P==="arrowright"?(c(1),Tt.preventDefault()):(P==="arrowup"||P==="arrowleft")&&(c(-1),Tt.preventDefault())}});let it={x:0,y:0},Mt=[];function ft(){var P,x;const Tt=navigator.getGamepads?navigator.getGamepads():[],mt=Tt[0]||Tt.find(j=>j!==null);if(mt&&(!i||i.isPaused||document.getElementById("victory-screen")&&!document.getElementById("victory-screen").classList.contains("hidden")||document.getElementById("game-over-screen")&&!document.getElementById("game-over-screen").classList.contains("hidden")||document.getElementById("pathfinder-confirm-modal")&&!document.getElementById("pathfinder-confirm-modal").classList.contains("hidden"))){const rt=mt.axes[0],ot=mt.axes[1],_t=ot>.5||mt.buttons[13]&&mt.buttons[13].pressed,ct=ot<-.5||mt.buttons[12]&&mt.buttons[12].pressed,yt=rt>.5||mt.buttons[15]&&mt.buttons[15].pressed,xt=rt<-.5||mt.buttons[14]&&mt.buttons[14].pressed,At=((P=mt.buttons[0])==null?void 0:P.pressed)||((x=mt.buttons[2])==null?void 0:x.pressed),st=_t&&it.y<=.5,zt=ct&&it.y>=-.5,Dt=yt&&it.x<=.5,It=xt&&it.x>=-.5;it={x:rt,y:ot};const Ct=document.activeElement;if(Ct&&Ct.type==="range"){if(It||Dt){const I=parseInt(Ct.step||"1"),dt=parseInt(Ct.min||"3"),bt=parseInt(Ct.max||"15");let St=parseInt(Ct.value);It?St=Math.max(dt,St-I):St=Math.min(bt,St+I),Ct.value=String(St),typeof Ct.oninput=="function"&&Ct.oninput(new Event("input"))}st?c(1):zt&&c(-1)}else st||Dt?c(1):(zt||It)&&c(-1);if(At&&!Mt[0]&&!Mt[2]){const I=document.activeElement;I&&typeof I.click=="function"&&I.click()}Mt=mt.buttons.map(I=>I.pressed)}requestAnimationFrame(ft)}ft()}),[n,f,h=>f(h)]}class _m extends kl{constructor(t){super(),Bl(this,t,ym,vm,Sl,{})}}new _m({target:document.getElementById("app")});
