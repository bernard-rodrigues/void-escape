var dl=Object.defineProperty;var ul=(s,t,e)=>t in s?dl(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var O=(s,t,e)=>ul(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();function an(){}function Mo(s){return s()}function Ba(){return Object.create(null)}function gs(s){s.forEach(Mo)}function To(s){return typeof s=="function"}function fl(s,t){return s!=s?t==t:s!==t||s&&typeof s=="object"||typeof s=="function"}function pl(s){return Object.keys(s).length===0}function xe(s,t,e){s.insertBefore(t,e||null)}function Me(s){s.parentNode&&s.parentNode.removeChild(s)}function ri(s){return document.createElement(s)}function ml(s){return document.createTextNode(s)}function Ti(){return ml(" ")}function Pe(s,t,e){e==null?s.removeAttribute(t):s.getAttribute(t)!==e&&s.setAttribute(t,e)}function gl(s){return Array.from(s.childNodes)}let Sn;function Tn(s){Sn=s}function vl(){if(!Sn)throw new Error("Function called outside component initialization");return Sn}function _l(s){vl().$$.on_mount.push(s)}const en=[],ka=[];let rn=[];const Ha=[],yl=Promise.resolve();let ra=!1;function Ml(){ra||(ra=!0,yl.then(Eo))}function oa(s){rn.push(s)}const bs=new Set;let Ui=0;function Eo(){if(Ui!==0)return;const s=Sn;do{try{for(;Ui<en.length;){const t=en[Ui];Ui++,Tn(t),Tl(t.$$)}}catch(t){throw en.length=0,Ui=0,t}for(Tn(null),en.length=0,Ui=0;ka.length;)ka.pop()();for(let t=0;t<rn.length;t+=1){const e=rn[t];bs.has(e)||(bs.add(e),e())}rn.length=0}while(en.length);for(;Ha.length;)Ha.pop()();ra=!1,bs.clear(),Tn(s)}function Tl(s){if(s.fragment!==null){s.update(),gs(s.before_update);const t=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,t),s.after_update.forEach(oa)}}function El(s){const t=[],e=[];rn.forEach(i=>s.indexOf(i)===-1?t.push(i):e.push(i)),e.forEach(i=>i()),rn=t}const xl=new Set;function Sl(s,t){s&&s.i&&(xl.delete(s),s.i(t))}function Al(s,t,e){const{fragment:i,after_update:n}=s.$$;i&&i.m(t,e),oa(()=>{const a=s.$$.on_mount.map(Mo).filter(To);s.$$.on_destroy?s.$$.on_destroy.push(...a):gs(a),s.$$.on_mount=[]}),n.forEach(oa)}function bl(s,t){const e=s.$$;e.fragment!==null&&(El(e.after_update),gs(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function Pl(s,t){s.$$.dirty[0]===-1&&(en.push(s),Ml(),s.$$.dirty.fill(0)),s.$$.dirty[t/31|0]|=1<<t%31}function Cl(s,t,e,i,n,a,o=null,r=[-1]){const c=Sn;Tn(s);const l=s.$$={fragment:null,ctx:[],props:a,update:an,not_equal:n,bound:Ba(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Ba(),dirty:r,skip_bound:!1,root:t.target||c.$$.root};o&&o(l.root);let h=!1;if(l.ctx=e?e(s,t.props||{},(f,p,...g)=>{const v=g.length?g[0]:p;return l.ctx&&n(l.ctx[f],l.ctx[f]=v)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](v),h&&Pl(s,f)),p}):[],l.update(),h=!0,gs(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){const f=gl(t.target);l.fragment&&l.fragment.l(f),f.forEach(Me)}else l.fragment&&l.fragment.c();t.intro&&Sl(s.$$.fragment),Al(s,t.target,t.anchor),Eo()}Tn(c)}class wl{constructor(){O(this,"$$");O(this,"$$set")}$destroy(){bl(this,1),this.$destroy=an}$on(t,e){if(!To(e))return an;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(e),()=>{const n=i.indexOf(e);n!==-1&&i.splice(n,1)}}$set(t){this.$$set&&!pl(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Rl="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Rl);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ta="160",zi={ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ll=0,Va=1,Il=2,xo=1,Dl=2,ii=3,_i=0,Re=1,ni=2,mi=0,on=1,Wa=2,Ya=3,Xa=4,Ol=5,Pi=100,Nl=101,Ul=102,$a=103,Ka=104,zl=200,Fl=201,Gl=202,Bl=203,la=204,ca=205,kl=206,Hl=207,Vl=208,Wl=209,Yl=210,Xl=211,$l=212,Kl=213,ql=214,jl=0,Zl=1,Jl=2,os=3,Ql=4,tc=5,ec=6,ic=7,Ea=0,nc=1,sc=2,gi=0,ac=1,rc=2,oc=3,lc=4,cc=5,hc=6,So=300,cn=301,hn=302,ha=303,da=304,vs=306,ua=1e3,We=1001,fa=1002,Ae=1003,qa=1004,Ps=1005,ze=1006,dc=1007,An=1008,vi=1009,uc=1010,fc=1011,xa=1012,Ao=1013,fi=1014,pi=1015,bn=1016,bo=1017,Po=1018,wi=1020,pc=1021,Ye=1023,mc=1024,gc=1025,Ri=1026,dn=1027,vc=1028,Co=1029,_c=1030,wo=1031,Ro=1033,Cs=33776,ws=33777,Rs=33778,Ls=33779,ja=35840,Za=35841,Ja=35842,Qa=35843,Lo=36196,tr=37492,er=37496,ir=37808,nr=37809,sr=37810,ar=37811,rr=37812,or=37813,lr=37814,cr=37815,hr=37816,dr=37817,ur=37818,fr=37819,pr=37820,mr=37821,Is=36492,gr=36494,vr=36495,yc=36283,_r=36284,yr=36285,Mr=36286,Io=3e3,Li=3001,Mc=3200,Tc=3201,Do=0,Ec=1,Ge="",ge="srgb",ai="srgb-linear",Sa="display-p3",_s="display-p3-linear",ls="linear",ee="srgb",cs="rec709",hs="p3",Gi=7680,Tr=519,xc=512,Sc=513,Ac=514,Oo=515,bc=516,Pc=517,Cc=518,wc=519,Er=35044,xr="300 es",pa=1035,si=2e3,ds=2001;class Ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const a=n.indexOf(e);a!==-1&&n.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let a=0,o=n.length;a<o;a++)n[a].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ss=Math.PI/180,ma=180/Math.PI;function Cn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_e[s&255]+_e[s>>8&255]+_e[s>>16&255]+_e[s>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[i&255]+_e[i>>8&255]+_e[i>>16&255]+_e[i>>24&255]).toLowerCase()}function be(s,t,e){return Math.max(t,Math.min(e,s))}function Rc(s,t){return(s%t+t)%t}function Ds(s,t,e){return(1-e)*s+e*t}function Sr(s){return(s&s-1)===0&&s!==0}function ga(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function mn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ce(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Lc={DEG2RAD:ss};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*i-o*n+t.x,this.y=a*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,i,n,a,o,r,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,o,r,c,l)}set(t,e,i,n,a,o,r,c,l){const h=this.elements;return h[0]=t,h[1]=n,h[2]=r,h[3]=e,h[4]=a,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,o=i[0],r=i[3],c=i[6],l=i[1],h=i[4],f=i[7],p=i[2],g=i[5],v=i[8],m=n[0],d=n[3],u=n[6],M=n[1],_=n[4],y=n[7],E=n[2],x=n[5],A=n[8];return a[0]=o*m+r*M+c*E,a[3]=o*d+r*_+c*x,a[6]=o*u+r*y+c*A,a[1]=l*m+h*M+f*E,a[4]=l*d+h*_+f*x,a[7]=l*u+h*y+f*A,a[2]=p*m+g*M+v*E,a[5]=p*d+g*_+v*x,a[8]=p*u+g*y+v*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*r*l-i*a*h+i*r*c+n*a*l-n*o*c}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],h=t[8],f=h*o-r*l,p=r*c-h*a,g=l*a-o*c,v=e*f+i*p+n*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/v;return t[0]=f*m,t[1]=(n*l-h*i)*m,t[2]=(r*i-n*o)*m,t[3]=p*m,t[4]=(h*e-n*c)*m,t[5]=(n*a-r*e)*m,t[6]=g*m,t[7]=(i*c-l*e)*m,t[8]=(o*e-i*a)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,a,o,r){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*o+l*r)+o+t,-n*l,n*c,-n*(-l*o+c*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Os.makeScale(t,e)),this}rotate(t){return this.premultiply(Os.makeRotation(-t)),this}translate(t,e){return this.premultiply(Os.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Os=new Kt;function No(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function us(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ic(){const s=us("canvas");return s.style.display="block",s}const Ar={};function En(s){s in Ar||(Ar[s]=!0,console.warn(s))}const br=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pr=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Dn={[ai]:{transfer:ls,primaries:cs,toReference:s=>s,fromReference:s=>s},[ge]:{transfer:ee,primaries:cs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[_s]:{transfer:ls,primaries:hs,toReference:s=>s.applyMatrix3(Pr),fromReference:s=>s.applyMatrix3(br)},[Sa]:{transfer:ee,primaries:hs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Pr),fromReference:s=>s.applyMatrix3(br).convertLinearToSRGB()}},Dc=new Set([ai,_s]),Qt={enabled:!0,_workingColorSpace:ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Dc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=Dn[t].toReference,n=Dn[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Dn[s].primaries},getTransfer:function(s){return s===Ge?ls:Dn[s].transfer}};function ln(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Bi;class Uo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=us("canvas")),Bi.width=t.width,Bi.height=t.height;const i=Bi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=us("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=ln(a[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ln(e[i]/255)*255):e[i]=ln(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Oc=0;class zo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=Cn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,r=n.length;o<r;o++)n[o].isDataTexture?a.push(Us(n[o].image)):a.push(Us(n[o]))}else a=Us(n);i.url=a}return e||(t.images[this.uuid]=i),i}}function Us(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Uo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nc=0;class Oe extends Ni{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,i=We,n=We,a=ze,o=An,r=Ye,c=vi,l=Oe.DEFAULT_ANISOTROPY,h=Ge){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=Cn(),this.name="",this.source=new zo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Li?ge:Ge),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==So)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ua:t.x=t.x-Math.floor(t.x);break;case We:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ua:t.y=t.y-Math.floor(t.y);break;case We:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ge?Li:Io}set encoding(t){En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Li?ge:Ge}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=So;Oe.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,i=0,n=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*a,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*a,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*a,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,a;const c=t.elements,l=c[0],h=c[4],f=c[8],p=c[1],g=c[5],v=c[9],m=c[2],d=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-m)<.01&&Math.abs(v-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+m)<.1&&Math.abs(v+d)<.1&&Math.abs(l+g+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,y=(g+1)/2,E=(u+1)/2,x=(h+p)/4,A=(f+m)/4,N=(v+d)/4;return _>y&&_>E?_<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(_),n=x/i,a=A/i):y>E?y<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(y),i=x/n,a=N/n):E<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(E),i=A/a,n=N/a),this.set(i,n,a,e),this}let M=Math.sqrt((d-v)*(d-v)+(f-m)*(f-m)+(p-h)*(p-h));return Math.abs(M)<.001&&(M=1),this.x=(d-v)/M,this.y=(f-m)/M,this.z=(p-h)/M,this.w=Math.acos((l+g+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uc extends Ni{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const n={width:t,height:e,depth:1};i.encoding!==void 0&&(En("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Li?ge:Ge),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Oe(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new zo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends Uc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Fo extends Oe{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zc extends Oe{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,a,o,r){let c=i[n+0],l=i[n+1],h=i[n+2],f=i[n+3];const p=a[o+0],g=a[o+1],v=a[o+2],m=a[o+3];if(r===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(r===1){t[e+0]=p,t[e+1]=g,t[e+2]=v,t[e+3]=m;return}if(f!==m||c!==p||l!==g||h!==v){let d=1-r;const u=c*p+l*g+h*v+f*m,M=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const E=Math.sqrt(_),x=Math.atan2(E,u*M);d=Math.sin(d*x)/E,r=Math.sin(r*x)/E}const y=r*M;if(c=c*d+p*y,l=l*d+g*y,h=h*d+v*y,f=f*d+m*y,d===1-r){const E=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=E,l*=E,h*=E,f*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,n,a,o){const r=i[n],c=i[n+1],l=i[n+2],h=i[n+3],f=a[o],p=a[o+1],g=a[o+2],v=a[o+3];return t[e]=r*v+h*f+c*g-l*p,t[e+1]=c*v+h*p+l*f-r*g,t[e+2]=l*v+h*g+r*p-c*f,t[e+3]=h*v-r*f-c*p-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,a=t._z,o=t._order,r=Math.cos,c=Math.sin,l=r(i/2),h=r(n/2),f=r(a/2),p=c(i/2),g=c(n/2),v=c(a/2);switch(o){case"XYZ":this._x=p*h*f+l*g*v,this._y=l*g*f-p*h*v,this._z=l*h*v+p*g*f,this._w=l*h*f-p*g*v;break;case"YXZ":this._x=p*h*f+l*g*v,this._y=l*g*f-p*h*v,this._z=l*h*v-p*g*f,this._w=l*h*f+p*g*v;break;case"ZXY":this._x=p*h*f-l*g*v,this._y=l*g*f+p*h*v,this._z=l*h*v+p*g*f,this._w=l*h*f-p*g*v;break;case"ZYX":this._x=p*h*f-l*g*v,this._y=l*g*f+p*h*v,this._z=l*h*v-p*g*f,this._w=l*h*f+p*g*v;break;case"YZX":this._x=p*h*f+l*g*v,this._y=l*g*f+p*h*v,this._z=l*h*v-p*g*f,this._w=l*h*f-p*g*v;break;case"XZY":this._x=p*h*f-l*g*v,this._y=l*g*f-p*h*v,this._z=l*h*v+p*g*f,this._w=l*h*f+p*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],a=e[8],o=e[1],r=e[5],c=e[9],l=e[2],h=e[6],f=e[10],p=i+r+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-c)*g,this._y=(a-l)*g,this._z=(o-n)*g}else if(i>r&&i>f){const g=2*Math.sqrt(1+i-r-f);this._w=(h-c)/g,this._x=.25*g,this._y=(n+o)/g,this._z=(a+l)/g}else if(r>f){const g=2*Math.sqrt(1+r-i-f);this._w=(a-l)/g,this._x=(n+o)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+f-i-r);this._w=(o-n)/g,this._x=(a+l)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,a=t._z,o=t._w,r=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*r+n*l-a*c,this._y=n*h+o*c+a*r-i*l,this._z=a*h+o*l+i*c-n*r,this._w=o*h-i*r-n*c-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,a=this._z,o=this._w;let r=o*t._w+i*t._x+n*t._y+a*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=i,this._y=n,this._z=a,this;const c=1-r*r;if(c<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*i+e*this._x,this._y=g*n+e*this._y,this._z=g*a+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,r),f=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=n*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(a),i*Math.cos(a),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,e=0,i=0){j.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*n,this.y=a[1]*e+a[4]*i+a[7]*n,this.z=a[2]*e+a[5]*i+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=t.elements,o=1/(a[3]*e+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*n+a[12])*o,this.y=(a[1]*e+a[5]*i+a[9]*n+a[13])*o,this.z=(a[2]*e+a[6]*i+a[10]*n+a[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,a=t.x,o=t.y,r=t.z,c=t.w,l=2*(o*n-r*i),h=2*(r*e-a*n),f=2*(a*i-o*e);return this.x=e+c*l+o*f-r*h,this.y=i+c*h+r*l-a*f,this.z=n+c*f+a*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n,this.y=a[1]*e+a[5]*i+a[9]*n,this.z=a[2]*e+a[6]*i+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,a=t.z,o=e.x,r=e.y,c=e.z;return this.x=n*c-a*r,this.y=a*o-i*c,this.z=i*r-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return zs.copy(this).projectOnVector(t),this.sub(zs)}reflect(t){return this.sub(zs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zs=new j,Cr=new Di;class wn{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Be.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Be.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Be.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,r=a.count;o<r;o++)t.isMesh===!0?t.getVertexPosition(o,Be):Be.fromBufferAttribute(a,o),Be.applyMatrix4(t.matrixWorld),this.expandByPoint(Be);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),On.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),On.copy(i.boundingBox)),On.applyMatrix4(t.matrixWorld),this.union(On)}const n=t.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Be),Be.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gn),Nn.subVectors(this.max,gn),ki.subVectors(t.a,gn),Hi.subVectors(t.b,gn),Vi.subVectors(t.c,gn),oi.subVectors(Hi,ki),li.subVectors(Vi,Hi),Ei.subVectors(ki,Vi);let e=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Ei.z,Ei.y,oi.z,0,-oi.x,li.z,0,-li.x,Ei.z,0,-Ei.x,-oi.y,oi.x,0,-li.y,li.x,0,-Ei.y,Ei.x,0];return!Fs(e,ki,Hi,Vi,Nn)||(e=[1,0,0,0,1,0,0,0,1],!Fs(e,ki,Hi,Vi,Nn))?!1:(Un.crossVectors(oi,li),e=[Un.x,Un.y,Un.z],Fs(e,ki,Hi,Vi,Nn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Be).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Be).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ze[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ze[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ze[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ze[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ze[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ze[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ze[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ze[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ze),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ze=[new j,new j,new j,new j,new j,new j,new j,new j],Be=new j,On=new wn,ki=new j,Hi=new j,Vi=new j,oi=new j,li=new j,Ei=new j,gn=new j,Nn=new j,Un=new j,xi=new j;function Fs(s,t,e,i,n){for(let a=0,o=s.length-3;a<=o;a+=3){xi.fromArray(s,a);const r=n.x*Math.abs(xi.x)+n.y*Math.abs(xi.y)+n.z*Math.abs(xi.z),c=t.dot(xi),l=e.dot(xi),h=i.dot(xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>r)return!1}return!0}const Fc=new wn,vn=new j,Gs=new j;class Aa{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Fc.setFromPoints(t).getCenter(i);let n=0;for(let a=0,o=t.length;a<o;a++)n=Math.max(n,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vn.subVectors(t,this.center);const e=vn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(vn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vn.copy(t.center).add(Gs)),this.expandByPoint(vn.copy(t.center).sub(Gs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Je=new j,Bs=new j,zn=new j,ci=new j,ks=new j,Fn=new j,Hs=new j;class ba{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Je.copy(this.origin).addScaledVector(this.direction,e),Je.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Bs.copy(t).add(e).multiplyScalar(.5),zn.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(Bs);const a=t.distanceTo(e)*.5,o=-this.direction.dot(zn),r=ci.dot(this.direction),c=-ci.dot(zn),l=ci.lengthSq(),h=Math.abs(1-o*o);let f,p,g,v;if(h>0)if(f=o*c-r,p=o*r-c,v=a*h,f>=0)if(p>=-v)if(p<=v){const m=1/h;f*=m,p*=m,g=f*(f+o*p+2*r)+p*(o*f+p+2*c)+l}else p=a,f=Math.max(0,-(o*p+r)),g=-f*f+p*(p+2*c)+l;else p=-a,f=Math.max(0,-(o*p+r)),g=-f*f+p*(p+2*c)+l;else p<=-v?(f=Math.max(0,-(-o*a+r)),p=f>0?-a:Math.min(Math.max(-a,-c),a),g=-f*f+p*(p+2*c)+l):p<=v?(f=0,p=Math.min(Math.max(-a,-c),a),g=p*(p+2*c)+l):(f=Math.max(0,-(o*a+r)),p=f>0?a:Math.min(Math.max(-a,-c),a),g=-f*f+p*(p+2*c)+l);else p=o>0?-a:a,f=Math.max(0,-(o*p+r)),g=-f*f+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(Bs).addScaledVector(zn,p),g}intersectSphere(t,e){Je.subVectors(t.center,this.origin);const i=Je.dot(this.direction),n=Je.dot(Je)-i*i,a=t.radius*t.radius;if(n>a)return null;const o=Math.sqrt(a-n),r=i-o,c=i+o;return c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,a,o,r,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(i=(t.min.x-p.x)*l,n=(t.max.x-p.x)*l):(i=(t.max.x-p.x)*l,n=(t.min.x-p.x)*l),h>=0?(a=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(a=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),i>o||a>n||((a>i||isNaN(i))&&(i=a),(o<n||isNaN(n))&&(n=o),f>=0?(r=(t.min.z-p.z)*f,c=(t.max.z-p.z)*f):(r=(t.max.z-p.z)*f,c=(t.min.z-p.z)*f),i>c||r>n)||((r>i||i!==i)&&(i=r),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Je)!==null}intersectTriangle(t,e,i,n,a){ks.subVectors(e,t),Fn.subVectors(i,t),Hs.crossVectors(ks,Fn);let o=this.direction.dot(Hs),r;if(o>0){if(n)return null;r=1}else if(o<0)r=-1,o=-o;else return null;ci.subVectors(this.origin,t);const c=r*this.direction.dot(Fn.crossVectors(ci,Fn));if(c<0)return null;const l=r*this.direction.dot(ks.cross(ci));if(l<0||c+l>o)return null;const h=-r*ci.dot(Hs);return h<0?null:this.at(h/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,i,n,a,o,r,c,l,h,f,p,g,v,m,d){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,o,r,c,l,h,f,p,g,v,m,d)}set(t,e,i,n,a,o,r,c,l,h,f,p,g,v,m,d){const u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=n,u[1]=a,u[5]=o,u[9]=r,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=p,u[3]=g,u[7]=v,u[11]=m,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Wi.setFromMatrixColumn(t,0).length(),a=1/Wi.setFromMatrixColumn(t,1).length(),o=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,a=t.z,o=Math.cos(i),r=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(a),f=Math.sin(a);if(t.order==="XYZ"){const p=o*h,g=o*f,v=r*h,m=r*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=g+v*l,e[5]=p-m*l,e[9]=-r*c,e[2]=m-p*l,e[6]=v+g*l,e[10]=o*c}else if(t.order==="YXZ"){const p=c*h,g=c*f,v=l*h,m=l*f;e[0]=p+m*r,e[4]=v*r-g,e[8]=o*l,e[1]=o*f,e[5]=o*h,e[9]=-r,e[2]=g*r-v,e[6]=m+p*r,e[10]=o*c}else if(t.order==="ZXY"){const p=c*h,g=c*f,v=l*h,m=l*f;e[0]=p-m*r,e[4]=-o*f,e[8]=v+g*r,e[1]=g+v*r,e[5]=o*h,e[9]=m-p*r,e[2]=-o*l,e[6]=r,e[10]=o*c}else if(t.order==="ZYX"){const p=o*h,g=o*f,v=r*h,m=r*f;e[0]=c*h,e[4]=v*l-g,e[8]=p*l+m,e[1]=c*f,e[5]=m*l+p,e[9]=g*l-v,e[2]=-l,e[6]=r*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,g=o*l,v=r*c,m=r*l;e[0]=c*h,e[4]=m-p*f,e[8]=v*f+g,e[1]=f,e[5]=o*h,e[9]=-r*h,e[2]=-l*h,e[6]=g*f+v,e[10]=p-m*f}else if(t.order==="XZY"){const p=o*c,g=o*l,v=r*c,m=r*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=p*f+m,e[5]=o*h,e[9]=g*f-v,e[2]=v*f-g,e[6]=r*h,e[10]=m*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gc,t,Bc)}lookAt(t,e,i){const n=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),hi.crossVectors(i,Ie),hi.lengthSq()===0&&(Math.abs(i.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),hi.crossVectors(i,Ie)),hi.normalize(),Gn.crossVectors(Ie,hi),n[0]=hi.x,n[4]=Gn.x,n[8]=Ie.x,n[1]=hi.y,n[5]=Gn.y,n[9]=Ie.y,n[2]=hi.z,n[6]=Gn.z,n[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,o=i[0],r=i[4],c=i[8],l=i[12],h=i[1],f=i[5],p=i[9],g=i[13],v=i[2],m=i[6],d=i[10],u=i[14],M=i[3],_=i[7],y=i[11],E=i[15],x=n[0],A=n[4],N=n[8],T=n[12],b=n[1],z=n[5],k=n[9],q=n[13],w=n[2],I=n[6],F=n[10],V=n[14],$=n[3],K=n[7],tt=n[11],Q=n[15];return a[0]=o*x+r*b+c*w+l*$,a[4]=o*A+r*z+c*I+l*K,a[8]=o*N+r*k+c*F+l*tt,a[12]=o*T+r*q+c*V+l*Q,a[1]=h*x+f*b+p*w+g*$,a[5]=h*A+f*z+p*I+g*K,a[9]=h*N+f*k+p*F+g*tt,a[13]=h*T+f*q+p*V+g*Q,a[2]=v*x+m*b+d*w+u*$,a[6]=v*A+m*z+d*I+u*K,a[10]=v*N+m*k+d*F+u*tt,a[14]=v*T+m*q+d*V+u*Q,a[3]=M*x+_*b+y*w+E*$,a[7]=M*A+_*z+y*I+E*K,a[11]=M*N+_*k+y*F+E*tt,a[15]=M*T+_*q+y*V+E*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],a=t[12],o=t[1],r=t[5],c=t[9],l=t[13],h=t[2],f=t[6],p=t[10],g=t[14],v=t[3],m=t[7],d=t[11],u=t[15];return v*(+a*c*f-n*l*f-a*r*p+i*l*p+n*r*g-i*c*g)+m*(+e*c*g-e*l*p+a*o*p-n*o*g+n*l*h-a*c*h)+d*(+e*l*f-e*r*g-a*o*f+i*o*g+a*r*h-i*l*h)+u*(-n*r*h-e*c*f+e*r*p+n*o*f-i*o*p+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],h=t[8],f=t[9],p=t[10],g=t[11],v=t[12],m=t[13],d=t[14],u=t[15],M=f*d*l-m*p*l+m*c*g-r*d*g-f*c*u+r*p*u,_=v*p*l-h*d*l-v*c*g+o*d*g+h*c*u-o*p*u,y=h*m*l-v*f*l+v*r*g-o*m*g-h*r*u+o*f*u,E=v*f*c-h*m*c-v*r*p+o*m*p+h*r*d-o*f*d,x=e*M+i*_+n*y+a*E;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/x;return t[0]=M*A,t[1]=(m*p*a-f*d*a-m*n*g+i*d*g+f*n*u-i*p*u)*A,t[2]=(r*d*a-m*c*a+m*n*l-i*d*l-r*n*u+i*c*u)*A,t[3]=(f*c*a-r*p*a-f*n*l+i*p*l+r*n*g-i*c*g)*A,t[4]=_*A,t[5]=(h*d*a-v*p*a+v*n*g-e*d*g-h*n*u+e*p*u)*A,t[6]=(v*c*a-o*d*a-v*n*l+e*d*l+o*n*u-e*c*u)*A,t[7]=(o*p*a-h*c*a+h*n*l-e*p*l-o*n*g+e*c*g)*A,t[8]=y*A,t[9]=(v*f*a-h*m*a-v*i*g+e*m*g+h*i*u-e*f*u)*A,t[10]=(o*m*a-v*r*a+v*i*l-e*m*l-o*i*u+e*r*u)*A,t[11]=(h*r*a-o*f*a-h*i*l+e*f*l+o*i*g-e*r*g)*A,t[12]=E*A,t[13]=(h*m*n-v*f*n+v*i*p-e*m*p-h*i*d+e*f*d)*A,t[14]=(v*r*n-o*m*n-v*i*c+e*m*c+o*i*d-e*r*d)*A,t[15]=(o*f*n-h*r*n+h*i*c-e*f*c-o*i*p+e*r*p)*A,this}scale(t){const e=this.elements,i=t.x,n=t.y,a=t.z;return e[0]*=i,e[4]*=n,e[8]*=a,e[1]*=i,e[5]*=n,e[9]*=a,e[2]*=i,e[6]*=n,e[10]*=a,e[3]*=i,e[7]*=n,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),a=1-i,o=t.x,r=t.y,c=t.z,l=a*o,h=a*r;return this.set(l*o+i,l*r-n*c,l*c+n*r,0,l*r+n*c,h*r+i,h*c-n*o,0,l*c-n*r,h*c+n*o,a*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,a,o){return this.set(1,i,a,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,a=e._x,o=e._y,r=e._z,c=e._w,l=a+a,h=o+o,f=r+r,p=a*l,g=a*h,v=a*f,m=o*h,d=o*f,u=r*f,M=c*l,_=c*h,y=c*f,E=i.x,x=i.y,A=i.z;return n[0]=(1-(m+u))*E,n[1]=(g+y)*E,n[2]=(v-_)*E,n[3]=0,n[4]=(g-y)*x,n[5]=(1-(p+u))*x,n[6]=(d+M)*x,n[7]=0,n[8]=(v+_)*A,n[9]=(d-M)*A,n[10]=(1-(p+m))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let a=Wi.set(n[0],n[1],n[2]).length();const o=Wi.set(n[4],n[5],n[6]).length(),r=Wi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),t.x=n[12],t.y=n[13],t.z=n[14],ke.copy(this);const l=1/a,h=1/o,f=1/r;return ke.elements[0]*=l,ke.elements[1]*=l,ke.elements[2]*=l,ke.elements[4]*=h,ke.elements[5]*=h,ke.elements[6]*=h,ke.elements[8]*=f,ke.elements[9]*=f,ke.elements[10]*=f,e.setFromRotationMatrix(ke),i.x=a,i.y=o,i.z=r,this}makePerspective(t,e,i,n,a,o,r=si){const c=this.elements,l=2*a/(e-t),h=2*a/(i-n),f=(e+t)/(e-t),p=(i+n)/(i-n);let g,v;if(r===si)g=-(o+a)/(o-a),v=-2*o*a/(o-a);else if(r===ds)g=-o/(o-a),v=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,a,o,r=si){const c=this.elements,l=1/(e-t),h=1/(i-n),f=1/(o-a),p=(e+t)*l,g=(i+n)*h;let v,m;if(r===si)v=(o+a)*f,m=-2*f;else if(r===ds)v=a*f,m=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=m,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Wi=new j,ke=new he,Gc=new j(0,0,0),Bc=new j(1,1,1),hi=new j,Gn=new j,Ie=new j,wr=new he,Rr=new Di;class ys{constructor(t=0,e=0,i=0,n=ys.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,a=n[0],o=n[4],r=n[8],c=n[1],l=n[5],h=n[9],f=n[2],p=n[6],g=n[10];switch(e){case"XYZ":this._y=Math.asin(be(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(be(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(r,g));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return wr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wr,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rr.setFromEuler(this),this.setFromQuaternion(Rr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ys.DEFAULT_ORDER="XYZ";class Pa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kc=0;const Lr=new j,Yi=new Di,Qe=new he,Bn=new j,_n=new j,Hc=new j,Vc=new Di,Ir=new j(1,0,0),Dr=new j(0,1,0),Or=new j(0,0,1),Wc={type:"added"},Yc={type:"removed"};class Te extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new j,e=new ys,i=new Di,n=new j(1,1,1);function a(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new he},normalMatrix:{value:new Kt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(Ir,t)}rotateY(t){return this.rotateOnAxis(Dr,t)}rotateZ(t){return this.rotateOnAxis(Or,t)}translateOnAxis(t,e){return Lr.copy(t).applyQuaternion(this.quaternion),this.position.add(Lr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ir,t)}translateY(t){return this.translateOnAxis(Dr,t)}translateZ(t){return this.translateOnAxis(Or,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Bn.copy(t):Bn.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),_n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(_n,Bn,this.up):Qe.lookAt(Bn,_n,this.up),this.quaternion.setFromRotationMatrix(Qe),n&&(Qe.extractRotation(n.matrixWorld),Yi.setFromRotationMatrix(Qe),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,t,Hc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,Vc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const a=e[i];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++){const r=n[a];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];a(t.shapes,f)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(a(t.materials,this.material[c]));n.material=r}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let r=0;r<this.children.length;r++)n.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];n.animations.push(a(t.animations,c))}}if(e){const r=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),f=o(t.shapes),p=o(t.skeletons),g=o(t.animations),v=o(t.nodes);r.length>0&&(i.geometries=r),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=n,i;function o(r){const c=[];for(const l in r){const h=r[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Te.DEFAULT_UP=new j(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const He=new j,ti=new j,Vs=new j,ei=new j,Xi=new j,$i=new j,Nr=new j,Ws=new j,Ys=new j,Xs=new j;let kn=!1;class Ve{constructor(t=new j,e=new j,i=new j){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),He.subVectors(t,e),n.cross(He);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,e,i,n,a){He.subVectors(n,e),ti.subVectors(i,e),Vs.subVectors(t,e);const o=He.dot(He),r=He.dot(ti),c=He.dot(Vs),l=ti.dot(ti),h=ti.dot(Vs),f=o*l-r*r;if(f===0)return a.set(0,0,0),null;const p=1/f,g=(l*c-r*h)*p,v=(o*h-r*c)*p;return a.set(1-g-v,v,g)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(t,e,i,n,a,o,r,c){return kn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kn=!0),this.getInterpolation(t,e,i,n,a,o,r,c)}static getInterpolation(t,e,i,n,a,o,r,c){return this.getBarycoord(t,e,i,n,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,ei.x),c.addScaledVector(o,ei.y),c.addScaledVector(r,ei.z),c)}static isFrontFacing(t,e,i,n){return He.subVectors(i,e),ti.subVectors(t,e),He.cross(ti).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return He.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),He.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,a){return kn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kn=!0),Ve.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}getInterpolation(t,e,i,n,a){return Ve.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,a=this.c;let o,r;Xi.subVectors(n,i),$i.subVectors(a,i),Ws.subVectors(t,i);const c=Xi.dot(Ws),l=$i.dot(Ws);if(c<=0&&l<=0)return e.copy(i);Ys.subVectors(t,n);const h=Xi.dot(Ys),f=$i.dot(Ys);if(h>=0&&f<=h)return e.copy(n);const p=c*f-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(Xi,o);Xs.subVectors(t,a);const g=Xi.dot(Xs),v=$i.dot(Xs);if(v>=0&&g<=v)return e.copy(a);const m=g*l-c*v;if(m<=0&&l>=0&&v<=0)return r=l/(l-v),e.copy(i).addScaledVector($i,r);const d=h*v-g*f;if(d<=0&&f-h>=0&&g-v>=0)return Nr.subVectors(a,n),r=(f-h)/(f-h+(g-v)),e.copy(n).addScaledVector(Nr,r);const u=1/(d+m+p);return o=m*u,r=p*u,e.copy(i).addScaledVector(Xi,o).addScaledVector($i,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Go={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Hn={h:0,s:0,l:0};function $s(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Qt.workingColorSpace){if(t=Rc(t,1),e=be(e,0,1),i=be(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,o=2*i-a;this.r=$s(o,a,t+1/3),this.g=$s(o,a,t),this.b=$s(o,a,t-1/3)}return Qt.toWorkingColorSpace(this,n),this}setStyle(t,e=ge){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=n[1],r=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){const i=Go[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return Qt.fromWorkingColorSpace(ye.copy(this),t),Math.round(be(ye.r*255,0,255))*65536+Math.round(be(ye.g*255,0,255))*256+Math.round(be(ye.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(ye.copy(this),e);const i=ye.r,n=ye.g,a=ye.b,o=Math.max(i,n,a),r=Math.min(i,n,a);let c,l;const h=(r+o)/2;if(r===o)c=0,l=0;else{const f=o-r;switch(l=h<=.5?f/(o+r):f/(2-o-r),o){case i:c=(n-a)/f+(n<a?6:0);break;case n:c=(a-i)/f+2;break;case a:c=(i-n)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=ge){Qt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,i=ye.g,n=ye.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(Hn);const i=Ds(di.h,Hn.h,e),n=Ds(di.s,Hn.s,e),a=Ds(di.l,Hn.l,e);return this.setHSL(i,n,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*n,this.g=a[1]*e+a[4]*i+a[7]*n,this.b=a[2]*e+a[5]*i+a[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Jt;Jt.NAMES=Go;let Xc=0;class Rn extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=on,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ca,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==on&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==la&&(i.blendSrc=this.blendSrc),this.blendDst!==ca&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tr&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const o=[];for(const r in a){const c=a[r];delete c.metadata,o.push(c)}return o}if(e){const a=n(t.textures),o=n(t.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fs extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new j,Vn=new kt;class Ke{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Er,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Vn.fromBufferAttribute(this,e),Vn.applyMatrix3(t),this.setXY(e,Vn.x,Vn.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=mn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),n=Ce(n,this.array),a=Ce(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Er&&(t.usage=this.usage),t}}class Bo extends Ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ko extends Ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ee extends Ke{constructor(t,e,i){super(new Float32Array(t),e,i)}}let $c=0;const Ue=new he,Ks=new Te,Ki=new j,De=new wn,yn=new wn,pe=new j;class qe extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(No(t)?ko:Bo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Kt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,i){return Ue.makeTranslation(t,e,i),this.applyMatrix4(Ue),this}scale(t,e,i){return Ue.makeScale(t,e,i),this.applyMatrix4(Ue),this}lookAt(t){return Ks.lookAt(t),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const a=e[i];De.setFromBufferAttribute(a),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Aa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(t){const i=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const r=e[a];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(pe.addVectors(De.min,yn.min),De.expandByPoint(pe),pe.addVectors(De.max,yn.max),De.expandByPoint(pe)):(De.expandByPoint(yn.min),De.expandByPoint(yn.max))}De.getCenter(i);let n=0;for(let a=0,o=t.count;a<o;a++)pe.fromBufferAttribute(t,a),n=Math.max(n,i.distanceToSquared(pe));if(e)for(let a=0,o=e.length;a<o;a++){const r=e[a],c=this.morphTargetsRelative;for(let l=0,h=r.count;l<h;l++)pe.fromBufferAttribute(r,l),c&&(Ki.fromBufferAttribute(t,l),pe.add(Ki)),n=Math.max(n,i.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,a=e.normal.array,o=e.uv.array,r=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*r),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<r;b++)l[b]=new j,h[b]=new j;const f=new j,p=new j,g=new j,v=new kt,m=new kt,d=new kt,u=new j,M=new j;function _(b,z,k){f.fromArray(n,b*3),p.fromArray(n,z*3),g.fromArray(n,k*3),v.fromArray(o,b*2),m.fromArray(o,z*2),d.fromArray(o,k*2),p.sub(f),g.sub(f),m.sub(v),d.sub(v);const q=1/(m.x*d.y-d.x*m.y);isFinite(q)&&(u.copy(p).multiplyScalar(d.y).addScaledVector(g,-m.y).multiplyScalar(q),M.copy(g).multiplyScalar(m.x).addScaledVector(p,-d.x).multiplyScalar(q),l[b].add(u),l[z].add(u),l[k].add(u),h[b].add(M),h[z].add(M),h[k].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let b=0,z=y.length;b<z;++b){const k=y[b],q=k.start,w=k.count;for(let I=q,F=q+w;I<F;I+=3)_(i[I+0],i[I+1],i[I+2])}const E=new j,x=new j,A=new j,N=new j;function T(b){A.fromArray(a,b*3),N.copy(A);const z=l[b];E.copy(z),E.sub(A.multiplyScalar(A.dot(z))).normalize(),x.crossVectors(N,z);const q=x.dot(h[b])<0?-1:1;c[b*4]=E.x,c[b*4+1]=E.y,c[b*4+2]=E.z,c[b*4+3]=q}for(let b=0,z=y.length;b<z;++b){const k=y[b],q=k.start,w=k.count;for(let I=q,F=q+w;I<F;I+=3)T(i[I+0]),T(i[I+1]),T(i[I+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const n=new j,a=new j,o=new j,r=new j,c=new j,l=new j,h=new j,f=new j;if(t)for(let p=0,g=t.count;p<g;p+=3){const v=t.getX(p+0),m=t.getX(p+1),d=t.getX(p+2);n.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),o.fromBufferAttribute(e,d),h.subVectors(o,a),f.subVectors(n,a),h.cross(f),r.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),l.fromBufferAttribute(i,d),r.add(h),c.add(h),l.add(h),i.setXYZ(v,r.x,r.y,r.z),i.setXYZ(m,c.x,c.y,c.z),i.setXYZ(d,l.x,l.y,l.z)}else for(let p=0,g=e.count;p<g;p+=3)n.fromBufferAttribute(e,p+0),a.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,a),f.subVectors(n,a),h.cross(f),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(r,c){const l=r.array,h=r.itemSize,f=r.normalized,p=new l.constructor(c.length*h);let g=0,v=0;for(let m=0,d=c.length;m<d;m++){r.isInterleavedBufferAttribute?g=c[m]*r.data.stride+r.offset:g=c[m]*h;for(let u=0;u<h;u++)p[v++]=l[g++]}return new Ke(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,i=this.index.array,n=this.attributes;for(const r in n){const c=n[r],l=t(c,i);e.setAttribute(r,l)}const a=this.morphAttributes;for(const r in a){const c=[],l=a[r];for(let h=0,f=l.length;h<f;h++){const p=l[h],g=t(p,i);c.push(g)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,c=o.length;r<c;r++){const l=o[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const n={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,p=l.length;f<p;f++){const g=l[f];h.push(g.toJSON(t.data))}h.length>0&&(n[c]=h,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const l in n){const h=n[l];this.setAttribute(l,h.clone(e))}const a=t.morphAttributes;for(const l in a){const h=[],f=a[l];for(let p=0,g=f.length;p<g;p++)h.push(f[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ur=new he,Si=new ba,Wn=new Aa,zr=new j,qi=new j,ji=new j,Zi=new j,qs=new j,Yn=new j,Xn=new kt,$n=new kt,Kn=new kt,Fr=new j,Gr=new j,Br=new j,qn=new j,jn=new j;class te extends Te{constructor(t=new qe,e=new fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=n.length;a<o;a++){const r=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const r=this.morphTargetInfluences;if(a&&r){Yn.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=r[c],f=a[c];h!==0&&(qs.fromBufferAttribute(f,t),o?Yn.addScaledVector(qs,h):Yn.addScaledVector(qs.sub(e),h))}e.add(Yn)}return e}raycast(t,e){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wn.copy(i.boundingSphere),Wn.applyMatrix4(a),Si.copy(t.ray).recast(t.near),!(Wn.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Wn,zr)===null||Si.origin.distanceToSquared(zr)>(t.far-t.near)**2))&&(Ur.copy(a).invert(),Si.copy(t.ray).applyMatrix4(Ur),!(i.boundingBox!==null&&Si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,i){let n;const a=this.geometry,o=this.material,r=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,f=a.attributes.normal,p=a.groups,g=a.drawRange;if(r!==null)if(Array.isArray(o))for(let v=0,m=p.length;v<m;v++){const d=p[v],u=o[d.materialIndex],M=Math.max(d.start,g.start),_=Math.min(r.count,Math.min(d.start+d.count,g.start+g.count));for(let y=M,E=_;y<E;y+=3){const x=r.getX(y),A=r.getX(y+1),N=r.getX(y+2);n=Zn(this,u,t,i,l,h,f,x,A,N),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=d.materialIndex,e.push(n))}}else{const v=Math.max(0,g.start),m=Math.min(r.count,g.start+g.count);for(let d=v,u=m;d<u;d+=3){const M=r.getX(d),_=r.getX(d+1),y=r.getX(d+2);n=Zn(this,o,t,i,l,h,f,M,_,y),n&&(n.faceIndex=Math.floor(d/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,m=p.length;v<m;v++){const d=p[v],u=o[d.materialIndex],M=Math.max(d.start,g.start),_=Math.min(c.count,Math.min(d.start+d.count,g.start+g.count));for(let y=M,E=_;y<E;y+=3){const x=y,A=y+1,N=y+2;n=Zn(this,u,t,i,l,h,f,x,A,N),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=d.materialIndex,e.push(n))}}else{const v=Math.max(0,g.start),m=Math.min(c.count,g.start+g.count);for(let d=v,u=m;d<u;d+=3){const M=d,_=d+1,y=d+2;n=Zn(this,o,t,i,l,h,f,M,_,y),n&&(n.faceIndex=Math.floor(d/3),e.push(n))}}}}function Kc(s,t,e,i,n,a,o,r){let c;if(t.side===Re?c=i.intersectTriangle(o,a,n,!0,r):c=i.intersectTriangle(n,a,o,t.side===_i,r),c===null)return null;jn.copy(r),jn.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(jn);return l<e.near||l>e.far?null:{distance:l,point:jn.clone(),object:s}}function Zn(s,t,e,i,n,a,o,r,c,l){s.getVertexPosition(r,qi),s.getVertexPosition(c,ji),s.getVertexPosition(l,Zi);const h=Kc(s,t,e,i,qi,ji,Zi,qn);if(h){n&&(Xn.fromBufferAttribute(n,r),$n.fromBufferAttribute(n,c),Kn.fromBufferAttribute(n,l),h.uv=Ve.getInterpolation(qn,qi,ji,Zi,Xn,$n,Kn,new kt)),a&&(Xn.fromBufferAttribute(a,r),$n.fromBufferAttribute(a,c),Kn.fromBufferAttribute(a,l),h.uv1=Ve.getInterpolation(qn,qi,ji,Zi,Xn,$n,Kn,new kt),h.uv2=h.uv1),o&&(Fr.fromBufferAttribute(o,r),Gr.fromBufferAttribute(o,c),Br.fromBufferAttribute(o,l),h.normal=Ve.getInterpolation(qn,qi,ji,Zi,Fr,Gr,Br,new j),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:r,b:c,c:l,normal:new j,materialIndex:0};Ve.getNormal(qi,ji,Zi,f.normal),h.face=f}return h}class we extends qe{constructor(t=1,e=1,i=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:a,depthSegments:o};const r=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const c=[],l=[],h=[],f=[];let p=0,g=0;v("z","y","x",-1,-1,i,e,t,o,a,0),v("z","y","x",1,-1,i,e,-t,o,a,1),v("x","z","y",1,1,t,i,e,n,o,2),v("x","z","y",1,-1,t,i,-e,n,o,3),v("x","y","z",1,-1,t,e,i,n,a,4),v("x","y","z",-1,-1,t,e,-i,n,a,5),this.setIndex(c),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(f,2));function v(m,d,u,M,_,y,E,x,A,N,T){const b=y/A,z=E/N,k=y/2,q=E/2,w=x/2,I=A+1,F=N+1;let V=0,$=0;const K=new j;for(let tt=0;tt<F;tt++){const Q=tt*z-q;for(let it=0;it<I;it++){const G=it*b-k;K[m]=G*M,K[d]=Q*_,K[u]=w,l.push(K.x,K.y,K.z),K[m]=0,K[d]=0,K[u]=x>0?1:-1,h.push(K.x,K.y,K.z),f.push(it/A),f.push(1-tt/N),V+=1}}for(let tt=0;tt<N;tt++)for(let Q=0;Q<A;Q++){const it=p+Q+I*tt,G=p+Q+I*(tt+1),et=p+(Q+1)+I*(tt+1),ct=p+(Q+1)+I*tt;c.push(it,G,ct),c.push(G,et,ct),$+=6}r.addGroup(g,$,T),g+=$,p+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function un(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Se(s){const t={};for(let e=0;e<s.length;e++){const i=un(s[e]);for(const n in i)t[n]=i[n]}return t}function qc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ho(s){return s.getRenderTarget()===null?s.outputColorSpace:Qt.workingColorSpace}const jc={clone:un,merge:Se};var Zc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zc,this.fragmentShader=Jc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=un(t.uniforms),this.uniformsGroups=qc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Vo extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fe extends Vo{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ma*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ss*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;a+=o.offsetX*n/c,e-=o.offsetY*i/l,n*=o.width/c,i*=o.height/l}const r=this.filmOffset;r!==0&&(a+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ji=-90,Qi=1;class Qc extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Fe(Ji,Qi,t,e);n.layers=this.layers,this.add(n);const a=new Fe(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const o=new Fe(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const r=new Fe(Ji,Qi,t,e);r.layers=this.layers,this.add(r);const c=new Fe(Ji,Qi,t,e);c.layers=this.layers,this.add(c);const l=new Fe(Ji,Qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,a,o,r,c]=e;for(const l of e)this.remove(l);if(t===si)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ds)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,o,r,c,l,h]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,a),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,r),t.setRenderTarget(i,3,n),t.render(e,c),t.setRenderTarget(i,4,n),t.render(e,l),i.texture.generateMipmaps=m,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(f,p,g),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Wo extends Oe{constructor(t,e,i,n,a,o,r,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:cn,super(t,e,i,n,a,o,r,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class th extends Ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(En("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Li?ge:Ge),this.texture=new Wo(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new we(5,5,5),a=new Oi({name:"CubemapFromEquirect",uniforms:un(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Re,blending:mi});a.uniforms.tEquirect.value=e;const o=new te(n,a),r=e.minFilter;return e.minFilter===An&&(e.minFilter=ze),new Qc(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(a)}}const js=new j,eh=new j,ih=new Kt;class ui{constructor(t=new j(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=js.subVectors(i,e).cross(eh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(js),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ih.getNormalMatrix(t),n=this.coplanarPoint(js).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Aa,Jn=new j;class Ca{constructor(t=new ui,e=new ui,i=new ui,n=new ui,a=new ui,o=new ui){this.planes=[t,e,i,n,a,o]}set(t,e,i,n,a,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(i),r[3].copy(n),r[4].copy(a),r[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=si){const i=this.planes,n=t.elements,a=n[0],o=n[1],r=n[2],c=n[3],l=n[4],h=n[5],f=n[6],p=n[7],g=n[8],v=n[9],m=n[10],d=n[11],u=n[12],M=n[13],_=n[14],y=n[15];if(i[0].setComponents(c-a,p-l,d-g,y-u).normalize(),i[1].setComponents(c+a,p+l,d+g,y+u).normalize(),i[2].setComponents(c+o,p+h,d+v,y+M).normalize(),i[3].setComponents(c-o,p-h,d-v,y-M).normalize(),i[4].setComponents(c-r,p-f,d-m,y-_).normalize(),e===si)i[5].setComponents(c+r,p+f,d+m,y+_).normalize();else if(e===ds)i[5].setComponents(r,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Jn.x=n.normal.x>0?t.max.x:t.min.x,Jn.y=n.normal.y>0?t.max.y:t.min.y,Jn.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Jn)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yo(){let s=null,t=!1,e=null,i=null;function n(a,o){e(a,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function nh(s,t){const e=t.isWebGL2,i=new WeakMap;function n(l,h){const f=l.array,p=l.usage,g=f.byteLength,v=s.createBuffer();s.bindBuffer(h,v),s.bufferData(h,f,p),l.onUploadCallback();let m;if(f instanceof Float32Array)m=s.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)m=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)m=s.SHORT;else if(f instanceof Uint32Array)m=s.UNSIGNED_INT;else if(f instanceof Int32Array)m=s.INT;else if(f instanceof Int8Array)m=s.BYTE;else if(f instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:g}}function a(l,h,f){const p=h.array,g=h._updateRange,v=h.updateRanges;if(s.bindBuffer(f,l),g.count===-1&&v.length===0&&s.bufferSubData(f,0,p),v.length!==0){for(let m=0,d=v.length;m<d;m++){const u=v[m];e?s.bufferSubData(f,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):s.bufferSubData(f,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}g.count!==-1&&(e?s.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):s.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h&&(s.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const p=i.get(l);(!p||p.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);if(f===void 0)i.set(l,n(l,h));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(f.buffer,l,h),f.version=l.version}}return{get:o,remove:r,update:c}}class wa extends qe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const a=t/2,o=e/2,r=Math.floor(i),c=Math.floor(n),l=r+1,h=c+1,f=t/r,p=e/c,g=[],v=[],m=[],d=[];for(let u=0;u<h;u++){const M=u*p-o;for(let _=0;_<l;_++){const y=_*f-a;v.push(y,-M,0),m.push(0,0,1),d.push(_/r),d.push(1-u/c)}}for(let u=0;u<c;u++)for(let M=0;M<r;M++){const _=M+l*u,y=M+l*(u+1),E=M+1+l*(u+1),x=M+1+l*u;g.push(_,y,x),g.push(y,E,x)}this.setIndex(g),this.setAttribute("position",new Ee(v,3)),this.setAttribute("normal",new Ee(m,3)),this.setAttribute("uv",new Ee(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wa(t.width,t.height,t.widthSegments,t.heightSegments)}}var sh=`#ifdef USE_ALPHAHASH
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
}`,Yt={alphahash_fragment:sh,alphahash_pars_fragment:ah,alphamap_fragment:rh,alphamap_pars_fragment:oh,alphatest_fragment:lh,alphatest_pars_fragment:ch,aomap_fragment:hh,aomap_pars_fragment:dh,batching_pars_vertex:uh,batching_vertex:fh,begin_vertex:ph,beginnormal_vertex:mh,bsdfs:gh,iridescence_fragment:vh,bumpmap_pars_fragment:_h,clipping_planes_fragment:yh,clipping_planes_pars_fragment:Mh,clipping_planes_pars_vertex:Th,clipping_planes_vertex:Eh,color_fragment:xh,color_pars_fragment:Sh,color_pars_vertex:Ah,color_vertex:bh,common:Ph,cube_uv_reflection_fragment:Ch,defaultnormal_vertex:wh,displacementmap_pars_vertex:Rh,displacementmap_vertex:Lh,emissivemap_fragment:Ih,emissivemap_pars_fragment:Dh,colorspace_fragment:Oh,colorspace_pars_fragment:Nh,envmap_fragment:Uh,envmap_common_pars_fragment:zh,envmap_pars_fragment:Fh,envmap_pars_vertex:Gh,envmap_physical_pars_fragment:Zh,envmap_vertex:Bh,fog_vertex:kh,fog_pars_vertex:Hh,fog_fragment:Vh,fog_pars_fragment:Wh,gradientmap_pars_fragment:Yh,lightmap_fragment:Xh,lightmap_pars_fragment:$h,lights_lambert_fragment:Kh,lights_lambert_pars_fragment:qh,lights_pars_begin:jh,lights_toon_fragment:Jh,lights_toon_pars_fragment:Qh,lights_phong_fragment:td,lights_phong_pars_fragment:ed,lights_physical_fragment:id,lights_physical_pars_fragment:nd,lights_fragment_begin:sd,lights_fragment_maps:ad,lights_fragment_end:rd,logdepthbuf_fragment:od,logdepthbuf_pars_fragment:ld,logdepthbuf_pars_vertex:cd,logdepthbuf_vertex:hd,map_fragment:dd,map_pars_fragment:ud,map_particle_fragment:fd,map_particle_pars_fragment:pd,metalnessmap_fragment:md,metalnessmap_pars_fragment:gd,morphcolor_vertex:vd,morphnormal_vertex:_d,morphtarget_pars_vertex:yd,morphtarget_vertex:Md,normal_fragment_begin:Td,normal_fragment_maps:Ed,normal_pars_fragment:xd,normal_pars_vertex:Sd,normal_vertex:Ad,normalmap_pars_fragment:bd,clearcoat_normal_fragment_begin:Pd,clearcoat_normal_fragment_maps:Cd,clearcoat_pars_fragment:wd,iridescence_pars_fragment:Rd,opaque_fragment:Ld,packing:Id,premultiplied_alpha_fragment:Dd,project_vertex:Od,dithering_fragment:Nd,dithering_pars_fragment:Ud,roughnessmap_fragment:zd,roughnessmap_pars_fragment:Fd,shadowmap_pars_fragment:Gd,shadowmap_pars_vertex:Bd,shadowmap_vertex:kd,shadowmask_pars_fragment:Hd,skinbase_vertex:Vd,skinning_pars_vertex:Wd,skinning_vertex:Yd,skinnormal_vertex:Xd,specularmap_fragment:$d,specularmap_pars_fragment:Kd,tonemapping_fragment:qd,tonemapping_pars_fragment:jd,transmission_fragment:Zd,transmission_pars_fragment:Jd,uv_pars_fragment:Qd,uv_pars_vertex:tu,uv_vertex:eu,worldpos_vertex:iu,background_vert:nu,background_frag:su,backgroundCube_vert:au,backgroundCube_frag:ru,cube_vert:ou,cube_frag:lu,depth_vert:cu,depth_frag:hu,distanceRGBA_vert:du,distanceRGBA_frag:uu,equirect_vert:fu,equirect_frag:pu,linedashed_vert:mu,linedashed_frag:gu,meshbasic_vert:vu,meshbasic_frag:_u,meshlambert_vert:yu,meshlambert_frag:Mu,meshmatcap_vert:Tu,meshmatcap_frag:Eu,meshnormal_vert:xu,meshnormal_frag:Su,meshphong_vert:Au,meshphong_frag:bu,meshphysical_vert:Pu,meshphysical_frag:Cu,meshtoon_vert:wu,meshtoon_frag:Ru,points_vert:Lu,points_frag:Iu,shadow_vert:Du,shadow_frag:Ou,sprite_vert:Nu,sprite_frag:Uu},Et={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},$e={basic:{uniforms:Se([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Se([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Se([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Se([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Se([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Se([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Se([Et.points,Et.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Se([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Se([Et.common,Et.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Se([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Se([Et.sprite,Et.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Se([Et.common,Et.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Se([Et.lights,Et.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};$e.physical={uniforms:Se([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Qn={r:0,b:0,g:0};function zu(s,t,e,i,n,a,o){const r=new Jt(0);let c=a===!0?0:1,l,h,f=null,p=0,g=null;function v(d,u){let M=!1,_=u.isScene===!0?u.background:null;_&&_.isTexture&&(_=(u.backgroundBlurriness>0?e:t).get(_)),_===null?m(r,c):_&&_.isColor&&(m(_,1),M=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===vs)?(h===void 0&&(h=new te(new we(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:un($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,x,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(_.colorSpace)!==ee,(f!==_||p!==_.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,f=_,p=_.version,g=s.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new te(new wa(2,2),new Oi({name:"BackgroundMaterial",uniforms:un($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(_.colorSpace)!==ee,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||p!==_.version||g!==s.toneMapping)&&(l.material.needsUpdate=!0,f=_,p=_.version,g=s.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function m(d,u){d.getRGB(Qn,Ho(s)),i.buffers.color.setClear(Qn.r,Qn.g,Qn.b,u,o)}return{getClearColor:function(){return r},setClearColor:function(d,u=1){r.set(d),c=u,m(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,m(r,c)},render:v}}function Fu(s,t,e,i){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,r={},c=d(null);let l=c,h=!1;function f(w,I,F,V,$){let K=!1;if(o){const tt=m(V,F,I);l!==tt&&(l=tt,g(l.object)),K=u(w,V,F,$),K&&M(w,V,F,$)}else{const tt=I.wireframe===!0;(l.geometry!==V.id||l.program!==F.id||l.wireframe!==tt)&&(l.geometry=V.id,l.program=F.id,l.wireframe=tt,K=!0)}$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,N(w,I,F,V),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function p(){return i.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function g(w){return i.isWebGL2?s.bindVertexArray(w):a.bindVertexArrayOES(w)}function v(w){return i.isWebGL2?s.deleteVertexArray(w):a.deleteVertexArrayOES(w)}function m(w,I,F){const V=F.wireframe===!0;let $=r[w.id];$===void 0&&($={},r[w.id]=$);let K=$[I.id];K===void 0&&(K={},$[I.id]=K);let tt=K[V];return tt===void 0&&(tt=d(p()),K[V]=tt),tt}function d(w){const I=[],F=[],V=[];for(let $=0;$<n;$++)I[$]=0,F[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:V,object:w,attributes:{},index:null}}function u(w,I,F,V){const $=l.attributes,K=I.attributes;let tt=0;const Q=F.getAttributes();for(const it in Q)if(Q[it].location>=0){const et=$[it];let ct=K[it];if(ct===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(ct=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(ct=w.instanceColor)),et===void 0||et.attribute!==ct||ct&&et.data!==ct.data)return!0;tt++}return l.attributesNum!==tt||l.index!==V}function M(w,I,F,V){const $={},K=I.attributes;let tt=0;const Q=F.getAttributes();for(const it in Q)if(Q[it].location>=0){let et=K[it];et===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(et=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(et=w.instanceColor));const ct={};ct.attribute=et,et&&et.data&&(ct.data=et.data),$[it]=ct,tt++}l.attributes=$,l.attributesNum=tt,l.index=V}function _(){const w=l.newAttributes;for(let I=0,F=w.length;I<F;I++)w[I]=0}function y(w){E(w,0)}function E(w,I){const F=l.newAttributes,V=l.enabledAttributes,$=l.attributeDivisors;F[w]=1,V[w]===0&&(s.enableVertexAttribArray(w),V[w]=1),$[w]!==I&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](w,I),$[w]=I)}function x(){const w=l.newAttributes,I=l.enabledAttributes;for(let F=0,V=I.length;F<V;F++)I[F]!==w[F]&&(s.disableVertexAttribArray(F),I[F]=0)}function A(w,I,F,V,$,K,tt){tt===!0?s.vertexAttribIPointer(w,I,F,$,K):s.vertexAttribPointer(w,I,F,V,$,K)}function N(w,I,F,V){if(i.isWebGL2===!1&&(w.isInstancedMesh||V.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const $=V.attributes,K=F.getAttributes(),tt=I.defaultAttributeValues;for(const Q in K){const it=K[Q];if(it.location>=0){let G=$[Q];if(G===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(G=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(G=w.instanceColor)),G!==void 0){const et=G.normalized,ct=G.itemSize,_t=e.get(G);if(_t===void 0)continue;const L=_t.buffer,B=_t.type,Z=_t.bytesPerElement,W=i.isWebGL2===!0&&(B===s.INT||B===s.UNSIGNED_INT||G.gpuType===Ao);if(G.isInterleavedBufferAttribute){const Y=G.data,D=Y.stride,Mt=G.offset;if(Y.isInstancedInterleavedBuffer){for(let vt=0;vt<it.locationSize;vt++)E(it.location+vt,Y.meshPerAttribute);w.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let vt=0;vt<it.locationSize;vt++)y(it.location+vt);s.bindBuffer(s.ARRAY_BUFFER,L);for(let vt=0;vt<it.locationSize;vt++)A(it.location+vt,ct/it.locationSize,B,et,D*Z,(Mt+ct/it.locationSize*vt)*Z,W)}else{if(G.isInstancedBufferAttribute){for(let Y=0;Y<it.locationSize;Y++)E(it.location+Y,G.meshPerAttribute);w.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Y=0;Y<it.locationSize;Y++)y(it.location+Y);s.bindBuffer(s.ARRAY_BUFFER,L);for(let Y=0;Y<it.locationSize;Y++)A(it.location+Y,ct/it.locationSize,B,et,ct*Z,ct/it.locationSize*Y*Z,W)}}else if(tt!==void 0){const et=tt[Q];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(it.location,et);break;case 3:s.vertexAttrib3fv(it.location,et);break;case 4:s.vertexAttrib4fv(it.location,et);break;default:s.vertexAttrib1fv(it.location,et)}}}}x()}function T(){k();for(const w in r){const I=r[w];for(const F in I){const V=I[F];for(const $ in V)v(V[$].object),delete V[$];delete I[F]}delete r[w]}}function b(w){if(r[w.id]===void 0)return;const I=r[w.id];for(const F in I){const V=I[F];for(const $ in V)v(V[$].object),delete V[$];delete I[F]}delete r[w.id]}function z(w){for(const I in r){const F=r[I];if(F[w.id]===void 0)continue;const V=F[w.id];for(const $ in V)v(V[$].object),delete V[$];delete F[w.id]}}function k(){q(),h=!0,l!==c&&(l=c,g(l.object))}function q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:k,resetDefaultState:q,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:z,initAttributes:_,enableAttribute:y,disableUnusedAttributes:x}}function Gu(s,t,e,i){const n=i.isWebGL2;let a;function o(h){a=h}function r(h,f){s.drawArrays(a,h,f),e.update(f,a,1)}function c(h,f,p){if(p===0)return;let g,v;if(n)g=s,v="drawArraysInstanced";else if(g=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](a,h,f,p),e.update(f,a,p)}function l(h,f,p){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<p;v++)this.render(h[v],f[v]);else{g.multiDrawArraysWEBGL(a,h,0,f,0,p);let v=0;for(let m=0;m<p;m++)v+=f[m];e.update(v,a,1)}}this.setMode=o,this.render=r,this.renderInstances=c,this.renderMultiDraw=l}function Bu(s,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let r=e.precision!==void 0?e.precision:"highp";const c=a(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),d=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),u=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,y=o||t.has("OES_texture_float"),E=_&&y,x=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:n,getMaxPrecision:a,precision:r,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:d,maxVaryings:u,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:x}}function ku(s){const t=this;let e=null,i=0,n=!1,a=!1;const o=new ui,r=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||i!==0||n;return n=p,i=f.length,g},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){e=h(f,p,0)},this.setState=function(f,p,g){const v=f.clippingPlanes,m=f.clipIntersection,d=f.clipShadows,u=s.get(f);if(!n||v===null||v.length===0||a&&!d)a?h(null):l();else{const M=a?0:i,_=M*4;let y=u.clippingState||null;c.value=y,y=h(v,p,_,g);for(let E=0;E!==_;++E)y[E]=e[E];u.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,p,g,v){const m=f!==null?f.length:0;let d=null;if(m!==0){if(d=c.value,v!==!0||d===null){const u=g+m*4,M=p.matrixWorldInverse;r.getNormalMatrix(M),(d===null||d.length<u)&&(d=new Float32Array(u));for(let _=0,y=g;_!==m;++_,y+=4)o.copy(f[_]).applyMatrix4(M,r),o.normal.toArray(d,y),d[y+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,d}}function Hu(s){let t=new WeakMap;function e(o,r){return r===ha?o.mapping=cn:r===da&&(o.mapping=hn),o}function i(o){if(o&&o.isTexture){const r=o.mapping;if(r===ha||r===da)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new th(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",n),e(l.texture,o.mapping)}else return null}}return o}function n(o){const r=o.target;r.removeEventListener("dispose",n);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class Xo extends Vo{constructor(t=-1,e=1,i=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-t,o=i+t,r=n+e,c=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,o=a+l*this.view.width,r-=h*this.view.offsetY,c=r-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,r,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const nn=4,kr=[.125,.215,.35,.446,.526,.582],Ci=20,Zs=new Xo,Hr=new Jt;let Js=null,Qs=0,ta=0;const bi=(1+Math.sqrt(5))/2,tn=1/bi,Vr=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,bi,tn),new j(0,bi,-tn),new j(tn,0,bi),new j(-tn,0,bi),new j(bi,tn,0),new j(-bi,tn,0)];class Wr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Js=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,n,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$r(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Js,Qs,ta),t.scissorTest=!1,ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cn||t.mapping===hn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Js=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:bn,format:Ye,colorSpace:ai,depthBuffer:!1},n=Yr(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yr(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vu(a)),this._blurMaterial=Wu(a,t,e)}return n}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,Zs)}_sceneToCubeUV(t,e,i,n){const r=new Fe(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Hr),h.toneMapping=gi,h.autoClear=!1;const g=new fs({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),v=new te(new we,g);let m=!1;const d=t.background;d?d.isColor&&(g.color.copy(d),t.background=null,m=!0):(g.color.copy(Hr),m=!0);for(let u=0;u<6;u++){const M=u%3;M===0?(r.up.set(0,c[u],0),r.lookAt(l[u],0,0)):M===1?(r.up.set(0,0,c[u]),r.lookAt(0,l[u],0)):(r.up.set(0,c[u],0),r.lookAt(0,0,l[u]));const _=this._cubeSize;ts(n,M*_,u>2?_:0,_,_),h.setRenderTarget(n),m&&h.render(v,r),h.render(t,r)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===cn||t.mapping===hn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=$r()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xr());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],a),r=a.uniforms;r.envMap.value=t;const c=this._cubeSize;ts(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Zs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Vr[(n-1)%Vr.length];this._blur(t,n-1,n,a,o)}e.autoClear=i}_blur(t,e,i,n,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",a),this._halfBlur(o,t,i,i,n,"longitudinal",a)}_halfBlur(t,e,i,n,a,o,r){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new te(this._lodPlanes[n],l),p=l.uniforms,g=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*Ci-1),m=a/v,d=isFinite(a)?1+Math.floor(h*m):Ci;d>Ci&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ci}`);const u=[];let M=0;for(let A=0;A<Ci;++A){const N=A/m,T=Math.exp(-N*N/2);u.push(T),A===0?M+=T:A<d&&(M+=2*T)}for(let A=0;A<u.length;A++)u[A]=u[A]/M;p.envMap.value=t.texture,p.samples.value=d,p.weights.value=u,p.latitudinal.value=o==="latitudinal",r&&(p.poleAxis.value=r);const{_lodMax:_}=this;p.dTheta.value=v,p.mipInt.value=_-i;const y=this._sizeLods[n],E=3*y*(n>_-nn?n-_+nn:0),x=4*(this._cubeSize-y);ts(e,E,x,3*y,2*y),c.setRenderTarget(e),c.render(f,Zs)}}function Vu(s){const t=[],e=[],i=[];let n=s;const a=s-nn+1+kr.length;for(let o=0;o<a;o++){const r=Math.pow(2,n);e.push(r);let c=1/r;o>s-nn?c=kr[o-s+nn-1]:o===0&&(c=0),i.push(c);const l=1/(r-2),h=-l,f=1+l,p=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,v=6,m=3,d=2,u=1,M=new Float32Array(m*v*g),_=new Float32Array(d*v*g),y=new Float32Array(u*v*g);for(let x=0;x<g;x++){const A=x%3*2/3-1,N=x>2?0:-1,T=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];M.set(T,m*v*x),_.set(p,d*v*x);const b=[x,x,x,x,x,x];y.set(b,u*v*x)}const E=new qe;E.setAttribute("position",new Ke(M,m)),E.setAttribute("uv",new Ke(_,d)),E.setAttribute("faceIndex",new Ke(y,u)),t.push(E),n>nn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Yr(s,t,e){const i=new Ii(s,t,e);return i.texture.mapping=vs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ts(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Wu(s,t,e){const i=new Float32Array(Ci),n=new j(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ra(),fragmentShader:`

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
	`}function Yu(s){let t=new WeakMap,e=null;function i(r){if(r&&r.isTexture){const c=r.mapping,l=c===ha||c===da,h=c===cn||c===hn;if(l||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let f=t.get(r);return e===null&&(e=new Wr(s)),f=l?e.fromEquirectangular(r,f):e.fromCubemap(r,f),t.set(r,f),f.texture}else{if(t.has(r))return t.get(r).texture;{const f=r.image;if(l&&f&&f.height>0||h&&f&&n(f)){e===null&&(e=new Wr(s));const p=l?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,p),r.addEventListener("dispose",a),p.texture}else return null}}}return r}function n(r){let c=0;const l=6;for(let h=0;h<l;h++)r[h]!==void 0&&c++;return c===l}function a(r){const c=r.target;c.removeEventListener("dispose",a);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Xu(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function $u(s,t,e,i){const n={},a=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const v in p.attributes)t.remove(p.attributes[v]);for(const v in p.morphAttributes){const m=p.morphAttributes[v];for(let d=0,u=m.length;d<u;d++)t.remove(m[d])}p.removeEventListener("dispose",o),delete n[p.id];const g=a.get(p);g&&(t.remove(g),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function r(f,p){return n[p.id]===!0||(p.addEventListener("dispose",o),n[p.id]=!0,e.memory.geometries++),p}function c(f){const p=f.attributes;for(const v in p)t.update(p[v],s.ARRAY_BUFFER);const g=f.morphAttributes;for(const v in g){const m=g[v];for(let d=0,u=m.length;d<u;d++)t.update(m[d],s.ARRAY_BUFFER)}}function l(f){const p=[],g=f.index,v=f.attributes.position;let m=0;if(g!==null){const M=g.array;m=g.version;for(let _=0,y=M.length;_<y;_+=3){const E=M[_+0],x=M[_+1],A=M[_+2];p.push(E,x,x,A,A,E)}}else if(v!==void 0){const M=v.array;m=v.version;for(let _=0,y=M.length/3-1;_<y;_+=3){const E=_+0,x=_+1,A=_+2;p.push(E,x,x,A,A,E)}}else return;const d=new(No(p)?ko:Bo)(p,1);d.version=m;const u=a.get(f);u&&t.remove(u),a.set(f,d)}function h(f){const p=a.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&l(f)}else l(f);return a.get(f)}return{get:r,update:c,getWireframeAttribute:h}}function Ku(s,t,e,i){const n=i.isWebGL2;let a;function o(g){a=g}let r,c;function l(g){r=g.type,c=g.bytesPerElement}function h(g,v){s.drawElements(a,v,r,g*c),e.update(v,a,1)}function f(g,v,m){if(m===0)return;let d,u;if(n)d=s,u="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[u](a,v,r,g*c,m),e.update(v,a,m)}function p(g,v,m){if(m===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<m;u++)this.render(g[u]/c,v[u]);else{d.multiDrawElementsWEBGL(a,v,0,r,g,0,m);let u=0;for(let M=0;M<m;M++)u+=v[M];e.update(u,a,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function qu(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,r){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=r*(a/3);break;case s.LINES:e.lines+=r*(a/2);break;case s.LINE_STRIP:e.lines+=r*(a-1);break;case s.LINE_LOOP:e.lines+=r*a;break;case s.POINTS:e.points+=r*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function ju(s,t){return s[0]-t[0]}function Zu(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Ju(s,t,e){const i={},n=new Float32Array(8),a=new WeakMap,o=new me,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function c(l,h,f){const p=l.morphTargetInfluences;if(t.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=v!==void 0?v.length:0;let d=a.get(h);if(d===void 0||d.count!==m){let I=function(){q.dispose(),a.delete(h),h.removeEventListener("dispose",I)};var g=I;d!==void 0&&d.texture.dispose();const _=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let T=0;_===!0&&(T=1),y===!0&&(T=2),E===!0&&(T=3);let b=h.attributes.position.count*T,z=1;b>t.maxTextureSize&&(z=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const k=new Float32Array(b*z*4*m),q=new Fo(k,b,z,m);q.type=pi,q.needsUpdate=!0;const w=T*4;for(let F=0;F<m;F++){const V=x[F],$=A[F],K=N[F],tt=b*z*4*F;for(let Q=0;Q<V.count;Q++){const it=Q*w;_===!0&&(o.fromBufferAttribute(V,Q),k[tt+it+0]=o.x,k[tt+it+1]=o.y,k[tt+it+2]=o.z,k[tt+it+3]=0),y===!0&&(o.fromBufferAttribute($,Q),k[tt+it+4]=o.x,k[tt+it+5]=o.y,k[tt+it+6]=o.z,k[tt+it+7]=0),E===!0&&(o.fromBufferAttribute(K,Q),k[tt+it+8]=o.x,k[tt+it+9]=o.y,k[tt+it+10]=o.z,k[tt+it+11]=K.itemSize===4?o.w:1)}}d={count:m,texture:q,size:new kt(b,z)},a.set(h,d),h.addEventListener("dispose",I)}let u=0;for(let _=0;_<p.length;_++)u+=p[_];const M=h.morphTargetsRelative?1:1-u;f.getUniforms().setValue(s,"morphTargetBaseInfluence",M),f.getUniforms().setValue(s,"morphTargetInfluences",p),f.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}else{const v=p===void 0?0:p.length;let m=i[h.id];if(m===void 0||m.length!==v){m=[];for(let y=0;y<v;y++)m[y]=[y,0];i[h.id]=m}for(let y=0;y<v;y++){const E=m[y];E[0]=y,E[1]=p[y]}m.sort(Zu);for(let y=0;y<8;y++)y<v&&m[y][1]?(r[y][0]=m[y][0],r[y][1]=m[y][1]):(r[y][0]=Number.MAX_SAFE_INTEGER,r[y][1]=0);r.sort(ju);const d=h.morphAttributes.position,u=h.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const E=r[y],x=E[0],A=E[1];x!==Number.MAX_SAFE_INTEGER&&A?(d&&h.getAttribute("morphTarget"+y)!==d[x]&&h.setAttribute("morphTarget"+y,d[x]),u&&h.getAttribute("morphNormal"+y)!==u[x]&&h.setAttribute("morphNormal"+y,u[x]),n[y]=A,M+=A):(d&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),u&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),n[y]=0)}const _=h.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",_),f.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:c}}function Qu(s,t,e,i){let n=new WeakMap;function a(c){const l=i.render.frame,h=c.geometry,f=t.get(c,h);if(n.get(f)!==l&&(t.update(f),n.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),n.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;n.get(p)!==l&&(p.update(),n.set(p,l))}return f}function o(){n=new WeakMap}function r(c){const l=c.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:o}}class $o extends Oe{constructor(t,e,i,n,a,o,r,c,l,h){if(h=h!==void 0?h:Ri,h!==Ri&&h!==dn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ri&&(i=fi),i===void 0&&h===dn&&(i=wi),super(null,n,a,o,r,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Ae,this.minFilter=c!==void 0?c:Ae,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ko=new Oe,qo=new $o(1,1);qo.compareFunction=Oo;const jo=new Fo,Zo=new zc,Jo=new Wo,Kr=[],qr=[],jr=new Float32Array(16),Zr=new Float32Array(9),Jr=new Float32Array(4);function fn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let a=Kr[n];if(a===void 0&&(a=new Float32Array(n),Kr[n]=a),t!==0){i.toArray(a,0);for(let o=1,r=0;o!==t;++o)r+=e,s[o].toArray(a,r)}return a}function de(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function ue(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Ms(s,t){let e=qr[t];e===void 0&&(e=new Int32Array(t),qr[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function tf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2fv(this.addr,t),ue(e,t)}}function nf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;s.uniform3fv(this.addr,t),ue(e,t)}}function sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4fv(this.addr,t),ue(e,t)}}function af(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(de(e,i))return;Jr.set(i),s.uniformMatrix2fv(this.addr,!1,Jr),ue(e,i)}}function rf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(de(e,i))return;Zr.set(i),s.uniformMatrix3fv(this.addr,!1,Zr),ue(e,i)}}function of(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(de(e,i))return;jr.set(i),s.uniformMatrix4fv(this.addr,!1,jr),ue(e,i)}}function lf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2iv(this.addr,t),ue(e,t)}}function hf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;s.uniform3iv(this.addr,t),ue(e,t)}}function df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4iv(this.addr,t),ue(e,t)}}function uf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2uiv(this.addr,t),ue(e,t)}}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;s.uniform3uiv(this.addr,t),ue(e,t)}}function mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4uiv(this.addr,t),ue(e,t)}}function gf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);const a=this.type===s.SAMPLER_2D_SHADOW?qo:Ko;e.setTexture2D(t||a,n)}function vf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Zo,n)}function _f(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Jo,n)}function yf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||jo,n)}function Mf(s){switch(s){case 5126:return tf;case 35664:return ef;case 35665:return nf;case 35666:return sf;case 35674:return af;case 35675:return rf;case 35676:return of;case 5124:case 35670:return lf;case 35667:case 35671:return cf;case 35668:case 35672:return hf;case 35669:case 35673:return df;case 5125:return uf;case 36294:return ff;case 36295:return pf;case 36296:return mf;case 35678:case 36198:case 36298:case 36306:case 35682:return gf;case 35679:case 36299:case 36307:return vf;case 35680:case 36300:case 36308:case 36293:return _f;case 36289:case 36303:case 36311:case 36292:return yf}}function Tf(s,t){s.uniform1fv(this.addr,t)}function Ef(s,t){const e=fn(t,this.size,2);s.uniform2fv(this.addr,e)}function xf(s,t){const e=fn(t,this.size,3);s.uniform3fv(this.addr,e)}function Sf(s,t){const e=fn(t,this.size,4);s.uniform4fv(this.addr,e)}function Af(s,t){const e=fn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function bf(s,t){const e=fn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Pf(s,t){const e=fn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Cf(s,t){s.uniform1iv(this.addr,t)}function wf(s,t){s.uniform2iv(this.addr,t)}function Rf(s,t){s.uniform3iv(this.addr,t)}function Lf(s,t){s.uniform4iv(this.addr,t)}function If(s,t){s.uniform1uiv(this.addr,t)}function Df(s,t){s.uniform2uiv(this.addr,t)}function Of(s,t){s.uniform3uiv(this.addr,t)}function Nf(s,t){s.uniform4uiv(this.addr,t)}function Uf(s,t,e){const i=this.cache,n=t.length,a=Ms(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||Ko,a[o])}function zf(s,t,e){const i=this.cache,n=t.length,a=Ms(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Zo,a[o])}function Ff(s,t,e){const i=this.cache,n=t.length,a=Ms(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Jo,a[o])}function Gf(s,t,e){const i=this.cache,n=t.length,a=Ms(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||jo,a[o])}function Bf(s){switch(s){case 5126:return Tf;case 35664:return Ef;case 35665:return xf;case 35666:return Sf;case 35674:return Af;case 35675:return bf;case 35676:return Pf;case 5124:case 35670:return Cf;case 35667:case 35671:return wf;case 35668:case 35672:return Rf;case 35669:case 35673:return Lf;case 5125:return If;case 36294:return Df;case 36295:return Of;case 36296:return Nf;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return zf;case 35680:case 36300:case 36308:case 36293:return Ff;case 36289:case 36303:case 36311:case 36292:return Gf}}class kf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Mf(e.type)}}class Hf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bf(e.type)}}class Vf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const r=n[a];r.setValue(t,e[r.id],i)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function Qr(s,t){s.seq.push(t),s.map[t.id]=t}function Wf(s,t,e){const i=s.name,n=i.length;for(ea.lastIndex=0;;){const a=ea.exec(i),o=ea.lastIndex;let r=a[1];const c=a[2]==="]",l=a[3];if(c&&(r=r|0),l===void 0||l==="["&&o+2===n){Qr(e,l===void 0?new kf(r,s,t):new Hf(r,s,t));break}else{let f=e.map[r];f===void 0&&(f=new Vf(r),Qr(e,f)),e=f}}}class as{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=t.getActiveUniform(e,n),o=t.getUniformLocation(e,a.name);Wf(a,o,this)}}setValue(t,e,i,n){const a=this.map[e];a!==void 0&&a.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let a=0,o=e.length;a!==o;++a){const r=e[a],c=i[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,a=t.length;n!==a;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function to(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Yf=37297;let Xf=0;function $f(s,t){const e=s.split(`
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
#define LOW_PRECISION`),t}function rp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===xo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Dl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ii&&(t="SHADOWMAP_TYPE_VSM"),t}function op(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case cn:case hn:t="ENVMAP_TYPE_CUBE";break;case vs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case hn:t="ENVMAP_MODE_REFRACTION";break}return t}function cp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ea:t="ENVMAP_BLENDING_MULTIPLY";break;case nc:t="ENVMAP_BLENDING_MIX";break;case sc:t="ENVMAP_BLENDING_ADD";break}return t}function hp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function dp(s,t,e,i){const n=s.getContext(),a=e.defines;let o=e.vertexShader,r=e.fragmentShader;const c=rp(e),l=op(e),h=lp(e),f=cp(e),p=hp(e),g=e.isWebGL2?"":Zf(e),v=Jf(e),m=Qf(a),d=n.createProgram();let u,M,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(sn).join(`
`),u.length>0&&(u+=`
`),M=[g,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(sn).join(`
`),M.length>0&&(M+=`
`)):(u=[ao(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sn).join(`
`),M=[g,ao(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==gi?jf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,qf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sn).join(`
`)),o=va(o),o=io(o,e),o=no(o,e),r=va(r),r=io(r,e),r=no(r,e),o=so(o),r=so(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,u=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,M=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===xr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const y=_+u+o,E=_+M+r,x=to(n,n.VERTEX_SHADER,y),A=to(n,n.FRAGMENT_SHADER,E);n.attachShader(d,x),n.attachShader(d,A),e.index0AttributeName!==void 0?n.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(d,0,"position"),n.linkProgram(d);function N(k){if(s.debug.checkShaderErrors){const q=n.getProgramInfoLog(d).trim(),w=n.getShaderInfoLog(x).trim(),I=n.getShaderInfoLog(A).trim();let F=!0,V=!0;if(n.getProgramParameter(d,n.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,d,x,A);else{const $=eo(n,x,"vertex"),K=eo(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(d,n.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+$+`
`+K)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(w===""||I==="")&&(V=!1);V&&(k.diagnostics={runnable:F,programLog:q,vertexShader:{log:w,prefix:u},fragmentShader:{log:I,prefix:M}})}n.deleteShader(x),n.deleteShader(A),T=new as(n,d),b=tp(n,d)}let T;this.getUniforms=function(){return T===void 0&&N(this),T};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=n.getProgramParameter(d,Yf)),z},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(d),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xf++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=x,this.fragmentShader=A,this}let up=0;class fp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new pp(t),e.set(t,i)),i}}class pp{constructor(t){this.id=up++,this.code=t,this.usedTimes=0}}function mp(s,t,e,i,n,a,o){const r=new Pa,c=new fp,l=[],h=n.isWebGL2,f=n.logarithmicDepthBuffer,p=n.vertexTextures;let g=n.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(T){return T===0?"uv":`uv${T}`}function d(T,b,z,k,q){const w=k.fog,I=q.geometry,F=T.isMeshStandardMaterial?k.environment:null,V=(T.isMeshStandardMaterial?e:t).get(T.envMap||F),$=V&&V.mapping===vs?V.image.height:null,K=v[T.type];T.precision!==null&&(g=n.getMaxPrecision(T.precision),g!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const tt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Q=tt!==void 0?tt.length:0;let it=0;I.morphAttributes.position!==void 0&&(it=1),I.morphAttributes.normal!==void 0&&(it=2),I.morphAttributes.color!==void 0&&(it=3);let G,et,ct,_t;if(K){const re=$e[K];G=re.vertexShader,et=re.fragmentShader}else G=T.vertexShader,et=T.fragmentShader,c.update(T),ct=c.getVertexShaderID(T),_t=c.getFragmentShaderID(T);const L=s.getRenderTarget(),B=q.isInstancedMesh===!0,Z=q.isBatchedMesh===!0,W=!!T.map,Y=!!T.matcap,D=!!V,Mt=!!T.aoMap,vt=!!T.lightMap,Tt=!!T.bumpMap,gt=!!T.normalMap,It=!!T.displacementMap,xt=!!T.emissiveMap,P=!!T.metalnessMap,S=!!T.roughnessMap,H=T.anisotropy>0,ot=T.clearcoat>0,at=T.iridescence>0,lt=T.sheen>0,ut=T.transmission>0,dt=H&&!!T.anisotropyMap,pt=ot&&!!T.clearcoatMap,St=ot&&!!T.clearcoatNormalMap,Lt=ot&&!!T.clearcoatRoughnessMap,ht=at&&!!T.iridescenceMap,zt=at&&!!T.iridescenceThicknessMap,Nt=lt&&!!T.sheenColorMap,Ct=lt&&!!T.sheenRoughnessMap,At=!!T.specularMap,bt=!!T.specularColorMap,R=!!T.specularIntensityMap,ft=ut&&!!T.transmissionMap,Dt=ut&&!!T.thicknessMap,wt=!!T.gradientMap,mt=!!T.alphaMap,U=T.alphaTest>0,yt=!!T.alphaHash,Pt=!!T.extensions,Gt=!!I.attributes.uv1,Ft=!!I.attributes.uv2,qt=!!I.attributes.uv3;let jt=gi;return T.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(jt=s.toneMapping),{isWebGL2:h,shaderID:K,shaderType:T.type,shaderName:T.name,vertexShader:G,fragmentShader:et,defines:T.defines,customVertexShaderID:ct,customFragmentShaderID:_t,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Z,instancing:B,instancingColor:B&&q.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:L===null?s.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ai,map:W,matcap:Y,envMap:D,envMapMode:D&&V.mapping,envMapCubeUVHeight:$,aoMap:Mt,lightMap:vt,bumpMap:Tt,normalMap:gt,displacementMap:p&&It,emissiveMap:xt,normalMapObjectSpace:gt&&T.normalMapType===Ec,normalMapTangentSpace:gt&&T.normalMapType===Do,metalnessMap:P,roughnessMap:S,anisotropy:H,anisotropyMap:dt,clearcoat:ot,clearcoatMap:pt,clearcoatNormalMap:St,clearcoatRoughnessMap:Lt,iridescence:at,iridescenceMap:ht,iridescenceThicknessMap:zt,sheen:lt,sheenColorMap:Nt,sheenRoughnessMap:Ct,specularMap:At,specularColorMap:bt,specularIntensityMap:R,transmission:ut,transmissionMap:ft,thicknessMap:Dt,gradientMap:wt,opaque:T.transparent===!1&&T.blending===on,alphaMap:mt,alphaTest:U,alphaHash:yt,combine:T.combine,mapUv:W&&m(T.map.channel),aoMapUv:Mt&&m(T.aoMap.channel),lightMapUv:vt&&m(T.lightMap.channel),bumpMapUv:Tt&&m(T.bumpMap.channel),normalMapUv:gt&&m(T.normalMap.channel),displacementMapUv:It&&m(T.displacementMap.channel),emissiveMapUv:xt&&m(T.emissiveMap.channel),metalnessMapUv:P&&m(T.metalnessMap.channel),roughnessMapUv:S&&m(T.roughnessMap.channel),anisotropyMapUv:dt&&m(T.anisotropyMap.channel),clearcoatMapUv:pt&&m(T.clearcoatMap.channel),clearcoatNormalMapUv:St&&m(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&m(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&m(T.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&m(T.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&m(T.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&m(T.sheenRoughnessMap.channel),specularMapUv:At&&m(T.specularMap.channel),specularColorMapUv:bt&&m(T.specularColorMap.channel),specularIntensityMapUv:R&&m(T.specularIntensityMap.channel),transmissionMapUv:ft&&m(T.transmissionMap.channel),thicknessMapUv:Dt&&m(T.thicknessMap.channel),alphaMapUv:mt&&m(T.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(gt||H),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Gt,vertexUv2s:Ft,vertexUv3s:qt,pointsUvs:q.isPoints===!0&&!!I.attributes.uv&&(W||mt),fog:!!w,useFog:T.fog===!0,fogExp2:w&&w.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:it,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:jt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:W&&T.map.isVideoTexture===!0&&Qt.getTransfer(T.map.colorSpace)===ee,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ni,flipSided:T.side===Re,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Pt&&T.extensions.derivatives===!0,extensionFragDepth:Pt&&T.extensions.fragDepth===!0,extensionDrawBuffers:Pt&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Pt&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Pt&&T.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function u(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const z in T.defines)b.push(z),b.push(T.defines[z]);return T.isRawShaderMaterial===!1&&(M(b,T),_(b,T),b.push(s.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function M(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function _(T,b){r.disableAll(),b.isWebGL2&&r.enable(0),b.supportsVertexTextures&&r.enable(1),b.instancing&&r.enable(2),b.instancingColor&&r.enable(3),b.matcap&&r.enable(4),b.envMap&&r.enable(5),b.normalMapObjectSpace&&r.enable(6),b.normalMapTangentSpace&&r.enable(7),b.clearcoat&&r.enable(8),b.iridescence&&r.enable(9),b.alphaTest&&r.enable(10),b.vertexColors&&r.enable(11),b.vertexAlphas&&r.enable(12),b.vertexUv1s&&r.enable(13),b.vertexUv2s&&r.enable(14),b.vertexUv3s&&r.enable(15),b.vertexTangents&&r.enable(16),b.anisotropy&&r.enable(17),b.alphaHash&&r.enable(18),b.batching&&r.enable(19),T.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.skinning&&r.enable(4),b.morphTargets&&r.enable(5),b.morphNormals&&r.enable(6),b.morphColors&&r.enable(7),b.premultipliedAlpha&&r.enable(8),b.shadowMapEnabled&&r.enable(9),b.useLegacyLights&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),T.push(r.mask)}function y(T){const b=v[T.type];let z;if(b){const k=$e[b];z=jc.clone(k.uniforms)}else z=T.uniforms;return z}function E(T,b){let z;for(let k=0,q=l.length;k<q;k++){const w=l[k];if(w.cacheKey===b){z=w,++z.usedTimes;break}}return z===void 0&&(z=new dp(s,b,T,a),l.push(z)),z}function x(T){if(--T.usedTimes===0){const b=l.indexOf(T);l[b]=l[l.length-1],l.pop(),T.destroy()}}function A(T){c.remove(T)}function N(){c.dispose()}return{getParameters:d,getProgramCacheKey:u,getUniforms:y,acquireProgram:E,releaseProgram:x,releaseShaderCache:A,programs:l,dispose:N}}function gp(){let s=new WeakMap;function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function e(a){s.delete(a)}function i(a,o,r){s.get(a)[o]=r}function n(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function vp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ro(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function oo(){const s=[];let t=0;const e=[],i=[],n=[];function a(){t=0,e.length=0,i.length=0,n.length=0}function o(f,p,g,v,m,d){let u=s[t];return u===void 0?(u={id:f.id,object:f,geometry:p,material:g,groupOrder:v,renderOrder:f.renderOrder,z:m,group:d},s[t]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=g,u.groupOrder=v,u.renderOrder=f.renderOrder,u.z=m,u.group=d),t++,u}function r(f,p,g,v,m,d){const u=o(f,p,g,v,m,d);g.transmission>0?i.push(u):g.transparent===!0?n.push(u):e.push(u)}function c(f,p,g,v,m,d){const u=o(f,p,g,v,m,d);g.transmission>0?i.unshift(u):g.transparent===!0?n.unshift(u):e.unshift(u)}function l(f,p){e.length>1&&e.sort(f||vp),i.length>1&&i.sort(p||ro),n.length>1&&n.sort(p||ro)}function h(){for(let f=t,p=s.length;f<p;f++){const g=s[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:n,init:a,push:r,unshift:c,finish:h,sort:l}}function _p(){let s=new WeakMap;function t(i,n){const a=s.get(i);let o;return a===void 0?(o=new oo,s.set(i,[o])):n>=a.length?(o=new oo,a.push(o)):o=a[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function yp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new j,color:new Jt};break;case"SpotLight":e={position:new j,direction:new j,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new j,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new j,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new j,halfWidth:new j,halfHeight:new j};break}return s[t.id]=e,e}}}function Mp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Tp=0;function Ep(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function xp(s,t){const e=new yp,i=Mp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new j);const a=new j,o=new he,r=new he;function c(h,f){let p=0,g=0,v=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let m=0,d=0,u=0,M=0,_=0,y=0,E=0,x=0,A=0,N=0,T=0;h.sort(Ep);const b=f===!0?Math.PI:1;for(let k=0,q=h.length;k<q;k++){const w=h[k],I=w.color,F=w.intensity,V=w.distance,$=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)p+=I.r*F*b,g+=I.g*F*b,v+=I.b*F*b;else if(w.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(w.sh.coefficients[K],F);T++}else if(w.isDirectionalLight){const K=e.get(w);if(K.color.copy(w.color).multiplyScalar(w.intensity*b),w.castShadow){const tt=w.shadow,Q=i.get(w);Q.shadowBias=tt.bias,Q.shadowNormalBias=tt.normalBias,Q.shadowRadius=tt.radius,Q.shadowMapSize=tt.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=w.shadow.matrix,y++}n.directional[m]=K,m++}else if(w.isSpotLight){const K=e.get(w);K.position.setFromMatrixPosition(w.matrixWorld),K.color.copy(I).multiplyScalar(F*b),K.distance=V,K.coneCos=Math.cos(w.angle),K.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),K.decay=w.decay,n.spot[u]=K;const tt=w.shadow;if(w.map&&(n.spotLightMap[A]=w.map,A++,tt.updateMatrices(w),w.castShadow&&N++),n.spotLightMatrix[u]=tt.matrix,w.castShadow){const Q=i.get(w);Q.shadowBias=tt.bias,Q.shadowNormalBias=tt.normalBias,Q.shadowRadius=tt.radius,Q.shadowMapSize=tt.mapSize,n.spotShadow[u]=Q,n.spotShadowMap[u]=$,x++}u++}else if(w.isRectAreaLight){const K=e.get(w);K.color.copy(I).multiplyScalar(F),K.halfWidth.set(w.width*.5,0,0),K.halfHeight.set(0,w.height*.5,0),n.rectArea[M]=K,M++}else if(w.isPointLight){const K=e.get(w);if(K.color.copy(w.color).multiplyScalar(w.intensity*b),K.distance=w.distance,K.decay=w.decay,w.castShadow){const tt=w.shadow,Q=i.get(w);Q.shadowBias=tt.bias,Q.shadowNormalBias=tt.normalBias,Q.shadowRadius=tt.radius,Q.shadowMapSize=tt.mapSize,Q.shadowCameraNear=tt.camera.near,Q.shadowCameraFar=tt.camera.far,n.pointShadow[d]=Q,n.pointShadowMap[d]=$,n.pointShadowMatrix[d]=w.shadow.matrix,E++}n.point[d]=K,d++}else if(w.isHemisphereLight){const K=e.get(w);K.skyColor.copy(w.color).multiplyScalar(F*b),K.groundColor.copy(w.groundColor).multiplyScalar(F*b),n.hemi[_]=K,_++}}M>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=p,n.ambient[1]=g,n.ambient[2]=v;const z=n.hash;(z.directionalLength!==m||z.pointLength!==d||z.spotLength!==u||z.rectAreaLength!==M||z.hemiLength!==_||z.numDirectionalShadows!==y||z.numPointShadows!==E||z.numSpotShadows!==x||z.numSpotMaps!==A||z.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=u,n.rectArea.length=M,n.point.length=d,n.hemi.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+A-N,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=T,z.directionalLength=m,z.pointLength=d,z.spotLength=u,z.rectAreaLength=M,z.hemiLength=_,z.numDirectionalShadows=y,z.numPointShadows=E,z.numSpotShadows=x,z.numSpotMaps=A,z.numLightProbes=T,n.version=Tp++)}function l(h,f){let p=0,g=0,v=0,m=0,d=0;const u=f.matrixWorldInverse;for(let M=0,_=h.length;M<_;M++){const y=h[M];if(y.isDirectionalLight){const E=n.directional[p];E.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(u),p++}else if(y.isSpotLight){const E=n.spot[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(u),E.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(u),v++}else if(y.isRectAreaLight){const E=n.rectArea[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(u),r.identity(),o.copy(y.matrixWorld),o.premultiply(u),r.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),m++}else if(y.isPointLight){const E=n.point[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(u),g++}else if(y.isHemisphereLight){const E=n.hemi[d];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(u),d++}}}return{setup:c,setupView:l,state:n}}function lo(s,t){const e=new xp(s,t),i=[],n=[];function a(){i.length=0,n.length=0}function o(f){i.push(f)}function r(f){n.push(f)}function c(f){e.setup(i,f)}function l(f){e.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:r}}function Sp(s,t){let e=new WeakMap;function i(a,o=0){const r=e.get(a);let c;return r===void 0?(c=new lo(s,t),e.set(a,[c])):o>=r.length?(c=new lo(s,t),r.push(c)):c=r[o],c}function n(){e=new WeakMap}return{get:i,dispose:n}}class Ap extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bp extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Pp=`void main() {
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
}`;function wp(s,t,e){let i=new Ca;const n=new kt,a=new kt,o=new me,r=new Ap({depthPacking:Tc}),c=new bp,l={},h=e.maxTextureSize,f={[_i]:Re,[Re]:_i,[ni]:ni},p=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Pp,fragmentShader:Cp}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const v=new qe;v.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new te(v,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xo;let u=this.type;this.render=function(x,A,N){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||x.length===0)return;const T=s.getRenderTarget(),b=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),k=s.state;k.setBlending(mi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const q=u!==ii&&this.type===ii,w=u===ii&&this.type!==ii;for(let I=0,F=x.length;I<F;I++){const V=x[I],$=V.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;n.copy($.mapSize);const K=$.getFrameExtents();if(n.multiply(K),a.copy($.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/K.x),n.x=a.x*K.x,$.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/K.y),n.y=a.y*K.y,$.mapSize.y=a.y)),$.map===null||q===!0||w===!0){const Q=this.type!==ii?{minFilter:Ae,magFilter:Ae}:{};$.map!==null&&$.map.dispose(),$.map=new Ii(n.x,n.y,Q),$.map.texture.name=V.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();const tt=$.getViewportCount();for(let Q=0;Q<tt;Q++){const it=$.getViewport(Q);o.set(a.x*it.x,a.y*it.y,a.x*it.z,a.y*it.w),k.viewport(o),$.updateMatrices(V,Q),i=$.getFrustum(),y(A,N,$.camera,V,this.type)}$.isPointLightShadow!==!0&&this.type===ii&&M($,N),$.needsUpdate=!1}u=this.type,d.needsUpdate=!1,s.setRenderTarget(T,b,z)};function M(x,A){const N=t.update(m);p.defines.VSM_SAMPLES!==x.blurSamples&&(p.defines.VSM_SAMPLES=x.blurSamples,g.defines.VSM_SAMPLES=x.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Ii(n.x,n.y)),p.uniforms.shadow_pass.value=x.map.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,s.setRenderTarget(x.mapPass),s.clear(),s.renderBufferDirect(A,null,N,p,m,null),g.uniforms.shadow_pass.value=x.mapPass.texture,g.uniforms.resolution.value=x.mapSize,g.uniforms.radius.value=x.radius,s.setRenderTarget(x.map),s.clear(),s.renderBufferDirect(A,null,N,g,m,null)}function _(x,A,N,T){let b=null;const z=N.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(z!==void 0)b=z;else if(b=N.isPointLight===!0?c:r,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=b.uuid,q=A.uuid;let w=l[k];w===void 0&&(w={},l[k]=w);let I=w[q];I===void 0&&(I=b.clone(),w[q]=I,A.addEventListener("dispose",E)),b=I}if(b.visible=A.visible,b.wireframe=A.wireframe,T===ii?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:f[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const k=s.properties.get(b);k.light=N}return b}function y(x,A,N,T,b){if(x.visible===!1)return;if(x.layers.test(A.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&b===ii)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,x.matrixWorld);const q=t.update(x),w=x.material;if(Array.isArray(w)){const I=q.groups;for(let F=0,V=I.length;F<V;F++){const $=I[F],K=w[$.materialIndex];if(K&&K.visible){const tt=_(x,K,T,b);x.onBeforeShadow(s,x,A,N,q,tt,$),s.renderBufferDirect(N,null,q,tt,x,$),x.onAfterShadow(s,x,A,N,q,tt,$)}}}else if(w.visible){const I=_(x,w,T,b);x.onBeforeShadow(s,x,A,N,q,I,null),s.renderBufferDirect(N,null,q,I,x,null),x.onAfterShadow(s,x,A,N,q,I,null)}}const k=x.children;for(let q=0,w=k.length;q<w;q++)y(k[q],A,N,T,b)}function E(x){x.target.removeEventListener("dispose",E);for(const N in l){const T=l[N],b=x.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}function Rp(s,t,e){const i=e.isWebGL2;function n(){let U=!1;const yt=new me;let Pt=null;const Gt=new me(0,0,0,0);return{setMask:function(Ft){Pt!==Ft&&!U&&(s.colorMask(Ft,Ft,Ft,Ft),Pt=Ft)},setLocked:function(Ft){U=Ft},setClear:function(Ft,qt,jt,se,re){re===!0&&(Ft*=se,qt*=se,jt*=se),yt.set(Ft,qt,jt,se),Gt.equals(yt)===!1&&(s.clearColor(Ft,qt,jt,se),Gt.copy(yt))},reset:function(){U=!1,Pt=null,Gt.set(-1,0,0,0)}}}function a(){let U=!1,yt=null,Pt=null,Gt=null;return{setTest:function(Ft){Ft?Z(s.DEPTH_TEST):W(s.DEPTH_TEST)},setMask:function(Ft){yt!==Ft&&!U&&(s.depthMask(Ft),yt=Ft)},setFunc:function(Ft){if(Pt!==Ft){switch(Ft){case jl:s.depthFunc(s.NEVER);break;case Zl:s.depthFunc(s.ALWAYS);break;case Jl:s.depthFunc(s.LESS);break;case os:s.depthFunc(s.LEQUAL);break;case Ql:s.depthFunc(s.EQUAL);break;case tc:s.depthFunc(s.GEQUAL);break;case ec:s.depthFunc(s.GREATER);break;case ic:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pt=Ft}},setLocked:function(Ft){U=Ft},setClear:function(Ft){Gt!==Ft&&(s.clearDepth(Ft),Gt=Ft)},reset:function(){U=!1,yt=null,Pt=null,Gt=null}}}function o(){let U=!1,yt=null,Pt=null,Gt=null,Ft=null,qt=null,jt=null,se=null,re=null;return{setTest:function(Zt){U||(Zt?Z(s.STENCIL_TEST):W(s.STENCIL_TEST))},setMask:function(Zt){yt!==Zt&&!U&&(s.stencilMask(Zt),yt=Zt)},setFunc:function(Zt,le,Xe){(Pt!==Zt||Gt!==le||Ft!==Xe)&&(s.stencilFunc(Zt,le,Xe),Pt=Zt,Gt=le,Ft=Xe)},setOp:function(Zt,le,Xe){(qt!==Zt||jt!==le||se!==Xe)&&(s.stencilOp(Zt,le,Xe),qt=Zt,jt=le,se=Xe)},setLocked:function(Zt){U=Zt},setClear:function(Zt){re!==Zt&&(s.clearStencil(Zt),re=Zt)},reset:function(){U=!1,yt=null,Pt=null,Gt=null,Ft=null,qt=null,jt=null,se=null,re=null}}}const r=new n,c=new a,l=new o,h=new WeakMap,f=new WeakMap;let p={},g={},v=new WeakMap,m=[],d=null,u=!1,M=null,_=null,y=null,E=null,x=null,A=null,N=null,T=new Jt(0,0,0),b=0,z=!1,k=null,q=null,w=null,I=null,F=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,K=0;const tt=s.getParameter(s.VERSION);tt.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(tt)[1]),$=K>=1):tt.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),$=K>=2);let Q=null,it={};const G=s.getParameter(s.SCISSOR_BOX),et=s.getParameter(s.VIEWPORT),ct=new me().fromArray(G),_t=new me().fromArray(et);function L(U,yt,Pt,Gt){const Ft=new Uint8Array(4),qt=s.createTexture();s.bindTexture(U,qt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let jt=0;jt<Pt;jt++)i&&(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)?s.texImage3D(yt,0,s.RGBA,1,1,Gt,0,s.RGBA,s.UNSIGNED_BYTE,Ft):s.texImage2D(yt+jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ft);return qt}const B={};B[s.TEXTURE_2D]=L(s.TEXTURE_2D,s.TEXTURE_2D,1),B[s.TEXTURE_CUBE_MAP]=L(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(B[s.TEXTURE_2D_ARRAY]=L(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),B[s.TEXTURE_3D]=L(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Z(s.DEPTH_TEST),c.setFunc(os),xt(!1),P(Va),Z(s.CULL_FACE),gt(mi);function Z(U){p[U]!==!0&&(s.enable(U),p[U]=!0)}function W(U){p[U]!==!1&&(s.disable(U),p[U]=!1)}function Y(U,yt){return g[U]!==yt?(s.bindFramebuffer(U,yt),g[U]=yt,i&&(U===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=yt),U===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=yt)),!0):!1}function D(U,yt){let Pt=m,Gt=!1;if(U)if(Pt=v.get(yt),Pt===void 0&&(Pt=[],v.set(yt,Pt)),U.isWebGLMultipleRenderTargets){const Ft=U.texture;if(Pt.length!==Ft.length||Pt[0]!==s.COLOR_ATTACHMENT0){for(let qt=0,jt=Ft.length;qt<jt;qt++)Pt[qt]=s.COLOR_ATTACHMENT0+qt;Pt.length=Ft.length,Gt=!0}}else Pt[0]!==s.COLOR_ATTACHMENT0&&(Pt[0]=s.COLOR_ATTACHMENT0,Gt=!0);else Pt[0]!==s.BACK&&(Pt[0]=s.BACK,Gt=!0);Gt&&(e.isWebGL2?s.drawBuffers(Pt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Pt))}function Mt(U){return d!==U?(s.useProgram(U),d=U,!0):!1}const vt={[Pi]:s.FUNC_ADD,[Nl]:s.FUNC_SUBTRACT,[Ul]:s.FUNC_REVERSE_SUBTRACT};if(i)vt[$a]=s.MIN,vt[Ka]=s.MAX;else{const U=t.get("EXT_blend_minmax");U!==null&&(vt[$a]=U.MIN_EXT,vt[Ka]=U.MAX_EXT)}const Tt={[zl]:s.ZERO,[Fl]:s.ONE,[Gl]:s.SRC_COLOR,[la]:s.SRC_ALPHA,[Yl]:s.SRC_ALPHA_SATURATE,[Vl]:s.DST_COLOR,[kl]:s.DST_ALPHA,[Bl]:s.ONE_MINUS_SRC_COLOR,[ca]:s.ONE_MINUS_SRC_ALPHA,[Wl]:s.ONE_MINUS_DST_COLOR,[Hl]:s.ONE_MINUS_DST_ALPHA,[Xl]:s.CONSTANT_COLOR,[$l]:s.ONE_MINUS_CONSTANT_COLOR,[Kl]:s.CONSTANT_ALPHA,[ql]:s.ONE_MINUS_CONSTANT_ALPHA};function gt(U,yt,Pt,Gt,Ft,qt,jt,se,re,Zt){if(U===mi){u===!0&&(W(s.BLEND),u=!1);return}if(u===!1&&(Z(s.BLEND),u=!0),U!==Ol){if(U!==M||Zt!==z){if((_!==Pi||x!==Pi)&&(s.blendEquation(s.FUNC_ADD),_=Pi,x=Pi),Zt)switch(U){case on:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wa:s.blendFunc(s.ONE,s.ONE);break;case Ya:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case on:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wa:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ya:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,E=null,A=null,N=null,T.set(0,0,0),b=0,M=U,z=Zt}return}Ft=Ft||yt,qt=qt||Pt,jt=jt||Gt,(yt!==_||Ft!==x)&&(s.blendEquationSeparate(vt[yt],vt[Ft]),_=yt,x=Ft),(Pt!==y||Gt!==E||qt!==A||jt!==N)&&(s.blendFuncSeparate(Tt[Pt],Tt[Gt],Tt[qt],Tt[jt]),y=Pt,E=Gt,A=qt,N=jt),(se.equals(T)===!1||re!==b)&&(s.blendColor(se.r,se.g,se.b,re),T.copy(se),b=re),M=U,z=!1}function It(U,yt){U.side===ni?W(s.CULL_FACE):Z(s.CULL_FACE);let Pt=U.side===Re;yt&&(Pt=!Pt),xt(Pt),U.blending===on&&U.transparent===!1?gt(mi):gt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),r.setMask(U.colorWrite);const Gt=U.stencilWrite;l.setTest(Gt),Gt&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),H(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):W(s.SAMPLE_ALPHA_TO_COVERAGE)}function xt(U){k!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),k=U)}function P(U){U!==Ll?(Z(s.CULL_FACE),U!==q&&(U===Va?s.cullFace(s.BACK):U===Il?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):W(s.CULL_FACE),q=U}function S(U){U!==w&&($&&s.lineWidth(U),w=U)}function H(U,yt,Pt){U?(Z(s.POLYGON_OFFSET_FILL),(I!==yt||F!==Pt)&&(s.polygonOffset(yt,Pt),I=yt,F=Pt)):W(s.POLYGON_OFFSET_FILL)}function ot(U){U?Z(s.SCISSOR_TEST):W(s.SCISSOR_TEST)}function at(U){U===void 0&&(U=s.TEXTURE0+V-1),Q!==U&&(s.activeTexture(U),Q=U)}function lt(U,yt,Pt){Pt===void 0&&(Q===null?Pt=s.TEXTURE0+V-1:Pt=Q);let Gt=it[Pt];Gt===void 0&&(Gt={type:void 0,texture:void 0},it[Pt]=Gt),(Gt.type!==U||Gt.texture!==yt)&&(Q!==Pt&&(s.activeTexture(Pt),Q=Pt),s.bindTexture(U,yt||B[U]),Gt.type=U,Gt.texture=yt)}function ut(){const U=it[Q];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function dt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function zt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function R(U){ct.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),ct.copy(U))}function ft(U){_t.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),_t.copy(U))}function Dt(U,yt){let Pt=f.get(yt);Pt===void 0&&(Pt=new WeakMap,f.set(yt,Pt));let Gt=Pt.get(U);Gt===void 0&&(Gt=s.getUniformBlockIndex(yt,U.name),Pt.set(U,Gt))}function wt(U,yt){const Gt=f.get(yt).get(U);h.get(yt)!==Gt&&(s.uniformBlockBinding(yt,Gt,U.__bindingPointIndex),h.set(yt,Gt))}function mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},Q=null,it={},g={},v=new WeakMap,m=[],d=null,u=!1,M=null,_=null,y=null,E=null,x=null,A=null,N=null,T=new Jt(0,0,0),b=0,z=!1,k=null,q=null,w=null,I=null,F=null,ct.set(0,0,s.canvas.width,s.canvas.height),_t.set(0,0,s.canvas.width,s.canvas.height),r.reset(),c.reset(),l.reset()}return{buffers:{color:r,depth:c,stencil:l},enable:Z,disable:W,bindFramebuffer:Y,drawBuffers:D,useProgram:Mt,setBlending:gt,setMaterial:It,setFlipSided:xt,setCullFace:P,setLineWidth:S,setPolygonOffset:H,setScissorTest:ot,activeTexture:at,bindTexture:lt,unbindTexture:ut,compressedTexImage2D:dt,compressedTexImage3D:pt,texImage2D:At,texImage3D:bt,updateUBOMapping:Dt,uniformBlockBinding:wt,texStorage2D:Nt,texStorage3D:Ct,texSubImage2D:St,texSubImage3D:Lt,compressedTexSubImage2D:ht,compressedTexSubImage3D:zt,scissor:R,viewport:ft,reset:mt}}function Lp(s,t,e,i,n,a,o){const r=n.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,S){return g?new OffscreenCanvas(P,S):us("canvas")}function m(P,S,H,ot){let at=1;if((P.width>ot||P.height>ot)&&(at=ot/Math.max(P.width,P.height)),at<1||S===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const lt=S?ga:Math.floor,ut=lt(at*P.width),dt=lt(at*P.height);f===void 0&&(f=v(ut,dt));const pt=H?v(ut,dt):f;return pt.width=ut,pt.height=dt,pt.getContext("2d").drawImage(P,0,0,ut,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+ut+"x"+dt+")."),pt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function d(P){return Sr(P.width)&&Sr(P.height)}function u(P){return r?!1:P.wrapS!==We||P.wrapT!==We||P.minFilter!==Ae&&P.minFilter!==ze}function M(P,S){return P.generateMipmaps&&S&&P.minFilter!==Ae&&P.minFilter!==ze}function _(P){s.generateMipmap(P)}function y(P,S,H,ot,at=!1){if(r===!1)return S;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let lt=S;if(S===s.RED&&(H===s.FLOAT&&(lt=s.R32F),H===s.HALF_FLOAT&&(lt=s.R16F),H===s.UNSIGNED_BYTE&&(lt=s.R8)),S===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(lt=s.R8UI),H===s.UNSIGNED_SHORT&&(lt=s.R16UI),H===s.UNSIGNED_INT&&(lt=s.R32UI),H===s.BYTE&&(lt=s.R8I),H===s.SHORT&&(lt=s.R16I),H===s.INT&&(lt=s.R32I)),S===s.RG&&(H===s.FLOAT&&(lt=s.RG32F),H===s.HALF_FLOAT&&(lt=s.RG16F),H===s.UNSIGNED_BYTE&&(lt=s.RG8)),S===s.RGBA){const ut=at?ls:Qt.getTransfer(ot);H===s.FLOAT&&(lt=s.RGBA32F),H===s.HALF_FLOAT&&(lt=s.RGBA16F),H===s.UNSIGNED_BYTE&&(lt=ut===ee?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(lt=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(lt=s.RGB5_A1)}return(lt===s.R16F||lt===s.R32F||lt===s.RG16F||lt===s.RG32F||lt===s.RGBA16F||lt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function E(P,S,H){return M(P,H)===!0||P.isFramebufferTexture&&P.minFilter!==Ae&&P.minFilter!==ze?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function x(P){return P===Ae||P===qa||P===Ps?s.NEAREST:s.LINEAR}function A(P){const S=P.target;S.removeEventListener("dispose",A),T(S),S.isVideoTexture&&h.delete(S)}function N(P){const S=P.target;S.removeEventListener("dispose",N),z(S)}function T(P){const S=i.get(P);if(S.__webglInit===void 0)return;const H=P.source,ot=p.get(H);if(ot){const at=ot[S.__cacheKey];at.usedTimes--,at.usedTimes===0&&b(P),Object.keys(ot).length===0&&p.delete(H)}i.remove(P)}function b(P){const S=i.get(P);s.deleteTexture(S.__webglTexture);const H=P.source,ot=p.get(H);delete ot[S.__cacheKey],o.memory.textures--}function z(P){const S=P.texture,H=i.get(P),ot=i.get(S);if(ot.__webglTexture!==void 0&&(s.deleteTexture(ot.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(H.__webglFramebuffer[at]))for(let lt=0;lt<H.__webglFramebuffer[at].length;lt++)s.deleteFramebuffer(H.__webglFramebuffer[at][lt]);else s.deleteFramebuffer(H.__webglFramebuffer[at]);H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer[at])}else{if(Array.isArray(H.__webglFramebuffer))for(let at=0;at<H.__webglFramebuffer.length;at++)s.deleteFramebuffer(H.__webglFramebuffer[at]);else s.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&s.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let at=0;at<H.__webglColorRenderbuffer.length;at++)H.__webglColorRenderbuffer[at]&&s.deleteRenderbuffer(H.__webglColorRenderbuffer[at]);H.__webglDepthRenderbuffer&&s.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let at=0,lt=S.length;at<lt;at++){const ut=i.get(S[at]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),o.memory.textures--),i.remove(S[at])}i.remove(S),i.remove(P)}let k=0;function q(){k=0}function w(){const P=k;return P>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+n.maxTextures),k+=1,P}function I(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function F(P,S){const H=i.get(P);if(P.isVideoTexture&&It(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const ot=P.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(H,P,S);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+S)}function V(P,S){const H=i.get(P);if(P.version>0&&H.__version!==P.version){ct(H,P,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+S)}function $(P,S){const H=i.get(P);if(P.version>0&&H.__version!==P.version){ct(H,P,S);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+S)}function K(P,S){const H=i.get(P);if(P.version>0&&H.__version!==P.version){_t(H,P,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+S)}const tt={[ua]:s.REPEAT,[We]:s.CLAMP_TO_EDGE,[fa]:s.MIRRORED_REPEAT},Q={[Ae]:s.NEAREST,[qa]:s.NEAREST_MIPMAP_NEAREST,[Ps]:s.NEAREST_MIPMAP_LINEAR,[ze]:s.LINEAR,[dc]:s.LINEAR_MIPMAP_NEAREST,[An]:s.LINEAR_MIPMAP_LINEAR},it={[xc]:s.NEVER,[wc]:s.ALWAYS,[Sc]:s.LESS,[Oo]:s.LEQUAL,[Ac]:s.EQUAL,[Cc]:s.GEQUAL,[bc]:s.GREATER,[Pc]:s.NOTEQUAL};function G(P,S,H){if(H?(s.texParameteri(P,s.TEXTURE_WRAP_S,tt[S.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,tt[S.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,tt[S.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Q[S.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Q[S.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==We||S.wrapT!==We)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,x(S.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,x(S.minFilter)),S.minFilter!==Ae&&S.minFilter!==ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,it[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ot=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===Ae||S.minFilter!==Ps&&S.minFilter!==An||S.type===pi&&t.has("OES_texture_float_linear")===!1||r===!1&&S.type===bn&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(s.texParameterf(P,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function et(P,S){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",A));const ot=S.source;let at=p.get(ot);at===void 0&&(at={},p.set(ot,at));const lt=I(S);if(lt!==P.__cacheKey){at[lt]===void 0&&(at[lt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),at[lt].usedTimes++;const ut=at[P.__cacheKey];ut!==void 0&&(at[P.__cacheKey].usedTimes--,ut.usedTimes===0&&b(S)),P.__cacheKey=lt,P.__webglTexture=at[lt].texture}return H}function ct(P,S,H){let ot=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ot=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ot=s.TEXTURE_3D);const at=et(P,S),lt=S.source;e.bindTexture(ot,P.__webglTexture,s.TEXTURE0+H);const ut=i.get(lt);if(lt.version!==ut.__version||at===!0){e.activeTexture(s.TEXTURE0+H);const dt=Qt.getPrimaries(Qt.workingColorSpace),pt=S.colorSpace===Ge?null:Qt.getPrimaries(S.colorSpace),St=S.colorSpace===Ge||dt===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Lt=u(S)&&d(S.image)===!1;let ht=m(S.image,Lt,!1,n.maxTextureSize);ht=xt(S,ht);const zt=d(ht)||r,Nt=a.convert(S.format,S.colorSpace);let Ct=a.convert(S.type),At=y(S.internalFormat,Nt,Ct,S.colorSpace,S.isVideoTexture);G(ot,S,zt);let bt;const R=S.mipmaps,ft=r&&S.isVideoTexture!==!0&&At!==Lo,Dt=ut.__version===void 0||at===!0,wt=E(S,ht,zt);if(S.isDepthTexture)At=s.DEPTH_COMPONENT,r?S.type===pi?At=s.DEPTH_COMPONENT32F:S.type===fi?At=s.DEPTH_COMPONENT24:S.type===wi?At=s.DEPTH24_STENCIL8:At=s.DEPTH_COMPONENT16:S.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ri&&At===s.DEPTH_COMPONENT&&S.type!==xa&&S.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=fi,Ct=a.convert(S.type)),S.format===dn&&At===s.DEPTH_COMPONENT&&(At=s.DEPTH_STENCIL,S.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=wi,Ct=a.convert(S.type))),Dt&&(ft?e.texStorage2D(s.TEXTURE_2D,1,At,ht.width,ht.height):e.texImage2D(s.TEXTURE_2D,0,At,ht.width,ht.height,0,Nt,Ct,null));else if(S.isDataTexture)if(R.length>0&&zt){ft&&Dt&&e.texStorage2D(s.TEXTURE_2D,wt,At,R[0].width,R[0].height);for(let mt=0,U=R.length;mt<U;mt++)bt=R[mt],ft?e.texSubImage2D(s.TEXTURE_2D,mt,0,0,bt.width,bt.height,Nt,Ct,bt.data):e.texImage2D(s.TEXTURE_2D,mt,At,bt.width,bt.height,0,Nt,Ct,bt.data);S.generateMipmaps=!1}else ft?(Dt&&e.texStorage2D(s.TEXTURE_2D,wt,At,ht.width,ht.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht.width,ht.height,Nt,Ct,ht.data)):e.texImage2D(s.TEXTURE_2D,0,At,ht.width,ht.height,0,Nt,Ct,ht.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ft&&Dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,wt,At,R[0].width,R[0].height,ht.depth);for(let mt=0,U=R.length;mt<U;mt++)bt=R[mt],S.format!==Ye?Nt!==null?ft?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,0,bt.width,bt.height,ht.depth,Nt,bt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,mt,At,bt.width,bt.height,ht.depth,0,bt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?e.texSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,0,bt.width,bt.height,ht.depth,Nt,Ct,bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,mt,At,bt.width,bt.height,ht.depth,0,Nt,Ct,bt.data)}else{ft&&Dt&&e.texStorage2D(s.TEXTURE_2D,wt,At,R[0].width,R[0].height);for(let mt=0,U=R.length;mt<U;mt++)bt=R[mt],S.format!==Ye?Nt!==null?ft?e.compressedTexSubImage2D(s.TEXTURE_2D,mt,0,0,bt.width,bt.height,Nt,bt.data):e.compressedTexImage2D(s.TEXTURE_2D,mt,At,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?e.texSubImage2D(s.TEXTURE_2D,mt,0,0,bt.width,bt.height,Nt,Ct,bt.data):e.texImage2D(s.TEXTURE_2D,mt,At,bt.width,bt.height,0,Nt,Ct,bt.data)}else if(S.isDataArrayTexture)ft?(Dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,wt,At,ht.width,ht.height,ht.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Nt,Ct,ht.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,At,ht.width,ht.height,ht.depth,0,Nt,Ct,ht.data);else if(S.isData3DTexture)ft?(Dt&&e.texStorage3D(s.TEXTURE_3D,wt,At,ht.width,ht.height,ht.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Nt,Ct,ht.data)):e.texImage3D(s.TEXTURE_3D,0,At,ht.width,ht.height,ht.depth,0,Nt,Ct,ht.data);else if(S.isFramebufferTexture){if(Dt)if(ft)e.texStorage2D(s.TEXTURE_2D,wt,At,ht.width,ht.height);else{let mt=ht.width,U=ht.height;for(let yt=0;yt<wt;yt++)e.texImage2D(s.TEXTURE_2D,yt,At,mt,U,0,Nt,Ct,null),mt>>=1,U>>=1}}else if(R.length>0&&zt){ft&&Dt&&e.texStorage2D(s.TEXTURE_2D,wt,At,R[0].width,R[0].height);for(let mt=0,U=R.length;mt<U;mt++)bt=R[mt],ft?e.texSubImage2D(s.TEXTURE_2D,mt,0,0,Nt,Ct,bt):e.texImage2D(s.TEXTURE_2D,mt,At,Nt,Ct,bt);S.generateMipmaps=!1}else ft?(Dt&&e.texStorage2D(s.TEXTURE_2D,wt,At,ht.width,ht.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Nt,Ct,ht)):e.texImage2D(s.TEXTURE_2D,0,At,Nt,Ct,ht);M(S,zt)&&_(ot),ut.__version=lt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function _t(P,S,H){if(S.image.length!==6)return;const ot=et(P,S),at=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+H);const lt=i.get(at);if(at.version!==lt.__version||ot===!0){e.activeTexture(s.TEXTURE0+H);const ut=Qt.getPrimaries(Qt.workingColorSpace),dt=S.colorSpace===Ge?null:Qt.getPrimaries(S.colorSpace),pt=S.colorSpace===Ge||ut===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const St=S.isCompressedTexture||S.image[0].isCompressedTexture,Lt=S.image[0]&&S.image[0].isDataTexture,ht=[];for(let mt=0;mt<6;mt++)!St&&!Lt?ht[mt]=m(S.image[mt],!1,!0,n.maxCubemapSize):ht[mt]=Lt?S.image[mt].image:S.image[mt],ht[mt]=xt(S,ht[mt]);const zt=ht[0],Nt=d(zt)||r,Ct=a.convert(S.format,S.colorSpace),At=a.convert(S.type),bt=y(S.internalFormat,Ct,At,S.colorSpace),R=r&&S.isVideoTexture!==!0,ft=lt.__version===void 0||ot===!0;let Dt=E(S,zt,Nt);G(s.TEXTURE_CUBE_MAP,S,Nt);let wt;if(St){R&&ft&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Dt,bt,zt.width,zt.height);for(let mt=0;mt<6;mt++){wt=ht[mt].mipmaps;for(let U=0;U<wt.length;U++){const yt=wt[U];S.format!==Ye?Ct!==null?R?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,U,0,0,yt.width,yt.height,Ct,yt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,U,bt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,U,0,0,yt.width,yt.height,Ct,At,yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,U,bt,yt.width,yt.height,0,Ct,At,yt.data)}}}else{wt=S.mipmaps,R&&ft&&(wt.length>0&&Dt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Dt,bt,ht[0].width,ht[0].height));for(let mt=0;mt<6;mt++)if(Lt){R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,ht[mt].width,ht[mt].height,Ct,At,ht[mt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,bt,ht[mt].width,ht[mt].height,0,Ct,At,ht[mt].data);for(let U=0;U<wt.length;U++){const Pt=wt[U].image[mt].image;R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,U+1,0,0,Pt.width,Pt.height,Ct,At,Pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,U+1,bt,Pt.width,Pt.height,0,Ct,At,Pt.data)}}else{R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Ct,At,ht[mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,bt,Ct,At,ht[mt]);for(let U=0;U<wt.length;U++){const yt=wt[U];R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,U+1,0,0,Ct,At,yt.image[mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,U+1,bt,Ct,At,yt.image[mt])}}}M(S,Nt)&&_(s.TEXTURE_CUBE_MAP),lt.__version=at.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function L(P,S,H,ot,at,lt){const ut=a.convert(H.format,H.colorSpace),dt=a.convert(H.type),pt=y(H.internalFormat,ut,dt,H.colorSpace);if(!i.get(S).__hasExternalTextures){const Lt=Math.max(1,S.width>>lt),ht=Math.max(1,S.height>>lt);at===s.TEXTURE_3D||at===s.TEXTURE_2D_ARRAY?e.texImage3D(at,lt,pt,Lt,ht,S.depth,0,ut,dt,null):e.texImage2D(at,lt,pt,Lt,ht,0,ut,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),gt(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ot,at,i.get(H).__webglTexture,0,Tt(S)):(at===s.TEXTURE_2D||at>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ot,at,i.get(H).__webglTexture,lt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function B(P,S,H){if(s.bindRenderbuffer(s.RENDERBUFFER,P),S.depthBuffer&&!S.stencilBuffer){let ot=r===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(H||gt(S)){const at=S.depthTexture;at&&at.isDepthTexture&&(at.type===pi?ot=s.DEPTH_COMPONENT32F:at.type===fi&&(ot=s.DEPTH_COMPONENT24));const lt=Tt(S);gt(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,ot,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,ot,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,ot,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(S.depthBuffer&&S.stencilBuffer){const ot=Tt(S);H&&gt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,s.DEPTH24_STENCIL8,S.width,S.height):gt(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const ot=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let at=0;at<ot.length;at++){const lt=ot[at],ut=a.convert(lt.format,lt.colorSpace),dt=a.convert(lt.type),pt=y(lt.internalFormat,ut,dt,lt.colorSpace),St=Tt(S);H&&gt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,St,pt,S.width,S.height):gt(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St,pt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,pt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Z(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),F(S.depthTexture,0);const ot=i.get(S.depthTexture).__webglTexture,at=Tt(S);if(S.depthTexture.format===Ri)gt(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0);else if(S.depthTexture.format===dn)gt(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function W(P){const S=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Z(S.__webglFramebuffer,P)}else if(H){S.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ot]),S.__webglDepthbuffer[ot]=s.createRenderbuffer(),B(S.__webglDepthbuffer[ot],P,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),B(S.__webglDepthbuffer,P,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Y(P,S,H){const ot=i.get(P);S!==void 0&&L(ot.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&W(P)}function D(P){const S=P.texture,H=i.get(P),ot=i.get(S);P.addEventListener("dispose",N),P.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture()),ot.__version=S.version,o.memory.textures++);const at=P.isWebGLCubeRenderTarget===!0,lt=P.isWebGLMultipleRenderTargets===!0,ut=d(P)||r;if(at){H.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(r&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[dt]=[];for(let pt=0;pt<S.mipmaps.length;pt++)H.__webglFramebuffer[dt][pt]=s.createFramebuffer()}else H.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(r&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let dt=0;dt<S.mipmaps.length;dt++)H.__webglFramebuffer[dt]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(lt)if(n.drawBuffers){const dt=P.texture;for(let pt=0,St=dt.length;pt<St;pt++){const Lt=i.get(dt[pt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&P.samples>0&&gt(P)===!1){const dt=lt?S:[S];H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let pt=0;pt<dt.length;pt++){const St=dt[pt];H.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[pt]);const Lt=a.convert(St.format,St.colorSpace),ht=a.convert(St.type),zt=y(St.internalFormat,Lt,ht,St.colorSpace,P.isXRRenderTarget===!0),Nt=Tt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,zt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,H.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),B(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(at){e.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture),G(s.TEXTURE_CUBE_MAP,S,ut);for(let dt=0;dt<6;dt++)if(r&&S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)L(H.__webglFramebuffer[dt][pt],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,pt);else L(H.__webglFramebuffer[dt],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);M(S,ut)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){const dt=P.texture;for(let pt=0,St=dt.length;pt<St;pt++){const Lt=dt[pt],ht=i.get(Lt);e.bindTexture(s.TEXTURE_2D,ht.__webglTexture),G(s.TEXTURE_2D,Lt,ut),L(H.__webglFramebuffer,P,Lt,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),M(Lt,ut)&&_(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(r?dt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,ot.__webglTexture),G(dt,S,ut),r&&S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)L(H.__webglFramebuffer[pt],P,S,s.COLOR_ATTACHMENT0,dt,pt);else L(H.__webglFramebuffer,P,S,s.COLOR_ATTACHMENT0,dt,0);M(S,ut)&&_(dt),e.unbindTexture()}P.depthBuffer&&W(P)}function Mt(P){const S=d(P)||r,H=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ot=0,at=H.length;ot<at;ot++){const lt=H[ot];if(M(lt,S)){const ut=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,dt=i.get(lt).__webglTexture;e.bindTexture(ut,dt),_(ut),e.unbindTexture()}}}function vt(P){if(r&&P.samples>0&&gt(P)===!1){const S=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],H=P.width,ot=P.height;let at=s.COLOR_BUFFER_BIT;const lt=[],ut=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=i.get(P),pt=P.isWebGLMultipleRenderTargets===!0;if(pt)for(let St=0;St<S.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let St=0;St<S.length;St++){lt.push(s.COLOR_ATTACHMENT0+St),P.depthBuffer&&lt.push(ut);const Lt=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(Lt===!1&&(P.depthBuffer&&(at|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(at|=s.STENCIL_BUFFER_BIT)),pt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,dt.__webglColorRenderbuffer[St]),Lt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ut]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ut])),pt){const ht=i.get(S[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ht,0)}s.blitFramebuffer(0,0,H,ot,0,0,H,ot,at,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let St=0;St<S.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,dt.__webglColorRenderbuffer[St]);const Lt=i.get(S[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,Lt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}}function Tt(P){return Math.min(n.maxSamples,P.samples)}function gt(P){const S=i.get(P);return r&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function It(P){const S=o.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function xt(P,S){const H=P.colorSpace,ot=P.format,at=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===pa||H!==ai&&H!==Ge&&(Qt.getTransfer(H)===ee?r===!1?t.has("EXT_sRGB")===!0&&ot===Ye?(P.format=pa,P.minFilter=ze,P.generateMipmaps=!1):S=Uo.sRGBToLinear(S):(ot!==Ye||at!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}this.allocateTextureUnit=w,this.resetTextureUnits=q,this.setTexture2D=F,this.setTexture2DArray=V,this.setTexture3D=$,this.setTextureCube=K,this.rebindTextures=Y,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=L,this.useMultisampledRTT=gt}function Ip(s,t,e){const i=e.isWebGL2;function n(a,o=Ge){let r;const c=Qt.getTransfer(o);if(a===vi)return s.UNSIGNED_BYTE;if(a===bo)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Po)return s.UNSIGNED_SHORT_5_5_5_1;if(a===uc)return s.BYTE;if(a===fc)return s.SHORT;if(a===xa)return s.UNSIGNED_SHORT;if(a===Ao)return s.INT;if(a===fi)return s.UNSIGNED_INT;if(a===pi)return s.FLOAT;if(a===bn)return i?s.HALF_FLOAT:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(a===pc)return s.ALPHA;if(a===Ye)return s.RGBA;if(a===mc)return s.LUMINANCE;if(a===gc)return s.LUMINANCE_ALPHA;if(a===Ri)return s.DEPTH_COMPONENT;if(a===dn)return s.DEPTH_STENCIL;if(a===pa)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(a===vc)return s.RED;if(a===Co)return s.RED_INTEGER;if(a===_c)return s.RG;if(a===wo)return s.RG_INTEGER;if(a===Ro)return s.RGBA_INTEGER;if(a===Cs||a===ws||a===Rs||a===Ls)if(c===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(a===Cs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(a===Cs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Rs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ls)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ja||a===Za||a===Ja||a===Qa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(a===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Lo)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===tr||a===er)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(a===tr)return c===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(a===er)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===ir||a===nr||a===sr||a===ar||a===rr||a===or||a===lr||a===cr||a===hr||a===dr||a===ur||a===fr||a===pr||a===mr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(a===ir)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===nr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===sr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ar)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===rr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===or)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===lr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===cr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===hr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===dr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ur)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===fr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===pr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===mr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Is||a===gr||a===vr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(a===Is)return c===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===gr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===vr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===yc||a===_r||a===yr||a===Mr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(a===Is)return r.COMPRESSED_RED_RGTC1_EXT;if(a===_r)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===yr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Mr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===wi?i?s.UNSIGNED_INT_24_8:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:n}}class Dp extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Mn extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Op={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,a=null,o=null;const r=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const m of t.hand.values()){const d=e.getJointPose(m,i),u=this._getHandJoint(l,m);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=h.position.distanceTo(f.position),g=.02,v=.005;l.inputState.pinching&&p>g+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=g-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(r.matrix.fromArray(n.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,n.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(n.linearVelocity)):r.hasLinearVelocity=!1,n.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(n.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Op)))}return r!==null&&(r.visible=n!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Mn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Np extends Ni{constructor(t,e){super();const i=this;let n=null,a=1,o=null,r="local-floor",c=1,l=null,h=null,f=null,p=null,g=null,v=null;const m=e.getContextAttributes();let d=null,u=null;const M=[],_=[],y=new kt;let E=null;const x=new Fe;x.layers.enable(1),x.viewport=new me;const A=new Fe;A.layers.enable(2),A.viewport=new me;const N=[x,A],T=new Dp;T.layers.enable(1),T.layers.enable(2);let b=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let et=M[G];return et===void 0&&(et=new ia,M[G]=et),et.getTargetRaySpace()},this.getControllerGrip=function(G){let et=M[G];return et===void 0&&(et=new ia,M[G]=et),et.getGripSpace()},this.getHand=function(G){let et=M[G];return et===void 0&&(et=new ia,M[G]=et),et.getHandSpace()};function k(G){const et=_.indexOf(G.inputSource);if(et===-1)return;const ct=M[et];ct!==void 0&&(ct.update(G.inputSource,G.frame,l||o),ct.dispatchEvent({type:G.type,data:G.inputSource}))}function q(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",w);for(let G=0;G<M.length;G++){const et=_[G];et!==null&&(_[G]=null,M[G].disconnect(et))}b=null,z=null,t.setRenderTarget(d),g=null,p=null,f=null,n=null,u=null,it.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return n},this.setSession=async function(G){if(n=G,n!==null){if(d=t.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",q),n.addEventListener("inputsourceschange",w),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(y),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const et={antialias:n.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(n,e,et),n.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),u=new Ii(g.framebufferWidth,g.framebufferHeight,{format:Ye,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,ct=null,_t=null;m.depth&&(_t=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?dn:Ri,ct=m.stencil?wi:fi);const L={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:a};f=new XRWebGLBinding(n,e),p=f.createProjectionLayer(L),n.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),u=new Ii(p.textureWidth,p.textureHeight,{format:Ye,type:vi,depthTexture:new $o(p.textureWidth,p.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const B=t.properties.get(u);B.__ignoreDepthValues=p.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await n.requestReferenceSpace(r),it.setContext(n),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function w(G){for(let et=0;et<G.removed.length;et++){const ct=G.removed[et],_t=_.indexOf(ct);_t>=0&&(_[_t]=null,M[_t].disconnect(ct))}for(let et=0;et<G.added.length;et++){const ct=G.added[et];let _t=_.indexOf(ct);if(_t===-1){for(let B=0;B<M.length;B++)if(B>=_.length){_.push(ct),_t=B;break}else if(_[B]===null){_[B]=ct,_t=B;break}if(_t===-1)break}const L=M[_t];L&&L.connect(ct)}}const I=new j,F=new j;function V(G,et,ct){I.setFromMatrixPosition(et.matrixWorld),F.setFromMatrixPosition(ct.matrixWorld);const _t=I.distanceTo(F),L=et.projectionMatrix.elements,B=ct.projectionMatrix.elements,Z=L[14]/(L[10]-1),W=L[14]/(L[10]+1),Y=(L[9]+1)/L[5],D=(L[9]-1)/L[5],Mt=(L[8]-1)/L[0],vt=(B[8]+1)/B[0],Tt=Z*Mt,gt=Z*vt,It=_t/(-Mt+vt),xt=It*-Mt;et.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(xt),G.translateZ(It),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const P=Z+It,S=W+It,H=Tt-xt,ot=gt+(_t-xt),at=Y*W/S*P,lt=D*W/S*P;G.projectionMatrix.makePerspective(H,ot,at,lt,P,S),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function $(G,et){et===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(et.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(n===null)return;T.near=A.near=x.near=G.near,T.far=A.far=x.far=G.far,(b!==T.near||z!==T.far)&&(n.updateRenderState({depthNear:T.near,depthFar:T.far}),b=T.near,z=T.far);const et=G.parent,ct=T.cameras;$(T,et);for(let _t=0;_t<ct.length;_t++)$(ct[_t],et);ct.length===2?V(T,x,A):T.projectionMatrix.copy(x.projectionMatrix),K(G,T,et)};function K(G,et,ct){ct===null?G.matrix.copy(et.matrixWorld):(G.matrix.copy(ct.matrixWorld),G.matrix.invert(),G.matrix.multiply(et.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(et.projectionMatrix),G.projectionMatrixInverse.copy(et.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ma*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(p===null&&g===null))return c},this.setFoveation=function(G){c=G,p!==null&&(p.fixedFoveation=G),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=G)};let tt=null;function Q(G,et){if(h=et.getViewerPose(l||o),v=et,h!==null){const ct=h.views;g!==null&&(t.setRenderTargetFramebuffer(u,g.framebuffer),t.setRenderTarget(u));let _t=!1;ct.length!==T.cameras.length&&(T.cameras.length=0,_t=!0);for(let L=0;L<ct.length;L++){const B=ct[L];let Z=null;if(g!==null)Z=g.getViewport(B);else{const Y=f.getViewSubImage(p,B);Z=Y.viewport,L===0&&(t.setRenderTargetTextures(u,Y.colorTexture,p.ignoreDepthValues?void 0:Y.depthStencilTexture),t.setRenderTarget(u))}let W=N[L];W===void 0&&(W=new Fe,W.layers.enable(L),W.viewport=new me,N[L]=W),W.matrix.fromArray(B.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(B.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(Z.x,Z.y,Z.width,Z.height),L===0&&(T.matrix.copy(W.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),_t===!0&&T.cameras.push(W)}}for(let ct=0;ct<M.length;ct++){const _t=_[ct],L=M[ct];_t!==null&&L!==void 0&&L.update(_t,et,l||o)}tt&&tt(G,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),v=null}const it=new Yo;it.setAnimationLoop(Q),this.setAnimationLoop=function(G){tt=G},this.dispose=function(){}}}function Up(s,t){function e(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function i(d,u){u.color.getRGB(d.fogColor.value,Ho(s)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function n(d,u,M,_,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(d,u):u.isMeshToonMaterial?(a(d,u),f(d,u)):u.isMeshPhongMaterial?(a(d,u),h(d,u)):u.isMeshStandardMaterial?(a(d,u),p(d,u),u.isMeshPhysicalMaterial&&g(d,u,y)):u.isMeshMatcapMaterial?(a(d,u),v(d,u)):u.isMeshDepthMaterial?a(d,u):u.isMeshDistanceMaterial?(a(d,u),m(d,u)):u.isMeshNormalMaterial?a(d,u):u.isLineBasicMaterial?(o(d,u),u.isLineDashedMaterial&&r(d,u)):u.isPointsMaterial?c(d,u,M,_):u.isSpriteMaterial?l(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,e(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===Re&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,e(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===Re&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,e(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,e(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);const M=t.get(u).envMap;if(M&&(d.envMap.value=M,d.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap){d.lightMap.value=u.lightMap;const _=s._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=u.lightMapIntensity*_,e(u.lightMap,d.lightMapTransform)}u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,d.aoMapTransform))}function o(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform))}function r(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function c(d,u,M,_){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*M,d.scale.value=_*.5,u.map&&(d.map.value=u.map,e(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function l(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function h(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function f(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function p(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,d.roughnessMapTransform)),t.get(u).envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function g(d,u,M){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Re&&d.clearcoatNormalScale.value.negate())),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=M.texture,d.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,d.specularIntensityMapTransform))}function v(d,u){u.matcap&&(d.matcap.value=u.matcap)}function m(d,u){const M=t.get(u).light;d.referencePosition.value.setFromMatrixPosition(M.matrixWorld),d.nearDistance.value=M.shadow.camera.near,d.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function zp(s,t,e,i){let n={},a={},o=[];const r=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,_){const y=_.program;i.uniformBlockBinding(M,y)}function l(M,_){let y=n[M.id];y===void 0&&(v(M),y=h(M),n[M.id]=y,M.addEventListener("dispose",d));const E=_.program;i.updateUBOMapping(M,E);const x=t.render.frame;a[M.id]!==x&&(p(M),a[M.id]=x)}function h(M){const _=f();M.__bindingPointIndex=_;const y=s.createBuffer(),E=M.__size,x=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,E,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function f(){for(let M=0;M<r;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){const _=n[M.id],y=M.uniforms,E=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let x=0,A=y.length;x<A;x++){const N=Array.isArray(y[x])?y[x]:[y[x]];for(let T=0,b=N.length;T<b;T++){const z=N[T];if(g(z,x,T,E)===!0){const k=z.__offset,q=Array.isArray(z.value)?z.value:[z.value];let w=0;for(let I=0;I<q.length;I++){const F=q[I],V=m(F);typeof F=="number"||typeof F=="boolean"?(z.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,k+w,z.__data)):F.isMatrix3?(z.__data[0]=F.elements[0],z.__data[1]=F.elements[1],z.__data[2]=F.elements[2],z.__data[3]=0,z.__data[4]=F.elements[3],z.__data[5]=F.elements[4],z.__data[6]=F.elements[5],z.__data[7]=0,z.__data[8]=F.elements[6],z.__data[9]=F.elements[7],z.__data[10]=F.elements[8],z.__data[11]=0):(F.toArray(z.__data,w),w+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(M,_,y,E){const x=M.value,A=_+"_"+y;if(E[A]===void 0)return typeof x=="number"||typeof x=="boolean"?E[A]=x:E[A]=x.clone(),!0;{const N=E[A];if(typeof x=="number"||typeof x=="boolean"){if(N!==x)return E[A]=x,!0}else if(N.equals(x)===!1)return N.copy(x),!0}return!1}function v(M){const _=M.uniforms;let y=0;const E=16;for(let A=0,N=_.length;A<N;A++){const T=Array.isArray(_[A])?_[A]:[_[A]];for(let b=0,z=T.length;b<z;b++){const k=T[b],q=Array.isArray(k.value)?k.value:[k.value];for(let w=0,I=q.length;w<I;w++){const F=q[w],V=m(F),$=y%E;$!==0&&E-$<V.boundary&&(y+=E-$),k.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=V.storage}}}const x=y%E;return x>0&&(y+=E-x),M.__size=y,M.__cache={},this}function m(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function d(M){const _=M.target;_.removeEventListener("dispose",d);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(n[_.id]),delete n[_.id],delete a[_.id]}function u(){for(const M in n)s.deleteBuffer(n[M]);o=[],n={},a={}}return{bind:c,update:l,dispose:u}}class Qo{constructor(t={}){const{canvas:e=Ic(),context:i=null,depth:n=!0,stencil:a=!0,alpha:o=!1,antialias:r=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const u=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this._useLegacyLights=!1,this.toneMapping=gi,this.toneMappingExposure=1;const _=this;let y=!1,E=0,x=0,A=null,N=-1,T=null;const b=new me,z=new me;let k=null;const q=new Jt(0);let w=0,I=e.width,F=e.height,V=1,$=null,K=null;const tt=new me(0,0,I,F),Q=new me(0,0,I,F);let it=!1;const G=new Ca;let et=!1,ct=!1,_t=null;const L=new he,B=new kt,Z=new j,W={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Y(){return A===null?V:1}let D=i;function Mt(C,J){for(let st=0;st<C.length;st++){const rt=C[st],nt=e.getContext(rt,J);if(nt!==null)return nt}return null}try{const C={alpha:!0,depth:n,stencil:a,antialias:r,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ta}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",yt,!1),D===null){const J=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&J.shift(),D=Mt(J,C),D===null)throw Mt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let vt,Tt,gt,It,xt,P,S,H,ot,at,lt,ut,dt,pt,St,Lt,ht,zt,Nt,Ct,At,bt,R,ft;function Dt(){vt=new Xu(D),Tt=new Bu(D,vt,t),vt.init(Tt),bt=new Ip(D,vt,Tt),gt=new Rp(D,vt,Tt),It=new qu(D),xt=new gp,P=new Lp(D,vt,gt,xt,Tt,bt,It),S=new Hu(_),H=new Yu(_),ot=new nh(D,Tt),R=new Fu(D,vt,ot,Tt),at=new $u(D,ot,It,R),lt=new Qu(D,at,ot,It),Nt=new Ju(D,Tt,P),Lt=new ku(xt),ut=new mp(_,S,H,vt,Tt,R,Lt),dt=new Up(_,xt),pt=new _p,St=new Sp(vt,Tt),zt=new zu(_,S,H,gt,lt,p,c),ht=new wp(_,lt,Tt),ft=new zp(D,It,Tt,gt),Ct=new Gu(D,vt,It,Tt),At=new Ku(D,vt,It,Tt),It.programs=ut.programs,_.capabilities=Tt,_.extensions=vt,_.properties=xt,_.renderLists=pt,_.shadowMap=ht,_.state=gt,_.info=It}Dt();const wt=new Np(_,D);this.xr=wt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=vt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=vt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(I,F,!1))},this.getSize=function(C){return C.set(I,F)},this.setSize=function(C,J,st=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,F=J,e.width=Math.floor(C*V),e.height=Math.floor(J*V),st===!0&&(e.style.width=C+"px",e.style.height=J+"px"),this.setViewport(0,0,C,J)},this.getDrawingBufferSize=function(C){return C.set(I*V,F*V).floor()},this.setDrawingBufferSize=function(C,J,st){I=C,F=J,V=st,e.width=Math.floor(C*st),e.height=Math.floor(J*st),this.setViewport(0,0,C,J)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(tt)},this.setViewport=function(C,J,st,rt){C.isVector4?tt.set(C.x,C.y,C.z,C.w):tt.set(C,J,st,rt),gt.viewport(b.copy(tt).multiplyScalar(V).floor())},this.getScissor=function(C){return C.copy(Q)},this.setScissor=function(C,J,st,rt){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,J,st,rt),gt.scissor(z.copy(Q).multiplyScalar(V).floor())},this.getScissorTest=function(){return it},this.setScissorTest=function(C){gt.setScissorTest(it=C)},this.setOpaqueSort=function(C){$=C},this.setTransparentSort=function(C){K=C},this.getClearColor=function(C){return C.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(C=!0,J=!0,st=!0){let rt=0;if(C){let nt=!1;if(A!==null){const Rt=A.texture.format;nt=Rt===Ro||Rt===wo||Rt===Co}if(nt){const Rt=A.texture.type,Ut=Rt===vi||Rt===fi||Rt===xa||Rt===wi||Rt===bo||Rt===Po,Bt=zt.getClearColor(),Ht=zt.getClearAlpha(),Xt=Bt.r,Vt=Bt.g,Wt=Bt.b;Ut?(g[0]=Xt,g[1]=Vt,g[2]=Wt,g[3]=Ht,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Xt,v[1]=Vt,v[2]=Wt,v[3]=Ht,D.clearBufferiv(D.COLOR,0,v))}else rt|=D.COLOR_BUFFER_BIT}J&&(rt|=D.DEPTH_BUFFER_BIT),st&&(rt|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),pt.dispose(),St.dispose(),xt.dispose(),S.dispose(),H.dispose(),lt.dispose(),R.dispose(),ft.dispose(),ut.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",re),wt.removeEventListener("sessionend",Zt),_t&&(_t.dispose(),_t=null),le.stop()};function mt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=It.autoReset,J=ht.enabled,st=ht.autoUpdate,rt=ht.needsUpdate,nt=ht.type;Dt(),It.autoReset=C,ht.enabled=J,ht.autoUpdate=st,ht.needsUpdate=rt,ht.type=nt}function yt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Pt(C){const J=C.target;J.removeEventListener("dispose",Pt),Gt(J)}function Gt(C){Ft(C),xt.remove(C)}function Ft(C){const J=xt.get(C).programs;J!==void 0&&(J.forEach(function(st){ut.releaseProgram(st)}),C.isShaderMaterial&&ut.releaseShaderCache(C))}this.renderBufferDirect=function(C,J,st,rt,nt,Rt){J===null&&(J=W);const Ut=nt.isMesh&&nt.matrixWorld.determinant()<0,Bt=ol(C,J,st,rt,nt);gt.setMaterial(rt,Ut);let Ht=st.index,Xt=1;if(rt.wireframe===!0){if(Ht=at.getWireframeAttribute(st),Ht===void 0)return;Xt=2}const Vt=st.drawRange,Wt=st.attributes.position;let oe=Vt.start*Xt,Le=(Vt.start+Vt.count)*Xt;Rt!==null&&(oe=Math.max(oe,Rt.start*Xt),Le=Math.min(Le,(Rt.start+Rt.count)*Xt)),Ht!==null?(oe=Math.max(oe,0),Le=Math.min(Le,Ht.count)):Wt!=null&&(oe=Math.max(oe,0),Le=Math.min(Le,Wt.count));const fe=Le-oe;if(fe<0||fe===1/0)return;R.setup(nt,rt,Bt,st,Ht);let je,ne=Ct;if(Ht!==null&&(je=ot.get(Ht),ne=At,ne.setIndex(je)),nt.isMesh)rt.wireframe===!0?(gt.setLineWidth(rt.wireframeLinewidth*Y()),ne.setMode(D.LINES)):ne.setMode(D.TRIANGLES);else if(nt.isLine){let $t=rt.linewidth;$t===void 0&&($t=1),gt.setLineWidth($t*Y()),nt.isLineSegments?ne.setMode(D.LINES):nt.isLineLoop?ne.setMode(D.LINE_LOOP):ne.setMode(D.LINE_STRIP)}else nt.isPoints?ne.setMode(D.POINTS):nt.isSprite&&ne.setMode(D.TRIANGLES);if(nt.isBatchedMesh)ne.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else if(nt.isInstancedMesh)ne.renderInstances(oe,fe,nt.count);else if(st.isInstancedBufferGeometry){const $t=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Es=Math.min(st.instanceCount,$t);ne.renderInstances(oe,fe,Es)}else ne.render(oe,fe)};function qt(C,J,st){C.transparent===!0&&C.side===ni&&C.forceSinglePass===!1?(C.side=Re,C.needsUpdate=!0,In(C,J,st),C.side=_i,C.needsUpdate=!0,In(C,J,st),C.side=ni):In(C,J,st)}this.compile=function(C,J,st=null){st===null&&(st=C),d=St.get(st),d.init(),M.push(d),st.traverseVisible(function(nt){nt.isLight&&nt.layers.test(J.layers)&&(d.pushLight(nt),nt.castShadow&&d.pushShadow(nt))}),C!==st&&C.traverseVisible(function(nt){nt.isLight&&nt.layers.test(J.layers)&&(d.pushLight(nt),nt.castShadow&&d.pushShadow(nt))}),d.setupLights(_._useLegacyLights);const rt=new Set;return C.traverse(function(nt){const Rt=nt.material;if(Rt)if(Array.isArray(Rt))for(let Ut=0;Ut<Rt.length;Ut++){const Bt=Rt[Ut];qt(Bt,st,nt),rt.add(Bt)}else qt(Rt,st,nt),rt.add(Rt)}),M.pop(),d=null,rt},this.compileAsync=function(C,J,st=null){const rt=this.compile(C,J,st);return new Promise(nt=>{function Rt(){if(rt.forEach(function(Ut){xt.get(Ut).currentProgram.isReady()&&rt.delete(Ut)}),rt.size===0){nt(C);return}setTimeout(Rt,10)}vt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let jt=null;function se(C){jt&&jt(C)}function re(){le.stop()}function Zt(){le.start()}const le=new Yo;le.setAnimationLoop(se),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(C){jt=C,wt.setAnimationLoop(C),C===null?le.stop():le.start()},wt.addEventListener("sessionstart",re),wt.addEventListener("sessionend",Zt),this.render=function(C,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(J),J=wt.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,J,A),d=St.get(C,M.length),d.init(),M.push(d),L.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),G.setFromProjectionMatrix(L),ct=this.localClippingEnabled,et=Lt.init(this.clippingPlanes,ct),m=pt.get(C,u.length),m.init(),u.push(m),Xe(C,J,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort($,K),this.info.render.frame++,et===!0&&Lt.beginShadows();const st=d.state.shadowsArray;if(ht.render(st,C,J),et===!0&&Lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),zt.render(m,C),d.setupLights(_._useLegacyLights),J.isArrayCamera){const rt=J.cameras;for(let nt=0,Rt=rt.length;nt<Rt;nt++){const Ut=rt[nt];Oa(m,C,Ut,Ut.viewport)}}else Oa(m,C,J);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(_,C,J),R.resetDefaultState(),N=-1,T=null,M.pop(),M.length>0?d=M[M.length-1]:d=null,u.pop(),u.length>0?m=u[u.length-1]:m=null};function Xe(C,J,st,rt){if(C.visible===!1)return;if(C.layers.test(J.layers)){if(C.isGroup)st=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(J);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||G.intersectsSprite(C)){rt&&Z.setFromMatrixPosition(C.matrixWorld).applyMatrix4(L);const Ut=lt.update(C),Bt=C.material;Bt.visible&&m.push(C,Ut,Bt,st,Z.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||G.intersectsObject(C))){const Ut=lt.update(C),Bt=C.material;if(rt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Z.copy(C.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Z.copy(Ut.boundingSphere.center)),Z.applyMatrix4(C.matrixWorld).applyMatrix4(L)),Array.isArray(Bt)){const Ht=Ut.groups;for(let Xt=0,Vt=Ht.length;Xt<Vt;Xt++){const Wt=Ht[Xt],oe=Bt[Wt.materialIndex];oe&&oe.visible&&m.push(C,Ut,oe,st,Z.z,Wt)}}else Bt.visible&&m.push(C,Ut,Bt,st,Z.z,null)}}const Rt=C.children;for(let Ut=0,Bt=Rt.length;Ut<Bt;Ut++)Xe(Rt[Ut],J,st,rt)}function Oa(C,J,st,rt){const nt=C.opaque,Rt=C.transmissive,Ut=C.transparent;d.setupLightsView(st),et===!0&&Lt.setGlobalState(_.clippingPlanes,st),Rt.length>0&&rl(nt,Rt,J,st),rt&&gt.viewport(b.copy(rt)),nt.length>0&&Ln(nt,J,st),Rt.length>0&&Ln(Rt,J,st),Ut.length>0&&Ln(Ut,J,st),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function rl(C,J,st,rt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;const Rt=Tt.isWebGL2;_t===null&&(_t=new Ii(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")?bn:vi,minFilter:An,samples:Rt?4:0})),_.getDrawingBufferSize(B),Rt?_t.setSize(B.x,B.y):_t.setSize(ga(B.x),ga(B.y));const Ut=_.getRenderTarget();_.setRenderTarget(_t),_.getClearColor(q),w=_.getClearAlpha(),w<1&&_.setClearColor(16777215,.5),_.clear();const Bt=_.toneMapping;_.toneMapping=gi,Ln(C,st,rt),P.updateMultisampleRenderTarget(_t),P.updateRenderTargetMipmap(_t);let Ht=!1;for(let Xt=0,Vt=J.length;Xt<Vt;Xt++){const Wt=J[Xt],oe=Wt.object,Le=Wt.geometry,fe=Wt.material,je=Wt.group;if(fe.side===ni&&oe.layers.test(rt.layers)){const ne=fe.side;fe.side=Re,fe.needsUpdate=!0,Na(oe,st,rt,Le,fe,je),fe.side=ne,fe.needsUpdate=!0,Ht=!0}}Ht===!0&&(P.updateMultisampleRenderTarget(_t),P.updateRenderTargetMipmap(_t)),_.setRenderTarget(Ut),_.setClearColor(q,w),_.toneMapping=Bt}function Ln(C,J,st){const rt=J.isScene===!0?J.overrideMaterial:null;for(let nt=0,Rt=C.length;nt<Rt;nt++){const Ut=C[nt],Bt=Ut.object,Ht=Ut.geometry,Xt=rt===null?Ut.material:rt,Vt=Ut.group;Bt.layers.test(st.layers)&&Na(Bt,J,st,Ht,Xt,Vt)}}function Na(C,J,st,rt,nt,Rt){C.onBeforeRender(_,J,st,rt,nt,Rt),C.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),nt.onBeforeRender(_,J,st,rt,C,Rt),nt.transparent===!0&&nt.side===ni&&nt.forceSinglePass===!1?(nt.side=Re,nt.needsUpdate=!0,_.renderBufferDirect(st,J,rt,nt,C,Rt),nt.side=_i,nt.needsUpdate=!0,_.renderBufferDirect(st,J,rt,nt,C,Rt),nt.side=ni):_.renderBufferDirect(st,J,rt,nt,C,Rt),C.onAfterRender(_,J,st,rt,nt,Rt)}function In(C,J,st){J.isScene!==!0&&(J=W);const rt=xt.get(C),nt=d.state.lights,Rt=d.state.shadowsArray,Ut=nt.state.version,Bt=ut.getParameters(C,nt.state,Rt,J,st),Ht=ut.getProgramCacheKey(Bt);let Xt=rt.programs;rt.environment=C.isMeshStandardMaterial?J.environment:null,rt.fog=J.fog,rt.envMap=(C.isMeshStandardMaterial?H:S).get(C.envMap||rt.environment),Xt===void 0&&(C.addEventListener("dispose",Pt),Xt=new Map,rt.programs=Xt);let Vt=Xt.get(Ht);if(Vt!==void 0){if(rt.currentProgram===Vt&&rt.lightsStateVersion===Ut)return za(C,Bt),Vt}else Bt.uniforms=ut.getUniforms(C),C.onBuild(st,Bt,_),C.onBeforeCompile(Bt,_),Vt=ut.acquireProgram(Bt,Ht),Xt.set(Ht,Vt),rt.uniforms=Bt.uniforms;const Wt=rt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Wt.clippingPlanes=Lt.uniform),za(C,Bt),rt.needsLights=cl(C),rt.lightsStateVersion=Ut,rt.needsLights&&(Wt.ambientLightColor.value=nt.state.ambient,Wt.lightProbe.value=nt.state.probe,Wt.directionalLights.value=nt.state.directional,Wt.directionalLightShadows.value=nt.state.directionalShadow,Wt.spotLights.value=nt.state.spot,Wt.spotLightShadows.value=nt.state.spotShadow,Wt.rectAreaLights.value=nt.state.rectArea,Wt.ltc_1.value=nt.state.rectAreaLTC1,Wt.ltc_2.value=nt.state.rectAreaLTC2,Wt.pointLights.value=nt.state.point,Wt.pointLightShadows.value=nt.state.pointShadow,Wt.hemisphereLights.value=nt.state.hemi,Wt.directionalShadowMap.value=nt.state.directionalShadowMap,Wt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Wt.spotShadowMap.value=nt.state.spotShadowMap,Wt.spotLightMatrix.value=nt.state.spotLightMatrix,Wt.spotLightMap.value=nt.state.spotLightMap,Wt.pointShadowMap.value=nt.state.pointShadowMap,Wt.pointShadowMatrix.value=nt.state.pointShadowMatrix),rt.currentProgram=Vt,rt.uniformsList=null,Vt}function Ua(C){if(C.uniformsList===null){const J=C.currentProgram.getUniforms();C.uniformsList=as.seqWithValue(J.seq,C.uniforms)}return C.uniformsList}function za(C,J){const st=xt.get(C);st.outputColorSpace=J.outputColorSpace,st.batching=J.batching,st.instancing=J.instancing,st.instancingColor=J.instancingColor,st.skinning=J.skinning,st.morphTargets=J.morphTargets,st.morphNormals=J.morphNormals,st.morphColors=J.morphColors,st.morphTargetsCount=J.morphTargetsCount,st.numClippingPlanes=J.numClippingPlanes,st.numIntersection=J.numClipIntersection,st.vertexAlphas=J.vertexAlphas,st.vertexTangents=J.vertexTangents,st.toneMapping=J.toneMapping}function ol(C,J,st,rt,nt){J.isScene!==!0&&(J=W),P.resetTextureUnits();const Rt=J.fog,Ut=rt.isMeshStandardMaterial?J.environment:null,Bt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ai,Ht=(rt.isMeshStandardMaterial?H:S).get(rt.envMap||Ut),Xt=rt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Vt=!!st.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Wt=!!st.morphAttributes.position,oe=!!st.morphAttributes.normal,Le=!!st.morphAttributes.color;let fe=gi;rt.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(fe=_.toneMapping);const je=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ne=je!==void 0?je.length:0,$t=xt.get(rt),Es=d.state.lights;if(et===!0&&(ct===!0||C!==T)){const Ne=C===T&&rt.id===N;Lt.setState(rt,C,Ne)}let ae=!1;rt.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Es.state.version||$t.outputColorSpace!==Bt||nt.isBatchedMesh&&$t.batching===!1||!nt.isBatchedMesh&&$t.batching===!0||nt.isInstancedMesh&&$t.instancing===!1||!nt.isInstancedMesh&&$t.instancing===!0||nt.isSkinnedMesh&&$t.skinning===!1||!nt.isSkinnedMesh&&$t.skinning===!0||nt.isInstancedMesh&&$t.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&$t.instancingColor===!1&&nt.instanceColor!==null||$t.envMap!==Ht||rt.fog===!0&&$t.fog!==Rt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Lt.numPlanes||$t.numIntersection!==Lt.numIntersection)||$t.vertexAlphas!==Xt||$t.vertexTangents!==Vt||$t.morphTargets!==Wt||$t.morphNormals!==oe||$t.morphColors!==Le||$t.toneMapping!==fe||Tt.isWebGL2===!0&&$t.morphTargetsCount!==ne)&&(ae=!0):(ae=!0,$t.__version=rt.version);let yi=$t.currentProgram;ae===!0&&(yi=In(rt,J,nt));let Fa=!1,pn=!1,xs=!1;const ve=yi.getUniforms(),Mi=$t.uniforms;if(gt.useProgram(yi.program)&&(Fa=!0,pn=!0,xs=!0),rt.id!==N&&(N=rt.id,pn=!0),Fa||T!==C){ve.setValue(D,"projectionMatrix",C.projectionMatrix),ve.setValue(D,"viewMatrix",C.matrixWorldInverse);const Ne=ve.map.cameraPosition;Ne!==void 0&&Ne.setValue(D,Z.setFromMatrixPosition(C.matrixWorld)),Tt.logarithmicDepthBuffer&&ve.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&ve.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),T!==C&&(T=C,pn=!0,xs=!0)}if(nt.isSkinnedMesh){ve.setOptional(D,nt,"bindMatrix"),ve.setOptional(D,nt,"bindMatrixInverse");const Ne=nt.skeleton;Ne&&(Tt.floatVertexTextures?(Ne.boneTexture===null&&Ne.computeBoneTexture(),ve.setValue(D,"boneTexture",Ne.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}nt.isBatchedMesh&&(ve.setOptional(D,nt,"batchingTexture"),ve.setValue(D,"batchingTexture",nt._matricesTexture,P));const Ss=st.morphAttributes;if((Ss.position!==void 0||Ss.normal!==void 0||Ss.color!==void 0&&Tt.isWebGL2===!0)&&Nt.update(nt,st,yi),(pn||$t.receiveShadow!==nt.receiveShadow)&&($t.receiveShadow=nt.receiveShadow,ve.setValue(D,"receiveShadow",nt.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Mi.envMap.value=Ht,Mi.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),pn&&(ve.setValue(D,"toneMappingExposure",_.toneMappingExposure),$t.needsLights&&ll(Mi,xs),Rt&&rt.fog===!0&&dt.refreshFogUniforms(Mi,Rt),dt.refreshMaterialUniforms(Mi,rt,V,F,_t),as.upload(D,Ua($t),Mi,P)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(as.upload(D,Ua($t),Mi,P),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&ve.setValue(D,"center",nt.center),ve.setValue(D,"modelViewMatrix",nt.modelViewMatrix),ve.setValue(D,"normalMatrix",nt.normalMatrix),ve.setValue(D,"modelMatrix",nt.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Ne=rt.uniformsGroups;for(let As=0,hl=Ne.length;As<hl;As++)if(Tt.isWebGL2){const Ga=Ne[As];ft.update(Ga,yi),ft.bind(Ga,yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yi}function ll(C,J){C.ambientLightColor.needsUpdate=J,C.lightProbe.needsUpdate=J,C.directionalLights.needsUpdate=J,C.directionalLightShadows.needsUpdate=J,C.pointLights.needsUpdate=J,C.pointLightShadows.needsUpdate=J,C.spotLights.needsUpdate=J,C.spotLightShadows.needsUpdate=J,C.rectAreaLights.needsUpdate=J,C.hemisphereLights.needsUpdate=J}function cl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,J,st){xt.get(C.texture).__webglTexture=J,xt.get(C.depthTexture).__webglTexture=st;const rt=xt.get(C);rt.__hasExternalTextures=!0,rt.__hasExternalTextures&&(rt.__autoAllocateDepthBuffer=st===void 0,rt.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,J){const st=xt.get(C);st.__webglFramebuffer=J,st.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(C,J=0,st=0){A=C,E=J,x=st;let rt=!0,nt=null,Rt=!1,Ut=!1;if(C){const Ht=xt.get(C);Ht.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(D.FRAMEBUFFER,null),rt=!1):Ht.__webglFramebuffer===void 0?P.setupRenderTarget(C):Ht.__hasExternalTextures&&P.rebindTextures(C,xt.get(C.texture).__webglTexture,xt.get(C.depthTexture).__webglTexture);const Xt=C.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ut=!0);const Vt=xt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Vt[J])?nt=Vt[J][st]:nt=Vt[J],Rt=!0):Tt.isWebGL2&&C.samples>0&&P.useMultisampledRTT(C)===!1?nt=xt.get(C).__webglMultisampledFramebuffer:Array.isArray(Vt)?nt=Vt[st]:nt=Vt,b.copy(C.viewport),z.copy(C.scissor),k=C.scissorTest}else b.copy(tt).multiplyScalar(V).floor(),z.copy(Q).multiplyScalar(V).floor(),k=it;if(gt.bindFramebuffer(D.FRAMEBUFFER,nt)&&Tt.drawBuffers&&rt&&gt.drawBuffers(C,nt),gt.viewport(b),gt.scissor(z),gt.setScissorTest(k),Rt){const Ht=xt.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ht.__webglTexture,st)}else if(Ut){const Ht=xt.get(C.texture),Xt=J||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ht.__webglTexture,st||0,Xt)}N=-1},this.readRenderTargetPixels=function(C,J,st,rt,nt,Rt,Ut){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=xt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Bt=Bt[Ut]),Bt){gt.bindFramebuffer(D.FRAMEBUFFER,Bt);try{const Ht=C.texture,Xt=Ht.format,Vt=Ht.type;if(Xt!==Ye&&bt.convert(Xt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Wt=Vt===bn&&(vt.has("EXT_color_buffer_half_float")||Tt.isWebGL2&&vt.has("EXT_color_buffer_float"));if(Vt!==vi&&bt.convert(Vt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===pi&&(Tt.isWebGL2||vt.has("OES_texture_float")||vt.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=C.width-rt&&st>=0&&st<=C.height-nt&&D.readPixels(J,st,rt,nt,bt.convert(Xt),bt.convert(Vt),Rt)}finally{const Ht=A!==null?xt.get(A).__webglFramebuffer:null;gt.bindFramebuffer(D.FRAMEBUFFER,Ht)}}},this.copyFramebufferToTexture=function(C,J,st=0){const rt=Math.pow(2,-st),nt=Math.floor(J.image.width*rt),Rt=Math.floor(J.image.height*rt);P.setTexture2D(J,0),D.copyTexSubImage2D(D.TEXTURE_2D,st,0,0,C.x,C.y,nt,Rt),gt.unbindTexture()},this.copyTextureToTexture=function(C,J,st,rt=0){const nt=J.image.width,Rt=J.image.height,Ut=bt.convert(st.format),Bt=bt.convert(st.type);P.setTexture2D(st,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,st.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,st.unpackAlignment),J.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,rt,C.x,C.y,nt,Rt,Ut,Bt,J.image.data):J.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,rt,C.x,C.y,J.mipmaps[0].width,J.mipmaps[0].height,Ut,J.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,rt,C.x,C.y,Ut,Bt,J.image),rt===0&&st.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(C,J,st,rt,nt=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Rt=C.max.x-C.min.x+1,Ut=C.max.y-C.min.y+1,Bt=C.max.z-C.min.z+1,Ht=bt.convert(rt.format),Xt=bt.convert(rt.type);let Vt;if(rt.isData3DTexture)P.setTexture3D(rt,0),Vt=D.TEXTURE_3D;else if(rt.isDataArrayTexture||rt.isCompressedArrayTexture)P.setTexture2DArray(rt,0),Vt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,rt.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,rt.unpackAlignment);const Wt=D.getParameter(D.UNPACK_ROW_LENGTH),oe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Le=D.getParameter(D.UNPACK_SKIP_PIXELS),fe=D.getParameter(D.UNPACK_SKIP_ROWS),je=D.getParameter(D.UNPACK_SKIP_IMAGES),ne=st.isCompressedTexture?st.mipmaps[nt]:st.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,ne.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ne.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,C.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,C.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,C.min.z),st.isDataTexture||st.isData3DTexture?D.texSubImage3D(Vt,nt,J.x,J.y,J.z,Rt,Ut,Bt,Ht,Xt,ne.data):st.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Vt,nt,J.x,J.y,J.z,Rt,Ut,Bt,Ht,ne.data)):D.texSubImage3D(Vt,nt,J.x,J.y,J.z,Rt,Ut,Bt,Ht,Xt,ne),D.pixelStorei(D.UNPACK_ROW_LENGTH,Wt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,oe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Le),D.pixelStorei(D.UNPACK_SKIP_ROWS,fe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,je),nt===0&&rt.generateMipmaps&&D.generateMipmap(Vt),gt.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),gt.unbindTexture()},this.resetState=function(){E=0,x=0,A=null,gt.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Sa?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===_s?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ge?Li:Io}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Li?ge:ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Fp extends Qo{}Fp.prototype.isWebGL1Renderer=!0;class Gp extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class ps extends qe{constructor(t=1,e=1,i=1,n=32,a=1,o=!1,r=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:a,openEnded:o,thetaStart:r,thetaLength:c};const l=this;n=Math.floor(n),a=Math.floor(a);const h=[],f=[],p=[],g=[];let v=0;const m=[],d=i/2;let u=0;M(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ee(f,3)),this.setAttribute("normal",new Ee(p,3)),this.setAttribute("uv",new Ee(g,2));function M(){const y=new j,E=new j;let x=0;const A=(e-t)/i;for(let N=0;N<=a;N++){const T=[],b=N/a,z=b*(e-t)+t;for(let k=0;k<=n;k++){const q=k/n,w=q*c+r,I=Math.sin(w),F=Math.cos(w);E.x=z*I,E.y=-b*i+d,E.z=z*F,f.push(E.x,E.y,E.z),y.set(I,A,F).normalize(),p.push(y.x,y.y,y.z),g.push(q,1-b),T.push(v++)}m.push(T)}for(let N=0;N<n;N++)for(let T=0;T<a;T++){const b=m[T][N],z=m[T+1][N],k=m[T+1][N+1],q=m[T][N+1];h.push(b,z,q),h.push(z,k,q),x+=6}l.addGroup(u,x,0),u+=x}function _(y){const E=v,x=new kt,A=new j;let N=0;const T=y===!0?t:e,b=y===!0?1:-1;for(let k=1;k<=n;k++)f.push(0,d*b,0),p.push(0,b,0),g.push(.5,.5),v++;const z=v;for(let k=0;k<=n;k++){const w=k/n*c+r,I=Math.cos(w),F=Math.sin(w);A.x=T*F,A.y=d*b,A.z=T*I,f.push(A.x,A.y,A.z),p.push(0,b,0),x.x=I*.5+.5,x.y=F*.5*b+.5,g.push(x.x,x.y),v++}for(let k=0;k<n;k++){const q=E+k,w=z+k;y===!0?h.push(w,w+1,q):h.push(w+1,w,q),N+=3}l.addGroup(u,N,y===!0?1:2),u+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ts extends qe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const a=[],o=[];r(n),l(i),h(),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(a.slice(),3)),this.setAttribute("uv",new Ee(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function r(M){const _=new j,y=new j,E=new j;for(let x=0;x<e.length;x+=3)g(e[x+0],_),g(e[x+1],y),g(e[x+2],E),c(_,y,E,M)}function c(M,_,y,E){const x=E+1,A=[];for(let N=0;N<=x;N++){A[N]=[];const T=M.clone().lerp(y,N/x),b=_.clone().lerp(y,N/x),z=x-N;for(let k=0;k<=z;k++)k===0&&N===x?A[N][k]=T:A[N][k]=T.clone().lerp(b,k/z)}for(let N=0;N<x;N++)for(let T=0;T<2*(x-N)-1;T++){const b=Math.floor(T/2);T%2===0?(p(A[N][b+1]),p(A[N+1][b]),p(A[N][b])):(p(A[N][b+1]),p(A[N+1][b+1]),p(A[N+1][b]))}}function l(M){const _=new j;for(let y=0;y<a.length;y+=3)_.x=a[y+0],_.y=a[y+1],_.z=a[y+2],_.normalize().multiplyScalar(M),a[y+0]=_.x,a[y+1]=_.y,a[y+2]=_.z}function h(){const M=new j;for(let _=0;_<a.length;_+=3){M.x=a[_+0],M.y=a[_+1],M.z=a[_+2];const y=d(M)/2/Math.PI+.5,E=u(M)/Math.PI+.5;o.push(y,1-E)}v(),f()}function f(){for(let M=0;M<o.length;M+=6){const _=o[M+0],y=o[M+2],E=o[M+4],x=Math.max(_,y,E),A=Math.min(_,y,E);x>.9&&A<.1&&(_<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),E<.2&&(o[M+4]+=1))}}function p(M){a.push(M.x,M.y,M.z)}function g(M,_){const y=M*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function v(){const M=new j,_=new j,y=new j,E=new j,x=new kt,A=new kt,N=new kt;for(let T=0,b=0;T<a.length;T+=9,b+=6){M.set(a[T+0],a[T+1],a[T+2]),_.set(a[T+3],a[T+4],a[T+5]),y.set(a[T+6],a[T+7],a[T+8]),x.set(o[b+0],o[b+1]),A.set(o[b+2],o[b+3]),N.set(o[b+4],o[b+5]),E.copy(M).add(_).add(y).divideScalar(3);const z=d(E);m(x,b+0,M,z),m(A,b+2,_,z),m(N,b+4,y,z)}}function m(M,_,y,E){E<0&&M.x===1&&(o[_]=M.x-1),y.x===0&&y.z===0&&(o[_]=E/2/Math.PI+.5)}function d(M){return Math.atan2(M.z,-M.x)}function u(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.vertices,t.indices,t.radius,t.details)}}class La extends Ts{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new La(t.radius,t.detail)}}class Ia extends Ts{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ia(t.radius,t.detail)}}class xn extends qe{constructor(t=1,e=32,i=16,n=0,a=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:a,thetaStart:o,thetaLength:r},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+r,Math.PI);let l=0;const h=[],f=new j,p=new j,g=[],v=[],m=[],d=[];for(let u=0;u<=i;u++){const M=[],_=u/i;let y=0;u===0&&o===0?y=.5/e:u===i&&c===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){const x=E/e;f.x=-t*Math.cos(n+x*a)*Math.sin(o+_*r),f.y=t*Math.cos(o+_*r),f.z=t*Math.sin(n+x*a)*Math.sin(o+_*r),v.push(f.x,f.y,f.z),p.copy(f).normalize(),m.push(p.x,p.y,p.z),d.push(x+y,1-_),M.push(l++)}h.push(M)}for(let u=0;u<i;u++)for(let M=0;M<e;M++){const _=h[u][M+1],y=h[u][M],E=h[u+1][M],x=h[u+1][M+1];(u!==0||o>0)&&g.push(_,y,x),(u!==i-1||c<Math.PI)&&g.push(y,E,x)}this.setIndex(g),this.setAttribute("position",new Ee(v,3)),this.setAttribute("normal",new Ee(m,3)),this.setAttribute("uv",new Ee(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ie extends Rn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Jt(16777215),this.specular=new Jt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Do,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tl extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const na=new he,co=new j,ho=new j;class Bp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ca,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;co.setFromMatrixPosition(t.matrixWorld),e.position.copy(co),ho.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ho),e.updateMatrixWorld(),na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class kp extends Bp{constructor(){super(new Xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uo extends tl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new kp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fo extends tl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hp{constructor(t,e,i=0,n=1/0){this.ray=new ba(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return _a(t,this,i,e),i.sort(po),i}intersectObjects(t,e=!0,i=[]){for(let n=0,a=t.length;n<a;n++)_a(t[n],this,i,e);return i.sort(po),i}}function po(s,t){return s.distance-t.distance}function _a(s,t,e,i){if(s.layers.test(t.layers)&&s.raycast(t,e),i===!0){const n=s.children;for(let a=0,o=n.length;a<o;a++)_a(n[a],t,e,!0)}}class ya{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ta}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ta);const mo={type:"change"},sa={type:"start"},go={type:"end"},es=new ba,vo=new ui,Vp=Math.cos(70*Lc.DEG2RAD);class Wp extends Ni{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",St),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",St),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(mo),i.update(),a=n.NONE},this.update=function(){const R=new j,ft=new Di().setFromUnitVectors(t.up,new j(0,1,0)),Dt=ft.clone().invert(),wt=new j,mt=new Di,U=new j,yt=2*Math.PI;return function(Gt=null){const Ft=i.object.position;R.copy(Ft).sub(i.target),R.applyQuaternion(ft),r.setFromVector3(R),i.autoRotate&&a===n.NONE&&k(b(Gt)),i.enableDamping?(r.theta+=c.theta*i.dampingFactor,r.phi+=c.phi*i.dampingFactor):(r.theta+=c.theta,r.phi+=c.phi);let qt=i.minAzimuthAngle,jt=i.maxAzimuthAngle;isFinite(qt)&&isFinite(jt)&&(qt<-Math.PI?qt+=yt:qt>Math.PI&&(qt-=yt),jt<-Math.PI?jt+=yt:jt>Math.PI&&(jt-=yt),qt<=jt?r.theta=Math.max(qt,Math.min(jt,r.theta)):r.theta=r.theta>(qt+jt)/2?Math.max(qt,r.theta):Math.min(jt,r.theta)),r.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,r.phi)),r.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&x||i.object.isOrthographicCamera?r.radius=tt(r.radius):r.radius=tt(r.radius*l),R.setFromSpherical(r),R.applyQuaternion(Dt),Ft.copy(i.target).add(R),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let se=!1;if(i.zoomToCursor&&x){let re=null;if(i.object.isPerspectiveCamera){const Zt=R.length();re=tt(Zt*l);const le=Zt-re;i.object.position.addScaledVector(y,le),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Zt=new j(E.x,E.y,0);Zt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),se=!0;const le=new j(E.x,E.y,0);le.unproject(i.object),i.object.position.sub(le).add(Zt),i.object.updateMatrixWorld(),re=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;re!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(re).add(i.object.position):(es.origin.copy(i.object.position),es.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(es.direction))<Vp?t.lookAt(i.target):(vo.setFromNormalAndCoplanarPoint(i.object.up,i.target),es.intersectPlane(vo,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),se=!0);return l=1,x=!1,se||wt.distanceToSquared(i.object.position)>o||8*(1-mt.dot(i.object.quaternion))>o||U.distanceToSquared(i.target)>0?(i.dispatchEvent(mo),wt.copy(i.object.position),mt.copy(i.object.quaternion),U.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",zt),i.domElement.removeEventListener("pointerdown",P),i.domElement.removeEventListener("pointercancel",H),i.domElement.removeEventListener("wheel",lt),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",H),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",St),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=n.NONE;const o=1e-6,r=new ya,c=new ya;let l=1;const h=new j,f=new kt,p=new kt,g=new kt,v=new kt,m=new kt,d=new kt,u=new kt,M=new kt,_=new kt,y=new j,E=new kt;let x=!1;const A=[],N={};let T=!1;function b(R){return R!==null?2*Math.PI/60*i.autoRotateSpeed*R:2*Math.PI/60/60*i.autoRotateSpeed}function z(R){const ft=Math.abs(R*.01);return Math.pow(.95,i.zoomSpeed*ft)}function k(R){c.theta-=R}function q(R){c.phi-=R}const w=function(){const R=new j;return function(Dt,wt){R.setFromMatrixColumn(wt,0),R.multiplyScalar(-Dt),h.add(R)}}(),I=function(){const R=new j;return function(Dt,wt){i.screenSpacePanning===!0?R.setFromMatrixColumn(wt,1):(R.setFromMatrixColumn(wt,0),R.crossVectors(i.object.up,R)),R.multiplyScalar(Dt),h.add(R)}}(),F=function(){const R=new j;return function(Dt,wt){const mt=i.domElement;if(i.object.isPerspectiveCamera){const U=i.object.position;R.copy(U).sub(i.target);let yt=R.length();yt*=Math.tan(i.object.fov/2*Math.PI/180),w(2*Dt*yt/mt.clientHeight,i.object.matrix),I(2*wt*yt/mt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(w(Dt*(i.object.right-i.object.left)/i.object.zoom/mt.clientWidth,i.object.matrix),I(wt*(i.object.top-i.object.bottom)/i.object.zoom/mt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function V(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(R,ft){if(!i.zoomToCursor)return;x=!0;const Dt=i.domElement.getBoundingClientRect(),wt=R-Dt.left,mt=ft-Dt.top,U=Dt.width,yt=Dt.height;E.x=wt/U*2-1,E.y=-(mt/yt)*2+1,y.set(E.x,E.y,1).unproject(i.object).sub(i.object.position).normalize()}function tt(R){return Math.max(i.minDistance,Math.min(i.maxDistance,R))}function Q(R){f.set(R.clientX,R.clientY)}function it(R){K(R.clientX,R.clientX),u.set(R.clientX,R.clientY)}function G(R){v.set(R.clientX,R.clientY)}function et(R){p.set(R.clientX,R.clientY),g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const ft=i.domElement;k(2*Math.PI*g.x/ft.clientHeight),q(2*Math.PI*g.y/ft.clientHeight),f.copy(p),i.update()}function ct(R){M.set(R.clientX,R.clientY),_.subVectors(M,u),_.y>0?V(z(_.y)):_.y<0&&$(z(_.y)),u.copy(M),i.update()}function _t(R){m.set(R.clientX,R.clientY),d.subVectors(m,v).multiplyScalar(i.panSpeed),F(d.x,d.y),v.copy(m),i.update()}function L(R){K(R.clientX,R.clientY),R.deltaY<0?$(z(R.deltaY)):R.deltaY>0&&V(z(R.deltaY)),i.update()}function B(R){let ft=!1;switch(R.code){case i.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(0,i.keyPanSpeed),ft=!0;break;case i.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(0,-i.keyPanSpeed),ft=!0;break;case i.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?k(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(i.keyPanSpeed,0),ft=!0;break;case i.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?k(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(-i.keyPanSpeed,0),ft=!0;break}ft&&(R.preventDefault(),i.update())}function Z(R){if(A.length===1)f.set(R.pageX,R.pageY);else{const ft=bt(R),Dt=.5*(R.pageX+ft.x),wt=.5*(R.pageY+ft.y);f.set(Dt,wt)}}function W(R){if(A.length===1)v.set(R.pageX,R.pageY);else{const ft=bt(R),Dt=.5*(R.pageX+ft.x),wt=.5*(R.pageY+ft.y);v.set(Dt,wt)}}function Y(R){const ft=bt(R),Dt=R.pageX-ft.x,wt=R.pageY-ft.y,mt=Math.sqrt(Dt*Dt+wt*wt);u.set(0,mt)}function D(R){i.enableZoom&&Y(R),i.enablePan&&W(R)}function Mt(R){i.enableZoom&&Y(R),i.enableRotate&&Z(R)}function vt(R){if(A.length==1)p.set(R.pageX,R.pageY);else{const Dt=bt(R),wt=.5*(R.pageX+Dt.x),mt=.5*(R.pageY+Dt.y);p.set(wt,mt)}g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const ft=i.domElement;k(2*Math.PI*g.x/ft.clientHeight),q(2*Math.PI*g.y/ft.clientHeight),f.copy(p)}function Tt(R){if(A.length===1)m.set(R.pageX,R.pageY);else{const ft=bt(R),Dt=.5*(R.pageX+ft.x),wt=.5*(R.pageY+ft.y);m.set(Dt,wt)}d.subVectors(m,v).multiplyScalar(i.panSpeed),F(d.x,d.y),v.copy(m)}function gt(R){const ft=bt(R),Dt=R.pageX-ft.x,wt=R.pageY-ft.y,mt=Math.sqrt(Dt*Dt+wt*wt);M.set(0,mt),_.set(0,Math.pow(M.y/u.y,i.zoomSpeed)),V(_.y),u.copy(M);const U=(R.pageX+ft.x)*.5,yt=(R.pageY+ft.y)*.5;K(U,yt)}function It(R){i.enableZoom&&gt(R),i.enablePan&&Tt(R)}function xt(R){i.enableZoom&&gt(R),i.enableRotate&&vt(R)}function P(R){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",S),i.domElement.addEventListener("pointerup",H)),Nt(R),R.pointerType==="touch"?Lt(R):ot(R))}function S(R){i.enabled!==!1&&(R.pointerType==="touch"?ht(R):at(R))}function H(R){Ct(R),A.length===0&&(i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",H)),i.dispatchEvent(go),a=n.NONE}function ot(R){let ft;switch(R.button){case 0:ft=i.mouseButtons.LEFT;break;case 1:ft=i.mouseButtons.MIDDLE;break;case 2:ft=i.mouseButtons.RIGHT;break;default:ft=-1}switch(ft){case zi.DOLLY:if(i.enableZoom===!1)return;it(R),a=n.DOLLY;break;case zi.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enablePan===!1)return;G(R),a=n.PAN}else{if(i.enableRotate===!1)return;Q(R),a=n.ROTATE}break;case zi.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enableRotate===!1)return;Q(R),a=n.ROTATE}else{if(i.enablePan===!1)return;G(R),a=n.PAN}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(sa)}function at(R){switch(a){case n.ROTATE:if(i.enableRotate===!1)return;et(R);break;case n.DOLLY:if(i.enableZoom===!1)return;ct(R);break;case n.PAN:if(i.enablePan===!1)return;_t(R);break}}function lt(R){i.enabled===!1||i.enableZoom===!1||a!==n.NONE||(R.preventDefault(),i.dispatchEvent(sa),L(ut(R)),i.dispatchEvent(go))}function ut(R){const ft=R.deltaMode,Dt={clientX:R.clientX,clientY:R.clientY,deltaY:R.deltaY};switch(ft){case 1:Dt.deltaY*=16;break;case 2:Dt.deltaY*=100;break}return R.ctrlKey&&!T&&(Dt.deltaY*=10),Dt}function dt(R){R.key==="Control"&&(T=!0,document.addEventListener("keyup",pt,{passive:!0,capture:!0}))}function pt(R){R.key==="Control"&&(T=!1,document.removeEventListener("keyup",pt,{passive:!0,capture:!0}))}function St(R){i.enabled===!1||i.enablePan===!1||B(R)}function Lt(R){switch(At(R),A.length){case 1:switch(i.touches.ONE){case Fi.ROTATE:if(i.enableRotate===!1)return;Z(R),a=n.TOUCH_ROTATE;break;case Fi.PAN:if(i.enablePan===!1)return;W(R),a=n.TOUCH_PAN;break;default:a=n.NONE}break;case 2:switch(i.touches.TWO){case Fi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;D(R),a=n.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Mt(R),a=n.TOUCH_DOLLY_ROTATE;break;default:a=n.NONE}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(sa)}function ht(R){switch(At(R),a){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;vt(R),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;Tt(R),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;It(R),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;xt(R),i.update();break;default:a=n.NONE}}function zt(R){i.enabled!==!1&&R.preventDefault()}function Nt(R){A.push(R.pointerId)}function Ct(R){delete N[R.pointerId];for(let ft=0;ft<A.length;ft++)if(A[ft]==R.pointerId){A.splice(ft,1);return}}function At(R){let ft=N[R.pointerId];ft===void 0&&(ft=new kt,N[R.pointerId]=ft),ft.set(R.pageX,R.pageY)}function bt(R){const ft=R.pointerId===A[0]?A[1]:A[0];return N[ft]}i.domElement.addEventListener("contextmenu",zt),i.domElement.addEventListener("pointerdown",P),i.domElement.addEventListener("pointercancel",H),i.domElement.addEventListener("wheel",lt,{passive:!1}),document.addEventListener("keydown",dt,{passive:!0,capture:!0}),this.update()}}const X={SEED:null,MAZE_DEGREE:4,MIN_MAZE_DEGREE:4,MAX_MAZE_DEGREE:16,BRANCHING_FACTOR:.1,BRAID_FACTOR:.1,SHADOW_SIZE_FACTOR:.075,TELEPORT_MAP_OPACITY:.25,PLAYER_COLLISION_RADIUS:.275,PLAYER_COLLISION_OFFSET_X:0,PLAYER_COLLISION_OFFSET_Y:-.125,PLAYER_START_X:.5,PLAYER_START_Y:1.7,PLAYER_SHADOW_OFFSET_X:-.28,PLAYER_SHADOW_OFFSET_Y:-.15,PLAYER_SHADOW_WIDTH_FACTOR:.45,PLAYER_SHADOW_HEIGHT_FACTOR:.25,SHOW_COLLISION_DEBUG:!1,MOVE_SPEED_FACTOR:2,ROT_SPEED:3,HUNTER_SPEED:600,VORTEX_SPEED_NORMAL:1.5,VORTEX_SPEED_FAST:6,JELLY_PORTAL_COUNT:0,getHunterCount(s){return s>=16?4:s>=12?3:s>=8?2:1},getKeyCount(s){return this.getHunterCount(s)*2},getTeleportCount(s){if(s<8)return Math.ceil(s/2);const t=s-8;return Math.floor(.125*t*t+1.5*t+4)},getPathfinderCount(s){return s>=11?Math.floor(9+(s-11)*1.4):this.getTeleportCount(s)},COLORS:{WALL:"#444",PATH_KNOWN:"#88ccff",PATH_VISITED:"#888",NEON_UP:"#00ffff",NEON_DOWN:"#ff00ff",NEON_UP_UNUSED:"#006666",NEON_DOWN_UNUSED:"#660066",START:"#ff0",EXIT:"#0f0",PLAYER:"#f00",PLAYER_OUTLINE:"#ffffff",HUNTER:"#a0f",TELEPORT:"#ff8c00",TELEPORT_INACTIVE:"#555555",REVEALED_PATH:"#ffffff",ELEVATOR_BIDIRECTIONAL:"#ffffff",JELLY_PORTAL:"#a020f0",THREE_PLAYER:16711680,THREE_HUNTER:11141375,THREE_START:16776960,THREE_EXIT:65280,THREE_VISITED:8947848,THREE_KNOWN:8965375,THREE_ELEVATOR_UP:65535,THREE_ELEVATOR_DOWN:16711935,THREE_TELEPORT:16747520,THREE_KEY:16766720,THREE_JELLY_PORTAL:10494192,THREE_ELEVATOR_SHAFT:{bottom:16711935,top:65535}}},Ma={en:{gameTitle:"VOID ESCAPE",gameCredits:"a game by Bernard Rodrigues",activeHunters:"Active Hunters",activeTeleports:"Active Teleports",activeKeys:"Active Keys",availablePathfinders:"Available Pathfinders",mazeDegree:"Maze Degree",safeMode:"Safe Mode",generateMaze:"NEW GAME",continue:"CONTINUE",degreeHint:"Controls the grid size. Higher values create larger, more complex mazes.",safeModeHint:"When active, no hunters will spawn in the maze.",storyMsg1:"The mystical church of chaos worship!",storyMsg2:"The greatest monument to chaos worship.",storyMsg3:"I am a priestess of the word of the Jelly god.",storyMsg4:"But their word is a lie! The chaos is a lie!",storyMsg5:"So I was condemned to exile...",storyMsg6:"Condemned to the void...",hudKeys:"KEYS",hudPathfinders:"PATHFINDERS",hudFloor:"Floor",hudVisited:"Visited",proximityDetector:"PROXIMITY DETECTOR",mapLegendTitle:"MAP LEGEND",legendVisited:"Visited Path",legendKnown:"Known Path",legendStart:"Starting Point",legendExit:"Maze Exit",legendHunter:"Void Hunter",legendTeleport:"Teleport",legendElevator:"Elevator",controlsHintTitle:"CONTROLS HINT",actionMove:"Move / Rotate",actionElevator:"Elevator Up / Down",actionMap:"3D Holographic Map",actionZoom:"Zoom Minimap",msgVoidHuntersDetected:"Void Hunters Detected",msgKeySecured:"Key secured ({collected}/{total})",msgExitUnlocked:"Exit unlocked",msgKeysRemaining:"{count} key(s) remaining",msgNoOtherActiveTeleport:"No other active teleports",msgExitFound:"Exit found",msgNoPathfindersRemaining:"No pathfinders remaining",msgExitNotFoundYet:"Exit not found yet",msgSafePointTeleport:"Safe point... Teleport?",msgOopsNoisyShit:"Oops... noisy sh*t!",msgWhereAmI:"Where am I?",msgElevatorUp:"Up?",msgElevatorDown:"Down?",msgWhichWay:"Which way?",msgDidYouHearThat:"Did you hear that?",msgIWasDetected:"Damn! I was detected.",msgFoundPathfinder:"Found a pathfinder!",msgWorldSaved:"World saved. What now?",msgKeyDropped:"Oh! Just dropped a key...",msgPlayerRespawn:"Ok.. ok.. guess I'm alive..",statusLabel:"HUNTER STATUS:",statusScanning:"SCANNING",statusActive:"ACTIVE",statusSleeping:"SLEEPING",statusTracking:"TRACKING MODE",statusConverging:"HUNTERS CONVERGING ({ticks} Ticks)",pauseTitle:"PAUSED",resume:"RESUME",victoryTitle:"Mission Accomplished",victoryText:"You have successfully navigated the 3D void.",victoryCompletion:"MAP COMPLETION: {percent}%",mapCompletion:"MAP COMPLETION",victoryDeaths:"DEATHS",victoryDegree:"MAZE DEGREE",victoryTime:"COMPLETION TIME",playAgain:"PLAY AGAIN",mainMenu:"MAIN MENU",gameOverTitle:"Terminated",gameOverText:"You were caught by the void hunters.",saving:"SAVING...",generatingMaze:"GENERATING MAZE...",hudMana:"Mana",victoryMana:"MANA COLLECTED",msgManaSecured:"Mana secured ({collected}/{total})",teleportAnomaly:"TELEPORT ANOMALY",ticks:"TICKS",map3dInstructions:"Drag to rotate | Scroll to zoom | M to return",teleportWarning:"TELEPORT",map:"MAP",teleport:"TELEPORT",teleportationLink:"TELEPORTATION LINK",teleportJumpSector:"Jump to Sector {floor}F?",teleportTargetGrid:"Target Grid: ({x}, {y})",teleportGo:"GO",teleportCancel:"CANCEL",actionJellyPortal:"Jelly God Portal",msgJellyPortalEarned:"I got a little power!",msgJellyPortalNotHere:"I can't do this here...",msgJellyPortalActivated:"Portal of the Jelly God!",msgJellyPortalNoPortalCount:"I need mana...",msgJellyPortalNotSafe:"Not safe, but teleport-able...",msgHunterReturned:"These things... they resurrect..."},ptBr:{gameTitle:"VOID ESCAPE",gameCredits:"um jogo de Bernard Rodrigues",activeHunters:"Caçadores Ativos",activeTeleports:"Teleportes Ativos",activeKeys:"Chaves Ativas",availablePathfinders:"Localizadores Disponíveis",mazeDegree:"Grau do Labirinto",safeMode:"Modo Seguro",generateMaze:"NOVO JOGO",continue:"CONTINUAR",degreeHint:"Controla o tamanho da grade. Valores maiores criam labirintos maiores e mais complexos.",safeModeHint:"Quando ativo, nenhum caçador surgirá no labirinto.",storyMsg1:"A igreja mística do culto ao caos!",storyMsg2:"O maior monumento ao culto do caos.",storyMsg3:"Sou uma sacerdotisa da palavra do deus Geleia.",storyMsg4:"Mas sua palavra é uma mentira! O caos é uma mentira!",storyMsg5:"Então fui condenada ao exílio...",storyMsg6:"Condenada ao vazio...",hudKeys:"CHAVES",hudPathfinders:"LOCALIZADORES",hudFloor:"Andar",hudVisited:"Visitado",proximityDetector:"DETECTOR DE PROXIMIDADE",mapLegendTitle:"LEGENDA DO MAPA",legendVisited:"Caminho Visitado",legendKnown:"Caminho Conhecido",legendStart:"Ponto de Partida",legendExit:"Saída do Labirinto",legendHunter:"Caçador do Vazio",legendTeleport:"Teleporte",legendElevator:"Elevador",controlsHintTitle:"DICA DE CONTROLES",actionMove:"Mover / Girar",actionElevator:"Elevador Subir / Descer",actionMap:"Mapa Holográfico 3D",actionZoom:"Zoom do Minimapa",msgVoidHuntersDetected:"Caçadores do Vazio Detectados",msgKeySecured:"Chave obtida ({collected}/{total})",msgExitUnlocked:"Saída destrancada",msgKeysRemaining:"{count} chave(s) restante(s)",msgNoOtherActiveTeleport:"Nenhum outro teleporte ativo",msgExitFound:"Saída encontrada",msgNoPathfindersRemaining:"Nenhum localizador restante",msgExitNotFoundYet:"Saída ainda não encontrada",msgSafePointTeleport:"Ponto seguro... Teleportar?",msgOopsNoisyShit:"Ops... troço barulhento!",msgWhereAmI:"Onde estou?",msgElevatorUp:"Subir?",msgElevatorDown:"Descer?",msgWhichWay:"Que direção?",msgDidYouHearThat:"Ouviu alguma coisa?",msgIWasDetected:"Droga! Fui detectada.",msgFoundPathfinder:"Localizador encontrado!",msgWorldSaved:"Salvei o mundo. E agora?",msgKeyDropped:"Ih... Derrubei uma chave...",msgPlayerRespawn:"Ok.. ok.. sobrevivi..",statusLabel:"STATUS DO CAÇADOR:",statusScanning:"ESCANEANDO",statusActive:"ATIVO",statusSleeping:"DORMINDO",statusTracking:"MODO DE RASTREAMENTO",statusConverging:"CAÇADORES CONVERGINDO ({ticks} Ticks)",pauseTitle:"PAUSA",resume:"RETOMAR",victoryTitle:"Missão Cumprida",victoryText:"Você atravessou o vazio 3D com sucesso.",victoryCompletion:"MAPA COMPLETO: {percent}%",mapCompletion:"MAPA COMPLETO",victoryDeaths:"MORTES",victoryDegree:"GRAU DO LABIRINTO",victoryTime:"TEMPO DE CONCLUSÃO",playAgain:"JOGAR NOVAMENTE",mainMenu:"MENU PRINCIPAL",gameOverTitle:"Eliminado",gameOverText:"Você foi pego pelos caçadores do vazio.",saving:"SALVANDO...",generatingMaze:"GERANDO LABIRINTO...",hudMana:"Mana",victoryMana:"MANA COLETADA",msgManaSecured:"Mana absorvida ({collected}/{total})",teleportAnomaly:"ANOMALIA DE TELEPORTE",ticks:"TICKS",map3dInstructions:"Arraste para girar | Role para zoom | M para voltar",teleportWarning:"TELEPORTE",map:"MAPA",teleport:"TELEPORTE",teleportationLink:"LINK DE TELEPORTE",teleportJumpSector:"Pular para o Setor {floor}F?",teleportTargetGrid:"Coordenada Alvo: ({x}, {y})",teleportGo:"IR",teleportCancel:"CANCELAR",actionJellyPortal:"Portal do Deus Geléia",msgJellyPortalEarned:"Ganhei um poderzinho!",msgJellyPortalNotHere:"Aqui eu não posso...",msgJellyPortalActivated:"Portal do Deus Geléia!",msgJellyPortalNoPortalCount:"Preciso de mana...",msgJellyPortalNotSafe:"Não seguro, mas teleportável...",msgHunterReturned:"Essas coisas ressuscitam..."},ja:{gameTitle:"ヴォイド・エスケープ",gameCredits:"ベルナルド・ホドリゲス制作",activeHunters:"アクティブなハンター",activeTeleports:"アクティブなテレポート",activeKeys:"アクティブな鍵",availablePathfinders:"使用可能なパスファインダー",mazeDegree:"迷路の難易度",safeMode:"セーフモード",generateMaze:"ニューゲーム",continue:"つづきから",degreeHint:"グリッドのサイズを調整します。値が大きいほど、より広く複雑な迷路になります。",safeModeHint:"有効にすると、迷路にハンターが出現しなくなります。",storyMsg1:"混沌崇拝の神秘的な教会!",storyMsg2:"混沌崇拝の最大の記念碑。",storyMsg3:"私はゼリー神の言葉に仕える巫女よ。",storyMsg4:"でも彼らの言葉は嘘!混沌なんて嘘っぱちなんだから!",storyMsg5:"だから追放の刑に処されたの…",storyMsg6:"虚空へと追放されて…",hudKeys:"鍵",hudPathfinders:"パスファインダー",hudFloor:"階層",hudVisited:"訪問済み",proximityDetector:"近接探知機",mapLegendTitle:"マップ凡例",legendVisited:"訪問済みの道",legendKnown:"既知の道",legendStart:"スタート地点",legendExit:"迷路の出口",legendHunter:"虚空のハンター",legendTeleport:"テレポート",legendElevator:"エレベーター",controlsHintTitle:"操作方法",actionMove:"移動 / 回転",actionElevator:"エレベーター 上昇 / 下降",actionMap:"3Dホログラフィックマップ",actionZoom:"ミニマップのズーム",msgVoidHuntersDetected:"虚空のハンターを検知",msgKeySecured:"鍵を入手 ({collected}/{total})",msgExitUnlocked:"出口の鍵が開いた",msgKeysRemaining:"残り{count}個の鍵",msgNoOtherActiveTeleport:"他に有効なテレポートはない",msgExitFound:"出口を発見",msgNoPathfindersRemaining:"パスファインダーが残っていない",msgExitNotFoundYet:"出口はまだ見つかっていない",msgSafePointTeleport:"安全地帯…テレポートする?",msgOopsNoisyShit:"あら…うるさいったらないわね!",msgWhereAmI:"ここどこ?",msgElevatorUp:"上る?",msgElevatorDown:"下る?",msgWhichWay:"どっちの道?",msgDidYouHearThat:"今の聞こえた?",msgIWasDetected:"しまった、見つかっちゃった!",msgFoundPathfinder:"パスファインダー発見!",msgWorldSaved:"世界を救っちゃった。さて、次は?",msgKeyDropped:"あ、鍵落としちゃった…",msgPlayerRespawn:"よしよし…どうやらまだ生きてるな…",statusLabel:"ハンターの状態:",statusScanning:"スキャン中",statusActive:"アクティブ",statusSleeping:"スリープ中",statusTracking:"追跡モード",statusConverging:"ハンターが接近中 ({ticks} ティック)",pauseTitle:"一時停止",resume:"再開",victoryTitle:"任務完了",victoryText:"3Dの虚空を無事に踏破した。",victoryCompletion:"マップ達成度: {percent}%",mapCompletion:"マップ達成度",victoryDeaths:"死亡数",victoryDegree:"迷路の次数",victoryTime:"クリア時間",playAgain:"もう一度プレイ",mainMenu:"メインメニュー",gameOverTitle:"終了",gameOverText:"虚空のハンターに捕まってしまった。",saving:"セーブ中…",generatingMaze:"迷路生成中...",hudMana:"マナ",victoryMana:"マナ回収量",msgManaSecured:"マナを獲得しました ({collected}/{total})",teleportAnomaly:"テレポート異常",ticks:"ティック",map3dInstructions:"ドラッグで回転 | スクロールでズーム | Mキーで戻る",teleportWarning:"テレポート",map:"マップ",teleport:"テレポート",teleportationLink:"テレポートリンク",teleportJumpSector:"{floor}階のセクターへ移動する?",teleportTargetGrid:"目標座標: ({x}, {y})",teleportGo:"移動",teleportCancel:"キャンセル",actionJellyPortal:"ゼリー神のポータル",msgJellyPortalEarned:"ちょっとした力を手に入れた！",msgJellyPortalNotHere:"ここでは使えないわ...",msgJellyPortalActivated:"ゼリー神のポータル！",msgJellyPortalNoPortalCount:"マナが必要よ...",msgJellyPortalNotSafe:"安全ではないけれど、テレポートはできるわ...",msgHunterReturned:"あいつら、蘇るの…？"},es:{gameTitle:"ESCAPE DEL VACÍO",gameCredits:"un juego de Bernard Rodrigues",activeHunters:"Cazadores Activos",activeTeleports:"Teletransportes Activos",activeKeys:"Llaves Activas",availablePathfinders:"Localizadores Disponibles",mazeDegree:"Grado del Laberinto",safeMode:"Modo Seguro",generateMaze:"NUEVA PARTIDA",continue:"CONTINUAR",degreeHint:"Controla el tamaño de la cuadrícula. Valores más altos crean laberintos más grandes y complejos.",safeModeHint:"Cuando está activo, no aparecerán cazadores en el laberinto.",storyMsg1:"¡La mística iglesia del culto al caos!",storyMsg2:"El mayor monumento al culto del caos.",storyMsg3:"Soy una sacerdotisa de la palabra del dios Gelatina.",storyMsg4:"¡Pero su palabra es una mentira! ¡El caos es mentira!",storyMsg5:"Así que fui condenada al exilio...",storyMsg6:"Condenada al vacío...",hudKeys:"LLAVES",hudPathfinders:"LOCALIZADORES",hudFloor:"Piso",hudVisited:"Visitado",proximityDetector:"DETECTOR DE PROXIMIDAD",mapLegendTitle:"LEYENDA DEL MAPA",legendVisited:"Camino Visitado",legendKnown:"Camino Conocido",legendStart:"Punto de Partida",legendExit:"Salida del Laberinto",legendHunter:"Cazador del Vacío",legendTeleport:"Teletransporte",legendElevator:"Ascensor",controlsHintTitle:"AYUDA DE CONTROLES",actionMove:"Mover / Girar",actionElevator:"Ascensor Subir / Bajar",actionMap:"Mapa Holográfico 3D",actionZoom:"Zoom del Minimapa",msgVoidHuntersDetected:"Cazadores del Vacío Detectados",msgKeySecured:"Llave obtenida ({collected}/{total})",msgExitUnlocked:"Salida desbloqueada",msgKeysRemaining:"{count} llave(s) restante(s)",msgNoOtherActiveTeleport:"No hay otros teletransportes activos",msgExitFound:"Salida encontrada",msgNoPathfindersRemaining:"No quedan localizadores",msgExitNotFoundYet:"Salida aún no encontrada",msgSafePointTeleport:"Punto seguro... ¿Teletransportarse?",msgOopsNoisyShit:"Ups... ¡qué cosa tan ruidosa!",msgWhereAmI:"¿Dónde estoy?",msgElevatorUp:"¿Subir?",msgElevatorDown:"¿Bajar?",msgWhichWay:"¿Por dónde?",msgDidYouHearThat:"¿Escuchaste eso?",msgIWasDetected:"¡Rayos! Fui detectada.",msgFoundPathfinder:"¡Localizador encontrado!",msgWorldSaved:"Salvé el mundo. ¿Y ahora qué?",msgKeyDropped:"¡Ah! Se me cayó una llave...",msgPlayerRespawn:"Vale.. vale.. parece que sigo viva..",statusLabel:"ESTADO DEL CAZADOR:",statusScanning:"ESCANEANDO",statusActive:"ACTIVO",statusSleeping:"DURMIENDO",statusTracking:"MODO DE RASTREO",statusConverging:"CAZADORES CONVERGIENDO ({ticks} Ticks)",pauseTitle:"PAUSA",resume:"REANUDAR",victoryTitle:"Misión Cumplida",victoryText:"Atravesaste el vacío 3D con éxito.",victoryCompletion:"MAPA COMPLETADO: {percent}%",mapCompletion:"MAPA COMPLETADO",victoryDeaths:"MUERTES",victoryDegree:"GRADO DEL LABERINTO",victoryTime:"TIEMPO DE FINALIZACIÓN",playAgain:"JUGAR DE NUEVO",mainMenu:"MENÚ PRINCIPAL",gameOverTitle:"Eliminada",gameOverText:"Fuiste atrapada por los cazadores del vacío.",saving:"GUARDANDO...",generatingMaze:"GENERANDO LABIRINTO...",hudMana:"Maná",victoryMana:"MANÁ RECOLECTADA",msgManaSecured:"Maná asegurado ({collected}/{total})",teleportAnomaly:"ANOMALÍA DE TELETRANSPORTE",ticks:"TICKS",map3dInstructions:"Arrastra para girar | Desplázate para zoom | M para volver",teleportWarning:"TELETRANSPORTE",map:"MAPA",teleport:"TELETRANSPORTE",teleportationLink:"ENLACE DE TELETRANSPORTE",teleportJumpSector:"¿Saltar al Sector {floor}F?",teleportTargetGrid:"Coordenada Objetivo: ({x}, {y})",teleportGo:"IR",teleportCancel:"CANCELAR",actionJellyPortal:"Portal del Dios Gelatina",msgJellyPortalEarned:"¡Tengo un pequeno poder!",msgJellyPortalNotHere:"No puedo hacer esto aquí...",msgJellyPortalActivated:"¡Portal del Dios Gelatina!",msgJellyPortalNoPortalCount:"Necesito maná...",msgJellyPortalNotSafe:"No es seguro, pero se puede teletransportar...",msgHunterReturned:"Esas cosas resucitan..."}};let Pn="en";function is(s){Ma[s]?Pn=s:Pn="en"}function Yp(){if(typeof navigator<"u"){const s=navigator.language||navigator.userLanguage;if(s){const t=s.toLowerCase();if(t.startsWith("pt")){is("ptBr");return}if(t.startsWith("ja")){is("ja");return}if(t.startsWith("es")){is("es");return}}}is("en")}Yp();function Ot(s,t={},e=Pn){var n,a;let i=((n=Ma[e])==null?void 0:n[s])||((a=Ma.en)==null?void 0:a[s])||s;return Object.keys(t).forEach(o=>{i=i.replace(`{${o}}`,t[o])}),i}function rs(s=Pn){typeof document<"u"&&document.querySelectorAll("[data-i18n]").forEach(e=>{const i=e.getAttribute("data-i18n");if(i){const n=Ot(i,{},s);n!==i&&(e instanceof HTMLInputElement&&e.type==="button"?e.value=n:e.textContent=n)}})}class el{constructor(){O(this,"_data");this._data=[]}get size(){return this._data.length}push(t){this._data.push(t),this._bubbleUp(this._data.length-1)}pop(){const t=this._data[0],e=this._data.pop();return this._data.length>0&&e!==void 0&&(this._data[0]=e,this._siftDown(0)),t}_bubbleUp(t){for(;t>0;){const e=t-1>>1;if(this._data[e].f<=this._data[t].f)break;[this._data[e],this._data[t]]=[this._data[t],this._data[e]],t=e}}_siftDown(t){const e=this._data.length;for(;;){let i=t;const n=2*t+1,a=2*t+2;if(n<e&&this._data[n].f<this._data[i].f&&(i=n),a<e&&this._data[a].f<this._data[i].f&&(i=a),i===t)break;[this._data[i],this._data[t]]=[this._data[t],this._data[i]],t=i}}}const Xp=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1}],il=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];function ms(s,t,e,i,n,a){return Math.abs(s-i)+Math.abs(t-n)+Math.abs(e-a)}function nl(s,t,e,i,n=0,a=null){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return[];const o=new Map,r=new Map,c=`${s.x},${s.y},${s.z}`;r.set(c,0);const l=new el;for(l.push({f:ms(s.x,s.y,s.z,t.x,t.y,t.z),node:s});l.size>0;){const h=l.pop();if(!h)continue;const{node:f}=h,p=`${f.x},${f.y},${f.z}`;if(f.x===t.x&&f.y===t.y&&f.z===t.z)return $p(o,p);const g=r.get(p)??0;for(const{dx:v,dy:m,dz:d}of il){const u=f.x+v,M=f.y+m,_=f.z+d;if(u<0||u>=i||M<0||M>=i||_<0||_>=i||a&&u===a.x&&M===a.y&&_===a.z)continue;const y=e[u*i*i+M*i+_];if(y===n||y===8)continue;if(d!==0){const A=f.z+d/2;if(e[f.x*i*i+f.y*i+A]===n)continue}const E=`${u},${M},${_}`,x=g+1;x<(r.get(E)??1/0)&&(o.set(E,f),r.set(E,x),l.push({f:x+ms(u,M,_,t.x,t.y,t.z),node:{x:u,y:M,z:_}}))}}return null}function $p(s,t){const e=[];let i=t;for(;s.has(i);){const n=s.get(i);if(!n)break;const[a,o,r]=i.split(",").map(Number);e.push({x:a,y:o,z:r}),i=`${n.x},${n.y},${n.z}`}return e.reverse(),e}function Kp(s,t,e,i,n=0,a=1/0,o=null){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return 0;const r=new Map,c=`${s.x},${s.y},${s.z}`;r.set(c,0);const l=new el;for(l.push({f:ms(s.x,s.y,s.z,t.x,t.y,t.z),node:s});l.size>0;){const h=l.pop();if(!h)continue;const{node:f}=h,p=`${f.x},${f.y},${f.z}`,g=r.get(p)??0;if(g>a)return 1/0;if(f.x===t.x&&f.y===t.y&&f.z===t.z)return g;for(const{dx:v,dy:m,dz:d}of il){const u=f.x+v,M=f.y+m,_=f.z+d;if(u<0||u>=i||M<0||M>=i||_<0||_>=i||o&&u===o.x&&M===o.y&&_===o.z)continue;const y=e[u*i*i+M*i+_];if(y===n||y===8)continue;if(d!==0){const A=f.z+d/2;if(e[f.x*i*i+f.y*i+A]===n)continue}const E=`${u},${M},${_}`,x=g+1;x<(r.get(E)??1/0)&&(r.set(E,x),l.push({f:x+ms(u,M,_,t.x,t.y,t.z),node:{x:u,y:M,z:_}}))}}return 1/0}function qp(s,t,e,i,n=0,a=10){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return 0;const o=[{x:s.x,y:s.y,z:s.z,dist:0}];let r=0;const c=new Map;for(c.set(`${s.x},${s.y},${s.z}`,0);r<o.length;){const l=o[r++];if(!(l.dist>a))for(const{dx:h,dy:f,dz:p}of Xp){const g=l.x+h,v=l.y+f,m=l.z+p;if(g<0||g>=i||v<0||v>=i||m<0||m>=i)continue;const d=e[g*i*i+v*i+m];if(d===n||d===8)continue;const u=`${g},${v},${m}`,_=m%2===0?0:1,y=l.dist+_;if(y<(c.get(u)??1/0)){if(c.set(u,y),g===t.x&&v===t.y&&m===t.z)return y;_===0?o.splice(r,0,{x:g,y:v,z:m,dist:y}):o.push({x:g,y:v,z:m,dist:y})}}}return 1/0}function jp(s,t,e,i,n,a){const o=[{x:s.x,y:s.y,z:s.z,path:[]}];let r=0;const c=new Uint8Array(i*i*i);for(c[s.x*i*i+s.y*i+s.z]=1;r<o.length;){const l=o[r++],h=`${l.x},${l.y},${l.z}`;if(!t.has(h))return l.path;const f=a(l.x,l.y,l.z,e,n,!1);for(const p of f){const g=p.x*i*i+p.y*i+p.z;c[g]||(c[g]=1,o.push({x:p.x,y:p.y,z:p.z,path:[...l.path,p]}))}}return null}class Zp{constructor(t,e,i){O(this,"maze");O(this,"id");O(this,"history");O(this,"visitedNodes");O(this,"pathToTarget");O(this,"x");O(this,"y");O(this,"z");O(this,"visualX");O(this,"visualY");O(this,"visualZ");O(this,"state");O(this,"lastPos");O(this,"jellyTime");O(this,"respawnThresholdPercentage");O(this,"lowCanvas");O(this,"lctx");this.maze=t,this.id=i,this.history=[],this.visitedNodes=new Set,this.pathToTarget=[],e?(this.x=e.x,this.y=e.y,this.z=e.z,this.visualX=e.x,this.visualY=e.y,this.visualZ=e.z,this.state="WANDERING",this.lastPos={x:this.x,y:this.y,z:this.z},this.visitedNodes.add(`${this.x},${this.y},${this.z}`)):(this.x=null,this.y=null,this.z=null,this.visualX=null,this.visualY=null,this.visualZ=null,this.state="SLEEP",this.lastPos=null),this.jellyTime=0,this.respawnThresholdPercentage=null,typeof document<"u"&&(this.lowCanvas=document.createElement("canvas"),this.lowCanvas.width=64,this.lowCanvas.height=64,this.lctx=this.lowCanvas.getContext("2d",{willReadFrequently:!0}))}generateCloudTexture(t=.016){if(this.state==="SLEEP"||(this.jellyTime+=t,typeof document>"u"||!this.lctx))return;const e=64,i=this.lctx;i.globalCompositeOperation="destination-out",i.fillStyle="rgba(0, 0, 0, 0.22)",i.fillRect(0,0,e,e),i.globalCompositeOperation="source-over";const n=this.jellyTime;try{const a=i.getImageData(0,0,e,e),o=a.data;for(let r=0;r<e;r++)for(let c=0;c<e;c++){const l=c-e/2,h=r-e/2,f=Math.sqrt(l*l+h*h),p=Math.sin(n*1.5+c*.08)*2.5,g=e*.35+p;if(f<g+Math.random()*1.5){const v=90+Math.floor(Math.random()*45),m=10+Math.floor(Math.random()*20),d=140+Math.floor(Math.random()*60),u=(r*e+c)*4;o[u]=v,o[u+1]=m,o[u+2]=d,o[u+3]=255}}i.putImageData(a,0,0)}catch{}if(Math.random()<.04){i.fillStyle=Math.random()<.7?"#ffffff":"#b3ffff";const a=e/2-8+Math.random()*16,o=e/2-8+Math.random()*16;i.fillRect(a,o,2+Math.random()*3,4+Math.random()*10)}if(Math.random()<.12){const a=Math.floor(Math.random()*3)+1,o=["#00ff66","#ff0055","#00ccff","#ffff00","#ffffff"];for(let r=0;r<a;r++){const c=Math.floor(Math.random()*e),l=Math.floor(Math.random()*e),h=c-e/2,f=l-e/2;if(Math.sqrt(h*h+f*f)<e*.32){const g=Math.floor(Math.random()*4)+2,v=Math.floor(Math.random()*2)+1;i.fillStyle=o[Math.floor(Math.random()*o.length)],i.fillRect(c,l,g,v)}}}if(Math.random()<.08){const a=Math.floor(Math.random()*e),o=Math.floor(Math.random()*6)+2,r=Math.floor(Math.random()*6)-3;try{const c=i.getImageData(0,a,e,o);i.clearRect(0,a,e,o),i.putImageData(c,r,a)}catch{}}}move(t,e,i){if(this.state==="SLEEP"||this.state==="DEAD_BY_JELLY"||this.x===null||this.y===null||this.z===null)return;const n=this.getValidNeighbors(e,i);if(n.length===0)return;const a=Math.round(Math.cbrt(e.length)),o=e.get?e.get(this.x,this.y,this.z):e[this.x*a*a+this.y*a+this.z]??0;(o===i.VISITED||o===i.JELLY_PORTAL)&&this.state!=="TELEPORT_TRACKING"&&this.state!=="TRACKING"&&(this.state="TRACKING",this.pathToTarget=[],this.visitedNodes.clear(),this.visitedNodes.add(`${this.x},${this.y},${this.z}`));let r;if(this.pathToTarget.length>0){const c=this.pathToTarget[0],l=e[c.x*a*a+c.y*a+c.z];(this.state==="TRACKING"?l===i.VISITED||l===i.START||l===i.EXIT||l===i.JELLY_PORTAL:l!==i.WALL)?r=this.pathToTarget.shift():this.pathToTarget=[]}if(!r)if(this.state==="TELEPORT_TRACKING")r=void 0;else{let c=this.findPathToNearestUnvisited(e,i);if((!c||c.length===0)&&(this.visitedNodes.clear(),this.visitedNodes.add(`${this.x},${this.y},${this.z}`),c=this.findPathToNearestUnvisited(e,i)),c&&c.length>0)this.pathToTarget=c,r=this.pathToTarget.shift();else{const l=this.lastPos||{x:this.x,y:this.y,z:this.z},h=n.filter(f=>f.x!==l.x||f.y!==l.y||f.z!==l.z);r=h.length>0?h[Math.floor(Math.random()*h.length)]:n[0]}}r&&(this.history.push({x:this.x,y:this.y,z:this.z}),this.history.length>2&&this.history.shift(),this.lastPos={x:this.x,y:this.y,z:this.z},this.x=r.x,this.y=r.y,this.z=r.z,this.visitedNodes.add(`${this.x},${this.y},${this.z}`))}findPathToTarget(t,e,i){const n=Math.round(Math.cbrt(e.length));return nl({x:this.x,y:this.y,z:this.z},t,e,n,i.WALL,this.maze.startPos)}findPathToNearestUnvisited(t,e){const i=Math.round(Math.cbrt(t.length));return jp({x:this.x,y:this.y,z:this.z},this.visitedNodes,t,i,e,(n,a,o,r,c)=>this.getValidNeighbors(r,c,n,a,o,this.state==="TRACKING"))}getValidNeighbors(t,e,i=this.x,n=this.y,a=this.z,o=this.state==="TRACKING"){const r=[],c=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}],l=Math.round(Math.cbrt(t.length));for(const h of c){const f=i+h.dx,p=n+h.dy,g=a+h.dz;if(f>=0&&f<l&&p>=0&&p<l&&g>=0&&g<l){const v=Math.floor(this.maze.startPos.x),m=Math.floor(this.maze.startPos.y),d=this.maze.startPos.z,u=this.maze.inactiveTeleportPos&&this.maze.inactiveTeleportPos.x===v&&this.maze.inactiveTeleportPos.y===m&&this.maze.inactiveTeleportPos.z===d;if(f===v&&p===m&&g===d&&!u)continue;const M=t[f*l*l+p*l+g];if(M===e.EXIT)continue;if(M!==e.WALL&&M!==8){if(h.dz!==0){const _=a+h.dz/2;if(t[i*l*l+n*l+_]===e.WALL)continue}o?(M===e.VISITED||M===e.START||M===e.EXIT||M===e.JELLY_PORTAL||this.maze.visitedCells&&this.maze.visitedCells.has(`${f},${p},${g}`))&&r.push({x:f,y:p,z:g}):r.push({x:f,y:p,z:g})}}}return r}}class Jp{constructor(t,e,i=null){O(this,"n");O(this,"branchingFactor");O(this,"size");O(this,"seed");O(this,"random");O(this,"matrix");O(this,"TYPES");O(this,"startPos");const n=t!==void 0?t:X.MAZE_DEGREE!==void 0?X.MAZE_DEGREE:8,a=e!==void 0?e:X.BRANCHING_FACTOR!==void 0?X.BRANCHING_FACTOR:.2;this.n=Math.max(3,Math.min(16,n)),this.branchingFactor=Math.max(0,Math.min(1,a)),this.size=2*this.n+1,i!=null?(this.seed=i,this.random=this.createSeededRandom(i)):(this.seed=null,this.random=Math.random),this.matrix=this.initMatrix(),this.TYPES={WALL:0,PATH:1,VISITED:2,START:3,EXIT:4,ELEVATOR_VISITED:5,TELEPORT:6,KEY:7,STATUE:8,MANA:9,JELLY_PORTAL:10},this.startPos={x:X.PLAYER_START_X!==void 0?X.PLAYER_START_X:.5,y:X.PLAYER_START_Y!==void 0?X.PLAYER_START_Y:1.5,z:0}}createSeededRandom(t){let e=0;if(typeof t=="string")for(let i=0;i<t.length;i++)e=Math.imul(31,e)+t.charCodeAt(i)|0;else e=t|0;return function(){let i=e+=1831565813;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}initMatrix(){return new Int8Array(this.size*this.size*this.size)}_idx(t,e,i){return t*this.size*this.size+e*this.size+i}generate(){const t=[],e=1+2*Math.floor(this.random()*this.n),i=1+2*Math.floor(this.random()*this.n),n=1+2*Math.floor(this.random()*this.n);for(this.matrix[this._idx(e,i,n)]=this.TYPES.PATH,t.push({x:e,y:i,z:n});t.length>0;){let r=this.random()>this.branchingFactor?t.length-1:Math.floor(this.random()*t.length);const c=t[r],l=this.getUnvisitedNeighbors(c.x,c.y,c.z);if(l.length>0){const h=l[Math.floor(this.random()*l.length)];this.matrix[this._idx(h.x,h.y,h.z)]=this.TYPES.PATH,this.matrix[this._idx((c.x+h.x)/2,(c.y+h.y)/2,(c.z+h.z)/2)]=this.TYPES.PATH,t.push(h)}else t.splice(r,1)}this.setEntryAndExit(),this.placeTeleports(),this.placeKeys(),this.applyBraid(),this.placeStatues(),this.placeManas();const a=this.size,o=this.matrix;return o.size=a,o.get=(r,c,l)=>o[r*a*a+c*a+l],o.set=(r,c,l,h)=>{o[r*a*a+c*a+l]=h},o}getUnvisitedNeighbors(t,e,i){const n=[],a=[{dx:2,dy:0,dz:0},{dx:-2,dy:0,dz:0},{dx:0,dy:2,dz:0},{dx:0,dy:-2,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const o of a){const r=t+o.dx,c=e+o.dy,l=i+o.dz;this.isValid(r,c,l)&&this.matrix[this._idx(r,c,l)]===this.TYPES.WALL&&n.push({x:r,y:c,z:l})}return n}isValid(t,e,i){return t>0&&t<this.size-1&&e>0&&e<this.size-1&&i>0&&i<this.size-1}setEntryAndExit(){const t=1+2*Math.floor(this.random()*this.n);this.matrix[this._idx(1,1,t)]=this.TYPES.PATH,this.matrix[this._idx(0,1,t)]=this.TYPES.TELEPORT,this.startPos={x:X.PLAYER_START_X!==void 0?X.PLAYER_START_X:.5,y:X.PLAYER_START_Y!==void 0?X.PLAYER_START_Y:1.5,z:t};const e=1+2*Math.floor(this.random()*this.n),i=2*this.n-1;this.matrix[this._idx(i,i,e)]=this.TYPES.PATH,this.matrix[this._idx(2*this.n,i,e)]=this.TYPES.EXIT}_findExitPos(){for(let t=0;t<this.size;t++)for(let e=0;e<this.size;e++)for(let i=0;i<this.size;i++)if(this.matrix[this._idx(t,e,i)]===this.TYPES.EXIT)return{x:t,y:e,z:i};return{x:2*this.n,y:2*this.n-1,z:this.startPos.z}}_collectDeadEndsAndPaths(){const t=[],e=[],i=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1}];for(let n=1;n<this.size-1;n++)for(let a=1;a<this.size-1;a++)for(let o=1;o<this.size-1;o++){if(this.matrix[this._idx(n,a,o)]!==this.TYPES.PATH)continue;const r=o+1<this.size&&this.matrix[this._idx(n,a,o+1)]!==this.TYPES.WALL,c=o-1>=0&&this.matrix[this._idx(n,a,o-1)]!==this.TYPES.WALL;if(r||c)continue;let l=0;for(const h of i){const f=n+h.dx,p=a+h.dy,g=o+h.dz;f>=0&&f<this.size&&p>=0&&p<this.size&&g>=0&&g<this.size&&this.matrix[this._idx(f,p,g)]!==this.TYPES.WALL&&l++}(l===1?t:e).push({x:n,y:a,z:o})}return{deadEnds:t,normalPaths:e}}_greedyFill(t,e,i,n,a){const o={x:0,y:1,z:this.startPos.z},r=this._findExitPos(),c=(f,p)=>Math.abs(f.x-p.x)+Math.abs(f.y-p.y)+Math.abs(f.z-p.z);let l=4,h=4;for(;t.length<i&&l>0;){a&&(t.length=0);const f=e.filter(p=>c(p,o)<l||c(p,r)<l?!1:!n.includes(this.matrix[this._idx(p.x,p.y,p.z)]));for(;t.length<i;){let p=null,g=-1;for(const v of f){if(t.some(d=>d.x===v.x&&d.y===v.y&&d.z===v.z))continue;let m=1/0;for(const d of t){const u=c(v,d);u<m&&(m=u)}if(m>=h){const d=Math.min(c(v,o),c(v,r),m);d>g&&(g=d,p=v)}}if(p)t.push(p);else break}t.length<i&&(h>1?h--:l--)}}placeTeleports(){const t=X.getTeleportCount(this.n),{deadEnds:e,normalPaths:i}=this._collectDeadEndsAndPaths(),n=[];this._greedyFill(n,e,t,[],!0),n.length<t&&this._greedyFill(n,i,t,[],!1);for(const a of n)this.matrix[this._idx(a.x,a.y,a.z)]=this.TYPES.TELEPORT}placeKeys(){const t=X.getKeyCount(this.n),{deadEnds:e,normalPaths:i}=this._collectDeadEndsAndPaths(),n=[];this._greedyFill(n,e,t,[this.TYPES.TELEPORT],!0),n.length<t&&this._greedyFill(n,i,t,[this.TYPES.TELEPORT],!1);for(const a of n)this.matrix[this._idx(a.x,a.y,a.z)]=this.TYPES.KEY}applyBraid(){const t=this.size,e=[];for(let o=1;o<t-1;o++)for(let r=1;r<t-1;r++)for(let c=1;c<t-1;c++)if(this.matrix[this._idx(o,r,c)]===this.TYPES.WALL){const l=o%2===0&&r%2!==0&&c%2!==0,h=r%2===0&&o%2!==0&&c%2!==0,f=c%2===0&&o%2!==0&&r%2!==0;if(l){const p=this.matrix[this._idx(o-1,r,c)],g=this.matrix[this._idx(o+1,r,c)];p!==this.TYPES.WALL&&g!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&g!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&g!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&g!==this.TYPES.KEY&&e.push({x:o,y:r,z:c,type:"X"})}else if(h){const p=this.matrix[this._idx(o,r-1,c)],g=this.matrix[this._idx(o,r+1,c)];p!==this.TYPES.WALL&&g!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&g!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&g!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&g!==this.TYPES.KEY&&e.push({x:o,y:r,z:c,type:"Y"})}else if(f){const p=this.matrix[this._idx(o,r,c-1)],g=this.matrix[this._idx(o,r,c+1)];p!==this.TYPES.WALL&&g!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&g!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&g!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&g!==this.TYPES.KEY&&e.push({x:o,y:r,z:c,type:"Z"})}}for(let o=e.length-1;o>0;o--){const r=Math.floor(this.random()*(o+1)),c=e[o];e[o]=e[r],e[r]=c}const i=X.BRAID_FACTOR||.1,n=Math.floor(e.length*i);let a=0;for(const o of e){if(a>=n)break;this.isWideConnection(o.x,o.y,o.z)||o.type==="Z"&&this.isAdjacentElevator(o.x,o.y,o.z)||(this.matrix[this._idx(o.x,o.y,o.z)]=this.TYPES.PATH,a++)}}isWideConnection(t,e,i){const n=this.size,a=(l,h,f)=>l<0||l>=n||h<0||h>=n||f<0||f>=n?!1:l===t&&h===e&&f===i?!0:this.matrix[this._idx(l,h,f)]!==this.TYPES.WALL;return!!(a(t,e+1,i)&&a(t+1,e,i)&&a(t+1,e+1,i)||a(t-1,e,i)&&a(t-1,e+1,i)&&a(t,e+1,i)||a(t,e-1,i)&&a(t+1,e-1,i)&&a(t+1,e,i)||a(t-1,e-1,i)&&a(t,e-1,i)&&a(t-1,e,i)||a(t,e,i+1)&&a(t+1,e,i)&&a(t+1,e,i+1)||a(t-1,e,i)&&a(t-1,e,i+1)&&a(t,e,i+1)||a(t,e,i-1)&&a(t+1,e,i-1)&&a(t+1,e,i)||a(t-1,e,i-1)&&a(t,e,i-1)&&a(t-1,e,i)||a(t,e,i+1)&&a(t,e+1,i)&&a(t,e+1,i+1)||a(t,e-1,i)&&a(t,e-1,i+1)&&a(t,e,i+1)||a(t,e,i-1)&&a(t,e+1,i-1)&&a(t,e+1,i)||a(t,e-1,i-1)&&a(t,e,i-1)&&a(t,e-1,i))}isAdjacentElevator(t,e,i){const n=this.size,a=[{dx:-1,dy:-1},{dx:-1,dy:0},{dx:-1,dy:1},{dx:0,dy:-1},{dx:0,dy:1},{dx:1,dy:-1},{dx:1,dy:0},{dx:1,dy:1}];for(const o of a){const r=t+o.dx,c=e+o.dy;if(!(r<0||r>=n||c<0||c>=n)&&(this.matrix[this._idx(r,c,i)]!==this.TYPES.WALL||i-2>=0&&this.matrix[this._idx(r,c,i-2)]!==this.TYPES.WALL||i+2<n&&this.matrix[this._idx(r,c,i+2)]!==this.TYPES.WALL))return!0}return!1}isDeadEndZ(t,e,i){if(t%2===0||e%2===0||i%2===0)return!1;const n=this.matrix[this._idx(t,e,i)];if(n===this.TYPES.WALL||n===this.TYPES.START||n===this.TYPES.EXIT||n===this.TYPES.TELEPORT||n===this.TYPES.KEY)return!1;const a=this.size,o=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(const c of o){const l=t+c.dx,h=e+c.dy;if(!(l<0||l>=a||h<0||h>=a)&&this.matrix[this._idx(l,h,i)]!==this.TYPES.WALL)return!1}let r=0;return i-1>=0&&this.matrix[this._idx(t,e,i-1)]!==this.TYPES.WALL&&r++,i+1<a&&this.matrix[this._idx(t,e,i+1)]!==this.TYPES.WALL&&r++,r===1}isSolvable(){const t=this.size,e={x:Math.floor(this.startPos.x),y:Math.floor(this.startPos.y),z:this.startPos.z},i=[];let n=null;for(let l=0;l<t;l++)for(let h=0;h<t;h++)for(let f=0;f<t;f++){const p=this.matrix[this._idx(l,h,f)];p===this.TYPES.KEY?i.push(`${l},${h},${f}`):p===this.TYPES.EXIT&&(n=`${l},${h},${f}`)}const a=[e],o=new Set([`${e.x},${e.y},${e.z}`]),r=new Set;let c=!1;for(;a.length>0;){const l=a.shift();if(!l)continue;const h=`${l.x},${l.y},${l.z}`;i.includes(h)&&r.add(h),h===n&&(c=!0);const f=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(const p of f){const g=l.x+p.dx,v=l.y+p.dy,m=l.z;if(g>=0&&g<t&&v>=0&&v<t){const d=`${g},${v},${m}`,u=this.matrix[this._idx(g,v,m)];u!==this.TYPES.WALL&&u!==this.TYPES.STATUE&&!o.has(d)&&(o.add(d),a.push({x:g,y:v,z:m}))}}for(const p of[-2,2]){const g=l.z+p;if(g>=0&&g<t){const v=l.z+p/2,m=this.matrix[this._idx(l.x,l.y,v)],d=this.matrix[this._idx(l.x,l.y,g)];if(m!==this.TYPES.WALL&&m!==this.TYPES.STATUE&&d!==this.TYPES.WALL&&d!==this.TYPES.STATUE){const u=`${l.x},${l.y},${g}`;o.has(u)||(o.add(u),a.push({x:l.x,y:l.y,z:g}))}}}}if(!c||r.size!==i.length)return!1;for(let l=0;l<t;l++)for(let h=0;h<t;h++)for(let f=1;f<t;f+=2){const p=this.matrix[this._idx(l,h,f)];if(p!==this.TYPES.WALL&&p!==this.TYPES.STATUE&&!o.has(`${l},${h},${f}`))return!1}return!0}placeStatues(){const t=this.size,e=[];for(let r=0;r<t;r++)for(let c=0;c<t;c++)for(let l=0;l<t;l++)this.isDeadEndZ(r,c,l)&&e.push({x:r,y:c,z:l});let i=0;const n=(r,c,l,h,f)=>{const p=this._idx(r,c,l),g=this.matrix[p];g!==h&&(this.matrix[p]=h,f.push({x:r,y:c,z:l,oldVal:g}))},a=r=>{for(let c=r.length-1;c>=0;c--){const l=r[c];this.matrix[this._idx(l.x,l.y,l.z)]=l.oldVal}},o=(r,c,l,h)=>{n(r,c,l,this.TYPES.STATUE,h);const f=l-1,p=l+1;f>=0&&n(r,c,f,this.TYPES.WALL,h),p<t&&n(r,c,p,this.TYPES.WALL,h);const g=[-2,2];for(const v of g){const m=l+v;m>=0&&m<t&&this.isDeadEndZ(r,c,m)&&o(r,c,m,h)}};for(const r of e){if(this.matrix[this._idx(r.x,r.y,r.z)]===this.TYPES.STATUE||!this.isDeadEndZ(r.x,r.y,r.z))continue;const c=[];if(o(r.x,r.y,r.z,c),this.isSolvable()){const l=c.filter(h=>h.oldVal!==this.TYPES.STATUE&&this.matrix[this._idx(h.x,h.y,h.z)]===this.TYPES.STATUE).length;i+=l}else a(c)}return i}placeManas(){const{deadEnds:t}=this._collectDeadEndsAndPaths();for(const e of t){const i=this._idx(e.x,e.y,e.z);if(this.matrix[i]===this.TYPES.PATH){let a=!1;e.z-1>=0&&this.matrix[this._idx(e.x,e.y,e.z-1)]!==this.TYPES.WALL&&(a=!0),e.z+1<this.size&&this.matrix[this._idx(e.x,e.y,e.z+1)]!==this.TYPES.WALL&&(a=!0),a||(this.matrix[i]=this.TYPES.MANA)}}}}class Qp{constructor(){O(this,"uiFloorSpan");O(this,"uiMap3dContainer");O(this,"uiMobileControls");O(this,"uiProximeterContainer");O(this,"uiProximeterCells");O(this,"uiProximeterBar");O(this,"uiVictoryScreen");O(this,"uiGameOverScreen");O(this,"uiMobileUp");O(this,"uiMobileDown");O(this,"uiMobileMap");O(this,"uiSavingIndicator");O(this,"savingIndicatorTimeout");O(this,"uiVisitedPercent");O(this,"uiHunterStatusVal");O(this,"uiStatusLabel");O(this,"uiMarqueeContainer");O(this,"uiLegendHunter");O(this,"uiCanvas");O(this,"uiKeysCollected");O(this,"uiKeysTotal");O(this,"uiKeysList");O(this,"uiPauseScreen");O(this,"uiMobilePauseBtn");O(this,"uiPathfindersRemaining");O(this,"uiPathfindersTotal");O(this,"uiControlsHintContent");O(this,"uiManaCollectedDesktop");O(this,"uiManaTotalDesktop");O(this,"uiManaCollectedMobile");O(this,"uiManaTotalMobile");O(this,"uiJellyPortalCountDesktop");O(this,"uiJellyPortalCountMobile");O(this,"uiMobileJellyPortalBtn");O(this,"onInfoBanner");O(this,"bannerMessage","");this.uiFloorSpan=document.getElementById("current-floor"),this.uiMap3dContainer=document.getElementById("map3d-container"),this.uiMobileControls=document.getElementById("mobile-controls"),this.uiProximeterContainer=document.getElementById("proximeter-container"),this.uiProximeterCells=document.querySelectorAll(".proximeter-cell"),this.uiProximeterBar=document.querySelector(".proximeter-bar"),this.uiVictoryScreen=document.getElementById("victory-screen"),this.uiGameOverScreen=document.getElementById("game-over-screen"),this.uiMobileUp=document.getElementById("mobile-up"),this.uiMobileDown=document.getElementById("mobile-down"),this.uiMobileMap=document.getElementById("mobile-map"),this.uiSavingIndicator=document.getElementById("saving-indicator"),this.savingIndicatorTimeout=null,this.uiVisitedPercent=document.getElementById("visited-percent"),this.uiHunterStatusVal=document.getElementById("hunter-status-val"),this.uiStatusLabel=document.querySelector("#hunter-status-panel .status-label"),this.uiMarqueeContainer=document.querySelector(".status-marquee-container"),this.uiLegendHunter=document.getElementById("legend-hunter"),this.uiCanvas=document.getElementById("main-2d-canvas"),this.uiKeysCollected=document.getElementById("keys-collected-count"),this.uiKeysTotal=document.getElementById("keys-total-count"),this.uiKeysList=document.getElementById("keys-list-container"),this.uiPauseScreen=document.getElementById("pause-screen"),this.uiMobilePauseBtn=document.getElementById("mobile-pause-btn"),this.uiPathfindersRemaining=document.getElementById("pathfinders-remaining-count"),this.uiPathfindersTotal=document.getElementById("pathfinders-total-count"),this.uiControlsHintContent=document.getElementById("controls-hint-content"),this.uiManaCollectedDesktop=document.getElementById("mana-collected-count-desktop"),this.uiManaTotalDesktop=document.getElementById("mana-total-count-desktop"),this.uiManaCollectedMobile=document.getElementById("mana-collected-count-mobile"),this.uiManaTotalMobile=document.getElementById("mana-total-count-mobile"),this.uiJellyPortalCountDesktop=document.getElementById("jelly-portal-count-desktop"),this.uiJellyPortalCountMobile=document.getElementById("jelly-portal-count-mobile"),this.uiMobileJellyPortalBtn=document.getElementById("mobile-jelly-portal-btn"),this.localizeDOM()}localizeDOM(t=Pn){rs(t)}showPause(){this.uiPauseScreen&&this.uiPauseScreen.classList.remove("hidden")}hidePause(){this.uiPauseScreen&&this.uiPauseScreen.classList.add("hidden")}showVictory(t=0,e=0,i=8,n=0,a=0,o=0){this.hideGameUI(),this.uiVictoryScreen&&this.uiVictoryScreen.classList.remove("hidden");const r=document.getElementById("victory-mana-count");r&&(r.innerText=`${a}/${o}`);const c=document.getElementById("victory-completion-rate");c&&(c.innerText=`${t}%`);const l=document.getElementById("victory-deaths-count");l&&(l.innerText=String(e));const h=document.getElementById("victory-maze-degree");h&&(h.innerText=String(i));const f=document.getElementById("victory-completion-time");if(f){const p=Math.floor(n/3600),g=Math.floor(n%3600/60),v=Math.floor(n%60),m=u=>String(u).padStart(2,"0"),d=p>0?`${m(p)}:${m(g)}:${m(v)}`:`${m(g)}:${m(v)}`;f.innerText=d}}showDeath(t=!1){this.hideGameUI(),this.uiGameOverScreen&&this.uiGameOverScreen.classList.remove("hidden");const e=document.getElementById("continue-btn-death");e&&(e.style.display=t?"":"none")}hideGameUI(){this.uiMobileControls&&this.uiMobileControls.classList.add("hidden"),this.uiMobilePauseBtn&&this.uiMobilePauseBtn.classList.add("hidden"),this.uiMap3dContainer&&this.uiMap3dContainer.classList.add("hidden"),this.uiProximeterContainer&&this.uiProximeterContainer.classList.add("hidden"),this.uiProximeterBar&&this.uiProximeterBar.classList.remove("critical-alert"),this.uiProximeterCells.forEach(t=>t.classList.remove("active")),this.uiCanvas&&this.uiCanvas.classList.remove("hunted-map-effect","nearby-map-effect")}initGameUI(t=!1){this.uiMobileControls&&this.uiMobileControls.classList.remove("hidden"),this.uiMobilePauseBtn&&this.uiMobilePauseBtn.classList.remove("hidden"),this.uiMobileMap&&(this.uiMobileMap.disabled=!0),t?(this.uiStatusLabel&&(this.uiStatusLabel.innerText="SAFE MODE:"),this.uiHunterStatusVal&&(this.uiHunterStatusVal.innerText="ACTIVE",this.uiHunterStatusVal.className="status-marquee-text status--scanning"),this.uiLegendHunter&&this.uiLegendHunter.classList.add("hidden")):(this.uiStatusLabel&&(this.uiStatusLabel.innerText="HUNTER STATUS:"),this.uiLegendHunter&&this.uiLegendHunter.classList.remove("hidden"))}updateVisitedPercent(t){this.uiVisitedPercent&&(this.uiVisitedPercent.innerText=String(t))}updateManaHUD(t,e){this.uiManaCollectedDesktop&&(this.uiManaCollectedDesktop.innerText=String(t)),this.uiManaTotalDesktop&&(this.uiManaTotalDesktop.innerText=String(e)),this.uiManaCollectedMobile&&(this.uiManaCollectedMobile.innerText=String(t)),this.uiManaTotalMobile&&(this.uiManaTotalMobile.innerText=String(e))}updateJellyPortalHUD(t){this.uiJellyPortalCountDesktop&&(this.uiJellyPortalCountDesktop.innerText=String(t)),this.uiJellyPortalCountMobile&&(this.uiJellyPortalCountMobile.innerText=String(t)),this.uiMobileJellyPortalBtn&&(t>0?this.uiMobileJellyPortalBtn.classList.add("jelly-portal-btn--active"):this.uiMobileJellyPortalBtn.classList.remove("jelly-portal-btn--active"))}updateFloor(t,e,i){if(this.uiFloorSpan){const n=(t+1)/2;this.uiFloorSpan.innerText=String(n)}this.uiMobileUp&&(this.uiMobileUp.disabled=!e),this.uiMobileDown&&(this.uiMobileDown.disabled=!i)}updateKeysHUD(t,e){if(this.uiKeysCollected&&(this.uiKeysCollected.innerText=String(t)),this.uiKeysTotal&&(this.uiKeysTotal.innerText=String(e)),this.uiKeysList){this.uiKeysList.innerHTML="";for(let i=0;i<e;i++){const n=document.createElement("span");n.className="key-dot"+(i<t?" key-dot--collected":""),this.uiKeysList.appendChild(n)}}}updatePathfindersHUD(t,e){this.uiPathfindersRemaining&&(this.uiPathfindersRemaining.innerText=String(t)),this.uiPathfindersTotal&&(this.uiPathfindersTotal.innerText=String(e))}showSavingIndicator(){this.uiSavingIndicator&&(this.savingIndicatorTimeout&&clearTimeout(this.savingIndicatorTimeout),this.uiSavingIndicator.classList.remove("hidden"),this.uiSavingIndicator.classList.add("saving-pulse"),this.savingIndicatorTimeout=window.setTimeout(()=>{this.uiSavingIndicator&&(this.uiSavingIndicator.classList.add("hidden"),this.uiSavingIndicator.classList.remove("saving-pulse"))},2e3))}showInfoBanner(t){this.bannerMessage=t,this.onInfoBanner&&this.onInfoBanner(t)}setMap3DVisible(t){this.uiMap3dContainer&&(t?this.uiMap3dContainer.classList.remove("hidden"):this.uiMap3dContainer.classList.add("hidden"))}updateHazardWarning(t,e,i=!1,n=!1){if(!this.uiHunterStatusVal)return;let a=Ot("statusScanning"),o="status--scanning",r=!1;i?(a=Ot("statusActive"),o="status--scanning"):n?(a=Ot("statusSleeping"),o="status--sleeping"):e>0?(a=Ot("statusConverging",{ticks:e}),o="status--converging",r=!0):t&&(a=Ot("statusTracking"),o="status--tracking",r=!0),this.uiHunterStatusVal.innerText!==a&&(this.uiHunterStatusVal.innerText=a,this.uiHunterStatusVal.className="status-marquee-text "+o),this.uiCanvas&&(r?this.uiCanvas.classList.add("hunted-map-effect"):this.uiCanvas.classList.remove("hunted-map-effect"))}setNearbyWarning(t){this.uiCanvas&&(t?this.uiCanvas.classList.add("nearby-map-effect"):this.uiCanvas.classList.remove("nearby-map-effect"))}updateProximeter(t,e,i){if(!this.uiProximeterContainer)return;if(e>0&&!i)this.uiProximeterContainer.classList.remove("hidden");else{this.uiProximeterContainer.classList.add("hidden");return}let n=0;t<=10&&(n=11-t),this.uiProximeterCells.forEach(a=>{parseInt(a.getAttribute("data-index")||"0")<=n?a.classList.add("active"):a.classList.remove("active")}),this.uiProximeterBar&&(n===10?this.uiProximeterBar.classList.add("critical-alert"):this.uiProximeterBar.classList.remove("critical-alert"))}updateMobileMapButton(t,e,i,n=!1){this.uiMobileMap&&i&&(t&&!e?(this.uiMobileMap.innerText=Ot("teleport"),n?(this.uiMobileMap.style.borderColor="#a020f0",this.uiMobileMap.style.color="#a020f0",this.uiMobileMap.style.background="rgba(160, 32, 240, 0.2)"):(this.uiMobileMap.style.borderColor="var(--clr-teleport, #ff8c00)",this.uiMobileMap.style.color="var(--clr-teleport, #ff8c00)",this.uiMobileMap.style.background="rgba(255, 140, 0, 0.2)")):(this.uiMobileMap.innerText=Ot("map"),this.uiMobileMap.style.borderColor="",this.uiMobileMap.style.color="",this.uiMobileMap.style.background=""))}updateControlsHint(t,e=!0){this.uiControlsHintContent&&(t==="gamepad"?this.uiControlsHintContent.innerHTML=`
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
            `)}destroy(){this.savingIndicatorTimeout&&clearTimeout(this.savingIndicatorTimeout)}}class tm{constructor(){O(this,"keys");O(this,"touchStart");O(this,"touchMoveVector");O(this,"preventScrollKeys");O(this,"handleKeyDown");O(this,"handleKeyUp");O(this,"handleTouchStart");O(this,"handleTouchMove");O(this,"handleTouchEnd");this.keys={},this.touchStart=null,this.touchMoveVector=null,this.preventScrollKeys=["arrowup","arrowdown","arrowleft","arrowright"," ","pageup","pagedown"],this.handleKeyDown=null,this.handleKeyUp=null,this.handleTouchStart=null,this.handleTouchMove=null,this.handleTouchEnd=null,this.init()}init(){this.handleKeyDown=t=>{const e=t.key.toLowerCase();this.keys[e]=!0,this.preventScrollKeys.includes(e)&&t.preventDefault()},this.handleKeyUp=t=>{this.keys[t.key.toLowerCase()]=!1},window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp)}setupTouch(t,e){this.handleTouchStart=i=>{const n=i.target;t()||e()||n&&n.closest&&n.closest("button")||(i.cancelable&&i.preventDefault(),this.touchStart={x:i.touches[0].clientX,y:i.touches[0].clientY})},this.handleTouchMove=i=>{if(!this.touchStart||t()||e())return;i.cancelable&&i.preventDefault();const n=i.touches[0].clientX-this.touchStart.x,a=i.touches[0].clientY-this.touchStart.y,o=Math.sqrt(n*n+a*a);o>10&&(this.touchMoveVector={x:n/o,y:a/o})},this.handleTouchEnd=()=>{this.touchStart=null,this.touchMoveVector=null},window.addEventListener("touchstart",this.handleTouchStart,{passive:!1}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),window.addEventListener("touchend",this.handleTouchEnd)}destroy(){this.handleKeyDown&&window.removeEventListener("keydown",this.handleKeyDown),this.handleKeyUp&&window.removeEventListener("keyup",this.handleKeyUp),this.handleTouchStart&&window.removeEventListener("touchstart",this.handleTouchStart),this.handleTouchMove&&window.removeEventListener("touchmove",this.handleTouchMove),this.handleTouchEnd&&window.removeEventListener("touchend",this.handleTouchEnd)}}const Da="void-escape-save";function em(s){const t=new Uint8Array(s.buffer);let e="";for(let i=0;i<t.length;i++)e+=String.fromCharCode(t[i]);return btoa(e)}function im(s){const t=atob(s),e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return new Int8Array(e.buffer)}function nm(s){return{x:s.x,y:s.y,z:s.z,id:s.id,state:s.state,lastPos:s.lastPos?{...s.lastPos}:null,history:s.history.map(t=>({...t})),visitedNodes:Array.from(s.visitedNodes),pathToTarget:s.pathToTarget.map(t=>({...t})),respawnThresholdPercentage:s.respawnThresholdPercentage!==void 0?s.respawnThresholdPercentage:null}}function ns(s){try{const t={version:1,timestamp:Date.now(),degree:s.degree,branchingFactor:s.branchingFactor,isSafeMode:s.isSafeMode,seed:s.seed,mazeSize:s.mazeGen.size,mazeStartPos:{...s.mazeGen.startPos},matrix:em(s.mazeGen.matrix),player:{...s.player},hunters:s.hunters.map(nm),discoveredTeleports:Array.from(s.discoveredTeleports),inactiveTeleportPos:s.inactiveTeleportPos?{...s.inactiveTeleportPos}:null,teleportCooldownTicks:s.teleportCooldownTicks,revealedPathSet:Array.from(s.revealedPathSet),keysCollected:s.keysCollected,totalKeys:s.totalKeys,manaCollected:s.manaCollected,totalMana:s.totalMana,jellyPortalCount:s.jellyPortalCount,totalPathfinders:s.totalPathfinders,pathfindersRemaining:s.pathfindersRemaining,pathfinderRewardsGranted:s.pathfinderRewardsGranted!==void 0?s.pathfinderRewardsGranted:0,mapCompletion100Triggered:s.mapCompletion100Triggered||!1,dialogueUpTriggered:s.dialogueUpTriggered||!1,dialogueDownTriggered:s.dialogueDownTriggered||!1,dialogueWhichWayTriggered:s.dialogueWhichWayTriggered||!1,dialogueDetectedTriggered:s.dialogueDetectedTriggered||!1,hunterOnSameFloorDetected:s.hunterOnSameFloorDetected||!1,deathsCount:s.deathsCount!==void 0?s.deathsCount:0,elapsedTime:s.elapsedTime!==void 0?s.elapsedTime:0};localStorage.setItem(Da,JSON.stringify(t))}catch(t){console.warn("[SaveManager] Could not save game state:",t)}}function sl(){try{const s=localStorage.getItem(Da);if(!s)return null;const t=JSON.parse(s);return!t||t.version!==1?null:t}catch(s){return console.warn("[SaveManager] Could not load save data:",s),null}}function al(){localStorage.removeItem(Da)}function _o(){return sl()!==null}function sm(s,t){s.x=t.x,s.y=t.y,s.z=t.z,s.visualX=t.x,s.visualY=t.y,s.visualZ=t.z,s.state=t.state,s.lastPos=t.lastPos?{...t.lastPos}:null,s.history=t.history.map(e=>({...e})),s.visitedNodes=new Set(t.visitedNodes),s.pathToTarget=t.pathToTarget.map(e=>({...e})),s.respawnThresholdPercentage=t.respawnThresholdPercentage!==void 0?t.respawnThresholdPercentage:null}function am(s,t){const e=im(t);for(let i=0;i<e.length;i++)s.matrix[i]=e[i]}function aa(s,t,e){return Math.abs(t-s)<=e?t:s+Math.sign(t-s)*e}class yo{constructor(t,e,i=null){O(this,"degree");O(this,"branchingFactor");O(this,"isSafeMode");O(this,"vScale");O(this,"ui");O(this,"input");O(this,"canvas");O(this,"ctx");O(this,"seed");O(this,"mazeGen");O(this,"maze");O(this,"isResumedFromSave");O(this,"mapCompletion100Triggered");O(this,"hunterOnSameFloorDetected");O(this,"dialogueUpTriggered");O(this,"dialogueDownTriggered");O(this,"dialogueWhichWayTriggered");O(this,"dialogueDetectedTriggered");O(this,"wallImage");O(this,"floorImage");O(this,"keyImage");O(this,"manaImage");O(this,"statueImage");O(this,"mageImages");O(this,"playerSide");O(this,"playerVertical");O(this,"playerWalkCycle");O(this,"playerSquashTargetX");O(this,"playerSquashTargetY");O(this,"playerSquashX");O(this,"playerSquashY");O(this,"player");O(this,"hunters");O(this,"keyMeshes");O(this,"exitMesh");O(this,"keysCollected");O(this,"totalKeys");O(this,"manaCollected");O(this,"totalMana");O(this,"manaMeshes");O(this,"totalPathfinders");O(this,"pathfindersRemaining");O(this,"activeMapFloor");O(this,"visualActiveFloor");O(this,"mapCursor");O(this,"pathfinderRewardsGranted");O(this,"isometricCanvas");O(this,"isometricCtx");O(this,"floorClickRects");O(this,"teleportModalClickRects");O(this,"mapZoom");O(this,"mapPanOffsetX");O(this,"mapPanOffsetY");O(this,"isZoomTransitionActive");O(this,"zoomTransitionTimer");O(this,"preloadedStoryImages");O(this,"storyImagesLoadedCount");O(this,"storyImagesTotalCount");O(this,"storyImagesPreloadPromise");O(this,"lastFrameTime");O(this,"revealedPathSet");O(this,"activePathReveal");O(this,"revealedPathProgress");O(this,"knownMeshes");O(this,"gridMeshes");O(this,"pathRevealInterval");O(this,"pathfinderBlockedUntil");O(this,"isMap3DActive");O(this,"isGameOver");O(this,"deathAnimation");O(this,"notificationQueue");O(this,"activeNotification");O(this,"isPaused");O(this,"isDestroyed");O(this,"isIntroPlaying");O(this,"isStoryActive");O(this,"pulsatingMaterials");O(this,"hunterMeshes");O(this,"discoveredTeleports");O(this,"visitedCells");O(this,"lastSavePos");O(this,"suppressWakeHuntersBanner");O(this,"allTeleports");O(this,"vortexAngles");O(this,"isTouchDevice");O(this,"isMouseOrTouchDetected");O(this,"teleportGoBtnClickRect");O(this,"staticMapCacheCanvas");O(this,"staticMapCacheCtx");O(this,"staticMapCacheDirty");O(this,"zoomVisibleCells");O(this,"scene");O(this,"camera");O(this,"renderer");O(this,"controls");O(this,"teleportMeshes");O(this,"inactiveTeleportPos");O(this,"teleportCooldownTicks");O(this,"storyImages");O(this,"storyOpacity");O(this,"storyOverlayOpacity");O(this,"storyFrameIndex");O(this,"storyTimer");O(this,"storyTextQueue");O(this,"storyTextIndex");O(this,"storyDisplayedText");O(this,"storyState");O(this,"storyWaitTimer");O(this,"storyTextHeight");O(this,"storyWidthProgress");O(this,"storyCharIndex");O(this,"storyTypeTimer");O(this,"storyMsgIndex");O(this,"storyCloseProgress");O(this,"selectedTeleportIndex");O(this,"teleportConfirmModalActive");O(this,"teleportModalSelection");O(this,"teleportDotsClickRects");O(this,"isTeleportMode");O(this,"floorTransition");O(this,"hasSavePoint");O(this,"lastPlayerCell");O(this,"exitPathfinderUnlocked");O(this,"isZoomActive");O(this,"lastInputDevice");O(this,"fullyRevealedCells");O(this,"revealedCellsAnimation");O(this,"skipCellAnimations");O(this,"activeSkipHandler");O(this,"activeIntroTimer");O(this,"activeContinueTimer");O(this,"raycaster");O(this,"pointer");O(this,"handleKeyDownExtra");O(this,"handleKeyboardDetection");O(this,"handleResize");O(this,"handleStoryKeyDown");O(this,"handleStoryClick");O(this,"handleStoryTouch");O(this,"handleCanvasClick");O(this,"handlePointerDown");O(this,"handlePointerUp");O(this,"lastHunterMove");O(this,"lastLockedWarningTime");O(this,"prevGamepadButtons");O(this,"isPreloadingActive");O(this,"prevGamepadStick");O(this,"gamepadTeleportSelectedIndex");O(this,"deathsCount");O(this,"elapsedTime");if(this.degree=t!==void 0?t:X.MAZE_DEGREE!==void 0?X.MAZE_DEGREE:8,this.branchingFactor=e!==void 0?e:X.BRANCHING_FACTOR!==void 0?X.BRANCHING_FACTOR:.2,i)this.isSafeMode=i.isSafeMode??!1;else{const h=document.getElementById("safe-mode");this.isSafeMode=h?h.checked:!1}this.vScale=2,this.ui=new Qp,this.input=new tm,this.input.setupTouch(()=>this.isMap3DActive,()=>this.isGameOver),this.canvas=document.getElementById("main-2d-canvas"),this.ctx=this.canvas.getContext("2d"),this.seed=i?i.seed:X.SEED!==null&&X.SEED!==void 0?X.SEED:Date.now(),this.mazeGen=new Jp(t,e,this.seed),this.maze=this.mazeGen.generate(),this.isResumedFromSave=!!i,this.deathsCount=i&&i.deathsCount||0,this.elapsedTime=i&&i.elapsedTime||0,this.mapCompletion100Triggered=!1,this.hunterOnSameFloorDetected=!1,this.dialogueUpTriggered=!1,this.dialogueDownTriggered=!1,this.dialogueWhichWayTriggered=!1,this.dialogueDetectedTriggered=!1,this.wallImage=new Image,this.wallImage.onload=()=>{this.staticMapCacheDirty=!0},this.wallImage.src="assets/images/wall.png",this.floorImage=new Image,this.floorImage.onload=()=>{this.staticMapCacheDirty=!0},this.floorImage.src="assets/images/floor.png",this.keyImage=new Image,this.keyImage.onload=()=>{this.staticMapCacheDirty=!0},this.keyImage.src="assets/images/key.png",this.manaImage=new Image,this.manaImage.onload=()=>{this.staticMapCacheDirty=!0},this.manaImage.src="assets/images/mana.png",this.statueImage=new Image,this.statueImage.onload=()=>{this.staticMapCacheDirty=!0},this.statueImage.src="assets/images/statue.png",this.mageImages={down_left:new Image,down_right:new Image,up_left:new Image,up_right:new Image};for(const h in this.mageImages)this.mageImages[h].onload=()=>{this.staticMapCacheDirty=!0},this.mageImages[h].src=`assets/images/mage_${h}.png`;this.playerSide="right",this.playerVertical="down",this.playerWalkCycle=0,this.playerSquashTargetX=1,this.playerSquashTargetY=1,this.playerSquashX=1,this.playerSquashY=1,this.player={x:this.mazeGen.startPos.x,y:this.mazeGen.startPos.y,z:this.mazeGen.startPos.z,dir:0},this.hunters=[],this.initHunters(t),this.keyMeshes=[],this.exitMesh=null,this.keysCollected=0,this.totalKeys=X.getKeyCount(t),this.totalPathfinders=X.getPathfinderCount(t),this.pathfindersRemaining=this.totalPathfinders,this.activeMapFloor=1,this.visualActiveFloor=1,this.mapCursor={x:0,y:0,z:1},this.pathfinderRewardsGranted=0,this.isometricCanvas=null,this.isometricCtx=null,this.floorClickRects=[],this.mapZoom=1,this.mapPanOffsetX=0,this.isZoomTransitionActive=!1,this.zoomTransitionTimer=0,this.preloadedStoryImages=[],this.storyImagesLoadedCount=0,this.storyImagesTotalCount=0,this.storyImagesPreloadPromise=null,this.preloadStoryImages(),this.lastFrameTime=performance.now(),this.revealedPathSet=new Set,this.activePathReveal=[],this.revealedPathProgress=0,this.knownMeshes=[],this.gridMeshes=null,this.pathRevealInterval=null,this.pathfinderBlockedUntil=0,this.manaCollected=0,this.totalMana=0,this.manaMeshes=[];const n=this.mazeGen.size;for(let h=0;h<n;h++)for(let f=0;f<n;f++)for(let p=0;p<n;p++)this.maze.get(h,f,p)===this.mazeGen.TYPES.MANA&&this.totalMana++;this.jellyPortalCount=this.totalMana<10?1:X.JELLY_PORTAL_COUNT||0,this.jellyPortalFreezeTimer=0,this.jellyPortalResetCells=new Set,this.jellyPortalResetDuration=1.5,this.jellyPortalResetElapsed=0,this.dyingHunters=[],this.ui.initGameUI(this.isSafeMode),this.ui.onInfoBanner=h=>this.queueNotification(h),this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.ui.updateManaHUD(this.manaCollected,this.totalMana),this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),this.ui.updateJellyPortalHUD(this.jellyPortalCount),this.isMap3DActive=!1,this.isGameOver=!1,this.deathAnimation=null,this.notificationQueue=[],this.activeNotification=null,this.isPaused=!1,this.isDestroyed=!1,this.isIntroPlaying=!1,this.isStoryActive=!1,this.pulsatingMaterials=[],this.hunterMeshes=[],this.discoveredTeleports=new Set,this.visitedCells=new Set,this.lastSavePos=null,this.suppressWakeHuntersBanner=!1;const a=Math.floor(this.player.x),o=Math.floor(this.player.y),r=this.player.z;this.discoveredTeleports.add(`${a},${o},${r}`),this.allTeleports=[];const c=this.mazeGen.size,l=this.mazeGen.TYPES;for(let h=1;h<c;h+=2)for(let f=0;f<c;f++)for(let p=0;p<c;p++)this.maze.get(p,f,h)===l.TELEPORT&&this.allTeleports.push({x:p,y:f,z:h});this.allTeleports.sort((h,f)=>h.z!==f.z?h.z-f.z:h.y!==f.y?h.y-f.y:h.x-f.x),this.selectedTeleportIndex=this.allTeleports.findIndex(h=>h.x===a&&h.y===o&&h.z===r),this.selectedTeleportIndex===-1&&(this.selectedTeleportIndex=0),this.teleportConfirmModalActive=!1,this.teleportModalSelection="go",this.isMouseOrTouchDetected=!1,this.teleportGoBtnClickRect=null,this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0,this.teleportMeshes=[],this.isTeleportMode=!1,this.teleportCooldownTicks=0,this.inactiveTeleportPos=null,this.floorTransition=null,this.hasSavePoint=!1,this.lastPlayerCell={x:a,y:o,z:r},this.exitPathfinderUnlocked=!1,this.isZoomActive=!0,this.zoomVisibleCells=11,this.lastInputDevice="keyboard",this.staticMapCacheCanvas=document.createElement("canvas"),this.staticMapCacheCtx=this.staticMapCacheCanvas.getContext("2d"),this.staticMapCacheDirty=!0,this.fullyRevealedCells=new Set,this.revealedCellsAnimation=new Map,this.vortexAngles=new Map,this.skipCellAnimations=!0,this.populateFullyRevealedCells(this.player.z),this.activeSkipHandler=null,this.activeIntroTimer=null,this.activeContinueTimer=null,this.raycaster=new Hp,this.pointer=new kt,this.exitPathfinderUnlocked=this.checkExitNeighborVisited(),this.initThree(),this.populateVisitedCells(),this.init(i)}populateVisitedCells(){this.visitedCells.clear();const t=this.mazeGen.size;for(let e=0;e<t;e++)for(let i=0;i<t;i++)for(let n=0;n<t;n++){const a=this.maze.get(e,i,n);(a===2||a===3||a===5)&&this.visitedCells.add(`${e},${i},${n}`)}}destroy(){this.isDestroyed=!0,this.hideGameUI(),this.input.destroy(),this.ui.destroy(),window.removeEventListener("keydown",this.handleKeyDownExtra),this.handleKeyboardDetection&&window.removeEventListener("keydown",this.handleKeyboardDetection),window.removeEventListener("resize",this.handleResize),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this.activeIntroTimer&&(clearTimeout(this.activeIntroTimer),this.activeIntroTimer=null),this.activeContinueTimer&&(clearTimeout(this.activeContinueTimer),this.activeContinueTimer=null),this.handleStoryKeyDown&&(window.removeEventListener("keydown",this.handleStoryKeyDown),this.handleStoryKeyDown=null);const t=document.getElementById("story-screen");t&&(this.handleStoryClick&&(t.removeEventListener("click",this.handleStoryClick),this.handleStoryClick=null),this.handleStoryTouch&&(t.removeEventListener("touchstart",this.handleStoryTouch),this.handleStoryTouch=null),t.classList.add("hidden")),this.controls&&this.controls.dispose(),this.renderer&&this.renderer.domElement&&(this.renderer.domElement.removeEventListener("click",this.handleCanvasClick),this.renderer.domElement.removeEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.removeEventListener("pointerup",this.handlePointerUp)),this.renderer&&(this.renderer.dispose(),this.renderer.domElement.remove()),this.ui.uiMobileUp&&(this.ui.uiMobileUp.onclick=null),this.ui.uiMobileDown&&(this.ui.uiMobileDown.onclick=null),this.ui.uiMobileMap&&(this.ui.uiMobileMap.onclick=null),this.pathRevealInterval&&clearInterval(this.pathRevealInterval)}preloadStoryImages(){const t=["assets/images/presentation/1-mystical-church-of-chaos.jpg","assets/images/presentation/2-mystical-church-of-chaos.jpg","assets/images/presentation/3-the-jelly-god.jpg","assets/images/presentation/4-player-alone.jpg","assets/images/presentation/5-player-thrown.jpg"];this.storyImagesLoadedCount=0,this.storyImagesTotalCount=t.length,this.storyImagesPreloadPromise=Promise.all(t.map((e,i)=>new Promise(n=>{const a=new Image;a.src=e,a.onload=()=>{this.preloadedStoryImages[i]=a,this.storyImagesLoadedCount++,n()},a.onerror=()=>{console.warn(`Failed to preload story image: ${e}`),n()}})))}initHunters(t){const e=this.isSafeMode?0:X.getHunterCount(t);if(e!==0){for(let i=1;i<=e;i++)this.hunters.push(new Zp(this.mazeGen,null,i));this.lastHunterMove=performance.now()}}wakeHunters(){const t=this.mazeGen.size,e=[],i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,o=Math.floor(this.mazeGen.startPos.x),r=Math.floor(this.mazeGen.startPos.y),c=this.mazeGen.startPos.z;for(let v=0;v<t;v++)for(let m=0;m<t;m++)for(let d=0;d<t;d++){const u=v===o&&m===r&&d===c;this.maze.get(v,m,d)===this.mazeGen.TYPES.PATH&&d%2!==0&&!u&&e.push({x:v,y:m,z:d})}if(e.length===0)for(let v=0;v<t;v++)for(let m=0;m<t;m++)for(let d=0;d<t;d++){const u=this.maze.get(v,m,d),M=v===o&&m===r&&d===c,_=u===this.mazeGen.TYPES.EXIT;u!==this.mazeGen.TYPES.WALL&&!_&&d%2!==0&&(v!==i||m!==n||d!==a)&&!M&&e.push({x:v,y:m,z:d})}for(let v=e.length-1;v>0;v--){const m=Math.floor(Math.random()*(v+1)),d=e[v];e[v]=e[m],e[m]=d}const l=(v,m)=>Math.abs(v.x-m.x)+Math.abs(v.y-m.y)+Math.abs(v.z-m.z),h=[],f=this.hunters.filter(v=>v.state==="SLEEP");let p=Math.max(3,Math.floor(t*.45)),g=4;for(;h.length<f.length&&p>0;){h.length=0;const v=e.filter(m=>l(m,{x:i,y:n,z:a})>=p);for(let m=0;m<f.length;m++){let d=null;for(const u of v){if(h.some(_=>_.x===u.x&&_.y===u.y&&_.z===u.z))continue;let M=!0;for(const _ of h)if(l(u,_)<g){M=!1;break}if(M){d=u;break}}if(d)h.push(d);else break}h.length<f.length&&(g>1?g--:p--)}if(h.length<f.length)for(const v of e){if(h.length>=f.length)break;h.some(m=>m.x===v.x&&m.y===v.y&&m.z===v.z)||h.push(v)}for(let v=0;v<f.length&&v<h.length;v++){const m=f[v],d=h[v];m.x=d.x,m.y=d.y,m.z=d.z,m.visualX=d.x,m.visualY=d.y,m.visualZ=d.z,m.lastPos={x:d.x,y:d.y,z:d.z},m.state="WANDERING",m.visitedNodes.clear(),m.visitedNodes.add(`${d.x},${d.y},${d.z}`),m.history=[]}this.suppressWakeHuntersBanner||this.ui.showInfoBanner(Ot("msgVoidHuntersDetected")),this.suppressWakeHuntersBanner=!1,this.staticMapCacheDirty=!0,this.isMap3DActive&&this.build3DMap()}getExitPos(){for(let t=0;t<this.mazeGen.size;t++)for(let e=0;e<this.mazeGen.size;e++)for(let i=0;i<this.mazeGen.size;i++)if(this.maze.get(t,e,i)===this.mazeGen.TYPES.EXIT)return{x:t,y:e,z:i};return{x:1,y:1,z:1}}triggerSave(){ns(this),this.hasSavePoint=!0,this.lastSavePos={x:this.player.x,y:this.player.y,z:this.player.z},this.ui.showSavingIndicator()}tryActivateJellyPortal(){if(this.isGameOver||this.isPaused||this.isIntroPlaying||this.isStoryActive||this.jellyPortalFreezeTimer>0)return;const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=this.maze.get(t,e,i),a=i<this.mazeGen.size-1&&this.maze.get(t,e,i+1)!==this.mazeGen.TYPES.WALL,o=i>0&&this.maze.get(t,e,i-1)!==this.mazeGen.TYPES.WALL,r=a||o,c=t===Math.floor(this.mazeGen.startPos.x)&&e===Math.floor(this.mazeGen.startPos.y)&&i===this.mazeGen.startPos.z,l=n===this.mazeGen.TYPES.TELEPORT;if(r||l||c||n!==this.mazeGen.TYPES.VISITED){this.ui.showInfoBanner(Ot("msgJellyPortalNotHere"));return}if(this.jellyPortalCount<=0){this.ui.showInfoBanner(Ot("msgJellyPortalNoPortalCount"));return}this.jellyPortalCount--,this.ui.updateJellyPortalHUD(this.jellyPortalCount),this.maze.set(t,e,i,this.mazeGen.TYPES.JELLY_PORTAL);const h=`${t},${e},${i}`;this.discoveredTeleports.add(h),this.allTeleports.push({x:t,y:e,z:i}),this.allTeleports.sort((g,v)=>g.z!==v.z?g.z-v.z:g.x!==v.x?g.x-v.x:g.y-v.y),this.selectedTeleportIndex=this.allTeleports.findIndex(g=>g.x===t&&g.y===e&&g.z===i),this.staticMapCacheDirty=!0,this.ui.showInfoBanner(Ot("msgJellyPortalActivated")),this.triggerSave(),this.jellyPortalFreezeTimer=1.5,this.jellyPortalResetElapsed=0,this.jellyPortalResetCells.clear();const f=this.mazeGen.size;for(let g=0;g<f;g++)for(let v=0;v<f;v++)Math.abs(g-t)+Math.abs(v-e)<=5&&this.jellyPortalResetCells.add(`${g},${v}`);const p=this.getMapVisitedPercentage();this.dyingHunters=[];for(const g of this.hunters)g.state!=="SLEEP"&&g.state!=="DEAD_BY_JELLY"&&g.z===i&&Math.abs(g.x-t)+Math.abs(g.y-e)<=5&&(g.state="DEAD_BY_JELLY",g.respawnThresholdPercentage=p,g.x=null,g.y=null,g.z=null,g.visualX=null,g.visualY=null,g.visualZ=null,g.pathToTarget=[],g.history=[])}executeJellyPortalReset(t,e,i){const n=this.mazeGen.size,a=this.mazeGen.TYPES,o=Math.floor(this.mazeGen.startPos.x),r=Math.floor(this.mazeGen.startPos.y),c=this.mazeGen.startPos.z;for(let l=0;l<n;l++)for(let h=0;h<n;h++){const f=Math.abs(l-t)+Math.abs(h-e);if(f<=5){const p=this.maze.get(l,h,i),g=`${l},${h},${i}`;if(p===a.STATUE)continue;if(p===a.WALL){let v=!1;for(const[m,d]of[[1,0],[-1,0],[0,1],[0,-1]]){const u=l+m,M=h+d;if(u>=0&&u<n&&M>=0&&M<n&&this.maze.get(u,M,i)===a.STATUE){v=!0;break}}if(v)continue}if(l===o&&h===r&&i===c||l===t&&h===e)continue;if(this.visitedCells.delete(g),this.fullyRevealedCells.delete(g),this.revealedCellsAnimation.delete(g),f===1){(p===a.VISITED||p===a.ELEVATOR_VISITED)&&this.maze.set(l,h,i,a.PATH),p===a.TELEPORT&&this.discoveredTeleports.delete(g);continue}p===a.VISITED||p===a.ELEVATOR_VISITED?this.maze.set(l,h,i,a.PATH):p===a.TELEPORT&&this.discoveredTeleports.delete(g)}}this.dyingHunters.length>0&&(this.respawnDyingHunters(),this.dyingHunters=[]),this.staticMapCacheDirty=!0,this.triggerSave()}respawnSingleHunter(t){const e=this.mazeGen.size,i=[],n=Math.floor(this.player.x),a=Math.floor(this.player.y),o=this.player.z,r=Math.floor(this.mazeGen.startPos.x),c=Math.floor(this.mazeGen.startPos.y),l=this.mazeGen.startPos.z;for(let h=0;h<e;h++)for(let f=0;f<e;f++)for(let p=0;p<e;p++){const g=h===r&&f===c&&p===l,v=this.maze.get(h,f,p)===this.mazeGen.TYPES.EXIT;if(this.maze.get(h,f,p)===this.mazeGen.TYPES.PATH&&p%2!==0&&!g&&!v){if(p===o&&Math.abs(h-n)+Math.abs(f-a)<=5)continue;i.push({x:h,y:f,z:p})}}if(i.length===0)for(let h=0;h<e;h++)for(let f=0;f<e;f++)for(let p=0;p<e;p++){const g=this.maze.get(h,f,p),v=h===r&&f===c&&p===l,m=g===this.mazeGen.TYPES.EXIT;if(g!==this.mazeGen.TYPES.WALL&&!m&&p%2!==0&&!v&&(h!==n||f!==a||p!==o)){if(p===o&&Math.abs(h-n)+Math.abs(f-a)<=5)continue;i.push({x:h,y:f,z:p})}}if(i.length>0){const h=i[Math.floor(Math.random()*i.length)];t.x=h.x,t.y=h.y,t.z=h.z,t.visualX=h.x,t.visualY=h.y,t.visualZ=h.z,t.lastPos={x:h.x,y:h.y,z:h.z},t.state="WANDERING",t.visitedNodes.clear(),t.visitedNodes.add(`${h.x},${h.y},${h.z}`),t.history=[],t.respawnThresholdPercentage=null,this.staticMapCacheDirty=!0,this.triggerSave()}}respawnDyingHunters(){const t=this.mazeGen.size,e=[],i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,o=Math.floor(this.mazeGen.startPos.x),r=Math.floor(this.mazeGen.startPos.y),c=this.mazeGen.startPos.z;for(let h=0;h<t;h++)for(let f=0;f<t;f++)for(let p=0;p<t;p++){const g=h===o&&f===r&&p===c,v=this.maze.get(h,f,p)===this.mazeGen.TYPES.EXIT;if(this.maze.get(h,f,p)===this.mazeGen.TYPES.PATH&&p%2!==0&&!g&&!v){if(p===a&&Math.abs(h-i)+Math.abs(f-n)<=5)continue;e.push({x:h,y:f,z:p})}}if(e.length===0)for(let h=0;h<t;h++)for(let f=0;f<t;f++)for(let p=0;p<t;p++){const g=this.maze.get(h,f,p),v=h===o&&f===r&&p===c,m=g===this.mazeGen.TYPES.EXIT;if(g!==this.mazeGen.TYPES.WALL&&!m&&p%2!==0&&!v&&(h!==i||f!==n||p!==a)){if(p===a&&Math.abs(h-i)+Math.abs(f-n)<=5)continue;e.push({x:h,y:f,z:p})}}for(let h=e.length-1;h>0;h--){const f=Math.floor(Math.random()*(h+1)),p=e[h];e[h]=e[f],e[f]=p}let l=0;for(const h of this.dyingHunters)if(l<e.length){const f=e[l++];h.x=f.x,h.y=f.y,h.z=f.z,h.visualX=f.x,h.visualY=f.y,h.visualZ=f.z,h.lastPos={x:f.x,y:f.y,z:f.z},h.state="WANDERING",h.visitedNodes.clear(),h.visitedNodes.add(`${f.x},${f.y},${f.z}`),h.history=[],h.pathToTarget=[]}}triggerVictory(){this.isGameOver=!0,al();const t=this.getMapVisitedPercentage();this.ui.showVictory(t,this.deathsCount,this.degree,this.elapsedTime,this.manaCollected,this.totalMana)}triggerDeath(){this.isGameOver=!0,this.ui.showDeath(this.hasSavePoint)}collectKey(t,e,i){if(this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${t},${e},${i}`),this.keysCollected++,this.staticMapCacheDirty=!0,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.ui.showInfoBanner(Ot("msgKeySecured",{collected:this.keysCollected,total:this.totalKeys})),this.keysCollected===this.totalKeys&&(this.ui.showInfoBanner(Ot("msgExitUnlocked")),this.exitMesh)){this.exitMesh.material.color.setHex(X.COLORS.THREE_EXIT),this.exitMesh.material.emissive.setHex(X.COLORS.THREE_EXIT),this.exitMesh.material.emissiveIntensity=.5;const n=this.exitMesh.children[0];n&&this.exitMesh.remove(n)}}collectMana(t,e,i){this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${t},${e},${i}`),this.manaCollected++,this.staticMapCacheDirty=!0,this.ui.updateManaHUD(this.manaCollected,this.totalMana),this.ui.showInfoBanner(Ot("msgManaSecured",{collected:this.manaCollected,total:this.totalMana})),this.manaCollected%10===0&&(this.jellyPortalCount++,this.ui.updateJellyPortalHUD(this.jellyPortalCount),setTimeout(()=>{this.ui.showInfoBanner(Ot("msgJellyPortalEarned"))},1200))}triggerLockedExitWarning(){const t=Date.now();if(!this.lastLockedWarningTime||t-this.lastLockedWarningTime>1500){this.lastLockedWarningTime=t;const e=this.totalKeys-this.keysCollected;this.ui.showInfoBanner(Ot("msgKeysRemaining",{count:e}))}}restoreFromSave(t){this.seed=t.seed,am(this.mazeGen,t.matrix),this.player.x=t.player.x,this.player.y=t.player.y,this.player.z=t.player.z,this.player.dir=t.player.dir;for(let l=0;l<this.hunters.length&&l<t.hunters.length;l++)sm(this.hunters[l],t.hunters[l]);this.discoveredTeleports=new Set(t.discoveredTeleports),this.inactiveTeleportPos=t.inactiveTeleportPos,this.teleportCooldownTicks=t.teleportCooldownTicks,this.allTeleports=[];const e=this.mazeGen.size,i=this.mazeGen.TYPES;for(let l=1;l<e;l+=2)for(let h=0;h<e;h++)for(let f=0;f<e;f++){const p=this.maze.get(f,h,l);(p===i.TELEPORT||p===i.JELLY_PORTAL)&&this.allTeleports.push({x:f,y:h,z:l})}this.allTeleports.sort((l,h)=>l.z!==h.z?l.z-h.z:l.y!==h.y?l.y-h.y:l.x-h.x);const n=Math.floor(this.player.x),a=Math.floor(this.player.y),o=this.player.z;this.selectedTeleportIndex=this.allTeleports.findIndex(l=>l.x===n&&l.y===a&&l.z===o),this.selectedTeleportIndex===-1&&(this.selectedTeleportIndex=0),this.keysCollected=t.keysCollected!==void 0?t.keysCollected:0,this.totalKeys=t.totalKeys!==void 0?t.totalKeys:X.getKeyCount(this.degree),this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.manaCollected=t.manaCollected!==void 0?t.manaCollected:0,this.totalMana=t.totalMana!==void 0?t.totalMana:0,this.ui.updateManaHUD(this.manaCollected,this.totalMana),this.jellyPortalCount=t.jellyPortalCount!==void 0?t.jellyPortalCount:this.totalMana<10?1:0,this.ui.updateJellyPortalHUD(this.jellyPortalCount),this.totalPathfinders=t.totalPathfinders!==void 0?t.totalPathfinders:X.getPathfinderCount(this.degree),this.pathfindersRemaining=t.pathfindersRemaining!==void 0?t.pathfindersRemaining:this.totalPathfinders,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders);const r=this.degree>=12?10:this.degree>=8?20:0,c=this.getMapVisitedPercentage();this.pathfinderRewardsGranted=t.pathfinderRewardsGranted!==void 0?t.pathfinderRewardsGranted:r>0?Math.floor(c/r):0,this.revealedPathSet=new Set(t.revealedPathSet),this.mapCompletion100Triggered=t.mapCompletion100Triggered||!1,this.dialogueUpTriggered=t.dialogueUpTriggered||!1,this.dialogueDownTriggered=t.dialogueDownTriggered||!1,this.dialogueWhichWayTriggered=t.dialogueWhichWayTriggered||!1,this.dialogueDetectedTriggered=t.dialogueDetectedTriggered||!1,this.deathsCount=t.deathsCount!==void 0?t.deathsCount:0,this.elapsedTime=t.elapsedTime!==void 0?t.elapsedTime:0,this.populateVisitedCells(),this.lastSavePos={x:t.player.x,y:t.player.y,z:t.player.z},this.hunterOnSameFloorDetected=t.hunterOnSameFloorDetected||!1,this.hasSavePoint=!0,this.lastPlayerCell={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.populateFullyRevealedCells(this.player.z),this.exitPathfinderUnlocked=this.checkExitNeighborVisited()}checkHunterCollision(){if(this.deathAnimation&&this.deathAnimation.active)return;const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=Math.floor(this.mazeGen.startPos.x),a=Math.floor(this.mazeGen.startPos.y),o=this.mazeGen.startPos.z,r=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===n&&this.inactiveTeleportPos.y===a&&this.inactiveTeleportPos.z===o;if(!(t===n&&e===a&&i===o&&!r)){for(const c of this.hunters)if(!(c.state==="SLEEP"||c.state==="DEAD_BY_JELLY")&&c.x===t&&c.y===e&&c.z===i){c.visualX=c.x,c.visualY=c.y,c.visualZ=c.z,this.isGameOver=!0,this.deathsCount++,this.hideGameUI(),this.ui.showInfoBanner(Ot("msgKeyDropped")),this.deathAnimation={active:!0,hunter:c,playerPos:{x:this.player.x,y:this.player.y,z:this.player.z},elapsed:0,duration:1.8,screenFilled:!1,reversing:!1,delayElapsed:0,delayDuration:1.5,glitchElapsed:0,glitchDuration:1.5,uiFade:0,uiTriggered:!1};return}}}hideGameUI(){this.ui.hideGameUI(),this.ui.hidePause(),this.canvas.classList.remove("hunted-map-effect"),this.isMap3DActive=!1}initThree(){this.scene=new Gp,this.camera=new Fe(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new Qo({antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.appendChild(this.renderer.domElement),this.controls=new Wp(this.camera,this.renderer.domElement),this.controls.enableDamping=!0}init(t=null){this.handleKeyDownExtra=c=>{const l=c.key.toLowerCase();if(l==="escape"){if(this.isMap3DActive){this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D(),c.preventDefault();return}this.togglePause();return}if(!this.isPaused&&(l==="m"&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D()),l==="z"&&this.toggleZoom(),this.isMap3DActive&&!this.isIntroPlaying)){if(this.isTeleportMode){if(this.teleportConfirmModalActive){if((l==="a"||l==="arrowleft"||l==="d"||l==="arrowright")&&(this.teleportModalSelection=this.teleportModalSelection==="go"?"cancel":"go",c.preventDefault()),l==="enter"||l===" "||l==="y"){if(this.teleportModalSelection==="go"&&this.selectedTeleportIndex!==null){const f=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(f.x,f.y,f.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;c.preventDefault()}(l==="escape"||l==="backspace")&&(this.teleportConfirmModalActive=!1,c.preventDefault());return}const h=this.getSelectableTeleportIndices();if(h.length>0){let f=h.indexOf(this.selectedTeleportIndex);if(l==="a"||l==="arrowleft"){f=(f-1+h.length)%h.length,this.selectedTeleportIndex=h[f];const p=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=p.z,this.mapCursor={x:p.x,y:p.y,z:p.z},c.preventDefault()}if(l==="d"||l==="arrowright"){f=(f+1)%h.length,this.selectedTeleportIndex=h[f];const p=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=p.z,this.mapCursor={x:p.x,y:p.y,z:p.z},c.preventDefault()}if((l==="enter"||l===" "||l==="y")&&this.selectedTeleportIndex!==null){const p=this.allTeleports[this.selectedTeleportIndex],g=Math.floor(this.player.x),v=Math.floor(this.player.y),m=this.player.z,d=p&&p.x===g&&p.y===v&&p.z===m;p&&!d&&(this.teleportTo(p.x,p.y,p.z),this.toggleTeleportMap(!1)),c.preventDefault()}}(l==="escape"||l==="backspace")&&(this.toggleTeleportMap(!1),c.preventDefault());return}if((l==="q"||l==="pagedown")&&(this.activeMapFloor-2>=1&&(this.activeMapFloor-=2),c.preventDefault()),(l==="e"||l==="pageup")&&(this.activeMapFloor+2<=this.mazeGen.size-2&&(this.activeMapFloor+=2),c.preventDefault()),(l==="a"||l==="arrowleft")&&(this.navigateCursor("left"),c.preventDefault()),(l==="d"||l==="arrowright")&&(this.navigateCursor("right"),c.preventDefault()),(l==="w"||l==="arrowup")&&(this.navigateCursor("up"),c.preventDefault()),(l==="s"||l==="arrowdown")&&(this.navigateCursor("down"),c.preventDefault()),l==="enter"||l===" "||l==="y"){const h=this.mapCursor.x,f=this.mapCursor.y,p=this.mapCursor.z;this.getInteractiveElements(this.activeMapFloor).some(m=>m.x===h&&m.y===f&&m.z===p)&&this.triggerPathReveal(h,f,p),c.preventDefault()}}},this.handleResize=()=>this.resize(),this.handleKeyboardDetection=()=>{this.lastInputDevice!=="keyboard"&&(this.lastInputDevice="keyboard",this.ui.updateControlsHint("keyboard",this.mazeGen.size>11)),this.isMouseOrTouchDetected=!1},window.addEventListener("keydown",this.handleKeyDownExtra),window.addEventListener("keydown",this.handleKeyboardDetection),window.addEventListener("resize",this.handleResize);const e=document.getElementById("mobile-zoom-btn");e&&(e.onclick=c=>{c.stopPropagation(),this.toggleZoom()}),this.ui.uiMobileUp&&(this.ui.uiMobileUp.onclick=()=>this.changeFloor(2)),this.ui.uiMobileDown&&(this.ui.uiMobileDown.onclick=()=>this.changeFloor(-2)),this.ui.uiMobileMap&&(this.ui.uiMobileMap.onclick=()=>{if(this.isMap3DActive){this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D();return}const c=Math.floor(this.player.x),l=Math.floor(this.player.y),h=this.player.z,f=this.maze.get(c,l,h)===this.mazeGen.TYPES.JELLY_PORTAL,p=this.maze.get(c,l,h)===this.mazeGen.TYPES.TELEPORT||f,g=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===c&&this.inactiveTeleportPos.y===l&&this.inactiveTeleportPos.z===h;p&&!g?this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(Ot("msgNoOtherActiveTeleport")):this.toggleMap3D()});let i=!1,n=0,a=0;this.handlePointerDown=c=>{i=!1,n=c.clientX,a=c.clientY},this.handlePointerUp=c=>{const l=c.clientX-n,h=c.clientY-a;Math.sqrt(l*l+h*h)>5&&(i=!0)},this.handleCanvasClick=c=>{i||this.onCanvasClick(c)},this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerup",this.handlePointerUp),this.renderer.domElement.addEventListener("click",this.handleCanvasClick),this.resize(),this.updateFloorUI(),this.hideCanvasInstant(),t?(this.restoreFromSave(t),this.playContinueAnimation()):this.startStorytelling(),this.loop();const o=this.mazeGen.size,r=document.getElementById("mobile-zoom-btn");o<=11?r&&r.classList.add("hidden"):r&&r.classList.remove("hidden"),this.ui.updateControlsHint(this.lastInputDevice,o>11)}hideCanvasInstant(){const t=document.getElementById("map-area-container"),e=document.getElementById("left-hud-panel"),i=document.getElementById("right-hud-panel"),n=document.getElementById("bottom-hud-container");t&&(t.style.transition="none",t.classList.remove("intro-reveal"),t.classList.add("intro-hidden"),t.offsetHeight,t.style.transition=""),e&&(e.style.transition="none",e.classList.remove("intro-reveal"),e.classList.add("intro-hidden"),e.offsetHeight,e.style.transition=""),i&&(i.style.transition="none",i.classList.remove("intro-reveal"),i.classList.add("intro-hidden"),i.offsetHeight,i.style.transition=""),n&&(n.style.transition="none",n.classList.remove("intro-reveal"),n.classList.add("intro-hidden"),n.offsetHeight,n.style.transition="")}drawElevator2D(t,e,i,n,a,o,r,c,l=!1,h=0){const f=e===Math.floor(r)&&i===Math.floor(c);if(f){const d=.85+.15*Math.sin(Date.now()/150);t.save(),t.globalAlpha=d}const p=a&&this.maze.get(e,i,h+1)===this.mazeGen.TYPES.ELEVATOR_VISITED,g=o&&this.maze.get(e,i,h-1)===this.mazeGen.TYPES.ELEVATOR_VISITED;if(l)if(a&&o){let d=!1,u=!1;if(this.activePathReveal){const y=this.activePathReveal.findIndex(E=>E.x===e&&E.y===i&&E.z===h);if(y!==-1&&y<this.activePathReveal.length-1){const E=this.activePathReveal[y+1];E.z>h&&(d=!0),E.z<h&&(u=!0)}}!d&&!u&&(d=this.revealedPathSet.has(`${e},${i},${h+1}`)||this.revealedPathSet.has(`${e},${i},${h+2}`),u=this.revealedPathSet.has(`${e},${i},${h-1}`)||this.revealedPathSet.has(`${e},${i},${h-2}`));const M=d||!d&&!u,_=u||!d&&!u;t.fillStyle=M?X.COLORS.REVEALED_PATH:p?X.COLORS.NEON_UP:X.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n/2),t.fillStyle=_?X.COLORS.REVEALED_PATH:g?X.COLORS.NEON_DOWN:X.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n+n/2,n,n/2)}else t.fillStyle=X.COLORS.REVEALED_PATH,t.fillRect(e*n,i*n,n,n);else a&&o?(t.fillStyle=p?X.COLORS.NEON_UP:X.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n/2),t.fillStyle=g?X.COLORS.NEON_DOWN:X.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n+n/2,n,n/2)):a?(t.fillStyle=p?X.COLORS.NEON_UP:X.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n)):(t.fillStyle=g?X.COLORS.NEON_DOWN:X.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n,n,n));const v=e*n+n/2,m=i*n+n/2;if(t.fillStyle="#000000",a&&o){const d=n*.28,u=m-n/5,M=m+n/5;t.beginPath(),t.moveTo(v,u-d/2),t.lineTo(v-d*.6,u+d/2),t.lineTo(v+d*.6,u+d/2),t.closePath(),t.fill(),t.beginPath(),t.moveTo(v,M+d/2),t.lineTo(v-d*.6,M-d/2),t.lineTo(v+d*.6,M-d/2),t.closePath(),t.fill()}else if(a){const d=n*.45;t.beginPath(),t.moveTo(v,m-d/2),t.lineTo(v-d*.6,m+d/2),t.lineTo(v+d*.6,m+d/2),t.closePath(),t.fill()}else{const d=n*.45;t.beginPath(),t.moveTo(v,m+d/2),t.lineTo(v-d*.6,m-d/2),t.lineTo(v+d*.6,m-d/2),t.closePath(),t.fill()}f&&t.restore()}drawCellShadow2D(t,e,i,n,a,o,r){if(o===4)return;const c=(p,g)=>p<0||p>=a||g<0||g>=a?!1:this.maze.get(p,g,r)===0&&(this.isNearVisited(p,g,r)||this.isAdjacentToStatue(p,g,r)),l=c(e,i+1),h=c(e+1,i),f=c(e+1,i+1);if(l||h||f){t.fillStyle="rgba(0, 0, 0, 0.4)";const p=n*X.SHADOW_SIZE_FACTOR;if(l&&t.fillRect(e*n,(i+1)*n-p,n,p),h){const g=l?n-p:n;t.fillRect((e+1)*n-p,i*n,p,g)}!l&&!h&&f&&t.fillRect((e+1)*n-p,(i+1)*n-p,p,p)}}updateRendererSize(){this.renderer&&(this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix())}resize(){const e=window.innerHeight>window.innerWidth?window.innerWidth*.82:window.innerHeight*.75;this.canvas.width=e,this.canvas.height=e,this.staticMapCacheDirty=!0,this.updateRendererSize()}getMapVisitedPercentage(){let t=0,e=0;const i=this.mazeGen.size,n=this.mazeGen.TYPES;for(let a=0;a<i;a++)for(let o=0;o<i;o++)for(let r=0;r<i;r++){const c=this.maze.get(a,o,r);if(c===n.WALL||c===n.EXIT||c===n.STATUE)continue;t++,(c===n.VISITED||c===n.START||c===n.ELEVATOR_VISITED||c===n.TELEPORT&&this.discoveredTeleports.has(`${a},${o},${r}`))&&e++}return t===0?0:Math.floor(e/t*100)}updateFloorUI(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=i+1<this.mazeGen.size&&this.maze.get(t,e,i+1)!==this.mazeGen.TYPES.WALL,a=i-1>=0&&this.maze.get(t,e,i-1)!==this.mazeGen.TYPES.WALL;this.ui.updateFloor(i,n,a);const o=this.getMapVisitedPercentage();this.ui.updateVisitedPercent(o),o===100&&!this.mapCompletion100Triggered&&(this.ui.showInfoBanner(Ot("msgWorldSaved")),this.mapCompletion100Triggered=!0),this.checkPathfinderRewards(o)}checkPathfinderRewards(t){const e=this.degree>=12?10:this.degree>=8?20:0;if(e===0)return;this.pathfinderRewardsGranted===void 0&&(this.pathfinderRewardsGranted=0);const i=Math.floor(t/e);if(i>this.pathfinderRewardsGranted){const n=i-this.pathfinderRewardsGranted;this.pathfindersRemaining+=n,this.totalPathfinders+=n,this.pathfinderRewardsGranted=i,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),this.ui.showInfoBanner(Ot("msgFoundPathfinder")),ns(this)}}getTeleportCandidates(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z;return Array.from(this.discoveredTeleports).map(n=>{const[a,o,r]=n.split(",").map(Number);return{x:a,y:o,z:r}}).filter(n=>!(n.x===t&&n.y===e&&n.z===i||this.inactiveTeleportPos&&this.inactiveTeleportPos.x===n.x&&this.inactiveTeleportPos.y===n.y&&this.inactiveTeleportPos.z===n.z))}getSelectableTeleportIndices(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z;return this.allTeleports.map((n,a)=>({t:n,idx:a})).filter(n=>{const a=`${n.t.x},${n.t.y},${n.t.z}`,o=this.discoveredTeleports.has(a),r=this.inactiveTeleportPos&&n.t.x===this.inactiveTeleportPos.x&&n.t.y===this.inactiveTeleportPos.y&&n.t.z===this.inactiveTeleportPos.z,c=n.t.x===t&&n.t.y===e&&n.t.z===i;return o&&!r&&!c}).map(n=>n.idx)}updateGamepad(t){const e=navigator.getGamepads?navigator.getGamepads():[],i=e[0]||e.find(m=>m!==null);if(!i)return;const n=.25;(Math.abs(i.axes[0])>n||Math.abs(i.axes[1])>n||i.axes[2]!==void 0&&Math.abs(i.axes[2])>n||i.axes[3]!==void 0&&Math.abs(i.axes[3])>n||i.buttons.some(m=>m.pressed))&&(this.isMouseOrTouchDetected=!1,this.lastInputDevice!=="gamepad"&&(this.lastInputDevice="gamepad",this.ui.updateControlsHint("gamepad",this.mazeGen.size>11)));const o=i.axes[0],r=i.axes[1];let c=o<-n,l=o>n,h=r<-n,f=r>n;if(i.buttons[12]&&i.buttons[12].pressed&&(h=!0),i.buttons[13]&&i.buttons[13].pressed&&(f=!0),i.buttons[14]&&i.buttons[14].pressed&&(c=!0),i.buttons[15]&&i.buttons[15].pressed&&(l=!0),c?this.input.keys.arrowleft=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowleft=!1),l?this.input.keys.arrowright=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowright=!1),h?this.input.keys.arrowup=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowup=!1),f?this.input.keys.arrowdown=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowdown=!1),!this.prevGamepadButtons){this.prevGamepadButtons=i.buttons.map(m=>m.pressed);return}const p=m=>this.prevGamepadButtons[m],g=m=>i.buttons[m]&&i.buttons[m].pressed,v=m=>g(m)&&!p(m);if(this.isStoryActive){if(v(9))this.skipStory();else if(!this.isPreloadingActive){for(let m=0;m<i.buttons.length;m++)if(m!==9&&v(m)){this.triggerAdvanceStory();break}}this.prevGamepadButtons=i.buttons.map(m=>m.pressed);return}if(v(9)){this.togglePause(),this.prevGamepadButtons=i.buttons.map(m=>m.pressed);return}if(this.isPaused){this.prevGamepadButtons=i.buttons.map(m=>m.pressed);return}if(this.isMap3DActive&&!this.isIntroPlaying){const m=g(7),d=g(6);if(m||d){const E=this.mazeGen.size;let x=window.innerWidth*.7/E;x=Math.max(20,Math.min(48,x));const A=x*this.mapZoom,N=A/2,T=A/4,b=N*5,z=window.innerWidth/2+this.mapPanOffsetX,k=window.innerHeight/2+this.mapPanOffsetY,q=this.mapCursor.x,w=this.mapCursor.y,I=this.mapCursor.z,F=this.visualActiveFloor,V=(q-w)*N+z,$=(q+w)*T-(I-F)*b+k,K=this.mapZoom,tt=1.025;let Q=m?K*tt:K/tt;if(Q=Math.max(.5,Math.min(4,Q)),Q!==K){const it=Q/K;this.mapPanOffsetX=V-(V-(window.innerWidth/2+this.mapPanOffsetX))*it-window.innerWidth/2,this.mapPanOffsetY=$-($-(window.innerHeight/2+this.mapPanOffsetY))*it-window.innerHeight/2,this.mapZoom=Q}}const u=c&&(!this.prevGamepadStick||!this.prevGamepadStick.left),M=l&&(!this.prevGamepadStick||!this.prevGamepadStick.right),_=h&&(!this.prevGamepadStick||!this.prevGamepadStick.up),y=f&&(!this.prevGamepadStick||!this.prevGamepadStick.down);if(this.prevGamepadStick={left:c,right:l,up:h,down:f},this.isTeleportMode){if(this.teleportConfirmModalActive){if((u||v(14)||M||v(15))&&(this.teleportModalSelection=this.teleportModalSelection==="go"?"cancel":"go"),v(0)||v(3)||v(2))if(this.teleportModalSelection==="go"){const E=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(E.x,E.y,E.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;v(1)&&(this.teleportConfirmModalActive=!1)}else{const E=this.getSelectableTeleportIndices();if(E.length>0){let x=E.indexOf(this.selectedTeleportIndex);if(u||v(14)){x=(x-1+E.length)%E.length,this.selectedTeleportIndex=E[x];const A=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=A.z,this.mapCursor={x:A.x,y:A.y,z:A.z}}if(M||v(15)){x=(x+1)%E.length,this.selectedTeleportIndex=E[x];const A=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=A.z,this.mapCursor={x:A.x,y:A.y,z:A.z}}if(v(0)||v(3)||v(2)){const A=this.allTeleports[this.selectedTeleportIndex],N=Math.floor(this.player.x),T=Math.floor(this.player.y),b=this.player.z,z=A&&A.x===N&&A.y===T&&A.z===b;A&&!z&&(this.teleportTo(A.x,A.y,A.z),this.toggleTeleportMap(!1))}}(v(1)||v(8))&&this.toggleTeleportMap(!1)}this.prevGamepadButtons=i.buttons.map(E=>E.pressed);return}if((u||v(14))&&this.navigateCursor("left"),(M||v(15))&&this.navigateCursor("right"),(_||v(12))&&this.navigateCursor("up"),(y||v(13))&&this.navigateCursor("down"),(v(0)||v(4))&&this.activeMapFloor-2>=1&&(this.activeMapFloor-=2),v(5)&&this.activeMapFloor+2<=this.mazeGen.size-2&&(this.activeMapFloor+=2),v(3)||v(2)){const E=this.mapCursor.x,x=this.mapCursor.y,A=this.mapCursor.z;this.getInteractiveElements(this.activeMapFloor).some(b=>b.x===E&&b.y===x&&b.z===A)&&this.triggerPathReveal(E,x,A)}(v(1)||v(8))&&this.toggleMap3D(),this.prevGamepadButtons=i.buttons.map(E=>E.pressed);return}if(v(0)){if(this.isTeleportMode){const d=this.getTeleportCandidates()[this.gamepadTeleportSelectedIndex];d&&this.teleportTo(d.x,d.y,d.z)}else if(!this.isMap3DActive){const m=Math.floor(this.player.x),d=Math.floor(this.player.y),u=this.player.z,M=u>0&&this.maze.get(m,d,u-1)!==0,y=this.maze.get(m,d,u)===this.mazeGen.TYPES.TELEPORT,E=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===m&&this.inactiveTeleportPos.y===d&&this.inactiveTeleportPos.z===u;(!(y&&this.discoveredTeleports.has(`${m},${d},${u}`))||E)&&M&&this.changeFloor(-2)}}if(v(1)&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleZoom()),v(2)&&!this.isTeleportMode&&!this.isMap3DActive){const m=Math.floor(this.player.x),d=Math.floor(this.player.y),u=this.player.z,M=this.maze.get(m,d,u),_=M===this.mazeGen.TYPES.JELLY_PORTAL,y=M===this.mazeGen.TYPES.TELEPORT||_,E=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===m&&this.inactiveTeleportPos.y===d&&this.inactiveTeleportPos.z===u;y&&this.discoveredTeleports.has(`${m},${d},${u}`)&&!E&&(this.discoveredTeleports.size>=2?(this.toggleTeleportMap(!0),this.gamepadTeleportSelectedIndex=0):this.ui.showInfoBanner(Ot("msgNoOtherActiveTeleport")))}if(v(3)&&!this.isTeleportMode&&!this.isMap3DActive){const m=Math.floor(this.player.x),d=Math.floor(this.player.y),u=this.player.z,M=u<this.mazeGen.size-1&&this.maze.get(m,d,u+1)!==0,y=this.maze.get(m,d,u)===this.mazeGen.TYPES.TELEPORT,E=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===m&&this.inactiveTeleportPos.y===d&&this.inactiveTeleportPos.z===u;(!(y&&this.discoveredTeleports.has(`${m},${d},${u}`))||E)&&M&&this.changeFloor(2)}if(v(8)&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D()),this.isTeleportMode){const m=v(4)||v(14),d=v(5)||v(15);if(m||d){const u=this.getTeleportCandidates();u.length>0&&(m?this.gamepadTeleportSelectedIndex=(this.gamepadTeleportSelectedIndex-1+u.length)%u.length:this.gamepadTeleportSelectedIndex=(this.gamepadTeleportSelectedIndex+1)%u.length)}}if(v(5)&&!this.isTeleportMode&&!this.isMap3DActive&&this.tryActivateJellyPortal(),this.isMap3DActive&&this.controls){const m=i.axes[2],d=i.axes[3],u=i.buttons[7]?i.buttons[7].value:0,M=i.buttons[6]?i.buttons[6].value:0,_=.15,y=.15,E=(X.ROT_SPEED!==void 0?X.ROT_SPEED:2)*t,x=20*t,A=Math.abs(m)>_||Math.abs(d)>_,N=u>y||M>y;if(A||N){const T=new j().copy(this.camera.position).sub(this.controls.target),b=new ya().setFromVector3(T);if(Math.abs(m)>_&&(b.theta-=m*E),Math.abs(d)>_){b.phi-=d*E;const q=this.controls.minPolarAngle||0,w=this.controls.maxPolarAngle||Math.PI;b.phi=Math.max(q,Math.min(w,b.phi))}u>y&&(b.radius-=u*x),M>y&&(b.radius+=M*x);const z=this.controls.minDistance||2,k=this.controls.maxDistance||100;b.radius=Math.max(z,Math.min(k,b.radius)),b.makeSafe(),T.setFromSpherical(b),this.camera.position.copy(this.controls.target).add(T),this.controls.update()}}this.prevGamepadButtons=i.buttons.map(m=>m.pressed)}queueNotification(t){this.notificationQueue.push(t)}updateNotification(t){if(!this.activeNotification){if(this.notificationQueue.length>0){const i=this.notificationQueue.shift();this.activeNotification={text:i,displayText:"",state:"OPENING",widthProgress:0,typeTimer:0,charIndex:0,waitTimer:0,closeProgress:1}}return}const e=this.activeNotification;e.state==="OPENING"?(e.widthProgress+=t/.15,e.widthProgress>=1&&(e.widthProgress=1,e.state="TYPING")):e.state==="TYPING"?(e.typeTimer+=t,e.typeTimer>=.025&&(e.typeTimer=0,e.charIndex++,e.displayText=e.text.substring(0,e.charIndex),e.charIndex>=e.text.length&&(e.state="WAITING",e.waitTimer=0))):e.state==="WAITING"?(this.isZoomTransitionActive||(e.waitTimer+=t),e.waitTimer>=1&&(e.state="CLOSING",e.closeProgress=1)):e.state==="CLOSING"&&(e.closeProgress-=t/.15,e.closeProgress<=0&&(e.closeProgress=0,this.activeNotification=null))}update(t){if(this.isGameOver||this.isDestroyed||!t)return;if(this.jellyPortalFreezeTimer>0){this.jellyPortalFreezeTimer-=t,this.jellyPortalResetElapsed+=t,this.jellyPortalFreezeTimer<=0&&(this.jellyPortalFreezeTimer=0,this.executeJellyPortalReset(Math.floor(this.player.x),Math.floor(this.player.y),this.player.z),this.jellyPortalResetCells.clear()),this.updateNotification(t),this.updateGamepad(t);return}if(!this.isPaused&&!this.isIntroPlaying&&!this.isStoryActive&&(this.elapsedTime+=t),this.isStoryActive){this.updateGamepad(t),this.updateStory(t);return}if(this.isZoomTransitionActive&&(this.zoomTransitionTimer-=t,this.zoomTransitionTimer<=0&&(this.isZoomTransitionActive=!1,this.zoomTransitionTimer=0)),this.updateNotification(t),this.updateGamepad(t),this.isPaused)return;this.isIntroPlaying||this.hunters.some(r=>r.state!=="SLEEP"&&r.z===this.player.z)&&(this.hunterOnSameFloorDetected||(this.ui.showInfoBanner(Ot("msgDidYouHearThat")),this.hunterOnSameFloorDetected=!0)),this.hunters.some(o=>o.state==="SLEEP")&&this.getMapVisitedPercentage()>=10&&this.wakeHunters();const e=this.getMapVisitedPercentage();for(const o of this.hunters)o.state==="DEAD_BY_JELLY"&&o.respawnThresholdPercentage!==null&&e>=o.respawnThresholdPercentage&&(this.respawnSingleHunter(o),this.ui.showInfoBanner(Ot("msgHunterReturned")));const n=1e3/X.HUNTER_SPEED*t;for(const o of this.hunters)o.visualX===null&&(o.visualX=o.x),o.visualY===null&&(o.visualY=o.y),o.visualZ===null&&(o.visualZ=o.z),!(o.state==="DEAD_BY_JELLY"||o.x===null||o.y===null||o.z===null)&&(o.visualX=aa(o.visualX,o.x,n),o.visualY=aa(o.visualY,o.y,n),o.visualZ=aa(o.visualZ,o.z,n*2),o.generateCloudTexture(t));if(this.isMap3DActive){this.controls&&this.controls.update();const o=this.mazeGen.size,r=this.isTeleportMode?.25:1;for(const c of this.hunterMeshes){const l=c.hunter,h=c.mesh;if(l.state==="DEAD_BY_JELLY"){h.visible=!1;continue}if(h.visible=!0,l.visualX===null||l.visualZ===null||l.visualY===null)continue;h.position.set(l.visualX-o/2,(l.visualZ-o/2)*this.vScale,l.visualY-o/2);const f=l.jellyTime,p=1+Math.sin(f*1.2)*.07,g=1+Math.cos(f*.8)*.07,v=1+Math.sin(f*1.5)*.07;c.coreMesh&&(c.coreMesh.scale.set(p,g,v),c.coreMesh.material&&(c.coreMesh.material.emissiveIntensity=(.8+.2*Math.sin(f*3)+(Math.random()<.1?(Math.random()-.5)*.4:0))*r)),c.particles&&c.particles.forEach(_=>{const y=_.userData;y.angle+=y.speed*t;const E=Math.cos(y.angle)*y.radius,x=Math.sin(y.angle)*y.radius,A=Math.sin(y.angle*2+y.phaseY)*.25;let N=0,T=0,b=0;Math.random()<.15?(N=(Math.random()-.5)*.12,T=(Math.random()-.5)*.12,b=(Math.random()-.5)*.12,_.scale.set(1.4+Math.random()*.4,.6+Math.random()*.3,1.4+Math.random()*.4)):_.scale.set(1,1,1),_.position.set(E+N,A+T,x+b)});const m=l.x-l.visualX,d=l.y-l.visualY,u=Math.sqrt(m*m+d*d),M=Math.max(0,Math.min(1,1-u));if(l.lastPos&&(l.lastPos.x!==l.x||l.lastPos.y!==l.y)){c.trail1.position.set(l.lastPos.x-o/2,(l.lastPos.z-o/2)*this.vScale,l.lastPos.y-o/2),c.trail1.visible=!0;const _=l.jellyTime-.2,y=.95-M*.47,E=y*(1+Math.sin(_*1.2)*.07),x=y*(1+Math.cos(_*.8)*.07),A=y*(1+Math.sin(_*1.5)*.07);c.trail1.scale.set(E,x,A),c.trail1.material&&(c.trail1.material.opacity=(.4-M*.2)*r)}else c.trail1.visible=!1;if(l.history&&l.history.length===2){const _=l.history[0];c.trail2.position.set(_.x-o/2,(_.z-o/2)*this.vScale,_.y-o/2);const y=.48*(1-M);if(y>.02){c.trail2.visible=!0;const E=l.jellyTime-.4,x=y*(1+Math.sin(E*1.2)*.07),A=y*(1+Math.cos(E*.8)*.07),N=y*(1+Math.sin(E*1.5)*.07);c.trail2.scale.set(x,A,N),c.trail2.material&&(c.trail2.material.opacity=.2*(1-M)*r)}else c.trail2.visible=!1}else c.trail2.visible=!1}if(this.keyMeshes)for(const c of this.keyMeshes)c.rotation.y+=1.5*t,c.rotation.x+=.5*t;if(this.isTeleportMode&&this.teleportMeshes&&this.gamepadTeleportSelectedIndex!==void 0){const l=this.getTeleportCandidates()[this.gamepadTeleportSelectedIndex];this.teleportMeshes.forEach(h=>{const{gridX:f,gridY:p,gridZ:g}=h.userData;if(l&&f===l.x&&p===l.y&&g===l.z){const m=1.3+.25*Math.sin(Date.now()/100);h.scale.set(m,m,m),h.material&&h.material.emissive&&(h.material.emissive.setHex(16755200),h.material.emissiveIntensity=3.5)}else{const m=f===Math.floor(this.player.x)&&p===Math.floor(this.player.y)&&g===this.player.z,d=this.teleportCooldownTicks>0;let u=1;if(m&&(u=1.4),h.scale.set(u,u,u),h.material&&h.material.emissive)if(d)h.material.color.setHex(4473924),h.material.emissive.setHex(4473924),h.material.emissiveIntensity=0,h.material.opacity=.4;else if(m)h.material.color.setHex(65535),h.material.emissive.setHex(65535),h.material.emissiveIntensity=3,h.material.opacity=.5;else if(f===Math.floor(this.mazeGen.startPos.x)&&p===Math.floor(this.mazeGen.startPos.y)&&g===this.mazeGen.startPos.z)h.material.color.setHex(X.COLORS.THREE_START),h.material.emissive.setHex(X.COLORS.THREE_START),h.material.emissiveIntensity=this.isTeleportMode?2.5:.5,h.material.opacity=this.isTeleportMode?.95:.8;else{const y=this.maze.get(f,p,g)===this.mazeGen.TYPES.JELLY_PORTAL?X.COLORS.THREE_JELLY_PORTAL:X.COLORS.THREE_TELEPORT;h.material.color.setHex(y),h.material.emissive.setHex(y),h.material.emissiveIntensity=2.5,h.material.opacity=.95}}})}}if(!this.isMap3DActive&&!this.isZoomTransitionActive){let o=0,r=0;const h=1e3/X.HUNTER_SPEED*X.MOVE_SPEED_FACTOR*t;let f=0,p=0;if(this.input.touchMoveVector?(f=this.input.touchMoveVector.x,p=this.input.touchMoveVector.y):((this.input.keys.w||this.input.keys.arrowup)&&(p-=1),(this.input.keys.s||this.input.keys.arrowdown)&&(p+=1),(this.input.keys.a||this.input.keys.arrowleft)&&(f-=1),(this.input.keys.d||this.input.keys.arrowright)&&(f+=1)),f!==0||p!==0){const x=Math.sqrt(f*f+p*p);o=f/x*h,r=p/x*h,this.player.dir=Math.atan2(r,o)}let g=!1;if(o!==0||r!==0){g=!0;const x=.01,A=Math.abs(o)>x,N=Math.abs(r)>x;A&&N?(this.playerSide=o>0?"right":"left",this.playerVertical=r>0?"down":"up"):A?this.playerSide=o>0?"right":"left":N&&(this.playerVertical=r>0?"down":"up")}if(g?(this.playerWalkCycle=(this.playerWalkCycle||0)+t*18,this.playerSquashTargetX=1+Math.sin(this.playerWalkCycle)*.15,this.playerSquashTargetY=1-Math.sin(this.playerWalkCycle)*.15):(this.playerSquashTargetX=1,this.playerSquashTargetY=1),this.playerSquashX=this.playerSquashX||1,this.playerSquashY=this.playerSquashY||1,this.playerSquashX+=(this.playerSquashTargetX-this.playerSquashX)*.25,this.playerSquashY+=(this.playerSquashTargetY-this.playerSquashY)*.25,o!==0||r!==0){const x=Math.floor(this.player.x),A=Math.floor(this.player.y),N=this.player.x+o,T=this.player.y+r,b=(Q,it,G)=>{const et=this.maze.get(Q,it,G);return et===this.mazeGen.TYPES.WALL||et===this.mazeGen.TYPES.STATUE?!1:et===this.mazeGen.TYPES.EXIT&&this.keysCollected<this.totalKeys?(this.triggerLockedExitWarning(),!1):!0},z=X.PLAYER_COLLISION_RADIUS,k=X.PLAYER_COLLISION_OFFSET_X||0,q=X.PLAYER_COLLISION_OFFSET_Y||0,w=(Q,it,G)=>{const et=Math.floor(Q+k-z),ct=Math.floor(Q+k+z),_t=Math.floor(it+q-z),L=Math.floor(it+q+z);for(let B=et;B<=ct;B++)for(let Z=_t;Z<=L;Z++)if(B<0||B>=this.mazeGen.size||Z<0||Z>=this.mazeGen.size||!b(B,Z,G))return!1;return!0};w(N,this.player.y,this.player.z)&&(this.player.x=N),w(this.player.x,T,this.player.z)&&(this.player.y=T);const I=Math.floor(this.player.x),F=Math.floor(this.player.y),V=this.player.z;if(I!==x||F!==A){const Q=this.maze.get(x,A,V);if(Q===this.mazeGen.TYPES.VISITED||Q===this.mazeGen.TYPES.START||Q===this.mazeGen.TYPES.TELEPORT){const G=V+1<this.mazeGen.size&&this.maze.get(I,F,V+1)!==this.mazeGen.TYPES.WALL,et=V-1>=0&&this.maze.get(I,F,V-1)!==this.mazeGen.TYPES.WALL;G&&et?this.dialogueWhichWayTriggered||(this.ui.showInfoBanner(Ot("msgWhichWay")),this.dialogueWhichWayTriggered=!0):G?this.dialogueUpTriggered||(this.ui.showInfoBanner(Ot("msgElevatorUp")),this.dialogueUpTriggered=!0):et&&(this.dialogueDownTriggered||(this.ui.showInfoBanner(Ot("msgElevatorDown")),this.dialogueDownTriggered=!0))}}const K=(Q,it,G)=>{const et=this.maze.get(Q,it,G);(et===this.mazeGen.TYPES.PATH||et===this.mazeGen.TYPES.KEY||et===this.mazeGen.TYPES.MANA)&&(et===this.mazeGen.TYPES.KEY?this.collectKey(Q,it,G):et===this.mazeGen.TYPES.MANA?this.collectMana(Q,it,G):(this.maze.set(Q,it,G,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${Q},${it},${G}`)),this.staticMapCacheDirty=!0)};K(I,F,V),I!==x&&F!==A&&(K(I,A,V),K(x,F,V));const tt=this.maze.get(I,F,V);!this.exitPathfinderUnlocked&&this.checkExitNeighborVisited()&&(this.exitPathfinderUnlocked=!0,this.ui.showInfoBanner(Ot("msgExitFound"))),tt===this.mazeGen.TYPES.EXIT&&this.triggerVictory()}if((o!==0||r!==0)&&(this.skipCellAnimations=!1),this.checkHunterCollision(),this.isGameOver)return;const v=Math.floor(this.player.x),m=Math.floor(this.player.y),d=this.player.z,u=this.maze.get(v,m,d)===this.mazeGen.TYPES.JELLY_PORTAL,M=this.maze.get(v,m,d)===this.mazeGen.TYPES.TELEPORT||u,_=this.teleportCooldownTicks>0;if(v>=0&&v<this.mazeGen.size&&m>=0&&m<this.mazeGen.size){if(this.maze.get(v,m,d)===this.mazeGen.TYPES.PATH)this.maze.set(v,m,d,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${v},${m},${d}`),this.staticMapCacheDirty=!0;else if(M){const b=`${v},${m},${d}`;!(this.lastPlayerCell&&this.lastPlayerCell.x===v&&this.lastPlayerCell.y===m&&this.lastPlayerCell.z===d)&&!_&&(this.discoveredTeleports.add(b),this.staticMapCacheDirty=!0,u?(this.triggerSave(),this.ui.showInfoBanner(Ot("msgJellyPortalNotSafe"))):(this.triggerSave(),this.ui.showInfoBanner(Ot("msgSafePointTeleport"))))}const x=d<this.mazeGen.size-1&&this.maze.get(v,m,d+1)!==this.mazeGen.TYPES.WALL,A=d>0&&this.maze.get(v,m,d-1)!==this.mazeGen.TYPES.WALL,N=x||A;if(this.lastPlayerCell){const b=this.lastPlayerCell.x,z=this.lastPlayerCell.y,k=this.lastPlayerCell.z,q=k<this.mazeGen.size-1&&this.maze.get(b,z,k+1)!==this.mazeGen.TYPES.WALL,w=k>0&&this.maze.get(b,z,k-1)!==this.mazeGen.TYPES.WALL;if((q||w)&&(b!==v||z!==m||k!==d)){const V=`${b},${z},${k}`;this.revealedPathSet.has(V)&&(this.revealedPathSet.delete(V),this.staticMapCacheDirty=!0)}}const T=`${v},${m},${d}`;!N&&this.revealedPathSet.has(T)&&(this.revealedPathSet.delete(T),this.staticMapCacheDirty=!0)}M&&!_?(this.input.keys.e||this.input.keys.pageup||this.input.keys.q||this.input.keys.pagedown)&&(["e","q","pageup","pagedown"].forEach(x=>this.input.keys[x]=!1),this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(Ot("msgNoOtherActiveTeleport"))):((this.input.keys.e||this.input.keys.pageup)&&this.changeFloor(2),(this.input.keys.q||this.input.keys.pagedown)&&this.changeFloor(-2)),this.input.keys.r&&(this.input.keys.r=!1,this.tryActivateJellyPortal()),(!this.lastPlayerCell||this.lastPlayerCell.x!==v||this.lastPlayerCell.y!==m||this.lastPlayerCell.z!==d)&&(this.staticMapCacheDirty=!0);const E=window.innerHeight>window.innerWidth;this.ui.updateMobileMapButton(M,!!_,E,u),this.updateFloorUI(),this.lastPlayerCell={x:v,y:m,z:d}}const a=performance.now();if(a-this.lastHunterMove>X.HUNTER_SPEED){if(this.lastHunterMove=a,this.teleportCooldownTicks>0&&(this.teleportCooldownTicks--,this.staticMapCacheDirty=!0,this.teleportCooldownTicks===0)){this.inactiveTeleportPos=null;for(const m of this.hunters){if(m.state==="DEAD_BY_JELLY")continue;const d=this.maze.get(m.x,m.y,m.z);if(d===this.mazeGen.TYPES.VISITED||d===this.mazeGen.TYPES.START||d===this.mazeGen.TYPES.EXIT){const u=m.state;m.state="TRACKING",u!=="TRACKING"&&!this.dialogueDetectedTriggered&&(this.ui.showInfoBanner(Ot("msgIWasDetected")),this.dialogueDetectedTriggered=!0)}else m.state="WANDERING",m.pathToTarget=[],m.visitedNodes.clear(),m.visitedNodes.add(`${m.x},${m.y},${m.z}`)}}let o=0,r=0;const c=this.hunters.some(m=>m.state==="SLEEP");for(const m of this.hunters){if(m.state==="SLEEP"||m.state==="DEAD_BY_JELLY")continue;const d=m.state;m.move(this.player,this.maze,this.mazeGen.TYPES),m.state==="TRACKING"&&d!=="TRACKING"&&!this.dialogueDetectedTriggered&&(this.ui.showInfoBanner(Ot("msgIWasDetected")),this.dialogueDetectedTriggered=!0),(m.state==="TRACKING"||m.state==="TELEPORT_TRACKING")&&o++;const u=m.z===this.player.z;let M=!1;if(u)M=!0;else{const _=Math.max(5,Math.floor(this.degree*1.2));Kp({x:m.x,y:m.y,z:m.z},{x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.maze,this.mazeGen.size,this.mazeGen.TYPES.WALL,_,this.mazeGen.startPos)<=_&&(M=!0)}if(M&&r++,this.checkHunterCollision(),this.isGameOver)return}const l=o>0;this.ui.updateHazardWarning(l,this.teleportCooldownTicks,this.isSafeMode,c),l?this.canvas.classList.add("hunted-map-effect"):this.canvas.classList.remove("hunted-map-effect"),this.ui.setNearbyWarning(r>0);let h=1/0;const f=Math.floor(this.player.x),p=Math.floor(this.player.y),g=this.player.z,v=this.hunters.filter(m=>m.state!=="SLEEP");for(const m of v){const d=qp({x:m.x,y:m.y,z:m.z},{x:f,y:p,z:g},this.maze,this.mazeGen.size,this.mazeGen.TYPES.WALL);d<h&&(h=d)}this.ui.updateProximeter(h,v.length,this.isGameOver)}}changeFloor(t){if(this.isGameOver||this.floorTransition)return;this.skipCellAnimations=!0;const e=Math.floor(this.player.x),i=Math.floor(this.player.y),n=this.player.z,a=n+1<this.mazeGen.size&&this.maze.get(e,i,n+1)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,n+1)!==this.mazeGen.TYPES.STATUE,o=n-1>=0&&this.maze.get(e,i,n-1)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,n-1)!==this.mazeGen.TYPES.STATUE;if(t>0&&a||t<0&&o){const r=n+t;if(r>=0&&r<this.mazeGen.size&&this.maze.get(e,i,r)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,r)!==this.mazeGen.TYPES.STATUE){const c=n+t/2;this.maze.get(e,i,c)!==this.mazeGen.TYPES.ELEVATOR_VISITED&&(this.maze.set(e,i,c,this.mazeGen.TYPES.ELEVATOR_VISITED),this.staticMapCacheDirty=!0);const l=`${e},${i},${c}`;this.revealedPathSet.delete(l);const h=document.createElement("canvas");h.width=this.canvas.width,h.height=this.canvas.height;const f=h.getContext("2d");this.renderMapToContext(f,this.player.z),this.player.x=e+X.PLAYER_START_X,this.player.y=i+X.PLAYER_START_Y%1,this.player.z=r,this.staticMapCacheDirty=!0,this.populateFullyRevealedCells(r),this.maze.get(e,i,r)===this.mazeGen.TYPES.PATH&&this.maze.set(e,i,r,this.mazeGen.TYPES.VISITED);const p=document.createElement("canvas");p.width=this.canvas.width,p.height=this.canvas.height;const g=p.getContext("2d");this.renderMapToContext(g,this.player.z),this.floorTransition={canvasOld:h,canvasNew:p,progress:0,duration:.4,delta:t},this.updateFloorUI(),this.draw2DMap(0),this.maze.get(e,i,r)===this.mazeGen.TYPES.EXIT&&this.triggerVictory()}}}toggleMap3D(){this.isMap3DActive=!this.isMap3DActive,this.isTeleportMode=!1;const t=document.getElementById("mobile-teleport-exit-btn");if(t&&t.classList.add("hidden"),this.isMap3DActive){this.ui.setMap3DVisible(!0),this.activeMapFloor=this.player.z,this.visualActiveFloor=this.player.z,this.mapCursor={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.mapZoom=1,this.mapPanOffsetX=0,this.mapPanOffsetY=0,this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="none");const e=document.getElementById("map3d-instructions");e&&(e.style.display="none"),this.isometricCanvas||this.initIsometricCanvas(),this.isometricCanvas.style.display="block"}else this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.remove("hidden"),this.ui.setMap3DVisible(!1),this.isometricCanvas&&(this.isometricCanvas.style.display="none")}build3DMap(t=!1){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(new fo(16777215,.6));const e=new uo(16777215,.4);e.position.set(10,20,10),this.scene.add(e),this.pulsatingMaterials=[],this.hunterMeshes=[],this.teleportMeshes=[],this.knownMeshes=[],this.keyMeshes=[],this.manaMeshes=[],this.exitMesh=null;const i=this.mazeGen.size,n=(M,_,y)=>{if(y<0||y>=i)return!1;const E=this.maze.get(M,_,y);return E===2||E===3||E===4||E===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${M},${_},${y}`)||this.visitedCells.has(`${M},${_},${y}`)};this.gridMeshes=new Array(i*i*i).fill(null);const a=new we(.9,.9,.9),o=this.isTeleportMode?X.TELEPORT_MAP_OPACITY:1,r=new we(.9,.425,.9),c=new we(.9,.425,.9),l=new ps(.35,.35,2*this.vScale,8);new ie({color:X.COLORS.THREE_VISITED,transparent:!0,opacity:.8*o});for(let M=0;M<i;M++)for(let _=0;_<i;_++)for(let y=0;y<i;y++){const E=this.maze.get(M,_,y);if(E===this.mazeGen.TYPES.WALL||E===this.mazeGen.TYPES.STATUE)continue;if(y%2===0&&E!==0){const V=`${M},${_},${y}`,$=this.revealedPathSet.has(V),K=E===this.mazeGen.TYPES.ELEVATOR_VISITED,tt=E===1&&(n(M,_,y-1)||n(M,_,y+1));if(K||tt||$||t){let Q;if($)Q=new ie({color:16777215,transparent:!0,opacity:.95*o,emissive:16777215,emissiveIntensity:2*o});else if(K)Q=new ie({color:X.COLORS.THREE_VISITED,transparent:!0,opacity:.8*o});else if(tt||t){const G=t?X.COLORS.THREE_VISITED:X.COLORS.THREE_KNOWN;Q=new ie({color:G,transparent:!0,opacity:t?.72:.6*o,emissive:G,emissiveIntensity:t?0:.5*o}),t||this.pulsatingMaterials.push(Q)}const it=new te(l,Q);it.position.set(M-i/2,(y-i/2)*this.vScale,_-i/2),this.scene.add(it),this.gridMeshes[M*i*i+_*i+y]=it,tt&&!$&&(it.userData={gridX:M,gridY:_,gridZ:y},this.knownMeshes.push(it))}continue}const A=E===this.mazeGen.TYPES.JELLY_PORTAL,N=E===this.mazeGen.TYPES.TELEPORT||A,T=N&&this.discoveredTeleports.has(`${M},${_},${y}`),b=E===2||E===3||E===4||E===5||T,z=(E===1||N&&!T)&&this.isNearVisited(M,_,y);if(T){const V=M===Math.floor(this.mazeGen.startPos.x)&&_===Math.floor(this.mazeGen.startPos.y)&&y===this.mazeGen.startPos.z,$=this.teleportCooldownTicks>0;if(V){const L=$?0:this.isTeleportMode?2.5:.5,B=$?4473924:X.COLORS.THREE_START,Z=$?.4:this.isTeleportMode?.95:.8*o,W=new ie({color:B,emissive:B,emissiveIntensity:L*o,transparent:!0,opacity:Z}),Y=new te(a,W);Y.position.set(M-i/2,(y-i/2)*this.vScale,_-i/2),this.isTeleportMode&&Y.scale.set(1.4,1.4,1.4),Y.userData={isTeleport:!0,gridX:M,gridY:_,gridZ:y},this.scene.add(Y),this.teleportMeshes.push(Y);continue}const K=M===Math.floor(this.player.x)&&_===Math.floor(this.player.y)&&y===this.player.z;let tt=this.isTeleportMode?.9:.45,Q=this.isTeleportMode?2.5:.8,it=A?X.COLORS.THREE_JELLY_PORTAL:X.COLORS.THREE_TELEPORT,G=.95;$?(it=4473924,Q=0,G=.4):this.isTeleportMode&&K&&(it=65535,G=.5,Q=3);const et=new xn(tt,16,16),ct=new ie({color:it,emissive:it,emissiveIntensity:Q,transparent:!0,opacity:G}),_t=new te(et,ct);_t.position.set(M-i/2,(y-i/2)*this.vScale,_-i/2),_t.userData={isTeleport:!0,gridX:M,gridY:_,gridZ:y},this.scene.add(_t),this.teleportMeshes.push(_t);continue}if(E===this.mazeGen.TYPES.KEY){const V=new Ia(.3,0),$=new ie({color:X.COLORS.THREE_KEY,emissive:X.COLORS.THREE_KEY,emissiveIntensity:.6*o,shininess:100}),K=new te(V,$);if(K.position.set(M-i/2,(y-i/2)*this.vScale,_-i/2),K.userData={isKey:!0,gridX:M,gridY:_,gridZ:y},this.scene.add(K),this.keyMeshes.push(K),this.pulsatingMaterials.push($),!this.visitedCells.has(`${M},${_},${y}`))continue}if(E===this.mazeGen.TYPES.MANA){const V=new La(.22,0),$=new ie({color:65535,emissive:65535,emissiveIntensity:.7*o,shininess:120}),K=new te(V,$);if(K.position.set(M-i/2,(y-i/2)*this.vScale,_-i/2),K.userData={isMana:!0,gridX:M,gridY:_,gridZ:y},this.scene.add(K),this.manaMeshes.push(K),this.pulsatingMaterials.push($),!this.visitedCells.has(`${M},${_},${y}`))continue}const w=`${M},${_},${y}`,I=this.revealedPathSet.has(w);if(t?E!==this.mazeGen.TYPES.WALL:b||z||I){let V=t?X.COLORS.THREE_VISITED:X.COLORS.THREE_KNOWN,$;I?(V=16777215,$=new ie({color:V,transparent:!0,opacity:.95*o,emissive:V,emissiveIntensity:2*o})):b||t?(V=X.COLORS.THREE_VISITED,E===3?V=X.COLORS.THREE_START:E===4&&(V=this.keysCollected===this.totalKeys?X.COLORS.THREE_EXIT:16724736),$=new ie({color:V,transparent:!0,opacity:t?.72:.8*o})):z&&($=new ie({color:V,transparent:!0,opacity:.6*o,emissive:V,emissiveIntensity:.5*o}),this.pulsatingMaterials.push($));const K=y<i-1&&this.maze.get(M,_,y+1)!==0,tt=y>0&&this.maze.get(M,_,y-1)!==0;if(K||tt){const et=this.pulsatingMaterials.indexOf($);if(et>-1&&this.pulsatingMaterials.splice(et,1),K&&tt){let ct=!1,_t=!1;if(I){if(this.activePathReveal){const Mt=this.activePathReveal.findIndex(vt=>vt.x===M&&vt.y===_&&vt.z===y);if(Mt!==-1&&Mt<this.activePathReveal.length-1){const vt=this.activePathReveal[Mt+1];vt.z>y&&(ct=!0),vt.z<y&&(_t=!0)}}!ct&&!_t&&(ct=this.revealedPathSet.has(`${M},${_},${y+1}`)||this.revealedPathSet.has(`${M},${_},${y+2}`),_t=this.revealedPathSet.has(`${M},${_},${y-1}`)||this.revealedPathSet.has(`${M},${_},${y-2}`))}const L=I&&(ct||!ct&&!_t),B=I&&(_t||!ct&&!_t),Z=new ie({color:B?16777215:X.COLORS.THREE_ELEVATOR_DOWN,transparent:!0,opacity:.9*o,emissive:B?16777215:X.COLORS.THREE_ELEVATOR_DOWN,emissiveIntensity:(B?2:.4)*o}),W=new ie({color:L?16777215:X.COLORS.THREE_ELEVATOR_UP,transparent:!0,opacity:.9*o,emissive:L?16777215:X.COLORS.THREE_ELEVATOR_UP,emissiveIntensity:(L?2:.4)*o}),Y=new te(r,Z),D=new te(c,W);Y.position.set(M-i/2,(y-i/2)*this.vScale-.2125,_-i/2),D.position.set(M-i/2,(y-i/2)*this.vScale+.2125,_-i/2),this.scene.add(Y),this.scene.add(D),this.gridMeshes[M*i*i+_*i+y]=D,z&&!I&&(Y.userData={gridX:M,gridY:_,gridZ:y},D.userData={gridX:M,gridY:_,gridZ:y},this.knownMeshes.push(Y),this.knownMeshes.push(D));continue}else{const ct=I?16777215:K?X.COLORS.THREE_ELEVATOR_UP:X.COLORS.THREE_ELEVATOR_DOWN,_t=I?2:.4;$=new ie({color:ct,transparent:!0,opacity:.9*o,emissive:ct,emissiveIntensity:_t*o})}}const Q=M===Math.floor(this.player.x)&&_===Math.floor(this.player.y)&&y===this.player.z,it=this.hunters.some(et=>et.x===M&&et.y===_&&et.z===y);if(Q||it){const et=new we(.9,.05,.9),ct=new te(et,$);ct.position.set(M-i/2,(y-i/2)*this.vScale-.425,_-i/2),this.scene.add(ct),this.gridMeshes[M*i*i+_*i+y]=ct;continue}const G=new te(a,$);if(G.position.set(M-i/2,(y-i/2)*this.vScale,_-i/2),E===4&&(this.exitMesh=G,this.keysCollected<this.totalKeys)){const et=new we(.95,.95,.95),ct=new fs({color:16711680,wireframe:!0}),_t=new te(et,ct);G.add(_t)}this.scene.add(G),this.gridMeshes[M*i*i+_*i+y]=G,(z||E===this.mazeGen.TYPES.EXIT)&&!I&&(G.userData={gridX:M,gridY:_,gridZ:y},this.knownMeshes.push(G))}}if(t)return;const h=new xn(.42,16,16),f=new ie({color:16711680,emissive:16711680,emissiveIntensity:.8,depthWrite:!1}),p=new te(h,f);p.position.set(Math.floor(this.player.x)-i/2,(this.player.z-i/2)*this.vScale+.05,Math.floor(this.player.y)-i/2),this.scene.add(p);const g=new xn(.4),v=new ie({color:X.COLORS.THREE_HUNTER,emissive:X.COLORS.THREE_HUNTER,emissiveIntensity:.8,depthWrite:!1}),m=new ie({color:X.COLORS.THREE_HUNTER,transparent:!0,opacity:.4,emissive:X.COLORS.THREE_HUNTER,emissiveIntensity:.3,depthWrite:!1}),d=new ie({color:X.COLORS.THREE_HUNTER,transparent:!0,opacity:.15,emissive:X.COLORS.THREE_HUNTER,emissiveIntensity:.1,depthWrite:!1}),u=g;for(let M=0;M<this.hunters.length;M++){const _=this.hunters[M];if(_.state==="SLEEP")continue;const y=new te(u,d),E=new te(u,m);y.visible=!1,E.visible=!1,y.renderOrder=99,E.renderOrder=99,this.scene.add(y),this.scene.add(E);const x=new Mn;x.renderOrder=99;const A=new te(g,v);x.add(A);const N=4,T=[],b=new we(.18,.18,.18),z=[X.COLORS.THREE_HUNTER,16711935,65535,16776960];for(let k=0;k<N;k++){const q=new ie({color:z[k%z.length],transparent:!0,opacity:.8,emissive:z[k%z.length],emissiveIntensity:.8,depthWrite:!1}),w=new te(b,q);w.userData={angle:k/N*Math.PI*2,radius:.35+Math.random()*.1,speed:1+Math.random()*1.5,phaseY:Math.random()*Math.PI*2},x.add(w),T.push(w)}x.position.set(_.x-i/2,(_.z-i/2)*this.vScale,_.y-i/2),this.scene.add(x),this.hunterMeshes.push({hunter:_,mesh:x,coreMesh:A,particles:T,trail1:E,trail2:y})}this.camera.position.set(i,i*this.vScale,i),this.controls.target.set(0,0,0),this.controls.update()}draw2DMap(t=.016){if(this.deathAnimation&&this.deathAnimation.active){if(this.deathAnimation.delayElapsed<this.deathAnimation.delayDuration)this.deathAnimation.delayElapsed+=t,this.updateNotification(t);else if(this.deathAnimation.screenFilled)this.deathAnimation.reversing&&(this.deathAnimation.elapsed-=t,this.deathAnimation.elapsed<=0&&(this.deathAnimation=null,this.isGameOver=!1,this.ui.initGameUI(this.isSafeMode),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1),this.ui.showInfoBanner(Ot("msgPlayerRespawn"))));else if(this.deathAnimation.elapsed+=t,this.updateNotification(t),this.deathAnimation.elapsed>=this.deathAnimation.duration){this.deathAnimation.screenFilled=!0,this.activeNotification=null,this.notificationQueue=[];const n=Math.floor(this.deathAnimation.playerPos.x),a=Math.floor(this.deathAnimation.playerPos.y),o=this.deathAnimation.playerPos.z;if(this.maze.get(n,a,o)===this.mazeGen.TYPES.JELLY_PORTAL){const f=this.mazeGen.size,p=[],g=Math.floor(this.mazeGen.startPos.x),v=Math.floor(this.mazeGen.startPos.y),m=this.mazeGen.startPos.z;for(let d=0;d<f;d++)for(let u=0;u<f;u++)for(let M=0;M<f;M++){const _=this.maze.get(d,u,M),y=d===g&&u===v&&M===m,E=d===n&&u===a&&M===o;(_===this.mazeGen.TYPES.PATH||_===this.mazeGen.TYPES.VISITED)&&M%2!==0&&!y&&!E&&p.push({x:d,y:u,z:M})}if(p.length>0){const d=p[Math.floor(Math.random()*p.length)];this.maze.set(d.x,d.y,d.z,this.mazeGen.TYPES.KEY)}else this.maze.set(n,a,o,this.mazeGen.TYPES.KEY)}else this.maze.set(n,a,o,this.mazeGen.TYPES.KEY);this.totalKeys++,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.staticMapCacheDirty=!0;let c=this.mazeGen.startPos.x,l=this.mazeGen.startPos.y,h=this.mazeGen.startPos.z;this.lastSavePos&&(c=this.lastSavePos.x,l=this.lastSavePos.y,h=this.lastSavePos.z),this.player.x=c,this.player.y=l,this.player.z=h,this.activeMapFloor=h,this.visualActiveFloor=h,this.lastPlayerCell={x:Math.floor(c),y:Math.floor(l),z:h},this.hunters=[],this.initHunters(this.degree),this.suppressWakeHuntersBanner=!0,ns(this),this.deathAnimation.reversing=!0}}this.floorTransition&&(this.floorTransition.progress+=t/this.floorTransition.duration,this.floorTransition.progress>=1&&(this.floorTransition=null));const e=this.mazeGen.size,i=this.isZoomActive?11:e;if(this.zoomVisibleCells===void 0?this.zoomVisibleCells=i:(this.zoomVisibleCells+=(i-this.zoomVisibleCells)*(1-Math.exp(-12*t)),Math.abs(this.zoomVisibleCells-i)<.01&&(this.zoomVisibleCells=i)),this.floorTransition){const n=this.floorTransition.progress,a=this.canvas.width/2,o=this.canvas.height/2,r=this.floorTransition.delta>0;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let c,l;r?(c=1-.2*n,l=1.2-.2*n):(c=1+.2*n,l=.8+.2*n),this.ctx.save(),this.ctx.globalAlpha=1-n,this.ctx.translate(a,o),this.ctx.scale(c,c),this.ctx.drawImage(this.floorTransition.canvasOld,-a,-o),this.ctx.restore(),this.ctx.save(),this.ctx.globalAlpha=n,this.ctx.translate(a,o),this.ctx.scale(l,l),this.ctx.drawImage(this.floorTransition.canvasNew,-a,-o),this.ctx.restore()}else this.renderMapToContext(this.ctx,this.player.z)}renderMapToContext(t,e){t.clearRect(0,0,t.canvas.width,t.canvas.height);const i=this.mazeGen.size,n=i>11,a=n?t.canvas.width/11:t.canvas.width/i,o=this.player.x,r=this.player.y,c=Math.floor(o),l=Math.floor(r);let h=n||this.isZoomTransitionActive,f=n?this.zoomVisibleCells:i;if(this.isZoomTransitionActive){const m=Math.min(1,(2-this.zoomTransitionTimer)/2),u=(y=>1-Math.pow(1-y,3))(m),M=3;f=M+((n?11:i)-M)*u}if(h){t.save();const v=(n?11:i)/f,m=f/2;let d=o,u=r;d<m&&(d=m),d>i-m&&(d=i-m),u<m&&(u=m),u>i-m&&(u=i-m);const M=t.canvas.width/2,_=t.canvas.height/2;t.translate(M,_),t.scale(v,v),t.translate(-d*a,-u*a)}const p=n?i*a:this.canvas.width,g=n?i*a:this.canvas.height;(this.staticMapCacheDirty||this.staticMapCacheCanvas.width!==p||this.staticMapCacheCanvas.height!==g||this.jellyPortalFreezeTimer>0)&&this.updateStaticMapCache(e),t.drawImage(this.staticMapCacheCanvas,0,0);for(const v of this.hunters){if(v.state==="SLEEP")continue;const m=v.visualZ!==null?v.visualZ:v.z,d=v.visualX!==null?v.visualX:v.x,u=v.visualY!==null?v.visualY:v.y;if(m===null||d===null||u===null)continue;const M=Math.abs(m-e),_=Math.max(0,1-M);if(_<=0)continue;const y=v.x!==null?v.x:d,E=v.y!==null?v.y:u,x=y-d,A=E-u,N=Math.sqrt(x*x+A*A),T=Math.max(0,Math.min(1,1-N)),b=[];if(v.lastPos&&(v.lastPos.x!==y||v.lastPos.y!==E)&&v.lastPos.z===e){const z=.95-T*.47,k=.4-T*.2;b.push({pos:v.lastPos,sizeFactor:z,opacityFactor:k,age:1})}if(v.history&&v.history.length===2){const z=v.history[0];if(z.z===e){const k=.48*(1-T),q=.2*(1-T);k>.01&&b.push({pos:z,sizeFactor:k,opacityFactor:q,age:2})}}if(b.forEach(z=>{if(v.lowCanvas){const k=z.pos.x*a+a/2,q=z.pos.y*a+a/2,w=a*z.sizeFactor*_,I=v.jellyTime-z.age*.2,F=Math.sin(I)*6,V=Math.cos(I*.7)*4,$=1+Math.sin(I*1.2)*.06,K=1+Math.cos(I*.8)*.06,tt=F*Math.PI/180,Q=V*Math.PI/180;t.save(),t.globalAlpha=z.opacityFactor,t.translate(k,q),t.transform($,Math.tan(Q),Math.tan(tt),K,0,0),t.imageSmoothingEnabled=!1,t.drawImage(v.lowCanvas,-w/2,-w/2,w,w),t.restore()}}),v.lowCanvas){const z=d*a+a/2,k=u*a+a/2,q=a*.95*_,w=v.jellyTime,I=Math.sin(w)*6,F=Math.cos(w*.7)*4,V=1+Math.sin(w*1.2)*.06,$=1+Math.cos(w*.8)*.06,K=I*Math.PI/180,tt=F*Math.PI/180;t.save();let Q=.35,it=q;if(v.state==="DYING"){const _t=Math.min(1,this.jellyPortalResetElapsed/this.jellyPortalResetDuration);it=q*(1-_t),Q=.35*(1-_t)}const G=-a*.12*_,et=-a*.12*_;t.translate(z+G,k+et),t.transform(V,Math.tan(tt),Math.tan(K),$,0,0),t.filter=`brightness(0) blur(1px) opacity(${Q})`,t.imageSmoothingEnabled=!1,t.drawImage(v.lowCanvas,-it/2,-it/2,it,it),t.restore(),t.save();let ct=1;if(v.state==="DYING"){const _t=Math.min(1,this.jellyPortalResetElapsed/this.jellyPortalResetDuration);it=q*(1-_t),ct=1-_t;const L=(Math.random()-.5)*a*.15,B=(Math.random()-.5)*a*.15;t.translate(L,B)}t.globalAlpha=ct,t.translate(z,k),t.transform(V,Math.tan(tt),Math.tan(K),$,0,0),t.imageSmoothingEnabled=!1,t.drawImage(v.lowCanvas,-it/2,-it/2,it,it),t.restore()}}if(!this.deathAnimation||!this.deathAnimation.screenFilled){const v=`${this.playerVertical}_${this.playerSide}`,m=this.mageImages[v],d=o*a,u=r*a,M=X.PLAYER_SHADOW_OFFSET_X!==void 0?X.PLAYER_SHADOW_OFFSET_X:-.28,_=X.PLAYER_SHADOW_OFFSET_Y!==void 0?X.PLAYER_SHADOW_OFFSET_Y:-.28,y=d+a*M,E=u+a*_;t.save(),t.beginPath();const x=X.PLAYER_SHADOW_WIDTH_FACTOR!==void 0?X.PLAYER_SHADOW_WIDTH_FACTOR:.45,A=X.PLAYER_SHADOW_HEIGHT_FACTOR!==void 0?X.PLAYER_SHADOW_HEIGHT_FACTOR:.3,N=a*x,T=a*A;t.ellipse(y,E,N,T,0,0,Math.PI*2),t.fillStyle="rgba(0, 0, 0, 0.4)",t.fill(),t.restore();const b=Math.max(0,Math.floor((y-N)/a)),z=Math.min(i-1,Math.floor((y+N)/a)),k=Math.max(0,Math.floor((E-T)/a)),q=Math.min(i-1,Math.floor((E+T)/a));for(let I=b;I<=z;I++)for(let F=k;F<=q;F++)this.maze.get(I,F,e)===0&&(this.isNearVisited(I,F,e)||this.isAdjacentToStatue(I,F,e))&&(t.save(),this.wallImage.complete&&this.wallImage.naturalWidth!==0?t.drawImage(this.wallImage,I*a,F*a,a,a):(t.fillStyle=X.COLORS.WALL,t.fillRect(I*a,F*a,a,a)),t.restore());let w=1;if(this.deathAnimation&&this.deathAnimation.active&&(Math.floor(Date.now()/120)%2===0||(w=.2)),m&&m.complete){t.save(),t.globalAlpha=w;const I=a*.9,F=I,V=I*(m.height/m.width);t.translate(d,u),t.scale(this.playerSquashX||1,this.playerSquashY||1);const $=-V*.85;t.drawImage(m,-F/2,$,F,V),t.restore()}else t.save(),t.globalAlpha=w,t.strokeStyle=X.COLORS.PLAYER_OUTLINE,t.lineWidth=1,t.strokeRect(c*a+2,l*a+2,a-4,a-4),t.fillStyle=X.COLORS.PLAYER,t.beginPath(),t.arc(d,u,a*.4,0,Math.PI*2),t.fill(),t.strokeStyle=X.COLORS.PLAYER,t.lineWidth=2,t.beginPath(),t.moveTo(d,u),t.lineTo(d+Math.cos(this.player.dir)*a*1,u+Math.sin(this.player.dir)*a*1),t.stroke(),t.restore();if(X.SHOW_COLLISION_DEBUG){t.save(),t.strokeStyle="#ff0000",t.lineWidth=1.5;const I=X.PLAYER_COLLISION_RADIUS*2*a,F=(X.PLAYER_COLLISION_OFFSET_X||0)*a,V=(X.PLAYER_COLLISION_OFFSET_Y||0)*a;t.strokeRect(d+F-I/2,u+V-I/2,I,I),t.restore()}if(this.deathAnimation&&this.deathAnimation.active){const I=Math.min(1,this.deathAnimation.delayElapsed/this.deathAnimation.delayDuration),F=-(m&&m.complete?a*.9*(m.height/m.width)*.85:a*.5),V=a*.7,$=(1-I)*F-4*V*I*(1-I);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){t.save();const K=this.keyImage,tt=K.naturalWidth/K.naturalHeight,Q=a*.55;let it=Q,G=Q;tt>1?G=Q/tt:it=Q*tt,t.drawImage(K,d-it/2,u+$-G/2,it,G),t.restore()}else t.save(),t.beginPath(),t.arc(d,u+$,a*.15,0,2*Math.PI),t.fillStyle="#ffd700",t.fill(),t.restore()}}if(this.activeNotification){const v=this.activeNotification;t.save(),t.font=`bold ${a*.22}px monospace`;const m=t.measureText(v.text).width,d=a*.4,u=m+d,M=a*.48,_=o*a,y=r*a-a*1.5;let E=u;v.state==="OPENING"?E=u*v.widthProgress:v.state==="CLOSING"&&(E=u*v.closeProgress);const x=this.mazeGen.size*a,A=this.mazeGen.size*a;let N=_;N-E/2<0?N=E/2:N+E/2>x&&(N=x-E/2);let T=y;T-M/2<0?T=M/2:T+M/2>A&&(T=A-M/2),t.fillStyle="#000000",t.fillRect(N-E/2,T-M/2,E,M),t.strokeStyle="#00ffff",t.lineWidth=Math.max(1.5,a*.04),t.strokeRect(N-E/2,T-M/2,E,M),(v.state==="TYPING"||v.state==="WAITING")&&(t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.fillText(v.displayText,N,T)),t.restore()}if(h&&t.restore(),this.isZoomTransitionActive){const d=1-Math.min(1,(2-this.zoomTransitionTimer)/2);t.save(),t.fillStyle=`rgba(0, 0, 0, ${d})`,t.fillRect(0,0,t.canvas.width,t.canvas.height),t.restore()}if(this.deathAnimation&&this.deathAnimation.active){const v=this.deathAnimation.hunter;let m=v.visualX+.5,d=v.visualY+.5;this.deathAnimation.reversing&&(m=this.player.x,d=this.player.y);let u,M;if(n){const _=11/this.zoomVisibleCells,y=this.zoomVisibleCells/2;let E=o,x=r;E<y&&(E=y),E>i-y&&(E=i-y),x<y&&(x=y),x>i-y&&(x=i-y);const A=t.canvas.width/2,N=t.canvas.height/2;u=A+(m-E)*a*_,M=N+(d-x)*a*_}else u=m*a,M=d*a;if(!this.deathAnimation.screenFilled||this.deathAnimation.reversing){const _=Math.hypot(t.canvas.width,t.canvas.height)*1.1,y=this.deathAnimation.elapsed/this.deathAnimation.duration,x=y*y*(3-2*y)*_;t.save(),t.beginPath(),t.arc(u,M,x,0,Math.PI*2),t.clip(),t.fillStyle="rgba(15, 0, 25, 0.96)",t.fillRect(0,0,t.canvas.width,t.canvas.height);const A=45,N=n?11/this.zoomVisibleCells:1;for(let T=0;T<A;T++){const b=Math.random()*Math.PI*2,z=Math.pow(Math.random(),.7)*x,k=u+Math.cos(b)*z,q=M+Math.sin(b)*z,w=(15+Math.random()*70)*N,I=(3+Math.random()*12)*N,F=80+Math.floor(Math.random()*50),V=Math.floor(Math.random()*25),$=130+Math.floor(Math.random()*70);t.fillStyle=Math.random()<.12?"#00ff66":Math.random()<.12?"#00ccff":Math.random()<.08?"#ffffff":`rgb(${F},${V},${$})`,t.fillRect(k-w/2,q-I/2,w,I)}if(Math.random()<.3){t.fillStyle=Math.random()<.7?"#ffffff":"#b3ffff";const T=u+(Math.random()-.5)*x*.8,b=M+(Math.random()-.5)*x*.8,z=(2+Math.random()*5)*N,k=(10+Math.random()*30)*N;t.fillRect(T-z/2,b-k/2,z,k)}t.restore()}else{t.fillStyle="rgba(10, 0, 15, 1.0)",t.fillRect(0,0,t.canvas.width,t.canvas.height),t.fillStyle="rgba(138, 3, 196, 0.08)";for(let E=0;E<t.canvas.height;E+=6)Math.random()<.6&&t.fillRect(0,E+Math.sin(Date.now()*.01+E)*2,t.canvas.width,2);const _=Math.floor(Math.random()*5)+3,y=["#00ff66","#ff0055","#00ccff","#ffff00","#8a03c4","#ffffff"];for(let E=0;E<_;E++){const x=Math.random()*t.canvas.width,A=Math.random()*t.canvas.height,N=80+Math.random()*250,T=8+Math.random()*30;t.fillStyle=y[Math.floor(Math.random()*y.length)],t.globalAlpha=.12+Math.random()*.18,t.fillRect(x,A,N,T)}if(t.globalAlpha=1,Math.random()<.35){const E=Math.floor(Math.random()*t.canvas.height),x=15+Math.floor(Math.random()*80),A=Math.floor(Math.random()*40)-20;t.drawImage(t.canvas,0,E,t.canvas.width,x,A,E,t.canvas.width,x)}Math.random()<.15&&(t.fillStyle="rgba(255, 255, 255, 0.05)",t.fillRect(0,Math.random()*t.canvas.height,t.canvas.width,5+Math.random()*20))}}}updateStaticMapCache(t){const e=this.mazeGen.size,i=e>11,n=i?this.canvas.width/11:this.canvas.width/e,a=i?e*n:this.canvas.width,o=i?e*n:this.canvas.height;(this.staticMapCacheCanvas.width!==a||this.staticMapCacheCanvas.height!==o)&&(this.staticMapCacheCanvas.width=a,this.staticMapCacheCanvas.height=o);const r=this.staticMapCacheCtx;r.clearRect(0,0,a,o);const c=this.player.x,l=this.player.y,h=Math.floor(this.mazeGen.startPos.x),f=Math.floor(this.mazeGen.startPos.y),p=this.mazeGen.startPos.z,g=Date.now();let v=!1;const m=(d,u,M)=>{const _=`${d},${u},${t}`;if(this.skipCellAnimations||this.fullyRevealedCells.has(_))M(),this.skipCellAnimations&&this.fullyRevealedCells.add(_);else{let y=this.revealedCellsAnimation.get(_);y===void 0&&(this.revealedCellsAnimation.set(_,g),y=g);const E=g-y,A=Math.min(1,E/400);A<1?(r.save(),r.globalAlpha=A,M(),r.restore(),v=!0):(M(),this.revealedCellsAnimation.delete(_),this.fullyRevealedCells.add(_))}};for(let d=0;d<e;d++)for(let u=0;u<e;u++){const M=this.maze.get(d,u,t);if(this.jellyPortalFreezeTimer>0&&this.jellyPortalResetCells.has(`${d},${u}`)){const q=1.5-this.jellyPortalFreezeTimer,w=.6;let I=0;q>w&&(I=Math.min(1,(q-w)/.9)),r.save();const F=Math.round(100*(1-I));r.filter=`invert(${F}%)`;const V=d===Math.floor(c)&&u===Math.floor(l),$=M===this.mazeGen.TYPES.STATUE;if(!V&&!$&&(r.globalAlpha=1-I),M===this.mazeGen.TYPES.WALL)this.wallImage.complete&&this.wallImage.naturalWidth!==0?r.drawImage(this.wallImage,d*n,u*n,n,n):(r.fillStyle=X.COLORS.WALL,r.fillRect(d*n,u*n,n,n));else if($)if(this.floorImage.complete&&this.floorImage.naturalWidth!==0?r.drawImage(this.floorImage,d*n,u*n,n,n):(r.fillStyle=X.COLORS.PATH_VISITED,r.fillRect(d*n,u*n,n,n)),r.fillStyle="rgba(0, 0, 0, 0.4)",r.beginPath(),r.ellipse(d*n+n/2,(u+1)*n-n*.15,n*.35,n*.12,0,0,Math.PI*2),r.fill(),this.statueImage.complete&&this.statueImage.naturalWidth!==0){const tt=this.statueImage.width/this.statueImage.height,Q=n*.85,it=Q/tt,G=(u+1)*n-n*.05;r.drawImage(this.statueImage,d*n+n/2-Q/2,G-it,Q,it)}else r.fillStyle="#555555",r.fillRect(d*n+n*.3,u*n+n*.1,n*.4,n*.8);else if(this.floorImage.complete&&this.floorImage.naturalWidth!==0?r.drawImage(this.floorImage,d*n,u*n,n,n):(r.fillStyle=X.COLORS.PATH_VISITED,r.fillRect(d*n,u*n,n,n)),V)this.drawVortex2D(r,d,u,n,X.COLORS.JELLY_PORTAL,!1,`${d},${u},${t}`);else if(M===this.mazeGen.TYPES.TELEPORT)this.drawVortex2D(r,d,u,n,X.COLORS.TELEPORT_INACTIVE,!1,`${d},${u},${t}`);else if(M===this.mazeGen.TYPES.EXIT)this.drawVortex2D(r,d,u,n,X.COLORS.EXIT,!1,`${d},${u},${t}`);else if(M===this.mazeGen.TYPES.KEY){const tt=n*.05*Math.sin(Date.now()/300);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){const Q=this.keyImage,it=Q.naturalWidth/Q.naturalHeight,G=n*.7;let et=G,ct=G;it>1?ct=G/it:et=G*it,r.drawImage(Q,d*n+(n-et)/2,u*n+(n-ct)/2+tt,et,ct)}}else if(M===this.mazeGen.TYPES.MANA){const tt=n*.05*Math.sin(Date.now()/250);if(this.manaImage.complete&&this.manaImage.naturalWidth!==0){const Q=this.manaImage,it=Q.naturalWidth/Q.naturalHeight,G=n*.7;let et=G,ct=G;it>1?ct=G/it:et=G*it,r.drawImage(Q,d*n+(n-et)/2,u*n+(n-ct)/2+tt,et,ct)}}r.restore(),v=!0;continue}if(M===this.mazeGen.TYPES.STATUE){m(d,u,()=>{if(this.floorImage.complete&&this.floorImage.naturalWidth!==0?r.drawImage(this.floorImage,d*n,u*n,n,n):(r.fillStyle=X.COLORS.PATH_VISITED,r.fillRect(d*n,u*n,n,n)),r.fillStyle="rgba(0, 0, 0, 0.4)",r.beginPath(),r.ellipse(d*n+n/2,(u+1)*n-n*.15,n*.35,n*.12,0,0,Math.PI*2),r.fill(),this.statueImage.complete&&this.statueImage.naturalWidth!==0){const q=this.statueImage.width/this.statueImage.height,w=n*.85,I=w/q,F=d*n+n/2,V=(u+1)*n-n*.05;r.drawImage(this.statueImage,F-w/2,V-I,w,I)}else r.fillStyle="#555555",r.fillRect(d*n+n*.3,u*n+n*.1,n*.4,n*.8)});continue}const _=this.allTeleports.some(q=>q.x===d&&q.y===u&&q.z===t),y=_&&this.discoveredTeleports.has(`${d},${u},${t}`),E=M===2||M===3||M===4||M===5||y,x=M===this.mazeGen.TYPES.KEY,A=M===this.mazeGen.TYPES.MANA,N=(M===1||_&&!y)&&this.isNearVisited(d,u,t),T=this.revealedPathSet.has(`${d},${u},${t}`),b=t<e-1&&this.maze.get(d,u,t+1)!==0,z=t>0&&this.maze.get(d,u,t-1)!==0,k=b||z;T?m(d,u,()=>{k?this.drawElevator2D(r,d,u,n,b,z,c,l,!0,t):(r.fillStyle=X.COLORS.REVEALED_PATH,r.fillRect(d*n,u*n,n,n))}):E?m(d,u,()=>{if(y){const q=d===h&&u===f&&t===p,w=`${d},${u},${t}`,I=this.teleportCooldownTicks>0;if(q){const F=Math.floor(c)===d&&Math.floor(l)===u&&t===this.player.z,V=I?X.COLORS.TELEPORT_INACTIVE:F?X.COLORS.TELEPORT:X.COLORS.START;this.drawVortex2D(r,d,u,n,V,F&&!I,w)}else{const F=M===this.mazeGen.TYPES.JELLY_PORTAL,V=I?X.COLORS.TELEPORT_INACTIVE:F?X.COLORS.JELLY_PORTAL:X.COLORS.TELEPORT,$=Math.floor(c)===d&&Math.floor(l)===u&&t===this.player.z;this.drawVortex2D(r,d,u,n,V,$&&!I,w)}v=!0}else if(k)this.drawElevator2D(r,d,u,n,b,z,c,l,!1,t);else if(M===2&&this.floorImage.complete&&this.floorImage.naturalWidth!==0)r.drawImage(this.floorImage,d*n,u*n,n,n);else if(M===this.mazeGen.TYPES.EXIT){const q=`${d},${u},${t}`;if(this.drawVortex2D(r,d,u,n,X.COLORS.EXIT,!1,q),v=!0,this.keysCollected<this.totalKeys){r.strokeStyle="#ff3300",r.lineWidth=Math.max(2,n*.08);const w=d*n+n/2,I=u*n+n/2,F=n*.2;r.beginPath(),r.arc(w,I-F*.2,F*.6,Math.PI,0),r.stroke(),r.fillStyle="#111",r.fillRect(w-F,I-F*.1,F*2,F*1.5),r.strokeRect(w-F,I-F*.1,F*2,F*1.5),r.fillStyle="#ff3300",r.font=`bold ${Math.max(10,n*.35)}px sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(String(this.totalKeys-this.keysCollected),w,I+F*.6)}}else if(M===2)r.fillStyle=X.COLORS.PATH_VISITED,r.fillRect(d*n,u*n,n,n);else{const q=`${d},${u},${t}`,w=Math.floor(c)===d&&Math.floor(l)===u&&t===this.player.z,I=w?X.COLORS.TELEPORT:X.COLORS.START;this.drawVortex2D(r,d,u,n,I,w,q),v=!0}this.drawCellShadow2D(r,d,u,n,e,M,t)}):x?(m(d,u,()=>{if(this.visitedCells.has(`${d},${u},${t}`))if(y){const I=d===h&&u===f&&t===p,F=`${d},${u},${t}`,V=this.teleportCooldownTicks>0;if(I){const $=Math.floor(c)===d&&Math.floor(l)===u&&t===this.player.z,K=V?X.COLORS.TELEPORT_INACTIVE:$?X.COLORS.TELEPORT:X.COLORS.START;this.drawVortex2D(r,d,u,n,K,$&&!V,F)}else{const $=V?X.COLORS.TELEPORT_INACTIVE:X.COLORS.TELEPORT,K=Math.floor(c)===d&&Math.floor(l)===u&&t===this.player.z;this.drawVortex2D(r,d,u,n,$,K&&!V,F)}v=!0}else k?this.drawElevator2D(r,d,u,n,b,z,c,l,!1,t):this.floorImage.complete&&this.floorImage.naturalWidth!==0?r.drawImage(this.floorImage,d*n,u*n,n,n):(r.fillStyle=X.COLORS.PATH_VISITED,r.fillRect(d*n,u*n,n,n));const w=n*.05*Math.sin(Date.now()/300);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){const I=this.keyImage,F=I.naturalWidth/I.naturalHeight,V=n*.7;let $=V,K=V;F>1?K=V/F:$=V*F;const tt=d*n+(n-$)/2,Q=u*n+(n-K)/2+w;r.drawImage(I,tt,Q,$,K)}else r.beginPath(),r.arc(d*n+n/2,u*n+n/2+w,n*.25,0,2*Math.PI),r.fillStyle="#ffd700",r.fill();this.drawCellShadow2D(r,d,u,n,e,M,t)}),v=!0):A?(m(d,u,()=>{this.visitedCells.has(`${d},${u},${t}`)&&(this.floorImage.complete&&this.floorImage.naturalWidth!==0?r.drawImage(this.floorImage,d*n,u*n,n,n):(r.fillStyle=X.COLORS.PATH_VISITED,r.fillRect(d*n,u*n,n,n)));const w=n*.05*Math.sin(Date.now()/250);if(this.manaImage.complete&&this.manaImage.naturalWidth!==0){const I=this.manaImage,F=I.naturalWidth/I.naturalHeight,V=n*.7;let $=V,K=V;F>1?K=V/F:$=V*F;const tt=d*n+(n-$)/2,Q=u*n+(n-K)/2+w;r.save(),r.shadowColor="rgba(0, 255, 255, 0.85)",r.shadowBlur=n*.35,r.shadowOffsetX=0,r.shadowOffsetY=0,r.drawImage(I,tt,Q,$,K),r.restore()}else r.beginPath(),r.arc(d*n+n/2,u*n+n/2+w,n*.2,0,2*Math.PI),r.fillStyle="#00ffff",r.fill();this.drawCellShadow2D(r,d,u,n,e,M,t)}),v=!0):N?(m(d,u,()=>{if(this.floorImage.complete&&this.floorImage.naturalWidth!==0){r.save(),r.globalAlpha=.35,r.drawImage(this.floorImage,d*n,u*n,n,n),r.restore();const q=.22+.12*Math.sin(Date.now()/250);r.fillStyle=`rgba(136, 204, 255, ${q})`,r.fillRect(d*n,u*n,n,n)}else r.fillStyle=X.COLORS.PATH_KNOWN,r.fillRect(d*n,u*n,n,n)}),v=!0):M===0&&(this.isNearVisited(d,u,t)||this.isAdjacentToStatue(d,u,t))&&m(d,u,()=>{this.wallImage.complete&&this.wallImage.naturalWidth!==0?r.drawImage(this.wallImage,d*n,u*n,n,n):(r.fillStyle=X.COLORS.WALL,r.fillRect(d*n,u*n,n,n))})}v?this.staticMapCacheDirty=!0:this.staticMapCacheDirty=!1}isNearVisited(t,e,i){for(let n=-1;n<=1;n++)for(let a=-1;a<=1;a++){const o=t+n,r=e+a;if(o>=0&&o<this.mazeGen.size&&r>=0&&r<this.mazeGen.size){const c=this.maze.get(o,r,i);if(c===2||c===3||c===this.mazeGen.TYPES.JELLY_PORTAL||c===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${o},${r},${i}`))return!0}}return!1}isAdjacentToStatue(t,e,i){const n=this.mazeGen.size,a=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:1},{dx:-1,dy:1},{dx:1,dy:-1},{dx:-1,dy:-1}];for(const o of a){const r=t+o.dx,c=e+o.dy;if(r>=0&&r<n&&c>=0&&c<n&&this.maze.get(r,c,i)===this.mazeGen.TYPES.STATUE)return!0}return!1}populateFullyRevealedCells(t){const e=this.mazeGen.size;for(let i=0;i<e;i++)for(let n=0;n<e;n++){const a=this.maze.get(i,n,t),o=a===this.mazeGen.TYPES.TELEPORT,r=o&&this.discoveredTeleports.has(`${i},${n},${t}`),c=a===2||a===3||a===4||a===5||r,l=(a===1||o&&!r)&&this.isNearVisited(i,n,t),h=this.revealedPathSet.has(`${i},${n},${t}`);(c||l||h||a===0&&this.isNearVisited(i,n,t))&&this.fullyRevealedCells.add(`${i},${n},${t}`)}}updatePulse(){if(!this.isMap3DActive||this.pulsatingMaterials.length===0)return;const t=.2+.5*Math.abs(Math.sin(Date.now()*.003));this.pulsatingMaterials.forEach(e=>{e.emissiveIntensity=t})}loop(){if(this.isDestroyed)return;const t=performance.now(),e=(t-this.lastFrameTime)/1e3;this.lastFrameTime=t;const i=Math.min(e,.1);if(this.isIntroPlaying?this.controls.update():this.update(i),this.updateVortexAngles(i),this.isMap3DActive||this.isIntroPlaying)if(this.isIntroPlaying)this.renderer.render(this.scene,this.camera);else{const n=1-Math.exp(-10*i);this.visualActiveFloor+=(this.activeMapFloor-this.visualActiveFloor)*n,Math.abs(this.activeMapFloor-this.visualActiveFloor)<.001&&(this.visualActiveFloor=this.activeMapFloor),this.drawIsometricMap()}else this.draw2DMap(i);requestAnimationFrame(()=>this.loop())}updateVortexAngles(t){if(!this.vortexAngles)return;const e=Math.floor(this.player.x),i=Math.floor(this.player.y),n=this.player.z,a=Math.floor(this.mazeGen.startPos.x),o=Math.floor(this.mazeGen.startPos.y),r=this.mazeGen.startPos.z,c=`${a},${o},${r}`,h=e===a&&i===o&&n===r?X.VORTEX_SPEED_FAST:X.VORTEX_SPEED_NORMAL;this.vortexAngles.set(c,(this.vortexAngles.get(c)||0)+t*h),this.allTeleports&&this.allTeleports.forEach(p=>{const g=`${p.x},${p.y},${p.z}`,v=e===p.x&&i===p.y&&n===p.z,m=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===p.x&&this.inactiveTeleportPos.y===p.y&&this.inactiveTeleportPos.z===p.z,d=v&&!m?X.VORTEX_SPEED_FAST:X.VORTEX_SPEED_NORMAL;this.vortexAngles.set(g,(this.vortexAngles.get(g)||0)+t*d)});const f=this.getExitPos();if(f){const p=`${f.x},${f.y},${f.z}`,g=X.VORTEX_SPEED_NORMAL;this.vortexAngles.set(p,(this.vortexAngles.get(p)||0)+t*g)}}getHexColorVariation(t,e){let i=t.replace("#","");i.length===3&&(i=i.split("").map(c=>c+c).join(""));let n=parseInt(i,16),a=(n>>16)+e,o=(n>>8&255)+e,r=(n&255)+e;return a=Math.max(0,Math.min(255,a)),o=Math.max(0,Math.min(255,o)),r=Math.max(0,Math.min(255,r)),`#${((1<<24)+(a<<16)+(o<<8)+r).toString(16).slice(1)}`}drawVortex2D(t,e,i,n,a,o,r){const c=e*n+n/2,l=i*n+n/2;t.save(),t.translate(c,l),t.fillStyle=a,t.fillRect(-n/2,-n/2,n,n);const h=this.vortexAngles.get(r)||0;t.rotate(h);const f=this.getHexColorVariation(a,45),p=this.getHexColorVariation(a,-45),g=t.createRadialGradient(0,0,0,0,0,n*.45);g.addColorStop(0,f),g.addColorStop(.4,a),g.addColorStop(1,p);const v=t.createRadialGradient(0,0,0,0,0,n*.45);v.addColorStop(0,"#ffffff"),v.addColorStop(.3,f),v.addColorStop(1,"rgba(255, 255, 255, 0)");const m=3,d=n*.45;for(let u=0;u<m;u++){const M=u*2*Math.PI/m;t.beginPath(),t.strokeStyle=g,t.lineWidth=n*.09,t.lineCap="round";for(let _=0;_<=d;_+=1){const y=5/d,E=M+_*y,x=_*Math.cos(E),A=_*Math.sin(E);_===0?t.moveTo(x,A):t.lineTo(x,A)}t.stroke(),t.beginPath(),t.strokeStyle=v,t.lineWidth=n*.04,t.lineCap="round";for(let _=n*.12;_<=d;_+=1){const y=5/d,E=M+_*y+.15,x=_*Math.cos(E),A=_*Math.sin(E);_===Math.floor(n*.12)?t.moveTo(x,A):t.lineTo(x,A)}t.stroke()}t.restore()}playContinueAnimation(){this.isIntroPlaying=!0;const t=this.mazeGen.size;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="block");const e=document.getElementById("map3d-instructions");e&&(e.style.display="block"),this.isometricCanvas&&(this.isometricCanvas.style.display="none"),this.ui.setMap3DVisible(!0),this.isMap3DActive=!0,this.updateRendererSize(),this.build3DMap(!1),this.camera.position.set(t*.9,t*this.vScale*.6,t*.9),this.controls.target.set(0,0,0),this.controls.update(),this.hideCanvasInstant(),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=2,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableRotate=!1;const i=()=>{this.activeContinueTimer&&(clearTimeout(this.activeContinueTimer),this.activeContinueTimer=null),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this.controls.autoRotate=!1,this.animateCameraToPlayer(()=>{this._transitionToGame()})};this.activeSkipHandler=()=>i(),window.addEventListener("keydown",this.activeSkipHandler,{once:!0}),window.addEventListener("touchstart",this.activeSkipHandler,{once:!0}),this.activeContinueTimer=setTimeout(i,2500)}animateCameraToPlayer(t){const e=this.mazeGen.size,i=this.player.x-e/2,n=(this.player.z-e/2)*this.vScale,a=this.player.y-e/2,o=this.controls.target.clone(),r=new j(i,n,a),c=this.camera.position.clone(),l=new j(i+4,n+5,a+4),h=1100,f=performance.now(),p=g=>{if(this.isDestroyed)return;const v=g-f,m=Math.min(v/h,1),d=m<.5?4*m*m*m:1-Math.pow(-2*m+2,3)/2;this.controls.target.lerpVectors(o,r,d),this.camera.position.lerpVectors(c,l,d),this.controls.update(),m<1?requestAnimationFrame(p):t&&t()};requestAnimationFrame(p)}playIntroAnimation(){this.isIntroPlaying=!0;const t=this.mazeGen.size;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="block");const e=document.getElementById("map3d-instructions");for(e&&(e.style.display="block"),this.isometricCanvas&&(this.isometricCanvas.style.display="none");this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(new fo(16777215,.7));const i=new uo(16777215,.5);i.position.set(10,20,10),this.scene.add(i),this.ui.setMap3DVisible(!0),this.isMap3DActive=!0,this.updateRendererSize(),this.camera.position.set(t*.9,t*this.vScale*.6,t*.9),this.controls.target.set(0,0,0),this.controls.update(),this.hideCanvasInstant();const n=this.mazeGen.startPos,a=this.getExitPos(),o=new we(.92,.92,.92),r=new ie({color:X.COLORS.THREE_START,emissive:X.COLORS.THREE_START,emissiveIntensity:.6,transparent:!0,opacity:.95}),c=new te(o,r);c.position.set(Math.floor(n.x)-t/2,(n.z-t/2)*this.vScale,Math.floor(n.y)-t/2),this.scene.add(c);const l=new ie({color:16724736,emissive:16724736,emissiveIntensity:.6,transparent:!0,opacity:.95}),h=new te(o,l);h.position.set(a.x-t/2,(a.z-t/2)*this.vScale,a.y-t/2);const f=new we(.95,.95,.95),p=new fs({color:16711680,wireframe:!0}),g=new te(f,p);h.add(g),this.scene.add(h);const v=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],m=`${Math.floor(n.x)},${Math.floor(n.y)},${n.z}`,d=`${a.x},${a.y},${a.z}`,u=new Set([m,d]),M=[{x:Math.floor(n.x),y:Math.floor(n.y),z:n.z}],_=[{x:a.x,y:a.y,z:a.z}];let y=0,E=0;const x=[];for(;y<M.length||E<_.length;){if(y<M.length){const{x:V,y:$,z:K}=M[y++];for(const[tt,Q,it]of v){const G=V+tt,et=$+Q,ct=K+it,_t=`${G},${et},${ct}`;G>=0&&G<t&&et>=0&&et<t&&ct>=0&&ct<t&&!u.has(_t)&&this.maze.get(G,et,ct)!==this.mazeGen.TYPES.WALL&&(u.add(_t),M.push({x:G,y:et,z:ct}),x.push({x:G,y:et,z:ct}))}}if(E<_.length){const{x:V,y:$,z:K}=_[E++];for(const[tt,Q,it]of v){const G=V+tt,et=$+Q,ct=K+it,_t=`${G},${et},${ct}`;G>=0&&G<t&&et>=0&&et<t&&ct>=0&&ct<t&&!u.has(_t)&&this.maze.get(G,et,ct)!==this.mazeGen.TYPES.WALL&&(u.add(_t),_.push({x:G,y:et,z:ct}),x.push({x:G,y:et,z:ct}))}}}this.controls.autoRotate=!0,this.controls.autoRotateSpeed=1.8,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableRotate=!1;const A=new we(.88,.88,.88),N=new ie({color:X.COLORS.THREE_VISITED,transparent:!0,opacity:.72}),T=20,b=200,z=x.length,k=Math.max(1,Math.ceil(z/b));let q=0;this.activeIntroTimer=null;const w=[],I=()=>{this.activeIntroTimer&&(clearTimeout(this.activeIntroTimer),this.activeIntroTimer=null),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this._playGlitchAndTransition(w)};this.activeSkipHandler=()=>I(),window.addEventListener("keydown",this.activeSkipHandler,{once:!0}),window.addEventListener("touchstart",this.activeSkipHandler,{once:!0});const F=()=>{if(this.isDestroyed)return;const V=Math.min(q+k,x.length);for(;q<V;q++){const{x:$,y:K,z:tt}=x[q],Q=tt%2===0;let it;Q?it=new ps(.35,.35,2*this.vScale,8):it=A;const G=new te(it,N);G.position.set($-t/2,(tt-t/2)*this.vScale,K-t/2),this.scene.add(G),w.push(G)}q<x.length?this.activeIntroTimer=setTimeout(F,T):(this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this._playGlitchAndTransition(w))};this.activeIntroTimer=setTimeout(F,T)}_playGlitchAndTransition(t){if(this.isDestroyed)return;const e=5,i=90;let n=0;const a=()=>{if(this.isDestroyed)return;const o=n%2===0;t.forEach(r=>{r&&(r.visible=o)}),n++,n<e*2?setTimeout(a,i):(t.forEach(r=>{r&&(r.visible=!1)}),setTimeout(()=>this._transitionToGame(),400))};a()}_transitionToGame(){this.isDestroyed||(this.controls&&(this.controls.autoRotate=!1,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls.enableRotate=!0),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.classList.add("intro-fade-out"),setTimeout(()=>{if(this.isDestroyed)return;this.ui.setMap3DVisible(!1),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.classList.remove("intro-fade-out"),this.isMap3DActive=!1,this.isIntroPlaying=!1,this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1);const t=document.getElementById("map-area-container"),e=document.getElementById("left-hud-panel"),i=document.getElementById("right-hud-panel"),n=document.getElementById("bottom-hud-container");t&&(t.classList.remove("intro-hidden"),t.classList.add("intro-reveal"),setTimeout(()=>t.classList.remove("intro-reveal"),700)),e&&(e.classList.remove("intro-hidden"),e.classList.add("intro-reveal"),setTimeout(()=>e.classList.remove("intro-reveal"),700)),i&&(i.classList.remove("intro-hidden"),i.classList.add("intro-reveal"),setTimeout(()=>i.classList.remove("intro-reveal"),700)),n&&(n.classList.remove("intro-hidden"),n.classList.add("intro-reveal"),setTimeout(()=>n.classList.remove("intro-reveal"),700)),this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2,this.isResumedFromSave||this.ui.showInfoBanner(Ot("msgWhereAmI"))},600))}startStorytelling(){this.isStoryActive=!0,this.storyMsgIndex=0,this.storyState="OPENING",this.storyWidthProgress=0,this.storyCloseProgress=1,this.storyCharIndex=0,this.storyTypeTimer=0;const t=document.getElementById("story-screen");t&&t.classList.remove("hidden");const e=document.getElementById("story-image-loader"),i=document.getElementById("story-dialogue");this.isPreloadingActive=!1;const n=()=>{this.isPreloadingActive=!1,i&&(i.style.transform="scaleX(0)"),this.updateStoryImage(),this.handleStoryKeyDown=o=>{o.key.toLowerCase()==="escape"?this.skipStory():this.isPreloadingActive||this.triggerAdvanceStory(),o.preventDefault()},window.addEventListener("keydown",this.handleStoryKeyDown),this.handleStoryClick=o=>{const r=o.target;r&&r.closest("#story-skip-btn")||this.isPreloadingActive||this.triggerAdvanceStory()},this.handleStoryTouch=o=>{const r=o.target;r&&r.closest("#story-skip-btn")||(this.isPreloadingActive||this.triggerAdvanceStory(),o.preventDefault())},t&&(t.addEventListener("click",this.handleStoryClick),t.addEventListener("touchstart",this.handleStoryTouch,{passive:!1}))},a=document.getElementById("story-skip-btn");if(a&&(a.onclick=o=>{o.stopPropagation(),this.skipStory()}),e&&i&&(i.style.transform="scaleX(0)",this.storyImagesLoadedCount<this.storyImagesTotalCount)){this.isPreloadingActive=!0,e.classList.remove("hidden"),this.storyImagesPreloadPromise.then(()=>{e.classList.add("hidden"),n()});return}n()}endStorytelling(){this.isStoryActive=!1,this.isPreloadingActive=!1;const t=document.getElementById("story-screen");t&&t.classList.add("hidden"),this.handleStoryKeyDown&&(window.removeEventListener("keydown",this.handleStoryKeyDown),this.handleStoryKeyDown=null),this.handleStoryClick&&t&&(t.removeEventListener("click",this.handleStoryClick),this.handleStoryClick=null),this.handleStoryTouch&&t&&(t.removeEventListener("touchstart",this.handleStoryTouch),this.handleStoryTouch=null),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1);const e=document.getElementById("map-area-container"),i=document.getElementById("left-hud-panel"),n=document.getElementById("right-hud-panel"),a=document.getElementById("bottom-hud-container");e&&(e.classList.remove("hidden","intro-hidden"),e.classList.add("intro-reveal"),setTimeout(()=>e.classList.remove("intro-reveal"),700)),i&&(i.classList.remove("hidden","intro-hidden"),i.classList.add("intro-reveal"),setTimeout(()=>i.classList.remove("intro-reveal"),700)),n&&(n.classList.remove("hidden","intro-hidden"),n.classList.add("intro-reveal"),setTimeout(()=>n.classList.remove("intro-reveal"),700)),a&&(a.classList.remove("hidden","intro-hidden"),a.classList.add("intro-reveal"),setTimeout(()=>a.classList.remove("intro-reveal"),700)),this.ui.setMap3DVisible(!1),this.isMap3DActive=!1,this.isIntroPlaying=!1,this.staticMapCacheDirty=!0,this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2,this.isResumedFromSave||this.ui.showInfoBanner(Ot("msgWhereAmI"))}updateStoryImage(){const t=document.getElementById("story-img"),e=document.getElementById("story-image-canvas");if(!(!t||!e))if(e.style.background="#0b0b0b",this.storyMsgIndex===5)t.style.display="none",e.style.background="radial-gradient(circle, #222222 0%, #000000 80%)",e.removeAttribute("data-placeholder");else{const i=this.preloadedStoryImages[this.storyMsgIndex];if(i)t.src=i.src,t.style.display="block",e.removeAttribute("data-placeholder");else{let n="";this.storyMsgIndex===0?n="assets/images/presentation/1-mystical-church-of-chaos.jpg":this.storyMsgIndex===1?n="assets/images/presentation/2-mystical-church-of-chaos.jpg":this.storyMsgIndex===2?n="assets/images/presentation/3-the-jelly-god.jpg":this.storyMsgIndex===3?n="assets/images/presentation/4-player-alone.jpg":this.storyMsgIndex===4&&(n="assets/images/presentation/5-player-thrown.jpg"),t.src=n,t.onerror=()=>{t.style.display="none",e.setAttribute("data-placeholder",`[Image ${this.storyMsgIndex+1}]`)},t.onload=()=>{t.style.display="block",e.removeAttribute("data-placeholder")}}}}updateStory(t){if(!this.isStoryActive||this.isPreloadingActive)return;const e=document.getElementById("story-text"),i=document.getElementById("story-dialogue"),n=document.getElementById("story-arrow");if(!i||!e)return;const a=["storyMsg1","storyMsg2","storyMsg3","storyMsg4","storyMsg5","storyMsg6"];if(this.storyMsgIndex>=a.length){this.endStorytelling();return}const o=Ot(a[this.storyMsgIndex]),r=c=>c<.5?4*c*c*c:1-Math.pow(-2*c+2,3)/2;this.storyState==="OPENING"?(e.textContent="",n&&n.classList.add("hidden"),this.storyWidthProgress+=t/.45,this.storyWidthProgress>=1&&(this.storyWidthProgress=1,this.storyState="TYPING",this.storyCharIndex=0,this.storyTypeTimer=0),i.style.transform=`scaleX(${r(this.storyWidthProgress)})`):this.storyState==="TYPING"?(i.style.transform="scaleX(1)",n&&n.classList.add("hidden"),this.storyTypeTimer+=t,this.storyTypeTimer>=.025&&(this.storyTypeTimer=0,this.storyCharIndex++,e.textContent=o.substring(0,this.storyCharIndex),this.storyCharIndex>=o.length&&(this.storyState="WAITING"))):this.storyState==="WAITING"?(i.style.transform="scaleX(1)",e.textContent=o,n&&n.classList.remove("hidden")):this.storyState==="CLOSING"&&(e.textContent="",n&&n.classList.add("hidden"),this.storyCloseProgress-=t/.45,this.storyCloseProgress<=0&&(this.storyCloseProgress=0,this.endStorytelling()),i.style.transform=`scaleX(${r(this.storyCloseProgress)})`)}triggerAdvanceStory(){const t=["storyMsg1","storyMsg2","storyMsg3","storyMsg4","storyMsg5","storyMsg6"];if(this.storyMsgIndex>=t.length)return;const e=Ot(t[this.storyMsgIndex]);if(this.storyState==="CLOSING"){this.skipStory();return}if(this.storyState==="OPENING")this.storyState="TYPING",this.storyWidthProgress=1,this.storyCharIndex=0,this.storyTypeTimer=0;else if(this.storyState==="TYPING"){this.storyState="WAITING",this.storyCharIndex=e.length;const i=document.getElementById("story-text");i&&(i.textContent=e)}else if(this.storyState==="WAITING")if(this.storyMsgIndex+1<t.length){this.storyMsgIndex++,this.storyState="TYPING",this.storyCharIndex=0,this.storyTypeTimer=0,this.updateStoryImage();const i=document.getElementById("story-text");i&&(i.textContent="")}else this.storyState="CLOSING",this.storyCloseProgress=1}skipStory(){this.endStorytelling()}toggleTeleportMap(t){this.isMap3DActive=t,this.isTeleportMode=t;const e=document.getElementById("mobile-teleport-exit-btn");if(t){this.isMouseOrTouchDetected=!1,e&&e.classList.remove("hidden"),this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.add("hidden"),this.ui.setMap3DVisible(!0),this.activeMapFloor=this.player.z,this.visualActiveFloor=this.player.z,this.mapCursor={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.mapZoom=1,this.mapPanOffsetX=0,this.mapPanOffsetY=0;const i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,o=this.allTeleports.findIndex(c=>c.x===i&&c.y===n&&c.z===a);o!==-1&&(this.selectedTeleportIndex=o),this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="none");const r=document.getElementById("map3d-instructions");r&&(r.style.display="none"),this.isometricCanvas?this.isometricCanvas.style.display="block":this.initIsometricCanvas(),this.teleportConfirmModalActive=!1}else e&&e.classList.add("hidden"),this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.remove("hidden"),this.ui.setMap3DVisible(!1),this.isometricCanvas&&(this.isometricCanvas.style.display="none"),this.teleportConfirmModalActive=!1}onCanvasClick(t){if(!this.isMap3DActive)return;const e=this.renderer.domElement.getBoundingClientRect();if(this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.isTeleportMode){const i=this.raycaster.intersectObjects(this.teleportMeshes);if(i.length>0){const n=i[0].object,{gridX:a,gridY:o,gridZ:r}=n.userData,c=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===a&&this.inactiveTeleportPos.y===o&&this.inactiveTeleportPos.z===r,l=Math.floor(this.player.x),h=Math.floor(this.player.y),f=this.player.z;a===l&&o===h&&r===f?this.toggleTeleportMap(!1):c||this.teleportTo(a,o,r)}}else{const i=this.raycaster.intersectObjects(this.knownMeshes);if(i.length>0){const n=i[0].object,{gridX:a,gridY:o,gridZ:r}=n.userData;this.triggerPathReveal(a,o,r)}}}toggleZoom(){if(this.mazeGen.size<=11)return;this.isZoomActive=!this.isZoomActive,this.staticMapCacheDirty=!0;const t=document.getElementById("zoom-out-icon"),e=document.getElementById("zoom-in-icon");t&&e&&(this.isZoomActive?(t.classList.remove("hidden"),e.classList.add("hidden")):(t.classList.add("hidden"),e.classList.remove("hidden")))}togglePause(){this.isGameOver||this.isDestroyed||this.isIntroPlaying||(this.isPaused=!this.isPaused,this.isPaused?(this.ui.showPause(),this.ui.uiMobilePauseBtn&&this.ui.uiMobilePauseBtn.classList.add("hidden")):(this.ui.hidePause(),this.ui.uiMobilePauseBtn&&!this.ui.uiMobileControls.classList.contains("hidden")&&this.ui.uiMobilePauseBtn.classList.remove("hidden")))}checkExitNeighborVisited(){const t=this.getExitPos(),e=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const i of e){const n=t.x+i.dx,a=t.y+i.dy,o=t.z+i.dz;if(n>=0&&n<this.mazeGen.size&&a>=0&&a<this.mazeGen.size&&o>=0&&o<this.mazeGen.size){const r=this.maze.get(n,a,o);if(r!==this.mazeGen.TYPES.WALL&&(r===this.mazeGen.TYPES.VISITED||r===this.mazeGen.TYPES.START||r===this.mazeGen.TYPES.ELEVATOR_VISITED))return!0}}return!1}findShortestPath(t,e,i=!1){const n=this.mazeGen.size,a=new Int8Array(n*n*n);for(let o=0;o<n;o++)for(let r=0;r<n;r++)for(let c=0;c<n;c++){const l=o*n*n+r*n+c,h=this.maze.get(o,r,c),f=o===t.x&&r===t.y&&c===t.z,p=o===e.x&&r===e.y&&c===e.z,g=o===e.x&&r===e.y&&(c===e.z-1||c===e.z+1)&&c%2===0;if(h===this.mazeGen.TYPES.WALL){a[l]=0;continue}const m=h===this.mazeGen.TYPES.TELEPORT,d=m&&this.discoveredTeleports.has(`${o},${r},${c}`),u=h===this.mazeGen.TYPES.VISITED||h===this.mazeGen.TYPES.START||h===this.mazeGen.TYPES.ELEVATOR_VISITED||d,M=(h===this.mazeGen.TYPES.PATH||m&&!d)&&this.isNearVisited(o,r,c);let _=!1;i?_=u||f||p||g:_=u||M||f||p||g,a[l]=_?1:0}return nl(t,e,a,n,0)??[]}triggerPathReveal(t,e,i){if(this.pathRevealInterval||this.pathfinderBlockedUntil&&Date.now()<this.pathfinderBlockedUntil)return;if(this.pathfindersRemaining<=0){this.ui.showInfoBanner(Ot("msgNoPathfindersRemaining"));return}this.pathRevealInterval&&(clearInterval(this.pathRevealInterval),this.pathRevealInterval=null),this.revealedPathSet.clear();const n=this.maze.get(t,e,i)===this.mazeGen.TYPES.EXIT;if(n&&!this.exitPathfinderUnlocked){this.ui.showInfoBanner(Ot("msgExitNotFoundYet"));return}let a=i;i%2===0&&(a=this.player.z<i?i+1:i-1,a<1&&(a=1),a>=this.mazeGen.size&&(a=this.mazeGen.size-2));const o={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},r={x:t,y:e,z:a},c=this.findShortestPath(o,r,n);!c||c.length===0||(this.pathfindersRemaining--,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),ns(this),this.activePathReveal=c,this.revealedPathProgress=0,this.revealedPathSet.add(`${t},${e},${i}`),this.pathRevealInterval=setInterval(()=>{if(this.revealedPathProgress<this.activePathReveal.length){const l=this.activePathReveal[this.revealedPathProgress],h=`${l.x},${l.y},${l.z}`;if(this.revealedPathSet.add(h),this.revealedPathProgress>0){const f=this.activePathReveal[this.revealedPathProgress-1];if(Math.abs(l.z-f.z)===2){const p=(l.z+f.z)/2,g=`${l.x},${l.y},${p}`;if(this.revealedPathSet.add(g),this.isMap3DActive&&this.gridMeshes){const v=this.mazeGen.size,m=this.gridMeshes[l.x*v*v+l.y*v+p];m&&(m.material=new ie({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.95*(this.isTeleportMode?.2:1)}))}}}if(this.staticMapCacheDirty=!0,this.isMap3DActive&&this.gridMeshes){const f=this.mazeGen.size,p=this.gridMeshes[l.x*f*f+l.y*f+l.z];p&&(p.material=new ie({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.95*(this.isTeleportMode?.2:1)}))}this.revealedPathProgress++}else clearInterval(this.pathRevealInterval),this.pathRevealInterval=null,this.pathfinderBlockedUntil=Date.now()+600},120))}teleportTo(t,e,i){if(this.skipCellAnimations=!0,this.player.x=t+X.PLAYER_START_X,this.player.y=e+X.PLAYER_START_Y%1,this.player.z=i,this.staticMapCacheDirty=!0,this.toggleTeleportMap(!1),this.maze.get(t,e,i)===this.mazeGen.TYPES.PATH&&(this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${t},${e},${i}`)),!this.isSafeMode){const n=Math.floor(this.degree*1.5)+3;this.teleportCooldownTicks=n,this.inactiveTeleportPos={x:t,y:e,z:i},this.ui.showInfoBanner(Ot("msgOopsNoisyShit"));for(const a of this.hunters){if(a.state==="DEAD_BY_JELLY")continue;a.state="TELEPORT_TRACKING";const o=a.findPathToTarget({x:t,y:e,z:i},this.maze,this.mazeGen.TYPES);o?a.pathToTarget=o:a.pathToTarget=[]}}this.updateFloorUI(),this.draw2DMap(),this.input.keys={}}initIsometricCanvas(){const t=document.createElement("canvas");this.isometricCanvas=t,t.id="isometric-map-canvas",t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.zIndex="101",this.isometricCtx=t.getContext("2d"),this.ui.uiMap3dContainer.appendChild(t),t.addEventListener("click",d=>this.handleIsometricClick(d));const e=()=>{this.isMouseOrTouchDetected||(this.isMouseOrTouchDetected=!0)};t.addEventListener("mousemove",e),t.addEventListener("pointerdown",e);let i=null,n=null,a=0,o=0,r=0,c=0,l=!1,h=!1,f=!1,p=0;t.addEventListener("touchstart",d=>{if(!(!this.isMap3DActive||this.isIntroPlaying)){if(p=0,f=!1,d.touches.length===1){const u=d.touches[0];a=u.clientX,o=u.clientY,r=this.mapPanOffsetX,c=this.mapPanOffsetY,h=!0,l=!1}else if(d.touches.length===2){l=!0,h=!1;const u=d.touches[0],M=d.touches[1];i=Math.hypot(u.clientX-M.clientX,u.clientY-M.clientY),n=this.mapZoom}}},{passive:!1}),t.addEventListener("touchmove",d=>{if(!(!this.isMap3DActive||this.isIntroPlaying)){if(l&&d.touches.length===2){d.preventDefault();const u=d.touches[0],M=d.touches[1],_=Math.hypot(u.clientX-M.clientX,u.clientY-M.clientY);if(i&&i>0&&n){const y=t.getBoundingClientRect(),E=(u.clientX+M.clientX)/2-y.left,x=(u.clientY+M.clientY)/2-y.top,A=this.mapZoom;let N=n*(_/i);N=Math.max(.5,Math.min(4,N));const T=N/A;this.mapPanOffsetX=E-(E-(y.width/2+this.mapPanOffsetX))*T-y.width/2,this.mapPanOffsetY=x-(x-(y.height/2+this.mapPanOffsetY))*T-y.height/2,this.mapZoom=N,p=100}}else if(h&&d.touches.length===1){const u=d.touches[0],M=u.clientX-a,_=u.clientY-o,y=Math.hypot(M,_);if(p=Math.max(p,y),!f&&Math.abs(_)>40&&Math.abs(_)>Math.abs(M)*1.5){const E=this.mazeGen.size;_<-40?this.activeMapFloor-2>=1&&(this.activeMapFloor-=2,f=!0):_>40&&this.activeMapFloor+2<=E-2&&(this.activeMapFloor+=2,f=!0)}f||(this.mapPanOffsetX=r+M,this.mapPanOffsetY=c+_),d.preventDefault()}}},{passive:!1}),t.addEventListener("touchend",d=>{if(l=!1,h=!1,p<8&&!f){const u=d.changedTouches[0];if(u){const M={clientX:u.clientX,clientY:u.clientY};this.handleIsometricClick(M)}}}),t.addEventListener("wheel",d=>{if(!this.isMap3DActive||this.isIntroPlaying)return;d.preventDefault();const u=t.getBoundingClientRect(),M=d.clientX-u.left,_=d.clientY-u.top,y=this.mapZoom,E=1.15;let x=d.deltaY<0?y*E:y/E;x=Math.max(.5,Math.min(4,x));const A=u.width,N=u.height,T=x/y;this.mapPanOffsetX=M-(M-(A/2+this.mapPanOffsetX))*T-A/2,this.mapPanOffsetY=_-(_-(N/2+this.mapPanOffsetY))*T-N/2,this.mapZoom=x},{passive:!1});let g=!1,v=0,m=0;t.addEventListener("mousedown",d=>{if(!this.isMap3DActive||this.isIntroPlaying)return;const u=t.getBoundingClientRect(),M=d.clientX-u.left,_=d.clientY-u.top;if(!(this.floorClickRects&&this.floorClickRects.some(y=>M>=y.x&&M<=y.x+y.w&&_>=y.y&&_<=y.y+y.h))){if(this.isTeleportMode){if(this.teleportConfirmModalActive&&this.teleportModalClickRects&&this.teleportModalClickRects.some(y=>M>=y.x&&M<=y.x+y.w&&_>=y.y&&_<=y.y+y.h)||!this.teleportConfirmModalActive&&this.teleportDotsClickRects&&this.teleportDotsClickRects.some(y=>M>=y.x&&M<=y.x+y.w&&_>=y.y&&_<=y.y+y.h))return;if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const y=this.teleportGoBtnClickRect;if(M>=y.x&&M<=y.x+y.w&&_>=y.y&&_<=y.y+y.h)return}}g=!0,v=d.clientX,m=d.clientY}}),window.addEventListener("mousemove",d=>{if(g){const u=d.clientX-v,M=d.clientY-m;this.mapPanOffsetX+=u,this.mapPanOffsetY+=M,v=d.clientX,m=d.clientY}}),window.addEventListener("mouseup",()=>{g=!1}),t.addEventListener("mousemove",d=>{if(!this.isMap3DActive||this.isIntroPlaying)return;const u=t.getBoundingClientRect(),M=d.clientX-u.left,_=d.clientY-u.top;if(t.style.cursor="default",this.isTeleportMode){if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const y=this.teleportGoBtnClickRect;if(M>=y.x&&M<=y.x+y.w&&_>=y.y&&_<=y.y+y.h){t.style.cursor="pointer";return}}if(this.teleportConfirmModalActive&&this.teleportModalClickRects){for(const y of this.teleportModalClickRects)if(M>=y.x&&M<=y.x+y.w&&_>=y.y&&_<=y.y+y.h){this.teleportModalSelection=y.selection,t.style.cursor="pointer";return}}else if(this.teleportDotsClickRects){const y=this.getSelectableTeleportIndices();for(const E of this.teleportDotsClickRects)if(M>=E.x&&M<=E.x+E.w&&_>=E.y&&_<=E.y+E.h&&y.includes(E.index)){this.selectedTeleportIndex=E.index;const x=this.allTeleports[E.index];this.activeMapFloor=x.z,this.mapCursor={x:x.x,y:x.y,z:x.z},t.style.cursor="pointer";return}}}if(!this.isTeleportMode){const y=this.mazeGen.size,E=this.activeMapFloor;let x=u.width*.7/y;x=Math.max(20,Math.min(48,x));const A=x*this.mapZoom,N=A/2,T=A/4,b=N*5,z=u.width/2+this.mapPanOffsetX,k=u.height/2+this.mapPanOffsetY,q=[];E+2<=y-2&&q.push(E+2),E+1<y&&q.push(E+1),q.push(E),E-1>=0&&q.push(E-1),E-2>=1&&q.push(E-2);for(const w of q){const I=k-(w-E)*b,F=(M-z)/N,V=(_-I)/T,$=Math.round((F+V)/2),K=Math.round((V-F)/2);if($>=0&&$<y&&K>=0&&K<y&&this.getInteractiveElements(E).some(it=>it.x===$&&it.y===K&&it.z===w)){this.mapCursor={x:$,y:K,z:w},t.style.cursor="pointer";return}}}})}handleIsometricClick(t){if(!this.isMap3DActive||this.isIntroPlaying)return;const e=this.isometricCanvas.getBoundingClientRect(),i=t.clientX-e.left,n=t.clientY-e.top;if(this.isTeleportMode){if(this.teleportConfirmModalActive){if(this.teleportModalClickRects){for(const _ of this.teleportModalClickRects)if(i>=_.x&&i<=_.x+_.w&&n>=_.y&&n<=_.y+_.h){if(_.selection==="go"){const y=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(y.x,y.y,y.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;return}}this.teleportConfirmModalActive=!1;return}if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const _=this.teleportGoBtnClickRect;if(i>=_.x&&i<=_.x+_.w&&n>=_.y&&n<=_.y+_.h){const y=this.allTeleports[this.selectedTeleportIndex],E=Math.floor(this.player.x),x=Math.floor(this.player.y),A=this.player.z,N=y&&y.x===E&&y.y===x&&y.z===A;y&&!N&&(this.teleportTo(y.x,y.y,y.z),this.toggleTeleportMap(!1));return}}if(this.teleportDotsClickRects){const _=this.teleportDotsClickRects.find(y=>i>=y.x&&i<=y.x+y.w&&n>=y.y&&n<=y.y+y.h);if(_){if(this.getSelectableTeleportIndices().includes(_.index)){this.selectedTeleportIndex=_.index;const E=this.allTeleports[_.index];this.activeMapFloor=E.z,this.mapCursor={x:E.x,y:E.y,z:E.z}}return}}}if(this.floorClickRects){for(const _ of this.floorClickRects)if(i>=_.x&&i<=_.x+_.w&&n>=_.y&&n<=_.y+_.h){this.activeMapFloor=_.floor;return}}const a=this.mazeGen.size,o=this.activeMapFloor;let r=e.width*.7/a;r=Math.max(20,Math.min(48,r));const c=r*this.mapZoom,l=c/2,h=c/4,f=l*5,p=e.width/2+this.mapPanOffsetX,g=e.height/2+this.mapPanOffsetY,v=(_,y,E)=>{const x=(_-y)*l+p,A=(_+y)*h-(E-o)*f+g;return{x,y:A}};if(this.isTeleportMode){const _=this.getInteractiveElements(o);let y=null,E=1/0;const x=this.isTouchDevice?52:35;for(const A of _){if(A.type!=="teleport")continue;const N=v(A.x,A.y,A.z),T=i-N.x,b=n-N.y,z=Math.sqrt(T*T+b*b);z<E&&(E=z,y=A)}if(y&&E<=x){const{x:A,y:N,z:T}=y,b=this.allTeleports.findIndex(k=>k.x===A&&k.y===N&&k.z===T),z=this.getSelectableTeleportIndices();b!==-1&&z.includes(b)&&(this.selectedTeleportIndex=b,this.mapCursor={x:A,y:N,z:T})}return}const m=this.getInteractiveElements(o);let d=null,u=1/0;const M=this.isTouchDevice?52:35;for(const _ of m){const y=v(_.x,_.y,_.z),E=i-y.x,x=n-y.y,A=Math.sqrt(E*E+x*x);A<u&&(u=A,d=_)}if(d&&u<=M){this.mapCursor={x:d.x,y:d.y,z:d.z},this.triggerPathReveal(d.x,d.y,d.z);return}}navigateCursor(t){const e=this.activeMapFloor,i=this.getInteractiveElements(e);if(i.length===0)return;const n=this.mapCursor.x,a=this.mapCursor.y,o=this.mapCursor.z,r=this.mazeGen.size;if(t==="left"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e+1&&o===e-1)){this.mapCursor={x:n,y:a,z:e+1};return}for(let l=n-1;l>=0;l--){const h=i.filter(f=>f.x===l&&f.y===a);if(h.length>0){const f=h.find(g=>g.z===e-1),p=h.find(g=>g.z===e+1);f&&p?this.mapCursor={x:l,y:a,z:e-1}:this.mapCursor={x:l,y:a,z:h[0].z};return}}}else if(t==="right"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e-1&&o===e+1)){this.mapCursor={x:n,y:a,z:e-1};return}for(let l=n+1;l<r;l++){const h=i.filter(f=>f.x===l&&f.y===a);if(h.length>0){const f=h.find(g=>g.z===e-1),p=h.find(g=>g.z===e+1);f&&p?this.mapCursor={x:l,y:a,z:e+1}:this.mapCursor={x:l,y:a,z:h[0].z};return}}}else if(t==="up"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e-1&&o===e+1)){this.mapCursor={x:n,y:a,z:e-1};return}for(let l=a-1;l>=0;l--){const h=i.filter(f=>f.y===l);if(h.length>0){let f=-1,p=1/0;for(const d of h){const u=Math.abs(d.x-n);u<p?(p=u,f=d.x):u===p&&d.x<f&&(f=d.x)}const g=h.filter(d=>d.x===f),v=g.find(d=>d.z===e-1),m=g.find(d=>d.z===e+1);v&&m?this.mapCursor={x:f,y:l,z:e+1}:this.mapCursor={x:f,y:l,z:g[0].z};return}}}else if(t==="down"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e+1&&o===e-1)){this.mapCursor={x:n,y:a,z:e+1};return}for(let l=a+1;l<r;l++){const h=i.filter(f=>f.y===l);if(h.length>0){let f=-1,p=1/0;for(const d of h){const u=Math.abs(d.x-n);u<p?(p=u,f=d.x):u===p&&d.x<f&&(f=d.x)}const g=h.filter(d=>d.x===f),v=g.find(d=>d.z===e-1),m=g.find(d=>d.z===e+1);v&&m?this.mapCursor={x:f,y:l,z:e-1}:this.mapCursor={x:f,y:l,z:g[0].z};return}}}}getInteractiveElements(t){const e=[],i=this.mazeGen.size,n=this.mazeGen.TYPES,a=(o,r,c)=>{if(c<0||c>=i)return!1;const l=this.maze.get(o,r,c);return l===n.VISITED||l===n.START||l===n.ELEVATOR_VISITED||l===n.TELEPORT&&this.discoveredTeleports.has(`${o},${r},${c}`)};for(let o=0;o<i;o++)for(let r=0;r<i;r++){const c=this.maze.get(o,r,t);if(c===n.WALL)continue;const l=c===n.TELEPORT,h=l&&this.discoveredTeleports.has(`${o},${r},${t}`);if(h){e.push({x:o,y:r,z:t,type:"teleport"});continue}if(c===n.START){e.push({x:o,y:r,z:t,type:"start"});continue}if(c===n.EXIT){this.keysCollected===this.totalKeys&&this.exitPathfinderUnlocked&&e.push({x:o,y:r,z:t,type:"exit"});continue}(c===n.PATH||l&&!h)&&this.isNearVisited(o,r,t)&&e.push({x:o,y:r,z:t,type:"known"})}for(const o of[t-1,t+1])if(!(o<0||o>=i||o-1<1||o+1>=i))for(let r=0;r<i;r++)for(let c=0;c<i;c++){const l=this.maze.get(r,c,o);if(l===n.WALL)continue;const h=l===n.ELEVATOR_VISITED;l===1&&(a(r,c,o-1)||a(r,c,o+1))&&!h&&a(r,c,t)&&e.push({x:r,y:c,z:o,type:"shaft"})}return e}drawIsometricMap(){if(!this.isMap3DActive||this.isIntroPlaying)return;const t=this.isometricCanvas,e=this.isometricCtx;if(!t||!e)return;const i=t.width=window.innerWidth,n=t.height=window.innerHeight;e.clearRect(0,0,i,n),e.fillStyle="#000000",e.fillRect(0,0,i,n);const a=this.mazeGen.size,o=this.activeMapFloor,r=this.visualActiveFloor;let c=i*.7/a;c=Math.max(20,Math.min(48,c));const l=c*this.mapZoom,h=l/2,f=l/2,p=l/4,g=f*5,v=i/2+this.mapPanOffsetX,m=n/2+this.mapPanOffsetY,d=(L,B,Z)=>{const W=L,Y=B,D=(W-Y)*f+v,Mt=(W+Y)*p-(Z-r)*g+m;return{x:D,y:Mt}},u=L=>{e.strokeStyle=`rgba(0, 255, 0, ${.15*L})`,e.lineWidth=1;for(let B=0;B<a;B++)for(let Z=0;Z<a;Z++){const W=d(Z,B,o);e.beginPath(),e.moveTo(W.x,W.y-p),e.lineTo(W.x+f,W.y),e.lineTo(W.x,W.y+p),e.lineTo(W.x-f,W.y),e.closePath(),e.stroke()}},M=(L,B,Z,W,Y,D,Mt=1)=>{e.save(),e.globalAlpha=Mt,e.beginPath(),e.moveTo(L-Z,B),e.lineTo(L,B+W),e.lineTo(L,B+W-Y),e.lineTo(L-Z,B-Y),e.closePath(),e.fillStyle=D,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(L,B+W),e.lineTo(L+Z,B),e.lineTo(L+Z,B-Y),e.lineTo(L,B+W-Y),e.closePath(),e.fillStyle=D,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.beginPath(),e.moveTo(L-Z,B-Y),e.lineTo(L,B+W-Y),e.lineTo(L+Z,B-Y),e.lineTo(L,B-W-Y),e.closePath(),e.fillStyle=D,e.fill(),e.restore()},_=(L,B,Z,W,Y,D,Mt,vt,Tt=1)=>{e.save(),e.globalAlpha=Tt,e.beginPath(),e.moveTo(L-Z,B),e.lineTo(L,B+W),e.lineTo(L,B+W-Y),e.lineTo(L-Z,B-Y),e.closePath(),e.fillStyle=D,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(L,B+W),e.lineTo(L+Z,B),e.lineTo(L+Z,B-Y),e.lineTo(L,B+W-Y),e.closePath(),e.fillStyle=D,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.restore(),e.save(),e.globalAlpha=Tt,e.beginPath(),e.moveTo(L-Z,B-Y),e.lineTo(L,B+W-Y),e.lineTo(L+Z,B-Y),e.lineTo(L,B-W-Y),e.closePath(),e.fillStyle=D,e.fill(),e.clip(),e.translate(L,B-Y),e.scale(1,.5);const gt=this.vortexAngles.get(vt)||0;e.rotate(gt);const It=this.getHexColorVariation(D,45),xt=this.getHexColorVariation(D,-45),P=Z,S=e.createRadialGradient(0,0,0,0,0,P);S.addColorStop(0,It),S.addColorStop(.4,D),S.addColorStop(1,xt);const H=e.createRadialGradient(0,0,0,0,0,P);H.addColorStop(0,"#ffffff"),H.addColorStop(.3,It),H.addColorStop(1,"rgba(255, 255, 255, 0)");const ot=3;for(let at=0;at<ot;at++){const lt=at*2*Math.PI/ot;e.beginPath(),e.strokeStyle=S,e.lineWidth=Z*.18,e.lineCap="round";for(let ut=0;ut<=P;ut+=1){const dt=5/P,pt=lt+ut*dt,St=ut*Math.cos(pt),Lt=ut*Math.sin(pt);ut===0?e.moveTo(St,Lt):e.lineTo(St,Lt)}e.stroke(),e.beginPath(),e.strokeStyle=H,e.lineWidth=Z*.08,e.lineCap="round";for(let ut=P*.12;ut<=P;ut+=1){const dt=5/P,pt=lt+ut*dt+.15,St=ut*Math.cos(pt),Lt=ut*Math.sin(pt);ut===Math.floor(P*.12)?e.moveTo(St,Lt):e.lineTo(St,Lt)}e.stroke()}e.restore()},y=(L,B,Z)=>{if(Z<0||Z>=a)return!1;const W=this.maze.get(L,B,Z);return W===this.mazeGen.TYPES.VISITED||W===this.mazeGen.TYPES.START||W===this.mazeGen.TYPES.ELEVATOR_VISITED||W===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${L},${B},${Z}`)},E=(L,B,Z,W,Y,D,Mt,vt,Tt,gt)=>{e.save(),e.globalAlpha=gt;const It=Tt?"#ffffff":vt?X.COLORS.NEON_UP:X.COLORS.NEON_UP_UNUSED,xt=Tt?"#ffffff":vt?X.COLORS.NEON_DOWN:X.COLORS.NEON_DOWN_UNUSED;if(D&&Mt)e.beginPath(),e.moveTo(L,B-Y-W),e.lineTo(L-Z,B-Y),e.lineTo(L,B-Y+W),e.lineTo(L,B-Y),e.closePath(),e.fillStyle=xt,e.fill(),e.beginPath(),e.moveTo(L,B-Y-W),e.lineTo(L,B-Y),e.lineTo(L,B-Y+W),e.lineTo(L+Z,B-Y),e.closePath(),e.fillStyle=It,e.fill(),e.beginPath(),e.moveTo(L-Z,B),e.lineTo(L,B+W),e.lineTo(L,B+W-Y),e.lineTo(L-Z,B-Y),e.closePath(),e.fillStyle=xt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(L,B+W),e.lineTo(L+Z,B),e.lineTo(L+Z,B-Y),e.lineTo(L,B+W-Y),e.closePath(),e.fillStyle=It,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill();else{const P=D?It:xt;e.beginPath(),e.moveTo(L-Z,B-Y),e.lineTo(L,B+W-Y),e.lineTo(L+Z,B-Y),e.lineTo(L,B-W-Y),e.closePath(),e.fillStyle=P,e.fill(),e.beginPath(),e.moveTo(L-Z,B),e.lineTo(L,B+W),e.lineTo(L,B+W-Y),e.lineTo(L-Z,B-Y),e.closePath(),e.fillStyle=P,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(L,B+W),e.lineTo(L+Z,B),e.lineTo(L+Z,B-Y),e.lineTo(L,B+W-Y),e.closePath(),e.fillStyle=P,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill()}e.restore()},x=(L,B)=>{const Z=this.mazeGen.TYPES;for(let W=0;W<a;W++)for(let Y=0;Y<a;Y++){const D=this.maze.get(Y,W,L),Mt=d(Y,W,L);if(this.jellyPortalFreezeTimer>0&&this.jellyPortalResetCells.has(`${Y},${W}`)&&L===this.player.z){const ut=1.5-this.jellyPortalFreezeTimer,dt=.6;let pt=0;ut>dt&&(pt=Math.min(1,(ut-dt)/.9)),e.save();const St=Math.round(100*(1-pt));e.filter=`invert(${St}%)`;const Lt=Y===Math.floor(this.player.x)&&W===Math.floor(this.player.y),ht=D===Z.STATUE;if(!Lt&&!ht?e.globalAlpha=(1-pt)*B:e.globalAlpha=B,D===Z.WALL||ht)if(ht)M(Mt.x,Mt.y,f,p,1.5,"#444444",B),z(Mt.x,Mt.y,B);else{const Ct=f*.45,At=p*.45,bt=h*.25,R="rgba(90, 20, 160, 0.8)",ft=[{dx:-.23,dy:-.23},{dx:.23,dy:-.23},{dx:-.23,dy:.23},{dx:.23,dy:.23}];for(const Dt of ft){const wt=d(Y+Dt.dx,W+Dt.dy,L);M(wt.x,wt.y,Ct,At,bt,R,B)}}else{let Nt="#444444",Ct=!1,At="";Lt?(At=X.COLORS.JELLY_PORTAL,Ct=!0):D===Z.TELEPORT?(At=X.COLORS.TELEPORT_INACTIVE,Ct=!0):D===Z.EXIT&&(At=X.COLORS.EXIT,Ct=!0),Ct?_(Mt.x,Mt.y,f,p,1.5,At,!1,`${Y},${W},${L}`,B):M(Mt.x,Mt.y,f,p,1.5,Nt,B),D===Z.KEY?N(Mt.x,Mt.y-1.5,B):D===Z.MANA&&T(Mt.x,Mt.y-1.5,B)}e.restore();continue}const Tt=D===Z.JELLY_PORTAL,gt=D===Z.TELEPORT||Tt,It=gt&&this.discoveredTeleports.has(`${Y},${W},${L}`),xt=D===Z.VISITED||D===Z.START||D===Z.ELEVATOR_VISITED||It,P=(D===Z.PATH||gt&&!It)&&this.isNearVisited(Y,W,L),S=this.revealedPathSet.has(`${Y},${W},${L}`),H=D===Z.KEY,ot=D===Z.MANA,at=D===Z.EXIT;if(D===Z.WALL||D===Z.STATUE){if(this.isNearVisited(Y,W,L)){const ut=f*.45,dt=p*.45,pt=h*.25,St="rgba(90, 20, 160, 0.8)",Lt=[{dx:-.23,dy:-.23},{dx:.23,dy:-.23},{dx:-.23,dy:.23},{dx:.23,dy:.23}];for(const ht of Lt){const zt=d(Y+ht.dx,W+ht.dy,L);M(zt.x,zt.y,ut,dt,pt,St,B)}}continue}for(const ut of this.hunters){if(ut.state==="SLEEP"||ut.state==="DEAD_BY_JELLY")continue;const dt=ut.visualZ!==null?ut.visualZ:ut.z,pt=ut.visualX!==null?ut.visualX:ut.x,St=ut.visualY!==null?ut.visualY:ut.y;if(dt===null||pt===null||St===null)continue;const Lt=Math.round((dt-1)/2)*2+1,ht=Math.max(0,Math.min(a-1,Math.floor(pt))),zt=Math.max(0,Math.min(a-1,Math.floor(St)));if(Y===ht&&W===zt&&L===Lt){const Nt=d(pt,St,dt);q(ut,Nt.x,Nt.y-1.5,B)}}if(xt||P||S||H||ot||at){const dt=L<a-1&&this.maze.get(Y,W,L+1)!==Z.WALL&&this.maze.get(Y,W,L+1)!==Z.STATUE,pt=L>0&&this.maze.get(Y,W,L-1)!==Z.WALL&&this.maze.get(Y,W,L-1)!==Z.STATUE,St=this.mapCursor.x===Y&&this.mapCursor.y===W&&this.mapCursor.z===L;if((xt||S)&&(dt||pt))E(Mt.x,Mt.y,f,p,1.5,dt,pt,xt,S,B);else{let zt="#222222",Nt=!1,Ct="";const At=Math.floor(this.player.x)===Y&&Math.floor(this.player.y)===W&&L===this.player.z,bt=`${Y},${W},${L}`;if(S)zt="#ffffff";else if(at)Ct=this.keysCollected===this.totalKeys?X.COLORS.EXIT:"#ff3300",Nt=!0;else if(It){const R=Y===Math.floor(this.mazeGen.startPos.x)&&W===Math.floor(this.mazeGen.startPos.y)&&L===this.mazeGen.startPos.z,ft=this.teleportCooldownTicks>0;R?Ct=ft?X.COLORS.TELEPORT_INACTIVE:At?X.COLORS.TELEPORT:X.COLORS.START:Ct=ft?X.COLORS.TELEPORT_INACTIVE:Tt?X.COLORS.JELLY_PORTAL:X.COLORS.TELEPORT,Nt=!0}else if(xt)D===Z.START?(Ct=this.teleportCooldownTicks>0?X.COLORS.TELEPORT_INACTIVE:At?X.COLORS.TELEPORT:X.COLORS.START,Nt=!0):zt="#444444";else if(P)if(St){const R=.5+.5*Math.sin(performance.now()/120);zt=`rgb(${Math.floor(31+224*R)}, ${Math.floor(58+197*R)}, ${Math.floor(82+173*R)})`}else zt="#1f3a52";else(H||ot)&&(zt="#111111");Nt?_(Mt.x,Mt.y,f,p,1.5,Ct,At,bt,B):M(Mt.x,Mt.y,f,p,1.5,zt,B)}if(H&&N(Mt.x,Mt.y-1.5,B),ot&&T(Mt.x,Mt.y-1.5,B),It){const zt=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===Y&&this.inactiveTeleportPos.y===W&&this.inactiveTeleportPos.z===L;let Nt=X.COLORS.TELEPORT;zt&&(Nt=X.COLORS.TELEPORT_INACTIVE),b(Mt.x,Mt.y-1.5,Nt,B,St)}Y===Math.floor(this.player.x)&&W===Math.floor(this.player.y)&&L===this.player.z&&k(Mt.x,Mt.y-1.5,B)}}},A=(L,B)=>{const Z=this.mazeGen.TYPES;for(let W=0;W<a;W++)for(let Y=0;Y<a;Y++){const D=this.maze.get(Y,W,L);if(D===Z.WALL)continue;const Mt=this.revealedPathSet.has(`${Y},${W},${L}`),vt=D===Z.ELEVATOR_VISITED;if(D===1&&(y(Y,W,L-1)||y(Y,W,L+1)),Mt||y(Y,W,o)){const Tt=d(Y,W,L-1);Tt.y-=1.5;const gt=d(Y,W,L+1);let It=X.COLORS.PATH_KNOWN;Mt?It="#ffffff":vt&&(It=X.COLORS.PATH_VISITED);const xt=this.mapCursor.x===Y&&this.mapCursor.y===W&&this.mapCursor.z===L;let P=It,S=B;xt&&(S=.4+.6*(.5+.5*Math.sin(performance.now()/120)),P="#ffffff");const ot=(ut=>{const dt=ut.replace("#",""),pt=parseInt(dt,16),St=pt>>16&255,Lt=pt>>8&255,ht=pt&255;return`${St}, ${Lt}, ${ht}`})(P),at=f*.25;e.save(),e.globalAlpha=S;const lt=e.createLinearGradient(0,Tt.y,0,gt.y);lt.addColorStop(0,`rgba(${ot}, 0.15)`),lt.addColorStop(.2,`rgba(${ot}, 0.65)`),lt.addColorStop(.5,`rgba(${ot}, 0.95)`),lt.addColorStop(.8,`rgba(${ot}, 0.65)`),lt.addColorStop(1,`rgba(${ot}, 0.15)`),e.beginPath(),e.moveTo(Tt.x-at,Tt.y),e.lineTo(Tt.x,Tt.y+at/2),e.lineTo(gt.x,gt.y+at/2),e.lineTo(gt.x-at,gt.y),e.closePath(),e.fillStyle=lt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(Tt.x,Tt.y+at/2),e.lineTo(Tt.x+at,Tt.y),e.lineTo(gt.x+at,gt.y),e.lineTo(gt.x,gt.y+at/2),e.closePath(),e.fillStyle=lt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.restore()}}},N=(L,B,Z)=>{e.save(),e.globalAlpha=Z;const W=Math.sin(performance.now()/200)*3-6,Y=B+W;if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){const D=this.keyImage,Mt=D.naturalWidth/D.naturalHeight,vt=l*.55;let Tt=vt,gt=vt;Mt>1?gt=vt/Mt:Tt=vt*Mt,e.drawImage(D,L-Tt/2,Y-gt/2,Tt,gt)}else e.beginPath(),e.moveTo(L,Y-5),e.lineTo(L+4,Y),e.lineTo(L,Y+5),e.lineTo(L-4,Y),e.closePath(),e.fillStyle="#ffd700",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();e.restore()},T=(L,B,Z)=>{e.save(),e.globalAlpha=Z;const W=Math.sin(performance.now()/250)*3-6,Y=B+W;if(this.manaImage.complete&&this.manaImage.naturalWidth!==0){const D=this.manaImage,Mt=D.naturalWidth/D.naturalHeight,vt=l*.55;let Tt=vt,gt=vt;Mt>1?gt=vt/Mt:Tt=vt*Mt,e.shadowColor="rgba(0, 255, 255, 0.85)",e.shadowBlur=l*.25,e.shadowOffsetX=0,e.shadowOffsetY=0,e.drawImage(D,L-Tt/2,Y-gt/2,Tt,gt)}else e.beginPath(),e.moveTo(L,Y-5),e.lineTo(L+4,Y),e.lineTo(L,Y+5),e.lineTo(L-4,Y),e.closePath(),e.fillStyle="#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();e.restore()},b=(L,B,Z,W,Y)=>{e.save(),e.globalAlpha=W;const D=Math.sin(performance.now()/250)*2-4,Mt=B+D;if(Y){e.save();const vt=1+.35*(.5+.5*Math.sin(performance.now()/100));e.beginPath(),e.arc(L,Mt,7*vt,0,Math.PI*2),e.fillStyle="rgba(255, 255, 255, 0.4)",e.fill(),e.restore()}e.beginPath(),e.arc(L,Mt,5,0,Math.PI*2),e.fillStyle=Y?"#ffffff":Z,e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.2,e.stroke(),e.restore()},z=(L,B,Z)=>{if(this.statueImage&&this.statueImage.complete&&this.statueImage.naturalWidth!==0){e.save(),e.beginPath();const W=f*.7,Y=p*.7;e.ellipse(L,B,W,Y,0,0,Math.PI*2),e.fillStyle="rgba(0, 0, 0, 0.45)",e.fill(),e.restore(),e.save(),e.globalAlpha=Z;const D=this.statueImage.width/this.statueImage.height,Mt=l*.8,vt=Mt/D;e.drawImage(this.statueImage,L-Mt/2,B-vt,Mt,vt),e.restore()}else M(L,B,f*.4,p*.4,h*.8,"#555555",Z)},k=(L,B,Z)=>{const W=`${this.playerVertical}_${this.playerSide}`,Y=this.mageImages[W];let D=Z;this.deathAnimation&&this.deathAnimation.active&&(Math.floor(Date.now()/120)%2===0||(D=.2));const Mt=f*.55,vt=p*.55,Tt=L-f*.12,gt=B-p*.12;if(e.save(),e.beginPath(),e.ellipse(Tt,gt,Mt,vt,0,0,Math.PI*2),e.fillStyle=`rgba(0, 0, 0, ${D*.45})`,e.fill(),e.restore(),Y&&Y.complete){e.save(),e.globalAlpha=D;const It=l*.7,xt=It,P=It*(Y.height/Y.width),S=B-P;e.drawImage(Y,L-xt/2,S,xt,P),e.restore()}else e.save(),e.globalAlpha=D,e.beginPath(),e.arc(L,B-3,5,0,Math.PI*2),e.fillStyle=X.COLORS.PLAYER,e.fill(),e.strokeStyle=X.COLORS.PLAYER_OUTLINE,e.lineWidth=1.5,e.stroke(),e.restore();if(this.deathAnimation&&this.deathAnimation.active){const It=Math.min(1,this.deathAnimation.delayElapsed/this.deathAnimation.delayDuration),xt=-(Y&&Y.complete?l*.7*(Y.height/Y.width):l*.5),P=l*.7,S=(1-It)*xt-4*P*It*(1-It);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){e.save();const H=this.keyImage,ot=H.naturalWidth/H.naturalHeight,at=l*.55;let lt=at,ut=at;ot>1?ut=at/ot:lt=at*ot,e.drawImage(H,L-lt/2,B-ut/2+S,lt,ut),e.restore()}else e.save(),e.beginPath(),e.arc(L,B+S,l*.15,0,2*Math.PI),e.fillStyle="#ffd700",e.fill(),e.restore()}if(X.SHOW_COLLISION_DEBUG){e.save();const It=X.PLAYER_COLLISION_OFFSET_X||0,xt=X.PLAYER_COLLISION_OFFSET_Y||0,P=(It-xt)*f,S=(It+xt)*p,H=L+P,ot=B+S;e.beginPath(),e.moveTo(H,ot-X.PLAYER_COLLISION_RADIUS*h),e.lineTo(H+X.PLAYER_COLLISION_RADIUS*l,ot),e.lineTo(H,ot+X.PLAYER_COLLISION_RADIUS*h),e.lineTo(H-X.PLAYER_COLLISION_RADIUS*l,ot),e.closePath(),e.strokeStyle="#ff0000",e.lineWidth=1.5,e.stroke(),e.restore()}},q=(L,B,Z,W)=>{if(L&&L.lowCanvas){e.save(),e.globalAlpha=W;const Y=l*.9;e.save(),e.beginPath();const D=f*.6,Mt=p*.6;e.ellipse(B,Z,D,Mt,0,0,Math.PI*2),e.fillStyle="rgba(0, 0, 0, 0.35)",e.fill(),e.restore();const vt=Math.sin(L.jellyTime*3)*(l*.06),Tt=l*.38+vt,gt=Z-Tt,It=L.jellyTime,xt=Math.sin(It)*6,P=Math.cos(It*.7)*4,S=1+Math.sin(It*1.2)*.06,H=1+Math.cos(It*.8)*.06,ot=xt*Math.PI/180,at=P*Math.PI/180;e.save(),e.translate(B,gt),e.transform(S,Math.tan(at),Math.tan(ot),H,0,0),e.imageSmoothingEnabled=!1,e.drawImage(L.lowCanvas,-Y/2,-Y/2,Y,Y),e.restore(),e.restore()}else{e.save(),e.globalAlpha=W;const Y=4+Math.sin(performance.now()/100)*1.5;e.beginPath(),e.arc(B,Z-3,Y,0,Math.PI*2),e.fillStyle=X.COLORS.HUNTER||"#ff00ff",e.fill(),e.strokeStyle="#ff0000",e.lineWidth=1,e.stroke(),e.restore()}},w=L=>{const B=Math.abs(L-r);return B<=2?1-B/2*(1-.35):B<4?.35*(1-(B-2)/2):0};for(let L=1;L<a;L+=2){if(L-1>=0&&(L-1===o-1||L-1===o+1)){const Z=w(L-2),W=w(L),Y=Math.max(Z,W)*.8;Y>.01&&A(L-1,Y)}const B=w(L);B>.01&&(L===o&&u(B),x(L,B))}const I=this.getInteractiveElements(o);if(I.forEach(L=>{if(L.type==="shaft"){const B=d(L.x,L.y,L.z),Z=this.mapCursor.x===L.x&&this.mapCursor.y===L.y&&this.mapCursor.z===L.z;e.save();const W=.5+.5*Math.sin(performance.now()/150);e.beginPath(),e.arc(B.x,B.y,7.5+W*2.5,0,Math.PI*2),e.fillStyle=Z?"#ffffff":"#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke(),e.restore()}}),this.mapCursor.x===Math.floor(this.player.x)&&this.mapCursor.y===Math.floor(this.player.y)&&this.mapCursor.z===this.player.z||I.some(L=>L.x===this.mapCursor.x&&L.y===this.mapCursor.y&&L.z===this.mapCursor.z)){const L=d(this.mapCursor.x,this.mapCursor.y,this.mapCursor.z),B=Math.sin(performance.now()/150)*4;e.save();const Z=1-B/16,W=d(this.mapCursor.x,this.mapCursor.y,o);e.translate(W.x,W.y),e.scale(1,.5),e.beginPath(),e.arc(0,0,8*Z,0,Math.PI*2),e.fillStyle=`rgba(0, 0, 0, ${.55*Z})`,e.fill(),e.restore(),e.save();const Y=L.x,D=L.y-h-12+B;e.beginPath(),e.moveTo(Y,D),e.lineTo(Y-6,D-8),e.lineTo(Y-3,D-8),e.lineTo(Y-3,D-16),e.lineTo(Y+3,D-16),e.lineTo(Y+3,D-8),e.lineTo(Y+6,D-8),e.closePath(),e.fillStyle="#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke(),e.restore()}const $=45,K=n/3,tt=n/3*2,Q=i-$;e.save(),e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=4,e.lineCap="round",e.beginPath(),e.moveTo(Q,K),e.lineTo(Q,tt),e.stroke(),e.strokeStyle="rgba(0, 255, 255, 0.4)",e.lineWidth=1.5;for(let L=K;L<=tt;L+=(tt-K)/6)e.beginPath(),e.moveTo(Q-5,L),e.lineTo(Q+5,L),e.stroke();e.restore();const it=(K+tt)/2,G=(tt-K)/2,et=r-o,ct=it-et/2*G;if(e.save(),e.fillStyle="#00ffff",e.beginPath(),e.arc(Q,ct,5,0,Math.PI*2),e.fill(),e.restore(),this.floorClickRects=[],[{floor:o+2,y:K,label:`${(o+2+1)/2}F`,valid:o+2<=a-2},{floor:o,y:it,label:`${(o+1)/2}F`,valid:!0},{floor:o-2,y:tt,label:`${(o-2+1)/2}F`,valid:o-2>=1}].forEach(L=>{if(!L.valid)return;const B=60,Z=36,W=Q-B-15,Y=L.y-Z/2,D=L.floor===o;e.save(),e.beginPath(),e.moveTo(W+6,Y),e.lineTo(W+B,Y),e.lineTo(W+B,Y+Z-6),e.lineTo(W+B-6,Y+Z),e.lineTo(W,Y+Z),e.lineTo(W,Y+6),e.closePath(),e.fillStyle=D?"rgba(0, 255, 255, 0.25)":"rgba(0, 0, 0, 0.6)",e.strokeStyle=D?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=D?2:1,e.fill(),e.stroke(),e.restore(),e.strokeStyle=D?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=D?2:1,e.beginPath(),e.moveTo(W+B,L.y),e.lineTo(Q-2,L.y),e.stroke(),e.fillStyle=D?"#00ffff":"rgba(255, 255, 255, 0.5)",e.font="bold 8px Courier New",e.textAlign="center",e.textBaseline="top",e.fillText("LEVEL",W+B/2,Y+6),e.fillStyle="#ffffff",e.font="bold 15px Courier New",e.textBaseline="top",e.fillText(L.label,W+B/2,Y+16),this.floorClickRects.push({floor:L.floor,x:W,y:Y,w:B+15,h:Z})}),this.isTeleportMode||(e.save(),e.beginPath(),e.moveTo(31,30),e.lineTo(145,30),e.lineTo(145,60),e.lineTo(139,66),e.lineTo(25,66),e.lineTo(25,36),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.7)",e.strokeStyle="rgba(0, 255, 255, 0.35)",e.lineWidth=1.5,e.fill(),e.stroke(),e.restore(),e.fillStyle="rgba(0, 255, 255, 0.7)",e.font="bold 8px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="top",e.fillText(Ot("hudPathfinders"),25+120/2,35),e.fillStyle="#ffffff",e.font="bold 13px 'Roboto', sans-serif",e.textBaseline="top",e.fillText(`${this.pathfindersRemaining} / ${this.totalPathfinders}`,25+120/2,46)),this.isTeleportMode){const Z=i/2-90,W=30;e.save(),e.beginPath(),e.moveTo(Z+8,W),e.lineTo(Z+180-8,W),e.lineTo(Z+180,W+8),e.lineTo(Z+180,W+38-8),e.lineTo(Z+180-8,W+38),e.lineTo(Z+8,W+38),e.lineTo(Z,W+38-8),e.lineTo(Z,W+8),e.closePath(),e.fillStyle="rgba(255, 140, 0, 0.22)",e.strokeStyle="#ff8c00",e.lineWidth=2.5,e.fill(),e.stroke(),e.restore(),e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Ot("teleportWarning"),i/2,W+38/2)}if(this.isTeleportMode){const L=this.isTouchDevice?64:56,Z=(this.allTeleports.length-1)*L,W=n-60,Y=this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive,D=this.isTouchDevice?82:62,Mt=this.isTouchDevice?40:30,vt=this.isTouchDevice?46:36,Tt=Y?vt+D:0,gt=Z+60+Tt,It=this.isTouchDevice?74:62,xt=i/2-gt/2,P=W-It/2,S=xt+30;if(e.save(),e.beginPath(),e.moveTo(xt+6,P),e.lineTo(xt+gt-6,P),e.lineTo(xt+gt,P+6),e.lineTo(xt+gt,P+It-6),e.lineTo(xt+gt-6,P+It),e.lineTo(xt+6,P+It),e.lineTo(xt,P+It-6),e.lineTo(xt,P+6),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.72)",e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=1,e.fill(),e.stroke(),e.restore(),this.teleportDotsClickRects=[],this.getSelectableTeleportIndices(),this.allTeleports.forEach((H,ot)=>{const at=S+ot*L,lt=`${H.x},${H.y},${H.z}`,ut=this.discoveredTeleports.has(lt),dt=ot===this.selectedTeleportIndex,pt=H.x===Math.floor(this.player.x)&&H.y===Math.floor(this.player.y)&&H.z===this.player.z,St=this.inactiveTeleportPos&&H.x===this.inactiveTeleportPos.x&&H.y===this.inactiveTeleportPos.y&&H.z===this.inactiveTeleportPos.z;e.save();const Lt=this.isTouchDevice?13:10,ht=this.isTouchDevice?19:15;if(!ut)e.beginPath(),e.arc(at,W,Lt,0,Math.PI*2),e.fillStyle="rgba(100, 100, 100, 0.45)",e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.15)",e.stroke();else if(St)e.beginPath(),e.arc(at,W,Lt,0,Math.PI*2),e.fillStyle="rgba(255, 45, 0, 0.2)",e.fill(),e.strokeStyle="rgba(255, 45, 0, 0.4)",e.lineWidth=1.2,e.stroke();else{if(dt){const Nt=1+.3*(.5+.5*Math.sin(performance.now()/120)),Ct=(this.isTouchDevice?28:22)*Nt;e.beginPath(),e.arc(at,W,Ct,0,Math.PI*2),e.fillStyle="rgba(0, 255, 255, 0.18)",e.fill()}e.beginPath(),e.arc(at,W,dt?ht:Lt,0,Math.PI*2),e.fillStyle=dt?"#ffffff":"#00b3ff",e.fill(),e.strokeStyle=dt?"#00ffff":"#ffffff",e.lineWidth=dt?1.5:1,e.stroke(),pt&&(e.beginPath(),e.arc(at,W,dt?this.isTouchDevice?10:8:this.isTouchDevice?6:5,0,Math.PI*2),e.fillStyle="#39ff14",e.fill())}e.restore();const zt=this.isTouchDevice?33:25;this.teleportDotsClickRects.push({x:at-zt,y:W-zt,w:zt*2,h:zt*2,index:ot})}),Y){const H=S+Z+30,ot=W-Mt/2;e.save(),e.beginPath(),e.rect(H,ot,D,Mt),e.fillStyle="rgba(0, 255, 255, 0.15)",e.strokeStyle="#00ffff",e.lineWidth=1.5,e.fill(),e.stroke(),e.fillStyle="#ffffff",e.font="bold 12px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Ot("teleportGo"),H+D/2,ot+Mt/2),e.restore(),this.teleportGoBtnClickRect={x:H,y:ot,w:D,h:Mt}}else this.teleportGoBtnClickRect=null;if(this.teleportConfirmModalActive){e.fillStyle="rgba(0, 0, 0, 0.6)",e.fillRect(0,0,i,n);const H=320,ot=160,at=i/2-H/2,lt=n/2-ot/2;e.save(),e.beginPath(),e.moveTo(at+10,lt),e.lineTo(at+H-10,lt),e.lineTo(at+H,lt+10),e.lineTo(at+H,lt+ot-10),e.lineTo(at+H-10,lt+ot),e.lineTo(at+10,lt+ot),e.lineTo(at,lt+ot-10),e.lineTo(at,lt+10),e.closePath(),e.fillStyle="rgba(10, 18, 30, 0.94)",e.strokeStyle="#00ffff",e.lineWidth=2,e.fill(),e.stroke(),e.restore(),e.fillStyle="#00ffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="top",e.fillText(Ot("teleportationLink"),i/2,lt+16),e.strokeStyle="rgba(0, 255, 255, 0.2)",e.lineWidth=1,e.beginPath(),e.moveTo(at+15,lt+34),e.lineTo(at+H-15,lt+34),e.stroke();const ut=this.allTeleports[this.selectedTeleportIndex];e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.fillText(Ot("teleportJumpSector",{floor:(ut.z+1)/2}),i/2,lt+52),e.fillStyle="rgba(255, 255, 255, 0.7)",e.font="13px 'Roboto', sans-serif",e.fillText(Ot("teleportTargetGrid",{x:ut.x,y:ut.y}),i/2,lt+75);const dt=100,pt=30,St=i/2-dt-15,Lt=lt+105,ht=i/2+15,zt=lt+105;this.teleportModalClickRects=[{x:St,y:Lt,w:dt,h:pt,selection:"go"},{x:ht,y:zt,w:dt,h:pt,selection:"cancel"}];const Nt=(Ct,At,bt,R)=>{const ft=this.teleportModalSelection===R;e.save(),e.beginPath(),e.moveTo(Ct+4,At),e.lineTo(Ct+dt-4,At),e.lineTo(Ct+dt,At+4),e.lineTo(Ct+dt,At+pt-4),e.lineTo(Ct+dt-4,At+pt),e.lineTo(Ct+4,At+pt),e.lineTo(Ct,At+pt-4),e.lineTo(Ct,At+4),e.closePath(),e.fillStyle=ft?"rgba(0, 255, 255, 0.35)":"rgba(0, 0, 0, 0.6)",e.strokeStyle=ft?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=ft?2:1,e.fill(),e.stroke(),e.restore(),e.fillStyle=ft?"#ffffff":"#00ffff",e.font="bold 13px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(bt,Ct+dt/2,At+pt/2)};Nt(St,Lt,Ot("teleportGo"),"go"),Nt(ht,zt,Ot("teleportCancel"),"cancel")}}}}function rm(s){let t,e,i,n,a,o,r,c,l,h,f,p,g,v,m;return{c(){t=ri("section"),t.innerHTML='<div class="menu-content"><header><h1 class="game-title" data-i18n="gameTitle">VOID ESCAPE</h1></header> <div class="menu-stats-grid"><div class="stat-container hunter"><div class="stat-label" data-i18n="activeHunters">Active Hunters</div> <div class="stat-value" id="hunter-count">-</div></div> <div class="stat-container teleport"><div class="stat-label" data-i18n="activeTeleports">Active Teleports</div> <div class="stat-value" id="teleport-count">-</div></div> <div class="stat-container keys"><div class="stat-label" data-i18n="activeKeys">Active Keys</div> <div class="stat-value" id="keys-count">-</div></div> <div class="stat-container pathfinder"><div class="stat-label" data-i18n="availablePathfinders">Available Pathfinders</div> <div class="stat-value" id="pathfinder-count">-</div></div></div> <div class="control-group"><div class="degree-full-row"><span class="degree-label" data-i18n="mazeDegree">Maze Degree</span> <span class="degree-value" id="degree-val">-</span></div> <input type="range" id="maze-degree" aria-label="Ajustar Grau do Labirinto"/> <p class="hint" data-i18n="degreeHint">Controls the grid size. Higher values create larger, more complex mazes.</p></div> <div class="control-group switch-group"><div class="switch-container"><span class="switch-label" data-i18n="safeMode">Safe Mode</span> <label class="switch" for="safe-mode"><input type="checkbox" id="safe-mode" aria-label="Safe Mode"/> <span class="slider"></span></label></div> <p class="hint" data-i18n="safeModeHint">When active, no hunters will spawn in the maze.</p></div> <div class="menu-action-btns"><button id="start-btn" data-i18n="generateMaze">NEW GAME</button> <button id="continue-btn-menu" class="continue-btn" style="display:none" data-i18n="continue">CONTINUE</button></div> <p class="game-credits" data-i18n="gameCredits">a game by Bernard Rodrigues</p></div>',e=Ti(),i=ri("section"),i.innerHTML='<div class="story-container"><div id="story-image-canvas" class="story-image-box"><div id="story-image-loader" class="story-loader hidden"><div class="spinner"></div> <span data-i18n="loading">LOADING...</span></div> <img id="story-img" src="" alt="Story Image" style="display: none; max-width: 100%; max-height: 100%;"/></div> <div id="story-dialogue" class="story-dialogue-box"><span id="story-text"></span> <span id="story-arrow" class="story-arrow hidden">▼</span></div> <div class="story-actions"><button id="story-skip-btn">SKIP</button></div></div>',n=Ti(),a=ri("section"),a.innerHTML='<div class="popup-container victory"><h1 data-i18n="victoryTitle">Mission Accomplished</h1> <p data-i18n="victoryText">You have successfully navigated the 3D void.</p> <p class="victory-stats"><span data-i18n="mapCompletion">MAP COMPLETION</span>: <span id="victory-completion-rate">0%</span></p> <p class="victory-stats"><span data-i18n="victoryDeaths">DEATHS</span>: <span id="victory-deaths-count">0</span></p> <p class="victory-stats"><span data-i18n="victoryDegree">MAZE DEGREE</span>: <span id="victory-maze-degree">0</span></p> <p class="victory-stats"><span data-i18n="victoryTime">COMPLETION TIME</span>: <span id="victory-completion-time">00:00</span></p> <p class="victory-stats"><span data-i18n="victoryMana">MANA COLLECTED</span>: <span id="victory-mana-count">0/0</span></p> <div class="end-game-btns"><button id="restart-btn-victory" class="end-btn" data-i18n="playAgain">PLAY AGAIN</button> <button id="menu-btn-victory" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',o=Ti(),r=ri("section"),r.innerHTML='<div class="popup-container death"><h1 data-i18n="gameOverTitle">Terminated</h1> <p data-i18n="gameOverText">You were caught by the void hunters.</p> <div class="end-game-btns"><button id="continue-btn-death" class="end-btn continue-highlight" data-i18n="continue">CONTINUE</button> <button id="retry-btn-death" class="end-btn" data-i18n="playAgain">PLAY AGAIN</button> <button id="menu-btn-death" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',c=Ti(),l=ri("section"),l.innerHTML='<div class="popup-container pause"><h1 data-i18n="pauseTitle">PAUSED</h1> <div class="end-game-btns"><button id="resume-btn" class="end-btn continue-highlight" data-i18n="resume">RESUME</button> <button id="menu-btn-pause" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',h=Ti(),f=ri("div"),f.innerHTML='<span class="saving-icon">💾</span> <span data-i18n="saving">SAVING...</span>',p=Ti(),g=ri("main"),g.innerHTML='<button id="mobile-pause-btn" class="hidden" aria-label="Pause Game">✕</button> <button id="mobile-teleport-exit-btn" class="hidden" aria-label="Exit Teleport Map">✕</button> <div id="left-hud-panel" class="intro-hidden"><div class="hud-item-group"><div class="keys-title" data-i18n="hudKeys">KEYS</div> <div class="keys-counter"><span id="keys-collected-count">0</span> / <span id="keys-total-count">0</span></div> <div id="keys-list-container"></div></div> <div class="hud-item-group" id="pathfinder-hud-group"><div class="pathfinders-title" data-i18n="hudPathfinders">PATHFINDERS</div> <div class="pathfinders-counter"><span id="pathfinders-remaining-count">0</span> / <span id="pathfinders-total-count">0</span></div></div></div> <div id="map-area-container" class="intro-hidden"><div id="desktop-hud-row"><div id="mana-counter-desktop" class="mana-panel-hud"><span class="mana-icon">✨</span> <span class="mana-label" data-i18n="hudMana">MANA:</span> <span id="mana-collected-count-desktop">0</span>/<span id="mana-total-count-desktop">0</span></div> <div id="hunter-status-panel"><span class="status-label" data-i18n="statusLabel">HUNTER STATUS:</span> <div class="status-marquee-container"><span id="hunter-status-val" class="status-marquee-text status--scanning" data-i18n="statusScanning">SCANNING</span></div></div> <div id="jelly-portal-counter-desktop" class="jelly-portal-panel-hud"><div class="jelly-balls-container"><span class="jelly-ball gold-ball-1"></span> <span class="jelly-ball gold-ball-2"></span></div> <span class="jelly-portal-count-label">x<span id="jelly-portal-count-desktop">0</span></span></div></div> <div style="position: relative; display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 90vw; margin-bottom: calc(var(--h-unit) * 2); margin-bottom: calc(var(--d-h-unit) * 2);"><canvas id="main-2d-canvas" aria-label="2D Navigation Map" style="margin-bottom: 0;"></canvas> <button id="mobile-jelly-portal-btn" aria-label="Jelly God Portal"><svg class="jelly-portal-spiral" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M12 12a1 1 0 0 1 1 1c0 1.1-.9 2-2 2a3 3 0 0 1-3-3c0-2.2 1.8-4 4-4a5 5 0 0 1 5 5c0 3.3-2.7 6-6 6a7 7 0 0 1-7-7c0-4.4 3.6-8 8-8a9 9 0 0 1 9 9"></path></svg></button> <button id="mobile-zoom-btn" aria-label="Toggle Zoom"><svg id="zoom-out-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;"><circle cx="11" cy="11" r="6"></circle><line x1="21" y1="21" x2="15.5" y2="15.5"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg> <svg id="zoom-in-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;" class="hidden"><circle cx="11" cy="11" r="6"></circle><line x1="21" y1="21" x2="15.5" y2="15.5"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg></button></div> <div id="mobile-proximeter-row"><div id="mana-counter-mobile" class="mana-panel-hud"><span class="mana-icon">✨</span> <span class="mana-label" data-i18n="hudMana">MANA:</span> <span id="mana-collected-count-mobile">0</span>/<span id="mana-total-count-mobile">0</span></div> <div id="proximeter-container" class="hidden"><div class="proximeter-label" data-i18n="proximityDetector">PROXIMITY DETECTOR</div> <div class="proximeter-bar"><span class="proximeter-cell" data-index="1"></span> <span class="proximeter-cell" data-index="2"></span> <span class="proximeter-cell" data-index="3"></span> <span class="proximeter-cell" data-index="4"></span> <span class="proximeter-cell" data-index="5"></span> <span class="proximeter-cell" data-index="6"></span> <span class="proximeter-cell" data-index="7"></span> <span class="proximeter-cell" data-index="8"></span> <span class="proximeter-cell" data-index="9"></span> <span class="proximeter-cell" data-index="10"></span></div></div> <div id="jelly-portal-counter-mobile" class="jelly-portal-panel-hud"><div class="jelly-balls-container"><span class="jelly-ball gold-ball-1"></span> <span class="jelly-ball gold-ball-2"></span></div> <span class="jelly-portal-count-label">x<span id="jelly-portal-count-mobile">0</span></span></div></div> <div id="bottom-hud-container" class="intro-hidden"><div id="floor-display" aria-live="polite"><span class="hud-label" data-i18n="hudFloor">Floor</span> <span id="current-floor">0</span></div> <div id="visited-display" aria-live="polite"><span class="hud-label" data-i18n="hudVisited">Visited</span> <span class="visited-value"><span id="visited-percent">0</span>%</span></div></div></div> <div id="right-hud-panel" class="intro-hidden"><aside id="map-legend"><h3 data-i18n="mapLegendTitle">MAP LEGEND</h3> <div class="legend-item"><span class="color-box color-box--visited"></span> <span data-i18n="legendVisited">Visited Path</span></div> <div class="legend-item"><span class="color-box color-box--known"></span> <span data-i18n="legendKnown">Known Path</span></div> <div class="legend-item"><span class="color-box color-box--start"></span> <span data-i18n="legendStart">Starting Point</span></div> <div class="legend-item"><span class="color-box color-box--exit"></span> <span data-i18n="legendExit">Maze Exit</span></div> <div id="legend-hunter" class="legend-item"><span class="color-box color-box--hunter"></span> <span data-i18n="legendHunter">Void Hunter</span></div> <div class="legend-item"><span class="color-box color-box--teleport"></span> <span data-i18n="legendTeleport">Teleport</span></div> <div class="legend-item"><span class="symbol-box"><svg viewBox="0 0 24 24" fill="none" style="width: 100%; height: 100%;"><path d="M12 2L5 9H9V11H15V9H19L12 2Z" fill="#00ffff"></path><path d="M12 22L19 15H15V13H9V15H5L12 22Z" fill="#ff00ff"></path></svg></span> <span data-i18n="legendElevator">Elevator</span></div></aside> <aside id="controls-hint"><h3 data-i18n="controlsHintTitle">CONTROLS HINT</h3> <div id="controls-hint-content"></div></aside></div> <nav id="mobile-controls" class="hidden"><button id="mobile-down" class="mobile-btn" disabled="" aria-label="Go Down">▼</button> <button id="mobile-map" class="mobile-btn" disabled="" aria-label="Open Map" data-i18n="map">MAP</button> <button id="mobile-up" class="mobile-btn" disabled="" aria-label="Go Up">▲</button></nav> <div id="map3d-container" class="hidden"></div>',v=Ti(),m=ri("section"),m.innerHTML='<div class="story-loader"><div class="spinner"></div> <span data-i18n="generatingMaze">GENERATING MAZE...</span></div>',Pe(t,"id","start-menu"),Pe(i,"id","story-screen"),Pe(i,"class","hidden"),Pe(a,"id","victory-screen"),Pe(a,"class","hidden"),Pe(r,"id","game-over-screen"),Pe(r,"class","hidden"),Pe(l,"id","pause-screen"),Pe(l,"class","hidden"),Pe(f,"id","saving-indicator"),Pe(f,"class","hidden"),Pe(g,"id","game-container"),Pe(m,"id","loading-screen"),Pe(m,"class","hidden")},m(d,u){xe(d,t,u),xe(d,e,u),xe(d,i,u),xe(d,n,u),xe(d,a,u),xe(d,o,u),xe(d,r,u),xe(d,c,u),xe(d,l,u),xe(d,h,u),xe(d,f,u),xe(d,p,u),xe(d,g,u),xe(d,v,u),xe(d,m,u)},p:an,i:an,o:an,d(d){d&&(Me(t),Me(e),Me(i),Me(n),Me(a),Me(o),Me(r),Me(c),Me(l),Me(h),Me(f),Me(p),Me(g),Me(v),Me(m))}}}function om(s){let t=null;function e(a){var r,c,l;t&&t.destroy(),al(),(r=document.getElementById("start-menu"))==null||r.classList.add("hidden"),(c=document.getElementById("victory-screen"))==null||c.classList.add("hidden"),(l=document.getElementById("game-over-screen"))==null||l.classList.add("hidden");const o=document.getElementById("loading-screen");o&&(o.classList.remove("hidden"),rs()),setTimeout(()=>{try{t=new yo(a,X.BRANCHING_FACTOR)}finally{o&&o.classList.add("hidden")}},50)}function i(){var r,c,l;const a=sl();if(!a)return;t&&t.destroy(),(r=document.getElementById("start-menu"))==null||r.classList.add("hidden"),(c=document.getElementById("victory-screen"))==null||c.classList.add("hidden"),(l=document.getElementById("game-over-screen"))==null||l.classList.add("hidden");const o=document.getElementById("loading-screen");o&&(o.classList.remove("hidden"),rs()),setTimeout(()=>{try{t=new yo(a.degree,a.branchingFactor,a)}finally{o&&o.classList.add("hidden")}},50)}function n(){var o,r,c;t&&t.destroy(),(o=document.getElementById("victory-screen"))==null||o.classList.add("hidden"),(r=document.getElementById("game-over-screen"))==null||r.classList.add("hidden");const a=document.getElementById("continue-btn-menu");a&&(a.style.display=_o()?"":"none"),(c=document.getElementById("start-menu"))==null||c.classList.remove("hidden")}return _l(()=>{rs();const a=document.getElementById("maze-degree"),o=document.getElementById("degree-val"),r=document.getElementById("hunter-count"),c=document.getElementById("teleport-count"),l=document.getElementById("keys-count"),h=document.getElementById("pathfinder-count"),f=document.getElementById("safe-mode"),p=q=>{const I=f&&f.checked?0:X.getHunterCount(q);r&&(r.innerText=String(I),r.style.color=I>0?"#f00":"#88ccff")};f&&a&&(f.onchange=()=>{p(parseInt(a.value))});const g=q=>{const w=X.getTeleportCount(q);c&&(c.innerText=String(w))},v=q=>{const w=X.getHunterCount(q)*2;l&&(l.innerText=String(w))},m=q=>{const w=X.getPathfinderCount(q);h&&(h.innerText=String(w))};if(a){X.MIN_MAZE_DEGREE!==void 0&&(a.min=String(X.MIN_MAZE_DEGREE)),X.MAX_MAZE_DEGREE!==void 0&&(a.max=String(X.MAX_MAZE_DEGREE)),X.MAZE_DEGREE!==void 0&&(a.value=String(X.MAZE_DEGREE)),a.oninput=()=>{const w=parseInt(a.value);o&&(o.innerText=String(w)),p(w),g(w),v(w),m(w)};const q=parseInt(a.value);o&&(o.innerText=String(q)),p(q),g(q),v(q),m(q)}const d=document.getElementById("continue-btn-menu");d&&(d.style.display=_o()?"":"none");const u=document.getElementById("mobile-pause-btn");u&&(u.onclick=q=>{q.stopPropagation(),t&&t.togglePause()});const M=document.getElementById("mobile-teleport-exit-btn");M&&(M.onclick=q=>{q.stopPropagation(),t&&t.isTeleportMode&&t.toggleTeleportMap(!1)});const _=document.getElementById("mobile-jelly-portal-btn");_&&(_.onclick=q=>{q.stopPropagation(),t&&t.tryActivateJellyPortal()});const y=document.getElementById("start-btn");y&&a&&(y.onclick=()=>{e(parseInt(a.value))});const E=document.getElementById("continue-btn-menu");E&&(E.onclick=()=>{i()});const x=document.getElementById("restart-btn-victory");x&&a&&(x.onclick=()=>{e(parseInt(a.value))});const A=document.getElementById("menu-btn-victory");A&&(A.onclick=()=>{n()});const N=document.getElementById("continue-btn-death");N&&(N.onclick=()=>{i()});const T=document.getElementById("retry-btn-death");T&&a&&(T.onclick=()=>{e(parseInt(a.value))});const b=document.getElementById("menu-btn-death");b&&(b.onclick=()=>{n()});const z=document.getElementById("resume-btn");z&&(z.onclick=()=>{t&&t.togglePause()});const k=document.getElementById("menu-btn-pause");k&&(k.onclick=()=>{n()})}),[]}class lm extends wl{constructor(t){super(),Cl(this,t,om,rm,fl,{})}}new lm({target:document.getElementById("app")});
