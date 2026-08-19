var El=Object.defineProperty;var Ml=(s,t,e)=>t in s?El(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var O=(s,t,e)=>Ml(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();function wn(){}function wr(s){return s()}function Wa(){return Object.create(null)}function ys(s){s.forEach(wr)}function Rr(s){return typeof s=="function"}function Sl(s,t){return s!=s?t==t:s!==t||s&&typeof s=="object"||typeof s=="function"}function xl(s){return Object.keys(s).length===0}function Ye(s,t){s.appendChild(t)}function ue(s,t,e){s.insertBefore(t,e||null)}function ce(s){s.parentNode&&s.parentNode.removeChild(s)}function bl(s,t){for(let e=0;e<s.length;e+=1)s[e]&&s[e].d(t)}function _e(s){return document.createElement(s)}function Lr(s){return document.createTextNode(s)}function Ne(){return Lr(" ")}function Al(s,t,e,i){return s.addEventListener(t,e,i),()=>s.removeEventListener(t,e,i)}function ie(s,t,e){e==null?s.removeAttribute(t):s.getAttribute(t)!==e&&s.setAttribute(t,e)}function Pl(s){return Array.from(s.childNodes)}function Cl(s,t){t=""+t,s.data!==t&&(s.data=t)}let Rn;function bn(s){Rn=s}function wl(){if(!Rn)throw new Error("Function called outside component initialization");return Rn}function Rl(s){wl().$$.on_mount.push(s)}const sn=[],Ya=[];let ln=[];const Xa=[],Ll=Promise.resolve();let ha=!1;function Il(){ha||(ha=!0,Ll.then(Ir))}function da(s){ln.push(s)}const Cs=new Set;let Fi=0;function Ir(){if(Fi!==0)return;const s=Rn;do{try{for(;Fi<sn.length;){const t=sn[Fi];Fi++,bn(t),Dl(t.$$)}}catch(t){throw sn.length=0,Fi=0,t}for(bn(null),sn.length=0,Fi=0;Ya.length;)Ya.pop()();for(let t=0;t<ln.length;t+=1){const e=ln[t];Cs.has(e)||(Cs.add(e),e())}ln.length=0}while(sn.length);for(;Xa.length;)Xa.pop()();ha=!1,Cs.clear(),bn(s)}function Dl(s){if(s.fragment!==null){s.update(),ys(s.before_update);const t=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,t),s.after_update.forEach(da)}}function Ol(s){const t=[],e=[];ln.forEach(i=>s.indexOf(i)===-1?t.push(i):e.push(i)),e.forEach(i=>i()),ln=t}const Nl=new Set;function zl(s,t){s&&s.i&&(Nl.delete(s),s.i(t))}function $a(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function Ul(s,t,e){const{fragment:i,after_update:n}=s.$$;i&&i.m(t,e),da(()=>{const a=s.$$.on_mount.map(wr).filter(Rr);s.$$.on_destroy?s.$$.on_destroy.push(...a):ys(a),s.$$.on_mount=[]}),n.forEach(da)}function Fl(s,t){const e=s.$$;e.fragment!==null&&(Ol(e.after_update),ys(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function Gl(s,t){s.$$.dirty[0]===-1&&(sn.push(s),Il(),s.$$.dirty.fill(0)),s.$$.dirty[t/31|0]|=1<<t%31}function Bl(s,t,e,i,n,a,r=null,o=[-1]){const l=Rn;bn(s);const c=s.$$={fragment:null,ctx:[],props:a,update:wn,not_equal:n,bound:Wa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:Wa(),dirty:o,skip_bound:!1,root:t.target||l.$$.root};r&&r(c.root);let u=!1;if(c.ctx=e?e(s,t.props||{},(f,p,...m)=>{const T=m.length?m[0]:p;return c.ctx&&n(c.ctx[f],c.ctx[f]=T)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](T),u&&Gl(s,f)),p}):[],c.update(),u=!0,ys(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){const f=Pl(t.target);c.fragment&&c.fragment.l(f),f.forEach(ce)}else c.fragment&&c.fragment.c();t.intro&&zl(s.$$.fragment),Ul(s,t.target,t.anchor),Ir()}bn(l)}class kl{constructor(){O(this,"$$");O(this,"$$set")}$destroy(){Fl(this,1),this.$destroy=wn}$on(t,e){if(!Rr(e))return wn;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(e),()=>{const n=i.indexOf(e);n!==-1&&i.splice(n,1)}}$set(t){this.$$set&&!xl(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Hl="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Hl);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ba="160",Gi={ROTATE:0,DOLLY:1,PAN:2},Bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vl=0,ja=1,Wl=2,Dr=1,Yl=2,ai=3,Ti=0,Le=1,oi=2,vi=0,cn=1,Ka=2,qa=3,Za=4,Xl=5,Ci=100,$l=101,jl=102,Ja=103,Qa=104,Kl=200,ql=201,Zl=202,Jl=203,ua=204,fa=205,Ql=206,tc=207,ec=208,ic=209,nc=210,sc=211,ac=212,oc=213,rc=214,lc=0,cc=1,hc=2,ds=3,dc=4,uc=5,fc=6,pc=7,Aa=0,mc=1,gc=2,yi=0,vc=1,yc=2,_c=3,Tc=4,Ec=5,Mc=6,Or=300,dn=301,un=302,pa=303,ma=304,_s=306,ga=1e3,$e=1001,va=1002,Ce=1003,to=1004,ws=1005,Ge=1006,Sc=1007,Ln=1008,_i=1009,xc=1010,bc=1011,Pa=1012,Nr=1013,mi=1014,gi=1015,In=1016,zr=1017,Ur=1018,Ri=1020,Ac=1021,je=1023,Pc=1024,Cc=1025,Li=1026,fn=1027,wc=1028,Fr=1029,Rc=1030,Gr=1031,Br=1033,Rs=33776,Ls=33777,Is=33778,Ds=33779,eo=35840,io=35841,no=35842,so=35843,kr=36196,ao=37492,oo=37496,ro=37808,lo=37809,co=37810,ho=37811,uo=37812,fo=37813,po=37814,mo=37815,go=37816,vo=37817,yo=37818,_o=37819,To=37820,Eo=37821,Os=36492,Mo=36494,So=36495,Lc=36283,xo=36284,bo=36285,Ao=36286,Hr=3e3,Ii=3001,Ic=3200,Dc=3201,Vr=0,Oc=1,ke="",Te="srgb",li="srgb-linear",Ca="display-p3",Ts="display-p3-linear",us="linear",ne="srgb",fs="rec709",ps="p3",ki=7680,Po=519,Nc=512,zc=513,Uc=514,Wr=515,Fc=516,Gc=517,Bc=518,kc=519,Co=35044,wo="300 es",ya=1035,ri=2e3,ms=2001;class Ui{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const a=n.indexOf(e);a!==-1&&n.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let a=0,r=n.length;a<r;a++)n[a].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cs=Math.PI/180,_a=180/Math.PI;function Dn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Me[s&255]+Me[s>>8&255]+Me[s>>16&255]+Me[s>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]).toLowerCase()}function we(s,t,e){return Math.max(t,Math.min(e,s))}function Hc(s,t){return(s%t+t)%t}function Ns(s,t,e){return(1-e)*s+e*t}function Ro(s){return(s&s-1)===0&&s!==0}function Ta(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Vc={DEG2RAD:cs};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*n+t.x,this.y=a*n+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,i,n,a,r,o,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,r,o,l,c)}set(t,e,i,n,a,r,o,l,c){const u=this.elements;return u[0]=t,u[1]=n,u[2]=o,u[3]=e,u[4]=a,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],p=i[2],m=i[5],T=i[8],y=n[0],h=n[3],d=n[6],_=n[1],g=n[4],v=n[7],E=n[2],x=n[5],S=n[8];return a[0]=r*y+o*_+l*E,a[3]=r*h+o*g+l*x,a[6]=r*d+o*v+l*S,a[1]=c*y+u*_+f*E,a[4]=c*h+u*g+f*x,a[7]=c*d+u*v+f*S,a[2]=p*y+m*_+T*E,a[5]=p*h+m*g+T*x,a[8]=p*d+m*v+T*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*r*u-e*o*c-i*a*u+i*o*l+n*a*c-n*r*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*r-o*c,p=o*l-u*a,m=c*a-r*l,T=e*f+i*p+n*m;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/T;return t[0]=f*y,t[1]=(n*c-u*i)*y,t[2]=(o*i-n*r)*y,t[3]=p*y,t[4]=(u*e-n*l)*y,t[5]=(n*a-o*e)*y,t[6]=m*y,t[7]=(i*l-c*e)*y,t[8]=(r*e-i*a)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-n*c,n*l,-n*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(zs.makeScale(t,e)),this}rotate(t){return this.premultiply(zs.makeRotation(-t)),this}translate(t,e){return this.premultiply(zs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zs=new qt;function Yr(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function gs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wc(){const s=gs("canvas");return s.style.display="block",s}const Lo={};function An(s){s in Lo||(Lo[s]=!0,console.warn(s))}const Io=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Do=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fn={[li]:{transfer:us,primaries:fs,toReference:s=>s,fromReference:s=>s},[Te]:{transfer:ne,primaries:fs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ts]:{transfer:us,primaries:ps,toReference:s=>s.applyMatrix3(Do),fromReference:s=>s.applyMatrix3(Io)},[Ca]:{transfer:ne,primaries:ps,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Do),fromReference:s=>s.applyMatrix3(Io).convertLinearToSRGB()}},Yc=new Set([li,Ts]),te={enabled:!0,_workingColorSpace:li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Yc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=Fn[t].toReference,n=Fn[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Fn[s].primaries},getTransfer:function(s){return s===ke?us:Fn[s].transfer}};function hn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Hi;class Xr{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hi===void 0&&(Hi=gs("canvas")),Hi.width=t.width,Hi.height=t.height;const i=Hi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),a=n.data;for(let r=0;r<a.length;r++)a[r]=hn(a[r]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(hn(e[i]/255)*255):e[i]=hn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xc=0;class $r{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Dn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?a.push(Fs(n[r].image)):a.push(Fs(n[r]))}else a=Fs(n);i.url=a}return e||(t.images[this.uuid]=i),i}}function Fs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Xr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $c=0;class ze extends Ui{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,i=$e,n=$e,a=Ge,r=Ln,o=je,l=_i,c=ze.DEFAULT_ANISOTROPY,u=ke){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=Dn(),this.name="",this.source=new $r(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(An("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ii?Te:ke),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Or)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ga:t.x=t.x-Math.floor(t.x);break;case $e:t.x=t.x<0?0:1;break;case va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ga:t.y=t.y-Math.floor(t.y);break;case $e:t.y=t.y<0?0:1;break;case va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return An("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Te?Ii:Hr}set encoding(t){An("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ii?Te:ke}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Or;ze.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,i=0,n=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n+r[12]*a,this.y=r[1]*e+r[5]*i+r[9]*n+r[13]*a,this.z=r[2]*e+r[6]*i+r[10]*n+r[14]*a,this.w=r[3]*e+r[7]*i+r[11]*n+r[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,a;const l=t.elements,c=l[0],u=l[4],f=l[8],p=l[1],m=l[5],T=l[9],y=l[2],h=l[6],d=l[10];if(Math.abs(u-p)<.01&&Math.abs(f-y)<.01&&Math.abs(T-h)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+y)<.1&&Math.abs(T+h)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(c+1)/2,v=(m+1)/2,E=(d+1)/2,x=(u+p)/4,S=(f+y)/4,N=(T+h)/4;return g>v&&g>E?g<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(g),n=x/i,a=S/i):v>E?v<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(v),i=x/n,a=N/n):E<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(E),i=S/a,n=N/a),this.set(i,n,a,e),this}let _=Math.sqrt((h-T)*(h-T)+(f-y)*(f-y)+(p-u)*(p-u));return Math.abs(_)<.001&&(_=1),this.x=(h-T)/_,this.y=(f-y)/_,this.z=(p-u)/_,this.w=Math.acos((c+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jc extends Ui{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const n={width:t,height:e,depth:1};i.encoding!==void 0&&(An("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ii?Te:ke),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ze(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $r(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends jc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class jr extends ze{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kc extends ze{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,a,r,o){let l=i[n+0],c=i[n+1],u=i[n+2],f=i[n+3];const p=a[r+0],m=a[r+1],T=a[r+2],y=a[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=T,t[e+3]=y;return}if(f!==y||l!==p||c!==m||u!==T){let h=1-o;const d=l*p+c*m+u*T+f*y,_=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const E=Math.sqrt(g),x=Math.atan2(E,d*_);h=Math.sin(h*x)/E,o=Math.sin(o*x)/E}const v=o*_;if(l=l*h+p*v,c=c*h+m*v,u=u*h+T*v,f=f*h+y*v,h===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,n,a,r){const o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],f=a[r],p=a[r+1],m=a[r+2],T=a[r+3];return t[e]=o*T+u*f+l*m-c*p,t[e+1]=l*T+u*p+c*f-o*m,t[e+2]=c*T+u*m+o*p-l*f,t[e+3]=u*T-o*f-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),f=o(a/2),p=l(i/2),m=l(n/2),T=l(a/2);switch(r){case"XYZ":this._x=p*u*f+c*m*T,this._y=c*m*f-p*u*T,this._z=c*u*T+p*m*f,this._w=c*u*f-p*m*T;break;case"YXZ":this._x=p*u*f+c*m*T,this._y=c*m*f-p*u*T,this._z=c*u*T-p*m*f,this._w=c*u*f+p*m*T;break;case"ZXY":this._x=p*u*f-c*m*T,this._y=c*m*f+p*u*T,this._z=c*u*T+p*m*f,this._w=c*u*f-p*m*T;break;case"ZYX":this._x=p*u*f-c*m*T,this._y=c*m*f+p*u*T,this._z=c*u*T-p*m*f,this._w=c*u*f+p*m*T;break;case"YZX":this._x=p*u*f+c*m*T,this._y=c*m*f+p*u*T,this._z=c*u*T-p*m*f,this._w=c*u*f-p*m*T;break;case"XZY":this._x=p*u*f-c*m*T,this._y=c*m*f-p*u*T,this._z=c*u*T+p*m*f,this._w=c*u*f+p*m*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],p=i+o+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(a-c)*m,this._z=(r-n)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(n+r)/m,this._z=(a+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(a-c)/m,this._x=(n+r)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(r-n)/m,this._x=(a+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+r*o+n*c-a*l,this._y=n*u+r*l+a*o-i*c,this._z=a*u+r*c+i*l-n*o,this._w=r*u-i*o-n*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,a=this._z,r=this._w;let o=r*t._w+i*t._x+n*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=n,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*r+e*this._w,this._x=m*i+e*this._x,this._y=m*n+e*this._y,this._z=m*a+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=r*f+this._w*p,this._x=i*f+this._x*p,this._y=n*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(a),i*Math.cos(a),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,e=0,i=0){tt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*n,this.y=a[1]*e+a[4]*i+a[7]*n,this.z=a[2]*e+a[5]*i+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=t.elements,r=1/(a[3]*e+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*n+a[12])*r,this.y=(a[1]*e+a[5]*i+a[9]*n+a[13])*r,this.z=(a[2]*e+a[6]*i+a[10]*n+a[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*n-o*i),u=2*(o*e-a*n),f=2*(a*i-r*e);return this.x=e+l*c+r*f-o*u,this.y=i+l*u+o*c-a*f,this.z=n+l*f+a*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n,this.y=a[1]*e+a[5]*i+a[9]*n,this.z=a[2]*e+a[6]*i+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=n*l-a*o,this.y=a*r-i*l,this.z=i*o-n*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Gs.copy(this).projectOnVector(t),this.sub(Gs)}reflect(t){return this.sub(Gs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gs=new tt,Oo=new Ni;class On{constructor(t=new tt(1/0,1/0,1/0),e=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,He):He.fromBufferAttribute(a,r),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gn.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gn.copy(i.boundingBox)),Gn.applyMatrix4(t.matrixWorld),this.union(Gn)}const n=t.children;for(let a=0,r=n.length;a<r;a++)this.expandByObject(n[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_n),Bn.subVectors(this.max,_n),Vi.subVectors(t.a,_n),Wi.subVectors(t.b,_n),Yi.subVectors(t.c,_n),ci.subVectors(Wi,Vi),hi.subVectors(Yi,Wi),Si.subVectors(Vi,Yi);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Si.z,Si.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Si.z,0,-Si.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Si.y,Si.x,0];return!Bs(e,Vi,Wi,Yi,Bn)||(e=[1,0,0,0,1,0,0,0,1],!Bs(e,Vi,Wi,Yi,Bn))?!1:(kn.crossVectors(ci,hi),e=[kn.x,kn.y,kn.z],Bs(e,Vi,Wi,Yi,Bn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ti=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],He=new tt,Gn=new On,Vi=new tt,Wi=new tt,Yi=new tt,ci=new tt,hi=new tt,Si=new tt,_n=new tt,Bn=new tt,kn=new tt,xi=new tt;function Bs(s,t,e,i,n){for(let a=0,r=s.length-3;a<=r;a+=3){xi.fromArray(s,a);const o=n.x*Math.abs(xi.x)+n.y*Math.abs(xi.y)+n.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),u=i.dot(xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const qc=new On,Tn=new tt,ks=new tt;class wa{constructor(t=new tt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):qc.setFromPoints(t).getCenter(i);let n=0;for(let a=0,r=t.length;a<r;a++)n=Math.max(n,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tn.subVectors(t,this.center);const e=Tn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Tn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ks.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tn.copy(t.center).add(ks)),this.expandByPoint(Tn.copy(t.center).sub(ks))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new tt,Hs=new tt,Hn=new tt,di=new tt,Vs=new tt,Vn=new tt,Ws=new tt;class Ra{constructor(t=new tt,e=new tt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Hs.copy(t).add(e).multiplyScalar(.5),Hn.copy(e).sub(t).normalize(),di.copy(this.origin).sub(Hs);const a=t.distanceTo(e)*.5,r=-this.direction.dot(Hn),o=di.dot(this.direction),l=-di.dot(Hn),c=di.lengthSq(),u=Math.abs(1-r*r);let f,p,m,T;if(u>0)if(f=r*l-o,p=r*o-l,T=a*u,f>=0)if(p>=-T)if(p<=T){const y=1/u;f*=y,p*=y,m=f*(f+r*p+2*o)+p*(r*f+p+2*l)+c}else p=a,f=Math.max(0,-(r*p+o)),m=-f*f+p*(p+2*l)+c;else p=-a,f=Math.max(0,-(r*p+o)),m=-f*f+p*(p+2*l)+c;else p<=-T?(f=Math.max(0,-(-r*a+o)),p=f>0?-a:Math.min(Math.max(-a,-l),a),m=-f*f+p*(p+2*l)+c):p<=T?(f=0,p=Math.min(Math.max(-a,-l),a),m=p*(p+2*l)+c):(f=Math.max(0,-(r*a+o)),p=f>0?a:Math.min(Math.max(-a,-l),a),m=-f*f+p*(p+2*l)+c);else p=r>0?-a:a,f=Math.max(0,-(r*p+o)),m=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(Hs).addScaledVector(Hn,p),m}intersectSphere(t,e){ei.subVectors(t.center,this.origin);const i=ei.dot(this.direction),n=ei.dot(ei)-i*i,a=t.radius*t.radius;if(n>a)return null;const r=Math.sqrt(a-n),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,a,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(t.min.x-p.x)*c,n=(t.max.x-p.x)*c):(i=(t.max.x-p.x)*c,n=(t.min.x-p.x)*c),u>=0?(a=(t.min.y-p.y)*u,r=(t.max.y-p.y)*u):(a=(t.max.y-p.y)*u,r=(t.min.y-p.y)*u),i>r||a>n||((a>i||isNaN(i))&&(i=a),(r<n||isNaN(n))&&(n=r),f>=0?(o=(t.min.z-p.z)*f,l=(t.max.z-p.z)*f):(o=(t.max.z-p.z)*f,l=(t.min.z-p.z)*f),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,i,n,a){Vs.subVectors(e,t),Vn.subVectors(i,t),Ws.crossVectors(Vs,Vn);let r=this.direction.dot(Ws),o;if(r>0){if(n)return null;o=1}else if(r<0)o=-1,r=-r;else return null;di.subVectors(this.origin,t);const l=o*this.direction.dot(Vn.crossVectors(di,Vn));if(l<0)return null;const c=o*this.direction.dot(Vs.cross(di));if(c<0||l+c>r)return null;const u=-o*di.dot(Ws);return u<0?null:this.at(u/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,i,n,a,r,o,l,c,u,f,p,m,T,y,h){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,r,o,l,c,u,f,p,m,T,y,h)}set(t,e,i,n,a,r,o,l,c,u,f,p,m,T,y,h){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=n,d[1]=a,d[5]=r,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=p,d[3]=m,d[7]=T,d[11]=y,d[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Xi.setFromMatrixColumn(t,0).length(),a=1/Xi.setFromMatrixColumn(t,1).length(),r=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(a),f=Math.sin(a);if(t.order==="XYZ"){const p=r*u,m=r*f,T=o*u,y=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=m+T*c,e[5]=p-y*c,e[9]=-o*l,e[2]=y-p*c,e[6]=T+m*c,e[10]=r*l}else if(t.order==="YXZ"){const p=l*u,m=l*f,T=c*u,y=c*f;e[0]=p+y*o,e[4]=T*o-m,e[8]=r*c,e[1]=r*f,e[5]=r*u,e[9]=-o,e[2]=m*o-T,e[6]=y+p*o,e[10]=r*l}else if(t.order==="ZXY"){const p=l*u,m=l*f,T=c*u,y=c*f;e[0]=p-y*o,e[4]=-r*f,e[8]=T+m*o,e[1]=m+T*o,e[5]=r*u,e[9]=y-p*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const p=r*u,m=r*f,T=o*u,y=o*f;e[0]=l*u,e[4]=T*c-m,e[8]=p*c+y,e[1]=l*f,e[5]=y*c+p,e[9]=m*c-T,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const p=r*l,m=r*c,T=o*l,y=o*c;e[0]=l*u,e[4]=y-p*f,e[8]=T*f+m,e[1]=f,e[5]=r*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*f+T,e[10]=p-y*f}else if(t.order==="XZY"){const p=r*l,m=r*c,T=o*l,y=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=p*f+y,e[5]=r*u,e[9]=m*f-T,e[2]=T*f-m,e[6]=o*u,e[10]=y*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zc,t,Jc)}lookAt(t,e,i){const n=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),ui.crossVectors(i,De),ui.lengthSq()===0&&(Math.abs(i.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),ui.crossVectors(i,De)),ui.normalize(),Wn.crossVectors(De,ui),n[0]=ui.x,n[4]=Wn.x,n[8]=De.x,n[1]=ui.y,n[5]=Wn.y,n[9]=De.y,n[2]=ui.z,n[6]=Wn.z,n[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],p=i[9],m=i[13],T=i[2],y=i[6],h=i[10],d=i[14],_=i[3],g=i[7],v=i[11],E=i[15],x=n[0],S=n[4],N=n[8],M=n[12],A=n[1],G=n[5],z=n[9],q=n[13],R=n[2],B=n[6],$=n[10],V=n[14],H=n[3],J=n[7],k=n[11],Y=n[15];return a[0]=r*x+o*A+l*R+c*H,a[4]=r*S+o*G+l*B+c*J,a[8]=r*N+o*z+l*$+c*k,a[12]=r*M+o*q+l*V+c*Y,a[1]=u*x+f*A+p*R+m*H,a[5]=u*S+f*G+p*B+m*J,a[9]=u*N+f*z+p*$+m*k,a[13]=u*M+f*q+p*V+m*Y,a[2]=T*x+y*A+h*R+d*H,a[6]=T*S+y*G+h*B+d*J,a[10]=T*N+y*z+h*$+d*k,a[14]=T*M+y*q+h*V+d*Y,a[3]=_*x+g*A+v*R+E*H,a[7]=_*S+g*G+v*B+E*J,a[11]=_*N+g*z+v*$+E*k,a[15]=_*M+g*q+v*V+E*Y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],p=t[10],m=t[14],T=t[3],y=t[7],h=t[11],d=t[15];return T*(+a*l*f-n*c*f-a*o*p+i*c*p+n*o*m-i*l*m)+y*(+e*l*m-e*c*p+a*r*p-n*r*m+n*c*u-a*l*u)+h*(+e*c*f-e*o*m-a*r*f+i*r*m+a*o*u-i*c*u)+d*(-n*o*u-e*l*f+e*o*p+n*r*f-i*r*p+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],p=t[10],m=t[11],T=t[12],y=t[13],h=t[14],d=t[15],_=f*h*c-y*p*c+y*l*m-o*h*m-f*l*d+o*p*d,g=T*p*c-u*h*c-T*l*m+r*h*m+u*l*d-r*p*d,v=u*y*c-T*f*c+T*o*m-r*y*m-u*o*d+r*f*d,E=T*f*l-u*y*l-T*o*p+r*y*p+u*o*h-r*f*h,x=e*_+i*g+n*v+a*E;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/x;return t[0]=_*S,t[1]=(y*p*a-f*h*a-y*n*m+i*h*m+f*n*d-i*p*d)*S,t[2]=(o*h*a-y*l*a+y*n*c-i*h*c-o*n*d+i*l*d)*S,t[3]=(f*l*a-o*p*a-f*n*c+i*p*c+o*n*m-i*l*m)*S,t[4]=g*S,t[5]=(u*h*a-T*p*a+T*n*m-e*h*m-u*n*d+e*p*d)*S,t[6]=(T*l*a-r*h*a-T*n*c+e*h*c+r*n*d-e*l*d)*S,t[7]=(r*p*a-u*l*a+u*n*c-e*p*c-r*n*m+e*l*m)*S,t[8]=v*S,t[9]=(T*f*a-u*y*a-T*i*m+e*y*m+u*i*d-e*f*d)*S,t[10]=(r*y*a-T*o*a+T*i*c-e*y*c-r*i*d+e*o*d)*S,t[11]=(u*o*a-r*f*a-u*i*c+e*f*c+r*i*m-e*o*m)*S,t[12]=E*S,t[13]=(u*y*n-T*f*n+T*i*p-e*y*p-u*i*h+e*f*h)*S,t[14]=(T*o*n-r*y*n-T*i*l+e*y*l+r*i*h-e*o*h)*S,t[15]=(r*f*n-u*o*n+u*i*l-e*f*l-r*i*p+e*o*p)*S,this}scale(t){const e=this.elements,i=t.x,n=t.y,a=t.z;return e[0]*=i,e[4]*=n,e[8]*=a,e[1]*=i,e[5]*=n,e[9]*=a,e[2]*=i,e[6]*=n,e[10]*=a,e[3]*=i,e[7]*=n,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,u=a*o;return this.set(c*r+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*r,0,c*l-n*o,u*l+n*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,a,r){return this.set(1,i,a,0,t,1,r,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,u=r+r,f=o+o,p=a*c,m=a*u,T=a*f,y=r*u,h=r*f,d=o*f,_=l*c,g=l*u,v=l*f,E=i.x,x=i.y,S=i.z;return n[0]=(1-(y+d))*E,n[1]=(m+v)*E,n[2]=(T-g)*E,n[3]=0,n[4]=(m-v)*x,n[5]=(1-(p+d))*x,n[6]=(h+_)*x,n[7]=0,n[8]=(T+g)*S,n[9]=(h-_)*S,n[10]=(1-(p+y))*S,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let a=Xi.set(n[0],n[1],n[2]).length();const r=Xi.set(n[4],n[5],n[6]).length(),o=Xi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),t.x=n[12],t.y=n[13],t.z=n[14],Ve.copy(this);const c=1/a,u=1/r,f=1/o;return Ve.elements[0]*=c,Ve.elements[1]*=c,Ve.elements[2]*=c,Ve.elements[4]*=u,Ve.elements[5]*=u,Ve.elements[6]*=u,Ve.elements[8]*=f,Ve.elements[9]*=f,Ve.elements[10]*=f,e.setFromRotationMatrix(Ve),i.x=a,i.y=r,i.z=o,this}makePerspective(t,e,i,n,a,r,o=ri){const l=this.elements,c=2*a/(e-t),u=2*a/(i-n),f=(e+t)/(e-t),p=(i+n)/(i-n);let m,T;if(o===ri)m=-(r+a)/(r-a),T=-2*r*a/(r-a);else if(o===ms)m=-r/(r-a),T=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=T,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,a,r,o=ri){const l=this.elements,c=1/(e-t),u=1/(i-n),f=1/(r-a),p=(e+t)*c,m=(i+n)*u;let T,y;if(o===ri)T=(r+a)*f,y=-2*f;else if(o===ms)T=a*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-T,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Xi=new tt,Ve=new fe,Zc=new tt(0,0,0),Jc=new tt(1,1,1),ui=new tt,Wn=new tt,De=new tt,No=new fe,zo=new Ni;class Es{constructor(t=0,e=0,i=0,n=Es.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,a=n[0],r=n[4],o=n[8],l=n[1],c=n[5],u=n[9],f=n[2],p=n[6],m=n[10];switch(e){case"XYZ":this._y=Math.asin(we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(we(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-we(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-we(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return No.makeRotationFromQuaternion(t),this.setFromRotationMatrix(No,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zo.setFromEuler(this),this.setFromQuaternion(zo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Es.DEFAULT_ORDER="XYZ";class La{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qc=0;const Uo=new tt,$i=new Ni,ii=new fe,Yn=new tt,En=new tt,th=new tt,eh=new Ni,Fo=new tt(1,0,0),Go=new tt(0,1,0),Bo=new tt(0,0,1),ih={type:"added"},nh={type:"removed"};class be extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new tt,e=new Es,i=new Ni,n=new tt(1,1,1);function a(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new fe},normalMatrix:{value:new qt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new La,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(Fo,t)}rotateY(t){return this.rotateOnAxis(Go,t)}rotateZ(t){return this.rotateOnAxis(Bo,t)}translateOnAxis(t,e){return Uo.copy(t).applyQuaternion(this.quaternion),this.position.add(Uo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fo,t)}translateY(t){return this.translateOnAxis(Go,t)}translateZ(t){return this.translateOnAxis(Bo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Yn.copy(t):Yn.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),En.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(En,Yn,this.up):ii.lookAt(Yn,En,this.up),this.quaternion.setFromRotationMatrix(ii),n&&(ii.extractRotation(n.matrixWorld),$i.setFromRotationMatrix(ii),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ih)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(En,t,th),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(En,eh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const a=e[i];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let a=0,r=n.length;a<r;a++){const o=n[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(t.shapes,f)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));n.material=o}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),f=r(t.shapes),p=r(t.skeletons),m=r(t.animations),T=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),T.length>0&&(i.nodes=T)}return i.object=n,i;function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}be.DEFAULT_UP=new tt(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const We=new tt,ni=new tt,Ys=new tt,si=new tt,ji=new tt,Ki=new tt,ko=new tt,Xs=new tt,$s=new tt,js=new tt;let Xn=!1;class Xe{constructor(t=new tt,e=new tt,i=new tt){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),We.subVectors(t,e),n.cross(We);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,e,i,n,a){We.subVectors(n,e),ni.subVectors(i,e),Ys.subVectors(t,e);const r=We.dot(We),o=We.dot(ni),l=We.dot(Ys),c=ni.dot(ni),u=ni.dot(Ys),f=r*c-o*o;if(f===0)return a.set(0,0,0),null;const p=1/f,m=(c*l-o*u)*p,T=(r*u-o*l)*p;return a.set(1-m-T,T,m)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getUV(t,e,i,n,a,r,o,l){return Xn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xn=!0),this.getInterpolation(t,e,i,n,a,r,o,l)}static getInterpolation(t,e,i,n,a,r,o,l){return this.getBarycoord(t,e,i,n,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,si.x),l.addScaledVector(r,si.y),l.addScaledVector(o,si.z),l)}static isFrontFacing(t,e,i,n){return We.subVectors(i,e),ni.subVectors(t,e),We.cross(ni).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),We.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,a){return Xn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xn=!0),Xe.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}getInterpolation(t,e,i,n,a){return Xe.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,a=this.c;let r,o;ji.subVectors(n,i),Ki.subVectors(a,i),Xs.subVectors(t,i);const l=ji.dot(Xs),c=Ki.dot(Xs);if(l<=0&&c<=0)return e.copy(i);$s.subVectors(t,n);const u=ji.dot($s),f=Ki.dot($s);if(u>=0&&f<=u)return e.copy(n);const p=l*f-u*c;if(p<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(i).addScaledVector(ji,r);js.subVectors(t,a);const m=ji.dot(js),T=Ki.dot(js);if(T>=0&&m<=T)return e.copy(a);const y=m*c-l*T;if(y<=0&&c>=0&&T<=0)return o=c/(c-T),e.copy(i).addScaledVector(Ki,o);const h=u*T-m*f;if(h<=0&&f-u>=0&&m-T>=0)return ko.subVectors(a,n),o=(f-u)/(f-u+(m-T)),e.copy(n).addScaledVector(ko,o);const d=1/(h+y+p);return r=y*d,o=p*d,e.copy(i).addScaledVector(ji,r).addScaledVector(Ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Kr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},$n={h:0,s:0,l:0};function Ks(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=te.workingColorSpace){if(t=Hc(t,1),e=we(e,0,1),i=we(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,r=2*i-a;this.r=Ks(r,a,t+1/3),this.g=Ks(r,a,t),this.b=Ks(r,a,t-1/3)}return te.toWorkingColorSpace(this,n),this}setStyle(t,e=Te){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=n[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){const i=Kr[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hn(t.r),this.g=hn(t.g),this.b=hn(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return te.fromWorkingColorSpace(Se.copy(this),t),Math.round(we(Se.r*255,0,255))*65536+Math.round(we(Se.g*255,0,255))*256+Math.round(we(Se.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Se.copy(this),e);const i=Se.r,n=Se.g,a=Se.b,r=Math.max(i,n,a),o=Math.min(i,n,a);let l,c;const u=(o+r)/2;if(o===r)l=0,c=0;else{const f=r-o;switch(c=u<=.5?f/(r+o):f/(2-r-o),r){case i:l=(n-a)/f+(n<a?6:0);break;case n:l=(a-i)/f+2;break;case a:l=(i-n)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=Te){te.fromWorkingColorSpace(Se.copy(this),t);const e=Se.r,i=Se.g,n=Se.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL($n);const i=Ns(fi.h,$n.h,e),n=Ns(fi.s,$n.s,e),a=Ns(fi.l,$n.l,e);return this.setHSL(i,n,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*n,this.g=a[1]*e+a[4]*i+a[7]*n,this.b=a[2]*e+a[5]*i+a[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new Jt;Jt.NAMES=Kr;let sh=0;class Nn extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=cn,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=fa,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cn&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ua&&(i.blendSrc=this.blendSrc),this.blendDst!==fa&&(i.blendDst=this.blendDst),this.blendEquation!==Ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Po&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=n(t.textures),r=n(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Pn extends Nn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new tt,jn=new kt;class Ze{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Co,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)jn.fromBufferAttribute(this,e),jn.applyMatrix3(t),this.setXY(e,jn.x,jn.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=yn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Re(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),n=Re(n,this.array),a=Re(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Co&&(t.usage=this.usage),t}}class qr extends Ze{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Zr extends Ze{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ae extends Ze{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ah=0;const Fe=new fe,qs=new be,qi=new tt,Oe=new On,Mn=new On,ve=new tt;class Je extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yr(t)?Zr:qr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new qt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,i){return Fe.makeTranslation(t,e,i),this.applyMatrix4(Fe),this}scale(t,e,i){return Fe.makeScale(t,e,i),this.applyMatrix4(Fe),this}lookAt(t){return qs.lookAt(t),qs.updateMatrix(),this.applyMatrix4(qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const a=e[i];Oe.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new tt,1/0);return}if(t){const i=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];Mn.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Oe.min,Mn.min),Oe.expandByPoint(ve),ve.addVectors(Oe.max,Mn.max),Oe.expandByPoint(ve)):(Oe.expandByPoint(Mn.min),Oe.expandByPoint(Mn.max))}Oe.getCenter(i);let n=0;for(let a=0,r=t.count;a<r;a++)ve.fromBufferAttribute(t,a),n=Math.max(n,i.distanceToSquared(ve));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ve.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(t,c),ve.add(qi)),n=Math.max(n,i.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,a=e.normal.array,r=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<o;A++)c[A]=new tt,u[A]=new tt;const f=new tt,p=new tt,m=new tt,T=new kt,y=new kt,h=new kt,d=new tt,_=new tt;function g(A,G,z){f.fromArray(n,A*3),p.fromArray(n,G*3),m.fromArray(n,z*3),T.fromArray(r,A*2),y.fromArray(r,G*2),h.fromArray(r,z*2),p.sub(f),m.sub(f),y.sub(T),h.sub(T);const q=1/(y.x*h.y-h.x*y.y);isFinite(q)&&(d.copy(p).multiplyScalar(h.y).addScaledVector(m,-y.y).multiplyScalar(q),_.copy(m).multiplyScalar(y.x).addScaledVector(p,-h.x).multiplyScalar(q),c[A].add(d),c[G].add(d),c[z].add(d),u[A].add(_),u[G].add(_),u[z].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let A=0,G=v.length;A<G;++A){const z=v[A],q=z.start,R=z.count;for(let B=q,$=q+R;B<$;B+=3)g(i[B+0],i[B+1],i[B+2])}const E=new tt,x=new tt,S=new tt,N=new tt;function M(A){S.fromArray(a,A*3),N.copy(S);const G=c[A];E.copy(G),E.sub(S.multiplyScalar(S.dot(G))).normalize(),x.crossVectors(N,G);const q=x.dot(u[A])<0?-1:1;l[A*4]=E.x,l[A*4+1]=E.y,l[A*4+2]=E.z,l[A*4+3]=q}for(let A=0,G=v.length;A<G;++A){const z=v[A],q=z.start,R=z.count;for(let B=q,$=q+R;B<$;B+=3)M(i[B+0]),M(i[B+1]),M(i[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const n=new tt,a=new tt,r=new tt,o=new tt,l=new tt,c=new tt,u=new tt,f=new tt;if(t)for(let p=0,m=t.count;p<m;p+=3){const T=t.getX(p+0),y=t.getX(p+1),h=t.getX(p+2);n.fromBufferAttribute(e,T),a.fromBufferAttribute(e,y),r.fromBufferAttribute(e,h),u.subVectors(r,a),f.subVectors(n,a),u.cross(f),o.fromBufferAttribute(i,T),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,h),o.add(u),l.add(u),c.add(u),i.setXYZ(T,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)n.fromBufferAttribute(e,p+0),a.fromBufferAttribute(e,p+1),r.fromBufferAttribute(e,p+2),u.subVectors(r,a),f.subVectors(n,a),u.cross(f),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,p=new c.constructor(l.length*u);let m=0,T=0;for(let y=0,h=l.length;y<h;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*u;for(let d=0;d<u;d++)p[T++]=c[m++]}return new Ze(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,f=c.length;u<f;u++){const p=c[u],m=t(p,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,p=c.length;f<p;f++){const m=c[f];u.push(m.toJSON(t.data))}u.length>0&&(n[l]=u,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(e))}const a=t.morphAttributes;for(const c in a){const u=[],f=a[c];for(let p=0,m=f.length;p<m;p++)u.push(f[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ho=new fe,bi=new Ra,Kn=new wa,Vo=new tt,Zi=new tt,Ji=new tt,Qi=new tt,Zs=new tt,qn=new tt,Zn=new kt,Jn=new kt,Qn=new kt,Wo=new tt,Yo=new tt,Xo=new tt,ts=new tt,es=new tt;class Qt extends be{constructor(t=new Je,e=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(a&&o){qn.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],f=a[l];u!==0&&(Zs.fromBufferAttribute(f,t),r?qn.addScaledVector(Zs,u):qn.addScaledVector(Zs.sub(e),u))}e.add(qn)}return e}raycast(t,e){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kn.copy(i.boundingSphere),Kn.applyMatrix4(a),bi.copy(t.ray).recast(t.near),!(Kn.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Kn,Vo)===null||bi.origin.distanceToSquared(Vo)>(t.far-t.near)**2))&&(Ho.copy(a).invert(),bi.copy(t.ray).applyMatrix4(Ho),!(i.boundingBox!==null&&bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,i){let n;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,p=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(r))for(let T=0,y=p.length;T<y;T++){const h=p[T],d=r[h.materialIndex],_=Math.max(h.start,m.start),g=Math.min(o.count,Math.min(h.start+h.count,m.start+m.count));for(let v=_,E=g;v<E;v+=3){const x=o.getX(v),S=o.getX(v+1),N=o.getX(v+2);n=is(this,d,t,i,c,u,f,x,S,N),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=h.materialIndex,e.push(n))}}else{const T=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let h=T,d=y;h<d;h+=3){const _=o.getX(h),g=o.getX(h+1),v=o.getX(h+2);n=is(this,r,t,i,c,u,f,_,g,v),n&&(n.faceIndex=Math.floor(h/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let T=0,y=p.length;T<y;T++){const h=p[T],d=r[h.materialIndex],_=Math.max(h.start,m.start),g=Math.min(l.count,Math.min(h.start+h.count,m.start+m.count));for(let v=_,E=g;v<E;v+=3){const x=v,S=v+1,N=v+2;n=is(this,d,t,i,c,u,f,x,S,N),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=h.materialIndex,e.push(n))}}else{const T=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let h=T,d=y;h<d;h+=3){const _=h,g=h+1,v=h+2;n=is(this,r,t,i,c,u,f,_,g,v),n&&(n.faceIndex=Math.floor(h/3),e.push(n))}}}}function oh(s,t,e,i,n,a,r,o){let l;if(t.side===Le?l=i.intersectTriangle(r,a,n,!0,o):l=i.intersectTriangle(n,a,r,t.side===Ti,o),l===null)return null;es.copy(o),es.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(es);return c<e.near||c>e.far?null:{distance:c,point:es.clone(),object:s}}function is(s,t,e,i,n,a,r,o,l,c){s.getVertexPosition(o,Zi),s.getVertexPosition(l,Ji),s.getVertexPosition(c,Qi);const u=oh(s,t,e,i,Zi,Ji,Qi,ts);if(u){n&&(Zn.fromBufferAttribute(n,o),Jn.fromBufferAttribute(n,l),Qn.fromBufferAttribute(n,c),u.uv=Xe.getInterpolation(ts,Zi,Ji,Qi,Zn,Jn,Qn,new kt)),a&&(Zn.fromBufferAttribute(a,o),Jn.fromBufferAttribute(a,l),Qn.fromBufferAttribute(a,c),u.uv1=Xe.getInterpolation(ts,Zi,Ji,Qi,Zn,Jn,Qn,new kt),u.uv2=u.uv1),r&&(Wo.fromBufferAttribute(r,o),Yo.fromBufferAttribute(r,l),Xo.fromBufferAttribute(r,c),u.normal=Xe.getInterpolation(ts,Zi,Ji,Qi,Wo,Yo,Xo,new tt),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new tt,materialIndex:0};Xe.getNormal(Zi,Ji,Qi,f.normal),u.face=f}return u}class xe extends Je{constructor(t=1,e=1,i=1,n=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:a,depthSegments:r};const o=this;n=Math.floor(n),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],u=[],f=[];let p=0,m=0;T("z","y","x",-1,-1,i,e,t,r,a,0),T("z","y","x",1,-1,i,e,-t,r,a,1),T("x","z","y",1,1,t,i,e,n,r,2),T("x","z","y",1,-1,t,i,-e,n,r,3),T("x","y","z",1,-1,t,e,i,n,a,4),T("x","y","z",-1,-1,t,e,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(f,2));function T(y,h,d,_,g,v,E,x,S,N,M){const A=v/S,G=E/N,z=v/2,q=E/2,R=x/2,B=S+1,$=N+1;let V=0,H=0;const J=new tt;for(let k=0;k<$;k++){const Y=k*G-q;for(let Z=0;Z<B;Z++){const F=Z*A-z;J[y]=F*_,J[h]=Y*g,J[d]=R,c.push(J.x,J.y,J.z),J[y]=0,J[h]=0,J[d]=x>0?1:-1,u.push(J.x,J.y,J.z),f.push(Z/S),f.push(1-k/N),V+=1}}for(let k=0;k<N;k++)for(let Y=0;Y<S;Y++){const Z=p+Y+B*k,F=p+Y+B*(k+1),Q=p+(Y+1)+B*(k+1),st=p+(Y+1)+B*k;l.push(Z,F,st),l.push(F,Q,st),H+=6}o.addGroup(m,H,M),m+=H,p+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function pn(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Pe(s){const t={};for(let e=0;e<s.length;e++){const i=pn(s[e]);for(const n in i)t[n]=i[n]}return t}function rh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Jr(s){return s.getRenderTarget()===null?s.outputColorSpace:te.workingColorSpace}const lh={clone:pn,merge:Pe};var ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends Nn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ch,this.fragmentShader=hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pn(t.uniforms),this.uniformsGroups=rh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?e.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[n]={type:"m4",value:r.toArray()}:e.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Qr extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Be extends Qr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _a*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(cs*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,a=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*n/l,e-=r.offsetY*i/c,n*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const tn=-90,en=1;class dh extends be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Be(tn,en,t,e);n.layers=this.layers,this.add(n);const a=new Be(tn,en,t,e);a.layers=this.layers,this.add(a);const r=new Be(tn,en,t,e);r.layers=this.layers,this.add(r);const o=new Be(tn,en,t,e);o.layers=this.layers,this.add(o);const l=new Be(tn,en,t,e);l.layers=this.layers,this.add(l);const c=new Be(tn,en,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===ri)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ms)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,u]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,a),t.setRenderTarget(i,1,n),t.render(e,r),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,n),t.render(e,u),t.setRenderTarget(f,p,m),t.xr.enabled=T,i.texture.needsPMREMUpdate=!0}}class tl extends ze{constructor(t,e,i,n,a,r,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:dn,super(t,e,i,n,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uh extends Oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(An("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ii?Te:ke),this.texture=new tl(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new xe(5,5,5),a=new zi({name:"CubemapFromEquirect",uniforms:pn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Le,blending:vi});a.uniforms.tEquirect.value=e;const r=new Qt(n,a),o=e.minFilter;return e.minFilter===Ln&&(e.minFilter=Ge),new dh(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,n){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,n);t.setRenderTarget(a)}}const Js=new tt,fh=new tt,ph=new qt;class pi{constructor(t=new tt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Js.subVectors(i,e).cross(fh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Js),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ph.getNormalMatrix(t),n=this.coplanarPoint(Js).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new wa,ns=new tt;class Ia{constructor(t=new pi,e=new pi,i=new pi,n=new pi,a=new pi,r=new pi){this.planes=[t,e,i,n,a,r]}set(t,e,i,n,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ri){const i=this.planes,n=t.elements,a=n[0],r=n[1],o=n[2],l=n[3],c=n[4],u=n[5],f=n[6],p=n[7],m=n[8],T=n[9],y=n[10],h=n[11],d=n[12],_=n[13],g=n[14],v=n[15];if(i[0].setComponents(l-a,p-c,h-m,v-d).normalize(),i[1].setComponents(l+a,p+c,h+m,v+d).normalize(),i[2].setComponents(l+r,p+u,h+T,v+_).normalize(),i[3].setComponents(l-r,p-u,h-T,v-_).normalize(),i[4].setComponents(l-o,p-f,h-y,v-g).normalize(),e===ri)i[5].setComponents(l+o,p+f,h+y,v+g).normalize();else if(e===ms)i[5].setComponents(o,f,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(ns.x=n.normal.x>0?t.max.x:t.min.x,ns.y=n.normal.y>0?t.max.y:t.min.y,ns.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(ns)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function el(){let s=null,t=!1,e=null,i=null;function n(a,r){e(a,r),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function mh(s,t){const e=t.isWebGL2,i=new WeakMap;function n(c,u){const f=c.array,p=c.usage,m=f.byteLength,T=s.createBuffer();s.bindBuffer(u,T),s.bufferData(u,f,p),c.onUploadCallback();let y;if(f instanceof Float32Array)y=s.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)y=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=s.SHORT;else if(f instanceof Uint32Array)y=s.UNSIGNED_INT;else if(f instanceof Int32Array)y=s.INT;else if(f instanceof Int8Array)y=s.BYTE;else if(f instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:T,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function a(c,u,f){const p=u.array,m=u._updateRange,T=u.updateRanges;if(s.bindBuffer(f,c),m.count===-1&&T.length===0&&s.bufferSubData(f,0,p),T.length!==0){for(let y=0,h=T.length;y<h;y++){const d=T[y];e?s.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):s.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):s.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(s.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,n(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(f.buffer,c,u),f.version=c.version}}return{get:r,remove:o,update:l}}class Da extends Je{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const a=t/2,r=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,f=t/o,p=e/l,m=[],T=[],y=[],h=[];for(let d=0;d<u;d++){const _=d*p-r;for(let g=0;g<c;g++){const v=g*f-a;T.push(v,-_,0),y.push(0,0,1),h.push(g/o),h.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<o;_++){const g=_+c*d,v=_+c*(d+1),E=_+1+c*(d+1),x=_+1+c*d;m.push(g,v,x),m.push(v,E,x)}this.setIndex(m),this.setAttribute("position",new Ae(T,3)),this.setAttribute("normal",new Ae(y,3)),this.setAttribute("uv",new Ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Da(t.width,t.height,t.widthSegments,t.heightSegments)}}var gh=`#ifdef USE_ALPHAHASH
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
}`,jh=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef DITHERING
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
}`,ju=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:gh,alphahash_pars_fragment:vh,alphamap_fragment:yh,alphamap_pars_fragment:_h,alphatest_fragment:Th,alphatest_pars_fragment:Eh,aomap_fragment:Mh,aomap_pars_fragment:Sh,batching_pars_vertex:xh,batching_vertex:bh,begin_vertex:Ah,beginnormal_vertex:Ph,bsdfs:Ch,iridescence_fragment:wh,bumpmap_pars_fragment:Rh,clipping_planes_fragment:Lh,clipping_planes_pars_fragment:Ih,clipping_planes_pars_vertex:Dh,clipping_planes_vertex:Oh,color_fragment:Nh,color_pars_fragment:zh,color_pars_vertex:Uh,color_vertex:Fh,common:Gh,cube_uv_reflection_fragment:Bh,defaultnormal_vertex:kh,displacementmap_pars_vertex:Hh,displacementmap_vertex:Vh,emissivemap_fragment:Wh,emissivemap_pars_fragment:Yh,colorspace_fragment:Xh,colorspace_pars_fragment:$h,envmap_fragment:jh,envmap_common_pars_fragment:Kh,envmap_pars_fragment:qh,envmap_pars_vertex:Zh,envmap_physical_pars_fragment:cd,envmap_vertex:Jh,fog_vertex:Qh,fog_pars_vertex:td,fog_fragment:ed,fog_pars_fragment:id,gradientmap_pars_fragment:nd,lightmap_fragment:sd,lightmap_pars_fragment:ad,lights_lambert_fragment:od,lights_lambert_pars_fragment:rd,lights_pars_begin:ld,lights_toon_fragment:hd,lights_toon_pars_fragment:dd,lights_phong_fragment:ud,lights_phong_pars_fragment:fd,lights_physical_fragment:pd,lights_physical_pars_fragment:md,lights_fragment_begin:gd,lights_fragment_maps:vd,lights_fragment_end:yd,logdepthbuf_fragment:_d,logdepthbuf_pars_fragment:Td,logdepthbuf_pars_vertex:Ed,logdepthbuf_vertex:Md,map_fragment:Sd,map_pars_fragment:xd,map_particle_fragment:bd,map_particle_pars_fragment:Ad,metalnessmap_fragment:Pd,metalnessmap_pars_fragment:Cd,morphcolor_vertex:wd,morphnormal_vertex:Rd,morphtarget_pars_vertex:Ld,morphtarget_vertex:Id,normal_fragment_begin:Dd,normal_fragment_maps:Od,normal_pars_fragment:Nd,normal_pars_vertex:zd,normal_vertex:Ud,normalmap_pars_fragment:Fd,clearcoat_normal_fragment_begin:Gd,clearcoat_normal_fragment_maps:Bd,clearcoat_pars_fragment:kd,iridescence_pars_fragment:Hd,opaque_fragment:Vd,packing:Wd,premultiplied_alpha_fragment:Yd,project_vertex:Xd,dithering_fragment:$d,dithering_pars_fragment:jd,roughnessmap_fragment:Kd,roughnessmap_pars_fragment:qd,shadowmap_pars_fragment:Zd,shadowmap_pars_vertex:Jd,shadowmap_vertex:Qd,shadowmask_pars_fragment:tu,skinbase_vertex:eu,skinning_pars_vertex:iu,skinning_vertex:nu,skinnormal_vertex:su,specularmap_fragment:au,specularmap_pars_fragment:ou,tonemapping_fragment:ru,tonemapping_pars_fragment:lu,transmission_fragment:cu,transmission_pars_fragment:hu,uv_pars_fragment:du,uv_pars_vertex:uu,uv_vertex:fu,worldpos_vertex:pu,background_vert:mu,background_frag:gu,backgroundCube_vert:vu,backgroundCube_frag:yu,cube_vert:_u,cube_frag:Tu,depth_vert:Eu,depth_frag:Mu,distanceRGBA_vert:Su,distanceRGBA_frag:xu,equirect_vert:bu,equirect_frag:Au,linedashed_vert:Pu,linedashed_frag:Cu,meshbasic_vert:wu,meshbasic_frag:Ru,meshlambert_vert:Lu,meshlambert_frag:Iu,meshmatcap_vert:Du,meshmatcap_frag:Ou,meshnormal_vert:Nu,meshnormal_frag:zu,meshphong_vert:Uu,meshphong_frag:Fu,meshphysical_vert:Gu,meshphysical_frag:Bu,meshtoon_vert:ku,meshtoon_frag:Hu,points_vert:Vu,points_frag:Wu,shadow_vert:Yu,shadow_frag:Xu,sprite_vert:$u,sprite_frag:ju},Lt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},qe={basic:{uniforms:Pe([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Pe([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Pe([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Pe([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Pe([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Pe([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Pe([Lt.points,Lt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Pe([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Pe([Lt.common,Lt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Pe([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Pe([Lt.sprite,Lt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Pe([Lt.common,Lt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Pe([Lt.lights,Lt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};qe.physical={uniforms:Pe([qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const ss={r:0,b:0,g:0};function Ku(s,t,e,i,n,a,r){const o=new Jt(0);let l=a===!0?0:1,c,u,f=null,p=0,m=null;function T(h,d){let _=!1,g=d.isScene===!0?d.background:null;g&&g.isTexture&&(g=(d.backgroundBlurriness>0?e:t).get(g)),g===null?y(o,l):g&&g.isColor&&(y(g,1),_=!0);const v=s.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),g&&(g.isCubeTexture||g.mapping===_s)?(u===void 0&&(u=new Qt(new xe(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:pn(qe.backgroundCube.uniforms),vertexShader:qe.backgroundCube.vertexShader,fragmentShader:qe.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,x,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=te.getTransfer(g.colorSpace)!==ne,(f!==g||p!==g.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,f=g,p=g.version,m=s.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Qt(new Da(2,2),new zi({name:"BackgroundMaterial",uniforms:pn(qe.background.uniforms),vertexShader:qe.background.vertexShader,fragmentShader:qe.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=te.getTransfer(g.colorSpace)!==ne,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||p!==g.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,f=g,p=g.version,m=s.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null))}function y(h,d){h.getRGB(ss,Jr(s)),i.buffers.color.setClear(ss.r,ss.g,ss.b,d,r)}return{getClearColor:function(){return o},setClearColor:function(h,d=1){o.set(h),l=d,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,y(o,l)},render:T}}function qu(s,t,e,i){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),r=i.isWebGL2||a!==null,o={},l=h(null);let c=l,u=!1;function f(R,B,$,V,H){let J=!1;if(r){const k=y(V,$,B);c!==k&&(c=k,m(c.object)),J=d(R,V,$,H),J&&_(R,V,$,H)}else{const k=B.wireframe===!0;(c.geometry!==V.id||c.program!==$.id||c.wireframe!==k)&&(c.geometry=V.id,c.program=$.id,c.wireframe=k,J=!0)}H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,N(R,B,$,V),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function p(){return i.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function m(R){return i.isWebGL2?s.bindVertexArray(R):a.bindVertexArrayOES(R)}function T(R){return i.isWebGL2?s.deleteVertexArray(R):a.deleteVertexArrayOES(R)}function y(R,B,$){const V=$.wireframe===!0;let H=o[R.id];H===void 0&&(H={},o[R.id]=H);let J=H[B.id];J===void 0&&(J={},H[B.id]=J);let k=J[V];return k===void 0&&(k=h(p()),J[V]=k),k}function h(R){const B=[],$=[],V=[];for(let H=0;H<n;H++)B[H]=0,$[H]=0,V[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:$,attributeDivisors:V,object:R,attributes:{},index:null}}function d(R,B,$,V){const H=c.attributes,J=B.attributes;let k=0;const Y=$.getAttributes();for(const Z in Y)if(Y[Z].location>=0){const Q=H[Z];let st=J[Z];if(st===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(st=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(st=R.instanceColor)),Q===void 0||Q.attribute!==st||st&&Q.data!==st.data)return!0;k++}return c.attributesNum!==k||c.index!==V}function _(R,B,$,V){const H={},J=B.attributes;let k=0;const Y=$.getAttributes();for(const Z in Y)if(Y[Z].location>=0){let Q=J[Z];Q===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor));const st={};st.attribute=Q,Q&&Q.data&&(st.data=Q.data),H[Z]=st,k++}c.attributes=H,c.attributesNum=k,c.index=V}function g(){const R=c.newAttributes;for(let B=0,$=R.length;B<$;B++)R[B]=0}function v(R){E(R,0)}function E(R,B){const $=c.newAttributes,V=c.enabledAttributes,H=c.attributeDivisors;$[R]=1,V[R]===0&&(s.enableVertexAttribArray(R),V[R]=1),H[R]!==B&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,B),H[R]=B)}function x(){const R=c.newAttributes,B=c.enabledAttributes;for(let $=0,V=B.length;$<V;$++)B[$]!==R[$]&&(s.disableVertexAttribArray($),B[$]=0)}function S(R,B,$,V,H,J,k){k===!0?s.vertexAttribIPointer(R,B,$,H,J):s.vertexAttribPointer(R,B,$,V,H,J)}function N(R,B,$,V){if(i.isWebGL2===!1&&(R.isInstancedMesh||V.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();const H=V.attributes,J=$.getAttributes(),k=B.defaultAttributeValues;for(const Y in J){const Z=J[Y];if(Z.location>=0){let F=H[Y];if(F===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(F=R.instanceColor)),F!==void 0){const Q=F.normalized,st=F.itemSize,yt=e.get(F);if(yt===void 0)continue;const Ct=yt.buffer,Rt=yt.type,L=yt.bytesPerElement,D=i.isWebGL2===!0&&(Rt===s.INT||Rt===s.UNSIGNED_INT||F.gpuType===Nr);if(F.isInterleavedBufferAttribute){const W=F.data,C=W.stride,K=F.offset;if(W.isInstancedInterleavedBuffer){for(let it=0;it<Z.locationSize;it++)E(Z.location+it,W.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let it=0;it<Z.locationSize;it++)v(Z.location+it);s.bindBuffer(s.ARRAY_BUFFER,Ct);for(let it=0;it<Z.locationSize;it++)S(Z.location+it,st/Z.locationSize,Rt,Q,C*L,(K+st/Z.locationSize*it)*L,D)}else{if(F.isInstancedBufferAttribute){for(let W=0;W<Z.locationSize;W++)E(Z.location+W,F.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let W=0;W<Z.locationSize;W++)v(Z.location+W);s.bindBuffer(s.ARRAY_BUFFER,Ct);for(let W=0;W<Z.locationSize;W++)S(Z.location+W,st/Z.locationSize,Rt,Q,st*L,st/Z.locationSize*W*L,D)}}else if(k!==void 0){const Q=k[Y];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(Z.location,Q);break;case 3:s.vertexAttrib3fv(Z.location,Q);break;case 4:s.vertexAttrib4fv(Z.location,Q);break;default:s.vertexAttrib1fv(Z.location,Q)}}}}x()}function M(){z();for(const R in o){const B=o[R];for(const $ in B){const V=B[$];for(const H in V)T(V[H].object),delete V[H];delete B[$]}delete o[R]}}function A(R){if(o[R.id]===void 0)return;const B=o[R.id];for(const $ in B){const V=B[$];for(const H in V)T(V[H].object),delete V[H];delete B[$]}delete o[R.id]}function G(R){for(const B in o){const $=o[B];if($[R.id]===void 0)continue;const V=$[R.id];for(const H in V)T(V[H].object),delete V[H];delete $[R.id]}}function z(){q(),u=!0,c!==l&&(c=l,m(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:z,resetDefaultState:q,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:G,initAttributes:g,enableAttribute:v,disableUnusedAttributes:x}}function Zu(s,t,e,i){const n=i.isWebGL2;let a;function r(u){a=u}function o(u,f){s.drawArrays(a,u,f),e.update(f,a,1)}function l(u,f,p){if(p===0)return;let m,T;if(n)m=s,T="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),T="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[T](a,u,f,p),e.update(f,a,p)}function c(u,f,p){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let T=0;T<p;T++)this.render(u[T],f[T]);else{m.multiDrawArraysWEBGL(a,u,0,f,0,p);let T=0;for(let y=0;y<p;y++)T+=f[y];e.update(T,a,1)}}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Ju(s,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),T=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),h=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),g=p>0,v=r||t.has("OES_texture_float"),E=g&&v,x=r?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:T,maxAttributes:y,maxVertexUniforms:h,maxVaryings:d,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:v,floatVertexTextures:E,maxSamples:x}}function Qu(s){const t=this;let e=null,i=0,n=!1,a=!1;const r=new pi,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||i!==0||n;return n=p,i=f.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){e=u(f,p,0)},this.setState=function(f,p,m){const T=f.clippingPlanes,y=f.clipIntersection,h=f.clipShadows,d=s.get(f);if(!n||T===null||T.length===0||a&&!h)a?u(null):c();else{const _=a?0:i,g=_*4;let v=d.clippingState||null;l.value=v,v=u(T,p,g,m);for(let E=0;E!==g;++E)v[E]=e[E];d.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,p,m,T){const y=f!==null?f.length:0;let h=null;if(y!==0){if(h=l.value,T!==!0||h===null){const d=m+y*4,_=p.matrixWorldInverse;o.getNormalMatrix(_),(h===null||h.length<d)&&(h=new Float32Array(d));for(let g=0,v=m;g!==y;++g,v+=4)r.copy(f[g]).applyMatrix4(_,o),r.normal.toArray(h,v),h[v+3]=r.constant}l.value=h,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,h}}function tf(s){let t=new WeakMap;function e(r,o){return o===pa?r.mapping=dn:o===ma&&(r.mapping=un),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===pa||o===ma)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new uh(l.height/2);return c.fromEquirectangularTexture(s,r),t.set(r,c),r.addEventListener("dispose",n),e(c.texture,r.mapping)}else return null}}return r}function n(r){const o=r.target;o.removeEventListener("dispose",n);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class il extends Qr{constructor(t=-1,e=1,i=1,n=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-t,r=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const an=4,$o=[.125,.215,.35,.446,.526,.582],wi=20,Qs=new il,jo=new Jt;let ta=null,ea=0,ia=0;const Pi=(1+Math.sqrt(5))/2,nn=1/Pi,Ko=[new tt(1,1,1),new tt(-1,1,1),new tt(1,1,-1),new tt(-1,1,-1),new tt(0,Pi,nn),new tt(0,Pi,-nn),new tt(nn,0,Pi),new tt(-nn,0,Pi),new tt(Pi,nn,0),new tt(-Pi,nn,0)];class qo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,n,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ta,ea,ia),t.scissorTest=!1,as(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===dn||t.mapping===un?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:In,format:je,colorSpace:li,depthBuffer:!1},n=Zo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zo(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ef(a)),this._blurMaterial=nf(a,t,e)}return n}_compileMaterial(t){const e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,Qs)}_sceneToCubeUV(t,e,i,n){const o=new Be(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(jo),u.toneMapping=yi,u.autoClear=!1;const m=new Pn({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),T=new Qt(new xe,m);let y=!1;const h=t.background;h?h.isColor&&(m.color.copy(h),t.background=null,y=!0):(m.color.copy(jo),y=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):_===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const g=this._cubeSize;as(n,_*g,d>2?g:0,g,g),u.setRenderTarget(n),y&&u.render(T,o),u.render(t,o)}T.geometry.dispose(),T.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=h}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===dn||t.mapping===un;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jo());const a=n?this._cubemapMaterial:this._equirectMaterial,r=new Qt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;as(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,Qs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),r=Ko[(n-1)%Ko.length];this._blur(t,n-1,n,a,r)}e.autoClear=i}_blur(t,e,i,n,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,n,"latitudinal",a),this._halfBlur(r,t,i,i,n,"longitudinal",a)}_halfBlur(t,e,i,n,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Qt(this._lodPlanes[n],c),p=c.uniforms,m=this._sizeLods[i]-1,T=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*wi-1),y=a/T,h=isFinite(a)?1+Math.floor(u*y):wi;h>wi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${wi}`);const d=[];let _=0;for(let S=0;S<wi;++S){const N=S/y,M=Math.exp(-N*N/2);d.push(M),S===0?_+=M:S<h&&(_+=2*M)}for(let S=0;S<d.length;S++)d[S]=d[S]/_;p.envMap.value=t.texture,p.samples.value=h,p.weights.value=d,p.latitudinal.value=r==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:g}=this;p.dTheta.value=T,p.mipInt.value=g-i;const v=this._sizeLods[n],E=3*v*(n>g-an?n-g+an:0),x=4*(this._cubeSize-v);as(e,E,x,3*v,2*v),l.setRenderTarget(e),l.render(f,Qs)}}function ef(s){const t=[],e=[],i=[];let n=s;const a=s-an+1+$o.length;for(let r=0;r<a;r++){const o=Math.pow(2,n);e.push(o);let l=1/o;r>s-an?l=$o[r-s+an-1]:r===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,p=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,T=6,y=3,h=2,d=1,_=new Float32Array(y*T*m),g=new Float32Array(h*T*m),v=new Float32Array(d*T*m);for(let x=0;x<m;x++){const S=x%3*2/3-1,N=x>2?0:-1,M=[S,N,0,S+2/3,N,0,S+2/3,N+1,0,S,N,0,S+2/3,N+1,0,S,N+1,0];_.set(M,y*T*x),g.set(p,h*T*x);const A=[x,x,x,x,x,x];v.set(A,d*T*x)}const E=new Je;E.setAttribute("position",new Ze(_,y)),E.setAttribute("uv",new Ze(g,h)),E.setAttribute("faceIndex",new Ze(v,d)),t.push(E),n>an&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Zo(s,t,e){const i=new Oi(s,t,e);return i.texture.mapping=_s,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function as(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function nf(s,t,e){const i=new Float32Array(wi),n=new tt(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Oa(),fragmentShader:`

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
	`}function sf(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===pa||l===ma,u=l===dn||l===un;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return e===null&&(e=new qo(s)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&n(f)){e===null&&(e=new qo(s));const p=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,p),o.addEventListener("dispose",a),p.texture}else return null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function af(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function of(s,t,e,i){const n={},a=new WeakMap;function r(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const T in p.attributes)t.remove(p.attributes[T]);for(const T in p.morphAttributes){const y=p.morphAttributes[T];for(let h=0,d=y.length;h<d;h++)t.remove(y[h])}p.removeEventListener("dispose",r),delete n[p.id];const m=a.get(p);m&&(t.remove(m),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(f,p){return n[p.id]===!0||(p.addEventListener("dispose",r),n[p.id]=!0,e.memory.geometries++),p}function l(f){const p=f.attributes;for(const T in p)t.update(p[T],s.ARRAY_BUFFER);const m=f.morphAttributes;for(const T in m){const y=m[T];for(let h=0,d=y.length;h<d;h++)t.update(y[h],s.ARRAY_BUFFER)}}function c(f){const p=[],m=f.index,T=f.attributes.position;let y=0;if(m!==null){const _=m.array;y=m.version;for(let g=0,v=_.length;g<v;g+=3){const E=_[g+0],x=_[g+1],S=_[g+2];p.push(E,x,x,S,S,E)}}else if(T!==void 0){const _=T.array;y=T.version;for(let g=0,v=_.length/3-1;g<v;g+=3){const E=g+0,x=g+1,S=g+2;p.push(E,x,x,S,S,E)}}else return;const h=new(Yr(p)?Zr:qr)(p,1);h.version=y;const d=a.get(f);d&&t.remove(d),a.set(f,h)}function u(f){const p=a.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function rf(s,t,e,i){const n=i.isWebGL2;let a;function r(m){a=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,T){s.drawElements(a,T,o,m*l),e.update(T,a,1)}function f(m,T,y){if(y===0)return;let h,d;if(n)h=s,d="drawElementsInstanced";else if(h=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](a,T,o,m*l,y),e.update(T,a,y)}function p(m,T,y){if(y===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<y;d++)this.render(m[d]/l,T[d]);else{h.multiDrawElementsWEBGL(a,T,0,o,m,0,y);let d=0;for(let _=0;_<y;_++)d+=T[_];e.update(d,a,1)}}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=p}function lf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function cf(s,t){return s[0]-t[0]}function hf(s,t){return Math.abs(t[1])-Math.abs(s[1])}function df(s,t,e){const i={},n=new Float32Array(8),a=new WeakMap,r=new ye,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const p=c.morphTargetInfluences;if(t.isWebGL2===!0){const T=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=T!==void 0?T.length:0;let h=a.get(u);if(h===void 0||h.count!==y){let B=function(){q.dispose(),a.delete(u),u.removeEventListener("dispose",B)};var m=B;h!==void 0&&h.texture.dispose();const g=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],N=u.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),E===!0&&(M=3);let A=u.attributes.position.count*M,G=1;A>t.maxTextureSize&&(G=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const z=new Float32Array(A*G*4*y),q=new jr(z,A,G,y);q.type=gi,q.needsUpdate=!0;const R=M*4;for(let $=0;$<y;$++){const V=x[$],H=S[$],J=N[$],k=A*G*4*$;for(let Y=0;Y<V.count;Y++){const Z=Y*R;g===!0&&(r.fromBufferAttribute(V,Y),z[k+Z+0]=r.x,z[k+Z+1]=r.y,z[k+Z+2]=r.z,z[k+Z+3]=0),v===!0&&(r.fromBufferAttribute(H,Y),z[k+Z+4]=r.x,z[k+Z+5]=r.y,z[k+Z+6]=r.z,z[k+Z+7]=0),E===!0&&(r.fromBufferAttribute(J,Y),z[k+Z+8]=r.x,z[k+Z+9]=r.y,z[k+Z+10]=r.z,z[k+Z+11]=J.itemSize===4?r.w:1)}}h={count:y,texture:q,size:new kt(A,G)},a.set(u,h),u.addEventListener("dispose",B)}let d=0;for(let g=0;g<p.length;g++)d+=p[g];const _=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(s,"morphTargetBaseInfluence",_),f.getUniforms().setValue(s,"morphTargetInfluences",p),f.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}else{const T=p===void 0?0:p.length;let y=i[u.id];if(y===void 0||y.length!==T){y=[];for(let v=0;v<T;v++)y[v]=[v,0];i[u.id]=y}for(let v=0;v<T;v++){const E=y[v];E[0]=v,E[1]=p[v]}y.sort(hf);for(let v=0;v<8;v++)v<T&&y[v][1]?(o[v][0]=y[v][0],o[v][1]=y[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(cf);const h=u.morphAttributes.position,d=u.morphAttributes.normal;let _=0;for(let v=0;v<8;v++){const E=o[v],x=E[0],S=E[1];x!==Number.MAX_SAFE_INTEGER&&S?(h&&u.getAttribute("morphTarget"+v)!==h[x]&&u.setAttribute("morphTarget"+v,h[x]),d&&u.getAttribute("morphNormal"+v)!==d[x]&&u.setAttribute("morphNormal"+v,d[x]),n[v]=S,_+=S):(h&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),d&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),n[v]=0)}const g=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(s,"morphTargetBaseInfluence",g),f.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:l}}function uf(s,t,e,i){let n=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(n.get(f)!==c&&(t.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;n.get(p)!==c&&(p.update(),n.set(p,c))}return f}function r(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:r}}class nl extends ze{constructor(t,e,i,n,a,r,o,l,c,u){if(u=u!==void 0?u:Li,u!==Li&&u!==fn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Li&&(i=mi),i===void 0&&u===fn&&(i=Ri),super(null,n,a,r,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ce,this.minFilter=l!==void 0?l:Ce,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const sl=new ze,al=new nl(1,1);al.compareFunction=Wr;const ol=new jr,rl=new Kc,ll=new tl,tr=[],er=[],ir=new Float32Array(16),nr=new Float32Array(9),sr=new Float32Array(4);function gn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let a=tr[n];if(a===void 0&&(a=new Float32Array(n),tr[n]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function pe(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function me(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Ms(s,t){let e=er[t];e===void 0&&(e=new Int32Array(t),er[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function ff(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2fv(this.addr,t),me(e,t)}}function mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;s.uniform3fv(this.addr,t),me(e,t)}}function gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4fv(this.addr,t),me(e,t)}}function vf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;sr.set(i),s.uniformMatrix2fv(this.addr,!1,sr),me(e,i)}}function yf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;nr.set(i),s.uniformMatrix3fv(this.addr,!1,nr),me(e,i)}}function _f(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;ir.set(i),s.uniformMatrix4fv(this.addr,!1,ir),me(e,i)}}function Tf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2iv(this.addr,t),me(e,t)}}function Mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3iv(this.addr,t),me(e,t)}}function Sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4iv(this.addr,t),me(e,t)}}function xf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2uiv(this.addr,t),me(e,t)}}function Af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3uiv(this.addr,t),me(e,t)}}function Pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4uiv(this.addr,t),me(e,t)}}function Cf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);const a=this.type===s.SAMPLER_2D_SHADOW?al:sl;e.setTexture2D(t||a,n)}function wf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||rl,n)}function Rf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||ll,n)}function Lf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||ol,n)}function If(s){switch(s){case 5126:return ff;case 35664:return pf;case 35665:return mf;case 35666:return gf;case 35674:return vf;case 35675:return yf;case 35676:return _f;case 5124:case 35670:return Tf;case 35667:case 35671:return Ef;case 35668:case 35672:return Mf;case 35669:case 35673:return Sf;case 5125:return xf;case 36294:return bf;case 36295:return Af;case 36296:return Pf;case 35678:case 36198:case 36298:case 36306:case 35682:return Cf;case 35679:case 36299:case 36307:return wf;case 35680:case 36300:case 36308:case 36293:return Rf;case 36289:case 36303:case 36311:case 36292:return Lf}}function Df(s,t){s.uniform1fv(this.addr,t)}function Of(s,t){const e=gn(t,this.size,2);s.uniform2fv(this.addr,e)}function Nf(s,t){const e=gn(t,this.size,3);s.uniform3fv(this.addr,e)}function zf(s,t){const e=gn(t,this.size,4);s.uniform4fv(this.addr,e)}function Uf(s,t){const e=gn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Ff(s,t){const e=gn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Gf(s,t){const e=gn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Bf(s,t){s.uniform1iv(this.addr,t)}function kf(s,t){s.uniform2iv(this.addr,t)}function Hf(s,t){s.uniform3iv(this.addr,t)}function Vf(s,t){s.uniform4iv(this.addr,t)}function Wf(s,t){s.uniform1uiv(this.addr,t)}function Yf(s,t){s.uniform2uiv(this.addr,t)}function Xf(s,t){s.uniform3uiv(this.addr,t)}function $f(s,t){s.uniform4uiv(this.addr,t)}function jf(s,t,e){const i=this.cache,n=t.length,a=Ms(e,n);pe(i,a)||(s.uniform1iv(this.addr,a),me(i,a));for(let r=0;r!==n;++r)e.setTexture2D(t[r]||sl,a[r])}function Kf(s,t,e){const i=this.cache,n=t.length,a=Ms(e,n);pe(i,a)||(s.uniform1iv(this.addr,a),me(i,a));for(let r=0;r!==n;++r)e.setTexture3D(t[r]||rl,a[r])}function qf(s,t,e){const i=this.cache,n=t.length,a=Ms(e,n);pe(i,a)||(s.uniform1iv(this.addr,a),me(i,a));for(let r=0;r!==n;++r)e.setTextureCube(t[r]||ll,a[r])}function Zf(s,t,e){const i=this.cache,n=t.length,a=Ms(e,n);pe(i,a)||(s.uniform1iv(this.addr,a),me(i,a));for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||ol,a[r])}function Jf(s){switch(s){case 5126:return Df;case 35664:return Of;case 35665:return Nf;case 35666:return zf;case 35674:return Uf;case 35675:return Ff;case 35676:return Gf;case 5124:case 35670:return Bf;case 35667:case 35671:return kf;case 35668:case 35672:return Hf;case 35669:case 35673:return Vf;case 5125:return Wf;case 36294:return Yf;case 36295:return Xf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return jf;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return qf;case 36289:case 36303:case 36311:case 36292:return Zf}}class Qf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=If(e.type)}}class tp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jf(e.type)}}class ep{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let a=0,r=n.length;a!==r;++a){const o=n[a];o.setValue(t,e[o.id],i)}}}const na=/(\w+)(\])?(\[|\.)?/g;function ar(s,t){s.seq.push(t),s.map[t.id]=t}function ip(s,t,e){const i=s.name,n=i.length;for(na.lastIndex=0;;){const a=na.exec(i),r=na.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===n){ar(e,c===void 0?new Qf(o,s,t):new tp(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new ep(o),ar(e,f)),e=f}}}class hs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=t.getActiveUniform(e,n),r=t.getUniformLocation(e,a.name);ip(a,r,this)}}setValue(t,e,i,n){const a=this.map[e];a!==void 0&&a.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,a=t.length;n!==a;++n){const r=t[n];r.id in e&&i.push(r)}return i}}function or(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const np=37297;let sp=0;function ap(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=n;r<a;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}function op(s){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(s);let i;switch(t===e?i="":t===ps&&e===fs?i="LinearDisplayP3ToLinearSRGB":t===fs&&e===ps&&(i="LinearSRGBToLinearDisplayP3"),s){case li:case Ts:return[i,"LinearTransferOETF"];case Te:case Ca:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function rr(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+n+`

`+ap(s.getShaderSource(t),r)}else return n}function rp(s,t){const e=op(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function lp(s,t){let e;switch(t){case vc:e="Linear";break;case yc:e="Reinhard";break;case _c:e="OptimizedCineon";break;case Tc:e="ACESFilmic";break;case Mc:e="AgX";break;case Ec:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function cp(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(on).join(`
`)}function hp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(on).join(`
`)}function dp(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function up(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=s.getActiveAttrib(t,n),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function on(s){return s!==""}function lr(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cr(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ea(s){return s.replace(fp,mp)}const pp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function mp(s,t){let e=Xt[t];if(e===void 0){const i=pp.get(t);if(i!==void 0)e=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ea(e)}const gp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hr(s){return s.replace(gp,vp)}function vp(s,t,e,i){let n="";for(let a=parseInt(t);a<parseInt(e);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function dr(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function yp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Dr?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Yl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function _p(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case dn:case un:t="ENVMAP_TYPE_CUBE";break;case _s:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case un:t="ENVMAP_MODE_REFRACTION";break}return t}function Ep(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Aa:t="ENVMAP_BLENDING_MULTIPLY";break;case mc:t="ENVMAP_BLENDING_MIX";break;case gc:t="ENVMAP_BLENDING_ADD";break}return t}function Mp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Sp(s,t,e,i){const n=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=yp(e),c=_p(e),u=Tp(e),f=Ep(e),p=Mp(e),m=e.isWebGL2?"":cp(e),T=hp(e),y=dp(a),h=n.createProgram();let d,_,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(on).join(`
`),d.length>0&&(d+=`
`),_=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(on).join(`
`),_.length>0&&(_+=`
`)):(d=[dr(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(on).join(`
`),_=[m,dr(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?Xt.tonemapping_pars_fragment:"",e.toneMapping!==yi?lp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,rp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(on).join(`
`)),r=Ea(r),r=lr(r,e),r=cr(r,e),o=Ea(o),o=lr(o,e),o=cr(o,e),r=hr(r),o=hr(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,d=[T,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=g+d+r,E=g+_+o,x=or(n,n.VERTEX_SHADER,v),S=or(n,n.FRAGMENT_SHADER,E);n.attachShader(h,x),n.attachShader(h,S),e.index0AttributeName!==void 0?n.bindAttribLocation(h,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(h,0,"position"),n.linkProgram(h);function N(z){if(s.debug.checkShaderErrors){const q=n.getProgramInfoLog(h).trim(),R=n.getShaderInfoLog(x).trim(),B=n.getShaderInfoLog(S).trim();let $=!0,V=!0;if(n.getProgramParameter(h,n.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,h,x,S);else{const H=rr(n,x,"vertex"),J=rr(n,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(h,n.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+H+`
`+J)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(R===""||B==="")&&(V=!1);V&&(z.diagnostics={runnable:$,programLog:q,vertexShader:{log:R,prefix:d},fragmentShader:{log:B,prefix:_}})}n.deleteShader(x),n.deleteShader(S),M=new hs(n,h),A=up(n,h)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=n.getProgramParameter(h,np)),G},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(h),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sp++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}let xp=0;class bp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ap(t),e.set(t,i)),i}}class Ap{constructor(t){this.id=xp++,this.code=t,this.usedTimes=0}}function Pp(s,t,e,i,n,a,r){const o=new La,l=new bp,c=[],u=n.isWebGL2,f=n.logarithmicDepthBuffer,p=n.vertexTextures;let m=n.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function h(M,A,G,z,q){const R=z.fog,B=q.geometry,$=M.isMeshStandardMaterial?z.environment:null,V=(M.isMeshStandardMaterial?e:t).get(M.envMap||$),H=V&&V.mapping===_s?V.image.height:null,J=T[M.type];M.precision!==null&&(m=n.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const k=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Y=k!==void 0?k.length:0;let Z=0;B.morphAttributes.position!==void 0&&(Z=1),B.morphAttributes.normal!==void 0&&(Z=2),B.morphAttributes.color!==void 0&&(Z=3);let F,Q,st,yt;if(J){const ae=qe[J];F=ae.vertexShader,Q=ae.fragmentShader}else F=M.vertexShader,Q=M.fragmentShader,l.update(M),st=l.getVertexShaderID(M),yt=l.getFragmentShaderID(M);const Ct=s.getRenderTarget(),Rt=q.isInstancedMesh===!0,L=q.isBatchedMesh===!0,D=!!M.map,W=!!M.matcap,C=!!V,K=!!M.aoMap,it=!!M.lightMap,nt=!!M.bumpMap,gt=!!M.normalMap,vt=!!M.displacementMap,mt=!!M.emissiveMap,P=!!M.metalnessMap,b=!!M.roughnessMap,j=M.anisotropy>0,dt=M.clearcoat>0,ut=M.iridescence>0,lt=M.sheen>0,_t=M.transmission>0,pt=j&&!!M.anisotropyMap,ht=dt&&!!M.clearcoatMap,xt=dt&&!!M.clearcoatNormalMap,wt=dt&&!!M.clearcoatRoughnessMap,at=ut&&!!M.iridescenceMap,It=ut&&!!M.iridescenceThicknessMap,Nt=lt&&!!M.sheenColorMap,Dt=lt&&!!M.sheenRoughnessMap,Pt=!!M.specularMap,bt=!!M.specularColorMap,I=!!M.specularIntensityMap,Mt=_t&&!!M.transmissionMap,Et=_t&&!!M.thicknessMap,Tt=!!M.gradientMap,ft=!!M.alphaMap,U=M.alphaTest>0,St=!!M.alphaHash,At=!!M.extensions,Ut=!!B.attributes.uv1,Gt=!!B.attributes.uv2,Vt=!!B.attributes.uv3;let jt=yi;return M.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(jt=s.toneMapping),{isWebGL2:u,shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:F,fragmentShader:Q,defines:M.defines,customVertexShaderID:st,customFragmentShaderID:yt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:L,instancing:Rt,instancingColor:Rt&&q.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Ct===null?s.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:li,map:D,matcap:W,envMap:C,envMapMode:C&&V.mapping,envMapCubeUVHeight:H,aoMap:K,lightMap:it,bumpMap:nt,normalMap:gt,displacementMap:p&&vt,emissiveMap:mt,normalMapObjectSpace:gt&&M.normalMapType===Oc,normalMapTangentSpace:gt&&M.normalMapType===Vr,metalnessMap:P,roughnessMap:b,anisotropy:j,anisotropyMap:pt,clearcoat:dt,clearcoatMap:ht,clearcoatNormalMap:xt,clearcoatRoughnessMap:wt,iridescence:ut,iridescenceMap:at,iridescenceThicknessMap:It,sheen:lt,sheenColorMap:Nt,sheenRoughnessMap:Dt,specularMap:Pt,specularColorMap:bt,specularIntensityMap:I,transmission:_t,transmissionMap:Mt,thicknessMap:Et,gradientMap:Tt,opaque:M.transparent===!1&&M.blending===cn,alphaMap:ft,alphaTest:U,alphaHash:St,combine:M.combine,mapUv:D&&y(M.map.channel),aoMapUv:K&&y(M.aoMap.channel),lightMapUv:it&&y(M.lightMap.channel),bumpMapUv:nt&&y(M.bumpMap.channel),normalMapUv:gt&&y(M.normalMap.channel),displacementMapUv:vt&&y(M.displacementMap.channel),emissiveMapUv:mt&&y(M.emissiveMap.channel),metalnessMapUv:P&&y(M.metalnessMap.channel),roughnessMapUv:b&&y(M.roughnessMap.channel),anisotropyMapUv:pt&&y(M.anisotropyMap.channel),clearcoatMapUv:ht&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:xt&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:It&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&y(M.sheenRoughnessMap.channel),specularMapUv:Pt&&y(M.specularMap.channel),specularColorMapUv:bt&&y(M.specularColorMap.channel),specularIntensityMapUv:I&&y(M.specularIntensityMap.channel),transmissionMapUv:Mt&&y(M.transmissionMap.channel),thicknessMapUv:Et&&y(M.thicknessMap.channel),alphaMapUv:ft&&y(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(gt||j),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Ut,vertexUv2s:Gt,vertexUv3s:Vt,pointsUvs:q.isPoints===!0&&!!B.attributes.uv&&(D||ft),fog:!!R,useFog:M.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:Z,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:jt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:D&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===ne,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===oi,flipSided:M.side===Le,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:At&&M.extensions.derivatives===!0,extensionFragDepth:At&&M.extensions.fragDepth===!0,extensionDrawBuffers:At&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:At&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:At&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const G in M.defines)A.push(G),A.push(M.defines[G]);return M.isRawShaderMaterial===!1&&(_(A,M),g(A,M),A.push(s.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function _(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function g(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function v(M){const A=T[M.type];let G;if(A){const z=qe[A];G=lh.clone(z.uniforms)}else G=M.uniforms;return G}function E(M,A){let G;for(let z=0,q=c.length;z<q;z++){const R=c[z];if(R.cacheKey===A){G=R,++G.usedTimes;break}}return G===void 0&&(G=new Sp(s,A,M,a),c.push(G)),G}function x(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function S(M){l.remove(M)}function N(){l.dispose()}return{getParameters:h,getProgramCacheKey:d,getUniforms:v,acquireProgram:E,releaseProgram:x,releaseShaderCache:S,programs:c,dispose:N}}function Cp(){let s=new WeakMap;function t(a){let r=s.get(a);return r===void 0&&(r={},s.set(a,r)),r}function e(a){s.delete(a)}function i(a,r,o){s.get(a)[r]=o}function n(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function wp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ur(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function fr(){const s=[];let t=0;const e=[],i=[],n=[];function a(){t=0,e.length=0,i.length=0,n.length=0}function r(f,p,m,T,y,h){let d=s[t];return d===void 0?(d={id:f.id,object:f,geometry:p,material:m,groupOrder:T,renderOrder:f.renderOrder,z:y,group:h},s[t]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=m,d.groupOrder=T,d.renderOrder=f.renderOrder,d.z=y,d.group=h),t++,d}function o(f,p,m,T,y,h){const d=r(f,p,m,T,y,h);m.transmission>0?i.push(d):m.transparent===!0?n.push(d):e.push(d)}function l(f,p,m,T,y,h){const d=r(f,p,m,T,y,h);m.transmission>0?i.unshift(d):m.transparent===!0?n.unshift(d):e.unshift(d)}function c(f,p){e.length>1&&e.sort(f||wp),i.length>1&&i.sort(p||ur),n.length>1&&n.sort(p||ur)}function u(){for(let f=t,p=s.length;f<p;f++){const m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:a,push:o,unshift:l,finish:u,sort:c}}function Rp(){let s=new WeakMap;function t(i,n){const a=s.get(i);let r;return a===void 0?(r=new fr,s.set(i,[r])):n>=a.length?(r=new fr,a.push(r)):r=a[n],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function Lp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new tt,color:new Jt};break;case"SpotLight":e={position:new tt,direction:new tt,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new tt,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new tt,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return s[t.id]=e,e}}}function Ip(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Dp=0;function Op(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Np(s,t){const e=new Lp,i=Ip(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new tt);const a=new tt,r=new fe,o=new fe;function l(u,f){let p=0,m=0,T=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let y=0,h=0,d=0,_=0,g=0,v=0,E=0,x=0,S=0,N=0,M=0;u.sort(Op);const A=f===!0?Math.PI:1;for(let z=0,q=u.length;z<q;z++){const R=u[z],B=R.color,$=R.intensity,V=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)p+=B.r*$*A,m+=B.g*$*A,T+=B.b*$*A;else if(R.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(R.sh.coefficients[J],$);M++}else if(R.isDirectionalLight){const J=e.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity*A),R.castShadow){const k=R.shadow,Y=i.get(R);Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,n.directionalShadow[y]=Y,n.directionalShadowMap[y]=H,n.directionalShadowMatrix[y]=R.shadow.matrix,v++}n.directional[y]=J,y++}else if(R.isSpotLight){const J=e.get(R);J.position.setFromMatrixPosition(R.matrixWorld),J.color.copy(B).multiplyScalar($*A),J.distance=V,J.coneCos=Math.cos(R.angle),J.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),J.decay=R.decay,n.spot[d]=J;const k=R.shadow;if(R.map&&(n.spotLightMap[S]=R.map,S++,k.updateMatrices(R),R.castShadow&&N++),n.spotLightMatrix[d]=k.matrix,R.castShadow){const Y=i.get(R);Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,n.spotShadow[d]=Y,n.spotShadowMap[d]=H,x++}d++}else if(R.isRectAreaLight){const J=e.get(R);J.color.copy(B).multiplyScalar($),J.halfWidth.set(R.width*.5,0,0),J.halfHeight.set(0,R.height*.5,0),n.rectArea[_]=J,_++}else if(R.isPointLight){const J=e.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity*A),J.distance=R.distance,J.decay=R.decay,R.castShadow){const k=R.shadow,Y=i.get(R);Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,Y.shadowCameraNear=k.camera.near,Y.shadowCameraFar=k.camera.far,n.pointShadow[h]=Y,n.pointShadowMap[h]=H,n.pointShadowMatrix[h]=R.shadow.matrix,E++}n.point[h]=J,h++}else if(R.isHemisphereLight){const J=e.get(R);J.skyColor.copy(R.color).multiplyScalar($*A),J.groundColor.copy(R.groundColor).multiplyScalar($*A),n.hemi[g]=J,g++}}_>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=T;const G=n.hash;(G.directionalLength!==y||G.pointLength!==h||G.spotLength!==d||G.rectAreaLength!==_||G.hemiLength!==g||G.numDirectionalShadows!==v||G.numPointShadows!==E||G.numSpotShadows!==x||G.numSpotMaps!==S||G.numLightProbes!==M)&&(n.directional.length=y,n.spot.length=d,n.rectArea.length=_,n.point.length=h,n.hemi.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+S-N,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=M,G.directionalLength=y,G.pointLength=h,G.spotLength=d,G.rectAreaLength=_,G.hemiLength=g,G.numDirectionalShadows=v,G.numPointShadows=E,G.numSpotShadows=x,G.numSpotMaps=S,G.numLightProbes=M,n.version=Dp++)}function c(u,f){let p=0,m=0,T=0,y=0,h=0;const d=f.matrixWorldInverse;for(let _=0,g=u.length;_<g;_++){const v=u[_];if(v.isDirectionalLight){const E=n.directional[p];E.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(d),p++}else if(v.isSpotLight){const E=n.spot[T];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(d),T++}else if(v.isRectAreaLight){const E=n.rectArea[y];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(d),o.identity(),r.copy(v.matrixWorld),r.premultiply(d),o.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){const E=n.point[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(d),m++}else if(v.isHemisphereLight){const E=n.hemi[h];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(d),h++}}}return{setup:l,setupView:c,state:n}}function pr(s,t){const e=new Np(s,t),i=[],n=[];function a(){i.length=0,n.length=0}function r(f){i.push(f)}function o(f){n.push(f)}function l(f){e.setup(i,f)}function c(f){e.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function zp(s,t){let e=new WeakMap;function i(a,r=0){const o=e.get(a);let l;return o===void 0?(l=new pr(s,t),e.set(a,[l])):r>=o.length?(l=new pr(s,t),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:i,dispose:n}}class Up extends Nn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ic,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fp extends Nn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Gp=`void main() {
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
}`;function kp(s,t,e){let i=new Ia;const n=new kt,a=new kt,r=new ye,o=new Up({depthPacking:Dc}),l=new Fp,c={},u=e.maxTextureSize,f={[Ti]:Le,[Le]:Ti,[oi]:oi},p=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Gp,fragmentShader:Bp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const T=new Je;T.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Qt(T,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dr;let d=this.type;this.render=function(x,S,N){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||x.length===0)return;const M=s.getRenderTarget(),A=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),z=s.state;z.setBlending(vi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const q=d!==ai&&this.type===ai,R=d===ai&&this.type!==ai;for(let B=0,$=x.length;B<$;B++){const V=x[B],H=V.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const J=H.getFrameExtents();if(n.multiply(J),a.copy(H.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(a.x=Math.floor(u/J.x),n.x=a.x*J.x,H.mapSize.x=a.x),n.y>u&&(a.y=Math.floor(u/J.y),n.y=a.y*J.y,H.mapSize.y=a.y)),H.map===null||q===!0||R===!0){const Y=this.type!==ai?{minFilter:Ce,magFilter:Ce}:{};H.map!==null&&H.map.dispose(),H.map=new Oi(n.x,n.y,Y),H.map.texture.name=V.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const k=H.getViewportCount();for(let Y=0;Y<k;Y++){const Z=H.getViewport(Y);r.set(a.x*Z.x,a.y*Z.y,a.x*Z.z,a.y*Z.w),z.viewport(r),H.updateMatrices(V,Y),i=H.getFrustum(),v(S,N,H.camera,V,this.type)}H.isPointLightShadow!==!0&&this.type===ai&&_(H,N),H.needsUpdate=!1}d=this.type,h.needsUpdate=!1,s.setRenderTarget(M,A,G)};function _(x,S){const N=t.update(y);p.defines.VSM_SAMPLES!==x.blurSamples&&(p.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Oi(n.x,n.y)),p.uniforms.shadow_pass.value=x.map.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,s.setRenderTarget(x.mapPass),s.clear(),s.renderBufferDirect(S,null,N,p,y,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,s.setRenderTarget(x.map),s.clear(),s.renderBufferDirect(S,null,N,m,y,null)}function g(x,S,N,M){let A=null;const G=N.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(G!==void 0)A=G;else if(A=N.isPointLight===!0?l:o,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const z=A.uuid,q=S.uuid;let R=c[z];R===void 0&&(R={},c[z]=R);let B=R[q];B===void 0&&(B=A.clone(),R[q]=B,S.addEventListener("dispose",E)),A=B}if(A.visible=S.visible,A.wireframe=S.wireframe,M===ai?A.side=S.shadowSide!==null?S.shadowSide:S.side:A.side=S.shadowSide!==null?S.shadowSide:f[S.side],A.alphaMap=S.alphaMap,A.alphaTest=S.alphaTest,A.map=S.map,A.clipShadows=S.clipShadows,A.clippingPlanes=S.clippingPlanes,A.clipIntersection=S.clipIntersection,A.displacementMap=S.displacementMap,A.displacementScale=S.displacementScale,A.displacementBias=S.displacementBias,A.wireframeLinewidth=S.wireframeLinewidth,A.linewidth=S.linewidth,N.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const z=s.properties.get(A);z.light=N}return A}function v(x,S,N,M,A){if(x.visible===!1)return;if(x.layers.test(S.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&A===ai)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,x.matrixWorld);const q=t.update(x),R=x.material;if(Array.isArray(R)){const B=q.groups;for(let $=0,V=B.length;$<V;$++){const H=B[$],J=R[H.materialIndex];if(J&&J.visible){const k=g(x,J,M,A);x.onBeforeShadow(s,x,S,N,q,k,H),s.renderBufferDirect(N,null,q,k,x,H),x.onAfterShadow(s,x,S,N,q,k,H)}}}else if(R.visible){const B=g(x,R,M,A);x.onBeforeShadow(s,x,S,N,q,B,null),s.renderBufferDirect(N,null,q,B,x,null),x.onAfterShadow(s,x,S,N,q,B,null)}}const z=x.children;for(let q=0,R=z.length;q<R;q++)v(z[q],S,N,M,A)}function E(x){x.target.removeEventListener("dispose",E);for(const N in c){const M=c[N],A=x.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}function Hp(s,t,e){const i=e.isWebGL2;function n(){let U=!1;const St=new ye;let At=null;const Ut=new ye(0,0,0,0);return{setMask:function(Gt){At!==Gt&&!U&&(s.colorMask(Gt,Gt,Gt,Gt),At=Gt)},setLocked:function(Gt){U=Gt},setClear:function(Gt,Vt,jt,se,ae){ae===!0&&(Gt*=se,Vt*=se,jt*=se),St.set(Gt,Vt,jt,se),Ut.equals(St)===!1&&(s.clearColor(Gt,Vt,jt,se),Ut.copy(St))},reset:function(){U=!1,At=null,Ut.set(-1,0,0,0)}}}function a(){let U=!1,St=null,At=null,Ut=null;return{setTest:function(Gt){Gt?L(s.DEPTH_TEST):D(s.DEPTH_TEST)},setMask:function(Gt){St!==Gt&&!U&&(s.depthMask(Gt),St=Gt)},setFunc:function(Gt){if(At!==Gt){switch(Gt){case lc:s.depthFunc(s.NEVER);break;case cc:s.depthFunc(s.ALWAYS);break;case hc:s.depthFunc(s.LESS);break;case ds:s.depthFunc(s.LEQUAL);break;case dc:s.depthFunc(s.EQUAL);break;case uc:s.depthFunc(s.GEQUAL);break;case fc:s.depthFunc(s.GREATER);break;case pc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}At=Gt}},setLocked:function(Gt){U=Gt},setClear:function(Gt){Ut!==Gt&&(s.clearDepth(Gt),Ut=Gt)},reset:function(){U=!1,St=null,At=null,Ut=null}}}function r(){let U=!1,St=null,At=null,Ut=null,Gt=null,Vt=null,jt=null,se=null,ae=null;return{setTest:function(Zt){U||(Zt?L(s.STENCIL_TEST):D(s.STENCIL_TEST))},setMask:function(Zt){St!==Zt&&!U&&(s.stencilMask(Zt),St=Zt)},setFunc:function(Zt,he,Ke){(At!==Zt||Ut!==he||Gt!==Ke)&&(s.stencilFunc(Zt,he,Ke),At=Zt,Ut=he,Gt=Ke)},setOp:function(Zt,he,Ke){(Vt!==Zt||jt!==he||se!==Ke)&&(s.stencilOp(Zt,he,Ke),Vt=Zt,jt=he,se=Ke)},setLocked:function(Zt){U=Zt},setClear:function(Zt){ae!==Zt&&(s.clearStencil(Zt),ae=Zt)},reset:function(){U=!1,St=null,At=null,Ut=null,Gt=null,Vt=null,jt=null,se=null,ae=null}}}const o=new n,l=new a,c=new r,u=new WeakMap,f=new WeakMap;let p={},m={},T=new WeakMap,y=[],h=null,d=!1,_=null,g=null,v=null,E=null,x=null,S=null,N=null,M=new Jt(0,0,0),A=0,G=!1,z=null,q=null,R=null,B=null,$=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=J>=1):k.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=J>=2);let Y=null,Z={};const F=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),st=new ye().fromArray(F),yt=new ye().fromArray(Q);function Ct(U,St,At,Ut){const Gt=new Uint8Array(4),Vt=s.createTexture();s.bindTexture(U,Vt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let jt=0;jt<At;jt++)i&&(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)?s.texImage3D(St,0,s.RGBA,1,1,Ut,0,s.RGBA,s.UNSIGNED_BYTE,Gt):s.texImage2D(St+jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Gt);return Vt}const Rt={};Rt[s.TEXTURE_2D]=Ct(s.TEXTURE_2D,s.TEXTURE_2D,1),Rt[s.TEXTURE_CUBE_MAP]=Ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Rt[s.TEXTURE_2D_ARRAY]=Ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Rt[s.TEXTURE_3D]=Ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),L(s.DEPTH_TEST),l.setFunc(ds),mt(!1),P(ja),L(s.CULL_FACE),gt(vi);function L(U){p[U]!==!0&&(s.enable(U),p[U]=!0)}function D(U){p[U]!==!1&&(s.disable(U),p[U]=!1)}function W(U,St){return m[U]!==St?(s.bindFramebuffer(U,St),m[U]=St,i&&(U===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=St),U===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=St)),!0):!1}function C(U,St){let At=y,Ut=!1;if(U)if(At=T.get(St),At===void 0&&(At=[],T.set(St,At)),U.isWebGLMultipleRenderTargets){const Gt=U.texture;if(At.length!==Gt.length||At[0]!==s.COLOR_ATTACHMENT0){for(let Vt=0,jt=Gt.length;Vt<jt;Vt++)At[Vt]=s.COLOR_ATTACHMENT0+Vt;At.length=Gt.length,Ut=!0}}else At[0]!==s.COLOR_ATTACHMENT0&&(At[0]=s.COLOR_ATTACHMENT0,Ut=!0);else At[0]!==s.BACK&&(At[0]=s.BACK,Ut=!0);Ut&&(e.isWebGL2?s.drawBuffers(At):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(At))}function K(U){return h!==U?(s.useProgram(U),h=U,!0):!1}const it={[Ci]:s.FUNC_ADD,[$l]:s.FUNC_SUBTRACT,[jl]:s.FUNC_REVERSE_SUBTRACT};if(i)it[Ja]=s.MIN,it[Qa]=s.MAX;else{const U=t.get("EXT_blend_minmax");U!==null&&(it[Ja]=U.MIN_EXT,it[Qa]=U.MAX_EXT)}const nt={[Kl]:s.ZERO,[ql]:s.ONE,[Zl]:s.SRC_COLOR,[ua]:s.SRC_ALPHA,[nc]:s.SRC_ALPHA_SATURATE,[ec]:s.DST_COLOR,[Ql]:s.DST_ALPHA,[Jl]:s.ONE_MINUS_SRC_COLOR,[fa]:s.ONE_MINUS_SRC_ALPHA,[ic]:s.ONE_MINUS_DST_COLOR,[tc]:s.ONE_MINUS_DST_ALPHA,[sc]:s.CONSTANT_COLOR,[ac]:s.ONE_MINUS_CONSTANT_COLOR,[oc]:s.CONSTANT_ALPHA,[rc]:s.ONE_MINUS_CONSTANT_ALPHA};function gt(U,St,At,Ut,Gt,Vt,jt,se,ae,Zt){if(U===vi){d===!0&&(D(s.BLEND),d=!1);return}if(d===!1&&(L(s.BLEND),d=!0),U!==Xl){if(U!==_||Zt!==G){if((g!==Ci||x!==Ci)&&(s.blendEquation(s.FUNC_ADD),g=Ci,x=Ci),Zt)switch(U){case cn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ka:s.blendFunc(s.ONE,s.ONE);break;case qa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Za:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case cn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ka:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case qa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Za:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,E=null,S=null,N=null,M.set(0,0,0),A=0,_=U,G=Zt}return}Gt=Gt||St,Vt=Vt||At,jt=jt||Ut,(St!==g||Gt!==x)&&(s.blendEquationSeparate(it[St],it[Gt]),g=St,x=Gt),(At!==v||Ut!==E||Vt!==S||jt!==N)&&(s.blendFuncSeparate(nt[At],nt[Ut],nt[Vt],nt[jt]),v=At,E=Ut,S=Vt,N=jt),(se.equals(M)===!1||ae!==A)&&(s.blendColor(se.r,se.g,se.b,ae),M.copy(se),A=ae),_=U,G=!1}function vt(U,St){U.side===oi?D(s.CULL_FACE):L(s.CULL_FACE);let At=U.side===Le;St&&(At=!At),mt(At),U.blending===cn&&U.transparent===!1?gt(vi):gt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);const Ut=U.stencilWrite;c.setTest(Ut),Ut&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),j(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?L(s.SAMPLE_ALPHA_TO_COVERAGE):D(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(U){z!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),z=U)}function P(U){U!==Vl?(L(s.CULL_FACE),U!==q&&(U===ja?s.cullFace(s.BACK):U===Wl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):D(s.CULL_FACE),q=U}function b(U){U!==R&&(H&&s.lineWidth(U),R=U)}function j(U,St,At){U?(L(s.POLYGON_OFFSET_FILL),(B!==St||$!==At)&&(s.polygonOffset(St,At),B=St,$=At)):D(s.POLYGON_OFFSET_FILL)}function dt(U){U?L(s.SCISSOR_TEST):D(s.SCISSOR_TEST)}function ut(U){U===void 0&&(U=s.TEXTURE0+V-1),Y!==U&&(s.activeTexture(U),Y=U)}function lt(U,St,At){At===void 0&&(Y===null?At=s.TEXTURE0+V-1:At=Y);let Ut=Z[At];Ut===void 0&&(Ut={type:void 0,texture:void 0},Z[At]=Ut),(Ut.type!==U||Ut.texture!==St)&&(Y!==At&&(s.activeTexture(At),Y=At),s.bindTexture(U,St||Rt[U]),Ut.type=U,Ut.texture=St)}function _t(){const U=Z[Y];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function pt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function I(U){st.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),st.copy(U))}function Mt(U){yt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),yt.copy(U))}function Et(U,St){let At=f.get(St);At===void 0&&(At=new WeakMap,f.set(St,At));let Ut=At.get(U);Ut===void 0&&(Ut=s.getUniformBlockIndex(St,U.name),At.set(U,Ut))}function Tt(U,St){const Ut=f.get(St).get(U);u.get(St)!==Ut&&(s.uniformBlockBinding(St,Ut,U.__bindingPointIndex),u.set(St,Ut))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},Y=null,Z={},m={},T=new WeakMap,y=[],h=null,d=!1,_=null,g=null,v=null,E=null,x=null,S=null,N=null,M=new Jt(0,0,0),A=0,G=!1,z=null,q=null,R=null,B=null,$=null,st.set(0,0,s.canvas.width,s.canvas.height),yt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:L,disable:D,bindFramebuffer:W,drawBuffers:C,useProgram:K,setBlending:gt,setMaterial:vt,setFlipSided:mt,setCullFace:P,setLineWidth:b,setPolygonOffset:j,setScissorTest:dt,activeTexture:ut,bindTexture:lt,unbindTexture:_t,compressedTexImage2D:pt,compressedTexImage3D:ht,texImage2D:Pt,texImage3D:bt,updateUBOMapping:Et,uniformBlockBinding:Tt,texStorage2D:Nt,texStorage3D:Dt,texSubImage2D:xt,texSubImage3D:wt,compressedTexSubImage2D:at,compressedTexSubImage3D:It,scissor:I,viewport:Mt,reset:ft}}function Vp(s,t,e,i,n,a,r){const o=n.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,b){return m?new OffscreenCanvas(P,b):gs("canvas")}function y(P,b,j,dt){let ut=1;if((P.width>dt||P.height>dt)&&(ut=dt/Math.max(P.width,P.height)),ut<1||b===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const lt=b?Ta:Math.floor,_t=lt(ut*P.width),pt=lt(ut*P.height);f===void 0&&(f=T(_t,pt));const ht=j?T(_t,pt):f;return ht.width=_t,ht.height=pt,ht.getContext("2d").drawImage(P,0,0,_t,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+_t+"x"+pt+")."),ht}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function h(P){return Ro(P.width)&&Ro(P.height)}function d(P){return o?!1:P.wrapS!==$e||P.wrapT!==$e||P.minFilter!==Ce&&P.minFilter!==Ge}function _(P,b){return P.generateMipmaps&&b&&P.minFilter!==Ce&&P.minFilter!==Ge}function g(P){s.generateMipmap(P)}function v(P,b,j,dt,ut=!1){if(o===!1)return b;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let lt=b;if(b===s.RED&&(j===s.FLOAT&&(lt=s.R32F),j===s.HALF_FLOAT&&(lt=s.R16F),j===s.UNSIGNED_BYTE&&(lt=s.R8)),b===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(lt=s.R8UI),j===s.UNSIGNED_SHORT&&(lt=s.R16UI),j===s.UNSIGNED_INT&&(lt=s.R32UI),j===s.BYTE&&(lt=s.R8I),j===s.SHORT&&(lt=s.R16I),j===s.INT&&(lt=s.R32I)),b===s.RG&&(j===s.FLOAT&&(lt=s.RG32F),j===s.HALF_FLOAT&&(lt=s.RG16F),j===s.UNSIGNED_BYTE&&(lt=s.RG8)),b===s.RGBA){const _t=ut?us:te.getTransfer(dt);j===s.FLOAT&&(lt=s.RGBA32F),j===s.HALF_FLOAT&&(lt=s.RGBA16F),j===s.UNSIGNED_BYTE&&(lt=_t===ne?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(lt=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(lt=s.RGB5_A1)}return(lt===s.R16F||lt===s.R32F||lt===s.RG16F||lt===s.RG32F||lt===s.RGBA16F||lt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function E(P,b,j){return _(P,j)===!0||P.isFramebufferTexture&&P.minFilter!==Ce&&P.minFilter!==Ge?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function x(P){return P===Ce||P===to||P===ws?s.NEAREST:s.LINEAR}function S(P){const b=P.target;b.removeEventListener("dispose",S),M(b),b.isVideoTexture&&u.delete(b)}function N(P){const b=P.target;b.removeEventListener("dispose",N),G(b)}function M(P){const b=i.get(P);if(b.__webglInit===void 0)return;const j=P.source,dt=p.get(j);if(dt){const ut=dt[b.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&A(P),Object.keys(dt).length===0&&p.delete(j)}i.remove(P)}function A(P){const b=i.get(P);s.deleteTexture(b.__webglTexture);const j=P.source,dt=p.get(j);delete dt[b.__cacheKey],r.memory.textures--}function G(P){const b=P.texture,j=i.get(P),dt=i.get(b);if(dt.__webglTexture!==void 0&&(s.deleteTexture(dt.__webglTexture),r.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(j.__webglFramebuffer[ut]))for(let lt=0;lt<j.__webglFramebuffer[ut].length;lt++)s.deleteFramebuffer(j.__webglFramebuffer[ut][lt]);else s.deleteFramebuffer(j.__webglFramebuffer[ut]);j.__webglDepthbuffer&&s.deleteRenderbuffer(j.__webglDepthbuffer[ut])}else{if(Array.isArray(j.__webglFramebuffer))for(let ut=0;ut<j.__webglFramebuffer.length;ut++)s.deleteFramebuffer(j.__webglFramebuffer[ut]);else s.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&s.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&s.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ut=0;ut<j.__webglColorRenderbuffer.length;ut++)j.__webglColorRenderbuffer[ut]&&s.deleteRenderbuffer(j.__webglColorRenderbuffer[ut]);j.__webglDepthRenderbuffer&&s.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ut=0,lt=b.length;ut<lt;ut++){const _t=i.get(b[ut]);_t.__webglTexture&&(s.deleteTexture(_t.__webglTexture),r.memory.textures--),i.remove(b[ut])}i.remove(b),i.remove(P)}let z=0;function q(){z=0}function R(){const P=z;return P>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+n.maxTextures),z+=1,P}function B(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function $(P,b){const j=i.get(P);if(P.isVideoTexture&&vt(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const dt=P.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(j,P,b);return}}e.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+b)}function V(P,b){const j=i.get(P);if(P.version>0&&j.__version!==P.version){st(j,P,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+b)}function H(P,b){const j=i.get(P);if(P.version>0&&j.__version!==P.version){st(j,P,b);return}e.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+b)}function J(P,b){const j=i.get(P);if(P.version>0&&j.__version!==P.version){yt(j,P,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+b)}const k={[ga]:s.REPEAT,[$e]:s.CLAMP_TO_EDGE,[va]:s.MIRRORED_REPEAT},Y={[Ce]:s.NEAREST,[to]:s.NEAREST_MIPMAP_NEAREST,[ws]:s.NEAREST_MIPMAP_LINEAR,[Ge]:s.LINEAR,[Sc]:s.LINEAR_MIPMAP_NEAREST,[Ln]:s.LINEAR_MIPMAP_LINEAR},Z={[Nc]:s.NEVER,[kc]:s.ALWAYS,[zc]:s.LESS,[Wr]:s.LEQUAL,[Uc]:s.EQUAL,[Bc]:s.GEQUAL,[Fc]:s.GREATER,[Gc]:s.NOTEQUAL};function F(P,b,j){if(j?(s.texParameteri(P,s.TEXTURE_WRAP_S,k[b.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,k[b.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,k[b.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Y[b.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Y[b.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==$e||b.wrapT!==$e)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,x(b.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,x(b.minFilter)),b.minFilter!==Ce&&b.minFilter!==Ge&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Z[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const dt=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Ce||b.minFilter!==ws&&b.minFilter!==Ln||b.type===gi&&t.has("OES_texture_float_linear")===!1||o===!1&&b.type===In&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(s.texParameterf(P,dt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function Q(P,b){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",S));const dt=b.source;let ut=p.get(dt);ut===void 0&&(ut={},p.set(dt,ut));const lt=B(b);if(lt!==P.__cacheKey){ut[lt]===void 0&&(ut[lt]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,j=!0),ut[lt].usedTimes++;const _t=ut[P.__cacheKey];_t!==void 0&&(ut[P.__cacheKey].usedTimes--,_t.usedTimes===0&&A(b)),P.__cacheKey=lt,P.__webglTexture=ut[lt].texture}return j}function st(P,b,j){let dt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=s.TEXTURE_3D);const ut=Q(P,b),lt=b.source;e.bindTexture(dt,P.__webglTexture,s.TEXTURE0+j);const _t=i.get(lt);if(lt.version!==_t.__version||ut===!0){e.activeTexture(s.TEXTURE0+j);const pt=te.getPrimaries(te.workingColorSpace),ht=b.colorSpace===ke?null:te.getPrimaries(b.colorSpace),xt=b.colorSpace===ke||pt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const wt=d(b)&&h(b.image)===!1;let at=y(b.image,wt,!1,n.maxTextureSize);at=mt(b,at);const It=h(at)||o,Nt=a.convert(b.format,b.colorSpace);let Dt=a.convert(b.type),Pt=v(b.internalFormat,Nt,Dt,b.colorSpace,b.isVideoTexture);F(dt,b,It);let bt;const I=b.mipmaps,Mt=o&&b.isVideoTexture!==!0&&Pt!==kr,Et=_t.__version===void 0||ut===!0,Tt=E(b,at,It);if(b.isDepthTexture)Pt=s.DEPTH_COMPONENT,o?b.type===gi?Pt=s.DEPTH_COMPONENT32F:b.type===mi?Pt=s.DEPTH_COMPONENT24:b.type===Ri?Pt=s.DEPTH24_STENCIL8:Pt=s.DEPTH_COMPONENT16:b.type===gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Li&&Pt===s.DEPTH_COMPONENT&&b.type!==Pa&&b.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=mi,Dt=a.convert(b.type)),b.format===fn&&Pt===s.DEPTH_COMPONENT&&(Pt=s.DEPTH_STENCIL,b.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ri,Dt=a.convert(b.type))),Et&&(Mt?e.texStorage2D(s.TEXTURE_2D,1,Pt,at.width,at.height):e.texImage2D(s.TEXTURE_2D,0,Pt,at.width,at.height,0,Nt,Dt,null));else if(b.isDataTexture)if(I.length>0&&It){Mt&&Et&&e.texStorage2D(s.TEXTURE_2D,Tt,Pt,I[0].width,I[0].height);for(let ft=0,U=I.length;ft<U;ft++)bt=I[ft],Mt?e.texSubImage2D(s.TEXTURE_2D,ft,0,0,bt.width,bt.height,Nt,Dt,bt.data):e.texImage2D(s.TEXTURE_2D,ft,Pt,bt.width,bt.height,0,Nt,Dt,bt.data);b.generateMipmaps=!1}else Mt?(Et&&e.texStorage2D(s.TEXTURE_2D,Tt,Pt,at.width,at.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,at.width,at.height,Nt,Dt,at.data)):e.texImage2D(s.TEXTURE_2D,0,Pt,at.width,at.height,0,Nt,Dt,at.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Mt&&Et&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Tt,Pt,I[0].width,I[0].height,at.depth);for(let ft=0,U=I.length;ft<U;ft++)bt=I[ft],b.format!==je?Nt!==null?Mt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,bt.width,bt.height,at.depth,Nt,bt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ft,Pt,bt.width,bt.height,at.depth,0,bt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,bt.width,bt.height,at.depth,Nt,Dt,bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ft,Pt,bt.width,bt.height,at.depth,0,Nt,Dt,bt.data)}else{Mt&&Et&&e.texStorage2D(s.TEXTURE_2D,Tt,Pt,I[0].width,I[0].height);for(let ft=0,U=I.length;ft<U;ft++)bt=I[ft],b.format!==je?Nt!==null?Mt?e.compressedTexSubImage2D(s.TEXTURE_2D,ft,0,0,bt.width,bt.height,Nt,bt.data):e.compressedTexImage2D(s.TEXTURE_2D,ft,Pt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?e.texSubImage2D(s.TEXTURE_2D,ft,0,0,bt.width,bt.height,Nt,Dt,bt.data):e.texImage2D(s.TEXTURE_2D,ft,Pt,bt.width,bt.height,0,Nt,Dt,bt.data)}else if(b.isDataArrayTexture)Mt?(Et&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Tt,Pt,at.width,at.height,at.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Nt,Dt,at.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,at.width,at.height,at.depth,0,Nt,Dt,at.data);else if(b.isData3DTexture)Mt?(Et&&e.texStorage3D(s.TEXTURE_3D,Tt,Pt,at.width,at.height,at.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Nt,Dt,at.data)):e.texImage3D(s.TEXTURE_3D,0,Pt,at.width,at.height,at.depth,0,Nt,Dt,at.data);else if(b.isFramebufferTexture){if(Et)if(Mt)e.texStorage2D(s.TEXTURE_2D,Tt,Pt,at.width,at.height);else{let ft=at.width,U=at.height;for(let St=0;St<Tt;St++)e.texImage2D(s.TEXTURE_2D,St,Pt,ft,U,0,Nt,Dt,null),ft>>=1,U>>=1}}else if(I.length>0&&It){Mt&&Et&&e.texStorage2D(s.TEXTURE_2D,Tt,Pt,I[0].width,I[0].height);for(let ft=0,U=I.length;ft<U;ft++)bt=I[ft],Mt?e.texSubImage2D(s.TEXTURE_2D,ft,0,0,Nt,Dt,bt):e.texImage2D(s.TEXTURE_2D,ft,Pt,Nt,Dt,bt);b.generateMipmaps=!1}else Mt?(Et&&e.texStorage2D(s.TEXTURE_2D,Tt,Pt,at.width,at.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Nt,Dt,at)):e.texImage2D(s.TEXTURE_2D,0,Pt,Nt,Dt,at);_(b,It)&&g(dt),_t.__version=lt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function yt(P,b,j){if(b.image.length!==6)return;const dt=Q(P,b),ut=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+j);const lt=i.get(ut);if(ut.version!==lt.__version||dt===!0){e.activeTexture(s.TEXTURE0+j);const _t=te.getPrimaries(te.workingColorSpace),pt=b.colorSpace===ke?null:te.getPrimaries(b.colorSpace),ht=b.colorSpace===ke||_t===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const xt=b.isCompressedTexture||b.image[0].isCompressedTexture,wt=b.image[0]&&b.image[0].isDataTexture,at=[];for(let ft=0;ft<6;ft++)!xt&&!wt?at[ft]=y(b.image[ft],!1,!0,n.maxCubemapSize):at[ft]=wt?b.image[ft].image:b.image[ft],at[ft]=mt(b,at[ft]);const It=at[0],Nt=h(It)||o,Dt=a.convert(b.format,b.colorSpace),Pt=a.convert(b.type),bt=v(b.internalFormat,Dt,Pt,b.colorSpace),I=o&&b.isVideoTexture!==!0,Mt=lt.__version===void 0||dt===!0;let Et=E(b,It,Nt);F(s.TEXTURE_CUBE_MAP,b,Nt);let Tt;if(xt){I&&Mt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Et,bt,It.width,It.height);for(let ft=0;ft<6;ft++){Tt=at[ft].mipmaps;for(let U=0;U<Tt.length;U++){const St=Tt[U];b.format!==je?Dt!==null?I?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,U,0,0,St.width,St.height,Dt,St.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,U,bt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,U,0,0,St.width,St.height,Dt,Pt,St.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,U,bt,St.width,St.height,0,Dt,Pt,St.data)}}}else{Tt=b.mipmaps,I&&Mt&&(Tt.length>0&&Et++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Et,bt,at[0].width,at[0].height));for(let ft=0;ft<6;ft++)if(wt){I?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,at[ft].width,at[ft].height,Dt,Pt,at[ft].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,bt,at[ft].width,at[ft].height,0,Dt,Pt,at[ft].data);for(let U=0;U<Tt.length;U++){const At=Tt[U].image[ft].image;I?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,U+1,0,0,At.width,At.height,Dt,Pt,At.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,U+1,bt,At.width,At.height,0,Dt,Pt,At.data)}}else{I?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Dt,Pt,at[ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,bt,Dt,Pt,at[ft]);for(let U=0;U<Tt.length;U++){const St=Tt[U];I?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,U+1,0,0,Dt,Pt,St.image[ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,U+1,bt,Dt,Pt,St.image[ft])}}}_(b,Nt)&&g(s.TEXTURE_CUBE_MAP),lt.__version=ut.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Ct(P,b,j,dt,ut,lt){const _t=a.convert(j.format,j.colorSpace),pt=a.convert(j.type),ht=v(j.internalFormat,_t,pt,j.colorSpace);if(!i.get(b).__hasExternalTextures){const wt=Math.max(1,b.width>>lt),at=Math.max(1,b.height>>lt);ut===s.TEXTURE_3D||ut===s.TEXTURE_2D_ARRAY?e.texImage3D(ut,lt,ht,wt,at,b.depth,0,_t,pt,null):e.texImage2D(ut,lt,ht,wt,at,0,_t,pt,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),gt(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,ut,i.get(j).__webglTexture,0,nt(b)):(ut===s.TEXTURE_2D||ut>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,dt,ut,i.get(j).__webglTexture,lt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(P,b,j){if(s.bindRenderbuffer(s.RENDERBUFFER,P),b.depthBuffer&&!b.stencilBuffer){let dt=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(j||gt(b)){const ut=b.depthTexture;ut&&ut.isDepthTexture&&(ut.type===gi?dt=s.DEPTH_COMPONENT32F:ut.type===mi&&(dt=s.DEPTH_COMPONENT24));const lt=nt(b);gt(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,dt,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,dt,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,dt,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(b.depthBuffer&&b.stencilBuffer){const dt=nt(b);j&&gt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,s.DEPTH24_STENCIL8,b.width,b.height):gt(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const dt=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ut=0;ut<dt.length;ut++){const lt=dt[ut],_t=a.convert(lt.format,lt.colorSpace),pt=a.convert(lt.type),ht=v(lt.internalFormat,_t,pt,lt.colorSpace),xt=nt(b);j&&gt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,ht,b.width,b.height):gt(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt,ht,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ht,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function L(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);const dt=i.get(b.depthTexture).__webglTexture,ut=nt(b);if(b.depthTexture.format===Li)gt(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,dt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,dt,0);else if(b.depthTexture.format===fn)gt(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,dt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function D(P){const b=i.get(P),j=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");L(b.__webglFramebuffer,P)}else if(j){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]=s.createRenderbuffer(),Rt(b.__webglDepthbuffer[dt],P,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),Rt(b.__webglDepthbuffer,P,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function W(P,b,j){const dt=i.get(P);b!==void 0&&Ct(dt.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&D(P)}function C(P){const b=P.texture,j=i.get(P),dt=i.get(b);P.addEventListener("dispose",N),P.isWebGLMultipleRenderTargets!==!0&&(dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture()),dt.__version=b.version,r.memory.textures++);const ut=P.isWebGLCubeRenderTarget===!0,lt=P.isWebGLMultipleRenderTargets===!0,_t=h(P)||o;if(ut){j.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(o&&b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[pt]=[];for(let ht=0;ht<b.mipmaps.length;ht++)j.__webglFramebuffer[pt][ht]=s.createFramebuffer()}else j.__webglFramebuffer[pt]=s.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let pt=0;pt<b.mipmaps.length;pt++)j.__webglFramebuffer[pt]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(lt)if(n.drawBuffers){const pt=P.texture;for(let ht=0,xt=pt.length;ht<xt;ht++){const wt=i.get(pt[ht]);wt.__webglTexture===void 0&&(wt.__webglTexture=s.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&gt(P)===!1){const pt=lt?b:[b];j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ht=0;ht<pt.length;ht++){const xt=pt[ht];j.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[ht]);const wt=a.convert(xt.format,xt.colorSpace),at=a.convert(xt.type),It=v(xt.internalFormat,wt,at,xt.colorSpace,P.isXRRenderTarget===!0),Nt=nt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,It,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,j.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),Rt(j.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){e.bindTexture(s.TEXTURE_CUBE_MAP,dt.__webglTexture),F(s.TEXTURE_CUBE_MAP,b,_t);for(let pt=0;pt<6;pt++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let ht=0;ht<b.mipmaps.length;ht++)Ct(j.__webglFramebuffer[pt][ht],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ht);else Ct(j.__webglFramebuffer[pt],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);_(b,_t)&&g(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){const pt=P.texture;for(let ht=0,xt=pt.length;ht<xt;ht++){const wt=pt[ht],at=i.get(wt);e.bindTexture(s.TEXTURE_2D,at.__webglTexture),F(s.TEXTURE_2D,wt,_t),Ct(j.__webglFramebuffer,P,wt,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,0),_(wt,_t)&&g(s.TEXTURE_2D)}e.unbindTexture()}else{let pt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?pt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(pt,dt.__webglTexture),F(pt,b,_t),o&&b.mipmaps&&b.mipmaps.length>0)for(let ht=0;ht<b.mipmaps.length;ht++)Ct(j.__webglFramebuffer[ht],P,b,s.COLOR_ATTACHMENT0,pt,ht);else Ct(j.__webglFramebuffer,P,b,s.COLOR_ATTACHMENT0,pt,0);_(b,_t)&&g(pt),e.unbindTexture()}P.depthBuffer&&D(P)}function K(P){const b=h(P)||o,j=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let dt=0,ut=j.length;dt<ut;dt++){const lt=j[dt];if(_(lt,b)){const _t=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,pt=i.get(lt).__webglTexture;e.bindTexture(_t,pt),g(_t),e.unbindTexture()}}}function it(P){if(o&&P.samples>0&&gt(P)===!1){const b=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],j=P.width,dt=P.height;let ut=s.COLOR_BUFFER_BIT;const lt=[],_t=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=i.get(P),ht=P.isWebGLMultipleRenderTargets===!0;if(ht)for(let xt=0;xt<b.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let xt=0;xt<b.length;xt++){lt.push(s.COLOR_ATTACHMENT0+xt),P.depthBuffer&&lt.push(_t);const wt=pt.__ignoreDepthValues!==void 0?pt.__ignoreDepthValues:!1;if(wt===!1&&(P.depthBuffer&&(ut|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ut|=s.STENCIL_BUFFER_BIT)),ht&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,pt.__webglColorRenderbuffer[xt]),wt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[_t]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_t])),ht){const at=i.get(b[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,at,0)}s.blitFramebuffer(0,0,j,dt,0,0,j,dt,ut,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let xt=0;xt<b.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,pt.__webglColorRenderbuffer[xt]);const wt=i.get(b[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,wt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}}function nt(P){return Math.min(n.maxSamples,P.samples)}function gt(P){const b=i.get(P);return o&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function vt(P){const b=r.render.frame;u.get(P)!==b&&(u.set(P,b),P.update())}function mt(P,b){const j=P.colorSpace,dt=P.format,ut=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===ya||j!==li&&j!==ke&&(te.getTransfer(j)===ne?o===!1?t.has("EXT_sRGB")===!0&&dt===je?(P.format=ya,P.minFilter=Ge,P.generateMipmaps=!1):b=Xr.sRGBToLinear(b):(dt!==je||ut!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),b}this.allocateTextureUnit=R,this.resetTextureUnits=q,this.setTexture2D=$,this.setTexture2DArray=V,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=W,this.setupRenderTarget=C,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=D,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=gt}function Wp(s,t,e){const i=e.isWebGL2;function n(a,r=ke){let o;const l=te.getTransfer(r);if(a===_i)return s.UNSIGNED_BYTE;if(a===zr)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Ur)return s.UNSIGNED_SHORT_5_5_5_1;if(a===xc)return s.BYTE;if(a===bc)return s.SHORT;if(a===Pa)return s.UNSIGNED_SHORT;if(a===Nr)return s.INT;if(a===mi)return s.UNSIGNED_INT;if(a===gi)return s.FLOAT;if(a===In)return i?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===Ac)return s.ALPHA;if(a===je)return s.RGBA;if(a===Pc)return s.LUMINANCE;if(a===Cc)return s.LUMINANCE_ALPHA;if(a===Li)return s.DEPTH_COMPONENT;if(a===fn)return s.DEPTH_STENCIL;if(a===ya)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===wc)return s.RED;if(a===Fr)return s.RED_INTEGER;if(a===Rc)return s.RG;if(a===Gr)return s.RG_INTEGER;if(a===Br)return s.RGBA_INTEGER;if(a===Rs||a===Ls||a===Is||a===Ds)if(l===ne)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Rs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ls)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Is)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ds)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Rs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ls)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Is)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ds)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===eo||a===io||a===no||a===so)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===eo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===io)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===no)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===so)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===kr)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===ao||a===oo)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(a===ao)return l===ne?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===oo)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===ro||a===lo||a===co||a===ho||a===uo||a===fo||a===po||a===mo||a===go||a===vo||a===yo||a===_o||a===To||a===Eo)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(a===ro)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===lo)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===co)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ho)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===uo)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===fo)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===po)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===mo)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===go)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===vo)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===yo)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===_o)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===To)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Eo)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Os||a===Mo||a===So)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(a===Os)return l===ne?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Mo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===So)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Lc||a===xo||a===bo||a===Ao)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(a===Os)return o.COMPRESSED_RED_RGTC1_EXT;if(a===xo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===bo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Ao)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ri?i?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:n}}class Yp extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Sn extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xp={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const y of t.hand.values()){const h=e.getJointPose(y,i),d=this._getHandJoint(c,y);h!==null&&(d.matrix.fromArray(h.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=h.radius),d.visible=h!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=u.position.distanceTo(f.position),m=.02,T=.005;c.inputState.pinching&&p>m+T?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-T&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xp)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Sn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class $p extends Ui{constructor(t,e){super();const i=this;let n=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,f=null,p=null,m=null,T=null;const y=e.getContextAttributes();let h=null,d=null;const _=[],g=[],v=new kt;let E=null;const x=new Be;x.layers.enable(1),x.viewport=new ye;const S=new Be;S.layers.enable(2),S.viewport=new ye;const N=[x,S],M=new Yp;M.layers.enable(1),M.layers.enable(2);let A=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let Q=_[F];return Q===void 0&&(Q=new sa,_[F]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(F){let Q=_[F];return Q===void 0&&(Q=new sa,_[F]=Q),Q.getGripSpace()},this.getHand=function(F){let Q=_[F];return Q===void 0&&(Q=new sa,_[F]=Q),Q.getHandSpace()};function z(F){const Q=g.indexOf(F.inputSource);if(Q===-1)return;const st=_[Q];st!==void 0&&(st.update(F.inputSource,F.frame,c||r),st.dispatchEvent({type:F.type,data:F.inputSource}))}function q(){n.removeEventListener("select",z),n.removeEventListener("selectstart",z),n.removeEventListener("selectend",z),n.removeEventListener("squeeze",z),n.removeEventListener("squeezestart",z),n.removeEventListener("squeezeend",z),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",R);for(let F=0;F<_.length;F++){const Q=g[F];Q!==null&&(g[F]=null,_[F].disconnect(Q))}A=null,G=null,t.setRenderTarget(h),m=null,p=null,f=null,n=null,d=null,Z.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(v.width,v.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){a=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return T},this.getSession=function(){return n},this.setSession=async function(F){if(n=F,n!==null){if(h=t.getRenderTarget(),n.addEventListener("select",z),n.addEventListener("selectstart",z),n.addEventListener("selectend",z),n.addEventListener("squeeze",z),n.addEventListener("squeezestart",z),n.addEventListener("squeezeend",z),n.addEventListener("end",q),n.addEventListener("inputsourceschange",R),y.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(v),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Q={antialias:n.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(n,e,Q),n.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Oi(m.framebufferWidth,m.framebufferHeight,{format:je,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let Q=null,st=null,yt=null;y.depth&&(yt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=y.stencil?fn:Li,st=y.stencil?Ri:mi);const Ct={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:a};f=new XRWebGLBinding(n,e),p=f.createProjectionLayer(Ct),n.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),d=new Oi(p.textureWidth,p.textureHeight,{format:je,type:_i,depthTexture:new nl(p.textureWidth,p.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});const Rt=t.properties.get(d);Rt.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await n.requestReferenceSpace(o),Z.setContext(n),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function R(F){for(let Q=0;Q<F.removed.length;Q++){const st=F.removed[Q],yt=g.indexOf(st);yt>=0&&(g[yt]=null,_[yt].disconnect(st))}for(let Q=0;Q<F.added.length;Q++){const st=F.added[Q];let yt=g.indexOf(st);if(yt===-1){for(let Rt=0;Rt<_.length;Rt++)if(Rt>=g.length){g.push(st),yt=Rt;break}else if(g[Rt]===null){g[Rt]=st,yt=Rt;break}if(yt===-1)break}const Ct=_[yt];Ct&&Ct.connect(st)}}const B=new tt,$=new tt;function V(F,Q,st){B.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(st.matrixWorld);const yt=B.distanceTo($),Ct=Q.projectionMatrix.elements,Rt=st.projectionMatrix.elements,L=Ct[14]/(Ct[10]-1),D=Ct[14]/(Ct[10]+1),W=(Ct[9]+1)/Ct[5],C=(Ct[9]-1)/Ct[5],K=(Ct[8]-1)/Ct[0],it=(Rt[8]+1)/Rt[0],nt=L*K,gt=L*it,vt=yt/(-K+it),mt=vt*-K;Q.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(mt),F.translateZ(vt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const P=L+vt,b=D+vt,j=nt-mt,dt=gt+(yt-mt),ut=W*D/b*P,lt=C*D/b*P;F.projectionMatrix.makePerspective(j,dt,ut,lt,P,b),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function H(F,Q){Q===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(Q.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(n===null)return;M.near=S.near=x.near=F.near,M.far=S.far=x.far=F.far,(A!==M.near||G!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,G=M.far);const Q=F.parent,st=M.cameras;H(M,Q);for(let yt=0;yt<st.length;yt++)H(st[yt],Q);st.length===2?V(M,x,S):M.projectionMatrix.copy(x.projectionMatrix),J(F,M,Q)};function J(F,Q,st){st===null?F.matrix.copy(Q.matrixWorld):(F.matrix.copy(st.matrixWorld),F.matrix.invert(),F.matrix.multiply(Q.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(Q.projectionMatrix),F.projectionMatrixInverse.copy(Q.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=_a*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(F){l=F,p!==null&&(p.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)};let k=null;function Y(F,Q){if(u=Q.getViewerPose(c||r),T=Q,u!==null){const st=u.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let yt=!1;st.length!==M.cameras.length&&(M.cameras.length=0,yt=!0);for(let Ct=0;Ct<st.length;Ct++){const Rt=st[Ct];let L=null;if(m!==null)L=m.getViewport(Rt);else{const W=f.getViewSubImage(p,Rt);L=W.viewport,Ct===0&&(t.setRenderTargetTextures(d,W.colorTexture,p.ignoreDepthValues?void 0:W.depthStencilTexture),t.setRenderTarget(d))}let D=N[Ct];D===void 0&&(D=new Be,D.layers.enable(Ct),D.viewport=new ye,N[Ct]=D),D.matrix.fromArray(Rt.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Rt.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(L.x,L.y,L.width,L.height),Ct===0&&(M.matrix.copy(D.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),yt===!0&&M.cameras.push(D)}}for(let st=0;st<_.length;st++){const yt=g[st],Ct=_[st];yt!==null&&Ct!==void 0&&Ct.update(yt,Q,c||r)}k&&k(F,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),T=null}const Z=new el;Z.setAnimationLoop(Y),this.setAnimationLoop=function(F){k=F},this.dispose=function(){}}}function jp(s,t){function e(h,d){h.matrixAutoUpdate===!0&&h.updateMatrix(),d.value.copy(h.matrix)}function i(h,d){d.color.getRGB(h.fogColor.value,Jr(s)),d.isFog?(h.fogNear.value=d.near,h.fogFar.value=d.far):d.isFogExp2&&(h.fogDensity.value=d.density)}function n(h,d,_,g,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(h,d):d.isMeshToonMaterial?(a(h,d),f(h,d)):d.isMeshPhongMaterial?(a(h,d),u(h,d)):d.isMeshStandardMaterial?(a(h,d),p(h,d),d.isMeshPhysicalMaterial&&m(h,d,v)):d.isMeshMatcapMaterial?(a(h,d),T(h,d)):d.isMeshDepthMaterial?a(h,d):d.isMeshDistanceMaterial?(a(h,d),y(h,d)):d.isMeshNormalMaterial?a(h,d):d.isLineBasicMaterial?(r(h,d),d.isLineDashedMaterial&&o(h,d)):d.isPointsMaterial?l(h,d,_,g):d.isSpriteMaterial?c(h,d):d.isShadowMaterial?(h.color.value.copy(d.color),h.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(h,d){h.opacity.value=d.opacity,d.color&&h.diffuse.value.copy(d.color),d.emissive&&h.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(h.map.value=d.map,e(d.map,h.mapTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,e(d.alphaMap,h.alphaMapTransform)),d.bumpMap&&(h.bumpMap.value=d.bumpMap,e(d.bumpMap,h.bumpMapTransform),h.bumpScale.value=d.bumpScale,d.side===Le&&(h.bumpScale.value*=-1)),d.normalMap&&(h.normalMap.value=d.normalMap,e(d.normalMap,h.normalMapTransform),h.normalScale.value.copy(d.normalScale),d.side===Le&&h.normalScale.value.negate()),d.displacementMap&&(h.displacementMap.value=d.displacementMap,e(d.displacementMap,h.displacementMapTransform),h.displacementScale.value=d.displacementScale,h.displacementBias.value=d.displacementBias),d.emissiveMap&&(h.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,h.emissiveMapTransform)),d.specularMap&&(h.specularMap.value=d.specularMap,e(d.specularMap,h.specularMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest);const _=t.get(d).envMap;if(_&&(h.envMap.value=_,h.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=d.reflectivity,h.ior.value=d.ior,h.refractionRatio.value=d.refractionRatio),d.lightMap){h.lightMap.value=d.lightMap;const g=s._useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=d.lightMapIntensity*g,e(d.lightMap,h.lightMapTransform)}d.aoMap&&(h.aoMap.value=d.aoMap,h.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,h.aoMapTransform))}function r(h,d){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,d.map&&(h.map.value=d.map,e(d.map,h.mapTransform))}function o(h,d){h.dashSize.value=d.dashSize,h.totalSize.value=d.dashSize+d.gapSize,h.scale.value=d.scale}function l(h,d,_,g){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,h.size.value=d.size*_,h.scale.value=g*.5,d.map&&(h.map.value=d.map,e(d.map,h.uvTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,e(d.alphaMap,h.alphaMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest)}function c(h,d){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,h.rotation.value=d.rotation,d.map&&(h.map.value=d.map,e(d.map,h.mapTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,e(d.alphaMap,h.alphaMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest)}function u(h,d){h.specular.value.copy(d.specular),h.shininess.value=Math.max(d.shininess,1e-4)}function f(h,d){d.gradientMap&&(h.gradientMap.value=d.gradientMap)}function p(h,d){h.metalness.value=d.metalness,d.metalnessMap&&(h.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,h.metalnessMapTransform)),h.roughness.value=d.roughness,d.roughnessMap&&(h.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,h.roughnessMapTransform)),t.get(d).envMap&&(h.envMapIntensity.value=d.envMapIntensity)}function m(h,d,_){h.ior.value=d.ior,d.sheen>0&&(h.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),h.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(h.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,h.sheenColorMapTransform)),d.sheenRoughnessMap&&(h.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,h.sheenRoughnessMapTransform))),d.clearcoat>0&&(h.clearcoat.value=d.clearcoat,h.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(h.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,h.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(h.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Le&&h.clearcoatNormalScale.value.negate())),d.iridescence>0&&(h.iridescence.value=d.iridescence,h.iridescenceIOR.value=d.iridescenceIOR,h.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(h.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,h.iridescenceMapTransform)),d.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),d.transmission>0&&(h.transmission.value=d.transmission,h.transmissionSamplerMap.value=_.texture,h.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(h.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,h.transmissionMapTransform)),h.thickness.value=d.thickness,d.thicknessMap&&(h.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=d.attenuationDistance,h.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(h.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(h.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=d.specularIntensity,h.specularColor.value.copy(d.specularColor),d.specularColorMap&&(h.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,h.specularColorMapTransform)),d.specularIntensityMap&&(h.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,h.specularIntensityMapTransform))}function T(h,d){d.matcap&&(h.matcap.value=d.matcap)}function y(h,d){const _=t.get(d).light;h.referencePosition.value.setFromMatrixPosition(_.matrixWorld),h.nearDistance.value=_.shadow.camera.near,h.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Kp(s,t,e,i){let n={},a={},r=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const v=g.program;i.uniformBlockBinding(_,v)}function c(_,g){let v=n[_.id];v===void 0&&(T(_),v=u(_),n[_.id]=v,_.addEventListener("dispose",h));const E=g.program;i.updateUBOMapping(_,E);const x=t.render.frame;a[_.id]!==x&&(p(_),a[_.id]=x)}function u(_){const g=f();_.__bindingPointIndex=g;const v=s.createBuffer(),E=_.__size,x=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,E,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,g,v),v}function f(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){const g=n[_.id],v=_.uniforms,E=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,g);for(let x=0,S=v.length;x<S;x++){const N=Array.isArray(v[x])?v[x]:[v[x]];for(let M=0,A=N.length;M<A;M++){const G=N[M];if(m(G,x,M,E)===!0){const z=G.__offset,q=Array.isArray(G.value)?G.value:[G.value];let R=0;for(let B=0;B<q.length;B++){const $=q[B],V=y($);typeof $=="number"||typeof $=="boolean"?(G.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,z+R,G.__data)):$.isMatrix3?(G.__data[0]=$.elements[0],G.__data[1]=$.elements[1],G.__data[2]=$.elements[2],G.__data[3]=0,G.__data[4]=$.elements[3],G.__data[5]=$.elements[4],G.__data[6]=$.elements[5],G.__data[7]=0,G.__data[8]=$.elements[6],G.__data[9]=$.elements[7],G.__data[10]=$.elements[8],G.__data[11]=0):($.toArray(G.__data,R),R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(_,g,v,E){const x=_.value,S=g+"_"+v;if(E[S]===void 0)return typeof x=="number"||typeof x=="boolean"?E[S]=x:E[S]=x.clone(),!0;{const N=E[S];if(typeof x=="number"||typeof x=="boolean"){if(N!==x)return E[S]=x,!0}else if(N.equals(x)===!1)return N.copy(x),!0}return!1}function T(_){const g=_.uniforms;let v=0;const E=16;for(let S=0,N=g.length;S<N;S++){const M=Array.isArray(g[S])?g[S]:[g[S]];for(let A=0,G=M.length;A<G;A++){const z=M[A],q=Array.isArray(z.value)?z.value:[z.value];for(let R=0,B=q.length;R<B;R++){const $=q[R],V=y($),H=v%E;H!==0&&E-H<V.boundary&&(v+=E-H),z.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=V.storage}}}const x=v%E;return x>0&&(v+=E-x),_.__size=v,_.__cache={},this}function y(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function h(_){const g=_.target;g.removeEventListener("dispose",h);const v=r.indexOf(g.__bindingPointIndex);r.splice(v,1),s.deleteBuffer(n[g.id]),delete n[g.id],delete a[g.id]}function d(){for(const _ in n)s.deleteBuffer(n[_]);r=[],n={},a={}}return{bind:l,update:c,dispose:d}}class cl{constructor(t={}){const{canvas:e=Wc(),context:i=null,depth:n=!0,stencil:a=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=r;const m=new Uint32Array(4),T=new Int32Array(4);let y=null,h=null;const d=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this._useLegacyLights=!1,this.toneMapping=yi,this.toneMappingExposure=1;const g=this;let v=!1,E=0,x=0,S=null,N=-1,M=null;const A=new ye,G=new ye;let z=null;const q=new Jt(0);let R=0,B=e.width,$=e.height,V=1,H=null,J=null;const k=new ye(0,0,B,$),Y=new ye(0,0,B,$);let Z=!1;const F=new Ia;let Q=!1,st=!1,yt=null;const Ct=new fe,Rt=new kt,L=new tt,D={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function W(){return S===null?V:1}let C=i;function K(w,et){for(let rt=0;rt<w.length;rt++){const ct=w[rt],ot=e.getContext(ct,et);if(ot!==null)return ot}return null}try{const w={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ba}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",St,!1),C===null){const et=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&et.shift(),C=K(et,w),C===null)throw K(et)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&C instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let it,nt,gt,vt,mt,P,b,j,dt,ut,lt,_t,pt,ht,xt,wt,at,It,Nt,Dt,Pt,bt,I,Mt;function Et(){it=new af(C),nt=new Ju(C,it,t),it.init(nt),bt=new Wp(C,it,nt),gt=new Hp(C,it,nt),vt=new lf(C),mt=new Cp,P=new Vp(C,it,gt,mt,nt,bt,vt),b=new tf(g),j=new sf(g),dt=new mh(C,nt),I=new qu(C,it,dt,nt),ut=new of(C,dt,vt,I),lt=new uf(C,ut,dt,vt),Nt=new df(C,nt,P),wt=new Qu(mt),_t=new Pp(g,b,j,it,nt,I,wt),pt=new jp(g,mt),ht=new Rp,xt=new zp(it,nt),It=new Ku(g,b,j,gt,lt,p,l),at=new kp(g,lt,nt),Mt=new Kp(C,vt,nt,gt),Dt=new Zu(C,it,vt,nt),Pt=new rf(C,it,vt,nt),vt.programs=_t.programs,g.capabilities=nt,g.extensions=it,g.properties=mt,g.renderLists=ht,g.shadowMap=at,g.state=gt,g.info=vt}Et();const Tt=new $p(g,C);this.xr=Tt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const w=it.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=it.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(B,$,!1))},this.getSize=function(w){return w.set(B,$)},this.setSize=function(w,et,rt=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,$=et,e.width=Math.floor(w*V),e.height=Math.floor(et*V),rt===!0&&(e.style.width=w+"px",e.style.height=et+"px"),this.setViewport(0,0,w,et)},this.getDrawingBufferSize=function(w){return w.set(B*V,$*V).floor()},this.setDrawingBufferSize=function(w,et,rt){B=w,$=et,V=rt,e.width=Math.floor(w*rt),e.height=Math.floor(et*rt),this.setViewport(0,0,w,et)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(k)},this.setViewport=function(w,et,rt,ct){w.isVector4?k.set(w.x,w.y,w.z,w.w):k.set(w,et,rt,ct),gt.viewport(A.copy(k).multiplyScalar(V).floor())},this.getScissor=function(w){return w.copy(Y)},this.setScissor=function(w,et,rt,ct){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,et,rt,ct),gt.scissor(G.copy(Y).multiplyScalar(V).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(w){gt.setScissorTest(Z=w)},this.setOpaqueSort=function(w){H=w},this.setTransparentSort=function(w){J=w},this.getClearColor=function(w){return w.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(w=!0,et=!0,rt=!0){let ct=0;if(w){let ot=!1;if(S!==null){const zt=S.texture.format;ot=zt===Br||zt===Gr||zt===Fr}if(ot){const zt=S.texture.type,Ft=zt===_i||zt===mi||zt===Pa||zt===Ri||zt===zr||zt===Ur,Bt=It.getClearColor(),Ht=It.getClearAlpha(),$t=Bt.r,Wt=Bt.g,Yt=Bt.b;Ft?(m[0]=$t,m[1]=Wt,m[2]=Yt,m[3]=Ht,C.clearBufferuiv(C.COLOR,0,m)):(T[0]=$t,T[1]=Wt,T[2]=Yt,T[3]=Ht,C.clearBufferiv(C.COLOR,0,T))}else ct|=C.COLOR_BUFFER_BIT}et&&(ct|=C.DEPTH_BUFFER_BIT),rt&&(ct|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",St,!1),ht.dispose(),xt.dispose(),mt.dispose(),b.dispose(),j.dispose(),lt.dispose(),I.dispose(),Mt.dispose(),_t.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",ae),Tt.removeEventListener("sessionend",Zt),yt&&(yt.dispose(),yt=null),he.stop()};function ft(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const w=vt.autoReset,et=at.enabled,rt=at.autoUpdate,ct=at.needsUpdate,ot=at.type;Et(),vt.autoReset=w,at.enabled=et,at.autoUpdate=rt,at.needsUpdate=ct,at.type=ot}function St(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function At(w){const et=w.target;et.removeEventListener("dispose",At),Ut(et)}function Ut(w){Gt(w),mt.remove(w)}function Gt(w){const et=mt.get(w).programs;et!==void 0&&(et.forEach(function(rt){_t.releaseProgram(rt)}),w.isShaderMaterial&&_t.releaseShaderCache(w))}this.renderBufferDirect=function(w,et,rt,ct,ot,zt){et===null&&(et=D);const Ft=ot.isMesh&&ot.matrixWorld.determinant()<0,Bt=vl(w,et,rt,ct,ot);gt.setMaterial(ct,Ft);let Ht=rt.index,$t=1;if(ct.wireframe===!0){if(Ht=ut.getWireframeAttribute(rt),Ht===void 0)return;$t=2}const Wt=rt.drawRange,Yt=rt.attributes.position;let le=Wt.start*$t,Ie=(Wt.start+Wt.count)*$t;zt!==null&&(le=Math.max(le,zt.start*$t),Ie=Math.min(Ie,(zt.start+zt.count)*$t)),Ht!==null?(le=Math.max(le,0),Ie=Math.min(Ie,Ht.count)):Yt!=null&&(le=Math.max(le,0),Ie=Math.min(Ie,Yt.count));const ge=Ie-le;if(ge<0||ge===1/0)return;I.setup(ot,ct,Bt,rt,Ht);let Qe,oe=Dt;if(Ht!==null&&(Qe=dt.get(Ht),oe=Pt,oe.setIndex(Qe)),ot.isMesh)ct.wireframe===!0?(gt.setLineWidth(ct.wireframeLinewidth*W()),oe.setMode(C.LINES)):oe.setMode(C.TRIANGLES);else if(ot.isLine){let Kt=ct.linewidth;Kt===void 0&&(Kt=1),gt.setLineWidth(Kt*W()),ot.isLineSegments?oe.setMode(C.LINES):ot.isLineLoop?oe.setMode(C.LINE_LOOP):oe.setMode(C.LINE_STRIP)}else ot.isPoints?oe.setMode(C.POINTS):ot.isSprite&&oe.setMode(C.TRIANGLES);if(ot.isBatchedMesh)oe.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else if(ot.isInstancedMesh)oe.renderInstances(le,ge,ot.count);else if(rt.isInstancedBufferGeometry){const Kt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,xs=Math.min(rt.instanceCount,Kt);oe.renderInstances(le,ge,xs)}else oe.render(le,ge)};function Vt(w,et,rt){w.transparent===!0&&w.side===oi&&w.forceSinglePass===!1?(w.side=Le,w.needsUpdate=!0,Un(w,et,rt),w.side=Ti,w.needsUpdate=!0,Un(w,et,rt),w.side=oi):Un(w,et,rt)}this.compile=function(w,et,rt=null){rt===null&&(rt=w),h=xt.get(rt),h.init(),_.push(h),rt.traverseVisible(function(ot){ot.isLight&&ot.layers.test(et.layers)&&(h.pushLight(ot),ot.castShadow&&h.pushShadow(ot))}),w!==rt&&w.traverseVisible(function(ot){ot.isLight&&ot.layers.test(et.layers)&&(h.pushLight(ot),ot.castShadow&&h.pushShadow(ot))}),h.setupLights(g._useLegacyLights);const ct=new Set;return w.traverse(function(ot){const zt=ot.material;if(zt)if(Array.isArray(zt))for(let Ft=0;Ft<zt.length;Ft++){const Bt=zt[Ft];Vt(Bt,rt,ot),ct.add(Bt)}else Vt(zt,rt,ot),ct.add(zt)}),_.pop(),h=null,ct},this.compileAsync=function(w,et,rt=null){const ct=this.compile(w,et,rt);return new Promise(ot=>{function zt(){if(ct.forEach(function(Ft){mt.get(Ft).currentProgram.isReady()&&ct.delete(Ft)}),ct.size===0){ot(w);return}setTimeout(zt,10)}it.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let jt=null;function se(w){jt&&jt(w)}function ae(){he.stop()}function Zt(){he.start()}const he=new el;he.setAnimationLoop(se),typeof self<"u"&&he.setContext(self),this.setAnimationLoop=function(w){jt=w,Tt.setAnimationLoop(w),w===null?he.stop():he.start()},Tt.addEventListener("sessionstart",ae),Tt.addEventListener("sessionend",Zt),this.render=function(w,et){if(et!==void 0&&et.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),et.parent===null&&et.matrixWorldAutoUpdate===!0&&et.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(et),et=Tt.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,et,S),h=xt.get(w,_.length),h.init(),_.push(h),Ct.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),F.setFromProjectionMatrix(Ct),st=this.localClippingEnabled,Q=wt.init(this.clippingPlanes,st),y=ht.get(w,d.length),y.init(),d.push(y),Ke(w,et,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(H,J),this.info.render.frame++,Q===!0&&wt.beginShadows();const rt=h.state.shadowsArray;if(at.render(rt,w,et),Q===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),It.render(y,w),h.setupLights(g._useLegacyLights),et.isArrayCamera){const ct=et.cameras;for(let ot=0,zt=ct.length;ot<zt;ot++){const Ft=ct[ot];Fa(y,w,Ft,Ft.viewport)}}else Fa(y,w,et);S!==null&&(P.updateMultisampleRenderTarget(S),P.updateRenderTargetMipmap(S)),w.isScene===!0&&w.onAfterRender(g,w,et),I.resetDefaultState(),N=-1,M=null,_.pop(),_.length>0?h=_[_.length-1]:h=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function Ke(w,et,rt,ct){if(w.visible===!1)return;if(w.layers.test(et.layers)){if(w.isGroup)rt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(et);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||F.intersectsSprite(w)){ct&&L.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ct);const Ft=lt.update(w),Bt=w.material;Bt.visible&&y.push(w,Ft,Bt,rt,L.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||F.intersectsObject(w))){const Ft=lt.update(w),Bt=w.material;if(ct&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),L.copy(w.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),L.copy(Ft.boundingSphere.center)),L.applyMatrix4(w.matrixWorld).applyMatrix4(Ct)),Array.isArray(Bt)){const Ht=Ft.groups;for(let $t=0,Wt=Ht.length;$t<Wt;$t++){const Yt=Ht[$t],le=Bt[Yt.materialIndex];le&&le.visible&&y.push(w,Ft,le,rt,L.z,Yt)}}else Bt.visible&&y.push(w,Ft,Bt,rt,L.z,null)}}const zt=w.children;for(let Ft=0,Bt=zt.length;Ft<Bt;Ft++)Ke(zt[Ft],et,rt,ct)}function Fa(w,et,rt,ct){const ot=w.opaque,zt=w.transmissive,Ft=w.transparent;h.setupLightsView(rt),Q===!0&&wt.setGlobalState(g.clippingPlanes,rt),zt.length>0&&gl(ot,zt,et,rt),ct&&gt.viewport(A.copy(ct)),ot.length>0&&zn(ot,et,rt),zt.length>0&&zn(zt,et,rt),Ft.length>0&&zn(Ft,et,rt),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function gl(w,et,rt,ct){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;const zt=nt.isWebGL2;yt===null&&(yt=new Oi(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")?In:_i,minFilter:Ln,samples:zt?4:0})),g.getDrawingBufferSize(Rt),zt?yt.setSize(Rt.x,Rt.y):yt.setSize(Ta(Rt.x),Ta(Rt.y));const Ft=g.getRenderTarget();g.setRenderTarget(yt),g.getClearColor(q),R=g.getClearAlpha(),R<1&&g.setClearColor(16777215,.5),g.clear();const Bt=g.toneMapping;g.toneMapping=yi,zn(w,rt,ct),P.updateMultisampleRenderTarget(yt),P.updateRenderTargetMipmap(yt);let Ht=!1;for(let $t=0,Wt=et.length;$t<Wt;$t++){const Yt=et[$t],le=Yt.object,Ie=Yt.geometry,ge=Yt.material,Qe=Yt.group;if(ge.side===oi&&le.layers.test(ct.layers)){const oe=ge.side;ge.side=Le,ge.needsUpdate=!0,Ga(le,rt,ct,Ie,ge,Qe),ge.side=oe,ge.needsUpdate=!0,Ht=!0}}Ht===!0&&(P.updateMultisampleRenderTarget(yt),P.updateRenderTargetMipmap(yt)),g.setRenderTarget(Ft),g.setClearColor(q,R),g.toneMapping=Bt}function zn(w,et,rt){const ct=et.isScene===!0?et.overrideMaterial:null;for(let ot=0,zt=w.length;ot<zt;ot++){const Ft=w[ot],Bt=Ft.object,Ht=Ft.geometry,$t=ct===null?Ft.material:ct,Wt=Ft.group;Bt.layers.test(rt.layers)&&Ga(Bt,et,rt,Ht,$t,Wt)}}function Ga(w,et,rt,ct,ot,zt){w.onBeforeRender(g,et,rt,ct,ot,zt),w.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ot.onBeforeRender(g,et,rt,ct,w,zt),ot.transparent===!0&&ot.side===oi&&ot.forceSinglePass===!1?(ot.side=Le,ot.needsUpdate=!0,g.renderBufferDirect(rt,et,ct,ot,w,zt),ot.side=Ti,ot.needsUpdate=!0,g.renderBufferDirect(rt,et,ct,ot,w,zt),ot.side=oi):g.renderBufferDirect(rt,et,ct,ot,w,zt),w.onAfterRender(g,et,rt,ct,ot,zt)}function Un(w,et,rt){et.isScene!==!0&&(et=D);const ct=mt.get(w),ot=h.state.lights,zt=h.state.shadowsArray,Ft=ot.state.version,Bt=_t.getParameters(w,ot.state,zt,et,rt),Ht=_t.getProgramCacheKey(Bt);let $t=ct.programs;ct.environment=w.isMeshStandardMaterial?et.environment:null,ct.fog=et.fog,ct.envMap=(w.isMeshStandardMaterial?j:b).get(w.envMap||ct.environment),$t===void 0&&(w.addEventListener("dispose",At),$t=new Map,ct.programs=$t);let Wt=$t.get(Ht);if(Wt!==void 0){if(ct.currentProgram===Wt&&ct.lightsStateVersion===Ft)return ka(w,Bt),Wt}else Bt.uniforms=_t.getUniforms(w),w.onBuild(rt,Bt,g),w.onBeforeCompile(Bt,g),Wt=_t.acquireProgram(Bt,Ht),$t.set(Ht,Wt),ct.uniforms=Bt.uniforms;const Yt=ct.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Yt.clippingPlanes=wt.uniform),ka(w,Bt),ct.needsLights=_l(w),ct.lightsStateVersion=Ft,ct.needsLights&&(Yt.ambientLightColor.value=ot.state.ambient,Yt.lightProbe.value=ot.state.probe,Yt.directionalLights.value=ot.state.directional,Yt.directionalLightShadows.value=ot.state.directionalShadow,Yt.spotLights.value=ot.state.spot,Yt.spotLightShadows.value=ot.state.spotShadow,Yt.rectAreaLights.value=ot.state.rectArea,Yt.ltc_1.value=ot.state.rectAreaLTC1,Yt.ltc_2.value=ot.state.rectAreaLTC2,Yt.pointLights.value=ot.state.point,Yt.pointLightShadows.value=ot.state.pointShadow,Yt.hemisphereLights.value=ot.state.hemi,Yt.directionalShadowMap.value=ot.state.directionalShadowMap,Yt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Yt.spotShadowMap.value=ot.state.spotShadowMap,Yt.spotLightMatrix.value=ot.state.spotLightMatrix,Yt.spotLightMap.value=ot.state.spotLightMap,Yt.pointShadowMap.value=ot.state.pointShadowMap,Yt.pointShadowMatrix.value=ot.state.pointShadowMatrix),ct.currentProgram=Wt,ct.uniformsList=null,Wt}function Ba(w){if(w.uniformsList===null){const et=w.currentProgram.getUniforms();w.uniformsList=hs.seqWithValue(et.seq,w.uniforms)}return w.uniformsList}function ka(w,et){const rt=mt.get(w);rt.outputColorSpace=et.outputColorSpace,rt.batching=et.batching,rt.instancing=et.instancing,rt.instancingColor=et.instancingColor,rt.skinning=et.skinning,rt.morphTargets=et.morphTargets,rt.morphNormals=et.morphNormals,rt.morphColors=et.morphColors,rt.morphTargetsCount=et.morphTargetsCount,rt.numClippingPlanes=et.numClippingPlanes,rt.numIntersection=et.numClipIntersection,rt.vertexAlphas=et.vertexAlphas,rt.vertexTangents=et.vertexTangents,rt.toneMapping=et.toneMapping}function vl(w,et,rt,ct,ot){et.isScene!==!0&&(et=D),P.resetTextureUnits();const zt=et.fog,Ft=ct.isMeshStandardMaterial?et.environment:null,Bt=S===null?g.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:li,Ht=(ct.isMeshStandardMaterial?j:b).get(ct.envMap||Ft),$t=ct.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Wt=!!rt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Yt=!!rt.morphAttributes.position,le=!!rt.morphAttributes.normal,Ie=!!rt.morphAttributes.color;let ge=yi;ct.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(ge=g.toneMapping);const Qe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,oe=Qe!==void 0?Qe.length:0,Kt=mt.get(ct),xs=h.state.lights;if(Q===!0&&(st===!0||w!==M)){const Ue=w===M&&ct.id===N;wt.setState(ct,w,Ue)}let re=!1;ct.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==xs.state.version||Kt.outputColorSpace!==Bt||ot.isBatchedMesh&&Kt.batching===!1||!ot.isBatchedMesh&&Kt.batching===!0||ot.isInstancedMesh&&Kt.instancing===!1||!ot.isInstancedMesh&&Kt.instancing===!0||ot.isSkinnedMesh&&Kt.skinning===!1||!ot.isSkinnedMesh&&Kt.skinning===!0||ot.isInstancedMesh&&Kt.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Kt.instancingColor===!1&&ot.instanceColor!==null||Kt.envMap!==Ht||ct.fog===!0&&Kt.fog!==zt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==wt.numPlanes||Kt.numIntersection!==wt.numIntersection)||Kt.vertexAlphas!==$t||Kt.vertexTangents!==Wt||Kt.morphTargets!==Yt||Kt.morphNormals!==le||Kt.morphColors!==Ie||Kt.toneMapping!==ge||nt.isWebGL2===!0&&Kt.morphTargetsCount!==oe)&&(re=!0):(re=!0,Kt.__version=ct.version);let Ei=Kt.currentProgram;re===!0&&(Ei=Un(ct,et,ot));let Ha=!1,vn=!1,bs=!1;const Ee=Ei.getUniforms(),Mi=Kt.uniforms;if(gt.useProgram(Ei.program)&&(Ha=!0,vn=!0,bs=!0),ct.id!==N&&(N=ct.id,vn=!0),Ha||M!==w){Ee.setValue(C,"projectionMatrix",w.projectionMatrix),Ee.setValue(C,"viewMatrix",w.matrixWorldInverse);const Ue=Ee.map.cameraPosition;Ue!==void 0&&Ue.setValue(C,L.setFromMatrixPosition(w.matrixWorld)),nt.logarithmicDepthBuffer&&Ee.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Ee.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,vn=!0,bs=!0)}if(ot.isSkinnedMesh){Ee.setOptional(C,ot,"bindMatrix"),Ee.setOptional(C,ot,"bindMatrixInverse");const Ue=ot.skeleton;Ue&&(nt.floatVertexTextures?(Ue.boneTexture===null&&Ue.computeBoneTexture(),Ee.setValue(C,"boneTexture",Ue.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ot.isBatchedMesh&&(Ee.setOptional(C,ot,"batchingTexture"),Ee.setValue(C,"batchingTexture",ot._matricesTexture,P));const As=rt.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0&&nt.isWebGL2===!0)&&Nt.update(ot,rt,Ei),(vn||Kt.receiveShadow!==ot.receiveShadow)&&(Kt.receiveShadow=ot.receiveShadow,Ee.setValue(C,"receiveShadow",ot.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(Mi.envMap.value=Ht,Mi.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),vn&&(Ee.setValue(C,"toneMappingExposure",g.toneMappingExposure),Kt.needsLights&&yl(Mi,bs),zt&&ct.fog===!0&&pt.refreshFogUniforms(Mi,zt),pt.refreshMaterialUniforms(Mi,ct,V,$,yt),hs.upload(C,Ba(Kt),Mi,P)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(hs.upload(C,Ba(Kt),Mi,P),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Ee.setValue(C,"center",ot.center),Ee.setValue(C,"modelViewMatrix",ot.modelViewMatrix),Ee.setValue(C,"normalMatrix",ot.normalMatrix),Ee.setValue(C,"modelMatrix",ot.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const Ue=ct.uniformsGroups;for(let Ps=0,Tl=Ue.length;Ps<Tl;Ps++)if(nt.isWebGL2){const Va=Ue[Ps];Mt.update(Va,Ei),Mt.bind(Va,Ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ei}function yl(w,et){w.ambientLightColor.needsUpdate=et,w.lightProbe.needsUpdate=et,w.directionalLights.needsUpdate=et,w.directionalLightShadows.needsUpdate=et,w.pointLights.needsUpdate=et,w.pointLightShadows.needsUpdate=et,w.spotLights.needsUpdate=et,w.spotLightShadows.needsUpdate=et,w.rectAreaLights.needsUpdate=et,w.hemisphereLights.needsUpdate=et}function _l(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(w,et,rt){mt.get(w.texture).__webglTexture=et,mt.get(w.depthTexture).__webglTexture=rt;const ct=mt.get(w);ct.__hasExternalTextures=!0,ct.__hasExternalTextures&&(ct.__autoAllocateDepthBuffer=rt===void 0,ct.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ct.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,et){const rt=mt.get(w);rt.__webglFramebuffer=et,rt.__useDefaultFramebuffer=et===void 0},this.setRenderTarget=function(w,et=0,rt=0){S=w,E=et,x=rt;let ct=!0,ot=null,zt=!1,Ft=!1;if(w){const Ht=mt.get(w);Ht.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(C.FRAMEBUFFER,null),ct=!1):Ht.__webglFramebuffer===void 0?P.setupRenderTarget(w):Ht.__hasExternalTextures&&P.rebindTextures(w,mt.get(w.texture).__webglTexture,mt.get(w.depthTexture).__webglTexture);const $t=w.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ft=!0);const Wt=mt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Wt[et])?ot=Wt[et][rt]:ot=Wt[et],zt=!0):nt.isWebGL2&&w.samples>0&&P.useMultisampledRTT(w)===!1?ot=mt.get(w).__webglMultisampledFramebuffer:Array.isArray(Wt)?ot=Wt[rt]:ot=Wt,A.copy(w.viewport),G.copy(w.scissor),z=w.scissorTest}else A.copy(k).multiplyScalar(V).floor(),G.copy(Y).multiplyScalar(V).floor(),z=Z;if(gt.bindFramebuffer(C.FRAMEBUFFER,ot)&&nt.drawBuffers&&ct&&gt.drawBuffers(w,ot),gt.viewport(A),gt.scissor(G),gt.setScissorTest(z),zt){const Ht=mt.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ht.__webglTexture,rt)}else if(Ft){const Ht=mt.get(w.texture),$t=et||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ht.__webglTexture,rt||0,$t)}N=-1},this.readRenderTargetPixels=function(w,et,rt,ct,ot,zt,Ft){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ft!==void 0&&(Bt=Bt[Ft]),Bt){gt.bindFramebuffer(C.FRAMEBUFFER,Bt);try{const Ht=w.texture,$t=Ht.format,Wt=Ht.type;if($t!==je&&bt.convert($t)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Yt=Wt===In&&(it.has("EXT_color_buffer_half_float")||nt.isWebGL2&&it.has("EXT_color_buffer_float"));if(Wt!==_i&&bt.convert(Wt)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Wt===gi&&(nt.isWebGL2||it.has("OES_texture_float")||it.has("WEBGL_color_buffer_float")))&&!Yt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}et>=0&&et<=w.width-ct&&rt>=0&&rt<=w.height-ot&&C.readPixels(et,rt,ct,ot,bt.convert($t),bt.convert(Wt),zt)}finally{const Ht=S!==null?mt.get(S).__webglFramebuffer:null;gt.bindFramebuffer(C.FRAMEBUFFER,Ht)}}},this.copyFramebufferToTexture=function(w,et,rt=0){const ct=Math.pow(2,-rt),ot=Math.floor(et.image.width*ct),zt=Math.floor(et.image.height*ct);P.setTexture2D(et,0),C.copyTexSubImage2D(C.TEXTURE_2D,rt,0,0,w.x,w.y,ot,zt),gt.unbindTexture()},this.copyTextureToTexture=function(w,et,rt,ct=0){const ot=et.image.width,zt=et.image.height,Ft=bt.convert(rt.format),Bt=bt.convert(rt.type);P.setTexture2D(rt,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,rt.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,rt.unpackAlignment),et.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ct,w.x,w.y,ot,zt,Ft,Bt,et.image.data):et.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ct,w.x,w.y,et.mipmaps[0].width,et.mipmaps[0].height,Ft,et.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,ct,w.x,w.y,Ft,Bt,et.image),ct===0&&rt.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(w,et,rt,ct,ot=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const zt=w.max.x-w.min.x+1,Ft=w.max.y-w.min.y+1,Bt=w.max.z-w.min.z+1,Ht=bt.convert(ct.format),$t=bt.convert(ct.type);let Wt;if(ct.isData3DTexture)P.setTexture3D(ct,0),Wt=C.TEXTURE_3D;else if(ct.isDataArrayTexture||ct.isCompressedArrayTexture)P.setTexture2DArray(ct,0),Wt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,ct.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ct.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,ct.unpackAlignment);const Yt=C.getParameter(C.UNPACK_ROW_LENGTH),le=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ie=C.getParameter(C.UNPACK_SKIP_PIXELS),ge=C.getParameter(C.UNPACK_SKIP_ROWS),Qe=C.getParameter(C.UNPACK_SKIP_IMAGES),oe=rt.isCompressedTexture?rt.mipmaps[ot]:rt.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,oe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,oe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,w.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,w.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,w.min.z),rt.isDataTexture||rt.isData3DTexture?C.texSubImage3D(Wt,ot,et.x,et.y,et.z,zt,Ft,Bt,Ht,$t,oe.data):rt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(Wt,ot,et.x,et.y,et.z,zt,Ft,Bt,Ht,oe.data)):C.texSubImage3D(Wt,ot,et.x,et.y,et.z,zt,Ft,Bt,Ht,$t,oe),C.pixelStorei(C.UNPACK_ROW_LENGTH,Yt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,le),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ie),C.pixelStorei(C.UNPACK_SKIP_ROWS,ge),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Qe),ot===0&&ct.generateMipmaps&&C.generateMipmap(Wt),gt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),gt.unbindTexture()},this.resetState=function(){E=0,x=0,S=null,gt.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ca?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===Ts?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Te?Ii:Hr}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ii?Te:li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class qp extends cl{}qp.prototype.isWebGL1Renderer=!0;class Zp extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Cn extends Je{constructor(t=1,e=1,i=1,n=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),a=Math.floor(a);const u=[],f=[],p=[],m=[];let T=0;const y=[],h=i/2;let d=0;_(),r===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new Ae(f,3)),this.setAttribute("normal",new Ae(p,3)),this.setAttribute("uv",new Ae(m,2));function _(){const v=new tt,E=new tt;let x=0;const S=(e-t)/i;for(let N=0;N<=a;N++){const M=[],A=N/a,G=A*(e-t)+t;for(let z=0;z<=n;z++){const q=z/n,R=q*l+o,B=Math.sin(R),$=Math.cos(R);E.x=G*B,E.y=-A*i+h,E.z=G*$,f.push(E.x,E.y,E.z),v.set(B,S,$).normalize(),p.push(v.x,v.y,v.z),m.push(q,1-A),M.push(T++)}y.push(M)}for(let N=0;N<n;N++)for(let M=0;M<a;M++){const A=y[M][N],G=y[M+1][N],z=y[M+1][N+1],q=y[M][N+1];u.push(A,G,q),u.push(G,z,q),x+=6}c.addGroup(d,x,0),d+=x}function g(v){const E=T,x=new kt,S=new tt;let N=0;const M=v===!0?t:e,A=v===!0?1:-1;for(let z=1;z<=n;z++)f.push(0,h*A,0),p.push(0,A,0),m.push(.5,.5),T++;const G=T;for(let z=0;z<=n;z++){const R=z/n*l+o,B=Math.cos(R),$=Math.sin(R);S.x=M*$,S.y=h*A,S.z=M*B,f.push(S.x,S.y,S.z),p.push(0,A,0),x.x=B*.5+.5,x.y=$*.5*A+.5,m.push(x.x,x.y),T++}for(let z=0;z<n;z++){const q=E+z,R=G+z;v===!0?u.push(R,R+1,q):u.push(R+1,R,q),N+=3}c.addGroup(d,N,v===!0?1:2),d+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ss extends Je{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const a=[],r=[];o(n),c(i),u(),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(a.slice(),3)),this.setAttribute("uv",new Ae(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const g=new tt,v=new tt,E=new tt;for(let x=0;x<e.length;x+=3)m(e[x+0],g),m(e[x+1],v),m(e[x+2],E),l(g,v,E,_)}function l(_,g,v,E){const x=E+1,S=[];for(let N=0;N<=x;N++){S[N]=[];const M=_.clone().lerp(v,N/x),A=g.clone().lerp(v,N/x),G=x-N;for(let z=0;z<=G;z++)z===0&&N===x?S[N][z]=M:S[N][z]=M.clone().lerp(A,z/G)}for(let N=0;N<x;N++)for(let M=0;M<2*(x-N)-1;M++){const A=Math.floor(M/2);M%2===0?(p(S[N][A+1]),p(S[N+1][A]),p(S[N][A])):(p(S[N][A+1]),p(S[N+1][A+1]),p(S[N+1][A]))}}function c(_){const g=new tt;for(let v=0;v<a.length;v+=3)g.x=a[v+0],g.y=a[v+1],g.z=a[v+2],g.normalize().multiplyScalar(_),a[v+0]=g.x,a[v+1]=g.y,a[v+2]=g.z}function u(){const _=new tt;for(let g=0;g<a.length;g+=3){_.x=a[g+0],_.y=a[g+1],_.z=a[g+2];const v=h(_)/2/Math.PI+.5,E=d(_)/Math.PI+.5;r.push(v,1-E)}T(),f()}function f(){for(let _=0;_<r.length;_+=6){const g=r[_+0],v=r[_+2],E=r[_+4],x=Math.max(g,v,E),S=Math.min(g,v,E);x>.9&&S<.1&&(g<.2&&(r[_+0]+=1),v<.2&&(r[_+2]+=1),E<.2&&(r[_+4]+=1))}}function p(_){a.push(_.x,_.y,_.z)}function m(_,g){const v=_*3;g.x=t[v+0],g.y=t[v+1],g.z=t[v+2]}function T(){const _=new tt,g=new tt,v=new tt,E=new tt,x=new kt,S=new kt,N=new kt;for(let M=0,A=0;M<a.length;M+=9,A+=6){_.set(a[M+0],a[M+1],a[M+2]),g.set(a[M+3],a[M+4],a[M+5]),v.set(a[M+6],a[M+7],a[M+8]),x.set(r[A+0],r[A+1]),S.set(r[A+2],r[A+3]),N.set(r[A+4],r[A+5]),E.copy(_).add(g).add(v).divideScalar(3);const G=h(E);y(x,A+0,_,G),y(S,A+2,g,G),y(N,A+4,v,G)}}function y(_,g,v,E){E<0&&_.x===1&&(r[g]=_.x-1),v.x===0&&v.z===0&&(r[g]=E/2/Math.PI+.5)}function h(_){return Math.atan2(_.z,-_.x)}function d(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.vertices,t.indices,t.radius,t.details)}}class Na extends Ss{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Na(t.radius,t.detail)}}class za extends Ss{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new za(t.radius,t.detail)}}class rn extends Je{constructor(t=1,e=32,i=16,n=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const u=[],f=new tt,p=new tt,m=[],T=[],y=[],h=[];for(let d=0;d<=i;d++){const _=[],g=d/i;let v=0;d===0&&r===0?v=.5/e:d===i&&l===Math.PI&&(v=-.5/e);for(let E=0;E<=e;E++){const x=E/e;f.x=-t*Math.cos(n+x*a)*Math.sin(r+g*o),f.y=t*Math.cos(r+g*o),f.z=t*Math.sin(n+x*a)*Math.sin(r+g*o),T.push(f.x,f.y,f.z),p.copy(f).normalize(),y.push(p.x,p.y,p.z),h.push(x+v,1-g),_.push(c++)}u.push(_)}for(let d=0;d<i;d++)for(let _=0;_<e;_++){const g=u[d][_+1],v=u[d][_],E=u[d+1][_],x=u[d+1][_+1];(d!==0||r>0)&&m.push(g,v,x),(d!==i-1||l<Math.PI)&&m.push(v,E,x)}this.setIndex(m),this.setAttribute("position",new Ae(T,3)),this.setAttribute("normal",new Ae(y,3)),this.setAttribute("uv",new Ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ee extends Nn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Jt(16777215),this.specular=new Jt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hl extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const aa=new fe,mr=new tt,gr=new tt;class Jp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ia,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;mr.setFromMatrixPosition(t.matrixWorld),e.position.copy(mr),gr.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gr),e.updateMatrixWorld(),aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Qp extends Jp{constructor(){super(new il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vr extends hl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Qp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yr extends hl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class tm{constructor(t,e,i=0,n=1/0){this.ray=new Ra(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new La,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Ma(t,this,i,e),i.sort(_r),i}intersectObjects(t,e=!0,i=[]){for(let n=0,a=t.length;n<a;n++)Ma(t[n],this,i,e);return i.sort(_r),i}}function _r(s,t){return s.distance-t.distance}function Ma(s,t,e,i){if(s.layers.test(t.layers)&&s.raycast(t,e),i===!0){const n=s.children;for(let a=0,r=n.length;a<r;a++)Ma(n[a],t,e,!0)}}class Sa{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);const Tr={type:"change"},oa={type:"start"},Er={type:"end"},os=new Ra,Mr=new pi,em=Math.cos(70*Vc.DEG2RAD);class im extends Ui{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new tt,this.cursor=new tt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:Bi.ROTATE,TWO:Bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",xt),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",xt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Tr),i.update(),a=n.NONE},this.update=function(){const I=new tt,Mt=new Ni().setFromUnitVectors(t.up,new tt(0,1,0)),Et=Mt.clone().invert(),Tt=new tt,ft=new Ni,U=new tt,St=2*Math.PI;return function(Ut=null){const Gt=i.object.position;I.copy(Gt).sub(i.target),I.applyQuaternion(Mt),o.setFromVector3(I),i.autoRotate&&a===n.NONE&&z(A(Ut)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Vt=i.minAzimuthAngle,jt=i.maxAzimuthAngle;isFinite(Vt)&&isFinite(jt)&&(Vt<-Math.PI?Vt+=St:Vt>Math.PI&&(Vt-=St),jt<-Math.PI?jt+=St:jt>Math.PI&&(jt-=St),Vt<=jt?o.theta=Math.max(Vt,Math.min(jt,o.theta)):o.theta=o.theta>(Vt+jt)/2?Math.max(Vt,o.theta):Math.min(jt,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&x||i.object.isOrthographicCamera?o.radius=k(o.radius):o.radius=k(o.radius*c),I.setFromSpherical(o),I.applyQuaternion(Et),Gt.copy(i.target).add(I),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let se=!1;if(i.zoomToCursor&&x){let ae=null;if(i.object.isPerspectiveCamera){const Zt=I.length();ae=k(Zt*c);const he=Zt-ae;i.object.position.addScaledVector(v,he),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Zt=new tt(E.x,E.y,0);Zt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),se=!0;const he=new tt(E.x,E.y,0);he.unproject(i.object),i.object.position.sub(he).add(Zt),i.object.updateMatrixWorld(),ae=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ae!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ae).add(i.object.position):(os.origin.copy(i.object.position),os.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(os.direction))<em?t.lookAt(i.target):(Mr.setFromNormalAndCoplanarPoint(i.object.up,i.target),os.intersectPlane(Mr,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),se=!0);return c=1,x=!1,se||Tt.distanceToSquared(i.object.position)>r||8*(1-ft.dot(i.object.quaternion))>r||U.distanceToSquared(i.target)>0?(i.dispatchEvent(Tr),Tt.copy(i.object.position),ft.copy(i.object.quaternion),U.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",It),i.domElement.removeEventListener("pointerdown",P),i.domElement.removeEventListener("pointercancel",j),i.domElement.removeEventListener("wheel",lt),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",j),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",xt),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=n.NONE;const r=1e-6,o=new Sa,l=new Sa;let c=1;const u=new tt,f=new kt,p=new kt,m=new kt,T=new kt,y=new kt,h=new kt,d=new kt,_=new kt,g=new kt,v=new tt,E=new kt;let x=!1;const S=[],N={};let M=!1;function A(I){return I!==null?2*Math.PI/60*i.autoRotateSpeed*I:2*Math.PI/60/60*i.autoRotateSpeed}function G(I){const Mt=Math.abs(I*.01);return Math.pow(.95,i.zoomSpeed*Mt)}function z(I){l.theta-=I}function q(I){l.phi-=I}const R=function(){const I=new tt;return function(Et,Tt){I.setFromMatrixColumn(Tt,0),I.multiplyScalar(-Et),u.add(I)}}(),B=function(){const I=new tt;return function(Et,Tt){i.screenSpacePanning===!0?I.setFromMatrixColumn(Tt,1):(I.setFromMatrixColumn(Tt,0),I.crossVectors(i.object.up,I)),I.multiplyScalar(Et),u.add(I)}}(),$=function(){const I=new tt;return function(Et,Tt){const ft=i.domElement;if(i.object.isPerspectiveCamera){const U=i.object.position;I.copy(U).sub(i.target);let St=I.length();St*=Math.tan(i.object.fov/2*Math.PI/180),R(2*Et*St/ft.clientHeight,i.object.matrix),B(2*Tt*St/ft.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(R(Et*(i.object.right-i.object.left)/i.object.zoom/ft.clientWidth,i.object.matrix),B(Tt*(i.object.top-i.object.bottom)/i.object.zoom/ft.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function V(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(I,Mt){if(!i.zoomToCursor)return;x=!0;const Et=i.domElement.getBoundingClientRect(),Tt=I-Et.left,ft=Mt-Et.top,U=Et.width,St=Et.height;E.x=Tt/U*2-1,E.y=-(ft/St)*2+1,v.set(E.x,E.y,1).unproject(i.object).sub(i.object.position).normalize()}function k(I){return Math.max(i.minDistance,Math.min(i.maxDistance,I))}function Y(I){f.set(I.clientX,I.clientY)}function Z(I){J(I.clientX,I.clientX),d.set(I.clientX,I.clientY)}function F(I){T.set(I.clientX,I.clientY)}function Q(I){p.set(I.clientX,I.clientY),m.subVectors(p,f).multiplyScalar(i.rotateSpeed);const Mt=i.domElement;z(2*Math.PI*m.x/Mt.clientHeight),q(2*Math.PI*m.y/Mt.clientHeight),f.copy(p),i.update()}function st(I){_.set(I.clientX,I.clientY),g.subVectors(_,d),g.y>0?V(G(g.y)):g.y<0&&H(G(g.y)),d.copy(_),i.update()}function yt(I){y.set(I.clientX,I.clientY),h.subVectors(y,T).multiplyScalar(i.panSpeed),$(h.x,h.y),T.copy(y),i.update()}function Ct(I){J(I.clientX,I.clientY),I.deltaY<0?H(G(I.deltaY)):I.deltaY>0&&V(G(I.deltaY)),i.update()}function Rt(I){let Mt=!1;switch(I.code){case i.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,i.keyPanSpeed),Mt=!0;break;case i.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,-i.keyPanSpeed),Mt=!0;break;case i.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(i.keyPanSpeed,0),Mt=!0;break;case i.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(-i.keyPanSpeed,0),Mt=!0;break}Mt&&(I.preventDefault(),i.update())}function L(I){if(S.length===1)f.set(I.pageX,I.pageY);else{const Mt=bt(I),Et=.5*(I.pageX+Mt.x),Tt=.5*(I.pageY+Mt.y);f.set(Et,Tt)}}function D(I){if(S.length===1)T.set(I.pageX,I.pageY);else{const Mt=bt(I),Et=.5*(I.pageX+Mt.x),Tt=.5*(I.pageY+Mt.y);T.set(Et,Tt)}}function W(I){const Mt=bt(I),Et=I.pageX-Mt.x,Tt=I.pageY-Mt.y,ft=Math.sqrt(Et*Et+Tt*Tt);d.set(0,ft)}function C(I){i.enableZoom&&W(I),i.enablePan&&D(I)}function K(I){i.enableZoom&&W(I),i.enableRotate&&L(I)}function it(I){if(S.length==1)p.set(I.pageX,I.pageY);else{const Et=bt(I),Tt=.5*(I.pageX+Et.x),ft=.5*(I.pageY+Et.y);p.set(Tt,ft)}m.subVectors(p,f).multiplyScalar(i.rotateSpeed);const Mt=i.domElement;z(2*Math.PI*m.x/Mt.clientHeight),q(2*Math.PI*m.y/Mt.clientHeight),f.copy(p)}function nt(I){if(S.length===1)y.set(I.pageX,I.pageY);else{const Mt=bt(I),Et=.5*(I.pageX+Mt.x),Tt=.5*(I.pageY+Mt.y);y.set(Et,Tt)}h.subVectors(y,T).multiplyScalar(i.panSpeed),$(h.x,h.y),T.copy(y)}function gt(I){const Mt=bt(I),Et=I.pageX-Mt.x,Tt=I.pageY-Mt.y,ft=Math.sqrt(Et*Et+Tt*Tt);_.set(0,ft),g.set(0,Math.pow(_.y/d.y,i.zoomSpeed)),V(g.y),d.copy(_);const U=(I.pageX+Mt.x)*.5,St=(I.pageY+Mt.y)*.5;J(U,St)}function vt(I){i.enableZoom&&gt(I),i.enablePan&&nt(I)}function mt(I){i.enableZoom&&gt(I),i.enableRotate&&it(I)}function P(I){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(I.pointerId),i.domElement.addEventListener("pointermove",b),i.domElement.addEventListener("pointerup",j)),Nt(I),I.pointerType==="touch"?wt(I):dt(I))}function b(I){i.enabled!==!1&&(I.pointerType==="touch"?at(I):ut(I))}function j(I){Dt(I),S.length===0&&(i.domElement.releasePointerCapture(I.pointerId),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",j)),i.dispatchEvent(Er),a=n.NONE}function dt(I){let Mt;switch(I.button){case 0:Mt=i.mouseButtons.LEFT;break;case 1:Mt=i.mouseButtons.MIDDLE;break;case 2:Mt=i.mouseButtons.RIGHT;break;default:Mt=-1}switch(Mt){case Gi.DOLLY:if(i.enableZoom===!1)return;Z(I),a=n.DOLLY;break;case Gi.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enablePan===!1)return;F(I),a=n.PAN}else{if(i.enableRotate===!1)return;Y(I),a=n.ROTATE}break;case Gi.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enableRotate===!1)return;Y(I),a=n.ROTATE}else{if(i.enablePan===!1)return;F(I),a=n.PAN}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(oa)}function ut(I){switch(a){case n.ROTATE:if(i.enableRotate===!1)return;Q(I);break;case n.DOLLY:if(i.enableZoom===!1)return;st(I);break;case n.PAN:if(i.enablePan===!1)return;yt(I);break}}function lt(I){i.enabled===!1||i.enableZoom===!1||a!==n.NONE||(I.preventDefault(),i.dispatchEvent(oa),Ct(_t(I)),i.dispatchEvent(Er))}function _t(I){const Mt=I.deltaMode,Et={clientX:I.clientX,clientY:I.clientY,deltaY:I.deltaY};switch(Mt){case 1:Et.deltaY*=16;break;case 2:Et.deltaY*=100;break}return I.ctrlKey&&!M&&(Et.deltaY*=10),Et}function pt(I){I.key==="Control"&&(M=!0,document.addEventListener("keyup",ht,{passive:!0,capture:!0}))}function ht(I){I.key==="Control"&&(M=!1,document.removeEventListener("keyup",ht,{passive:!0,capture:!0}))}function xt(I){i.enabled===!1||i.enablePan===!1||Rt(I)}function wt(I){switch(Pt(I),S.length){case 1:switch(i.touches.ONE){case Bi.ROTATE:if(i.enableRotate===!1)return;L(I),a=n.TOUCH_ROTATE;break;case Bi.PAN:if(i.enablePan===!1)return;D(I),a=n.TOUCH_PAN;break;default:a=n.NONE}break;case 2:switch(i.touches.TWO){case Bi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;C(I),a=n.TOUCH_DOLLY_PAN;break;case Bi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;K(I),a=n.TOUCH_DOLLY_ROTATE;break;default:a=n.NONE}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(oa)}function at(I){switch(Pt(I),a){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;it(I),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;nt(I),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;vt(I),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;mt(I),i.update();break;default:a=n.NONE}}function It(I){i.enabled!==!1&&I.preventDefault()}function Nt(I){S.push(I.pointerId)}function Dt(I){delete N[I.pointerId];for(let Mt=0;Mt<S.length;Mt++)if(S[Mt]==I.pointerId){S.splice(Mt,1);return}}function Pt(I){let Mt=N[I.pointerId];Mt===void 0&&(Mt=new kt,N[I.pointerId]=Mt),Mt.set(I.pageX,I.pageY)}function bt(I){const Mt=I.pointerId===S[0]?S[1]:S[0];return N[Mt]}i.domElement.addEventListener("contextmenu",It),i.domElement.addEventListener("pointerdown",P),i.domElement.addEventListener("pointercancel",j),i.domElement.addEventListener("wheel",lt,{passive:!1}),document.addEventListener("keydown",pt,{passive:!0,capture:!0}),this.update()}}const X={SEED:null,MAZE_DEGREE:4,MIN_MAZE_DEGREE:4,MAX_MAZE_DEGREE:16,BRANCHING_FACTOR:.1,BRAID_FACTOR:.1,SHADOW_SIZE_FACTOR:.075,TELEPORT_MAP_OPACITY:.25,PLAYER_COLLISION_RADIUS:.275,PLAYER_COLLISION_OFFSET_X:0,PLAYER_COLLISION_OFFSET_Y:-.125,PLAYER_START_X:.5,PLAYER_START_Y:1.7,PLAYER_SHADOW_OFFSET_X:-.28,PLAYER_SHADOW_OFFSET_Y:-.15,PLAYER_SHADOW_WIDTH_FACTOR:.45,PLAYER_SHADOW_HEIGHT_FACTOR:.25,SHOW_COLLISION_DEBUG:!1,MOVE_SPEED_FACTOR:2,ROT_SPEED:3,HUNTER_SPEED:600,VORTEX_SPEED_NORMAL:1.5,VORTEX_SPEED_FAST:6,JELLY_PORTAL_COUNT:0,JELLY_STATUE_CHARGE_TIME:1.5,JELLY_PROJECTILE_SPEED:3,JELLY_CHALLENGE_MIN_FREE_CELLS:3,getHunterCount(s){return s>=16?4:s>=12?3:s>=8?2:1},getKeyCount(s){return this.getHunterCount(s)*2},getTeleportCount(s){if(s<8)return Math.ceil(s/2);const t=s-8;return Math.floor(.125*t*t+1.5*t+4)},getPathfinderCount(s){return s>=11?Math.floor(9+(s-11)*1.4):this.getTeleportCount(s)},COLORS:{WALL:"#444",PATH_KNOWN:"#88ccff",PATH_VISITED:"#888",NEON_UP:"#00ffff",NEON_DOWN:"#ff00ff",NEON_UP_UNUSED:"#006666",NEON_DOWN_UNUSED:"#660066",START:"#ff0",EXIT:"#0f0",PLAYER:"#f00",PLAYER_OUTLINE:"#ffffff",HUNTER:"#a0f",TELEPORT:"#ff8c00",TELEPORT_INACTIVE:"#555555",REVEALED_PATH:"#ffffff",ELEVATOR_BIDIRECTIONAL:"#ffffff",JELLY_PORTAL:"#a020f0",JELLY_PROJECTILE:"#ff3333",JELLY_MUTATION:"#ff5500",THREE_PLAYER:16711680,THREE_HUNTER:11141375,THREE_START:16776960,THREE_EXIT:65280,THREE_VISITED:4473924,THREE_KNOWN:2046546,THREE_ELEVATOR_UP:65535,THREE_ELEVATOR_DOWN:16711935,THREE_ELEVATOR_UP_UNUSED:26214,THREE_ELEVATOR_DOWN_UNUSED:6684774,THREE_TELEPORT:16747520,THREE_KEY:16766720,THREE_JELLY_PORTAL:10494192,THREE_JELLY_PROJECTILE:16724787,THREE_JELLY_MUTATION:16733440,THREE_ELEVATOR_SHAFT:{bottom:16711935,top:65535}}},xa={en:{gameTitle:"VOID ESCAPE",gameCredits:"a game by Bernard Rodrigues",activeHunters:"Active Hunters",activeTeleports:"Active Teleports",activeKeys:"Active Keys",availablePathfinders:"Available Pathfinders",mazeDegree:"Maze Degree",safeMode:"Safe Mode",generateMaze:"NEW GAME",continue:"CONTINUE",tutorialsMenu:"TUTORIALS",tutorialsTitle:"TUTORIALS",back:"BACK",tutorialSuccess:"Success!",nextTutorial:"Next Tutorial",tutKeysTitle:"Key Collection",tutHuntersTitle:"Hunters",start:"START",cancel:"CANCEL",confirm:"CONFIRM",pathfinderConfirmTitle:"Use Pathfinder?",pathfinderConfirmDesc:"This will consume 1 Pathfinder charge to reveal the shortest route.",degreeHint:"Controls the grid size. Higher values create larger, more complex mazes.",safeModeHint:"When active, no hunters will spawn in the maze.",storyMsg1:"The mystical church of chaos worship!",storyMsg2:"The greatest monument to chaos worship.",storyMsg3:"I am a priestess of the word of the Jelly god.",storyMsg4:"But their word is a lie! The chaos is a lie!",storyMsg5:"So I was condemned to exile...",storyMsg6:"Condemned to the void...",hudKeys:"KEYS",hudPathfinders:"PATHFINDERS",hudFloor:"Floor",hudVisited:"Visited",proximityDetector:"PROXIMITY DETECTOR",mapLegendTitle:"MAP LEGEND",legendVisited:"Visited Path",legendKnown:"Known Path",legendStart:"Starting Point",legendExit:"Maze Exit",legendHunter:"Void Hunter",legendTeleport:"Teleport",legendElevator:"Elevator",controlsHintTitle:"CONTROLS HINT",actionMove:"Move / Rotate",actionElevator:"Elevator Up / Down",actionMap:"3D Holographic Map",actionZoom:"Zoom Minimap",msgVoidHuntersDetected:"Void Hunters Detected",msgKeySecured:"Key secured ({collected}/{total})",msgExitUnlocked:"Exit unlocked",msgKeysRemaining:"{count} key(s) remaining",msgNoOtherActiveTeleport:"No other active teleports",msgExitFound:"Exit found",msgNoPathfindersRemaining:"No pathfinders remaining",msgExitNotFoundYet:"Exit not found yet",msgSafePointTeleport:"Safe point... Teleport?",msgOopsNoisyShit:"Oops... noisy sh*t!",msgWhereAmI:"Where am I?",msgElevatorUp:"Up?",msgElevatorDown:"Down?",msgWhichWay:"Which way?",msgDidYouHearThat:"Did you hear that?",msgIWasDetected:"Damn! I was detected.",msgFoundPathfinder:"Found a pathfinder!",msgWorldSaved:"World saved. What now?",msgKeyDropped:"Oh! Just dropped a key...",msgPlayerRespawn:"Ok.. ok.. guess I'm alive..",msgLockedIn:"I'm locked in!",msgFloorComplete:"Floor complete!",statusLabel:"HUNTER STATUS:",statusScanning:"SCANNING",statusActive:"ACTIVE",statusSleeping:"SLEEPING",statusTracking:"TRACKING MODE",statusConverging:"HUNTERS CONVERGING ({ticks} Ticks)",pauseTitle:"PAUSED",resume:"RESUME",victoryTitle:"Mission Accomplished",victoryText:"You have successfully navigated the 3D void.",victoryCompletion:"MAP COMPLETION: {percent}%",mapCompletion:"MAP COMPLETION",victoryDeaths:"DEATHS",victoryDegree:"MAZE DEGREE",victoryTime:"COMPLETION TIME",playAgain:"PLAY AGAIN",mainMenu:"MAIN MENU",gameOverTitle:"Terminated",gameOverText:"You were caught by the void hunters.",saving:"SAVING...",generatingMaze:"GENERATING MAZE...",hudMana:"Mana",victoryMana:"MANA COLLECTED",msgManaSecured:"Mana secured ({collected}/{total})",teleportAnomaly:"TELEPORT ANOMALY",ticks:"TICKS",map3dInstructions:"Drag to rotate | Scroll to zoom | M to return",teleportWarning:"TELEPORT",map:"MAP",teleport:"TELEPORT",teleportationLink:"TELEPORTATION LINK",teleportJumpSector:"Jump to Sector {floor}F?",teleportTargetGrid:"Target Grid: ({x}, {y})",teleportGo:"GO",teleportCancel:"CANCEL",actionJellyPortal:"Jelly God Portal",msgJellyPortalEarned:"I got a little power!",msgJellyPortalNotHere:"I can't do this here...",msgJellyPortalActivated:"Portal of the Jelly God!",msgJellyPortalNoPortalCount:"I need mana...",msgJellyPortalNotSafe:"Not safe, but teleport-able...",msgHunterReturned:"These things... they resurrect..."},ptBr:{gameTitle:"VOID ESCAPE",gameCredits:"um jogo de Bernard Rodrigues",activeHunters:"Caçadores Ativos",activeTeleports:"Teleportes Ativos",activeKeys:"Chaves Ativas",availablePathfinders:"Localizadores Disponíveis",mazeDegree:"Grau do Labirinto",safeMode:"Modo Seguro",generateMaze:"NOVO JOGO",continue:"CONTINUAR",tutorialsMenu:"TUTORIAIS",tutorialsTitle:"TUTORIAIS",back:"VOLTAR",tutorialSuccess:"Sucesso!",nextTutorial:"Próximo Tutorial",tutKeysTitle:"Coleta de Chaves",tutHuntersTitle:"Caçadores",start:"INICIAR",cancel:"CANCELAR",confirm:"CONFIRMAR",pathfinderConfirmTitle:"Usar Localizador?",pathfinderConfirmDesc:"Isso consumirá 1 carga de Localizador para revelar a rota mais curta.",degreeHint:"Controla o tamanho da grade. Valores maiores criam labirintos maiores e mais complexos.",safeModeHint:"Quando ativo, nenhum caçador surgirá no labirinto.",storyMsg1:"A igreja mística do culto ao caos!",storyMsg2:"O maior monumento ao culto do caos.",storyMsg3:"Sou uma sacerdotisa da palavra do deus Geleia.",storyMsg4:"Mas sua palavra é uma mentira! O caos é uma mentira!",storyMsg5:"Então fui condenada ao exílio...",storyMsg6:"Condenada ao vazio...",hudKeys:"CHAVES",hudPathfinders:"LOCALIZADORES",hudFloor:"Andar",hudVisited:"Visitado",proximityDetector:"DETECTOR DE PROXIMIDADE",mapLegendTitle:"LEGENDA DO MAPA",legendVisited:"Caminho Visitado",legendKnown:"Caminho Conhecido",legendStart:"Ponto de Partida",legendExit:"Saída do Labirinto",legendHunter:"Caçador do Vazio",legendTeleport:"Teleporte",legendElevator:"Elevador",controlsHintTitle:"DICA DE CONTROLES",actionMove:"Mover / Girar",actionElevator:"Elevador Subir / Descer",actionMap:"Mapa Holográfico 3D",actionZoom:"Zoom do Minimapa",msgVoidHuntersDetected:"Caçadores do Vazio Detectados",msgKeySecured:"Chave obtida ({collected}/{total})",msgExitUnlocked:"Saída destrancada",msgKeysRemaining:"{count} chave(s) restante(s)",msgNoOtherActiveTeleport:"Nenhum outro teleporte ativo",msgExitFound:"Saída encontrada",msgNoPathfindersRemaining:"Nenhum localizador restante",msgExitNotFoundYet:"Saída ainda não encontrada",msgSafePointTeleport:"Ponto seguro... Teleportar?",msgOopsNoisyShit:"Ops... troço barulhento!",msgWhereAmI:"Onde estou?",msgElevatorUp:"Subir?",msgElevatorDown:"Descer?",msgWhichWay:"Que direção?",msgDidYouHearThat:"Ouviu alguma coisa?",msgIWasDetected:"Droga! Fui detectada.",msgFoundPathfinder:"Localizador encontrado!",msgWorldSaved:"Salvei o mundo. E agora?",msgKeyDropped:"Ih... Derrubei uma chave...",msgPlayerRespawn:"Ok.. ok.. sobrevivi..",msgLockedIn:"Estou trancada!",msgFloorComplete:"Andar completo!",statusLabel:"STATUS DO CAÇADOR:",statusScanning:"ESCANEANDO",statusActive:"ATIVO",statusSleeping:"DORMINDO",statusTracking:"MODO DE RASTREAMENTO",statusConverging:"CAÇADORES CONVERGINDO ({ticks} Ticks)",pauseTitle:"PAUSA",resume:"RETOMAR",victoryTitle:"Missão Cumprida",victoryText:"Você atravessou o vazio 3D com sucesso.",victoryCompletion:"MAPA COMPLETO: {percent}%",mapCompletion:"MAPA COMPLETO",victoryDeaths:"MORTES",victoryDegree:"GRAU DO LABIRINTO",victoryTime:"TEMPO DE CONCLUSÃO",playAgain:"JOGAR NOVAMENTE",mainMenu:"MENU PRINCIPAL",gameOverTitle:"Eliminado",gameOverText:"Você foi pego pelos caçadores do vazio.",saving:"SALVANDO...",generatingMaze:"GERANDO LABIRINTO...",hudMana:"Mana",victoryMana:"MANA COLETADA",msgManaSecured:"Mana absorvida ({collected}/{total})",teleportAnomaly:"ANOMALIA DE TELEPORTE",ticks:"TICKS",map3dInstructions:"Arraste para girar | Role para zoom | M para voltar",teleportWarning:"TELEPORTE",map:"MAPA",teleport:"TELEPORTE",teleportationLink:"LINK DE TELEPORTE",teleportJumpSector:"Pular para o Setor {floor}F?",teleportTargetGrid:"Coordenada Alvo: ({x}, {y})",teleportGo:"IR",teleportCancel:"CANCELAR",actionJellyPortal:"Portal do Deus Geléia",msgJellyPortalEarned:"Ganhei um poderzinho!",msgJellyPortalNotHere:"Aqui eu não posso...",msgJellyPortalActivated:"Portal do Deus Geléia!",msgJellyPortalNoPortalCount:"Preciso de mana...",msgJellyPortalNotSafe:"Não seguro, mas teleportável...",msgHunterReturned:"Essas coisas ressuscitam..."},ja:{gameTitle:"ヴォイド・エスケープ",gameCredits:"ベルナルド・ホドリゲス制作",activeHunters:"アクティブなハンター",activeTeleports:"アクティブなテレポート",activeKeys:"アクティブな鍵",availablePathfinders:"使用可能なパスファインダー",mazeDegree:"迷路の難易度",safeMode:"セーフモード",generateMaze:"ニューゲーム",continue:"つづきから",tutorialsMenu:"チュートリアル",tutorialsTitle:"チュートリアル",back:"戻る",tutorialSuccess:"成功！",nextTutorial:"次のチュートリアル",tutKeysTitle:"鍵の収集",tutHuntersTitle:"ハンター",start:"スタート",cancel:"キャンセル",confirm:"確認",pathfinderConfirmTitle:"パスファインダーを使用しますか？",pathfinderConfirmDesc:"最短ルートを表示するためにパスファインダーを1チャージ消費します。",degreeHint:"グリッドのサイズを調整します。値が大きいほど、より広く複雑な迷路になります。",safeModeHint:"有効にすると、迷路にハンターが出現しなくなります。",storyMsg1:"混沌崇拝の神秘的な教会!",storyMsg2:"混沌崇拝の最大の記念碑。",storyMsg3:"私はゼリー神の言葉に仕える巫女よ。",storyMsg4:"でも彼らの言葉は嘘!混沌なんて嘘っぱちなんだから!",storyMsg5:"だから追放の刑に処されたの…",storyMsg6:"虚空へと追放されて…",hudKeys:"鍵",hudPathfinders:"パスファインダー",hudFloor:"階層",hudVisited:"訪問済み",proximityDetector:"近接探知機",mapLegendTitle:"マップ凡例",legendVisited:"訪問済みの道",legendKnown:"既知の道",legendStart:"スタート地点",legendExit:"迷路の出口",legendHunter:"虚空のハンター",legendTeleport:"テレポート",legendElevator:"エレベーター",controlsHintTitle:"操作方法",actionMove:"移動 / 回転",actionElevator:"エレベーター 上昇 / 下降",actionMap:"3Dホログラフィックマップ",actionZoom:"ミニマップのズーム",msgVoidHuntersDetected:"虚空のハンターを検知",msgKeySecured:"鍵を入手 ({collected}/{total})",msgExitUnlocked:"出口の鍵が開いた",msgKeysRemaining:"残り{count}個の鍵",msgNoOtherActiveTeleport:"他に有効なテレポートはない",msgExitFound:"出口を発見",msgNoPathfindersRemaining:"パスファインダーが残っていない",msgExitNotFoundYet:"出口はまだ見つかっていない",msgSafePointTeleport:"安全地帯…テレポートする?",msgOopsNoisyShit:"あら…うるさいったらないわね!",msgWhereAmI:"ここどこ?",msgElevatorUp:"上る?",msgElevatorDown:"下る?",msgWhichWay:"どっちの道?",msgDidYouHearThat:"今の聞こえた?",msgIWasDetected:"しまった、見つかっちゃった!",msgFoundPathfinder:"パスファインダー発見!",msgWorldSaved:"世界を救っちゃった。さて、次は?",msgKeyDropped:"あ、鍵落としちゃった…",msgPlayerRespawn:"よしよし…どうやらまだ生きてるな…",msgLockedIn:"閉じ込められちゃった！",msgFloorComplete:"フロア完了！",statusLabel:"ハンターの状態:",statusScanning:"スキャン中",statusActive:"アクティブ",statusSleeping:"スリープ中",statusTracking:"追跡モード",statusConverging:"ハンターが接近中 ({ticks} ティック)",pauseTitle:"一時停止",resume:"再開",victoryTitle:"任務完了",victoryText:"3Dの虚空を無事に踏破した。",victoryCompletion:"マップ達成度: {percent}%",mapCompletion:"マップ達成度",victoryDeaths:"死亡数",victoryDegree:"迷路の次数",victoryTime:"クリア時間",playAgain:"もう一度プレイ",mainMenu:"メインメニュー",gameOverTitle:"終了",gameOverText:"虚空のハンターに捕まってしまった。",saving:"セーブ中…",generatingMaze:"迷路生成中...",hudMana:"マナ",victoryMana:"マナ回収量",msgManaSecured:"マナを獲得しました ({collected}/{total})",teleportAnomaly:"テレポート異常",ticks:"ティック",map3dInstructions:"ドラッグで回転 | スクロールでズーム | Mキーで戻る",teleportWarning:"テレポート",map:"マップ",teleport:"テレポート",teleportationLink:"テレポートリンク",teleportJumpSector:"{floor}階のセクターへ移動する?",teleportTargetGrid:"目標座標: ({x}, {y})",teleportGo:"移動",teleportCancel:"キャンセル",actionJellyPortal:"ゼリー神のポータル",msgJellyPortalEarned:"ちょっとした力を手に入れた！",msgJellyPortalNotHere:"ここでは使えないわ...",msgJellyPortalActivated:"ゼリー神のポータル！",msgJellyPortalNoPortalCount:"マナが必要よ...",msgJellyPortalNotSafe:"安全ではないけれど、テレポートはできるわ...",msgHunterReturned:"あいつら、蘇るの…？"},es:{gameTitle:"ESCAPE DEL VACÍO",gameCredits:"un juego de Bernard Rodrigues",activeHunters:"Cazadores Activos",activeTeleports:"Teletransportes Activos",activeKeys:"Llaves Activas",availablePathfinders:"Localizadores Disponibles",mazeDegree:"Grado del Laberinto",safeMode:"Modo Seguro",generateMaze:"NUEVA PARTIDA",continue:"CONTINUAR",tutorialsMenu:"TUTORIALES",tutorialsTitle:"TUTORIALES",back:"VOLVER",tutorialSuccess:"¡Éxito!",nextTutorial:"Siguiente Tutorial",tutKeysTitle:"Recolección de Llaves",tutHuntersTitle:"Cazadores",start:"INICIAR",cancel:"CANCELAR",confirm:"CONFIRMAR",pathfinderConfirmTitle:"¿Usar localizador?",pathfinderConfirmDesc:"Esto consumirá 1 carga de localizador para revelar la ruta más corta.",degreeHint:"Controla el tamaño de la cuadrícula. Valores más altos crean laberintos más grandes y complejos.",safeModeHint:"Cuando está activo, no aparecerán cazadores en el laberinto.",storyMsg1:"¡La mística iglesia del culto al caos!",storyMsg2:"El mayor monumento al culto del caos.",storyMsg3:"Soy una sacerdotisa de la palabra del dios Gelatina.",storyMsg4:"¡Pero su palabra es una mentira! ¡El caos es mentira!",storyMsg5:"Así que fui condenada al exilio...",storyMsg6:"Condenada al vacío...",hudKeys:"LLAVES",hudPathfinders:"LOCALIZADORES",hudFloor:"Piso",hudVisited:"Visitado",proximityDetector:"DETECTOR DE PROXIMIDAD",mapLegendTitle:"LEYENDA DEL MAPA",legendVisited:"Camino Visitado",legendKnown:"Camino Conocido",legendStart:"Punto de Partida",legendExit:"Salida del Laberinto",legendHunter:"Cazador del Vacío",legendTeleport:"Teletransporte",legendElevator:"Ascensor",controlsHintTitle:"AYUDA DE CONTROLES",actionMove:"Mover / Girar",actionElevator:"Ascensor Subir / Bajar",actionMap:"Mapa Holográfico 3D",actionZoom:"Zoom del Minimapa",msgVoidHuntersDetected:"Cazadores del Vacío Detectados",msgKeySecured:"Llave obtenida ({collected}/{total})",msgExitUnlocked:"Salida desbloqueada",msgKeysRemaining:"{count} llave(s) restante(s)",msgNoOtherActiveTeleport:"No hay otros teletransportes activos",msgExitFound:"Salida encontrada",msgNoPathfindersRemaining:"No quedan localizadores",msgExitNotFoundYet:"Salida aún no encontrada",msgSafePointTeleport:"Punto seguro... ¿Teletransportarse?",msgOopsNoisyShit:"Ups... ¡qué cosa tan ruidosa!",msgWhereAmI:"¿Dónde estoy?",msgElevatorUp:"¿Subir?",msgElevatorDown:"¿Bajar?",msgWhichWay:"¿Por dónde?",msgDidYouHearThat:"¿Escuchaste eso?",msgIWasDetected:"¡Rayos! Fui detectada.",msgFoundPathfinder:"¡Localizador encontrado!",msgWorldSaved:"Salvé el mundo. ¿Y ahora qué?",msgKeyDropped:"¡Ah! Se me cayó una llave...",msgPlayerRespawn:"Vale.. vale.. parece que sigo viva..",msgLockedIn:"¡Estoy encerrada!",msgFloorComplete:"¡Piso completado!",statusLabel:"ESTADO DEL CAZADOR:",statusScanning:"ESCANEANDO",statusActive:"ACTIVO",statusSleeping:"DURMIENDO",statusTracking:"MODO DE RASTREO",statusConverging:"CAZADORES CONVERGIENDO ({ticks} Ticks)",pauseTitle:"PAUSA",resume:"REANUDAR",victoryTitle:"Misión Cumplida",victoryText:"Atravesaste el vacío 3D con éxito.",victoryCompletion:"MAPA COMPLETADO: {percent}%",mapCompletion:"MAPA COMPLETADO",victoryDeaths:"MUERTES",victoryDegree:"GRADO DEL LABERINTO",victoryTime:"TIEMPO DE FINALIZACIÓN",playAgain:"JUGAR DE NUEVO",mainMenu:"MENÚ PRINCIPAL",gameOverTitle:"Eliminada",gameOverText:"Fuiste atrapada por los cazadores del vacío.",saving:"GUARDANDO...",generatingMaze:"GENERANDO LABIRINTO...",hudMana:"Maná",victoryMana:"MANÁ RECOLECTADA",msgManaSecured:"Maná asegurado ({collected}/{total})",teleportAnomaly:"ANOMALÍA DE TELETRANSPORTE",ticks:"TICKS",map3dInstructions:"Arrastra para girar | Desplázate para zoom | M para volver",teleportWarning:"TELETRANSPORTE",map:"MAPA",teleport:"TELETRANSPORTE",teleportationLink:"ENLACE DE TELETRANSPORTE",teleportJumpSector:"¿Saltar al Sector {floor}F?",teleportTargetGrid:"Coordenada Objetivo: ({x}, {y})",teleportGo:"IR",teleportCancel:"CANCELAR",actionJellyPortal:"Portal del Dios Gelatina",msgJellyPortalEarned:"¡Tengo un pequeno poder!",msgJellyPortalNotHere:"No puedo hacer esto aquí...",msgJellyPortalActivated:"¡Portal del Dios Gelatina!",msgJellyPortalNoPortalCount:"Necesito maná...",msgJellyPortalNotSafe:"No es seguro, pero se puede teletransportar...",msgHunterReturned:"Esas cosas resucitan..."}};let mn="en";function rs(s){xa[s]?mn=s:mn="en"}function Sr(){return mn}function nm(){if(typeof navigator<"u"){const s=navigator.language||navigator.userLanguage;if(s){const t=s.toLowerCase();if(t.startsWith("pt")){rs("ptBr");return}if(t.startsWith("ja")){rs("ja");return}if(t.startsWith("es")){rs("es");return}}}rs("en")}nm();function Ot(s,t={},e=mn){var n,a;let i=((n=xa[e])==null?void 0:n[s])||((a=xa.en)==null?void 0:a[s])||s;return Object.keys(t).forEach(r=>{i=i.replace(`{${r}}`,t[r])}),i}function xn(s=mn){typeof document<"u"&&document.querySelectorAll("[data-i18n]").forEach(e=>{const i=e.getAttribute("data-i18n");if(i){const n=Ot(i,{},s);n!==i&&(e instanceof HTMLInputElement&&e.type==="button"?e.value=n:e.textContent=n)}})}class dl{constructor(){O(this,"_data");this._data=[]}get size(){return this._data.length}push(t){this._data.push(t),this._bubbleUp(this._data.length-1)}pop(){const t=this._data[0],e=this._data.pop();return this._data.length>0&&e!==void 0&&(this._data[0]=e,this._siftDown(0)),t}_bubbleUp(t){for(;t>0;){const e=t-1>>1;if(this._data[e].f<=this._data[t].f)break;[this._data[e],this._data[t]]=[this._data[t],this._data[e]],t=e}}_siftDown(t){const e=this._data.length;for(;;){let i=t;const n=2*t+1,a=2*t+2;if(n<e&&this._data[n].f<this._data[i].f&&(i=n),a<e&&this._data[a].f<this._data[i].f&&(i=a),i===t)break;[this._data[i],this._data[t]]=[this._data[t],this._data[i]],t=i}}}const sm=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1}],ul=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];function vs(s,t,e,i,n,a){return Math.abs(s-i)+Math.abs(t-n)+Math.abs(e-a)}function fl(s,t,e,i,n=0,a=null){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return[];const r=new Map,o=new Map,l=`${s.x},${s.y},${s.z}`;o.set(l,0);const c=new dl;for(c.push({f:vs(s.x,s.y,s.z,t.x,t.y,t.z),node:s});c.size>0;){const u=c.pop();if(!u)continue;const{node:f}=u,p=`${f.x},${f.y},${f.z}`;if(f.x===t.x&&f.y===t.y&&f.z===t.z)return am(r,p);const m=o.get(p)??0;for(const{dx:T,dy:y,dz:h}of ul){const d=f.x+T,_=f.y+y,g=f.z+h;if(d<0||d>=i||_<0||_>=i||g<0||g>=i||a&&d===a.x&&_===a.y&&g===a.z)continue;const v=e[d*i*i+_*i+g];if(v===n||v===8)continue;if(h!==0){const S=f.z+h/2;if(e[f.x*i*i+f.y*i+S]===n)continue}const E=`${d},${_},${g}`,x=m+1;x<(o.get(E)??1/0)&&(r.set(E,f),o.set(E,x),c.push({f:x+vs(d,_,g,t.x,t.y,t.z),node:{x:d,y:_,z:g}}))}}return null}function am(s,t){const e=[];let i=t;for(;s.has(i);){const n=s.get(i);if(!n)break;const[a,r,o]=i.split(",").map(Number);e.push({x:a,y:r,z:o}),i=`${n.x},${n.y},${n.z}`}return e.reverse(),e}function om(s,t,e,i,n=0,a=1/0,r=null){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return 0;const o=new Map,l=`${s.x},${s.y},${s.z}`;o.set(l,0);const c=new dl;for(c.push({f:vs(s.x,s.y,s.z,t.x,t.y,t.z),node:s});c.size>0;){const u=c.pop();if(!u)continue;const{node:f}=u,p=`${f.x},${f.y},${f.z}`,m=o.get(p)??0;if(m>a)return 1/0;if(f.x===t.x&&f.y===t.y&&f.z===t.z)return m;for(const{dx:T,dy:y,dz:h}of ul){const d=f.x+T,_=f.y+y,g=f.z+h;if(d<0||d>=i||_<0||_>=i||g<0||g>=i||r&&d===r.x&&_===r.y&&g===r.z)continue;const v=e[d*i*i+_*i+g];if(v===n||v===8)continue;if(h!==0){const S=f.z+h/2;if(e[f.x*i*i+f.y*i+S]===n)continue}const E=`${d},${_},${g}`,x=m+1;x<(o.get(E)??1/0)&&(o.set(E,x),c.push({f:x+vs(d,_,g,t.x,t.y,t.z),node:{x:d,y:_,z:g}}))}}return 1/0}function rm(s,t,e,i,n=0,a=10){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return 0;const r=[{x:s.x,y:s.y,z:s.z,dist:0}];let o=0;const l=new Map;for(l.set(`${s.x},${s.y},${s.z}`,0);o<r.length;){const c=r[o++];if(!(c.dist>a))for(const{dx:u,dy:f,dz:p}of sm){const m=c.x+u,T=c.y+f,y=c.z+p;if(m<0||m>=i||T<0||T>=i||y<0||y>=i)continue;const h=e[m*i*i+T*i+y];if(h===n||h===8)continue;const d=`${m},${T},${y}`,g=y%2===0?0:1,v=c.dist+g;if(v<(l.get(d)??1/0)){if(l.set(d,v),m===t.x&&T===t.y&&y===t.z)return v;g===0?r.splice(o,0,{x:m,y:T,z:y,dist:v}):r.push({x:m,y:T,z:y,dist:v})}}}return 1/0}function lm(s,t,e,i,n,a){const r=[{x:s.x,y:s.y,z:s.z,path:[]}];let o=0;const l=new Uint8Array(i*i*i);for(l[s.x*i*i+s.y*i+s.z]=1;o<r.length;){const c=r[o++],u=`${c.x},${c.y},${c.z}`;if(!t.has(u))return c.path;const f=a(c.x,c.y,c.z,e,n,!1);for(const p of f){const m=p.x*i*i+p.y*i+p.z;l[m]||(l[m]=1,r.push({x:p.x,y:p.y,z:p.z,path:[...c.path,p]}))}}return null}class ra{constructor(t,e,i){O(this,"maze");O(this,"id");O(this,"history");O(this,"visitedNodes");O(this,"pathToTarget");O(this,"x");O(this,"y");O(this,"z");O(this,"visualX");O(this,"visualY");O(this,"visualZ");O(this,"state");O(this,"lastPos");O(this,"jellyTime");O(this,"respawnThresholdPercentage");O(this,"lowCanvas");O(this,"lctx");this.maze=t,this.id=i,this.history=[],this.visitedNodes=new Set,this.pathToTarget=[],e?(this.x=e.x,this.y=e.y,this.z=e.z,this.visualX=e.x,this.visualY=e.y,this.visualZ=e.z,this.state="WANDERING",this.lastPos={x:this.x,y:this.y,z:this.z},this.visitedNodes.add(`${this.x},${this.y},${this.z}`)):(this.x=null,this.y=null,this.z=null,this.visualX=null,this.visualY=null,this.visualZ=null,this.state="SLEEP",this.lastPos=null),this.jellyTime=0,this.respawnThresholdPercentage=null,typeof document<"u"&&(this.lowCanvas=document.createElement("canvas"),this.lowCanvas.width=64,this.lowCanvas.height=64,this.lctx=this.lowCanvas.getContext("2d",{willReadFrequently:!0}))}generateCloudTexture(t=.016){if(this.state==="SLEEP"||(this.jellyTime+=t,typeof document>"u"||!this.lctx))return;const e=64,i=this.lctx;i.globalCompositeOperation="destination-out",i.fillStyle="rgba(0, 0, 0, 0.22)",i.fillRect(0,0,e,e),i.globalCompositeOperation="source-over";const n=this.jellyTime;try{const a=i.getImageData(0,0,e,e),r=a.data;for(let o=0;o<e;o++)for(let l=0;l<e;l++){const c=l-e/2,u=o-e/2,f=Math.sqrt(c*c+u*u),p=Math.sin(n*1.5+l*.08)*2.5,m=e*.35+p;if(f<m+Math.random()*1.5){const T=90+Math.floor(Math.random()*45),y=10+Math.floor(Math.random()*20),h=140+Math.floor(Math.random()*60),d=(o*e+l)*4;r[d]=T,r[d+1]=y,r[d+2]=h,r[d+3]=255}}i.putImageData(a,0,0)}catch{}if(Math.random()<.04){i.fillStyle=Math.random()<.7?"#ffffff":"#b3ffff";const a=e/2-8+Math.random()*16,r=e/2-8+Math.random()*16;i.fillRect(a,r,2+Math.random()*3,4+Math.random()*10)}if(Math.random()<.12){const a=Math.floor(Math.random()*3)+1,r=["#00ff66","#ff0055","#00ccff","#ffff00","#ffffff"];for(let o=0;o<a;o++){const l=Math.floor(Math.random()*e),c=Math.floor(Math.random()*e),u=l-e/2,f=c-e/2;if(Math.sqrt(u*u+f*f)<e*.32){const m=Math.floor(Math.random()*4)+2,T=Math.floor(Math.random()*2)+1;i.fillStyle=r[Math.floor(Math.random()*r.length)],i.fillRect(l,c,m,T)}}}if(Math.random()<.08){const a=Math.floor(Math.random()*e),r=Math.floor(Math.random()*6)+2,o=Math.floor(Math.random()*6)-3;try{const l=i.getImageData(0,a,e,r);i.clearRect(0,a,e,r),i.putImageData(l,o,a)}catch{}}}move(t,e,i){if(this.state==="SLEEP"||this.state==="DEAD_BY_JELLY"||this.x===null||this.y===null||this.z===null)return;const n=this.getValidNeighbors(e,i);if(n.length===0)return;const a=Math.round(Math.cbrt(e.length)),r=e.get?e.get(this.x,this.y,this.z):e[this.x*a*a+this.y*a+this.z]??0;(r===i.VISITED||r===i.JELLY_PORTAL)&&this.state!=="TELEPORT_TRACKING"&&this.state!=="TRACKING"&&(this.state="TRACKING",this.pathToTarget=[],this.visitedNodes.clear(),this.visitedNodes.add(`${this.x},${this.y},${this.z}`));let o;if(this.pathToTarget.length>0){const l=this.pathToTarget[0],c=e[l.x*a*a+l.y*a+l.z];(this.state==="TRACKING"?c===i.VISITED||c===i.START||c===i.EXIT||c===i.JELLY_PORTAL:c!==i.WALL)?o=this.pathToTarget.shift():this.pathToTarget=[]}if(!o)if(this.state==="TELEPORT_TRACKING")o=void 0;else{let l=this.findPathToNearestUnvisited(e,i);if((!l||l.length===0)&&(this.visitedNodes.clear(),this.visitedNodes.add(`${this.x},${this.y},${this.z}`),l=this.findPathToNearestUnvisited(e,i)),l&&l.length>0)this.pathToTarget=l,o=this.pathToTarget.shift();else{const c=this.lastPos||{x:this.x,y:this.y,z:this.z},u=n.filter(f=>f.x!==c.x||f.y!==c.y||f.z!==c.z);o=u.length>0?u[Math.floor(Math.random()*u.length)]:n[0]}}o&&(this.history.push({x:this.x,y:this.y,z:this.z}),this.history.length>2&&this.history.shift(),this.lastPos={x:this.x,y:this.y,z:this.z},this.x=o.x,this.y=o.y,this.z=o.z,this.visitedNodes.add(`${this.x},${this.y},${this.z}`))}findPathToTarget(t,e,i){const n=Math.round(Math.cbrt(e.length));return fl({x:this.x,y:this.y,z:this.z},t,e,n,i.WALL,this.maze.startPos)}findPathToNearestUnvisited(t,e){const i=Math.round(Math.cbrt(t.length));return lm({x:this.x,y:this.y,z:this.z},this.visitedNodes,t,i,e,(n,a,r,o,l)=>this.getValidNeighbors(o,l,n,a,r,this.state==="TRACKING"))}getValidNeighbors(t,e,i=this.x,n=this.y,a=this.z,r=this.state==="TRACKING"){const o=[],l=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}],c=Math.round(Math.cbrt(t.length));for(const u of l){const f=i+u.dx,p=n+u.dy,m=a+u.dz;if(f>=0&&f<c&&p>=0&&p<c&&m>=0&&m<c){const T=Math.floor(this.maze.startPos.x),y=Math.floor(this.maze.startPos.y),h=this.maze.startPos.z,d=this.maze.inactiveTeleportPos&&this.maze.inactiveTeleportPos.x===T&&this.maze.inactiveTeleportPos.y===y&&this.maze.inactiveTeleportPos.z===h;if(f===T&&p===y&&m===h&&!d)continue;const _=t[f*c*c+p*c+m];if(_===e.EXIT)continue;if(_!==e.WALL&&_!==8){if(u.dz!==0){const g=a+u.dz/2;if(t[i*c*c+n*c+g]===e.WALL)continue}r?(_===e.VISITED||_===e.START||_===e.EXIT||_===e.JELLY_PORTAL||this.maze.visitedCells&&this.maze.visitedCells.has(`${f},${p},${m}`))&&o.push({x:f,y:p,z:m}):o.push({x:f,y:p,z:m})}}}return o}}const Di=[{id:"tutorial_keys",title:{en:"Key Collection",ptBr:"Coleta de Chaves",ja:"鍵集め",es:"Recolección de Llaves"},description:{en:"Collect all available keys to unlock the exit portal.{img}The number of remaining keys is displayed in the game info panel.{img}Once all keys are collected, the exit portal will be unlocked.{img}",ptBr:"Capture todas as chaves disponíveis para liberar a saída.{img}O número de chaves restantes é exibido no painel de informações do jogo.{img}Ao coletar todas as chaves, o portal de saída será liberado.{img}",ja:"すべての鍵を集めて、出口ポータルを開放しよう。{img}残りの鍵の数は、ゲームの情報パネルに表示される。{img}すべての鍵を集めると、出口ポータルが開放される。{img}",es:"Recoge todas las llaves disponibles para liberar la salida.{img}El número de llaves restantes se muestra en el panel de información del juego.{img}Una vez recogidas todas las llaves, se liberará el portal de salida.{img}"},images:["assets/images/tutorials/tutorial1-1.png","assets/images/tutorials/tutorial1-2.png","assets/images/tutorials/tutorial1-3.png"],layers:[["#######","#######","#######","#######","#######"],["#######","S....K#","###.###","#K....E","#######"],["#######","#######","#######","#######","#######"]],pathfinders:0,mana:0,jellyPortals:0},{id:"tutorial_elevators",title:{en:"Elevators",ptBr:"Elevadores",ja:"エレベーター",es:"Ascensores"},description:{en:`Use the elevators to reach the floors above and below.{img}{img}{img}Press E (desktop)/Y (gamepad) to go up and Q (desktop)/A (gamepad) to go down.
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
- INACTIVO: es el modo predeterminado de los mapas en Modo Seguro. No habrá cazadores del vacío en estas partidas.`},images:["assets/images/tutorials/tutorial4-1.png","assets/images/tutorials/tutorial4-2.png","assets/images/tutorials/tutorial4-3.png","assets/images/tutorials/tutorial4-4.png"],layers:[["#######","#######","#######","#######","#######","#######","#######"],["#######","S..H..E","###.###","#K...T#","###.###","#T...K#","#######"],["#######","#######","#######","#######","#######","#######","#######"]],pathfinders:0,mana:0,jellyPortals:0,revealed:!0,hunterBehavior:{static:!1,respawn:!0,fixed:!0}},{id:"tutorial_mana_and_jelly_portals",title:{en:"Mana and Jelly Portals",ptBr:"Mana e Portais de Geleia",ja:"マナとジェリーのポータル",es:"Mana y Portales de Gelatina"},description:{en:"Collect mana as you explore the maze.{img}For every 10 mana collected, you gain one charge of power.{img}These charges can be used to activate your secret ability: the Portal of the Jelly God!{img}Use R (desktop)/RB (gamepad) to activate this ability, or use the activation button in the bottom left corner on mobile devices.{img}This ability adds a teleport portal at the player's current position (a save point, but not a safe one).{img}It also destroys all void hunters in the area of effect.{img}Previously visited points will be forgotten.{img}{img}The Portal of the Jelly God's area of effect reaches 5 tiles away (Manhattan distance; diagonals are not taken into account).{img}",ptBr:"Colete mana durante sua exploração do loabirinto.{img}A cada 10 mana coletado, você ganha uma carga de poderzinho.{img}Essas cargas podem ser utilizadas para ativar sua habilidade secreta: o Portal do Deus Geleia!{img}Use R (desktop)/RB (gamepad) para ativar essa habilidade ou utilize o botão de ativação no canto inferior esquerdo, em dispositivos mobile.{img}Essa habilidade adiciona um portal de teleporte na posição atual do jogador (um ponto de salvamento, mas não seguro).{img}Além disso, destrói todos os void hunters na área de efeito.{img}Pontos visitados anteriormente serão esquecidos.{img}{img}A área de atuação do Portal do Deus Geleia é de 5 quadros de distância (distância de Manhattan; diagonais não são levadas em consideração).{img}",ja:"迷路を探索しながらマナを集めよう。{img}マナを10集めるごとに、パワーのチャージが1つ手に入る。{img}このチャージを使えば、秘密の能力——ジェリーの神のポータル——を発動できる!{img}このアビリティはR(デスクトップ)/RB(ゲームパッド)で発動できる。モバイル端末では、画面左下の発動ボタンを使おう。{img}この能力は、プレイヤーの現在地にテレポートポータルを追加する(セーブポイントだが安全とは限らない)。{img}さらに、効果範囲内のボイドハンターをすべて消し去る。{img}一度訪れたポイントは忘れられてしまう。{img}{img}ジェリーの神のポータルの効果範囲は、5マス以内だ(マンハッタン距離。斜め方向は考慮されない)。{img}",es:"Recoge mana mientras exploras el laberinto.{img}Por cada 10 de mana recogido, obtienes una carga de poder.{img}Estas cargas pueden usarse para activar tu habilidad secreta: ¡el Portal del Dios de la Gelatina!{img}Usa R (escritorio)/RB (mando) para activar esta habilidad, o utiliza el botón de activación en la esquina inferior izquierda en dispositivos móviles.{img}Esta habilidad añade un portal de teletransporte en la posición actual del jugador (un punto de guardado, pero no seguro).{img}Además, destruye a todos los cazadores del vacío en el área de efecto.{img}Los puntos visitados anteriormente se olvidarán.{img}{img}El área de efecto del Portal del Dios de la Gelatina alcanza 5 casillas de distancia (distancia de Manhattan; las diagonales no se toman en cuenta).{img}"},images:["assets/images/tutorials/tutorial6-1.png","assets/images/tutorials/tutorial6-2.png","assets/images/tutorials/tutorial6-3.png","assets/images/tutorials/tutorial6-4.png","assets/images/tutorials/tutorial6-5.png","assets/images/tutorials/tutorial6-6.png","assets/images/tutorials/tutorial6-7.png","assets/images/tutorials/tutorial6-8.png","assets/images/tutorials/tutorial6-9.png"],layers:[["######","######","######","######","######"],["######","S...M#","##.###","#M..HE","######"],["######","######","######","######","######"]],pathfinders:0,mana:8,jellyPortals:0,hunterBehavior:{static:!0,respawn:!1,fixed:!0}},{id:"tutorial_pathfinder",title:{en:"Pathfinding",ptBr:"Localizador de Caminhos",ja:"経路探索",es:"Localizador de Caminos"},description:{en:`Use pathfinders to find the shortest route to teleporters, unvisited adjacent blocks, or the maze exit.{img}The shortest path to the destination will be highlighted on both the maze and the map.{img}To activate a pathfinder, simply click on the point of interest, or navigate to it and press space or enter (desktop) or X (gamepad).
A confirmation message will be shown.{img}The number of available pathfinders will be displayed on the game's info panel.{img}`,ptBr:`Use localizadores para encontrar a rota mais curta até teleportes, blocos adjacentes não visitados ou a saída do labirinto.{img}O caminho mais curto até o destino será destacado no labirinto e no mapa.{img}Para ativar um localizador, basta clicar sobre o ponto de interesse ou navegar e pressionar espaço ou enter (desktop) ou X (gamepad).
Uma mensagem de confirmação será exibida.{img}O número de localizadores disponíveis será exibido no painel de informações do jogo.{img}`,ja:`パスファインダーを使って、テレポーター、まだ訪れていない隣接ブロック、または迷路の出口までの最短ルートを見つけよう。{img}目的地までの最短経路は、迷路とマップの両方でハイライト表示される。{img}パスファインダーを起動するには、対象の地点をクリックするか、そこまで移動してスペースキーかEnterキー(デスクトップ)、またはXボタン(ゲームパッド)を押そう。
確認メッセージが表示される。{img}利用可能なパスファインダーの数は、ゲームの情報パネルに表示される。{img}`,es:`Utiliza los localizadores para encontrar la ruta más corta hacia teletransportadores, bloques adyacentes no visitados o la salida del laberinto.{img}El camino más corto hasta el destino se resaltará tanto en el laberinto como en el mapa.{img}Para activar un localizador, simplemente haz clic sobre el punto de interés, o navega hasta él y presiona espacio o intro (escritorio) o X (mando).
Se mostrará un mensaje de confirmación.{img}El número de localizadores disponibles se mostrará en el panel de información del juego.{img}`},images:["assets/images/tutorials/tutorial7-1.png","assets/images/tutorials/tutorial7-2.png","assets/images/tutorials/tutorial7-3.png","assets/images/tutorials/tutorial7-4.png"],layers:[["###########","###########","###########","###########","###########","###########","###########"],["###########","#...#.....#","#.#######.#","#.#...#.#.#","#.#.#.#.#.#","#.#.#.#.#.E","###########"],["###########","###.#.#####","###########","#######.###","###########","###.#######","###########"],["###########","#.#.#.###.#","#.#.#.###.#","#...#.#...#","#.#.#.###.#","#.#.#.###.#","###########"],["###########","#.#######.#","###########","###########","###########","#####.###.#","###########"],["###########","#.........#","#.###.###.#","#.#A#.#A#.#","#.#A#.#A#.#","S.###.###.#","###########"],["###########","###########","###########","###########","###########","###########","###########"]],pathfinders:5,mana:0,jellyPortals:0,revealed:!0},{id:"tutorial_map_and_zoom",title:{en:"Map and Zoom",ptBr:"Mapa e Zoom",ja:"マップとズーム",es:"Mapa y Zoom"},description:{en:`Some maps may be too large to fit on the screen.{img}Use the map and zoom to navigate.
The map can be toggled with the Z key (desktop) or the SELECT button (gamepad).
On mobile devices, use the panel at the bottom of the screen.{img}{img}Zoom can be toggled with the Z key (desktop) or the B button (gamepad).
On mobile devices, use the magnifying glass at the bottom right of the screen.{img}
A surprise awaits you at the end of this challenge.{img}`,ptBr:`Alguns mapas podem ser grandes demais para caber na tela.{img}Use o mapa e o zoom para se localizar.
O mapa pode ser ativado através da tela Z (desktop) ou do botão SELECT (gamepad).
Em dispositivos móveis, use o painel na parte inferior da tela.{img}{img}O zoom pode ser alternado utilizando a tecla Z (desktop) ou o botão B (gamepad).
Em dispositivos móveis, use a lupa na parte inferior direita da tela.{img}
Uma surpresa te aguarda no final deste desafio.{img}`,ja:`マップによっては画面に収まらないほど広い場合がある。{img}マップとズーム機能を使って移動しよう。
マップはZキー(デスクトップ)またはSELECTボタン(ゲームパッド)で切り替えられる。
モバイル端末では、画面下部のパネルを使おう。{img}{img}ズームはZキー(デスクトップ)またはBボタン(ゲームパッド)で切り替えられる。
モバイル端末では、画面右下の虫眼鏡アイコンを使おう。{img}
このチャレンジの最後にサプライズが待っています。{img}`,es:`Algunos mapas pueden ser demasiado grandes para caber en la pantalla.{img}Utiliza el mapa y el zoom para navegar.
El mapa se puede activar con la tecla Z (escritorio) o el botón SELECT (mando).
En dispositivos móviles, usa el panel en la parte inferior de la pantalla.{img}{img}El zoom se puede alternar con la tecla Z (escritorio) o el botão B (mando).
En dispositivos móviles, usa la lupa en la parte inferior derecha de la pantalla.{img}
Una sorpresa te espera al final de este desafío.{img}`},images:["assets/images/tutorials/tutorial5-1.png","assets/images/tutorials/tutorial5-2.png","assets/images/tutorials/tutorial5-3.png","assets/images/tutorials/tutorial5-4.png","assets/images/tutorials/tutorial5-5.png"],layers:[["##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################"],["##############################","S.............T..............E","##############.###############","############A#.#A#############","##############.###############","##############.###############","##############.###############","############A#.#A#############","##############.###############","##############.###############","##############.###############","############A#.#A#############","##############.###############","##############.###############","##############.###############","############A#.#A#############","##############.###############","##############.###############","##############.###############","############A#.#A#############","##############.###############","##############.###############","##############.###############","############A#.#A#############","##############.###############","##############.###############","####A###A###A#.#A###A###A#####","##############.###############","#K............T.............K#","##############################"],["##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################"]],pathfinders:0,mana:0,jellyPortals:0}];function xr(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function cm(s,t){const e=l=>l.replace(/\n/g,"<br/>").replace(/\\n/g,"<br/>");if(!t||t.length===0||!s.includes("{img}"))return e(xr(s));const i=s.split("{img}"),n=[];let a=0;i[0]&&n.push({type:"text",content:i[0]});let r=[];for(let l=1;l<i.length;l++){a<t.length&&r.push(t[a++]);const c=i[l];c.trim()===""||(r.length>0&&(n.push({type:"image-group",content:"",images:r}),r=[]),n.push({type:"text",content:c}))}r.length>0&&n.push({type:"image-group",content:"",images:r});let o="";for(let l=0;l<n.length;l++){const c=n[l];if(c.type==="text")o+=`<span>${e(xr(c.content))}</span>`;else if(c.type==="image-group"&&c.images&&c.images.length>0){const u=l>0&&n[l-1].type==="text",f=l+1<n.length&&n[l+1].type==="text",p=u?"<br/>":"",m=f?"<br/>":"";if(c.images.length===1)o+=`${p}<img src="${c.images[0]}" class="tutorial-desc-image" alt="Tutorial Screenshot" />${m}`;else{let T="";for(const y of c.images)T+=`<img src="${y}" class="tutorial-desc-image-in-group" alt="Tutorial Screenshot" />`;o+=`${p}<div class="tutorial-desc-image-group">${T}</div>${m}`}}}return o}class br{constructor(t,e,i=null){O(this,"n");O(this,"branchingFactor");O(this,"size");O(this,"seed");O(this,"random");O(this,"matrix");O(this,"TYPES");O(this,"startPos");O(this,"tutorialHunterSpawns",[]);const n=t!==void 0?t:X.MAZE_DEGREE!==void 0?X.MAZE_DEGREE:8,a=e!==void 0?e:X.BRANCHING_FACTOR!==void 0?X.BRANCHING_FACTOR:.2;this.n=Math.max(3,Math.min(16,n)),this.branchingFactor=Math.max(0,Math.min(1,a)),this.size=2*this.n+1,i!=null?(this.seed=i,this.random=this.createSeededRandom(i)):(this.seed=null,this.random=Math.random),this.matrix=this.initMatrix(),this.TYPES={WALL:0,PATH:1,VISITED:2,START:3,EXIT:4,ELEVATOR_VISITED:5,TELEPORT:6,KEY:7,STATUE:8,MANA:9,JELLY_PORTAL:10},this.startPos={x:X.PLAYER_START_X!==void 0?X.PLAYER_START_X:.5,y:X.PLAYER_START_Y!==void 0?X.PLAYER_START_Y:1.5,z:0}}createSeededRandom(t){let e=0;if(typeof t=="string")for(let i=0;i<t.length;i++)e=Math.imul(31,e)+t.charCodeAt(i)|0;else e=t|0;return function(){let i=e+=1831565813;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}initMatrix(){return new Int8Array(this.size*this.size*this.size)}_idx(t,e,i){return t*this.size*this.size+e*this.size+i}generate(){const t=[],e=1+2*Math.floor(this.random()*this.n),i=1+2*Math.floor(this.random()*this.n),n=1+2*Math.floor(this.random()*this.n);for(this.matrix[this._idx(e,i,n)]=this.TYPES.PATH,t.push({x:e,y:i,z:n});t.length>0;){let o=this.random()>this.branchingFactor?t.length-1:Math.floor(this.random()*t.length);const l=t[o],c=this.getUnvisitedNeighbors(l.x,l.y,l.z);if(c.length>0){const u=c[Math.floor(this.random()*c.length)];this.matrix[this._idx(u.x,u.y,u.z)]=this.TYPES.PATH,this.matrix[this._idx((l.x+u.x)/2,(l.y+u.y)/2,(l.z+u.z)/2)]=this.TYPES.PATH,t.push(u)}else t.splice(o,1)}this.setEntryAndExit(),this.placeTeleports(),this.placeKeys(),this.applyBraid(),this.placeStatues(),this.placeManas();const a=this.size,r=this.matrix;return r.size=a,r.get=(o,l,c)=>r[o*a*a+l*a+c],r.set=(o,l,c,u)=>{r[o*a*a+l*a+c]=u},r}getUnvisitedNeighbors(t,e,i){const n=[],a=[{dx:2,dy:0,dz:0},{dx:-2,dy:0,dz:0},{dx:0,dy:2,dz:0},{dx:0,dy:-2,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const r of a){const o=t+r.dx,l=e+r.dy,c=i+r.dz;this.isValid(o,l,c)&&this.matrix[this._idx(o,l,c)]===this.TYPES.WALL&&n.push({x:o,y:l,z:c})}return n}isValid(t,e,i){return t>0&&t<this.size-1&&e>0&&e<this.size-1&&i>0&&i<this.size-1}setEntryAndExit(){const t=1+2*Math.floor(this.random()*this.n);this.matrix[this._idx(1,1,t)]=this.TYPES.PATH,this.matrix[this._idx(0,1,t)]=this.TYPES.TELEPORT,this.startPos={x:X.PLAYER_START_X!==void 0?X.PLAYER_START_X:.5,y:X.PLAYER_START_Y!==void 0?X.PLAYER_START_Y:1.5,z:t};const e=1+2*Math.floor(this.random()*this.n),i=2*this.n-1;this.matrix[this._idx(i,i,e)]=this.TYPES.PATH,this.matrix[this._idx(2*this.n,i,e)]=this.TYPES.EXIT}_findExitPos(){for(let t=0;t<this.size;t++)for(let e=0;e<this.size;e++)for(let i=0;i<this.size;i++)if(this.matrix[this._idx(t,e,i)]===this.TYPES.EXIT)return{x:t,y:e,z:i};return{x:2*this.n,y:2*this.n-1,z:this.startPos.z}}_collectDeadEndsAndPaths(){const t=[],e=[],i=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1}];for(let n=1;n<this.size-1;n++)for(let a=1;a<this.size-1;a++)for(let r=1;r<this.size-1;r++){if(this.matrix[this._idx(n,a,r)]!==this.TYPES.PATH)continue;const o=r+1<this.size&&this.matrix[this._idx(n,a,r+1)]!==this.TYPES.WALL,l=r-1>=0&&this.matrix[this._idx(n,a,r-1)]!==this.TYPES.WALL;if(o||l)continue;let c=0;for(const u of i){const f=n+u.dx,p=a+u.dy,m=r+u.dz;f>=0&&f<this.size&&p>=0&&p<this.size&&m>=0&&m<this.size&&this.matrix[this._idx(f,p,m)]!==this.TYPES.WALL&&c++}(c===1?t:e).push({x:n,y:a,z:r})}return{deadEnds:t,normalPaths:e}}_greedyFill(t,e,i,n,a){const r={x:0,y:1,z:this.startPos.z},o=this._findExitPos(),l=(f,p)=>Math.abs(f.x-p.x)+Math.abs(f.y-p.y)+Math.abs(f.z-p.z);let c=4,u=4;for(;t.length<i&&c>0;){a&&(t.length=0);const f=e.filter(p=>l(p,r)<c||l(p,o)<c?!1:!n.includes(this.matrix[this._idx(p.x,p.y,p.z)]));for(;t.length<i;){let p=null,m=-1;for(const T of f){if(t.some(h=>h.x===T.x&&h.y===T.y&&h.z===T.z))continue;let y=1/0;for(const h of t){const d=l(T,h);d<y&&(y=d)}if(y>=u){const h=Math.min(l(T,r),l(T,o),y);h>m&&(m=h,p=T)}}if(p)t.push(p);else break}t.length<i&&(u>1?u--:c--)}}placeTeleports(){const t=X.getTeleportCount(this.n),{deadEnds:e,normalPaths:i}=this._collectDeadEndsAndPaths(),n=[];this._greedyFill(n,e,t,[],!0),n.length<t&&this._greedyFill(n,i,t,[],!1);for(const a of n)this.matrix[this._idx(a.x,a.y,a.z)]=this.TYPES.TELEPORT}placeKeys(){const t=X.getKeyCount(this.n),{deadEnds:e,normalPaths:i}=this._collectDeadEndsAndPaths(),n=[];this._greedyFill(n,e,t,[this.TYPES.TELEPORT],!0),n.length<t&&this._greedyFill(n,i,t,[this.TYPES.TELEPORT],!1);for(const a of n)this.matrix[this._idx(a.x,a.y,a.z)]=this.TYPES.KEY}applyBraid(){const t=this.size,e=[];for(let r=1;r<t-1;r++)for(let o=1;o<t-1;o++)for(let l=1;l<t-1;l++)if(this.matrix[this._idx(r,o,l)]===this.TYPES.WALL){const c=r%2===0&&o%2!==0&&l%2!==0,u=o%2===0&&r%2!==0&&l%2!==0,f=l%2===0&&r%2!==0&&o%2!==0;if(c){const p=this.matrix[this._idx(r-1,o,l)],m=this.matrix[this._idx(r+1,o,l)];p!==this.TYPES.WALL&&m!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&m!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&m!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&m!==this.TYPES.KEY&&e.push({x:r,y:o,z:l,type:"X"})}else if(u){const p=this.matrix[this._idx(r,o-1,l)],m=this.matrix[this._idx(r,o+1,l)];p!==this.TYPES.WALL&&m!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&m!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&m!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&m!==this.TYPES.KEY&&e.push({x:r,y:o,z:l,type:"Y"})}else if(f){const p=this.matrix[this._idx(r,o,l-1)],m=this.matrix[this._idx(r,o,l+1)];p!==this.TYPES.WALL&&m!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&m!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&m!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&m!==this.TYPES.KEY&&e.push({x:r,y:o,z:l,type:"Z"})}}for(let r=e.length-1;r>0;r--){const o=Math.floor(this.random()*(r+1)),l=e[r];e[r]=e[o],e[o]=l}const i=X.BRAID_FACTOR||.1,n=Math.floor(e.length*i);let a=0;for(const r of e){if(a>=n)break;this.isWideConnection(r.x,r.y,r.z)||r.type==="Z"&&this.isAdjacentElevator(r.x,r.y,r.z)||(this.matrix[this._idx(r.x,r.y,r.z)]=this.TYPES.PATH,a++)}}isWideConnection(t,e,i){const n=this.size,a=(c,u,f)=>c<0||c>=n||u<0||u>=n||f<0||f>=n?!1:c===t&&u===e&&f===i?!0:this.matrix[this._idx(c,u,f)]!==this.TYPES.WALL;return!!(a(t,e+1,i)&&a(t+1,e,i)&&a(t+1,e+1,i)||a(t-1,e,i)&&a(t-1,e+1,i)&&a(t,e+1,i)||a(t,e-1,i)&&a(t+1,e-1,i)&&a(t+1,e,i)||a(t-1,e-1,i)&&a(t,e-1,i)&&a(t-1,e,i)||a(t,e,i+1)&&a(t+1,e,i)&&a(t+1,e,i+1)||a(t-1,e,i)&&a(t-1,e,i+1)&&a(t,e,i+1)||a(t,e,i-1)&&a(t+1,e,i-1)&&a(t+1,e,i)||a(t-1,e,i-1)&&a(t,e,i-1)&&a(t-1,e,i)||a(t,e,i+1)&&a(t,e+1,i)&&a(t,e+1,i+1)||a(t,e-1,i)&&a(t,e-1,i+1)&&a(t,e,i+1)||a(t,e,i-1)&&a(t,e+1,i-1)&&a(t,e+1,i)||a(t,e-1,i-1)&&a(t,e,i-1)&&a(t,e-1,i))}isAdjacentElevator(t,e,i){const n=this.size,a=[{dx:-1,dy:-1},{dx:-1,dy:0},{dx:-1,dy:1},{dx:0,dy:-1},{dx:0,dy:1},{dx:1,dy:-1},{dx:1,dy:0},{dx:1,dy:1}];for(const r of a){const o=t+r.dx,l=e+r.dy;if(!(o<0||o>=n||l<0||l>=n)&&(this.matrix[this._idx(o,l,i)]!==this.TYPES.WALL||i-2>=0&&this.matrix[this._idx(o,l,i-2)]!==this.TYPES.WALL||i+2<n&&this.matrix[this._idx(o,l,i+2)]!==this.TYPES.WALL))return!0}return!1}isDeadEndZ(t,e,i){if(t%2===0||e%2===0||i%2===0)return!1;const n=this.matrix[this._idx(t,e,i)];if(n===this.TYPES.WALL||n===this.TYPES.START||n===this.TYPES.EXIT||n===this.TYPES.TELEPORT||n===this.TYPES.KEY)return!1;const a=this.size,r=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(const l of r){const c=t+l.dx,u=e+l.dy;if(!(c<0||c>=a||u<0||u>=a)&&this.matrix[this._idx(c,u,i)]!==this.TYPES.WALL)return!1}let o=0;return i-1>=0&&this.matrix[this._idx(t,e,i-1)]!==this.TYPES.WALL&&o++,i+1<a&&this.matrix[this._idx(t,e,i+1)]!==this.TYPES.WALL&&o++,o===1}isSolvable(){const t=this.size,e={x:Math.floor(this.startPos.x),y:Math.floor(this.startPos.y),z:this.startPos.z},i=[];let n=null;for(let c=0;c<t;c++)for(let u=0;u<t;u++)for(let f=0;f<t;f++){const p=this.matrix[this._idx(c,u,f)];p===this.TYPES.KEY?i.push(`${c},${u},${f}`):p===this.TYPES.EXIT&&(n=`${c},${u},${f}`)}const a=[e],r=new Set([`${e.x},${e.y},${e.z}`]),o=new Set;let l=!1;for(;a.length>0;){const c=a.shift();if(!c)continue;const u=`${c.x},${c.y},${c.z}`;i.includes(u)&&o.add(u),u===n&&(l=!0);const f=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(const p of f){const m=c.x+p.dx,T=c.y+p.dy,y=c.z;if(m>=0&&m<t&&T>=0&&T<t){const h=`${m},${T},${y}`,d=this.matrix[this._idx(m,T,y)];d!==this.TYPES.WALL&&d!==this.TYPES.STATUE&&!r.has(h)&&(r.add(h),a.push({x:m,y:T,z:y}))}}for(const p of[-2,2]){const m=c.z+p;if(m>=0&&m<t){const T=c.z+p/2,y=this.matrix[this._idx(c.x,c.y,T)],h=this.matrix[this._idx(c.x,c.y,m)];if(y!==this.TYPES.WALL&&y!==this.TYPES.STATUE&&h!==this.TYPES.WALL&&h!==this.TYPES.STATUE){const d=`${c.x},${c.y},${m}`;r.has(d)||(r.add(d),a.push({x:c.x,y:c.y,z:m}))}}}}if(!l||o.size!==i.length)return!1;for(let c=0;c<t;c++)for(let u=0;u<t;u++)for(let f=1;f<t;f+=2){const p=this.matrix[this._idx(c,u,f)];if(p!==this.TYPES.WALL&&p!==this.TYPES.STATUE&&!r.has(`${c},${u},${f}`))return!1}return!0}placeStatues(){const t=this.size,e=[];for(let o=0;o<t;o++)for(let l=0;l<t;l++)for(let c=0;c<t;c++)this.isDeadEndZ(o,l,c)&&e.push({x:o,y:l,z:c});let i=0;const n=(o,l,c,u,f)=>{const p=this._idx(o,l,c),m=this.matrix[p];m!==u&&(this.matrix[p]=u,f.push({x:o,y:l,z:c,oldVal:m}))},a=o=>{for(let l=o.length-1;l>=0;l--){const c=o[l];this.matrix[this._idx(c.x,c.y,c.z)]=c.oldVal}},r=(o,l,c,u)=>{n(o,l,c,this.TYPES.STATUE,u);const f=c-1,p=c+1;f>=0&&n(o,l,f,this.TYPES.WALL,u),p<t&&n(o,l,p,this.TYPES.WALL,u);const m=[-2,2];for(const T of m){const y=c+T;y>=0&&y<t&&this.isDeadEndZ(o,l,y)&&r(o,l,y,u)}};for(const o of e){if(this.matrix[this._idx(o.x,o.y,o.z)]===this.TYPES.STATUE||!this.isDeadEndZ(o.x,o.y,o.z))continue;const l=[];if(r(o.x,o.y,o.z,l),this.isSolvable()){const c=l.filter(u=>u.oldVal!==this.TYPES.STATUE&&this.matrix[this._idx(u.x,u.y,u.z)]===this.TYPES.STATUE).length;i+=c}else a(l)}return i}placeManas(){const{deadEnds:t}=this._collectDeadEndsAndPaths();for(const e of t){const i=this._idx(e.x,e.y,e.z);if(this.matrix[i]===this.TYPES.PATH){let a=!1;e.z-1>=0&&this.matrix[this._idx(e.x,e.y,e.z-1)]!==this.TYPES.WALL&&(a=!0),e.z+1<this.size&&this.matrix[this._idx(e.x,e.y,e.z+1)]!==this.TYPES.WALL&&(a=!0),a||(this.matrix[i]=this.TYPES.MANA)}}}generateFromLayout(t){const e=t.layers.length,i=t.layers[0].length,n=t.layers[0][0].length,a=Math.max(n,i,e),r=a%2!==0?a:a+1;this.size=r,this.n=(r-1)/2,this.matrix=this.initMatrix(),this.tutorialHunterSpawns=[];for(let c=0;c<e;c++){const u=t.layers[c];for(let f=0;f<i;f++){const p=u[f];for(let m=0;m<n;m++){const T=p[m],y=this._idx(m,f,c);switch(T){case"#":this.matrix[y]=this.TYPES.WALL;break;case".":this.matrix[y]=this.TYPES.PATH;break;case"S":this.matrix[y]=this.TYPES.TELEPORT,this.startPos={x:m+.5,y:f+.5,z:c};break;case"E":this.matrix[y]=this.TYPES.EXIT;break;case"T":this.matrix[y]=this.TYPES.TELEPORT;break;case"K":this.matrix[y]=this.TYPES.KEY;break;case"M":this.matrix[y]=this.TYPES.MANA;break;case"A":this.matrix[y]=this.TYPES.STATUE;break;case"H":this.matrix[y]=this.TYPES.PATH,this.tutorialHunterSpawns.push({x:m,y:f,z:c});break;default:this.matrix[y]=this.TYPES.WALL}}}}const o=this.size,l=this.matrix;return l.size=o,l.get=(c,u,f)=>l[c*o*o+u*o+f],l.set=(c,u,f,p)=>{l[c*o*o+u*o+f]=p},l}}class hm{constructor(){O(this,"uiFloorSpan");O(this,"uiMap3dContainer");O(this,"uiMobileControls");O(this,"uiProximeterContainer");O(this,"uiProximeterCells");O(this,"uiProximeterBar");O(this,"uiVictoryScreen");O(this,"uiMobileUp");O(this,"uiMobileDown");O(this,"uiMobileMap");O(this,"uiSavingIndicator");O(this,"savingIndicatorTimeout");O(this,"uiVisitedPercent");O(this,"uiHunterStatusVal");O(this,"uiStatusLabel");O(this,"uiMarqueeContainer");O(this,"uiLegendHunter");O(this,"uiCanvas");O(this,"uiKeysCollected");O(this,"uiKeysTotal");O(this,"uiKeysList");O(this,"uiPauseScreen");O(this,"uiMobilePauseBtn");O(this,"uiPathfindersRemaining");O(this,"uiPathfindersTotal");O(this,"uiControlsHintContent");O(this,"uiManaCollectedDesktop");O(this,"uiManaTotalDesktop");O(this,"uiManaCollectedMobile");O(this,"uiManaTotalMobile");O(this,"uiJellyPortalCountDesktop");O(this,"uiJellyPortalCountMobile");O(this,"uiMobileJellyPortalBtn");O(this,"onInfoBanner");O(this,"bannerMessage","");this.uiFloorSpan=document.getElementById("current-floor"),this.uiMap3dContainer=document.getElementById("map3d-container"),this.uiMobileControls=document.getElementById("mobile-controls"),this.uiProximeterContainer=document.getElementById("proximeter-container"),this.uiProximeterCells=document.querySelectorAll(".proximeter-cell"),this.uiProximeterBar=document.querySelector(".proximeter-bar"),this.uiVictoryScreen=document.getElementById("victory-screen"),this.uiMobileUp=document.getElementById("mobile-up"),this.uiMobileDown=document.getElementById("mobile-down"),this.uiMobileMap=document.getElementById("mobile-map"),this.uiSavingIndicator=document.getElementById("saving-indicator"),this.savingIndicatorTimeout=null,this.uiVisitedPercent=document.getElementById("visited-percent"),this.uiHunterStatusVal=document.getElementById("hunter-status-val"),this.uiStatusLabel=document.querySelector("#hunter-status-panel .status-label"),this.uiMarqueeContainer=document.querySelector(".status-marquee-container"),this.uiLegendHunter=document.getElementById("legend-hunter"),this.uiCanvas=document.getElementById("main-2d-canvas"),this.uiKeysCollected=document.getElementById("keys-collected-count"),this.uiKeysTotal=document.getElementById("keys-total-count"),this.uiKeysList=document.getElementById("keys-list-container"),this.uiPauseScreen=document.getElementById("pause-screen"),this.uiMobilePauseBtn=document.getElementById("mobile-pause-btn"),this.uiPathfindersRemaining=document.getElementById("pathfinders-remaining-count"),this.uiPathfindersTotal=document.getElementById("pathfinders-total-count"),this.uiControlsHintContent=document.getElementById("controls-hint-content"),this.uiManaCollectedDesktop=document.getElementById("mana-collected-count-desktop"),this.uiManaTotalDesktop=document.getElementById("mana-total-count-desktop"),this.uiManaCollectedMobile=document.getElementById("mana-collected-count-mobile"),this.uiManaTotalMobile=document.getElementById("mana-total-count-mobile"),this.uiJellyPortalCountDesktop=document.getElementById("jelly-portal-count-desktop"),this.uiJellyPortalCountMobile=document.getElementById("jelly-portal-count-mobile"),this.uiMobileJellyPortalBtn=document.getElementById("mobile-jelly-portal-btn"),this.localizeDOM()}localizeDOM(t=mn){xn(t)}showPause(){this.uiPauseScreen&&this.uiPauseScreen.classList.remove("hidden")}hidePause(){this.uiPauseScreen&&this.uiPauseScreen.classList.add("hidden")}showVictory(t=0,e=0,i=8,n=0,a=0,r=0,o=!1,l=!1){if(this.hideGameUI(),this.uiVictoryScreen){this.uiVictoryScreen.classList.remove("hidden");const h=this.uiVictoryScreen.querySelector("h1");h&&(h.innerText=Ot(o?"tutorialSuccess":"victoryTitle"));const d=this.uiVictoryScreen.querySelector('p[data-i18n="victoryText"]');d&&(d.style.display=o?"none":""),this.uiVictoryScreen.querySelectorAll(".victory-stats").forEach(g=>{g.style.display=o?"none":""})}const c=document.getElementById("menu-btn-victory");c&&(c.innerText=Ot(o?"back":"mainMenu"));const u=document.getElementById("next-tut-btn-victory");u&&(u.classList.toggle("hidden",!l),u.innerText=Ot("nextTutorial"));const f=document.getElementById("victory-mana-count");f&&(f.innerText=`${a}/${r}`);const p=document.getElementById("victory-completion-rate");p&&(p.innerText=`${t}%`);const m=document.getElementById("victory-deaths-count");m&&(m.innerText=String(e));const T=document.getElementById("victory-maze-degree");T&&(T.innerText=String(i));const y=document.getElementById("victory-completion-time");if(y){const h=Math.floor(n/3600),d=Math.floor(n%3600/60),_=Math.floor(n%60),g=E=>String(E).padStart(2,"0"),v=h>0?`${g(h)}:${g(d)}:${g(_)}`:`${g(d)}:${g(_)}`;y.innerText=v}}hideGameUI(){this.uiMobileControls&&this.uiMobileControls.classList.add("hidden"),this.uiMobilePauseBtn&&this.uiMobilePauseBtn.classList.add("hidden"),this.uiMap3dContainer&&this.uiMap3dContainer.classList.add("hidden"),this.uiProximeterContainer&&this.uiProximeterContainer.classList.add("hidden"),this.uiProximeterBar&&this.uiProximeterBar.classList.remove("critical-alert"),this.uiProximeterCells.forEach(t=>t.classList.remove("active")),this.uiCanvas&&this.uiCanvas.classList.remove("hunted-map-effect","nearby-map-effect")}initGameUI(t=!1){this.uiMobileControls&&this.uiMobileControls.classList.remove("hidden"),this.uiMobilePauseBtn&&this.uiMobilePauseBtn.classList.remove("hidden"),this.uiMobileMap&&(this.uiMobileMap.disabled=!0),t?(this.uiStatusLabel&&(this.uiStatusLabel.innerText="SAFE MODE:"),this.uiHunterStatusVal&&(this.uiHunterStatusVal.innerText="ACTIVE",this.uiHunterStatusVal.className="status-marquee-text status--scanning"),this.uiLegendHunter&&this.uiLegendHunter.classList.add("hidden")):(this.uiStatusLabel&&(this.uiStatusLabel.innerText="HUNTER STATUS:"),this.uiLegendHunter&&this.uiLegendHunter.classList.remove("hidden"))}updateVisitedPercent(t){this.uiVisitedPercent&&(this.uiVisitedPercent.innerText=String(t))}updateManaHUD(t,e){this.uiManaCollectedDesktop&&(this.uiManaCollectedDesktop.innerText=String(t)),this.uiManaTotalDesktop&&(this.uiManaTotalDesktop.innerText=String(e)),this.uiManaCollectedMobile&&(this.uiManaCollectedMobile.innerText=String(t)),this.uiManaTotalMobile&&(this.uiManaTotalMobile.innerText=String(e))}updateJellyPortalHUD(t){this.uiJellyPortalCountDesktop&&(this.uiJellyPortalCountDesktop.innerText=String(t)),this.uiJellyPortalCountMobile&&(this.uiJellyPortalCountMobile.innerText=String(t)),this.uiMobileJellyPortalBtn&&(t>0?this.uiMobileJellyPortalBtn.classList.add("jelly-portal-btn--active"):this.uiMobileJellyPortalBtn.classList.remove("jelly-portal-btn--active"))}updateFloor(t,e,i){if(this.uiFloorSpan){const n=(t+1)/2;this.uiFloorSpan.innerText=String(n)}this.uiMobileUp&&(this.uiMobileUp.disabled=!e),this.uiMobileDown&&(this.uiMobileDown.disabled=!i)}updateKeysHUD(t,e){if(this.uiKeysCollected&&(this.uiKeysCollected.innerText=String(t)),this.uiKeysTotal&&(this.uiKeysTotal.innerText=String(e)),this.uiKeysList){this.uiKeysList.innerHTML="";for(let i=0;i<e;i++){const n=document.createElement("span");n.className="key-dot"+(i<t?" key-dot--collected":""),this.uiKeysList.appendChild(n)}}}updatePathfindersHUD(t,e){this.uiPathfindersRemaining&&(this.uiPathfindersRemaining.innerText=String(t)),this.uiPathfindersTotal&&(this.uiPathfindersTotal.innerText=String(e))}showSavingIndicator(){this.uiSavingIndicator&&(this.savingIndicatorTimeout&&clearTimeout(this.savingIndicatorTimeout),this.uiSavingIndicator.classList.remove("hidden"),this.uiSavingIndicator.classList.add("saving-pulse"),this.savingIndicatorTimeout=window.setTimeout(()=>{this.uiSavingIndicator&&(this.uiSavingIndicator.classList.add("hidden"),this.uiSavingIndicator.classList.remove("saving-pulse"))},2e3))}showInfoBanner(t){this.bannerMessage=t,this.onInfoBanner&&this.onInfoBanner(t)}setMap3DVisible(t){this.uiMap3dContainer&&(t?this.uiMap3dContainer.classList.remove("hidden"):this.uiMap3dContainer.classList.add("hidden"))}updateHazardWarning(t,e,i=!1,n=!1){if(!this.uiHunterStatusVal)return;let a=Ot("statusScanning"),r="status--scanning",o=!1;i?(a=Ot("statusActive"),r="status--scanning"):n?(a=Ot("statusSleeping"),r="status--sleeping"):e>0?(a=Ot("statusConverging",{ticks:e}),r="status--converging",o=!0):t&&(a=Ot("statusTracking"),r="status--tracking",o=!0),this.uiHunterStatusVal.innerText!==a&&(this.uiHunterStatusVal.innerText=a,this.uiHunterStatusVal.className="status-marquee-text "+r),this.uiCanvas&&(o?this.uiCanvas.classList.add("hunted-map-effect"):this.uiCanvas.classList.remove("hunted-map-effect"))}setNearbyWarning(t){this.uiCanvas&&(t?this.uiCanvas.classList.add("nearby-map-effect"):this.uiCanvas.classList.remove("nearby-map-effect"))}updateProximeter(t,e,i){if(!this.uiProximeterContainer)return;if(e>0&&!i)this.uiProximeterContainer.classList.remove("hidden");else{this.uiProximeterContainer.classList.add("hidden");return}let n=0;t<=10&&(n=11-t),this.uiProximeterCells.forEach(a=>{parseInt(a.getAttribute("data-index")||"0")<=n?a.classList.add("active"):a.classList.remove("active")}),this.uiProximeterBar&&(n===10?this.uiProximeterBar.classList.add("critical-alert"):this.uiProximeterBar.classList.remove("critical-alert"))}updateMobileMapButton(t,e,i,n=!1){this.uiMobileMap&&i&&(t&&!e?(this.uiMobileMap.innerText=Ot("teleport"),n?(this.uiMobileMap.style.borderColor="#a020f0",this.uiMobileMap.style.color="#a020f0",this.uiMobileMap.style.background="rgba(160, 32, 240, 0.2)"):(this.uiMobileMap.style.borderColor="var(--clr-teleport, #ff8c00)",this.uiMobileMap.style.color="var(--clr-teleport, #ff8c00)",this.uiMobileMap.style.background="rgba(255, 140, 0, 0.2)")):(this.uiMobileMap.innerText=Ot("map"),this.uiMobileMap.style.borderColor="",this.uiMobileMap.style.color="",this.uiMobileMap.style.background=""))}updateControlsHint(t,e=!0){this.uiControlsHintContent&&(t==="gamepad"?this.uiControlsHintContent.innerHTML=`
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
            `)}destroy(){this.savingIndicatorTimeout&&clearTimeout(this.savingIndicatorTimeout)}}class dm{constructor(){O(this,"keys");O(this,"touchStart");O(this,"touchMoveVector");O(this,"preventScrollKeys");O(this,"handleKeyDown");O(this,"handleKeyUp");O(this,"handleTouchStart");O(this,"handleTouchMove");O(this,"handleTouchEnd");this.keys={},this.touchStart=null,this.touchMoveVector=null,this.preventScrollKeys=["arrowup","arrowdown","arrowleft","arrowright"," ","pageup","pagedown"],this.handleKeyDown=null,this.handleKeyUp=null,this.handleTouchStart=null,this.handleTouchMove=null,this.handleTouchEnd=null,this.init()}init(){this.handleKeyDown=t=>{const e=t.key.toLowerCase();this.keys[e]=!0,this.preventScrollKeys.includes(e)&&t.preventDefault()},this.handleKeyUp=t=>{this.keys[t.key.toLowerCase()]=!1},window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp)}setupTouch(t,e){this.handleTouchStart=i=>{const n=i.target;t()||e()||n&&n.closest&&n.closest("button")||(i.cancelable&&i.preventDefault(),this.touchStart={x:i.touches[0].clientX,y:i.touches[0].clientY})},this.handleTouchMove=i=>{if(!this.touchStart||t()||e())return;i.cancelable&&i.preventDefault();const n=i.touches[0].clientX-this.touchStart.x,a=i.touches[0].clientY-this.touchStart.y,r=Math.sqrt(n*n+a*a);r>10&&(this.touchMoveVector={x:n/r,y:a/r})},this.handleTouchEnd=()=>{this.touchStart=null,this.touchMoveVector=null},window.addEventListener("touchstart",this.handleTouchStart,{passive:!1}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),window.addEventListener("touchend",this.handleTouchEnd)}destroy(){this.handleKeyDown&&window.removeEventListener("keydown",this.handleKeyDown),this.handleKeyUp&&window.removeEventListener("keyup",this.handleKeyUp),this.handleTouchStart&&window.removeEventListener("touchstart",this.handleTouchStart),this.handleTouchMove&&window.removeEventListener("touchmove",this.handleTouchMove),this.handleTouchEnd&&window.removeEventListener("touchend",this.handleTouchEnd)}}const Ua="void-escape-save";function um(s){const t=new Uint8Array(s.buffer);let e="";for(let i=0;i<t.length;i++)e+=String.fromCharCode(t[i]);return btoa(e)}function fm(s){const t=atob(s),e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return new Int8Array(e.buffer)}function pm(s){return{x:s.x,y:s.y,z:s.z,id:s.id,state:s.state,lastPos:s.lastPos?{...s.lastPos}:null,history:s.history.map(t=>({...t})),visitedNodes:Array.from(s.visitedNodes),pathToTarget:s.pathToTarget.map(t=>({...t})),respawnThresholdPercentage:s.respawnThresholdPercentage!==void 0?s.respawnThresholdPercentage:null}}function ls(s){try{const t={version:1,timestamp:Date.now(),degree:s.degree,branchingFactor:s.branchingFactor,isSafeMode:s.isSafeMode,seed:s.seed,mazeSize:s.mazeGen.size,mazeStartPos:{...s.mazeGen.startPos},matrix:um(s.mazeGen.matrix),player:{...s.player},hunters:s.hunters.map(pm),discoveredTeleports:Array.from(s.discoveredTeleports),inactiveTeleportPos:s.inactiveTeleportPos?{...s.inactiveTeleportPos}:null,teleportCooldownTicks:s.teleportCooldownTicks,revealedPathSet:Array.from(s.revealedPathSet),keysCollected:s.keysCollected,totalKeys:s.totalKeys,manaCollected:s.manaCollected,totalMana:s.totalMana,jellyPortalCount:s.jellyPortalCount,totalPathfinders:s.totalPathfinders,pathfindersRemaining:s.pathfindersRemaining,pathfinderRewardsGranted:s.pathfinderRewardsGranted!==void 0?s.pathfinderRewardsGranted:0,mapCompletion100Triggered:s.mapCompletion100Triggered||!1,dialogueUpTriggered:s.dialogueUpTriggered||!1,dialogueDownTriggered:s.dialogueDownTriggered||!1,dialogueWhichWayTriggered:s.dialogueWhichWayTriggered||!1,dialogueDetectedTriggered:s.dialogueDetectedTriggered||!1,hunterOnSameFloorDetected:s.hunterOnSameFloorDetected||!1,deathsCount:s.deathsCount!==void 0?s.deathsCount:0,elapsedTime:s.elapsedTime!==void 0?s.elapsedTime:0};localStorage.setItem(Ua,JSON.stringify(t))}catch(t){console.warn("[SaveManager] Could not save game state:",t)}}function pl(){try{const s=localStorage.getItem(Ua);if(!s)return null;const t=JSON.parse(s);return!t||t.version!==1?null:t}catch(s){return console.warn("[SaveManager] Could not load save data:",s),null}}function ml(){localStorage.removeItem(Ua)}function Ar(){return pl()!==null}function mm(s,t){s.x=t.x,s.y=t.y,s.z=t.z,s.visualX=t.x,s.visualY=t.y,s.visualZ=t.z,s.state=t.state,s.lastPos=t.lastPos?{...t.lastPos}:null,s.history=t.history.map(e=>({...e})),s.visitedNodes=new Set(t.visitedNodes),s.pathToTarget=t.pathToTarget.map(e=>({...e})),s.respawnThresholdPercentage=t.respawnThresholdPercentage!==void 0?t.respawnThresholdPercentage:null}function gm(s,t){const e=fm(t);for(let i=0;i<e.length;i++)s.matrix[i]=e[i]}function la(s,t,e){return Math.abs(t-s)<=e?t:s+Math.sign(t-s)*e}class ca{constructor(t,e,i=null,n=null){O(this,"degree");O(this,"branchingFactor");O(this,"isSafeMode");O(this,"vScale");O(this,"ui");O(this,"input");O(this,"canvas");O(this,"ctx");O(this,"seed");O(this,"mazeGen");O(this,"maze");O(this,"isResumedFromSave");O(this,"mapCompletion100Triggered");O(this,"hunterOnSameFloorDetected");O(this,"dialogueUpTriggered");O(this,"dialogueDownTriggered");O(this,"dialogueWhichWayTriggered");O(this,"dialogueDetectedTriggered");O(this,"wallImage");O(this,"floorImage");O(this,"keyImage");O(this,"manaImage");O(this,"statueImage");O(this,"mageImages");O(this,"playerSide");O(this,"playerVertical");O(this,"playerWalkCycle");O(this,"playerSquashTargetX");O(this,"playerSquashTargetY");O(this,"playerSquashX");O(this,"playerSquashY");O(this,"player");O(this,"hunters");O(this,"keyMeshes");O(this,"exitMesh");O(this,"keysCollected");O(this,"totalKeys");O(this,"manaCollected");O(this,"totalMana");O(this,"manaMeshes");O(this,"totalPathfinders");O(this,"pathfindersRemaining");O(this,"activeMapFloor");O(this,"visualActiveFloor");O(this,"mapCursor");O(this,"pathfinderRewardsGranted");O(this,"isometricCanvas");O(this,"isometricCtx");O(this,"floorClickRects");O(this,"teleportModalClickRects");O(this,"mapZoom");O(this,"mapPanOffsetX");O(this,"mapPanOffsetY");O(this,"isZoomTransitionActive");O(this,"zoomTransitionTimer");O(this,"preloadedStoryImages");O(this,"storyImagesLoadedCount");O(this,"storyImagesTotalCount");O(this,"storyImagesPreloadPromise");O(this,"lastFrameTime");O(this,"revealedPathSet");O(this,"activePathReveal");O(this,"revealedPathProgress");O(this,"knownMeshes");O(this,"gridMeshes");O(this,"pathRevealInterval");O(this,"pathfinderBlockedUntil");O(this,"isMap3DActive");O(this,"teleportAnim");O(this,"auraHeight");O(this,"auraTime");O(this,"isGameOver");O(this,"deathAnimation");O(this,"isTutorialMode");O(this,"currentTutorialId");O(this,"currentTutorialStage");O(this,"notificationQueue");O(this,"activeNotification");O(this,"isPaused");O(this,"manaCharges");O(this,"jellyPortalCount");O(this,"jellyPortalFreezeTimer");O(this,"jellyPortalResetCells");O(this,"jellyPortalResetDuration");O(this,"jellyPortalResetElapsed");O(this,"dyingHunters");O(this,"pathfinderConfirmTarget");O(this,"isJellyChallengeActive",!1);O(this,"completedFloors",new Set);O(this,"jellyProjectiles",[]);O(this,"jellyStatueStates",new Map);O(this,"previouslyDeadHuntersInfo",[]);O(this,"isDestroyed");O(this,"isIntroPlaying");O(this,"isStoryActive");O(this,"pulsatingMaterials");O(this,"hunterMeshes");O(this,"statueMeshes",new Map);O(this,"discoveredTeleports");O(this,"visitedCells");O(this,"lastSavePos");O(this,"suppressWakeHuntersBanner");O(this,"allTeleports");O(this,"vortexAngles");O(this,"isTouchDevice");O(this,"isMouseOrTouchDetected");O(this,"teleportGoBtnClickRect");O(this,"lastTeleportCloseTime");O(this,"staticMapCacheCanvas");O(this,"staticMapCacheCtx");O(this,"staticMapCacheDirty");O(this,"zoomVisibleCells");O(this,"scene");O(this,"camera");O(this,"renderer");O(this,"controls");O(this,"teleportMeshes");O(this,"inactiveTeleportPos");O(this,"teleportCooldownTicks");O(this,"storyImages");O(this,"storyOpacity");O(this,"storyOverlayOpacity");O(this,"storyFrameIndex");O(this,"storyTimer");O(this,"storyTextQueue");O(this,"storyTextIndex");O(this,"storyDisplayedText");O(this,"storyState");O(this,"storyWaitTimer");O(this,"storyTextHeight");O(this,"storyWidthProgress");O(this,"storyCharIndex");O(this,"storyTypeTimer");O(this,"storyMsgIndex");O(this,"storyCloseProgress");O(this,"selectedTeleportIndex");O(this,"teleportConfirmModalActive");O(this,"teleportModalSelection");O(this,"teleportDotsClickRects");O(this,"isTeleportMode");O(this,"floorTransition");O(this,"hasSavePoint");O(this,"lastPlayerCell");O(this,"exitPathfinderUnlocked");O(this,"isZoomActive");O(this,"lastInputDevice");O(this,"fullyRevealedCells");O(this,"revealedCellsAnimation");O(this,"skipCellAnimations");O(this,"activeSkipHandler");O(this,"activeIntroTimer");O(this,"activeContinueTimer");O(this,"raycaster");O(this,"pointer");O(this,"handleKeyDownExtra");O(this,"handleKeyboardDetection");O(this,"handleResize");O(this,"handleStoryKeyDown");O(this,"handleStoryClick");O(this,"handleStoryTouch");O(this,"handleCanvasClick");O(this,"handlePointerDown");O(this,"handlePointerUp");O(this,"lastHunterMove");O(this,"lastLockedWarningTime");O(this,"prevGamepadButtons");O(this,"isPreloadingActive");O(this,"prevGamepadStick");O(this,"gamepadTeleportSelectedIndex");O(this,"deathsCount");O(this,"elapsedTime");if(this.degree=t!==void 0?t:X.MAZE_DEGREE!==void 0?X.MAZE_DEGREE:8,this.branchingFactor=e!==void 0?e:X.BRANCHING_FACTOR!==void 0?X.BRANCHING_FACTOR:.2,i)this.isSafeMode=i.isSafeMode??!1;else{const f=document.getElementById("safe-mode");this.isSafeMode=f?f.checked:!1}this.vScale=2,this.ui=new hm,this.input=new dm,this.input.setupTouch(()=>this.isMap3DActive,()=>this.isGameOver),this.canvas=document.getElementById("main-2d-canvas"),this.ctx=this.canvas.getContext("2d"),this.seed=i?i.seed:X.SEED!==null&&X.SEED!==void 0?X.SEED:Date.now(),this.isTutorialMode=!!n,this.currentTutorialId=n?n.id:null,this.currentTutorialStage=n,this.isTutorialMode?(this.mazeGen=new br,this.maze=this.mazeGen.generateFromLayout(n)):(this.mazeGen=new br(t,e,this.seed),this.maze=this.mazeGen.generate()),this.isResumedFromSave=!!i,this.deathsCount=i&&i.deathsCount||0,this.elapsedTime=i&&i.elapsedTime||0,this.mapCompletion100Triggered=!1,this.hunterOnSameFloorDetected=!1,this.dialogueUpTriggered=!1,this.dialogueDownTriggered=!1,this.dialogueWhichWayTriggered=!1,this.dialogueDetectedTriggered=!1,this.wallImage=new Image,this.wallImage.onload=()=>{this.staticMapCacheDirty=!0},this.wallImage.src="assets/images/wall.png",this.floorImage=new Image,this.floorImage.onload=()=>{this.staticMapCacheDirty=!0},this.floorImage.src="assets/images/floor.png",this.keyImage=new Image,this.keyImage.onload=()=>{this.staticMapCacheDirty=!0},this.keyImage.src="assets/images/key.png",this.manaImage=new Image,this.manaImage.onload=()=>{this.staticMapCacheDirty=!0},this.manaImage.src="assets/images/mana.png",this.statueImage=new Image,this.statueImage.onload=()=>{this.staticMapCacheDirty=!0},this.statueImage.src="assets/images/statue.png",this.mageImages={down_left:new Image,down_right:new Image,up_left:new Image,up_right:new Image};for(const f in this.mageImages)this.mageImages[f].onload=()=>{this.staticMapCacheDirty=!0},this.mageImages[f].src=`assets/images/mage_${f}.png`;if(this.playerSide="right",this.playerVertical="down",this.playerWalkCycle=0,this.playerSquashTargetX=1,this.playerSquashTargetY=1,this.playerSquashX=1,this.playerSquashY=1,this.player={x:this.mazeGen.startPos.x,y:this.mazeGen.startPos.y,z:this.mazeGen.startPos.z,dir:0},this.hunters=[],this.isTutorialMode){if(this.mazeGen.tutorialHunterSpawns&&this.mazeGen.tutorialHunterSpawns.length>0&&!this.isSafeMode){let f=1;for(const p of this.mazeGen.tutorialHunterSpawns){const m=new ra(this.mazeGen,{x:p.x,y:p.y,z:p.z},f++);this.hunters.push(m)}}this.lastHunterMove=performance.now()}else this.initHunters(t);if(this.keyMeshes=[],this.exitMesh=null,this.keysCollected=0,this.isTutorialMode){let f=0;const p=this.mazeGen.size;for(let m=0;m<p;m++)for(let T=0;T<p;T++)for(let y=0;y<p;y++)this.maze.get(m,T,y)===this.mazeGen.TYPES.KEY&&f++;this.totalKeys=f}else this.totalKeys=X.getKeyCount(t);this.isTutorialMode?(this.totalPathfinders=n.pathfinders!==void 0?n.pathfinders:0,this.pathfindersRemaining=this.totalPathfinders,this.manaCharges=n.mana!==void 0?n.mana:0,this.activeMapFloor=this.mazeGen.startPos.z,this.visualActiveFloor=this.mazeGen.startPos.z,this.player.x=this.mazeGen.startPos.x,this.player.y=this.mazeGen.startPos.y,this.player.z=this.mazeGen.startPos.z):(this.totalPathfinders=X.getPathfinderCount(t),this.pathfindersRemaining=this.totalPathfinders,this.activeMapFloor=1,this.visualActiveFloor=1),this.mapCursor={x:0,y:0,z:1},this.pathfinderRewardsGranted=0,this.isometricCanvas=null,this.isometricCtx=null,this.floorClickRects=[],this.mapZoom=1,this.mapPanOffsetX=0,this.isZoomTransitionActive=!1,this.zoomTransitionTimer=0,this.preloadedStoryImages=[],this.storyImagesLoadedCount=0,this.storyImagesTotalCount=0,this.storyImagesPreloadPromise=null,this.preloadStoryImages(),this.lastFrameTime=performance.now(),this.revealedPathSet=new Set,this.activePathReveal=[],this.revealedPathProgress=0,this.knownMeshes=[],this.gridMeshes=null,this.pathRevealInterval=null,this.pathfinderBlockedUntil=0,this.manaCollected=this.isTutorialMode&&n&&n.mana!==void 0?n.mana:0,this.totalMana=0,this.manaMeshes=[];const a=this.mazeGen.size;for(let f=0;f<a;f++)for(let p=0;p<a;p++)for(let m=0;m<a;m++)this.maze.get(f,p,m)===this.mazeGen.TYPES.MANA&&this.totalMana++;this.isTutorialMode&&n&&n.mana!==void 0&&(this.totalMana+=n.mana),this.isTutorialMode?this.jellyPortalCount=n&&n.jellyPortals!==void 0?n.jellyPortals:0:this.jellyPortalCount=this.totalMana<10?1:X.JELLY_PORTAL_COUNT||0,this.jellyPortalFreezeTimer=0,this.jellyPortalResetCells=new Set,this.jellyPortalResetDuration=1.5,this.jellyPortalResetElapsed=0,this.dyingHunters=[],this.isJellyChallengeActive=!1,this.completedFloors=new Set,this.jellyProjectiles=[],this.jellyStatueStates=new Map,this.ui.initGameUI(this.isSafeMode),this.ui.onInfoBanner=f=>this.queueNotification(f),this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.ui.updateManaHUD(this.manaCollected,this.totalMana),this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),this.ui.updateJellyPortalHUD(this.jellyPortalCount),this.isMap3DActive=!1,this.teleportAnim=null,this.auraHeight=0,this.auraTime=0,this.isGameOver=!1,this.deathAnimation=null,this.notificationQueue=[],this.activeNotification=null,this.isPaused=!1,this.isDestroyed=!1,this.isIntroPlaying=!1,this.isStoryActive=!1,this.pulsatingMaterials=[],this.hunterMeshes=[],this.discoveredTeleports=new Set,this.visitedCells=new Set,this.lastSavePos=null,this.suppressWakeHuntersBanner=!1;const r=Math.floor(this.player.x),o=Math.floor(this.player.y),l=this.player.z;this.discoveredTeleports.add(`${r},${o},${l}`),this.allTeleports=[];const c=this.mazeGen.size,u=this.mazeGen.TYPES;for(let f=0;f<c;f++)for(let p=0;p<c;p++)for(let m=0;m<c;m++)this.maze.get(m,p,f)===u.TELEPORT&&this.allTeleports.push({x:m,y:p,z:f});this.allTeleports.sort((f,p)=>f.z!==p.z?f.z-p.z:f.y!==p.y?f.y-p.y:f.x-p.x),this.selectedTeleportIndex=this.allTeleports.findIndex(f=>f.x===r&&f.y===o&&f.z===l),this.selectedTeleportIndex===-1&&(this.selectedTeleportIndex=0),this.teleportConfirmModalActive=!1,this.teleportModalSelection="go",this.pathfinderConfirmTarget=null,this.isMouseOrTouchDetected=!1,this.teleportGoBtnClickRect=null,this.lastTeleportCloseTime=0,this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0,this.teleportMeshes=[],this.isTeleportMode=!1,this.teleportCooldownTicks=0,this.inactiveTeleportPos=null,this.floorTransition=null,this.hasSavePoint=!1,this.lastPlayerCell={x:r,y:o,z:l},this.exitPathfinderUnlocked=!1,this.isZoomActive=!0,this.zoomVisibleCells=11,this.lastInputDevice="keyboard",this.staticMapCacheCanvas=document.createElement("canvas"),this.staticMapCacheCtx=this.staticMapCacheCanvas.getContext("2d"),this.staticMapCacheDirty=!0,this.fullyRevealedCells=new Set,this.revealedCellsAnimation=new Map,this.vortexAngles=new Map,this.skipCellAnimations=!0,this.populateFullyRevealedCells(this.player.z),this.activeSkipHandler=null,this.activeIntroTimer=null,this.activeContinueTimer=null,this.raycaster=new tm,this.pointer=new kt,this.exitPathfinderUnlocked=this.checkExitNeighborVisited(),this.initThree(),this.populateVisitedCells(),this.init(i)}populateVisitedCells(){this.visitedCells.clear();const t=this.mazeGen.size,e=this.mazeGen.TYPES,i=this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.revealed;for(let n=0;n<t;n++)for(let a=0;a<t;a++)for(let r=0;r<t;r++){const o=this.maze.get(n,a,r);if(i){if(o!==e.WALL){this.visitedCells.add(`${n},${a},${r}`);const l=r<t-1&&this.maze.get(n,a,r+1)!==e.WALL,c=r>0&&this.maze.get(n,a,r-1)!==e.WALL,u=l||c;o===e.PATH?u?this.maze.set(n,a,r,e.ELEVATOR_VISITED):this.maze.set(n,a,r,e.VISITED):o===e.TELEPORT&&this.discoveredTeleports.add(`${n},${a},${r}`)}}else{const l=o===e.TELEPORT&&this.discoveredTeleports.has(`${n},${a},${r}`);(o===e.VISITED||o===e.START||o===e.ELEVATOR_VISITED||l)&&this.visitedCells.add(`${n},${a},${r}`)}}}destroy(){this.isDestroyed=!0,this.hideGameUI(),this.input.destroy(),this.ui.destroy(),window.removeEventListener("keydown",this.handleKeyDownExtra),this.handleKeyboardDetection&&window.removeEventListener("keydown",this.handleKeyboardDetection),window.removeEventListener("resize",this.handleResize),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this.activeIntroTimer&&(clearTimeout(this.activeIntroTimer),this.activeIntroTimer=null),this.activeContinueTimer&&(clearTimeout(this.activeContinueTimer),this.activeContinueTimer=null),this.handleStoryKeyDown&&(window.removeEventListener("keydown",this.handleStoryKeyDown),this.handleStoryKeyDown=null);const t=document.getElementById("story-screen");t&&(this.handleStoryClick&&(t.removeEventListener("click",this.handleStoryClick),this.handleStoryClick=null),this.handleStoryTouch&&(t.removeEventListener("touchstart",this.handleStoryTouch),this.handleStoryTouch=null),t.classList.add("hidden")),this.controls&&this.controls.dispose(),this.renderer&&this.renderer.domElement&&(this.renderer.domElement.removeEventListener("click",this.handleCanvasClick),this.renderer.domElement.removeEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.removeEventListener("pointerup",this.handlePointerUp)),this.renderer&&(this.renderer.dispose(),this.renderer.domElement.remove()),this.ui.uiMobileUp&&(this.ui.uiMobileUp.onclick=null),this.ui.uiMobileDown&&(this.ui.uiMobileDown.onclick=null),this.ui.uiMobileMap&&(this.ui.uiMobileMap.onclick=null),this.pathRevealInterval&&clearInterval(this.pathRevealInterval)}preloadStoryImages(){const t=["assets/images/presentation/1-mystical-church-of-chaos.jpg","assets/images/presentation/2-mystical-church-of-chaos.jpg","assets/images/presentation/3-the-jelly-god.jpg","assets/images/presentation/4-player-alone.jpg","assets/images/presentation/5-player-thrown.jpg"];this.storyImagesLoadedCount=0,this.storyImagesTotalCount=t.length,this.storyImagesPreloadPromise=Promise.all(t.map((e,i)=>new Promise(n=>{const a=new Image;a.src=e,a.onload=()=>{this.preloadedStoryImages[i]=a,this.storyImagesLoadedCount++,n()},a.onerror=()=>{console.warn(`Failed to preload story image: ${e}`),n()}})))}initHunters(t){const e=this.isSafeMode?0:X.getHunterCount(t);if(e!==0){for(let i=1;i<=e;i++)this.hunters.push(new ra(this.mazeGen,null,i));this.lastHunterMove=performance.now()}}wakeHunters(){const t=this.mazeGen.size,e=[],i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,r=Math.floor(this.mazeGen.startPos.x),o=Math.floor(this.mazeGen.startPos.y),l=this.mazeGen.startPos.z;for(let T=0;T<t;T++)for(let y=0;y<t;y++)for(let h=0;h<t;h++){const d=T===r&&y===o&&h===l;this.maze.get(T,y,h)===this.mazeGen.TYPES.PATH&&h%2!==0&&!d&&e.push({x:T,y,z:h})}if(e.length===0)for(let T=0;T<t;T++)for(let y=0;y<t;y++)for(let h=0;h<t;h++){const d=this.maze.get(T,y,h),_=T===r&&y===o&&h===l,g=d===this.mazeGen.TYPES.EXIT;d!==this.mazeGen.TYPES.WALL&&!g&&h%2!==0&&(T!==i||y!==n||h!==a)&&!_&&e.push({x:T,y,z:h})}for(let T=e.length-1;T>0;T--){const y=Math.floor(Math.random()*(T+1)),h=e[T];e[T]=e[y],e[y]=h}const c=(T,y)=>Math.abs(T.x-y.x)+Math.abs(T.y-y.y)+Math.abs(T.z-y.z),u=[],f=this.hunters.filter(T=>T.state==="SLEEP");let p=Math.max(3,Math.floor(t*.45)),m=4;for(;u.length<f.length&&p>0;){u.length=0;const T=e.filter(y=>c(y,{x:i,y:n,z:a})>=p);for(let y=0;y<f.length;y++){let h=null;for(const d of T){if(u.some(g=>g.x===d.x&&g.y===d.y&&g.z===d.z))continue;let _=!0;for(const g of u)if(c(d,g)<m){_=!1;break}if(_){h=d;break}}if(h)u.push(h);else break}u.length<f.length&&(m>1?m--:p--)}if(u.length<f.length)for(const T of e){if(u.length>=f.length)break;u.some(y=>y.x===T.x&&y.y===T.y&&y.z===T.z)||u.push(T)}for(let T=0;T<f.length&&T<u.length;T++){const y=f[T],h=u[T];y.x=h.x,y.y=h.y,y.z=h.z,y.visualX=h.x,y.visualY=h.y,y.visualZ=h.z,y.lastPos={x:h.x,y:h.y,z:h.z},y.state="WANDERING",y.visitedNodes.clear(),y.visitedNodes.add(`${h.x},${h.y},${h.z}`),y.history=[]}this.suppressWakeHuntersBanner||this.ui.showInfoBanner(Ot("msgVoidHuntersDetected")),this.suppressWakeHuntersBanner=!1,this.staticMapCacheDirty=!0,this.isMap3DActive&&this.build3DMap()}getExitPos(){for(let t=0;t<this.mazeGen.size;t++)for(let e=0;e<this.mazeGen.size;e++)for(let i=0;i<this.mazeGen.size;i++)if(this.maze.get(t,e,i)===this.mazeGen.TYPES.EXIT)return{x:t,y:e,z:i};return{x:1,y:1,z:1}}triggerSave(){this.isTutorialMode||(ls(this),this.hasSavePoint=!0,this.lastSavePos={x:this.player.x,y:this.player.y,z:this.player.z},this.ui.showSavingIndicator())}tryActivateJellyPortal(){if(this.isGameOver||this.isPaused||this.isIntroPlaying||this.isStoryActive||this.jellyPortalFreezeTimer>0)return;const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=this.maze.get(t,e,i),a=i<this.mazeGen.size-1&&this.maze.get(t,e,i+1)!==this.mazeGen.TYPES.WALL,r=i>0&&this.maze.get(t,e,i-1)!==this.mazeGen.TYPES.WALL,o=a||r,l=t===Math.floor(this.mazeGen.startPos.x)&&e===Math.floor(this.mazeGen.startPos.y)&&i===this.mazeGen.startPos.z,c=n===this.mazeGen.TYPES.TELEPORT;if(o||c||l||n!==this.mazeGen.TYPES.VISITED){this.ui.showInfoBanner(Ot("msgJellyPortalNotHere"));return}if(this.jellyPortalCount<=0){this.ui.showInfoBanner(Ot("msgJellyPortalNoPortalCount"));return}this.jellyPortalCount--,this.ui.updateJellyPortalHUD(this.jellyPortalCount),this.maze.set(t,e,i,this.mazeGen.TYPES.JELLY_PORTAL);const u=`${t},${e},${i}`;this.discoveredTeleports.add(u),this.allTeleports.push({x:t,y:e,z:i}),this.allTeleports.sort((m,T)=>m.z!==T.z?m.z-T.z:m.x!==T.x?m.x-T.x:m.y-T.y),this.selectedTeleportIndex=this.allTeleports.findIndex(m=>m.x===t&&m.y===e&&m.z===i),this.staticMapCacheDirty=!0,this.ui.showInfoBanner(Ot("msgJellyPortalActivated")),this.triggerSave(),this.jellyPortalFreezeTimer=1.5,this.jellyPortalResetElapsed=0,this.jellyPortalResetCells.clear();const f=this.mazeGen.size;for(let m=0;m<f;m++)for(let T=0;T<f;T++)Math.abs(m-t)+Math.abs(T-e)<=5&&this.jellyPortalResetCells.add(`${m},${T}`);const p=this.getMapVisitedPercentage();for(const m of this.hunters)m.state!=="SLEEP"&&m.state!=="DEAD_BY_JELLY"&&m.state!=="DYING"&&m.z===i&&m.x!==null&&m.y!==null&&Math.abs(m.x-t)+Math.abs(m.y-e)<=5&&(m.state="DYING",m.respawnThresholdPercentage=p)}executeJellyPortalReset(t,e,i){const n=this.mazeGen.size,a=this.mazeGen.TYPES,r=Math.floor(this.mazeGen.startPos.x),o=Math.floor(this.mazeGen.startPos.y),l=this.mazeGen.startPos.z;for(let c=0;c<n;c++)for(let u=0;u<n;u++){const f=Math.abs(c-t)+Math.abs(u-e);if(f<=5){const p=this.maze.get(c,u,i),m=`${c},${u},${i}`;if(p===a.STATUE)continue;if(p===a.WALL){let T=!1;for(const[y,h]of[[1,0],[-1,0],[0,1],[0,-1]]){const d=c+y,_=u+h;if(d>=0&&d<n&&_>=0&&_<n&&this.maze.get(d,_,i)===a.STATUE){T=!0;break}}if(T)continue}if(c===r&&u===o&&i===l||c===t&&u===e)continue;if(this.visitedCells.delete(m),this.fullyRevealedCells.delete(m),this.revealedCellsAnimation.delete(m),f===1){(p===a.VISITED||p===a.ELEVATOR_VISITED)&&this.maze.set(c,u,i,a.PATH),p===a.TELEPORT&&this.discoveredTeleports.delete(m);continue}p===a.VISITED||p===a.ELEVATOR_VISITED?this.maze.set(c,u,i,a.PATH):p===a.TELEPORT&&this.discoveredTeleports.delete(m)}}for(const c of this.hunters)c.state==="DYING"&&(c.state="DEAD_BY_JELLY",c.x=null,c.y=null,c.z=null,c.visualX=null,c.visualY=null,c.visualZ=null,c.pathToTarget=[],c.history=[]);this.dyingHunters.length>0&&(this.respawnDyingHunters(),this.dyingHunters=[]),this.staticMapCacheDirty=!0,this.triggerSave()}respawnSingleHunter(t){const e=this.mazeGen.size,i=[],n=Math.floor(this.player.x),a=Math.floor(this.player.y),r=this.player.z,o=Math.floor(this.mazeGen.startPos.x),l=Math.floor(this.mazeGen.startPos.y),c=this.mazeGen.startPos.z;for(let u=0;u<e;u++)for(let f=0;f<e;f++)for(let p=0;p<e;p++){const m=u===o&&f===l&&p===c,T=this.maze.get(u,f,p)===this.mazeGen.TYPES.EXIT;if(this.maze.get(u,f,p)===this.mazeGen.TYPES.PATH&&p%2!==0&&!m&&!T){if(p===r&&Math.abs(u-n)+Math.abs(f-a)<=5)continue;i.push({x:u,y:f,z:p})}}if(i.length===0)for(let u=0;u<e;u++)for(let f=0;f<e;f++)for(let p=0;p<e;p++){const m=this.maze.get(u,f,p),T=u===o&&f===l&&p===c,y=m===this.mazeGen.TYPES.EXIT;if(m!==this.mazeGen.TYPES.WALL&&!y&&p%2!==0&&!T&&(u!==n||f!==a||p!==r)){if(p===r&&Math.abs(u-n)+Math.abs(f-a)<=5)continue;i.push({x:u,y:f,z:p})}}if(i.length>0){const u=i[Math.floor(Math.random()*i.length)];t.x=u.x,t.y=u.y,t.z=u.z,t.visualX=u.x,t.visualY=u.y,t.visualZ=u.z,t.lastPos={x:u.x,y:u.y,z:u.z},t.state="WANDERING",t.visitedNodes.clear(),t.visitedNodes.add(`${u.x},${u.y},${u.z}`),t.history=[],t.respawnThresholdPercentage=null,this.staticMapCacheDirty=!0,this.triggerSave()}}respawnDyingHunters(){const t=this.mazeGen.size,e=[],i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,r=Math.floor(this.mazeGen.startPos.x),o=Math.floor(this.mazeGen.startPos.y),l=this.mazeGen.startPos.z;for(let u=0;u<t;u++)for(let f=0;f<t;f++)for(let p=0;p<t;p++){const m=u===r&&f===o&&p===l,T=this.maze.get(u,f,p)===this.mazeGen.TYPES.EXIT;if(this.maze.get(u,f,p)===this.mazeGen.TYPES.PATH&&p%2!==0&&!m&&!T){if(p===a&&Math.abs(u-i)+Math.abs(f-n)<=5)continue;e.push({x:u,y:f,z:p})}}if(e.length===0)for(let u=0;u<t;u++)for(let f=0;f<t;f++)for(let p=0;p<t;p++){const m=this.maze.get(u,f,p),T=u===r&&f===o&&p===l,y=m===this.mazeGen.TYPES.EXIT;if(m!==this.mazeGen.TYPES.WALL&&!y&&p%2!==0&&!T&&(u!==i||f!==n||p!==a)){if(p===a&&Math.abs(u-i)+Math.abs(f-n)<=5)continue;e.push({x:u,y:f,z:p})}}for(let u=e.length-1;u>0;u--){const f=Math.floor(Math.random()*(u+1));[e[u],e[f]]=[e[f],e[u]]}let c=0;for(const u of this.dyingHunters)if(c<e.length){const f=e[c++];u.x=f.x,u.y=f.y,u.z=f.z,u.visualX=f.x,u.visualY=f.y,u.visualZ=f.z,u.lastPos={x:f.x,y:f.y,z:f.z},u.state="WANDERING",u.visitedNodes.clear(),u.visitedNodes.add(`${f.x},${f.y},${f.z}`),u.history=[],u.pathToTarget=[]}}triggerVictory(){this.isGameOver=!0,this.isTutorialMode||ml();let t=!1;if(this.isTutorialMode&&this.currentTutorialId){const i=Di.findIndex(n=>n.id===this.currentTutorialId);t=i!==-1&&i+1<Di.length}const e=this.getMapVisitedPercentage();this.ui.showVictory(e,this.deathsCount,this.degree,this.elapsedTime,this.manaCollected,this.totalMana,this.isTutorialMode,t)}triggerDeath(){this.isGameOver=!0,this.deathsCount++,this.hideGameUI(),this.ui.showInfoBanner(Ot("msgKeyDropped")),this.deathAnimation={active:!0,hunter:null,playerPos:{x:this.player.x,y:this.player.y,z:this.player.z},elapsed:0,duration:1.8,screenFilled:!1,reversing:!1,delayElapsed:0,delayDuration:1.5,glitchElapsed:0,glitchDuration:1.5,uiFade:0,uiTriggered:!1}}collectKey(t,e,i){if(this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${t},${e},${i}`),this.keysCollected++,this.staticMapCacheDirty=!0,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.ui.showInfoBanner(Ot("msgKeySecured",{collected:this.keysCollected,total:this.totalKeys})),this.keysCollected===this.totalKeys&&(this.ui.showInfoBanner(Ot("msgExitUnlocked")),this.exitMesh)){this.exitMesh.material.color.setHex(X.COLORS.THREE_EXIT),this.exitMesh.material.emissive.setHex(X.COLORS.THREE_EXIT),this.exitMesh.material.emissiveIntensity=.5;const n=this.exitMesh.children[0];n&&this.exitMesh.remove(n)}}collectMana(t,e,i){this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${t},${e},${i}`),this.manaCollected++,this.staticMapCacheDirty=!0,this.ui.updateManaHUD(this.manaCollected,this.totalMana),this.ui.showInfoBanner(Ot("msgManaSecured",{collected:this.manaCollected,total:this.totalMana})),this.manaCollected%10===0&&(this.jellyPortalCount++,this.ui.updateJellyPortalHUD(this.jellyPortalCount),setTimeout(()=>{this.ui.showInfoBanner(Ot("msgJellyPortalEarned"))},1200))}triggerLockedExitWarning(){const t=Date.now();if(!this.lastLockedWarningTime||t-this.lastLockedWarningTime>1500){this.lastLockedWarningTime=t;const e=this.totalKeys-this.keysCollected;this.ui.showInfoBanner(Ot("msgKeysRemaining",{count:e}))}}restoreFromSave(t){this.seed=t.seed,gm(this.mazeGen,t.matrix),this.player.x=t.player.x,this.player.y=t.player.y,this.player.z=t.player.z,this.player.dir=t.player.dir;const e=this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.hunterBehavior&&this.currentTutorialStage.hunterBehavior.fixed;for(let u=0;u<this.hunters.length&&u<t.hunters.length;u++)if(e&&this.mazeGen.tutorialHunterSpawns&&this.mazeGen.tutorialHunterSpawns[u]){const f=this.mazeGen.tutorialHunterSpawns[u],p=this.hunters[u];p.x=f.x,p.y=f.y,p.z=f.z,p.visualX=f.x,p.visualY=f.y,p.visualZ=f.z,p.state="WANDERING",p.lastPos={x:f.x,y:f.y,z:f.z},p.visitedNodes.clear(),p.visitedNodes.add(`${f.x},${f.y},${f.z}`),p.history=[],p.pathToTarget=[],p.respawnThresholdPercentage=null}else mm(this.hunters[u],t.hunters[u]);this.discoveredTeleports=new Set(t.discoveredTeleports),this.inactiveTeleportPos=t.inactiveTeleportPos,this.teleportCooldownTicks=t.teleportCooldownTicks,this.allTeleports=[];const i=this.mazeGen.size,n=this.mazeGen.TYPES;for(let u=0;u<i;u++)for(let f=0;f<i;f++)for(let p=0;p<i;p++){const m=this.maze.get(p,f,u);(m===n.TELEPORT||m===n.JELLY_PORTAL)&&this.allTeleports.push({x:p,y:f,z:u})}this.allTeleports.sort((u,f)=>u.z!==f.z?u.z-f.z:u.y!==f.y?u.y-f.y:u.x-f.x);const a=Math.floor(this.player.x),r=Math.floor(this.player.y),o=this.player.z;this.selectedTeleportIndex=this.allTeleports.findIndex(u=>u.x===a&&u.y===r&&u.z===o),this.selectedTeleportIndex===-1&&(this.selectedTeleportIndex=0),this.keysCollected=t.keysCollected!==void 0?t.keysCollected:0,this.totalKeys=t.totalKeys!==void 0?t.totalKeys:X.getKeyCount(this.degree),this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.manaCollected=t.manaCollected!==void 0?t.manaCollected:0,this.totalMana=t.totalMana!==void 0?t.totalMana:0,this.ui.updateManaHUD(this.manaCollected,this.totalMana),this.jellyPortalCount=t.jellyPortalCount!==void 0?t.jellyPortalCount:this.totalMana<10?1:0,this.ui.updateJellyPortalHUD(this.jellyPortalCount),this.totalPathfinders=t.totalPathfinders!==void 0?t.totalPathfinders:X.getPathfinderCount(this.degree),this.pathfindersRemaining=t.pathfindersRemaining!==void 0?t.pathfindersRemaining:this.totalPathfinders,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders);const l=this.degree>=12?10:this.degree>=8?20:0,c=this.getMapVisitedPercentage();this.pathfinderRewardsGranted=t.pathfinderRewardsGranted!==void 0?t.pathfinderRewardsGranted:l>0?Math.floor(c/l):0,this.revealedPathSet=new Set(t.revealedPathSet),this.mapCompletion100Triggered=t.mapCompletion100Triggered||!1,this.dialogueUpTriggered=t.dialogueUpTriggered||!1,this.dialogueDownTriggered=t.dialogueDownTriggered||!1,this.dialogueWhichWayTriggered=t.dialogueWhichWayTriggered||!1,this.dialogueDetectedTriggered=t.dialogueDetectedTriggered||!1,this.deathsCount=t.deathsCount!==void 0?t.deathsCount:0,this.elapsedTime=t.elapsedTime!==void 0?t.elapsedTime:0,this.populateVisitedCells(),this.lastSavePos={x:t.player.x,y:t.player.y,z:t.player.z},this.hunterOnSameFloorDetected=t.hunterOnSameFloorDetected||!1,this.hasSavePoint=!0,this.lastPlayerCell={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.populateFullyRevealedCells(this.player.z),this.exitPathfinderUnlocked=this.checkExitNeighborVisited()}checkHunterCollision(){if(this.deathAnimation&&this.deathAnimation.active)return;const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=Math.floor(this.mazeGen.startPos.x),a=Math.floor(this.mazeGen.startPos.y),r=this.mazeGen.startPos.z,o=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===n&&this.inactiveTeleportPos.y===a&&this.inactiveTeleportPos.z===r;if(!(t===n&&e===a&&i===r&&!o)){for(const l of this.hunters)if(!(l.state==="SLEEP"||l.state==="DEAD_BY_JELLY")&&l.x===t&&l.y===e&&l.z===i){l.visualX=l.x,l.visualY=l.y,l.visualZ=l.z,this.isGameOver=!0,this.deathsCount++,this.hideGameUI(),this.ui.showInfoBanner(Ot("msgKeyDropped")),this.deathAnimation={active:!0,hunter:l,playerPos:{x:this.player.x,y:this.player.y,z:this.player.z},elapsed:0,duration:1.8,screenFilled:!1,reversing:!1,delayElapsed:0,delayDuration:1.5,glitchElapsed:0,glitchDuration:1.5,uiFade:0,uiTriggered:!1};return}}}hideGameUI(){this.ui.hideGameUI(),this.ui.hidePause(),this.canvas.classList.remove("hunted-map-effect"),this.isMap3DActive=!1}initThree(){this.scene=new Zp,this.camera=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new cl({antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.appendChild(this.renderer.domElement),this.controls=new im(this.camera,this.renderer.domElement),this.controls.enableDamping=!0}init(t=null){this.handleKeyDownExtra=l=>{const c=l.key.toLowerCase();if(this.pathfinderConfirmTarget){if(c==="enter"||c===" "||c==="y"){const _=this.pathfinderConfirmTarget;this.pathfinderConfirmTarget=null;const g=document.getElementById("pathfinder-confirm-modal");g&&g.classList.add("hidden"),this.triggerPathReveal(_.x,_.y,_.z,!0),l.preventDefault()}if(c==="escape"||c==="backspace"){this.pathfinderConfirmTarget=null;const _=document.getElementById("pathfinder-confirm-modal");_&&_.classList.add("hidden"),l.preventDefault()}return}if(c==="escape"){if(this.isMap3DActive){this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D(),l.preventDefault();return}this.togglePause();return}if(this.isPaused)return;const u=Math.floor(this.player.x),f=Math.floor(this.player.y),p=this.player.z,m=this.maze.get(u,f,p),T=m===this.mazeGen.TYPES.JELLY_PORTAL,y=m===this.mazeGen.TYPES.TELEPORT||T,h=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===u&&this.inactiveTeleportPos.y===f&&this.inactiveTeleportPos.z===p,d=y&&this.discoveredTeleports.has(`${u},${f},${p}`);if(!this.isMap3DActive&&d&&!h&&(c==="q"||c==="e"||c==="m"||c===" "||c==="enter")){l.preventDefault(),this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(Ot("msgNoOtherActiveTeleport"));return}if(c==="m"&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D()),c==="z"&&this.toggleZoom(),this.isMap3DActive&&!this.isIntroPlaying){if(this.isTeleportMode){if(this.teleportConfirmModalActive){if((c==="a"||c==="arrowleft"||c==="d"||c==="arrowright")&&(this.teleportModalSelection=this.teleportModalSelection==="go"?"cancel":"go",l.preventDefault()),c==="enter"||c===" "||c==="y"){if(this.teleportModalSelection==="go"&&this.selectedTeleportIndex!==null){const g=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(g.x,g.y,g.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;l.preventDefault()}(c==="escape"||c==="backspace")&&(this.teleportConfirmModalActive=!1,l.preventDefault());return}const _=this.getSelectableTeleportIndices();if(_.length>0){let g=_.indexOf(this.selectedTeleportIndex);if(c==="a"||c==="arrowleft"){g=(g-1+_.length)%_.length,this.selectedTeleportIndex=_[g];const v=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=v.z,this.mapCursor={x:v.x,y:v.y,z:v.z},l.preventDefault()}if(c==="d"||c==="arrowright"){g=(g+1)%_.length,this.selectedTeleportIndex=_[g];const v=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=v.z,this.mapCursor={x:v.x,y:v.y,z:v.z},l.preventDefault()}if((c==="enter"||c===" "||c==="y")&&this.selectedTeleportIndex!==null){const v=this.allTeleports[this.selectedTeleportIndex],E=Math.floor(this.player.x),x=Math.floor(this.player.y),S=this.player.z,N=v&&v.x===E&&v.y===x&&v.z===S;v&&!N&&(this.teleportTo(v.x,v.y,v.z),this.toggleTeleportMap(!1)),l.preventDefault()}}(c==="escape"||c==="backspace")&&(this.toggleTeleportMap(!1),l.preventDefault());return}if((c==="q"||c==="pagedown")&&(this.activeMapFloor-2>=1&&(this.activeMapFloor-=2),l.preventDefault()),(c==="e"||c==="pageup")&&(this.activeMapFloor+2<=this.mazeGen.size-2&&(this.activeMapFloor+=2),l.preventDefault()),(c==="a"||c==="arrowleft")&&(this.navigateCursor("left"),l.preventDefault()),(c==="d"||c==="arrowright")&&(this.navigateCursor("right"),l.preventDefault()),(c==="w"||c==="arrowup")&&(this.navigateCursor("up"),l.preventDefault()),(c==="s"||c==="arrowdown")&&(this.navigateCursor("down"),l.preventDefault()),c==="enter"||c===" "||c==="y"){const _=this.mapCursor.x,g=this.mapCursor.y,v=this.mapCursor.z;this.getInteractiveElements(this.activeMapFloor).some(S=>S.x===_&&S.y===g&&S.z===v)&&this.triggerPathReveal(_,g,v),l.preventDefault()}}},this.handleResize=()=>this.resize(),this.handleKeyboardDetection=()=>{this.lastInputDevice!=="keyboard"&&(this.lastInputDevice="keyboard",this.ui.updateControlsHint("keyboard",this.mazeGen.size>11)),this.isMouseOrTouchDetected=!1},window.addEventListener("keydown",this.handleKeyDownExtra),window.addEventListener("keydown",this.handleKeyboardDetection),window.addEventListener("resize",this.handleResize);const e=document.getElementById("mobile-zoom-btn");e&&(e.onclick=l=>{l.stopPropagation(),!(Date.now()-this.lastTeleportCloseTime<500)&&this.toggleZoom()}),this.ui.uiMobileUp&&(this.ui.uiMobileUp.onclick=()=>{Date.now()-this.lastTeleportCloseTime<500||this.changeFloor(2)}),this.ui.uiMobileDown&&(this.ui.uiMobileDown.onclick=()=>{Date.now()-this.lastTeleportCloseTime<500||this.changeFloor(-2)}),this.ui.uiMobileMap&&(this.ui.uiMobileMap.onclick=()=>{if(Date.now()-this.lastTeleportCloseTime<500)return;if(this.isMap3DActive){this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D();return}const l=Math.floor(this.player.x),c=Math.floor(this.player.y),u=this.player.z,f=this.maze.get(l,c,u)===this.mazeGen.TYPES.JELLY_PORTAL,p=this.maze.get(l,c,u)===this.mazeGen.TYPES.TELEPORT||f,m=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===l&&this.inactiveTeleportPos.y===c&&this.inactiveTeleportPos.z===u;p&&!m?this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(Ot("msgNoOtherActiveTeleport")):this.toggleMap3D()});let i=!1,n=0,a=0;if(this.handlePointerDown=l=>{i=!1,n=l.clientX,a=l.clientY},this.handlePointerUp=l=>{const c=l.clientX-n,u=l.clientY-a;Math.sqrt(c*c+u*u)>5&&(i=!0)},this.handleCanvasClick=l=>{i||Date.now()-this.lastTeleportCloseTime<500||this.onCanvasClick(l)},this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerup",this.handlePointerUp),this.renderer.domElement.addEventListener("click",this.handleCanvasClick),this.resize(),this.updateFloorUI(),this.hideCanvasInstant(),t)this.restoreFromSave(t),this.playContinueAnimation();else if(this.isTutorialMode){this.isStoryActive=!1,this.isIntroPlaying=!1;const l=document.getElementById("map-area-container"),c=document.getElementById("left-hud-panel"),u=document.getElementById("right-hud-panel"),f=document.getElementById("bottom-hud-container");l&&l.classList.remove("hidden","intro-hidden"),c&&c.classList.remove("hidden","intro-hidden"),u&&u.classList.remove("hidden","intro-hidden"),f&&f.classList.remove("hidden","intro-hidden"),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1),this.ui.setMap3DVisible(!1),this.isMap3DActive=!1,this.staticMapCacheDirty=!0,this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2}else this.startStorytelling();this.loop();const r=this.mazeGen.size,o=document.getElementById("mobile-zoom-btn");r<=11?o&&o.classList.add("hidden"):o&&o.classList.remove("hidden"),this.ui.updateControlsHint(this.lastInputDevice,r>11)}hideCanvasInstant(){const t=document.getElementById("map-area-container"),e=document.getElementById("left-hud-panel"),i=document.getElementById("right-hud-panel"),n=document.getElementById("bottom-hud-container");t&&(t.style.transition="none",t.classList.remove("intro-reveal"),t.classList.add("intro-hidden"),t.offsetHeight,t.style.transition=""),e&&(e.style.transition="none",e.classList.remove("intro-reveal"),e.classList.add("intro-hidden"),e.offsetHeight,e.style.transition=""),i&&(i.style.transition="none",i.classList.remove("intro-reveal"),i.classList.add("intro-hidden"),i.offsetHeight,i.style.transition=""),n&&(n.style.transition="none",n.classList.remove("intro-reveal"),n.classList.add("intro-hidden"),n.offsetHeight,n.style.transition="")}drawElevator2D(t,e,i,n,a,r,o,l,c=!1,u=0){const f=e===Math.floor(o)&&i===Math.floor(l);if(f){const h=.85+.15*Math.sin(Date.now()/150);t.save(),t.globalAlpha=h}const p=a&&this.maze.get(e,i,u+1)===this.mazeGen.TYPES.ELEVATOR_VISITED,m=r&&this.maze.get(e,i,u-1)===this.mazeGen.TYPES.ELEVATOR_VISITED;if(c)if(a&&r){let h=!1,d=!1;if(this.activePathReveal){const x=this.activePathReveal.findIndex(S=>S.x===e&&S.y===i&&S.z===u);if(x!==-1&&x<this.activePathReveal.length-1){const S=this.activePathReveal[x+1];S.z>u&&(h=!0),S.z<u&&(d=!0)}}!h&&!d&&(h=this.revealedPathSet.has(`${e},${i},${u+1}`)||this.revealedPathSet.has(`${e},${i},${u+2}`),d=this.revealedPathSet.has(`${e},${i},${u-1}`)||this.revealedPathSet.has(`${e},${i},${u-2}`));const _=h||!h&&!d,g=d||!h&&!d;let v=_?X.COLORS.REVEALED_PATH:p?X.COLORS.NEON_UP:X.COLORS.NEON_UP_UNUSED,E=g?X.COLORS.REVEALED_PATH:m?X.COLORS.NEON_DOWN:X.COLORS.NEON_DOWN_UNUSED;this.isJellyChallengeActive&&(v="rgba(100, 100, 100, 0.8)",E="rgba(80, 80, 80, 0.8)"),t.fillStyle=v,t.fillRect(e*n,i*n,n,n/2),t.fillStyle=E,t.fillRect(e*n,i*n+n/2,n,n/2)}else{let h=X.COLORS.REVEALED_PATH;this.isJellyChallengeActive&&(h="rgba(90, 90, 90, 0.8)"),t.fillStyle=h,t.fillRect(e*n,i*n,n,n)}else if(a&&r){let h=p?X.COLORS.NEON_UP:X.COLORS.NEON_UP_UNUSED,d=m?X.COLORS.NEON_DOWN:X.COLORS.NEON_DOWN_UNUSED;this.isJellyChallengeActive&&(h="rgba(100, 100, 100, 0.8)",d="rgba(80, 80, 80, 0.8)"),t.fillStyle=h,t.fillRect(e*n,i*n,n,n/2),t.fillStyle=d,t.fillRect(e*n,i*n+n/2,n,n/2)}else if(a){let h=p?X.COLORS.NEON_UP:X.COLORS.NEON_UP_UNUSED;this.isJellyChallengeActive&&(h="rgba(90, 90, 90, 0.8)"),t.fillStyle=h,t.fillRect(e*n,i*n,n,n)}else{let h=m?X.COLORS.NEON_DOWN:X.COLORS.NEON_DOWN_UNUSED;this.isJellyChallengeActive&&(h="rgba(90, 90, 90, 0.8)"),t.fillStyle=h,t.fillRect(e*n,i*n,n,n)}const T=e*n+n/2,y=i*n+n/2;if(t.fillStyle="#000000",a&&r){const h=n*.28,d=y-n/5,_=y+n/5;t.beginPath(),t.moveTo(T,d-h/2),t.lineTo(T-h*.6,d+h/2),t.lineTo(T+h*.6,d+h/2),t.closePath(),t.fill(),t.beginPath(),t.moveTo(T,_+h/2),t.lineTo(T-h*.6,_-h/2),t.lineTo(T+h*.6,_-h/2),t.closePath(),t.fill()}else if(a){const h=n*.45;t.beginPath(),t.moveTo(T,y-h/2),t.lineTo(T-h*.6,y+h/2),t.lineTo(T+h*.6,y+h/2),t.closePath(),t.fill()}else{const h=n*.45;t.beginPath(),t.moveTo(T,y+h/2),t.lineTo(T-h*.6,y-h/2),t.lineTo(T+h*.6,y-h/2),t.closePath(),t.fill()}f&&t.restore()}drawCellShadow2D(t,e,i,n,a,r,o){if(r===4)return;const l=(p,m)=>p<0||p>=a||m<0||m>=a?!1:this.isWallVisible(p,m,o),c=l(e,i+1),u=l(e+1,i),f=l(e+1,i+1);if(c||u||f){t.fillStyle="rgba(0, 0, 0, 0.4)";const p=n*X.SHADOW_SIZE_FACTOR;if(c&&t.fillRect(e*n,(i+1)*n-p,n,p),u){const m=c?n-p:n;t.fillRect((e+1)*n-p,i*n,p,m)}!c&&!u&&f&&t.fillRect((e+1)*n-p,(i+1)*n-p,p,p)}}updateRendererSize(){this.renderer&&(this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix())}resize(){const e=window.innerHeight>window.innerWidth?window.innerWidth*.82:window.innerHeight*.75;this.canvas.width=e,this.canvas.height=e,this.staticMapCacheDirty=!0,this.updateRendererSize()}getMapVisitedPercentage(){let t=0,e=0;const i=this.mazeGen.size,n=this.mazeGen.TYPES;for(let a=0;a<i;a++)for(let r=0;r<i;r++)for(let o=0;o<i;o++){const l=this.maze.get(a,r,o);if(l===n.WALL||l===n.EXIT||l===n.STATUE)continue;t++,(l===n.VISITED||l===n.START||l===n.ELEVATOR_VISITED||l===n.TELEPORT&&this.discoveredTeleports.has(`${a},${r},${o}`))&&e++}return t===0?0:Math.floor(e/t*100)}updateFloorUI(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=i+1<this.mazeGen.size&&this.maze.get(t,e,i+1)!==this.mazeGen.TYPES.WALL,a=i-1>=0&&this.maze.get(t,e,i-1)!==this.mazeGen.TYPES.WALL;this.ui.updateFloor(i,n,a);const r=this.getMapVisitedPercentage();this.ui.updateVisitedPercent(r),r===100&&!this.mapCompletion100Triggered&&(this.ui.showInfoBanner(Ot("msgWorldSaved")),this.mapCompletion100Triggered=!0),this.checkPathfinderRewards(r),this.getFloorVisitedPercentage(i)===100&&!this.completedFloors.has(i)&&this.triggerFloorCompletion(i)}checkPathfinderRewards(t){const e=this.degree>=12?10:this.degree>=8?20:0;if(e===0)return;this.pathfinderRewardsGranted===void 0&&(this.pathfinderRewardsGranted=0);const i=Math.floor(t/e);if(i>this.pathfinderRewardsGranted){const n=i-this.pathfinderRewardsGranted;this.pathfindersRemaining+=n,this.totalPathfinders+=n,this.pathfinderRewardsGranted=i,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),this.ui.showInfoBanner(Ot("msgFoundPathfinder")),ls(this)}}getTeleportCandidates(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z;return Array.from(this.discoveredTeleports).map(n=>{const[a,r,o]=n.split(",").map(Number);return{x:a,y:r,z:o}}).filter(n=>!(n.x===t&&n.y===e&&n.z===i||this.inactiveTeleportPos&&this.inactiveTeleportPos.x===n.x&&this.inactiveTeleportPos.y===n.y&&this.inactiveTeleportPos.z===n.z))}getSelectableTeleportIndices(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z;return this.allTeleports.map((n,a)=>({t:n,idx:a})).filter(n=>{const a=`${n.t.x},${n.t.y},${n.t.z}`,r=this.discoveredTeleports.has(a),o=this.inactiveTeleportPos&&n.t.x===this.inactiveTeleportPos.x&&n.t.y===this.inactiveTeleportPos.y&&n.t.z===this.inactiveTeleportPos.z,l=n.t.x===t&&n.t.y===e&&n.t.z===i;return r&&!o&&!l}).map(n=>n.idx)}updateGamepad(t){const e=navigator.getGamepads?navigator.getGamepads():[],i=e[0]||e.find(y=>y!==null);if(!i)return;const n=.25;(Math.abs(i.axes[0])>n||Math.abs(i.axes[1])>n||i.axes[2]!==void 0&&Math.abs(i.axes[2])>n||i.axes[3]!==void 0&&Math.abs(i.axes[3])>n||i.buttons.some(y=>y.pressed))&&(this.isMouseOrTouchDetected=!1,this.lastInputDevice!=="gamepad"&&(this.lastInputDevice="gamepad",this.ui.updateControlsHint("gamepad",this.mazeGen.size>11)));const r=i.axes[0],o=i.axes[1];let l=r<-n,c=r>n,u=o<-n,f=o>n;if(i.buttons[12]&&i.buttons[12].pressed&&(u=!0),i.buttons[13]&&i.buttons[13].pressed&&(f=!0),i.buttons[14]&&i.buttons[14].pressed&&(l=!0),i.buttons[15]&&i.buttons[15].pressed&&(c=!0),l?this.input.keys.arrowleft=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowleft=!1),c?this.input.keys.arrowright=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowright=!1),u?this.input.keys.arrowup=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowup=!1),f?this.input.keys.arrowdown=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowdown=!1),!this.prevGamepadButtons){this.prevGamepadButtons=i.buttons.map(y=>y.pressed);return}const p=y=>this.prevGamepadButtons[y],m=y=>i.buttons[y]&&i.buttons[y].pressed,T=y=>m(y)&&!p(y);if(this.pathfinderConfirmTarget){if(T(0)||T(2)){const y=this.pathfinderConfirmTarget;this.pathfinderConfirmTarget=null;const h=document.getElementById("pathfinder-confirm-modal");h&&h.classList.add("hidden"),this.triggerPathReveal(y.x,y.y,y.z,!0)}if(T(1)||T(8)){this.pathfinderConfirmTarget=null;const y=document.getElementById("pathfinder-confirm-modal");y&&y.classList.add("hidden")}this.prevGamepadButtons=i.buttons.map(y=>y.pressed);return}if(this.isStoryActive){if(T(9))this.skipStory();else if(!this.isPreloadingActive){for(let y=0;y<i.buttons.length;y++)if(y!==9&&T(y)){this.triggerAdvanceStory();break}}this.prevGamepadButtons=i.buttons.map(y=>y.pressed);return}if(T(9)){this.togglePause(),this.prevGamepadButtons=i.buttons.map(y=>y.pressed);return}if(this.isPaused){this.prevGamepadButtons=i.buttons.map(y=>y.pressed);return}if(this.isMap3DActive&&!this.isIntroPlaying){const y=m(7),h=m(6);if(y||h){const E=this.mazeGen.size;let x=window.innerWidth*.7/E;x=Math.max(20,Math.min(48,x));const S=x*this.mapZoom,N=S/2,M=S/4,A=N*5,G=window.innerWidth/2+this.mapPanOffsetX,z=window.innerHeight/2+this.mapPanOffsetY,q=this.mapCursor.x,R=this.mapCursor.y,B=this.mapCursor.z,$=this.visualActiveFloor,V=(q-R)*N+G,H=(q+R)*M-(B-$)*A+z,J=this.mapZoom,k=1.025;let Y=y?J*k:J/k;if(Y=Math.max(.5,Math.min(4,Y)),Y!==J){const Z=Y/J;this.mapPanOffsetX=V-(V-(window.innerWidth/2+this.mapPanOffsetX))*Z-window.innerWidth/2,this.mapPanOffsetY=H-(H-(window.innerHeight/2+this.mapPanOffsetY))*Z-window.innerHeight/2,this.mapZoom=Y}}const d=l&&(!this.prevGamepadStick||!this.prevGamepadStick.left),_=c&&(!this.prevGamepadStick||!this.prevGamepadStick.right),g=u&&(!this.prevGamepadStick||!this.prevGamepadStick.up),v=f&&(!this.prevGamepadStick||!this.prevGamepadStick.down);if(this.prevGamepadStick={left:l,right:c,up:u,down:f},this.isTeleportMode){if(this.teleportConfirmModalActive){if((d||T(14)||_||T(15))&&(this.teleportModalSelection=this.teleportModalSelection==="go"?"cancel":"go"),T(0)||T(3)||T(2))if(this.teleportModalSelection==="go"){const E=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(E.x,E.y,E.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;T(1)&&(this.teleportConfirmModalActive=!1)}else{const E=this.getSelectableTeleportIndices();if(E.length>0){let x=E.indexOf(this.selectedTeleportIndex);if(d||T(14)){x=(x-1+E.length)%E.length,this.selectedTeleportIndex=E[x];const S=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=S.z,this.mapCursor={x:S.x,y:S.y,z:S.z}}if(_||T(15)){x=(x+1)%E.length,this.selectedTeleportIndex=E[x];const S=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=S.z,this.mapCursor={x:S.x,y:S.y,z:S.z}}if(T(0)||T(3)||T(2)){const S=this.allTeleports[this.selectedTeleportIndex],N=Math.floor(this.player.x),M=Math.floor(this.player.y),A=this.player.z,G=S&&S.x===N&&S.y===M&&S.z===A;S&&!G&&(this.teleportTo(S.x,S.y,S.z),this.toggleTeleportMap(!1))}}(T(1)||T(8))&&this.toggleTeleportMap(!1)}this.prevGamepadButtons=i.buttons.map(E=>E.pressed);return}if((d||T(14))&&this.navigateCursor("left"),(_||T(15))&&this.navigateCursor("right"),(g||T(12))&&this.navigateCursor("up"),(v||T(13))&&this.navigateCursor("down"),(T(0)||T(4))&&this.activeMapFloor-2>=1&&(this.activeMapFloor-=2),T(5)&&this.activeMapFloor+2<=this.mazeGen.size-2&&(this.activeMapFloor+=2),T(3)||T(2)){const E=this.mapCursor.x,x=this.mapCursor.y,S=this.mapCursor.z;this.getInteractiveElements(this.activeMapFloor).some(A=>A.x===E&&A.y===x&&A.z===S)&&this.triggerPathReveal(E,x,S)}(T(1)||T(8))&&this.toggleMap3D(),this.prevGamepadButtons=i.buttons.map(E=>E.pressed);return}if(!this.isMap3DActive&&!this.isTeleportMode){const y=Math.floor(this.player.x),h=Math.floor(this.player.y),d=this.player.z,_=this.maze.get(y,h,d),g=_===this.mazeGen.TYPES.JELLY_PORTAL,v=_===this.mazeGen.TYPES.TELEPORT||g,E=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===y&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===d;if(v&&this.discoveredTeleports.has(`${y},${h},${d}`)&&!E&&(T(0)||T(2)||T(3)||T(8))){this.discoveredTeleports.size>=2?(this.toggleTeleportMap(!0),this.gamepadTeleportSelectedIndex=0):this.ui.showInfoBanner(Ot("msgNoOtherActiveTeleport")),this.prevGamepadButtons=i.buttons.map(S=>S.pressed);return}}if(T(0)){if(this.isTeleportMode){const h=this.getTeleportCandidates()[this.gamepadTeleportSelectedIndex];h&&this.teleportTo(h.x,h.y,h.z)}else if(!this.isMap3DActive){const y=Math.floor(this.player.x),h=Math.floor(this.player.y),d=this.player.z,_=d>0&&this.maze.get(y,h,d-1)!==0,v=this.maze.get(y,h,d)===this.mazeGen.TYPES.TELEPORT,E=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===y&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===d;(!(v&&this.discoveredTeleports.has(`${y},${h},${d}`))||E)&&_&&this.changeFloor(-2)}}if(T(1)&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleZoom()),T(2)&&!this.isTeleportMode&&!this.isMap3DActive){const y=Math.floor(this.player.x),h=Math.floor(this.player.y),d=this.player.z,_=this.maze.get(y,h,d),g=_===this.mazeGen.TYPES.JELLY_PORTAL,v=_===this.mazeGen.TYPES.TELEPORT||g,E=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===y&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===d;v&&this.discoveredTeleports.has(`${y},${h},${d}`)&&!E&&(this.discoveredTeleports.size>=2?(this.toggleTeleportMap(!0),this.gamepadTeleportSelectedIndex=0):this.ui.showInfoBanner(Ot("msgNoOtherActiveTeleport")))}if(T(3)&&!this.isTeleportMode&&!this.isMap3DActive){const y=Math.floor(this.player.x),h=Math.floor(this.player.y),d=this.player.z,_=d<this.mazeGen.size-1&&this.maze.get(y,h,d+1)!==0,v=this.maze.get(y,h,d)===this.mazeGen.TYPES.TELEPORT,E=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===y&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===d;(!(v&&this.discoveredTeleports.has(`${y},${h},${d}`))||E)&&_&&this.changeFloor(2)}if(T(8)&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D()),this.isTeleportMode){const y=T(4)||T(14),h=T(5)||T(15);if(y||h){const d=this.getTeleportCandidates();d.length>0&&(y?this.gamepadTeleportSelectedIndex=(this.gamepadTeleportSelectedIndex-1+d.length)%d.length:this.gamepadTeleportSelectedIndex=(this.gamepadTeleportSelectedIndex+1)%d.length)}}if(T(5)&&!this.isTeleportMode&&!this.isMap3DActive&&this.tryActivateJellyPortal(),this.isMap3DActive&&this.controls){const y=i.axes[2],h=i.axes[3],d=i.buttons[7]?i.buttons[7].value:0,_=i.buttons[6]?i.buttons[6].value:0,g=.15,v=.15,E=(X.ROT_SPEED!==void 0?X.ROT_SPEED:2)*t,x=20*t,S=Math.abs(y)>g||Math.abs(h)>g,N=d>v||_>v;if(S||N){const M=new tt().copy(this.camera.position).sub(this.controls.target),A=new Sa().setFromVector3(M);if(Math.abs(y)>g&&(A.theta-=y*E),Math.abs(h)>g){A.phi-=h*E;const q=this.controls.minPolarAngle||0,R=this.controls.maxPolarAngle||Math.PI;A.phi=Math.max(q,Math.min(R,A.phi))}d>v&&(A.radius-=d*x),_>v&&(A.radius+=_*x);const G=this.controls.minDistance||2,z=this.controls.maxDistance||100;A.radius=Math.max(G,Math.min(z,A.radius)),A.makeSafe(),M.setFromSpherical(A),this.camera.position.copy(this.controls.target).add(M),this.controls.update()}}this.prevGamepadButtons=i.buttons.map(y=>y.pressed)}queueNotification(t){this.notificationQueue.push(t)}updateNotification(t){if(!this.activeNotification){if(this.notificationQueue.length>0){const i=this.notificationQueue.shift();this.activeNotification={text:i,displayText:"",state:"OPENING",widthProgress:0,typeTimer:0,charIndex:0,waitTimer:0,closeProgress:1}}return}const e=this.activeNotification;e.state==="OPENING"?(e.widthProgress+=t/.15,e.widthProgress>=1&&(e.widthProgress=1,e.state="TYPING")):e.state==="TYPING"?(e.typeTimer+=t,e.typeTimer>=.025&&(e.typeTimer=0,e.charIndex++,e.displayText=e.text.substring(0,e.charIndex),e.charIndex>=e.text.length&&(e.state="WAITING",e.waitTimer=0))):e.state==="WAITING"?(this.isZoomTransitionActive||(e.waitTimer+=t),e.waitTimer>=1&&(e.state="CLOSING",e.closeProgress=1)):e.state==="CLOSING"&&(e.closeProgress-=t/.15,e.closeProgress<=0&&(e.closeProgress=0,this.activeNotification=null))}update(t){if(this.isGameOver||this.isDestroyed||!t)return;if(this.teleportAnim&&this.teleportAnim.active){if(this.teleportAnim.elapsed+=t,this.auraTime=(this.auraTime||0)+t,this.teleportAnim.elapsed>=this.teleportAnim.duration)if(this.teleportAnim.stage==="OUT"){this.player.x=this.teleportAnim.targetX,this.player.y=this.teleportAnim.targetY,this.player.z=this.teleportAnim.targetZ,this.activeMapFloor=this.teleportAnim.targetZ,this.visualActiveFloor=this.teleportAnim.targetZ,this.lastPlayerCell={x:Math.floor(this.teleportAnim.targetX),y:Math.floor(this.teleportAnim.targetY),z:this.teleportAnim.targetZ};const o=Math.floor(this.player.x),l=Math.floor(this.player.y),c=this.player.z;this.maze.get(o,l,c)===this.mazeGen.TYPES.PATH&&(this.maze.set(o,l,c,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${o},${l},${c}`)),this.updateFloorUI(),this.staticMapCacheDirty=!0,this.teleportAnim.stage="IN",this.teleportAnim.elapsed=0}else this.teleportAnim=null;this.updateNotification(t),this.updateGamepad(t);return}if(this.jellyPortalFreezeTimer>0){this.jellyPortalFreezeTimer-=t,this.jellyPortalResetElapsed+=t,this.jellyPortalFreezeTimer<=0&&(this.jellyPortalFreezeTimer=0,this.executeJellyPortalReset(Math.floor(this.player.x),Math.floor(this.player.y),this.player.z),this.jellyPortalResetCells.clear()),this.updateNotification(t),this.updateGamepad(t);return}if(!this.isPaused&&!this.isIntroPlaying&&!this.isStoryActive){this.elapsedTime+=t,this.updateJellyChallenge(t);const o=Math.floor(this.player.x),l=Math.floor(this.player.y),c=this.player.z,u=this.maze.get(o,l,c),f=o===Math.floor(this.mazeGen.startPos.x)&&l===Math.floor(this.mazeGen.startPos.y)&&c===this.mazeGen.startPos.z,m=(u===this.mazeGen.TYPES.TELEPORT||u===this.mazeGen.TYPES.START||f)&&u!==this.mazeGen.TYPES.JELLY_PORTAL?1:0;this.auraHeight<m?this.auraHeight=Math.min(m,this.auraHeight+t*4):this.auraHeight>m&&(this.auraHeight=Math.max(m,this.auraHeight-t*4)),this.auraTime=(this.auraTime||0)+t}if(this.isStoryActive){this.updateGamepad(t),this.updateStory(t);return}if(this.isZoomTransitionActive&&(this.zoomTransitionTimer-=t,this.zoomTransitionTimer<=0&&(this.isZoomTransitionActive=!1,this.zoomTransitionTimer=0)),this.updateNotification(t),this.updateGamepad(t),this.isPaused)return;this.isIntroPlaying||this.hunters.some(l=>l.state!=="SLEEP"&&l.z===this.player.z)&&(this.hunterOnSameFloorDetected||(this.ui.showInfoBanner(Ot("msgDidYouHearThat")),this.hunterOnSameFloorDetected=!0)),this.hunters.some(o=>o.state==="SLEEP")&&this.getMapVisitedPercentage()>=10&&this.wakeHunters();const e=this.getMapVisitedPercentage(),i=this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.hunterBehavior&&this.currentTutorialStage.hunterBehavior.respawn===!1;for(const o of this.hunters)o.state==="DEAD_BY_JELLY"&&o.respawnThresholdPercentage!==null&&!i&&e>=o.respawnThresholdPercentage&&(this.respawnSingleHunter(o),this.ui.showInfoBanner(Ot("msgHunterReturned")));const a=1e3/X.HUNTER_SPEED*t;for(const o of this.hunters)o.visualX===null&&(o.visualX=o.x),o.visualY===null&&(o.visualY=o.y),o.visualZ===null&&(o.visualZ=o.z),!(o.state==="DEAD_BY_JELLY"||o.x===null||o.y===null||o.z===null)&&(o.visualX=la(o.visualX,o.x,a),o.visualY=la(o.visualY,o.y,a),o.visualZ=la(o.visualZ,o.z,a*2),o.generateCloudTexture(t));if(this.isMap3DActive){this.controls&&this.controls.update();const o=this.mazeGen.size,l=this.isTeleportMode?.25:1;for(const c of this.hunterMeshes){const u=c.hunter,f=c.mesh;if(u.state==="DEAD_BY_JELLY"){f.visible=!1;continue}if(f.visible=!0,u.visualX===null||u.visualZ===null||u.visualY===null)continue;f.position.set(u.visualX-o/2,(u.visualZ-o/2)*this.vScale,u.visualY-o/2);const p=u.jellyTime;let m=1+Math.sin(p*1.2)*.07,T=1+Math.cos(p*.8)*.07,y=1+Math.sin(p*1.5)*.07;if(u.state==="DYING"){const E=1-Math.min(1,this.jellyPortalResetElapsed/this.jellyPortalResetDuration);m*=E,T*=E,y*=E;const x=(Math.random()-.5)*.15,S=(Math.random()-.5)*.15,N=(Math.random()-.5)*.15;f.position.add({x,y:S,z:N})}if(c.coreMesh&&(c.coreMesh.scale.set(m,T,y),c.coreMesh.material)){let v=(.8+.2*Math.sin(p*3)+(Math.random()<.1?(Math.random()-.5)*.4:0))*l;if(u.state==="DYING"){const E=Math.min(1,this.jellyPortalResetElapsed/this.jellyPortalResetDuration);v*=1-E}c.coreMesh.material.emissiveIntensity=v}c.particles&&c.particles.forEach(v=>{const E=v.userData;E.angle+=E.speed*t;const x=Math.cos(E.angle)*E.radius,S=Math.sin(E.angle)*E.radius,N=Math.sin(E.angle*2+E.phaseY)*.25;let M=0,A=0,G=0;Math.random()<.15?(M=(Math.random()-.5)*.12,A=(Math.random()-.5)*.12,G=(Math.random()-.5)*.12,v.scale.set(1.4+Math.random()*.4,.6+Math.random()*.3,1.4+Math.random()*.4)):v.scale.set(1,1,1),v.position.set(x+M,N+A,S+G)});const h=u.x-u.visualX,d=u.y-u.visualY,_=Math.sqrt(h*h+d*d),g=Math.max(0,Math.min(1,1-_));if(u.lastPos&&(u.lastPos.x!==u.x||u.lastPos.y!==u.y)){c.trail1.position.set(u.lastPos.x-o/2,(u.lastPos.z-o/2)*this.vScale,u.lastPos.y-o/2),c.trail1.visible=!0;const v=u.jellyTime-.2,E=.95-g*.47,x=E*(1+Math.sin(v*1.2)*.07),S=E*(1+Math.cos(v*.8)*.07),N=E*(1+Math.sin(v*1.5)*.07);c.trail1.scale.set(x,S,N),c.trail1.material&&(c.trail1.material.opacity=(.4-g*.2)*l)}else c.trail1.visible=!1;if(u.history&&u.history.length===2){const v=u.history[0];c.trail2.position.set(v.x-o/2,(v.z-o/2)*this.vScale,v.y-o/2);const E=.48*(1-g);if(E>.02){c.trail2.visible=!0;const x=u.jellyTime-.4,S=E*(1+Math.sin(x*1.2)*.07),N=E*(1+Math.cos(x*.8)*.07),M=E*(1+Math.sin(x*1.5)*.07);c.trail2.scale.set(S,N,M),c.trail2.material&&(c.trail2.material.opacity=.2*(1-g)*l)}else c.trail2.visible=!1}else c.trail2.visible=!1}if(this.keyMeshes)for(const c of this.keyMeshes)c.rotation.y+=1.5*t,c.rotation.x+=.5*t;if(this.isTeleportMode&&this.teleportMeshes&&this.gamepadTeleportSelectedIndex!==void 0){const u=this.getTeleportCandidates()[this.gamepadTeleportSelectedIndex];this.teleportMeshes.forEach(f=>{const{gridX:p,gridY:m,gridZ:T}=f.userData;if(u&&p===u.x&&m===u.y&&T===u.z){const h=1.3+.25*Math.sin(Date.now()/100);f.scale.set(h,h,h),f.material&&f.material.emissive&&(f.material.emissive.setHex(16755200),f.material.emissiveIntensity=3.5)}else{const h=p===Math.floor(this.player.x)&&m===Math.floor(this.player.y)&&T===this.player.z,d=this.teleportCooldownTicks>0;let _=1;if(h&&(_=1.4),f.scale.set(_,_,_),f.material&&f.material.emissive)if(d)f.material.color.setHex(4473924),f.material.emissive.setHex(4473924),f.material.emissiveIntensity=0,f.material.opacity=.4;else if(h)f.material.color.setHex(65535),f.material.emissive.setHex(65535),f.material.emissiveIntensity=3,f.material.opacity=.5;else if(p===Math.floor(this.mazeGen.startPos.x)&&m===Math.floor(this.mazeGen.startPos.y)&&T===this.mazeGen.startPos.z)f.material.color.setHex(X.COLORS.THREE_START),f.material.emissive.setHex(X.COLORS.THREE_START),f.material.emissiveIntensity=this.isTeleportMode?2.5:.5,f.material.opacity=this.isTeleportMode?.95:.8;else{const E=this.maze.get(p,m,T)===this.mazeGen.TYPES.JELLY_PORTAL?X.COLORS.THREE_JELLY_PORTAL:X.COLORS.THREE_TELEPORT;f.material.color.setHex(E),f.material.emissive.setHex(E),f.material.emissiveIntensity=2.5,f.material.opacity=.95}}})}}if(!this.isMap3DActive&&!this.isZoomTransitionActive){let o=0,l=0;const f=1e3/X.HUNTER_SPEED*X.MOVE_SPEED_FACTOR*t;let p=0,m=0;if(this.input.touchMoveVector?(p=this.input.touchMoveVector.x,m=this.input.touchMoveVector.y):((this.input.keys.w||this.input.keys.arrowup)&&(m-=1),(this.input.keys.s||this.input.keys.arrowdown)&&(m+=1),(this.input.keys.a||this.input.keys.arrowleft)&&(p-=1),(this.input.keys.d||this.input.keys.arrowright)&&(p+=1)),p!==0||m!==0){const S=Math.sqrt(p*p+m*m);o=p/S*f,l=m/S*f,this.player.dir=Math.atan2(l,o)}let T=!1;if(o!==0||l!==0){T=!0;const S=.01,N=Math.abs(o)>S,M=Math.abs(l)>S;N&&M?(this.playerSide=o>0?"right":"left",this.playerVertical=l>0?"down":"up"):N?this.playerSide=o>0?"right":"left":M&&(this.playerVertical=l>0?"down":"up")}if(T?(this.playerWalkCycle=(this.playerWalkCycle||0)+t*18,this.playerSquashTargetX=1+Math.sin(this.playerWalkCycle)*.15,this.playerSquashTargetY=1-Math.sin(this.playerWalkCycle)*.15):(this.playerSquashTargetX=1,this.playerSquashTargetY=1),this.playerSquashX=this.playerSquashX||1,this.playerSquashY=this.playerSquashY||1,this.playerSquashX+=(this.playerSquashTargetX-this.playerSquashX)*.25,this.playerSquashY+=(this.playerSquashTargetY-this.playerSquashY)*.25,o!==0||l!==0){const S=Math.floor(this.player.x),N=Math.floor(this.player.y),M=this.player.x+o,A=this.player.y+l,G=(Z,F,Q)=>{const st=this.maze.get(Z,F,Q);return st===this.mazeGen.TYPES.WALL||st===this.mazeGen.TYPES.STATUE?!1:st===this.mazeGen.TYPES.EXIT&&this.keysCollected<this.totalKeys?(this.triggerLockedExitWarning(),!1):!0},z=X.PLAYER_COLLISION_RADIUS,q=X.PLAYER_COLLISION_OFFSET_X||0,R=X.PLAYER_COLLISION_OFFSET_Y||0,B=(Z,F,Q)=>{const st=Math.floor(Z+q-z),yt=Math.floor(Z+q+z),Ct=Math.floor(F+R-z),Rt=Math.floor(F+R+z);for(let L=st;L<=yt;L++)for(let D=Ct;D<=Rt;D++)if(L<0||L>=this.mazeGen.size||D<0||D>=this.mazeGen.size||!G(L,D,Q))return!1;return!0};B(M,this.player.y,this.player.z)&&(this.player.x=M),B(this.player.x,A,this.player.z)&&(this.player.y=A);const $=Math.floor(this.player.x),V=Math.floor(this.player.y),H=this.player.z;if($!==S||V!==N){const Z=this.maze.get(S,N,H);if(Z===this.mazeGen.TYPES.VISITED||Z===this.mazeGen.TYPES.START||Z===this.mazeGen.TYPES.TELEPORT){const Q=H+1<this.mazeGen.size&&this.maze.get($,V,H+1)!==this.mazeGen.TYPES.WALL,st=H-1>=0&&this.maze.get($,V,H-1)!==this.mazeGen.TYPES.WALL;Q&&st?this.dialogueWhichWayTriggered||(this.ui.showInfoBanner(Ot("msgWhichWay")),this.dialogueWhichWayTriggered=!0):Q?this.dialogueUpTriggered||(this.ui.showInfoBanner(Ot("msgElevatorUp")),this.dialogueUpTriggered=!0):st&&(this.dialogueDownTriggered||(this.ui.showInfoBanner(Ot("msgElevatorDown")),this.dialogueDownTriggered=!0))}}const k=(Z,F,Q)=>{const st=this.maze.get(Z,F,Q);(st===this.mazeGen.TYPES.PATH||st===this.mazeGen.TYPES.KEY||st===this.mazeGen.TYPES.MANA)&&(st===this.mazeGen.TYPES.KEY?this.collectKey(Z,F,Q):st===this.mazeGen.TYPES.MANA?this.collectMana(Z,F,Q):(this.maze.set(Z,F,Q,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${Z},${F},${Q}`)),this.staticMapCacheDirty=!0)};k($,V,H),$!==S&&V!==N&&(k($,N,H),k(S,V,H));const Y=this.maze.get($,V,H);!this.exitPathfinderUnlocked&&this.checkExitNeighborVisited()&&(this.exitPathfinderUnlocked=!0,this.ui.showInfoBanner(Ot("msgExitFound"))),Y===this.mazeGen.TYPES.EXIT&&(this.isJellyChallengeActive||this.triggerVictory())}if((o!==0||l!==0)&&(this.skipCellAnimations=!1),this.checkHunterCollision(),this.isGameOver)return;const y=Math.floor(this.player.x),h=Math.floor(this.player.y),d=this.player.z,_=this.maze.get(y,h,d)===this.mazeGen.TYPES.JELLY_PORTAL,g=this.maze.get(y,h,d)===this.mazeGen.TYPES.TELEPORT||_,v=this.teleportCooldownTicks>0;if(y>=0&&y<this.mazeGen.size&&h>=0&&h<this.mazeGen.size){if(this.maze.get(y,h,d)===this.mazeGen.TYPES.PATH)this.maze.set(y,h,d,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${y},${h},${d}`),this.staticMapCacheDirty=!0;else if(g){const G=`${y},${h},${d}`;!(this.lastPlayerCell&&this.lastPlayerCell.x===y&&this.lastPlayerCell.y===h&&this.lastPlayerCell.z===d)&&!v&&(this.discoveredTeleports.add(G),this.staticMapCacheDirty=!0,_?(this.triggerSave(),this.ui.showInfoBanner(Ot("msgJellyPortalNotSafe"))):(this.triggerSave(),this.ui.showInfoBanner(Ot("msgSafePointTeleport"))))}const S=d<this.mazeGen.size-1&&this.maze.get(y,h,d+1)!==this.mazeGen.TYPES.WALL,N=d>0&&this.maze.get(y,h,d-1)!==this.mazeGen.TYPES.WALL,M=S||N;if(this.lastPlayerCell){const G=this.lastPlayerCell.x,z=this.lastPlayerCell.y,q=this.lastPlayerCell.z,R=q<this.mazeGen.size-1&&this.maze.get(G,z,q+1)!==this.mazeGen.TYPES.WALL,B=q>0&&this.maze.get(G,z,q-1)!==this.mazeGen.TYPES.WALL;if((R||B)&&(G!==y||z!==h||q!==d)){const H=`${G},${z},${q}`;this.revealedPathSet.has(H)&&(this.revealedPathSet.delete(H),this.staticMapCacheDirty=!0)}}const A=`${y},${h},${d}`;!M&&this.revealedPathSet.has(A)&&(this.revealedPathSet.delete(A),this.staticMapCacheDirty=!0)}g&&!v?(this.input.keys.e||this.input.keys.pageup||this.input.keys.q||this.input.keys.pagedown)&&(["e","q","pageup","pagedown"].forEach(S=>this.input.keys[S]=!1),this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(Ot("msgNoOtherActiveTeleport"))):((this.input.keys.e||this.input.keys.pageup)&&this.changeFloor(2),(this.input.keys.q||this.input.keys.pagedown)&&this.changeFloor(-2)),this.input.keys.r&&(this.input.keys.r=!1,this.tryActivateJellyPortal()),(!this.lastPlayerCell||this.lastPlayerCell.x!==y||this.lastPlayerCell.y!==h||this.lastPlayerCell.z!==d)&&(this.staticMapCacheDirty=!0);const x=window.innerHeight>window.innerWidth;this.ui.updateMobileMapButton(g,!!v,x,_),this.updateFloorUI(),this.lastPlayerCell={x:y,y:h,z:d}}const r=performance.now();if(r-this.lastHunterMove>X.HUNTER_SPEED){if(this.lastHunterMove=r,this.teleportCooldownTicks>0&&(this.teleportCooldownTicks--,this.staticMapCacheDirty=!0,this.teleportCooldownTicks===0)){this.inactiveTeleportPos=null;for(const h of this.hunters){if(h.state==="DEAD_BY_JELLY")continue;const d=this.maze.get(h.x,h.y,h.z);if(d===this.mazeGen.TYPES.VISITED||d===this.mazeGen.TYPES.START||d===this.mazeGen.TYPES.EXIT){const _=h.state;h.state="TRACKING",_!=="TRACKING"&&!this.dialogueDetectedTriggered&&(this.ui.showInfoBanner(Ot("msgIWasDetected")),this.dialogueDetectedTriggered=!0)}else h.state="WANDERING",h.pathToTarget=[],h.visitedNodes.clear(),h.visitedNodes.add(`${h.x},${h.y},${h.z}`)}}let o=0,l=0;const c=this.hunters.some(h=>h.state==="SLEEP");for(const h of this.hunters){if(h.state==="SLEEP"||h.state==="DEAD_BY_JELLY"||h.state==="DYING")continue;if(this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.hunterBehavior&&this.currentTutorialStage.hunterBehavior.static){if(this.checkHunterCollision(),this.isGameOver)return;continue}const _=h.state;h.move(this.player,this.maze,this.mazeGen.TYPES),h.state==="TRACKING"&&_!=="TRACKING"&&!this.dialogueDetectedTriggered&&(this.ui.showInfoBanner(Ot("msgIWasDetected")),this.dialogueDetectedTriggered=!0),(h.state==="TRACKING"||h.state==="TELEPORT_TRACKING")&&o++;const g=h.z===this.player.z;let v=!1;if(g)v=!0;else{const E=Math.max(5,Math.floor(this.degree*1.2));om({x:h.x,y:h.y,z:h.z},{x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.maze,this.mazeGen.size,this.mazeGen.TYPES.WALL,E,this.mazeGen.startPos)<=E&&(v=!0)}if(v&&l++,this.checkHunterCollision(),this.isGameOver)return}const u=o>0;this.ui.updateHazardWarning(u,this.teleportCooldownTicks,this.isSafeMode,c),u?this.canvas.classList.add("hunted-map-effect"):this.canvas.classList.remove("hunted-map-effect"),this.ui.setNearbyWarning(l>0);let f=1/0;const p=Math.floor(this.player.x),m=Math.floor(this.player.y),T=this.player.z,y=this.hunters.filter(h=>h.state!=="SLEEP");for(const h of y){const d=rm({x:h.x,y:h.y,z:h.z},{x:p,y:m,z:T},this.maze,this.mazeGen.size,this.mazeGen.TYPES.WALL);d<f&&(f=d)}this.ui.updateProximeter(f,y.length,this.isGameOver)}}changeFloor(t){if(this.isGameOver||this.floorTransition||this.isJellyChallengeActive)return;this.skipCellAnimations=!0;const e=Math.floor(this.player.x),i=Math.floor(this.player.y),n=this.player.z,a=n+1<this.mazeGen.size&&this.maze.get(e,i,n+1)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,n+1)!==this.mazeGen.TYPES.STATUE,r=n-1>=0&&this.maze.get(e,i,n-1)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,n-1)!==this.mazeGen.TYPES.STATUE;if(t>0&&a||t<0&&r){const o=n+t;if(o>=0&&o<this.mazeGen.size&&this.maze.get(e,i,o)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,o)!==this.mazeGen.TYPES.STATUE){const l=n+t/2;this.maze.get(e,i,l)!==this.mazeGen.TYPES.ELEVATOR_VISITED&&(this.maze.set(e,i,l,this.mazeGen.TYPES.ELEVATOR_VISITED),this.staticMapCacheDirty=!0);const c=`${e},${i},${l}`;this.revealedPathSet.delete(c);const u=document.createElement("canvas");u.width=this.canvas.width,u.height=this.canvas.height;const f=u.getContext("2d");this.renderMapToContext(f,this.player.z),this.player.x=e+X.PLAYER_START_X,this.player.y=i+X.PLAYER_START_Y%1,this.player.z=o,this.staticMapCacheDirty=!0,this.populateFullyRevealedCells(o),this.maze.get(e,i,o)===this.mazeGen.TYPES.PATH&&this.maze.set(e,i,o,this.mazeGen.TYPES.VISITED);const p=document.createElement("canvas");p.width=this.canvas.width,p.height=this.canvas.height;const m=p.getContext("2d");this.renderMapToContext(m,this.player.z),this.floorTransition={canvasOld:u,canvasNew:p,progress:0,duration:.4,delta:t},this.updateFloorUI(),this.draw2DMap(0),this.maze.get(e,i,o)===this.mazeGen.TYPES.EXIT&&this.triggerVictory()}}}toggleMap3D(){this.isMap3DActive=!this.isMap3DActive,this.isTeleportMode=!1;const t=document.getElementById("mobile-teleport-exit-btn");if(t&&t.classList.add("hidden"),this.isMap3DActive){this.ui.setMap3DVisible(!0),this.activeMapFloor=this.player.z,this.visualActiveFloor=this.player.z,this.mapCursor={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.mapZoom=1,this.mapPanOffsetX=0,this.mapPanOffsetY=0,this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="none");const e=document.getElementById("map3d-instructions");e&&(e.style.display="none"),this.isometricCanvas||this.initIsometricCanvas(),this.isometricCanvas.style.display="block"}else this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.remove("hidden"),this.ui.setMap3DVisible(!1),this.isometricCanvas&&(this.isometricCanvas.style.display="none")}build3DMap(t=!1){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(new yr(16777215,.6));const e=new vr(16777215,.4);e.position.set(10,20,10),this.scene.add(e),this.pulsatingMaterials=[],this.hunterMeshes=[],this.statueMeshes.clear(),this.teleportMeshes=[],this.knownMeshes=[],this.keyMeshes=[],this.manaMeshes=[],this.exitMesh=null;const i=this.mazeGen.size,n=(_,g,v)=>{if(v<0||v>=i)return!1;const E=this.maze.get(_,g,v);return E===2||E===3||E===4||E===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${_},${g},${v}`)||this.visitedCells.has(`${_},${g},${v}`)};this.gridMeshes=new Array(i*i*i).fill(null);const a=new xe(.9,.9,.9),r=this.isTeleportMode?X.TELEPORT_MAP_OPACITY:1,o=new xe(.9,.425,.9),l=new xe(.9,.425,.9),c=new Cn(.35,.35,2*this.vScale,8);new ee({color:X.COLORS.THREE_VISITED,transparent:!0,opacity:.8*r});for(let _=0;_<i;_++)for(let g=0;g<i;g++)for(let v=0;v<i;v++){const E=this.maze.get(_,g,v);if(E===this.mazeGen.TYPES.WALL||E===this.mazeGen.TYPES.STATUE){if(t||E===this.mazeGen.TYPES.WALL&&this.isWallVisible(_,g,v)||E===this.mazeGen.TYPES.STATUE&&(this.isNearVisited(_,g,v)||this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.revealed)){const H=new xe(.35,.3*this.vScale,.35),J=new ee({color:5903520,emissive:5903520,emissiveIntensity:.35*r,transparent:!0,opacity:.8*r}),k=[{dx:-.23,dy:-.23},{dx:.23,dy:-.23},{dx:-.23,dy:.23},{dx:.23,dy:.23}];for(const Y of k){const Z=new Qt(H,J);Z.position.set(_+Y.dx-i/2,(v-i/2)*this.vScale-.3*this.vScale,g+Y.dy-i/2),this.scene.add(Z)}if(E===this.mazeGen.TYPES.STATUE){const Y=new xe(.5,.1*this.vScale,.5),Z=new ee({color:3355443,transparent:!0,opacity:.9*r}),F=new Qt(Y,Z),Q=(v-i/2)*this.vScale-.4*this.vScale;F.position.set(_-i/2,Q,g-i/2),this.scene.add(F);const st=new Cn(.18,.22,.5*this.vScale,8),yt=new ee({color:7829367,transparent:!0,opacity:.9*r}),Ct=new Qt(st,yt);Ct.position.set(_-i/2,Q+.3*this.vScale,g-i/2),this.scene.add(Ct),this.statueMeshes.set(`${_},${g},${v}`,{base:F,body:Ct})}}continue}if(v%2===0&&E!==0){const V=`${_},${g},${v}`,H=this.revealedPathSet.has(V),J=E===this.mazeGen.TYPES.ELEVATOR_VISITED,k=E===1&&(n(_,g,v-1)||n(_,g,v+1));if(J||k||H||t){let Y;if(H)Y=new ee({color:16777215,transparent:!0,opacity:.95*r,emissive:16777215,emissiveIntensity:2*r});else if(J)Y=new ee({color:X.COLORS.THREE_VISITED,transparent:!0,opacity:.8*r});else if(k||t){const F=t?X.COLORS.THREE_VISITED:X.COLORS.THREE_KNOWN;Y=new ee({color:F,transparent:!0,opacity:t?.72:.6*r,emissive:F,emissiveIntensity:t?0:.5*r}),t||this.pulsatingMaterials.push(Y)}const Z=new Qt(c,Y);Z.position.set(_-i/2,(v-i/2)*this.vScale,g-i/2),this.scene.add(Z),this.gridMeshes[_*i*i+g*i+v]=Z,k&&!H&&(Z.userData={gridX:_,gridY:g,gridZ:v},this.knownMeshes.push(Z))}continue}const S=E===this.mazeGen.TYPES.JELLY_PORTAL,N=E===this.mazeGen.TYPES.TELEPORT||S,M=N&&this.discoveredTeleports.has(`${_},${g},${v}`),A=E===2||E===3||E===4||E===5||M,G=(E===1||N&&!M)&&this.isNearVisited(_,g,v);if(M){const V=_===Math.floor(this.mazeGen.startPos.x)&&g===Math.floor(this.mazeGen.startPos.y)&&v===this.mazeGen.startPos.z,H=this.teleportCooldownTicks>0;if(V){const Ct=H?0:this.isTeleportMode?2.5:.5,Rt=H?4473924:X.COLORS.THREE_START,L=H?.4:this.isTeleportMode?.95:.8*r,D=new ee({color:Rt,emissive:Rt,emissiveIntensity:Ct*r,transparent:!0,opacity:L}),W=new Qt(a,D);W.position.set(_-i/2,(v-i/2)*this.vScale,g-i/2),this.isTeleportMode&&W.scale.set(1.4,1.4,1.4),W.userData={isTeleport:!0,gridX:_,gridY:g,gridZ:v},this.scene.add(W),this.teleportMeshes.push(W);continue}const J=_===Math.floor(this.player.x)&&g===Math.floor(this.player.y)&&v===this.player.z;let k=this.isTeleportMode?.9:.45,Y=this.isTeleportMode?2.5:.8,Z=S?X.COLORS.THREE_JELLY_PORTAL:X.COLORS.THREE_TELEPORT,F=.95;H?(Z=4473924,Y=0,F=.4):this.isTeleportMode&&J&&(Z=65535,F=.5,Y=3);const Q=new rn(k,16,16),st=new ee({color:Z,emissive:Z,emissiveIntensity:Y,transparent:!0,opacity:F}),yt=new Qt(Q,st);yt.position.set(_-i/2,(v-i/2)*this.vScale,g-i/2),yt.userData={isTeleport:!0,gridX:_,gridY:g,gridZ:v},this.scene.add(yt),this.teleportMeshes.push(yt);continue}if(E===this.mazeGen.TYPES.KEY){const V=new za(.3,0),H=new ee({color:X.COLORS.THREE_KEY,emissive:X.COLORS.THREE_KEY,emissiveIntensity:.6*r,shininess:100}),J=new Qt(V,H);if(J.position.set(_-i/2,(v-i/2)*this.vScale,g-i/2),J.userData={isKey:!0,gridX:_,gridY:g,gridZ:v},this.scene.add(J),this.keyMeshes.push(J),this.pulsatingMaterials.push(H),!this.visitedCells.has(`${_},${g},${v}`))continue}if(E===this.mazeGen.TYPES.MANA){const V=new Na(.22,0),H=new ee({color:65535,emissive:65535,emissiveIntensity:.7*r,shininess:120}),J=new Qt(V,H);if(J.position.set(_-i/2,(v-i/2)*this.vScale,g-i/2),J.userData={isMana:!0,gridX:_,gridY:g,gridZ:v},this.scene.add(J),this.manaMeshes.push(J),this.pulsatingMaterials.push(H),!this.visitedCells.has(`${_},${g},${v}`))continue}const R=`${_},${g},${v}`,B=this.revealedPathSet.has(R);if(t?E!==this.mazeGen.TYPES.WALL:A||G||B){let V=t?X.COLORS.THREE_VISITED:X.COLORS.THREE_KNOWN,H;B?(V=16777215,H=new ee({color:V,transparent:!0,opacity:.95*r,emissive:V,emissiveIntensity:2*r})):A||t?(V=X.COLORS.THREE_VISITED,E===3?V=X.COLORS.THREE_START:E===4&&(V=this.keysCollected===this.totalKeys?X.COLORS.THREE_EXIT:16724736),H=new ee({color:V,transparent:!0,opacity:t?.72:.8*r})):G&&(H=new ee({color:V,transparent:!0,opacity:.6*r,emissive:V,emissiveIntensity:.5*r}),this.pulsatingMaterials.push(H));const J=v<i-1&&this.maze.get(_,g,v+1)!==0,k=v>0&&this.maze.get(_,g,v-1)!==0;if(J||k){const Q=this.pulsatingMaterials.indexOf(H);if(Q>-1&&this.pulsatingMaterials.splice(Q,1),J&&k){let st=!1,yt=!1;if(B){if(this.activePathReveal){const nt=this.activePathReveal.findIndex(gt=>gt.x===_&&gt.y===g&&gt.z===v);if(nt!==-1&&nt<this.activePathReveal.length-1){const gt=this.activePathReveal[nt+1];gt.z>v&&(st=!0),gt.z<v&&(yt=!0)}}!st&&!yt&&(st=this.revealedPathSet.has(`${_},${g},${v+1}`)||this.revealedPathSet.has(`${_},${g},${v+2}`),yt=this.revealedPathSet.has(`${_},${g},${v-1}`)||this.revealedPathSet.has(`${_},${g},${v-2}`))}const Ct=B&&(st||!st&&!yt),Rt=B&&(yt||!st&&!yt),L=Rt?16777215:A?X.COLORS.THREE_ELEVATOR_DOWN:X.COLORS.THREE_ELEVATOR_DOWN_UNUSED,D=Ct?16777215:A?X.COLORS.THREE_ELEVATOR_UP:X.COLORS.THREE_ELEVATOR_UP_UNUSED,W=new ee({color:L,transparent:!0,opacity:.9*r,emissive:L,emissiveIntensity:(Rt?2:.4)*r}),C=new ee({color:D,transparent:!0,opacity:.9*r,emissive:D,emissiveIntensity:(Ct?2:.4)*r}),K=new Qt(o,W),it=new Qt(l,C);K.position.set(_-i/2,(v-i/2)*this.vScale-.2125,g-i/2),it.position.set(_-i/2,(v-i/2)*this.vScale+.2125,g-i/2),this.scene.add(K),this.scene.add(it),this.gridMeshes[_*i*i+g*i+v]=it,G&&!B&&(K.userData={gridX:_,gridY:g,gridZ:v},it.userData={gridX:_,gridY:g,gridZ:v},this.knownMeshes.push(K),this.knownMeshes.push(it));continue}else{const st=J?X.COLORS.THREE_ELEVATOR_UP:X.COLORS.THREE_ELEVATOR_DOWN,yt=J?X.COLORS.THREE_ELEVATOR_UP_UNUSED:X.COLORS.THREE_ELEVATOR_DOWN_UNUSED,Ct=B?16777215:A?st:yt,Rt=B?2:.4;H=new ee({color:Ct,transparent:!0,opacity:.9*r,emissive:Ct,emissiveIntensity:Rt*r})}}const Y=_===Math.floor(this.player.x)&&g===Math.floor(this.player.y)&&v===this.player.z,Z=this.hunters.some(Q=>Q.x===_&&Q.y===g&&Q.z===v);if(Y||Z){const Q=new xe(.9,.05,.9),st=new Qt(Q,H);st.position.set(_-i/2,(v-i/2)*this.vScale-.425,g-i/2),this.scene.add(st),this.gridMeshes[_*i*i+g*i+v]=st;continue}const F=new Qt(a,H);if(F.position.set(_-i/2,(v-i/2)*this.vScale,g-i/2),E===4&&(this.exitMesh=F,this.keysCollected<this.totalKeys)){const Q=new xe(.95,.95,.95),st=new Pn({color:16711680,wireframe:!0}),yt=new Qt(Q,st);F.add(yt)}this.scene.add(F),this.gridMeshes[_*i*i+g*i+v]=F,(G||E===this.mazeGen.TYPES.EXIT)&&!B&&(F.userData={gridX:_,gridY:g,gridZ:v},this.knownMeshes.push(F))}}if(t)return;const u=new rn(.42,16,16),f=new ee({color:16711680,emissive:16711680,emissiveIntensity:.8,depthWrite:!1}),p=new Qt(u,f);p.position.set(Math.floor(this.player.x)-i/2,(this.player.z-i/2)*this.vScale+.05,Math.floor(this.player.y)-i/2),this.scene.add(p);const m=new rn(.4),T=new ee({color:X.COLORS.THREE_HUNTER,emissive:X.COLORS.THREE_HUNTER,emissiveIntensity:.8,depthWrite:!1}),y=new ee({color:X.COLORS.THREE_HUNTER,transparent:!0,opacity:.4,emissive:X.COLORS.THREE_HUNTER,emissiveIntensity:.3,depthWrite:!1}),h=new ee({color:X.COLORS.THREE_HUNTER,transparent:!0,opacity:.15,emissive:X.COLORS.THREE_HUNTER,emissiveIntensity:.1,depthWrite:!1}),d=m;for(let _=0;_<this.hunters.length;_++){const g=this.hunters[_];if(g.state==="SLEEP")continue;const v=new Qt(d,h),E=new Qt(d,y);v.visible=!1,E.visible=!1,v.renderOrder=99,E.renderOrder=99,this.scene.add(v),this.scene.add(E);const x=new Sn;x.renderOrder=99;const S=new Qt(m,T);x.add(S);const N=4,M=[],A=new xe(.18,.18,.18),G=[X.COLORS.THREE_HUNTER,16711935,65535,16776960];for(let z=0;z<N;z++){const q=new ee({color:G[z%G.length],transparent:!0,opacity:.8,emissive:G[z%G.length],emissiveIntensity:.8,depthWrite:!1}),R=new Qt(A,q);R.userData={angle:z/N*Math.PI*2,radius:.35+Math.random()*.1,speed:1+Math.random()*1.5,phaseY:Math.random()*Math.PI*2},x.add(R),M.push(R)}x.position.set(g.x-i/2,(g.z-i/2)*this.vScale,g.y-i/2),this.scene.add(x),this.hunterMeshes.push({hunter:g,mesh:x,coreMesh:S,particles:M,trail1:E,trail2:v})}this.camera.position.set(i,i*this.vScale,i),this.controls.target.set(0,0,0),this.controls.update()}draw2DMap(t=.016){if(this.deathAnimation&&this.deathAnimation.active){if(this.deathAnimation.delayElapsed<this.deathAnimation.delayDuration)this.deathAnimation.delayElapsed+=t,this.updateNotification(t);else if(this.deathAnimation.screenFilled)this.deathAnimation.reversing&&(this.deathAnimation.elapsed-=t,this.deathAnimation.elapsed<=0&&(this.deathAnimation=null,this.isGameOver=!1,this.ui.initGameUI(this.isSafeMode),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1),this.ui.showInfoBanner(Ot("msgPlayerRespawn"))));else if(this.deathAnimation.elapsed+=t,this.updateNotification(t),this.deathAnimation.elapsed>=this.deathAnimation.duration){this.deathAnimation.screenFilled=!0,this.activeNotification=null,this.notificationQueue=[];const n=Math.floor(this.deathAnimation.playerPos.x),a=Math.floor(this.deathAnimation.playerPos.y),r=this.deathAnimation.playerPos.z;if(this.maze.get(n,a,r)===this.mazeGen.TYPES.JELLY_PORTAL){const f=this.mazeGen.size,p=[],m=Math.floor(this.mazeGen.startPos.x),T=Math.floor(this.mazeGen.startPos.y),y=this.mazeGen.startPos.z;for(let h=0;h<f;h++)for(let d=0;d<f;d++)for(let _=0;_<f;_++){const g=this.maze.get(h,d,_),v=h===m&&d===T&&_===y,E=h===n&&d===a&&_===r;(g===this.mazeGen.TYPES.PATH||g===this.mazeGen.TYPES.VISITED)&&_%2!==0&&!v&&!E&&p.push({x:h,y:d,z:_})}if(p.length>0){const h=p[Math.floor(Math.random()*p.length)];this.maze.set(h.x,h.y,h.z,this.mazeGen.TYPES.KEY)}else this.maze.set(n,a,r,this.mazeGen.TYPES.KEY)}else this.maze.set(n,a,r,this.mazeGen.TYPES.KEY);this.totalKeys++,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.staticMapCacheDirty=!0;let l=this.mazeGen.startPos.x,c=this.mazeGen.startPos.y,u=this.mazeGen.startPos.z;if(this.lastSavePos&&(l=this.lastSavePos.x,c=this.lastSavePos.y,u=this.lastSavePos.z),this.player.x=l,this.player.y=c,this.player.z=u,this.activeMapFloor=u,this.visualActiveFloor=u,this.lastPlayerCell={x:Math.floor(l),y:Math.floor(c),z:u},this.isJellyChallengeActive=!1,this.jellyProjectiles.forEach(f=>{f.threeMesh&&this.scene.remove(f.threeMesh)}),this.jellyProjectiles=[],this.jellyStatueStates.clear(),this.hunters=[],this.isTutorialMode){const f=this.currentTutorialStage&&this.currentTutorialStage.hunterBehavior&&this.currentTutorialStage.hunterBehavior.fixed;if(this.mazeGen.tutorialHunterSpawns&&!this.isSafeMode){let p=1;for(const m of this.mazeGen.tutorialHunterSpawns){const T=new ra(this.mazeGen,{x:m.x,y:m.y,z:m.z},p++);if(!f){const y=[],h=this.mazeGen.size,d=Math.floor(this.mazeGen.startPos.x),_=Math.floor(this.mazeGen.startPos.y),g=this.mazeGen.startPos.z;for(let v=0;v<h;v++)for(let E=0;E<h;E++)for(let x=0;x<h;x++){const S=this.maze.get(v,E,x),N=v===d&&E===_&&x===g,M=S===this.mazeGen.TYPES.EXIT;S!==this.mazeGen.TYPES.WALL&&!M&&!N&&(v!==Math.floor(l)||E!==Math.floor(c)||x!==u)&&y.push({x:v,y:E,z:x})}if(y.length>0){const v=y[Math.floor(Math.random()*y.length)];T.x=v.x,T.y=v.y,T.z=v.z,T.visualX=v.x,T.visualY=v.y,T.visualZ=v.z,T.lastPos={x:v.x,y:v.y,z:v.z},T.visitedNodes.clear(),T.visitedNodes.add(`${v.x},${v.y},${v.z}`)}}this.hunters.push(T)}}}else this.initHunters(this.degree);this.suppressWakeHuntersBanner=!0,this.isTutorialMode||ls(this),this.deathAnimation.reversing=!0}}this.floorTransition&&(this.floorTransition.progress+=t/this.floorTransition.duration,this.floorTransition.progress>=1&&(this.floorTransition=null));const e=this.mazeGen.size,i=this.isZoomActive?11:e;if(this.zoomVisibleCells===void 0?this.zoomVisibleCells=i:(this.zoomVisibleCells+=(i-this.zoomVisibleCells)*(1-Math.exp(-12*t)),Math.abs(this.zoomVisibleCells-i)<.01&&(this.zoomVisibleCells=i)),this.floorTransition){const n=this.floorTransition.progress,a=this.canvas.width/2,r=this.canvas.height/2,o=this.floorTransition.delta>0;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let l,c;o?(l=1-.2*n,c=1.2-.2*n):(l=1+.2*n,c=.8+.2*n),this.ctx.save(),this.ctx.globalAlpha=1-n,this.ctx.translate(a,r),this.ctx.scale(l,l),this.ctx.drawImage(this.floorTransition.canvasOld,-a,-r),this.ctx.restore(),this.ctx.save(),this.ctx.globalAlpha=n,this.ctx.translate(a,r),this.ctx.scale(c,c),this.ctx.drawImage(this.floorTransition.canvasNew,-a,-r),this.ctx.restore()}else this.renderMapToContext(this.ctx,this.player.z)}renderMapToContext(t,e){t.clearRect(0,0,t.canvas.width,t.canvas.height);const i=this.mazeGen.size,n=i>11,a=n?t.canvas.width/11:t.canvas.width/i;let r=this.player.x,o=this.player.y,l=1,c=1,u=1;if(this.teleportAnim&&this.teleportAnim.active){const d=this.teleportAnim,_=Math.min(1,d.elapsed/d.duration);d.stage==="OUT"?(r=d.startX,o=d.startY,l=1-_*.9,c=1+_*2,u=1-_):(r=d.targetX,o=d.targetY,l=_,c=3-_*2,u=_)}const f=Math.floor(r),p=Math.floor(o);let m=n||this.isZoomTransitionActive,T=n?this.zoomVisibleCells:i;if(this.isZoomTransitionActive){const _=Math.min(1,(2-this.zoomTransitionTimer)/2),v=(S=>1-Math.pow(1-S,3))(_),E=3;T=E+((n?11:i)-E)*v}if(m){t.save();const d=(n?11:i)/T,_=T/2;let g=r,v=o;g<_&&(g=_),g>i-_&&(g=i-_),v<_&&(v=_),v>i-_&&(v=i-_);const E=t.canvas.width/2,x=t.canvas.height/2;t.translate(E,x),t.scale(d,d),t.translate(-g*a,-v*a)}const y=n?i*a:this.canvas.width,h=n?i*a:this.canvas.height;(this.staticMapCacheDirty||this.staticMapCacheCanvas.width!==y||this.staticMapCacheCanvas.height!==h||this.jellyPortalFreezeTimer>0)&&this.updateStaticMapCache(e),t.drawImage(this.staticMapCacheCanvas,0,0);for(const d of this.hunters){if(d.state==="SLEEP")continue;const _=d.visualZ!==null?d.visualZ:d.z,g=d.visualX!==null?d.visualX:d.x,v=d.visualY!==null?d.visualY:d.y;if(_===null||g===null||v===null)continue;const E=Math.abs(_-e),x=Math.max(0,1-E);if(x<=0)continue;const S=d.x!==null?d.x:g,N=d.y!==null?d.y:v,M=S-g,A=N-v,G=Math.sqrt(M*M+A*A),z=Math.max(0,Math.min(1,1-G)),q=[];if(d.lastPos&&(d.lastPos.x!==S||d.lastPos.y!==N)&&d.lastPos.z===e){const R=.95-z*.47,B=.4-z*.2;q.push({pos:d.lastPos,sizeFactor:R,opacityFactor:B,age:1})}if(d.history&&d.history.length===2){const R=d.history[0];if(R.z===e){const B=.48*(1-z),$=.2*(1-z);B>.01&&q.push({pos:R,sizeFactor:B,opacityFactor:$,age:2})}}if(q.forEach(R=>{if(d.lowCanvas){const B=R.pos.x*a+a/2,$=R.pos.y*a+a/2,V=a*R.sizeFactor*x,H=d.jellyTime-R.age*.2,J=Math.sin(H)*6,k=Math.cos(H*.7)*4,Y=1+Math.sin(H*1.2)*.06,Z=1+Math.cos(H*.8)*.06,F=J*Math.PI/180,Q=k*Math.PI/180;t.save(),t.globalAlpha=R.opacityFactor,t.translate(B,$),t.transform(Y,Math.tan(Q),Math.tan(F),Z,0,0),t.imageSmoothingEnabled=!1,t.drawImage(d.lowCanvas,-V/2,-V/2,V,V),t.restore()}}),d.lowCanvas){const R=g*a+a/2,B=v*a+a/2,$=a*.95*x,V=d.jellyTime,H=Math.sin(V)*6,J=Math.cos(V*.7)*4,k=1+Math.sin(V*1.2)*.06,Y=1+Math.cos(V*.8)*.06,Z=H*Math.PI/180,F=J*Math.PI/180;t.save();let Q=.35,st=$;if(d.state==="DYING"){const L=Math.min(1,this.jellyPortalResetElapsed/this.jellyPortalResetDuration);st=$*(1-L),Q=.35*(1-L)}const yt=-a*.12*x,Ct=-a*.12*x;t.translate(R+yt,B+Ct),t.transform(k,Math.tan(F),Math.tan(Z),Y,0,0),t.filter=`brightness(0) blur(1px) opacity(${Q})`,t.imageSmoothingEnabled=!1,t.drawImage(d.lowCanvas,-st/2,-st/2,st,st),t.restore(),t.save();let Rt=1;if(d.state==="DYING"){const L=Math.min(1,this.jellyPortalResetElapsed/this.jellyPortalResetDuration);st=$*(1-L),Rt=1-L;const D=(Math.random()-.5)*a*.15,W=(Math.random()-.5)*a*.15;t.translate(D,W)}t.globalAlpha=Rt,t.translate(R,B),t.transform(k,Math.tan(F),Math.tan(Z),Y,0,0),t.imageSmoothingEnabled=!1,t.drawImage(d.lowCanvas,-st/2,-st/2,st,st),t.restore()}}if(!this.deathAnimation||!this.deathAnimation.screenFilled){const d=`${this.playerVertical}_${this.playerSide}`,_=this.mageImages[d],g=r*a,v=o*a;let E=1;this.deathAnimation&&this.deathAnimation.active&&(Math.floor(Date.now()/120)%2===0||(E=.2));const x=X.PLAYER_SHADOW_OFFSET_X!==void 0?X.PLAYER_SHADOW_OFFSET_X:-.28,S=X.PLAYER_SHADOW_OFFSET_Y!==void 0?X.PLAYER_SHADOW_OFFSET_Y:-.28,N=g+a*x,M=v+a*S;t.save(),t.beginPath();const A=X.PLAYER_SHADOW_WIDTH_FACTOR!==void 0?X.PLAYER_SHADOW_WIDTH_FACTOR:.45,G=X.PLAYER_SHADOW_HEIGHT_FACTOR!==void 0?X.PLAYER_SHADOW_HEIGHT_FACTOR:.3,z=a*A,q=a*G;t.ellipse(N,M,z,q,0,0,Math.PI*2),t.fillStyle="rgba(0, 0, 0, 0.4)",t.fill(),t.restore();const R=(k,Y,Z,F,Q)=>{const st=a*1.2,yt=st*Z;if(yt<=0)return;const Ct=this.auraTime||0,Rt=a*.45;t.save(),t.globalAlpha=F*.7;const L="rgba(0, 220, 255, 0.4)",D="rgba(0, 255, 255, 0.8)",W=t.createLinearGradient(k,Y,k,Y-yt);if(W.addColorStop(0,`rgba(0, 220, 255, ${F*.35})`),W.addColorStop(.3,`rgba(0, 200, 255, ${F*.25})`),W.addColorStop(1,"rgba(0, 150, 255, 0.0)"),Q==="BACK"){t.beginPath(),t.arc(k,Y,Rt,Math.PI,0,!1),t.strokeStyle=L,t.lineWidth=1.5,t.stroke(),t.fillStyle=W,t.beginPath(),t.rect(k-Rt,Y-yt,Rt*2,yt),t.fill();for(let K=0;K<3;K++){const it=(Ct*.8+K/3)%1*Z,nt=Y-st*it;if(nt>Y-yt){const gt=(1-it)*F*.5;t.beginPath(),t.arc(k,nt,Rt,Math.PI,0,!1),t.strokeStyle=`rgba(0, 255, 255, ${gt})`,t.lineWidth=1,t.stroke()}}const C=(1-Z*.3)*F*.8;t.beginPath(),t.arc(k,Y-yt,Rt,Math.PI,0,!1),t.strokeStyle=`rgba(0, 255, 255, ${C})`,t.stroke()}else{t.beginPath(),t.arc(k,Y,Rt,0,Math.PI,!1),t.strokeStyle=D,t.lineWidth=2,t.stroke();const C=t.createLinearGradient(k,Y,k,Y-yt);C.addColorStop(0,`rgba(0, 255, 255, ${F*.2})`),C.addColorStop(1,"rgba(0, 255, 255, 0.0)"),t.fillStyle=C,t.beginPath(),t.rect(k-Rt,Y-yt,Rt*2,yt),t.fill();const K=t.createLinearGradient(k,Y,k,Y-yt);K.addColorStop(0,`rgba(0, 255, 255, ${F*.7})`),K.addColorStop(1,"rgba(0, 255, 255, 0.0)"),t.strokeStyle=K,t.lineWidth=1.5,t.beginPath(),t.moveTo(k-Rt,Y),t.lineTo(k-Rt,Y-yt),t.moveTo(k+Rt,Y),t.lineTo(k+Rt,Y-yt),t.stroke();for(let nt=0;nt<3;nt++){const gt=(Ct*.8+nt/3)%1*Z,vt=Y-st*gt;if(vt>Y-yt){const mt=(1-gt)*F*.7;t.beginPath(),t.arc(k,vt,Rt,0,Math.PI,!1),t.strokeStyle=`rgba(0, 255, 255, ${mt})`,t.lineWidth=1.5,t.stroke()}}const it=(1-Z*.3)*F*.8;t.beginPath(),t.arc(k,Y-yt,Rt,0,Math.PI,!1),t.strokeStyle=`rgba(0, 255, 255, ${it})`,t.stroke()}t.restore()},B=this.getAuraHeightAt(f,p,e);B>0&&R(g,v,B,E*u,"BACK");const $=Math.max(0,Math.floor((N-z)/a)),V=Math.min(i-1,Math.floor((N+z)/a)),H=Math.max(0,Math.floor((M-q)/a)),J=Math.min(i-1,Math.floor((M+q)/a));for(let k=$;k<=V;k++)for(let Y=H;Y<=J;Y++)this.isWallVisible(k,Y,e)&&(t.save(),this.wallImage.complete&&this.wallImage.naturalWidth!==0?t.drawImage(this.wallImage,k*a,Y*a,a,a):(t.fillStyle=X.COLORS.WALL,t.fillRect(k*a,Y*a,a,a)),t.restore());if(_&&_.complete){t.save(),t.globalAlpha=E*u;const k=a*.9,Y=k,Z=k*(_.height/_.width);t.translate(g,v),t.scale((this.playerSquashX||1)*l,(this.playerSquashY||1)*c);const F=-Z*.85;t.drawImage(_,-Y/2,F,Y,Z),t.restore()}else t.save(),t.globalAlpha=E*u,t.translate(g,v),t.scale(l,c),t.strokeStyle=X.COLORS.PLAYER_OUTLINE,t.lineWidth=1,t.strokeRect(-a/2+2,-a/2+2,a-4,a-4),t.fillStyle=X.COLORS.PLAYER,t.beginPath(),t.arc(0,0,a*.4,0,Math.PI*2),t.fill(),t.strokeStyle=X.COLORS.PLAYER,t.lineWidth=2,t.beginPath(),t.moveTo(0,0),t.lineTo(Math.cos(this.player.dir)*a*1,Math.sin(this.player.dir)*a*1),t.stroke(),t.restore();if(B>0&&R(g,v,B,E*u,"FRONT"),this.jellyProjectiles.forEach(k=>{if(k.z===e){const Y=k.x*a,Z=k.y*a;t.save();const F=a*.28,Q=t.createRadialGradient(Y,Z,2,Y,Z,F);Q.addColorStop(0,"#ffffff"),Q.addColorStop(.3,"#ff3333"),Q.addColorStop(1,"rgba(255, 51, 51, 0)"),t.beginPath(),t.arc(Y,Z,F,0,Math.PI*2),t.fillStyle=Q,t.fill(),t.beginPath(),t.arc(Y,Z,a*.1,0,Math.PI*2),t.fillStyle="#ffffff",t.fill(),t.restore()}}),X.SHOW_COLLISION_DEBUG){t.save(),t.strokeStyle="#ff0000",t.lineWidth=1.5;const k=X.PLAYER_COLLISION_RADIUS*2*a,Y=(X.PLAYER_COLLISION_OFFSET_X||0)*a,Z=(X.PLAYER_COLLISION_OFFSET_Y||0)*a;t.strokeRect(g+Y-k/2,v+Z-k/2,k,k),t.restore()}if(this.deathAnimation&&this.deathAnimation.active){const k=Math.min(1,this.deathAnimation.delayElapsed/this.deathAnimation.delayDuration),Y=-(_&&_.complete?a*.9*(_.height/_.width)*.85:a*.5),Z=a*.7,F=(1-k)*Y-4*Z*k*(1-k);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){t.save();const Q=this.keyImage,st=Q.naturalWidth/Q.naturalHeight,yt=a*.55;let Ct=yt,Rt=yt;st>1?Rt=yt/st:Ct=yt*st,t.drawImage(Q,g-Ct/2,v+F-Rt/2,Ct,Rt),t.restore()}else t.save(),t.beginPath(),t.arc(g,v+F,a*.15,0,2*Math.PI),t.fillStyle="#ffd700",t.fill(),t.restore()}}if(this.activeNotification){const d=this.activeNotification;t.save(),t.font=`bold ${a*.22}px monospace`;const _=t.measureText(d.text).width,g=a*.4,v=_+g,E=a*.48,x=r*a,S=o*a-a*1.5;let N=v;d.state==="OPENING"?N=v*d.widthProgress:d.state==="CLOSING"&&(N=v*d.closeProgress);const M=this.mazeGen.size*a,A=this.mazeGen.size*a;let G=x;G-N/2<0?G=N/2:G+N/2>M&&(G=M-N/2);let z=S;z-E/2<0?z=E/2:z+E/2>A&&(z=A-E/2),t.fillStyle="#000000",t.fillRect(G-N/2,z-E/2,N,E),t.strokeStyle="#00ffff",t.lineWidth=Math.max(1.5,a*.04),t.strokeRect(G-N/2,z-E/2,N,E),(d.state==="TYPING"||d.state==="WAITING")&&(t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.fillText(d.displayText,G,z)),t.restore()}if(m&&t.restore(),this.isZoomTransitionActive){const g=1-Math.min(1,(2-this.zoomTransitionTimer)/2);t.save(),t.fillStyle=`rgba(0, 0, 0, ${g})`,t.fillRect(0,0,t.canvas.width,t.canvas.height),t.restore()}if(this.deathAnimation&&this.deathAnimation.active){const d=this.deathAnimation.hunter;let _=d?d.visualX+.5:this.deathAnimation.playerPos.x,g=d?d.visualY+.5:this.deathAnimation.playerPos.y;this.deathAnimation.reversing&&(_=this.player.x,g=this.player.y);let v,E;if(n){const x=11/this.zoomVisibleCells,S=this.zoomVisibleCells/2;let N=r,M=o;N<S&&(N=S),N>i-S&&(N=i-S),M<S&&(M=S),M>i-S&&(M=i-S);const A=t.canvas.width/2,G=t.canvas.height/2;v=A+(_-N)*a*x,E=G+(g-M)*a*x}else v=_*a,E=g*a;if(!this.deathAnimation.screenFilled||this.deathAnimation.reversing){const x=Math.hypot(t.canvas.width,t.canvas.height)*1.1,S=this.deathAnimation.elapsed/this.deathAnimation.duration,M=S*S*(3-2*S)*x;t.save(),t.beginPath(),t.arc(v,E,M,0,Math.PI*2),t.clip(),t.fillStyle="rgba(15, 0, 25, 0.96)",t.fillRect(0,0,t.canvas.width,t.canvas.height);const A=45,G=n?11/this.zoomVisibleCells:1;for(let z=0;z<A;z++){const q=Math.random()*Math.PI*2,R=Math.pow(Math.random(),.7)*M,B=v+Math.cos(q)*R,$=E+Math.sin(q)*R,V=(15+Math.random()*70)*G,H=(3+Math.random()*12)*G,J=80+Math.floor(Math.random()*50),k=Math.floor(Math.random()*25),Y=130+Math.floor(Math.random()*70);t.fillStyle=Math.random()<.12?"#00ff66":Math.random()<.12?"#00ccff":Math.random()<.08?"#ffffff":`rgb(${J},${k},${Y})`,t.fillRect(B-V/2,$-H/2,V,H)}if(Math.random()<.3){t.fillStyle=Math.random()<.7?"#ffffff":"#b3ffff";const z=v+(Math.random()-.5)*M*.8,q=E+(Math.random()-.5)*M*.8,R=(2+Math.random()*5)*G,B=(10+Math.random()*30)*G;t.fillRect(z-R/2,q-B/2,R,B)}t.restore()}else{t.fillStyle="rgba(10, 0, 15, 1.0)",t.fillRect(0,0,t.canvas.width,t.canvas.height),t.fillStyle="rgba(138, 3, 196, 0.08)";for(let N=0;N<t.canvas.height;N+=6)Math.random()<.6&&t.fillRect(0,N+Math.sin(Date.now()*.01+N)*2,t.canvas.width,2);const x=Math.floor(Math.random()*5)+3,S=["#00ff66","#ff0055","#00ccff","#ffff00","#8a03c4","#ffffff"];for(let N=0;N<x;N++){const M=Math.random()*t.canvas.width,A=Math.random()*t.canvas.height,G=80+Math.random()*250,z=8+Math.random()*30;t.fillStyle=S[Math.floor(Math.random()*S.length)],t.globalAlpha=.12+Math.random()*.18,t.fillRect(M,A,G,z)}if(t.globalAlpha=1,Math.random()<.35){const N=Math.floor(Math.random()*t.canvas.height),M=15+Math.floor(Math.random()*80),A=Math.floor(Math.random()*40)-20;t.drawImage(t.canvas,0,N,t.canvas.width,M,A,N,t.canvas.width,M)}Math.random()<.15&&(t.fillStyle="rgba(255, 255, 255, 0.05)",t.fillRect(0,Math.random()*t.canvas.height,t.canvas.width,5+Math.random()*20))}}}updateStaticMapCache(t){const e=this.mazeGen.size,i=e>11,n=i?this.canvas.width/11:this.canvas.width/e,a=i?e*n:this.canvas.width,r=i?e*n:this.canvas.height;(this.staticMapCacheCanvas.width!==a||this.staticMapCacheCanvas.height!==r)&&(this.staticMapCacheCanvas.width=a,this.staticMapCacheCanvas.height=r);const o=this.staticMapCacheCtx;o.clearRect(0,0,a,r);const l=this.player.x,c=this.player.y,u=Math.floor(this.mazeGen.startPos.x),f=Math.floor(this.mazeGen.startPos.y),p=this.mazeGen.startPos.z,m=Date.now();let T=!1;const y=(h,d,_)=>{const g=`${h},${d},${t}`;if(this.skipCellAnimations||this.fullyRevealedCells.has(g))_(),this.skipCellAnimations&&this.fullyRevealedCells.add(g);else{let v=this.revealedCellsAnimation.get(g);v===void 0&&(this.revealedCellsAnimation.set(g,m),v=m);const E=m-v,S=Math.min(1,E/400);S<1?(o.save(),o.globalAlpha=S,_(),o.restore(),T=!0):(_(),this.revealedCellsAnimation.delete(g),this.fullyRevealedCells.add(g))}};for(let h=0;h<e;h++)for(let d=0;d<e;d++){const _=this.maze.get(h,d,t);if(this.jellyPortalFreezeTimer>0&&this.jellyPortalResetCells.has(`${h},${d}`)){const q=1.5-this.jellyPortalFreezeTimer,R=.6;let B=0;q>R&&(B=Math.min(1,(q-R)/.9)),o.save();const $=Math.round(100*(1-B));o.filter=`invert(${$}%)`;const V=h===Math.floor(l)&&d===Math.floor(c),H=_===this.mazeGen.TYPES.STATUE;if(!V&&!H&&(o.globalAlpha=1-B),_===this.mazeGen.TYPES.WALL)this.wallImage.complete&&this.wallImage.naturalWidth!==0?o.drawImage(this.wallImage,h*n,d*n,n,n):(o.fillStyle=X.COLORS.WALL,o.fillRect(h*n,d*n,n,n));else if(H)if(this.floorImage.complete&&this.floorImage.naturalWidth!==0?o.drawImage(this.floorImage,h*n,d*n,n,n):(o.fillStyle=X.COLORS.PATH_VISITED,o.fillRect(h*n,d*n,n,n)),o.fillStyle="rgba(0, 0, 0, 0.4)",o.beginPath(),o.ellipse(h*n+n/2,(d+1)*n-n*.15,n*.35,n*.12,0,0,Math.PI*2),o.fill(),this.statueImage.complete&&this.statueImage.naturalWidth!==0){const k=this.statueImage.width/this.statueImage.height,Y=n*.85,Z=Y/k,F=(d+1)*n-n*.05;o.drawImage(this.statueImage,h*n+n/2-Y/2,F-Z,Y,Z)}else o.fillStyle="#555555",o.fillRect(h*n+n*.3,d*n+n*.1,n*.4,n*.8);else if(this.floorImage.complete&&this.floorImage.naturalWidth!==0?o.drawImage(this.floorImage,h*n,d*n,n,n):(o.fillStyle=X.COLORS.PATH_VISITED,o.fillRect(h*n,d*n,n,n)),V)this.drawVortex2D(o,h,d,n,X.COLORS.JELLY_PORTAL,!1,`${h},${d},${t}`);else if(_===this.mazeGen.TYPES.TELEPORT)this.drawVortex2D(o,h,d,n,X.COLORS.TELEPORT_INACTIVE,!1,`${h},${d},${t}`);else if(_===this.mazeGen.TYPES.EXIT)this.drawVortex2D(o,h,d,n,X.COLORS.EXIT,!1,`${h},${d},${t}`);else if(_===this.mazeGen.TYPES.KEY){const k=n*.05*Math.sin(Date.now()/300);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){const Y=this.keyImage,Z=Y.naturalWidth/Y.naturalHeight,F=n*.7;let Q=F,st=F;Z>1?st=F/Z:Q=F*Z,o.drawImage(Y,h*n+(n-Q)/2,d*n+(n-st)/2+k,Q,st)}}else if(_===this.mazeGen.TYPES.MANA){const k=n*.05*Math.sin(Date.now()/250);if(this.manaImage.complete&&this.manaImage.naturalWidth!==0){const Y=this.manaImage,Z=Y.naturalWidth/Y.naturalHeight,F=n*.7;let Q=F,st=F;Z>1?st=F/Z:Q=F*Z,o.drawImage(Y,h*n+(n-Q)/2,d*n+(n-st)/2+k,Q,st)}}o.restore(),T=!0;continue}if(_===this.mazeGen.TYPES.STATUE){y(h,d,()=>{if(this.floorImage.complete&&this.floorImage.naturalWidth!==0?o.drawImage(this.floorImage,h*n,d*n,n,n):(o.fillStyle=X.COLORS.PATH_VISITED,o.fillRect(h*n,d*n,n,n)),o.fillStyle="rgba(0, 0, 0, 0.4)",o.beginPath(),o.ellipse(h*n+n/2,(d+1)*n-n*.15,n*.35,n*.12,0,0,Math.PI*2),o.fill(),this.statueImage.complete&&this.statueImage.naturalWidth!==0){const q=this.statueImage.width/this.statueImage.height,R=n*.85,B=R/q,$=h*n+n/2,V=(d+1)*n-n*.05;o.save();const H=this.jellyStatueStates.get(`${h},${d},${t}`);if(H&&H.state==="CHARGING"){const J=(Math.random()-.5)*n*.06,k=(Math.random()-.5)*n*.06;o.translate(J,k);const Y=Math.floor(performance.now()/80)%2===0;o.filter=Y?"sepia(1) saturate(10) hue-rotate(320deg) brightness(1.2)":"sepia(1) saturate(10) hue-rotate(350deg) brightness(1.5)"}o.drawImage(this.statueImage,$-R/2,V-B,R,B),o.restore()}else o.fillStyle="#555555",o.fillRect(h*n+n*.3,d*n+n*.1,n*.4,n*.8)});continue}const g=this.allTeleports.some(q=>q.x===h&&q.y===d&&q.z===t),v=g&&this.discoveredTeleports.has(`${h},${d},${t}`),E=_===2||_===3||_===4||_===5||v,x=_===this.mazeGen.TYPES.KEY,S=_===this.mazeGen.TYPES.MANA,N=(_===1||g&&!v)&&this.isNearVisited(h,d,t),M=this.revealedPathSet.has(`${h},${d},${t}`),A=t<e-1&&this.maze.get(h,d,t+1)!==0,G=t>0&&this.maze.get(h,d,t-1)!==0,z=A||G;M?y(h,d,()=>{z?this.drawElevator2D(o,h,d,n,A,G,l,c,!0,t):(o.fillStyle=X.COLORS.REVEALED_PATH,o.fillRect(h*n,d*n,n,n))}):E?y(h,d,()=>{if(v){const q=h===u&&d===f&&t===p,R=`${h},${d},${t}`,B=this.teleportCooldownTicks>0;if(q){const $=Math.floor(l)===h&&Math.floor(c)===d&&t===this.player.z,V=B?X.COLORS.TELEPORT_INACTIVE:$?X.COLORS.TELEPORT:X.COLORS.START;this.drawVortex2D(o,h,d,n,V,$&&!B,R)}else{const $=_===this.mazeGen.TYPES.JELLY_PORTAL,V=B?X.COLORS.TELEPORT_INACTIVE:$?X.COLORS.JELLY_PORTAL:X.COLORS.TELEPORT,H=Math.floor(l)===h&&Math.floor(c)===d&&t===this.player.z;this.drawVortex2D(o,h,d,n,V,H&&!B,R)}T=!0}else if(z)this.drawElevator2D(o,h,d,n,A,G,l,c,!1,t);else if(_===2&&this.floorImage.complete&&this.floorImage.naturalWidth!==0)o.drawImage(this.floorImage,h*n,d*n,n,n);else if(_===this.mazeGen.TYPES.EXIT){const q=`${h},${d},${t}`;if(this.drawVortex2D(o,h,d,n,X.COLORS.EXIT,!1,q),T=!0,this.keysCollected<this.totalKeys){const R=h*n+n/2,B=d*n+n/2,$=n*.45,V=n*.38,H=$*.75,J=R-$/2,k=B-V/4,Y=Math.max(3,n*.06);o.beginPath(),o.arc(R,k,H/2,Math.PI,0),o.strokeStyle="#ff3300",o.lineWidth=Math.max(2.5,n*.07),o.lineCap="round",o.stroke();const Z=o.createLinearGradient(J,k,J,k+V);Z.addColorStop(0,"#2e0808"),Z.addColorStop(1,"#140303"),o.fillStyle=Z,o.beginPath(),o.roundRect?o.roundRect(J,k,$,V,Y):o.rect&&o.rect(J,k,$,V),o.fill(),o.strokeStyle="#ff3300",o.lineWidth=Math.max(1.5,n*.04),o.stroke();const F=String(this.totalKeys-this.keysCollected),Q=F.length>1?Math.max(8,n*.22):Math.max(10,n*.28);o.save(),o.fillStyle="#ff8888",o.font=`bold ${Q}px "Outfit", "Inter", sans-serif`,o.textAlign="center",o.textBaseline="middle",o.shadowColor="#ff3300",o.shadowBlur=Math.max(2,n*.08),o.fillText(F,R,B+V/4),o.restore()}}else if(_===2)o.fillStyle=X.COLORS.PATH_VISITED,o.fillRect(h*n,d*n,n,n);else{const q=`${h},${d},${t}`,R=Math.floor(l)===h&&Math.floor(c)===d&&t===this.player.z,B=R?X.COLORS.TELEPORT:X.COLORS.START;this.drawVortex2D(o,h,d,n,B,R,q),T=!0}this.drawCellShadow2D(o,h,d,n,e,_,t)}):x?(y(h,d,()=>{if(this.visitedCells.has(`${h},${d},${t}`))if(v){const B=h===u&&d===f&&t===p,$=`${h},${d},${t}`,V=this.teleportCooldownTicks>0;if(B){const H=Math.floor(l)===h&&Math.floor(c)===d&&t===this.player.z,J=V?X.COLORS.TELEPORT_INACTIVE:H?X.COLORS.TELEPORT:X.COLORS.START;this.drawVortex2D(o,h,d,n,J,H&&!V,$)}else{const H=V?X.COLORS.TELEPORT_INACTIVE:X.COLORS.TELEPORT,J=Math.floor(l)===h&&Math.floor(c)===d&&t===this.player.z;this.drawVortex2D(o,h,d,n,H,J&&!V,$)}T=!0}else z?this.drawElevator2D(o,h,d,n,A,G,l,c,!1,t):this.floorImage.complete&&this.floorImage.naturalWidth!==0?o.drawImage(this.floorImage,h*n,d*n,n,n):(o.fillStyle=X.COLORS.PATH_VISITED,o.fillRect(h*n,d*n,n,n));const R=n*.05*Math.sin(Date.now()/300);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){const B=this.keyImage,$=B.naturalWidth/B.naturalHeight,V=n*.7;let H=V,J=V;$>1?J=V/$:H=V*$;const k=h*n+(n-H)/2,Y=d*n+(n-J)/2+R;o.drawImage(B,k,Y,H,J)}else o.beginPath(),o.arc(h*n+n/2,d*n+n/2+R,n*.25,0,2*Math.PI),o.fillStyle="#ffd700",o.fill();this.drawCellShadow2D(o,h,d,n,e,_,t)}),T=!0):S?(y(h,d,()=>{this.visitedCells.has(`${h},${d},${t}`)&&(this.floorImage.complete&&this.floorImage.naturalWidth!==0?o.drawImage(this.floorImage,h*n,d*n,n,n):(o.fillStyle=X.COLORS.PATH_VISITED,o.fillRect(h*n,d*n,n,n)));const R=n*.05*Math.sin(Date.now()/250);if(this.manaImage.complete&&this.manaImage.naturalWidth!==0){const B=this.manaImage,$=B.naturalWidth/B.naturalHeight,V=n*.7;let H=V,J=V;$>1?J=V/$:H=V*$;const k=h*n+(n-H)/2,Y=d*n+(n-J)/2+R;o.save(),o.shadowColor="rgba(0, 255, 255, 0.85)",o.shadowBlur=n*.35,o.shadowOffsetX=0,o.shadowOffsetY=0,o.drawImage(B,k,Y,H,J),o.restore()}else o.beginPath(),o.arc(h*n+n/2,d*n+n/2+R,n*.2,0,2*Math.PI),o.fillStyle="#00ffff",o.fill();this.drawCellShadow2D(o,h,d,n,e,_,t)}),T=!0):N?(y(h,d,()=>{if(this.floorImage.complete&&this.floorImage.naturalWidth!==0){o.save(),o.globalAlpha=.35,o.drawImage(this.floorImage,h*n,d*n,n,n),o.restore();const q=.22+.12*Math.sin(Date.now()/250);o.fillStyle=`rgba(136, 204, 255, ${q})`,o.fillRect(h*n,d*n,n,n)}else o.fillStyle=X.COLORS.PATH_KNOWN,o.fillRect(h*n,d*n,n,n)}),T=!0):this.isWallVisible(h,d,t)&&y(h,d,()=>{this.wallImage.complete&&this.wallImage.naturalWidth!==0?o.drawImage(this.wallImage,h*n,d*n,n,n):(o.fillStyle=X.COLORS.WALL,o.fillRect(h*n,d*n,n,n))})}T?this.staticMapCacheDirty=!0:this.staticMapCacheDirty=!1}isAdjacentToNonWall(t,e,i){const n=this.mazeGen.size;for(let a=-1;a<=1;a++)for(let r=-1;r<=1;r++){if(a===0&&r===0)continue;const o=t+a,l=e+r;if(o>=0&&o<n&&l>=0&&l<n&&this.maze.get(o,l,i)!==this.mazeGen.TYPES.WALL)return!0}return!1}getAuraHeightAt(t,e,i){const n=this.maze.get(t,e,i),a=t===Math.floor(this.mazeGen.startPos.x)&&e===Math.floor(this.mazeGen.startPos.y)&&i===this.mazeGen.startPos.z;if(!((n===this.mazeGen.TYPES.TELEPORT||n===this.mazeGen.TYPES.START||a)&&n!==this.mazeGen.TYPES.JELLY_PORTAL))return 0;if(this.teleportAnim&&this.teleportAnim.active){const l=this.teleportAnim,c=Math.min(1,l.elapsed/l.duration);if(l.stage==="OUT"){if(t===Math.floor(l.startX)&&e===Math.floor(l.startY)&&i===l.startZ)return 1-c}else if(l.stage==="IN"&&t===Math.floor(l.targetX)&&e===Math.floor(l.targetY)&&i===l.targetZ)return c;return 0}return t===Math.floor(this.player.x)&&e===Math.floor(this.player.y)&&i===this.player.z&&this.auraHeight||0}isWallVisible(t,e,i){if(this.maze.get(t,e,i)!==0)return!1;const a=this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.revealed;return this.isNearVisited(t,e,i)||this.isAdjacentToStatue(t,e,i)||a&&this.isAdjacentToNonWall(t,e,i)}isNearVisited(t,e,i){for(let n=-1;n<=1;n++)for(let a=-1;a<=1;a++){const r=t+n,o=e+a;if(r>=0&&r<this.mazeGen.size&&o>=0&&o<this.mazeGen.size){const l=this.maze.get(r,o,i);if(l===2||l===3||l===this.mazeGen.TYPES.JELLY_PORTAL||l===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${r},${o},${i}`))return!0}}return!1}isAdjacentToStatue(t,e,i){const n=this.mazeGen.size,a=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:1},{dx:-1,dy:1},{dx:1,dy:-1},{dx:-1,dy:-1}];for(const r of a){const o=t+r.dx,l=e+r.dy;if(o>=0&&o<n&&l>=0&&l<n&&this.maze.get(o,l,i)===this.mazeGen.TYPES.STATUE)return!0}return!1}populateFullyRevealedCells(t){const e=this.mazeGen.size;for(let i=0;i<e;i++)for(let n=0;n<e;n++){const a=this.maze.get(i,n,t),r=a===this.mazeGen.TYPES.TELEPORT,o=r&&this.discoveredTeleports.has(`${i},${n},${t}`),l=a===2||a===3||a===4||a===5||o,c=(a===1||r&&!o)&&this.isNearVisited(i,n,t),u=this.revealedPathSet.has(`${i},${n},${t}`);(l||c||u||this.isWallVisible(i,n,t))&&this.fullyRevealedCells.add(`${i},${n},${t}`)}}updatePulse(){if(!this.isMap3DActive||this.pulsatingMaterials.length===0)return;const t=.2+.5*Math.abs(Math.sin(Date.now()*.003));this.pulsatingMaterials.forEach(e=>{e.emissiveIntensity=t})}loop(){if(this.isDestroyed)return;const t=performance.now(),e=(t-this.lastFrameTime)/1e3;this.lastFrameTime=t;const i=Math.min(e,.1);if(this.isIntroPlaying?this.controls.update():this.update(i),this.updateVortexAngles(i),this.isMap3DActive||this.isIntroPlaying)if(this.isIntroPlaying)this.renderer.render(this.scene,this.camera);else{const n=1-Math.exp(-10*i);this.visualActiveFloor+=(this.activeMapFloor-this.visualActiveFloor)*n,Math.abs(this.activeMapFloor-this.visualActiveFloor)<.001&&(this.visualActiveFloor=this.activeMapFloor),this.drawIsometricMap()}else this.draw2DMap(i);requestAnimationFrame(()=>this.loop())}updateVortexAngles(t){if(!this.vortexAngles)return;const e=Math.floor(this.player.x),i=Math.floor(this.player.y),n=this.player.z,a=Math.floor(this.mazeGen.startPos.x),r=Math.floor(this.mazeGen.startPos.y),o=this.mazeGen.startPos.z,l=`${a},${r},${o}`,u=e===a&&i===r&&n===o?X.VORTEX_SPEED_FAST:X.VORTEX_SPEED_NORMAL;this.vortexAngles.set(l,(this.vortexAngles.get(l)||0)+t*u),this.allTeleports&&this.allTeleports.forEach(p=>{const m=`${p.x},${p.y},${p.z}`,T=e===p.x&&i===p.y&&n===p.z,y=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===p.x&&this.inactiveTeleportPos.y===p.y&&this.inactiveTeleportPos.z===p.z,h=T&&!y?X.VORTEX_SPEED_FAST:X.VORTEX_SPEED_NORMAL;this.vortexAngles.set(m,(this.vortexAngles.get(m)||0)+t*h)});const f=this.getExitPos();if(f){const p=`${f.x},${f.y},${f.z}`,m=X.VORTEX_SPEED_NORMAL;this.vortexAngles.set(p,(this.vortexAngles.get(p)||0)+t*m)}}getHexColorVariation(t,e){let i=t.replace("#","");i.length===3&&(i=i.split("").map(l=>l+l).join(""));let n=parseInt(i,16),a=(n>>16)+e,r=(n>>8&255)+e,o=(n&255)+e;return a=Math.max(0,Math.min(255,a)),r=Math.max(0,Math.min(255,r)),o=Math.max(0,Math.min(255,o)),`#${((1<<24)+(a<<16)+(r<<8)+o).toString(16).slice(1)}`}drawVortex2D(t,e,i,n,a,r,o){this.isJellyChallengeActive&&(a="#555555");const l=e*n+n/2,c=i*n+n/2;t.save(),t.translate(l,c),t.fillStyle=a,t.fillRect(-n/2,-n/2,n,n);const u=this.vortexAngles.get(o)||0;t.rotate(u);const f=this.getHexColorVariation(a,45),p=this.getHexColorVariation(a,-45),m=t.createRadialGradient(0,0,0,0,0,n*.45);m.addColorStop(0,f),m.addColorStop(.4,a),m.addColorStop(1,p);const T=t.createRadialGradient(0,0,0,0,0,n*.45);T.addColorStop(0,"#ffffff"),T.addColorStop(.3,f),T.addColorStop(1,"rgba(255, 255, 255, 0)");const y=3,h=n*.45;for(let d=0;d<y;d++){const _=d*2*Math.PI/y;t.beginPath(),t.strokeStyle=m,t.lineWidth=n*.09,t.lineCap="round";for(let g=0;g<=h;g+=1){const v=5/h,E=_+g*v,x=g*Math.cos(E),S=g*Math.sin(E);g===0?t.moveTo(x,S):t.lineTo(x,S)}t.stroke(),t.beginPath(),t.strokeStyle=T,t.lineWidth=n*.04,t.lineCap="round";for(let g=n*.12;g<=h;g+=1){const v=5/h,E=_+g*v+.15,x=g*Math.cos(E),S=g*Math.sin(E);g===Math.floor(n*.12)?t.moveTo(x,S):t.lineTo(x,S)}t.stroke()}t.restore()}playContinueAnimation(){this.isIntroPlaying=!0;const t=this.mazeGen.size;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="block");const e=document.getElementById("map3d-instructions");e&&(e.style.display="block"),this.isometricCanvas&&(this.isometricCanvas.style.display="none"),this.ui.setMap3DVisible(!0),this.isMap3DActive=!0,this.updateRendererSize(),this.build3DMap(!1),this.camera.position.set(t*.9,t*this.vScale*.6,t*.9),this.controls.target.set(0,0,0),this.controls.update(),this.hideCanvasInstant(),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=2,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableRotate=!1;const i=()=>{this.activeContinueTimer&&(clearTimeout(this.activeContinueTimer),this.activeContinueTimer=null),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this.controls.autoRotate=!1,this.animateCameraToPlayer(()=>{this._transitionToGame()})};this.activeSkipHandler=()=>i(),window.addEventListener("keydown",this.activeSkipHandler,{once:!0}),window.addEventListener("touchstart",this.activeSkipHandler,{once:!0}),this.activeContinueTimer=setTimeout(i,2500)}animateCameraToPlayer(t){const e=this.mazeGen.size,i=this.player.x-e/2,n=(this.player.z-e/2)*this.vScale,a=this.player.y-e/2,r=this.controls.target.clone(),o=new tt(i,n,a),l=this.camera.position.clone(),c=new tt(i+4,n+5,a+4),u=1100,f=performance.now(),p=m=>{if(this.isDestroyed)return;const T=m-f,y=Math.min(T/u,1),h=y<.5?4*y*y*y:1-Math.pow(-2*y+2,3)/2;this.controls.target.lerpVectors(r,o,h),this.camera.position.lerpVectors(l,c,h),this.controls.update(),y<1?requestAnimationFrame(p):t&&t()};requestAnimationFrame(p)}playIntroAnimation(){this.isIntroPlaying=!0;const t=this.mazeGen.size;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="block");const e=document.getElementById("map3d-instructions");for(e&&(e.style.display="block"),this.isometricCanvas&&(this.isometricCanvas.style.display="none");this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(new yr(16777215,.7));const i=new vr(16777215,.5);i.position.set(10,20,10),this.scene.add(i),this.ui.setMap3DVisible(!0),this.isMap3DActive=!0,this.updateRendererSize(),this.camera.position.set(t*.9,t*this.vScale*.6,t*.9),this.controls.target.set(0,0,0),this.controls.update(),this.hideCanvasInstant();const n=this.mazeGen.startPos,a=this.getExitPos(),r=new xe(.92,.92,.92),o=new ee({color:X.COLORS.THREE_START,emissive:X.COLORS.THREE_START,emissiveIntensity:.6,transparent:!0,opacity:.95}),l=new Qt(r,o);l.position.set(Math.floor(n.x)-t/2,(n.z-t/2)*this.vScale,Math.floor(n.y)-t/2),this.scene.add(l);const c=new ee({color:16724736,emissive:16724736,emissiveIntensity:.6,transparent:!0,opacity:.95}),u=new Qt(r,c);u.position.set(a.x-t/2,(a.z-t/2)*this.vScale,a.y-t/2);const f=new xe(.95,.95,.95),p=new Pn({color:16711680,wireframe:!0}),m=new Qt(f,p);u.add(m),this.scene.add(u);const T=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],y=`${Math.floor(n.x)},${Math.floor(n.y)},${n.z}`,h=`${a.x},${a.y},${a.z}`,d=new Set([y,h]),_=[{x:Math.floor(n.x),y:Math.floor(n.y),z:n.z}],g=[{x:a.x,y:a.y,z:a.z}];let v=0,E=0;const x=[];for(;v<_.length||E<g.length;){if(v<_.length){const{x:V,y:H,z:J}=_[v++];for(const[k,Y,Z]of T){const F=V+k,Q=H+Y,st=J+Z,yt=`${F},${Q},${st}`;F>=0&&F<t&&Q>=0&&Q<t&&st>=0&&st<t&&!d.has(yt)&&this.maze.get(F,Q,st)!==this.mazeGen.TYPES.WALL&&(d.add(yt),_.push({x:F,y:Q,z:st}),x.push({x:F,y:Q,z:st}))}}if(E<g.length){const{x:V,y:H,z:J}=g[E++];for(const[k,Y,Z]of T){const F=V+k,Q=H+Y,st=J+Z,yt=`${F},${Q},${st}`;F>=0&&F<t&&Q>=0&&Q<t&&st>=0&&st<t&&!d.has(yt)&&this.maze.get(F,Q,st)!==this.mazeGen.TYPES.WALL&&(d.add(yt),g.push({x:F,y:Q,z:st}),x.push({x:F,y:Q,z:st}))}}}this.controls.autoRotate=!0,this.controls.autoRotateSpeed=1.8,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableRotate=!1;const S=new xe(.88,.88,.88),N=new ee({color:X.COLORS.THREE_VISITED,transparent:!0,opacity:.72}),M=20,A=200,G=x.length,z=Math.max(1,Math.ceil(G/A));let q=0;this.activeIntroTimer=null;const R=[],B=()=>{this.activeIntroTimer&&(clearTimeout(this.activeIntroTimer),this.activeIntroTimer=null),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this._playGlitchAndTransition(R)};this.activeSkipHandler=()=>B(),window.addEventListener("keydown",this.activeSkipHandler,{once:!0}),window.addEventListener("touchstart",this.activeSkipHandler,{once:!0});const $=()=>{if(this.isDestroyed)return;const V=Math.min(q+z,x.length);for(;q<V;q++){const{x:H,y:J,z:k}=x[q],Y=k%2===0;let Z;Y?Z=new Cn(.35,.35,2*this.vScale,8):Z=S;const F=new Qt(Z,N);F.position.set(H-t/2,(k-t/2)*this.vScale,J-t/2),this.scene.add(F),R.push(F)}q<x.length?this.activeIntroTimer=setTimeout($,M):(this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this._playGlitchAndTransition(R))};this.activeIntroTimer=setTimeout($,M)}_playGlitchAndTransition(t){if(this.isDestroyed)return;const e=5,i=90;let n=0;const a=()=>{if(this.isDestroyed)return;const r=n%2===0;t.forEach(o=>{o&&(o.visible=r)}),n++,n<e*2?setTimeout(a,i):(t.forEach(o=>{o&&(o.visible=!1)}),setTimeout(()=>this._transitionToGame(),400))};a()}_transitionToGame(){this.isDestroyed||(this.controls&&(this.controls.autoRotate=!1,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls.enableRotate=!0),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.classList.add("intro-fade-out"),setTimeout(()=>{if(this.isDestroyed)return;this.ui.setMap3DVisible(!1),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.classList.remove("intro-fade-out"),this.isMap3DActive=!1,this.isIntroPlaying=!1,this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1);const t=document.getElementById("map-area-container"),e=document.getElementById("left-hud-panel"),i=document.getElementById("right-hud-panel"),n=document.getElementById("bottom-hud-container");t&&(t.classList.remove("intro-hidden"),t.classList.add("intro-reveal"),setTimeout(()=>t.classList.remove("intro-reveal"),700)),e&&(e.classList.remove("intro-hidden"),e.classList.add("intro-reveal"),setTimeout(()=>e.classList.remove("intro-reveal"),700)),i&&(i.classList.remove("intro-hidden"),i.classList.add("intro-reveal"),setTimeout(()=>i.classList.remove("intro-reveal"),700)),n&&(n.classList.remove("intro-hidden"),n.classList.add("intro-reveal"),setTimeout(()=>n.classList.remove("intro-reveal"),700)),this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2,this.isResumedFromSave||this.ui.showInfoBanner(Ot("msgWhereAmI"))},600))}startStorytelling(){this.isStoryActive=!0,this.storyMsgIndex=0,this.storyState="OPENING",this.storyWidthProgress=0,this.storyCloseProgress=1,this.storyCharIndex=0,this.storyTypeTimer=0;const t=document.getElementById("story-screen");t&&t.classList.remove("hidden");const e=document.getElementById("story-image-loader"),i=document.getElementById("story-dialogue");this.isPreloadingActive=!1;const n=()=>{this.isPreloadingActive=!1,i&&(i.style.transform="scaleX(0)"),this.updateStoryImage(),this.handleStoryKeyDown=r=>{r.key.toLowerCase()==="escape"?this.skipStory():this.isPreloadingActive||this.triggerAdvanceStory(),r.preventDefault()},window.addEventListener("keydown",this.handleStoryKeyDown),this.handleStoryClick=r=>{const o=r.target;o&&o.closest("#story-skip-btn")||this.isPreloadingActive||this.triggerAdvanceStory()},this.handleStoryTouch=r=>{const o=r.target;o&&o.closest("#story-skip-btn")||(this.isPreloadingActive||this.triggerAdvanceStory(),r.preventDefault())},t&&(t.addEventListener("click",this.handleStoryClick),t.addEventListener("touchstart",this.handleStoryTouch,{passive:!1}))},a=document.getElementById("story-skip-btn");if(a&&(a.onclick=r=>{r.stopPropagation(),this.skipStory()}),e&&i&&(i.style.transform="scaleX(0)",this.storyImagesLoadedCount<this.storyImagesTotalCount)){this.isPreloadingActive=!0,e.classList.remove("hidden"),this.storyImagesPreloadPromise.then(()=>{e.classList.add("hidden"),n()});return}n()}endStorytelling(){this.isStoryActive=!1,this.isPreloadingActive=!1;const t=document.getElementById("story-screen");t&&t.classList.add("hidden"),this.handleStoryKeyDown&&(window.removeEventListener("keydown",this.handleStoryKeyDown),this.handleStoryKeyDown=null),this.handleStoryClick&&t&&(t.removeEventListener("click",this.handleStoryClick),this.handleStoryClick=null),this.handleStoryTouch&&t&&(t.removeEventListener("touchstart",this.handleStoryTouch),this.handleStoryTouch=null),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1);const e=document.getElementById("map-area-container"),i=document.getElementById("left-hud-panel"),n=document.getElementById("right-hud-panel"),a=document.getElementById("bottom-hud-container");e&&(e.classList.remove("hidden","intro-hidden"),e.classList.add("intro-reveal"),setTimeout(()=>e.classList.remove("intro-reveal"),700)),i&&(i.classList.remove("hidden","intro-hidden"),i.classList.add("intro-reveal"),setTimeout(()=>i.classList.remove("intro-reveal"),700)),n&&(n.classList.remove("hidden","intro-hidden"),n.classList.add("intro-reveal"),setTimeout(()=>n.classList.remove("intro-reveal"),700)),a&&(a.classList.remove("hidden","intro-hidden"),a.classList.add("intro-reveal"),setTimeout(()=>a.classList.remove("intro-reveal"),700)),this.ui.setMap3DVisible(!1),this.isMap3DActive=!1,this.isIntroPlaying=!1,this.staticMapCacheDirty=!0,this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2,this.isResumedFromSave||this.ui.showInfoBanner(Ot("msgWhereAmI"))}updateStoryImage(){const t=document.getElementById("story-img"),e=document.getElementById("story-image-canvas");if(!(!t||!e))if(e.style.background="#0b0b0b",this.storyMsgIndex===5)t.style.display="none",e.style.background="radial-gradient(circle, #222222 0%, #000000 80%)",e.removeAttribute("data-placeholder");else{const i=this.preloadedStoryImages[this.storyMsgIndex];if(i)t.src=i.src,t.style.display="block",e.removeAttribute("data-placeholder");else{let n="";this.storyMsgIndex===0?n="assets/images/presentation/1-mystical-church-of-chaos.jpg":this.storyMsgIndex===1?n="assets/images/presentation/2-mystical-church-of-chaos.jpg":this.storyMsgIndex===2?n="assets/images/presentation/3-the-jelly-god.jpg":this.storyMsgIndex===3?n="assets/images/presentation/4-player-alone.jpg":this.storyMsgIndex===4&&(n="assets/images/presentation/5-player-thrown.jpg"),t.src=n,t.onerror=()=>{t.style.display="none",e.setAttribute("data-placeholder",`[Image ${this.storyMsgIndex+1}]`)},t.onload=()=>{t.style.display="block",e.removeAttribute("data-placeholder")}}}}updateStory(t){if(!this.isStoryActive||this.isPreloadingActive)return;const e=document.getElementById("story-text"),i=document.getElementById("story-dialogue"),n=document.getElementById("story-arrow");if(!i||!e)return;const a=["storyMsg1","storyMsg2","storyMsg3","storyMsg4","storyMsg5","storyMsg6"];if(this.storyMsgIndex>=a.length){this.endStorytelling();return}const r=Ot(a[this.storyMsgIndex]),o=l=>l<.5?4*l*l*l:1-Math.pow(-2*l+2,3)/2;this.storyState==="OPENING"?(e.textContent="",n&&n.classList.add("hidden"),this.storyWidthProgress+=t/.45,this.storyWidthProgress>=1&&(this.storyWidthProgress=1,this.storyState="TYPING",this.storyCharIndex=0,this.storyTypeTimer=0),i.style.transform=`scaleX(${o(this.storyWidthProgress)})`):this.storyState==="TYPING"?(i.style.transform="scaleX(1)",n&&n.classList.add("hidden"),this.storyTypeTimer+=t,this.storyTypeTimer>=.025&&(this.storyTypeTimer=0,this.storyCharIndex++,e.textContent=r.substring(0,this.storyCharIndex),this.storyCharIndex>=r.length&&(this.storyState="WAITING"))):this.storyState==="WAITING"?(i.style.transform="scaleX(1)",e.textContent=r,n&&n.classList.remove("hidden")):this.storyState==="CLOSING"&&(e.textContent="",n&&n.classList.add("hidden"),this.storyCloseProgress-=t/.45,this.storyCloseProgress<=0&&(this.storyCloseProgress=0,this.endStorytelling()),i.style.transform=`scaleX(${o(this.storyCloseProgress)})`)}triggerAdvanceStory(){const t=["storyMsg1","storyMsg2","storyMsg3","storyMsg4","storyMsg5","storyMsg6"];if(this.storyMsgIndex>=t.length)return;const e=Ot(t[this.storyMsgIndex]);if(this.storyState==="CLOSING"){this.skipStory();return}if(this.storyState==="OPENING")this.storyState="TYPING",this.storyWidthProgress=1,this.storyCharIndex=0,this.storyTypeTimer=0;else if(this.storyState==="TYPING"){this.storyState="WAITING",this.storyCharIndex=e.length;const i=document.getElementById("story-text");i&&(i.textContent=e)}else if(this.storyState==="WAITING")if(this.storyMsgIndex+1<t.length){this.storyMsgIndex++,this.storyState="TYPING",this.storyCharIndex=0,this.storyTypeTimer=0,this.updateStoryImage();const i=document.getElementById("story-text");i&&(i.textContent="")}else this.storyState="CLOSING",this.storyCloseProgress=1}skipStory(){this.endStorytelling()}toggleTeleportMap(t){if(t&&this.isJellyChallengeActive)return;this.isMap3DActive=t,this.isTeleportMode=t;const e=document.getElementById("mobile-teleport-exit-btn");if(t){this.isMouseOrTouchDetected=!1,e&&e.classList.remove("hidden"),this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.add("hidden"),this.ui.setMap3DVisible(!0),this.activeMapFloor=this.player.z,this.visualActiveFloor=this.player.z,this.mapCursor={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.mapZoom=1,this.mapPanOffsetX=0,this.mapPanOffsetY=0;const i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,r=this.allTeleports.findIndex(l=>l.x===i&&l.y===n&&l.z===a);r!==-1&&(this.selectedTeleportIndex=r),this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="none");const o=document.getElementById("map3d-instructions");o&&(o.style.display="none"),this.isometricCanvas?this.isometricCanvas.style.display="block":this.initIsometricCanvas(),this.teleportConfirmModalActive=!1}else this.lastTeleportCloseTime=Date.now(),e&&e.classList.add("hidden"),this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.remove("hidden"),this.ui.setMap3DVisible(!1),this.isometricCanvas&&(this.isometricCanvas.style.display="none"),this.teleportConfirmModalActive=!1}onCanvasClick(t){if(!this.isMap3DActive)return;const e=this.renderer.domElement.getBoundingClientRect();if(this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.isTeleportMode){const i=this.raycaster.intersectObjects(this.teleportMeshes);if(i.length>0){const n=i[0].object,{gridX:a,gridY:r,gridZ:o}=n.userData,l=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===a&&this.inactiveTeleportPos.y===r&&this.inactiveTeleportPos.z===o,c=Math.floor(this.player.x),u=Math.floor(this.player.y),f=this.player.z;a===c&&r===u&&o===f?this.toggleTeleportMap(!1):l||this.teleportTo(a,r,o)}}else{const i=this.raycaster.intersectObjects(this.knownMeshes);if(i.length>0){const n=i[0].object,{gridX:a,gridY:r,gridZ:o}=n.userData;this.triggerPathReveal(a,r,o)}}}toggleZoom(){if(this.mazeGen.size<=11)return;this.isZoomActive=!this.isZoomActive,this.staticMapCacheDirty=!0;const t=document.getElementById("zoom-out-icon"),e=document.getElementById("zoom-in-icon");t&&e&&(this.isZoomActive?(t.classList.remove("hidden"),e.classList.add("hidden")):(t.classList.add("hidden"),e.classList.remove("hidden")))}togglePause(){this.isGameOver||this.isDestroyed||this.isIntroPlaying||(this.isPaused=!this.isPaused,this.isPaused?(this.ui.showPause(),this.ui.uiMobilePauseBtn&&this.ui.uiMobilePauseBtn.classList.add("hidden")):(this.ui.hidePause(),this.ui.uiMobilePauseBtn&&!this.ui.uiMobileControls.classList.contains("hidden")&&this.ui.uiMobilePauseBtn.classList.remove("hidden")))}checkExitNeighborVisited(){const t=this.getExitPos(),e=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const i of e){const n=t.x+i.dx,a=t.y+i.dy,r=t.z+i.dz;if(n>=0&&n<this.mazeGen.size&&a>=0&&a<this.mazeGen.size&&r>=0&&r<this.mazeGen.size){const o=this.maze.get(n,a,r);if(o!==this.mazeGen.TYPES.WALL&&(o===this.mazeGen.TYPES.VISITED||o===this.mazeGen.TYPES.START||o===this.mazeGen.TYPES.ELEVATOR_VISITED))return!0}}return!1}findShortestPath(t,e,i=!1){const n=this.mazeGen.size,a=new Int8Array(n*n*n);for(let r=0;r<n;r++)for(let o=0;o<n;o++)for(let l=0;l<n;l++){const c=r*n*n+o*n+l,u=this.maze.get(r,o,l),f=r===t.x&&o===t.y&&l===t.z,p=r===e.x&&o===e.y&&l===e.z,m=r===e.x&&o===e.y&&(l===e.z-1||l===e.z+1)&&l%2===0;if(u===this.mazeGen.TYPES.WALL){a[c]=0;continue}const y=u===this.mazeGen.TYPES.TELEPORT,h=y&&this.discoveredTeleports.has(`${r},${o},${l}`),d=u===this.mazeGen.TYPES.VISITED||u===this.mazeGen.TYPES.START||u===this.mazeGen.TYPES.ELEVATOR_VISITED||h,_=(u===this.mazeGen.TYPES.PATH||y&&!h)&&this.isNearVisited(r,o,l);let g=!1;i?g=d||f||p||m:g=d||_||f||p||m,a[c]=g?1:0}return fl(t,e,a,n,0)??[]}triggerPathReveal(t,e,i,n=!1){if(this.pathRevealInterval||this.pathfinderBlockedUntil&&Date.now()<this.pathfinderBlockedUntil)return;if(this.pathfindersRemaining<=0){this.ui.showInfoBanner(Ot("msgNoPathfindersRemaining"));return}const a=this.maze.get(t,e,i)===this.mazeGen.TYPES.EXIT;if(a&&!this.exitPathfinderUnlocked){this.ui.showInfoBanner(Ot("msgExitNotFoundYet"));return}if(!n){const u=document.getElementById("pathfinder-confirm-modal");if(u){this.pathfinderConfirmTarget={x:t,y:e,z:i},u.classList.remove("hidden"),this.ui.localizeDOM();return}}this.pathRevealInterval&&(clearInterval(this.pathRevealInterval),this.pathRevealInterval=null),this.revealedPathSet.clear();let r=i;i%2===0&&(r=this.player.z<i?i+1:i-1,r<1&&(r=1),r>=this.mazeGen.size&&(r=this.mazeGen.size-2));const o={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},l={x:t,y:e,z:r},c=this.findShortestPath(o,l,a);!c||c.length===0||(this.pathfindersRemaining--,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),ls(this),this.activePathReveal=c,this.revealedPathProgress=0,this.revealedPathSet.add(`${t},${e},${i}`),this.pathRevealInterval=setInterval(()=>{if(this.revealedPathProgress<this.activePathReveal.length){const u=this.activePathReveal[this.revealedPathProgress],f=`${u.x},${u.y},${u.z}`;if(this.revealedPathSet.add(f),this.revealedPathProgress>0){const p=this.activePathReveal[this.revealedPathProgress-1];if(Math.abs(u.z-p.z)===2){const m=(u.z+p.z)/2,T=`${u.x},${u.y},${m}`;if(this.revealedPathSet.add(T),this.isMap3DActive&&this.gridMeshes){const y=this.mazeGen.size,h=this.gridMeshes[u.x*y*y+u.y*y+m];h&&(h.material=new ee({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.95*(this.isTeleportMode?.2:1)}))}}}if(this.staticMapCacheDirty=!0,this.isMap3DActive&&this.gridMeshes){const p=this.mazeGen.size,m=this.gridMeshes[u.x*p*p+u.y*p+u.z];m&&(m.material=new ee({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.95*(this.isTeleportMode?.2:1)}))}this.revealedPathProgress++}else clearInterval(this.pathRevealInterval),this.pathRevealInterval=null,this.pathfinderBlockedUntil=Date.now()+600},120))}teleportTo(t,e,i){if(!this.isJellyChallengeActive){if(this.toggleTeleportMap(!1),this.teleportAnim={active:!0,stage:"OUT",startX:this.player.x,startY:this.player.y,startZ:this.player.z,targetX:t+X.PLAYER_START_X,targetY:e+X.PLAYER_START_Y%1,targetZ:i,duration:.4,elapsed:0},this.skipCellAnimations=!0,!this.isSafeMode){const n=Math.floor(this.degree*1.5)+3;this.teleportCooldownTicks=n,this.inactiveTeleportPos={x:t,y:e,z:i},this.ui.showInfoBanner(Ot("msgOopsNoisyShit"));for(const a of this.hunters){if(a.state==="DEAD_BY_JELLY")continue;a.state="TELEPORT_TRACKING";const r=a.findPathToTarget({x:t,y:e,z:i},this.maze,this.mazeGen.TYPES);r?a.pathToTarget=r:a.pathToTarget=[]}}this.input.keys={}}}initIsometricCanvas(){const t=document.createElement("canvas");this.isometricCanvas=t,t.id="isometric-map-canvas",t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.zIndex="101",this.isometricCtx=t.getContext("2d"),this.ui.uiMap3dContainer.appendChild(t),t.addEventListener("click",h=>this.handleIsometricClick(h));const e=()=>{this.isMouseOrTouchDetected||(this.isMouseOrTouchDetected=!0)};t.addEventListener("mousemove",e),t.addEventListener("pointerdown",e);let i=null,n=null,a=0,r=0,o=0,l=0,c=!1,u=!1,f=!1,p=0;t.addEventListener("touchstart",h=>{if(!(!this.isMap3DActive||this.isIntroPlaying)){if(p=0,f=!1,h.touches.length===1){const d=h.touches[0];a=d.clientX,r=d.clientY,o=this.mapPanOffsetX,l=this.mapPanOffsetY,u=!0,c=!1}else if(h.touches.length===2){c=!0,u=!1;const d=h.touches[0],_=h.touches[1];i=Math.hypot(d.clientX-_.clientX,d.clientY-_.clientY),n=this.mapZoom}}},{passive:!1}),t.addEventListener("touchmove",h=>{if(!(!this.isMap3DActive||this.isIntroPlaying)){if(c&&h.touches.length===2){h.preventDefault();const d=h.touches[0],_=h.touches[1],g=Math.hypot(d.clientX-_.clientX,d.clientY-_.clientY);if(i&&i>0&&n){const v=t.getBoundingClientRect(),E=(d.clientX+_.clientX)/2-v.left,x=(d.clientY+_.clientY)/2-v.top,S=this.mapZoom;let N=n*(g/i);N=Math.max(.5,Math.min(4,N));const M=N/S;this.mapPanOffsetX=E-(E-(v.width/2+this.mapPanOffsetX))*M-v.width/2,this.mapPanOffsetY=x-(x-(v.height/2+this.mapPanOffsetY))*M-v.height/2,this.mapZoom=N,p=100}}else if(u&&h.touches.length===1){const d=h.touches[0],_=d.clientX-a,g=d.clientY-r,v=Math.hypot(_,g);if(p=Math.max(p,v),!f&&Math.abs(g)>40&&Math.abs(g)>Math.abs(_)*1.5){const E=this.mazeGen.size;g<-40?this.activeMapFloor-2>=1&&(this.activeMapFloor-=2,f=!0):g>40&&this.activeMapFloor+2<=E-2&&(this.activeMapFloor+=2,f=!0)}f||(this.mapPanOffsetX=o+_,this.mapPanOffsetY=l+g),h.preventDefault()}}},{passive:!1}),t.addEventListener("touchend",h=>{if(c=!1,u=!1,p<8&&!f){const d=h.changedTouches[0];if(d){const _={clientX:d.clientX,clientY:d.clientY};this.handleIsometricClick(_)}}}),t.addEventListener("wheel",h=>{if(!this.isMap3DActive||this.isIntroPlaying)return;h.preventDefault();const d=t.getBoundingClientRect(),_=h.clientX-d.left,g=h.clientY-d.top,v=this.mapZoom,E=1.15;let x=h.deltaY<0?v*E:v/E;x=Math.max(.5,Math.min(4,x));const S=d.width,N=d.height,M=x/v;this.mapPanOffsetX=_-(_-(S/2+this.mapPanOffsetX))*M-S/2,this.mapPanOffsetY=g-(g-(N/2+this.mapPanOffsetY))*M-N/2,this.mapZoom=x},{passive:!1});let m=!1,T=0,y=0;t.addEventListener("mousedown",h=>{if(!this.isMap3DActive||this.isIntroPlaying)return;const d=t.getBoundingClientRect(),_=h.clientX-d.left,g=h.clientY-d.top;if(!(this.floorClickRects&&this.floorClickRects.some(v=>_>=v.x&&_<=v.x+v.w&&g>=v.y&&g<=v.y+v.h))){if(this.isTeleportMode){if(this.teleportConfirmModalActive&&this.teleportModalClickRects&&this.teleportModalClickRects.some(v=>_>=v.x&&_<=v.x+v.w&&g>=v.y&&g<=v.y+v.h)||!this.teleportConfirmModalActive&&this.teleportDotsClickRects&&this.teleportDotsClickRects.some(v=>_>=v.x&&_<=v.x+v.w&&g>=v.y&&g<=v.y+v.h))return;if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const v=this.teleportGoBtnClickRect;if(_>=v.x&&_<=v.x+v.w&&g>=v.y&&g<=v.y+v.h)return}}m=!0,T=h.clientX,y=h.clientY}}),window.addEventListener("mousemove",h=>{if(m){const d=h.clientX-T,_=h.clientY-y;this.mapPanOffsetX+=d,this.mapPanOffsetY+=_,T=h.clientX,y=h.clientY}}),window.addEventListener("mouseup",()=>{m=!1}),t.addEventListener("mousemove",h=>{if(!this.isMap3DActive||this.isIntroPlaying)return;const d=t.getBoundingClientRect(),_=h.clientX-d.left,g=h.clientY-d.top;if(t.style.cursor="default",this.isTeleportMode){if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const v=this.teleportGoBtnClickRect;if(_>=v.x&&_<=v.x+v.w&&g>=v.y&&g<=v.y+v.h){t.style.cursor="pointer";return}}if(this.teleportConfirmModalActive&&this.teleportModalClickRects){for(const v of this.teleportModalClickRects)if(_>=v.x&&_<=v.x+v.w&&g>=v.y&&g<=v.y+v.h){this.teleportModalSelection=v.selection,t.style.cursor="pointer";return}}else if(this.teleportDotsClickRects){const v=this.getSelectableTeleportIndices();for(const E of this.teleportDotsClickRects)if(_>=E.x&&_<=E.x+E.w&&g>=E.y&&g<=E.y+E.h&&v.includes(E.index)){this.selectedTeleportIndex=E.index;const x=this.allTeleports[E.index];this.activeMapFloor=x.z,this.mapCursor={x:x.x,y:x.y,z:x.z},t.style.cursor="pointer";return}}}if(!this.isTeleportMode){const v=this.mazeGen.size,E=this.activeMapFloor;let x=d.width*.7/v;x=Math.max(20,Math.min(48,x));const S=x*this.mapZoom,N=S/2,M=S/4,A=N*5,G=d.width/2+this.mapPanOffsetX,z=d.height/2+this.mapPanOffsetY,q=[];E+2<=v-2&&q.push(E+2),E+1<v&&q.push(E+1),q.push(E),E-1>=0&&q.push(E-1),E-2>=1&&q.push(E-2);for(const R of q){const B=z-(R-E)*A,$=(_-G)/N,V=(g-B)/M,H=Math.round(($+V)/2),J=Math.round((V-$)/2);if(H>=0&&H<v&&J>=0&&J<v&&this.getInteractiveElements(E).some(Z=>Z.x===H&&Z.y===J&&Z.z===R)){this.mapCursor={x:H,y:J,z:R},t.style.cursor="pointer";return}}}})}handleIsometricClick(t){if(!this.isMap3DActive||this.isIntroPlaying||t instanceof MouseEvent&&Date.now()-this.lastTeleportCloseTime<500)return;const e=this.isometricCanvas.getBoundingClientRect(),i=t.clientX-e.left,n=t.clientY-e.top;if(this.isTeleportMode){if(this.teleportConfirmModalActive){if(this.teleportModalClickRects){for(const g of this.teleportModalClickRects)if(i>=g.x&&i<=g.x+g.w&&n>=g.y&&n<=g.y+g.h){if(g.selection==="go"){const v=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(v.x,v.y,v.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;return}}this.teleportConfirmModalActive=!1;return}if(!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const g=this.teleportGoBtnClickRect;if(i>=g.x&&i<=g.x+g.w&&n>=g.y&&n<=g.y+g.h){const v=this.allTeleports[this.selectedTeleportIndex],E=Math.floor(this.player.x),x=Math.floor(this.player.y),S=this.player.z,N=v&&v.x===E&&v.y===x&&v.z===S;v&&!N&&(this.teleportTo(v.x,v.y,v.z),this.toggleTeleportMap(!1));return}}if(this.teleportDotsClickRects){const g=this.teleportDotsClickRects.find(v=>i>=v.x&&i<=v.x+v.w&&n>=v.y&&n<=v.y+v.h);if(g){if(this.getSelectableTeleportIndices().includes(g.index)){this.selectedTeleportIndex=g.index;const E=this.allTeleports[g.index];this.activeMapFloor=E.z,this.mapCursor={x:E.x,y:E.y,z:E.z}}return}}}if(this.floorClickRects){for(const g of this.floorClickRects)if(i>=g.x&&i<=g.x+g.w&&n>=g.y&&n<=g.y+g.h){this.activeMapFloor=g.floor;return}}const a=this.mazeGen.size,r=this.activeMapFloor;let o=e.width*.7/a;o=Math.max(20,Math.min(48,o));const l=o*this.mapZoom,c=l/2,u=l/4,f=c*5,p=e.width/2+this.mapPanOffsetX,m=e.height/2+this.mapPanOffsetY,T=(g,v,E)=>{const x=(g-v)*c+p,S=(g+v)*u-(E-r)*f+m;return{x,y:S}};if(this.isTeleportMode){const g=this.getInteractiveElements(r);let v=null,E=1/0;const x=this.isTouchDevice?52:35;for(const S of g){if(S.type!=="teleport")continue;const N=T(S.x,S.y,S.z),M=i-N.x,A=n-N.y,G=Math.sqrt(M*M+A*A);G<E&&(E=G,v=S)}if(v&&E<=x){const{x:S,y:N,z:M}=v,A=this.allTeleports.findIndex(z=>z.x===S&&z.y===N&&z.z===M),G=this.getSelectableTeleportIndices();A!==-1&&G.includes(A)&&(this.selectedTeleportIndex=A,this.mapCursor={x:S,y:N,z:M})}return}const y=this.getInteractiveElements(r);let h=null,d=1/0;const _=this.isTouchDevice?52:35;for(const g of y){const v=T(g.x,g.y,g.z),E=i-v.x,x=n-v.y,S=Math.sqrt(E*E+x*x);S<d&&(d=S,h=g)}if(h&&d<=_){this.mapCursor={x:h.x,y:h.y,z:h.z},this.triggerPathReveal(h.x,h.y,h.z);return}}navigateCursor(t){const e=this.activeMapFloor,i=this.getInteractiveElements(e);if(i.length===0)return;const n=this.mapCursor.x,a=this.mapCursor.y,r=this.mapCursor.z,o=this.mazeGen.size;if(t==="left"){if(i.find(c=>c.x===n&&c.y===a&&c.z===e+1&&r===e-1)){this.mapCursor={x:n,y:a,z:e+1};return}for(let c=n-1;c>=0;c--){const u=i.filter(f=>f.x===c&&f.y===a);if(u.length>0){const f=u.find(m=>m.z===e-1),p=u.find(m=>m.z===e+1);f&&p?this.mapCursor={x:c,y:a,z:e-1}:this.mapCursor={x:c,y:a,z:u[0].z};return}}}else if(t==="right"){if(i.find(c=>c.x===n&&c.y===a&&c.z===e-1&&r===e+1)){this.mapCursor={x:n,y:a,z:e-1};return}for(let c=n+1;c<o;c++){const u=i.filter(f=>f.x===c&&f.y===a);if(u.length>0){const f=u.find(m=>m.z===e-1),p=u.find(m=>m.z===e+1);f&&p?this.mapCursor={x:c,y:a,z:e+1}:this.mapCursor={x:c,y:a,z:u[0].z};return}}}else if(t==="up"){if(i.find(c=>c.x===n&&c.y===a&&c.z===e-1&&r===e+1)){this.mapCursor={x:n,y:a,z:e-1};return}for(let c=a-1;c>=0;c--){const u=i.filter(f=>f.y===c);if(u.length>0){let f=-1,p=1/0;for(const h of u){const d=Math.abs(h.x-n);d<p?(p=d,f=h.x):d===p&&h.x<f&&(f=h.x)}const m=u.filter(h=>h.x===f),T=m.find(h=>h.z===e-1),y=m.find(h=>h.z===e+1);T&&y?this.mapCursor={x:f,y:c,z:e+1}:this.mapCursor={x:f,y:c,z:m[0].z};return}}}else if(t==="down"){if(i.find(c=>c.x===n&&c.y===a&&c.z===e+1&&r===e-1)){this.mapCursor={x:n,y:a,z:e+1};return}for(let c=a+1;c<o;c++){const u=i.filter(f=>f.y===c);if(u.length>0){let f=-1,p=1/0;for(const h of u){const d=Math.abs(h.x-n);d<p?(p=d,f=h.x):d===p&&h.x<f&&(f=h.x)}const m=u.filter(h=>h.x===f),T=m.find(h=>h.z===e-1),y=m.find(h=>h.z===e+1);T&&y?this.mapCursor={x:f,y:c,z:e-1}:this.mapCursor={x:f,y:c,z:m[0].z};return}}}}getInteractiveElements(t){const e=[],i=this.mazeGen.size,n=this.mazeGen.TYPES,a=(r,o,l)=>{if(l<0||l>=i)return!1;const c=this.maze.get(r,o,l);return c===n.VISITED||c===n.START||c===n.ELEVATOR_VISITED||c===n.TELEPORT&&this.discoveredTeleports.has(`${r},${o},${l}`)};for(let r=0;r<i;r++)for(let o=0;o<i;o++){const l=this.maze.get(r,o,t);if(l===n.WALL)continue;const c=l===n.TELEPORT,u=c&&this.discoveredTeleports.has(`${r},${o},${t}`);if(u){e.push({x:r,y:o,z:t,type:"teleport"});continue}if(l===n.START){e.push({x:r,y:o,z:t,type:"start"});continue}if(l===n.EXIT){this.keysCollected===this.totalKeys&&this.exitPathfinderUnlocked&&e.push({x:r,y:o,z:t,type:"exit"});continue}(l===n.PATH||c&&!u)&&this.isNearVisited(r,o,t)&&e.push({x:r,y:o,z:t,type:"known"})}for(const r of[t-1,t+1])if(!(r<0||r>=i||r-1<1||r+1>=i))for(let o=0;o<i;o++)for(let l=0;l<i;l++){const c=this.maze.get(o,l,r);if(c===n.WALL)continue;const u=c===n.ELEVATOR_VISITED;c===1&&(a(o,l,r-1)||a(o,l,r+1))&&!u&&a(o,l,t)&&e.push({x:o,y:l,z:r,type:"shaft"})}return e}drawIsometricMap(){if(!this.isMap3DActive||this.isIntroPlaying)return;const t=this.isometricCanvas,e=this.isometricCtx;if(!t||!e)return;const i=t.width=window.innerWidth,n=t.height=window.innerHeight;e.clearRect(0,0,i,n),e.fillStyle="#000000",e.fillRect(0,0,i,n);const a=this.mazeGen.size,r=this.activeMapFloor,o=this.visualActiveFloor;let l=i*.7/a;l=Math.max(20,Math.min(48,l));const c=l*this.mapZoom,u=c/2,f=c/2,p=c/4,m=f*5,T=i/2+this.mapPanOffsetX,y=n/2+this.mapPanOffsetY,h=(L,D,W)=>{const C=L,K=D,it=(C-K)*f+T,nt=(C+K)*p-(W-o)*m+y;return{x:it,y:nt}},d=L=>{e.strokeStyle=`rgba(0, 255, 0, ${.15*L})`,e.lineWidth=1;for(let D=0;D<a;D++)for(let W=0;W<a;W++){const C=h(W,D,r);e.beginPath(),e.moveTo(C.x,C.y-p),e.lineTo(C.x+f,C.y),e.lineTo(C.x,C.y+p),e.lineTo(C.x-f,C.y),e.closePath(),e.stroke()}},_=(L,D,W,C,K,it,nt=1)=>{e.save(),e.globalAlpha=nt,e.beginPath(),e.moveTo(L-W,D),e.lineTo(L,D+C),e.lineTo(L,D+C-K),e.lineTo(L-W,D-K),e.closePath(),e.fillStyle=it,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(L,D+C),e.lineTo(L+W,D),e.lineTo(L+W,D-K),e.lineTo(L,D+C-K),e.closePath(),e.fillStyle=it,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.beginPath(),e.moveTo(L-W,D-K),e.lineTo(L,D+C-K),e.lineTo(L+W,D-K),e.lineTo(L,D-C-K),e.closePath(),e.fillStyle=it,e.fill(),e.restore()},g=(L,D,W,C,K,it,nt,gt,vt=1)=>{e.save(),e.globalAlpha=vt,e.beginPath(),e.moveTo(L-W,D),e.lineTo(L,D+C),e.lineTo(L,D+C-K),e.lineTo(L-W,D-K),e.closePath(),e.fillStyle=it,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(L,D+C),e.lineTo(L+W,D),e.lineTo(L+W,D-K),e.lineTo(L,D+C-K),e.closePath(),e.fillStyle=it,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.restore(),e.save(),e.globalAlpha=vt,e.beginPath(),e.moveTo(L-W,D-K),e.lineTo(L,D+C-K),e.lineTo(L+W,D-K),e.lineTo(L,D-C-K),e.closePath(),e.fillStyle=it,e.fill(),e.clip(),e.translate(L,D-K),e.scale(1,.5);const mt=this.vortexAngles.get(gt)||0;e.rotate(mt);const P=this.getHexColorVariation(it,45),b=this.getHexColorVariation(it,-45),j=W,dt=e.createRadialGradient(0,0,0,0,0,j);dt.addColorStop(0,P),dt.addColorStop(.4,it),dt.addColorStop(1,b);const ut=e.createRadialGradient(0,0,0,0,0,j);ut.addColorStop(0,"#ffffff"),ut.addColorStop(.3,P),ut.addColorStop(1,"rgba(255, 255, 255, 0)");const lt=3;for(let _t=0;_t<lt;_t++){const pt=_t*2*Math.PI/lt;e.beginPath(),e.strokeStyle=dt,e.lineWidth=W*.18,e.lineCap="round";for(let ht=0;ht<=j;ht+=1){const xt=5/j,wt=pt+ht*xt,at=ht*Math.cos(wt),It=ht*Math.sin(wt);ht===0?e.moveTo(at,It):e.lineTo(at,It)}e.stroke(),e.beginPath(),e.strokeStyle=ut,e.lineWidth=W*.08,e.lineCap="round";for(let ht=j*.12;ht<=j;ht+=1){const xt=5/j,wt=pt+ht*xt+.15,at=ht*Math.cos(wt),It=ht*Math.sin(wt);ht===Math.floor(j*.12)?e.moveTo(at,It):e.lineTo(at,It)}e.stroke()}e.restore()},v=(L,D,W)=>{if(W<0||W>=a)return!1;const C=this.maze.get(L,D,W);return C===this.mazeGen.TYPES.VISITED||C===this.mazeGen.TYPES.START||C===this.mazeGen.TYPES.ELEVATOR_VISITED||C===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${L},${D},${W}`)},E=(L,D,W,C,K,it,nt,gt,vt,mt)=>{e.save(),e.globalAlpha=mt;const P=vt?"#ffffff":gt?X.COLORS.NEON_UP:X.COLORS.NEON_UP_UNUSED,b=vt?"#ffffff":gt?X.COLORS.NEON_DOWN:X.COLORS.NEON_DOWN_UNUSED;if(it&&nt)e.beginPath(),e.moveTo(L,D-K-C),e.lineTo(L-W,D-K),e.lineTo(L,D-K+C),e.lineTo(L,D-K),e.closePath(),e.fillStyle=b,e.fill(),e.beginPath(),e.moveTo(L,D-K-C),e.lineTo(L,D-K),e.lineTo(L,D-K+C),e.lineTo(L+W,D-K),e.closePath(),e.fillStyle=P,e.fill(),e.beginPath(),e.moveTo(L-W,D),e.lineTo(L,D+C),e.lineTo(L,D+C-K),e.lineTo(L-W,D-K),e.closePath(),e.fillStyle=b,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(L,D+C),e.lineTo(L+W,D),e.lineTo(L+W,D-K),e.lineTo(L,D+C-K),e.closePath(),e.fillStyle=P,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill();else{const j=it?P:b;e.beginPath(),e.moveTo(L-W,D-K),e.lineTo(L,D+C-K),e.lineTo(L+W,D-K),e.lineTo(L,D-C-K),e.closePath(),e.fillStyle=j,e.fill(),e.beginPath(),e.moveTo(L-W,D),e.lineTo(L,D+C),e.lineTo(L,D+C-K),e.lineTo(L-W,D-K),e.closePath(),e.fillStyle=j,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(L,D+C),e.lineTo(L+W,D),e.lineTo(L+W,D-K),e.lineTo(L,D+C-K),e.closePath(),e.fillStyle=j,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill()}e.restore()},x=(L,D)=>{const W=this.mazeGen.TYPES;for(let C=0;C<a;C++)for(let K=0;K<a;K++){const it=this.maze.get(K,C,L),nt=h(K,C,L);if(this.jellyPortalFreezeTimer>0&&this.jellyPortalResetCells.has(`${K},${C}`)&&L===this.player.z){const ht=1.5-this.jellyPortalFreezeTimer,xt=.6;let wt=0;ht>xt&&(wt=Math.min(1,(ht-xt)/.9)),e.save();const at=Math.round(100*(1-wt));e.filter=`invert(${at}%)`;const It=K===Math.floor(this.player.x)&&C===Math.floor(this.player.y),Nt=it===W.STATUE;if(!It&&!Nt?e.globalAlpha=(1-wt)*D:e.globalAlpha=D,it===W.WALL||Nt)if(Nt)_(nt.x,nt.y,f,p,1.5,"#444444",D),G(nt.x,nt.y,D);else{const bt=f*.45,I=p*.45,Mt=u*.25,Et="rgba(90, 20, 160, 0.8)",Tt=[{dx:-.23,dy:-.23},{dx:.23,dy:-.23},{dx:-.23,dy:.23},{dx:.23,dy:.23}];for(const ft of Tt){const U=h(K+ft.dx,C+ft.dy,L);_(U.x,U.y,bt,I,Mt,Et,D)}}else{let Pt="#444444",bt=!1,I="";It?(I=X.COLORS.JELLY_PORTAL,bt=!0):it===W.TELEPORT?(I=X.COLORS.TELEPORT_INACTIVE,bt=!0):it===W.EXIT&&(I=X.COLORS.EXIT,bt=!0),bt?g(nt.x,nt.y,f,p,1.5,I,!1,`${K},${C},${L}`,D):_(nt.x,nt.y,f,p,1.5,Pt,D),it===W.KEY?N(nt.x,nt.y-1.5,D):it===W.MANA&&M(nt.x,nt.y-1.5,D)}e.restore();continue}const vt=it===W.JELLY_PORTAL,mt=it===W.TELEPORT||vt,P=mt&&this.discoveredTeleports.has(`${K},${C},${L}`),b=it===W.VISITED||it===W.START||it===W.ELEVATOR_VISITED||P,j=(it===W.PATH||mt&&!P)&&this.isNearVisited(K,C,L),dt=this.revealedPathSet.has(`${K},${C},${L}`),ut=it===W.KEY,lt=it===W.MANA,_t=it===W.EXIT;if(it===W.WALL||it===W.STATUE){if(it===W.WALL&&this.isWallVisible(K,C,L)||it===W.STATUE&&(this.isNearVisited(K,C,L)||this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.revealed)){const xt=f*.45,wt=p*.45,at=u*.25;let It="rgba(90, 20, 160, 0.8)";if(it===W.STATUE){const Dt=this.jellyStatueStates.get(`${K},${C},${L}`);Dt&&Dt.state==="CHARGING"&&(It=Math.floor(performance.now()/100)%2===0?X.COLORS.JELLY_MUTATION:"#ff3333")}const Nt=[{dx:-.23,dy:-.23},{dx:.23,dy:-.23},{dx:-.23,dy:.23},{dx:.23,dy:.23}];for(const Dt of Nt){const Pt=h(K+Dt.dx,C+Dt.dy,L);_(Pt.x,Pt.y,xt,wt,at,It,D)}}continue}for(const ht of this.hunters){if(ht.state==="SLEEP"||ht.state==="DEAD_BY_JELLY")continue;const xt=ht.visualZ!==null?ht.visualZ:ht.z,wt=ht.visualX!==null?ht.visualX:ht.x,at=ht.visualY!==null?ht.visualY:ht.y;if(xt===null||wt===null||at===null)continue;const It=Math.round((xt-1)/2)*2+1,Nt=Math.max(0,Math.min(a-1,Math.floor(wt))),Dt=Math.max(0,Math.min(a-1,Math.floor(at)));if(K===Nt&&C===Dt&&L===It){const Pt=h(wt,at,xt);B(ht,Pt.x,Pt.y-1.5,D)}}if(b||j||dt||ut||lt||_t){const xt=L<a-1&&this.maze.get(K,C,L+1)!==W.WALL&&this.maze.get(K,C,L+1)!==W.STATUE,wt=L>0&&this.maze.get(K,C,L-1)!==W.WALL&&this.maze.get(K,C,L-1)!==W.STATUE,at=this.mapCursor.x===K&&this.mapCursor.y===C&&this.mapCursor.z===L;if((b||dt)&&(xt||wt))E(nt.x,nt.y,f,p,1.5,xt,wt,b,dt,D);else{let Et="#222222",Tt=!1,ft="";const U=Math.floor(this.player.x)===K&&Math.floor(this.player.y)===C&&L===this.player.z,St=`${K},${C},${L}`;if(dt)Et="#ffffff";else if(_t)ft=this.keysCollected===this.totalKeys?X.COLORS.EXIT:"#ff3300",Tt=!0;else if(P){const At=K===Math.floor(this.mazeGen.startPos.x)&&C===Math.floor(this.mazeGen.startPos.y)&&L===this.mazeGen.startPos.z,Ut=this.teleportCooldownTicks>0;At?ft=Ut?X.COLORS.TELEPORT_INACTIVE:U?X.COLORS.TELEPORT:X.COLORS.START:ft=Ut?X.COLORS.TELEPORT_INACTIVE:vt?X.COLORS.JELLY_PORTAL:X.COLORS.TELEPORT,Tt=!0}else if(b)it===W.START?(ft=this.teleportCooldownTicks>0?X.COLORS.TELEPORT_INACTIVE:U?X.COLORS.TELEPORT:X.COLORS.START,Tt=!0):Et="#444444";else if(j)if(at){const At=.5+.5*Math.sin(performance.now()/120);Et=`rgb(${Math.floor(31+224*At)}, ${Math.floor(58+197*At)}, ${Math.floor(82+173*At)})`}else Et="#1f3a52";else(ut||lt)&&(Et="#111111");Tt?g(nt.x,nt.y,f,p,1.5,ft,U,St,D):_(nt.x,nt.y,f,p,1.5,Et,D)}if(ut&&N(nt.x,nt.y-1.5,D),lt&&M(nt.x,nt.y-1.5,D),P){const Et=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===K&&this.inactiveTeleportPos.y===C&&this.inactiveTeleportPos.z===L;let Tt=X.COLORS.TELEPORT;Et&&(Tt=X.COLORS.TELEPORT_INACTIVE),A(nt.x,nt.y-1.5,Tt,D,at)}let Dt=K===Math.floor(this.player.x)&&C===Math.floor(this.player.y)&&L===this.player.z,Pt=1,bt=1,I=1;if(this.teleportAnim&&this.teleportAnim.active){const Et=this.teleportAnim,Tt=Math.min(1,Et.elapsed/Et.duration);Et.stage==="OUT"?(Dt=K===Math.floor(Et.startX)&&C===Math.floor(Et.startY)&&L===Et.startZ,Pt=1-Tt*.9,bt=1+Tt*2,I=1-Tt):(Dt=K===Math.floor(Et.targetX)&&C===Math.floor(Et.targetY)&&L===Et.targetZ,Pt=Tt,bt=3-Tt*2,I=Tt)}const Mt=this.getAuraHeightAt(K,C,L);Mt>0&&z(nt.x,nt.y-1.5,f*.6,p*.6,u*1,Mt,D*I),Dt&&R(nt.x,nt.y-1.5,D*I,Pt,bt),Mt>0&&z(nt.x,nt.y-1.5,f*.6,p*.6,u*1,Mt,D*I),this.jellyProjectiles.forEach(Et=>{if(Et.z===L){const Tt=Math.floor(Et.x),ft=Math.floor(Et.y);if(Tt===K&&ft===C){const U=h(Et.x,Et.y,L);q(U.x,U.y-1.5,D)}}})}}},S=(L,D)=>{const W=this.mazeGen.TYPES;for(let C=0;C<a;C++)for(let K=0;K<a;K++){const it=this.maze.get(K,C,L);if(it===W.WALL)continue;const nt=this.revealedPathSet.has(`${K},${C},${L}`),gt=it===W.ELEVATOR_VISITED;if(it===1&&(v(K,C,L-1)||v(K,C,L+1)),nt||v(K,C,r)){const vt=h(K,C,L-1);vt.y-=1.5;const mt=h(K,C,L+1);let P=X.COLORS.PATH_KNOWN;nt?P="#ffffff":gt&&(P=X.COLORS.PATH_VISITED);const b=this.mapCursor.x===K&&this.mapCursor.y===C&&this.mapCursor.z===L;let j=P,dt=D;b&&(dt=.4+.6*(.5+.5*Math.sin(performance.now()/120)),j="#ffffff");const lt=(ht=>{const xt=ht.replace("#",""),wt=parseInt(xt,16),at=wt>>16&255,It=wt>>8&255,Nt=wt&255;return`${at}, ${It}, ${Nt}`})(j),_t=f*.25;e.save(),e.globalAlpha=dt;const pt=e.createLinearGradient(0,vt.y,0,mt.y);pt.addColorStop(0,`rgba(${lt}, 0.15)`),pt.addColorStop(.2,`rgba(${lt}, 0.65)`),pt.addColorStop(.5,`rgba(${lt}, 0.95)`),pt.addColorStop(.8,`rgba(${lt}, 0.65)`),pt.addColorStop(1,`rgba(${lt}, 0.15)`),e.beginPath(),e.moveTo(vt.x-_t,vt.y),e.lineTo(vt.x,vt.y+_t/2),e.lineTo(mt.x,mt.y+_t/2),e.lineTo(mt.x-_t,mt.y),e.closePath(),e.fillStyle=pt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(vt.x,vt.y+_t/2),e.lineTo(vt.x+_t,vt.y),e.lineTo(mt.x+_t,mt.y),e.lineTo(mt.x,mt.y+_t/2),e.closePath(),e.fillStyle=pt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.restore()}}},N=(L,D,W)=>{e.save(),e.globalAlpha=W;const C=Math.sin(performance.now()/200)*3-6,K=D+C;if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){const it=this.keyImage,nt=it.naturalWidth/it.naturalHeight,gt=c*.55;let vt=gt,mt=gt;nt>1?mt=gt/nt:vt=gt*nt,e.drawImage(it,L-vt/2,K-mt/2,vt,mt)}else e.beginPath(),e.moveTo(L,K-5),e.lineTo(L+4,K),e.lineTo(L,K+5),e.lineTo(L-4,K),e.closePath(),e.fillStyle="#ffd700",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();e.restore()},M=(L,D,W)=>{e.save(),e.globalAlpha=W;const C=Math.sin(performance.now()/250)*3-6,K=D+C;if(this.manaImage.complete&&this.manaImage.naturalWidth!==0){const it=this.manaImage,nt=it.naturalWidth/it.naturalHeight,gt=c*.55;let vt=gt,mt=gt;nt>1?mt=gt/nt:vt=gt*nt,e.shadowColor="rgba(0, 255, 255, 0.85)",e.shadowBlur=c*.25,e.shadowOffsetX=0,e.shadowOffsetY=0,e.drawImage(it,L-vt/2,K-mt/2,vt,mt)}else e.beginPath(),e.moveTo(L,K-5),e.lineTo(L+4,K),e.lineTo(L,K+5),e.lineTo(L-4,K),e.closePath(),e.fillStyle="#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();e.restore()},A=(L,D,W,C,K)=>{e.save(),e.globalAlpha=C;const it=Math.sin(performance.now()/250)*2-4,nt=D+it;if(K){e.save();const gt=1+.35*(.5+.5*Math.sin(performance.now()/100));e.beginPath(),e.arc(L,nt,7*gt,0,Math.PI*2),e.fillStyle="rgba(255, 255, 255, 0.4)",e.fill(),e.restore()}e.beginPath(),e.arc(L,nt,5,0,Math.PI*2),e.fillStyle=K?"#ffffff":W,e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.2,e.stroke(),e.restore()},G=(L,D,W)=>{if(this.statueImage&&this.statueImage.complete&&this.statueImage.naturalWidth!==0){e.save(),e.beginPath();const C=f*.7,K=p*.7;e.ellipse(L,D,C,K,0,0,Math.PI*2),e.fillStyle="rgba(0, 0, 0, 0.45)",e.fill(),e.restore(),e.save(),e.globalAlpha=W;const it=this.statueImage.width/this.statueImage.height,nt=c*.8,gt=nt/it;e.drawImage(this.statueImage,L-nt/2,D-gt,nt,gt),e.restore()}else _(L,D,f*.4,p*.4,u*.8,"#555555",W)},z=(L,D,W,C,K,it,nt,gt)=>{const vt=K*it;if(vt<=0)return;const mt=this.auraTime||0;e.save(),e.beginPath(),e.ellipse(L,D,W,C,0,0,Math.PI*2),e.fillStyle="rgba(0, 220, 255, 0.05)",e.fill(),e.lineWidth=1.5,e.strokeStyle=`rgba(0, 220, 255, ${nt*.4})`,e.stroke();const P=e.createLinearGradient(L,D,L,D-vt);P.addColorStop(0,`rgba(0, 220, 255, ${nt*.45})`),P.addColorStop(.3,`rgba(0, 200, 255, ${nt*.3})`),P.addColorStop(1,"rgba(0, 150, 255, 0.0)"),e.beginPath(),e.moveTo(L-W,D),e.lineTo(L-W,D-vt),e.ellipse(L,D-vt,W,C,0,Math.PI,0,!0),e.lineTo(L+W,D),e.ellipse(L,D,W,C,0,0,Math.PI,!1),e.fillStyle=P,e.fill();const b=e.createLinearGradient(L,D,L,D-vt);b.addColorStop(0,`rgba(0, 255, 255, ${nt*.7})`),b.addColorStop(1,"rgba(0, 255, 255, 0.0)"),e.strokeStyle=b,e.lineWidth=1.5,e.beginPath(),e.moveTo(L-W,D),e.lineTo(L-W,D-vt),e.moveTo(L+W,D),e.lineTo(L+W,D-vt),e.stroke();for(let dt=0;dt<3;dt++){const ut=(mt*.8+dt/3)%1*it,lt=D-K*ut;if(lt>D-vt){const _t=(1-ut)*nt*.6;e.beginPath(),e.ellipse(L,lt,W,C,0,0,Math.PI*2),e.strokeStyle=`rgba(0, 255, 255, ${_t})`,e.lineWidth=1,e.stroke()}}const j=(1-it*.3)*nt*.8;e.beginPath(),e.ellipse(L,D-vt,W,C,0,0,Math.PI*2),e.fillStyle=`rgba(0, 255, 255, ${j*.1})`,e.fill(),e.strokeStyle=`rgba(0, 255, 255, ${j})`,e.lineWidth=1.5,e.stroke(),e.restore()},q=(L,D,W)=>{e.save(),e.globalAlpha=W,e.beginPath(),e.ellipse(L,D+5,f*.18,p*.18,0,0,Math.PI*2),e.fillStyle="rgba(0, 0, 0, 0.35)",e.fill();const C=f*.22,K=e.createRadialGradient(L,D,1,L,D,C);K.addColorStop(0,"#ffffff"),K.addColorStop(.3,"#ff3333"),K.addColorStop(1,"rgba(255, 51, 51, 0)"),e.beginPath(),e.arc(L,D,C,0,Math.PI*2),e.fillStyle=K,e.fill(),e.restore()},R=(L,D,W,C=1,K=1)=>{const it=`${this.playerVertical}_${this.playerSide}`,nt=this.mageImages[it];let gt=W;this.deathAnimation&&this.deathAnimation.active&&(Math.floor(Date.now()/120)%2===0||(gt=.2));const vt=f*.55*C,mt=p*.55,P=L-f*.12,b=D-p*.12;if(e.save(),e.beginPath(),e.ellipse(P,b,vt,mt,0,0,Math.PI*2),e.fillStyle=`rgba(0, 0, 0, ${gt*.45})`,e.fill(),e.restore(),nt&&nt.complete){e.save(),e.globalAlpha=gt;const j=c*.7,dt=j,ut=j*(nt.height/nt.width);e.translate(L,D),e.scale(C,K);const lt=-ut;e.drawImage(nt,-dt/2,lt,dt,ut),e.restore()}else e.save(),e.globalAlpha=gt,e.translate(L,D),e.scale(C,K),e.beginPath(),e.arc(0,-3,5,0,Math.PI*2),e.fillStyle=X.COLORS.PLAYER,e.fill(),e.strokeStyle=X.COLORS.PLAYER_OUTLINE,e.lineWidth=1.5,e.stroke(),e.restore();if(this.deathAnimation&&this.deathAnimation.active){const j=Math.min(1,this.deathAnimation.delayElapsed/this.deathAnimation.delayDuration),dt=-(nt&&nt.complete?c*.7*(nt.height/nt.width):c*.5),ut=c*.7,lt=(1-j)*dt-4*ut*j*(1-j);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){e.save();const _t=this.keyImage,pt=_t.naturalWidth/_t.naturalHeight,ht=c*.55;let xt=ht,wt=ht;pt>1?wt=ht/pt:xt=ht*pt,e.drawImage(_t,L-xt/2,D-wt/2+lt,xt,wt),e.restore()}else e.save(),e.beginPath(),e.arc(L,D+lt,c*.15,0,2*Math.PI),e.fillStyle="#ffd700",e.fill(),e.restore()}if(X.SHOW_COLLISION_DEBUG){e.save();const j=X.PLAYER_COLLISION_OFFSET_X||0,dt=X.PLAYER_COLLISION_OFFSET_Y||0,ut=(j-dt)*f,lt=(j+dt)*p,_t=L+ut,pt=D+lt;e.beginPath(),e.moveTo(_t,pt-X.PLAYER_COLLISION_RADIUS*u),e.lineTo(_t+X.PLAYER_COLLISION_RADIUS*c,pt),e.lineTo(_t,pt+X.PLAYER_COLLISION_RADIUS*u),e.lineTo(_t-X.PLAYER_COLLISION_RADIUS*c,pt),e.closePath(),e.strokeStyle="#ff0000",e.lineWidth=1.5,e.stroke(),e.restore()}},B=(L,D,W,C)=>{if(L&&L.lowCanvas){e.save(),e.globalAlpha=C;const K=c*.9;e.save(),e.beginPath();const it=f*.6,nt=p*.6;e.ellipse(D,W,it,nt,0,0,Math.PI*2),e.fillStyle="rgba(0, 0, 0, 0.35)",e.fill(),e.restore();const gt=Math.sin(L.jellyTime*3)*(c*.06),vt=c*.38+gt,mt=W-vt,P=L.jellyTime,b=Math.sin(P)*6,j=Math.cos(P*.7)*4,dt=1+Math.sin(P*1.2)*.06,ut=1+Math.cos(P*.8)*.06,lt=b*Math.PI/180,_t=j*Math.PI/180;e.save(),e.translate(D,mt),e.transform(dt,Math.tan(_t),Math.tan(lt),ut,0,0),e.imageSmoothingEnabled=!1,e.drawImage(L.lowCanvas,-K/2,-K/2,K,K),e.restore(),e.restore()}else{e.save(),e.globalAlpha=C;const K=4+Math.sin(performance.now()/100)*1.5;e.beginPath(),e.arc(D,W-3,K,0,Math.PI*2),e.fillStyle=X.COLORS.HUNTER||"#ff00ff",e.fill(),e.strokeStyle="#ff0000",e.lineWidth=1,e.stroke(),e.restore()}},$=L=>{const D=Math.abs(L-o);return D<=2?1-D/2*(1-.35):D<4?.35*(1-(D-2)/2):0};for(let L=1;L<a;L+=2){if(L-1>=0&&(L-1===r-1||L-1===r+1)){const W=$(L-2),C=$(L),K=Math.max(W,C)*.8;K>.01&&S(L-1,K)}const D=$(L);D>.01&&(L===r&&d(D),x(L,D))}const V=this.getInteractiveElements(r);if(V.forEach(L=>{if(L.type==="shaft"){const D=h(L.x,L.y,L.z),W=this.mapCursor.x===L.x&&this.mapCursor.y===L.y&&this.mapCursor.z===L.z;e.save();const C=.5+.5*Math.sin(performance.now()/150);e.beginPath(),e.arc(D.x,D.y,7.5+C*2.5,0,Math.PI*2),e.fillStyle=W?"#ffffff":"#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke(),e.restore()}}),this.mapCursor.x===Math.floor(this.player.x)&&this.mapCursor.y===Math.floor(this.player.y)&&this.mapCursor.z===this.player.z||V.some(L=>L.x===this.mapCursor.x&&L.y===this.mapCursor.y&&L.z===this.mapCursor.z)){const L=h(this.mapCursor.x,this.mapCursor.y,this.mapCursor.z),D=Math.sin(performance.now()/150)*4;e.save();const W=1-D/16,C=h(this.mapCursor.x,this.mapCursor.y,r);e.translate(C.x,C.y),e.scale(1,.5),e.beginPath(),e.arc(0,0,8*W,0,Math.PI*2),e.fillStyle=`rgba(0, 0, 0, ${.55*W})`,e.fill(),e.restore(),e.save();const K=L.x,it=L.y-u-12+D;e.beginPath(),e.moveTo(K,it),e.lineTo(K-6,it-8),e.lineTo(K-3,it-8),e.lineTo(K-3,it-16),e.lineTo(K+3,it-16),e.lineTo(K+3,it-8),e.lineTo(K+6,it-8),e.closePath(),e.fillStyle="#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke(),e.restore()}const k=this.isTouchDevice?65:45,Y=n/3,Z=n/3*2,F=i-k;e.save(),e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=4,e.lineCap="round",e.beginPath(),e.moveTo(F,Y),e.lineTo(F,Z),e.stroke(),e.strokeStyle="rgba(0, 255, 255, 0.4)",e.lineWidth=1.5;for(let L=Y;L<=Z;L+=(Z-Y)/6)e.beginPath(),e.moveTo(F-5,L),e.lineTo(F+5,L),e.stroke();e.restore();const Q=(Y+Z)/2,st=(Z-Y)/2,yt=o-r,Ct=Q-yt/2*st;if(e.save(),e.fillStyle="#00ffff",e.beginPath(),e.arc(F,Ct,this.isTouchDevice?8:5,0,Math.PI*2),e.fill(),e.restore(),this.floorClickRects=[],[{floor:r+2,y:Y,label:`${(r+2+1)/2}F`,valid:r+2<=a-2},{floor:r,y:Q,label:`${(r+1)/2}F`,valid:!0},{floor:r-2,y:Z,label:`${(r-2+1)/2}F`,valid:r-2>=1}].forEach(L=>{if(!L.valid)return;const D=this.isTouchDevice,W=D?90:60,C=D?50:36,K=F-W-(D?20:15),it=L.y-C/2,nt=L.floor===r;e.save(),e.beginPath(),e.moveTo(K+6,it),e.lineTo(K+W,it),e.lineTo(K+W,it+C-6),e.lineTo(K+W-6,it+C),e.lineTo(K,it+C),e.lineTo(K,it+6),e.closePath(),e.fillStyle=nt?"rgba(0, 255, 255, 0.25)":"rgba(0, 0, 0, 0.6)",e.strokeStyle=nt?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=nt?2:1,e.fill(),e.stroke(),e.restore(),e.strokeStyle=nt?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=nt?2:1,e.beginPath(),e.moveTo(K+W,L.y),e.lineTo(F-2,L.y),e.stroke(),e.fillStyle=nt?"#00ffff":"rgba(255, 255, 255, 0.5)",e.font=D?'bold 12px "Courier New"':'bold 8px "Courier New"',e.textAlign="center",e.textBaseline="top",e.fillText("LEVEL",K+W/2,it+(D?8:6)),e.fillStyle="#ffffff",e.font=D?'bold 22px "Courier New"':'bold 15px "Courier New"',e.textBaseline="top",e.fillText(L.label,K+W/2,it+(D?22:16)),this.floorClickRects.push({floor:L.floor,x:K,y:it,w:W+(D?25:15),h:C})}),!this.isTeleportMode){const L=this.isTouchDevice,D=L?30:25,W=30,C=L?160:120,K=L?50:36;e.save(),e.beginPath(),e.moveTo(D+6,W),e.lineTo(D+C,W),e.lineTo(D+C,W+K-6),e.lineTo(D+C-6,W+K),e.lineTo(D,W+K),e.lineTo(D,W+6),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.7)",e.strokeStyle="rgba(0, 255, 255, 0.35)",e.lineWidth=1.5,e.fill(),e.stroke(),e.restore(),e.fillStyle="rgba(0, 255, 255, 0.7)",e.font=`bold ${L?11:8}px 'Roboto', sans-serif`,e.textAlign="center",e.textBaseline="top",e.fillText(Ot("hudPathfinders"),D+C/2,W+(L?8:5)),e.fillStyle="#ffffff",e.font=`bold ${L?18:13}px 'Roboto', sans-serif`,e.textBaseline="top",e.fillText(`${this.pathfindersRemaining} / ${this.totalPathfinders}`,D+C/2,W+(L?23:16))}if(this.isTeleportMode){const W=i/2-90,C=30;e.save(),e.beginPath(),e.moveTo(W+8,C),e.lineTo(W+180-8,C),e.lineTo(W+180,C+8),e.lineTo(W+180,C+38-8),e.lineTo(W+180-8,C+38),e.lineTo(W+8,C+38),e.lineTo(W,C+38-8),e.lineTo(W,C+8),e.closePath(),e.fillStyle="rgba(255, 140, 0, 0.22)",e.strokeStyle="#ff8c00",e.lineWidth=2.5,e.fill(),e.stroke(),e.restore(),e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Ot("teleportWarning"),i/2,C+38/2)}if(this.isTeleportMode){const L=this.allTeleports.length,D=this.isTouchDevice,W=D?72:56,C=D?16:10,K=D?24:15,it=D?38:25,nt=D?90:62,gt=D?46:30,vt=D?46:36,mt=!this.teleportConfirmModalActive,P=mt?vt+nt:0,b=i-40,j=(L-1)*W,dt=j+60+P,ut=D&&dt>b;let lt,_t,pt,ht;if(this.teleportDotsClickRects=[],ut){const xt=Math.ceil(L/2),wt=L-xt,at=(xt-1)*W,It=(wt-1)*W,Nt=Math.max(at,It);lt=Nt+60+P,_t=124,pt=n-145,ht=i/2-lt/2;const Dt=Nt,Pt=ht+30+(Dt-at)/2,bt=ht+30+(Dt-It)/2,I=pt+35,Mt=pt+89;if(e.save(),e.beginPath(),e.moveTo(ht+10,pt),e.lineTo(ht+lt-10,pt),e.lineTo(ht+lt,pt+10),e.lineTo(ht+lt,pt+_t-10),e.lineTo(ht+lt-10,pt+_t),e.lineTo(ht+10,pt+_t),e.lineTo(ht,pt+_t-10),e.lineTo(ht,pt+10),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.72)",e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=1.5,e.fill(),e.stroke(),e.restore(),this.allTeleports.forEach((Et,Tt)=>{const ft=Tt<xt,U=ft?Tt:Tt-xt,St=(ft?Pt:bt)+U*W,At=ft?I:Mt,Ut=`${Et.x},${Et.y},${Et.z}`,Gt=this.discoveredTeleports.has(Ut),Vt=Tt===this.selectedTeleportIndex,jt=Et.x===Math.floor(this.player.x)&&Et.y===Math.floor(this.player.y)&&Et.z===this.player.z,se=this.inactiveTeleportPos&&Et.x===this.inactiveTeleportPos.x&&Et.y===this.inactiveTeleportPos.y&&Et.z===this.inactiveTeleportPos.z;if(e.save(),!Gt)e.beginPath(),e.arc(St,At,C,0,Math.PI*2),e.fillStyle="rgba(100, 100, 100, 0.45)",e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.15)",e.stroke();else if(se)e.beginPath(),e.arc(St,At,C,0,Math.PI*2),e.fillStyle="rgba(255, 45, 0, 0.2)",e.fill(),e.strokeStyle="rgba(255, 45, 0, 0.4)",e.lineWidth=1.2,e.stroke();else{if(Vt){const ae=1+.3*(.5+.5*Math.sin(performance.now()/120)),Zt=(D?36:22)*ae;e.beginPath(),e.arc(St,At,Zt,0,Math.PI*2),e.fillStyle="rgba(0, 255, 255, 0.18)",e.fill()}e.beginPath(),e.arc(St,At,Vt?K:C,0,Math.PI*2),e.fillStyle=Vt?"#ffffff":"#00b3ff",e.fill(),e.strokeStyle=Vt?"#00ffff":"#ffffff",e.lineWidth=Vt?2:1,e.stroke(),jt&&(e.beginPath(),e.arc(St,At,Vt?D?12:8:D?8:5,0,Math.PI*2),e.fillStyle="#39ff14",e.fill())}e.restore(),this.teleportDotsClickRects.push({x:St-it,y:At-it,w:it*2,h:it*2,index:Tt})}),mt){const Et=ht+30+Dt+vt,Tt=pt+_t/2-gt/2;e.save(),e.beginPath(),e.roundRect?e.roundRect(Et,Tt,nt,gt,6):e.rect&&e.rect(Et,Tt,nt,gt),e.fillStyle="rgba(0, 255, 255, 0.15)",e.strokeStyle="#00ffff",e.lineWidth=2,e.fill(),e.stroke(),e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Ot("teleportGo"),Et+nt/2,Tt+gt/2),e.restore(),this.teleportGoBtnClickRect={x:Et,y:Tt,w:nt,h:gt}}else this.teleportGoBtnClickRect=null}else{const xt=n-(D?70:60);lt=j+60+P,_t=D?86:62,pt=xt-_t/2,ht=i/2-lt/2;const wt=ht+30;if(e.save(),e.beginPath(),e.moveTo(ht+6,pt),e.lineTo(ht+lt-6,pt),e.lineTo(ht+lt,pt+6),e.lineTo(ht+lt,pt+_t-6),e.lineTo(ht+lt-6,pt+_t),e.lineTo(ht+6,pt+_t),e.lineTo(ht,pt+_t-6),e.lineTo(ht,pt+6),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.72)",e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=1,e.fill(),e.stroke(),e.restore(),this.allTeleports.forEach((at,It)=>{const Nt=wt+It*W,Dt=`${at.x},${at.y},${at.z}`,Pt=this.discoveredTeleports.has(Dt),bt=It===this.selectedTeleportIndex,I=at.x===Math.floor(this.player.x)&&at.y===Math.floor(this.player.y)&&at.z===this.player.z,Mt=this.inactiveTeleportPos&&at.x===this.inactiveTeleportPos.x&&at.y===this.inactiveTeleportPos.y&&at.z===this.inactiveTeleportPos.z;if(e.save(),!Pt)e.beginPath(),e.arc(Nt,xt,C,0,Math.PI*2),e.fillStyle="rgba(100, 100, 100, 0.45)",e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.15)",e.stroke();else if(Mt)e.beginPath(),e.arc(Nt,xt,C,0,Math.PI*2),e.fillStyle="rgba(255, 45, 0, 0.2)",e.fill(),e.strokeStyle="rgba(255, 45, 0, 0.4)",e.lineWidth=1.2,e.stroke();else{if(bt){const Et=1+.3*(.5+.5*Math.sin(performance.now()/120)),Tt=(D?36:22)*Et;e.beginPath(),e.arc(Nt,xt,Tt,0,Math.PI*2),e.fillStyle="rgba(0, 255, 255, 0.18)",e.fill()}e.beginPath(),e.arc(Nt,xt,bt?K:C,0,Math.PI*2),e.fillStyle=bt?"#ffffff":"#00b3ff",e.fill(),e.strokeStyle=bt?"#00ffff":"#ffffff",e.lineWidth=bt?2:1,e.stroke(),I&&(e.beginPath(),e.arc(Nt,xt,bt?D?12:8:D?8:5,0,Math.PI*2),e.fillStyle="#39ff14",e.fill())}e.restore(),this.teleportDotsClickRects.push({x:Nt-it,y:xt-it,w:it*2,h:it*2,index:It})}),mt){const at=wt+j+vt,It=xt-gt/2;e.save(),e.beginPath(),e.rect(at,It,nt,gt),e.fillStyle="rgba(0, 255, 255, 0.15)",e.strokeStyle="#00ffff",e.lineWidth=1.5,e.fill(),e.stroke(),e.fillStyle="#ffffff",e.font=`bold ${D?15:12}px 'Roboto', sans-serif`,e.textAlign="center",e.textBaseline="middle",e.fillText(Ot("teleportGo"),at+nt/2,It+gt/2),e.restore(),this.teleportGoBtnClickRect={x:at,y:It,w:nt,h:gt}}else this.teleportGoBtnClickRect=null}if(this.teleportConfirmModalActive){e.fillStyle="rgba(0, 0, 0, 0.6)",e.fillRect(0,0,i,n);const xt=320,wt=160,at=i/2-xt/2,It=n/2-wt/2;e.save(),e.beginPath(),e.moveTo(at+10,It),e.lineTo(at+xt-10,It),e.lineTo(at+xt,It+10),e.lineTo(at+xt,It+wt-10),e.lineTo(at+xt-10,It+wt),e.lineTo(at+10,It+wt),e.lineTo(at,It+wt-10),e.lineTo(at,It+10),e.closePath(),e.fillStyle="rgba(10, 18, 30, 0.94)",e.strokeStyle="#00ffff",e.lineWidth=2,e.fill(),e.stroke(),e.restore(),e.fillStyle="#00ffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="top",e.fillText(Ot("teleportationLink"),i/2,It+16),e.strokeStyle="rgba(0, 255, 255, 0.2)",e.lineWidth=1,e.beginPath(),e.moveTo(at+15,It+34),e.lineTo(at+xt-15,It+34),e.stroke();const Nt=this.allTeleports[this.selectedTeleportIndex];e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.fillText(Ot("teleportJumpSector",{floor:(Nt.z+1)/2}),i/2,It+52),e.fillStyle="rgba(255, 255, 255, 0.7)",e.font="13px 'Roboto', sans-serif",e.fillText(Ot("teleportTargetGrid",{x:Nt.x,y:Nt.y}),i/2,It+75);const Dt=100,Pt=30,bt=i/2-Dt-15,I=It+105,Mt=i/2+15,Et=It+105;this.teleportModalClickRects=[{x:bt,y:I,w:Dt,h:Pt,selection:"go"},{x:Mt,y:Et,w:Dt,h:Pt,selection:"cancel"}];const Tt=(ft,U,St,At)=>{const Ut=this.teleportModalSelection===At;e.save(),e.beginPath(),e.moveTo(ft+4,U),e.lineTo(ft+Dt-4,U),e.lineTo(ft+Dt,U+4),e.lineTo(ft+Dt,U+Pt-4),e.lineTo(ft+Dt-4,U+Pt),e.lineTo(ft+4,U+Pt),e.lineTo(ft,U+Pt-4),e.lineTo(ft,U+4),e.closePath(),e.fillStyle=Ut?"rgba(0, 255, 255, 0.35)":"rgba(0, 0, 0, 0.6)",e.strokeStyle=Ut?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=Ut?2:1,e.fill(),e.stroke(),e.restore(),e.fillStyle=Ut?"#ffffff":"#00ffff",e.font="bold 13px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(St,ft+Dt/2,U+Pt/2)};Tt(bt,I,Ot("teleportGo"),"go"),Tt(Mt,Et,Ot("teleportCancel"),"cancel")}}}getFloorVisitedPercentage(t){let e=0,i=0;const n=this.mazeGen.size,a=this.mazeGen.TYPES;for(let r=0;r<n;r++)for(let o=0;o<n;o++){const l=this.maze.get(r,o,t);if(l===a.WALL||l===a.EXIT||l===a.STATUE||l===a.TELEPORT&&!this.discoveredTeleports.has(`${r},${o},${t}`))continue;e++,(l===a.VISITED||l===a.START||l===a.ELEVATOR_VISITED||l===a.TELEPORT&&this.discoveredTeleports.has(`${r},${o},${t}`)||l===a.JELLY_PORTAL)&&i++}return e===0?0:Math.floor(i/e*100)}triggerFloorCompletion(t){if(this.completedFloors.has(t))return;let e=0,i=0;const n=this.mazeGen.size,a=this.mazeGen.TYPES;for(let m=0;m<n;m++)for(let T=0;T<n;T++){const y=this.maze.get(m,T,t);y===a.STATUE&&i++,(y===a.VISITED||y===a.START||y===a.ELEVATOR_VISITED||y===a.TELEPORT&&this.discoveredTeleports.has(`${m},${T},${t}`)||y===a.JELLY_PORTAL)&&e++}const r=Math.floor(this.player.x),o=Math.floor(this.player.y),l=new Set,c=[[r,o]];l.add(`${r},${o}`);const u=new Set,f=new Set;for(u.add(r),f.add(o);c.length>0;){const[m,T]=c.shift(),y=[[m+1,T],[m-1,T],[m,T+1],[m,T-1]];for(const[h,d]of y)if(h>=0&&h<n&&d>=0&&d<n){const _=`${h},${d}`;if(!l.has(_)){const g=this.maze.get(h,d,t);g!==a.WALL&&g!==a.EXIT&&g!==a.STATUE&&(g!==a.TELEPORT||this.discoveredTeleports.has(`${h},${d},${t}`))&&(l.add(_),u.add(h),f.add(d),c.push([h,d]))}}}const p=u.size>=2&&f.size>=2;if(e>X.JELLY_CHALLENGE_MIN_FREE_CELLS&&i>=1&&!this.isSafeMode&&p){this.isJellyChallengeActive=!0,this.completedFloors.add(t),this.previouslyDeadHuntersInfo=this.hunters.filter(m=>m.state==="DEAD_BY_JELLY").map(m=>({threshold:m.respawnThresholdPercentage||0})),this.hunterMeshes.forEach(m=>{this.scene.remove(m.mesh),m.trail1&&this.scene.remove(m.trail1),m.trail2&&this.scene.remove(m.trail2)}),this.hunterMeshes=[],this.hunters=[],this.dyingHunters=[],this.ui.showInfoBanner(Ot("msgLockedIn")),this.jellyStatueStates.clear();for(let m=0;m<n;m++)for(let T=0;T<n;T++)if(this.maze.get(m,T,t)===a.STATUE){const h=.5+Math.random()*2.5;this.jellyStatueStates.set(`${m},${T},${t}`,{shotsFired:0,state:"IDLE",chargeTimer:h,initialDelay:h})}}else this.completedFloors.add(t),this.ui.showInfoBanner(Ot("msgFloorComplete"))}updateJellyChallenge(t){const e=this.mazeGen.size;for(let a=this.jellyProjectiles.length-1;a>=0;a--){const r=this.jellyProjectiles[a];if(r.x+=r.dirX*X.JELLY_PROJECTILE_SPEED*t,r.y+=r.dirY*X.JELLY_PROJECTILE_SPEED*t,r.threeMesh&&r.threeMesh.position.set(r.x-e/2,(r.z-e/2)*this.vScale,r.y-e/2),r.z===this.player.z&&!this.isGameOver){const u=r.x-this.player.x,f=r.y-this.player.y;Math.sqrt(u*u+f*f)<.4&&this.triggerDeath()}const o=Math.floor(r.x),l=Math.floor(r.y);(o<0||o>=e||l<0||l>=e)&&(r.threeMesh&&(this.scene.remove(r.threeMesh),r.threeMesh.geometry&&r.threeMesh.geometry.dispose(),r.threeMesh.material&&r.threeMesh.material.dispose()),this.jellyProjectiles.splice(a,1))}if(!this.isJellyChallengeActive)return;this.staticMapCacheDirty=!0;let i=0,n=0;for(const[a,r]of this.jellyStatueStates.entries()){i++;const o=a.split(",").map(Number),l=o[0],c=o[1],u=o[2];if(r.shotsFired>=2){n++;continue}if(r.state==="IDLE")r.chargeTimer-=t,r.chargeTimer<=0&&(r.state="CHARGING",r.chargeTimer=X.JELLY_STATUE_CHARGE_TIME);else if(r.state==="CHARGING"&&(r.chargeTimer-=t,r.chargeTimer<=0)){const f=this.player.x,p=this.player.y,m=f-(l+.5),T=p-(c+.5),y=Math.sqrt(m*m+T*T);let h=0,d=0;y>.001?(h=m/y,d=T/y):(h=1,d=0);const _=l+.5,g=c+.5;let v=null;if(this.scene){const E=new rn(.12,16,16),x=new Pn({color:X.COLORS.THREE_JELLY_PROJECTILE});v=new Qt(E,x),v.position.set(_-e/2,(u-e/2)*this.vScale,g-e/2),this.scene.add(v)}this.jellyProjectiles.push({x:_,y:g,z:u,dirX:h,dirY:d,threeMesh:v}),r.shotsFired++,r.shotsFired>=2?(r.state="COOLDOWN",r.chargeTimer=0):(r.state="IDLE",r.chargeTimer=.5+Math.random()*1.5)}}n===i&&this.jellyProjectiles.length===0&&this.endJellyChallenge()}endJellyChallenge(){if(this.isJellyChallengeActive=!1,!this.isSafeMode){this.hunters=[],this.initHunters(this.degree);for(let t=0;t<this.previouslyDeadHuntersInfo.length&&t<this.hunters.length;t++){const e=this.hunters[t];e.state="DEAD_BY_JELLY",e.respawnThresholdPercentage=this.previouslyDeadHuntersInfo[t].threshold,e.x=null,e.y=null,e.z=null,e.visualX=null,e.visualY=null,e.visualZ=null}}this.ui.showInfoBanner(Ot("msgFloorComplete"))}}function Pr(s,t,e){const i=s.slice();return i[13]=t[e],i[15]=e,i}function Cr(s){let t,e,i,n,a=(s[13].title[s[0]]||s[13].title.en)+"",r,o,l,c;function u(){return s[2](s[13])}return{c(){t=_e("button"),e=_e("span"),e.textContent=`${s[15]+1}.`,i=Ne(),n=_e("span"),r=Lr(a),o=Ne(),ie(e,"class","tut-num"),ie(n,"class","tut-title"),ie(t,"class","tutorial-item-btn"),ie(t,"data-stage-id",s[13].id)},m(f,p){ue(f,t,p),Ye(t,e),Ye(t,i),Ye(t,n),Ye(n,r),Ye(t,o),l||(c=Al(t,"click",u),l=!0)},p(f,p){s=f,p&1&&a!==(a=(s[13].title[s[0]]||s[13].title.en)+"")&&Cl(r,a)},d(f){f&&ce(t),l=!1,c()}}}function vm(s){let t,e,i,n,a,r,o,l,c,u,f,p,m,T,y,h,d,_,g,v,E,x,S,N,M,A=$a(Di),G=[];for(let z=0;z<A.length;z+=1)G[z]=Cr(Pr(s,A,z));return{c(){t=_e("section"),t.innerHTML='<div class="menu-content"><header><h1 class="game-title" data-i18n="gameTitle">VOID ESCAPE</h1></header> <div class="menu-stats-grid"><div class="stat-container hunter"><div class="stat-label" data-i18n="activeHunters">Active Hunters</div> <div class="stat-value" id="hunter-count">-</div></div> <div class="stat-container teleport"><div class="stat-label" data-i18n="activeTeleports">Active Teleports</div> <div class="stat-value" id="teleport-count">-</div></div> <div class="stat-container keys"><div class="stat-label" data-i18n="activeKeys">Active Keys</div> <div class="stat-value" id="keys-count">-</div></div> <div class="stat-container pathfinder"><div class="stat-label" data-i18n="availablePathfinders">Available Pathfinders</div> <div class="stat-value" id="pathfinder-count">-</div></div></div> <div class="control-group"><div class="degree-full-row"><span class="degree-label" data-i18n="mazeDegree">Maze Degree</span> <span class="degree-value" id="degree-val">-</span></div> <input type="range" id="maze-degree" aria-label="Ajustar Grau do Labirinto"/> <p class="hint" data-i18n="degreeHint">Controls the grid size. Higher values create larger, more complex mazes.</p></div> <div class="control-group switch-group"><div class="switch-container"><span class="switch-label" data-i18n="safeMode">Safe Mode</span> <label class="switch" for="safe-mode"><input type="checkbox" id="safe-mode" aria-label="Safe Mode"/> <span class="slider"></span></label></div> <p class="hint" data-i18n="safeModeHint">When active, no hunters will spawn in the maze.</p></div> <div class="menu-tutorials-row"><button id="tutorials-btn-menu" class="tutorials-btn" data-i18n="tutorialsMenu">TUTORIALS</button></div> <div class="menu-action-btns"><button id="start-btn" data-i18n="generateMaze">NEW GAME</button> <button id="continue-btn-menu" class="continue-btn" style="display:none" data-i18n="continue">CONTINUE</button></div> <p class="game-credits" data-i18n="gameCredits">a game by Bernard Rodrigues</p></div>',e=Ne(),i=_e("section"),n=_e("div"),a=_e("header"),a.innerHTML='<h1 class="game-title" data-i18n="tutorialsTitle">TUTORIALS</h1>',r=Ne(),o=_e("div");for(let z=0;z<G.length;z+=1)G[z].c();l=Ne(),c=_e("div"),c.innerHTML='<button id="back-to-menu-btn" data-i18n="back">BACK</button>',u=Ne(),f=_e("div"),f.innerHTML='<div class="modal-overlay"></div> <div class="modal-container"><h2 id="tut-modal-title">-</h2> <p id="tut-modal-description">-</p> <div class="modal-buttons"><button id="tut-modal-start-btn" class="modal-confirm-btn" data-i18n="start">START</button> <button id="tut-modal-cancel-btn" class="modal-cancel-btn" data-i18n="cancel">CANCEL</button></div></div>',p=Ne(),m=_e("div"),m.innerHTML='<div class="modal-overlay"></div> <div class="modal-container"><h2 data-i18n="pathfinderConfirmTitle">Use Pathfinder?</h2> <p data-i18n="pathfinderConfirmDesc">This will consume 1 Pathfinder charge to reveal the shortest route.</p> <div class="modal-buttons"><button id="pathfinder-modal-confirm-btn" class="modal-confirm-btn" data-i18n="confirm">CONFIRM</button> <button id="pathfinder-modal-cancel-btn" class="modal-cancel-btn" data-i18n="cancel">CANCEL</button></div></div>',T=Ne(),y=_e("section"),y.innerHTML='<div class="story-container"><div id="story-image-canvas" class="story-image-box"><div id="story-image-loader" class="story-loader hidden"><div class="spinner"></div> <span data-i18n="loading">LOADING...</span></div> <img id="story-img" src="" alt="Story Image" style="display: none; max-width: 100%; max-height: 100%;"/></div> <div id="story-dialogue" class="story-dialogue-box"><span id="story-text"></span> <span id="story-arrow" class="story-arrow hidden">▼</span></div> <div class="story-actions"><button id="story-skip-btn">SKIP</button></div></div>',h=Ne(),d=_e("section"),d.innerHTML='<div class="popup-container victory"><h1 data-i18n="victoryTitle">Mission Accomplished</h1> <p data-i18n="victoryText">You have successfully navigated the 3D void.</p> <p class="victory-stats"><span data-i18n="mapCompletion">MAP COMPLETION</span>: <span id="victory-completion-rate">0%</span></p> <p class="victory-stats"><span data-i18n="victoryDeaths">DEATHS</span>: <span id="victory-deaths-count">0</span></p> <p class="victory-stats"><span data-i18n="victoryDegree">MAZE DEGREE</span>: <span id="victory-maze-degree">0</span></p> <p class="victory-stats"><span data-i18n="victoryTime">COMPLETION TIME</span>: <span id="victory-completion-time">00:00</span></p> <p class="victory-stats"><span data-i18n="victoryMana">MANA COLLECTED</span>: <span id="victory-mana-count">0/0</span></p> <div class="end-game-btns"><button id="next-tut-btn-victory" class="end-btn hidden" data-i18n="nextTutorial">NEXT TUTORIAL</button> <button id="restart-btn-victory" class="end-btn" data-i18n="playAgain">PLAY AGAIN</button> <button id="menu-btn-victory" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',_=Ne(),g=_e("section"),g.innerHTML='<div class="popup-container pause"><h1 data-i18n="pauseTitle">PAUSED</h1> <div class="end-game-btns"><button id="resume-btn" class="end-btn continue-highlight" data-i18n="resume">RESUME</button> <button id="menu-btn-pause" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',v=Ne(),E=_e("div"),E.innerHTML='<span class="saving-icon">💾</span> <span data-i18n="saving">SAVING...</span>',x=Ne(),S=_e("main"),S.innerHTML='<button id="mobile-pause-btn" class="hidden" aria-label="Pause Game">✕</button> <button id="mobile-teleport-exit-btn" class="hidden" aria-label="Exit Teleport Map">✕</button> <div id="left-hud-panel" class="intro-hidden"><div class="hud-item-group"><div class="keys-title" data-i18n="hudKeys">KEYS</div> <div class="keys-counter"><span id="keys-collected-count">0</span> / <span id="keys-total-count">0</span></div> <div id="keys-list-container"></div></div> <div class="hud-item-group" id="pathfinder-hud-group"><div class="pathfinders-title" data-i18n="hudPathfinders">PATHFINDERS</div> <div class="pathfinders-counter"><span id="pathfinders-remaining-count">0</span> / <span id="pathfinders-total-count">0</span></div></div></div> <div id="map-area-container" class="intro-hidden"><div id="desktop-hud-row"><div id="mana-counter-desktop" class="mana-panel-hud"><span class="mana-icon">✨</span> <span class="mana-label" data-i18n="hudMana">MANA:</span> <span id="mana-collected-count-desktop">0</span>/<span id="mana-total-count-desktop">0</span></div> <div id="hunter-status-panel"><span class="status-label" data-i18n="statusLabel">HUNTER STATUS:</span> <div class="status-marquee-container"><span id="hunter-status-val" class="status-marquee-text status--scanning" data-i18n="statusScanning">SCANNING</span></div></div> <div id="jelly-portal-counter-desktop" class="jelly-portal-panel-hud"><div class="jelly-balls-container"><span class="jelly-ball gold-ball-1"></span> <span class="jelly-ball gold-ball-2"></span></div> <span class="jelly-portal-count-label">x<span id="jelly-portal-count-desktop">0</span></span></div></div> <div style="position: relative; display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 90vw; margin-bottom: calc(var(--h-unit) * 2); margin-bottom: calc(var(--d-h-unit) * 2);"><canvas id="main-2d-canvas" aria-label="2D Navigation Map" style="margin-bottom: 0;"></canvas> <button id="mobile-jelly-portal-btn" aria-label="Jelly God Portal"><svg class="jelly-portal-spiral" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M12 12a1 1 0 0 1 1 1c0 1.1-.9 2-2 2a3 3 0 0 1-3-3c0-2.2 1.8-4 4-4a5 5 0 0 1 5 5c0 3.3-2.7 6-6 6a7 7 0 0 1-7-7c0-4.4 3.6-8 8-8a9 9 0 0 1 9 9"></path></svg></button> <button id="mobile-zoom-btn" aria-label="Toggle Zoom"><svg id="zoom-out-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;"><circle cx="11" cy="11" r="6"></circle><line x1="21" y1="21" x2="15.5" y2="15.5"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg> <svg id="zoom-in-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;" class="hidden"><circle cx="11" cy="11" r="6"></circle><line x1="21" y1="21" x2="15.5" y2="15.5"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg></button></div> <div id="mobile-proximeter-row"><div id="mana-counter-mobile" class="mana-panel-hud"><span class="mana-icon">✨</span> <span class="mana-label" data-i18n="hudMana">MANA:</span> <span id="mana-collected-count-mobile">0</span>/<span id="mana-total-count-mobile">0</span></div> <div id="proximeter-container" class="hidden"><div class="proximeter-label" data-i18n="proximityDetector">PROXIMITY DETECTOR</div> <div class="proximeter-bar"><span class="proximeter-cell" data-index="1"></span> <span class="proximeter-cell" data-index="2"></span> <span class="proximeter-cell" data-index="3"></span> <span class="proximeter-cell" data-index="4"></span> <span class="proximeter-cell" data-index="5"></span> <span class="proximeter-cell" data-index="6"></span> <span class="proximeter-cell" data-index="7"></span> <span class="proximeter-cell" data-index="8"></span> <span class="proximeter-cell" data-index="9"></span> <span class="proximeter-cell" data-index="10"></span></div></div> <div id="jelly-portal-counter-mobile" class="jelly-portal-panel-hud"><div class="jelly-balls-container"><span class="jelly-ball gold-ball-1"></span> <span class="jelly-ball gold-ball-2"></span></div> <span class="jelly-portal-count-label">x<span id="jelly-portal-count-mobile">0</span></span></div></div> <div id="bottom-hud-container" class="intro-hidden"><div id="floor-display" aria-live="polite"><span class="hud-label" data-i18n="hudFloor">Floor</span> <span id="current-floor">0</span></div> <div id="visited-display" aria-live="polite"><span class="hud-label" data-i18n="hudVisited">Visited</span> <span class="visited-value"><span id="visited-percent">0</span>%</span></div></div></div> <div id="right-hud-panel" class="intro-hidden"><aside id="map-legend"><h3 data-i18n="mapLegendTitle">MAP LEGEND</h3> <div class="legend-item"><span class="color-box color-box--visited"></span> <span data-i18n="legendVisited">Visited Path</span></div> <div class="legend-item"><span class="color-box color-box--known"></span> <span data-i18n="legendKnown">Known Path</span></div> <div class="legend-item"><span class="color-box color-box--start"></span> <span data-i18n="legendStart">Starting Point</span></div> <div class="legend-item"><span class="color-box color-box--exit"></span> <span data-i18n="legendExit">Maze Exit</span></div> <div id="legend-hunter" class="legend-item"><span class="color-box color-box--hunter"></span> <span data-i18n="legendHunter">Void Hunter</span></div> <div class="legend-item"><span class="color-box color-box--teleport"></span> <span data-i18n="legendTeleport">Teleport</span></div> <div class="legend-item"><span class="symbol-box"><svg viewBox="0 0 24 24" fill="none" style="width: 100%; height: 100%;"><path d="M12 2L5 9H9V11H15V9H19L12 2Z" fill="#00ffff"></path><path d="M12 22L19 15H15V13H9V15H5L12 22Z" fill="#ff00ff"></path></svg></span> <span data-i18n="legendElevator">Elevator</span></div></aside> <aside id="controls-hint"><h3 data-i18n="controlsHintTitle">CONTROLS HINT</h3> <div id="controls-hint-content"></div></aside></div> <nav id="mobile-controls" class="hidden"><button id="mobile-down" class="mobile-btn" disabled="" aria-label="Go Down">▼</button> <button id="mobile-map" class="mobile-btn" disabled="" aria-label="Open Map" data-i18n="map">MAP</button> <button id="mobile-up" class="mobile-btn" disabled="" aria-label="Go Up">▲</button></nav> <div id="map3d-container" class="hidden"></div>',N=Ne(),M=_e("section"),M.innerHTML='<div class="story-loader"><div class="spinner"></div> <span data-i18n="generatingMaze">GENERATING MAZE...</span></div>',ie(t,"id","start-menu"),ie(o,"class","tutorials-list"),ie(c,"class","menu-action-btns"),ie(n,"class","menu-content"),ie(i,"id","tutorials-menu"),ie(i,"class","hidden"),ie(f,"id","tutorial-instructions-modal"),ie(f,"class","hidden"),ie(m,"id","pathfinder-confirm-modal"),ie(m,"class","hidden"),ie(y,"id","story-screen"),ie(y,"class","hidden"),ie(d,"id","victory-screen"),ie(d,"class","hidden"),ie(g,"id","pause-screen"),ie(g,"class","hidden"),ie(E,"id","saving-indicator"),ie(E,"class","hidden"),ie(S,"id","game-container"),ie(M,"id","loading-screen"),ie(M,"class","hidden")},m(z,q){ue(z,t,q),ue(z,e,q),ue(z,i,q),Ye(i,n),Ye(n,a),Ye(n,r),Ye(n,o);for(let R=0;R<G.length;R+=1)G[R]&&G[R].m(o,null);Ye(n,l),Ye(n,c),ue(z,u,q),ue(z,f,q),ue(z,p,q),ue(z,m,q),ue(z,T,q),ue(z,y,q),ue(z,h,q),ue(z,d,q),ue(z,_,q),ue(z,g,q),ue(z,v,q),ue(z,E,q),ue(z,x,q),ue(z,S,q),ue(z,N,q),ue(z,M,q)},p(z,[q]){if(q&3){A=$a(Di);let R;for(R=0;R<A.length;R+=1){const B=Pr(z,A,R);G[R]?G[R].p(B,q):(G[R]=Cr(B),G[R].c(),G[R].m(o,null))}for(;R<G.length;R+=1)G[R].d(1);G.length=A.length}},i:wn,o:wn,d(z){z&&(ce(t),ce(e),ce(i),ce(u),ce(f),ce(p),ce(m),ce(T),ce(y),ce(h),ce(d),ce(_),ce(g),ce(v),ce(E),ce(x),ce(S),ce(N),ce(M)),bl(G,z)}}}function ym(s,t,e){let i=null,n="en",a=[],r=-1;function o(){const h=Array.from(document.querySelectorAll('section:not(.hidden), div[id$="-modal"]:not(.hidden), div[id$="-screen"]:not(.hidden)'));if(h.length===0){a=[],r=-1;return}const d=h[h.length-1];a=Array.from(d.querySelectorAll('button, input:not([type="hidden"])')),a=a.filter(v=>{const E=window.getComputedStyle(v);return E.display!=="none"&&E.visibility!=="hidden"&&!v.disabled});const _=document.activeElement,g=a.indexOf(_);g!==-1?r=g:r=-1}function l(h){o(),a.length!==0&&(r===-1?r=h>0?0:a.length-1:r=(r+h+a.length)%a.length,a[r].focus())}function c(h){var _,g,v;i&&i.destroy(),ml(),(_=document.getElementById("start-menu"))==null||_.classList.add("hidden"),(g=document.getElementById("victory-screen"))==null||g.classList.add("hidden"),(v=document.getElementById("game-over-screen"))==null||v.classList.add("hidden");const d=document.getElementById("loading-screen");d&&(d.classList.remove("hidden"),xn()),setTimeout(()=>{try{i=new ca(h,X.BRANCHING_FACTOR)}finally{d&&d.classList.add("hidden")}},50)}let u=null;function f(h){var v;u=h;const d=Sr(),_=document.getElementById("tut-modal-title"),g=document.getElementById("tut-modal-description");if(_&&(_.innerText=h.title[d]||h.title.en),g){const E=h.description[d]||h.description.en;g.innerHTML=cm(E,h.images),g.scrollTop=0}(v=document.getElementById("tutorial-instructions-modal"))==null||v.classList.remove("hidden")}function p(h){var _,g,v,E;i&&i.destroy(),(_=document.getElementById("tutorial-instructions-modal"))==null||_.classList.add("hidden"),(g=document.getElementById("tutorials-menu"))==null||g.classList.add("hidden"),(v=document.getElementById("victory-screen"))==null||v.classList.add("hidden"),(E=document.getElementById("game-over-screen"))==null||E.classList.add("hidden");const d=document.getElementById("loading-screen");d&&(d.classList.remove("hidden"),xn()),setTimeout(()=>{try{i=new ca(h.degree||3,X.BRANCHING_FACTOR,null,h)}finally{d&&d.classList.add("hidden")}},50)}function m(){var _,g,v;const h=pl();if(!h)return;i&&i.destroy(),(_=document.getElementById("start-menu"))==null||_.classList.add("hidden"),(g=document.getElementById("victory-screen"))==null||g.classList.add("hidden"),(v=document.getElementById("game-over-screen"))==null||v.classList.add("hidden");const d=document.getElementById("loading-screen");d&&(d.classList.remove("hidden"),xn()),setTimeout(()=>{try{i=new ca(h.degree,h.branchingFactor,h)}finally{d&&d.classList.add("hidden")}},50)}function T(){var d,_,g;i&&i.destroy(),(d=document.getElementById("victory-screen"))==null||d.classList.add("hidden"),(_=document.getElementById("game-over-screen"))==null||_.classList.add("hidden");const h=document.getElementById("continue-btn-menu");h&&(h.style.display=Ar()?"":"none"),(g=document.getElementById("start-menu"))==null||g.classList.remove("hidden")}return Rl(()=>{xn();const h=document.getElementById("maze-degree"),d=document.getElementById("degree-val"),_=document.getElementById("hunter-count"),g=document.getElementById("teleport-count"),v=document.getElementById("keys-count"),E=document.getElementById("pathfinder-count"),x=document.getElementById("safe-mode"),S=vt=>{const P=x&&x.checked?0:X.getHunterCount(vt);_&&(_.innerText=String(P),_.style.color=P>0?"#f00":"#88ccff")};x&&h&&(x.onchange=()=>{S(parseInt(h.value))});const N=vt=>{const mt=X.getTeleportCount(vt);g&&(g.innerText=String(mt))},M=vt=>{const mt=X.getHunterCount(vt)*2;v&&(v.innerText=String(mt))},A=vt=>{const mt=X.getPathfinderCount(vt);E&&(E.innerText=String(mt))};if(h){X.MIN_MAZE_DEGREE!==void 0&&(h.min=String(X.MIN_MAZE_DEGREE)),X.MAX_MAZE_DEGREE!==void 0&&(h.max=String(X.MAX_MAZE_DEGREE)),X.MAZE_DEGREE!==void 0&&(h.value=String(X.MAZE_DEGREE)),h.oninput=()=>{const mt=parseInt(h.value);d&&(d.innerText=String(mt)),S(mt),N(mt),M(mt),A(mt)};const vt=parseInt(h.value);d&&(d.innerText=String(vt)),S(vt),N(vt),M(vt),A(vt)}const G=document.getElementById("continue-btn-menu");G&&(G.style.display=Ar()?"":"none");const z=document.getElementById("mobile-pause-btn");z&&(z.onclick=vt=>{vt.stopPropagation(),i&&i.togglePause()});const q=document.getElementById("mobile-teleport-exit-btn");q&&(q.onclick=vt=>{vt.stopPropagation(),i&&i.isTeleportMode&&i.toggleTeleportMap(!1)});const R=document.getElementById("mobile-jelly-portal-btn");R&&(R.onclick=vt=>{vt.stopPropagation(),i&&i.tryActivateJellyPortal()});const B=document.getElementById("start-btn");B&&h&&(B.onclick=()=>{c(parseInt(h.value))});const $=document.getElementById("restart-btn-victory");$&&h&&($.onclick=()=>{i&&i.isTutorialMode&&i.currentTutorialStage?p(i.currentTutorialStage):c(parseInt(h.value))});const V=document.getElementById("continue-btn-menu");V&&(V.onclick=()=>{m()});const H=document.getElementById("menu-btn-victory");H&&(H.onclick=()=>{var vt,mt;i&&i.isTutorialMode?((vt=document.getElementById("victory-screen"))==null||vt.classList.add("hidden"),(mt=document.getElementById("tutorials-menu"))==null||mt.classList.remove("hidden")):T()});const J=document.getElementById("next-tut-btn-victory");J&&(J.onclick=()=>{var vt;if(i&&i.isTutorialMode&&i.currentTutorialId){const mt=Di.findIndex(P=>P.id===i.currentTutorialId);if(mt!==-1&&mt+1<Di.length){const P=Di[mt+1];(vt=document.getElementById("victory-screen"))==null||vt.classList.add("hidden"),f(P)}}});const k=document.getElementById("continue-btn-death");k&&(k.onclick=()=>{m()});const Y=document.getElementById("retry-btn-death");Y&&h&&(Y.onclick=()=>{i&&i.isTutorialMode&&i.currentTutorialStage?p(i.currentTutorialStage):c(parseInt(h.value))});const Z=document.getElementById("menu-btn-death");Z&&(Z.onclick=()=>{T()});const F=document.getElementById("resume-btn");F&&(F.onclick=()=>{i&&i.togglePause()});const Q=document.getElementById("menu-btn-pause");Q&&(Q.onclick=()=>{T()});const st=document.getElementById("tutorials-btn-menu"),yt=document.getElementById("tutorials-menu"),Ct=document.getElementById("start-menu"),Rt=document.getElementById("back-to-menu-btn");st&&(st.onclick=()=>{e(0,n=Sr()),Ct==null||Ct.classList.add("hidden"),yt==null||yt.classList.remove("hidden")}),Rt&&(Rt.onclick=()=>{yt==null||yt.classList.add("hidden"),Ct==null||Ct.classList.remove("hidden")});const L=document.getElementById("tut-modal-start-btn"),D=document.getElementById("tut-modal-cancel-btn");L&&(L.onclick=()=>{u&&p(u)}),D&&(D.onclick=()=>{var vt,mt;(vt=document.getElementById("tutorial-instructions-modal"))==null||vt.classList.add("hidden"),i&&(i.isTutorialMode?(i.destroy(),i=null,(mt=document.getElementById("tutorials-menu"))==null||mt.classList.remove("hidden")):T()),u=null});const W=document.getElementById("pathfinder-modal-confirm-btn"),C=document.getElementById("pathfinder-modal-cancel-btn"),K=document.getElementById("pathfinder-confirm-modal");W&&(W.onclick=()=>{if(i&&i.pathfinderConfirmTarget){const vt=i.pathfinderConfirmTarget;i.pathfinderConfirmTarget=null,K==null||K.classList.add("hidden"),i.triggerPathReveal(vt.x,vt.y,vt.z,!0)}}),C&&(C.onclick=()=>{i&&(i.pathfinderConfirmTarget=null),K==null||K.classList.add("hidden")}),window.addEventListener("keydown",vt=>{if(!i||i.isPaused||document.getElementById("victory-screen")&&!document.getElementById("victory-screen").classList.contains("hidden")||document.getElementById("pathfinder-confirm-modal")&&!document.getElementById("pathfinder-confirm-modal").classList.contains("hidden")){const P=vt.key.toLowerCase(),b=document.activeElement;if(b&&b.type==="range"&&(P==="arrowleft"||P==="arrowright")){const dt=parseInt(b.step||"1"),ut=parseInt(b.min||"3"),lt=parseInt(b.max||"15");let _t=parseInt(b.value);P==="arrowleft"?_t=Math.max(ut,_t-dt):_t=Math.min(lt,_t+dt),b.value=String(_t),typeof b.oninput=="function"&&b.oninput(new Event("input")),vt.preventDefault();return}P==="arrowdown"||P==="arrowright"?(l(1),vt.preventDefault()):(P==="arrowup"||P==="arrowleft")&&(l(-1),vt.preventDefault())}});let it={x:0,y:0},nt=[];function gt(){var P,b;const vt=navigator.getGamepads?navigator.getGamepads():[],mt=vt[0]||vt.find(j=>j!==null);if(mt&&(!i||i.isPaused||document.getElementById("victory-screen")&&!document.getElementById("victory-screen").classList.contains("hidden")||document.getElementById("pathfinder-confirm-modal")&&!document.getElementById("pathfinder-confirm-modal").classList.contains("hidden"))){const ut=mt.axes[0],lt=mt.axes[1],_t=lt>.5||mt.buttons[13]&&mt.buttons[13].pressed,pt=lt<-.5||mt.buttons[12]&&mt.buttons[12].pressed,ht=ut>.5||mt.buttons[15]&&mt.buttons[15].pressed,xt=ut<-.5||mt.buttons[14]&&mt.buttons[14].pressed,wt=((P=mt.buttons[0])==null?void 0:P.pressed)||((b=mt.buttons[2])==null?void 0:b.pressed),at=_t&&it.y<=.5,It=pt&&it.y>=-.5,Nt=ht&&it.x<=.5,Dt=xt&&it.x>=-.5;it={x:ut,y:lt};const Pt=document.activeElement;if(Pt&&Pt.type==="range"){if(Dt||Nt){const I=parseInt(Pt.step||"1"),Mt=parseInt(Pt.min||"3"),Et=parseInt(Pt.max||"15");let Tt=parseInt(Pt.value);Dt?Tt=Math.max(Mt,Tt-I):Tt=Math.min(Et,Tt+I),Pt.value=String(Tt),typeof Pt.oninput=="function"&&Pt.oninput(new Event("input"))}at?l(1):It&&l(-1)}else at||Nt?l(1):(It||Dt)&&l(-1);if(wt&&!nt[0]&&!nt[2]){const I=document.activeElement;I&&typeof I.click=="function"&&I.click()}nt=mt.buttons.map(I=>I.pressed)}requestAnimationFrame(gt)}gt()}),[n,f,h=>f(h)]}class _m extends kl{constructor(t){super(),Bl(this,t,ym,vm,Sl,{})}}new _m({target:document.getElementById("app")});
