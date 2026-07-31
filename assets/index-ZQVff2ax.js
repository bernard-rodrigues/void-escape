var dl=Object.defineProperty;var ul=(s,t,e)=>t in s?dl(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var D=(s,t,e)=>ul(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();function an(){}function Mo(s){return s()}function Ba(){return Object.create(null)}function gs(s){s.forEach(Mo)}function To(s){return typeof s=="function"}function fl(s,t){return s!=s?t==t:s!==t||s&&typeof s=="object"||typeof s=="function"}function pl(s){return Object.keys(s).length===0}function xe(s,t,e){s.insertBefore(t,e||null)}function Me(s){s.parentNode&&s.parentNode.removeChild(s)}function ri(s){return document.createElement(s)}function ml(s){return document.createTextNode(s)}function Ti(){return ml(" ")}function Pe(s,t,e){e==null?s.removeAttribute(t):s.getAttribute(t)!==e&&s.setAttribute(t,e)}function gl(s){return Array.from(s.childNodes)}let Sn;function Tn(s){Sn=s}function vl(){if(!Sn)throw new Error("Function called outside component initialization");return Sn}function _l(s){vl().$$.on_mount.push(s)}const en=[],ka=[];let rn=[];const Ha=[],yl=Promise.resolve();let ra=!1;function Ml(){ra||(ra=!0,yl.then(Eo))}function oa(s){rn.push(s)}const bs=new Set;let Ui=0;function Eo(){if(Ui!==0)return;const s=Sn;do{try{for(;Ui<en.length;){const t=en[Ui];Ui++,Tn(t),Tl(t.$$)}}catch(t){throw en.length=0,Ui=0,t}for(Tn(null),en.length=0,Ui=0;ka.length;)ka.pop()();for(let t=0;t<rn.length;t+=1){const e=rn[t];bs.has(e)||(bs.add(e),e())}rn.length=0}while(en.length);for(;Ha.length;)Ha.pop()();ra=!1,bs.clear(),Tn(s)}function Tl(s){if(s.fragment!==null){s.update(),gs(s.before_update);const t=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,t),s.after_update.forEach(oa)}}function El(s){const t=[],e=[];rn.forEach(i=>s.indexOf(i)===-1?t.push(i):e.push(i)),e.forEach(i=>i()),rn=t}const xl=new Set;function Sl(s,t){s&&s.i&&(xl.delete(s),s.i(t))}function Al(s,t,e){const{fragment:i,after_update:n}=s.$$;i&&i.m(t,e),oa(()=>{const a=s.$$.on_mount.map(Mo).filter(To);s.$$.on_destroy?s.$$.on_destroy.push(...a):gs(a),s.$$.on_mount=[]}),n.forEach(oa)}function bl(s,t){const e=s.$$;e.fragment!==null&&(El(e.after_update),gs(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function Pl(s,t){s.$$.dirty[0]===-1&&(en.push(s),Ml(),s.$$.dirty.fill(0)),s.$$.dirty[t/31|0]|=1<<t%31}function Cl(s,t,e,i,n,a,o=null,r=[-1]){const c=Sn;Tn(s);const l=s.$$={fragment:null,ctx:[],props:a,update:an,not_equal:n,bound:Ba(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Ba(),dirty:r,skip_bound:!1,root:t.target||c.$$.root};o&&o(l.root);let h=!1;if(l.ctx=e?e(s,t.props||{},(f,p,...g)=>{const m=g.length?g[0]:p;return l.ctx&&n(l.ctx[f],l.ctx[f]=m)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](m),h&&Pl(s,f)),p}):[],l.update(),h=!0,gs(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){const f=gl(t.target);l.fragment&&l.fragment.l(f),f.forEach(Me)}else l.fragment&&l.fragment.c();t.intro&&Sl(s.$$.fragment),Al(s,t.target,t.anchor),Eo()}Tn(c)}class wl{constructor(){D(this,"$$");D(this,"$$set")}$destroy(){bl(this,1),this.$destroy=an}$on(t,e){if(!To(e))return an;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(e),()=>{const n=i.indexOf(e);n!==-1&&i.splice(n,1)}}$set(t){this.$$set&&!pl(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Rl="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Rl);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ta="160",zi={ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ll=0,Va=1,Il=2,xo=1,Dl=2,ii=3,_i=0,Re=1,ni=2,mi=0,on=1,Wa=2,Ya=3,Xa=4,Ol=5,Pi=100,Nl=101,Ul=102,$a=103,Ka=104,zl=200,Fl=201,Gl=202,Bl=203,la=204,ca=205,kl=206,Hl=207,Vl=208,Wl=209,Yl=210,Xl=211,$l=212,Kl=213,ql=214,jl=0,Zl=1,Jl=2,os=3,Ql=4,tc=5,ec=6,ic=7,Ea=0,nc=1,sc=2,gi=0,ac=1,rc=2,oc=3,lc=4,cc=5,hc=6,So=300,cn=301,hn=302,ha=303,da=304,vs=306,ua=1e3,We=1001,fa=1002,Ae=1003,qa=1004,Ps=1005,ze=1006,dc=1007,An=1008,vi=1009,uc=1010,fc=1011,xa=1012,Ao=1013,fi=1014,pi=1015,bn=1016,bo=1017,Po=1018,wi=1020,pc=1021,Ye=1023,mc=1024,gc=1025,Ri=1026,dn=1027,vc=1028,Co=1029,_c=1030,wo=1031,Ro=1033,Cs=33776,ws=33777,Rs=33778,Ls=33779,ja=35840,Za=35841,Ja=35842,Qa=35843,Lo=36196,tr=37492,er=37496,ir=37808,nr=37809,sr=37810,ar=37811,rr=37812,or=37813,lr=37814,cr=37815,hr=37816,dr=37817,ur=37818,fr=37819,pr=37820,mr=37821,Is=36492,gr=36494,vr=36495,yc=36283,_r=36284,yr=36285,Mr=36286,Io=3e3,Li=3001,Mc=3200,Tc=3201,Do=0,Ec=1,Ge="",ge="srgb",ai="srgb-linear",Sa="display-p3",_s="display-p3-linear",ls="linear",ee="srgb",cs="rec709",hs="p3",Gi=7680,Tr=519,xc=512,Sc=513,Ac=514,Oo=515,bc=516,Pc=517,Cc=518,wc=519,Er=35044,xr="300 es",pa=1035,si=2e3,ds=2001;class Ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const a=n.indexOf(e);a!==-1&&n.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let a=0,o=n.length;a<o;a++)n[a].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ss=Math.PI/180,ma=180/Math.PI;function Cn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_e[s&255]+_e[s>>8&255]+_e[s>>16&255]+_e[s>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[i&255]+_e[i>>8&255]+_e[i>>16&255]+_e[i>>24&255]).toLowerCase()}function be(s,t,e){return Math.max(t,Math.min(e,s))}function Rc(s,t){return(s%t+t)%t}function Ds(s,t,e){return(1-e)*s+e*t}function Sr(s){return(s&s-1)===0&&s!==0}function ga(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function mn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ce(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Lc={DEG2RAD:ss};class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*i-o*n+t.x,this.y=a*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,i,n,a,o,r,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,o,r,c,l)}set(t,e,i,n,a,o,r,c,l){const h=this.elements;return h[0]=t,h[1]=n,h[2]=r,h[3]=e,h[4]=a,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,o=i[0],r=i[3],c=i[6],l=i[1],h=i[4],f=i[7],p=i[2],g=i[5],m=i[8],v=n[0],d=n[3],u=n[6],y=n[1],_=n[4],M=n[7],T=n[2],S=n[5],A=n[8];return a[0]=o*v+r*y+c*T,a[3]=o*d+r*_+c*S,a[6]=o*u+r*M+c*A,a[1]=l*v+h*y+f*T,a[4]=l*d+h*_+f*S,a[7]=l*u+h*M+f*A,a[2]=p*v+g*y+m*T,a[5]=p*d+g*_+m*S,a[8]=p*u+g*M+m*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*r*l-i*a*h+i*r*c+n*a*l-n*o*c}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],h=t[8],f=h*o-r*l,p=r*c-h*a,g=l*a-o*c,m=e*f+i*p+n*g;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=f*v,t[1]=(n*l-h*i)*v,t[2]=(r*i-n*o)*v,t[3]=p*v,t[4]=(h*e-n*c)*v,t[5]=(n*a-r*e)*v,t[6]=g*v,t[7]=(i*c-l*e)*v,t[8]=(o*e-i*a)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,a,o,r){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*o+l*r)+o+t,-n*l,n*c,-n*(-l*o+c*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Os.makeScale(t,e)),this}rotate(t){return this.premultiply(Os.makeRotation(-t)),this}translate(t,e){return this.premultiply(Os.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Os=new Kt;function No(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function us(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ic(){const s=us("canvas");return s.style.display="block",s}const Ar={};function En(s){s in Ar||(Ar[s]=!0,console.warn(s))}const br=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pr=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Dn={[ai]:{transfer:ls,primaries:cs,toReference:s=>s,fromReference:s=>s},[ge]:{transfer:ee,primaries:cs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[_s]:{transfer:ls,primaries:hs,toReference:s=>s.applyMatrix3(Pr),fromReference:s=>s.applyMatrix3(br)},[Sa]:{transfer:ee,primaries:hs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Pr),fromReference:s=>s.applyMatrix3(br).convertLinearToSRGB()}},Dc=new Set([ai,_s]),Qt={enabled:!0,_workingColorSpace:ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Dc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=Dn[t].toReference,n=Dn[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Dn[s].primaries},getTransfer:function(s){return s===Ge?ls:Dn[s].transfer}};function ln(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Bi;class Uo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=us("canvas")),Bi.width=t.width,Bi.height=t.height;const i=Bi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=us("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=ln(a[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ln(e[i]/255)*255):e[i]=ln(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Oc=0;class zo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=Cn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,r=n.length;o<r;o++)n[o].isDataTexture?a.push(Us(n[o].image)):a.push(Us(n[o]))}else a=Us(n);i.url=a}return e||(t.images[this.uuid]=i),i}}function Us(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Uo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nc=0;class Oe extends Ni{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,i=We,n=We,a=ze,o=An,r=Ye,c=vi,l=Oe.DEFAULT_ANISOTROPY,h=Ge){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=Cn(),this.name="",this.source=new zo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Li?ge:Ge),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==So)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ua:t.x=t.x-Math.floor(t.x);break;case We:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ua:t.y=t.y-Math.floor(t.y);break;case We:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ge?Li:Io}set encoding(t){En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Li?ge:Ge}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=So;Oe.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,i=0,n=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*a,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*a,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*a,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,a;const c=t.elements,l=c[0],h=c[4],f=c[8],p=c[1],g=c[5],m=c[9],v=c[2],d=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-v)<.01&&Math.abs(m-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+v)<.1&&Math.abs(m+d)<.1&&Math.abs(l+g+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,M=(g+1)/2,T=(u+1)/2,S=(h+p)/4,A=(f+v)/4,O=(m+d)/4;return _>M&&_>T?_<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(_),n=S/i,a=A/i):M>T?M<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(M),i=S/n,a=O/n):T<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(T),i=A/a,n=O/a),this.set(i,n,a,e),this}let y=Math.sqrt((d-m)*(d-m)+(f-v)*(f-v)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(d-m)/y,this.y=(f-v)/y,this.z=(p-h)/y,this.w=Math.acos((l+g+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uc extends Ni{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const n={width:t,height:e,depth:1};i.encoding!==void 0&&(En("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Li?ge:Ge),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Oe(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new zo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends Uc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Fo extends Oe{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zc extends Oe{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,a,o,r){let c=i[n+0],l=i[n+1],h=i[n+2],f=i[n+3];const p=a[o+0],g=a[o+1],m=a[o+2],v=a[o+3];if(r===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(r===1){t[e+0]=p,t[e+1]=g,t[e+2]=m,t[e+3]=v;return}if(f!==v||c!==p||l!==g||h!==m){let d=1-r;const u=c*p+l*g+h*m+f*v,y=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const T=Math.sqrt(_),S=Math.atan2(T,u*y);d=Math.sin(d*S)/T,r=Math.sin(r*S)/T}const M=r*y;if(c=c*d+p*M,l=l*d+g*M,h=h*d+m*M,f=f*d+v*M,d===1-r){const T=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=T,l*=T,h*=T,f*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,n,a,o){const r=i[n],c=i[n+1],l=i[n+2],h=i[n+3],f=a[o],p=a[o+1],g=a[o+2],m=a[o+3];return t[e]=r*m+h*f+c*g-l*p,t[e+1]=c*m+h*p+l*f-r*g,t[e+2]=l*m+h*g+r*p-c*f,t[e+3]=h*m-r*f-c*p-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,a=t._z,o=t._order,r=Math.cos,c=Math.sin,l=r(i/2),h=r(n/2),f=r(a/2),p=c(i/2),g=c(n/2),m=c(a/2);switch(o){case"XYZ":this._x=p*h*f+l*g*m,this._y=l*g*f-p*h*m,this._z=l*h*m+p*g*f,this._w=l*h*f-p*g*m;break;case"YXZ":this._x=p*h*f+l*g*m,this._y=l*g*f-p*h*m,this._z=l*h*m-p*g*f,this._w=l*h*f+p*g*m;break;case"ZXY":this._x=p*h*f-l*g*m,this._y=l*g*f+p*h*m,this._z=l*h*m+p*g*f,this._w=l*h*f-p*g*m;break;case"ZYX":this._x=p*h*f-l*g*m,this._y=l*g*f+p*h*m,this._z=l*h*m-p*g*f,this._w=l*h*f+p*g*m;break;case"YZX":this._x=p*h*f+l*g*m,this._y=l*g*f+p*h*m,this._z=l*h*m-p*g*f,this._w=l*h*f-p*g*m;break;case"XZY":this._x=p*h*f-l*g*m,this._y=l*g*f-p*h*m,this._z=l*h*m+p*g*f,this._w=l*h*f+p*g*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],a=e[8],o=e[1],r=e[5],c=e[9],l=e[2],h=e[6],f=e[10],p=i+r+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-c)*g,this._y=(a-l)*g,this._z=(o-n)*g}else if(i>r&&i>f){const g=2*Math.sqrt(1+i-r-f);this._w=(h-c)/g,this._x=.25*g,this._y=(n+o)/g,this._z=(a+l)/g}else if(r>f){const g=2*Math.sqrt(1+r-i-f);this._w=(a-l)/g,this._x=(n+o)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+f-i-r);this._w=(o-n)/g,this._x=(a+l)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,a=t._z,o=t._w,r=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*r+n*l-a*c,this._y=n*h+o*c+a*r-i*l,this._z=a*h+o*l+i*c-n*r,this._w=o*h-i*r-n*c-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,a=this._z,o=this._w;let r=o*t._w+i*t._x+n*t._y+a*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=i,this._y=n,this._z=a,this;const c=1-r*r;if(c<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*i+e*this._x,this._y=g*n+e*this._y,this._z=g*a+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,r),f=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=n*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(a),i*Math.cos(a),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,e=0,i=0){j.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*n,this.y=a[1]*e+a[4]*i+a[7]*n,this.z=a[2]*e+a[5]*i+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=t.elements,o=1/(a[3]*e+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*n+a[12])*o,this.y=(a[1]*e+a[5]*i+a[9]*n+a[13])*o,this.z=(a[2]*e+a[6]*i+a[10]*n+a[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,a=t.x,o=t.y,r=t.z,c=t.w,l=2*(o*n-r*i),h=2*(r*e-a*n),f=2*(a*i-o*e);return this.x=e+c*l+o*f-r*h,this.y=i+c*h+r*l-a*f,this.z=n+c*f+a*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n,this.y=a[1]*e+a[5]*i+a[9]*n,this.z=a[2]*e+a[6]*i+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,a=t.z,o=e.x,r=e.y,c=e.z;return this.x=n*c-a*r,this.y=a*o-i*c,this.z=i*r-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return zs.copy(this).projectOnVector(t),this.sub(zs)}reflect(t){return this.sub(zs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zs=new j,Cr=new Di;class wn{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Be.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Be.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Be.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,r=a.count;o<r;o++)t.isMesh===!0?t.getVertexPosition(o,Be):Be.fromBufferAttribute(a,o),Be.applyMatrix4(t.matrixWorld),this.expandByPoint(Be);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),On.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),On.copy(i.boundingBox)),On.applyMatrix4(t.matrixWorld),this.union(On)}const n=t.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Be),Be.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gn),Nn.subVectors(this.max,gn),ki.subVectors(t.a,gn),Hi.subVectors(t.b,gn),Vi.subVectors(t.c,gn),oi.subVectors(Hi,ki),li.subVectors(Vi,Hi),Ei.subVectors(ki,Vi);let e=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Ei.z,Ei.y,oi.z,0,-oi.x,li.z,0,-li.x,Ei.z,0,-Ei.x,-oi.y,oi.x,0,-li.y,li.x,0,-Ei.y,Ei.x,0];return!Fs(e,ki,Hi,Vi,Nn)||(e=[1,0,0,0,1,0,0,0,1],!Fs(e,ki,Hi,Vi,Nn))?!1:(Un.crossVectors(oi,li),e=[Un.x,Un.y,Un.z],Fs(e,ki,Hi,Vi,Nn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Be).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Be).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ze[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ze[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ze[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ze[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ze[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ze[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ze[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ze[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ze),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ze=[new j,new j,new j,new j,new j,new j,new j,new j],Be=new j,On=new wn,ki=new j,Hi=new j,Vi=new j,oi=new j,li=new j,Ei=new j,gn=new j,Nn=new j,Un=new j,xi=new j;function Fs(s,t,e,i,n){for(let a=0,o=s.length-3;a<=o;a+=3){xi.fromArray(s,a);const r=n.x*Math.abs(xi.x)+n.y*Math.abs(xi.y)+n.z*Math.abs(xi.z),c=t.dot(xi),l=e.dot(xi),h=i.dot(xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>r)return!1}return!0}const Fc=new wn,vn=new j,Gs=new j;class Aa{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Fc.setFromPoints(t).getCenter(i);let n=0;for(let a=0,o=t.length;a<o;a++)n=Math.max(n,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vn.subVectors(t,this.center);const e=vn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(vn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vn.copy(t.center).add(Gs)),this.expandByPoint(vn.copy(t.center).sub(Gs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Je=new j,Bs=new j,zn=new j,ci=new j,ks=new j,Fn=new j,Hs=new j;class ba{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Je.copy(this.origin).addScaledVector(this.direction,e),Je.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Bs.copy(t).add(e).multiplyScalar(.5),zn.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(Bs);const a=t.distanceTo(e)*.5,o=-this.direction.dot(zn),r=ci.dot(this.direction),c=-ci.dot(zn),l=ci.lengthSq(),h=Math.abs(1-o*o);let f,p,g,m;if(h>0)if(f=o*c-r,p=o*r-c,m=a*h,f>=0)if(p>=-m)if(p<=m){const v=1/h;f*=v,p*=v,g=f*(f+o*p+2*r)+p*(o*f+p+2*c)+l}else p=a,f=Math.max(0,-(o*p+r)),g=-f*f+p*(p+2*c)+l;else p=-a,f=Math.max(0,-(o*p+r)),g=-f*f+p*(p+2*c)+l;else p<=-m?(f=Math.max(0,-(-o*a+r)),p=f>0?-a:Math.min(Math.max(-a,-c),a),g=-f*f+p*(p+2*c)+l):p<=m?(f=0,p=Math.min(Math.max(-a,-c),a),g=p*(p+2*c)+l):(f=Math.max(0,-(o*a+r)),p=f>0?a:Math.min(Math.max(-a,-c),a),g=-f*f+p*(p+2*c)+l);else p=o>0?-a:a,f=Math.max(0,-(o*p+r)),g=-f*f+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(Bs).addScaledVector(zn,p),g}intersectSphere(t,e){Je.subVectors(t.center,this.origin);const i=Je.dot(this.direction),n=Je.dot(Je)-i*i,a=t.radius*t.radius;if(n>a)return null;const o=Math.sqrt(a-n),r=i-o,c=i+o;return c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,a,o,r,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(i=(t.min.x-p.x)*l,n=(t.max.x-p.x)*l):(i=(t.max.x-p.x)*l,n=(t.min.x-p.x)*l),h>=0?(a=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(a=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),i>o||a>n||((a>i||isNaN(i))&&(i=a),(o<n||isNaN(n))&&(n=o),f>=0?(r=(t.min.z-p.z)*f,c=(t.max.z-p.z)*f):(r=(t.max.z-p.z)*f,c=(t.min.z-p.z)*f),i>c||r>n)||((r>i||i!==i)&&(i=r),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Je)!==null}intersectTriangle(t,e,i,n,a){ks.subVectors(e,t),Fn.subVectors(i,t),Hs.crossVectors(ks,Fn);let o=this.direction.dot(Hs),r;if(o>0){if(n)return null;r=1}else if(o<0)r=-1,o=-o;else return null;ci.subVectors(this.origin,t);const c=r*this.direction.dot(Fn.crossVectors(ci,Fn));if(c<0)return null;const l=r*this.direction.dot(ks.cross(ci));if(l<0||c+l>o)return null;const h=-r*ci.dot(Hs);return h<0?null:this.at(h/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,i,n,a,o,r,c,l,h,f,p,g,m,v,d){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,o,r,c,l,h,f,p,g,m,v,d)}set(t,e,i,n,a,o,r,c,l,h,f,p,g,m,v,d){const u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=n,u[1]=a,u[5]=o,u[9]=r,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=p,u[3]=g,u[7]=m,u[11]=v,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Wi.setFromMatrixColumn(t,0).length(),a=1/Wi.setFromMatrixColumn(t,1).length(),o=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,a=t.z,o=Math.cos(i),r=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(a),f=Math.sin(a);if(t.order==="XYZ"){const p=o*h,g=o*f,m=r*h,v=r*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=g+m*l,e[5]=p-v*l,e[9]=-r*c,e[2]=v-p*l,e[6]=m+g*l,e[10]=o*c}else if(t.order==="YXZ"){const p=c*h,g=c*f,m=l*h,v=l*f;e[0]=p+v*r,e[4]=m*r-g,e[8]=o*l,e[1]=o*f,e[5]=o*h,e[9]=-r,e[2]=g*r-m,e[6]=v+p*r,e[10]=o*c}else if(t.order==="ZXY"){const p=c*h,g=c*f,m=l*h,v=l*f;e[0]=p-v*r,e[4]=-o*f,e[8]=m+g*r,e[1]=g+m*r,e[5]=o*h,e[9]=v-p*r,e[2]=-o*l,e[6]=r,e[10]=o*c}else if(t.order==="ZYX"){const p=o*h,g=o*f,m=r*h,v=r*f;e[0]=c*h,e[4]=m*l-g,e[8]=p*l+v,e[1]=c*f,e[5]=v*l+p,e[9]=g*l-m,e[2]=-l,e[6]=r*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,g=o*l,m=r*c,v=r*l;e[0]=c*h,e[4]=v-p*f,e[8]=m*f+g,e[1]=f,e[5]=o*h,e[9]=-r*h,e[2]=-l*h,e[6]=g*f+m,e[10]=p-v*f}else if(t.order==="XZY"){const p=o*c,g=o*l,m=r*c,v=r*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=p*f+v,e[5]=o*h,e[9]=g*f-m,e[2]=m*f-g,e[6]=r*h,e[10]=v*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gc,t,Bc)}lookAt(t,e,i){const n=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),hi.crossVectors(i,Ie),hi.lengthSq()===0&&(Math.abs(i.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),hi.crossVectors(i,Ie)),hi.normalize(),Gn.crossVectors(Ie,hi),n[0]=hi.x,n[4]=Gn.x,n[8]=Ie.x,n[1]=hi.y,n[5]=Gn.y,n[9]=Ie.y,n[2]=hi.z,n[6]=Gn.z,n[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,o=i[0],r=i[4],c=i[8],l=i[12],h=i[1],f=i[5],p=i[9],g=i[13],m=i[2],v=i[6],d=i[10],u=i[14],y=i[3],_=i[7],M=i[11],T=i[15],S=n[0],A=n[4],O=n[8],E=n[12],b=n[1],z=n[5],k=n[9],K=n[13],w=n[2],I=n[6],U=n[10],$=n[14],H=n[3],q=n[7],Q=n[11],at=n[15];return a[0]=o*S+r*b+c*w+l*H,a[4]=o*A+r*z+c*I+l*q,a[8]=o*O+r*k+c*U+l*Q,a[12]=o*E+r*K+c*$+l*at,a[1]=h*S+f*b+p*w+g*H,a[5]=h*A+f*z+p*I+g*q,a[9]=h*O+f*k+p*U+g*Q,a[13]=h*E+f*K+p*$+g*at,a[2]=m*S+v*b+d*w+u*H,a[6]=m*A+v*z+d*I+u*q,a[10]=m*O+v*k+d*U+u*Q,a[14]=m*E+v*K+d*$+u*at,a[3]=y*S+_*b+M*w+T*H,a[7]=y*A+_*z+M*I+T*q,a[11]=y*O+_*k+M*U+T*Q,a[15]=y*E+_*K+M*$+T*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],a=t[12],o=t[1],r=t[5],c=t[9],l=t[13],h=t[2],f=t[6],p=t[10],g=t[14],m=t[3],v=t[7],d=t[11],u=t[15];return m*(+a*c*f-n*l*f-a*r*p+i*l*p+n*r*g-i*c*g)+v*(+e*c*g-e*l*p+a*o*p-n*o*g+n*l*h-a*c*h)+d*(+e*l*f-e*r*g-a*o*f+i*o*g+a*r*h-i*l*h)+u*(-n*r*h-e*c*f+e*r*p+n*o*f-i*o*p+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],h=t[8],f=t[9],p=t[10],g=t[11],m=t[12],v=t[13],d=t[14],u=t[15],y=f*d*l-v*p*l+v*c*g-r*d*g-f*c*u+r*p*u,_=m*p*l-h*d*l-m*c*g+o*d*g+h*c*u-o*p*u,M=h*v*l-m*f*l+m*r*g-o*v*g-h*r*u+o*f*u,T=m*f*c-h*v*c-m*r*p+o*v*p+h*r*d-o*f*d,S=e*y+i*_+n*M+a*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/S;return t[0]=y*A,t[1]=(v*p*a-f*d*a-v*n*g+i*d*g+f*n*u-i*p*u)*A,t[2]=(r*d*a-v*c*a+v*n*l-i*d*l-r*n*u+i*c*u)*A,t[3]=(f*c*a-r*p*a-f*n*l+i*p*l+r*n*g-i*c*g)*A,t[4]=_*A,t[5]=(h*d*a-m*p*a+m*n*g-e*d*g-h*n*u+e*p*u)*A,t[6]=(m*c*a-o*d*a-m*n*l+e*d*l+o*n*u-e*c*u)*A,t[7]=(o*p*a-h*c*a+h*n*l-e*p*l-o*n*g+e*c*g)*A,t[8]=M*A,t[9]=(m*f*a-h*v*a-m*i*g+e*v*g+h*i*u-e*f*u)*A,t[10]=(o*v*a-m*r*a+m*i*l-e*v*l-o*i*u+e*r*u)*A,t[11]=(h*r*a-o*f*a-h*i*l+e*f*l+o*i*g-e*r*g)*A,t[12]=T*A,t[13]=(h*v*n-m*f*n+m*i*p-e*v*p-h*i*d+e*f*d)*A,t[14]=(m*r*n-o*v*n-m*i*c+e*v*c+o*i*d-e*r*d)*A,t[15]=(o*f*n-h*r*n+h*i*c-e*f*c-o*i*p+e*r*p)*A,this}scale(t){const e=this.elements,i=t.x,n=t.y,a=t.z;return e[0]*=i,e[4]*=n,e[8]*=a,e[1]*=i,e[5]*=n,e[9]*=a,e[2]*=i,e[6]*=n,e[10]*=a,e[3]*=i,e[7]*=n,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),a=1-i,o=t.x,r=t.y,c=t.z,l=a*o,h=a*r;return this.set(l*o+i,l*r-n*c,l*c+n*r,0,l*r+n*c,h*r+i,h*c-n*o,0,l*c-n*r,h*c+n*o,a*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,a,o){return this.set(1,i,a,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,a=e._x,o=e._y,r=e._z,c=e._w,l=a+a,h=o+o,f=r+r,p=a*l,g=a*h,m=a*f,v=o*h,d=o*f,u=r*f,y=c*l,_=c*h,M=c*f,T=i.x,S=i.y,A=i.z;return n[0]=(1-(v+u))*T,n[1]=(g+M)*T,n[2]=(m-_)*T,n[3]=0,n[4]=(g-M)*S,n[5]=(1-(p+u))*S,n[6]=(d+y)*S,n[7]=0,n[8]=(m+_)*A,n[9]=(d-y)*A,n[10]=(1-(p+v))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let a=Wi.set(n[0],n[1],n[2]).length();const o=Wi.set(n[4],n[5],n[6]).length(),r=Wi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),t.x=n[12],t.y=n[13],t.z=n[14],ke.copy(this);const l=1/a,h=1/o,f=1/r;return ke.elements[0]*=l,ke.elements[1]*=l,ke.elements[2]*=l,ke.elements[4]*=h,ke.elements[5]*=h,ke.elements[6]*=h,ke.elements[8]*=f,ke.elements[9]*=f,ke.elements[10]*=f,e.setFromRotationMatrix(ke),i.x=a,i.y=o,i.z=r,this}makePerspective(t,e,i,n,a,o,r=si){const c=this.elements,l=2*a/(e-t),h=2*a/(i-n),f=(e+t)/(e-t),p=(i+n)/(i-n);let g,m;if(r===si)g=-(o+a)/(o-a),m=-2*o*a/(o-a);else if(r===ds)g=-o/(o-a),m=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,a,o,r=si){const c=this.elements,l=1/(e-t),h=1/(i-n),f=1/(o-a),p=(e+t)*l,g=(i+n)*h;let m,v;if(r===si)m=(o+a)*f,v=-2*f;else if(r===ds)m=a*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Wi=new j,ke=new he,Gc=new j(0,0,0),Bc=new j(1,1,1),hi=new j,Gn=new j,Ie=new j,wr=new he,Rr=new Di;class ys{constructor(t=0,e=0,i=0,n=ys.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,a=n[0],o=n[4],r=n[8],c=n[1],l=n[5],h=n[9],f=n[2],p=n[6],g=n[10];switch(e){case"XYZ":this._y=Math.asin(be(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(be(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(r,g));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return wr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wr,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rr.setFromEuler(this),this.setFromQuaternion(Rr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ys.DEFAULT_ORDER="XYZ";class Pa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kc=0;const Lr=new j,Yi=new Di,Qe=new he,Bn=new j,_n=new j,Hc=new j,Vc=new Di,Ir=new j(1,0,0),Dr=new j(0,1,0),Or=new j(0,0,1),Wc={type:"added"},Yc={type:"removed"};class Te extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new j,e=new ys,i=new Di,n=new j(1,1,1);function a(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new he},normalMatrix:{value:new Kt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(Ir,t)}rotateY(t){return this.rotateOnAxis(Dr,t)}rotateZ(t){return this.rotateOnAxis(Or,t)}translateOnAxis(t,e){return Lr.copy(t).applyQuaternion(this.quaternion),this.position.add(Lr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ir,t)}translateY(t){return this.translateOnAxis(Dr,t)}translateZ(t){return this.translateOnAxis(Or,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Bn.copy(t):Bn.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),_n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(_n,Bn,this.up):Qe.lookAt(Bn,_n,this.up),this.quaternion.setFromRotationMatrix(Qe),n&&(Qe.extractRotation(n.matrixWorld),Yi.setFromRotationMatrix(Qe),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,t,Hc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,Vc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const a=e[i];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++){const r=n[a];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];a(t.shapes,f)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(a(t.materials,this.material[c]));n.material=r}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let r=0;r<this.children.length;r++)n.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];n.animations.push(a(t.animations,c))}}if(e){const r=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),f=o(t.shapes),p=o(t.skeletons),g=o(t.animations),m=o(t.nodes);r.length>0&&(i.geometries=r),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),m.length>0&&(i.nodes=m)}return i.object=n,i;function o(r){const c=[];for(const l in r){const h=r[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Te.DEFAULT_UP=new j(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const He=new j,ti=new j,Vs=new j,ei=new j,Xi=new j,$i=new j,Nr=new j,Ws=new j,Ys=new j,Xs=new j;let kn=!1;class Ve{constructor(t=new j,e=new j,i=new j){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),He.subVectors(t,e),n.cross(He);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,e,i,n,a){He.subVectors(n,e),ti.subVectors(i,e),Vs.subVectors(t,e);const o=He.dot(He),r=He.dot(ti),c=He.dot(Vs),l=ti.dot(ti),h=ti.dot(Vs),f=o*l-r*r;if(f===0)return a.set(0,0,0),null;const p=1/f,g=(l*c-r*h)*p,m=(o*h-r*c)*p;return a.set(1-g-m,m,g)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(t,e,i,n,a,o,r,c){return kn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kn=!0),this.getInterpolation(t,e,i,n,a,o,r,c)}static getInterpolation(t,e,i,n,a,o,r,c){return this.getBarycoord(t,e,i,n,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,ei.x),c.addScaledVector(o,ei.y),c.addScaledVector(r,ei.z),c)}static isFrontFacing(t,e,i,n){return He.subVectors(i,e),ti.subVectors(t,e),He.cross(ti).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return He.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),He.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,a){return kn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kn=!0),Ve.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}getInterpolation(t,e,i,n,a){return Ve.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,a=this.c;let o,r;Xi.subVectors(n,i),$i.subVectors(a,i),Ws.subVectors(t,i);const c=Xi.dot(Ws),l=$i.dot(Ws);if(c<=0&&l<=0)return e.copy(i);Ys.subVectors(t,n);const h=Xi.dot(Ys),f=$i.dot(Ys);if(h>=0&&f<=h)return e.copy(n);const p=c*f-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(Xi,o);Xs.subVectors(t,a);const g=Xi.dot(Xs),m=$i.dot(Xs);if(m>=0&&g<=m)return e.copy(a);const v=g*l-c*m;if(v<=0&&l>=0&&m<=0)return r=l/(l-m),e.copy(i).addScaledVector($i,r);const d=h*m-g*f;if(d<=0&&f-h>=0&&g-m>=0)return Nr.subVectors(a,n),r=(f-h)/(f-h+(g-m)),e.copy(n).addScaledVector(Nr,r);const u=1/(d+v+p);return o=v*u,r=p*u,e.copy(i).addScaledVector(Xi,o).addScaledVector($i,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Go={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Hn={h:0,s:0,l:0};function $s(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Qt.workingColorSpace){if(t=Rc(t,1),e=be(e,0,1),i=be(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,o=2*i-a;this.r=$s(o,a,t+1/3),this.g=$s(o,a,t),this.b=$s(o,a,t-1/3)}return Qt.toWorkingColorSpace(this,n),this}setStyle(t,e=ge){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=n[1],r=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){const i=Go[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return Qt.fromWorkingColorSpace(ye.copy(this),t),Math.round(be(ye.r*255,0,255))*65536+Math.round(be(ye.g*255,0,255))*256+Math.round(be(ye.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(ye.copy(this),e);const i=ye.r,n=ye.g,a=ye.b,o=Math.max(i,n,a),r=Math.min(i,n,a);let c,l;const h=(r+o)/2;if(r===o)c=0,l=0;else{const f=o-r;switch(l=h<=.5?f/(o+r):f/(2-o-r),o){case i:c=(n-a)/f+(n<a?6:0);break;case n:c=(a-i)/f+2;break;case a:c=(i-n)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=ge){Qt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,i=ye.g,n=ye.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(Hn);const i=Ds(di.h,Hn.h,e),n=Ds(di.s,Hn.s,e),a=Ds(di.l,Hn.l,e);return this.setHSL(i,n,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*n,this.g=a[1]*e+a[4]*i+a[7]*n,this.b=a[2]*e+a[5]*i+a[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Jt;Jt.NAMES=Go;let Xc=0;class Rn extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=on,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ca,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==on&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==la&&(i.blendSrc=this.blendSrc),this.blendDst!==ca&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tr&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const o=[];for(const r in a){const c=a[r];delete c.metadata,o.push(c)}return o}if(e){const a=n(t.textures),o=n(t.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fs extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new j,Vn=new Bt;class Ke{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Er,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Vn.fromBufferAttribute(this,e),Vn.applyMatrix3(t),this.setXY(e,Vn.x,Vn.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=mn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),n=Ce(n,this.array),a=Ce(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Er&&(t.usage=this.usage),t}}class Bo extends Ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ko extends Ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ee extends Ke{constructor(t,e,i){super(new Float32Array(t),e,i)}}let $c=0;const Ue=new he,Ks=new Te,Ki=new j,De=new wn,yn=new wn,pe=new j;class qe extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(No(t)?ko:Bo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Kt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,i){return Ue.makeTranslation(t,e,i),this.applyMatrix4(Ue),this}scale(t,e,i){return Ue.makeScale(t,e,i),this.applyMatrix4(Ue),this}lookAt(t){return Ks.lookAt(t),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const a=e[i];De.setFromBufferAttribute(a),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Aa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(t){const i=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const r=e[a];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(pe.addVectors(De.min,yn.min),De.expandByPoint(pe),pe.addVectors(De.max,yn.max),De.expandByPoint(pe)):(De.expandByPoint(yn.min),De.expandByPoint(yn.max))}De.getCenter(i);let n=0;for(let a=0,o=t.count;a<o;a++)pe.fromBufferAttribute(t,a),n=Math.max(n,i.distanceToSquared(pe));if(e)for(let a=0,o=e.length;a<o;a++){const r=e[a],c=this.morphTargetsRelative;for(let l=0,h=r.count;l<h;l++)pe.fromBufferAttribute(r,l),c&&(Ki.fromBufferAttribute(t,l),pe.add(Ki)),n=Math.max(n,i.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,a=e.normal.array,o=e.uv.array,r=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*r),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<r;b++)l[b]=new j,h[b]=new j;const f=new j,p=new j,g=new j,m=new Bt,v=new Bt,d=new Bt,u=new j,y=new j;function _(b,z,k){f.fromArray(n,b*3),p.fromArray(n,z*3),g.fromArray(n,k*3),m.fromArray(o,b*2),v.fromArray(o,z*2),d.fromArray(o,k*2),p.sub(f),g.sub(f),v.sub(m),d.sub(m);const K=1/(v.x*d.y-d.x*v.y);isFinite(K)&&(u.copy(p).multiplyScalar(d.y).addScaledVector(g,-v.y).multiplyScalar(K),y.copy(g).multiplyScalar(v.x).addScaledVector(p,-d.x).multiplyScalar(K),l[b].add(u),l[z].add(u),l[k].add(u),h[b].add(y),h[z].add(y),h[k].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let b=0,z=M.length;b<z;++b){const k=M[b],K=k.start,w=k.count;for(let I=K,U=K+w;I<U;I+=3)_(i[I+0],i[I+1],i[I+2])}const T=new j,S=new j,A=new j,O=new j;function E(b){A.fromArray(a,b*3),O.copy(A);const z=l[b];T.copy(z),T.sub(A.multiplyScalar(A.dot(z))).normalize(),S.crossVectors(O,z);const K=S.dot(h[b])<0?-1:1;c[b*4]=T.x,c[b*4+1]=T.y,c[b*4+2]=T.z,c[b*4+3]=K}for(let b=0,z=M.length;b<z;++b){const k=M[b],K=k.start,w=k.count;for(let I=K,U=K+w;I<U;I+=3)E(i[I+0]),E(i[I+1]),E(i[I+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const n=new j,a=new j,o=new j,r=new j,c=new j,l=new j,h=new j,f=new j;if(t)for(let p=0,g=t.count;p<g;p+=3){const m=t.getX(p+0),v=t.getX(p+1),d=t.getX(p+2);n.fromBufferAttribute(e,m),a.fromBufferAttribute(e,v),o.fromBufferAttribute(e,d),h.subVectors(o,a),f.subVectors(n,a),h.cross(f),r.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,d),r.add(h),c.add(h),l.add(h),i.setXYZ(m,r.x,r.y,r.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(d,l.x,l.y,l.z)}else for(let p=0,g=e.count;p<g;p+=3)n.fromBufferAttribute(e,p+0),a.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,a),f.subVectors(n,a),h.cross(f),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(r,c){const l=r.array,h=r.itemSize,f=r.normalized,p=new l.constructor(c.length*h);let g=0,m=0;for(let v=0,d=c.length;v<d;v++){r.isInterleavedBufferAttribute?g=c[v]*r.data.stride+r.offset:g=c[v]*h;for(let u=0;u<h;u++)p[m++]=l[g++]}return new Ke(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,i=this.index.array,n=this.attributes;for(const r in n){const c=n[r],l=t(c,i);e.setAttribute(r,l)}const a=this.morphAttributes;for(const r in a){const c=[],l=a[r];for(let h=0,f=l.length;h<f;h++){const p=l[h],g=t(p,i);c.push(g)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,c=o.length;r<c;r++){const l=o[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const n={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,p=l.length;f<p;f++){const g=l[f];h.push(g.toJSON(t.data))}h.length>0&&(n[c]=h,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const l in n){const h=n[l];this.setAttribute(l,h.clone(e))}const a=t.morphAttributes;for(const l in a){const h=[],f=a[l];for(let p=0,g=f.length;p<g;p++)h.push(f[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ur=new he,Si=new ba,Wn=new Aa,zr=new j,qi=new j,ji=new j,Zi=new j,qs=new j,Yn=new j,Xn=new Bt,$n=new Bt,Kn=new Bt,Fr=new j,Gr=new j,Br=new j,qn=new j,jn=new j;class te extends Te{constructor(t=new qe,e=new fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=n.length;a<o;a++){const r=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const r=this.morphTargetInfluences;if(a&&r){Yn.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=r[c],f=a[c];h!==0&&(qs.fromBufferAttribute(f,t),o?Yn.addScaledVector(qs,h):Yn.addScaledVector(qs.sub(e),h))}e.add(Yn)}return e}raycast(t,e){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wn.copy(i.boundingSphere),Wn.applyMatrix4(a),Si.copy(t.ray).recast(t.near),!(Wn.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Wn,zr)===null||Si.origin.distanceToSquared(zr)>(t.far-t.near)**2))&&(Ur.copy(a).invert(),Si.copy(t.ray).applyMatrix4(Ur),!(i.boundingBox!==null&&Si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,i){let n;const a=this.geometry,o=this.material,r=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,f=a.attributes.normal,p=a.groups,g=a.drawRange;if(r!==null)if(Array.isArray(o))for(let m=0,v=p.length;m<v;m++){const d=p[m],u=o[d.materialIndex],y=Math.max(d.start,g.start),_=Math.min(r.count,Math.min(d.start+d.count,g.start+g.count));for(let M=y,T=_;M<T;M+=3){const S=r.getX(M),A=r.getX(M+1),O=r.getX(M+2);n=Zn(this,u,t,i,l,h,f,S,A,O),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=d.materialIndex,e.push(n))}}else{const m=Math.max(0,g.start),v=Math.min(r.count,g.start+g.count);for(let d=m,u=v;d<u;d+=3){const y=r.getX(d),_=r.getX(d+1),M=r.getX(d+2);n=Zn(this,o,t,i,l,h,f,y,_,M),n&&(n.faceIndex=Math.floor(d/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=p.length;m<v;m++){const d=p[m],u=o[d.materialIndex],y=Math.max(d.start,g.start),_=Math.min(c.count,Math.min(d.start+d.count,g.start+g.count));for(let M=y,T=_;M<T;M+=3){const S=M,A=M+1,O=M+2;n=Zn(this,u,t,i,l,h,f,S,A,O),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=d.materialIndex,e.push(n))}}else{const m=Math.max(0,g.start),v=Math.min(c.count,g.start+g.count);for(let d=m,u=v;d<u;d+=3){const y=d,_=d+1,M=d+2;n=Zn(this,o,t,i,l,h,f,y,_,M),n&&(n.faceIndex=Math.floor(d/3),e.push(n))}}}}function Kc(s,t,e,i,n,a,o,r){let c;if(t.side===Re?c=i.intersectTriangle(o,a,n,!0,r):c=i.intersectTriangle(n,a,o,t.side===_i,r),c===null)return null;jn.copy(r),jn.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(jn);return l<e.near||l>e.far?null:{distance:l,point:jn.clone(),object:s}}function Zn(s,t,e,i,n,a,o,r,c,l){s.getVertexPosition(r,qi),s.getVertexPosition(c,ji),s.getVertexPosition(l,Zi);const h=Kc(s,t,e,i,qi,ji,Zi,qn);if(h){n&&(Xn.fromBufferAttribute(n,r),$n.fromBufferAttribute(n,c),Kn.fromBufferAttribute(n,l),h.uv=Ve.getInterpolation(qn,qi,ji,Zi,Xn,$n,Kn,new Bt)),a&&(Xn.fromBufferAttribute(a,r),$n.fromBufferAttribute(a,c),Kn.fromBufferAttribute(a,l),h.uv1=Ve.getInterpolation(qn,qi,ji,Zi,Xn,$n,Kn,new Bt),h.uv2=h.uv1),o&&(Fr.fromBufferAttribute(o,r),Gr.fromBufferAttribute(o,c),Br.fromBufferAttribute(o,l),h.normal=Ve.getInterpolation(qn,qi,ji,Zi,Fr,Gr,Br,new j),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:r,b:c,c:l,normal:new j,materialIndex:0};Ve.getNormal(qi,ji,Zi,f.normal),h.face=f}return h}class we extends qe{constructor(t=1,e=1,i=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:a,depthSegments:o};const r=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const c=[],l=[],h=[],f=[];let p=0,g=0;m("z","y","x",-1,-1,i,e,t,o,a,0),m("z","y","x",1,-1,i,e,-t,o,a,1),m("x","z","y",1,1,t,i,e,n,o,2),m("x","z","y",1,-1,t,i,-e,n,o,3),m("x","y","z",1,-1,t,e,i,n,a,4),m("x","y","z",-1,-1,t,e,-i,n,a,5),this.setIndex(c),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(f,2));function m(v,d,u,y,_,M,T,S,A,O,E){const b=M/A,z=T/O,k=M/2,K=T/2,w=S/2,I=A+1,U=O+1;let $=0,H=0;const q=new j;for(let Q=0;Q<U;Q++){const at=Q*z-K;for(let nt=0;nt<I;nt++){const W=nt*b-k;q[v]=W*y,q[d]=at*_,q[u]=w,l.push(q.x,q.y,q.z),q[v]=0,q[d]=0,q[u]=S>0?1:-1,h.push(q.x,q.y,q.z),f.push(nt/A),f.push(1-Q/O),$+=1}}for(let Q=0;Q<O;Q++)for(let at=0;at<A;at++){const nt=p+at+I*Q,W=p+at+I*(Q+1),rt=p+(at+1)+I*(Q+1),dt=p+(at+1)+I*Q;c.push(nt,W,dt),c.push(W,rt,dt),H+=6}r.addGroup(g,H,E),g+=H,p+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function un(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Se(s){const t={};for(let e=0;e<s.length;e++){const i=un(s[e]);for(const n in i)t[n]=i[n]}return t}function qc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ho(s){return s.getRenderTarget()===null?s.outputColorSpace:Qt.workingColorSpace}const jc={clone:un,merge:Se};var Zc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zc,this.fragmentShader=Jc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=un(t.uniforms),this.uniformsGroups=qc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Vo extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fe extends Vo{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ma*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ss*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;a+=o.offsetX*n/c,e-=o.offsetY*i/l,n*=o.width/c,i*=o.height/l}const r=this.filmOffset;r!==0&&(a+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ji=-90,Qi=1;class Qc extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Fe(Ji,Qi,t,e);n.layers=this.layers,this.add(n);const a=new Fe(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const o=new Fe(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const r=new Fe(Ji,Qi,t,e);r.layers=this.layers,this.add(r);const c=new Fe(Ji,Qi,t,e);c.layers=this.layers,this.add(c);const l=new Fe(Ji,Qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,a,o,r,c]=e;for(const l of e)this.remove(l);if(t===si)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ds)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,o,r,c,l,h]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,a),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,r),t.setRenderTarget(i,3,n),t.render(e,c),t.setRenderTarget(i,4,n),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(f,p,g),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Wo extends Oe{constructor(t,e,i,n,a,o,r,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:cn,super(t,e,i,n,a,o,r,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class th extends Ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(En("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Li?ge:Ge),this.texture=new Wo(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new we(5,5,5),a=new Oi({name:"CubemapFromEquirect",uniforms:un(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Re,blending:mi});a.uniforms.tEquirect.value=e;const o=new te(n,a),r=e.minFilter;return e.minFilter===An&&(e.minFilter=ze),new Qc(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(a)}}const js=new j,eh=new j,ih=new Kt;class ui{constructor(t=new j(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=js.subVectors(i,e).cross(eh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(js),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ih.getNormalMatrix(t),n=this.coplanarPoint(js).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Aa,Jn=new j;class Ca{constructor(t=new ui,e=new ui,i=new ui,n=new ui,a=new ui,o=new ui){this.planes=[t,e,i,n,a,o]}set(t,e,i,n,a,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(i),r[3].copy(n),r[4].copy(a),r[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=si){const i=this.planes,n=t.elements,a=n[0],o=n[1],r=n[2],c=n[3],l=n[4],h=n[5],f=n[6],p=n[7],g=n[8],m=n[9],v=n[10],d=n[11],u=n[12],y=n[13],_=n[14],M=n[15];if(i[0].setComponents(c-a,p-l,d-g,M-u).normalize(),i[1].setComponents(c+a,p+l,d+g,M+u).normalize(),i[2].setComponents(c+o,p+h,d+m,M+y).normalize(),i[3].setComponents(c-o,p-h,d-m,M-y).normalize(),i[4].setComponents(c-r,p-f,d-v,M-_).normalize(),e===si)i[5].setComponents(c+r,p+f,d+v,M+_).normalize();else if(e===ds)i[5].setComponents(r,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Jn.x=n.normal.x>0?t.max.x:t.min.x,Jn.y=n.normal.y>0?t.max.y:t.min.y,Jn.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Jn)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yo(){let s=null,t=!1,e=null,i=null;function n(a,o){e(a,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function nh(s,t){const e=t.isWebGL2,i=new WeakMap;function n(l,h){const f=l.array,p=l.usage,g=f.byteLength,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,f,p),l.onUploadCallback();let v;if(f instanceof Float32Array)v=s.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=s.SHORT;else if(f instanceof Uint32Array)v=s.UNSIGNED_INT;else if(f instanceof Int32Array)v=s.INT;else if(f instanceof Int8Array)v=s.BYTE;else if(f instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:g}}function a(l,h,f){const p=h.array,g=h._updateRange,m=h.updateRanges;if(s.bindBuffer(f,l),g.count===-1&&m.length===0&&s.bufferSubData(f,0,p),m.length!==0){for(let v=0,d=m.length;v<d;v++){const u=m[v];e?s.bufferSubData(f,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):s.bufferSubData(f,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}g.count!==-1&&(e?s.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):s.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h&&(s.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const p=i.get(l);(!p||p.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);if(f===void 0)i.set(l,n(l,h));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(f.buffer,l,h),f.version=l.version}}return{get:o,remove:r,update:c}}class wa extends qe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const a=t/2,o=e/2,r=Math.floor(i),c=Math.floor(n),l=r+1,h=c+1,f=t/r,p=e/c,g=[],m=[],v=[],d=[];for(let u=0;u<h;u++){const y=u*p-o;for(let _=0;_<l;_++){const M=_*f-a;m.push(M,-y,0),v.push(0,0,1),d.push(_/r),d.push(1-u/c)}}for(let u=0;u<c;u++)for(let y=0;y<r;y++){const _=y+l*u,M=y+l*(u+1),T=y+1+l*(u+1),S=y+1+l*u;g.push(_,M,S),g.push(M,T,S)}this.setIndex(g),this.setAttribute("position",new Ee(m,3)),this.setAttribute("normal",new Ee(v,3)),this.setAttribute("uv",new Ee(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wa(t.width,t.height,t.widthSegments,t.heightSegments)}}var sh=`#ifdef USE_ALPHAHASH
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
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
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
} // validated`,Ch=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wh=`vec3 transformedNormal = objectNormal;
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
#endif`,Gh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bh=`#ifdef USE_ENVMAP
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jh=`uniform bool receiveShadow;
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
#endif`,Zh=`#ifdef USE_ENVMAP
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
#endif`,Td=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ed=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xd=`#ifndef FLAT_SHADED
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
#endif`,Cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wd=`#ifdef USE_CLEARCOATMAP
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
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zd=`#ifdef USE_TRANSMISSION
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
}`,Tu=`#define MATCAP
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
}`,Eu=`#define MATCAP
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
}`,xu=`#define NORMAL
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
}`,Cu=`#define STANDARD
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
}`,wu=`#define TOON
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
}`,Yt={alphahash_fragment:sh,alphahash_pars_fragment:ah,alphamap_fragment:rh,alphamap_pars_fragment:oh,alphatest_fragment:lh,alphatest_pars_fragment:ch,aomap_fragment:hh,aomap_pars_fragment:dh,batching_pars_vertex:uh,batching_vertex:fh,begin_vertex:ph,beginnormal_vertex:mh,bsdfs:gh,iridescence_fragment:vh,bumpmap_pars_fragment:_h,clipping_planes_fragment:yh,clipping_planes_pars_fragment:Mh,clipping_planes_pars_vertex:Th,clipping_planes_vertex:Eh,color_fragment:xh,color_pars_fragment:Sh,color_pars_vertex:Ah,color_vertex:bh,common:Ph,cube_uv_reflection_fragment:Ch,defaultnormal_vertex:wh,displacementmap_pars_vertex:Rh,displacementmap_vertex:Lh,emissivemap_fragment:Ih,emissivemap_pars_fragment:Dh,colorspace_fragment:Oh,colorspace_pars_fragment:Nh,envmap_fragment:Uh,envmap_common_pars_fragment:zh,envmap_pars_fragment:Fh,envmap_pars_vertex:Gh,envmap_physical_pars_fragment:Zh,envmap_vertex:Bh,fog_vertex:kh,fog_pars_vertex:Hh,fog_fragment:Vh,fog_pars_fragment:Wh,gradientmap_pars_fragment:Yh,lightmap_fragment:Xh,lightmap_pars_fragment:$h,lights_lambert_fragment:Kh,lights_lambert_pars_fragment:qh,lights_pars_begin:jh,lights_toon_fragment:Jh,lights_toon_pars_fragment:Qh,lights_phong_fragment:td,lights_phong_pars_fragment:ed,lights_physical_fragment:id,lights_physical_pars_fragment:nd,lights_fragment_begin:sd,lights_fragment_maps:ad,lights_fragment_end:rd,logdepthbuf_fragment:od,logdepthbuf_pars_fragment:ld,logdepthbuf_pars_vertex:cd,logdepthbuf_vertex:hd,map_fragment:dd,map_pars_fragment:ud,map_particle_fragment:fd,map_particle_pars_fragment:pd,metalnessmap_fragment:md,metalnessmap_pars_fragment:gd,morphcolor_vertex:vd,morphnormal_vertex:_d,morphtarget_pars_vertex:yd,morphtarget_vertex:Md,normal_fragment_begin:Td,normal_fragment_maps:Ed,normal_pars_fragment:xd,normal_pars_vertex:Sd,normal_vertex:Ad,normalmap_pars_fragment:bd,clearcoat_normal_fragment_begin:Pd,clearcoat_normal_fragment_maps:Cd,clearcoat_pars_fragment:wd,iridescence_pars_fragment:Rd,opaque_fragment:Ld,packing:Id,premultiplied_alpha_fragment:Dd,project_vertex:Od,dithering_fragment:Nd,dithering_pars_fragment:Ud,roughnessmap_fragment:zd,roughnessmap_pars_fragment:Fd,shadowmap_pars_fragment:Gd,shadowmap_pars_vertex:Bd,shadowmap_vertex:kd,shadowmask_pars_fragment:Hd,skinbase_vertex:Vd,skinning_pars_vertex:Wd,skinning_vertex:Yd,skinnormal_vertex:Xd,specularmap_fragment:$d,specularmap_pars_fragment:Kd,tonemapping_fragment:qd,tonemapping_pars_fragment:jd,transmission_fragment:Zd,transmission_pars_fragment:Jd,uv_pars_fragment:Qd,uv_pars_vertex:tu,uv_vertex:eu,worldpos_vertex:iu,background_vert:nu,background_frag:su,backgroundCube_vert:au,backgroundCube_frag:ru,cube_vert:ou,cube_frag:lu,depth_vert:cu,depth_frag:hu,distanceRGBA_vert:du,distanceRGBA_frag:uu,equirect_vert:fu,equirect_frag:pu,linedashed_vert:mu,linedashed_frag:gu,meshbasic_vert:vu,meshbasic_frag:_u,meshlambert_vert:yu,meshlambert_frag:Mu,meshmatcap_vert:Tu,meshmatcap_frag:Eu,meshnormal_vert:xu,meshnormal_frag:Su,meshphong_vert:Au,meshphong_frag:bu,meshphysical_vert:Pu,meshphysical_frag:Cu,meshtoon_vert:wu,meshtoon_frag:Ru,points_vert:Lu,points_frag:Iu,shadow_vert:Du,shadow_frag:Ou,sprite_vert:Nu,sprite_frag:Uu},Et={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},$e={basic:{uniforms:Se([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Se([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Se([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Se([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Se([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Se([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Se([Et.points,Et.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Se([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Se([Et.common,Et.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Se([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Se([Et.sprite,Et.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Se([Et.common,Et.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Se([Et.lights,Et.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};$e.physical={uniforms:Se([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Qn={r:0,b:0,g:0};function zu(s,t,e,i,n,a,o){const r=new Jt(0);let c=a===!0?0:1,l,h,f=null,p=0,g=null;function m(d,u){let y=!1,_=u.isScene===!0?u.background:null;_&&_.isTexture&&(_=(u.backgroundBlurriness>0?e:t).get(_)),_===null?v(r,c):_&&_.isColor&&(v(_,1),y=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===vs)?(h===void 0&&(h=new te(new we(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:un($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(_.colorSpace)!==ee,(f!==_||p!==_.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,f=_,p=_.version,g=s.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new te(new wa(2,2),new Oi({name:"BackgroundMaterial",uniforms:un($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(_.colorSpace)!==ee,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||p!==_.version||g!==s.toneMapping)&&(l.material.needsUpdate=!0,f=_,p=_.version,g=s.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function v(d,u){d.getRGB(Qn,Ho(s)),i.buffers.color.setClear(Qn.r,Qn.g,Qn.b,u,o)}return{getClearColor:function(){return r},setClearColor:function(d,u=1){r.set(d),c=u,v(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,v(r,c)},render:m}}function Fu(s,t,e,i){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,r={},c=d(null);let l=c,h=!1;function f(w,I,U,$,H){let q=!1;if(o){const Q=v($,U,I);l!==Q&&(l=Q,g(l.object)),q=u(w,$,U,H),q&&y(w,$,U,H)}else{const Q=I.wireframe===!0;(l.geometry!==$.id||l.program!==U.id||l.wireframe!==Q)&&(l.geometry=$.id,l.program=U.id,l.wireframe=Q,q=!0)}H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,O(w,I,U,$),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function p(){return i.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function g(w){return i.isWebGL2?s.bindVertexArray(w):a.bindVertexArrayOES(w)}function m(w){return i.isWebGL2?s.deleteVertexArray(w):a.deleteVertexArrayOES(w)}function v(w,I,U){const $=U.wireframe===!0;let H=r[w.id];H===void 0&&(H={},r[w.id]=H);let q=H[I.id];q===void 0&&(q={},H[I.id]=q);let Q=q[$];return Q===void 0&&(Q=d(p()),q[$]=Q),Q}function d(w){const I=[],U=[],$=[];for(let H=0;H<n;H++)I[H]=0,U[H]=0,$[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:$,object:w,attributes:{},index:null}}function u(w,I,U,$){const H=l.attributes,q=I.attributes;let Q=0;const at=U.getAttributes();for(const nt in at)if(at[nt].location>=0){const rt=H[nt];let dt=q[nt];if(dt===void 0&&(nt==="instanceMatrix"&&w.instanceMatrix&&(dt=w.instanceMatrix),nt==="instanceColor"&&w.instanceColor&&(dt=w.instanceColor)),rt===void 0||rt.attribute!==dt||dt&&rt.data!==dt.data)return!0;Q++}return l.attributesNum!==Q||l.index!==$}function y(w,I,U,$){const H={},q=I.attributes;let Q=0;const at=U.getAttributes();for(const nt in at)if(at[nt].location>=0){let rt=q[nt];rt===void 0&&(nt==="instanceMatrix"&&w.instanceMatrix&&(rt=w.instanceMatrix),nt==="instanceColor"&&w.instanceColor&&(rt=w.instanceColor));const dt={};dt.attribute=rt,rt&&rt.data&&(dt.data=rt.data),H[nt]=dt,Q++}l.attributes=H,l.attributesNum=Q,l.index=$}function _(){const w=l.newAttributes;for(let I=0,U=w.length;I<U;I++)w[I]=0}function M(w){T(w,0)}function T(w,I){const U=l.newAttributes,$=l.enabledAttributes,H=l.attributeDivisors;U[w]=1,$[w]===0&&(s.enableVertexAttribArray(w),$[w]=1),H[w]!==I&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](w,I),H[w]=I)}function S(){const w=l.newAttributes,I=l.enabledAttributes;for(let U=0,$=I.length;U<$;U++)I[U]!==w[U]&&(s.disableVertexAttribArray(U),I[U]=0)}function A(w,I,U,$,H,q,Q){Q===!0?s.vertexAttribIPointer(w,I,U,H,q):s.vertexAttribPointer(w,I,U,$,H,q)}function O(w,I,U,$){if(i.isWebGL2===!1&&(w.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const H=$.attributes,q=U.getAttributes(),Q=I.defaultAttributeValues;for(const at in q){const nt=q[at];if(nt.location>=0){let W=H[at];if(W===void 0&&(at==="instanceMatrix"&&w.instanceMatrix&&(W=w.instanceMatrix),at==="instanceColor"&&w.instanceColor&&(W=w.instanceColor)),W!==void 0){const rt=W.normalized,dt=W.itemSize,R=e.get(W);if(R===void 0)continue;const G=R.buffer,J=R.type,X=R.bytesPerElement,B=i.isWebGL2===!0&&(J===s.INT||J===s.UNSIGNED_INT||W.gpuType===Ao);if(W.isInterleavedBufferAttribute){const ct=W.data,F=ct.stride,zt=W.offset;if(ct.isInstancedInterleavedBuffer){for(let mt=0;mt<nt.locationSize;mt++)T(nt.location+mt,ct.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let mt=0;mt<nt.locationSize;mt++)M(nt.location+mt);s.bindBuffer(s.ARRAY_BUFFER,G);for(let mt=0;mt<nt.locationSize;mt++)A(nt.location+mt,dt/nt.locationSize,J,rt,F*X,(zt+dt/nt.locationSize*mt)*X,B)}else{if(W.isInstancedBufferAttribute){for(let ct=0;ct<nt.locationSize;ct++)T(nt.location+ct,W.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ct=0;ct<nt.locationSize;ct++)M(nt.location+ct);s.bindBuffer(s.ARRAY_BUFFER,G);for(let ct=0;ct<nt.locationSize;ct++)A(nt.location+ct,dt/nt.locationSize,J,rt,dt*X,dt/nt.locationSize*ct*X,B)}}else if(Q!==void 0){const rt=Q[at];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(nt.location,rt);break;case 3:s.vertexAttrib3fv(nt.location,rt);break;case 4:s.vertexAttrib4fv(nt.location,rt);break;default:s.vertexAttrib1fv(nt.location,rt)}}}}S()}function E(){k();for(const w in r){const I=r[w];for(const U in I){const $=I[U];for(const H in $)m($[H].object),delete $[H];delete I[U]}delete r[w]}}function b(w){if(r[w.id]===void 0)return;const I=r[w.id];for(const U in I){const $=I[U];for(const H in $)m($[H].object),delete $[H];delete I[U]}delete r[w.id]}function z(w){for(const I in r){const U=r[I];if(U[w.id]===void 0)continue;const $=U[w.id];for(const H in $)m($[H].object),delete $[H];delete U[w.id]}}function k(){K(),h=!0,l!==c&&(l=c,g(l.object))}function K(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:k,resetDefaultState:K,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:z,initAttributes:_,enableAttribute:M,disableUnusedAttributes:S}}function Gu(s,t,e,i){const n=i.isWebGL2;let a;function o(h){a=h}function r(h,f){s.drawArrays(a,h,f),e.update(f,a,1)}function c(h,f,p){if(p===0)return;let g,m;if(n)g=s,m="drawArraysInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](a,h,f,p),e.update(f,a,p)}function l(h,f,p){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<p;m++)this.render(h[m],f[m]);else{g.multiDrawArraysWEBGL(a,h,0,f,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v];e.update(m,a,1)}}this.setMode=o,this.render=r,this.renderInstances=c,this.renderMultiDraw=l}function Bu(s,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let r=e.precision!==void 0?e.precision:"highp";const c=a(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),d=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),u=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,M=o||t.has("OES_texture_float"),T=_&&M,S=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:n,getMaxPrecision:a,precision:r,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:d,maxVaryings:u,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:T,maxSamples:S}}function ku(s){const t=this;let e=null,i=0,n=!1,a=!1;const o=new ui,r=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||i!==0||n;return n=p,i=f.length,g},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){e=h(f,p,0)},this.setState=function(f,p,g){const m=f.clippingPlanes,v=f.clipIntersection,d=f.clipShadows,u=s.get(f);if(!n||m===null||m.length===0||a&&!d)a?h(null):l();else{const y=a?0:i,_=y*4;let M=u.clippingState||null;c.value=M,M=h(m,p,_,g);for(let T=0;T!==_;++T)M[T]=e[T];u.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,p,g,m){const v=f!==null?f.length:0;let d=null;if(v!==0){if(d=c.value,m!==!0||d===null){const u=g+v*4,y=p.matrixWorldInverse;r.getNormalMatrix(y),(d===null||d.length<u)&&(d=new Float32Array(u));for(let _=0,M=g;_!==v;++_,M+=4)o.copy(f[_]).applyMatrix4(y,r),o.normal.toArray(d,M),d[M+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,d}}function Hu(s){let t=new WeakMap;function e(o,r){return r===ha?o.mapping=cn:r===da&&(o.mapping=hn),o}function i(o){if(o&&o.isTexture){const r=o.mapping;if(r===ha||r===da)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new th(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",n),e(l.texture,o.mapping)}else return null}}return o}function n(o){const r=o.target;r.removeEventListener("dispose",n);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class Xo extends Vo{constructor(t=-1,e=1,i=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-t,o=i+t,r=n+e,c=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,o=a+l*this.view.width,r-=h*this.view.offsetY,c=r-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,r,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const nn=4,kr=[.125,.215,.35,.446,.526,.582],Ci=20,Zs=new Xo,Hr=new Jt;let Js=null,Qs=0,ta=0;const bi=(1+Math.sqrt(5))/2,tn=1/bi,Vr=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,bi,tn),new j(0,bi,-tn),new j(tn,0,bi),new j(-tn,0,bi),new j(bi,tn,0),new j(-bi,tn,0)];class Wr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Js=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,n,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$r(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Js,Qs,ta),t.scissorTest=!1,ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cn||t.mapping===hn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Js=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:bn,format:Ye,colorSpace:ai,depthBuffer:!1},n=Yr(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yr(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vu(a)),this._blurMaterial=Wu(a,t,e)}return n}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,Zs)}_sceneToCubeUV(t,e,i,n){const r=new Fe(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Hr),h.toneMapping=gi,h.autoClear=!1;const g=new fs({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),m=new te(new we,g);let v=!1;const d=t.background;d?d.isColor&&(g.color.copy(d),t.background=null,v=!0):(g.color.copy(Hr),v=!0);for(let u=0;u<6;u++){const y=u%3;y===0?(r.up.set(0,c[u],0),r.lookAt(l[u],0,0)):y===1?(r.up.set(0,0,c[u]),r.lookAt(0,l[u],0)):(r.up.set(0,c[u],0),r.lookAt(0,0,l[u]));const _=this._cubeSize;ts(n,y*_,u>2?_:0,_,_),h.setRenderTarget(n),v&&h.render(m,r),h.render(t,r)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===cn||t.mapping===hn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=$r()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xr());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],a),r=a.uniforms;r.envMap.value=t;const c=this._cubeSize;ts(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Zs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Vr[(n-1)%Vr.length];this._blur(t,n-1,n,a,o)}e.autoClear=i}_blur(t,e,i,n,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",a),this._halfBlur(o,t,i,i,n,"longitudinal",a)}_halfBlur(t,e,i,n,a,o,r){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new te(this._lodPlanes[n],l),p=l.uniforms,g=this._sizeLods[i]-1,m=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*Ci-1),v=a/m,d=isFinite(a)?1+Math.floor(h*v):Ci;d>Ci&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ci}`);const u=[];let y=0;for(let A=0;A<Ci;++A){const O=A/v,E=Math.exp(-O*O/2);u.push(E),A===0?y+=E:A<d&&(y+=2*E)}for(let A=0;A<u.length;A++)u[A]=u[A]/y;p.envMap.value=t.texture,p.samples.value=d,p.weights.value=u,p.latitudinal.value=o==="latitudinal",r&&(p.poleAxis.value=r);const{_lodMax:_}=this;p.dTheta.value=m,p.mipInt.value=_-i;const M=this._sizeLods[n],T=3*M*(n>_-nn?n-_+nn:0),S=4*(this._cubeSize-M);ts(e,T,S,3*M,2*M),c.setRenderTarget(e),c.render(f,Zs)}}function Vu(s){const t=[],e=[],i=[];let n=s;const a=s-nn+1+kr.length;for(let o=0;o<a;o++){const r=Math.pow(2,n);e.push(r);let c=1/r;o>s-nn?c=kr[o-s+nn-1]:o===0&&(c=0),i.push(c);const l=1/(r-2),h=-l,f=1+l,p=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,m=6,v=3,d=2,u=1,y=new Float32Array(v*m*g),_=new Float32Array(d*m*g),M=new Float32Array(u*m*g);for(let S=0;S<g;S++){const A=S%3*2/3-1,O=S>2?0:-1,E=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];y.set(E,v*m*S),_.set(p,d*m*S);const b=[S,S,S,S,S,S];M.set(b,u*m*S)}const T=new qe;T.setAttribute("position",new Ke(y,v)),T.setAttribute("uv",new Ke(_,d)),T.setAttribute("faceIndex",new Ke(M,u)),t.push(T),n>nn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Yr(s,t,e){const i=new Ii(s,t,e);return i.texture.mapping=vs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ts(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Wu(s,t,e){const i=new Float32Array(Ci),n=new j(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ra(),fragmentShader:`

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
	`}function Yu(s){let t=new WeakMap,e=null;function i(r){if(r&&r.isTexture){const c=r.mapping,l=c===ha||c===da,h=c===cn||c===hn;if(l||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let f=t.get(r);return e===null&&(e=new Wr(s)),f=l?e.fromEquirectangular(r,f):e.fromCubemap(r,f),t.set(r,f),f.texture}else{if(t.has(r))return t.get(r).texture;{const f=r.image;if(l&&f&&f.height>0||h&&f&&n(f)){e===null&&(e=new Wr(s));const p=l?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,p),r.addEventListener("dispose",a),p.texture}else return null}}}return r}function n(r){let c=0;const l=6;for(let h=0;h<l;h++)r[h]!==void 0&&c++;return c===l}function a(r){const c=r.target;c.removeEventListener("dispose",a);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Xu(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function $u(s,t,e,i){const n={},a=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);for(const m in p.morphAttributes){const v=p.morphAttributes[m];for(let d=0,u=v.length;d<u;d++)t.remove(v[d])}p.removeEventListener("dispose",o),delete n[p.id];const g=a.get(p);g&&(t.remove(g),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function r(f,p){return n[p.id]===!0||(p.addEventListener("dispose",o),n[p.id]=!0,e.memory.geometries++),p}function c(f){const p=f.attributes;for(const m in p)t.update(p[m],s.ARRAY_BUFFER);const g=f.morphAttributes;for(const m in g){const v=g[m];for(let d=0,u=v.length;d<u;d++)t.update(v[d],s.ARRAY_BUFFER)}}function l(f){const p=[],g=f.index,m=f.attributes.position;let v=0;if(g!==null){const y=g.array;v=g.version;for(let _=0,M=y.length;_<M;_+=3){const T=y[_+0],S=y[_+1],A=y[_+2];p.push(T,S,S,A,A,T)}}else if(m!==void 0){const y=m.array;v=m.version;for(let _=0,M=y.length/3-1;_<M;_+=3){const T=_+0,S=_+1,A=_+2;p.push(T,S,S,A,A,T)}}else return;const d=new(No(p)?ko:Bo)(p,1);d.version=v;const u=a.get(f);u&&t.remove(u),a.set(f,d)}function h(f){const p=a.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&l(f)}else l(f);return a.get(f)}return{get:r,update:c,getWireframeAttribute:h}}function Ku(s,t,e,i){const n=i.isWebGL2;let a;function o(g){a=g}let r,c;function l(g){r=g.type,c=g.bytesPerElement}function h(g,m){s.drawElements(a,m,r,g*c),e.update(m,a,1)}function f(g,m,v){if(v===0)return;let d,u;if(n)d=s,u="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[u](a,m,r,g*c,v),e.update(m,a,v)}function p(g,m,v){if(v===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<v;u++)this.render(g[u]/c,m[u]);else{d.multiDrawElementsWEBGL(a,m,0,r,g,0,v);let u=0;for(let y=0;y<v;y++)u+=m[y];e.update(u,a,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function qu(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,r){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=r*(a/3);break;case s.LINES:e.lines+=r*(a/2);break;case s.LINE_STRIP:e.lines+=r*(a-1);break;case s.LINE_LOOP:e.lines+=r*a;break;case s.POINTS:e.points+=r*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function ju(s,t){return s[0]-t[0]}function Zu(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Ju(s,t,e){const i={},n=new Float32Array(8),a=new WeakMap,o=new me,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function c(l,h,f){const p=l.morphTargetInfluences;if(t.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=m!==void 0?m.length:0;let d=a.get(h);if(d===void 0||d.count!==v){let I=function(){K.dispose(),a.delete(h),h.removeEventListener("dispose",I)};var g=I;d!==void 0&&d.texture.dispose();const _=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let E=0;_===!0&&(E=1),M===!0&&(E=2),T===!0&&(E=3);let b=h.attributes.position.count*E,z=1;b>t.maxTextureSize&&(z=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const k=new Float32Array(b*z*4*v),K=new Fo(k,b,z,v);K.type=pi,K.needsUpdate=!0;const w=E*4;for(let U=0;U<v;U++){const $=S[U],H=A[U],q=O[U],Q=b*z*4*U;for(let at=0;at<$.count;at++){const nt=at*w;_===!0&&(o.fromBufferAttribute($,at),k[Q+nt+0]=o.x,k[Q+nt+1]=o.y,k[Q+nt+2]=o.z,k[Q+nt+3]=0),M===!0&&(o.fromBufferAttribute(H,at),k[Q+nt+4]=o.x,k[Q+nt+5]=o.y,k[Q+nt+6]=o.z,k[Q+nt+7]=0),T===!0&&(o.fromBufferAttribute(q,at),k[Q+nt+8]=o.x,k[Q+nt+9]=o.y,k[Q+nt+10]=o.z,k[Q+nt+11]=q.itemSize===4?o.w:1)}}d={count:v,texture:K,size:new Bt(b,z)},a.set(h,d),h.addEventListener("dispose",I)}let u=0;for(let _=0;_<p.length;_++)u+=p[_];const y=h.morphTargetsRelative?1:1-u;f.getUniforms().setValue(s,"morphTargetBaseInfluence",y),f.getUniforms().setValue(s,"morphTargetInfluences",p),f.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}else{const m=p===void 0?0:p.length;let v=i[h.id];if(v===void 0||v.length!==m){v=[];for(let M=0;M<m;M++)v[M]=[M,0];i[h.id]=v}for(let M=0;M<m;M++){const T=v[M];T[0]=M,T[1]=p[M]}v.sort(Zu);for(let M=0;M<8;M++)M<m&&v[M][1]?(r[M][0]=v[M][0],r[M][1]=v[M][1]):(r[M][0]=Number.MAX_SAFE_INTEGER,r[M][1]=0);r.sort(ju);const d=h.morphAttributes.position,u=h.morphAttributes.normal;let y=0;for(let M=0;M<8;M++){const T=r[M],S=T[0],A=T[1];S!==Number.MAX_SAFE_INTEGER&&A?(d&&h.getAttribute("morphTarget"+M)!==d[S]&&h.setAttribute("morphTarget"+M,d[S]),u&&h.getAttribute("morphNormal"+M)!==u[S]&&h.setAttribute("morphNormal"+M,u[S]),n[M]=A,y+=A):(d&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),u&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),n[M]=0)}const _=h.morphTargetsRelative?1:1-y;f.getUniforms().setValue(s,"morphTargetBaseInfluence",_),f.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:c}}function Qu(s,t,e,i){let n=new WeakMap;function a(c){const l=i.render.frame,h=c.geometry,f=t.get(c,h);if(n.get(f)!==l&&(t.update(f),n.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),n.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;n.get(p)!==l&&(p.update(),n.set(p,l))}return f}function o(){n=new WeakMap}function r(c){const l=c.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:o}}class $o extends Oe{constructor(t,e,i,n,a,o,r,c,l,h){if(h=h!==void 0?h:Ri,h!==Ri&&h!==dn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ri&&(i=fi),i===void 0&&h===dn&&(i=wi),super(null,n,a,o,r,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Ae,this.minFilter=c!==void 0?c:Ae,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ko=new Oe,qo=new $o(1,1);qo.compareFunction=Oo;const jo=new Fo,Zo=new zc,Jo=new Wo,Kr=[],qr=[],jr=new Float32Array(16),Zr=new Float32Array(9),Jr=new Float32Array(4);function fn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let a=Kr[n];if(a===void 0&&(a=new Float32Array(n),Kr[n]=a),t!==0){i.toArray(a,0);for(let o=1,r=0;o!==t;++o)r+=e,s[o].toArray(a,r)}return a}function de(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function ue(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Ms(s,t){let e=qr[t];e===void 0&&(e=new Int32Array(t),qr[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function tf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2fv(this.addr,t),ue(e,t)}}function nf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;s.uniform3fv(this.addr,t),ue(e,t)}}function sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4fv(this.addr,t),ue(e,t)}}function af(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(de(e,i))return;Jr.set(i),s.uniformMatrix2fv(this.addr,!1,Jr),ue(e,i)}}function rf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(de(e,i))return;Zr.set(i),s.uniformMatrix3fv(this.addr,!1,Zr),ue(e,i)}}function of(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(de(e,i))return;jr.set(i),s.uniformMatrix4fv(this.addr,!1,jr),ue(e,i)}}function lf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2iv(this.addr,t),ue(e,t)}}function hf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;s.uniform3iv(this.addr,t),ue(e,t)}}function df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4iv(this.addr,t),ue(e,t)}}function uf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2uiv(this.addr,t),ue(e,t)}}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;s.uniform3uiv(this.addr,t),ue(e,t)}}function mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4uiv(this.addr,t),ue(e,t)}}function gf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);const a=this.type===s.SAMPLER_2D_SHADOW?qo:Ko;e.setTexture2D(t||a,n)}function vf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Zo,n)}function _f(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Jo,n)}function yf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||jo,n)}function Mf(s){switch(s){case 5126:return tf;case 35664:return ef;case 35665:return nf;case 35666:return sf;case 35674:return af;case 35675:return rf;case 35676:return of;case 5124:case 35670:return lf;case 35667:case 35671:return cf;case 35668:case 35672:return hf;case 35669:case 35673:return df;case 5125:return uf;case 36294:return ff;case 36295:return pf;case 36296:return mf;case 35678:case 36198:case 36298:case 36306:case 35682:return gf;case 35679:case 36299:case 36307:return vf;case 35680:case 36300:case 36308:case 36293:return _f;case 36289:case 36303:case 36311:case 36292:return yf}}function Tf(s,t){s.uniform1fv(this.addr,t)}function Ef(s,t){const e=fn(t,this.size,2);s.uniform2fv(this.addr,e)}function xf(s,t){const e=fn(t,this.size,3);s.uniform3fv(this.addr,e)}function Sf(s,t){const e=fn(t,this.size,4);s.uniform4fv(this.addr,e)}function Af(s,t){const e=fn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function bf(s,t){const e=fn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Pf(s,t){const e=fn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Cf(s,t){s.uniform1iv(this.addr,t)}function wf(s,t){s.uniform2iv(this.addr,t)}function Rf(s,t){s.uniform3iv(this.addr,t)}function Lf(s,t){s.uniform4iv(this.addr,t)}function If(s,t){s.uniform1uiv(this.addr,t)}function Df(s,t){s.uniform2uiv(this.addr,t)}function Of(s,t){s.uniform3uiv(this.addr,t)}function Nf(s,t){s.uniform4uiv(this.addr,t)}function Uf(s,t,e){const i=this.cache,n=t.length,a=Ms(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||Ko,a[o])}function zf(s,t,e){const i=this.cache,n=t.length,a=Ms(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Zo,a[o])}function Ff(s,t,e){const i=this.cache,n=t.length,a=Ms(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Jo,a[o])}function Gf(s,t,e){const i=this.cache,n=t.length,a=Ms(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||jo,a[o])}function Bf(s){switch(s){case 5126:return Tf;case 35664:return Ef;case 35665:return xf;case 35666:return Sf;case 35674:return Af;case 35675:return bf;case 35676:return Pf;case 5124:case 35670:return Cf;case 35667:case 35671:return wf;case 35668:case 35672:return Rf;case 35669:case 35673:return Lf;case 5125:return If;case 36294:return Df;case 36295:return Of;case 36296:return Nf;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return zf;case 35680:case 36300:case 36308:case 36293:return Ff;case 36289:case 36303:case 36311:case 36292:return Gf}}class kf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Mf(e.type)}}class Hf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bf(e.type)}}class Vf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const r=n[a];r.setValue(t,e[r.id],i)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function Qr(s,t){s.seq.push(t),s.map[t.id]=t}function Wf(s,t,e){const i=s.name,n=i.length;for(ea.lastIndex=0;;){const a=ea.exec(i),o=ea.lastIndex;let r=a[1];const c=a[2]==="]",l=a[3];if(c&&(r=r|0),l===void 0||l==="["&&o+2===n){Qr(e,l===void 0?new kf(r,s,t):new Hf(r,s,t));break}else{let f=e.map[r];f===void 0&&(f=new Vf(r),Qr(e,f)),e=f}}}class as{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=t.getActiveUniform(e,n),o=t.getUniformLocation(e,a.name);Wf(a,o,this)}}setValue(t,e,i,n){const a=this.map[e];a!==void 0&&a.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let a=0,o=e.length;a!==o;++a){const r=e[a],c=i[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,a=t.length;n!==a;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function to(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Yf=37297;let Xf=0;function $f(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=n;o<a;o++){const r=o+1;i.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return i.join(`
`)}function Kf(s){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(s);let i;switch(t===e?i="":t===hs&&e===cs?i="LinearDisplayP3ToLinearSRGB":t===cs&&e===hs&&(i="LinearSRGBToLinearDisplayP3"),s){case ai:case _s:return[i,"LinearTransferOETF"];case ge:case Sa:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function eo(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+n+`

`+$f(s.getShaderSource(t),o)}else return n}function qf(s,t){const e=Kf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function jf(s,t){let e;switch(t){case ac:e="Linear";break;case rc:e="Reinhard";break;case oc:e="OptimizedCineon";break;case lc:e="ACESFilmic";break;case hc:e="AgX";break;case cc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Zf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sn).join(`
`)}function Jf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(sn).join(`
`)}function Qf(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function tp(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=s.getActiveAttrib(t,n),o=a.name;let r=1;a.type===s.FLOAT_MAT2&&(r=2),a.type===s.FLOAT_MAT3&&(r=3),a.type===s.FLOAT_MAT4&&(r=4),e[o]={type:a.type,location:s.getAttribLocation(t,o),locationSize:r}}return e}function sn(s){return s!==""}function io(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function no(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ep=/^[ \t]*#include +<([\w\d./]+)>/gm;function va(s){return s.replace(ep,np)}const ip=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function np(s,t){let e=Yt[t];if(e===void 0){const i=ip.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return va(e)}const sp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function so(s){return s.replace(sp,ap)}function ap(s,t,e,i){let n="";for(let a=parseInt(t);a<parseInt(e);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function ao(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function rp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===xo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Dl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ii&&(t="SHADOWMAP_TYPE_VSM"),t}function op(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case cn:case hn:t="ENVMAP_TYPE_CUBE";break;case vs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case hn:t="ENVMAP_MODE_REFRACTION";break}return t}function cp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ea:t="ENVMAP_BLENDING_MULTIPLY";break;case nc:t="ENVMAP_BLENDING_MIX";break;case sc:t="ENVMAP_BLENDING_ADD";break}return t}function hp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function dp(s,t,e,i){const n=s.getContext(),a=e.defines;let o=e.vertexShader,r=e.fragmentShader;const c=rp(e),l=op(e),h=lp(e),f=cp(e),p=hp(e),g=e.isWebGL2?"":Zf(e),m=Jf(e),v=Qf(a),d=n.createProgram();let u,y,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(sn).join(`
`),u.length>0&&(u+=`
`),y=[g,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(sn).join(`
`),y.length>0&&(y+=`
`)):(u=[ao(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sn).join(`
`),y=[g,ao(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==gi?jf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,qf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sn).join(`
`)),o=va(o),o=io(o,e),o=no(o,e),r=va(r),r=io(r,e),r=no(r,e),o=so(o),r=so(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,u=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===xr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const M=_+u+o,T=_+y+r,S=to(n,n.VERTEX_SHADER,M),A=to(n,n.FRAGMENT_SHADER,T);n.attachShader(d,S),n.attachShader(d,A),e.index0AttributeName!==void 0?n.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(d,0,"position"),n.linkProgram(d);function O(k){if(s.debug.checkShaderErrors){const K=n.getProgramInfoLog(d).trim(),w=n.getShaderInfoLog(S).trim(),I=n.getShaderInfoLog(A).trim();let U=!0,$=!0;if(n.getProgramParameter(d,n.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,d,S,A);else{const H=eo(n,S,"vertex"),q=eo(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(d,n.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+H+`
`+q)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(w===""||I==="")&&($=!1);$&&(k.diagnostics={runnable:U,programLog:K,vertexShader:{log:w,prefix:u},fragmentShader:{log:I,prefix:y}})}n.deleteShader(S),n.deleteShader(A),E=new as(n,d),b=tp(n,d)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=n.getProgramParameter(d,Yf)),z},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(d),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xf++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=S,this.fragmentShader=A,this}let up=0;class fp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new pp(t),e.set(t,i)),i}}class pp{constructor(t){this.id=up++,this.code=t,this.usedTimes=0}}function mp(s,t,e,i,n,a,o){const r=new Pa,c=new fp,l=[],h=n.isWebGL2,f=n.logarithmicDepthBuffer,p=n.vertexTextures;let g=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function d(E,b,z,k,K){const w=k.fog,I=K.geometry,U=E.isMeshStandardMaterial?k.environment:null,$=(E.isMeshStandardMaterial?e:t).get(E.envMap||U),H=$&&$.mapping===vs?$.image.height:null,q=m[E.type];E.precision!==null&&(g=n.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const Q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,at=Q!==void 0?Q.length:0;let nt=0;I.morphAttributes.position!==void 0&&(nt=1),I.morphAttributes.normal!==void 0&&(nt=2),I.morphAttributes.color!==void 0&&(nt=3);let W,rt,dt,R;if(q){const re=$e[q];W=re.vertexShader,rt=re.fragmentShader}else W=E.vertexShader,rt=E.fragmentShader,c.update(E),dt=c.getVertexShaderID(E),R=c.getFragmentShaderID(E);const G=s.getRenderTarget(),J=K.isInstancedMesh===!0,X=K.isBatchedMesh===!0,B=!!E.map,ct=!!E.matcap,F=!!$,zt=!!E.aoMap,mt=!!E.lightMap,yt=!!E.bumpMap,ft=!!E.normalMap,Lt=!!E.displacementMap,Tt=!!E.emissiveMap,P=!!E.metalnessMap,x=!!E.roughnessMap,V=E.anisotropy>0,ot=E.clearcoat>0,et=E.iridescence>0,lt=E.sheen>0,gt=E.transmission>0,ut=V&&!!E.anisotropyMap,Mt=ot&&!!E.clearcoatMap,At=ot&&!!E.clearcoatNormalMap,wt=ot&&!!E.clearcoatRoughnessMap,ht=et&&!!E.iridescenceMap,Ht=et&&!!E.iridescenceThicknessMap,Ot=lt&&!!E.sheenColorMap,It=lt&&!!E.sheenRoughnessMap,Ct=!!E.specularMap,St=!!E.specularColorMap,L=!!E.specularIntensityMap,vt=gt&&!!E.transmissionMap,Dt=gt&&!!E.thicknessMap,Pt=!!E.gradientMap,pt=!!E.alphaMap,N=E.alphaTest>0,_t=!!E.alphaHash,xt=!!E.extensions,Ft=!!I.attributes.uv1,Ut=!!I.attributes.uv2,qt=!!I.attributes.uv3;let jt=gi;return E.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(jt=s.toneMapping),{isWebGL2:h,shaderID:q,shaderType:E.type,shaderName:E.name,vertexShader:W,fragmentShader:rt,defines:E.defines,customVertexShaderID:dt,customFragmentShaderID:R,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:X,instancing:J,instancingColor:J&&K.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:G===null?s.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ai,map:B,matcap:ct,envMap:F,envMapMode:F&&$.mapping,envMapCubeUVHeight:H,aoMap:zt,lightMap:mt,bumpMap:yt,normalMap:ft,displacementMap:p&&Lt,emissiveMap:Tt,normalMapObjectSpace:ft&&E.normalMapType===Ec,normalMapTangentSpace:ft&&E.normalMapType===Do,metalnessMap:P,roughnessMap:x,anisotropy:V,anisotropyMap:ut,clearcoat:ot,clearcoatMap:Mt,clearcoatNormalMap:At,clearcoatRoughnessMap:wt,iridescence:et,iridescenceMap:ht,iridescenceThicknessMap:Ht,sheen:lt,sheenColorMap:Ot,sheenRoughnessMap:It,specularMap:Ct,specularColorMap:St,specularIntensityMap:L,transmission:gt,transmissionMap:vt,thicknessMap:Dt,gradientMap:Pt,opaque:E.transparent===!1&&E.blending===on,alphaMap:pt,alphaTest:N,alphaHash:_t,combine:E.combine,mapUv:B&&v(E.map.channel),aoMapUv:zt&&v(E.aoMap.channel),lightMapUv:mt&&v(E.lightMap.channel),bumpMapUv:yt&&v(E.bumpMap.channel),normalMapUv:ft&&v(E.normalMap.channel),displacementMapUv:Lt&&v(E.displacementMap.channel),emissiveMapUv:Tt&&v(E.emissiveMap.channel),metalnessMapUv:P&&v(E.metalnessMap.channel),roughnessMapUv:x&&v(E.roughnessMap.channel),anisotropyMapUv:ut&&v(E.anisotropyMap.channel),clearcoatMapUv:Mt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:At&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:It&&v(E.sheenRoughnessMap.channel),specularMapUv:Ct&&v(E.specularMap.channel),specularColorMapUv:St&&v(E.specularColorMap.channel),specularIntensityMapUv:L&&v(E.specularIntensityMap.channel),transmissionMapUv:vt&&v(E.transmissionMap.channel),thicknessMapUv:Dt&&v(E.thicknessMap.channel),alphaMapUv:pt&&v(E.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ft||V),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Ft,vertexUv2s:Ut,vertexUv3s:qt,pointsUvs:K.isPoints===!0&&!!I.attributes.uv&&(B||pt),fog:!!w,useFog:E.fog===!0,fogExp2:w&&w.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:K.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:nt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:jt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:B&&E.map.isVideoTexture===!0&&Qt.getTransfer(E.map.colorSpace)===ee,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ni,flipSided:E.side===Re,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:xt&&E.extensions.derivatives===!0,extensionFragDepth:xt&&E.extensions.fragDepth===!0,extensionDrawBuffers:xt&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:xt&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xt&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const z in E.defines)b.push(z),b.push(E.defines[z]);return E.isRawShaderMaterial===!1&&(y(b,E),_(b,E),b.push(s.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function y(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function _(E,b){r.disableAll(),b.isWebGL2&&r.enable(0),b.supportsVertexTextures&&r.enable(1),b.instancing&&r.enable(2),b.instancingColor&&r.enable(3),b.matcap&&r.enable(4),b.envMap&&r.enable(5),b.normalMapObjectSpace&&r.enable(6),b.normalMapTangentSpace&&r.enable(7),b.clearcoat&&r.enable(8),b.iridescence&&r.enable(9),b.alphaTest&&r.enable(10),b.vertexColors&&r.enable(11),b.vertexAlphas&&r.enable(12),b.vertexUv1s&&r.enable(13),b.vertexUv2s&&r.enable(14),b.vertexUv3s&&r.enable(15),b.vertexTangents&&r.enable(16),b.anisotropy&&r.enable(17),b.alphaHash&&r.enable(18),b.batching&&r.enable(19),E.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.skinning&&r.enable(4),b.morphTargets&&r.enable(5),b.morphNormals&&r.enable(6),b.morphColors&&r.enable(7),b.premultipliedAlpha&&r.enable(8),b.shadowMapEnabled&&r.enable(9),b.useLegacyLights&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),E.push(r.mask)}function M(E){const b=m[E.type];let z;if(b){const k=$e[b];z=jc.clone(k.uniforms)}else z=E.uniforms;return z}function T(E,b){let z;for(let k=0,K=l.length;k<K;k++){const w=l[k];if(w.cacheKey===b){z=w,++z.usedTimes;break}}return z===void 0&&(z=new dp(s,b,E,a),l.push(z)),z}function S(E){if(--E.usedTimes===0){const b=l.indexOf(E);l[b]=l[l.length-1],l.pop(),E.destroy()}}function A(E){c.remove(E)}function O(){c.dispose()}return{getParameters:d,getProgramCacheKey:u,getUniforms:M,acquireProgram:T,releaseProgram:S,releaseShaderCache:A,programs:l,dispose:O}}function gp(){let s=new WeakMap;function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function e(a){s.delete(a)}function i(a,o,r){s.get(a)[o]=r}function n(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function vp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ro(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function oo(){const s=[];let t=0;const e=[],i=[],n=[];function a(){t=0,e.length=0,i.length=0,n.length=0}function o(f,p,g,m,v,d){let u=s[t];return u===void 0?(u={id:f.id,object:f,geometry:p,material:g,groupOrder:m,renderOrder:f.renderOrder,z:v,group:d},s[t]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=g,u.groupOrder=m,u.renderOrder=f.renderOrder,u.z=v,u.group=d),t++,u}function r(f,p,g,m,v,d){const u=o(f,p,g,m,v,d);g.transmission>0?i.push(u):g.transparent===!0?n.push(u):e.push(u)}function c(f,p,g,m,v,d){const u=o(f,p,g,m,v,d);g.transmission>0?i.unshift(u):g.transparent===!0?n.unshift(u):e.unshift(u)}function l(f,p){e.length>1&&e.sort(f||vp),i.length>1&&i.sort(p||ro),n.length>1&&n.sort(p||ro)}function h(){for(let f=t,p=s.length;f<p;f++){const g=s[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:n,init:a,push:r,unshift:c,finish:h,sort:l}}function _p(){let s=new WeakMap;function t(i,n){const a=s.get(i);let o;return a===void 0?(o=new oo,s.set(i,[o])):n>=a.length?(o=new oo,a.push(o)):o=a[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function yp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new j,color:new Jt};break;case"SpotLight":e={position:new j,direction:new j,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new j,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new j,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new j,halfWidth:new j,halfHeight:new j};break}return s[t.id]=e,e}}}function Mp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Tp=0;function Ep(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function xp(s,t){const e=new yp,i=Mp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new j);const a=new j,o=new he,r=new he;function c(h,f){let p=0,g=0,m=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let v=0,d=0,u=0,y=0,_=0,M=0,T=0,S=0,A=0,O=0,E=0;h.sort(Ep);const b=f===!0?Math.PI:1;for(let k=0,K=h.length;k<K;k++){const w=h[k],I=w.color,U=w.intensity,$=w.distance,H=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)p+=I.r*U*b,g+=I.g*U*b,m+=I.b*U*b;else if(w.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(w.sh.coefficients[q],U);E++}else if(w.isDirectionalLight){const q=e.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity*b),w.castShadow){const Q=w.shadow,at=i.get(w);at.shadowBias=Q.bias,at.shadowNormalBias=Q.normalBias,at.shadowRadius=Q.radius,at.shadowMapSize=Q.mapSize,n.directionalShadow[v]=at,n.directionalShadowMap[v]=H,n.directionalShadowMatrix[v]=w.shadow.matrix,M++}n.directional[v]=q,v++}else if(w.isSpotLight){const q=e.get(w);q.position.setFromMatrixPosition(w.matrixWorld),q.color.copy(I).multiplyScalar(U*b),q.distance=$,q.coneCos=Math.cos(w.angle),q.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),q.decay=w.decay,n.spot[u]=q;const Q=w.shadow;if(w.map&&(n.spotLightMap[A]=w.map,A++,Q.updateMatrices(w),w.castShadow&&O++),n.spotLightMatrix[u]=Q.matrix,w.castShadow){const at=i.get(w);at.shadowBias=Q.bias,at.shadowNormalBias=Q.normalBias,at.shadowRadius=Q.radius,at.shadowMapSize=Q.mapSize,n.spotShadow[u]=at,n.spotShadowMap[u]=H,S++}u++}else if(w.isRectAreaLight){const q=e.get(w);q.color.copy(I).multiplyScalar(U),q.halfWidth.set(w.width*.5,0,0),q.halfHeight.set(0,w.height*.5,0),n.rectArea[y]=q,y++}else if(w.isPointLight){const q=e.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity*b),q.distance=w.distance,q.decay=w.decay,w.castShadow){const Q=w.shadow,at=i.get(w);at.shadowBias=Q.bias,at.shadowNormalBias=Q.normalBias,at.shadowRadius=Q.radius,at.shadowMapSize=Q.mapSize,at.shadowCameraNear=Q.camera.near,at.shadowCameraFar=Q.camera.far,n.pointShadow[d]=at,n.pointShadowMap[d]=H,n.pointShadowMatrix[d]=w.shadow.matrix,T++}n.point[d]=q,d++}else if(w.isHemisphereLight){const q=e.get(w);q.skyColor.copy(w.color).multiplyScalar(U*b),q.groundColor.copy(w.groundColor).multiplyScalar(U*b),n.hemi[_]=q,_++}}y>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=p,n.ambient[1]=g,n.ambient[2]=m;const z=n.hash;(z.directionalLength!==v||z.pointLength!==d||z.spotLength!==u||z.rectAreaLength!==y||z.hemiLength!==_||z.numDirectionalShadows!==M||z.numPointShadows!==T||z.numSpotShadows!==S||z.numSpotMaps!==A||z.numLightProbes!==E)&&(n.directional.length=v,n.spot.length=u,n.rectArea.length=y,n.point.length=d,n.hemi.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+A-O,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=E,z.directionalLength=v,z.pointLength=d,z.spotLength=u,z.rectAreaLength=y,z.hemiLength=_,z.numDirectionalShadows=M,z.numPointShadows=T,z.numSpotShadows=S,z.numSpotMaps=A,z.numLightProbes=E,n.version=Tp++)}function l(h,f){let p=0,g=0,m=0,v=0,d=0;const u=f.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){const M=h[y];if(M.isDirectionalLight){const T=n.directional[p];T.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(u),p++}else if(M.isSpotLight){const T=n.spot[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(u),m++}else if(M.isRectAreaLight){const T=n.rectArea[v];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(u),r.identity(),o.copy(M.matrixWorld),o.premultiply(u),r.extractRotation(o),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),v++}else if(M.isPointLight){const T=n.point[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(u),g++}else if(M.isHemisphereLight){const T=n.hemi[d];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(u),d++}}}return{setup:c,setupView:l,state:n}}function lo(s,t){const e=new xp(s,t),i=[],n=[];function a(){i.length=0,n.length=0}function o(f){i.push(f)}function r(f){n.push(f)}function c(f){e.setup(i,f)}function l(f){e.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:r}}function Sp(s,t){let e=new WeakMap;function i(a,o=0){const r=e.get(a);let c;return r===void 0?(c=new lo(s,t),e.set(a,[c])):o>=r.length?(c=new lo(s,t),r.push(c)):c=r[o],c}function n(){e=new WeakMap}return{get:i,dispose:n}}class Ap extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bp extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Pp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cp=`uniform sampler2D shadow_pass;
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
}`;function wp(s,t,e){let i=new Ca;const n=new Bt,a=new Bt,o=new me,r=new Ap({depthPacking:Tc}),c=new bp,l={},h=e.maxTextureSize,f={[_i]:Re,[Re]:_i,[ni]:ni},p=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:Pp,fragmentShader:Cp}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const m=new qe;m.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new te(m,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xo;let u=this.type;this.render=function(S,A,O){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||S.length===0)return;const E=s.getRenderTarget(),b=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),k=s.state;k.setBlending(mi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const K=u!==ii&&this.type===ii,w=u===ii&&this.type!==ii;for(let I=0,U=S.length;I<U;I++){const $=S[I],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const q=H.getFrameExtents();if(n.multiply(q),a.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/q.x),n.x=a.x*q.x,H.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/q.y),n.y=a.y*q.y,H.mapSize.y=a.y)),H.map===null||K===!0||w===!0){const at=this.type!==ii?{minFilter:Ae,magFilter:Ae}:{};H.map!==null&&H.map.dispose(),H.map=new Ii(n.x,n.y,at),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const Q=H.getViewportCount();for(let at=0;at<Q;at++){const nt=H.getViewport(at);o.set(a.x*nt.x,a.y*nt.y,a.x*nt.z,a.y*nt.w),k.viewport(o),H.updateMatrices($,at),i=H.getFrustum(),M(A,O,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===ii&&y(H,O),H.needsUpdate=!1}u=this.type,d.needsUpdate=!1,s.setRenderTarget(E,b,z)};function y(S,A){const O=t.update(v);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,g.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ii(n.x,n.y)),p.uniforms.shadow_pass.value=S.map.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(A,null,O,p,v,null),g.uniforms.shadow_pass.value=S.mapPass.texture,g.uniforms.resolution.value=S.mapSize,g.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(A,null,O,g,v,null)}function _(S,A,O,E){let b=null;const z=O.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(z!==void 0)b=z;else if(b=O.isPointLight===!0?c:r,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=b.uuid,K=A.uuid;let w=l[k];w===void 0&&(w={},l[k]=w);let I=w[K];I===void 0&&(I=b.clone(),w[K]=I,A.addEventListener("dispose",T)),b=I}if(b.visible=A.visible,b.wireframe=A.wireframe,E===ii?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:f[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const k=s.properties.get(b);k.light=O}return b}function M(S,A,O,E,b){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===ii)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld);const K=t.update(S),w=S.material;if(Array.isArray(w)){const I=K.groups;for(let U=0,$=I.length;U<$;U++){const H=I[U],q=w[H.materialIndex];if(q&&q.visible){const Q=_(S,q,E,b);S.onBeforeShadow(s,S,A,O,K,Q,H),s.renderBufferDirect(O,null,K,Q,S,H),S.onAfterShadow(s,S,A,O,K,Q,H)}}}else if(w.visible){const I=_(S,w,E,b);S.onBeforeShadow(s,S,A,O,K,I,null),s.renderBufferDirect(O,null,K,I,S,null),S.onAfterShadow(s,S,A,O,K,I,null)}}const k=S.children;for(let K=0,w=k.length;K<w;K++)M(k[K],A,O,E,b)}function T(S){S.target.removeEventListener("dispose",T);for(const O in l){const E=l[O],b=S.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}function Rp(s,t,e){const i=e.isWebGL2;function n(){let N=!1;const _t=new me;let xt=null;const Ft=new me(0,0,0,0);return{setMask:function(Ut){xt!==Ut&&!N&&(s.colorMask(Ut,Ut,Ut,Ut),xt=Ut)},setLocked:function(Ut){N=Ut},setClear:function(Ut,qt,jt,se,re){re===!0&&(Ut*=se,qt*=se,jt*=se),_t.set(Ut,qt,jt,se),Ft.equals(_t)===!1&&(s.clearColor(Ut,qt,jt,se),Ft.copy(_t))},reset:function(){N=!1,xt=null,Ft.set(-1,0,0,0)}}}function a(){let N=!1,_t=null,xt=null,Ft=null;return{setTest:function(Ut){Ut?X(s.DEPTH_TEST):B(s.DEPTH_TEST)},setMask:function(Ut){_t!==Ut&&!N&&(s.depthMask(Ut),_t=Ut)},setFunc:function(Ut){if(xt!==Ut){switch(Ut){case jl:s.depthFunc(s.NEVER);break;case Zl:s.depthFunc(s.ALWAYS);break;case Jl:s.depthFunc(s.LESS);break;case os:s.depthFunc(s.LEQUAL);break;case Ql:s.depthFunc(s.EQUAL);break;case tc:s.depthFunc(s.GEQUAL);break;case ec:s.depthFunc(s.GREATER);break;case ic:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xt=Ut}},setLocked:function(Ut){N=Ut},setClear:function(Ut){Ft!==Ut&&(s.clearDepth(Ut),Ft=Ut)},reset:function(){N=!1,_t=null,xt=null,Ft=null}}}function o(){let N=!1,_t=null,xt=null,Ft=null,Ut=null,qt=null,jt=null,se=null,re=null;return{setTest:function(Zt){N||(Zt?X(s.STENCIL_TEST):B(s.STENCIL_TEST))},setMask:function(Zt){_t!==Zt&&!N&&(s.stencilMask(Zt),_t=Zt)},setFunc:function(Zt,le,Xe){(xt!==Zt||Ft!==le||Ut!==Xe)&&(s.stencilFunc(Zt,le,Xe),xt=Zt,Ft=le,Ut=Xe)},setOp:function(Zt,le,Xe){(qt!==Zt||jt!==le||se!==Xe)&&(s.stencilOp(Zt,le,Xe),qt=Zt,jt=le,se=Xe)},setLocked:function(Zt){N=Zt},setClear:function(Zt){re!==Zt&&(s.clearStencil(Zt),re=Zt)},reset:function(){N=!1,_t=null,xt=null,Ft=null,Ut=null,qt=null,jt=null,se=null,re=null}}}const r=new n,c=new a,l=new o,h=new WeakMap,f=new WeakMap;let p={},g={},m=new WeakMap,v=[],d=null,u=!1,y=null,_=null,M=null,T=null,S=null,A=null,O=null,E=new Jt(0,0,0),b=0,z=!1,k=null,K=null,w=null,I=null,U=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,q=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Q)[1]),H=q>=1):Q.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),H=q>=2);let at=null,nt={};const W=s.getParameter(s.SCISSOR_BOX),rt=s.getParameter(s.VIEWPORT),dt=new me().fromArray(W),R=new me().fromArray(rt);function G(N,_t,xt,Ft){const Ut=new Uint8Array(4),qt=s.createTexture();s.bindTexture(N,qt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let jt=0;jt<xt;jt++)i&&(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)?s.texImage3D(_t,0,s.RGBA,1,1,Ft,0,s.RGBA,s.UNSIGNED_BYTE,Ut):s.texImage2D(_t+jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ut);return qt}const J={};J[s.TEXTURE_2D]=G(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=G(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(J[s.TEXTURE_2D_ARRAY]=G(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=G(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),c.setClear(1),l.setClear(0),X(s.DEPTH_TEST),c.setFunc(os),Tt(!1),P(Va),X(s.CULL_FACE),ft(mi);function X(N){p[N]!==!0&&(s.enable(N),p[N]=!0)}function B(N){p[N]!==!1&&(s.disable(N),p[N]=!1)}function ct(N,_t){return g[N]!==_t?(s.bindFramebuffer(N,_t),g[N]=_t,i&&(N===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=_t),N===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=_t)),!0):!1}function F(N,_t){let xt=v,Ft=!1;if(N)if(xt=m.get(_t),xt===void 0&&(xt=[],m.set(_t,xt)),N.isWebGLMultipleRenderTargets){const Ut=N.texture;if(xt.length!==Ut.length||xt[0]!==s.COLOR_ATTACHMENT0){for(let qt=0,jt=Ut.length;qt<jt;qt++)xt[qt]=s.COLOR_ATTACHMENT0+qt;xt.length=Ut.length,Ft=!0}}else xt[0]!==s.COLOR_ATTACHMENT0&&(xt[0]=s.COLOR_ATTACHMENT0,Ft=!0);else xt[0]!==s.BACK&&(xt[0]=s.BACK,Ft=!0);Ft&&(e.isWebGL2?s.drawBuffers(xt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt))}function zt(N){return d!==N?(s.useProgram(N),d=N,!0):!1}const mt={[Pi]:s.FUNC_ADD,[Nl]:s.FUNC_SUBTRACT,[Ul]:s.FUNC_REVERSE_SUBTRACT};if(i)mt[$a]=s.MIN,mt[Ka]=s.MAX;else{const N=t.get("EXT_blend_minmax");N!==null&&(mt[$a]=N.MIN_EXT,mt[Ka]=N.MAX_EXT)}const yt={[zl]:s.ZERO,[Fl]:s.ONE,[Gl]:s.SRC_COLOR,[la]:s.SRC_ALPHA,[Yl]:s.SRC_ALPHA_SATURATE,[Vl]:s.DST_COLOR,[kl]:s.DST_ALPHA,[Bl]:s.ONE_MINUS_SRC_COLOR,[ca]:s.ONE_MINUS_SRC_ALPHA,[Wl]:s.ONE_MINUS_DST_COLOR,[Hl]:s.ONE_MINUS_DST_ALPHA,[Xl]:s.CONSTANT_COLOR,[$l]:s.ONE_MINUS_CONSTANT_COLOR,[Kl]:s.CONSTANT_ALPHA,[ql]:s.ONE_MINUS_CONSTANT_ALPHA};function ft(N,_t,xt,Ft,Ut,qt,jt,se,re,Zt){if(N===mi){u===!0&&(B(s.BLEND),u=!1);return}if(u===!1&&(X(s.BLEND),u=!0),N!==Ol){if(N!==y||Zt!==z){if((_!==Pi||S!==Pi)&&(s.blendEquation(s.FUNC_ADD),_=Pi,S=Pi),Zt)switch(N){case on:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wa:s.blendFunc(s.ONE,s.ONE);break;case Ya:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case on:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wa:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ya:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,T=null,A=null,O=null,E.set(0,0,0),b=0,y=N,z=Zt}return}Ut=Ut||_t,qt=qt||xt,jt=jt||Ft,(_t!==_||Ut!==S)&&(s.blendEquationSeparate(mt[_t],mt[Ut]),_=_t,S=Ut),(xt!==M||Ft!==T||qt!==A||jt!==O)&&(s.blendFuncSeparate(yt[xt],yt[Ft],yt[qt],yt[jt]),M=xt,T=Ft,A=qt,O=jt),(se.equals(E)===!1||re!==b)&&(s.blendColor(se.r,se.g,se.b,re),E.copy(se),b=re),y=N,z=!1}function Lt(N,_t){N.side===ni?B(s.CULL_FACE):X(s.CULL_FACE);let xt=N.side===Re;_t&&(xt=!xt),Tt(xt),N.blending===on&&N.transparent===!1?ft(mi):ft(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),r.setMask(N.colorWrite);const Ft=N.stencilWrite;l.setTest(Ft),Ft&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),V(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?X(s.SAMPLE_ALPHA_TO_COVERAGE):B(s.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(N){k!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),k=N)}function P(N){N!==Ll?(X(s.CULL_FACE),N!==K&&(N===Va?s.cullFace(s.BACK):N===Il?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):B(s.CULL_FACE),K=N}function x(N){N!==w&&(H&&s.lineWidth(N),w=N)}function V(N,_t,xt){N?(X(s.POLYGON_OFFSET_FILL),(I!==_t||U!==xt)&&(s.polygonOffset(_t,xt),I=_t,U=xt)):B(s.POLYGON_OFFSET_FILL)}function ot(N){N?X(s.SCISSOR_TEST):B(s.SCISSOR_TEST)}function et(N){N===void 0&&(N=s.TEXTURE0+$-1),at!==N&&(s.activeTexture(N),at=N)}function lt(N,_t,xt){xt===void 0&&(at===null?xt=s.TEXTURE0+$-1:xt=at);let Ft=nt[xt];Ft===void 0&&(Ft={type:void 0,texture:void 0},nt[xt]=Ft),(Ft.type!==N||Ft.texture!==_t)&&(at!==xt&&(s.activeTexture(xt),at=xt),s.bindTexture(N,_t||J[N]),Ft.type=N,Ft.texture=_t)}function gt(){const N=nt[at];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ut(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ht(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ot(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function L(N){dt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),dt.copy(N))}function vt(N){R.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),R.copy(N))}function Dt(N,_t){let xt=f.get(_t);xt===void 0&&(xt=new WeakMap,f.set(_t,xt));let Ft=xt.get(N);Ft===void 0&&(Ft=s.getUniformBlockIndex(_t,N.name),xt.set(N,Ft))}function Pt(N,_t){const Ft=f.get(_t).get(N);h.get(_t)!==Ft&&(s.uniformBlockBinding(_t,Ft,N.__bindingPointIndex),h.set(_t,Ft))}function pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},at=null,nt={},g={},m=new WeakMap,v=[],d=null,u=!1,y=null,_=null,M=null,T=null,S=null,A=null,O=null,E=new Jt(0,0,0),b=0,z=!1,k=null,K=null,w=null,I=null,U=null,dt.set(0,0,s.canvas.width,s.canvas.height),R.set(0,0,s.canvas.width,s.canvas.height),r.reset(),c.reset(),l.reset()}return{buffers:{color:r,depth:c,stencil:l},enable:X,disable:B,bindFramebuffer:ct,drawBuffers:F,useProgram:zt,setBlending:ft,setMaterial:Lt,setFlipSided:Tt,setCullFace:P,setLineWidth:x,setPolygonOffset:V,setScissorTest:ot,activeTexture:et,bindTexture:lt,unbindTexture:gt,compressedTexImage2D:ut,compressedTexImage3D:Mt,texImage2D:Ct,texImage3D:St,updateUBOMapping:Dt,uniformBlockBinding:Pt,texStorage2D:Ot,texStorage3D:It,texSubImage2D:At,texSubImage3D:wt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Ht,scissor:L,viewport:vt,reset:pt}}function Lp(s,t,e,i,n,a,o){const r=n.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,x){return g?new OffscreenCanvas(P,x):us("canvas")}function v(P,x,V,ot){let et=1;if((P.width>ot||P.height>ot)&&(et=ot/Math.max(P.width,P.height)),et<1||x===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const lt=x?ga:Math.floor,gt=lt(et*P.width),ut=lt(et*P.height);f===void 0&&(f=m(gt,ut));const Mt=V?m(gt,ut):f;return Mt.width=gt,Mt.height=ut,Mt.getContext("2d").drawImage(P,0,0,gt,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+gt+"x"+ut+")."),Mt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function d(P){return Sr(P.width)&&Sr(P.height)}function u(P){return r?!1:P.wrapS!==We||P.wrapT!==We||P.minFilter!==Ae&&P.minFilter!==ze}function y(P,x){return P.generateMipmaps&&x&&P.minFilter!==Ae&&P.minFilter!==ze}function _(P){s.generateMipmap(P)}function M(P,x,V,ot,et=!1){if(r===!1)return x;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let lt=x;if(x===s.RED&&(V===s.FLOAT&&(lt=s.R32F),V===s.HALF_FLOAT&&(lt=s.R16F),V===s.UNSIGNED_BYTE&&(lt=s.R8)),x===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(lt=s.R8UI),V===s.UNSIGNED_SHORT&&(lt=s.R16UI),V===s.UNSIGNED_INT&&(lt=s.R32UI),V===s.BYTE&&(lt=s.R8I),V===s.SHORT&&(lt=s.R16I),V===s.INT&&(lt=s.R32I)),x===s.RG&&(V===s.FLOAT&&(lt=s.RG32F),V===s.HALF_FLOAT&&(lt=s.RG16F),V===s.UNSIGNED_BYTE&&(lt=s.RG8)),x===s.RGBA){const gt=et?ls:Qt.getTransfer(ot);V===s.FLOAT&&(lt=s.RGBA32F),V===s.HALF_FLOAT&&(lt=s.RGBA16F),V===s.UNSIGNED_BYTE&&(lt=gt===ee?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(lt=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(lt=s.RGB5_A1)}return(lt===s.R16F||lt===s.R32F||lt===s.RG16F||lt===s.RG32F||lt===s.RGBA16F||lt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function T(P,x,V){return y(P,V)===!0||P.isFramebufferTexture&&P.minFilter!==Ae&&P.minFilter!==ze?Math.log2(Math.max(x.width,x.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?x.mipmaps.length:1}function S(P){return P===Ae||P===qa||P===Ps?s.NEAREST:s.LINEAR}function A(P){const x=P.target;x.removeEventListener("dispose",A),E(x),x.isVideoTexture&&h.delete(x)}function O(P){const x=P.target;x.removeEventListener("dispose",O),z(x)}function E(P){const x=i.get(P);if(x.__webglInit===void 0)return;const V=P.source,ot=p.get(V);if(ot){const et=ot[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&b(P),Object.keys(ot).length===0&&p.delete(V)}i.remove(P)}function b(P){const x=i.get(P);s.deleteTexture(x.__webglTexture);const V=P.source,ot=p.get(V);delete ot[x.__cacheKey],o.memory.textures--}function z(P){const x=P.texture,V=i.get(P),ot=i.get(x);if(ot.__webglTexture!==void 0&&(s.deleteTexture(ot.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(V.__webglFramebuffer[et]))for(let lt=0;lt<V.__webglFramebuffer[et].length;lt++)s.deleteFramebuffer(V.__webglFramebuffer[et][lt]);else s.deleteFramebuffer(V.__webglFramebuffer[et]);V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer[et])}else{if(Array.isArray(V.__webglFramebuffer))for(let et=0;et<V.__webglFramebuffer.length;et++)s.deleteFramebuffer(V.__webglFramebuffer[et]);else s.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&s.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let et=0;et<V.__webglColorRenderbuffer.length;et++)V.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(V.__webglColorRenderbuffer[et]);V.__webglDepthRenderbuffer&&s.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let et=0,lt=x.length;et<lt;et++){const gt=i.get(x[et]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),o.memory.textures--),i.remove(x[et])}i.remove(x),i.remove(P)}let k=0;function K(){k=0}function w(){const P=k;return P>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+n.maxTextures),k+=1,P}function I(P){const x=[];return x.push(P.wrapS),x.push(P.wrapT),x.push(P.wrapR||0),x.push(P.magFilter),x.push(P.minFilter),x.push(P.anisotropy),x.push(P.internalFormat),x.push(P.format),x.push(P.type),x.push(P.generateMipmaps),x.push(P.premultiplyAlpha),x.push(P.flipY),x.push(P.unpackAlignment),x.push(P.colorSpace),x.join()}function U(P,x){const V=i.get(P);if(P.isVideoTexture&&Lt(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const ot=P.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(V,P,x);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+x)}function $(P,x){const V=i.get(P);if(P.version>0&&V.__version!==P.version){dt(V,P,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+x)}function H(P,x){const V=i.get(P);if(P.version>0&&V.__version!==P.version){dt(V,P,x);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+x)}function q(P,x){const V=i.get(P);if(P.version>0&&V.__version!==P.version){R(V,P,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+x)}const Q={[ua]:s.REPEAT,[We]:s.CLAMP_TO_EDGE,[fa]:s.MIRRORED_REPEAT},at={[Ae]:s.NEAREST,[qa]:s.NEAREST_MIPMAP_NEAREST,[Ps]:s.NEAREST_MIPMAP_LINEAR,[ze]:s.LINEAR,[dc]:s.LINEAR_MIPMAP_NEAREST,[An]:s.LINEAR_MIPMAP_LINEAR},nt={[xc]:s.NEVER,[wc]:s.ALWAYS,[Sc]:s.LESS,[Oo]:s.LEQUAL,[Ac]:s.EQUAL,[Cc]:s.GEQUAL,[bc]:s.GREATER,[Pc]:s.NOTEQUAL};function W(P,x,V){if(V?(s.texParameteri(P,s.TEXTURE_WRAP_S,Q[x.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Q[x.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Q[x.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,at[x.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,at[x.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(x.wrapS!==We||x.wrapT!==We)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,S(x.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,S(x.minFilter)),x.minFilter!==Ae&&x.minFilter!==ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,nt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ot=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===Ae||x.minFilter!==Ps&&x.minFilter!==An||x.type===pi&&t.has("OES_texture_float_linear")===!1||r===!1&&x.type===bn&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(s.texParameterf(P,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function rt(P,x){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,x.addEventListener("dispose",A));const ot=x.source;let et=p.get(ot);et===void 0&&(et={},p.set(ot,et));const lt=I(x);if(lt!==P.__cacheKey){et[lt]===void 0&&(et[lt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),et[lt].usedTimes++;const gt=et[P.__cacheKey];gt!==void 0&&(et[P.__cacheKey].usedTimes--,gt.usedTimes===0&&b(x)),P.__cacheKey=lt,P.__webglTexture=et[lt].texture}return V}function dt(P,x,V){let ot=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ot=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ot=s.TEXTURE_3D);const et=rt(P,x),lt=x.source;e.bindTexture(ot,P.__webglTexture,s.TEXTURE0+V);const gt=i.get(lt);if(lt.version!==gt.__version||et===!0){e.activeTexture(s.TEXTURE0+V);const ut=Qt.getPrimaries(Qt.workingColorSpace),Mt=x.colorSpace===Ge?null:Qt.getPrimaries(x.colorSpace),At=x.colorSpace===Ge||ut===Mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const wt=u(x)&&d(x.image)===!1;let ht=v(x.image,wt,!1,n.maxTextureSize);ht=Tt(x,ht);const Ht=d(ht)||r,Ot=a.convert(x.format,x.colorSpace);let It=a.convert(x.type),Ct=M(x.internalFormat,Ot,It,x.colorSpace,x.isVideoTexture);W(ot,x,Ht);let St;const L=x.mipmaps,vt=r&&x.isVideoTexture!==!0&&Ct!==Lo,Dt=gt.__version===void 0||et===!0,Pt=T(x,ht,Ht);if(x.isDepthTexture)Ct=s.DEPTH_COMPONENT,r?x.type===pi?Ct=s.DEPTH_COMPONENT32F:x.type===fi?Ct=s.DEPTH_COMPONENT24:x.type===wi?Ct=s.DEPTH24_STENCIL8:Ct=s.DEPTH_COMPONENT16:x.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Ri&&Ct===s.DEPTH_COMPONENT&&x.type!==xa&&x.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=fi,It=a.convert(x.type)),x.format===dn&&Ct===s.DEPTH_COMPONENT&&(Ct=s.DEPTH_STENCIL,x.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=wi,It=a.convert(x.type))),Dt&&(vt?e.texStorage2D(s.TEXTURE_2D,1,Ct,ht.width,ht.height):e.texImage2D(s.TEXTURE_2D,0,Ct,ht.width,ht.height,0,Ot,It,null));else if(x.isDataTexture)if(L.length>0&&Ht){vt&&Dt&&e.texStorage2D(s.TEXTURE_2D,Pt,Ct,L[0].width,L[0].height);for(let pt=0,N=L.length;pt<N;pt++)St=L[pt],vt?e.texSubImage2D(s.TEXTURE_2D,pt,0,0,St.width,St.height,Ot,It,St.data):e.texImage2D(s.TEXTURE_2D,pt,Ct,St.width,St.height,0,Ot,It,St.data);x.generateMipmaps=!1}else vt?(Dt&&e.texStorage2D(s.TEXTURE_2D,Pt,Ct,ht.width,ht.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht.width,ht.height,Ot,It,ht.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,ht.width,ht.height,0,Ot,It,ht.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){vt&&Dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,Ct,L[0].width,L[0].height,ht.depth);for(let pt=0,N=L.length;pt<N;pt++)St=L[pt],x.format!==Ye?Ot!==null?vt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,0,St.width,St.height,ht.depth,Ot,St.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pt,Ct,St.width,St.height,ht.depth,0,St.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,0,St.width,St.height,ht.depth,Ot,It,St.data):e.texImage3D(s.TEXTURE_2D_ARRAY,pt,Ct,St.width,St.height,ht.depth,0,Ot,It,St.data)}else{vt&&Dt&&e.texStorage2D(s.TEXTURE_2D,Pt,Ct,L[0].width,L[0].height);for(let pt=0,N=L.length;pt<N;pt++)St=L[pt],x.format!==Ye?Ot!==null?vt?e.compressedTexSubImage2D(s.TEXTURE_2D,pt,0,0,St.width,St.height,Ot,St.data):e.compressedTexImage2D(s.TEXTURE_2D,pt,Ct,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?e.texSubImage2D(s.TEXTURE_2D,pt,0,0,St.width,St.height,Ot,It,St.data):e.texImage2D(s.TEXTURE_2D,pt,Ct,St.width,St.height,0,Ot,It,St.data)}else if(x.isDataArrayTexture)vt?(Dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,Ct,ht.width,ht.height,ht.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Ot,It,ht.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,ht.width,ht.height,ht.depth,0,Ot,It,ht.data);else if(x.isData3DTexture)vt?(Dt&&e.texStorage3D(s.TEXTURE_3D,Pt,Ct,ht.width,ht.height,ht.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Ot,It,ht.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,ht.width,ht.height,ht.depth,0,Ot,It,ht.data);else if(x.isFramebufferTexture){if(Dt)if(vt)e.texStorage2D(s.TEXTURE_2D,Pt,Ct,ht.width,ht.height);else{let pt=ht.width,N=ht.height;for(let _t=0;_t<Pt;_t++)e.texImage2D(s.TEXTURE_2D,_t,Ct,pt,N,0,Ot,It,null),pt>>=1,N>>=1}}else if(L.length>0&&Ht){vt&&Dt&&e.texStorage2D(s.TEXTURE_2D,Pt,Ct,L[0].width,L[0].height);for(let pt=0,N=L.length;pt<N;pt++)St=L[pt],vt?e.texSubImage2D(s.TEXTURE_2D,pt,0,0,Ot,It,St):e.texImage2D(s.TEXTURE_2D,pt,Ct,Ot,It,St);x.generateMipmaps=!1}else vt?(Dt&&e.texStorage2D(s.TEXTURE_2D,Pt,Ct,ht.width,ht.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Ot,It,ht)):e.texImage2D(s.TEXTURE_2D,0,Ct,Ot,It,ht);y(x,Ht)&&_(ot),gt.__version=lt.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function R(P,x,V){if(x.image.length!==6)return;const ot=rt(P,x),et=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+V);const lt=i.get(et);if(et.version!==lt.__version||ot===!0){e.activeTexture(s.TEXTURE0+V);const gt=Qt.getPrimaries(Qt.workingColorSpace),ut=x.colorSpace===Ge?null:Qt.getPrimaries(x.colorSpace),Mt=x.colorSpace===Ge||gt===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const At=x.isCompressedTexture||x.image[0].isCompressedTexture,wt=x.image[0]&&x.image[0].isDataTexture,ht=[];for(let pt=0;pt<6;pt++)!At&&!wt?ht[pt]=v(x.image[pt],!1,!0,n.maxCubemapSize):ht[pt]=wt?x.image[pt].image:x.image[pt],ht[pt]=Tt(x,ht[pt]);const Ht=ht[0],Ot=d(Ht)||r,It=a.convert(x.format,x.colorSpace),Ct=a.convert(x.type),St=M(x.internalFormat,It,Ct,x.colorSpace),L=r&&x.isVideoTexture!==!0,vt=lt.__version===void 0||ot===!0;let Dt=T(x,Ht,Ot);W(s.TEXTURE_CUBE_MAP,x,Ot);let Pt;if(At){L&&vt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Dt,St,Ht.width,Ht.height);for(let pt=0;pt<6;pt++){Pt=ht[pt].mipmaps;for(let N=0;N<Pt.length;N++){const _t=Pt[N];x.format!==Ye?It!==null?L?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N,0,0,_t.width,_t.height,It,_t.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N,St,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N,0,0,_t.width,_t.height,It,Ct,_t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N,St,_t.width,_t.height,0,It,Ct,_t.data)}}}else{Pt=x.mipmaps,L&&vt&&(Pt.length>0&&Dt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Dt,St,ht[0].width,ht[0].height));for(let pt=0;pt<6;pt++)if(wt){L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,ht[pt].width,ht[pt].height,It,Ct,ht[pt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,St,ht[pt].width,ht[pt].height,0,It,Ct,ht[pt].data);for(let N=0;N<Pt.length;N++){const xt=Pt[N].image[pt].image;L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N+1,0,0,xt.width,xt.height,It,Ct,xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N+1,St,xt.width,xt.height,0,It,Ct,xt.data)}}else{L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,It,Ct,ht[pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,St,It,Ct,ht[pt]);for(let N=0;N<Pt.length;N++){const _t=Pt[N];L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N+1,0,0,It,Ct,_t.image[pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,N+1,St,It,Ct,_t.image[pt])}}}y(x,Ot)&&_(s.TEXTURE_CUBE_MAP),lt.__version=et.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function G(P,x,V,ot,et,lt){const gt=a.convert(V.format,V.colorSpace),ut=a.convert(V.type),Mt=M(V.internalFormat,gt,ut,V.colorSpace);if(!i.get(x).__hasExternalTextures){const wt=Math.max(1,x.width>>lt),ht=Math.max(1,x.height>>lt);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,lt,Mt,wt,ht,x.depth,0,gt,ut,null):e.texImage2D(et,lt,Mt,wt,ht,0,gt,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),ft(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ot,et,i.get(V).__webglTexture,0,yt(x)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ot,et,i.get(V).__webglTexture,lt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function J(P,x,V){if(s.bindRenderbuffer(s.RENDERBUFFER,P),x.depthBuffer&&!x.stencilBuffer){let ot=r===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(V||ft(x)){const et=x.depthTexture;et&&et.isDepthTexture&&(et.type===pi?ot=s.DEPTH_COMPONENT32F:et.type===fi&&(ot=s.DEPTH_COMPONENT24));const lt=yt(x);ft(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,ot,x.width,x.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,ot,x.width,x.height)}else s.renderbufferStorage(s.RENDERBUFFER,ot,x.width,x.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(x.depthBuffer&&x.stencilBuffer){const ot=yt(x);V&&ft(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,s.DEPTH24_STENCIL8,x.width,x.height):ft(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,s.DEPTH24_STENCIL8,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const ot=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let et=0;et<ot.length;et++){const lt=ot[et],gt=a.convert(lt.format,lt.colorSpace),ut=a.convert(lt.type),Mt=M(lt.internalFormat,gt,ut,lt.colorSpace),At=yt(x);V&&ft(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,At,Mt,x.width,x.height):ft(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At,Mt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,Mt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function X(P,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),U(x.depthTexture,0);const ot=i.get(x.depthTexture).__webglTexture,et=yt(x);if(x.depthTexture.format===Ri)ft(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0);else if(x.depthTexture.format===dn)ft(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function B(P){const x=i.get(P),V=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");X(x.__webglFramebuffer,P)}else if(V){x.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[ot]),x.__webglDepthbuffer[ot]=s.createRenderbuffer(),J(x.__webglDepthbuffer[ot],P,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),J(x.__webglDepthbuffer,P,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(P,x,V){const ot=i.get(P);x!==void 0&&G(ot.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&B(P)}function F(P){const x=P.texture,V=i.get(P),ot=i.get(x);P.addEventListener("dispose",O),P.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture()),ot.__version=x.version,o.memory.textures++);const et=P.isWebGLCubeRenderTarget===!0,lt=P.isWebGLMultipleRenderTargets===!0,gt=d(P)||r;if(et){V.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(r&&x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[ut]=[];for(let Mt=0;Mt<x.mipmaps.length;Mt++)V.__webglFramebuffer[ut][Mt]=s.createFramebuffer()}else V.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(r&&x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let ut=0;ut<x.mipmaps.length;ut++)V.__webglFramebuffer[ut]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(lt)if(n.drawBuffers){const ut=P.texture;for(let Mt=0,At=ut.length;Mt<At;Mt++){const wt=i.get(ut[Mt]);wt.__webglTexture===void 0&&(wt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&P.samples>0&&ft(P)===!1){const ut=lt?x:[x];V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Mt=0;Mt<ut.length;Mt++){const At=ut[Mt];V.__webglColorRenderbuffer[Mt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[Mt]);const wt=a.convert(At.format,At.colorSpace),ht=a.convert(At.type),Ht=M(At.internalFormat,wt,ht,At.colorSpace,P.isXRRenderTarget===!0),Ot=yt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot,Ht,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,V.__webglColorRenderbuffer[Mt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),J(V.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(et){e.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture),W(s.TEXTURE_CUBE_MAP,x,gt);for(let ut=0;ut<6;ut++)if(r&&x.mipmaps&&x.mipmaps.length>0)for(let Mt=0;Mt<x.mipmaps.length;Mt++)G(V.__webglFramebuffer[ut][Mt],P,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Mt);else G(V.__webglFramebuffer[ut],P,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);y(x,gt)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){const ut=P.texture;for(let Mt=0,At=ut.length;Mt<At;Mt++){const wt=ut[Mt],ht=i.get(wt);e.bindTexture(s.TEXTURE_2D,ht.__webglTexture),W(s.TEXTURE_2D,wt,gt),G(V.__webglFramebuffer,P,wt,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,0),y(wt,gt)&&_(s.TEXTURE_2D)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(r?ut=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,ot.__webglTexture),W(ut,x,gt),r&&x.mipmaps&&x.mipmaps.length>0)for(let Mt=0;Mt<x.mipmaps.length;Mt++)G(V.__webglFramebuffer[Mt],P,x,s.COLOR_ATTACHMENT0,ut,Mt);else G(V.__webglFramebuffer,P,x,s.COLOR_ATTACHMENT0,ut,0);y(x,gt)&&_(ut),e.unbindTexture()}P.depthBuffer&&B(P)}function zt(P){const x=d(P)||r,V=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ot=0,et=V.length;ot<et;ot++){const lt=V[ot];if(y(lt,x)){const gt=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ut=i.get(lt).__webglTexture;e.bindTexture(gt,ut),_(gt),e.unbindTexture()}}}function mt(P){if(r&&P.samples>0&&ft(P)===!1){const x=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],V=P.width,ot=P.height;let et=s.COLOR_BUFFER_BIT;const lt=[],gt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=i.get(P),Mt=P.isWebGLMultipleRenderTargets===!0;if(Mt)for(let At=0;At<x.length;At++)e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let At=0;At<x.length;At++){lt.push(s.COLOR_ATTACHMENT0+At),P.depthBuffer&&lt.push(gt);const wt=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(wt===!1&&(P.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),Mt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ut.__webglColorRenderbuffer[At]),wt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[gt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[gt])),Mt){const ht=i.get(x[At]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ht,0)}s.blitFramebuffer(0,0,V,ot,0,0,V,ot,et,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Mt)for(let At=0;At<x.length;At++){e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,ut.__webglColorRenderbuffer[At]);const wt=i.get(x[At]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,wt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function yt(P){return Math.min(n.maxSamples,P.samples)}function ft(P){const x=i.get(P);return r&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Lt(P){const x=o.render.frame;h.get(P)!==x&&(h.set(P,x),P.update())}function Tt(P,x){const V=P.colorSpace,ot=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===pa||V!==ai&&V!==Ge&&(Qt.getTransfer(V)===ee?r===!1?t.has("EXT_sRGB")===!0&&ot===Ye?(P.format=pa,P.minFilter=ze,P.generateMipmaps=!1):x=Uo.sRGBToLinear(x):(ot!==Ye||et!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),x}this.allocateTextureUnit=w,this.resetTextureUnits=K,this.setTexture2D=U,this.setTexture2DArray=$,this.setTexture3D=H,this.setTextureCube=q,this.rebindTextures=ct,this.setupRenderTarget=F,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=G,this.useMultisampledRTT=ft}function Ip(s,t,e){const i=e.isWebGL2;function n(a,o=Ge){let r;const c=Qt.getTransfer(o);if(a===vi)return s.UNSIGNED_BYTE;if(a===bo)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Po)return s.UNSIGNED_SHORT_5_5_5_1;if(a===uc)return s.BYTE;if(a===fc)return s.SHORT;if(a===xa)return s.UNSIGNED_SHORT;if(a===Ao)return s.INT;if(a===fi)return s.UNSIGNED_INT;if(a===pi)return s.FLOAT;if(a===bn)return i?s.HALF_FLOAT:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(a===pc)return s.ALPHA;if(a===Ye)return s.RGBA;if(a===mc)return s.LUMINANCE;if(a===gc)return s.LUMINANCE_ALPHA;if(a===Ri)return s.DEPTH_COMPONENT;if(a===dn)return s.DEPTH_STENCIL;if(a===pa)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(a===vc)return s.RED;if(a===Co)return s.RED_INTEGER;if(a===_c)return s.RG;if(a===wo)return s.RG_INTEGER;if(a===Ro)return s.RGBA_INTEGER;if(a===Cs||a===ws||a===Rs||a===Ls)if(c===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(a===Cs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(a===Cs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Rs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ls)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ja||a===Za||a===Ja||a===Qa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(a===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Lo)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===tr||a===er)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(a===tr)return c===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(a===er)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===ir||a===nr||a===sr||a===ar||a===rr||a===or||a===lr||a===cr||a===hr||a===dr||a===ur||a===fr||a===pr||a===mr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(a===ir)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===nr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===sr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ar)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===rr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===or)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===lr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===cr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===hr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===dr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ur)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===fr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===pr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===mr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Is||a===gr||a===vr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(a===Is)return c===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===gr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===vr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===yc||a===_r||a===yr||a===Mr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(a===Is)return r.COMPRESSED_RED_RGTC1_EXT;if(a===_r)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===yr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Mr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===wi?i?s.UNSIGNED_INT_24_8:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:n}}class Dp extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Mn extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Op={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,a=null,o=null;const r=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const d=e.getJointPose(v,i),u=this._getHandJoint(l,v);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=h.position.distanceTo(f.position),g=.02,m=.005;l.inputState.pinching&&p>g+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=g-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(r.matrix.fromArray(n.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,n.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(n.linearVelocity)):r.hasLinearVelocity=!1,n.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(n.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Op)))}return r!==null&&(r.visible=n!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Mn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Np extends Ni{constructor(t,e){super();const i=this;let n=null,a=1,o=null,r="local-floor",c=1,l=null,h=null,f=null,p=null,g=null,m=null;const v=e.getContextAttributes();let d=null,u=null;const y=[],_=[],M=new Bt;let T=null;const S=new Fe;S.layers.enable(1),S.viewport=new me;const A=new Fe;A.layers.enable(2),A.viewport=new me;const O=[S,A],E=new Dp;E.layers.enable(1),E.layers.enable(2);let b=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let rt=y[W];return rt===void 0&&(rt=new ia,y[W]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(W){let rt=y[W];return rt===void 0&&(rt=new ia,y[W]=rt),rt.getGripSpace()},this.getHand=function(W){let rt=y[W];return rt===void 0&&(rt=new ia,y[W]=rt),rt.getHandSpace()};function k(W){const rt=_.indexOf(W.inputSource);if(rt===-1)return;const dt=y[rt];dt!==void 0&&(dt.update(W.inputSource,W.frame,l||o),dt.dispatchEvent({type:W.type,data:W.inputSource}))}function K(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",K),n.removeEventListener("inputsourceschange",w);for(let W=0;W<y.length;W++){const rt=_[W];rt!==null&&(_[W]=null,y[W].disconnect(rt))}b=null,z=null,t.setRenderTarget(d),g=null,p=null,f=null,n=null,u=null,nt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(W){if(n=W,n!==null){if(d=t.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",K),n.addEventListener("inputsourceschange",w),v.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(M),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const rt={antialias:n.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(n,e,rt),n.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),u=new Ii(g.framebufferWidth,g.framebufferHeight,{format:Ye,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let rt=null,dt=null,R=null;v.depth&&(R=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=v.stencil?dn:Ri,dt=v.stencil?wi:fi);const G={colorFormat:e.RGBA8,depthFormat:R,scaleFactor:a};f=new XRWebGLBinding(n,e),p=f.createProjectionLayer(G),n.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),u=new Ii(p.textureWidth,p.textureHeight,{format:Ye,type:vi,depthTexture:new $o(p.textureWidth,p.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const J=t.properties.get(u);J.__ignoreDepthValues=p.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await n.requestReferenceSpace(r),nt.setContext(n),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function w(W){for(let rt=0;rt<W.removed.length;rt++){const dt=W.removed[rt],R=_.indexOf(dt);R>=0&&(_[R]=null,y[R].disconnect(dt))}for(let rt=0;rt<W.added.length;rt++){const dt=W.added[rt];let R=_.indexOf(dt);if(R===-1){for(let J=0;J<y.length;J++)if(J>=_.length){_.push(dt),R=J;break}else if(_[J]===null){_[J]=dt,R=J;break}if(R===-1)break}const G=y[R];G&&G.connect(dt)}}const I=new j,U=new j;function $(W,rt,dt){I.setFromMatrixPosition(rt.matrixWorld),U.setFromMatrixPosition(dt.matrixWorld);const R=I.distanceTo(U),G=rt.projectionMatrix.elements,J=dt.projectionMatrix.elements,X=G[14]/(G[10]-1),B=G[14]/(G[10]+1),ct=(G[9]+1)/G[5],F=(G[9]-1)/G[5],zt=(G[8]-1)/G[0],mt=(J[8]+1)/J[0],yt=X*zt,ft=X*mt,Lt=R/(-zt+mt),Tt=Lt*-zt;rt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Tt),W.translateZ(Lt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const P=X+Lt,x=B+Lt,V=yt-Tt,ot=ft+(R-Tt),et=ct*B/x*P,lt=F*B/x*P;W.projectionMatrix.makePerspective(V,ot,et,lt,P,x),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function H(W,rt){rt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(rt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(n===null)return;E.near=A.near=S.near=W.near,E.far=A.far=S.far=W.far,(b!==E.near||z!==E.far)&&(n.updateRenderState({depthNear:E.near,depthFar:E.far}),b=E.near,z=E.far);const rt=W.parent,dt=E.cameras;H(E,rt);for(let R=0;R<dt.length;R++)H(dt[R],rt);dt.length===2?$(E,S,A):E.projectionMatrix.copy(S.projectionMatrix),q(W,E,rt)};function q(W,rt,dt){dt===null?W.matrix.copy(rt.matrixWorld):(W.matrix.copy(dt.matrixWorld),W.matrix.invert(),W.matrix.multiply(rt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(rt.projectionMatrix),W.projectionMatrixInverse.copy(rt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ma*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&g===null))return c},this.setFoveation=function(W){c=W,p!==null&&(p.fixedFoveation=W),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=W)};let Q=null;function at(W,rt){if(h=rt.getViewerPose(l||o),m=rt,h!==null){const dt=h.views;g!==null&&(t.setRenderTargetFramebuffer(u,g.framebuffer),t.setRenderTarget(u));let R=!1;dt.length!==E.cameras.length&&(E.cameras.length=0,R=!0);for(let G=0;G<dt.length;G++){const J=dt[G];let X=null;if(g!==null)X=g.getViewport(J);else{const ct=f.getViewSubImage(p,J);X=ct.viewport,G===0&&(t.setRenderTargetTextures(u,ct.colorTexture,p.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(u))}let B=O[G];B===void 0&&(B=new Fe,B.layers.enable(G),B.viewport=new me,O[G]=B),B.matrix.fromArray(J.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(J.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(X.x,X.y,X.width,X.height),G===0&&(E.matrix.copy(B.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),R===!0&&E.cameras.push(B)}}for(let dt=0;dt<y.length;dt++){const R=_[dt],G=y[dt];R!==null&&G!==void 0&&G.update(R,rt,l||o)}Q&&Q(W,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),m=null}const nt=new Yo;nt.setAnimationLoop(at),this.setAnimationLoop=function(W){Q=W},this.dispose=function(){}}}function Up(s,t){function e(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function i(d,u){u.color.getRGB(d.fogColor.value,Ho(s)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function n(d,u,y,_,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(d,u):u.isMeshToonMaterial?(a(d,u),f(d,u)):u.isMeshPhongMaterial?(a(d,u),h(d,u)):u.isMeshStandardMaterial?(a(d,u),p(d,u),u.isMeshPhysicalMaterial&&g(d,u,M)):u.isMeshMatcapMaterial?(a(d,u),m(d,u)):u.isMeshDepthMaterial?a(d,u):u.isMeshDistanceMaterial?(a(d,u),v(d,u)):u.isMeshNormalMaterial?a(d,u):u.isLineBasicMaterial?(o(d,u),u.isLineDashedMaterial&&r(d,u)):u.isPointsMaterial?c(d,u,y,_):u.isSpriteMaterial?l(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,e(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===Re&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,e(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===Re&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,e(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,e(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);const y=t.get(u).envMap;if(y&&(d.envMap.value=y,d.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap){d.lightMap.value=u.lightMap;const _=s._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=u.lightMapIntensity*_,e(u.lightMap,d.lightMapTransform)}u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,d.aoMapTransform))}function o(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform))}function r(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function c(d,u,y,_){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*y,d.scale.value=_*.5,u.map&&(d.map.value=u.map,e(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function l(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function h(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function f(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function p(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,d.roughnessMapTransform)),t.get(u).envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function g(d,u,y){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Re&&d.clearcoatNormalScale.value.negate())),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,d.specularIntensityMapTransform))}function m(d,u){u.matcap&&(d.matcap.value=u.matcap)}function v(d,u){const y=t.get(u).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function zp(s,t,e,i){let n={},a={},o=[];const r=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,_){const M=_.program;i.uniformBlockBinding(y,M)}function l(y,_){let M=n[y.id];M===void 0&&(m(y),M=h(y),n[y.id]=M,y.addEventListener("dispose",d));const T=_.program;i.updateUBOMapping(y,T);const S=t.render.frame;a[y.id]!==S&&(p(y),a[y.id]=S)}function h(y){const _=f();y.__bindingPointIndex=_;const M=s.createBuffer(),T=y.__size,S=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,T,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,M),M}function f(){for(let y=0;y<r;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const _=n[y.id],M=y.uniforms,T=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let S=0,A=M.length;S<A;S++){const O=Array.isArray(M[S])?M[S]:[M[S]];for(let E=0,b=O.length;E<b;E++){const z=O[E];if(g(z,S,E,T)===!0){const k=z.__offset,K=Array.isArray(z.value)?z.value:[z.value];let w=0;for(let I=0;I<K.length;I++){const U=K[I],$=v(U);typeof U=="number"||typeof U=="boolean"?(z.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,k+w,z.__data)):U.isMatrix3?(z.__data[0]=U.elements[0],z.__data[1]=U.elements[1],z.__data[2]=U.elements[2],z.__data[3]=0,z.__data[4]=U.elements[3],z.__data[5]=U.elements[4],z.__data[6]=U.elements[5],z.__data[7]=0,z.__data[8]=U.elements[6],z.__data[9]=U.elements[7],z.__data[10]=U.elements[8],z.__data[11]=0):(U.toArray(z.__data,w),w+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(y,_,M,T){const S=y.value,A=_+"_"+M;if(T[A]===void 0)return typeof S=="number"||typeof S=="boolean"?T[A]=S:T[A]=S.clone(),!0;{const O=T[A];if(typeof S=="number"||typeof S=="boolean"){if(O!==S)return T[A]=S,!0}else if(O.equals(S)===!1)return O.copy(S),!0}return!1}function m(y){const _=y.uniforms;let M=0;const T=16;for(let A=0,O=_.length;A<O;A++){const E=Array.isArray(_[A])?_[A]:[_[A]];for(let b=0,z=E.length;b<z;b++){const k=E[b],K=Array.isArray(k.value)?k.value:[k.value];for(let w=0,I=K.length;w<I;w++){const U=K[w],$=v(U),H=M%T;H!==0&&T-H<$.boundary&&(M+=T-H),k.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=$.storage}}}const S=M%T;return S>0&&(M+=T-S),y.__size=M,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function d(y){const _=y.target;_.removeEventListener("dispose",d);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(n[_.id]),delete n[_.id],delete a[_.id]}function u(){for(const y in n)s.deleteBuffer(n[y]);o=[],n={},a={}}return{bind:c,update:l,dispose:u}}class Qo{constructor(t={}){const{canvas:e=Ic(),context:i=null,depth:n=!0,stencil:a=!0,alpha:o=!1,antialias:r=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const g=new Uint32Array(4),m=new Int32Array(4);let v=null,d=null;const u=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this._useLegacyLights=!1,this.toneMapping=gi,this.toneMappingExposure=1;const _=this;let M=!1,T=0,S=0,A=null,O=-1,E=null;const b=new me,z=new me;let k=null;const K=new Jt(0);let w=0,I=e.width,U=e.height,$=1,H=null,q=null;const Q=new me(0,0,I,U),at=new me(0,0,I,U);let nt=!1;const W=new Ca;let rt=!1,dt=!1,R=null;const G=new he,J=new Bt,X=new j,B={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ct(){return A===null?$:1}let F=i;function zt(C,Z){for(let it=0;it<C.length;it++){const st=C[it],tt=e.getContext(st,Z);if(tt!==null)return tt}return null}try{const C={alpha:!0,depth:n,stencil:a,antialias:r,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ta}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",_t,!1),F===null){const Z=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&Z.shift(),F=zt(Z,C),F===null)throw zt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let mt,yt,ft,Lt,Tt,P,x,V,ot,et,lt,gt,ut,Mt,At,wt,ht,Ht,Ot,It,Ct,St,L,vt;function Dt(){mt=new Xu(F),yt=new Bu(F,mt,t),mt.init(yt),St=new Ip(F,mt,yt),ft=new Rp(F,mt,yt),Lt=new qu(F),Tt=new gp,P=new Lp(F,mt,ft,Tt,yt,St,Lt),x=new Hu(_),V=new Yu(_),ot=new nh(F,yt),L=new Fu(F,mt,ot,yt),et=new $u(F,ot,Lt,L),lt=new Qu(F,et,ot,Lt),Ot=new Ju(F,yt,P),wt=new ku(Tt),gt=new mp(_,x,V,mt,yt,L,wt),ut=new Up(_,Tt),Mt=new _p,At=new Sp(mt,yt),Ht=new zu(_,x,V,ft,lt,p,c),ht=new wp(_,lt,yt),vt=new zp(F,Lt,yt,ft),It=new Gu(F,mt,Lt,yt),Ct=new Ku(F,mt,Lt,yt),Lt.programs=gt.programs,_.capabilities=yt,_.extensions=mt,_.properties=Tt,_.renderLists=Mt,_.shadowMap=ht,_.state=ft,_.info=Lt}Dt();const Pt=new Np(_,F);this.xr=Pt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=mt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=mt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(C){C!==void 0&&($=C,this.setSize(I,U,!1))},this.getSize=function(C){return C.set(I,U)},this.setSize=function(C,Z,it=!0){if(Pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,U=Z,e.width=Math.floor(C*$),e.height=Math.floor(Z*$),it===!0&&(e.style.width=C+"px",e.style.height=Z+"px"),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(I*$,U*$).floor()},this.setDrawingBufferSize=function(C,Z,it){I=C,U=Z,$=it,e.width=Math.floor(C*it),e.height=Math.floor(Z*it),this.setViewport(0,0,C,Z)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(Q)},this.setViewport=function(C,Z,it,st){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,Z,it,st),ft.viewport(b.copy(Q).multiplyScalar($).floor())},this.getScissor=function(C){return C.copy(at)},this.setScissor=function(C,Z,it,st){C.isVector4?at.set(C.x,C.y,C.z,C.w):at.set(C,Z,it,st),ft.scissor(z.copy(at).multiplyScalar($).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(C){ft.setScissorTest(nt=C)},this.setOpaqueSort=function(C){H=C},this.setTransparentSort=function(C){q=C},this.getClearColor=function(C){return C.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(C=!0,Z=!0,it=!0){let st=0;if(C){let tt=!1;if(A!==null){const bt=A.texture.format;tt=bt===Ro||bt===wo||bt===Co}if(tt){const bt=A.texture.type,Nt=bt===vi||bt===fi||bt===xa||bt===wi||bt===bo||bt===Po,Gt=Ht.getClearColor(),kt=Ht.getClearAlpha(),Xt=Gt.r,Vt=Gt.g,Wt=Gt.b;Nt?(g[0]=Xt,g[1]=Vt,g[2]=Wt,g[3]=kt,F.clearBufferuiv(F.COLOR,0,g)):(m[0]=Xt,m[1]=Vt,m[2]=Wt,m[3]=kt,F.clearBufferiv(F.COLOR,0,m))}else st|=F.COLOR_BUFFER_BIT}Z&&(st|=F.DEPTH_BUFFER_BIT),it&&(st|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Mt.dispose(),At.dispose(),Tt.dispose(),x.dispose(),V.dispose(),lt.dispose(),L.dispose(),vt.dispose(),gt.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",re),Pt.removeEventListener("sessionend",Zt),R&&(R.dispose(),R=null),le.stop()};function pt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const C=Lt.autoReset,Z=ht.enabled,it=ht.autoUpdate,st=ht.needsUpdate,tt=ht.type;Dt(),Lt.autoReset=C,ht.enabled=Z,ht.autoUpdate=it,ht.needsUpdate=st,ht.type=tt}function _t(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function xt(C){const Z=C.target;Z.removeEventListener("dispose",xt),Ft(Z)}function Ft(C){Ut(C),Tt.remove(C)}function Ut(C){const Z=Tt.get(C).programs;Z!==void 0&&(Z.forEach(function(it){gt.releaseProgram(it)}),C.isShaderMaterial&&gt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,it,st,tt,bt){Z===null&&(Z=B);const Nt=tt.isMesh&&tt.matrixWorld.determinant()<0,Gt=ol(C,Z,it,st,tt);ft.setMaterial(st,Nt);let kt=it.index,Xt=1;if(st.wireframe===!0){if(kt=et.getWireframeAttribute(it),kt===void 0)return;Xt=2}const Vt=it.drawRange,Wt=it.attributes.position;let oe=Vt.start*Xt,Le=(Vt.start+Vt.count)*Xt;bt!==null&&(oe=Math.max(oe,bt.start*Xt),Le=Math.min(Le,(bt.start+bt.count)*Xt)),kt!==null?(oe=Math.max(oe,0),Le=Math.min(Le,kt.count)):Wt!=null&&(oe=Math.max(oe,0),Le=Math.min(Le,Wt.count));const fe=Le-oe;if(fe<0||fe===1/0)return;L.setup(tt,st,Gt,it,kt);let je,ne=It;if(kt!==null&&(je=ot.get(kt),ne=Ct,ne.setIndex(je)),tt.isMesh)st.wireframe===!0?(ft.setLineWidth(st.wireframeLinewidth*ct()),ne.setMode(F.LINES)):ne.setMode(F.TRIANGLES);else if(tt.isLine){let $t=st.linewidth;$t===void 0&&($t=1),ft.setLineWidth($t*ct()),tt.isLineSegments?ne.setMode(F.LINES):tt.isLineLoop?ne.setMode(F.LINE_LOOP):ne.setMode(F.LINE_STRIP)}else tt.isPoints?ne.setMode(F.POINTS):tt.isSprite&&ne.setMode(F.TRIANGLES);if(tt.isBatchedMesh)ne.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else if(tt.isInstancedMesh)ne.renderInstances(oe,fe,tt.count);else if(it.isInstancedBufferGeometry){const $t=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Es=Math.min(it.instanceCount,$t);ne.renderInstances(oe,fe,Es)}else ne.render(oe,fe)};function qt(C,Z,it){C.transparent===!0&&C.side===ni&&C.forceSinglePass===!1?(C.side=Re,C.needsUpdate=!0,In(C,Z,it),C.side=_i,C.needsUpdate=!0,In(C,Z,it),C.side=ni):In(C,Z,it)}this.compile=function(C,Z,it=null){it===null&&(it=C),d=At.get(it),d.init(),y.push(d),it.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Z.layers)&&(d.pushLight(tt),tt.castShadow&&d.pushShadow(tt))}),C!==it&&C.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Z.layers)&&(d.pushLight(tt),tt.castShadow&&d.pushShadow(tt))}),d.setupLights(_._useLegacyLights);const st=new Set;return C.traverse(function(tt){const bt=tt.material;if(bt)if(Array.isArray(bt))for(let Nt=0;Nt<bt.length;Nt++){const Gt=bt[Nt];qt(Gt,it,tt),st.add(Gt)}else qt(bt,it,tt),st.add(bt)}),y.pop(),d=null,st},this.compileAsync=function(C,Z,it=null){const st=this.compile(C,Z,it);return new Promise(tt=>{function bt(){if(st.forEach(function(Nt){Tt.get(Nt).currentProgram.isReady()&&st.delete(Nt)}),st.size===0){tt(C);return}setTimeout(bt,10)}mt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let jt=null;function se(C){jt&&jt(C)}function re(){le.stop()}function Zt(){le.start()}const le=new Yo;le.setAnimationLoop(se),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(C){jt=C,Pt.setAnimationLoop(C),C===null?le.stop():le.start()},Pt.addEventListener("sessionstart",re),Pt.addEventListener("sessionend",Zt),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(Z),Z=Pt.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,Z,A),d=At.get(C,y.length),d.init(),y.push(d),G.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),W.setFromProjectionMatrix(G),dt=this.localClippingEnabled,rt=wt.init(this.clippingPlanes,dt),v=Mt.get(C,u.length),v.init(),u.push(v),Xe(C,Z,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(H,q),this.info.render.frame++,rt===!0&&wt.beginShadows();const it=d.state.shadowsArray;if(ht.render(it,C,Z),rt===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ht.render(v,C),d.setupLights(_._useLegacyLights),Z.isArrayCamera){const st=Z.cameras;for(let tt=0,bt=st.length;tt<bt;tt++){const Nt=st[tt];Oa(v,C,Nt,Nt.viewport)}}else Oa(v,C,Z);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(_,C,Z),L.resetDefaultState(),O=-1,E=null,y.pop(),y.length>0?d=y[y.length-1]:d=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function Xe(C,Z,it,st){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)it=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||W.intersectsSprite(C)){st&&X.setFromMatrixPosition(C.matrixWorld).applyMatrix4(G);const Nt=lt.update(C),Gt=C.material;Gt.visible&&v.push(C,Nt,Gt,it,X.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||W.intersectsObject(C))){const Nt=lt.update(C),Gt=C.material;if(st&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),X.copy(C.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),X.copy(Nt.boundingSphere.center)),X.applyMatrix4(C.matrixWorld).applyMatrix4(G)),Array.isArray(Gt)){const kt=Nt.groups;for(let Xt=0,Vt=kt.length;Xt<Vt;Xt++){const Wt=kt[Xt],oe=Gt[Wt.materialIndex];oe&&oe.visible&&v.push(C,Nt,oe,it,X.z,Wt)}}else Gt.visible&&v.push(C,Nt,Gt,it,X.z,null)}}const bt=C.children;for(let Nt=0,Gt=bt.length;Nt<Gt;Nt++)Xe(bt[Nt],Z,it,st)}function Oa(C,Z,it,st){const tt=C.opaque,bt=C.transmissive,Nt=C.transparent;d.setupLightsView(it),rt===!0&&wt.setGlobalState(_.clippingPlanes,it),bt.length>0&&rl(tt,bt,Z,it),st&&ft.viewport(b.copy(st)),tt.length>0&&Ln(tt,Z,it),bt.length>0&&Ln(bt,Z,it),Nt.length>0&&Ln(Nt,Z,it),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function rl(C,Z,it,st){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;const bt=yt.isWebGL2;R===null&&(R=new Ii(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")?bn:vi,minFilter:An,samples:bt?4:0})),_.getDrawingBufferSize(J),bt?R.setSize(J.x,J.y):R.setSize(ga(J.x),ga(J.y));const Nt=_.getRenderTarget();_.setRenderTarget(R),_.getClearColor(K),w=_.getClearAlpha(),w<1&&_.setClearColor(16777215,.5),_.clear();const Gt=_.toneMapping;_.toneMapping=gi,Ln(C,it,st),P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R);let kt=!1;for(let Xt=0,Vt=Z.length;Xt<Vt;Xt++){const Wt=Z[Xt],oe=Wt.object,Le=Wt.geometry,fe=Wt.material,je=Wt.group;if(fe.side===ni&&oe.layers.test(st.layers)){const ne=fe.side;fe.side=Re,fe.needsUpdate=!0,Na(oe,it,st,Le,fe,je),fe.side=ne,fe.needsUpdate=!0,kt=!0}}kt===!0&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),_.setRenderTarget(Nt),_.setClearColor(K,w),_.toneMapping=Gt}function Ln(C,Z,it){const st=Z.isScene===!0?Z.overrideMaterial:null;for(let tt=0,bt=C.length;tt<bt;tt++){const Nt=C[tt],Gt=Nt.object,kt=Nt.geometry,Xt=st===null?Nt.material:st,Vt=Nt.group;Gt.layers.test(it.layers)&&Na(Gt,Z,it,kt,Xt,Vt)}}function Na(C,Z,it,st,tt,bt){C.onBeforeRender(_,Z,it,st,tt,bt),C.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),tt.onBeforeRender(_,Z,it,st,C,bt),tt.transparent===!0&&tt.side===ni&&tt.forceSinglePass===!1?(tt.side=Re,tt.needsUpdate=!0,_.renderBufferDirect(it,Z,st,tt,C,bt),tt.side=_i,tt.needsUpdate=!0,_.renderBufferDirect(it,Z,st,tt,C,bt),tt.side=ni):_.renderBufferDirect(it,Z,st,tt,C,bt),C.onAfterRender(_,Z,it,st,tt,bt)}function In(C,Z,it){Z.isScene!==!0&&(Z=B);const st=Tt.get(C),tt=d.state.lights,bt=d.state.shadowsArray,Nt=tt.state.version,Gt=gt.getParameters(C,tt.state,bt,Z,it),kt=gt.getProgramCacheKey(Gt);let Xt=st.programs;st.environment=C.isMeshStandardMaterial?Z.environment:null,st.fog=Z.fog,st.envMap=(C.isMeshStandardMaterial?V:x).get(C.envMap||st.environment),Xt===void 0&&(C.addEventListener("dispose",xt),Xt=new Map,st.programs=Xt);let Vt=Xt.get(kt);if(Vt!==void 0){if(st.currentProgram===Vt&&st.lightsStateVersion===Nt)return za(C,Gt),Vt}else Gt.uniforms=gt.getUniforms(C),C.onBuild(it,Gt,_),C.onBeforeCompile(Gt,_),Vt=gt.acquireProgram(Gt,kt),Xt.set(kt,Vt),st.uniforms=Gt.uniforms;const Wt=st.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Wt.clippingPlanes=wt.uniform),za(C,Gt),st.needsLights=cl(C),st.lightsStateVersion=Nt,st.needsLights&&(Wt.ambientLightColor.value=tt.state.ambient,Wt.lightProbe.value=tt.state.probe,Wt.directionalLights.value=tt.state.directional,Wt.directionalLightShadows.value=tt.state.directionalShadow,Wt.spotLights.value=tt.state.spot,Wt.spotLightShadows.value=tt.state.spotShadow,Wt.rectAreaLights.value=tt.state.rectArea,Wt.ltc_1.value=tt.state.rectAreaLTC1,Wt.ltc_2.value=tt.state.rectAreaLTC2,Wt.pointLights.value=tt.state.point,Wt.pointLightShadows.value=tt.state.pointShadow,Wt.hemisphereLights.value=tt.state.hemi,Wt.directionalShadowMap.value=tt.state.directionalShadowMap,Wt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Wt.spotShadowMap.value=tt.state.spotShadowMap,Wt.spotLightMatrix.value=tt.state.spotLightMatrix,Wt.spotLightMap.value=tt.state.spotLightMap,Wt.pointShadowMap.value=tt.state.pointShadowMap,Wt.pointShadowMatrix.value=tt.state.pointShadowMatrix),st.currentProgram=Vt,st.uniformsList=null,Vt}function Ua(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=as.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function za(C,Z){const it=Tt.get(C);it.outputColorSpace=Z.outputColorSpace,it.batching=Z.batching,it.instancing=Z.instancing,it.instancingColor=Z.instancingColor,it.skinning=Z.skinning,it.morphTargets=Z.morphTargets,it.morphNormals=Z.morphNormals,it.morphColors=Z.morphColors,it.morphTargetsCount=Z.morphTargetsCount,it.numClippingPlanes=Z.numClippingPlanes,it.numIntersection=Z.numClipIntersection,it.vertexAlphas=Z.vertexAlphas,it.vertexTangents=Z.vertexTangents,it.toneMapping=Z.toneMapping}function ol(C,Z,it,st,tt){Z.isScene!==!0&&(Z=B),P.resetTextureUnits();const bt=Z.fog,Nt=st.isMeshStandardMaterial?Z.environment:null,Gt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ai,kt=(st.isMeshStandardMaterial?V:x).get(st.envMap||Nt),Xt=st.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Vt=!!it.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Wt=!!it.morphAttributes.position,oe=!!it.morphAttributes.normal,Le=!!it.morphAttributes.color;let fe=gi;st.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(fe=_.toneMapping);const je=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ne=je!==void 0?je.length:0,$t=Tt.get(st),Es=d.state.lights;if(rt===!0&&(dt===!0||C!==E)){const Ne=C===E&&st.id===O;wt.setState(st,C,Ne)}let ae=!1;st.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Es.state.version||$t.outputColorSpace!==Gt||tt.isBatchedMesh&&$t.batching===!1||!tt.isBatchedMesh&&$t.batching===!0||tt.isInstancedMesh&&$t.instancing===!1||!tt.isInstancedMesh&&$t.instancing===!0||tt.isSkinnedMesh&&$t.skinning===!1||!tt.isSkinnedMesh&&$t.skinning===!0||tt.isInstancedMesh&&$t.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&$t.instancingColor===!1&&tt.instanceColor!==null||$t.envMap!==kt||st.fog===!0&&$t.fog!==bt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==wt.numPlanes||$t.numIntersection!==wt.numIntersection)||$t.vertexAlphas!==Xt||$t.vertexTangents!==Vt||$t.morphTargets!==Wt||$t.morphNormals!==oe||$t.morphColors!==Le||$t.toneMapping!==fe||yt.isWebGL2===!0&&$t.morphTargetsCount!==ne)&&(ae=!0):(ae=!0,$t.__version=st.version);let yi=$t.currentProgram;ae===!0&&(yi=In(st,Z,tt));let Fa=!1,pn=!1,xs=!1;const ve=yi.getUniforms(),Mi=$t.uniforms;if(ft.useProgram(yi.program)&&(Fa=!0,pn=!0,xs=!0),st.id!==O&&(O=st.id,pn=!0),Fa||E!==C){ve.setValue(F,"projectionMatrix",C.projectionMatrix),ve.setValue(F,"viewMatrix",C.matrixWorldInverse);const Ne=ve.map.cameraPosition;Ne!==void 0&&Ne.setValue(F,X.setFromMatrixPosition(C.matrixWorld)),yt.logarithmicDepthBuffer&&ve.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&ve.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,pn=!0,xs=!0)}if(tt.isSkinnedMesh){ve.setOptional(F,tt,"bindMatrix"),ve.setOptional(F,tt,"bindMatrixInverse");const Ne=tt.skeleton;Ne&&(yt.floatVertexTextures?(Ne.boneTexture===null&&Ne.computeBoneTexture(),ve.setValue(F,"boneTexture",Ne.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}tt.isBatchedMesh&&(ve.setOptional(F,tt,"batchingTexture"),ve.setValue(F,"batchingTexture",tt._matricesTexture,P));const Ss=it.morphAttributes;if((Ss.position!==void 0||Ss.normal!==void 0||Ss.color!==void 0&&yt.isWebGL2===!0)&&Ot.update(tt,it,yi),(pn||$t.receiveShadow!==tt.receiveShadow)&&($t.receiveShadow=tt.receiveShadow,ve.setValue(F,"receiveShadow",tt.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Mi.envMap.value=kt,Mi.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),pn&&(ve.setValue(F,"toneMappingExposure",_.toneMappingExposure),$t.needsLights&&ll(Mi,xs),bt&&st.fog===!0&&ut.refreshFogUniforms(Mi,bt),ut.refreshMaterialUniforms(Mi,st,$,U,R),as.upload(F,Ua($t),Mi,P)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(as.upload(F,Ua($t),Mi,P),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&ve.setValue(F,"center",tt.center),ve.setValue(F,"modelViewMatrix",tt.modelViewMatrix),ve.setValue(F,"normalMatrix",tt.normalMatrix),ve.setValue(F,"modelMatrix",tt.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Ne=st.uniformsGroups;for(let As=0,hl=Ne.length;As<hl;As++)if(yt.isWebGL2){const Ga=Ne[As];vt.update(Ga,yi),vt.bind(Ga,yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yi}function ll(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function cl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,Z,it){Tt.get(C.texture).__webglTexture=Z,Tt.get(C.depthTexture).__webglTexture=it;const st=Tt.get(C);st.__hasExternalTextures=!0,st.__hasExternalTextures&&(st.__autoAllocateDepthBuffer=it===void 0,st.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,Z){const it=Tt.get(C);it.__webglFramebuffer=Z,it.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(C,Z=0,it=0){A=C,T=Z,S=it;let st=!0,tt=null,bt=!1,Nt=!1;if(C){const kt=Tt.get(C);kt.__useDefaultFramebuffer!==void 0?(ft.bindFramebuffer(F.FRAMEBUFFER,null),st=!1):kt.__webglFramebuffer===void 0?P.setupRenderTarget(C):kt.__hasExternalTextures&&P.rebindTextures(C,Tt.get(C.texture).__webglTexture,Tt.get(C.depthTexture).__webglTexture);const Xt=C.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Nt=!0);const Vt=Tt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Vt[Z])?tt=Vt[Z][it]:tt=Vt[Z],bt=!0):yt.isWebGL2&&C.samples>0&&P.useMultisampledRTT(C)===!1?tt=Tt.get(C).__webglMultisampledFramebuffer:Array.isArray(Vt)?tt=Vt[it]:tt=Vt,b.copy(C.viewport),z.copy(C.scissor),k=C.scissorTest}else b.copy(Q).multiplyScalar($).floor(),z.copy(at).multiplyScalar($).floor(),k=nt;if(ft.bindFramebuffer(F.FRAMEBUFFER,tt)&&yt.drawBuffers&&st&&ft.drawBuffers(C,tt),ft.viewport(b),ft.scissor(z),ft.setScissorTest(k),bt){const kt=Tt.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Z,kt.__webglTexture,it)}else if(Nt){const kt=Tt.get(C.texture),Xt=Z||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.__webglTexture,it||0,Xt)}O=-1},this.readRenderTargetPixels=function(C,Z,it,st,tt,bt,Nt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=Tt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Nt!==void 0&&(Gt=Gt[Nt]),Gt){ft.bindFramebuffer(F.FRAMEBUFFER,Gt);try{const kt=C.texture,Xt=kt.format,Vt=kt.type;if(Xt!==Ye&&St.convert(Xt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Wt=Vt===bn&&(mt.has("EXT_color_buffer_half_float")||yt.isWebGL2&&mt.has("EXT_color_buffer_float"));if(Vt!==vi&&St.convert(Vt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===pi&&(yt.isWebGL2||mt.has("OES_texture_float")||mt.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-st&&it>=0&&it<=C.height-tt&&F.readPixels(Z,it,st,tt,St.convert(Xt),St.convert(Vt),bt)}finally{const kt=A!==null?Tt.get(A).__webglFramebuffer:null;ft.bindFramebuffer(F.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(C,Z,it=0){const st=Math.pow(2,-it),tt=Math.floor(Z.image.width*st),bt=Math.floor(Z.image.height*st);P.setTexture2D(Z,0),F.copyTexSubImage2D(F.TEXTURE_2D,it,0,0,C.x,C.y,tt,bt),ft.unbindTexture()},this.copyTextureToTexture=function(C,Z,it,st=0){const tt=Z.image.width,bt=Z.image.height,Nt=St.convert(it.format),Gt=St.convert(it.type);P.setTexture2D(it,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,it.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,it.unpackAlignment),Z.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,st,C.x,C.y,tt,bt,Nt,Gt,Z.image.data):Z.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,st,C.x,C.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Nt,Z.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,st,C.x,C.y,Nt,Gt,Z.image),st===0&&it.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(C,Z,it,st,tt=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const bt=C.max.x-C.min.x+1,Nt=C.max.y-C.min.y+1,Gt=C.max.z-C.min.z+1,kt=St.convert(st.format),Xt=St.convert(st.type);let Vt;if(st.isData3DTexture)P.setTexture3D(st,0),Vt=F.TEXTURE_3D;else if(st.isDataArrayTexture||st.isCompressedArrayTexture)P.setTexture2DArray(st,0),Vt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,st.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,st.unpackAlignment);const Wt=F.getParameter(F.UNPACK_ROW_LENGTH),oe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Le=F.getParameter(F.UNPACK_SKIP_PIXELS),fe=F.getParameter(F.UNPACK_SKIP_ROWS),je=F.getParameter(F.UNPACK_SKIP_IMAGES),ne=it.isCompressedTexture?it.mipmaps[tt]:it.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ne.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ne.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,C.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,C.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,C.min.z),it.isDataTexture||it.isData3DTexture?F.texSubImage3D(Vt,tt,Z.x,Z.y,Z.z,bt,Nt,Gt,kt,Xt,ne.data):it.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Vt,tt,Z.x,Z.y,Z.z,bt,Nt,Gt,kt,ne.data)):F.texSubImage3D(Vt,tt,Z.x,Z.y,Z.z,bt,Nt,Gt,kt,Xt,ne),F.pixelStorei(F.UNPACK_ROW_LENGTH,Wt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,oe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Le),F.pixelStorei(F.UNPACK_SKIP_ROWS,fe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,je),tt===0&&st.generateMipmaps&&F.generateMipmap(Vt),ft.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),ft.unbindTexture()},this.resetState=function(){T=0,S=0,A=null,ft.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Sa?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===_s?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ge?Li:Io}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Li?ge:ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Fp extends Qo{}Fp.prototype.isWebGL1Renderer=!0;class Gp extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class ps extends qe{constructor(t=1,e=1,i=1,n=32,a=1,o=!1,r=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:a,openEnded:o,thetaStart:r,thetaLength:c};const l=this;n=Math.floor(n),a=Math.floor(a);const h=[],f=[],p=[],g=[];let m=0;const v=[],d=i/2;let u=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ee(f,3)),this.setAttribute("normal",new Ee(p,3)),this.setAttribute("uv",new Ee(g,2));function y(){const M=new j,T=new j;let S=0;const A=(e-t)/i;for(let O=0;O<=a;O++){const E=[],b=O/a,z=b*(e-t)+t;for(let k=0;k<=n;k++){const K=k/n,w=K*c+r,I=Math.sin(w),U=Math.cos(w);T.x=z*I,T.y=-b*i+d,T.z=z*U,f.push(T.x,T.y,T.z),M.set(I,A,U).normalize(),p.push(M.x,M.y,M.z),g.push(K,1-b),E.push(m++)}v.push(E)}for(let O=0;O<n;O++)for(let E=0;E<a;E++){const b=v[E][O],z=v[E+1][O],k=v[E+1][O+1],K=v[E][O+1];h.push(b,z,K),h.push(z,k,K),S+=6}l.addGroup(u,S,0),u+=S}function _(M){const T=m,S=new Bt,A=new j;let O=0;const E=M===!0?t:e,b=M===!0?1:-1;for(let k=1;k<=n;k++)f.push(0,d*b,0),p.push(0,b,0),g.push(.5,.5),m++;const z=m;for(let k=0;k<=n;k++){const w=k/n*c+r,I=Math.cos(w),U=Math.sin(w);A.x=E*U,A.y=d*b,A.z=E*I,f.push(A.x,A.y,A.z),p.push(0,b,0),S.x=I*.5+.5,S.y=U*.5*b+.5,g.push(S.x,S.y),m++}for(let k=0;k<n;k++){const K=T+k,w=z+k;M===!0?h.push(w,w+1,K):h.push(w+1,w,K),O+=3}l.addGroup(u,O,M===!0?1:2),u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ts extends qe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const a=[],o=[];r(n),l(i),h(),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(a.slice(),3)),this.setAttribute("uv",new Ee(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function r(y){const _=new j,M=new j,T=new j;for(let S=0;S<e.length;S+=3)g(e[S+0],_),g(e[S+1],M),g(e[S+2],T),c(_,M,T,y)}function c(y,_,M,T){const S=T+1,A=[];for(let O=0;O<=S;O++){A[O]=[];const E=y.clone().lerp(M,O/S),b=_.clone().lerp(M,O/S),z=S-O;for(let k=0;k<=z;k++)k===0&&O===S?A[O][k]=E:A[O][k]=E.clone().lerp(b,k/z)}for(let O=0;O<S;O++)for(let E=0;E<2*(S-O)-1;E++){const b=Math.floor(E/2);E%2===0?(p(A[O][b+1]),p(A[O+1][b]),p(A[O][b])):(p(A[O][b+1]),p(A[O+1][b+1]),p(A[O+1][b]))}}function l(y){const _=new j;for(let M=0;M<a.length;M+=3)_.x=a[M+0],_.y=a[M+1],_.z=a[M+2],_.normalize().multiplyScalar(y),a[M+0]=_.x,a[M+1]=_.y,a[M+2]=_.z}function h(){const y=new j;for(let _=0;_<a.length;_+=3){y.x=a[_+0],y.y=a[_+1],y.z=a[_+2];const M=d(y)/2/Math.PI+.5,T=u(y)/Math.PI+.5;o.push(M,1-T)}m(),f()}function f(){for(let y=0;y<o.length;y+=6){const _=o[y+0],M=o[y+2],T=o[y+4],S=Math.max(_,M,T),A=Math.min(_,M,T);S>.9&&A<.1&&(_<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),T<.2&&(o[y+4]+=1))}}function p(y){a.push(y.x,y.y,y.z)}function g(y,_){const M=y*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function m(){const y=new j,_=new j,M=new j,T=new j,S=new Bt,A=new Bt,O=new Bt;for(let E=0,b=0;E<a.length;E+=9,b+=6){y.set(a[E+0],a[E+1],a[E+2]),_.set(a[E+3],a[E+4],a[E+5]),M.set(a[E+6],a[E+7],a[E+8]),S.set(o[b+0],o[b+1]),A.set(o[b+2],o[b+3]),O.set(o[b+4],o[b+5]),T.copy(y).add(_).add(M).divideScalar(3);const z=d(T);v(S,b+0,y,z),v(A,b+2,_,z),v(O,b+4,M,z)}}function v(y,_,M,T){T<0&&y.x===1&&(o[_]=y.x-1),M.x===0&&M.z===0&&(o[_]=T/2/Math.PI+.5)}function d(y){return Math.atan2(y.z,-y.x)}function u(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.vertices,t.indices,t.radius,t.details)}}class La extends Ts{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new La(t.radius,t.detail)}}class Ia extends Ts{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ia(t.radius,t.detail)}}class xn extends qe{constructor(t=1,e=32,i=16,n=0,a=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:a,thetaStart:o,thetaLength:r},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+r,Math.PI);let l=0;const h=[],f=new j,p=new j,g=[],m=[],v=[],d=[];for(let u=0;u<=i;u++){const y=[],_=u/i;let M=0;u===0&&o===0?M=.5/e:u===i&&c===Math.PI&&(M=-.5/e);for(let T=0;T<=e;T++){const S=T/e;f.x=-t*Math.cos(n+S*a)*Math.sin(o+_*r),f.y=t*Math.cos(o+_*r),f.z=t*Math.sin(n+S*a)*Math.sin(o+_*r),m.push(f.x,f.y,f.z),p.copy(f).normalize(),v.push(p.x,p.y,p.z),d.push(S+M,1-_),y.push(l++)}h.push(y)}for(let u=0;u<i;u++)for(let y=0;y<e;y++){const _=h[u][y+1],M=h[u][y],T=h[u+1][y],S=h[u+1][y+1];(u!==0||o>0)&&g.push(_,M,S),(u!==i-1||c<Math.PI)&&g.push(M,T,S)}this.setIndex(g),this.setAttribute("position",new Ee(m,3)),this.setAttribute("normal",new Ee(v,3)),this.setAttribute("uv",new Ee(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ie extends Rn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Jt(16777215),this.specular=new Jt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Do,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tl extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const na=new he,co=new j,ho=new j;class Bp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ca,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;co.setFromMatrixPosition(t.matrixWorld),e.position.copy(co),ho.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ho),e.updateMatrixWorld(),na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class kp extends Bp{constructor(){super(new Xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uo extends tl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new kp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fo extends tl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hp{constructor(t,e,i=0,n=1/0){this.ray=new ba(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return _a(t,this,i,e),i.sort(po),i}intersectObjects(t,e=!0,i=[]){for(let n=0,a=t.length;n<a;n++)_a(t[n],this,i,e);return i.sort(po),i}}function po(s,t){return s.distance-t.distance}function _a(s,t,e,i){if(s.layers.test(t.layers)&&s.raycast(t,e),i===!0){const n=s.children;for(let a=0,o=n.length;a<o;a++)_a(n[a],t,e,!0)}}class ya{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ta}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ta);const mo={type:"change"},sa={type:"start"},go={type:"end"},es=new ba,vo=new ui,Vp=Math.cos(70*Lc.DEG2RAD);class Wp extends Ni{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",At),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",At),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(mo),i.update(),a=n.NONE},this.update=function(){const L=new j,vt=new Di().setFromUnitVectors(t.up,new j(0,1,0)),Dt=vt.clone().invert(),Pt=new j,pt=new Di,N=new j,_t=2*Math.PI;return function(Ft=null){const Ut=i.object.position;L.copy(Ut).sub(i.target),L.applyQuaternion(vt),r.setFromVector3(L),i.autoRotate&&a===n.NONE&&k(b(Ft)),i.enableDamping?(r.theta+=c.theta*i.dampingFactor,r.phi+=c.phi*i.dampingFactor):(r.theta+=c.theta,r.phi+=c.phi);let qt=i.minAzimuthAngle,jt=i.maxAzimuthAngle;isFinite(qt)&&isFinite(jt)&&(qt<-Math.PI?qt+=_t:qt>Math.PI&&(qt-=_t),jt<-Math.PI?jt+=_t:jt>Math.PI&&(jt-=_t),qt<=jt?r.theta=Math.max(qt,Math.min(jt,r.theta)):r.theta=r.theta>(qt+jt)/2?Math.max(qt,r.theta):Math.min(jt,r.theta)),r.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,r.phi)),r.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&S||i.object.isOrthographicCamera?r.radius=Q(r.radius):r.radius=Q(r.radius*l),L.setFromSpherical(r),L.applyQuaternion(Dt),Ut.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let se=!1;if(i.zoomToCursor&&S){let re=null;if(i.object.isPerspectiveCamera){const Zt=L.length();re=Q(Zt*l);const le=Zt-re;i.object.position.addScaledVector(M,le),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Zt=new j(T.x,T.y,0);Zt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),se=!0;const le=new j(T.x,T.y,0);le.unproject(i.object),i.object.position.sub(le).add(Zt),i.object.updateMatrixWorld(),re=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;re!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(re).add(i.object.position):(es.origin.copy(i.object.position),es.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(es.direction))<Vp?t.lookAt(i.target):(vo.setFromNormalAndCoplanarPoint(i.object.up,i.target),es.intersectPlane(vo,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),se=!0);return l=1,S=!1,se||Pt.distanceToSquared(i.object.position)>o||8*(1-pt.dot(i.object.quaternion))>o||N.distanceToSquared(i.target)>0?(i.dispatchEvent(mo),Pt.copy(i.object.position),pt.copy(i.object.quaternion),N.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ht),i.domElement.removeEventListener("pointerdown",P),i.domElement.removeEventListener("pointercancel",V),i.domElement.removeEventListener("wheel",lt),i.domElement.removeEventListener("pointermove",x),i.domElement.removeEventListener("pointerup",V),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",At),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=n.NONE;const o=1e-6,r=new ya,c=new ya;let l=1;const h=new j,f=new Bt,p=new Bt,g=new Bt,m=new Bt,v=new Bt,d=new Bt,u=new Bt,y=new Bt,_=new Bt,M=new j,T=new Bt;let S=!1;const A=[],O={};let E=!1;function b(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function z(L){const vt=Math.abs(L*.01);return Math.pow(.95,i.zoomSpeed*vt)}function k(L){c.theta-=L}function K(L){c.phi-=L}const w=function(){const L=new j;return function(Dt,Pt){L.setFromMatrixColumn(Pt,0),L.multiplyScalar(-Dt),h.add(L)}}(),I=function(){const L=new j;return function(Dt,Pt){i.screenSpacePanning===!0?L.setFromMatrixColumn(Pt,1):(L.setFromMatrixColumn(Pt,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(Dt),h.add(L)}}(),U=function(){const L=new j;return function(Dt,Pt){const pt=i.domElement;if(i.object.isPerspectiveCamera){const N=i.object.position;L.copy(N).sub(i.target);let _t=L.length();_t*=Math.tan(i.object.fov/2*Math.PI/180),w(2*Dt*_t/pt.clientHeight,i.object.matrix),I(2*Pt*_t/pt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(w(Dt*(i.object.right-i.object.left)/i.object.zoom/pt.clientWidth,i.object.matrix),I(Pt*(i.object.top-i.object.bottom)/i.object.zoom/pt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function $(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(L,vt){if(!i.zoomToCursor)return;S=!0;const Dt=i.domElement.getBoundingClientRect(),Pt=L-Dt.left,pt=vt-Dt.top,N=Dt.width,_t=Dt.height;T.x=Pt/N*2-1,T.y=-(pt/_t)*2+1,M.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function Q(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function at(L){f.set(L.clientX,L.clientY)}function nt(L){q(L.clientX,L.clientX),u.set(L.clientX,L.clientY)}function W(L){m.set(L.clientX,L.clientY)}function rt(L){p.set(L.clientX,L.clientY),g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const vt=i.domElement;k(2*Math.PI*g.x/vt.clientHeight),K(2*Math.PI*g.y/vt.clientHeight),f.copy(p),i.update()}function dt(L){y.set(L.clientX,L.clientY),_.subVectors(y,u),_.y>0?$(z(_.y)):_.y<0&&H(z(_.y)),u.copy(y),i.update()}function R(L){v.set(L.clientX,L.clientY),d.subVectors(v,m).multiplyScalar(i.panSpeed),U(d.x,d.y),m.copy(v),i.update()}function G(L){q(L.clientX,L.clientY),L.deltaY<0?H(z(L.deltaY)):L.deltaY>0&&$(z(L.deltaY)),i.update()}function J(L){let vt=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?K(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,i.keyPanSpeed),vt=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?K(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,-i.keyPanSpeed),vt=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?k(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(i.keyPanSpeed,0),vt=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?k(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(-i.keyPanSpeed,0),vt=!0;break}vt&&(L.preventDefault(),i.update())}function X(L){if(A.length===1)f.set(L.pageX,L.pageY);else{const vt=St(L),Dt=.5*(L.pageX+vt.x),Pt=.5*(L.pageY+vt.y);f.set(Dt,Pt)}}function B(L){if(A.length===1)m.set(L.pageX,L.pageY);else{const vt=St(L),Dt=.5*(L.pageX+vt.x),Pt=.5*(L.pageY+vt.y);m.set(Dt,Pt)}}function ct(L){const vt=St(L),Dt=L.pageX-vt.x,Pt=L.pageY-vt.y,pt=Math.sqrt(Dt*Dt+Pt*Pt);u.set(0,pt)}function F(L){i.enableZoom&&ct(L),i.enablePan&&B(L)}function zt(L){i.enableZoom&&ct(L),i.enableRotate&&X(L)}function mt(L){if(A.length==1)p.set(L.pageX,L.pageY);else{const Dt=St(L),Pt=.5*(L.pageX+Dt.x),pt=.5*(L.pageY+Dt.y);p.set(Pt,pt)}g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const vt=i.domElement;k(2*Math.PI*g.x/vt.clientHeight),K(2*Math.PI*g.y/vt.clientHeight),f.copy(p)}function yt(L){if(A.length===1)v.set(L.pageX,L.pageY);else{const vt=St(L),Dt=.5*(L.pageX+vt.x),Pt=.5*(L.pageY+vt.y);v.set(Dt,Pt)}d.subVectors(v,m).multiplyScalar(i.panSpeed),U(d.x,d.y),m.copy(v)}function ft(L){const vt=St(L),Dt=L.pageX-vt.x,Pt=L.pageY-vt.y,pt=Math.sqrt(Dt*Dt+Pt*Pt);y.set(0,pt),_.set(0,Math.pow(y.y/u.y,i.zoomSpeed)),$(_.y),u.copy(y);const N=(L.pageX+vt.x)*.5,_t=(L.pageY+vt.y)*.5;q(N,_t)}function Lt(L){i.enableZoom&&ft(L),i.enablePan&&yt(L)}function Tt(L){i.enableZoom&&ft(L),i.enableRotate&&mt(L)}function P(L){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",x),i.domElement.addEventListener("pointerup",V)),Ot(L),L.pointerType==="touch"?wt(L):ot(L))}function x(L){i.enabled!==!1&&(L.pointerType==="touch"?ht(L):et(L))}function V(L){It(L),A.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",x),i.domElement.removeEventListener("pointerup",V)),i.dispatchEvent(go),a=n.NONE}function ot(L){let vt;switch(L.button){case 0:vt=i.mouseButtons.LEFT;break;case 1:vt=i.mouseButtons.MIDDLE;break;case 2:vt=i.mouseButtons.RIGHT;break;default:vt=-1}switch(vt){case zi.DOLLY:if(i.enableZoom===!1)return;nt(L),a=n.DOLLY;break;case zi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;W(L),a=n.PAN}else{if(i.enableRotate===!1)return;at(L),a=n.ROTATE}break;case zi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;at(L),a=n.ROTATE}else{if(i.enablePan===!1)return;W(L),a=n.PAN}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(sa)}function et(L){switch(a){case n.ROTATE:if(i.enableRotate===!1)return;rt(L);break;case n.DOLLY:if(i.enableZoom===!1)return;dt(L);break;case n.PAN:if(i.enablePan===!1)return;R(L);break}}function lt(L){i.enabled===!1||i.enableZoom===!1||a!==n.NONE||(L.preventDefault(),i.dispatchEvent(sa),G(gt(L)),i.dispatchEvent(go))}function gt(L){const vt=L.deltaMode,Dt={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(vt){case 1:Dt.deltaY*=16;break;case 2:Dt.deltaY*=100;break}return L.ctrlKey&&!E&&(Dt.deltaY*=10),Dt}function ut(L){L.key==="Control"&&(E=!0,document.addEventListener("keyup",Mt,{passive:!0,capture:!0}))}function Mt(L){L.key==="Control"&&(E=!1,document.removeEventListener("keyup",Mt,{passive:!0,capture:!0}))}function At(L){i.enabled===!1||i.enablePan===!1||J(L)}function wt(L){switch(Ct(L),A.length){case 1:switch(i.touches.ONE){case Fi.ROTATE:if(i.enableRotate===!1)return;X(L),a=n.TOUCH_ROTATE;break;case Fi.PAN:if(i.enablePan===!1)return;B(L),a=n.TOUCH_PAN;break;default:a=n.NONE}break;case 2:switch(i.touches.TWO){case Fi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;F(L),a=n.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;zt(L),a=n.TOUCH_DOLLY_ROTATE;break;default:a=n.NONE}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(sa)}function ht(L){switch(Ct(L),a){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;mt(L),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;yt(L),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Lt(L),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Tt(L),i.update();break;default:a=n.NONE}}function Ht(L){i.enabled!==!1&&L.preventDefault()}function Ot(L){A.push(L.pointerId)}function It(L){delete O[L.pointerId];for(let vt=0;vt<A.length;vt++)if(A[vt]==L.pointerId){A.splice(vt,1);return}}function Ct(L){let vt=O[L.pointerId];vt===void 0&&(vt=new Bt,O[L.pointerId]=vt),vt.set(L.pageX,L.pageY)}function St(L){const vt=L.pointerId===A[0]?A[1]:A[0];return O[vt]}i.domElement.addEventListener("contextmenu",Ht),i.domElement.addEventListener("pointerdown",P),i.domElement.addEventListener("pointercancel",V),i.domElement.addEventListener("wheel",lt,{passive:!1}),document.addEventListener("keydown",ut,{passive:!0,capture:!0}),this.update()}}const Y={SEED:null,MAZE_DEGREE:4,MIN_MAZE_DEGREE:4,MAX_MAZE_DEGREE:16,BRANCHING_FACTOR:.1,BRAID_FACTOR:.1,SHADOW_SIZE_FACTOR:.075,TELEPORT_MAP_OPACITY:.25,PLAYER_COLLISION_RADIUS:.275,PLAYER_COLLISION_OFFSET_X:0,PLAYER_COLLISION_OFFSET_Y:-.125,PLAYER_START_X:.5,PLAYER_START_Y:1.7,PLAYER_SHADOW_OFFSET_X:-.28,PLAYER_SHADOW_OFFSET_Y:-.15,PLAYER_SHADOW_WIDTH_FACTOR:.45,PLAYER_SHADOW_HEIGHT_FACTOR:.25,SHOW_COLLISION_DEBUG:!1,MOVE_SPEED_FACTOR:2,ROT_SPEED:3,HUNTER_SPEED:800,VORTEX_SPEED_NORMAL:1.5,VORTEX_SPEED_FAST:6,JELLY_PORTAL_COUNT:0,getHunterCount(s){return s>=16?3:s>=8?2:1},getTeleportCount(s){if(s<=8)return Math.max(2,Math.floor(s/2));const t=s-8;return Math.floor(.125*t*t+.5*t+4)},getPathfinderCount(s){return this.getTeleportCount(s)},COLORS:{WALL:"#444",PATH_KNOWN:"#88ccff",PATH_VISITED:"#888",NEON_UP:"#00ffff",NEON_DOWN:"#ff00ff",NEON_UP_UNUSED:"#006666",NEON_DOWN_UNUSED:"#660066",START:"#ff0",EXIT:"#0f0",PLAYER:"#f00",PLAYER_OUTLINE:"#ffffff",HUNTER:"#a0f",TELEPORT:"#ff8c00",TELEPORT_INACTIVE:"#555555",REVEALED_PATH:"#ffffff",ELEVATOR_BIDIRECTIONAL:"#ffffff",JELLY_PORTAL:"#a020f0",THREE_PLAYER:16711680,THREE_HUNTER:11141375,THREE_START:16776960,THREE_EXIT:65280,THREE_VISITED:8947848,THREE_KNOWN:8965375,THREE_ELEVATOR_UP:65535,THREE_ELEVATOR_DOWN:16711935,THREE_TELEPORT:16747520,THREE_KEY:16766720,THREE_JELLY_PORTAL:10494192,THREE_ELEVATOR_SHAFT:{bottom:16711935,top:65535}}},Ma={en:{gameTitle:"VOID ESCAPE",gameCredits:"a game by Bernard Rodrigues",activeHunters:"Active Hunters",activeTeleports:"Active Teleports",activeKeys:"Active Keys",availablePathfinders:"Available Pathfinders",mazeDegree:"Maze Degree",safeMode:"Safe Mode",generateMaze:"NEW GAME",continue:"CONTINUE",degreeHint:"Controls the grid size. Higher values create larger, more complex mazes.",safeModeHint:"When active, no hunters will spawn in the maze.",storyMsg1:"The mystical church of chaos worship!",storyMsg2:"The greatest monument to chaos worship.",storyMsg3:"I am a priestess of the word of the Jelly god.",storyMsg4:"But their word is a lie! The chaos is a lie!",storyMsg5:"So I was condemned to exile...",storyMsg6:"Condemned to the void...",hudKeys:"KEYS",hudPathfinders:"PATHFINDERS",hudFloor:"Floor",hudVisited:"Visited",proximityDetector:"PROXIMITY DETECTOR",mapLegendTitle:"MAP LEGEND",legendVisited:"Visited Path",legendKnown:"Known Path",legendStart:"Starting Point",legendExit:"Maze Exit",legendHunter:"Void Hunter",legendTeleport:"Teleport",legendElevator:"Elevator",controlsHintTitle:"CONTROLS HINT",actionMove:"Move / Rotate",actionElevator:"Elevator Up / Down",actionMap:"3D Holographic Map",actionZoom:"Zoom Minimap",msgVoidHuntersDetected:"Void Hunters Detected",msgKeySecured:"Key secured ({collected}/{total})",msgExitUnlocked:"Exit unlocked",msgKeysRemaining:"{count} key(s) remaining",msgNoOtherActiveTeleport:"No other active teleports",msgExitFound:"Exit found",msgNoPathfindersRemaining:"No pathfinders remaining",msgExitNotFoundYet:"Exit not found yet",msgSafePointTeleport:"Safe point... Teleport?",msgOopsNoisyShit:"Oops... noisy sh*t!",msgWhereAmI:"Where am I?",msgElevatorUp:"Up?",msgElevatorDown:"Down?",msgWhichWay:"Which way?",msgDidYouHearThat:"Did you hear that?",msgIWasDetected:"Damn! I was detected.",msgFoundPathfinder:"Found a pathfinder!",msgWorldSaved:"World saved. What now?",msgKeyDropped:"Oh! Just dropped a key...",msgPlayerRespawn:"Ok.. ok.. guess I'm alive..",statusLabel:"HUNTER STATUS:",statusScanning:"SCANNING",statusActive:"ACTIVE",statusSleeping:"SLEEPING",statusTracking:"TRACKING MODE",statusConverging:"HUNTERS CONVERGING ({ticks} Ticks)",pauseTitle:"PAUSED",resume:"RESUME",victoryTitle:"Mission Accomplished",victoryText:"You have successfully navigated the 3D void.",victoryCompletion:"MAP COMPLETION: {percent}%",mapCompletion:"MAP COMPLETION",victoryDeaths:"DEATHS",victoryDegree:"MAZE DEGREE",victoryTime:"COMPLETION TIME",playAgain:"PLAY AGAIN",mainMenu:"MAIN MENU",gameOverTitle:"Terminated",gameOverText:"You were caught by the void hunters.",saving:"SAVING...",generatingMaze:"GENERATING MAZE...",hudMana:"Mana",victoryMana:"MANA COLLECTED",msgManaSecured:"Mana secured ({collected}/{total})",teleportAnomaly:"TELEPORT ANOMALY",ticks:"TICKS",map3dInstructions:"Drag to rotate | Scroll to zoom | M to return",teleportWarning:"TELEPORT",map:"MAP",teleport:"TELEPORT",teleportationLink:"TELEPORTATION LINK",teleportJumpSector:"Jump to Sector {floor}F?",teleportTargetGrid:"Target Grid: ({x}, {y})",teleportGo:"GO",teleportCancel:"CANCEL",actionJellyPortal:"Jelly God Portal",msgJellyPortalEarned:"I got a little power!",msgJellyPortalNotHere:"I can't do this here...",msgJellyPortalActivated:"Portal of the Jelly God!",msgJellyPortalNoPortalCount:"I need mana...",msgJellyPortalNotSafe:"Not safe, but teleport-able..."},ptBr:{gameTitle:"VOID ESCAPE",gameCredits:"um jogo de Bernard Rodrigues",activeHunters:"Caçadores Ativos",activeTeleports:"Teleportes Ativos",activeKeys:"Chaves Ativas",availablePathfinders:"Localizadores Disponíveis",mazeDegree:"Grau do Labirinto",safeMode:"Modo Seguro",generateMaze:"NOVO JOGO",continue:"CONTINUAR",degreeHint:"Controla o tamanho da grade. Valores maiores criam labirintos maiores e mais complexos.",safeModeHint:"Quando ativo, nenhum caçador surgirá no labirinto.",storyMsg1:"A igreja mística do culto ao caos!",storyMsg2:"O maior monumento ao culto do caos.",storyMsg3:"Sou uma sacerdotisa da palavra do deus Geleia.",storyMsg4:"Mas sua palavra é uma mentira! O caos é uma mentira!",storyMsg5:"Então fui condenada ao exílio...",storyMsg6:"Condenada ao vazio...",hudKeys:"CHAVES",hudPathfinders:"LOCALIZADORES",hudFloor:"Andar",hudVisited:"Visitado",proximityDetector:"DETECTOR DE PROXIMIDADE",mapLegendTitle:"LEGENDA DO MAPA",legendVisited:"Caminho Visitado",legendKnown:"Caminho Conhecido",legendStart:"Ponto de Partida",legendExit:"Saída do Labirinto",legendHunter:"Caçador do Vazio",legendTeleport:"Teleporte",legendElevator:"Elevador",controlsHintTitle:"DICA DE CONTROLES",actionMove:"Mover / Girar",actionElevator:"Elevador Subir / Descer",actionMap:"Mapa Holográfico 3D",actionZoom:"Zoom do Minimapa",msgVoidHuntersDetected:"Caçadores do Vazio Detectados",msgKeySecured:"Chave obtida ({collected}/{total})",msgExitUnlocked:"Saída destrancada",msgKeysRemaining:"{count} chave(s) restante(s)",msgNoOtherActiveTeleport:"Nenhum outro teleporte ativo",msgExitFound:"Saída encontrada",msgNoPathfindersRemaining:"Nenhum localizador restante",msgExitNotFoundYet:"Saída ainda não encontrada",msgSafePointTeleport:"Ponto seguro... Teleportar?",msgOopsNoisyShit:"Ops... troço barulhento!",msgWhereAmI:"Onde estou?",msgElevatorUp:"Subir?",msgElevatorDown:"Descer?",msgWhichWay:"Que direção?",msgDidYouHearThat:"Ouviu alguma coisa?",msgIWasDetected:"Droga! Fui detectada.",msgFoundPathfinder:"Localizador encontrado!",msgWorldSaved:"Salvei o mundo. E agora?",msgKeyDropped:"Ih... Derrubei uma chave...",msgPlayerRespawn:"Ok.. ok.. sobrevivi..",statusLabel:"STATUS DO CAÇADOR:",statusScanning:"ESCANEANDO",statusActive:"ATIVO",statusSleeping:"DORMINDO",statusTracking:"MODO DE RASTREAMENTO",statusConverging:"CAÇADORES CONVERGINDO ({ticks} Ticks)",pauseTitle:"PAUSA",resume:"RETOMAR",victoryTitle:"Missão Cumprida",victoryText:"Você atravessou o vazio 3D com sucesso.",victoryCompletion:"MAPA COMPLETO: {percent}%",mapCompletion:"MAPA COMPLETO",victoryDeaths:"MORTES",victoryDegree:"GRAU DO LABIRINTO",victoryTime:"TEMPO DE CONCLUSÃO",playAgain:"JOGAR NOVAMENTE",mainMenu:"MENU PRINCIPAL",gameOverTitle:"Eliminado",gameOverText:"Você foi pego pelos caçadores do vazio.",saving:"SALVANDO...",generatingMaze:"GERANDO LABIRINTO...",hudMana:"Mana",victoryMana:"MANA COLETADA",msgManaSecured:"Mana absorvida ({collected}/{total})",teleportAnomaly:"ANOMALIA DE TELEPORTE",ticks:"TICKS",map3dInstructions:"Arraste para girar | Role para zoom | M para voltar",teleportWarning:"TELEPORTE",map:"MAPA",teleport:"TELEPORTE",teleportationLink:"LINK DE TELEPORTE",teleportJumpSector:"Pular para o Setor {floor}F?",teleportTargetGrid:"Coordenada Alvo: ({x}, {y})",teleportGo:"IR",teleportCancel:"CANCELAR",actionJellyPortal:"Portal do Deus Geléia",msgJellyPortalEarned:"Ganhei um poderzinho!",msgJellyPortalNotHere:"Aqui eu não posso...",msgJellyPortalActivated:"Portal do Deus Geléia!",msgJellyPortalNoPortalCount:"Preciso de mana...",msgJellyPortalNotSafe:"Não seguro, mas teleportável..."},ja:{gameTitle:"ヴォイド・エスケープ",gameCredits:"ベルナルド・ホドリゲス制作",activeHunters:"アクティブなハンター",activeTeleports:"アクティブなテレポート",activeKeys:"アクティブな鍵",availablePathfinders:"使用可能なパスファインダー",mazeDegree:"迷路の難易度",safeMode:"セーフモード",generateMaze:"ニューゲーム",continue:"つづきから",degreeHint:"グリッドのサイズを調整します。値が大きいほど、より広く複雑な迷路になります。",safeModeHint:"有効にすると、迷路にハンターが出現しなくなります。",storyMsg1:"混沌崇拝の神秘的な教会!",storyMsg2:"混沌崇拝の最大の記念碑。",storyMsg3:"私はゼリー神の言葉に仕える巫女よ。",storyMsg4:"でも彼らの言葉は嘘!混沌なんて嘘っぱちなんだから!",storyMsg5:"だから追放の刑に処されたの…",storyMsg6:"虚空へと追放されて…",hudKeys:"鍵",hudPathfinders:"パスファインダー",hudFloor:"階層",hudVisited:"訪問済み",proximityDetector:"近接探知機",mapLegendTitle:"マップ凡例",legendVisited:"訪問済みの道",legendKnown:"既知の道",legendStart:"スタート地点",legendExit:"迷路の出口",legendHunter:"虚空のハンター",legendTeleport:"テレポート",legendElevator:"エレベーター",controlsHintTitle:"操作方法",actionMove:"移動 / 回転",actionElevator:"エレベーター 上昇 / 下降",actionMap:"3Dホログラフィックマップ",actionZoom:"ミニマップのズーム",msgVoidHuntersDetected:"虚空のハンターを検知",msgKeySecured:"鍵を入手 ({collected}/{total})",msgExitUnlocked:"出口の鍵が開いた",msgKeysRemaining:"残り{count}個の鍵",msgNoOtherActiveTeleport:"他に有効なテレポートはない",msgExitFound:"出口を発見",msgNoPathfindersRemaining:"パスファインダーが残っていない",msgExitNotFoundYet:"出口はまだ見つかっていない",msgSafePointTeleport:"安全地帯…テレポートする?",msgOopsNoisyShit:"あら…うるさいったらないわね!",msgWhereAmI:"ここどこ?",msgElevatorUp:"上る?",msgElevatorDown:"下る?",msgWhichWay:"どっちの道?",msgDidYouHearThat:"今の聞こえた?",msgIWasDetected:"しまった、見つかっちゃった!",msgFoundPathfinder:"パスファインダー発見!",msgWorldSaved:"世界を救っちゃった。さて、次は?",msgKeyDropped:"あ、鍵落としちゃった…",msgPlayerRespawn:"よしよし…どうやらまだ生きてるな…",statusLabel:"ハンターの状態:",statusScanning:"スキャン中",statusActive:"アクティブ",statusSleeping:"スリープ中",statusTracking:"追跡モード",statusConverging:"ハンターが接近中 ({ticks} ティック)",pauseTitle:"一時停止",resume:"再開",victoryTitle:"任務完了",victoryText:"3Dの虚空を無事に踏破した。",victoryCompletion:"マップ達成度: {percent}%",mapCompletion:"マップ達成度",victoryDeaths:"死亡数",victoryDegree:"迷路の次数",victoryTime:"クリア時間",playAgain:"もう一度プレイ",mainMenu:"メインメニュー",gameOverTitle:"終了",gameOverText:"虚空のハンターに捕まってしまった。",saving:"セーブ中…",generatingMaze:"迷路生成中...",hudMana:"マナ",victoryMana:"マナ回収量",msgManaSecured:"マナを獲得しました ({collected}/{total})",teleportAnomaly:"テレポート異常",ticks:"ティック",map3dInstructions:"ドラッグで回転 | スクロールでズーム | Mキーで戻る",teleportWarning:"テレポート",map:"マップ",teleport:"テレポート",teleportationLink:"テレポートリンク",teleportJumpSector:"{floor}階のセクターへ移動する?",teleportTargetGrid:"目標座標: ({x}, {y})",teleportGo:"移動",teleportCancel:"キャンセル",actionJellyPortal:"ゼリー神のポータル",msgJellyPortalEarned:"ちょっとした力を手に入れた！",msgJellyPortalNotHere:"ここでは使えないわ...",msgJellyPortalActivated:"ゼリー神のポータル！",msgJellyPortalNoPortalCount:"マナが必要よ...",msgJellyPortalNotSafe:"安全ではないけれど、テレポートはできるわ..."},es:{gameTitle:"ESCAPE DEL VACÍO",gameCredits:"un juego de Bernard Rodrigues",activeHunters:"Cazadores Activos",activeTeleports:"Teletransportes Activos",activeKeys:"Llaves Activas",availablePathfinders:"Localizadores Disponibles",mazeDegree:"Grado del Laberinto",safeMode:"Modo Seguro",generateMaze:"NUEVA PARTIDA",continue:"CONTINUAR",degreeHint:"Controla el tamaño de la cuadrícula. Valores más altos crean laberintos más grandes y complejos.",safeModeHint:"Cuando está activo, no aparecerán cazadores en el laberinto.",storyMsg1:"¡La mística iglesia del culto al caos!",storyMsg2:"El mayor monumento al culto del caos.",storyMsg3:"Soy una sacerdotisa de la palabra del dios Gelatina.",storyMsg4:"¡Pero su palabra es una mentira! ¡El caos es mentira!",storyMsg5:"Así que fui condenada al exilio...",storyMsg6:"Condenada al vacío...",hudKeys:"LLAVES",hudPathfinders:"LOCALIZADORES",hudFloor:"Piso",hudVisited:"Visitado",proximityDetector:"DETECTOR DE PROXIMIDAD",mapLegendTitle:"LEYENDA DEL MAPA",legendVisited:"Camino Visitado",legendKnown:"Camino Conocido",legendStart:"Punto de Partida",legendExit:"Salida del Laberinto",legendHunter:"Cazador del Vacío",legendTeleport:"Teletransporte",legendElevator:"Ascensor",controlsHintTitle:"AYUDA DE CONTROLES",actionMove:"Mover / Girar",actionElevator:"Ascensor Subir / Bajar",actionMap:"Mapa Holográfico 3D",actionZoom:"Zoom del Minimapa",msgVoidHuntersDetected:"Cazadores del Vacío Detectados",msgKeySecured:"Llave obtenida ({collected}/{total})",msgExitUnlocked:"Salida desbloqueada",msgKeysRemaining:"{count} llave(s) restante(s)",msgNoOtherActiveTeleport:"No hay otros teletransportes activos",msgExitFound:"Salida encontrada",msgNoPathfindersRemaining:"No quedan localizadores",msgExitNotFoundYet:"Salida aún no encontrada",msgSafePointTeleport:"Punto seguro... ¿Teletransportarse?",msgOopsNoisyShit:"Ups... ¡qué cosa tan ruidosa!",msgWhereAmI:"¿Dónde estoy?",msgElevatorUp:"¿Subir?",msgElevatorDown:"¿Bajar?",msgWhichWay:"¿Por dónde?",msgDidYouHearThat:"¿Escuchaste eso?",msgIWasDetected:"¡Rayos! Fui detectada.",msgFoundPathfinder:"¡Localizador encontrado!",msgWorldSaved:"Salvé el mundo. ¿Y ahora qué?",msgKeyDropped:"¡Ah! Se me cayó una llave...",msgPlayerRespawn:"Vale.. vale.. parece que sigo viva..",statusLabel:"ESTADO DEL CAZADOR:",statusScanning:"ESCANEANDO",statusActive:"ACTIVO",statusSleeping:"DURMIENDO",statusTracking:"MODO DE RASTREO",statusConverging:"CAZADORES CONVERGIENDO ({ticks} Ticks)",pauseTitle:"PAUSA",resume:"REANUDAR",victoryTitle:"Misión Cumplida",victoryText:"Atravesaste el vacío 3D con éxito.",victoryCompletion:"MAPA COMPLETADO: {percent}%",mapCompletion:"MAPA COMPLETADO",victoryDeaths:"MUERTES",victoryDegree:"GRADO DEL LABERINTO",victoryTime:"TIEMPO DE FINALIZACIÓN",playAgain:"JUGAR DE NUEVO",mainMenu:"MENÚ PRINCIPAL",gameOverTitle:"Eliminada",gameOverText:"Fuiste atrapada por los cazadores del vacío.",saving:"GUARDANDO...",generatingMaze:"GENERANDO LABIRINTO...",hudMana:"Maná",victoryMana:"MANÁ RECOLECTADA",msgManaSecured:"Maná asegurado ({collected}/{total})",teleportAnomaly:"ANOMALÍA DE TELETRANSPORTE",ticks:"TICKS",map3dInstructions:"Arrastra para girar | Desplázate para zoom | M para volver",teleportWarning:"TELETRANSPORTE",map:"MAPA",teleport:"TELETRANSPORTE",teleportationLink:"ENLACE DE TELETRANSPORTE",teleportJumpSector:"¿Saltar al Sector {floor}F?",teleportTargetGrid:"Coordenada Objetivo: ({x}, {y})",teleportGo:"IR",teleportCancel:"CANCELAR",actionJellyPortal:"Portal del Dios Gelatina",msgJellyPortalEarned:"¡Tengo un pequeno poder!",msgJellyPortalNotHere:"No puedo hacer esto aquí...",msgJellyPortalActivated:"¡Portal del Dios Gelatina!",msgJellyPortalNoPortalCount:"Necesito maná...",msgJellyPortalNotSafe:"No es seguro, pero se puede teletransportar..."}};let Pn="en";function is(s){Ma[s]?Pn=s:Pn="en"}function Yp(){if(typeof navigator<"u"){const s=navigator.language||navigator.userLanguage;if(s){const t=s.toLowerCase();if(t.startsWith("pt")){is("ptBr");return}if(t.startsWith("ja")){is("ja");return}if(t.startsWith("es")){is("es");return}}}is("en")}Yp();function Rt(s,t={},e=Pn){var n,a;let i=((n=Ma[e])==null?void 0:n[s])||((a=Ma.en)==null?void 0:a[s])||s;return Object.keys(t).forEach(o=>{i=i.replace(`{${o}}`,t[o])}),i}function rs(s=Pn){typeof document<"u"&&document.querySelectorAll("[data-i18n]").forEach(e=>{const i=e.getAttribute("data-i18n");if(i){const n=Rt(i,{},s);n!==i&&(e instanceof HTMLInputElement&&e.type==="button"?e.value=n:e.textContent=n)}})}class el{constructor(){D(this,"_data");this._data=[]}get size(){return this._data.length}push(t){this._data.push(t),this._bubbleUp(this._data.length-1)}pop(){const t=this._data[0],e=this._data.pop();return this._data.length>0&&e!==void 0&&(this._data[0]=e,this._siftDown(0)),t}_bubbleUp(t){for(;t>0;){const e=t-1>>1;if(this._data[e].f<=this._data[t].f)break;[this._data[e],this._data[t]]=[this._data[t],this._data[e]],t=e}}_siftDown(t){const e=this._data.length;for(;;){let i=t;const n=2*t+1,a=2*t+2;if(n<e&&this._data[n].f<this._data[i].f&&(i=n),a<e&&this._data[a].f<this._data[i].f&&(i=a),i===t)break;[this._data[i],this._data[t]]=[this._data[t],this._data[i]],t=i}}}const Xp=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1}],il=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];function ms(s,t,e,i,n,a){return Math.abs(s-i)+Math.abs(t-n)+Math.abs(e-a)}function nl(s,t,e,i,n=0,a=null){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return[];const o=new Map,r=new Map,c=`${s.x},${s.y},${s.z}`;r.set(c,0);const l=new el;for(l.push({f:ms(s.x,s.y,s.z,t.x,t.y,t.z),node:s});l.size>0;){const h=l.pop();if(!h)continue;const{node:f}=h,p=`${f.x},${f.y},${f.z}`;if(f.x===t.x&&f.y===t.y&&f.z===t.z)return $p(o,p);const g=r.get(p)??0;for(const{dx:m,dy:v,dz:d}of il){const u=f.x+m,y=f.y+v,_=f.z+d;if(u<0||u>=i||y<0||y>=i||_<0||_>=i||a&&u===a.x&&y===a.y&&_===a.z)continue;const M=e[u*i*i+y*i+_];if(M===n||M===8)continue;if(d!==0){const A=f.z+d/2;if(e[f.x*i*i+f.y*i+A]===n)continue}const T=`${u},${y},${_}`,S=g+1;S<(r.get(T)??1/0)&&(o.set(T,f),r.set(T,S),l.push({f:S+ms(u,y,_,t.x,t.y,t.z),node:{x:u,y,z:_}}))}}return null}function $p(s,t){const e=[];let i=t;for(;s.has(i);){const n=s.get(i);if(!n)break;const[a,o,r]=i.split(",").map(Number);e.push({x:a,y:o,z:r}),i=`${n.x},${n.y},${n.z}`}return e.reverse(),e}function Kp(s,t,e,i,n=0,a=1/0,o=null){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return 0;const r=new Map,c=`${s.x},${s.y},${s.z}`;r.set(c,0);const l=new el;for(l.push({f:ms(s.x,s.y,s.z,t.x,t.y,t.z),node:s});l.size>0;){const h=l.pop();if(!h)continue;const{node:f}=h,p=`${f.x},${f.y},${f.z}`,g=r.get(p)??0;if(g>a)return 1/0;if(f.x===t.x&&f.y===t.y&&f.z===t.z)return g;for(const{dx:m,dy:v,dz:d}of il){const u=f.x+m,y=f.y+v,_=f.z+d;if(u<0||u>=i||y<0||y>=i||_<0||_>=i||o&&u===o.x&&y===o.y&&_===o.z)continue;const M=e[u*i*i+y*i+_];if(M===n||M===8)continue;if(d!==0){const A=f.z+d/2;if(e[f.x*i*i+f.y*i+A]===n)continue}const T=`${u},${y},${_}`,S=g+1;S<(r.get(T)??1/0)&&(r.set(T,S),l.push({f:S+ms(u,y,_,t.x,t.y,t.z),node:{x:u,y,z:_}}))}}return 1/0}function qp(s,t,e,i,n=0,a=10){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return 0;const o=[{x:s.x,y:s.y,z:s.z,dist:0}];let r=0;const c=new Map;for(c.set(`${s.x},${s.y},${s.z}`,0);r<o.length;){const l=o[r++];if(!(l.dist>a))for(const{dx:h,dy:f,dz:p}of Xp){const g=l.x+h,m=l.y+f,v=l.z+p;if(g<0||g>=i||m<0||m>=i||v<0||v>=i)continue;const d=e[g*i*i+m*i+v];if(d===n||d===8)continue;const u=`${g},${m},${v}`,_=v%2===0?0:1,M=l.dist+_;if(M<(c.get(u)??1/0)){if(c.set(u,M),g===t.x&&m===t.y&&v===t.z)return M;_===0?o.splice(r,0,{x:g,y:m,z:v,dist:M}):o.push({x:g,y:m,z:v,dist:M})}}}return 1/0}function jp(s,t,e,i,n,a){const o=[{x:s.x,y:s.y,z:s.z,path:[]}];let r=0;const c=new Uint8Array(i*i*i);for(c[s.x*i*i+s.y*i+s.z]=1;r<o.length;){const l=o[r++],h=`${l.x},${l.y},${l.z}`;if(!t.has(h))return l.path;const f=a(l.x,l.y,l.z,e,n,!1);for(const p of f){const g=p.x*i*i+p.y*i+p.z;c[g]||(c[g]=1,o.push({x:p.x,y:p.y,z:p.z,path:[...l.path,p]}))}}return null}class Zp{constructor(t,e,i){D(this,"maze");D(this,"id");D(this,"history");D(this,"visitedNodes");D(this,"pathToTarget");D(this,"x");D(this,"y");D(this,"z");D(this,"visualX");D(this,"visualY");D(this,"visualZ");D(this,"state");D(this,"lastPos");D(this,"jellyTime");D(this,"lowCanvas");D(this,"lctx");this.maze=t,this.id=i,this.history=[],this.visitedNodes=new Set,this.pathToTarget=[],e?(this.x=e.x,this.y=e.y,this.z=e.z,this.visualX=e.x,this.visualY=e.y,this.visualZ=e.z,this.state="WANDERING",this.lastPos={x:this.x,y:this.y,z:this.z},this.visitedNodes.add(`${this.x},${this.y},${this.z}`)):(this.x=null,this.y=null,this.z=null,this.visualX=null,this.visualY=null,this.visualZ=null,this.state="SLEEP",this.lastPos=null),this.jellyTime=0,typeof document<"u"&&(this.lowCanvas=document.createElement("canvas"),this.lowCanvas.width=64,this.lowCanvas.height=64,this.lctx=this.lowCanvas.getContext("2d",{willReadFrequently:!0}))}generateCloudTexture(t=.016){if(this.state==="SLEEP"||(this.jellyTime+=t,typeof document>"u"||!this.lctx))return;const e=64,i=this.lctx;i.globalCompositeOperation="destination-out",i.fillStyle="rgba(0, 0, 0, 0.22)",i.fillRect(0,0,e,e),i.globalCompositeOperation="source-over";const n=this.jellyTime;try{const a=i.getImageData(0,0,e,e),o=a.data;for(let r=0;r<e;r++)for(let c=0;c<e;c++){const l=c-e/2,h=r-e/2,f=Math.sqrt(l*l+h*h),p=Math.sin(n*1.5+c*.08)*2.5,g=e*.35+p;if(f<g+Math.random()*1.5){const m=90+Math.floor(Math.random()*45),v=10+Math.floor(Math.random()*20),d=140+Math.floor(Math.random()*60),u=(r*e+c)*4;o[u]=m,o[u+1]=v,o[u+2]=d,o[u+3]=255}}i.putImageData(a,0,0)}catch{}if(Math.random()<.04){i.fillStyle=Math.random()<.7?"#ffffff":"#b3ffff";const a=e/2-8+Math.random()*16,o=e/2-8+Math.random()*16;i.fillRect(a,o,2+Math.random()*3,4+Math.random()*10)}if(Math.random()<.12){const a=Math.floor(Math.random()*3)+1,o=["#00ff66","#ff0055","#00ccff","#ffff00","#ffffff"];for(let r=0;r<a;r++){const c=Math.floor(Math.random()*e),l=Math.floor(Math.random()*e),h=c-e/2,f=l-e/2;if(Math.sqrt(h*h+f*f)<e*.32){const g=Math.floor(Math.random()*4)+2,m=Math.floor(Math.random()*2)+1;i.fillStyle=o[Math.floor(Math.random()*o.length)],i.fillRect(c,l,g,m)}}}if(Math.random()<.08){const a=Math.floor(Math.random()*e),o=Math.floor(Math.random()*6)+2,r=Math.floor(Math.random()*6)-3;try{const c=i.getImageData(0,a,e,o);i.clearRect(0,a,e,o),i.putImageData(c,r,a)}catch{}}}move(t,e,i){if(this.state==="SLEEP"||this.x===null||this.y===null||this.z===null)return;const n=this.getValidNeighbors(e,i);if(n.length===0)return;const a=Math.round(Math.cbrt(e.length)),o=e.get?e.get(this.x,this.y,this.z):e[this.x*a*a+this.y*a+this.z]??0;(o===i.VISITED||o===i.JELLY_PORTAL)&&this.state!=="TELEPORT_TRACKING"&&this.state!=="TRACKING"&&(this.state="TRACKING",this.pathToTarget=[],this.visitedNodes.clear(),this.visitedNodes.add(`${this.x},${this.y},${this.z}`));let r;if(this.pathToTarget.length>0){const c=this.pathToTarget[0],l=e[c.x*a*a+c.y*a+c.z];(this.state==="TRACKING"?l===i.VISITED||l===i.START||l===i.EXIT||l===i.JELLY_PORTAL:l!==i.WALL)?r=this.pathToTarget.shift():this.pathToTarget=[]}if(!r)if(this.state==="TELEPORT_TRACKING")r=void 0;else{let c=this.findPathToNearestUnvisited(e,i);if((!c||c.length===0)&&(this.visitedNodes.clear(),this.visitedNodes.add(`${this.x},${this.y},${this.z}`),c=this.findPathToNearestUnvisited(e,i)),c&&c.length>0)this.pathToTarget=c,r=this.pathToTarget.shift();else{const l=this.lastPos||{x:this.x,y:this.y,z:this.z},h=n.filter(f=>f.x!==l.x||f.y!==l.y||f.z!==l.z);r=h.length>0?h[Math.floor(Math.random()*h.length)]:n[0]}}r&&(this.history.push({x:this.x,y:this.y,z:this.z}),this.history.length>2&&this.history.shift(),this.lastPos={x:this.x,y:this.y,z:this.z},this.x=r.x,this.y=r.y,this.z=r.z,this.visitedNodes.add(`${this.x},${this.y},${this.z}`))}findPathToTarget(t,e,i){const n=Math.round(Math.cbrt(e.length));return nl({x:this.x,y:this.y,z:this.z},t,e,n,i.WALL,this.maze.startPos)}findPathToNearestUnvisited(t,e){const i=Math.round(Math.cbrt(t.length));return jp({x:this.x,y:this.y,z:this.z},this.visitedNodes,t,i,e,(n,a,o,r,c)=>this.getValidNeighbors(r,c,n,a,o,this.state==="TRACKING"))}getValidNeighbors(t,e,i=this.x,n=this.y,a=this.z,o=this.state==="TRACKING"){const r=[],c=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}],l=Math.round(Math.cbrt(t.length));for(const h of c){const f=i+h.dx,p=n+h.dy,g=a+h.dz;if(f>=0&&f<l&&p>=0&&p<l&&g>=0&&g<l){const m=Math.floor(this.maze.startPos.x),v=Math.floor(this.maze.startPos.y),d=this.maze.startPos.z,u=this.maze.inactiveTeleportPos&&this.maze.inactiveTeleportPos.x===m&&this.maze.inactiveTeleportPos.y===v&&this.maze.inactiveTeleportPos.z===d;if(f===m&&p===v&&g===d&&!u)continue;const y=t[f*l*l+p*l+g];if(y===e.EXIT)continue;if(y!==e.WALL&&y!==8){if(h.dz!==0){const _=a+h.dz/2;if(t[i*l*l+n*l+_]===e.WALL)continue}o?(y===e.VISITED||y===e.START||y===e.EXIT||y===e.JELLY_PORTAL||this.maze.visitedCells&&this.maze.visitedCells.has(`${f},${p},${g}`))&&r.push({x:f,y:p,z:g}):r.push({x:f,y:p,z:g})}}}return r}}class Jp{constructor(t,e,i=null){D(this,"n");D(this,"branchingFactor");D(this,"size");D(this,"seed");D(this,"random");D(this,"matrix");D(this,"TYPES");D(this,"startPos");const n=t!==void 0?t:Y.MAZE_DEGREE!==void 0?Y.MAZE_DEGREE:8,a=e!==void 0?e:Y.BRANCHING_FACTOR!==void 0?Y.BRANCHING_FACTOR:.2;this.n=Math.max(3,Math.min(16,n)),this.branchingFactor=Math.max(0,Math.min(1,a)),this.size=2*this.n+1,i!=null?(this.seed=i,this.random=this.createSeededRandom(i)):(this.seed=null,this.random=Math.random),this.matrix=this.initMatrix(),this.TYPES={WALL:0,PATH:1,VISITED:2,START:3,EXIT:4,ELEVATOR_VISITED:5,TELEPORT:6,KEY:7,STATUE:8,MANA:9,JELLY_PORTAL:10},this.startPos={x:Y.PLAYER_START_X!==void 0?Y.PLAYER_START_X:.5,y:Y.PLAYER_START_Y!==void 0?Y.PLAYER_START_Y:1.5,z:0}}createSeededRandom(t){let e=0;if(typeof t=="string")for(let i=0;i<t.length;i++)e=Math.imul(31,e)+t.charCodeAt(i)|0;else e=t|0;return function(){let i=e+=1831565813;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}initMatrix(){return new Int8Array(this.size*this.size*this.size)}_idx(t,e,i){return t*this.size*this.size+e*this.size+i}generate(){const t=[],e=1+2*Math.floor(this.random()*this.n),i=1+2*Math.floor(this.random()*this.n),n=1+2*Math.floor(this.random()*this.n);for(this.matrix[this._idx(e,i,n)]=this.TYPES.PATH,t.push({x:e,y:i,z:n});t.length>0;){let r=this.random()>this.branchingFactor?t.length-1:Math.floor(this.random()*t.length);const c=t[r],l=this.getUnvisitedNeighbors(c.x,c.y,c.z);if(l.length>0){const h=l[Math.floor(this.random()*l.length)];this.matrix[this._idx(h.x,h.y,h.z)]=this.TYPES.PATH,this.matrix[this._idx((c.x+h.x)/2,(c.y+h.y)/2,(c.z+h.z)/2)]=this.TYPES.PATH,t.push(h)}else t.splice(r,1)}this.setEntryAndExit(),this.placeTeleports(),this.placeKeys(),this.applyBraid(),this.placeStatues(),this.placeManas();const a=this.size,o=this.matrix;return o.size=a,o.get=(r,c,l)=>o[r*a*a+c*a+l],o.set=(r,c,l,h)=>{o[r*a*a+c*a+l]=h},o}getUnvisitedNeighbors(t,e,i){const n=[],a=[{dx:2,dy:0,dz:0},{dx:-2,dy:0,dz:0},{dx:0,dy:2,dz:0},{dx:0,dy:-2,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const o of a){const r=t+o.dx,c=e+o.dy,l=i+o.dz;this.isValid(r,c,l)&&this.matrix[this._idx(r,c,l)]===this.TYPES.WALL&&n.push({x:r,y:c,z:l})}return n}isValid(t,e,i){return t>0&&t<this.size-1&&e>0&&e<this.size-1&&i>0&&i<this.size-1}setEntryAndExit(){const t=1+2*Math.floor(this.random()*this.n);this.matrix[this._idx(1,1,t)]=this.TYPES.PATH,this.matrix[this._idx(0,1,t)]=this.TYPES.TELEPORT,this.startPos={x:Y.PLAYER_START_X!==void 0?Y.PLAYER_START_X:.5,y:Y.PLAYER_START_Y!==void 0?Y.PLAYER_START_Y:1.5,z:t};const e=1+2*Math.floor(this.random()*this.n),i=2*this.n-1;this.matrix[this._idx(i,i,e)]=this.TYPES.PATH,this.matrix[this._idx(2*this.n,i,e)]=this.TYPES.EXIT}_findExitPos(){for(let t=0;t<this.size;t++)for(let e=0;e<this.size;e++)for(let i=0;i<this.size;i++)if(this.matrix[this._idx(t,e,i)]===this.TYPES.EXIT)return{x:t,y:e,z:i};return{x:2*this.n,y:2*this.n-1,z:this.startPos.z}}_collectDeadEndsAndPaths(){const t=[],e=[],i=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1}];for(let n=1;n<this.size-1;n++)for(let a=1;a<this.size-1;a++)for(let o=1;o<this.size-1;o++){if(this.matrix[this._idx(n,a,o)]!==this.TYPES.PATH)continue;const r=o+1<this.size&&this.matrix[this._idx(n,a,o+1)]!==this.TYPES.WALL,c=o-1>=0&&this.matrix[this._idx(n,a,o-1)]!==this.TYPES.WALL;if(r||c)continue;let l=0;for(const h of i){const f=n+h.dx,p=a+h.dy,g=o+h.dz;f>=0&&f<this.size&&p>=0&&p<this.size&&g>=0&&g<this.size&&this.matrix[this._idx(f,p,g)]!==this.TYPES.WALL&&l++}(l===1?t:e).push({x:n,y:a,z:o})}return{deadEnds:t,normalPaths:e}}_greedyFill(t,e,i,n,a){const o={x:0,y:1,z:this.startPos.z},r=this._findExitPos(),c=(f,p)=>Math.abs(f.x-p.x)+Math.abs(f.y-p.y)+Math.abs(f.z-p.z);let l=4,h=4;for(;t.length<i&&l>0;){a&&(t.length=0);const f=e.filter(p=>c(p,o)<l||c(p,r)<l?!1:!n.includes(this.matrix[this._idx(p.x,p.y,p.z)]));for(;t.length<i;){let p=null,g=-1;for(const m of f){if(t.some(d=>d.x===m.x&&d.y===m.y&&d.z===m.z))continue;let v=1/0;for(const d of t){const u=c(m,d);u<v&&(v=u)}if(v>=h){const d=Math.min(c(m,o),c(m,r),v);d>g&&(g=d,p=m)}}if(p)t.push(p);else break}t.length<i&&(h>1?h--:l--)}}placeTeleports(){const t=Y.getTeleportCount(this.n),{deadEnds:e,normalPaths:i}=this._collectDeadEndsAndPaths(),n=[];this._greedyFill(n,e,t,[],!0),n.length<t&&this._greedyFill(n,i,t,[],!1);for(const a of n)this.matrix[this._idx(a.x,a.y,a.z)]=this.TYPES.TELEPORT}placeKeys(){const t=Y.getHunterCount(this.n)*2,{deadEnds:e,normalPaths:i}=this._collectDeadEndsAndPaths(),n=[];this._greedyFill(n,e,t,[this.TYPES.TELEPORT],!0),n.length<t&&this._greedyFill(n,i,t,[this.TYPES.TELEPORT],!1);for(const a of n)this.matrix[this._idx(a.x,a.y,a.z)]=this.TYPES.KEY}applyBraid(){const t=this.size,e=[];for(let o=1;o<t-1;o++)for(let r=1;r<t-1;r++)for(let c=1;c<t-1;c++)if(this.matrix[this._idx(o,r,c)]===this.TYPES.WALL){const l=o%2===0&&r%2!==0&&c%2!==0,h=r%2===0&&o%2!==0&&c%2!==0,f=c%2===0&&o%2!==0&&r%2!==0;if(l){const p=this.matrix[this._idx(o-1,r,c)],g=this.matrix[this._idx(o+1,r,c)];p!==this.TYPES.WALL&&g!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&g!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&g!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&g!==this.TYPES.KEY&&e.push({x:o,y:r,z:c,type:"X"})}else if(h){const p=this.matrix[this._idx(o,r-1,c)],g=this.matrix[this._idx(o,r+1,c)];p!==this.TYPES.WALL&&g!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&g!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&g!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&g!==this.TYPES.KEY&&e.push({x:o,y:r,z:c,type:"Y"})}else if(f){const p=this.matrix[this._idx(o,r,c-1)],g=this.matrix[this._idx(o,r,c+1)];p!==this.TYPES.WALL&&g!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&g!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&g!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&g!==this.TYPES.KEY&&e.push({x:o,y:r,z:c,type:"Z"})}}for(let o=e.length-1;o>0;o--){const r=Math.floor(this.random()*(o+1)),c=e[o];e[o]=e[r],e[r]=c}const i=Y.BRAID_FACTOR||.1,n=Math.floor(e.length*i);let a=0;for(const o of e){if(a>=n)break;this.isWideConnection(o.x,o.y,o.z)||o.type==="Z"&&this.isAdjacentElevator(o.x,o.y,o.z)||(this.matrix[this._idx(o.x,o.y,o.z)]=this.TYPES.PATH,a++)}}isWideConnection(t,e,i){const n=this.size,a=(l,h,f)=>l<0||l>=n||h<0||h>=n||f<0||f>=n?!1:l===t&&h===e&&f===i?!0:this.matrix[this._idx(l,h,f)]!==this.TYPES.WALL;return!!(a(t,e+1,i)&&a(t+1,e,i)&&a(t+1,e+1,i)||a(t-1,e,i)&&a(t-1,e+1,i)&&a(t,e+1,i)||a(t,e-1,i)&&a(t+1,e-1,i)&&a(t+1,e,i)||a(t-1,e-1,i)&&a(t,e-1,i)&&a(t-1,e,i)||a(t,e,i+1)&&a(t+1,e,i)&&a(t+1,e,i+1)||a(t-1,e,i)&&a(t-1,e,i+1)&&a(t,e,i+1)||a(t,e,i-1)&&a(t+1,e,i-1)&&a(t+1,e,i)||a(t-1,e,i-1)&&a(t,e,i-1)&&a(t-1,e,i)||a(t,e,i+1)&&a(t,e+1,i)&&a(t,e+1,i+1)||a(t,e-1,i)&&a(t,e-1,i+1)&&a(t,e,i+1)||a(t,e,i-1)&&a(t,e+1,i-1)&&a(t,e+1,i)||a(t,e-1,i-1)&&a(t,e,i-1)&&a(t,e-1,i))}isAdjacentElevator(t,e,i){const n=this.size,a=[{dx:-1,dy:-1},{dx:-1,dy:0},{dx:-1,dy:1},{dx:0,dy:-1},{dx:0,dy:1},{dx:1,dy:-1},{dx:1,dy:0},{dx:1,dy:1}];for(const o of a){const r=t+o.dx,c=e+o.dy;if(!(r<0||r>=n||c<0||c>=n)&&(this.matrix[this._idx(r,c,i)]!==this.TYPES.WALL||i-2>=0&&this.matrix[this._idx(r,c,i-2)]!==this.TYPES.WALL||i+2<n&&this.matrix[this._idx(r,c,i+2)]!==this.TYPES.WALL))return!0}return!1}isDeadEndZ(t,e,i){if(t%2===0||e%2===0||i%2===0)return!1;const n=this.matrix[this._idx(t,e,i)];if(n===this.TYPES.WALL||n===this.TYPES.START||n===this.TYPES.EXIT||n===this.TYPES.TELEPORT||n===this.TYPES.KEY)return!1;const a=this.size,o=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(const c of o){const l=t+c.dx,h=e+c.dy;if(!(l<0||l>=a||h<0||h>=a)&&this.matrix[this._idx(l,h,i)]!==this.TYPES.WALL)return!1}let r=0;return i-1>=0&&this.matrix[this._idx(t,e,i-1)]!==this.TYPES.WALL&&r++,i+1<a&&this.matrix[this._idx(t,e,i+1)]!==this.TYPES.WALL&&r++,r===1}isSolvable(){const t=this.size,e={x:Math.floor(this.startPos.x),y:Math.floor(this.startPos.y),z:this.startPos.z},i=[];let n=null;for(let l=0;l<t;l++)for(let h=0;h<t;h++)for(let f=0;f<t;f++){const p=this.matrix[this._idx(l,h,f)];p===this.TYPES.KEY?i.push(`${l},${h},${f}`):p===this.TYPES.EXIT&&(n=`${l},${h},${f}`)}const a=[e],o=new Set([`${e.x},${e.y},${e.z}`]),r=new Set;let c=!1;for(;a.length>0;){const l=a.shift();if(!l)continue;const h=`${l.x},${l.y},${l.z}`;i.includes(h)&&r.add(h),h===n&&(c=!0);const f=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(const p of f){const g=l.x+p.dx,m=l.y+p.dy,v=l.z;if(g>=0&&g<t&&m>=0&&m<t){const d=`${g},${m},${v}`,u=this.matrix[this._idx(g,m,v)];u!==this.TYPES.WALL&&u!==this.TYPES.STATUE&&!o.has(d)&&(o.add(d),a.push({x:g,y:m,z:v}))}}for(const p of[-2,2]){const g=l.z+p;if(g>=0&&g<t){const m=l.z+p/2,v=this.matrix[this._idx(l.x,l.y,m)],d=this.matrix[this._idx(l.x,l.y,g)];if(v!==this.TYPES.WALL&&v!==this.TYPES.STATUE&&d!==this.TYPES.WALL&&d!==this.TYPES.STATUE){const u=`${l.x},${l.y},${g}`;o.has(u)||(o.add(u),a.push({x:l.x,y:l.y,z:g}))}}}}if(!c||r.size!==i.length)return!1;for(let l=0;l<t;l++)for(let h=0;h<t;h++)for(let f=1;f<t;f+=2){const p=this.matrix[this._idx(l,h,f)];if(p!==this.TYPES.WALL&&p!==this.TYPES.STATUE&&!o.has(`${l},${h},${f}`))return!1}return!0}placeStatues(){const t=this.size,e=[];for(let r=0;r<t;r++)for(let c=0;c<t;c++)for(let l=0;l<t;l++)this.isDeadEndZ(r,c,l)&&e.push({x:r,y:c,z:l});let i=0;const n=(r,c,l,h,f)=>{const p=this._idx(r,c,l),g=this.matrix[p];g!==h&&(this.matrix[p]=h,f.push({x:r,y:c,z:l,oldVal:g}))},a=r=>{for(let c=r.length-1;c>=0;c--){const l=r[c];this.matrix[this._idx(l.x,l.y,l.z)]=l.oldVal}},o=(r,c,l,h)=>{n(r,c,l,this.TYPES.STATUE,h);const f=l-1,p=l+1;f>=0&&n(r,c,f,this.TYPES.WALL,h),p<t&&n(r,c,p,this.TYPES.WALL,h);const g=[-2,2];for(const m of g){const v=l+m;v>=0&&v<t&&this.isDeadEndZ(r,c,v)&&o(r,c,v,h)}};for(const r of e){if(this.matrix[this._idx(r.x,r.y,r.z)]===this.TYPES.STATUE||!this.isDeadEndZ(r.x,r.y,r.z))continue;const c=[];if(o(r.x,r.y,r.z,c),this.isSolvable()){const l=c.filter(h=>h.oldVal!==this.TYPES.STATUE&&this.matrix[this._idx(h.x,h.y,h.z)]===this.TYPES.STATUE).length;i+=l}else a(c)}return i}placeManas(){const{deadEnds:t}=this._collectDeadEndsAndPaths();for(const e of t){const i=this._idx(e.x,e.y,e.z);if(this.matrix[i]===this.TYPES.PATH){let a=!1;e.z-1>=0&&this.matrix[this._idx(e.x,e.y,e.z-1)]!==this.TYPES.WALL&&(a=!0),e.z+1<this.size&&this.matrix[this._idx(e.x,e.y,e.z+1)]!==this.TYPES.WALL&&(a=!0),a||(this.matrix[i]=this.TYPES.MANA)}}}}class Qp{constructor(){D(this,"uiFloorSpan");D(this,"uiMap3dContainer");D(this,"uiMobileControls");D(this,"uiProximeterContainer");D(this,"uiProximeterCells");D(this,"uiProximeterBar");D(this,"uiVictoryScreen");D(this,"uiGameOverScreen");D(this,"uiMobileUp");D(this,"uiMobileDown");D(this,"uiMobileMap");D(this,"uiSavingIndicator");D(this,"savingIndicatorTimeout");D(this,"uiVisitedPercent");D(this,"uiHunterStatusVal");D(this,"uiStatusLabel");D(this,"uiMarqueeContainer");D(this,"uiLegendHunter");D(this,"uiCanvas");D(this,"uiKeysCollected");D(this,"uiKeysTotal");D(this,"uiKeysList");D(this,"uiPauseScreen");D(this,"uiMobilePauseBtn");D(this,"uiPathfindersRemaining");D(this,"uiPathfindersTotal");D(this,"uiControlsHintContent");D(this,"uiManaCollectedDesktop");D(this,"uiManaTotalDesktop");D(this,"uiManaCollectedMobile");D(this,"uiManaTotalMobile");D(this,"uiJellyPortalCountDesktop");D(this,"uiJellyPortalCountMobile");D(this,"uiMobileJellyPortalBtn");D(this,"onInfoBanner");D(this,"bannerMessage","");this.uiFloorSpan=document.getElementById("current-floor"),this.uiMap3dContainer=document.getElementById("map3d-container"),this.uiMobileControls=document.getElementById("mobile-controls"),this.uiProximeterContainer=document.getElementById("proximeter-container"),this.uiProximeterCells=document.querySelectorAll(".proximeter-cell"),this.uiProximeterBar=document.querySelector(".proximeter-bar"),this.uiVictoryScreen=document.getElementById("victory-screen"),this.uiGameOverScreen=document.getElementById("game-over-screen"),this.uiMobileUp=document.getElementById("mobile-up"),this.uiMobileDown=document.getElementById("mobile-down"),this.uiMobileMap=document.getElementById("mobile-map"),this.uiSavingIndicator=document.getElementById("saving-indicator"),this.savingIndicatorTimeout=null,this.uiVisitedPercent=document.getElementById("visited-percent"),this.uiHunterStatusVal=document.getElementById("hunter-status-val"),this.uiStatusLabel=document.querySelector("#hunter-status-panel .status-label"),this.uiMarqueeContainer=document.querySelector(".status-marquee-container"),this.uiLegendHunter=document.getElementById("legend-hunter"),this.uiCanvas=document.getElementById("main-2d-canvas"),this.uiKeysCollected=document.getElementById("keys-collected-count"),this.uiKeysTotal=document.getElementById("keys-total-count"),this.uiKeysList=document.getElementById("keys-list-container"),this.uiPauseScreen=document.getElementById("pause-screen"),this.uiMobilePauseBtn=document.getElementById("mobile-pause-btn"),this.uiPathfindersRemaining=document.getElementById("pathfinders-remaining-count"),this.uiPathfindersTotal=document.getElementById("pathfinders-total-count"),this.uiControlsHintContent=document.getElementById("controls-hint-content"),this.uiManaCollectedDesktop=document.getElementById("mana-collected-count-desktop"),this.uiManaTotalDesktop=document.getElementById("mana-total-count-desktop"),this.uiManaCollectedMobile=document.getElementById("mana-collected-count-mobile"),this.uiManaTotalMobile=document.getElementById("mana-total-count-mobile"),this.uiJellyPortalCountDesktop=document.getElementById("jelly-portal-count-desktop"),this.uiJellyPortalCountMobile=document.getElementById("jelly-portal-count-mobile"),this.uiMobileJellyPortalBtn=document.getElementById("mobile-jelly-portal-btn"),this.localizeDOM()}localizeDOM(t=Pn){rs(t)}showPause(){this.uiPauseScreen&&this.uiPauseScreen.classList.remove("hidden")}hidePause(){this.uiPauseScreen&&this.uiPauseScreen.classList.add("hidden")}showVictory(t=0,e=0,i=8,n=0,a=0,o=0){this.hideGameUI(),this.uiVictoryScreen&&this.uiVictoryScreen.classList.remove("hidden");const r=document.getElementById("victory-mana-count");r&&(r.innerText=`${a}/${o}`);const c=document.getElementById("victory-completion-rate");c&&(c.innerText=`${t}%`);const l=document.getElementById("victory-deaths-count");l&&(l.innerText=String(e));const h=document.getElementById("victory-maze-degree");h&&(h.innerText=String(i));const f=document.getElementById("victory-completion-time");if(f){const p=Math.floor(n/3600),g=Math.floor(n%3600/60),m=Math.floor(n%60),v=u=>String(u).padStart(2,"0"),d=p>0?`${v(p)}:${v(g)}:${v(m)}`:`${v(g)}:${v(m)}`;f.innerText=d}}showDeath(t=!1){this.hideGameUI(),this.uiGameOverScreen&&this.uiGameOverScreen.classList.remove("hidden");const e=document.getElementById("continue-btn-death");e&&(e.style.display=t?"":"none")}hideGameUI(){this.uiMobileControls&&this.uiMobileControls.classList.add("hidden"),this.uiMobilePauseBtn&&this.uiMobilePauseBtn.classList.add("hidden"),this.uiMap3dContainer&&this.uiMap3dContainer.classList.add("hidden"),this.uiProximeterContainer&&this.uiProximeterContainer.classList.add("hidden"),this.uiProximeterBar&&this.uiProximeterBar.classList.remove("critical-alert"),this.uiProximeterCells.forEach(t=>t.classList.remove("active")),this.uiCanvas&&this.uiCanvas.classList.remove("hunted-map-effect","nearby-map-effect")}initGameUI(t=!1){this.uiMobileControls&&this.uiMobileControls.classList.remove("hidden"),this.uiMobilePauseBtn&&this.uiMobilePauseBtn.classList.remove("hidden"),this.uiMobileMap&&(this.uiMobileMap.disabled=!0),t?(this.uiStatusLabel&&(this.uiStatusLabel.innerText="SAFE MODE:"),this.uiHunterStatusVal&&(this.uiHunterStatusVal.innerText="ACTIVE",this.uiHunterStatusVal.className="status-marquee-text status--scanning"),this.uiLegendHunter&&this.uiLegendHunter.classList.add("hidden")):(this.uiStatusLabel&&(this.uiStatusLabel.innerText="HUNTER STATUS:"),this.uiLegendHunter&&this.uiLegendHunter.classList.remove("hidden"))}updateVisitedPercent(t){this.uiVisitedPercent&&(this.uiVisitedPercent.innerText=String(t))}updateManaHUD(t,e){this.uiManaCollectedDesktop&&(this.uiManaCollectedDesktop.innerText=String(t)),this.uiManaTotalDesktop&&(this.uiManaTotalDesktop.innerText=String(e)),this.uiManaCollectedMobile&&(this.uiManaCollectedMobile.innerText=String(t)),this.uiManaTotalMobile&&(this.uiManaTotalMobile.innerText=String(e))}updateJellyPortalHUD(t){this.uiJellyPortalCountDesktop&&(this.uiJellyPortalCountDesktop.innerText=String(t)),this.uiJellyPortalCountMobile&&(this.uiJellyPortalCountMobile.innerText=String(t)),this.uiMobileJellyPortalBtn&&(t>0?this.uiMobileJellyPortalBtn.classList.add("jelly-portal-btn--active"):this.uiMobileJellyPortalBtn.classList.remove("jelly-portal-btn--active"))}updateFloor(t,e,i){if(this.uiFloorSpan){const n=(t+1)/2;this.uiFloorSpan.innerText=String(n)}this.uiMobileUp&&(this.uiMobileUp.disabled=!e),this.uiMobileDown&&(this.uiMobileDown.disabled=!i)}updateKeysHUD(t,e){if(this.uiKeysCollected&&(this.uiKeysCollected.innerText=String(t)),this.uiKeysTotal&&(this.uiKeysTotal.innerText=String(e)),this.uiKeysList){this.uiKeysList.innerHTML="";for(let i=0;i<e;i++){const n=document.createElement("span");n.className="key-dot"+(i<t?" key-dot--collected":""),this.uiKeysList.appendChild(n)}}}updatePathfindersHUD(t,e){this.uiPathfindersRemaining&&(this.uiPathfindersRemaining.innerText=String(t)),this.uiPathfindersTotal&&(this.uiPathfindersTotal.innerText=String(e))}showSavingIndicator(){this.uiSavingIndicator&&(this.savingIndicatorTimeout&&clearTimeout(this.savingIndicatorTimeout),this.uiSavingIndicator.classList.remove("hidden"),this.uiSavingIndicator.classList.add("saving-pulse"),this.savingIndicatorTimeout=window.setTimeout(()=>{this.uiSavingIndicator&&(this.uiSavingIndicator.classList.add("hidden"),this.uiSavingIndicator.classList.remove("saving-pulse"))},2e3))}showInfoBanner(t){this.bannerMessage=t,this.onInfoBanner&&this.onInfoBanner(t)}setMap3DVisible(t){this.uiMap3dContainer&&(t?this.uiMap3dContainer.classList.remove("hidden"):this.uiMap3dContainer.classList.add("hidden"))}updateHazardWarning(t,e,i=!1,n=!1){if(!this.uiHunterStatusVal)return;let a=Rt("statusScanning"),o="status--scanning",r=!1;i?(a=Rt("statusActive"),o="status--scanning"):n?(a=Rt("statusSleeping"),o="status--sleeping"):e>0?(a=Rt("statusConverging",{ticks:e}),o="status--converging",r=!0):t&&(a=Rt("statusTracking"),o="status--tracking",r=!0),this.uiHunterStatusVal.innerText!==a&&(this.uiHunterStatusVal.innerText=a,this.uiHunterStatusVal.className="status-marquee-text "+o),this.uiCanvas&&(r?this.uiCanvas.classList.add("hunted-map-effect"):this.uiCanvas.classList.remove("hunted-map-effect"))}setNearbyWarning(t){this.uiCanvas&&(t?this.uiCanvas.classList.add("nearby-map-effect"):this.uiCanvas.classList.remove("nearby-map-effect"))}updateProximeter(t,e,i){if(!this.uiProximeterContainer)return;if(e>0&&!i)this.uiProximeterContainer.classList.remove("hidden");else{this.uiProximeterContainer.classList.add("hidden");return}let n=0;t<=10&&(n=11-t),this.uiProximeterCells.forEach(a=>{parseInt(a.getAttribute("data-index")||"0")<=n?a.classList.add("active"):a.classList.remove("active")}),this.uiProximeterBar&&(n===10?this.uiProximeterBar.classList.add("critical-alert"):this.uiProximeterBar.classList.remove("critical-alert"))}updateMobileMapButton(t,e,i,n=!1){this.uiMobileMap&&i&&(t&&!e?(this.uiMobileMap.innerText=Rt("teleport"),n?(this.uiMobileMap.style.borderColor="#a020f0",this.uiMobileMap.style.color="#a020f0",this.uiMobileMap.style.background="rgba(160, 32, 240, 0.2)"):(this.uiMobileMap.style.borderColor="var(--clr-teleport, #ff8c00)",this.uiMobileMap.style.color="var(--clr-teleport, #ff8c00)",this.uiMobileMap.style.background="rgba(255, 140, 0, 0.2)")):(this.uiMobileMap.innerText=Rt("map"),this.uiMobileMap.style.borderColor="",this.uiMobileMap.style.color="",this.uiMobileMap.style.background=""))}updateControlsHint(t,e=!0){this.uiControlsHintContent&&(t==="gamepad"?this.uiControlsHintContent.innerHTML=`
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-round kbd-dark">LS</kbd>
                        <span style="color:var(--clr-text-dim);font-size:0.9em;margin:0 2px;">or</span>
                        <kbd class="kbd-dark">D-Pad</kbd>
                    </div>
                    <span class="hint-action">${Rt("actionMove")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-round kbd-a">A</kbd>
                        <span style="color:var(--clr-text-dim);font-size:0.9em;margin:0 2px;">/</span>
                        <kbd class="kbd-round kbd-y">Y</kbd>
                    </div>
                    <span class="hint-action">${Rt("actionElevator")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-dark" style="min-width: calc(var(--h-unit) * 3); min-width: calc(var(--d-h-unit) * 3);">Back</kbd>
                    </div>
                    <span class="hint-action">${Rt("actionMap")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-round kbd-b">B</kbd>
                    </div>
                    <span class="hint-action">${Rt("actionZoom")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-dark">RB</kbd>
                    </div>
                    <span class="hint-action">${Rt("actionJellyPortal")}</span>
                </div>
            `:this.uiControlsHintContent.innerHTML=`
                <div class="hint-row">
                    <div class="wasd-container">
                        <div class="wasd-row"><kbd>W</kbd></div>
                        <div class="wasd-row"><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></div>
                    </div>
                    <span class="hint-action">${Rt("actionMove")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>Q</kbd>
                        <span style="color:var(--clr-text-dim);font-size:0.9em;margin:0 2px;">/</span>
                        <kbd>E</kbd>
                    </div>
                    <span class="hint-action">${Rt("actionElevator")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>M</kbd>
                    </div>
                    <span class="hint-action">${Rt("actionMap")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>Z</kbd>
                    </div>
                    <span class="hint-action">${Rt("actionZoom")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>R</kbd>
                    </div>
                    <span class="hint-action">${Rt("actionJellyPortal")}</span>
                </div>
            `)}destroy(){this.savingIndicatorTimeout&&clearTimeout(this.savingIndicatorTimeout)}}class tm{constructor(){D(this,"keys");D(this,"touchStart");D(this,"touchMoveVector");D(this,"preventScrollKeys");D(this,"handleKeyDown");D(this,"handleKeyUp");D(this,"handleTouchStart");D(this,"handleTouchMove");D(this,"handleTouchEnd");this.keys={},this.touchStart=null,this.touchMoveVector=null,this.preventScrollKeys=["arrowup","arrowdown","arrowleft","arrowright"," ","pageup","pagedown"],this.handleKeyDown=null,this.handleKeyUp=null,this.handleTouchStart=null,this.handleTouchMove=null,this.handleTouchEnd=null,this.init()}init(){this.handleKeyDown=t=>{const e=t.key.toLowerCase();this.keys[e]=!0,this.preventScrollKeys.includes(e)&&t.preventDefault()},this.handleKeyUp=t=>{this.keys[t.key.toLowerCase()]=!1},window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp)}setupTouch(t,e){this.handleTouchStart=i=>{const n=i.target;t()||e()||n&&n.closest&&n.closest("button")||(i.cancelable&&i.preventDefault(),this.touchStart={x:i.touches[0].clientX,y:i.touches[0].clientY})},this.handleTouchMove=i=>{if(!this.touchStart||t()||e())return;i.cancelable&&i.preventDefault();const n=i.touches[0].clientX-this.touchStart.x,a=i.touches[0].clientY-this.touchStart.y,o=Math.sqrt(n*n+a*a);o>10&&(this.touchMoveVector={x:n/o,y:a/o})},this.handleTouchEnd=()=>{this.touchStart=null,this.touchMoveVector=null},window.addEventListener("touchstart",this.handleTouchStart,{passive:!1}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),window.addEventListener("touchend",this.handleTouchEnd)}destroy(){this.handleKeyDown&&window.removeEventListener("keydown",this.handleKeyDown),this.handleKeyUp&&window.removeEventListener("keyup",this.handleKeyUp),this.handleTouchStart&&window.removeEventListener("touchstart",this.handleTouchStart),this.handleTouchMove&&window.removeEventListener("touchmove",this.handleTouchMove),this.handleTouchEnd&&window.removeEventListener("touchend",this.handleTouchEnd)}}const Da="void-escape-save";function em(s){const t=new Uint8Array(s.buffer);let e="";for(let i=0;i<t.length;i++)e+=String.fromCharCode(t[i]);return btoa(e)}function im(s){const t=atob(s),e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return new Int8Array(e.buffer)}function nm(s){return{x:s.x,y:s.y,z:s.z,id:s.id,state:s.state,lastPos:s.lastPos?{...s.lastPos}:null,history:s.history.map(t=>({...t})),visitedNodes:Array.from(s.visitedNodes),pathToTarget:s.pathToTarget.map(t=>({...t}))}}function ns(s){try{const t={version:1,timestamp:Date.now(),degree:s.degree,branchingFactor:s.branchingFactor,isSafeMode:s.isSafeMode,seed:s.seed,mazeSize:s.mazeGen.size,mazeStartPos:{...s.mazeGen.startPos},matrix:em(s.mazeGen.matrix),player:{...s.player},hunters:s.hunters.map(nm),discoveredTeleports:Array.from(s.discoveredTeleports),inactiveTeleportPos:s.inactiveTeleportPos?{...s.inactiveTeleportPos}:null,teleportCooldownTicks:s.teleportCooldownTicks,revealedPathSet:Array.from(s.revealedPathSet),keysCollected:s.keysCollected,totalKeys:s.totalKeys,manaCollected:s.manaCollected,totalMana:s.totalMana,jellyPortalCount:s.jellyPortalCount,totalPathfinders:s.totalPathfinders,pathfindersRemaining:s.pathfindersRemaining,pathfinderRewardsGranted:s.pathfinderRewardsGranted!==void 0?s.pathfinderRewardsGranted:0,mapCompletion100Triggered:s.mapCompletion100Triggered||!1,dialogueUpTriggered:s.dialogueUpTriggered||!1,dialogueDownTriggered:s.dialogueDownTriggered||!1,dialogueWhichWayTriggered:s.dialogueWhichWayTriggered||!1,dialogueDetectedTriggered:s.dialogueDetectedTriggered||!1,hunterOnSameFloorDetected:s.hunterOnSameFloorDetected||!1,deathsCount:s.deathsCount!==void 0?s.deathsCount:0,elapsedTime:s.elapsedTime!==void 0?s.elapsedTime:0};localStorage.setItem(Da,JSON.stringify(t))}catch(t){console.warn("[SaveManager] Could not save game state:",t)}}function sl(){try{const s=localStorage.getItem(Da);if(!s)return null;const t=JSON.parse(s);return!t||t.version!==1?null:t}catch(s){return console.warn("[SaveManager] Could not load save data:",s),null}}function al(){localStorage.removeItem(Da)}function _o(){return sl()!==null}function sm(s,t){s.x=t.x,s.y=t.y,s.z=t.z,s.visualX=t.x,s.visualY=t.y,s.visualZ=t.z,s.state=t.state,s.lastPos=t.lastPos?{...t.lastPos}:null,s.history=t.history.map(e=>({...e})),s.visitedNodes=new Set(t.visitedNodes),s.pathToTarget=t.pathToTarget.map(e=>({...e}))}function am(s,t){const e=im(t);for(let i=0;i<e.length;i++)s.matrix[i]=e[i]}function aa(s,t,e){return Math.abs(t-s)<=e?t:s+Math.sign(t-s)*e}class yo{constructor(t,e,i=null){D(this,"degree");D(this,"branchingFactor");D(this,"isSafeMode");D(this,"vScale");D(this,"ui");D(this,"input");D(this,"canvas");D(this,"ctx");D(this,"seed");D(this,"mazeGen");D(this,"maze");D(this,"isResumedFromSave");D(this,"mapCompletion100Triggered");D(this,"hunterOnSameFloorDetected");D(this,"dialogueUpTriggered");D(this,"dialogueDownTriggered");D(this,"dialogueWhichWayTriggered");D(this,"dialogueDetectedTriggered");D(this,"wallImage");D(this,"floorImage");D(this,"keyImage");D(this,"manaImage");D(this,"statueImage");D(this,"mageImages");D(this,"playerSide");D(this,"playerVertical");D(this,"playerWalkCycle");D(this,"playerSquashTargetX");D(this,"playerSquashTargetY");D(this,"playerSquashX");D(this,"playerSquashY");D(this,"player");D(this,"hunters");D(this,"keyMeshes");D(this,"exitMesh");D(this,"keysCollected");D(this,"totalKeys");D(this,"manaCollected");D(this,"totalMana");D(this,"manaMeshes");D(this,"totalPathfinders");D(this,"pathfindersRemaining");D(this,"activeMapFloor");D(this,"visualActiveFloor");D(this,"mapCursor");D(this,"pathfinderRewardsGranted");D(this,"isometricCanvas");D(this,"isometricCtx");D(this,"floorClickRects");D(this,"teleportModalClickRects");D(this,"mapZoom");D(this,"mapPanOffsetX");D(this,"mapPanOffsetY");D(this,"isZoomTransitionActive");D(this,"zoomTransitionTimer");D(this,"preloadedStoryImages");D(this,"storyImagesLoadedCount");D(this,"storyImagesTotalCount");D(this,"storyImagesPreloadPromise");D(this,"lastFrameTime");D(this,"revealedPathSet");D(this,"activePathReveal");D(this,"revealedPathProgress");D(this,"knownMeshes");D(this,"gridMeshes");D(this,"pathRevealInterval");D(this,"pathfinderBlockedUntil");D(this,"isMap3DActive");D(this,"isGameOver");D(this,"deathAnimation");D(this,"notificationQueue");D(this,"activeNotification");D(this,"isPaused");D(this,"isDestroyed");D(this,"isIntroPlaying");D(this,"isStoryActive");D(this,"pulsatingMaterials");D(this,"hunterMeshes");D(this,"discoveredTeleports");D(this,"visitedCells");D(this,"lastSavePos");D(this,"suppressWakeHuntersBanner");D(this,"allTeleports");D(this,"vortexAngles");D(this,"isTouchDevice");D(this,"isMouseOrTouchDetected");D(this,"teleportGoBtnClickRect");D(this,"staticMapCacheCanvas");D(this,"staticMapCacheCtx");D(this,"staticMapCacheDirty");D(this,"zoomVisibleCells");D(this,"scene");D(this,"camera");D(this,"renderer");D(this,"controls");D(this,"teleportMeshes");D(this,"inactiveTeleportPos");D(this,"teleportCooldownTicks");D(this,"storyImages");D(this,"storyOpacity");D(this,"storyOverlayOpacity");D(this,"storyFrameIndex");D(this,"storyTimer");D(this,"storyTextQueue");D(this,"storyTextIndex");D(this,"storyDisplayedText");D(this,"storyState");D(this,"storyWaitTimer");D(this,"storyTextHeight");D(this,"storyWidthProgress");D(this,"storyCharIndex");D(this,"storyTypeTimer");D(this,"storyMsgIndex");D(this,"storyCloseProgress");D(this,"selectedTeleportIndex");D(this,"teleportConfirmModalActive");D(this,"teleportModalSelection");D(this,"teleportDotsClickRects");D(this,"isTeleportMode");D(this,"floorTransition");D(this,"hasSavePoint");D(this,"lastPlayerCell");D(this,"exitPathfinderUnlocked");D(this,"isZoomActive");D(this,"lastInputDevice");D(this,"fullyRevealedCells");D(this,"revealedCellsAnimation");D(this,"skipCellAnimations");D(this,"activeSkipHandler");D(this,"activeIntroTimer");D(this,"activeContinueTimer");D(this,"raycaster");D(this,"pointer");D(this,"handleKeyDownExtra");D(this,"handleKeyboardDetection");D(this,"handleResize");D(this,"handleStoryKeyDown");D(this,"handleStoryClick");D(this,"handleStoryTouch");D(this,"handleCanvasClick");D(this,"handlePointerDown");D(this,"handlePointerUp");D(this,"lastHunterMove");D(this,"lastLockedWarningTime");D(this,"prevGamepadButtons");D(this,"isPreloadingActive");D(this,"prevGamepadStick");D(this,"gamepadTeleportSelectedIndex");D(this,"deathsCount");D(this,"elapsedTime");if(this.degree=t!==void 0?t:Y.MAZE_DEGREE!==void 0?Y.MAZE_DEGREE:8,this.branchingFactor=e!==void 0?e:Y.BRANCHING_FACTOR!==void 0?Y.BRANCHING_FACTOR:.2,i)this.isSafeMode=i.isSafeMode??!1;else{const h=document.getElementById("safe-mode");this.isSafeMode=h?h.checked:!1}this.vScale=2,this.ui=new Qp,this.input=new tm,this.input.setupTouch(()=>this.isMap3DActive,()=>this.isGameOver),this.canvas=document.getElementById("main-2d-canvas"),this.ctx=this.canvas.getContext("2d"),this.seed=i?i.seed:Y.SEED!==null&&Y.SEED!==void 0?Y.SEED:Date.now(),this.mazeGen=new Jp(t,e,this.seed),this.maze=this.mazeGen.generate(),this.isResumedFromSave=!!i,this.deathsCount=i&&i.deathsCount||0,this.elapsedTime=i&&i.elapsedTime||0,this.mapCompletion100Triggered=!1,this.hunterOnSameFloorDetected=!1,this.dialogueUpTriggered=!1,this.dialogueDownTriggered=!1,this.dialogueWhichWayTriggered=!1,this.dialogueDetectedTriggered=!1,this.wallImage=new Image,this.wallImage.onload=()=>{this.staticMapCacheDirty=!0},this.wallImage.src="assets/images/wall.png",this.floorImage=new Image,this.floorImage.onload=()=>{this.staticMapCacheDirty=!0},this.floorImage.src="assets/images/floor.png",this.keyImage=new Image,this.keyImage.onload=()=>{this.staticMapCacheDirty=!0},this.keyImage.src="assets/images/key.png",this.manaImage=new Image,this.manaImage.onload=()=>{this.staticMapCacheDirty=!0},this.manaImage.src="assets/images/mana.png",this.statueImage=new Image,this.statueImage.onload=()=>{this.staticMapCacheDirty=!0},this.statueImage.src="assets/images/statue.png",this.mageImages={down_left:new Image,down_right:new Image,up_left:new Image,up_right:new Image};for(const h in this.mageImages)this.mageImages[h].onload=()=>{this.staticMapCacheDirty=!0},this.mageImages[h].src=`assets/images/mage_${h}.png`;this.playerSide="right",this.playerVertical="down",this.playerWalkCycle=0,this.playerSquashTargetX=1,this.playerSquashTargetY=1,this.playerSquashX=1,this.playerSquashY=1,this.player={x:this.mazeGen.startPos.x,y:this.mazeGen.startPos.y,z:this.mazeGen.startPos.z,dir:0},this.hunters=[],this.initHunters(t),this.keyMeshes=[],this.exitMesh=null,this.keysCollected=0,this.totalKeys=Y.getHunterCount(t)*2,this.totalPathfinders=Y.getPathfinderCount(t),this.pathfindersRemaining=this.totalPathfinders,this.activeMapFloor=1,this.visualActiveFloor=1,this.mapCursor={x:0,y:0,z:1},this.pathfinderRewardsGranted=0,this.isometricCanvas=null,this.isometricCtx=null,this.floorClickRects=[],this.mapZoom=1,this.mapPanOffsetX=0,this.isZoomTransitionActive=!1,this.zoomTransitionTimer=0,this.preloadedStoryImages=[],this.storyImagesLoadedCount=0,this.storyImagesTotalCount=0,this.storyImagesPreloadPromise=null,this.preloadStoryImages(),this.lastFrameTime=performance.now(),this.revealedPathSet=new Set,this.activePathReveal=[],this.revealedPathProgress=0,this.knownMeshes=[],this.gridMeshes=null,this.pathRevealInterval=null,this.pathfinderBlockedUntil=0,this.manaCollected=0,this.totalMana=0,this.manaMeshes=[];const n=this.mazeGen.size;for(let h=0;h<n;h++)for(let f=0;f<n;f++)for(let p=0;p<n;p++)this.maze.get(h,f,p)===this.mazeGen.TYPES.MANA&&this.totalMana++;this.jellyPortalCount=this.totalMana<10?1:Y.JELLY_PORTAL_COUNT||0,this.jellyPortalFreezeTimer=0,this.jellyPortalResetCells=new Set,this.jellyPortalResetDuration=1.5,this.jellyPortalResetElapsed=0,this.dyingHunters=[],this.ui.initGameUI(this.isSafeMode),this.ui.onInfoBanner=h=>this.queueNotification(h),this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.ui.updateManaHUD(this.manaCollected,this.totalMana),this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),this.ui.updateJellyPortalHUD(this.jellyPortalCount),this.isMap3DActive=!1,this.isGameOver=!1,this.deathAnimation=null,this.notificationQueue=[],this.activeNotification=null,this.isPaused=!1,this.isDestroyed=!1,this.isIntroPlaying=!1,this.isStoryActive=!1,this.pulsatingMaterials=[],this.hunterMeshes=[],this.discoveredTeleports=new Set,this.visitedCells=new Set,this.lastSavePos=null,this.suppressWakeHuntersBanner=!1;const a=Math.floor(this.player.x),o=Math.floor(this.player.y),r=this.player.z;this.discoveredTeleports.add(`${a},${o},${r}`),this.allTeleports=[];const c=this.mazeGen.size,l=this.mazeGen.TYPES;for(let h=1;h<c;h+=2)for(let f=0;f<c;f++)for(let p=0;p<c;p++)this.maze.get(p,f,h)===l.TELEPORT&&this.allTeleports.push({x:p,y:f,z:h});this.allTeleports.sort((h,f)=>h.z!==f.z?h.z-f.z:h.y!==f.y?h.y-f.y:h.x-f.x),this.selectedTeleportIndex=this.allTeleports.findIndex(h=>h.x===a&&h.y===o&&h.z===r),this.selectedTeleportIndex===-1&&(this.selectedTeleportIndex=0),this.teleportConfirmModalActive=!1,this.teleportModalSelection="go",this.isMouseOrTouchDetected=!1,this.teleportGoBtnClickRect=null,this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0,this.teleportMeshes=[],this.isTeleportMode=!1,this.teleportCooldownTicks=0,this.inactiveTeleportPos=null,this.floorTransition=null,this.hasSavePoint=!1,this.lastPlayerCell={x:a,y:o,z:r},this.exitPathfinderUnlocked=!1,this.isZoomActive=!0,this.zoomVisibleCells=11,this.lastInputDevice="keyboard",this.staticMapCacheCanvas=document.createElement("canvas"),this.staticMapCacheCtx=this.staticMapCacheCanvas.getContext("2d"),this.staticMapCacheDirty=!0,this.fullyRevealedCells=new Set,this.revealedCellsAnimation=new Map,this.vortexAngles=new Map,this.skipCellAnimations=!0,this.populateFullyRevealedCells(this.player.z),this.activeSkipHandler=null,this.activeIntroTimer=null,this.activeContinueTimer=null,this.raycaster=new Hp,this.pointer=new Bt,this.exitPathfinderUnlocked=this.checkExitNeighborVisited(),this.initThree(),this.populateVisitedCells(),this.init(i)}populateVisitedCells(){this.visitedCells.clear();const t=this.mazeGen.size;for(let e=0;e<t;e++)for(let i=0;i<t;i++)for(let n=0;n<t;n++){const a=this.maze.get(e,i,n);(a===2||a===3||a===5)&&this.visitedCells.add(`${e},${i},${n}`)}}destroy(){this.isDestroyed=!0,this.hideGameUI(),this.input.destroy(),this.ui.destroy(),window.removeEventListener("keydown",this.handleKeyDownExtra),this.handleKeyboardDetection&&window.removeEventListener("keydown",this.handleKeyboardDetection),window.removeEventListener("resize",this.handleResize),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this.activeIntroTimer&&(clearTimeout(this.activeIntroTimer),this.activeIntroTimer=null),this.activeContinueTimer&&(clearTimeout(this.activeContinueTimer),this.activeContinueTimer=null),this.handleStoryKeyDown&&(window.removeEventListener("keydown",this.handleStoryKeyDown),this.handleStoryKeyDown=null);const t=document.getElementById("story-screen");t&&(this.handleStoryClick&&(t.removeEventListener("click",this.handleStoryClick),this.handleStoryClick=null),this.handleStoryTouch&&(t.removeEventListener("touchstart",this.handleStoryTouch),this.handleStoryTouch=null),t.classList.add("hidden")),this.controls&&this.controls.dispose(),this.renderer&&this.renderer.domElement&&(this.renderer.domElement.removeEventListener("click",this.handleCanvasClick),this.renderer.domElement.removeEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.removeEventListener("pointerup",this.handlePointerUp)),this.renderer&&(this.renderer.dispose(),this.renderer.domElement.remove()),this.ui.uiMobileUp&&(this.ui.uiMobileUp.onclick=null),this.ui.uiMobileDown&&(this.ui.uiMobileDown.onclick=null),this.ui.uiMobileMap&&(this.ui.uiMobileMap.onclick=null),this.pathRevealInterval&&clearInterval(this.pathRevealInterval)}preloadStoryImages(){const t=["assets/images/presentation/1-mystical-church-of-chaos.jpg","assets/images/presentation/2-mystical-church-of-chaos.jpg","assets/images/presentation/3-the-jelly-god.jpg","assets/images/presentation/4-player-alone.jpg","assets/images/presentation/5-player-thrown.jpg"];this.storyImagesLoadedCount=0,this.storyImagesTotalCount=t.length,this.storyImagesPreloadPromise=Promise.all(t.map((e,i)=>new Promise(n=>{const a=new Image;a.src=e,a.onload=()=>{this.preloadedStoryImages[i]=a,this.storyImagesLoadedCount++,n()},a.onerror=()=>{console.warn(`Failed to preload story image: ${e}`),n()}})))}initHunters(t){const e=this.isSafeMode?0:Y.getHunterCount(t);if(e!==0){for(let i=1;i<=e;i++)this.hunters.push(new Zp(this.mazeGen,null,i));this.lastHunterMove=performance.now()}}wakeHunters(){const t=this.mazeGen.size,e=[],i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,o=Math.floor(this.mazeGen.startPos.x),r=Math.floor(this.mazeGen.startPos.y),c=this.mazeGen.startPos.z;for(let m=0;m<t;m++)for(let v=0;v<t;v++)for(let d=0;d<t;d++){const u=m===o&&v===r&&d===c;this.maze.get(m,v,d)===this.mazeGen.TYPES.PATH&&d%2!==0&&!u&&e.push({x:m,y:v,z:d})}if(e.length===0)for(let m=0;m<t;m++)for(let v=0;v<t;v++)for(let d=0;d<t;d++){const u=this.maze.get(m,v,d),y=m===o&&v===r&&d===c,_=u===this.mazeGen.TYPES.EXIT;u!==this.mazeGen.TYPES.WALL&&!_&&d%2!==0&&(m!==i||v!==n||d!==a)&&!y&&e.push({x:m,y:v,z:d})}for(let m=e.length-1;m>0;m--){const v=Math.floor(Math.random()*(m+1)),d=e[m];e[m]=e[v],e[v]=d}const l=(m,v)=>Math.abs(m.x-v.x)+Math.abs(m.y-v.y)+Math.abs(m.z-v.z),h=[],f=this.hunters.filter(m=>m.state==="SLEEP");let p=Math.max(3,Math.floor(t*.45)),g=4;for(;h.length<f.length&&p>0;){h.length=0;const m=e.filter(v=>l(v,{x:i,y:n,z:a})>=p);for(let v=0;v<f.length;v++){let d=null;for(const u of m){if(h.some(_=>_.x===u.x&&_.y===u.y&&_.z===u.z))continue;let y=!0;for(const _ of h)if(l(u,_)<g){y=!1;break}if(y){d=u;break}}if(d)h.push(d);else break}h.length<f.length&&(g>1?g--:p--)}if(h.length<f.length)for(const m of e){if(h.length>=f.length)break;h.some(v=>v.x===m.x&&v.y===m.y&&v.z===m.z)||h.push(m)}for(let m=0;m<f.length&&m<h.length;m++){const v=f[m],d=h[m];v.x=d.x,v.y=d.y,v.z=d.z,v.visualX=d.x,v.visualY=d.y,v.visualZ=d.z,v.lastPos={x:d.x,y:d.y,z:d.z},v.state="WANDERING",v.visitedNodes.clear(),v.visitedNodes.add(`${d.x},${d.y},${d.z}`),v.history=[]}this.suppressWakeHuntersBanner||this.ui.showInfoBanner(Rt("msgVoidHuntersDetected")),this.suppressWakeHuntersBanner=!1,this.staticMapCacheDirty=!0,this.isMap3DActive&&this.build3DMap()}getExitPos(){for(let t=0;t<this.mazeGen.size;t++)for(let e=0;e<this.mazeGen.size;e++)for(let i=0;i<this.mazeGen.size;i++)if(this.maze.get(t,e,i)===this.mazeGen.TYPES.EXIT)return{x:t,y:e,z:i};return{x:1,y:1,z:1}}triggerSave(){ns(this),this.hasSavePoint=!0,this.lastSavePos={x:this.player.x,y:this.player.y,z:this.player.z},this.ui.showSavingIndicator()}tryActivateJellyPortal(){if(this.isGameOver||this.isPaused||this.isIntroPlaying||this.isStoryActive||this.jellyPortalFreezeTimer>0)return;const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=this.maze.get(t,e,i),a=i<this.mazeGen.size-1&&this.maze.get(t,e,i+1)!==this.mazeGen.TYPES.WALL,o=i>0&&this.maze.get(t,e,i-1)!==this.mazeGen.TYPES.WALL,r=a||o,c=t===Math.floor(this.mazeGen.startPos.x)&&e===Math.floor(this.mazeGen.startPos.y)&&i===this.mazeGen.startPos.z,l=n===this.mazeGen.TYPES.TELEPORT;if(r||l||c||n!==this.mazeGen.TYPES.VISITED){this.ui.showInfoBanner(Rt("msgJellyPortalNotHere"));return}if(this.jellyPortalCount<=0){this.ui.showInfoBanner(Rt("msgJellyPortalNoPortalCount"));return}this.jellyPortalCount--,this.ui.updateJellyPortalHUD(this.jellyPortalCount),this.maze.set(t,e,i,this.mazeGen.TYPES.JELLY_PORTAL);const h=`${t},${e},${i}`;this.discoveredTeleports.add(h),this.allTeleports.push({x:t,y:e,z:i}),this.allTeleports.sort((p,g)=>p.z!==g.z?p.z-g.z:p.x!==g.x?p.x-g.x:p.y-g.y),this.selectedTeleportIndex=this.allTeleports.findIndex(p=>p.x===t&&p.y===e&&p.z===i),this.staticMapCacheDirty=!0,this.ui.showInfoBanner(Rt("msgJellyPortalActivated")),this.triggerSave(),this.jellyPortalFreezeTimer=1.5,this.jellyPortalResetElapsed=0,this.jellyPortalResetCells.clear();const f=this.mazeGen.size;for(let p=0;p<f;p++)for(let g=0;g<f;g++)Math.abs(p-t)+Math.abs(g-e)<=5&&this.maze.get(p,g,i)!==this.mazeGen.TYPES.WALL&&this.jellyPortalResetCells.add(`${p},${g}`);this.dyingHunters=[];for(const p of this.hunters)p.state!=="SLEEP"&&p.z===i&&Math.abs(p.x-t)+Math.abs(p.y-e)<=5&&(p.state="DYING",this.dyingHunters.push(p))}executeJellyPortalReset(t,e,i){const n=this.mazeGen.size,a=this.mazeGen.TYPES,o=Math.floor(this.mazeGen.startPos.x),r=Math.floor(this.mazeGen.startPos.y),c=this.mazeGen.startPos.z;for(let l=0;l<n;l++)for(let h=0;h<n;h++){const f=Math.abs(l-t)+Math.abs(h-e);if(f<=5){const p=this.maze.get(l,h,i),g=`${l},${h},${i}`;if(p===a.STATUE)continue;if(p===a.WALL){let m=!1;for(const[v,d]of[[1,0],[-1,0],[0,1],[0,-1]]){const u=l+v,y=h+d;if(u>=0&&u<n&&y>=0&&y<n&&this.maze.get(u,y,i)===a.STATUE){m=!0;break}}if(m)continue}if(l===o&&h===r&&i===c||l===t&&h===e)continue;if(this.visitedCells.delete(g),this.fullyRevealedCells.delete(g),this.revealedCellsAnimation.delete(g),f===1){(p===a.VISITED||p===a.ELEVATOR_VISITED)&&this.maze.set(l,h,i,a.PATH),p===a.TELEPORT&&this.discoveredTeleports.delete(g);continue}p===a.VISITED||p===a.ELEVATOR_VISITED?this.maze.set(l,h,i,a.PATH):p===a.TELEPORT&&this.discoveredTeleports.delete(g)}}this.dyingHunters.length>0&&(this.respawnDyingHunters(),this.dyingHunters=[]),this.staticMapCacheDirty=!0,this.triggerSave()}respawnDyingHunters(){const t=this.mazeGen.size,e=[],i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,o=Math.floor(this.mazeGen.startPos.x),r=Math.floor(this.mazeGen.startPos.y),c=this.mazeGen.startPos.z;for(let h=0;h<t;h++)for(let f=0;f<t;f++)for(let p=0;p<t;p++){const g=h===o&&f===r&&p===c,m=this.maze.get(h,f,p)===this.mazeGen.TYPES.EXIT;if(this.maze.get(h,f,p)===this.mazeGen.TYPES.PATH&&p%2!==0&&!g&&!m){if(p===a&&Math.abs(h-i)+Math.abs(f-n)<=5)continue;e.push({x:h,y:f,z:p})}}if(e.length===0)for(let h=0;h<t;h++)for(let f=0;f<t;f++)for(let p=0;p<t;p++){const g=this.maze.get(h,f,p),m=h===o&&f===r&&p===c,v=g===this.mazeGen.TYPES.EXIT;if(g!==this.mazeGen.TYPES.WALL&&!v&&p%2!==0&&!m&&(h!==i||f!==n||p!==a)){if(p===a&&Math.abs(h-i)+Math.abs(f-n)<=5)continue;e.push({x:h,y:f,z:p})}}for(let h=e.length-1;h>0;h--){const f=Math.floor(Math.random()*(h+1)),p=e[h];e[h]=e[f],e[f]=p}let l=0;for(const h of this.dyingHunters)if(l<e.length){const f=e[l++];h.x=f.x,h.y=f.y,h.z=f.z,h.visualX=f.x,h.visualY=f.y,h.visualZ=f.z,h.lastPos={x:f.x,y:f.y,z:f.z},h.state="WANDERING",h.visitedNodes.clear(),h.visitedNodes.add(`${f.x},${f.y},${f.z}`),h.history=[],h.pathToTarget=[]}}triggerVictory(){this.isGameOver=!0,al();const t=this.getMapVisitedPercentage();this.ui.showVictory(t,this.deathsCount,this.degree,this.elapsedTime,this.manaCollected,this.totalMana)}triggerDeath(){this.isGameOver=!0,this.ui.showDeath(this.hasSavePoint)}collectKey(t,e,i){if(this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${t},${e},${i}`),this.keysCollected++,this.staticMapCacheDirty=!0,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.ui.showInfoBanner(Rt("msgKeySecured",{collected:this.keysCollected,total:this.totalKeys})),this.keysCollected===this.totalKeys&&(this.ui.showInfoBanner(Rt("msgExitUnlocked")),this.exitMesh)){this.exitMesh.material.color.setHex(Y.COLORS.THREE_EXIT),this.exitMesh.material.emissive.setHex(Y.COLORS.THREE_EXIT),this.exitMesh.material.emissiveIntensity=.5;const n=this.exitMesh.children[0];n&&this.exitMesh.remove(n)}}collectMana(t,e,i){this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${t},${e},${i}`),this.manaCollected++,this.staticMapCacheDirty=!0,this.ui.updateManaHUD(this.manaCollected,this.totalMana),this.ui.showInfoBanner(Rt("msgManaSecured",{collected:this.manaCollected,total:this.totalMana})),this.manaCollected%10===0&&(this.jellyPortalCount++,this.ui.updateJellyPortalHUD(this.jellyPortalCount),setTimeout(()=>{this.ui.showInfoBanner(Rt("msgJellyPortalEarned"))},1200))}triggerLockedExitWarning(){const t=Date.now();if(!this.lastLockedWarningTime||t-this.lastLockedWarningTime>1500){this.lastLockedWarningTime=t;const e=this.totalKeys-this.keysCollected;this.ui.showInfoBanner(Rt("msgKeysRemaining",{count:e}))}}restoreFromSave(t){this.seed=t.seed,am(this.mazeGen,t.matrix),this.player.x=t.player.x,this.player.y=t.player.y,this.player.z=t.player.z,this.player.dir=t.player.dir;for(let l=0;l<this.hunters.length&&l<t.hunters.length;l++)sm(this.hunters[l],t.hunters[l]);this.discoveredTeleports=new Set(t.discoveredTeleports),this.inactiveTeleportPos=t.inactiveTeleportPos,this.teleportCooldownTicks=t.teleportCooldownTicks,this.allTeleports=[];const e=this.mazeGen.size,i=this.mazeGen.TYPES;for(let l=1;l<e;l+=2)for(let h=0;h<e;h++)for(let f=0;f<e;f++){const p=this.maze.get(f,h,l);(p===i.TELEPORT||p===i.JELLY_PORTAL)&&this.allTeleports.push({x:f,y:h,z:l})}this.allTeleports.sort((l,h)=>l.z!==h.z?l.z-h.z:l.y!==h.y?l.y-h.y:l.x-h.x);const n=Math.floor(this.player.x),a=Math.floor(this.player.y),o=this.player.z;this.selectedTeleportIndex=this.allTeleports.findIndex(l=>l.x===n&&l.y===a&&l.z===o),this.selectedTeleportIndex===-1&&(this.selectedTeleportIndex=0),this.keysCollected=t.keysCollected!==void 0?t.keysCollected:0,this.totalKeys=t.totalKeys!==void 0?t.totalKeys:Y.getHunterCount(this.degree)*2,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.manaCollected=t.manaCollected!==void 0?t.manaCollected:0,this.totalMana=t.totalMana!==void 0?t.totalMana:0,this.ui.updateManaHUD(this.manaCollected,this.totalMana),this.jellyPortalCount=t.jellyPortalCount!==void 0?t.jellyPortalCount:this.totalMana<10?1:0,this.ui.updateJellyPortalHUD(this.jellyPortalCount),this.totalPathfinders=t.totalPathfinders!==void 0?t.totalPathfinders:Y.getPathfinderCount(this.degree),this.pathfindersRemaining=t.pathfindersRemaining!==void 0?t.pathfindersRemaining:this.totalPathfinders,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders);const r=this.degree>=12?10:this.degree>=8?20:0,c=this.getMapVisitedPercentage();this.pathfinderRewardsGranted=t.pathfinderRewardsGranted!==void 0?t.pathfinderRewardsGranted:r>0?Math.floor(c/r):0,this.revealedPathSet=new Set(t.revealedPathSet),this.mapCompletion100Triggered=t.mapCompletion100Triggered||!1,this.dialogueUpTriggered=t.dialogueUpTriggered||!1,this.dialogueDownTriggered=t.dialogueDownTriggered||!1,this.dialogueWhichWayTriggered=t.dialogueWhichWayTriggered||!1,this.dialogueDetectedTriggered=t.dialogueDetectedTriggered||!1,this.deathsCount=t.deathsCount!==void 0?t.deathsCount:0,this.elapsedTime=t.elapsedTime!==void 0?t.elapsedTime:0,this.populateVisitedCells(),this.lastSavePos={x:t.player.x,y:t.player.y,z:t.player.z},this.hunterOnSameFloorDetected=t.hunterOnSameFloorDetected||!1,this.hasSavePoint=!0,this.lastPlayerCell={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.populateFullyRevealedCells(this.player.z),this.exitPathfinderUnlocked=this.checkExitNeighborVisited()}checkHunterCollision(){if(this.deathAnimation&&this.deathAnimation.active)return;const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=Math.floor(this.mazeGen.startPos.x),a=Math.floor(this.mazeGen.startPos.y),o=this.mazeGen.startPos.z,r=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===n&&this.inactiveTeleportPos.y===a&&this.inactiveTeleportPos.z===o;if(!(t===n&&e===a&&i===o&&!r)){for(const c of this.hunters)if(c.state!=="SLEEP"&&c.x===t&&c.y===e&&c.z===i){c.visualX=c.x,c.visualY=c.y,c.visualZ=c.z,this.isGameOver=!0,this.deathsCount++,this.hideGameUI(),this.ui.showInfoBanner(Rt("msgKeyDropped")),this.deathAnimation={active:!0,hunter:c,playerPos:{x:this.player.x,y:this.player.y,z:this.player.z},elapsed:0,duration:1.8,screenFilled:!1,reversing:!1,delayElapsed:0,delayDuration:1.5,glitchElapsed:0,glitchDuration:1.5,uiFade:0,uiTriggered:!1};return}}}hideGameUI(){this.ui.hideGameUI(),this.ui.hidePause(),this.canvas.classList.remove("hunted-map-effect"),this.isMap3DActive=!1}initThree(){this.scene=new Gp,this.camera=new Fe(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new Qo({antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.appendChild(this.renderer.domElement),this.controls=new Wp(this.camera,this.renderer.domElement),this.controls.enableDamping=!0}init(t=null){this.handleKeyDownExtra=c=>{const l=c.key.toLowerCase();if(l==="escape"){if(this.isMap3DActive){this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D(),c.preventDefault();return}this.togglePause();return}if(!this.isPaused&&(l==="m"&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D()),l==="z"&&this.toggleZoom(),this.isMap3DActive&&!this.isIntroPlaying)){if(this.isTeleportMode){if(this.teleportConfirmModalActive){if((l==="a"||l==="arrowleft"||l==="d"||l==="arrowright")&&(this.teleportModalSelection=this.teleportModalSelection==="go"?"cancel":"go",c.preventDefault()),l==="enter"||l===" "||l==="y"){if(this.teleportModalSelection==="go"&&this.selectedTeleportIndex!==null){const f=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(f.x,f.y,f.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;c.preventDefault()}(l==="escape"||l==="backspace")&&(this.teleportConfirmModalActive=!1,c.preventDefault());return}const h=this.getSelectableTeleportIndices();if(h.length>0){let f=h.indexOf(this.selectedTeleportIndex);if(l==="a"||l==="arrowleft"){f=(f-1+h.length)%h.length,this.selectedTeleportIndex=h[f];const p=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=p.z,this.mapCursor={x:p.x,y:p.y,z:p.z},c.preventDefault()}if(l==="d"||l==="arrowright"){f=(f+1)%h.length,this.selectedTeleportIndex=h[f];const p=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=p.z,this.mapCursor={x:p.x,y:p.y,z:p.z},c.preventDefault()}if((l==="enter"||l===" "||l==="y")&&this.selectedTeleportIndex!==null){const p=this.allTeleports[this.selectedTeleportIndex],g=Math.floor(this.player.x),m=Math.floor(this.player.y),v=this.player.z,d=p&&p.x===g&&p.y===m&&p.z===v;p&&!d&&(this.teleportTo(p.x,p.y,p.z),this.toggleTeleportMap(!1)),c.preventDefault()}}(l==="escape"||l==="backspace")&&(this.toggleTeleportMap(!1),c.preventDefault());return}if((l==="q"||l==="pagedown")&&(this.activeMapFloor-2>=1&&(this.activeMapFloor-=2),c.preventDefault()),(l==="e"||l==="pageup")&&(this.activeMapFloor+2<=this.mazeGen.size-2&&(this.activeMapFloor+=2),c.preventDefault()),(l==="a"||l==="arrowleft")&&(this.navigateCursor("left"),c.preventDefault()),(l==="d"||l==="arrowright")&&(this.navigateCursor("right"),c.preventDefault()),(l==="w"||l==="arrowup")&&(this.navigateCursor("up"),c.preventDefault()),(l==="s"||l==="arrowdown")&&(this.navigateCursor("down"),c.preventDefault()),l==="enter"||l===" "||l==="y"){const h=this.mapCursor.x,f=this.mapCursor.y,p=this.mapCursor.z;this.getInteractiveElements(this.activeMapFloor).some(v=>v.x===h&&v.y===f&&v.z===p)&&this.triggerPathReveal(h,f,p),c.preventDefault()}}},this.handleResize=()=>this.resize(),this.handleKeyboardDetection=()=>{this.lastInputDevice!=="keyboard"&&(this.lastInputDevice="keyboard",this.ui.updateControlsHint("keyboard",this.mazeGen.size>11)),this.isMouseOrTouchDetected=!1},window.addEventListener("keydown",this.handleKeyDownExtra),window.addEventListener("keydown",this.handleKeyboardDetection),window.addEventListener("resize",this.handleResize);const e=document.getElementById("mobile-zoom-btn");e&&(e.onclick=c=>{c.stopPropagation(),this.toggleZoom()}),this.ui.uiMobileUp&&(this.ui.uiMobileUp.onclick=()=>this.changeFloor(2)),this.ui.uiMobileDown&&(this.ui.uiMobileDown.onclick=()=>this.changeFloor(-2)),this.ui.uiMobileMap&&(this.ui.uiMobileMap.onclick=()=>{if(this.isMap3DActive){this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D();return}const c=Math.floor(this.player.x),l=Math.floor(this.player.y),h=this.player.z,f=this.maze.get(c,l,h)===this.mazeGen.TYPES.JELLY_PORTAL,p=this.maze.get(c,l,h)===this.mazeGen.TYPES.TELEPORT||f,g=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===c&&this.inactiveTeleportPos.y===l&&this.inactiveTeleportPos.z===h;p&&!g?this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(Rt("msgNoOtherActiveTeleport")):this.toggleMap3D()});let i=!1,n=0,a=0;this.handlePointerDown=c=>{i=!1,n=c.clientX,a=c.clientY},this.handlePointerUp=c=>{const l=c.clientX-n,h=c.clientY-a;Math.sqrt(l*l+h*h)>5&&(i=!0)},this.handleCanvasClick=c=>{i||this.onCanvasClick(c)},this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerup",this.handlePointerUp),this.renderer.domElement.addEventListener("click",this.handleCanvasClick),this.resize(),this.updateFloorUI(),this.hideCanvasInstant(),t?(this.restoreFromSave(t),this.playContinueAnimation()):this.startStorytelling(),this.loop();const o=this.mazeGen.size,r=document.getElementById("mobile-zoom-btn");o<=11?r&&r.classList.add("hidden"):r&&r.classList.remove("hidden"),this.ui.updateControlsHint(this.lastInputDevice,o>11)}hideCanvasInstant(){const t=document.getElementById("map-area-container"),e=document.getElementById("left-hud-panel"),i=document.getElementById("right-hud-panel"),n=document.getElementById("bottom-hud-container");t&&(t.style.transition="none",t.classList.remove("intro-reveal"),t.classList.add("intro-hidden"),t.offsetHeight,t.style.transition=""),e&&(e.style.transition="none",e.classList.remove("intro-reveal"),e.classList.add("intro-hidden"),e.offsetHeight,e.style.transition=""),i&&(i.style.transition="none",i.classList.remove("intro-reveal"),i.classList.add("intro-hidden"),i.offsetHeight,i.style.transition=""),n&&(n.style.transition="none",n.classList.remove("intro-reveal"),n.classList.add("intro-hidden"),n.offsetHeight,n.style.transition="")}drawElevator2D(t,e,i,n,a,o,r,c,l=!1,h=0){const f=e===Math.floor(r)&&i===Math.floor(c);if(f){const d=.85+.15*Math.sin(Date.now()/150);t.save(),t.globalAlpha=d}const p=a&&this.maze.get(e,i,h+1)===this.mazeGen.TYPES.ELEVATOR_VISITED,g=o&&this.maze.get(e,i,h-1)===this.mazeGen.TYPES.ELEVATOR_VISITED;if(l)if(a&&o){let d=!1,u=!1;if(this.activePathReveal){const M=this.activePathReveal.findIndex(T=>T.x===e&&T.y===i&&T.z===h);if(M!==-1&&M<this.activePathReveal.length-1){const T=this.activePathReveal[M+1];T.z>h&&(d=!0),T.z<h&&(u=!0)}}!d&&!u&&(d=this.revealedPathSet.has(`${e},${i},${h+1}`)||this.revealedPathSet.has(`${e},${i},${h+2}`),u=this.revealedPathSet.has(`${e},${i},${h-1}`)||this.revealedPathSet.has(`${e},${i},${h-2}`));const y=d||!d&&!u,_=u||!d&&!u;t.fillStyle=y?Y.COLORS.REVEALED_PATH:p?Y.COLORS.NEON_UP:Y.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n/2),t.fillStyle=_?Y.COLORS.REVEALED_PATH:g?Y.COLORS.NEON_DOWN:Y.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n+n/2,n,n/2)}else t.fillStyle=Y.COLORS.REVEALED_PATH,t.fillRect(e*n,i*n,n,n);else a&&o?(t.fillStyle=p?Y.COLORS.NEON_UP:Y.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n/2),t.fillStyle=g?Y.COLORS.NEON_DOWN:Y.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n+n/2,n,n/2)):a?(t.fillStyle=p?Y.COLORS.NEON_UP:Y.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n)):(t.fillStyle=g?Y.COLORS.NEON_DOWN:Y.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n,n,n));const m=e*n+n/2,v=i*n+n/2;if(t.fillStyle="#000000",a&&o){const d=n*.28,u=v-n/5,y=v+n/5;t.beginPath(),t.moveTo(m,u-d/2),t.lineTo(m-d*.6,u+d/2),t.lineTo(m+d*.6,u+d/2),t.closePath(),t.fill(),t.beginPath(),t.moveTo(m,y+d/2),t.lineTo(m-d*.6,y-d/2),t.lineTo(m+d*.6,y-d/2),t.closePath(),t.fill()}else if(a){const d=n*.45;t.beginPath(),t.moveTo(m,v-d/2),t.lineTo(m-d*.6,v+d/2),t.lineTo(m+d*.6,v+d/2),t.closePath(),t.fill()}else{const d=n*.45;t.beginPath(),t.moveTo(m,v+d/2),t.lineTo(m-d*.6,v-d/2),t.lineTo(m+d*.6,v-d/2),t.closePath(),t.fill()}f&&t.restore()}drawCellShadow2D(t,e,i,n,a,o,r){if(o===4)return;const c=(p,g)=>p<0||p>=a||g<0||g>=a?!1:this.maze.get(p,g,r)===0&&(this.isNearVisited(p,g,r)||this.isAdjacentToStatue(p,g,r)),l=c(e,i+1),h=c(e+1,i),f=c(e+1,i+1);if(l||h||f){t.fillStyle="rgba(0, 0, 0, 0.4)";const p=n*Y.SHADOW_SIZE_FACTOR;if(l&&t.fillRect(e*n,(i+1)*n-p,n,p),h){const g=l?n-p:n;t.fillRect((e+1)*n-p,i*n,p,g)}!l&&!h&&f&&t.fillRect((e+1)*n-p,(i+1)*n-p,p,p)}}updateRendererSize(){this.renderer&&(this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix())}resize(){const e=window.innerHeight>window.innerWidth?window.innerWidth*.82:window.innerHeight*.75;this.canvas.width=e,this.canvas.height=e,this.staticMapCacheDirty=!0,this.updateRendererSize()}getMapVisitedPercentage(){let t=0,e=0;const i=this.mazeGen.size,n=this.mazeGen.TYPES;for(let a=0;a<i;a++)for(let o=0;o<i;o++)for(let r=0;r<i;r++){const c=this.maze.get(a,o,r);if(c===n.WALL||c===n.EXIT||c===n.STATUE)continue;t++,(c===n.VISITED||c===n.START||c===n.ELEVATOR_VISITED||c===n.TELEPORT&&this.discoveredTeleports.has(`${a},${o},${r}`))&&e++}return t===0?0:Math.floor(e/t*100)}updateFloorUI(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=i+1<this.mazeGen.size&&this.maze.get(t,e,i+1)!==this.mazeGen.TYPES.WALL,a=i-1>=0&&this.maze.get(t,e,i-1)!==this.mazeGen.TYPES.WALL;this.ui.updateFloor(i,n,a);const o=this.getMapVisitedPercentage();this.ui.updateVisitedPercent(o),o===100&&!this.mapCompletion100Triggered&&(this.ui.showInfoBanner(Rt("msgWorldSaved")),this.mapCompletion100Triggered=!0),this.checkPathfinderRewards(o)}checkPathfinderRewards(t){const e=this.degree>=12?10:this.degree>=8?20:0;if(e===0)return;this.pathfinderRewardsGranted===void 0&&(this.pathfinderRewardsGranted=0);const i=Math.floor(t/e);if(i>this.pathfinderRewardsGranted){const n=i-this.pathfinderRewardsGranted;this.pathfindersRemaining+=n,this.totalPathfinders+=n,this.pathfinderRewardsGranted=i,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),this.ui.showInfoBanner(Rt("msgFoundPathfinder")),ns(this)}}getTeleportCandidates(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z;return Array.from(this.discoveredTeleports).map(n=>{const[a,o,r]=n.split(",").map(Number);return{x:a,y:o,z:r}}).filter(n=>!(n.x===t&&n.y===e&&n.z===i||this.inactiveTeleportPos&&this.inactiveTeleportPos.x===n.x&&this.inactiveTeleportPos.y===n.y&&this.inactiveTeleportPos.z===n.z))}getSelectableTeleportIndices(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z;return this.allTeleports.map((n,a)=>({t:n,idx:a})).filter(n=>{const a=`${n.t.x},${n.t.y},${n.t.z}`,o=this.discoveredTeleports.has(a),r=this.inactiveTeleportPos&&n.t.x===this.inactiveTeleportPos.x&&n.t.y===this.inactiveTeleportPos.y&&n.t.z===this.inactiveTeleportPos.z,c=n.t.x===t&&n.t.y===e&&n.t.z===i;return o&&!r&&!c}).map(n=>n.idx)}updateGamepad(t){const e=navigator.getGamepads?navigator.getGamepads():[],i=e[0]||e.find(v=>v!==null);if(!i)return;const n=.25;(Math.abs(i.axes[0])>n||Math.abs(i.axes[1])>n||i.axes[2]!==void 0&&Math.abs(i.axes[2])>n||i.axes[3]!==void 0&&Math.abs(i.axes[3])>n||i.buttons.some(v=>v.pressed))&&(this.isMouseOrTouchDetected=!1,this.lastInputDevice!=="gamepad"&&(this.lastInputDevice="gamepad",this.ui.updateControlsHint("gamepad",this.mazeGen.size>11)));const o=i.axes[0],r=i.axes[1];let c=o<-n,l=o>n,h=r<-n,f=r>n;if(i.buttons[12]&&i.buttons[12].pressed&&(h=!0),i.buttons[13]&&i.buttons[13].pressed&&(f=!0),i.buttons[14]&&i.buttons[14].pressed&&(c=!0),i.buttons[15]&&i.buttons[15].pressed&&(l=!0),c?this.input.keys.arrowleft=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowleft=!1),l?this.input.keys.arrowright=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowright=!1),h?this.input.keys.arrowup=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowup=!1),f?this.input.keys.arrowdown=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowdown=!1),!this.prevGamepadButtons){this.prevGamepadButtons=i.buttons.map(v=>v.pressed);return}const p=v=>this.prevGamepadButtons[v],g=v=>i.buttons[v]&&i.buttons[v].pressed,m=v=>g(v)&&!p(v);if(this.isStoryActive){if(m(9))this.skipStory();else if(!this.isPreloadingActive){for(let v=0;v<i.buttons.length;v++)if(v!==9&&m(v)){this.triggerAdvanceStory();break}}this.prevGamepadButtons=i.buttons.map(v=>v.pressed);return}if(m(9)){this.togglePause(),this.prevGamepadButtons=i.buttons.map(v=>v.pressed);return}if(this.isPaused){this.prevGamepadButtons=i.buttons.map(v=>v.pressed);return}if(this.isMap3DActive&&!this.isIntroPlaying){const v=g(7),d=g(6);if(v||d){const T=this.mazeGen.size;let S=window.innerWidth*.7/T;S=Math.max(20,Math.min(48,S));const A=S*this.mapZoom,O=A/2,E=A/4,b=O*5,z=window.innerWidth/2+this.mapPanOffsetX,k=window.innerHeight/2+this.mapPanOffsetY,K=this.mapCursor.x,w=this.mapCursor.y,I=this.mapCursor.z,U=this.visualActiveFloor,$=(K-w)*O+z,H=(K+w)*E-(I-U)*b+k,q=this.mapZoom,Q=1.025;let at=v?q*Q:q/Q;if(at=Math.max(.5,Math.min(4,at)),at!==q){const nt=at/q;this.mapPanOffsetX=$-($-(window.innerWidth/2+this.mapPanOffsetX))*nt-window.innerWidth/2,this.mapPanOffsetY=H-(H-(window.innerHeight/2+this.mapPanOffsetY))*nt-window.innerHeight/2,this.mapZoom=at}}const u=c&&(!this.prevGamepadStick||!this.prevGamepadStick.left),y=l&&(!this.prevGamepadStick||!this.prevGamepadStick.right),_=h&&(!this.prevGamepadStick||!this.prevGamepadStick.up),M=f&&(!this.prevGamepadStick||!this.prevGamepadStick.down);if(this.prevGamepadStick={left:c,right:l,up:h,down:f},this.isTeleportMode){if(this.teleportConfirmModalActive){if((u||m(14)||y||m(15))&&(this.teleportModalSelection=this.teleportModalSelection==="go"?"cancel":"go"),m(0)||m(3)||m(2))if(this.teleportModalSelection==="go"){const T=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(T.x,T.y,T.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;m(1)&&(this.teleportConfirmModalActive=!1)}else{const T=this.getSelectableTeleportIndices();if(T.length>0){let S=T.indexOf(this.selectedTeleportIndex);if(u||m(14)){S=(S-1+T.length)%T.length,this.selectedTeleportIndex=T[S];const A=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=A.z,this.mapCursor={x:A.x,y:A.y,z:A.z}}if(y||m(15)){S=(S+1)%T.length,this.selectedTeleportIndex=T[S];const A=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=A.z,this.mapCursor={x:A.x,y:A.y,z:A.z}}if(m(0)||m(3)||m(2)){const A=this.allTeleports[this.selectedTeleportIndex],O=Math.floor(this.player.x),E=Math.floor(this.player.y),b=this.player.z,z=A&&A.x===O&&A.y===E&&A.z===b;A&&!z&&(this.teleportTo(A.x,A.y,A.z),this.toggleTeleportMap(!1))}}(m(1)||m(8))&&this.toggleTeleportMap(!1)}this.prevGamepadButtons=i.buttons.map(T=>T.pressed);return}if((u||m(14))&&this.navigateCursor("left"),(y||m(15))&&this.navigateCursor("right"),(_||m(12))&&this.navigateCursor("up"),(M||m(13))&&this.navigateCursor("down"),(m(0)||m(4))&&this.activeMapFloor-2>=1&&(this.activeMapFloor-=2),m(5)&&this.activeMapFloor+2<=this.mazeGen.size-2&&(this.activeMapFloor+=2),m(3)||m(2)){const T=this.mapCursor.x,S=this.mapCursor.y,A=this.mapCursor.z;this.getInteractiveElements(this.activeMapFloor).some(b=>b.x===T&&b.y===S&&b.z===A)&&this.triggerPathReveal(T,S,A)}(m(1)||m(8))&&this.toggleMap3D(),this.prevGamepadButtons=i.buttons.map(T=>T.pressed);return}if(m(0)){if(this.isTeleportMode){const d=this.getTeleportCandidates()[this.gamepadTeleportSelectedIndex];d&&this.teleportTo(d.x,d.y,d.z)}else if(!this.isMap3DActive){const v=Math.floor(this.player.x),d=Math.floor(this.player.y),u=this.player.z,y=u>0&&this.maze.get(v,d,u-1)!==0,M=this.maze.get(v,d,u)===this.mazeGen.TYPES.TELEPORT,T=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===v&&this.inactiveTeleportPos.y===d&&this.inactiveTeleportPos.z===u;(!(M&&this.discoveredTeleports.has(`${v},${d},${u}`))||T)&&y&&this.changeFloor(-2)}}if(m(1)&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleZoom()),m(2)&&!this.isTeleportMode&&!this.isMap3DActive){const v=Math.floor(this.player.x),d=Math.floor(this.player.y),u=this.player.z,y=this.maze.get(v,d,u),_=y===this.mazeGen.TYPES.JELLY_PORTAL,M=y===this.mazeGen.TYPES.TELEPORT||_,T=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===v&&this.inactiveTeleportPos.y===d&&this.inactiveTeleportPos.z===u;M&&this.discoveredTeleports.has(`${v},${d},${u}`)&&!T&&(this.discoveredTeleports.size>=2?(this.toggleTeleportMap(!0),this.gamepadTeleportSelectedIndex=0):this.ui.showInfoBanner(Rt("msgNoOtherActiveTeleport")))}if(m(3)&&!this.isTeleportMode&&!this.isMap3DActive){const v=Math.floor(this.player.x),d=Math.floor(this.player.y),u=this.player.z,y=u<this.mazeGen.size-1&&this.maze.get(v,d,u+1)!==0,M=this.maze.get(v,d,u)===this.mazeGen.TYPES.TELEPORT,T=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===v&&this.inactiveTeleportPos.y===d&&this.inactiveTeleportPos.z===u;(!(M&&this.discoveredTeleports.has(`${v},${d},${u}`))||T)&&y&&this.changeFloor(2)}if(m(8)&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D()),this.isTeleportMode){const v=m(4)||m(14),d=m(5)||m(15);if(v||d){const u=this.getTeleportCandidates();u.length>0&&(v?this.gamepadTeleportSelectedIndex=(this.gamepadTeleportSelectedIndex-1+u.length)%u.length:this.gamepadTeleportSelectedIndex=(this.gamepadTeleportSelectedIndex+1)%u.length)}}if(m(5)&&!this.isTeleportMode&&!this.isMap3DActive&&this.tryActivateJellyPortal(),this.isMap3DActive&&this.controls){const v=i.axes[2],d=i.axes[3],u=i.buttons[7]?i.buttons[7].value:0,y=i.buttons[6]?i.buttons[6].value:0,_=.15,M=.15,T=(Y.ROT_SPEED!==void 0?Y.ROT_SPEED:2)*t,S=20*t,A=Math.abs(v)>_||Math.abs(d)>_,O=u>M||y>M;if(A||O){const E=new j().copy(this.camera.position).sub(this.controls.target),b=new ya().setFromVector3(E);if(Math.abs(v)>_&&(b.theta-=v*T),Math.abs(d)>_){b.phi-=d*T;const K=this.controls.minPolarAngle||0,w=this.controls.maxPolarAngle||Math.PI;b.phi=Math.max(K,Math.min(w,b.phi))}u>M&&(b.radius-=u*S),y>M&&(b.radius+=y*S);const z=this.controls.minDistance||2,k=this.controls.maxDistance||100;b.radius=Math.max(z,Math.min(k,b.radius)),b.makeSafe(),E.setFromSpherical(b),this.camera.position.copy(this.controls.target).add(E),this.controls.update()}}this.prevGamepadButtons=i.buttons.map(v=>v.pressed)}queueNotification(t){this.notificationQueue.push(t)}updateNotification(t){if(!this.activeNotification){if(this.notificationQueue.length>0){const i=this.notificationQueue.shift();this.activeNotification={text:i,displayText:"",state:"OPENING",widthProgress:0,typeTimer:0,charIndex:0,waitTimer:0,closeProgress:1}}return}const e=this.activeNotification;e.state==="OPENING"?(e.widthProgress+=t/.15,e.widthProgress>=1&&(e.widthProgress=1,e.state="TYPING")):e.state==="TYPING"?(e.typeTimer+=t,e.typeTimer>=.025&&(e.typeTimer=0,e.charIndex++,e.displayText=e.text.substring(0,e.charIndex),e.charIndex>=e.text.length&&(e.state="WAITING",e.waitTimer=0))):e.state==="WAITING"?(this.isZoomTransitionActive||(e.waitTimer+=t),e.waitTimer>=1&&(e.state="CLOSING",e.closeProgress=1)):e.state==="CLOSING"&&(e.closeProgress-=t/.15,e.closeProgress<=0&&(e.closeProgress=0,this.activeNotification=null))}update(t){if(this.isGameOver||this.isDestroyed||!t)return;if(this.jellyPortalFreezeTimer>0){this.jellyPortalFreezeTimer-=t,this.jellyPortalResetElapsed+=t,this.jellyPortalFreezeTimer<=0&&(this.jellyPortalFreezeTimer=0,this.executeJellyPortalReset(Math.floor(this.player.x),Math.floor(this.player.y),this.player.z),this.jellyPortalResetCells.clear()),this.updateNotification(t),this.updateGamepad(t);return}if(!this.isPaused&&!this.isIntroPlaying&&!this.isStoryActive&&(this.elapsedTime+=t),this.isStoryActive){this.updateGamepad(t),this.updateStory(t);return}if(this.isZoomTransitionActive&&(this.zoomTransitionTimer-=t,this.zoomTransitionTimer<=0&&(this.isZoomTransitionActive=!1,this.zoomTransitionTimer=0)),this.updateNotification(t),this.updateGamepad(t),this.isPaused)return;this.isIntroPlaying||this.hunters.some(o=>o.state!=="SLEEP"&&o.z===this.player.z)&&(this.hunterOnSameFloorDetected||(this.ui.showInfoBanner(Rt("msgDidYouHearThat")),this.hunterOnSameFloorDetected=!0)),this.hunters.some(a=>a.state==="SLEEP")&&this.getMapVisitedPercentage()>=10&&this.wakeHunters();const i=1e3/Y.HUNTER_SPEED*t;for(const a of this.hunters)a.visualX===null&&(a.visualX=a.x),a.visualY===null&&(a.visualY=a.y),a.visualZ===null&&(a.visualZ=a.z),!(a.x===null||a.y===null||a.z===null)&&(a.visualX=aa(a.visualX,a.x,i),a.visualY=aa(a.visualY,a.y,i),a.visualZ=aa(a.visualZ,a.z,i*2),a.generateCloudTexture(t));if(this.isMap3DActive){this.controls&&this.controls.update();const a=this.mazeGen.size,o=this.isTeleportMode?.25:1;for(const r of this.hunterMeshes){const c=r.hunter,l=r.mesh;if(c.visualX===null||c.visualZ===null||c.visualY===null)continue;l.position.set(c.visualX-a/2,(c.visualZ-a/2)*this.vScale,c.visualY-a/2);const h=c.jellyTime,f=1+Math.sin(h*1.2)*.07,p=1+Math.cos(h*.8)*.07,g=1+Math.sin(h*1.5)*.07;r.coreMesh&&(r.coreMesh.scale.set(f,p,g),r.coreMesh.material&&(r.coreMesh.material.emissiveIntensity=(.8+.2*Math.sin(h*3)+(Math.random()<.1?(Math.random()-.5)*.4:0))*o)),r.particles&&r.particles.forEach(y=>{const _=y.userData;_.angle+=_.speed*t;const M=Math.cos(_.angle)*_.radius,T=Math.sin(_.angle)*_.radius,S=Math.sin(_.angle*2+_.phaseY)*.25;let A=0,O=0,E=0;Math.random()<.15?(A=(Math.random()-.5)*.12,O=(Math.random()-.5)*.12,E=(Math.random()-.5)*.12,y.scale.set(1.4+Math.random()*.4,.6+Math.random()*.3,1.4+Math.random()*.4)):y.scale.set(1,1,1),y.position.set(M+A,S+O,T+E)});const m=c.x-c.visualX,v=c.y-c.visualY,d=Math.sqrt(m*m+v*v),u=Math.max(0,Math.min(1,1-d));if(c.lastPos&&(c.lastPos.x!==c.x||c.lastPos.y!==c.y)){r.trail1.position.set(c.lastPos.x-a/2,(c.lastPos.z-a/2)*this.vScale,c.lastPos.y-a/2),r.trail1.visible=!0;const y=c.jellyTime-.2,_=.95-u*.47,M=_*(1+Math.sin(y*1.2)*.07),T=_*(1+Math.cos(y*.8)*.07),S=_*(1+Math.sin(y*1.5)*.07);r.trail1.scale.set(M,T,S),r.trail1.material&&(r.trail1.material.opacity=(.4-u*.2)*o)}else r.trail1.visible=!1;if(c.history&&c.history.length===2){const y=c.history[0];r.trail2.position.set(y.x-a/2,(y.z-a/2)*this.vScale,y.y-a/2);const _=.48*(1-u);if(_>.02){r.trail2.visible=!0;const M=c.jellyTime-.4,T=_*(1+Math.sin(M*1.2)*.07),S=_*(1+Math.cos(M*.8)*.07),A=_*(1+Math.sin(M*1.5)*.07);r.trail2.scale.set(T,S,A),r.trail2.material&&(r.trail2.material.opacity=.2*(1-u)*o)}else r.trail2.visible=!1}else r.trail2.visible=!1}if(this.keyMeshes)for(const r of this.keyMeshes)r.rotation.y+=1.5*t,r.rotation.x+=.5*t;if(this.isTeleportMode&&this.teleportMeshes&&this.gamepadTeleportSelectedIndex!==void 0){const c=this.getTeleportCandidates()[this.gamepadTeleportSelectedIndex];this.teleportMeshes.forEach(l=>{const{gridX:h,gridY:f,gridZ:p}=l.userData;if(c&&h===c.x&&f===c.y&&p===c.z){const m=1.3+.25*Math.sin(Date.now()/100);l.scale.set(m,m,m),l.material&&l.material.emissive&&(l.material.emissive.setHex(16755200),l.material.emissiveIntensity=3.5)}else{const m=h===Math.floor(this.player.x)&&f===Math.floor(this.player.y)&&p===this.player.z,v=this.teleportCooldownTicks>0;let d=1;if(m&&(d=1.4),l.scale.set(d,d,d),l.material&&l.material.emissive)if(v)l.material.color.setHex(4473924),l.material.emissive.setHex(4473924),l.material.emissiveIntensity=0,l.material.opacity=.4;else if(m)l.material.color.setHex(65535),l.material.emissive.setHex(65535),l.material.emissiveIntensity=3,l.material.opacity=.5;else if(h===Math.floor(this.mazeGen.startPos.x)&&f===Math.floor(this.mazeGen.startPos.y)&&p===this.mazeGen.startPos.z)l.material.color.setHex(Y.COLORS.THREE_START),l.material.emissive.setHex(Y.COLORS.THREE_START),l.material.emissiveIntensity=this.isTeleportMode?2.5:.5,l.material.opacity=this.isTeleportMode?.95:.8;else{const _=this.maze.get(h,f,p)===this.mazeGen.TYPES.JELLY_PORTAL?Y.COLORS.THREE_JELLY_PORTAL:Y.COLORS.THREE_TELEPORT;l.material.color.setHex(_),l.material.emissive.setHex(_),l.material.emissiveIntensity=2.5,l.material.opacity=.95}}})}}if(!this.isMap3DActive&&!this.isZoomTransitionActive){let a=0,o=0;const l=1e3/Y.HUNTER_SPEED*Y.MOVE_SPEED_FACTOR*t;let h=0,f=0;if(this.input.touchMoveVector?(h=this.input.touchMoveVector.x,f=this.input.touchMoveVector.y):((this.input.keys.w||this.input.keys.arrowup)&&(f-=1),(this.input.keys.s||this.input.keys.arrowdown)&&(f+=1),(this.input.keys.a||this.input.keys.arrowleft)&&(h-=1),(this.input.keys.d||this.input.keys.arrowright)&&(h+=1)),h!==0||f!==0){const T=Math.sqrt(h*h+f*f);a=h/T*l,o=f/T*l,this.player.dir=Math.atan2(o,a)}let p=!1;if(a!==0||o!==0){p=!0;const T=.01,S=Math.abs(a)>T,A=Math.abs(o)>T;S&&A?(this.playerSide=a>0?"right":"left",this.playerVertical=o>0?"down":"up"):S?this.playerSide=a>0?"right":"left":A&&(this.playerVertical=o>0?"down":"up")}if(p?(this.playerWalkCycle=(this.playerWalkCycle||0)+t*18,this.playerSquashTargetX=1+Math.sin(this.playerWalkCycle)*.15,this.playerSquashTargetY=1-Math.sin(this.playerWalkCycle)*.15):(this.playerSquashTargetX=1,this.playerSquashTargetY=1),this.playerSquashX=this.playerSquashX||1,this.playerSquashY=this.playerSquashY||1,this.playerSquashX+=(this.playerSquashTargetX-this.playerSquashX)*.25,this.playerSquashY+=(this.playerSquashTargetY-this.playerSquashY)*.25,a!==0||o!==0){const T=Math.floor(this.player.x),S=Math.floor(this.player.y),A=this.player.x+a,O=this.player.y+o,E=(Q,at,nt)=>{const W=this.maze.get(Q,at,nt);return W===this.mazeGen.TYPES.WALL||W===this.mazeGen.TYPES.STATUE?!1:W===this.mazeGen.TYPES.EXIT&&this.keysCollected<this.totalKeys?(this.triggerLockedExitWarning(),!1):!0},b=Y.PLAYER_COLLISION_RADIUS,z=Y.PLAYER_COLLISION_OFFSET_X||0,k=Y.PLAYER_COLLISION_OFFSET_Y||0,K=(Q,at,nt)=>{const W=Math.floor(Q+z-b),rt=Math.floor(Q+z+b),dt=Math.floor(at+k-b),R=Math.floor(at+k+b);for(let G=W;G<=rt;G++)for(let J=dt;J<=R;J++)if(G<0||G>=this.mazeGen.size||J<0||J>=this.mazeGen.size||!E(G,J,nt))return!1;return!0};K(A,this.player.y,this.player.z)&&(this.player.x=A),K(this.player.x,O,this.player.z)&&(this.player.y=O);const w=Math.floor(this.player.x),I=Math.floor(this.player.y),U=this.player.z;if(w!==T||I!==S){const Q=this.maze.get(T,S,U);if(Q===this.mazeGen.TYPES.VISITED||Q===this.mazeGen.TYPES.START||Q===this.mazeGen.TYPES.TELEPORT){const nt=U+1<this.mazeGen.size&&this.maze.get(w,I,U+1)!==this.mazeGen.TYPES.WALL,W=U-1>=0&&this.maze.get(w,I,U-1)!==this.mazeGen.TYPES.WALL;nt&&W?this.dialogueWhichWayTriggered||(this.ui.showInfoBanner(Rt("msgWhichWay")),this.dialogueWhichWayTriggered=!0):nt?this.dialogueUpTriggered||(this.ui.showInfoBanner(Rt("msgElevatorUp")),this.dialogueUpTriggered=!0):W&&(this.dialogueDownTriggered||(this.ui.showInfoBanner(Rt("msgElevatorDown")),this.dialogueDownTriggered=!0))}}const H=(Q,at,nt)=>{const W=this.maze.get(Q,at,nt);(W===this.mazeGen.TYPES.PATH||W===this.mazeGen.TYPES.KEY||W===this.mazeGen.TYPES.MANA)&&(W===this.mazeGen.TYPES.KEY?this.collectKey(Q,at,nt):W===this.mazeGen.TYPES.MANA?this.collectMana(Q,at,nt):(this.maze.set(Q,at,nt,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${Q},${at},${nt}`)),this.staticMapCacheDirty=!0)};H(w,I,U),w!==T&&I!==S&&(H(w,S,U),H(T,I,U));const q=this.maze.get(w,I,U);!this.exitPathfinderUnlocked&&this.checkExitNeighborVisited()&&(this.exitPathfinderUnlocked=!0,this.ui.showInfoBanner(Rt("msgExitFound"))),q===this.mazeGen.TYPES.EXIT&&this.triggerVictory()}if((a!==0||o!==0)&&(this.skipCellAnimations=!1),this.checkHunterCollision(),this.isGameOver)return;const g=Math.floor(this.player.x),m=Math.floor(this.player.y),v=this.player.z,d=this.maze.get(g,m,v)===this.mazeGen.TYPES.JELLY_PORTAL,u=this.maze.get(g,m,v)===this.mazeGen.TYPES.TELEPORT||d,y=this.teleportCooldownTicks>0;if(g>=0&&g<this.mazeGen.size&&m>=0&&m<this.mazeGen.size){if(this.maze.get(g,m,v)===this.mazeGen.TYPES.PATH)this.maze.set(g,m,v,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${g},${m},${v}`),this.staticMapCacheDirty=!0;else if(u){const E=`${g},${m},${v}`;!(this.lastPlayerCell&&this.lastPlayerCell.x===g&&this.lastPlayerCell.y===m&&this.lastPlayerCell.z===v)&&!y&&(this.discoveredTeleports.add(E),this.staticMapCacheDirty=!0,d?(this.triggerSave(),this.ui.showInfoBanner(Rt("msgJellyPortalNotSafe"))):(this.triggerSave(),this.ui.showInfoBanner(Rt("msgSafePointTeleport"))))}const T=v<this.mazeGen.size-1&&this.maze.get(g,m,v+1)!==this.mazeGen.TYPES.WALL,S=v>0&&this.maze.get(g,m,v-1)!==this.mazeGen.TYPES.WALL,A=T||S;if(this.lastPlayerCell){const E=this.lastPlayerCell.x,b=this.lastPlayerCell.y,z=this.lastPlayerCell.z,k=z<this.mazeGen.size-1&&this.maze.get(E,b,z+1)!==this.mazeGen.TYPES.WALL,K=z>0&&this.maze.get(E,b,z-1)!==this.mazeGen.TYPES.WALL;if((k||K)&&(E!==g||b!==m||z!==v)){const U=`${E},${b},${z}`;this.revealedPathSet.has(U)&&(this.revealedPathSet.delete(U),this.staticMapCacheDirty=!0)}}const O=`${g},${m},${v}`;!A&&this.revealedPathSet.has(O)&&(this.revealedPathSet.delete(O),this.staticMapCacheDirty=!0)}u&&!y?(this.input.keys.e||this.input.keys.pageup||this.input.keys.q||this.input.keys.pagedown)&&(["e","q","pageup","pagedown"].forEach(T=>this.input.keys[T]=!1),this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(Rt("msgNoOtherActiveTeleport"))):((this.input.keys.e||this.input.keys.pageup)&&this.changeFloor(2),(this.input.keys.q||this.input.keys.pagedown)&&this.changeFloor(-2)),this.input.keys.r&&(this.input.keys.r=!1,this.tryActivateJellyPortal()),(!this.lastPlayerCell||this.lastPlayerCell.x!==g||this.lastPlayerCell.y!==m||this.lastPlayerCell.z!==v)&&(this.staticMapCacheDirty=!0);const M=window.innerHeight>window.innerWidth;this.ui.updateMobileMapButton(u,!!y,M,d),this.updateFloorUI(),this.lastPlayerCell={x:g,y:m,z:v}}const n=performance.now();if(n-this.lastHunterMove>Y.HUNTER_SPEED){if(this.lastHunterMove=n,this.teleportCooldownTicks>0&&(this.teleportCooldownTicks--,this.staticMapCacheDirty=!0,this.teleportCooldownTicks===0)){this.inactiveTeleportPos=null;for(const m of this.hunters){const v=this.maze.get(m.x,m.y,m.z);if(v===this.mazeGen.TYPES.VISITED||v===this.mazeGen.TYPES.START||v===this.mazeGen.TYPES.EXIT){const d=m.state;m.state="TRACKING",d!=="TRACKING"&&!this.dialogueDetectedTriggered&&(this.ui.showInfoBanner(Rt("msgIWasDetected")),this.dialogueDetectedTriggered=!0)}else m.state="WANDERING",m.pathToTarget=[],m.visitedNodes.clear(),m.visitedNodes.add(`${m.x},${m.y},${m.z}`)}}let a=0,o=0;const r=this.hunters.some(m=>m.state==="SLEEP");for(const m of this.hunters){if(m.state==="SLEEP")continue;const v=m.state;m.move(this.player,this.maze,this.mazeGen.TYPES),m.state==="TRACKING"&&v!=="TRACKING"&&!this.dialogueDetectedTriggered&&(this.ui.showInfoBanner(Rt("msgIWasDetected")),this.dialogueDetectedTriggered=!0),(m.state==="TRACKING"||m.state==="TELEPORT_TRACKING")&&a++;const d=m.z===this.player.z;let u=!1;if(d)u=!0;else{const y=Math.max(5,Math.floor(this.degree*1.2));Kp({x:m.x,y:m.y,z:m.z},{x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.maze,this.mazeGen.size,this.mazeGen.TYPES.WALL,y,this.mazeGen.startPos)<=y&&(u=!0)}if(u&&o++,this.checkHunterCollision(),this.isGameOver)return}const c=a>0;this.ui.updateHazardWarning(c,this.teleportCooldownTicks,this.isSafeMode,r),c?this.canvas.classList.add("hunted-map-effect"):this.canvas.classList.remove("hunted-map-effect"),this.ui.setNearbyWarning(o>0);let l=1/0;const h=Math.floor(this.player.x),f=Math.floor(this.player.y),p=this.player.z,g=this.hunters.filter(m=>m.state!=="SLEEP");for(const m of g){const v=qp({x:m.x,y:m.y,z:m.z},{x:h,y:f,z:p},this.maze,this.mazeGen.size,this.mazeGen.TYPES.WALL);v<l&&(l=v)}this.ui.updateProximeter(l,g.length,this.isGameOver)}}changeFloor(t){if(this.isGameOver||this.floorTransition)return;this.skipCellAnimations=!0;const e=Math.floor(this.player.x),i=Math.floor(this.player.y),n=this.player.z,a=n+1<this.mazeGen.size&&this.maze.get(e,i,n+1)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,n+1)!==this.mazeGen.TYPES.STATUE,o=n-1>=0&&this.maze.get(e,i,n-1)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,n-1)!==this.mazeGen.TYPES.STATUE;if(t>0&&a||t<0&&o){const r=n+t;if(r>=0&&r<this.mazeGen.size&&this.maze.get(e,i,r)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,r)!==this.mazeGen.TYPES.STATUE){const c=n+t/2;this.maze.get(e,i,c)!==this.mazeGen.TYPES.ELEVATOR_VISITED&&(this.maze.set(e,i,c,this.mazeGen.TYPES.ELEVATOR_VISITED),this.staticMapCacheDirty=!0);const l=`${e},${i},${c}`;this.revealedPathSet.delete(l);const h=document.createElement("canvas");h.width=this.canvas.width,h.height=this.canvas.height;const f=h.getContext("2d");this.renderMapToContext(f,this.player.z),this.player.x=e+Y.PLAYER_START_X,this.player.y=i+Y.PLAYER_START_Y%1,this.player.z=r,this.staticMapCacheDirty=!0,this.populateFullyRevealedCells(r),this.maze.get(e,i,r)===this.mazeGen.TYPES.PATH&&this.maze.set(e,i,r,this.mazeGen.TYPES.VISITED);const p=document.createElement("canvas");p.width=this.canvas.width,p.height=this.canvas.height;const g=p.getContext("2d");this.renderMapToContext(g,this.player.z),this.floorTransition={canvasOld:h,canvasNew:p,progress:0,duration:.4,delta:t},this.updateFloorUI(),this.draw2DMap(0),this.maze.get(e,i,r)===this.mazeGen.TYPES.EXIT&&this.triggerVictory()}}}toggleMap3D(){this.isMap3DActive=!this.isMap3DActive,this.isTeleportMode=!1;const t=document.getElementById("mobile-teleport-exit-btn");if(t&&t.classList.add("hidden"),this.isMap3DActive){this.ui.setMap3DVisible(!0),this.activeMapFloor=this.player.z,this.visualActiveFloor=this.player.z,this.mapCursor={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.mapZoom=1,this.mapPanOffsetX=0,this.mapPanOffsetY=0,this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="none");const e=document.getElementById("map3d-instructions");e&&(e.style.display="none"),this.isometricCanvas||this.initIsometricCanvas(),this.isometricCanvas.style.display="block"}else this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.remove("hidden"),this.ui.setMap3DVisible(!1),this.isometricCanvas&&(this.isometricCanvas.style.display="none")}build3DMap(t=!1){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(new fo(16777215,.6));const e=new uo(16777215,.4);e.position.set(10,20,10),this.scene.add(e),this.pulsatingMaterials=[],this.hunterMeshes=[],this.teleportMeshes=[],this.knownMeshes=[],this.keyMeshes=[],this.manaMeshes=[],this.exitMesh=null;const i=this.mazeGen.size,n=(y,_,M)=>{if(M<0||M>=i)return!1;const T=this.maze.get(y,_,M);return T===2||T===3||T===4||T===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${y},${_},${M}`)||this.visitedCells.has(`${y},${_},${M}`)};this.gridMeshes=new Array(i*i*i).fill(null);const a=new we(.9,.9,.9),o=this.isTeleportMode?Y.TELEPORT_MAP_OPACITY:1,r=new we(.9,.425,.9),c=new we(.9,.425,.9),l=new ps(.35,.35,2*this.vScale,8);new ie({color:Y.COLORS.THREE_VISITED,transparent:!0,opacity:.8*o});for(let y=0;y<i;y++)for(let _=0;_<i;_++)for(let M=0;M<i;M++){const T=this.maze.get(y,_,M);if(T===this.mazeGen.TYPES.WALL||T===this.mazeGen.TYPES.STATUE)continue;if(M%2===0&&T!==0){const $=`${y},${_},${M}`,H=this.revealedPathSet.has($),q=T===this.mazeGen.TYPES.ELEVATOR_VISITED,Q=T===1&&(n(y,_,M-1)||n(y,_,M+1));if(q||Q||H||t){let at;if(H)at=new ie({color:16777215,transparent:!0,opacity:.95*o,emissive:16777215,emissiveIntensity:2*o});else if(q)at=new ie({color:Y.COLORS.THREE_VISITED,transparent:!0,opacity:.8*o});else if(Q||t){const W=t?Y.COLORS.THREE_VISITED:Y.COLORS.THREE_KNOWN;at=new ie({color:W,transparent:!0,opacity:t?.72:.6*o,emissive:W,emissiveIntensity:t?0:.5*o}),t||this.pulsatingMaterials.push(at)}const nt=new te(l,at);nt.position.set(y-i/2,(M-i/2)*this.vScale,_-i/2),this.scene.add(nt),this.gridMeshes[y*i*i+_*i+M]=nt,Q&&!H&&(nt.userData={gridX:y,gridY:_,gridZ:M},this.knownMeshes.push(nt))}continue}const A=T===this.mazeGen.TYPES.JELLY_PORTAL,O=T===this.mazeGen.TYPES.TELEPORT||A,E=O&&this.discoveredTeleports.has(`${y},${_},${M}`),b=T===2||T===3||T===4||T===5||E,z=(T===1||O&&!E)&&this.isNearVisited(y,_,M);if(E){const $=y===Math.floor(this.mazeGen.startPos.x)&&_===Math.floor(this.mazeGen.startPos.y)&&M===this.mazeGen.startPos.z,H=this.teleportCooldownTicks>0;if($){const G=H?0:this.isTeleportMode?2.5:.5,J=H?4473924:Y.COLORS.THREE_START,X=H?.4:this.isTeleportMode?.95:.8*o,B=new ie({color:J,emissive:J,emissiveIntensity:G*o,transparent:!0,opacity:X}),ct=new te(a,B);ct.position.set(y-i/2,(M-i/2)*this.vScale,_-i/2),this.isTeleportMode&&ct.scale.set(1.4,1.4,1.4),ct.userData={isTeleport:!0,gridX:y,gridY:_,gridZ:M},this.scene.add(ct),this.teleportMeshes.push(ct);continue}const q=y===Math.floor(this.player.x)&&_===Math.floor(this.player.y)&&M===this.player.z;let Q=this.isTeleportMode?.9:.45,at=this.isTeleportMode?2.5:.8,nt=A?Y.COLORS.THREE_JELLY_PORTAL:Y.COLORS.THREE_TELEPORT,W=.95;H?(nt=4473924,at=0,W=.4):this.isTeleportMode&&q&&(nt=65535,W=.5,at=3);const rt=new xn(Q,16,16),dt=new ie({color:nt,emissive:nt,emissiveIntensity:at,transparent:!0,opacity:W}),R=new te(rt,dt);R.position.set(y-i/2,(M-i/2)*this.vScale,_-i/2),R.userData={isTeleport:!0,gridX:y,gridY:_,gridZ:M},this.scene.add(R),this.teleportMeshes.push(R);continue}if(T===this.mazeGen.TYPES.KEY){const $=new Ia(.3,0),H=new ie({color:Y.COLORS.THREE_KEY,emissive:Y.COLORS.THREE_KEY,emissiveIntensity:.6*o,shininess:100}),q=new te($,H);if(q.position.set(y-i/2,(M-i/2)*this.vScale,_-i/2),q.userData={isKey:!0,gridX:y,gridY:_,gridZ:M},this.scene.add(q),this.keyMeshes.push(q),this.pulsatingMaterials.push(H),!this.visitedCells.has(`${y},${_},${M}`))continue}if(T===this.mazeGen.TYPES.MANA){const $=new La(.22,0),H=new ie({color:65535,emissive:65535,emissiveIntensity:.7*o,shininess:120}),q=new te($,H);if(q.position.set(y-i/2,(M-i/2)*this.vScale,_-i/2),q.userData={isMana:!0,gridX:y,gridY:_,gridZ:M},this.scene.add(q),this.manaMeshes.push(q),this.pulsatingMaterials.push(H),!this.visitedCells.has(`${y},${_},${M}`))continue}const w=`${y},${_},${M}`,I=this.revealedPathSet.has(w);if(t?T!==this.mazeGen.TYPES.WALL:b||z||I){let $=t?Y.COLORS.THREE_VISITED:Y.COLORS.THREE_KNOWN,H;I?($=16777215,H=new ie({color:$,transparent:!0,opacity:.95*o,emissive:$,emissiveIntensity:2*o})):b||t?($=Y.COLORS.THREE_VISITED,T===3?$=Y.COLORS.THREE_START:T===4&&($=this.keysCollected===this.totalKeys?Y.COLORS.THREE_EXIT:16724736),H=new ie({color:$,transparent:!0,opacity:t?.72:.8*o})):z&&(H=new ie({color:$,transparent:!0,opacity:.6*o,emissive:$,emissiveIntensity:.5*o}),this.pulsatingMaterials.push(H));const q=M<i-1&&this.maze.get(y,_,M+1)!==0,Q=M>0&&this.maze.get(y,_,M-1)!==0;if(q||Q){const rt=this.pulsatingMaterials.indexOf(H);if(rt>-1&&this.pulsatingMaterials.splice(rt,1),q&&Q){let dt=!1,R=!1;if(I){if(this.activePathReveal){const zt=this.activePathReveal.findIndex(mt=>mt.x===y&&mt.y===_&&mt.z===M);if(zt!==-1&&zt<this.activePathReveal.length-1){const mt=this.activePathReveal[zt+1];mt.z>M&&(dt=!0),mt.z<M&&(R=!0)}}!dt&&!R&&(dt=this.revealedPathSet.has(`${y},${_},${M+1}`)||this.revealedPathSet.has(`${y},${_},${M+2}`),R=this.revealedPathSet.has(`${y},${_},${M-1}`)||this.revealedPathSet.has(`${y},${_},${M-2}`))}const G=I&&(dt||!dt&&!R),J=I&&(R||!dt&&!R),X=new ie({color:J?16777215:Y.COLORS.THREE_ELEVATOR_DOWN,transparent:!0,opacity:.9*o,emissive:J?16777215:Y.COLORS.THREE_ELEVATOR_DOWN,emissiveIntensity:(J?2:.4)*o}),B=new ie({color:G?16777215:Y.COLORS.THREE_ELEVATOR_UP,transparent:!0,opacity:.9*o,emissive:G?16777215:Y.COLORS.THREE_ELEVATOR_UP,emissiveIntensity:(G?2:.4)*o}),ct=new te(r,X),F=new te(c,B);ct.position.set(y-i/2,(M-i/2)*this.vScale-.2125,_-i/2),F.position.set(y-i/2,(M-i/2)*this.vScale+.2125,_-i/2),this.scene.add(ct),this.scene.add(F),this.gridMeshes[y*i*i+_*i+M]=F,z&&!I&&(ct.userData={gridX:y,gridY:_,gridZ:M},F.userData={gridX:y,gridY:_,gridZ:M},this.knownMeshes.push(ct),this.knownMeshes.push(F));continue}else{const dt=I?16777215:q?Y.COLORS.THREE_ELEVATOR_UP:Y.COLORS.THREE_ELEVATOR_DOWN,R=I?2:.4;H=new ie({color:dt,transparent:!0,opacity:.9*o,emissive:dt,emissiveIntensity:R*o})}}const at=y===Math.floor(this.player.x)&&_===Math.floor(this.player.y)&&M===this.player.z,nt=this.hunters.some(rt=>rt.x===y&&rt.y===_&&rt.z===M);if(at||nt){const rt=new we(.9,.05,.9),dt=new te(rt,H);dt.position.set(y-i/2,(M-i/2)*this.vScale-.425,_-i/2),this.scene.add(dt),this.gridMeshes[y*i*i+_*i+M]=dt;continue}const W=new te(a,H);if(W.position.set(y-i/2,(M-i/2)*this.vScale,_-i/2),T===4&&(this.exitMesh=W,this.keysCollected<this.totalKeys)){const rt=new we(.95,.95,.95),dt=new fs({color:16711680,wireframe:!0}),R=new te(rt,dt);W.add(R)}this.scene.add(W),this.gridMeshes[y*i*i+_*i+M]=W,(z||T===this.mazeGen.TYPES.EXIT)&&!I&&(W.userData={gridX:y,gridY:_,gridZ:M},this.knownMeshes.push(W))}}if(t)return;const h=new xn(.42,16,16),f=new ie({color:16711680,emissive:16711680,emissiveIntensity:.8,depthWrite:!1}),p=new te(h,f);p.position.set(Math.floor(this.player.x)-i/2,(this.player.z-i/2)*this.vScale+.05,Math.floor(this.player.y)-i/2),this.scene.add(p);const g=new xn(.4),m=new ie({color:Y.COLORS.THREE_HUNTER,emissive:Y.COLORS.THREE_HUNTER,emissiveIntensity:.8,depthWrite:!1}),v=new ie({color:Y.COLORS.THREE_HUNTER,transparent:!0,opacity:.4,emissive:Y.COLORS.THREE_HUNTER,emissiveIntensity:.3,depthWrite:!1}),d=new ie({color:Y.COLORS.THREE_HUNTER,transparent:!0,opacity:.15,emissive:Y.COLORS.THREE_HUNTER,emissiveIntensity:.1,depthWrite:!1}),u=g;for(let y=0;y<this.hunters.length;y++){const _=this.hunters[y];if(_.state==="SLEEP")continue;const M=new te(u,d),T=new te(u,v);M.visible=!1,T.visible=!1,M.renderOrder=99,T.renderOrder=99,this.scene.add(M),this.scene.add(T);const S=new Mn;S.renderOrder=99;const A=new te(g,m);S.add(A);const O=4,E=[],b=new we(.18,.18,.18),z=[Y.COLORS.THREE_HUNTER,16711935,65535,16776960];for(let k=0;k<O;k++){const K=new ie({color:z[k%z.length],transparent:!0,opacity:.8,emissive:z[k%z.length],emissiveIntensity:.8,depthWrite:!1}),w=new te(b,K);w.userData={angle:k/O*Math.PI*2,radius:.35+Math.random()*.1,speed:1+Math.random()*1.5,phaseY:Math.random()*Math.PI*2},S.add(w),E.push(w)}S.position.set(_.x-i/2,(_.z-i/2)*this.vScale,_.y-i/2),this.scene.add(S),this.hunterMeshes.push({hunter:_,mesh:S,coreMesh:A,particles:E,trail1:T,trail2:M})}this.camera.position.set(i,i*this.vScale,i),this.controls.target.set(0,0,0),this.controls.update()}draw2DMap(t=.016){if(this.deathAnimation&&this.deathAnimation.active){if(this.deathAnimation.delayElapsed<this.deathAnimation.delayDuration)this.deathAnimation.delayElapsed+=t,this.updateNotification(t);else if(this.deathAnimation.screenFilled)this.deathAnimation.reversing&&(this.deathAnimation.elapsed-=t,this.deathAnimation.elapsed<=0&&(this.deathAnimation=null,this.isGameOver=!1,this.ui.initGameUI(this.isSafeMode),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1),this.ui.showInfoBanner(Rt("msgPlayerRespawn"))));else if(this.deathAnimation.elapsed+=t,this.updateNotification(t),this.deathAnimation.elapsed>=this.deathAnimation.duration){this.deathAnimation.screenFilled=!0,this.activeNotification=null,this.notificationQueue=[];const n=Math.floor(this.deathAnimation.playerPos.x),a=Math.floor(this.deathAnimation.playerPos.y),o=this.deathAnimation.playerPos.z;if(this.maze.get(n,a,o)===this.mazeGen.TYPES.JELLY_PORTAL){const f=this.mazeGen.size,p=[],g=Math.floor(this.mazeGen.startPos.x),m=Math.floor(this.mazeGen.startPos.y),v=this.mazeGen.startPos.z;for(let d=0;d<f;d++)for(let u=0;u<f;u++)for(let y=0;y<f;y++){const _=this.maze.get(d,u,y),M=d===g&&u===m&&y===v,T=d===n&&u===a&&y===o;(_===this.mazeGen.TYPES.PATH||_===this.mazeGen.TYPES.VISITED)&&y%2!==0&&!M&&!T&&p.push({x:d,y:u,z:y})}if(p.length>0){const d=p[Math.floor(Math.random()*p.length)];this.maze.set(d.x,d.y,d.z,this.mazeGen.TYPES.KEY)}else this.maze.set(n,a,o,this.mazeGen.TYPES.KEY)}else this.maze.set(n,a,o,this.mazeGen.TYPES.KEY);this.totalKeys++,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.staticMapCacheDirty=!0;let c=this.mazeGen.startPos.x,l=this.mazeGen.startPos.y,h=this.mazeGen.startPos.z;this.lastSavePos&&(c=this.lastSavePos.x,l=this.lastSavePos.y,h=this.lastSavePos.z),this.player.x=c,this.player.y=l,this.player.z=h,this.activeMapFloor=h,this.visualActiveFloor=h,this.lastPlayerCell={x:Math.floor(c),y:Math.floor(l),z:h},this.hunters=[],this.initHunters(this.degree),this.suppressWakeHuntersBanner=!0,ns(this),this.deathAnimation.reversing=!0}}this.floorTransition&&(this.floorTransition.progress+=t/this.floorTransition.duration,this.floorTransition.progress>=1&&(this.floorTransition=null));const e=this.mazeGen.size,i=this.isZoomActive?11:e;if(this.zoomVisibleCells===void 0?this.zoomVisibleCells=i:(this.zoomVisibleCells+=(i-this.zoomVisibleCells)*(1-Math.exp(-12*t)),Math.abs(this.zoomVisibleCells-i)<.01&&(this.zoomVisibleCells=i)),this.floorTransition){const n=this.floorTransition.progress,a=this.canvas.width/2,o=this.canvas.height/2,r=this.floorTransition.delta>0;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let c,l;r?(c=1-.2*n,l=1.2-.2*n):(c=1+.2*n,l=.8+.2*n),this.ctx.save(),this.ctx.globalAlpha=1-n,this.ctx.translate(a,o),this.ctx.scale(c,c),this.ctx.drawImage(this.floorTransition.canvasOld,-a,-o),this.ctx.restore(),this.ctx.save(),this.ctx.globalAlpha=n,this.ctx.translate(a,o),this.ctx.scale(l,l),this.ctx.drawImage(this.floorTransition.canvasNew,-a,-o),this.ctx.restore()}else this.renderMapToContext(this.ctx,this.player.z)}renderMapToContext(t,e){t.clearRect(0,0,t.canvas.width,t.canvas.height);const i=this.mazeGen.size,n=i>11,a=n?t.canvas.width/11:t.canvas.width/i,o=this.player.x,r=this.player.y,c=Math.floor(o),l=Math.floor(r);let h=n||this.isZoomTransitionActive,f=n?this.zoomVisibleCells:i;if(this.isZoomTransitionActive){const v=Math.min(1,(2-this.zoomTransitionTimer)/2),u=(M=>1-Math.pow(1-M,3))(v),y=3;f=y+((n?11:i)-y)*u}if(h){t.save();const m=(n?11:i)/f,v=f/2;let d=o,u=r;d<v&&(d=v),d>i-v&&(d=i-v),u<v&&(u=v),u>i-v&&(u=i-v);const y=t.canvas.width/2,_=t.canvas.height/2;t.translate(y,_),t.scale(m,m),t.translate(-d*a,-u*a)}const p=n?i*a:this.canvas.width,g=n?i*a:this.canvas.height;(this.staticMapCacheDirty||this.staticMapCacheCanvas.width!==p||this.staticMapCacheCanvas.height!==g||this.jellyPortalFreezeTimer>0)&&this.updateStaticMapCache(e),t.drawImage(this.staticMapCacheCanvas,0,0);for(const m of this.hunters){if(m.state==="SLEEP")continue;const v=m.visualZ!==null?m.visualZ:m.z,d=m.visualX!==null?m.visualX:m.x,u=m.visualY!==null?m.visualY:m.y;if(v===null||d===null||u===null)continue;const y=Math.abs(v-e),_=Math.max(0,1-y);if(_<=0)continue;const M=m.x!==null?m.x:d,T=m.y!==null?m.y:u,S=M-d,A=T-u,O=Math.sqrt(S*S+A*A),E=Math.max(0,Math.min(1,1-O)),b=[];if(m.lastPos&&(m.lastPos.x!==M||m.lastPos.y!==T)&&m.lastPos.z===e){const z=.95-E*.47,k=.4-E*.2;b.push({pos:m.lastPos,sizeFactor:z,opacityFactor:k,age:1})}if(m.history&&m.history.length===2){const z=m.history[0];if(z.z===e){const k=.48*(1-E),K=.2*(1-E);k>.01&&b.push({pos:z,sizeFactor:k,opacityFactor:K,age:2})}}if(b.forEach(z=>{if(m.lowCanvas){const k=z.pos.x*a+a/2,K=z.pos.y*a+a/2,w=a*z.sizeFactor*_,I=m.jellyTime-z.age*.2,U=Math.sin(I)*6,$=Math.cos(I*.7)*4,H=1+Math.sin(I*1.2)*.06,q=1+Math.cos(I*.8)*.06,Q=U*Math.PI/180,at=$*Math.PI/180;t.save(),t.globalAlpha=z.opacityFactor,t.translate(k,K),t.transform(H,Math.tan(at),Math.tan(Q),q,0,0),t.imageSmoothingEnabled=!1,t.drawImage(m.lowCanvas,-w/2,-w/2,w,w),t.restore()}}),m.lowCanvas){const z=d*a+a/2,k=u*a+a/2,K=a*.95*_,w=m.jellyTime,I=Math.sin(w)*6,U=Math.cos(w*.7)*4,$=1+Math.sin(w*1.2)*.06,H=1+Math.cos(w*.8)*.06,q=I*Math.PI/180,Q=U*Math.PI/180;t.save();let at=.35,nt=K;if(m.state==="DYING"){const R=Math.min(1,this.jellyPortalResetElapsed/this.jellyPortalResetDuration);nt=K*(1-R),at=.35*(1-R)}const W=-a*.12*_,rt=-a*.12*_;t.translate(z+W,k+rt),t.transform($,Math.tan(Q),Math.tan(q),H,0,0),t.filter=`brightness(0) blur(1px) opacity(${at})`,t.imageSmoothingEnabled=!1,t.drawImage(m.lowCanvas,-nt/2,-nt/2,nt,nt),t.restore(),t.save();let dt=1;if(m.state==="DYING"){const R=Math.min(1,this.jellyPortalResetElapsed/this.jellyPortalResetDuration);nt=K*(1-R),dt=1-R;const G=(Math.random()-.5)*a*.15,J=(Math.random()-.5)*a*.15;t.translate(G,J)}t.globalAlpha=dt,t.translate(z,k),t.transform($,Math.tan(Q),Math.tan(q),H,0,0),t.imageSmoothingEnabled=!1,t.drawImage(m.lowCanvas,-nt/2,-nt/2,nt,nt),t.restore()}}if(!this.deathAnimation||!this.deathAnimation.screenFilled){const m=`${this.playerVertical}_${this.playerSide}`,v=this.mageImages[m],d=o*a,u=r*a,y=Y.PLAYER_SHADOW_OFFSET_X!==void 0?Y.PLAYER_SHADOW_OFFSET_X:-.28,_=Y.PLAYER_SHADOW_OFFSET_Y!==void 0?Y.PLAYER_SHADOW_OFFSET_Y:-.28,M=d+a*y,T=u+a*_;t.save(),t.beginPath();const S=Y.PLAYER_SHADOW_WIDTH_FACTOR!==void 0?Y.PLAYER_SHADOW_WIDTH_FACTOR:.45,A=Y.PLAYER_SHADOW_HEIGHT_FACTOR!==void 0?Y.PLAYER_SHADOW_HEIGHT_FACTOR:.3,O=a*S,E=a*A;t.ellipse(M,T,O,E,0,0,Math.PI*2),t.fillStyle="rgba(0, 0, 0, 0.4)",t.fill(),t.restore();const b=Math.max(0,Math.floor((M-O)/a)),z=Math.min(i-1,Math.floor((M+O)/a)),k=Math.max(0,Math.floor((T-E)/a)),K=Math.min(i-1,Math.floor((T+E)/a));for(let I=b;I<=z;I++)for(let U=k;U<=K;U++)this.maze.get(I,U,e)===0&&(this.isNearVisited(I,U,e)||this.isAdjacentToStatue(I,U,e))&&(t.save(),this.wallImage.complete&&this.wallImage.naturalWidth!==0?t.drawImage(this.wallImage,I*a,U*a,a,a):(t.fillStyle=Y.COLORS.WALL,t.fillRect(I*a,U*a,a,a)),t.restore());let w=1;if(this.deathAnimation&&this.deathAnimation.active&&(Math.floor(Date.now()/120)%2===0||(w=.2)),v&&v.complete){t.save(),t.globalAlpha=w;const I=a*.9,U=I,$=I*(v.height/v.width);t.translate(d,u),t.scale(this.playerSquashX||1,this.playerSquashY||1);const H=-$*.85;t.drawImage(v,-U/2,H,U,$),t.restore()}else t.save(),t.globalAlpha=w,t.strokeStyle=Y.COLORS.PLAYER_OUTLINE,t.lineWidth=1,t.strokeRect(c*a+2,l*a+2,a-4,a-4),t.fillStyle=Y.COLORS.PLAYER,t.beginPath(),t.arc(d,u,a*.4,0,Math.PI*2),t.fill(),t.strokeStyle=Y.COLORS.PLAYER,t.lineWidth=2,t.beginPath(),t.moveTo(d,u),t.lineTo(d+Math.cos(this.player.dir)*a*1,u+Math.sin(this.player.dir)*a*1),t.stroke(),t.restore();if(Y.SHOW_COLLISION_DEBUG){t.save(),t.strokeStyle="#ff0000",t.lineWidth=1.5;const I=Y.PLAYER_COLLISION_RADIUS*2*a,U=(Y.PLAYER_COLLISION_OFFSET_X||0)*a,$=(Y.PLAYER_COLLISION_OFFSET_Y||0)*a;t.strokeRect(d+U-I/2,u+$-I/2,I,I),t.restore()}if(this.deathAnimation&&this.deathAnimation.active){const I=Math.min(1,this.deathAnimation.delayElapsed/this.deathAnimation.delayDuration),U=-(v&&v.complete?a*.9*(v.height/v.width)*.85:a*.5),$=a*.7,H=(1-I)*U-4*$*I*(1-I);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){t.save();const q=a*.55;t.drawImage(this.keyImage,d-q/2,u+H-q/2,q,q),t.restore()}else t.save(),t.beginPath(),t.arc(d,u+H,a*.15,0,2*Math.PI),t.fillStyle="#ffd700",t.fill(),t.restore()}}if(this.activeNotification){const m=this.activeNotification;t.save(),t.font=`bold ${a*.22}px monospace`;const v=t.measureText(m.text).width,d=a*.4,u=v+d,y=a*.48,_=o*a,M=r*a-a*1.5;let T=u;m.state==="OPENING"?T=u*m.widthProgress:m.state==="CLOSING"&&(T=u*m.closeProgress);const S=this.mazeGen.size*a,A=this.mazeGen.size*a;let O=_;O-T/2<0?O=T/2:O+T/2>S&&(O=S-T/2);let E=M;E-y/2<0?E=y/2:E+y/2>A&&(E=A-y/2),t.fillStyle="#000000",t.fillRect(O-T/2,E-y/2,T,y),t.strokeStyle="#00ffff",t.lineWidth=Math.max(1.5,a*.04),t.strokeRect(O-T/2,E-y/2,T,y),(m.state==="TYPING"||m.state==="WAITING")&&(t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.fillText(m.displayText,O,E)),t.restore()}if(h&&t.restore(),this.isZoomTransitionActive){const d=1-Math.min(1,(2-this.zoomTransitionTimer)/2);t.save(),t.fillStyle=`rgba(0, 0, 0, ${d})`,t.fillRect(0,0,t.canvas.width,t.canvas.height),t.restore()}if(this.deathAnimation&&this.deathAnimation.active){const m=this.deathAnimation.hunter;let v=m.visualX+.5,d=m.visualY+.5;this.deathAnimation.reversing&&(v=this.player.x,d=this.player.y);let u,y;if(n){const _=11/this.zoomVisibleCells,M=this.zoomVisibleCells/2;let T=o,S=r;T<M&&(T=M),T>i-M&&(T=i-M),S<M&&(S=M),S>i-M&&(S=i-M);const A=t.canvas.width/2,O=t.canvas.height/2;u=A+(v-T)*a*_,y=O+(d-S)*a*_}else u=v*a,y=d*a;if(!this.deathAnimation.screenFilled||this.deathAnimation.reversing){const _=Math.hypot(t.canvas.width,t.canvas.height)*1.1,M=this.deathAnimation.elapsed/this.deathAnimation.duration,S=M*M*(3-2*M)*_;t.save(),t.beginPath(),t.arc(u,y,S,0,Math.PI*2),t.clip(),t.fillStyle="rgba(15, 0, 25, 0.96)",t.fillRect(0,0,t.canvas.width,t.canvas.height);const A=45,O=n?11/this.zoomVisibleCells:1;for(let E=0;E<A;E++){const b=Math.random()*Math.PI*2,z=Math.pow(Math.random(),.7)*S,k=u+Math.cos(b)*z,K=y+Math.sin(b)*z,w=(15+Math.random()*70)*O,I=(3+Math.random()*12)*O,U=80+Math.floor(Math.random()*50),$=Math.floor(Math.random()*25),H=130+Math.floor(Math.random()*70);t.fillStyle=Math.random()<.12?"#00ff66":Math.random()<.12?"#00ccff":Math.random()<.08?"#ffffff":`rgb(${U},${$},${H})`,t.fillRect(k-w/2,K-I/2,w,I)}if(Math.random()<.3){t.fillStyle=Math.random()<.7?"#ffffff":"#b3ffff";const E=u+(Math.random()-.5)*S*.8,b=y+(Math.random()-.5)*S*.8,z=(2+Math.random()*5)*O,k=(10+Math.random()*30)*O;t.fillRect(E-z/2,b-k/2,z,k)}t.restore()}else{t.fillStyle="rgba(10, 0, 15, 1.0)",t.fillRect(0,0,t.canvas.width,t.canvas.height),t.fillStyle="rgba(138, 3, 196, 0.08)";for(let T=0;T<t.canvas.height;T+=6)Math.random()<.6&&t.fillRect(0,T+Math.sin(Date.now()*.01+T)*2,t.canvas.width,2);const _=Math.floor(Math.random()*5)+3,M=["#00ff66","#ff0055","#00ccff","#ffff00","#8a03c4","#ffffff"];for(let T=0;T<_;T++){const S=Math.random()*t.canvas.width,A=Math.random()*t.canvas.height,O=80+Math.random()*250,E=8+Math.random()*30;t.fillStyle=M[Math.floor(Math.random()*M.length)],t.globalAlpha=.12+Math.random()*.18,t.fillRect(S,A,O,E)}if(t.globalAlpha=1,Math.random()<.35){const T=Math.floor(Math.random()*t.canvas.height),S=15+Math.floor(Math.random()*80),A=Math.floor(Math.random()*40)-20;t.drawImage(t.canvas,0,T,t.canvas.width,S,A,T,t.canvas.width,S)}Math.random()<.15&&(t.fillStyle="rgba(255, 255, 255, 0.05)",t.fillRect(0,Math.random()*t.canvas.height,t.canvas.width,5+Math.random()*20))}}}updateStaticMapCache(t){const e=this.mazeGen.size,i=e>11,n=i?this.canvas.width/11:this.canvas.width/e,a=i?e*n:this.canvas.width,o=i?e*n:this.canvas.height;(this.staticMapCacheCanvas.width!==a||this.staticMapCacheCanvas.height!==o)&&(this.staticMapCacheCanvas.width=a,this.staticMapCacheCanvas.height=o);const r=this.staticMapCacheCtx;r.clearRect(0,0,a,o);const c=this.player.x,l=this.player.y,h=Math.floor(this.mazeGen.startPos.x),f=Math.floor(this.mazeGen.startPos.y),p=this.mazeGen.startPos.z,g=Date.now();let m=!1;const v=(d,u,y)=>{const _=`${d},${u},${t}`;if(this.jellyPortalFreezeTimer>0&&this.jellyPortalResetCells.has(`${d},${u}`)){const M=Math.min(1,this.jellyPortalResetElapsed/this.jellyPortalResetDuration);r.save(),r.filter="invert(100%)",r.globalAlpha=1-M,y(),r.restore(),m=!0;return}if(this.skipCellAnimations||this.fullyRevealedCells.has(_))y(),this.skipCellAnimations&&this.fullyRevealedCells.add(_);else{let M=this.revealedCellsAnimation.get(_);M===void 0&&(this.revealedCellsAnimation.set(_,g),M=g);const T=g-M,A=Math.min(1,T/400);A<1?(r.save(),r.globalAlpha=A,y(),r.restore(),m=!0):(y(),this.revealedCellsAnimation.delete(_),this.fullyRevealedCells.add(_))}};for(let d=0;d<e;d++)for(let u=0;u<e;u++){const y=this.maze.get(d,u,t);if(y===this.mazeGen.TYPES.STATUE){v(d,u,()=>{if(this.floorImage.complete&&this.floorImage.naturalWidth!==0?r.drawImage(this.floorImage,d*n,u*n,n,n):(r.fillStyle=Y.COLORS.PATH_VISITED,r.fillRect(d*n,u*n,n,n)),r.fillStyle="rgba(0, 0, 0, 0.4)",r.beginPath(),r.ellipse(d*n+n/2,(u+1)*n-n*.15,n*.35,n*.12,0,0,Math.PI*2),r.fill(),this.statueImage.complete&&this.statueImage.naturalWidth!==0){const K=this.statueImage.width/this.statueImage.height,w=n*.85,I=w/K,U=d*n+n/2,$=(u+1)*n-n*.05;r.drawImage(this.statueImage,U-w/2,$-I,w,I)}else r.fillStyle="#555555",r.fillRect(d*n+n*.3,u*n+n*.1,n*.4,n*.8)});continue}const _=this.allTeleports.some(K=>K.x===d&&K.y===u&&K.z===t),M=_&&this.discoveredTeleports.has(`${d},${u},${t}`),T=y===2||y===3||y===4||y===5||M,S=y===this.mazeGen.TYPES.KEY,A=y===this.mazeGen.TYPES.MANA,O=(y===1||_&&!M)&&this.isNearVisited(d,u,t),E=this.revealedPathSet.has(`${d},${u},${t}`),b=t<e-1&&this.maze.get(d,u,t+1)!==0,z=t>0&&this.maze.get(d,u,t-1)!==0,k=b||z;E?v(d,u,()=>{k?this.drawElevator2D(r,d,u,n,b,z,c,l,!0,t):(r.fillStyle=Y.COLORS.REVEALED_PATH,r.fillRect(d*n,u*n,n,n))}):T?v(d,u,()=>{if(M){const K=d===h&&u===f&&t===p,w=`${d},${u},${t}`,I=this.teleportCooldownTicks>0;if(K){const U=Math.floor(c)===d&&Math.floor(l)===u&&t===this.player.z,$=I?Y.COLORS.TELEPORT_INACTIVE:U?Y.COLORS.TELEPORT:Y.COLORS.START;this.drawVortex2D(r,d,u,n,$,U&&!I,w)}else{const U=y===this.mazeGen.TYPES.JELLY_PORTAL,$=I?Y.COLORS.TELEPORT_INACTIVE:U?Y.COLORS.JELLY_PORTAL:Y.COLORS.TELEPORT,H=Math.floor(c)===d&&Math.floor(l)===u&&t===this.player.z;this.drawVortex2D(r,d,u,n,$,H&&!I,w)}m=!0}else if(k)this.drawElevator2D(r,d,u,n,b,z,c,l,!1,t);else if(y===2&&this.floorImage.complete&&this.floorImage.naturalWidth!==0)r.drawImage(this.floorImage,d*n,u*n,n,n);else if(y===this.mazeGen.TYPES.EXIT){const K=`${d},${u},${t}`;if(this.drawVortex2D(r,d,u,n,Y.COLORS.EXIT,!1,K),m=!0,this.keysCollected<this.totalKeys){r.strokeStyle="#ff3300",r.lineWidth=Math.max(2,n*.08);const w=d*n+n/2,I=u*n+n/2,U=n*.2;r.beginPath(),r.arc(w,I-U*.2,U*.6,Math.PI,0),r.stroke(),r.fillStyle="#111",r.fillRect(w-U,I-U*.1,U*2,U*1.5),r.strokeRect(w-U,I-U*.1,U*2,U*1.5),r.fillStyle="#ff3300",r.font=`bold ${Math.max(10,n*.35)}px sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(String(this.totalKeys-this.keysCollected),w,I+U*.6)}}else if(y===2)r.fillStyle=Y.COLORS.PATH_VISITED,r.fillRect(d*n,u*n,n,n);else{const K=`${d},${u},${t}`,w=Math.floor(c)===d&&Math.floor(l)===u&&t===this.player.z,I=w?Y.COLORS.TELEPORT:Y.COLORS.START;this.drawVortex2D(r,d,u,n,I,w,K),m=!0}this.drawCellShadow2D(r,d,u,n,e,y,t)}):S?(v(d,u,()=>{if(this.visitedCells.has(`${d},${u},${t}`))if(M){const I=d===h&&u===f&&t===p,U=`${d},${u},${t}`,$=this.teleportCooldownTicks>0;if(I){const H=Math.floor(c)===d&&Math.floor(l)===u&&t===this.player.z,q=$?Y.COLORS.TELEPORT_INACTIVE:H?Y.COLORS.TELEPORT:Y.COLORS.START;this.drawVortex2D(r,d,u,n,q,H&&!$,U)}else{const H=$?Y.COLORS.TELEPORT_INACTIVE:Y.COLORS.TELEPORT,q=Math.floor(c)===d&&Math.floor(l)===u&&t===this.player.z;this.drawVortex2D(r,d,u,n,H,q&&!$,U)}m=!0}else k?this.drawElevator2D(r,d,u,n,b,z,c,l,!1,t):this.floorImage.complete&&this.floorImage.naturalWidth!==0?r.drawImage(this.floorImage,d*n,u*n,n,n):(r.fillStyle=Y.COLORS.PATH_VISITED,r.fillRect(d*n,u*n,n,n));const w=n*.05*Math.sin(Date.now()/300);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){const I=this.keyImage,U=I.naturalWidth/I.naturalHeight,$=n*.7;let H=$,q=$;U>1?q=$/U:H=$*U;const Q=d*n+(n-H)/2,at=u*n+(n-q)/2+w;r.drawImage(I,Q,at,H,q)}else r.beginPath(),r.arc(d*n+n/2,u*n+n/2+w,n*.25,0,2*Math.PI),r.fillStyle="#ffd700",r.fill();this.drawCellShadow2D(r,d,u,n,e,y,t)}),m=!0):A?(v(d,u,()=>{this.visitedCells.has(`${d},${u},${t}`)&&(this.floorImage.complete&&this.floorImage.naturalWidth!==0?r.drawImage(this.floorImage,d*n,u*n,n,n):(r.fillStyle=Y.COLORS.PATH_VISITED,r.fillRect(d*n,u*n,n,n)));const w=n*.05*Math.sin(Date.now()/250);if(this.manaImage.complete&&this.manaImage.naturalWidth!==0){const I=this.manaImage,U=I.naturalWidth/I.naturalHeight,$=n*.7;let H=$,q=$;U>1?q=$/U:H=$*U;const Q=d*n+(n-H)/2,at=u*n+(n-q)/2+w;r.save(),r.shadowColor="rgba(0, 255, 255, 0.85)",r.shadowBlur=n*.35,r.shadowOffsetX=0,r.shadowOffsetY=0,r.drawImage(I,Q,at,H,q),r.restore()}else r.beginPath(),r.arc(d*n+n/2,u*n+n/2+w,n*.2,0,2*Math.PI),r.fillStyle="#00ffff",r.fill();this.drawCellShadow2D(r,d,u,n,e,y,t)}),m=!0):O?(v(d,u,()=>{if(this.floorImage.complete&&this.floorImage.naturalWidth!==0){r.save(),r.globalAlpha=.35,r.drawImage(this.floorImage,d*n,u*n,n,n),r.restore();const K=.22+.12*Math.sin(Date.now()/250);r.fillStyle=`rgba(136, 204, 255, ${K})`,r.fillRect(d*n,u*n,n,n)}else r.fillStyle=Y.COLORS.PATH_KNOWN,r.fillRect(d*n,u*n,n,n)}),m=!0):y===0&&(this.isNearVisited(d,u,t)||this.isAdjacentToStatue(d,u,t))&&v(d,u,()=>{this.wallImage.complete&&this.wallImage.naturalWidth!==0?r.drawImage(this.wallImage,d*n,u*n,n,n):(r.fillStyle=Y.COLORS.WALL,r.fillRect(d*n,u*n,n,n))})}m?this.staticMapCacheDirty=!0:this.staticMapCacheDirty=!1}isNearVisited(t,e,i){for(let n=-1;n<=1;n++)for(let a=-1;a<=1;a++){const o=t+n,r=e+a;if(o>=0&&o<this.mazeGen.size&&r>=0&&r<this.mazeGen.size){const c=this.maze.get(o,r,i);if(c===2||c===3||c===this.mazeGen.TYPES.JELLY_PORTAL||c===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${o},${r},${i}`))return!0}}return!1}isAdjacentToStatue(t,e,i){const n=this.mazeGen.size,a=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:1},{dx:-1,dy:1},{dx:1,dy:-1},{dx:-1,dy:-1}];for(const o of a){const r=t+o.dx,c=e+o.dy;if(r>=0&&r<n&&c>=0&&c<n&&this.maze.get(r,c,i)===this.mazeGen.TYPES.STATUE)return!0}return!1}populateFullyRevealedCells(t){const e=this.mazeGen.size;for(let i=0;i<e;i++)for(let n=0;n<e;n++){const a=this.maze.get(i,n,t),o=a===this.mazeGen.TYPES.TELEPORT,r=o&&this.discoveredTeleports.has(`${i},${n},${t}`),c=a===2||a===3||a===4||a===5||r,l=(a===1||o&&!r)&&this.isNearVisited(i,n,t),h=this.revealedPathSet.has(`${i},${n},${t}`);(c||l||h||a===0&&this.isNearVisited(i,n,t))&&this.fullyRevealedCells.add(`${i},${n},${t}`)}}updatePulse(){if(!this.isMap3DActive||this.pulsatingMaterials.length===0)return;const t=.2+.5*Math.abs(Math.sin(Date.now()*.003));this.pulsatingMaterials.forEach(e=>{e.emissiveIntensity=t})}loop(){if(this.isDestroyed)return;const t=performance.now(),e=(t-this.lastFrameTime)/1e3;this.lastFrameTime=t;const i=Math.min(e,.1);if(this.isIntroPlaying?this.controls.update():this.update(i),this.updateVortexAngles(i),this.isMap3DActive||this.isIntroPlaying)if(this.isIntroPlaying)this.renderer.render(this.scene,this.camera);else{const n=1-Math.exp(-10*i);this.visualActiveFloor+=(this.activeMapFloor-this.visualActiveFloor)*n,Math.abs(this.activeMapFloor-this.visualActiveFloor)<.001&&(this.visualActiveFloor=this.activeMapFloor),this.drawIsometricMap()}else this.draw2DMap(i);requestAnimationFrame(()=>this.loop())}updateVortexAngles(t){if(!this.vortexAngles)return;const e=Math.floor(this.player.x),i=Math.floor(this.player.y),n=this.player.z,a=Math.floor(this.mazeGen.startPos.x),o=Math.floor(this.mazeGen.startPos.y),r=this.mazeGen.startPos.z,c=`${a},${o},${r}`,h=e===a&&i===o&&n===r?Y.VORTEX_SPEED_FAST:Y.VORTEX_SPEED_NORMAL;this.vortexAngles.set(c,(this.vortexAngles.get(c)||0)+t*h),this.allTeleports&&this.allTeleports.forEach(p=>{const g=`${p.x},${p.y},${p.z}`,m=e===p.x&&i===p.y&&n===p.z,v=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===p.x&&this.inactiveTeleportPos.y===p.y&&this.inactiveTeleportPos.z===p.z,d=m&&!v?Y.VORTEX_SPEED_FAST:Y.VORTEX_SPEED_NORMAL;this.vortexAngles.set(g,(this.vortexAngles.get(g)||0)+t*d)});const f=this.getExitPos();if(f){const p=`${f.x},${f.y},${f.z}`,g=Y.VORTEX_SPEED_NORMAL;this.vortexAngles.set(p,(this.vortexAngles.get(p)||0)+t*g)}}getHexColorVariation(t,e){let i=t.replace("#","");i.length===3&&(i=i.split("").map(c=>c+c).join(""));let n=parseInt(i,16),a=(n>>16)+e,o=(n>>8&255)+e,r=(n&255)+e;return a=Math.max(0,Math.min(255,a)),o=Math.max(0,Math.min(255,o)),r=Math.max(0,Math.min(255,r)),`#${((1<<24)+(a<<16)+(o<<8)+r).toString(16).slice(1)}`}drawVortex2D(t,e,i,n,a,o,r){const c=e*n+n/2,l=i*n+n/2;t.save(),t.translate(c,l),t.fillStyle=a,t.fillRect(-n/2,-n/2,n,n);const h=this.vortexAngles.get(r)||0;t.rotate(h);const f=this.getHexColorVariation(a,45),p=this.getHexColorVariation(a,-45),g=t.createRadialGradient(0,0,0,0,0,n*.45);g.addColorStop(0,f),g.addColorStop(.4,a),g.addColorStop(1,p);const m=t.createRadialGradient(0,0,0,0,0,n*.45);m.addColorStop(0,"#ffffff"),m.addColorStop(.3,f),m.addColorStop(1,"rgba(255, 255, 255, 0)");const v=3,d=n*.45;for(let u=0;u<v;u++){const y=u*2*Math.PI/v;t.beginPath(),t.strokeStyle=g,t.lineWidth=n*.09,t.lineCap="round";for(let _=0;_<=d;_+=1){const M=5/d,T=y+_*M,S=_*Math.cos(T),A=_*Math.sin(T);_===0?t.moveTo(S,A):t.lineTo(S,A)}t.stroke(),t.beginPath(),t.strokeStyle=m,t.lineWidth=n*.04,t.lineCap="round";for(let _=n*.12;_<=d;_+=1){const M=5/d,T=y+_*M+.15,S=_*Math.cos(T),A=_*Math.sin(T);_===Math.floor(n*.12)?t.moveTo(S,A):t.lineTo(S,A)}t.stroke()}t.restore()}playContinueAnimation(){this.isIntroPlaying=!0;const t=this.mazeGen.size;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="block");const e=document.getElementById("map3d-instructions");e&&(e.style.display="block"),this.isometricCanvas&&(this.isometricCanvas.style.display="none"),this.ui.setMap3DVisible(!0),this.isMap3DActive=!0,this.updateRendererSize(),this.build3DMap(!1),this.camera.position.set(t*.9,t*this.vScale*.6,t*.9),this.controls.target.set(0,0,0),this.controls.update(),this.hideCanvasInstant(),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=2,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableRotate=!1;const i=()=>{this.activeContinueTimer&&(clearTimeout(this.activeContinueTimer),this.activeContinueTimer=null),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this.controls.autoRotate=!1,this.animateCameraToPlayer(()=>{this._transitionToGame()})};this.activeSkipHandler=()=>i(),window.addEventListener("keydown",this.activeSkipHandler,{once:!0}),window.addEventListener("touchstart",this.activeSkipHandler,{once:!0}),this.activeContinueTimer=setTimeout(i,2500)}animateCameraToPlayer(t){const e=this.mazeGen.size,i=this.player.x-e/2,n=(this.player.z-e/2)*this.vScale,a=this.player.y-e/2,o=this.controls.target.clone(),r=new j(i,n,a),c=this.camera.position.clone(),l=new j(i+4,n+5,a+4),h=1100,f=performance.now(),p=g=>{if(this.isDestroyed)return;const m=g-f,v=Math.min(m/h,1),d=v<.5?4*v*v*v:1-Math.pow(-2*v+2,3)/2;this.controls.target.lerpVectors(o,r,d),this.camera.position.lerpVectors(c,l,d),this.controls.update(),v<1?requestAnimationFrame(p):t&&t()};requestAnimationFrame(p)}playIntroAnimation(){this.isIntroPlaying=!0;const t=this.mazeGen.size;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="block");const e=document.getElementById("map3d-instructions");for(e&&(e.style.display="block"),this.isometricCanvas&&(this.isometricCanvas.style.display="none");this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(new fo(16777215,.7));const i=new uo(16777215,.5);i.position.set(10,20,10),this.scene.add(i),this.ui.setMap3DVisible(!0),this.isMap3DActive=!0,this.updateRendererSize(),this.camera.position.set(t*.9,t*this.vScale*.6,t*.9),this.controls.target.set(0,0,0),this.controls.update(),this.hideCanvasInstant();const n=this.mazeGen.startPos,a=this.getExitPos(),o=new we(.92,.92,.92),r=new ie({color:Y.COLORS.THREE_START,emissive:Y.COLORS.THREE_START,emissiveIntensity:.6,transparent:!0,opacity:.95}),c=new te(o,r);c.position.set(Math.floor(n.x)-t/2,(n.z-t/2)*this.vScale,Math.floor(n.y)-t/2),this.scene.add(c);const l=new ie({color:16724736,emissive:16724736,emissiveIntensity:.6,transparent:!0,opacity:.95}),h=new te(o,l);h.position.set(a.x-t/2,(a.z-t/2)*this.vScale,a.y-t/2);const f=new we(.95,.95,.95),p=new fs({color:16711680,wireframe:!0}),g=new te(f,p);h.add(g),this.scene.add(h);const m=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],v=`${Math.floor(n.x)},${Math.floor(n.y)},${n.z}`,d=`${a.x},${a.y},${a.z}`,u=new Set([v,d]),y=[{x:Math.floor(n.x),y:Math.floor(n.y),z:n.z}],_=[{x:a.x,y:a.y,z:a.z}];let M=0,T=0;const S=[];for(;M<y.length||T<_.length;){if(M<y.length){const{x:$,y:H,z:q}=y[M++];for(const[Q,at,nt]of m){const W=$+Q,rt=H+at,dt=q+nt,R=`${W},${rt},${dt}`;W>=0&&W<t&&rt>=0&&rt<t&&dt>=0&&dt<t&&!u.has(R)&&this.maze.get(W,rt,dt)!==this.mazeGen.TYPES.WALL&&(u.add(R),y.push({x:W,y:rt,z:dt}),S.push({x:W,y:rt,z:dt}))}}if(T<_.length){const{x:$,y:H,z:q}=_[T++];for(const[Q,at,nt]of m){const W=$+Q,rt=H+at,dt=q+nt,R=`${W},${rt},${dt}`;W>=0&&W<t&&rt>=0&&rt<t&&dt>=0&&dt<t&&!u.has(R)&&this.maze.get(W,rt,dt)!==this.mazeGen.TYPES.WALL&&(u.add(R),_.push({x:W,y:rt,z:dt}),S.push({x:W,y:rt,z:dt}))}}}this.controls.autoRotate=!0,this.controls.autoRotateSpeed=1.8,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableRotate=!1;const A=new we(.88,.88,.88),O=new ie({color:Y.COLORS.THREE_VISITED,transparent:!0,opacity:.72}),E=20,b=200,z=S.length,k=Math.max(1,Math.ceil(z/b));let K=0;this.activeIntroTimer=null;const w=[],I=()=>{this.activeIntroTimer&&(clearTimeout(this.activeIntroTimer),this.activeIntroTimer=null),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this._playGlitchAndTransition(w)};this.activeSkipHandler=()=>I(),window.addEventListener("keydown",this.activeSkipHandler,{once:!0}),window.addEventListener("touchstart",this.activeSkipHandler,{once:!0});const U=()=>{if(this.isDestroyed)return;const $=Math.min(K+k,S.length);for(;K<$;K++){const{x:H,y:q,z:Q}=S[K],at=Q%2===0;let nt;at?nt=new ps(.35,.35,2*this.vScale,8):nt=A;const W=new te(nt,O);W.position.set(H-t/2,(Q-t/2)*this.vScale,q-t/2),this.scene.add(W),w.push(W)}K<S.length?this.activeIntroTimer=setTimeout(U,E):(this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this._playGlitchAndTransition(w))};this.activeIntroTimer=setTimeout(U,E)}_playGlitchAndTransition(t){if(this.isDestroyed)return;const e=5,i=90;let n=0;const a=()=>{if(this.isDestroyed)return;const o=n%2===0;t.forEach(r=>{r&&(r.visible=o)}),n++,n<e*2?setTimeout(a,i):(t.forEach(r=>{r&&(r.visible=!1)}),setTimeout(()=>this._transitionToGame(),400))};a()}_transitionToGame(){this.isDestroyed||(this.controls&&(this.controls.autoRotate=!1,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls.enableRotate=!0),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.classList.add("intro-fade-out"),setTimeout(()=>{if(this.isDestroyed)return;this.ui.setMap3DVisible(!1),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.classList.remove("intro-fade-out"),this.isMap3DActive=!1,this.isIntroPlaying=!1,this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1);const t=document.getElementById("map-area-container"),e=document.getElementById("left-hud-panel"),i=document.getElementById("right-hud-panel"),n=document.getElementById("bottom-hud-container");t&&(t.classList.remove("intro-hidden"),t.classList.add("intro-reveal"),setTimeout(()=>t.classList.remove("intro-reveal"),700)),e&&(e.classList.remove("intro-hidden"),e.classList.add("intro-reveal"),setTimeout(()=>e.classList.remove("intro-reveal"),700)),i&&(i.classList.remove("intro-hidden"),i.classList.add("intro-reveal"),setTimeout(()=>i.classList.remove("intro-reveal"),700)),n&&(n.classList.remove("intro-hidden"),n.classList.add("intro-reveal"),setTimeout(()=>n.classList.remove("intro-reveal"),700)),this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2,this.isResumedFromSave||this.ui.showInfoBanner(Rt("msgWhereAmI"))},600))}startStorytelling(){this.isStoryActive=!0,this.storyMsgIndex=0,this.storyState="OPENING",this.storyWidthProgress=0,this.storyCloseProgress=1,this.storyCharIndex=0,this.storyTypeTimer=0;const t=document.getElementById("story-screen");t&&t.classList.remove("hidden");const e=document.getElementById("story-image-loader"),i=document.getElementById("story-dialogue");this.isPreloadingActive=!1;const n=()=>{this.isPreloadingActive=!1,i&&(i.style.transform="scaleX(0)"),this.updateStoryImage(),this.handleStoryKeyDown=o=>{o.key.toLowerCase()==="escape"?this.skipStory():this.isPreloadingActive||this.triggerAdvanceStory(),o.preventDefault()},window.addEventListener("keydown",this.handleStoryKeyDown),this.handleStoryClick=o=>{const r=o.target;r&&r.closest("#story-skip-btn")||this.isPreloadingActive||this.triggerAdvanceStory()},this.handleStoryTouch=o=>{const r=o.target;r&&r.closest("#story-skip-btn")||(this.isPreloadingActive||this.triggerAdvanceStory(),o.preventDefault())},t&&(t.addEventListener("click",this.handleStoryClick),t.addEventListener("touchstart",this.handleStoryTouch,{passive:!1}))},a=document.getElementById("story-skip-btn");if(a&&(a.onclick=o=>{o.stopPropagation(),this.skipStory()}),e&&i&&(i.style.transform="scaleX(0)",this.storyImagesLoadedCount<this.storyImagesTotalCount)){this.isPreloadingActive=!0,e.classList.remove("hidden"),this.storyImagesPreloadPromise.then(()=>{e.classList.add("hidden"),n()});return}n()}endStorytelling(){this.isStoryActive=!1,this.isPreloadingActive=!1;const t=document.getElementById("story-screen");t&&t.classList.add("hidden"),this.handleStoryKeyDown&&(window.removeEventListener("keydown",this.handleStoryKeyDown),this.handleStoryKeyDown=null),this.handleStoryClick&&t&&(t.removeEventListener("click",this.handleStoryClick),this.handleStoryClick=null),this.handleStoryTouch&&t&&(t.removeEventListener("touchstart",this.handleStoryTouch),this.handleStoryTouch=null),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1);const e=document.getElementById("map-area-container"),i=document.getElementById("left-hud-panel"),n=document.getElementById("right-hud-panel"),a=document.getElementById("bottom-hud-container");e&&(e.classList.remove("hidden","intro-hidden"),e.classList.add("intro-reveal"),setTimeout(()=>e.classList.remove("intro-reveal"),700)),i&&(i.classList.remove("hidden","intro-hidden"),i.classList.add("intro-reveal"),setTimeout(()=>i.classList.remove("intro-reveal"),700)),n&&(n.classList.remove("hidden","intro-hidden"),n.classList.add("intro-reveal"),setTimeout(()=>n.classList.remove("intro-reveal"),700)),a&&(a.classList.remove("hidden","intro-hidden"),a.classList.add("intro-reveal"),setTimeout(()=>a.classList.remove("intro-reveal"),700)),this.ui.setMap3DVisible(!1),this.isMap3DActive=!1,this.isIntroPlaying=!1,this.staticMapCacheDirty=!0,this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2,this.isResumedFromSave||this.ui.showInfoBanner(Rt("msgWhereAmI"))}updateStoryImage(){const t=document.getElementById("story-img"),e=document.getElementById("story-image-canvas");if(!(!t||!e))if(e.style.background="#0b0b0b",this.storyMsgIndex===5)t.style.display="none",e.style.background="radial-gradient(circle, #222222 0%, #000000 80%)",e.removeAttribute("data-placeholder");else{const i=this.preloadedStoryImages[this.storyMsgIndex];if(i)t.src=i.src,t.style.display="block",e.removeAttribute("data-placeholder");else{let n="";this.storyMsgIndex===0?n="assets/images/presentation/1-mystical-church-of-chaos.jpg":this.storyMsgIndex===1?n="assets/images/presentation/2-mystical-church-of-chaos.jpg":this.storyMsgIndex===2?n="assets/images/presentation/3-the-jelly-god.jpg":this.storyMsgIndex===3?n="assets/images/presentation/4-player-alone.jpg":this.storyMsgIndex===4&&(n="assets/images/presentation/5-player-thrown.jpg"),t.src=n,t.onerror=()=>{t.style.display="none",e.setAttribute("data-placeholder",`[Image ${this.storyMsgIndex+1}]`)},t.onload=()=>{t.style.display="block",e.removeAttribute("data-placeholder")}}}}updateStory(t){if(!this.isStoryActive||this.isPreloadingActive)return;const e=document.getElementById("story-text"),i=document.getElementById("story-dialogue"),n=document.getElementById("story-arrow");if(!i||!e)return;const a=["storyMsg1","storyMsg2","storyMsg3","storyMsg4","storyMsg5","storyMsg6"];if(this.storyMsgIndex>=a.length){this.endStorytelling();return}const o=Rt(a[this.storyMsgIndex]),r=c=>c<.5?4*c*c*c:1-Math.pow(-2*c+2,3)/2;this.storyState==="OPENING"?(e.textContent="",n&&n.classList.add("hidden"),this.storyWidthProgress+=t/.45,this.storyWidthProgress>=1&&(this.storyWidthProgress=1,this.storyState="TYPING",this.storyCharIndex=0,this.storyTypeTimer=0),i.style.transform=`scaleX(${r(this.storyWidthProgress)})`):this.storyState==="TYPING"?(i.style.transform="scaleX(1)",n&&n.classList.add("hidden"),this.storyTypeTimer+=t,this.storyTypeTimer>=.025&&(this.storyTypeTimer=0,this.storyCharIndex++,e.textContent=o.substring(0,this.storyCharIndex),this.storyCharIndex>=o.length&&(this.storyState="WAITING"))):this.storyState==="WAITING"?(i.style.transform="scaleX(1)",e.textContent=o,n&&n.classList.remove("hidden")):this.storyState==="CLOSING"&&(e.textContent="",n&&n.classList.add("hidden"),this.storyCloseProgress-=t/.45,this.storyCloseProgress<=0&&(this.storyCloseProgress=0,this.endStorytelling()),i.style.transform=`scaleX(${r(this.storyCloseProgress)})`)}triggerAdvanceStory(){const t=["storyMsg1","storyMsg2","storyMsg3","storyMsg4","storyMsg5","storyMsg6"];if(this.storyMsgIndex>=t.length)return;const e=Rt(t[this.storyMsgIndex]);if(this.storyState==="CLOSING"){this.skipStory();return}if(this.storyState==="OPENING")this.storyState="TYPING",this.storyWidthProgress=1,this.storyCharIndex=0,this.storyTypeTimer=0;else if(this.storyState==="TYPING"){this.storyState="WAITING",this.storyCharIndex=e.length;const i=document.getElementById("story-text");i&&(i.textContent=e)}else if(this.storyState==="WAITING")if(this.storyMsgIndex+1<t.length){this.storyMsgIndex++,this.storyState="TYPING",this.storyCharIndex=0,this.storyTypeTimer=0,this.updateStoryImage();const i=document.getElementById("story-text");i&&(i.textContent="")}else this.storyState="CLOSING",this.storyCloseProgress=1}skipStory(){this.endStorytelling()}toggleTeleportMap(t){this.isMap3DActive=t,this.isTeleportMode=t;const e=document.getElementById("mobile-teleport-exit-btn");if(t){this.isMouseOrTouchDetected=!1,e&&e.classList.remove("hidden"),this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.add("hidden"),this.ui.setMap3DVisible(!0),this.activeMapFloor=this.player.z,this.visualActiveFloor=this.player.z,this.mapCursor={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.mapZoom=1,this.mapPanOffsetX=0,this.mapPanOffsetY=0;const i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,o=this.allTeleports.findIndex(c=>c.x===i&&c.y===n&&c.z===a);o!==-1&&(this.selectedTeleportIndex=o),this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="none");const r=document.getElementById("map3d-instructions");r&&(r.style.display="none"),this.isometricCanvas?this.isometricCanvas.style.display="block":this.initIsometricCanvas(),this.teleportConfirmModalActive=!1}else e&&e.classList.add("hidden"),this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.remove("hidden"),this.ui.setMap3DVisible(!1),this.isometricCanvas&&(this.isometricCanvas.style.display="none"),this.teleportConfirmModalActive=!1}onCanvasClick(t){if(!this.isMap3DActive)return;const e=this.renderer.domElement.getBoundingClientRect();if(this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.isTeleportMode){const i=this.raycaster.intersectObjects(this.teleportMeshes);if(i.length>0){const n=i[0].object,{gridX:a,gridY:o,gridZ:r}=n.userData,c=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===a&&this.inactiveTeleportPos.y===o&&this.inactiveTeleportPos.z===r,l=Math.floor(this.player.x),h=Math.floor(this.player.y),f=this.player.z;a===l&&o===h&&r===f?this.toggleTeleportMap(!1):c||this.teleportTo(a,o,r)}}else{const i=this.raycaster.intersectObjects(this.knownMeshes);if(i.length>0){const n=i[0].object,{gridX:a,gridY:o,gridZ:r}=n.userData;this.triggerPathReveal(a,o,r)}}}toggleZoom(){if(this.mazeGen.size<=11)return;this.isZoomActive=!this.isZoomActive,this.staticMapCacheDirty=!0;const t=document.getElementById("zoom-out-icon"),e=document.getElementById("zoom-in-icon");t&&e&&(this.isZoomActive?(t.classList.remove("hidden"),e.classList.add("hidden")):(t.classList.add("hidden"),e.classList.remove("hidden")))}togglePause(){this.isGameOver||this.isDestroyed||this.isIntroPlaying||(this.isPaused=!this.isPaused,this.isPaused?(this.ui.showPause(),this.ui.uiMobilePauseBtn&&this.ui.uiMobilePauseBtn.classList.add("hidden")):(this.ui.hidePause(),this.ui.uiMobilePauseBtn&&!this.ui.uiMobileControls.classList.contains("hidden")&&this.ui.uiMobilePauseBtn.classList.remove("hidden")))}checkExitNeighborVisited(){const t=this.getExitPos(),e=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const i of e){const n=t.x+i.dx,a=t.y+i.dy,o=t.z+i.dz;if(n>=0&&n<this.mazeGen.size&&a>=0&&a<this.mazeGen.size&&o>=0&&o<this.mazeGen.size){const r=this.maze.get(n,a,o);if(r!==this.mazeGen.TYPES.WALL&&(r===this.mazeGen.TYPES.VISITED||r===this.mazeGen.TYPES.START||r===this.mazeGen.TYPES.ELEVATOR_VISITED))return!0}}return!1}findShortestPath(t,e,i=!1){const n=this.mazeGen.size,a=new Int8Array(n*n*n);for(let o=0;o<n;o++)for(let r=0;r<n;r++)for(let c=0;c<n;c++){const l=o*n*n+r*n+c,h=this.maze.get(o,r,c),f=o===t.x&&r===t.y&&c===t.z,p=o===e.x&&r===e.y&&c===e.z,g=o===e.x&&r===e.y&&(c===e.z-1||c===e.z+1)&&c%2===0;if(h===this.mazeGen.TYPES.WALL){a[l]=0;continue}const v=h===this.mazeGen.TYPES.TELEPORT,d=v&&this.discoveredTeleports.has(`${o},${r},${c}`),u=h===this.mazeGen.TYPES.VISITED||h===this.mazeGen.TYPES.START||h===this.mazeGen.TYPES.ELEVATOR_VISITED||d,y=(h===this.mazeGen.TYPES.PATH||v&&!d)&&this.isNearVisited(o,r,c);let _=!1;i?_=u||f||p||g:_=u||y||f||p||g,a[l]=_?1:0}return nl(t,e,a,n,0)??[]}triggerPathReveal(t,e,i){if(this.pathRevealInterval||this.pathfinderBlockedUntil&&Date.now()<this.pathfinderBlockedUntil)return;if(this.pathfindersRemaining<=0){this.ui.showInfoBanner(Rt("msgNoPathfindersRemaining"));return}this.pathRevealInterval&&(clearInterval(this.pathRevealInterval),this.pathRevealInterval=null),this.revealedPathSet.clear();const n=this.maze.get(t,e,i)===this.mazeGen.TYPES.EXIT;if(n&&!this.exitPathfinderUnlocked){this.ui.showInfoBanner(Rt("msgExitNotFoundYet"));return}let a=i;i%2===0&&(a=this.player.z<i?i+1:i-1,a<1&&(a=1),a>=this.mazeGen.size&&(a=this.mazeGen.size-2));const o={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},r={x:t,y:e,z:a},c=this.findShortestPath(o,r,n);!c||c.length===0||(this.pathfindersRemaining--,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),ns(this),this.activePathReveal=c,this.revealedPathProgress=0,this.revealedPathSet.add(`${t},${e},${i}`),this.pathRevealInterval=setInterval(()=>{if(this.revealedPathProgress<this.activePathReveal.length){const l=this.activePathReveal[this.revealedPathProgress],h=`${l.x},${l.y},${l.z}`;if(this.revealedPathSet.add(h),this.revealedPathProgress>0){const f=this.activePathReveal[this.revealedPathProgress-1];if(Math.abs(l.z-f.z)===2){const p=(l.z+f.z)/2,g=`${l.x},${l.y},${p}`;if(this.revealedPathSet.add(g),this.isMap3DActive&&this.gridMeshes){const m=this.mazeGen.size,v=this.gridMeshes[l.x*m*m+l.y*m+p];v&&(v.material=new ie({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.95*(this.isTeleportMode?.2:1)}))}}}if(this.staticMapCacheDirty=!0,this.isMap3DActive&&this.gridMeshes){const f=this.mazeGen.size,p=this.gridMeshes[l.x*f*f+l.y*f+l.z];p&&(p.material=new ie({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.95*(this.isTeleportMode?.2:1)}))}this.revealedPathProgress++}else clearInterval(this.pathRevealInterval),this.pathRevealInterval=null,this.pathfinderBlockedUntil=Date.now()+600},120))}teleportTo(t,e,i){if(this.skipCellAnimations=!0,this.player.x=t+Y.PLAYER_START_X,this.player.y=e+Y.PLAYER_START_Y%1,this.player.z=i,this.staticMapCacheDirty=!0,this.toggleTeleportMap(!1),this.maze.get(t,e,i)===this.mazeGen.TYPES.PATH&&(this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${t},${e},${i}`)),!this.isSafeMode){const n=Math.floor(this.degree*1.5)+3;this.teleportCooldownTicks=n,this.inactiveTeleportPos={x:t,y:e,z:i},this.ui.showInfoBanner(Rt("msgOopsNoisyShit"));for(const a of this.hunters){a.state="TELEPORT_TRACKING";const o=a.findPathToTarget({x:t,y:e,z:i},this.maze,this.mazeGen.TYPES);o?a.pathToTarget=o:a.pathToTarget=[]}}this.updateFloorUI(),this.draw2DMap(),this.input.keys={}}initIsometricCanvas(){const t=document.createElement("canvas");this.isometricCanvas=t,t.id="isometric-map-canvas",t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.zIndex="101",this.isometricCtx=t.getContext("2d"),this.ui.uiMap3dContainer.appendChild(t),t.addEventListener("click",d=>this.handleIsometricClick(d));const e=()=>{this.isMouseOrTouchDetected||(this.isMouseOrTouchDetected=!0)};t.addEventListener("mousemove",e),t.addEventListener("pointerdown",e);let i=null,n=null,a=0,o=0,r=0,c=0,l=!1,h=!1,f=!1,p=0;t.addEventListener("touchstart",d=>{if(!(!this.isMap3DActive||this.isIntroPlaying)){if(p=0,f=!1,d.touches.length===1){const u=d.touches[0];a=u.clientX,o=u.clientY,r=this.mapPanOffsetX,c=this.mapPanOffsetY,h=!0,l=!1}else if(d.touches.length===2){l=!0,h=!1;const u=d.touches[0],y=d.touches[1];i=Math.hypot(u.clientX-y.clientX,u.clientY-y.clientY),n=this.mapZoom}}},{passive:!1}),t.addEventListener("touchmove",d=>{if(!(!this.isMap3DActive||this.isIntroPlaying)){if(l&&d.touches.length===2){d.preventDefault();const u=d.touches[0],y=d.touches[1],_=Math.hypot(u.clientX-y.clientX,u.clientY-y.clientY);if(i&&i>0&&n){const M=t.getBoundingClientRect(),T=(u.clientX+y.clientX)/2-M.left,S=(u.clientY+y.clientY)/2-M.top,A=this.mapZoom;let O=n*(_/i);O=Math.max(.5,Math.min(4,O));const E=O/A;this.mapPanOffsetX=T-(T-(M.width/2+this.mapPanOffsetX))*E-M.width/2,this.mapPanOffsetY=S-(S-(M.height/2+this.mapPanOffsetY))*E-M.height/2,this.mapZoom=O,p=100}}else if(h&&d.touches.length===1){const u=d.touches[0],y=u.clientX-a,_=u.clientY-o,M=Math.hypot(y,_);if(p=Math.max(p,M),!f&&Math.abs(_)>40&&Math.abs(_)>Math.abs(y)*1.5){const T=this.mazeGen.size;_<-40?this.activeMapFloor-2>=1&&(this.activeMapFloor-=2,f=!0):_>40&&this.activeMapFloor+2<=T-2&&(this.activeMapFloor+=2,f=!0)}f||(this.mapPanOffsetX=r+y,this.mapPanOffsetY=c+_),d.preventDefault()}}},{passive:!1}),t.addEventListener("touchend",d=>{if(l=!1,h=!1,p<8&&!f){const u=d.changedTouches[0];if(u){const y={clientX:u.clientX,clientY:u.clientY};this.handleIsometricClick(y)}}}),t.addEventListener("wheel",d=>{if(!this.isMap3DActive||this.isIntroPlaying)return;d.preventDefault();const u=t.getBoundingClientRect(),y=d.clientX-u.left,_=d.clientY-u.top,M=this.mapZoom,T=1.15;let S=d.deltaY<0?M*T:M/T;S=Math.max(.5,Math.min(4,S));const A=u.width,O=u.height,E=S/M;this.mapPanOffsetX=y-(y-(A/2+this.mapPanOffsetX))*E-A/2,this.mapPanOffsetY=_-(_-(O/2+this.mapPanOffsetY))*E-O/2,this.mapZoom=S},{passive:!1});let g=!1,m=0,v=0;t.addEventListener("mousedown",d=>{if(!this.isMap3DActive||this.isIntroPlaying)return;const u=t.getBoundingClientRect(),y=d.clientX-u.left,_=d.clientY-u.top;if(!(this.floorClickRects&&this.floorClickRects.some(M=>y>=M.x&&y<=M.x+M.w&&_>=M.y&&_<=M.y+M.h))){if(this.isTeleportMode){if(this.teleportConfirmModalActive&&this.teleportModalClickRects&&this.teleportModalClickRects.some(M=>y>=M.x&&y<=M.x+M.w&&_>=M.y&&_<=M.y+M.h)||!this.teleportConfirmModalActive&&this.teleportDotsClickRects&&this.teleportDotsClickRects.some(M=>y>=M.x&&y<=M.x+M.w&&_>=M.y&&_<=M.y+M.h))return;if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const M=this.teleportGoBtnClickRect;if(y>=M.x&&y<=M.x+M.w&&_>=M.y&&_<=M.y+M.h)return}}g=!0,m=d.clientX,v=d.clientY}}),window.addEventListener("mousemove",d=>{if(g){const u=d.clientX-m,y=d.clientY-v;this.mapPanOffsetX+=u,this.mapPanOffsetY+=y,m=d.clientX,v=d.clientY}}),window.addEventListener("mouseup",()=>{g=!1}),t.addEventListener("mousemove",d=>{if(!this.isMap3DActive||this.isIntroPlaying)return;const u=t.getBoundingClientRect(),y=d.clientX-u.left,_=d.clientY-u.top;if(t.style.cursor="default",this.isTeleportMode){if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const M=this.teleportGoBtnClickRect;if(y>=M.x&&y<=M.x+M.w&&_>=M.y&&_<=M.y+M.h){t.style.cursor="pointer";return}}if(this.teleportConfirmModalActive&&this.teleportModalClickRects){for(const M of this.teleportModalClickRects)if(y>=M.x&&y<=M.x+M.w&&_>=M.y&&_<=M.y+M.h){this.teleportModalSelection=M.selection,t.style.cursor="pointer";return}}else if(this.teleportDotsClickRects){const M=this.getSelectableTeleportIndices();for(const T of this.teleportDotsClickRects)if(y>=T.x&&y<=T.x+T.w&&_>=T.y&&_<=T.y+T.h&&M.includes(T.index)){this.selectedTeleportIndex=T.index;const S=this.allTeleports[T.index];this.activeMapFloor=S.z,this.mapCursor={x:S.x,y:S.y,z:S.z},t.style.cursor="pointer";return}}}if(!this.isTeleportMode){const M=this.mazeGen.size,T=this.activeMapFloor;let S=u.width*.7/M;S=Math.max(20,Math.min(48,S));const A=S*this.mapZoom,O=A/2,E=A/4,b=O*5,z=u.width/2+this.mapPanOffsetX,k=u.height/2+this.mapPanOffsetY,K=[];T+2<=M-2&&K.push(T+2),T+1<M&&K.push(T+1),K.push(T),T-1>=0&&K.push(T-1),T-2>=1&&K.push(T-2);for(const w of K){const I=k-(w-T)*b,U=(y-z)/O,$=(_-I)/E,H=Math.round((U+$)/2),q=Math.round(($-U)/2);if(H>=0&&H<M&&q>=0&&q<M&&this.getInteractiveElements(T).some(nt=>nt.x===H&&nt.y===q&&nt.z===w)){this.mapCursor={x:H,y:q,z:w},t.style.cursor="pointer";return}}}})}handleIsometricClick(t){if(!this.isMap3DActive||this.isIntroPlaying)return;const e=this.isometricCanvas.getBoundingClientRect(),i=t.clientX-e.left,n=t.clientY-e.top;if(this.isTeleportMode){if(this.teleportConfirmModalActive){if(this.teleportModalClickRects){for(const _ of this.teleportModalClickRects)if(i>=_.x&&i<=_.x+_.w&&n>=_.y&&n<=_.y+_.h){if(_.selection==="go"){const M=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(M.x,M.y,M.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;return}}this.teleportConfirmModalActive=!1;return}if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const _=this.teleportGoBtnClickRect;if(i>=_.x&&i<=_.x+_.w&&n>=_.y&&n<=_.y+_.h){const M=this.allTeleports[this.selectedTeleportIndex],T=Math.floor(this.player.x),S=Math.floor(this.player.y),A=this.player.z,O=M&&M.x===T&&M.y===S&&M.z===A;M&&!O&&(this.teleportTo(M.x,M.y,M.z),this.toggleTeleportMap(!1));return}}if(this.teleportDotsClickRects){const _=this.teleportDotsClickRects.find(M=>i>=M.x&&i<=M.x+M.w&&n>=M.y&&n<=M.y+M.h);if(_){if(this.getSelectableTeleportIndices().includes(_.index)){this.selectedTeleportIndex=_.index;const T=this.allTeleports[_.index];this.activeMapFloor=T.z,this.mapCursor={x:T.x,y:T.y,z:T.z}}return}}}if(this.floorClickRects){for(const _ of this.floorClickRects)if(i>=_.x&&i<=_.x+_.w&&n>=_.y&&n<=_.y+_.h){this.activeMapFloor=_.floor;return}}const a=this.mazeGen.size,o=this.activeMapFloor;let r=e.width*.7/a;r=Math.max(20,Math.min(48,r));const c=r*this.mapZoom,l=c/2,h=c/4,f=l*5,p=e.width/2+this.mapPanOffsetX,g=e.height/2+this.mapPanOffsetY,m=(_,M,T)=>{const S=(_-M)*l+p,A=(_+M)*h-(T-o)*f+g;return{x:S,y:A}};if(this.isTeleportMode){const _=this.getInteractiveElements(o);let M=null,T=1/0;const S=this.isTouchDevice?52:35;for(const A of _){if(A.type!=="teleport")continue;const O=m(A.x,A.y,A.z),E=i-O.x,b=n-O.y,z=Math.sqrt(E*E+b*b);z<T&&(T=z,M=A)}if(M&&T<=S){const{x:A,y:O,z:E}=M,b=this.allTeleports.findIndex(k=>k.x===A&&k.y===O&&k.z===E),z=this.getSelectableTeleportIndices();b!==-1&&z.includes(b)&&(this.selectedTeleportIndex=b,this.mapCursor={x:A,y:O,z:E})}return}const v=this.getInteractiveElements(o);let d=null,u=1/0;const y=this.isTouchDevice?52:35;for(const _ of v){const M=m(_.x,_.y,_.z),T=i-M.x,S=n-M.y,A=Math.sqrt(T*T+S*S);A<u&&(u=A,d=_)}if(d&&u<=y){this.mapCursor={x:d.x,y:d.y,z:d.z},this.triggerPathReveal(d.x,d.y,d.z);return}}navigateCursor(t){const e=this.activeMapFloor,i=this.getInteractiveElements(e);if(i.length===0)return;const n=this.mapCursor.x,a=this.mapCursor.y,o=this.mapCursor.z,r=this.mazeGen.size;if(t==="left"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e+1&&o===e-1)){this.mapCursor={x:n,y:a,z:e+1};return}for(let l=n-1;l>=0;l--){const h=i.filter(f=>f.x===l&&f.y===a);if(h.length>0){const f=h.find(g=>g.z===e-1),p=h.find(g=>g.z===e+1);f&&p?this.mapCursor={x:l,y:a,z:e-1}:this.mapCursor={x:l,y:a,z:h[0].z};return}}}else if(t==="right"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e-1&&o===e+1)){this.mapCursor={x:n,y:a,z:e-1};return}for(let l=n+1;l<r;l++){const h=i.filter(f=>f.x===l&&f.y===a);if(h.length>0){const f=h.find(g=>g.z===e-1),p=h.find(g=>g.z===e+1);f&&p?this.mapCursor={x:l,y:a,z:e+1}:this.mapCursor={x:l,y:a,z:h[0].z};return}}}else if(t==="up"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e-1&&o===e+1)){this.mapCursor={x:n,y:a,z:e-1};return}for(let l=a-1;l>=0;l--){const h=i.filter(f=>f.y===l);if(h.length>0){let f=-1,p=1/0;for(const d of h){const u=Math.abs(d.x-n);u<p?(p=u,f=d.x):u===p&&d.x<f&&(f=d.x)}const g=h.filter(d=>d.x===f),m=g.find(d=>d.z===e-1),v=g.find(d=>d.z===e+1);m&&v?this.mapCursor={x:f,y:l,z:e+1}:this.mapCursor={x:f,y:l,z:g[0].z};return}}}else if(t==="down"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e+1&&o===e-1)){this.mapCursor={x:n,y:a,z:e+1};return}for(let l=a+1;l<r;l++){const h=i.filter(f=>f.y===l);if(h.length>0){let f=-1,p=1/0;for(const d of h){const u=Math.abs(d.x-n);u<p?(p=u,f=d.x):u===p&&d.x<f&&(f=d.x)}const g=h.filter(d=>d.x===f),m=g.find(d=>d.z===e-1),v=g.find(d=>d.z===e+1);m&&v?this.mapCursor={x:f,y:l,z:e-1}:this.mapCursor={x:f,y:l,z:g[0].z};return}}}}getInteractiveElements(t){const e=[],i=this.mazeGen.size,n=this.mazeGen.TYPES,a=(o,r,c)=>{if(c<0||c>=i)return!1;const l=this.maze.get(o,r,c);return l===n.VISITED||l===n.START||l===n.ELEVATOR_VISITED||l===n.TELEPORT&&this.discoveredTeleports.has(`${o},${r},${c}`)};for(let o=0;o<i;o++)for(let r=0;r<i;r++){const c=this.maze.get(o,r,t);if(c===n.WALL)continue;const l=c===n.TELEPORT,h=l&&this.discoveredTeleports.has(`${o},${r},${t}`);if(h){e.push({x:o,y:r,z:t,type:"teleport"});continue}if(c===n.START){e.push({x:o,y:r,z:t,type:"start"});continue}if(c===n.EXIT){this.keysCollected===this.totalKeys&&this.exitPathfinderUnlocked&&e.push({x:o,y:r,z:t,type:"exit"});continue}(c===n.PATH||l&&!h)&&this.isNearVisited(o,r,t)&&e.push({x:o,y:r,z:t,type:"known"})}for(const o of[t-1,t+1])if(!(o<0||o>=i||o-1<1||o+1>=i))for(let r=0;r<i;r++)for(let c=0;c<i;c++){const l=this.maze.get(r,c,o);if(l===n.WALL)continue;const h=l===n.ELEVATOR_VISITED;l===1&&(a(r,c,o-1)||a(r,c,o+1))&&!h&&a(r,c,t)&&e.push({x:r,y:c,z:o,type:"shaft"})}return e}drawIsometricMap(){if(!this.isMap3DActive||this.isIntroPlaying)return;const t=this.isometricCanvas,e=this.isometricCtx;if(!t||!e)return;const i=t.width=window.innerWidth,n=t.height=window.innerHeight;e.clearRect(0,0,i,n),e.fillStyle="#000000",e.fillRect(0,0,i,n);const a=this.mazeGen.size,o=this.activeMapFloor,r=this.visualActiveFloor;let c=i*.7/a;c=Math.max(20,Math.min(48,c));const l=c*this.mapZoom,h=l/2,f=l/2,p=l/4,g=f*5,m=i/2+this.mapPanOffsetX,v=n/2+this.mapPanOffsetY,d=(R,G,J)=>{const X=R,B=G,ct=(X-B)*f+m,F=(X+B)*p-(J-r)*g+v;return{x:ct,y:F}},u=R=>{e.strokeStyle=`rgba(0, 255, 0, ${.15*R})`,e.lineWidth=1;for(let G=0;G<a;G++)for(let J=0;J<a;J++){const X=d(J,G,o);e.beginPath(),e.moveTo(X.x,X.y-p),e.lineTo(X.x+f,X.y),e.lineTo(X.x,X.y+p),e.lineTo(X.x-f,X.y),e.closePath(),e.stroke()}},y=(R,G,J,X,B,ct,F=1)=>{e.save(),e.globalAlpha=F,e.beginPath(),e.moveTo(R-J,G),e.lineTo(R,G+X),e.lineTo(R,G+X-B),e.lineTo(R-J,G-B),e.closePath(),e.fillStyle=ct,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(R,G+X),e.lineTo(R+J,G),e.lineTo(R+J,G-B),e.lineTo(R,G+X-B),e.closePath(),e.fillStyle=ct,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.beginPath(),e.moveTo(R-J,G-B),e.lineTo(R,G+X-B),e.lineTo(R+J,G-B),e.lineTo(R,G-X-B),e.closePath(),e.fillStyle=ct,e.fill(),e.restore()},_=(R,G,J,X,B,ct,F,zt,mt=1)=>{e.save(),e.globalAlpha=mt,e.beginPath(),e.moveTo(R-J,G),e.lineTo(R,G+X),e.lineTo(R,G+X-B),e.lineTo(R-J,G-B),e.closePath(),e.fillStyle=ct,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(R,G+X),e.lineTo(R+J,G),e.lineTo(R+J,G-B),e.lineTo(R,G+X-B),e.closePath(),e.fillStyle=ct,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.restore(),e.save(),e.globalAlpha=mt,e.beginPath(),e.moveTo(R-J,G-B),e.lineTo(R,G+X-B),e.lineTo(R+J,G-B),e.lineTo(R,G-X-B),e.closePath(),e.fillStyle=ct,e.fill(),e.clip(),e.translate(R,G-B),e.scale(1,.5);const yt=this.vortexAngles.get(zt)||0;e.rotate(yt);const ft=this.getHexColorVariation(ct,45),Lt=this.getHexColorVariation(ct,-45),Tt=J,P=e.createRadialGradient(0,0,0,0,0,Tt);P.addColorStop(0,ft),P.addColorStop(.4,ct),P.addColorStop(1,Lt);const x=e.createRadialGradient(0,0,0,0,0,Tt);x.addColorStop(0,"#ffffff"),x.addColorStop(.3,ft),x.addColorStop(1,"rgba(255, 255, 255, 0)");const V=3;for(let ot=0;ot<V;ot++){const et=ot*2*Math.PI/V;e.beginPath(),e.strokeStyle=P,e.lineWidth=J*.18,e.lineCap="round";for(let lt=0;lt<=Tt;lt+=1){const gt=5/Tt,ut=et+lt*gt,Mt=lt*Math.cos(ut),At=lt*Math.sin(ut);lt===0?e.moveTo(Mt,At):e.lineTo(Mt,At)}e.stroke(),e.beginPath(),e.strokeStyle=x,e.lineWidth=J*.08,e.lineCap="round";for(let lt=Tt*.12;lt<=Tt;lt+=1){const gt=5/Tt,ut=et+lt*gt+.15,Mt=lt*Math.cos(ut),At=lt*Math.sin(ut);lt===Math.floor(Tt*.12)?e.moveTo(Mt,At):e.lineTo(Mt,At)}e.stroke()}e.restore()},M=(R,G,J)=>{if(J<0||J>=a)return!1;const X=this.maze.get(R,G,J);return X===this.mazeGen.TYPES.VISITED||X===this.mazeGen.TYPES.START||X===this.mazeGen.TYPES.ELEVATOR_VISITED||X===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${R},${G},${J}`)},T=(R,G,J,X,B,ct,F,zt,mt,yt)=>{e.save(),e.globalAlpha=yt;const ft=mt?"#ffffff":zt?Y.COLORS.NEON_UP:Y.COLORS.NEON_UP_UNUSED,Lt=mt?"#ffffff":zt?Y.COLORS.NEON_DOWN:Y.COLORS.NEON_DOWN_UNUSED;if(ct&&F)e.beginPath(),e.moveTo(R,G-B-X),e.lineTo(R-J,G-B),e.lineTo(R,G-B+X),e.lineTo(R,G-B),e.closePath(),e.fillStyle=Lt,e.fill(),e.beginPath(),e.moveTo(R,G-B-X),e.lineTo(R,G-B),e.lineTo(R,G-B+X),e.lineTo(R+J,G-B),e.closePath(),e.fillStyle=ft,e.fill(),e.beginPath(),e.moveTo(R-J,G),e.lineTo(R,G+X),e.lineTo(R,G+X-B),e.lineTo(R-J,G-B),e.closePath(),e.fillStyle=Lt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(R,G+X),e.lineTo(R+J,G),e.lineTo(R+J,G-B),e.lineTo(R,G+X-B),e.closePath(),e.fillStyle=ft,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill();else{const Tt=ct?ft:Lt;e.beginPath(),e.moveTo(R-J,G-B),e.lineTo(R,G+X-B),e.lineTo(R+J,G-B),e.lineTo(R,G-X-B),e.closePath(),e.fillStyle=Tt,e.fill(),e.beginPath(),e.moveTo(R-J,G),e.lineTo(R,G+X),e.lineTo(R,G+X-B),e.lineTo(R-J,G-B),e.closePath(),e.fillStyle=Tt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(R,G+X),e.lineTo(R+J,G),e.lineTo(R+J,G-B),e.lineTo(R,G+X-B),e.closePath(),e.fillStyle=Tt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill()}e.restore()},S=(R,G)=>{const J=this.mazeGen.TYPES;for(let X=0;X<a;X++)for(let B=0;B<a;B++){const ct=this.maze.get(B,X,R),F=d(B,X,R),zt=ct===J.JELLY_PORTAL,mt=ct===J.TELEPORT||zt,yt=mt&&this.discoveredTeleports.has(`${B},${X},${R}`),ft=ct===J.VISITED||ct===J.START||ct===J.ELEVATOR_VISITED||yt,Lt=(ct===J.PATH||mt&&!yt)&&this.isNearVisited(B,X,R),Tt=this.revealedPathSet.has(`${B},${X},${R}`),P=ct===J.KEY,x=ct===J.MANA,V=ct===J.EXIT;if(ct===J.WALL||ct===J.STATUE){if(this.isNearVisited(B,X,R)){const et=f*.45,lt=p*.45,gt=h*.25,ut="rgba(90, 20, 160, 0.8)",Mt=[{dx:-.23,dy:-.23},{dx:.23,dy:-.23},{dx:-.23,dy:.23},{dx:.23,dy:.23}];for(const At of Mt){const wt=d(B+At.dx,X+At.dy,R);y(wt.x,wt.y,et,lt,gt,ut,G)}}continue}for(const et of this.hunters){if(et.state==="SLEEP")continue;const lt=et.visualZ!==null?et.visualZ:et.z,gt=et.visualX!==null?et.visualX:et.x,ut=et.visualY!==null?et.visualY:et.y;if(lt===null||gt===null||ut===null)continue;const Mt=Math.round((lt-1)/2)*2+1,At=Math.max(0,Math.min(a-1,Math.floor(gt))),wt=Math.max(0,Math.min(a-1,Math.floor(ut)));if(B===At&&X===wt&&R===Mt){const ht=d(gt,ut,lt);k(et,ht.x,ht.y-1.5,G)}}if(ft||Lt||Tt||P||x||V){const lt=R<a-1&&this.maze.get(B,X,R+1)!==J.WALL&&this.maze.get(B,X,R+1)!==J.STATUE,gt=R>0&&this.maze.get(B,X,R-1)!==J.WALL&&this.maze.get(B,X,R-1)!==J.STATUE,ut=this.mapCursor.x===B&&this.mapCursor.y===X&&this.mapCursor.z===R;if((ft||Tt)&&(lt||gt))T(F.x,F.y,f,p,1.5,lt,gt,ft,Tt,G);else{let wt="#222222",ht=!1,Ht="";const Ot=Math.floor(this.player.x)===B&&Math.floor(this.player.y)===X&&R===this.player.z,It=`${B},${X},${R}`;if(Tt)wt="#ffffff";else if(V)Ht=this.keysCollected===this.totalKeys?Y.COLORS.EXIT:"#ff3300",ht=!0;else if(yt){const Ct=B===Math.floor(this.mazeGen.startPos.x)&&X===Math.floor(this.mazeGen.startPos.y)&&R===this.mazeGen.startPos.z,St=this.teleportCooldownTicks>0;Ct?Ht=St?Y.COLORS.TELEPORT_INACTIVE:Ot?Y.COLORS.TELEPORT:Y.COLORS.START:Ht=St?Y.COLORS.TELEPORT_INACTIVE:zt?Y.COLORS.JELLY_PORTAL:Y.COLORS.TELEPORT,ht=!0}else if(ft)ct===J.START?(Ht=this.teleportCooldownTicks>0?Y.COLORS.TELEPORT_INACTIVE:Ot?Y.COLORS.TELEPORT:Y.COLORS.START,ht=!0):wt="#444444";else if(Lt)if(ut){const Ct=.5+.5*Math.sin(performance.now()/120);wt=`rgb(${Math.floor(31+224*Ct)}, ${Math.floor(58+197*Ct)}, ${Math.floor(82+173*Ct)})`}else wt="#1f3a52";else(P||x)&&(wt="#111111");ht?_(F.x,F.y,f,p,1.5,Ht,Ot,It,G):y(F.x,F.y,f,p,1.5,wt,G)}if(P&&O(F.x,F.y-1.5,G),x&&E(F.x,F.y-1.5,G),yt){const wt=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===B&&this.inactiveTeleportPos.y===X&&this.inactiveTeleportPos.z===R;let ht=Y.COLORS.TELEPORT;wt&&(ht=Y.COLORS.TELEPORT_INACTIVE),b(F.x,F.y-1.5,ht,G,ut)}B===Math.floor(this.player.x)&&X===Math.floor(this.player.y)&&R===this.player.z&&z(F.x,F.y-1.5,G)}}},A=(R,G)=>{const J=this.mazeGen.TYPES;for(let X=0;X<a;X++)for(let B=0;B<a;B++){const ct=this.maze.get(B,X,R);if(ct===J.WALL)continue;const F=this.revealedPathSet.has(`${B},${X},${R}`),zt=ct===J.ELEVATOR_VISITED;if(ct===1&&(M(B,X,R-1)||M(B,X,R+1)),F||M(B,X,o)){const mt=d(B,X,R-1);mt.y-=1.5;const yt=d(B,X,R+1);let ft=Y.COLORS.PATH_KNOWN;F?ft="#ffffff":zt&&(ft=Y.COLORS.PATH_VISITED);const Lt=this.mapCursor.x===B&&this.mapCursor.y===X&&this.mapCursor.z===R;let Tt=ft,P=G;Lt&&(P=.4+.6*(.5+.5*Math.sin(performance.now()/120)),Tt="#ffffff");const V=(lt=>{const gt=lt.replace("#",""),ut=parseInt(gt,16),Mt=ut>>16&255,At=ut>>8&255,wt=ut&255;return`${Mt}, ${At}, ${wt}`})(Tt),ot=f*.25;e.save(),e.globalAlpha=P;const et=e.createLinearGradient(0,mt.y,0,yt.y);et.addColorStop(0,`rgba(${V}, 0.15)`),et.addColorStop(.2,`rgba(${V}, 0.65)`),et.addColorStop(.5,`rgba(${V}, 0.95)`),et.addColorStop(.8,`rgba(${V}, 0.65)`),et.addColorStop(1,`rgba(${V}, 0.15)`),e.beginPath(),e.moveTo(mt.x-ot,mt.y),e.lineTo(mt.x,mt.y+ot/2),e.lineTo(yt.x,yt.y+ot/2),e.lineTo(yt.x-ot,yt.y),e.closePath(),e.fillStyle=et,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(mt.x,mt.y+ot/2),e.lineTo(mt.x+ot,mt.y),e.lineTo(yt.x+ot,yt.y),e.lineTo(yt.x,yt.y+ot/2),e.closePath(),e.fillStyle=et,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.restore()}}},O=(R,G,J)=>{e.save(),e.globalAlpha=J;const X=Math.sin(performance.now()/200)*3-6,B=G+X;if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){const ct=this.keyImage,F=ct.naturalWidth/ct.naturalHeight,zt=l*.55;let mt=zt,yt=zt;F>1?yt=zt/F:mt=zt*F,e.drawImage(ct,R-mt/2,B-yt/2,mt,yt)}else e.beginPath(),e.moveTo(R,B-5),e.lineTo(R+4,B),e.lineTo(R,B+5),e.lineTo(R-4,B),e.closePath(),e.fillStyle="#ffd700",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();e.restore()},E=(R,G,J)=>{e.save(),e.globalAlpha=J;const X=Math.sin(performance.now()/250)*3-6,B=G+X;if(this.manaImage.complete&&this.manaImage.naturalWidth!==0){const ct=this.manaImage,F=ct.naturalWidth/ct.naturalHeight,zt=l*.55;let mt=zt,yt=zt;F>1?yt=zt/F:mt=zt*F,e.shadowColor="rgba(0, 255, 255, 0.85)",e.shadowBlur=l*.25,e.shadowOffsetX=0,e.shadowOffsetY=0,e.drawImage(ct,R-mt/2,B-yt/2,mt,yt)}else e.beginPath(),e.moveTo(R,B-5),e.lineTo(R+4,B),e.lineTo(R,B+5),e.lineTo(R-4,B),e.closePath(),e.fillStyle="#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();e.restore()},b=(R,G,J,X,B)=>{e.save(),e.globalAlpha=X;const ct=Math.sin(performance.now()/250)*2-4,F=G+ct;if(B){e.save();const zt=1+.35*(.5+.5*Math.sin(performance.now()/100));e.beginPath(),e.arc(R,F,7*zt,0,Math.PI*2),e.fillStyle="rgba(255, 255, 255, 0.4)",e.fill(),e.restore()}e.beginPath(),e.arc(R,F,5,0,Math.PI*2),e.fillStyle=B?"#ffffff":J,e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.2,e.stroke(),e.restore()},z=(R,G,J)=>{const X=`${this.playerVertical}_${this.playerSide}`,B=this.mageImages[X];let ct=J;this.deathAnimation&&this.deathAnimation.active&&(Math.floor(Date.now()/120)%2===0||(ct=.2));const F=f*.55,zt=p*.55,mt=R-f*.12,yt=G-p*.12;if(e.save(),e.beginPath(),e.ellipse(mt,yt,F,zt,0,0,Math.PI*2),e.fillStyle=`rgba(0, 0, 0, ${ct*.45})`,e.fill(),e.restore(),B&&B.complete){e.save(),e.globalAlpha=ct;const ft=l*.7,Lt=ft,Tt=ft*(B.height/B.width),P=G-Tt;e.drawImage(B,R-Lt/2,P,Lt,Tt),e.restore()}else e.save(),e.globalAlpha=ct,e.beginPath(),e.arc(R,G-3,5,0,Math.PI*2),e.fillStyle=Y.COLORS.PLAYER,e.fill(),e.strokeStyle=Y.COLORS.PLAYER_OUTLINE,e.lineWidth=1.5,e.stroke(),e.restore();if(this.deathAnimation&&this.deathAnimation.active){const ft=Math.min(1,this.deathAnimation.delayElapsed/this.deathAnimation.delayDuration),Lt=-(B&&B.complete?l*.7*(B.height/B.width):l*.5),Tt=l*.7,P=(1-ft)*Lt-4*Tt*ft*(1-ft);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){e.save();const x=l*.55;e.drawImage(this.keyImage,R-x/2,G-x/2+P,x,x),e.restore()}else e.save(),e.beginPath(),e.arc(R,G+P,l*.15,0,2*Math.PI),e.fillStyle="#ffd700",e.fill(),e.restore()}if(Y.SHOW_COLLISION_DEBUG){e.save();const ft=Y.PLAYER_COLLISION_OFFSET_X||0,Lt=Y.PLAYER_COLLISION_OFFSET_Y||0,Tt=(ft-Lt)*f,P=(ft+Lt)*p,x=R+Tt,V=G+P;e.beginPath(),e.moveTo(x,V-Y.PLAYER_COLLISION_RADIUS*h),e.lineTo(x+Y.PLAYER_COLLISION_RADIUS*l,V),e.lineTo(x,V+Y.PLAYER_COLLISION_RADIUS*h),e.lineTo(x-Y.PLAYER_COLLISION_RADIUS*l,V),e.closePath(),e.strokeStyle="#ff0000",e.lineWidth=1.5,e.stroke(),e.restore()}},k=(R,G,J,X)=>{if(R&&R.lowCanvas){e.save(),e.globalAlpha=X;const B=l*.9;e.save(),e.beginPath();const ct=f*.6,F=p*.6;e.ellipse(G,J,ct,F,0,0,Math.PI*2),e.fillStyle="rgba(0, 0, 0, 0.35)",e.fill(),e.restore();const zt=Math.sin(R.jellyTime*3)*(l*.06),mt=l*.38+zt,yt=J-mt,ft=R.jellyTime,Lt=Math.sin(ft)*6,Tt=Math.cos(ft*.7)*4,P=1+Math.sin(ft*1.2)*.06,x=1+Math.cos(ft*.8)*.06,V=Lt*Math.PI/180,ot=Tt*Math.PI/180;e.save(),e.translate(G,yt),e.transform(P,Math.tan(ot),Math.tan(V),x,0,0),e.imageSmoothingEnabled=!1,e.drawImage(R.lowCanvas,-B/2,-B/2,B,B),e.restore(),e.restore()}else{e.save(),e.globalAlpha=X;const B=4+Math.sin(performance.now()/100)*1.5;e.beginPath(),e.arc(G,J-3,B,0,Math.PI*2),e.fillStyle=Y.COLORS.HUNTER||"#ff00ff",e.fill(),e.strokeStyle="#ff0000",e.lineWidth=1,e.stroke(),e.restore()}},K=R=>{const G=Math.abs(R-r);return G<=2?1-G/2*(1-.35):G<4?.35*(1-(G-2)/2):0};for(let R=1;R<a;R+=2){if(R-1>=0&&(R-1===o-1||R-1===o+1)){const J=K(R-2),X=K(R),B=Math.max(J,X)*.8;B>.01&&A(R-1,B)}const G=K(R);G>.01&&(R===o&&u(G),S(R,G))}const w=this.getInteractiveElements(o);if(w.forEach(R=>{if(R.type==="shaft"){const G=d(R.x,R.y,R.z),J=this.mapCursor.x===R.x&&this.mapCursor.y===R.y&&this.mapCursor.z===R.z;e.save();const X=.5+.5*Math.sin(performance.now()/150);e.beginPath(),e.arc(G.x,G.y,7.5+X*2.5,0,Math.PI*2),e.fillStyle=J?"#ffffff":"#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke(),e.restore()}}),this.mapCursor.x===Math.floor(this.player.x)&&this.mapCursor.y===Math.floor(this.player.y)&&this.mapCursor.z===this.player.z||w.some(R=>R.x===this.mapCursor.x&&R.y===this.mapCursor.y&&R.z===this.mapCursor.z)){const R=d(this.mapCursor.x,this.mapCursor.y,this.mapCursor.z),G=Math.sin(performance.now()/150)*4;e.save();const J=1-G/16,X=d(this.mapCursor.x,this.mapCursor.y,o);e.translate(X.x,X.y),e.scale(1,.5),e.beginPath(),e.arc(0,0,8*J,0,Math.PI*2),e.fillStyle=`rgba(0, 0, 0, ${.55*J})`,e.fill(),e.restore(),e.save();const B=R.x,ct=R.y-h-12+G;e.beginPath(),e.moveTo(B,ct),e.lineTo(B-6,ct-8),e.lineTo(B-3,ct-8),e.lineTo(B-3,ct-16),e.lineTo(B+3,ct-16),e.lineTo(B+3,ct-8),e.lineTo(B+6,ct-8),e.closePath(),e.fillStyle="#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke(),e.restore()}const $=45,H=n/3,q=n/3*2,Q=i-$;e.save(),e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=4,e.lineCap="round",e.beginPath(),e.moveTo(Q,H),e.lineTo(Q,q),e.stroke(),e.strokeStyle="rgba(0, 255, 255, 0.4)",e.lineWidth=1.5;for(let R=H;R<=q;R+=(q-H)/6)e.beginPath(),e.moveTo(Q-5,R),e.lineTo(Q+5,R),e.stroke();e.restore();const at=(H+q)/2,nt=(q-H)/2,W=r-o,rt=at-W/2*nt;if(e.save(),e.fillStyle="#00ffff",e.beginPath(),e.arc(Q,rt,5,0,Math.PI*2),e.fill(),e.restore(),this.floorClickRects=[],[{floor:o+2,y:H,label:`${(o+2+1)/2}F`,valid:o+2<=a-2},{floor:o,y:at,label:`${(o+1)/2}F`,valid:!0},{floor:o-2,y:q,label:`${(o-2+1)/2}F`,valid:o-2>=1}].forEach(R=>{if(!R.valid)return;const G=60,J=36,X=Q-G-15,B=R.y-J/2,ct=R.floor===o;e.save(),e.beginPath(),e.moveTo(X+6,B),e.lineTo(X+G,B),e.lineTo(X+G,B+J-6),e.lineTo(X+G-6,B+J),e.lineTo(X,B+J),e.lineTo(X,B+6),e.closePath(),e.fillStyle=ct?"rgba(0, 255, 255, 0.25)":"rgba(0, 0, 0, 0.6)",e.strokeStyle=ct?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=ct?2:1,e.fill(),e.stroke(),e.restore(),e.strokeStyle=ct?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=ct?2:1,e.beginPath(),e.moveTo(X+G,R.y),e.lineTo(Q-2,R.y),e.stroke(),e.fillStyle=ct?"#00ffff":"rgba(255, 255, 255, 0.5)",e.font="bold 8px Courier New",e.textAlign="center",e.textBaseline="top",e.fillText("LEVEL",X+G/2,B+6),e.fillStyle="#ffffff",e.font="bold 15px Courier New",e.textBaseline="top",e.fillText(R.label,X+G/2,B+16),this.floorClickRects.push({floor:R.floor,x:X,y:B,w:G+15,h:J})}),this.isTeleportMode||(e.save(),e.beginPath(),e.moveTo(31,30),e.lineTo(145,30),e.lineTo(145,60),e.lineTo(139,66),e.lineTo(25,66),e.lineTo(25,36),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.7)",e.strokeStyle="rgba(0, 255, 255, 0.35)",e.lineWidth=1.5,e.fill(),e.stroke(),e.restore(),e.fillStyle="rgba(0, 255, 255, 0.7)",e.font="bold 8px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="top",e.fillText(Rt("hudPathfinders"),25+120/2,35),e.fillStyle="#ffffff",e.font="bold 13px 'Roboto', sans-serif",e.textBaseline="top",e.fillText(`${this.pathfindersRemaining} / ${this.totalPathfinders}`,25+120/2,46)),this.isTeleportMode){const J=i/2-90,X=30;e.save(),e.beginPath(),e.moveTo(J+8,X),e.lineTo(J+180-8,X),e.lineTo(J+180,X+8),e.lineTo(J+180,X+38-8),e.lineTo(J+180-8,X+38),e.lineTo(J+8,X+38),e.lineTo(J,X+38-8),e.lineTo(J,X+8),e.closePath(),e.fillStyle="rgba(255, 140, 0, 0.22)",e.strokeStyle="#ff8c00",e.lineWidth=2.5,e.fill(),e.stroke(),e.restore(),e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Rt("teleportWarning"),i/2,X+38/2)}if(this.isTeleportMode){const R=this.isTouchDevice?64:56,J=(this.allTeleports.length-1)*R,X=n-60,B=this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive,ct=this.isTouchDevice?82:62,F=this.isTouchDevice?40:30,zt=this.isTouchDevice?46:36,mt=B?zt+ct:0,yt=J+60+mt,ft=this.isTouchDevice?74:62,Lt=i/2-yt/2,Tt=X-ft/2,P=Lt+30;if(e.save(),e.beginPath(),e.moveTo(Lt+6,Tt),e.lineTo(Lt+yt-6,Tt),e.lineTo(Lt+yt,Tt+6),e.lineTo(Lt+yt,Tt+ft-6),e.lineTo(Lt+yt-6,Tt+ft),e.lineTo(Lt+6,Tt+ft),e.lineTo(Lt,Tt+ft-6),e.lineTo(Lt,Tt+6),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.72)",e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=1,e.fill(),e.stroke(),e.restore(),this.teleportDotsClickRects=[],this.getSelectableTeleportIndices(),this.allTeleports.forEach((x,V)=>{const ot=P+V*R,et=`${x.x},${x.y},${x.z}`,lt=this.discoveredTeleports.has(et),gt=V===this.selectedTeleportIndex,ut=x.x===Math.floor(this.player.x)&&x.y===Math.floor(this.player.y)&&x.z===this.player.z,Mt=this.inactiveTeleportPos&&x.x===this.inactiveTeleportPos.x&&x.y===this.inactiveTeleportPos.y&&x.z===this.inactiveTeleportPos.z;e.save();const At=this.isTouchDevice?13:10,wt=this.isTouchDevice?19:15;if(!lt)e.beginPath(),e.arc(ot,X,At,0,Math.PI*2),e.fillStyle="rgba(100, 100, 100, 0.45)",e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.15)",e.stroke();else if(Mt)e.beginPath(),e.arc(ot,X,At,0,Math.PI*2),e.fillStyle="rgba(255, 45, 0, 0.2)",e.fill(),e.strokeStyle="rgba(255, 45, 0, 0.4)",e.lineWidth=1.2,e.stroke();else{if(gt){const Ht=1+.3*(.5+.5*Math.sin(performance.now()/120)),Ot=(this.isTouchDevice?28:22)*Ht;e.beginPath(),e.arc(ot,X,Ot,0,Math.PI*2),e.fillStyle="rgba(0, 255, 255, 0.18)",e.fill()}e.beginPath(),e.arc(ot,X,gt?wt:At,0,Math.PI*2),e.fillStyle=gt?"#ffffff":"#00b3ff",e.fill(),e.strokeStyle=gt?"#00ffff":"#ffffff",e.lineWidth=gt?1.5:1,e.stroke(),ut&&(e.beginPath(),e.arc(ot,X,gt?this.isTouchDevice?10:8:this.isTouchDevice?6:5,0,Math.PI*2),e.fillStyle="#39ff14",e.fill())}e.restore();const ht=this.isTouchDevice?33:25;this.teleportDotsClickRects.push({x:ot-ht,y:X-ht,w:ht*2,h:ht*2,index:V})}),B){const x=P+J+30,V=X-F/2;e.save(),e.beginPath(),e.rect(x,V,ct,F),e.fillStyle="rgba(0, 255, 255, 0.15)",e.strokeStyle="#00ffff",e.lineWidth=1.5,e.fill(),e.stroke(),e.fillStyle="#ffffff",e.font="bold 12px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Rt("teleportGo"),x+ct/2,V+F/2),e.restore(),this.teleportGoBtnClickRect={x,y:V,w:ct,h:F}}else this.teleportGoBtnClickRect=null;if(this.teleportConfirmModalActive){e.fillStyle="rgba(0, 0, 0, 0.6)",e.fillRect(0,0,i,n);const x=320,V=160,ot=i/2-x/2,et=n/2-V/2;e.save(),e.beginPath(),e.moveTo(ot+10,et),e.lineTo(ot+x-10,et),e.lineTo(ot+x,et+10),e.lineTo(ot+x,et+V-10),e.lineTo(ot+x-10,et+V),e.lineTo(ot+10,et+V),e.lineTo(ot,et+V-10),e.lineTo(ot,et+10),e.closePath(),e.fillStyle="rgba(10, 18, 30, 0.94)",e.strokeStyle="#00ffff",e.lineWidth=2,e.fill(),e.stroke(),e.restore(),e.fillStyle="#00ffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="top",e.fillText(Rt("teleportationLink"),i/2,et+16),e.strokeStyle="rgba(0, 255, 255, 0.2)",e.lineWidth=1,e.beginPath(),e.moveTo(ot+15,et+34),e.lineTo(ot+x-15,et+34),e.stroke();const lt=this.allTeleports[this.selectedTeleportIndex];e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.fillText(Rt("teleportJumpSector",{floor:(lt.z+1)/2}),i/2,et+52),e.fillStyle="rgba(255, 255, 255, 0.7)",e.font="13px 'Roboto', sans-serif",e.fillText(Rt("teleportTargetGrid",{x:lt.x,y:lt.y}),i/2,et+75);const gt=100,ut=30,Mt=i/2-gt-15,At=et+105,wt=i/2+15,ht=et+105;this.teleportModalClickRects=[{x:Mt,y:At,w:gt,h:ut,selection:"go"},{x:wt,y:ht,w:gt,h:ut,selection:"cancel"}];const Ht=(Ot,It,Ct,St)=>{const L=this.teleportModalSelection===St;e.save(),e.beginPath(),e.moveTo(Ot+4,It),e.lineTo(Ot+gt-4,It),e.lineTo(Ot+gt,It+4),e.lineTo(Ot+gt,It+ut-4),e.lineTo(Ot+gt-4,It+ut),e.lineTo(Ot+4,It+ut),e.lineTo(Ot,It+ut-4),e.lineTo(Ot,It+4),e.closePath(),e.fillStyle=L?"rgba(0, 255, 255, 0.35)":"rgba(0, 0, 0, 0.6)",e.strokeStyle=L?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=L?2:1,e.fill(),e.stroke(),e.restore(),e.fillStyle=L?"#ffffff":"#00ffff",e.font="bold 13px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Ct,Ot+gt/2,It+ut/2)};Ht(Mt,At,Rt("teleportGo"),"go"),Ht(wt,ht,Rt("teleportCancel"),"cancel")}}}}function rm(s){let t,e,i,n,a,o,r,c,l,h,f,p,g,m,v;return{c(){t=ri("section"),t.innerHTML='<div class="menu-content"><header><h1 class="game-title" data-i18n="gameTitle">VOID ESCAPE</h1></header> <div class="menu-stats-grid"><div class="stat-container hunter"><div class="stat-label" data-i18n="activeHunters">Active Hunters</div> <div class="stat-value" id="hunter-count">-</div></div> <div class="stat-container teleport"><div class="stat-label" data-i18n="activeTeleports">Active Teleports</div> <div class="stat-value" id="teleport-count">-</div></div> <div class="stat-container keys"><div class="stat-label" data-i18n="activeKeys">Active Keys</div> <div class="stat-value" id="keys-count">-</div></div> <div class="stat-container pathfinder"><div class="stat-label" data-i18n="availablePathfinders">Available Pathfinders</div> <div class="stat-value" id="pathfinder-count">-</div></div></div> <div class="control-group"><div class="degree-full-row"><span class="degree-label" data-i18n="mazeDegree">Maze Degree</span> <span class="degree-value" id="degree-val">-</span></div> <input type="range" id="maze-degree" aria-label="Ajustar Grau do Labirinto"/> <p class="hint" data-i18n="degreeHint">Controls the grid size. Higher values create larger, more complex mazes.</p></div> <div class="control-group switch-group"><div class="switch-container"><span class="switch-label" data-i18n="safeMode">Safe Mode</span> <label class="switch" for="safe-mode"><input type="checkbox" id="safe-mode" aria-label="Safe Mode"/> <span class="slider"></span></label></div> <p class="hint" data-i18n="safeModeHint">When active, no hunters will spawn in the maze.</p></div> <div class="menu-action-btns"><button id="start-btn" data-i18n="generateMaze">NEW GAME</button> <button id="continue-btn-menu" class="continue-btn" style="display:none" data-i18n="continue">CONTINUE</button></div> <p class="game-credits" data-i18n="gameCredits">a game by Bernard Rodrigues</p></div>',e=Ti(),i=ri("section"),i.innerHTML='<div class="story-container"><div id="story-image-canvas" class="story-image-box"><div id="story-image-loader" class="story-loader hidden"><div class="spinner"></div> <span data-i18n="loading">LOADING...</span></div> <img id="story-img" src="" alt="Story Image" style="display: none; max-width: 100%; max-height: 100%;"/></div> <div id="story-dialogue" class="story-dialogue-box"><span id="story-text"></span> <span id="story-arrow" class="story-arrow hidden">▼</span></div> <div class="story-actions"><button id="story-skip-btn">SKIP</button></div></div>',n=Ti(),a=ri("section"),a.innerHTML='<div class="popup-container victory"><h1 data-i18n="victoryTitle">Mission Accomplished</h1> <p data-i18n="victoryText">You have successfully navigated the 3D void.</p> <p class="victory-stats"><span data-i18n="mapCompletion">MAP COMPLETION</span>: <span id="victory-completion-rate">0%</span></p> <p class="victory-stats"><span data-i18n="victoryDeaths">DEATHS</span>: <span id="victory-deaths-count">0</span></p> <p class="victory-stats"><span data-i18n="victoryDegree">MAZE DEGREE</span>: <span id="victory-maze-degree">0</span></p> <p class="victory-stats"><span data-i18n="victoryTime">COMPLETION TIME</span>: <span id="victory-completion-time">00:00</span></p> <p class="victory-stats"><span data-i18n="victoryMana">MANA COLLECTED</span>: <span id="victory-mana-count">0/0</span></p> <div class="end-game-btns"><button id="restart-btn-victory" class="end-btn" data-i18n="playAgain">PLAY AGAIN</button> <button id="menu-btn-victory" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',o=Ti(),r=ri("section"),r.innerHTML='<div class="popup-container death"><h1 data-i18n="gameOverTitle">Terminated</h1> <p data-i18n="gameOverText">You were caught by the void hunters.</p> <div class="end-game-btns"><button id="continue-btn-death" class="end-btn continue-highlight" data-i18n="continue">CONTINUE</button> <button id="retry-btn-death" class="end-btn" data-i18n="playAgain">PLAY AGAIN</button> <button id="menu-btn-death" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',c=Ti(),l=ri("section"),l.innerHTML='<div class="popup-container pause"><h1 data-i18n="pauseTitle">PAUSED</h1> <div class="end-game-btns"><button id="resume-btn" class="end-btn continue-highlight" data-i18n="resume">RESUME</button> <button id="menu-btn-pause" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',h=Ti(),f=ri("div"),f.innerHTML='<span class="saving-icon">💾</span> <span data-i18n="saving">SAVING...</span>',p=Ti(),g=ri("main"),g.innerHTML='<button id="mobile-pause-btn" class="hidden" aria-label="Pause Game">✕</button> <button id="mobile-teleport-exit-btn" class="hidden" aria-label="Exit Teleport Map">✕</button> <div id="left-hud-panel" class="intro-hidden"><div class="hud-item-group"><div class="keys-title" data-i18n="hudKeys">KEYS</div> <div class="keys-counter"><span id="keys-collected-count">0</span> / <span id="keys-total-count">0</span></div> <div id="keys-list-container"></div></div> <div class="hud-item-group" id="pathfinder-hud-group"><div class="pathfinders-title" data-i18n="hudPathfinders">PATHFINDERS</div> <div class="pathfinders-counter"><span id="pathfinders-remaining-count">0</span> / <span id="pathfinders-total-count">0</span></div></div></div> <div id="map-area-container" class="intro-hidden"><div id="desktop-hud-row"><div id="mana-counter-desktop" class="mana-panel-hud"><span class="mana-icon">✨</span> <span class="mana-label" data-i18n="hudMana">MANA:</span> <span id="mana-collected-count-desktop">0</span>/<span id="mana-total-count-desktop">0</span></div> <div id="hunter-status-panel"><span class="status-label" data-i18n="statusLabel">HUNTER STATUS:</span> <div class="status-marquee-container"><span id="hunter-status-val" class="status-marquee-text status--scanning" data-i18n="statusScanning">SCANNING</span></div></div> <div id="jelly-portal-counter-desktop" class="jelly-portal-panel-hud"><div class="jelly-balls-container"><span class="jelly-ball gold-ball-1"></span> <span class="jelly-ball gold-ball-2"></span></div> <span class="jelly-portal-count-label">x<span id="jelly-portal-count-desktop">0</span></span></div></div> <div style="position: relative; display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 90vw; margin-bottom: calc(var(--h-unit) * 2); margin-bottom: calc(var(--d-h-unit) * 2);"><canvas id="main-2d-canvas" aria-label="2D Navigation Map" style="margin-bottom: 0;"></canvas> <button id="mobile-jelly-portal-btn" aria-label="Jelly God Portal"><svg class="jelly-portal-spiral" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M12 12a1 1 0 0 1 1 1c0 1.1-.9 2-2 2a3 3 0 0 1-3-3c0-2.2 1.8-4 4-4a5 5 0 0 1 5 5c0 3.3-2.7 6-6 6a7 7 0 0 1-7-7c0-4.4 3.6-8 8-8a9 9 0 0 1 9 9"></path></svg></button> <button id="mobile-zoom-btn" aria-label="Toggle Zoom"><svg id="zoom-out-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;"><circle cx="11" cy="11" r="6"></circle><line x1="21" y1="21" x2="15.5" y2="15.5"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg> <svg id="zoom-in-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;" class="hidden"><circle cx="11" cy="11" r="6"></circle><line x1="21" y1="21" x2="15.5" y2="15.5"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg></button></div> <div id="mobile-proximeter-row"><div id="mana-counter-mobile" class="mana-panel-hud"><span class="mana-icon">✨</span> <span class="mana-label" data-i18n="hudMana">MANA:</span> <span id="mana-collected-count-mobile">0</span>/<span id="mana-total-count-mobile">0</span></div> <div id="proximeter-container" class="hidden"><div class="proximeter-label" data-i18n="proximityDetector">PROXIMITY DETECTOR</div> <div class="proximeter-bar"><span class="proximeter-cell" data-index="1"></span> <span class="proximeter-cell" data-index="2"></span> <span class="proximeter-cell" data-index="3"></span> <span class="proximeter-cell" data-index="4"></span> <span class="proximeter-cell" data-index="5"></span> <span class="proximeter-cell" data-index="6"></span> <span class="proximeter-cell" data-index="7"></span> <span class="proximeter-cell" data-index="8"></span> <span class="proximeter-cell" data-index="9"></span> <span class="proximeter-cell" data-index="10"></span></div></div> <div id="jelly-portal-counter-mobile" class="jelly-portal-panel-hud"><div class="jelly-balls-container"><span class="jelly-ball gold-ball-1"></span> <span class="jelly-ball gold-ball-2"></span></div> <span class="jelly-portal-count-label">x<span id="jelly-portal-count-mobile">0</span></span></div></div> <div id="bottom-hud-container" class="intro-hidden"><div id="floor-display" aria-live="polite"><span class="hud-label" data-i18n="hudFloor">Floor</span> <span id="current-floor">0</span></div> <div id="visited-display" aria-live="polite"><span class="hud-label" data-i18n="hudVisited">Visited</span> <span class="visited-value"><span id="visited-percent">0</span>%</span></div></div></div> <div id="right-hud-panel" class="intro-hidden"><aside id="map-legend"><h3 data-i18n="mapLegendTitle">MAP LEGEND</h3> <div class="legend-item"><span class="color-box color-box--visited"></span> <span data-i18n="legendVisited">Visited Path</span></div> <div class="legend-item"><span class="color-box color-box--known"></span> <span data-i18n="legendKnown">Known Path</span></div> <div class="legend-item"><span class="color-box color-box--start"></span> <span data-i18n="legendStart">Starting Point</span></div> <div class="legend-item"><span class="color-box color-box--exit"></span> <span data-i18n="legendExit">Maze Exit</span></div> <div id="legend-hunter" class="legend-item"><span class="color-box color-box--hunter"></span> <span data-i18n="legendHunter">Void Hunter</span></div> <div class="legend-item"><span class="color-box color-box--teleport"></span> <span data-i18n="legendTeleport">Teleport</span></div> <div class="legend-item"><span class="symbol-box"><svg viewBox="0 0 24 24" fill="none" style="width: 100%; height: 100%;"><path d="M12 2L5 9H9V11H15V9H19L12 2Z" fill="#00ffff"></path><path d="M12 22L19 15H15V13H9V15H5L12 22Z" fill="#ff00ff"></path></svg></span> <span data-i18n="legendElevator">Elevator</span></div></aside> <aside id="controls-hint"><h3 data-i18n="controlsHintTitle">CONTROLS HINT</h3> <div id="controls-hint-content"></div></aside></div> <nav id="mobile-controls" class="hidden"><button id="mobile-down" class="mobile-btn" disabled="" aria-label="Go Down">▼</button> <button id="mobile-map" class="mobile-btn" disabled="" aria-label="Open Map" data-i18n="map">MAP</button> <button id="mobile-up" class="mobile-btn" disabled="" aria-label="Go Up">▲</button></nav> <div id="map3d-container" class="hidden"></div>',m=Ti(),v=ri("section"),v.innerHTML='<div class="story-loader"><div class="spinner"></div> <span data-i18n="generatingMaze">GENERATING MAZE...</span></div>',Pe(t,"id","start-menu"),Pe(i,"id","story-screen"),Pe(i,"class","hidden"),Pe(a,"id","victory-screen"),Pe(a,"class","hidden"),Pe(r,"id","game-over-screen"),Pe(r,"class","hidden"),Pe(l,"id","pause-screen"),Pe(l,"class","hidden"),Pe(f,"id","saving-indicator"),Pe(f,"class","hidden"),Pe(g,"id","game-container"),Pe(v,"id","loading-screen"),Pe(v,"class","hidden")},m(d,u){xe(d,t,u),xe(d,e,u),xe(d,i,u),xe(d,n,u),xe(d,a,u),xe(d,o,u),xe(d,r,u),xe(d,c,u),xe(d,l,u),xe(d,h,u),xe(d,f,u),xe(d,p,u),xe(d,g,u),xe(d,m,u),xe(d,v,u)},p:an,i:an,o:an,d(d){d&&(Me(t),Me(e),Me(i),Me(n),Me(a),Me(o),Me(r),Me(c),Me(l),Me(h),Me(f),Me(p),Me(g),Me(m),Me(v))}}}function om(s){let t=null;function e(a){var r,c,l;t&&t.destroy(),al(),(r=document.getElementById("start-menu"))==null||r.classList.add("hidden"),(c=document.getElementById("victory-screen"))==null||c.classList.add("hidden"),(l=document.getElementById("game-over-screen"))==null||l.classList.add("hidden");const o=document.getElementById("loading-screen");o&&(o.classList.remove("hidden"),rs()),setTimeout(()=>{try{t=new yo(a,Y.BRANCHING_FACTOR)}finally{o&&o.classList.add("hidden")}},50)}function i(){var r,c,l;const a=sl();if(!a)return;t&&t.destroy(),(r=document.getElementById("start-menu"))==null||r.classList.add("hidden"),(c=document.getElementById("victory-screen"))==null||c.classList.add("hidden"),(l=document.getElementById("game-over-screen"))==null||l.classList.add("hidden");const o=document.getElementById("loading-screen");o&&(o.classList.remove("hidden"),rs()),setTimeout(()=>{try{t=new yo(a.degree,a.branchingFactor,a)}finally{o&&o.classList.add("hidden")}},50)}function n(){var o,r,c;t&&t.destroy(),(o=document.getElementById("victory-screen"))==null||o.classList.add("hidden"),(r=document.getElementById("game-over-screen"))==null||r.classList.add("hidden");const a=document.getElementById("continue-btn-menu");a&&(a.style.display=_o()?"":"none"),(c=document.getElementById("start-menu"))==null||c.classList.remove("hidden")}return _l(()=>{rs();const a=document.getElementById("maze-degree"),o=document.getElementById("degree-val"),r=document.getElementById("hunter-count"),c=document.getElementById("teleport-count"),l=document.getElementById("keys-count"),h=document.getElementById("pathfinder-count"),f=document.getElementById("safe-mode"),p=K=>{const I=f&&f.checked?0:Y.getHunterCount(K);r&&(r.innerText=String(I),r.style.color=I>0?"#f00":"#88ccff")};f&&a&&(f.onchange=()=>{p(parseInt(a.value))});const g=K=>{const w=Y.getTeleportCount(K);c&&(c.innerText=String(w))},m=K=>{const w=Y.getHunterCount(K)*2;l&&(l.innerText=String(w))},v=K=>{const w=Y.getPathfinderCount(K);h&&(h.innerText=String(w))};if(a){Y.MIN_MAZE_DEGREE!==void 0&&(a.min=String(Y.MIN_MAZE_DEGREE)),Y.MAX_MAZE_DEGREE!==void 0&&(a.max=String(Y.MAX_MAZE_DEGREE)),Y.MAZE_DEGREE!==void 0&&(a.value=String(Y.MAZE_DEGREE)),a.oninput=()=>{const w=parseInt(a.value);o&&(o.innerText=String(w)),p(w),g(w),m(w),v(w)};const K=parseInt(a.value);o&&(o.innerText=String(K)),p(K),g(K),m(K),v(K)}const d=document.getElementById("continue-btn-menu");d&&(d.style.display=_o()?"":"none");const u=document.getElementById("mobile-pause-btn");u&&(u.onclick=K=>{K.stopPropagation(),t&&t.togglePause()});const y=document.getElementById("mobile-teleport-exit-btn");y&&(y.onclick=K=>{K.stopPropagation(),t&&t.isTeleportMode&&t.toggleTeleportMap(!1)});const _=document.getElementById("mobile-jelly-portal-btn");_&&(_.onclick=K=>{K.stopPropagation(),t&&t.tryActivateJellyPortal()});const M=document.getElementById("start-btn");M&&a&&(M.onclick=()=>{e(parseInt(a.value))});const T=document.getElementById("continue-btn-menu");T&&(T.onclick=()=>{i()});const S=document.getElementById("restart-btn-victory");S&&a&&(S.onclick=()=>{e(parseInt(a.value))});const A=document.getElementById("menu-btn-victory");A&&(A.onclick=()=>{n()});const O=document.getElementById("continue-btn-death");O&&(O.onclick=()=>{i()});const E=document.getElementById("retry-btn-death");E&&a&&(E.onclick=()=>{e(parseInt(a.value))});const b=document.getElementById("menu-btn-death");b&&(b.onclick=()=>{n()});const z=document.getElementById("resume-btn");z&&(z.onclick=()=>{t&&t.togglePause()});const k=document.getElementById("menu-btn-pause");k&&(k.onclick=()=>{n()})}),[]}class lm extends wl{constructor(t){super(),Cl(this,t,om,rm,fl,{})}}new lm({target:document.getElementById("app")});
