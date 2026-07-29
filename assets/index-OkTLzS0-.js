var dl=Object.defineProperty;var ul=(s,t,e)=>t in s?dl(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var I=(s,t,e)=>ul(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();function an(){}function Mo(s){return s()}function Ga(){return Object.create(null)}function gs(s){s.forEach(Mo)}function xo(s){return typeof s=="function"}function fl(s,t){return s!=s?t==t:s!==t||s&&typeof s=="object"||typeof s=="function"}function pl(s){return Object.keys(s).length===0}function Ee(s,t,e){s.insertBefore(t,e||null)}function Me(s){s.parentNode&&s.parentNode.removeChild(s)}function ri(s){return document.createElement(s)}function ml(s){return document.createTextNode(s)}function xi(){return ml(" ")}function Pe(s,t,e){e==null?s.removeAttribute(t):s.getAttribute(t)!==e&&s.setAttribute(t,e)}function gl(s){return Array.from(s.childNodes)}let Sn;function xn(s){Sn=s}function vl(){if(!Sn)throw new Error("Function called outside component initialization");return Sn}function _l(s){vl().$$.on_mount.push(s)}const en=[],ka=[];let rn=[];const Ha=[],yl=Promise.resolve();let ra=!1;function Ml(){ra||(ra=!0,yl.then(To))}function oa(s){rn.push(s)}const bs=new Set;let Ui=0;function To(){if(Ui!==0)return;const s=Sn;do{try{for(;Ui<en.length;){const t=en[Ui];Ui++,xn(t),xl(t.$$)}}catch(t){throw en.length=0,Ui=0,t}for(xn(null),en.length=0,Ui=0;ka.length;)ka.pop()();for(let t=0;t<rn.length;t+=1){const e=rn[t];bs.has(e)||(bs.add(e),e())}rn.length=0}while(en.length);for(;Ha.length;)Ha.pop()();ra=!1,bs.clear(),xn(s)}function xl(s){if(s.fragment!==null){s.update(),gs(s.before_update);const t=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,t),s.after_update.forEach(oa)}}function Tl(s){const t=[],e=[];rn.forEach(i=>s.indexOf(i)===-1?t.push(i):e.push(i)),e.forEach(i=>i()),rn=t}const El=new Set;function Sl(s,t){s&&s.i&&(El.delete(s),s.i(t))}function Al(s,t,e){const{fragment:i,after_update:n}=s.$$;i&&i.m(t,e),oa(()=>{const a=s.$$.on_mount.map(Mo).filter(xo);s.$$.on_destroy?s.$$.on_destroy.push(...a):gs(a),s.$$.on_mount=[]}),n.forEach(oa)}function bl(s,t){const e=s.$$;e.fragment!==null&&(Tl(e.after_update),gs(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function Pl(s,t){s.$$.dirty[0]===-1&&(en.push(s),Ml(),s.$$.dirty.fill(0)),s.$$.dirty[t/31|0]|=1<<t%31}function wl(s,t,e,i,n,a,o=null,r=[-1]){const c=Sn;xn(s);const l=s.$$={fragment:null,ctx:[],props:a,update:an,not_equal:n,bound:Ga(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Ga(),dirty:r,skip_bound:!1,root:t.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=e?e(s,t.props||{},(f,p,...v)=>{const m=v.length?v[0]:p;return l.ctx&&n(l.ctx[f],l.ctx[f]=m)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](m),u&&Pl(s,f)),p}):[],l.update(),u=!0,gs(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){const f=gl(t.target);l.fragment&&l.fragment.l(f),f.forEach(Me)}else l.fragment&&l.fragment.c();t.intro&&Sl(s.$$.fragment),Al(s,t.target,t.anchor),To()}xn(c)}class Cl{constructor(){I(this,"$$");I(this,"$$set")}$destroy(){bl(this,1),this.$destroy=an}$on(t,e){if(!xo(e))return an;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(e),()=>{const n=i.indexOf(e);n!==-1&&i.splice(n,1)}}$set(t){this.$$set&&!pl(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Rl="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Rl);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xa="160",zi={ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ll=0,Va=1,Il=2,Eo=1,Dl=2,ii=3,_i=0,Re=1,ni=2,mi=0,on=1,Wa=2,Ya=3,Xa=4,Ol=5,Pi=100,Nl=101,Ul=102,$a=103,Ka=104,zl=200,Fl=201,Bl=202,Gl=203,la=204,ca=205,kl=206,Hl=207,Vl=208,Wl=209,Yl=210,Xl=211,$l=212,Kl=213,ql=214,Zl=0,jl=1,Jl=2,os=3,Ql=4,tc=5,ec=6,ic=7,Ta=0,nc=1,sc=2,gi=0,ac=1,rc=2,oc=3,lc=4,cc=5,hc=6,So=300,cn=301,hn=302,ha=303,da=304,vs=306,ua=1e3,We=1001,fa=1002,Ae=1003,qa=1004,Ps=1005,ze=1006,dc=1007,An=1008,vi=1009,uc=1010,fc=1011,Ea=1012,Ao=1013,fi=1014,pi=1015,bn=1016,bo=1017,Po=1018,Ci=1020,pc=1021,Ye=1023,mc=1024,gc=1025,Ri=1026,dn=1027,vc=1028,wo=1029,_c=1030,Co=1031,Ro=1033,ws=33776,Cs=33777,Rs=33778,Ls=33779,Za=35840,ja=35841,Ja=35842,Qa=35843,Lo=36196,tr=37492,er=37496,ir=37808,nr=37809,sr=37810,ar=37811,rr=37812,or=37813,lr=37814,cr=37815,hr=37816,dr=37817,ur=37818,fr=37819,pr=37820,mr=37821,Is=36492,gr=36494,vr=36495,yc=36283,_r=36284,yr=36285,Mr=36286,Io=3e3,Li=3001,Mc=3200,xc=3201,Do=0,Tc=1,Be="",ge="srgb",ai="srgb-linear",Sa="display-p3",_s="display-p3-linear",ls="linear",ee="srgb",cs="rec709",hs="p3",Bi=7680,xr=519,Ec=512,Sc=513,Ac=514,Oo=515,bc=516,Pc=517,wc=518,Cc=519,Tr=35044,Er="300 es",pa=1035,si=2e3,ds=2001;class Ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const a=n.indexOf(e);a!==-1&&n.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let a=0,o=n.length;a<o;a++)n[a].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ss=Math.PI/180,ma=180/Math.PI;function wn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_e[s&255]+_e[s>>8&255]+_e[s>>16&255]+_e[s>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[i&255]+_e[i>>8&255]+_e[i>>16&255]+_e[i>>24&255]).toLowerCase()}function be(s,t,e){return Math.max(t,Math.min(e,s))}function Rc(s,t){return(s%t+t)%t}function Ds(s,t,e){return(1-e)*s+e*t}function Sr(s){return(s&s-1)===0&&s!==0}function ga(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function mn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function we(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Lc={DEG2RAD:ss};class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*i-o*n+t.x,this.y=a*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,i,n,a,o,r,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,o,r,c,l)}set(t,e,i,n,a,o,r,c,l){const u=this.elements;return u[0]=t,u[1]=n,u[2]=r,u[3]=e,u[4]=a,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,o=i[0],r=i[3],c=i[6],l=i[1],u=i[4],f=i[7],p=i[2],v=i[5],m=i[8],g=n[0],h=n[3],d=n[6],M=n[1],_=n[4],y=n[7],T=n[2],S=n[5],A=n[8];return a[0]=o*g+r*M+c*T,a[3]=o*h+r*_+c*S,a[6]=o*d+r*y+c*A,a[1]=l*g+u*M+f*T,a[4]=l*h+u*_+f*S,a[7]=l*d+u*y+f*A,a[2]=p*g+v*M+m*T,a[5]=p*h+v*_+m*S,a[8]=p*d+v*y+m*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*r*l-i*a*u+i*r*c+n*a*l-n*o*c}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],u=t[8],f=u*o-r*l,p=r*c-u*a,v=l*a-o*c,m=e*f+i*p+n*v;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return t[0]=f*g,t[1]=(n*l-u*i)*g,t[2]=(r*i-n*o)*g,t[3]=p*g,t[4]=(u*e-n*c)*g,t[5]=(n*a-r*e)*g,t[6]=v*g,t[7]=(i*c-l*e)*g,t[8]=(o*e-i*a)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,a,o,r){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*o+l*r)+o+t,-n*l,n*c,-n*(-l*o+c*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Os.makeScale(t,e)),this}rotate(t){return this.premultiply(Os.makeRotation(-t)),this}translate(t,e){return this.premultiply(Os.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Os=new Kt;function No(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function us(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ic(){const s=us("canvas");return s.style.display="block",s}const Ar={};function Tn(s){s in Ar||(Ar[s]=!0,console.warn(s))}const br=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pr=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Dn={[ai]:{transfer:ls,primaries:cs,toReference:s=>s,fromReference:s=>s},[ge]:{transfer:ee,primaries:cs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[_s]:{transfer:ls,primaries:hs,toReference:s=>s.applyMatrix3(Pr),fromReference:s=>s.applyMatrix3(br)},[Sa]:{transfer:ee,primaries:hs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Pr),fromReference:s=>s.applyMatrix3(br).convertLinearToSRGB()}},Dc=new Set([ai,_s]),Qt={enabled:!0,_workingColorSpace:ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Dc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=Dn[t].toReference,n=Dn[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Dn[s].primaries},getTransfer:function(s){return s===Be?ls:Dn[s].transfer}};function ln(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Gi;class Uo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gi===void 0&&(Gi=us("canvas")),Gi.width=t.width,Gi.height=t.height;const i=Gi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=us("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=ln(a[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ln(e[i]/255)*255):e[i]=ln(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Oc=0;class zo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=wn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,r=n.length;o<r;o++)n[o].isDataTexture?a.push(Us(n[o].image)):a.push(Us(n[o]))}else a=Us(n);i.url=a}return e||(t.images[this.uuid]=i),i}}function Us(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Uo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nc=0;class Oe extends Ni{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,i=We,n=We,a=ze,o=An,r=Ye,c=vi,l=Oe.DEFAULT_ANISOTROPY,u=Be){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=wn(),this.name="",this.source=new zo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Tn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Li?ge:Be),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==So)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ua:t.x=t.x-Math.floor(t.x);break;case We:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ua:t.y=t.y-Math.floor(t.y);break;case We:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Tn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ge?Li:Io}set encoding(t){Tn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Li?ge:Be}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=So;Oe.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,i=0,n=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*a,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*a,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*a,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,a;const c=t.elements,l=c[0],u=c[4],f=c[8],p=c[1],v=c[5],m=c[9],g=c[2],h=c[6],d=c[10];if(Math.abs(u-p)<.01&&Math.abs(f-g)<.01&&Math.abs(m-h)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+g)<.1&&Math.abs(m+h)<.1&&Math.abs(l+v+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,y=(v+1)/2,T=(d+1)/2,S=(u+p)/4,A=(f+g)/4,O=(m+h)/4;return _>y&&_>T?_<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(_),n=S/i,a=A/i):y>T?y<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(y),i=S/n,a=O/n):T<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(T),i=A/a,n=O/a),this.set(i,n,a,e),this}let M=Math.sqrt((h-m)*(h-m)+(f-g)*(f-g)+(p-u)*(p-u));return Math.abs(M)<.001&&(M=1),this.x=(h-m)/M,this.y=(f-g)/M,this.z=(p-u)/M,this.w=Math.acos((l+v+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uc extends Ni{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const n={width:t,height:e,depth:1};i.encoding!==void 0&&(Tn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Li?ge:Be),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Oe(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new zo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends Uc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Fo extends Oe{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zc extends Oe{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,a,o,r){let c=i[n+0],l=i[n+1],u=i[n+2],f=i[n+3];const p=a[o+0],v=a[o+1],m=a[o+2],g=a[o+3];if(r===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(r===1){t[e+0]=p,t[e+1]=v,t[e+2]=m,t[e+3]=g;return}if(f!==g||c!==p||l!==v||u!==m){let h=1-r;const d=c*p+l*v+u*m+f*g,M=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const T=Math.sqrt(_),S=Math.atan2(T,d*M);h=Math.sin(h*S)/T,r=Math.sin(r*S)/T}const y=r*M;if(c=c*h+p*y,l=l*h+v*y,u=u*h+m*y,f=f*h+g*y,h===1-r){const T=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=T,l*=T,u*=T,f*=T}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,n,a,o){const r=i[n],c=i[n+1],l=i[n+2],u=i[n+3],f=a[o],p=a[o+1],v=a[o+2],m=a[o+3];return t[e]=r*m+u*f+c*v-l*p,t[e+1]=c*m+u*p+l*f-r*v,t[e+2]=l*m+u*v+r*p-c*f,t[e+3]=u*m-r*f-c*p-l*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,a=t._z,o=t._order,r=Math.cos,c=Math.sin,l=r(i/2),u=r(n/2),f=r(a/2),p=c(i/2),v=c(n/2),m=c(a/2);switch(o){case"XYZ":this._x=p*u*f+l*v*m,this._y=l*v*f-p*u*m,this._z=l*u*m+p*v*f,this._w=l*u*f-p*v*m;break;case"YXZ":this._x=p*u*f+l*v*m,this._y=l*v*f-p*u*m,this._z=l*u*m-p*v*f,this._w=l*u*f+p*v*m;break;case"ZXY":this._x=p*u*f-l*v*m,this._y=l*v*f+p*u*m,this._z=l*u*m+p*v*f,this._w=l*u*f-p*v*m;break;case"ZYX":this._x=p*u*f-l*v*m,this._y=l*v*f+p*u*m,this._z=l*u*m-p*v*f,this._w=l*u*f+p*v*m;break;case"YZX":this._x=p*u*f+l*v*m,this._y=l*v*f+p*u*m,this._z=l*u*m-p*v*f,this._w=l*u*f-p*v*m;break;case"XZY":this._x=p*u*f-l*v*m,this._y=l*v*f-p*u*m,this._z=l*u*m+p*v*f,this._w=l*u*f+p*v*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],a=e[8],o=e[1],r=e[5],c=e[9],l=e[2],u=e[6],f=e[10],p=i+r+f;if(p>0){const v=.5/Math.sqrt(p+1);this._w=.25/v,this._x=(u-c)*v,this._y=(a-l)*v,this._z=(o-n)*v}else if(i>r&&i>f){const v=2*Math.sqrt(1+i-r-f);this._w=(u-c)/v,this._x=.25*v,this._y=(n+o)/v,this._z=(a+l)/v}else if(r>f){const v=2*Math.sqrt(1+r-i-f);this._w=(a-l)/v,this._x=(n+o)/v,this._y=.25*v,this._z=(c+u)/v}else{const v=2*Math.sqrt(1+f-i-r);this._w=(o-n)/v,this._x=(a+l)/v,this._y=(c+u)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,a=t._z,o=t._w,r=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*r+n*l-a*c,this._y=n*u+o*c+a*r-i*l,this._z=a*u+o*l+i*c-n*r,this._w=o*u-i*r-n*c-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,a=this._z,o=this._w;let r=o*t._w+i*t._x+n*t._y+a*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=i,this._y=n,this._z=a,this;const c=1-r*r;if(c<=Number.EPSILON){const v=1-e;return this._w=v*o+e*this._w,this._x=v*i+e*this._x,this._y=v*n+e*this._y,this._z=v*a+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,r),f=Math.sin((1-e)*u)/l,p=Math.sin(e*u)/l;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=n*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(a),i*Math.cos(a),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,e=0,i=0){K.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*n,this.y=a[1]*e+a[4]*i+a[7]*n,this.z=a[2]*e+a[5]*i+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=t.elements,o=1/(a[3]*e+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*n+a[12])*o,this.y=(a[1]*e+a[5]*i+a[9]*n+a[13])*o,this.z=(a[2]*e+a[6]*i+a[10]*n+a[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,a=t.x,o=t.y,r=t.z,c=t.w,l=2*(o*n-r*i),u=2*(r*e-a*n),f=2*(a*i-o*e);return this.x=e+c*l+o*f-r*u,this.y=i+c*u+r*l-a*f,this.z=n+c*f+a*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n,this.y=a[1]*e+a[5]*i+a[9]*n,this.z=a[2]*e+a[6]*i+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,a=t.z,o=e.x,r=e.y,c=e.z;return this.x=n*c-a*r,this.y=a*o-i*c,this.z=i*r-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return zs.copy(this).projectOnVector(t),this.sub(zs)}reflect(t){return this.sub(zs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zs=new K,wr=new Di;class Cn{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,r=a.count;o<r;o++)t.isMesh===!0?t.getVertexPosition(o,Ge):Ge.fromBufferAttribute(a,o),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),On.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),On.copy(i.boundingBox)),On.applyMatrix4(t.matrixWorld),this.union(On)}const n=t.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gn),Nn.subVectors(this.max,gn),ki.subVectors(t.a,gn),Hi.subVectors(t.b,gn),Vi.subVectors(t.c,gn),oi.subVectors(Hi,ki),li.subVectors(Vi,Hi),Ti.subVectors(ki,Vi);let e=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Ti.z,Ti.y,oi.z,0,-oi.x,li.z,0,-li.x,Ti.z,0,-Ti.x,-oi.y,oi.x,0,-li.y,li.x,0,-Ti.y,Ti.x,0];return!Fs(e,ki,Hi,Vi,Nn)||(e=[1,0,0,0,1,0,0,0,1],!Fs(e,ki,Hi,Vi,Nn))?!1:(Un.crossVectors(oi,li),e=[Un.x,Un.y,Un.z],Fs(e,ki,Hi,Vi,Nn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const je=[new K,new K,new K,new K,new K,new K,new K,new K],Ge=new K,On=new Cn,ki=new K,Hi=new K,Vi=new K,oi=new K,li=new K,Ti=new K,gn=new K,Nn=new K,Un=new K,Ei=new K;function Fs(s,t,e,i,n){for(let a=0,o=s.length-3;a<=o;a+=3){Ei.fromArray(s,a);const r=n.x*Math.abs(Ei.x)+n.y*Math.abs(Ei.y)+n.z*Math.abs(Ei.z),c=t.dot(Ei),l=e.dot(Ei),u=i.dot(Ei);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>r)return!1}return!0}const Fc=new Cn,vn=new K,Bs=new K;class Aa{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Fc.setFromPoints(t).getCenter(i);let n=0;for(let a=0,o=t.length;a<o;a++)n=Math.max(n,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vn.subVectors(t,this.center);const e=vn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(vn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vn.copy(t.center).add(Bs)),this.expandByPoint(vn.copy(t.center).sub(Bs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Je=new K,Gs=new K,zn=new K,ci=new K,ks=new K,Fn=new K,Hs=new K;class ba{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Je.copy(this.origin).addScaledVector(this.direction,e),Je.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Gs.copy(t).add(e).multiplyScalar(.5),zn.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(Gs);const a=t.distanceTo(e)*.5,o=-this.direction.dot(zn),r=ci.dot(this.direction),c=-ci.dot(zn),l=ci.lengthSq(),u=Math.abs(1-o*o);let f,p,v,m;if(u>0)if(f=o*c-r,p=o*r-c,m=a*u,f>=0)if(p>=-m)if(p<=m){const g=1/u;f*=g,p*=g,v=f*(f+o*p+2*r)+p*(o*f+p+2*c)+l}else p=a,f=Math.max(0,-(o*p+r)),v=-f*f+p*(p+2*c)+l;else p=-a,f=Math.max(0,-(o*p+r)),v=-f*f+p*(p+2*c)+l;else p<=-m?(f=Math.max(0,-(-o*a+r)),p=f>0?-a:Math.min(Math.max(-a,-c),a),v=-f*f+p*(p+2*c)+l):p<=m?(f=0,p=Math.min(Math.max(-a,-c),a),v=p*(p+2*c)+l):(f=Math.max(0,-(o*a+r)),p=f>0?a:Math.min(Math.max(-a,-c),a),v=-f*f+p*(p+2*c)+l);else p=o>0?-a:a,f=Math.max(0,-(o*p+r)),v=-f*f+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(Gs).addScaledVector(zn,p),v}intersectSphere(t,e){Je.subVectors(t.center,this.origin);const i=Je.dot(this.direction),n=Je.dot(Je)-i*i,a=t.radius*t.radius;if(n>a)return null;const o=Math.sqrt(a-n),r=i-o,c=i+o;return c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,a,o,r,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(i=(t.min.x-p.x)*l,n=(t.max.x-p.x)*l):(i=(t.max.x-p.x)*l,n=(t.min.x-p.x)*l),u>=0?(a=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(a=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),i>o||a>n||((a>i||isNaN(i))&&(i=a),(o<n||isNaN(n))&&(n=o),f>=0?(r=(t.min.z-p.z)*f,c=(t.max.z-p.z)*f):(r=(t.max.z-p.z)*f,c=(t.min.z-p.z)*f),i>c||r>n)||((r>i||i!==i)&&(i=r),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Je)!==null}intersectTriangle(t,e,i,n,a){ks.subVectors(e,t),Fn.subVectors(i,t),Hs.crossVectors(ks,Fn);let o=this.direction.dot(Hs),r;if(o>0){if(n)return null;r=1}else if(o<0)r=-1,o=-o;else return null;ci.subVectors(this.origin,t);const c=r*this.direction.dot(Fn.crossVectors(ci,Fn));if(c<0)return null;const l=r*this.direction.dot(ks.cross(ci));if(l<0||c+l>o)return null;const u=-r*ci.dot(Hs);return u<0?null:this.at(u/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,i,n,a,o,r,c,l,u,f,p,v,m,g,h){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,o,r,c,l,u,f,p,v,m,g,h)}set(t,e,i,n,a,o,r,c,l,u,f,p,v,m,g,h){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=n,d[1]=a,d[5]=o,d[9]=r,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=p,d[3]=v,d[7]=m,d[11]=g,d[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Wi.setFromMatrixColumn(t,0).length(),a=1/Wi.setFromMatrixColumn(t,1).length(),o=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,a=t.z,o=Math.cos(i),r=Math.sin(i),c=Math.cos(n),l=Math.sin(n),u=Math.cos(a),f=Math.sin(a);if(t.order==="XYZ"){const p=o*u,v=o*f,m=r*u,g=r*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=v+m*l,e[5]=p-g*l,e[9]=-r*c,e[2]=g-p*l,e[6]=m+v*l,e[10]=o*c}else if(t.order==="YXZ"){const p=c*u,v=c*f,m=l*u,g=l*f;e[0]=p+g*r,e[4]=m*r-v,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-r,e[2]=v*r-m,e[6]=g+p*r,e[10]=o*c}else if(t.order==="ZXY"){const p=c*u,v=c*f,m=l*u,g=l*f;e[0]=p-g*r,e[4]=-o*f,e[8]=m+v*r,e[1]=v+m*r,e[5]=o*u,e[9]=g-p*r,e[2]=-o*l,e[6]=r,e[10]=o*c}else if(t.order==="ZYX"){const p=o*u,v=o*f,m=r*u,g=r*f;e[0]=c*u,e[4]=m*l-v,e[8]=p*l+g,e[1]=c*f,e[5]=g*l+p,e[9]=v*l-m,e[2]=-l,e[6]=r*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,v=o*l,m=r*c,g=r*l;e[0]=c*u,e[4]=g-p*f,e[8]=m*f+v,e[1]=f,e[5]=o*u,e[9]=-r*u,e[2]=-l*u,e[6]=v*f+m,e[10]=p-g*f}else if(t.order==="XZY"){const p=o*c,v=o*l,m=r*c,g=r*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=p*f+g,e[5]=o*u,e[9]=v*f-m,e[2]=m*f-v,e[6]=r*u,e[10]=g*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bc,t,Gc)}lookAt(t,e,i){const n=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),hi.crossVectors(i,Ie),hi.lengthSq()===0&&(Math.abs(i.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),hi.crossVectors(i,Ie)),hi.normalize(),Bn.crossVectors(Ie,hi),n[0]=hi.x,n[4]=Bn.x,n[8]=Ie.x,n[1]=hi.y,n[5]=Bn.y,n[9]=Ie.y,n[2]=hi.z,n[6]=Bn.z,n[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,o=i[0],r=i[4],c=i[8],l=i[12],u=i[1],f=i[5],p=i[9],v=i[13],m=i[2],g=i[6],h=i[10],d=i[14],M=i[3],_=i[7],y=i[11],T=i[15],S=n[0],A=n[4],O=n[8],x=n[12],b=n[1],F=n[5],z=n[9],W=n[13],C=n[2],D=n[6],N=n[10],H=n[14],Y=n[3],X=n[7],J=n[11],nt=n[15];return a[0]=o*S+r*b+c*C+l*Y,a[4]=o*A+r*F+c*D+l*X,a[8]=o*O+r*z+c*N+l*J,a[12]=o*x+r*W+c*H+l*nt,a[1]=u*S+f*b+p*C+v*Y,a[5]=u*A+f*F+p*D+v*X,a[9]=u*O+f*z+p*N+v*J,a[13]=u*x+f*W+p*H+v*nt,a[2]=m*S+g*b+h*C+d*Y,a[6]=m*A+g*F+h*D+d*X,a[10]=m*O+g*z+h*N+d*J,a[14]=m*x+g*W+h*H+d*nt,a[3]=M*S+_*b+y*C+T*Y,a[7]=M*A+_*F+y*D+T*X,a[11]=M*O+_*z+y*N+T*J,a[15]=M*x+_*W+y*H+T*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],a=t[12],o=t[1],r=t[5],c=t[9],l=t[13],u=t[2],f=t[6],p=t[10],v=t[14],m=t[3],g=t[7],h=t[11],d=t[15];return m*(+a*c*f-n*l*f-a*r*p+i*l*p+n*r*v-i*c*v)+g*(+e*c*v-e*l*p+a*o*p-n*o*v+n*l*u-a*c*u)+h*(+e*l*f-e*r*v-a*o*f+i*o*v+a*r*u-i*l*u)+d*(-n*r*u-e*c*f+e*r*p+n*o*f-i*o*p+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],u=t[8],f=t[9],p=t[10],v=t[11],m=t[12],g=t[13],h=t[14],d=t[15],M=f*h*l-g*p*l+g*c*v-r*h*v-f*c*d+r*p*d,_=m*p*l-u*h*l-m*c*v+o*h*v+u*c*d-o*p*d,y=u*g*l-m*f*l+m*r*v-o*g*v-u*r*d+o*f*d,T=m*f*c-u*g*c-m*r*p+o*g*p+u*r*h-o*f*h,S=e*M+i*_+n*y+a*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/S;return t[0]=M*A,t[1]=(g*p*a-f*h*a-g*n*v+i*h*v+f*n*d-i*p*d)*A,t[2]=(r*h*a-g*c*a+g*n*l-i*h*l-r*n*d+i*c*d)*A,t[3]=(f*c*a-r*p*a-f*n*l+i*p*l+r*n*v-i*c*v)*A,t[4]=_*A,t[5]=(u*h*a-m*p*a+m*n*v-e*h*v-u*n*d+e*p*d)*A,t[6]=(m*c*a-o*h*a-m*n*l+e*h*l+o*n*d-e*c*d)*A,t[7]=(o*p*a-u*c*a+u*n*l-e*p*l-o*n*v+e*c*v)*A,t[8]=y*A,t[9]=(m*f*a-u*g*a-m*i*v+e*g*v+u*i*d-e*f*d)*A,t[10]=(o*g*a-m*r*a+m*i*l-e*g*l-o*i*d+e*r*d)*A,t[11]=(u*r*a-o*f*a-u*i*l+e*f*l+o*i*v-e*r*v)*A,t[12]=T*A,t[13]=(u*g*n-m*f*n+m*i*p-e*g*p-u*i*h+e*f*h)*A,t[14]=(m*r*n-o*g*n-m*i*c+e*g*c+o*i*h-e*r*h)*A,t[15]=(o*f*n-u*r*n+u*i*c-e*f*c-o*i*p+e*r*p)*A,this}scale(t){const e=this.elements,i=t.x,n=t.y,a=t.z;return e[0]*=i,e[4]*=n,e[8]*=a,e[1]*=i,e[5]*=n,e[9]*=a,e[2]*=i,e[6]*=n,e[10]*=a,e[3]*=i,e[7]*=n,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),a=1-i,o=t.x,r=t.y,c=t.z,l=a*o,u=a*r;return this.set(l*o+i,l*r-n*c,l*c+n*r,0,l*r+n*c,u*r+i,u*c-n*o,0,l*c-n*r,u*c+n*o,a*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,a,o){return this.set(1,i,a,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,a=e._x,o=e._y,r=e._z,c=e._w,l=a+a,u=o+o,f=r+r,p=a*l,v=a*u,m=a*f,g=o*u,h=o*f,d=r*f,M=c*l,_=c*u,y=c*f,T=i.x,S=i.y,A=i.z;return n[0]=(1-(g+d))*T,n[1]=(v+y)*T,n[2]=(m-_)*T,n[3]=0,n[4]=(v-y)*S,n[5]=(1-(p+d))*S,n[6]=(h+M)*S,n[7]=0,n[8]=(m+_)*A,n[9]=(h-M)*A,n[10]=(1-(p+g))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let a=Wi.set(n[0],n[1],n[2]).length();const o=Wi.set(n[4],n[5],n[6]).length(),r=Wi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),t.x=n[12],t.y=n[13],t.z=n[14],ke.copy(this);const l=1/a,u=1/o,f=1/r;return ke.elements[0]*=l,ke.elements[1]*=l,ke.elements[2]*=l,ke.elements[4]*=u,ke.elements[5]*=u,ke.elements[6]*=u,ke.elements[8]*=f,ke.elements[9]*=f,ke.elements[10]*=f,e.setFromRotationMatrix(ke),i.x=a,i.y=o,i.z=r,this}makePerspective(t,e,i,n,a,o,r=si){const c=this.elements,l=2*a/(e-t),u=2*a/(i-n),f=(e+t)/(e-t),p=(i+n)/(i-n);let v,m;if(r===si)v=-(o+a)/(o-a),m=-2*o*a/(o-a);else if(r===ds)v=-o/(o-a),m=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,a,o,r=si){const c=this.elements,l=1/(e-t),u=1/(i-n),f=1/(o-a),p=(e+t)*l,v=(i+n)*u;let m,g;if(r===si)m=(o+a)*f,g=-2*f;else if(r===ds)m=a*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=g,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Wi=new K,ke=new he,Bc=new K(0,0,0),Gc=new K(1,1,1),hi=new K,Bn=new K,Ie=new K,Cr=new he,Rr=new Di;class ys{constructor(t=0,e=0,i=0,n=ys.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,a=n[0],o=n[4],r=n[8],c=n[1],l=n[5],u=n[9],f=n[2],p=n[6],v=n[10];switch(e){case"XYZ":this._y=Math.asin(be(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-u,v),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(r,v),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(be(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,v),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,v),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(r,v));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-u,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Cr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cr,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rr.setFromEuler(this),this.setFromQuaternion(Rr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ys.DEFAULT_ORDER="XYZ";class Pa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kc=0;const Lr=new K,Yi=new Di,Qe=new he,Gn=new K,_n=new K,Hc=new K,Vc=new Di,Ir=new K(1,0,0),Dr=new K(0,1,0),Or=new K(0,0,1),Wc={type:"added"},Yc={type:"removed"};class xe extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new K,e=new ys,i=new Di,n=new K(1,1,1);function a(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new he},normalMatrix:{value:new Kt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(Ir,t)}rotateY(t){return this.rotateOnAxis(Dr,t)}rotateZ(t){return this.rotateOnAxis(Or,t)}translateOnAxis(t,e){return Lr.copy(t).applyQuaternion(this.quaternion),this.position.add(Lr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ir,t)}translateY(t){return this.translateOnAxis(Dr,t)}translateZ(t){return this.translateOnAxis(Or,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Gn.copy(t):Gn.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),_n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(_n,Gn,this.up):Qe.lookAt(Gn,_n,this.up),this.quaternion.setFromRotationMatrix(Qe),n&&(Qe.extractRotation(n.matrixWorld),Yi.setFromRotationMatrix(Qe),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,t,Hc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,Vc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const a=e[i];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++){const r=n[a];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];a(t.shapes,f)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(a(t.materials,this.material[c]));n.material=r}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let r=0;r<this.children.length;r++)n.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];n.animations.push(a(t.animations,c))}}if(e){const r=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),p=o(t.skeletons),v=o(t.animations),m=o(t.nodes);r.length>0&&(i.geometries=r),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),v.length>0&&(i.animations=v),m.length>0&&(i.nodes=m)}return i.object=n,i;function o(r){const c=[];for(const l in r){const u=r[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}xe.DEFAULT_UP=new K(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const He=new K,ti=new K,Vs=new K,ei=new K,Xi=new K,$i=new K,Nr=new K,Ws=new K,Ys=new K,Xs=new K;let kn=!1;class Ve{constructor(t=new K,e=new K,i=new K){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),He.subVectors(t,e),n.cross(He);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,e,i,n,a){He.subVectors(n,e),ti.subVectors(i,e),Vs.subVectors(t,e);const o=He.dot(He),r=He.dot(ti),c=He.dot(Vs),l=ti.dot(ti),u=ti.dot(Vs),f=o*l-r*r;if(f===0)return a.set(0,0,0),null;const p=1/f,v=(l*c-r*u)*p,m=(o*u-r*c)*p;return a.set(1-v-m,m,v)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(t,e,i,n,a,o,r,c){return kn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kn=!0),this.getInterpolation(t,e,i,n,a,o,r,c)}static getInterpolation(t,e,i,n,a,o,r,c){return this.getBarycoord(t,e,i,n,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,ei.x),c.addScaledVector(o,ei.y),c.addScaledVector(r,ei.z),c)}static isFrontFacing(t,e,i,n){return He.subVectors(i,e),ti.subVectors(t,e),He.cross(ti).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return He.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),He.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,a){return kn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kn=!0),Ve.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}getInterpolation(t,e,i,n,a){return Ve.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,a=this.c;let o,r;Xi.subVectors(n,i),$i.subVectors(a,i),Ws.subVectors(t,i);const c=Xi.dot(Ws),l=$i.dot(Ws);if(c<=0&&l<=0)return e.copy(i);Ys.subVectors(t,n);const u=Xi.dot(Ys),f=$i.dot(Ys);if(u>=0&&f<=u)return e.copy(n);const p=c*f-u*l;if(p<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Xi,o);Xs.subVectors(t,a);const v=Xi.dot(Xs),m=$i.dot(Xs);if(m>=0&&v<=m)return e.copy(a);const g=v*l-c*m;if(g<=0&&l>=0&&m<=0)return r=l/(l-m),e.copy(i).addScaledVector($i,r);const h=u*m-v*f;if(h<=0&&f-u>=0&&v-m>=0)return Nr.subVectors(a,n),r=(f-u)/(f-u+(v-m)),e.copy(n).addScaledVector(Nr,r);const d=1/(h+g+p);return o=g*d,r=p*d,e.copy(i).addScaledVector(Xi,o).addScaledVector($i,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Hn={h:0,s:0,l:0};function $s(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Qt.workingColorSpace){if(t=Rc(t,1),e=be(e,0,1),i=be(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,o=2*i-a;this.r=$s(o,a,t+1/3),this.g=$s(o,a,t),this.b=$s(o,a,t-1/3)}return Qt.toWorkingColorSpace(this,n),this}setStyle(t,e=ge){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=n[1],r=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){const i=Bo[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return Qt.fromWorkingColorSpace(ye.copy(this),t),Math.round(be(ye.r*255,0,255))*65536+Math.round(be(ye.g*255,0,255))*256+Math.round(be(ye.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(ye.copy(this),e);const i=ye.r,n=ye.g,a=ye.b,o=Math.max(i,n,a),r=Math.min(i,n,a);let c,l;const u=(r+o)/2;if(r===o)c=0,l=0;else{const f=o-r;switch(l=u<=.5?f/(o+r):f/(2-o-r),o){case i:c=(n-a)/f+(n<a?6:0);break;case n:c=(a-i)/f+2;break;case a:c=(i-n)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=ge){Qt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,i=ye.g,n=ye.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(Hn);const i=Ds(di.h,Hn.h,e),n=Ds(di.s,Hn.s,e),a=Ds(di.l,Hn.l,e);return this.setHSL(i,n,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*n,this.g=a[1]*e+a[4]*i+a[7]*n,this.b=a[2]*e+a[5]*i+a[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Jt;Jt.NAMES=Bo;let Xc=0;class Rn extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=on,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ca,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==on&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==la&&(i.blendSrc=this.blendSrc),this.blendDst!==ca&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xr&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const o=[];for(const r in a){const c=a[r];delete c.metadata,o.push(c)}return o}if(e){const a=n(t.textures),o=n(t.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fs extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new K,Vn=new Gt;class Ke{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Tr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Vn.fromBufferAttribute(this,e),Vn.applyMatrix3(t),this.setXY(e,Vn.x,Vn.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=mn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=we(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array),n=we(n,this.array),a=we(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tr&&(t.usage=this.usage),t}}class Go extends Ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ko extends Ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Te extends Ke{constructor(t,e,i){super(new Float32Array(t),e,i)}}let $c=0;const Ue=new he,Ks=new xe,Ki=new K,De=new Cn,yn=new Cn,pe=new K;class qe extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(No(t)?ko:Go)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Kt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,i){return Ue.makeTranslation(t,e,i),this.applyMatrix4(Ue),this}scale(t,e,i){return Ue.makeScale(t,e,i),this.applyMatrix4(Ue),this}lookAt(t){return Ks.lookAt(t),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const a=e[i];De.setFromBufferAttribute(a),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Aa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(t){const i=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const r=e[a];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(pe.addVectors(De.min,yn.min),De.expandByPoint(pe),pe.addVectors(De.max,yn.max),De.expandByPoint(pe)):(De.expandByPoint(yn.min),De.expandByPoint(yn.max))}De.getCenter(i);let n=0;for(let a=0,o=t.count;a<o;a++)pe.fromBufferAttribute(t,a),n=Math.max(n,i.distanceToSquared(pe));if(e)for(let a=0,o=e.length;a<o;a++){const r=e[a],c=this.morphTargetsRelative;for(let l=0,u=r.count;l<u;l++)pe.fromBufferAttribute(r,l),c&&(Ki.fromBufferAttribute(t,l),pe.add(Ki)),n=Math.max(n,i.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,a=e.normal.array,o=e.uv.array,r=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*r),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let b=0;b<r;b++)l[b]=new K,u[b]=new K;const f=new K,p=new K,v=new K,m=new Gt,g=new Gt,h=new Gt,d=new K,M=new K;function _(b,F,z){f.fromArray(n,b*3),p.fromArray(n,F*3),v.fromArray(n,z*3),m.fromArray(o,b*2),g.fromArray(o,F*2),h.fromArray(o,z*2),p.sub(f),v.sub(f),g.sub(m),h.sub(m);const W=1/(g.x*h.y-h.x*g.y);isFinite(W)&&(d.copy(p).multiplyScalar(h.y).addScaledVector(v,-g.y).multiplyScalar(W),M.copy(v).multiplyScalar(g.x).addScaledVector(p,-h.x).multiplyScalar(W),l[b].add(d),l[F].add(d),l[z].add(d),u[b].add(M),u[F].add(M),u[z].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let b=0,F=y.length;b<F;++b){const z=y[b],W=z.start,C=z.count;for(let D=W,N=W+C;D<N;D+=3)_(i[D+0],i[D+1],i[D+2])}const T=new K,S=new K,A=new K,O=new K;function x(b){A.fromArray(a,b*3),O.copy(A);const F=l[b];T.copy(F),T.sub(A.multiplyScalar(A.dot(F))).normalize(),S.crossVectors(O,F);const W=S.dot(u[b])<0?-1:1;c[b*4]=T.x,c[b*4+1]=T.y,c[b*4+2]=T.z,c[b*4+3]=W}for(let b=0,F=y.length;b<F;++b){const z=y[b],W=z.start,C=z.count;for(let D=W,N=W+C;D<N;D+=3)x(i[D+0]),x(i[D+1]),x(i[D+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,v=i.count;p<v;p++)i.setXYZ(p,0,0,0);const n=new K,a=new K,o=new K,r=new K,c=new K,l=new K,u=new K,f=new K;if(t)for(let p=0,v=t.count;p<v;p+=3){const m=t.getX(p+0),g=t.getX(p+1),h=t.getX(p+2);n.fromBufferAttribute(e,m),a.fromBufferAttribute(e,g),o.fromBufferAttribute(e,h),u.subVectors(o,a),f.subVectors(n,a),u.cross(f),r.fromBufferAttribute(i,m),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,h),r.add(u),c.add(u),l.add(u),i.setXYZ(m,r.x,r.y,r.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(h,l.x,l.y,l.z)}else for(let p=0,v=e.count;p<v;p+=3)n.fromBufferAttribute(e,p+0),a.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,a),f.subVectors(n,a),u.cross(f),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(r,c){const l=r.array,u=r.itemSize,f=r.normalized,p=new l.constructor(c.length*u);let v=0,m=0;for(let g=0,h=c.length;g<h;g++){r.isInterleavedBufferAttribute?v=c[g]*r.data.stride+r.offset:v=c[g]*u;for(let d=0;d<u;d++)p[m++]=l[v++]}return new Ke(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,i=this.index.array,n=this.attributes;for(const r in n){const c=n[r],l=t(c,i);e.setAttribute(r,l)}const a=this.morphAttributes;for(const r in a){const c=[],l=a[r];for(let u=0,f=l.length;u<f;u++){const p=l[u],v=t(p,i);c.push(v)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,c=o.length;r<c;r++){const l=o[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const n={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,p=l.length;f<p;f++){const v=l[f];u.push(v.toJSON(t.data))}u.length>0&&(n[c]=u,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const l in n){const u=n[l];this.setAttribute(l,u.clone(e))}const a=t.morphAttributes;for(const l in a){const u=[],f=a[l];for(let p=0,v=f.length;p<v;p++)u.push(f[p].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ur=new he,Si=new ba,Wn=new Aa,zr=new K,qi=new K,Zi=new K,ji=new K,qs=new K,Yn=new K,Xn=new Gt,$n=new Gt,Kn=new Gt,Fr=new K,Br=new K,Gr=new K,qn=new K,Zn=new K;class te extends xe{constructor(t=new qe,e=new fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=n.length;a<o;a++){const r=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const r=this.morphTargetInfluences;if(a&&r){Yn.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=r[c],f=a[c];u!==0&&(qs.fromBufferAttribute(f,t),o?Yn.addScaledVector(qs,u):Yn.addScaledVector(qs.sub(e),u))}e.add(Yn)}return e}raycast(t,e){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wn.copy(i.boundingSphere),Wn.applyMatrix4(a),Si.copy(t.ray).recast(t.near),!(Wn.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Wn,zr)===null||Si.origin.distanceToSquared(zr)>(t.far-t.near)**2))&&(Ur.copy(a).invert(),Si.copy(t.ray).applyMatrix4(Ur),!(i.boundingBox!==null&&Si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,i){let n;const a=this.geometry,o=this.material,r=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,p=a.groups,v=a.drawRange;if(r!==null)if(Array.isArray(o))for(let m=0,g=p.length;m<g;m++){const h=p[m],d=o[h.materialIndex],M=Math.max(h.start,v.start),_=Math.min(r.count,Math.min(h.start+h.count,v.start+v.count));for(let y=M,T=_;y<T;y+=3){const S=r.getX(y),A=r.getX(y+1),O=r.getX(y+2);n=jn(this,d,t,i,l,u,f,S,A,O),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=h.materialIndex,e.push(n))}}else{const m=Math.max(0,v.start),g=Math.min(r.count,v.start+v.count);for(let h=m,d=g;h<d;h+=3){const M=r.getX(h),_=r.getX(h+1),y=r.getX(h+2);n=jn(this,o,t,i,l,u,f,M,_,y),n&&(n.faceIndex=Math.floor(h/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,g=p.length;m<g;m++){const h=p[m],d=o[h.materialIndex],M=Math.max(h.start,v.start),_=Math.min(c.count,Math.min(h.start+h.count,v.start+v.count));for(let y=M,T=_;y<T;y+=3){const S=y,A=y+1,O=y+2;n=jn(this,d,t,i,l,u,f,S,A,O),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=h.materialIndex,e.push(n))}}else{const m=Math.max(0,v.start),g=Math.min(c.count,v.start+v.count);for(let h=m,d=g;h<d;h+=3){const M=h,_=h+1,y=h+2;n=jn(this,o,t,i,l,u,f,M,_,y),n&&(n.faceIndex=Math.floor(h/3),e.push(n))}}}}function Kc(s,t,e,i,n,a,o,r){let c;if(t.side===Re?c=i.intersectTriangle(o,a,n,!0,r):c=i.intersectTriangle(n,a,o,t.side===_i,r),c===null)return null;Zn.copy(r),Zn.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Zn);return l<e.near||l>e.far?null:{distance:l,point:Zn.clone(),object:s}}function jn(s,t,e,i,n,a,o,r,c,l){s.getVertexPosition(r,qi),s.getVertexPosition(c,Zi),s.getVertexPosition(l,ji);const u=Kc(s,t,e,i,qi,Zi,ji,qn);if(u){n&&(Xn.fromBufferAttribute(n,r),$n.fromBufferAttribute(n,c),Kn.fromBufferAttribute(n,l),u.uv=Ve.getInterpolation(qn,qi,Zi,ji,Xn,$n,Kn,new Gt)),a&&(Xn.fromBufferAttribute(a,r),$n.fromBufferAttribute(a,c),Kn.fromBufferAttribute(a,l),u.uv1=Ve.getInterpolation(qn,qi,Zi,ji,Xn,$n,Kn,new Gt),u.uv2=u.uv1),o&&(Fr.fromBufferAttribute(o,r),Br.fromBufferAttribute(o,c),Gr.fromBufferAttribute(o,l),u.normal=Ve.getInterpolation(qn,qi,Zi,ji,Fr,Br,Gr,new K),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:r,b:c,c:l,normal:new K,materialIndex:0};Ve.getNormal(qi,Zi,ji,f.normal),u.face=f}return u}class Ce extends qe{constructor(t=1,e=1,i=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:a,depthSegments:o};const r=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const c=[],l=[],u=[],f=[];let p=0,v=0;m("z","y","x",-1,-1,i,e,t,o,a,0),m("z","y","x",1,-1,i,e,-t,o,a,1),m("x","z","y",1,1,t,i,e,n,o,2),m("x","z","y",1,-1,t,i,-e,n,o,3),m("x","y","z",1,-1,t,e,i,n,a,4),m("x","y","z",-1,-1,t,e,-i,n,a,5),this.setIndex(c),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(f,2));function m(g,h,d,M,_,y,T,S,A,O,x){const b=y/A,F=T/O,z=y/2,W=T/2,C=S/2,D=A+1,N=O+1;let H=0,Y=0;const X=new K;for(let J=0;J<N;J++){const nt=J*F-W;for(let ot=0;ot<D;ot++){const Z=ot*b-z;X[g]=Z*M,X[h]=nt*_,X[d]=C,l.push(X.x,X.y,X.z),X[g]=0,X[h]=0,X[d]=S>0?1:-1,u.push(X.x,X.y,X.z),f.push(ot/A),f.push(1-J/O),H+=1}}for(let J=0;J<O;J++)for(let nt=0;nt<A;nt++){const ot=p+nt+D*J,Z=p+nt+D*(J+1),at=p+(nt+1)+D*(J+1),dt=p+(nt+1)+D*J;c.push(ot,Z,dt),c.push(Z,at,dt),Y+=6}r.addGroup(v,Y,x),v+=Y,p+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function un(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Se(s){const t={};for(let e=0;e<s.length;e++){const i=un(s[e]);for(const n in i)t[n]=i[n]}return t}function qc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ho(s){return s.getRenderTarget()===null?s.outputColorSpace:Qt.workingColorSpace}const Zc={clone:un,merge:Se};var jc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jc,this.fragmentShader=Jc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=un(t.uniforms),this.uniformsGroups=qc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Vo extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fe extends Vo{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ma*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ss*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;a+=o.offsetX*n/c,e-=o.offsetY*i/l,n*=o.width/c,i*=o.height/l}const r=this.filmOffset;r!==0&&(a+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ji=-90,Qi=1;class Qc extends xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Fe(Ji,Qi,t,e);n.layers=this.layers,this.add(n);const a=new Fe(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const o=new Fe(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const r=new Fe(Ji,Qi,t,e);r.layers=this.layers,this.add(r);const c=new Fe(Ji,Qi,t,e);c.layers=this.layers,this.add(c);const l=new Fe(Ji,Qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,a,o,r,c]=e;for(const l of e)this.remove(l);if(t===si)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ds)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,o,r,c,l,u]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,a),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,r),t.setRenderTarget(i,3,n),t.render(e,c),t.setRenderTarget(i,4,n),t.render(e,l),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,n),t.render(e,u),t.setRenderTarget(f,p,v),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Wo extends Oe{constructor(t,e,i,n,a,o,r,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:cn,super(t,e,i,n,a,o,r,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class th extends Ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(Tn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Li?ge:Be),this.texture=new Wo(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ce(5,5,5),a=new Oi({name:"CubemapFromEquirect",uniforms:un(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Re,blending:mi});a.uniforms.tEquirect.value=e;const o=new te(n,a),r=e.minFilter;return e.minFilter===An&&(e.minFilter=ze),new Qc(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(a)}}const Zs=new K,eh=new K,ih=new Kt;class ui{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Zs.subVectors(i,e).cross(eh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Zs),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ih.getNormalMatrix(t),n=this.coplanarPoint(Zs).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Aa,Jn=new K;class wa{constructor(t=new ui,e=new ui,i=new ui,n=new ui,a=new ui,o=new ui){this.planes=[t,e,i,n,a,o]}set(t,e,i,n,a,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(i),r[3].copy(n),r[4].copy(a),r[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=si){const i=this.planes,n=t.elements,a=n[0],o=n[1],r=n[2],c=n[3],l=n[4],u=n[5],f=n[6],p=n[7],v=n[8],m=n[9],g=n[10],h=n[11],d=n[12],M=n[13],_=n[14],y=n[15];if(i[0].setComponents(c-a,p-l,h-v,y-d).normalize(),i[1].setComponents(c+a,p+l,h+v,y+d).normalize(),i[2].setComponents(c+o,p+u,h+m,y+M).normalize(),i[3].setComponents(c-o,p-u,h-m,y-M).normalize(),i[4].setComponents(c-r,p-f,h-g,y-_).normalize(),e===si)i[5].setComponents(c+r,p+f,h+g,y+_).normalize();else if(e===ds)i[5].setComponents(r,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Jn.x=n.normal.x>0?t.max.x:t.min.x,Jn.y=n.normal.y>0?t.max.y:t.min.y,Jn.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Jn)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yo(){let s=null,t=!1,e=null,i=null;function n(a,o){e(a,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function nh(s,t){const e=t.isWebGL2,i=new WeakMap;function n(l,u){const f=l.array,p=l.usage,v=f.byteLength,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,f,p),l.onUploadCallback();let g;if(f instanceof Float32Array)g=s.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=s.SHORT;else if(f instanceof Uint32Array)g=s.UNSIGNED_INT;else if(f instanceof Int32Array)g=s.INT;else if(f instanceof Int8Array)g=s.BYTE;else if(f instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:v}}function a(l,u,f){const p=u.array,v=u._updateRange,m=u.updateRanges;if(s.bindBuffer(f,l),v.count===-1&&m.length===0&&s.bufferSubData(f,0,p),m.length!==0){for(let g=0,h=m.length;g<h;g++){const d=m[g];e?s.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):s.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}v.count!==-1&&(e?s.bufferSubData(f,v.offset*p.BYTES_PER_ELEMENT,p,v.offset,v.count):s.bufferSubData(f,v.offset*p.BYTES_PER_ELEMENT,p.subarray(v.offset,v.offset+v.count)),v.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(s.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const p=i.get(l);(!p||p.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);if(f===void 0)i.set(l,n(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(f.buffer,l,u),f.version=l.version}}return{get:o,remove:r,update:c}}class Ca extends qe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const a=t/2,o=e/2,r=Math.floor(i),c=Math.floor(n),l=r+1,u=c+1,f=t/r,p=e/c,v=[],m=[],g=[],h=[];for(let d=0;d<u;d++){const M=d*p-o;for(let _=0;_<l;_++){const y=_*f-a;m.push(y,-M,0),g.push(0,0,1),h.push(_/r),h.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<r;M++){const _=M+l*d,y=M+l*(d+1),T=M+1+l*(d+1),S=M+1+l*d;v.push(_,y,S),v.push(y,T,S)}this.setIndex(v),this.setAttribute("position",new Te(m,3)),this.setAttribute("normal",new Te(g,3)),this.setAttribute("uv",new Te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ca(t.width,t.height,t.widthSegments,t.heightSegments)}}var sh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ah=`#ifdef USE_ALPHAHASH
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
#endif`,rh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ch=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hh=`#ifdef USE_AOMAP
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
#endif`,dh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uh=`#ifdef USE_BATCHING
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
#endif`,fh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ph=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vh=`#ifdef USE_IRIDESCENCE
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
#endif`,_h=`#ifdef USE_BUMPMAP
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
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ph=`#define PI 3.141592653589793
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
} // validated`,wh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ch=`vec3 transformedNormal = objectNormal;
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
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ih=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Oh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nh=`
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
}`,Uh=`#ifdef USE_ENVMAP
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
#endif`,zh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fh=`#ifdef USE_ENVMAP
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
#endif`,Bh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gh=`#ifdef USE_ENVMAP
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
#endif`,kh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yh=`#ifdef USE_GRADIENTMAP
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
}`,Xh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$h=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zh=`uniform bool receiveShadow;
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
#endif`,jh=`#ifdef USE_ENVMAP
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
#endif`,Jh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,id=`PhysicalMaterial material;
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
#endif`,nd=`struct PhysicalMaterial {
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
}`,sd=`
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
#endif`,ad=`#if defined( RE_IndirectDiffuse )
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
#endif`,rd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,od=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ld=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pd=`#if defined( USE_POINTS_UV )
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
#endif`,md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_d=`#ifdef USE_MORPHNORMALS
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
#endif`,yd=`#ifdef USE_MORPHTARGETS
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
#endif`,Md=`#ifdef USE_MORPHTARGETS
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
#endif`,xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Td=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ad=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bd=`#ifdef USE_NORMALMAP
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
#endif`,Pd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Id=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Od=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hd=`float getShadowMask() {
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
}`,Vd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wd=`#ifdef USE_SKINNING
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
#endif`,Yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xd=`#ifdef USE_SKINNING
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
#endif`,$d=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jd=`#ifdef USE_TRANSMISSION
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
#endif`,Jd=`#ifdef USE_TRANSMISSION
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
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,su=`uniform sampler2D t2D;
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
}`,au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ru=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ou=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cu=`#include <common>
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
}`,hu=`#if DEPTH_PACKING == 3200
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
}`,du=`#define DISTANCE
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
}`,uu=`#define DISTANCE
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
}`,fu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mu=`uniform float scale;
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
}`,gu=`uniform vec3 diffuse;
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
}`,vu=`#include <common>
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
}`,_u=`uniform vec3 diffuse;
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
}`,yu=`#define LAMBERT
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
}`,Mu=`#define LAMBERT
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
}`,xu=`#define MATCAP
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
}`,Tu=`#define MATCAP
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
}`,Eu=`#define NORMAL
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
}`,Su=`#define NORMAL
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
}`,Au=`#define PHONG
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
}`,bu=`#define PHONG
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
}`,Pu=`#define STANDARD
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
}`,wu=`#define STANDARD
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
}`,Cu=`#define TOON
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
}`,Ru=`#define TOON
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
}`,Lu=`uniform float size;
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
}`,Iu=`uniform vec3 diffuse;
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
}`,Du=`#include <common>
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
}`,Ou=`uniform vec3 color;
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
}`,Nu=`uniform float rotation;
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
}`,Uu=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:sh,alphahash_pars_fragment:ah,alphamap_fragment:rh,alphamap_pars_fragment:oh,alphatest_fragment:lh,alphatest_pars_fragment:ch,aomap_fragment:hh,aomap_pars_fragment:dh,batching_pars_vertex:uh,batching_vertex:fh,begin_vertex:ph,beginnormal_vertex:mh,bsdfs:gh,iridescence_fragment:vh,bumpmap_pars_fragment:_h,clipping_planes_fragment:yh,clipping_planes_pars_fragment:Mh,clipping_planes_pars_vertex:xh,clipping_planes_vertex:Th,color_fragment:Eh,color_pars_fragment:Sh,color_pars_vertex:Ah,color_vertex:bh,common:Ph,cube_uv_reflection_fragment:wh,defaultnormal_vertex:Ch,displacementmap_pars_vertex:Rh,displacementmap_vertex:Lh,emissivemap_fragment:Ih,emissivemap_pars_fragment:Dh,colorspace_fragment:Oh,colorspace_pars_fragment:Nh,envmap_fragment:Uh,envmap_common_pars_fragment:zh,envmap_pars_fragment:Fh,envmap_pars_vertex:Bh,envmap_physical_pars_fragment:jh,envmap_vertex:Gh,fog_vertex:kh,fog_pars_vertex:Hh,fog_fragment:Vh,fog_pars_fragment:Wh,gradientmap_pars_fragment:Yh,lightmap_fragment:Xh,lightmap_pars_fragment:$h,lights_lambert_fragment:Kh,lights_lambert_pars_fragment:qh,lights_pars_begin:Zh,lights_toon_fragment:Jh,lights_toon_pars_fragment:Qh,lights_phong_fragment:td,lights_phong_pars_fragment:ed,lights_physical_fragment:id,lights_physical_pars_fragment:nd,lights_fragment_begin:sd,lights_fragment_maps:ad,lights_fragment_end:rd,logdepthbuf_fragment:od,logdepthbuf_pars_fragment:ld,logdepthbuf_pars_vertex:cd,logdepthbuf_vertex:hd,map_fragment:dd,map_pars_fragment:ud,map_particle_fragment:fd,map_particle_pars_fragment:pd,metalnessmap_fragment:md,metalnessmap_pars_fragment:gd,morphcolor_vertex:vd,morphnormal_vertex:_d,morphtarget_pars_vertex:yd,morphtarget_vertex:Md,normal_fragment_begin:xd,normal_fragment_maps:Td,normal_pars_fragment:Ed,normal_pars_vertex:Sd,normal_vertex:Ad,normalmap_pars_fragment:bd,clearcoat_normal_fragment_begin:Pd,clearcoat_normal_fragment_maps:wd,clearcoat_pars_fragment:Cd,iridescence_pars_fragment:Rd,opaque_fragment:Ld,packing:Id,premultiplied_alpha_fragment:Dd,project_vertex:Od,dithering_fragment:Nd,dithering_pars_fragment:Ud,roughnessmap_fragment:zd,roughnessmap_pars_fragment:Fd,shadowmap_pars_fragment:Bd,shadowmap_pars_vertex:Gd,shadowmap_vertex:kd,shadowmask_pars_fragment:Hd,skinbase_vertex:Vd,skinning_pars_vertex:Wd,skinning_vertex:Yd,skinnormal_vertex:Xd,specularmap_fragment:$d,specularmap_pars_fragment:Kd,tonemapping_fragment:qd,tonemapping_pars_fragment:Zd,transmission_fragment:jd,transmission_pars_fragment:Jd,uv_pars_fragment:Qd,uv_pars_vertex:tu,uv_vertex:eu,worldpos_vertex:iu,background_vert:nu,background_frag:su,backgroundCube_vert:au,backgroundCube_frag:ru,cube_vert:ou,cube_frag:lu,depth_vert:cu,depth_frag:hu,distanceRGBA_vert:du,distanceRGBA_frag:uu,equirect_vert:fu,equirect_frag:pu,linedashed_vert:mu,linedashed_frag:gu,meshbasic_vert:vu,meshbasic_frag:_u,meshlambert_vert:yu,meshlambert_frag:Mu,meshmatcap_vert:xu,meshmatcap_frag:Tu,meshnormal_vert:Eu,meshnormal_frag:Su,meshphong_vert:Au,meshphong_frag:bu,meshphysical_vert:Pu,meshphysical_frag:wu,meshtoon_vert:Cu,meshtoon_frag:Ru,points_vert:Lu,points_frag:Iu,shadow_vert:Du,shadow_frag:Ou,sprite_vert:Nu,sprite_frag:Uu},Et={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},$e={basic:{uniforms:Se([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Se([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Se([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Se([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Se([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Se([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Se([Et.points,Et.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Se([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Se([Et.common,Et.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Se([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Se([Et.sprite,Et.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Se([Et.common,Et.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Se([Et.lights,Et.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};$e.physical={uniforms:Se([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Qn={r:0,b:0,g:0};function zu(s,t,e,i,n,a,o){const r=new Jt(0);let c=a===!0?0:1,l,u,f=null,p=0,v=null;function m(h,d){let M=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?e:t).get(_)),_===null?g(r,c):_&&_.isColor&&(g(_,1),M=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===vs)?(u===void 0&&(u=new te(new Ce(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:un($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Qt.getTransfer(_.colorSpace)!==ee,(f!==_||p!==_.version||v!==s.toneMapping)&&(u.material.needsUpdate=!0,f=_,p=_.version,v=s.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new te(new Ca(2,2),new Oi({name:"BackgroundMaterial",uniforms:un($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(_.colorSpace)!==ee,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||p!==_.version||v!==s.toneMapping)&&(l.material.needsUpdate=!0,f=_,p=_.version,v=s.toneMapping),l.layers.enableAll(),h.unshift(l,l.geometry,l.material,0,0,null))}function g(h,d){h.getRGB(Qn,Ho(s)),i.buffers.color.setClear(Qn.r,Qn.g,Qn.b,d,o)}return{getClearColor:function(){return r},setClearColor:function(h,d=1){r.set(h),c=d,g(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(h){c=h,g(r,c)},render:m}}function Fu(s,t,e,i){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,r={},c=h(null);let l=c,u=!1;function f(C,D,N,H,Y){let X=!1;if(o){const J=g(H,N,D);l!==J&&(l=J,v(l.object)),X=d(C,H,N,Y),X&&M(C,H,N,Y)}else{const J=D.wireframe===!0;(l.geometry!==H.id||l.program!==N.id||l.wireframe!==J)&&(l.geometry=H.id,l.program=N.id,l.wireframe=J,X=!0)}Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,O(C,D,N,H),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function p(){return i.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function v(C){return i.isWebGL2?s.bindVertexArray(C):a.bindVertexArrayOES(C)}function m(C){return i.isWebGL2?s.deleteVertexArray(C):a.deleteVertexArrayOES(C)}function g(C,D,N){const H=N.wireframe===!0;let Y=r[C.id];Y===void 0&&(Y={},r[C.id]=Y);let X=Y[D.id];X===void 0&&(X={},Y[D.id]=X);let J=X[H];return J===void 0&&(J=h(p()),X[H]=J),J}function h(C){const D=[],N=[],H=[];for(let Y=0;Y<n;Y++)D[Y]=0,N[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:H,object:C,attributes:{},index:null}}function d(C,D,N,H){const Y=l.attributes,X=D.attributes;let J=0;const nt=N.getAttributes();for(const ot in nt)if(nt[ot].location>=0){const at=Y[ot];let dt=X[ot];if(dt===void 0&&(ot==="instanceMatrix"&&C.instanceMatrix&&(dt=C.instanceMatrix),ot==="instanceColor"&&C.instanceColor&&(dt=C.instanceColor)),at===void 0||at.attribute!==dt||dt&&at.data!==dt.data)return!0;J++}return l.attributesNum!==J||l.index!==H}function M(C,D,N,H){const Y={},X=D.attributes;let J=0;const nt=N.getAttributes();for(const ot in nt)if(nt[ot].location>=0){let at=X[ot];at===void 0&&(ot==="instanceMatrix"&&C.instanceMatrix&&(at=C.instanceMatrix),ot==="instanceColor"&&C.instanceColor&&(at=C.instanceColor));const dt={};dt.attribute=at,at&&at.data&&(dt.data=at.data),Y[ot]=dt,J++}l.attributes=Y,l.attributesNum=J,l.index=H}function _(){const C=l.newAttributes;for(let D=0,N=C.length;D<N;D++)C[D]=0}function y(C){T(C,0)}function T(C,D){const N=l.newAttributes,H=l.enabledAttributes,Y=l.attributeDivisors;N[C]=1,H[C]===0&&(s.enableVertexAttribArray(C),H[C]=1),Y[C]!==D&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,D),Y[C]=D)}function S(){const C=l.newAttributes,D=l.enabledAttributes;for(let N=0,H=D.length;N<H;N++)D[N]!==C[N]&&(s.disableVertexAttribArray(N),D[N]=0)}function A(C,D,N,H,Y,X,J){J===!0?s.vertexAttribIPointer(C,D,N,Y,X):s.vertexAttribPointer(C,D,N,H,Y,X)}function O(C,D,N,H){if(i.isWebGL2===!1&&(C.isInstancedMesh||H.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const Y=H.attributes,X=N.getAttributes(),J=D.defaultAttributeValues;for(const nt in X){const ot=X[nt];if(ot.location>=0){let Z=Y[nt];if(Z===void 0&&(nt==="instanceMatrix"&&C.instanceMatrix&&(Z=C.instanceMatrix),nt==="instanceColor"&&C.instanceColor&&(Z=C.instanceColor)),Z!==void 0){const at=Z.normalized,dt=Z.itemSize,L=e.get(Z);if(L===void 0)continue;const G=L.buffer,Q=L.type,$=L.bytesPerElement,k=i.isWebGL2===!0&&(Q===s.INT||Q===s.UNSIGNED_INT||Z.gpuType===Ao);if(Z.isInterleavedBufferAttribute){const ct=Z.data,B=ct.stride,Nt=Z.offset;if(ct.isInstancedInterleavedBuffer){for(let mt=0;mt<ot.locationSize;mt++)T(ot.location+mt,ct.meshPerAttribute);C.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let mt=0;mt<ot.locationSize;mt++)y(ot.location+mt);s.bindBuffer(s.ARRAY_BUFFER,G);for(let mt=0;mt<ot.locationSize;mt++)A(ot.location+mt,dt/ot.locationSize,Q,at,B*$,(Nt+dt/ot.locationSize*mt)*$,k)}else{if(Z.isInstancedBufferAttribute){for(let ct=0;ct<ot.locationSize;ct++)T(ot.location+ct,Z.meshPerAttribute);C.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ct=0;ct<ot.locationSize;ct++)y(ot.location+ct);s.bindBuffer(s.ARRAY_BUFFER,G);for(let ct=0;ct<ot.locationSize;ct++)A(ot.location+ct,dt/ot.locationSize,Q,at,dt*$,dt/ot.locationSize*ct*$,k)}}else if(J!==void 0){const at=J[nt];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(ot.location,at);break;case 3:s.vertexAttrib3fv(ot.location,at);break;case 4:s.vertexAttrib4fv(ot.location,at);break;default:s.vertexAttrib1fv(ot.location,at)}}}}S()}function x(){z();for(const C in r){const D=r[C];for(const N in D){const H=D[N];for(const Y in H)m(H[Y].object),delete H[Y];delete D[N]}delete r[C]}}function b(C){if(r[C.id]===void 0)return;const D=r[C.id];for(const N in D){const H=D[N];for(const Y in H)m(H[Y].object),delete H[Y];delete D[N]}delete r[C.id]}function F(C){for(const D in r){const N=r[D];if(N[C.id]===void 0)continue;const H=N[C.id];for(const Y in H)m(H[Y].object),delete H[Y];delete N[C.id]}}function z(){W(),u=!0,l!==c&&(l=c,v(l.object))}function W(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:z,resetDefaultState:W,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:y,disableUnusedAttributes:S}}function Bu(s,t,e,i){const n=i.isWebGL2;let a;function o(u){a=u}function r(u,f){s.drawArrays(a,u,f),e.update(f,a,1)}function c(u,f,p){if(p===0)return;let v,m;if(n)v=s,m="drawArraysInstanced";else if(v=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](a,u,f,p),e.update(f,a,p)}function l(u,f,p){if(p===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<p;m++)this.render(u[m],f[m]);else{v.multiDrawArraysWEBGL(a,u,0,f,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];e.update(m,a,1)}}this.setMode=o,this.render=r,this.renderInstances=c,this.renderMultiDraw=l}function Gu(s,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let r=e.precision!==void 0?e.precision:"highp";const c=a(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),h=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,y=o||t.has("OES_texture_float"),T=_&&y,S=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:n,getMaxPrecision:a,precision:r,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:h,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:S}}function ku(s){const t=this;let e=null,i=0,n=!1,a=!1;const o=new ui,r=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const v=f.length!==0||p||i!==0||n;return n=p,i=f.length,v},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){e=u(f,p,0)},this.setState=function(f,p,v){const m=f.clippingPlanes,g=f.clipIntersection,h=f.clipShadows,d=s.get(f);if(!n||m===null||m.length===0||a&&!h)a?u(null):l();else{const M=a?0:i,_=M*4;let y=d.clippingState||null;c.value=y,y=u(m,p,_,v);for(let T=0;T!==_;++T)y[T]=e[T];d.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,p,v,m){const g=f!==null?f.length:0;let h=null;if(g!==0){if(h=c.value,m!==!0||h===null){const d=v+g*4,M=p.matrixWorldInverse;r.getNormalMatrix(M),(h===null||h.length<d)&&(h=new Float32Array(d));for(let _=0,y=v;_!==g;++_,y+=4)o.copy(f[_]).applyMatrix4(M,r),o.normal.toArray(h,y),h[y+3]=o.constant}c.value=h,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,h}}function Hu(s){let t=new WeakMap;function e(o,r){return r===ha?o.mapping=cn:r===da&&(o.mapping=hn),o}function i(o){if(o&&o.isTexture){const r=o.mapping;if(r===ha||r===da)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new th(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",n),e(l.texture,o.mapping)}else return null}}return o}function n(o){const r=o.target;r.removeEventListener("dispose",n);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class Xo extends Vo{constructor(t=-1,e=1,i=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-t,o=i+t,r=n+e,c=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,o=a+l*this.view.width,r-=u*this.view.offsetY,c=r-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,r,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const nn=4,kr=[.125,.215,.35,.446,.526,.582],wi=20,js=new Xo,Hr=new Jt;let Js=null,Qs=0,ta=0;const bi=(1+Math.sqrt(5))/2,tn=1/bi,Vr=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,bi,tn),new K(0,bi,-tn),new K(tn,0,bi),new K(-tn,0,bi),new K(bi,tn,0),new K(-bi,tn,0)];class Wr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Js=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,n,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$r(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Js,Qs,ta),t.scissorTest=!1,ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cn||t.mapping===hn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Js=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:bn,format:Ye,colorSpace:ai,depthBuffer:!1},n=Yr(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yr(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vu(a)),this._blurMaterial=Wu(a,t,e)}return n}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,js)}_sceneToCubeUV(t,e,i,n){const r=new Fe(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Hr),u.toneMapping=gi,u.autoClear=!1;const v=new fs({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),m=new te(new Ce,v);let g=!1;const h=t.background;h?h.isColor&&(v.color.copy(h),t.background=null,g=!0):(v.color.copy(Hr),g=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(r.up.set(0,c[d],0),r.lookAt(l[d],0,0)):M===1?(r.up.set(0,0,c[d]),r.lookAt(0,l[d],0)):(r.up.set(0,c[d],0),r.lookAt(0,0,l[d]));const _=this._cubeSize;ts(n,M*_,d>2?_:0,_,_),u.setRenderTarget(n),g&&u.render(m,r),u.render(t,r)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=h}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===cn||t.mapping===hn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=$r()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xr());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],a),r=a.uniforms;r.envMap.value=t;const c=this._cubeSize;ts(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,js)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Vr[(n-1)%Vr.length];this._blur(t,n-1,n,a,o)}e.autoClear=i}_blur(t,e,i,n,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",a),this._halfBlur(o,t,i,i,n,"longitudinal",a)}_halfBlur(t,e,i,n,a,o,r){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new te(this._lodPlanes[n],l),p=l.uniforms,v=this._sizeLods[i]-1,m=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*wi-1),g=a/m,h=isFinite(a)?1+Math.floor(u*g):wi;h>wi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${wi}`);const d=[];let M=0;for(let A=0;A<wi;++A){const O=A/g,x=Math.exp(-O*O/2);d.push(x),A===0?M+=x:A<h&&(M+=2*x)}for(let A=0;A<d.length;A++)d[A]=d[A]/M;p.envMap.value=t.texture,p.samples.value=h,p.weights.value=d,p.latitudinal.value=o==="latitudinal",r&&(p.poleAxis.value=r);const{_lodMax:_}=this;p.dTheta.value=m,p.mipInt.value=_-i;const y=this._sizeLods[n],T=3*y*(n>_-nn?n-_+nn:0),S=4*(this._cubeSize-y);ts(e,T,S,3*y,2*y),c.setRenderTarget(e),c.render(f,js)}}function Vu(s){const t=[],e=[],i=[];let n=s;const a=s-nn+1+kr.length;for(let o=0;o<a;o++){const r=Math.pow(2,n);e.push(r);let c=1/r;o>s-nn?c=kr[o-s+nn-1]:o===0&&(c=0),i.push(c);const l=1/(r-2),u=-l,f=1+l,p=[u,u,f,u,f,f,u,u,f,f,u,f],v=6,m=6,g=3,h=2,d=1,M=new Float32Array(g*m*v),_=new Float32Array(h*m*v),y=new Float32Array(d*m*v);for(let S=0;S<v;S++){const A=S%3*2/3-1,O=S>2?0:-1,x=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];M.set(x,g*m*S),_.set(p,h*m*S);const b=[S,S,S,S,S,S];y.set(b,d*m*S)}const T=new qe;T.setAttribute("position",new Ke(M,g)),T.setAttribute("uv",new Ke(_,h)),T.setAttribute("faceIndex",new Ke(y,d)),t.push(T),n>nn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Yr(s,t,e){const i=new Ii(s,t,e);return i.texture.mapping=vs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ts(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Wu(s,t,e){const i=new Float32Array(wi),n=new K(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ra(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Xr(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ra(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function $r(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Ra(){return`

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
	`}function Yu(s){let t=new WeakMap,e=null;function i(r){if(r&&r.isTexture){const c=r.mapping,l=c===ha||c===da,u=c===cn||c===hn;if(l||u)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let f=t.get(r);return e===null&&(e=new Wr(s)),f=l?e.fromEquirectangular(r,f):e.fromCubemap(r,f),t.set(r,f),f.texture}else{if(t.has(r))return t.get(r).texture;{const f=r.image;if(l&&f&&f.height>0||u&&f&&n(f)){e===null&&(e=new Wr(s));const p=l?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,p),r.addEventListener("dispose",a),p.texture}else return null}}}return r}function n(r){let c=0;const l=6;for(let u=0;u<l;u++)r[u]!==void 0&&c++;return c===l}function a(r){const c=r.target;c.removeEventListener("dispose",a);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Xu(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function $u(s,t,e,i){const n={},a=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);for(const m in p.morphAttributes){const g=p.morphAttributes[m];for(let h=0,d=g.length;h<d;h++)t.remove(g[h])}p.removeEventListener("dispose",o),delete n[p.id];const v=a.get(p);v&&(t.remove(v),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function r(f,p){return n[p.id]===!0||(p.addEventListener("dispose",o),n[p.id]=!0,e.memory.geometries++),p}function c(f){const p=f.attributes;for(const m in p)t.update(p[m],s.ARRAY_BUFFER);const v=f.morphAttributes;for(const m in v){const g=v[m];for(let h=0,d=g.length;h<d;h++)t.update(g[h],s.ARRAY_BUFFER)}}function l(f){const p=[],v=f.index,m=f.attributes.position;let g=0;if(v!==null){const M=v.array;g=v.version;for(let _=0,y=M.length;_<y;_+=3){const T=M[_+0],S=M[_+1],A=M[_+2];p.push(T,S,S,A,A,T)}}else if(m!==void 0){const M=m.array;g=m.version;for(let _=0,y=M.length/3-1;_<y;_+=3){const T=_+0,S=_+1,A=_+2;p.push(T,S,S,A,A,T)}}else return;const h=new(No(p)?ko:Go)(p,1);h.version=g;const d=a.get(f);d&&t.remove(d),a.set(f,h)}function u(f){const p=a.get(f);if(p){const v=f.index;v!==null&&p.version<v.version&&l(f)}else l(f);return a.get(f)}return{get:r,update:c,getWireframeAttribute:u}}function Ku(s,t,e,i){const n=i.isWebGL2;let a;function o(v){a=v}let r,c;function l(v){r=v.type,c=v.bytesPerElement}function u(v,m){s.drawElements(a,m,r,v*c),e.update(m,a,1)}function f(v,m,g){if(g===0)return;let h,d;if(n)h=s,d="drawElementsInstanced";else if(h=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](a,m,r,v*c,g),e.update(m,a,g)}function p(v,m,g){if(g===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<g;d++)this.render(v[d]/c,m[d]);else{h.multiDrawElementsWEBGL(a,m,0,r,v,0,g);let d=0;for(let M=0;M<g;M++)d+=m[M];e.update(d,a,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=p}function qu(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,r){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=r*(a/3);break;case s.LINES:e.lines+=r*(a/2);break;case s.LINE_STRIP:e.lines+=r*(a-1);break;case s.LINE_LOOP:e.lines+=r*a;break;case s.POINTS:e.points+=r*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Zu(s,t){return s[0]-t[0]}function ju(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Ju(s,t,e){const i={},n=new Float32Array(8),a=new WeakMap,o=new me,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function c(l,u,f){const p=l.morphTargetInfluences;if(t.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let h=a.get(u);if(h===void 0||h.count!==g){let D=function(){W.dispose(),a.delete(u),u.removeEventListener("dispose",D)};var v=D;h!==void 0&&h.texture.dispose();const _=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let x=0;_===!0&&(x=1),y===!0&&(x=2),T===!0&&(x=3);let b=u.attributes.position.count*x,F=1;b>t.maxTextureSize&&(F=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const z=new Float32Array(b*F*4*g),W=new Fo(z,b,F,g);W.type=pi,W.needsUpdate=!0;const C=x*4;for(let N=0;N<g;N++){const H=S[N],Y=A[N],X=O[N],J=b*F*4*N;for(let nt=0;nt<H.count;nt++){const ot=nt*C;_===!0&&(o.fromBufferAttribute(H,nt),z[J+ot+0]=o.x,z[J+ot+1]=o.y,z[J+ot+2]=o.z,z[J+ot+3]=0),y===!0&&(o.fromBufferAttribute(Y,nt),z[J+ot+4]=o.x,z[J+ot+5]=o.y,z[J+ot+6]=o.z,z[J+ot+7]=0),T===!0&&(o.fromBufferAttribute(X,nt),z[J+ot+8]=o.x,z[J+ot+9]=o.y,z[J+ot+10]=o.z,z[J+ot+11]=X.itemSize===4?o.w:1)}}h={count:g,texture:W,size:new Gt(b,F)},a.set(u,h),u.addEventListener("dispose",D)}let d=0;for(let _=0;_<p.length;_++)d+=p[_];const M=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(s,"morphTargetBaseInfluence",M),f.getUniforms().setValue(s,"morphTargetInfluences",p),f.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}else{const m=p===void 0?0:p.length;let g=i[u.id];if(g===void 0||g.length!==m){g=[];for(let y=0;y<m;y++)g[y]=[y,0];i[u.id]=g}for(let y=0;y<m;y++){const T=g[y];T[0]=y,T[1]=p[y]}g.sort(ju);for(let y=0;y<8;y++)y<m&&g[y][1]?(r[y][0]=g[y][0],r[y][1]=g[y][1]):(r[y][0]=Number.MAX_SAFE_INTEGER,r[y][1]=0);r.sort(Zu);const h=u.morphAttributes.position,d=u.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const T=r[y],S=T[0],A=T[1];S!==Number.MAX_SAFE_INTEGER&&A?(h&&u.getAttribute("morphTarget"+y)!==h[S]&&u.setAttribute("morphTarget"+y,h[S]),d&&u.getAttribute("morphNormal"+y)!==d[S]&&u.setAttribute("morphNormal"+y,d[S]),n[y]=A,M+=A):(h&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),d&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),n[y]=0)}const _=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",_),f.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:c}}function Qu(s,t,e,i){let n=new WeakMap;function a(c){const l=i.render.frame,u=c.geometry,f=t.get(c,u);if(n.get(f)!==l&&(t.update(f),n.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),n.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;n.get(p)!==l&&(p.update(),n.set(p,l))}return f}function o(){n=new WeakMap}function r(c){const l=c.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:o}}class $o extends Oe{constructor(t,e,i,n,a,o,r,c,l,u){if(u=u!==void 0?u:Ri,u!==Ri&&u!==dn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ri&&(i=fi),i===void 0&&u===dn&&(i=Ci),super(null,n,a,o,r,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Ae,this.minFilter=c!==void 0?c:Ae,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ko=new Oe,qo=new $o(1,1);qo.compareFunction=Oo;const Zo=new Fo,jo=new zc,Jo=new Wo,Kr=[],qr=[],Zr=new Float32Array(16),jr=new Float32Array(9),Jr=new Float32Array(4);function fn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let a=Kr[n];if(a===void 0&&(a=new Float32Array(n),Kr[n]=a),t!==0){i.toArray(a,0);for(let o=1,r=0;o!==t;++o)r+=e,s[o].toArray(a,r)}return a}function de(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function ue(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Ms(s,t){let e=qr[t];e===void 0&&(e=new Int32Array(t),qr[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function tf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2fv(this.addr,t),ue(e,t)}}function nf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;s.uniform3fv(this.addr,t),ue(e,t)}}function sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4fv(this.addr,t),ue(e,t)}}function af(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(de(e,i))return;Jr.set(i),s.uniformMatrix2fv(this.addr,!1,Jr),ue(e,i)}}function rf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(de(e,i))return;jr.set(i),s.uniformMatrix3fv(this.addr,!1,jr),ue(e,i)}}function of(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(de(e,i))return;Zr.set(i),s.uniformMatrix4fv(this.addr,!1,Zr),ue(e,i)}}function lf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2iv(this.addr,t),ue(e,t)}}function hf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;s.uniform3iv(this.addr,t),ue(e,t)}}function df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4iv(this.addr,t),ue(e,t)}}function uf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2uiv(this.addr,t),ue(e,t)}}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;s.uniform3uiv(this.addr,t),ue(e,t)}}function mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4uiv(this.addr,t),ue(e,t)}}function gf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);const a=this.type===s.SAMPLER_2D_SHADOW?qo:Ko;e.setTexture2D(t||a,n)}function vf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||jo,n)}function _f(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Jo,n)}function yf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Zo,n)}function Mf(s){switch(s){case 5126:return tf;case 35664:return ef;case 35665:return nf;case 35666:return sf;case 35674:return af;case 35675:return rf;case 35676:return of;case 5124:case 35670:return lf;case 35667:case 35671:return cf;case 35668:case 35672:return hf;case 35669:case 35673:return df;case 5125:return uf;case 36294:return ff;case 36295:return pf;case 36296:return mf;case 35678:case 36198:case 36298:case 36306:case 35682:return gf;case 35679:case 36299:case 36307:return vf;case 35680:case 36300:case 36308:case 36293:return _f;case 36289:case 36303:case 36311:case 36292:return yf}}function xf(s,t){s.uniform1fv(this.addr,t)}function Tf(s,t){const e=fn(t,this.size,2);s.uniform2fv(this.addr,e)}function Ef(s,t){const e=fn(t,this.size,3);s.uniform3fv(this.addr,e)}function Sf(s,t){const e=fn(t,this.size,4);s.uniform4fv(this.addr,e)}function Af(s,t){const e=fn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function bf(s,t){const e=fn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Pf(s,t){const e=fn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function wf(s,t){s.uniform1iv(this.addr,t)}function Cf(s,t){s.uniform2iv(this.addr,t)}function Rf(s,t){s.uniform3iv(this.addr,t)}function Lf(s,t){s.uniform4iv(this.addr,t)}function If(s,t){s.uniform1uiv(this.addr,t)}function Df(s,t){s.uniform2uiv(this.addr,t)}function Of(s,t){s.uniform3uiv(this.addr,t)}function Nf(s,t){s.uniform4uiv(this.addr,t)}function Uf(s,t,e){const i=this.cache,n=t.length,a=Ms(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||Ko,a[o])}function zf(s,t,e){const i=this.cache,n=t.length,a=Ms(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||jo,a[o])}function Ff(s,t,e){const i=this.cache,n=t.length,a=Ms(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Jo,a[o])}function Bf(s,t,e){const i=this.cache,n=t.length,a=Ms(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Zo,a[o])}function Gf(s){switch(s){case 5126:return xf;case 35664:return Tf;case 35665:return Ef;case 35666:return Sf;case 35674:return Af;case 35675:return bf;case 35676:return Pf;case 5124:case 35670:return wf;case 35667:case 35671:return Cf;case 35668:case 35672:return Rf;case 35669:case 35673:return Lf;case 5125:return If;case 36294:return Df;case 36295:return Of;case 36296:return Nf;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return zf;case 35680:case 36300:case 36308:case 36293:return Ff;case 36289:case 36303:case 36311:case 36292:return Bf}}class kf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Mf(e.type)}}class Hf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gf(e.type)}}class Vf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const r=n[a];r.setValue(t,e[r.id],i)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function Qr(s,t){s.seq.push(t),s.map[t.id]=t}function Wf(s,t,e){const i=s.name,n=i.length;for(ea.lastIndex=0;;){const a=ea.exec(i),o=ea.lastIndex;let r=a[1];const c=a[2]==="]",l=a[3];if(c&&(r=r|0),l===void 0||l==="["&&o+2===n){Qr(e,l===void 0?new kf(r,s,t):new Hf(r,s,t));break}else{let f=e.map[r];f===void 0&&(f=new Vf(r),Qr(e,f)),e=f}}}class as{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=t.getActiveUniform(e,n),o=t.getUniformLocation(e,a.name);Wf(a,o,this)}}setValue(t,e,i,n){const a=this.map[e];a!==void 0&&a.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let a=0,o=e.length;a!==o;++a){const r=e[a],c=i[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,a=t.length;n!==a;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function to(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Yf=37297;let Xf=0;function $f(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=n;o<a;o++){const r=o+1;i.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return i.join(`
`)}function Kf(s){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(s);let i;switch(t===e?i="":t===hs&&e===cs?i="LinearDisplayP3ToLinearSRGB":t===cs&&e===hs&&(i="LinearSRGBToLinearDisplayP3"),s){case ai:case _s:return[i,"LinearTransferOETF"];case ge:case Sa:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function eo(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+n+`

`+$f(s.getShaderSource(t),o)}else return n}function qf(s,t){const e=Kf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Zf(s,t){let e;switch(t){case ac:e="Linear";break;case rc:e="Reinhard";break;case oc:e="OptimizedCineon";break;case lc:e="ACESFilmic";break;case hc:e="AgX";break;case cc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function jf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sn).join(`
`)}function Jf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(sn).join(`
`)}function Qf(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function tp(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=s.getActiveAttrib(t,n),o=a.name;let r=1;a.type===s.FLOAT_MAT2&&(r=2),a.type===s.FLOAT_MAT3&&(r=3),a.type===s.FLOAT_MAT4&&(r=4),e[o]={type:a.type,location:s.getAttribLocation(t,o),locationSize:r}}return e}function sn(s){return s!==""}function io(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function no(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ep=/^[ \t]*#include +<([\w\d./]+)>/gm;function va(s){return s.replace(ep,np)}const ip=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function np(s,t){let e=Yt[t];if(e===void 0){const i=ip.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return va(e)}const sp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function so(s){return s.replace(sp,ap)}function ap(s,t,e,i){let n="";for(let a=parseInt(t);a<parseInt(e);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function ao(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function rp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Eo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Dl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ii&&(t="SHADOWMAP_TYPE_VSM"),t}function op(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case cn:case hn:t="ENVMAP_TYPE_CUBE";break;case vs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case hn:t="ENVMAP_MODE_REFRACTION";break}return t}function cp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ta:t="ENVMAP_BLENDING_MULTIPLY";break;case nc:t="ENVMAP_BLENDING_MIX";break;case sc:t="ENVMAP_BLENDING_ADD";break}return t}function hp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function dp(s,t,e,i){const n=s.getContext(),a=e.defines;let o=e.vertexShader,r=e.fragmentShader;const c=rp(e),l=op(e),u=lp(e),f=cp(e),p=hp(e),v=e.isWebGL2?"":jf(e),m=Jf(e),g=Qf(a),h=n.createProgram();let d,M,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sn).join(`
`),d.length>0&&(d+=`
`),M=[v,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sn).join(`
`),M.length>0&&(M+=`
`)):(d=[ao(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sn).join(`
`),M=[v,ao(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==gi?Zf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,qf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sn).join(`
`)),o=va(o),o=io(o,e),o=no(o,e),r=va(r),r=io(r,e),r=no(r,e),o=so(o),r=so(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,M=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Er?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Er?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const y=_+d+o,T=_+M+r,S=to(n,n.VERTEX_SHADER,y),A=to(n,n.FRAGMENT_SHADER,T);n.attachShader(h,S),n.attachShader(h,A),e.index0AttributeName!==void 0?n.bindAttribLocation(h,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(h,0,"position"),n.linkProgram(h);function O(z){if(s.debug.checkShaderErrors){const W=n.getProgramInfoLog(h).trim(),C=n.getShaderInfoLog(S).trim(),D=n.getShaderInfoLog(A).trim();let N=!0,H=!0;if(n.getProgramParameter(h,n.LINK_STATUS)===!1)if(N=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,h,S,A);else{const Y=eo(n,S,"vertex"),X=eo(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(h,n.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+Y+`
`+X)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(C===""||D==="")&&(H=!1);H&&(z.diagnostics={runnable:N,programLog:W,vertexShader:{log:C,prefix:d},fragmentShader:{log:D,prefix:M}})}n.deleteShader(S),n.deleteShader(A),x=new as(n,h),b=tp(n,h)}let x;this.getUniforms=function(){return x===void 0&&O(this),x};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=n.getProgramParameter(h,Yf)),F},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(h),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xf++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=S,this.fragmentShader=A,this}let up=0;class fp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new pp(t),e.set(t,i)),i}}class pp{constructor(t){this.id=up++,this.code=t,this.usedTimes=0}}function mp(s,t,e,i,n,a,o){const r=new Pa,c=new fp,l=[],u=n.isWebGL2,f=n.logarithmicDepthBuffer,p=n.vertexTextures;let v=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===0?"uv":`uv${x}`}function h(x,b,F,z,W){const C=z.fog,D=W.geometry,N=x.isMeshStandardMaterial?z.environment:null,H=(x.isMeshStandardMaterial?e:t).get(x.envMap||N),Y=H&&H.mapping===vs?H.image.height:null,X=m[x.type];x.precision!==null&&(v=n.getMaxPrecision(x.precision),v!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",v,"instead."));const J=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,nt=J!==void 0?J.length:0;let ot=0;D.morphAttributes.position!==void 0&&(ot=1),D.morphAttributes.normal!==void 0&&(ot=2),D.morphAttributes.color!==void 0&&(ot=3);let Z,at,dt,L;if(X){const re=$e[X];Z=re.vertexShader,at=re.fragmentShader}else Z=x.vertexShader,at=x.fragmentShader,c.update(x),dt=c.getVertexShaderID(x),L=c.getFragmentShaderID(x);const G=s.getRenderTarget(),Q=W.isInstancedMesh===!0,$=W.isBatchedMesh===!0,k=!!x.map,ct=!!x.matcap,B=!!H,Nt=!!x.aoMap,mt=!!x.lightMap,Mt=!!x.bumpMap,ft=!!x.normalMap,Ct=!!x.displacementMap,Tt=!!x.emissiveMap,P=!!x.metalnessMap,E=!!x.roughnessMap,V=x.anisotropy>0,et=x.clearcoat>0,rt=x.iridescence>0,lt=x.sheen>0,gt=x.transmission>0,ut=V&&!!x.anisotropyMap,yt=et&&!!x.clearcoatMap,xt=et&&!!x.clearcoatNormalMap,Rt=et&&!!x.clearcoatRoughnessMap,ht=rt&&!!x.iridescenceMap,Wt=rt&&!!x.iridescenceThicknessMap,Ot=lt&&!!x.sheenColorMap,wt=lt&&!!x.sheenRoughnessMap,Lt=!!x.specularMap,At=!!x.specularColorMap,R=!!x.specularIntensityMap,vt=gt&&!!x.transmissionMap,It=gt&&!!x.thicknessMap,Pt=!!x.gradientMap,pt=!!x.alphaMap,U=x.alphaTest>0,_t=!!x.alphaHash,St=!!x.extensions,Ft=!!D.attributes.uv1,Ut=!!D.attributes.uv2,qt=!!D.attributes.uv3;let Zt=gi;return x.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Zt=s.toneMapping),{isWebGL2:u,shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:Z,fragmentShader:at,defines:x.defines,customVertexShaderID:dt,customFragmentShaderID:L,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:v,batching:$,instancing:Q,instancingColor:Q&&W.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:G===null?s.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ai,map:k,matcap:ct,envMap:B,envMapMode:B&&H.mapping,envMapCubeUVHeight:Y,aoMap:Nt,lightMap:mt,bumpMap:Mt,normalMap:ft,displacementMap:p&&Ct,emissiveMap:Tt,normalMapObjectSpace:ft&&x.normalMapType===Tc,normalMapTangentSpace:ft&&x.normalMapType===Do,metalnessMap:P,roughnessMap:E,anisotropy:V,anisotropyMap:ut,clearcoat:et,clearcoatMap:yt,clearcoatNormalMap:xt,clearcoatRoughnessMap:Rt,iridescence:rt,iridescenceMap:ht,iridescenceThicknessMap:Wt,sheen:lt,sheenColorMap:Ot,sheenRoughnessMap:wt,specularMap:Lt,specularColorMap:At,specularIntensityMap:R,transmission:gt,transmissionMap:vt,thicknessMap:It,gradientMap:Pt,opaque:x.transparent===!1&&x.blending===on,alphaMap:pt,alphaTest:U,alphaHash:_t,combine:x.combine,mapUv:k&&g(x.map.channel),aoMapUv:Nt&&g(x.aoMap.channel),lightMapUv:mt&&g(x.lightMap.channel),bumpMapUv:Mt&&g(x.bumpMap.channel),normalMapUv:ft&&g(x.normalMap.channel),displacementMapUv:Ct&&g(x.displacementMap.channel),emissiveMapUv:Tt&&g(x.emissiveMap.channel),metalnessMapUv:P&&g(x.metalnessMap.channel),roughnessMapUv:E&&g(x.roughnessMap.channel),anisotropyMapUv:ut&&g(x.anisotropyMap.channel),clearcoatMapUv:yt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:xt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:wt&&g(x.sheenRoughnessMap.channel),specularMapUv:Lt&&g(x.specularMap.channel),specularColorMapUv:At&&g(x.specularColorMap.channel),specularIntensityMapUv:R&&g(x.specularIntensityMap.channel),transmissionMapUv:vt&&g(x.transmissionMap.channel),thicknessMapUv:It&&g(x.thicknessMap.channel),alphaMapUv:pt&&g(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ft||V),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:Ft,vertexUv2s:Ut,vertexUv3s:qt,pointsUvs:W.isPoints===!0&&!!D.attributes.uv&&(k||pt),fog:!!C,useFog:x.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:W.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:ot,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:Zt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:k&&x.map.isVideoTexture===!0&&Qt.getTransfer(x.map.colorSpace)===ee,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ni,flipSided:x.side===Re,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:St&&x.extensions.derivatives===!0,extensionFragDepth:St&&x.extensions.fragDepth===!0,extensionDrawBuffers:St&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:St&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:St&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)b.push(F),b.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(M(b,x),_(b,x),b.push(s.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function M(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function _(x,b){r.disableAll(),b.isWebGL2&&r.enable(0),b.supportsVertexTextures&&r.enable(1),b.instancing&&r.enable(2),b.instancingColor&&r.enable(3),b.matcap&&r.enable(4),b.envMap&&r.enable(5),b.normalMapObjectSpace&&r.enable(6),b.normalMapTangentSpace&&r.enable(7),b.clearcoat&&r.enable(8),b.iridescence&&r.enable(9),b.alphaTest&&r.enable(10),b.vertexColors&&r.enable(11),b.vertexAlphas&&r.enable(12),b.vertexUv1s&&r.enable(13),b.vertexUv2s&&r.enable(14),b.vertexUv3s&&r.enable(15),b.vertexTangents&&r.enable(16),b.anisotropy&&r.enable(17),b.alphaHash&&r.enable(18),b.batching&&r.enable(19),x.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.skinning&&r.enable(4),b.morphTargets&&r.enable(5),b.morphNormals&&r.enable(6),b.morphColors&&r.enable(7),b.premultipliedAlpha&&r.enable(8),b.shadowMapEnabled&&r.enable(9),b.useLegacyLights&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),x.push(r.mask)}function y(x){const b=m[x.type];let F;if(b){const z=$e[b];F=Zc.clone(z.uniforms)}else F=x.uniforms;return F}function T(x,b){let F;for(let z=0,W=l.length;z<W;z++){const C=l[z];if(C.cacheKey===b){F=C,++F.usedTimes;break}}return F===void 0&&(F=new dp(s,b,x,a),l.push(F)),F}function S(x){if(--x.usedTimes===0){const b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),x.destroy()}}function A(x){c.remove(x)}function O(){c.dispose()}return{getParameters:h,getProgramCacheKey:d,getUniforms:y,acquireProgram:T,releaseProgram:S,releaseShaderCache:A,programs:l,dispose:O}}function gp(){let s=new WeakMap;function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function e(a){s.delete(a)}function i(a,o,r){s.get(a)[o]=r}function n(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function vp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ro(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function oo(){const s=[];let t=0;const e=[],i=[],n=[];function a(){t=0,e.length=0,i.length=0,n.length=0}function o(f,p,v,m,g,h){let d=s[t];return d===void 0?(d={id:f.id,object:f,geometry:p,material:v,groupOrder:m,renderOrder:f.renderOrder,z:g,group:h},s[t]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=v,d.groupOrder=m,d.renderOrder=f.renderOrder,d.z=g,d.group=h),t++,d}function r(f,p,v,m,g,h){const d=o(f,p,v,m,g,h);v.transmission>0?i.push(d):v.transparent===!0?n.push(d):e.push(d)}function c(f,p,v,m,g,h){const d=o(f,p,v,m,g,h);v.transmission>0?i.unshift(d):v.transparent===!0?n.unshift(d):e.unshift(d)}function l(f,p){e.length>1&&e.sort(f||vp),i.length>1&&i.sort(p||ro),n.length>1&&n.sort(p||ro)}function u(){for(let f=t,p=s.length;f<p;f++){const v=s[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:i,transparent:n,init:a,push:r,unshift:c,finish:u,sort:l}}function _p(){let s=new WeakMap;function t(i,n){const a=s.get(i);let o;return a===void 0?(o=new oo,s.set(i,[o])):n>=a.length?(o=new oo,a.push(o)):o=a[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function yp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new K,color:new Jt};break;case"SpotLight":e={position:new K,direction:new K,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new K,halfWidth:new K,halfHeight:new K};break}return s[t.id]=e,e}}}function Mp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let xp=0;function Tp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ep(s,t){const e=new yp,i=Mp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new K);const a=new K,o=new he,r=new he;function c(u,f){let p=0,v=0,m=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let g=0,h=0,d=0,M=0,_=0,y=0,T=0,S=0,A=0,O=0,x=0;u.sort(Tp);const b=f===!0?Math.PI:1;for(let z=0,W=u.length;z<W;z++){const C=u[z],D=C.color,N=C.intensity,H=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)p+=D.r*N*b,v+=D.g*N*b,m+=D.b*N*b;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],N);x++}else if(C.isDirectionalLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity*b),C.castShadow){const J=C.shadow,nt=i.get(C);nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize=J.mapSize,n.directionalShadow[g]=nt,n.directionalShadowMap[g]=Y,n.directionalShadowMatrix[g]=C.shadow.matrix,y++}n.directional[g]=X,g++}else if(C.isSpotLight){const X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(D).multiplyScalar(N*b),X.distance=H,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[d]=X;const J=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,J.updateMatrices(C),C.castShadow&&O++),n.spotLightMatrix[d]=J.matrix,C.castShadow){const nt=i.get(C);nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize=J.mapSize,n.spotShadow[d]=nt,n.spotShadowMap[d]=Y,S++}d++}else if(C.isRectAreaLight){const X=e.get(C);X.color.copy(D).multiplyScalar(N),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[M]=X,M++}else if(C.isPointLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity*b),X.distance=C.distance,X.decay=C.decay,C.castShadow){const J=C.shadow,nt=i.get(C);nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize=J.mapSize,nt.shadowCameraNear=J.camera.near,nt.shadowCameraFar=J.camera.far,n.pointShadow[h]=nt,n.pointShadowMap[h]=Y,n.pointShadowMatrix[h]=C.shadow.matrix,T++}n.point[h]=X,h++}else if(C.isHemisphereLight){const X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(N*b),X.groundColor.copy(C.groundColor).multiplyScalar(N*b),n.hemi[_]=X,_++}}M>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=p,n.ambient[1]=v,n.ambient[2]=m;const F=n.hash;(F.directionalLength!==g||F.pointLength!==h||F.spotLength!==d||F.rectAreaLength!==M||F.hemiLength!==_||F.numDirectionalShadows!==y||F.numPointShadows!==T||F.numSpotShadows!==S||F.numSpotMaps!==A||F.numLightProbes!==x)&&(n.directional.length=g,n.spot.length=d,n.rectArea.length=M,n.point.length=h,n.hemi.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+A-O,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=x,F.directionalLength=g,F.pointLength=h,F.spotLength=d,F.rectAreaLength=M,F.hemiLength=_,F.numDirectionalShadows=y,F.numPointShadows=T,F.numSpotShadows=S,F.numSpotMaps=A,F.numLightProbes=x,n.version=xp++)}function l(u,f){let p=0,v=0,m=0,g=0,h=0;const d=f.matrixWorldInverse;for(let M=0,_=u.length;M<_;M++){const y=u[M];if(y.isDirectionalLight){const T=n.directional[p];T.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(d),p++}else if(y.isSpotLight){const T=n.spot[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(d),m++}else if(y.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),r.identity(),o.copy(y.matrixWorld),o.premultiply(d),r.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),g++}else if(y.isPointLight){const T=n.point[v];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),v++}else if(y.isHemisphereLight){const T=n.hemi[h];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),h++}}}return{setup:c,setupView:l,state:n}}function lo(s,t){const e=new Ep(s,t),i=[],n=[];function a(){i.length=0,n.length=0}function o(f){i.push(f)}function r(f){n.push(f)}function c(f){e.setup(i,f)}function l(f){e.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:r}}function Sp(s,t){let e=new WeakMap;function i(a,o=0){const r=e.get(a);let c;return r===void 0?(c=new lo(s,t),e.set(a,[c])):o>=r.length?(c=new lo(s,t),r.push(c)):c=r[o],c}function n(){e=new WeakMap}return{get:i,dispose:n}}class Ap extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bp extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Pp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wp=`uniform sampler2D shadow_pass;
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
}`;function Cp(s,t,e){let i=new wa;const n=new Gt,a=new Gt,o=new me,r=new Ap({depthPacking:xc}),c=new bp,l={},u=e.maxTextureSize,f={[_i]:Re,[Re]:_i,[ni]:ni},p=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:Pp,fragmentShader:wp}),v=p.clone();v.defines.HORIZONTAL_PASS=1;const m=new qe;m.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new te(m,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eo;let d=this.type;this.render=function(S,A,O){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||S.length===0)return;const x=s.getRenderTarget(),b=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),z=s.state;z.setBlending(mi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const W=d!==ii&&this.type===ii,C=d===ii&&this.type!==ii;for(let D=0,N=S.length;D<N;D++){const H=S[D],Y=H.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;n.copy(Y.mapSize);const X=Y.getFrameExtents();if(n.multiply(X),a.copy(Y.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(a.x=Math.floor(u/X.x),n.x=a.x*X.x,Y.mapSize.x=a.x),n.y>u&&(a.y=Math.floor(u/X.y),n.y=a.y*X.y,Y.mapSize.y=a.y)),Y.map===null||W===!0||C===!0){const nt=this.type!==ii?{minFilter:Ae,magFilter:Ae}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ii(n.x,n.y,nt),Y.map.texture.name=H.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const J=Y.getViewportCount();for(let nt=0;nt<J;nt++){const ot=Y.getViewport(nt);o.set(a.x*ot.x,a.y*ot.y,a.x*ot.z,a.y*ot.w),z.viewport(o),Y.updateMatrices(H,nt),i=Y.getFrustum(),y(A,O,Y.camera,H,this.type)}Y.isPointLightShadow!==!0&&this.type===ii&&M(Y,O),Y.needsUpdate=!1}d=this.type,h.needsUpdate=!1,s.setRenderTarget(x,b,F)};function M(S,A){const O=t.update(g);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,v.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,v.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ii(n.x,n.y)),p.uniforms.shadow_pass.value=S.map.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(A,null,O,p,g,null),v.uniforms.shadow_pass.value=S.mapPass.texture,v.uniforms.resolution.value=S.mapSize,v.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(A,null,O,v,g,null)}function _(S,A,O,x){let b=null;const F=O.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(F!==void 0)b=F;else if(b=O.isPointLight===!0?c:r,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=b.uuid,W=A.uuid;let C=l[z];C===void 0&&(C={},l[z]=C);let D=C[W];D===void 0&&(D=b.clone(),C[W]=D,A.addEventListener("dispose",T)),b=D}if(b.visible=A.visible,b.wireframe=A.wireframe,x===ii?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:f[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=s.properties.get(b);z.light=O}return b}function y(S,A,O,x,b){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===ii)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld);const W=t.update(S),C=S.material;if(Array.isArray(C)){const D=W.groups;for(let N=0,H=D.length;N<H;N++){const Y=D[N],X=C[Y.materialIndex];if(X&&X.visible){const J=_(S,X,x,b);S.onBeforeShadow(s,S,A,O,W,J,Y),s.renderBufferDirect(O,null,W,J,S,Y),S.onAfterShadow(s,S,A,O,W,J,Y)}}}else if(C.visible){const D=_(S,C,x,b);S.onBeforeShadow(s,S,A,O,W,D,null),s.renderBufferDirect(O,null,W,D,S,null),S.onAfterShadow(s,S,A,O,W,D,null)}}const z=S.children;for(let W=0,C=z.length;W<C;W++)y(z[W],A,O,x,b)}function T(S){S.target.removeEventListener("dispose",T);for(const O in l){const x=l[O],b=S.target.uuid;b in x&&(x[b].dispose(),delete x[b])}}}function Rp(s,t,e){const i=e.isWebGL2;function n(){let U=!1;const _t=new me;let St=null;const Ft=new me(0,0,0,0);return{setMask:function(Ut){St!==Ut&&!U&&(s.colorMask(Ut,Ut,Ut,Ut),St=Ut)},setLocked:function(Ut){U=Ut},setClear:function(Ut,qt,Zt,se,re){re===!0&&(Ut*=se,qt*=se,Zt*=se),_t.set(Ut,qt,Zt,se),Ft.equals(_t)===!1&&(s.clearColor(Ut,qt,Zt,se),Ft.copy(_t))},reset:function(){U=!1,St=null,Ft.set(-1,0,0,0)}}}function a(){let U=!1,_t=null,St=null,Ft=null;return{setTest:function(Ut){Ut?$(s.DEPTH_TEST):k(s.DEPTH_TEST)},setMask:function(Ut){_t!==Ut&&!U&&(s.depthMask(Ut),_t=Ut)},setFunc:function(Ut){if(St!==Ut){switch(Ut){case Zl:s.depthFunc(s.NEVER);break;case jl:s.depthFunc(s.ALWAYS);break;case Jl:s.depthFunc(s.LESS);break;case os:s.depthFunc(s.LEQUAL);break;case Ql:s.depthFunc(s.EQUAL);break;case tc:s.depthFunc(s.GEQUAL);break;case ec:s.depthFunc(s.GREATER);break;case ic:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}St=Ut}},setLocked:function(Ut){U=Ut},setClear:function(Ut){Ft!==Ut&&(s.clearDepth(Ut),Ft=Ut)},reset:function(){U=!1,_t=null,St=null,Ft=null}}}function o(){let U=!1,_t=null,St=null,Ft=null,Ut=null,qt=null,Zt=null,se=null,re=null;return{setTest:function(jt){U||(jt?$(s.STENCIL_TEST):k(s.STENCIL_TEST))},setMask:function(jt){_t!==jt&&!U&&(s.stencilMask(jt),_t=jt)},setFunc:function(jt,le,Xe){(St!==jt||Ft!==le||Ut!==Xe)&&(s.stencilFunc(jt,le,Xe),St=jt,Ft=le,Ut=Xe)},setOp:function(jt,le,Xe){(qt!==jt||Zt!==le||se!==Xe)&&(s.stencilOp(jt,le,Xe),qt=jt,Zt=le,se=Xe)},setLocked:function(jt){U=jt},setClear:function(jt){re!==jt&&(s.clearStencil(jt),re=jt)},reset:function(){U=!1,_t=null,St=null,Ft=null,Ut=null,qt=null,Zt=null,se=null,re=null}}}const r=new n,c=new a,l=new o,u=new WeakMap,f=new WeakMap;let p={},v={},m=new WeakMap,g=[],h=null,d=!1,M=null,_=null,y=null,T=null,S=null,A=null,O=null,x=new Jt(0,0,0),b=0,F=!1,z=null,W=null,C=null,D=null,N=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,X=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(J)[1]),Y=X>=1):J.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Y=X>=2);let nt=null,ot={};const Z=s.getParameter(s.SCISSOR_BOX),at=s.getParameter(s.VIEWPORT),dt=new me().fromArray(Z),L=new me().fromArray(at);function G(U,_t,St,Ft){const Ut=new Uint8Array(4),qt=s.createTexture();s.bindTexture(U,qt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Zt=0;Zt<St;Zt++)i&&(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)?s.texImage3D(_t,0,s.RGBA,1,1,Ft,0,s.RGBA,s.UNSIGNED_BYTE,Ut):s.texImage2D(_t+Zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ut);return qt}const Q={};Q[s.TEXTURE_2D]=G(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=G(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Q[s.TEXTURE_2D_ARRAY]=G(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=G(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),c.setClear(1),l.setClear(0),$(s.DEPTH_TEST),c.setFunc(os),Tt(!1),P(Va),$(s.CULL_FACE),ft(mi);function $(U){p[U]!==!0&&(s.enable(U),p[U]=!0)}function k(U){p[U]!==!1&&(s.disable(U),p[U]=!1)}function ct(U,_t){return v[U]!==_t?(s.bindFramebuffer(U,_t),v[U]=_t,i&&(U===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=_t),U===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=_t)),!0):!1}function B(U,_t){let St=g,Ft=!1;if(U)if(St=m.get(_t),St===void 0&&(St=[],m.set(_t,St)),U.isWebGLMultipleRenderTargets){const Ut=U.texture;if(St.length!==Ut.length||St[0]!==s.COLOR_ATTACHMENT0){for(let qt=0,Zt=Ut.length;qt<Zt;qt++)St[qt]=s.COLOR_ATTACHMENT0+qt;St.length=Ut.length,Ft=!0}}else St[0]!==s.COLOR_ATTACHMENT0&&(St[0]=s.COLOR_ATTACHMENT0,Ft=!0);else St[0]!==s.BACK&&(St[0]=s.BACK,Ft=!0);Ft&&(e.isWebGL2?s.drawBuffers(St):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(St))}function Nt(U){return h!==U?(s.useProgram(U),h=U,!0):!1}const mt={[Pi]:s.FUNC_ADD,[Nl]:s.FUNC_SUBTRACT,[Ul]:s.FUNC_REVERSE_SUBTRACT};if(i)mt[$a]=s.MIN,mt[Ka]=s.MAX;else{const U=t.get("EXT_blend_minmax");U!==null&&(mt[$a]=U.MIN_EXT,mt[Ka]=U.MAX_EXT)}const Mt={[zl]:s.ZERO,[Fl]:s.ONE,[Bl]:s.SRC_COLOR,[la]:s.SRC_ALPHA,[Yl]:s.SRC_ALPHA_SATURATE,[Vl]:s.DST_COLOR,[kl]:s.DST_ALPHA,[Gl]:s.ONE_MINUS_SRC_COLOR,[ca]:s.ONE_MINUS_SRC_ALPHA,[Wl]:s.ONE_MINUS_DST_COLOR,[Hl]:s.ONE_MINUS_DST_ALPHA,[Xl]:s.CONSTANT_COLOR,[$l]:s.ONE_MINUS_CONSTANT_COLOR,[Kl]:s.CONSTANT_ALPHA,[ql]:s.ONE_MINUS_CONSTANT_ALPHA};function ft(U,_t,St,Ft,Ut,qt,Zt,se,re,jt){if(U===mi){d===!0&&(k(s.BLEND),d=!1);return}if(d===!1&&($(s.BLEND),d=!0),U!==Ol){if(U!==M||jt!==F){if((_!==Pi||S!==Pi)&&(s.blendEquation(s.FUNC_ADD),_=Pi,S=Pi),jt)switch(U){case on:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wa:s.blendFunc(s.ONE,s.ONE);break;case Ya:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case on:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wa:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ya:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,T=null,A=null,O=null,x.set(0,0,0),b=0,M=U,F=jt}return}Ut=Ut||_t,qt=qt||St,Zt=Zt||Ft,(_t!==_||Ut!==S)&&(s.blendEquationSeparate(mt[_t],mt[Ut]),_=_t,S=Ut),(St!==y||Ft!==T||qt!==A||Zt!==O)&&(s.blendFuncSeparate(Mt[St],Mt[Ft],Mt[qt],Mt[Zt]),y=St,T=Ft,A=qt,O=Zt),(se.equals(x)===!1||re!==b)&&(s.blendColor(se.r,se.g,se.b,re),x.copy(se),b=re),M=U,F=!1}function Ct(U,_t){U.side===ni?k(s.CULL_FACE):$(s.CULL_FACE);let St=U.side===Re;_t&&(St=!St),Tt(St),U.blending===on&&U.transparent===!1?ft(mi):ft(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),r.setMask(U.colorWrite);const Ft=U.stencilWrite;l.setTest(Ft),Ft&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),V(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?$(s.SAMPLE_ALPHA_TO_COVERAGE):k(s.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(U){z!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),z=U)}function P(U){U!==Ll?($(s.CULL_FACE),U!==W&&(U===Va?s.cullFace(s.BACK):U===Il?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):k(s.CULL_FACE),W=U}function E(U){U!==C&&(Y&&s.lineWidth(U),C=U)}function V(U,_t,St){U?($(s.POLYGON_OFFSET_FILL),(D!==_t||N!==St)&&(s.polygonOffset(_t,St),D=_t,N=St)):k(s.POLYGON_OFFSET_FILL)}function et(U){U?$(s.SCISSOR_TEST):k(s.SCISSOR_TEST)}function rt(U){U===void 0&&(U=s.TEXTURE0+H-1),nt!==U&&(s.activeTexture(U),nt=U)}function lt(U,_t,St){St===void 0&&(nt===null?St=s.TEXTURE0+H-1:St=nt);let Ft=ot[St];Ft===void 0&&(Ft={type:void 0,texture:void 0},ot[St]=Ft),(Ft.type!==U||Ft.texture!==_t)&&(nt!==St&&(s.activeTexture(St),nt=St),s.bindTexture(U,_t||Q[U]),Ft.type=U,Ft.texture=_t)}function gt(){const U=ot[nt];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ut(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Wt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ot(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function R(U){dt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),dt.copy(U))}function vt(U){L.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),L.copy(U))}function It(U,_t){let St=f.get(_t);St===void 0&&(St=new WeakMap,f.set(_t,St));let Ft=St.get(U);Ft===void 0&&(Ft=s.getUniformBlockIndex(_t,U.name),St.set(U,Ft))}function Pt(U,_t){const Ft=f.get(_t).get(U);u.get(_t)!==Ft&&(s.uniformBlockBinding(_t,Ft,U.__bindingPointIndex),u.set(_t,Ft))}function pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},nt=null,ot={},v={},m=new WeakMap,g=[],h=null,d=!1,M=null,_=null,y=null,T=null,S=null,A=null,O=null,x=new Jt(0,0,0),b=0,F=!1,z=null,W=null,C=null,D=null,N=null,dt.set(0,0,s.canvas.width,s.canvas.height),L.set(0,0,s.canvas.width,s.canvas.height),r.reset(),c.reset(),l.reset()}return{buffers:{color:r,depth:c,stencil:l},enable:$,disable:k,bindFramebuffer:ct,drawBuffers:B,useProgram:Nt,setBlending:ft,setMaterial:Ct,setFlipSided:Tt,setCullFace:P,setLineWidth:E,setPolygonOffset:V,setScissorTest:et,activeTexture:rt,bindTexture:lt,unbindTexture:gt,compressedTexImage2D:ut,compressedTexImage3D:yt,texImage2D:Lt,texImage3D:At,updateUBOMapping:It,uniformBlockBinding:Pt,texStorage2D:Ot,texStorage3D:wt,texSubImage2D:xt,texSubImage3D:Rt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Wt,scissor:R,viewport:vt,reset:pt}}function Lp(s,t,e,i,n,a,o){const r=n.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,E){return v?new OffscreenCanvas(P,E):us("canvas")}function g(P,E,V,et){let rt=1;if((P.width>et||P.height>et)&&(rt=et/Math.max(P.width,P.height)),rt<1||E===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const lt=E?ga:Math.floor,gt=lt(rt*P.width),ut=lt(rt*P.height);f===void 0&&(f=m(gt,ut));const yt=V?m(gt,ut):f;return yt.width=gt,yt.height=ut,yt.getContext("2d").drawImage(P,0,0,gt,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+gt+"x"+ut+")."),yt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function h(P){return Sr(P.width)&&Sr(P.height)}function d(P){return r?!1:P.wrapS!==We||P.wrapT!==We||P.minFilter!==Ae&&P.minFilter!==ze}function M(P,E){return P.generateMipmaps&&E&&P.minFilter!==Ae&&P.minFilter!==ze}function _(P){s.generateMipmap(P)}function y(P,E,V,et,rt=!1){if(r===!1)return E;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let lt=E;if(E===s.RED&&(V===s.FLOAT&&(lt=s.R32F),V===s.HALF_FLOAT&&(lt=s.R16F),V===s.UNSIGNED_BYTE&&(lt=s.R8)),E===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(lt=s.R8UI),V===s.UNSIGNED_SHORT&&(lt=s.R16UI),V===s.UNSIGNED_INT&&(lt=s.R32UI),V===s.BYTE&&(lt=s.R8I),V===s.SHORT&&(lt=s.R16I),V===s.INT&&(lt=s.R32I)),E===s.RG&&(V===s.FLOAT&&(lt=s.RG32F),V===s.HALF_FLOAT&&(lt=s.RG16F),V===s.UNSIGNED_BYTE&&(lt=s.RG8)),E===s.RGBA){const gt=rt?ls:Qt.getTransfer(et);V===s.FLOAT&&(lt=s.RGBA32F),V===s.HALF_FLOAT&&(lt=s.RGBA16F),V===s.UNSIGNED_BYTE&&(lt=gt===ee?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(lt=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(lt=s.RGB5_A1)}return(lt===s.R16F||lt===s.R32F||lt===s.RG16F||lt===s.RG32F||lt===s.RGBA16F||lt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function T(P,E,V){return M(P,V)===!0||P.isFramebufferTexture&&P.minFilter!==Ae&&P.minFilter!==ze?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function S(P){return P===Ae||P===qa||P===Ps?s.NEAREST:s.LINEAR}function A(P){const E=P.target;E.removeEventListener("dispose",A),x(E),E.isVideoTexture&&u.delete(E)}function O(P){const E=P.target;E.removeEventListener("dispose",O),F(E)}function x(P){const E=i.get(P);if(E.__webglInit===void 0)return;const V=P.source,et=p.get(V);if(et){const rt=et[E.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&b(P),Object.keys(et).length===0&&p.delete(V)}i.remove(P)}function b(P){const E=i.get(P);s.deleteTexture(E.__webglTexture);const V=P.source,et=p.get(V);delete et[E.__cacheKey],o.memory.textures--}function F(P){const E=P.texture,V=i.get(P),et=i.get(E);if(et.__webglTexture!==void 0&&(s.deleteTexture(et.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(V.__webglFramebuffer[rt]))for(let lt=0;lt<V.__webglFramebuffer[rt].length;lt++)s.deleteFramebuffer(V.__webglFramebuffer[rt][lt]);else s.deleteFramebuffer(V.__webglFramebuffer[rt]);V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer[rt])}else{if(Array.isArray(V.__webglFramebuffer))for(let rt=0;rt<V.__webglFramebuffer.length;rt++)s.deleteFramebuffer(V.__webglFramebuffer[rt]);else s.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&s.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let rt=0;rt<V.__webglColorRenderbuffer.length;rt++)V.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(V.__webglColorRenderbuffer[rt]);V.__webglDepthRenderbuffer&&s.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let rt=0,lt=E.length;rt<lt;rt++){const gt=i.get(E[rt]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),o.memory.textures--),i.remove(E[rt])}i.remove(E),i.remove(P)}let z=0;function W(){z=0}function C(){const P=z;return P>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+n.maxTextures),z+=1,P}function D(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function N(P,E){const V=i.get(P);if(P.isVideoTexture&&Ct(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const et=P.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(V,P,E);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+E)}function H(P,E){const V=i.get(P);if(P.version>0&&V.__version!==P.version){dt(V,P,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+E)}function Y(P,E){const V=i.get(P);if(P.version>0&&V.__version!==P.version){dt(V,P,E);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+E)}function X(P,E){const V=i.get(P);if(P.version>0&&V.__version!==P.version){L(V,P,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+E)}const J={[ua]:s.REPEAT,[We]:s.CLAMP_TO_EDGE,[fa]:s.MIRRORED_REPEAT},nt={[Ae]:s.NEAREST,[qa]:s.NEAREST_MIPMAP_NEAREST,[Ps]:s.NEAREST_MIPMAP_LINEAR,[ze]:s.LINEAR,[dc]:s.LINEAR_MIPMAP_NEAREST,[An]:s.LINEAR_MIPMAP_LINEAR},ot={[Ec]:s.NEVER,[Cc]:s.ALWAYS,[Sc]:s.LESS,[Oo]:s.LEQUAL,[Ac]:s.EQUAL,[wc]:s.GEQUAL,[bc]:s.GREATER,[Pc]:s.NOTEQUAL};function Z(P,E,V){if(V?(s.texParameteri(P,s.TEXTURE_WRAP_S,J[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,J[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,J[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,nt[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,nt[E.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==We||E.wrapT!==We)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,S(E.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,S(E.minFilter)),E.minFilter!==Ae&&E.minFilter!==ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ot[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ae||E.minFilter!==Ps&&E.minFilter!==An||E.type===pi&&t.has("OES_texture_float_linear")===!1||r===!1&&E.type===bn&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(s.texParameterf(P,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function at(P,E){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",A));const et=E.source;let rt=p.get(et);rt===void 0&&(rt={},p.set(et,rt));const lt=D(E);if(lt!==P.__cacheKey){rt[lt]===void 0&&(rt[lt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),rt[lt].usedTimes++;const gt=rt[P.__cacheKey];gt!==void 0&&(rt[P.__cacheKey].usedTimes--,gt.usedTimes===0&&b(E)),P.__cacheKey=lt,P.__webglTexture=rt[lt].texture}return V}function dt(P,E,V){let et=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(et=s.TEXTURE_3D);const rt=at(P,E),lt=E.source;e.bindTexture(et,P.__webglTexture,s.TEXTURE0+V);const gt=i.get(lt);if(lt.version!==gt.__version||rt===!0){e.activeTexture(s.TEXTURE0+V);const ut=Qt.getPrimaries(Qt.workingColorSpace),yt=E.colorSpace===Be?null:Qt.getPrimaries(E.colorSpace),xt=E.colorSpace===Be||ut===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Rt=d(E)&&h(E.image)===!1;let ht=g(E.image,Rt,!1,n.maxTextureSize);ht=Tt(E,ht);const Wt=h(ht)||r,Ot=a.convert(E.format,E.colorSpace);let wt=a.convert(E.type),Lt=y(E.internalFormat,Ot,wt,E.colorSpace,E.isVideoTexture);Z(et,E,Wt);let At;const R=E.mipmaps,vt=r&&E.isVideoTexture!==!0&&Lt!==Lo,It=gt.__version===void 0||rt===!0,Pt=T(E,ht,Wt);if(E.isDepthTexture)Lt=s.DEPTH_COMPONENT,r?E.type===pi?Lt=s.DEPTH_COMPONENT32F:E.type===fi?Lt=s.DEPTH_COMPONENT24:E.type===Ci?Lt=s.DEPTH24_STENCIL8:Lt=s.DEPTH_COMPONENT16:E.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ri&&Lt===s.DEPTH_COMPONENT&&E.type!==Ea&&E.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=fi,wt=a.convert(E.type)),E.format===dn&&Lt===s.DEPTH_COMPONENT&&(Lt=s.DEPTH_STENCIL,E.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ci,wt=a.convert(E.type))),It&&(vt?e.texStorage2D(s.TEXTURE_2D,1,Lt,ht.width,ht.height):e.texImage2D(s.TEXTURE_2D,0,Lt,ht.width,ht.height,0,Ot,wt,null));else if(E.isDataTexture)if(R.length>0&&Wt){vt&&It&&e.texStorage2D(s.TEXTURE_2D,Pt,Lt,R[0].width,R[0].height);for(let pt=0,U=R.length;pt<U;pt++)At=R[pt],vt?e.texSubImage2D(s.TEXTURE_2D,pt,0,0,At.width,At.height,Ot,wt,At.data):e.texImage2D(s.TEXTURE_2D,pt,Lt,At.width,At.height,0,Ot,wt,At.data);E.generateMipmaps=!1}else vt?(It&&e.texStorage2D(s.TEXTURE_2D,Pt,Lt,ht.width,ht.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht.width,ht.height,Ot,wt,ht.data)):e.texImage2D(s.TEXTURE_2D,0,Lt,ht.width,ht.height,0,Ot,wt,ht.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){vt&&It&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,Lt,R[0].width,R[0].height,ht.depth);for(let pt=0,U=R.length;pt<U;pt++)At=R[pt],E.format!==Ye?Ot!==null?vt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,0,At.width,At.height,ht.depth,Ot,At.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pt,Lt,At.width,At.height,ht.depth,0,At.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,0,At.width,At.height,ht.depth,Ot,wt,At.data):e.texImage3D(s.TEXTURE_2D_ARRAY,pt,Lt,At.width,At.height,ht.depth,0,Ot,wt,At.data)}else{vt&&It&&e.texStorage2D(s.TEXTURE_2D,Pt,Lt,R[0].width,R[0].height);for(let pt=0,U=R.length;pt<U;pt++)At=R[pt],E.format!==Ye?Ot!==null?vt?e.compressedTexSubImage2D(s.TEXTURE_2D,pt,0,0,At.width,At.height,Ot,At.data):e.compressedTexImage2D(s.TEXTURE_2D,pt,Lt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?e.texSubImage2D(s.TEXTURE_2D,pt,0,0,At.width,At.height,Ot,wt,At.data):e.texImage2D(s.TEXTURE_2D,pt,Lt,At.width,At.height,0,Ot,wt,At.data)}else if(E.isDataArrayTexture)vt?(It&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,Lt,ht.width,ht.height,ht.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Ot,wt,ht.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Lt,ht.width,ht.height,ht.depth,0,Ot,wt,ht.data);else if(E.isData3DTexture)vt?(It&&e.texStorage3D(s.TEXTURE_3D,Pt,Lt,ht.width,ht.height,ht.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Ot,wt,ht.data)):e.texImage3D(s.TEXTURE_3D,0,Lt,ht.width,ht.height,ht.depth,0,Ot,wt,ht.data);else if(E.isFramebufferTexture){if(It)if(vt)e.texStorage2D(s.TEXTURE_2D,Pt,Lt,ht.width,ht.height);else{let pt=ht.width,U=ht.height;for(let _t=0;_t<Pt;_t++)e.texImage2D(s.TEXTURE_2D,_t,Lt,pt,U,0,Ot,wt,null),pt>>=1,U>>=1}}else if(R.length>0&&Wt){vt&&It&&e.texStorage2D(s.TEXTURE_2D,Pt,Lt,R[0].width,R[0].height);for(let pt=0,U=R.length;pt<U;pt++)At=R[pt],vt?e.texSubImage2D(s.TEXTURE_2D,pt,0,0,Ot,wt,At):e.texImage2D(s.TEXTURE_2D,pt,Lt,Ot,wt,At);E.generateMipmaps=!1}else vt?(It&&e.texStorage2D(s.TEXTURE_2D,Pt,Lt,ht.width,ht.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Ot,wt,ht)):e.texImage2D(s.TEXTURE_2D,0,Lt,Ot,wt,ht);M(E,Wt)&&_(et),gt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function L(P,E,V){if(E.image.length!==6)return;const et=at(P,E),rt=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+V);const lt=i.get(rt);if(rt.version!==lt.__version||et===!0){e.activeTexture(s.TEXTURE0+V);const gt=Qt.getPrimaries(Qt.workingColorSpace),ut=E.colorSpace===Be?null:Qt.getPrimaries(E.colorSpace),yt=E.colorSpace===Be||gt===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const xt=E.isCompressedTexture||E.image[0].isCompressedTexture,Rt=E.image[0]&&E.image[0].isDataTexture,ht=[];for(let pt=0;pt<6;pt++)!xt&&!Rt?ht[pt]=g(E.image[pt],!1,!0,n.maxCubemapSize):ht[pt]=Rt?E.image[pt].image:E.image[pt],ht[pt]=Tt(E,ht[pt]);const Wt=ht[0],Ot=h(Wt)||r,wt=a.convert(E.format,E.colorSpace),Lt=a.convert(E.type),At=y(E.internalFormat,wt,Lt,E.colorSpace),R=r&&E.isVideoTexture!==!0,vt=lt.__version===void 0||et===!0;let It=T(E,Wt,Ot);Z(s.TEXTURE_CUBE_MAP,E,Ot);let Pt;if(xt){R&&vt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,It,At,Wt.width,Wt.height);for(let pt=0;pt<6;pt++){Pt=ht[pt].mipmaps;for(let U=0;U<Pt.length;U++){const _t=Pt[U];E.format!==Ye?wt!==null?R?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,U,0,0,_t.width,_t.height,wt,_t.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,U,At,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,U,0,0,_t.width,_t.height,wt,Lt,_t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,U,At,_t.width,_t.height,0,wt,Lt,_t.data)}}}else{Pt=E.mipmaps,R&&vt&&(Pt.length>0&&It++,e.texStorage2D(s.TEXTURE_CUBE_MAP,It,At,ht[0].width,ht[0].height));for(let pt=0;pt<6;pt++)if(Rt){R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,ht[pt].width,ht[pt].height,wt,Lt,ht[pt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,At,ht[pt].width,ht[pt].height,0,wt,Lt,ht[pt].data);for(let U=0;U<Pt.length;U++){const St=Pt[U].image[pt].image;R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,U+1,0,0,St.width,St.height,wt,Lt,St.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,U+1,At,St.width,St.height,0,wt,Lt,St.data)}}else{R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,wt,Lt,ht[pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,At,wt,Lt,ht[pt]);for(let U=0;U<Pt.length;U++){const _t=Pt[U];R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,U+1,0,0,wt,Lt,_t.image[pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,U+1,At,wt,Lt,_t.image[pt])}}}M(E,Ot)&&_(s.TEXTURE_CUBE_MAP),lt.__version=rt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function G(P,E,V,et,rt,lt){const gt=a.convert(V.format,V.colorSpace),ut=a.convert(V.type),yt=y(V.internalFormat,gt,ut,V.colorSpace);if(!i.get(E).__hasExternalTextures){const Rt=Math.max(1,E.width>>lt),ht=Math.max(1,E.height>>lt);rt===s.TEXTURE_3D||rt===s.TEXTURE_2D_ARRAY?e.texImage3D(rt,lt,yt,Rt,ht,E.depth,0,gt,ut,null):e.texImage2D(rt,lt,yt,Rt,ht,0,gt,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),ft(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,rt,i.get(V).__webglTexture,0,Mt(E)):(rt===s.TEXTURE_2D||rt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,rt,i.get(V).__webglTexture,lt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Q(P,E,V){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer&&!E.stencilBuffer){let et=r===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(V||ft(E)){const rt=E.depthTexture;rt&&rt.isDepthTexture&&(rt.type===pi?et=s.DEPTH_COMPONENT32F:rt.type===fi&&(et=s.DEPTH_COMPONENT24));const lt=Mt(E);ft(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,et,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,et,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,et,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(E.depthBuffer&&E.stencilBuffer){const et=Mt(E);V&&ft(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,et,s.DEPTH24_STENCIL8,E.width,E.height):ft(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const et=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let rt=0;rt<et.length;rt++){const lt=et[rt],gt=a.convert(lt.format,lt.colorSpace),ut=a.convert(lt.type),yt=y(lt.internalFormat,gt,ut,lt.colorSpace),xt=Mt(E);V&&ft(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,yt,E.width,E.height):ft(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt,yt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,yt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function $(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),N(E.depthTexture,0);const et=i.get(E.depthTexture).__webglTexture,rt=Mt(E);if(E.depthTexture.format===Ri)ft(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,rt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(E.depthTexture.format===dn)ft(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,rt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function k(P){const E=i.get(P),V=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");$(E.__webglFramebuffer,P)}else if(V){E.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[et]),E.__webglDepthbuffer[et]=s.createRenderbuffer(),Q(E.__webglDepthbuffer[et],P,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),Q(E.__webglDepthbuffer,P,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(P,E,V){const et=i.get(P);E!==void 0&&G(et.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&k(P)}function B(P){const E=P.texture,V=i.get(P),et=i.get(E);P.addEventListener("dispose",O),P.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=E.version,o.memory.textures++);const rt=P.isWebGLCubeRenderTarget===!0,lt=P.isWebGLMultipleRenderTargets===!0,gt=h(P)||r;if(rt){V.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(r&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[ut]=[];for(let yt=0;yt<E.mipmaps.length;yt++)V.__webglFramebuffer[ut][yt]=s.createFramebuffer()}else V.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(r&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let ut=0;ut<E.mipmaps.length;ut++)V.__webglFramebuffer[ut]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(lt)if(n.drawBuffers){const ut=P.texture;for(let yt=0,xt=ut.length;yt<xt;yt++){const Rt=i.get(ut[yt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&P.samples>0&&ft(P)===!1){const ut=lt?E:[E];V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let yt=0;yt<ut.length;yt++){const xt=ut[yt];V.__webglColorRenderbuffer[yt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[yt]);const Rt=a.convert(xt.format,xt.colorSpace),ht=a.convert(xt.type),Wt=y(xt.internalFormat,Rt,ht,xt.colorSpace,P.isXRRenderTarget===!0),Ot=Mt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot,Wt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,V.__webglColorRenderbuffer[yt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Q(V.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(rt){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),Z(s.TEXTURE_CUBE_MAP,E,gt);for(let ut=0;ut<6;ut++)if(r&&E.mipmaps&&E.mipmaps.length>0)for(let yt=0;yt<E.mipmaps.length;yt++)G(V.__webglFramebuffer[ut][yt],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,yt);else G(V.__webglFramebuffer[ut],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);M(E,gt)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){const ut=P.texture;for(let yt=0,xt=ut.length;yt<xt;yt++){const Rt=ut[yt],ht=i.get(Rt);e.bindTexture(s.TEXTURE_2D,ht.__webglTexture),Z(s.TEXTURE_2D,Rt,gt),G(V.__webglFramebuffer,P,Rt,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,0),M(Rt,gt)&&_(s.TEXTURE_2D)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(r?ut=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,et.__webglTexture),Z(ut,E,gt),r&&E.mipmaps&&E.mipmaps.length>0)for(let yt=0;yt<E.mipmaps.length;yt++)G(V.__webglFramebuffer[yt],P,E,s.COLOR_ATTACHMENT0,ut,yt);else G(V.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,ut,0);M(E,gt)&&_(ut),e.unbindTexture()}P.depthBuffer&&k(P)}function Nt(P){const E=h(P)||r,V=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let et=0,rt=V.length;et<rt;et++){const lt=V[et];if(M(lt,E)){const gt=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ut=i.get(lt).__webglTexture;e.bindTexture(gt,ut),_(gt),e.unbindTexture()}}}function mt(P){if(r&&P.samples>0&&ft(P)===!1){const E=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],V=P.width,et=P.height;let rt=s.COLOR_BUFFER_BIT;const lt=[],gt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=i.get(P),yt=P.isWebGLMultipleRenderTargets===!0;if(yt)for(let xt=0;xt<E.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let xt=0;xt<E.length;xt++){lt.push(s.COLOR_ATTACHMENT0+xt),P.depthBuffer&&lt.push(gt);const Rt=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(Rt===!1&&(P.depthBuffer&&(rt|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(rt|=s.STENCIL_BUFFER_BIT)),yt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ut.__webglColorRenderbuffer[xt]),Rt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[gt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[gt])),yt){const ht=i.get(E[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ht,0)}s.blitFramebuffer(0,0,V,et,0,0,V,et,rt,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),yt)for(let xt=0;xt<E.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,ut.__webglColorRenderbuffer[xt]);const Rt=i.get(E[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,Rt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function Mt(P){return Math.min(n.maxSamples,P.samples)}function ft(P){const E=i.get(P);return r&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ct(P){const E=o.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function Tt(P,E){const V=P.colorSpace,et=P.format,rt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===pa||V!==ai&&V!==Be&&(Qt.getTransfer(V)===ee?r===!1?t.has("EXT_sRGB")===!0&&et===Ye?(P.format=pa,P.minFilter=ze,P.generateMipmaps=!1):E=Uo.sRGBToLinear(E):(et!==Ye||rt!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}this.allocateTextureUnit=C,this.resetTextureUnits=W,this.setTexture2D=N,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=ct,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=G,this.useMultisampledRTT=ft}function Ip(s,t,e){const i=e.isWebGL2;function n(a,o=Be){let r;const c=Qt.getTransfer(o);if(a===vi)return s.UNSIGNED_BYTE;if(a===bo)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Po)return s.UNSIGNED_SHORT_5_5_5_1;if(a===uc)return s.BYTE;if(a===fc)return s.SHORT;if(a===Ea)return s.UNSIGNED_SHORT;if(a===Ao)return s.INT;if(a===fi)return s.UNSIGNED_INT;if(a===pi)return s.FLOAT;if(a===bn)return i?s.HALF_FLOAT:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(a===pc)return s.ALPHA;if(a===Ye)return s.RGBA;if(a===mc)return s.LUMINANCE;if(a===gc)return s.LUMINANCE_ALPHA;if(a===Ri)return s.DEPTH_COMPONENT;if(a===dn)return s.DEPTH_STENCIL;if(a===pa)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(a===vc)return s.RED;if(a===wo)return s.RED_INTEGER;if(a===_c)return s.RG;if(a===Co)return s.RG_INTEGER;if(a===Ro)return s.RGBA_INTEGER;if(a===ws||a===Cs||a===Rs||a===Ls)if(c===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(a===ws)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(a===ws)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Cs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Rs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ls)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Za||a===ja||a===Ja||a===Qa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(a===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Lo)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===tr||a===er)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(a===tr)return c===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(a===er)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===ir||a===nr||a===sr||a===ar||a===rr||a===or||a===lr||a===cr||a===hr||a===dr||a===ur||a===fr||a===pr||a===mr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(a===ir)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===nr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===sr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ar)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===rr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===or)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===lr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===cr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===hr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===dr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ur)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===fr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===pr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===mr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Is||a===gr||a===vr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(a===Is)return c===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===gr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===vr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===yc||a===_r||a===yr||a===Mr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(a===Is)return r.COMPRESSED_RED_RGTC1_EXT;if(a===_r)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===yr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Mr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ci?i?s.UNSIGNED_INT_24_8:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:n}}class Dp extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Mn extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Op={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,a=null,o=null;const r=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const h=e.getJointPose(g,i),d=this._getHandJoint(l,g);h!==null&&(d.matrix.fromArray(h.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=h.radius),d.visible=h!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=u.position.distanceTo(f.position),v=.02,m=.005;l.inputState.pinching&&p>v+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=v-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(r.matrix.fromArray(n.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,n.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(n.linearVelocity)):r.hasLinearVelocity=!1,n.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(n.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Op)))}return r!==null&&(r.visible=n!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Mn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Np extends Ni{constructor(t,e){super();const i=this;let n=null,a=1,o=null,r="local-floor",c=1,l=null,u=null,f=null,p=null,v=null,m=null;const g=e.getContextAttributes();let h=null,d=null;const M=[],_=[],y=new Gt;let T=null;const S=new Fe;S.layers.enable(1),S.viewport=new me;const A=new Fe;A.layers.enable(2),A.viewport=new me;const O=[S,A],x=new Dp;x.layers.enable(1),x.layers.enable(2);let b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let at=M[Z];return at===void 0&&(at=new ia,M[Z]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Z){let at=M[Z];return at===void 0&&(at=new ia,M[Z]=at),at.getGripSpace()},this.getHand=function(Z){let at=M[Z];return at===void 0&&(at=new ia,M[Z]=at),at.getHandSpace()};function z(Z){const at=_.indexOf(Z.inputSource);if(at===-1)return;const dt=M[at];dt!==void 0&&(dt.update(Z.inputSource,Z.frame,l||o),dt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){n.removeEventListener("select",z),n.removeEventListener("selectstart",z),n.removeEventListener("selectend",z),n.removeEventListener("squeeze",z),n.removeEventListener("squeezestart",z),n.removeEventListener("squeezeend",z),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",C);for(let Z=0;Z<M.length;Z++){const at=_[Z];at!==null&&(_[Z]=null,M[Z].disconnect(at))}b=null,F=null,t.setRenderTarget(h),v=null,p=null,f=null,n=null,d=null,ot.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return p!==null?p:v},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(h=t.getRenderTarget(),n.addEventListener("select",z),n.addEventListener("selectstart",z),n.addEventListener("selectend",z),n.addEventListener("squeeze",z),n.addEventListener("squeezestart",z),n.addEventListener("squeezeend",z),n.addEventListener("end",W),n.addEventListener("inputsourceschange",C),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(y),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const at={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(n,e,at),n.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),d=new Ii(v.framebufferWidth,v.framebufferHeight,{format:Ye,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let at=null,dt=null,L=null;g.depth&&(L=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=g.stencil?dn:Ri,dt=g.stencil?Ci:fi);const G={colorFormat:e.RGBA8,depthFormat:L,scaleFactor:a};f=new XRWebGLBinding(n,e),p=f.createProjectionLayer(G),n.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),d=new Ii(p.textureWidth,p.textureHeight,{format:Ye,type:vi,depthTexture:new $o(p.textureWidth,p.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const Q=t.properties.get(d);Q.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await n.requestReferenceSpace(r),ot.setContext(n),ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function C(Z){for(let at=0;at<Z.removed.length;at++){const dt=Z.removed[at],L=_.indexOf(dt);L>=0&&(_[L]=null,M[L].disconnect(dt))}for(let at=0;at<Z.added.length;at++){const dt=Z.added[at];let L=_.indexOf(dt);if(L===-1){for(let Q=0;Q<M.length;Q++)if(Q>=_.length){_.push(dt),L=Q;break}else if(_[Q]===null){_[Q]=dt,L=Q;break}if(L===-1)break}const G=M[L];G&&G.connect(dt)}}const D=new K,N=new K;function H(Z,at,dt){D.setFromMatrixPosition(at.matrixWorld),N.setFromMatrixPosition(dt.matrixWorld);const L=D.distanceTo(N),G=at.projectionMatrix.elements,Q=dt.projectionMatrix.elements,$=G[14]/(G[10]-1),k=G[14]/(G[10]+1),ct=(G[9]+1)/G[5],B=(G[9]-1)/G[5],Nt=(G[8]-1)/G[0],mt=(Q[8]+1)/Q[0],Mt=$*Nt,ft=$*mt,Ct=L/(-Nt+mt),Tt=Ct*-Nt;at.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Tt),Z.translateZ(Ct),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const P=$+Ct,E=k+Ct,V=Mt-Tt,et=ft+(L-Tt),rt=ct*k/E*P,lt=B*k/E*P;Z.projectionMatrix.makePerspective(V,et,rt,lt,P,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function Y(Z,at){at===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(at.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;x.near=A.near=S.near=Z.near,x.far=A.far=S.far=Z.far,(b!==x.near||F!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,F=x.far);const at=Z.parent,dt=x.cameras;Y(x,at);for(let L=0;L<dt.length;L++)Y(dt[L],at);dt.length===2?H(x,S,A):x.projectionMatrix.copy(S.projectionMatrix),X(Z,x,at)};function X(Z,at,dt){dt===null?Z.matrix.copy(at.matrixWorld):(Z.matrix.copy(dt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(at.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(at.projectionMatrix),Z.projectionMatrixInverse.copy(at.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ma*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&v===null))return c},this.setFoveation=function(Z){c=Z,p!==null&&(p.fixedFoveation=Z),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=Z)};let J=null;function nt(Z,at){if(u=at.getViewerPose(l||o),m=at,u!==null){const dt=u.views;v!==null&&(t.setRenderTargetFramebuffer(d,v.framebuffer),t.setRenderTarget(d));let L=!1;dt.length!==x.cameras.length&&(x.cameras.length=0,L=!0);for(let G=0;G<dt.length;G++){const Q=dt[G];let $=null;if(v!==null)$=v.getViewport(Q);else{const ct=f.getViewSubImage(p,Q);$=ct.viewport,G===0&&(t.setRenderTargetTextures(d,ct.colorTexture,p.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(d))}let k=O[G];k===void 0&&(k=new Fe,k.layers.enable(G),k.viewport=new me,O[G]=k),k.matrix.fromArray(Q.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(Q.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set($.x,$.y,$.width,$.height),G===0&&(x.matrix.copy(k.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),L===!0&&x.cameras.push(k)}}for(let dt=0;dt<M.length;dt++){const L=_[dt],G=M[dt];L!==null&&G!==void 0&&G.update(L,at,l||o)}J&&J(Z,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),m=null}const ot=new Yo;ot.setAnimationLoop(nt),this.setAnimationLoop=function(Z){J=Z},this.dispose=function(){}}}function Up(s,t){function e(h,d){h.matrixAutoUpdate===!0&&h.updateMatrix(),d.value.copy(h.matrix)}function i(h,d){d.color.getRGB(h.fogColor.value,Ho(s)),d.isFog?(h.fogNear.value=d.near,h.fogFar.value=d.far):d.isFogExp2&&(h.fogDensity.value=d.density)}function n(h,d,M,_,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(h,d):d.isMeshToonMaterial?(a(h,d),f(h,d)):d.isMeshPhongMaterial?(a(h,d),u(h,d)):d.isMeshStandardMaterial?(a(h,d),p(h,d),d.isMeshPhysicalMaterial&&v(h,d,y)):d.isMeshMatcapMaterial?(a(h,d),m(h,d)):d.isMeshDepthMaterial?a(h,d):d.isMeshDistanceMaterial?(a(h,d),g(h,d)):d.isMeshNormalMaterial?a(h,d):d.isLineBasicMaterial?(o(h,d),d.isLineDashedMaterial&&r(h,d)):d.isPointsMaterial?c(h,d,M,_):d.isSpriteMaterial?l(h,d):d.isShadowMaterial?(h.color.value.copy(d.color),h.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(h,d){h.opacity.value=d.opacity,d.color&&h.diffuse.value.copy(d.color),d.emissive&&h.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(h.map.value=d.map,e(d.map,h.mapTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,e(d.alphaMap,h.alphaMapTransform)),d.bumpMap&&(h.bumpMap.value=d.bumpMap,e(d.bumpMap,h.bumpMapTransform),h.bumpScale.value=d.bumpScale,d.side===Re&&(h.bumpScale.value*=-1)),d.normalMap&&(h.normalMap.value=d.normalMap,e(d.normalMap,h.normalMapTransform),h.normalScale.value.copy(d.normalScale),d.side===Re&&h.normalScale.value.negate()),d.displacementMap&&(h.displacementMap.value=d.displacementMap,e(d.displacementMap,h.displacementMapTransform),h.displacementScale.value=d.displacementScale,h.displacementBias.value=d.displacementBias),d.emissiveMap&&(h.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,h.emissiveMapTransform)),d.specularMap&&(h.specularMap.value=d.specularMap,e(d.specularMap,h.specularMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest);const M=t.get(d).envMap;if(M&&(h.envMap.value=M,h.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=d.reflectivity,h.ior.value=d.ior,h.refractionRatio.value=d.refractionRatio),d.lightMap){h.lightMap.value=d.lightMap;const _=s._useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=d.lightMapIntensity*_,e(d.lightMap,h.lightMapTransform)}d.aoMap&&(h.aoMap.value=d.aoMap,h.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,h.aoMapTransform))}function o(h,d){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,d.map&&(h.map.value=d.map,e(d.map,h.mapTransform))}function r(h,d){h.dashSize.value=d.dashSize,h.totalSize.value=d.dashSize+d.gapSize,h.scale.value=d.scale}function c(h,d,M,_){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,h.size.value=d.size*M,h.scale.value=_*.5,d.map&&(h.map.value=d.map,e(d.map,h.uvTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,e(d.alphaMap,h.alphaMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest)}function l(h,d){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,h.rotation.value=d.rotation,d.map&&(h.map.value=d.map,e(d.map,h.mapTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,e(d.alphaMap,h.alphaMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest)}function u(h,d){h.specular.value.copy(d.specular),h.shininess.value=Math.max(d.shininess,1e-4)}function f(h,d){d.gradientMap&&(h.gradientMap.value=d.gradientMap)}function p(h,d){h.metalness.value=d.metalness,d.metalnessMap&&(h.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,h.metalnessMapTransform)),h.roughness.value=d.roughness,d.roughnessMap&&(h.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,h.roughnessMapTransform)),t.get(d).envMap&&(h.envMapIntensity.value=d.envMapIntensity)}function v(h,d,M){h.ior.value=d.ior,d.sheen>0&&(h.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),h.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(h.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,h.sheenColorMapTransform)),d.sheenRoughnessMap&&(h.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,h.sheenRoughnessMapTransform))),d.clearcoat>0&&(h.clearcoat.value=d.clearcoat,h.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(h.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,h.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(h.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Re&&h.clearcoatNormalScale.value.negate())),d.iridescence>0&&(h.iridescence.value=d.iridescence,h.iridescenceIOR.value=d.iridescenceIOR,h.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(h.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,h.iridescenceMapTransform)),d.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),d.transmission>0&&(h.transmission.value=d.transmission,h.transmissionSamplerMap.value=M.texture,h.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(h.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,h.transmissionMapTransform)),h.thickness.value=d.thickness,d.thicknessMap&&(h.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=d.attenuationDistance,h.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(h.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(h.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=d.specularIntensity,h.specularColor.value.copy(d.specularColor),d.specularColorMap&&(h.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,h.specularColorMapTransform)),d.specularIntensityMap&&(h.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,h.specularIntensityMapTransform))}function m(h,d){d.matcap&&(h.matcap.value=d.matcap)}function g(h,d){const M=t.get(d).light;h.referencePosition.value.setFromMatrixPosition(M.matrixWorld),h.nearDistance.value=M.shadow.camera.near,h.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function zp(s,t,e,i){let n={},a={},o=[];const r=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,_){const y=_.program;i.uniformBlockBinding(M,y)}function l(M,_){let y=n[M.id];y===void 0&&(m(M),y=u(M),n[M.id]=y,M.addEventListener("dispose",h));const T=_.program;i.updateUBOMapping(M,T);const S=t.render.frame;a[M.id]!==S&&(p(M),a[M.id]=S)}function u(M){const _=f();M.__bindingPointIndex=_;const y=s.createBuffer(),T=M.__size,S=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,T,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function f(){for(let M=0;M<r;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){const _=n[M.id],y=M.uniforms,T=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let S=0,A=y.length;S<A;S++){const O=Array.isArray(y[S])?y[S]:[y[S]];for(let x=0,b=O.length;x<b;x++){const F=O[x];if(v(F,S,x,T)===!0){const z=F.__offset,W=Array.isArray(F.value)?F.value:[F.value];let C=0;for(let D=0;D<W.length;D++){const N=W[D],H=g(N);typeof N=="number"||typeof N=="boolean"?(F.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,z+C,F.__data)):N.isMatrix3?(F.__data[0]=N.elements[0],F.__data[1]=N.elements[1],F.__data[2]=N.elements[2],F.__data[3]=0,F.__data[4]=N.elements[3],F.__data[5]=N.elements[4],F.__data[6]=N.elements[5],F.__data[7]=0,F.__data[8]=N.elements[6],F.__data[9]=N.elements[7],F.__data[10]=N.elements[8],F.__data[11]=0):(N.toArray(F.__data,C),C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function v(M,_,y,T){const S=M.value,A=_+"_"+y;if(T[A]===void 0)return typeof S=="number"||typeof S=="boolean"?T[A]=S:T[A]=S.clone(),!0;{const O=T[A];if(typeof S=="number"||typeof S=="boolean"){if(O!==S)return T[A]=S,!0}else if(O.equals(S)===!1)return O.copy(S),!0}return!1}function m(M){const _=M.uniforms;let y=0;const T=16;for(let A=0,O=_.length;A<O;A++){const x=Array.isArray(_[A])?_[A]:[_[A]];for(let b=0,F=x.length;b<F;b++){const z=x[b],W=Array.isArray(z.value)?z.value:[z.value];for(let C=0,D=W.length;C<D;C++){const N=W[C],H=g(N),Y=y%T;Y!==0&&T-Y<H.boundary&&(y+=T-Y),z.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=H.storage}}}const S=y%T;return S>0&&(y+=T-S),M.__size=y,M.__cache={},this}function g(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function h(M){const _=M.target;_.removeEventListener("dispose",h);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(n[_.id]),delete n[_.id],delete a[_.id]}function d(){for(const M in n)s.deleteBuffer(n[M]);o=[],n={},a={}}return{bind:c,update:l,dispose:d}}class Qo{constructor(t={}){const{canvas:e=Ic(),context:i=null,depth:n=!0,stencil:a=!0,alpha:o=!1,antialias:r=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const v=new Uint32Array(4),m=new Int32Array(4);let g=null,h=null;const d=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this._useLegacyLights=!1,this.toneMapping=gi,this.toneMappingExposure=1;const _=this;let y=!1,T=0,S=0,A=null,O=-1,x=null;const b=new me,F=new me;let z=null;const W=new Jt(0);let C=0,D=e.width,N=e.height,H=1,Y=null,X=null;const J=new me(0,0,D,N),nt=new me(0,0,D,N);let ot=!1;const Z=new wa;let at=!1,dt=!1,L=null;const G=new he,Q=new Gt,$=new K,k={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ct(){return A===null?H:1}let B=i;function Nt(w,j){for(let it=0;it<w.length;it++){const st=w[it],tt=e.getContext(st,j);if(tt!==null)return tt}return null}try{const w={alpha:!0,depth:n,stencil:a,antialias:r,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xa}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",_t,!1),B===null){const j=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&j.shift(),B=Nt(j,w),B===null)throw Nt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let mt,Mt,ft,Ct,Tt,P,E,V,et,rt,lt,gt,ut,yt,xt,Rt,ht,Wt,Ot,wt,Lt,At,R,vt;function It(){mt=new Xu(B),Mt=new Gu(B,mt,t),mt.init(Mt),At=new Ip(B,mt,Mt),ft=new Rp(B,mt,Mt),Ct=new qu(B),Tt=new gp,P=new Lp(B,mt,ft,Tt,Mt,At,Ct),E=new Hu(_),V=new Yu(_),et=new nh(B,Mt),R=new Fu(B,mt,et,Mt),rt=new $u(B,et,Ct,R),lt=new Qu(B,rt,et,Ct),Ot=new Ju(B,Mt,P),Rt=new ku(Tt),gt=new mp(_,E,V,mt,Mt,R,Rt),ut=new Up(_,Tt),yt=new _p,xt=new Sp(mt,Mt),Wt=new zu(_,E,V,ft,lt,p,c),ht=new Cp(_,lt,Mt),vt=new zp(B,Ct,Mt,ft),wt=new Bu(B,mt,Ct,Mt),Lt=new Ku(B,mt,Ct,Mt),Ct.programs=gt.programs,_.capabilities=Mt,_.extensions=mt,_.properties=Tt,_.renderLists=yt,_.shadowMap=ht,_.state=ft,_.info=Ct}It();const Pt=new Np(_,B);this.xr=Pt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(D,N,!1))},this.getSize=function(w){return w.set(D,N)},this.setSize=function(w,j,it=!0){if(Pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=w,N=j,e.width=Math.floor(w*H),e.height=Math.floor(j*H),it===!0&&(e.style.width=w+"px",e.style.height=j+"px"),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(D*H,N*H).floor()},this.setDrawingBufferSize=function(w,j,it){D=w,N=j,H=it,e.width=Math.floor(w*it),e.height=Math.floor(j*it),this.setViewport(0,0,w,j)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,j,it,st){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,j,it,st),ft.viewport(b.copy(J).multiplyScalar(H).floor())},this.getScissor=function(w){return w.copy(nt)},this.setScissor=function(w,j,it,st){w.isVector4?nt.set(w.x,w.y,w.z,w.w):nt.set(w,j,it,st),ft.scissor(F.copy(nt).multiplyScalar(H).floor())},this.getScissorTest=function(){return ot},this.setScissorTest=function(w){ft.setScissorTest(ot=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){X=w},this.getClearColor=function(w){return w.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(w=!0,j=!0,it=!0){let st=0;if(w){let tt=!1;if(A!==null){const bt=A.texture.format;tt=bt===Ro||bt===Co||bt===wo}if(tt){const bt=A.texture.type,Dt=bt===vi||bt===fi||bt===Ea||bt===Ci||bt===bo||bt===Po,Bt=Wt.getClearColor(),kt=Wt.getClearAlpha(),Xt=Bt.r,Ht=Bt.g,Vt=Bt.b;Dt?(v[0]=Xt,v[1]=Ht,v[2]=Vt,v[3]=kt,B.clearBufferuiv(B.COLOR,0,v)):(m[0]=Xt,m[1]=Ht,m[2]=Vt,m[3]=kt,B.clearBufferiv(B.COLOR,0,m))}else st|=B.COLOR_BUFFER_BIT}j&&(st|=B.DEPTH_BUFFER_BIT),it&&(st|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),yt.dispose(),xt.dispose(),Tt.dispose(),E.dispose(),V.dispose(),lt.dispose(),R.dispose(),vt.dispose(),gt.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",re),Pt.removeEventListener("sessionend",jt),L&&(L.dispose(),L=null),le.stop()};function pt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=Ct.autoReset,j=ht.enabled,it=ht.autoUpdate,st=ht.needsUpdate,tt=ht.type;It(),Ct.autoReset=w,ht.enabled=j,ht.autoUpdate=it,ht.needsUpdate=st,ht.type=tt}function _t(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function St(w){const j=w.target;j.removeEventListener("dispose",St),Ft(j)}function Ft(w){Ut(w),Tt.remove(w)}function Ut(w){const j=Tt.get(w).programs;j!==void 0&&(j.forEach(function(it){gt.releaseProgram(it)}),w.isShaderMaterial&&gt.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,it,st,tt,bt){j===null&&(j=k);const Dt=tt.isMesh&&tt.matrixWorld.determinant()<0,Bt=ol(w,j,it,st,tt);ft.setMaterial(st,Dt);let kt=it.index,Xt=1;if(st.wireframe===!0){if(kt=rt.getWireframeAttribute(it),kt===void 0)return;Xt=2}const Ht=it.drawRange,Vt=it.attributes.position;let oe=Ht.start*Xt,Le=(Ht.start+Ht.count)*Xt;bt!==null&&(oe=Math.max(oe,bt.start*Xt),Le=Math.min(Le,(bt.start+bt.count)*Xt)),kt!==null?(oe=Math.max(oe,0),Le=Math.min(Le,kt.count)):Vt!=null&&(oe=Math.max(oe,0),Le=Math.min(Le,Vt.count));const fe=Le-oe;if(fe<0||fe===1/0)return;R.setup(tt,st,Bt,it,kt);let Ze,ne=wt;if(kt!==null&&(Ze=et.get(kt),ne=Lt,ne.setIndex(Ze)),tt.isMesh)st.wireframe===!0?(ft.setLineWidth(st.wireframeLinewidth*ct()),ne.setMode(B.LINES)):ne.setMode(B.TRIANGLES);else if(tt.isLine){let $t=st.linewidth;$t===void 0&&($t=1),ft.setLineWidth($t*ct()),tt.isLineSegments?ne.setMode(B.LINES):tt.isLineLoop?ne.setMode(B.LINE_LOOP):ne.setMode(B.LINE_STRIP)}else tt.isPoints?ne.setMode(B.POINTS):tt.isSprite&&ne.setMode(B.TRIANGLES);if(tt.isBatchedMesh)ne.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else if(tt.isInstancedMesh)ne.renderInstances(oe,fe,tt.count);else if(it.isInstancedBufferGeometry){const $t=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Ts=Math.min(it.instanceCount,$t);ne.renderInstances(oe,fe,Ts)}else ne.render(oe,fe)};function qt(w,j,it){w.transparent===!0&&w.side===ni&&w.forceSinglePass===!1?(w.side=Re,w.needsUpdate=!0,In(w,j,it),w.side=_i,w.needsUpdate=!0,In(w,j,it),w.side=ni):In(w,j,it)}this.compile=function(w,j,it=null){it===null&&(it=w),h=xt.get(it),h.init(),M.push(h),it.traverseVisible(function(tt){tt.isLight&&tt.layers.test(j.layers)&&(h.pushLight(tt),tt.castShadow&&h.pushShadow(tt))}),w!==it&&w.traverseVisible(function(tt){tt.isLight&&tt.layers.test(j.layers)&&(h.pushLight(tt),tt.castShadow&&h.pushShadow(tt))}),h.setupLights(_._useLegacyLights);const st=new Set;return w.traverse(function(tt){const bt=tt.material;if(bt)if(Array.isArray(bt))for(let Dt=0;Dt<bt.length;Dt++){const Bt=bt[Dt];qt(Bt,it,tt),st.add(Bt)}else qt(bt,it,tt),st.add(bt)}),M.pop(),h=null,st},this.compileAsync=function(w,j,it=null){const st=this.compile(w,j,it);return new Promise(tt=>{function bt(){if(st.forEach(function(Dt){Tt.get(Dt).currentProgram.isReady()&&st.delete(Dt)}),st.size===0){tt(w);return}setTimeout(bt,10)}mt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Zt=null;function se(w){Zt&&Zt(w)}function re(){le.stop()}function jt(){le.start()}const le=new Yo;le.setAnimationLoop(se),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(w){Zt=w,Pt.setAnimationLoop(w),w===null?le.stop():le.start()},Pt.addEventListener("sessionstart",re),Pt.addEventListener("sessionend",jt),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(j),j=Pt.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,j,A),h=xt.get(w,M.length),h.init(),M.push(h),G.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Z.setFromProjectionMatrix(G),dt=this.localClippingEnabled,at=Rt.init(this.clippingPlanes,dt),g=yt.get(w,d.length),g.init(),d.push(g),Xe(w,j,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(Y,X),this.info.render.frame++,at===!0&&Rt.beginShadows();const it=h.state.shadowsArray;if(ht.render(it,w,j),at===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Wt.render(g,w),h.setupLights(_._useLegacyLights),j.isArrayCamera){const st=j.cameras;for(let tt=0,bt=st.length;tt<bt;tt++){const Dt=st[tt];Oa(g,w,Dt,Dt.viewport)}}else Oa(g,w,j);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(_,w,j),R.resetDefaultState(),O=-1,x=null,M.pop(),M.length>0?h=M[M.length-1]:h=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function Xe(w,j,it,st){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)it=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){st&&$.setFromMatrixPosition(w.matrixWorld).applyMatrix4(G);const Dt=lt.update(w),Bt=w.material;Bt.visible&&g.push(w,Dt,Bt,it,$.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){const Dt=lt.update(w),Bt=w.material;if(st&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),$.copy(w.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),$.copy(Dt.boundingSphere.center)),$.applyMatrix4(w.matrixWorld).applyMatrix4(G)),Array.isArray(Bt)){const kt=Dt.groups;for(let Xt=0,Ht=kt.length;Xt<Ht;Xt++){const Vt=kt[Xt],oe=Bt[Vt.materialIndex];oe&&oe.visible&&g.push(w,Dt,oe,it,$.z,Vt)}}else Bt.visible&&g.push(w,Dt,Bt,it,$.z,null)}}const bt=w.children;for(let Dt=0,Bt=bt.length;Dt<Bt;Dt++)Xe(bt[Dt],j,it,st)}function Oa(w,j,it,st){const tt=w.opaque,bt=w.transmissive,Dt=w.transparent;h.setupLightsView(it),at===!0&&Rt.setGlobalState(_.clippingPlanes,it),bt.length>0&&rl(tt,bt,j,it),st&&ft.viewport(b.copy(st)),tt.length>0&&Ln(tt,j,it),bt.length>0&&Ln(bt,j,it),Dt.length>0&&Ln(Dt,j,it),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function rl(w,j,it,st){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;const bt=Mt.isWebGL2;L===null&&(L=new Ii(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")?bn:vi,minFilter:An,samples:bt?4:0})),_.getDrawingBufferSize(Q),bt?L.setSize(Q.x,Q.y):L.setSize(ga(Q.x),ga(Q.y));const Dt=_.getRenderTarget();_.setRenderTarget(L),_.getClearColor(W),C=_.getClearAlpha(),C<1&&_.setClearColor(16777215,.5),_.clear();const Bt=_.toneMapping;_.toneMapping=gi,Ln(w,it,st),P.updateMultisampleRenderTarget(L),P.updateRenderTargetMipmap(L);let kt=!1;for(let Xt=0,Ht=j.length;Xt<Ht;Xt++){const Vt=j[Xt],oe=Vt.object,Le=Vt.geometry,fe=Vt.material,Ze=Vt.group;if(fe.side===ni&&oe.layers.test(st.layers)){const ne=fe.side;fe.side=Re,fe.needsUpdate=!0,Na(oe,it,st,Le,fe,Ze),fe.side=ne,fe.needsUpdate=!0,kt=!0}}kt===!0&&(P.updateMultisampleRenderTarget(L),P.updateRenderTargetMipmap(L)),_.setRenderTarget(Dt),_.setClearColor(W,C),_.toneMapping=Bt}function Ln(w,j,it){const st=j.isScene===!0?j.overrideMaterial:null;for(let tt=0,bt=w.length;tt<bt;tt++){const Dt=w[tt],Bt=Dt.object,kt=Dt.geometry,Xt=st===null?Dt.material:st,Ht=Dt.group;Bt.layers.test(it.layers)&&Na(Bt,j,it,kt,Xt,Ht)}}function Na(w,j,it,st,tt,bt){w.onBeforeRender(_,j,it,st,tt,bt),w.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),tt.onBeforeRender(_,j,it,st,w,bt),tt.transparent===!0&&tt.side===ni&&tt.forceSinglePass===!1?(tt.side=Re,tt.needsUpdate=!0,_.renderBufferDirect(it,j,st,tt,w,bt),tt.side=_i,tt.needsUpdate=!0,_.renderBufferDirect(it,j,st,tt,w,bt),tt.side=ni):_.renderBufferDirect(it,j,st,tt,w,bt),w.onAfterRender(_,j,it,st,tt,bt)}function In(w,j,it){j.isScene!==!0&&(j=k);const st=Tt.get(w),tt=h.state.lights,bt=h.state.shadowsArray,Dt=tt.state.version,Bt=gt.getParameters(w,tt.state,bt,j,it),kt=gt.getProgramCacheKey(Bt);let Xt=st.programs;st.environment=w.isMeshStandardMaterial?j.environment:null,st.fog=j.fog,st.envMap=(w.isMeshStandardMaterial?V:E).get(w.envMap||st.environment),Xt===void 0&&(w.addEventListener("dispose",St),Xt=new Map,st.programs=Xt);let Ht=Xt.get(kt);if(Ht!==void 0){if(st.currentProgram===Ht&&st.lightsStateVersion===Dt)return za(w,Bt),Ht}else Bt.uniforms=gt.getUniforms(w),w.onBuild(it,Bt,_),w.onBeforeCompile(Bt,_),Ht=gt.acquireProgram(Bt,kt),Xt.set(kt,Ht),st.uniforms=Bt.uniforms;const Vt=st.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Vt.clippingPlanes=Rt.uniform),za(w,Bt),st.needsLights=cl(w),st.lightsStateVersion=Dt,st.needsLights&&(Vt.ambientLightColor.value=tt.state.ambient,Vt.lightProbe.value=tt.state.probe,Vt.directionalLights.value=tt.state.directional,Vt.directionalLightShadows.value=tt.state.directionalShadow,Vt.spotLights.value=tt.state.spot,Vt.spotLightShadows.value=tt.state.spotShadow,Vt.rectAreaLights.value=tt.state.rectArea,Vt.ltc_1.value=tt.state.rectAreaLTC1,Vt.ltc_2.value=tt.state.rectAreaLTC2,Vt.pointLights.value=tt.state.point,Vt.pointLightShadows.value=tt.state.pointShadow,Vt.hemisphereLights.value=tt.state.hemi,Vt.directionalShadowMap.value=tt.state.directionalShadowMap,Vt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Vt.spotShadowMap.value=tt.state.spotShadowMap,Vt.spotLightMatrix.value=tt.state.spotLightMatrix,Vt.spotLightMap.value=tt.state.spotLightMap,Vt.pointShadowMap.value=tt.state.pointShadowMap,Vt.pointShadowMatrix.value=tt.state.pointShadowMatrix),st.currentProgram=Ht,st.uniformsList=null,Ht}function Ua(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=as.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function za(w,j){const it=Tt.get(w);it.outputColorSpace=j.outputColorSpace,it.batching=j.batching,it.instancing=j.instancing,it.instancingColor=j.instancingColor,it.skinning=j.skinning,it.morphTargets=j.morphTargets,it.morphNormals=j.morphNormals,it.morphColors=j.morphColors,it.morphTargetsCount=j.morphTargetsCount,it.numClippingPlanes=j.numClippingPlanes,it.numIntersection=j.numClipIntersection,it.vertexAlphas=j.vertexAlphas,it.vertexTangents=j.vertexTangents,it.toneMapping=j.toneMapping}function ol(w,j,it,st,tt){j.isScene!==!0&&(j=k),P.resetTextureUnits();const bt=j.fog,Dt=st.isMeshStandardMaterial?j.environment:null,Bt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ai,kt=(st.isMeshStandardMaterial?V:E).get(st.envMap||Dt),Xt=st.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Ht=!!it.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Vt=!!it.morphAttributes.position,oe=!!it.morphAttributes.normal,Le=!!it.morphAttributes.color;let fe=gi;st.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(fe=_.toneMapping);const Ze=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ne=Ze!==void 0?Ze.length:0,$t=Tt.get(st),Ts=h.state.lights;if(at===!0&&(dt===!0||w!==x)){const Ne=w===x&&st.id===O;Rt.setState(st,w,Ne)}let ae=!1;st.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Ts.state.version||$t.outputColorSpace!==Bt||tt.isBatchedMesh&&$t.batching===!1||!tt.isBatchedMesh&&$t.batching===!0||tt.isInstancedMesh&&$t.instancing===!1||!tt.isInstancedMesh&&$t.instancing===!0||tt.isSkinnedMesh&&$t.skinning===!1||!tt.isSkinnedMesh&&$t.skinning===!0||tt.isInstancedMesh&&$t.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&$t.instancingColor===!1&&tt.instanceColor!==null||$t.envMap!==kt||st.fog===!0&&$t.fog!==bt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Rt.numPlanes||$t.numIntersection!==Rt.numIntersection)||$t.vertexAlphas!==Xt||$t.vertexTangents!==Ht||$t.morphTargets!==Vt||$t.morphNormals!==oe||$t.morphColors!==Le||$t.toneMapping!==fe||Mt.isWebGL2===!0&&$t.morphTargetsCount!==ne)&&(ae=!0):(ae=!0,$t.__version=st.version);let yi=$t.currentProgram;ae===!0&&(yi=In(st,j,tt));let Fa=!1,pn=!1,Es=!1;const ve=yi.getUniforms(),Mi=$t.uniforms;if(ft.useProgram(yi.program)&&(Fa=!0,pn=!0,Es=!0),st.id!==O&&(O=st.id,pn=!0),Fa||x!==w){ve.setValue(B,"projectionMatrix",w.projectionMatrix),ve.setValue(B,"viewMatrix",w.matrixWorldInverse);const Ne=ve.map.cameraPosition;Ne!==void 0&&Ne.setValue(B,$.setFromMatrixPosition(w.matrixWorld)),Mt.logarithmicDepthBuffer&&ve.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&ve.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,pn=!0,Es=!0)}if(tt.isSkinnedMesh){ve.setOptional(B,tt,"bindMatrix"),ve.setOptional(B,tt,"bindMatrixInverse");const Ne=tt.skeleton;Ne&&(Mt.floatVertexTextures?(Ne.boneTexture===null&&Ne.computeBoneTexture(),ve.setValue(B,"boneTexture",Ne.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}tt.isBatchedMesh&&(ve.setOptional(B,tt,"batchingTexture"),ve.setValue(B,"batchingTexture",tt._matricesTexture,P));const Ss=it.morphAttributes;if((Ss.position!==void 0||Ss.normal!==void 0||Ss.color!==void 0&&Mt.isWebGL2===!0)&&Ot.update(tt,it,yi),(pn||$t.receiveShadow!==tt.receiveShadow)&&($t.receiveShadow=tt.receiveShadow,ve.setValue(B,"receiveShadow",tt.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Mi.envMap.value=kt,Mi.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),pn&&(ve.setValue(B,"toneMappingExposure",_.toneMappingExposure),$t.needsLights&&ll(Mi,Es),bt&&st.fog===!0&&ut.refreshFogUniforms(Mi,bt),ut.refreshMaterialUniforms(Mi,st,H,N,L),as.upload(B,Ua($t),Mi,P)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(as.upload(B,Ua($t),Mi,P),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&ve.setValue(B,"center",tt.center),ve.setValue(B,"modelViewMatrix",tt.modelViewMatrix),ve.setValue(B,"normalMatrix",tt.normalMatrix),ve.setValue(B,"modelMatrix",tt.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Ne=st.uniformsGroups;for(let As=0,hl=Ne.length;As<hl;As++)if(Mt.isWebGL2){const Ba=Ne[As];vt.update(Ba,yi),vt.bind(Ba,yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yi}function ll(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function cl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,j,it){Tt.get(w.texture).__webglTexture=j,Tt.get(w.depthTexture).__webglTexture=it;const st=Tt.get(w);st.__hasExternalTextures=!0,st.__hasExternalTextures&&(st.__autoAllocateDepthBuffer=it===void 0,st.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,j){const it=Tt.get(w);it.__webglFramebuffer=j,it.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(w,j=0,it=0){A=w,T=j,S=it;let st=!0,tt=null,bt=!1,Dt=!1;if(w){const kt=Tt.get(w);kt.__useDefaultFramebuffer!==void 0?(ft.bindFramebuffer(B.FRAMEBUFFER,null),st=!1):kt.__webglFramebuffer===void 0?P.setupRenderTarget(w):kt.__hasExternalTextures&&P.rebindTextures(w,Tt.get(w.texture).__webglTexture,Tt.get(w.depthTexture).__webglTexture);const Xt=w.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Dt=!0);const Ht=Tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ht[j])?tt=Ht[j][it]:tt=Ht[j],bt=!0):Mt.isWebGL2&&w.samples>0&&P.useMultisampledRTT(w)===!1?tt=Tt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ht)?tt=Ht[it]:tt=Ht,b.copy(w.viewport),F.copy(w.scissor),z=w.scissorTest}else b.copy(J).multiplyScalar(H).floor(),F.copy(nt).multiplyScalar(H).floor(),z=ot;if(ft.bindFramebuffer(B.FRAMEBUFFER,tt)&&Mt.drawBuffers&&st&&ft.drawBuffers(w,tt),ft.viewport(b),ft.scissor(F),ft.setScissorTest(z),bt){const kt=Tt.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,kt.__webglTexture,it)}else if(Dt){const kt=Tt.get(w.texture),Xt=j||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,kt.__webglTexture,it||0,Xt)}O=-1},this.readRenderTargetPixels=function(w,j,it,st,tt,bt,Dt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){ft.bindFramebuffer(B.FRAMEBUFFER,Bt);try{const kt=w.texture,Xt=kt.format,Ht=kt.type;if(Xt!==Ye&&At.convert(Xt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Vt=Ht===bn&&(mt.has("EXT_color_buffer_half_float")||Mt.isWebGL2&&mt.has("EXT_color_buffer_float"));if(Ht!==vi&&At.convert(Ht)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===pi&&(Mt.isWebGL2||mt.has("OES_texture_float")||mt.has("WEBGL_color_buffer_float")))&&!Vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-st&&it>=0&&it<=w.height-tt&&B.readPixels(j,it,st,tt,At.convert(Xt),At.convert(Ht),bt)}finally{const kt=A!==null?Tt.get(A).__webglFramebuffer:null;ft.bindFramebuffer(B.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(w,j,it=0){const st=Math.pow(2,-it),tt=Math.floor(j.image.width*st),bt=Math.floor(j.image.height*st);P.setTexture2D(j,0),B.copyTexSubImage2D(B.TEXTURE_2D,it,0,0,w.x,w.y,tt,bt),ft.unbindTexture()},this.copyTextureToTexture=function(w,j,it,st=0){const tt=j.image.width,bt=j.image.height,Dt=At.convert(it.format),Bt=At.convert(it.type);P.setTexture2D(it,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,it.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,it.unpackAlignment),j.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,st,w.x,w.y,tt,bt,Dt,Bt,j.image.data):j.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,st,w.x,w.y,j.mipmaps[0].width,j.mipmaps[0].height,Dt,j.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,st,w.x,w.y,Dt,Bt,j.image),st===0&&it.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(w,j,it,st,tt=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const bt=w.max.x-w.min.x+1,Dt=w.max.y-w.min.y+1,Bt=w.max.z-w.min.z+1,kt=At.convert(st.format),Xt=At.convert(st.type);let Ht;if(st.isData3DTexture)P.setTexture3D(st,0),Ht=B.TEXTURE_3D;else if(st.isDataArrayTexture||st.isCompressedArrayTexture)P.setTexture2DArray(st,0),Ht=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,st.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,st.unpackAlignment);const Vt=B.getParameter(B.UNPACK_ROW_LENGTH),oe=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Le=B.getParameter(B.UNPACK_SKIP_PIXELS),fe=B.getParameter(B.UNPACK_SKIP_ROWS),Ze=B.getParameter(B.UNPACK_SKIP_IMAGES),ne=it.isCompressedTexture?it.mipmaps[tt]:it.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ne.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ne.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,w.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,w.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,w.min.z),it.isDataTexture||it.isData3DTexture?B.texSubImage3D(Ht,tt,j.x,j.y,j.z,bt,Dt,Bt,kt,Xt,ne.data):it.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ht,tt,j.x,j.y,j.z,bt,Dt,Bt,kt,ne.data)):B.texSubImage3D(Ht,tt,j.x,j.y,j.z,bt,Dt,Bt,kt,Xt,ne),B.pixelStorei(B.UNPACK_ROW_LENGTH,Vt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,oe),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Le),B.pixelStorei(B.UNPACK_SKIP_ROWS,fe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ze),tt===0&&st.generateMipmaps&&B.generateMipmap(Ht),ft.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),ft.unbindTexture()},this.resetState=function(){T=0,S=0,A=null,ft.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Sa?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===_s?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ge?Li:Io}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Li?ge:ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Fp extends Qo{}Fp.prototype.isWebGL1Renderer=!0;class Bp extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class ps extends qe{constructor(t=1,e=1,i=1,n=32,a=1,o=!1,r=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:a,openEnded:o,thetaStart:r,thetaLength:c};const l=this;n=Math.floor(n),a=Math.floor(a);const u=[],f=[],p=[],v=[];let m=0;const g=[],h=i/2;let d=0;M(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Te(f,3)),this.setAttribute("normal",new Te(p,3)),this.setAttribute("uv",new Te(v,2));function M(){const y=new K,T=new K;let S=0;const A=(e-t)/i;for(let O=0;O<=a;O++){const x=[],b=O/a,F=b*(e-t)+t;for(let z=0;z<=n;z++){const W=z/n,C=W*c+r,D=Math.sin(C),N=Math.cos(C);T.x=F*D,T.y=-b*i+h,T.z=F*N,f.push(T.x,T.y,T.z),y.set(D,A,N).normalize(),p.push(y.x,y.y,y.z),v.push(W,1-b),x.push(m++)}g.push(x)}for(let O=0;O<n;O++)for(let x=0;x<a;x++){const b=g[x][O],F=g[x+1][O],z=g[x+1][O+1],W=g[x][O+1];u.push(b,F,W),u.push(F,z,W),S+=6}l.addGroup(d,S,0),d+=S}function _(y){const T=m,S=new Gt,A=new K;let O=0;const x=y===!0?t:e,b=y===!0?1:-1;for(let z=1;z<=n;z++)f.push(0,h*b,0),p.push(0,b,0),v.push(.5,.5),m++;const F=m;for(let z=0;z<=n;z++){const C=z/n*c+r,D=Math.cos(C),N=Math.sin(C);A.x=x*N,A.y=h*b,A.z=x*D,f.push(A.x,A.y,A.z),p.push(0,b,0),S.x=D*.5+.5,S.y=N*.5*b+.5,v.push(S.x,S.y),m++}for(let z=0;z<n;z++){const W=T+z,C=F+z;y===!0?u.push(C,C+1,W):u.push(C+1,C,W),O+=3}l.addGroup(d,O,y===!0?1:2),d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xs extends qe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const a=[],o=[];r(n),l(i),u(),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(a.slice(),3)),this.setAttribute("uv",new Te(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function r(M){const _=new K,y=new K,T=new K;for(let S=0;S<e.length;S+=3)v(e[S+0],_),v(e[S+1],y),v(e[S+2],T),c(_,y,T,M)}function c(M,_,y,T){const S=T+1,A=[];for(let O=0;O<=S;O++){A[O]=[];const x=M.clone().lerp(y,O/S),b=_.clone().lerp(y,O/S),F=S-O;for(let z=0;z<=F;z++)z===0&&O===S?A[O][z]=x:A[O][z]=x.clone().lerp(b,z/F)}for(let O=0;O<S;O++)for(let x=0;x<2*(S-O)-1;x++){const b=Math.floor(x/2);x%2===0?(p(A[O][b+1]),p(A[O+1][b]),p(A[O][b])):(p(A[O][b+1]),p(A[O+1][b+1]),p(A[O+1][b]))}}function l(M){const _=new K;for(let y=0;y<a.length;y+=3)_.x=a[y+0],_.y=a[y+1],_.z=a[y+2],_.normalize().multiplyScalar(M),a[y+0]=_.x,a[y+1]=_.y,a[y+2]=_.z}function u(){const M=new K;for(let _=0;_<a.length;_+=3){M.x=a[_+0],M.y=a[_+1],M.z=a[_+2];const y=h(M)/2/Math.PI+.5,T=d(M)/Math.PI+.5;o.push(y,1-T)}m(),f()}function f(){for(let M=0;M<o.length;M+=6){const _=o[M+0],y=o[M+2],T=o[M+4],S=Math.max(_,y,T),A=Math.min(_,y,T);S>.9&&A<.1&&(_<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function p(M){a.push(M.x,M.y,M.z)}function v(M,_){const y=M*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function m(){const M=new K,_=new K,y=new K,T=new K,S=new Gt,A=new Gt,O=new Gt;for(let x=0,b=0;x<a.length;x+=9,b+=6){M.set(a[x+0],a[x+1],a[x+2]),_.set(a[x+3],a[x+4],a[x+5]),y.set(a[x+6],a[x+7],a[x+8]),S.set(o[b+0],o[b+1]),A.set(o[b+2],o[b+3]),O.set(o[b+4],o[b+5]),T.copy(M).add(_).add(y).divideScalar(3);const F=h(T);g(S,b+0,M,F),g(A,b+2,_,F),g(O,b+4,y,F)}}function g(M,_,y,T){T<0&&M.x===1&&(o[_]=M.x-1),y.x===0&&y.z===0&&(o[_]=T/2/Math.PI+.5)}function h(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.vertices,t.indices,t.radius,t.details)}}class La extends xs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new La(t.radius,t.detail)}}class Ia extends xs{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ia(t.radius,t.detail)}}class En extends qe{constructor(t=1,e=32,i=16,n=0,a=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:a,thetaStart:o,thetaLength:r},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+r,Math.PI);let l=0;const u=[],f=new K,p=new K,v=[],m=[],g=[],h=[];for(let d=0;d<=i;d++){const M=[],_=d/i;let y=0;d===0&&o===0?y=.5/e:d===i&&c===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){const S=T/e;f.x=-t*Math.cos(n+S*a)*Math.sin(o+_*r),f.y=t*Math.cos(o+_*r),f.z=t*Math.sin(n+S*a)*Math.sin(o+_*r),m.push(f.x,f.y,f.z),p.copy(f).normalize(),g.push(p.x,p.y,p.z),h.push(S+y,1-_),M.push(l++)}u.push(M)}for(let d=0;d<i;d++)for(let M=0;M<e;M++){const _=u[d][M+1],y=u[d][M],T=u[d+1][M],S=u[d+1][M+1];(d!==0||o>0)&&v.push(_,y,S),(d!==i-1||c<Math.PI)&&v.push(y,T,S)}this.setIndex(v),this.setAttribute("position",new Te(m,3)),this.setAttribute("normal",new Te(g,3)),this.setAttribute("uv",new Te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ie extends Rn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Jt(16777215),this.specular=new Jt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Do,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tl extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const na=new he,co=new K,ho=new K;class Gp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wa,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;co.setFromMatrixPosition(t.matrixWorld),e.position.copy(co),ho.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ho),e.updateMatrixWorld(),na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class kp extends Gp{constructor(){super(new Xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uo extends tl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new kp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fo extends tl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hp{constructor(t,e,i=0,n=1/0){this.ray=new ba(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return _a(t,this,i,e),i.sort(po),i}intersectObjects(t,e=!0,i=[]){for(let n=0,a=t.length;n<a;n++)_a(t[n],this,i,e);return i.sort(po),i}}function po(s,t){return s.distance-t.distance}function _a(s,t,e,i){if(s.layers.test(t.layers)&&s.raycast(t,e),i===!0){const n=s.children;for(let a=0,o=n.length;a<o;a++)_a(n[a],t,e,!0)}}class ya{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xa);const mo={type:"change"},sa={type:"start"},go={type:"end"},es=new ba,vo=new ui,Vp=Math.cos(70*Lc.DEG2RAD);class Wp extends Ni{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",xt),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",xt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(mo),i.update(),a=n.NONE},this.update=function(){const R=new K,vt=new Di().setFromUnitVectors(t.up,new K(0,1,0)),It=vt.clone().invert(),Pt=new K,pt=new Di,U=new K,_t=2*Math.PI;return function(Ft=null){const Ut=i.object.position;R.copy(Ut).sub(i.target),R.applyQuaternion(vt),r.setFromVector3(R),i.autoRotate&&a===n.NONE&&z(b(Ft)),i.enableDamping?(r.theta+=c.theta*i.dampingFactor,r.phi+=c.phi*i.dampingFactor):(r.theta+=c.theta,r.phi+=c.phi);let qt=i.minAzimuthAngle,Zt=i.maxAzimuthAngle;isFinite(qt)&&isFinite(Zt)&&(qt<-Math.PI?qt+=_t:qt>Math.PI&&(qt-=_t),Zt<-Math.PI?Zt+=_t:Zt>Math.PI&&(Zt-=_t),qt<=Zt?r.theta=Math.max(qt,Math.min(Zt,r.theta)):r.theta=r.theta>(qt+Zt)/2?Math.max(qt,r.theta):Math.min(Zt,r.theta)),r.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,r.phi)),r.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&S||i.object.isOrthographicCamera?r.radius=J(r.radius):r.radius=J(r.radius*l),R.setFromSpherical(r),R.applyQuaternion(It),Ut.copy(i.target).add(R),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let se=!1;if(i.zoomToCursor&&S){let re=null;if(i.object.isPerspectiveCamera){const jt=R.length();re=J(jt*l);const le=jt-re;i.object.position.addScaledVector(y,le),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const jt=new K(T.x,T.y,0);jt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),se=!0;const le=new K(T.x,T.y,0);le.unproject(i.object),i.object.position.sub(le).add(jt),i.object.updateMatrixWorld(),re=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;re!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(re).add(i.object.position):(es.origin.copy(i.object.position),es.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(es.direction))<Vp?t.lookAt(i.target):(vo.setFromNormalAndCoplanarPoint(i.object.up,i.target),es.intersectPlane(vo,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),se=!0);return l=1,S=!1,se||Pt.distanceToSquared(i.object.position)>o||8*(1-pt.dot(i.object.quaternion))>o||U.distanceToSquared(i.target)>0?(i.dispatchEvent(mo),Pt.copy(i.object.position),pt.copy(i.object.quaternion),U.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Wt),i.domElement.removeEventListener("pointerdown",P),i.domElement.removeEventListener("pointercancel",V),i.domElement.removeEventListener("wheel",lt),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",V),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",xt),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=n.NONE;const o=1e-6,r=new ya,c=new ya;let l=1;const u=new K,f=new Gt,p=new Gt,v=new Gt,m=new Gt,g=new Gt,h=new Gt,d=new Gt,M=new Gt,_=new Gt,y=new K,T=new Gt;let S=!1;const A=[],O={};let x=!1;function b(R){return R!==null?2*Math.PI/60*i.autoRotateSpeed*R:2*Math.PI/60/60*i.autoRotateSpeed}function F(R){const vt=Math.abs(R*.01);return Math.pow(.95,i.zoomSpeed*vt)}function z(R){c.theta-=R}function W(R){c.phi-=R}const C=function(){const R=new K;return function(It,Pt){R.setFromMatrixColumn(Pt,0),R.multiplyScalar(-It),u.add(R)}}(),D=function(){const R=new K;return function(It,Pt){i.screenSpacePanning===!0?R.setFromMatrixColumn(Pt,1):(R.setFromMatrixColumn(Pt,0),R.crossVectors(i.object.up,R)),R.multiplyScalar(It),u.add(R)}}(),N=function(){const R=new K;return function(It,Pt){const pt=i.domElement;if(i.object.isPerspectiveCamera){const U=i.object.position;R.copy(U).sub(i.target);let _t=R.length();_t*=Math.tan(i.object.fov/2*Math.PI/180),C(2*It*_t/pt.clientHeight,i.object.matrix),D(2*Pt*_t/pt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(C(It*(i.object.right-i.object.left)/i.object.zoom/pt.clientWidth,i.object.matrix),D(Pt*(i.object.top-i.object.bottom)/i.object.zoom/pt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function H(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(R,vt){if(!i.zoomToCursor)return;S=!0;const It=i.domElement.getBoundingClientRect(),Pt=R-It.left,pt=vt-It.top,U=It.width,_t=It.height;T.x=Pt/U*2-1,T.y=-(pt/_t)*2+1,y.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function J(R){return Math.max(i.minDistance,Math.min(i.maxDistance,R))}function nt(R){f.set(R.clientX,R.clientY)}function ot(R){X(R.clientX,R.clientX),d.set(R.clientX,R.clientY)}function Z(R){m.set(R.clientX,R.clientY)}function at(R){p.set(R.clientX,R.clientY),v.subVectors(p,f).multiplyScalar(i.rotateSpeed);const vt=i.domElement;z(2*Math.PI*v.x/vt.clientHeight),W(2*Math.PI*v.y/vt.clientHeight),f.copy(p),i.update()}function dt(R){M.set(R.clientX,R.clientY),_.subVectors(M,d),_.y>0?H(F(_.y)):_.y<0&&Y(F(_.y)),d.copy(M),i.update()}function L(R){g.set(R.clientX,R.clientY),h.subVectors(g,m).multiplyScalar(i.panSpeed),N(h.x,h.y),m.copy(g),i.update()}function G(R){X(R.clientX,R.clientY),R.deltaY<0?Y(F(R.deltaY)):R.deltaY>0&&H(F(R.deltaY)),i.update()}function Q(R){let vt=!1;switch(R.code){case i.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?W(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,i.keyPanSpeed),vt=!0;break;case i.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?W(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,-i.keyPanSpeed),vt=!0;break;case i.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(i.keyPanSpeed,0),vt=!0;break;case i.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(-i.keyPanSpeed,0),vt=!0;break}vt&&(R.preventDefault(),i.update())}function $(R){if(A.length===1)f.set(R.pageX,R.pageY);else{const vt=At(R),It=.5*(R.pageX+vt.x),Pt=.5*(R.pageY+vt.y);f.set(It,Pt)}}function k(R){if(A.length===1)m.set(R.pageX,R.pageY);else{const vt=At(R),It=.5*(R.pageX+vt.x),Pt=.5*(R.pageY+vt.y);m.set(It,Pt)}}function ct(R){const vt=At(R),It=R.pageX-vt.x,Pt=R.pageY-vt.y,pt=Math.sqrt(It*It+Pt*Pt);d.set(0,pt)}function B(R){i.enableZoom&&ct(R),i.enablePan&&k(R)}function Nt(R){i.enableZoom&&ct(R),i.enableRotate&&$(R)}function mt(R){if(A.length==1)p.set(R.pageX,R.pageY);else{const It=At(R),Pt=.5*(R.pageX+It.x),pt=.5*(R.pageY+It.y);p.set(Pt,pt)}v.subVectors(p,f).multiplyScalar(i.rotateSpeed);const vt=i.domElement;z(2*Math.PI*v.x/vt.clientHeight),W(2*Math.PI*v.y/vt.clientHeight),f.copy(p)}function Mt(R){if(A.length===1)g.set(R.pageX,R.pageY);else{const vt=At(R),It=.5*(R.pageX+vt.x),Pt=.5*(R.pageY+vt.y);g.set(It,Pt)}h.subVectors(g,m).multiplyScalar(i.panSpeed),N(h.x,h.y),m.copy(g)}function ft(R){const vt=At(R),It=R.pageX-vt.x,Pt=R.pageY-vt.y,pt=Math.sqrt(It*It+Pt*Pt);M.set(0,pt),_.set(0,Math.pow(M.y/d.y,i.zoomSpeed)),H(_.y),d.copy(M);const U=(R.pageX+vt.x)*.5,_t=(R.pageY+vt.y)*.5;X(U,_t)}function Ct(R){i.enableZoom&&ft(R),i.enablePan&&Mt(R)}function Tt(R){i.enableZoom&&ft(R),i.enableRotate&&mt(R)}function P(R){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",E),i.domElement.addEventListener("pointerup",V)),Ot(R),R.pointerType==="touch"?Rt(R):et(R))}function E(R){i.enabled!==!1&&(R.pointerType==="touch"?ht(R):rt(R))}function V(R){wt(R),A.length===0&&(i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",V)),i.dispatchEvent(go),a=n.NONE}function et(R){let vt;switch(R.button){case 0:vt=i.mouseButtons.LEFT;break;case 1:vt=i.mouseButtons.MIDDLE;break;case 2:vt=i.mouseButtons.RIGHT;break;default:vt=-1}switch(vt){case zi.DOLLY:if(i.enableZoom===!1)return;ot(R),a=n.DOLLY;break;case zi.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enablePan===!1)return;Z(R),a=n.PAN}else{if(i.enableRotate===!1)return;nt(R),a=n.ROTATE}break;case zi.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enableRotate===!1)return;nt(R),a=n.ROTATE}else{if(i.enablePan===!1)return;Z(R),a=n.PAN}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(sa)}function rt(R){switch(a){case n.ROTATE:if(i.enableRotate===!1)return;at(R);break;case n.DOLLY:if(i.enableZoom===!1)return;dt(R);break;case n.PAN:if(i.enablePan===!1)return;L(R);break}}function lt(R){i.enabled===!1||i.enableZoom===!1||a!==n.NONE||(R.preventDefault(),i.dispatchEvent(sa),G(gt(R)),i.dispatchEvent(go))}function gt(R){const vt=R.deltaMode,It={clientX:R.clientX,clientY:R.clientY,deltaY:R.deltaY};switch(vt){case 1:It.deltaY*=16;break;case 2:It.deltaY*=100;break}return R.ctrlKey&&!x&&(It.deltaY*=10),It}function ut(R){R.key==="Control"&&(x=!0,document.addEventListener("keyup",yt,{passive:!0,capture:!0}))}function yt(R){R.key==="Control"&&(x=!1,document.removeEventListener("keyup",yt,{passive:!0,capture:!0}))}function xt(R){i.enabled===!1||i.enablePan===!1||Q(R)}function Rt(R){switch(Lt(R),A.length){case 1:switch(i.touches.ONE){case Fi.ROTATE:if(i.enableRotate===!1)return;$(R),a=n.TOUCH_ROTATE;break;case Fi.PAN:if(i.enablePan===!1)return;k(R),a=n.TOUCH_PAN;break;default:a=n.NONE}break;case 2:switch(i.touches.TWO){case Fi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;B(R),a=n.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Nt(R),a=n.TOUCH_DOLLY_ROTATE;break;default:a=n.NONE}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(sa)}function ht(R){switch(Lt(R),a){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;mt(R),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;Mt(R),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ct(R),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Tt(R),i.update();break;default:a=n.NONE}}function Wt(R){i.enabled!==!1&&R.preventDefault()}function Ot(R){A.push(R.pointerId)}function wt(R){delete O[R.pointerId];for(let vt=0;vt<A.length;vt++)if(A[vt]==R.pointerId){A.splice(vt,1);return}}function Lt(R){let vt=O[R.pointerId];vt===void 0&&(vt=new Gt,O[R.pointerId]=vt),vt.set(R.pageX,R.pageY)}function At(R){const vt=R.pointerId===A[0]?A[1]:A[0];return O[vt]}i.domElement.addEventListener("contextmenu",Wt),i.domElement.addEventListener("pointerdown",P),i.domElement.addEventListener("pointercancel",V),i.domElement.addEventListener("wheel",lt,{passive:!1}),document.addEventListener("keydown",ut,{passive:!0,capture:!0}),this.update()}}const q={SEED:null,MAZE_DEGREE:4,MIN_MAZE_DEGREE:4,MAX_MAZE_DEGREE:16,BRANCHING_FACTOR:.1,BRAID_FACTOR:.1,SHADOW_SIZE_FACTOR:.075,TELEPORT_MAP_OPACITY:.25,PLAYER_COLLISION_RADIUS:.275,PLAYER_COLLISION_OFFSET_X:0,PLAYER_COLLISION_OFFSET_Y:-.125,PLAYER_START_X:.5,PLAYER_START_Y:1.7,PLAYER_SHADOW_OFFSET_X:-.28,PLAYER_SHADOW_OFFSET_Y:-.15,PLAYER_SHADOW_WIDTH_FACTOR:.45,PLAYER_SHADOW_HEIGHT_FACTOR:.25,SHOW_COLLISION_DEBUG:!1,MOVE_SPEED_FACTOR:2,ROT_SPEED:3,HUNTER_SPEED:800,VORTEX_SPEED_NORMAL:1.5,VORTEX_SPEED_FAST:6,getHunterCount(s){return s>=16?3:s>=8?2:1},getTeleportCount(s){if(s<=8)return Math.max(2,Math.floor(s/2));const t=s-8;return Math.floor(.125*t*t+.5*t+4)},getPathfinderCount(s){return this.getTeleportCount(s)},COLORS:{WALL:"#444",PATH_KNOWN:"#88ccff",PATH_VISITED:"#888",NEON_UP:"#00ffff",NEON_DOWN:"#ff00ff",NEON_UP_UNUSED:"#006666",NEON_DOWN_UNUSED:"#660066",START:"#ff0",EXIT:"#0f0",PLAYER:"#f00",PLAYER_OUTLINE:"#ffffff",HUNTER:"#a0f",TELEPORT:"#ff8c00",TELEPORT_INACTIVE:"#555555",REVEALED_PATH:"#ffffff",ELEVATOR_BIDIRECTIONAL:"#ffffff",THREE_PLAYER:16711680,THREE_HUNTER:11141375,THREE_START:16776960,THREE_EXIT:65280,THREE_VISITED:8947848,THREE_KNOWN:8965375,THREE_ELEVATOR_UP:65535,THREE_ELEVATOR_DOWN:16711935,THREE_TELEPORT:16747520,THREE_KEY:16766720,THREE_ELEVATOR_SHAFT:{bottom:16711935,top:65535}}},Ma={en:{gameTitle:"VOID ESCAPE",gameCredits:"a game by Bernard Rodrigues",activeHunters:"Active Hunters",activeTeleports:"Active Teleports",activeKeys:"Active Keys",availablePathfinders:"Available Pathfinders",mazeDegree:"Maze Degree",safeMode:"Safe Mode",generateMaze:"NEW GAME",continue:"CONTINUE",degreeHint:"Controls the grid size. Higher values create larger, more complex mazes.",safeModeHint:"When active, no hunters will spawn in the maze.",storyMsg1:"The mystical church of chaos worship!",storyMsg2:"The greatest monument to chaos worship.",storyMsg3:"I am a priestess of the word of the Jelly god.",storyMsg4:"But their word is a lie! The chaos is a lie!",storyMsg5:"So I was condemned to exile...",storyMsg6:"Condemned to the void...",hudKeys:"KEYS",hudPathfinders:"PATHFINDERS",hudFloor:"Floor",hudVisited:"Visited",proximityDetector:"PROXIMITY DETECTOR",mapLegendTitle:"MAP LEGEND",legendVisited:"Visited Path",legendKnown:"Known Path",legendStart:"Starting Point",legendExit:"Maze Exit",legendHunter:"Void Hunter",legendTeleport:"Teleport",legendElevator:"Elevator",controlsHintTitle:"CONTROLS HINT",actionMove:"Move / Rotate",actionElevator:"Elevator Up / Down",actionMap:"3D Holographic Map",actionZoom:"Zoom Minimap",msgVoidHuntersDetected:"Void Hunters Detected",msgKeySecured:"Key secured ({collected}/{total})",msgExitUnlocked:"Exit unlocked",msgKeysRemaining:"{count} key(s) remaining",msgNoOtherActiveTeleport:"No other active teleports",msgExitFound:"Exit found",msgNoPathfindersRemaining:"No pathfinders remaining",msgExitNotFoundYet:"Exit not found yet",msgSafePointTeleport:"Safe point... Teleport?",msgOopsNoisyShit:"Oops... noisy sh*t!",msgWhereAmI:"Where am I?",msgElevatorUp:"Up?",msgElevatorDown:"Down?",msgWhichWay:"Which way?",msgDidYouHearThat:"Did you hear that?",msgIWasDetected:"Damn! I was detected.",msgFoundPathfinder:"Found a pathfinder!",msgWorldSaved:"World saved. What now?",msgKeyDropped:"Oh! Just dropped a key...",msgPlayerRespawn:"Ok.. ok.. guess I'm alive..",statusLabel:"HUNTER STATUS:",statusScanning:"SCANNING",statusActive:"ACTIVE",statusSleeping:"SLEEPING",statusTracking:"TRACKING MODE",statusConverging:"HUNTERS CONVERGING ({ticks} Ticks)",pauseTitle:"PAUSED",resume:"RESUME",victoryTitle:"Mission Accomplished",victoryText:"You have successfully navigated the 3D void.",victoryCompletion:"MAP COMPLETION: {percent}%",mapCompletion:"MAP COMPLETION",victoryDeaths:"DEATHS",victoryDegree:"MAZE DEGREE",victoryTime:"COMPLETION TIME",playAgain:"PLAY AGAIN",mainMenu:"MAIN MENU",gameOverTitle:"Terminated",gameOverText:"You were caught by the void hunters.",saving:"SAVING...",generatingMaze:"GENERATING MAZE...",hudMana:"Mana",victoryMana:"MANA COLLECTED",msgManaSecured:"Mana secured ({collected}/{total})",teleportAnomaly:"TELEPORT ANOMALY",ticks:"TICKS",map3dInstructions:"Drag to rotate | Scroll to zoom | M to return",teleportWarning:"TELEPORT",map:"MAP",teleport:"TELEPORT",teleportationLink:"TELEPORTATION LINK",teleportJumpSector:"Jump to Sector {floor}F?",teleportTargetGrid:"Target Grid: ({x}, {y})",teleportGo:"GO",teleportCancel:"CANCEL"},ptBr:{gameTitle:"VOID ESCAPE",gameCredits:"um jogo de Bernard Rodrigues",activeHunters:"Caçadores Ativos",activeTeleports:"Teleportes Ativos",activeKeys:"Chaves Ativas",availablePathfinders:"Localizadores Disponíveis",mazeDegree:"Grau do Labirinto",safeMode:"Modo Seguro",generateMaze:"NOVO JOGO",continue:"CONTINUAR",degreeHint:"Controla o tamanho da grade. Valores maiores criam labirintos maiores e mais complexos.",safeModeHint:"Quando ativo, nenhum caçador surgirá no labirinto.",storyMsg1:"A igreja mística do culto ao caos!",storyMsg2:"O maior monumento ao culto do caos.",storyMsg3:"Sou uma sacerdotisa da palavra do deus Geleia.",storyMsg4:"Mas sua palavra é uma mentira! O caos é uma mentira!",storyMsg5:"Então fui condenada ao exílio...",storyMsg6:"Condenada ao vazio...",hudKeys:"CHAVES",hudPathfinders:"LOCALIZADORES",hudFloor:"Andar",hudVisited:"Visitado",proximityDetector:"DETECTOR DE PROXIMIDADE",mapLegendTitle:"LEGENDA DO MAPA",legendVisited:"Caminho Visitado",legendKnown:"Caminho Conhecido",legendStart:"Ponto de Partida",legendExit:"Saída do Labirinto",legendHunter:"Caçador do Vazio",legendTeleport:"Teleporte",legendElevator:"Elevador",controlsHintTitle:"DICA DE CONTROLES",actionMove:"Mover / Girar",actionElevator:"Elevador Subir / Descer",actionMap:"Mapa Holográfico 3D",actionZoom:"Zoom do Minimapa",msgVoidHuntersDetected:"Caçadores do Vazio Detectados",msgKeySecured:"Chave obtida ({collected}/{total})",msgExitUnlocked:"Saída destrancada",msgKeysRemaining:"{count} chave(s) restante(s)",msgNoOtherActiveTeleport:"Nenhum outro teleporte ativo",msgExitFound:"Saída encontrada",msgNoPathfindersRemaining:"Nenhum localizador restante",msgExitNotFoundYet:"Saída ainda não encontrada",msgSafePointTeleport:"Ponto seguro... Teleportar?",msgOopsNoisyShit:"Ops... troço barulhento!",msgWhereAmI:"Onde estou?",msgElevatorUp:"Subir?",msgElevatorDown:"Descer?",msgWhichWay:"Que direção?",msgDidYouHearThat:"Ouviu alguma coisa?",msgIWasDetected:"Droga! Fui detectada.",msgFoundPathfinder:"Localizador encontrado!",msgWorldSaved:"Salvei o mundo. E agora?",msgKeyDropped:"Ih... Derrubei uma chave...",msgPlayerRespawn:"Ok.. ok.. sobrevivi..",statusLabel:"STATUS DO CAÇADOR:",statusScanning:"ESCANEANDO",statusActive:"ATIVO",statusSleeping:"DORMINDO",statusTracking:"MODO DE RASTREAMENTO",statusConverging:"CAÇADORES CONVERGINDO ({ticks} Ticks)",pauseTitle:"PAUSA",resume:"RETOMAR",victoryTitle:"Missão Cumprida",victoryText:"Você atravessou o vazio 3D com sucesso.",victoryCompletion:"MAPA COMPLETO: {percent}%",mapCompletion:"MAPA COMPLETO",victoryDeaths:"MORTES",victoryDegree:"GRAU DO LABIRINTO",victoryTime:"TEMPO DE CONCLUSÃO",playAgain:"JOGAR NOVAMENTE",mainMenu:"MENU PRINCIPAL",gameOverTitle:"Eliminado",gameOverText:"Você foi pego pelos caçadores do vazio.",saving:"SALVANDO...",generatingMaze:"GERANDO LABIRINTO...",hudMana:"Mana",victoryMana:"MANA COLETADA",msgManaSecured:"Mana absorvida ({collected}/{total})",teleportAnomaly:"ANOMALIA DE TELEPORTE",ticks:"TICKS",map3dInstructions:"Arraste para girar | Role para zoom | M para voltar",teleportWarning:"TELEPORTE",map:"MAPA",teleport:"TELEPORTE",teleportationLink:"LINK DE TELEPORTE",teleportJumpSector:"Pular para o Setor {floor}F?",teleportTargetGrid:"Coordenada Alvo: ({x}, {y})",teleportGo:"IR",teleportCancel:"CANCELAR"},ja:{gameTitle:"ヴォイド・エスケープ",gameCredits:"ベルナルド・ホドリゲス制作",activeHunters:"アクティブなハンター",activeTeleports:"アクティブなテレポート",activeKeys:"アクティブな鍵",availablePathfinders:"使用可能なパスファインダー",mazeDegree:"迷路の難易度",safeMode:"セーフモード",generateMaze:"ニューゲーム",continue:"つづきから",degreeHint:"グリッドのサイズを調整します。値が大きいほど、より広く複雑な迷路になります。",safeModeHint:"有効にすると、迷路にハンターが出現しなくなります。",storyMsg1:"混沌崇拝の神秘的な教会!",storyMsg2:"混沌崇拝の最大の記念碑。",storyMsg3:"私はゼリー神の言葉に仕える巫女よ。",storyMsg4:"でも彼らの言葉は嘘!混沌なんて嘘っぱちなんだから!",storyMsg5:"だから追放の刑に処されたの…",storyMsg6:"虚空へと追放されて…",hudKeys:"鍵",hudPathfinders:"パスファインダー",hudFloor:"階層",hudVisited:"訪問済み",proximityDetector:"近接探知機",mapLegendTitle:"マップ凡例",legendVisited:"訪問済みの道",legendKnown:"既知の道",legendStart:"スタート地点",legendExit:"迷路の出口",legendHunter:"虚空のハンター",legendTeleport:"テレポート",legendElevator:"エレベーター",controlsHintTitle:"操作方法",actionMove:"移動 / 回転",actionElevator:"エレベーター 上昇 / 下降",actionMap:"3Dホログラフィックマップ",actionZoom:"ミニマップのズーム",msgVoidHuntersDetected:"虚空のハンターを検知",msgKeySecured:"鍵を入手 ({collected}/{total})",msgExitUnlocked:"出口の鍵が開いた",msgKeysRemaining:"残り{count}個の鍵",msgNoOtherActiveTeleport:"他に有効なテレポートはない",msgExitFound:"出口を発見",msgNoPathfindersRemaining:"パスファインダーが残っていない",msgExitNotFoundYet:"出口はまだ見つかっていない",msgSafePointTeleport:"安全地帯…テレポートする?",msgOopsNoisyShit:"あら…うるさいったらないわね!",msgWhereAmI:"ここどこ?",msgElevatorUp:"上る?",msgElevatorDown:"下る?",msgWhichWay:"どっちの道?",msgDidYouHearThat:"今の聞こえた?",msgIWasDetected:"しまった、見つかっちゃった!",msgFoundPathfinder:"パスファインダー発見!",msgWorldSaved:"世界を救っちゃった。さて、次は?",msgKeyDropped:"あ、鍵落としちゃった…",msgPlayerRespawn:"よしよし…どうやらまだ生きてるな…",statusLabel:"ハンターの状態:",statusScanning:"スキャン中",statusActive:"アクティブ",statusSleeping:"スリープ中",statusTracking:"追跡モード",statusConverging:"ハンターが接近中 ({ticks} ティック)",pauseTitle:"一時停止",resume:"再開",victoryTitle:"任務完了",victoryText:"3Dの虚空を無事に踏破した。",victoryCompletion:"マップ達成度: {percent}%",mapCompletion:"マップ達成度",victoryDeaths:"死亡数",victoryDegree:"迷路の次数",victoryTime:"クリア時間",playAgain:"もう一度プレイ",mainMenu:"メインメニュー",gameOverTitle:"終了",gameOverText:"虚空のハンターに捕まってしまった。",saving:"セーブ中…",generatingMaze:"迷路生成中...",hudMana:"マナ",victoryMana:"マナ回収量",msgManaSecured:"マナを獲得しました ({collected}/{total})",teleportAnomaly:"テレポート異常",ticks:"ティック",map3dInstructions:"ドラッグで回転 | スクロールでズーム | Mキーで戻る",teleportWarning:"テレポート",map:"マップ",teleport:"テレポート",teleportationLink:"テレポートリンク",teleportJumpSector:"{floor}階のセクターへ移動する?",teleportTargetGrid:"目標座標: ({x}, {y})",teleportGo:"移動",teleportCancel:"キャンセル"},es:{gameTitle:"ESCAPE DEL VACÍO",gameCredits:"un juego de Bernard Rodrigues",activeHunters:"Cazadores Activos",activeTeleports:"Teletransportes Activos",activeKeys:"Llaves Activas",availablePathfinders:"Localizadores Disponibles",mazeDegree:"Grado del Laberinto",safeMode:"Modo Seguro",generateMaze:"NUEVA PARTIDA",continue:"CONTINUAR",degreeHint:"Controla el tamaño de la cuadrícula. Valores más altos crean laberintos más grandes y complejos.",safeModeHint:"Cuando está activo, no aparecerán cazadores en el laberinto.",storyMsg1:"¡La mística iglesia del culto al caos!",storyMsg2:"El mayor monumento al culto del caos.",storyMsg3:"Soy una sacerdotisa de la palabra del dios Gelatina.",storyMsg4:"¡Pero su palabra es una mentira! ¡El caos es mentira!",storyMsg5:"Así que fui condenada al exilio...",storyMsg6:"Condenada al vacío...",hudKeys:"LLAVES",hudPathfinders:"LOCALIZADORES",hudFloor:"Piso",hudVisited:"Visitado",proximityDetector:"DETECTOR DE PROXIMIDAD",mapLegendTitle:"LEYENDA DEL MAPA",legendVisited:"Camino Visitado",legendKnown:"Camino Conocido",legendStart:"Punto de Partida",legendExit:"Salida del Laberinto",legendHunter:"Cazador del Vacío",legendTeleport:"Teletransporte",legendElevator:"Ascensor",controlsHintTitle:"AYUDA DE CONTROLES",actionMove:"Mover / Girar",actionElevator:"Ascensor Subir / Bajar",actionMap:"Mapa Holográfico 3D",actionZoom:"Zoom del Minimapa",msgVoidHuntersDetected:"Cazadores del Vacío Detectados",msgKeySecured:"Llave obtenida ({collected}/{total})",msgExitUnlocked:"Salida desbloqueada",msgKeysRemaining:"{count} llave(s) restante(s)",msgNoOtherActiveTeleport:"No hay otros teletransportes activos",msgExitFound:"Salida encontrada",msgNoPathfindersRemaining:"No quedan localizadores",msgExitNotFoundYet:"Salida aún no encontrada",msgSafePointTeleport:"Punto seguro... ¿Teletransportarse?",msgOopsNoisyShit:"Ups... ¡qué cosa tan ruidosa!",msgWhereAmI:"¿Dónde estoy?",msgElevatorUp:"¿Subir?",msgElevatorDown:"¿Bajar?",msgWhichWay:"¿Por dónde?",msgDidYouHearThat:"¿Escuchaste eso?",msgIWasDetected:"¡Rayos! Fui detectada.",msgFoundPathfinder:"¡Localizador encontrado!",msgWorldSaved:"Salvé el mundo. ¿Y ahora qué?",msgKeyDropped:"¡Ah! Se me cayó una llave...",msgPlayerRespawn:"Vale.. vale.. parece que sigo viva..",statusLabel:"ESTADO DEL CAZADOR:",statusScanning:"ESCANEANDO",statusActive:"ACTIVO",statusSleeping:"DURMIENDO",statusTracking:"MODO DE RASTREO",statusConverging:"CAZADORES CONVERGIENDO ({ticks} Ticks)",pauseTitle:"PAUSA",resume:"REANUDAR",victoryTitle:"Misión Cumplida",victoryText:"Atravesaste el vacío 3D con éxito.",victoryCompletion:"MAPA COMPLETADO: {percent}%",mapCompletion:"MAPA COMPLETADO",victoryDeaths:"MUERTES",victoryDegree:"GRADO DEL LABERINTO",victoryTime:"TIEMPO DE FINALIZACIÓN",playAgain:"JUGAR DE NUEVO",mainMenu:"MENÚ PRINCIPAL",gameOverTitle:"Eliminada",gameOverText:"Fuiste atrapada por los cazadores del vacío.",saving:"GUARDANDO...",generatingMaze:"GENERANDO LABIRINTO...",hudMana:"Maná",victoryMana:"MANÁ RECOLECTADA",msgManaSecured:"Maná asegurado ({collected}/{total})",teleportAnomaly:"ANOMALÍA DE TELETRANSPORTE",ticks:"TICKS",map3dInstructions:"Arrastra para girar | Desplázate para zoom | M para volver",teleportWarning:"TELETRANSPORTE",map:"MAPA",teleport:"TELETRANSPORTE",teleportationLink:"ENLACE DE TELETRANSPORTE",teleportJumpSector:"¿Saltar al Sector {floor}F?",teleportTargetGrid:"Coordenada Objetivo: ({x}, {y})",teleportGo:"IR",teleportCancel:"CANCELAR"}};let Pn="en";function is(s){Ma[s]?Pn=s:Pn="en"}function Yp(){if(typeof navigator<"u"){const s=navigator.language||navigator.userLanguage;if(s){const t=s.toLowerCase();if(t.startsWith("pt")){is("ptBr");return}if(t.startsWith("ja")){is("ja");return}if(t.startsWith("es")){is("es");return}}}is("en")}Yp();function zt(s,t={},e=Pn){var n,a;let i=((n=Ma[e])==null?void 0:n[s])||((a=Ma.en)==null?void 0:a[s])||s;return Object.keys(t).forEach(o=>{i=i.replace(`{${o}}`,t[o])}),i}function rs(s=Pn){typeof document<"u"&&document.querySelectorAll("[data-i18n]").forEach(e=>{const i=e.getAttribute("data-i18n");if(i){const n=zt(i,{},s);n!==i&&(e instanceof HTMLInputElement&&e.type==="button"?e.value=n:e.textContent=n)}})}class el{constructor(){I(this,"_data");this._data=[]}get size(){return this._data.length}push(t){this._data.push(t),this._bubbleUp(this._data.length-1)}pop(){const t=this._data[0],e=this._data.pop();return this._data.length>0&&e!==void 0&&(this._data[0]=e,this._siftDown(0)),t}_bubbleUp(t){for(;t>0;){const e=t-1>>1;if(this._data[e].f<=this._data[t].f)break;[this._data[e],this._data[t]]=[this._data[t],this._data[e]],t=e}}_siftDown(t){const e=this._data.length;for(;;){let i=t;const n=2*t+1,a=2*t+2;if(n<e&&this._data[n].f<this._data[i].f&&(i=n),a<e&&this._data[a].f<this._data[i].f&&(i=a),i===t)break;[this._data[i],this._data[t]]=[this._data[t],this._data[i]],t=i}}}const Xp=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1}],il=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];function ms(s,t,e,i,n,a){return Math.abs(s-i)+Math.abs(t-n)+Math.abs(e-a)}function nl(s,t,e,i,n=0,a=null){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return[];const o=new Map,r=new Map,c=`${s.x},${s.y},${s.z}`;r.set(c,0);const l=new el;for(l.push({f:ms(s.x,s.y,s.z,t.x,t.y,t.z),node:s});l.size>0;){const u=l.pop();if(!u)continue;const{node:f}=u,p=`${f.x},${f.y},${f.z}`;if(f.x===t.x&&f.y===t.y&&f.z===t.z)return $p(o,p);const v=r.get(p)??0;for(const{dx:m,dy:g,dz:h}of il){const d=f.x+m,M=f.y+g,_=f.z+h;if(d<0||d>=i||M<0||M>=i||_<0||_>=i||a&&d===a.x&&M===a.y&&_===a.z)continue;const y=e[d*i*i+M*i+_];if(y===n||y===8)continue;if(h!==0){const A=f.z+h/2;if(e[f.x*i*i+f.y*i+A]===n)continue}const T=`${d},${M},${_}`,S=v+1;S<(r.get(T)??1/0)&&(o.set(T,f),r.set(T,S),l.push({f:S+ms(d,M,_,t.x,t.y,t.z),node:{x:d,y:M,z:_}}))}}return null}function $p(s,t){const e=[];let i=t;for(;s.has(i);){const n=s.get(i);if(!n)break;const[a,o,r]=i.split(",").map(Number);e.push({x:a,y:o,z:r}),i=`${n.x},${n.y},${n.z}`}return e.reverse(),e}function Kp(s,t,e,i,n=0,a=1/0,o=null){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return 0;const r=new Map,c=`${s.x},${s.y},${s.z}`;r.set(c,0);const l=new el;for(l.push({f:ms(s.x,s.y,s.z,t.x,t.y,t.z),node:s});l.size>0;){const u=l.pop();if(!u)continue;const{node:f}=u,p=`${f.x},${f.y},${f.z}`,v=r.get(p)??0;if(v>a)return 1/0;if(f.x===t.x&&f.y===t.y&&f.z===t.z)return v;for(const{dx:m,dy:g,dz:h}of il){const d=f.x+m,M=f.y+g,_=f.z+h;if(d<0||d>=i||M<0||M>=i||_<0||_>=i||o&&d===o.x&&M===o.y&&_===o.z)continue;const y=e[d*i*i+M*i+_];if(y===n||y===8)continue;if(h!==0){const A=f.z+h/2;if(e[f.x*i*i+f.y*i+A]===n)continue}const T=`${d},${M},${_}`,S=v+1;S<(r.get(T)??1/0)&&(r.set(T,S),l.push({f:S+ms(d,M,_,t.x,t.y,t.z),node:{x:d,y:M,z:_}}))}}return 1/0}function qp(s,t,e,i,n=0,a=10){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return 0;const o=[{x:s.x,y:s.y,z:s.z,dist:0}];let r=0;const c=new Map;for(c.set(`${s.x},${s.y},${s.z}`,0);r<o.length;){const l=o[r++];if(!(l.dist>a))for(const{dx:u,dy:f,dz:p}of Xp){const v=l.x+u,m=l.y+f,g=l.z+p;if(v<0||v>=i||m<0||m>=i||g<0||g>=i)continue;const h=e[v*i*i+m*i+g];if(h===n||h===8)continue;const d=`${v},${m},${g}`,_=g%2===0?0:1,y=l.dist+_;if(y<(c.get(d)??1/0)){if(c.set(d,y),v===t.x&&m===t.y&&g===t.z)return y;_===0?o.splice(r,0,{x:v,y:m,z:g,dist:y}):o.push({x:v,y:m,z:g,dist:y})}}}return 1/0}function Zp(s,t,e,i,n,a){const o=[{x:s.x,y:s.y,z:s.z,path:[]}];let r=0;const c=new Uint8Array(i*i*i);for(c[s.x*i*i+s.y*i+s.z]=1;r<o.length;){const l=o[r++],u=`${l.x},${l.y},${l.z}`;if(!t.has(u))return l.path;const f=a(l.x,l.y,l.z,e,n,!1);for(const p of f){const v=p.x*i*i+p.y*i+p.z;c[v]||(c[v]=1,o.push({x:p.x,y:p.y,z:p.z,path:[...l.path,p]}))}}return null}class jp{constructor(t,e,i){I(this,"maze");I(this,"id");I(this,"history");I(this,"visitedNodes");I(this,"pathToTarget");I(this,"x");I(this,"y");I(this,"z");I(this,"visualX");I(this,"visualY");I(this,"visualZ");I(this,"state");I(this,"lastPos");I(this,"jellyTime");I(this,"lowCanvas");I(this,"lctx");this.maze=t,this.id=i,this.history=[],this.visitedNodes=new Set,this.pathToTarget=[],e?(this.x=e.x,this.y=e.y,this.z=e.z,this.visualX=e.x,this.visualY=e.y,this.visualZ=e.z,this.state="WANDERING",this.lastPos={x:this.x,y:this.y,z:this.z},this.visitedNodes.add(`${this.x},${this.y},${this.z}`)):(this.x=null,this.y=null,this.z=null,this.visualX=null,this.visualY=null,this.visualZ=null,this.state="SLEEP",this.lastPos=null),this.jellyTime=0,typeof document<"u"&&(this.lowCanvas=document.createElement("canvas"),this.lowCanvas.width=64,this.lowCanvas.height=64,this.lctx=this.lowCanvas.getContext("2d"))}generateCloudTexture(t=.016){if(this.state==="SLEEP"||(this.jellyTime+=t,typeof document>"u"||!this.lctx))return;const e=64,i=this.lctx;i.globalCompositeOperation="destination-out",i.fillStyle="rgba(0, 0, 0, 0.22)",i.fillRect(0,0,e,e),i.globalCompositeOperation="source-over";const n=this.jellyTime;try{const a=i.getImageData(0,0,e,e),o=a.data;for(let r=0;r<e;r++)for(let c=0;c<e;c++){const l=c-e/2,u=r-e/2,f=Math.sqrt(l*l+u*u),p=Math.sin(n*1.5+c*.08)*2.5,v=e*.35+p;if(f<v+Math.random()*1.5){const m=90+Math.floor(Math.random()*45),g=10+Math.floor(Math.random()*20),h=140+Math.floor(Math.random()*60),d=(r*e+c)*4;o[d]=m,o[d+1]=g,o[d+2]=h,o[d+3]=255}}i.putImageData(a,0,0)}catch{}if(Math.random()<.04){i.fillStyle=Math.random()<.7?"#ffffff":"#b3ffff";const a=e/2-8+Math.random()*16,o=e/2-8+Math.random()*16;i.fillRect(a,o,2+Math.random()*3,4+Math.random()*10)}if(Math.random()<.12){const a=Math.floor(Math.random()*3)+1,o=["#00ff66","#ff0055","#00ccff","#ffff00","#ffffff"];for(let r=0;r<a;r++){const c=Math.floor(Math.random()*e),l=Math.floor(Math.random()*e),u=c-e/2,f=l-e/2;if(Math.sqrt(u*u+f*f)<e*.32){const v=Math.floor(Math.random()*4)+2,m=Math.floor(Math.random()*2)+1;i.fillStyle=o[Math.floor(Math.random()*o.length)],i.fillRect(c,l,v,m)}}}if(Math.random()<.08){const a=Math.floor(Math.random()*e),o=Math.floor(Math.random()*6)+2,r=Math.floor(Math.random()*6)-3;try{const c=i.getImageData(0,a,e,o);i.clearRect(0,a,e,o),i.putImageData(c,r,a)}catch{}}}move(t,e,i){if(this.state==="SLEEP"||this.x===null||this.y===null||this.z===null)return;const n=this.getValidNeighbors(e,i);if(n.length===0)return;const a=Math.round(Math.cbrt(e.length));(e.get?e.get(this.x,this.y,this.z):e[this.x*a*a+this.y*a+this.z]??0)===i.VISITED&&this.state!=="TELEPORT_TRACKING"&&this.state!=="TRACKING"&&(this.state="TRACKING",this.pathToTarget=[],this.visitedNodes.clear(),this.visitedNodes.add(`${this.x},${this.y},${this.z}`));let r;if(this.pathToTarget.length>0){const c=this.pathToTarget[0],l=e[c.x*a*a+c.y*a+c.z];(this.state==="TRACKING"?l===i.VISITED||l===i.START||l===i.EXIT:l!==i.WALL)?r=this.pathToTarget.shift():this.pathToTarget=[]}if(!r)if(this.state==="TELEPORT_TRACKING")r=void 0;else{let c=this.findPathToNearestUnvisited(e,i);if((!c||c.length===0)&&(this.visitedNodes.clear(),this.visitedNodes.add(`${this.x},${this.y},${this.z}`),c=this.findPathToNearestUnvisited(e,i)),c&&c.length>0)this.pathToTarget=c,r=this.pathToTarget.shift();else{const l=this.lastPos||{x:this.x,y:this.y,z:this.z},u=n.filter(f=>f.x!==l.x||f.y!==l.y||f.z!==l.z);r=u.length>0?u[Math.floor(Math.random()*u.length)]:n[0]}}r&&(this.history.push({x:this.x,y:this.y,z:this.z}),this.history.length>2&&this.history.shift(),this.lastPos={x:this.x,y:this.y,z:this.z},this.x=r.x,this.y=r.y,this.z=r.z,this.visitedNodes.add(`${this.x},${this.y},${this.z}`))}findPathToTarget(t,e,i){const n=Math.round(Math.cbrt(e.length));return nl({x:this.x,y:this.y,z:this.z},t,e,n,i.WALL,this.maze.startPos)}findPathToNearestUnvisited(t,e){const i=Math.round(Math.cbrt(t.length));return Zp({x:this.x,y:this.y,z:this.z},this.visitedNodes,t,i,e,(n,a,o,r,c)=>this.getValidNeighbors(r,c,n,a,o,this.state==="TRACKING"))}getValidNeighbors(t,e,i=this.x,n=this.y,a=this.z,o=this.state==="TRACKING"){const r=[],c=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}],l=Math.round(Math.cbrt(t.length));for(const u of c){const f=i+u.dx,p=n+u.dy,v=a+u.dz;if(f>=0&&f<l&&p>=0&&p<l&&v>=0&&v<l){const m=Math.floor(this.maze.startPos.x),g=Math.floor(this.maze.startPos.y),h=this.maze.startPos.z;if(f===m&&p===g&&v===h)continue;const d=t[f*l*l+p*l+v];if(d===e.EXIT)continue;if(d!==e.WALL&&d!==8){if(u.dz!==0){const M=a+u.dz/2;if(t[i*l*l+n*l+M]===e.WALL)continue}o?(d===e.VISITED||d===e.START||d===e.EXIT||this.maze.visitedCells&&this.maze.visitedCells.has(`${f},${p},${v}`))&&r.push({x:f,y:p,z:v}):r.push({x:f,y:p,z:v})}}}return r}}class Jp{constructor(t,e,i=null){I(this,"n");I(this,"branchingFactor");I(this,"size");I(this,"seed");I(this,"random");I(this,"matrix");I(this,"TYPES");I(this,"startPos");const n=t!==void 0?t:q.MAZE_DEGREE!==void 0?q.MAZE_DEGREE:8,a=e!==void 0?e:q.BRANCHING_FACTOR!==void 0?q.BRANCHING_FACTOR:.2;this.n=Math.max(3,Math.min(16,n)),this.branchingFactor=Math.max(0,Math.min(1,a)),this.size=2*this.n+1,i!=null?(this.seed=i,this.random=this.createSeededRandom(i)):(this.seed=null,this.random=Math.random),this.matrix=this.initMatrix(),this.TYPES={WALL:0,PATH:1,VISITED:2,START:3,EXIT:4,ELEVATOR_VISITED:5,TELEPORT:6,KEY:7,STATUE:8,MANA:9},this.startPos={x:q.PLAYER_START_X!==void 0?q.PLAYER_START_X:.5,y:q.PLAYER_START_Y!==void 0?q.PLAYER_START_Y:1.5,z:0}}createSeededRandom(t){let e=0;if(typeof t=="string")for(let i=0;i<t.length;i++)e=Math.imul(31,e)+t.charCodeAt(i)|0;else e=t|0;return function(){let i=e+=1831565813;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}initMatrix(){return new Int8Array(this.size*this.size*this.size)}_idx(t,e,i){return t*this.size*this.size+e*this.size+i}generate(){const t=[],e=1+2*Math.floor(this.random()*this.n),i=1+2*Math.floor(this.random()*this.n),n=1+2*Math.floor(this.random()*this.n);for(this.matrix[this._idx(e,i,n)]=this.TYPES.PATH,t.push({x:e,y:i,z:n});t.length>0;){let r=this.random()>this.branchingFactor?t.length-1:Math.floor(this.random()*t.length);const c=t[r],l=this.getUnvisitedNeighbors(c.x,c.y,c.z);if(l.length>0){const u=l[Math.floor(this.random()*l.length)];this.matrix[this._idx(u.x,u.y,u.z)]=this.TYPES.PATH,this.matrix[this._idx((c.x+u.x)/2,(c.y+u.y)/2,(c.z+u.z)/2)]=this.TYPES.PATH,t.push(u)}else t.splice(r,1)}this.setEntryAndExit(),this.placeTeleports(),this.placeKeys(),this.applyBraid(),this.placeStatues(),this.placeManas();const a=this.size,o=this.matrix;return o.size=a,o.get=(r,c,l)=>o[r*a*a+c*a+l],o.set=(r,c,l,u)=>{o[r*a*a+c*a+l]=u},o}getUnvisitedNeighbors(t,e,i){const n=[],a=[{dx:2,dy:0,dz:0},{dx:-2,dy:0,dz:0},{dx:0,dy:2,dz:0},{dx:0,dy:-2,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const o of a){const r=t+o.dx,c=e+o.dy,l=i+o.dz;this.isValid(r,c,l)&&this.matrix[this._idx(r,c,l)]===this.TYPES.WALL&&n.push({x:r,y:c,z:l})}return n}isValid(t,e,i){return t>0&&t<this.size-1&&e>0&&e<this.size-1&&i>0&&i<this.size-1}setEntryAndExit(){const t=1+2*Math.floor(this.random()*this.n);this.matrix[this._idx(1,1,t)]=this.TYPES.PATH,this.matrix[this._idx(0,1,t)]=this.TYPES.TELEPORT,this.startPos={x:q.PLAYER_START_X!==void 0?q.PLAYER_START_X:.5,y:q.PLAYER_START_Y!==void 0?q.PLAYER_START_Y:1.5,z:t};const e=1+2*Math.floor(this.random()*this.n),i=2*this.n-1;this.matrix[this._idx(i,i,e)]=this.TYPES.PATH,this.matrix[this._idx(2*this.n,i,e)]=this.TYPES.EXIT}_findExitPos(){for(let t=0;t<this.size;t++)for(let e=0;e<this.size;e++)for(let i=0;i<this.size;i++)if(this.matrix[this._idx(t,e,i)]===this.TYPES.EXIT)return{x:t,y:e,z:i};return{x:2*this.n,y:2*this.n-1,z:this.startPos.z}}_collectDeadEndsAndPaths(){const t=[],e=[],i=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1}];for(let n=1;n<this.size-1;n++)for(let a=1;a<this.size-1;a++)for(let o=1;o<this.size-1;o++){if(this.matrix[this._idx(n,a,o)]!==this.TYPES.PATH)continue;const r=o+1<this.size&&this.matrix[this._idx(n,a,o+1)]!==this.TYPES.WALL,c=o-1>=0&&this.matrix[this._idx(n,a,o-1)]!==this.TYPES.WALL;if(r||c)continue;let l=0;for(const u of i){const f=n+u.dx,p=a+u.dy,v=o+u.dz;f>=0&&f<this.size&&p>=0&&p<this.size&&v>=0&&v<this.size&&this.matrix[this._idx(f,p,v)]!==this.TYPES.WALL&&l++}(l===1?t:e).push({x:n,y:a,z:o})}return{deadEnds:t,normalPaths:e}}_greedyFill(t,e,i,n,a){const o={x:0,y:1,z:this.startPos.z},r=this._findExitPos(),c=(f,p)=>Math.abs(f.x-p.x)+Math.abs(f.y-p.y)+Math.abs(f.z-p.z);let l=4,u=4;for(;t.length<i&&l>0;){a&&(t.length=0);const f=e.filter(p=>c(p,o)<l||c(p,r)<l?!1:!n.includes(this.matrix[this._idx(p.x,p.y,p.z)]));for(;t.length<i;){let p=null,v=-1;for(const m of f){if(t.some(h=>h.x===m.x&&h.y===m.y&&h.z===m.z))continue;let g=1/0;for(const h of t){const d=c(m,h);d<g&&(g=d)}if(g>=u){const h=Math.min(c(m,o),c(m,r),g);h>v&&(v=h,p=m)}}if(p)t.push(p);else break}t.length<i&&(u>1?u--:l--)}}placeTeleports(){const t=q.getTeleportCount(this.n),{deadEnds:e,normalPaths:i}=this._collectDeadEndsAndPaths(),n=[];this._greedyFill(n,e,t,[],!0),n.length<t&&this._greedyFill(n,i,t,[],!1);for(const a of n)this.matrix[this._idx(a.x,a.y,a.z)]=this.TYPES.TELEPORT}placeKeys(){const t=q.getHunterCount(this.n)*2,{deadEnds:e,normalPaths:i}=this._collectDeadEndsAndPaths(),n=[];this._greedyFill(n,e,t,[this.TYPES.TELEPORT],!0),n.length<t&&this._greedyFill(n,i,t,[this.TYPES.TELEPORT],!1);for(const a of n)this.matrix[this._idx(a.x,a.y,a.z)]=this.TYPES.KEY}applyBraid(){const t=this.size,e=[];for(let o=1;o<t-1;o++)for(let r=1;r<t-1;r++)for(let c=1;c<t-1;c++)if(this.matrix[this._idx(o,r,c)]===this.TYPES.WALL){const l=o%2===0&&r%2!==0&&c%2!==0,u=r%2===0&&o%2!==0&&c%2!==0,f=c%2===0&&o%2!==0&&r%2!==0;if(l){const p=this.matrix[this._idx(o-1,r,c)],v=this.matrix[this._idx(o+1,r,c)];p!==this.TYPES.WALL&&v!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&v!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&v!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&v!==this.TYPES.KEY&&e.push({x:o,y:r,z:c,type:"X"})}else if(u){const p=this.matrix[this._idx(o,r-1,c)],v=this.matrix[this._idx(o,r+1,c)];p!==this.TYPES.WALL&&v!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&v!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&v!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&v!==this.TYPES.KEY&&e.push({x:o,y:r,z:c,type:"Y"})}else if(f){const p=this.matrix[this._idx(o,r,c-1)],v=this.matrix[this._idx(o,r,c+1)];p!==this.TYPES.WALL&&v!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&v!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&v!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&v!==this.TYPES.KEY&&e.push({x:o,y:r,z:c,type:"Z"})}}for(let o=e.length-1;o>0;o--){const r=Math.floor(this.random()*(o+1)),c=e[o];e[o]=e[r],e[r]=c}const i=q.BRAID_FACTOR||.1,n=Math.floor(e.length*i);let a=0;for(const o of e){if(a>=n)break;this.isWideConnection(o.x,o.y,o.z)||o.type==="Z"&&this.isAdjacentElevator(o.x,o.y,o.z)||(this.matrix[this._idx(o.x,o.y,o.z)]=this.TYPES.PATH,a++)}}isWideConnection(t,e,i){const n=this.size,a=(l,u,f)=>l<0||l>=n||u<0||u>=n||f<0||f>=n?!1:l===t&&u===e&&f===i?!0:this.matrix[this._idx(l,u,f)]!==this.TYPES.WALL;return!!(a(t,e+1,i)&&a(t+1,e,i)&&a(t+1,e+1,i)||a(t-1,e,i)&&a(t-1,e+1,i)&&a(t,e+1,i)||a(t,e-1,i)&&a(t+1,e-1,i)&&a(t+1,e,i)||a(t-1,e-1,i)&&a(t,e-1,i)&&a(t-1,e,i)||a(t,e,i+1)&&a(t+1,e,i)&&a(t+1,e,i+1)||a(t-1,e,i)&&a(t-1,e,i+1)&&a(t,e,i+1)||a(t,e,i-1)&&a(t+1,e,i-1)&&a(t+1,e,i)||a(t-1,e,i-1)&&a(t,e,i-1)&&a(t-1,e,i)||a(t,e,i+1)&&a(t,e+1,i)&&a(t,e+1,i+1)||a(t,e-1,i)&&a(t,e-1,i+1)&&a(t,e,i+1)||a(t,e,i-1)&&a(t,e+1,i-1)&&a(t,e+1,i)||a(t,e-1,i-1)&&a(t,e,i-1)&&a(t,e-1,i))}isAdjacentElevator(t,e,i){const n=this.size,a=[{dx:-1,dy:-1},{dx:-1,dy:0},{dx:-1,dy:1},{dx:0,dy:-1},{dx:0,dy:1},{dx:1,dy:-1},{dx:1,dy:0},{dx:1,dy:1}];for(const o of a){const r=t+o.dx,c=e+o.dy;if(!(r<0||r>=n||c<0||c>=n)&&(this.matrix[this._idx(r,c,i)]!==this.TYPES.WALL||i-2>=0&&this.matrix[this._idx(r,c,i-2)]!==this.TYPES.WALL||i+2<n&&this.matrix[this._idx(r,c,i+2)]!==this.TYPES.WALL))return!0}return!1}isDeadEndZ(t,e,i){if(t%2===0||e%2===0||i%2===0)return!1;const n=this.matrix[this._idx(t,e,i)];if(n===this.TYPES.WALL||n===this.TYPES.START||n===this.TYPES.EXIT||n===this.TYPES.TELEPORT||n===this.TYPES.KEY)return!1;const a=this.size,o=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(const c of o){const l=t+c.dx,u=e+c.dy;if(!(l<0||l>=a||u<0||u>=a)&&this.matrix[this._idx(l,u,i)]!==this.TYPES.WALL)return!1}let r=!1;return i-1>=0&&this.matrix[this._idx(t,e,i-1)]!==this.TYPES.WALL&&(r=!0),i+1<a&&this.matrix[this._idx(t,e,i+1)]!==this.TYPES.WALL&&(r=!0),r}isSolvable(){const t=this.size,e={x:Math.floor(this.startPos.x),y:Math.floor(this.startPos.y),z:this.startPos.z},i=[];let n=null;for(let l=0;l<t;l++)for(let u=0;u<t;u++)for(let f=0;f<t;f++){const p=this.matrix[this._idx(l,u,f)];p===this.TYPES.KEY?i.push(`${l},${u},${f}`):p===this.TYPES.EXIT&&(n=`${l},${u},${f}`)}const a=[e],o=new Set([`${e.x},${e.y},${e.z}`]),r=new Set;let c=!1;for(;a.length>0;){const l=a.shift();if(!l)continue;const u=`${l.x},${l.y},${l.z}`;i.includes(u)&&r.add(u),u===n&&(c=!0);const f=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(const p of f){const v=l.x+p.dx,m=l.y+p.dy,g=l.z;if(v>=0&&v<t&&m>=0&&m<t){const h=`${v},${m},${g}`,d=this.matrix[this._idx(v,m,g)];d!==this.TYPES.WALL&&d!==this.TYPES.STATUE&&!o.has(h)&&(o.add(h),a.push({x:v,y:m,z:g}))}}for(const p of[-2,2]){const v=l.z+p;if(v>=0&&v<t){const m=l.z+p/2,g=this.matrix[this._idx(l.x,l.y,m)],h=this.matrix[this._idx(l.x,l.y,v)];if(g!==this.TYPES.WALL&&g!==this.TYPES.STATUE&&h!==this.TYPES.WALL&&h!==this.TYPES.STATUE){const d=`${l.x},${l.y},${v}`;o.has(d)||(o.add(d),a.push({x:l.x,y:l.y,z:v}))}}}}if(!c||r.size!==i.length)return!1;for(let l=0;l<t;l++)for(let u=0;u<t;u++)for(let f=1;f<t;f+=2){const p=this.matrix[this._idx(l,u,f)];if(p!==this.TYPES.WALL&&p!==this.TYPES.STATUE&&!o.has(`${l},${u},${f}`))return!1}return!0}placeStatues(){const t=this.size,e=[];for(let n=0;n<t;n++)for(let a=0;a<t;a++)for(let o=0;o<t;o++)this.isDeadEndZ(n,a,o)&&e.push({x:n,y:a,z:o});let i=0;for(const n of e){const a=this.matrix[this._idx(n.x,n.y,n.z)],o=n.z-1,r=n.z+1,c=o>=0?this.matrix[this._idx(n.x,n.y,o)]:null,l=r<t?this.matrix[this._idx(n.x,n.y,r)]:null;this.matrix[this._idx(n.x,n.y,n.z)]=this.TYPES.STATUE,o>=0&&(this.matrix[this._idx(n.x,n.y,o)]=this.TYPES.WALL),r<t&&(this.matrix[this._idx(n.x,n.y,r)]=this.TYPES.WALL),this.isSolvable()?i++:(this.matrix[this._idx(n.x,n.y,n.z)]=a,o>=0&&(this.matrix[this._idx(n.x,n.y,o)]=c),r<t&&(this.matrix[this._idx(n.x,n.y,r)]=l))}return i}placeManas(){const{deadEnds:t}=this._collectDeadEndsAndPaths();for(const e of t){const i=this._idx(e.x,e.y,e.z);if(this.matrix[i]===this.TYPES.PATH){let a=!1;e.z-1>=0&&this.matrix[this._idx(e.x,e.y,e.z-1)]!==this.TYPES.WALL&&(a=!0),e.z+1<this.size&&this.matrix[this._idx(e.x,e.y,e.z+1)]!==this.TYPES.WALL&&(a=!0),a||(this.matrix[i]=this.TYPES.MANA)}}}}class Qp{constructor(){I(this,"uiFloorSpan");I(this,"uiMap3dContainer");I(this,"uiMobileControls");I(this,"uiProximeterContainer");I(this,"uiProximeterCells");I(this,"uiProximeterBar");I(this,"uiVictoryScreen");I(this,"uiGameOverScreen");I(this,"uiMobileUp");I(this,"uiMobileDown");I(this,"uiMobileMap");I(this,"uiSavingIndicator");I(this,"savingIndicatorTimeout");I(this,"uiVisitedPercent");I(this,"uiHunterStatusVal");I(this,"uiStatusLabel");I(this,"uiMarqueeContainer");I(this,"uiLegendHunter");I(this,"uiCanvas");I(this,"uiKeysCollected");I(this,"uiKeysTotal");I(this,"uiKeysList");I(this,"uiPauseScreen");I(this,"uiMobilePauseBtn");I(this,"uiPathfindersRemaining");I(this,"uiPathfindersTotal");I(this,"uiControlsHintContent");I(this,"uiManaCollectedDesktop");I(this,"uiManaTotalDesktop");I(this,"uiManaCollectedMobile");I(this,"uiManaTotalMobile");I(this,"onInfoBanner");I(this,"bannerMessage","");this.uiFloorSpan=document.getElementById("current-floor"),this.uiMap3dContainer=document.getElementById("map3d-container"),this.uiMobileControls=document.getElementById("mobile-controls"),this.uiProximeterContainer=document.getElementById("proximeter-container"),this.uiProximeterCells=document.querySelectorAll(".proximeter-cell"),this.uiProximeterBar=document.querySelector(".proximeter-bar"),this.uiVictoryScreen=document.getElementById("victory-screen"),this.uiGameOverScreen=document.getElementById("game-over-screen"),this.uiMobileUp=document.getElementById("mobile-up"),this.uiMobileDown=document.getElementById("mobile-down"),this.uiMobileMap=document.getElementById("mobile-map"),this.uiSavingIndicator=document.getElementById("saving-indicator"),this.savingIndicatorTimeout=null,this.uiVisitedPercent=document.getElementById("visited-percent"),this.uiHunterStatusVal=document.getElementById("hunter-status-val"),this.uiStatusLabel=document.querySelector("#hunter-status-panel .status-label"),this.uiMarqueeContainer=document.querySelector(".status-marquee-container"),this.uiLegendHunter=document.getElementById("legend-hunter"),this.uiCanvas=document.getElementById("main-2d-canvas"),this.uiKeysCollected=document.getElementById("keys-collected-count"),this.uiKeysTotal=document.getElementById("keys-total-count"),this.uiKeysList=document.getElementById("keys-list-container"),this.uiPauseScreen=document.getElementById("pause-screen"),this.uiMobilePauseBtn=document.getElementById("mobile-pause-btn"),this.uiPathfindersRemaining=document.getElementById("pathfinders-remaining-count"),this.uiPathfindersTotal=document.getElementById("pathfinders-total-count"),this.uiControlsHintContent=document.getElementById("controls-hint-content"),this.uiManaCollectedDesktop=document.getElementById("mana-collected-count-desktop"),this.uiManaTotalDesktop=document.getElementById("mana-total-count-desktop"),this.uiManaCollectedMobile=document.getElementById("mana-collected-count-mobile"),this.uiManaTotalMobile=document.getElementById("mana-total-count-mobile"),this.localizeDOM()}localizeDOM(t=Pn){rs(t)}showPause(){this.uiPauseScreen&&this.uiPauseScreen.classList.remove("hidden")}hidePause(){this.uiPauseScreen&&this.uiPauseScreen.classList.add("hidden")}showVictory(t=0,e=0,i=8,n=0,a=0,o=0){this.hideGameUI(),this.uiVictoryScreen&&this.uiVictoryScreen.classList.remove("hidden");const r=document.getElementById("victory-mana-count");r&&(r.innerText=`${a}/${o}`);const c=document.getElementById("victory-completion-rate");c&&(c.innerText=`${t}%`);const l=document.getElementById("victory-deaths-count");l&&(l.innerText=String(e));const u=document.getElementById("victory-maze-degree");u&&(u.innerText=String(i));const f=document.getElementById("victory-completion-time");if(f){const p=Math.floor(n/3600),v=Math.floor(n%3600/60),m=Math.floor(n%60),g=d=>String(d).padStart(2,"0"),h=p>0?`${g(p)}:${g(v)}:${g(m)}`:`${g(v)}:${g(m)}`;f.innerText=h}}showDeath(t=!1){this.hideGameUI(),this.uiGameOverScreen&&this.uiGameOverScreen.classList.remove("hidden");const e=document.getElementById("continue-btn-death");e&&(e.style.display=t?"":"none")}hideGameUI(){this.uiMobileControls&&this.uiMobileControls.classList.add("hidden"),this.uiMobilePauseBtn&&this.uiMobilePauseBtn.classList.add("hidden"),this.uiMap3dContainer&&this.uiMap3dContainer.classList.add("hidden"),this.uiProximeterContainer&&this.uiProximeterContainer.classList.add("hidden"),this.uiProximeterBar&&this.uiProximeterBar.classList.remove("critical-alert"),this.uiProximeterCells.forEach(t=>t.classList.remove("active")),this.uiCanvas&&this.uiCanvas.classList.remove("hunted-map-effect","nearby-map-effect")}initGameUI(t=!1){this.uiMobileControls&&this.uiMobileControls.classList.remove("hidden"),this.uiMobilePauseBtn&&this.uiMobilePauseBtn.classList.remove("hidden"),this.uiMobileMap&&(this.uiMobileMap.disabled=!0),t?(this.uiStatusLabel&&(this.uiStatusLabel.innerText="SAFE MODE:"),this.uiHunterStatusVal&&(this.uiHunterStatusVal.innerText="ACTIVE",this.uiHunterStatusVal.className="status-marquee-text status--scanning"),this.uiLegendHunter&&this.uiLegendHunter.classList.add("hidden")):(this.uiStatusLabel&&(this.uiStatusLabel.innerText="HUNTER STATUS:"),this.uiLegendHunter&&this.uiLegendHunter.classList.remove("hidden"))}updateVisitedPercent(t){this.uiVisitedPercent&&(this.uiVisitedPercent.innerText=String(t))}updateManaHUD(t,e){this.uiManaCollectedDesktop&&(this.uiManaCollectedDesktop.innerText=String(t)),this.uiManaTotalDesktop&&(this.uiManaTotalDesktop.innerText=String(e)),this.uiManaCollectedMobile&&(this.uiManaCollectedMobile.innerText=String(t)),this.uiManaTotalMobile&&(this.uiManaTotalMobile.innerText=String(e))}updateFloor(t,e,i){if(this.uiFloorSpan){const n=(t+1)/2;this.uiFloorSpan.innerText=String(n)}this.uiMobileUp&&(this.uiMobileUp.disabled=!e),this.uiMobileDown&&(this.uiMobileDown.disabled=!i)}updateKeysHUD(t,e){if(this.uiKeysCollected&&(this.uiKeysCollected.innerText=String(t)),this.uiKeysTotal&&(this.uiKeysTotal.innerText=String(e)),this.uiKeysList){this.uiKeysList.innerHTML="";for(let i=0;i<e;i++){const n=document.createElement("span");n.className="key-dot"+(i<t?" key-dot--collected":""),this.uiKeysList.appendChild(n)}}}updatePathfindersHUD(t,e){this.uiPathfindersRemaining&&(this.uiPathfindersRemaining.innerText=String(t)),this.uiPathfindersTotal&&(this.uiPathfindersTotal.innerText=String(e))}showSavingIndicator(){this.uiSavingIndicator&&(this.savingIndicatorTimeout&&clearTimeout(this.savingIndicatorTimeout),this.uiSavingIndicator.classList.remove("hidden"),this.uiSavingIndicator.classList.add("saving-pulse"),this.savingIndicatorTimeout=window.setTimeout(()=>{this.uiSavingIndicator&&(this.uiSavingIndicator.classList.add("hidden"),this.uiSavingIndicator.classList.remove("saving-pulse"))},2e3))}showInfoBanner(t){this.bannerMessage=t,this.onInfoBanner&&this.onInfoBanner(t)}setMap3DVisible(t){this.uiMap3dContainer&&(t?this.uiMap3dContainer.classList.remove("hidden"):this.uiMap3dContainer.classList.add("hidden"))}updateHazardWarning(t,e,i=!1,n=!1){if(!this.uiHunterStatusVal)return;let a=zt("statusScanning"),o="status--scanning",r=!1;i?(a=zt("statusActive"),o="status--scanning"):n?(a=zt("statusSleeping"),o="status--sleeping"):e>0?(a=zt("statusConverging",{ticks:e}),o="status--converging",r=!0):t&&(a=zt("statusTracking"),o="status--tracking",r=!0),this.uiHunterStatusVal.innerText!==a&&(this.uiHunterStatusVal.innerText=a,this.uiHunterStatusVal.className="status-marquee-text "+o),this.uiCanvas&&(r?this.uiCanvas.classList.add("hunted-map-effect"):this.uiCanvas.classList.remove("hunted-map-effect"))}setNearbyWarning(t){this.uiCanvas&&(t?this.uiCanvas.classList.add("nearby-map-effect"):this.uiCanvas.classList.remove("nearby-map-effect"))}updateProximeter(t,e,i){if(!this.uiProximeterContainer)return;if(e>0&&!i)this.uiProximeterContainer.classList.remove("hidden");else{this.uiProximeterContainer.classList.add("hidden");return}let n=0;t<=10&&(n=11-t),this.uiProximeterCells.forEach(a=>{parseInt(a.getAttribute("data-index")||"0")<=n?a.classList.add("active"):a.classList.remove("active")}),this.uiProximeterBar&&(n===10?this.uiProximeterBar.classList.add("critical-alert"):this.uiProximeterBar.classList.remove("critical-alert"))}updateMobileMapButton(t,e,i){this.uiMobileMap&&i&&(t&&!e?(this.uiMobileMap.innerText=zt("teleport"),this.uiMobileMap.style.borderColor="var(--clr-teleport, #ff8c00)",this.uiMobileMap.style.color="var(--clr-teleport, #ff8c00)",this.uiMobileMap.style.background="rgba(255, 140, 0, 0.2)"):(this.uiMobileMap.innerText=zt("map"),this.uiMobileMap.style.borderColor="",this.uiMobileMap.style.color="",this.uiMobileMap.style.background=""))}updateControlsHint(t,e=!0){this.uiControlsHintContent&&(t==="gamepad"?this.uiControlsHintContent.innerHTML=`
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-round kbd-dark">LS</kbd>
                        <span style="color:var(--clr-text-dim);font-size:0.9em;margin:0 2px;">or</span>
                        <kbd class="kbd-dark">D-Pad</kbd>
                    </div>
                    <span class="hint-action">${zt("actionMove")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-round kbd-a">A</kbd>
                        <span style="color:var(--clr-text-dim);font-size:0.9em;margin:0 2px;">/</span>
                        <kbd class="kbd-round kbd-y">Y</kbd>
                    </div>
                    <span class="hint-action">${zt("actionElevator")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-dark" style="min-width: calc(var(--h-unit) * 3); min-width: calc(var(--d-h-unit) * 3);">Back</kbd>
                    </div>
                    <span class="hint-action">${zt("actionMap")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-round kbd-b">B</kbd>
                    </div>
                    <span class="hint-action">${zt("actionZoom")}</span>
                </div>
            `:this.uiControlsHintContent.innerHTML=`
                <div class="hint-row">
                    <div class="wasd-container">
                        <div class="wasd-row"><kbd>W</kbd></div>
                        <div class="wasd-row"><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></div>
                    </div>
                    <span class="hint-action">${zt("actionMove")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>Q</kbd>
                        <span style="color:var(--clr-text-dim);font-size:0.9em;margin:0 2px;">/</span>
                        <kbd>E</kbd>
                    </div>
                    <span class="hint-action">${zt("actionElevator")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>M</kbd>
                    </div>
                    <span class="hint-action">${zt("actionMap")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>Z</kbd>
                    </div>
                    <span class="hint-action">${zt("actionZoom")}</span>
                </div>
            `)}destroy(){this.savingIndicatorTimeout&&clearTimeout(this.savingIndicatorTimeout)}}class tm{constructor(){I(this,"keys");I(this,"touchStart");I(this,"touchMoveVector");I(this,"preventScrollKeys");I(this,"handleKeyDown");I(this,"handleKeyUp");I(this,"handleTouchStart");I(this,"handleTouchMove");I(this,"handleTouchEnd");this.keys={},this.touchStart=null,this.touchMoveVector=null,this.preventScrollKeys=["arrowup","arrowdown","arrowleft","arrowright"," ","pageup","pagedown"],this.handleKeyDown=null,this.handleKeyUp=null,this.handleTouchStart=null,this.handleTouchMove=null,this.handleTouchEnd=null,this.init()}init(){this.handleKeyDown=t=>{const e=t.key.toLowerCase();this.keys[e]=!0,this.preventScrollKeys.includes(e)&&t.preventDefault()},this.handleKeyUp=t=>{this.keys[t.key.toLowerCase()]=!1},window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp)}setupTouch(t,e){this.handleTouchStart=i=>{const n=i.target;t()||e()||n&&n.closest&&n.closest("button")||(i.cancelable&&i.preventDefault(),this.touchStart={x:i.touches[0].clientX,y:i.touches[0].clientY})},this.handleTouchMove=i=>{if(!this.touchStart||t()||e())return;i.cancelable&&i.preventDefault();const n=i.touches[0].clientX-this.touchStart.x,a=i.touches[0].clientY-this.touchStart.y,o=Math.sqrt(n*n+a*a);o>10&&(this.touchMoveVector={x:n/o,y:a/o})},this.handleTouchEnd=()=>{this.touchStart=null,this.touchMoveVector=null},window.addEventListener("touchstart",this.handleTouchStart,{passive:!1}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),window.addEventListener("touchend",this.handleTouchEnd)}destroy(){this.handleKeyDown&&window.removeEventListener("keydown",this.handleKeyDown),this.handleKeyUp&&window.removeEventListener("keyup",this.handleKeyUp),this.handleTouchStart&&window.removeEventListener("touchstart",this.handleTouchStart),this.handleTouchMove&&window.removeEventListener("touchmove",this.handleTouchMove),this.handleTouchEnd&&window.removeEventListener("touchend",this.handleTouchEnd)}}const Da="void-escape-save";function em(s){const t=new Uint8Array(s.buffer);let e="";for(let i=0;i<t.length;i++)e+=String.fromCharCode(t[i]);return btoa(e)}function im(s){const t=atob(s),e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return new Int8Array(e.buffer)}function nm(s){return{x:s.x,y:s.y,z:s.z,id:s.id,state:s.state,lastPos:s.lastPos?{...s.lastPos}:null,history:s.history.map(t=>({...t})),visitedNodes:Array.from(s.visitedNodes),pathToTarget:s.pathToTarget.map(t=>({...t}))}}function ns(s){try{const t={version:1,timestamp:Date.now(),degree:s.degree,branchingFactor:s.branchingFactor,isSafeMode:s.isSafeMode,seed:s.seed,mazeSize:s.mazeGen.size,mazeStartPos:{...s.mazeGen.startPos},matrix:em(s.mazeGen.matrix),player:{...s.player},hunters:s.hunters.map(nm),discoveredTeleports:Array.from(s.discoveredTeleports),inactiveTeleportPos:s.inactiveTeleportPos?{...s.inactiveTeleportPos}:null,teleportCooldownTicks:s.teleportCooldownTicks,revealedPathSet:Array.from(s.revealedPathSet),keysCollected:s.keysCollected,totalKeys:s.totalKeys,manaCollected:s.manaCollected,totalMana:s.totalMana,totalPathfinders:s.totalPathfinders,pathfindersRemaining:s.pathfindersRemaining,pathfinderRewardsGranted:s.pathfinderRewardsGranted!==void 0?s.pathfinderRewardsGranted:0,mapCompletion100Triggered:s.mapCompletion100Triggered||!1,dialogueUpTriggered:s.dialogueUpTriggered||!1,dialogueDownTriggered:s.dialogueDownTriggered||!1,dialogueWhichWayTriggered:s.dialogueWhichWayTriggered||!1,dialogueDetectedTriggered:s.dialogueDetectedTriggered||!1,hunterOnSameFloorDetected:s.hunterOnSameFloorDetected||!1,deathsCount:s.deathsCount!==void 0?s.deathsCount:0,elapsedTime:s.elapsedTime!==void 0?s.elapsedTime:0};localStorage.setItem(Da,JSON.stringify(t))}catch(t){console.warn("[SaveManager] Could not save game state:",t)}}function sl(){try{const s=localStorage.getItem(Da);if(!s)return null;const t=JSON.parse(s);return!t||t.version!==1?null:t}catch(s){return console.warn("[SaveManager] Could not load save data:",s),null}}function al(){localStorage.removeItem(Da)}function _o(){return sl()!==null}function sm(s,t){s.x=t.x,s.y=t.y,s.z=t.z,s.visualX=t.x,s.visualY=t.y,s.visualZ=t.z,s.state=t.state,s.lastPos=t.lastPos?{...t.lastPos}:null,s.history=t.history.map(e=>({...e})),s.visitedNodes=new Set(t.visitedNodes),s.pathToTarget=t.pathToTarget.map(e=>({...e}))}function am(s,t){const e=im(t);for(let i=0;i<e.length;i++)s.matrix[i]=e[i]}function aa(s,t,e){return Math.abs(t-s)<=e?t:s+Math.sign(t-s)*e}class yo{constructor(t,e,i=null){I(this,"degree");I(this,"branchingFactor");I(this,"isSafeMode");I(this,"vScale");I(this,"ui");I(this,"input");I(this,"canvas");I(this,"ctx");I(this,"seed");I(this,"mazeGen");I(this,"maze");I(this,"isResumedFromSave");I(this,"mapCompletion100Triggered");I(this,"hunterOnSameFloorDetected");I(this,"dialogueUpTriggered");I(this,"dialogueDownTriggered");I(this,"dialogueWhichWayTriggered");I(this,"dialogueDetectedTriggered");I(this,"wallImage");I(this,"floorImage");I(this,"keyImage");I(this,"manaImage");I(this,"statueImage");I(this,"mageImages");I(this,"playerSide");I(this,"playerVertical");I(this,"playerWalkCycle");I(this,"playerSquashTargetX");I(this,"playerSquashTargetY");I(this,"playerSquashX");I(this,"playerSquashY");I(this,"player");I(this,"hunters");I(this,"keyMeshes");I(this,"exitMesh");I(this,"keysCollected");I(this,"totalKeys");I(this,"manaCollected");I(this,"totalMana");I(this,"manaMeshes");I(this,"totalPathfinders");I(this,"pathfindersRemaining");I(this,"activeMapFloor");I(this,"visualActiveFloor");I(this,"mapCursor");I(this,"pathfinderRewardsGranted");I(this,"isometricCanvas");I(this,"isometricCtx");I(this,"floorClickRects");I(this,"teleportModalClickRects");I(this,"mapZoom");I(this,"mapPanOffsetX");I(this,"mapPanOffsetY");I(this,"isZoomTransitionActive");I(this,"zoomTransitionTimer");I(this,"preloadedStoryImages");I(this,"storyImagesLoadedCount");I(this,"storyImagesTotalCount");I(this,"storyImagesPreloadPromise");I(this,"lastFrameTime");I(this,"revealedPathSet");I(this,"activePathReveal");I(this,"revealedPathProgress");I(this,"knownMeshes");I(this,"gridMeshes");I(this,"pathRevealInterval");I(this,"pathfinderBlockedUntil");I(this,"isMap3DActive");I(this,"isGameOver");I(this,"deathAnimation");I(this,"notificationQueue");I(this,"activeNotification");I(this,"isPaused");I(this,"isDestroyed");I(this,"isIntroPlaying");I(this,"isStoryActive");I(this,"pulsatingMaterials");I(this,"hunterMeshes");I(this,"discoveredTeleports");I(this,"visitedCells");I(this,"lastSavePos");I(this,"suppressWakeHuntersBanner");I(this,"allTeleports");I(this,"vortexAngles");I(this,"isTouchDevice");I(this,"isMouseOrTouchDetected");I(this,"teleportGoBtnClickRect");I(this,"staticMapCacheCanvas");I(this,"staticMapCacheCtx");I(this,"staticMapCacheDirty");I(this,"zoomVisibleCells");I(this,"scene");I(this,"camera");I(this,"renderer");I(this,"controls");I(this,"teleportMeshes");I(this,"inactiveTeleportPos");I(this,"teleportCooldownTicks");I(this,"storyImages");I(this,"storyOpacity");I(this,"storyOverlayOpacity");I(this,"storyFrameIndex");I(this,"storyTimer");I(this,"storyTextQueue");I(this,"storyTextIndex");I(this,"storyDisplayedText");I(this,"storyState");I(this,"storyWaitTimer");I(this,"storyTextHeight");I(this,"storyWidthProgress");I(this,"storyCharIndex");I(this,"storyTypeTimer");I(this,"storyMsgIndex");I(this,"storyCloseProgress");I(this,"selectedTeleportIndex");I(this,"teleportConfirmModalActive");I(this,"teleportModalSelection");I(this,"teleportDotsClickRects");I(this,"isTeleportMode");I(this,"floorTransition");I(this,"hasSavePoint");I(this,"lastPlayerCell");I(this,"exitPathfinderUnlocked");I(this,"isZoomActive");I(this,"lastInputDevice");I(this,"fullyRevealedCells");I(this,"revealedCellsAnimation");I(this,"skipCellAnimations");I(this,"activeSkipHandler");I(this,"activeIntroTimer");I(this,"activeContinueTimer");I(this,"raycaster");I(this,"pointer");I(this,"handleKeyDownExtra");I(this,"handleKeyboardDetection");I(this,"handleResize");I(this,"handleStoryKeyDown");I(this,"handleStoryClick");I(this,"handleStoryTouch");I(this,"handleCanvasClick");I(this,"handlePointerDown");I(this,"handlePointerUp");I(this,"lastHunterMove");I(this,"lastLockedWarningTime");I(this,"prevGamepadButtons");I(this,"isPreloadingActive");I(this,"prevGamepadStick");I(this,"gamepadTeleportSelectedIndex");I(this,"deathsCount");I(this,"elapsedTime");if(this.degree=t!==void 0?t:q.MAZE_DEGREE!==void 0?q.MAZE_DEGREE:8,this.branchingFactor=e!==void 0?e:q.BRANCHING_FACTOR!==void 0?q.BRANCHING_FACTOR:.2,i)this.isSafeMode=i.isSafeMode??!1;else{const u=document.getElementById("safe-mode");this.isSafeMode=u?u.checked:!1}this.vScale=2,this.ui=new Qp,this.input=new tm,this.input.setupTouch(()=>this.isMap3DActive,()=>this.isGameOver),this.canvas=document.getElementById("main-2d-canvas"),this.ctx=this.canvas.getContext("2d"),this.seed=i?i.seed:q.SEED!==null&&q.SEED!==void 0?q.SEED:Date.now(),this.mazeGen=new Jp(t,e,this.seed),this.maze=this.mazeGen.generate(),this.isResumedFromSave=!!i,this.deathsCount=i&&i.deathsCount||0,this.elapsedTime=i&&i.elapsedTime||0,this.mapCompletion100Triggered=!1,this.hunterOnSameFloorDetected=!1,this.dialogueUpTriggered=!1,this.dialogueDownTriggered=!1,this.dialogueWhichWayTriggered=!1,this.dialogueDetectedTriggered=!1,this.wallImage=new Image,this.wallImage.onload=()=>{this.staticMapCacheDirty=!0},this.wallImage.src="assets/images/wall.png",this.floorImage=new Image,this.floorImage.onload=()=>{this.staticMapCacheDirty=!0},this.floorImage.src="assets/images/floor.png",this.keyImage=new Image,this.keyImage.onload=()=>{this.staticMapCacheDirty=!0},this.keyImage.src="assets/images/key.png",this.manaImage=new Image,this.manaImage.onload=()=>{this.staticMapCacheDirty=!0},this.manaImage.src="assets/images/mana.png",this.statueImage=new Image,this.statueImage.onload=()=>{this.staticMapCacheDirty=!0},this.statueImage.src="assets/images/statue.png",this.mageImages={down_left:new Image,down_right:new Image,up_left:new Image,up_right:new Image};for(const u in this.mageImages)this.mageImages[u].onload=()=>{this.staticMapCacheDirty=!0},this.mageImages[u].src=`assets/images/mage_${u}.png`;this.playerSide="right",this.playerVertical="down",this.playerWalkCycle=0,this.playerSquashTargetX=1,this.playerSquashTargetY=1,this.playerSquashX=1,this.playerSquashY=1,this.player={x:this.mazeGen.startPos.x,y:this.mazeGen.startPos.y,z:this.mazeGen.startPos.z,dir:0},this.hunters=[],this.initHunters(t),this.keyMeshes=[],this.exitMesh=null,this.keysCollected=0,this.totalKeys=q.getHunterCount(t)*2,this.totalPathfinders=q.getPathfinderCount(t),this.pathfindersRemaining=this.totalPathfinders,this.activeMapFloor=1,this.visualActiveFloor=1,this.mapCursor={x:0,y:0,z:1},this.pathfinderRewardsGranted=0,this.isometricCanvas=null,this.isometricCtx=null,this.floorClickRects=[],this.mapZoom=1,this.mapPanOffsetX=0,this.isZoomTransitionActive=!1,this.zoomTransitionTimer=0,this.preloadedStoryImages=[],this.storyImagesLoadedCount=0,this.storyImagesTotalCount=0,this.storyImagesPreloadPromise=null,this.preloadStoryImages(),this.lastFrameTime=performance.now(),this.revealedPathSet=new Set,this.activePathReveal=[],this.revealedPathProgress=0,this.knownMeshes=[],this.gridMeshes=null,this.pathRevealInterval=null,this.pathfinderBlockedUntil=0,this.manaCollected=0,this.totalMana=0,this.manaMeshes=[];const n=this.mazeGen.size;for(let u=0;u<n;u++)for(let f=0;f<n;f++)for(let p=0;p<n;p++)this.maze.get(u,f,p)===this.mazeGen.TYPES.MANA&&this.totalMana++;this.ui.initGameUI(this.isSafeMode),this.ui.onInfoBanner=u=>this.queueNotification(u),this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.ui.updateManaHUD(this.manaCollected,this.totalMana),this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),this.isMap3DActive=!1,this.isGameOver=!1,this.deathAnimation=null,this.notificationQueue=[],this.activeNotification=null,this.isPaused=!1,this.isDestroyed=!1,this.isIntroPlaying=!1,this.isStoryActive=!1,this.pulsatingMaterials=[],this.hunterMeshes=[],this.discoveredTeleports=new Set,this.visitedCells=new Set,this.lastSavePos=null,this.suppressWakeHuntersBanner=!1;const a=Math.floor(this.player.x),o=Math.floor(this.player.y),r=this.player.z;this.discoveredTeleports.add(`${a},${o},${r}`),this.allTeleports=[];const c=this.mazeGen.size,l=this.mazeGen.TYPES;for(let u=1;u<c;u+=2)for(let f=0;f<c;f++)for(let p=0;p<c;p++)this.maze.get(p,f,u)===l.TELEPORT&&this.allTeleports.push({x:p,y:f,z:u});this.allTeleports.sort((u,f)=>u.z!==f.z?u.z-f.z:u.y!==f.y?u.y-f.y:u.x-f.x),this.selectedTeleportIndex=this.allTeleports.findIndex(u=>u.x===a&&u.y===o&&u.z===r),this.selectedTeleportIndex===-1&&(this.selectedTeleportIndex=0),this.teleportConfirmModalActive=!1,this.teleportModalSelection="go",this.isMouseOrTouchDetected=!1,this.teleportGoBtnClickRect=null,this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0,this.teleportMeshes=[],this.isTeleportMode=!1,this.teleportCooldownTicks=0,this.inactiveTeleportPos=null,this.floorTransition=null,this.hasSavePoint=!1,this.lastPlayerCell={x:a,y:o,z:r},this.exitPathfinderUnlocked=!1,this.isZoomActive=!0,this.zoomVisibleCells=11,this.lastInputDevice="keyboard",this.staticMapCacheCanvas=document.createElement("canvas"),this.staticMapCacheCtx=this.staticMapCacheCanvas.getContext("2d"),this.staticMapCacheDirty=!0,this.fullyRevealedCells=new Set,this.revealedCellsAnimation=new Map,this.vortexAngles=new Map,this.skipCellAnimations=!0,this.populateFullyRevealedCells(this.player.z),this.activeSkipHandler=null,this.activeIntroTimer=null,this.activeContinueTimer=null,this.raycaster=new Hp,this.pointer=new Gt,this.exitPathfinderUnlocked=this.checkExitNeighborVisited(),this.initThree(),this.populateVisitedCells(),this.init(i)}populateVisitedCells(){this.visitedCells.clear();const t=this.mazeGen.size;for(let e=0;e<t;e++)for(let i=0;i<t;i++)for(let n=0;n<t;n++){const a=this.maze.get(e,i,n);(a===2||a===3||a===5)&&this.visitedCells.add(`${e},${i},${n}`)}}destroy(){this.isDestroyed=!0,this.hideGameUI(),this.input.destroy(),this.ui.destroy(),window.removeEventListener("keydown",this.handleKeyDownExtra),this.handleKeyboardDetection&&window.removeEventListener("keydown",this.handleKeyboardDetection),window.removeEventListener("resize",this.handleResize),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this.activeIntroTimer&&(clearTimeout(this.activeIntroTimer),this.activeIntroTimer=null),this.activeContinueTimer&&(clearTimeout(this.activeContinueTimer),this.activeContinueTimer=null),this.handleStoryKeyDown&&(window.removeEventListener("keydown",this.handleStoryKeyDown),this.handleStoryKeyDown=null);const t=document.getElementById("story-screen");t&&(this.handleStoryClick&&(t.removeEventListener("click",this.handleStoryClick),this.handleStoryClick=null),this.handleStoryTouch&&(t.removeEventListener("touchstart",this.handleStoryTouch),this.handleStoryTouch=null),t.classList.add("hidden")),this.controls&&this.controls.dispose(),this.renderer&&this.renderer.domElement&&(this.renderer.domElement.removeEventListener("click",this.handleCanvasClick),this.renderer.domElement.removeEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.removeEventListener("pointerup",this.handlePointerUp)),this.renderer&&(this.renderer.dispose(),this.renderer.domElement.remove()),this.ui.uiMobileUp&&(this.ui.uiMobileUp.onclick=null),this.ui.uiMobileDown&&(this.ui.uiMobileDown.onclick=null),this.ui.uiMobileMap&&(this.ui.uiMobileMap.onclick=null),this.pathRevealInterval&&clearInterval(this.pathRevealInterval)}preloadStoryImages(){const t=["assets/images/presentation/1-mystical-church-of-chaos.jpg","assets/images/presentation/2-mystical-church-of-chaos.jpg","assets/images/presentation/3-the-jelly-god.jpg","assets/images/presentation/4-player-alone.jpg","assets/images/presentation/5-player-thrown.jpg"];this.storyImagesLoadedCount=0,this.storyImagesTotalCount=t.length,this.storyImagesPreloadPromise=Promise.all(t.map((e,i)=>new Promise(n=>{const a=new Image;a.src=e,a.onload=()=>{this.preloadedStoryImages[i]=a,this.storyImagesLoadedCount++,n()},a.onerror=()=>{console.warn(`Failed to preload story image: ${e}`),n()}})))}initHunters(t){const e=this.isSafeMode?0:q.getHunterCount(t);if(e!==0){for(let i=1;i<=e;i++)this.hunters.push(new jp(this.mazeGen,null,i));this.lastHunterMove=performance.now()}}wakeHunters(){const t=this.mazeGen.size,e=[],i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,o=Math.floor(this.mazeGen.startPos.x),r=Math.floor(this.mazeGen.startPos.y),c=this.mazeGen.startPos.z;for(let m=0;m<t;m++)for(let g=0;g<t;g++)for(let h=0;h<t;h++){const d=m===o&&g===r&&h===c;this.maze.get(m,g,h)===this.mazeGen.TYPES.PATH&&h%2!==0&&!d&&e.push({x:m,y:g,z:h})}if(e.length===0)for(let m=0;m<t;m++)for(let g=0;g<t;g++)for(let h=0;h<t;h++){const d=this.maze.get(m,g,h),M=m===o&&g===r&&h===c,_=d===this.mazeGen.TYPES.EXIT;d!==this.mazeGen.TYPES.WALL&&!_&&h%2!==0&&(m!==i||g!==n||h!==a)&&!M&&e.push({x:m,y:g,z:h})}for(let m=e.length-1;m>0;m--){const g=Math.floor(Math.random()*(m+1)),h=e[m];e[m]=e[g],e[g]=h}const l=(m,g)=>Math.abs(m.x-g.x)+Math.abs(m.y-g.y)+Math.abs(m.z-g.z),u=[],f=this.hunters.filter(m=>m.state==="SLEEP");let p=Math.max(3,Math.floor(t*.45)),v=4;for(;u.length<f.length&&p>0;){u.length=0;const m=e.filter(g=>l(g,{x:i,y:n,z:a})>=p);for(let g=0;g<f.length;g++){let h=null;for(const d of m){if(u.some(_=>_.x===d.x&&_.y===d.y&&_.z===d.z))continue;let M=!0;for(const _ of u)if(l(d,_)<v){M=!1;break}if(M){h=d;break}}if(h)u.push(h);else break}u.length<f.length&&(v>1?v--:p--)}if(u.length<f.length)for(const m of e){if(u.length>=f.length)break;u.some(g=>g.x===m.x&&g.y===m.y&&g.z===m.z)||u.push(m)}for(let m=0;m<f.length&&m<u.length;m++){const g=f[m],h=u[m];g.x=h.x,g.y=h.y,g.z=h.z,g.visualX=h.x,g.visualY=h.y,g.visualZ=h.z,g.lastPos={x:h.x,y:h.y,z:h.z},g.state="WANDERING",g.visitedNodes.clear(),g.visitedNodes.add(`${h.x},${h.y},${h.z}`),g.history=[]}this.suppressWakeHuntersBanner||this.ui.showInfoBanner(zt("msgVoidHuntersDetected")),this.suppressWakeHuntersBanner=!1,this.staticMapCacheDirty=!0,this.isMap3DActive&&this.build3DMap()}getExitPos(){for(let t=0;t<this.mazeGen.size;t++)for(let e=0;e<this.mazeGen.size;e++)for(let i=0;i<this.mazeGen.size;i++)if(this.maze.get(t,e,i)===this.mazeGen.TYPES.EXIT)return{x:t,y:e,z:i};return{x:1,y:1,z:1}}triggerSave(){ns(this),this.hasSavePoint=!0,this.lastSavePos={x:this.player.x,y:this.player.y,z:this.player.z},this.ui.showSavingIndicator()}triggerVictory(){this.isGameOver=!0,al();const t=this.getMapVisitedPercentage();this.ui.showVictory(t,this.deathsCount,this.degree,this.elapsedTime,this.manaCollected,this.totalMana)}triggerDeath(){this.isGameOver=!0,this.ui.showDeath(this.hasSavePoint)}collectKey(t,e,i){if(this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${t},${e},${i}`),this.keysCollected++,this.staticMapCacheDirty=!0,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.ui.showInfoBanner(zt("msgKeySecured",{collected:this.keysCollected,total:this.totalKeys})),this.keysCollected===this.totalKeys&&(this.ui.showInfoBanner(zt("msgExitUnlocked")),this.exitMesh)){this.exitMesh.material.color.setHex(q.COLORS.THREE_EXIT),this.exitMesh.material.emissive.setHex(q.COLORS.THREE_EXIT),this.exitMesh.material.emissiveIntensity=.5;const n=this.exitMesh.children[0];n&&this.exitMesh.remove(n)}}collectMana(t,e,i){this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${t},${e},${i}`),this.manaCollected++,this.staticMapCacheDirty=!0,this.ui.updateManaHUD(this.manaCollected,this.totalMana),this.ui.showInfoBanner(zt("msgManaSecured",{collected:this.manaCollected,total:this.totalMana}))}triggerLockedExitWarning(){const t=Date.now();if(!this.lastLockedWarningTime||t-this.lastLockedWarningTime>1500){this.lastLockedWarningTime=t;const e=this.totalKeys-this.keysCollected;this.ui.showInfoBanner(zt("msgKeysRemaining",{count:e}))}}restoreFromSave(t){this.seed=t.seed,am(this.mazeGen,t.matrix),this.player.x=t.player.x,this.player.y=t.player.y,this.player.z=t.player.z,this.player.dir=t.player.dir;for(let n=0;n<this.hunters.length&&n<t.hunters.length;n++)sm(this.hunters[n],t.hunters[n]);this.discoveredTeleports=new Set(t.discoveredTeleports),this.inactiveTeleportPos=t.inactiveTeleportPos,this.teleportCooldownTicks=t.teleportCooldownTicks,this.keysCollected=t.keysCollected!==void 0?t.keysCollected:0,this.totalKeys=t.totalKeys!==void 0?t.totalKeys:q.getHunterCount(this.degree)*2,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.manaCollected=t.manaCollected!==void 0?t.manaCollected:0,this.totalMana=t.totalMana!==void 0?t.totalMana:0,this.ui.updateManaHUD(this.manaCollected,this.totalMana),this.totalPathfinders=t.totalPathfinders!==void 0?t.totalPathfinders:q.getPathfinderCount(this.degree),this.pathfindersRemaining=t.pathfindersRemaining!==void 0?t.pathfindersRemaining:this.totalPathfinders,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders);const e=this.degree>=12?10:this.degree>=8?20:0,i=this.getMapVisitedPercentage();this.pathfinderRewardsGranted=t.pathfinderRewardsGranted!==void 0?t.pathfinderRewardsGranted:e>0?Math.floor(i/e):0,this.revealedPathSet=new Set(t.revealedPathSet),this.mapCompletion100Triggered=t.mapCompletion100Triggered||!1,this.dialogueUpTriggered=t.dialogueUpTriggered||!1,this.dialogueDownTriggered=t.dialogueDownTriggered||!1,this.dialogueWhichWayTriggered=t.dialogueWhichWayTriggered||!1,this.dialogueDetectedTriggered=t.dialogueDetectedTriggered||!1,this.deathsCount=t.deathsCount!==void 0?t.deathsCount:0,this.elapsedTime=t.elapsedTime!==void 0?t.elapsedTime:0,this.populateVisitedCells(),this.lastSavePos={x:t.player.x,y:t.player.y,z:t.player.z},this.hunterOnSameFloorDetected=t.hunterOnSameFloorDetected||!1,this.hasSavePoint=!0,this.lastPlayerCell={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.populateFullyRevealedCells(this.player.z),this.exitPathfinderUnlocked=this.checkExitNeighborVisited()}checkHunterCollision(){if(this.deathAnimation&&this.deathAnimation.active)return;const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=Math.floor(this.mazeGen.startPos.x),a=Math.floor(this.mazeGen.startPos.y),o=this.mazeGen.startPos.z;if(!(t===n&&e===a&&i===o)){for(const r of this.hunters)if(r.state!=="SLEEP"&&r.x===t&&r.y===e&&r.z===i){r.visualX=r.x,r.visualY=r.y,r.visualZ=r.z,this.isGameOver=!0,this.deathsCount++,this.hideGameUI(),this.ui.showInfoBanner(zt("msgKeyDropped")),this.deathAnimation={active:!0,hunter:r,playerPos:{x:this.player.x,y:this.player.y,z:this.player.z},elapsed:0,duration:1.8,screenFilled:!1,reversing:!1,delayElapsed:0,delayDuration:1.5,glitchElapsed:0,glitchDuration:1.5,uiFade:0,uiTriggered:!1};return}}}hideGameUI(){this.ui.hideGameUI(),this.ui.hidePause(),this.canvas.classList.remove("hunted-map-effect"),this.isMap3DActive=!1}initThree(){this.scene=new Bp,this.camera=new Fe(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new Qo({antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.appendChild(this.renderer.domElement),this.controls=new Wp(this.camera,this.renderer.domElement),this.controls.enableDamping=!0}init(t=null){this.handleKeyDownExtra=c=>{const l=c.key.toLowerCase();if(l==="escape"){if(this.isMap3DActive){this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D(),c.preventDefault();return}this.togglePause();return}if(!this.isPaused&&(l==="m"&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D()),l==="z"&&this.toggleZoom(),this.isMap3DActive&&!this.isIntroPlaying)){if(this.isTeleportMode){if(this.teleportConfirmModalActive){if((l==="a"||l==="arrowleft"||l==="d"||l==="arrowright")&&(this.teleportModalSelection=this.teleportModalSelection==="go"?"cancel":"go",c.preventDefault()),l==="enter"||l===" "||l==="y"){if(this.teleportModalSelection==="go"&&this.selectedTeleportIndex!==null){const f=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(f.x,f.y,f.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;c.preventDefault()}(l==="escape"||l==="backspace")&&(this.teleportConfirmModalActive=!1,c.preventDefault());return}const u=this.getSelectableTeleportIndices();if(u.length>0){let f=u.indexOf(this.selectedTeleportIndex);if(l==="a"||l==="arrowleft"){f=(f-1+u.length)%u.length,this.selectedTeleportIndex=u[f];const p=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=p.z,this.mapCursor={x:p.x,y:p.y,z:p.z},c.preventDefault()}if(l==="d"||l==="arrowright"){f=(f+1)%u.length,this.selectedTeleportIndex=u[f];const p=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=p.z,this.mapCursor={x:p.x,y:p.y,z:p.z},c.preventDefault()}if((l==="enter"||l===" "||l==="y")&&this.selectedTeleportIndex!==null){const p=this.allTeleports[this.selectedTeleportIndex],v=Math.floor(this.player.x),m=Math.floor(this.player.y),g=this.player.z,h=p&&p.x===v&&p.y===m&&p.z===g;p&&!h&&(this.teleportTo(p.x,p.y,p.z),this.toggleTeleportMap(!1)),c.preventDefault()}}(l==="escape"||l==="backspace")&&(this.toggleTeleportMap(!1),c.preventDefault());return}if((l==="q"||l==="pagedown")&&(this.activeMapFloor-2>=1&&(this.activeMapFloor-=2),c.preventDefault()),(l==="e"||l==="pageup")&&(this.activeMapFloor+2<=this.mazeGen.size-2&&(this.activeMapFloor+=2),c.preventDefault()),(l==="a"||l==="arrowleft")&&(this.navigateCursor("left"),c.preventDefault()),(l==="d"||l==="arrowright")&&(this.navigateCursor("right"),c.preventDefault()),(l==="w"||l==="arrowup")&&(this.navigateCursor("up"),c.preventDefault()),(l==="s"||l==="arrowdown")&&(this.navigateCursor("down"),c.preventDefault()),l==="enter"||l===" "||l==="y"){const u=this.mapCursor.x,f=this.mapCursor.y,p=this.mapCursor.z;this.getInteractiveElements(this.activeMapFloor).some(g=>g.x===u&&g.y===f&&g.z===p)&&this.triggerPathReveal(u,f,p),c.preventDefault()}}},this.handleResize=()=>this.resize(),this.handleKeyboardDetection=()=>{this.lastInputDevice!=="keyboard"&&(this.lastInputDevice="keyboard",this.ui.updateControlsHint("keyboard",this.mazeGen.size>11)),this.isMouseOrTouchDetected=!1},window.addEventListener("keydown",this.handleKeyDownExtra),window.addEventListener("keydown",this.handleKeyboardDetection),window.addEventListener("resize",this.handleResize);const e=document.getElementById("mobile-zoom-btn");e&&(e.onclick=c=>{c.stopPropagation(),this.toggleZoom()}),this.ui.uiMobileUp&&(this.ui.uiMobileUp.onclick=()=>this.changeFloor(2)),this.ui.uiMobileDown&&(this.ui.uiMobileDown.onclick=()=>this.changeFloor(-2)),this.ui.uiMobileMap&&(this.ui.uiMobileMap.onclick=()=>{if(this.isMap3DActive){this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D();return}const c=Math.floor(this.player.x),l=Math.floor(this.player.y),u=this.player.z,f=this.maze.get(c,l,u)===this.mazeGen.TYPES.TELEPORT,p=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===c&&this.inactiveTeleportPos.y===l&&this.inactiveTeleportPos.z===u;f&&!p?this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(zt("msgNoOtherActiveTeleport")):this.toggleMap3D()});let i=!1,n=0,a=0;this.handlePointerDown=c=>{i=!1,n=c.clientX,a=c.clientY},this.handlePointerUp=c=>{const l=c.clientX-n,u=c.clientY-a;Math.sqrt(l*l+u*u)>5&&(i=!0)},this.handleCanvasClick=c=>{i||this.onCanvasClick(c)},this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerup",this.handlePointerUp),this.renderer.domElement.addEventListener("click",this.handleCanvasClick),this.resize(),this.updateFloorUI(),this.hideCanvasInstant(),t?(this.restoreFromSave(t),this.playContinueAnimation()):this.startStorytelling(),this.loop();const o=this.mazeGen.size,r=document.getElementById("mobile-zoom-btn");o<=11?r&&r.classList.add("hidden"):r&&r.classList.remove("hidden"),this.ui.updateControlsHint(this.lastInputDevice,o>11)}hideCanvasInstant(){const t=document.getElementById("map-area-container"),e=document.getElementById("left-hud-panel"),i=document.getElementById("right-hud-panel"),n=document.getElementById("bottom-hud-container");t&&(t.style.transition="none",t.classList.remove("intro-reveal"),t.classList.add("intro-hidden"),t.offsetHeight,t.style.transition=""),e&&(e.style.transition="none",e.classList.remove("intro-reveal"),e.classList.add("intro-hidden"),e.offsetHeight,e.style.transition=""),i&&(i.style.transition="none",i.classList.remove("intro-reveal"),i.classList.add("intro-hidden"),i.offsetHeight,i.style.transition=""),n&&(n.style.transition="none",n.classList.remove("intro-reveal"),n.classList.add("intro-hidden"),n.offsetHeight,n.style.transition="")}drawElevator2D(t,e,i,n,a,o,r,c,l=!1,u=0){const f=e===Math.floor(r)&&i===Math.floor(c);if(f){const h=.85+.15*Math.sin(Date.now()/150);t.save(),t.globalAlpha=h}const p=a&&this.maze.get(e,i,u+1)===this.mazeGen.TYPES.ELEVATOR_VISITED,v=o&&this.maze.get(e,i,u-1)===this.mazeGen.TYPES.ELEVATOR_VISITED;if(l)if(a&&o){let h=!1,d=!1;if(this.activePathReveal){const y=this.activePathReveal.findIndex(T=>T.x===e&&T.y===i&&T.z===u);if(y!==-1&&y<this.activePathReveal.length-1){const T=this.activePathReveal[y+1];T.z>u&&(h=!0),T.z<u&&(d=!0)}}!h&&!d&&(h=this.revealedPathSet.has(`${e},${i},${u+1}`)||this.revealedPathSet.has(`${e},${i},${u+2}`),d=this.revealedPathSet.has(`${e},${i},${u-1}`)||this.revealedPathSet.has(`${e},${i},${u-2}`));const M=h||!h&&!d,_=d||!h&&!d;t.fillStyle=M?q.COLORS.REVEALED_PATH:p?q.COLORS.NEON_UP:q.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n/2),t.fillStyle=_?q.COLORS.REVEALED_PATH:v?q.COLORS.NEON_DOWN:q.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n+n/2,n,n/2)}else t.fillStyle=q.COLORS.REVEALED_PATH,t.fillRect(e*n,i*n,n,n);else a&&o?(t.fillStyle=p?q.COLORS.NEON_UP:q.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n/2),t.fillStyle=v?q.COLORS.NEON_DOWN:q.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n+n/2,n,n/2)):a?(t.fillStyle=p?q.COLORS.NEON_UP:q.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n)):(t.fillStyle=v?q.COLORS.NEON_DOWN:q.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n,n,n));const m=e*n+n/2,g=i*n+n/2;if(t.fillStyle="#000000",a&&o){const h=n*.28,d=g-n/5,M=g+n/5;t.beginPath(),t.moveTo(m,d-h/2),t.lineTo(m-h*.6,d+h/2),t.lineTo(m+h*.6,d+h/2),t.closePath(),t.fill(),t.beginPath(),t.moveTo(m,M+h/2),t.lineTo(m-h*.6,M-h/2),t.lineTo(m+h*.6,M-h/2),t.closePath(),t.fill()}else if(a){const h=n*.45;t.beginPath(),t.moveTo(m,g-h/2),t.lineTo(m-h*.6,g+h/2),t.lineTo(m+h*.6,g+h/2),t.closePath(),t.fill()}else{const h=n*.45;t.beginPath(),t.moveTo(m,g+h/2),t.lineTo(m-h*.6,g-h/2),t.lineTo(m+h*.6,g-h/2),t.closePath(),t.fill()}f&&t.restore()}drawCellShadow2D(t,e,i,n,a,o,r){if(o===4)return;const c=(p,v)=>p<0||p>=a||v<0||v>=a?!1:this.maze.get(p,v,r)===0&&(this.isNearVisited(p,v,r)||this.isAdjacentToStatue(p,v,r)),l=c(e,i+1),u=c(e+1,i),f=c(e+1,i+1);if(l||u||f){t.fillStyle="rgba(0, 0, 0, 0.4)";const p=n*q.SHADOW_SIZE_FACTOR;if(l&&t.fillRect(e*n,(i+1)*n-p,n,p),u){const v=l?n-p:n;t.fillRect((e+1)*n-p,i*n,p,v)}!l&&!u&&f&&t.fillRect((e+1)*n-p,(i+1)*n-p,p,p)}}updateRendererSize(){this.renderer&&(this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix())}resize(){const e=window.innerHeight>window.innerWidth?window.innerWidth*.82:window.innerHeight*.75;this.canvas.width=e,this.canvas.height=e,this.staticMapCacheDirty=!0,this.updateRendererSize()}getMapVisitedPercentage(){let t=0,e=0;const i=this.mazeGen.size,n=this.mazeGen.TYPES;for(let a=0;a<i;a++)for(let o=0;o<i;o++)for(let r=0;r<i;r++){const c=this.maze.get(a,o,r);if(c===n.WALL||c===n.EXIT||c===n.STATUE)continue;t++,(c===n.VISITED||c===n.START||c===n.ELEVATOR_VISITED||c===n.TELEPORT&&this.discoveredTeleports.has(`${a},${o},${r}`))&&e++}return t===0?0:Math.floor(e/t*100)}updateFloorUI(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=i+1<this.mazeGen.size&&this.maze.get(t,e,i+1)!==this.mazeGen.TYPES.WALL,a=i-1>=0&&this.maze.get(t,e,i-1)!==this.mazeGen.TYPES.WALL;this.ui.updateFloor(i,n,a);const o=this.getMapVisitedPercentage();this.ui.updateVisitedPercent(o),o===100&&!this.mapCompletion100Triggered&&(this.ui.showInfoBanner(zt("msgWorldSaved")),this.mapCompletion100Triggered=!0),this.checkPathfinderRewards(o)}checkPathfinderRewards(t){const e=this.degree>=12?10:this.degree>=8?20:0;if(e===0)return;this.pathfinderRewardsGranted===void 0&&(this.pathfinderRewardsGranted=0);const i=Math.floor(t/e);if(i>this.pathfinderRewardsGranted){const n=i-this.pathfinderRewardsGranted;this.pathfindersRemaining+=n,this.totalPathfinders+=n,this.pathfinderRewardsGranted=i,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),this.ui.showInfoBanner(zt("msgFoundPathfinder")),ns(this)}}getTeleportCandidates(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z;return Array.from(this.discoveredTeleports).map(n=>{const[a,o,r]=n.split(",").map(Number);return{x:a,y:o,z:r}}).filter(n=>!(n.x===t&&n.y===e&&n.z===i||this.inactiveTeleportPos&&this.inactiveTeleportPos.x===n.x&&this.inactiveTeleportPos.y===n.y&&this.inactiveTeleportPos.z===n.z))}getSelectableTeleportIndices(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z;return this.allTeleports.map((n,a)=>({t:n,idx:a})).filter(n=>{const a=`${n.t.x},${n.t.y},${n.t.z}`,o=this.discoveredTeleports.has(a),r=this.inactiveTeleportPos&&n.t.x===this.inactiveTeleportPos.x&&n.t.y===this.inactiveTeleportPos.y&&n.t.z===this.inactiveTeleportPos.z,c=n.t.x===t&&n.t.y===e&&n.t.z===i;return o&&!r&&!c}).map(n=>n.idx)}updateGamepad(t){const e=navigator.getGamepads?navigator.getGamepads():[],i=e[0]||e.find(g=>g!==null);if(!i)return;const n=.25;(Math.abs(i.axes[0])>n||Math.abs(i.axes[1])>n||i.axes[2]!==void 0&&Math.abs(i.axes[2])>n||i.axes[3]!==void 0&&Math.abs(i.axes[3])>n||i.buttons.some(g=>g.pressed))&&(this.isMouseOrTouchDetected=!1,this.lastInputDevice!=="gamepad"&&(this.lastInputDevice="gamepad",this.ui.updateControlsHint("gamepad",this.mazeGen.size>11)));const o=i.axes[0],r=i.axes[1];let c=o<-n,l=o>n,u=r<-n,f=r>n;if(i.buttons[12]&&i.buttons[12].pressed&&(u=!0),i.buttons[13]&&i.buttons[13].pressed&&(f=!0),i.buttons[14]&&i.buttons[14].pressed&&(c=!0),i.buttons[15]&&i.buttons[15].pressed&&(l=!0),c?this.input.keys.arrowleft=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowleft=!1),l?this.input.keys.arrowright=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowright=!1),u?this.input.keys.arrowup=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowup=!1),f?this.input.keys.arrowdown=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowdown=!1),!this.prevGamepadButtons){this.prevGamepadButtons=i.buttons.map(g=>g.pressed);return}const p=g=>this.prevGamepadButtons[g],v=g=>i.buttons[g]&&i.buttons[g].pressed,m=g=>v(g)&&!p(g);if(this.isStoryActive){if(m(9))this.skipStory();else if(!this.isPreloadingActive){for(let g=0;g<i.buttons.length;g++)if(g!==9&&m(g)){this.triggerAdvanceStory();break}}this.prevGamepadButtons=i.buttons.map(g=>g.pressed);return}if(m(9)){this.togglePause(),this.prevGamepadButtons=i.buttons.map(g=>g.pressed);return}if(this.isPaused){this.prevGamepadButtons=i.buttons.map(g=>g.pressed);return}if(this.isMap3DActive&&!this.isIntroPlaying){const g=v(7),h=v(6);if(g||h){const T=this.mazeGen.size;let S=window.innerWidth*.7/T;S=Math.max(20,Math.min(48,S));const A=S*this.mapZoom,O=A/2,x=A/4,b=O*5,F=window.innerWidth/2+this.mapPanOffsetX,z=window.innerHeight/2+this.mapPanOffsetY,W=this.mapCursor.x,C=this.mapCursor.y,D=this.mapCursor.z,N=this.visualActiveFloor,H=(W-C)*O+F,Y=(W+C)*x-(D-N)*b+z,X=this.mapZoom,J=1.025;let nt=g?X*J:X/J;if(nt=Math.max(.5,Math.min(4,nt)),nt!==X){const ot=nt/X;this.mapPanOffsetX=H-(H-(window.innerWidth/2+this.mapPanOffsetX))*ot-window.innerWidth/2,this.mapPanOffsetY=Y-(Y-(window.innerHeight/2+this.mapPanOffsetY))*ot-window.innerHeight/2,this.mapZoom=nt}}const d=c&&(!this.prevGamepadStick||!this.prevGamepadStick.left),M=l&&(!this.prevGamepadStick||!this.prevGamepadStick.right),_=u&&(!this.prevGamepadStick||!this.prevGamepadStick.up),y=f&&(!this.prevGamepadStick||!this.prevGamepadStick.down);if(this.prevGamepadStick={left:c,right:l,up:u,down:f},this.isTeleportMode){if(this.teleportConfirmModalActive){if((d||m(14)||M||m(15))&&(this.teleportModalSelection=this.teleportModalSelection==="go"?"cancel":"go"),m(0)||m(3)||m(2))if(this.teleportModalSelection==="go"){const T=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(T.x,T.y,T.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;m(1)&&(this.teleportConfirmModalActive=!1)}else{const T=this.getSelectableTeleportIndices();if(T.length>0){let S=T.indexOf(this.selectedTeleportIndex);if(d||m(14)){S=(S-1+T.length)%T.length,this.selectedTeleportIndex=T[S];const A=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=A.z,this.mapCursor={x:A.x,y:A.y,z:A.z}}if(M||m(15)){S=(S+1)%T.length,this.selectedTeleportIndex=T[S];const A=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=A.z,this.mapCursor={x:A.x,y:A.y,z:A.z}}if(m(0)||m(3)||m(2)){const A=this.allTeleports[this.selectedTeleportIndex],O=Math.floor(this.player.x),x=Math.floor(this.player.y),b=this.player.z,F=A&&A.x===O&&A.y===x&&A.z===b;A&&!F&&(this.teleportTo(A.x,A.y,A.z),this.toggleTeleportMap(!1))}}(m(1)||m(8))&&this.toggleTeleportMap(!1)}this.prevGamepadButtons=i.buttons.map(T=>T.pressed);return}if((d||m(14))&&this.navigateCursor("left"),(M||m(15))&&this.navigateCursor("right"),(_||m(12))&&this.navigateCursor("up"),(y||m(13))&&this.navigateCursor("down"),(m(0)||m(4))&&this.activeMapFloor-2>=1&&(this.activeMapFloor-=2),m(5)&&this.activeMapFloor+2<=this.mazeGen.size-2&&(this.activeMapFloor+=2),m(3)||m(2)){const T=this.mapCursor.x,S=this.mapCursor.y,A=this.mapCursor.z;this.getInteractiveElements(this.activeMapFloor).some(b=>b.x===T&&b.y===S&&b.z===A)&&this.triggerPathReveal(T,S,A)}(m(1)||m(8))&&this.toggleMap3D(),this.prevGamepadButtons=i.buttons.map(T=>T.pressed);return}if(m(0)){if(this.isTeleportMode){const h=this.getTeleportCandidates()[this.gamepadTeleportSelectedIndex];h&&this.teleportTo(h.x,h.y,h.z)}else if(!this.isMap3DActive){const g=Math.floor(this.player.x),h=Math.floor(this.player.y),d=this.player.z,M=d>0&&this.maze.get(g,h,d-1)!==0,y=this.maze.get(g,h,d)===this.mazeGen.TYPES.TELEPORT,T=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===g&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===d;(!(y&&this.discoveredTeleports.has(`${g},${h},${d}`))||T)&&M&&this.changeFloor(-2)}}if(m(1)&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleZoom()),m(2)&&!this.isTeleportMode&&!this.isMap3DActive){const g=Math.floor(this.player.x),h=Math.floor(this.player.y),d=this.player.z,_=this.maze.get(g,h,d)===this.mazeGen.TYPES.TELEPORT,y=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===g&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===d;_&&this.discoveredTeleports.has(`${g},${h},${d}`)&&!y&&(this.discoveredTeleports.size>=2?(this.toggleTeleportMap(!0),this.gamepadTeleportSelectedIndex=0):this.ui.showInfoBanner(zt("msgNoOtherActiveTeleport")))}if(m(3)&&!this.isTeleportMode&&!this.isMap3DActive){const g=Math.floor(this.player.x),h=Math.floor(this.player.y),d=this.player.z,M=d<this.mazeGen.size-1&&this.maze.get(g,h,d+1)!==0,y=this.maze.get(g,h,d)===this.mazeGen.TYPES.TELEPORT,T=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===g&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===d;(!(y&&this.discoveredTeleports.has(`${g},${h},${d}`))||T)&&M&&this.changeFloor(2)}if(m(8)&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D()),this.isTeleportMode){const g=m(4)||m(14),h=m(5)||m(15);if(g||h){const d=this.getTeleportCandidates();d.length>0&&(g?this.gamepadTeleportSelectedIndex=(this.gamepadTeleportSelectedIndex-1+d.length)%d.length:this.gamepadTeleportSelectedIndex=(this.gamepadTeleportSelectedIndex+1)%d.length)}}if(this.isMap3DActive&&this.controls){const g=i.axes[2],h=i.axes[3],d=i.buttons[7]?i.buttons[7].value:0,M=i.buttons[6]?i.buttons[6].value:0,_=.15,y=.15,T=(q.ROT_SPEED!==void 0?q.ROT_SPEED:2)*t,S=20*t,A=Math.abs(g)>_||Math.abs(h)>_,O=d>y||M>y;if(A||O){const x=new K().copy(this.camera.position).sub(this.controls.target),b=new ya().setFromVector3(x);if(Math.abs(g)>_&&(b.theta-=g*T),Math.abs(h)>_){b.phi-=h*T;const W=this.controls.minPolarAngle||0,C=this.controls.maxPolarAngle||Math.PI;b.phi=Math.max(W,Math.min(C,b.phi))}d>y&&(b.radius-=d*S),M>y&&(b.radius+=M*S);const F=this.controls.minDistance||2,z=this.controls.maxDistance||100;b.radius=Math.max(F,Math.min(z,b.radius)),b.makeSafe(),x.setFromSpherical(b),this.camera.position.copy(this.controls.target).add(x),this.controls.update()}}this.prevGamepadButtons=i.buttons.map(g=>g.pressed)}queueNotification(t){this.notificationQueue.push(t)}updateNotification(t){if(!this.activeNotification){if(this.notificationQueue.length>0){const i=this.notificationQueue.shift();this.activeNotification={text:i,displayText:"",state:"OPENING",widthProgress:0,typeTimer:0,charIndex:0,waitTimer:0,closeProgress:1}}return}const e=this.activeNotification;e.state==="OPENING"?(e.widthProgress+=t/.15,e.widthProgress>=1&&(e.widthProgress=1,e.state="TYPING")):e.state==="TYPING"?(e.typeTimer+=t,e.typeTimer>=.025&&(e.typeTimer=0,e.charIndex++,e.displayText=e.text.substring(0,e.charIndex),e.charIndex>=e.text.length&&(e.state="WAITING",e.waitTimer=0))):e.state==="WAITING"?(this.isZoomTransitionActive||(e.waitTimer+=t),e.waitTimer>=1&&(e.state="CLOSING",e.closeProgress=1)):e.state==="CLOSING"&&(e.closeProgress-=t/.15,e.closeProgress<=0&&(e.closeProgress=0,this.activeNotification=null))}update(t){if(this.isGameOver||this.isDestroyed||!t)return;if(!this.isPaused&&!this.isIntroPlaying&&!this.isStoryActive&&(this.elapsedTime+=t),this.isStoryActive){this.updateGamepad(t),this.updateStory(t);return}if(this.isZoomTransitionActive&&(this.zoomTransitionTimer-=t,this.zoomTransitionTimer<=0&&(this.isZoomTransitionActive=!1,this.zoomTransitionTimer=0)),this.updateNotification(t),this.updateGamepad(t),this.isPaused)return;this.isIntroPlaying||this.hunters.some(o=>o.state!=="SLEEP"&&o.z===this.player.z)&&(this.hunterOnSameFloorDetected||(this.ui.showInfoBanner(zt("msgDidYouHearThat")),this.hunterOnSameFloorDetected=!0)),this.hunters.some(a=>a.state==="SLEEP")&&this.getMapVisitedPercentage()>=10&&this.wakeHunters();const i=1e3/q.HUNTER_SPEED*t;for(const a of this.hunters)a.visualX===null&&(a.visualX=a.x),a.visualY===null&&(a.visualY=a.y),a.visualZ===null&&(a.visualZ=a.z),!(a.x===null||a.y===null||a.z===null)&&(a.visualX=aa(a.visualX,a.x,i),a.visualY=aa(a.visualY,a.y,i),a.visualZ=aa(a.visualZ,a.z,i*2),a.generateCloudTexture(t));if(this.isMap3DActive){this.controls&&this.controls.update();const a=this.mazeGen.size,o=this.isTeleportMode?.25:1;for(const r of this.hunterMeshes){const c=r.hunter,l=r.mesh;if(c.visualX===null||c.visualZ===null||c.visualY===null)continue;l.position.set(c.visualX-a/2,(c.visualZ-a/2)*this.vScale,c.visualY-a/2);const u=c.jellyTime,f=1+Math.sin(u*1.2)*.07,p=1+Math.cos(u*.8)*.07,v=1+Math.sin(u*1.5)*.07;r.coreMesh&&(r.coreMesh.scale.set(f,p,v),r.coreMesh.material&&(r.coreMesh.material.emissiveIntensity=(.8+.2*Math.sin(u*3)+(Math.random()<.1?(Math.random()-.5)*.4:0))*o)),r.particles&&r.particles.forEach(M=>{const _=M.userData;_.angle+=_.speed*t;const y=Math.cos(_.angle)*_.radius,T=Math.sin(_.angle)*_.radius,S=Math.sin(_.angle*2+_.phaseY)*.25;let A=0,O=0,x=0;Math.random()<.15?(A=(Math.random()-.5)*.12,O=(Math.random()-.5)*.12,x=(Math.random()-.5)*.12,M.scale.set(1.4+Math.random()*.4,.6+Math.random()*.3,1.4+Math.random()*.4)):M.scale.set(1,1,1),M.position.set(y+A,S+O,T+x)});const m=c.x-c.visualX,g=c.y-c.visualY,h=Math.sqrt(m*m+g*g),d=Math.max(0,Math.min(1,1-h));if(c.lastPos&&(c.lastPos.x!==c.x||c.lastPos.y!==c.y)){r.trail1.position.set(c.lastPos.x-a/2,(c.lastPos.z-a/2)*this.vScale,c.lastPos.y-a/2),r.trail1.visible=!0;const M=c.jellyTime-.2,_=.95-d*.47,y=_*(1+Math.sin(M*1.2)*.07),T=_*(1+Math.cos(M*.8)*.07),S=_*(1+Math.sin(M*1.5)*.07);r.trail1.scale.set(y,T,S),r.trail1.material&&(r.trail1.material.opacity=(.4-d*.2)*o)}else r.trail1.visible=!1;if(c.history&&c.history.length===2){const M=c.history[0];r.trail2.position.set(M.x-a/2,(M.z-a/2)*this.vScale,M.y-a/2);const _=.48*(1-d);if(_>.02){r.trail2.visible=!0;const y=c.jellyTime-.4,T=_*(1+Math.sin(y*1.2)*.07),S=_*(1+Math.cos(y*.8)*.07),A=_*(1+Math.sin(y*1.5)*.07);r.trail2.scale.set(T,S,A),r.trail2.material&&(r.trail2.material.opacity=.2*(1-d)*o)}else r.trail2.visible=!1}else r.trail2.visible=!1}if(this.keyMeshes)for(const r of this.keyMeshes)r.rotation.y+=1.5*t,r.rotation.x+=.5*t;if(this.isTeleportMode&&this.teleportMeshes&&this.gamepadTeleportSelectedIndex!==void 0){const c=this.getTeleportCandidates()[this.gamepadTeleportSelectedIndex];this.teleportMeshes.forEach(l=>{const{gridX:u,gridY:f,gridZ:p}=l.userData;if(c&&u===c.x&&f===c.y&&p===c.z){const m=1.3+.25*Math.sin(Date.now()/100);l.scale.set(m,m,m),l.material&&l.material.emissive&&(l.material.emissive.setHex(16755200),l.material.emissiveIntensity=3.5)}else{const m=u===Math.floor(this.player.x)&&f===Math.floor(this.player.y)&&p===this.player.z,g=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===u&&this.inactiveTeleportPos.y===f&&this.inactiveTeleportPos.z===p;let h=1;m&&(h=1.4),l.scale.set(h,h,h),l.material&&l.material.emissive&&(g?(l.material.emissive.setHex(4473924),l.material.emissiveIntensity=0):m?(l.material.emissive.setHex(65535),l.material.emissiveIntensity=3):(l.material.emissive.setHex(q.COLORS.THREE_TELEPORT),l.material.emissiveIntensity=2.5))}})}}if(!this.isMap3DActive&&!this.isZoomTransitionActive){let a=0,o=0;const l=1e3/q.HUNTER_SPEED*q.MOVE_SPEED_FACTOR*t;let u=0,f=0;if(this.input.touchMoveVector?(u=this.input.touchMoveVector.x,f=this.input.touchMoveVector.y):((this.input.keys.w||this.input.keys.arrowup)&&(f-=1),(this.input.keys.s||this.input.keys.arrowdown)&&(f+=1),(this.input.keys.a||this.input.keys.arrowleft)&&(u-=1),(this.input.keys.d||this.input.keys.arrowright)&&(u+=1)),u!==0||f!==0){const y=Math.sqrt(u*u+f*f);a=u/y*l,o=f/y*l,this.player.dir=Math.atan2(o,a)}let p=!1;if(a!==0||o!==0){p=!0;const y=.01,T=Math.abs(a)>y,S=Math.abs(o)>y;T&&S?(this.playerSide=a>0?"right":"left",this.playerVertical=o>0?"down":"up"):T?this.playerSide=a>0?"right":"left":S&&(this.playerVertical=o>0?"down":"up")}if(p?(this.playerWalkCycle=(this.playerWalkCycle||0)+t*18,this.playerSquashTargetX=1+Math.sin(this.playerWalkCycle)*.15,this.playerSquashTargetY=1-Math.sin(this.playerWalkCycle)*.15):(this.playerSquashTargetX=1,this.playerSquashTargetY=1),this.playerSquashX=this.playerSquashX||1,this.playerSquashY=this.playerSquashY||1,this.playerSquashX+=(this.playerSquashTargetX-this.playerSquashX)*.25,this.playerSquashY+=(this.playerSquashTargetY-this.playerSquashY)*.25,a!==0||o!==0){const y=Math.floor(this.player.x),T=Math.floor(this.player.y),S=this.player.x+a,A=this.player.y+o,O=(X,J,nt)=>{const ot=this.maze.get(X,J,nt);return ot===this.mazeGen.TYPES.WALL||ot===this.mazeGen.TYPES.STATUE?!1:ot===this.mazeGen.TYPES.EXIT&&this.keysCollected<this.totalKeys?(this.triggerLockedExitWarning(),!1):!0},x=q.PLAYER_COLLISION_RADIUS,b=q.PLAYER_COLLISION_OFFSET_X||0,F=q.PLAYER_COLLISION_OFFSET_Y||0,z=(X,J,nt)=>{const ot=Math.floor(X+b-x),Z=Math.floor(X+b+x),at=Math.floor(J+F-x),dt=Math.floor(J+F+x);for(let L=ot;L<=Z;L++)for(let G=at;G<=dt;G++)if(L<0||L>=this.mazeGen.size||G<0||G>=this.mazeGen.size||!O(L,G,nt))return!1;return!0};z(S,this.player.y,this.player.z)&&(this.player.x=S),z(this.player.x,A,this.player.z)&&(this.player.y=A);const W=Math.floor(this.player.x),C=Math.floor(this.player.y),D=this.player.z;if(W!==y||C!==T){const X=this.maze.get(y,T,D);if(X===this.mazeGen.TYPES.VISITED||X===this.mazeGen.TYPES.START||X===this.mazeGen.TYPES.TELEPORT){const nt=D+1<this.mazeGen.size&&this.maze.get(W,C,D+1)!==this.mazeGen.TYPES.WALL,ot=D-1>=0&&this.maze.get(W,C,D-1)!==this.mazeGen.TYPES.WALL;nt&&ot?this.dialogueWhichWayTriggered||(this.ui.showInfoBanner(zt("msgWhichWay")),this.dialogueWhichWayTriggered=!0):nt?this.dialogueUpTriggered||(this.ui.showInfoBanner(zt("msgElevatorUp")),this.dialogueUpTriggered=!0):ot&&(this.dialogueDownTriggered||(this.ui.showInfoBanner(zt("msgElevatorDown")),this.dialogueDownTriggered=!0))}}const H=(X,J,nt)=>{const ot=this.maze.get(X,J,nt);(ot===this.mazeGen.TYPES.PATH||ot===this.mazeGen.TYPES.KEY||ot===this.mazeGen.TYPES.MANA)&&(ot===this.mazeGen.TYPES.KEY?this.collectKey(X,J,nt):ot===this.mazeGen.TYPES.MANA?this.collectMana(X,J,nt):(this.maze.set(X,J,nt,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${X},${J},${nt}`)),this.staticMapCacheDirty=!0)};H(W,C,D),W!==y&&C!==T&&(H(W,T,D),H(y,C,D));const Y=this.maze.get(W,C,D);!this.exitPathfinderUnlocked&&this.checkExitNeighborVisited()&&(this.exitPathfinderUnlocked=!0,this.ui.showInfoBanner(zt("msgExitFound"))),Y===this.mazeGen.TYPES.EXIT&&this.triggerVictory()}if((a!==0||o!==0)&&(this.skipCellAnimations=!1),this.checkHunterCollision(),this.isGameOver)return;const v=Math.floor(this.player.x),m=Math.floor(this.player.y),g=this.player.z,h=this.maze.get(v,m,g)===this.mazeGen.TYPES.TELEPORT,d=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===v&&this.inactiveTeleportPos.y===m&&this.inactiveTeleportPos.z===g;if(v>=0&&v<this.mazeGen.size&&m>=0&&m<this.mazeGen.size){if(this.maze.get(v,m,g)===this.mazeGen.TYPES.PATH)this.maze.set(v,m,g,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${v},${m},${g}`),this.staticMapCacheDirty=!0;else if(h){const O=`${v},${m},${g}`;!(this.lastPlayerCell&&this.lastPlayerCell.x===v&&this.lastPlayerCell.y===m&&this.lastPlayerCell.z===g)&&!d&&(this.discoveredTeleports.add(O),this.staticMapCacheDirty=!0,this.triggerSave(),this.ui.showInfoBanner(zt("msgSafePointTeleport")))}const y=g<this.mazeGen.size-1&&this.maze.get(v,m,g+1)!==this.mazeGen.TYPES.WALL,T=g>0&&this.maze.get(v,m,g-1)!==this.mazeGen.TYPES.WALL,S=y||T;if(this.lastPlayerCell){const O=this.lastPlayerCell.x,x=this.lastPlayerCell.y,b=this.lastPlayerCell.z,F=b<this.mazeGen.size-1&&this.maze.get(O,x,b+1)!==this.mazeGen.TYPES.WALL,z=b>0&&this.maze.get(O,x,b-1)!==this.mazeGen.TYPES.WALL;if((F||z)&&(O!==v||x!==m||b!==g)){const D=`${O},${x},${b}`;this.revealedPathSet.has(D)&&(this.revealedPathSet.delete(D),this.staticMapCacheDirty=!0)}}const A=`${v},${m},${g}`;!S&&this.revealedPathSet.has(A)&&(this.revealedPathSet.delete(A),this.staticMapCacheDirty=!0)}h&&!d?(this.input.keys.e||this.input.keys.pageup||this.input.keys.q||this.input.keys.pagedown)&&(["e","q","pageup","pagedown"].forEach(y=>this.input.keys[y]=!1),this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(zt("msgNoOtherActiveTeleport"))):((this.input.keys.e||this.input.keys.pageup)&&this.changeFloor(2),(this.input.keys.q||this.input.keys.pagedown)&&this.changeFloor(-2)),(!this.lastPlayerCell||this.lastPlayerCell.x!==v||this.lastPlayerCell.y!==m||this.lastPlayerCell.z!==g)&&(this.staticMapCacheDirty=!0);const _=window.innerHeight>window.innerWidth;this.ui.updateMobileMapButton(h,!!d,_),this.updateFloorUI(),this.lastPlayerCell={x:v,y:m,z:g}}const n=performance.now();if(n-this.lastHunterMove>q.HUNTER_SPEED){if(this.lastHunterMove=n,this.teleportCooldownTicks>0&&(this.teleportCooldownTicks--,this.staticMapCacheDirty=!0,this.teleportCooldownTicks===0)){this.inactiveTeleportPos=null;for(const m of this.hunters){const g=this.maze.get(m.x,m.y,m.z);if(g===this.mazeGen.TYPES.VISITED||g===this.mazeGen.TYPES.START||g===this.mazeGen.TYPES.EXIT){const h=m.state;m.state="TRACKING",h!=="TRACKING"&&!this.dialogueDetectedTriggered&&(this.ui.showInfoBanner(zt("msgIWasDetected")),this.dialogueDetectedTriggered=!0)}else m.state="WANDERING",m.pathToTarget=[],m.visitedNodes.clear(),m.visitedNodes.add(`${m.x},${m.y},${m.z}`)}}let a=0,o=0;const r=this.hunters.some(m=>m.state==="SLEEP");for(const m of this.hunters){if(m.state==="SLEEP")continue;const g=m.state;m.move(this.player,this.maze,this.mazeGen.TYPES),m.state==="TRACKING"&&g!=="TRACKING"&&!this.dialogueDetectedTriggered&&(this.ui.showInfoBanner(zt("msgIWasDetected")),this.dialogueDetectedTriggered=!0),(m.state==="TRACKING"||m.state==="TELEPORT_TRACKING")&&a++;const h=m.z===this.player.z;let d=!1;if(h)d=!0;else{const M=Math.max(5,Math.floor(this.degree*1.2));Kp({x:m.x,y:m.y,z:m.z},{x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.maze,this.mazeGen.size,this.mazeGen.TYPES.WALL,M,this.mazeGen.startPos)<=M&&(d=!0)}if(d&&o++,this.checkHunterCollision(),this.isGameOver)return}const c=a>0;this.ui.updateHazardWarning(c,this.teleportCooldownTicks,this.isSafeMode,r),c?this.canvas.classList.add("hunted-map-effect"):this.canvas.classList.remove("hunted-map-effect"),this.ui.setNearbyWarning(o>0);let l=1/0;const u=Math.floor(this.player.x),f=Math.floor(this.player.y),p=this.player.z,v=this.hunters.filter(m=>m.state!=="SLEEP");for(const m of v){const g=qp({x:m.x,y:m.y,z:m.z},{x:u,y:f,z:p},this.maze,this.mazeGen.size,this.mazeGen.TYPES.WALL);g<l&&(l=g)}this.ui.updateProximeter(l,v.length,this.isGameOver)}}changeFloor(t){if(this.isGameOver||this.floorTransition)return;this.skipCellAnimations=!0;const e=Math.floor(this.player.x),i=Math.floor(this.player.y),n=this.player.z,a=n+1<this.mazeGen.size&&this.maze.get(e,i,n+1)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,n+1)!==this.mazeGen.TYPES.STATUE,o=n-1>=0&&this.maze.get(e,i,n-1)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,n-1)!==this.mazeGen.TYPES.STATUE;if(t>0&&a||t<0&&o){const r=n+t;if(r>=0&&r<this.mazeGen.size&&this.maze.get(e,i,r)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,r)!==this.mazeGen.TYPES.STATUE){const c=n+t/2;this.maze.get(e,i,c)!==this.mazeGen.TYPES.ELEVATOR_VISITED&&(this.maze.set(e,i,c,this.mazeGen.TYPES.ELEVATOR_VISITED),this.staticMapCacheDirty=!0);const l=`${e},${i},${c}`;this.revealedPathSet.delete(l);const u=document.createElement("canvas");u.width=this.canvas.width,u.height=this.canvas.height;const f=u.getContext("2d");this.renderMapToContext(f,this.player.z),this.player.x=e+q.PLAYER_START_X,this.player.y=i+q.PLAYER_START_Y%1,this.player.z=r,this.staticMapCacheDirty=!0,this.populateFullyRevealedCells(r),this.maze.get(e,i,r)===this.mazeGen.TYPES.PATH&&this.maze.set(e,i,r,this.mazeGen.TYPES.VISITED);const p=document.createElement("canvas");p.width=this.canvas.width,p.height=this.canvas.height;const v=p.getContext("2d");this.renderMapToContext(v,this.player.z),this.floorTransition={canvasOld:u,canvasNew:p,progress:0,duration:.4,delta:t},this.updateFloorUI(),this.draw2DMap(0),this.maze.get(e,i,r)===this.mazeGen.TYPES.EXIT&&this.triggerVictory()}}}toggleMap3D(){this.isMap3DActive=!this.isMap3DActive,this.isTeleportMode=!1;const t=document.getElementById("mobile-teleport-exit-btn");if(t&&t.classList.add("hidden"),this.isMap3DActive){this.ui.setMap3DVisible(!0),this.activeMapFloor=this.player.z,this.visualActiveFloor=this.player.z,this.mapCursor={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.mapZoom=1,this.mapPanOffsetX=0,this.mapPanOffsetY=0,this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="none");const e=document.getElementById("map3d-instructions");e&&(e.style.display="none"),this.isometricCanvas||this.initIsometricCanvas(),this.isometricCanvas.style.display="block"}else this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.remove("hidden"),this.ui.setMap3DVisible(!1),this.isometricCanvas&&(this.isometricCanvas.style.display="none")}build3DMap(t=!1){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(new fo(16777215,.6));const e=new uo(16777215,.4);e.position.set(10,20,10),this.scene.add(e),this.pulsatingMaterials=[],this.hunterMeshes=[],this.teleportMeshes=[],this.knownMeshes=[],this.keyMeshes=[],this.manaMeshes=[],this.exitMesh=null;const i=this.mazeGen.size,n=(M,_,y)=>{if(y<0||y>=i)return!1;const T=this.maze.get(M,_,y);return T===2||T===3||T===4||T===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${M},${_},${y}`)||this.visitedCells.has(`${M},${_},${y}`)};this.gridMeshes=new Array(i*i*i).fill(null);const a=new Ce(.9,.9,.9),o=this.isTeleportMode?q.TELEPORT_MAP_OPACITY:1,r=new Ce(.9,.425,.9),c=new Ce(.9,.425,.9),l=new ps(.35,.35,2*this.vScale,8);new ie({color:q.COLORS.THREE_VISITED,transparent:!0,opacity:.8*o});for(let M=0;M<i;M++)for(let _=0;_<i;_++)for(let y=0;y<i;y++){const T=this.maze.get(M,_,y);if(T===this.mazeGen.TYPES.WALL||T===this.mazeGen.TYPES.STATUE)continue;if(y%2===0&&T!==0){const N=`${M},${_},${y}`,H=this.revealedPathSet.has(N),Y=T===this.mazeGen.TYPES.ELEVATOR_VISITED,X=T===1&&(n(M,_,y-1)||n(M,_,y+1));if(Y||X||H||t){let J;if(H)J=new ie({color:16777215,transparent:!0,opacity:.95*o,emissive:16777215,emissiveIntensity:2*o});else if(Y)J=new ie({color:q.COLORS.THREE_VISITED,transparent:!0,opacity:.8*o});else if(X||t){const ot=t?q.COLORS.THREE_VISITED:q.COLORS.THREE_KNOWN;J=new ie({color:ot,transparent:!0,opacity:t?.72:.6*o,emissive:ot,emissiveIntensity:t?0:.5*o}),t||this.pulsatingMaterials.push(J)}const nt=new te(l,J);nt.position.set(M-i/2,(y-i/2)*this.vScale,_-i/2),this.scene.add(nt),this.gridMeshes[M*i*i+_*i+y]=nt,X&&!H&&(nt.userData={gridX:M,gridY:_,gridZ:y},this.knownMeshes.push(nt))}continue}const A=T===this.mazeGen.TYPES.TELEPORT,O=A&&this.discoveredTeleports.has(`${M},${_},${y}`),x=T===2||T===3||T===4||T===5||O,b=(T===1||A&&!O)&&this.isNearVisited(M,_,y);if(O){if(M===Math.floor(this.mazeGen.startPos.x)&&_===Math.floor(this.mazeGen.startPos.y)&&y===this.mazeGen.startPos.z){const L=this.isTeleportMode?2.5:.5,G=new ie({color:q.COLORS.THREE_START,emissive:q.COLORS.THREE_START,emissiveIntensity:L*o,transparent:!0,opacity:this.isTeleportMode?.95:.8*o}),Q=new te(a,G);Q.position.set(M-i/2,(y-i/2)*this.vScale,_-i/2),this.isTeleportMode&&Q.scale.set(1.4,1.4,1.4),Q.userData={isTeleport:!0,gridX:M,gridY:_,gridZ:y},this.scene.add(Q),this.teleportMeshes.push(Q);continue}const H=M===Math.floor(this.player.x)&&_===Math.floor(this.player.y)&&y===this.player.z,Y=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===M&&this.inactiveTeleportPos.y===_&&this.inactiveTeleportPos.z===y;let X=this.isTeleportMode?.9:.45,J=this.isTeleportMode?2.5:.8,nt=q.COLORS.THREE_TELEPORT,ot=.95;Y?(nt=4473924,J=0,ot=.4):this.isTeleportMode&&H&&(nt=65535,ot=.5,J=3);const Z=new En(X,16,16),at=new ie({color:nt,emissive:nt,emissiveIntensity:J,transparent:!0,opacity:ot}),dt=new te(Z,at);dt.position.set(M-i/2,(y-i/2)*this.vScale,_-i/2),dt.userData={isTeleport:!0,gridX:M,gridY:_,gridZ:y},this.scene.add(dt),this.teleportMeshes.push(dt);continue}if(T===this.mazeGen.TYPES.KEY){const N=new Ia(.3,0),H=new ie({color:q.COLORS.THREE_KEY,emissive:q.COLORS.THREE_KEY,emissiveIntensity:.6*o,shininess:100}),Y=new te(N,H);if(Y.position.set(M-i/2,(y-i/2)*this.vScale,_-i/2),Y.userData={isKey:!0,gridX:M,gridY:_,gridZ:y},this.scene.add(Y),this.keyMeshes.push(Y),this.pulsatingMaterials.push(H),!this.visitedCells.has(`${M},${_},${y}`))continue}if(T===this.mazeGen.TYPES.MANA){const N=new La(.22,0),H=new ie({color:65535,emissive:65535,emissiveIntensity:.7*o,shininess:120}),Y=new te(N,H);if(Y.position.set(M-i/2,(y-i/2)*this.vScale,_-i/2),Y.userData={isMana:!0,gridX:M,gridY:_,gridZ:y},this.scene.add(Y),this.manaMeshes.push(Y),this.pulsatingMaterials.push(H),!this.visitedCells.has(`${M},${_},${y}`))continue}const W=`${M},${_},${y}`,C=this.revealedPathSet.has(W);if(t?T!==this.mazeGen.TYPES.WALL:x||b||C){let N=t?q.COLORS.THREE_VISITED:q.COLORS.THREE_KNOWN,H;C?(N=16777215,H=new ie({color:N,transparent:!0,opacity:.95*o,emissive:N,emissiveIntensity:2*o})):x||t?(N=q.COLORS.THREE_VISITED,T===3?N=q.COLORS.THREE_START:T===4&&(N=this.keysCollected===this.totalKeys?q.COLORS.THREE_EXIT:16724736),H=new ie({color:N,transparent:!0,opacity:t?.72:.8*o})):b&&(H=new ie({color:N,transparent:!0,opacity:.6*o,emissive:N,emissiveIntensity:.5*o}),this.pulsatingMaterials.push(H));const Y=y<i-1&&this.maze.get(M,_,y+1)!==0,X=y>0&&this.maze.get(M,_,y-1)!==0;if(Y||X){const Z=this.pulsatingMaterials.indexOf(H);if(Z>-1&&this.pulsatingMaterials.splice(Z,1),Y&&X){let at=!1,dt=!1;if(C){if(this.activePathReveal){const B=this.activePathReveal.findIndex(Nt=>Nt.x===M&&Nt.y===_&&Nt.z===y);if(B!==-1&&B<this.activePathReveal.length-1){const Nt=this.activePathReveal[B+1];Nt.z>y&&(at=!0),Nt.z<y&&(dt=!0)}}!at&&!dt&&(at=this.revealedPathSet.has(`${M},${_},${y+1}`)||this.revealedPathSet.has(`${M},${_},${y+2}`),dt=this.revealedPathSet.has(`${M},${_},${y-1}`)||this.revealedPathSet.has(`${M},${_},${y-2}`))}const L=C&&(at||!at&&!dt),G=C&&(dt||!at&&!dt),Q=new ie({color:G?16777215:q.COLORS.THREE_ELEVATOR_DOWN,transparent:!0,opacity:.9*o,emissive:G?16777215:q.COLORS.THREE_ELEVATOR_DOWN,emissiveIntensity:(G?2:.4)*o}),$=new ie({color:L?16777215:q.COLORS.THREE_ELEVATOR_UP,transparent:!0,opacity:.9*o,emissive:L?16777215:q.COLORS.THREE_ELEVATOR_UP,emissiveIntensity:(L?2:.4)*o}),k=new te(r,Q),ct=new te(c,$);k.position.set(M-i/2,(y-i/2)*this.vScale-.2125,_-i/2),ct.position.set(M-i/2,(y-i/2)*this.vScale+.2125,_-i/2),this.scene.add(k),this.scene.add(ct),this.gridMeshes[M*i*i+_*i+y]=ct,b&&!C&&(k.userData={gridX:M,gridY:_,gridZ:y},ct.userData={gridX:M,gridY:_,gridZ:y},this.knownMeshes.push(k),this.knownMeshes.push(ct));continue}else{const at=C?16777215:Y?q.COLORS.THREE_ELEVATOR_UP:q.COLORS.THREE_ELEVATOR_DOWN,dt=C?2:.4;H=new ie({color:at,transparent:!0,opacity:.9*o,emissive:at,emissiveIntensity:dt*o})}}const J=M===Math.floor(this.player.x)&&_===Math.floor(this.player.y)&&y===this.player.z,nt=this.hunters.some(Z=>Z.x===M&&Z.y===_&&Z.z===y);if(J||nt){const Z=new Ce(.9,.05,.9),at=new te(Z,H);at.position.set(M-i/2,(y-i/2)*this.vScale-.425,_-i/2),this.scene.add(at),this.gridMeshes[M*i*i+_*i+y]=at;continue}const ot=new te(a,H);if(ot.position.set(M-i/2,(y-i/2)*this.vScale,_-i/2),T===4&&(this.exitMesh=ot,this.keysCollected<this.totalKeys)){const Z=new Ce(.95,.95,.95),at=new fs({color:16711680,wireframe:!0}),dt=new te(Z,at);ot.add(dt)}this.scene.add(ot),this.gridMeshes[M*i*i+_*i+y]=ot,(b||T===this.mazeGen.TYPES.EXIT)&&!C&&(ot.userData={gridX:M,gridY:_,gridZ:y},this.knownMeshes.push(ot))}}if(t)return;const u=new En(.42,16,16),f=new ie({color:16711680,emissive:16711680,emissiveIntensity:.8,depthWrite:!1}),p=new te(u,f);p.position.set(Math.floor(this.player.x)-i/2,(this.player.z-i/2)*this.vScale+.05,Math.floor(this.player.y)-i/2),this.scene.add(p);const v=new En(.4),m=new ie({color:q.COLORS.THREE_HUNTER,emissive:q.COLORS.THREE_HUNTER,emissiveIntensity:.8,depthWrite:!1}),g=new ie({color:q.COLORS.THREE_HUNTER,transparent:!0,opacity:.4,emissive:q.COLORS.THREE_HUNTER,emissiveIntensity:.3,depthWrite:!1}),h=new ie({color:q.COLORS.THREE_HUNTER,transparent:!0,opacity:.15,emissive:q.COLORS.THREE_HUNTER,emissiveIntensity:.1,depthWrite:!1}),d=v;for(let M=0;M<this.hunters.length;M++){const _=this.hunters[M];if(_.state==="SLEEP")continue;const y=new te(d,h),T=new te(d,g);y.visible=!1,T.visible=!1,y.renderOrder=99,T.renderOrder=99,this.scene.add(y),this.scene.add(T);const S=new Mn;S.renderOrder=99;const A=new te(v,m);S.add(A);const O=4,x=[],b=new Ce(.18,.18,.18),F=[q.COLORS.THREE_HUNTER,16711935,65535,16776960];for(let z=0;z<O;z++){const W=new ie({color:F[z%F.length],transparent:!0,opacity:.8,emissive:F[z%F.length],emissiveIntensity:.8,depthWrite:!1}),C=new te(b,W);C.userData={angle:z/O*Math.PI*2,radius:.35+Math.random()*.1,speed:1+Math.random()*1.5,phaseY:Math.random()*Math.PI*2},S.add(C),x.push(C)}S.position.set(_.x-i/2,(_.z-i/2)*this.vScale,_.y-i/2),this.scene.add(S),this.hunterMeshes.push({hunter:_,mesh:S,coreMesh:A,particles:x,trail1:T,trail2:y})}this.camera.position.set(i,i*this.vScale,i),this.controls.target.set(0,0,0),this.controls.update()}draw2DMap(t=.016){if(this.deathAnimation&&this.deathAnimation.active){if(this.deathAnimation.delayElapsed<this.deathAnimation.delayDuration)this.deathAnimation.delayElapsed+=t,this.updateNotification(t);else if(this.deathAnimation.screenFilled)this.deathAnimation.reversing&&(this.deathAnimation.elapsed-=t,this.deathAnimation.elapsed<=0&&(this.deathAnimation=null,this.isGameOver=!1,this.ui.initGameUI(this.isSafeMode),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1),this.ui.showInfoBanner(zt("msgPlayerRespawn"))));else if(this.deathAnimation.elapsed+=t,this.updateNotification(t),this.deathAnimation.elapsed>=this.deathAnimation.duration){this.deathAnimation.screenFilled=!0,this.activeNotification=null,this.notificationQueue=[];const n=Math.floor(this.deathAnimation.playerPos.x),a=Math.floor(this.deathAnimation.playerPos.y),o=this.deathAnimation.playerPos.z;this.maze.set(n,a,o,this.mazeGen.TYPES.KEY),this.totalKeys++,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.staticMapCacheDirty=!0;let r=this.mazeGen.startPos.x,c=this.mazeGen.startPos.y,l=this.mazeGen.startPos.z;this.lastSavePos&&(r=this.lastSavePos.x,c=this.lastSavePos.y,l=this.lastSavePos.z),this.player.x=r,this.player.y=c,this.player.z=l,this.activeMapFloor=l,this.visualActiveFloor=l,this.lastPlayerCell={x:Math.floor(r),y:Math.floor(c),z:l},this.hunters=[],this.initHunters(this.degree),this.suppressWakeHuntersBanner=!0,ns(this),this.deathAnimation.reversing=!0}}this.floorTransition&&(this.floorTransition.progress+=t/this.floorTransition.duration,this.floorTransition.progress>=1&&(this.floorTransition=null));const e=this.mazeGen.size,i=this.isZoomActive?11:e;if(this.zoomVisibleCells===void 0?this.zoomVisibleCells=i:(this.zoomVisibleCells+=(i-this.zoomVisibleCells)*(1-Math.exp(-12*t)),Math.abs(this.zoomVisibleCells-i)<.01&&(this.zoomVisibleCells=i)),this.floorTransition){const n=this.floorTransition.progress,a=this.canvas.width/2,o=this.canvas.height/2,r=this.floorTransition.delta>0;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let c,l;r?(c=1-.2*n,l=1.2-.2*n):(c=1+.2*n,l=.8+.2*n),this.ctx.save(),this.ctx.globalAlpha=1-n,this.ctx.translate(a,o),this.ctx.scale(c,c),this.ctx.drawImage(this.floorTransition.canvasOld,-a,-o),this.ctx.restore(),this.ctx.save(),this.ctx.globalAlpha=n,this.ctx.translate(a,o),this.ctx.scale(l,l),this.ctx.drawImage(this.floorTransition.canvasNew,-a,-o),this.ctx.restore()}else this.renderMapToContext(this.ctx,this.player.z)}renderMapToContext(t,e){t.clearRect(0,0,t.canvas.width,t.canvas.height);const i=this.mazeGen.size,n=i>11,a=n?t.canvas.width/11:t.canvas.width/i,o=this.player.x,r=this.player.y,c=Math.floor(o),l=Math.floor(r);let u=n||this.isZoomTransitionActive,f=n?this.zoomVisibleCells:i;if(this.isZoomTransitionActive){const g=Math.min(1,(2-this.zoomTransitionTimer)/2),d=(y=>1-Math.pow(1-y,3))(g),M=3;f=M+((n?11:i)-M)*d}if(u){t.save();const m=(n?11:i)/f,g=f/2;let h=o,d=r;h<g&&(h=g),h>i-g&&(h=i-g),d<g&&(d=g),d>i-g&&(d=i-g);const M=t.canvas.width/2,_=t.canvas.height/2;t.translate(M,_),t.scale(m,m),t.translate(-h*a,-d*a)}const p=n?i*a:this.canvas.width,v=n?i*a:this.canvas.height;(this.staticMapCacheDirty||this.staticMapCacheCanvas.width!==p||this.staticMapCacheCanvas.height!==v)&&this.updateStaticMapCache(e),t.drawImage(this.staticMapCacheCanvas,0,0);for(const m of this.hunters){if(m.state==="SLEEP")continue;const g=m.visualZ!==null?m.visualZ:m.z,h=m.visualX!==null?m.visualX:m.x,d=m.visualY!==null?m.visualY:m.y;if(g===null||h===null||d===null)continue;const M=Math.abs(g-e),_=Math.max(0,1-M);if(_<=0)continue;const y=m.x!==null?m.x:h,T=m.y!==null?m.y:d,S=y-h,A=T-d,O=Math.sqrt(S*S+A*A),x=Math.max(0,Math.min(1,1-O)),b=[];if(m.lastPos&&(m.lastPos.x!==y||m.lastPos.y!==T)&&m.lastPos.z===e){const F=.95-x*.47,z=.4-x*.2;b.push({pos:m.lastPos,sizeFactor:F,opacityFactor:z,age:1})}if(m.history&&m.history.length===2){const F=m.history[0];if(F.z===e){const z=.48*(1-x),W=.2*(1-x);z>.01&&b.push({pos:F,sizeFactor:z,opacityFactor:W,age:2})}}if(b.forEach(F=>{if(m.lowCanvas){const z=F.pos.x*a+a/2,W=F.pos.y*a+a/2,C=a*F.sizeFactor*_,D=m.jellyTime-F.age*.2,N=Math.sin(D)*6,H=Math.cos(D*.7)*4,Y=1+Math.sin(D*1.2)*.06,X=1+Math.cos(D*.8)*.06,J=N*Math.PI/180,nt=H*Math.PI/180;t.save(),t.globalAlpha=F.opacityFactor,t.translate(z,W),t.transform(Y,Math.tan(nt),Math.tan(J),X,0,0),t.imageSmoothingEnabled=!1,t.drawImage(m.lowCanvas,-C/2,-C/2,C,C),t.restore()}}),m.lowCanvas){const F=h*a+a/2,z=d*a+a/2,W=a*.95*_,C=m.jellyTime,D=Math.sin(C)*6,N=Math.cos(C*.7)*4,H=1+Math.sin(C*1.2)*.06,Y=1+Math.cos(C*.8)*.06,X=D*Math.PI/180,J=N*Math.PI/180;t.save();const nt=-a*.12*_,ot=-a*.12*_;t.translate(F+nt,z+ot),t.transform(H,Math.tan(J),Math.tan(X),Y,0,0),t.filter="brightness(0) blur(1px) opacity(0.35)",t.imageSmoothingEnabled=!1,t.drawImage(m.lowCanvas,-W/2,-W/2,W,W),t.restore(),t.save(),t.translate(F,z),t.transform(H,Math.tan(J),Math.tan(X),Y,0,0),t.imageSmoothingEnabled=!1,t.drawImage(m.lowCanvas,-W/2,-W/2,W,W),t.restore()}}if(!this.deathAnimation||!this.deathAnimation.screenFilled){const m=`${this.playerVertical}_${this.playerSide}`,g=this.mageImages[m],h=o*a,d=r*a,M=q.PLAYER_SHADOW_OFFSET_X!==void 0?q.PLAYER_SHADOW_OFFSET_X:-.28,_=q.PLAYER_SHADOW_OFFSET_Y!==void 0?q.PLAYER_SHADOW_OFFSET_Y:-.28,y=h+a*M,T=d+a*_;t.save(),t.beginPath();const S=q.PLAYER_SHADOW_WIDTH_FACTOR!==void 0?q.PLAYER_SHADOW_WIDTH_FACTOR:.45,A=q.PLAYER_SHADOW_HEIGHT_FACTOR!==void 0?q.PLAYER_SHADOW_HEIGHT_FACTOR:.3,O=a*S,x=a*A;t.ellipse(y,T,O,x,0,0,Math.PI*2),t.fillStyle="rgba(0, 0, 0, 0.4)",t.fill(),t.restore();const b=Math.max(0,Math.floor((y-O)/a)),F=Math.min(i-1,Math.floor((y+O)/a)),z=Math.max(0,Math.floor((T-x)/a)),W=Math.min(i-1,Math.floor((T+x)/a));for(let D=b;D<=F;D++)for(let N=z;N<=W;N++)this.maze.get(D,N,e)===0&&(this.isNearVisited(D,N,e)||this.isAdjacentToStatue(D,N,e))&&(t.save(),this.wallImage.complete&&this.wallImage.naturalWidth!==0?t.drawImage(this.wallImage,D*a,N*a,a,a):(t.fillStyle=q.COLORS.WALL,t.fillRect(D*a,N*a,a,a)),t.restore());let C=1;if(this.deathAnimation&&this.deathAnimation.active&&(Math.floor(Date.now()/120)%2===0||(C=.2)),g&&g.complete){t.save(),t.globalAlpha=C;const D=a*.9,N=D,H=D*(g.height/g.width);t.translate(h,d),t.scale(this.playerSquashX||1,this.playerSquashY||1);const Y=-H*.85;t.drawImage(g,-N/2,Y,N,H),t.restore()}else t.save(),t.globalAlpha=C,t.strokeStyle=q.COLORS.PLAYER_OUTLINE,t.lineWidth=1,t.strokeRect(c*a+2,l*a+2,a-4,a-4),t.fillStyle=q.COLORS.PLAYER,t.beginPath(),t.arc(h,d,a*.4,0,Math.PI*2),t.fill(),t.strokeStyle=q.COLORS.PLAYER,t.lineWidth=2,t.beginPath(),t.moveTo(h,d),t.lineTo(h+Math.cos(this.player.dir)*a*1,d+Math.sin(this.player.dir)*a*1),t.stroke(),t.restore();if(q.SHOW_COLLISION_DEBUG){t.save(),t.strokeStyle="#ff0000",t.lineWidth=1.5;const D=q.PLAYER_COLLISION_RADIUS*2*a,N=(q.PLAYER_COLLISION_OFFSET_X||0)*a,H=(q.PLAYER_COLLISION_OFFSET_Y||0)*a;t.strokeRect(h+N-D/2,d+H-D/2,D,D),t.restore()}if(this.deathAnimation&&this.deathAnimation.active){const D=Math.min(1,this.deathAnimation.delayElapsed/this.deathAnimation.delayDuration),N=-(g&&g.complete?a*.9*(g.height/g.width)*.85:a*.5),H=a*.7,Y=(1-D)*N-4*H*D*(1-D);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){t.save();const X=a*.55;t.drawImage(this.keyImage,h-X/2,d+Y-X/2,X,X),t.restore()}else t.save(),t.beginPath(),t.arc(h,d+Y,a*.15,0,2*Math.PI),t.fillStyle="#ffd700",t.fill(),t.restore()}}if(this.activeNotification){const m=this.activeNotification;t.save(),t.font=`bold ${a*.22}px monospace`;const g=t.measureText(m.text).width,h=a*.4,d=g+h,M=a*.48,_=o*a,y=r*a-a*1.5;let T=d;m.state==="OPENING"?T=d*m.widthProgress:m.state==="CLOSING"&&(T=d*m.closeProgress);const S=this.mazeGen.size*a,A=this.mazeGen.size*a;let O=_;O-T/2<0?O=T/2:O+T/2>S&&(O=S-T/2);let x=y;x-M/2<0?x=M/2:x+M/2>A&&(x=A-M/2),t.fillStyle="#000000",t.fillRect(O-T/2,x-M/2,T,M),t.strokeStyle="#00ffff",t.lineWidth=Math.max(1.5,a*.04),t.strokeRect(O-T/2,x-M/2,T,M),(m.state==="TYPING"||m.state==="WAITING")&&(t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.fillText(m.displayText,O,x)),t.restore()}if(u&&t.restore(),this.isZoomTransitionActive){const h=1-Math.min(1,(2-this.zoomTransitionTimer)/2);t.save(),t.fillStyle=`rgba(0, 0, 0, ${h})`,t.fillRect(0,0,t.canvas.width,t.canvas.height),t.restore()}if(this.deathAnimation&&this.deathAnimation.active){const m=this.deathAnimation.hunter;let g=m.visualX+.5,h=m.visualY+.5;this.deathAnimation.reversing&&(g=this.player.x,h=this.player.y);let d,M;if(n){const _=11/this.zoomVisibleCells,y=this.zoomVisibleCells/2;let T=o,S=r;T<y&&(T=y),T>i-y&&(T=i-y),S<y&&(S=y),S>i-y&&(S=i-y);const A=t.canvas.width/2,O=t.canvas.height/2;d=A+(g-T)*a*_,M=O+(h-S)*a*_}else d=g*a,M=h*a;if(!this.deathAnimation.screenFilled||this.deathAnimation.reversing){const _=Math.hypot(t.canvas.width,t.canvas.height)*1.1,y=this.deathAnimation.elapsed/this.deathAnimation.duration,S=y*y*(3-2*y)*_;t.save(),t.beginPath(),t.arc(d,M,S,0,Math.PI*2),t.clip(),t.fillStyle="rgba(15, 0, 25, 0.96)",t.fillRect(0,0,t.canvas.width,t.canvas.height);const A=45,O=n?11/this.zoomVisibleCells:1;for(let x=0;x<A;x++){const b=Math.random()*Math.PI*2,F=Math.pow(Math.random(),.7)*S,z=d+Math.cos(b)*F,W=M+Math.sin(b)*F,C=(15+Math.random()*70)*O,D=(3+Math.random()*12)*O,N=80+Math.floor(Math.random()*50),H=Math.floor(Math.random()*25),Y=130+Math.floor(Math.random()*70);t.fillStyle=Math.random()<.12?"#00ff66":Math.random()<.12?"#00ccff":Math.random()<.08?"#ffffff":`rgb(${N},${H},${Y})`,t.fillRect(z-C/2,W-D/2,C,D)}if(Math.random()<.3){t.fillStyle=Math.random()<.7?"#ffffff":"#b3ffff";const x=d+(Math.random()-.5)*S*.8,b=M+(Math.random()-.5)*S*.8,F=(2+Math.random()*5)*O,z=(10+Math.random()*30)*O;t.fillRect(x-F/2,b-z/2,F,z)}t.restore()}else{t.fillStyle="rgba(10, 0, 15, 1.0)",t.fillRect(0,0,t.canvas.width,t.canvas.height),t.fillStyle="rgba(138, 3, 196, 0.08)";for(let T=0;T<t.canvas.height;T+=6)Math.random()<.6&&t.fillRect(0,T+Math.sin(Date.now()*.01+T)*2,t.canvas.width,2);const _=Math.floor(Math.random()*5)+3,y=["#00ff66","#ff0055","#00ccff","#ffff00","#8a03c4","#ffffff"];for(let T=0;T<_;T++){const S=Math.random()*t.canvas.width,A=Math.random()*t.canvas.height,O=80+Math.random()*250,x=8+Math.random()*30;t.fillStyle=y[Math.floor(Math.random()*y.length)],t.globalAlpha=.12+Math.random()*.18,t.fillRect(S,A,O,x)}if(t.globalAlpha=1,Math.random()<.35){const T=Math.floor(Math.random()*t.canvas.height),S=15+Math.floor(Math.random()*80),A=Math.floor(Math.random()*40)-20;t.drawImage(t.canvas,0,T,t.canvas.width,S,A,T,t.canvas.width,S)}Math.random()<.15&&(t.fillStyle="rgba(255, 255, 255, 0.05)",t.fillRect(0,Math.random()*t.canvas.height,t.canvas.width,5+Math.random()*20))}}}updateStaticMapCache(t){const e=this.mazeGen.size,i=e>11,n=i?this.canvas.width/11:this.canvas.width/e,a=i?e*n:this.canvas.width,o=i?e*n:this.canvas.height;(this.staticMapCacheCanvas.width!==a||this.staticMapCacheCanvas.height!==o)&&(this.staticMapCacheCanvas.width=a,this.staticMapCacheCanvas.height=o);const r=this.staticMapCacheCtx;r.clearRect(0,0,a,o);const c=this.player.x,l=this.player.y,u=Math.floor(this.mazeGen.startPos.x),f=Math.floor(this.mazeGen.startPos.y),p=this.mazeGen.startPos.z,v=Date.now();let m=!1;const g=(h,d,M)=>{const _=`${h},${d},${t}`;if(this.skipCellAnimations||this.fullyRevealedCells.has(_))M(),this.skipCellAnimations&&this.fullyRevealedCells.add(_);else{let y=this.revealedCellsAnimation.get(_);y===void 0&&(this.revealedCellsAnimation.set(_,v),y=v);const T=v-y,A=Math.min(1,T/400);A<1?(r.save(),r.globalAlpha=A,M(),r.restore(),m=!0):(M(),this.revealedCellsAnimation.delete(_),this.fullyRevealedCells.add(_))}};for(let h=0;h<e;h++)for(let d=0;d<e;d++){const M=this.maze.get(h,d,t);if(M===this.mazeGen.TYPES.STATUE){g(h,d,()=>{if(this.floorImage.complete&&this.floorImage.naturalWidth!==0?r.drawImage(this.floorImage,h*n,d*n,n,n):(r.fillStyle=q.COLORS.PATH_VISITED,r.fillRect(h*n,d*n,n,n)),r.fillStyle="rgba(0, 0, 0, 0.4)",r.beginPath(),r.ellipse(h*n+n/2,(d+1)*n-n*.15,n*.35,n*.12,0,0,Math.PI*2),r.fill(),this.statueImage.complete&&this.statueImage.naturalWidth!==0){const W=this.statueImage.width/this.statueImage.height,C=n*.85,D=C/W,N=h*n+n/2,H=(d+1)*n-n*.05;r.drawImage(this.statueImage,N-C/2,H-D,C,D)}else r.fillStyle="#555555",r.fillRect(h*n+n*.3,d*n+n*.1,n*.4,n*.8)});continue}const _=this.allTeleports.some(W=>W.x===h&&W.y===d&&W.z===t),y=_&&this.discoveredTeleports.has(`${h},${d},${t}`),T=M===2||M===3||M===4||M===5||y,S=M===this.mazeGen.TYPES.KEY,A=M===this.mazeGen.TYPES.MANA,O=(M===1||_&&!y)&&this.isNearVisited(h,d,t),x=this.revealedPathSet.has(`${h},${d},${t}`),b=t<e-1&&this.maze.get(h,d,t+1)!==0,F=t>0&&this.maze.get(h,d,t-1)!==0,z=b||F;x?g(h,d,()=>{z?this.drawElevator2D(r,h,d,n,b,F,c,l,!0,t):(r.fillStyle=q.COLORS.REVEALED_PATH,r.fillRect(h*n,d*n,n,n))}):T?g(h,d,()=>{if(y){const W=h===u&&d===f&&t===p,C=`${h},${d},${t}`;if(W){const D=Math.floor(c)===h&&Math.floor(l)===d&&t===this.player.z,N=D?q.COLORS.TELEPORT:q.COLORS.START;this.drawVortex2D(r,h,d,n,N,D,C)}else{const D=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===h&&this.inactiveTeleportPos.y===d&&this.inactiveTeleportPos.z===t,N=D?q.COLORS.TELEPORT_INACTIVE:q.COLORS.TELEPORT,H=Math.floor(c)===h&&Math.floor(l)===d&&t===this.player.z;this.drawVortex2D(r,h,d,n,N,H&&!D,C)}m=!0}else if(z)this.drawElevator2D(r,h,d,n,b,F,c,l,!1,t);else if(M===2&&this.floorImage.complete&&this.floorImage.naturalWidth!==0)r.drawImage(this.floorImage,h*n,d*n,n,n);else if(M===this.mazeGen.TYPES.EXIT){const W=`${h},${d},${t}`;if(this.drawVortex2D(r,h,d,n,q.COLORS.EXIT,!1,W),m=!0,this.keysCollected<this.totalKeys){r.strokeStyle="#ff3300",r.lineWidth=Math.max(2,n*.08);const C=h*n+n/2,D=d*n+n/2,N=n*.2;r.beginPath(),r.arc(C,D-N*.2,N*.6,Math.PI,0),r.stroke(),r.fillStyle="#111",r.fillRect(C-N,D-N*.1,N*2,N*1.5),r.strokeRect(C-N,D-N*.1,N*2,N*1.5),r.fillStyle="#ff3300",r.font=`bold ${Math.max(10,n*.35)}px sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(String(this.totalKeys-this.keysCollected),C,D+N*.6)}}else if(M===2)r.fillStyle=q.COLORS.PATH_VISITED,r.fillRect(h*n,d*n,n,n);else{const W=`${h},${d},${t}`,C=Math.floor(c)===h&&Math.floor(l)===d&&t===this.player.z,D=C?q.COLORS.TELEPORT:q.COLORS.START;this.drawVortex2D(r,h,d,n,D,C,W),m=!0}this.drawCellShadow2D(r,h,d,n,e,M,t)}):S?(g(h,d,()=>{if(this.visitedCells.has(`${h},${d},${t}`))if(y){const D=h===u&&d===f&&t===p,N=`${h},${d},${t}`;if(D){const H=Math.floor(c)===h&&Math.floor(l)===d&&t===this.player.z,Y=H?q.COLORS.TELEPORT:q.COLORS.START;this.drawVortex2D(r,h,d,n,Y,H,N)}else{const H=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===h&&this.inactiveTeleportPos.y===d&&this.inactiveTeleportPos.z===t,Y=H?q.COLORS.TELEPORT_INACTIVE:q.COLORS.TELEPORT,X=Math.floor(c)===h&&Math.floor(l)===d&&t===this.player.z;this.drawVortex2D(r,h,d,n,Y,X&&!H,N)}m=!0}else z?this.drawElevator2D(r,h,d,n,b,F,c,l,!1,t):this.floorImage.complete&&this.floorImage.naturalWidth!==0?r.drawImage(this.floorImage,h*n,d*n,n,n):(r.fillStyle=q.COLORS.PATH_VISITED,r.fillRect(h*n,d*n,n,n));const C=n*.05*Math.sin(Date.now()/300);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){const D=this.keyImage,N=D.naturalWidth/D.naturalHeight,H=n*.7;let Y=H,X=H;N>1?X=H/N:Y=H*N;const J=h*n+(n-Y)/2,nt=d*n+(n-X)/2+C;r.drawImage(D,J,nt,Y,X)}else r.beginPath(),r.arc(h*n+n/2,d*n+n/2+C,n*.25,0,2*Math.PI),r.fillStyle="#ffd700",r.fill();this.drawCellShadow2D(r,h,d,n,e,M,t)}),m=!0):A?(g(h,d,()=>{this.visitedCells.has(`${h},${d},${t}`)&&(this.floorImage.complete&&this.floorImage.naturalWidth!==0?r.drawImage(this.floorImage,h*n,d*n,n,n):(r.fillStyle=q.COLORS.PATH_VISITED,r.fillRect(h*n,d*n,n,n)));const C=n*.05*Math.sin(Date.now()/250);if(this.manaImage.complete&&this.manaImage.naturalWidth!==0){const D=this.manaImage,N=D.naturalWidth/D.naturalHeight,H=n*.7;let Y=H,X=H;N>1?X=H/N:Y=H*N;const J=h*n+(n-Y)/2,nt=d*n+(n-X)/2+C;r.save(),r.shadowColor="rgba(0, 255, 255, 0.85)",r.shadowBlur=n*.35,r.shadowOffsetX=0,r.shadowOffsetY=0,r.drawImage(D,J,nt,Y,X),r.restore()}else r.beginPath(),r.arc(h*n+n/2,d*n+n/2+C,n*.2,0,2*Math.PI),r.fillStyle="#00ffff",r.fill();this.drawCellShadow2D(r,h,d,n,e,M,t)}),m=!0):O?(g(h,d,()=>{if(this.floorImage.complete&&this.floorImage.naturalWidth!==0){r.save(),r.globalAlpha=.35,r.drawImage(this.floorImage,h*n,d*n,n,n),r.restore();const W=.22+.12*Math.sin(Date.now()/250);r.fillStyle=`rgba(136, 204, 255, ${W})`,r.fillRect(h*n,d*n,n,n)}else r.fillStyle=q.COLORS.PATH_KNOWN,r.fillRect(h*n,d*n,n,n)}),m=!0):M===0&&(this.isNearVisited(h,d,t)||this.isAdjacentToStatue(h,d,t))&&g(h,d,()=>{this.wallImage.complete&&this.wallImage.naturalWidth!==0?r.drawImage(this.wallImage,h*n,d*n,n,n):(r.fillStyle=q.COLORS.WALL,r.fillRect(h*n,d*n,n,n))})}m?this.staticMapCacheDirty=!0:this.staticMapCacheDirty=!1}isNearVisited(t,e,i){for(let n=-1;n<=1;n++)for(let a=-1;a<=1;a++){const o=t+n,r=e+a;if(o>=0&&o<this.mazeGen.size&&r>=0&&r<this.mazeGen.size){const c=this.maze.get(o,r,i);if(c===2||c===3||c===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${o},${r},${i}`))return!0}}return!1}isAdjacentToStatue(t,e,i){const n=this.mazeGen.size,a=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:1},{dx:-1,dy:1},{dx:1,dy:-1},{dx:-1,dy:-1}];for(const o of a){const r=t+o.dx,c=e+o.dy;if(r>=0&&r<n&&c>=0&&c<n&&this.maze.get(r,c,i)===this.mazeGen.TYPES.STATUE)return!0}return!1}populateFullyRevealedCells(t){const e=this.mazeGen.size;for(let i=0;i<e;i++)for(let n=0;n<e;n++){const a=this.maze.get(i,n,t),o=a===this.mazeGen.TYPES.TELEPORT,r=o&&this.discoveredTeleports.has(`${i},${n},${t}`),c=a===2||a===3||a===4||a===5||r,l=(a===1||o&&!r)&&this.isNearVisited(i,n,t),u=this.revealedPathSet.has(`${i},${n},${t}`);(c||l||u||a===0&&this.isNearVisited(i,n,t))&&this.fullyRevealedCells.add(`${i},${n},${t}`)}}updatePulse(){if(!this.isMap3DActive||this.pulsatingMaterials.length===0)return;const t=.2+.5*Math.abs(Math.sin(Date.now()*.003));this.pulsatingMaterials.forEach(e=>{e.emissiveIntensity=t})}loop(){if(this.isDestroyed)return;const t=performance.now(),e=(t-this.lastFrameTime)/1e3;this.lastFrameTime=t;const i=Math.min(e,.1);if(this.isIntroPlaying?this.controls.update():this.update(i),this.updateVortexAngles(i),this.isMap3DActive||this.isIntroPlaying)if(this.isIntroPlaying)this.renderer.render(this.scene,this.camera);else{const n=1-Math.exp(-10*i);this.visualActiveFloor+=(this.activeMapFloor-this.visualActiveFloor)*n,Math.abs(this.activeMapFloor-this.visualActiveFloor)<.001&&(this.visualActiveFloor=this.activeMapFloor),this.drawIsometricMap()}else this.draw2DMap(i);requestAnimationFrame(()=>this.loop())}updateVortexAngles(t){if(!this.vortexAngles)return;const e=Math.floor(this.player.x),i=Math.floor(this.player.y),n=this.player.z,a=Math.floor(this.mazeGen.startPos.x),o=Math.floor(this.mazeGen.startPos.y),r=this.mazeGen.startPos.z,c=`${a},${o},${r}`,u=e===a&&i===o&&n===r?q.VORTEX_SPEED_FAST:q.VORTEX_SPEED_NORMAL;this.vortexAngles.set(c,(this.vortexAngles.get(c)||0)+t*u),this.allTeleports&&this.allTeleports.forEach(p=>{const v=`${p.x},${p.y},${p.z}`,m=e===p.x&&i===p.y&&n===p.z,g=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===p.x&&this.inactiveTeleportPos.y===p.y&&this.inactiveTeleportPos.z===p.z,h=m&&!g?q.VORTEX_SPEED_FAST:q.VORTEX_SPEED_NORMAL;this.vortexAngles.set(v,(this.vortexAngles.get(v)||0)+t*h)});const f=this.getExitPos();if(f){const p=`${f.x},${f.y},${f.z}`,v=q.VORTEX_SPEED_NORMAL;this.vortexAngles.set(p,(this.vortexAngles.get(p)||0)+t*v)}}getHexColorVariation(t,e){let i=t.replace("#","");i.length===3&&(i=i.split("").map(c=>c+c).join(""));let n=parseInt(i,16),a=(n>>16)+e,o=(n>>8&255)+e,r=(n&255)+e;return a=Math.max(0,Math.min(255,a)),o=Math.max(0,Math.min(255,o)),r=Math.max(0,Math.min(255,r)),`#${((1<<24)+(a<<16)+(o<<8)+r).toString(16).slice(1)}`}drawVortex2D(t,e,i,n,a,o,r){const c=e*n+n/2,l=i*n+n/2;t.save(),t.translate(c,l),t.fillStyle=a,t.fillRect(-n/2,-n/2,n,n);const u=this.vortexAngles.get(r)||0;t.rotate(u);const f=this.getHexColorVariation(a,45),p=this.getHexColorVariation(a,-45),v=t.createRadialGradient(0,0,0,0,0,n*.45);v.addColorStop(0,f),v.addColorStop(.4,a),v.addColorStop(1,p);const m=t.createRadialGradient(0,0,0,0,0,n*.45);m.addColorStop(0,"#ffffff"),m.addColorStop(.3,f),m.addColorStop(1,"rgba(255, 255, 255, 0)");const g=3,h=n*.45;for(let d=0;d<g;d++){const M=d*2*Math.PI/g;t.beginPath(),t.strokeStyle=v,t.lineWidth=n*.09,t.lineCap="round";for(let _=0;_<=h;_+=1){const y=5/h,T=M+_*y,S=_*Math.cos(T),A=_*Math.sin(T);_===0?t.moveTo(S,A):t.lineTo(S,A)}t.stroke(),t.beginPath(),t.strokeStyle=m,t.lineWidth=n*.04,t.lineCap="round";for(let _=n*.12;_<=h;_+=1){const y=5/h,T=M+_*y+.15,S=_*Math.cos(T),A=_*Math.sin(T);_===Math.floor(n*.12)?t.moveTo(S,A):t.lineTo(S,A)}t.stroke()}t.restore()}playContinueAnimation(){this.isIntroPlaying=!0;const t=this.mazeGen.size;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="block");const e=document.getElementById("map3d-instructions");e&&(e.style.display="block"),this.isometricCanvas&&(this.isometricCanvas.style.display="none"),this.ui.setMap3DVisible(!0),this.isMap3DActive=!0,this.updateRendererSize(),this.build3DMap(!1),this.camera.position.set(t*.9,t*this.vScale*.6,t*.9),this.controls.target.set(0,0,0),this.controls.update(),this.hideCanvasInstant(),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=2,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableRotate=!1;const i=()=>{this.activeContinueTimer&&(clearTimeout(this.activeContinueTimer),this.activeContinueTimer=null),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this.controls.autoRotate=!1,this.animateCameraToPlayer(()=>{this._transitionToGame()})};this.activeSkipHandler=()=>i(),window.addEventListener("keydown",this.activeSkipHandler,{once:!0}),window.addEventListener("touchstart",this.activeSkipHandler,{once:!0}),this.activeContinueTimer=setTimeout(i,2500)}animateCameraToPlayer(t){const e=this.mazeGen.size,i=this.player.x-e/2,n=(this.player.z-e/2)*this.vScale,a=this.player.y-e/2,o=this.controls.target.clone(),r=new K(i,n,a),c=this.camera.position.clone(),l=new K(i+4,n+5,a+4),u=1100,f=performance.now(),p=v=>{if(this.isDestroyed)return;const m=v-f,g=Math.min(m/u,1),h=g<.5?4*g*g*g:1-Math.pow(-2*g+2,3)/2;this.controls.target.lerpVectors(o,r,h),this.camera.position.lerpVectors(c,l,h),this.controls.update(),g<1?requestAnimationFrame(p):t&&t()};requestAnimationFrame(p)}playIntroAnimation(){this.isIntroPlaying=!0;const t=this.mazeGen.size;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="block");const e=document.getElementById("map3d-instructions");for(e&&(e.style.display="block"),this.isometricCanvas&&(this.isometricCanvas.style.display="none");this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(new fo(16777215,.7));const i=new uo(16777215,.5);i.position.set(10,20,10),this.scene.add(i),this.ui.setMap3DVisible(!0),this.isMap3DActive=!0,this.updateRendererSize(),this.camera.position.set(t*.9,t*this.vScale*.6,t*.9),this.controls.target.set(0,0,0),this.controls.update(),this.hideCanvasInstant();const n=this.mazeGen.startPos,a=this.getExitPos(),o=new Ce(.92,.92,.92),r=new ie({color:q.COLORS.THREE_START,emissive:q.COLORS.THREE_START,emissiveIntensity:.6,transparent:!0,opacity:.95}),c=new te(o,r);c.position.set(Math.floor(n.x)-t/2,(n.z-t/2)*this.vScale,Math.floor(n.y)-t/2),this.scene.add(c);const l=new ie({color:16724736,emissive:16724736,emissiveIntensity:.6,transparent:!0,opacity:.95}),u=new te(o,l);u.position.set(a.x-t/2,(a.z-t/2)*this.vScale,a.y-t/2);const f=new Ce(.95,.95,.95),p=new fs({color:16711680,wireframe:!0}),v=new te(f,p);u.add(v),this.scene.add(u);const m=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],g=`${Math.floor(n.x)},${Math.floor(n.y)},${n.z}`,h=`${a.x},${a.y},${a.z}`,d=new Set([g,h]),M=[{x:Math.floor(n.x),y:Math.floor(n.y),z:n.z}],_=[{x:a.x,y:a.y,z:a.z}];let y=0,T=0;const S=[];for(;y<M.length||T<_.length;){if(y<M.length){const{x:H,y:Y,z:X}=M[y++];for(const[J,nt,ot]of m){const Z=H+J,at=Y+nt,dt=X+ot,L=`${Z},${at},${dt}`;Z>=0&&Z<t&&at>=0&&at<t&&dt>=0&&dt<t&&!d.has(L)&&this.maze.get(Z,at,dt)!==this.mazeGen.TYPES.WALL&&(d.add(L),M.push({x:Z,y:at,z:dt}),S.push({x:Z,y:at,z:dt}))}}if(T<_.length){const{x:H,y:Y,z:X}=_[T++];for(const[J,nt,ot]of m){const Z=H+J,at=Y+nt,dt=X+ot,L=`${Z},${at},${dt}`;Z>=0&&Z<t&&at>=0&&at<t&&dt>=0&&dt<t&&!d.has(L)&&this.maze.get(Z,at,dt)!==this.mazeGen.TYPES.WALL&&(d.add(L),_.push({x:Z,y:at,z:dt}),S.push({x:Z,y:at,z:dt}))}}}this.controls.autoRotate=!0,this.controls.autoRotateSpeed=1.8,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableRotate=!1;const A=new Ce(.88,.88,.88),O=new ie({color:q.COLORS.THREE_VISITED,transparent:!0,opacity:.72}),x=20,b=200,F=S.length,z=Math.max(1,Math.ceil(F/b));let W=0;this.activeIntroTimer=null;const C=[],D=()=>{this.activeIntroTimer&&(clearTimeout(this.activeIntroTimer),this.activeIntroTimer=null),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this._playGlitchAndTransition(C)};this.activeSkipHandler=()=>D(),window.addEventListener("keydown",this.activeSkipHandler,{once:!0}),window.addEventListener("touchstart",this.activeSkipHandler,{once:!0});const N=()=>{if(this.isDestroyed)return;const H=Math.min(W+z,S.length);for(;W<H;W++){const{x:Y,y:X,z:J}=S[W],nt=J%2===0;let ot;nt?ot=new ps(.35,.35,2*this.vScale,8):ot=A;const Z=new te(ot,O);Z.position.set(Y-t/2,(J-t/2)*this.vScale,X-t/2),this.scene.add(Z),C.push(Z)}W<S.length?this.activeIntroTimer=setTimeout(N,x):(this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this._playGlitchAndTransition(C))};this.activeIntroTimer=setTimeout(N,x)}_playGlitchAndTransition(t){if(this.isDestroyed)return;const e=5,i=90;let n=0;const a=()=>{if(this.isDestroyed)return;const o=n%2===0;t.forEach(r=>{r&&(r.visible=o)}),n++,n<e*2?setTimeout(a,i):(t.forEach(r=>{r&&(r.visible=!1)}),setTimeout(()=>this._transitionToGame(),400))};a()}_transitionToGame(){this.isDestroyed||(this.controls&&(this.controls.autoRotate=!1,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls.enableRotate=!0),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.classList.add("intro-fade-out"),setTimeout(()=>{if(this.isDestroyed)return;this.ui.setMap3DVisible(!1),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.classList.remove("intro-fade-out"),this.isMap3DActive=!1,this.isIntroPlaying=!1,this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1);const t=document.getElementById("map-area-container"),e=document.getElementById("left-hud-panel"),i=document.getElementById("right-hud-panel"),n=document.getElementById("bottom-hud-container");t&&(t.classList.remove("intro-hidden"),t.classList.add("intro-reveal"),setTimeout(()=>t.classList.remove("intro-reveal"),700)),e&&(e.classList.remove("intro-hidden"),e.classList.add("intro-reveal"),setTimeout(()=>e.classList.remove("intro-reveal"),700)),i&&(i.classList.remove("intro-hidden"),i.classList.add("intro-reveal"),setTimeout(()=>i.classList.remove("intro-reveal"),700)),n&&(n.classList.remove("intro-hidden"),n.classList.add("intro-reveal"),setTimeout(()=>n.classList.remove("intro-reveal"),700)),this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2,this.isResumedFromSave||this.ui.showInfoBanner(zt("msgWhereAmI"))},600))}startStorytelling(){this.isStoryActive=!0,this.storyMsgIndex=0,this.storyState="OPENING",this.storyWidthProgress=0,this.storyCloseProgress=1,this.storyCharIndex=0,this.storyTypeTimer=0;const t=document.getElementById("story-screen");t&&t.classList.remove("hidden");const e=document.getElementById("story-image-loader"),i=document.getElementById("story-dialogue");this.isPreloadingActive=!1;const n=()=>{this.isPreloadingActive=!1,i&&(i.style.transform="scaleX(0)"),this.updateStoryImage(),this.handleStoryKeyDown=o=>{o.key.toLowerCase()==="escape"?this.skipStory():this.isPreloadingActive||this.triggerAdvanceStory(),o.preventDefault()},window.addEventListener("keydown",this.handleStoryKeyDown),this.handleStoryClick=o=>{const r=o.target;r&&r.closest("#story-skip-btn")||this.isPreloadingActive||this.triggerAdvanceStory()},this.handleStoryTouch=o=>{const r=o.target;r&&r.closest("#story-skip-btn")||(this.isPreloadingActive||this.triggerAdvanceStory(),o.preventDefault())},t&&(t.addEventListener("click",this.handleStoryClick),t.addEventListener("touchstart",this.handleStoryTouch,{passive:!1}))},a=document.getElementById("story-skip-btn");if(a&&(a.onclick=o=>{o.stopPropagation(),this.skipStory()}),e&&i&&(i.style.transform="scaleX(0)",this.storyImagesLoadedCount<this.storyImagesTotalCount)){this.isPreloadingActive=!0,e.classList.remove("hidden"),this.storyImagesPreloadPromise.then(()=>{e.classList.add("hidden"),n()});return}n()}endStorytelling(){this.isStoryActive=!1,this.isPreloadingActive=!1;const t=document.getElementById("story-screen");t&&t.classList.add("hidden"),this.handleStoryKeyDown&&(window.removeEventListener("keydown",this.handleStoryKeyDown),this.handleStoryKeyDown=null),this.handleStoryClick&&t&&(t.removeEventListener("click",this.handleStoryClick),this.handleStoryClick=null),this.handleStoryTouch&&t&&(t.removeEventListener("touchstart",this.handleStoryTouch),this.handleStoryTouch=null),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1);const e=document.getElementById("map-area-container"),i=document.getElementById("left-hud-panel"),n=document.getElementById("right-hud-panel"),a=document.getElementById("bottom-hud-container");e&&(e.classList.remove("hidden","intro-hidden"),e.classList.add("intro-reveal"),setTimeout(()=>e.classList.remove("intro-reveal"),700)),i&&(i.classList.remove("hidden","intro-hidden"),i.classList.add("intro-reveal"),setTimeout(()=>i.classList.remove("intro-reveal"),700)),n&&(n.classList.remove("hidden","intro-hidden"),n.classList.add("intro-reveal"),setTimeout(()=>n.classList.remove("intro-reveal"),700)),a&&(a.classList.remove("hidden","intro-hidden"),a.classList.add("intro-reveal"),setTimeout(()=>a.classList.remove("intro-reveal"),700)),this.ui.setMap3DVisible(!1),this.isMap3DActive=!1,this.isIntroPlaying=!1,this.staticMapCacheDirty=!0,this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2,this.isResumedFromSave||this.ui.showInfoBanner(zt("msgWhereAmI"))}updateStoryImage(){const t=document.getElementById("story-img"),e=document.getElementById("story-image-canvas");if(!(!t||!e))if(e.style.background="#0b0b0b",this.storyMsgIndex===5)t.style.display="none",e.style.background="radial-gradient(circle, #222222 0%, #000000 80%)",e.removeAttribute("data-placeholder");else{const i=this.preloadedStoryImages[this.storyMsgIndex];if(i)t.src=i.src,t.style.display="block",e.removeAttribute("data-placeholder");else{let n="";this.storyMsgIndex===0?n="assets/images/presentation/1-mystical-church-of-chaos.jpg":this.storyMsgIndex===1?n="assets/images/presentation/2-mystical-church-of-chaos.jpg":this.storyMsgIndex===2?n="assets/images/presentation/3-the-jelly-god.jpg":this.storyMsgIndex===3?n="assets/images/presentation/4-player-alone.jpg":this.storyMsgIndex===4&&(n="assets/images/presentation/5-player-thrown.jpg"),t.src=n,t.onerror=()=>{t.style.display="none",e.setAttribute("data-placeholder",`[Image ${this.storyMsgIndex+1}]`)},t.onload=()=>{t.style.display="block",e.removeAttribute("data-placeholder")}}}}updateStory(t){if(!this.isStoryActive||this.isPreloadingActive)return;const e=document.getElementById("story-text"),i=document.getElementById("story-dialogue"),n=document.getElementById("story-arrow");if(!i||!e)return;const a=["storyMsg1","storyMsg2","storyMsg3","storyMsg4","storyMsg5","storyMsg6"];if(this.storyMsgIndex>=a.length){this.endStorytelling();return}const o=zt(a[this.storyMsgIndex]),r=c=>c<.5?4*c*c*c:1-Math.pow(-2*c+2,3)/2;this.storyState==="OPENING"?(e.textContent="",n&&n.classList.add("hidden"),this.storyWidthProgress+=t/.45,this.storyWidthProgress>=1&&(this.storyWidthProgress=1,this.storyState="TYPING",this.storyCharIndex=0,this.storyTypeTimer=0),i.style.transform=`scaleX(${r(this.storyWidthProgress)})`):this.storyState==="TYPING"?(i.style.transform="scaleX(1)",n&&n.classList.add("hidden"),this.storyTypeTimer+=t,this.storyTypeTimer>=.025&&(this.storyTypeTimer=0,this.storyCharIndex++,e.textContent=o.substring(0,this.storyCharIndex),this.storyCharIndex>=o.length&&(this.storyState="WAITING"))):this.storyState==="WAITING"?(i.style.transform="scaleX(1)",e.textContent=o,n&&n.classList.remove("hidden")):this.storyState==="CLOSING"&&(e.textContent="",n&&n.classList.add("hidden"),this.storyCloseProgress-=t/.45,this.storyCloseProgress<=0&&(this.storyCloseProgress=0,this.endStorytelling()),i.style.transform=`scaleX(${r(this.storyCloseProgress)})`)}triggerAdvanceStory(){const t=["storyMsg1","storyMsg2","storyMsg3","storyMsg4","storyMsg5","storyMsg6"];if(this.storyMsgIndex>=t.length)return;const e=zt(t[this.storyMsgIndex]);if(this.storyState==="CLOSING"){this.skipStory();return}if(this.storyState==="OPENING")this.storyState="TYPING",this.storyWidthProgress=1,this.storyCharIndex=0,this.storyTypeTimer=0;else if(this.storyState==="TYPING"){this.storyState="WAITING",this.storyCharIndex=e.length;const i=document.getElementById("story-text");i&&(i.textContent=e)}else if(this.storyState==="WAITING")if(this.storyMsgIndex+1<t.length){this.storyMsgIndex++,this.storyState="TYPING",this.storyCharIndex=0,this.storyTypeTimer=0,this.updateStoryImage();const i=document.getElementById("story-text");i&&(i.textContent="")}else this.storyState="CLOSING",this.storyCloseProgress=1}skipStory(){this.endStorytelling()}toggleTeleportMap(t){this.isMap3DActive=t,this.isTeleportMode=t;const e=document.getElementById("mobile-teleport-exit-btn");if(t){this.isMouseOrTouchDetected=!1,e&&e.classList.remove("hidden"),this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.add("hidden"),this.ui.setMap3DVisible(!0),this.activeMapFloor=this.player.z,this.visualActiveFloor=this.player.z,this.mapCursor={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.mapZoom=1,this.mapPanOffsetX=0,this.mapPanOffsetY=0;const i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,o=this.allTeleports.findIndex(c=>c.x===i&&c.y===n&&c.z===a);o!==-1&&(this.selectedTeleportIndex=o),this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="none");const r=document.getElementById("map3d-instructions");r&&(r.style.display="none"),this.isometricCanvas?this.isometricCanvas.style.display="block":this.initIsometricCanvas(),this.teleportConfirmModalActive=!1}else e&&e.classList.add("hidden"),this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.remove("hidden"),this.ui.setMap3DVisible(!1),this.isometricCanvas&&(this.isometricCanvas.style.display="none"),this.teleportConfirmModalActive=!1}onCanvasClick(t){if(!this.isMap3DActive)return;const e=this.renderer.domElement.getBoundingClientRect();if(this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.isTeleportMode){const i=this.raycaster.intersectObjects(this.teleportMeshes);if(i.length>0){const n=i[0].object,{gridX:a,gridY:o,gridZ:r}=n.userData,c=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===a&&this.inactiveTeleportPos.y===o&&this.inactiveTeleportPos.z===r,l=Math.floor(this.player.x),u=Math.floor(this.player.y),f=this.player.z;a===l&&o===u&&r===f?this.toggleTeleportMap(!1):c||this.teleportTo(a,o,r)}}else{const i=this.raycaster.intersectObjects(this.knownMeshes);if(i.length>0){const n=i[0].object,{gridX:a,gridY:o,gridZ:r}=n.userData;this.triggerPathReveal(a,o,r)}}}toggleZoom(){if(this.mazeGen.size<=11)return;this.isZoomActive=!this.isZoomActive,this.staticMapCacheDirty=!0;const t=document.getElementById("zoom-out-icon"),e=document.getElementById("zoom-in-icon");t&&e&&(this.isZoomActive?(t.classList.remove("hidden"),e.classList.add("hidden")):(t.classList.add("hidden"),e.classList.remove("hidden")))}togglePause(){this.isGameOver||this.isDestroyed||this.isIntroPlaying||(this.isPaused=!this.isPaused,this.isPaused?(this.ui.showPause(),this.ui.uiMobilePauseBtn&&this.ui.uiMobilePauseBtn.classList.add("hidden")):(this.ui.hidePause(),this.ui.uiMobilePauseBtn&&!this.ui.uiMobileControls.classList.contains("hidden")&&this.ui.uiMobilePauseBtn.classList.remove("hidden")))}checkExitNeighborVisited(){const t=this.getExitPos(),e=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const i of e){const n=t.x+i.dx,a=t.y+i.dy,o=t.z+i.dz;if(n>=0&&n<this.mazeGen.size&&a>=0&&a<this.mazeGen.size&&o>=0&&o<this.mazeGen.size){const r=this.maze.get(n,a,o);if(r!==this.mazeGen.TYPES.WALL&&(r===this.mazeGen.TYPES.VISITED||r===this.mazeGen.TYPES.START||r===this.mazeGen.TYPES.ELEVATOR_VISITED))return!0}}return!1}findShortestPath(t,e,i=!1){const n=this.mazeGen.size,a=new Int8Array(n*n*n);for(let o=0;o<n;o++)for(let r=0;r<n;r++)for(let c=0;c<n;c++){const l=o*n*n+r*n+c,u=this.maze.get(o,r,c),f=o===t.x&&r===t.y&&c===t.z,p=o===e.x&&r===e.y&&c===e.z,v=o===e.x&&r===e.y&&(c===e.z-1||c===e.z+1)&&c%2===0;if(u===this.mazeGen.TYPES.WALL){a[l]=0;continue}const g=u===this.mazeGen.TYPES.TELEPORT,h=g&&this.discoveredTeleports.has(`${o},${r},${c}`),d=u===this.mazeGen.TYPES.VISITED||u===this.mazeGen.TYPES.START||u===this.mazeGen.TYPES.ELEVATOR_VISITED||h,M=(u===this.mazeGen.TYPES.PATH||g&&!h)&&this.isNearVisited(o,r,c);let _=!1;i?_=d||f||p||v:_=d||M||f||p||v,a[l]=_?1:0}return nl(t,e,a,n,0)??[]}triggerPathReveal(t,e,i){if(this.pathRevealInterval||this.pathfinderBlockedUntil&&Date.now()<this.pathfinderBlockedUntil)return;if(this.pathfindersRemaining<=0){this.ui.showInfoBanner(zt("msgNoPathfindersRemaining"));return}this.pathRevealInterval&&(clearInterval(this.pathRevealInterval),this.pathRevealInterval=null),this.revealedPathSet.clear();const n=this.maze.get(t,e,i)===this.mazeGen.TYPES.EXIT;if(n&&!this.exitPathfinderUnlocked){this.ui.showInfoBanner(zt("msgExitNotFoundYet"));return}let a=i;i%2===0&&(a=this.player.z<i?i+1:i-1,a<1&&(a=1),a>=this.mazeGen.size&&(a=this.mazeGen.size-2));const o={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},r={x:t,y:e,z:a},c=this.findShortestPath(o,r,n);!c||c.length===0||(this.pathfindersRemaining--,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),ns(this),this.activePathReveal=c,this.revealedPathProgress=0,this.revealedPathSet.add(`${t},${e},${i}`),this.pathRevealInterval=setInterval(()=>{if(this.revealedPathProgress<this.activePathReveal.length){const l=this.activePathReveal[this.revealedPathProgress],u=`${l.x},${l.y},${l.z}`;if(this.revealedPathSet.add(u),this.revealedPathProgress>0){const f=this.activePathReveal[this.revealedPathProgress-1];if(Math.abs(l.z-f.z)===2){const p=(l.z+f.z)/2,v=`${l.x},${l.y},${p}`;if(this.revealedPathSet.add(v),this.isMap3DActive&&this.gridMeshes){const m=this.mazeGen.size,g=this.gridMeshes[l.x*m*m+l.y*m+p];g&&(g.material=new ie({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.95*(this.isTeleportMode?.2:1)}))}}}if(this.staticMapCacheDirty=!0,this.isMap3DActive&&this.gridMeshes){const f=this.mazeGen.size,p=this.gridMeshes[l.x*f*f+l.y*f+l.z];p&&(p.material=new ie({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.95*(this.isTeleportMode?.2:1)}))}this.revealedPathProgress++}else clearInterval(this.pathRevealInterval),this.pathRevealInterval=null,this.pathfinderBlockedUntil=Date.now()+600},120))}teleportTo(t,e,i){if(this.skipCellAnimations=!0,this.player.x=t+q.PLAYER_START_X,this.player.y=e+q.PLAYER_START_Y%1,this.player.z=i,this.staticMapCacheDirty=!0,this.toggleTeleportMap(!1),this.maze.get(t,e,i)===this.mazeGen.TYPES.PATH&&(this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${t},${e},${i}`)),!this.isSafeMode){const n=Math.floor(this.degree*1.5)+3;this.teleportCooldownTicks=n,this.inactiveTeleportPos={x:t,y:e,z:i},this.ui.showInfoBanner(zt("msgOopsNoisyShit"));for(const a of this.hunters){a.state="TELEPORT_TRACKING";const o=a.findPathToTarget({x:t,y:e,z:i},this.maze,this.mazeGen.TYPES);o?a.pathToTarget=o:a.pathToTarget=[]}}this.updateFloorUI(),this.draw2DMap(),this.input.keys={}}initIsometricCanvas(){const t=document.createElement("canvas");this.isometricCanvas=t,t.id="isometric-map-canvas",t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.zIndex="101",this.isometricCtx=t.getContext("2d"),this.ui.uiMap3dContainer.appendChild(t),t.addEventListener("click",h=>this.handleIsometricClick(h));const e=()=>{this.isMouseOrTouchDetected||(this.isMouseOrTouchDetected=!0)};t.addEventListener("mousemove",e),t.addEventListener("pointerdown",e);let i=null,n=null,a=0,o=0,r=0,c=0,l=!1,u=!1,f=!1,p=0;t.addEventListener("touchstart",h=>{if(!(!this.isMap3DActive||this.isIntroPlaying)){if(p=0,f=!1,h.touches.length===1){const d=h.touches[0];a=d.clientX,o=d.clientY,r=this.mapPanOffsetX,c=this.mapPanOffsetY,u=!0,l=!1}else if(h.touches.length===2){l=!0,u=!1;const d=h.touches[0],M=h.touches[1];i=Math.hypot(d.clientX-M.clientX,d.clientY-M.clientY),n=this.mapZoom}}},{passive:!1}),t.addEventListener("touchmove",h=>{if(!(!this.isMap3DActive||this.isIntroPlaying)){if(l&&h.touches.length===2){h.preventDefault();const d=h.touches[0],M=h.touches[1],_=Math.hypot(d.clientX-M.clientX,d.clientY-M.clientY);if(i&&i>0&&n){const y=t.getBoundingClientRect(),T=(d.clientX+M.clientX)/2-y.left,S=(d.clientY+M.clientY)/2-y.top,A=this.mapZoom;let O=n*(_/i);O=Math.max(.5,Math.min(4,O));const x=O/A;this.mapPanOffsetX=T-(T-(y.width/2+this.mapPanOffsetX))*x-y.width/2,this.mapPanOffsetY=S-(S-(y.height/2+this.mapPanOffsetY))*x-y.height/2,this.mapZoom=O,p=100}}else if(u&&h.touches.length===1){const d=h.touches[0],M=d.clientX-a,_=d.clientY-o,y=Math.hypot(M,_);if(p=Math.max(p,y),!f&&Math.abs(_)>40&&Math.abs(_)>Math.abs(M)*1.5){const T=this.mazeGen.size;_<-40?this.activeMapFloor-2>=1&&(this.activeMapFloor-=2,f=!0):_>40&&this.activeMapFloor+2<=T-2&&(this.activeMapFloor+=2,f=!0)}f||(this.mapPanOffsetX=r+M,this.mapPanOffsetY=c+_),h.preventDefault()}}},{passive:!1}),t.addEventListener("touchend",h=>{if(l=!1,u=!1,p<8&&!f){const d=h.changedTouches[0];if(d){const M={clientX:d.clientX,clientY:d.clientY};this.handleIsometricClick(M)}}}),t.addEventListener("wheel",h=>{if(!this.isMap3DActive||this.isIntroPlaying)return;h.preventDefault();const d=t.getBoundingClientRect(),M=h.clientX-d.left,_=h.clientY-d.top,y=this.mapZoom,T=1.15;let S=h.deltaY<0?y*T:y/T;S=Math.max(.5,Math.min(4,S));const A=d.width,O=d.height,x=S/y;this.mapPanOffsetX=M-(M-(A/2+this.mapPanOffsetX))*x-A/2,this.mapPanOffsetY=_-(_-(O/2+this.mapPanOffsetY))*x-O/2,this.mapZoom=S},{passive:!1});let v=!1,m=0,g=0;t.addEventListener("mousedown",h=>{if(!this.isMap3DActive||this.isIntroPlaying)return;const d=t.getBoundingClientRect(),M=h.clientX-d.left,_=h.clientY-d.top;if(!(this.floorClickRects&&this.floorClickRects.some(y=>M>=y.x&&M<=y.x+y.w&&_>=y.y&&_<=y.y+y.h))){if(this.isTeleportMode){if(this.teleportConfirmModalActive&&this.teleportModalClickRects&&this.teleportModalClickRects.some(y=>M>=y.x&&M<=y.x+y.w&&_>=y.y&&_<=y.y+y.h)||!this.teleportConfirmModalActive&&this.teleportDotsClickRects&&this.teleportDotsClickRects.some(y=>M>=y.x&&M<=y.x+y.w&&_>=y.y&&_<=y.y+y.h))return;if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const y=this.teleportGoBtnClickRect;if(M>=y.x&&M<=y.x+y.w&&_>=y.y&&_<=y.y+y.h)return}}v=!0,m=h.clientX,g=h.clientY}}),window.addEventListener("mousemove",h=>{if(v){const d=h.clientX-m,M=h.clientY-g;this.mapPanOffsetX+=d,this.mapPanOffsetY+=M,m=h.clientX,g=h.clientY}}),window.addEventListener("mouseup",()=>{v=!1}),t.addEventListener("mousemove",h=>{if(!this.isMap3DActive||this.isIntroPlaying)return;const d=t.getBoundingClientRect(),M=h.clientX-d.left,_=h.clientY-d.top;if(t.style.cursor="default",this.isTeleportMode){if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const y=this.teleportGoBtnClickRect;if(M>=y.x&&M<=y.x+y.w&&_>=y.y&&_<=y.y+y.h){t.style.cursor="pointer";return}}if(this.teleportConfirmModalActive&&this.teleportModalClickRects){for(const y of this.teleportModalClickRects)if(M>=y.x&&M<=y.x+y.w&&_>=y.y&&_<=y.y+y.h){this.teleportModalSelection=y.selection,t.style.cursor="pointer";return}}else if(this.teleportDotsClickRects){const y=this.getSelectableTeleportIndices();for(const T of this.teleportDotsClickRects)if(M>=T.x&&M<=T.x+T.w&&_>=T.y&&_<=T.y+T.h&&y.includes(T.index)){this.selectedTeleportIndex=T.index;const S=this.allTeleports[T.index];this.activeMapFloor=S.z,this.mapCursor={x:S.x,y:S.y,z:S.z},t.style.cursor="pointer";return}}}if(!this.isTeleportMode){const y=this.mazeGen.size,T=this.activeMapFloor;let S=d.width*.7/y;S=Math.max(20,Math.min(48,S));const A=S*this.mapZoom,O=A/2,x=A/4,b=O*5,F=d.width/2+this.mapPanOffsetX,z=d.height/2+this.mapPanOffsetY,W=[];T+2<=y-2&&W.push(T+2),T+1<y&&W.push(T+1),W.push(T),T-1>=0&&W.push(T-1),T-2>=1&&W.push(T-2);for(const C of W){const D=z-(C-T)*b,N=(M-F)/O,H=(_-D)/x,Y=Math.round((N+H)/2),X=Math.round((H-N)/2);if(Y>=0&&Y<y&&X>=0&&X<y&&this.getInteractiveElements(T).some(ot=>ot.x===Y&&ot.y===X&&ot.z===C)){this.mapCursor={x:Y,y:X,z:C},t.style.cursor="pointer";return}}}})}handleIsometricClick(t){if(!this.isMap3DActive||this.isIntroPlaying)return;const e=this.isometricCanvas.getBoundingClientRect(),i=t.clientX-e.left,n=t.clientY-e.top;if(this.isTeleportMode){if(this.teleportConfirmModalActive){if(this.teleportModalClickRects){for(const _ of this.teleportModalClickRects)if(i>=_.x&&i<=_.x+_.w&&n>=_.y&&n<=_.y+_.h){if(_.selection==="go"){const y=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(y.x,y.y,y.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;return}}this.teleportConfirmModalActive=!1;return}if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const _=this.teleportGoBtnClickRect;if(i>=_.x&&i<=_.x+_.w&&n>=_.y&&n<=_.y+_.h){const y=this.allTeleports[this.selectedTeleportIndex],T=Math.floor(this.player.x),S=Math.floor(this.player.y),A=this.player.z,O=y&&y.x===T&&y.y===S&&y.z===A;y&&!O&&(this.teleportTo(y.x,y.y,y.z),this.toggleTeleportMap(!1));return}}if(this.teleportDotsClickRects){const _=this.teleportDotsClickRects.find(y=>i>=y.x&&i<=y.x+y.w&&n>=y.y&&n<=y.y+y.h);if(_){if(this.getSelectableTeleportIndices().includes(_.index)){this.selectedTeleportIndex=_.index;const T=this.allTeleports[_.index];this.activeMapFloor=T.z,this.mapCursor={x:T.x,y:T.y,z:T.z}}return}}}if(this.floorClickRects){for(const _ of this.floorClickRects)if(i>=_.x&&i<=_.x+_.w&&n>=_.y&&n<=_.y+_.h){this.activeMapFloor=_.floor;return}}const a=this.mazeGen.size,o=this.activeMapFloor;let r=e.width*.7/a;r=Math.max(20,Math.min(48,r));const c=r*this.mapZoom,l=c/2,u=c/4,f=l*5,p=e.width/2+this.mapPanOffsetX,v=e.height/2+this.mapPanOffsetY,m=(_,y,T)=>{const S=(_-y)*l+p,A=(_+y)*u-(T-o)*f+v;return{x:S,y:A}};if(this.isTeleportMode){const _=this.getInteractiveElements(o);let y=null,T=1/0;const S=this.isTouchDevice?52:35;for(const A of _){if(A.type!=="teleport")continue;const O=m(A.x,A.y,A.z),x=i-O.x,b=n-O.y,F=Math.sqrt(x*x+b*b);F<T&&(T=F,y=A)}if(y&&T<=S){const{x:A,y:O,z:x}=y,b=this.allTeleports.findIndex(z=>z.x===A&&z.y===O&&z.z===x),F=this.getSelectableTeleportIndices();b!==-1&&F.includes(b)&&(this.selectedTeleportIndex=b,this.mapCursor={x:A,y:O,z:x})}return}const g=this.getInteractiveElements(o);let h=null,d=1/0;const M=this.isTouchDevice?52:35;for(const _ of g){const y=m(_.x,_.y,_.z),T=i-y.x,S=n-y.y,A=Math.sqrt(T*T+S*S);A<d&&(d=A,h=_)}if(h&&d<=M){this.mapCursor={x:h.x,y:h.y,z:h.z},this.triggerPathReveal(h.x,h.y,h.z);return}}navigateCursor(t){const e=this.activeMapFloor,i=this.getInteractiveElements(e);if(i.length===0)return;const n=this.mapCursor.x,a=this.mapCursor.y,o=this.mapCursor.z,r=this.mazeGen.size;if(t==="left"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e+1&&o===e-1)){this.mapCursor={x:n,y:a,z:e+1};return}for(let l=n-1;l>=0;l--){const u=i.filter(f=>f.x===l&&f.y===a);if(u.length>0){const f=u.find(v=>v.z===e-1),p=u.find(v=>v.z===e+1);f&&p?this.mapCursor={x:l,y:a,z:e-1}:this.mapCursor={x:l,y:a,z:u[0].z};return}}}else if(t==="right"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e-1&&o===e+1)){this.mapCursor={x:n,y:a,z:e-1};return}for(let l=n+1;l<r;l++){const u=i.filter(f=>f.x===l&&f.y===a);if(u.length>0){const f=u.find(v=>v.z===e-1),p=u.find(v=>v.z===e+1);f&&p?this.mapCursor={x:l,y:a,z:e+1}:this.mapCursor={x:l,y:a,z:u[0].z};return}}}else if(t==="up"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e-1&&o===e+1)){this.mapCursor={x:n,y:a,z:e-1};return}for(let l=a-1;l>=0;l--){const u=i.filter(f=>f.y===l);if(u.length>0){let f=-1,p=1/0;for(const h of u){const d=Math.abs(h.x-n);d<p?(p=d,f=h.x):d===p&&h.x<f&&(f=h.x)}const v=u.filter(h=>h.x===f),m=v.find(h=>h.z===e-1),g=v.find(h=>h.z===e+1);m&&g?this.mapCursor={x:f,y:l,z:e+1}:this.mapCursor={x:f,y:l,z:v[0].z};return}}}else if(t==="down"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e+1&&o===e-1)){this.mapCursor={x:n,y:a,z:e+1};return}for(let l=a+1;l<r;l++){const u=i.filter(f=>f.y===l);if(u.length>0){let f=-1,p=1/0;for(const h of u){const d=Math.abs(h.x-n);d<p?(p=d,f=h.x):d===p&&h.x<f&&(f=h.x)}const v=u.filter(h=>h.x===f),m=v.find(h=>h.z===e-1),g=v.find(h=>h.z===e+1);m&&g?this.mapCursor={x:f,y:l,z:e-1}:this.mapCursor={x:f,y:l,z:v[0].z};return}}}}getInteractiveElements(t){const e=[],i=this.mazeGen.size,n=this.mazeGen.TYPES,a=(o,r,c)=>{if(c<0||c>=i)return!1;const l=this.maze.get(o,r,c);return l===n.VISITED||l===n.START||l===n.ELEVATOR_VISITED||l===n.TELEPORT&&this.discoveredTeleports.has(`${o},${r},${c}`)};for(let o=0;o<i;o++)for(let r=0;r<i;r++){const c=this.maze.get(o,r,t);if(c===n.WALL)continue;const l=c===n.TELEPORT,u=l&&this.discoveredTeleports.has(`${o},${r},${t}`);if(u){e.push({x:o,y:r,z:t,type:"teleport"});continue}if(c===n.START){e.push({x:o,y:r,z:t,type:"start"});continue}if(c===n.EXIT){this.keysCollected===this.totalKeys&&this.exitPathfinderUnlocked&&e.push({x:o,y:r,z:t,type:"exit"});continue}(c===n.PATH||l&&!u)&&this.isNearVisited(o,r,t)&&e.push({x:o,y:r,z:t,type:"known"})}for(const o of[t-1,t+1])if(!(o<0||o>=i||o-1<1||o+1>=i))for(let r=0;r<i;r++)for(let c=0;c<i;c++){const l=this.maze.get(r,c,o);if(l===n.WALL)continue;const u=l===n.ELEVATOR_VISITED;l===1&&(a(r,c,o-1)||a(r,c,o+1))&&!u&&a(r,c,t)&&e.push({x:r,y:c,z:o,type:"shaft"})}return e}drawIsometricMap(){if(!this.isMap3DActive||this.isIntroPlaying)return;const t=this.isometricCanvas,e=this.isometricCtx;if(!t||!e)return;const i=t.width=window.innerWidth,n=t.height=window.innerHeight;e.clearRect(0,0,i,n),e.fillStyle="#000000",e.fillRect(0,0,i,n);const a=this.mazeGen.size,o=this.activeMapFloor,r=this.visualActiveFloor;let c=i*.7/a;c=Math.max(20,Math.min(48,c));const l=c*this.mapZoom,u=l/2,f=l/2,p=l/4,v=f*5,m=i/2+this.mapPanOffsetX,g=n/2+this.mapPanOffsetY,h=(L,G,Q)=>{const $=L,k=G,ct=($-k)*f+m,B=($+k)*p-(Q-r)*v+g;return{x:ct,y:B}},d=L=>{e.strokeStyle=`rgba(0, 255, 0, ${.15*L})`,e.lineWidth=1;for(let G=0;G<a;G++)for(let Q=0;Q<a;Q++){const $=h(Q,G,o);e.beginPath(),e.moveTo($.x,$.y-p),e.lineTo($.x+f,$.y),e.lineTo($.x,$.y+p),e.lineTo($.x-f,$.y),e.closePath(),e.stroke()}},M=(L,G,Q,$,k,ct,B=1)=>{e.save(),e.globalAlpha=B,e.beginPath(),e.moveTo(L-Q,G),e.lineTo(L,G+$),e.lineTo(L,G+$-k),e.lineTo(L-Q,G-k),e.closePath(),e.fillStyle=ct,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(L,G+$),e.lineTo(L+Q,G),e.lineTo(L+Q,G-k),e.lineTo(L,G+$-k),e.closePath(),e.fillStyle=ct,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.beginPath(),e.moveTo(L-Q,G-k),e.lineTo(L,G+$-k),e.lineTo(L+Q,G-k),e.lineTo(L,G-$-k),e.closePath(),e.fillStyle=ct,e.fill(),e.restore()},_=(L,G,Q,$,k,ct,B,Nt,mt=1)=>{e.save(),e.globalAlpha=mt,e.beginPath(),e.moveTo(L-Q,G),e.lineTo(L,G+$),e.lineTo(L,G+$-k),e.lineTo(L-Q,G-k),e.closePath(),e.fillStyle=ct,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(L,G+$),e.lineTo(L+Q,G),e.lineTo(L+Q,G-k),e.lineTo(L,G+$-k),e.closePath(),e.fillStyle=ct,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.restore(),e.save(),e.globalAlpha=mt,e.beginPath(),e.moveTo(L-Q,G-k),e.lineTo(L,G+$-k),e.lineTo(L+Q,G-k),e.lineTo(L,G-$-k),e.closePath(),e.fillStyle=ct,e.fill(),e.clip(),e.translate(L,G-k),e.scale(1,.5);const Mt=this.vortexAngles.get(Nt)||0;e.rotate(Mt);const ft=this.getHexColorVariation(ct,45),Ct=this.getHexColorVariation(ct,-45),Tt=Q,P=e.createRadialGradient(0,0,0,0,0,Tt);P.addColorStop(0,ft),P.addColorStop(.4,ct),P.addColorStop(1,Ct);const E=e.createRadialGradient(0,0,0,0,0,Tt);E.addColorStop(0,"#ffffff"),E.addColorStop(.3,ft),E.addColorStop(1,"rgba(255, 255, 255, 0)");const V=3;for(let et=0;et<V;et++){const rt=et*2*Math.PI/V;e.beginPath(),e.strokeStyle=P,e.lineWidth=Q*.18,e.lineCap="round";for(let lt=0;lt<=Tt;lt+=1){const gt=5/Tt,ut=rt+lt*gt,yt=lt*Math.cos(ut),xt=lt*Math.sin(ut);lt===0?e.moveTo(yt,xt):e.lineTo(yt,xt)}e.stroke(),e.beginPath(),e.strokeStyle=E,e.lineWidth=Q*.08,e.lineCap="round";for(let lt=Tt*.12;lt<=Tt;lt+=1){const gt=5/Tt,ut=rt+lt*gt+.15,yt=lt*Math.cos(ut),xt=lt*Math.sin(ut);lt===Math.floor(Tt*.12)?e.moveTo(yt,xt):e.lineTo(yt,xt)}e.stroke()}e.restore()},y=(L,G,Q)=>{if(Q<0||Q>=a)return!1;const $=this.maze.get(L,G,Q);return $===this.mazeGen.TYPES.VISITED||$===this.mazeGen.TYPES.START||$===this.mazeGen.TYPES.ELEVATOR_VISITED||$===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${L},${G},${Q}`)},T=(L,G,Q,$,k,ct,B,Nt,mt,Mt)=>{e.save(),e.globalAlpha=Mt;const ft=mt?"#ffffff":Nt?q.COLORS.NEON_UP:q.COLORS.NEON_UP_UNUSED,Ct=mt?"#ffffff":Nt?q.COLORS.NEON_DOWN:q.COLORS.NEON_DOWN_UNUSED;if(ct&&B)e.beginPath(),e.moveTo(L,G-k-$),e.lineTo(L-Q,G-k),e.lineTo(L,G-k+$),e.lineTo(L,G-k),e.closePath(),e.fillStyle=Ct,e.fill(),e.beginPath(),e.moveTo(L,G-k-$),e.lineTo(L,G-k),e.lineTo(L,G-k+$),e.lineTo(L+Q,G-k),e.closePath(),e.fillStyle=ft,e.fill(),e.beginPath(),e.moveTo(L-Q,G),e.lineTo(L,G+$),e.lineTo(L,G+$-k),e.lineTo(L-Q,G-k),e.closePath(),e.fillStyle=Ct,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(L,G+$),e.lineTo(L+Q,G),e.lineTo(L+Q,G-k),e.lineTo(L,G+$-k),e.closePath(),e.fillStyle=ft,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill();else{const Tt=ct?ft:Ct;e.beginPath(),e.moveTo(L-Q,G-k),e.lineTo(L,G+$-k),e.lineTo(L+Q,G-k),e.lineTo(L,G-$-k),e.closePath(),e.fillStyle=Tt,e.fill(),e.beginPath(),e.moveTo(L-Q,G),e.lineTo(L,G+$),e.lineTo(L,G+$-k),e.lineTo(L-Q,G-k),e.closePath(),e.fillStyle=Tt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(L,G+$),e.lineTo(L+Q,G),e.lineTo(L+Q,G-k),e.lineTo(L,G+$-k),e.closePath(),e.fillStyle=Tt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill()}e.restore()},S=(L,G)=>{const Q=this.mazeGen.TYPES;for(let $=0;$<a;$++)for(let k=0;k<a;k++){const ct=this.maze.get(k,$,L),B=h(k,$,L),Nt=ct===Q.TELEPORT,mt=Nt&&this.discoveredTeleports.has(`${k},${$},${L}`),Mt=ct===Q.VISITED||ct===Q.START||ct===Q.ELEVATOR_VISITED||mt,ft=(ct===Q.PATH||Nt&&!mt)&&this.isNearVisited(k,$,L),Ct=this.revealedPathSet.has(`${k},${$},${L}`),Tt=ct===Q.KEY,P=ct===Q.MANA,E=ct===Q.EXIT;if(ct===Q.WALL||ct===Q.STATUE){if(this.isNearVisited(k,$,L)){const et=f*.45,rt=p*.45,lt=u*.25,gt="rgba(90, 20, 160, 0.8)",ut=[{dx:-.23,dy:-.23},{dx:.23,dy:-.23},{dx:-.23,dy:.23},{dx:.23,dy:.23}];for(const yt of ut){const xt=h(k+yt.dx,$+yt.dy,L);M(xt.x,xt.y,et,rt,lt,gt,G)}}continue}for(const et of this.hunters){if(et.state==="SLEEP")continue;const rt=et.visualZ!==null?et.visualZ:et.z,lt=et.visualX!==null?et.visualX:et.x,gt=et.visualY!==null?et.visualY:et.y;if(rt===null||lt===null||gt===null)continue;const ut=Math.round((rt-1)/2)*2+1,yt=Math.max(0,Math.min(a-1,Math.floor(lt))),xt=Math.max(0,Math.min(a-1,Math.floor(gt)));if(k===yt&&$===xt&&L===ut){const Rt=h(lt,gt,rt);z(et,Rt.x,Rt.y-1.5,G)}}if(Mt||ft||Ct||Tt||P||E){const rt=L<a-1&&this.maze.get(k,$,L+1)!==Q.WALL&&this.maze.get(k,$,L+1)!==Q.STATUE,lt=L>0&&this.maze.get(k,$,L-1)!==Q.WALL&&this.maze.get(k,$,L-1)!==Q.STATUE,gt=this.mapCursor.x===k&&this.mapCursor.y===$&&this.mapCursor.z===L;if((Mt||Ct)&&(rt||lt))T(B.x,B.y,f,p,1.5,rt,lt,Mt,Ct,G);else{let xt="#222222",Rt=!1,ht="";const Wt=Math.floor(this.player.x)===k&&Math.floor(this.player.y)===$&&L===this.player.z,Ot=`${k},${$},${L}`;if(Ct)xt="#ffffff";else if(E)ht=this.keysCollected===this.totalKeys?q.COLORS.EXIT:"#ff3300",Rt=!0;else if(mt)k===Math.floor(this.mazeGen.startPos.x)&&$===Math.floor(this.mazeGen.startPos.y)&&L===this.mazeGen.startPos.z?ht=Wt?q.COLORS.TELEPORT:q.COLORS.START:ht=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===k&&this.inactiveTeleportPos.y===$&&this.inactiveTeleportPos.z===L?q.COLORS.TELEPORT_INACTIVE:q.COLORS.TELEPORT,Rt=!0;else if(Mt)ct===Q.START?(ht=Wt?q.COLORS.TELEPORT:q.COLORS.START,Rt=!0):xt="#444444";else if(ft)if(gt){const wt=.5+.5*Math.sin(performance.now()/120);xt=`rgb(${Math.floor(31+224*wt)}, ${Math.floor(58+197*wt)}, ${Math.floor(82+173*wt)})`}else xt="#1f3a52";else(Tt||P)&&(xt="#111111");Rt?_(B.x,B.y,f,p,1.5,ht,Wt,Ot,G):M(B.x,B.y,f,p,1.5,xt,G)}if(Tt&&O(B.x,B.y-1.5,G),P&&x(B.x,B.y-1.5,G),mt){const xt=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===k&&this.inactiveTeleportPos.y===$&&this.inactiveTeleportPos.z===L;let Rt=q.COLORS.TELEPORT;xt&&(Rt=q.COLORS.TELEPORT_INACTIVE),b(B.x,B.y-1.5,Rt,G,gt)}k===Math.floor(this.player.x)&&$===Math.floor(this.player.y)&&L===this.player.z&&F(B.x,B.y-1.5,G)}}},A=(L,G)=>{const Q=this.mazeGen.TYPES;for(let $=0;$<a;$++)for(let k=0;k<a;k++){const ct=this.maze.get(k,$,L);if(ct===Q.WALL)continue;const B=this.revealedPathSet.has(`${k},${$},${L}`),Nt=ct===Q.ELEVATOR_VISITED;if(ct===1&&(y(k,$,L-1)||y(k,$,L+1)),B||y(k,$,o)){const mt=h(k,$,L-1);mt.y-=1.5;const Mt=h(k,$,L+1);let ft=q.COLORS.PATH_KNOWN;B?ft="#ffffff":Nt&&(ft=q.COLORS.PATH_VISITED);const Ct=this.mapCursor.x===k&&this.mapCursor.y===$&&this.mapCursor.z===L;let Tt=ft,P=G;Ct&&(P=.4+.6*(.5+.5*Math.sin(performance.now()/120)),Tt="#ffffff");const V=(lt=>{const gt=lt.replace("#",""),ut=parseInt(gt,16),yt=ut>>16&255,xt=ut>>8&255,Rt=ut&255;return`${yt}, ${xt}, ${Rt}`})(Tt),et=f*.25;e.save(),e.globalAlpha=P;const rt=e.createLinearGradient(0,mt.y,0,Mt.y);rt.addColorStop(0,`rgba(${V}, 0.15)`),rt.addColorStop(.2,`rgba(${V}, 0.65)`),rt.addColorStop(.5,`rgba(${V}, 0.95)`),rt.addColorStop(.8,`rgba(${V}, 0.65)`),rt.addColorStop(1,`rgba(${V}, 0.15)`),e.beginPath(),e.moveTo(mt.x-et,mt.y),e.lineTo(mt.x,mt.y+et/2),e.lineTo(Mt.x,Mt.y+et/2),e.lineTo(Mt.x-et,Mt.y),e.closePath(),e.fillStyle=rt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(mt.x,mt.y+et/2),e.lineTo(mt.x+et,mt.y),e.lineTo(Mt.x+et,Mt.y),e.lineTo(Mt.x,Mt.y+et/2),e.closePath(),e.fillStyle=rt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.restore()}}},O=(L,G,Q)=>{e.save(),e.globalAlpha=Q;const $=Math.sin(performance.now()/200)*3-6,k=G+$;if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){const ct=this.keyImage,B=ct.naturalWidth/ct.naturalHeight,Nt=l*.55;let mt=Nt,Mt=Nt;B>1?Mt=Nt/B:mt=Nt*B,e.drawImage(ct,L-mt/2,k-Mt/2,mt,Mt)}else e.beginPath(),e.moveTo(L,k-5),e.lineTo(L+4,k),e.lineTo(L,k+5),e.lineTo(L-4,k),e.closePath(),e.fillStyle="#ffd700",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();e.restore()},x=(L,G,Q)=>{e.save(),e.globalAlpha=Q;const $=Math.sin(performance.now()/250)*3-6,k=G+$;if(this.manaImage.complete&&this.manaImage.naturalWidth!==0){const ct=this.manaImage,B=ct.naturalWidth/ct.naturalHeight,Nt=l*.55;let mt=Nt,Mt=Nt;B>1?Mt=Nt/B:mt=Nt*B,e.shadowColor="rgba(0, 255, 255, 0.85)",e.shadowBlur=l*.25,e.shadowOffsetX=0,e.shadowOffsetY=0,e.drawImage(ct,L-mt/2,k-Mt/2,mt,Mt)}else e.beginPath(),e.moveTo(L,k-5),e.lineTo(L+4,k),e.lineTo(L,k+5),e.lineTo(L-4,k),e.closePath(),e.fillStyle="#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();e.restore()},b=(L,G,Q,$,k)=>{e.save(),e.globalAlpha=$;const ct=Math.sin(performance.now()/250)*2-4,B=G+ct;if(k){e.save();const Nt=1+.35*(.5+.5*Math.sin(performance.now()/100));e.beginPath(),e.arc(L,B,7*Nt,0,Math.PI*2),e.fillStyle="rgba(255, 255, 255, 0.4)",e.fill(),e.restore()}e.beginPath(),e.arc(L,B,5,0,Math.PI*2),e.fillStyle=k?"#ffffff":Q,e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.2,e.stroke(),e.restore()},F=(L,G,Q)=>{const $=`${this.playerVertical}_${this.playerSide}`,k=this.mageImages[$];let ct=Q;this.deathAnimation&&this.deathAnimation.active&&(Math.floor(Date.now()/120)%2===0||(ct=.2));const B=f*.55,Nt=p*.55,mt=L-f*.12,Mt=G-p*.12;if(e.save(),e.beginPath(),e.ellipse(mt,Mt,B,Nt,0,0,Math.PI*2),e.fillStyle=`rgba(0, 0, 0, ${ct*.45})`,e.fill(),e.restore(),k&&k.complete){e.save(),e.globalAlpha=ct;const ft=l*.7,Ct=ft,Tt=ft*(k.height/k.width),P=G-Tt;e.drawImage(k,L-Ct/2,P,Ct,Tt),e.restore()}else e.save(),e.globalAlpha=ct,e.beginPath(),e.arc(L,G-3,5,0,Math.PI*2),e.fillStyle=q.COLORS.PLAYER,e.fill(),e.strokeStyle=q.COLORS.PLAYER_OUTLINE,e.lineWidth=1.5,e.stroke(),e.restore();if(this.deathAnimation&&this.deathAnimation.active){const ft=Math.min(1,this.deathAnimation.delayElapsed/this.deathAnimation.delayDuration),Ct=-(k&&k.complete?l*.7*(k.height/k.width):l*.5),Tt=l*.7,P=(1-ft)*Ct-4*Tt*ft*(1-ft);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){e.save();const E=l*.55;e.drawImage(this.keyImage,L-E/2,G-E/2+P,E,E),e.restore()}else e.save(),e.beginPath(),e.arc(L,G+P,l*.15,0,2*Math.PI),e.fillStyle="#ffd700",e.fill(),e.restore()}if(q.SHOW_COLLISION_DEBUG){e.save();const ft=q.PLAYER_COLLISION_OFFSET_X||0,Ct=q.PLAYER_COLLISION_OFFSET_Y||0,Tt=(ft-Ct)*f,P=(ft+Ct)*p,E=L+Tt,V=G+P;e.beginPath(),e.moveTo(E,V-q.PLAYER_COLLISION_RADIUS*u),e.lineTo(E+q.PLAYER_COLLISION_RADIUS*l,V),e.lineTo(E,V+q.PLAYER_COLLISION_RADIUS*u),e.lineTo(E-q.PLAYER_COLLISION_RADIUS*l,V),e.closePath(),e.strokeStyle="#ff0000",e.lineWidth=1.5,e.stroke(),e.restore()}},z=(L,G,Q,$)=>{if(L&&L.lowCanvas){e.save(),e.globalAlpha=$;const k=l*.9;e.save(),e.beginPath();const ct=f*.6,B=p*.6;e.ellipse(G,Q,ct,B,0,0,Math.PI*2),e.fillStyle="rgba(0, 0, 0, 0.35)",e.fill(),e.restore();const Nt=Math.sin(L.jellyTime*3)*(l*.06),mt=l*.38+Nt,Mt=Q-mt,ft=L.jellyTime,Ct=Math.sin(ft)*6,Tt=Math.cos(ft*.7)*4,P=1+Math.sin(ft*1.2)*.06,E=1+Math.cos(ft*.8)*.06,V=Ct*Math.PI/180,et=Tt*Math.PI/180;e.save(),e.translate(G,Mt),e.transform(P,Math.tan(et),Math.tan(V),E,0,0),e.imageSmoothingEnabled=!1,e.drawImage(L.lowCanvas,-k/2,-k/2,k,k),e.restore(),e.restore()}else{e.save(),e.globalAlpha=$;const k=4+Math.sin(performance.now()/100)*1.5;e.beginPath(),e.arc(G,Q-3,k,0,Math.PI*2),e.fillStyle=q.COLORS.HUNTER||"#ff00ff",e.fill(),e.strokeStyle="#ff0000",e.lineWidth=1,e.stroke(),e.restore()}},W=L=>{const G=Math.abs(L-r);return G<=2?1-G/2*(1-.35):G<4?.35*(1-(G-2)/2):0};for(let L=1;L<a;L+=2){if(L-1>=0&&(L-1===o-1||L-1===o+1)){const Q=W(L-2),$=W(L),k=Math.max(Q,$)*.8;k>.01&&A(L-1,k)}const G=W(L);G>.01&&(L===o&&d(G),S(L,G))}const C=this.getInteractiveElements(o);if(C.forEach(L=>{if(L.type==="shaft"){const G=h(L.x,L.y,L.z),Q=this.mapCursor.x===L.x&&this.mapCursor.y===L.y&&this.mapCursor.z===L.z;e.save();const $=.5+.5*Math.sin(performance.now()/150);e.beginPath(),e.arc(G.x,G.y,7.5+$*2.5,0,Math.PI*2),e.fillStyle=Q?"#ffffff":"#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke(),e.restore()}}),this.mapCursor.x===Math.floor(this.player.x)&&this.mapCursor.y===Math.floor(this.player.y)&&this.mapCursor.z===this.player.z||C.some(L=>L.x===this.mapCursor.x&&L.y===this.mapCursor.y&&L.z===this.mapCursor.z)){const L=h(this.mapCursor.x,this.mapCursor.y,this.mapCursor.z),G=Math.sin(performance.now()/150)*4;e.save();const Q=1-G/16,$=h(this.mapCursor.x,this.mapCursor.y,o);e.translate($.x,$.y),e.scale(1,.5),e.beginPath(),e.arc(0,0,8*Q,0,Math.PI*2),e.fillStyle=`rgba(0, 0, 0, ${.55*Q})`,e.fill(),e.restore(),e.save();const k=L.x,ct=L.y-u-12+G;e.beginPath(),e.moveTo(k,ct),e.lineTo(k-6,ct-8),e.lineTo(k-3,ct-8),e.lineTo(k-3,ct-16),e.lineTo(k+3,ct-16),e.lineTo(k+3,ct-8),e.lineTo(k+6,ct-8),e.closePath(),e.fillStyle="#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke(),e.restore()}const H=45,Y=n/3,X=n/3*2,J=i-H;e.save(),e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=4,e.lineCap="round",e.beginPath(),e.moveTo(J,Y),e.lineTo(J,X),e.stroke(),e.strokeStyle="rgba(0, 255, 255, 0.4)",e.lineWidth=1.5;for(let L=Y;L<=X;L+=(X-Y)/6)e.beginPath(),e.moveTo(J-5,L),e.lineTo(J+5,L),e.stroke();e.restore();const nt=(Y+X)/2,ot=(X-Y)/2,Z=r-o,at=nt-Z/2*ot;if(e.save(),e.fillStyle="#00ffff",e.beginPath(),e.arc(J,at,5,0,Math.PI*2),e.fill(),e.restore(),this.floorClickRects=[],[{floor:o+2,y:Y,label:`${(o+2+1)/2}F`,valid:o+2<=a-2},{floor:o,y:nt,label:`${(o+1)/2}F`,valid:!0},{floor:o-2,y:X,label:`${(o-2+1)/2}F`,valid:o-2>=1}].forEach(L=>{if(!L.valid)return;const G=60,Q=36,$=J-G-15,k=L.y-Q/2,ct=L.floor===o;e.save(),e.beginPath(),e.moveTo($+6,k),e.lineTo($+G,k),e.lineTo($+G,k+Q-6),e.lineTo($+G-6,k+Q),e.lineTo($,k+Q),e.lineTo($,k+6),e.closePath(),e.fillStyle=ct?"rgba(0, 255, 255, 0.25)":"rgba(0, 0, 0, 0.6)",e.strokeStyle=ct?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=ct?2:1,e.fill(),e.stroke(),e.restore(),e.strokeStyle=ct?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=ct?2:1,e.beginPath(),e.moveTo($+G,L.y),e.lineTo(J-2,L.y),e.stroke(),e.fillStyle=ct?"#00ffff":"rgba(255, 255, 255, 0.5)",e.font="bold 8px Courier New",e.textAlign="center",e.textBaseline="top",e.fillText("LEVEL",$+G/2,k+6),e.fillStyle="#ffffff",e.font="bold 15px Courier New",e.textBaseline="top",e.fillText(L.label,$+G/2,k+16),this.floorClickRects.push({floor:L.floor,x:$,y:k,w:G+15,h:Q})}),this.isTeleportMode||(e.save(),e.beginPath(),e.moveTo(31,30),e.lineTo(145,30),e.lineTo(145,60),e.lineTo(139,66),e.lineTo(25,66),e.lineTo(25,36),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.7)",e.strokeStyle="rgba(0, 255, 255, 0.35)",e.lineWidth=1.5,e.fill(),e.stroke(),e.restore(),e.fillStyle="rgba(0, 255, 255, 0.7)",e.font="bold 8px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="top",e.fillText(zt("hudPathfinders"),25+120/2,35),e.fillStyle="#ffffff",e.font="bold 13px 'Roboto', sans-serif",e.textBaseline="top",e.fillText(`${this.pathfindersRemaining} / ${this.totalPathfinders}`,25+120/2,46)),this.isTeleportMode){const Q=i/2-90,$=30;e.save(),e.beginPath(),e.moveTo(Q+8,$),e.lineTo(Q+180-8,$),e.lineTo(Q+180,$+8),e.lineTo(Q+180,$+38-8),e.lineTo(Q+180-8,$+38),e.lineTo(Q+8,$+38),e.lineTo(Q,$+38-8),e.lineTo(Q,$+8),e.closePath(),e.fillStyle="rgba(255, 140, 0, 0.22)",e.strokeStyle="#ff8c00",e.lineWidth=2.5,e.fill(),e.stroke(),e.restore(),e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(zt("teleportWarning"),i/2,$+38/2)}if(this.isTeleportMode){const L=this.isTouchDevice?64:56,Q=(this.allTeleports.length-1)*L,$=n-60,k=this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive,ct=this.isTouchDevice?82:62,B=this.isTouchDevice?40:30,Nt=this.isTouchDevice?46:36,mt=k?Nt+ct:0,Mt=Q+60+mt,ft=this.isTouchDevice?74:62,Ct=i/2-Mt/2,Tt=$-ft/2,P=Ct+30;if(e.save(),e.beginPath(),e.moveTo(Ct+6,Tt),e.lineTo(Ct+Mt-6,Tt),e.lineTo(Ct+Mt,Tt+6),e.lineTo(Ct+Mt,Tt+ft-6),e.lineTo(Ct+Mt-6,Tt+ft),e.lineTo(Ct+6,Tt+ft),e.lineTo(Ct,Tt+ft-6),e.lineTo(Ct,Tt+6),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.72)",e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=1,e.fill(),e.stroke(),e.restore(),this.teleportDotsClickRects=[],this.getSelectableTeleportIndices(),this.allTeleports.forEach((E,V)=>{const et=P+V*L,rt=`${E.x},${E.y},${E.z}`,lt=this.discoveredTeleports.has(rt),gt=V===this.selectedTeleportIndex,ut=E.x===Math.floor(this.player.x)&&E.y===Math.floor(this.player.y)&&E.z===this.player.z,yt=this.inactiveTeleportPos&&E.x===this.inactiveTeleportPos.x&&E.y===this.inactiveTeleportPos.y&&E.z===this.inactiveTeleportPos.z;e.save();const xt=this.isTouchDevice?13:10,Rt=this.isTouchDevice?19:15;if(!lt)e.beginPath(),e.arc(et,$,xt,0,Math.PI*2),e.fillStyle="rgba(100, 100, 100, 0.45)",e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.15)",e.stroke();else if(yt)e.beginPath(),e.arc(et,$,xt,0,Math.PI*2),e.fillStyle="rgba(255, 45, 0, 0.2)",e.fill(),e.strokeStyle="rgba(255, 45, 0, 0.4)",e.lineWidth=1.2,e.stroke();else{if(gt){const Wt=1+.3*(.5+.5*Math.sin(performance.now()/120)),Ot=(this.isTouchDevice?28:22)*Wt;e.beginPath(),e.arc(et,$,Ot,0,Math.PI*2),e.fillStyle="rgba(0, 255, 255, 0.18)",e.fill()}e.beginPath(),e.arc(et,$,gt?Rt:xt,0,Math.PI*2),e.fillStyle=gt?"#ffffff":"#00b3ff",e.fill(),e.strokeStyle=gt?"#00ffff":"#ffffff",e.lineWidth=gt?1.5:1,e.stroke(),ut&&(e.beginPath(),e.arc(et,$,gt?this.isTouchDevice?10:8:this.isTouchDevice?6:5,0,Math.PI*2),e.fillStyle="#39ff14",e.fill())}e.restore();const ht=this.isTouchDevice?33:25;this.teleportDotsClickRects.push({x:et-ht,y:$-ht,w:ht*2,h:ht*2,index:V})}),k){const E=P+Q+30,V=$-B/2;e.save(),e.beginPath(),e.rect(E,V,ct,B),e.fillStyle="rgba(0, 255, 255, 0.15)",e.strokeStyle="#00ffff",e.lineWidth=1.5,e.fill(),e.stroke(),e.fillStyle="#ffffff",e.font="bold 12px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(zt("teleportGo"),E+ct/2,V+B/2),e.restore(),this.teleportGoBtnClickRect={x:E,y:V,w:ct,h:B}}else this.teleportGoBtnClickRect=null;if(this.teleportConfirmModalActive){e.fillStyle="rgba(0, 0, 0, 0.6)",e.fillRect(0,0,i,n);const E=320,V=160,et=i/2-E/2,rt=n/2-V/2;e.save(),e.beginPath(),e.moveTo(et+10,rt),e.lineTo(et+E-10,rt),e.lineTo(et+E,rt+10),e.lineTo(et+E,rt+V-10),e.lineTo(et+E-10,rt+V),e.lineTo(et+10,rt+V),e.lineTo(et,rt+V-10),e.lineTo(et,rt+10),e.closePath(),e.fillStyle="rgba(10, 18, 30, 0.94)",e.strokeStyle="#00ffff",e.lineWidth=2,e.fill(),e.stroke(),e.restore(),e.fillStyle="#00ffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="top",e.fillText(zt("teleportationLink"),i/2,rt+16),e.strokeStyle="rgba(0, 255, 255, 0.2)",e.lineWidth=1,e.beginPath(),e.moveTo(et+15,rt+34),e.lineTo(et+E-15,rt+34),e.stroke();const lt=this.allTeleports[this.selectedTeleportIndex];e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.fillText(zt("teleportJumpSector",{floor:(lt.z+1)/2}),i/2,rt+52),e.fillStyle="rgba(255, 255, 255, 0.7)",e.font="13px 'Roboto', sans-serif",e.fillText(zt("teleportTargetGrid",{x:lt.x,y:lt.y}),i/2,rt+75);const gt=100,ut=30,yt=i/2-gt-15,xt=rt+105,Rt=i/2+15,ht=rt+105;this.teleportModalClickRects=[{x:yt,y:xt,w:gt,h:ut,selection:"go"},{x:Rt,y:ht,w:gt,h:ut,selection:"cancel"}];const Wt=(Ot,wt,Lt,At)=>{const R=this.teleportModalSelection===At;e.save(),e.beginPath(),e.moveTo(Ot+4,wt),e.lineTo(Ot+gt-4,wt),e.lineTo(Ot+gt,wt+4),e.lineTo(Ot+gt,wt+ut-4),e.lineTo(Ot+gt-4,wt+ut),e.lineTo(Ot+4,wt+ut),e.lineTo(Ot,wt+ut-4),e.lineTo(Ot,wt+4),e.closePath(),e.fillStyle=R?"rgba(0, 255, 255, 0.35)":"rgba(0, 0, 0, 0.6)",e.strokeStyle=R?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=R?2:1,e.fill(),e.stroke(),e.restore(),e.fillStyle=R?"#ffffff":"#00ffff",e.font="bold 13px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Lt,Ot+gt/2,wt+ut/2)};Wt(yt,xt,zt("teleportGo"),"go"),Wt(Rt,ht,zt("teleportCancel"),"cancel")}}}}function rm(s){let t,e,i,n,a,o,r,c,l,u,f,p,v,m,g;return{c(){t=ri("section"),t.innerHTML='<div class="menu-content"><header><h1 class="game-title" data-i18n="gameTitle">VOID ESCAPE</h1></header> <div class="menu-stats-grid"><div class="stat-container hunter"><div class="stat-label" data-i18n="activeHunters">Active Hunters</div> <div class="stat-value" id="hunter-count">-</div></div> <div class="stat-container teleport"><div class="stat-label" data-i18n="activeTeleports">Active Teleports</div> <div class="stat-value" id="teleport-count">-</div></div> <div class="stat-container keys"><div class="stat-label" data-i18n="activeKeys">Active Keys</div> <div class="stat-value" id="keys-count">-</div></div> <div class="stat-container pathfinder"><div class="stat-label" data-i18n="availablePathfinders">Available Pathfinders</div> <div class="stat-value" id="pathfinder-count">-</div></div></div> <div class="control-group"><div class="degree-full-row"><span class="degree-label" data-i18n="mazeDegree">Maze Degree</span> <span class="degree-value" id="degree-val">-</span></div> <input type="range" id="maze-degree" aria-label="Ajustar Grau do Labirinto"/> <p class="hint" data-i18n="degreeHint">Controls the grid size. Higher values create larger, more complex mazes.</p></div> <div class="control-group switch-group"><div class="switch-container"><span class="switch-label" data-i18n="safeMode">Safe Mode</span> <label class="switch" for="safe-mode"><input type="checkbox" id="safe-mode" aria-label="Safe Mode"/> <span class="slider"></span></label></div> <p class="hint" data-i18n="safeModeHint">When active, no hunters will spawn in the maze.</p></div> <div class="menu-action-btns"><button id="start-btn" data-i18n="generateMaze">NEW GAME</button> <button id="continue-btn-menu" class="continue-btn" style="display:none" data-i18n="continue">CONTINUE</button></div> <p class="game-credits" data-i18n="gameCredits">a game by Bernard Rodrigues</p></div>',e=xi(),i=ri("section"),i.innerHTML='<div class="story-container"><div id="story-image-canvas" class="story-image-box"><div id="story-image-loader" class="story-loader hidden"><div class="spinner"></div> <span data-i18n="loading">LOADING...</span></div> <img id="story-img" src="" alt="Story Image" style="display: none; max-width: 100%; max-height: 100%;"/></div> <div id="story-dialogue" class="story-dialogue-box"><span id="story-text"></span> <span id="story-arrow" class="story-arrow hidden">▼</span></div> <div class="story-actions"><button id="story-skip-btn">SKIP</button></div></div>',n=xi(),a=ri("section"),a.innerHTML='<div class="popup-container victory"><h1 data-i18n="victoryTitle">Mission Accomplished</h1> <p data-i18n="victoryText">You have successfully navigated the 3D void.</p> <p class="victory-stats"><span data-i18n="mapCompletion">MAP COMPLETION</span>: <span id="victory-completion-rate">0%</span></p> <p class="victory-stats"><span data-i18n="victoryDeaths">DEATHS</span>: <span id="victory-deaths-count">0</span></p> <p class="victory-stats"><span data-i18n="victoryDegree">MAZE DEGREE</span>: <span id="victory-maze-degree">0</span></p> <p class="victory-stats"><span data-i18n="victoryTime">COMPLETION TIME</span>: <span id="victory-completion-time">00:00</span></p> <p class="victory-stats"><span data-i18n="victoryMana">MANA COLLECTED</span>: <span id="victory-mana-count">0/0</span></p> <div class="end-game-btns"><button id="restart-btn-victory" class="end-btn" data-i18n="playAgain">PLAY AGAIN</button> <button id="menu-btn-victory" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',o=xi(),r=ri("section"),r.innerHTML='<div class="popup-container death"><h1 data-i18n="gameOverTitle">Terminated</h1> <p data-i18n="gameOverText">You were caught by the void hunters.</p> <div class="end-game-btns"><button id="continue-btn-death" class="end-btn continue-highlight" data-i18n="continue">CONTINUE</button> <button id="retry-btn-death" class="end-btn" data-i18n="playAgain">PLAY AGAIN</button> <button id="menu-btn-death" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',c=xi(),l=ri("section"),l.innerHTML='<div class="popup-container pause"><h1 data-i18n="pauseTitle">PAUSED</h1> <div class="end-game-btns"><button id="resume-btn" class="end-btn continue-highlight" data-i18n="resume">RESUME</button> <button id="menu-btn-pause" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',u=xi(),f=ri("div"),f.innerHTML='<span class="saving-icon">💾</span> <span data-i18n="saving">SAVING...</span>',p=xi(),v=ri("main"),v.innerHTML='<button id="mobile-pause-btn" class="hidden" aria-label="Pause Game">✕</button> <button id="mobile-teleport-exit-btn" class="hidden" aria-label="Exit Teleport Map">✕</button> <div id="left-hud-panel" class="intro-hidden"><div class="hud-item-group"><div class="keys-title" data-i18n="hudKeys">KEYS</div> <div class="keys-counter"><span id="keys-collected-count">0</span> / <span id="keys-total-count">0</span></div> <div id="keys-list-container"></div></div> <div class="hud-item-group" id="pathfinder-hud-group"><div class="pathfinders-title" data-i18n="hudPathfinders">PATHFINDERS</div> <div class="pathfinders-counter"><span id="pathfinders-remaining-count">0</span> / <span id="pathfinders-total-count">0</span></div></div></div> <div id="map-area-container" class="intro-hidden"><div id="desktop-hud-row"><div id="mana-counter-desktop" class="mana-panel-hud"><span class="mana-icon">✨</span> <span class="mana-label" data-i18n="hudMana">MANA:</span> <span id="mana-collected-count-desktop">0</span>/<span id="mana-total-count-desktop">0</span></div> <div id="hunter-status-panel"><span class="status-label" data-i18n="statusLabel">HUNTER STATUS:</span> <div class="status-marquee-container"><span id="hunter-status-val" class="status-marquee-text status--scanning" data-i18n="statusScanning">SCANNING</span></div></div></div> <div style="position: relative; display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 90vw; margin-bottom: calc(var(--h-unit) * 2); margin-bottom: calc(var(--d-h-unit) * 2);"><canvas id="main-2d-canvas" aria-label="2D Navigation Map" style="margin-bottom: 0;"></canvas> <button id="mobile-zoom-btn" aria-label="Toggle Zoom"><svg id="zoom-out-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;"><circle cx="11" cy="11" r="6"></circle><line x1="21" y1="21" x2="15.5" y2="15.5"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg> <svg id="zoom-in-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;" class="hidden"><circle cx="11" cy="11" r="6"></circle><line x1="21" y1="21" x2="15.5" y2="15.5"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg></button></div> <div id="mobile-proximeter-row"><div id="mana-counter-mobile" class="mana-panel-hud"><span class="mana-icon">✨</span> <span class="mana-label" data-i18n="hudMana">MANA:</span> <span id="mana-collected-count-mobile">0</span>/<span id="mana-total-count-mobile">0</span></div> <div id="proximeter-container" class="hidden"><div class="proximeter-label" data-i18n="proximityDetector">PROXIMITY DETECTOR</div> <div class="proximeter-bar"><span class="proximeter-cell" data-index="1"></span> <span class="proximeter-cell" data-index="2"></span> <span class="proximeter-cell" data-index="3"></span> <span class="proximeter-cell" data-index="4"></span> <span class="proximeter-cell" data-index="5"></span> <span class="proximeter-cell" data-index="6"></span> <span class="proximeter-cell" data-index="7"></span> <span class="proximeter-cell" data-index="8"></span> <span class="proximeter-cell" data-index="9"></span> <span class="proximeter-cell" data-index="10"></span></div></div></div> <div id="bottom-hud-container" class="intro-hidden"><div id="floor-display" aria-live="polite"><span class="hud-label" data-i18n="hudFloor">Floor</span> <span id="current-floor">0</span></div> <div id="visited-display" aria-live="polite"><span class="hud-label" data-i18n="hudVisited">Visited</span> <span class="visited-value"><span id="visited-percent">0</span>%</span></div></div></div> <div id="right-hud-panel" class="intro-hidden"><aside id="map-legend"><h3 data-i18n="mapLegendTitle">MAP LEGEND</h3> <div class="legend-item"><span class="color-box color-box--visited"></span> <span data-i18n="legendVisited">Visited Path</span></div> <div class="legend-item"><span class="color-box color-box--known"></span> <span data-i18n="legendKnown">Known Path</span></div> <div class="legend-item"><span class="color-box color-box--start"></span> <span data-i18n="legendStart">Starting Point</span></div> <div class="legend-item"><span class="color-box color-box--exit"></span> <span data-i18n="legendExit">Maze Exit</span></div> <div id="legend-hunter" class="legend-item"><span class="color-box color-box--hunter"></span> <span data-i18n="legendHunter">Void Hunter</span></div> <div class="legend-item"><span class="color-box color-box--teleport"></span> <span data-i18n="legendTeleport">Teleport</span></div> <div class="legend-item"><span class="symbol-box"><svg viewBox="0 0 24 24" fill="none" style="width: 100%; height: 100%;"><path d="M12 2L5 9H9V11H15V9H19L12 2Z" fill="#00ffff"></path><path d="M12 22L19 15H15V13H9V15H5L12 22Z" fill="#ff00ff"></path></svg></span> <span data-i18n="legendElevator">Elevator</span></div></aside> <aside id="controls-hint"><h3 data-i18n="controlsHintTitle">CONTROLS HINT</h3> <div id="controls-hint-content"></div></aside></div> <nav id="mobile-controls" class="hidden"><button id="mobile-down" class="mobile-btn" disabled="" aria-label="Go Down">▼</button> <button id="mobile-map" class="mobile-btn" disabled="" aria-label="Open Map" data-i18n="map">MAP</button> <button id="mobile-up" class="mobile-btn" disabled="" aria-label="Go Up">▲</button></nav> <div id="map3d-container" class="hidden"></div>',m=xi(),g=ri("section"),g.innerHTML='<div class="story-loader"><div class="spinner"></div> <span data-i18n="generatingMaze">GENERATING MAZE...</span></div>',Pe(t,"id","start-menu"),Pe(i,"id","story-screen"),Pe(i,"class","hidden"),Pe(a,"id","victory-screen"),Pe(a,"class","hidden"),Pe(r,"id","game-over-screen"),Pe(r,"class","hidden"),Pe(l,"id","pause-screen"),Pe(l,"class","hidden"),Pe(f,"id","saving-indicator"),Pe(f,"class","hidden"),Pe(v,"id","game-container"),Pe(g,"id","loading-screen"),Pe(g,"class","hidden")},m(h,d){Ee(h,t,d),Ee(h,e,d),Ee(h,i,d),Ee(h,n,d),Ee(h,a,d),Ee(h,o,d),Ee(h,r,d),Ee(h,c,d),Ee(h,l,d),Ee(h,u,d),Ee(h,f,d),Ee(h,p,d),Ee(h,v,d),Ee(h,m,d),Ee(h,g,d)},p:an,i:an,o:an,d(h){h&&(Me(t),Me(e),Me(i),Me(n),Me(a),Me(o),Me(r),Me(c),Me(l),Me(u),Me(f),Me(p),Me(v),Me(m),Me(g))}}}function om(s){let t=null;function e(a){var r,c,l;t&&t.destroy(),al(),(r=document.getElementById("start-menu"))==null||r.classList.add("hidden"),(c=document.getElementById("victory-screen"))==null||c.classList.add("hidden"),(l=document.getElementById("game-over-screen"))==null||l.classList.add("hidden");const o=document.getElementById("loading-screen");o&&(o.classList.remove("hidden"),rs()),setTimeout(()=>{try{t=new yo(a,q.BRANCHING_FACTOR)}finally{o&&o.classList.add("hidden")}},50)}function i(){var r,c,l;const a=sl();if(!a)return;t&&t.destroy(),(r=document.getElementById("start-menu"))==null||r.classList.add("hidden"),(c=document.getElementById("victory-screen"))==null||c.classList.add("hidden"),(l=document.getElementById("game-over-screen"))==null||l.classList.add("hidden");const o=document.getElementById("loading-screen");o&&(o.classList.remove("hidden"),rs()),setTimeout(()=>{try{t=new yo(a.degree,a.branchingFactor,a)}finally{o&&o.classList.add("hidden")}},50)}function n(){var o,r,c;t&&t.destroy(),(o=document.getElementById("victory-screen"))==null||o.classList.add("hidden"),(r=document.getElementById("game-over-screen"))==null||r.classList.add("hidden");const a=document.getElementById("continue-btn-menu");a&&(a.style.display=_o()?"":"none"),(c=document.getElementById("start-menu"))==null||c.classList.remove("hidden")}return _l(()=>{rs();const a=document.getElementById("maze-degree"),o=document.getElementById("degree-val"),r=document.getElementById("hunter-count"),c=document.getElementById("teleport-count"),l=document.getElementById("keys-count"),u=document.getElementById("pathfinder-count"),f=document.getElementById("safe-mode"),p=z=>{const C=f&&f.checked?0:q.getHunterCount(z);r&&(r.innerText=String(C),r.style.color=C>0?"#f00":"#88ccff")};f&&a&&(f.onchange=()=>{p(parseInt(a.value))});const v=z=>{const W=q.getTeleportCount(z);c&&(c.innerText=String(W))},m=z=>{const W=q.getHunterCount(z)*2;l&&(l.innerText=String(W))},g=z=>{const W=q.getPathfinderCount(z);u&&(u.innerText=String(W))};if(a){q.MIN_MAZE_DEGREE!==void 0&&(a.min=String(q.MIN_MAZE_DEGREE)),q.MAX_MAZE_DEGREE!==void 0&&(a.max=String(q.MAX_MAZE_DEGREE)),q.MAZE_DEGREE!==void 0&&(a.value=String(q.MAZE_DEGREE)),a.oninput=()=>{const W=parseInt(a.value);o&&(o.innerText=String(W)),p(W),v(W),m(W),g(W)};const z=parseInt(a.value);o&&(o.innerText=String(z)),p(z),v(z),m(z),g(z)}const h=document.getElementById("continue-btn-menu");h&&(h.style.display=_o()?"":"none");const d=document.getElementById("mobile-pause-btn");d&&(d.onclick=z=>{z.stopPropagation(),t&&t.togglePause()});const M=document.getElementById("mobile-teleport-exit-btn");M&&(M.onclick=z=>{z.stopPropagation(),t&&t.isTeleportMode&&t.toggleTeleportMap(!1)});const _=document.getElementById("start-btn");_&&a&&(_.onclick=()=>{e(parseInt(a.value))});const y=document.getElementById("continue-btn-menu");y&&(y.onclick=()=>{i()});const T=document.getElementById("restart-btn-victory");T&&a&&(T.onclick=()=>{e(parseInt(a.value))});const S=document.getElementById("menu-btn-victory");S&&(S.onclick=()=>{n()});const A=document.getElementById("continue-btn-death");A&&(A.onclick=()=>{i()});const O=document.getElementById("retry-btn-death");O&&a&&(O.onclick=()=>{e(parseInt(a.value))});const x=document.getElementById("menu-btn-death");x&&(x.onclick=()=>{n()});const b=document.getElementById("resume-btn");b&&(b.onclick=()=>{t&&t.togglePause()});const F=document.getElementById("menu-btn-pause");F&&(F.onclick=()=>{n()})}),[]}class lm extends Cl{constructor(t){super(),wl(this,t,om,rm,fl,{})}}new lm({target:document.getElementById("app")});
