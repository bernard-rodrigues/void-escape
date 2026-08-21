var El=Object.defineProperty;var Ml=(s,t,i)=>t in s?El(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i;var D=(s,t,i)=>Ml(s,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}})();function wn(){}function wr(s){return s()}function Va(){return Object.create(null)}function ys(s){s.forEach(wr)}function Rr(s){return typeof s=="function"}function Sl(s,t){return s!=s?t==t:s!==t||s&&typeof s=="object"||typeof s=="function"}function xl(s){return Object.keys(s).length===0}function Ye(s,t){s.appendChild(t)}function ue(s,t,i){s.insertBefore(t,i||null)}function he(s){s.parentNode&&s.parentNode.removeChild(s)}function bl(s,t){for(let i=0;i<s.length;i+=1)s[i]&&s[i].d(t)}function _e(s){return document.createElement(s)}function Lr(s){return document.createTextNode(s)}function Ne(){return Lr(" ")}function Al(s,t,i,e){return s.addEventListener(t,i,e),()=>s.removeEventListener(t,i,e)}function ie(s,t,i){i==null?s.removeAttribute(t):s.getAttribute(t)!==i&&s.setAttribute(t,i)}function Pl(s){return Array.from(s.childNodes)}function Cl(s,t){t=""+t,s.data!==t&&(s.data=t)}let Rn;function bn(s){Rn=s}function wl(){if(!Rn)throw new Error("Function called outside component initialization");return Rn}function Rl(s){wl().$$.on_mount.push(s)}const sn=[],Wa=[];let ln=[];const Ya=[],Ll=Promise.resolve();let ha=!1;function Il(){ha||(ha=!0,Ll.then(Ir))}function da(s){ln.push(s)}const Cs=new Set;let Fi=0;function Ir(){if(Fi!==0)return;const s=Rn;do{try{for(;Fi<sn.length;){const t=sn[Fi];Fi++,bn(t),Dl(t.$$)}}catch(t){throw sn.length=0,Fi=0,t}for(bn(null),sn.length=0,Fi=0;Wa.length;)Wa.pop()();for(let t=0;t<ln.length;t+=1){const i=ln[t];Cs.has(i)||(Cs.add(i),i())}ln.length=0}while(sn.length);for(;Ya.length;)Ya.pop()();ha=!1,Cs.clear(),bn(s)}function Dl(s){if(s.fragment!==null){s.update(),ys(s.before_update);const t=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,t),s.after_update.forEach(da)}}function Ol(s){const t=[],i=[];ln.forEach(e=>s.indexOf(e)===-1?t.push(e):i.push(e)),i.forEach(e=>e()),ln=t}const Nl=new Set;function zl(s,t){s&&s.i&&(Nl.delete(s),s.i(t))}function Xa(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function Ul(s,t,i){const{fragment:e,after_update:n}=s.$$;e&&e.m(t,i),da(()=>{const a=s.$$.on_mount.map(wr).filter(Rr);s.$$.on_destroy?s.$$.on_destroy.push(...a):ys(a),s.$$.on_mount=[]}),n.forEach(da)}function Fl(s,t){const i=s.$$;i.fragment!==null&&(Ol(i.after_update),ys(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}function Gl(s,t){s.$$.dirty[0]===-1&&(sn.push(s),Il(),s.$$.dirty.fill(0)),s.$$.dirty[t/31|0]|=1<<t%31}function Bl(s,t,i,e,n,a,r=null,o=[-1]){const l=Rn;bn(s);const c=s.$$={fragment:null,ctx:[],props:a,update:wn,not_equal:n,bound:Va(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:Va(),dirty:o,skip_bound:!1,root:t.target||l.$$.root};r&&r(c.root);let d=!1;if(c.ctx=i?i(s,t.props||{},(f,p,...m)=>{const y=m.length?m[0]:p;return c.ctx&&n(c.ctx[f],c.ctx[f]=y)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](y),d&&Gl(s,f)),p}):[],c.update(),d=!0,ys(c.before_update),c.fragment=e?e(c.ctx):!1,t.target){if(t.hydrate){const f=Pl(t.target);c.fragment&&c.fragment.l(f),f.forEach(he)}else c.fragment&&c.fragment.c();t.intro&&zl(s.$$.fragment),Ul(s,t.target,t.anchor),Ir()}bn(l)}class kl{constructor(){D(this,"$$");D(this,"$$set")}$destroy(){Fl(this,1),this.$destroy=wn}$on(t,i){if(!Rr(i))return wn;const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(i),()=>{const n=e.indexOf(i);n!==-1&&e.splice(n,1)}}$set(t){this.$$set&&!xl(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Hl="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Hl);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xa="160",Gi={ROTATE:0,DOLLY:1,PAN:2},Bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vl=0,$a=1,Wl=2,Dr=1,Yl=2,ai=3,Ti=0,Le=1,oi=2,vi=0,cn=1,ja=2,Ka=3,qa=4,Xl=5,Ci=100,$l=101,jl=102,Za=103,Ja=104,Kl=200,ql=201,Zl=202,Jl=203,ua=204,fa=205,Ql=206,tc=207,ec=208,ic=209,nc=210,sc=211,ac=212,oc=213,rc=214,lc=0,cc=1,hc=2,ds=3,dc=4,uc=5,fc=6,pc=7,ba=0,mc=1,gc=2,yi=0,vc=1,yc=2,_c=3,Tc=4,Ec=5,Mc=6,Or=300,dn=301,un=302,pa=303,ma=304,_s=306,ga=1e3,$e=1001,va=1002,Ce=1003,Qa=1004,ws=1005,Ge=1006,Sc=1007,Ln=1008,_i=1009,xc=1010,bc=1011,Aa=1012,Nr=1013,mi=1014,gi=1015,In=1016,zr=1017,Ur=1018,Ri=1020,Ac=1021,je=1023,Pc=1024,Cc=1025,Li=1026,fn=1027,wc=1028,Fr=1029,Rc=1030,Gr=1031,Br=1033,Rs=33776,Ls=33777,Is=33778,Ds=33779,to=35840,eo=35841,io=35842,no=35843,kr=36196,so=37492,ao=37496,oo=37808,ro=37809,lo=37810,co=37811,ho=37812,uo=37813,fo=37814,po=37815,mo=37816,go=37817,vo=37818,yo=37819,_o=37820,To=37821,Os=36492,Eo=36494,Mo=36495,Lc=36283,So=36284,xo=36285,bo=36286,Hr=3e3,Ii=3001,Ic=3200,Dc=3201,Vr=0,Oc=1,ke="",Te="srgb",li="srgb-linear",Pa="display-p3",Ts="display-p3-linear",us="linear",ne="srgb",fs="rec709",ps="p3",ki=7680,Ao=519,Nc=512,zc=513,Uc=514,Wr=515,Fc=516,Gc=517,Bc=518,kc=519,Po=35044,Co="300 es",ya=1035,ri=2e3,ms=2001;class Ui{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const e=this._listeners;e[t]===void 0&&(e[t]=[]),e[t].indexOf(i)===-1&&e[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const e=this._listeners;return e[t]!==void 0&&e[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const a=n.indexOf(i);a!==-1&&n.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const e=this._listeners[t.type];if(e!==void 0){t.target=this;const n=e.slice(0);for(let a=0,r=n.length;a<r;a++)n[a].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cs=Math.PI/180,_a=180/Math.PI;function Dn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,e=Math.random()*4294967295|0;return(Me[s&255]+Me[s>>8&255]+Me[s>>16&255]+Me[s>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[i&63|128]+Me[i>>8&255]+"-"+Me[i>>16&255]+Me[i>>24&255]+Me[e&255]+Me[e>>8&255]+Me[e>>16&255]+Me[e>>24&255]).toLowerCase()}function we(s,t,i){return Math.max(t,Math.min(i,s))}function Hc(s,t){return(s%t+t)%t}function Ns(s,t,i){return(1-i)*s+i*t}function wo(s){return(s&s-1)===0&&s!==0}function Ta(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Vc={DEG2RAD:cs};class kt{constructor(t=0,i=0){kt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,e=this.y,n=t.elements;return this.x=n[0]*i+n[3]*e+n[6],this.y=n[1]*i+n[4]*e+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(t,Math.min(i,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const e=this.dot(t)/i;return Math.acos(we(e,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,e=this.y-t.y;return i*i+e*e}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,e){return this.x=t.x+(i.x-t.x)*e,this.y=t.y+(i.y-t.y)*e,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const e=Math.cos(i),n=Math.sin(i),a=this.x-t.x,r=this.y-t.y;return this.x=a*e-r*n+t.x,this.y=a*n+r*e+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,i,e,n,a,r,o,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,e,n,a,r,o,l,c)}set(t,i,e,n,a,r,o,l,c){const d=this.elements;return d[0]=t,d[1]=n,d[2]=o,d[3]=i,d[4]=a,d[5]=l,d[6]=e,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,e=t.elements;return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],this}extractBasis(t,i,e){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),e.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const e=t.elements,n=i.elements,a=this.elements,r=e[0],o=e[3],l=e[6],c=e[1],d=e[4],f=e[7],p=e[2],m=e[5],y=e[8],T=n[0],h=n[3],u=n[6],v=n[1],g=n[4],_=n[7],E=n[2],S=n[5],x=n[8];return a[0]=r*T+o*v+l*E,a[3]=r*h+o*g+l*S,a[6]=r*u+o*_+l*x,a[1]=c*T+d*v+f*E,a[4]=c*h+d*g+f*S,a[7]=c*u+d*_+f*x,a[2]=p*T+m*v+y*E,a[5]=p*h+m*g+y*S,a[8]=p*u+m*_+y*x,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],e=t[1],n=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return i*r*d-i*o*c-e*a*d+e*o*l+n*a*c-n*r*l}invert(){const t=this.elements,i=t[0],e=t[1],n=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],f=d*r-o*c,p=o*l-d*a,m=c*a-r*l,y=i*f+e*p+n*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/y;return t[0]=f*T,t[1]=(n*c-d*e)*T,t[2]=(o*e-n*r)*T,t[3]=p*T,t[4]=(d*i-n*l)*T,t[5]=(n*a-o*i)*T,t[6]=m*T,t[7]=(e*l-c*i)*T,t[8]=(r*i-e*a)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,e,n,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(e*l,e*c,-e*(l*r+c*o)+r+t,-n*c,n*l,-n*(-c*r+l*o)+o+i,0,0,1),this}scale(t,i){return this.premultiply(zs.makeScale(t,i)),this}rotate(t){return this.premultiply(zs.makeRotation(-t)),this}translate(t,i){return this.premultiply(zs.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),e=Math.sin(t);return this.set(i,-e,0,e,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,e=t.elements;for(let n=0;n<9;n++)if(i[n]!==e[n])return!1;return!0}fromArray(t,i=0){for(let e=0;e<9;e++)this.elements[e]=t[e+i];return this}toArray(t=[],i=0){const e=this.elements;return t[i]=e[0],t[i+1]=e[1],t[i+2]=e[2],t[i+3]=e[3],t[i+4]=e[4],t[i+5]=e[5],t[i+6]=e[6],t[i+7]=e[7],t[i+8]=e[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zs=new qt;function Yr(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function gs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wc(){const s=gs("canvas");return s.style.display="block",s}const Ro={};function An(s){s in Ro||(Ro[s]=!0,console.warn(s))}const Lo=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Io=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fn={[li]:{transfer:us,primaries:fs,toReference:s=>s,fromReference:s=>s},[Te]:{transfer:ne,primaries:fs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ts]:{transfer:us,primaries:ps,toReference:s=>s.applyMatrix3(Io),fromReference:s=>s.applyMatrix3(Lo)},[Pa]:{transfer:ne,primaries:ps,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Io),fromReference:s=>s.applyMatrix3(Lo).convertLinearToSRGB()}},Yc=new Set([li,Ts]),te={enabled:!0,_workingColorSpace:li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Yc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,i){if(this.enabled===!1||t===i||!t||!i)return s;const e=Fn[t].toReference,n=Fn[i].fromReference;return n(e(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Fn[s].primaries},getTransfer:function(s){return s===ke?us:Fn[s].transfer}};function hn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Hi;class Xr{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Hi===void 0&&(Hi=gs("canvas")),Hi.width=t.width,Hi.height=t.height;const e=Hi.getContext("2d");t instanceof ImageData?e.putImageData(t,0,0):e.drawImage(t,0,0,t.width,t.height),i=Hi}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=gs("canvas");i.width=t.width,i.height=t.height;const e=i.getContext("2d");e.drawImage(t,0,0,t.width,t.height);const n=e.getImageData(0,0,t.width,t.height),a=n.data;for(let r=0;r<a.length;r++)a[r]=hn(a[r]/255)*255;return e.putImageData(n,0,0),i}else if(t.data){const i=t.data.slice(0);for(let e=0;e<i.length;e++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[e]=Math.floor(hn(i[e]/255)*255):i[e]=hn(i[e]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xc=0;class $r{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Dn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const e={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?a.push(Fs(n[r].image)):a.push(Fs(n[r]))}else a=Fs(n);e.url=a}return i||(t.images[this.uuid]=e),e}}function Fs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Xr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $c=0;class ze extends Ui{constructor(t=ze.DEFAULT_IMAGE,i=ze.DEFAULT_MAPPING,e=$e,n=$e,a=Ge,r=Ln,o=je,l=_i,c=ze.DEFAULT_ANISOTROPY,d=ke){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=Dn(),this.name="",this.source=new $r(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=e,this.wrapT=n,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(An("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Ii?Te:ke),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const e={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(e.userData=this.userData),i||(t.textures[this.uuid]=e),e}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Or)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ga:t.x=t.x-Math.floor(t.x);break;case $e:t.x=t.x<0?0:1;break;case va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ga:t.y=t.y-Math.floor(t.y);break;case $e:t.y=t.y<0?0:1;break;case va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return An("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Te?Ii:Hr}set encoding(t){An("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ii?Te:ke}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Or;ze.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,i=0,e=0,n=1){ye.prototype.isVector4=!0,this.x=t,this.y=i,this.z=e,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,e,n){return this.x=t,this.y=i,this.z=e,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,e=this.y,n=this.z,a=this.w,r=t.elements;return this.x=r[0]*i+r[4]*e+r[8]*n+r[12]*a,this.y=r[1]*i+r[5]*e+r[9]*n+r[13]*a,this.z=r[2]*i+r[6]*e+r[10]*n+r[14]*a,this.w=r[3]*i+r[7]*e+r[11]*n+r[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,e,n,a;const l=t.elements,c=l[0],d=l[4],f=l[8],p=l[1],m=l[5],y=l[9],T=l[2],h=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-T)<.01&&Math.abs(y-h)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+T)<.1&&Math.abs(y+h)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const g=(c+1)/2,_=(m+1)/2,E=(u+1)/2,S=(d+p)/4,x=(f+T)/4,O=(y+h)/4;return g>_&&g>E?g<.01?(e=0,n=.707106781,a=.707106781):(e=Math.sqrt(g),n=S/e,a=x/e):_>E?_<.01?(e=.707106781,n=0,a=.707106781):(n=Math.sqrt(_),e=S/n,a=O/n):E<.01?(e=.707106781,n=.707106781,a=0):(a=Math.sqrt(E),e=x/a,n=O/a),this.set(e,n,a,i),this}let v=Math.sqrt((h-y)*(h-y)+(f-T)*(f-T)+(p-d)*(p-d));return Math.abs(v)<.001&&(v=1),this.x=(h-y)/v,this.y=(f-T)/v,this.z=(p-d)/v,this.w=Math.acos((c+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(t,Math.min(i,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,e){return this.x=t.x+(i.x-t.x)*e,this.y=t.y+(i.y-t.y)*e,this.z=t.z+(i.z-t.z)*e,this.w=t.w+(i.w-t.w)*e,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jc extends Ui{constructor(t=1,i=1,e={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new ye(0,0,t,i),this.scissorTest=!1,this.viewport=new ye(0,0,t,i);const n={width:t,height:i,depth:1};e.encoding!==void 0&&(An("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ii?Te:ke),e=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},e),this.texture=new ze(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=e.generateMipmaps,this.texture.internalFormat=e.internalFormat,this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.samples=e.samples}setSize(t,i,e=1){(this.width!==t||this.height!==i||this.depth!==e)&&(this.width=t,this.height=i,this.depth=e,this.texture.image.width=t,this.texture.image.height=i,this.texture.image.depth=e,this.dispose()),this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new $r(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends jc{constructor(t=1,i=1,e={}){super(t,i,e),this.isWebGLRenderTarget=!0}}class jr extends ze{constructor(t=null,i=1,e=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:e,depth:n},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kc extends ze{constructor(t=null,i=1,e=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:e,depth:n},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(t=0,i=0,e=0,n=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=e,this._w=n}static slerpFlat(t,i,e,n,a,r,o){let l=e[n+0],c=e[n+1],d=e[n+2],f=e[n+3];const p=a[r+0],m=a[r+1],y=a[r+2],T=a[r+3];if(o===0){t[i+0]=l,t[i+1]=c,t[i+2]=d,t[i+3]=f;return}if(o===1){t[i+0]=p,t[i+1]=m,t[i+2]=y,t[i+3]=T;return}if(f!==T||l!==p||c!==m||d!==y){let h=1-o;const u=l*p+c*m+d*y+f*T,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const E=Math.sqrt(g),S=Math.atan2(E,u*v);h=Math.sin(h*S)/E,o=Math.sin(o*S)/E}const _=o*v;if(l=l*h+p*_,c=c*h+m*_,d=d*h+y*_,f=f*h+T*_,h===1-o){const E=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=E,c*=E,d*=E,f*=E}}t[i]=l,t[i+1]=c,t[i+2]=d,t[i+3]=f}static multiplyQuaternionsFlat(t,i,e,n,a,r){const o=e[n],l=e[n+1],c=e[n+2],d=e[n+3],f=a[r],p=a[r+1],m=a[r+2],y=a[r+3];return t[i]=o*y+d*f+l*m-c*p,t[i+1]=l*y+d*p+c*f-o*m,t[i+2]=c*y+d*m+o*p-l*f,t[i+3]=d*y-o*f-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,e,n){return this._x=t,this._y=i,this._z=e,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const e=t._x,n=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(e/2),d=o(n/2),f=o(a/2),p=l(e/2),m=l(n/2),y=l(a/2);switch(r){case"XYZ":this._x=p*d*f+c*m*y,this._y=c*m*f-p*d*y,this._z=c*d*y+p*m*f,this._w=c*d*f-p*m*y;break;case"YXZ":this._x=p*d*f+c*m*y,this._y=c*m*f-p*d*y,this._z=c*d*y-p*m*f,this._w=c*d*f+p*m*y;break;case"ZXY":this._x=p*d*f-c*m*y,this._y=c*m*f+p*d*y,this._z=c*d*y+p*m*f,this._w=c*d*f-p*m*y;break;case"ZYX":this._x=p*d*f-c*m*y,this._y=c*m*f+p*d*y,this._z=c*d*y-p*m*f,this._w=c*d*f+p*m*y;break;case"YZX":this._x=p*d*f+c*m*y,this._y=c*m*f+p*d*y,this._z=c*d*y-p*m*f,this._w=c*d*f-p*m*y;break;case"XZY":this._x=p*d*f-c*m*y,this._y=c*m*f-p*d*y,this._z=c*d*y+p*m*f,this._w=c*d*f+p*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const e=i/2,n=Math.sin(e);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(e),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,e=i[0],n=i[4],a=i[8],r=i[1],o=i[5],l=i[9],c=i[2],d=i[6],f=i[10],p=e+o+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-l)*m,this._y=(a-c)*m,this._z=(r-n)*m}else if(e>o&&e>f){const m=2*Math.sqrt(1+e-o-f);this._w=(d-l)/m,this._x=.25*m,this._y=(n+r)/m,this._z=(a+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-e-f);this._w=(a-c)/m,this._x=(n+r)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-e-o);this._w=(r-n)/m,this._x=(a+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let e=t.dot(i)+1;return e<Number.EPSILON?(e=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=e):(this._x=0,this._y=-t.z,this._z=t.y,this._w=e)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=e),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,i){const e=this.angleTo(t);if(e===0)return this;const n=Math.min(1,i/e);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const e=t._x,n=t._y,a=t._z,r=t._w,o=i._x,l=i._y,c=i._z,d=i._w;return this._x=e*d+r*o+n*c-a*l,this._y=n*d+r*l+a*o-e*c,this._z=a*d+r*c+e*l-n*o,this._w=r*d-e*o-n*l-a*c,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const e=this._x,n=this._y,a=this._z,r=this._w;let o=r*t._w+e*t._x+n*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=e,this._y=n,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-i;return this._w=m*r+i*this._w,this._x=m*e+i*this._x,this._y=m*n+i*this._y,this._z=m*a+i*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-i)*d)/c,p=Math.sin(i*d)/c;return this._w=r*f+this._w*p,this._x=e*f+this._x*p,this._y=n*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,i,e){return this.copy(t).slerp(i,e)}random(){const t=Math.random(),i=Math.sqrt(1-t),e=Math.sqrt(t),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(i*Math.cos(n),e*Math.sin(a),e*Math.cos(a),i*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,i=0,e=0){Q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=e}set(t,i,e){return e===void 0&&(e=this.z),this.x=t,this.y=i,this.z=e,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Do.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Do.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,e=this.y,n=this.z,a=t.elements;return this.x=a[0]*i+a[3]*e+a[6]*n,this.y=a[1]*i+a[4]*e+a[7]*n,this.z=a[2]*i+a[5]*e+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,e=this.y,n=this.z,a=t.elements,r=1/(a[3]*i+a[7]*e+a[11]*n+a[15]);return this.x=(a[0]*i+a[4]*e+a[8]*n+a[12])*r,this.y=(a[1]*i+a[5]*e+a[9]*n+a[13])*r,this.z=(a[2]*i+a[6]*e+a[10]*n+a[14])*r,this}applyQuaternion(t){const i=this.x,e=this.y,n=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*n-o*e),d=2*(o*i-a*n),f=2*(a*e-r*i);return this.x=i+l*c+r*f-o*d,this.y=e+l*d+o*c-a*f,this.z=n+l*f+a*d-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,e=this.y,n=this.z,a=t.elements;return this.x=a[0]*i+a[4]*e+a[8]*n,this.y=a[1]*i+a[5]*e+a[9]*n,this.z=a[2]*i+a[6]*e+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(t,Math.min(i,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,e){return this.x=t.x+(i.x-t.x)*e,this.y=t.y+(i.y-t.y)*e,this.z=t.z+(i.z-t.z)*e,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const e=t.x,n=t.y,a=t.z,r=i.x,o=i.y,l=i.z;return this.x=n*l-a*o,this.y=a*r-e*l,this.z=e*o-n*r,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const e=t.dot(this)/i;return this.copy(t).multiplyScalar(e)}projectOnPlane(t){return Gs.copy(this).projectOnVector(t),this.sub(Gs)}reflect(t){return this.sub(Gs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const e=this.dot(t)/i;return Math.acos(we(e,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,e=this.y-t.y,n=this.z-t.z;return i*i+e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,e){const n=Math.sin(i)*t;return this.x=n*Math.sin(e),this.y=Math.cos(i)*t,this.z=n*Math.cos(e),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,e){return this.x=t*Math.sin(i),this.y=e,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),e=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=e,this.z=n,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,e=Math.sqrt(1-t**2);return this.x=e*Math.cos(i),this.y=e*Math.sin(i),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gs=new Q,Do=new Ni;class On{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,e=t.length;i<e;i+=3)this.expandByPoint(He.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,e=t.count;i<e;i++)this.expandByPoint(He.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,e=t.length;i<e;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const e=He.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(e),this.max.copy(t).add(e),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const e=t.geometry;if(e!==void 0){const a=e.getAttribute("position");if(i===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,He):He.fromBufferAttribute(a,r),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gn.copy(t.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Gn.copy(e.boundingBox)),Gn.applyMatrix4(t.matrixWorld),this.union(Gn)}const n=t.children;for(let a=0,r=n.length;a<r;a++)this.expandByObject(n[a],i);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,e;return t.normal.x>0?(i=t.normal.x*this.min.x,e=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,e=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,e+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,e+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,e+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,e+=t.normal.z*this.min.z),i<=-t.constant&&e>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_n),Bn.subVectors(this.max,_n),Vi.subVectors(t.a,_n),Wi.subVectors(t.b,_n),Yi.subVectors(t.c,_n),ci.subVectors(Wi,Vi),hi.subVectors(Yi,Wi),Si.subVectors(Vi,Yi);let i=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Si.z,Si.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Si.z,0,-Si.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Si.y,Si.x,0];return!Bs(i,Vi,Wi,Yi,Bn)||(i=[1,0,0,0,1,0,0,0,1],!Bs(i,Vi,Wi,Yi,Bn))?!1:(kn.crossVectors(ci,hi),i=[kn.x,kn.y,kn.z],Bs(i,Vi,Wi,Yi,Bn))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ti=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],He=new Q,Gn=new On,Vi=new Q,Wi=new Q,Yi=new Q,ci=new Q,hi=new Q,Si=new Q,_n=new Q,Bn=new Q,kn=new Q,xi=new Q;function Bs(s,t,i,e,n){for(let a=0,r=s.length-3;a<=r;a+=3){xi.fromArray(s,a);const o=n.x*Math.abs(xi.x)+n.y*Math.abs(xi.y)+n.z*Math.abs(xi.z),l=t.dot(xi),c=i.dot(xi),d=e.dot(xi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const qc=new On,Tn=new Q,ks=new Q;class Ca{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const e=this.center;i!==void 0?e.copy(i):qc.setFromPoints(t).getCenter(e);let n=0;for(let a=0,r=t.length;a<r;a++)n=Math.max(n,e.distanceToSquared(t[a]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const e=this.center.distanceToSquared(t);return i.copy(t),e>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tn.subVectors(t,this.center);const i=Tn.lengthSq();if(i>this.radius*this.radius){const e=Math.sqrt(i),n=(e-this.radius)*.5;this.center.addScaledVector(Tn,n/e),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ks.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tn.copy(t.center).add(ks)),this.expandByPoint(Tn.copy(t.center).sub(ks))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new Q,Hs=new Q,Hn=new Q,di=new Q,Vs=new Q,Vn=new Q,Ws=new Q;class wa{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const e=i.dot(this.direction);return e<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,e)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ei.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,i),ei.distanceToSquared(t))}distanceSqToSegment(t,i,e,n){Hs.copy(t).add(i).multiplyScalar(.5),Hn.copy(i).sub(t).normalize(),di.copy(this.origin).sub(Hs);const a=t.distanceTo(i)*.5,r=-this.direction.dot(Hn),o=di.dot(this.direction),l=-di.dot(Hn),c=di.lengthSq(),d=Math.abs(1-r*r);let f,p,m,y;if(d>0)if(f=r*l-o,p=r*o-l,y=a*d,f>=0)if(p>=-y)if(p<=y){const T=1/d;f*=T,p*=T,m=f*(f+r*p+2*o)+p*(r*f+p+2*l)+c}else p=a,f=Math.max(0,-(r*p+o)),m=-f*f+p*(p+2*l)+c;else p=-a,f=Math.max(0,-(r*p+o)),m=-f*f+p*(p+2*l)+c;else p<=-y?(f=Math.max(0,-(-r*a+o)),p=f>0?-a:Math.min(Math.max(-a,-l),a),m=-f*f+p*(p+2*l)+c):p<=y?(f=0,p=Math.min(Math.max(-a,-l),a),m=p*(p+2*l)+c):(f=Math.max(0,-(r*a+o)),p=f>0?a:Math.min(Math.max(-a,-l),a),m=-f*f+p*(p+2*l)+c);else p=r>0?-a:a,f=Math.max(0,-(r*p+o)),m=-f*f+p*(p+2*l)+c;return e&&e.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(Hs).addScaledVector(Hn,p),m}intersectSphere(t,i){ei.subVectors(t.center,this.origin);const e=ei.dot(this.direction),n=ei.dot(ei)-e*e,a=t.radius*t.radius;if(n>a)return null;const r=Math.sqrt(a-n),o=e-r,l=e+r;return l<0?null:o<0?this.at(l,i):this.at(o,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const e=-(this.origin.dot(t.normal)+t.constant)/i;return e>=0?e:null}intersectPlane(t,i){const e=this.distanceToPlane(t);return e===null?null:this.at(e,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let e,n,a,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(e=(t.min.x-p.x)*c,n=(t.max.x-p.x)*c):(e=(t.max.x-p.x)*c,n=(t.min.x-p.x)*c),d>=0?(a=(t.min.y-p.y)*d,r=(t.max.y-p.y)*d):(a=(t.max.y-p.y)*d,r=(t.min.y-p.y)*d),e>r||a>n||((a>e||isNaN(e))&&(e=a),(r<n||isNaN(n))&&(n=r),f>=0?(o=(t.min.z-p.z)*f,l=(t.max.z-p.z)*f):(o=(t.max.z-p.z)*f,l=(t.min.z-p.z)*f),e>l||o>n)||((o>e||e!==e)&&(e=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(e>=0?e:n,i)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,i,e,n,a){Vs.subVectors(i,t),Vn.subVectors(e,t),Ws.crossVectors(Vs,Vn);let r=this.direction.dot(Ws),o;if(r>0){if(n)return null;o=1}else if(r<0)o=-1,r=-r;else return null;di.subVectors(this.origin,t);const l=o*this.direction.dot(Vn.crossVectors(di,Vn));if(l<0)return null;const c=o*this.direction.dot(Vs.cross(di));if(c<0||l+c>r)return null;const d=-o*di.dot(Ws);return d<0?null:this.at(d/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,i,e,n,a,r,o,l,c,d,f,p,m,y,T,h){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,e,n,a,r,o,l,c,d,f,p,m,y,T,h)}set(t,i,e,n,a,r,o,l,c,d,f,p,m,y,T,h){const u=this.elements;return u[0]=t,u[4]=i,u[8]=e,u[12]=n,u[1]=a,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=p,u[3]=m,u[7]=y,u[11]=T,u[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const i=this.elements,e=t.elements;return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=e[7],i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=e[11],i[12]=e[12],i[13]=e[13],i[14]=e[14],i[15]=e[15],this}copyPosition(t){const i=this.elements,e=t.elements;return i[12]=e[12],i[13]=e[13],i[14]=e[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,e){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),e.setFromMatrixColumn(this,2),this}makeBasis(t,i,e){return this.set(t.x,i.x,e.x,0,t.y,i.y,e.y,0,t.z,i.z,e.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,e=t.elements,n=1/Xi.setFromMatrixColumn(t,0).length(),a=1/Xi.setFromMatrixColumn(t,1).length(),r=1/Xi.setFromMatrixColumn(t,2).length();return i[0]=e[0]*n,i[1]=e[1]*n,i[2]=e[2]*n,i[3]=0,i[4]=e[4]*a,i[5]=e[5]*a,i[6]=e[6]*a,i[7]=0,i[8]=e[8]*r,i[9]=e[9]*r,i[10]=e[10]*r,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,e=t.x,n=t.y,a=t.z,r=Math.cos(e),o=Math.sin(e),l=Math.cos(n),c=Math.sin(n),d=Math.cos(a),f=Math.sin(a);if(t.order==="XYZ"){const p=r*d,m=r*f,y=o*d,T=o*f;i[0]=l*d,i[4]=-l*f,i[8]=c,i[1]=m+y*c,i[5]=p-T*c,i[9]=-o*l,i[2]=T-p*c,i[6]=y+m*c,i[10]=r*l}else if(t.order==="YXZ"){const p=l*d,m=l*f,y=c*d,T=c*f;i[0]=p+T*o,i[4]=y*o-m,i[8]=r*c,i[1]=r*f,i[5]=r*d,i[9]=-o,i[2]=m*o-y,i[6]=T+p*o,i[10]=r*l}else if(t.order==="ZXY"){const p=l*d,m=l*f,y=c*d,T=c*f;i[0]=p-T*o,i[4]=-r*f,i[8]=y+m*o,i[1]=m+y*o,i[5]=r*d,i[9]=T-p*o,i[2]=-r*c,i[6]=o,i[10]=r*l}else if(t.order==="ZYX"){const p=r*d,m=r*f,y=o*d,T=o*f;i[0]=l*d,i[4]=y*c-m,i[8]=p*c+T,i[1]=l*f,i[5]=T*c+p,i[9]=m*c-y,i[2]=-c,i[6]=o*l,i[10]=r*l}else if(t.order==="YZX"){const p=r*l,m=r*c,y=o*l,T=o*c;i[0]=l*d,i[4]=T-p*f,i[8]=y*f+m,i[1]=f,i[5]=r*d,i[9]=-o*d,i[2]=-c*d,i[6]=m*f+y,i[10]=p-T*f}else if(t.order==="XZY"){const p=r*l,m=r*c,y=o*l,T=o*c;i[0]=l*d,i[4]=-f,i[8]=c*d,i[1]=p*f+T,i[5]=r*d,i[9]=m*f-y,i[2]=y*f-m,i[6]=o*d,i[10]=T*f+p}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zc,t,Jc)}lookAt(t,i,e){const n=this.elements;return De.subVectors(t,i),De.lengthSq()===0&&(De.z=1),De.normalize(),ui.crossVectors(e,De),ui.lengthSq()===0&&(Math.abs(e.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),ui.crossVectors(e,De)),ui.normalize(),Wn.crossVectors(De,ui),n[0]=ui.x,n[4]=Wn.x,n[8]=De.x,n[1]=ui.y,n[5]=Wn.y,n[9]=De.y,n[2]=ui.z,n[6]=Wn.z,n[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const e=t.elements,n=i.elements,a=this.elements,r=e[0],o=e[4],l=e[8],c=e[12],d=e[1],f=e[5],p=e[9],m=e[13],y=e[2],T=e[6],h=e[10],u=e[14],v=e[3],g=e[7],_=e[11],E=e[15],S=n[0],x=n[4],O=n[8],M=n[12],A=n[1],k=n[5],U=n[9],X=n[13],I=n[2],B=n[6],Y=n[10],$=n[14],H=n[3],Z=n[7],it=n[11],j=n[15];return a[0]=r*S+o*A+l*I+c*H,a[4]=r*x+o*k+l*B+c*Z,a[8]=r*O+o*U+l*Y+c*it,a[12]=r*M+o*X+l*$+c*j,a[1]=d*S+f*A+p*I+m*H,a[5]=d*x+f*k+p*B+m*Z,a[9]=d*O+f*U+p*Y+m*it,a[13]=d*M+f*X+p*$+m*j,a[2]=y*S+T*A+h*I+u*H,a[6]=y*x+T*k+h*B+u*Z,a[10]=y*O+T*U+h*Y+u*it,a[14]=y*M+T*X+h*$+u*j,a[3]=v*S+g*A+_*I+E*H,a[7]=v*x+g*k+_*B+E*Z,a[11]=v*O+g*U+_*Y+E*it,a[15]=v*M+g*X+_*$+E*j,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],e=t[4],n=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],d=t[2],f=t[6],p=t[10],m=t[14],y=t[3],T=t[7],h=t[11],u=t[15];return y*(+a*l*f-n*c*f-a*o*p+e*c*p+n*o*m-e*l*m)+T*(+i*l*m-i*c*p+a*r*p-n*r*m+n*c*d-a*l*d)+h*(+i*c*f-i*o*m-a*r*f+e*r*m+a*o*d-e*c*d)+u*(-n*o*d-i*l*f+i*o*p+n*r*f-e*r*p+e*l*d)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,e){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=i,n[14]=e),this}invert(){const t=this.elements,i=t[0],e=t[1],n=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],d=t[8],f=t[9],p=t[10],m=t[11],y=t[12],T=t[13],h=t[14],u=t[15],v=f*h*c-T*p*c+T*l*m-o*h*m-f*l*u+o*p*u,g=y*p*c-d*h*c-y*l*m+r*h*m+d*l*u-r*p*u,_=d*T*c-y*f*c+y*o*m-r*T*m-d*o*u+r*f*u,E=y*f*l-d*T*l-y*o*p+r*T*p+d*o*h-r*f*h,S=i*v+e*g+n*_+a*E;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const x=1/S;return t[0]=v*x,t[1]=(T*p*a-f*h*a-T*n*m+e*h*m+f*n*u-e*p*u)*x,t[2]=(o*h*a-T*l*a+T*n*c-e*h*c-o*n*u+e*l*u)*x,t[3]=(f*l*a-o*p*a-f*n*c+e*p*c+o*n*m-e*l*m)*x,t[4]=g*x,t[5]=(d*h*a-y*p*a+y*n*m-i*h*m-d*n*u+i*p*u)*x,t[6]=(y*l*a-r*h*a-y*n*c+i*h*c+r*n*u-i*l*u)*x,t[7]=(r*p*a-d*l*a+d*n*c-i*p*c-r*n*m+i*l*m)*x,t[8]=_*x,t[9]=(y*f*a-d*T*a-y*e*m+i*T*m+d*e*u-i*f*u)*x,t[10]=(r*T*a-y*o*a+y*e*c-i*T*c-r*e*u+i*o*u)*x,t[11]=(d*o*a-r*f*a-d*e*c+i*f*c+r*e*m-i*o*m)*x,t[12]=E*x,t[13]=(d*T*n-y*f*n+y*e*p-i*T*p-d*e*h+i*f*h)*x,t[14]=(y*o*n-r*T*n-y*e*l+i*T*l+r*e*h-i*o*h)*x,t[15]=(r*f*n-d*o*n+d*e*l-i*f*l-r*e*p+i*o*p)*x,this}scale(t){const i=this.elements,e=t.x,n=t.y,a=t.z;return i[0]*=e,i[4]*=n,i[8]*=a,i[1]*=e,i[5]*=n,i[9]*=a,i[2]*=e,i[6]*=n,i[10]*=a,i[3]*=e,i[7]*=n,i[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],e=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,e,n))}makeTranslation(t,i,e){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,e,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),e=Math.sin(t);return this.set(1,0,0,0,0,i,-e,0,0,e,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),e=Math.sin(t);return this.set(i,0,e,0,0,1,0,0,-e,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),e=Math.sin(t);return this.set(i,-e,0,0,e,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const e=Math.cos(i),n=Math.sin(i),a=1-e,r=t.x,o=t.y,l=t.z,c=a*r,d=a*o;return this.set(c*r+e,c*o-n*l,c*l+n*o,0,c*o+n*l,d*o+e,d*l-n*r,0,c*l-n*o,d*l+n*r,a*l*l+e,0,0,0,0,1),this}makeScale(t,i,e){return this.set(t,0,0,0,0,i,0,0,0,0,e,0,0,0,0,1),this}makeShear(t,i,e,n,a,r){return this.set(1,e,a,0,t,1,r,0,i,n,1,0,0,0,0,1),this}compose(t,i,e){const n=this.elements,a=i._x,r=i._y,o=i._z,l=i._w,c=a+a,d=r+r,f=o+o,p=a*c,m=a*d,y=a*f,T=r*d,h=r*f,u=o*f,v=l*c,g=l*d,_=l*f,E=e.x,S=e.y,x=e.z;return n[0]=(1-(T+u))*E,n[1]=(m+_)*E,n[2]=(y-g)*E,n[3]=0,n[4]=(m-_)*S,n[5]=(1-(p+u))*S,n[6]=(h+v)*S,n[7]=0,n[8]=(y+g)*x,n[9]=(h-v)*x,n[10]=(1-(p+T))*x,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,i,e){const n=this.elements;let a=Xi.set(n[0],n[1],n[2]).length();const r=Xi.set(n[4],n[5],n[6]).length(),o=Xi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),t.x=n[12],t.y=n[13],t.z=n[14],Ve.copy(this);const c=1/a,d=1/r,f=1/o;return Ve.elements[0]*=c,Ve.elements[1]*=c,Ve.elements[2]*=c,Ve.elements[4]*=d,Ve.elements[5]*=d,Ve.elements[6]*=d,Ve.elements[8]*=f,Ve.elements[9]*=f,Ve.elements[10]*=f,i.setFromRotationMatrix(Ve),e.x=a,e.y=r,e.z=o,this}makePerspective(t,i,e,n,a,r,o=ri){const l=this.elements,c=2*a/(i-t),d=2*a/(e-n),f=(i+t)/(i-t),p=(e+n)/(e-n);let m,y;if(o===ri)m=-(r+a)/(r-a),y=-2*r*a/(r-a);else if(o===ms)m=-r/(r-a),y=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,i,e,n,a,r,o=ri){const l=this.elements,c=1/(i-t),d=1/(e-n),f=1/(r-a),p=(i+t)*c,m=(e+n)*d;let y,T;if(o===ri)y=(r+a)*f,T=-2*f;else if(o===ms)y=a*f,T=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=T,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const i=this.elements,e=t.elements;for(let n=0;n<16;n++)if(i[n]!==e[n])return!1;return!0}fromArray(t,i=0){for(let e=0;e<16;e++)this.elements[e]=t[e+i];return this}toArray(t=[],i=0){const e=this.elements;return t[i]=e[0],t[i+1]=e[1],t[i+2]=e[2],t[i+3]=e[3],t[i+4]=e[4],t[i+5]=e[5],t[i+6]=e[6],t[i+7]=e[7],t[i+8]=e[8],t[i+9]=e[9],t[i+10]=e[10],t[i+11]=e[11],t[i+12]=e[12],t[i+13]=e[13],t[i+14]=e[14],t[i+15]=e[15],t}}const Xi=new Q,Ve=new fe,Zc=new Q(0,0,0),Jc=new Q(1,1,1),ui=new Q,Wn=new Q,De=new Q,Oo=new fe,No=new Ni;class Es{constructor(t=0,i=0,e=0,n=Es.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=e,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,e,n=this._order){return this._x=t,this._y=i,this._z=e,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,e=!0){const n=t.elements,a=n[0],r=n[4],o=n[8],l=n[1],c=n[5],d=n[9],f=n[2],p=n[6],m=n[10];switch(i){case"XYZ":this._y=Math.asin(we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(we(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-we(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-we(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,e===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,e){return Oo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oo,i,e)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return No.setFromEuler(this),this.setFromQuaternion(No,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Es.DEFAULT_ORDER="XYZ";class Ra{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qc=0;const zo=new Q,$i=new Ni,ii=new fe,Yn=new Q,En=new Q,th=new Q,eh=new Ni,Uo=new Q(1,0,0),Fo=new Q(0,1,0),Go=new Q(0,0,1),ih={type:"added"},nh={type:"removed"};class be extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new Q,i=new Es,e=new Ni,n=new Q(1,1,1);function a(){e.setFromEuler(i,!1)}function r(){i.setFromQuaternion(e,void 0,!1)}i._onChange(a),e._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:e},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new fe},normalMatrix:{value:new qt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return $i.setFromAxisAngle(t,i),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,i){return $i.setFromAxisAngle(t,i),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(Uo,t)}rotateY(t){return this.rotateOnAxis(Fo,t)}rotateZ(t){return this.rotateOnAxis(Go,t)}translateOnAxis(t,i){return zo.copy(t).applyQuaternion(this.quaternion),this.position.add(zo.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Uo,t)}translateY(t){return this.translateOnAxis(Fo,t)}translateZ(t){return this.translateOnAxis(Go,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,i,e){t.isVector3?Yn.copy(t):Yn.set(t,i,e);const n=this.parent;this.updateWorldMatrix(!0,!1),En.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(En,Yn,this.up):ii.lookAt(Yn,En,this.up),this.quaternion.setFromRotationMatrix(ii),n&&(ii.extractRotation(n.matrixWorld),$i.setFromRotationMatrix(ii),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ih)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(nh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let e=0,n=this.children.length;e<n;e++){const r=this.children[e].getObjectByProperty(t,i);if(r!==void 0)return r}}getObjectsByProperty(t,i,e=[]){this[t]===i&&e.push(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].getObjectsByProperty(t,i,e);return e}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(En,t,th),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(En,eh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let e=0,n=i.length;e<n;e++)i[e].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let e=0,n=i.length;e<n;e++)i[e].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let e=0,n=i.length;e<n;e++){const a=i[e];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,i){const e=this.parent;if(t===!0&&e!==null&&e.matrixWorldAutoUpdate===!0&&e.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const n=this.children;for(let a=0,r=n.length;a<r;a++){const o=n[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const i=t===void 0||typeof t=="string",e={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},e.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];a(t.shapes,f)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));n.material=o}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(t.animations,l))}}if(i){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),d=r(t.images),f=r(t.shapes),p=r(t.skeletons),m=r(t.animations),y=r(t.nodes);o.length>0&&(e.geometries=o),l.length>0&&(e.materials=l),c.length>0&&(e.textures=c),d.length>0&&(e.images=d),f.length>0&&(e.shapes=f),p.length>0&&(e.skeletons=p),m.length>0&&(e.animations=m),y.length>0&&(e.nodes=y)}return e.object=n,e;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let e=0;e<t.children.length;e++){const n=t.children[e];this.add(n.clone())}return this}}be.DEFAULT_UP=new Q(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const We=new Q,ni=new Q,Ys=new Q,si=new Q,ji=new Q,Ki=new Q,Bo=new Q,Xs=new Q,$s=new Q,js=new Q;let Xn=!1;class Xe{constructor(t=new Q,i=new Q,e=new Q){this.a=t,this.b=i,this.c=e}static getNormal(t,i,e,n){n.subVectors(e,i),We.subVectors(t,i),n.cross(We);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,i,e,n,a){We.subVectors(n,i),ni.subVectors(e,i),Ys.subVectors(t,i);const r=We.dot(We),o=We.dot(ni),l=We.dot(Ys),c=ni.dot(ni),d=ni.dot(Ys),f=r*c-o*o;if(f===0)return a.set(0,0,0),null;const p=1/f,m=(c*l-o*d)*p,y=(r*d-o*l)*p;return a.set(1-m-y,y,m)}static containsPoint(t,i,e,n){return this.getBarycoord(t,i,e,n,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getUV(t,i,e,n,a,r,o,l){return Xn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xn=!0),this.getInterpolation(t,i,e,n,a,r,o,l)}static getInterpolation(t,i,e,n,a,r,o,l){return this.getBarycoord(t,i,e,n,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,si.x),l.addScaledVector(r,si.y),l.addScaledVector(o,si.z),l)}static isFrontFacing(t,i,e,n){return We.subVectors(e,i),ni.subVectors(t,i),We.cross(ni).dot(n)<0}set(t,i,e){return this.a.copy(t),this.b.copy(i),this.c.copy(e),this}setFromPointsAndIndices(t,i,e,n){return this.a.copy(t[i]),this.b.copy(t[e]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,i,e,n){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,e),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),We.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Xe.getBarycoord(t,this.a,this.b,this.c,i)}getUV(t,i,e,n,a){return Xn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xn=!0),Xe.getInterpolation(t,this.a,this.b,this.c,i,e,n,a)}getInterpolation(t,i,e,n,a){return Xe.getInterpolation(t,this.a,this.b,this.c,i,e,n,a)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const e=this.a,n=this.b,a=this.c;let r,o;ji.subVectors(n,e),Ki.subVectors(a,e),Xs.subVectors(t,e);const l=ji.dot(Xs),c=Ki.dot(Xs);if(l<=0&&c<=0)return i.copy(e);$s.subVectors(t,n);const d=ji.dot($s),f=Ki.dot($s);if(d>=0&&f<=d)return i.copy(n);const p=l*f-d*c;if(p<=0&&l>=0&&d<=0)return r=l/(l-d),i.copy(e).addScaledVector(ji,r);js.subVectors(t,a);const m=ji.dot(js),y=Ki.dot(js);if(y>=0&&m<=y)return i.copy(a);const T=m*c-l*y;if(T<=0&&c>=0&&y<=0)return o=c/(c-y),i.copy(e).addScaledVector(Ki,o);const h=d*y-m*f;if(h<=0&&f-d>=0&&m-y>=0)return Bo.subVectors(a,n),o=(f-d)/(f-d+(m-y)),i.copy(n).addScaledVector(Bo,o);const u=1/(h+T+p);return r=T*u,o=p*u,i.copy(e).addScaledVector(ji,r).addScaledVector(Ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Kr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},$n={h:0,s:0,l:0};function Ks(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Jt{constructor(t,i,e){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,e)}set(t,i,e){if(i===void 0&&e===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,i,e);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,i),this}setRGB(t,i,e,n=te.workingColorSpace){return this.r=t,this.g=i,this.b=e,te.toWorkingColorSpace(this,n),this}setHSL(t,i,e,n=te.workingColorSpace){if(t=Hc(t,1),i=we(i,0,1),e=we(e,0,1),i===0)this.r=this.g=this.b=e;else{const a=e<=.5?e*(1+i):e+i-e*i,r=2*e-a;this.r=Ks(r,a,t+1/3),this.g=Ks(r,a,t),this.b=Ks(r,a,t-1/3)}return te.toWorkingColorSpace(this,n),this}setStyle(t,i=Te){function e(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return e(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,i);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return e(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,i);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return e(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=n[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,i);if(r===6)return this.setHex(parseInt(a,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Te){const e=Kr[t.toLowerCase()];return e!==void 0?this.setHex(e,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hn(t.r),this.g=hn(t.g),this.b=hn(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return te.fromWorkingColorSpace(Se.copy(this),t),Math.round(we(Se.r*255,0,255))*65536+Math.round(we(Se.g*255,0,255))*256+Math.round(we(Se.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=te.workingColorSpace){te.fromWorkingColorSpace(Se.copy(this),i);const e=Se.r,n=Se.g,a=Se.b,r=Math.max(e,n,a),o=Math.min(e,n,a);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const f=r-o;switch(c=d<=.5?f/(r+o):f/(2-r-o),r){case e:l=(n-a)/f+(n<a?6:0);break;case n:l=(a-e)/f+2;break;case a:l=(e-n)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,i=te.workingColorSpace){return te.fromWorkingColorSpace(Se.copy(this),i),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=Te){te.fromWorkingColorSpace(Se.copy(this),t);const i=Se.r,e=Se.g,n=Se.b;return t!==Te?`color(${t} ${i.toFixed(3)} ${e.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(e*255)},${Math.round(n*255)})`}offsetHSL(t,i,e){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+i,fi.l+e)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,e){return this.r=t.r+(i.r-t.r)*e,this.g=t.g+(i.g-t.g)*e,this.b=t.b+(i.b-t.b)*e,this}lerpHSL(t,i){this.getHSL(fi),t.getHSL($n);const e=Ns(fi.h,$n.h,i),n=Ns(fi.s,$n.s,i),a=Ns(fi.l,$n.l,i);return this.setHSL(e,n,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,e=this.g,n=this.b,a=t.elements;return this.r=a[0]*i+a[3]*e+a[6]*n,this.g=a[1]*i+a[4]*e+a[7]*n,this.b=a[2]*i+a[5]*e+a[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new Jt;Jt.NAMES=Kr;let sh=0;class Nn extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=cn,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=fa,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ao,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const e=t[i];if(e===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const n=this[i];if(n===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(e):n&&n.isVector3&&e&&e.isVector3?n.copy(e):this[i]=e}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const e={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.color&&this.color.isColor&&(e.color=this.color.getHex()),this.roughness!==void 0&&(e.roughness=this.roughness),this.metalness!==void 0&&(e.metalness=this.metalness),this.sheen!==void 0&&(e.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(e.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(e.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(e.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(e.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(e.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(e.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(e.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(e.shininess=this.shininess),this.clearcoat!==void 0&&(e.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(e.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(e.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(e.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(e.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,e.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(e.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(e.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(e.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(e.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(e.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(e.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(e.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(e.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(e.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(e.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(e.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(e.lightMap=this.lightMap.toJSON(t).uuid,e.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(e.aoMap=this.aoMap.toJSON(t).uuid,e.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(e.bumpMap=this.bumpMap.toJSON(t).uuid,e.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(e.normalMap=this.normalMap.toJSON(t).uuid,e.normalMapType=this.normalMapType,e.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(e.displacementMap=this.displacementMap.toJSON(t).uuid,e.displacementScale=this.displacementScale,e.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(e.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(e.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(e.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(e.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(e.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(e.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(e.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(e.combine=this.combine)),this.envMapIntensity!==void 0&&(e.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(e.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(e.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(e.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(e.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(e.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(e.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(e.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(e.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(e.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(e.size=this.size),this.shadowSide!==null&&(e.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(e.sizeAttenuation=this.sizeAttenuation),this.blending!==cn&&(e.blending=this.blending),this.side!==Ti&&(e.side=this.side),this.vertexColors===!0&&(e.vertexColors=!0),this.opacity<1&&(e.opacity=this.opacity),this.transparent===!0&&(e.transparent=!0),this.blendSrc!==ua&&(e.blendSrc=this.blendSrc),this.blendDst!==fa&&(e.blendDst=this.blendDst),this.blendEquation!==Ci&&(e.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(e.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(e.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(e.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(e.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(e.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(e.depthFunc=this.depthFunc),this.depthTest===!1&&(e.depthTest=this.depthTest),this.depthWrite===!1&&(e.depthWrite=this.depthWrite),this.colorWrite===!1&&(e.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(e.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ao&&(e.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(e.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(e.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(e.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(e.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(e.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(e.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(e.rotation=this.rotation),this.polygonOffset===!0&&(e.polygonOffset=!0),this.polygonOffsetFactor!==0&&(e.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(e.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(e.linewidth=this.linewidth),this.dashSize!==void 0&&(e.dashSize=this.dashSize),this.gapSize!==void 0&&(e.gapSize=this.gapSize),this.scale!==void 0&&(e.scale=this.scale),this.dithering===!0&&(e.dithering=!0),this.alphaTest>0&&(e.alphaTest=this.alphaTest),this.alphaHash===!0&&(e.alphaHash=!0),this.alphaToCoverage===!0&&(e.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(e.premultipliedAlpha=!0),this.forceSinglePass===!0&&(e.forceSinglePass=!0),this.wireframe===!0&&(e.wireframe=!0),this.wireframeLinewidth>1&&(e.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(e.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(e.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(e.flatShading=!0),this.visible===!1&&(e.visible=!1),this.toneMapped===!1&&(e.toneMapped=!1),this.fog===!1&&(e.fog=!1),Object.keys(this.userData).length>0&&(e.userData=this.userData);function n(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(i){const a=n(t.textures),r=n(t.images);a.length>0&&(e.textures=a),r.length>0&&(e.images=r)}return e}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let e=null;if(i!==null){const n=i.length;e=new Array(n);for(let a=0;a!==n;++a)e[a]=i[a].clone()}return this.clippingPlanes=e,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Pn extends Nn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new Q,jn=new kt;class Ze{constructor(t,i,e=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=e,this.usage=Po,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,e){t*=this.itemSize,e*=i.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[t+n]=i.array[e+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,e=this.count;i<e;i++)jn.fromBufferAttribute(this,i),jn.applyMatrix3(t),this.setXY(i,jn.x,jn.y);else if(this.itemSize===3)for(let i=0,e=this.count;i<e;i++)de.fromBufferAttribute(this,i),de.applyMatrix3(t),this.setXYZ(i,de.x,de.y,de.z);return this}applyMatrix4(t){for(let i=0,e=this.count;i<e;i++)de.fromBufferAttribute(this,i),de.applyMatrix4(t),this.setXYZ(i,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let i=0,e=this.count;i<e;i++)de.fromBufferAttribute(this,i),de.applyNormalMatrix(t),this.setXYZ(i,de.x,de.y,de.z);return this}transformDirection(t){for(let i=0,e=this.count;i<e;i++)de.fromBufferAttribute(this,i),de.transformDirection(t),this.setXYZ(i,de.x,de.y,de.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let e=this.array[t*this.itemSize+i];return this.normalized&&(e=yn(e,this.array)),e}setComponent(t,i,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+i]=e,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=yn(i,this.array)),i}setX(t,i){return this.normalized&&(i=Re(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=yn(i,this.array)),i}setY(t,i){return this.normalized&&(i=Re(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=yn(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Re(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=yn(i,this.array)),i}setW(t,i){return this.normalized&&(i=Re(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,e){return t*=this.itemSize,this.normalized&&(i=Re(i,this.array),e=Re(e,this.array)),this.array[t+0]=i,this.array[t+1]=e,this}setXYZ(t,i,e,n){return t*=this.itemSize,this.normalized&&(i=Re(i,this.array),e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=i,this.array[t+1]=e,this.array[t+2]=n,this}setXYZW(t,i,e,n,a){return t*=this.itemSize,this.normalized&&(i=Re(i,this.array),e=Re(e,this.array),n=Re(n,this.array),a=Re(a,this.array)),this.array[t+0]=i,this.array[t+1]=e,this.array[t+2]=n,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Po&&(t.usage=this.usage),t}}class qr extends Ze{constructor(t,i,e){super(new Uint16Array(t),i,e)}}class Zr extends Ze{constructor(t,i,e){super(new Uint32Array(t),i,e)}}class Ae extends Ze{constructor(t,i,e){super(new Float32Array(t),i,e)}}let ah=0;const Fe=new fe,qs=new be,qi=new Q,Oe=new On,Mn=new On,ve=new Q;class Je extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yr(t)?Zr:qr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,e=0){this.groups.push({start:t,count:i,materialIndex:e})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const e=this.attributes.normal;if(e!==void 0){const a=new qt().getNormalMatrix(t);e.applyNormalMatrix(a),e.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,i,e){return Fe.makeTranslation(t,i,e),this.applyMatrix4(Fe),this}scale(t,i,e){return Fe.makeScale(t,i,e),this.applyMatrix4(Fe),this}lookAt(t){return qs.lookAt(t),qs.updateMatrix(),this.applyMatrix4(qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const i=[];for(let e=0,n=t.length;e<n;e++){const a=t[e];i.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ae(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let e=0,n=i.length;e<n;e++){const a=i[e];Oe.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ca);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Q,1/0);return}if(t){const e=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),i)for(let a=0,r=i.length;a<r;a++){const o=i[a];Mn.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Oe.min,Mn.min),Oe.expandByPoint(ve),ve.addVectors(Oe.max,Mn.max),Oe.expandByPoint(ve)):(Oe.expandByPoint(Mn.min),Oe.expandByPoint(Mn.max))}Oe.getCenter(e);let n=0;for(let a=0,r=t.count;a<r;a++)ve.fromBufferAttribute(t,a),n=Math.max(n,e.distanceToSquared(ve));if(i)for(let a=0,r=i.length;a<r;a++){const o=i[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)ve.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(t,c),ve.add(qi)),n=Math.max(n,e.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const e=t.array,n=i.position.array,a=i.normal.array,r=i.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let A=0;A<o;A++)c[A]=new Q,d[A]=new Q;const f=new Q,p=new Q,m=new Q,y=new kt,T=new kt,h=new kt,u=new Q,v=new Q;function g(A,k,U){f.fromArray(n,A*3),p.fromArray(n,k*3),m.fromArray(n,U*3),y.fromArray(r,A*2),T.fromArray(r,k*2),h.fromArray(r,U*2),p.sub(f),m.sub(f),T.sub(y),h.sub(y);const X=1/(T.x*h.y-h.x*T.y);isFinite(X)&&(u.copy(p).multiplyScalar(h.y).addScaledVector(m,-T.y).multiplyScalar(X),v.copy(m).multiplyScalar(T.x).addScaledVector(p,-h.x).multiplyScalar(X),c[A].add(u),c[k].add(u),c[U].add(u),d[A].add(v),d[k].add(v),d[U].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.length}]);for(let A=0,k=_.length;A<k;++A){const U=_[A],X=U.start,I=U.count;for(let B=X,Y=X+I;B<Y;B+=3)g(e[B+0],e[B+1],e[B+2])}const E=new Q,S=new Q,x=new Q,O=new Q;function M(A){x.fromArray(a,A*3),O.copy(x);const k=c[A];E.copy(k),E.sub(x.multiplyScalar(x.dot(k))).normalize(),S.crossVectors(O,k);const X=S.dot(d[A])<0?-1:1;l[A*4]=E.x,l[A*4+1]=E.y,l[A*4+2]=E.z,l[A*4+3]=X}for(let A=0,k=_.length;A<k;++A){const U=_[A],X=U.start,I=U.count;for(let B=X,Y=X+I;B<Y;B+=3)M(e[B+0]),M(e[B+1]),M(e[B+2])}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let e=this.getAttribute("normal");if(e===void 0)e=new Ze(new Float32Array(i.count*3),3),this.setAttribute("normal",e);else for(let p=0,m=e.count;p<m;p++)e.setXYZ(p,0,0,0);const n=new Q,a=new Q,r=new Q,o=new Q,l=new Q,c=new Q,d=new Q,f=new Q;if(t)for(let p=0,m=t.count;p<m;p+=3){const y=t.getX(p+0),T=t.getX(p+1),h=t.getX(p+2);n.fromBufferAttribute(i,y),a.fromBufferAttribute(i,T),r.fromBufferAttribute(i,h),d.subVectors(r,a),f.subVectors(n,a),d.cross(f),o.fromBufferAttribute(e,y),l.fromBufferAttribute(e,T),c.fromBufferAttribute(e,h),o.add(d),l.add(d),c.add(d),e.setXYZ(y,o.x,o.y,o.z),e.setXYZ(T,l.x,l.y,l.z),e.setXYZ(h,c.x,c.y,c.z)}else for(let p=0,m=i.count;p<m;p+=3)n.fromBufferAttribute(i,p+0),a.fromBufferAttribute(i,p+1),r.fromBufferAttribute(i,p+2),d.subVectors(r,a),f.subVectors(n,a),d.cross(f),e.setXYZ(p+0,d.x,d.y,d.z),e.setXYZ(p+1,d.x,d.y,d.z),e.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),e.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,e=t.count;i<e;i++)ve.fromBufferAttribute(t,i),ve.normalize(),t.setXYZ(i,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,f=o.normalized,p=new c.constructor(l.length*d);let m=0,y=0;for(let T=0,h=l.length;T<h;T++){o.isInterleavedBufferAttribute?m=l[T]*o.data.stride+o.offset:m=l[T]*d;for(let u=0;u<d;u++)p[y++]=c[m++]}return new Ze(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Je,e=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,e);i.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,f=c.length;d<f;d++){const p=c[d],m=t(p,e);l.push(m)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const e=this.attributes;for(const l in e){const c=e[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,p=c.length;f<p;f++){const m=c[f];d.push(m.toJSON(t.data))}d.length>0&&(n[l]=d,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const e=t.index;e!==null&&this.setIndex(e.clone(i));const n=t.attributes;for(const c in n){const d=n[c];this.setAttribute(c,d.clone(i))}const a=t.morphAttributes;for(const c in a){const d=[],f=a[c];for(let p=0,m=f.length;p<m;p++)d.push(f[p].clone(i));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,d=r.length;c<d;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ko=new fe,bi=new wa,Kn=new Ca,Ho=new Q,Zi=new Q,Ji=new Q,Qi=new Q,Zs=new Q,qn=new Q,Zn=new kt,Jn=new kt,Qn=new kt,Vo=new Q,Wo=new Q,Yo=new Q,ts=new Q,es=new Q;class Qt extends be{constructor(t=new Je,i=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,e=Object.keys(i);if(e.length>0){const n=i[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,i){const e=this.geometry,n=e.attributes.position,a=e.morphAttributes.position,r=e.morphTargetsRelative;i.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(a&&o){qn.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],f=a[l];d!==0&&(Zs.fromBufferAttribute(f,t),r?qn.addScaledVector(Zs,d):qn.addScaledVector(Zs.sub(i),d))}i.add(qn)}return i}raycast(t,i){const e=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere),Kn.applyMatrix4(a),bi.copy(t.ray).recast(t.near),!(Kn.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Kn,Ho)===null||bi.origin.distanceToSquared(Ho)>(t.far-t.near)**2))&&(ko.copy(a).invert(),bi.copy(t.ray).applyMatrix4(ko),!(e.boundingBox!==null&&bi.intersectsBox(e.boundingBox)===!1)&&this._computeIntersections(t,i,bi)))}_computeIntersections(t,i,e){let n;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,f=a.attributes.normal,p=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(r))for(let y=0,T=p.length;y<T;y++){const h=p[y],u=r[h.materialIndex],v=Math.max(h.start,m.start),g=Math.min(o.count,Math.min(h.start+h.count,m.start+m.count));for(let _=v,E=g;_<E;_+=3){const S=o.getX(_),x=o.getX(_+1),O=o.getX(_+2);n=is(this,u,t,e,c,d,f,S,x,O),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=h.materialIndex,i.push(n))}}else{const y=Math.max(0,m.start),T=Math.min(o.count,m.start+m.count);for(let h=y,u=T;h<u;h+=3){const v=o.getX(h),g=o.getX(h+1),_=o.getX(h+2);n=is(this,r,t,e,c,d,f,v,g,_),n&&(n.faceIndex=Math.floor(h/3),i.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let y=0,T=p.length;y<T;y++){const h=p[y],u=r[h.materialIndex],v=Math.max(h.start,m.start),g=Math.min(l.count,Math.min(h.start+h.count,m.start+m.count));for(let _=v,E=g;_<E;_+=3){const S=_,x=_+1,O=_+2;n=is(this,u,t,e,c,d,f,S,x,O),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=h.materialIndex,i.push(n))}}else{const y=Math.max(0,m.start),T=Math.min(l.count,m.start+m.count);for(let h=y,u=T;h<u;h+=3){const v=h,g=h+1,_=h+2;n=is(this,r,t,e,c,d,f,v,g,_),n&&(n.faceIndex=Math.floor(h/3),i.push(n))}}}}function oh(s,t,i,e,n,a,r,o){let l;if(t.side===Le?l=e.intersectTriangle(r,a,n,!0,o):l=e.intersectTriangle(n,a,r,t.side===Ti,o),l===null)return null;es.copy(o),es.applyMatrix4(s.matrixWorld);const c=i.ray.origin.distanceTo(es);return c<i.near||c>i.far?null:{distance:c,point:es.clone(),object:s}}function is(s,t,i,e,n,a,r,o,l,c){s.getVertexPosition(o,Zi),s.getVertexPosition(l,Ji),s.getVertexPosition(c,Qi);const d=oh(s,t,i,e,Zi,Ji,Qi,ts);if(d){n&&(Zn.fromBufferAttribute(n,o),Jn.fromBufferAttribute(n,l),Qn.fromBufferAttribute(n,c),d.uv=Xe.getInterpolation(ts,Zi,Ji,Qi,Zn,Jn,Qn,new kt)),a&&(Zn.fromBufferAttribute(a,o),Jn.fromBufferAttribute(a,l),Qn.fromBufferAttribute(a,c),d.uv1=Xe.getInterpolation(ts,Zi,Ji,Qi,Zn,Jn,Qn,new kt),d.uv2=d.uv1),r&&(Vo.fromBufferAttribute(r,o),Wo.fromBufferAttribute(r,l),Yo.fromBufferAttribute(r,c),d.normal=Xe.getInterpolation(ts,Zi,Ji,Qi,Vo,Wo,Yo,new Q),d.normal.dot(e.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new Q,materialIndex:0};Xe.getNormal(Zi,Ji,Qi,f.normal),d.face=f}return d}class xe extends Je{constructor(t=1,i=1,e=1,n=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:e,widthSegments:n,heightSegments:a,depthSegments:r};const o=this;n=Math.floor(n),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],d=[],f=[];let p=0,m=0;y("z","y","x",-1,-1,e,i,t,r,a,0),y("z","y","x",1,-1,e,i,-t,r,a,1),y("x","z","y",1,1,t,e,i,n,r,2),y("x","z","y",1,-1,t,e,-i,n,r,3),y("x","y","z",1,-1,t,i,e,n,a,4),y("x","y","z",-1,-1,t,i,-e,n,a,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(f,2));function y(T,h,u,v,g,_,E,S,x,O,M){const A=_/x,k=E/O,U=_/2,X=E/2,I=S/2,B=x+1,Y=O+1;let $=0,H=0;const Z=new Q;for(let it=0;it<Y;it++){const j=it*k-X;for(let V=0;V<B;V++){const F=V*A-U;Z[T]=F*v,Z[h]=j*g,Z[u]=I,c.push(Z.x,Z.y,Z.z),Z[T]=0,Z[h]=0,Z[u]=S>0?1:-1,d.push(Z.x,Z.y,Z.z),f.push(V/x),f.push(1-it/O),$+=1}}for(let it=0;it<O;it++)for(let j=0;j<x;j++){const V=p+j+B*it,F=p+j+B*(it+1),K=p+(j+1)+B*(it+1),nt=p+(j+1)+B*it;l.push(V,F,nt),l.push(F,K,nt),H+=6}o.addGroup(m,H,M),m+=H,p+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function pn(s){const t={};for(const i in s){t[i]={};for(const e in s[i]){const n=s[i][e];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][e]=null):t[i][e]=n.clone():Array.isArray(n)?t[i][e]=n.slice():t[i][e]=n}}return t}function Pe(s){const t={};for(let i=0;i<s.length;i++){const e=pn(s[i]);for(const n in e)t[n]=e[n]}return t}function rh(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Jr(s){return s.getRenderTarget()===null?s.outputColorSpace:te.workingColorSpace}const lh={clone:pn,merge:Pe};var ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends Nn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ch,this.fragmentShader=hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pn(t.uniforms),this.uniformsGroups=rh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?i.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?i.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?i.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?i.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?i.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?i.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?i.uniforms[n]={type:"m4",value:r.toArray()}:i.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const e={};for(const n in this.extensions)this.extensions[n]===!0&&(e[n]=!0);return Object.keys(e).length>0&&(i.extensions=e),i}}class Qr extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=ri}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Be extends Qr{constructor(t=50,i=1,e=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=e,this.far=n,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=_a*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _a*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,i,e,n,a,r){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=e,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(cs*.5*this.fov)/this.zoom,e=2*i,n=this.aspect*e,a=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*n/l,i-=r.offsetY*e/c,n*=r.width/l,e*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,i,i-e,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const tn=-90,en=1;class dh extends be{constructor(t,i,e){super(),this.type="CubeCamera",this.renderTarget=e,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Be(tn,en,t,i);n.layers=this.layers,this.add(n);const a=new Be(tn,en,t,i);a.layers=this.layers,this.add(a);const r=new Be(tn,en,t,i);r.layers=this.layers,this.add(r);const o=new Be(tn,en,t,i);o.layers=this.layers,this.add(o);const l=new Be(tn,en,t,i);l.layers=this.layers,this.add(l);const c=new Be(tn,en,t,i);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[e,n,a,r,o,l]=i;for(const c of i)this.remove(c);if(t===ri)e.up.set(0,1,0),e.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ms)e.up.set(0,-1,0),e.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of i)this.add(c),c.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:e,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,d]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const T=e.texture.generateMipmaps;e.texture.generateMipmaps=!1,t.setRenderTarget(e,0,n),t.render(i,a),t.setRenderTarget(e,1,n),t.render(i,r),t.setRenderTarget(e,2,n),t.render(i,o),t.setRenderTarget(e,3,n),t.render(i,l),t.setRenderTarget(e,4,n),t.render(i,c),e.texture.generateMipmaps=T,t.setRenderTarget(e,5,n),t.render(i,d),t.setRenderTarget(f,p,m),t.xr.enabled=y,e.texture.needsPMREMUpdate=!0}}class tl extends ze{constructor(t,i,e,n,a,r,o,l,c,d){t=t!==void 0?t:[],i=i!==void 0?i:dn,super(t,i,e,n,a,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uh extends Oi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const e={width:t,height:t,depth:1},n=[e,e,e,e,e,e];i.encoding!==void 0&&(An("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ii?Te:ke),this.texture=new tl(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ge}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const e={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new xe(5,5,5),a=new zi({name:"CubemapFromEquirect",uniforms:pn(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Le,blending:vi});a.uniforms.tEquirect.value=i;const r=new Qt(n,a),o=i.minFilter;return i.minFilter===Ln&&(i.minFilter=Ge),new dh(1,10,this).update(t,r),i.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,i,e,n){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(i,e,n);t.setRenderTarget(a)}}const Js=new Q,fh=new Q,ph=new qt;class pi{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,e,n){return this.normal.set(t,i,e),this.constant=n,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,e){const n=Js.subVectors(e,i).cross(fh.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const e=t.delta(Js),n=this.normal.dot(e);if(n===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:i.copy(t.start).addScaledVector(e,a)}intersectsLine(t){const i=this.distanceToPoint(t.start),e=this.distanceToPoint(t.end);return i<0&&e>0||e<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const e=i||ph.getNormalMatrix(t),n=this.coplanarPoint(Js).applyMatrix4(t),a=this.normal.applyMatrix3(e).normalize();return this.constant=-n.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Ca,ns=new Q;class La{constructor(t=new pi,i=new pi,e=new pi,n=new pi,a=new pi,r=new pi){this.planes=[t,i,e,n,a,r]}set(t,i,e,n,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(i),o[2].copy(e),o[3].copy(n),o[4].copy(a),o[5].copy(r),this}copy(t){const i=this.planes;for(let e=0;e<6;e++)i[e].copy(t.planes[e]);return this}setFromProjectionMatrix(t,i=ri){const e=this.planes,n=t.elements,a=n[0],r=n[1],o=n[2],l=n[3],c=n[4],d=n[5],f=n[6],p=n[7],m=n[8],y=n[9],T=n[10],h=n[11],u=n[12],v=n[13],g=n[14],_=n[15];if(e[0].setComponents(l-a,p-c,h-m,_-u).normalize(),e[1].setComponents(l+a,p+c,h+m,_+u).normalize(),e[2].setComponents(l+r,p+d,h+y,_+v).normalize(),e[3].setComponents(l-r,p-d,h-y,_-v).normalize(),e[4].setComponents(l-o,p-f,h-T,_-g).normalize(),i===ri)e[5].setComponents(l+o,p+f,h+T,_+g).normalize();else if(i===ms)e[5].setComponents(o,f,T,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ai.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const i=this.planes,e=t.center,n=-t.radius;for(let a=0;a<6;a++)if(i[a].distanceToPoint(e)<n)return!1;return!0}intersectsBox(t){const i=this.planes;for(let e=0;e<6;e++){const n=i[e];if(ns.x=n.normal.x>0?t.max.x:t.min.x,ns.y=n.normal.y>0?t.max.y:t.min.y,ns.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(ns)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let e=0;e<6;e++)if(i[e].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function el(){let s=null,t=!1,i=null,e=null;function n(a,r){i(a,r),e=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&i!==null&&(e=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(e),t=!1},setAnimationLoop:function(a){i=a},setContext:function(a){s=a}}}function mh(s,t){const i=t.isWebGL2,e=new WeakMap;function n(c,d){const f=c.array,p=c.usage,m=f.byteLength,y=s.createBuffer();s.bindBuffer(d,y),s.bufferData(d,f,p),c.onUploadCallback();let T;if(f instanceof Float32Array)T=s.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(i)T=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)T=s.SHORT;else if(f instanceof Uint32Array)T=s.UNSIGNED_INT;else if(f instanceof Int32Array)T=s.INT;else if(f instanceof Int8Array)T=s.BYTE;else if(f instanceof Uint8Array)T=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)T=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:y,type:T,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function a(c,d,f){const p=d.array,m=d._updateRange,y=d.updateRanges;if(s.bindBuffer(f,c),m.count===-1&&y.length===0&&s.bufferSubData(f,0,p),y.length!==0){for(let T=0,h=y.length;T<h;T++){const u=y[T];i?s.bufferSubData(f,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):s.bufferSubData(f,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}m.count!==-1&&(i?s.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):s.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(s.deleteBuffer(d.buffer),e.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);if(f===void 0)e.set(c,n(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(f.buffer,c,d),f.version=c.version}}return{get:r,remove:o,update:l}}class Ia extends Je{constructor(t=1,i=1,e=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:e,heightSegments:n};const a=t/2,r=i/2,o=Math.floor(e),l=Math.floor(n),c=o+1,d=l+1,f=t/o,p=i/l,m=[],y=[],T=[],h=[];for(let u=0;u<d;u++){const v=u*p-r;for(let g=0;g<c;g++){const _=g*f-a;y.push(_,-v,0),T.push(0,0,1),h.push(g/o),h.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const g=v+c*u,_=v+c*(u+1),E=v+1+c*(u+1),S=v+1+c*u;m.push(g,_,S),m.push(_,E,S)}this.setIndex(m),this.setAttribute("position",new Ae(y,3)),this.setAttribute("normal",new Ae(T,3)),this.setAttribute("uv",new Ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ia(t.width,t.height,t.widthSegments,t.heightSegments)}}var gh=`#ifdef USE_ALPHAHASH
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
}`,Xt={alphahash_fragment:gh,alphahash_pars_fragment:vh,alphamap_fragment:yh,alphamap_pars_fragment:_h,alphatest_fragment:Th,alphatest_pars_fragment:Eh,aomap_fragment:Mh,aomap_pars_fragment:Sh,batching_pars_vertex:xh,batching_vertex:bh,begin_vertex:Ah,beginnormal_vertex:Ph,bsdfs:Ch,iridescence_fragment:wh,bumpmap_pars_fragment:Rh,clipping_planes_fragment:Lh,clipping_planes_pars_fragment:Ih,clipping_planes_pars_vertex:Dh,clipping_planes_vertex:Oh,color_fragment:Nh,color_pars_fragment:zh,color_pars_vertex:Uh,color_vertex:Fh,common:Gh,cube_uv_reflection_fragment:Bh,defaultnormal_vertex:kh,displacementmap_pars_vertex:Hh,displacementmap_vertex:Vh,emissivemap_fragment:Wh,emissivemap_pars_fragment:Yh,colorspace_fragment:Xh,colorspace_pars_fragment:$h,envmap_fragment:jh,envmap_common_pars_fragment:Kh,envmap_pars_fragment:qh,envmap_pars_vertex:Zh,envmap_physical_pars_fragment:cd,envmap_vertex:Jh,fog_vertex:Qh,fog_pars_vertex:td,fog_fragment:ed,fog_pars_fragment:id,gradientmap_pars_fragment:nd,lightmap_fragment:sd,lightmap_pars_fragment:ad,lights_lambert_fragment:od,lights_lambert_pars_fragment:rd,lights_pars_begin:ld,lights_toon_fragment:hd,lights_toon_pars_fragment:dd,lights_phong_fragment:ud,lights_phong_pars_fragment:fd,lights_physical_fragment:pd,lights_physical_pars_fragment:md,lights_fragment_begin:gd,lights_fragment_maps:vd,lights_fragment_end:yd,logdepthbuf_fragment:_d,logdepthbuf_pars_fragment:Td,logdepthbuf_pars_vertex:Ed,logdepthbuf_vertex:Md,map_fragment:Sd,map_pars_fragment:xd,map_particle_fragment:bd,map_particle_pars_fragment:Ad,metalnessmap_fragment:Pd,metalnessmap_pars_fragment:Cd,morphcolor_vertex:wd,morphnormal_vertex:Rd,morphtarget_pars_vertex:Ld,morphtarget_vertex:Id,normal_fragment_begin:Dd,normal_fragment_maps:Od,normal_pars_fragment:Nd,normal_pars_vertex:zd,normal_vertex:Ud,normalmap_pars_fragment:Fd,clearcoat_normal_fragment_begin:Gd,clearcoat_normal_fragment_maps:Bd,clearcoat_pars_fragment:kd,iridescence_pars_fragment:Hd,opaque_fragment:Vd,packing:Wd,premultiplied_alpha_fragment:Yd,project_vertex:Xd,dithering_fragment:$d,dithering_pars_fragment:jd,roughnessmap_fragment:Kd,roughnessmap_pars_fragment:qd,shadowmap_pars_fragment:Zd,shadowmap_pars_vertex:Jd,shadowmap_vertex:Qd,shadowmask_pars_fragment:tu,skinbase_vertex:eu,skinning_pars_vertex:iu,skinning_vertex:nu,skinnormal_vertex:su,specularmap_fragment:au,specularmap_pars_fragment:ou,tonemapping_fragment:ru,tonemapping_pars_fragment:lu,transmission_fragment:cu,transmission_pars_fragment:hu,uv_pars_fragment:du,uv_pars_vertex:uu,uv_vertex:fu,worldpos_vertex:pu,background_vert:mu,background_frag:gu,backgroundCube_vert:vu,backgroundCube_frag:yu,cube_vert:_u,cube_frag:Tu,depth_vert:Eu,depth_frag:Mu,distanceRGBA_vert:Su,distanceRGBA_frag:xu,equirect_vert:bu,equirect_frag:Au,linedashed_vert:Pu,linedashed_frag:Cu,meshbasic_vert:wu,meshbasic_frag:Ru,meshlambert_vert:Lu,meshlambert_frag:Iu,meshmatcap_vert:Du,meshmatcap_frag:Ou,meshnormal_vert:Nu,meshnormal_frag:zu,meshphong_vert:Uu,meshphong_frag:Fu,meshphysical_vert:Gu,meshphysical_frag:Bu,meshtoon_vert:ku,meshtoon_frag:Hu,points_vert:Vu,points_frag:Wu,shadow_vert:Yu,shadow_frag:Xu,sprite_vert:$u,sprite_frag:ju},Lt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},qe={basic:{uniforms:Pe([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Pe([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Pe([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Pe([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Pe([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Pe([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Pe([Lt.points,Lt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Pe([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Pe([Lt.common,Lt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Pe([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Pe([Lt.sprite,Lt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Pe([Lt.common,Lt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Pe([Lt.lights,Lt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};qe.physical={uniforms:Pe([qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const ss={r:0,b:0,g:0};function Ku(s,t,i,e,n,a,r){const o=new Jt(0);let l=a===!0?0:1,c,d,f=null,p=0,m=null;function y(h,u){let v=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?i:t).get(g)),g===null?T(o,l):g&&g.isColor&&(T(g,1),v=!0);const _=s.xr.getEnvironmentBlendMode();_==="additive"?e.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),g&&(g.isCubeTexture||g.mapping===_s)?(d===void 0&&(d=new Qt(new xe(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:pn(qe.backgroundCube.uniforms),vertexShader:qe.backgroundCube.vertexShader,fragmentShader:qe.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(E,S,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),d.material.uniforms.envMap.value=g,d.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=te.getTransfer(g.colorSpace)!==ne,(f!==g||p!==g.version||m!==s.toneMapping)&&(d.material.needsUpdate=!0,f=g,p=g.version,m=s.toneMapping),d.layers.enableAll(),h.unshift(d,d.geometry,d.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Qt(new Ia(2,2),new zi({name:"BackgroundMaterial",uniforms:pn(qe.background.uniforms),vertexShader:qe.background.vertexShader,fragmentShader:qe.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=te.getTransfer(g.colorSpace)!==ne,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||p!==g.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,f=g,p=g.version,m=s.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null))}function T(h,u){h.getRGB(ss,Jr(s)),e.buffers.color.setClear(ss.r,ss.g,ss.b,u,r)}return{getClearColor:function(){return o},setClearColor:function(h,u=1){o.set(h),l=u,T(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,T(o,l)},render:y}}function qu(s,t,i,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=e.isWebGL2?null:t.get("OES_vertex_array_object"),r=e.isWebGL2||a!==null,o={},l=h(null);let c=l,d=!1;function f(I,B,Y,$,H){let Z=!1;if(r){const it=T($,Y,B);c!==it&&(c=it,m(c.object)),Z=u(I,$,Y,H),Z&&v(I,$,Y,H)}else{const it=B.wireframe===!0;(c.geometry!==$.id||c.program!==Y.id||c.wireframe!==it)&&(c.geometry=$.id,c.program=Y.id,c.wireframe=it,Z=!0)}H!==null&&i.update(H,s.ELEMENT_ARRAY_BUFFER),(Z||d)&&(d=!1,O(I,B,Y,$),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,i.get(H).buffer))}function p(){return e.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function m(I){return e.isWebGL2?s.bindVertexArray(I):a.bindVertexArrayOES(I)}function y(I){return e.isWebGL2?s.deleteVertexArray(I):a.deleteVertexArrayOES(I)}function T(I,B,Y){const $=Y.wireframe===!0;let H=o[I.id];H===void 0&&(H={},o[I.id]=H);let Z=H[B.id];Z===void 0&&(Z={},H[B.id]=Z);let it=Z[$];return it===void 0&&(it=h(p()),Z[$]=it),it}function h(I){const B=[],Y=[],$=[];for(let H=0;H<n;H++)B[H]=0,Y[H]=0,$[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:$,object:I,attributes:{},index:null}}function u(I,B,Y,$){const H=c.attributes,Z=B.attributes;let it=0;const j=Y.getAttributes();for(const V in j)if(j[V].location>=0){const K=H[V];let nt=Z[V];if(nt===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(nt=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(nt=I.instanceColor)),K===void 0||K.attribute!==nt||nt&&K.data!==nt.data)return!0;it++}return c.attributesNum!==it||c.index!==$}function v(I,B,Y,$){const H={},Z=B.attributes;let it=0;const j=Y.getAttributes();for(const V in j)if(j[V].location>=0){let K=Z[V];K===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));const nt={};nt.attribute=K,K&&K.data&&(nt.data=K.data),H[V]=nt,it++}c.attributes=H,c.attributesNum=it,c.index=$}function g(){const I=c.newAttributes;for(let B=0,Y=I.length;B<Y;B++)I[B]=0}function _(I){E(I,0)}function E(I,B){const Y=c.newAttributes,$=c.enabledAttributes,H=c.attributeDivisors;Y[I]=1,$[I]===0&&(s.enableVertexAttribArray(I),$[I]=1),H[I]!==B&&((e.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[e.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,B),H[I]=B)}function S(){const I=c.newAttributes,B=c.enabledAttributes;for(let Y=0,$=B.length;Y<$;Y++)B[Y]!==I[Y]&&(s.disableVertexAttribArray(Y),B[Y]=0)}function x(I,B,Y,$,H,Z,it){it===!0?s.vertexAttribIPointer(I,B,Y,H,Z):s.vertexAttribPointer(I,B,Y,$,H,Z)}function O(I,B,Y,$){if(e.isWebGL2===!1&&(I.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();const H=$.attributes,Z=Y.getAttributes(),it=B.defaultAttributeValues;for(const j in Z){const V=Z[j];if(V.location>=0){let F=H[j];if(F===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(F=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(F=I.instanceColor)),F!==void 0){const K=F.normalized,nt=F.itemSize,_t=i.get(F);if(_t===void 0)continue;const St=_t.buffer,Nt=_t.type,Rt=_t.bytesPerElement,R=e.isWebGL2===!0&&(Nt===s.INT||Nt===s.UNSIGNED_INT||F.gpuType===Nr);if(F.isInterleavedBufferAttribute){const N=F.data,C=N.stride,q=F.offset;if(N.isInstancedInterleavedBuffer){for(let G=0;G<V.locationSize;G++)E(V.location+G,N.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let G=0;G<V.locationSize;G++)_(V.location+G);s.bindBuffer(s.ARRAY_BUFFER,St);for(let G=0;G<V.locationSize;G++)x(V.location+G,nt/V.locationSize,Nt,K,C*Rt,(q+nt/V.locationSize*G)*Rt,R)}else{if(F.isInstancedBufferAttribute){for(let N=0;N<V.locationSize;N++)E(V.location+N,F.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let N=0;N<V.locationSize;N++)_(V.location+N);s.bindBuffer(s.ARRAY_BUFFER,St);for(let N=0;N<V.locationSize;N++)x(V.location+N,nt/V.locationSize,Nt,K,nt*Rt,nt/V.locationSize*N*Rt,R)}}else if(it!==void 0){const K=it[j];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(V.location,K);break;case 3:s.vertexAttrib3fv(V.location,K);break;case 4:s.vertexAttrib4fv(V.location,K);break;default:s.vertexAttrib1fv(V.location,K)}}}}S()}function M(){U();for(const I in o){const B=o[I];for(const Y in B){const $=B[Y];for(const H in $)y($[H].object),delete $[H];delete B[Y]}delete o[I]}}function A(I){if(o[I.id]===void 0)return;const B=o[I.id];for(const Y in B){const $=B[Y];for(const H in $)y($[H].object),delete $[H];delete B[Y]}delete o[I.id]}function k(I){for(const B in o){const Y=o[B];if(Y[I.id]===void 0)continue;const $=Y[I.id];for(const H in $)y($[H].object),delete $[H];delete Y[I.id]}}function U(){X(),d=!0,c!==l&&(c=l,m(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:U,resetDefaultState:X,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:k,initAttributes:g,enableAttribute:_,disableUnusedAttributes:S}}function Zu(s,t,i,e){const n=e.isWebGL2;let a;function r(d){a=d}function o(d,f){s.drawArrays(a,d,f),i.update(f,a,1)}function l(d,f,p){if(p===0)return;let m,y;if(n)m=s,y="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[y](a,d,f,p),i.update(f,a,p)}function c(d,f,p){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<p;y++)this.render(d[y],f[y]);else{m.multiDrawArraysWEBGL(a,d,0,f,0,p);let y=0;for(let T=0;T<p;T++)y+=f[T];i.update(y,a,1)}}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Ju(s,t,i){let e;function n(){if(e!==void 0)return e;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");e=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else e=0;return e}function a(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=i.precision!==void 0?i.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||t.has("WEBGL_draw_buffers"),d=i.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),T=s.getParameter(s.MAX_VERTEX_ATTRIBS),h=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),u=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),g=p>0,_=r||t.has("OES_texture_float"),E=g&&_,S=r?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:y,maxAttributes:T,maxVertexUniforms:h,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:_,floatVertexTextures:E,maxSamples:S}}function Qu(s){const t=this;let i=null,e=0,n=!1,a=!1;const r=new pi,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||e!==0||n;return n=p,e=f.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){i=d(f,p,0)},this.setState=function(f,p,m){const y=f.clippingPlanes,T=f.clipIntersection,h=f.clipShadows,u=s.get(f);if(!n||y===null||y.length===0||a&&!h)a?d(null):c();else{const v=a?0:e,g=v*4;let _=u.clippingState||null;l.value=_,_=d(y,p,g,m);for(let E=0;E!==g;++E)_[E]=i[E];u.clippingState=_,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=e>0),t.numPlanes=e,t.numIntersection=0}function d(f,p,m,y){const T=f!==null?f.length:0;let h=null;if(T!==0){if(h=l.value,y!==!0||h===null){const u=m+T*4,v=p.matrixWorldInverse;o.getNormalMatrix(v),(h===null||h.length<u)&&(h=new Float32Array(u));for(let g=0,_=m;g!==T;++g,_+=4)r.copy(f[g]).applyMatrix4(v,o),r.normal.toArray(h,_),h[_+3]=r.constant}l.value=h,l.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,h}}function tf(s){let t=new WeakMap;function i(r,o){return o===pa?r.mapping=dn:o===ma&&(r.mapping=un),r}function e(r){if(r&&r.isTexture){const o=r.mapping;if(o===pa||o===ma)if(t.has(r)){const l=t.get(r).texture;return i(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new uh(l.height/2);return c.fromEquirectangularTexture(s,r),t.set(r,c),r.addEventListener("dispose",n),i(c.texture,r.mapping)}else return null}}return r}function n(r){const o=r.target;o.removeEventListener("dispose",n);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:e,dispose:a}}class il extends Qr{constructor(t=-1,i=1,e=1,n=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=e,this.bottom=n,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,e,n,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=e,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),e=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=e-t,r=e+t,o=n+i,l=n-i;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const an=4,Xo=[.125,.215,.35,.446,.526,.582],wi=20,Qs=new il,$o=new Jt;let ta=null,ea=0,ia=0;const Pi=(1+Math.sqrt(5))/2,nn=1/Pi,jo=[new Q(1,1,1),new Q(-1,1,1),new Q(1,1,-1),new Q(-1,1,-1),new Q(0,Pi,nn),new Q(0,Pi,-nn),new Q(nn,0,Pi),new Q(-nn,0,Pi),new Q(Pi,nn,0),new Q(-Pi,nn,0)];class Ko{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,e=.1,n=100){ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,e,n,a),i>0&&this._blur(a,0,0,i),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ta,ea,ia),t.scissorTest=!1,as(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===dn||t.mapping===un?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel();const e=i||this._allocateTargets();return this._textureToCubeUV(t,e),this._applyPMREM(e),this._cleanup(e),e}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,e={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:In,format:je,colorSpace:li,depthBuffer:!1},n=qo(t,i,e);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qo(t,i,e);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ef(a)),this._blurMaterial=nf(a,t,i)}return n}_compileMaterial(t){const i=new Qt(this._lodPlanes[0],t);this._renderer.compile(i,Qs)}_sceneToCubeUV(t,i,e,n){const o=new Be(90,1,i,e),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor($o),d.toneMapping=yi,d.autoClear=!1;const m=new Pn({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),y=new Qt(new xe,m);let T=!1;const h=t.background;h?h.isColor&&(m.color.copy(h),t.background=null,T=!0):(m.color.copy($o),T=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):v===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const g=this._cubeSize;as(n,v*g,u>2?g:0,g,g),d.setRenderTarget(n),T&&d.render(y,o),d.render(t,o)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=h}_textureToCubeUV(t,i){const e=this._renderer,n=t.mapping===dn||t.mapping===un;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zo());const a=n?this._cubemapMaterial:this._equirectMaterial,r=new Qt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;as(i,0,0,3*l,2*l),e.setRenderTarget(i),e.render(r,Qs)}_applyPMREM(t){const i=this._renderer,e=i.autoClear;i.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),r=jo[(n-1)%jo.length];this._blur(t,n-1,n,a,r)}i.autoClear=e}_blur(t,i,e,n,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,i,e,n,"latitudinal",a),this._halfBlur(r,t,e,e,n,"longitudinal",a)}_halfBlur(t,i,e,n,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Qt(this._lodPlanes[n],c),p=c.uniforms,m=this._sizeLods[e]-1,y=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*wi-1),T=a/y,h=isFinite(a)?1+Math.floor(d*T):wi;h>wi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${wi}`);const u=[];let v=0;for(let x=0;x<wi;++x){const O=x/T,M=Math.exp(-O*O/2);u.push(M),x===0?v+=M:x<h&&(v+=2*M)}for(let x=0;x<u.length;x++)u[x]=u[x]/v;p.envMap.value=t.texture,p.samples.value=h,p.weights.value=u,p.latitudinal.value=r==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:g}=this;p.dTheta.value=y,p.mipInt.value=g-e;const _=this._sizeLods[n],E=3*_*(n>g-an?n-g+an:0),S=4*(this._cubeSize-_);as(i,E,S,3*_,2*_),l.setRenderTarget(i),l.render(f,Qs)}}function ef(s){const t=[],i=[],e=[];let n=s;const a=s-an+1+Xo.length;for(let r=0;r<a;r++){const o=Math.pow(2,n);i.push(o);let l=1/o;r>s-an?l=Xo[r-s+an-1]:r===0&&(l=0),e.push(l);const c=1/(o-2),d=-c,f=1+c,p=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,y=6,T=3,h=2,u=1,v=new Float32Array(T*y*m),g=new Float32Array(h*y*m),_=new Float32Array(u*y*m);for(let S=0;S<m;S++){const x=S%3*2/3-1,O=S>2?0:-1,M=[x,O,0,x+2/3,O,0,x+2/3,O+1,0,x,O,0,x+2/3,O+1,0,x,O+1,0];v.set(M,T*y*S),g.set(p,h*y*S);const A=[S,S,S,S,S,S];_.set(A,u*y*S)}const E=new Je;E.setAttribute("position",new Ze(v,T)),E.setAttribute("uv",new Ze(g,h)),E.setAttribute("faceIndex",new Ze(_,u)),t.push(E),n>an&&n--}return{lodPlanes:t,sizeLods:i,sigmas:e}}function qo(s,t,i){const e=new Oi(s,t,i);return e.texture.mapping=_s,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function as(s,t,i,e,n){s.viewport.set(t,i,e,n),s.scissor.set(t,i,e,n)}function nf(s,t,i){const e=new Float32Array(wi),n=new Q(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Da(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Zo(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Da(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Jo(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Da(){return`

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
	`}function sf(s){let t=new WeakMap,i=null;function e(o){if(o&&o.isTexture){const l=o.mapping,c=l===pa||l===ma,d=l===dn||l===un;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return i===null&&(i=new Ko(s)),f=c?i.fromEquirectangular(o,f):i.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||d&&f&&n(f)){i===null&&(i=new Ko(s));const p=c?i.fromEquirectangular(o):i.fromCubemap(o);return t.set(o,p),o.addEventListener("dispose",a),p.texture}else return null}}}return o}function n(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:e,dispose:r}}function af(s){const t={};function i(e){if(t[e]!==void 0)return t[e];let n;switch(e){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(e)}return t[e]=n,n}return{has:function(e){return i(e)!==null},init:function(e){e.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(e){const n=i(e);return n===null&&console.warn("THREE.WebGLRenderer: "+e+" extension not supported."),n}}}function of(s,t,i,e){const n={},a=new WeakMap;function r(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const y in p.attributes)t.remove(p.attributes[y]);for(const y in p.morphAttributes){const T=p.morphAttributes[y];for(let h=0,u=T.length;h<u;h++)t.remove(T[h])}p.removeEventListener("dispose",r),delete n[p.id];const m=a.get(p);m&&(t.remove(m),a.delete(p)),e.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,i.memory.geometries--}function o(f,p){return n[p.id]===!0||(p.addEventListener("dispose",r),n[p.id]=!0,i.memory.geometries++),p}function l(f){const p=f.attributes;for(const y in p)t.update(p[y],s.ARRAY_BUFFER);const m=f.morphAttributes;for(const y in m){const T=m[y];for(let h=0,u=T.length;h<u;h++)t.update(T[h],s.ARRAY_BUFFER)}}function c(f){const p=[],m=f.index,y=f.attributes.position;let T=0;if(m!==null){const v=m.array;T=m.version;for(let g=0,_=v.length;g<_;g+=3){const E=v[g+0],S=v[g+1],x=v[g+2];p.push(E,S,S,x,x,E)}}else if(y!==void 0){const v=y.array;T=y.version;for(let g=0,_=v.length/3-1;g<_;g+=3){const E=g+0,S=g+1,x=g+2;p.push(E,S,S,x,x,E)}}else return;const h=new(Yr(p)?Zr:qr)(p,1);h.version=T;const u=a.get(f);u&&t.remove(u),a.set(f,h)}function d(f){const p=a.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function rf(s,t,i,e){const n=e.isWebGL2;let a;function r(m){a=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function d(m,y){s.drawElements(a,y,o,m*l),i.update(y,a,1)}function f(m,y,T){if(T===0)return;let h,u;if(n)h=s,u="drawElementsInstanced";else if(h=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[u](a,y,o,m*l,T),i.update(y,a,T)}function p(m,y,T){if(T===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let u=0;u<T;u++)this.render(m[u]/l,y[u]);else{h.multiDrawElementsWEBGL(a,y,0,o,m,0,T);let u=0;for(let v=0;v<T;v++)u+=y[v];i.update(u,a,1)}}this.setMode=r,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=p}function lf(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function e(a,r,o){switch(i.calls++,r){case s.TRIANGLES:i.triangles+=o*(a/3);break;case s.LINES:i.lines+=o*(a/2);break;case s.LINE_STRIP:i.lines+=o*(a-1);break;case s.LINE_LOOP:i.lines+=o*a;break;case s.POINTS:i.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function n(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:n,update:e}}function cf(s,t){return s[0]-t[0]}function hf(s,t){return Math.abs(t[1])-Math.abs(s[1])}function df(s,t,i){const e={},n=new Float32Array(8),a=new WeakMap,r=new ye,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,f){const p=c.morphTargetInfluences;if(t.isWebGL2===!0){const y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,T=y!==void 0?y.length:0;let h=a.get(d);if(h===void 0||h.count!==T){let B=function(){X.dispose(),a.delete(d),d.removeEventListener("dispose",B)};var m=B;h!==void 0&&h.texture.dispose();const g=d.morphAttributes.position!==void 0,_=d.morphAttributes.normal!==void 0,E=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],x=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),E===!0&&(M=3);let A=d.attributes.position.count*M,k=1;A>t.maxTextureSize&&(k=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const U=new Float32Array(A*k*4*T),X=new jr(U,A,k,T);X.type=gi,X.needsUpdate=!0;const I=M*4;for(let Y=0;Y<T;Y++){const $=S[Y],H=x[Y],Z=O[Y],it=A*k*4*Y;for(let j=0;j<$.count;j++){const V=j*I;g===!0&&(r.fromBufferAttribute($,j),U[it+V+0]=r.x,U[it+V+1]=r.y,U[it+V+2]=r.z,U[it+V+3]=0),_===!0&&(r.fromBufferAttribute(H,j),U[it+V+4]=r.x,U[it+V+5]=r.y,U[it+V+6]=r.z,U[it+V+7]=0),E===!0&&(r.fromBufferAttribute(Z,j),U[it+V+8]=r.x,U[it+V+9]=r.y,U[it+V+10]=r.z,U[it+V+11]=Z.itemSize===4?r.w:1)}}h={count:T,texture:X,size:new kt(A,k)},a.set(d,h),d.addEventListener("dispose",B)}let u=0;for(let g=0;g<p.length;g++)u+=p[g];const v=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(s,"morphTargetBaseInfluence",v),f.getUniforms().setValue(s,"morphTargetInfluences",p),f.getUniforms().setValue(s,"morphTargetsTexture",h.texture,i),f.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}else{const y=p===void 0?0:p.length;let T=e[d.id];if(T===void 0||T.length!==y){T=[];for(let _=0;_<y;_++)T[_]=[_,0];e[d.id]=T}for(let _=0;_<y;_++){const E=T[_];E[0]=_,E[1]=p[_]}T.sort(hf);for(let _=0;_<8;_++)_<y&&T[_][1]?(o[_][0]=T[_][0],o[_][1]=T[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(cf);const h=d.morphAttributes.position,u=d.morphAttributes.normal;let v=0;for(let _=0;_<8;_++){const E=o[_],S=E[0],x=E[1];S!==Number.MAX_SAFE_INTEGER&&x?(h&&d.getAttribute("morphTarget"+_)!==h[S]&&d.setAttribute("morphTarget"+_,h[S]),u&&d.getAttribute("morphNormal"+_)!==u[S]&&d.setAttribute("morphNormal"+_,u[S]),n[_]=x,v+=x):(h&&d.hasAttribute("morphTarget"+_)===!0&&d.deleteAttribute("morphTarget"+_),u&&d.hasAttribute("morphNormal"+_)===!0&&d.deleteAttribute("morphNormal"+_),n[_]=0)}const g=d.morphTargetsRelative?1:1-v;f.getUniforms().setValue(s,"morphTargetBaseInfluence",g),f.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:l}}function uf(s,t,i,e){let n=new WeakMap;function a(l){const c=e.render.frame,d=l.geometry,f=t.get(l,d);if(n.get(f)!==c&&(t.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(i.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;n.get(p)!==c&&(p.update(),n.set(p,c))}return f}function r(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),i.remove(c.instanceMatrix),c.instanceColor!==null&&i.remove(c.instanceColor)}return{update:a,dispose:r}}class nl extends ze{constructor(t,i,e,n,a,r,o,l,c,d){if(d=d!==void 0?d:Li,d!==Li&&d!==fn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");e===void 0&&d===Li&&(e=mi),e===void 0&&d===fn&&(e=Ri),super(null,n,a,r,o,l,d,e,c),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=o!==void 0?o:Ce,this.minFilter=l!==void 0?l:Ce,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const sl=new ze,al=new nl(1,1);al.compareFunction=Wr;const ol=new jr,rl=new Kc,ll=new tl,Qo=[],tr=[],er=new Float32Array(16),ir=new Float32Array(9),nr=new Float32Array(4);function gn(s,t,i){const e=s[0];if(e<=0||e>0)return s;const n=t*i;let a=Qo[n];if(a===void 0&&(a=new Float32Array(n),Qo[n]=a),t!==0){e.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=i,s[r].toArray(a,o)}return a}function pe(s,t){if(s.length!==t.length)return!1;for(let i=0,e=s.length;i<e;i++)if(s[i]!==t[i])return!1;return!0}function me(s,t){for(let i=0,e=t.length;i<e;i++)s[i]=t[i]}function Ms(s,t){let i=tr[t];i===void 0&&(i=new Int32Array(t),tr[t]=i);for(let e=0;e!==t;++e)i[e]=s.allocateTextureUnit();return i}function ff(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function pf(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pe(i,t))return;s.uniform2fv(this.addr,t),me(i,t)}}function mf(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pe(i,t))return;s.uniform3fv(this.addr,t),me(i,t)}}function gf(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pe(i,t))return;s.uniform4fv(this.addr,t),me(i,t)}}function vf(s,t){const i=this.cache,e=t.elements;if(e===void 0){if(pe(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),me(i,t)}else{if(pe(i,e))return;nr.set(e),s.uniformMatrix2fv(this.addr,!1,nr),me(i,e)}}function yf(s,t){const i=this.cache,e=t.elements;if(e===void 0){if(pe(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),me(i,t)}else{if(pe(i,e))return;ir.set(e),s.uniformMatrix3fv(this.addr,!1,ir),me(i,e)}}function _f(s,t){const i=this.cache,e=t.elements;if(e===void 0){if(pe(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),me(i,t)}else{if(pe(i,e))return;er.set(e),s.uniformMatrix4fv(this.addr,!1,er),me(i,e)}}function Tf(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function Ef(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pe(i,t))return;s.uniform2iv(this.addr,t),me(i,t)}}function Mf(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pe(i,t))return;s.uniform3iv(this.addr,t),me(i,t)}}function Sf(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pe(i,t))return;s.uniform4iv(this.addr,t),me(i,t)}}function xf(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function bf(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pe(i,t))return;s.uniform2uiv(this.addr,t),me(i,t)}}function Af(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pe(i,t))return;s.uniform3uiv(this.addr,t),me(i,t)}}function Pf(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pe(i,t))return;s.uniform4uiv(this.addr,t),me(i,t)}}function Cf(s,t,i){const e=this.cache,n=i.allocateTextureUnit();e[0]!==n&&(s.uniform1i(this.addr,n),e[0]=n);const a=this.type===s.SAMPLER_2D_SHADOW?al:sl;i.setTexture2D(t||a,n)}function wf(s,t,i){const e=this.cache,n=i.allocateTextureUnit();e[0]!==n&&(s.uniform1i(this.addr,n),e[0]=n),i.setTexture3D(t||rl,n)}function Rf(s,t,i){const e=this.cache,n=i.allocateTextureUnit();e[0]!==n&&(s.uniform1i(this.addr,n),e[0]=n),i.setTextureCube(t||ll,n)}function Lf(s,t,i){const e=this.cache,n=i.allocateTextureUnit();e[0]!==n&&(s.uniform1i(this.addr,n),e[0]=n),i.setTexture2DArray(t||ol,n)}function If(s){switch(s){case 5126:return ff;case 35664:return pf;case 35665:return mf;case 35666:return gf;case 35674:return vf;case 35675:return yf;case 35676:return _f;case 5124:case 35670:return Tf;case 35667:case 35671:return Ef;case 35668:case 35672:return Mf;case 35669:case 35673:return Sf;case 5125:return xf;case 36294:return bf;case 36295:return Af;case 36296:return Pf;case 35678:case 36198:case 36298:case 36306:case 35682:return Cf;case 35679:case 36299:case 36307:return wf;case 35680:case 36300:case 36308:case 36293:return Rf;case 36289:case 36303:case 36311:case 36292:return Lf}}function Df(s,t){s.uniform1fv(this.addr,t)}function Of(s,t){const i=gn(t,this.size,2);s.uniform2fv(this.addr,i)}function Nf(s,t){const i=gn(t,this.size,3);s.uniform3fv(this.addr,i)}function zf(s,t){const i=gn(t,this.size,4);s.uniform4fv(this.addr,i)}function Uf(s,t){const i=gn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function Ff(s,t){const i=gn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function Gf(s,t){const i=gn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function Bf(s,t){s.uniform1iv(this.addr,t)}function kf(s,t){s.uniform2iv(this.addr,t)}function Hf(s,t){s.uniform3iv(this.addr,t)}function Vf(s,t){s.uniform4iv(this.addr,t)}function Wf(s,t){s.uniform1uiv(this.addr,t)}function Yf(s,t){s.uniform2uiv(this.addr,t)}function Xf(s,t){s.uniform3uiv(this.addr,t)}function $f(s,t){s.uniform4uiv(this.addr,t)}function jf(s,t,i){const e=this.cache,n=t.length,a=Ms(i,n);pe(e,a)||(s.uniform1iv(this.addr,a),me(e,a));for(let r=0;r!==n;++r)i.setTexture2D(t[r]||sl,a[r])}function Kf(s,t,i){const e=this.cache,n=t.length,a=Ms(i,n);pe(e,a)||(s.uniform1iv(this.addr,a),me(e,a));for(let r=0;r!==n;++r)i.setTexture3D(t[r]||rl,a[r])}function qf(s,t,i){const e=this.cache,n=t.length,a=Ms(i,n);pe(e,a)||(s.uniform1iv(this.addr,a),me(e,a));for(let r=0;r!==n;++r)i.setTextureCube(t[r]||ll,a[r])}function Zf(s,t,i){const e=this.cache,n=t.length,a=Ms(i,n);pe(e,a)||(s.uniform1iv(this.addr,a),me(e,a));for(let r=0;r!==n;++r)i.setTexture2DArray(t[r]||ol,a[r])}function Jf(s){switch(s){case 5126:return Df;case 35664:return Of;case 35665:return Nf;case 35666:return zf;case 35674:return Uf;case 35675:return Ff;case 35676:return Gf;case 5124:case 35670:return Bf;case 35667:case 35671:return kf;case 35668:case 35672:return Hf;case 35669:case 35673:return Vf;case 5125:return Wf;case 36294:return Yf;case 36295:return Xf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return jf;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return qf;case 36289:case 36303:case 36311:case 36292:return Zf}}class Qf{constructor(t,i,e){this.id=t,this.addr=e,this.cache=[],this.type=i.type,this.setValue=If(i.type)}}class tp{constructor(t,i,e){this.id=t,this.addr=e,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Jf(i.type)}}class ep{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,e){const n=this.seq;for(let a=0,r=n.length;a!==r;++a){const o=n[a];o.setValue(t,i[o.id],e)}}}const na=/(\w+)(\])?(\[|\.)?/g;function sr(s,t){s.seq.push(t),s.map[t.id]=t}function ip(s,t,i){const e=s.name,n=e.length;for(na.lastIndex=0;;){const a=na.exec(e),r=na.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===n){sr(i,c===void 0?new Qf(o,s,t):new tp(o,s,t));break}else{let f=i.map[o];f===void 0&&(f=new ep(o),sr(i,f)),i=f}}}class hs{constructor(t,i){this.seq=[],this.map={};const e=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let n=0;n<e;++n){const a=t.getActiveUniform(i,n),r=t.getUniformLocation(i,a.name);ip(a,r,this)}}setValue(t,i,e,n){const a=this.map[i];a!==void 0&&a.setValue(t,e,n)}setOptional(t,i,e){const n=i[e];n!==void 0&&this.setValue(t,e,n)}static upload(t,i,e,n){for(let a=0,r=i.length;a!==r;++a){const o=i[a],l=e[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,i){const e=[];for(let n=0,a=t.length;n!==a;++n){const r=t[n];r.id in i&&e.push(r)}return e}}function ar(s,t,i){const e=s.createShader(t);return s.shaderSource(e,i),s.compileShader(e),e}const np=37297;let sp=0;function ap(s,t){const i=s.split(`
`),e=[],n=Math.max(t-6,0),a=Math.min(t+6,i.length);for(let r=n;r<a;r++){const o=r+1;e.push(`${o===t?">":" "} ${o}: ${i[r]}`)}return e.join(`
`)}function op(s){const t=te.getPrimaries(te.workingColorSpace),i=te.getPrimaries(s);let e;switch(t===i?e="":t===ps&&i===fs?e="LinearDisplayP3ToLinearSRGB":t===fs&&i===ps&&(e="LinearSRGBToLinearDisplayP3"),s){case li:case Ts:return[e,"LinearTransferOETF"];case Te:case Pa:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[e,"LinearTransferOETF"]}}function or(s,t,i){const e=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(e&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const r=parseInt(a[1]);return i.toUpperCase()+`

`+n+`

`+ap(s.getShaderSource(t),r)}else return n}function rp(s,t){const i=op(t);return`vec4 ${s}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function lp(s,t){let i;switch(t){case vc:i="Linear";break;case yc:i="Reinhard";break;case _c:i="OptimizedCineon";break;case Tc:i="ACESFilmic";break;case Mc:i="AgX";break;case Ec:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function cp(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(on).join(`
`)}function hp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(on).join(`
`)}function dp(s){const t=[];for(const i in s){const e=s[i];e!==!1&&t.push("#define "+i+" "+e)}return t.join(`
`)}function up(s,t){const i={},e=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<e;n++){const a=s.getActiveAttrib(t,n),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),i[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return i}function on(s){return s!==""}function rr(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lr(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ea(s){return s.replace(fp,mp)}const pp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function mp(s,t){let i=Xt[t];if(i===void 0){const e=pp.get(t);if(e!==void 0)i=Xt[e],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,e);else throw new Error("Can not resolve #include <"+t+">")}return Ea(i)}const gp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cr(s){return s.replace(gp,vp)}function vp(s,t,i,e){let n="";for(let a=parseInt(t);a<parseInt(i);a++)n+=e.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function hr(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function yp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Dr?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Yl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function _p(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case dn:case un:t="ENVMAP_TYPE_CUBE";break;case _s:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case un:t="ENVMAP_MODE_REFRACTION";break}return t}function Ep(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ba:t="ENVMAP_BLENDING_MULTIPLY";break;case mc:t="ENVMAP_BLENDING_MIX";break;case gc:t="ENVMAP_BLENDING_ADD";break}return t}function Mp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,e=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:e,maxMip:i}}function Sp(s,t,i,e){const n=s.getContext(),a=i.defines;let r=i.vertexShader,o=i.fragmentShader;const l=yp(i),c=_p(i),d=Tp(i),f=Ep(i),p=Mp(i),m=i.isWebGL2?"":cp(i),y=hp(i),T=dp(a),h=n.createProgram();let u,v,g=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(u=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(on).join(`
`),u.length>0&&(u+=`
`),v=[m,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(on).join(`
`),v.length>0&&(v+=`
`)):(u=[hr(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(on).join(`
`),v=[m,hr(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+d:"",i.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==yi?"#define TONE_MAPPING":"",i.toneMapping!==yi?Xt.tonemapping_pars_fragment:"",i.toneMapping!==yi?lp("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,rp("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(on).join(`
`)),r=Ea(r),r=rr(r,i),r=lr(r,i),o=Ea(o),o=rr(o,i),o=lr(o,i),r=cr(r),o=cr(o),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===Co?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Co?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=g+u+r,E=g+v+o,S=ar(n,n.VERTEX_SHADER,_),x=ar(n,n.FRAGMENT_SHADER,E);n.attachShader(h,S),n.attachShader(h,x),i.index0AttributeName!==void 0?n.bindAttribLocation(h,0,i.index0AttributeName):i.morphTargets===!0&&n.bindAttribLocation(h,0,"position"),n.linkProgram(h);function O(U){if(s.debug.checkShaderErrors){const X=n.getProgramInfoLog(h).trim(),I=n.getShaderInfoLog(S).trim(),B=n.getShaderInfoLog(x).trim();let Y=!0,$=!0;if(n.getProgramParameter(h,n.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,h,S,x);else{const H=or(n,S,"vertex"),Z=or(n,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(h,n.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+H+`
`+Z)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(I===""||B==="")&&($=!1);$&&(U.diagnostics={runnable:Y,programLog:X,vertexShader:{log:I,prefix:u},fragmentShader:{log:B,prefix:v}})}n.deleteShader(S),n.deleteShader(x),M=new hs(n,h),A=up(n,h)}let M;this.getUniforms=function(){return M===void 0&&O(this),M};let A;this.getAttributes=function(){return A===void 0&&O(this),A};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=n.getProgramParameter(h,np)),k},this.destroy=function(){e.releaseStatesOfProgram(this),n.deleteProgram(h),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=sp++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=S,this.fragmentShader=x,this}let xp=0;class bp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,e=t.fragmentShader,n=this._getShaderStage(i),a=this._getShaderStage(e),r=this._getShaderCacheForMaterial(t);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const e of i)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let e=i.get(t);return e===void 0&&(e=new Set,i.set(t,e)),e}_getShaderStage(t){const i=this.shaderCache;let e=i.get(t);return e===void 0&&(e=new Ap(t),i.set(t,e)),e}}class Ap{constructor(t){this.id=xp++,this.code=t,this.usedTimes=0}}function Pp(s,t,i,e,n,a,r){const o=new Ra,l=new bp,c=[],d=n.isWebGL2,f=n.logarithmicDepthBuffer,p=n.vertexTextures;let m=n.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(M){return M===0?"uv":`uv${M}`}function h(M,A,k,U,X){const I=U.fog,B=X.geometry,Y=M.isMeshStandardMaterial?U.environment:null,$=(M.isMeshStandardMaterial?i:t).get(M.envMap||Y),H=$&&$.mapping===_s?$.image.height:null,Z=y[M.type];M.precision!==null&&(m=n.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const it=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,j=it!==void 0?it.length:0;let V=0;B.morphAttributes.position!==void 0&&(V=1),B.morphAttributes.normal!==void 0&&(V=2),B.morphAttributes.color!==void 0&&(V=3);let F,K,nt,_t;if(Z){const ae=qe[Z];F=ae.vertexShader,K=ae.fragmentShader}else F=M.vertexShader,K=M.fragmentShader,l.update(M),nt=l.getVertexShaderID(M),_t=l.getFragmentShaderID(M);const St=s.getRenderTarget(),Nt=X.isInstancedMesh===!0,Rt=X.isBatchedMesh===!0,R=!!M.map,N=!!M.matcap,C=!!$,q=!!M.aoMap,G=!!M.lightMap,st=!!M.bumpMap,tt=!!M.normalMap,vt=!!M.displacementMap,ut=!!M.emissiveMap,P=!!M.metalnessMap,b=!!M.roughnessMap,J=M.anisotropy>0,lt=M.clearcoat>0,ht=M.iridescence>0,ft=M.sheen>0,Mt=M.transmission>0,mt=J&&!!M.anisotropyMap,Tt=lt&&!!M.clearcoatMap,gt=lt&&!!M.clearcoatNormalMap,At=lt&&!!M.clearcoatRoughnessMap,rt=ht&&!!M.iridescenceMap,wt=ht&&!!M.iridescenceThicknessMap,Pt=ft&&!!M.sheenColorMap,It=ft&&!!M.sheenRoughnessMap,bt=!!M.specularMap,xt=!!M.specularColorMap,L=!!M.specularIntensityMap,yt=Mt&&!!M.transmissionMap,Ot=Mt&&!!M.thicknessMap,pt=!!M.gradientMap,dt=!!M.alphaMap,z=M.alphaTest>0,Et=!!M.alphaHash,Ct=!!M.extensions,Ut=!!B.attributes.uv1,Ft=!!B.attributes.uv2,jt=!!B.attributes.uv3;let Vt=yi;return M.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(Vt=s.toneMapping),{isWebGL2:d,shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:F,fragmentShader:K,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:_t,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Rt,instancing:Nt,instancingColor:Nt&&X.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:St===null?s.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:li,map:R,matcap:N,envMap:C,envMapMode:C&&$.mapping,envMapCubeUVHeight:H,aoMap:q,lightMap:G,bumpMap:st,normalMap:tt,displacementMap:p&&vt,emissiveMap:ut,normalMapObjectSpace:tt&&M.normalMapType===Oc,normalMapTangentSpace:tt&&M.normalMapType===Vr,metalnessMap:P,roughnessMap:b,anisotropy:J,anisotropyMap:mt,clearcoat:lt,clearcoatMap:Tt,clearcoatNormalMap:gt,clearcoatRoughnessMap:At,iridescence:ht,iridescenceMap:rt,iridescenceThicknessMap:wt,sheen:ft,sheenColorMap:Pt,sheenRoughnessMap:It,specularMap:bt,specularColorMap:xt,specularIntensityMap:L,transmission:Mt,transmissionMap:yt,thicknessMap:Ot,gradientMap:pt,opaque:M.transparent===!1&&M.blending===cn,alphaMap:dt,alphaTest:z,alphaHash:Et,combine:M.combine,mapUv:R&&T(M.map.channel),aoMapUv:q&&T(M.aoMap.channel),lightMapUv:G&&T(M.lightMap.channel),bumpMapUv:st&&T(M.bumpMap.channel),normalMapUv:tt&&T(M.normalMap.channel),displacementMapUv:vt&&T(M.displacementMap.channel),emissiveMapUv:ut&&T(M.emissiveMap.channel),metalnessMapUv:P&&T(M.metalnessMap.channel),roughnessMapUv:b&&T(M.roughnessMap.channel),anisotropyMapUv:mt&&T(M.anisotropyMap.channel),clearcoatMapUv:Tt&&T(M.clearcoatMap.channel),clearcoatNormalMapUv:gt&&T(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&T(M.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&T(M.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&T(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&T(M.sheenColorMap.channel),sheenRoughnessMapUv:It&&T(M.sheenRoughnessMap.channel),specularMapUv:bt&&T(M.specularMap.channel),specularColorMapUv:xt&&T(M.specularColorMap.channel),specularIntensityMapUv:L&&T(M.specularIntensityMap.channel),transmissionMapUv:yt&&T(M.transmissionMap.channel),thicknessMapUv:Ot&&T(M.thicknessMap.channel),alphaMapUv:dt&&T(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(tt||J),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Ut,vertexUv2s:Ft,vertexUv3s:jt,pointsUvs:X.isPoints===!0&&!!B.attributes.uv&&(R||dt),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:X.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:V,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Vt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:R&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===ne,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===oi,flipSided:M.side===Le,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Ct&&M.extensions.derivatives===!0,extensionFragDepth:Ct&&M.extensions.fragDepth===!0,extensionDrawBuffers:Ct&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ct&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ct&&M.extensions.clipCullDistance&&e.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||e.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||e.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||e.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const k in M.defines)A.push(k),A.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(v(A,M),g(A,M),A.push(s.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function v(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function g(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function _(M){const A=y[M.type];let k;if(A){const U=qe[A];k=lh.clone(U.uniforms)}else k=M.uniforms;return k}function E(M,A){let k;for(let U=0,X=c.length;U<X;U++){const I=c[U];if(I.cacheKey===A){k=I,++k.usedTimes;break}}return k===void 0&&(k=new Sp(s,A,M,a),c.push(k)),k}function S(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function x(M){l.remove(M)}function O(){l.dispose()}return{getParameters:h,getProgramCacheKey:u,getUniforms:_,acquireProgram:E,releaseProgram:S,releaseShaderCache:x,programs:c,dispose:O}}function Cp(){let s=new WeakMap;function t(a){let r=s.get(a);return r===void 0&&(r={},s.set(a,r)),r}function i(a){s.delete(a)}function e(a,r,o){s.get(a)[r]=o}function n(){s=new WeakMap}return{get:t,remove:i,update:e,dispose:n}}function wp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function dr(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ur(){const s=[];let t=0;const i=[],e=[],n=[];function a(){t=0,i.length=0,e.length=0,n.length=0}function r(f,p,m,y,T,h){let u=s[t];return u===void 0?(u={id:f.id,object:f,geometry:p,material:m,groupOrder:y,renderOrder:f.renderOrder,z:T,group:h},s[t]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=m,u.groupOrder=y,u.renderOrder=f.renderOrder,u.z=T,u.group=h),t++,u}function o(f,p,m,y,T,h){const u=r(f,p,m,y,T,h);m.transmission>0?e.push(u):m.transparent===!0?n.push(u):i.push(u)}function l(f,p,m,y,T,h){const u=r(f,p,m,y,T,h);m.transmission>0?e.unshift(u):m.transparent===!0?n.unshift(u):i.unshift(u)}function c(f,p){i.length>1&&i.sort(f||wp),e.length>1&&e.sort(p||dr),n.length>1&&n.sort(p||dr)}function d(){for(let f=t,p=s.length;f<p;f++){const m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:i,transmissive:e,transparent:n,init:a,push:o,unshift:l,finish:d,sort:c}}function Rp(){let s=new WeakMap;function t(e,n){const a=s.get(e);let r;return a===void 0?(r=new ur,s.set(e,[r])):n>=a.length?(r=new ur,a.push(r)):r=a[n],r}function i(){s=new WeakMap}return{get:t,dispose:i}}function Lp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new Jt};break;case"SpotLight":i={position:new Q,direction:new Q,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":i={color:new Jt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[t.id]=i,i}}}function Ip(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let Dp=0;function Op(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Np(s,t){const i=new Lp,e=Ip(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new Q);const a=new Q,r=new fe,o=new fe;function l(d,f){let p=0,m=0,y=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let T=0,h=0,u=0,v=0,g=0,_=0,E=0,S=0,x=0,O=0,M=0;d.sort(Op);const A=f===!0?Math.PI:1;for(let U=0,X=d.length;U<X;U++){const I=d[U],B=I.color,Y=I.intensity,$=I.distance,H=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)p+=B.r*Y*A,m+=B.g*Y*A,y+=B.b*Y*A;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(I.sh.coefficients[Z],Y);M++}else if(I.isDirectionalLight){const Z=i.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*A),I.castShadow){const it=I.shadow,j=e.get(I);j.shadowBias=it.bias,j.shadowNormalBias=it.normalBias,j.shadowRadius=it.radius,j.shadowMapSize=it.mapSize,n.directionalShadow[T]=j,n.directionalShadowMap[T]=H,n.directionalShadowMatrix[T]=I.shadow.matrix,_++}n.directional[T]=Z,T++}else if(I.isSpotLight){const Z=i.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(B).multiplyScalar(Y*A),Z.distance=$,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,n.spot[u]=Z;const it=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,it.updateMatrices(I),I.castShadow&&O++),n.spotLightMatrix[u]=it.matrix,I.castShadow){const j=e.get(I);j.shadowBias=it.bias,j.shadowNormalBias=it.normalBias,j.shadowRadius=it.radius,j.shadowMapSize=it.mapSize,n.spotShadow[u]=j,n.spotShadowMap[u]=H,S++}u++}else if(I.isRectAreaLight){const Z=i.get(I);Z.color.copy(B).multiplyScalar(Y),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),n.rectArea[v]=Z,v++}else if(I.isPointLight){const Z=i.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*A),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){const it=I.shadow,j=e.get(I);j.shadowBias=it.bias,j.shadowNormalBias=it.normalBias,j.shadowRadius=it.radius,j.shadowMapSize=it.mapSize,j.shadowCameraNear=it.camera.near,j.shadowCameraFar=it.camera.far,n.pointShadow[h]=j,n.pointShadowMap[h]=H,n.pointShadowMatrix[h]=I.shadow.matrix,E++}n.point[h]=Z,h++}else if(I.isHemisphereLight){const Z=i.get(I);Z.skyColor.copy(I.color).multiplyScalar(Y*A),Z.groundColor.copy(I.groundColor).multiplyScalar(Y*A),n.hemi[g]=Z,g++}}v>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=y;const k=n.hash;(k.directionalLength!==T||k.pointLength!==h||k.spotLength!==u||k.rectAreaLength!==v||k.hemiLength!==g||k.numDirectionalShadows!==_||k.numPointShadows!==E||k.numSpotShadows!==S||k.numSpotMaps!==x||k.numLightProbes!==M)&&(n.directional.length=T,n.spot.length=u,n.rectArea.length=v,n.point.length=h,n.hemi.length=g,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+x-O,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=M,k.directionalLength=T,k.pointLength=h,k.spotLength=u,k.rectAreaLength=v,k.hemiLength=g,k.numDirectionalShadows=_,k.numPointShadows=E,k.numSpotShadows=S,k.numSpotMaps=x,k.numLightProbes=M,n.version=Dp++)}function c(d,f){let p=0,m=0,y=0,T=0,h=0;const u=f.matrixWorldInverse;for(let v=0,g=d.length;v<g;v++){const _=d[v];if(_.isDirectionalLight){const E=n.directional[p];E.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(u),p++}else if(_.isSpotLight){const E=n.spot[y];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(u),E.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(u),y++}else if(_.isRectAreaLight){const E=n.rectArea[T];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(u),o.identity(),r.copy(_.matrixWorld),r.premultiply(u),o.extractRotation(r),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),T++}else if(_.isPointLight){const E=n.point[m];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(u),m++}else if(_.isHemisphereLight){const E=n.hemi[h];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(u),h++}}}return{setup:l,setupView:c,state:n}}function fr(s,t){const i=new Np(s,t),e=[],n=[];function a(){e.length=0,n.length=0}function r(f){e.push(f)}function o(f){n.push(f)}function l(f){i.setup(e,f)}function c(f){i.setupView(e,f)}return{init:a,state:{lightsArray:e,shadowsArray:n,lights:i},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function zp(s,t){let i=new WeakMap;function e(a,r=0){const o=i.get(a);let l;return o===void 0?(l=new fr(s,t),i.set(a,[l])):r>=o.length?(l=new fr(s,t),o.push(l)):l=o[r],l}function n(){i=new WeakMap}return{get:e,dispose:n}}class Up extends Nn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ic,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fp extends Nn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Gp=`void main() {
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
}`;function kp(s,t,i){let e=new La;const n=new kt,a=new kt,r=new ye,o=new Up({depthPacking:Dc}),l=new Fp,c={},d=i.maxTextureSize,f={[Ti]:Le,[Le]:Ti,[oi]:oi},p=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Gp,fragmentShader:Bp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const y=new Je;y.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Qt(y,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dr;let u=this.type;this.render=function(S,x,O){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||S.length===0)return;const M=s.getRenderTarget(),A=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),U=s.state;U.setBlending(vi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const X=u!==ai&&this.type===ai,I=u===ai&&this.type!==ai;for(let B=0,Y=S.length;B<Y;B++){const $=S[B],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const Z=H.getFrameExtents();if(n.multiply(Z),a.copy(H.mapSize),(n.x>d||n.y>d)&&(n.x>d&&(a.x=Math.floor(d/Z.x),n.x=a.x*Z.x,H.mapSize.x=a.x),n.y>d&&(a.y=Math.floor(d/Z.y),n.y=a.y*Z.y,H.mapSize.y=a.y)),H.map===null||X===!0||I===!0){const j=this.type!==ai?{minFilter:Ce,magFilter:Ce}:{};H.map!==null&&H.map.dispose(),H.map=new Oi(n.x,n.y,j),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const it=H.getViewportCount();for(let j=0;j<it;j++){const V=H.getViewport(j);r.set(a.x*V.x,a.y*V.y,a.x*V.z,a.y*V.w),U.viewport(r),H.updateMatrices($,j),e=H.getFrustum(),_(x,O,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===ai&&v(H,O),H.needsUpdate=!1}u=this.type,h.needsUpdate=!1,s.setRenderTarget(M,A,k)};function v(S,x){const O=t.update(T);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Oi(n.x,n.y)),p.uniforms.shadow_pass.value=S.map.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(x,null,O,p,T,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(x,null,O,m,T,null)}function g(S,x,O,M){let A=null;const k=O.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(k!==void 0)A=k;else if(A=O.isPointLight===!0?l:o,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const U=A.uuid,X=x.uuid;let I=c[U];I===void 0&&(I={},c[U]=I);let B=I[X];B===void 0&&(B=A.clone(),I[X]=B,x.addEventListener("dispose",E)),A=B}if(A.visible=x.visible,A.wireframe=x.wireframe,M===ai?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:f[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,O.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const U=s.properties.get(A);U.light=O}return A}function _(S,x,O,M,A){if(S.visible===!1)return;if(S.layers.test(x.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===ai)&&(!S.frustumCulled||e.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld);const X=t.update(S),I=S.material;if(Array.isArray(I)){const B=X.groups;for(let Y=0,$=B.length;Y<$;Y++){const H=B[Y],Z=I[H.materialIndex];if(Z&&Z.visible){const it=g(S,Z,M,A);S.onBeforeShadow(s,S,x,O,X,it,H),s.renderBufferDirect(O,null,X,it,S,H),S.onAfterShadow(s,S,x,O,X,it,H)}}}else if(I.visible){const B=g(S,I,M,A);S.onBeforeShadow(s,S,x,O,X,B,null),s.renderBufferDirect(O,null,X,B,S,null),S.onAfterShadow(s,S,x,O,X,B,null)}}const U=S.children;for(let X=0,I=U.length;X<I;X++)_(U[X],x,O,M,A)}function E(S){S.target.removeEventListener("dispose",E);for(const O in c){const M=c[O],A=S.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}function Hp(s,t,i){const e=i.isWebGL2;function n(){let z=!1;const Et=new ye;let Ct=null;const Ut=new ye(0,0,0,0);return{setMask:function(Ft){Ct!==Ft&&!z&&(s.colorMask(Ft,Ft,Ft,Ft),Ct=Ft)},setLocked:function(Ft){z=Ft},setClear:function(Ft,jt,Vt,se,ae){ae===!0&&(Ft*=se,jt*=se,Vt*=se),Et.set(Ft,jt,Vt,se),Ut.equals(Et)===!1&&(s.clearColor(Ft,jt,Vt,se),Ut.copy(Et))},reset:function(){z=!1,Ct=null,Ut.set(-1,0,0,0)}}}function a(){let z=!1,Et=null,Ct=null,Ut=null;return{setTest:function(Ft){Ft?Rt(s.DEPTH_TEST):R(s.DEPTH_TEST)},setMask:function(Ft){Et!==Ft&&!z&&(s.depthMask(Ft),Et=Ft)},setFunc:function(Ft){if(Ct!==Ft){switch(Ft){case lc:s.depthFunc(s.NEVER);break;case cc:s.depthFunc(s.ALWAYS);break;case hc:s.depthFunc(s.LESS);break;case ds:s.depthFunc(s.LEQUAL);break;case dc:s.depthFunc(s.EQUAL);break;case uc:s.depthFunc(s.GEQUAL);break;case fc:s.depthFunc(s.GREATER);break;case pc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ct=Ft}},setLocked:function(Ft){z=Ft},setClear:function(Ft){Ut!==Ft&&(s.clearDepth(Ft),Ut=Ft)},reset:function(){z=!1,Et=null,Ct=null,Ut=null}}}function r(){let z=!1,Et=null,Ct=null,Ut=null,Ft=null,jt=null,Vt=null,se=null,ae=null;return{setTest:function(Zt){z||(Zt?Rt(s.STENCIL_TEST):R(s.STENCIL_TEST))},setMask:function(Zt){Et!==Zt&&!z&&(s.stencilMask(Zt),Et=Zt)},setFunc:function(Zt,re,Ke){(Ct!==Zt||Ut!==re||Ft!==Ke)&&(s.stencilFunc(Zt,re,Ke),Ct=Zt,Ut=re,Ft=Ke)},setOp:function(Zt,re,Ke){(jt!==Zt||Vt!==re||se!==Ke)&&(s.stencilOp(Zt,re,Ke),jt=Zt,Vt=re,se=Ke)},setLocked:function(Zt){z=Zt},setClear:function(Zt){ae!==Zt&&(s.clearStencil(Zt),ae=Zt)},reset:function(){z=!1,Et=null,Ct=null,Ut=null,Ft=null,jt=null,Vt=null,se=null,ae=null}}}const o=new n,l=new a,c=new r,d=new WeakMap,f=new WeakMap;let p={},m={},y=new WeakMap,T=[],h=null,u=!1,v=null,g=null,_=null,E=null,S=null,x=null,O=null,M=new Jt(0,0,0),A=0,k=!1,U=null,X=null,I=null,B=null,Y=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const it=s.getParameter(s.VERSION);it.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(it)[1]),H=Z>=1):it.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),H=Z>=2);let j=null,V={};const F=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),nt=new ye().fromArray(F),_t=new ye().fromArray(K);function St(z,Et,Ct,Ut){const Ft=new Uint8Array(4),jt=s.createTexture();s.bindTexture(z,jt),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<Ct;Vt++)e&&(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)?s.texImage3D(Et,0,s.RGBA,1,1,Ut,0,s.RGBA,s.UNSIGNED_BYTE,Ft):s.texImage2D(Et+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ft);return jt}const Nt={};Nt[s.TEXTURE_2D]=St(s.TEXTURE_2D,s.TEXTURE_2D,1),Nt[s.TEXTURE_CUBE_MAP]=St(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),e&&(Nt[s.TEXTURE_2D_ARRAY]=St(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Nt[s.TEXTURE_3D]=St(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Rt(s.DEPTH_TEST),l.setFunc(ds),ut(!1),P($a),Rt(s.CULL_FACE),tt(vi);function Rt(z){p[z]!==!0&&(s.enable(z),p[z]=!0)}function R(z){p[z]!==!1&&(s.disable(z),p[z]=!1)}function N(z,Et){return m[z]!==Et?(s.bindFramebuffer(z,Et),m[z]=Et,e&&(z===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Et),z===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Et)),!0):!1}function C(z,Et){let Ct=T,Ut=!1;if(z)if(Ct=y.get(Et),Ct===void 0&&(Ct=[],y.set(Et,Ct)),z.isWebGLMultipleRenderTargets){const Ft=z.texture;if(Ct.length!==Ft.length||Ct[0]!==s.COLOR_ATTACHMENT0){for(let jt=0,Vt=Ft.length;jt<Vt;jt++)Ct[jt]=s.COLOR_ATTACHMENT0+jt;Ct.length=Ft.length,Ut=!0}}else Ct[0]!==s.COLOR_ATTACHMENT0&&(Ct[0]=s.COLOR_ATTACHMENT0,Ut=!0);else Ct[0]!==s.BACK&&(Ct[0]=s.BACK,Ut=!0);Ut&&(i.isWebGL2?s.drawBuffers(Ct):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ct))}function q(z){return h!==z?(s.useProgram(z),h=z,!0):!1}const G={[Ci]:s.FUNC_ADD,[$l]:s.FUNC_SUBTRACT,[jl]:s.FUNC_REVERSE_SUBTRACT};if(e)G[Za]=s.MIN,G[Ja]=s.MAX;else{const z=t.get("EXT_blend_minmax");z!==null&&(G[Za]=z.MIN_EXT,G[Ja]=z.MAX_EXT)}const st={[Kl]:s.ZERO,[ql]:s.ONE,[Zl]:s.SRC_COLOR,[ua]:s.SRC_ALPHA,[nc]:s.SRC_ALPHA_SATURATE,[ec]:s.DST_COLOR,[Ql]:s.DST_ALPHA,[Jl]:s.ONE_MINUS_SRC_COLOR,[fa]:s.ONE_MINUS_SRC_ALPHA,[ic]:s.ONE_MINUS_DST_COLOR,[tc]:s.ONE_MINUS_DST_ALPHA,[sc]:s.CONSTANT_COLOR,[ac]:s.ONE_MINUS_CONSTANT_COLOR,[oc]:s.CONSTANT_ALPHA,[rc]:s.ONE_MINUS_CONSTANT_ALPHA};function tt(z,Et,Ct,Ut,Ft,jt,Vt,se,ae,Zt){if(z===vi){u===!0&&(R(s.BLEND),u=!1);return}if(u===!1&&(Rt(s.BLEND),u=!0),z!==Xl){if(z!==v||Zt!==k){if((g!==Ci||S!==Ci)&&(s.blendEquation(s.FUNC_ADD),g=Ci,S=Ci),Zt)switch(z){case cn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ja:s.blendFunc(s.ONE,s.ONE);break;case Ka:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case cn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ja:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ka:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}_=null,E=null,x=null,O=null,M.set(0,0,0),A=0,v=z,k=Zt}return}Ft=Ft||Et,jt=jt||Ct,Vt=Vt||Ut,(Et!==g||Ft!==S)&&(s.blendEquationSeparate(G[Et],G[Ft]),g=Et,S=Ft),(Ct!==_||Ut!==E||jt!==x||Vt!==O)&&(s.blendFuncSeparate(st[Ct],st[Ut],st[jt],st[Vt]),_=Ct,E=Ut,x=jt,O=Vt),(se.equals(M)===!1||ae!==A)&&(s.blendColor(se.r,se.g,se.b,ae),M.copy(se),A=ae),v=z,k=!1}function vt(z,Et){z.side===oi?R(s.CULL_FACE):Rt(s.CULL_FACE);let Ct=z.side===Le;Et&&(Ct=!Ct),ut(Ct),z.blending===cn&&z.transparent===!1?tt(vi):tt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),o.setMask(z.colorWrite);const Ut=z.stencilWrite;c.setTest(Ut),Ut&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),J(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Rt(s.SAMPLE_ALPHA_TO_COVERAGE):R(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(z){U!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),U=z)}function P(z){z!==Vl?(Rt(s.CULL_FACE),z!==X&&(z===$a?s.cullFace(s.BACK):z===Wl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):R(s.CULL_FACE),X=z}function b(z){z!==I&&(H&&s.lineWidth(z),I=z)}function J(z,Et,Ct){z?(Rt(s.POLYGON_OFFSET_FILL),(B!==Et||Y!==Ct)&&(s.polygonOffset(Et,Ct),B=Et,Y=Ct)):R(s.POLYGON_OFFSET_FILL)}function lt(z){z?Rt(s.SCISSOR_TEST):R(s.SCISSOR_TEST)}function ht(z){z===void 0&&(z=s.TEXTURE0+$-1),j!==z&&(s.activeTexture(z),j=z)}function ft(z,Et,Ct){Ct===void 0&&(j===null?Ct=s.TEXTURE0+$-1:Ct=j);let Ut=V[Ct];Ut===void 0&&(Ut={type:void 0,texture:void 0},V[Ct]=Ut),(Ut.type!==z||Ut.texture!==Et)&&(j!==Ct&&(s.activeTexture(Ct),j=Ct),s.bindTexture(z,Et||Nt[z]),Ut.type=z,Ut.texture=Et)}function Mt(){const z=V[j];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function mt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function gt(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function wt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pt(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function It(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function bt(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function L(z){nt.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),nt.copy(z))}function yt(z){_t.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),_t.copy(z))}function Ot(z,Et){let Ct=f.get(Et);Ct===void 0&&(Ct=new WeakMap,f.set(Et,Ct));let Ut=Ct.get(z);Ut===void 0&&(Ut=s.getUniformBlockIndex(Et,z.name),Ct.set(z,Ut))}function pt(z,Et){const Ut=f.get(Et).get(z);d.get(Et)!==Ut&&(s.uniformBlockBinding(Et,Ut,z.__bindingPointIndex),d.set(Et,Ut))}function dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),e===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},j=null,V={},m={},y=new WeakMap,T=[],h=null,u=!1,v=null,g=null,_=null,E=null,S=null,x=null,O=null,M=new Jt(0,0,0),A=0,k=!1,U=null,X=null,I=null,B=null,Y=null,nt.set(0,0,s.canvas.width,s.canvas.height),_t.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Rt,disable:R,bindFramebuffer:N,drawBuffers:C,useProgram:q,setBlending:tt,setMaterial:vt,setFlipSided:ut,setCullFace:P,setLineWidth:b,setPolygonOffset:J,setScissorTest:lt,activeTexture:ht,bindTexture:ft,unbindTexture:Mt,compressedTexImage2D:mt,compressedTexImage3D:Tt,texImage2D:bt,texImage3D:xt,updateUBOMapping:Ot,uniformBlockBinding:pt,texStorage2D:Pt,texStorage3D:It,texSubImage2D:gt,texSubImage3D:At,compressedTexSubImage2D:rt,compressedTexSubImage3D:wt,scissor:L,viewport:yt,reset:dt}}function Vp(s,t,i,e,n,a,r){const o=n.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,b){return m?new OffscreenCanvas(P,b):gs("canvas")}function T(P,b,J,lt){let ht=1;if((P.width>lt||P.height>lt)&&(ht=lt/Math.max(P.width,P.height)),ht<1||b===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ft=b?Ta:Math.floor,Mt=ft(ht*P.width),mt=ft(ht*P.height);f===void 0&&(f=y(Mt,mt));const Tt=J?y(Mt,mt):f;return Tt.width=Mt,Tt.height=mt,Tt.getContext("2d").drawImage(P,0,0,Mt,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Mt+"x"+mt+")."),Tt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function h(P){return wo(P.width)&&wo(P.height)}function u(P){return o?!1:P.wrapS!==$e||P.wrapT!==$e||P.minFilter!==Ce&&P.minFilter!==Ge}function v(P,b){return P.generateMipmaps&&b&&P.minFilter!==Ce&&P.minFilter!==Ge}function g(P){s.generateMipmap(P)}function _(P,b,J,lt,ht=!1){if(o===!1)return b;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ft=b;if(b===s.RED&&(J===s.FLOAT&&(ft=s.R32F),J===s.HALF_FLOAT&&(ft=s.R16F),J===s.UNSIGNED_BYTE&&(ft=s.R8)),b===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(ft=s.R8UI),J===s.UNSIGNED_SHORT&&(ft=s.R16UI),J===s.UNSIGNED_INT&&(ft=s.R32UI),J===s.BYTE&&(ft=s.R8I),J===s.SHORT&&(ft=s.R16I),J===s.INT&&(ft=s.R32I)),b===s.RG&&(J===s.FLOAT&&(ft=s.RG32F),J===s.HALF_FLOAT&&(ft=s.RG16F),J===s.UNSIGNED_BYTE&&(ft=s.RG8)),b===s.RGBA){const Mt=ht?us:te.getTransfer(lt);J===s.FLOAT&&(ft=s.RGBA32F),J===s.HALF_FLOAT&&(ft=s.RGBA16F),J===s.UNSIGNED_BYTE&&(ft=Mt===ne?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(ft=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(ft=s.RGB5_A1)}return(ft===s.R16F||ft===s.R32F||ft===s.RG16F||ft===s.RG32F||ft===s.RGBA16F||ft===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function E(P,b,J){return v(P,J)===!0||P.isFramebufferTexture&&P.minFilter!==Ce&&P.minFilter!==Ge?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function S(P){return P===Ce||P===Qa||P===ws?s.NEAREST:s.LINEAR}function x(P){const b=P.target;b.removeEventListener("dispose",x),M(b),b.isVideoTexture&&d.delete(b)}function O(P){const b=P.target;b.removeEventListener("dispose",O),k(b)}function M(P){const b=e.get(P);if(b.__webglInit===void 0)return;const J=P.source,lt=p.get(J);if(lt){const ht=lt[b.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&A(P),Object.keys(lt).length===0&&p.delete(J)}e.remove(P)}function A(P){const b=e.get(P);s.deleteTexture(b.__webglTexture);const J=P.source,lt=p.get(J);delete lt[b.__cacheKey],r.memory.textures--}function k(P){const b=P.texture,J=e.get(P),lt=e.get(b);if(lt.__webglTexture!==void 0&&(s.deleteTexture(lt.__webglTexture),r.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(J.__webglFramebuffer[ht]))for(let ft=0;ft<J.__webglFramebuffer[ht].length;ft++)s.deleteFramebuffer(J.__webglFramebuffer[ht][ft]);else s.deleteFramebuffer(J.__webglFramebuffer[ht]);J.__webglDepthbuffer&&s.deleteRenderbuffer(J.__webglDepthbuffer[ht])}else{if(Array.isArray(J.__webglFramebuffer))for(let ht=0;ht<J.__webglFramebuffer.length;ht++)s.deleteFramebuffer(J.__webglFramebuffer[ht]);else s.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&s.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&s.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let ht=0;ht<J.__webglColorRenderbuffer.length;ht++)J.__webglColorRenderbuffer[ht]&&s.deleteRenderbuffer(J.__webglColorRenderbuffer[ht]);J.__webglDepthRenderbuffer&&s.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ht=0,ft=b.length;ht<ft;ht++){const Mt=e.get(b[ht]);Mt.__webglTexture&&(s.deleteTexture(Mt.__webglTexture),r.memory.textures--),e.remove(b[ht])}e.remove(b),e.remove(P)}let U=0;function X(){U=0}function I(){const P=U;return P>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+n.maxTextures),U+=1,P}function B(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function Y(P,b){const J=e.get(P);if(P.isVideoTexture&&vt(P),P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){const lt=P.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(J,P,b);return}}i.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+b)}function $(P,b){const J=e.get(P);if(P.version>0&&J.__version!==P.version){nt(J,P,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+b)}function H(P,b){const J=e.get(P);if(P.version>0&&J.__version!==P.version){nt(J,P,b);return}i.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+b)}function Z(P,b){const J=e.get(P);if(P.version>0&&J.__version!==P.version){_t(J,P,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+b)}const it={[ga]:s.REPEAT,[$e]:s.CLAMP_TO_EDGE,[va]:s.MIRRORED_REPEAT},j={[Ce]:s.NEAREST,[Qa]:s.NEAREST_MIPMAP_NEAREST,[ws]:s.NEAREST_MIPMAP_LINEAR,[Ge]:s.LINEAR,[Sc]:s.LINEAR_MIPMAP_NEAREST,[Ln]:s.LINEAR_MIPMAP_LINEAR},V={[Nc]:s.NEVER,[kc]:s.ALWAYS,[zc]:s.LESS,[Wr]:s.LEQUAL,[Uc]:s.EQUAL,[Bc]:s.GEQUAL,[Fc]:s.GREATER,[Gc]:s.NOTEQUAL};function F(P,b,J){if(J?(s.texParameteri(P,s.TEXTURE_WRAP_S,it[b.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,it[b.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,it[b.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,j[b.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,j[b.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==$e||b.wrapT!==$e)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,S(b.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,S(b.minFilter)),b.minFilter!==Ce&&b.minFilter!==Ge&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,V[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const lt=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Ce||b.minFilter!==ws&&b.minFilter!==Ln||b.type===gi&&t.has("OES_texture_float_linear")===!1||o===!1&&b.type===In&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||e.get(b).__currentAnisotropy)&&(s.texParameterf(P,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),e.get(b).__currentAnisotropy=b.anisotropy)}}function K(P,b){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",x));const lt=b.source;let ht=p.get(lt);ht===void 0&&(ht={},p.set(lt,ht));const ft=B(b);if(ft!==P.__cacheKey){ht[ft]===void 0&&(ht[ft]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,J=!0),ht[ft].usedTimes++;const Mt=ht[P.__cacheKey];Mt!==void 0&&(ht[P.__cacheKey].usedTimes--,Mt.usedTimes===0&&A(b)),P.__cacheKey=ft,P.__webglTexture=ht[ft].texture}return J}function nt(P,b,J){let lt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(lt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(lt=s.TEXTURE_3D);const ht=K(P,b),ft=b.source;i.bindTexture(lt,P.__webglTexture,s.TEXTURE0+J);const Mt=e.get(ft);if(ft.version!==Mt.__version||ht===!0){i.activeTexture(s.TEXTURE0+J);const mt=te.getPrimaries(te.workingColorSpace),Tt=b.colorSpace===ke?null:te.getPrimaries(b.colorSpace),gt=b.colorSpace===ke||mt===Tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const At=u(b)&&h(b.image)===!1;let rt=T(b.image,At,!1,n.maxTextureSize);rt=ut(b,rt);const wt=h(rt)||o,Pt=a.convert(b.format,b.colorSpace);let It=a.convert(b.type),bt=_(b.internalFormat,Pt,It,b.colorSpace,b.isVideoTexture);F(lt,b,wt);let xt;const L=b.mipmaps,yt=o&&b.isVideoTexture!==!0&&bt!==kr,Ot=Mt.__version===void 0||ht===!0,pt=E(b,rt,wt);if(b.isDepthTexture)bt=s.DEPTH_COMPONENT,o?b.type===gi?bt=s.DEPTH_COMPONENT32F:b.type===mi?bt=s.DEPTH_COMPONENT24:b.type===Ri?bt=s.DEPTH24_STENCIL8:bt=s.DEPTH_COMPONENT16:b.type===gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Li&&bt===s.DEPTH_COMPONENT&&b.type!==Aa&&b.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=mi,It=a.convert(b.type)),b.format===fn&&bt===s.DEPTH_COMPONENT&&(bt=s.DEPTH_STENCIL,b.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ri,It=a.convert(b.type))),Ot&&(yt?i.texStorage2D(s.TEXTURE_2D,1,bt,rt.width,rt.height):i.texImage2D(s.TEXTURE_2D,0,bt,rt.width,rt.height,0,Pt,It,null));else if(b.isDataTexture)if(L.length>0&&wt){yt&&Ot&&i.texStorage2D(s.TEXTURE_2D,pt,bt,L[0].width,L[0].height);for(let dt=0,z=L.length;dt<z;dt++)xt=L[dt],yt?i.texSubImage2D(s.TEXTURE_2D,dt,0,0,xt.width,xt.height,Pt,It,xt.data):i.texImage2D(s.TEXTURE_2D,dt,bt,xt.width,xt.height,0,Pt,It,xt.data);b.generateMipmaps=!1}else yt?(Ot&&i.texStorage2D(s.TEXTURE_2D,pt,bt,rt.width,rt.height),i.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,Pt,It,rt.data)):i.texImage2D(s.TEXTURE_2D,0,bt,rt.width,rt.height,0,Pt,It,rt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){yt&&Ot&&i.texStorage3D(s.TEXTURE_2D_ARRAY,pt,bt,L[0].width,L[0].height,rt.depth);for(let dt=0,z=L.length;dt<z;dt++)xt=L[dt],b.format!==je?Pt!==null?yt?i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,dt,0,0,0,xt.width,xt.height,rt.depth,Pt,xt.data,0,0):i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,dt,bt,xt.width,xt.height,rt.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?i.texSubImage3D(s.TEXTURE_2D_ARRAY,dt,0,0,0,xt.width,xt.height,rt.depth,Pt,It,xt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,dt,bt,xt.width,xt.height,rt.depth,0,Pt,It,xt.data)}else{yt&&Ot&&i.texStorage2D(s.TEXTURE_2D,pt,bt,L[0].width,L[0].height);for(let dt=0,z=L.length;dt<z;dt++)xt=L[dt],b.format!==je?Pt!==null?yt?i.compressedTexSubImage2D(s.TEXTURE_2D,dt,0,0,xt.width,xt.height,Pt,xt.data):i.compressedTexImage2D(s.TEXTURE_2D,dt,bt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?i.texSubImage2D(s.TEXTURE_2D,dt,0,0,xt.width,xt.height,Pt,It,xt.data):i.texImage2D(s.TEXTURE_2D,dt,bt,xt.width,xt.height,0,Pt,It,xt.data)}else if(b.isDataArrayTexture)yt?(Ot&&i.texStorage3D(s.TEXTURE_2D_ARRAY,pt,bt,rt.width,rt.height,rt.depth),i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Pt,It,rt.data)):i.texImage3D(s.TEXTURE_2D_ARRAY,0,bt,rt.width,rt.height,rt.depth,0,Pt,It,rt.data);else if(b.isData3DTexture)yt?(Ot&&i.texStorage3D(s.TEXTURE_3D,pt,bt,rt.width,rt.height,rt.depth),i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Pt,It,rt.data)):i.texImage3D(s.TEXTURE_3D,0,bt,rt.width,rt.height,rt.depth,0,Pt,It,rt.data);else if(b.isFramebufferTexture){if(Ot)if(yt)i.texStorage2D(s.TEXTURE_2D,pt,bt,rt.width,rt.height);else{let dt=rt.width,z=rt.height;for(let Et=0;Et<pt;Et++)i.texImage2D(s.TEXTURE_2D,Et,bt,dt,z,0,Pt,It,null),dt>>=1,z>>=1}}else if(L.length>0&&wt){yt&&Ot&&i.texStorage2D(s.TEXTURE_2D,pt,bt,L[0].width,L[0].height);for(let dt=0,z=L.length;dt<z;dt++)xt=L[dt],yt?i.texSubImage2D(s.TEXTURE_2D,dt,0,0,Pt,It,xt):i.texImage2D(s.TEXTURE_2D,dt,bt,Pt,It,xt);b.generateMipmaps=!1}else yt?(Ot&&i.texStorage2D(s.TEXTURE_2D,pt,bt,rt.width,rt.height),i.texSubImage2D(s.TEXTURE_2D,0,0,0,Pt,It,rt)):i.texImage2D(s.TEXTURE_2D,0,bt,Pt,It,rt);v(b,wt)&&g(lt),Mt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function _t(P,b,J){if(b.image.length!==6)return;const lt=K(P,b),ht=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+J);const ft=e.get(ht);if(ht.version!==ft.__version||lt===!0){i.activeTexture(s.TEXTURE0+J);const Mt=te.getPrimaries(te.workingColorSpace),mt=b.colorSpace===ke?null:te.getPrimaries(b.colorSpace),Tt=b.colorSpace===ke||Mt===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const gt=b.isCompressedTexture||b.image[0].isCompressedTexture,At=b.image[0]&&b.image[0].isDataTexture,rt=[];for(let dt=0;dt<6;dt++)!gt&&!At?rt[dt]=T(b.image[dt],!1,!0,n.maxCubemapSize):rt[dt]=At?b.image[dt].image:b.image[dt],rt[dt]=ut(b,rt[dt]);const wt=rt[0],Pt=h(wt)||o,It=a.convert(b.format,b.colorSpace),bt=a.convert(b.type),xt=_(b.internalFormat,It,bt,b.colorSpace),L=o&&b.isVideoTexture!==!0,yt=ft.__version===void 0||lt===!0;let Ot=E(b,wt,Pt);F(s.TEXTURE_CUBE_MAP,b,Pt);let pt;if(gt){L&&yt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ot,xt,wt.width,wt.height);for(let dt=0;dt<6;dt++){pt=rt[dt].mipmaps;for(let z=0;z<pt.length;z++){const Et=pt[z];b.format!==je?It!==null?L?i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,z,0,0,Et.width,Et.height,It,Et.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,z,xt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,z,0,0,Et.width,Et.height,It,bt,Et.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,z,xt,Et.width,Et.height,0,It,bt,Et.data)}}}else{pt=b.mipmaps,L&&yt&&(pt.length>0&&Ot++,i.texStorage2D(s.TEXTURE_CUBE_MAP,Ot,xt,rt[0].width,rt[0].height));for(let dt=0;dt<6;dt++)if(At){L?i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,rt[dt].width,rt[dt].height,It,bt,rt[dt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,xt,rt[dt].width,rt[dt].height,0,It,bt,rt[dt].data);for(let z=0;z<pt.length;z++){const Ct=pt[z].image[dt].image;L?i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,z+1,0,0,Ct.width,Ct.height,It,bt,Ct.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,z+1,xt,Ct.width,Ct.height,0,It,bt,Ct.data)}}else{L?i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,It,bt,rt[dt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,xt,It,bt,rt[dt]);for(let z=0;z<pt.length;z++){const Et=pt[z];L?i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,z+1,0,0,It,bt,Et.image[dt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,z+1,xt,It,bt,Et.image[dt])}}}v(b,Pt)&&g(s.TEXTURE_CUBE_MAP),ft.__version=ht.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function St(P,b,J,lt,ht,ft){const Mt=a.convert(J.format,J.colorSpace),mt=a.convert(J.type),Tt=_(J.internalFormat,Mt,mt,J.colorSpace);if(!e.get(b).__hasExternalTextures){const At=Math.max(1,b.width>>ft),rt=Math.max(1,b.height>>ft);ht===s.TEXTURE_3D||ht===s.TEXTURE_2D_ARRAY?i.texImage3D(ht,ft,Tt,At,rt,b.depth,0,Mt,mt,null):i.texImage2D(ht,ft,Tt,At,rt,0,Mt,mt,null)}i.bindFramebuffer(s.FRAMEBUFFER,P),tt(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,lt,ht,e.get(J).__webglTexture,0,st(b)):(ht===s.TEXTURE_2D||ht>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,lt,ht,e.get(J).__webglTexture,ft),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(P,b,J){if(s.bindRenderbuffer(s.RENDERBUFFER,P),b.depthBuffer&&!b.stencilBuffer){let lt=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(J||tt(b)){const ht=b.depthTexture;ht&&ht.isDepthTexture&&(ht.type===gi?lt=s.DEPTH_COMPONENT32F:ht.type===mi&&(lt=s.DEPTH_COMPONENT24));const ft=st(b);tt(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,lt,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,lt,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,lt,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(b.depthBuffer&&b.stencilBuffer){const lt=st(b);J&&tt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,s.DEPTH24_STENCIL8,b.width,b.height):tt(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const lt=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ht=0;ht<lt.length;ht++){const ft=lt[ht],Mt=a.convert(ft.format,ft.colorSpace),mt=a.convert(ft.type),Tt=_(ft.internalFormat,Mt,mt,ft.colorSpace),gt=st(b);J&&tt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,Tt,b.width,b.height):tt(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt,Tt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Tt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!e.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);const lt=e.get(b.depthTexture).__webglTexture,ht=st(b);if(b.depthTexture.format===Li)tt(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,lt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,lt,0);else if(b.depthTexture.format===fn)tt(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,lt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function R(P){const b=e.get(P),J=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Rt(b.__webglFramebuffer,P)}else if(J){b.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[lt]),b.__webglDepthbuffer[lt]=s.createRenderbuffer(),Nt(b.__webglDepthbuffer[lt],P,!1)}else i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),Nt(b.__webglDepthbuffer,P,!1);i.bindFramebuffer(s.FRAMEBUFFER,null)}function N(P,b,J){const lt=e.get(P);b!==void 0&&St(lt.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&R(P)}function C(P){const b=P.texture,J=e.get(P),lt=e.get(b);P.addEventListener("dispose",O),P.isWebGLMultipleRenderTargets!==!0&&(lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture()),lt.__version=b.version,r.memory.textures++);const ht=P.isWebGLCubeRenderTarget===!0,ft=P.isWebGLMultipleRenderTargets===!0,Mt=h(P)||o;if(ht){J.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(o&&b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[mt]=[];for(let Tt=0;Tt<b.mipmaps.length;Tt++)J.__webglFramebuffer[mt][Tt]=s.createFramebuffer()}else J.__webglFramebuffer[mt]=s.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let mt=0;mt<b.mipmaps.length;mt++)J.__webglFramebuffer[mt]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(ft)if(n.drawBuffers){const mt=P.texture;for(let Tt=0,gt=mt.length;Tt<gt;Tt++){const At=e.get(mt[Tt]);At.__webglTexture===void 0&&(At.__webglTexture=s.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&tt(P)===!1){const mt=ft?b:[b];J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Tt=0;Tt<mt.length;Tt++){const gt=mt[Tt];J.__webglColorRenderbuffer[Tt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Tt]);const At=a.convert(gt.format,gt.colorSpace),rt=a.convert(gt.type),wt=_(gt.internalFormat,At,rt,gt.colorSpace,P.isXRRenderTarget===!0),Pt=st(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,wt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,J.__webglColorRenderbuffer[Tt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),Nt(J.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){i.bindTexture(s.TEXTURE_CUBE_MAP,lt.__webglTexture),F(s.TEXTURE_CUBE_MAP,b,Mt);for(let mt=0;mt<6;mt++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let Tt=0;Tt<b.mipmaps.length;Tt++)St(J.__webglFramebuffer[mt][Tt],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Tt);else St(J.__webglFramebuffer[mt],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);v(b,Mt)&&g(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ft){const mt=P.texture;for(let Tt=0,gt=mt.length;Tt<gt;Tt++){const At=mt[Tt],rt=e.get(At);i.bindTexture(s.TEXTURE_2D,rt.__webglTexture),F(s.TEXTURE_2D,At,Mt),St(J.__webglFramebuffer,P,At,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,0),v(At,Mt)&&g(s.TEXTURE_2D)}i.unbindTexture()}else{let mt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?mt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(mt,lt.__webglTexture),F(mt,b,Mt),o&&b.mipmaps&&b.mipmaps.length>0)for(let Tt=0;Tt<b.mipmaps.length;Tt++)St(J.__webglFramebuffer[Tt],P,b,s.COLOR_ATTACHMENT0,mt,Tt);else St(J.__webglFramebuffer,P,b,s.COLOR_ATTACHMENT0,mt,0);v(b,Mt)&&g(mt),i.unbindTexture()}P.depthBuffer&&R(P)}function q(P){const b=h(P)||o,J=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let lt=0,ht=J.length;lt<ht;lt++){const ft=J[lt];if(v(ft,b)){const Mt=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,mt=e.get(ft).__webglTexture;i.bindTexture(Mt,mt),g(Mt),i.unbindTexture()}}}function G(P){if(o&&P.samples>0&&tt(P)===!1){const b=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],J=P.width,lt=P.height;let ht=s.COLOR_BUFFER_BIT;const ft=[],Mt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=e.get(P),Tt=P.isWebGLMultipleRenderTargets===!0;if(Tt)for(let gt=0;gt<b.length;gt++)i.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let gt=0;gt<b.length;gt++){ft.push(s.COLOR_ATTACHMENT0+gt),P.depthBuffer&&ft.push(Mt);const At=mt.__ignoreDepthValues!==void 0?mt.__ignoreDepthValues:!1;if(At===!1&&(P.depthBuffer&&(ht|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ht|=s.STENCIL_BUFFER_BIT)),Tt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]),At===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Mt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Mt])),Tt){const rt=e.get(b[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,rt,0)}s.blitFramebuffer(0,0,J,lt,0,0,J,lt,ht,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ft)}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Tt)for(let gt=0;gt<b.length;gt++){i.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);const At=e.get(b[gt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,At,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}}function st(P){return Math.min(n.maxSamples,P.samples)}function tt(P){const b=e.get(P);return o&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function vt(P){const b=r.render.frame;d.get(P)!==b&&(d.set(P,b),P.update())}function ut(P,b){const J=P.colorSpace,lt=P.format,ht=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===ya||J!==li&&J!==ke&&(te.getTransfer(J)===ne?o===!1?t.has("EXT_sRGB")===!0&&lt===je?(P.format=ya,P.minFilter=Ge,P.generateMipmaps=!1):b=Xr.sRGBToLinear(b):(lt!==je||ht!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),b}this.allocateTextureUnit=I,this.resetTextureUnits=X,this.setTexture2D=Y,this.setTexture2DArray=$,this.setTexture3D=H,this.setTextureCube=Z,this.rebindTextures=N,this.setupRenderTarget=C,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=St,this.useMultisampledRTT=tt}function Wp(s,t,i){const e=i.isWebGL2;function n(a,r=ke){let o;const l=te.getTransfer(r);if(a===_i)return s.UNSIGNED_BYTE;if(a===zr)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Ur)return s.UNSIGNED_SHORT_5_5_5_1;if(a===xc)return s.BYTE;if(a===bc)return s.SHORT;if(a===Aa)return s.UNSIGNED_SHORT;if(a===Nr)return s.INT;if(a===mi)return s.UNSIGNED_INT;if(a===gi)return s.FLOAT;if(a===In)return e?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===Ac)return s.ALPHA;if(a===je)return s.RGBA;if(a===Pc)return s.LUMINANCE;if(a===Cc)return s.LUMINANCE_ALPHA;if(a===Li)return s.DEPTH_COMPONENT;if(a===fn)return s.DEPTH_STENCIL;if(a===ya)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===wc)return s.RED;if(a===Fr)return s.RED_INTEGER;if(a===Rc)return s.RG;if(a===Gr)return s.RG_INTEGER;if(a===Br)return s.RGBA_INTEGER;if(a===Rs||a===Ls||a===Is||a===Ds)if(l===ne)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Rs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ls)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Is)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ds)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Rs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ls)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Is)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ds)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===to||a===eo||a===io||a===no)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===to)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===eo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===io)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===no)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===kr)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===so||a===ao)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(a===so)return l===ne?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===ao)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===oo||a===ro||a===lo||a===co||a===ho||a===uo||a===fo||a===po||a===mo||a===go||a===vo||a===yo||a===_o||a===To)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(a===oo)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===ro)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===lo)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===co)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===ho)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===uo)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===fo)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===po)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===mo)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===go)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===vo)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===yo)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===_o)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===To)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Os||a===Eo||a===Mo)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(a===Os)return l===ne?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Eo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Mo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Lc||a===So||a===xo||a===bo)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(a===Os)return o.COMPRESSED_RED_RGTC1_EXT;if(a===So)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===xo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===bo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ri?e?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:n}}class Yp extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Sn extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xp={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const e of t.hand.values())this._getHandJoint(i,e)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,e){let n=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const T of t.hand.values()){const h=i.getJointPose(T,e),u=this._getHandJoint(c,T);h!==null&&(u.matrix.fromArray(h.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=h.radius),u.visible=h!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=d.position.distanceTo(f.position),m=.02,y=.005;c.inputState.pinching&&p>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=i.getPose(t.gripSpace,e),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=i.getPose(t.targetRaySpace,e),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xp)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const e=new Sn;e.matrixAutoUpdate=!1,e.visible=!1,t.joints[i.jointName]=e,t.add(e)}return t.joints[i.jointName]}}class $p extends Ui{constructor(t,i){super();const e=this;let n=null,a=1,r=null,o="local-floor",l=1,c=null,d=null,f=null,p=null,m=null,y=null;const T=i.getContextAttributes();let h=null,u=null;const v=[],g=[],_=new kt;let E=null;const S=new Be;S.layers.enable(1),S.viewport=new ye;const x=new Be;x.layers.enable(2),x.viewport=new ye;const O=[S,x],M=new Yp;M.layers.enable(1),M.layers.enable(2);let A=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let K=v[F];return K===void 0&&(K=new sa,v[F]=K),K.getTargetRaySpace()},this.getControllerGrip=function(F){let K=v[F];return K===void 0&&(K=new sa,v[F]=K),K.getGripSpace()},this.getHand=function(F){let K=v[F];return K===void 0&&(K=new sa,v[F]=K),K.getHandSpace()};function U(F){const K=g.indexOf(F.inputSource);if(K===-1)return;const nt=v[K];nt!==void 0&&(nt.update(F.inputSource,F.frame,c||r),nt.dispatchEvent({type:F.type,data:F.inputSource}))}function X(){n.removeEventListener("select",U),n.removeEventListener("selectstart",U),n.removeEventListener("selectend",U),n.removeEventListener("squeeze",U),n.removeEventListener("squeezestart",U),n.removeEventListener("squeezeend",U),n.removeEventListener("end",X),n.removeEventListener("inputsourceschange",I);for(let F=0;F<v.length;F++){const K=g[F];K!==null&&(g[F]=null,v[F].disconnect(K))}A=null,k=null,t.setRenderTarget(h),m=null,p=null,f=null,n=null,u=null,V.stop(),e.isPresenting=!1,t.setPixelRatio(E),t.setSize(_.width,_.height,!1),e.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){a=F,e.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,e.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return n},this.setSession=async function(F){if(n=F,n!==null){if(h=t.getRenderTarget(),n.addEventListener("select",U),n.addEventListener("selectstart",U),n.addEventListener("selectend",U),n.addEventListener("squeeze",U),n.addEventListener("squeezestart",U),n.addEventListener("squeezeend",U),n.addEventListener("end",X),n.addEventListener("inputsourceschange",I),T.xrCompatible!==!0&&await i.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(_),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:n.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(n,i,K),n.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Oi(m.framebufferWidth,m.framebufferHeight,{format:je,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil})}else{let K=null,nt=null,_t=null;T.depth&&(_t=T.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,K=T.stencil?fn:Li,nt=T.stencil?Ri:mi);const St={colorFormat:i.RGBA8,depthFormat:_t,scaleFactor:a};f=new XRWebGLBinding(n,i),p=f.createProjectionLayer(St),n.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),u=new Oi(p.textureWidth,p.textureHeight,{format:je,type:_i,depthTexture:new nl(p.textureWidth,p.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0});const Nt=t.properties.get(u);Nt.__ignoreDepthValues=p.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await n.requestReferenceSpace(o),V.setContext(n),V.start(),e.isPresenting=!0,e.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function I(F){for(let K=0;K<F.removed.length;K++){const nt=F.removed[K],_t=g.indexOf(nt);_t>=0&&(g[_t]=null,v[_t].disconnect(nt))}for(let K=0;K<F.added.length;K++){const nt=F.added[K];let _t=g.indexOf(nt);if(_t===-1){for(let Nt=0;Nt<v.length;Nt++)if(Nt>=g.length){g.push(nt),_t=Nt;break}else if(g[Nt]===null){g[Nt]=nt,_t=Nt;break}if(_t===-1)break}const St=v[_t];St&&St.connect(nt)}}const B=new Q,Y=new Q;function $(F,K,nt){B.setFromMatrixPosition(K.matrixWorld),Y.setFromMatrixPosition(nt.matrixWorld);const _t=B.distanceTo(Y),St=K.projectionMatrix.elements,Nt=nt.projectionMatrix.elements,Rt=St[14]/(St[10]-1),R=St[14]/(St[10]+1),N=(St[9]+1)/St[5],C=(St[9]-1)/St[5],q=(St[8]-1)/St[0],G=(Nt[8]+1)/Nt[0],st=Rt*q,tt=Rt*G,vt=_t/(-q+G),ut=vt*-q;K.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(ut),F.translateZ(vt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const P=Rt+vt,b=R+vt,J=st-ut,lt=tt+(_t-ut),ht=N*R/b*P,ft=C*R/b*P;F.projectionMatrix.makePerspective(J,lt,ht,ft,P,b),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function H(F,K){K===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(K.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(n===null)return;M.near=x.near=S.near=F.near,M.far=x.far=S.far=F.far,(A!==M.near||k!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,k=M.far);const K=F.parent,nt=M.cameras;H(M,K);for(let _t=0;_t<nt.length;_t++)H(nt[_t],K);nt.length===2?$(M,S,x):M.projectionMatrix.copy(S.projectionMatrix),Z(F,M,K)};function Z(F,K,nt){nt===null?F.matrix.copy(K.matrixWorld):(F.matrix.copy(nt.matrixWorld),F.matrix.invert(),F.matrix.multiply(K.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(K.projectionMatrix),F.projectionMatrixInverse.copy(K.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=_a*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(F){l=F,p!==null&&(p.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)};let it=null;function j(F,K){if(d=K.getViewerPose(c||r),y=K,d!==null){const nt=d.views;m!==null&&(t.setRenderTargetFramebuffer(u,m.framebuffer),t.setRenderTarget(u));let _t=!1;nt.length!==M.cameras.length&&(M.cameras.length=0,_t=!0);for(let St=0;St<nt.length;St++){const Nt=nt[St];let Rt=null;if(m!==null)Rt=m.getViewport(Nt);else{const N=f.getViewSubImage(p,Nt);Rt=N.viewport,St===0&&(t.setRenderTargetTextures(u,N.colorTexture,p.ignoreDepthValues?void 0:N.depthStencilTexture),t.setRenderTarget(u))}let R=O[St];R===void 0&&(R=new Be,R.layers.enable(St),R.viewport=new ye,O[St]=R),R.matrix.fromArray(Nt.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Nt.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),St===0&&(M.matrix.copy(R.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_t===!0&&M.cameras.push(R)}}for(let nt=0;nt<v.length;nt++){const _t=g[nt],St=v[nt];_t!==null&&St!==void 0&&St.update(_t,K,c||r)}it&&it(F,K),K.detectedPlanes&&e.dispatchEvent({type:"planesdetected",data:K}),y=null}const V=new el;V.setAnimationLoop(j),this.setAnimationLoop=function(F){it=F},this.dispose=function(){}}}function jp(s,t){function i(h,u){h.matrixAutoUpdate===!0&&h.updateMatrix(),u.value.copy(h.matrix)}function e(h,u){u.color.getRGB(h.fogColor.value,Jr(s)),u.isFog?(h.fogNear.value=u.near,h.fogFar.value=u.far):u.isFogExp2&&(h.fogDensity.value=u.density)}function n(h,u,v,g,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(h,u):u.isMeshToonMaterial?(a(h,u),f(h,u)):u.isMeshPhongMaterial?(a(h,u),d(h,u)):u.isMeshStandardMaterial?(a(h,u),p(h,u),u.isMeshPhysicalMaterial&&m(h,u,_)):u.isMeshMatcapMaterial?(a(h,u),y(h,u)):u.isMeshDepthMaterial?a(h,u):u.isMeshDistanceMaterial?(a(h,u),T(h,u)):u.isMeshNormalMaterial?a(h,u):u.isLineBasicMaterial?(r(h,u),u.isLineDashedMaterial&&o(h,u)):u.isPointsMaterial?l(h,u,v,g):u.isSpriteMaterial?c(h,u):u.isShadowMaterial?(h.color.value.copy(u.color),h.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(h,u){h.opacity.value=u.opacity,u.color&&h.diffuse.value.copy(u.color),u.emissive&&h.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(h.map.value=u.map,i(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,i(u.alphaMap,h.alphaMapTransform)),u.bumpMap&&(h.bumpMap.value=u.bumpMap,i(u.bumpMap,h.bumpMapTransform),h.bumpScale.value=u.bumpScale,u.side===Le&&(h.bumpScale.value*=-1)),u.normalMap&&(h.normalMap.value=u.normalMap,i(u.normalMap,h.normalMapTransform),h.normalScale.value.copy(u.normalScale),u.side===Le&&h.normalScale.value.negate()),u.displacementMap&&(h.displacementMap.value=u.displacementMap,i(u.displacementMap,h.displacementMapTransform),h.displacementScale.value=u.displacementScale,h.displacementBias.value=u.displacementBias),u.emissiveMap&&(h.emissiveMap.value=u.emissiveMap,i(u.emissiveMap,h.emissiveMapTransform)),u.specularMap&&(h.specularMap.value=u.specularMap,i(u.specularMap,h.specularMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest);const v=t.get(u).envMap;if(v&&(h.envMap.value=v,h.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=u.reflectivity,h.ior.value=u.ior,h.refractionRatio.value=u.refractionRatio),u.lightMap){h.lightMap.value=u.lightMap;const g=s._useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=u.lightMapIntensity*g,i(u.lightMap,h.lightMapTransform)}u.aoMap&&(h.aoMap.value=u.aoMap,h.aoMapIntensity.value=u.aoMapIntensity,i(u.aoMap,h.aoMapTransform))}function r(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,u.map&&(h.map.value=u.map,i(u.map,h.mapTransform))}function o(h,u){h.dashSize.value=u.dashSize,h.totalSize.value=u.dashSize+u.gapSize,h.scale.value=u.scale}function l(h,u,v,g){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.size.value=u.size*v,h.scale.value=g*.5,u.map&&(h.map.value=u.map,i(u.map,h.uvTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,i(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function c(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.rotation.value=u.rotation,u.map&&(h.map.value=u.map,i(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,i(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function d(h,u){h.specular.value.copy(u.specular),h.shininess.value=Math.max(u.shininess,1e-4)}function f(h,u){u.gradientMap&&(h.gradientMap.value=u.gradientMap)}function p(h,u){h.metalness.value=u.metalness,u.metalnessMap&&(h.metalnessMap.value=u.metalnessMap,i(u.metalnessMap,h.metalnessMapTransform)),h.roughness.value=u.roughness,u.roughnessMap&&(h.roughnessMap.value=u.roughnessMap,i(u.roughnessMap,h.roughnessMapTransform)),t.get(u).envMap&&(h.envMapIntensity.value=u.envMapIntensity)}function m(h,u,v){h.ior.value=u.ior,u.sheen>0&&(h.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),h.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(h.sheenColorMap.value=u.sheenColorMap,i(u.sheenColorMap,h.sheenColorMapTransform)),u.sheenRoughnessMap&&(h.sheenRoughnessMap.value=u.sheenRoughnessMap,i(u.sheenRoughnessMap,h.sheenRoughnessMapTransform))),u.clearcoat>0&&(h.clearcoat.value=u.clearcoat,h.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(h.clearcoatMap.value=u.clearcoatMap,i(u.clearcoatMap,h.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,i(u.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(h.clearcoatNormalMap.value=u.clearcoatNormalMap,i(u.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Le&&h.clearcoatNormalScale.value.negate())),u.iridescence>0&&(h.iridescence.value=u.iridescence,h.iridescenceIOR.value=u.iridescenceIOR,h.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(h.iridescenceMap.value=u.iridescenceMap,i(u.iridescenceMap,h.iridescenceMapTransform)),u.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=u.iridescenceThicknessMap,i(u.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),u.transmission>0&&(h.transmission.value=u.transmission,h.transmissionSamplerMap.value=v.texture,h.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(h.transmissionMap.value=u.transmissionMap,i(u.transmissionMap,h.transmissionMapTransform)),h.thickness.value=u.thickness,u.thicknessMap&&(h.thicknessMap.value=u.thicknessMap,i(u.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=u.attenuationDistance,h.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(h.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(h.anisotropyMap.value=u.anisotropyMap,i(u.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=u.specularIntensity,h.specularColor.value.copy(u.specularColor),u.specularColorMap&&(h.specularColorMap.value=u.specularColorMap,i(u.specularColorMap,h.specularColorMapTransform)),u.specularIntensityMap&&(h.specularIntensityMap.value=u.specularIntensityMap,i(u.specularIntensityMap,h.specularIntensityMapTransform))}function y(h,u){u.matcap&&(h.matcap.value=u.matcap)}function T(h,u){const v=t.get(u).light;h.referencePosition.value.setFromMatrixPosition(v.matrixWorld),h.nearDistance.value=v.shadow.camera.near,h.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Kp(s,t,i,e){let n={},a={},r=[];const o=i.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const _=g.program;e.uniformBlockBinding(v,_)}function c(v,g){let _=n[v.id];_===void 0&&(y(v),_=d(v),n[v.id]=_,v.addEventListener("dispose",h));const E=g.program;e.updateUBOMapping(v,E);const S=t.render.frame;a[v.id]!==S&&(p(v),a[v.id]=S)}function d(v){const g=f();v.__bindingPointIndex=g;const _=s.createBuffer(),E=v.__size,S=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,E,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,g,_),_}function f(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){const g=n[v.id],_=v.uniforms,E=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,g);for(let S=0,x=_.length;S<x;S++){const O=Array.isArray(_[S])?_[S]:[_[S]];for(let M=0,A=O.length;M<A;M++){const k=O[M];if(m(k,S,M,E)===!0){const U=k.__offset,X=Array.isArray(k.value)?k.value:[k.value];let I=0;for(let B=0;B<X.length;B++){const Y=X[B],$=T(Y);typeof Y=="number"||typeof Y=="boolean"?(k.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,U+I,k.__data)):Y.isMatrix3?(k.__data[0]=Y.elements[0],k.__data[1]=Y.elements[1],k.__data[2]=Y.elements[2],k.__data[3]=0,k.__data[4]=Y.elements[3],k.__data[5]=Y.elements[4],k.__data[6]=Y.elements[5],k.__data[7]=0,k.__data[8]=Y.elements[6],k.__data[9]=Y.elements[7],k.__data[10]=Y.elements[8],k.__data[11]=0):(Y.toArray(k.__data,I),I+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(v,g,_,E){const S=v.value,x=g+"_"+_;if(E[x]===void 0)return typeof S=="number"||typeof S=="boolean"?E[x]=S:E[x]=S.clone(),!0;{const O=E[x];if(typeof S=="number"||typeof S=="boolean"){if(O!==S)return E[x]=S,!0}else if(O.equals(S)===!1)return O.copy(S),!0}return!1}function y(v){const g=v.uniforms;let _=0;const E=16;for(let x=0,O=g.length;x<O;x++){const M=Array.isArray(g[x])?g[x]:[g[x]];for(let A=0,k=M.length;A<k;A++){const U=M[A],X=Array.isArray(U.value)?U.value:[U.value];for(let I=0,B=X.length;I<B;I++){const Y=X[I],$=T(Y),H=_%E;H!==0&&E-H<$.boundary&&(_+=E-H),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=_,_+=$.storage}}}const S=_%E;return S>0&&(_+=E-S),v.__size=_,v.__cache={},this}function T(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function h(v){const g=v.target;g.removeEventListener("dispose",h);const _=r.indexOf(g.__bindingPointIndex);r.splice(_,1),s.deleteBuffer(n[g.id]),delete n[g.id],delete a[g.id]}function u(){for(const v in n)s.deleteBuffer(n[v]);r=[],n={},a={}}return{bind:l,update:c,dispose:u}}class cl{constructor(t={}){const{canvas:i=Wc(),context:e=null,depth:n=!0,stencil:a=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;e!==null?p=e.getContextAttributes().alpha:p=r;const m=new Uint32Array(4),y=new Int32Array(4);let T=null,h=null;const u=[],v=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this._useLegacyLights=!1,this.toneMapping=yi,this.toneMappingExposure=1;const g=this;let _=!1,E=0,S=0,x=null,O=-1,M=null;const A=new ye,k=new ye;let U=null;const X=new Jt(0);let I=0,B=i.width,Y=i.height,$=1,H=null,Z=null;const it=new ye(0,0,B,Y),j=new ye(0,0,B,Y);let V=!1;const F=new La;let K=!1,nt=!1,_t=null;const St=new fe,Nt=new kt,Rt=new Q,R={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function N(){return x===null?$:1}let C=e;function q(w,et){for(let ot=0;ot<w.length;ot++){const ct=w[ot],at=i.getContext(ct,et);if(at!==null)return at}return null}try{const w={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${xa}`),i.addEventListener("webglcontextlost",dt,!1),i.addEventListener("webglcontextrestored",z,!1),i.addEventListener("webglcontextcreationerror",Et,!1),C===null){const et=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&et.shift(),C=q(et,w),C===null)throw q(et)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&C instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let G,st,tt,vt,ut,P,b,J,lt,ht,ft,Mt,mt,Tt,gt,At,rt,wt,Pt,It,bt,xt,L,yt;function Ot(){G=new af(C),st=new Ju(C,G,t),G.init(st),xt=new Wp(C,G,st),tt=new Hp(C,G,st),vt=new lf(C),ut=new Cp,P=new Vp(C,G,tt,ut,st,xt,vt),b=new tf(g),J=new sf(g),lt=new mh(C,st),L=new qu(C,G,lt,st),ht=new of(C,lt,vt,L),ft=new uf(C,ht,lt,vt),Pt=new df(C,st,P),At=new Qu(ut),Mt=new Pp(g,b,J,G,st,L,At),mt=new jp(g,ut),Tt=new Rp,gt=new zp(G,st),wt=new Ku(g,b,J,tt,ft,p,l),rt=new kp(g,ft,st),yt=new Kp(C,vt,st,tt),It=new Zu(C,G,vt,st),bt=new rf(C,G,vt,st),vt.programs=Mt.programs,g.capabilities=st,g.extensions=G,g.properties=ut,g.renderLists=Tt,g.shadowMap=rt,g.state=tt,g.info=vt}Ot();const pt=new $p(g,C);this.xr=pt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const w=G.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=G.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(B,Y,!1))},this.getSize=function(w){return w.set(B,Y)},this.setSize=function(w,et,ot=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,Y=et,i.width=Math.floor(w*$),i.height=Math.floor(et*$),ot===!0&&(i.style.width=w+"px",i.style.height=et+"px"),this.setViewport(0,0,w,et)},this.getDrawingBufferSize=function(w){return w.set(B*$,Y*$).floor()},this.setDrawingBufferSize=function(w,et,ot){B=w,Y=et,$=ot,i.width=Math.floor(w*ot),i.height=Math.floor(et*ot),this.setViewport(0,0,w,et)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(it)},this.setViewport=function(w,et,ot,ct){w.isVector4?it.set(w.x,w.y,w.z,w.w):it.set(w,et,ot,ct),tt.viewport(A.copy(it).multiplyScalar($).floor())},this.getScissor=function(w){return w.copy(j)},this.setScissor=function(w,et,ot,ct){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,et,ot,ct),tt.scissor(k.copy(j).multiplyScalar($).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(w){tt.setScissorTest(V=w)},this.setOpaqueSort=function(w){H=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(w=!0,et=!0,ot=!0){let ct=0;if(w){let at=!1;if(x!==null){const zt=x.texture.format;at=zt===Br||zt===Gr||zt===Fr}if(at){const zt=x.texture.type,Gt=zt===_i||zt===mi||zt===Aa||zt===Ri||zt===zr||zt===Ur,Bt=wt.getClearColor(),Ht=wt.getClearAlpha(),$t=Bt.r,Wt=Bt.g,Yt=Bt.b;Gt?(m[0]=$t,m[1]=Wt,m[2]=Yt,m[3]=Ht,C.clearBufferuiv(C.COLOR,0,m)):(y[0]=$t,y[1]=Wt,y[2]=Yt,y[3]=Ht,C.clearBufferiv(C.COLOR,0,y))}else ct|=C.COLOR_BUFFER_BIT}et&&(ct|=C.DEPTH_BUFFER_BIT),ot&&(ct|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",dt,!1),i.removeEventListener("webglcontextrestored",z,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),Tt.dispose(),gt.dispose(),ut.dispose(),b.dispose(),J.dispose(),ft.dispose(),L.dispose(),yt.dispose(),Mt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",ae),pt.removeEventListener("sessionend",Zt),_t&&(_t.dispose(),_t=null),re.stop()};function dt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const w=vt.autoReset,et=rt.enabled,ot=rt.autoUpdate,ct=rt.needsUpdate,at=rt.type;Ot(),vt.autoReset=w,rt.enabled=et,rt.autoUpdate=ot,rt.needsUpdate=ct,rt.type=at}function Et(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ct(w){const et=w.target;et.removeEventListener("dispose",Ct),Ut(et)}function Ut(w){Ft(w),ut.remove(w)}function Ft(w){const et=ut.get(w).programs;et!==void 0&&(et.forEach(function(ot){Mt.releaseProgram(ot)}),w.isShaderMaterial&&Mt.releaseShaderCache(w))}this.renderBufferDirect=function(w,et,ot,ct,at,zt){et===null&&(et=R);const Gt=at.isMesh&&at.matrixWorld.determinant()<0,Bt=vl(w,et,ot,ct,at);tt.setMaterial(ct,Gt);let Ht=ot.index,$t=1;if(ct.wireframe===!0){if(Ht=ht.getWireframeAttribute(ot),Ht===void 0)return;$t=2}const Wt=ot.drawRange,Yt=ot.attributes.position;let ce=Wt.start*$t,Ie=(Wt.start+Wt.count)*$t;zt!==null&&(ce=Math.max(ce,zt.start*$t),Ie=Math.min(Ie,(zt.start+zt.count)*$t)),Ht!==null?(ce=Math.max(ce,0),Ie=Math.min(Ie,Ht.count)):Yt!=null&&(ce=Math.max(ce,0),Ie=Math.min(Ie,Yt.count));const ge=Ie-ce;if(ge<0||ge===1/0)return;L.setup(at,ct,Bt,ot,Ht);let Qe,oe=It;if(Ht!==null&&(Qe=lt.get(Ht),oe=bt,oe.setIndex(Qe)),at.isMesh)ct.wireframe===!0?(tt.setLineWidth(ct.wireframeLinewidth*N()),oe.setMode(C.LINES)):oe.setMode(C.TRIANGLES);else if(at.isLine){let Kt=ct.linewidth;Kt===void 0&&(Kt=1),tt.setLineWidth(Kt*N()),at.isLineSegments?oe.setMode(C.LINES):at.isLineLoop?oe.setMode(C.LINE_LOOP):oe.setMode(C.LINE_STRIP)}else at.isPoints?oe.setMode(C.POINTS):at.isSprite&&oe.setMode(C.TRIANGLES);if(at.isBatchedMesh)oe.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else if(at.isInstancedMesh)oe.renderInstances(ce,ge,at.count);else if(ot.isInstancedBufferGeometry){const Kt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,xs=Math.min(ot.instanceCount,Kt);oe.renderInstances(ce,ge,xs)}else oe.render(ce,ge)};function jt(w,et,ot){w.transparent===!0&&w.side===oi&&w.forceSinglePass===!1?(w.side=Le,w.needsUpdate=!0,Un(w,et,ot),w.side=Ti,w.needsUpdate=!0,Un(w,et,ot),w.side=oi):Un(w,et,ot)}this.compile=function(w,et,ot=null){ot===null&&(ot=w),h=gt.get(ot),h.init(),v.push(h),ot.traverseVisible(function(at){at.isLight&&at.layers.test(et.layers)&&(h.pushLight(at),at.castShadow&&h.pushShadow(at))}),w!==ot&&w.traverseVisible(function(at){at.isLight&&at.layers.test(et.layers)&&(h.pushLight(at),at.castShadow&&h.pushShadow(at))}),h.setupLights(g._useLegacyLights);const ct=new Set;return w.traverse(function(at){const zt=at.material;if(zt)if(Array.isArray(zt))for(let Gt=0;Gt<zt.length;Gt++){const Bt=zt[Gt];jt(Bt,ot,at),ct.add(Bt)}else jt(zt,ot,at),ct.add(zt)}),v.pop(),h=null,ct},this.compileAsync=function(w,et,ot=null){const ct=this.compile(w,et,ot);return new Promise(at=>{function zt(){if(ct.forEach(function(Gt){ut.get(Gt).currentProgram.isReady()&&ct.delete(Gt)}),ct.size===0){at(w);return}setTimeout(zt,10)}G.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let Vt=null;function se(w){Vt&&Vt(w)}function ae(){re.stop()}function Zt(){re.start()}const re=new el;re.setAnimationLoop(se),typeof self<"u"&&re.setContext(self),this.setAnimationLoop=function(w){Vt=w,pt.setAnimationLoop(w),w===null?re.stop():re.start()},pt.addEventListener("sessionstart",ae),pt.addEventListener("sessionend",Zt),this.render=function(w,et){if(et!==void 0&&et.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),et.parent===null&&et.matrixWorldAutoUpdate===!0&&et.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(et),et=pt.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,et,x),h=gt.get(w,v.length),h.init(),v.push(h),St.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),F.setFromProjectionMatrix(St),nt=this.localClippingEnabled,K=At.init(this.clippingPlanes,nt),T=Tt.get(w,u.length),T.init(),u.push(T),Ke(w,et,0,g.sortObjects),T.finish(),g.sortObjects===!0&&T.sort(H,Z),this.info.render.frame++,K===!0&&At.beginShadows();const ot=h.state.shadowsArray;if(rt.render(ot,w,et),K===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset(),wt.render(T,w),h.setupLights(g._useLegacyLights),et.isArrayCamera){const ct=et.cameras;for(let at=0,zt=ct.length;at<zt;at++){const Gt=ct[at];Ua(T,w,Gt,Gt.viewport)}}else Ua(T,w,et);x!==null&&(P.updateMultisampleRenderTarget(x),P.updateRenderTargetMipmap(x)),w.isScene===!0&&w.onAfterRender(g,w,et),L.resetDefaultState(),O=-1,M=null,v.pop(),v.length>0?h=v[v.length-1]:h=null,u.pop(),u.length>0?T=u[u.length-1]:T=null};function Ke(w,et,ot,ct){if(w.visible===!1)return;if(w.layers.test(et.layers)){if(w.isGroup)ot=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(et);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||F.intersectsSprite(w)){ct&&Rt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(St);const Gt=ft.update(w),Bt=w.material;Bt.visible&&T.push(w,Gt,Bt,ot,Rt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||F.intersectsObject(w))){const Gt=ft.update(w),Bt=w.material;if(ct&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Rt.copy(w.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),Rt.copy(Gt.boundingSphere.center)),Rt.applyMatrix4(w.matrixWorld).applyMatrix4(St)),Array.isArray(Bt)){const Ht=Gt.groups;for(let $t=0,Wt=Ht.length;$t<Wt;$t++){const Yt=Ht[$t],ce=Bt[Yt.materialIndex];ce&&ce.visible&&T.push(w,Gt,ce,ot,Rt.z,Yt)}}else Bt.visible&&T.push(w,Gt,Bt,ot,Rt.z,null)}}const zt=w.children;for(let Gt=0,Bt=zt.length;Gt<Bt;Gt++)Ke(zt[Gt],et,ot,ct)}function Ua(w,et,ot,ct){const at=w.opaque,zt=w.transmissive,Gt=w.transparent;h.setupLightsView(ot),K===!0&&At.setGlobalState(g.clippingPlanes,ot),zt.length>0&&gl(at,zt,et,ot),ct&&tt.viewport(A.copy(ct)),at.length>0&&zn(at,et,ot),zt.length>0&&zn(zt,et,ot),Gt.length>0&&zn(Gt,et,ot),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function gl(w,et,ot,ct){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;const zt=st.isWebGL2;_t===null&&(_t=new Oi(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")?In:_i,minFilter:Ln,samples:zt?4:0})),g.getDrawingBufferSize(Nt),zt?_t.setSize(Nt.x,Nt.y):_t.setSize(Ta(Nt.x),Ta(Nt.y));const Gt=g.getRenderTarget();g.setRenderTarget(_t),g.getClearColor(X),I=g.getClearAlpha(),I<1&&g.setClearColor(16777215,.5),g.clear();const Bt=g.toneMapping;g.toneMapping=yi,zn(w,ot,ct),P.updateMultisampleRenderTarget(_t),P.updateRenderTargetMipmap(_t);let Ht=!1;for(let $t=0,Wt=et.length;$t<Wt;$t++){const Yt=et[$t],ce=Yt.object,Ie=Yt.geometry,ge=Yt.material,Qe=Yt.group;if(ge.side===oi&&ce.layers.test(ct.layers)){const oe=ge.side;ge.side=Le,ge.needsUpdate=!0,Fa(ce,ot,ct,Ie,ge,Qe),ge.side=oe,ge.needsUpdate=!0,Ht=!0}}Ht===!0&&(P.updateMultisampleRenderTarget(_t),P.updateRenderTargetMipmap(_t)),g.setRenderTarget(Gt),g.setClearColor(X,I),g.toneMapping=Bt}function zn(w,et,ot){const ct=et.isScene===!0?et.overrideMaterial:null;for(let at=0,zt=w.length;at<zt;at++){const Gt=w[at],Bt=Gt.object,Ht=Gt.geometry,$t=ct===null?Gt.material:ct,Wt=Gt.group;Bt.layers.test(ot.layers)&&Fa(Bt,et,ot,Ht,$t,Wt)}}function Fa(w,et,ot,ct,at,zt){w.onBeforeRender(g,et,ot,ct,at,zt),w.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),at.onBeforeRender(g,et,ot,ct,w,zt),at.transparent===!0&&at.side===oi&&at.forceSinglePass===!1?(at.side=Le,at.needsUpdate=!0,g.renderBufferDirect(ot,et,ct,at,w,zt),at.side=Ti,at.needsUpdate=!0,g.renderBufferDirect(ot,et,ct,at,w,zt),at.side=oi):g.renderBufferDirect(ot,et,ct,at,w,zt),w.onAfterRender(g,et,ot,ct,at,zt)}function Un(w,et,ot){et.isScene!==!0&&(et=R);const ct=ut.get(w),at=h.state.lights,zt=h.state.shadowsArray,Gt=at.state.version,Bt=Mt.getParameters(w,at.state,zt,et,ot),Ht=Mt.getProgramCacheKey(Bt);let $t=ct.programs;ct.environment=w.isMeshStandardMaterial?et.environment:null,ct.fog=et.fog,ct.envMap=(w.isMeshStandardMaterial?J:b).get(w.envMap||ct.environment),$t===void 0&&(w.addEventListener("dispose",Ct),$t=new Map,ct.programs=$t);let Wt=$t.get(Ht);if(Wt!==void 0){if(ct.currentProgram===Wt&&ct.lightsStateVersion===Gt)return Ba(w,Bt),Wt}else Bt.uniforms=Mt.getUniforms(w),w.onBuild(ot,Bt,g),w.onBeforeCompile(Bt,g),Wt=Mt.acquireProgram(Bt,Ht),$t.set(Ht,Wt),ct.uniforms=Bt.uniforms;const Yt=ct.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Yt.clippingPlanes=At.uniform),Ba(w,Bt),ct.needsLights=_l(w),ct.lightsStateVersion=Gt,ct.needsLights&&(Yt.ambientLightColor.value=at.state.ambient,Yt.lightProbe.value=at.state.probe,Yt.directionalLights.value=at.state.directional,Yt.directionalLightShadows.value=at.state.directionalShadow,Yt.spotLights.value=at.state.spot,Yt.spotLightShadows.value=at.state.spotShadow,Yt.rectAreaLights.value=at.state.rectArea,Yt.ltc_1.value=at.state.rectAreaLTC1,Yt.ltc_2.value=at.state.rectAreaLTC2,Yt.pointLights.value=at.state.point,Yt.pointLightShadows.value=at.state.pointShadow,Yt.hemisphereLights.value=at.state.hemi,Yt.directionalShadowMap.value=at.state.directionalShadowMap,Yt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Yt.spotShadowMap.value=at.state.spotShadowMap,Yt.spotLightMatrix.value=at.state.spotLightMatrix,Yt.spotLightMap.value=at.state.spotLightMap,Yt.pointShadowMap.value=at.state.pointShadowMap,Yt.pointShadowMatrix.value=at.state.pointShadowMatrix),ct.currentProgram=Wt,ct.uniformsList=null,Wt}function Ga(w){if(w.uniformsList===null){const et=w.currentProgram.getUniforms();w.uniformsList=hs.seqWithValue(et.seq,w.uniforms)}return w.uniformsList}function Ba(w,et){const ot=ut.get(w);ot.outputColorSpace=et.outputColorSpace,ot.batching=et.batching,ot.instancing=et.instancing,ot.instancingColor=et.instancingColor,ot.skinning=et.skinning,ot.morphTargets=et.morphTargets,ot.morphNormals=et.morphNormals,ot.morphColors=et.morphColors,ot.morphTargetsCount=et.morphTargetsCount,ot.numClippingPlanes=et.numClippingPlanes,ot.numIntersection=et.numClipIntersection,ot.vertexAlphas=et.vertexAlphas,ot.vertexTangents=et.vertexTangents,ot.toneMapping=et.toneMapping}function vl(w,et,ot,ct,at){et.isScene!==!0&&(et=R),P.resetTextureUnits();const zt=et.fog,Gt=ct.isMeshStandardMaterial?et.environment:null,Bt=x===null?g.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:li,Ht=(ct.isMeshStandardMaterial?J:b).get(ct.envMap||Gt),$t=ct.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Wt=!!ot.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Yt=!!ot.morphAttributes.position,ce=!!ot.morphAttributes.normal,Ie=!!ot.morphAttributes.color;let ge=yi;ct.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(ge=g.toneMapping);const Qe=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,oe=Qe!==void 0?Qe.length:0,Kt=ut.get(ct),xs=h.state.lights;if(K===!0&&(nt===!0||w!==M)){const Ue=w===M&&ct.id===O;At.setState(ct,w,Ue)}let le=!1;ct.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==xs.state.version||Kt.outputColorSpace!==Bt||at.isBatchedMesh&&Kt.batching===!1||!at.isBatchedMesh&&Kt.batching===!0||at.isInstancedMesh&&Kt.instancing===!1||!at.isInstancedMesh&&Kt.instancing===!0||at.isSkinnedMesh&&Kt.skinning===!1||!at.isSkinnedMesh&&Kt.skinning===!0||at.isInstancedMesh&&Kt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Kt.instancingColor===!1&&at.instanceColor!==null||Kt.envMap!==Ht||ct.fog===!0&&Kt.fog!==zt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==At.numPlanes||Kt.numIntersection!==At.numIntersection)||Kt.vertexAlphas!==$t||Kt.vertexTangents!==Wt||Kt.morphTargets!==Yt||Kt.morphNormals!==ce||Kt.morphColors!==Ie||Kt.toneMapping!==ge||st.isWebGL2===!0&&Kt.morphTargetsCount!==oe)&&(le=!0):(le=!0,Kt.__version=ct.version);let Ei=Kt.currentProgram;le===!0&&(Ei=Un(ct,et,at));let ka=!1,vn=!1,bs=!1;const Ee=Ei.getUniforms(),Mi=Kt.uniforms;if(tt.useProgram(Ei.program)&&(ka=!0,vn=!0,bs=!0),ct.id!==O&&(O=ct.id,vn=!0),ka||M!==w){Ee.setValue(C,"projectionMatrix",w.projectionMatrix),Ee.setValue(C,"viewMatrix",w.matrixWorldInverse);const Ue=Ee.map.cameraPosition;Ue!==void 0&&Ue.setValue(C,Rt.setFromMatrixPosition(w.matrixWorld)),st.logarithmicDepthBuffer&&Ee.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Ee.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,vn=!0,bs=!0)}if(at.isSkinnedMesh){Ee.setOptional(C,at,"bindMatrix"),Ee.setOptional(C,at,"bindMatrixInverse");const Ue=at.skeleton;Ue&&(st.floatVertexTextures?(Ue.boneTexture===null&&Ue.computeBoneTexture(),Ee.setValue(C,"boneTexture",Ue.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}at.isBatchedMesh&&(Ee.setOptional(C,at,"batchingTexture"),Ee.setValue(C,"batchingTexture",at._matricesTexture,P));const As=ot.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0&&st.isWebGL2===!0)&&Pt.update(at,ot,Ei),(vn||Kt.receiveShadow!==at.receiveShadow)&&(Kt.receiveShadow=at.receiveShadow,Ee.setValue(C,"receiveShadow",at.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(Mi.envMap.value=Ht,Mi.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),vn&&(Ee.setValue(C,"toneMappingExposure",g.toneMappingExposure),Kt.needsLights&&yl(Mi,bs),zt&&ct.fog===!0&&mt.refreshFogUniforms(Mi,zt),mt.refreshMaterialUniforms(Mi,ct,$,Y,_t),hs.upload(C,Ga(Kt),Mi,P)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(hs.upload(C,Ga(Kt),Mi,P),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Ee.setValue(C,"center",at.center),Ee.setValue(C,"modelViewMatrix",at.modelViewMatrix),Ee.setValue(C,"normalMatrix",at.normalMatrix),Ee.setValue(C,"modelMatrix",at.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const Ue=ct.uniformsGroups;for(let Ps=0,Tl=Ue.length;Ps<Tl;Ps++)if(st.isWebGL2){const Ha=Ue[Ps];yt.update(Ha,Ei),yt.bind(Ha,Ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ei}function yl(w,et){w.ambientLightColor.needsUpdate=et,w.lightProbe.needsUpdate=et,w.directionalLights.needsUpdate=et,w.directionalLightShadows.needsUpdate=et,w.pointLights.needsUpdate=et,w.pointLightShadows.needsUpdate=et,w.spotLights.needsUpdate=et,w.spotLightShadows.needsUpdate=et,w.rectAreaLights.needsUpdate=et,w.hemisphereLights.needsUpdate=et}function _l(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(w,et,ot){ut.get(w.texture).__webglTexture=et,ut.get(w.depthTexture).__webglTexture=ot;const ct=ut.get(w);ct.__hasExternalTextures=!0,ct.__hasExternalTextures&&(ct.__autoAllocateDepthBuffer=ot===void 0,ct.__autoAllocateDepthBuffer||G.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ct.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,et){const ot=ut.get(w);ot.__webglFramebuffer=et,ot.__useDefaultFramebuffer=et===void 0},this.setRenderTarget=function(w,et=0,ot=0){x=w,E=et,S=ot;let ct=!0,at=null,zt=!1,Gt=!1;if(w){const Ht=ut.get(w);Ht.__useDefaultFramebuffer!==void 0?(tt.bindFramebuffer(C.FRAMEBUFFER,null),ct=!1):Ht.__webglFramebuffer===void 0?P.setupRenderTarget(w):Ht.__hasExternalTextures&&P.rebindTextures(w,ut.get(w.texture).__webglTexture,ut.get(w.depthTexture).__webglTexture);const $t=w.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Gt=!0);const Wt=ut.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Wt[et])?at=Wt[et][ot]:at=Wt[et],zt=!0):st.isWebGL2&&w.samples>0&&P.useMultisampledRTT(w)===!1?at=ut.get(w).__webglMultisampledFramebuffer:Array.isArray(Wt)?at=Wt[ot]:at=Wt,A.copy(w.viewport),k.copy(w.scissor),U=w.scissorTest}else A.copy(it).multiplyScalar($).floor(),k.copy(j).multiplyScalar($).floor(),U=V;if(tt.bindFramebuffer(C.FRAMEBUFFER,at)&&st.drawBuffers&&ct&&tt.drawBuffers(w,at),tt.viewport(A),tt.scissor(k),tt.setScissorTest(U),zt){const Ht=ut.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ht.__webglTexture,ot)}else if(Gt){const Ht=ut.get(w.texture),$t=et||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ht.__webglTexture,ot||0,$t)}O=-1},this.readRenderTargetPixels=function(w,et,ot,ct,at,zt,Gt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Gt!==void 0&&(Bt=Bt[Gt]),Bt){tt.bindFramebuffer(C.FRAMEBUFFER,Bt);try{const Ht=w.texture,$t=Ht.format,Wt=Ht.type;if($t!==je&&xt.convert($t)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Yt=Wt===In&&(G.has("EXT_color_buffer_half_float")||st.isWebGL2&&G.has("EXT_color_buffer_float"));if(Wt!==_i&&xt.convert(Wt)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Wt===gi&&(st.isWebGL2||G.has("OES_texture_float")||G.has("WEBGL_color_buffer_float")))&&!Yt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}et>=0&&et<=w.width-ct&&ot>=0&&ot<=w.height-at&&C.readPixels(et,ot,ct,at,xt.convert($t),xt.convert(Wt),zt)}finally{const Ht=x!==null?ut.get(x).__webglFramebuffer:null;tt.bindFramebuffer(C.FRAMEBUFFER,Ht)}}},this.copyFramebufferToTexture=function(w,et,ot=0){const ct=Math.pow(2,-ot),at=Math.floor(et.image.width*ct),zt=Math.floor(et.image.height*ct);P.setTexture2D(et,0),C.copyTexSubImage2D(C.TEXTURE_2D,ot,0,0,w.x,w.y,at,zt),tt.unbindTexture()},this.copyTextureToTexture=function(w,et,ot,ct=0){const at=et.image.width,zt=et.image.height,Gt=xt.convert(ot.format),Bt=xt.convert(ot.type);P.setTexture2D(ot,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,ot.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,ot.unpackAlignment),et.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ct,w.x,w.y,at,zt,Gt,Bt,et.image.data):et.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ct,w.x,w.y,et.mipmaps[0].width,et.mipmaps[0].height,Gt,et.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,ct,w.x,w.y,Gt,Bt,et.image),ct===0&&ot.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),tt.unbindTexture()},this.copyTextureToTexture3D=function(w,et,ot,ct,at=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const zt=w.max.x-w.min.x+1,Gt=w.max.y-w.min.y+1,Bt=w.max.z-w.min.z+1,Ht=xt.convert(ct.format),$t=xt.convert(ct.type);let Wt;if(ct.isData3DTexture)P.setTexture3D(ct,0),Wt=C.TEXTURE_3D;else if(ct.isDataArrayTexture||ct.isCompressedArrayTexture)P.setTexture2DArray(ct,0),Wt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,ct.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ct.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,ct.unpackAlignment);const Yt=C.getParameter(C.UNPACK_ROW_LENGTH),ce=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ie=C.getParameter(C.UNPACK_SKIP_PIXELS),ge=C.getParameter(C.UNPACK_SKIP_ROWS),Qe=C.getParameter(C.UNPACK_SKIP_IMAGES),oe=ot.isCompressedTexture?ot.mipmaps[at]:ot.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,oe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,oe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,w.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,w.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,w.min.z),ot.isDataTexture||ot.isData3DTexture?C.texSubImage3D(Wt,at,et.x,et.y,et.z,zt,Gt,Bt,Ht,$t,oe.data):ot.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(Wt,at,et.x,et.y,et.z,zt,Gt,Bt,Ht,oe.data)):C.texSubImage3D(Wt,at,et.x,et.y,et.z,zt,Gt,Bt,Ht,$t,oe),C.pixelStorei(C.UNPACK_ROW_LENGTH,Yt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ce),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ie),C.pixelStorei(C.UNPACK_SKIP_ROWS,ge),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Qe),at===0&&ct.generateMipmaps&&C.generateMipmap(Wt),tt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),tt.unbindTexture()},this.resetState=function(){E=0,S=0,x=null,tt.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=t===Pa?"display-p3":"srgb",i.unpackColorSpace=te.workingColorSpace===Ts?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Te?Ii:Hr}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ii?Te:li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class qp extends cl{}qp.prototype.isWebGL1Renderer=!0;class Zp extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class Cn extends Je{constructor(t=1,i=1,e=1,n=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:e,radialSegments:n,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),a=Math.floor(a);const d=[],f=[],p=[],m=[];let y=0;const T=[],h=e/2;let u=0;v(),r===!1&&(t>0&&g(!0),i>0&&g(!1)),this.setIndex(d),this.setAttribute("position",new Ae(f,3)),this.setAttribute("normal",new Ae(p,3)),this.setAttribute("uv",new Ae(m,2));function v(){const _=new Q,E=new Q;let S=0;const x=(i-t)/e;for(let O=0;O<=a;O++){const M=[],A=O/a,k=A*(i-t)+t;for(let U=0;U<=n;U++){const X=U/n,I=X*l+o,B=Math.sin(I),Y=Math.cos(I);E.x=k*B,E.y=-A*e+h,E.z=k*Y,f.push(E.x,E.y,E.z),_.set(B,x,Y).normalize(),p.push(_.x,_.y,_.z),m.push(X,1-A),M.push(y++)}T.push(M)}for(let O=0;O<n;O++)for(let M=0;M<a;M++){const A=T[M][O],k=T[M+1][O],U=T[M+1][O+1],X=T[M][O+1];d.push(A,k,X),d.push(k,U,X),S+=6}c.addGroup(u,S,0),u+=S}function g(_){const E=y,S=new kt,x=new Q;let O=0;const M=_===!0?t:i,A=_===!0?1:-1;for(let U=1;U<=n;U++)f.push(0,h*A,0),p.push(0,A,0),m.push(.5,.5),y++;const k=y;for(let U=0;U<=n;U++){const I=U/n*l+o,B=Math.cos(I),Y=Math.sin(I);x.x=M*Y,x.y=h*A,x.z=M*B,f.push(x.x,x.y,x.z),p.push(0,A,0),S.x=B*.5+.5,S.y=Y*.5*A+.5,m.push(S.x,S.y),y++}for(let U=0;U<n;U++){const X=E+U,I=k+U;_===!0?d.push(I,I+1,X):d.push(I+1,I,X),O+=3}c.addGroup(u,O,_===!0?1:2),u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ss extends Je{constructor(t=[],i=[],e=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:e,detail:n};const a=[],r=[];o(n),c(e),d(),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(a.slice(),3)),this.setAttribute("uv",new Ae(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const g=new Q,_=new Q,E=new Q;for(let S=0;S<i.length;S+=3)m(i[S+0],g),m(i[S+1],_),m(i[S+2],E),l(g,_,E,v)}function l(v,g,_,E){const S=E+1,x=[];for(let O=0;O<=S;O++){x[O]=[];const M=v.clone().lerp(_,O/S),A=g.clone().lerp(_,O/S),k=S-O;for(let U=0;U<=k;U++)U===0&&O===S?x[O][U]=M:x[O][U]=M.clone().lerp(A,U/k)}for(let O=0;O<S;O++)for(let M=0;M<2*(S-O)-1;M++){const A=Math.floor(M/2);M%2===0?(p(x[O][A+1]),p(x[O+1][A]),p(x[O][A])):(p(x[O][A+1]),p(x[O+1][A+1]),p(x[O+1][A]))}}function c(v){const g=new Q;for(let _=0;_<a.length;_+=3)g.x=a[_+0],g.y=a[_+1],g.z=a[_+2],g.normalize().multiplyScalar(v),a[_+0]=g.x,a[_+1]=g.y,a[_+2]=g.z}function d(){const v=new Q;for(let g=0;g<a.length;g+=3){v.x=a[g+0],v.y=a[g+1],v.z=a[g+2];const _=h(v)/2/Math.PI+.5,E=u(v)/Math.PI+.5;r.push(_,1-E)}y(),f()}function f(){for(let v=0;v<r.length;v+=6){const g=r[v+0],_=r[v+2],E=r[v+4],S=Math.max(g,_,E),x=Math.min(g,_,E);S>.9&&x<.1&&(g<.2&&(r[v+0]+=1),_<.2&&(r[v+2]+=1),E<.2&&(r[v+4]+=1))}}function p(v){a.push(v.x,v.y,v.z)}function m(v,g){const _=v*3;g.x=t[_+0],g.y=t[_+1],g.z=t[_+2]}function y(){const v=new Q,g=new Q,_=new Q,E=new Q,S=new kt,x=new kt,O=new kt;for(let M=0,A=0;M<a.length;M+=9,A+=6){v.set(a[M+0],a[M+1],a[M+2]),g.set(a[M+3],a[M+4],a[M+5]),_.set(a[M+6],a[M+7],a[M+8]),S.set(r[A+0],r[A+1]),x.set(r[A+2],r[A+3]),O.set(r[A+4],r[A+5]),E.copy(v).add(g).add(_).divideScalar(3);const k=h(E);T(S,A+0,v,k),T(x,A+2,g,k),T(O,A+4,_,k)}}function T(v,g,_,E){E<0&&v.x===1&&(r[g]=v.x-1),_.x===0&&_.z===0&&(r[g]=E/2/Math.PI+.5)}function h(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.vertices,t.indices,t.radius,t.details)}}class Oa extends Ss{constructor(t=1,i=0){const e=(1+Math.sqrt(5))/2,n=[-1,e,0,1,e,0,-1,-e,0,1,-e,0,0,-1,e,0,1,e,0,-1,-e,0,1,-e,e,0,-1,e,0,1,-e,0,-1,-e,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Oa(t.radius,t.detail)}}class Na extends Ss{constructor(t=1,i=0){const e=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(e,n,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Na(t.radius,t.detail)}}class rn extends Je{constructor(t=1,i=32,e=16,n=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:e,phiStart:n,phiLength:a,thetaStart:r,thetaLength:o},i=Math.max(3,Math.floor(i)),e=Math.max(2,Math.floor(e));const l=Math.min(r+o,Math.PI);let c=0;const d=[],f=new Q,p=new Q,m=[],y=[],T=[],h=[];for(let u=0;u<=e;u++){const v=[],g=u/e;let _=0;u===0&&r===0?_=.5/i:u===e&&l===Math.PI&&(_=-.5/i);for(let E=0;E<=i;E++){const S=E/i;f.x=-t*Math.cos(n+S*a)*Math.sin(r+g*o),f.y=t*Math.cos(r+g*o),f.z=t*Math.sin(n+S*a)*Math.sin(r+g*o),y.push(f.x,f.y,f.z),p.copy(f).normalize(),T.push(p.x,p.y,p.z),h.push(S+_,1-g),v.push(c++)}d.push(v)}for(let u=0;u<e;u++)for(let v=0;v<i;v++){const g=d[u][v+1],_=d[u][v],E=d[u+1][v],S=d[u+1][v+1];(u!==0||r>0)&&m.push(g,_,S),(u!==e-1||l<Math.PI)&&m.push(_,E,S)}this.setIndex(m),this.setAttribute("position",new Ae(y,3)),this.setAttribute("normal",new Ae(T,3)),this.setAttribute("uv",new Ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ee extends Nn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Jt(16777215),this.specular=new Jt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hl extends be{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const aa=new fe,pr=new Q,mr=new Q;class Jp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new La,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,e=this.matrix;pr.setFromMatrixPosition(t.matrixWorld),i.position.copy(pr),mr.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(mr),i.updateMatrixWorld(),aa.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aa),e.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),e.multiply(aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Qp extends Jp{constructor(){super(new il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gr extends hl{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Qp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vr extends hl{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class tm{constructor(t,i,e=0,n=1/0){this.ray=new wa(t,i),this.near=e,this.far=n,this.camera=null,this.layers=new Ra,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}intersectObject(t,i=!0,e=[]){return Ma(t,this,e,i),e.sort(yr),e}intersectObjects(t,i=!0,e=[]){for(let n=0,a=t.length;n<a;n++)Ma(t[n],this,e,i);return e.sort(yr),e}}function yr(s,t){return s.distance-t.distance}function Ma(s,t,i,e){if(s.layers.test(t.layers)&&s.raycast(t,i),e===!0){const n=s.children;for(let a=0,r=n.length;a<r;a++)Ma(n[a],t,i,!0)}}class _r{constructor(t=1,i=0,e=0){return this.radius=t,this.phi=i,this.theta=e,this}set(t,i,e){return this.radius=t,this.phi=i,this.theta=e,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,e){return this.radius=Math.sqrt(t*t+i*i+e*e),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,e),this.phi=Math.acos(we(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xa);const Tr={type:"change"},oa={type:"start"},Er={type:"end"},os=new wa,Mr=new pi,em=Math.cos(70*Vc.DEG2RAD);class im extends Ui{constructor(t,i){super(),this.object=t,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:Bi.ROTATE,TWO:Bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",gt),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",gt),this._domElementKeyEvents=null},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(Tr),e.update(),a=n.NONE},this.update=function(){const L=new Q,yt=new Ni().setFromUnitVectors(t.up,new Q(0,1,0)),Ot=yt.clone().invert(),pt=new Q,dt=new Ni,z=new Q,Et=2*Math.PI;return function(Ut=null){const Ft=e.object.position;L.copy(Ft).sub(e.target),L.applyQuaternion(yt),o.setFromVector3(L),e.autoRotate&&a===n.NONE&&U(A(Ut)),e.enableDamping?(o.theta+=l.theta*e.dampingFactor,o.phi+=l.phi*e.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let jt=e.minAzimuthAngle,Vt=e.maxAzimuthAngle;isFinite(jt)&&isFinite(Vt)&&(jt<-Math.PI?jt+=Et:jt>Math.PI&&(jt-=Et),Vt<-Math.PI?Vt+=Et:Vt>Math.PI&&(Vt-=Et),jt<=Vt?o.theta=Math.max(jt,Math.min(Vt,o.theta)):o.theta=o.theta>(jt+Vt)/2?Math.max(jt,o.theta):Math.min(Vt,o.theta)),o.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,o.phi)),o.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(d,e.dampingFactor):e.target.add(d),e.target.sub(e.cursor),e.target.clampLength(e.minTargetRadius,e.maxTargetRadius),e.target.add(e.cursor),e.zoomToCursor&&S||e.object.isOrthographicCamera?o.radius=it(o.radius):o.radius=it(o.radius*c),L.setFromSpherical(o),L.applyQuaternion(Ot),Ft.copy(e.target).add(L),e.object.lookAt(e.target),e.enableDamping===!0?(l.theta*=1-e.dampingFactor,l.phi*=1-e.dampingFactor,d.multiplyScalar(1-e.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let se=!1;if(e.zoomToCursor&&S){let ae=null;if(e.object.isPerspectiveCamera){const Zt=L.length();ae=it(Zt*c);const re=Zt-ae;e.object.position.addScaledVector(_,re),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const Zt=new Q(E.x,E.y,0);Zt.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/c)),e.object.updateProjectionMatrix(),se=!0;const re=new Q(E.x,E.y,0);re.unproject(e.object),e.object.position.sub(re).add(Zt),e.object.updateMatrixWorld(),ae=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;ae!==null&&(this.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(ae).add(e.object.position):(os.origin.copy(e.object.position),os.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(os.direction))<em?t.lookAt(e.target):(Mr.setFromNormalAndCoplanarPoint(e.object.up,e.target),os.intersectPlane(Mr,e.target))))}else e.object.isOrthographicCamera&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/c)),e.object.updateProjectionMatrix(),se=!0);return c=1,S=!1,se||pt.distanceToSquared(e.object.position)>r||8*(1-dt.dot(e.object.quaternion))>r||z.distanceToSquared(e.target)>0?(e.dispatchEvent(Tr),pt.copy(e.object.position),dt.copy(e.object.quaternion),z.copy(e.target),!0):!1}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",wt),e.domElement.removeEventListener("pointerdown",P),e.domElement.removeEventListener("pointercancel",J),e.domElement.removeEventListener("wheel",ft),e.domElement.removeEventListener("pointermove",b),e.domElement.removeEventListener("pointerup",J),e._domElementKeyEvents!==null&&(e._domElementKeyEvents.removeEventListener("keydown",gt),e._domElementKeyEvents=null)};const e=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=n.NONE;const r=1e-6,o=new _r,l=new _r;let c=1;const d=new Q,f=new kt,p=new kt,m=new kt,y=new kt,T=new kt,h=new kt,u=new kt,v=new kt,g=new kt,_=new Q,E=new kt;let S=!1;const x=[],O={};let M=!1;function A(L){return L!==null?2*Math.PI/60*e.autoRotateSpeed*L:2*Math.PI/60/60*e.autoRotateSpeed}function k(L){const yt=Math.abs(L*.01);return Math.pow(.95,e.zoomSpeed*yt)}function U(L){l.theta-=L}function X(L){l.phi-=L}const I=function(){const L=new Q;return function(Ot,pt){L.setFromMatrixColumn(pt,0),L.multiplyScalar(-Ot),d.add(L)}}(),B=function(){const L=new Q;return function(Ot,pt){e.screenSpacePanning===!0?L.setFromMatrixColumn(pt,1):(L.setFromMatrixColumn(pt,0),L.crossVectors(e.object.up,L)),L.multiplyScalar(Ot),d.add(L)}}(),Y=function(){const L=new Q;return function(Ot,pt){const dt=e.domElement;if(e.object.isPerspectiveCamera){const z=e.object.position;L.copy(z).sub(e.target);let Et=L.length();Et*=Math.tan(e.object.fov/2*Math.PI/180),I(2*Ot*Et/dt.clientHeight,e.object.matrix),B(2*pt*Et/dt.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(I(Ot*(e.object.right-e.object.left)/e.object.zoom/dt.clientWidth,e.object.matrix),B(pt*(e.object.top-e.object.bottom)/e.object.zoom/dt.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function $(L){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function H(L){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function Z(L,yt){if(!e.zoomToCursor)return;S=!0;const Ot=e.domElement.getBoundingClientRect(),pt=L-Ot.left,dt=yt-Ot.top,z=Ot.width,Et=Ot.height;E.x=pt/z*2-1,E.y=-(dt/Et)*2+1,_.set(E.x,E.y,1).unproject(e.object).sub(e.object.position).normalize()}function it(L){return Math.max(e.minDistance,Math.min(e.maxDistance,L))}function j(L){f.set(L.clientX,L.clientY)}function V(L){Z(L.clientX,L.clientX),u.set(L.clientX,L.clientY)}function F(L){y.set(L.clientX,L.clientY)}function K(L){p.set(L.clientX,L.clientY),m.subVectors(p,f).multiplyScalar(e.rotateSpeed);const yt=e.domElement;U(2*Math.PI*m.x/yt.clientHeight),X(2*Math.PI*m.y/yt.clientHeight),f.copy(p),e.update()}function nt(L){v.set(L.clientX,L.clientY),g.subVectors(v,u),g.y>0?$(k(g.y)):g.y<0&&H(k(g.y)),u.copy(v),e.update()}function _t(L){T.set(L.clientX,L.clientY),h.subVectors(T,y).multiplyScalar(e.panSpeed),Y(h.x,h.y),y.copy(T),e.update()}function St(L){Z(L.clientX,L.clientY),L.deltaY<0?H(k(L.deltaY)):L.deltaY>0&&$(k(L.deltaY)),e.update()}function Nt(L){let yt=!1;switch(L.code){case e.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?X(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):Y(0,e.keyPanSpeed),yt=!0;break;case e.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?X(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):Y(0,-e.keyPanSpeed),yt=!0;break;case e.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?U(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):Y(e.keyPanSpeed,0),yt=!0;break;case e.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?U(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):Y(-e.keyPanSpeed,0),yt=!0;break}yt&&(L.preventDefault(),e.update())}function Rt(L){if(x.length===1)f.set(L.pageX,L.pageY);else{const yt=xt(L),Ot=.5*(L.pageX+yt.x),pt=.5*(L.pageY+yt.y);f.set(Ot,pt)}}function R(L){if(x.length===1)y.set(L.pageX,L.pageY);else{const yt=xt(L),Ot=.5*(L.pageX+yt.x),pt=.5*(L.pageY+yt.y);y.set(Ot,pt)}}function N(L){const yt=xt(L),Ot=L.pageX-yt.x,pt=L.pageY-yt.y,dt=Math.sqrt(Ot*Ot+pt*pt);u.set(0,dt)}function C(L){e.enableZoom&&N(L),e.enablePan&&R(L)}function q(L){e.enableZoom&&N(L),e.enableRotate&&Rt(L)}function G(L){if(x.length==1)p.set(L.pageX,L.pageY);else{const Ot=xt(L),pt=.5*(L.pageX+Ot.x),dt=.5*(L.pageY+Ot.y);p.set(pt,dt)}m.subVectors(p,f).multiplyScalar(e.rotateSpeed);const yt=e.domElement;U(2*Math.PI*m.x/yt.clientHeight),X(2*Math.PI*m.y/yt.clientHeight),f.copy(p)}function st(L){if(x.length===1)T.set(L.pageX,L.pageY);else{const yt=xt(L),Ot=.5*(L.pageX+yt.x),pt=.5*(L.pageY+yt.y);T.set(Ot,pt)}h.subVectors(T,y).multiplyScalar(e.panSpeed),Y(h.x,h.y),y.copy(T)}function tt(L){const yt=xt(L),Ot=L.pageX-yt.x,pt=L.pageY-yt.y,dt=Math.sqrt(Ot*Ot+pt*pt);v.set(0,dt),g.set(0,Math.pow(v.y/u.y,e.zoomSpeed)),$(g.y),u.copy(v);const z=(L.pageX+yt.x)*.5,Et=(L.pageY+yt.y)*.5;Z(z,Et)}function vt(L){e.enableZoom&&tt(L),e.enablePan&&st(L)}function ut(L){e.enableZoom&&tt(L),e.enableRotate&&G(L)}function P(L){e.enabled!==!1&&(x.length===0&&(e.domElement.setPointerCapture(L.pointerId),e.domElement.addEventListener("pointermove",b),e.domElement.addEventListener("pointerup",J)),Pt(L),L.pointerType==="touch"?At(L):lt(L))}function b(L){e.enabled!==!1&&(L.pointerType==="touch"?rt(L):ht(L))}function J(L){It(L),x.length===0&&(e.domElement.releasePointerCapture(L.pointerId),e.domElement.removeEventListener("pointermove",b),e.domElement.removeEventListener("pointerup",J)),e.dispatchEvent(Er),a=n.NONE}function lt(L){let yt;switch(L.button){case 0:yt=e.mouseButtons.LEFT;break;case 1:yt=e.mouseButtons.MIDDLE;break;case 2:yt=e.mouseButtons.RIGHT;break;default:yt=-1}switch(yt){case Gi.DOLLY:if(e.enableZoom===!1)return;V(L),a=n.DOLLY;break;case Gi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(e.enablePan===!1)return;F(L),a=n.PAN}else{if(e.enableRotate===!1)return;j(L),a=n.ROTATE}break;case Gi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(e.enableRotate===!1)return;j(L),a=n.ROTATE}else{if(e.enablePan===!1)return;F(L),a=n.PAN}break;default:a=n.NONE}a!==n.NONE&&e.dispatchEvent(oa)}function ht(L){switch(a){case n.ROTATE:if(e.enableRotate===!1)return;K(L);break;case n.DOLLY:if(e.enableZoom===!1)return;nt(L);break;case n.PAN:if(e.enablePan===!1)return;_t(L);break}}function ft(L){e.enabled===!1||e.enableZoom===!1||a!==n.NONE||(L.preventDefault(),e.dispatchEvent(oa),St(Mt(L)),e.dispatchEvent(Er))}function Mt(L){const yt=L.deltaMode,Ot={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(yt){case 1:Ot.deltaY*=16;break;case 2:Ot.deltaY*=100;break}return L.ctrlKey&&!M&&(Ot.deltaY*=10),Ot}function mt(L){L.key==="Control"&&(M=!0,document.addEventListener("keyup",Tt,{passive:!0,capture:!0}))}function Tt(L){L.key==="Control"&&(M=!1,document.removeEventListener("keyup",Tt,{passive:!0,capture:!0}))}function gt(L){e.enabled===!1||e.enablePan===!1||Nt(L)}function At(L){switch(bt(L),x.length){case 1:switch(e.touches.ONE){case Bi.ROTATE:if(e.enableRotate===!1)return;Rt(L),a=n.TOUCH_ROTATE;break;case Bi.PAN:if(e.enablePan===!1)return;R(L),a=n.TOUCH_PAN;break;default:a=n.NONE}break;case 2:switch(e.touches.TWO){case Bi.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;C(L),a=n.TOUCH_DOLLY_PAN;break;case Bi.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;q(L),a=n.TOUCH_DOLLY_ROTATE;break;default:a=n.NONE}break;default:a=n.NONE}a!==n.NONE&&e.dispatchEvent(oa)}function rt(L){switch(bt(L),a){case n.TOUCH_ROTATE:if(e.enableRotate===!1)return;G(L),e.update();break;case n.TOUCH_PAN:if(e.enablePan===!1)return;st(L),e.update();break;case n.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;vt(L),e.update();break;case n.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;ut(L),e.update();break;default:a=n.NONE}}function wt(L){e.enabled!==!1&&L.preventDefault()}function Pt(L){x.push(L.pointerId)}function It(L){delete O[L.pointerId];for(let yt=0;yt<x.length;yt++)if(x[yt]==L.pointerId){x.splice(yt,1);return}}function bt(L){let yt=O[L.pointerId];yt===void 0&&(yt=new kt,O[L.pointerId]=yt),yt.set(L.pageX,L.pageY)}function xt(L){const yt=L.pointerId===x[0]?x[1]:x[0];return O[yt]}e.domElement.addEventListener("contextmenu",wt),e.domElement.addEventListener("pointerdown",P),e.domElement.addEventListener("pointercancel",J),e.domElement.addEventListener("wheel",ft,{passive:!1}),document.addEventListener("keydown",mt,{passive:!0,capture:!0}),this.update()}}const W={SEED:null,MAZE_DEGREE:4,MIN_MAZE_DEGREE:4,MAX_MAZE_DEGREE:16,BRANCHING_FACTOR:.1,BRAID_FACTOR:.1,SHADOW_SIZE_FACTOR:.075,TELEPORT_MAP_OPACITY:.25,PLAYER_COLLISION_RADIUS:.275,PLAYER_COLLISION_OFFSET_X:0,PLAYER_COLLISION_OFFSET_Y:-.125,PLAYER_START_X:.5,PLAYER_START_Y:1.7,PLAYER_SHADOW_OFFSET_X:-.28,PLAYER_SHADOW_OFFSET_Y:-.15,PLAYER_SHADOW_WIDTH_FACTOR:.45,PLAYER_SHADOW_HEIGHT_FACTOR:.25,SHOW_COLLISION_DEBUG:!1,MOVE_SPEED_FACTOR:2,HUNTER_SPEED:500,VORTEX_SPEED_NORMAL:1.5,VORTEX_SPEED_FAST:6,JELLY_PORTAL_COUNT:0,JELLY_STATUE_CHARGE_TIME:1.5,JELLY_STATUE_MAX_SHOTS:3,JELLY_PROJECTILE_SPEED:5,JELLY_CHALLENGE_MIN_FREE_CELLS:3,MAZE_VERTICAL_BIAS:.15,getHunterCount(s){return s>=16?4:s>=12?3:s>=8?2:1},getKeyCount(s){return this.getHunterCount(s)*2},getTeleportCount(s){if(s<8)return Math.ceil(s/2);const t=s-8;return Math.floor(.125*t*t+1.5*t+4)},getPathfinderCount(s){return s>=11?Math.floor(9+(s-11)*1.4):this.getTeleportCount(s)},COLORS:{WALL:"#444",PATH_KNOWN:"#88ccff",PATH_VISITED:"#888",NEON_UP:"#00ffff",NEON_DOWN:"#ff00ff",NEON_UP_UNUSED:"#006666",NEON_DOWN_UNUSED:"#660066",START:"#ff0",EXIT:"#0f0",PLAYER:"#f00",PLAYER_OUTLINE:"#ffffff",HUNTER:"#a0f",TELEPORT:"#ff8c00",TELEPORT_INACTIVE:"#555555",REVEALED_PATH:"#ffffff",JELLY_PORTAL:"#a020f0",JELLY_MUTATION:"#ff5500",THREE_HUNTER:11141375,THREE_START:16776960,THREE_EXIT:65280,THREE_VISITED:4473924,THREE_KNOWN:2046546,THREE_ELEVATOR_UP:65535,THREE_ELEVATOR_DOWN:16711935,THREE_ELEVATOR_UP_UNUSED:26214,THREE_ELEVATOR_DOWN_UNUSED:6684774,THREE_TELEPORT:16747520,THREE_KEY:16766720,THREE_JELLY_PORTAL:10494192,THREE_JELLY_PROJECTILE:16724787}},Sa={en:{gameTitle:"VOID ESCAPE",gameCredits:"a game by Bernard Rodrigues",activeHunters:"Active Hunters",activeTeleports:"Active Teleports",activeKeys:"Active Keys",availablePathfinders:"Available Pathfinders",mazeDegree:"Maze Degree",safeMode:"Safe Mode",generateMaze:"NEW GAME",continue:"CONTINUE",tutorialsMenu:"TUTORIALS",tutorialsTitle:"TUTORIALS",back:"BACK",tutorialSuccess:"Success!",nextTutorial:"Next Tutorial",tutKeysTitle:"Key Collection",tutHuntersTitle:"Hunters",start:"START",cancel:"CANCEL",confirm:"CONFIRM",pathfinderConfirmTitle:"Use Pathfinder?",pathfinderConfirmDesc:"This will consume 1 Pathfinder charge to reveal the shortest route.",degreeHint:"Controls the grid size. Higher values create larger, more complex mazes.",safeModeHint:"When active, no hunters will spawn in the maze.",storyMsg1:"The mystical church of chaos worship!",storyMsg2:"The greatest monument to chaos worship.",storyMsg3:"I am a priestess of the word of the Jelly god.",storyMsg4:"But their word is a lie! The chaos is a lie!",storyMsg5:"So I was condemned to exile...",storyMsg6:"Condemned to the void...",hudKeys:"KEYS",hudPathfinders:"PATHFINDERS",hudFloor:"Floor",hudVisited:"Visited",proximityDetector:"PROXIMITY DETECTOR",mapLegendTitle:"MAP LEGEND",legendVisited:"Visited Path",legendKnown:"Known Path",legendStart:"Starting Point",legendExit:"Maze Exit",legendHunter:"Void Hunter",legendTeleport:"Teleport",legendElevator:"Elevator",controlsHintTitle:"CONTROLS HINT",actionMove:"Move / Rotate",actionElevator:"Elevator Up / Down",actionMap:"3D Holographic Map",actionZoom:"Zoom Minimap",msgVoidHuntersDetected:"Void Hunters Detected",msgKeySecured:"Key secured ({collected}/{total})",msgExitUnlocked:"Exit unlocked",msgKeysRemaining:"{count} key(s) remaining",msgNoOtherActiveTeleport:"No other active teleports",msgExitFound:"Exit found",msgNoPathfindersRemaining:"No pathfinders remaining",msgExitNotFoundYet:"Exit not found yet",msgSafePointTeleport:"Safe point... Teleport?",msgOopsNoisyShit:"Oops... noisy sh*t!",msgWhereAmI:"Where am I?",msgElevatorUp:"Up?",msgElevatorDown:"Down?",msgWhichWay:"Which way?",msgDidYouHearThat:"Did you hear that?",msgIWasDetected:"Damn! I was detected.",msgFoundPathfinder:"Found a pathfinder!",msgWorldSaved:"World saved. What now?",msgKeyDropped:"Oh! Just dropped a key...",msgPlayerRespawn:"Ok.. ok.. guess I'm alive..",msgLockedIn:"I'm locked in!",msgFloorComplete:"Floor complete!",statusLabel:"HUNTER STATUS:",statusScanning:"SCANNING",statusActive:"ACTIVE",statusSleeping:"SLEEPING",statusTracking:"TRACKING MODE",statusConverging:"HUNTERS CONVERGING ({ticks} Ticks)",pauseTitle:"PAUSED",resume:"RESUME",victoryTitle:"Mission Accomplished",victoryText:"You have successfully navigated the 3D void.",victoryCompletion:"MAP COMPLETION: {percent}%",mapCompletion:"MAP COMPLETION",victoryDeaths:"DEATHS",victoryDegree:"MAZE DEGREE",victoryTime:"COMPLETION TIME",playAgain:"PLAY AGAIN",mainMenu:"MAIN MENU",gameOverTitle:"Terminated",gameOverText:"You were caught by the void hunters.",saving:"SAVING...",generatingMaze:"GENERATING MAZE...",hudMana:"Mana",victoryMana:"MANA COLLECTED",msgManaSecured:"Mana secured ({collected}/{total})",teleportAnomaly:"TELEPORT ANOMALY",ticks:"TICKS",map3dInstructions:"Drag to rotate | Scroll to zoom | M to return",teleportWarning:"TELEPORT",map:"MAP",teleport:"TELEPORT",teleportationLink:"TELEPORTATION LINK",teleportJumpSector:"Jump to Sector {floor}F?",teleportTargetGrid:"Target Grid: ({x}, {y})",teleportGo:"GO",teleportCancel:"CANCEL",actionJellyPortal:"Jelly God Portal",msgJellyPortalEarned:"I got a little power!",msgJellyPortalNotHere:"I can't do this here...",msgJellyPortalActivated:"Portal of the Jelly God!",msgJellyPortalNoPortalCount:"I need mana...",msgJellyPortalNotSafe:"Not safe, but teleport-able...",msgHunterReturned:"These things... they resurrect..."},ptBr:{gameTitle:"VOID ESCAPE",gameCredits:"um jogo de Bernard Rodrigues",activeHunters:"Caçadores Ativos",activeTeleports:"Teleportes Ativos",activeKeys:"Chaves Ativas",availablePathfinders:"Localizadores Disponíveis",mazeDegree:"Grau do Labirinto",safeMode:"Modo Seguro",generateMaze:"NOVO JOGO",continue:"CONTINUAR",tutorialsMenu:"TUTORIAIS",tutorialsTitle:"TUTORIAIS",back:"VOLTAR",tutorialSuccess:"Sucesso!",nextTutorial:"Próximo Tutorial",tutKeysTitle:"Coleta de Chaves",tutHuntersTitle:"Caçadores",start:"INICIAR",cancel:"CANCELAR",confirm:"CONFIRMAR",pathfinderConfirmTitle:"Usar Localizador?",pathfinderConfirmDesc:"Isso consumirá 1 carga de Localizador para revelar a rota mais curta.",degreeHint:"Controla o tamanho da grade. Valores maiores criam labirintos maiores e mais complexos.",safeModeHint:"Quando ativo, nenhum caçador surgirá no labirinto.",storyMsg1:"A igreja mística do culto ao caos!",storyMsg2:"O maior monumento ao culto do caos.",storyMsg3:"Sou uma sacerdotisa da palavra do deus Geleia.",storyMsg4:"Mas sua palavra é uma mentira! O caos é uma mentira!",storyMsg5:"Então fui condenada ao exílio...",storyMsg6:"Condenada ao vazio...",hudKeys:"CHAVES",hudPathfinders:"LOCALIZADORES",hudFloor:"Andar",hudVisited:"Visitado",proximityDetector:"DETECTOR DE PROXIMIDADE",mapLegendTitle:"LEGENDA DO MAPA",legendVisited:"Caminho Visitado",legendKnown:"Caminho Conhecido",legendStart:"Ponto de Partida",legendExit:"Saída do Labirinto",legendHunter:"Caçador do Vazio",legendTeleport:"Teleporte",legendElevator:"Elevador",controlsHintTitle:"DICA DE CONTROLES",actionMove:"Mover / Girar",actionElevator:"Elevador Subir / Descer",actionMap:"Mapa Holográfico 3D",actionZoom:"Zoom do Minimapa",msgVoidHuntersDetected:"Caçadores do Vazio Detectados",msgKeySecured:"Chave obtida ({collected}/{total})",msgExitUnlocked:"Saída destrancada",msgKeysRemaining:"{count} chave(s) restante(s)",msgNoOtherActiveTeleport:"Nenhum outro teleporte ativo",msgExitFound:"Saída encontrada",msgNoPathfindersRemaining:"Nenhum localizador restante",msgExitNotFoundYet:"Saída ainda não encontrada",msgSafePointTeleport:"Ponto seguro... Teleportar?",msgOopsNoisyShit:"Ops... troço barulhento!",msgWhereAmI:"Onde estou?",msgElevatorUp:"Subir?",msgElevatorDown:"Descer?",msgWhichWay:"Que direção?",msgDidYouHearThat:"Ouviu alguma coisa?",msgIWasDetected:"Droga! Fui detectada.",msgFoundPathfinder:"Localizador encontrado!",msgWorldSaved:"Salvei o mundo. E agora?",msgKeyDropped:"Ih... Derrubei uma chave...",msgPlayerRespawn:"Ok.. ok.. sobrevivi..",msgLockedIn:"Estou trancada!",msgFloorComplete:"Andar completo!",statusLabel:"STATUS DO CAÇADOR:",statusScanning:"ESCANEANDO",statusActive:"ATIVO",statusSleeping:"DORMINDO",statusTracking:"MODO DE RASTREAMENTO",statusConverging:"CAÇADORES CONVERGINDO ({ticks} Ticks)",pauseTitle:"PAUSA",resume:"RETOMAR",victoryTitle:"Missão Cumprida",victoryText:"Você atravessou o vazio 3D com sucesso.",victoryCompletion:"MAPA COMPLETO: {percent}%",mapCompletion:"MAPA COMPLETO",victoryDeaths:"MORTES",victoryDegree:"GRAU DO LABIRINTO",victoryTime:"TEMPO DE CONCLUSÃO",playAgain:"JOGAR NOVAMENTE",mainMenu:"MENU PRINCIPAL",gameOverTitle:"Eliminado",gameOverText:"Você foi pego pelos caçadores do vazio.",saving:"SALVANDO...",generatingMaze:"GERANDO LABIRINTO...",hudMana:"Mana",victoryMana:"MANA COLETADA",msgManaSecured:"Mana absorvida ({collected}/{total})",teleportAnomaly:"ANOMALIA DE TELEPORTE",ticks:"TICKS",map3dInstructions:"Arraste para girar | Role para zoom | M para voltar",teleportWarning:"TELEPORTE",map:"MAPA",teleport:"TELEPORTE",teleportationLink:"LINK DE TELEPORTE",teleportJumpSector:"Pular para o Setor {floor}F?",teleportTargetGrid:"Coordenada Alvo: ({x}, {y})",teleportGo:"IR",teleportCancel:"CANCELAR",actionJellyPortal:"Portal do Deus Geléia",msgJellyPortalEarned:"Ganhei um poderzinho!",msgJellyPortalNotHere:"Aqui eu não posso...",msgJellyPortalActivated:"Portal do Deus Geléia!",msgJellyPortalNoPortalCount:"Preciso de mana...",msgJellyPortalNotSafe:"Não seguro, mas teleportável...",msgHunterReturned:"Essas coisas ressuscitam..."},ja:{gameTitle:"ヴォイド・エスケープ",gameCredits:"ベルナルド・ホドリゲス制作",activeHunters:"アクティブなハンター",activeTeleports:"アクティブなテレポート",activeKeys:"アクティブな鍵",availablePathfinders:"使用可能なパスファインダー",mazeDegree:"迷路の難易度",safeMode:"セーフモード",generateMaze:"ニューゲーム",continue:"つづきから",tutorialsMenu:"チュートリアル",tutorialsTitle:"チュートリアル",back:"戻る",tutorialSuccess:"成功！",nextTutorial:"次のチュートリアル",tutKeysTitle:"鍵の収集",tutHuntersTitle:"ハンター",start:"スタート",cancel:"キャンセル",confirm:"確認",pathfinderConfirmTitle:"パスファインダーを使用しますか？",pathfinderConfirmDesc:"最短ルートを表示するためにパスファインダーを1チャージ消費します。",degreeHint:"グリッドのサイズを調整します。値が大きいほど、より広く複雑な迷路になります。",safeModeHint:"有効にすると、迷路にハンターが出現しなくなります。",storyMsg1:"混沌崇拝の神秘的な教会!",storyMsg2:"混沌崇拝の最大の記念碑。",storyMsg3:"私はゼリー神の言葉に仕える巫女よ。",storyMsg4:"でも彼らの言葉は嘘!混沌なんて嘘っぱちなんだから!",storyMsg5:"だから追放の刑に処されたの…",storyMsg6:"虚空へと追放されて…",hudKeys:"鍵",hudPathfinders:"パスファインダー",hudFloor:"階層",hudVisited:"訪問済み",proximityDetector:"近接探知機",mapLegendTitle:"マップ凡例",legendVisited:"訪問済みの道",legendKnown:"既知の道",legendStart:"スタート地点",legendExit:"迷路の出口",legendHunter:"虚空のハンター",legendTeleport:"テレポート",legendElevator:"エレベーター",controlsHintTitle:"操作方法",actionMove:"移動 / 回転",actionElevator:"エレベーター 上昇 / 下降",actionMap:"3Dホログラフィックマップ",actionZoom:"ミニマップのズーム",msgVoidHuntersDetected:"虚空のハンターを検知",msgKeySecured:"鍵を入手 ({collected}/{total})",msgExitUnlocked:"出口の鍵が開いた",msgKeysRemaining:"残り{count}個の鍵",msgNoOtherActiveTeleport:"他に有効なテレポートはない",msgExitFound:"出口を発見",msgNoPathfindersRemaining:"パスファインダーが残っていない",msgExitNotFoundYet:"出口はまだ見つかっていない",msgSafePointTeleport:"安全地帯…テレポートする?",msgOopsNoisyShit:"あら…うるさいったらないわね!",msgWhereAmI:"ここどこ?",msgElevatorUp:"上る?",msgElevatorDown:"下る?",msgWhichWay:"どっちの道?",msgDidYouHearThat:"今の聞こえた?",msgIWasDetected:"しまった、見つかっちゃった!",msgFoundPathfinder:"パスファインダー発見!",msgWorldSaved:"世界を救っちゃった。さて、次は?",msgKeyDropped:"あ、鍵落としちゃった…",msgPlayerRespawn:"よしよし…どうやらまだ生きてるな…",msgLockedIn:"閉じ込められちゃった！",msgFloorComplete:"フロア完了！",statusLabel:"ハンターの状態:",statusScanning:"スキャン中",statusActive:"アクティブ",statusSleeping:"スリープ中",statusTracking:"追跡モード",statusConverging:"ハンターが接近中 ({ticks} ティック)",pauseTitle:"一時停止",resume:"再開",victoryTitle:"任務完了",victoryText:"3Dの虚空を無事に踏破した。",victoryCompletion:"マップ達成度: {percent}%",mapCompletion:"マップ達成度",victoryDeaths:"死亡数",victoryDegree:"迷路の次数",victoryTime:"クリア時間",playAgain:"もう一度プレイ",mainMenu:"メインメニュー",gameOverTitle:"終了",gameOverText:"虚空のハンターに捕まってしまった。",saving:"セーブ中…",generatingMaze:"迷路生成中...",hudMana:"マナ",victoryMana:"マナ回収量",msgManaSecured:"マナを獲得しました ({collected}/{total})",teleportAnomaly:"テレポート異常",ticks:"ティック",map3dInstructions:"ドラッグで回転 | スクロールでズーム | Mキーで戻る",teleportWarning:"テレポート",map:"マップ",teleport:"テレポート",teleportationLink:"テレポートリンク",teleportJumpSector:"{floor}階のセクターへ移動する?",teleportTargetGrid:"目標座標: ({x}, {y})",teleportGo:"移動",teleportCancel:"キャンセル",actionJellyPortal:"ゼリー神のポータル",msgJellyPortalEarned:"ちょっとした力を手に入れた！",msgJellyPortalNotHere:"ここでは使えないわ...",msgJellyPortalActivated:"ゼリー神のポータル！",msgJellyPortalNoPortalCount:"マナが必要よ...",msgJellyPortalNotSafe:"安全ではないけれど、テレポートはできるわ...",msgHunterReturned:"あいつら、蘇るの…？"},es:{gameTitle:"ESCAPE DEL VACÍO",gameCredits:"un juego de Bernard Rodrigues",activeHunters:"Cazadores Activos",activeTeleports:"Teletransportes Activos",activeKeys:"Llaves Activas",availablePathfinders:"Localizadores Disponibles",mazeDegree:"Grado del Laberinto",safeMode:"Modo Seguro",generateMaze:"NUEVA PARTIDA",continue:"CONTINUAR",tutorialsMenu:"TUTORIALES",tutorialsTitle:"TUTORIALES",back:"VOLVER",tutorialSuccess:"¡Éxito!",nextTutorial:"Siguiente Tutorial",tutKeysTitle:"Recolección de Llaves",tutHuntersTitle:"Cazadores",start:"INICIAR",cancel:"CANCELAR",confirm:"CONFIRMAR",pathfinderConfirmTitle:"¿Usar localizador?",pathfinderConfirmDesc:"Esto consumirá 1 carga de localizador para revelar la ruta más corta.",degreeHint:"Controla el tamaño de la cuadrícula. Valores más altos crean laberintos más grandes y complejos.",safeModeHint:"Cuando está activo, no aparecerán cazadores en el laberinto.",storyMsg1:"¡La mística iglesia del culto al caos!",storyMsg2:"El mayor monumento al culto del caos.",storyMsg3:"Soy una sacerdotisa de la palabra del dios Gelatina.",storyMsg4:"¡Pero su palabra es una mentira! ¡El caos es mentira!",storyMsg5:"Así que fui condenada al exilio...",storyMsg6:"Condenada al vacío...",hudKeys:"LLAVES",hudPathfinders:"LOCALIZADORES",hudFloor:"Piso",hudVisited:"Visitado",proximityDetector:"DETECTOR DE PROXIMIDAD",mapLegendTitle:"LEYENDA DEL MAPA",legendVisited:"Camino Visitado",legendKnown:"Camino Conocido",legendStart:"Punto de Partida",legendExit:"Salida del Laberinto",legendHunter:"Cazador del Vacío",legendTeleport:"Teletransporte",legendElevator:"Ascensor",controlsHintTitle:"AYUDA DE CONTROLES",actionMove:"Mover / Girar",actionElevator:"Ascensor Subir / Bajar",actionMap:"Mapa Holográfico 3D",actionZoom:"Zoom del Minimapa",msgVoidHuntersDetected:"Cazadores del Vacío Detectados",msgKeySecured:"Llave obtenida ({collected}/{total})",msgExitUnlocked:"Salida desbloqueada",msgKeysRemaining:"{count} llave(s) restante(s)",msgNoOtherActiveTeleport:"No hay otros teletransportes activos",msgExitFound:"Salida encontrada",msgNoPathfindersRemaining:"No quedan localizadores",msgExitNotFoundYet:"Salida aún no encontrada",msgSafePointTeleport:"Punto seguro... ¿Teletransportarse?",msgOopsNoisyShit:"Ups... ¡qué cosa tan ruidosa!",msgWhereAmI:"¿Dónde estoy?",msgElevatorUp:"¿Subir?",msgElevatorDown:"¿Bajar?",msgWhichWay:"¿Por dónde?",msgDidYouHearThat:"¿Escuchaste eso?",msgIWasDetected:"¡Rayos! Fui detectada.",msgFoundPathfinder:"¡Localizador encontrado!",msgWorldSaved:"Salvé el mundo. ¿Y ahora qué?",msgKeyDropped:"¡Ah! Se me cayó una llave...",msgPlayerRespawn:"Vale.. vale.. parece que sigo viva..",msgLockedIn:"¡Estoy encerrada!",msgFloorComplete:"¡Piso completado!",statusLabel:"ESTADO DEL CAZADOR:",statusScanning:"ESCANEANDO",statusActive:"ACTIVO",statusSleeping:"DURMIENDO",statusTracking:"MODO DE RASTREO",statusConverging:"CAZADORES CONVERGIENDO ({ticks} Ticks)",pauseTitle:"PAUSA",resume:"REANUDAR",victoryTitle:"Misión Cumplida",victoryText:"Atravesaste el vacío 3D con éxito.",victoryCompletion:"MAPA COMPLETADO: {percent}%",mapCompletion:"MAPA COMPLETADO",victoryDeaths:"MUERTES",victoryDegree:"GRADO DEL LABERINTO",victoryTime:"TIEMPO DE FINALIZACIÓN",playAgain:"JUGAR DE NUEVO",mainMenu:"MENÚ PRINCIPAL",gameOverTitle:"Eliminada",gameOverText:"Fuiste atrapada por los cazadores del vacío.",saving:"GUARDANDO...",generatingMaze:"GENERANDO LABIRINTO...",hudMana:"Maná",victoryMana:"MANÁ RECOLECTADA",msgManaSecured:"Maná asegurado ({collected}/{total})",teleportAnomaly:"ANOMALÍA DE TELETRANSPORTE",ticks:"TICKS",map3dInstructions:"Arrastra para girar | Desplázate para zoom | M para volver",teleportWarning:"TELETRANSPORTE",map:"MAPA",teleport:"TELETRANSPORTE",teleportationLink:"ENLACE DE TELETRANSPORTE",teleportJumpSector:"¿Saltar al Sector {floor}F?",teleportTargetGrid:"Coordenada Objetivo: ({x}, {y})",teleportGo:"IR",teleportCancel:"CANCELAR",actionJellyPortal:"Portal del Dios Gelatina",msgJellyPortalEarned:"¡Tengo un pequeno poder!",msgJellyPortalNotHere:"No puedo hacer esto aquí...",msgJellyPortalActivated:"¡Portal del Dios Gelatina!",msgJellyPortalNoPortalCount:"Necesito maná...",msgJellyPortalNotSafe:"No es seguro, pero se puede teletransportar...",msgHunterReturned:"Esas cosas resucitan..."}};let mn="en";function rs(s){Sa[s]?mn=s:mn="en"}function Sr(){return mn}function nm(){if(typeof navigator<"u"){const s=navigator.language||navigator.userLanguage;if(s){const t=s.toLowerCase();if(t.startsWith("pt")){rs("ptBr");return}if(t.startsWith("ja")){rs("ja");return}if(t.startsWith("es")){rs("es");return}}}rs("en")}nm();function Dt(s,t={},i=mn){var n,a;let e=((n=Sa[i])==null?void 0:n[s])||((a=Sa.en)==null?void 0:a[s])||s;return Object.keys(t).forEach(r=>{e=e.replace(`{${r}}`,t[r])}),e}function xn(s=mn){typeof document<"u"&&document.querySelectorAll("[data-i18n]").forEach(i=>{const e=i.getAttribute("data-i18n");if(e){const n=Dt(e,{},s);n!==e&&(i instanceof HTMLInputElement&&i.type==="button"?i.value=n:i.textContent=n)}})}class dl{constructor(){D(this,"_data");this._data=[]}get size(){return this._data.length}push(t){this._data.push(t),this._bubbleUp(this._data.length-1)}pop(){const t=this._data[0],i=this._data.pop();return this._data.length>0&&i!==void 0&&(this._data[0]=i,this._siftDown(0)),t}_bubbleUp(t){for(;t>0;){const i=t-1>>1;if(this._data[i].f<=this._data[t].f)break;[this._data[i],this._data[t]]=[this._data[t],this._data[i]],t=i}}_siftDown(t){const i=this._data.length;for(;;){let e=t;const n=2*t+1,a=2*t+2;if(n<i&&this._data[n].f<this._data[e].f&&(e=n),a<i&&this._data[a].f<this._data[e].f&&(e=a),e===t)break;[this._data[e],this._data[t]]=[this._data[t],this._data[e]],t=e}}}const sm=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1}],ul=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];function vs(s,t,i,e,n,a){return Math.abs(s-e)+Math.abs(t-n)+Math.abs(i-a)}function fl(s,t,i,e,n=0,a=null){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return[];const r=new Map,o=new Map,l=`${s.x},${s.y},${s.z}`;o.set(l,0);const c=new dl;for(c.push({f:vs(s.x,s.y,s.z,t.x,t.y,t.z),node:s});c.size>0;){const d=c.pop();if(!d)continue;const{node:f}=d,p=`${f.x},${f.y},${f.z}`;if(f.x===t.x&&f.y===t.y&&f.z===t.z)return am(r,p);const m=o.get(p)??0;for(const{dx:y,dy:T,dz:h}of ul){const u=f.x+y,v=f.y+T,g=f.z+h;if(u<0||u>=e||v<0||v>=e||g<0||g>=e||a&&u===a.x&&v===a.y&&g===a.z)continue;const _=i[u*e*e+v*e+g];if(_===n||_===8)continue;if(h!==0){const x=f.z+h/2;if(i[f.x*e*e+f.y*e+x]===n)continue}const E=`${u},${v},${g}`,S=m+1;S<(o.get(E)??1/0)&&(r.set(E,f),o.set(E,S),c.push({f:S+vs(u,v,g,t.x,t.y,t.z),node:{x:u,y:v,z:g}}))}}return null}function am(s,t){const i=[];let e=t;for(;s.has(e);){const n=s.get(e);if(!n)break;const[a,r,o]=e.split(",").map(Number);i.push({x:a,y:r,z:o}),e=`${n.x},${n.y},${n.z}`}return i.reverse(),i}function om(s,t,i,e,n=0,a=1/0,r=null){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return 0;const o=new Map,l=`${s.x},${s.y},${s.z}`;o.set(l,0);const c=new dl;for(c.push({f:vs(s.x,s.y,s.z,t.x,t.y,t.z),node:s});c.size>0;){const d=c.pop();if(!d)continue;const{node:f}=d,p=`${f.x},${f.y},${f.z}`,m=o.get(p)??0;if(m>a)return 1/0;if(f.x===t.x&&f.y===t.y&&f.z===t.z)return m;for(const{dx:y,dy:T,dz:h}of ul){const u=f.x+y,v=f.y+T,g=f.z+h;if(u<0||u>=e||v<0||v>=e||g<0||g>=e||r&&u===r.x&&v===r.y&&g===r.z)continue;const _=i[u*e*e+v*e+g];if(_===n||_===8)continue;if(h!==0){const x=f.z+h/2;if(i[f.x*e*e+f.y*e+x]===n)continue}const E=`${u},${v},${g}`,S=m+1;S<(o.get(E)??1/0)&&(o.set(E,S),c.push({f:S+vs(u,v,g,t.x,t.y,t.z),node:{x:u,y:v,z:g}}))}}return 1/0}function rm(s,t,i,e,n=0,a=10){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return 0;const r=[{x:s.x,y:s.y,z:s.z,dist:0}];let o=0;const l=new Map;for(l.set(`${s.x},${s.y},${s.z}`,0);o<r.length;){const c=r[o++];if(!(c.dist>a))for(const{dx:d,dy:f,dz:p}of sm){const m=c.x+d,y=c.y+f,T=c.z+p;if(m<0||m>=e||y<0||y>=e||T<0||T>=e)continue;const h=i[m*e*e+y*e+T];if(h===n||h===8)continue;const u=`${m},${y},${T}`,g=T%2===0?0:1,_=c.dist+g;if(_<(l.get(u)??1/0)){if(l.set(u,_),m===t.x&&y===t.y&&T===t.z)return _;g===0?r.splice(o,0,{x:m,y,z:T,dist:_}):r.push({x:m,y,z:T,dist:_})}}}return 1/0}function lm(s,t,i,e,n,a){const r=[{x:s.x,y:s.y,z:s.z,path:[]}];let o=0;const l=new Uint8Array(e*e*e);for(l[s.x*e*e+s.y*e+s.z]=1;o<r.length;){const c=r[o++],d=`${c.x},${c.y},${c.z}`;if(!t.has(d))return c.path;const f=a(c.x,c.y,c.z,i,n,!1);for(const p of f){const m=p.x*e*e+p.y*e+p.z;l[m]||(l[m]=1,r.push({x:p.x,y:p.y,z:p.z,path:[...c.path,p]}))}}return null}class ra{constructor(t,i,e){D(this,"maze");D(this,"id");D(this,"history");D(this,"visitedNodes");D(this,"pathToTarget");D(this,"x");D(this,"y");D(this,"z");D(this,"visualX");D(this,"visualY");D(this,"visualZ");D(this,"state");D(this,"lastPos");D(this,"jellyTime");D(this,"respawnThresholdPercentage");D(this,"lowCanvas");D(this,"lctx");this.maze=t,this.id=e,this.history=[],this.visitedNodes=new Set,this.pathToTarget=[],i?(this.x=i.x,this.y=i.y,this.z=i.z,this.visualX=i.x,this.visualY=i.y,this.visualZ=i.z,this.state="WANDERING",this.lastPos={x:this.x,y:this.y,z:this.z},this.visitedNodes.add(`${this.x},${this.y},${this.z}`)):(this.x=null,this.y=null,this.z=null,this.visualX=null,this.visualY=null,this.visualZ=null,this.state="SLEEP",this.lastPos=null),this.jellyTime=0,this.respawnThresholdPercentage=null,typeof document<"u"&&(this.lowCanvas=document.createElement("canvas"),this.lowCanvas.width=64,this.lowCanvas.height=64,this.lctx=this.lowCanvas.getContext("2d",{willReadFrequently:!0}))}generateCloudTexture(t=.016){if(this.state==="SLEEP"||(this.jellyTime+=t,typeof document>"u"||!this.lctx))return;const i=64,e=this.lctx;e.globalCompositeOperation="destination-out",e.fillStyle="rgba(0, 0, 0, 0.22)",e.fillRect(0,0,i,i),e.globalCompositeOperation="source-over";const n=this.jellyTime;try{const a=e.getImageData(0,0,i,i),r=a.data;for(let o=0;o<i;o++)for(let l=0;l<i;l++){const c=l-i/2,d=o-i/2,f=Math.sqrt(c*c+d*d),p=Math.sin(n*1.5+l*.08)*2.5,m=i*.35+p;if(f<m+Math.random()*1.5){const y=90+Math.floor(Math.random()*45),T=10+Math.floor(Math.random()*20),h=140+Math.floor(Math.random()*60),u=(o*i+l)*4;r[u]=y,r[u+1]=T,r[u+2]=h,r[u+3]=255}}e.putImageData(a,0,0)}catch{}if(Math.random()<.04){e.fillStyle=Math.random()<.7?"#ffffff":"#b3ffff";const a=i/2-8+Math.random()*16,r=i/2-8+Math.random()*16;e.fillRect(a,r,2+Math.random()*3,4+Math.random()*10)}if(Math.random()<.12){const a=Math.floor(Math.random()*3)+1,r=["#00ff66","#ff0055","#00ccff","#ffff00","#ffffff"];for(let o=0;o<a;o++){const l=Math.floor(Math.random()*i),c=Math.floor(Math.random()*i),d=l-i/2,f=c-i/2;if(Math.sqrt(d*d+f*f)<i*.32){const m=Math.floor(Math.random()*4)+2,y=Math.floor(Math.random()*2)+1;e.fillStyle=r[Math.floor(Math.random()*r.length)],e.fillRect(l,c,m,y)}}}if(Math.random()<.08){const a=Math.floor(Math.random()*i),r=Math.floor(Math.random()*6)+2,o=Math.floor(Math.random()*6)-3;try{const l=e.getImageData(0,a,i,r);e.clearRect(0,a,i,r),e.putImageData(l,o,a)}catch{}}}move(t,i,e){if(this.state==="SLEEP"||this.state==="DEAD_BY_JELLY"||this.x===null||this.y===null||this.z===null)return;const n=this.getValidNeighbors(i,e);if(n.length===0)return;const a=Math.round(Math.cbrt(i.length)),r=i.get?i.get(this.x,this.y,this.z):i[this.x*a*a+this.y*a+this.z]??0;(r===e.VISITED||r===e.JELLY_PORTAL)&&this.state!=="TELEPORT_TRACKING"&&this.state!=="TRACKING"&&(this.state="TRACKING",this.pathToTarget=[],this.visitedNodes.clear(),this.visitedNodes.add(`${this.x},${this.y},${this.z}`));let o;if(this.pathToTarget.length>0){const l=this.pathToTarget[0],c=i[l.x*a*a+l.y*a+l.z];(this.state==="TRACKING"?c===e.VISITED||c===e.START||c===e.EXIT||c===e.JELLY_PORTAL:c!==e.WALL)?o=this.pathToTarget.shift():this.pathToTarget=[]}if(!o)if(this.state==="TELEPORT_TRACKING")o=void 0;else{let l=this.findPathToNearestUnvisited(i,e);if((!l||l.length===0)&&(this.visitedNodes.clear(),this.visitedNodes.add(`${this.x},${this.y},${this.z}`),l=this.findPathToNearestUnvisited(i,e)),l&&l.length>0)this.pathToTarget=l,o=this.pathToTarget.shift();else{const c=this.lastPos||{x:this.x,y:this.y,z:this.z},d=n.filter(f=>f.x!==c.x||f.y!==c.y||f.z!==c.z);o=d.length>0?d[Math.floor(Math.random()*d.length)]:n[0]}}o&&(this.history.push({x:this.x,y:this.y,z:this.z}),this.history.length>2&&this.history.shift(),this.lastPos={x:this.x,y:this.y,z:this.z},this.x=o.x,this.y=o.y,this.z=o.z,this.visitedNodes.add(`${this.x},${this.y},${this.z}`))}findPathToTarget(t,i,e){const n=Math.round(Math.cbrt(i.length));return fl({x:this.x,y:this.y,z:this.z},t,i,n,e.WALL,this.maze.startPos)}findPathToNearestUnvisited(t,i){const e=Math.round(Math.cbrt(t.length));return lm({x:this.x,y:this.y,z:this.z},this.visitedNodes,t,e,i,(n,a,r,o,l)=>this.getValidNeighbors(o,l,n,a,r,this.state==="TRACKING"))}getValidNeighbors(t,i,e=this.x,n=this.y,a=this.z,r=this.state==="TRACKING"){const o=[],l=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}],c=Math.round(Math.cbrt(t.length));for(const d of l){const f=e+d.dx,p=n+d.dy,m=a+d.dz;if(f>=0&&f<c&&p>=0&&p<c&&m>=0&&m<c){const y=Math.floor(this.maze.startPos.x),T=Math.floor(this.maze.startPos.y),h=this.maze.startPos.z,u=this.maze.inactiveTeleportPos&&this.maze.inactiveTeleportPos.x===y&&this.maze.inactiveTeleportPos.y===T&&this.maze.inactiveTeleportPos.z===h;if(f===y&&p===T&&m===h&&!u)continue;const v=t[f*c*c+p*c+m];if(v===i.EXIT)continue;if(v!==i.WALL&&v!==8){if(d.dz!==0){const g=a+d.dz/2;if(t[e*c*c+n*c+g]===i.WALL)continue}r?(v===i.VISITED||v===i.START||v===i.EXIT||v===i.JELLY_PORTAL||this.maze.visitedCells&&this.maze.visitedCells.has(`${f},${p},${m}`))&&o.push({x:f,y:p,z:m}):o.push({x:f,y:p,z:m})}}}return o}}const Di=[{id:"tutorial_keys",title:{en:"Key Collection",ptBr:"Coleta de Chaves",ja:"鍵集め",es:"Recolección de Llaves"},description:{en:"Collect all available keys to unlock the exit portal.{img}The number of remaining keys is displayed in the game info panel.{img}Once all keys are collected, the exit portal will be unlocked.{img}",ptBr:"Capture todas as chaves disponíveis para liberar a saída.{img}O número de chaves restantes é exibido no painel de informações do jogo.{img}Ao coletar todas as chaves, o portal de saída será liberado.{img}",ja:"すべての鍵を集めて、出口ポータルを開放しよう。{img}残りの鍵の数は、ゲームの情報パネルに表示される。{img}すべての鍵を集めると、出口ポータルが開放される。{img}",es:"Recoge todas las llaves disponibles para liberar la salida.{img}El número de llaves restantes se muestra en el panel de información del juego.{img}Una vez recogidas todas las llaves, se liberará el portal de salida.{img}"},images:["assets/images/tutorials/tutorial1-1.png","assets/images/tutorials/tutorial1-2.png","assets/images/tutorials/tutorial1-3.png"],layers:[["#######","#######","#######","#######","#######"],["#######","S....K#","###.###","#K....E","#######"],["#######","#######","#######","#######","#######"]],pathfinders:0,mana:0,jellyPortals:0},{id:"tutorial_elevators",title:{en:"Elevators",ptBr:"Elevadores",ja:"エレベーター",es:"Ascensores"},description:{en:`Use the elevators to reach the floors above and below.{img}{img}{img}Press E (desktop)/Y (gamepad) to go up and Q (desktop)/A (gamepad) to go down.
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
Se mostrará un mensaje de confirmación.{img}El número de localizadores disponibles se mostrará en el panel de información del juego.{img}`},images:["assets/images/tutorials/tutorial7-1.png","assets/images/tutorials/tutorial7-2.png","assets/images/tutorials/tutorial7-3.png","assets/images/tutorials/tutorial7-4.png"],layers:[["###########","###########","###########","###########","###########","###########","###########"],["###########","#...#.....#","#.#######.#","#.#...#.#.#","#.#.#.#.#.#","#.#.#.#.#.E","###########"],["###########","###.#.#####","###########","#######.###","###########","###.#######","###########"],["###########","#.#.#.###.#","#.#.#.###.#","#...#.#...#","#.#.#.###.#","#.#.#.###.#","###########"],["###########","#.#######.#","###########","#######.###","###########","#####.###.#","###########"],["###########","#.........#","#.#.#.#.#.#","#.#.#.#.#.#","#.#.#.#.#.#","S.#.#.#...#","###########"],["###########","###########","###########","###########","###########","###########","###########"]],pathfinders:5,mana:0,jellyPortals:0,revealed:!0},{id:"tutorial_map_and_zoom",title:{en:"Map and Zoom",ptBr:"Mapa e Zoom",ja:"マップとズーム",es:"Mapa y Zoom"},description:{en:`Some maps may be too large to fit on the screen.{img}Use the map and zoom to navigate.
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
Una sorpresa te espera al final de este desafío.{img}`},images:["assets/images/tutorials/tutorial5-1.png","assets/images/tutorials/tutorial5-2.png","assets/images/tutorials/tutorial5-3.png","assets/images/tutorials/tutorial5-4.png","assets/images/tutorials/tutorial5-5.png"],layers:[["##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################"],["##############################","S.............T..............E","##############.###############","############A#.#A#############","##############.###############","##############.###############","##############.###############","############A#.#A#############","##############.###############","##############.###############","##############.###############","############A#.#A#############","##############.###############","##############.###############","##############.###############","############A#.#A#############","##############.###############","##############.###############","##############.###############","############A#.#A#############","##############.###############","##############.###############","##############.###############","############A#.#A#############","##############.###############","##############.###############","####A###A###A#.#A###A###A#####","##############.###############","#K............T.............K#","##############################"],["##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################","##############################"]],pathfinders:0,mana:0,jellyPortals:0}];function xr(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function cm(s,t){const i=l=>l.replace(/\n/g,"<br/>").replace(/\\n/g,"<br/>");if(!t||t.length===0||!s.includes("{img}"))return i(xr(s));const e=s.split("{img}"),n=[];let a=0;e[0]&&n.push({type:"text",content:e[0]});let r=[];for(let l=1;l<e.length;l++){a<t.length&&r.push(t[a++]);const c=e[l];c.trim()===""||(r.length>0&&(n.push({type:"image-group",content:"",images:r}),r=[]),n.push({type:"text",content:c}))}r.length>0&&n.push({type:"image-group",content:"",images:r});let o="";for(let l=0;l<n.length;l++){const c=n[l];if(c.type==="text")o+=`<span>${i(xr(c.content))}</span>`;else if(c.type==="image-group"&&c.images&&c.images.length>0){const d=l>0&&n[l-1].type==="text",f=l+1<n.length&&n[l+1].type==="text",p=d?"<br/>":"",m=f?"<br/>":"";if(c.images.length===1)o+=`${p}<img src="${c.images[0]}" class="tutorial-desc-image" alt="Tutorial Screenshot" />${m}`;else{let y="";for(const T of c.images)y+=`<img src="${T}" class="tutorial-desc-image-in-group" alt="Tutorial Screenshot" />`;o+=`${p}<div class="tutorial-desc-image-group">${y}</div>${m}`}}}return o}class br{constructor(t,i,e=null){D(this,"n");D(this,"branchingFactor");D(this,"verticalBias");D(this,"size");D(this,"seed");D(this,"random");D(this,"matrix");D(this,"TYPES");D(this,"startPos");D(this,"tutorialHunterSpawns",[]);const n=t!==void 0?t:W.MAZE_DEGREE!==void 0?W.MAZE_DEGREE:8,a=i!==void 0?i:W.BRANCHING_FACTOR!==void 0?W.BRANCHING_FACTOR:.2;this.n=Math.max(3,Math.min(16,n)),this.branchingFactor=Math.max(0,Math.min(1,a)),this.verticalBias=W.MAZE_VERTICAL_BIAS!==void 0?W.MAZE_VERTICAL_BIAS:.15,this.size=2*this.n+1,e!=null?(this.seed=e,this.random=this.createSeededRandom(e)):(this.seed=null,this.random=Math.random),this.matrix=this.initMatrix(),this.TYPES={WALL:0,PATH:1,VISITED:2,START:3,EXIT:4,ELEVATOR_VISITED:5,TELEPORT:6,KEY:7,STATUE:8,MANA:9,JELLY_PORTAL:10},this.startPos={x:W.PLAYER_START_X!==void 0?W.PLAYER_START_X:.5,y:W.PLAYER_START_Y!==void 0?W.PLAYER_START_Y:1.5,z:0}}createSeededRandom(t){let i=0;if(typeof t=="string")for(let e=0;e<t.length;e++)i=Math.imul(31,i)+t.charCodeAt(e)|0;else i=t|0;return function(){let e=i+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}initMatrix(){return new Int8Array(this.size*this.size*this.size)}_idx(t,i,e){return t*this.size*this.size+i*this.size+e}generate(){const t=[],i=1+2*Math.floor(this.random()*this.n),e=1+2*Math.floor(this.random()*this.n),n=1+2*Math.floor(this.random()*this.n);for(this.matrix[this._idx(i,e,n)]=this.TYPES.PATH,t.push({x:i,y:e,z:n});t.length>0;){let o=this.random()>this.branchingFactor?t.length-1:Math.floor(this.random()*t.length);const l=t[o],c=this.getUnvisitedNeighbors(l.x,l.y,l.z);if(c.length>0){const d=c.filter(m=>m.z===l.z),f=c.filter(m=>m.z!==l.z);let p;f.length>0&&(d.length===0||this.random()<this.verticalBias)?p=f[Math.floor(this.random()*f.length)]:d.length>0?p=d[Math.floor(this.random()*d.length)]:p=f[Math.floor(this.random()*f.length)],this.matrix[this._idx(p.x,p.y,p.z)]=this.TYPES.PATH,this.matrix[this._idx((l.x+p.x)/2,(l.y+p.y)/2,(l.z+p.z)/2)]=this.TYPES.PATH,t.push(p)}else t.splice(o,1)}this.setEntryAndExit(),this.placeTeleports(),this.placeKeys(),this.applyBraid(),this.placeStatues(),this.placeManas();const a=this.size,r=this.matrix;return r.size=a,r.get=(o,l,c)=>r[o*a*a+l*a+c],r.set=(o,l,c,d)=>{r[o*a*a+l*a+c]=d},r}getUnvisitedNeighbors(t,i,e){const n=[],a=[{dx:2,dy:0,dz:0},{dx:-2,dy:0,dz:0},{dx:0,dy:2,dz:0},{dx:0,dy:-2,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const r of a){const o=t+r.dx,l=i+r.dy,c=e+r.dz;this.isValid(o,l,c)&&this.matrix[this._idx(o,l,c)]===this.TYPES.WALL&&n.push({x:o,y:l,z:c})}return n}isValid(t,i,e){return t>0&&t<this.size-1&&i>0&&i<this.size-1&&e>0&&e<this.size-1}setEntryAndExit(){const t=1+2*Math.floor(this.random()*this.n);this.matrix[this._idx(1,1,t)]=this.TYPES.PATH,this.matrix[this._idx(0,1,t)]=this.TYPES.TELEPORT,this.startPos={x:W.PLAYER_START_X!==void 0?W.PLAYER_START_X:.5,y:W.PLAYER_START_Y!==void 0?W.PLAYER_START_Y:1.5,z:t};const i=1+2*Math.floor(this.random()*this.n),e=2*this.n-1;this.matrix[this._idx(e,e,i)]=this.TYPES.PATH,this.matrix[this._idx(2*this.n,e,i)]=this.TYPES.EXIT}_findExitPos(){for(let t=0;t<this.size;t++)for(let i=0;i<this.size;i++)for(let e=0;e<this.size;e++)if(this.matrix[this._idx(t,i,e)]===this.TYPES.EXIT)return{x:t,y:i,z:e};return{x:2*this.n,y:2*this.n-1,z:this.startPos.z}}_collectDeadEndsAndPaths(){const t=[],i=[],e=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1}];for(let n=1;n<this.size-1;n++)for(let a=1;a<this.size-1;a++)for(let r=1;r<this.size-1;r++){if(this.matrix[this._idx(n,a,r)]!==this.TYPES.PATH)continue;const o=r+1<this.size&&this.matrix[this._idx(n,a,r+1)]!==this.TYPES.WALL,l=r-1>=0&&this.matrix[this._idx(n,a,r-1)]!==this.TYPES.WALL;if(o||l)continue;let c=0;for(const d of e){const f=n+d.dx,p=a+d.dy,m=r+d.dz;f>=0&&f<this.size&&p>=0&&p<this.size&&m>=0&&m<this.size&&this.matrix[this._idx(f,p,m)]!==this.TYPES.WALL&&c++}(c===1?t:i).push({x:n,y:a,z:r})}return{deadEnds:t,normalPaths:i}}_greedyFill(t,i,e,n,a){const r={x:0,y:1,z:this.startPos.z},o=this._findExitPos(),l=(f,p)=>Math.abs(f.x-p.x)+Math.abs(f.y-p.y)+Math.abs(f.z-p.z);let c=4,d=4;for(;t.length<e&&c>0;){a&&(t.length=0);const f=i.filter(p=>l(p,r)<c||l(p,o)<c?!1:!n.includes(this.matrix[this._idx(p.x,p.y,p.z)]));for(;t.length<e;){let p=null,m=-1;for(const y of f){if(t.some(h=>h.x===y.x&&h.y===y.y&&h.z===y.z))continue;let T=1/0;for(const h of t){const u=l(y,h);u<T&&(T=u)}if(T>=d){const h=Math.min(l(y,r),l(y,o),T);h>m&&(m=h,p=y)}}if(p)t.push(p);else break}t.length<e&&(d>1?d--:c--)}}placeTeleports(){const t=W.getTeleportCount(this.n),{deadEnds:i,normalPaths:e}=this._collectDeadEndsAndPaths(),n=[];this._greedyFill(n,i,t,[],!0),n.length<t&&this._greedyFill(n,e,t,[],!1);for(const a of n)this.matrix[this._idx(a.x,a.y,a.z)]=this.TYPES.TELEPORT}placeKeys(){const t=W.getKeyCount(this.n),{deadEnds:i,normalPaths:e}=this._collectDeadEndsAndPaths(),n=[];this._greedyFill(n,i,t,[this.TYPES.TELEPORT],!0),n.length<t&&this._greedyFill(n,e,t,[this.TYPES.TELEPORT],!1);for(const a of n)this.matrix[this._idx(a.x,a.y,a.z)]=this.TYPES.KEY}applyBraid(){const t=this.size,i=[];for(let r=1;r<t-1;r++)for(let o=1;o<t-1;o++)for(let l=1;l<t-1;l++)if(this.matrix[this._idx(r,o,l)]===this.TYPES.WALL){const c=r%2===0&&o%2!==0&&l%2!==0,d=o%2===0&&r%2!==0&&l%2!==0,f=l%2===0&&r%2!==0&&o%2!==0;if(c){const p=this.matrix[this._idx(r-1,o,l)],m=this.matrix[this._idx(r+1,o,l)];p!==this.TYPES.WALL&&m!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&m!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&m!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&m!==this.TYPES.KEY&&i.push({x:r,y:o,z:l,type:"X"})}else if(d){const p=this.matrix[this._idx(r,o-1,l)],m=this.matrix[this._idx(r,o+1,l)];p!==this.TYPES.WALL&&m!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&m!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&m!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&m!==this.TYPES.KEY&&i.push({x:r,y:o,z:l,type:"Y"})}else if(f){const p=this.matrix[this._idx(r,o,l-1)],m=this.matrix[this._idx(r,o,l+1)];p!==this.TYPES.WALL&&m!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&m!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&m!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&m!==this.TYPES.KEY&&i.push({x:r,y:o,z:l,type:"Z"})}}for(let r=i.length-1;r>0;r--){const o=Math.floor(this.random()*(r+1)),l=i[r];i[r]=i[o],i[o]=l}const e=W.BRAID_FACTOR||.1,n=Math.floor(i.length*e);let a=0;for(const r of i){if(a>=n)break;this.isWideConnection(r.x,r.y,r.z)||r.type==="Z"&&this.isAdjacentElevator(r.x,r.y,r.z)||(this.matrix[this._idx(r.x,r.y,r.z)]=this.TYPES.PATH,a++)}}isWideConnection(t,i,e){const n=this.size,a=(c,d,f)=>c<0||c>=n||d<0||d>=n||f<0||f>=n?!1:c===t&&d===i&&f===e?!0:this.matrix[this._idx(c,d,f)]!==this.TYPES.WALL;return!!(a(t,i+1,e)&&a(t+1,i,e)&&a(t+1,i+1,e)||a(t-1,i,e)&&a(t-1,i+1,e)&&a(t,i+1,e)||a(t,i-1,e)&&a(t+1,i-1,e)&&a(t+1,i,e)||a(t-1,i-1,e)&&a(t,i-1,e)&&a(t-1,i,e)||a(t,i,e+1)&&a(t+1,i,e)&&a(t+1,i,e+1)||a(t-1,i,e)&&a(t-1,i,e+1)&&a(t,i,e+1)||a(t,i,e-1)&&a(t+1,i,e-1)&&a(t+1,i,e)||a(t-1,i,e-1)&&a(t,i,e-1)&&a(t-1,i,e)||a(t,i,e+1)&&a(t,i+1,e)&&a(t,i+1,e+1)||a(t,i-1,e)&&a(t,i-1,e+1)&&a(t,i,e+1)||a(t,i,e-1)&&a(t,i+1,e-1)&&a(t,i+1,e)||a(t,i-1,e-1)&&a(t,i,e-1)&&a(t,i-1,e))}isAdjacentElevator(t,i,e){const n=this.size,a=[{dx:-1,dy:-1},{dx:-1,dy:0},{dx:-1,dy:1},{dx:0,dy:-1},{dx:0,dy:1},{dx:1,dy:-1},{dx:1,dy:0},{dx:1,dy:1}];for(const r of a){const o=t+r.dx,l=i+r.dy;if(!(o<0||o>=n||l<0||l>=n)&&(this.matrix[this._idx(o,l,e)]!==this.TYPES.WALL||e-2>=0&&this.matrix[this._idx(o,l,e-2)]!==this.TYPES.WALL||e+2<n&&this.matrix[this._idx(o,l,e+2)]!==this.TYPES.WALL))return!0}return!1}isDeadEndZ(t,i,e){if(t%2===0||i%2===0||e%2===0)return!1;const n=this.matrix[this._idx(t,i,e)];if(n===this.TYPES.WALL||n===this.TYPES.START||n===this.TYPES.EXIT||n===this.TYPES.TELEPORT||n===this.TYPES.KEY)return!1;const a=this.size,r=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(const l of r){const c=t+l.dx,d=i+l.dy;if(!(c<0||c>=a||d<0||d>=a)&&this.matrix[this._idx(c,d,e)]!==this.TYPES.WALL)return!1}let o=0;return e-1>=0&&this.matrix[this._idx(t,i,e-1)]!==this.TYPES.WALL&&o++,e+1<a&&this.matrix[this._idx(t,i,e+1)]!==this.TYPES.WALL&&o++,o===1}isSolvable(){const t=this.size,i={x:Math.floor(this.startPos.x),y:Math.floor(this.startPos.y),z:this.startPos.z},e=[];let n=null;for(let c=0;c<t;c++)for(let d=0;d<t;d++)for(let f=0;f<t;f++){const p=this.matrix[this._idx(c,d,f)];p===this.TYPES.KEY?e.push(`${c},${d},${f}`):p===this.TYPES.EXIT&&(n=`${c},${d},${f}`)}const a=[i],r=new Set([`${i.x},${i.y},${i.z}`]),o=new Set;let l=!1;for(;a.length>0;){const c=a.shift();if(!c)continue;const d=`${c.x},${c.y},${c.z}`;e.includes(d)&&o.add(d),d===n&&(l=!0);const f=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(const p of f){const m=c.x+p.dx,y=c.y+p.dy,T=c.z;if(m>=0&&m<t&&y>=0&&y<t){const h=`${m},${y},${T}`,u=this.matrix[this._idx(m,y,T)];u!==this.TYPES.WALL&&u!==this.TYPES.STATUE&&!r.has(h)&&(r.add(h),a.push({x:m,y,z:T}))}}for(const p of[-2,2]){const m=c.z+p;if(m>=0&&m<t){const y=c.z+p/2,T=this.matrix[this._idx(c.x,c.y,y)],h=this.matrix[this._idx(c.x,c.y,m)];if(T!==this.TYPES.WALL&&T!==this.TYPES.STATUE&&h!==this.TYPES.WALL&&h!==this.TYPES.STATUE){const u=`${c.x},${c.y},${m}`;r.has(u)||(r.add(u),a.push({x:c.x,y:c.y,z:m}))}}}}if(!l||o.size!==e.length)return!1;for(let c=0;c<t;c++)for(let d=0;d<t;d++)for(let f=1;f<t;f+=2){const p=this.matrix[this._idx(c,d,f)];if(p!==this.TYPES.WALL&&p!==this.TYPES.STATUE&&!r.has(`${c},${d},${f}`))return!1}return!0}placeStatues(){const t=this.size,i=[];for(let o=0;o<t;o++)for(let l=0;l<t;l++)for(let c=0;c<t;c++)this.isDeadEndZ(o,l,c)&&i.push({x:o,y:l,z:c});let e=0;const n=(o,l,c,d,f)=>{const p=this._idx(o,l,c),m=this.matrix[p];m!==d&&(this.matrix[p]=d,f.push({x:o,y:l,z:c,oldVal:m}))},a=o=>{for(let l=o.length-1;l>=0;l--){const c=o[l];this.matrix[this._idx(c.x,c.y,c.z)]=c.oldVal}},r=(o,l,c,d)=>{n(o,l,c,this.TYPES.STATUE,d);const f=c-1,p=c+1;f>=0&&n(o,l,f,this.TYPES.WALL,d),p<t&&n(o,l,p,this.TYPES.WALL,d);const m=[-2,2];for(const y of m){const T=c+y;T>=0&&T<t&&this.isDeadEndZ(o,l,T)&&r(o,l,T,d)}};for(const o of i){if(this.matrix[this._idx(o.x,o.y,o.z)]===this.TYPES.STATUE||!this.isDeadEndZ(o.x,o.y,o.z))continue;const l=[];if(r(o.x,o.y,o.z,l),this.isSolvable()){const c=l.filter(d=>d.oldVal!==this.TYPES.STATUE&&this.matrix[this._idx(d.x,d.y,d.z)]===this.TYPES.STATUE).length;e+=c}else a(l)}return e}placeManas(){const{deadEnds:t}=this._collectDeadEndsAndPaths();for(const i of t){const e=this._idx(i.x,i.y,i.z);if(this.matrix[e]===this.TYPES.PATH){let a=!1;i.z-1>=0&&this.matrix[this._idx(i.x,i.y,i.z-1)]!==this.TYPES.WALL&&(a=!0),i.z+1<this.size&&this.matrix[this._idx(i.x,i.y,i.z+1)]!==this.TYPES.WALL&&(a=!0),a||(this.matrix[e]=this.TYPES.MANA)}}}generateFromLayout(t){const i=t.layers.length,e=t.layers[0].length,n=t.layers[0][0].length,a=Math.max(n,e,i),r=a%2!==0?a:a+1;this.size=r,this.n=(r-1)/2,this.matrix=this.initMatrix(),this.tutorialHunterSpawns=[];for(let c=0;c<i;c++){const d=t.layers[c];for(let f=0;f<e;f++){const p=d[f];for(let m=0;m<n;m++){const y=p[m],T=this._idx(m,f,c);switch(y){case"#":this.matrix[T]=this.TYPES.WALL;break;case".":this.matrix[T]=this.TYPES.PATH;break;case"S":this.matrix[T]=this.TYPES.TELEPORT,this.startPos={x:m+.5,y:f+.5,z:c};break;case"E":this.matrix[T]=this.TYPES.EXIT;break;case"T":this.matrix[T]=this.TYPES.TELEPORT;break;case"K":this.matrix[T]=this.TYPES.KEY;break;case"M":this.matrix[T]=this.TYPES.MANA;break;case"A":this.matrix[T]=this.TYPES.STATUE;break;case"H":this.matrix[T]=this.TYPES.PATH,this.tutorialHunterSpawns.push({x:m,y:f,z:c});break;default:this.matrix[T]=this.TYPES.WALL}}}}const o=this.size,l=this.matrix;return l.size=o,l.get=(c,d,f)=>l[c*o*o+d*o+f],l.set=(c,d,f,p)=>{l[c*o*o+d*o+f]=p},l}}class hm{constructor(){D(this,"uiFloorSpan");D(this,"uiMap3dContainer");D(this,"uiMobileControls");D(this,"uiProximeterContainer");D(this,"uiProximeterCells");D(this,"uiProximeterBar");D(this,"uiVictoryScreen");D(this,"uiMobileUp");D(this,"uiMobileDown");D(this,"uiMobileMap");D(this,"uiSavingIndicator");D(this,"savingIndicatorTimeout");D(this,"uiVisitedPercent");D(this,"uiHunterStatusVal");D(this,"uiStatusLabel");D(this,"uiMarqueeContainer");D(this,"uiLegendHunter");D(this,"uiCanvas");D(this,"uiKeysCollected");D(this,"uiKeysTotal");D(this,"uiKeysList");D(this,"uiPauseScreen");D(this,"uiMobilePauseBtn");D(this,"uiPathfindersRemaining");D(this,"uiPathfindersTotal");D(this,"uiControlsHintContent");D(this,"uiManaCollectedDesktop");D(this,"uiManaTotalDesktop");D(this,"uiManaCollectedMobile");D(this,"uiManaTotalMobile");D(this,"uiJellyPortalCountDesktop");D(this,"uiJellyPortalCountMobile");D(this,"uiMobileJellyPortalBtn");D(this,"onInfoBanner");D(this,"bannerMessage","");this.uiFloorSpan=document.getElementById("current-floor"),this.uiMap3dContainer=document.getElementById("map3d-container"),this.uiMobileControls=document.getElementById("mobile-controls"),this.uiProximeterContainer=document.getElementById("proximeter-container"),this.uiProximeterCells=document.querySelectorAll(".proximeter-cell"),this.uiProximeterBar=document.querySelector(".proximeter-bar"),this.uiVictoryScreen=document.getElementById("victory-screen"),this.uiMobileUp=document.getElementById("mobile-up"),this.uiMobileDown=document.getElementById("mobile-down"),this.uiMobileMap=document.getElementById("mobile-map"),this.uiSavingIndicator=document.getElementById("saving-indicator"),this.savingIndicatorTimeout=null,this.uiVisitedPercent=document.getElementById("visited-percent"),this.uiHunterStatusVal=document.getElementById("hunter-status-val"),this.uiStatusLabel=document.querySelector("#hunter-status-panel .status-label"),this.uiMarqueeContainer=document.querySelector(".status-marquee-container"),this.uiLegendHunter=document.getElementById("legend-hunter"),this.uiCanvas=document.getElementById("main-2d-canvas"),this.uiKeysCollected=document.getElementById("keys-collected-count"),this.uiKeysTotal=document.getElementById("keys-total-count"),this.uiKeysList=document.getElementById("keys-list-container"),this.uiPauseScreen=document.getElementById("pause-screen"),this.uiMobilePauseBtn=document.getElementById("mobile-pause-btn"),this.uiPathfindersRemaining=document.getElementById("pathfinders-remaining-count"),this.uiPathfindersTotal=document.getElementById("pathfinders-total-count"),this.uiControlsHintContent=document.getElementById("controls-hint-content"),this.uiManaCollectedDesktop=document.getElementById("mana-collected-count-desktop"),this.uiManaTotalDesktop=document.getElementById("mana-total-count-desktop"),this.uiManaCollectedMobile=document.getElementById("mana-collected-count-mobile"),this.uiManaTotalMobile=document.getElementById("mana-total-count-mobile"),this.uiJellyPortalCountDesktop=document.getElementById("jelly-portal-count-desktop"),this.uiJellyPortalCountMobile=document.getElementById("jelly-portal-count-mobile"),this.uiMobileJellyPortalBtn=document.getElementById("mobile-jelly-portal-btn"),this.localizeDOM()}localizeDOM(t=mn){xn(t)}showPause(){this.uiPauseScreen&&this.uiPauseScreen.classList.remove("hidden")}hidePause(){this.uiPauseScreen&&this.uiPauseScreen.classList.add("hidden")}showVictory(t=0,i=0,e=8,n=0,a=0,r=0,o=!1,l=!1){if(this.hideGameUI(),this.uiVictoryScreen){this.uiVictoryScreen.classList.remove("hidden");const h=this.uiVictoryScreen.querySelector("h1");h&&(h.innerText=Dt(o?"tutorialSuccess":"victoryTitle"));const u=this.uiVictoryScreen.querySelector('p[data-i18n="victoryText"]');u&&(u.style.display=o?"none":""),this.uiVictoryScreen.querySelectorAll(".victory-stats").forEach(g=>{g.style.display=o?"none":""})}const c=document.getElementById("menu-btn-victory");c&&(c.innerText=Dt(o?"back":"mainMenu"));const d=document.getElementById("next-tut-btn-victory");d&&(d.classList.toggle("hidden",!l),d.innerText=Dt("nextTutorial"));const f=document.getElementById("victory-mana-count");f&&(f.innerText=`${a}/${r}`);const p=document.getElementById("victory-completion-rate");p&&(p.innerText=`${t}%`);const m=document.getElementById("victory-deaths-count");m&&(m.innerText=String(i));const y=document.getElementById("victory-maze-degree");y&&(y.innerText=String(e));const T=document.getElementById("victory-completion-time");if(T){const h=Math.floor(n/3600),u=Math.floor(n%3600/60),v=Math.floor(n%60),g=E=>String(E).padStart(2,"0"),_=h>0?`${g(h)}:${g(u)}:${g(v)}`:`${g(u)}:${g(v)}`;T.innerText=_}}hideGameUI(){this.uiMobileControls&&this.uiMobileControls.classList.add("hidden"),this.uiMobilePauseBtn&&this.uiMobilePauseBtn.classList.add("hidden"),this.uiMap3dContainer&&this.uiMap3dContainer.classList.add("hidden"),this.uiProximeterContainer&&this.uiProximeterContainer.classList.add("hidden"),this.uiProximeterBar&&this.uiProximeterBar.classList.remove("critical-alert"),this.uiProximeterCells.forEach(t=>t.classList.remove("active")),this.uiCanvas&&this.uiCanvas.classList.remove("hunted-map-effect","nearby-map-effect")}initGameUI(t=!1){this.uiMobileControls&&this.uiMobileControls.classList.remove("hidden"),this.uiMobilePauseBtn&&this.uiMobilePauseBtn.classList.remove("hidden"),this.uiMobileMap&&(this.uiMobileMap.disabled=!0),t?(this.uiStatusLabel&&(this.uiStatusLabel.innerText="SAFE MODE:"),this.uiHunterStatusVal&&(this.uiHunterStatusVal.innerText="ACTIVE",this.uiHunterStatusVal.className="status-marquee-text status--scanning"),this.uiLegendHunter&&this.uiLegendHunter.classList.add("hidden")):(this.uiStatusLabel&&(this.uiStatusLabel.innerText="HUNTER STATUS:"),this.uiLegendHunter&&this.uiLegendHunter.classList.remove("hidden"))}updateVisitedPercent(t){this.uiVisitedPercent&&(this.uiVisitedPercent.innerText=String(t))}updateManaHUD(t,i){this.uiManaCollectedDesktop&&(this.uiManaCollectedDesktop.innerText=String(t)),this.uiManaTotalDesktop&&(this.uiManaTotalDesktop.innerText=String(i)),this.uiManaCollectedMobile&&(this.uiManaCollectedMobile.innerText=String(t)),this.uiManaTotalMobile&&(this.uiManaTotalMobile.innerText=String(i))}updateJellyPortalHUD(t){this.uiJellyPortalCountDesktop&&(this.uiJellyPortalCountDesktop.innerText=String(t)),this.uiJellyPortalCountMobile&&(this.uiJellyPortalCountMobile.innerText=String(t)),this.uiMobileJellyPortalBtn&&(t>0?this.uiMobileJellyPortalBtn.classList.add("jelly-portal-btn--active"):this.uiMobileJellyPortalBtn.classList.remove("jelly-portal-btn--active"))}updateFloor(t,i,e){if(this.uiFloorSpan){const n=(t+1)/2;this.uiFloorSpan.innerText=String(n)}this.uiMobileUp&&(this.uiMobileUp.disabled=!i),this.uiMobileDown&&(this.uiMobileDown.disabled=!e)}updateKeysHUD(t,i){if(this.uiKeysCollected&&(this.uiKeysCollected.innerText=String(t)),this.uiKeysTotal&&(this.uiKeysTotal.innerText=String(i)),this.uiKeysList){this.uiKeysList.innerHTML="";for(let e=0;e<i;e++){const n=document.createElement("span");n.className="key-dot"+(e<t?" key-dot--collected":""),this.uiKeysList.appendChild(n)}}}updatePathfindersHUD(t,i){this.uiPathfindersRemaining&&(this.uiPathfindersRemaining.innerText=String(t)),this.uiPathfindersTotal&&(this.uiPathfindersTotal.innerText=String(i))}showSavingIndicator(){this.uiSavingIndicator&&(this.savingIndicatorTimeout&&clearTimeout(this.savingIndicatorTimeout),this.uiSavingIndicator.classList.remove("hidden"),this.uiSavingIndicator.classList.add("saving-pulse"),this.savingIndicatorTimeout=window.setTimeout(()=>{this.uiSavingIndicator&&(this.uiSavingIndicator.classList.add("hidden"),this.uiSavingIndicator.classList.remove("saving-pulse"))},2e3))}showInfoBanner(t){this.bannerMessage=t,this.onInfoBanner&&this.onInfoBanner(t)}setMap3DVisible(t){this.uiMap3dContainer&&(t?this.uiMap3dContainer.classList.remove("hidden"):this.uiMap3dContainer.classList.add("hidden"))}updateHazardWarning(t,i,e=!1,n=!1){if(!this.uiHunterStatusVal)return;let a=Dt("statusScanning"),r="status--scanning",o=!1;e?(a=Dt("statusActive"),r="status--scanning"):n?(a=Dt("statusSleeping"),r="status--sleeping"):i>0?(a=Dt("statusConverging",{ticks:i}),r="status--converging",o=!0):t&&(a=Dt("statusTracking"),r="status--tracking",o=!0),this.uiHunterStatusVal.innerText!==a&&(this.uiHunterStatusVal.innerText=a,this.uiHunterStatusVal.className="status-marquee-text "+r),this.uiCanvas&&(o?this.uiCanvas.classList.add("hunted-map-effect"):this.uiCanvas.classList.remove("hunted-map-effect"))}setNearbyWarning(t){this.uiCanvas&&(t?this.uiCanvas.classList.add("nearby-map-effect"):this.uiCanvas.classList.remove("nearby-map-effect"))}updateProximeter(t,i,e){if(!this.uiProximeterContainer)return;if(i>0&&!e)this.uiProximeterContainer.classList.remove("hidden");else{this.uiProximeterContainer.classList.add("hidden");return}let n=0;t<=10&&(n=11-t),this.uiProximeterCells.forEach(a=>{parseInt(a.getAttribute("data-index")||"0")<=n?a.classList.add("active"):a.classList.remove("active")}),this.uiProximeterBar&&(n===10?this.uiProximeterBar.classList.add("critical-alert"):this.uiProximeterBar.classList.remove("critical-alert"))}updateMobileMapButton(t,i,e,n=!1){this.uiMobileMap&&e&&(t&&!i?(this.uiMobileMap.innerText=Dt("teleport"),n?(this.uiMobileMap.style.borderColor="#a020f0",this.uiMobileMap.style.color="#a020f0",this.uiMobileMap.style.background="rgba(160, 32, 240, 0.2)"):(this.uiMobileMap.style.borderColor="var(--clr-teleport, #ff8c00)",this.uiMobileMap.style.color="var(--clr-teleport, #ff8c00)",this.uiMobileMap.style.background="rgba(255, 140, 0, 0.2)")):(this.uiMobileMap.innerText=Dt("map"),this.uiMobileMap.style.borderColor="",this.uiMobileMap.style.color="",this.uiMobileMap.style.background=""))}updateControlsHint(t,i=!0){this.uiControlsHintContent&&(t==="gamepad"?this.uiControlsHintContent.innerHTML=`
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-round kbd-dark">LS</kbd>
                        <span style="color:var(--clr-text-dim);font-size:0.9em;margin:0 2px;">or</span>
                        <kbd class="kbd-dark">D-Pad</kbd>
                    </div>
                    <span class="hint-action">${Dt("actionMove")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-round kbd-a">A</kbd>
                        <span style="color:var(--clr-text-dim);font-size:0.9em;margin:0 2px;">/</span>
                        <kbd class="kbd-round kbd-y">Y</kbd>
                    </div>
                    <span class="hint-action">${Dt("actionElevator")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-dark" style="min-width: calc(var(--h-unit) * 3); min-width: calc(var(--d-h-unit) * 3);">Back</kbd>
                    </div>
                    <span class="hint-action">${Dt("actionMap")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-round kbd-b">B</kbd>
                    </div>
                    <span class="hint-action">${Dt("actionZoom")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-dark">RB</kbd>
                    </div>
                    <span class="hint-action">${Dt("actionJellyPortal")}</span>
                </div>
            `:this.uiControlsHintContent.innerHTML=`
                <div class="hint-row">
                    <div class="wasd-container">
                        <div class="wasd-row"><kbd>W</kbd></div>
                        <div class="wasd-row"><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></div>
                    </div>
                    <span class="hint-action">${Dt("actionMove")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>Q</kbd>
                        <span style="color:var(--clr-text-dim);font-size:0.9em;margin:0 2px;">/</span>
                        <kbd>E</kbd>
                    </div>
                    <span class="hint-action">${Dt("actionElevator")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>M</kbd>
                    </div>
                    <span class="hint-action">${Dt("actionMap")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>Z</kbd>
                    </div>
                    <span class="hint-action">${Dt("actionZoom")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>R</kbd>
                    </div>
                    <span class="hint-action">${Dt("actionJellyPortal")}</span>
                </div>
            `)}destroy(){this.savingIndicatorTimeout&&clearTimeout(this.savingIndicatorTimeout)}}class dm{constructor(){D(this,"keys");D(this,"touchStart");D(this,"touchMoveVector");D(this,"preventScrollKeys");D(this,"handleKeyDown");D(this,"handleKeyUp");D(this,"handleTouchStart");D(this,"handleTouchMove");D(this,"handleTouchEnd");this.keys={},this.touchStart=null,this.touchMoveVector=null,this.preventScrollKeys=["arrowup","arrowdown","arrowleft","arrowright"," ","pageup","pagedown"],this.handleKeyDown=null,this.handleKeyUp=null,this.handleTouchStart=null,this.handleTouchMove=null,this.handleTouchEnd=null,this.init()}init(){this.handleKeyDown=t=>{const i=t.key.toLowerCase();this.keys[i]=!0,this.preventScrollKeys.includes(i)&&t.preventDefault()},this.handleKeyUp=t=>{this.keys[t.key.toLowerCase()]=!1},window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp)}setupTouch(t,i){this.handleTouchStart=e=>{const n=e.target;t()||i()||n&&n.closest&&n.closest("button")||(e.cancelable&&e.preventDefault(),this.touchStart={x:e.touches[0].clientX,y:e.touches[0].clientY})},this.handleTouchMove=e=>{if(!this.touchStart||t()||i())return;e.cancelable&&e.preventDefault();const n=e.touches[0].clientX-this.touchStart.x,a=e.touches[0].clientY-this.touchStart.y,r=Math.sqrt(n*n+a*a);r>10&&(this.touchMoveVector={x:n/r,y:a/r})},this.handleTouchEnd=()=>{this.touchStart=null,this.touchMoveVector=null},window.addEventListener("touchstart",this.handleTouchStart,{passive:!1}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),window.addEventListener("touchend",this.handleTouchEnd)}destroy(){this.handleKeyDown&&window.removeEventListener("keydown",this.handleKeyDown),this.handleKeyUp&&window.removeEventListener("keyup",this.handleKeyUp),this.handleTouchStart&&window.removeEventListener("touchstart",this.handleTouchStart),this.handleTouchMove&&window.removeEventListener("touchmove",this.handleTouchMove),this.handleTouchEnd&&window.removeEventListener("touchend",this.handleTouchEnd)}}const za="void-escape-save";function um(s){const t=new Uint8Array(s.buffer);let i="";for(let e=0;e<t.length;e++)i+=String.fromCharCode(t[e]);return btoa(i)}function fm(s){const t=atob(s),i=new Uint8Array(t.length);for(let e=0;e<t.length;e++)i[e]=t.charCodeAt(e);return new Int8Array(i.buffer)}function pm(s){return{x:s.x,y:s.y,z:s.z,id:s.id,state:s.state,lastPos:s.lastPos?{...s.lastPos}:null,history:s.history.map(t=>({...t})),visitedNodes:Array.from(s.visitedNodes),pathToTarget:s.pathToTarget.map(t=>({...t})),respawnThresholdPercentage:s.respawnThresholdPercentage!==void 0?s.respawnThresholdPercentage:null}}function ls(s){try{const t={version:1,timestamp:Date.now(),degree:s.degree,branchingFactor:s.branchingFactor,isSafeMode:s.isSafeMode,seed:s.seed,mazeSize:s.mazeGen.size,mazeStartPos:{...s.mazeGen.startPos},matrix:um(s.mazeGen.matrix),player:{...s.player},lastSavePos:s.lastSavePos?{...s.lastSavePos}:null,hunters:s.hunters.map(pm),discoveredTeleports:Array.from(s.discoveredTeleports),inactiveTeleportPos:s.inactiveTeleportPos?{...s.inactiveTeleportPos}:null,teleportCooldownTicks:s.teleportCooldownTicks,revealedPathSet:Array.from(s.revealedPathSet),keysCollected:s.keysCollected,totalKeys:s.totalKeys,manaCollected:s.manaCollected,totalMana:s.totalMana,jellyPortalCount:s.jellyPortalCount,totalPathfinders:s.totalPathfinders,pathfindersRemaining:s.pathfindersRemaining,pathfinderRewardsGranted:s.pathfinderRewardsGranted!==void 0?s.pathfinderRewardsGranted:0,mapCompletion100Triggered:s.mapCompletion100Triggered||!1,dialogueUpTriggered:s.dialogueUpTriggered||!1,dialogueDownTriggered:s.dialogueDownTriggered||!1,dialogueWhichWayTriggered:s.dialogueWhichWayTriggered||!1,dialogueDetectedTriggered:s.dialogueDetectedTriggered||!1,hunterOnSameFloorDetected:s.hunterOnSameFloorDetected||!1,deathsCount:s.deathsCount!==void 0?s.deathsCount:0,elapsedTime:s.elapsedTime!==void 0?s.elapsedTime:0};localStorage.setItem(za,JSON.stringify(t))}catch(t){console.warn("[SaveManager] Could not save game state:",t)}}function pl(){try{const s=localStorage.getItem(za);if(!s)return null;const t=JSON.parse(s);return!t||t.version!==1?null:t}catch(s){return console.warn("[SaveManager] Could not load save data:",s),null}}function ml(){localStorage.removeItem(za)}function Ar(){return pl()!==null}function mm(s,t){s.x=t.x,s.y=t.y,s.z=t.z,s.visualX=t.x,s.visualY=t.y,s.visualZ=t.z,s.state=t.state,s.lastPos=t.lastPos?{...t.lastPos}:null,s.history=t.history.map(i=>({...i})),s.visitedNodes=new Set(t.visitedNodes),s.pathToTarget=t.pathToTarget.map(i=>({...i})),s.respawnThresholdPercentage=t.respawnThresholdPercentage!==void 0?t.respawnThresholdPercentage:null}function gm(s,t){const i=fm(t);for(let e=0;e<i.length;e++)s.matrix[e]=i[e]}function la(s,t,i){return Math.abs(t-s)<=i?t:s+Math.sign(t-s)*i}class ca{constructor(t,i,e=null,n=null){D(this,"degree");D(this,"branchingFactor");D(this,"isSafeMode");D(this,"vScale");D(this,"ui");D(this,"input");D(this,"canvas");D(this,"ctx");D(this,"seed");D(this,"mazeGen");D(this,"maze");D(this,"isResumedFromSave");D(this,"mapCompletion100Triggered");D(this,"hunterOnSameFloorDetected");D(this,"dialogueUpTriggered");D(this,"dialogueDownTriggered");D(this,"dialogueWhichWayTriggered");D(this,"dialogueDetectedTriggered");D(this,"wallImage");D(this,"floorImage");D(this,"keyImage");D(this,"manaImage");D(this,"statueImage");D(this,"mageImages");D(this,"playerSide");D(this,"playerVertical");D(this,"playerWalkCycle");D(this,"playerSquashTargetX");D(this,"playerSquashTargetY");D(this,"playerSquashX");D(this,"playerSquashY");D(this,"player");D(this,"hunters");D(this,"keyMeshes");D(this,"exitMesh");D(this,"keysCollected");D(this,"totalKeys");D(this,"manaCollected");D(this,"totalMana");D(this,"manaMeshes");D(this,"totalPathfinders");D(this,"pathfindersRemaining");D(this,"activeMapFloor");D(this,"visualActiveFloor");D(this,"mapCursor");D(this,"pathfinderRewardsGranted");D(this,"isometricCanvas");D(this,"isometricCtx");D(this,"floorClickRects");D(this,"teleportModalClickRects");D(this,"mapZoom");D(this,"mapPanOffsetX");D(this,"mapPanOffsetY");D(this,"isZoomTransitionActive");D(this,"zoomTransitionTimer");D(this,"preloadedStoryImages");D(this,"storyImagesLoadedCount");D(this,"storyImagesTotalCount");D(this,"storyImagesPreloadPromise");D(this,"lastFrameTime");D(this,"revealedPathSet");D(this,"activePathReveal");D(this,"revealedPathProgress");D(this,"knownMeshes");D(this,"gridMeshes");D(this,"pathRevealInterval");D(this,"pathfinderBlockedUntil");D(this,"isMap3DActive");D(this,"teleportAnim");D(this,"auraHeight");D(this,"auraTime");D(this,"isGameOver");D(this,"deathAnimation");D(this,"isTutorialMode");D(this,"currentTutorialId");D(this,"currentTutorialStage");D(this,"notificationQueue");D(this,"activeNotification");D(this,"isPaused");D(this,"manaCharges");D(this,"jellyPortalCount");D(this,"jellyPortalFreezeTimer");D(this,"jellyPortalResetCells");D(this,"jellyPortalResetDuration");D(this,"jellyPortalResetElapsed");D(this,"dyingHunters");D(this,"pathfinderConfirmTarget");D(this,"isJellyChallengeActive",!1);D(this,"isHunterTracking",!1);D(this,"completedFloors",new Set);D(this,"jellyProjectiles",[]);D(this,"jellyStatueStates",new Map);D(this,"previouslyDeadHuntersInfo",[]);D(this,"isDestroyed");D(this,"isIntroPlaying");D(this,"isStoryActive");D(this,"pulsatingMaterials");D(this,"hunterMeshes");D(this,"statueMeshes",new Map);D(this,"discoveredTeleports");D(this,"visitedCells");D(this,"lastSavePos");D(this,"suppressWakeHuntersBanner");D(this,"allTeleports");D(this,"vortexAngles");D(this,"stars",[]);D(this,"starBgColor",[25,25,25]);D(this,"starColor",[255,255,255]);D(this,"isVictory",!1);D(this,"isTouchDevice");D(this,"isMouseOrTouchDetected");D(this,"teleportGoBtnClickRect");D(this,"lastTeleportCloseTime");D(this,"staticMapCacheCanvas");D(this,"staticMapCacheCtx");D(this,"staticMapCacheDirty");D(this,"zoomVisibleCells");D(this,"scene");D(this,"camera");D(this,"renderer");D(this,"controls");D(this,"teleportMeshes");D(this,"inactiveTeleportPos");D(this,"teleportCooldownTicks");D(this,"storyImages");D(this,"storyOpacity");D(this,"storyOverlayOpacity");D(this,"storyFrameIndex");D(this,"storyTimer");D(this,"storyTextQueue");D(this,"storyTextIndex");D(this,"storyDisplayedText");D(this,"storyState");D(this,"storyWaitTimer");D(this,"storyTextHeight");D(this,"storyWidthProgress");D(this,"storyCharIndex");D(this,"storyTypeTimer");D(this,"storyMsgIndex");D(this,"storyCloseProgress");D(this,"selectedTeleportIndex");D(this,"teleportConfirmModalActive");D(this,"teleportModalSelection");D(this,"teleportDotsClickRects");D(this,"isTeleportMode");D(this,"floorTransition");D(this,"hasSavePoint");D(this,"lastPlayerCell");D(this,"exitPathfinderUnlocked");D(this,"isZoomActive");D(this,"lastInputDevice");D(this,"fullyRevealedCells");D(this,"revealedCellsAnimation");D(this,"skipCellAnimations");D(this,"activeSkipHandler");D(this,"activeIntroTimer");D(this,"activeContinueTimer");D(this,"raycaster");D(this,"pointer");D(this,"handleKeyDownExtra");D(this,"handleKeyboardDetection");D(this,"handleResize");D(this,"handleStoryKeyDown");D(this,"handleStoryClick");D(this,"handleStoryTouch");D(this,"handleCanvasClick");D(this,"handlePointerDown");D(this,"handlePointerUp");D(this,"lastHunterMove");D(this,"lastLockedWarningTime");D(this,"prevGamepadButtons");D(this,"isPreloadingActive");D(this,"prevGamepadStick");D(this,"gamepadTeleportSelectedIndex");D(this,"deathsCount");D(this,"elapsedTime");if(this.degree=t!==void 0?t:W.MAZE_DEGREE!==void 0?W.MAZE_DEGREE:8,this.branchingFactor=i!==void 0?i:W.BRANCHING_FACTOR!==void 0?W.BRANCHING_FACTOR:.2,e)this.isSafeMode=e.isSafeMode??!1;else{const p=document.getElementById("safe-mode");this.isSafeMode=p?p.checked:!1}this.vScale=2,this.ui=new hm,this.input=new dm,this.input.setupTouch(()=>this.isMap3DActive,()=>this.isGameOver),this.canvas=document.getElementById("main-2d-canvas"),this.ctx=this.canvas.getContext("2d"),this.seed=e?e.seed:W.SEED!==null&&W.SEED!==void 0?W.SEED:Date.now(),this.isTutorialMode=!!n,this.currentTutorialId=n?n.id:null,this.currentTutorialStage=n,this.isTutorialMode?(this.mazeGen=new br,this.maze=this.mazeGen.generateFromLayout(n)):(this.mazeGen=new br(t,i,this.seed),this.maze=this.mazeGen.generate()),this.isResumedFromSave=!!e,this.deathsCount=e&&e.deathsCount||0,this.elapsedTime=e&&e.elapsedTime||0,this.mapCompletion100Triggered=!1,this.hunterOnSameFloorDetected=!1,this.dialogueUpTriggered=!1,this.dialogueDownTriggered=!1,this.dialogueWhichWayTriggered=!1,this.dialogueDetectedTriggered=!1,this.wallImage=new Image,this.wallImage.onload=()=>{this.staticMapCacheDirty=!0},this.wallImage.src="assets/images/wall.png",this.floorImage=new Image,this.floorImage.onload=()=>{this.staticMapCacheDirty=!0},this.floorImage.src="assets/images/floor.png",this.keyImage=new Image,this.keyImage.onload=()=>{this.staticMapCacheDirty=!0},this.keyImage.src="assets/images/key.png",this.manaImage=new Image,this.manaImage.onload=()=>{this.staticMapCacheDirty=!0},this.manaImage.src="assets/images/mana.png",this.statueImage=new Image,this.statueImage.onload=()=>{this.staticMapCacheDirty=!0},this.statueImage.src="assets/images/statue.png",this.mageImages={down_left:new Image,down_right:new Image,up_left:new Image,up_right:new Image};for(const p in this.mageImages)this.mageImages[p].onload=()=>{this.staticMapCacheDirty=!0},this.mageImages[p].src=`assets/images/mage_${p}.png`;if(this.playerSide="right",this.playerVertical="down",this.playerWalkCycle=0,this.playerSquashTargetX=1,this.playerSquashTargetY=1,this.playerSquashX=1,this.playerSquashY=1,this.player={x:this.mazeGen.startPos.x,y:this.mazeGen.startPos.y,z:this.mazeGen.startPos.z,dir:0},this.hunters=[],this.isTutorialMode){if(this.mazeGen.tutorialHunterSpawns&&this.mazeGen.tutorialHunterSpawns.length>0&&!this.isSafeMode){let p=1;for(const m of this.mazeGen.tutorialHunterSpawns){const y=new ra(this.mazeGen,{x:m.x,y:m.y,z:m.z},p++);this.hunters.push(y)}}this.lastHunterMove=performance.now()}else this.initHunters(t);if(this.keyMeshes=[],this.exitMesh=null,this.keysCollected=0,this.isTutorialMode){let p=0;const m=this.mazeGen.size;for(let y=0;y<m;y++)for(let T=0;T<m;T++)for(let h=0;h<m;h++)this.maze.get(y,T,h)===this.mazeGen.TYPES.KEY&&p++;this.totalKeys=p}else this.totalKeys=W.getKeyCount(t);this.isTutorialMode?(this.totalPathfinders=n.pathfinders!==void 0?n.pathfinders:0,this.pathfindersRemaining=this.totalPathfinders,this.manaCharges=n.mana!==void 0?n.mana:0,this.activeMapFloor=this.mazeGen.startPos.z,this.visualActiveFloor=this.mazeGen.startPos.z,this.player.x=this.mazeGen.startPos.x,this.player.y=this.mazeGen.startPos.y,this.player.z=this.mazeGen.startPos.z):(this.totalPathfinders=W.getPathfinderCount(t),this.pathfindersRemaining=this.totalPathfinders,this.activeMapFloor=1,this.visualActiveFloor=1),this.mapCursor={x:0,y:0,z:1},this.pathfinderRewardsGranted=0,this.isometricCanvas=null,this.isometricCtx=null,this.floorClickRects=[],this.mapZoom=1,this.mapPanOffsetX=0,this.isZoomTransitionActive=!1,this.zoomTransitionTimer=0,this.preloadedStoryImages=[],this.storyImagesLoadedCount=0,this.storyImagesTotalCount=0,this.storyImagesPreloadPromise=null,this.preloadStoryImages(),this.lastFrameTime=performance.now(),this.revealedPathSet=new Set,this.activePathReveal=[],this.revealedPathProgress=0,this.knownMeshes=[],this.gridMeshes=null,this.pathRevealInterval=null,this.pathfinderBlockedUntil=0,this.manaCollected=this.isTutorialMode&&n&&n.mana!==void 0?n.mana:0,this.totalMana=0,this.manaMeshes=[];const a=this.mazeGen.size;for(let p=0;p<a;p++)for(let m=0;m<a;m++)for(let y=0;y<a;y++)this.maze.get(p,m,y)===this.mazeGen.TYPES.MANA&&this.totalMana++;this.isTutorialMode&&n&&n.mana!==void 0&&(this.totalMana+=n.mana),this.isTutorialMode?this.jellyPortalCount=n&&n.jellyPortals!==void 0?n.jellyPortals:0:this.jellyPortalCount=this.totalMana<10?1:W.JELLY_PORTAL_COUNT||0,this.jellyPortalFreezeTimer=0,this.jellyPortalResetCells=new Set,this.jellyPortalResetDuration=1.5,this.jellyPortalResetElapsed=0,this.dyingHunters=[],this.isJellyChallengeActive=!1,this.isHunterTracking=!1,this.updateGameContainerBackground(),this.completedFloors=new Set,this.jellyProjectiles=[],this.jellyStatueStates=new Map,this.ui.initGameUI(this.isSafeMode),this.ui.onInfoBanner=p=>this.queueNotification(p),this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.ui.updateManaHUD(this.manaCollected,this.totalMana),this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),this.ui.updateJellyPortalHUD(this.jellyPortalCount),this.isMap3DActive=!1,this.teleportAnim=null,this.auraHeight=0,this.auraTime=0,this.isGameOver=!1,this.deathAnimation=null,this.notificationQueue=[],this.activeNotification=null,this.isPaused=!1,this.isDestroyed=!1,this.isIntroPlaying=!1,this.isStoryActive=!1,this.pulsatingMaterials=[],this.hunterMeshes=[],this.discoveredTeleports=new Set,this.visitedCells=new Set,this.lastSavePos=null,this.suppressWakeHuntersBanner=!1,this.isVictory=!1,this.starBgColor=[0,0,0],this.starColor=[200,200,200],this.stars=[];const r=800;for(let p=0;p<r;p++){const m=Math.random()*.5+.01,y=Math.random()*.5+.49,T=(m+y)/2,h=Math.random()*Math.PI*2;this.stars.push({orbitalFactor:T,currentOrbitalFactor:T,speed:(Math.random()*.08+.05)*Math.PI,rotation:h,prevR:h,px:0,py:0,x:0,y:0,colorBase:[255,255,255],currentColor:[255,255,255],id:p})}const o=Math.floor(this.player.x),l=Math.floor(this.player.y),c=this.player.z;this.discoveredTeleports.add(`${o},${l},${c}`),this.allTeleports=[];const d=this.mazeGen.size,f=this.mazeGen.TYPES;for(let p=0;p<d;p++)for(let m=0;m<d;m++)for(let y=0;y<d;y++)this.maze.get(y,m,p)===f.TELEPORT&&this.allTeleports.push({x:y,y:m,z:p});this.allTeleports.sort((p,m)=>p.z!==m.z?p.z-m.z:p.y!==m.y?p.y-m.y:p.x-m.x),this.selectedTeleportIndex=this.allTeleports.findIndex(p=>p.x===o&&p.y===l&&p.z===c),this.selectedTeleportIndex===-1&&(this.selectedTeleportIndex=0),this.teleportConfirmModalActive=!1,this.teleportModalSelection="go",this.pathfinderConfirmTarget=null,this.isMouseOrTouchDetected=!1,this.teleportGoBtnClickRect=null,this.lastTeleportCloseTime=0,this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0,this.teleportMeshes=[],this.isTeleportMode=!1,this.teleportCooldownTicks=0,this.inactiveTeleportPos=null,this.floorTransition=null,this.hasSavePoint=!1,this.lastPlayerCell={x:o,y:l,z:c},this.exitPathfinderUnlocked=!1,this.isZoomActive=!0,this.zoomVisibleCells=11,this.lastInputDevice="keyboard",this.staticMapCacheCanvas=document.createElement("canvas"),this.staticMapCacheCtx=this.staticMapCacheCanvas.getContext("2d"),this.staticMapCacheDirty=!0,this.fullyRevealedCells=new Set,this.revealedCellsAnimation=new Map,this.vortexAngles=new Map,this.skipCellAnimations=!0,this.populateFullyRevealedCells(this.player.z),this.activeSkipHandler=null,this.activeIntroTimer=null,this.activeContinueTimer=null,this.raycaster=new tm,this.pointer=new kt,this.exitPathfinderUnlocked=this.checkExitNeighborVisited(),this.initThree(),this.populateVisitedCells(),this.init(e)}populateVisitedCells(){this.visitedCells.clear();const t=this.mazeGen.size,i=this.mazeGen.TYPES,e=this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.revealed;for(let n=0;n<t;n++)for(let a=0;a<t;a++)for(let r=0;r<t;r++){const o=this.maze.get(n,a,r);if(e){if(o!==i.WALL){this.visitedCells.add(`${n},${a},${r}`);const l=r<t-1&&this.maze.get(n,a,r+1)!==i.WALL,c=r>0&&this.maze.get(n,a,r-1)!==i.WALL,d=l||c;o===i.PATH?d?this.maze.set(n,a,r,i.ELEVATOR_VISITED):this.maze.set(n,a,r,i.VISITED):o===i.TELEPORT&&this.discoveredTeleports.add(`${n},${a},${r}`)}}else{const l=o===i.TELEPORT&&this.discoveredTeleports.has(`${n},${a},${r}`);(o===i.VISITED||o===i.START||o===i.ELEVATOR_VISITED||l)&&this.visitedCells.add(`${n},${a},${r}`)}}}destroy(){this.isDestroyed=!0,this.isJellyChallengeActive=!1,this.updateGameContainerBackground(),this.hideGameUI(),this.input.destroy(),this.ui.destroy(),window.removeEventListener("keydown",this.handleKeyDownExtra),this.handleKeyboardDetection&&window.removeEventListener("keydown",this.handleKeyboardDetection),window.removeEventListener("resize",this.handleResize),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this.activeIntroTimer&&(clearTimeout(this.activeIntroTimer),this.activeIntroTimer=null),this.activeContinueTimer&&(clearTimeout(this.activeContinueTimer),this.activeContinueTimer=null),this.handleStoryKeyDown&&(window.removeEventListener("keydown",this.handleStoryKeyDown),this.handleStoryKeyDown=null);const t=document.getElementById("story-screen");t&&(this.handleStoryClick&&(t.removeEventListener("click",this.handleStoryClick),this.handleStoryClick=null),this.handleStoryTouch&&(t.removeEventListener("touchstart",this.handleStoryTouch),this.handleStoryTouch=null),t.classList.add("hidden")),this.controls&&this.controls.dispose(),this.renderer&&this.renderer.domElement&&(this.renderer.domElement.removeEventListener("click",this.handleCanvasClick),this.renderer.domElement.removeEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.removeEventListener("pointerup",this.handlePointerUp)),this.renderer&&(this.renderer.dispose(),this.renderer.domElement.remove()),this.ui.uiMobileUp&&(this.ui.uiMobileUp.onclick=null),this.ui.uiMobileDown&&(this.ui.uiMobileDown.onclick=null),this.ui.uiMobileMap&&(this.ui.uiMobileMap.onclick=null),this.pathRevealInterval&&clearInterval(this.pathRevealInterval)}preloadStoryImages(){const t=["assets/images/presentation/1-mystical-church-of-chaos.jpg","assets/images/presentation/2-mystical-church-of-chaos.jpg","assets/images/presentation/3-the-jelly-god.jpg","assets/images/presentation/4-player-alone.jpg","assets/images/presentation/5-player-thrown.jpg"];this.storyImagesLoadedCount=0,this.storyImagesTotalCount=t.length,this.storyImagesPreloadPromise=Promise.all(t.map((i,e)=>new Promise(n=>{const a=new Image;a.src=i,a.onload=()=>{this.preloadedStoryImages[e]=a,this.storyImagesLoadedCount++,n()},a.onerror=()=>{console.warn(`Failed to preload story image: ${i}`),n()}})))}initHunters(t){const i=this.isSafeMode?0:W.getHunterCount(t);if(i!==0){for(let e=1;e<=i;e++)this.hunters.push(new ra(this.mazeGen,null,e));this.lastHunterMove=performance.now()}}wakeHunters(){const t=this.mazeGen.size,i=[],e=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,r=Math.floor(this.mazeGen.startPos.x),o=Math.floor(this.mazeGen.startPos.y),l=this.mazeGen.startPos.z;for(let y=0;y<t;y++)for(let T=0;T<t;T++)for(let h=0;h<t;h++){const u=y===r&&T===o&&h===l;this.maze.get(y,T,h)===this.mazeGen.TYPES.PATH&&h%2!==0&&!u&&i.push({x:y,y:T,z:h})}if(i.length===0)for(let y=0;y<t;y++)for(let T=0;T<t;T++)for(let h=0;h<t;h++){const u=this.maze.get(y,T,h),v=y===r&&T===o&&h===l,g=u===this.mazeGen.TYPES.EXIT;u!==this.mazeGen.TYPES.WALL&&!g&&h%2!==0&&(y!==e||T!==n||h!==a)&&!v&&i.push({x:y,y:T,z:h})}for(let y=i.length-1;y>0;y--){const T=Math.floor(Math.random()*(y+1)),h=i[y];i[y]=i[T],i[T]=h}const c=(y,T)=>Math.abs(y.x-T.x)+Math.abs(y.y-T.y)+Math.abs(y.z-T.z),d=[],f=this.hunters.filter(y=>y.state==="SLEEP");let p=Math.max(3,Math.floor(t*.45)),m=4;for(;d.length<f.length&&p>0;){d.length=0;const y=i.filter(T=>c(T,{x:e,y:n,z:a})>=p);for(let T=0;T<f.length;T++){let h=null;for(const u of y){if(d.some(g=>g.x===u.x&&g.y===u.y&&g.z===u.z))continue;let v=!0;for(const g of d)if(c(u,g)<m){v=!1;break}if(v){h=u;break}}if(h)d.push(h);else break}d.length<f.length&&(m>1?m--:p--)}if(d.length<f.length)for(const y of i){if(d.length>=f.length)break;d.some(T=>T.x===y.x&&T.y===y.y&&T.z===y.z)||d.push(y)}for(let y=0;y<f.length&&y<d.length;y++){const T=f[y],h=d[y];T.x=h.x,T.y=h.y,T.z=h.z,T.visualX=h.x,T.visualY=h.y,T.visualZ=h.z,T.lastPos={x:h.x,y:h.y,z:h.z},T.state="WANDERING",T.visitedNodes.clear(),T.visitedNodes.add(`${h.x},${h.y},${h.z}`),T.history=[]}this.suppressWakeHuntersBanner||this.ui.showInfoBanner(Dt("msgVoidHuntersDetected")),this.suppressWakeHuntersBanner=!1,this.staticMapCacheDirty=!0,this.isMap3DActive&&this.build3DMap()}getExitPos(){for(let t=0;t<this.mazeGen.size;t++)for(let i=0;i<this.mazeGen.size;i++)for(let e=0;e<this.mazeGen.size;e++)if(this.maze.get(t,i,e)===this.mazeGen.TYPES.EXIT)return{x:t,y:i,z:e};return{x:1,y:1,z:1}}triggerSave(){this.isTutorialMode||(ls(this),this.hasSavePoint=!0,this.ui.showSavingIndicator())}tryActivateJellyPortal(){if(this.isGameOver||this.isPaused||this.isIntroPlaying||this.isStoryActive||this.jellyPortalFreezeTimer>0)return;const t=Math.floor(this.player.x),i=Math.floor(this.player.y),e=this.player.z,n=this.maze.get(t,i,e),a=e<this.mazeGen.size-1&&this.maze.get(t,i,e+1)!==this.mazeGen.TYPES.WALL,r=e>0&&this.maze.get(t,i,e-1)!==this.mazeGen.TYPES.WALL,o=a||r,l=t===Math.floor(this.mazeGen.startPos.x)&&i===Math.floor(this.mazeGen.startPos.y)&&e===this.mazeGen.startPos.z,c=n===this.mazeGen.TYPES.TELEPORT;if(o||c||l||n!==this.mazeGen.TYPES.VISITED){this.ui.showInfoBanner(Dt("msgJellyPortalNotHere"));return}if(this.jellyPortalCount<=0){this.ui.showInfoBanner(Dt("msgJellyPortalNoPortalCount"));return}this.jellyPortalCount--,this.ui.updateJellyPortalHUD(this.jellyPortalCount),this.maze.set(t,i,e,this.mazeGen.TYPES.JELLY_PORTAL);const d=`${t},${i},${e}`;this.discoveredTeleports.add(d),this.allTeleports.push({x:t,y:i,z:e}),this.allTeleports.sort((m,y)=>m.z!==y.z?m.z-y.z:m.x!==y.x?m.x-y.x:m.y-y.y),this.selectedTeleportIndex=this.allTeleports.findIndex(m=>m.x===t&&m.y===i&&m.z===e),this.staticMapCacheDirty=!0,this.ui.showInfoBanner(Dt("msgJellyPortalActivated")),this.lastSavePos={x:t+W.PLAYER_START_X,y:i+W.PLAYER_START_Y%1,z:e},this.triggerSave(),this.jellyPortalFreezeTimer=1.5,this.updateGameContainerBackground(),this.jellyPortalResetElapsed=0,this.jellyPortalResetCells.clear();const f=this.mazeGen.size;for(let m=0;m<f;m++)for(let y=0;y<f;y++)Math.abs(m-t)+Math.abs(y-i)<=5&&this.jellyPortalResetCells.add(`${m},${y}`);const p=this.getMapVisitedPercentage();for(const m of this.hunters)m.state!=="SLEEP"&&m.state!=="DEAD_BY_JELLY"&&m.state!=="DYING"&&m.z===e&&m.x!==null&&m.y!==null&&Math.abs(m.x-t)+Math.abs(m.y-i)<=5&&(m.state="DYING",m.respawnThresholdPercentage=p)}executeJellyPortalReset(t,i,e){const n=this.mazeGen.size,a=this.mazeGen.TYPES,r=Math.floor(this.mazeGen.startPos.x),o=Math.floor(this.mazeGen.startPos.y),l=this.mazeGen.startPos.z;for(let c=0;c<n;c++)for(let d=0;d<n;d++){const f=Math.abs(c-t)+Math.abs(d-i);if(f<=5){const p=this.maze.get(c,d,e),m=`${c},${d},${e}`;if(p===a.STATUE)continue;if(p===a.WALL){let y=!1;for(const[T,h]of[[1,0],[-1,0],[0,1],[0,-1]]){const u=c+T,v=d+h;if(u>=0&&u<n&&v>=0&&v<n&&this.maze.get(u,v,e)===a.STATUE){y=!0;break}}if(y)continue}if(c===r&&d===o&&e===l||c===t&&d===i)continue;if(this.visitedCells.delete(m),this.fullyRevealedCells.delete(m),this.revealedCellsAnimation.delete(m),f===1){(p===a.VISITED||p===a.ELEVATOR_VISITED)&&this.maze.set(c,d,e,a.PATH),p===a.TELEPORT&&this.discoveredTeleports.delete(m);continue}p===a.VISITED||p===a.ELEVATOR_VISITED?this.maze.set(c,d,e,a.PATH):p===a.TELEPORT&&this.discoveredTeleports.delete(m)}}for(const c of this.hunters)c.state==="DYING"&&(c.state="DEAD_BY_JELLY",c.x=null,c.y=null,c.z=null,c.visualX=null,c.visualY=null,c.visualZ=null,c.pathToTarget=[],c.history=[]);this.dyingHunters.length>0&&(this.respawnDyingHunters(),this.dyingHunters=[]),this.staticMapCacheDirty=!0,this.triggerSave()}respawnSingleHunter(t){const i=this.mazeGen.size,e=[],n=Math.floor(this.player.x),a=Math.floor(this.player.y),r=this.player.z,o=Math.floor(this.mazeGen.startPos.x),l=Math.floor(this.mazeGen.startPos.y),c=this.mazeGen.startPos.z;for(let d=0;d<i;d++)for(let f=0;f<i;f++)for(let p=0;p<i;p++){const m=d===o&&f===l&&p===c,y=this.maze.get(d,f,p)===this.mazeGen.TYPES.EXIT;if(this.maze.get(d,f,p)===this.mazeGen.TYPES.PATH&&p%2!==0&&!m&&!y){if(p===r&&Math.abs(d-n)+Math.abs(f-a)<=5)continue;e.push({x:d,y:f,z:p})}}if(e.length===0)for(let d=0;d<i;d++)for(let f=0;f<i;f++)for(let p=0;p<i;p++){const m=this.maze.get(d,f,p),y=d===o&&f===l&&p===c,T=m===this.mazeGen.TYPES.EXIT;if(m!==this.mazeGen.TYPES.WALL&&!T&&p%2!==0&&!y&&(d!==n||f!==a||p!==r)){if(p===r&&Math.abs(d-n)+Math.abs(f-a)<=5)continue;e.push({x:d,y:f,z:p})}}if(e.length>0){const d=e[Math.floor(Math.random()*e.length)];t.x=d.x,t.y=d.y,t.z=d.z,t.visualX=d.x,t.visualY=d.y,t.visualZ=d.z,t.lastPos={x:d.x,y:d.y,z:d.z},t.state="WANDERING",t.visitedNodes.clear(),t.visitedNodes.add(`${d.x},${d.y},${d.z}`),t.history=[],t.respawnThresholdPercentage=null,this.staticMapCacheDirty=!0,this.triggerSave()}}respawnDyingHunters(){const t=this.mazeGen.size,i=[],e=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,r=Math.floor(this.mazeGen.startPos.x),o=Math.floor(this.mazeGen.startPos.y),l=this.mazeGen.startPos.z;for(let d=0;d<t;d++)for(let f=0;f<t;f++)for(let p=0;p<t;p++){const m=d===r&&f===o&&p===l,y=this.maze.get(d,f,p)===this.mazeGen.TYPES.EXIT;if(this.maze.get(d,f,p)===this.mazeGen.TYPES.PATH&&p%2!==0&&!m&&!y){if(p===a&&Math.abs(d-e)+Math.abs(f-n)<=5)continue;i.push({x:d,y:f,z:p})}}if(i.length===0)for(let d=0;d<t;d++)for(let f=0;f<t;f++)for(let p=0;p<t;p++){const m=this.maze.get(d,f,p),y=d===r&&f===o&&p===l,T=m===this.mazeGen.TYPES.EXIT;if(m!==this.mazeGen.TYPES.WALL&&!T&&p%2!==0&&!y&&(d!==e||f!==n||p!==a)){if(p===a&&Math.abs(d-e)+Math.abs(f-n)<=5)continue;i.push({x:d,y:f,z:p})}}for(let d=i.length-1;d>0;d--){const f=Math.floor(Math.random()*(d+1));[i[d],i[f]]=[i[f],i[d]]}let c=0;for(const d of this.dyingHunters)if(c<i.length){const f=i[c++];d.x=f.x,d.y=f.y,d.z=f.z,d.visualX=f.x,d.visualY=f.y,d.visualZ=f.z,d.lastPos={x:f.x,y:f.y,z:f.z},d.state="WANDERING",d.visitedNodes.clear(),d.visitedNodes.add(`${f.x},${f.y},${f.z}`),d.history=[],d.pathToTarget=[]}}triggerVictory(){this.isGameOver=!0,this.isVictory=!0,this.isTutorialMode||ml();let t=!1;if(this.isTutorialMode&&this.currentTutorialId){const e=Di.findIndex(n=>n.id===this.currentTutorialId);t=e!==-1&&e+1<Di.length}const i=this.getMapVisitedPercentage();this.ui.showVictory(i,this.deathsCount,this.degree,this.elapsedTime,this.manaCollected,this.totalMana,this.isTutorialMode,t)}triggerDeath(){this.isGameOver=!0,this.deathsCount++,this.hideGameUI(),this.ui.showInfoBanner(Dt("msgKeyDropped")),this.deathAnimation={active:!0,hunter:null,playerPos:{x:this.player.x,y:this.player.y,z:this.player.z},elapsed:0,duration:1.8,screenFilled:!1,reversing:!1,delayElapsed:0,delayDuration:1.5,glitchElapsed:0,glitchDuration:1.5,uiFade:0,uiTriggered:!1}}collectKey(t,i,e){if(this.maze.set(t,i,e,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${t},${i},${e}`),this.keysCollected++,this.staticMapCacheDirty=!0,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.ui.showInfoBanner(Dt("msgKeySecured",{collected:this.keysCollected,total:this.totalKeys})),this.keysCollected===this.totalKeys&&(this.ui.showInfoBanner(Dt("msgExitUnlocked")),this.exitMesh)){this.exitMesh.material.color.setHex(W.COLORS.THREE_EXIT),this.exitMesh.material.emissive.setHex(W.COLORS.THREE_EXIT),this.exitMesh.material.emissiveIntensity=.5;const n=this.exitMesh.children[0];n&&this.exitMesh.remove(n)}}collectMana(t,i,e){this.maze.set(t,i,e,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${t},${i},${e}`),this.manaCollected++,this.staticMapCacheDirty=!0,this.ui.updateManaHUD(this.manaCollected,this.totalMana),this.ui.showInfoBanner(Dt("msgManaSecured",{collected:this.manaCollected,total:this.totalMana})),this.manaCollected%10===0&&(this.jellyPortalCount++,this.ui.updateJellyPortalHUD(this.jellyPortalCount),setTimeout(()=>{this.ui.showInfoBanner(Dt("msgJellyPortalEarned"))},1200))}triggerLockedExitWarning(){const t=Date.now();if(!this.lastLockedWarningTime||t-this.lastLockedWarningTime>1500){this.lastLockedWarningTime=t;const i=this.totalKeys-this.keysCollected;this.ui.showInfoBanner(Dt("msgKeysRemaining",{count:i}))}}restoreFromSave(t){this.seed=t.seed,gm(this.mazeGen,t.matrix),this.player.x=t.player.x,this.player.y=t.player.y,this.player.z=t.player.z,this.player.dir=t.player.dir;const i=this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.hunterBehavior&&this.currentTutorialStage.hunterBehavior.fixed;for(let d=0;d<this.hunters.length&&d<t.hunters.length;d++)if(i&&this.mazeGen.tutorialHunterSpawns&&this.mazeGen.tutorialHunterSpawns[d]){const f=this.mazeGen.tutorialHunterSpawns[d],p=this.hunters[d];p.x=f.x,p.y=f.y,p.z=f.z,p.visualX=f.x,p.visualY=f.y,p.visualZ=f.z,p.state="WANDERING",p.lastPos={x:f.x,y:f.y,z:f.z},p.visitedNodes.clear(),p.visitedNodes.add(`${f.x},${f.y},${f.z}`),p.history=[],p.pathToTarget=[],p.respawnThresholdPercentage=null}else mm(this.hunters[d],t.hunters[d]);this.discoveredTeleports=new Set(t.discoveredTeleports),this.inactiveTeleportPos=t.inactiveTeleportPos,this.teleportCooldownTicks=t.teleportCooldownTicks,this.allTeleports=[];const e=this.mazeGen.size,n=this.mazeGen.TYPES;for(let d=0;d<e;d++)for(let f=0;f<e;f++)for(let p=0;p<e;p++){const m=this.maze.get(p,f,d);(m===n.TELEPORT||m===n.JELLY_PORTAL)&&this.allTeleports.push({x:p,y:f,z:d})}this.allTeleports.sort((d,f)=>d.z!==f.z?d.z-f.z:d.y!==f.y?d.y-f.y:d.x-f.x);const a=Math.floor(this.player.x),r=Math.floor(this.player.y),o=this.player.z;this.selectedTeleportIndex=this.allTeleports.findIndex(d=>d.x===a&&d.y===r&&d.z===o),this.selectedTeleportIndex===-1&&(this.selectedTeleportIndex=0),this.keysCollected=t.keysCollected!==void 0?t.keysCollected:0,this.totalKeys=t.totalKeys!==void 0?t.totalKeys:W.getKeyCount(this.degree),this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.manaCollected=t.manaCollected!==void 0?t.manaCollected:0,this.totalMana=t.totalMana!==void 0?t.totalMana:0,this.ui.updateManaHUD(this.manaCollected,this.totalMana),this.jellyPortalCount=t.jellyPortalCount!==void 0?t.jellyPortalCount:this.totalMana<10?1:0,this.ui.updateJellyPortalHUD(this.jellyPortalCount),this.totalPathfinders=t.totalPathfinders!==void 0?t.totalPathfinders:W.getPathfinderCount(this.degree),this.pathfindersRemaining=t.pathfindersRemaining!==void 0?t.pathfindersRemaining:this.totalPathfinders,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders);const l=this.degree>=12?10:this.degree>=8?20:0,c=this.getMapVisitedPercentage();this.pathfinderRewardsGranted=t.pathfinderRewardsGranted!==void 0?t.pathfinderRewardsGranted:l>0?Math.floor(c/l):0,this.revealedPathSet=new Set(t.revealedPathSet),this.mapCompletion100Triggered=t.mapCompletion100Triggered||!1,this.dialogueUpTriggered=t.dialogueUpTriggered||!1,this.dialogueDownTriggered=t.dialogueDownTriggered||!1,this.dialogueWhichWayTriggered=t.dialogueWhichWayTriggered||!1,this.dialogueDetectedTriggered=t.dialogueDetectedTriggered||!1,this.deathsCount=t.deathsCount!==void 0?t.deathsCount:0,this.elapsedTime=t.elapsedTime!==void 0?t.elapsedTime:0,this.populateVisitedCells(),this.lastSavePos=t.lastSavePos!==void 0&&t.lastSavePos!==null?{x:t.lastSavePos.x,y:t.lastSavePos.y,z:t.lastSavePos.z}:null,this.hunterOnSameFloorDetected=t.hunterOnSameFloorDetected||!1,this.hasSavePoint=!0,this.lastPlayerCell={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.populateFullyRevealedCells(this.player.z),this.exitPathfinderUnlocked=this.checkExitNeighborVisited()}checkHunterCollision(){if(this.deathAnimation&&this.deathAnimation.active)return;const t=Math.floor(this.player.x),i=Math.floor(this.player.y),e=this.player.z,n=Math.floor(this.mazeGen.startPos.x),a=Math.floor(this.mazeGen.startPos.y),r=this.mazeGen.startPos.z,o=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===n&&this.inactiveTeleportPos.y===a&&this.inactiveTeleportPos.z===r;if(!(t===n&&i===a&&e===r&&!o)){for(const l of this.hunters)if(!(l.state==="SLEEP"||l.state==="DEAD_BY_JELLY")&&l.x===t&&l.y===i&&l.z===e){l.visualX=l.x,l.visualY=l.y,l.visualZ=l.z,this.isGameOver=!0,this.deathsCount++,this.hideGameUI(),this.ui.showInfoBanner(Dt("msgKeyDropped")),this.deathAnimation={active:!0,hunter:l,playerPos:{x:this.player.x,y:this.player.y,z:this.player.z},elapsed:0,duration:1.8,screenFilled:!1,reversing:!1,delayElapsed:0,delayDuration:1.5,glitchElapsed:0,glitchDuration:1.5,uiFade:0,uiTriggered:!1};return}}}hideGameUI(){this.ui.hideGameUI(),this.ui.hidePause(),this.canvas.classList.remove("hunted-map-effect"),this.isMap3DActive=!1}initThree(){this.scene=new Zp,this.camera=new Be(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new cl({antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.appendChild(this.renderer.domElement),this.controls=new im(this.camera,this.renderer.domElement),this.controls.enableDamping=!0}init(t=null){this.handleKeyDownExtra=l=>{const c=l.key.toLowerCase();if(this.pathfinderConfirmTarget){if(c==="enter"||c===" "||c==="y"){const v=this.pathfinderConfirmTarget;this.pathfinderConfirmTarget=null;const g=document.getElementById("pathfinder-confirm-modal");g&&g.classList.add("hidden"),this.triggerPathReveal(v.x,v.y,v.z,!0),l.preventDefault()}if(c==="escape"||c==="backspace"){this.pathfinderConfirmTarget=null;const v=document.getElementById("pathfinder-confirm-modal");v&&v.classList.add("hidden"),l.preventDefault()}return}if(c==="escape"){if(this.isMap3DActive){this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D(),l.preventDefault();return}this.togglePause();return}if(this.isPaused)return;const d=Math.floor(this.player.x),f=Math.floor(this.player.y),p=this.player.z,m=this.maze.get(d,f,p),y=m===this.mazeGen.TYPES.JELLY_PORTAL,T=m===this.mazeGen.TYPES.TELEPORT||y,h=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===d&&this.inactiveTeleportPos.y===f&&this.inactiveTeleportPos.z===p,u=T&&this.discoveredTeleports.has(`${d},${f},${p}`);if(!this.isMap3DActive&&u&&!h&&(c==="q"||c==="e"||c==="m"||c===" "||c==="enter")){l.preventDefault(),this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(Dt("msgNoOtherActiveTeleport"));return}if(c==="m"&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D()),c==="z"&&this.toggleZoom(),this.isMap3DActive&&!this.isIntroPlaying){if(this.isTeleportMode){if(this.teleportConfirmModalActive){if((c==="a"||c==="arrowleft"||c==="d"||c==="arrowright")&&(this.teleportModalSelection=this.teleportModalSelection==="go"?"cancel":"go",l.preventDefault()),c==="enter"||c===" "||c==="y"){if(this.teleportModalSelection==="go"&&this.selectedTeleportIndex!==null){const g=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(g.x,g.y,g.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;l.preventDefault()}(c==="escape"||c==="backspace")&&(this.teleportConfirmModalActive=!1,l.preventDefault());return}const v=this.getSelectableTeleportIndices();if(v.length>0){let g=v.indexOf(this.selectedTeleportIndex);if(c==="a"||c==="arrowleft"){g=(g-1+v.length)%v.length,this.selectedTeleportIndex=v[g];const _=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=_.z,this.mapCursor={x:_.x,y:_.y,z:_.z},l.preventDefault()}if(c==="d"||c==="arrowright"){g=(g+1)%v.length,this.selectedTeleportIndex=v[g];const _=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=_.z,this.mapCursor={x:_.x,y:_.y,z:_.z},l.preventDefault()}if((c==="enter"||c===" "||c==="y")&&this.selectedTeleportIndex!==null){const _=this.allTeleports[this.selectedTeleportIndex],E=Math.floor(this.player.x),S=Math.floor(this.player.y),x=this.player.z,O=_&&_.x===E&&_.y===S&&_.z===x;_&&!O&&(this.teleportTo(_.x,_.y,_.z),this.toggleTeleportMap(!1)),l.preventDefault()}}(c==="escape"||c==="backspace")&&(this.toggleTeleportMap(!1),l.preventDefault());return}if((c==="q"||c==="pagedown")&&(this.activeMapFloor-2>=1&&(this.activeMapFloor-=2),l.preventDefault()),(c==="e"||c==="pageup")&&(this.activeMapFloor+2<=this.mazeGen.size-2&&(this.activeMapFloor+=2),l.preventDefault()),(c==="a"||c==="arrowleft")&&(this.navigateCursor("left"),l.preventDefault()),(c==="d"||c==="arrowright")&&(this.navigateCursor("right"),l.preventDefault()),(c==="w"||c==="arrowup")&&(this.navigateCursor("up"),l.preventDefault()),(c==="s"||c==="arrowdown")&&(this.navigateCursor("down"),l.preventDefault()),c==="enter"||c===" "||c==="y"){const v=this.mapCursor.x,g=this.mapCursor.y,_=this.mapCursor.z;this.getInteractiveElements(this.activeMapFloor).some(x=>x.x===v&&x.y===g&&x.z===_)&&this.triggerPathReveal(v,g,_),l.preventDefault()}}},this.handleResize=()=>this.resize(),this.handleKeyboardDetection=()=>{this.lastInputDevice!=="keyboard"&&(this.lastInputDevice="keyboard",this.ui.updateControlsHint("keyboard",this.mazeGen.size>11)),this.isMouseOrTouchDetected=!1},window.addEventListener("keydown",this.handleKeyDownExtra),window.addEventListener("keydown",this.handleKeyboardDetection),window.addEventListener("resize",this.handleResize);const i=document.getElementById("mobile-zoom-btn");i&&(i.onclick=l=>{l.stopPropagation(),!(Date.now()-this.lastTeleportCloseTime<500)&&this.toggleZoom()}),this.ui.uiMobileUp&&(this.ui.uiMobileUp.onclick=()=>{Date.now()-this.lastTeleportCloseTime<500||this.changeFloor(2)}),this.ui.uiMobileDown&&(this.ui.uiMobileDown.onclick=()=>{Date.now()-this.lastTeleportCloseTime<500||this.changeFloor(-2)}),this.ui.uiMobileMap&&(this.ui.uiMobileMap.onclick=()=>{if(Date.now()-this.lastTeleportCloseTime<500)return;if(this.isMap3DActive){this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D();return}const l=Math.floor(this.player.x),c=Math.floor(this.player.y),d=this.player.z,f=this.maze.get(l,c,d)===this.mazeGen.TYPES.JELLY_PORTAL,p=this.maze.get(l,c,d)===this.mazeGen.TYPES.TELEPORT||f,m=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===l&&this.inactiveTeleportPos.y===c&&this.inactiveTeleportPos.z===d;p&&!m?this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(Dt("msgNoOtherActiveTeleport")):this.toggleMap3D()});let e=!1,n=0,a=0;if(this.handlePointerDown=l=>{e=!1,n=l.clientX,a=l.clientY},this.handlePointerUp=l=>{const c=l.clientX-n,d=l.clientY-a;Math.sqrt(c*c+d*d)>5&&(e=!0)},this.handleCanvasClick=l=>{e||Date.now()-this.lastTeleportCloseTime<500||this.onCanvasClick(l)},this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerup",this.handlePointerUp),this.renderer.domElement.addEventListener("click",this.handleCanvasClick),this.resize(),this.updateFloorUI(),this.hideCanvasInstant(),t)this.restoreFromSave(t),this.playContinueAnimation();else if(this.isTutorialMode){this.isStoryActive=!1,this.isIntroPlaying=!1;const l=document.getElementById("map-area-container"),c=document.getElementById("left-hud-panel"),d=document.getElementById("right-hud-panel"),f=document.getElementById("bottom-hud-container");l&&l.classList.remove("hidden","intro-hidden"),c&&c.classList.remove("hidden","intro-hidden"),d&&d.classList.remove("hidden","intro-hidden"),f&&f.classList.remove("hidden","intro-hidden"),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1),this.ui.setMap3DVisible(!1),this.isMap3DActive=!1,this.staticMapCacheDirty=!0,this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2}else this.startStorytelling();this.loop();const r=this.mazeGen.size,o=document.getElementById("mobile-zoom-btn");r<=11?o&&o.classList.add("hidden"):o&&o.classList.remove("hidden"),this.ui.updateControlsHint(this.lastInputDevice,r>11)}hideCanvasInstant(){const t=document.getElementById("map-area-container"),i=document.getElementById("left-hud-panel"),e=document.getElementById("right-hud-panel"),n=document.getElementById("bottom-hud-container");t&&(t.style.transition="none",t.classList.remove("intro-reveal"),t.classList.add("intro-hidden"),t.offsetHeight,t.style.transition=""),i&&(i.style.transition="none",i.classList.remove("intro-reveal"),i.classList.add("intro-hidden"),i.offsetHeight,i.style.transition=""),e&&(e.style.transition="none",e.classList.remove("intro-reveal"),e.classList.add("intro-hidden"),e.offsetHeight,e.style.transition=""),n&&(n.style.transition="none",n.classList.remove("intro-reveal"),n.classList.add("intro-hidden"),n.offsetHeight,n.style.transition="")}drawElevator2D(t,i,e,n,a,r,o,l,c=!1,d=0){const f=i===Math.floor(o)&&e===Math.floor(l);if(f){const h=.85+.15*Math.sin(Date.now()/150);t.save(),t.globalAlpha=h}const p=a&&this.maze.get(i,e,d+1)===this.mazeGen.TYPES.ELEVATOR_VISITED,m=r&&this.maze.get(i,e,d-1)===this.mazeGen.TYPES.ELEVATOR_VISITED;if(c)if(a&&r){let h=!1,u=!1;if(this.activePathReveal){const S=this.activePathReveal.findIndex(x=>x.x===i&&x.y===e&&x.z===d);if(S!==-1&&S<this.activePathReveal.length-1){const x=this.activePathReveal[S+1];x.z>d&&(h=!0),x.z<d&&(u=!0)}}!h&&!u&&(h=this.revealedPathSet.has(`${i},${e},${d+1}`)||this.revealedPathSet.has(`${i},${e},${d+2}`),u=this.revealedPathSet.has(`${i},${e},${d-1}`)||this.revealedPathSet.has(`${i},${e},${d-2}`));const v=h||!h&&!u,g=u||!h&&!u;let _=v?W.COLORS.REVEALED_PATH:p?W.COLORS.NEON_UP:W.COLORS.NEON_UP_UNUSED,E=g?W.COLORS.REVEALED_PATH:m?W.COLORS.NEON_DOWN:W.COLORS.NEON_DOWN_UNUSED;this.isJellyChallengeActive&&(_="rgba(100, 100, 100, 0.8)",E="rgba(80, 80, 80, 0.8)"),t.fillStyle=_,t.fillRect(i*n,e*n,n,n/2),t.fillStyle=E,t.fillRect(i*n,e*n+n/2,n,n/2)}else{let h=W.COLORS.REVEALED_PATH;this.isJellyChallengeActive&&(h="rgba(90, 90, 90, 0.8)"),t.fillStyle=h,t.fillRect(i*n,e*n,n,n)}else if(a&&r){let h=p?W.COLORS.NEON_UP:W.COLORS.NEON_UP_UNUSED,u=m?W.COLORS.NEON_DOWN:W.COLORS.NEON_DOWN_UNUSED;this.isJellyChallengeActive&&(h="rgba(100, 100, 100, 0.8)",u="rgba(80, 80, 80, 0.8)"),t.fillStyle=h,t.fillRect(i*n,e*n,n,n/2),t.fillStyle=u,t.fillRect(i*n,e*n+n/2,n,n/2)}else if(a){let h=p?W.COLORS.NEON_UP:W.COLORS.NEON_UP_UNUSED;this.isJellyChallengeActive&&(h="rgba(90, 90, 90, 0.8)"),t.fillStyle=h,t.fillRect(i*n,e*n,n,n)}else{let h=m?W.COLORS.NEON_DOWN:W.COLORS.NEON_DOWN_UNUSED;this.isJellyChallengeActive&&(h="rgba(90, 90, 90, 0.8)"),t.fillStyle=h,t.fillRect(i*n,e*n,n,n)}const y=i*n+n/2,T=e*n+n/2;if(t.fillStyle="#000000",a&&r){const h=n*.28,u=T-n/5,v=T+n/5;t.beginPath(),t.moveTo(y,u-h/2),t.lineTo(y-h*.6,u+h/2),t.lineTo(y+h*.6,u+h/2),t.closePath(),t.fill(),t.beginPath(),t.moveTo(y,v+h/2),t.lineTo(y-h*.6,v-h/2),t.lineTo(y+h*.6,v-h/2),t.closePath(),t.fill()}else if(a){const h=n*.45;t.beginPath(),t.moveTo(y,T-h/2),t.lineTo(y-h*.6,T+h/2),t.lineTo(y+h*.6,T+h/2),t.closePath(),t.fill()}else{const h=n*.45;t.beginPath(),t.moveTo(y,T+h/2),t.lineTo(y-h*.6,T-h/2),t.lineTo(y+h*.6,T-h/2),t.closePath(),t.fill()}f&&t.restore()}drawCellShadow2D(t,i,e,n,a,r,o){if(r===4||!this.visitedCells.has(`${i},${e},${o}`))return;const c=(m,y)=>m<0||m>=a||y<0||y>=a?!1:this.isWallVisible(m,y,o),d=c(i,e+1),f=c(i+1,e),p=c(i+1,e+1);if(d||f||p){t.fillStyle="rgba(0, 0, 0, 0.4)";const m=n*W.SHADOW_SIZE_FACTOR;if(d&&t.fillRect(i*n,(e+1)*n-m,n,m),f){const y=d?n-m:n;t.fillRect((i+1)*n-m,e*n,m,y)}!d&&!f&&p&&t.fillRect((i+1)*n-m,(e+1)*n-m,m,m)}}updateRendererSize(){this.renderer&&(this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix())}resize(){const i=window.innerHeight>window.innerWidth?window.innerWidth*.82:window.innerHeight*.75;this.canvas.width=i,this.canvas.height=i,this.staticMapCacheDirty=!0,this.updateRendererSize()}getMapVisitedPercentage(){let t=0,i=0;const e=this.mazeGen.size,n=this.mazeGen.TYPES;for(let a=0;a<e;a++)for(let r=0;r<e;r++)for(let o=0;o<e;o++){const l=this.maze.get(a,r,o);if(l===n.WALL||l===n.EXIT||l===n.STATUE)continue;t++,(l===n.VISITED||l===n.START||l===n.ELEVATOR_VISITED||l===n.TELEPORT&&this.discoveredTeleports.has(`${a},${r},${o}`))&&i++}return t===0?0:Math.floor(i/t*100)}updateFloorUI(){const t=Math.floor(this.player.x),i=Math.floor(this.player.y),e=this.player.z,n=e+1<this.mazeGen.size&&this.maze.get(t,i,e+1)!==this.mazeGen.TYPES.WALL,a=e-1>=0&&this.maze.get(t,i,e-1)!==this.mazeGen.TYPES.WALL;this.ui.updateFloor(e,n,a);const r=this.getMapVisitedPercentage();this.ui.updateVisitedPercent(r),r===100&&!this.mapCompletion100Triggered&&(this.ui.showInfoBanner(Dt("msgWorldSaved")),this.mapCompletion100Triggered=!0),this.checkPathfinderRewards(r),this.getFloorVisitedPercentage(e)===100&&!this.completedFloors.has(e)&&this.triggerFloorCompletion(e)}checkPathfinderRewards(t){const i=this.degree>=12?10:this.degree>=8?20:0;if(i===0)return;this.pathfinderRewardsGranted===void 0&&(this.pathfinderRewardsGranted=0);const e=Math.floor(t/i);if(e>this.pathfinderRewardsGranted){const n=e-this.pathfinderRewardsGranted;this.pathfindersRemaining+=n,this.totalPathfinders+=n,this.pathfinderRewardsGranted=e,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),this.ui.showInfoBanner(Dt("msgFoundPathfinder")),ls(this)}}getTeleportCandidates(){const t=Math.floor(this.player.x),i=Math.floor(this.player.y),e=this.player.z;return Array.from(this.discoveredTeleports).map(n=>{const[a,r,o]=n.split(",").map(Number);return{x:a,y:r,z:o}}).filter(n=>!(n.x===t&&n.y===i&&n.z===e||this.inactiveTeleportPos&&this.inactiveTeleportPos.x===n.x&&this.inactiveTeleportPos.y===n.y&&this.inactiveTeleportPos.z===n.z))}getSelectableTeleportIndices(){const t=Math.floor(this.player.x),i=Math.floor(this.player.y),e=this.player.z;return this.allTeleports.map((n,a)=>({t:n,idx:a})).filter(n=>{const a=`${n.t.x},${n.t.y},${n.t.z}`,r=this.discoveredTeleports.has(a),o=this.inactiveTeleportPos&&n.t.x===this.inactiveTeleportPos.x&&n.t.y===this.inactiveTeleportPos.y&&n.t.z===this.inactiveTeleportPos.z,l=n.t.x===t&&n.t.y===i&&n.t.z===e;return r&&!o&&!l}).map(n=>n.idx)}updateGamepad(t){const i=navigator.getGamepads?navigator.getGamepads():[],e=i[0]||i.find(T=>T!==null);if(!e)return;const n=.25;(Math.abs(e.axes[0])>n||Math.abs(e.axes[1])>n||e.axes[2]!==void 0&&Math.abs(e.axes[2])>n||e.axes[3]!==void 0&&Math.abs(e.axes[3])>n||e.buttons.some(T=>T.pressed))&&(this.isMouseOrTouchDetected=!1,this.lastInputDevice!=="gamepad"&&(this.lastInputDevice="gamepad",this.ui.updateControlsHint("gamepad",this.mazeGen.size>11)));const r=e.axes[0],o=e.axes[1];let l=r<-n,c=r>n,d=o<-n,f=o>n;if(e.buttons[12]&&e.buttons[12].pressed&&(d=!0),e.buttons[13]&&e.buttons[13].pressed&&(f=!0),e.buttons[14]&&e.buttons[14].pressed&&(l=!0),e.buttons[15]&&e.buttons[15].pressed&&(c=!0),l?this.input.keys.arrowleft=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowleft=!1),c?this.input.keys.arrowright=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowright=!1),d?this.input.keys.arrowup=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowup=!1),f?this.input.keys.arrowdown=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowdown=!1),!this.prevGamepadButtons){this.prevGamepadButtons=e.buttons.map(T=>T.pressed);return}const p=T=>this.prevGamepadButtons[T],m=T=>e.buttons[T]&&e.buttons[T].pressed,y=T=>m(T)&&!p(T);if(this.pathfinderConfirmTarget){if(y(0)||y(2)){const T=this.pathfinderConfirmTarget;this.pathfinderConfirmTarget=null;const h=document.getElementById("pathfinder-confirm-modal");h&&h.classList.add("hidden"),this.triggerPathReveal(T.x,T.y,T.z,!0)}if(y(1)||y(8)){this.pathfinderConfirmTarget=null;const T=document.getElementById("pathfinder-confirm-modal");T&&T.classList.add("hidden")}this.prevGamepadButtons=e.buttons.map(T=>T.pressed);return}if(this.isStoryActive){if(y(9))this.skipStory();else if(!this.isPreloadingActive){for(let T=0;T<e.buttons.length;T++)if(T!==9&&y(T)){this.triggerAdvanceStory();break}}this.prevGamepadButtons=e.buttons.map(T=>T.pressed);return}if(y(9)){this.togglePause(),this.prevGamepadButtons=e.buttons.map(T=>T.pressed);return}if(this.isPaused){this.prevGamepadButtons=e.buttons.map(T=>T.pressed);return}if(this.isMap3DActive&&!this.isIntroPlaying){const T=m(7),h=m(6);if(T||h){const E=this.mazeGen.size;let S=window.innerWidth*.7/E;S=Math.max(20,Math.min(48,S));const x=S*this.mapZoom,O=x/2,M=x/4,A=O*5,k=window.innerWidth/2+this.mapPanOffsetX,U=window.innerHeight/2+this.mapPanOffsetY,X=this.mapCursor.x,I=this.mapCursor.y,B=this.mapCursor.z,Y=this.visualActiveFloor,$=(X-I)*O+k,H=(X+I)*M-(B-Y)*A+U,Z=this.mapZoom,it=1.025;let j=T?Z*it:Z/it;if(j=Math.max(.5,Math.min(4,j)),j!==Z){const V=j/Z;this.mapPanOffsetX=$-($-(window.innerWidth/2+this.mapPanOffsetX))*V-window.innerWidth/2,this.mapPanOffsetY=H-(H-(window.innerHeight/2+this.mapPanOffsetY))*V-window.innerHeight/2,this.mapZoom=j}}const u=l&&(!this.prevGamepadStick||!this.prevGamepadStick.left),v=c&&(!this.prevGamepadStick||!this.prevGamepadStick.right),g=d&&(!this.prevGamepadStick||!this.prevGamepadStick.up),_=f&&(!this.prevGamepadStick||!this.prevGamepadStick.down);if(this.prevGamepadStick={left:l,right:c,up:d,down:f},this.isTeleportMode){if(this.teleportConfirmModalActive){if((u||y(14)||v||y(15))&&(this.teleportModalSelection=this.teleportModalSelection==="go"?"cancel":"go"),y(0)||y(3)||y(2))if(this.teleportModalSelection==="go"){const E=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(E.x,E.y,E.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;y(1)&&(this.teleportConfirmModalActive=!1)}else{const E=this.getSelectableTeleportIndices();if(E.length>0){let S=E.indexOf(this.selectedTeleportIndex);if(u||y(14)){S=(S-1+E.length)%E.length,this.selectedTeleportIndex=E[S];const x=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=x.z,this.mapCursor={x:x.x,y:x.y,z:x.z}}if(v||y(15)){S=(S+1)%E.length,this.selectedTeleportIndex=E[S];const x=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=x.z,this.mapCursor={x:x.x,y:x.y,z:x.z}}if(y(0)||y(3)||y(2)){const x=this.allTeleports[this.selectedTeleportIndex],O=Math.floor(this.player.x),M=Math.floor(this.player.y),A=this.player.z,k=x&&x.x===O&&x.y===M&&x.z===A;x&&!k&&(this.teleportTo(x.x,x.y,x.z),this.toggleTeleportMap(!1))}}(y(1)||y(8))&&this.toggleTeleportMap(!1)}this.prevGamepadButtons=e.buttons.map(E=>E.pressed);return}if((u||y(14))&&this.navigateCursor("left"),(v||y(15))&&this.navigateCursor("right"),(g||y(12))&&this.navigateCursor("up"),(_||y(13))&&this.navigateCursor("down"),(y(0)||y(4))&&this.activeMapFloor-2>=1&&(this.activeMapFloor-=2),y(5)&&this.activeMapFloor+2<=this.mazeGen.size-2&&(this.activeMapFloor+=2),y(3)||y(2)){const E=this.mapCursor.x,S=this.mapCursor.y,x=this.mapCursor.z;this.getInteractiveElements(this.activeMapFloor).some(A=>A.x===E&&A.y===S&&A.z===x)&&this.triggerPathReveal(E,S,x)}(y(1)||y(8))&&this.toggleMap3D(),this.prevGamepadButtons=e.buttons.map(E=>E.pressed);return}if(!this.isMap3DActive&&!this.isTeleportMode){const T=Math.floor(this.player.x),h=Math.floor(this.player.y),u=this.player.z,v=this.maze.get(T,h,u),g=v===this.mazeGen.TYPES.JELLY_PORTAL,_=v===this.mazeGen.TYPES.TELEPORT||g,E=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===T&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===u;if(_&&this.discoveredTeleports.has(`${T},${h},${u}`)&&!E&&(y(0)||y(2)||y(3)||y(8))){this.discoveredTeleports.size>=2?(this.toggleTeleportMap(!0),this.gamepadTeleportSelectedIndex=0):this.ui.showInfoBanner(Dt("msgNoOtherActiveTeleport")),this.prevGamepadButtons=e.buttons.map(x=>x.pressed);return}}if(y(0)){if(this.isTeleportMode){const h=this.getTeleportCandidates()[this.gamepadTeleportSelectedIndex];h&&this.teleportTo(h.x,h.y,h.z)}else if(!this.isMap3DActive){const T=Math.floor(this.player.x),h=Math.floor(this.player.y),u=this.player.z,v=u>0&&this.maze.get(T,h,u-1)!==0,_=this.maze.get(T,h,u)===this.mazeGen.TYPES.TELEPORT,E=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===T&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===u;(!(_&&this.discoveredTeleports.has(`${T},${h},${u}`))||E)&&v&&this.changeFloor(-2)}}if(y(1)&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleZoom()),y(2)&&!this.isTeleportMode&&!this.isMap3DActive){const T=Math.floor(this.player.x),h=Math.floor(this.player.y),u=this.player.z,v=this.maze.get(T,h,u),g=v===this.mazeGen.TYPES.JELLY_PORTAL,_=v===this.mazeGen.TYPES.TELEPORT||g,E=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===T&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===u;_&&this.discoveredTeleports.has(`${T},${h},${u}`)&&!E&&(this.discoveredTeleports.size>=2?(this.toggleTeleportMap(!0),this.gamepadTeleportSelectedIndex=0):this.ui.showInfoBanner(Dt("msgNoOtherActiveTeleport")))}if(y(3)&&!this.isTeleportMode&&!this.isMap3DActive){const T=Math.floor(this.player.x),h=Math.floor(this.player.y),u=this.player.z,v=u<this.mazeGen.size-1&&this.maze.get(T,h,u+1)!==0,_=this.maze.get(T,h,u)===this.mazeGen.TYPES.TELEPORT,E=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===T&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===u;(!(_&&this.discoveredTeleports.has(`${T},${h},${u}`))||E)&&v&&this.changeFloor(2)}if(y(8)&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D()),this.isTeleportMode){const T=y(4)||y(14),h=y(5)||y(15);if(T||h){const u=this.getTeleportCandidates();u.length>0&&(T?this.gamepadTeleportSelectedIndex=(this.gamepadTeleportSelectedIndex-1+u.length)%u.length:this.gamepadTeleportSelectedIndex=(this.gamepadTeleportSelectedIndex+1)%u.length)}}y(5)&&!this.isTeleportMode&&!this.isMap3DActive&&this.tryActivateJellyPortal(),this.prevGamepadButtons=e.buttons.map(T=>T.pressed)}queueNotification(t){this.notificationQueue.push(t)}updateNotification(t){if(!this.activeNotification){if(this.notificationQueue.length>0){const e=this.notificationQueue.shift();this.activeNotification={text:e,displayText:"",state:"OPENING",widthProgress:0,typeTimer:0,charIndex:0,waitTimer:0,closeProgress:1}}return}const i=this.activeNotification;i.state==="OPENING"?(i.widthProgress+=t/.15,i.widthProgress>=1&&(i.widthProgress=1,i.state="TYPING")):i.state==="TYPING"?(i.typeTimer+=t,i.typeTimer>=.025&&(i.typeTimer=0,i.charIndex++,i.displayText=i.text.substring(0,i.charIndex),i.charIndex>=i.text.length&&(i.state="WAITING",i.waitTimer=0))):i.state==="WAITING"?(this.isZoomTransitionActive||(i.waitTimer+=t),i.waitTimer>=1&&(i.state="CLOSING",i.closeProgress=1)):i.state==="CLOSING"&&(i.closeProgress-=t/.15,i.closeProgress<=0&&(i.closeProgress=0,this.activeNotification=null))}update(t){if(this.isGameOver||this.isDestroyed||!t)return;if(this.teleportAnim&&this.teleportAnim.active){if(this.teleportAnim.elapsed+=t,this.auraTime=(this.auraTime||0)+t,this.teleportAnim.elapsed>=this.teleportAnim.duration)if(this.teleportAnim.stage==="OUT"){this.player.x=this.teleportAnim.targetX,this.player.y=this.teleportAnim.targetY,this.player.z=this.teleportAnim.targetZ,this.activeMapFloor=this.teleportAnim.targetZ,this.visualActiveFloor=this.teleportAnim.targetZ,this.lastPlayerCell={x:Math.floor(this.teleportAnim.targetX),y:Math.floor(this.teleportAnim.targetY),z:this.teleportAnim.targetZ};const o=Math.floor(this.player.x),l=Math.floor(this.player.y),c=this.player.z;this.maze.get(o,l,c)===this.mazeGen.TYPES.PATH&&(this.maze.set(o,l,c,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${o},${l},${c}`)),this.updateFloorUI(),this.staticMapCacheDirty=!0,this.lastSavePos={x:this.player.x,y:this.player.y,z:this.player.z},this.triggerSave(),this.maze.get(o,l,c)===this.mazeGen.TYPES.JELLY_PORTAL?this.ui.showInfoBanner(Dt("msgJellyPortalNotSafe")):this.ui.showInfoBanner(Dt("msgSafePointTeleport")),this.teleportAnim.stage="IN",this.teleportAnim.elapsed=0}else this.teleportAnim=null;this.updateNotification(t),this.updateGamepad(t);return}if(this.jellyPortalFreezeTimer>0){this.jellyPortalFreezeTimer-=t,this.jellyPortalResetElapsed+=t,this.jellyPortalFreezeTimer<=0&&(this.jellyPortalFreezeTimer=0,this.updateGameContainerBackground(),this.executeJellyPortalReset(Math.floor(this.player.x),Math.floor(this.player.y),this.player.z),this.jellyPortalResetCells.clear()),this.updateNotification(t),this.updateGamepad(t);return}if(!this.isPaused&&!this.isIntroPlaying&&!this.isStoryActive){this.elapsedTime+=t,this.updateJellyChallenge(t);const o=Math.floor(this.player.x),l=Math.floor(this.player.y),c=this.player.z,d=this.maze.get(o,l,c),f=o===Math.floor(this.mazeGen.startPos.x)&&l===Math.floor(this.mazeGen.startPos.y)&&c===this.mazeGen.startPos.z,m=(d===this.mazeGen.TYPES.TELEPORT||d===this.mazeGen.TYPES.START||f)&&d!==this.mazeGen.TYPES.JELLY_PORTAL?1:0;this.auraHeight<m?this.auraHeight=Math.min(m,this.auraHeight+t*4):this.auraHeight>m&&(this.auraHeight=Math.max(m,this.auraHeight-t*4)),this.auraTime=(this.auraTime||0)+t}if(this.isStoryActive){this.updateGamepad(t),this.updateStory(t);return}if(this.isZoomTransitionActive&&(this.zoomTransitionTimer-=t,this.zoomTransitionTimer<=0&&(this.isZoomTransitionActive=!1,this.zoomTransitionTimer=0)),this.updateNotification(t),this.updateGamepad(t),this.isPaused)return;this.isIntroPlaying||this.hunters.some(l=>l.state!=="SLEEP"&&l.z===this.player.z)&&(this.hunterOnSameFloorDetected||(this.ui.showInfoBanner(Dt("msgDidYouHearThat")),this.hunterOnSameFloorDetected=!0)),this.hunters.some(o=>o.state==="SLEEP")&&this.getMapVisitedPercentage()>=10&&this.wakeHunters();const i=this.getMapVisitedPercentage(),e=this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.hunterBehavior&&this.currentTutorialStage.hunterBehavior.respawn===!1;for(const o of this.hunters)o.state==="DEAD_BY_JELLY"&&o.respawnThresholdPercentage!==null&&!e&&i>=o.respawnThresholdPercentage&&(this.respawnSingleHunter(o),this.ui.showInfoBanner(Dt("msgHunterReturned")));const a=1e3/W.HUNTER_SPEED*t;for(const o of this.hunters)o.visualX===null&&(o.visualX=o.x),o.visualY===null&&(o.visualY=o.y),o.visualZ===null&&(o.visualZ=o.z),!(o.state==="DEAD_BY_JELLY"||o.x===null||o.y===null||o.z===null)&&(o.visualX=la(o.visualX,o.x,a),o.visualY=la(o.visualY,o.y,a),o.visualZ=la(o.visualZ,o.z,a*2),o.generateCloudTexture(t));if(this.isMap3DActive){this.controls&&this.controls.update();const o=this.mazeGen.size,l=this.isTeleportMode?.25:1;for(const c of this.hunterMeshes){const d=c.hunter,f=c.mesh;if(d.state==="DEAD_BY_JELLY"){f.visible=!1;continue}if(f.visible=!0,d.visualX===null||d.visualZ===null||d.visualY===null)continue;f.position.set(d.visualX-o/2,(d.visualZ-o/2)*this.vScale,d.visualY-o/2);const p=d.jellyTime;let m=1+Math.sin(p*1.2)*.07,y=1+Math.cos(p*.8)*.07,T=1+Math.sin(p*1.5)*.07;if(d.state==="DYING"){const E=1-Math.min(1,this.jellyPortalResetElapsed/this.jellyPortalResetDuration);m*=E,y*=E,T*=E;const S=(Math.random()-.5)*.15,x=(Math.random()-.5)*.15,O=(Math.random()-.5)*.15;f.position.add({x:S,y:x,z:O})}if(c.coreMesh&&(c.coreMesh.scale.set(m,y,T),c.coreMesh.material)){let _=(.8+.2*Math.sin(p*3)+(Math.random()<.1?(Math.random()-.5)*.4:0))*l;if(d.state==="DYING"){const E=Math.min(1,this.jellyPortalResetElapsed/this.jellyPortalResetDuration);_*=1-E}c.coreMesh.material.emissiveIntensity=_}c.particles&&c.particles.forEach(_=>{const E=_.userData;E.angle+=E.speed*t;const S=Math.cos(E.angle)*E.radius,x=Math.sin(E.angle)*E.radius,O=Math.sin(E.angle*2+E.phaseY)*.25;let M=0,A=0,k=0;Math.random()<.15?(M=(Math.random()-.5)*.12,A=(Math.random()-.5)*.12,k=(Math.random()-.5)*.12,_.scale.set(1.4+Math.random()*.4,.6+Math.random()*.3,1.4+Math.random()*.4)):_.scale.set(1,1,1),_.position.set(S+M,O+A,x+k)});const h=d.x-d.visualX,u=d.y-d.visualY,v=Math.sqrt(h*h+u*u),g=Math.max(0,Math.min(1,1-v));if(d.lastPos&&(d.lastPos.x!==d.x||d.lastPos.y!==d.y)){c.trail1.position.set(d.lastPos.x-o/2,(d.lastPos.z-o/2)*this.vScale,d.lastPos.y-o/2),c.trail1.visible=!0;const _=d.jellyTime-.2,E=.95-g*.47,S=E*(1+Math.sin(_*1.2)*.07),x=E*(1+Math.cos(_*.8)*.07),O=E*(1+Math.sin(_*1.5)*.07);c.trail1.scale.set(S,x,O),c.trail1.material&&(c.trail1.material.opacity=(.4-g*.2)*l)}else c.trail1.visible=!1;if(d.history&&d.history.length===2){const _=d.history[0];c.trail2.position.set(_.x-o/2,(_.z-o/2)*this.vScale,_.y-o/2);const E=.48*(1-g);if(E>.02){c.trail2.visible=!0;const S=d.jellyTime-.4,x=E*(1+Math.sin(S*1.2)*.07),O=E*(1+Math.cos(S*.8)*.07),M=E*(1+Math.sin(S*1.5)*.07);c.trail2.scale.set(x,O,M),c.trail2.material&&(c.trail2.material.opacity=.2*(1-g)*l)}else c.trail2.visible=!1}else c.trail2.visible=!1}if(this.keyMeshes)for(const c of this.keyMeshes)c.rotation.y+=1.5*t,c.rotation.x+=.5*t;if(this.isTeleportMode&&this.teleportMeshes&&this.gamepadTeleportSelectedIndex!==void 0){const d=this.getTeleportCandidates()[this.gamepadTeleportSelectedIndex];this.teleportMeshes.forEach(f=>{const{gridX:p,gridY:m,gridZ:y}=f.userData;if(d&&p===d.x&&m===d.y&&y===d.z){const h=1.3+.25*Math.sin(Date.now()/100);f.scale.set(h,h,h),f.material&&f.material.emissive&&(f.material.emissive.setHex(16755200),f.material.emissiveIntensity=3.5)}else{const h=p===Math.floor(this.player.x)&&m===Math.floor(this.player.y)&&y===this.player.z,u=this.teleportCooldownTicks>0;let v=1;if(h&&(v=1.4),f.scale.set(v,v,v),f.material&&f.material.emissive)if(u)f.material.color.setHex(4473924),f.material.emissive.setHex(4473924),f.material.emissiveIntensity=0,f.material.opacity=.4;else if(h)f.material.color.setHex(65535),f.material.emissive.setHex(65535),f.material.emissiveIntensity=3,f.material.opacity=.5;else if(p===Math.floor(this.mazeGen.startPos.x)&&m===Math.floor(this.mazeGen.startPos.y)&&y===this.mazeGen.startPos.z)f.material.color.setHex(W.COLORS.THREE_START),f.material.emissive.setHex(W.COLORS.THREE_START),f.material.emissiveIntensity=this.isTeleportMode?2.5:.5,f.material.opacity=this.isTeleportMode?.95:.8;else{const E=this.maze.get(p,m,y)===this.mazeGen.TYPES.JELLY_PORTAL?W.COLORS.THREE_JELLY_PORTAL:W.COLORS.THREE_TELEPORT;f.material.color.setHex(E),f.material.emissive.setHex(E),f.material.emissiveIntensity=2.5,f.material.opacity=.95}}})}}if(!this.isMap3DActive&&!this.isZoomTransitionActive){let o=0,l=0;const f=1e3/W.HUNTER_SPEED*W.MOVE_SPEED_FACTOR*t;let p=0,m=0;if(this.input.touchMoveVector?(p=this.input.touchMoveVector.x,m=this.input.touchMoveVector.y):((this.input.keys.w||this.input.keys.arrowup)&&(m-=1),(this.input.keys.s||this.input.keys.arrowdown)&&(m+=1),(this.input.keys.a||this.input.keys.arrowleft)&&(p-=1),(this.input.keys.d||this.input.keys.arrowright)&&(p+=1)),p!==0||m!==0){const x=Math.sqrt(p*p+m*m);o=p/x*f,l=m/x*f,this.player.dir=Math.atan2(l,o)}let y=!1;if(o!==0||l!==0){y=!0;const x=.01,O=Math.abs(o)>x,M=Math.abs(l)>x;O&&M?(this.playerSide=o>0?"right":"left",this.playerVertical=l>0?"down":"up"):O?this.playerSide=o>0?"right":"left":M&&(this.playerVertical=l>0?"down":"up")}if(y?(this.playerWalkCycle=(this.playerWalkCycle||0)+t*18,this.playerSquashTargetX=1+Math.sin(this.playerWalkCycle)*.15,this.playerSquashTargetY=1-Math.sin(this.playerWalkCycle)*.15):(this.playerSquashTargetX=1,this.playerSquashTargetY=1),this.playerSquashX=this.playerSquashX||1,this.playerSquashY=this.playerSquashY||1,this.playerSquashX+=(this.playerSquashTargetX-this.playerSquashX)*.25,this.playerSquashY+=(this.playerSquashTargetY-this.playerSquashY)*.25,o!==0||l!==0){const x=Math.floor(this.player.x),O=Math.floor(this.player.y),M=this.player.x+o,A=this.player.y+l,k=(V,F,K)=>{const nt=this.maze.get(V,F,K);return nt===this.mazeGen.TYPES.WALL||nt===this.mazeGen.TYPES.STATUE?!1:nt===this.mazeGen.TYPES.EXIT&&this.keysCollected<this.totalKeys?(this.triggerLockedExitWarning(),!1):!0},U=W.PLAYER_COLLISION_RADIUS,X=W.PLAYER_COLLISION_OFFSET_X||0,I=W.PLAYER_COLLISION_OFFSET_Y||0,B=(V,F,K)=>{const nt=Math.floor(V+X-U),_t=Math.floor(V+X+U),St=Math.floor(F+I-U),Nt=Math.floor(F+I+U);for(let Rt=nt;Rt<=_t;Rt++)for(let R=St;R<=Nt;R++)if(Rt<0||Rt>=this.mazeGen.size||R<0||R>=this.mazeGen.size||!k(Rt,R,K))return!1;return!0};B(M,this.player.y,this.player.z)&&(this.player.x=M),B(this.player.x,A,this.player.z)&&(this.player.y=A);const Y=Math.floor(this.player.x),$=Math.floor(this.player.y),H=this.player.z;if(Y!==x||$!==O){const V=this.maze.get(x,O,H);if(V===this.mazeGen.TYPES.VISITED||V===this.mazeGen.TYPES.START||V===this.mazeGen.TYPES.TELEPORT){const K=H+1<this.mazeGen.size&&this.maze.get(Y,$,H+1)!==this.mazeGen.TYPES.WALL,nt=H-1>=0&&this.maze.get(Y,$,H-1)!==this.mazeGen.TYPES.WALL;K&&nt?this.dialogueWhichWayTriggered||(this.ui.showInfoBanner(Dt("msgWhichWay")),this.dialogueWhichWayTriggered=!0):K?this.dialogueUpTriggered||(this.ui.showInfoBanner(Dt("msgElevatorUp")),this.dialogueUpTriggered=!0):nt&&(this.dialogueDownTriggered||(this.ui.showInfoBanner(Dt("msgElevatorDown")),this.dialogueDownTriggered=!0))}}const it=(V,F,K)=>{const nt=this.maze.get(V,F,K);(nt===this.mazeGen.TYPES.PATH||nt===this.mazeGen.TYPES.KEY||nt===this.mazeGen.TYPES.MANA)&&(nt===this.mazeGen.TYPES.KEY?this.collectKey(V,F,K):nt===this.mazeGen.TYPES.MANA?this.collectMana(V,F,K):(this.maze.set(V,F,K,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${V},${F},${K}`)),this.staticMapCacheDirty=!0)};it(Y,$,H),Y!==x&&$!==O&&(it(Y,O,H),it(x,$,H));const j=this.maze.get(Y,$,H);!this.exitPathfinderUnlocked&&this.checkExitNeighborVisited()&&(this.exitPathfinderUnlocked=!0,this.ui.showInfoBanner(Dt("msgExitFound"))),j===this.mazeGen.TYPES.EXIT&&(this.isJellyChallengeActive||this.triggerVictory())}if((o!==0||l!==0)&&(this.skipCellAnimations=!1),this.checkHunterCollision(),this.isGameOver)return;const T=Math.floor(this.player.x),h=Math.floor(this.player.y),u=this.player.z,v=this.maze.get(T,h,u)===this.mazeGen.TYPES.JELLY_PORTAL,g=this.maze.get(T,h,u)===this.mazeGen.TYPES.TELEPORT||v,_=this.teleportCooldownTicks>0;if(T>=0&&T<this.mazeGen.size&&h>=0&&h<this.mazeGen.size){if(this.maze.get(T,h,u)===this.mazeGen.TYPES.PATH)this.maze.set(T,h,u,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${T},${h},${u}`),this.staticMapCacheDirty=!0;else if(g){const k=`${T},${h},${u}`;!(this.lastPlayerCell&&this.lastPlayerCell.x===T&&this.lastPlayerCell.y===h&&this.lastPlayerCell.z===u)&&!_&&(this.discoveredTeleports.add(k),this.staticMapCacheDirty=!0,this.lastSavePos={x:T+W.PLAYER_START_X,y:h+W.PLAYER_START_Y%1,z:u},v?(this.triggerSave(),this.ui.showInfoBanner(Dt("msgJellyPortalNotSafe"))):(this.triggerSave(),this.ui.showInfoBanner(Dt("msgSafePointTeleport"))))}const x=u<this.mazeGen.size-1&&this.maze.get(T,h,u+1)!==this.mazeGen.TYPES.WALL,O=u>0&&this.maze.get(T,h,u-1)!==this.mazeGen.TYPES.WALL,M=x||O;if(this.lastPlayerCell){const k=this.lastPlayerCell.x,U=this.lastPlayerCell.y,X=this.lastPlayerCell.z,I=X<this.mazeGen.size-1&&this.maze.get(k,U,X+1)!==this.mazeGen.TYPES.WALL,B=X>0&&this.maze.get(k,U,X-1)!==this.mazeGen.TYPES.WALL;if((I||B)&&(k!==T||U!==h||X!==u)){const H=`${k},${U},${X}`;this.revealedPathSet.has(H)&&(this.revealedPathSet.delete(H),this.staticMapCacheDirty=!0)}}const A=`${T},${h},${u}`;!M&&this.revealedPathSet.has(A)&&(this.revealedPathSet.delete(A),this.staticMapCacheDirty=!0)}g&&!_?(this.input.keys.e||this.input.keys.pageup||this.input.keys.q||this.input.keys.pagedown)&&(["e","q","pageup","pagedown"].forEach(x=>this.input.keys[x]=!1),this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(Dt("msgNoOtherActiveTeleport"))):((this.input.keys.e||this.input.keys.pageup)&&this.changeFloor(2),(this.input.keys.q||this.input.keys.pagedown)&&this.changeFloor(-2)),this.input.keys.r&&(this.input.keys.r=!1,this.tryActivateJellyPortal()),(!this.lastPlayerCell||this.lastPlayerCell.x!==T||this.lastPlayerCell.y!==h||this.lastPlayerCell.z!==u)&&(this.staticMapCacheDirty=!0);const S=window.innerHeight>window.innerWidth;this.ui.updateMobileMapButton(g,!!_,S,v),this.updateFloorUI(),this.lastPlayerCell={x:T,y:h,z:u}}const r=performance.now();if(r-this.lastHunterMove>W.HUNTER_SPEED){if(this.lastHunterMove=r,this.teleportCooldownTicks>0&&(this.teleportCooldownTicks--,this.staticMapCacheDirty=!0,this.teleportCooldownTicks===0)){this.inactiveTeleportPos=null;for(const h of this.hunters){if(h.state==="DEAD_BY_JELLY")continue;const u=this.maze.get(h.x,h.y,h.z);if(u===this.mazeGen.TYPES.VISITED||u===this.mazeGen.TYPES.START||u===this.mazeGen.TYPES.EXIT){const v=h.state;h.state="TRACKING",v!=="TRACKING"&&!this.dialogueDetectedTriggered&&(this.ui.showInfoBanner(Dt("msgIWasDetected")),this.dialogueDetectedTriggered=!0)}else h.state="WANDERING",h.pathToTarget=[],h.visitedNodes.clear(),h.visitedNodes.add(`${h.x},${h.y},${h.z}`)}}let o=0,l=0;const c=this.hunters.some(h=>h.state==="SLEEP");for(const h of this.hunters){if(h.state==="SLEEP"||h.state==="DEAD_BY_JELLY"||h.state==="DYING")continue;if(this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.hunterBehavior&&this.currentTutorialStage.hunterBehavior.static){if(this.checkHunterCollision(),this.isGameOver)return;continue}const v=h.state;h.move(this.player,this.maze,this.mazeGen.TYPES),h.state==="TRACKING"&&v!=="TRACKING"&&!this.dialogueDetectedTriggered&&(this.ui.showInfoBanner(Dt("msgIWasDetected")),this.dialogueDetectedTriggered=!0),(h.state==="TRACKING"||h.state==="TELEPORT_TRACKING")&&o++;const g=h.z===this.player.z;let _=!1;if(g)_=!0;else{const E=Math.max(5,Math.floor(this.degree*1.2));om({x:h.x,y:h.y,z:h.z},{x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.maze,this.mazeGen.size,this.mazeGen.TYPES.WALL,E,this.mazeGen.startPos)<=E&&(_=!0)}if(_&&l++,this.checkHunterCollision(),this.isGameOver)return}const d=o>0;this.isHunterTracking=d,this.ui.updateHazardWarning(d,this.teleportCooldownTicks,this.isSafeMode,c),d?this.canvas.classList.add("hunted-map-effect"):this.canvas.classList.remove("hunted-map-effect"),this.ui.setNearbyWarning(l>0);let f=1/0;const p=Math.floor(this.player.x),m=Math.floor(this.player.y),y=this.player.z,T=this.hunters.filter(h=>h.state!=="SLEEP");for(const h of T){const u=rm({x:h.x,y:h.y,z:h.z},{x:p,y:m,z:y},this.maze,this.mazeGen.size,this.mazeGen.TYPES.WALL);u<f&&(f=u)}this.ui.updateProximeter(f,T.length,this.isGameOver)}}changeFloor(t){if(this.isGameOver||this.floorTransition||this.isJellyChallengeActive)return;this.skipCellAnimations=!0;const i=Math.floor(this.player.x),e=Math.floor(this.player.y),n=this.player.z,a=n+1<this.mazeGen.size&&this.maze.get(i,e,n+1)!==this.mazeGen.TYPES.WALL&&this.maze.get(i,e,n+1)!==this.mazeGen.TYPES.STATUE,r=n-1>=0&&this.maze.get(i,e,n-1)!==this.mazeGen.TYPES.WALL&&this.maze.get(i,e,n-1)!==this.mazeGen.TYPES.STATUE;if(t>0&&a||t<0&&r){const o=n+t;if(o>=0&&o<this.mazeGen.size&&this.maze.get(i,e,o)!==this.mazeGen.TYPES.WALL&&this.maze.get(i,e,o)!==this.mazeGen.TYPES.STATUE){const l=n+t/2;this.maze.get(i,e,l)!==this.mazeGen.TYPES.ELEVATOR_VISITED&&(this.maze.set(i,e,l,this.mazeGen.TYPES.ELEVATOR_VISITED),this.staticMapCacheDirty=!0);const c=`${i},${e},${l}`;this.revealedPathSet.delete(c);const d=document.createElement("canvas");d.width=this.canvas.width,d.height=this.canvas.height;const f=d.getContext("2d");this.renderMapToContext(f,this.player.z),this.player.x=i+W.PLAYER_START_X,this.player.y=e+W.PLAYER_START_Y%1,this.player.z=o,this.staticMapCacheDirty=!0,this.populateFullyRevealedCells(o),this.maze.get(i,e,o)===this.mazeGen.TYPES.PATH&&this.maze.set(i,e,o,this.mazeGen.TYPES.VISITED);const p=document.createElement("canvas");p.width=this.canvas.width,p.height=this.canvas.height;const m=p.getContext("2d");this.renderMapToContext(m,this.player.z),this.floorTransition={canvasOld:d,canvasNew:p,progress:0,duration:.4,delta:t},this.updateFloorUI(),this.draw2DMap(0),this.maze.get(i,e,o)===this.mazeGen.TYPES.EXIT&&this.triggerVictory()}}}toggleMap3D(){this.isMap3DActive=!this.isMap3DActive,this.isTeleportMode=!1;const t=document.getElementById("mobile-teleport-exit-btn");if(t&&t.classList.add("hidden"),this.isMap3DActive){this.ui.setMap3DVisible(!0),this.activeMapFloor=this.player.z,this.visualActiveFloor=this.player.z,this.mapCursor={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.mapZoom=1,this.mapPanOffsetX=0,this.mapPanOffsetY=0,this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="none");const i=document.getElementById("map3d-instructions");i&&(i.style.display="none"),this.isometricCanvas||this.initIsometricCanvas(),this.isometricCanvas.style.display="block"}else this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.remove("hidden"),this.ui.setMap3DVisible(!1),this.isometricCanvas&&(this.isometricCanvas.style.display="none")}build3DMap(t=!1){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(new vr(16777215,.6));const i=new gr(16777215,.4);i.position.set(10,20,10),this.scene.add(i),this.pulsatingMaterials=[],this.hunterMeshes=[],this.statueMeshes.clear(),this.teleportMeshes=[],this.knownMeshes=[],this.keyMeshes=[],this.manaMeshes=[],this.exitMesh=null;const e=this.mazeGen.size,n=(v,g,_)=>{if(_<0||_>=e)return!1;const E=this.maze.get(v,g,_);return E===2||E===3||E===4||E===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${v},${g},${_}`)||this.visitedCells.has(`${v},${g},${_}`)};this.gridMeshes=new Array(e*e*e).fill(null);const a=new xe(.9,.9,.9),r=this.isTeleportMode?W.TELEPORT_MAP_OPACITY:1,o=new xe(.9,.425,.9),l=new xe(.9,.425,.9),c=new Cn(.35,.35,2*this.vScale,8);new ee({color:W.COLORS.THREE_VISITED,transparent:!0,opacity:.8*r});for(let v=0;v<e;v++)for(let g=0;g<e;g++)for(let _=0;_<e;_++){const E=this.maze.get(v,g,_);if(E===this.mazeGen.TYPES.WALL||E===this.mazeGen.TYPES.STATUE){if(t||E===this.mazeGen.TYPES.WALL&&this.isWallVisible(v,g,_)||E===this.mazeGen.TYPES.STATUE&&(this.isNearVisited(v,g,_)||this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.revealed)){const H=new xe(.35,.3*this.vScale,.35),Z=new ee({color:5903520,emissive:5903520,emissiveIntensity:.35*r,transparent:!0,opacity:.8*r}),it=[{dx:-.23,dy:-.23},{dx:.23,dy:-.23},{dx:-.23,dy:.23},{dx:.23,dy:.23}];for(const j of it){const V=new Qt(H,Z);V.position.set(v+j.dx-e/2,(_-e/2)*this.vScale-.3*this.vScale,g+j.dy-e/2),this.scene.add(V)}if(E===this.mazeGen.TYPES.STATUE){const j=new xe(.5,.1*this.vScale,.5),V=new ee({color:3355443,transparent:!0,opacity:.9*r}),F=new Qt(j,V),K=(_-e/2)*this.vScale-.4*this.vScale;F.position.set(v-e/2,K,g-e/2),this.scene.add(F);const nt=new Cn(.18,.22,.5*this.vScale,8),_t=new ee({color:7829367,transparent:!0,opacity:.9*r}),St=new Qt(nt,_t);St.position.set(v-e/2,K+.3*this.vScale,g-e/2),this.scene.add(St),this.statueMeshes.set(`${v},${g},${_}`,{base:F,body:St})}}continue}if(_%2===0&&E!==0){const $=`${v},${g},${_}`,H=this.revealedPathSet.has($),Z=E===this.mazeGen.TYPES.ELEVATOR_VISITED,it=E===1&&(n(v,g,_-1)||n(v,g,_+1));if(Z||it||H||t){let j;if(H)j=new ee({color:16777215,transparent:!0,opacity:.95*r,emissive:16777215,emissiveIntensity:2*r});else if(Z)j=new ee({color:W.COLORS.THREE_VISITED,transparent:!0,opacity:.8*r});else if(it||t){const F=t?W.COLORS.THREE_VISITED:W.COLORS.THREE_KNOWN;j=new ee({color:F,transparent:!0,opacity:t?.72:.6*r,emissive:F,emissiveIntensity:t?0:.5*r}),t||this.pulsatingMaterials.push(j)}const V=new Qt(c,j);V.position.set(v-e/2,(_-e/2)*this.vScale,g-e/2),this.scene.add(V),this.gridMeshes[v*e*e+g*e+_]=V,it&&!H&&(V.userData={gridX:v,gridY:g,gridZ:_},this.knownMeshes.push(V))}continue}const x=E===this.mazeGen.TYPES.JELLY_PORTAL,O=E===this.mazeGen.TYPES.TELEPORT||x,M=O&&this.discoveredTeleports.has(`${v},${g},${_}`),A=E===2||E===3||E===4||E===5||M,k=(E===1||O&&!M)&&this.isNearVisited(v,g,_);if(M){const $=v===Math.floor(this.mazeGen.startPos.x)&&g===Math.floor(this.mazeGen.startPos.y)&&_===this.mazeGen.startPos.z,H=this.teleportCooldownTicks>0;if($){const St=H?0:this.isTeleportMode?2.5:.5,Nt=H?4473924:W.COLORS.THREE_START,Rt=H?.4:this.isTeleportMode?.95:.8*r,R=new ee({color:Nt,emissive:Nt,emissiveIntensity:St*r,transparent:!0,opacity:Rt}),N=new Qt(a,R);N.position.set(v-e/2,(_-e/2)*this.vScale,g-e/2),this.isTeleportMode&&N.scale.set(1.4,1.4,1.4),N.userData={isTeleport:!0,gridX:v,gridY:g,gridZ:_},this.scene.add(N),this.teleportMeshes.push(N);continue}const Z=v===Math.floor(this.player.x)&&g===Math.floor(this.player.y)&&_===this.player.z;let it=this.isTeleportMode?.9:.45,j=this.isTeleportMode?2.5:.8,V=x?W.COLORS.THREE_JELLY_PORTAL:W.COLORS.THREE_TELEPORT,F=.95;H?(V=4473924,j=0,F=.4):this.isTeleportMode&&Z&&(V=65535,F=.5,j=3);const K=new rn(it,16,16),nt=new ee({color:V,emissive:V,emissiveIntensity:j,transparent:!0,opacity:F}),_t=new Qt(K,nt);_t.position.set(v-e/2,(_-e/2)*this.vScale,g-e/2),_t.userData={isTeleport:!0,gridX:v,gridY:g,gridZ:_},this.scene.add(_t),this.teleportMeshes.push(_t);continue}if(E===this.mazeGen.TYPES.KEY){const $=new Na(.3,0),H=new ee({color:W.COLORS.THREE_KEY,emissive:W.COLORS.THREE_KEY,emissiveIntensity:.6*r,shininess:100}),Z=new Qt($,H);if(Z.position.set(v-e/2,(_-e/2)*this.vScale,g-e/2),Z.userData={isKey:!0,gridX:v,gridY:g,gridZ:_},this.scene.add(Z),this.keyMeshes.push(Z),this.pulsatingMaterials.push(H),!this.visitedCells.has(`${v},${g},${_}`))continue}if(E===this.mazeGen.TYPES.MANA){const $=new Oa(.22,0),H=new ee({color:65535,emissive:65535,emissiveIntensity:.7*r,shininess:120}),Z=new Qt($,H);if(Z.position.set(v-e/2,(_-e/2)*this.vScale,g-e/2),Z.userData={isMana:!0,gridX:v,gridY:g,gridZ:_},this.scene.add(Z),this.manaMeshes.push(Z),this.pulsatingMaterials.push(H),!this.visitedCells.has(`${v},${g},${_}`))continue}const I=`${v},${g},${_}`,B=this.revealedPathSet.has(I);if(t?E!==this.mazeGen.TYPES.WALL:A||k||B){let $=t?W.COLORS.THREE_VISITED:W.COLORS.THREE_KNOWN,H;B?($=16777215,H=new ee({color:$,transparent:!0,opacity:.95*r,emissive:$,emissiveIntensity:2*r})):A||t?($=W.COLORS.THREE_VISITED,E===3?$=W.COLORS.THREE_START:E===4&&($=this.keysCollected===this.totalKeys?W.COLORS.THREE_EXIT:16724736),H=new ee({color:$,transparent:!0,opacity:t?.72:.8*r})):k&&(H=new ee({color:$,transparent:!0,opacity:.6*r,emissive:$,emissiveIntensity:.5*r}),this.pulsatingMaterials.push(H));const Z=_<e-1&&this.maze.get(v,g,_+1)!==0,it=_>0&&this.maze.get(v,g,_-1)!==0;if(Z||it){const K=this.pulsatingMaterials.indexOf(H);if(K>-1&&this.pulsatingMaterials.splice(K,1),Z&&it){let nt=!1,_t=!1;if(B){if(this.activePathReveal){const st=this.activePathReveal.findIndex(tt=>tt.x===v&&tt.y===g&&tt.z===_);if(st!==-1&&st<this.activePathReveal.length-1){const tt=this.activePathReveal[st+1];tt.z>_&&(nt=!0),tt.z<_&&(_t=!0)}}!nt&&!_t&&(nt=this.revealedPathSet.has(`${v},${g},${_+1}`)||this.revealedPathSet.has(`${v},${g},${_+2}`),_t=this.revealedPathSet.has(`${v},${g},${_-1}`)||this.revealedPathSet.has(`${v},${g},${_-2}`))}const St=B&&(nt||!nt&&!_t),Nt=B&&(_t||!nt&&!_t),Rt=Nt?16777215:A?W.COLORS.THREE_ELEVATOR_DOWN:W.COLORS.THREE_ELEVATOR_DOWN_UNUSED,R=St?16777215:A?W.COLORS.THREE_ELEVATOR_UP:W.COLORS.THREE_ELEVATOR_UP_UNUSED,N=new ee({color:Rt,transparent:!0,opacity:.9*r,emissive:Rt,emissiveIntensity:(Nt?2:.4)*r}),C=new ee({color:R,transparent:!0,opacity:.9*r,emissive:R,emissiveIntensity:(St?2:.4)*r}),q=new Qt(o,N),G=new Qt(l,C);q.position.set(v-e/2,(_-e/2)*this.vScale-.2125,g-e/2),G.position.set(v-e/2,(_-e/2)*this.vScale+.2125,g-e/2),this.scene.add(q),this.scene.add(G),this.gridMeshes[v*e*e+g*e+_]=G,k&&!B&&(q.userData={gridX:v,gridY:g,gridZ:_},G.userData={gridX:v,gridY:g,gridZ:_},this.knownMeshes.push(q),this.knownMeshes.push(G));continue}else{const nt=Z?W.COLORS.THREE_ELEVATOR_UP:W.COLORS.THREE_ELEVATOR_DOWN,_t=Z?W.COLORS.THREE_ELEVATOR_UP_UNUSED:W.COLORS.THREE_ELEVATOR_DOWN_UNUSED,St=B?16777215:A?nt:_t,Nt=B?2:.4;H=new ee({color:St,transparent:!0,opacity:.9*r,emissive:St,emissiveIntensity:Nt*r})}}const j=v===Math.floor(this.player.x)&&g===Math.floor(this.player.y)&&_===this.player.z,V=this.hunters.some(K=>K.x===v&&K.y===g&&K.z===_);if(j||V){const K=new xe(.9,.05,.9),nt=new Qt(K,H);nt.position.set(v-e/2,(_-e/2)*this.vScale-.425,g-e/2),this.scene.add(nt),this.gridMeshes[v*e*e+g*e+_]=nt;continue}const F=new Qt(a,H);if(F.position.set(v-e/2,(_-e/2)*this.vScale,g-e/2),E===4&&(this.exitMesh=F,this.keysCollected<this.totalKeys)){const K=new xe(.95,.95,.95),nt=new Pn({color:16711680,wireframe:!0}),_t=new Qt(K,nt);F.add(_t)}this.scene.add(F),this.gridMeshes[v*e*e+g*e+_]=F,(k||E===this.mazeGen.TYPES.EXIT)&&!B&&(F.userData={gridX:v,gridY:g,gridZ:_},this.knownMeshes.push(F))}}if(t)return;const d=new rn(.42,16,16),f=new ee({color:16711680,emissive:16711680,emissiveIntensity:.8,depthWrite:!1}),p=new Qt(d,f);p.position.set(Math.floor(this.player.x)-e/2,(this.player.z-e/2)*this.vScale+.05,Math.floor(this.player.y)-e/2),this.scene.add(p);const m=new rn(.4),y=new ee({color:W.COLORS.THREE_HUNTER,emissive:W.COLORS.THREE_HUNTER,emissiveIntensity:.8,depthWrite:!1}),T=new ee({color:W.COLORS.THREE_HUNTER,transparent:!0,opacity:.4,emissive:W.COLORS.THREE_HUNTER,emissiveIntensity:.3,depthWrite:!1}),h=new ee({color:W.COLORS.THREE_HUNTER,transparent:!0,opacity:.15,emissive:W.COLORS.THREE_HUNTER,emissiveIntensity:.1,depthWrite:!1}),u=m;for(let v=0;v<this.hunters.length;v++){const g=this.hunters[v];if(g.state==="SLEEP")continue;const _=new Qt(u,h),E=new Qt(u,T);_.visible=!1,E.visible=!1,_.renderOrder=99,E.renderOrder=99,this.scene.add(_),this.scene.add(E);const S=new Sn;S.renderOrder=99;const x=new Qt(m,y);S.add(x);const O=4,M=[],A=new xe(.18,.18,.18),k=[W.COLORS.THREE_HUNTER,16711935,65535,16776960];for(let U=0;U<O;U++){const X=new ee({color:k[U%k.length],transparent:!0,opacity:.8,emissive:k[U%k.length],emissiveIntensity:.8,depthWrite:!1}),I=new Qt(A,X);I.userData={angle:U/O*Math.PI*2,radius:.35+Math.random()*.1,speed:1+Math.random()*1.5,phaseY:Math.random()*Math.PI*2},S.add(I),M.push(I)}S.position.set(g.x-e/2,(g.z-e/2)*this.vScale,g.y-e/2),this.scene.add(S),this.hunterMeshes.push({hunter:g,mesh:S,coreMesh:x,particles:M,trail1:E,trail2:_})}this.camera.position.set(e,e*this.vScale,e),this.controls.target.set(0,0,0),this.controls.update()}draw2DMap(t=.016){if(this.deathAnimation&&this.deathAnimation.active){if(this.deathAnimation.delayElapsed<this.deathAnimation.delayDuration)this.deathAnimation.delayElapsed+=t,this.updateNotification(t);else if(this.deathAnimation.screenFilled)this.deathAnimation.reversing&&(this.deathAnimation.elapsed-=t,this.deathAnimation.elapsed<=0&&(this.deathAnimation=null,this.isGameOver=!1,this.ui.initGameUI(this.isSafeMode),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1),this.ui.showInfoBanner(Dt("msgPlayerRespawn"))));else if(this.deathAnimation.elapsed+=t,this.updateNotification(t),this.deathAnimation.elapsed>=this.deathAnimation.duration){this.deathAnimation.screenFilled=!0,this.activeNotification=null,this.notificationQueue=[];const n=Math.floor(this.deathAnimation.playerPos.x),a=Math.floor(this.deathAnimation.playerPos.y),r=this.deathAnimation.playerPos.z;if(this.maze.get(n,a,r)===this.mazeGen.TYPES.JELLY_PORTAL){const f=this.mazeGen.size,p=[],m=Math.floor(this.mazeGen.startPos.x),y=Math.floor(this.mazeGen.startPos.y),T=this.mazeGen.startPos.z;for(let h=0;h<f;h++)for(let u=0;u<f;u++)for(let v=0;v<f;v++){const g=this.maze.get(h,u,v),_=h===m&&u===y&&v===T,E=h===n&&u===a&&v===r;(g===this.mazeGen.TYPES.PATH||g===this.mazeGen.TYPES.VISITED)&&v%2!==0&&!_&&!E&&p.push({x:h,y:u,z:v})}if(p.length>0){const h=p[Math.floor(Math.random()*p.length)];this.maze.set(h.x,h.y,h.z,this.mazeGen.TYPES.KEY)}else this.maze.set(n,a,r,this.mazeGen.TYPES.KEY)}else this.maze.set(n,a,r,this.mazeGen.TYPES.KEY);this.totalKeys++,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.staticMapCacheDirty=!0;let l=this.mazeGen.startPos.x,c=this.mazeGen.startPos.y,d=this.mazeGen.startPos.z;if(this.lastSavePos&&(l=this.lastSavePos.x,c=this.lastSavePos.y,d=this.lastSavePos.z),this.player.x=l,this.player.y=c,this.player.z=d,this.activeMapFloor=d,this.visualActiveFloor=d,this.lastPlayerCell={x:Math.floor(l),y:Math.floor(c),z:d},this.isJellyChallengeActive=!1,this.updateGameContainerBackground(),this.jellyProjectiles.forEach(f=>{f.threeMesh&&this.scene.remove(f.threeMesh)}),this.jellyProjectiles=[],this.jellyStatueStates.clear(),this.hunters=[],this.isTutorialMode){const f=this.currentTutorialStage&&this.currentTutorialStage.hunterBehavior&&this.currentTutorialStage.hunterBehavior.fixed;if(this.mazeGen.tutorialHunterSpawns&&!this.isSafeMode){let p=1;for(const m of this.mazeGen.tutorialHunterSpawns){const y=new ra(this.mazeGen,{x:m.x,y:m.y,z:m.z},p++);if(!f){const T=[],h=this.mazeGen.size,u=Math.floor(this.mazeGen.startPos.x),v=Math.floor(this.mazeGen.startPos.y),g=this.mazeGen.startPos.z;for(let _=0;_<h;_++)for(let E=0;E<h;E++)for(let S=0;S<h;S++){const x=this.maze.get(_,E,S),O=_===u&&E===v&&S===g,M=x===this.mazeGen.TYPES.EXIT;x!==this.mazeGen.TYPES.WALL&&!M&&!O&&(_!==Math.floor(l)||E!==Math.floor(c)||S!==d)&&T.push({x:_,y:E,z:S})}if(T.length>0){const _=T[Math.floor(Math.random()*T.length)];y.x=_.x,y.y=_.y,y.z=_.z,y.visualX=_.x,y.visualY=_.y,y.visualZ=_.z,y.lastPos={x:_.x,y:_.y,z:_.z},y.visitedNodes.clear(),y.visitedNodes.add(`${_.x},${_.y},${_.z}`)}}this.hunters.push(y)}}}else this.initHunters(this.degree);this.suppressWakeHuntersBanner=!0,this.isTutorialMode||ls(this),this.deathAnimation.reversing=!0}}this.floorTransition&&(this.floorTransition.progress+=t/this.floorTransition.duration,this.floorTransition.progress>=1&&(this.floorTransition=null));const i=this.mazeGen.size,e=this.isZoomActive?11:i;if(this.zoomVisibleCells===void 0?this.zoomVisibleCells=e:(this.zoomVisibleCells+=(e-this.zoomVisibleCells)*(1-Math.exp(-12*t)),Math.abs(this.zoomVisibleCells-e)<.01&&(this.zoomVisibleCells=e)),this.floorTransition){const n=this.floorTransition.progress,a=this.canvas.width/2,r=this.canvas.height/2,o=this.floorTransition.delta>0;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let l,c;o?(l=1-.2*n,c=1.2-.2*n):(l=1+.2*n,c=.8+.2*n),this.ctx.save(),this.ctx.globalAlpha=1-n,this.ctx.translate(a,r),this.ctx.scale(l,l),this.ctx.drawImage(this.floorTransition.canvasOld,-a,-r),this.ctx.restore(),this.ctx.save(),this.ctx.globalAlpha=n,this.ctx.translate(a,r),this.ctx.scale(c,c),this.ctx.drawImage(this.floorTransition.canvasNew,-a,-r),this.ctx.restore()}else this.renderMapToContext(this.ctx,this.player.z,t)}renderMapToContext(t,i,e=.016){this.drawVoidBackground(t,t.canvas.width,t.canvas.height,i,e);const n=this.mazeGen.size,a=n>11,r=a?t.canvas.width/11:t.canvas.width/n;let o=this.player.x,l=this.player.y,c=1,d=1,f=1;if(this.teleportAnim&&this.teleportAnim.active){const v=this.teleportAnim,g=Math.min(1,v.elapsed/v.duration);v.stage==="OUT"?(o=v.startX,l=v.startY,c=1-g*.9,d=1+g*2,f=1-g):(o=v.targetX,l=v.targetY,c=g,d=3-g*2,f=g)}const p=Math.floor(o),m=Math.floor(l);let y=a||this.isZoomTransitionActive,T=a?this.zoomVisibleCells:n;if(this.isZoomTransitionActive){const g=Math.min(1,(2-this.zoomTransitionTimer)/2),E=(O=>1-Math.pow(1-O,3))(g),S=3;T=S+((a?11:n)-S)*E}if(y){t.save();const v=(a?11:n)/T,g=T/2;let _=o,E=l;_<g&&(_=g),_>n-g&&(_=n-g),E<g&&(E=g),E>n-g&&(E=n-g);const S=t.canvas.width/2,x=t.canvas.height/2;t.translate(S,x),t.scale(v,v),t.translate(-_*r,-E*r)}const h=a?n*r:this.canvas.width,u=a?n*r:this.canvas.height;(this.staticMapCacheDirty||this.staticMapCacheCanvas.width!==h||this.staticMapCacheCanvas.height!==u||this.jellyPortalFreezeTimer>0)&&this.updateStaticMapCache(i),t.drawImage(this.staticMapCacheCanvas,0,0);for(const v of this.hunters){if(v.state==="SLEEP")continue;const g=v.visualZ!==null?v.visualZ:v.z,_=v.visualX!==null?v.visualX:v.x,E=v.visualY!==null?v.visualY:v.y;if(g===null||_===null||E===null)continue;const S=Math.abs(g-i),x=Math.max(0,1-S);if(x<=0)continue;const O=v.x!==null?v.x:_,M=v.y!==null?v.y:E,A=O-_,k=M-E,U=Math.sqrt(A*A+k*k),X=Math.max(0,Math.min(1,1-U)),I=[];if(v.lastPos&&(v.lastPos.x!==O||v.lastPos.y!==M)&&v.lastPos.z===i){const B=.95-X*.47,Y=.4-X*.2;I.push({pos:v.lastPos,sizeFactor:B,opacityFactor:Y,age:1})}if(v.history&&v.history.length===2){const B=v.history[0];if(B.z===i){const Y=.48*(1-X),$=.2*(1-X);Y>.01&&I.push({pos:B,sizeFactor:Y,opacityFactor:$,age:2})}}if(I.forEach(B=>{if(v.lowCanvas){const Y=B.pos.x*r+r/2,$=B.pos.y*r+r/2,H=r*B.sizeFactor*x,Z=v.jellyTime-B.age*.2,it=Math.sin(Z)*6,j=Math.cos(Z*.7)*4,V=1+Math.sin(Z*1.2)*.06,F=1+Math.cos(Z*.8)*.06,K=it*Math.PI/180,nt=j*Math.PI/180;t.save(),t.globalAlpha=B.opacityFactor,t.translate(Y,$),t.transform(V,Math.tan(nt),Math.tan(K),F,0,0),t.imageSmoothingEnabled=!1,t.drawImage(v.lowCanvas,-H/2,-H/2,H,H),t.restore()}}),v.lowCanvas){const B=_*r+r/2,Y=E*r+r/2,$=r*.95*x,H=v.jellyTime,Z=Math.sin(H)*6,it=Math.cos(H*.7)*4,j=1+Math.sin(H*1.2)*.06,V=1+Math.cos(H*.8)*.06,F=Z*Math.PI/180,K=it*Math.PI/180;t.save();let nt=.35,_t=$;if(v.state==="DYING"){const R=Math.min(1,this.jellyPortalResetElapsed/this.jellyPortalResetDuration);_t=$*(1-R),nt=.35*(1-R)}const St=-r*.12*x,Nt=-r*.12*x;t.translate(B+St,Y+Nt),t.transform(j,Math.tan(K),Math.tan(F),V,0,0),t.filter=`brightness(0) blur(1px) opacity(${nt})`,t.imageSmoothingEnabled=!1,t.drawImage(v.lowCanvas,-_t/2,-_t/2,_t,_t),t.restore(),t.save();let Rt=1;if(v.state==="DYING"){const R=Math.min(1,this.jellyPortalResetElapsed/this.jellyPortalResetDuration);_t=$*(1-R),Rt=1-R;const N=(Math.random()-.5)*r*.15,C=(Math.random()-.5)*r*.15;t.translate(N,C)}t.globalAlpha=Rt,t.translate(B,Y),t.transform(j,Math.tan(K),Math.tan(F),V,0,0),t.imageSmoothingEnabled=!1,t.drawImage(v.lowCanvas,-_t/2,-_t/2,_t,_t),t.restore()}}if(!this.deathAnimation||!this.deathAnimation.screenFilled){const v=`${this.playerVertical}_${this.playerSide}`,g=this.mageImages[v],_=o*r,E=l*r;let S=1;this.deathAnimation&&this.deathAnimation.active&&(Math.floor(Date.now()/120)%2===0||(S=.2));const x=W.PLAYER_SHADOW_OFFSET_X!==void 0?W.PLAYER_SHADOW_OFFSET_X:-.28,O=W.PLAYER_SHADOW_OFFSET_Y!==void 0?W.PLAYER_SHADOW_OFFSET_Y:-.28,M=_+r*x,A=E+r*O;t.save(),t.beginPath();const k=W.PLAYER_SHADOW_WIDTH_FACTOR!==void 0?W.PLAYER_SHADOW_WIDTH_FACTOR:.45,U=W.PLAYER_SHADOW_HEIGHT_FACTOR!==void 0?W.PLAYER_SHADOW_HEIGHT_FACTOR:.3,X=r*k,I=r*U;t.ellipse(M,A,X,I,0,0,Math.PI*2),t.fillStyle="rgba(0, 0, 0, 0.4)",t.fill(),t.restore();const B=(j,V,F,K,nt)=>{const _t=r*1.2,St=_t*F;if(St<=0)return;const Nt=this.auraTime||0,Rt=r*.45;t.save(),t.globalAlpha=K*.7;const R="rgba(0, 220, 255, 0.4)",N="rgba(0, 255, 255, 0.8)",C=t.createLinearGradient(j,V,j,V-St);if(C.addColorStop(0,`rgba(0, 220, 255, ${K*.35})`),C.addColorStop(.3,`rgba(0, 200, 255, ${K*.25})`),C.addColorStop(1,"rgba(0, 150, 255, 0.0)"),nt==="BACK"){t.beginPath(),t.arc(j,V,Rt,Math.PI,0,!1),t.strokeStyle=R,t.lineWidth=1.5,t.stroke(),t.fillStyle=C,t.beginPath(),t.rect(j-Rt,V-St,Rt*2,St),t.fill();for(let G=0;G<3;G++){const st=(Nt*.8+G/3)%1*F,tt=V-_t*st;if(tt>V-St){const vt=(1-st)*K*.5;t.beginPath(),t.arc(j,tt,Rt,Math.PI,0,!1),t.strokeStyle=`rgba(0, 255, 255, ${vt})`,t.lineWidth=1,t.stroke()}}const q=(1-F*.3)*K*.8;t.beginPath(),t.arc(j,V-St,Rt,Math.PI,0,!1),t.strokeStyle=`rgba(0, 255, 255, ${q})`,t.stroke()}else{t.beginPath(),t.arc(j,V,Rt,0,Math.PI,!1),t.strokeStyle=N,t.lineWidth=2,t.stroke();const q=t.createLinearGradient(j,V,j,V-St);q.addColorStop(0,`rgba(0, 255, 255, ${K*.2})`),q.addColorStop(1,"rgba(0, 255, 255, 0.0)"),t.fillStyle=q,t.beginPath(),t.rect(j-Rt,V-St,Rt*2,St),t.fill();const G=t.createLinearGradient(j,V,j,V-St);G.addColorStop(0,`rgba(0, 255, 255, ${K*.7})`),G.addColorStop(1,"rgba(0, 255, 255, 0.0)"),t.strokeStyle=G,t.lineWidth=1.5,t.beginPath(),t.moveTo(j-Rt,V),t.lineTo(j-Rt,V-St),t.moveTo(j+Rt,V),t.lineTo(j+Rt,V-St),t.stroke();for(let tt=0;tt<3;tt++){const vt=(Nt*.8+tt/3)%1*F,ut=V-_t*vt;if(ut>V-St){const P=(1-vt)*K*.7;t.beginPath(),t.arc(j,ut,Rt,0,Math.PI,!1),t.strokeStyle=`rgba(0, 255, 255, ${P})`,t.lineWidth=1.5,t.stroke()}}const st=(1-F*.3)*K*.8;t.beginPath(),t.arc(j,V-St,Rt,0,Math.PI,!1),t.strokeStyle=`rgba(0, 255, 255, ${st})`,t.stroke()}t.restore()},Y=this.getAuraHeightAt(p,m,i);Y>0&&B(_,E,Y,S*f,"BACK");const $=Math.max(0,Math.floor((M-X)/r)),H=Math.min(n-1,Math.floor((M+X)/r)),Z=Math.max(0,Math.floor((A-I)/r)),it=Math.min(n-1,Math.floor((A+I)/r));for(let j=$;j<=H;j++)for(let V=Z;V<=it;V++)this.isWallVisible(j,V,i)&&(t.save(),this.wallImage.complete&&this.wallImage.naturalWidth!==0?t.drawImage(this.wallImage,j*r,V*r,r,r):(t.fillStyle=W.COLORS.WALL,t.fillRect(j*r,V*r,r,r)),t.restore());if(g&&g.complete){t.save(),t.globalAlpha=S*f;const j=r*.9,V=j,F=j*(g.height/g.width);t.translate(_,E),t.scale((this.playerSquashX||1)*c,(this.playerSquashY||1)*d);const K=-F*.85;t.drawImage(g,-V/2,K,V,F),t.restore()}else t.save(),t.globalAlpha=S*f,t.translate(_,E),t.scale(c,d),t.strokeStyle=W.COLORS.PLAYER_OUTLINE,t.lineWidth=1,t.strokeRect(-r/2+2,-r/2+2,r-4,r-4),t.fillStyle=W.COLORS.PLAYER,t.beginPath(),t.arc(0,0,r*.4,0,Math.PI*2),t.fill(),t.strokeStyle=W.COLORS.PLAYER,t.lineWidth=2,t.beginPath(),t.moveTo(0,0),t.lineTo(Math.cos(this.player.dir)*r*1,Math.sin(this.player.dir)*r*1),t.stroke(),t.restore();if(Y>0&&B(_,E,Y,S*f,"FRONT"),this.jellyProjectiles.forEach(j=>{if(j.z===i){const V=j.x*r,F=j.y*r;t.save();const K=r*.28,nt=t.createRadialGradient(V,F,2,V,F,K);nt.addColorStop(0,"#ffffff"),nt.addColorStop(.3,"#ff3333"),nt.addColorStop(1,"rgba(255, 51, 51, 0)"),t.beginPath(),t.arc(V,F,K,0,Math.PI*2),t.fillStyle=nt,t.fill(),t.beginPath(),t.arc(V,F,r*.1,0,Math.PI*2),t.fillStyle="#ffffff",t.fill(),t.restore()}}),W.SHOW_COLLISION_DEBUG){t.save(),t.strokeStyle="#ff0000",t.lineWidth=1.5;const j=W.PLAYER_COLLISION_RADIUS*2*r,V=(W.PLAYER_COLLISION_OFFSET_X||0)*r,F=(W.PLAYER_COLLISION_OFFSET_Y||0)*r;t.strokeRect(_+V-j/2,E+F-j/2,j,j),t.restore()}if(this.deathAnimation&&this.deathAnimation.active){const j=Math.min(1,this.deathAnimation.delayElapsed/this.deathAnimation.delayDuration),V=-(g&&g.complete?r*.9*(g.height/g.width)*.85:r*.5),F=r*.7,K=(1-j)*V-4*F*j*(1-j);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){t.save();const nt=this.keyImage,_t=nt.naturalWidth/nt.naturalHeight,St=r*.55;let Nt=St,Rt=St;_t>1?Rt=St/_t:Nt=St*_t,t.drawImage(nt,_-Nt/2,E+K-Rt/2,Nt,Rt),t.restore()}else t.save(),t.beginPath(),t.arc(_,E+K,r*.15,0,2*Math.PI),t.fillStyle="#ffd700",t.fill(),t.restore()}}if(this.activeNotification){const v=this.activeNotification;t.save(),t.font=`bold ${r*.22}px monospace`;const g=t.measureText(v.text).width,_=r*.4,E=g+_,S=r*.48,x=o*r,O=l*r-r*1.5;let M=E;v.state==="OPENING"?M=E*v.widthProgress:v.state==="CLOSING"&&(M=E*v.closeProgress);const A=this.mazeGen.size*r,k=this.mazeGen.size*r;let U=x;U-M/2<0?U=M/2:U+M/2>A&&(U=A-M/2);let X=O;X-S/2<0?X=S/2:X+S/2>k&&(X=k-S/2),t.fillStyle="#000000",t.fillRect(U-M/2,X-S/2,M,S),t.strokeStyle="#00ffff",t.lineWidth=Math.max(1.5,r*.04),t.strokeRect(U-M/2,X-S/2,M,S),(v.state==="TYPING"||v.state==="WAITING")&&(t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.fillText(v.displayText,U,X)),t.restore()}if(y&&t.restore(),this.isZoomTransitionActive){const _=1-Math.min(1,(2-this.zoomTransitionTimer)/2);t.save(),t.fillStyle=`rgba(0, 0, 0, ${_})`,t.fillRect(0,0,t.canvas.width,t.canvas.height),t.restore()}if(this.deathAnimation&&this.deathAnimation.active){const v=this.deathAnimation.hunter;let g=v?v.visualX+.5:this.deathAnimation.playerPos.x,_=v?v.visualY+.5:this.deathAnimation.playerPos.y;this.deathAnimation.reversing&&(g=this.player.x,_=this.player.y);let E,S;if(a){const x=11/this.zoomVisibleCells,O=this.zoomVisibleCells/2;let M=o,A=l;M<O&&(M=O),M>n-O&&(M=n-O),A<O&&(A=O),A>n-O&&(A=n-O);const k=t.canvas.width/2,U=t.canvas.height/2;E=k+(g-M)*r*x,S=U+(_-A)*r*x}else E=g*r,S=_*r;if(!this.deathAnimation.screenFilled||this.deathAnimation.reversing){const x=Math.hypot(t.canvas.width,t.canvas.height)*1.1,O=this.deathAnimation.elapsed/this.deathAnimation.duration,A=O*O*(3-2*O)*x;t.save(),t.beginPath(),t.arc(E,S,A,0,Math.PI*2),t.clip(),t.fillStyle="rgba(15, 0, 25, 0.96)",t.fillRect(0,0,t.canvas.width,t.canvas.height);const k=45,U=a?11/this.zoomVisibleCells:1;for(let X=0;X<k;X++){const I=Math.random()*Math.PI*2,B=Math.pow(Math.random(),.7)*A,Y=E+Math.cos(I)*B,$=S+Math.sin(I)*B,H=(15+Math.random()*70)*U,Z=(3+Math.random()*12)*U,it=80+Math.floor(Math.random()*50),j=Math.floor(Math.random()*25),V=130+Math.floor(Math.random()*70);t.fillStyle=Math.random()<.12?"#00ff66":Math.random()<.12?"#00ccff":Math.random()<.08?"#ffffff":`rgb(${it},${j},${V})`,t.fillRect(Y-H/2,$-Z/2,H,Z)}if(Math.random()<.3){t.fillStyle=Math.random()<.7?"#ffffff":"#b3ffff";const X=E+(Math.random()-.5)*A*.8,I=S+(Math.random()-.5)*A*.8,B=(2+Math.random()*5)*U,Y=(10+Math.random()*30)*U;t.fillRect(X-B/2,I-Y/2,B,Y)}t.restore()}else{t.fillStyle="rgba(10, 0, 15, 1.0)",t.fillRect(0,0,t.canvas.width,t.canvas.height),t.fillStyle="rgba(138, 3, 196, 0.08)";for(let M=0;M<t.canvas.height;M+=6)Math.random()<.6&&t.fillRect(0,M+Math.sin(Date.now()*.01+M)*2,t.canvas.width,2);const x=Math.floor(Math.random()*5)+3,O=["#00ff66","#ff0055","#00ccff","#ffff00","#8a03c4","#ffffff"];for(let M=0;M<x;M++){const A=Math.random()*t.canvas.width,k=Math.random()*t.canvas.height,U=80+Math.random()*250,X=8+Math.random()*30;t.fillStyle=O[Math.floor(Math.random()*O.length)],t.globalAlpha=.12+Math.random()*.18,t.fillRect(A,k,U,X)}if(t.globalAlpha=1,Math.random()<.35){const M=Math.floor(Math.random()*t.canvas.height),A=15+Math.floor(Math.random()*80),k=Math.floor(Math.random()*40)-20;t.drawImage(t.canvas,0,M,t.canvas.width,A,k,M,t.canvas.width,A)}Math.random()<.15&&(t.fillStyle="rgba(255, 255, 255, 0.05)",t.fillRect(0,Math.random()*t.canvas.height,t.canvas.width,5+Math.random()*20))}}}updateStaticMapCache(t){const i=this.mazeGen.size,e=i>11,n=e?this.canvas.width/11:this.canvas.width/i,a=e?i*n:this.canvas.width,r=e?i*n:this.canvas.height;(this.staticMapCacheCanvas.width!==a||this.staticMapCacheCanvas.height!==r)&&(this.staticMapCacheCanvas.width=a,this.staticMapCacheCanvas.height=r);const o=this.staticMapCacheCtx;o.clearRect(0,0,a,r);const l=this.player.x,c=this.player.y,d=Math.floor(this.mazeGen.startPos.x),f=Math.floor(this.mazeGen.startPos.y),p=this.mazeGen.startPos.z,m=Date.now();let y=!1;const T=(h,u,v,g=!0)=>{const _=`${h},${u},${t}`;if(g&&(o.fillStyle="#000000",o.fillRect(h*n,u*n,n,n)),this.skipCellAnimations||this.fullyRevealedCells.has(_))v(),this.skipCellAnimations&&this.fullyRevealedCells.add(_);else{let E=this.revealedCellsAnimation.get(_);E===void 0&&(this.revealedCellsAnimation.set(_,m),E=m);const S=m-E,O=Math.min(1,S/400);O<1?(o.save(),o.globalAlpha=O,v(),o.restore(),y=!0):(v(),this.revealedCellsAnimation.delete(_),this.fullyRevealedCells.add(_))}};for(let h=0;h<i;h++)for(let u=0;u<i;u++){const v=this.maze.get(h,u,t);if(this.jellyPortalFreezeTimer>0&&this.jellyPortalResetCells.has(`${h},${u}`)){const X=1.5-this.jellyPortalFreezeTimer,I=.6;let B=0;X>I&&(B=Math.min(1,(X-I)/.9)),o.fillStyle="#000000",o.fillRect(h*n,u*n,n,n),o.save();const Y=Math.round(100*(1-B));o.filter=`invert(${Y}%)`;const $=h===Math.floor(l)&&u===Math.floor(c),H=v===this.mazeGen.TYPES.STATUE;if(!$&&!H&&(o.globalAlpha=1-B),v===this.mazeGen.TYPES.WALL)this.wallImage.complete&&this.wallImage.naturalWidth!==0?o.drawImage(this.wallImage,h*n,u*n,n,n):(o.fillStyle=W.COLORS.WALL,o.fillRect(h*n,u*n,n,n));else if(H)if(this.floorImage.complete&&this.floorImage.naturalWidth!==0?o.drawImage(this.floorImage,h*n,u*n,n,n):(o.fillStyle=W.COLORS.PATH_VISITED,o.fillRect(h*n,u*n,n,n)),o.fillStyle="rgba(0, 0, 0, 0.4)",o.beginPath(),o.ellipse(h*n+n/2,(u+1)*n-n*.15,n*.35,n*.12,0,0,Math.PI*2),o.fill(),this.statueImage.complete&&this.statueImage.naturalWidth!==0){const it=this.statueImage.width/this.statueImage.height,j=n*.85,V=j/it,F=(u+1)*n-n*.05;o.drawImage(this.statueImage,h*n+n/2-j/2,F-V,j,V)}else o.fillStyle="#555555",o.fillRect(h*n+n*.3,u*n+n*.1,n*.4,n*.8);else if(this.floorImage.complete&&this.floorImage.naturalWidth!==0?o.drawImage(this.floorImage,h*n,u*n,n,n):(o.fillStyle=W.COLORS.PATH_VISITED,o.fillRect(h*n,u*n,n,n)),$)this.drawVortex2D(o,h,u,n,W.COLORS.JELLY_PORTAL,!1,`${h},${u},${t}`);else if(v===this.mazeGen.TYPES.TELEPORT)this.drawVortex2D(o,h,u,n,W.COLORS.TELEPORT_INACTIVE,!1,`${h},${u},${t}`);else if(v===this.mazeGen.TYPES.EXIT)this.drawVortex2D(o,h,u,n,W.COLORS.EXIT,!1,`${h},${u},${t}`);else if(v===this.mazeGen.TYPES.KEY){const it=n*.05*Math.sin(Date.now()/300);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){const j=this.keyImage,V=j.naturalWidth/j.naturalHeight,F=n*.7;let K=F,nt=F;V>1?nt=F/V:K=F*V,o.drawImage(j,h*n+(n-K)/2,u*n+(n-nt)/2+it,K,nt)}}else if(v===this.mazeGen.TYPES.MANA){const it=n*.05*Math.sin(Date.now()/250);if(this.manaImage.complete&&this.manaImage.naturalWidth!==0){const j=this.manaImage,V=j.naturalWidth/j.naturalHeight,F=n*.7;let K=F,nt=F;V>1?nt=F/V:K=F*V,o.drawImage(j,h*n+(n-K)/2,u*n+(n-nt)/2+it,K,nt)}}o.restore(),y=!0;continue}if(v===this.mazeGen.TYPES.STATUE){T(h,u,()=>{if(this.floorImage.complete&&this.floorImage.naturalWidth!==0?o.drawImage(this.floorImage,h*n,u*n,n,n):(o.fillStyle=W.COLORS.PATH_VISITED,o.fillRect(h*n,u*n,n,n)),o.fillStyle="rgba(0, 0, 0, 0.4)",o.beginPath(),o.ellipse(h*n+n/2,(u+1)*n-n*.15,n*.35,n*.12,0,0,Math.PI*2),o.fill(),this.statueImage.complete&&this.statueImage.naturalWidth!==0){const X=this.statueImage.width/this.statueImage.height,I=n*.85,B=I/X,Y=h*n+n/2,$=(u+1)*n-n*.05;o.save();const H=this.jellyStatueStates.get(`${h},${u},${t}`);if(H&&H.state==="CHARGING"){const Z=(Math.random()-.5)*n*.06,it=(Math.random()-.5)*n*.06;o.translate(Z,it);const j=Math.floor(performance.now()/80)%2===0;o.filter=j?"sepia(1) saturate(10) hue-rotate(320deg) brightness(1.2)":"sepia(1) saturate(10) hue-rotate(350deg) brightness(1.5)"}o.drawImage(this.statueImage,Y-I/2,$-B,I,B),o.restore()}else o.fillStyle="#555555",o.fillRect(h*n+n*.3,u*n+n*.1,n*.4,n*.8)});continue}const g=this.allTeleports.some(X=>X.x===h&&X.y===u&&X.z===t),_=g&&this.discoveredTeleports.has(`${h},${u},${t}`),E=v===2||v===3||v===4||v===5||_,S=v===this.mazeGen.TYPES.KEY,x=v===this.mazeGen.TYPES.MANA,O=(v===1||g&&!_)&&this.isNearVisited(h,u,t),M=this.revealedPathSet.has(`${h},${u},${t}`),A=t<i-1&&this.maze.get(h,u,t+1)!==0,k=t>0&&this.maze.get(h,u,t-1)!==0,U=A||k;M?T(h,u,()=>{U?this.drawElevator2D(o,h,u,n,A,k,l,c,!0,t):(o.fillStyle=W.COLORS.REVEALED_PATH,o.fillRect(h*n,u*n,n,n))}):E?T(h,u,()=>{if(_){const X=h===d&&u===f&&t===p,I=`${h},${u},${t}`,B=this.teleportCooldownTicks>0;if(X){const Y=Math.floor(l)===h&&Math.floor(c)===u&&t===this.player.z,$=B?W.COLORS.TELEPORT_INACTIVE:Y?W.COLORS.TELEPORT:W.COLORS.START;this.drawVortex2D(o,h,u,n,$,Y&&!B,I)}else{const Y=v===this.mazeGen.TYPES.JELLY_PORTAL,$=B?W.COLORS.TELEPORT_INACTIVE:Y?W.COLORS.JELLY_PORTAL:W.COLORS.TELEPORT,H=Math.floor(l)===h&&Math.floor(c)===u&&t===this.player.z;this.drawVortex2D(o,h,u,n,$,H&&!B,I)}y=!0}else if(U)this.drawElevator2D(o,h,u,n,A,k,l,c,!1,t);else if(v===2&&this.floorImage.complete&&this.floorImage.naturalWidth!==0)o.drawImage(this.floorImage,h*n,u*n,n,n);else if(v===this.mazeGen.TYPES.EXIT){const X=`${h},${u},${t}`;if(this.drawVortex2D(o,h,u,n,W.COLORS.EXIT,!1,X),y=!0,this.keysCollected<this.totalKeys){const I=h*n+n/2,B=u*n+n/2,Y=n*.45,$=n*.38,H=Y*.75,Z=I-Y/2,it=B-$/4,j=Math.max(3,n*.06);o.beginPath(),o.arc(I,it,H/2,Math.PI,0),o.strokeStyle="#ff3300",o.lineWidth=Math.max(2.5,n*.07),o.lineCap="round",o.stroke();const V=o.createLinearGradient(Z,it,Z,it+$);V.addColorStop(0,"#2e0808"),V.addColorStop(1,"#140303"),o.fillStyle=V,o.beginPath(),o.roundRect?o.roundRect(Z,it,Y,$,j):o.rect&&o.rect(Z,it,Y,$),o.fill(),o.strokeStyle="#ff3300",o.lineWidth=Math.max(1.5,n*.04),o.stroke();const F=String(this.totalKeys-this.keysCollected),K=F.length>1?Math.max(8,n*.22):Math.max(10,n*.28);o.save(),o.fillStyle="#ff8888",o.font=`bold ${K}px "Outfit", "Inter", sans-serif`,o.textAlign="center",o.textBaseline="middle",o.shadowColor="#ff3300",o.shadowBlur=Math.max(2,n*.08),o.fillText(F,I,B+$/4),o.restore()}}else if(v===2)o.fillStyle=W.COLORS.PATH_VISITED,o.fillRect(h*n,u*n,n,n);else{const X=`${h},${u},${t}`,I=Math.floor(l)===h&&Math.floor(c)===u&&t===this.player.z,B=I?W.COLORS.TELEPORT:W.COLORS.START;this.drawVortex2D(o,h,u,n,B,I,X),y=!0}this.drawCellShadow2D(o,h,u,n,i,v,t)}):S?(T(h,u,()=>{if(this.visitedCells.has(`${h},${u},${t}`))if(_){const B=h===d&&u===f&&t===p,Y=`${h},${u},${t}`,$=this.teleportCooldownTicks>0;if(B){const H=Math.floor(l)===h&&Math.floor(c)===u&&t===this.player.z,Z=$?W.COLORS.TELEPORT_INACTIVE:H?W.COLORS.TELEPORT:W.COLORS.START;this.drawVortex2D(o,h,u,n,Z,H&&!$,Y)}else{const H=$?W.COLORS.TELEPORT_INACTIVE:W.COLORS.TELEPORT,Z=Math.floor(l)===h&&Math.floor(c)===u&&t===this.player.z;this.drawVortex2D(o,h,u,n,H,Z&&!$,Y)}y=!0}else U?this.drawElevator2D(o,h,u,n,A,k,l,c,!1,t):this.floorImage.complete&&this.floorImage.naturalWidth!==0?o.drawImage(this.floorImage,h*n,u*n,n,n):(o.fillStyle=W.COLORS.PATH_VISITED,o.fillRect(h*n,u*n,n,n));const I=n*.05*Math.sin(Date.now()/300);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){const B=this.keyImage,Y=B.naturalWidth/B.naturalHeight,$=n*.7;let H=$,Z=$;Y>1?Z=$/Y:H=$*Y;const it=h*n+(n-H)/2,j=u*n+(n-Z)/2+I;o.drawImage(B,it,j,H,Z)}else o.beginPath(),o.arc(h*n+n/2,u*n+n/2+I,n*.25,0,2*Math.PI),o.fillStyle="#ffd700",o.fill();this.drawCellShadow2D(o,h,u,n,i,v,t)},!1),y=!0):x?(T(h,u,()=>{this.visitedCells.has(`${h},${u},${t}`)&&(this.floorImage.complete&&this.floorImage.naturalWidth!==0?o.drawImage(this.floorImage,h*n,u*n,n,n):(o.fillStyle=W.COLORS.PATH_VISITED,o.fillRect(h*n,u*n,n,n)));const I=n*.05*Math.sin(Date.now()/250);if(this.manaImage.complete&&this.manaImage.naturalWidth!==0){const B=this.manaImage,Y=B.naturalWidth/B.naturalHeight,$=n*.7;let H=$,Z=$;Y>1?Z=$/Y:H=$*Y;const it=h*n+(n-H)/2,j=u*n+(n-Z)/2+I;o.save(),o.shadowColor="rgba(0, 255, 255, 0.85)",o.shadowBlur=n*.35,o.shadowOffsetX=0,o.shadowOffsetY=0,o.drawImage(B,it,j,H,Z),o.restore()}else o.beginPath(),o.arc(h*n+n/2,u*n+n/2+I,n*.2,0,2*Math.PI),o.fillStyle="#00ffff",o.fill();this.drawCellShadow2D(o,h,u,n,i,v,t)},!1),y=!0):O?(T(h,u,()=>{if(this.floorImage.complete&&this.floorImage.naturalWidth!==0){o.save(),o.globalAlpha=.35,o.drawImage(this.floorImage,h*n,u*n,n,n),o.restore();const X=.22+.12*Math.sin(Date.now()/250);o.fillStyle=`rgba(136, 204, 255, ${X})`,o.fillRect(h*n,u*n,n,n)}else o.fillStyle=W.COLORS.PATH_KNOWN,o.fillRect(h*n,u*n,n,n)}),y=!0):this.isWallVisible(h,u,t)&&T(h,u,()=>{this.wallImage.complete&&this.wallImage.naturalWidth!==0?o.drawImage(this.wallImage,h*n,u*n,n,n):(o.fillStyle=W.COLORS.WALL,o.fillRect(h*n,u*n,n,n))})}y?this.staticMapCacheDirty=!0:this.staticMapCacheDirty=!1}isAdjacentToNonWall(t,i,e){const n=this.mazeGen.size;for(let a=-1;a<=1;a++)for(let r=-1;r<=1;r++){if(a===0&&r===0)continue;const o=t+a,l=i+r;if(o>=0&&o<n&&l>=0&&l<n&&this.maze.get(o,l,e)!==this.mazeGen.TYPES.WALL)return!0}return!1}getAuraHeightAt(t,i,e){const n=this.maze.get(t,i,e),a=t===Math.floor(this.mazeGen.startPos.x)&&i===Math.floor(this.mazeGen.startPos.y)&&e===this.mazeGen.startPos.z;if(!((n===this.mazeGen.TYPES.TELEPORT||n===this.mazeGen.TYPES.START||a)&&n!==this.mazeGen.TYPES.JELLY_PORTAL))return 0;if(this.teleportAnim&&this.teleportAnim.active){const l=this.teleportAnim,c=Math.min(1,l.elapsed/l.duration);if(l.stage==="OUT"){if(t===Math.floor(l.startX)&&i===Math.floor(l.startY)&&e===l.startZ)return 1-c}else if(l.stage==="IN"&&t===Math.floor(l.targetX)&&i===Math.floor(l.targetY)&&e===l.targetZ)return c;return 0}return t===Math.floor(this.player.x)&&i===Math.floor(this.player.y)&&e===this.player.z&&this.auraHeight||0}isWallVisible(t,i,e){if(this.maze.get(t,i,e)!==0)return!1;const a=this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.revealed;return this.isNearVisited(t,i,e)||this.isAdjacentToStatue(t,i,e)||a&&this.isAdjacentToNonWall(t,i,e)}isNearVisited(t,i,e){for(let n=-1;n<=1;n++)for(let a=-1;a<=1;a++){const r=t+n,o=i+a;if(r>=0&&r<this.mazeGen.size&&o>=0&&o<this.mazeGen.size){const l=this.maze.get(r,o,e);if(l===2||l===3||l===this.mazeGen.TYPES.JELLY_PORTAL||l===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${r},${o},${e}`))return!0}}return!1}isAdjacentToStatue(t,i,e){const n=this.mazeGen.size,a=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:1},{dx:-1,dy:1},{dx:1,dy:-1},{dx:-1,dy:-1}];for(const r of a){const o=t+r.dx,l=i+r.dy;if(o>=0&&o<n&&l>=0&&l<n&&this.maze.get(o,l,e)===this.mazeGen.TYPES.STATUE)return!0}return!1}populateFullyRevealedCells(t){const i=this.mazeGen.size;for(let e=0;e<i;e++)for(let n=0;n<i;n++){const a=this.maze.get(e,n,t),r=a===this.mazeGen.TYPES.TELEPORT,o=r&&this.discoveredTeleports.has(`${e},${n},${t}`),l=a===2||a===3||a===4||a===5||o,c=(a===1||r&&!o)&&this.isNearVisited(e,n,t),d=this.revealedPathSet.has(`${e},${n},${t}`);(l||c||d||this.isWallVisible(e,n,t))&&this.fullyRevealedCells.add(`${e},${n},${t}`)}}updatePulse(){if(!this.isMap3DActive||this.pulsatingMaterials.length===0)return;const t=.2+.5*Math.abs(Math.sin(Date.now()*.003));this.pulsatingMaterials.forEach(i=>{i.emissiveIntensity=t})}loop(){if(this.isDestroyed)return;const t=performance.now(),i=(t-this.lastFrameTime)/1e3;this.lastFrameTime=t;const e=Math.min(i,.1);if(this.isIntroPlaying?this.controls.update():this.update(e),this.updateVortexAngles(e),this.isMap3DActive||this.isIntroPlaying)if(this.isIntroPlaying)this.renderer.render(this.scene,this.camera);else{const n=1-Math.exp(-10*e);this.visualActiveFloor+=(this.activeMapFloor-this.visualActiveFloor)*n,Math.abs(this.activeMapFloor-this.visualActiveFloor)<.001&&(this.visualActiveFloor=this.activeMapFloor),this.drawIsometricMap(e)}else this.draw2DMap(e);requestAnimationFrame(()=>this.loop())}updateVortexAngles(t){if(!this.vortexAngles)return;const i=Math.floor(this.player.x),e=Math.floor(this.player.y),n=this.player.z,a=Math.floor(this.mazeGen.startPos.x),r=Math.floor(this.mazeGen.startPos.y),o=this.mazeGen.startPos.z,l=`${a},${r},${o}`,d=i===a&&e===r&&n===o?W.VORTEX_SPEED_FAST:W.VORTEX_SPEED_NORMAL;this.vortexAngles.set(l,(this.vortexAngles.get(l)||0)+t*d),this.allTeleports&&this.allTeleports.forEach(p=>{const m=`${p.x},${p.y},${p.z}`,y=i===p.x&&e===p.y&&n===p.z,T=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===p.x&&this.inactiveTeleportPos.y===p.y&&this.inactiveTeleportPos.z===p.z,h=y&&!T?W.VORTEX_SPEED_FAST:W.VORTEX_SPEED_NORMAL;this.vortexAngles.set(m,(this.vortexAngles.get(m)||0)+t*h)});const f=this.getExitPos();if(f){const p=`${f.x},${f.y},${f.z}`,m=W.VORTEX_SPEED_NORMAL;this.vortexAngles.set(p,(this.vortexAngles.get(p)||0)+t*m)}}getHexColorVariation(t,i){let e=t.replace("#","");e.length===3&&(e=e.split("").map(l=>l+l).join(""));let n=parseInt(e,16),a=(n>>16)+i,r=(n>>8&255)+i,o=(n&255)+i;return a=Math.max(0,Math.min(255,a)),r=Math.max(0,Math.min(255,r)),o=Math.max(0,Math.min(255,o)),`#${((1<<24)+(a<<16)+(r<<8)+o).toString(16).slice(1)}`}drawVortex2D(t,i,e,n,a,r,o){this.isJellyChallengeActive&&(a="#555555");const l=i*n+n/2,c=e*n+n/2;t.save(),t.translate(l,c),t.fillStyle=a,t.fillRect(-n/2,-n/2,n,n);const d=this.vortexAngles.get(o)||0;t.rotate(d);const f=this.getHexColorVariation(a,45),p=this.getHexColorVariation(a,-45),m=t.createRadialGradient(0,0,0,0,0,n*.45);m.addColorStop(0,f),m.addColorStop(.4,a),m.addColorStop(1,p);const y=t.createRadialGradient(0,0,0,0,0,n*.45);y.addColorStop(0,"#ffffff"),y.addColorStop(.3,f),y.addColorStop(1,"rgba(255, 255, 255, 0)");const T=3,h=n*.45;for(let u=0;u<T;u++){const v=u*2*Math.PI/T;t.beginPath(),t.strokeStyle=m,t.lineWidth=n*.09,t.lineCap="round";for(let g=0;g<=h;g+=1){const _=5/h,E=v+g*_,S=g*Math.cos(E),x=g*Math.sin(E);g===0?t.moveTo(S,x):t.lineTo(S,x)}t.stroke(),t.beginPath(),t.strokeStyle=y,t.lineWidth=n*.04,t.lineCap="round";for(let g=n*.12;g<=h;g+=1){const _=5/h,E=v+g*_+.15,S=g*Math.cos(E),x=g*Math.sin(E);g===Math.floor(n*.12)?t.moveTo(S,x):t.lineTo(S,x)}t.stroke()}t.restore()}playContinueAnimation(){this.isIntroPlaying=!0;const t=this.mazeGen.size;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="block");const i=document.getElementById("map3d-instructions");i&&(i.style.display="block"),this.isometricCanvas&&(this.isometricCanvas.style.display="none"),this.ui.setMap3DVisible(!0),this.isMap3DActive=!0,this.updateRendererSize(),this.build3DMap(!1),this.camera.position.set(t*.9,t*this.vScale*.6,t*.9),this.controls.target.set(0,0,0),this.controls.update(),this.hideCanvasInstant(),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=2,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableRotate=!1;const e=()=>{this.activeContinueTimer&&(clearTimeout(this.activeContinueTimer),this.activeContinueTimer=null),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this.controls.autoRotate=!1,this.animateCameraToPlayer(()=>{this._transitionToGame()})};this.activeSkipHandler=()=>e(),window.addEventListener("keydown",this.activeSkipHandler,{once:!0}),window.addEventListener("touchstart",this.activeSkipHandler,{once:!0}),this.activeContinueTimer=setTimeout(e,2500)}animateCameraToPlayer(t){const i=this.mazeGen.size,e=this.player.x-i/2,n=(this.player.z-i/2)*this.vScale,a=this.player.y-i/2,r=this.controls.target.clone(),o=new Q(e,n,a),l=this.camera.position.clone(),c=new Q(e+4,n+5,a+4),d=1100,f=performance.now(),p=m=>{if(this.isDestroyed)return;const y=m-f,T=Math.min(y/d,1),h=T<.5?4*T*T*T:1-Math.pow(-2*T+2,3)/2;this.controls.target.lerpVectors(r,o,h),this.camera.position.lerpVectors(l,c,h),this.controls.update(),T<1?requestAnimationFrame(p):t&&t()};requestAnimationFrame(p)}playIntroAnimation(){this.isIntroPlaying=!0;const t=this.mazeGen.size;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="block");const i=document.getElementById("map3d-instructions");for(i&&(i.style.display="block"),this.isometricCanvas&&(this.isometricCanvas.style.display="none");this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(new vr(16777215,.7));const e=new gr(16777215,.5);e.position.set(10,20,10),this.scene.add(e),this.ui.setMap3DVisible(!0),this.isMap3DActive=!0,this.updateRendererSize(),this.camera.position.set(t*.9,t*this.vScale*.6,t*.9),this.controls.target.set(0,0,0),this.controls.update(),this.hideCanvasInstant();const n=this.mazeGen.startPos,a=this.getExitPos(),r=new xe(.92,.92,.92),o=new ee({color:W.COLORS.THREE_START,emissive:W.COLORS.THREE_START,emissiveIntensity:.6,transparent:!0,opacity:.95}),l=new Qt(r,o);l.position.set(Math.floor(n.x)-t/2,(n.z-t/2)*this.vScale,Math.floor(n.y)-t/2),this.scene.add(l);const c=new ee({color:16724736,emissive:16724736,emissiveIntensity:.6,transparent:!0,opacity:.95}),d=new Qt(r,c);d.position.set(a.x-t/2,(a.z-t/2)*this.vScale,a.y-t/2);const f=new xe(.95,.95,.95),p=new Pn({color:16711680,wireframe:!0}),m=new Qt(f,p);d.add(m),this.scene.add(d);const y=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],T=`${Math.floor(n.x)},${Math.floor(n.y)},${n.z}`,h=`${a.x},${a.y},${a.z}`,u=new Set([T,h]),v=[{x:Math.floor(n.x),y:Math.floor(n.y),z:n.z}],g=[{x:a.x,y:a.y,z:a.z}];let _=0,E=0;const S=[];for(;_<v.length||E<g.length;){if(_<v.length){const{x:$,y:H,z:Z}=v[_++];for(const[it,j,V]of y){const F=$+it,K=H+j,nt=Z+V,_t=`${F},${K},${nt}`;F>=0&&F<t&&K>=0&&K<t&&nt>=0&&nt<t&&!u.has(_t)&&this.maze.get(F,K,nt)!==this.mazeGen.TYPES.WALL&&(u.add(_t),v.push({x:F,y:K,z:nt}),S.push({x:F,y:K,z:nt}))}}if(E<g.length){const{x:$,y:H,z:Z}=g[E++];for(const[it,j,V]of y){const F=$+it,K=H+j,nt=Z+V,_t=`${F},${K},${nt}`;F>=0&&F<t&&K>=0&&K<t&&nt>=0&&nt<t&&!u.has(_t)&&this.maze.get(F,K,nt)!==this.mazeGen.TYPES.WALL&&(u.add(_t),g.push({x:F,y:K,z:nt}),S.push({x:F,y:K,z:nt}))}}}this.controls.autoRotate=!0,this.controls.autoRotateSpeed=1.8,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableRotate=!1;const x=new xe(.88,.88,.88),O=new ee({color:W.COLORS.THREE_VISITED,transparent:!0,opacity:.72}),M=20,A=200,k=S.length,U=Math.max(1,Math.ceil(k/A));let X=0;this.activeIntroTimer=null;const I=[],B=()=>{this.activeIntroTimer&&(clearTimeout(this.activeIntroTimer),this.activeIntroTimer=null),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this._playGlitchAndTransition(I)};this.activeSkipHandler=()=>B(),window.addEventListener("keydown",this.activeSkipHandler,{once:!0}),window.addEventListener("touchstart",this.activeSkipHandler,{once:!0});const Y=()=>{if(this.isDestroyed)return;const $=Math.min(X+U,S.length);for(;X<$;X++){const{x:H,y:Z,z:it}=S[X],j=it%2===0;let V;j?V=new Cn(.35,.35,2*this.vScale,8):V=x;const F=new Qt(V,O);F.position.set(H-t/2,(it-t/2)*this.vScale,Z-t/2),this.scene.add(F),I.push(F)}X<S.length?this.activeIntroTimer=setTimeout(Y,M):(this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this._playGlitchAndTransition(I))};this.activeIntroTimer=setTimeout(Y,M)}_playGlitchAndTransition(t){if(this.isDestroyed)return;const i=5,e=90;let n=0;const a=()=>{if(this.isDestroyed)return;const r=n%2===0;t.forEach(o=>{o&&(o.visible=r)}),n++,n<i*2?setTimeout(a,e):(t.forEach(o=>{o&&(o.visible=!1)}),setTimeout(()=>this._transitionToGame(),400))};a()}_transitionToGame(){this.isDestroyed||(this.controls&&(this.controls.autoRotate=!1,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls.enableRotate=!0),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.classList.add("intro-fade-out"),setTimeout(()=>{if(this.isDestroyed)return;this.ui.setMap3DVisible(!1),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.classList.remove("intro-fade-out"),this.isMap3DActive=!1,this.isIntroPlaying=!1,this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1);const t=document.getElementById("map-area-container"),i=document.getElementById("left-hud-panel"),e=document.getElementById("right-hud-panel"),n=document.getElementById("bottom-hud-container");t&&(t.classList.remove("intro-hidden"),t.classList.add("intro-reveal"),setTimeout(()=>t.classList.remove("intro-reveal"),700)),i&&(i.classList.remove("intro-hidden"),i.classList.add("intro-reveal"),setTimeout(()=>i.classList.remove("intro-reveal"),700)),e&&(e.classList.remove("intro-hidden"),e.classList.add("intro-reveal"),setTimeout(()=>e.classList.remove("intro-reveal"),700)),n&&(n.classList.remove("intro-hidden"),n.classList.add("intro-reveal"),setTimeout(()=>n.classList.remove("intro-reveal"),700)),this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2,this.isResumedFromSave||this.ui.showInfoBanner(Dt("msgWhereAmI"))},600))}startStorytelling(){this.isStoryActive=!0,this.storyMsgIndex=0,this.storyState="OPENING",this.storyWidthProgress=0,this.storyCloseProgress=1,this.storyCharIndex=0,this.storyTypeTimer=0;const t=document.getElementById("story-screen");t&&t.classList.remove("hidden");const i=document.getElementById("story-image-loader"),e=document.getElementById("story-dialogue");this.isPreloadingActive=!1;const n=()=>{this.isPreloadingActive=!1,e&&(e.style.transform="scaleX(0)"),this.updateStoryImage(),this.handleStoryKeyDown=r=>{r.key.toLowerCase()==="escape"?this.skipStory():this.isPreloadingActive||this.triggerAdvanceStory(),r.preventDefault()},window.addEventListener("keydown",this.handleStoryKeyDown),this.handleStoryClick=r=>{const o=r.target;o&&o.closest("#story-skip-btn")||this.isPreloadingActive||this.triggerAdvanceStory()},this.handleStoryTouch=r=>{const o=r.target;o&&o.closest("#story-skip-btn")||(this.isPreloadingActive||this.triggerAdvanceStory(),r.preventDefault())},t&&(t.addEventListener("click",this.handleStoryClick),t.addEventListener("touchstart",this.handleStoryTouch,{passive:!1}))},a=document.getElementById("story-skip-btn");if(a&&(a.onclick=r=>{r.stopPropagation(),this.skipStory()}),i&&e&&(e.style.transform="scaleX(0)",this.storyImagesLoadedCount<this.storyImagesTotalCount)){this.isPreloadingActive=!0,i.classList.remove("hidden"),this.storyImagesPreloadPromise.then(()=>{i.classList.add("hidden"),n()});return}n()}endStorytelling(){this.isStoryActive=!1,this.isPreloadingActive=!1;const t=document.getElementById("story-screen");t&&t.classList.add("hidden"),this.handleStoryKeyDown&&(window.removeEventListener("keydown",this.handleStoryKeyDown),this.handleStoryKeyDown=null),this.handleStoryClick&&t&&(t.removeEventListener("click",this.handleStoryClick),this.handleStoryClick=null),this.handleStoryTouch&&t&&(t.removeEventListener("touchstart",this.handleStoryTouch),this.handleStoryTouch=null),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1);const i=document.getElementById("map-area-container"),e=document.getElementById("left-hud-panel"),n=document.getElementById("right-hud-panel"),a=document.getElementById("bottom-hud-container");i&&(i.classList.remove("hidden","intro-hidden"),i.classList.add("intro-reveal"),setTimeout(()=>i.classList.remove("intro-reveal"),700)),e&&(e.classList.remove("hidden","intro-hidden"),e.classList.add("intro-reveal"),setTimeout(()=>e.classList.remove("intro-reveal"),700)),n&&(n.classList.remove("hidden","intro-hidden"),n.classList.add("intro-reveal"),setTimeout(()=>n.classList.remove("intro-reveal"),700)),a&&(a.classList.remove("hidden","intro-hidden"),a.classList.add("intro-reveal"),setTimeout(()=>a.classList.remove("intro-reveal"),700)),this.ui.setMap3DVisible(!1),this.isMap3DActive=!1,this.isIntroPlaying=!1,this.staticMapCacheDirty=!0,this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2,this.isResumedFromSave||this.ui.showInfoBanner(Dt("msgWhereAmI"))}updateStoryImage(){const t=document.getElementById("story-img"),i=document.getElementById("story-image-canvas");if(!(!t||!i))if(i.style.background="#0b0b0b",this.storyMsgIndex===5)t.style.display="none",i.style.background="radial-gradient(circle, #222222 0%, #000000 80%)",i.removeAttribute("data-placeholder");else{const e=this.preloadedStoryImages[this.storyMsgIndex];if(e)t.src=e.src,t.style.display="block",i.removeAttribute("data-placeholder");else{let n="";this.storyMsgIndex===0?n="assets/images/presentation/1-mystical-church-of-chaos.jpg":this.storyMsgIndex===1?n="assets/images/presentation/2-mystical-church-of-chaos.jpg":this.storyMsgIndex===2?n="assets/images/presentation/3-the-jelly-god.jpg":this.storyMsgIndex===3?n="assets/images/presentation/4-player-alone.jpg":this.storyMsgIndex===4&&(n="assets/images/presentation/5-player-thrown.jpg"),t.src=n,t.onerror=()=>{t.style.display="none",i.setAttribute("data-placeholder",`[Image ${this.storyMsgIndex+1}]`)},t.onload=()=>{t.style.display="block",i.removeAttribute("data-placeholder")}}}}updateStory(t){if(!this.isStoryActive||this.isPreloadingActive)return;const i=document.getElementById("story-text"),e=document.getElementById("story-dialogue"),n=document.getElementById("story-arrow");if(!e||!i)return;const a=["storyMsg1","storyMsg2","storyMsg3","storyMsg4","storyMsg5","storyMsg6"];if(this.storyMsgIndex>=a.length){this.endStorytelling();return}const r=Dt(a[this.storyMsgIndex]),o=l=>l<.5?4*l*l*l:1-Math.pow(-2*l+2,3)/2;this.storyState==="OPENING"?(i.textContent="",n&&n.classList.add("hidden"),this.storyWidthProgress+=t/.45,this.storyWidthProgress>=1&&(this.storyWidthProgress=1,this.storyState="TYPING",this.storyCharIndex=0,this.storyTypeTimer=0),e.style.transform=`scaleX(${o(this.storyWidthProgress)})`):this.storyState==="TYPING"?(e.style.transform="scaleX(1)",n&&n.classList.add("hidden"),this.storyTypeTimer+=t,this.storyTypeTimer>=.025&&(this.storyTypeTimer=0,this.storyCharIndex++,i.textContent=r.substring(0,this.storyCharIndex),this.storyCharIndex>=r.length&&(this.storyState="WAITING"))):this.storyState==="WAITING"?(e.style.transform="scaleX(1)",i.textContent=r,n&&n.classList.remove("hidden")):this.storyState==="CLOSING"&&(i.textContent="",n&&n.classList.add("hidden"),this.storyCloseProgress-=t/.45,this.storyCloseProgress<=0&&(this.storyCloseProgress=0,this.endStorytelling()),e.style.transform=`scaleX(${o(this.storyCloseProgress)})`)}triggerAdvanceStory(){const t=["storyMsg1","storyMsg2","storyMsg3","storyMsg4","storyMsg5","storyMsg6"];if(this.storyMsgIndex>=t.length)return;const i=Dt(t[this.storyMsgIndex]);if(this.storyState==="CLOSING"){this.skipStory();return}if(this.storyState==="OPENING")this.storyState="TYPING",this.storyWidthProgress=1,this.storyCharIndex=0,this.storyTypeTimer=0;else if(this.storyState==="TYPING"){this.storyState="WAITING",this.storyCharIndex=i.length;const e=document.getElementById("story-text");e&&(e.textContent=i)}else if(this.storyState==="WAITING")if(this.storyMsgIndex+1<t.length){this.storyMsgIndex++,this.storyState="TYPING",this.storyCharIndex=0,this.storyTypeTimer=0,this.updateStoryImage();const e=document.getElementById("story-text");e&&(e.textContent="")}else this.storyState="CLOSING",this.storyCloseProgress=1}skipStory(){this.endStorytelling()}toggleTeleportMap(t){if(t&&this.isJellyChallengeActive)return;this.isMap3DActive=t,this.isTeleportMode=t;const i=document.getElementById("mobile-teleport-exit-btn");if(t){this.isMouseOrTouchDetected=!1,i&&i.classList.remove("hidden"),this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.add("hidden"),this.ui.setMap3DVisible(!0),this.activeMapFloor=this.player.z,this.visualActiveFloor=this.player.z,this.mapCursor={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.mapZoom=1,this.mapPanOffsetX=0,this.mapPanOffsetY=0;const e=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,r=this.allTeleports.findIndex(l=>l.x===e&&l.y===n&&l.z===a);r!==-1&&(this.selectedTeleportIndex=r),this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="none");const o=document.getElementById("map3d-instructions");o&&(o.style.display="none"),this.isometricCanvas?this.isometricCanvas.style.display="block":this.initIsometricCanvas(),this.teleportConfirmModalActive=!1}else this.lastTeleportCloseTime=Date.now(),i&&i.classList.add("hidden"),this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.remove("hidden"),this.ui.setMap3DVisible(!1),this.isometricCanvas&&(this.isometricCanvas.style.display="none"),this.teleportConfirmModalActive=!1}onCanvasClick(t){if(!this.isMap3DActive)return;const i=this.renderer.domElement.getBoundingClientRect();if(this.pointer.x=(t.clientX-i.left)/i.width*2-1,this.pointer.y=-((t.clientY-i.top)/i.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.isTeleportMode){const e=this.raycaster.intersectObjects(this.teleportMeshes);if(e.length>0){const n=e[0].object,{gridX:a,gridY:r,gridZ:o}=n.userData,l=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===a&&this.inactiveTeleportPos.y===r&&this.inactiveTeleportPos.z===o,c=Math.floor(this.player.x),d=Math.floor(this.player.y),f=this.player.z;a===c&&r===d&&o===f?this.toggleTeleportMap(!1):l||this.teleportTo(a,r,o)}}else{const e=this.raycaster.intersectObjects(this.knownMeshes);if(e.length>0){const n=e[0].object,{gridX:a,gridY:r,gridZ:o}=n.userData;this.triggerPathReveal(a,r,o)}}}toggleZoom(){if(this.mazeGen.size<=11)return;this.isZoomActive=!this.isZoomActive,this.staticMapCacheDirty=!0;const t=document.getElementById("zoom-out-icon"),i=document.getElementById("zoom-in-icon");t&&i&&(this.isZoomActive?(t.classList.remove("hidden"),i.classList.add("hidden")):(t.classList.add("hidden"),i.classList.remove("hidden")))}togglePause(){this.isGameOver||this.isDestroyed||this.isIntroPlaying||(this.isPaused=!this.isPaused,this.isPaused?(this.ui.showPause(),this.ui.uiMobilePauseBtn&&this.ui.uiMobilePauseBtn.classList.add("hidden")):(this.ui.hidePause(),this.ui.uiMobilePauseBtn&&!this.ui.uiMobileControls.classList.contains("hidden")&&this.ui.uiMobilePauseBtn.classList.remove("hidden")))}checkExitNeighborVisited(){const t=this.getExitPos(),i=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const e of i){const n=t.x+e.dx,a=t.y+e.dy,r=t.z+e.dz;if(n>=0&&n<this.mazeGen.size&&a>=0&&a<this.mazeGen.size&&r>=0&&r<this.mazeGen.size){const o=this.maze.get(n,a,r);if(o!==this.mazeGen.TYPES.WALL&&(o===this.mazeGen.TYPES.VISITED||o===this.mazeGen.TYPES.START||o===this.mazeGen.TYPES.ELEVATOR_VISITED))return!0}}return!1}findShortestPath(t,i,e=!1){const n=this.mazeGen.size,a=new Int8Array(n*n*n);for(let r=0;r<n;r++)for(let o=0;o<n;o++)for(let l=0;l<n;l++){const c=r*n*n+o*n+l,d=this.maze.get(r,o,l),f=r===t.x&&o===t.y&&l===t.z,p=r===i.x&&o===i.y&&l===i.z,m=r===i.x&&o===i.y&&(l===i.z-1||l===i.z+1)&&l%2===0;if(d===this.mazeGen.TYPES.WALL){a[c]=0;continue}const T=d===this.mazeGen.TYPES.TELEPORT,h=T&&this.discoveredTeleports.has(`${r},${o},${l}`),u=d===this.mazeGen.TYPES.VISITED||d===this.mazeGen.TYPES.START||d===this.mazeGen.TYPES.ELEVATOR_VISITED||h,v=(d===this.mazeGen.TYPES.PATH||T&&!h)&&this.isNearVisited(r,o,l);let g=!1;e?g=u||f||p||m:g=u||v||f||p||m,a[c]=g?1:0}return fl(t,i,a,n,0)??[]}triggerPathReveal(t,i,e,n=!1){if(this.pathRevealInterval||this.pathfinderBlockedUntil&&Date.now()<this.pathfinderBlockedUntil)return;if(this.pathfindersRemaining<=0){this.ui.showInfoBanner(Dt("msgNoPathfindersRemaining"));return}const a=this.maze.get(t,i,e)===this.mazeGen.TYPES.EXIT;if(a&&!this.exitPathfinderUnlocked){this.ui.showInfoBanner(Dt("msgExitNotFoundYet"));return}if(!n){const d=document.getElementById("pathfinder-confirm-modal");if(d){this.pathfinderConfirmTarget={x:t,y:i,z:e},d.classList.remove("hidden"),this.ui.localizeDOM();return}}this.pathRevealInterval&&(clearInterval(this.pathRevealInterval),this.pathRevealInterval=null),this.revealedPathSet.clear();let r=e;e%2===0&&(r=this.player.z<e?e+1:e-1,r<1&&(r=1),r>=this.mazeGen.size&&(r=this.mazeGen.size-2));const o={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},l={x:t,y:i,z:r},c=this.findShortestPath(o,l,a);!c||c.length===0||(this.pathfindersRemaining--,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),ls(this),this.activePathReveal=c,this.revealedPathProgress=0,this.revealedPathSet.add(`${t},${i},${e}`),this.pathRevealInterval=setInterval(()=>{if(this.revealedPathProgress<this.activePathReveal.length){const d=this.activePathReveal[this.revealedPathProgress],f=`${d.x},${d.y},${d.z}`;if(this.revealedPathSet.add(f),this.revealedPathProgress>0){const p=this.activePathReveal[this.revealedPathProgress-1];if(Math.abs(d.z-p.z)===2){const m=(d.z+p.z)/2,y=`${d.x},${d.y},${m}`;if(this.revealedPathSet.add(y),this.isMap3DActive&&this.gridMeshes){const T=this.mazeGen.size,h=this.gridMeshes[d.x*T*T+d.y*T+m];h&&(h.material=new ee({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.95*(this.isTeleportMode?.2:1)}))}}}if(this.staticMapCacheDirty=!0,this.isMap3DActive&&this.gridMeshes){const p=this.mazeGen.size,m=this.gridMeshes[d.x*p*p+d.y*p+d.z];m&&(m.material=new ee({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.95*(this.isTeleportMode?.2:1)}))}this.revealedPathProgress++}else clearInterval(this.pathRevealInterval),this.pathRevealInterval=null,this.pathfinderBlockedUntil=Date.now()+600},120))}teleportTo(t,i,e){if(!this.isJellyChallengeActive){if(this.toggleTeleportMap(!1),this.teleportAnim={active:!0,stage:"OUT",startX:this.player.x,startY:this.player.y,startZ:this.player.z,targetX:t+W.PLAYER_START_X,targetY:i+W.PLAYER_START_Y%1,targetZ:e,duration:.4,elapsed:0},this.skipCellAnimations=!0,!this.isSafeMode){const n=Math.floor(this.degree*1.5)+3;this.teleportCooldownTicks=n,this.inactiveTeleportPos={x:t,y:i,z:e},this.ui.showInfoBanner(Dt("msgOopsNoisyShit"));for(const a of this.hunters){if(a.state==="DEAD_BY_JELLY")continue;a.state="TELEPORT_TRACKING";const r=a.findPathToTarget({x:t,y:i,z:e},this.maze,this.mazeGen.TYPES);r?a.pathToTarget=r:a.pathToTarget=[]}}this.input.keys={}}}initIsometricCanvas(){const t=document.createElement("canvas");this.isometricCanvas=t,t.id="isometric-map-canvas",t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.zIndex="101",this.isometricCtx=t.getContext("2d"),this.ui.uiMap3dContainer.appendChild(t),t.addEventListener("click",h=>this.handleIsometricClick(h));const i=()=>{this.isMouseOrTouchDetected||(this.isMouseOrTouchDetected=!0)};t.addEventListener("mousemove",i),t.addEventListener("pointerdown",i);let e=null,n=null,a=0,r=0,o=0,l=0,c=!1,d=!1,f=!1,p=0;t.addEventListener("touchstart",h=>{if(!(!this.isMap3DActive||this.isIntroPlaying)){if(p=0,f=!1,h.touches.length===1){const u=h.touches[0];a=u.clientX,r=u.clientY,o=this.mapPanOffsetX,l=this.mapPanOffsetY,d=!0,c=!1}else if(h.touches.length===2){c=!0,d=!1;const u=h.touches[0],v=h.touches[1];e=Math.hypot(u.clientX-v.clientX,u.clientY-v.clientY),n=this.mapZoom}}},{passive:!1}),t.addEventListener("touchmove",h=>{if(!(!this.isMap3DActive||this.isIntroPlaying)){if(c&&h.touches.length===2){h.preventDefault();const u=h.touches[0],v=h.touches[1],g=Math.hypot(u.clientX-v.clientX,u.clientY-v.clientY);if(e&&e>0&&n){const _=t.getBoundingClientRect(),E=(u.clientX+v.clientX)/2-_.left,S=(u.clientY+v.clientY)/2-_.top,x=this.mapZoom;let O=n*(g/e);O=Math.max(.5,Math.min(4,O));const M=O/x;this.mapPanOffsetX=E-(E-(_.width/2+this.mapPanOffsetX))*M-_.width/2,this.mapPanOffsetY=S-(S-(_.height/2+this.mapPanOffsetY))*M-_.height/2,this.mapZoom=O,p=100}}else if(d&&h.touches.length===1){const u=h.touches[0],v=u.clientX-a,g=u.clientY-r,_=Math.hypot(v,g);if(p=Math.max(p,_),!f&&Math.abs(g)>40&&Math.abs(g)>Math.abs(v)*1.5){const E=this.mazeGen.size;g<-40?this.activeMapFloor-2>=1&&(this.activeMapFloor-=2,f=!0):g>40&&this.activeMapFloor+2<=E-2&&(this.activeMapFloor+=2,f=!0)}f||(this.mapPanOffsetX=o+v,this.mapPanOffsetY=l+g),h.preventDefault()}}},{passive:!1}),t.addEventListener("touchend",h=>{if(c=!1,d=!1,p<8&&!f){const u=h.changedTouches[0];if(u){const v={clientX:u.clientX,clientY:u.clientY};this.handleIsometricClick(v)}}}),t.addEventListener("wheel",h=>{if(!this.isMap3DActive||this.isIntroPlaying)return;h.preventDefault();const u=t.getBoundingClientRect(),v=h.clientX-u.left,g=h.clientY-u.top,_=this.mapZoom,E=1.15;let S=h.deltaY<0?_*E:_/E;S=Math.max(.5,Math.min(4,S));const x=u.width,O=u.height,M=S/_;this.mapPanOffsetX=v-(v-(x/2+this.mapPanOffsetX))*M-x/2,this.mapPanOffsetY=g-(g-(O/2+this.mapPanOffsetY))*M-O/2,this.mapZoom=S},{passive:!1});let m=!1,y=0,T=0;t.addEventListener("mousedown",h=>{if(!this.isMap3DActive||this.isIntroPlaying)return;const u=t.getBoundingClientRect(),v=h.clientX-u.left,g=h.clientY-u.top;if(!(this.floorClickRects&&this.floorClickRects.some(_=>v>=_.x&&v<=_.x+_.w&&g>=_.y&&g<=_.y+_.h))){if(this.isTeleportMode){if(this.teleportConfirmModalActive&&this.teleportModalClickRects&&this.teleportModalClickRects.some(_=>v>=_.x&&v<=_.x+_.w&&g>=_.y&&g<=_.y+_.h)||!this.teleportConfirmModalActive&&this.teleportDotsClickRects&&this.teleportDotsClickRects.some(_=>v>=_.x&&v<=_.x+_.w&&g>=_.y&&g<=_.y+_.h))return;if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const _=this.teleportGoBtnClickRect;if(v>=_.x&&v<=_.x+_.w&&g>=_.y&&g<=_.y+_.h)return}}m=!0,y=h.clientX,T=h.clientY}}),window.addEventListener("mousemove",h=>{if(m){const u=h.clientX-y,v=h.clientY-T;this.mapPanOffsetX+=u,this.mapPanOffsetY+=v,y=h.clientX,T=h.clientY}}),window.addEventListener("mouseup",()=>{m=!1}),t.addEventListener("mousemove",h=>{if(!this.isMap3DActive||this.isIntroPlaying)return;const u=t.getBoundingClientRect(),v=h.clientX-u.left,g=h.clientY-u.top;if(t.style.cursor="default",this.isTeleportMode){if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const _=this.teleportGoBtnClickRect;if(v>=_.x&&v<=_.x+_.w&&g>=_.y&&g<=_.y+_.h){t.style.cursor="pointer";return}}if(this.teleportConfirmModalActive&&this.teleportModalClickRects){for(const _ of this.teleportModalClickRects)if(v>=_.x&&v<=_.x+_.w&&g>=_.y&&g<=_.y+_.h){this.teleportModalSelection=_.selection,t.style.cursor="pointer";return}}else if(this.teleportDotsClickRects){const _=this.getSelectableTeleportIndices();for(const E of this.teleportDotsClickRects)if(v>=E.x&&v<=E.x+E.w&&g>=E.y&&g<=E.y+E.h&&_.includes(E.index)){this.selectedTeleportIndex=E.index;const S=this.allTeleports[E.index];this.activeMapFloor=S.z,this.mapCursor={x:S.x,y:S.y,z:S.z},t.style.cursor="pointer";return}}}if(!this.isTeleportMode){const _=this.mazeGen.size,E=this.activeMapFloor;let S=u.width*.7/_;S=Math.max(20,Math.min(48,S));const x=S*this.mapZoom,O=x/2,M=x/4,A=O*5,k=u.width/2+this.mapPanOffsetX,U=u.height/2+this.mapPanOffsetY,X=[];E+2<=_-2&&X.push(E+2),E+1<_&&X.push(E+1),X.push(E),E-1>=0&&X.push(E-1),E-2>=1&&X.push(E-2);for(const I of X){const B=U-(I-E)*A,Y=(v-k)/O,$=(g-B)/M,H=Math.round((Y+$)/2),Z=Math.round(($-Y)/2);if(H>=0&&H<_&&Z>=0&&Z<_&&this.getInteractiveElements(E).some(V=>V.x===H&&V.y===Z&&V.z===I)){this.mapCursor={x:H,y:Z,z:I},t.style.cursor="pointer";return}}}})}handleIsometricClick(t){if(!this.isMap3DActive||this.isIntroPlaying||t instanceof MouseEvent&&Date.now()-this.lastTeleportCloseTime<500)return;const i=this.isometricCanvas.getBoundingClientRect(),e=t.clientX-i.left,n=t.clientY-i.top;if(this.isTeleportMode){if(this.teleportConfirmModalActive){if(this.teleportModalClickRects){for(const g of this.teleportModalClickRects)if(e>=g.x&&e<=g.x+g.w&&n>=g.y&&n<=g.y+g.h){if(g.selection==="go"){const _=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(_.x,_.y,_.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;return}}this.teleportConfirmModalActive=!1;return}if(!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const g=this.teleportGoBtnClickRect;if(e>=g.x&&e<=g.x+g.w&&n>=g.y&&n<=g.y+g.h){const _=this.allTeleports[this.selectedTeleportIndex],E=Math.floor(this.player.x),S=Math.floor(this.player.y),x=this.player.z,O=_&&_.x===E&&_.y===S&&_.z===x;_&&!O&&(this.teleportTo(_.x,_.y,_.z),this.toggleTeleportMap(!1));return}}if(this.teleportDotsClickRects){const g=this.teleportDotsClickRects.find(_=>e>=_.x&&e<=_.x+_.w&&n>=_.y&&n<=_.y+_.h);if(g){if(this.getSelectableTeleportIndices().includes(g.index)){this.selectedTeleportIndex=g.index;const E=this.allTeleports[g.index];this.activeMapFloor=E.z,this.mapCursor={x:E.x,y:E.y,z:E.z}}return}}}if(this.floorClickRects){for(const g of this.floorClickRects)if(e>=g.x&&e<=g.x+g.w&&n>=g.y&&n<=g.y+g.h){this.activeMapFloor=g.floor;return}}const a=this.mazeGen.size,r=this.activeMapFloor;let o=i.width*.7/a;o=Math.max(20,Math.min(48,o));const l=o*this.mapZoom,c=l/2,d=l/4,f=c*5,p=i.width/2+this.mapPanOffsetX,m=i.height/2+this.mapPanOffsetY,y=(g,_,E)=>{const S=(g-_)*c+p,x=(g+_)*d-(E-r)*f+m;return{x:S,y:x}};if(this.isTeleportMode){const g=this.getInteractiveElements(r);let _=null,E=1/0;const S=this.isTouchDevice?52:35;for(const x of g){if(x.type!=="teleport")continue;const O=y(x.x,x.y,x.z),M=e-O.x,A=n-O.y,k=Math.sqrt(M*M+A*A);k<E&&(E=k,_=x)}if(_&&E<=S){const{x,y:O,z:M}=_,A=this.allTeleports.findIndex(U=>U.x===x&&U.y===O&&U.z===M),k=this.getSelectableTeleportIndices();A!==-1&&k.includes(A)&&(this.selectedTeleportIndex=A,this.mapCursor={x,y:O,z:M})}return}const T=this.getInteractiveElements(r);let h=null,u=1/0;const v=this.isTouchDevice?52:35;for(const g of T){const _=y(g.x,g.y,g.z),E=e-_.x,S=n-_.y,x=Math.sqrt(E*E+S*S);x<u&&(u=x,h=g)}if(h&&u<=v){this.mapCursor={x:h.x,y:h.y,z:h.z},this.triggerPathReveal(h.x,h.y,h.z);return}}navigateCursor(t){const i=this.activeMapFloor,e=this.getInteractiveElements(i);if(e.length===0)return;const n=this.mapCursor.x,a=this.mapCursor.y,r=this.mapCursor.z,o=this.mazeGen.size;if(t==="left"){if(e.find(c=>c.x===n&&c.y===a&&c.z===i+1&&r===i-1)){this.mapCursor={x:n,y:a,z:i+1};return}for(let c=n-1;c>=0;c--){const d=e.filter(f=>f.x===c&&f.y===a);if(d.length>0){const f=d.find(m=>m.z===i-1),p=d.find(m=>m.z===i+1);f&&p?this.mapCursor={x:c,y:a,z:i-1}:this.mapCursor={x:c,y:a,z:d[0].z};return}}}else if(t==="right"){if(e.find(c=>c.x===n&&c.y===a&&c.z===i-1&&r===i+1)){this.mapCursor={x:n,y:a,z:i-1};return}for(let c=n+1;c<o;c++){const d=e.filter(f=>f.x===c&&f.y===a);if(d.length>0){const f=d.find(m=>m.z===i-1),p=d.find(m=>m.z===i+1);f&&p?this.mapCursor={x:c,y:a,z:i+1}:this.mapCursor={x:c,y:a,z:d[0].z};return}}}else if(t==="up"){if(e.find(c=>c.x===n&&c.y===a&&c.z===i-1&&r===i+1)){this.mapCursor={x:n,y:a,z:i-1};return}for(let c=a-1;c>=0;c--){const d=e.filter(f=>f.y===c);if(d.length>0){let f=-1,p=1/0;for(const h of d){const u=Math.abs(h.x-n);u<p?(p=u,f=h.x):u===p&&h.x<f&&(f=h.x)}const m=d.filter(h=>h.x===f),y=m.find(h=>h.z===i-1),T=m.find(h=>h.z===i+1);y&&T?this.mapCursor={x:f,y:c,z:i+1}:this.mapCursor={x:f,y:c,z:m[0].z};return}}}else if(t==="down"){if(e.find(c=>c.x===n&&c.y===a&&c.z===i+1&&r===i-1)){this.mapCursor={x:n,y:a,z:i+1};return}for(let c=a+1;c<o;c++){const d=e.filter(f=>f.y===c);if(d.length>0){let f=-1,p=1/0;for(const h of d){const u=Math.abs(h.x-n);u<p?(p=u,f=h.x):u===p&&h.x<f&&(f=h.x)}const m=d.filter(h=>h.x===f),y=m.find(h=>h.z===i-1),T=m.find(h=>h.z===i+1);y&&T?this.mapCursor={x:f,y:c,z:i-1}:this.mapCursor={x:f,y:c,z:m[0].z};return}}}}getInteractiveElements(t){const i=[],e=this.mazeGen.size,n=this.mazeGen.TYPES,a=(r,o,l)=>{if(l<0||l>=e)return!1;const c=this.maze.get(r,o,l);return c===n.VISITED||c===n.START||c===n.ELEVATOR_VISITED||c===n.TELEPORT&&this.discoveredTeleports.has(`${r},${o},${l}`)};for(let r=0;r<e;r++)for(let o=0;o<e;o++){const l=this.maze.get(r,o,t);if(l===n.WALL)continue;const c=l===n.TELEPORT,d=c&&this.discoveredTeleports.has(`${r},${o},${t}`);if(d){i.push({x:r,y:o,z:t,type:"teleport"});continue}if(l===n.START){i.push({x:r,y:o,z:t,type:"start"});continue}if(l===n.EXIT){this.keysCollected===this.totalKeys&&this.exitPathfinderUnlocked&&i.push({x:r,y:o,z:t,type:"exit"});continue}(l===n.PATH||c&&!d)&&this.isNearVisited(r,o,t)&&i.push({x:r,y:o,z:t,type:"known"})}for(const r of[t-1,t+1])if(!(r<0||r>=e||r-1<1||r+1>=e))for(let o=0;o<e;o++)for(let l=0;l<e;l++){const c=this.maze.get(o,l,r);if(c===n.WALL)continue;const d=c===n.ELEVATOR_VISITED;c===1&&(a(o,l,r-1)||a(o,l,r+1))&&!d&&a(o,l,t)&&i.push({x:o,y:l,z:r,type:"shaft"})}return i}drawIsometricMap(t=.016){if(!this.isMap3DActive||this.isIntroPlaying)return;const i=this.isometricCanvas,e=this.isometricCtx;if(!i||!e)return;const n=i.width=window.innerWidth,a=i.height=window.innerHeight,r=this.activeMapFloor,o=this.visualActiveFloor;this.drawVoidBackground(e,n,a,r,t);const l=this.mazeGen.size;let c=n*.7/l;c=Math.max(20,Math.min(48,c));const d=c*this.mapZoom,f=d/2,p=d/2,m=d/4,y=p*5,T=n/2+this.mapPanOffsetX,h=a/2+this.mapPanOffsetY,u=(R,N,C)=>{const q=R,G=N,st=(q-G)*p+T,tt=(q+G)*m-(C-o)*y+h;return{x:st,y:tt}},v=R=>{e.strokeStyle=`rgba(0, 255, 0, ${.15*R})`,e.lineWidth=1;for(let N=0;N<l;N++)for(let C=0;C<l;C++){const q=u(C,N,r);e.beginPath(),e.moveTo(q.x,q.y-m),e.lineTo(q.x+p,q.y),e.lineTo(q.x,q.y+m),e.lineTo(q.x-p,q.y),e.closePath(),e.stroke()}},g=(R,N,C,q,G,st,tt=1)=>{e.save(),e.globalAlpha=tt,e.beginPath(),e.moveTo(R-C,N),e.lineTo(R,N+q),e.lineTo(R,N+q-G),e.lineTo(R-C,N-G),e.closePath(),e.fillStyle=st,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(R,N+q),e.lineTo(R+C,N),e.lineTo(R+C,N-G),e.lineTo(R,N+q-G),e.closePath(),e.fillStyle=st,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.beginPath(),e.moveTo(R-C,N-G),e.lineTo(R,N+q-G),e.lineTo(R+C,N-G),e.lineTo(R,N-q-G),e.closePath(),e.fillStyle=st,e.fill(),e.restore()},_=(R,N,C,q,G,st,tt,vt,ut=1)=>{e.save(),e.globalAlpha=ut,e.beginPath(),e.moveTo(R-C,N),e.lineTo(R,N+q),e.lineTo(R,N+q-G),e.lineTo(R-C,N-G),e.closePath(),e.fillStyle=st,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(R,N+q),e.lineTo(R+C,N),e.lineTo(R+C,N-G),e.lineTo(R,N+q-G),e.closePath(),e.fillStyle=st,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.restore(),e.save(),e.globalAlpha=ut,e.beginPath(),e.moveTo(R-C,N-G),e.lineTo(R,N+q-G),e.lineTo(R+C,N-G),e.lineTo(R,N-q-G),e.closePath(),e.fillStyle=st,e.fill(),e.clip(),e.translate(R,N-G),e.scale(1,.5);const P=this.vortexAngles.get(vt)||0;e.rotate(P);const b=this.getHexColorVariation(st,45),J=this.getHexColorVariation(st,-45),lt=C,ht=e.createRadialGradient(0,0,0,0,0,lt);ht.addColorStop(0,b),ht.addColorStop(.4,st),ht.addColorStop(1,J);const ft=e.createRadialGradient(0,0,0,0,0,lt);ft.addColorStop(0,"#ffffff"),ft.addColorStop(.3,b),ft.addColorStop(1,"rgba(255, 255, 255, 0)");const Mt=3;for(let mt=0;mt<Mt;mt++){const Tt=mt*2*Math.PI/Mt;e.beginPath(),e.strokeStyle=ht,e.lineWidth=C*.18,e.lineCap="round";for(let gt=0;gt<=lt;gt+=1){const At=5/lt,rt=Tt+gt*At,wt=gt*Math.cos(rt),Pt=gt*Math.sin(rt);gt===0?e.moveTo(wt,Pt):e.lineTo(wt,Pt)}e.stroke(),e.beginPath(),e.strokeStyle=ft,e.lineWidth=C*.08,e.lineCap="round";for(let gt=lt*.12;gt<=lt;gt+=1){const At=5/lt,rt=Tt+gt*At+.15,wt=gt*Math.cos(rt),Pt=gt*Math.sin(rt);gt===Math.floor(lt*.12)?e.moveTo(wt,Pt):e.lineTo(wt,Pt)}e.stroke()}e.restore()},E=(R,N,C)=>{if(C<0||C>=l)return!1;const q=this.maze.get(R,N,C);return q===this.mazeGen.TYPES.VISITED||q===this.mazeGen.TYPES.START||q===this.mazeGen.TYPES.ELEVATOR_VISITED||q===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${R},${N},${C}`)},S=(R,N,C,q,G,st,tt,vt,ut,P)=>{e.save(),e.globalAlpha=P;const b=ut?"#ffffff":vt?W.COLORS.NEON_UP:W.COLORS.NEON_UP_UNUSED,J=ut?"#ffffff":vt?W.COLORS.NEON_DOWN:W.COLORS.NEON_DOWN_UNUSED;if(st&&tt)e.beginPath(),e.moveTo(R,N-G-q),e.lineTo(R-C,N-G),e.lineTo(R,N-G+q),e.lineTo(R,N-G),e.closePath(),e.fillStyle=J,e.fill(),e.beginPath(),e.moveTo(R,N-G-q),e.lineTo(R,N-G),e.lineTo(R,N-G+q),e.lineTo(R+C,N-G),e.closePath(),e.fillStyle=b,e.fill(),e.beginPath(),e.moveTo(R-C,N),e.lineTo(R,N+q),e.lineTo(R,N+q-G),e.lineTo(R-C,N-G),e.closePath(),e.fillStyle=J,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(R,N+q),e.lineTo(R+C,N),e.lineTo(R+C,N-G),e.lineTo(R,N+q-G),e.closePath(),e.fillStyle=b,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill();else{const lt=st?b:J;e.beginPath(),e.moveTo(R-C,N-G),e.lineTo(R,N+q-G),e.lineTo(R+C,N-G),e.lineTo(R,N-q-G),e.closePath(),e.fillStyle=lt,e.fill(),e.beginPath(),e.moveTo(R-C,N),e.lineTo(R,N+q),e.lineTo(R,N+q-G),e.lineTo(R-C,N-G),e.closePath(),e.fillStyle=lt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(R,N+q),e.lineTo(R+C,N),e.lineTo(R+C,N-G),e.lineTo(R,N+q-G),e.closePath(),e.fillStyle=lt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill()}e.restore()},x=(R,N)=>{const C=this.mazeGen.TYPES;for(let q=0;q<l;q++)for(let G=0;G<l;G++){const st=this.maze.get(G,q,R),tt=u(G,q,R);if(this.jellyPortalFreezeTimer>0&&this.jellyPortalResetCells.has(`${G},${q}`)&&R===this.player.z){const gt=1.5-this.jellyPortalFreezeTimer,At=.6;let rt=0;gt>At&&(rt=Math.min(1,(gt-At)/.9)),e.save();const wt=Math.round(100*(1-rt));e.filter=`invert(${wt}%)`;const Pt=G===Math.floor(this.player.x)&&q===Math.floor(this.player.y),It=st===C.STATUE;if(!Pt&&!It?e.globalAlpha=(1-rt)*N:e.globalAlpha=N,st===C.WALL||It)if(It)g(tt.x,tt.y,p,m,1.5,"#444444",N),U(tt.x,tt.y,N);else{const L=p*.45,yt=m*.45,Ot=f*.25,pt="rgba(90, 20, 160, 0.8)",dt=[{dx:-.23,dy:-.23},{dx:.23,dy:-.23},{dx:-.23,dy:.23},{dx:.23,dy:.23}];for(const z of dt){const Et=u(G+z.dx,q+z.dy,R);g(Et.x,Et.y,L,yt,Ot,pt,N)}}else{let xt="#444444",L=!1,yt="";Pt?(yt=W.COLORS.JELLY_PORTAL,L=!0):st===C.TELEPORT?(yt=W.COLORS.TELEPORT_INACTIVE,L=!0):st===C.EXIT&&(yt=W.COLORS.EXIT,L=!0),L?_(tt.x,tt.y,p,m,1.5,yt,!1,`${G},${q},${R}`,N):g(tt.x,tt.y,p,m,1.5,xt,N),st===C.KEY?M(tt.x,tt.y-1.5,N):st===C.MANA&&A(tt.x,tt.y-1.5,N)}e.restore();continue}const ut=st===C.JELLY_PORTAL,P=st===C.TELEPORT||ut,b=P&&this.discoveredTeleports.has(`${G},${q},${R}`),J=st===C.VISITED||st===C.START||st===C.ELEVATOR_VISITED||b,lt=(st===C.PATH||P&&!b)&&this.isNearVisited(G,q,R),ht=this.revealedPathSet.has(`${G},${q},${R}`),ft=st===C.KEY,Mt=st===C.MANA,mt=st===C.EXIT;if(st===C.WALL||st===C.STATUE){if(st===C.WALL&&this.isWallVisible(G,q,R)||st===C.STATUE&&(this.isNearVisited(G,q,R)||this.isTutorialMode&&this.currentTutorialStage&&this.currentTutorialStage.revealed)){const At=p*.45,rt=m*.45,wt=f*.25;let Pt="rgba(90, 20, 160, 0.8)";if(st===C.STATUE){const bt=this.jellyStatueStates.get(`${G},${q},${R}`);bt&&bt.state==="CHARGING"&&(Pt=Math.floor(performance.now()/100)%2===0?W.COLORS.JELLY_MUTATION:"#ff3333")}const It=[{dx:-.23,dy:-.23},{dx:.23,dy:-.23},{dx:-.23,dy:.23},{dx:.23,dy:.23}];for(const bt of It){const xt=u(G+bt.dx,q+bt.dy,R);g(xt.x,xt.y,At,rt,wt,Pt,N)}}continue}for(const gt of this.hunters){if(gt.state==="SLEEP"||gt.state==="DEAD_BY_JELLY")continue;const At=gt.visualZ!==null?gt.visualZ:gt.z,rt=gt.visualX!==null?gt.visualX:gt.x,wt=gt.visualY!==null?gt.visualY:gt.y;if(At===null||rt===null||wt===null)continue;const Pt=Math.round((At-1)/2)*2+1,It=Math.max(0,Math.min(l-1,Math.floor(rt))),bt=Math.max(0,Math.min(l-1,Math.floor(wt)));if(G===It&&q===bt&&R===Pt){const xt=u(rt,wt,At);Y(gt,xt.x,xt.y-1.5,N)}}if(J||lt||ht||ft||Mt||mt){const At=R<l-1&&this.maze.get(G,q,R+1)!==C.WALL&&this.maze.get(G,q,R+1)!==C.STATUE,rt=R>0&&this.maze.get(G,q,R-1)!==C.WALL&&this.maze.get(G,q,R-1)!==C.STATUE,wt=this.mapCursor.x===G&&this.mapCursor.y===q&&this.mapCursor.z===R;if((J||ht)&&(At||rt))S(tt.x,tt.y,p,m,1.5,At,rt,J,ht,N);else{let pt="#222222",dt=!1,z="";const Et=Math.floor(this.player.x)===G&&Math.floor(this.player.y)===q&&R===this.player.z,Ct=`${G},${q},${R}`;if(ht)pt="#ffffff";else if(mt)z=this.keysCollected===this.totalKeys?W.COLORS.EXIT:"#ff3300",dt=!0;else if(b){const Ut=G===Math.floor(this.mazeGen.startPos.x)&&q===Math.floor(this.mazeGen.startPos.y)&&R===this.mazeGen.startPos.z,Ft=this.teleportCooldownTicks>0;Ut?z=Ft?W.COLORS.TELEPORT_INACTIVE:Et?W.COLORS.TELEPORT:W.COLORS.START:z=Ft?W.COLORS.TELEPORT_INACTIVE:ut?W.COLORS.JELLY_PORTAL:W.COLORS.TELEPORT,dt=!0}else if(J)st===C.START?(z=this.teleportCooldownTicks>0?W.COLORS.TELEPORT_INACTIVE:Et?W.COLORS.TELEPORT:W.COLORS.START,dt=!0):pt="#444444";else if(lt)if(wt){const Ut=.5+.5*Math.sin(performance.now()/120);pt=`rgb(${Math.floor(31+224*Ut)}, ${Math.floor(58+197*Ut)}, ${Math.floor(82+173*Ut)})`}else pt="#1f3a52";else(ft||Mt)&&(pt="#111111");dt?_(tt.x,tt.y,p,m,1.5,z,Et,Ct,N):g(tt.x,tt.y,p,m,1.5,pt,N)}if(ft&&M(tt.x,tt.y-1.5,N),Mt&&A(tt.x,tt.y-1.5,N),b){const pt=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===G&&this.inactiveTeleportPos.y===q&&this.inactiveTeleportPos.z===R;let dt=W.COLORS.TELEPORT;pt&&(dt=W.COLORS.TELEPORT_INACTIVE),k(tt.x,tt.y-1.5,dt,N,wt)}let bt=G===Math.floor(this.player.x)&&q===Math.floor(this.player.y)&&R===this.player.z,xt=1,L=1,yt=1;if(this.teleportAnim&&this.teleportAnim.active){const pt=this.teleportAnim,dt=Math.min(1,pt.elapsed/pt.duration);pt.stage==="OUT"?(bt=G===Math.floor(pt.startX)&&q===Math.floor(pt.startY)&&R===pt.startZ,xt=1-dt*.9,L=1+dt*2,yt=1-dt):(bt=G===Math.floor(pt.targetX)&&q===Math.floor(pt.targetY)&&R===pt.targetZ,xt=dt,L=3-dt*2,yt=dt)}const Ot=this.getAuraHeightAt(G,q,R);Ot>0&&X(tt.x,tt.y-1.5,p*.6,m*.6,f*1,Ot,N*yt),bt&&B(tt.x,tt.y-1.5,N*yt,xt,L),Ot>0&&X(tt.x,tt.y-1.5,p*.6,m*.6,f*1,Ot,N*yt),this.jellyProjectiles.forEach(pt=>{if(pt.z===R){const dt=Math.floor(pt.x),z=Math.floor(pt.y);if(dt===G&&z===q){const Et=u(pt.x,pt.y,R);I(Et.x,Et.y-1.5,N)}}})}}},O=(R,N)=>{const C=this.mazeGen.TYPES;for(let q=0;q<l;q++)for(let G=0;G<l;G++){const st=this.maze.get(G,q,R);if(st===C.WALL)continue;const tt=this.revealedPathSet.has(`${G},${q},${R}`),vt=st===C.ELEVATOR_VISITED;if(st===1&&(E(G,q,R-1)||E(G,q,R+1)),tt||E(G,q,r)){const ut=u(G,q,R-1);ut.y-=1.5;const P=u(G,q,R+1);let b=W.COLORS.PATH_KNOWN;tt?b="#ffffff":vt&&(b=W.COLORS.PATH_VISITED);const J=this.mapCursor.x===G&&this.mapCursor.y===q&&this.mapCursor.z===R;let lt=b,ht=N;J&&(ht=.4+.6*(.5+.5*Math.sin(performance.now()/120)),lt="#ffffff");const Mt=(gt=>{const At=gt.replace("#",""),rt=parseInt(At,16),wt=rt>>16&255,Pt=rt>>8&255,It=rt&255;return`${wt}, ${Pt}, ${It}`})(lt),mt=p*.25;e.save(),e.globalAlpha=ht;const Tt=e.createLinearGradient(0,ut.y,0,P.y);Tt.addColorStop(0,`rgba(${Mt}, 0.15)`),Tt.addColorStop(.2,`rgba(${Mt}, 0.65)`),Tt.addColorStop(.5,`rgba(${Mt}, 0.95)`),Tt.addColorStop(.8,`rgba(${Mt}, 0.65)`),Tt.addColorStop(1,`rgba(${Mt}, 0.15)`),e.beginPath(),e.moveTo(ut.x-mt,ut.y),e.lineTo(ut.x,ut.y+mt/2),e.lineTo(P.x,P.y+mt/2),e.lineTo(P.x-mt,P.y),e.closePath(),e.fillStyle=Tt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(ut.x,ut.y+mt/2),e.lineTo(ut.x+mt,ut.y),e.lineTo(P.x+mt,P.y),e.lineTo(P.x,P.y+mt/2),e.closePath(),e.fillStyle=Tt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.restore()}}},M=(R,N,C)=>{e.save(),e.globalAlpha=C;const q=Math.sin(performance.now()/200)*3-6,G=N+q;if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){const st=this.keyImage,tt=st.naturalWidth/st.naturalHeight,vt=d*.55;let ut=vt,P=vt;tt>1?P=vt/tt:ut=vt*tt,e.drawImage(st,R-ut/2,G-P/2,ut,P)}else e.beginPath(),e.moveTo(R,G-5),e.lineTo(R+4,G),e.lineTo(R,G+5),e.lineTo(R-4,G),e.closePath(),e.fillStyle="#ffd700",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();e.restore()},A=(R,N,C)=>{e.save(),e.globalAlpha=C;const q=Math.sin(performance.now()/250)*3-6,G=N+q;if(this.manaImage.complete&&this.manaImage.naturalWidth!==0){const st=this.manaImage,tt=st.naturalWidth/st.naturalHeight,vt=d*.55;let ut=vt,P=vt;tt>1?P=vt/tt:ut=vt*tt,e.shadowColor="rgba(0, 255, 255, 0.85)",e.shadowBlur=d*.25,e.shadowOffsetX=0,e.shadowOffsetY=0,e.drawImage(st,R-ut/2,G-P/2,ut,P)}else e.beginPath(),e.moveTo(R,G-5),e.lineTo(R+4,G),e.lineTo(R,G+5),e.lineTo(R-4,G),e.closePath(),e.fillStyle="#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();e.restore()},k=(R,N,C,q,G)=>{e.save(),e.globalAlpha=q;const st=Math.sin(performance.now()/250)*2-4,tt=N+st;if(G){e.save();const vt=1+.35*(.5+.5*Math.sin(performance.now()/100));e.beginPath(),e.arc(R,tt,7*vt,0,Math.PI*2),e.fillStyle="rgba(255, 255, 255, 0.4)",e.fill(),e.restore()}e.beginPath(),e.arc(R,tt,5,0,Math.PI*2),e.fillStyle=G?"#ffffff":C,e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.2,e.stroke(),e.restore()},U=(R,N,C)=>{if(this.statueImage&&this.statueImage.complete&&this.statueImage.naturalWidth!==0){e.save(),e.beginPath();const q=p*.7,G=m*.7;e.ellipse(R,N,q,G,0,0,Math.PI*2),e.fillStyle="rgba(0, 0, 0, 0.45)",e.fill(),e.restore(),e.save(),e.globalAlpha=C;const st=this.statueImage.width/this.statueImage.height,tt=d*.8,vt=tt/st;e.drawImage(this.statueImage,R-tt/2,N-vt,tt,vt),e.restore()}else g(R,N,p*.4,m*.4,f*.8,"#555555",C)},X=(R,N,C,q,G,st,tt,vt)=>{const ut=G*st;if(ut<=0)return;const P=this.auraTime||0;e.save(),e.beginPath(),e.ellipse(R,N,C,q,0,0,Math.PI*2),e.fillStyle="rgba(0, 220, 255, 0.05)",e.fill(),e.lineWidth=1.5,e.strokeStyle=`rgba(0, 220, 255, ${tt*.4})`,e.stroke();const b=e.createLinearGradient(R,N,R,N-ut);b.addColorStop(0,`rgba(0, 220, 255, ${tt*.45})`),b.addColorStop(.3,`rgba(0, 200, 255, ${tt*.3})`),b.addColorStop(1,"rgba(0, 150, 255, 0.0)"),e.beginPath(),e.moveTo(R-C,N),e.lineTo(R-C,N-ut),e.ellipse(R,N-ut,C,q,0,Math.PI,0,!0),e.lineTo(R+C,N),e.ellipse(R,N,C,q,0,0,Math.PI,!1),e.fillStyle=b,e.fill();const J=e.createLinearGradient(R,N,R,N-ut);J.addColorStop(0,`rgba(0, 255, 255, ${tt*.7})`),J.addColorStop(1,"rgba(0, 255, 255, 0.0)"),e.strokeStyle=J,e.lineWidth=1.5,e.beginPath(),e.moveTo(R-C,N),e.lineTo(R-C,N-ut),e.moveTo(R+C,N),e.lineTo(R+C,N-ut),e.stroke();for(let ht=0;ht<3;ht++){const ft=(P*.8+ht/3)%1*st,Mt=N-G*ft;if(Mt>N-ut){const mt=(1-ft)*tt*.6;e.beginPath(),e.ellipse(R,Mt,C,q,0,0,Math.PI*2),e.strokeStyle=`rgba(0, 255, 255, ${mt})`,e.lineWidth=1,e.stroke()}}const lt=(1-st*.3)*tt*.8;e.beginPath(),e.ellipse(R,N-ut,C,q,0,0,Math.PI*2),e.fillStyle=`rgba(0, 255, 255, ${lt*.1})`,e.fill(),e.strokeStyle=`rgba(0, 255, 255, ${lt})`,e.lineWidth=1.5,e.stroke(),e.restore()},I=(R,N,C)=>{e.save(),e.globalAlpha=C,e.beginPath(),e.ellipse(R,N+5,p*.18,m*.18,0,0,Math.PI*2),e.fillStyle="rgba(0, 0, 0, 0.35)",e.fill();const q=p*.22,G=e.createRadialGradient(R,N,1,R,N,q);G.addColorStop(0,"#ffffff"),G.addColorStop(.3,"#ff3333"),G.addColorStop(1,"rgba(255, 51, 51, 0)"),e.beginPath(),e.arc(R,N,q,0,Math.PI*2),e.fillStyle=G,e.fill(),e.restore()},B=(R,N,C,q=1,G=1)=>{const st=`${this.playerVertical}_${this.playerSide}`,tt=this.mageImages[st];let vt=C;this.deathAnimation&&this.deathAnimation.active&&(Math.floor(Date.now()/120)%2===0||(vt=.2));const ut=p*.55*q,P=m*.55,b=R-p*.12,J=N-m*.12;if(e.save(),e.beginPath(),e.ellipse(b,J,ut,P,0,0,Math.PI*2),e.fillStyle=`rgba(0, 0, 0, ${vt*.45})`,e.fill(),e.restore(),tt&&tt.complete){e.save(),e.globalAlpha=vt;const lt=d*.7,ht=lt,ft=lt*(tt.height/tt.width);e.translate(R,N),e.scale(q,G);const Mt=-ft;e.drawImage(tt,-ht/2,Mt,ht,ft),e.restore()}else e.save(),e.globalAlpha=vt,e.translate(R,N),e.scale(q,G),e.beginPath(),e.arc(0,-3,5,0,Math.PI*2),e.fillStyle=W.COLORS.PLAYER,e.fill(),e.strokeStyle=W.COLORS.PLAYER_OUTLINE,e.lineWidth=1.5,e.stroke(),e.restore();if(this.deathAnimation&&this.deathAnimation.active){const lt=Math.min(1,this.deathAnimation.delayElapsed/this.deathAnimation.delayDuration),ht=-(tt&&tt.complete?d*.7*(tt.height/tt.width):d*.5),ft=d*.7,Mt=(1-lt)*ht-4*ft*lt*(1-lt);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){e.save();const mt=this.keyImage,Tt=mt.naturalWidth/mt.naturalHeight,gt=d*.55;let At=gt,rt=gt;Tt>1?rt=gt/Tt:At=gt*Tt,e.drawImage(mt,R-At/2,N-rt/2+Mt,At,rt),e.restore()}else e.save(),e.beginPath(),e.arc(R,N+Mt,d*.15,0,2*Math.PI),e.fillStyle="#ffd700",e.fill(),e.restore()}if(W.SHOW_COLLISION_DEBUG){e.save();const lt=W.PLAYER_COLLISION_OFFSET_X||0,ht=W.PLAYER_COLLISION_OFFSET_Y||0,ft=(lt-ht)*p,Mt=(lt+ht)*m,mt=R+ft,Tt=N+Mt;e.beginPath(),e.moveTo(mt,Tt-W.PLAYER_COLLISION_RADIUS*f),e.lineTo(mt+W.PLAYER_COLLISION_RADIUS*d,Tt),e.lineTo(mt,Tt+W.PLAYER_COLLISION_RADIUS*f),e.lineTo(mt-W.PLAYER_COLLISION_RADIUS*d,Tt),e.closePath(),e.strokeStyle="#ff0000",e.lineWidth=1.5,e.stroke(),e.restore()}},Y=(R,N,C,q)=>{if(R&&R.lowCanvas){e.save(),e.globalAlpha=q;const G=d*.9;e.save(),e.beginPath();const st=p*.6,tt=m*.6;e.ellipse(N,C,st,tt,0,0,Math.PI*2),e.fillStyle="rgba(0, 0, 0, 0.35)",e.fill(),e.restore();const vt=Math.sin(R.jellyTime*3)*(d*.06),ut=d*.38+vt,P=C-ut,b=R.jellyTime,J=Math.sin(b)*6,lt=Math.cos(b*.7)*4,ht=1+Math.sin(b*1.2)*.06,ft=1+Math.cos(b*.8)*.06,Mt=J*Math.PI/180,mt=lt*Math.PI/180;e.save(),e.translate(N,P),e.transform(ht,Math.tan(mt),Math.tan(Mt),ft,0,0),e.imageSmoothingEnabled=!1,e.drawImage(R.lowCanvas,-G/2,-G/2,G,G),e.restore(),e.restore()}else{e.save(),e.globalAlpha=q;const G=4+Math.sin(performance.now()/100)*1.5;e.beginPath(),e.arc(N,C-3,G,0,Math.PI*2),e.fillStyle=W.COLORS.HUNTER||"#ff00ff",e.fill(),e.strokeStyle="#ff0000",e.lineWidth=1,e.stroke(),e.restore()}},$=R=>{const N=Math.abs(R-o);return N<=2?1-N/2*(1-.35):N<4?.35*(1-(N-2)/2):0};for(let R=1;R<l;R+=2){if(R-1>=0&&(R-1===r-1||R-1===r+1)){const C=$(R-2),q=$(R),G=Math.max(C,q)*.8;G>.01&&O(R-1,G)}const N=$(R);N>.01&&(R===r&&v(N),x(R,N))}const H=this.getInteractiveElements(r);if(H.forEach(R=>{if(R.type==="shaft"){const N=u(R.x,R.y,R.z),C=this.mapCursor.x===R.x&&this.mapCursor.y===R.y&&this.mapCursor.z===R.z;e.save();const q=.5+.5*Math.sin(performance.now()/150);e.beginPath(),e.arc(N.x,N.y,7.5+q*2.5,0,Math.PI*2),e.fillStyle=C?"#ffffff":"#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke(),e.restore()}}),this.mapCursor.x===Math.floor(this.player.x)&&this.mapCursor.y===Math.floor(this.player.y)&&this.mapCursor.z===this.player.z||H.some(R=>R.x===this.mapCursor.x&&R.y===this.mapCursor.y&&R.z===this.mapCursor.z)){const R=u(this.mapCursor.x,this.mapCursor.y,this.mapCursor.z),N=Math.sin(performance.now()/150)*4;e.save();const C=1-N/16,q=u(this.mapCursor.x,this.mapCursor.y,r);e.translate(q.x,q.y),e.scale(1,.5),e.beginPath(),e.arc(0,0,8*C,0,Math.PI*2),e.fillStyle=`rgba(0, 0, 0, ${.55*C})`,e.fill(),e.restore(),e.save();const G=R.x,st=R.y-f-12+N;e.beginPath(),e.moveTo(G,st),e.lineTo(G-6,st-8),e.lineTo(G-3,st-8),e.lineTo(G-3,st-16),e.lineTo(G+3,st-16),e.lineTo(G+3,st-8),e.lineTo(G+6,st-8),e.closePath(),e.fillStyle="#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke(),e.restore()}const j=this.isTouchDevice?65:45,V=a/3,F=a/3*2,K=n-j;e.save(),e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=4,e.lineCap="round",e.beginPath(),e.moveTo(K,V),e.lineTo(K,F),e.stroke(),e.strokeStyle="rgba(0, 255, 255, 0.4)",e.lineWidth=1.5;for(let R=V;R<=F;R+=(F-V)/6)e.beginPath(),e.moveTo(K-5,R),e.lineTo(K+5,R),e.stroke();e.restore();const nt=(V+F)/2,_t=(F-V)/2,St=o-r,Nt=nt-St/2*_t;if(e.save(),e.fillStyle="#00ffff",e.beginPath(),e.arc(K,Nt,this.isTouchDevice?8:5,0,Math.PI*2),e.fill(),e.restore(),this.floorClickRects=[],[{floor:r+2,y:V,label:`${(r+2+1)/2}F`,valid:r+2<=l-2},{floor:r,y:nt,label:`${(r+1)/2}F`,valid:!0},{floor:r-2,y:F,label:`${(r-2+1)/2}F`,valid:r-2>=1}].forEach(R=>{if(!R.valid)return;const N=this.isTouchDevice,C=N?90:60,q=N?50:36,G=K-C-(N?20:15),st=R.y-q/2,tt=R.floor===r;e.save(),e.beginPath(),e.moveTo(G+6,st),e.lineTo(G+C,st),e.lineTo(G+C,st+q-6),e.lineTo(G+C-6,st+q),e.lineTo(G,st+q),e.lineTo(G,st+6),e.closePath(),e.fillStyle=tt?"rgba(0, 255, 255, 0.25)":"rgba(0, 0, 0, 0.6)",e.strokeStyle=tt?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=tt?2:1,e.fill(),e.stroke(),e.restore(),e.strokeStyle=tt?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=tt?2:1,e.beginPath(),e.moveTo(G+C,R.y),e.lineTo(K-2,R.y),e.stroke(),e.fillStyle=tt?"#00ffff":"rgba(255, 255, 255, 0.5)",e.font=N?'bold 12px "Courier New"':'bold 8px "Courier New"',e.textAlign="center",e.textBaseline="top",e.fillText("LEVEL",G+C/2,st+(N?8:6)),e.fillStyle="#ffffff",e.font=N?'bold 22px "Courier New"':'bold 15px "Courier New"',e.textBaseline="top",e.fillText(R.label,G+C/2,st+(N?22:16)),this.floorClickRects.push({floor:R.floor,x:G,y:st,w:C+(N?25:15),h:q})}),!this.isTeleportMode){const R=this.isTouchDevice,N=R?30:25,C=30,q=R?160:120,G=R?50:36;e.save(),e.beginPath(),e.moveTo(N+6,C),e.lineTo(N+q,C),e.lineTo(N+q,C+G-6),e.lineTo(N+q-6,C+G),e.lineTo(N,C+G),e.lineTo(N,C+6),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.7)",e.strokeStyle="rgba(0, 255, 255, 0.35)",e.lineWidth=1.5,e.fill(),e.stroke(),e.restore(),e.fillStyle="rgba(0, 255, 255, 0.7)",e.font=`bold ${R?11:8}px 'Roboto', sans-serif`,e.textAlign="center",e.textBaseline="top",e.fillText(Dt("hudPathfinders"),N+q/2,C+(R?8:5)),e.fillStyle="#ffffff",e.font=`bold ${R?18:13}px 'Roboto', sans-serif`,e.textBaseline="top",e.fillText(`${this.pathfindersRemaining} / ${this.totalPathfinders}`,N+q/2,C+(R?23:16))}if(this.isTeleportMode){const C=n/2-90,q=30;e.save(),e.beginPath(),e.moveTo(C+8,q),e.lineTo(C+180-8,q),e.lineTo(C+180,q+8),e.lineTo(C+180,q+38-8),e.lineTo(C+180-8,q+38),e.lineTo(C+8,q+38),e.lineTo(C,q+38-8),e.lineTo(C,q+8),e.closePath(),e.fillStyle="rgba(255, 140, 0, 0.22)",e.strokeStyle="#ff8c00",e.lineWidth=2.5,e.fill(),e.stroke(),e.restore(),e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Dt("teleportWarning"),n/2,q+38/2)}if(this.isTeleportMode){const R=this.allTeleports.length,N=this.isTouchDevice,C=N?72:56,q=N?16:10,G=N?24:15,st=N?38:25,tt=N?90:62,vt=N?46:30,ut=N?46:36,P=!this.teleportConfirmModalActive,b=P?ut+tt:0,J=n-40,lt=(R-1)*C,ht=lt+60+b,ft=N&&ht>J;let Mt,mt,Tt,gt;if(this.teleportDotsClickRects=[],ft){const At=Math.ceil(R/2),rt=R-At,wt=(At-1)*C,Pt=(rt-1)*C,It=Math.max(wt,Pt);Mt=It+60+b,mt=124,Tt=a-145,gt=n/2-Mt/2;const bt=It,xt=gt+30+(bt-wt)/2,L=gt+30+(bt-Pt)/2,yt=Tt+35,Ot=Tt+89;if(e.save(),e.beginPath(),e.moveTo(gt+10,Tt),e.lineTo(gt+Mt-10,Tt),e.lineTo(gt+Mt,Tt+10),e.lineTo(gt+Mt,Tt+mt-10),e.lineTo(gt+Mt-10,Tt+mt),e.lineTo(gt+10,Tt+mt),e.lineTo(gt,Tt+mt-10),e.lineTo(gt,Tt+10),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.72)",e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=1.5,e.fill(),e.stroke(),e.restore(),this.allTeleports.forEach((pt,dt)=>{const z=dt<At,Et=z?dt:dt-At,Ct=(z?xt:L)+Et*C,Ut=z?yt:Ot,Ft=`${pt.x},${pt.y},${pt.z}`,jt=this.discoveredTeleports.has(Ft),Vt=dt===this.selectedTeleportIndex,se=pt.x===Math.floor(this.player.x)&&pt.y===Math.floor(this.player.y)&&pt.z===this.player.z,ae=this.inactiveTeleportPos&&pt.x===this.inactiveTeleportPos.x&&pt.y===this.inactiveTeleportPos.y&&pt.z===this.inactiveTeleportPos.z;if(e.save(),!jt)e.beginPath(),e.arc(Ct,Ut,q,0,Math.PI*2),e.fillStyle="rgba(100, 100, 100, 0.45)",e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.15)",e.stroke();else if(ae)e.beginPath(),e.arc(Ct,Ut,q,0,Math.PI*2),e.fillStyle="rgba(255, 45, 0, 0.2)",e.fill(),e.strokeStyle="rgba(255, 45, 0, 0.4)",e.lineWidth=1.2,e.stroke();else{if(Vt){const Zt=1+.3*(.5+.5*Math.sin(performance.now()/120)),re=(N?36:22)*Zt;e.beginPath(),e.arc(Ct,Ut,re,0,Math.PI*2),e.fillStyle="rgba(0, 255, 255, 0.18)",e.fill()}e.beginPath(),e.arc(Ct,Ut,Vt?G:q,0,Math.PI*2),e.fillStyle=Vt?"#ffffff":"#00b3ff",e.fill(),e.strokeStyle=Vt?"#00ffff":"#ffffff",e.lineWidth=Vt?2:1,e.stroke(),se&&(e.beginPath(),e.arc(Ct,Ut,Vt?N?12:8:N?8:5,0,Math.PI*2),e.fillStyle="#39ff14",e.fill())}e.restore(),this.teleportDotsClickRects.push({x:Ct-st,y:Ut-st,w:st*2,h:st*2,index:dt})}),P){const pt=gt+30+bt+ut,dt=Tt+mt/2-vt/2;e.save(),e.beginPath(),e.roundRect?e.roundRect(pt,dt,tt,vt,6):e.rect&&e.rect(pt,dt,tt,vt),e.fillStyle="rgba(0, 255, 255, 0.15)",e.strokeStyle="#00ffff",e.lineWidth=2,e.fill(),e.stroke(),e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Dt("teleportGo"),pt+tt/2,dt+vt/2),e.restore(),this.teleportGoBtnClickRect={x:pt,y:dt,w:tt,h:vt}}else this.teleportGoBtnClickRect=null}else{const At=a-(N?70:60);Mt=lt+60+b,mt=N?86:62,Tt=At-mt/2,gt=n/2-Mt/2;const rt=gt+30;if(e.save(),e.beginPath(),e.moveTo(gt+6,Tt),e.lineTo(gt+Mt-6,Tt),e.lineTo(gt+Mt,Tt+6),e.lineTo(gt+Mt,Tt+mt-6),e.lineTo(gt+Mt-6,Tt+mt),e.lineTo(gt+6,Tt+mt),e.lineTo(gt,Tt+mt-6),e.lineTo(gt,Tt+6),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.72)",e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=1,e.fill(),e.stroke(),e.restore(),this.allTeleports.forEach((wt,Pt)=>{const It=rt+Pt*C,bt=`${wt.x},${wt.y},${wt.z}`,xt=this.discoveredTeleports.has(bt),L=Pt===this.selectedTeleportIndex,yt=wt.x===Math.floor(this.player.x)&&wt.y===Math.floor(this.player.y)&&wt.z===this.player.z,Ot=this.inactiveTeleportPos&&wt.x===this.inactiveTeleportPos.x&&wt.y===this.inactiveTeleportPos.y&&wt.z===this.inactiveTeleportPos.z;if(e.save(),!xt)e.beginPath(),e.arc(It,At,q,0,Math.PI*2),e.fillStyle="rgba(100, 100, 100, 0.45)",e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.15)",e.stroke();else if(Ot)e.beginPath(),e.arc(It,At,q,0,Math.PI*2),e.fillStyle="rgba(255, 45, 0, 0.2)",e.fill(),e.strokeStyle="rgba(255, 45, 0, 0.4)",e.lineWidth=1.2,e.stroke();else{if(L){const pt=1+.3*(.5+.5*Math.sin(performance.now()/120)),dt=(N?36:22)*pt;e.beginPath(),e.arc(It,At,dt,0,Math.PI*2),e.fillStyle="rgba(0, 255, 255, 0.18)",e.fill()}e.beginPath(),e.arc(It,At,L?G:q,0,Math.PI*2),e.fillStyle=L?"#ffffff":"#00b3ff",e.fill(),e.strokeStyle=L?"#00ffff":"#ffffff",e.lineWidth=L?2:1,e.stroke(),yt&&(e.beginPath(),e.arc(It,At,L?N?12:8:N?8:5,0,Math.PI*2),e.fillStyle="#39ff14",e.fill())}e.restore(),this.teleportDotsClickRects.push({x:It-st,y:At-st,w:st*2,h:st*2,index:Pt})}),P){const wt=rt+lt+ut,Pt=At-vt/2;e.save(),e.beginPath(),e.rect(wt,Pt,tt,vt),e.fillStyle="rgba(0, 255, 255, 0.15)",e.strokeStyle="#00ffff",e.lineWidth=1.5,e.fill(),e.stroke(),e.fillStyle="#ffffff",e.font=`bold ${N?15:12}px 'Roboto', sans-serif`,e.textAlign="center",e.textBaseline="middle",e.fillText(Dt("teleportGo"),wt+tt/2,Pt+vt/2),e.restore(),this.teleportGoBtnClickRect={x:wt,y:Pt,w:tt,h:vt}}else this.teleportGoBtnClickRect=null}if(this.teleportConfirmModalActive){e.fillStyle="rgba(0, 0, 0, 0.6)",e.fillRect(0,0,n,a);const At=320,rt=160,wt=n/2-At/2,Pt=a/2-rt/2;e.save(),e.beginPath(),e.moveTo(wt+10,Pt),e.lineTo(wt+At-10,Pt),e.lineTo(wt+At,Pt+10),e.lineTo(wt+At,Pt+rt-10),e.lineTo(wt+At-10,Pt+rt),e.lineTo(wt+10,Pt+rt),e.lineTo(wt,Pt+rt-10),e.lineTo(wt,Pt+10),e.closePath(),e.fillStyle="rgba(10, 18, 30, 0.94)",e.strokeStyle="#00ffff",e.lineWidth=2,e.fill(),e.stroke(),e.restore(),e.fillStyle="#00ffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="top",e.fillText(Dt("teleportationLink"),n/2,Pt+16),e.strokeStyle="rgba(0, 255, 255, 0.2)",e.lineWidth=1,e.beginPath(),e.moveTo(wt+15,Pt+34),e.lineTo(wt+At-15,Pt+34),e.stroke();const It=this.allTeleports[this.selectedTeleportIndex];e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.fillText(Dt("teleportJumpSector",{floor:(It.z+1)/2}),n/2,Pt+52),e.fillStyle="rgba(255, 255, 255, 0.7)",e.font="13px 'Roboto', sans-serif",e.fillText(Dt("teleportTargetGrid",{x:It.x,y:It.y}),n/2,Pt+75);const bt=100,xt=30,L=n/2-bt-15,yt=Pt+105,Ot=n/2+15,pt=Pt+105;this.teleportModalClickRects=[{x:L,y:yt,w:bt,h:xt,selection:"go"},{x:Ot,y:pt,w:bt,h:xt,selection:"cancel"}];const dt=(z,Et,Ct,Ut)=>{const Ft=this.teleportModalSelection===Ut;e.save(),e.beginPath(),e.moveTo(z+4,Et),e.lineTo(z+bt-4,Et),e.lineTo(z+bt,Et+4),e.lineTo(z+bt,Et+xt-4),e.lineTo(z+bt-4,Et+xt),e.lineTo(z+4,Et+xt),e.lineTo(z,Et+xt-4),e.lineTo(z,Et+4),e.closePath(),e.fillStyle=Ft?"rgba(0, 255, 255, 0.35)":"rgba(0, 0, 0, 0.6)",e.strokeStyle=Ft?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=Ft?2:1,e.fill(),e.stroke(),e.restore(),e.fillStyle=Ft?"#ffffff":"#00ffff",e.font="bold 13px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Ct,z+bt/2,Et+xt/2)};dt(L,yt,Dt("teleportGo"),"go"),dt(Ot,pt,Dt("teleportCancel"),"cancel")}}}getFloorVisitedPercentage(t){let i=0,e=0;const n=this.mazeGen.size,a=this.mazeGen.TYPES;for(let r=0;r<n;r++)for(let o=0;o<n;o++){const l=this.maze.get(r,o,t);if(l===a.WALL||l===a.EXIT||l===a.STATUE||l===a.TELEPORT&&!this.discoveredTeleports.has(`${r},${o},${t}`))continue;i++,(l===a.VISITED||l===a.START||l===a.ELEVATOR_VISITED||l===a.TELEPORT&&this.discoveredTeleports.has(`${r},${o},${t}`)||l===a.JELLY_PORTAL)&&e++}return i===0?0:Math.floor(e/i*100)}triggerFloorCompletion(t){if(this.completedFloors.has(t))return;let i=0,e=0;const n=this.mazeGen.size,a=this.mazeGen.TYPES;for(let m=0;m<n;m++)for(let y=0;y<n;y++){const T=this.maze.get(m,y,t);T===a.STATUE&&e++,(T===a.VISITED||T===a.START||T===a.ELEVATOR_VISITED||T===a.TELEPORT&&this.discoveredTeleports.has(`${m},${y},${t}`)||T===a.JELLY_PORTAL)&&i++}const r=Math.floor(this.player.x),o=Math.floor(this.player.y),l=new Set,c=[[r,o]];l.add(`${r},${o}`);const d=new Set,f=new Set;for(d.add(r),f.add(o);c.length>0;){const[m,y]=c.shift(),T=[[m+1,y],[m-1,y],[m,y+1],[m,y-1]];for(const[h,u]of T)if(h>=0&&h<n&&u>=0&&u<n){const v=`${h},${u}`;if(!l.has(v)){const g=this.maze.get(h,u,t);g!==a.WALL&&g!==a.EXIT&&g!==a.STATUE&&(g!==a.TELEPORT||this.discoveredTeleports.has(`${h},${u},${t}`))&&(l.add(v),d.add(h),f.add(u),c.push([h,u]))}}}const p=d.size>=2&&f.size>=2;if(i>W.JELLY_CHALLENGE_MIN_FREE_CELLS&&e>=1&&!this.isSafeMode&&p){this.isJellyChallengeActive=!0,this.updateGameContainerBackground(),this.completedFloors.add(t),this.previouslyDeadHuntersInfo=this.hunters.filter(m=>m.state==="DEAD_BY_JELLY").map(m=>({threshold:m.respawnThresholdPercentage||0})),this.hunterMeshes.forEach(m=>{this.scene.remove(m.mesh),m.trail1&&this.scene.remove(m.trail1),m.trail2&&this.scene.remove(m.trail2)}),this.hunterMeshes=[],this.hunters=[],this.dyingHunters=[],this.ui.showInfoBanner(Dt("msgLockedIn")),this.jellyStatueStates.clear();for(let m=0;m<n;m++)for(let y=0;y<n;y++)if(this.maze.get(m,y,t)===a.STATUE){const h=.5+Math.random()*2.5;this.jellyStatueStates.set(`${m},${y},${t}`,{shotsFired:0,state:"IDLE",chargeTimer:h,initialDelay:h})}}else this.completedFloors.add(t),this.ui.showInfoBanner(Dt("msgFloorComplete"))}updateJellyChallenge(t){const i=this.mazeGen.size;for(let a=this.jellyProjectiles.length-1;a>=0;a--){const r=this.jellyProjectiles[a];if(r.x+=r.dirX*W.JELLY_PROJECTILE_SPEED*t,r.y+=r.dirY*W.JELLY_PROJECTILE_SPEED*t,r.threeMesh&&r.threeMesh.position.set(r.x-i/2,(r.z-i/2)*this.vScale,r.y-i/2),r.z===this.player.z&&!this.isGameOver){const d=r.x-this.player.x,f=r.y-this.player.y;Math.sqrt(d*d+f*f)<.4&&this.triggerDeath()}const o=Math.floor(r.x),l=Math.floor(r.y);(o<0||o>=i||l<0||l>=i)&&(r.threeMesh&&(this.scene.remove(r.threeMesh),r.threeMesh.geometry&&r.threeMesh.geometry.dispose(),r.threeMesh.material&&r.threeMesh.material.dispose()),this.jellyProjectiles.splice(a,1))}if(!this.isJellyChallengeActive)return;this.staticMapCacheDirty=!0;let e=0,n=0;for(const[a,r]of this.jellyStatueStates.entries()){e++;const o=a.split(",").map(Number),l=o[0],c=o[1],d=o[2];if(r.shotsFired>=W.JELLY_STATUE_MAX_SHOTS){n++;continue}if(r.state==="IDLE")r.chargeTimer-=t,r.chargeTimer<=0&&(r.state="CHARGING",r.chargeTimer=W.JELLY_STATUE_CHARGE_TIME);else if(r.state==="CHARGING"&&(r.chargeTimer-=t,r.chargeTimer<=0)){const f=this.player.x,p=this.player.y,m=f-(l+.5),y=p-(c+.5),T=Math.sqrt(m*m+y*y);let h=0,u=0;T>.001?(h=m/T,u=y/T):(h=1,u=0);const v=l+.5,g=c+.5;let _=null;if(this.scene){const E=new rn(.12,16,16),S=new Pn({color:W.COLORS.THREE_JELLY_PROJECTILE});_=new Qt(E,S),_.position.set(v-i/2,(d-i/2)*this.vScale,g-i/2),this.scene.add(_)}this.jellyProjectiles.push({x:v,y:g,z:d,dirX:h,dirY:u,threeMesh:_}),r.shotsFired++,r.shotsFired>=W.JELLY_STATUE_MAX_SHOTS?(r.state="COOLDOWN",r.chargeTimer=0):(r.state="IDLE",r.chargeTimer=.5+Math.random()*1.5)}}n===e&&this.jellyProjectiles.length===0&&this.endJellyChallenge()}endJellyChallenge(){if(this.isJellyChallengeActive=!1,this.updateGameContainerBackground(),!this.isSafeMode){this.hunters=[],this.initHunters(this.degree);for(let t=0;t<this.previouslyDeadHuntersInfo.length&&t<this.hunters.length;t++){const i=this.hunters[t];i.state="DEAD_BY_JELLY",i.respawnThresholdPercentage=this.previouslyDeadHuntersInfo[t].threshold,i.x=null,i.y=null,i.z=null,i.visualX=null,i.visualY=null,i.visualZ=null}}this.ui.showInfoBanner(Dt("msgFloorComplete"))}updateGameContainerBackground(){const t=document.getElementById("game-container");t&&(this.isJellyChallengeActive?t.classList.add("jelly-challenge-bg"):t.classList.remove("jelly-challenge-bg"),this.jellyPortalFreezeTimer>0?t.classList.add("jelly-portal-active-bg"):t.classList.remove("jelly-portal-active-bg"))}drawVoidBackground(t,i,e,n,a=.016){if(t.save(),this.isJellyChallengeActive){t.clearRect(0,0,i,e),t.restore();return}const r=this.hunters.some(E=>E.z===n&&E.state!=="SLEEP"&&E.state!=="DEAD"&&E.state!=="DEAD_BY_JELLY"),o=this.isHunterTracking,l=this.jellyPortalFreezeTimer>0,c=this.isVictory,d=[0,0,0];let f=[200,200,200],p=!1,m=!1,y=1,T=1;c?(m=!0,f=[255,255,255],y=.5):l?(p=!0,f=[160,32,240],y=12,T=2.2):o&&r?(p=!0,f=[255,51,51],y=4.5):o?(f=[200,30,30],y=1):r?(p=!0,f=[160,32,240],y=2.5):(f=[200,200,200],y=1),this.starBgColor[0]+=(d[0]-this.starBgColor[0])*4*a,this.starBgColor[1]+=(d[1]-this.starBgColor[1])*4*a,this.starBgColor[2]+=(d[2]-this.starBgColor[2])*4*a,this.starColor[0]+=(f[0]-this.starColor[0])*4*a,this.starColor[1]+=(f[1]-this.starColor[1])*4*a,this.starColor[2]+=(f[2]-this.starColor[2])*4*a,t.fillStyle=`rgb(${Math.floor(this.starBgColor[0])}, ${Math.floor(this.starBgColor[1])}, ${Math.floor(this.starBgColor[2])})`,t.fillRect(0,0,i,e);const h=i/2,u=e/2,v=Math.min(i,e)*.42,g=Array.from({length:5},()=>[]);for(let E=0;E<this.stars.length;E++){const S=this.stars[E];let x=S.orbitalFactor;if(m)x=S.orbitalFactor+5;else if(p){const X=S.orbitalFactor-.7;x=(.28+(X>0?X*.5:0))*T}S.currentOrbitalFactor,S.currentOrbitalFactor+=(x-S.currentOrbitalFactor)*5*a,S.prevR=S.rotation,S.rotation+=S.speed*a*y;const O=S.currentOrbitalFactor*v,M=l?2.5:p?1.8:1.2,A=S.rotation-S.speed*.18*M;S.px=h-O*Math.sin(A),S.py=u+O*Math.cos(A),S.x=h-O*Math.sin(S.rotation),S.y=u+O*Math.cos(S.rotation);const k=Math.max(0,Math.min(1,1-S.orbitalFactor)),U=Math.min(4,Math.floor(k*5));g[U].push(S)}const _=t===this.isometricCtx;for(let E=0;E<5;E++){const S=g[E];if(S.length===0)continue;t.beginPath();const x=(E+.6)/5*(_?.15:1);t.strokeStyle=`rgba(${Math.floor(this.starColor[0])}, ${Math.floor(this.starColor[1])}, ${Math.floor(this.starColor[2])}, ${x})`,t.lineWidth=1.2;for(let O=0;O<S.length;O++){const M=S[O];t.moveTo(M.px,M.py),t.lineTo(M.x,M.y)}t.stroke()}t.restore()}}function Pr(s,t,i){const e=s.slice();return e[13]=t[i],e[15]=i,e}function Cr(s){let t,i,e,n,a=(s[13].title[s[0]]||s[13].title.en)+"",r,o,l,c;function d(){return s[2](s[13])}return{c(){t=_e("button"),i=_e("span"),i.textContent=`${s[15]+1}.`,e=Ne(),n=_e("span"),r=Lr(a),o=Ne(),ie(i,"class","tut-num"),ie(n,"class","tut-title"),ie(t,"class","tutorial-item-btn"),ie(t,"data-stage-id",s[13].id)},m(f,p){ue(f,t,p),Ye(t,i),Ye(t,e),Ye(t,n),Ye(n,r),Ye(t,o),l||(c=Al(t,"click",d),l=!0)},p(f,p){s=f,p&1&&a!==(a=(s[13].title[s[0]]||s[13].title.en)+"")&&Cl(r,a)},d(f){f&&he(t),l=!1,c()}}}function vm(s){let t,i,e,n,a,r,o,l,c,d,f,p,m,y,T,h,u,v,g,_,E,S,x,O,M,A=Xa(Di),k=[];for(let U=0;U<A.length;U+=1)k[U]=Cr(Pr(s,A,U));return{c(){t=_e("section"),t.innerHTML='<div class="menu-content"><header><h1 class="game-title" data-i18n="gameTitle">VOID ESCAPE</h1></header> <div class="menu-stats-grid"><div class="stat-container hunter"><div class="stat-label" data-i18n="activeHunters">Active Hunters</div> <div class="stat-value" id="hunter-count">-</div></div> <div class="stat-container teleport"><div class="stat-label" data-i18n="activeTeleports">Active Teleports</div> <div class="stat-value" id="teleport-count">-</div></div> <div class="stat-container keys"><div class="stat-label" data-i18n="activeKeys">Active Keys</div> <div class="stat-value" id="keys-count">-</div></div> <div class="stat-container pathfinder"><div class="stat-label" data-i18n="availablePathfinders">Available Pathfinders</div> <div class="stat-value" id="pathfinder-count">-</div></div></div> <div class="control-group"><div class="degree-full-row"><span class="degree-label" data-i18n="mazeDegree">Maze Degree</span> <span class="degree-value" id="degree-val">-</span></div> <input type="range" id="maze-degree" aria-label="Ajustar Grau do Labirinto"/> <p class="hint" data-i18n="degreeHint">Controls the grid size. Higher values create larger, more complex mazes.</p></div> <div class="control-group switch-group"><div class="switch-container"><span class="switch-label" data-i18n="safeMode">Safe Mode</span> <label class="switch" for="safe-mode"><input type="checkbox" id="safe-mode" aria-label="Safe Mode"/> <span class="slider"></span></label></div> <p class="hint" data-i18n="safeModeHint">When active, no hunters will spawn in the maze.</p></div> <div class="menu-tutorials-row"><button id="tutorials-btn-menu" class="tutorials-btn" data-i18n="tutorialsMenu">TUTORIALS</button></div> <div class="menu-action-btns"><button id="start-btn" data-i18n="generateMaze">NEW GAME</button> <button id="continue-btn-menu" class="continue-btn" style="display:none" data-i18n="continue">CONTINUE</button></div> <p class="game-credits" data-i18n="gameCredits">a game by Bernard Rodrigues</p></div>',i=Ne(),e=_e("section"),n=_e("div"),a=_e("header"),a.innerHTML='<h1 class="game-title" data-i18n="tutorialsTitle">TUTORIALS</h1>',r=Ne(),o=_e("div");for(let U=0;U<k.length;U+=1)k[U].c();l=Ne(),c=_e("div"),c.innerHTML='<button id="back-to-menu-btn" data-i18n="back">BACK</button>',d=Ne(),f=_e("div"),f.innerHTML='<div class="modal-overlay"></div> <div class="modal-container"><h2 id="tut-modal-title">-</h2> <p id="tut-modal-description">-</p> <div class="modal-buttons"><button id="tut-modal-start-btn" class="modal-confirm-btn" data-i18n="start">START</button> <button id="tut-modal-cancel-btn" class="modal-cancel-btn" data-i18n="cancel">CANCEL</button></div></div>',p=Ne(),m=_e("div"),m.innerHTML='<div class="modal-overlay"></div> <div class="modal-container"><h2 data-i18n="pathfinderConfirmTitle">Use Pathfinder?</h2> <p data-i18n="pathfinderConfirmDesc">This will consume 1 Pathfinder charge to reveal the shortest route.</p> <div class="modal-buttons"><button id="pathfinder-modal-confirm-btn" class="modal-confirm-btn" data-i18n="confirm">CONFIRM</button> <button id="pathfinder-modal-cancel-btn" class="modal-cancel-btn" data-i18n="cancel">CANCEL</button></div></div>',y=Ne(),T=_e("section"),T.innerHTML='<div class="story-container"><div id="story-image-canvas" class="story-image-box"><div id="story-image-loader" class="story-loader hidden"><div class="spinner"></div> <span data-i18n="loading">LOADING...</span></div> <img id="story-img" src="" alt="Story Image" style="display: none; max-width: 100%; max-height: 100%;"/></div> <div id="story-dialogue" class="story-dialogue-box"><span id="story-text"></span> <span id="story-arrow" class="story-arrow hidden">▼</span></div> <div class="story-actions"><button id="story-skip-btn">SKIP</button></div></div>',h=Ne(),u=_e("section"),u.innerHTML='<div class="popup-container victory"><h1 data-i18n="victoryTitle">Mission Accomplished</h1> <p data-i18n="victoryText">You have successfully navigated the 3D void.</p> <p class="victory-stats"><span data-i18n="mapCompletion">MAP COMPLETION</span>: <span id="victory-completion-rate">0%</span></p> <p class="victory-stats"><span data-i18n="victoryDeaths">DEATHS</span>: <span id="victory-deaths-count">0</span></p> <p class="victory-stats"><span data-i18n="victoryDegree">MAZE DEGREE</span>: <span id="victory-maze-degree">0</span></p> <p class="victory-stats"><span data-i18n="victoryTime">COMPLETION TIME</span>: <span id="victory-completion-time">00:00</span></p> <p class="victory-stats"><span data-i18n="victoryMana">MANA COLLECTED</span>: <span id="victory-mana-count">0/0</span></p> <div class="end-game-btns"><button id="next-tut-btn-victory" class="end-btn hidden" data-i18n="nextTutorial">NEXT TUTORIAL</button> <button id="restart-btn-victory" class="end-btn" data-i18n="playAgain">PLAY AGAIN</button> <button id="menu-btn-victory" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',v=Ne(),g=_e("section"),g.innerHTML='<div class="popup-container pause"><h1 data-i18n="pauseTitle">PAUSED</h1> <div class="end-game-btns"><button id="resume-btn" class="end-btn continue-highlight" data-i18n="resume">RESUME</button> <button id="menu-btn-pause" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',_=Ne(),E=_e("div"),E.innerHTML='<span class="saving-icon">💾</span> <span data-i18n="saving">SAVING...</span>',S=Ne(),x=_e("main"),x.innerHTML='<button id="mobile-pause-btn" class="hidden" aria-label="Pause Game">✕</button> <button id="mobile-teleport-exit-btn" class="hidden" aria-label="Exit Teleport Map">✕</button> <div id="left-hud-panel" class="intro-hidden"><div class="hud-item-group"><div class="keys-title" data-i18n="hudKeys">KEYS</div> <div class="keys-counter"><span id="keys-collected-count">0</span> / <span id="keys-total-count">0</span></div> <div id="keys-list-container"></div></div> <div class="hud-item-group" id="pathfinder-hud-group"><div class="pathfinders-title" data-i18n="hudPathfinders">PATHFINDERS</div> <div class="pathfinders-counter"><span id="pathfinders-remaining-count">0</span> / <span id="pathfinders-total-count">0</span></div></div></div> <div id="map-area-container" class="intro-hidden"><div id="desktop-hud-row"><div id="mana-counter-desktop" class="mana-panel-hud"><span class="mana-icon">✨</span> <span class="mana-label" data-i18n="hudMana">MANA:</span> <span id="mana-collected-count-desktop">0</span>/<span id="mana-total-count-desktop">0</span></div> <div id="hunter-status-panel"><span class="status-label" data-i18n="statusLabel">HUNTER STATUS:</span> <div class="status-marquee-container"><span id="hunter-status-val" class="status-marquee-text status--scanning" data-i18n="statusScanning">SCANNING</span></div></div> <div id="jelly-portal-counter-desktop" class="jelly-portal-panel-hud"><div class="jelly-balls-container"><span class="jelly-ball gold-ball-1"></span> <span class="jelly-ball gold-ball-2"></span></div> <span class="jelly-portal-count-label">x<span id="jelly-portal-count-desktop">0</span></span></div></div> <div style="position: relative; display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 90vw; margin-bottom: calc(var(--h-unit) * 2); margin-bottom: calc(var(--d-h-unit) * 2);"><canvas id="main-2d-canvas" aria-label="2D Navigation Map" style="margin-bottom: 0;"></canvas> <button id="mobile-jelly-portal-btn" aria-label="Jelly God Portal"><svg class="jelly-portal-spiral" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M12 12a1 1 0 0 1 1 1c0 1.1-.9 2-2 2a3 3 0 0 1-3-3c0-2.2 1.8-4 4-4a5 5 0 0 1 5 5c0 3.3-2.7 6-6 6a7 7 0 0 1-7-7c0-4.4 3.6-8 8-8a9 9 0 0 1 9 9"></path></svg></button> <button id="mobile-zoom-btn" aria-label="Toggle Zoom"><svg id="zoom-out-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;"><circle cx="11" cy="11" r="6"></circle><line x1="21" y1="21" x2="15.5" y2="15.5"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg> <svg id="zoom-in-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;" class="hidden"><circle cx="11" cy="11" r="6"></circle><line x1="21" y1="21" x2="15.5" y2="15.5"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg></button></div> <div id="mobile-proximeter-row"><div id="mana-counter-mobile" class="mana-panel-hud"><span class="mana-icon">✨</span> <span class="mana-label" data-i18n="hudMana">MANA:</span> <span id="mana-collected-count-mobile">0</span>/<span id="mana-total-count-mobile">0</span></div> <div id="proximeter-container" class="hidden"><div class="proximeter-label" data-i18n="proximityDetector">PROXIMITY DETECTOR</div> <div class="proximeter-bar"><span class="proximeter-cell" data-index="1"></span> <span class="proximeter-cell" data-index="2"></span> <span class="proximeter-cell" data-index="3"></span> <span class="proximeter-cell" data-index="4"></span> <span class="proximeter-cell" data-index="5"></span> <span class="proximeter-cell" data-index="6"></span> <span class="proximeter-cell" data-index="7"></span> <span class="proximeter-cell" data-index="8"></span> <span class="proximeter-cell" data-index="9"></span> <span class="proximeter-cell" data-index="10"></span></div></div> <div id="jelly-portal-counter-mobile" class="jelly-portal-panel-hud"><div class="jelly-balls-container"><span class="jelly-ball gold-ball-1"></span> <span class="jelly-ball gold-ball-2"></span></div> <span class="jelly-portal-count-label">x<span id="jelly-portal-count-mobile">0</span></span></div></div> <div id="bottom-hud-container" class="intro-hidden"><div id="floor-display" aria-live="polite"><span class="hud-label" data-i18n="hudFloor">Floor</span> <span id="current-floor">0</span></div> <div id="visited-display" aria-live="polite"><span class="hud-label" data-i18n="hudVisited">Visited</span> <span class="visited-value"><span id="visited-percent">0</span>%</span></div></div></div> <div id="right-hud-panel" class="intro-hidden"><aside id="map-legend"><h3 data-i18n="mapLegendTitle">MAP LEGEND</h3> <div class="legend-item"><span class="color-box color-box--visited"></span> <span data-i18n="legendVisited">Visited Path</span></div> <div class="legend-item"><span class="color-box color-box--known"></span> <span data-i18n="legendKnown">Known Path</span></div> <div class="legend-item"><span class="color-box color-box--start"></span> <span data-i18n="legendStart">Starting Point</span></div> <div class="legend-item"><span class="color-box color-box--exit"></span> <span data-i18n="legendExit">Maze Exit</span></div> <div id="legend-hunter" class="legend-item"><span class="color-box color-box--hunter"></span> <span data-i18n="legendHunter">Void Hunter</span></div> <div class="legend-item"><span class="color-box color-box--teleport"></span> <span data-i18n="legendTeleport">Teleport</span></div> <div class="legend-item"><span class="symbol-box"><svg viewBox="0 0 24 24" fill="none" style="width: 100%; height: 100%;"><path d="M12 2L5 9H9V11H15V9H19L12 2Z" fill="#00ffff"></path><path d="M12 22L19 15H15V13H9V15H5L12 22Z" fill="#ff00ff"></path></svg></span> <span data-i18n="legendElevator">Elevator</span></div></aside> <aside id="controls-hint"><h3 data-i18n="controlsHintTitle">CONTROLS HINT</h3> <div id="controls-hint-content"></div></aside></div> <nav id="mobile-controls" class="hidden"><button id="mobile-down" class="mobile-btn" disabled="" aria-label="Go Down">▼</button> <button id="mobile-map" class="mobile-btn" disabled="" aria-label="Open Map" data-i18n="map">MAP</button> <button id="mobile-up" class="mobile-btn" disabled="" aria-label="Go Up">▲</button></nav> <div id="map3d-container" class="hidden"></div>',O=Ne(),M=_e("section"),M.innerHTML='<div class="story-loader"><div class="spinner"></div> <span data-i18n="generatingMaze">GENERATING MAZE...</span></div>',ie(t,"id","start-menu"),ie(o,"class","tutorials-list"),ie(c,"class","menu-action-btns"),ie(n,"class","menu-content"),ie(e,"id","tutorials-menu"),ie(e,"class","hidden"),ie(f,"id","tutorial-instructions-modal"),ie(f,"class","hidden"),ie(m,"id","pathfinder-confirm-modal"),ie(m,"class","hidden"),ie(T,"id","story-screen"),ie(T,"class","hidden"),ie(u,"id","victory-screen"),ie(u,"class","hidden"),ie(g,"id","pause-screen"),ie(g,"class","hidden"),ie(E,"id","saving-indicator"),ie(E,"class","hidden"),ie(x,"id","game-container"),ie(M,"id","loading-screen"),ie(M,"class","hidden")},m(U,X){ue(U,t,X),ue(U,i,X),ue(U,e,X),Ye(e,n),Ye(n,a),Ye(n,r),Ye(n,o);for(let I=0;I<k.length;I+=1)k[I]&&k[I].m(o,null);Ye(n,l),Ye(n,c),ue(U,d,X),ue(U,f,X),ue(U,p,X),ue(U,m,X),ue(U,y,X),ue(U,T,X),ue(U,h,X),ue(U,u,X),ue(U,v,X),ue(U,g,X),ue(U,_,X),ue(U,E,X),ue(U,S,X),ue(U,x,X),ue(U,O,X),ue(U,M,X)},p(U,[X]){if(X&3){A=Xa(Di);let I;for(I=0;I<A.length;I+=1){const B=Pr(U,A,I);k[I]?k[I].p(B,X):(k[I]=Cr(B),k[I].c(),k[I].m(o,null))}for(;I<k.length;I+=1)k[I].d(1);k.length=A.length}},i:wn,o:wn,d(U){U&&(he(t),he(i),he(e),he(d),he(f),he(p),he(m),he(y),he(T),he(h),he(u),he(v),he(g),he(_),he(E),he(S),he(x),he(O),he(M)),bl(k,U)}}}function ym(s,t,i){let e=null,n="en",a=[],r=-1;function o(){const h=Array.from(document.querySelectorAll('section:not(.hidden), div[id$="-modal"]:not(.hidden), div[id$="-screen"]:not(.hidden)'));if(h.length===0){a=[],r=-1;return}const u=h[h.length-1];a=Array.from(u.querySelectorAll('button, input:not([type="hidden"])')),a=a.filter(_=>{const E=window.getComputedStyle(_);return E.display!=="none"&&E.visibility!=="hidden"&&!_.disabled});const v=document.activeElement,g=a.indexOf(v);g!==-1?r=g:r=-1}function l(h){o(),a.length!==0&&(r===-1?r=h>0?0:a.length-1:r=(r+h+a.length)%a.length,a[r].focus())}function c(h){var v,g,_;e&&e.destroy(),ml(),(v=document.getElementById("start-menu"))==null||v.classList.add("hidden"),(g=document.getElementById("victory-screen"))==null||g.classList.add("hidden"),(_=document.getElementById("game-over-screen"))==null||_.classList.add("hidden");const u=document.getElementById("loading-screen");u&&(u.classList.remove("hidden"),xn()),setTimeout(()=>{try{e=new ca(h,W.BRANCHING_FACTOR)}finally{u&&u.classList.add("hidden")}},50)}let d=null;function f(h){var _;d=h;const u=Sr(),v=document.getElementById("tut-modal-title"),g=document.getElementById("tut-modal-description");if(v&&(v.innerText=h.title[u]||h.title.en),g){const E=h.description[u]||h.description.en;g.innerHTML=cm(E,h.images)}(_=document.getElementById("tutorial-instructions-modal"))==null||_.classList.remove("hidden"),g&&setTimeout(()=>{g.scrollTop=0},0)}function p(h){var v,g,_,E;e&&e.destroy(),(v=document.getElementById("tutorial-instructions-modal"))==null||v.classList.add("hidden"),(g=document.getElementById("tutorials-menu"))==null||g.classList.add("hidden"),(_=document.getElementById("victory-screen"))==null||_.classList.add("hidden"),(E=document.getElementById("game-over-screen"))==null||E.classList.add("hidden");const u=document.getElementById("loading-screen");u&&(u.classList.remove("hidden"),xn()),setTimeout(()=>{try{e=new ca(h.degree||3,W.BRANCHING_FACTOR,null,h)}finally{u&&u.classList.add("hidden")}},50)}function m(){var v,g,_;const h=pl();if(!h)return;e&&e.destroy(),(v=document.getElementById("start-menu"))==null||v.classList.add("hidden"),(g=document.getElementById("victory-screen"))==null||g.classList.add("hidden"),(_=document.getElementById("game-over-screen"))==null||_.classList.add("hidden");const u=document.getElementById("loading-screen");u&&(u.classList.remove("hidden"),xn()),setTimeout(()=>{try{e=new ca(h.degree,h.branchingFactor,h)}finally{u&&u.classList.add("hidden")}},50)}function y(){var u,v,g;e&&e.destroy(),(u=document.getElementById("victory-screen"))==null||u.classList.add("hidden"),(v=document.getElementById("game-over-screen"))==null||v.classList.add("hidden");const h=document.getElementById("continue-btn-menu");h&&(h.style.display=Ar()?"":"none"),(g=document.getElementById("start-menu"))==null||g.classList.remove("hidden")}return Rl(()=>{xn();const h=document.getElementById("maze-degree"),u=document.getElementById("degree-val"),v=document.getElementById("hunter-count"),g=document.getElementById("teleport-count"),_=document.getElementById("keys-count"),E=document.getElementById("pathfinder-count"),S=document.getElementById("safe-mode"),x=vt=>{const P=S&&S.checked?0:W.getHunterCount(vt);v&&(v.innerText=String(P),v.style.color=P>0?"#f00":"#88ccff")};S&&h&&(S.onchange=()=>{x(parseInt(h.value))});const O=vt=>{const ut=W.getTeleportCount(vt);g&&(g.innerText=String(ut))},M=vt=>{const ut=W.getHunterCount(vt)*2;_&&(_.innerText=String(ut))},A=vt=>{const ut=W.getPathfinderCount(vt);E&&(E.innerText=String(ut))};if(h){W.MIN_MAZE_DEGREE!==void 0&&(h.min=String(W.MIN_MAZE_DEGREE)),W.MAX_MAZE_DEGREE!==void 0&&(h.max=String(W.MAX_MAZE_DEGREE)),W.MAZE_DEGREE!==void 0&&(h.value=String(W.MAZE_DEGREE)),h.oninput=()=>{const ut=parseInt(h.value);u&&(u.innerText=String(ut)),x(ut),O(ut),M(ut),A(ut)};const vt=parseInt(h.value);u&&(u.innerText=String(vt)),x(vt),O(vt),M(vt),A(vt)}const k=document.getElementById("continue-btn-menu");k&&(k.style.display=Ar()?"":"none");const U=document.getElementById("mobile-pause-btn");U&&(U.onclick=vt=>{vt.stopPropagation(),e&&e.togglePause()});const X=document.getElementById("mobile-teleport-exit-btn");X&&(X.onclick=vt=>{vt.stopPropagation(),e&&e.isTeleportMode&&e.toggleTeleportMap(!1)});const I=document.getElementById("mobile-jelly-portal-btn");I&&(I.onclick=vt=>{vt.stopPropagation(),e&&e.tryActivateJellyPortal()});const B=document.getElementById("start-btn");B&&h&&(B.onclick=()=>{c(parseInt(h.value))});const Y=document.getElementById("restart-btn-victory");Y&&h&&(Y.onclick=()=>{e&&e.isTutorialMode&&e.currentTutorialStage?p(e.currentTutorialStage):c(parseInt(h.value))});const $=document.getElementById("continue-btn-menu");$&&($.onclick=()=>{m()});const H=document.getElementById("menu-btn-victory");H&&(H.onclick=()=>{var vt,ut;e&&e.isTutorialMode?((vt=document.getElementById("victory-screen"))==null||vt.classList.add("hidden"),(ut=document.getElementById("tutorials-menu"))==null||ut.classList.remove("hidden")):y()});const Z=document.getElementById("next-tut-btn-victory");Z&&(Z.onclick=()=>{var vt;if(e&&e.isTutorialMode&&e.currentTutorialId){const ut=Di.findIndex(P=>P.id===e.currentTutorialId);if(ut!==-1&&ut+1<Di.length){const P=Di[ut+1];(vt=document.getElementById("victory-screen"))==null||vt.classList.add("hidden"),f(P)}}});const it=document.getElementById("continue-btn-death");it&&(it.onclick=()=>{m()});const j=document.getElementById("retry-btn-death");j&&h&&(j.onclick=()=>{e&&e.isTutorialMode&&e.currentTutorialStage?p(e.currentTutorialStage):c(parseInt(h.value))});const V=document.getElementById("menu-btn-death");V&&(V.onclick=()=>{y()});const F=document.getElementById("resume-btn");F&&(F.onclick=()=>{e&&e.togglePause()});const K=document.getElementById("menu-btn-pause");K&&(K.onclick=()=>{y()});const nt=document.getElementById("tutorials-btn-menu"),_t=document.getElementById("tutorials-menu"),St=document.getElementById("start-menu"),Nt=document.getElementById("back-to-menu-btn");nt&&(nt.onclick=()=>{i(0,n=Sr()),St==null||St.classList.add("hidden"),_t==null||_t.classList.remove("hidden")}),Nt&&(Nt.onclick=()=>{_t==null||_t.classList.add("hidden"),St==null||St.classList.remove("hidden")});const Rt=document.getElementById("tut-modal-start-btn"),R=document.getElementById("tut-modal-cancel-btn");Rt&&(Rt.onclick=()=>{d&&p(d)}),R&&(R.onclick=()=>{var vt,ut;(vt=document.getElementById("tutorial-instructions-modal"))==null||vt.classList.add("hidden"),e&&(e.isTutorialMode?(e.destroy(),e=null,(ut=document.getElementById("tutorials-menu"))==null||ut.classList.remove("hidden")):y()),d=null});const N=document.getElementById("pathfinder-modal-confirm-btn"),C=document.getElementById("pathfinder-modal-cancel-btn"),q=document.getElementById("pathfinder-confirm-modal");N&&(N.onclick=()=>{if(e&&e.pathfinderConfirmTarget){const vt=e.pathfinderConfirmTarget;e.pathfinderConfirmTarget=null,q==null||q.classList.add("hidden"),e.triggerPathReveal(vt.x,vt.y,vt.z,!0)}}),C&&(C.onclick=()=>{e&&(e.pathfinderConfirmTarget=null),q==null||q.classList.add("hidden")}),window.addEventListener("keydown",vt=>{if(!e||e.isPaused||document.getElementById("victory-screen")&&!document.getElementById("victory-screen").classList.contains("hidden")||document.getElementById("pathfinder-confirm-modal")&&!document.getElementById("pathfinder-confirm-modal").classList.contains("hidden")){const P=vt.key.toLowerCase(),b=document.activeElement;if(b&&b.type==="range"&&(P==="arrowleft"||P==="arrowright")){const lt=parseInt(b.step||"1"),ht=parseInt(b.min||"3"),ft=parseInt(b.max||"15");let Mt=parseInt(b.value);P==="arrowleft"?Mt=Math.max(ht,Mt-lt):Mt=Math.min(ft,Mt+lt),b.value=String(Mt),typeof b.oninput=="function"&&b.oninput(new Event("input")),vt.preventDefault();return}P==="arrowdown"||P==="arrowright"?(l(1),vt.preventDefault()):(P==="arrowup"||P==="arrowleft")&&(l(-1),vt.preventDefault())}});let G={x:0,y:0},st=[];function tt(){var P,b;const vt=navigator.getGamepads?navigator.getGamepads():[],ut=vt[0]||vt.find(J=>J!==null);if(ut&&(!e||e.isPaused||document.getElementById("victory-screen")&&!document.getElementById("victory-screen").classList.contains("hidden")||document.getElementById("pathfinder-confirm-modal")&&!document.getElementById("pathfinder-confirm-modal").classList.contains("hidden"))){const ht=ut.axes[0],ft=ut.axes[1],Mt=ft>.5||ut.buttons[13]&&ut.buttons[13].pressed,mt=ft<-.5||ut.buttons[12]&&ut.buttons[12].pressed,Tt=ht>.5||ut.buttons[15]&&ut.buttons[15].pressed,gt=ht<-.5||ut.buttons[14]&&ut.buttons[14].pressed,At=((P=ut.buttons[0])==null?void 0:P.pressed)||((b=ut.buttons[2])==null?void 0:b.pressed),rt=Mt&&G.y<=.5,wt=mt&&G.y>=-.5,Pt=Tt&&G.x<=.5,It=gt&&G.x>=-.5;G={x:ht,y:ft};const bt=document.activeElement;if(bt&&bt.type==="range"){if(It||Pt){const L=parseInt(bt.step||"1"),yt=parseInt(bt.min||"3"),Ot=parseInt(bt.max||"15");let pt=parseInt(bt.value);It?pt=Math.max(yt,pt-L):pt=Math.min(Ot,pt+L),bt.value=String(pt),typeof bt.oninput=="function"&&bt.oninput(new Event("input"))}rt?l(1):wt&&l(-1)}else rt||Pt?l(1):(wt||It)&&l(-1);if(At&&!st[0]&&!st[2]){const L=document.activeElement;L&&typeof L.click=="function"&&L.click()}st=ut.buttons.map(L=>L.pressed)}requestAnimationFrame(tt)}tt()}),[n,f,h=>f(h)]}class _m extends kl{constructor(t){super(),Bl(this,t,ym,vm,Sl,{})}}new _m({target:document.getElementById("app")});
