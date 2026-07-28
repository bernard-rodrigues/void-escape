var hl=Object.defineProperty;var dl=(s,t,e)=>t in s?hl(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Bt=(s,t,e)=>dl(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();function an(){}function _o(s){return s()}function Fa(){return Object.create(null)}function ps(s){s.forEach(_o)}function yo(s){return typeof s=="function"}function ul(s,t){return s!=s?t==t:s!==t||s&&typeof s=="object"||typeof s=="function"}function fl(s){return Object.keys(s).length===0}function Re(s,t,e){s.insertBefore(t,e||null)}function Ae(s){s.parentNode&&s.parentNode.removeChild(s)}function xi(s){return document.createElement(s)}function pl(s){return document.createTextNode(s)}function Ni(){return pl(" ")}function Ne(s,t,e){e==null?s.removeAttribute(t):s.getAttribute(t)!==e&&s.setAttribute(t,e)}function ml(s){return Array.from(s.childNodes)}let Sn;function Mn(s){Sn=s}function gl(){if(!Sn)throw new Error("Function called outside component initialization");return Sn}function vl(s){gl().$$.on_mount.push(s)}const en=[],Ba=[];let rn=[];const Ga=[],_l=Promise.resolve();let sa=!1;function yl(){sa||(sa=!0,_l.then(xo))}function aa(s){rn.push(s)}const Ts=new Set;let Ui=0;function xo(){if(Ui!==0)return;const s=Sn;do{try{for(;Ui<en.length;){const t=en[Ui];Ui++,Mn(t),xl(t.$$)}}catch(t){throw en.length=0,Ui=0,t}for(Mn(null),en.length=0,Ui=0;Ba.length;)Ba.pop()();for(let t=0;t<rn.length;t+=1){const e=rn[t];Ts.has(e)||(Ts.add(e),e())}rn.length=0}while(en.length);for(;Ga.length;)Ga.pop()();sa=!1,Ts.clear(),Mn(s)}function xl(s){if(s.fragment!==null){s.update(),ps(s.before_update);const t=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,t),s.after_update.forEach(aa)}}function Ml(s){const t=[],e=[];rn.forEach(i=>s.indexOf(i)===-1?t.push(i):e.push(i)),e.forEach(i=>i()),rn=t}const El=new Set;function Tl(s,t){s&&s.i&&(El.delete(s),s.i(t))}function Sl(s,t,e){const{fragment:i,after_update:n}=s.$$;i&&i.m(t,e),aa(()=>{const a=s.$$.on_mount.map(_o).filter(yo);s.$$.on_destroy?s.$$.on_destroy.push(...a):ps(a),s.$$.on_mount=[]}),n.forEach(aa)}function bl(s,t){const e=s.$$;e.fragment!==null&&(Ml(e.after_update),ps(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function Al(s,t){s.$$.dirty[0]===-1&&(en.push(s),yl(),s.$$.dirty.fill(0)),s.$$.dirty[t/31|0]|=1<<t%31}function wl(s,t,e,i,n,a,o=null,r=[-1]){const c=Sn;Mn(s);const l=s.$$={fragment:null,ctx:[],props:a,update:an,not_equal:n,bound:Fa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Fa(),dirty:r,skip_bound:!1,root:t.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=e?e(s,t.props||{},(f,p,..._)=>{const v=_.length?_[0]:p;return l.ctx&&n(l.ctx[f],l.ctx[f]=v)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](v),u&&Al(s,f)),p}):[],l.update(),u=!0,ps(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){const f=ml(t.target);l.fragment&&l.fragment.l(f),f.forEach(Ae)}else l.fragment&&l.fragment.c();t.intro&&Tl(s.$$.fragment),Sl(s,t.target,t.anchor),xo()}Mn(c)}class Pl{constructor(){Bt(this,"$$");Bt(this,"$$set")}$destroy(){bl(this,1),this.$destroy=an}$on(t,e){if(!yo(e))return an;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(e),()=>{const n=i.indexOf(e);n!==-1&&i.splice(n,1)}}$set(t){this.$$set&&!fl(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Cl="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Cl);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ya="160",zi={ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rl=0,Ha=1,Ll=2,Mo=1,Il=2,ii=3,vi=0,Pe=1,ni=2,pi=0,on=1,ka=2,Va=3,Wa=4,Dl=5,Ai=100,Ol=101,Nl=102,Ya=103,Xa=104,Ul=200,zl=201,Fl=202,Bl=203,ra=204,oa=205,Gl=206,Hl=207,kl=208,Vl=209,Wl=210,Yl=211,Xl=212,$l=213,ql=214,Kl=0,Zl=1,jl=2,as=3,Jl=4,Ql=5,tc=6,ec=7,xa=0,ic=1,nc=2,mi=0,sc=1,ac=2,rc=3,oc=4,lc=5,cc=6,Eo=300,cn=301,hn=302,la=303,ca=304,ms=306,ha=1e3,We=1001,da=1002,Te=1003,$a=1004,Ss=1005,ze=1006,hc=1007,bn=1008,gi=1009,dc=1010,uc=1011,Ma=1012,To=1013,ui=1014,fi=1015,An=1016,So=1017,bo=1018,Pi=1020,fc=1021,Ye=1023,pc=1024,mc=1025,Ci=1026,dn=1027,gc=1028,Ao=1029,vc=1030,wo=1031,Po=1033,bs=33776,As=33777,ws=33778,Ps=33779,qa=35840,Ka=35841,Za=35842,ja=35843,Co=36196,Ja=37492,Qa=37496,tr=37808,er=37809,ir=37810,nr=37811,sr=37812,ar=37813,rr=37814,or=37815,lr=37816,cr=37817,hr=37818,dr=37819,ur=37820,fr=37821,Cs=36492,pr=36494,mr=36495,_c=36283,gr=36284,vr=36285,_r=36286,Ro=3e3,Ri=3001,yc=3200,xc=3201,Lo=0,Mc=1,Be="",ge="srgb",ai="srgb-linear",Ea="display-p3",gs="display-p3-linear",rs="linear",ee="srgb",os="rec709",ls="p3",Bi=7680,yr=519,Ec=512,Tc=513,Sc=514,Io=515,bc=516,Ac=517,wc=518,Pc=519,xr=35044,Mr="300 es",ua=1035,si=2e3,cs=2001;class Oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const a=n.indexOf(e);a!==-1&&n.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let a=0,o=n.length;a<o;a++)n[a].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ns=Math.PI/180,fa=180/Math.PI;function Pn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_e[s&255]+_e[s>>8&255]+_e[s>>16&255]+_e[s>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[i&255]+_e[i>>8&255]+_e[i>>16&255]+_e[i>>24&255]).toLowerCase()}function Se(s,t,e){return Math.max(t,Math.min(e,s))}function Cc(s,t){return(s%t+t)%t}function Rs(s,t,e){return(1-e)*s+e*t}function Er(s){return(s&s-1)===0&&s!==0}function pa(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function mn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function be(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Rc={DEG2RAD:ns};class Ut{constructor(t=0,e=0){Ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*i-o*n+t.x,this.y=a*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,i,n,a,o,r,c,l){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,o,r,c,l)}set(t,e,i,n,a,o,r,c,l){const u=this.elements;return u[0]=t,u[1]=n,u[2]=r,u[3]=e,u[4]=a,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,o=i[0],r=i[3],c=i[6],l=i[1],u=i[4],f=i[7],p=i[2],_=i[5],v=i[8],m=n[0],d=n[3],h=n[6],x=n[1],g=n[4],y=n[7],E=n[2],A=n[5],b=n[8];return a[0]=o*m+r*x+c*E,a[3]=o*d+r*g+c*A,a[6]=o*h+r*y+c*b,a[1]=l*m+u*x+f*E,a[4]=l*d+u*g+f*A,a[7]=l*h+u*y+f*b,a[2]=p*m+_*x+v*E,a[5]=p*d+_*g+v*A,a[8]=p*h+_*y+v*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*r*l-i*a*u+i*r*c+n*a*l-n*o*c}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],u=t[8],f=u*o-r*l,p=r*c-u*a,_=l*a-o*c,v=e*f+i*p+n*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/v;return t[0]=f*m,t[1]=(n*l-u*i)*m,t[2]=(r*i-n*o)*m,t[3]=p*m,t[4]=(u*e-n*c)*m,t[5]=(n*a-r*e)*m,t[6]=_*m,t[7]=(i*c-l*e)*m,t[8]=(o*e-i*a)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,a,o,r){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*o+l*r)+o+t,-n*l,n*c,-n*(-l*o+c*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Ls.makeScale(t,e)),this}rotate(t){return this.premultiply(Ls.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ls.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ls=new qt;function Do(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function hs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Lc(){const s=hs("canvas");return s.style.display="block",s}const Tr={};function En(s){s in Tr||(Tr[s]=!0,console.warn(s))}const Sr=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),br=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Dn={[ai]:{transfer:rs,primaries:os,toReference:s=>s,fromReference:s=>s},[ge]:{transfer:ee,primaries:os,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[gs]:{transfer:rs,primaries:ls,toReference:s=>s.applyMatrix3(br),fromReference:s=>s.applyMatrix3(Sr)},[Ea]:{transfer:ee,primaries:ls,toReference:s=>s.convertSRGBToLinear().applyMatrix3(br),fromReference:s=>s.applyMatrix3(Sr).convertLinearToSRGB()}},Ic=new Set([ai,gs]),Qt={enabled:!0,_workingColorSpace:ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ic.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=Dn[t].toReference,n=Dn[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Dn[s].primaries},getTransfer:function(s){return s===Be?rs:Dn[s].transfer}};function ln(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Gi;class Oo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gi===void 0&&(Gi=hs("canvas")),Gi.width=t.width,Gi.height=t.height;const i=Gi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=hs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=ln(a[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ln(e[i]/255)*255):e[i]=ln(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dc=0;class No{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=Pn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,r=n.length;o<r;o++)n[o].isDataTexture?a.push(Ds(n[o].image)):a.push(Ds(n[o]))}else a=Ds(n);i.url=a}return e||(t.images[this.uuid]=i),i}}function Ds(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Oo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Oc=0;class De extends Oi{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,i=We,n=We,a=ze,o=bn,r=Ye,c=gi,l=De.DEFAULT_ANISOTROPY,u=Be){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=Pn(),this.name="",this.source=new No(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ri?ge:Be),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Eo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ha:t.x=t.x-Math.floor(t.x);break;case We:t.x=t.x<0?0:1;break;case da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ha:t.y=t.y-Math.floor(t.y);break;case We:t.y=t.y<0?0:1;break;case da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ge?Ri:Ro}set encoding(t){En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ri?ge:Be}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Eo;De.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,i=0,n=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*a,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*a,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*a,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,a;const c=t.elements,l=c[0],u=c[4],f=c[8],p=c[1],_=c[5],v=c[9],m=c[2],d=c[6],h=c[10];if(Math.abs(u-p)<.01&&Math.abs(f-m)<.01&&Math.abs(v-d)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+m)<.1&&Math.abs(v+d)<.1&&Math.abs(l+_+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(l+1)/2,y=(_+1)/2,E=(h+1)/2,A=(u+p)/4,b=(f+m)/4,D=(v+d)/4;return g>y&&g>E?g<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(g),n=A/i,a=b/i):y>E?y<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(y),i=A/n,a=D/n):E<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(E),i=b/a,n=D/a),this.set(i,n,a,e),this}let x=Math.sqrt((d-v)*(d-v)+(f-m)*(f-m)+(p-u)*(p-u));return Math.abs(x)<.001&&(x=1),this.x=(d-v)/x,this.y=(f-m)/x,this.z=(p-u)/x,this.w=Math.acos((l+_+h-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nc extends Oi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const n={width:t,height:e,depth:1};i.encoding!==void 0&&(En("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ri?ge:Be),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new De(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new No(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends Nc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Uo extends De{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Te,this.minFilter=Te,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uc extends De{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Te,this.minFilter=Te,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,a,o,r){let c=i[n+0],l=i[n+1],u=i[n+2],f=i[n+3];const p=a[o+0],_=a[o+1],v=a[o+2],m=a[o+3];if(r===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(r===1){t[e+0]=p,t[e+1]=_,t[e+2]=v,t[e+3]=m;return}if(f!==m||c!==p||l!==_||u!==v){let d=1-r;const h=c*p+l*_+u*v+f*m,x=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const E=Math.sqrt(g),A=Math.atan2(E,h*x);d=Math.sin(d*A)/E,r=Math.sin(r*A)/E}const y=r*x;if(c=c*d+p*y,l=l*d+_*y,u=u*d+v*y,f=f*d+m*y,d===1-r){const E=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=E,l*=E,u*=E,f*=E}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,n,a,o){const r=i[n],c=i[n+1],l=i[n+2],u=i[n+3],f=a[o],p=a[o+1],_=a[o+2],v=a[o+3];return t[e]=r*v+u*f+c*_-l*p,t[e+1]=c*v+u*p+l*f-r*_,t[e+2]=l*v+u*_+r*p-c*f,t[e+3]=u*v-r*f-c*p-l*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,a=t._z,o=t._order,r=Math.cos,c=Math.sin,l=r(i/2),u=r(n/2),f=r(a/2),p=c(i/2),_=c(n/2),v=c(a/2);switch(o){case"XYZ":this._x=p*u*f+l*_*v,this._y=l*_*f-p*u*v,this._z=l*u*v+p*_*f,this._w=l*u*f-p*_*v;break;case"YXZ":this._x=p*u*f+l*_*v,this._y=l*_*f-p*u*v,this._z=l*u*v-p*_*f,this._w=l*u*f+p*_*v;break;case"ZXY":this._x=p*u*f-l*_*v,this._y=l*_*f+p*u*v,this._z=l*u*v+p*_*f,this._w=l*u*f-p*_*v;break;case"ZYX":this._x=p*u*f-l*_*v,this._y=l*_*f+p*u*v,this._z=l*u*v-p*_*f,this._w=l*u*f+p*_*v;break;case"YZX":this._x=p*u*f+l*_*v,this._y=l*_*f+p*u*v,this._z=l*u*v-p*_*f,this._w=l*u*f-p*_*v;break;case"XZY":this._x=p*u*f-l*_*v,this._y=l*_*f-p*u*v,this._z=l*u*v+p*_*f,this._w=l*u*f+p*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],a=e[8],o=e[1],r=e[5],c=e[9],l=e[2],u=e[6],f=e[10],p=i+r+f;if(p>0){const _=.5/Math.sqrt(p+1);this._w=.25/_,this._x=(u-c)*_,this._y=(a-l)*_,this._z=(o-n)*_}else if(i>r&&i>f){const _=2*Math.sqrt(1+i-r-f);this._w=(u-c)/_,this._x=.25*_,this._y=(n+o)/_,this._z=(a+l)/_}else if(r>f){const _=2*Math.sqrt(1+r-i-f);this._w=(a-l)/_,this._x=(n+o)/_,this._y=.25*_,this._z=(c+u)/_}else{const _=2*Math.sqrt(1+f-i-r);this._w=(o-n)/_,this._x=(a+l)/_,this._y=(c+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,a=t._z,o=t._w,r=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*r+n*l-a*c,this._y=n*u+o*c+a*r-i*l,this._z=a*u+o*l+i*c-n*r,this._w=o*u-i*r-n*c-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,a=this._z,o=this._w;let r=o*t._w+i*t._x+n*t._y+a*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=i,this._y=n,this._z=a,this;const c=1-r*r;if(c<=Number.EPSILON){const _=1-e;return this._w=_*o+e*this._w,this._x=_*i+e*this._x,this._y=_*n+e*this._y,this._z=_*a+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,r),f=Math.sin((1-e)*u)/l,p=Math.sin(e*u)/l;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=n*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(a),i*Math.cos(a),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,i=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ar.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ar.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*n,this.y=a[1]*e+a[4]*i+a[7]*n,this.z=a[2]*e+a[5]*i+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=t.elements,o=1/(a[3]*e+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*n+a[12])*o,this.y=(a[1]*e+a[5]*i+a[9]*n+a[13])*o,this.z=(a[2]*e+a[6]*i+a[10]*n+a[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,a=t.x,o=t.y,r=t.z,c=t.w,l=2*(o*n-r*i),u=2*(r*e-a*n),f=2*(a*i-o*e);return this.x=e+c*l+o*f-r*u,this.y=i+c*u+r*l-a*f,this.z=n+c*f+a*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n,this.y=a[1]*e+a[5]*i+a[9]*n,this.z=a[2]*e+a[6]*i+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,a=t.z,o=e.x,r=e.y,c=e.z;return this.x=n*c-a*r,this.y=a*o-i*c,this.z=i*r-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Os.copy(this).projectOnVector(t),this.sub(Os)}reflect(t){return this.sub(Os.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Os=new k,Ar=new Ii;class Cn{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,r=a.count;o<r;o++)t.isMesh===!0?t.getVertexPosition(o,Ge):Ge.fromBufferAttribute(a,o),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),On.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),On.copy(i.boundingBox)),On.applyMatrix4(t.matrixWorld),this.union(On)}const n=t.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gn),Nn.subVectors(this.max,gn),Hi.subVectors(t.a,gn),ki.subVectors(t.b,gn),Vi.subVectors(t.c,gn),ri.subVectors(ki,Hi),oi.subVectors(Vi,ki),Mi.subVectors(Hi,Vi);let e=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Mi.z,Mi.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Mi.z,0,-Mi.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Mi.y,Mi.x,0];return!Ns(e,Hi,ki,Vi,Nn)||(e=[1,0,0,0,1,0,0,0,1],!Ns(e,Hi,ki,Vi,Nn))?!1:(Un.crossVectors(ri,oi),e=[Un.x,Un.y,Un.z],Ns(e,Hi,ki,Vi,Nn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const je=[new k,new k,new k,new k,new k,new k,new k,new k],Ge=new k,On=new Cn,Hi=new k,ki=new k,Vi=new k,ri=new k,oi=new k,Mi=new k,gn=new k,Nn=new k,Un=new k,Ei=new k;function Ns(s,t,e,i,n){for(let a=0,o=s.length-3;a<=o;a+=3){Ei.fromArray(s,a);const r=n.x*Math.abs(Ei.x)+n.y*Math.abs(Ei.y)+n.z*Math.abs(Ei.z),c=t.dot(Ei),l=e.dot(Ei),u=i.dot(Ei);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>r)return!1}return!0}const zc=new Cn,vn=new k,Us=new k;class Ta{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):zc.setFromPoints(t).getCenter(i);let n=0;for(let a=0,o=t.length;a<o;a++)n=Math.max(n,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vn.subVectors(t,this.center);const e=vn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(vn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Us.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vn.copy(t.center).add(Us)),this.expandByPoint(vn.copy(t.center).sub(Us))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Je=new k,zs=new k,zn=new k,li=new k,Fs=new k,Fn=new k,Bs=new k;class Sa{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Je.copy(this.origin).addScaledVector(this.direction,e),Je.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){zs.copy(t).add(e).multiplyScalar(.5),zn.copy(e).sub(t).normalize(),li.copy(this.origin).sub(zs);const a=t.distanceTo(e)*.5,o=-this.direction.dot(zn),r=li.dot(this.direction),c=-li.dot(zn),l=li.lengthSq(),u=Math.abs(1-o*o);let f,p,_,v;if(u>0)if(f=o*c-r,p=o*r-c,v=a*u,f>=0)if(p>=-v)if(p<=v){const m=1/u;f*=m,p*=m,_=f*(f+o*p+2*r)+p*(o*f+p+2*c)+l}else p=a,f=Math.max(0,-(o*p+r)),_=-f*f+p*(p+2*c)+l;else p=-a,f=Math.max(0,-(o*p+r)),_=-f*f+p*(p+2*c)+l;else p<=-v?(f=Math.max(0,-(-o*a+r)),p=f>0?-a:Math.min(Math.max(-a,-c),a),_=-f*f+p*(p+2*c)+l):p<=v?(f=0,p=Math.min(Math.max(-a,-c),a),_=p*(p+2*c)+l):(f=Math.max(0,-(o*a+r)),p=f>0?a:Math.min(Math.max(-a,-c),a),_=-f*f+p*(p+2*c)+l);else p=o>0?-a:a,f=Math.max(0,-(o*p+r)),_=-f*f+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(zs).addScaledVector(zn,p),_}intersectSphere(t,e){Je.subVectors(t.center,this.origin);const i=Je.dot(this.direction),n=Je.dot(Je)-i*i,a=t.radius*t.radius;if(n>a)return null;const o=Math.sqrt(a-n),r=i-o,c=i+o;return c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,a,o,r,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(i=(t.min.x-p.x)*l,n=(t.max.x-p.x)*l):(i=(t.max.x-p.x)*l,n=(t.min.x-p.x)*l),u>=0?(a=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(a=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),i>o||a>n||((a>i||isNaN(i))&&(i=a),(o<n||isNaN(n))&&(n=o),f>=0?(r=(t.min.z-p.z)*f,c=(t.max.z-p.z)*f):(r=(t.max.z-p.z)*f,c=(t.min.z-p.z)*f),i>c||r>n)||((r>i||i!==i)&&(i=r),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Je)!==null}intersectTriangle(t,e,i,n,a){Fs.subVectors(e,t),Fn.subVectors(i,t),Bs.crossVectors(Fs,Fn);let o=this.direction.dot(Bs),r;if(o>0){if(n)return null;r=1}else if(o<0)r=-1,o=-o;else return null;li.subVectors(this.origin,t);const c=r*this.direction.dot(Fn.crossVectors(li,Fn));if(c<0)return null;const l=r*this.direction.dot(Fs.cross(li));if(l<0||c+l>o)return null;const u=-r*li.dot(Bs);return u<0?null:this.at(u/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,i,n,a,o,r,c,l,u,f,p,_,v,m,d){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,o,r,c,l,u,f,p,_,v,m,d)}set(t,e,i,n,a,o,r,c,l,u,f,p,_,v,m,d){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=n,h[1]=a,h[5]=o,h[9]=r,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=p,h[3]=_,h[7]=v,h[11]=m,h[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Wi.setFromMatrixColumn(t,0).length(),a=1/Wi.setFromMatrixColumn(t,1).length(),o=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,a=t.z,o=Math.cos(i),r=Math.sin(i),c=Math.cos(n),l=Math.sin(n),u=Math.cos(a),f=Math.sin(a);if(t.order==="XYZ"){const p=o*u,_=o*f,v=r*u,m=r*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=_+v*l,e[5]=p-m*l,e[9]=-r*c,e[2]=m-p*l,e[6]=v+_*l,e[10]=o*c}else if(t.order==="YXZ"){const p=c*u,_=c*f,v=l*u,m=l*f;e[0]=p+m*r,e[4]=v*r-_,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-r,e[2]=_*r-v,e[6]=m+p*r,e[10]=o*c}else if(t.order==="ZXY"){const p=c*u,_=c*f,v=l*u,m=l*f;e[0]=p-m*r,e[4]=-o*f,e[8]=v+_*r,e[1]=_+v*r,e[5]=o*u,e[9]=m-p*r,e[2]=-o*l,e[6]=r,e[10]=o*c}else if(t.order==="ZYX"){const p=o*u,_=o*f,v=r*u,m=r*f;e[0]=c*u,e[4]=v*l-_,e[8]=p*l+m,e[1]=c*f,e[5]=m*l+p,e[9]=_*l-v,e[2]=-l,e[6]=r*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,_=o*l,v=r*c,m=r*l;e[0]=c*u,e[4]=m-p*f,e[8]=v*f+_,e[1]=f,e[5]=o*u,e[9]=-r*u,e[2]=-l*u,e[6]=_*f+v,e[10]=p-m*f}else if(t.order==="XZY"){const p=o*c,_=o*l,v=r*c,m=r*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=p*f+m,e[5]=o*u,e[9]=_*f-v,e[2]=v*f-_,e[6]=r*u,e[10]=m*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fc,t,Bc)}lookAt(t,e,i){const n=this.elements;return Le.subVectors(t,e),Le.lengthSq()===0&&(Le.z=1),Le.normalize(),ci.crossVectors(i,Le),ci.lengthSq()===0&&(Math.abs(i.z)===1?Le.x+=1e-4:Le.z+=1e-4,Le.normalize(),ci.crossVectors(i,Le)),ci.normalize(),Bn.crossVectors(Le,ci),n[0]=ci.x,n[4]=Bn.x,n[8]=Le.x,n[1]=ci.y,n[5]=Bn.y,n[9]=Le.y,n[2]=ci.z,n[6]=Bn.z,n[10]=Le.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,o=i[0],r=i[4],c=i[8],l=i[12],u=i[1],f=i[5],p=i[9],_=i[13],v=i[2],m=i[6],d=i[10],h=i[14],x=i[3],g=i[7],y=i[11],E=i[15],A=n[0],b=n[4],D=n[8],M=n[12],S=n[1],N=n[5],I=n[9],V=n[13],L=n[2],z=n[6],G=n[10],W=n[14],$=n[3],K=n[7],J=n[11],it=n[15];return a[0]=o*A+r*S+c*L+l*$,a[4]=o*b+r*N+c*z+l*K,a[8]=o*D+r*I+c*G+l*J,a[12]=o*M+r*V+c*W+l*it,a[1]=u*A+f*S+p*L+_*$,a[5]=u*b+f*N+p*z+_*K,a[9]=u*D+f*I+p*G+_*J,a[13]=u*M+f*V+p*W+_*it,a[2]=v*A+m*S+d*L+h*$,a[6]=v*b+m*N+d*z+h*K,a[10]=v*D+m*I+d*G+h*J,a[14]=v*M+m*V+d*W+h*it,a[3]=x*A+g*S+y*L+E*$,a[7]=x*b+g*N+y*z+E*K,a[11]=x*D+g*I+y*G+E*J,a[15]=x*M+g*V+y*W+E*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],a=t[12],o=t[1],r=t[5],c=t[9],l=t[13],u=t[2],f=t[6],p=t[10],_=t[14],v=t[3],m=t[7],d=t[11],h=t[15];return v*(+a*c*f-n*l*f-a*r*p+i*l*p+n*r*_-i*c*_)+m*(+e*c*_-e*l*p+a*o*p-n*o*_+n*l*u-a*c*u)+d*(+e*l*f-e*r*_-a*o*f+i*o*_+a*r*u-i*l*u)+h*(-n*r*u-e*c*f+e*r*p+n*o*f-i*o*p+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],u=t[8],f=t[9],p=t[10],_=t[11],v=t[12],m=t[13],d=t[14],h=t[15],x=f*d*l-m*p*l+m*c*_-r*d*_-f*c*h+r*p*h,g=v*p*l-u*d*l-v*c*_+o*d*_+u*c*h-o*p*h,y=u*m*l-v*f*l+v*r*_-o*m*_-u*r*h+o*f*h,E=v*f*c-u*m*c-v*r*p+o*m*p+u*r*d-o*f*d,A=e*x+i*g+n*y+a*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=x*b,t[1]=(m*p*a-f*d*a-m*n*_+i*d*_+f*n*h-i*p*h)*b,t[2]=(r*d*a-m*c*a+m*n*l-i*d*l-r*n*h+i*c*h)*b,t[3]=(f*c*a-r*p*a-f*n*l+i*p*l+r*n*_-i*c*_)*b,t[4]=g*b,t[5]=(u*d*a-v*p*a+v*n*_-e*d*_-u*n*h+e*p*h)*b,t[6]=(v*c*a-o*d*a-v*n*l+e*d*l+o*n*h-e*c*h)*b,t[7]=(o*p*a-u*c*a+u*n*l-e*p*l-o*n*_+e*c*_)*b,t[8]=y*b,t[9]=(v*f*a-u*m*a-v*i*_+e*m*_+u*i*h-e*f*h)*b,t[10]=(o*m*a-v*r*a+v*i*l-e*m*l-o*i*h+e*r*h)*b,t[11]=(u*r*a-o*f*a-u*i*l+e*f*l+o*i*_-e*r*_)*b,t[12]=E*b,t[13]=(u*m*n-v*f*n+v*i*p-e*m*p-u*i*d+e*f*d)*b,t[14]=(v*r*n-o*m*n-v*i*c+e*m*c+o*i*d-e*r*d)*b,t[15]=(o*f*n-u*r*n+u*i*c-e*f*c-o*i*p+e*r*p)*b,this}scale(t){const e=this.elements,i=t.x,n=t.y,a=t.z;return e[0]*=i,e[4]*=n,e[8]*=a,e[1]*=i,e[5]*=n,e[9]*=a,e[2]*=i,e[6]*=n,e[10]*=a,e[3]*=i,e[7]*=n,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),a=1-i,o=t.x,r=t.y,c=t.z,l=a*o,u=a*r;return this.set(l*o+i,l*r-n*c,l*c+n*r,0,l*r+n*c,u*r+i,u*c-n*o,0,l*c-n*r,u*c+n*o,a*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,a,o){return this.set(1,i,a,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,a=e._x,o=e._y,r=e._z,c=e._w,l=a+a,u=o+o,f=r+r,p=a*l,_=a*u,v=a*f,m=o*u,d=o*f,h=r*f,x=c*l,g=c*u,y=c*f,E=i.x,A=i.y,b=i.z;return n[0]=(1-(m+h))*E,n[1]=(_+y)*E,n[2]=(v-g)*E,n[3]=0,n[4]=(_-y)*A,n[5]=(1-(p+h))*A,n[6]=(d+x)*A,n[7]=0,n[8]=(v+g)*b,n[9]=(d-x)*b,n[10]=(1-(p+m))*b,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let a=Wi.set(n[0],n[1],n[2]).length();const o=Wi.set(n[4],n[5],n[6]).length(),r=Wi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),t.x=n[12],t.y=n[13],t.z=n[14],He.copy(this);const l=1/a,u=1/o,f=1/r;return He.elements[0]*=l,He.elements[1]*=l,He.elements[2]*=l,He.elements[4]*=u,He.elements[5]*=u,He.elements[6]*=u,He.elements[8]*=f,He.elements[9]*=f,He.elements[10]*=f,e.setFromRotationMatrix(He),i.x=a,i.y=o,i.z=r,this}makePerspective(t,e,i,n,a,o,r=si){const c=this.elements,l=2*a/(e-t),u=2*a/(i-n),f=(e+t)/(e-t),p=(i+n)/(i-n);let _,v;if(r===si)_=-(o+a)/(o-a),v=-2*o*a/(o-a);else if(r===cs)_=-o/(o-a),v=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,a,o,r=si){const c=this.elements,l=1/(e-t),u=1/(i-n),f=1/(o-a),p=(e+t)*l,_=(i+n)*u;let v,m;if(r===si)v=(o+a)*f,m=-2*f;else if(r===cs)v=a*f,m=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-_,c[2]=0,c[6]=0,c[10]=m,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Wi=new k,He=new he,Fc=new k(0,0,0),Bc=new k(1,1,1),ci=new k,Bn=new k,Le=new k,wr=new he,Pr=new Ii;class vs{constructor(t=0,e=0,i=0,n=vs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,a=n[0],o=n[4],r=n[8],c=n[1],l=n[5],u=n[9],f=n[2],p=n[6],_=n[10];switch(e){case"XYZ":this._y=Math.asin(Se(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(r,_),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Se(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,_),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(r,_));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return wr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wr,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pr.setFromEuler(this),this.setFromQuaternion(Pr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vs.DEFAULT_ORDER="XYZ";class ba{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gc=0;const Cr=new k,Yi=new Ii,Qe=new he,Gn=new k,_n=new k,Hc=new k,kc=new Ii,Rr=new k(1,0,0),Lr=new k(0,1,0),Ir=new k(0,0,1),Vc={type:"added"},Wc={type:"removed"};class xe extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new k,e=new vs,i=new Ii,n=new k(1,1,1);function a(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new he},normalMatrix:{value:new qt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(Rr,t)}rotateY(t){return this.rotateOnAxis(Lr,t)}rotateZ(t){return this.rotateOnAxis(Ir,t)}translateOnAxis(t,e){return Cr.copy(t).applyQuaternion(this.quaternion),this.position.add(Cr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rr,t)}translateY(t){return this.translateOnAxis(Lr,t)}translateZ(t){return this.translateOnAxis(Ir,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Gn.copy(t):Gn.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),_n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(_n,Gn,this.up):Qe.lookAt(Gn,_n,this.up),this.quaternion.setFromRotationMatrix(Qe),n&&(Qe.extractRotation(n.matrixWorld),Yi.setFromRotationMatrix(Qe),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Vc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,t,Hc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,kc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const a=e[i];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++){const r=n[a];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];a(t.shapes,f)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(a(t.materials,this.material[c]));n.material=r}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let r=0;r<this.children.length;r++)n.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];n.animations.push(a(t.animations,c))}}if(e){const r=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),p=o(t.skeletons),_=o(t.animations),v=o(t.nodes);r.length>0&&(i.geometries=r),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),_.length>0&&(i.animations=_),v.length>0&&(i.nodes=v)}return i.object=n,i;function o(r){const c=[];for(const l in r){const u=r[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}xe.DEFAULT_UP=new k(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ke=new k,ti=new k,Gs=new k,ei=new k,Xi=new k,$i=new k,Dr=new k,Hs=new k,ks=new k,Vs=new k;let Hn=!1;class Ve{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),ke.subVectors(t,e),n.cross(ke);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,e,i,n,a){ke.subVectors(n,e),ti.subVectors(i,e),Gs.subVectors(t,e);const o=ke.dot(ke),r=ke.dot(ti),c=ke.dot(Gs),l=ti.dot(ti),u=ti.dot(Gs),f=o*l-r*r;if(f===0)return a.set(0,0,0),null;const p=1/f,_=(l*c-r*u)*p,v=(o*u-r*c)*p;return a.set(1-_-v,v,_)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(t,e,i,n,a,o,r,c){return Hn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hn=!0),this.getInterpolation(t,e,i,n,a,o,r,c)}static getInterpolation(t,e,i,n,a,o,r,c){return this.getBarycoord(t,e,i,n,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,ei.x),c.addScaledVector(o,ei.y),c.addScaledVector(r,ei.z),c)}static isFrontFacing(t,e,i,n){return ke.subVectors(i,e),ti.subVectors(t,e),ke.cross(ti).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ke.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),ke.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,a){return Hn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hn=!0),Ve.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}getInterpolation(t,e,i,n,a){return Ve.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,a=this.c;let o,r;Xi.subVectors(n,i),$i.subVectors(a,i),Hs.subVectors(t,i);const c=Xi.dot(Hs),l=$i.dot(Hs);if(c<=0&&l<=0)return e.copy(i);ks.subVectors(t,n);const u=Xi.dot(ks),f=$i.dot(ks);if(u>=0&&f<=u)return e.copy(n);const p=c*f-u*l;if(p<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Xi,o);Vs.subVectors(t,a);const _=Xi.dot(Vs),v=$i.dot(Vs);if(v>=0&&_<=v)return e.copy(a);const m=_*l-c*v;if(m<=0&&l>=0&&v<=0)return r=l/(l-v),e.copy(i).addScaledVector($i,r);const d=u*v-_*f;if(d<=0&&f-u>=0&&_-v>=0)return Dr.subVectors(a,n),r=(f-u)/(f-u+(_-v)),e.copy(n).addScaledVector(Dr,r);const h=1/(d+m+p);return o=m*h,r=p*h,e.copy(i).addScaledVector(Xi,o).addScaledVector($i,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const zo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},kn={h:0,s:0,l:0};function Ws(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Qt.workingColorSpace){if(t=Cc(t,1),e=Se(e,0,1),i=Se(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,o=2*i-a;this.r=Ws(o,a,t+1/3),this.g=Ws(o,a,t),this.b=Ws(o,a,t-1/3)}return Qt.toWorkingColorSpace(this,n),this}setStyle(t,e=ge){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=n[1],r=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){const i=zo[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return Qt.fromWorkingColorSpace(ye.copy(this),t),Math.round(Se(ye.r*255,0,255))*65536+Math.round(Se(ye.g*255,0,255))*256+Math.round(Se(ye.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(ye.copy(this),e);const i=ye.r,n=ye.g,a=ye.b,o=Math.max(i,n,a),r=Math.min(i,n,a);let c,l;const u=(r+o)/2;if(r===o)c=0,l=0;else{const f=o-r;switch(l=u<=.5?f/(o+r):f/(2-o-r),o){case i:c=(n-a)/f+(n<a?6:0);break;case n:c=(a-i)/f+2;break;case a:c=(i-n)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=ge){Qt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,i=ye.g,n=ye.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(kn);const i=Rs(hi.h,kn.h,e),n=Rs(hi.s,kn.s,e),a=Rs(hi.l,kn.l,e);return this.setHSL(i,n,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*n,this.g=a[1]*e+a[4]*i+a[7]*n,this.b=a[2]*e+a[5]*i+a[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Jt;Jt.NAMES=zo;let Yc=0;class Rn extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=on,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ra,this.blendDst=oa,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==on&&(i.blending=this.blending),this.side!==vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ra&&(i.blendSrc=this.blendSrc),this.blendDst!==oa&&(i.blendDst=this.blendDst),this.blendEquation!==Ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yr&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const o=[];for(const r in a){const c=a[r];delete c.metadata,o.push(c)}return o}if(e){const a=n(t.textures),o=n(t.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ds extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new k,Vn=new Ut;class qe{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=xr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Vn.fromBufferAttribute(this,e),Vn.applyMatrix3(t),this.setXY(e,Vn.x,Vn.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=mn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),n=be(n,this.array),a=be(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xr&&(t.usage=this.usage),t}}class Fo extends qe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Bo extends qe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Me extends qe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Xc=0;const Ue=new he,Ys=new xe,qi=new k,Ie=new Cn,yn=new Cn,pe=new k;class Ke extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Do(t)?Bo:Fo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new qt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,i){return Ue.makeTranslation(t,e,i),this.applyMatrix4(Ue),this}scale(t,e,i){return Ue.makeScale(t,e,i),this.applyMatrix4(Ue),this}lookAt(t){return Ys.lookAt(t),Ys.updateMatrix(),this.applyMatrix4(Ys.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const a=e[i];Ie.setFromBufferAttribute(a),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ta);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(t){const i=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const r=e[a];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(pe.addVectors(Ie.min,yn.min),Ie.expandByPoint(pe),pe.addVectors(Ie.max,yn.max),Ie.expandByPoint(pe)):(Ie.expandByPoint(yn.min),Ie.expandByPoint(yn.max))}Ie.getCenter(i);let n=0;for(let a=0,o=t.count;a<o;a++)pe.fromBufferAttribute(t,a),n=Math.max(n,i.distanceToSquared(pe));if(e)for(let a=0,o=e.length;a<o;a++){const r=e[a],c=this.morphTargetsRelative;for(let l=0,u=r.count;l<u;l++)pe.fromBufferAttribute(r,l),c&&(qi.fromBufferAttribute(t,l),pe.add(qi)),n=Math.max(n,i.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,a=e.normal.array,o=e.uv.array,r=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*r),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let S=0;S<r;S++)l[S]=new k,u[S]=new k;const f=new k,p=new k,_=new k,v=new Ut,m=new Ut,d=new Ut,h=new k,x=new k;function g(S,N,I){f.fromArray(n,S*3),p.fromArray(n,N*3),_.fromArray(n,I*3),v.fromArray(o,S*2),m.fromArray(o,N*2),d.fromArray(o,I*2),p.sub(f),_.sub(f),m.sub(v),d.sub(v);const V=1/(m.x*d.y-d.x*m.y);isFinite(V)&&(h.copy(p).multiplyScalar(d.y).addScaledVector(_,-m.y).multiplyScalar(V),x.copy(_).multiplyScalar(m.x).addScaledVector(p,-d.x).multiplyScalar(V),l[S].add(h),l[N].add(h),l[I].add(h),u[S].add(x),u[N].add(x),u[I].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let S=0,N=y.length;S<N;++S){const I=y[S],V=I.start,L=I.count;for(let z=V,G=V+L;z<G;z+=3)g(i[z+0],i[z+1],i[z+2])}const E=new k,A=new k,b=new k,D=new k;function M(S){b.fromArray(a,S*3),D.copy(b);const N=l[S];E.copy(N),E.sub(b.multiplyScalar(b.dot(N))).normalize(),A.crossVectors(D,N);const V=A.dot(u[S])<0?-1:1;c[S*4]=E.x,c[S*4+1]=E.y,c[S*4+2]=E.z,c[S*4+3]=V}for(let S=0,N=y.length;S<N;++S){const I=y[S],V=I.start,L=I.count;for(let z=V,G=V+L;z<G;z+=3)M(i[z+0]),M(i[z+1]),M(i[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,_=i.count;p<_;p++)i.setXYZ(p,0,0,0);const n=new k,a=new k,o=new k,r=new k,c=new k,l=new k,u=new k,f=new k;if(t)for(let p=0,_=t.count;p<_;p+=3){const v=t.getX(p+0),m=t.getX(p+1),d=t.getX(p+2);n.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),o.fromBufferAttribute(e,d),u.subVectors(o,a),f.subVectors(n,a),u.cross(f),r.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),l.fromBufferAttribute(i,d),r.add(u),c.add(u),l.add(u),i.setXYZ(v,r.x,r.y,r.z),i.setXYZ(m,c.x,c.y,c.z),i.setXYZ(d,l.x,l.y,l.z)}else for(let p=0,_=e.count;p<_;p+=3)n.fromBufferAttribute(e,p+0),a.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,a),f.subVectors(n,a),u.cross(f),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(r,c){const l=r.array,u=r.itemSize,f=r.normalized,p=new l.constructor(c.length*u);let _=0,v=0;for(let m=0,d=c.length;m<d;m++){r.isInterleavedBufferAttribute?_=c[m]*r.data.stride+r.offset:_=c[m]*u;for(let h=0;h<u;h++)p[v++]=l[_++]}return new qe(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ke,i=this.index.array,n=this.attributes;for(const r in n){const c=n[r],l=t(c,i);e.setAttribute(r,l)}const a=this.morphAttributes;for(const r in a){const c=[],l=a[r];for(let u=0,f=l.length;u<f;u++){const p=l[u],_=t(p,i);c.push(_)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,c=o.length;r<c;r++){const l=o[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const n={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,p=l.length;f<p;f++){const _=l[f];u.push(_.toJSON(t.data))}u.length>0&&(n[c]=u,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const l in n){const u=n[l];this.setAttribute(l,u.clone(e))}const a=t.morphAttributes;for(const l in a){const u=[],f=a[l];for(let p=0,_=f.length;p<_;p++)u.push(f[p].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Or=new he,Ti=new Sa,Wn=new Ta,Nr=new k,Ki=new k,Zi=new k,ji=new k,Xs=new k,Yn=new k,Xn=new Ut,$n=new Ut,qn=new Ut,Ur=new k,zr=new k,Fr=new k,Kn=new k,Zn=new k;class te extends xe{constructor(t=new Ke,e=new ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=n.length;a<o;a++){const r=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const r=this.morphTargetInfluences;if(a&&r){Yn.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=r[c],f=a[c];u!==0&&(Xs.fromBufferAttribute(f,t),o?Yn.addScaledVector(Xs,u):Yn.addScaledVector(Xs.sub(e),u))}e.add(Yn)}return e}raycast(t,e){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wn.copy(i.boundingSphere),Wn.applyMatrix4(a),Ti.copy(t.ray).recast(t.near),!(Wn.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Wn,Nr)===null||Ti.origin.distanceToSquared(Nr)>(t.far-t.near)**2))&&(Or.copy(a).invert(),Ti.copy(t.ray).applyMatrix4(Or),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,i){let n;const a=this.geometry,o=this.material,r=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,p=a.groups,_=a.drawRange;if(r!==null)if(Array.isArray(o))for(let v=0,m=p.length;v<m;v++){const d=p[v],h=o[d.materialIndex],x=Math.max(d.start,_.start),g=Math.min(r.count,Math.min(d.start+d.count,_.start+_.count));for(let y=x,E=g;y<E;y+=3){const A=r.getX(y),b=r.getX(y+1),D=r.getX(y+2);n=jn(this,h,t,i,l,u,f,A,b,D),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=d.materialIndex,e.push(n))}}else{const v=Math.max(0,_.start),m=Math.min(r.count,_.start+_.count);for(let d=v,h=m;d<h;d+=3){const x=r.getX(d),g=r.getX(d+1),y=r.getX(d+2);n=jn(this,o,t,i,l,u,f,x,g,y),n&&(n.faceIndex=Math.floor(d/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,m=p.length;v<m;v++){const d=p[v],h=o[d.materialIndex],x=Math.max(d.start,_.start),g=Math.min(c.count,Math.min(d.start+d.count,_.start+_.count));for(let y=x,E=g;y<E;y+=3){const A=y,b=y+1,D=y+2;n=jn(this,h,t,i,l,u,f,A,b,D),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=d.materialIndex,e.push(n))}}else{const v=Math.max(0,_.start),m=Math.min(c.count,_.start+_.count);for(let d=v,h=m;d<h;d+=3){const x=d,g=d+1,y=d+2;n=jn(this,o,t,i,l,u,f,x,g,y),n&&(n.faceIndex=Math.floor(d/3),e.push(n))}}}}function $c(s,t,e,i,n,a,o,r){let c;if(t.side===Pe?c=i.intersectTriangle(o,a,n,!0,r):c=i.intersectTriangle(n,a,o,t.side===vi,r),c===null)return null;Zn.copy(r),Zn.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Zn);return l<e.near||l>e.far?null:{distance:l,point:Zn.clone(),object:s}}function jn(s,t,e,i,n,a,o,r,c,l){s.getVertexPosition(r,Ki),s.getVertexPosition(c,Zi),s.getVertexPosition(l,ji);const u=$c(s,t,e,i,Ki,Zi,ji,Kn);if(u){n&&(Xn.fromBufferAttribute(n,r),$n.fromBufferAttribute(n,c),qn.fromBufferAttribute(n,l),u.uv=Ve.getInterpolation(Kn,Ki,Zi,ji,Xn,$n,qn,new Ut)),a&&(Xn.fromBufferAttribute(a,r),$n.fromBufferAttribute(a,c),qn.fromBufferAttribute(a,l),u.uv1=Ve.getInterpolation(Kn,Ki,Zi,ji,Xn,$n,qn,new Ut),u.uv2=u.uv1),o&&(Ur.fromBufferAttribute(o,r),zr.fromBufferAttribute(o,c),Fr.fromBufferAttribute(o,l),u.normal=Ve.getInterpolation(Kn,Ki,Zi,ji,Ur,zr,Fr,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:r,b:c,c:l,normal:new k,materialIndex:0};Ve.getNormal(Ki,Zi,ji,f.normal),u.face=f}return u}class we extends Ke{constructor(t=1,e=1,i=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:a,depthSegments:o};const r=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const c=[],l=[],u=[],f=[];let p=0,_=0;v("z","y","x",-1,-1,i,e,t,o,a,0),v("z","y","x",1,-1,i,e,-t,o,a,1),v("x","z","y",1,1,t,i,e,n,o,2),v("x","z","y",1,-1,t,i,-e,n,o,3),v("x","y","z",1,-1,t,e,i,n,a,4),v("x","y","z",-1,-1,t,e,-i,n,a,5),this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(f,2));function v(m,d,h,x,g,y,E,A,b,D,M){const S=y/b,N=E/D,I=y/2,V=E/2,L=A/2,z=b+1,G=D+1;let W=0,$=0;const K=new k;for(let J=0;J<G;J++){const it=J*N-V;for(let nt=0;nt<z;nt++){const Z=nt*S-I;K[m]=Z*x,K[d]=it*g,K[h]=L,l.push(K.x,K.y,K.z),K[m]=0,K[d]=0,K[h]=A>0?1:-1,u.push(K.x,K.y,K.z),f.push(nt/b),f.push(1-J/D),W+=1}}for(let J=0;J<D;J++)for(let it=0;it<b;it++){const nt=p+it+z*J,Z=p+it+z*(J+1),C=p+(it+1)+z*(J+1),F=p+(it+1)+z*J;c.push(nt,Z,F),c.push(Z,C,F),$+=6}r.addGroup(_,$,M),_+=$,p+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function un(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ee(s){const t={};for(let e=0;e<s.length;e++){const i=un(s[e]);for(const n in i)t[n]=i[n]}return t}function qc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Go(s){return s.getRenderTarget()===null?s.outputColorSpace:Qt.workingColorSpace}const Kc={clone:un,merge:Ee};var Zc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zc,this.fragmentShader=jc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=un(t.uniforms),this.uniformsGroups=qc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ho extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fe extends Ho{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ns*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;a+=o.offsetX*n/c,e-=o.offsetY*i/l,n*=o.width/c,i*=o.height/l}const r=this.filmOffset;r!==0&&(a+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ji=-90,Qi=1;class Jc extends xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Fe(Ji,Qi,t,e);n.layers=this.layers,this.add(n);const a=new Fe(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const o=new Fe(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const r=new Fe(Ji,Qi,t,e);r.layers=this.layers,this.add(r);const c=new Fe(Ji,Qi,t,e);c.layers=this.layers,this.add(c);const l=new Fe(Ji,Qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,a,o,r,c]=e;for(const l of e)this.remove(l);if(t===si)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===cs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,o,r,c,l,u]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,a),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,r),t.setRenderTarget(i,3,n),t.render(e,c),t.setRenderTarget(i,4,n),t.render(e,l),i.texture.generateMipmaps=m,t.setRenderTarget(i,5,n),t.render(e,u),t.setRenderTarget(f,p,_),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class ko extends De{constructor(t,e,i,n,a,o,r,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:cn,super(t,e,i,n,a,o,r,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qc extends Li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(En("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ri?ge:Be),this.texture=new ko(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new we(5,5,5),a=new Di({name:"CubemapFromEquirect",uniforms:un(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pe,blending:pi});a.uniforms.tEquirect.value=e;const o=new te(n,a),r=e.minFilter;return e.minFilter===bn&&(e.minFilter=ze),new Jc(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(a)}}const $s=new k,th=new k,eh=new qt;class di{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=$s.subVectors(i,e).cross(th.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta($s),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||eh.getNormalMatrix(t),n=this.coplanarPoint($s).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Ta,Jn=new k;class Aa{constructor(t=new di,e=new di,i=new di,n=new di,a=new di,o=new di){this.planes=[t,e,i,n,a,o]}set(t,e,i,n,a,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(i),r[3].copy(n),r[4].copy(a),r[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=si){const i=this.planes,n=t.elements,a=n[0],o=n[1],r=n[2],c=n[3],l=n[4],u=n[5],f=n[6],p=n[7],_=n[8],v=n[9],m=n[10],d=n[11],h=n[12],x=n[13],g=n[14],y=n[15];if(i[0].setComponents(c-a,p-l,d-_,y-h).normalize(),i[1].setComponents(c+a,p+l,d+_,y+h).normalize(),i[2].setComponents(c+o,p+u,d+v,y+x).normalize(),i[3].setComponents(c-o,p-u,d-v,y-x).normalize(),i[4].setComponents(c-r,p-f,d-m,y-g).normalize(),e===si)i[5].setComponents(c+r,p+f,d+m,y+g).normalize();else if(e===cs)i[5].setComponents(r,f,m,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Jn.x=n.normal.x>0?t.max.x:t.min.x,Jn.y=n.normal.y>0?t.max.y:t.min.y,Jn.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Jn)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vo(){let s=null,t=!1,e=null,i=null;function n(a,o){e(a,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function ih(s,t){const e=t.isWebGL2,i=new WeakMap;function n(l,u){const f=l.array,p=l.usage,_=f.byteLength,v=s.createBuffer();s.bindBuffer(u,v),s.bufferData(u,f,p),l.onUploadCallback();let m;if(f instanceof Float32Array)m=s.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)m=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)m=s.SHORT;else if(f instanceof Uint32Array)m=s.UNSIGNED_INT;else if(f instanceof Int32Array)m=s.INT;else if(f instanceof Int8Array)m=s.BYTE;else if(f instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:_}}function a(l,u,f){const p=u.array,_=u._updateRange,v=u.updateRanges;if(s.bindBuffer(f,l),_.count===-1&&v.length===0&&s.bufferSubData(f,0,p),v.length!==0){for(let m=0,d=v.length;m<d;m++){const h=v[m];e?s.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p,h.start,h.count):s.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}_.count!==-1&&(e?s.bufferSubData(f,_.offset*p.BYTES_PER_ELEMENT,p,_.offset,_.count):s.bufferSubData(f,_.offset*p.BYTES_PER_ELEMENT,p.subarray(_.offset,_.offset+_.count)),_.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(s.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const p=i.get(l);(!p||p.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);if(f===void 0)i.set(l,n(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(f.buffer,l,u),f.version=l.version}}return{get:o,remove:r,update:c}}class wa extends Ke{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const a=t/2,o=e/2,r=Math.floor(i),c=Math.floor(n),l=r+1,u=c+1,f=t/r,p=e/c,_=[],v=[],m=[],d=[];for(let h=0;h<u;h++){const x=h*p-o;for(let g=0;g<l;g++){const y=g*f-a;v.push(y,-x,0),m.push(0,0,1),d.push(g/r),d.push(1-h/c)}}for(let h=0;h<c;h++)for(let x=0;x<r;x++){const g=x+l*h,y=x+l*(h+1),E=x+1+l*(h+1),A=x+1+l*h;_.push(g,y,A),_.push(y,E,A)}this.setIndex(_),this.setAttribute("position",new Me(v,3)),this.setAttribute("normal",new Me(m,3)),this.setAttribute("uv",new Me(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wa(t.width,t.height,t.widthSegments,t.heightSegments)}}var nh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sh=`#ifdef USE_ALPHAHASH
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
#endif`,ah=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ch=`#ifdef USE_AOMAP
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
#endif`,hh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dh=`#ifdef USE_BATCHING
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
#endif`,uh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ph=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gh=`#ifdef USE_IRIDESCENCE
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
#endif`,vh=`#ifdef USE_BUMPMAP
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
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ah=`#define PI 3.141592653589793
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
#endif`,Ph=`vec3 transformedNormal = objectNormal;
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
#endif`,Ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ih=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Oh=`
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
}`,Nh=`#ifdef USE_ENVMAP
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
#endif`,Uh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zh=`#ifdef USE_ENVMAP
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
#endif`,Fh=`#ifdef USE_ENVMAP
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
#endif`,Gh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wh=`#ifdef USE_GRADIENTMAP
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
}`,Yh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$h=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kh=`uniform bool receiveShadow;
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
#endif`,jh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ed=`PhysicalMaterial material;
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
#endif`,id=`struct PhysicalMaterial {
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
}`,nd=`
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
#endif`,sd=`#if defined( RE_IndirectDiffuse )
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
#endif`,ad=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,od=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ld=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ud=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fd=`#if defined( USE_POINTS_UV )
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
#endif`,pd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,md=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vd=`#ifdef USE_MORPHNORMALS
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
#endif`,_d=`#ifdef USE_MORPHTARGETS
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
#endif`,yd=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,Md=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
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
#endif`,Ad=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ld=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Od=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ud=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,kd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vd=`#ifdef USE_SKINNING
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
#endif`,Wd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yd=`#ifdef USE_SKINNING
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
#endif`,Xd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kd=`#ifndef saturate
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
#endif`,jd=`#ifdef USE_TRANSMISSION
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
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nu=`uniform sampler2D t2D;
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
}`,su=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,au=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ru=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ou=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lu=`#include <common>
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
}`,cu=`#if DEPTH_PACKING == 3200
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
}`,hu=`#define DISTANCE
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
}`,du=`#define DISTANCE
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
}`,uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pu=`uniform float scale;
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
}`,mu=`uniform vec3 diffuse;
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
}`,gu=`#include <common>
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
}`,vu=`uniform vec3 diffuse;
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
}`,_u=`#define LAMBERT
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
}`,yu=`#define LAMBERT
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
}`,Mu=`#define MATCAP
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
}`,Tu=`#define NORMAL
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
}`,Su=`#define PHONG
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
}`,Au=`#define STANDARD
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
}`,Pu=`#define TOON
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
}`,Cu=`#define TOON
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
}`,Ru=`uniform float size;
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
}`,Lu=`uniform vec3 diffuse;
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
}`,Iu=`#include <common>
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
}`,Du=`uniform vec3 color;
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
}`,Ou=`uniform float rotation;
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
}`,Nu=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:nh,alphahash_pars_fragment:sh,alphamap_fragment:ah,alphamap_pars_fragment:rh,alphatest_fragment:oh,alphatest_pars_fragment:lh,aomap_fragment:ch,aomap_pars_fragment:hh,batching_pars_vertex:dh,batching_vertex:uh,begin_vertex:fh,beginnormal_vertex:ph,bsdfs:mh,iridescence_fragment:gh,bumpmap_pars_fragment:vh,clipping_planes_fragment:_h,clipping_planes_pars_fragment:yh,clipping_planes_pars_vertex:xh,clipping_planes_vertex:Mh,color_fragment:Eh,color_pars_fragment:Th,color_pars_vertex:Sh,color_vertex:bh,common:Ah,cube_uv_reflection_fragment:wh,defaultnormal_vertex:Ph,displacementmap_pars_vertex:Ch,displacementmap_vertex:Rh,emissivemap_fragment:Lh,emissivemap_pars_fragment:Ih,colorspace_fragment:Dh,colorspace_pars_fragment:Oh,envmap_fragment:Nh,envmap_common_pars_fragment:Uh,envmap_pars_fragment:zh,envmap_pars_vertex:Fh,envmap_physical_pars_fragment:Zh,envmap_vertex:Bh,fog_vertex:Gh,fog_pars_vertex:Hh,fog_fragment:kh,fog_pars_fragment:Vh,gradientmap_pars_fragment:Wh,lightmap_fragment:Yh,lightmap_pars_fragment:Xh,lights_lambert_fragment:$h,lights_lambert_pars_fragment:qh,lights_pars_begin:Kh,lights_toon_fragment:jh,lights_toon_pars_fragment:Jh,lights_phong_fragment:Qh,lights_phong_pars_fragment:td,lights_physical_fragment:ed,lights_physical_pars_fragment:id,lights_fragment_begin:nd,lights_fragment_maps:sd,lights_fragment_end:ad,logdepthbuf_fragment:rd,logdepthbuf_pars_fragment:od,logdepthbuf_pars_vertex:ld,logdepthbuf_vertex:cd,map_fragment:hd,map_pars_fragment:dd,map_particle_fragment:ud,map_particle_pars_fragment:fd,metalnessmap_fragment:pd,metalnessmap_pars_fragment:md,morphcolor_vertex:gd,morphnormal_vertex:vd,morphtarget_pars_vertex:_d,morphtarget_vertex:yd,normal_fragment_begin:xd,normal_fragment_maps:Md,normal_pars_fragment:Ed,normal_pars_vertex:Td,normal_vertex:Sd,normalmap_pars_fragment:bd,clearcoat_normal_fragment_begin:Ad,clearcoat_normal_fragment_maps:wd,clearcoat_pars_fragment:Pd,iridescence_pars_fragment:Cd,opaque_fragment:Rd,packing:Ld,premultiplied_alpha_fragment:Id,project_vertex:Dd,dithering_fragment:Od,dithering_pars_fragment:Nd,roughnessmap_fragment:Ud,roughnessmap_pars_fragment:zd,shadowmap_pars_fragment:Fd,shadowmap_pars_vertex:Bd,shadowmap_vertex:Gd,shadowmask_pars_fragment:Hd,skinbase_vertex:kd,skinning_pars_vertex:Vd,skinning_vertex:Wd,skinnormal_vertex:Yd,specularmap_fragment:Xd,specularmap_pars_fragment:$d,tonemapping_fragment:qd,tonemapping_pars_fragment:Kd,transmission_fragment:Zd,transmission_pars_fragment:jd,uv_pars_fragment:Jd,uv_pars_vertex:Qd,uv_vertex:tu,worldpos_vertex:eu,background_vert:iu,background_frag:nu,backgroundCube_vert:su,backgroundCube_frag:au,cube_vert:ru,cube_frag:ou,depth_vert:lu,depth_frag:cu,distanceRGBA_vert:hu,distanceRGBA_frag:du,equirect_vert:uu,equirect_frag:fu,linedashed_vert:pu,linedashed_frag:mu,meshbasic_vert:gu,meshbasic_frag:vu,meshlambert_vert:_u,meshlambert_frag:yu,meshmatcap_vert:xu,meshmatcap_frag:Mu,meshnormal_vert:Eu,meshnormal_frag:Tu,meshphong_vert:Su,meshphong_frag:bu,meshphysical_vert:Au,meshphysical_frag:wu,meshtoon_vert:Pu,meshtoon_frag:Cu,points_vert:Ru,points_frag:Lu,shadow_vert:Iu,shadow_frag:Du,sprite_vert:Ou,sprite_frag:Nu},vt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},$e={basic:{uniforms:Ee([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ee([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ee([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ee([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ee([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ee([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ee([vt.points,vt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ee([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ee([vt.common,vt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ee([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ee([vt.sprite,vt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Ee([vt.common,vt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Ee([vt.lights,vt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};$e.physical={uniforms:Ee([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Qn={r:0,b:0,g:0};function Uu(s,t,e,i,n,a,o){const r=new Jt(0);let c=a===!0?0:1,l,u,f=null,p=0,_=null;function v(d,h){let x=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=(h.backgroundBlurriness>0?e:t).get(g)),g===null?m(r,c):g&&g.isColor&&(m(g,1),x=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),g&&(g.isCubeTexture||g.mapping===ms)?(u===void 0&&(u=new te(new we(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:un($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Qt.getTransfer(g.colorSpace)!==ee,(f!==g||p!==g.version||_!==s.toneMapping)&&(u.material.needsUpdate=!0,f=g,p=g.version,_=s.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new te(new wa(2,2),new Di({name:"BackgroundMaterial",uniforms:un($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(g.colorSpace)!==ee,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||p!==g.version||_!==s.toneMapping)&&(l.material.needsUpdate=!0,f=g,p=g.version,_=s.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function m(d,h){d.getRGB(Qn,Go(s)),i.buffers.color.setClear(Qn.r,Qn.g,Qn.b,h,o)}return{getClearColor:function(){return r},setClearColor:function(d,h=1){r.set(d),c=h,m(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,m(r,c)},render:v}}function zu(s,t,e,i){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,r={},c=d(null);let l=c,u=!1;function f(L,z,G,W,$){let K=!1;if(o){const J=m(W,G,z);l!==J&&(l=J,_(l.object)),K=h(L,W,G,$),K&&x(L,W,G,$)}else{const J=z.wireframe===!0;(l.geometry!==W.id||l.program!==G.id||l.wireframe!==J)&&(l.geometry=W.id,l.program=G.id,l.wireframe=J,K=!0)}$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,D(L,z,G,W),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function p(){return i.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function _(L){return i.isWebGL2?s.bindVertexArray(L):a.bindVertexArrayOES(L)}function v(L){return i.isWebGL2?s.deleteVertexArray(L):a.deleteVertexArrayOES(L)}function m(L,z,G){const W=G.wireframe===!0;let $=r[L.id];$===void 0&&($={},r[L.id]=$);let K=$[z.id];K===void 0&&(K={},$[z.id]=K);let J=K[W];return J===void 0&&(J=d(p()),K[W]=J),J}function d(L){const z=[],G=[],W=[];for(let $=0;$<n;$++)z[$]=0,G[$]=0,W[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:G,attributeDivisors:W,object:L,attributes:{},index:null}}function h(L,z,G,W){const $=l.attributes,K=z.attributes;let J=0;const it=G.getAttributes();for(const nt in it)if(it[nt].location>=0){const C=$[nt];let F=K[nt];if(F===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(F=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(F=L.instanceColor)),C===void 0||C.attribute!==F||F&&C.data!==F.data)return!0;J++}return l.attributesNum!==J||l.index!==W}function x(L,z,G,W){const $={},K=z.attributes;let J=0;const it=G.getAttributes();for(const nt in it)if(it[nt].location>=0){let C=K[nt];C===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(C=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(C=L.instanceColor));const F={};F.attribute=C,C&&C.data&&(F.data=C.data),$[nt]=F,J++}l.attributes=$,l.attributesNum=J,l.index=W}function g(){const L=l.newAttributes;for(let z=0,G=L.length;z<G;z++)L[z]=0}function y(L){E(L,0)}function E(L,z){const G=l.newAttributes,W=l.enabledAttributes,$=l.attributeDivisors;G[L]=1,W[L]===0&&(s.enableVertexAttribArray(L),W[L]=1),$[L]!==z&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,z),$[L]=z)}function A(){const L=l.newAttributes,z=l.enabledAttributes;for(let G=0,W=z.length;G<W;G++)z[G]!==L[G]&&(s.disableVertexAttribArray(G),z[G]=0)}function b(L,z,G,W,$,K,J){J===!0?s.vertexAttribIPointer(L,z,G,$,K):s.vertexAttribPointer(L,z,G,W,$,K)}function D(L,z,G,W){if(i.isWebGL2===!1&&(L.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();const $=W.attributes,K=G.getAttributes(),J=z.defaultAttributeValues;for(const it in K){const nt=K[it];if(nt.location>=0){let Z=$[it];if(Z===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),Z!==void 0){const C=Z.normalized,F=Z.itemSize,q=e.get(Z);if(q===void 0)continue;const U=q.buffer,X=q.type,lt=q.bytesPerElement,ht=i.isWebGL2===!0&&(X===s.INT||X===s.UNSIGNED_INT||Z.gpuType===To);if(Z.isInterleavedBufferAttribute){const wt=Z.data,H=wt.stride,Lt=Z.offset;if(wt.isInstancedInterleavedBuffer){for(let mt=0;mt<nt.locationSize;mt++)E(nt.location+mt,wt.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let mt=0;mt<nt.locationSize;mt++)y(nt.location+mt);s.bindBuffer(s.ARRAY_BUFFER,U);for(let mt=0;mt<nt.locationSize;mt++)b(nt.location+mt,F/nt.locationSize,X,C,H*lt,(Lt+F/nt.locationSize*mt)*lt,ht)}else{if(Z.isInstancedBufferAttribute){for(let wt=0;wt<nt.locationSize;wt++)E(nt.location+wt,Z.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let wt=0;wt<nt.locationSize;wt++)y(nt.location+wt);s.bindBuffer(s.ARRAY_BUFFER,U);for(let wt=0;wt<nt.locationSize;wt++)b(nt.location+wt,F/nt.locationSize,X,C,F*lt,F/nt.locationSize*wt*lt,ht)}}else if(J!==void 0){const C=J[it];if(C!==void 0)switch(C.length){case 2:s.vertexAttrib2fv(nt.location,C);break;case 3:s.vertexAttrib3fv(nt.location,C);break;case 4:s.vertexAttrib4fv(nt.location,C);break;default:s.vertexAttrib1fv(nt.location,C)}}}}A()}function M(){I();for(const L in r){const z=r[L];for(const G in z){const W=z[G];for(const $ in W)v(W[$].object),delete W[$];delete z[G]}delete r[L]}}function S(L){if(r[L.id]===void 0)return;const z=r[L.id];for(const G in z){const W=z[G];for(const $ in W)v(W[$].object),delete W[$];delete z[G]}delete r[L.id]}function N(L){for(const z in r){const G=r[z];if(G[L.id]===void 0)continue;const W=G[L.id];for(const $ in W)v(W[$].object),delete W[$];delete G[L.id]}}function I(){V(),u=!0,l!==c&&(l=c,_(l.object))}function V(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:I,resetDefaultState:V,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:N,initAttributes:g,enableAttribute:y,disableUnusedAttributes:A}}function Fu(s,t,e,i){const n=i.isWebGL2;let a;function o(u){a=u}function r(u,f){s.drawArrays(a,u,f),e.update(f,a,1)}function c(u,f,p){if(p===0)return;let _,v;if(n)_=s,v="drawArraysInstanced";else if(_=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[v](a,u,f,p),e.update(f,a,p)}function l(u,f,p){if(p===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<p;v++)this.render(u[v],f[v]);else{_.multiDrawArraysWEBGL(a,u,0,f,0,p);let v=0;for(let m=0;m<p;m++)v+=f[m];e.update(v,a,1)}}this.setMode=o,this.render=r,this.renderInstances=c,this.renderMultiDraw=l}function Bu(s,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let r=e.precision!==void 0?e.precision:"highp";const c=a(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),d=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),h=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),g=p>0,y=o||t.has("OES_texture_float"),E=g&&y,A=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:n,getMaxPrecision:a,precision:r,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:d,maxVaryings:h,maxFragmentUniforms:x,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:A}}function Gu(s){const t=this;let e=null,i=0,n=!1,a=!1;const o=new di,r=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const _=f.length!==0||p||i!==0||n;return n=p,i=f.length,_},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){e=u(f,p,0)},this.setState=function(f,p,_){const v=f.clippingPlanes,m=f.clipIntersection,d=f.clipShadows,h=s.get(f);if(!n||v===null||v.length===0||a&&!d)a?u(null):l();else{const x=a?0:i,g=x*4;let y=h.clippingState||null;c.value=y,y=u(v,p,g,_);for(let E=0;E!==g;++E)y[E]=e[E];h.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,p,_,v){const m=f!==null?f.length:0;let d=null;if(m!==0){if(d=c.value,v!==!0||d===null){const h=_+m*4,x=p.matrixWorldInverse;r.getNormalMatrix(x),(d===null||d.length<h)&&(d=new Float32Array(h));for(let g=0,y=_;g!==m;++g,y+=4)o.copy(f[g]).applyMatrix4(x,r),o.normal.toArray(d,y),d[y+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,d}}function Hu(s){let t=new WeakMap;function e(o,r){return r===la?o.mapping=cn:r===ca&&(o.mapping=hn),o}function i(o){if(o&&o.isTexture){const r=o.mapping;if(r===la||r===ca)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Qc(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",n),e(l.texture,o.mapping)}else return null}}return o}function n(o){const r=o.target;r.removeEventListener("dispose",n);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class Wo extends Ho{constructor(t=-1,e=1,i=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-t,o=i+t,r=n+e,c=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,o=a+l*this.view.width,r-=u*this.view.offsetY,c=r-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,r,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const nn=4,Br=[.125,.215,.35,.446,.526,.582],wi=20,qs=new Wo,Gr=new Jt;let Ks=null,Zs=0,js=0;const bi=(1+Math.sqrt(5))/2,tn=1/bi,Hr=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,bi,tn),new k(0,bi,-tn),new k(tn,0,bi),new k(-tn,0,bi),new k(bi,tn,0),new k(-bi,tn,0)];class kr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Ks=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,n,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ks,Zs,js),t.scissorTest=!1,ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cn||t.mapping===hn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ks=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:An,format:Ye,colorSpace:ai,depthBuffer:!1},n=Vr(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vr(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ku(a)),this._blurMaterial=Vu(a,t,e)}return n}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,qs)}_sceneToCubeUV(t,e,i,n){const r=new Fe(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Gr),u.toneMapping=mi,u.autoClear=!1;const _=new ds({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),v=new te(new we,_);let m=!1;const d=t.background;d?d.isColor&&(_.color.copy(d),t.background=null,m=!0):(_.color.copy(Gr),m=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(r.up.set(0,c[h],0),r.lookAt(l[h],0,0)):x===1?(r.up.set(0,0,c[h]),r.lookAt(0,l[h],0)):(r.up.set(0,c[h],0),r.lookAt(0,0,l[h]));const g=this._cubeSize;ts(n,x*g,h>2?g:0,g,g),u.setRenderTarget(n),m&&u.render(v,r),u.render(t,r)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===cn||t.mapping===hn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yr()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wr());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],a),r=a.uniforms;r.envMap.value=t;const c=this._cubeSize;ts(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,qs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Hr[(n-1)%Hr.length];this._blur(t,n-1,n,a,o)}e.autoClear=i}_blur(t,e,i,n,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",a),this._halfBlur(o,t,i,i,n,"longitudinal",a)}_halfBlur(t,e,i,n,a,o,r){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new te(this._lodPlanes[n],l),p=l.uniforms,_=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*wi-1),m=a/v,d=isFinite(a)?1+Math.floor(u*m):wi;d>wi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${wi}`);const h=[];let x=0;for(let b=0;b<wi;++b){const D=b/m,M=Math.exp(-D*D/2);h.push(M),b===0?x+=M:b<d&&(x+=2*M)}for(let b=0;b<h.length;b++)h[b]=h[b]/x;p.envMap.value=t.texture,p.samples.value=d,p.weights.value=h,p.latitudinal.value=o==="latitudinal",r&&(p.poleAxis.value=r);const{_lodMax:g}=this;p.dTheta.value=v,p.mipInt.value=g-i;const y=this._sizeLods[n],E=3*y*(n>g-nn?n-g+nn:0),A=4*(this._cubeSize-y);ts(e,E,A,3*y,2*y),c.setRenderTarget(e),c.render(f,qs)}}function ku(s){const t=[],e=[],i=[];let n=s;const a=s-nn+1+Br.length;for(let o=0;o<a;o++){const r=Math.pow(2,n);e.push(r);let c=1/r;o>s-nn?c=Br[o-s+nn-1]:o===0&&(c=0),i.push(c);const l=1/(r-2),u=-l,f=1+l,p=[u,u,f,u,f,f,u,u,f,f,u,f],_=6,v=6,m=3,d=2,h=1,x=new Float32Array(m*v*_),g=new Float32Array(d*v*_),y=new Float32Array(h*v*_);for(let A=0;A<_;A++){const b=A%3*2/3-1,D=A>2?0:-1,M=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];x.set(M,m*v*A),g.set(p,d*v*A);const S=[A,A,A,A,A,A];y.set(S,h*v*A)}const E=new Ke;E.setAttribute("position",new qe(x,m)),E.setAttribute("uv",new qe(g,d)),E.setAttribute("faceIndex",new qe(y,h)),t.push(E),n>nn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Vr(s,t,e){const i=new Li(s,t,e);return i.texture.mapping=ms,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ts(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Vu(s,t,e){const i=new Float32Array(wi),n=new k(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Wr(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Yr(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Pa(){return`

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
	`}function Wu(s){let t=new WeakMap,e=null;function i(r){if(r&&r.isTexture){const c=r.mapping,l=c===la||c===ca,u=c===cn||c===hn;if(l||u)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let f=t.get(r);return e===null&&(e=new kr(s)),f=l?e.fromEquirectangular(r,f):e.fromCubemap(r,f),t.set(r,f),f.texture}else{if(t.has(r))return t.get(r).texture;{const f=r.image;if(l&&f&&f.height>0||u&&f&&n(f)){e===null&&(e=new kr(s));const p=l?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,p),r.addEventListener("dispose",a),p.texture}else return null}}}return r}function n(r){let c=0;const l=6;for(let u=0;u<l;u++)r[u]!==void 0&&c++;return c===l}function a(r){const c=r.target;c.removeEventListener("dispose",a);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Yu(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Xu(s,t,e,i){const n={},a=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const v in p.attributes)t.remove(p.attributes[v]);for(const v in p.morphAttributes){const m=p.morphAttributes[v];for(let d=0,h=m.length;d<h;d++)t.remove(m[d])}p.removeEventListener("dispose",o),delete n[p.id];const _=a.get(p);_&&(t.remove(_),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function r(f,p){return n[p.id]===!0||(p.addEventListener("dispose",o),n[p.id]=!0,e.memory.geometries++),p}function c(f){const p=f.attributes;for(const v in p)t.update(p[v],s.ARRAY_BUFFER);const _=f.morphAttributes;for(const v in _){const m=_[v];for(let d=0,h=m.length;d<h;d++)t.update(m[d],s.ARRAY_BUFFER)}}function l(f){const p=[],_=f.index,v=f.attributes.position;let m=0;if(_!==null){const x=_.array;m=_.version;for(let g=0,y=x.length;g<y;g+=3){const E=x[g+0],A=x[g+1],b=x[g+2];p.push(E,A,A,b,b,E)}}else if(v!==void 0){const x=v.array;m=v.version;for(let g=0,y=x.length/3-1;g<y;g+=3){const E=g+0,A=g+1,b=g+2;p.push(E,A,A,b,b,E)}}else return;const d=new(Do(p)?Bo:Fo)(p,1);d.version=m;const h=a.get(f);h&&t.remove(h),a.set(f,d)}function u(f){const p=a.get(f);if(p){const _=f.index;_!==null&&p.version<_.version&&l(f)}else l(f);return a.get(f)}return{get:r,update:c,getWireframeAttribute:u}}function $u(s,t,e,i){const n=i.isWebGL2;let a;function o(_){a=_}let r,c;function l(_){r=_.type,c=_.bytesPerElement}function u(_,v){s.drawElements(a,v,r,_*c),e.update(v,a,1)}function f(_,v,m){if(m===0)return;let d,h;if(n)d=s,h="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[h](a,v,r,_*c,m),e.update(v,a,m)}function p(_,v,m){if(m===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<m;h++)this.render(_[h]/c,v[h]);else{d.multiDrawElementsWEBGL(a,v,0,r,_,0,m);let h=0;for(let x=0;x<m;x++)h+=v[x];e.update(h,a,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=p}function qu(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,r){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=r*(a/3);break;case s.LINES:e.lines+=r*(a/2);break;case s.LINE_STRIP:e.lines+=r*(a-1);break;case s.LINE_LOOP:e.lines+=r*a;break;case s.POINTS:e.points+=r*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Ku(s,t){return s[0]-t[0]}function Zu(s,t){return Math.abs(t[1])-Math.abs(s[1])}function ju(s,t,e){const i={},n=new Float32Array(8),a=new WeakMap,o=new me,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function c(l,u,f){const p=l.morphTargetInfluences;if(t.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=v!==void 0?v.length:0;let d=a.get(u);if(d===void 0||d.count!==m){let z=function(){V.dispose(),a.delete(u),u.removeEventListener("dispose",z)};var _=z;d!==void 0&&d.texture.dispose();const g=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let M=0;g===!0&&(M=1),y===!0&&(M=2),E===!0&&(M=3);let S=u.attributes.position.count*M,N=1;S>t.maxTextureSize&&(N=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const I=new Float32Array(S*N*4*m),V=new Uo(I,S,N,m);V.type=fi,V.needsUpdate=!0;const L=M*4;for(let G=0;G<m;G++){const W=A[G],$=b[G],K=D[G],J=S*N*4*G;for(let it=0;it<W.count;it++){const nt=it*L;g===!0&&(o.fromBufferAttribute(W,it),I[J+nt+0]=o.x,I[J+nt+1]=o.y,I[J+nt+2]=o.z,I[J+nt+3]=0),y===!0&&(o.fromBufferAttribute($,it),I[J+nt+4]=o.x,I[J+nt+5]=o.y,I[J+nt+6]=o.z,I[J+nt+7]=0),E===!0&&(o.fromBufferAttribute(K,it),I[J+nt+8]=o.x,I[J+nt+9]=o.y,I[J+nt+10]=o.z,I[J+nt+11]=K.itemSize===4?o.w:1)}}d={count:m,texture:V,size:new Ut(S,N)},a.set(u,d),u.addEventListener("dispose",z)}let h=0;for(let g=0;g<p.length;g++)h+=p[g];const x=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(s,"morphTargetBaseInfluence",x),f.getUniforms().setValue(s,"morphTargetInfluences",p),f.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}else{const v=p===void 0?0:p.length;let m=i[u.id];if(m===void 0||m.length!==v){m=[];for(let y=0;y<v;y++)m[y]=[y,0];i[u.id]=m}for(let y=0;y<v;y++){const E=m[y];E[0]=y,E[1]=p[y]}m.sort(Zu);for(let y=0;y<8;y++)y<v&&m[y][1]?(r[y][0]=m[y][0],r[y][1]=m[y][1]):(r[y][0]=Number.MAX_SAFE_INTEGER,r[y][1]=0);r.sort(Ku);const d=u.morphAttributes.position,h=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const E=r[y],A=E[0],b=E[1];A!==Number.MAX_SAFE_INTEGER&&b?(d&&u.getAttribute("morphTarget"+y)!==d[A]&&u.setAttribute("morphTarget"+y,d[A]),h&&u.getAttribute("morphNormal"+y)!==h[A]&&u.setAttribute("morphNormal"+y,h[A]),n[y]=b,x+=b):(d&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),h&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),n[y]=0)}const g=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(s,"morphTargetBaseInfluence",g),f.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:c}}function Ju(s,t,e,i){let n=new WeakMap;function a(c){const l=i.render.frame,u=c.geometry,f=t.get(c,u);if(n.get(f)!==l&&(t.update(f),n.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),n.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;n.get(p)!==l&&(p.update(),n.set(p,l))}return f}function o(){n=new WeakMap}function r(c){const l=c.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:o}}class Yo extends De{constructor(t,e,i,n,a,o,r,c,l,u){if(u=u!==void 0?u:Ci,u!==Ci&&u!==dn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ci&&(i=ui),i===void 0&&u===dn&&(i=Pi),super(null,n,a,o,r,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Te,this.minFilter=c!==void 0?c:Te,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xo=new De,$o=new Yo(1,1);$o.compareFunction=Io;const qo=new Uo,Ko=new Uc,Zo=new ko,Xr=[],$r=[],qr=new Float32Array(16),Kr=new Float32Array(9),Zr=new Float32Array(4);function fn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let a=Xr[n];if(a===void 0&&(a=new Float32Array(n),Xr[n]=a),t!==0){i.toArray(a,0);for(let o=1,r=0;o!==t;++o)r+=e,s[o].toArray(a,r)}return a}function de(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function ue(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function _s(s,t){let e=$r[t];e===void 0&&(e=new Int32Array(t),$r[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Qu(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function tf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2fv(this.addr,t),ue(e,t)}}function ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;s.uniform3fv(this.addr,t),ue(e,t)}}function nf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4fv(this.addr,t),ue(e,t)}}function sf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(de(e,i))return;Zr.set(i),s.uniformMatrix2fv(this.addr,!1,Zr),ue(e,i)}}function af(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(de(e,i))return;Kr.set(i),s.uniformMatrix3fv(this.addr,!1,Kr),ue(e,i)}}function rf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(de(e,i))return;qr.set(i),s.uniformMatrix4fv(this.addr,!1,qr),ue(e,i)}}function of(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function lf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2iv(this.addr,t),ue(e,t)}}function cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;s.uniform3iv(this.addr,t),ue(e,t)}}function hf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4iv(this.addr,t),ue(e,t)}}function df(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2uiv(this.addr,t),ue(e,t)}}function ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;s.uniform3uiv(this.addr,t),ue(e,t)}}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4uiv(this.addr,t),ue(e,t)}}function mf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);const a=this.type===s.SAMPLER_2D_SHADOW?$o:Xo;e.setTexture2D(t||a,n)}function gf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Ko,n)}function vf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Zo,n)}function _f(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||qo,n)}function yf(s){switch(s){case 5126:return Qu;case 35664:return tf;case 35665:return ef;case 35666:return nf;case 35674:return sf;case 35675:return af;case 35676:return rf;case 5124:case 35670:return of;case 35667:case 35671:return lf;case 35668:case 35672:return cf;case 35669:case 35673:return hf;case 5125:return df;case 36294:return uf;case 36295:return ff;case 36296:return pf;case 35678:case 36198:case 36298:case 36306:case 35682:return mf;case 35679:case 36299:case 36307:return gf;case 35680:case 36300:case 36308:case 36293:return vf;case 36289:case 36303:case 36311:case 36292:return _f}}function xf(s,t){s.uniform1fv(this.addr,t)}function Mf(s,t){const e=fn(t,this.size,2);s.uniform2fv(this.addr,e)}function Ef(s,t){const e=fn(t,this.size,3);s.uniform3fv(this.addr,e)}function Tf(s,t){const e=fn(t,this.size,4);s.uniform4fv(this.addr,e)}function Sf(s,t){const e=fn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function bf(s,t){const e=fn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Af(s,t){const e=fn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function wf(s,t){s.uniform1iv(this.addr,t)}function Pf(s,t){s.uniform2iv(this.addr,t)}function Cf(s,t){s.uniform3iv(this.addr,t)}function Rf(s,t){s.uniform4iv(this.addr,t)}function Lf(s,t){s.uniform1uiv(this.addr,t)}function If(s,t){s.uniform2uiv(this.addr,t)}function Df(s,t){s.uniform3uiv(this.addr,t)}function Of(s,t){s.uniform4uiv(this.addr,t)}function Nf(s,t,e){const i=this.cache,n=t.length,a=_s(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||Xo,a[o])}function Uf(s,t,e){const i=this.cache,n=t.length,a=_s(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Ko,a[o])}function zf(s,t,e){const i=this.cache,n=t.length,a=_s(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Zo,a[o])}function Ff(s,t,e){const i=this.cache,n=t.length,a=_s(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||qo,a[o])}function Bf(s){switch(s){case 5126:return xf;case 35664:return Mf;case 35665:return Ef;case 35666:return Tf;case 35674:return Sf;case 35675:return bf;case 35676:return Af;case 5124:case 35670:return wf;case 35667:case 35671:return Pf;case 35668:case 35672:return Cf;case 35669:case 35673:return Rf;case 5125:return Lf;case 36294:return If;case 36295:return Df;case 36296:return Of;case 35678:case 36198:case 36298:case 36306:case 35682:return Nf;case 35679:case 36299:case 36307:return Uf;case 35680:case 36300:case 36308:case 36293:return zf;case 36289:case 36303:case 36311:case 36292:return Ff}}class Gf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yf(e.type)}}class Hf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bf(e.type)}}class kf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const r=n[a];r.setValue(t,e[r.id],i)}}}const Js=/(\w+)(\])?(\[|\.)?/g;function jr(s,t){s.seq.push(t),s.map[t.id]=t}function Vf(s,t,e){const i=s.name,n=i.length;for(Js.lastIndex=0;;){const a=Js.exec(i),o=Js.lastIndex;let r=a[1];const c=a[2]==="]",l=a[3];if(c&&(r=r|0),l===void 0||l==="["&&o+2===n){jr(e,l===void 0?new Gf(r,s,t):new Hf(r,s,t));break}else{let f=e.map[r];f===void 0&&(f=new kf(r),jr(e,f)),e=f}}}class ss{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=t.getActiveUniform(e,n),o=t.getUniformLocation(e,a.name);Vf(a,o,this)}}setValue(t,e,i,n){const a=this.map[e];a!==void 0&&a.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let a=0,o=e.length;a!==o;++a){const r=e[a],c=i[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,a=t.length;n!==a;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function Jr(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Wf=37297;let Yf=0;function Xf(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=n;o<a;o++){const r=o+1;i.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return i.join(`
`)}function $f(s){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(s);let i;switch(t===e?i="":t===ls&&e===os?i="LinearDisplayP3ToLinearSRGB":t===os&&e===ls&&(i="LinearSRGBToLinearDisplayP3"),s){case ai:case gs:return[i,"LinearTransferOETF"];case ge:case Ea:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function Qr(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+n+`

`+Xf(s.getShaderSource(t),o)}else return n}function qf(s,t){const e=$f(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Kf(s,t){let e;switch(t){case sc:e="Linear";break;case ac:e="Reinhard";break;case rc:e="OptimizedCineon";break;case oc:e="ACESFilmic";break;case cc:e="AgX";break;case lc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Zf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sn).join(`
`)}function jf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(sn).join(`
`)}function Jf(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Qf(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=s.getActiveAttrib(t,n),o=a.name;let r=1;a.type===s.FLOAT_MAT2&&(r=2),a.type===s.FLOAT_MAT3&&(r=3),a.type===s.FLOAT_MAT4&&(r=4),e[o]={type:a.type,location:s.getAttribLocation(t,o),locationSize:r}}return e}function sn(s){return s!==""}function to(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ma(s){return s.replace(tp,ip)}const ep=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ip(s,t){let e=Yt[t];if(e===void 0){const i=ep.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ma(e)}const np=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function io(s){return s.replace(np,sp)}function sp(s,t,e,i){let n="";for(let a=parseInt(t);a<parseInt(e);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function no(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ap(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Mo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Il?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ii&&(t="SHADOWMAP_TYPE_VSM"),t}function rp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case cn:case hn:t="ENVMAP_TYPE_CUBE";break;case ms:t="ENVMAP_TYPE_CUBE_UV";break}return t}function op(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case hn:t="ENVMAP_MODE_REFRACTION";break}return t}function lp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xa:t="ENVMAP_BLENDING_MULTIPLY";break;case ic:t="ENVMAP_BLENDING_MIX";break;case nc:t="ENVMAP_BLENDING_ADD";break}return t}function cp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function hp(s,t,e,i){const n=s.getContext(),a=e.defines;let o=e.vertexShader,r=e.fragmentShader;const c=ap(e),l=rp(e),u=op(e),f=lp(e),p=cp(e),_=e.isWebGL2?"":Zf(e),v=jf(e),m=Jf(a),d=n.createProgram();let h,x,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(sn).join(`
`),h.length>0&&(h+=`
`),x=[_,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(sn).join(`
`),x.length>0&&(x+=`
`)):(h=[no(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sn).join(`
`),x=[_,no(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==mi?Kf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,qf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sn).join(`
`)),o=ma(o),o=to(o,e),o=eo(o,e),r=ma(r),r=to(r,e),r=eo(r,e),o=io(o),r=io(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,h=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Mr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=g+h+o,E=g+x+r,A=Jr(n,n.VERTEX_SHADER,y),b=Jr(n,n.FRAGMENT_SHADER,E);n.attachShader(d,A),n.attachShader(d,b),e.index0AttributeName!==void 0?n.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(d,0,"position"),n.linkProgram(d);function D(I){if(s.debug.checkShaderErrors){const V=n.getProgramInfoLog(d).trim(),L=n.getShaderInfoLog(A).trim(),z=n.getShaderInfoLog(b).trim();let G=!0,W=!0;if(n.getProgramParameter(d,n.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,d,A,b);else{const $=Qr(n,A,"vertex"),K=Qr(n,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(d,n.VALIDATE_STATUS)+`

Program Info Log: `+V+`
`+$+`
`+K)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(L===""||z==="")&&(W=!1);W&&(I.diagnostics={runnable:G,programLog:V,vertexShader:{log:L,prefix:h},fragmentShader:{log:z,prefix:x}})}n.deleteShader(A),n.deleteShader(b),M=new ss(n,d),S=Qf(n,d)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=n.getProgramParameter(d,Wf)),N},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(d),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yf++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=A,this.fragmentShader=b,this}let dp=0;class up{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new fp(t),e.set(t,i)),i}}class fp{constructor(t){this.id=dp++,this.code=t,this.usedTimes=0}}function pp(s,t,e,i,n,a,o){const r=new ba,c=new up,l=[],u=n.isWebGL2,f=n.logarithmicDepthBuffer,p=n.vertexTextures;let _=n.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return M===0?"uv":`uv${M}`}function d(M,S,N,I,V){const L=I.fog,z=V.geometry,G=M.isMeshStandardMaterial?I.environment:null,W=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),$=W&&W.mapping===ms?W.image.height:null,K=v[M.type];M.precision!==null&&(_=n.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const J=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,it=J!==void 0?J.length:0;let nt=0;z.morphAttributes.position!==void 0&&(nt=1),z.morphAttributes.normal!==void 0&&(nt=2),z.morphAttributes.color!==void 0&&(nt=3);let Z,C,F,q;if(K){const re=$e[K];Z=re.vertexShader,C=re.fragmentShader}else Z=M.vertexShader,C=M.fragmentShader,c.update(M),F=c.getVertexShaderID(M),q=c.getFragmentShaderID(M);const U=s.getRenderTarget(),X=V.isInstancedMesh===!0,lt=V.isBatchedMesh===!0,ht=!!M.map,wt=!!M.matcap,H=!!W,Lt=!!M.aoMap,mt=!!M.lightMap,yt=!!M.bumpMap,pt=!!M.normalMap,Ht=!!M.displacementMap,xt=!!M.emissiveMap,w=!!M.metalnessMap,T=!!M.roughnessMap,B=M.anisotropy>0,rt=M.clearcoat>0,st=M.iridescence>0,at=M.sheen>0,gt=M.transmission>0,dt=B&&!!M.anisotropyMap,Mt=rt&&!!M.clearcoatMap,bt=rt&&!!M.clearcoatNormalMap,zt=rt&&!!M.clearcoatRoughnessMap,ot=st&&!!M.iridescenceMap,kt=st&&!!M.iridescenceThicknessMap,Vt=at&&!!M.sheenColorMap,Nt=at&&!!M.sheenRoughnessMap,At=!!M.specularMap,Et=!!M.specularColorMap,R=!!M.specularIntensityMap,ut=gt&&!!M.transmissionMap,Pt=gt&&!!M.thicknessMap,St=!!M.gradientMap,ct=!!M.alphaMap,O=M.alphaTest>0,ft=!!M.alphaHash,_t=!!M.extensions,It=!!z.attributes.uv1,Rt=!!z.attributes.uv2,Kt=!!z.attributes.uv3;let Zt=mi;return M.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Zt=s.toneMapping),{isWebGL2:u,shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:Z,fragmentShader:C,defines:M.defines,customVertexShaderID:F,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:lt,instancing:X,instancingColor:X&&V.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:U===null?s.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ai,map:ht,matcap:wt,envMap:H,envMapMode:H&&W.mapping,envMapCubeUVHeight:$,aoMap:Lt,lightMap:mt,bumpMap:yt,normalMap:pt,displacementMap:p&&Ht,emissiveMap:xt,normalMapObjectSpace:pt&&M.normalMapType===Mc,normalMapTangentSpace:pt&&M.normalMapType===Lo,metalnessMap:w,roughnessMap:T,anisotropy:B,anisotropyMap:dt,clearcoat:rt,clearcoatMap:Mt,clearcoatNormalMap:bt,clearcoatRoughnessMap:zt,iridescence:st,iridescenceMap:ot,iridescenceThicknessMap:kt,sheen:at,sheenColorMap:Vt,sheenRoughnessMap:Nt,specularMap:At,specularColorMap:Et,specularIntensityMap:R,transmission:gt,transmissionMap:ut,thicknessMap:Pt,gradientMap:St,opaque:M.transparent===!1&&M.blending===on,alphaMap:ct,alphaTest:O,alphaHash:ft,combine:M.combine,mapUv:ht&&m(M.map.channel),aoMapUv:Lt&&m(M.aoMap.channel),lightMapUv:mt&&m(M.lightMap.channel),bumpMapUv:yt&&m(M.bumpMap.channel),normalMapUv:pt&&m(M.normalMap.channel),displacementMapUv:Ht&&m(M.displacementMap.channel),emissiveMapUv:xt&&m(M.emissiveMap.channel),metalnessMapUv:w&&m(M.metalnessMap.channel),roughnessMapUv:T&&m(M.roughnessMap.channel),anisotropyMapUv:dt&&m(M.anisotropyMap.channel),clearcoatMapUv:Mt&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:bt&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&m(M.sheenRoughnessMap.channel),specularMapUv:At&&m(M.specularMap.channel),specularColorMapUv:Et&&m(M.specularColorMap.channel),specularIntensityMapUv:R&&m(M.specularIntensityMap.channel),transmissionMapUv:ut&&m(M.transmissionMap.channel),thicknessMapUv:Pt&&m(M.thicknessMap.channel),alphaMapUv:ct&&m(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(pt||B),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:It,vertexUv2s:Rt,vertexUv3s:Kt,pointsUvs:V.isPoints===!0&&!!z.attributes.uv&&(ht||ct),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:nt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Zt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ht&&M.map.isVideoTexture===!0&&Qt.getTransfer(M.map.colorSpace)===ee,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ni,flipSided:M.side===Pe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:_t&&M.extensions.derivatives===!0,extensionFragDepth:_t&&M.extensions.fragDepth===!0,extensionDrawBuffers:_t&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:_t&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_t&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)S.push(N),S.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(x(S,M),g(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function g(M,S){r.disableAll(),S.isWebGL2&&r.enable(0),S.supportsVertexTextures&&r.enable(1),S.instancing&&r.enable(2),S.instancingColor&&r.enable(3),S.matcap&&r.enable(4),S.envMap&&r.enable(5),S.normalMapObjectSpace&&r.enable(6),S.normalMapTangentSpace&&r.enable(7),S.clearcoat&&r.enable(8),S.iridescence&&r.enable(9),S.alphaTest&&r.enable(10),S.vertexColors&&r.enable(11),S.vertexAlphas&&r.enable(12),S.vertexUv1s&&r.enable(13),S.vertexUv2s&&r.enable(14),S.vertexUv3s&&r.enable(15),S.vertexTangents&&r.enable(16),S.anisotropy&&r.enable(17),S.alphaHash&&r.enable(18),S.batching&&r.enable(19),M.push(r.mask),r.disableAll(),S.fog&&r.enable(0),S.useFog&&r.enable(1),S.flatShading&&r.enable(2),S.logarithmicDepthBuffer&&r.enable(3),S.skinning&&r.enable(4),S.morphTargets&&r.enable(5),S.morphNormals&&r.enable(6),S.morphColors&&r.enable(7),S.premultipliedAlpha&&r.enable(8),S.shadowMapEnabled&&r.enable(9),S.useLegacyLights&&r.enable(10),S.doubleSided&&r.enable(11),S.flipSided&&r.enable(12),S.useDepthPacking&&r.enable(13),S.dithering&&r.enable(14),S.transmission&&r.enable(15),S.sheen&&r.enable(16),S.opaque&&r.enable(17),S.pointsUvs&&r.enable(18),S.decodeVideoTexture&&r.enable(19),M.push(r.mask)}function y(M){const S=v[M.type];let N;if(S){const I=$e[S];N=Kc.clone(I.uniforms)}else N=M.uniforms;return N}function E(M,S){let N;for(let I=0,V=l.length;I<V;I++){const L=l[I];if(L.cacheKey===S){N=L,++N.usedTimes;break}}return N===void 0&&(N=new hp(s,S,M,a),l.push(N)),N}function A(M){if(--M.usedTimes===0){const S=l.indexOf(M);l[S]=l[l.length-1],l.pop(),M.destroy()}}function b(M){c.remove(M)}function D(){c.dispose()}return{getParameters:d,getProgramCacheKey:h,getUniforms:y,acquireProgram:E,releaseProgram:A,releaseShaderCache:b,programs:l,dispose:D}}function mp(){let s=new WeakMap;function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function e(a){s.delete(a)}function i(a,o,r){s.get(a)[o]=r}function n(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function gp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function so(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ao(){const s=[];let t=0;const e=[],i=[],n=[];function a(){t=0,e.length=0,i.length=0,n.length=0}function o(f,p,_,v,m,d){let h=s[t];return h===void 0?(h={id:f.id,object:f,geometry:p,material:_,groupOrder:v,renderOrder:f.renderOrder,z:m,group:d},s[t]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=_,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=m,h.group=d),t++,h}function r(f,p,_,v,m,d){const h=o(f,p,_,v,m,d);_.transmission>0?i.push(h):_.transparent===!0?n.push(h):e.push(h)}function c(f,p,_,v,m,d){const h=o(f,p,_,v,m,d);_.transmission>0?i.unshift(h):_.transparent===!0?n.unshift(h):e.unshift(h)}function l(f,p){e.length>1&&e.sort(f||gp),i.length>1&&i.sort(p||so),n.length>1&&n.sort(p||so)}function u(){for(let f=t,p=s.length;f<p;f++){const _=s[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:n,init:a,push:r,unshift:c,finish:u,sort:l}}function vp(){let s=new WeakMap;function t(i,n){const a=s.get(i);let o;return a===void 0?(o=new ao,s.set(i,[o])):n>=a.length?(o=new ao,a.push(o)):o=a[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function _p(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Jt};break;case"SpotLight":e={position:new k,direction:new k,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new k,halfWidth:new k,halfHeight:new k};break}return s[t.id]=e,e}}}function yp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let xp=0;function Mp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ep(s,t){const e=new _p,i=yp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new k);const a=new k,o=new he,r=new he;function c(u,f){let p=0,_=0,v=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let m=0,d=0,h=0,x=0,g=0,y=0,E=0,A=0,b=0,D=0,M=0;u.sort(Mp);const S=f===!0?Math.PI:1;for(let I=0,V=u.length;I<V;I++){const L=u[I],z=L.color,G=L.intensity,W=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=z.r*G*S,_+=z.g*G*S,v+=z.b*G*S;else if(L.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(L.sh.coefficients[K],G);M++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){const J=L.shadow,it=i.get(L);it.shadowBias=J.bias,it.shadowNormalBias=J.normalBias,it.shadowRadius=J.radius,it.shadowMapSize=J.mapSize,n.directionalShadow[m]=it,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=L.shadow.matrix,y++}n.directional[m]=K,m++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(z).multiplyScalar(G*S),K.distance=W,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,n.spot[h]=K;const J=L.shadow;if(L.map&&(n.spotLightMap[b]=L.map,b++,J.updateMatrices(L),L.castShadow&&D++),n.spotLightMatrix[h]=J.matrix,L.castShadow){const it=i.get(L);it.shadowBias=J.bias,it.shadowNormalBias=J.normalBias,it.shadowRadius=J.radius,it.shadowMapSize=J.mapSize,n.spotShadow[h]=it,n.spotShadowMap[h]=$,A++}h++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(z).multiplyScalar(G),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),n.rectArea[x]=K,x++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*S),K.distance=L.distance,K.decay=L.decay,L.castShadow){const J=L.shadow,it=i.get(L);it.shadowBias=J.bias,it.shadowNormalBias=J.normalBias,it.shadowRadius=J.radius,it.shadowMapSize=J.mapSize,it.shadowCameraNear=J.camera.near,it.shadowCameraFar=J.camera.far,n.pointShadow[d]=it,n.pointShadowMap[d]=$,n.pointShadowMatrix[d]=L.shadow.matrix,E++}n.point[d]=K,d++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(G*S),K.groundColor.copy(L.groundColor).multiplyScalar(G*S),n.hemi[g]=K,g++}}x>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=p,n.ambient[1]=_,n.ambient[2]=v;const N=n.hash;(N.directionalLength!==m||N.pointLength!==d||N.spotLength!==h||N.rectAreaLength!==x||N.hemiLength!==g||N.numDirectionalShadows!==y||N.numPointShadows!==E||N.numSpotShadows!==A||N.numSpotMaps!==b||N.numLightProbes!==M)&&(n.directional.length=m,n.spot.length=h,n.rectArea.length=x,n.point.length=d,n.hemi.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=A+b-D,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=M,N.directionalLength=m,N.pointLength=d,N.spotLength=h,N.rectAreaLength=x,N.hemiLength=g,N.numDirectionalShadows=y,N.numPointShadows=E,N.numSpotShadows=A,N.numSpotMaps=b,N.numLightProbes=M,n.version=xp++)}function l(u,f){let p=0,_=0,v=0,m=0,d=0;const h=f.matrixWorldInverse;for(let x=0,g=u.length;x<g;x++){const y=u[x];if(y.isDirectionalLight){const E=n.directional[p];E.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(h),p++}else if(y.isSpotLight){const E=n.spot[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(h),v++}else if(y.isRectAreaLight){const E=n.rectArea[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),r.identity(),o.copy(y.matrixWorld),o.premultiply(h),r.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),m++}else if(y.isPointLight){const E=n.point[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),_++}else if(y.isHemisphereLight){const E=n.hemi[d];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(h),d++}}}return{setup:c,setupView:l,state:n}}function ro(s,t){const e=new Ep(s,t),i=[],n=[];function a(){i.length=0,n.length=0}function o(f){i.push(f)}function r(f){n.push(f)}function c(f){e.setup(i,f)}function l(f){e.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:r}}function Tp(s,t){let e=new WeakMap;function i(a,o=0){const r=e.get(a);let c;return r===void 0?(c=new ro(s,t),e.set(a,[c])):o>=r.length?(c=new ro(s,t),r.push(c)):c=r[o],c}function n(){e=new WeakMap}return{get:i,dispose:n}}class Sp extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bp extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ap=`void main() {
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
}`;function Pp(s,t,e){let i=new Aa;const n=new Ut,a=new Ut,o=new me,r=new Sp({depthPacking:xc}),c=new bp,l={},u=e.maxTextureSize,f={[vi]:Pe,[Pe]:vi,[ni]:ni},p=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:Ap,fragmentShader:wp}),_=p.clone();_.defines.HORIZONTAL_PASS=1;const v=new Ke;v.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new te(v,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mo;let h=this.type;this.render=function(A,b,D){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;const M=s.getRenderTarget(),S=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),I=s.state;I.setBlending(pi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const V=h!==ii&&this.type===ii,L=h===ii&&this.type!==ii;for(let z=0,G=A.length;z<G;z++){const W=A[z],$=W.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;n.copy($.mapSize);const K=$.getFrameExtents();if(n.multiply(K),a.copy($.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(a.x=Math.floor(u/K.x),n.x=a.x*K.x,$.mapSize.x=a.x),n.y>u&&(a.y=Math.floor(u/K.y),n.y=a.y*K.y,$.mapSize.y=a.y)),$.map===null||V===!0||L===!0){const it=this.type!==ii?{minFilter:Te,magFilter:Te}:{};$.map!==null&&$.map.dispose(),$.map=new Li(n.x,n.y,it),$.map.texture.name=W.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();const J=$.getViewportCount();for(let it=0;it<J;it++){const nt=$.getViewport(it);o.set(a.x*nt.x,a.y*nt.y,a.x*nt.z,a.y*nt.w),I.viewport(o),$.updateMatrices(W,it),i=$.getFrustum(),y(b,D,$.camera,W,this.type)}$.isPointLightShadow!==!0&&this.type===ii&&x($,D),$.needsUpdate=!1}h=this.type,d.needsUpdate=!1,s.setRenderTarget(M,S,N)};function x(A,b){const D=t.update(m);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,_.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,_.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Li(n.x,n.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(b,null,D,p,m,null),_.uniforms.shadow_pass.value=A.mapPass.texture,_.uniforms.resolution.value=A.mapSize,_.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(b,null,D,_,m,null)}function g(A,b,D,M){let S=null;const N=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)S=N;else if(S=D.isPointLight===!0?c:r,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const I=S.uuid,V=b.uuid;let L=l[I];L===void 0&&(L={},l[I]=L);let z=L[V];z===void 0&&(z=S.clone(),L[V]=z,b.addEventListener("dispose",E)),S=z}if(S.visible=b.visible,S.wireframe=b.wireframe,M===ii?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:f[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=s.properties.get(S);I.light=D}return S}function y(A,b,D,M,S){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===ii)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const V=t.update(A),L=A.material;if(Array.isArray(L)){const z=V.groups;for(let G=0,W=z.length;G<W;G++){const $=z[G],K=L[$.materialIndex];if(K&&K.visible){const J=g(A,K,M,S);A.onBeforeShadow(s,A,b,D,V,J,$),s.renderBufferDirect(D,null,V,J,A,$),A.onAfterShadow(s,A,b,D,V,J,$)}}}else if(L.visible){const z=g(A,L,M,S);A.onBeforeShadow(s,A,b,D,V,z,null),s.renderBufferDirect(D,null,V,z,A,null),A.onAfterShadow(s,A,b,D,V,z,null)}}const I=A.children;for(let V=0,L=I.length;V<L;V++)y(I[V],b,D,M,S)}function E(A){A.target.removeEventListener("dispose",E);for(const D in l){const M=l[D],S=A.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function Cp(s,t,e){const i=e.isWebGL2;function n(){let O=!1;const ft=new me;let _t=null;const It=new me(0,0,0,0);return{setMask:function(Rt){_t!==Rt&&!O&&(s.colorMask(Rt,Rt,Rt,Rt),_t=Rt)},setLocked:function(Rt){O=Rt},setClear:function(Rt,Kt,Zt,se,re){re===!0&&(Rt*=se,Kt*=se,Zt*=se),ft.set(Rt,Kt,Zt,se),It.equals(ft)===!1&&(s.clearColor(Rt,Kt,Zt,se),It.copy(ft))},reset:function(){O=!1,_t=null,It.set(-1,0,0,0)}}}function a(){let O=!1,ft=null,_t=null,It=null;return{setTest:function(Rt){Rt?lt(s.DEPTH_TEST):ht(s.DEPTH_TEST)},setMask:function(Rt){ft!==Rt&&!O&&(s.depthMask(Rt),ft=Rt)},setFunc:function(Rt){if(_t!==Rt){switch(Rt){case Kl:s.depthFunc(s.NEVER);break;case Zl:s.depthFunc(s.ALWAYS);break;case jl:s.depthFunc(s.LESS);break;case as:s.depthFunc(s.LEQUAL);break;case Jl:s.depthFunc(s.EQUAL);break;case Ql:s.depthFunc(s.GEQUAL);break;case tc:s.depthFunc(s.GREATER);break;case ec:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=Rt}},setLocked:function(Rt){O=Rt},setClear:function(Rt){It!==Rt&&(s.clearDepth(Rt),It=Rt)},reset:function(){O=!1,ft=null,_t=null,It=null}}}function o(){let O=!1,ft=null,_t=null,It=null,Rt=null,Kt=null,Zt=null,se=null,re=null;return{setTest:function(jt){O||(jt?lt(s.STENCIL_TEST):ht(s.STENCIL_TEST))},setMask:function(jt){ft!==jt&&!O&&(s.stencilMask(jt),ft=jt)},setFunc:function(jt,le,Xe){(_t!==jt||It!==le||Rt!==Xe)&&(s.stencilFunc(jt,le,Xe),_t=jt,It=le,Rt=Xe)},setOp:function(jt,le,Xe){(Kt!==jt||Zt!==le||se!==Xe)&&(s.stencilOp(jt,le,Xe),Kt=jt,Zt=le,se=Xe)},setLocked:function(jt){O=jt},setClear:function(jt){re!==jt&&(s.clearStencil(jt),re=jt)},reset:function(){O=!1,ft=null,_t=null,It=null,Rt=null,Kt=null,Zt=null,se=null,re=null}}}const r=new n,c=new a,l=new o,u=new WeakMap,f=new WeakMap;let p={},_={},v=new WeakMap,m=[],d=null,h=!1,x=null,g=null,y=null,E=null,A=null,b=null,D=null,M=new Jt(0,0,0),S=0,N=!1,I=null,V=null,L=null,z=null,G=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,K=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(J)[1]),$=K>=1):J.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),$=K>=2);let it=null,nt={};const Z=s.getParameter(s.SCISSOR_BOX),C=s.getParameter(s.VIEWPORT),F=new me().fromArray(Z),q=new me().fromArray(C);function U(O,ft,_t,It){const Rt=new Uint8Array(4),Kt=s.createTexture();s.bindTexture(O,Kt),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Zt=0;Zt<_t;Zt++)i&&(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)?s.texImage3D(ft,0,s.RGBA,1,1,It,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(ft+Zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return Kt}const X={};X[s.TEXTURE_2D]=U(s.TEXTURE_2D,s.TEXTURE_2D,1),X[s.TEXTURE_CUBE_MAP]=U(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(X[s.TEXTURE_2D_ARRAY]=U(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),X[s.TEXTURE_3D]=U(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),c.setClear(1),l.setClear(0),lt(s.DEPTH_TEST),c.setFunc(as),xt(!1),w(Ha),lt(s.CULL_FACE),pt(pi);function lt(O){p[O]!==!0&&(s.enable(O),p[O]=!0)}function ht(O){p[O]!==!1&&(s.disable(O),p[O]=!1)}function wt(O,ft){return _[O]!==ft?(s.bindFramebuffer(O,ft),_[O]=ft,i&&(O===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=ft),O===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=ft)),!0):!1}function H(O,ft){let _t=m,It=!1;if(O)if(_t=v.get(ft),_t===void 0&&(_t=[],v.set(ft,_t)),O.isWebGLMultipleRenderTargets){const Rt=O.texture;if(_t.length!==Rt.length||_t[0]!==s.COLOR_ATTACHMENT0){for(let Kt=0,Zt=Rt.length;Kt<Zt;Kt++)_t[Kt]=s.COLOR_ATTACHMENT0+Kt;_t.length=Rt.length,It=!0}}else _t[0]!==s.COLOR_ATTACHMENT0&&(_t[0]=s.COLOR_ATTACHMENT0,It=!0);else _t[0]!==s.BACK&&(_t[0]=s.BACK,It=!0);It&&(e.isWebGL2?s.drawBuffers(_t):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(_t))}function Lt(O){return d!==O?(s.useProgram(O),d=O,!0):!1}const mt={[Ai]:s.FUNC_ADD,[Ol]:s.FUNC_SUBTRACT,[Nl]:s.FUNC_REVERSE_SUBTRACT};if(i)mt[Ya]=s.MIN,mt[Xa]=s.MAX;else{const O=t.get("EXT_blend_minmax");O!==null&&(mt[Ya]=O.MIN_EXT,mt[Xa]=O.MAX_EXT)}const yt={[Ul]:s.ZERO,[zl]:s.ONE,[Fl]:s.SRC_COLOR,[ra]:s.SRC_ALPHA,[Wl]:s.SRC_ALPHA_SATURATE,[kl]:s.DST_COLOR,[Gl]:s.DST_ALPHA,[Bl]:s.ONE_MINUS_SRC_COLOR,[oa]:s.ONE_MINUS_SRC_ALPHA,[Vl]:s.ONE_MINUS_DST_COLOR,[Hl]:s.ONE_MINUS_DST_ALPHA,[Yl]:s.CONSTANT_COLOR,[Xl]:s.ONE_MINUS_CONSTANT_COLOR,[$l]:s.CONSTANT_ALPHA,[ql]:s.ONE_MINUS_CONSTANT_ALPHA};function pt(O,ft,_t,It,Rt,Kt,Zt,se,re,jt){if(O===pi){h===!0&&(ht(s.BLEND),h=!1);return}if(h===!1&&(lt(s.BLEND),h=!0),O!==Dl){if(O!==x||jt!==N){if((g!==Ai||A!==Ai)&&(s.blendEquation(s.FUNC_ADD),g=Ai,A=Ai),jt)switch(O){case on:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ka:s.blendFunc(s.ONE,s.ONE);break;case Va:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case on:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ka:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Va:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,E=null,b=null,D=null,M.set(0,0,0),S=0,x=O,N=jt}return}Rt=Rt||ft,Kt=Kt||_t,Zt=Zt||It,(ft!==g||Rt!==A)&&(s.blendEquationSeparate(mt[ft],mt[Rt]),g=ft,A=Rt),(_t!==y||It!==E||Kt!==b||Zt!==D)&&(s.blendFuncSeparate(yt[_t],yt[It],yt[Kt],yt[Zt]),y=_t,E=It,b=Kt,D=Zt),(se.equals(M)===!1||re!==S)&&(s.blendColor(se.r,se.g,se.b,re),M.copy(se),S=re),x=O,N=!1}function Ht(O,ft){O.side===ni?ht(s.CULL_FACE):lt(s.CULL_FACE);let _t=O.side===Pe;ft&&(_t=!_t),xt(_t),O.blending===on&&O.transparent===!1?pt(pi):pt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),r.setMask(O.colorWrite);const It=O.stencilWrite;l.setTest(It),It&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),B(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?lt(s.SAMPLE_ALPHA_TO_COVERAGE):ht(s.SAMPLE_ALPHA_TO_COVERAGE)}function xt(O){I!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),I=O)}function w(O){O!==Rl?(lt(s.CULL_FACE),O!==V&&(O===Ha?s.cullFace(s.BACK):O===Ll?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ht(s.CULL_FACE),V=O}function T(O){O!==L&&($&&s.lineWidth(O),L=O)}function B(O,ft,_t){O?(lt(s.POLYGON_OFFSET_FILL),(z!==ft||G!==_t)&&(s.polygonOffset(ft,_t),z=ft,G=_t)):ht(s.POLYGON_OFFSET_FILL)}function rt(O){O?lt(s.SCISSOR_TEST):ht(s.SCISSOR_TEST)}function st(O){O===void 0&&(O=s.TEXTURE0+W-1),it!==O&&(s.activeTexture(O),it=O)}function at(O,ft,_t){_t===void 0&&(it===null?_t=s.TEXTURE0+W-1:_t=it);let It=nt[_t];It===void 0&&(It={type:void 0,texture:void 0},nt[_t]=It),(It.type!==O||It.texture!==ft)&&(it!==_t&&(s.activeTexture(_t),it=_t),s.bindTexture(O,ft||X[O]),It.type=O,It.texture=ft)}function gt(){const O=nt[it];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function dt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function zt(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function kt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Vt(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function R(O){F.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),F.copy(O))}function ut(O){q.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),q.copy(O))}function Pt(O,ft){let _t=f.get(ft);_t===void 0&&(_t=new WeakMap,f.set(ft,_t));let It=_t.get(O);It===void 0&&(It=s.getUniformBlockIndex(ft,O.name),_t.set(O,It))}function St(O,ft){const It=f.get(ft).get(O);u.get(ft)!==It&&(s.uniformBlockBinding(ft,It,O.__bindingPointIndex),u.set(ft,It))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},it=null,nt={},_={},v=new WeakMap,m=[],d=null,h=!1,x=null,g=null,y=null,E=null,A=null,b=null,D=null,M=new Jt(0,0,0),S=0,N=!1,I=null,V=null,L=null,z=null,G=null,F.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),c.reset(),l.reset()}return{buffers:{color:r,depth:c,stencil:l},enable:lt,disable:ht,bindFramebuffer:wt,drawBuffers:H,useProgram:Lt,setBlending:pt,setMaterial:Ht,setFlipSided:xt,setCullFace:w,setLineWidth:T,setPolygonOffset:B,setScissorTest:rt,activeTexture:st,bindTexture:at,unbindTexture:gt,compressedTexImage2D:dt,compressedTexImage3D:Mt,texImage2D:At,texImage3D:Et,updateUBOMapping:Pt,uniformBlockBinding:St,texStorage2D:Vt,texStorage3D:Nt,texSubImage2D:bt,texSubImage3D:zt,compressedTexSubImage2D:ot,compressedTexSubImage3D:kt,scissor:R,viewport:ut,reset:ct}}function Rp(s,t,e,i,n,a,o){const r=n.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,T){return _?new OffscreenCanvas(w,T):hs("canvas")}function m(w,T,B,rt){let st=1;if((w.width>rt||w.height>rt)&&(st=rt/Math.max(w.width,w.height)),st<1||T===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const at=T?pa:Math.floor,gt=at(st*w.width),dt=at(st*w.height);f===void 0&&(f=v(gt,dt));const Mt=B?v(gt,dt):f;return Mt.width=gt,Mt.height=dt,Mt.getContext("2d").drawImage(w,0,0,gt,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+gt+"x"+dt+")."),Mt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function d(w){return Er(w.width)&&Er(w.height)}function h(w){return r?!1:w.wrapS!==We||w.wrapT!==We||w.minFilter!==Te&&w.minFilter!==ze}function x(w,T){return w.generateMipmaps&&T&&w.minFilter!==Te&&w.minFilter!==ze}function g(w){s.generateMipmap(w)}function y(w,T,B,rt,st=!1){if(r===!1)return T;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let at=T;if(T===s.RED&&(B===s.FLOAT&&(at=s.R32F),B===s.HALF_FLOAT&&(at=s.R16F),B===s.UNSIGNED_BYTE&&(at=s.R8)),T===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(at=s.R8UI),B===s.UNSIGNED_SHORT&&(at=s.R16UI),B===s.UNSIGNED_INT&&(at=s.R32UI),B===s.BYTE&&(at=s.R8I),B===s.SHORT&&(at=s.R16I),B===s.INT&&(at=s.R32I)),T===s.RG&&(B===s.FLOAT&&(at=s.RG32F),B===s.HALF_FLOAT&&(at=s.RG16F),B===s.UNSIGNED_BYTE&&(at=s.RG8)),T===s.RGBA){const gt=st?rs:Qt.getTransfer(rt);B===s.FLOAT&&(at=s.RGBA32F),B===s.HALF_FLOAT&&(at=s.RGBA16F),B===s.UNSIGNED_BYTE&&(at=gt===ee?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(at=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(at=s.RGB5_A1)}return(at===s.R16F||at===s.R32F||at===s.RG16F||at===s.RG32F||at===s.RGBA16F||at===s.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function E(w,T,B){return x(w,B)===!0||w.isFramebufferTexture&&w.minFilter!==Te&&w.minFilter!==ze?Math.log2(Math.max(T.width,T.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?T.mipmaps.length:1}function A(w){return w===Te||w===$a||w===Ss?s.NEAREST:s.LINEAR}function b(w){const T=w.target;T.removeEventListener("dispose",b),M(T),T.isVideoTexture&&u.delete(T)}function D(w){const T=w.target;T.removeEventListener("dispose",D),N(T)}function M(w){const T=i.get(w);if(T.__webglInit===void 0)return;const B=w.source,rt=p.get(B);if(rt){const st=rt[T.__cacheKey];st.usedTimes--,st.usedTimes===0&&S(w),Object.keys(rt).length===0&&p.delete(B)}i.remove(w)}function S(w){const T=i.get(w);s.deleteTexture(T.__webglTexture);const B=w.source,rt=p.get(B);delete rt[T.__cacheKey],o.memory.textures--}function N(w){const T=w.texture,B=i.get(w),rt=i.get(T);if(rt.__webglTexture!==void 0&&(s.deleteTexture(rt.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(B.__webglFramebuffer[st]))for(let at=0;at<B.__webglFramebuffer[st].length;at++)s.deleteFramebuffer(B.__webglFramebuffer[st][at]);else s.deleteFramebuffer(B.__webglFramebuffer[st]);B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[st])}else{if(Array.isArray(B.__webglFramebuffer))for(let st=0;st<B.__webglFramebuffer.length;st++)s.deleteFramebuffer(B.__webglFramebuffer[st]);else s.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let st=0;st<B.__webglColorRenderbuffer.length;st++)B.__webglColorRenderbuffer[st]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[st]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let st=0,at=T.length;st<at;st++){const gt=i.get(T[st]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),o.memory.textures--),i.remove(T[st])}i.remove(T),i.remove(w)}let I=0;function V(){I=0}function L(){const w=I;return w>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),I+=1,w}function z(w){const T=[];return T.push(w.wrapS),T.push(w.wrapT),T.push(w.wrapR||0),T.push(w.magFilter),T.push(w.minFilter),T.push(w.anisotropy),T.push(w.internalFormat),T.push(w.format),T.push(w.type),T.push(w.generateMipmaps),T.push(w.premultiplyAlpha),T.push(w.flipY),T.push(w.unpackAlignment),T.push(w.colorSpace),T.join()}function G(w,T){const B=i.get(w);if(w.isVideoTexture&&Ht(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const rt=w.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(B,w,T);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+T)}function W(w,T){const B=i.get(w);if(w.version>0&&B.__version!==w.version){F(B,w,T);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+T)}function $(w,T){const B=i.get(w);if(w.version>0&&B.__version!==w.version){F(B,w,T);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+T)}function K(w,T){const B=i.get(w);if(w.version>0&&B.__version!==w.version){q(B,w,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+T)}const J={[ha]:s.REPEAT,[We]:s.CLAMP_TO_EDGE,[da]:s.MIRRORED_REPEAT},it={[Te]:s.NEAREST,[$a]:s.NEAREST_MIPMAP_NEAREST,[Ss]:s.NEAREST_MIPMAP_LINEAR,[ze]:s.LINEAR,[hc]:s.LINEAR_MIPMAP_NEAREST,[bn]:s.LINEAR_MIPMAP_LINEAR},nt={[Ec]:s.NEVER,[Pc]:s.ALWAYS,[Tc]:s.LESS,[Io]:s.LEQUAL,[Sc]:s.EQUAL,[wc]:s.GEQUAL,[bc]:s.GREATER,[Ac]:s.NOTEQUAL};function Z(w,T,B){if(B?(s.texParameteri(w,s.TEXTURE_WRAP_S,J[T.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,J[T.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,J[T.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,it[T.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,it[T.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(T.wrapS!==We||T.wrapT!==We)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,A(T.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,A(T.minFilter)),T.minFilter!==Te&&T.minFilter!==ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,nt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const rt=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===Te||T.minFilter!==Ss&&T.minFilter!==bn||T.type===fi&&t.has("OES_texture_float_linear")===!1||r===!1&&T.type===An&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(s.texParameterf(w,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function C(w,T){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,T.addEventListener("dispose",b));const rt=T.source;let st=p.get(rt);st===void 0&&(st={},p.set(rt,st));const at=z(T);if(at!==w.__cacheKey){st[at]===void 0&&(st[at]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),st[at].usedTimes++;const gt=st[w.__cacheKey];gt!==void 0&&(st[w.__cacheKey].usedTimes--,gt.usedTimes===0&&S(T)),w.__cacheKey=at,w.__webglTexture=st[at].texture}return B}function F(w,T,B){let rt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(rt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(rt=s.TEXTURE_3D);const st=C(w,T),at=T.source;e.bindTexture(rt,w.__webglTexture,s.TEXTURE0+B);const gt=i.get(at);if(at.version!==gt.__version||st===!0){e.activeTexture(s.TEXTURE0+B);const dt=Qt.getPrimaries(Qt.workingColorSpace),Mt=T.colorSpace===Be?null:Qt.getPrimaries(T.colorSpace),bt=T.colorSpace===Be||dt===Mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const zt=h(T)&&d(T.image)===!1;let ot=m(T.image,zt,!1,n.maxTextureSize);ot=xt(T,ot);const kt=d(ot)||r,Vt=a.convert(T.format,T.colorSpace);let Nt=a.convert(T.type),At=y(T.internalFormat,Vt,Nt,T.colorSpace,T.isVideoTexture);Z(rt,T,kt);let Et;const R=T.mipmaps,ut=r&&T.isVideoTexture!==!0&&At!==Co,Pt=gt.__version===void 0||st===!0,St=E(T,ot,kt);if(T.isDepthTexture)At=s.DEPTH_COMPONENT,r?T.type===fi?At=s.DEPTH_COMPONENT32F:T.type===ui?At=s.DEPTH_COMPONENT24:T.type===Pi?At=s.DEPTH24_STENCIL8:At=s.DEPTH_COMPONENT16:T.type===fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Ci&&At===s.DEPTH_COMPONENT&&T.type!==Ma&&T.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=ui,Nt=a.convert(T.type)),T.format===dn&&At===s.DEPTH_COMPONENT&&(At=s.DEPTH_STENCIL,T.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Pi,Nt=a.convert(T.type))),Pt&&(ut?e.texStorage2D(s.TEXTURE_2D,1,At,ot.width,ot.height):e.texImage2D(s.TEXTURE_2D,0,At,ot.width,ot.height,0,Vt,Nt,null));else if(T.isDataTexture)if(R.length>0&&kt){ut&&Pt&&e.texStorage2D(s.TEXTURE_2D,St,At,R[0].width,R[0].height);for(let ct=0,O=R.length;ct<O;ct++)Et=R[ct],ut?e.texSubImage2D(s.TEXTURE_2D,ct,0,0,Et.width,Et.height,Vt,Nt,Et.data):e.texImage2D(s.TEXTURE_2D,ct,At,Et.width,Et.height,0,Vt,Nt,Et.data);T.generateMipmaps=!1}else ut?(Pt&&e.texStorage2D(s.TEXTURE_2D,St,At,ot.width,ot.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot.width,ot.height,Vt,Nt,ot.data)):e.texImage2D(s.TEXTURE_2D,0,At,ot.width,ot.height,0,Vt,Nt,ot.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ut&&Pt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,St,At,R[0].width,R[0].height,ot.depth);for(let ct=0,O=R.length;ct<O;ct++)Et=R[ct],T.format!==Ye?Vt!==null?ut?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,Et.width,Et.height,ot.depth,Vt,Et.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ct,At,Et.width,Et.height,ot.depth,0,Et.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?e.texSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,Et.width,Et.height,ot.depth,Vt,Nt,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ct,At,Et.width,Et.height,ot.depth,0,Vt,Nt,Et.data)}else{ut&&Pt&&e.texStorage2D(s.TEXTURE_2D,St,At,R[0].width,R[0].height);for(let ct=0,O=R.length;ct<O;ct++)Et=R[ct],T.format!==Ye?Vt!==null?ut?e.compressedTexSubImage2D(s.TEXTURE_2D,ct,0,0,Et.width,Et.height,Vt,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,ct,At,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?e.texSubImage2D(s.TEXTURE_2D,ct,0,0,Et.width,Et.height,Vt,Nt,Et.data):e.texImage2D(s.TEXTURE_2D,ct,At,Et.width,Et.height,0,Vt,Nt,Et.data)}else if(T.isDataArrayTexture)ut?(Pt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,St,At,ot.width,ot.height,ot.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Vt,Nt,ot.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,At,ot.width,ot.height,ot.depth,0,Vt,Nt,ot.data);else if(T.isData3DTexture)ut?(Pt&&e.texStorage3D(s.TEXTURE_3D,St,At,ot.width,ot.height,ot.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Vt,Nt,ot.data)):e.texImage3D(s.TEXTURE_3D,0,At,ot.width,ot.height,ot.depth,0,Vt,Nt,ot.data);else if(T.isFramebufferTexture){if(Pt)if(ut)e.texStorage2D(s.TEXTURE_2D,St,At,ot.width,ot.height);else{let ct=ot.width,O=ot.height;for(let ft=0;ft<St;ft++)e.texImage2D(s.TEXTURE_2D,ft,At,ct,O,0,Vt,Nt,null),ct>>=1,O>>=1}}else if(R.length>0&&kt){ut&&Pt&&e.texStorage2D(s.TEXTURE_2D,St,At,R[0].width,R[0].height);for(let ct=0,O=R.length;ct<O;ct++)Et=R[ct],ut?e.texSubImage2D(s.TEXTURE_2D,ct,0,0,Vt,Nt,Et):e.texImage2D(s.TEXTURE_2D,ct,At,Vt,Nt,Et);T.generateMipmaps=!1}else ut?(Pt&&e.texStorage2D(s.TEXTURE_2D,St,At,ot.width,ot.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Vt,Nt,ot)):e.texImage2D(s.TEXTURE_2D,0,At,Vt,Nt,ot);x(T,kt)&&g(rt),gt.__version=at.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function q(w,T,B){if(T.image.length!==6)return;const rt=C(w,T),st=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+B);const at=i.get(st);if(st.version!==at.__version||rt===!0){e.activeTexture(s.TEXTURE0+B);const gt=Qt.getPrimaries(Qt.workingColorSpace),dt=T.colorSpace===Be?null:Qt.getPrimaries(T.colorSpace),Mt=T.colorSpace===Be||gt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const bt=T.isCompressedTexture||T.image[0].isCompressedTexture,zt=T.image[0]&&T.image[0].isDataTexture,ot=[];for(let ct=0;ct<6;ct++)!bt&&!zt?ot[ct]=m(T.image[ct],!1,!0,n.maxCubemapSize):ot[ct]=zt?T.image[ct].image:T.image[ct],ot[ct]=xt(T,ot[ct]);const kt=ot[0],Vt=d(kt)||r,Nt=a.convert(T.format,T.colorSpace),At=a.convert(T.type),Et=y(T.internalFormat,Nt,At,T.colorSpace),R=r&&T.isVideoTexture!==!0,ut=at.__version===void 0||rt===!0;let Pt=E(T,kt,Vt);Z(s.TEXTURE_CUBE_MAP,T,Vt);let St;if(bt){R&&ut&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,Et,kt.width,kt.height);for(let ct=0;ct<6;ct++){St=ot[ct].mipmaps;for(let O=0;O<St.length;O++){const ft=St[O];T.format!==Ye?Nt!==null?R?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,O,0,0,ft.width,ft.height,Nt,ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,O,Et,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,O,0,0,ft.width,ft.height,Nt,At,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,O,Et,ft.width,ft.height,0,Nt,At,ft.data)}}}else{St=T.mipmaps,R&&ut&&(St.length>0&&Pt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,Et,ot[0].width,ot[0].height));for(let ct=0;ct<6;ct++)if(zt){R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,ot[ct].width,ot[ct].height,Nt,At,ot[ct].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Et,ot[ct].width,ot[ct].height,0,Nt,At,ot[ct].data);for(let O=0;O<St.length;O++){const _t=St[O].image[ct].image;R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,O+1,0,0,_t.width,_t.height,Nt,At,_t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,O+1,Et,_t.width,_t.height,0,Nt,At,_t.data)}}else{R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Nt,At,ot[ct]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Et,Nt,At,ot[ct]);for(let O=0;O<St.length;O++){const ft=St[O];R?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,O+1,0,0,Nt,At,ft.image[ct]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,O+1,Et,Nt,At,ft.image[ct])}}}x(T,Vt)&&g(s.TEXTURE_CUBE_MAP),at.__version=st.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function U(w,T,B,rt,st,at){const gt=a.convert(B.format,B.colorSpace),dt=a.convert(B.type),Mt=y(B.internalFormat,gt,dt,B.colorSpace);if(!i.get(T).__hasExternalTextures){const zt=Math.max(1,T.width>>at),ot=Math.max(1,T.height>>at);st===s.TEXTURE_3D||st===s.TEXTURE_2D_ARRAY?e.texImage3D(st,at,Mt,zt,ot,T.depth,0,gt,dt,null):e.texImage2D(st,at,Mt,zt,ot,0,gt,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),pt(T)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,st,i.get(B).__webglTexture,0,yt(T)):(st===s.TEXTURE_2D||st>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,rt,st,i.get(B).__webglTexture,at),e.bindFramebuffer(s.FRAMEBUFFER,null)}function X(w,T,B){if(s.bindRenderbuffer(s.RENDERBUFFER,w),T.depthBuffer&&!T.stencilBuffer){let rt=r===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(B||pt(T)){const st=T.depthTexture;st&&st.isDepthTexture&&(st.type===fi?rt=s.DEPTH_COMPONENT32F:st.type===ui&&(rt=s.DEPTH_COMPONENT24));const at=yt(T);pt(T)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,rt,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,at,rt,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,rt,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(T.depthBuffer&&T.stencilBuffer){const rt=yt(T);B&&pt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,s.DEPTH24_STENCIL8,T.width,T.height):pt(T)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{const rt=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let st=0;st<rt.length;st++){const at=rt[st],gt=a.convert(at.format,at.colorSpace),dt=a.convert(at.type),Mt=y(at.internalFormat,gt,dt,at.colorSpace),bt=yt(T);B&&pt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,Mt,T.width,T.height):pt(T)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt,Mt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Mt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function lt(w,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),G(T.depthTexture,0);const rt=i.get(T.depthTexture).__webglTexture,st=yt(T);if(T.depthTexture.format===Ci)pt(T)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0);else if(T.depthTexture.format===dn)pt(T)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function ht(w){const T=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!T.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");lt(T.__webglFramebuffer,w)}else if(B){T.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[rt]),T.__webglDepthbuffer[rt]=s.createRenderbuffer(),X(T.__webglDepthbuffer[rt],w,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),X(T.__webglDepthbuffer,w,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(w,T,B){const rt=i.get(w);T!==void 0&&U(rt.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&ht(w)}function H(w){const T=w.texture,B=i.get(w),rt=i.get(T);w.addEventListener("dispose",D),w.isWebGLMultipleRenderTargets!==!0&&(rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture()),rt.__version=T.version,o.memory.textures++);const st=w.isWebGLCubeRenderTarget===!0,at=w.isWebGLMultipleRenderTargets===!0,gt=d(w)||r;if(st){B.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(r&&T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[dt]=[];for(let Mt=0;Mt<T.mipmaps.length;Mt++)B.__webglFramebuffer[dt][Mt]=s.createFramebuffer()}else B.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(r&&T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let dt=0;dt<T.mipmaps.length;dt++)B.__webglFramebuffer[dt]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(at)if(n.drawBuffers){const dt=w.texture;for(let Mt=0,bt=dt.length;Mt<bt;Mt++){const zt=i.get(dt[Mt]);zt.__webglTexture===void 0&&(zt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&w.samples>0&&pt(w)===!1){const dt=at?T:[T];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Mt=0;Mt<dt.length;Mt++){const bt=dt[Mt];B.__webglColorRenderbuffer[Mt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[Mt]);const zt=a.convert(bt.format,bt.colorSpace),ot=a.convert(bt.type),kt=y(bt.internalFormat,zt,ot,bt.colorSpace,w.isXRRenderTarget===!0),Vt=yt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,kt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,B.__webglColorRenderbuffer[Mt])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),X(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(st){e.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture),Z(s.TEXTURE_CUBE_MAP,T,gt);for(let dt=0;dt<6;dt++)if(r&&T.mipmaps&&T.mipmaps.length>0)for(let Mt=0;Mt<T.mipmaps.length;Mt++)U(B.__webglFramebuffer[dt][Mt],w,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Mt);else U(B.__webglFramebuffer[dt],w,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);x(T,gt)&&g(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){const dt=w.texture;for(let Mt=0,bt=dt.length;Mt<bt;Mt++){const zt=dt[Mt],ot=i.get(zt);e.bindTexture(s.TEXTURE_2D,ot.__webglTexture),Z(s.TEXTURE_2D,zt,gt),U(B.__webglFramebuffer,w,zt,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,0),x(zt,gt)&&g(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(r?dt=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,rt.__webglTexture),Z(dt,T,gt),r&&T.mipmaps&&T.mipmaps.length>0)for(let Mt=0;Mt<T.mipmaps.length;Mt++)U(B.__webglFramebuffer[Mt],w,T,s.COLOR_ATTACHMENT0,dt,Mt);else U(B.__webglFramebuffer,w,T,s.COLOR_ATTACHMENT0,dt,0);x(T,gt)&&g(dt),e.unbindTexture()}w.depthBuffer&&ht(w)}function Lt(w){const T=d(w)||r,B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let rt=0,st=B.length;rt<st;rt++){const at=B[rt];if(x(at,T)){const gt=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,dt=i.get(at).__webglTexture;e.bindTexture(gt,dt),g(gt),e.unbindTexture()}}}function mt(w){if(r&&w.samples>0&&pt(w)===!1){const T=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],B=w.width,rt=w.height;let st=s.COLOR_BUFFER_BIT;const at=[],gt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=i.get(w),Mt=w.isWebGLMultipleRenderTargets===!0;if(Mt)for(let bt=0;bt<T.length;bt++)e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let bt=0;bt<T.length;bt++){at.push(s.COLOR_ATTACHMENT0+bt),w.depthBuffer&&at.push(gt);const zt=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(zt===!1&&(w.depthBuffer&&(st|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&(st|=s.STENCIL_BUFFER_BIT)),Mt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,dt.__webglColorRenderbuffer[bt]),zt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[gt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[gt])),Mt){const ot=i.get(T[bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ot,0)}s.blitFramebuffer(0,0,B,rt,0,0,B,rt,st,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Mt)for(let bt=0;bt<T.length;bt++){e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,dt.__webglColorRenderbuffer[bt]);const zt=i.get(T[bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}}function yt(w){return Math.min(n.maxSamples,w.samples)}function pt(w){const T=i.get(w);return r&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ht(w){const T=o.render.frame;u.get(w)!==T&&(u.set(w,T),w.update())}function xt(w,T){const B=w.colorSpace,rt=w.format,st=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===ua||B!==ai&&B!==Be&&(Qt.getTransfer(B)===ee?r===!1?t.has("EXT_sRGB")===!0&&rt===Ye?(w.format=ua,w.minFilter=ze,w.generateMipmaps=!1):T=Oo.sRGBToLinear(T):(rt!==Ye||st!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),T}this.allocateTextureUnit=L,this.resetTextureUnits=V,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=K,this.rebindTextures=wt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=U,this.useMultisampledRTT=pt}function Lp(s,t,e){const i=e.isWebGL2;function n(a,o=Be){let r;const c=Qt.getTransfer(o);if(a===gi)return s.UNSIGNED_BYTE;if(a===So)return s.UNSIGNED_SHORT_4_4_4_4;if(a===bo)return s.UNSIGNED_SHORT_5_5_5_1;if(a===dc)return s.BYTE;if(a===uc)return s.SHORT;if(a===Ma)return s.UNSIGNED_SHORT;if(a===To)return s.INT;if(a===ui)return s.UNSIGNED_INT;if(a===fi)return s.FLOAT;if(a===An)return i?s.HALF_FLOAT:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(a===fc)return s.ALPHA;if(a===Ye)return s.RGBA;if(a===pc)return s.LUMINANCE;if(a===mc)return s.LUMINANCE_ALPHA;if(a===Ci)return s.DEPTH_COMPONENT;if(a===dn)return s.DEPTH_STENCIL;if(a===ua)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(a===gc)return s.RED;if(a===Ao)return s.RED_INTEGER;if(a===vc)return s.RG;if(a===wo)return s.RG_INTEGER;if(a===Po)return s.RGBA_INTEGER;if(a===bs||a===As||a===ws||a===Ps)if(c===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(a===bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(a===bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===As)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ps)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===qa||a===Ka||a===Za||a===ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(a===qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Co)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Ja||a===Qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(a===Ja)return c===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(a===Qa)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===tr||a===er||a===ir||a===nr||a===sr||a===ar||a===rr||a===or||a===lr||a===cr||a===hr||a===dr||a===ur||a===fr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(a===tr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===er)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===ir)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===nr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===sr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ar)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===rr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===or)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===lr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===cr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===hr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===dr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ur)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===fr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Cs||a===pr||a===mr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(a===Cs)return c===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===pr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===mr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===_c||a===gr||a===vr||a===_r)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(a===Cs)return r.COMPRESSED_RED_RGTC1_EXT;if(a===gr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===_r)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Pi?i?s.UNSIGNED_INT_24_8:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:n}}class Ip extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xn extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dp={type:"move"};class Qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,a=null,o=null;const r=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const m of t.hand.values()){const d=e.getJointPose(m,i),h=this._getHandJoint(l,m);d!==null&&(h.matrix.fromArray(d.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=d.radius),h.visible=d!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=u.position.distanceTo(f.position),_=.02,v=.005;l.inputState.pinching&&p>_+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=_-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(r.matrix.fromArray(n.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,n.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(n.linearVelocity)):r.hasLinearVelocity=!1,n.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(n.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Dp)))}return r!==null&&(r.visible=n!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new xn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Op extends Oi{constructor(t,e){super();const i=this;let n=null,a=1,o=null,r="local-floor",c=1,l=null,u=null,f=null,p=null,_=null,v=null;const m=e.getContextAttributes();let d=null,h=null;const x=[],g=[],y=new Ut;let E=null;const A=new Fe;A.layers.enable(1),A.viewport=new me;const b=new Fe;b.layers.enable(2),b.viewport=new me;const D=[A,b],M=new Ip;M.layers.enable(1),M.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let C=x[Z];return C===void 0&&(C=new Qs,x[Z]=C),C.getTargetRaySpace()},this.getControllerGrip=function(Z){let C=x[Z];return C===void 0&&(C=new Qs,x[Z]=C),C.getGripSpace()},this.getHand=function(Z){let C=x[Z];return C===void 0&&(C=new Qs,x[Z]=C),C.getHandSpace()};function I(Z){const C=g.indexOf(Z.inputSource);if(C===-1)return;const F=x[C];F!==void 0&&(F.update(Z.inputSource,Z.frame,l||o),F.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){n.removeEventListener("select",I),n.removeEventListener("selectstart",I),n.removeEventListener("selectend",I),n.removeEventListener("squeeze",I),n.removeEventListener("squeezestart",I),n.removeEventListener("squeezeend",I),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",L);for(let Z=0;Z<x.length;Z++){const C=g[Z];C!==null&&(g[Z]=null,x[Z].disconnect(C))}S=null,N=null,t.setRenderTarget(d),_=null,p=null,f=null,n=null,h=null,nt.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return p!==null?p:_},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(d=t.getRenderTarget(),n.addEventListener("select",I),n.addEventListener("selectstart",I),n.addEventListener("selectend",I),n.addEventListener("squeeze",I),n.addEventListener("squeezestart",I),n.addEventListener("squeezeend",I),n.addEventListener("end",V),n.addEventListener("inputsourceschange",L),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(y),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const C={antialias:n.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(n,e,C),n.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),h=new Li(_.framebufferWidth,_.framebufferHeight,{format:Ye,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let C=null,F=null,q=null;m.depth&&(q=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,C=m.stencil?dn:Ci,F=m.stencil?Pi:ui);const U={colorFormat:e.RGBA8,depthFormat:q,scaleFactor:a};f=new XRWebGLBinding(n,e),p=f.createProjectionLayer(U),n.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),h=new Li(p.textureWidth,p.textureHeight,{format:Ye,type:gi,depthTexture:new Yo(p.textureWidth,p.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,C),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const X=t.properties.get(h);X.__ignoreDepthValues=p.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await n.requestReferenceSpace(r),nt.setContext(n),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function L(Z){for(let C=0;C<Z.removed.length;C++){const F=Z.removed[C],q=g.indexOf(F);q>=0&&(g[q]=null,x[q].disconnect(F))}for(let C=0;C<Z.added.length;C++){const F=Z.added[C];let q=g.indexOf(F);if(q===-1){for(let X=0;X<x.length;X++)if(X>=g.length){g.push(F),q=X;break}else if(g[X]===null){g[X]=F,q=X;break}if(q===-1)break}const U=x[q];U&&U.connect(F)}}const z=new k,G=new k;function W(Z,C,F){z.setFromMatrixPosition(C.matrixWorld),G.setFromMatrixPosition(F.matrixWorld);const q=z.distanceTo(G),U=C.projectionMatrix.elements,X=F.projectionMatrix.elements,lt=U[14]/(U[10]-1),ht=U[14]/(U[10]+1),wt=(U[9]+1)/U[5],H=(U[9]-1)/U[5],Lt=(U[8]-1)/U[0],mt=(X[8]+1)/X[0],yt=lt*Lt,pt=lt*mt,Ht=q/(-Lt+mt),xt=Ht*-Lt;C.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(xt),Z.translateZ(Ht),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const w=lt+Ht,T=ht+Ht,B=yt-xt,rt=pt+(q-xt),st=wt*ht/T*w,at=H*ht/T*w;Z.projectionMatrix.makePerspective(B,rt,st,at,w,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function $(Z,C){C===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(C.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;M.near=b.near=A.near=Z.near,M.far=b.far=A.far=Z.far,(S!==M.near||N!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,N=M.far);const C=Z.parent,F=M.cameras;$(M,C);for(let q=0;q<F.length;q++)$(F[q],C);F.length===2?W(M,A,b):M.projectionMatrix.copy(A.projectionMatrix),K(Z,M,C)};function K(Z,C,F){F===null?Z.matrix.copy(C.matrixWorld):(Z.matrix.copy(F.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(C.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(C.projectionMatrix),Z.projectionMatrixInverse.copy(C.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=fa*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&_===null))return c},this.setFoveation=function(Z){c=Z,p!==null&&(p.fixedFoveation=Z),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=Z)};let J=null;function it(Z,C){if(u=C.getViewerPose(l||o),v=C,u!==null){const F=u.views;_!==null&&(t.setRenderTargetFramebuffer(h,_.framebuffer),t.setRenderTarget(h));let q=!1;F.length!==M.cameras.length&&(M.cameras.length=0,q=!0);for(let U=0;U<F.length;U++){const X=F[U];let lt=null;if(_!==null)lt=_.getViewport(X);else{const wt=f.getViewSubImage(p,X);lt=wt.viewport,U===0&&(t.setRenderTargetTextures(h,wt.colorTexture,p.ignoreDepthValues?void 0:wt.depthStencilTexture),t.setRenderTarget(h))}let ht=D[U];ht===void 0&&(ht=new Fe,ht.layers.enable(U),ht.viewport=new me,D[U]=ht),ht.matrix.fromArray(X.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(X.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(lt.x,lt.y,lt.width,lt.height),U===0&&(M.matrix.copy(ht.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),q===!0&&M.cameras.push(ht)}}for(let F=0;F<x.length;F++){const q=g[F],U=x[F];q!==null&&U!==void 0&&U.update(q,C,l||o)}J&&J(Z,C),C.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:C}),v=null}const nt=new Vo;nt.setAnimationLoop(it),this.setAnimationLoop=function(Z){J=Z},this.dispose=function(){}}}function Np(s,t){function e(d,h){d.matrixAutoUpdate===!0&&d.updateMatrix(),h.value.copy(d.matrix)}function i(d,h){h.color.getRGB(d.fogColor.value,Go(s)),h.isFog?(d.fogNear.value=h.near,d.fogFar.value=h.far):h.isFogExp2&&(d.fogDensity.value=h.density)}function n(d,h,x,g,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(d,h):h.isMeshToonMaterial?(a(d,h),f(d,h)):h.isMeshPhongMaterial?(a(d,h),u(d,h)):h.isMeshStandardMaterial?(a(d,h),p(d,h),h.isMeshPhysicalMaterial&&_(d,h,y)):h.isMeshMatcapMaterial?(a(d,h),v(d,h)):h.isMeshDepthMaterial?a(d,h):h.isMeshDistanceMaterial?(a(d,h),m(d,h)):h.isMeshNormalMaterial?a(d,h):h.isLineBasicMaterial?(o(d,h),h.isLineDashedMaterial&&r(d,h)):h.isPointsMaterial?c(d,h,x,g):h.isSpriteMaterial?l(d,h):h.isShadowMaterial?(d.color.value.copy(h.color),d.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(d,h){d.opacity.value=h.opacity,h.color&&d.diffuse.value.copy(h.color),h.emissive&&d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(d.map.value=h.map,e(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.bumpMap&&(d.bumpMap.value=h.bumpMap,e(h.bumpMap,d.bumpMapTransform),d.bumpScale.value=h.bumpScale,h.side===Pe&&(d.bumpScale.value*=-1)),h.normalMap&&(d.normalMap.value=h.normalMap,e(h.normalMap,d.normalMapTransform),d.normalScale.value.copy(h.normalScale),h.side===Pe&&d.normalScale.value.negate()),h.displacementMap&&(d.displacementMap.value=h.displacementMap,e(h.displacementMap,d.displacementMapTransform),d.displacementScale.value=h.displacementScale,d.displacementBias.value=h.displacementBias),h.emissiveMap&&(d.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,d.emissiveMapTransform)),h.specularMap&&(d.specularMap.value=h.specularMap,e(h.specularMap,d.specularMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest);const x=t.get(h).envMap;if(x&&(d.envMap.value=x,d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=h.reflectivity,d.ior.value=h.ior,d.refractionRatio.value=h.refractionRatio),h.lightMap){d.lightMap.value=h.lightMap;const g=s._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=h.lightMapIntensity*g,e(h.lightMap,d.lightMapTransform)}h.aoMap&&(d.aoMap.value=h.aoMap,d.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,d.aoMapTransform))}function o(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,h.map&&(d.map.value=h.map,e(h.map,d.mapTransform))}function r(d,h){d.dashSize.value=h.dashSize,d.totalSize.value=h.dashSize+h.gapSize,d.scale.value=h.scale}function c(d,h,x,g){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.size.value=h.size*x,d.scale.value=g*.5,h.map&&(d.map.value=h.map,e(h.map,d.uvTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function l(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.rotation.value=h.rotation,h.map&&(d.map.value=h.map,e(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function u(d,h){d.specular.value.copy(h.specular),d.shininess.value=Math.max(h.shininess,1e-4)}function f(d,h){h.gradientMap&&(d.gradientMap.value=h.gradientMap)}function p(d,h){d.metalness.value=h.metalness,h.metalnessMap&&(d.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,d.metalnessMapTransform)),d.roughness.value=h.roughness,h.roughnessMap&&(d.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,d.roughnessMapTransform)),t.get(h).envMap&&(d.envMapIntensity.value=h.envMapIntensity)}function _(d,h,x){d.ior.value=h.ior,h.sheen>0&&(d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),d.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(d.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,d.sheenColorMapTransform)),h.sheenRoughnessMap&&(d.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,d.sheenRoughnessMapTransform))),h.clearcoat>0&&(d.clearcoat.value=h.clearcoat,d.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(d.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,d.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(d.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Pe&&d.clearcoatNormalScale.value.negate())),h.iridescence>0&&(d.iridescence.value=h.iridescence,d.iridescenceIOR.value=h.iridescenceIOR,d.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(d.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,d.iridescenceMapTransform)),h.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),h.transmission>0&&(d.transmission.value=h.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(d.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,d.transmissionMapTransform)),d.thickness.value=h.thickness,h.thicknessMap&&(d.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=h.attenuationDistance,d.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(d.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(d.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=h.specularIntensity,d.specularColor.value.copy(h.specularColor),h.specularColorMap&&(d.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,d.specularColorMapTransform)),h.specularIntensityMap&&(d.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,d.specularIntensityMapTransform))}function v(d,h){h.matcap&&(d.matcap.value=h.matcap)}function m(d,h){const x=t.get(h).light;d.referencePosition.value.setFromMatrixPosition(x.matrixWorld),d.nearDistance.value=x.shadow.camera.near,d.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Up(s,t,e,i){let n={},a={},o=[];const r=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,g){const y=g.program;i.uniformBlockBinding(x,y)}function l(x,g){let y=n[x.id];y===void 0&&(v(x),y=u(x),n[x.id]=y,x.addEventListener("dispose",d));const E=g.program;i.updateUBOMapping(x,E);const A=t.render.frame;a[x.id]!==A&&(p(x),a[x.id]=A)}function u(x){const g=f();x.__bindingPointIndex=g;const y=s.createBuffer(),E=x.__size,A=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,E,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,g,y),y}function f(){for(let x=0;x<r;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const g=n[x.id],y=x.uniforms,E=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,g);for(let A=0,b=y.length;A<b;A++){const D=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,S=D.length;M<S;M++){const N=D[M];if(_(N,A,M,E)===!0){const I=N.__offset,V=Array.isArray(N.value)?N.value:[N.value];let L=0;for(let z=0;z<V.length;z++){const G=V[z],W=m(G);typeof G=="number"||typeof G=="boolean"?(N.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,I+L,N.__data)):G.isMatrix3?(N.__data[0]=G.elements[0],N.__data[1]=G.elements[1],N.__data[2]=G.elements[2],N.__data[3]=0,N.__data[4]=G.elements[3],N.__data[5]=G.elements[4],N.__data[6]=G.elements[5],N.__data[7]=0,N.__data[8]=G.elements[6],N.__data[9]=G.elements[7],N.__data[10]=G.elements[8],N.__data[11]=0):(G.toArray(N.__data,L),L+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(x,g,y,E){const A=x.value,b=g+"_"+y;if(E[b]===void 0)return typeof A=="number"||typeof A=="boolean"?E[b]=A:E[b]=A.clone(),!0;{const D=E[b];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return E[b]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function v(x){const g=x.uniforms;let y=0;const E=16;for(let b=0,D=g.length;b<D;b++){const M=Array.isArray(g[b])?g[b]:[g[b]];for(let S=0,N=M.length;S<N;S++){const I=M[S],V=Array.isArray(I.value)?I.value:[I.value];for(let L=0,z=V.length;L<z;L++){const G=V[L],W=m(G),$=y%E;$!==0&&E-$<W.boundary&&(y+=E-$),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=W.storage}}}const A=y%E;return A>0&&(y+=E-A),x.__size=y,x.__cache={},this}function m(x){const g={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(g.boundary=4,g.storage=4):x.isVector2?(g.boundary=8,g.storage=8):x.isVector3||x.isColor?(g.boundary=16,g.storage=12):x.isVector4?(g.boundary=16,g.storage=16):x.isMatrix3?(g.boundary=48,g.storage=48):x.isMatrix4?(g.boundary=64,g.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),g}function d(x){const g=x.target;g.removeEventListener("dispose",d);const y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(n[g.id]),delete n[g.id],delete a[g.id]}function h(){for(const x in n)s.deleteBuffer(n[x]);o=[],n={},a={}}return{bind:c,update:l,dispose:h}}class jo{constructor(t={}){const{canvas:e=Lc(),context:i=null,depth:n=!0,stencil:a=!0,alpha:o=!1,antialias:r=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const h=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this._useLegacyLights=!1,this.toneMapping=mi,this.toneMappingExposure=1;const g=this;let y=!1,E=0,A=0,b=null,D=-1,M=null;const S=new me,N=new me;let I=null;const V=new Jt(0);let L=0,z=e.width,G=e.height,W=1,$=null,K=null;const J=new me(0,0,z,G),it=new me(0,0,z,G);let nt=!1;const Z=new Aa;let C=!1,F=!1,q=null;const U=new he,X=new Ut,lt=new k,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function wt(){return b===null?W:1}let H=i;function Lt(P,Y){for(let tt=0;tt<P.length;tt++){const et=P[tt],Q=e.getContext(et,Y);if(Q!==null)return Q}return null}try{const P={alpha:!0,depth:n,stencil:a,antialias:r,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ya}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",O,!1),e.addEventListener("webglcontextcreationerror",ft,!1),H===null){const Y=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&Y.shift(),H=Lt(Y,P),H===null)throw Lt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let mt,yt,pt,Ht,xt,w,T,B,rt,st,at,gt,dt,Mt,bt,zt,ot,kt,Vt,Nt,At,Et,R,ut;function Pt(){mt=new Yu(H),yt=new Bu(H,mt,t),mt.init(yt),Et=new Lp(H,mt,yt),pt=new Cp(H,mt,yt),Ht=new qu(H),xt=new mp,w=new Rp(H,mt,pt,xt,yt,Et,Ht),T=new Hu(g),B=new Wu(g),rt=new ih(H,yt),R=new zu(H,mt,rt,yt),st=new Xu(H,rt,Ht,R),at=new Ju(H,st,rt,Ht),Vt=new ju(H,yt,w),zt=new Gu(xt),gt=new pp(g,T,B,mt,yt,R,zt),dt=new Np(g,xt),Mt=new vp,bt=new Tp(mt,yt),kt=new Uu(g,T,B,pt,at,p,c),ot=new Pp(g,at,yt),ut=new Up(H,Ht,yt,pt),Nt=new Fu(H,mt,Ht,yt),At=new $u(H,mt,Ht,yt),Ht.programs=gt.programs,g.capabilities=yt,g.extensions=mt,g.properties=xt,g.renderLists=Mt,g.shadowMap=ot,g.state=pt,g.info=Ht}Pt();const St=new Op(g,H);this.xr=St,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const P=mt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=mt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(P){P!==void 0&&(W=P,this.setSize(z,G,!1))},this.getSize=function(P){return P.set(z,G)},this.setSize=function(P,Y,tt=!0){if(St.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=P,G=Y,e.width=Math.floor(P*W),e.height=Math.floor(Y*W),tt===!0&&(e.style.width=P+"px",e.style.height=Y+"px"),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(z*W,G*W).floor()},this.setDrawingBufferSize=function(P,Y,tt){z=P,G=Y,W=tt,e.width=Math.floor(P*tt),e.height=Math.floor(Y*tt),this.setViewport(0,0,P,Y)},this.getCurrentViewport=function(P){return P.copy(S)},this.getViewport=function(P){return P.copy(J)},this.setViewport=function(P,Y,tt,et){P.isVector4?J.set(P.x,P.y,P.z,P.w):J.set(P,Y,tt,et),pt.viewport(S.copy(J).multiplyScalar(W).floor())},this.getScissor=function(P){return P.copy(it)},this.setScissor=function(P,Y,tt,et){P.isVector4?it.set(P.x,P.y,P.z,P.w):it.set(P,Y,tt,et),pt.scissor(N.copy(it).multiplyScalar(W).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(P){pt.setScissorTest(nt=P)},this.setOpaqueSort=function(P){$=P},this.setTransparentSort=function(P){K=P},this.getClearColor=function(P){return P.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(P=!0,Y=!0,tt=!0){let et=0;if(P){let Q=!1;if(b!==null){const Tt=b.texture.format;Q=Tt===Po||Tt===wo||Tt===Ao}if(Q){const Tt=b.texture.type,Ct=Tt===gi||Tt===ui||Tt===Ma||Tt===Pi||Tt===So||Tt===bo,Dt=kt.getClearColor(),Ft=kt.getClearAlpha(),Xt=Dt.r,Gt=Dt.g,Wt=Dt.b;Ct?(_[0]=Xt,_[1]=Gt,_[2]=Wt,_[3]=Ft,H.clearBufferuiv(H.COLOR,0,_)):(v[0]=Xt,v[1]=Gt,v[2]=Wt,v[3]=Ft,H.clearBufferiv(H.COLOR,0,v))}else et|=H.COLOR_BUFFER_BIT}Y&&(et|=H.DEPTH_BUFFER_BIT),tt&&(et|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",O,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Mt.dispose(),bt.dispose(),xt.dispose(),T.dispose(),B.dispose(),at.dispose(),R.dispose(),ut.dispose(),gt.dispose(),St.dispose(),St.removeEventListener("sessionstart",re),St.removeEventListener("sessionend",jt),q&&(q.dispose(),q=null),le.stop()};function ct(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const P=Ht.autoReset,Y=ot.enabled,tt=ot.autoUpdate,et=ot.needsUpdate,Q=ot.type;Pt(),Ht.autoReset=P,ot.enabled=Y,ot.autoUpdate=tt,ot.needsUpdate=et,ot.type=Q}function ft(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function _t(P){const Y=P.target;Y.removeEventListener("dispose",_t),It(Y)}function It(P){Rt(P),xt.remove(P)}function Rt(P){const Y=xt.get(P).programs;Y!==void 0&&(Y.forEach(function(tt){gt.releaseProgram(tt)}),P.isShaderMaterial&&gt.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,tt,et,Q,Tt){Y===null&&(Y=ht);const Ct=Q.isMesh&&Q.matrixWorld.determinant()<0,Dt=rl(P,Y,tt,et,Q);pt.setMaterial(et,Ct);let Ft=tt.index,Xt=1;if(et.wireframe===!0){if(Ft=st.getWireframeAttribute(tt),Ft===void 0)return;Xt=2}const Gt=tt.drawRange,Wt=tt.attributes.position;let oe=Gt.start*Xt,Ce=(Gt.start+Gt.count)*Xt;Tt!==null&&(oe=Math.max(oe,Tt.start*Xt),Ce=Math.min(Ce,(Tt.start+Tt.count)*Xt)),Ft!==null?(oe=Math.max(oe,0),Ce=Math.min(Ce,Ft.count)):Wt!=null&&(oe=Math.max(oe,0),Ce=Math.min(Ce,Wt.count));const fe=Ce-oe;if(fe<0||fe===1/0)return;R.setup(Q,et,Dt,tt,Ft);let Ze,ie=Nt;if(Ft!==null&&(Ze=rt.get(Ft),ie=At,ie.setIndex(Ze)),Q.isMesh)et.wireframe===!0?(pt.setLineWidth(et.wireframeLinewidth*wt()),ie.setMode(H.LINES)):ie.setMode(H.TRIANGLES);else if(Q.isLine){let $t=et.linewidth;$t===void 0&&($t=1),pt.setLineWidth($t*wt()),Q.isLineSegments?ie.setMode(H.LINES):Q.isLineLoop?ie.setMode(H.LINE_LOOP):ie.setMode(H.LINE_STRIP)}else Q.isPoints?ie.setMode(H.POINTS):Q.isSprite&&ie.setMode(H.TRIANGLES);if(Q.isBatchedMesh)ie.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)ie.renderInstances(oe,fe,Q.count);else if(tt.isInstancedBufferGeometry){const $t=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,ys=Math.min(tt.instanceCount,$t);ie.renderInstances(oe,fe,ys)}else ie.render(oe,fe)};function Kt(P,Y,tt){P.transparent===!0&&P.side===ni&&P.forceSinglePass===!1?(P.side=Pe,P.needsUpdate=!0,In(P,Y,tt),P.side=vi,P.needsUpdate=!0,In(P,Y,tt),P.side=ni):In(P,Y,tt)}this.compile=function(P,Y,tt=null){tt===null&&(tt=P),d=bt.get(tt),d.init(),x.push(d),tt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(d.pushLight(Q),Q.castShadow&&d.pushShadow(Q))}),P!==tt&&P.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(d.pushLight(Q),Q.castShadow&&d.pushShadow(Q))}),d.setupLights(g._useLegacyLights);const et=new Set;return P.traverse(function(Q){const Tt=Q.material;if(Tt)if(Array.isArray(Tt))for(let Ct=0;Ct<Tt.length;Ct++){const Dt=Tt[Ct];Kt(Dt,tt,Q),et.add(Dt)}else Kt(Tt,tt,Q),et.add(Tt)}),x.pop(),d=null,et},this.compileAsync=function(P,Y,tt=null){const et=this.compile(P,Y,tt);return new Promise(Q=>{function Tt(){if(et.forEach(function(Ct){xt.get(Ct).currentProgram.isReady()&&et.delete(Ct)}),et.size===0){Q(P);return}setTimeout(Tt,10)}mt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Zt=null;function se(P){Zt&&Zt(P)}function re(){le.stop()}function jt(){le.start()}const le=new Vo;le.setAnimationLoop(se),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(P){Zt=P,St.setAnimationLoop(P),P===null?le.stop():le.start()},St.addEventListener("sessionstart",re),St.addEventListener("sessionend",jt),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(St.cameraAutoUpdate===!0&&St.updateCamera(Y),Y=St.getCamera()),P.isScene===!0&&P.onBeforeRender(g,P,Y,b),d=bt.get(P,x.length),d.init(),x.push(d),U.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Z.setFromProjectionMatrix(U),F=this.localClippingEnabled,C=zt.init(this.clippingPlanes,F),m=Mt.get(P,h.length),m.init(),h.push(m),Xe(P,Y,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort($,K),this.info.render.frame++,C===!0&&zt.beginShadows();const tt=d.state.shadowsArray;if(ot.render(tt,P,Y),C===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),kt.render(m,P),d.setupLights(g._useLegacyLights),Y.isArrayCamera){const et=Y.cameras;for(let Q=0,Tt=et.length;Q<Tt;Q++){const Ct=et[Q];Ia(m,P,Ct,Ct.viewport)}}else Ia(m,P,Y);b!==null&&(w.updateMultisampleRenderTarget(b),w.updateRenderTargetMipmap(b)),P.isScene===!0&&P.onAfterRender(g,P,Y),R.resetDefaultState(),D=-1,M=null,x.pop(),x.length>0?d=x[x.length-1]:d=null,h.pop(),h.length>0?m=h[h.length-1]:m=null};function Xe(P,Y,tt,et){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)tt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)d.pushLight(P),P.castShadow&&d.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Z.intersectsSprite(P)){et&&lt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(U);const Ct=at.update(P),Dt=P.material;Dt.visible&&m.push(P,Ct,Dt,tt,lt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Z.intersectsObject(P))){const Ct=at.update(P),Dt=P.material;if(et&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),lt.copy(P.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),lt.copy(Ct.boundingSphere.center)),lt.applyMatrix4(P.matrixWorld).applyMatrix4(U)),Array.isArray(Dt)){const Ft=Ct.groups;for(let Xt=0,Gt=Ft.length;Xt<Gt;Xt++){const Wt=Ft[Xt],oe=Dt[Wt.materialIndex];oe&&oe.visible&&m.push(P,Ct,oe,tt,lt.z,Wt)}}else Dt.visible&&m.push(P,Ct,Dt,tt,lt.z,null)}}const Tt=P.children;for(let Ct=0,Dt=Tt.length;Ct<Dt;Ct++)Xe(Tt[Ct],Y,tt,et)}function Ia(P,Y,tt,et){const Q=P.opaque,Tt=P.transmissive,Ct=P.transparent;d.setupLightsView(tt),C===!0&&zt.setGlobalState(g.clippingPlanes,tt),Tt.length>0&&al(Q,Tt,Y,tt),et&&pt.viewport(S.copy(et)),Q.length>0&&Ln(Q,Y,tt),Tt.length>0&&Ln(Tt,Y,tt),Ct.length>0&&Ln(Ct,Y,tt),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function al(P,Y,tt,et){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;const Tt=yt.isWebGL2;q===null&&(q=new Li(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")?An:gi,minFilter:bn,samples:Tt?4:0})),g.getDrawingBufferSize(X),Tt?q.setSize(X.x,X.y):q.setSize(pa(X.x),pa(X.y));const Ct=g.getRenderTarget();g.setRenderTarget(q),g.getClearColor(V),L=g.getClearAlpha(),L<1&&g.setClearColor(16777215,.5),g.clear();const Dt=g.toneMapping;g.toneMapping=mi,Ln(P,tt,et),w.updateMultisampleRenderTarget(q),w.updateRenderTargetMipmap(q);let Ft=!1;for(let Xt=0,Gt=Y.length;Xt<Gt;Xt++){const Wt=Y[Xt],oe=Wt.object,Ce=Wt.geometry,fe=Wt.material,Ze=Wt.group;if(fe.side===ni&&oe.layers.test(et.layers)){const ie=fe.side;fe.side=Pe,fe.needsUpdate=!0,Da(oe,tt,et,Ce,fe,Ze),fe.side=ie,fe.needsUpdate=!0,Ft=!0}}Ft===!0&&(w.updateMultisampleRenderTarget(q),w.updateRenderTargetMipmap(q)),g.setRenderTarget(Ct),g.setClearColor(V,L),g.toneMapping=Dt}function Ln(P,Y,tt){const et=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Tt=P.length;Q<Tt;Q++){const Ct=P[Q],Dt=Ct.object,Ft=Ct.geometry,Xt=et===null?Ct.material:et,Gt=Ct.group;Dt.layers.test(tt.layers)&&Da(Dt,Y,tt,Ft,Xt,Gt)}}function Da(P,Y,tt,et,Q,Tt){P.onBeforeRender(g,Y,tt,et,Q,Tt),P.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Q.onBeforeRender(g,Y,tt,et,P,Tt),Q.transparent===!0&&Q.side===ni&&Q.forceSinglePass===!1?(Q.side=Pe,Q.needsUpdate=!0,g.renderBufferDirect(tt,Y,et,Q,P,Tt),Q.side=vi,Q.needsUpdate=!0,g.renderBufferDirect(tt,Y,et,Q,P,Tt),Q.side=ni):g.renderBufferDirect(tt,Y,et,Q,P,Tt),P.onAfterRender(g,Y,tt,et,Q,Tt)}function In(P,Y,tt){Y.isScene!==!0&&(Y=ht);const et=xt.get(P),Q=d.state.lights,Tt=d.state.shadowsArray,Ct=Q.state.version,Dt=gt.getParameters(P,Q.state,Tt,Y,tt),Ft=gt.getProgramCacheKey(Dt);let Xt=et.programs;et.environment=P.isMeshStandardMaterial?Y.environment:null,et.fog=Y.fog,et.envMap=(P.isMeshStandardMaterial?B:T).get(P.envMap||et.environment),Xt===void 0&&(P.addEventListener("dispose",_t),Xt=new Map,et.programs=Xt);let Gt=Xt.get(Ft);if(Gt!==void 0){if(et.currentProgram===Gt&&et.lightsStateVersion===Ct)return Na(P,Dt),Gt}else Dt.uniforms=gt.getUniforms(P),P.onBuild(tt,Dt,g),P.onBeforeCompile(Dt,g),Gt=gt.acquireProgram(Dt,Ft),Xt.set(Ft,Gt),et.uniforms=Dt.uniforms;const Wt=et.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Wt.clippingPlanes=zt.uniform),Na(P,Dt),et.needsLights=ll(P),et.lightsStateVersion=Ct,et.needsLights&&(Wt.ambientLightColor.value=Q.state.ambient,Wt.lightProbe.value=Q.state.probe,Wt.directionalLights.value=Q.state.directional,Wt.directionalLightShadows.value=Q.state.directionalShadow,Wt.spotLights.value=Q.state.spot,Wt.spotLightShadows.value=Q.state.spotShadow,Wt.rectAreaLights.value=Q.state.rectArea,Wt.ltc_1.value=Q.state.rectAreaLTC1,Wt.ltc_2.value=Q.state.rectAreaLTC2,Wt.pointLights.value=Q.state.point,Wt.pointLightShadows.value=Q.state.pointShadow,Wt.hemisphereLights.value=Q.state.hemi,Wt.directionalShadowMap.value=Q.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Wt.spotShadowMap.value=Q.state.spotShadowMap,Wt.spotLightMatrix.value=Q.state.spotLightMatrix,Wt.spotLightMap.value=Q.state.spotLightMap,Wt.pointShadowMap.value=Q.state.pointShadowMap,Wt.pointShadowMatrix.value=Q.state.pointShadowMatrix),et.currentProgram=Gt,et.uniformsList=null,Gt}function Oa(P){if(P.uniformsList===null){const Y=P.currentProgram.getUniforms();P.uniformsList=ss.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function Na(P,Y){const tt=xt.get(P);tt.outputColorSpace=Y.outputColorSpace,tt.batching=Y.batching,tt.instancing=Y.instancing,tt.instancingColor=Y.instancingColor,tt.skinning=Y.skinning,tt.morphTargets=Y.morphTargets,tt.morphNormals=Y.morphNormals,tt.morphColors=Y.morphColors,tt.morphTargetsCount=Y.morphTargetsCount,tt.numClippingPlanes=Y.numClippingPlanes,tt.numIntersection=Y.numClipIntersection,tt.vertexAlphas=Y.vertexAlphas,tt.vertexTangents=Y.vertexTangents,tt.toneMapping=Y.toneMapping}function rl(P,Y,tt,et,Q){Y.isScene!==!0&&(Y=ht),w.resetTextureUnits();const Tt=Y.fog,Ct=et.isMeshStandardMaterial?Y.environment:null,Dt=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ai,Ft=(et.isMeshStandardMaterial?B:T).get(et.envMap||Ct),Xt=et.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Gt=!!tt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Wt=!!tt.morphAttributes.position,oe=!!tt.morphAttributes.normal,Ce=!!tt.morphAttributes.color;let fe=mi;et.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(fe=g.toneMapping);const Ze=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,ie=Ze!==void 0?Ze.length:0,$t=xt.get(et),ys=d.state.lights;if(C===!0&&(F===!0||P!==M)){const Oe=P===M&&et.id===D;zt.setState(et,P,Oe)}let ae=!1;et.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==ys.state.version||$t.outputColorSpace!==Dt||Q.isBatchedMesh&&$t.batching===!1||!Q.isBatchedMesh&&$t.batching===!0||Q.isInstancedMesh&&$t.instancing===!1||!Q.isInstancedMesh&&$t.instancing===!0||Q.isSkinnedMesh&&$t.skinning===!1||!Q.isSkinnedMesh&&$t.skinning===!0||Q.isInstancedMesh&&$t.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&$t.instancingColor===!1&&Q.instanceColor!==null||$t.envMap!==Ft||et.fog===!0&&$t.fog!==Tt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==zt.numPlanes||$t.numIntersection!==zt.numIntersection)||$t.vertexAlphas!==Xt||$t.vertexTangents!==Gt||$t.morphTargets!==Wt||$t.morphNormals!==oe||$t.morphColors!==Ce||$t.toneMapping!==fe||yt.isWebGL2===!0&&$t.morphTargetsCount!==ie)&&(ae=!0):(ae=!0,$t.__version=et.version);let _i=$t.currentProgram;ae===!0&&(_i=In(et,Y,Q));let Ua=!1,pn=!1,xs=!1;const ve=_i.getUniforms(),yi=$t.uniforms;if(pt.useProgram(_i.program)&&(Ua=!0,pn=!0,xs=!0),et.id!==D&&(D=et.id,pn=!0),Ua||M!==P){ve.setValue(H,"projectionMatrix",P.projectionMatrix),ve.setValue(H,"viewMatrix",P.matrixWorldInverse);const Oe=ve.map.cameraPosition;Oe!==void 0&&Oe.setValue(H,lt.setFromMatrixPosition(P.matrixWorld)),yt.logarithmicDepthBuffer&&ve.setValue(H,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&ve.setValue(H,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,pn=!0,xs=!0)}if(Q.isSkinnedMesh){ve.setOptional(H,Q,"bindMatrix"),ve.setOptional(H,Q,"bindMatrixInverse");const Oe=Q.skeleton;Oe&&(yt.floatVertexTextures?(Oe.boneTexture===null&&Oe.computeBoneTexture(),ve.setValue(H,"boneTexture",Oe.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(ve.setOptional(H,Q,"batchingTexture"),ve.setValue(H,"batchingTexture",Q._matricesTexture,w));const Ms=tt.morphAttributes;if((Ms.position!==void 0||Ms.normal!==void 0||Ms.color!==void 0&&yt.isWebGL2===!0)&&Vt.update(Q,tt,_i),(pn||$t.receiveShadow!==Q.receiveShadow)&&($t.receiveShadow=Q.receiveShadow,ve.setValue(H,"receiveShadow",Q.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(yi.envMap.value=Ft,yi.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),pn&&(ve.setValue(H,"toneMappingExposure",g.toneMappingExposure),$t.needsLights&&ol(yi,xs),Tt&&et.fog===!0&&dt.refreshFogUniforms(yi,Tt),dt.refreshMaterialUniforms(yi,et,W,G,q),ss.upload(H,Oa($t),yi,w)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(ss.upload(H,Oa($t),yi,w),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&ve.setValue(H,"center",Q.center),ve.setValue(H,"modelViewMatrix",Q.modelViewMatrix),ve.setValue(H,"normalMatrix",Q.normalMatrix),ve.setValue(H,"modelMatrix",Q.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const Oe=et.uniformsGroups;for(let Es=0,cl=Oe.length;Es<cl;Es++)if(yt.isWebGL2){const za=Oe[Es];ut.update(za,_i),ut.bind(za,_i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _i}function ol(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function ll(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(P,Y,tt){xt.get(P.texture).__webglTexture=Y,xt.get(P.depthTexture).__webglTexture=tt;const et=xt.get(P);et.__hasExternalTextures=!0,et.__hasExternalTextures&&(et.__autoAllocateDepthBuffer=tt===void 0,et.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,Y){const tt=xt.get(P);tt.__webglFramebuffer=Y,tt.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,tt=0){b=P,E=Y,A=tt;let et=!0,Q=null,Tt=!1,Ct=!1;if(P){const Ft=xt.get(P);Ft.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(H.FRAMEBUFFER,null),et=!1):Ft.__webglFramebuffer===void 0?w.setupRenderTarget(P):Ft.__hasExternalTextures&&w.rebindTextures(P,xt.get(P.texture).__webglTexture,xt.get(P.depthTexture).__webglTexture);const Xt=P.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ct=!0);const Gt=xt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Gt[Y])?Q=Gt[Y][tt]:Q=Gt[Y],Tt=!0):yt.isWebGL2&&P.samples>0&&w.useMultisampledRTT(P)===!1?Q=xt.get(P).__webglMultisampledFramebuffer:Array.isArray(Gt)?Q=Gt[tt]:Q=Gt,S.copy(P.viewport),N.copy(P.scissor),I=P.scissorTest}else S.copy(J).multiplyScalar(W).floor(),N.copy(it).multiplyScalar(W).floor(),I=nt;if(pt.bindFramebuffer(H.FRAMEBUFFER,Q)&&yt.drawBuffers&&et&&pt.drawBuffers(P,Q),pt.viewport(S),pt.scissor(N),pt.setScissorTest(I),Tt){const Ft=xt.get(P.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ft.__webglTexture,tt)}else if(Ct){const Ft=xt.get(P.texture),Xt=Y||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ft.__webglTexture,tt||0,Xt)}D=-1},this.readRenderTargetPixels=function(P,Y,tt,et,Q,Tt,Ct){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=xt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt){pt.bindFramebuffer(H.FRAMEBUFFER,Dt);try{const Ft=P.texture,Xt=Ft.format,Gt=Ft.type;if(Xt!==Ye&&Et.convert(Xt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Wt=Gt===An&&(mt.has("EXT_color_buffer_half_float")||yt.isWebGL2&&mt.has("EXT_color_buffer_float"));if(Gt!==gi&&Et.convert(Gt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Gt===fi&&(yt.isWebGL2||mt.has("OES_texture_float")||mt.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-et&&tt>=0&&tt<=P.height-Q&&H.readPixels(Y,tt,et,Q,Et.convert(Xt),Et.convert(Gt),Tt)}finally{const Ft=b!==null?xt.get(b).__webglFramebuffer:null;pt.bindFramebuffer(H.FRAMEBUFFER,Ft)}}},this.copyFramebufferToTexture=function(P,Y,tt=0){const et=Math.pow(2,-tt),Q=Math.floor(Y.image.width*et),Tt=Math.floor(Y.image.height*et);w.setTexture2D(Y,0),H.copyTexSubImage2D(H.TEXTURE_2D,tt,0,0,P.x,P.y,Q,Tt),pt.unbindTexture()},this.copyTextureToTexture=function(P,Y,tt,et=0){const Q=Y.image.width,Tt=Y.image.height,Ct=Et.convert(tt.format),Dt=Et.convert(tt.type);w.setTexture2D(tt,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,tt.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,tt.unpackAlignment),Y.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,et,P.x,P.y,Q,Tt,Ct,Dt,Y.image.data):Y.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,et,P.x,P.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Ct,Y.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,et,P.x,P.y,Ct,Dt,Y.image),et===0&&tt.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),pt.unbindTexture()},this.copyTextureToTexture3D=function(P,Y,tt,et,Q=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Tt=P.max.x-P.min.x+1,Ct=P.max.y-P.min.y+1,Dt=P.max.z-P.min.z+1,Ft=Et.convert(et.format),Xt=Et.convert(et.type);let Gt;if(et.isData3DTexture)w.setTexture3D(et,0),Gt=H.TEXTURE_3D;else if(et.isDataArrayTexture||et.isCompressedArrayTexture)w.setTexture2DArray(et,0),Gt=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,et.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,et.unpackAlignment);const Wt=H.getParameter(H.UNPACK_ROW_LENGTH),oe=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ce=H.getParameter(H.UNPACK_SKIP_PIXELS),fe=H.getParameter(H.UNPACK_SKIP_ROWS),Ze=H.getParameter(H.UNPACK_SKIP_IMAGES),ie=tt.isCompressedTexture?tt.mipmaps[Q]:tt.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,ie.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ie.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,P.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,P.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,P.min.z),tt.isDataTexture||tt.isData3DTexture?H.texSubImage3D(Gt,Q,Y.x,Y.y,Y.z,Tt,Ct,Dt,Ft,Xt,ie.data):tt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Gt,Q,Y.x,Y.y,Y.z,Tt,Ct,Dt,Ft,ie.data)):H.texSubImage3D(Gt,Q,Y.x,Y.y,Y.z,Tt,Ct,Dt,Ft,Xt,ie),H.pixelStorei(H.UNPACK_ROW_LENGTH,Wt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,oe),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ce),H.pixelStorei(H.UNPACK_SKIP_ROWS,fe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ze),Q===0&&et.generateMipmaps&&H.generateMipmap(Gt),pt.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?w.setTextureCube(P,0):P.isData3DTexture?w.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?w.setTexture2DArray(P,0):w.setTexture2D(P,0),pt.unbindTexture()},this.resetState=function(){E=0,A=0,b=null,pt.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ea?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===gs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ge?Ri:Ro}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ri?ge:ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class zp extends jo{}zp.prototype.isWebGL1Renderer=!0;class Fp extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class us extends Ke{constructor(t=1,e=1,i=1,n=32,a=1,o=!1,r=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:a,openEnded:o,thetaStart:r,thetaLength:c};const l=this;n=Math.floor(n),a=Math.floor(a);const u=[],f=[],p=[],_=[];let v=0;const m=[],d=i/2;let h=0;x(),o===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new Me(f,3)),this.setAttribute("normal",new Me(p,3)),this.setAttribute("uv",new Me(_,2));function x(){const y=new k,E=new k;let A=0;const b=(e-t)/i;for(let D=0;D<=a;D++){const M=[],S=D/a,N=S*(e-t)+t;for(let I=0;I<=n;I++){const V=I/n,L=V*c+r,z=Math.sin(L),G=Math.cos(L);E.x=N*z,E.y=-S*i+d,E.z=N*G,f.push(E.x,E.y,E.z),y.set(z,b,G).normalize(),p.push(y.x,y.y,y.z),_.push(V,1-S),M.push(v++)}m.push(M)}for(let D=0;D<n;D++)for(let M=0;M<a;M++){const S=m[M][D],N=m[M+1][D],I=m[M+1][D+1],V=m[M][D+1];u.push(S,N,V),u.push(N,I,V),A+=6}l.addGroup(h,A,0),h+=A}function g(y){const E=v,A=new Ut,b=new k;let D=0;const M=y===!0?t:e,S=y===!0?1:-1;for(let I=1;I<=n;I++)f.push(0,d*S,0),p.push(0,S,0),_.push(.5,.5),v++;const N=v;for(let I=0;I<=n;I++){const L=I/n*c+r,z=Math.cos(L),G=Math.sin(L);b.x=M*G,b.y=d*S,b.z=M*z,f.push(b.x,b.y,b.z),p.push(0,S,0),A.x=z*.5+.5,A.y=G*.5*S+.5,_.push(A.x,A.y),v++}for(let I=0;I<n;I++){const V=E+I,L=N+I;y===!0?u.push(L,L+1,V):u.push(L+1,L,V),D+=3}l.addGroup(h,D,y===!0?1:2),h+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ca extends Ke{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const a=[],o=[];r(n),l(i),u(),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(a.slice(),3)),this.setAttribute("uv",new Me(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function r(x){const g=new k,y=new k,E=new k;for(let A=0;A<e.length;A+=3)_(e[A+0],g),_(e[A+1],y),_(e[A+2],E),c(g,y,E,x)}function c(x,g,y,E){const A=E+1,b=[];for(let D=0;D<=A;D++){b[D]=[];const M=x.clone().lerp(y,D/A),S=g.clone().lerp(y,D/A),N=A-D;for(let I=0;I<=N;I++)I===0&&D===A?b[D][I]=M:b[D][I]=M.clone().lerp(S,I/N)}for(let D=0;D<A;D++)for(let M=0;M<2*(A-D)-1;M++){const S=Math.floor(M/2);M%2===0?(p(b[D][S+1]),p(b[D+1][S]),p(b[D][S])):(p(b[D][S+1]),p(b[D+1][S+1]),p(b[D+1][S]))}}function l(x){const g=new k;for(let y=0;y<a.length;y+=3)g.x=a[y+0],g.y=a[y+1],g.z=a[y+2],g.normalize().multiplyScalar(x),a[y+0]=g.x,a[y+1]=g.y,a[y+2]=g.z}function u(){const x=new k;for(let g=0;g<a.length;g+=3){x.x=a[g+0],x.y=a[g+1],x.z=a[g+2];const y=d(x)/2/Math.PI+.5,E=h(x)/Math.PI+.5;o.push(y,1-E)}v(),f()}function f(){for(let x=0;x<o.length;x+=6){const g=o[x+0],y=o[x+2],E=o[x+4],A=Math.max(g,y,E),b=Math.min(g,y,E);A>.9&&b<.1&&(g<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),E<.2&&(o[x+4]+=1))}}function p(x){a.push(x.x,x.y,x.z)}function _(x,g){const y=x*3;g.x=t[y+0],g.y=t[y+1],g.z=t[y+2]}function v(){const x=new k,g=new k,y=new k,E=new k,A=new Ut,b=new Ut,D=new Ut;for(let M=0,S=0;M<a.length;M+=9,S+=6){x.set(a[M+0],a[M+1],a[M+2]),g.set(a[M+3],a[M+4],a[M+5]),y.set(a[M+6],a[M+7],a[M+8]),A.set(o[S+0],o[S+1]),b.set(o[S+2],o[S+3]),D.set(o[S+4],o[S+5]),E.copy(x).add(g).add(y).divideScalar(3);const N=d(E);m(A,S+0,x,N),m(b,S+2,g,N),m(D,S+4,y,N)}}function m(x,g,y,E){E<0&&x.x===1&&(o[g]=x.x-1),y.x===0&&y.z===0&&(o[g]=E/2/Math.PI+.5)}function d(x){return Math.atan2(x.z,-x.x)}function h(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ca(t.vertices,t.indices,t.radius,t.details)}}class Ra extends Ca{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ra(t.radius,t.detail)}}class Tn extends Ke{constructor(t=1,e=32,i=16,n=0,a=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:a,thetaStart:o,thetaLength:r},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+r,Math.PI);let l=0;const u=[],f=new k,p=new k,_=[],v=[],m=[],d=[];for(let h=0;h<=i;h++){const x=[],g=h/i;let y=0;h===0&&o===0?y=.5/e:h===i&&c===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){const A=E/e;f.x=-t*Math.cos(n+A*a)*Math.sin(o+g*r),f.y=t*Math.cos(o+g*r),f.z=t*Math.sin(n+A*a)*Math.sin(o+g*r),v.push(f.x,f.y,f.z),p.copy(f).normalize(),m.push(p.x,p.y,p.z),d.push(A+y,1-g),x.push(l++)}u.push(x)}for(let h=0;h<i;h++)for(let x=0;x<e;x++){const g=u[h][x+1],y=u[h][x],E=u[h+1][x],A=u[h+1][x+1];(h!==0||o>0)&&_.push(g,y,A),(h!==i-1||c<Math.PI)&&_.push(y,E,A)}this.setIndex(_),this.setAttribute("position",new Me(v,3)),this.setAttribute("normal",new Me(m,3)),this.setAttribute("uv",new Me(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ne extends Rn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Jt(16777215),this.specular=new Jt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jo extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ta=new he,oo=new k,lo=new k;class Bp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Aa,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;oo.setFromMatrixPosition(t.matrixWorld),e.position.copy(oo),lo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lo),e.updateMatrixWorld(),ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ta),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ta)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Gp extends Bp{constructor(){super(new Wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class co extends Jo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new Gp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ho extends Jo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hp{constructor(t,e,i=0,n=1/0){this.ray=new Sa(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new ba,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return ga(t,this,i,e),i.sort(uo),i}intersectObjects(t,e=!0,i=[]){for(let n=0,a=t.length;n<a;n++)ga(t[n],this,i,e);return i.sort(uo),i}}function uo(s,t){return s.distance-t.distance}function ga(s,t,e,i){if(s.layers.test(t.layers)&&s.raycast(t,e),i===!0){const n=s.children;for(let a=0,o=n.length;a<o;a++)ga(n[a],t,e,!0)}}class va{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ya);const fo={type:"change"},ea={type:"start"},po={type:"end"},es=new Sa,mo=new di,kp=Math.cos(70*Rc.DEG2RAD);class Vp extends Oi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",bt),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",bt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(fo),i.update(),a=n.NONE},this.update=function(){const R=new k,ut=new Ii().setFromUnitVectors(t.up,new k(0,1,0)),Pt=ut.clone().invert(),St=new k,ct=new Ii,O=new k,ft=2*Math.PI;return function(It=null){const Rt=i.object.position;R.copy(Rt).sub(i.target),R.applyQuaternion(ut),r.setFromVector3(R),i.autoRotate&&a===n.NONE&&I(S(It)),i.enableDamping?(r.theta+=c.theta*i.dampingFactor,r.phi+=c.phi*i.dampingFactor):(r.theta+=c.theta,r.phi+=c.phi);let Kt=i.minAzimuthAngle,Zt=i.maxAzimuthAngle;isFinite(Kt)&&isFinite(Zt)&&(Kt<-Math.PI?Kt+=ft:Kt>Math.PI&&(Kt-=ft),Zt<-Math.PI?Zt+=ft:Zt>Math.PI&&(Zt-=ft),Kt<=Zt?r.theta=Math.max(Kt,Math.min(Zt,r.theta)):r.theta=r.theta>(Kt+Zt)/2?Math.max(Kt,r.theta):Math.min(Zt,r.theta)),r.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,r.phi)),r.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&A||i.object.isOrthographicCamera?r.radius=J(r.radius):r.radius=J(r.radius*l),R.setFromSpherical(r),R.applyQuaternion(Pt),Rt.copy(i.target).add(R),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let se=!1;if(i.zoomToCursor&&A){let re=null;if(i.object.isPerspectiveCamera){const jt=R.length();re=J(jt*l);const le=jt-re;i.object.position.addScaledVector(y,le),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const jt=new k(E.x,E.y,0);jt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),se=!0;const le=new k(E.x,E.y,0);le.unproject(i.object),i.object.position.sub(le).add(jt),i.object.updateMatrixWorld(),re=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;re!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(re).add(i.object.position):(es.origin.copy(i.object.position),es.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(es.direction))<kp?t.lookAt(i.target):(mo.setFromNormalAndCoplanarPoint(i.object.up,i.target),es.intersectPlane(mo,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),se=!0);return l=1,A=!1,se||St.distanceToSquared(i.object.position)>o||8*(1-ct.dot(i.object.quaternion))>o||O.distanceToSquared(i.target)>0?(i.dispatchEvent(fo),St.copy(i.object.position),ct.copy(i.object.quaternion),O.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",kt),i.domElement.removeEventListener("pointerdown",w),i.domElement.removeEventListener("pointercancel",B),i.domElement.removeEventListener("wheel",at),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",B),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",bt),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=n.NONE;const o=1e-6,r=new va,c=new va;let l=1;const u=new k,f=new Ut,p=new Ut,_=new Ut,v=new Ut,m=new Ut,d=new Ut,h=new Ut,x=new Ut,g=new Ut,y=new k,E=new Ut;let A=!1;const b=[],D={};let M=!1;function S(R){return R!==null?2*Math.PI/60*i.autoRotateSpeed*R:2*Math.PI/60/60*i.autoRotateSpeed}function N(R){const ut=Math.abs(R*.01);return Math.pow(.95,i.zoomSpeed*ut)}function I(R){c.theta-=R}function V(R){c.phi-=R}const L=function(){const R=new k;return function(Pt,St){R.setFromMatrixColumn(St,0),R.multiplyScalar(-Pt),u.add(R)}}(),z=function(){const R=new k;return function(Pt,St){i.screenSpacePanning===!0?R.setFromMatrixColumn(St,1):(R.setFromMatrixColumn(St,0),R.crossVectors(i.object.up,R)),R.multiplyScalar(Pt),u.add(R)}}(),G=function(){const R=new k;return function(Pt,St){const ct=i.domElement;if(i.object.isPerspectiveCamera){const O=i.object.position;R.copy(O).sub(i.target);let ft=R.length();ft*=Math.tan(i.object.fov/2*Math.PI/180),L(2*Pt*ft/ct.clientHeight,i.object.matrix),z(2*St*ft/ct.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(L(Pt*(i.object.right-i.object.left)/i.object.zoom/ct.clientWidth,i.object.matrix),z(St*(i.object.top-i.object.bottom)/i.object.zoom/ct.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function W(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(R,ut){if(!i.zoomToCursor)return;A=!0;const Pt=i.domElement.getBoundingClientRect(),St=R-Pt.left,ct=ut-Pt.top,O=Pt.width,ft=Pt.height;E.x=St/O*2-1,E.y=-(ct/ft)*2+1,y.set(E.x,E.y,1).unproject(i.object).sub(i.object.position).normalize()}function J(R){return Math.max(i.minDistance,Math.min(i.maxDistance,R))}function it(R){f.set(R.clientX,R.clientY)}function nt(R){K(R.clientX,R.clientX),h.set(R.clientX,R.clientY)}function Z(R){v.set(R.clientX,R.clientY)}function C(R){p.set(R.clientX,R.clientY),_.subVectors(p,f).multiplyScalar(i.rotateSpeed);const ut=i.domElement;I(2*Math.PI*_.x/ut.clientHeight),V(2*Math.PI*_.y/ut.clientHeight),f.copy(p),i.update()}function F(R){x.set(R.clientX,R.clientY),g.subVectors(x,h),g.y>0?W(N(g.y)):g.y<0&&$(N(g.y)),h.copy(x),i.update()}function q(R){m.set(R.clientX,R.clientY),d.subVectors(m,v).multiplyScalar(i.panSpeed),G(d.x,d.y),v.copy(m),i.update()}function U(R){K(R.clientX,R.clientY),R.deltaY<0?$(N(R.deltaY)):R.deltaY>0&&W(N(R.deltaY)),i.update()}function X(R){let ut=!1;switch(R.code){case i.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),ut=!0;break;case i.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),ut=!0;break;case i.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?I(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),ut=!0;break;case i.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?I(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),ut=!0;break}ut&&(R.preventDefault(),i.update())}function lt(R){if(b.length===1)f.set(R.pageX,R.pageY);else{const ut=Et(R),Pt=.5*(R.pageX+ut.x),St=.5*(R.pageY+ut.y);f.set(Pt,St)}}function ht(R){if(b.length===1)v.set(R.pageX,R.pageY);else{const ut=Et(R),Pt=.5*(R.pageX+ut.x),St=.5*(R.pageY+ut.y);v.set(Pt,St)}}function wt(R){const ut=Et(R),Pt=R.pageX-ut.x,St=R.pageY-ut.y,ct=Math.sqrt(Pt*Pt+St*St);h.set(0,ct)}function H(R){i.enableZoom&&wt(R),i.enablePan&&ht(R)}function Lt(R){i.enableZoom&&wt(R),i.enableRotate&&lt(R)}function mt(R){if(b.length==1)p.set(R.pageX,R.pageY);else{const Pt=Et(R),St=.5*(R.pageX+Pt.x),ct=.5*(R.pageY+Pt.y);p.set(St,ct)}_.subVectors(p,f).multiplyScalar(i.rotateSpeed);const ut=i.domElement;I(2*Math.PI*_.x/ut.clientHeight),V(2*Math.PI*_.y/ut.clientHeight),f.copy(p)}function yt(R){if(b.length===1)m.set(R.pageX,R.pageY);else{const ut=Et(R),Pt=.5*(R.pageX+ut.x),St=.5*(R.pageY+ut.y);m.set(Pt,St)}d.subVectors(m,v).multiplyScalar(i.panSpeed),G(d.x,d.y),v.copy(m)}function pt(R){const ut=Et(R),Pt=R.pageX-ut.x,St=R.pageY-ut.y,ct=Math.sqrt(Pt*Pt+St*St);x.set(0,ct),g.set(0,Math.pow(x.y/h.y,i.zoomSpeed)),W(g.y),h.copy(x);const O=(R.pageX+ut.x)*.5,ft=(R.pageY+ut.y)*.5;K(O,ft)}function Ht(R){i.enableZoom&&pt(R),i.enablePan&&yt(R)}function xt(R){i.enableZoom&&pt(R),i.enableRotate&&mt(R)}function w(R){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",T),i.domElement.addEventListener("pointerup",B)),Vt(R),R.pointerType==="touch"?zt(R):rt(R))}function T(R){i.enabled!==!1&&(R.pointerType==="touch"?ot(R):st(R))}function B(R){Nt(R),b.length===0&&(i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",B)),i.dispatchEvent(po),a=n.NONE}function rt(R){let ut;switch(R.button){case 0:ut=i.mouseButtons.LEFT;break;case 1:ut=i.mouseButtons.MIDDLE;break;case 2:ut=i.mouseButtons.RIGHT;break;default:ut=-1}switch(ut){case zi.DOLLY:if(i.enableZoom===!1)return;nt(R),a=n.DOLLY;break;case zi.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enablePan===!1)return;Z(R),a=n.PAN}else{if(i.enableRotate===!1)return;it(R),a=n.ROTATE}break;case zi.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enableRotate===!1)return;it(R),a=n.ROTATE}else{if(i.enablePan===!1)return;Z(R),a=n.PAN}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(ea)}function st(R){switch(a){case n.ROTATE:if(i.enableRotate===!1)return;C(R);break;case n.DOLLY:if(i.enableZoom===!1)return;F(R);break;case n.PAN:if(i.enablePan===!1)return;q(R);break}}function at(R){i.enabled===!1||i.enableZoom===!1||a!==n.NONE||(R.preventDefault(),i.dispatchEvent(ea),U(gt(R)),i.dispatchEvent(po))}function gt(R){const ut=R.deltaMode,Pt={clientX:R.clientX,clientY:R.clientY,deltaY:R.deltaY};switch(ut){case 1:Pt.deltaY*=16;break;case 2:Pt.deltaY*=100;break}return R.ctrlKey&&!M&&(Pt.deltaY*=10),Pt}function dt(R){R.key==="Control"&&(M=!0,document.addEventListener("keyup",Mt,{passive:!0,capture:!0}))}function Mt(R){R.key==="Control"&&(M=!1,document.removeEventListener("keyup",Mt,{passive:!0,capture:!0}))}function bt(R){i.enabled===!1||i.enablePan===!1||X(R)}function zt(R){switch(At(R),b.length){case 1:switch(i.touches.ONE){case Fi.ROTATE:if(i.enableRotate===!1)return;lt(R),a=n.TOUCH_ROTATE;break;case Fi.PAN:if(i.enablePan===!1)return;ht(R),a=n.TOUCH_PAN;break;default:a=n.NONE}break;case 2:switch(i.touches.TWO){case Fi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;H(R),a=n.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Lt(R),a=n.TOUCH_DOLLY_ROTATE;break;default:a=n.NONE}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(ea)}function ot(R){switch(At(R),a){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;mt(R),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;yt(R),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ht(R),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;xt(R),i.update();break;default:a=n.NONE}}function kt(R){i.enabled!==!1&&R.preventDefault()}function Vt(R){b.push(R.pointerId)}function Nt(R){delete D[R.pointerId];for(let ut=0;ut<b.length;ut++)if(b[ut]==R.pointerId){b.splice(ut,1);return}}function At(R){let ut=D[R.pointerId];ut===void 0&&(ut=new Ut,D[R.pointerId]=ut),ut.set(R.pageX,R.pageY)}function Et(R){const ut=R.pointerId===b[0]?b[1]:b[0];return D[ut]}i.domElement.addEventListener("contextmenu",kt),i.domElement.addEventListener("pointerdown",w),i.domElement.addEventListener("pointercancel",B),i.domElement.addEventListener("wheel",at,{passive:!1}),document.addEventListener("keydown",dt,{passive:!0,capture:!0}),this.update()}}const j={SEED:null,MAZE_DEGREE:4,MIN_MAZE_DEGREE:4,MAX_MAZE_DEGREE:16,BRANCHING_FACTOR:.1,BRAID_FACTOR:.1,SHADOW_SIZE_FACTOR:.075,TELEPORT_MAP_OPACITY:.25,PLAYER_COLLISION_RADIUS:.275,PLAYER_COLLISION_OFFSET_X:0,PLAYER_COLLISION_OFFSET_Y:-.125,PLAYER_START_X:.5,PLAYER_START_Y:1.7,PLAYER_SHADOW_OFFSET_X:-.28,PLAYER_SHADOW_OFFSET_Y:-.15,PLAYER_SHADOW_WIDTH_FACTOR:.45,PLAYER_SHADOW_HEIGHT_FACTOR:.25,SHOW_COLLISION_DEBUG:!1,MOVE_SPEED_FACTOR:2,ROT_SPEED:3,HUNTER_SPEED:800,getHunterCount(s){return s>=16?3:s>=8?2:1},getTeleportCount(s){if(s<=8)return Math.max(2,Math.floor(s/2));const t=s-8;return Math.floor(.125*t*t+.5*t+4)},getPathfinderCount(s){return this.getTeleportCount(s)},COLORS:{WALL:"#444",PATH_KNOWN:"#88ccff",PATH_VISITED:"#888",NEON_UP:"#00ffff",NEON_DOWN:"#ff00ff",NEON_UP_UNUSED:"#006666",NEON_DOWN_UNUSED:"#660066",START:"#ff0",EXIT:"#0f0",PLAYER:"#f00",PLAYER_OUTLINE:"#ffffff",HUNTER:"#a0f",TELEPORT:"#ff8c00",TELEPORT_INACTIVE:"#555555",REVEALED_PATH:"#ffffff",ELEVATOR_BIDIRECTIONAL:"#ffffff",THREE_PLAYER:16711680,THREE_HUNTER:11141375,THREE_START:16776960,THREE_EXIT:65280,THREE_VISITED:8947848,THREE_KNOWN:8965375,THREE_ELEVATOR_UP:65535,THREE_ELEVATOR_DOWN:16711935,THREE_TELEPORT:16747520,THREE_KEY:16766720,THREE_ELEVATOR_SHAFT:{bottom:16711935,top:65535}}},_a={en:{gameTitle:"VOID ESCAPE",gameCredits:"a game by Bernard Rodrigues",activeHunters:"Active Hunters",activeTeleports:"Active Teleports",activeKeys:"Active Keys",availablePathfinders:"Available Pathfinders",mazeDegree:"Maze Degree",safeMode:"Safe Mode",generateMaze:"NEW GAME",continue:"CONTINUE",degreeHint:"Controls the grid size. Higher values create larger, more complex mazes.",safeModeHint:"When active, no hunters will spawn in the maze.",storyMsg1:"The mystical church of chaos worship!",storyMsg2:"The greatest monument to chaos worship.",storyMsg3:"I am a priestess of the word of the Jelly god.",storyMsg4:"But their word is a lie! The chaos is a lie!",storyMsg5:"So I was condemned to exile...",storyMsg6:"Condemned to the void...",hudKeys:"KEYS",hudPathfinders:"PATHFINDERS",hudFloor:"Floor",hudVisited:"Visited",proximityDetector:"PROXIMITY DETECTOR",mapLegendTitle:"MAP LEGEND",legendVisited:"Visited Path",legendKnown:"Known Path",legendStart:"Starting Point",legendExit:"Maze Exit",legendHunter:"Void Hunter",legendTeleport:"Teleport",legendElevator:"Elevator",controlsHintTitle:"CONTROLS HINT",actionMove:"Move / Rotate",actionElevator:"Elevator Up / Down",actionMap:"3D Holographic Map",actionZoom:"Zoom Minimap",msgVoidHuntersDetected:"Void Hunters Detected",msgKeySecured:"Key secured ({collected}/{total})",msgExitUnlocked:"Exit unlocked",msgKeysRemaining:"{count} key(s) remaining",msgNoOtherActiveTeleport:"No other active teleports",msgExitFound:"Exit found",msgNoPathfindersRemaining:"No pathfinders remaining",msgExitNotFoundYet:"Exit not found yet",msgSafePointTeleport:"Safe point... Teleport?",msgOopsNoisyShit:"Oops... noisy sh*t!",msgWhereAmI:"Where am I?",msgElevatorUp:"Up?",msgElevatorDown:"Down?",msgWhichWay:"Which way?",msgDidYouHearThat:"Did you hear that?",msgIWasDetected:"Damn! I was detected.",msgFoundPathfinder:"Found a pathfinder!",msgWorldSaved:"World saved. What now?",statusLabel:"HUNTER STATUS:",statusScanning:"SCANNING",statusActive:"ACTIVE",statusSleeping:"SLEEPING",statusTracking:"TRACKING MODE",statusConverging:"HUNTERS CONVERGING ({ticks} Ticks)",pauseTitle:"PAUSED",resume:"RESUME",victoryTitle:"Mission Accomplished",victoryText:"You have successfully navigated the 3D void.",victoryCompletion:"MAP COMPLETION: {percent}%",mapCompletion:"MAP COMPLETION",playAgain:"PLAY AGAIN",mainMenu:"MAIN MENU",gameOverTitle:"Terminated",gameOverText:"You were caught by the void hunters.",saving:"SAVING...",teleportAnomaly:"TELEPORT ANOMALY",ticks:"TICKS",map3dInstructions:"Drag to rotate | Scroll to zoom | M to return",teleportWarning:"TELEPORT",map:"MAP",teleport:"TELEPORT",teleportationLink:"TELEPORTATION LINK",teleportJumpSector:"Jump to Sector {floor}F?",teleportTargetGrid:"Target Grid: ({x}, {y})",teleportGo:"GO",teleportCancel:"CANCEL"},ptBr:{gameTitle:"VOID ESCAPE",gameCredits:"um jogo de Bernard Rodrigues",activeHunters:"Caçadores Ativos",activeTeleports:"Teleportes Ativos",activeKeys:"Chaves Ativas",availablePathfinders:"Localizadores Disponíveis",mazeDegree:"Grau do Labirinto",safeMode:"Modo Seguro",generateMaze:"NOVO JOGO",continue:"CONTINUAR",degreeHint:"Controla o tamanho da grade. Valores maiores criam labirintos maiores e mais complexos.",safeModeHint:"Quando ativo, nenhum caçador surgirá no labirinto.",storyMsg1:"A igreja mística do culto ao caos!",storyMsg2:"O maior monumento ao culto do caos.",storyMsg3:"Sou uma sacerdotisa da palavra do deus Geleia.",storyMsg4:"Mas sua palavra é uma mentira! O caos é uma mentira!",storyMsg5:"Então fui condenada ao exílio...",storyMsg6:"Condenada ao vazio...",hudKeys:"CHAVES",hudPathfinders:"LOCALIZADORES",hudFloor:"Andar",hudVisited:"Visitado",proximityDetector:"DETECTOR DE PROXIMIDADE",mapLegendTitle:"LEGENDA DO MAPA",legendVisited:"Caminho Visitado",legendKnown:"Caminho Conhecido",legendStart:"Ponto de Partida",legendExit:"Saída do Labirinto",legendHunter:"Caçador do Vazio",legendTeleport:"Teleporte",legendElevator:"Elevador",controlsHintTitle:"DICA DE CONTROLES",actionMove:"Mover / Girar",actionElevator:"Elevador Subir / Descer",actionMap:"Mapa Holográfico 3D",actionZoom:"Zoom do Minimapa",msgVoidHuntersDetected:"Caçadores do Vazio Detectados",msgKeySecured:"Chave obtida ({collected}/{total})",msgExitUnlocked:"Saída destrancada",msgKeysRemaining:"{count} chave(s) restante(s)",msgNoOtherActiveTeleport:"Nenhum outro teleporte ativo",msgExitFound:"Saída encontrada",msgNoPathfindersRemaining:"Nenhum localizador restante",msgExitNotFoundYet:"Saída ainda não encontrada",msgSafePointTeleport:"Ponto seguro... Teleportar?",msgOopsNoisyShit:"Ops... troço barulhento!",msgWhereAmI:"Onde estou?",msgElevatorUp:"Subir?",msgElevatorDown:"Descer?",msgWhichWay:"Que direção?",msgDidYouHearThat:"Ouviu alguma coisa?",msgIWasDetected:"Droga! Fui detectada.",msgFoundPathfinder:"Localizador encontrado!",msgWorldSaved:"Salvei o mundo. E agora?",statusLabel:"STATUS DO CAÇADOR:",statusScanning:"ESCANEANDO",statusActive:"ATIVO",statusSleeping:"DORMINDO",statusTracking:"MODO DE RASTREAMENTO",statusConverging:"CAÇADORES CONVERGINDO ({ticks} Ticks)",pauseTitle:"PAUSA",resume:"RETOMAR",victoryTitle:"Missão Cumprida",victoryText:"Você atravessou o vazio 3D com sucesso.",victoryCompletion:"MAPA COMPLETO: {percent}%",mapCompletion:"MAPA COMPLETO",playAgain:"JOGAR NOVAMENTE",mainMenu:"MENU PRINCIPAL",gameOverTitle:"Eliminado",gameOverText:"Você foi pego pelos caçadores do vazio.",saving:"SALVANDO...",teleportAnomaly:"ANOMALIA DE TELEPORTE",ticks:"TICKS",map3dInstructions:"Arraste para girar | Role para zoom | M para voltar",teleportWarning:"TELEPORTE",map:"MAPA",teleport:"TELEPORTE",teleportationLink:"LINK DE TELEPORTE",teleportJumpSector:"Pular para o Setor {floor}F?",teleportTargetGrid:"Coordenada Alvo: ({x}, {y})",teleportGo:"IR",teleportCancel:"CANCELAR"},ja:{gameTitle:"ヴォイド・エスケープ",gameCredits:"ベルナルド・ホドリゲス制作",activeHunters:"アクティブなハンター",activeTeleports:"アクティブなテレポート",activeKeys:"アクティブな鍵",availablePathfinders:"使用可能なパスファインダー",mazeDegree:"迷路の難易度",safeMode:"セーフモード",generateMaze:"ニューゲーム",continue:"つづきから",degreeHint:"グリッドのサイズを調整します。値が大きいほど、より広く複雑な迷路になります。",safeModeHint:"有効にすると、迷路にハンターが出現しなくなります。",storyMsg1:"混沌崇拝の神秘的な教会!",storyMsg2:"混沌崇拝の最大の記念碑。",storyMsg3:"私はゼリー神の言葉に仕える巫女よ。",storyMsg4:"でも彼らの言葉は嘘!混沌なんて嘘っぱちなんだから!",storyMsg5:"だから追放の刑に処されたの…",storyMsg6:"虚空へと追放されて…",hudKeys:"鍵",hudPathfinders:"パスファインダー",hudFloor:"階層",hudVisited:"訪問済み",proximityDetector:"近接探知機",mapLegendTitle:"マップ凡例",legendVisited:"訪問済みの道",legendKnown:"既知の道",legendStart:"スタート地点",legendExit:"迷路の出口",legendHunter:"虚空のハンター",legendTeleport:"テレポート",legendElevator:"エレベーター",controlsHintTitle:"操作方法",actionMove:"移動 / 回転",actionElevator:"エレベーター 上昇 / 下降",actionMap:"3Dホログラフィックマップ",actionZoom:"ミニマップのズーム",msgVoidHuntersDetected:"虚空のハンターを検知",msgKeySecured:"鍵を入手 ({collected}/{total})",msgExitUnlocked:"出口の鍵が開いた",msgKeysRemaining:"残り{count}個の鍵",msgNoOtherActiveTeleport:"他に有効なテレポートはない",msgExitFound:"出口を発見",msgNoPathfindersRemaining:"パスファインダーが残っていない",msgExitNotFoundYet:"出口はまだ見つかっていない",msgSafePointTeleport:"安全地帯…テレポートする?",msgOopsNoisyShit:"あら…うるさいったらないわね!",msgWhereAmI:"ここどこ?",msgElevatorUp:"上る?",msgElevatorDown:"下る?",msgWhichWay:"どっちの道?",msgDidYouHearThat:"今の聞こえた?",msgIWasDetected:"しまった、見つかっちゃった!",msgFoundPathfinder:"パスファインダー発見!",msgWorldSaved:"世界を救っちゃった。さて、次は?",statusLabel:"ハンターの状態:",statusScanning:"スキャン中",statusActive:"アクティブ",statusSleeping:"スリープ中",statusTracking:"追跡モード",statusConverging:"ハンターが接近中 ({ticks} ティック)",pauseTitle:"一時停止",resume:"再開",victoryTitle:"任務完了",victoryText:"3Dの虚空を無事に踏破した。",victoryCompletion:"マップ達成度: {percent}%",mapCompletion:"マップ達成度",playAgain:"もう一度プレイ",mainMenu:"メインメニュー",gameOverTitle:"終了",gameOverText:"虚空のハンターに捕まってしまった。",saving:"セーブ中…",teleportAnomaly:"テレポート異常",ticks:"ティック",map3dInstructions:"ドラッグで回転 | スクロールでズーム | Mキーで戻る",teleportWarning:"テレポート",map:"マップ",teleport:"テレポート",teleportationLink:"テレポートリンク",teleportJumpSector:"{floor}階のセクターへ移動する?",teleportTargetGrid:"目標座標: ({x}, {y})",teleportGo:"移動",teleportCancel:"キャンセル"},es:{gameTitle:"ESCAPE DEL VACÍO",gameCredits:"un juego de Bernard Rodrigues",activeHunters:"Cazadores Activos",activeTeleports:"Teletransportes Activos",activeKeys:"Llaves Activas",availablePathfinders:"Localizadores Disponibles",mazeDegree:"Grado del Laberinto",safeMode:"Modo Seguro",generateMaze:"NUEVA PARTIDA",continue:"CONTINUAR",degreeHint:"Controla el tamaño de la cuadrícula. Valores más altos crean laberintos más grandes y complejos.",safeModeHint:"Cuando está activo, no aparecerán cazadores en el laberinto.",storyMsg1:"¡La mística iglesia del culto al caos!",storyMsg2:"El mayor monumento al culto del caos.",storyMsg3:"Soy una sacerdotisa de la palabra del dios Gelatina.",storyMsg4:"¡Pero su palabra es una mentira! ¡El caos es mentira!",storyMsg5:"Así que fui condenada al exilio...",storyMsg6:"Condenada al vacío...",hudKeys:"LLAVES",hudPathfinders:"LOCALIZADORES",hudFloor:"Piso",hudVisited:"Visitado",proximityDetector:"DETECTOR DE PROXIMIDAD",mapLegendTitle:"LEYENDA DEL MAPA",legendVisited:"Camino Visitado",legendKnown:"Camino Conocido",legendStart:"Punto de Partida",legendExit:"Salida del Laberinto",legendHunter:"Cazador del Vacío",legendTeleport:"Teletransporte",legendElevator:"Ascensor",controlsHintTitle:"AYUDA DE CONTROLES",actionMove:"Mover / Girar",actionElevator:"Ascensor Subir / Bajar",actionMap:"Mapa Holográfico 3D",actionZoom:"Zoom del Minimapa",msgVoidHuntersDetected:"Cazadores del Vacío Detectados",msgKeySecured:"Llave obtenida ({collected}/{total})",msgExitUnlocked:"Salida desbloqueada",msgKeysRemaining:"{count} llave(s) restante(s)",msgNoOtherActiveTeleport:"No hay otros teletransportes activos",msgExitFound:"Salida encontrada",msgNoPathfindersRemaining:"No quedan localizadores",msgExitNotFoundYet:"Salida aún no encontrada",msgSafePointTeleport:"Punto seguro... ¿Teletransportarse?",msgOopsNoisyShit:"Ups... ¡qué cosa tan ruidosa!",msgWhereAmI:"¿Dónde estoy?",msgElevatorUp:"¿Subir?",msgElevatorDown:"¿Bajar?",msgWhichWay:"¿Por dónde?",msgDidYouHearThat:"¿Escuchaste eso?",msgIWasDetected:"¡Rayos! Fui detectada.",msgFoundPathfinder:"¡Localizador encontrado!",msgWorldSaved:"Salvé el mundo. ¿Y ahora qué?",statusLabel:"ESTADO DEL CAZADOR:",statusScanning:"ESCANEANDO",statusActive:"ACTIVO",statusSleeping:"DURMIENDO",statusTracking:"MODO DE RASTREO",statusConverging:"CAZADORES CONVERGIENDO ({ticks} Ticks)",pauseTitle:"PAUSA",resume:"REANUDAR",victoryTitle:"Misión Cumplida",victoryText:"Atravesaste el vacío 3D con éxito.",victoryCompletion:"MAPA COMPLETADO: {percent}%",mapCompletion:"MAPA COMPLETADO",playAgain:"JUGAR DE NUEVO",mainMenu:"MENÚ PRINCIPAL",gameOverTitle:"Eliminada",gameOverText:"Fuiste atrapada por los cazadores del vacío.",saving:"GUARDANDO...",teleportAnomaly:"ANOMALÍA DE TELETRANSPORTE",ticks:"TICKS",map3dInstructions:"Arrastra para girar | Desplázate para zoom | M para volver",teleportWarning:"TELETRANSPORTE",map:"MAPA",teleport:"TELETRANSPORTE",teleportationLink:"ENLACE DE TELETRANSPORTE",teleportJumpSector:"¿Saltar al Sector {floor}F?",teleportTargetGrid:"Coordenada Objetivo: ({x}, {y})",teleportGo:"IR",teleportCancel:"CANCELAR"}};let wn="en";function is(s){_a[s]?wn=s:wn="en"}function Wp(){if(typeof navigator<"u"){const s=navigator.language||navigator.userLanguage;if(s){const t=s.toLowerCase();if(t.startsWith("pt")){is("ptBr");return}if(t.startsWith("ja")){is("ja");return}if(t.startsWith("es")){is("es");return}}}is("en")}Wp();function Ot(s,t={},e=wn){var n,a;let i=((n=_a[e])==null?void 0:n[s])||((a=_a.en)==null?void 0:a[s])||s;return Object.keys(t).forEach(o=>{i=i.replace(`{${o}}`,t[o])}),i}function Qo(s=wn){typeof document<"u"&&document.querySelectorAll("[data-i18n]").forEach(e=>{const i=e.getAttribute("data-i18n"),n=Ot(i,{},s);n!==i&&(e.tagName==="INPUT"&&e.type==="button"?e.value=n:e.textContent=n)})}class tl{constructor(){this._data=[]}get size(){return this._data.length}push(t){this._data.push(t),this._bubbleUp(this._data.length-1)}pop(){const t=this._data[0],e=this._data.pop();return this._data.length>0&&(this._data[0]=e,this._siftDown(0)),t}_bubbleUp(t){for(;t>0;){const e=t-1>>1;if(this._data[e].f<=this._data[t].f)break;[this._data[e],this._data[t]]=[this._data[t],this._data[e]],t=e}}_siftDown(t){const e=this._data.length;for(;;){let i=t;const n=2*t+1,a=2*t+2;if(n<e&&this._data[n].f<this._data[i].f&&(i=n),a<e&&this._data[a].f<this._data[i].f&&(i=a),i===t)break;[this._data[i],this._data[t]]=[this._data[t],this._data[i]],t=i}}}const Yp=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1}],el=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];function fs(s,t,e,i,n,a){return Math.abs(s-i)+Math.abs(t-n)+Math.abs(e-a)}function il(s,t,e,i,n=0,a=null){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return[];const o=new Map,r=new Map,c=`${s.x},${s.y},${s.z}`;r.set(c,0);const l=new tl;for(l.push({f:fs(s.x,s.y,s.z,t.x,t.y,t.z),node:s});l.size>0;){const{node:u}=l.pop(),f=`${u.x},${u.y},${u.z}`;if(u.x===t.x&&u.y===t.y&&u.z===t.z)return Xp(o,f);const p=r.get(f);for(const{dx:_,dy:v,dz:m}of el){const d=u.x+_,h=u.y+v,x=u.z+m;if(d<0||d>=i||h<0||h>=i||x<0||x>=i||a&&d===a.x&&h===a.y&&x===a.z)continue;const g=e[d*i*i+h*i+x];if(g===n||g===8)continue;if(m!==0){const A=u.z+m/2;if(e[u.x*i*i+u.y*i+A]===n)continue}const y=`${d},${h},${x}`,E=p+1;E<(r.get(y)??1/0)&&(o.set(y,u),r.set(y,E),l.push({f:E+fs(d,h,x,t.x,t.y,t.z),node:{x:d,y:h,z:x}}))}}return null}function Xp(s,t){const e=[];let i=t;for(;s.has(i);){const n=s.get(i),[a,o,r]=i.split(",").map(Number);e.push({x:a,y:o,z:r}),i=`${n.x},${n.y},${n.z}`}return e.reverse(),e}function $p(s,t,e,i,n=0,a=1/0,o=null){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return 0;const r=new Map,c=`${s.x},${s.y},${s.z}`;r.set(c,0);const l=new tl;for(l.push({f:fs(s.x,s.y,s.z,t.x,t.y,t.z),node:s});l.size>0;){const{node:u}=l.pop(),f=`${u.x},${u.y},${u.z}`,p=r.get(f);if(p>a)return 1/0;if(u.x===t.x&&u.y===t.y&&u.z===t.z)return p;for(const{dx:_,dy:v,dz:m}of el){const d=u.x+_,h=u.y+v,x=u.z+m;if(d<0||d>=i||h<0||h>=i||x<0||x>=i||o&&d===o.x&&h===o.y&&x===o.z)continue;const g=e[d*i*i+h*i+x];if(g===n||g===8)continue;if(m!==0){const A=u.z+m/2;if(e[u.x*i*i+u.y*i+A]===n)continue}const y=`${d},${h},${x}`,E=p+1;E<(r.get(y)??1/0)&&(r.set(y,E),l.push({f:E+fs(d,h,x,t.x,t.y,t.z),node:{x:d,y:h,z:x}}))}}return 1/0}function qp(s,t,e,i,n=0,a=10){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return 0;const o=[{x:s.x,y:s.y,z:s.z,dist:0}];let r=0;const c=new Map;for(c.set(`${s.x},${s.y},${s.z}`,0);r<o.length;){const l=o[r++];if(!(l.dist>a))for(const{dx:u,dy:f,dz:p}of Yp){const _=l.x+u,v=l.y+f,m=l.z+p;if(_<0||_>=i||v<0||v>=i||m<0||m>=i)continue;const d=e[_*i*i+v*i+m];if(d===n||d===8)continue;const h=`${_},${v},${m}`,g=m%2===0?0:1,y=l.dist+g;if(y<(c.get(h)??1/0)){if(c.set(h,y),_===t.x&&v===t.y&&m===t.z)return y;g===0?o.splice(r,0,{x:_,y:v,z:m,dist:y}):o.push({x:_,y:v,z:m,dist:y})}}}return 1/0}function Kp(s,t,e,i,n,a){const o=[{x:s.x,y:s.y,z:s.z,path:[]}];let r=0;const c=new Uint8Array(i*i*i);for(c[s.x*i*i+s.y*i+s.z]=1;r<o.length;){const l=o[r++],u=`${l.x},${l.y},${l.z}`;if(!t.has(u))return l.path;const f=a(l.x,l.y,l.z,e,n,!1);for(const p of f){const _=p.x*i*i+p.y*i+p.z;c[_]||(c[_]=1,o.push({x:p.x,y:p.y,z:p.z,path:[...l.path,p]}))}}return null}class Zp{constructor(t,e,i){this.maze=t,this.id=i,this.history=[],this.visitedNodes=new Set,this.pathToTarget=[],e?(this.x=e.x,this.y=e.y,this.z=e.z,this.visualX=e.x,this.visualY=e.y,this.visualZ=e.z,this.state="WANDERING",this.lastPos={x:this.x,y:this.y,z:this.z},this.visitedNodes.add(`${this.x},${this.y},${this.z}`)):(this.x=null,this.y=null,this.z=null,this.visualX=null,this.visualY=null,this.visualZ=null,this.state="SLEEP",this.lastPos=null),this.jellyTime=0,typeof document<"u"&&(this.lowCanvas=document.createElement("canvas"),this.lowCanvas.width=64,this.lowCanvas.height=64,this.lctx=this.lowCanvas.getContext("2d"))}generateCloudTexture(t=.016){if(this.state==="SLEEP"||(this.jellyTime+=t,typeof document>"u"))return;const e=64,i=this.lctx;i.globalCompositeOperation="destination-out",i.fillStyle="rgba(0, 0, 0, 0.22)",i.fillRect(0,0,e,e),i.globalCompositeOperation="source-over";const n=this.jellyTime;try{const a=i.getImageData(0,0,e,e),o=a.data;for(let r=0;r<e;r++)for(let c=0;c<e;c++){const l=c-e/2,u=r-e/2,f=Math.sqrt(l*l+u*u),p=Math.sin(n*1.5+c*.08)*2.5,_=e*.35+p;if(f<_+Math.random()*1.5){const v=90+Math.floor(Math.random()*45),m=10+Math.floor(Math.random()*20),d=140+Math.floor(Math.random()*60),h=(r*e+c)*4;o[h]=v,o[h+1]=m,o[h+2]=d,o[h+3]=255}}i.putImageData(a,0,0)}catch{}if(Math.random()<.04){i.fillStyle=Math.random()<.7?"#ffffff":"#b3ffff";const a=e/2-8+Math.random()*16,o=e/2-8+Math.random()*16;i.fillRect(a,o,2+Math.random()*3,4+Math.random()*10)}if(Math.random()<.12){const a=Math.floor(Math.random()*3)+1,o=["#00ff66","#ff0055","#00ccff","#ffff00","#ffffff"];for(let r=0;r<a;r++){const c=Math.floor(Math.random()*e),l=Math.floor(Math.random()*e),u=c-e/2,f=l-e/2;if(Math.sqrt(u*u+f*f)<e*.32){const _=Math.floor(Math.random()*4)+2,v=Math.floor(Math.random()*2)+1;i.fillStyle=o[Math.floor(Math.random()*o.length)],i.fillRect(c,l,_,v)}}}if(Math.random()<.08){const a=Math.floor(Math.random()*e),o=Math.floor(Math.random()*6)+2,r=Math.floor(Math.random()*6)-3;try{const c=i.getImageData(0,a,e,o);i.clearRect(0,a,e,o),i.putImageData(c,r,a)}catch{}}}move(t,e,i){if(this.state==="SLEEP")return;const n=this.getValidNeighbors(e,i);if(n.length===0)return;e.get(this.x,this.y,this.z)===i.VISITED&&this.state!=="TELEPORT_TRACKING"&&this.state!=="TRACKING"&&(this.state="TRACKING",this.pathToTarget=[],this.visitedNodes.clear(),this.visitedNodes.add(`${this.x},${this.y},${this.z}`));let o;if(this.pathToTarget.length>0){const r=this.pathToTarget[0],c=e.get(r.x,r.y,r.z);(this.state==="TRACKING"?c===i.VISITED||c===i.START||c===i.EXIT:c!==i.WALL)?o=this.pathToTarget.shift():this.pathToTarget=[]}if(!o)if(this.state==="TELEPORT_TRACKING")o=null;else{let r=this.findPathToNearestUnvisited(e,i);if((!r||r.length===0)&&(this.visitedNodes.clear(),this.visitedNodes.add(`${this.x},${this.y},${this.z}`),r=this.findPathToNearestUnvisited(e,i)),r&&r.length>0)this.pathToTarget=r,o=this.pathToTarget.shift();else{const c=n.filter(l=>l.x!==this.lastPos.x||l.y!==this.lastPos.y||l.z!==this.lastPos.z);o=c.length>0?c[Math.floor(Math.random()*c.length)]:n[0]}}o&&(this.history.push({x:this.x,y:this.y,z:this.z}),this.history.length>2&&this.history.shift(),this.lastPos={x:this.x,y:this.y,z:this.z},this.x=o.x,this.y=o.y,this.z=o.z,this.visitedNodes.add(`${this.x},${this.y},${this.z}`))}findPathToTarget(t,e,i){return il({x:this.x,y:this.y,z:this.z},t,e,e.size,i.WALL,this.maze.startPos)}findPathToNearestUnvisited(t,e){return Kp({x:this.x,y:this.y,z:this.z},this.visitedNodes,t,t.size,e,(i,n,a,o,r)=>this.getValidNeighbors(o,r,i,n,a,this.state==="TRACKING"))}getValidNeighbors(t,e,i=this.x,n=this.y,a=this.z,o=this.state==="TRACKING"){const r=[],c=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const l of c){const u=i+l.dx,f=n+l.dy,p=a+l.dz;if(u>=0&&u<t.size&&f>=0&&f<t.size&&p>=0&&p<t.size){const _=Math.floor(this.maze.startPos.x),v=Math.floor(this.maze.startPos.y),m=this.maze.startPos.z;if(u===_&&f===v&&p===m)continue;const d=t.get(u,f,p);if(d===e.EXIT)continue;if(d!==e.WALL&&d!==8){if(l.dz!==0){const h=a+l.dz/2;if(t.get(i,n,h)===e.WALL)continue}o?(d===e.VISITED||d===e.START||d===e.EXIT)&&r.push({x:u,y:f,z:p}):r.push({x:u,y:f,z:p})}}}return r}}class jp{constructor(t,e,i=null){Bt(this,"n");Bt(this,"branchingFactor");Bt(this,"size");Bt(this,"seed");Bt(this,"random");Bt(this,"matrix");Bt(this,"TYPES");Bt(this,"startPos");const n=t!==void 0?t:j.MAZE_DEGREE!==void 0?j.MAZE_DEGREE:8,a=e!==void 0?e:j.BRANCHING_FACTOR!==void 0?j.BRANCHING_FACTOR:.2;this.n=Math.max(3,Math.min(16,n)),this.branchingFactor=Math.max(0,Math.min(1,a)),this.size=2*this.n+1,i!=null?(this.seed=i,this.random=this.createSeededRandom(i)):(this.seed=null,this.random=Math.random),this.matrix=this.initMatrix(),this.TYPES={WALL:0,PATH:1,VISITED:2,START:3,EXIT:4,ELEVATOR_VISITED:5,TELEPORT:6,KEY:7,STATUE:8},this.startPos={x:j.PLAYER_START_X!==void 0?j.PLAYER_START_X:.5,y:j.PLAYER_START_Y!==void 0?j.PLAYER_START_Y:1.5,z:0}}createSeededRandom(t){let e=0;if(typeof t=="string")for(let i=0;i<t.length;i++)e=Math.imul(31,e)+t.charCodeAt(i)|0;else e=t|0;return function(){let i=e+=1831565813;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}initMatrix(){return new Int8Array(this.size*this.size*this.size)}_idx(t,e,i){return t*this.size*this.size+e*this.size+i}generate(){const t=[],e=1+2*Math.floor(this.random()*this.n),i=1+2*Math.floor(this.random()*this.n),n=1+2*Math.floor(this.random()*this.n);for(this.matrix[this._idx(e,i,n)]=this.TYPES.PATH,t.push({x:e,y:i,z:n});t.length>0;){let r=this.random()>this.branchingFactor?t.length-1:Math.floor(this.random()*t.length);const c=t[r],l=this.getUnvisitedNeighbors(c.x,c.y,c.z);if(l.length>0){const u=l[Math.floor(this.random()*l.length)];this.matrix[this._idx(u.x,u.y,u.z)]=this.TYPES.PATH,this.matrix[this._idx((c.x+u.x)/2,(c.y+u.y)/2,(c.z+u.z)/2)]=this.TYPES.PATH,t.push(u)}else t.splice(r,1)}this.setEntryAndExit(),this.placeTeleports(),this.placeKeys(),this.applyBraid(),this.placeStatues();const a=this.size,o=this.matrix;return o.size=a,o.get=(r,c,l)=>o[r*a*a+c*a+l],o.set=(r,c,l,u)=>{o[r*a*a+c*a+l]=u},o}getUnvisitedNeighbors(t,e,i){const n=[],a=[{dx:2,dy:0,dz:0},{dx:-2,dy:0,dz:0},{dx:0,dy:2,dz:0},{dx:0,dy:-2,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const o of a){const r=t+o.dx,c=e+o.dy,l=i+o.dz;this.isValid(r,c,l)&&this.matrix[this._idx(r,c,l)]===this.TYPES.WALL&&n.push({x:r,y:c,z:l})}return n}isValid(t,e,i){return t>0&&t<this.size-1&&e>0&&e<this.size-1&&i>0&&i<this.size-1}setEntryAndExit(){const t=1+2*Math.floor(this.random()*this.n);this.matrix[this._idx(1,1,t)]=this.TYPES.PATH,this.matrix[this._idx(0,1,t)]=this.TYPES.TELEPORT,this.startPos={x:j.PLAYER_START_X!==void 0?j.PLAYER_START_X:.5,y:j.PLAYER_START_Y!==void 0?j.PLAYER_START_Y:1.5,z:t};const e=1+2*Math.floor(this.random()*this.n),i=2*this.n-1;this.matrix[this._idx(i,i,e)]=this.TYPES.PATH,this.matrix[this._idx(2*this.n,i,e)]=this.TYPES.EXIT}_findExitPos(){for(let t=0;t<this.size;t++)for(let e=0;e<this.size;e++)for(let i=0;i<this.size;i++)if(this.matrix[this._idx(t,e,i)]===this.TYPES.EXIT)return{x:t,y:e,z:i};return{x:2*this.n,y:2*this.n-1,z:this.startPos.z}}_collectDeadEndsAndPaths(){const t=[],e=[],i=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1}];for(let n=1;n<this.size-1;n++)for(let a=1;a<this.size-1;a++)for(let o=1;o<this.size-1;o++){if(this.matrix[this._idx(n,a,o)]!==this.TYPES.PATH)continue;const r=o+1<this.size&&this.matrix[this._idx(n,a,o+1)]!==this.TYPES.WALL,c=o-1>=0&&this.matrix[this._idx(n,a,o-1)]!==this.TYPES.WALL;if(r||c)continue;let l=0;for(const u of i){const f=n+u.dx,p=a+u.dy,_=o+u.dz;f>=0&&f<this.size&&p>=0&&p<this.size&&_>=0&&_<this.size&&this.matrix[this._idx(f,p,_)]!==this.TYPES.WALL&&l++}(l===1?t:e).push({x:n,y:a,z:o})}return{deadEnds:t,normalPaths:e}}_greedyFill(t,e,i,n,a){const o={x:0,y:1,z:this.startPos.z},r=this._findExitPos(),c=(f,p)=>Math.abs(f.x-p.x)+Math.abs(f.y-p.y)+Math.abs(f.z-p.z);let l=4,u=4;for(;t.length<i&&l>0;){a&&(t.length=0);const f=e.filter(p=>c(p,o)<l||c(p,r)<l?!1:!n.includes(this.matrix[this._idx(p.x,p.y,p.z)]));for(;t.length<i;){let p=null,_=-1;for(const v of f){if(t.some(d=>d.x===v.x&&d.y===v.y&&d.z===v.z))continue;let m=1/0;for(const d of t){const h=c(v,d);h<m&&(m=h)}if(m>=u){const d=Math.min(c(v,o),c(v,r),m);d>_&&(_=d,p=v)}}if(p)t.push(p);else break}t.length<i&&(u>1?u--:l--)}}placeTeleports(){const t=j.getTeleportCount(this.n),{deadEnds:e,normalPaths:i}=this._collectDeadEndsAndPaths(),n=[];this._greedyFill(n,e,t,[],!0),n.length<t&&this._greedyFill(n,i,t,[],!1);for(const a of n)this.matrix[this._idx(a.x,a.y,a.z)]=this.TYPES.TELEPORT}placeKeys(){const t=j.getHunterCount(this.n)*2,{deadEnds:e,normalPaths:i}=this._collectDeadEndsAndPaths(),n=[];this._greedyFill(n,e,t,[this.TYPES.TELEPORT],!0),n.length<t&&this._greedyFill(n,i,t,[this.TYPES.TELEPORT],!1);for(const a of n)this.matrix[this._idx(a.x,a.y,a.z)]=this.TYPES.KEY}applyBraid(){const t=this.size,e=[];for(let o=1;o<t-1;o++)for(let r=1;r<t-1;r++)for(let c=1;c<t-1;c++)if(this.matrix[this._idx(o,r,c)]===this.TYPES.WALL){const l=o%2===0&&r%2!==0&&c%2!==0,u=r%2===0&&o%2!==0&&c%2!==0,f=c%2===0&&o%2!==0&&r%2!==0;if(l){const p=this.matrix[this._idx(o-1,r,c)],_=this.matrix[this._idx(o+1,r,c)];p!==this.TYPES.WALL&&_!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&_!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&_!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&_!==this.TYPES.KEY&&e.push({x:o,y:r,z:c,type:"X"})}else if(u){const p=this.matrix[this._idx(o,r-1,c)],_=this.matrix[this._idx(o,r+1,c)];p!==this.TYPES.WALL&&_!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&_!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&_!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&_!==this.TYPES.KEY&&e.push({x:o,y:r,z:c,type:"Y"})}else if(f){const p=this.matrix[this._idx(o,r,c-1)],_=this.matrix[this._idx(o,r,c+1)];p!==this.TYPES.WALL&&_!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&_!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&_!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&_!==this.TYPES.KEY&&e.push({x:o,y:r,z:c,type:"Z"})}}for(let o=e.length-1;o>0;o--){const r=Math.floor(this.random()*(o+1)),c=e[o];e[o]=e[r],e[r]=c}const i=j.BRAID_FACTOR||.1,n=Math.floor(e.length*i);let a=0;for(const o of e){if(a>=n)break;this.isWideConnection(o.x,o.y,o.z)||o.type==="Z"&&this.isAdjacentElevator(o.x,o.y,o.z)||(this.matrix[this._idx(o.x,o.y,o.z)]=this.TYPES.PATH,a++)}}isWideConnection(t,e,i){const n=this.size,a=(l,u,f)=>l<0||l>=n||u<0||u>=n||f<0||f>=n?!1:l===t&&u===e&&f===i?!0:this.matrix[this._idx(l,u,f)]!==this.TYPES.WALL;return!!(a(t,e+1,i)&&a(t+1,e,i)&&a(t+1,e+1,i)||a(t-1,e,i)&&a(t-1,e+1,i)&&a(t,e+1,i)||a(t,e-1,i)&&a(t+1,e-1,i)&&a(t+1,e,i)||a(t-1,e-1,i)&&a(t,e-1,i)&&a(t-1,e,i)||a(t,e,i+1)&&a(t+1,e,i)&&a(t+1,e,i+1)||a(t-1,e,i)&&a(t-1,e,i+1)&&a(t,e,i+1)||a(t,e,i-1)&&a(t+1,e,i-1)&&a(t+1,e,i)||a(t-1,e,i-1)&&a(t,e,i-1)&&a(t-1,e,i)||a(t,e,i+1)&&a(t,e+1,i)&&a(t,e+1,i+1)||a(t,e-1,i)&&a(t,e-1,i+1)&&a(t,e,i+1)||a(t,e,i-1)&&a(t,e+1,i-1)&&a(t,e+1,i)||a(t,e-1,i-1)&&a(t,e,i-1)&&a(t,e-1,i))}isAdjacentElevator(t,e,i){const n=this.size,a=[{dx:-1,dy:-1},{dx:-1,dy:0},{dx:-1,dy:1},{dx:0,dy:-1},{dx:0,dy:1},{dx:1,dy:-1},{dx:1,dy:0},{dx:1,dy:1}];for(const o of a){const r=t+o.dx,c=e+o.dy;if(!(r<0||r>=n||c<0||c>=n)&&(this.matrix[this._idx(r,c,i)]!==this.TYPES.WALL||i-2>=0&&this.matrix[this._idx(r,c,i-2)]!==this.TYPES.WALL||i+2<n&&this.matrix[this._idx(r,c,i+2)]!==this.TYPES.WALL))return!0}return!1}isDeadEndZ(t,e,i){if(t%2===0||e%2===0||i%2===0)return!1;const n=this.matrix[this._idx(t,e,i)];if(n===this.TYPES.WALL||n===this.TYPES.START||n===this.TYPES.EXIT||n===this.TYPES.TELEPORT||n===this.TYPES.KEY)return!1;const a=this.size,o=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(const c of o){const l=t+c.dx,u=e+c.dy;if(!(l<0||l>=a||u<0||u>=a)&&this.matrix[this._idx(l,u,i)]!==this.TYPES.WALL)return!1}let r=!1;return i-1>=0&&this.matrix[this._idx(t,e,i-1)]!==this.TYPES.WALL&&(r=!0),i+1<a&&this.matrix[this._idx(t,e,i+1)]!==this.TYPES.WALL&&(r=!0),r}isSolvable(){const t=this.size,e={x:Math.floor(this.startPos.x),y:Math.floor(this.startPos.y),z:this.startPos.z},i=[];let n=null;for(let l=0;l<t;l++)for(let u=0;u<t;u++)for(let f=0;f<t;f++){const p=this.matrix[this._idx(l,u,f)];p===this.TYPES.KEY?i.push(`${l},${u},${f}`):p===this.TYPES.EXIT&&(n=`${l},${u},${f}`)}const a=[e],o=new Set([`${e.x},${e.y},${e.z}`]),r=new Set;let c=!1;for(;a.length>0;){const l=a.shift(),u=`${l.x},${l.y},${l.z}`;i.includes(u)&&r.add(u),u===n&&(c=!0);const f=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(const p of f){const _=l.x+p.dx,v=l.y+p.dy,m=l.z;if(_>=0&&_<t&&v>=0&&v<t){const d=`${_},${v},${m}`,h=this.matrix[this._idx(_,v,m)];h!==this.TYPES.WALL&&h!==this.TYPES.STATUE&&!o.has(d)&&(o.add(d),a.push({x:_,y:v,z:m}))}}for(const p of[-2,2]){const _=l.z+p;if(_>=0&&_<t){const v=l.z+p/2,m=this.matrix[this._idx(l.x,l.y,v)],d=this.matrix[this._idx(l.x,l.y,_)];if(m!==this.TYPES.WALL&&m!==this.TYPES.STATUE&&d!==this.TYPES.WALL&&d!==this.TYPES.STATUE){const h=`${l.x},${l.y},${_}`;o.has(h)||(o.add(h),a.push({x:l.x,y:l.y,z:_}))}}}}return c&&r.size===i.length}placeStatues(){const t=this.size,e=[];for(let n=0;n<t;n++)for(let a=0;a<t;a++)for(let o=0;o<t;o++)this.isDeadEndZ(n,a,o)&&e.push({x:n,y:a,z:o});let i=0;for(const n of e){const a=this.matrix[this._idx(n.x,n.y,n.z)],o=n.z-1,r=n.z+1,c=o>=0?this.matrix[this._idx(n.x,n.y,o)]:null,l=r<t?this.matrix[this._idx(n.x,n.y,r)]:null;this.matrix[this._idx(n.x,n.y,n.z)]=this.TYPES.STATUE,o>=0&&(this.matrix[this._idx(n.x,n.y,o)]=this.TYPES.WALL),r<t&&(this.matrix[this._idx(n.x,n.y,r)]=this.TYPES.WALL),this.isSolvable()?i++:(this.matrix[this._idx(n.x,n.y,n.z)]=a,o>=0&&(this.matrix[this._idx(n.x,n.y,o)]=c),r<t&&(this.matrix[this._idx(n.x,n.y,r)]=l))}return i}}class Jp{constructor(){Bt(this,"uiFloorSpan");Bt(this,"uiMap3dContainer");Bt(this,"uiMobileControls");Bt(this,"uiProximeterContainer");Bt(this,"uiProximeterCells");Bt(this,"uiProximeterBar");Bt(this,"uiVictoryScreen");Bt(this,"uiGameOverScreen");Bt(this,"uiMobileUp");Bt(this,"uiMobileDown");Bt(this,"uiMobileMap");Bt(this,"uiSavingIndicator");Bt(this,"savingIndicatorTimeout");Bt(this,"uiVisitedPercent");Bt(this,"uiHunterStatusVal");Bt(this,"uiStatusLabel");Bt(this,"uiMarqueeContainer");Bt(this,"uiLegendHunter");Bt(this,"uiCanvas");Bt(this,"uiKeysCollected");Bt(this,"uiKeysTotal");Bt(this,"uiKeysList");Bt(this,"uiPauseScreen");Bt(this,"uiMobilePauseBtn");Bt(this,"uiPathfindersRemaining");Bt(this,"uiPathfindersTotal");Bt(this,"uiControlsHintContent");Bt(this,"onInfoBanner");Bt(this,"bannerMessage","");this.uiFloorSpan=document.getElementById("current-floor"),this.uiMap3dContainer=document.getElementById("map3d-container"),this.uiMobileControls=document.getElementById("mobile-controls"),this.uiProximeterContainer=document.getElementById("proximeter-container"),this.uiProximeterCells=document.querySelectorAll(".proximeter-cell"),this.uiProximeterBar=document.querySelector(".proximeter-bar"),this.uiVictoryScreen=document.getElementById("victory-screen"),this.uiGameOverScreen=document.getElementById("game-over-screen"),this.uiMobileUp=document.getElementById("mobile-up"),this.uiMobileDown=document.getElementById("mobile-down"),this.uiMobileMap=document.getElementById("mobile-map"),this.uiSavingIndicator=document.getElementById("saving-indicator"),this.savingIndicatorTimeout=null,this.uiVisitedPercent=document.getElementById("visited-percent"),this.uiHunterStatusVal=document.getElementById("hunter-status-val"),this.uiStatusLabel=document.querySelector("#hunter-status-panel .status-label"),this.uiMarqueeContainer=document.querySelector(".status-marquee-container"),this.uiLegendHunter=document.getElementById("legend-hunter"),this.uiCanvas=document.getElementById("main-2d-canvas"),this.uiKeysCollected=document.getElementById("keys-collected-count"),this.uiKeysTotal=document.getElementById("keys-total-count"),this.uiKeysList=document.getElementById("keys-list-container"),this.uiPauseScreen=document.getElementById("pause-screen"),this.uiMobilePauseBtn=document.getElementById("mobile-pause-btn"),this.uiPathfindersRemaining=document.getElementById("pathfinders-remaining-count"),this.uiPathfindersTotal=document.getElementById("pathfinders-total-count"),this.uiControlsHintContent=document.getElementById("controls-hint-content"),this.localizeDOM()}localizeDOM(t=wn){Qo(t)}showPause(){this.uiPauseScreen&&this.uiPauseScreen.classList.remove("hidden")}hidePause(){this.uiPauseScreen&&this.uiPauseScreen.classList.add("hidden")}showVictory(t=0){this.hideGameUI(),this.uiVictoryScreen&&this.uiVictoryScreen.classList.remove("hidden");const e=document.getElementById("victory-completion-rate");e&&(e.innerText=`${t}%`)}showDeath(t=!1){this.hideGameUI(),this.uiGameOverScreen&&this.uiGameOverScreen.classList.remove("hidden");const e=document.getElementById("continue-btn-death");e&&(e.style.display=t?"":"none")}hideGameUI(){this.uiMobileControls&&this.uiMobileControls.classList.add("hidden"),this.uiMobilePauseBtn&&this.uiMobilePauseBtn.classList.add("hidden"),this.uiMap3dContainer&&this.uiMap3dContainer.classList.add("hidden"),this.uiProximeterContainer&&this.uiProximeterContainer.classList.add("hidden"),this.uiProximeterBar&&this.uiProximeterBar.classList.remove("critical-alert"),this.uiProximeterCells.forEach(t=>t.classList.remove("active")),this.uiCanvas&&this.uiCanvas.classList.remove("hunted-map-effect","nearby-map-effect")}initGameUI(t=!1){this.uiMobileControls&&this.uiMobileControls.classList.remove("hidden"),this.uiMobilePauseBtn&&this.uiMobilePauseBtn.classList.remove("hidden"),this.uiMobileMap&&(this.uiMobileMap.disabled=!0),t?(this.uiStatusLabel&&(this.uiStatusLabel.innerText="SAFE MODE:"),this.uiHunterStatusVal&&(this.uiHunterStatusVal.innerText="ACTIVE",this.uiHunterStatusVal.className="status-marquee-text status--scanning"),this.uiLegendHunter&&this.uiLegendHunter.classList.add("hidden")):(this.uiStatusLabel&&(this.uiStatusLabel.innerText="HUNTER STATUS:"),this.uiLegendHunter&&this.uiLegendHunter.classList.remove("hidden"))}updateVisitedPercent(t){this.uiVisitedPercent&&(this.uiVisitedPercent.innerText=String(t))}updateFloor(t,e,i){this.uiFloorSpan&&(this.uiFloorSpan.innerText=String(t)),this.uiMobileUp&&(this.uiMobileUp.disabled=!e),this.uiMobileDown&&(this.uiMobileDown.disabled=!i)}updateKeysHUD(t,e){if(this.uiKeysCollected&&(this.uiKeysCollected.innerText=String(t)),this.uiKeysTotal&&(this.uiKeysTotal.innerText=String(e)),this.uiKeysList){this.uiKeysList.innerHTML="";for(let i=0;i<e;i++){const n=document.createElement("span");n.className="key-dot"+(i<t?" key-dot--collected":""),this.uiKeysList.appendChild(n)}}}updatePathfindersHUD(t,e){this.uiPathfindersRemaining&&(this.uiPathfindersRemaining.innerText=String(t)),this.uiPathfindersTotal&&(this.uiPathfindersTotal.innerText=String(e))}showSavingIndicator(){this.uiSavingIndicator&&(this.savingIndicatorTimeout&&clearTimeout(this.savingIndicatorTimeout),this.uiSavingIndicator.classList.remove("hidden"),this.uiSavingIndicator.classList.add("saving-pulse"),this.savingIndicatorTimeout=window.setTimeout(()=>{this.uiSavingIndicator&&(this.uiSavingIndicator.classList.add("hidden"),this.uiSavingIndicator.classList.remove("saving-pulse"))},2e3))}showInfoBanner(t){this.bannerMessage=t,this.onInfoBanner&&this.onInfoBanner(t)}setMap3DVisible(t){this.uiMap3dContainer&&(t?this.uiMap3dContainer.classList.remove("hidden"):this.uiMap3dContainer.classList.add("hidden"))}updateHazardWarning(t,e,i=!1,n=!1){if(!this.uiHunterStatusVal)return;let a=Ot("statusScanning"),o="status--scanning",r=!1;i?(a=Ot("statusActive"),o="status--scanning"):n?(a=Ot("statusSleeping"),o="status--sleeping"):e>0?(a=Ot("statusConverging",{ticks:e}),o="status--converging",r=!0):t&&(a=Ot("statusTracking"),o="status--tracking",r=!0),this.uiHunterStatusVal.innerText!==a&&(this.uiHunterStatusVal.innerText=a,this.uiHunterStatusVal.className="status-marquee-text "+o),this.uiCanvas&&(r?this.uiCanvas.classList.add("hunted-map-effect"):this.uiCanvas.classList.remove("hunted-map-effect"))}setNearbyWarning(t){this.uiCanvas&&(t?this.uiCanvas.classList.add("nearby-map-effect"):this.uiCanvas.classList.remove("nearby-map-effect"))}updateProximeter(t,e,i){if(!this.uiProximeterContainer)return;if(e>0&&!i)this.uiProximeterContainer.classList.remove("hidden");else{this.uiProximeterContainer.classList.add("hidden");return}let n=0;t<=10&&(n=11-t),this.uiProximeterCells.forEach(a=>{parseInt(a.getAttribute("data-index")||"0")<=n?a.classList.add("active"):a.classList.remove("active")}),this.uiProximeterBar&&(n===10?this.uiProximeterBar.classList.add("critical-alert"):this.uiProximeterBar.classList.remove("critical-alert"))}updateMobileMapButton(t,e,i){this.uiMobileMap&&i&&(t&&!e?(this.uiMobileMap.innerText=Ot("teleport"),this.uiMobileMap.style.borderColor="var(--clr-teleport, #ff8c00)",this.uiMobileMap.style.color="var(--clr-teleport, #ff8c00)",this.uiMobileMap.style.background="rgba(255, 140, 0, 0.2)"):(this.uiMobileMap.innerText=Ot("map"),this.uiMobileMap.style.borderColor="",this.uiMobileMap.style.color="",this.uiMobileMap.style.background=""))}updateControlsHint(t,e=!0){this.uiControlsHintContent&&(t==="gamepad"?this.uiControlsHintContent.innerHTML=`
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
            `)}destroy(){this.savingIndicatorTimeout&&clearTimeout(this.savingIndicatorTimeout)}}class Qp{constructor(){this.keys={},this.touchStart=null,this.touchMoveVector=null,this.preventScrollKeys=["arrowup","arrowdown","arrowleft","arrowright"," ","pageup","pagedown"],this.handleKeyDown=null,this.handleKeyUp=null,this.handleTouchStart=null,this.handleTouchMove=null,this.handleTouchEnd=null,this.init()}init(){this.handleKeyDown=t=>{const e=t.key.toLowerCase();this.keys[e]=!0,this.preventScrollKeys.includes(e)&&t.preventDefault()},this.handleKeyUp=t=>{this.keys[t.key.toLowerCase()]=!1},window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp)}setupTouch(t,e){this.handleTouchStart=i=>{t()||e()||i.target.closest("button")||(i.cancelable&&i.preventDefault(),this.touchStart={x:i.touches[0].clientX,y:i.touches[0].clientY})},this.handleTouchMove=i=>{if(!this.touchStart||t()||e())return;i.cancelable&&i.preventDefault();const n=i.touches[0].clientX-this.touchStart.x,a=i.touches[0].clientY-this.touchStart.y,o=Math.sqrt(n*n+a*a);o>10&&(this.touchMoveVector={x:n/o,y:a/o})},this.handleTouchEnd=()=>{this.touchStart=null,this.touchMoveVector=null},window.addEventListener("touchstart",this.handleTouchStart,{passive:!1}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),window.addEventListener("touchend",this.handleTouchEnd)}destroy(){this.handleKeyDown&&window.removeEventListener("keydown",this.handleKeyDown),this.handleKeyUp&&window.removeEventListener("keyup",this.handleKeyUp),this.handleTouchStart&&window.removeEventListener("touchstart",this.handleTouchStart),this.handleTouchMove&&window.removeEventListener("touchmove",this.handleTouchMove),this.handleTouchEnd&&window.removeEventListener("touchend",this.handleTouchEnd)}}const La="void-escape-save";function tm(s){const t=new Uint8Array(s.buffer);let e="";for(let i=0;i<t.length;i++)e+=String.fromCharCode(t[i]);return btoa(e)}function em(s){const t=atob(s),e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return new Int8Array(e.buffer)}function im(s){return{x:s.x,y:s.y,z:s.z,id:s.id,state:s.state,lastPos:s.lastPos?{...s.lastPos}:null,history:s.history.map(t=>({...t})),visitedNodes:Array.from(s.visitedNodes),pathToTarget:s.pathToTarget.map(t=>({...t}))}}function ia(s){try{const t={version:1,timestamp:Date.now(),degree:s.degree,branchingFactor:s.branchingFactor,isSafeMode:s.isSafeMode,seed:s.seed,mazeSize:s.mazeGen.size,mazeStartPos:{...s.mazeGen.startPos},matrix:tm(s.mazeGen.matrix),player:{...s.player},hunters:s.hunters.map(im),discoveredTeleports:Array.from(s.discoveredTeleports),inactiveTeleportPos:s.inactiveTeleportPos?{...s.inactiveTeleportPos}:null,teleportCooldownTicks:s.teleportCooldownTicks,revealedPathSet:Array.from(s.revealedPathSet),keysCollected:s.keysCollected,totalKeys:s.totalKeys,totalPathfinders:s.totalPathfinders,pathfindersRemaining:s.pathfindersRemaining,pathfinderRewardsGranted:s.pathfinderRewardsGranted!==void 0?s.pathfinderRewardsGranted:0,mapCompletion100Triggered:s.mapCompletion100Triggered||!1,dialogueUpTriggered:s.dialogueUpTriggered||!1,dialogueDownTriggered:s.dialogueDownTriggered||!1,dialogueWhichWayTriggered:s.dialogueWhichWayTriggered||!1,dialogueDetectedTriggered:s.dialogueDetectedTriggered||!1,hunterOnSameFloorDetected:s.hunterOnSameFloorDetected||!1};localStorage.setItem(La,JSON.stringify(t))}catch(t){console.warn("[SaveManager] Could not save game state:",t)}}function nl(){try{const s=localStorage.getItem(La);if(!s)return null;const t=JSON.parse(s);return!t||t.version!==1?null:t}catch(s){return console.warn("[SaveManager] Could not load save data:",s),null}}function sl(){localStorage.removeItem(La)}function go(){return nl()!==null}function nm(s,t){s.x=t.x,s.y=t.y,s.z=t.z,s.visualX=t.x,s.visualY=t.y,s.visualZ=t.z,s.state=t.state,s.lastPos=t.lastPos?{...t.lastPos}:null,s.history=t.history.map(e=>({...e})),s.visitedNodes=new Set(t.visitedNodes),s.pathToTarget=t.pathToTarget.map(e=>({...e}))}function sm(s,t){const e=em(t);for(let i=0;i<e.length;i++)s.matrix[i]=e[i]}function na(s,t,e){return Math.abs(t-s)<=e?t:s+Math.sign(t-s)*e}class vo{constructor(t,e,i=null){Bt(this,"isTouchDevice");Bt(this,"isMouseOrTouchDetected");Bt(this,"teleportGoBtnClickRect");if(this.degree=t!==void 0?t:j.MAZE_DEGREE!==void 0?j.MAZE_DEGREE:8,this.branchingFactor=e!==void 0?e:j.BRANCHING_FACTOR!==void 0?j.BRANCHING_FACTOR:.2,i)this.isSafeMode=i.isSafeMode??!1;else{const l=document.getElementById("safe-mode");this.isSafeMode=l?l.checked:!1}this.vScale=2,this.ui=new Jp,this.input=new Qp,this.input.setupTouch(()=>this.isMap3DActive,()=>this.isGameOver),this.canvas=document.getElementById("main-2d-canvas"),this.ctx=this.canvas.getContext("2d"),this.seed=i?i.seed:j.SEED!==null&&j.SEED!==void 0?j.SEED:Date.now(),this.mazeGen=new jp(t,e,this.seed),this.maze=this.mazeGen.generate(),this.isResumedFromSave=!!i,this.mapCompletion100Triggered=!1,this.hunterOnSameFloorDetected=!1,this.dialogueUpTriggered=!1,this.dialogueDownTriggered=!1,this.dialogueWhichWayTriggered=!1,this.dialogueDetectedTriggered=!1,this.wallImage=new Image,this.wallImage.onload=()=>{this.staticMapCacheDirty=!0},this.wallImage.src="assets/images/wall.png",this.floorImage=new Image,this.floorImage.onload=()=>{this.staticMapCacheDirty=!0},this.floorImage.src="assets/images/floor.png",this.keyImage=new Image,this.keyImage.onload=()=>{this.staticMapCacheDirty=!0},this.keyImage.src="assets/images/key.svg",this.statueImage=new Image,this.statueImage.onload=()=>{this.staticMapCacheDirty=!0},this.statueImage.src="assets/images/statue.png",this.mageImages={down_left:new Image,down_right:new Image,up_left:new Image,up_right:new Image};for(const l in this.mageImages)this.mageImages[l].onload=()=>{this.staticMapCacheDirty=!0},this.mageImages[l].src=`assets/images/mage_${l}.png`;this.playerSide="right",this.playerVertical="down",this.playerWalkCycle=0,this.playerSquashTargetX=1,this.playerSquashTargetY=1,this.playerSquashX=1,this.playerSquashY=1,this.player={x:this.mazeGen.startPos.x,y:this.mazeGen.startPos.y,z:this.mazeGen.startPos.z,dir:0},this.hunters=[],this.initHunters(t),this.keyMeshes=[],this.exitMesh=null,this.keysCollected=0,this.totalKeys=j.getHunterCount(t)*2,this.totalPathfinders=j.getPathfinderCount(t),this.pathfindersRemaining=this.totalPathfinders,this.activeMapFloor=1,this.visualActiveFloor=1,this.mapCursor={x:0,y:0,z:1},this.pathfinderRewardsGranted=0,this.isometricCanvas=null,this.isometricCtx=null,this.floorClickRects=[],this.mapZoom=1,this.mapPanOffsetX=0,this.isZoomTransitionActive=!1,this.zoomTransitionTimer=0,this.preloadedStoryImages=[],this.storyImagesLoadedCount=0,this.storyImagesTotalCount=0,this.storyImagesPreloadPromise=null,this.preloadStoryImages(),this.lastFrameTime=performance.now(),this.revealedPathSet=new Set,this.activePathReveal=[],this.revealedPathProgress=0,this.knownMeshes=[],this.gridMeshes=null,this.pathRevealInterval=null,this.pathfinderBlockedUntil=0,this.ui.initGameUI(this.isSafeMode),this.ui.onInfoBanner=l=>this.queueNotification(l),this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),this.isMap3DActive=!1,this.isGameOver=!1,this.deathAnimation=null,this.notificationQueue=[],this.activeNotification=null,this.isPaused=!1,this.isDestroyed=!1,this.isIntroPlaying=!1,this.isStoryActive=!1,this.pulsatingMaterials=[],this.hunterMeshes=[],this.discoveredTeleports=new Set;const n=Math.floor(this.player.x),a=Math.floor(this.player.y),o=this.player.z;this.discoveredTeleports.add(`${n},${a},${o}`),this.allTeleports=[];const r=this.mazeGen.size,c=this.mazeGen.TYPES;for(let l=1;l<r;l+=2)for(let u=0;u<r;u++)for(let f=0;f<r;f++)this.maze.get(f,u,l)===c.TELEPORT&&this.allTeleports.push({x:f,y:u,z:l});this.allTeleports.sort((l,u)=>l.z!==u.z?l.z-u.z:l.y!==u.y?l.y-u.y:l.x-u.x),this.selectedTeleportIndex=this.allTeleports.findIndex(l=>l.x===n&&l.y===a&&l.z===o),this.selectedTeleportIndex===-1&&(this.selectedTeleportIndex=0),this.teleportConfirmModalActive=!1,this.teleportModalSelection="go",this.isMouseOrTouchDetected=!1,this.teleportGoBtnClickRect=null,this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0,this.teleportMeshes=[],this.isTeleportMode=!1,this.teleportCooldownTicks=0,this.inactiveTeleportPos=null,this.floorTransition=null,this.hasSavePoint=!1,this.lastPlayerCell={x:n,y:a,z:o},this.exitPathfinderUnlocked=!1,this.isZoomActive=!0,this.zoomVisibleCells=11,this.lastInputDevice="keyboard",this.staticMapCacheCanvas=document.createElement("canvas"),this.staticMapCacheCtx=this.staticMapCacheCanvas.getContext("2d"),this.staticMapCacheDirty=!0,this.fullyRevealedCells=new Set,this.revealedCellsAnimation=new Map,this.skipCellAnimations=!0,this.populateFullyRevealedCells(this.player.z),this.activeSkipHandler=null,this.activeIntroTimer=null,this.activeContinueTimer=null,this.raycaster=new Hp,this.pointer=new Ut,this.exitPathfinderUnlocked=this.checkExitNeighborVisited(),this.initThree(),this.init(i)}destroy(){this.isDestroyed=!0,this.hideGameUI(),this.input.destroy(),this.ui.destroy(),window.removeEventListener("keydown",this.handleKeyDownExtra),this.handleKeyboardDetection&&window.removeEventListener("keydown",this.handleKeyboardDetection),window.removeEventListener("resize",this.handleResize),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this.activeIntroTimer&&(clearTimeout(this.activeIntroTimer),this.activeIntroTimer=null),this.activeContinueTimer&&(clearTimeout(this.activeContinueTimer),this.activeContinueTimer=null),this.handleStoryKeyDown&&(window.removeEventListener("keydown",this.handleStoryKeyDown),this.handleStoryKeyDown=null);const t=document.getElementById("story-screen");t&&(this.handleStoryClick&&(t.removeEventListener("click",this.handleStoryClick),this.handleStoryClick=null),this.handleStoryTouch&&(t.removeEventListener("touchstart",this.handleStoryTouch),this.handleStoryTouch=null),t.classList.add("hidden")),this.controls&&this.controls.dispose(),this.renderer&&this.renderer.domElement&&(this.renderer.domElement.removeEventListener("click",this.handleCanvasClick),this.renderer.domElement.removeEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.removeEventListener("pointerup",this.handlePointerUp)),this.renderer&&(this.renderer.dispose(),this.renderer.domElement.remove()),this.ui.uiMobileUp&&(this.ui.uiMobileUp.onclick=null),this.ui.uiMobileDown&&(this.ui.uiMobileDown.onclick=null),this.ui.uiMobileMap&&(this.ui.uiMobileMap.onclick=null),this.pathRevealInterval&&clearInterval(this.pathRevealInterval)}preloadStoryImages(){const t=["assets/images/presentation/1-mystical-church-of-chaos.jpg","assets/images/presentation/2-mystical-church-of-chaos.jpg","assets/images/presentation/3-the-jelly-god.jpg","assets/images/presentation/4-player-alone.jpg","assets/images/presentation/5-player-thrown.jpg"];this.storyImagesLoadedCount=0,this.storyImagesTotalCount=t.length,this.storyImagesPreloadPromise=Promise.all(t.map((e,i)=>new Promise(n=>{const a=new Image;a.src=e,a.onload=()=>{this.preloadedStoryImages[i]=a,this.storyImagesLoadedCount++,n()},a.onerror=()=>{console.warn(`Failed to preload story image: ${e}`),n()}})))}initHunters(t){const e=this.isSafeMode?0:j.getHunterCount(t);if(e!==0){for(let i=1;i<=e;i++)this.hunters.push(new Zp(this.mazeGen,null,i));this.lastHunterMove=performance.now()}}wakeHunters(){const t=this.mazeGen.size,e=[],i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,o=Math.floor(this.mazeGen.startPos.x),r=Math.floor(this.mazeGen.startPos.y),c=this.mazeGen.startPos.z;for(let v=0;v<t;v++)for(let m=0;m<t;m++)for(let d=0;d<t;d++){const h=v===o&&m===r&&d===c;this.maze.get(v,m,d)===this.mazeGen.TYPES.PATH&&d%2!==0&&!h&&e.push({x:v,y:m,z:d})}if(e.length===0)for(let v=0;v<t;v++)for(let m=0;m<t;m++)for(let d=0;d<t;d++){const h=this.maze.get(v,m,d),x=v===o&&m===r&&d===c,g=h===this.mazeGen.TYPES.EXIT;h!==this.mazeGen.TYPES.WALL&&!g&&d%2!==0&&(v!==i||m!==n||d!==a)&&!x&&e.push({x:v,y:m,z:d})}for(let v=e.length-1;v>0;v--){const m=Math.floor(Math.random()*(v+1)),d=e[v];e[v]=e[m],e[m]=d}const l=(v,m)=>Math.abs(v.x-m.x)+Math.abs(v.y-m.y)+Math.abs(v.z-m.z),u=[],f=this.hunters.filter(v=>v.state==="SLEEP");let p=Math.max(3,Math.floor(t*.45)),_=4;for(;u.length<f.length&&p>0;){u.length=0;const v=e.filter(m=>l(m,{x:i,y:n,z:a})>=p);for(let m=0;m<f.length;m++){let d=null;for(const h of v){if(u.some(g=>g.x===h.x&&g.y===h.y&&g.z===h.z))continue;let x=!0;for(const g of u)if(l(h,g)<_){x=!1;break}if(x){d=h;break}}if(d)u.push(d);else break}u.length<f.length&&(_>1?_--:p--)}if(u.length<f.length)for(const v of e){if(u.length>=f.length)break;u.some(m=>m.x===v.x&&m.y===v.y&&m.z===v.z)||u.push(v)}for(let v=0;v<f.length&&v<u.length;v++){const m=f[v],d=u[v];m.x=d.x,m.y=d.y,m.z=d.z,m.visualX=d.x,m.visualY=d.y,m.visualZ=d.z,m.lastPos={x:d.x,y:d.y,z:d.z},m.state="WANDERING",m.visitedNodes.clear(),m.visitedNodes.add(`${d.x},${d.y},${d.z}`),m.history=[]}this.ui.showInfoBanner(Ot("msgVoidHuntersDetected")),this.staticMapCacheDirty=!0,this.isMap3DActive&&this.build3DMap()}getExitPos(){for(let t=0;t<this.mazeGen.size;t++)for(let e=0;e<this.mazeGen.size;e++)for(let i=0;i<this.mazeGen.size;i++)if(this.maze.get(t,e,i)===this.mazeGen.TYPES.EXIT)return{x:t,y:e,z:i};return{x:1,y:1,z:1}}triggerSave(){ia(this),this.hasSavePoint=!0,this.ui.showSavingIndicator()}triggerVictory(){this.isGameOver=!0,sl();const t=this.getMapVisitedPercentage();this.ui.showVictory(t)}triggerDeath(){this.isGameOver=!0,this.ui.showDeath(this.hasSavePoint)}collectKey(t,e,i){if(this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),this.keysCollected++,this.staticMapCacheDirty=!0,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.ui.showInfoBanner(Ot("msgKeySecured",{collected:this.keysCollected,total:this.totalKeys})),this.keysCollected===this.totalKeys&&(this.ui.showInfoBanner(Ot("msgExitUnlocked")),this.exitMesh)){this.exitMesh.material.color.setHex(j.COLORS.THREE_EXIT),this.exitMesh.material.emissive.setHex(j.COLORS.THREE_EXIT),this.exitMesh.material.emissiveIntensity=.5;const n=this.exitMesh.children[0];n&&this.exitMesh.remove(n)}}triggerLockedExitWarning(){const t=Date.now();if(!this.lastLockedWarningTime||t-this.lastLockedWarningTime>1500){this.lastLockedWarningTime=t;const e=this.totalKeys-this.keysCollected;this.ui.showInfoBanner(Ot("msgKeysRemaining",{count:e}))}}restoreFromSave(t){this.seed=t.seed,sm(this.mazeGen,t.matrix),this.player.x=t.player.x,this.player.y=t.player.y,this.player.z=t.player.z,this.player.dir=t.player.dir;for(let n=0;n<this.hunters.length&&n<t.hunters.length;n++)nm(this.hunters[n],t.hunters[n]);this.discoveredTeleports=new Set(t.discoveredTeleports),this.inactiveTeleportPos=t.inactiveTeleportPos,this.teleportCooldownTicks=t.teleportCooldownTicks,this.keysCollected=t.keysCollected!==void 0?t.keysCollected:0,this.totalKeys=t.totalKeys!==void 0?t.totalKeys:j.getHunterCount(this.degree)*2,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.totalPathfinders=t.totalPathfinders!==void 0?t.totalPathfinders:j.getPathfinderCount(this.degree),this.pathfindersRemaining=t.pathfindersRemaining!==void 0?t.pathfindersRemaining:this.totalPathfinders,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders);const e=this.degree>=12?10:this.degree>=8?20:0,i=this.getMapVisitedPercentage();this.pathfinderRewardsGranted=t.pathfinderRewardsGranted!==void 0?t.pathfinderRewardsGranted:e>0?Math.floor(i/e):0,this.revealedPathSet=new Set(t.revealedPathSet),this.mapCompletion100Triggered=t.mapCompletion100Triggered||!1,this.dialogueUpTriggered=t.dialogueUpTriggered||!1,this.dialogueDownTriggered=t.dialogueDownTriggered||!1,this.dialogueWhichWayTriggered=t.dialogueWhichWayTriggered||!1,this.dialogueDetectedTriggered=t.dialogueDetectedTriggered||!1,this.hunterOnSameFloorDetected=t.hunterOnSameFloorDetected||!1,this.hasSavePoint=!0,this.lastPlayerCell={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.populateFullyRevealedCells(this.player.z),this.exitPathfinderUnlocked=this.checkExitNeighborVisited()}checkHunterCollision(){if(this.deathAnimation&&this.deathAnimation.active)return;const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=Math.floor(this.mazeGen.startPos.x),a=Math.floor(this.mazeGen.startPos.y),o=this.mazeGen.startPos.z;if(!(t===n&&e===a&&i===o)){for(const r of this.hunters)if(r.state!=="SLEEP"&&r.x===t&&r.y===e&&r.z===i){r.visualX=r.x,r.visualY=r.y,r.visualZ=r.z,this.isGameOver=!0,this.hideGameUI(),this.deathAnimation={active:!0,hunter:r,playerPos:{x:this.player.x,y:this.player.y,z:this.player.z},elapsed:0,duration:1.8,screenFilled:!1,glitchElapsed:0,glitchDuration:1.5,uiFade:0,uiTriggered:!1};return}}}hideGameUI(){this.ui.hideGameUI(),this.ui.hidePause(),this.canvas.classList.remove("hunted-map-effect"),this.isMap3DActive=!1}initThree(){this.scene=new Fp,this.camera=new Fe(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new jo({antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.ui.uiMap3dContainer.appendChild(this.renderer.domElement),this.controls=new Vp(this.camera,this.renderer.domElement),this.controls.enableDamping=!0}init(t=null){this.handleKeyDownExtra=c=>{const l=c.key.toLowerCase();if(l==="escape"){if(this.isMap3DActive){this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D(),c.preventDefault();return}this.togglePause();return}if(!this.isPaused&&(l==="m"&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D()),l==="z"&&this.toggleZoom(),this.isMap3DActive&&!this.isIntroPlaying)){if(this.isTeleportMode){if(this.teleportConfirmModalActive){if((l==="a"||l==="arrowleft"||l==="d"||l==="arrowright")&&(this.teleportModalSelection=this.teleportModalSelection==="go"?"cancel":"go",c.preventDefault()),l==="enter"||l===" "||l==="y"){if(this.teleportModalSelection==="go"){const f=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(f.x,f.y,f.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;c.preventDefault()}(l==="escape"||l==="backspace")&&(this.teleportConfirmModalActive=!1,c.preventDefault());return}const u=this.getSelectableTeleportIndices();if(u.length>0){let f=u.indexOf(this.selectedTeleportIndex);if(l==="a"||l==="arrowleft"){f=(f-1+u.length)%u.length,this.selectedTeleportIndex=u[f];const p=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=p.z,this.mapCursor={x:p.x,y:p.y,z:p.z},c.preventDefault()}if(l==="d"||l==="arrowright"){f=(f+1)%u.length,this.selectedTeleportIndex=u[f];const p=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=p.z,this.mapCursor={x:p.x,y:p.y,z:p.z},c.preventDefault()}if(l==="enter"||l===" "||l==="y"){const p=this.allTeleports[this.selectedTeleportIndex],_=Math.floor(this.player.x),v=Math.floor(this.player.y),m=this.player.z,d=p&&p.x===_&&p.y===v&&p.z===m;p&&!d&&(this.teleportTo(p.x,p.y,p.z),this.toggleTeleportMap(!1)),c.preventDefault()}}(l==="escape"||l==="backspace")&&(this.toggleTeleportMap(!1),c.preventDefault());return}if((l==="q"||l==="pagedown")&&(this.activeMapFloor-2>=1&&(this.activeMapFloor-=2),c.preventDefault()),(l==="e"||l==="pageup")&&(this.activeMapFloor+2<=this.mazeGen.size-2&&(this.activeMapFloor+=2),c.preventDefault()),(l==="a"||l==="arrowleft")&&(this.navigateCursor("left"),c.preventDefault()),(l==="d"||l==="arrowright")&&(this.navigateCursor("right"),c.preventDefault()),(l==="w"||l==="arrowup")&&(this.navigateCursor("up"),c.preventDefault()),(l==="s"||l==="arrowdown")&&(this.navigateCursor("down"),c.preventDefault()),l==="enter"||l===" "||l==="y"){const u=this.mapCursor.x,f=this.mapCursor.y,p=this.mapCursor.z;this.getInteractiveElements(this.activeMapFloor).some(m=>m.x===u&&m.y===f&&m.z===p)&&this.triggerPathReveal(u,f,p),c.preventDefault()}}},this.handleResize=()=>this.resize(),this.handleKeyboardDetection=()=>{this.lastInputDevice!=="keyboard"&&(this.lastInputDevice="keyboard",this.ui.updateControlsHint("keyboard",this.mazeGen.size>11)),this.isMouseOrTouchDetected=!1},window.addEventListener("keydown",this.handleKeyDownExtra),window.addEventListener("keydown",this.handleKeyboardDetection),window.addEventListener("resize",this.handleResize);const e=document.getElementById("mobile-zoom-btn");e&&(e.onclick=c=>{c.stopPropagation(),this.toggleZoom()}),this.ui.uiMobileUp&&(this.ui.uiMobileUp.onclick=()=>this.changeFloor(2)),this.ui.uiMobileDown&&(this.ui.uiMobileDown.onclick=()=>this.changeFloor(-2)),this.ui.uiMobileMap&&(this.ui.uiMobileMap.onclick=()=>{if(this.isMap3DActive){this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D();return}const c=Math.floor(this.player.x),l=Math.floor(this.player.y),u=this.player.z,f=this.maze.get(c,l,u)===this.mazeGen.TYPES.TELEPORT,p=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===c&&this.inactiveTeleportPos.y===l&&this.inactiveTeleportPos.z===u;f&&!p?this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(Ot("msgNoOtherActiveTeleport")):this.toggleMap3D()});let i=!1,n=0,a=0;this.handlePointerDown=c=>{i=!1,n=c.clientX,a=c.clientY},this.handlePointerUp=c=>{const l=c.clientX-n,u=c.clientY-a;Math.sqrt(l*l+u*u)>5&&(i=!0)},this.handleCanvasClick=c=>{i||this.onCanvasClick(c)},this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerup",this.handlePointerUp),this.renderer.domElement.addEventListener("click",this.handleCanvasClick),this.resize(),this.updateFloorUI(),this.hideCanvasInstant(),t?(this.restoreFromSave(t),this.playContinueAnimation()):this.startStorytelling(),this.loop();const o=this.mazeGen.size,r=document.getElementById("mobile-zoom-btn");o<=11?r&&r.classList.add("hidden"):r&&r.classList.remove("hidden"),this.ui.updateControlsHint(this.lastInputDevice,o>11)}hideCanvasInstant(){const t=document.getElementById("map-area-container"),e=document.getElementById("left-hud-panel"),i=document.getElementById("right-hud-panel"),n=document.getElementById("bottom-hud-container");t&&(t.style.transition="none",t.classList.remove("intro-reveal"),t.classList.add("intro-hidden"),t.offsetHeight,t.style.transition=""),e&&(e.style.transition="none",e.classList.remove("intro-reveal"),e.classList.add("intro-hidden"),e.offsetHeight,e.style.transition=""),i&&(i.style.transition="none",i.classList.remove("intro-reveal"),i.classList.add("intro-hidden"),i.offsetHeight,i.style.transition=""),n&&(n.style.transition="none",n.classList.remove("intro-reveal"),n.classList.add("intro-hidden"),n.offsetHeight,n.style.transition="")}drawElevator2D(t,e,i,n,a,o,r,c,l=!1,u=0){const f=e===Math.floor(r)&&i===Math.floor(c);if(f){const d=.85+.15*Math.sin(Date.now()/150);t.save(),t.globalAlpha=d}const p=a&&this.maze.get(e,i,u+1)===this.mazeGen.TYPES.ELEVATOR_VISITED,_=o&&this.maze.get(e,i,u-1)===this.mazeGen.TYPES.ELEVATOR_VISITED;if(l)if(a&&o){let d=!1,h=!1;if(this.activePathReveal){const y=this.activePathReveal.findIndex(E=>E.x===e&&E.y===i&&E.z===u);if(y!==-1&&y<this.activePathReveal.length-1){const E=this.activePathReveal[y+1];E.z>u&&(d=!0),E.z<u&&(h=!0)}}!d&&!h&&(d=this.revealedPathSet.has(`${e},${i},${u+1}`)||this.revealedPathSet.has(`${e},${i},${u+2}`),h=this.revealedPathSet.has(`${e},${i},${u-1}`)||this.revealedPathSet.has(`${e},${i},${u-2}`));const x=d||!d&&!h,g=h||!d&&!h;t.fillStyle=x?j.COLORS.REVEALED_PATH:p?j.COLORS.NEON_UP:j.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n/2),t.fillStyle=g?j.COLORS.REVEALED_PATH:_?j.COLORS.NEON_DOWN:j.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n+n/2,n,n/2)}else t.fillStyle=j.COLORS.REVEALED_PATH,t.fillRect(e*n,i*n,n,n);else a&&o?(t.fillStyle=p?j.COLORS.NEON_UP:j.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n/2),t.fillStyle=_?j.COLORS.NEON_DOWN:j.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n+n/2,n,n/2)):a?(t.fillStyle=p?j.COLORS.NEON_UP:j.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n)):(t.fillStyle=_?j.COLORS.NEON_DOWN:j.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n,n,n));const v=e*n+n/2,m=i*n+n/2;if(t.fillStyle="#000000",a&&o){const d=n*.28,h=m-n/5,x=m+n/5;t.beginPath(),t.moveTo(v,h-d/2),t.lineTo(v-d*.6,h+d/2),t.lineTo(v+d*.6,h+d/2),t.closePath(),t.fill(),t.beginPath(),t.moveTo(v,x+d/2),t.lineTo(v-d*.6,x-d/2),t.lineTo(v+d*.6,x-d/2),t.closePath(),t.fill()}else if(a){const d=n*.45;t.beginPath(),t.moveTo(v,m-d/2),t.lineTo(v-d*.6,m+d/2),t.lineTo(v+d*.6,m+d/2),t.closePath(),t.fill()}else{const d=n*.45;t.beginPath(),t.moveTo(v,m+d/2),t.lineTo(v-d*.6,m-d/2),t.lineTo(v+d*.6,m-d/2),t.closePath(),t.fill()}f&&t.restore()}drawCellShadow2D(t,e,i,n,a,o,r){if(o===4)return;const c=i+1<a&&this.maze.get(e,i+1,r)===0,l=e+1<a&&this.maze.get(e+1,i,r)===0,u=e+1<a&&i+1<a&&this.maze.get(e+1,i+1,r)===0;if(c||l||u){t.fillStyle="rgba(0, 0, 0, 0.4)";const f=n*j.SHADOW_SIZE_FACTOR;if(c&&t.fillRect(e*n,(i+1)*n-f,n,f),l){const p=c?n-f:n;t.fillRect((e+1)*n-f,i*n,f,p)}!c&&!l&&u&&t.fillRect((e+1)*n-f,(i+1)*n-f,f,f)}}updateRendererSize(){this.renderer&&(this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix())}resize(){const e=window.innerHeight>window.innerWidth?window.innerWidth*.82:window.innerHeight*.75;this.canvas.width=e,this.canvas.height=e,this.staticMapCacheDirty=!0,this.updateRendererSize()}getMapVisitedPercentage(){let t=0,e=0;const i=this.mazeGen.size,n=this.mazeGen.TYPES;for(let a=0;a<i;a++)for(let o=0;o<i;o++)for(let r=0;r<i;r++){const c=this.maze.get(a,o,r);if(c===n.WALL||c===n.EXIT||c===n.STATUE)continue;t++,(c===n.VISITED||c===n.START||c===n.ELEVATOR_VISITED||c===n.TELEPORT&&this.discoveredTeleports.has(`${a},${o},${r}`))&&e++}return t===0?0:Math.floor(e/t*100)}updateFloorUI(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=i+1<this.mazeGen.size&&this.maze.get(t,e,i+1)!==this.mazeGen.TYPES.WALL,a=i-1>=0&&this.maze.get(t,e,i-1)!==this.mazeGen.TYPES.WALL;this.ui.updateFloor(i,n,a);const o=this.getMapVisitedPercentage();this.ui.updateVisitedPercent(o),o===100&&!this.mapCompletion100Triggered&&(this.ui.showInfoBanner(Ot("msgWorldSaved")),this.mapCompletion100Triggered=!0),this.checkPathfinderRewards(o)}checkPathfinderRewards(t){const e=this.degree>=12?10:this.degree>=8?20:0;if(e===0)return;this.pathfinderRewardsGranted===void 0&&(this.pathfinderRewardsGranted=0);const i=Math.floor(t/e);if(i>this.pathfinderRewardsGranted){const n=i-this.pathfinderRewardsGranted;this.pathfindersRemaining+=n,this.totalPathfinders+=n,this.pathfinderRewardsGranted=i,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),this.ui.showInfoBanner(Ot("msgFoundPathfinder")),ia(this)}}getTeleportCandidates(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z;return Array.from(this.discoveredTeleports).map(n=>{const[a,o,r]=n.split(",").map(Number);return{x:a,y:o,z:r}}).filter(n=>!(n.x===t&&n.y===e&&n.z===i||this.inactiveTeleportPos&&this.inactiveTeleportPos.x===n.x&&this.inactiveTeleportPos.y===n.y&&this.inactiveTeleportPos.z===n.z))}getSelectableTeleportIndices(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z;return this.allTeleports.map((n,a)=>({t:n,idx:a})).filter(n=>{const a=`${n.t.x},${n.t.y},${n.t.z}`,o=this.discoveredTeleports.has(a),r=this.inactiveTeleportPos&&n.t.x===this.inactiveTeleportPos.x&&n.t.y===this.inactiveTeleportPos.y&&n.t.z===this.inactiveTeleportPos.z,c=n.t.x===t&&n.t.y===e&&n.t.z===i;return o&&!r&&!c}).map(n=>n.idx)}updateGamepad(t){const e=navigator.getGamepads?navigator.getGamepads():[],i=e[0]||e.find(m=>m!==null);if(!i)return;const n=.25;(Math.abs(i.axes[0])>n||Math.abs(i.axes[1])>n||i.axes[2]!==void 0&&Math.abs(i.axes[2])>n||i.axes[3]!==void 0&&Math.abs(i.axes[3])>n||i.buttons.some(m=>m.pressed))&&(this.isMouseOrTouchDetected=!1,this.lastInputDevice!=="gamepad"&&(this.lastInputDevice="gamepad",this.ui.updateControlsHint("gamepad",this.mazeGen.size>11)));const o=i.axes[0],r=i.axes[1];let c=o<-n,l=o>n,u=r<-n,f=r>n;if(i.buttons[12]&&i.buttons[12].pressed&&(u=!0),i.buttons[13]&&i.buttons[13].pressed&&(f=!0),i.buttons[14]&&i.buttons[14].pressed&&(c=!0),i.buttons[15]&&i.buttons[15].pressed&&(l=!0),c?this.input.keys.arrowleft=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowleft=!1),l?this.input.keys.arrowright=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowright=!1),u?this.input.keys.arrowup=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowup=!1),f?this.input.keys.arrowdown=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowdown=!1),!this.prevGamepadButtons){this.prevGamepadButtons=i.buttons.map(m=>m.pressed);return}const p=m=>this.prevGamepadButtons[m],_=m=>i.buttons[m]&&i.buttons[m].pressed,v=m=>_(m)&&!p(m);if(this.isStoryActive){if(v(9))this.skipStory();else if(!this.isPreloadingActive){for(let m=0;m<i.buttons.length;m++)if(m!==9&&v(m)){this.triggerAdvanceStory();break}}this.prevGamepadButtons=i.buttons.map(m=>m.pressed);return}if(v(9)){this.togglePause(),this.prevGamepadButtons=i.buttons.map(m=>m.pressed);return}if(this.isPaused){this.prevGamepadButtons=i.buttons.map(m=>m.pressed);return}if(this.isMap3DActive&&!this.isIntroPlaying){const m=_(7),d=_(6);if(m||d){const E=this.mazeGen.size;let A=window.innerWidth*.7/E;A=Math.max(20,Math.min(48,A));const b=A*this.mapZoom,D=b/2,M=b/4,S=D*5,N=window.innerWidth/2+this.mapPanOffsetX,I=window.innerHeight/2+this.mapPanOffsetY,V=this.mapCursor.x,L=this.mapCursor.y,z=this.mapCursor.z,G=this.visualActiveFloor,W=(V-L)*D+N,$=(V+L)*M-(z-G)*S+I,K=this.mapZoom,J=1.025;let it=m?K*J:K/J;if(it=Math.max(.5,Math.min(4,it)),it!==K){const nt=it/K;this.mapPanOffsetX=W-(W-(window.innerWidth/2+this.mapPanOffsetX))*nt-window.innerWidth/2,this.mapPanOffsetY=$-($-(window.innerHeight/2+this.mapPanOffsetY))*nt-window.innerHeight/2,this.mapZoom=it}}const h=c&&(!this.prevGamepadStick||!this.prevGamepadStick.left),x=l&&(!this.prevGamepadStick||!this.prevGamepadStick.right),g=u&&(!this.prevGamepadStick||!this.prevGamepadStick.up),y=f&&(!this.prevGamepadStick||!this.prevGamepadStick.down);if(this.prevGamepadStick={left:c,right:l,up:u,down:f},this.isTeleportMode){if(this.teleportConfirmModalActive){if((h||v(14)||x||v(15))&&(this.teleportModalSelection=this.teleportModalSelection==="go"?"cancel":"go"),v(0)||v(3)||v(2))if(this.teleportModalSelection==="go"){const E=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(E.x,E.y,E.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;v(1)&&(this.teleportConfirmModalActive=!1)}else{const E=this.getSelectableTeleportIndices();if(E.length>0){let A=E.indexOf(this.selectedTeleportIndex);if(h||v(14)){A=(A-1+E.length)%E.length,this.selectedTeleportIndex=E[A];const b=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=b.z,this.mapCursor={x:b.x,y:b.y,z:b.z}}if(x||v(15)){A=(A+1)%E.length,this.selectedTeleportIndex=E[A];const b=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=b.z,this.mapCursor={x:b.x,y:b.y,z:b.z}}if(v(0)||v(3)||v(2)){const b=this.allTeleports[this.selectedTeleportIndex],D=Math.floor(this.player.x),M=Math.floor(this.player.y),S=this.player.z,N=b&&b.x===D&&b.y===M&&b.z===S;b&&!N&&(this.teleportTo(b.x,b.y,b.z),this.toggleTeleportMap(!1))}}(v(1)||v(8))&&this.toggleTeleportMap(!1)}this.prevGamepadButtons=i.buttons.map(E=>E.pressed);return}if((h||v(14))&&this.navigateCursor("left"),(x||v(15))&&this.navigateCursor("right"),(g||v(12))&&this.navigateCursor("up"),(y||v(13))&&this.navigateCursor("down"),(v(0)||v(4))&&this.activeMapFloor-2>=1&&(this.activeMapFloor-=2),v(5)&&this.activeMapFloor+2<=this.mazeGen.size-2&&(this.activeMapFloor+=2),v(3)||v(2)){const E=this.mapCursor.x,A=this.mapCursor.y,b=this.mapCursor.z;this.getInteractiveElements(this.activeMapFloor).some(S=>S.x===E&&S.y===A&&S.z===b)&&this.triggerPathReveal(E,A,b)}(v(1)||v(8))&&this.toggleMap3D(),this.prevGamepadButtons=i.buttons.map(E=>E.pressed);return}if(v(0)){if(this.isTeleportMode){const d=this.getTeleportCandidates()[this.gamepadTeleportSelectedIndex];d&&this.teleportTo(d.x,d.y,d.z)}else if(!this.isMap3DActive){const m=Math.floor(this.player.x),d=Math.floor(this.player.y),h=this.player.z,x=h>0&&this.maze.get(m,d,h-1)!==0,y=this.maze.get(m,d,h)===this.mazeGen.TYPES.TELEPORT,E=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===m&&this.inactiveTeleportPos.y===d&&this.inactiveTeleportPos.z===h;(!(y&&this.discoveredTeleports.has(`${m},${d},${h}`))||E)&&x&&this.changeFloor(-2)}}if(v(1)&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleZoom()),v(2)&&!this.isTeleportMode&&!this.isMap3DActive){const m=Math.floor(this.player.x),d=Math.floor(this.player.y),h=this.player.z,g=this.maze.get(m,d,h)===this.mazeGen.TYPES.TELEPORT,y=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===m&&this.inactiveTeleportPos.y===d&&this.inactiveTeleportPos.z===h;g&&this.discoveredTeleports.has(`${m},${d},${h}`)&&!y&&(this.discoveredTeleports.size>=2?(this.toggleTeleportMap(!0),this.gamepadTeleportSelectedIndex=0):this.ui.showInfoBanner(Ot("msgNoOtherActiveTeleport")))}if(v(3)&&!this.isTeleportMode&&!this.isMap3DActive){const m=Math.floor(this.player.x),d=Math.floor(this.player.y),h=this.player.z,x=h<this.mazeGen.size-1&&this.maze.get(m,d,h+1)!==0,y=this.maze.get(m,d,h)===this.mazeGen.TYPES.TELEPORT,E=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===m&&this.inactiveTeleportPos.y===d&&this.inactiveTeleportPos.z===h;(!(y&&this.discoveredTeleports.has(`${m},${d},${h}`))||E)&&x&&this.changeFloor(2)}if(v(8)&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D()),this.isTeleportMode){const m=v(4)||v(14),d=v(5)||v(15);if(m||d){const h=this.getTeleportCandidates();h.length>0&&(m?this.gamepadTeleportSelectedIndex=(this.gamepadTeleportSelectedIndex-1+h.length)%h.length:this.gamepadTeleportSelectedIndex=(this.gamepadTeleportSelectedIndex+1)%h.length)}}if(this.isMap3DActive&&this.controls){const m=i.axes[2],d=i.axes[3],h=i.buttons[7]?i.buttons[7].value:0,x=i.buttons[6]?i.buttons[6].value:0,g=.15,y=.15,E=(j.ROT_SPEED!==void 0?j.ROT_SPEED:2)*t,A=20*t,b=Math.abs(m)>g||Math.abs(d)>g,D=h>y||x>y;if(b||D){const M=new k().copy(this.camera.position).sub(this.controls.target),S=new va().setFromVector3(M);if(Math.abs(m)>g&&(S.theta-=m*E),Math.abs(d)>g){S.phi-=d*E;const V=this.controls.minPolarAngle||0,L=this.controls.maxPolarAngle||Math.PI;S.phi=Math.max(V,Math.min(L,S.phi))}h>y&&(S.radius-=h*A),x>y&&(S.radius+=x*A);const N=this.controls.minDistance||2,I=this.controls.maxDistance||100;S.radius=Math.max(N,Math.min(I,S.radius)),S.makeSafe(),M.setFromSpherical(S),this.camera.position.copy(this.controls.target).add(M),this.controls.update()}}this.prevGamepadButtons=i.buttons.map(m=>m.pressed)}queueNotification(t){this.notificationQueue.push(t)}updateNotification(t){if(!this.activeNotification){if(this.notificationQueue.length>0){const i=this.notificationQueue.shift();this.activeNotification={text:i,displayText:"",state:"OPENING",widthProgress:0,typeTimer:0,charIndex:0,waitTimer:0,closeProgress:1}}return}const e=this.activeNotification;e.state==="OPENING"?(e.widthProgress+=t/.15,e.widthProgress>=1&&(e.widthProgress=1,e.state="TYPING")):e.state==="TYPING"?(e.typeTimer+=t,e.typeTimer>=.025&&(e.typeTimer=0,e.charIndex++,e.displayText=e.text.substring(0,e.charIndex),e.charIndex>=e.text.length&&(e.state="WAITING",e.waitTimer=0))):e.state==="WAITING"?(this.isZoomTransitionActive||(e.waitTimer+=t),e.waitTimer>=1&&(e.state="CLOSING",e.closeProgress=1)):e.state==="CLOSING"&&(e.closeProgress-=t/.15,e.closeProgress<=0&&(e.closeProgress=0,this.activeNotification=null))}update(t){if(this.isGameOver||this.isDestroyed||!t)return;if(this.isStoryActive){this.updateGamepad(t),this.updateStory(t);return}if(this.isZoomTransitionActive&&(this.zoomTransitionTimer-=t,this.zoomTransitionTimer<=0&&(this.isZoomTransitionActive=!1,this.zoomTransitionTimer=0)),this.updateNotification(t),this.updateGamepad(t),this.isPaused)return;this.isIntroPlaying||this.hunters.some(o=>o.state!=="SLEEP"&&o.z===this.player.z)&&(this.hunterOnSameFloorDetected||(this.ui.showInfoBanner(Ot("msgDidYouHearThat")),this.hunterOnSameFloorDetected=!0)),this.hunters.some(a=>a.state==="SLEEP")&&this.getMapVisitedPercentage()>=10&&this.wakeHunters();const i=1e3/j.HUNTER_SPEED*t;for(const a of this.hunters)a.visualX=na(a.visualX,a.x,i),a.visualY=na(a.visualY,a.y,i),a.visualZ=na(a.visualZ,a.z,i*2),a.generateCloudTexture(t);if(this.isMap3DActive){this.controls.update();const a=this.mazeGen.size,o=this.isTeleportMode?.25:1;for(const r of this.hunterMeshes){const c=r.hunter;r.mesh.position.set(c.visualX-a/2,(c.visualZ-a/2)*this.vScale,c.visualY-a/2);const u=c.jellyTime,f=1+Math.sin(u*1.2)*.07,p=1+Math.cos(u*.8)*.07,_=1+Math.sin(u*1.5)*.07;r.coreMesh&&(r.coreMesh.scale.set(f,p,_),r.coreMesh.material&&(r.coreMesh.material.emissiveIntensity=(.8+.2*Math.sin(u*3)+(Math.random()<.1?(Math.random()-.5)*.4:0))*o)),r.particles&&r.particles.forEach(x=>{const g=x.userData;g.angle+=g.speed*t;const y=Math.cos(g.angle)*g.radius,E=Math.sin(g.angle)*g.radius,A=Math.sin(g.angle*2+g.phaseY)*.25;let b=0,D=0,M=0;Math.random()<.15?(b=(Math.random()-.5)*.12,D=(Math.random()-.5)*.12,M=(Math.random()-.5)*.12,x.scale.set(1.4+Math.random()*.4,.6+Math.random()*.3,1.4+Math.random()*.4)):x.scale.set(1,1,1),x.position.set(y+b,A+D,E+M)});const v=c.x-c.visualX,m=c.y-c.visualY,d=Math.sqrt(v*v+m*m),h=Math.max(0,Math.min(1,1-d));if(c.lastPos&&(c.lastPos.x!==c.x||c.lastPos.y!==c.y)){r.trail1.position.set(c.lastPos.x-a/2,(c.lastPos.z-a/2)*this.vScale,c.lastPos.y-a/2),r.trail1.visible=!0;const x=c.jellyTime-.2,g=.95-h*.47,y=g*(1+Math.sin(x*1.2)*.07),E=g*(1+Math.cos(x*.8)*.07),A=g*(1+Math.sin(x*1.5)*.07);r.trail1.scale.set(y,E,A),r.trail1.material&&(r.trail1.material.opacity=(.4-h*.2)*o)}else r.trail1.visible=!1;if(c.history&&c.history.length===2){const x=c.history[0];r.trail2.position.set(x.x-a/2,(x.z-a/2)*this.vScale,x.y-a/2);const g=.48*(1-h);if(g>.02){r.trail2.visible=!0;const y=c.jellyTime-.4,E=g*(1+Math.sin(y*1.2)*.07),A=g*(1+Math.cos(y*.8)*.07),b=g*(1+Math.sin(y*1.5)*.07);r.trail2.scale.set(E,A,b),r.trail2.material&&(r.trail2.material.opacity=.2*(1-h)*o)}else r.trail2.visible=!1}else r.trail2.visible=!1}if(this.keyMeshes)for(const r of this.keyMeshes)r.rotation.y+=1.5*t,r.rotation.x+=.5*t;if(this.isTeleportMode&&this.teleportMeshes&&this.gamepadTeleportSelectedIndex!==void 0){const c=this.getTeleportCandidates()[this.gamepadTeleportSelectedIndex];this.teleportMeshes.forEach(l=>{const{gridX:u,gridY:f,gridZ:p}=l.userData;if(c&&u===c.x&&f===c.y&&p===c.z){const v=1.3+.25*Math.sin(Date.now()/100);l.scale.set(v,v,v),l.material&&l.material.emissive&&(l.material.emissive.setHex(16755200),l.material.emissiveIntensity=3.5)}else{const v=u===Math.floor(this.player.x)&&f===Math.floor(this.player.y)&&p===this.player.z,m=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===u&&this.inactiveTeleportPos.y===f&&this.inactiveTeleportPos.z===p;let d=1;v&&(d=1.4),l.scale.set(d,d,d),l.material&&l.material.emissive&&(m?(l.material.emissive.setHex(4473924),l.material.emissiveIntensity=0):v?(l.material.emissive.setHex(65535),l.material.emissiveIntensity=3):(l.material.emissive.setHex(j.COLORS.THREE_TELEPORT),l.material.emissiveIntensity=2.5))}})}}if(!this.isMap3DActive&&!this.isZoomTransitionActive){let a=0,o=0;const l=1e3/j.HUNTER_SPEED*j.MOVE_SPEED_FACTOR*t;let u=0,f=0;if(this.input.touchMoveVector?(u=this.input.touchMoveVector.x,f=this.input.touchMoveVector.y):((this.input.keys.w||this.input.keys.arrowup)&&(f-=1),(this.input.keys.s||this.input.keys.arrowdown)&&(f+=1),(this.input.keys.a||this.input.keys.arrowleft)&&(u-=1),(this.input.keys.d||this.input.keys.arrowright)&&(u+=1)),u!==0||f!==0){const y=Math.sqrt(u*u+f*f);a=u/y*l,o=f/y*l,this.player.dir=Math.atan2(o,a)}let p=!1;if(a!==0||o!==0){p=!0;const y=.01,E=Math.abs(a)>y,A=Math.abs(o)>y;E&&A?(this.playerSide=a>0?"right":"left",this.playerVertical=o>0?"down":"up"):E?this.playerSide=a>0?"right":"left":A&&(this.playerVertical=o>0?"down":"up")}if(p?(this.playerWalkCycle=(this.playerWalkCycle||0)+t*18,this.playerSquashTargetX=1+Math.sin(this.playerWalkCycle)*.15,this.playerSquashTargetY=1-Math.sin(this.playerWalkCycle)*.15):(this.playerSquashTargetX=1,this.playerSquashTargetY=1),this.playerSquashX=this.playerSquashX||1,this.playerSquashY=this.playerSquashY||1,this.playerSquashX+=(this.playerSquashTargetX-this.playerSquashX)*.25,this.playerSquashY+=(this.playerSquashTargetY-this.playerSquashY)*.25,a!==0||o!==0){const y=Math.floor(this.player.x),E=Math.floor(this.player.y),A=this.player.x+a,b=this.player.y+o,D=(K,J,it)=>{const nt=this.maze.get(K,J,it);return nt===this.mazeGen.TYPES.WALL||nt===this.mazeGen.TYPES.STATUE?!1:nt===this.mazeGen.TYPES.EXIT&&this.keysCollected<this.totalKeys?(this.triggerLockedExitWarning(),!1):!0},M=j.PLAYER_COLLISION_RADIUS,S=j.PLAYER_COLLISION_OFFSET_X||0,N=j.PLAYER_COLLISION_OFFSET_Y||0,I=(K,J,it)=>{const nt=Math.floor(K+S-M),Z=Math.floor(K+S+M),C=Math.floor(J+N-M),F=Math.floor(J+N+M);for(let q=nt;q<=Z;q++)for(let U=C;U<=F;U++)if(q<0||q>=this.mazeGen.size||U<0||U>=this.mazeGen.size||!D(q,U,it))return!1;return!0};I(A,this.player.y,this.player.z)&&(this.player.x=A),I(this.player.x,b,this.player.z)&&(this.player.y=b);const V=Math.floor(this.player.x),L=Math.floor(this.player.y),z=this.player.z;if(V!==y||L!==E){const K=this.maze.get(y,E,z);if(K===this.mazeGen.TYPES.VISITED||K===this.mazeGen.TYPES.START||K===this.mazeGen.TYPES.TELEPORT){const it=z+1<this.mazeGen.size&&this.maze.get(V,L,z+1)!==this.mazeGen.TYPES.WALL,nt=z-1>=0&&this.maze.get(V,L,z-1)!==this.mazeGen.TYPES.WALL;it&&nt?this.dialogueWhichWayTriggered||(this.ui.showInfoBanner(Ot("msgWhichWay")),this.dialogueWhichWayTriggered=!0):it?this.dialogueUpTriggered||(this.ui.showInfoBanner(Ot("msgElevatorUp")),this.dialogueUpTriggered=!0):nt&&(this.dialogueDownTriggered||(this.ui.showInfoBanner(Ot("msgElevatorDown")),this.dialogueDownTriggered=!0))}}const W=(K,J,it)=>{const nt=this.maze.get(K,J,it);(nt===this.mazeGen.TYPES.PATH||nt===this.mazeGen.TYPES.KEY)&&(nt===this.mazeGen.TYPES.KEY?this.collectKey(K,J,it):this.maze.set(K,J,it,this.mazeGen.TYPES.VISITED),this.staticMapCacheDirty=!0)};W(V,L,z),V!==y&&L!==E&&(W(V,E,z),W(y,L,z));const $=this.maze.get(V,L,z);!this.exitPathfinderUnlocked&&this.checkExitNeighborVisited()&&(this.exitPathfinderUnlocked=!0,this.ui.showInfoBanner(Ot("msgExitFound"))),$===this.mazeGen.TYPES.EXIT&&this.triggerVictory()}if((a!==0||o!==0)&&(this.skipCellAnimations=!1),this.checkHunterCollision(),this.isGameOver)return;const _=Math.floor(this.player.x),v=Math.floor(this.player.y),m=this.player.z,d=this.maze.get(_,v,m)===this.mazeGen.TYPES.TELEPORT,h=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===_&&this.inactiveTeleportPos.y===v&&this.inactiveTeleportPos.z===m;if(_>=0&&_<this.mazeGen.size&&v>=0&&v<this.mazeGen.size){if(this.maze.get(_,v,m)===this.mazeGen.TYPES.PATH)this.maze.set(_,v,m,this.mazeGen.TYPES.VISITED),this.staticMapCacheDirty=!0;else if(d){const D=`${_},${v},${m}`;!(this.lastPlayerCell&&this.lastPlayerCell.x===_&&this.lastPlayerCell.y===v&&this.lastPlayerCell.z===m)&&!h&&(this.discoveredTeleports.add(D),this.staticMapCacheDirty=!0,this.triggerSave(),this.ui.showInfoBanner(Ot("msgSafePointTeleport")))}const y=m<this.mazeGen.size-1&&this.maze.get(_,v,m+1)!==this.mazeGen.TYPES.WALL,E=m>0&&this.maze.get(_,v,m-1)!==this.mazeGen.TYPES.WALL,A=y||E;if(this.lastPlayerCell){const D=this.lastPlayerCell.x,M=this.lastPlayerCell.y,S=this.lastPlayerCell.z,N=S<this.mazeGen.size-1&&this.maze.get(D,M,S+1)!==this.mazeGen.TYPES.WALL,I=S>0&&this.maze.get(D,M,S-1)!==this.mazeGen.TYPES.WALL;if((N||I)&&(D!==_||M!==v||S!==m)){const z=`${D},${M},${S}`;this.revealedPathSet.has(z)&&(this.revealedPathSet.delete(z),this.staticMapCacheDirty=!0)}}const b=`${_},${v},${m}`;!A&&this.revealedPathSet.has(b)&&(this.revealedPathSet.delete(b),this.staticMapCacheDirty=!0)}d&&!h?(this.input.keys.e||this.input.keys.pageup||this.input.keys.q||this.input.keys.pagedown)&&(["e","q","pageup","pagedown"].forEach(y=>this.input.keys[y]=!1),this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(Ot("msgNoOtherActiveTeleport"))):((this.input.keys.e||this.input.keys.pageup)&&this.changeFloor(2),(this.input.keys.q||this.input.keys.pagedown)&&this.changeFloor(-2)),(!this.lastPlayerCell||this.lastPlayerCell.x!==_||this.lastPlayerCell.y!==v||this.lastPlayerCell.z!==m)&&(this.staticMapCacheDirty=!0);const g=window.innerHeight>window.innerWidth;this.ui.updateMobileMapButton(d,h,g),this.updateFloorUI(),this.lastPlayerCell={x:_,y:v,z:m}}const n=performance.now();if(n-this.lastHunterMove>j.HUNTER_SPEED){if(this.lastHunterMove=n,this.teleportCooldownTicks>0&&(this.teleportCooldownTicks--,this.staticMapCacheDirty=!0,this.teleportCooldownTicks===0)){this.inactiveTeleportPos=null;for(const v of this.hunters){const m=this.maze.get(v.x,v.y,v.z);if(m===this.mazeGen.TYPES.VISITED||m===this.mazeGen.TYPES.START||m===this.mazeGen.TYPES.EXIT){const d=v.state;v.state="TRACKING",d!=="TRACKING"&&!this.dialogueDetectedTriggered&&(this.ui.showInfoBanner(Ot("msgIWasDetected")),this.dialogueDetectedTriggered=!0)}else v.state="WANDERING",v.pathToTarget=[],v.visitedNodes.clear(),v.visitedNodes.add(`${v.x},${v.y},${v.z}`)}}let a=0,o=0;const r=this.hunters.some(v=>v.state==="SLEEP");for(const v of this.hunters){if(v.state==="SLEEP")continue;const m=v.state;v.move(this.player,this.maze,this.mazeGen.TYPES),v.state==="TRACKING"&&m!=="TRACKING"&&!this.dialogueDetectedTriggered&&(this.ui.showInfoBanner(Ot("msgIWasDetected")),this.dialogueDetectedTriggered=!0),(v.state==="TRACKING"||v.state==="TELEPORT_TRACKING")&&a++;const d=v.z===this.player.z;let h=!1;if(d)h=!0;else{const x=Math.max(5,Math.floor(this.degree*1.2));$p({x:v.x,y:v.y,z:v.z},{x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.maze,this.mazeGen.size,this.mazeGen.TYPES.WALL,x,this.mazeGen.startPos)<=x&&(h=!0)}if(h&&o++,this.checkHunterCollision(),this.isGameOver)return}const c=a>0;this.ui.updateHazardWarning(c,this.teleportCooldownTicks,this.isSafeMode,r),c?this.canvas.classList.add("hunted-map-effect"):this.canvas.classList.remove("hunted-map-effect"),this.ui.setNearbyWarning(o>0);let l=1/0;const u=Math.floor(this.player.x),f=Math.floor(this.player.y),p=this.player.z,_=this.hunters.filter(v=>v.state!=="SLEEP");for(const v of _){const m=qp({x:v.x,y:v.y,z:v.z},{x:u,y:f,z:p},this.maze,this.mazeGen.size,this.mazeGen.TYPES.WALL);m<l&&(l=m)}this.ui.updateProximeter(l,_.length,this.isGameOver)}}changeFloor(t){if(this.isGameOver||this.floorTransition)return;this.skipCellAnimations=!0;const e=Math.floor(this.player.x),i=Math.floor(this.player.y),n=this.player.z,a=n+1<this.mazeGen.size&&this.maze.get(e,i,n+1)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,n+1)!==this.mazeGen.TYPES.STATUE,o=n-1>=0&&this.maze.get(e,i,n-1)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,n-1)!==this.mazeGen.TYPES.STATUE;if(t>0&&a||t<0&&o){const r=n+t;if(r>=0&&r<this.mazeGen.size&&this.maze.get(e,i,r)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,r)!==this.mazeGen.TYPES.STATUE){const c=n+t/2;this.maze.get(e,i,c)!==this.mazeGen.TYPES.ELEVATOR_VISITED&&(this.maze.set(e,i,c,this.mazeGen.TYPES.ELEVATOR_VISITED),this.staticMapCacheDirty=!0);const l=`${e},${i},${c}`;this.revealedPathSet.delete(l);const u=document.createElement("canvas");u.width=this.canvas.width,u.height=this.canvas.height;const f=u.getContext("2d");this.renderMapToContext(f,this.player.z),this.player.x=e+j.PLAYER_START_X,this.player.y=i+j.PLAYER_START_Y%1,this.player.z=r,this.staticMapCacheDirty=!0,this.populateFullyRevealedCells(r),this.maze.get(e,i,r)===this.mazeGen.TYPES.PATH&&this.maze.set(e,i,r,this.mazeGen.TYPES.VISITED);const p=document.createElement("canvas");p.width=this.canvas.width,p.height=this.canvas.height;const _=p.getContext("2d");this.renderMapToContext(_,this.player.z),this.floorTransition={canvasOld:u,canvasNew:p,progress:0,duration:.4,delta:t},this.updateFloorUI(),this.draw2DMap(0),this.maze.get(e,i,r)===this.mazeGen.TYPES.EXIT&&this.triggerVictory()}}}toggleMap3D(){this.isMap3DActive=!this.isMap3DActive,this.isTeleportMode=!1;const t=document.getElementById("mobile-teleport-exit-btn");if(t&&t.classList.add("hidden"),this.isMap3DActive){this.ui.setMap3DVisible(!0),this.activeMapFloor=this.player.z,this.visualActiveFloor=this.player.z,this.mapCursor={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.mapZoom=1,this.mapPanOffsetX=0,this.mapPanOffsetY=0,this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="none");const e=document.getElementById("map3d-instructions");e&&(e.style.display="none"),this.isometricCanvas||this.initIsometricCanvas(),this.isometricCanvas.style.display="block"}else this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.remove("hidden"),this.ui.setMap3DVisible(!1),this.isometricCanvas&&(this.isometricCanvas.style.display="none")}build3DMap(t=!1){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(new ho(16777215,.6));const e=new co(16777215,.4);e.position.set(10,20,10),this.scene.add(e),this.pulsatingMaterials=[],this.hunterMeshes=[],this.teleportMeshes=[],this.knownMeshes=[],this.keyMeshes=[],this.exitMesh=null;const i=this.mazeGen.size,n=(x,g,y)=>{if(y<0||y>=i)return!1;const E=this.maze.get(x,g,y);return E===2||E===3||E===4||E===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${x},${g},${y}`)};this.gridMeshes=new Array(i*i*i).fill(null);const a=new we(.9,.9,.9),o=this.isTeleportMode?j.TELEPORT_MAP_OPACITY:1,r=new we(.9,.425,.9),c=new we(.9,.425,.9),l=new us(.35,.35,2*this.vScale,8);new ne({color:j.COLORS.THREE_VISITED,transparent:!0,opacity:.8*o});for(let x=0;x<i;x++)for(let g=0;g<i;g++)for(let y=0;y<i;y++){const E=this.maze.get(x,g,y);if(E===this.mazeGen.TYPES.WALL||E===this.mazeGen.TYPES.STATUE)continue;if(y%2===0&&E!==0){const z=`${x},${g},${y}`,G=this.revealedPathSet.has(z),W=E===this.mazeGen.TYPES.ELEVATOR_VISITED,$=E===1&&(n(x,g,y-1)||n(x,g,y+1));if(W||$||G||t){let K;if(G)K=new ne({color:16777215,transparent:!0,opacity:.95*o,emissive:16777215,emissiveIntensity:2*o});else if(W)K=new ne({color:j.COLORS.THREE_VISITED,transparent:!0,opacity:.8*o});else if($||t){const it=t?j.COLORS.THREE_VISITED:j.COLORS.THREE_KNOWN;K=new ne({color:it,transparent:!0,opacity:t?.72:.6*o,emissive:it,emissiveIntensity:t?0:.5*o}),t||this.pulsatingMaterials.push(K)}const J=new te(l,K);J.position.set(x-i/2,(y-i/2)*this.vScale,g-i/2),this.scene.add(J),this.gridMeshes[x*i*i+g*i+y]=J,$&&!G&&(J.userData={gridX:x,gridY:g,gridZ:y},this.knownMeshes.push(J))}continue}const b=E===this.mazeGen.TYPES.TELEPORT,D=b&&this.discoveredTeleports.has(`${x},${g},${y}`),M=E===2||E===3||E===4||E===5||D,S=(E===1||b&&!D)&&this.isNearVisited(x,g,y);if(D){if(x===Math.floor(this.mazeGen.startPos.x)&&g===Math.floor(this.mazeGen.startPos.y)&&y===this.mazeGen.startPos.z){const F=this.isTeleportMode?2.5:.5,q=new ne({color:j.COLORS.THREE_START,emissive:j.COLORS.THREE_START,emissiveIntensity:F*o,transparent:!0,opacity:this.isTeleportMode?.95:.8*o}),U=new te(a,q);U.position.set(x-i/2,(y-i/2)*this.vScale,g-i/2),this.isTeleportMode&&U.scale.set(1.4,1.4,1.4),U.userData={isTeleport:!0,gridX:x,gridY:g,gridZ:y},this.scene.add(U),this.teleportMeshes.push(U);continue}const G=x===Math.floor(this.player.x)&&g===Math.floor(this.player.y)&&y===this.player.z,W=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===x&&this.inactiveTeleportPos.y===g&&this.inactiveTeleportPos.z===y;let $=this.isTeleportMode?.9:.45,K=this.isTeleportMode?2.5:.8,J=j.COLORS.THREE_TELEPORT,it=.95;W?(J=4473924,K=0,it=.4):this.isTeleportMode&&G&&(J=65535,it=.5,K=3);const nt=new Tn($,16,16),Z=new ne({color:J,emissive:J,emissiveIntensity:K,transparent:!0,opacity:it}),C=new te(nt,Z);C.position.set(x-i/2,(y-i/2)*this.vScale,g-i/2),C.userData={isTeleport:!0,gridX:x,gridY:g,gridZ:y},this.scene.add(C),this.teleportMeshes.push(C);continue}if(E===this.mazeGen.TYPES.KEY){const z=new Ra(.3,0),G=new ne({color:j.COLORS.THREE_KEY,emissive:j.COLORS.THREE_KEY,emissiveIntensity:.6*o,shininess:100}),W=new te(z,G);W.position.set(x-i/2,(y-i/2)*this.vScale,g-i/2),W.userData={isKey:!0,gridX:x,gridY:g,gridZ:y},this.scene.add(W),this.keyMeshes.push(W),this.pulsatingMaterials.push(G);continue}const I=`${x},${g},${y}`,V=this.revealedPathSet.has(I);if(t?E!==this.mazeGen.TYPES.WALL:M||S||V){let z=t?j.COLORS.THREE_VISITED:j.COLORS.THREE_KNOWN,G;V?(z=16777215,G=new ne({color:z,transparent:!0,opacity:.95*o,emissive:z,emissiveIntensity:2*o})):M||t?(z=j.COLORS.THREE_VISITED,E===3?z=j.COLORS.THREE_START:E===4&&(z=this.keysCollected===this.totalKeys?j.COLORS.THREE_EXIT:16724736),G=new ne({color:z,transparent:!0,opacity:t?.72:.8*o})):S&&(G=new ne({color:z,transparent:!0,opacity:.6*o,emissive:z,emissiveIntensity:.5*o}),this.pulsatingMaterials.push(G));const W=y<i-1&&this.maze.get(x,g,y+1)!==0,$=y>0&&this.maze.get(x,g,y-1)!==0;if(W||$){const nt=this.pulsatingMaterials.indexOf(G);if(nt>-1&&this.pulsatingMaterials.splice(nt,1),W&&$){let Z=!1,C=!1;if(V){if(this.activePathReveal){const wt=this.activePathReveal.findIndex(H=>H.x===x&&H.y===g&&H.z===y);if(wt!==-1&&wt<this.activePathReveal.length-1){const H=this.activePathReveal[wt+1];H.z>y&&(Z=!0),H.z<y&&(C=!0)}}!Z&&!C&&(Z=this.revealedPathSet.has(`${x},${g},${y+1}`)||this.revealedPathSet.has(`${x},${g},${y+2}`),C=this.revealedPathSet.has(`${x},${g},${y-1}`)||this.revealedPathSet.has(`${x},${g},${y-2}`))}const F=V&&(Z||!Z&&!C),q=V&&(C||!Z&&!C),U=new ne({color:q?16777215:j.COLORS.THREE_ELEVATOR_DOWN,transparent:!0,opacity:.9*o,emissive:q?16777215:j.COLORS.THREE_ELEVATOR_DOWN,emissiveIntensity:(q?2:.4)*o}),X=new ne({color:F?16777215:j.COLORS.THREE_ELEVATOR_UP,transparent:!0,opacity:.9*o,emissive:F?16777215:j.COLORS.THREE_ELEVATOR_UP,emissiveIntensity:(F?2:.4)*o}),lt=new te(r,U),ht=new te(c,X);lt.position.set(x-i/2,(y-i/2)*this.vScale-.2125,g-i/2),ht.position.set(x-i/2,(y-i/2)*this.vScale+.2125,g-i/2),this.scene.add(lt),this.scene.add(ht),this.gridMeshes[x*i*i+g*i+y]=ht,S&&!V&&(lt.userData={gridX:x,gridY:g,gridZ:y},ht.userData={gridX:x,gridY:g,gridZ:y},this.knownMeshes.push(lt),this.knownMeshes.push(ht));continue}else{const Z=V?16777215:W?j.COLORS.THREE_ELEVATOR_UP:j.COLORS.THREE_ELEVATOR_DOWN,C=V?2:.4;G=new ne({color:Z,transparent:!0,opacity:.9*o,emissive:Z,emissiveIntensity:C*o})}}const K=x===Math.floor(this.player.x)&&g===Math.floor(this.player.y)&&y===this.player.z,J=this.hunters.some(nt=>nt.x===x&&nt.y===g&&nt.z===y);if(K||J){const nt=new we(.9,.05,.9),Z=new te(nt,G);Z.position.set(x-i/2,(y-i/2)*this.vScale-.425,g-i/2),this.scene.add(Z),this.gridMeshes[x*i*i+g*i+y]=Z;continue}const it=new te(a,G);if(it.position.set(x-i/2,(y-i/2)*this.vScale,g-i/2),E===4&&(this.exitMesh=it,this.keysCollected<this.totalKeys)){const nt=new we(.95,.95,.95),Z=new ds({color:16711680,wireframe:!0}),C=new te(nt,Z);it.add(C)}this.scene.add(it),this.gridMeshes[x*i*i+g*i+y]=it,(S||E===this.mazeGen.TYPES.EXIT)&&!V&&(it.userData={gridX:x,gridY:g,gridZ:y},this.knownMeshes.push(it))}}if(t)return;const u=new Tn(.42,16,16),f=new ne({color:16711680,emissive:16711680,emissiveIntensity:.8,depthWrite:!1}),p=new te(u,f);p.position.set(Math.floor(this.player.x)-i/2,(this.player.z-i/2)*this.vScale+.05,Math.floor(this.player.y)-i/2),this.scene.add(p);const _=new Tn(.4),v=new ne({color:j.COLORS.THREE_HUNTER,emissive:j.COLORS.THREE_HUNTER,emissiveIntensity:.8,depthWrite:!1}),m=new ne({color:j.COLORS.THREE_HUNTER,transparent:!0,opacity:.4,emissive:j.COLORS.THREE_HUNTER,emissiveIntensity:.3,depthWrite:!1}),d=new ne({color:j.COLORS.THREE_HUNTER,transparent:!0,opacity:.15,emissive:j.COLORS.THREE_HUNTER,emissiveIntensity:.1,depthWrite:!1}),h=_;for(let x=0;x<this.hunters.length;x++){const g=this.hunters[x];if(g.state==="SLEEP")continue;const y=new te(h,d),E=new te(h,m);y.visible=!1,E.visible=!1,y.renderOrder=99,E.renderOrder=99,this.scene.add(y),this.scene.add(E);const A=new xn;A.renderOrder=99;const b=new te(_,v);A.add(b);const D=4,M=[],S=new we(.18,.18,.18),N=[j.COLORS.THREE_HUNTER,16711935,65535,16776960];for(let I=0;I<D;I++){const V=new ne({color:N[I%N.length],transparent:!0,opacity:.8,emissive:N[I%N.length],emissiveIntensity:.8,depthWrite:!1}),L=new te(S,V);L.userData={angle:I/D*Math.PI*2,radius:.35+Math.random()*.1,speed:1+Math.random()*1.5,phaseY:Math.random()*Math.PI*2},A.add(L),M.push(L)}A.position.set(g.x-i/2,(g.z-i/2)*this.vScale,g.y-i/2),this.scene.add(A),this.hunterMeshes.push({hunter:g,mesh:A,coreMesh:b,particles:M,trail1:E,trail2:y})}this.camera.position.set(i,i*this.vScale,i),this.controls.target.set(0,0,0),this.controls.update()}draw2DMap(t=.016){if(this.deathAnimation&&this.deathAnimation.active)if(!this.deathAnimation.screenFilled)this.deathAnimation.elapsed+=t,this.deathAnimation.elapsed>=this.deathAnimation.duration&&(this.deathAnimation.screenFilled=!0);else{if(this.deathAnimation.glitchElapsed+=t,!this.deathAnimation.uiTriggered){this.deathAnimation.uiTriggered=!0,this.ui.showDeath(this.hasSavePoint);const a=document.getElementById("game-over-screen");a&&(a.style.opacity="0")}this.deathAnimation.uiFade=Math.min(1,this.deathAnimation.glitchElapsed/this.deathAnimation.glitchDuration);const n=document.getElementById("game-over-screen");n&&(n.style.opacity=this.deathAnimation.uiFade)}this.floorTransition&&(this.floorTransition.progress+=t/this.floorTransition.duration,this.floorTransition.progress>=1&&(this.floorTransition=null));const e=this.mazeGen.size,i=this.isZoomActive?11:e;if(this.zoomVisibleCells===void 0?this.zoomVisibleCells=i:(this.zoomVisibleCells+=(i-this.zoomVisibleCells)*(1-Math.exp(-12*t)),Math.abs(this.zoomVisibleCells-i)<.01&&(this.zoomVisibleCells=i)),this.floorTransition){const n=this.floorTransition.progress,a=this.canvas.width/2,o=this.canvas.height/2,r=this.floorTransition.delta>0;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let c,l;r?(c=1-.2*n,l=1.2-.2*n):(c=1+.2*n,l=.8+.2*n),this.ctx.save(),this.ctx.globalAlpha=1-n,this.ctx.translate(a,o),this.ctx.scale(c,c),this.ctx.drawImage(this.floorTransition.canvasOld,-a,-o),this.ctx.restore(),this.ctx.save(),this.ctx.globalAlpha=n,this.ctx.translate(a,o),this.ctx.scale(l,l),this.ctx.drawImage(this.floorTransition.canvasNew,-a,-o),this.ctx.restore()}else this.renderMapToContext(this.ctx,this.player.z)}renderMapToContext(t,e){t.clearRect(0,0,t.canvas.width,t.canvas.height);const i=this.mazeGen.size,n=i>11,a=n?t.canvas.width/11:t.canvas.width/i,o=this.player.x,r=this.player.y;let c=n||this.isZoomTransitionActive,l=n?this.zoomVisibleCells:i;if(this.isZoomTransitionActive){const x=Math.min(1,(2-this.zoomTransitionTimer)/2),y=(b=>1-Math.pow(1-b,3))(x),E=3;l=E+((n?11:i)-E)*y}if(c){t.save();const h=(n?11:i)/l,x=l/2;let g=o,y=r;g<x&&(g=x),g>i-x&&(g=i-x),y<x&&(y=x),y>i-x&&(y=i-x);const E=t.canvas.width/2,A=t.canvas.height/2;t.translate(E,A),t.scale(h,h),t.translate(-g*a,-y*a)}const u=n?i*a:this.canvas.width,f=n?i*a:this.canvas.height;(this.staticMapCacheDirty||this.staticMapCacheCanvas.width!==u||this.staticMapCacheCanvas.height!==f)&&this.updateStaticMapCache(e),t.drawImage(this.staticMapCacheCanvas,0,0);const p=Math.floor(o),_=Math.floor(r);if(this.maze.get(p,_,e)===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${p},${_},${e}`)&&!(this.inactiveTeleportPos&&this.inactiveTeleportPos.x===p&&this.inactiveTeleportPos.y===_&&this.inactiveTeleportPos.z===e)){const x=.85+.15*Math.sin(Date.now()/150);t.save(),t.globalAlpha=x,t.fillStyle=j.COLORS.TELEPORT,t.fillRect(p*a,_*a,a,a),t.restore()}for(const h of this.hunters){if(h.state==="SLEEP")continue;const x=Math.abs(h.visualZ-e),g=Math.max(0,1-x);if(g<=0)continue;const y=h.x-h.visualX,E=h.y-h.visualY,A=Math.sqrt(y*y+E*E),b=Math.max(0,Math.min(1,1-A)),D=[];if(h.lastPos&&(h.lastPos.x!==h.x||h.lastPos.y!==h.y)&&h.lastPos.z===e){const M=.95-b*.47,S=.4-b*.2;D.push({pos:h.lastPos,sizeFactor:M,opacityFactor:S,age:1})}if(h.history&&h.history.length===2){const M=h.history[0];if(M.z===e){const S=.48*(1-b),N=.2*(1-b);S>.01&&D.push({pos:M,sizeFactor:S,opacityFactor:N,age:2})}}if(D.forEach(M=>{if(h.lowCanvas){const S=M.pos.x*a+a/2,N=M.pos.y*a+a/2,I=a*M.sizeFactor*g,V=h.jellyTime-M.age*.2,L=Math.sin(V)*6,z=Math.cos(V*.7)*4,G=1+Math.sin(V*1.2)*.06,W=1+Math.cos(V*.8)*.06,$=L*Math.PI/180,K=z*Math.PI/180;t.save(),t.globalAlpha=M.opacityFactor,t.translate(S,N),t.transform(G,Math.tan(K),Math.tan($),W,0,0),t.imageSmoothingEnabled=!1,t.drawImage(h.lowCanvas,-I/2,-I/2,I,I),t.restore()}}),h.lowCanvas){const M=h.visualX*a+a/2,S=h.visualY*a+a/2,N=a*.95*g,I=h.jellyTime,V=Math.sin(I)*6,L=Math.cos(I*.7)*4,z=1+Math.sin(I*1.2)*.06,G=1+Math.cos(I*.8)*.06,W=V*Math.PI/180,$=L*Math.PI/180;t.save();const K=-a*.12*g,J=-a*.12*g;t.translate(M+K,S+J),t.transform(z,Math.tan($),Math.tan(W),G,0,0),t.filter="brightness(0) blur(1px) opacity(0.35)",t.imageSmoothingEnabled=!1,t.drawImage(h.lowCanvas,-N/2,-N/2,N,N),t.restore(),t.save(),t.translate(M,S),t.transform(z,Math.tan($),Math.tan(W),G,0,0),t.imageSmoothingEnabled=!1,t.drawImage(h.lowCanvas,-N/2,-N/2,N,N),t.restore()}}if(!this.deathAnimation||!this.deathAnimation.active){const h=`${this.playerVertical}_${this.playerSide}`,x=this.mageImages[h],g=o*a,y=r*a,E=j.PLAYER_SHADOW_OFFSET_X!==void 0?j.PLAYER_SHADOW_OFFSET_X:-.28,A=j.PLAYER_SHADOW_OFFSET_Y!==void 0?j.PLAYER_SHADOW_OFFSET_Y:-.28,b=g+a*E,D=y+a*A;t.save(),t.beginPath();const M=j.PLAYER_SHADOW_WIDTH_FACTOR!==void 0?j.PLAYER_SHADOW_WIDTH_FACTOR:.45,S=j.PLAYER_SHADOW_HEIGHT_FACTOR!==void 0?j.PLAYER_SHADOW_HEIGHT_FACTOR:.3,N=a*M,I=a*S;t.ellipse(b,D,N,I,0,0,Math.PI*2),t.fillStyle="rgba(0, 0, 0, 0.4)",t.fill(),t.restore();const V=Math.max(0,Math.floor((b-N)/a)),L=Math.min(i-1,Math.floor((b+N)/a)),z=Math.max(0,Math.floor((D-I)/a)),G=Math.min(i-1,Math.floor((D+I)/a));for(let W=V;W<=L;W++)for(let $=z;$<=G;$++)this.maze.get(W,$,e)===0&&(this.isNearVisited(W,$,e)||this.isAdjacentToStatue(W,$,e))&&(t.save(),this.wallImage.complete&&this.wallImage.naturalWidth!==0?t.drawImage(this.wallImage,W*a,$*a,a,a):(t.fillStyle=j.COLORS.WALL,t.fillRect(W*a,$*a,a,a)),t.restore());if(x&&x.complete){t.save();const W=a*.9,$=W,K=W*(x.height/x.width);t.translate(g,y),t.scale(this.playerSquashX||1,this.playerSquashY||1);const J=-K*.85;t.drawImage(x,-$/2,J,$,K),t.restore()}else t.save(),t.strokeStyle=j.COLORS.PLAYER_OUTLINE,t.lineWidth=1,t.strokeRect(p*a+2,_*a+2,a-4,a-4),t.restore(),t.fillStyle=j.COLORS.PLAYER,t.beginPath(),t.arc(g,y,a*.4,0,Math.PI*2),t.fill(),t.strokeStyle=j.COLORS.PLAYER,t.lineWidth=2,t.beginPath(),t.moveTo(g,y),t.lineTo(g+Math.cos(this.player.dir)*a*1,y+Math.sin(this.player.dir)*a*1),t.stroke();if(j.SHOW_COLLISION_DEBUG){t.save(),t.strokeStyle="#ff0000",t.lineWidth=1.5;const W=j.PLAYER_COLLISION_RADIUS*2*a,$=(j.PLAYER_COLLISION_OFFSET_X||0)*a,K=(j.PLAYER_COLLISION_OFFSET_Y||0)*a;t.strokeRect(g+$-W/2,y+K-W/2,W,W),t.restore()}}if(this.activeNotification){const h=this.activeNotification;t.save(),t.font=`bold ${a*.22}px monospace`;const x=t.measureText(h.text).width,g=a*.4,y=x+g,E=a*.48,A=o*a,b=r*a-a*1.5;let D=y;h.state==="OPENING"?D=y*h.widthProgress:h.state==="CLOSING"&&(D=y*h.closeProgress);const M=this.mazeGen.size*a,S=this.mazeGen.size*a;let N=A;N-D/2<0?N=D/2:N+D/2>M&&(N=M-D/2);let I=b;I-E/2<0?I=E/2:I+E/2>S&&(I=S-E/2),t.fillStyle="#000000",t.fillRect(N-D/2,I-E/2,D,E),t.strokeStyle="#00ffff",t.lineWidth=Math.max(1.5,a*.04),t.strokeRect(N-D/2,I-E/2,D,E),(h.state==="TYPING"||h.state==="WAITING")&&(t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.fillText(h.displayText,N,I)),t.restore()}if(c&&t.restore(),this.isZoomTransitionActive){const g=1-Math.min(1,(2-this.zoomTransitionTimer)/2);t.save(),t.fillStyle=`rgba(0, 0, 0, ${g})`,t.fillRect(0,0,t.canvas.width,t.canvas.height),t.restore()}if(this.deathAnimation&&this.deathAnimation.active){const h=this.deathAnimation.hunter;let x,g;if(n){const y=11/this.zoomVisibleCells,E=this.zoomVisibleCells/2;let A=o,b=r;A<E&&(A=E),A>i-E&&(A=i-E),b<E&&(b=E),b>i-E&&(b=i-E);const D=t.canvas.width/2,M=t.canvas.height/2;x=D+(h.visualX+.5-A)*a*y,g=M+(h.visualY+.5-b)*a*y}else x=(h.visualX+.5)*a,g=(h.visualY+.5)*a;if(this.deathAnimation.screenFilled){t.fillStyle="rgba(10, 0, 15, 1.0)",t.fillRect(0,0,t.canvas.width,t.canvas.height),t.fillStyle="rgba(138, 3, 196, 0.08)";for(let A=0;A<t.canvas.height;A+=6)Math.random()<.6&&t.fillRect(0,A+Math.sin(Date.now()*.01+A)*2,t.canvas.width,2);const y=Math.floor(Math.random()*5)+3,E=["#00ff66","#ff0055","#00ccff","#ffff00","#8a03c4","#ffffff"];for(let A=0;A<y;A++){const b=Math.random()*t.canvas.width,D=Math.random()*t.canvas.height,M=80+Math.random()*250,S=8+Math.random()*30;t.fillStyle=E[Math.floor(Math.random()*E.length)],t.globalAlpha=.12+Math.random()*.18,t.fillRect(b,D,M,S)}if(t.globalAlpha=1,Math.random()<.35){const A=Math.floor(Math.random()*t.canvas.height),b=15+Math.floor(Math.random()*80),D=Math.floor(Math.random()*40)-20;t.drawImage(t.canvas,0,A,t.canvas.width,b,D,A,t.canvas.width,b)}Math.random()<.15&&(t.fillStyle="rgba(255, 255, 255, 0.05)",t.fillRect(0,Math.random()*t.canvas.height,t.canvas.width,5+Math.random()*20))}else{const y=Math.hypot(t.canvas.width,t.canvas.height)*1.1,E=this.deathAnimation.elapsed/this.deathAnimation.duration,b=E*E*(3-2*E)*y;t.save(),t.beginPath(),t.arc(x,g,b,0,Math.PI*2),t.clip(),t.fillStyle="rgba(15, 0, 25, 0.96)",t.fillRect(0,0,t.canvas.width,t.canvas.height);const D=45,M=n?11/this.zoomVisibleCells:1;for(let S=0;S<D;S++){const N=Math.random()*Math.PI*2,I=Math.pow(Math.random(),.7)*b,V=x+Math.cos(N)*I,L=g+Math.sin(N)*I,z=(15+Math.random()*70)*M,G=(3+Math.random()*12)*M,W=80+Math.floor(Math.random()*50),$=Math.floor(Math.random()*25),K=130+Math.floor(Math.random()*70);t.fillStyle=Math.random()<.12?"#00ff66":Math.random()<.12?"#00ccff":Math.random()<.08?"#ffffff":`rgb(${W},${$},${K})`,t.fillRect(V-z/2,L-G/2,z,G)}if(Math.random()<.3){t.fillStyle=Math.random()<.7?"#ffffff":"#b3ffff";const S=x+(Math.random()-.5)*b*.8,N=g+(Math.random()-.5)*b*.8,I=(2+Math.random()*5)*M,V=(10+Math.random()*30)*M;t.fillRect(S-I/2,N-V/2,I,V)}t.restore()}}}updateStaticMapCache(t){const e=this.mazeGen.size,i=e>11,n=i?this.canvas.width/11:this.canvas.width/e,a=i?e*n:this.canvas.width,o=i?e*n:this.canvas.height;(this.staticMapCacheCanvas.width!==a||this.staticMapCacheCanvas.height!==o)&&(this.staticMapCacheCanvas.width=a,this.staticMapCacheCanvas.height=o);const r=this.staticMapCacheCtx;r.clearRect(0,0,a,o);const c=this.player.x,l=this.player.y,u=Math.floor(this.mazeGen.startPos.x),f=Math.floor(this.mazeGen.startPos.y),p=this.mazeGen.startPos.z,_=Date.now();let v=!1;const m=(d,h,x)=>{const g=`${d},${h},${t}`;if(this.skipCellAnimations||this.fullyRevealedCells.has(g))x(),this.skipCellAnimations&&this.fullyRevealedCells.add(g);else{let y=this.revealedCellsAnimation.get(g);y===void 0&&(this.revealedCellsAnimation.set(g,_),y=_);const E=_-y,b=Math.min(1,E/400);b<1?(r.save(),r.globalAlpha=b,x(),r.restore(),v=!0):(x(),this.revealedCellsAnimation.delete(g),this.fullyRevealedCells.add(g))}};for(let d=0;d<e;d++)for(let h=0;h<e;h++){const x=this.maze.get(d,h,t);if(x===this.mazeGen.TYPES.STATUE){m(d,h,()=>{if(this.floorImage.complete&&this.floorImage.naturalWidth!==0?r.drawImage(this.floorImage,d*n,h*n,n,n):(r.fillStyle=j.COLORS.PATH_VISITED,r.fillRect(d*n,h*n,n,n)),r.fillStyle="rgba(0, 0, 0, 0.4)",r.beginPath(),r.ellipse(d*n+n/2,(h+1)*n-n*.15,n*.35,n*.12,0,0,Math.PI*2),r.fill(),this.statueImage.complete&&this.statueImage.naturalWidth!==0){const I=this.statueImage.width/this.statueImage.height,V=n*.85,L=V/I,z=d*n+n/2,G=(h+1)*n-n*.05;r.drawImage(this.statueImage,z-V/2,G-L,V,L)}else r.fillStyle="#555555",r.fillRect(d*n+n*.3,h*n+n*.1,n*.4,n*.8)});continue}const g=x===this.mazeGen.TYPES.TELEPORT,y=g&&this.discoveredTeleports.has(`${d},${h},${t}`),E=x===2||x===3||x===4||x===5||y,A=x===this.mazeGen.TYPES.KEY,b=(x===1||g&&!y)&&this.isNearVisited(d,h,t),D=this.revealedPathSet.has(`${d},${h},${t}`),M=t<e-1&&this.maze.get(d,h,t+1)!==0,S=t>0&&this.maze.get(d,h,t-1)!==0,N=M||S;D?m(d,h,()=>{N?this.drawElevator2D(r,d,h,n,M,S,c,l,!0,t):(r.fillStyle=j.COLORS.REVEALED_PATH,r.fillRect(d*n,h*n,n,n))}):E?m(d,h,()=>{if(y){if(d===u&&h===f&&t===p)r.fillStyle=j.COLORS.START;else{const V=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===d&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===t;r.fillStyle=V?j.COLORS.TELEPORT_INACTIVE:j.COLORS.TELEPORT}r.fillRect(d*n,h*n,n,n)}else if(N)this.drawElevator2D(r,d,h,n,M,S,c,l,!1,t);else if(x===2&&this.floorImage.complete&&this.floorImage.naturalWidth!==0)r.drawImage(this.floorImage,d*n,h*n,n,n);else if(x===this.mazeGen.TYPES.EXIT){if(r.fillStyle=j.COLORS.EXIT,r.fillRect(d*n,h*n,n,n),this.keysCollected<this.totalKeys){r.strokeStyle="#ff3300",r.lineWidth=Math.max(2,n*.08);const I=d*n+n/2,V=h*n+n/2,L=n*.2;r.beginPath(),r.arc(I,V-L*.2,L*.6,Math.PI,0),r.stroke(),r.fillStyle="#111",r.fillRect(I-L,V-L*.1,L*2,L*1.5),r.strokeRect(I-L,V-L*.1,L*2,L*1.5),r.fillStyle="#ff3300",r.font=`bold ${Math.max(10,n*.35)}px sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(this.totalKeys-this.keysCollected,I,V+L*.6)}}else r.fillStyle=x===2?j.COLORS.PATH_VISITED:j.COLORS.START,r.fillRect(d*n,h*n,n,n);this.drawCellShadow2D(r,d,h,n,e,x,t)}):A?(m(d,h,()=>{const I=n*.05*Math.sin(Date.now()/300);this.keyImage.complete&&this.keyImage.naturalWidth!==0?r.drawImage(this.keyImage,d*n+n*.15,h*n+n*.15+I,n*.7,n*.7):(r.beginPath(),r.arc(d*n+n/2,h*n+n/2+I,n*.25,0,2*Math.PI),r.fillStyle="#ffd700",r.fill()),this.drawCellShadow2D(r,d,h,n,e,x,t)}),v=!0):b?(m(d,h,()=>{if(this.floorImage.complete&&this.floorImage.naturalWidth!==0){r.save(),r.globalAlpha=.35,r.drawImage(this.floorImage,d*n,h*n,n,n),r.restore();const I=.22+.12*Math.sin(Date.now()/250);r.fillStyle=`rgba(136, 204, 255, ${I})`,r.fillRect(d*n,h*n,n,n)}else r.fillStyle=j.COLORS.PATH_KNOWN,r.fillRect(d*n,h*n,n,n)}),v=!0):x===0&&(this.isNearVisited(d,h,t)||this.isAdjacentToStatue(d,h,t))&&m(d,h,()=>{this.wallImage.complete&&this.wallImage.naturalWidth!==0?r.drawImage(this.wallImage,d*n,h*n,n,n):(r.fillStyle=j.COLORS.WALL,r.fillRect(d*n,h*n,n,n))})}v?this.staticMapCacheDirty=!0:this.staticMapCacheDirty=!1}isNearVisited(t,e,i){for(let n=-1;n<=1;n++)for(let a=-1;a<=1;a++){const o=t+n,r=e+a;if(o>=0&&o<this.mazeGen.size&&r>=0&&r<this.mazeGen.size){const c=this.maze.get(o,r,i);if(c===2||c===3||c===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${o},${r},${i}`))return!0}}return!1}isAdjacentToStatue(t,e,i){const n=this.mazeGen.size,a=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:1},{dx:-1,dy:1},{dx:1,dy:-1},{dx:-1,dy:-1}];for(const o of a){const r=t+o.dx,c=e+o.dy;if(r>=0&&r<n&&c>=0&&c<n&&this.maze.get(r,c,i)===this.mazeGen.TYPES.STATUE)return!0}return!1}populateFullyRevealedCells(t){const e=this.mazeGen.size;for(let i=0;i<e;i++)for(let n=0;n<e;n++){const a=this.maze.get(i,n,t),o=a===this.mazeGen.TYPES.TELEPORT,r=o&&this.discoveredTeleports.has(`${i},${n},${t}`),c=a===2||a===3||a===4||a===5||r,l=(a===1||o&&!r)&&this.isNearVisited(i,n,t),u=this.revealedPathSet.has(`${i},${n},${t}`);(c||l||u||a===0&&this.isNearVisited(i,n,t))&&this.fullyRevealedCells.add(`${i},${n},${t}`)}}updatePulse(){if(!this.isMap3DActive||this.pulsatingMaterials.length===0)return;const t=.2+.5*Math.abs(Math.sin(Date.now()*.003));this.pulsatingMaterials.forEach(e=>{e.emissiveIntensity=t})}loop(){if(this.isDestroyed)return;const t=performance.now(),e=(t-this.lastFrameTime)/1e3;this.lastFrameTime=t;const i=Math.min(e,.1);if(this.isIntroPlaying?this.controls.update():this.update(i),this.isMap3DActive||this.isIntroPlaying)if(this.isIntroPlaying)this.renderer.render(this.scene,this.camera);else{const n=1-Math.exp(-10*i);this.visualActiveFloor+=(this.activeMapFloor-this.visualActiveFloor)*n,Math.abs(this.activeMapFloor-this.visualActiveFloor)<.001&&(this.visualActiveFloor=this.activeMapFloor),this.drawIsometricMap()}else this.draw2DMap(i);requestAnimationFrame(()=>this.loop())}playContinueAnimation(){this.isIntroPlaying=!0;const t=this.mazeGen.size;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="block");const e=document.getElementById("map3d-instructions");e&&(e.style.display="block"),this.isometricCanvas&&(this.isometricCanvas.style.display="none"),this.ui.setMap3DVisible(!0),this.isMap3DActive=!0,this.updateRendererSize(),this.build3DMap(!1),this.camera.position.set(t*.9,t*this.vScale*.6,t*.9),this.controls.target.set(0,0,0),this.controls.update(),this.hideCanvasInstant(),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=2,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableRotate=!1;const i=()=>{this.activeContinueTimer&&(clearTimeout(this.activeContinueTimer),this.activeContinueTimer=null),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this.controls.autoRotate=!1,this.animateCameraToPlayer(()=>{this._transitionToGame()})};this.activeSkipHandler=()=>i(),window.addEventListener("keydown",this.activeSkipHandler,{once:!0}),window.addEventListener("touchstart",this.activeSkipHandler,{once:!0}),this.activeContinueTimer=setTimeout(i,2500)}animateCameraToPlayer(t){const e=this.mazeGen.size,i=this.player.x-e/2,n=(this.player.z-e/2)*this.vScale,a=this.player.y-e/2,o=this.controls.target.clone(),r=new k(i,n,a),c=this.camera.position.clone(),l=new k(i+4,n+5,a+4),u=1100,f=performance.now(),p=_=>{if(this.isDestroyed)return;const v=_-f,m=Math.min(v/u,1),d=m<.5?4*m*m*m:1-Math.pow(-2*m+2,3)/2;this.controls.target.lerpVectors(o,r,d),this.camera.position.lerpVectors(c,l,d),this.controls.update(),m<1?requestAnimationFrame(p):t()};requestAnimationFrame(p)}playIntroAnimation(){this.isIntroPlaying=!0;const t=this.mazeGen.size;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="block");const e=document.getElementById("map3d-instructions");for(e&&(e.style.display="block"),this.isometricCanvas&&(this.isometricCanvas.style.display="none");this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(new ho(16777215,.7));const i=new co(16777215,.5);i.position.set(10,20,10),this.scene.add(i),this.ui.setMap3DVisible(!0),this.isMap3DActive=!0,this.updateRendererSize(),this.camera.position.set(t*.9,t*this.vScale*.6,t*.9),this.controls.target.set(0,0,0),this.controls.update(),this.hideCanvasInstant();const n=this.mazeGen.startPos,a=this.getExitPos(),o=new we(.92,.92,.92),r=new ne({color:j.COLORS.THREE_START,emissive:j.COLORS.THREE_START,emissiveIntensity:.6,transparent:!0,opacity:.95}),c=new te(o,r);c.position.set(Math.floor(n.x)-t/2,(n.z-t/2)*this.vScale,Math.floor(n.y)-t/2),this.scene.add(c);const l=new ne({color:16724736,emissive:16724736,emissiveIntensity:.6,transparent:!0,opacity:.95}),u=new te(o,l);u.position.set(a.x-t/2,(a.z-t/2)*this.vScale,a.y-t/2);const f=new we(.95,.95,.95),p=new ds({color:16711680,wireframe:!0}),_=new te(f,p);u.add(_),this.scene.add(u);const v=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],m=`${Math.floor(n.x)},${Math.floor(n.y)},${n.z}`,d=`${a.x},${a.y},${a.z}`,h=new Set([m,d]),x=[{x:Math.floor(n.x),y:Math.floor(n.y),z:n.z}],g=[{x:a.x,y:a.y,z:a.z}];let y=0,E=0;const A=[];for(;y<x.length||E<g.length;)for(const[W,$,K]of[[x,()=>y,J=>y=J],[g,()=>E,J=>E=J]]){const J=$();if(J>=W.length)continue;K(J+1);const{x:it,y:nt,z:Z}=W[J];for(const[C,F,q]of v){const U=it+C,X=nt+F,lt=Z+q,ht=`${U},${X},${lt}`;U>=0&&U<t&&X>=0&&X<t&&lt>=0&&lt<t&&!h.has(ht)&&this.maze.get(U,X,lt)!==this.mazeGen.TYPES.WALL&&(h.add(ht),W.push({x:U,y:X,z:lt}),A.push({x:U,y:X,z:lt}))}}this.controls.autoRotate=!0,this.controls.autoRotateSpeed=1.8,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableRotate=!1;const b=new we(.88,.88,.88),D=new ne({color:j.COLORS.THREE_VISITED,transparent:!0,opacity:.72}),M=20,S=200,N=A.length,I=Math.max(1,Math.ceil(N/S));let V=0;this.activeIntroTimer=null;const L=[],z=()=>{this.activeIntroTimer&&(clearTimeout(this.activeIntroTimer),this.activeIntroTimer=null),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this._playGlitchAndTransition(L)};this.activeSkipHandler=()=>z(),window.addEventListener("keydown",this.activeSkipHandler,{once:!0}),window.addEventListener("touchstart",this.activeSkipHandler,{once:!0});const G=()=>{if(this.isDestroyed)return;const W=Math.min(V+I,A.length);for(;V<W;V++){const{x:$,y:K,z:J}=A[V],it=J%2===0;let nt;it?nt=new us(.35,.35,2*this.vScale,8):nt=b;const Z=new te(nt,D);Z.position.set($-t/2,(J-t/2)*this.vScale,K-t/2),this.scene.add(Z),L.push(Z)}V<A.length?this.activeIntroTimer=setTimeout(G,M):(this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this._playGlitchAndTransition(L))};this.activeIntroTimer=setTimeout(G,M)}_playGlitchAndTransition(t){if(this.isDestroyed)return;const e=5,i=90;let n=0;const a=()=>{if(this.isDestroyed)return;const o=n%2===0;t.forEach(r=>{r&&(r.visible=o)}),n++,n<e*2?setTimeout(a,i):(t.forEach(r=>{r&&(r.visible=!1)}),setTimeout(()=>this._transitionToGame(),400))};a()}_transitionToGame(){this.isDestroyed||(this.controls.autoRotate=!1,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls.enableRotate=!0,this.ui.uiMap3dContainer.classList.add("intro-fade-out"),setTimeout(()=>{if(this.isDestroyed)return;this.ui.setMap3DVisible(!1),this.ui.uiMap3dContainer.classList.remove("intro-fade-out"),this.isMap3DActive=!1,this.isIntroPlaying=!1,this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1);const t=document.getElementById("map-area-container"),e=document.getElementById("left-hud-panel"),i=document.getElementById("right-hud-panel"),n=document.getElementById("bottom-hud-container");t&&(t.classList.remove("intro-hidden"),t.classList.add("intro-reveal"),setTimeout(()=>t.classList.remove("intro-reveal"),700)),e&&(e.classList.remove("intro-hidden"),e.classList.add("intro-reveal"),setTimeout(()=>e.classList.remove("intro-reveal"),700)),i&&(i.classList.remove("intro-hidden"),i.classList.add("intro-reveal"),setTimeout(()=>i.classList.remove("intro-reveal"),700)),n&&(n.classList.remove("intro-hidden"),n.classList.add("intro-reveal"),setTimeout(()=>n.classList.remove("intro-reveal"),700)),this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2,this.isResumedFromSave||this.ui.showInfoBanner(Ot("msgWhereAmI"))},600))}startStorytelling(){this.isStoryActive=!0,this.storyMsgIndex=0,this.storyState="OPENING",this.storyWidthProgress=0,this.storyCloseProgress=1,this.storyCharIndex=0,this.storyTypeTimer=0;const t=document.getElementById("story-screen");t&&t.classList.remove("hidden");const e=document.getElementById("story-image-loader"),i=document.getElementById("story-dialogue");this.isPreloadingActive=!1;const n=()=>{this.isPreloadingActive=!1,i&&(i.style.transform="scaleX(0)"),this.updateStoryImage(),this.handleStoryKeyDown=o=>{o.key.toLowerCase()==="escape"?this.skipStory():this.isPreloadingActive||this.triggerAdvanceStory(),o.preventDefault()},window.addEventListener("keydown",this.handleStoryKeyDown),this.handleStoryClick=o=>{o.target.closest("#story-skip-btn")||this.isPreloadingActive||this.triggerAdvanceStory()},this.handleStoryTouch=o=>{o.target.closest("#story-skip-btn")||(this.isPreloadingActive||this.triggerAdvanceStory(),o.preventDefault())},t&&(t.addEventListener("click",this.handleStoryClick),t.addEventListener("touchstart",this.handleStoryTouch,{passive:!1}))},a=document.getElementById("story-skip-btn");if(a&&(a.onclick=o=>{o.stopPropagation(),this.skipStory()}),e&&i&&(i.style.transform="scaleX(0)",this.storyImagesLoadedCount<this.storyImagesTotalCount)){this.isPreloadingActive=!0,e.classList.remove("hidden"),this.storyImagesPreloadPromise.then(()=>{e.classList.add("hidden"),n()});return}n()}endStorytelling(){this.isStoryActive=!1,this.isPreloadingActive=!1;const t=document.getElementById("story-screen");t&&t.classList.add("hidden"),this.handleStoryKeyDown&&(window.removeEventListener("keydown",this.handleStoryKeyDown),this.handleStoryKeyDown=null),this.handleStoryClick&&t&&(t.removeEventListener("click",this.handleStoryClick),this.handleStoryClick=null),this.handleStoryTouch&&t&&(t.removeEventListener("touchstart",this.handleStoryTouch),this.handleStoryTouch=null),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1);const e=document.getElementById("map-area-container"),i=document.getElementById("left-hud-panel"),n=document.getElementById("right-hud-panel"),a=document.getElementById("bottom-hud-container");e&&(e.classList.remove("hidden","intro-hidden"),e.classList.add("intro-reveal"),setTimeout(()=>e.classList.remove("intro-reveal"),700)),i&&(i.classList.remove("hidden","intro-hidden"),i.classList.add("intro-reveal"),setTimeout(()=>i.classList.remove("intro-reveal"),700)),n&&(n.classList.remove("hidden","intro-hidden"),n.classList.add("intro-reveal"),setTimeout(()=>n.classList.remove("intro-reveal"),700)),a&&(a.classList.remove("hidden","intro-hidden"),a.classList.add("intro-reveal"),setTimeout(()=>a.classList.remove("intro-reveal"),700)),this.ui.setMap3DVisible(!1),this.isMap3DActive=!1,this.isIntroPlaying=!1,this.staticMapCacheDirty=!0,this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2,this.isResumedFromSave||this.ui.showInfoBanner(Ot("msgWhereAmI"))}updateStoryImage(){const t=document.getElementById("story-img"),e=document.getElementById("story-image-canvas");if(!(!t||!e))if(e.style.background="#0b0b0b",this.storyMsgIndex===5)t.style.display="none",e.style.background="radial-gradient(circle, #222222 0%, #000000 80%)",e.removeAttribute("data-placeholder");else{const i=this.preloadedStoryImages[this.storyMsgIndex];if(i)t.src=i.src,t.style.display="block",e.removeAttribute("data-placeholder");else{let n="";this.storyMsgIndex===0?n="assets/images/presentation/1-mystical-church-of-chaos.jpg":this.storyMsgIndex===1?n="assets/images/presentation/2-mystical-church-of-chaos.jpg":this.storyMsgIndex===2?n="assets/images/presentation/3-the-jelly-god.jpg":this.storyMsgIndex===3?n="assets/images/presentation/4-player-alone.jpg":this.storyMsgIndex===4&&(n="assets/images/presentation/5-player-thrown.jpg"),t.src=n,t.onerror=()=>{t.style.display="none",e.setAttribute("data-placeholder",`[Image ${this.storyMsgIndex+1}]`)},t.onload=()=>{t.style.display="block",e.removeAttribute("data-placeholder")}}}}updateStory(t){if(!this.isStoryActive||this.isPreloadingActive)return;const e=document.getElementById("story-text"),i=document.getElementById("story-dialogue"),n=document.getElementById("story-arrow");if(!i||!e)return;const a=["storyMsg1","storyMsg2","storyMsg3","storyMsg4","storyMsg5","storyMsg6"];if(this.storyMsgIndex>=a.length){this.endStorytelling();return}const o=Ot(a[this.storyMsgIndex]),r=c=>c<.5?4*c*c*c:1-Math.pow(-2*c+2,3)/2;this.storyState==="OPENING"?(e.textContent="",n&&n.classList.add("hidden"),this.storyWidthProgress+=t/.45,this.storyWidthProgress>=1&&(this.storyWidthProgress=1,this.storyState="TYPING",this.storyCharIndex=0,this.storyTypeTimer=0),i.style.transform=`scaleX(${r(this.storyWidthProgress)})`):this.storyState==="TYPING"?(i.style.transform="scaleX(1)",n&&n.classList.add("hidden"),this.storyTypeTimer+=t,this.storyTypeTimer>=.025&&(this.storyTypeTimer=0,this.storyCharIndex++,e.textContent=o.substring(0,this.storyCharIndex),this.storyCharIndex>=o.length&&(this.storyState="WAITING"))):this.storyState==="WAITING"?(i.style.transform="scaleX(1)",e.textContent=o,n&&n.classList.remove("hidden")):this.storyState==="CLOSING"&&(e.textContent="",n&&n.classList.add("hidden"),this.storyCloseProgress-=t/.45,this.storyCloseProgress<=0&&(this.storyCloseProgress=0,this.endStorytelling()),i.style.transform=`scaleX(${r(this.storyCloseProgress)})`)}triggerAdvanceStory(){const t=["storyMsg1","storyMsg2","storyMsg3","storyMsg4","storyMsg5","storyMsg6"];if(this.storyMsgIndex>=t.length)return;const e=Ot(t[this.storyMsgIndex]);if(this.storyState==="CLOSING"){this.skipStory();return}if(this.storyState==="OPENING")this.storyState="TYPING",this.storyWidthProgress=1,this.storyCharIndex=0,this.storyTypeTimer=0;else if(this.storyState==="TYPING"){this.storyState="WAITING",this.storyCharIndex=e.length;const i=document.getElementById("story-text");i&&(i.textContent=e)}else if(this.storyState==="WAITING")if(this.storyMsgIndex+1<t.length){this.storyMsgIndex++,this.storyState="TYPING",this.storyCharIndex=0,this.storyTypeTimer=0,this.updateStoryImage();const i=document.getElementById("story-text");i&&(i.textContent="")}else this.storyState="CLOSING",this.storyCloseProgress=1}skipStory(){this.endStorytelling()}toggleTeleportMap(t){this.isMap3DActive=t,this.isTeleportMode=t;const e=document.getElementById("mobile-teleport-exit-btn");if(t){this.isMouseOrTouchDetected=!1,e&&e.classList.remove("hidden"),this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.add("hidden"),this.ui.setMap3DVisible(!0),this.activeMapFloor=this.player.z,this.visualActiveFloor=this.player.z,this.mapCursor={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.mapZoom=1,this.mapPanOffsetX=0,this.mapPanOffsetY=0;const i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,o=this.allTeleports.findIndex(c=>c.x===i&&c.y===n&&c.z===a);o!==-1&&(this.selectedTeleportIndex=o),this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="none");const r=document.getElementById("map3d-instructions");r&&(r.style.display="none"),this.isometricCanvas?this.isometricCanvas.style.display="block":this.initIsometricCanvas(),this.teleportConfirmModalActive=!1}else e&&e.classList.add("hidden"),this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.remove("hidden"),this.ui.setMap3DVisible(!1),this.isometricCanvas&&(this.isometricCanvas.style.display="none"),this.teleportConfirmModalActive=!1}onCanvasClick(t){if(!this.isMap3DActive)return;const e=this.renderer.domElement.getBoundingClientRect();if(this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.isTeleportMode){const i=this.raycaster.intersectObjects(this.teleportMeshes);if(i.length>0){const n=i[0].object,{gridX:a,gridY:o,gridZ:r}=n.userData,c=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===a&&this.inactiveTeleportPos.y===o&&this.inactiveTeleportPos.z===r,l=Math.floor(this.player.x),u=Math.floor(this.player.y),f=this.player.z;a===l&&o===u&&r===f?this.toggleTeleportMap(!1):c||this.teleportTo(a,o,r)}}else{const i=this.raycaster.intersectObjects(this.knownMeshes);if(i.length>0){const n=i[0].object,{gridX:a,gridY:o,gridZ:r}=n.userData;this.triggerPathReveal(a,o,r)}}}toggleZoom(){if(this.mazeGen.size<=11)return;this.isZoomActive=!this.isZoomActive,this.staticMapCacheDirty=!0;const t=document.getElementById("zoom-out-icon"),e=document.getElementById("zoom-in-icon");t&&e&&(this.isZoomActive?(t.classList.remove("hidden"),e.classList.add("hidden")):(t.classList.add("hidden"),e.classList.remove("hidden")))}togglePause(){this.isGameOver||this.isDestroyed||this.isIntroPlaying||(this.isPaused=!this.isPaused,this.isPaused?(this.ui.showPause(),this.ui.uiMobilePauseBtn&&this.ui.uiMobilePauseBtn.classList.add("hidden")):(this.ui.hidePause(),this.ui.uiMobilePauseBtn&&!this.ui.uiMobileControls.classList.contains("hidden")&&this.ui.uiMobilePauseBtn.classList.remove("hidden")))}checkExitNeighborVisited(){const t=this.getExitPos(),e=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const i of e){const n=t.x+i.dx,a=t.y+i.dy,o=t.z+i.dz;if(n>=0&&n<this.mazeGen.size&&a>=0&&a<this.mazeGen.size&&o>=0&&o<this.mazeGen.size){const r=this.maze.get(n,a,o);if(r!==this.mazeGen.TYPES.WALL&&(r===this.mazeGen.TYPES.VISITED||r===this.mazeGen.TYPES.START||r===this.mazeGen.TYPES.ELEVATOR_VISITED))return!0}}return!1}findShortestPath(t,e,i=!1){const n=this.mazeGen.size,a=new Int8Array(n*n*n);for(let o=0;o<n;o++)for(let r=0;r<n;r++)for(let c=0;c<n;c++){const l=o*n*n+r*n+c,u=this.maze.get(o,r,c),f=o===t.x&&r===t.y&&c===t.z,p=o===e.x&&r===e.y&&c===e.z,_=o===e.x&&r===e.y&&(c===e.z-1||c===e.z+1)&&c%2===0;if(u===this.mazeGen.TYPES.WALL){a[l]=0;continue}const m=u===this.mazeGen.TYPES.TELEPORT,d=m&&this.discoveredTeleports.has(`${o},${r},${c}`),h=u===this.mazeGen.TYPES.VISITED||u===this.mazeGen.TYPES.START||u===this.mazeGen.TYPES.ELEVATOR_VISITED||d,x=(u===this.mazeGen.TYPES.PATH||m&&!d)&&this.isNearVisited(o,r,c);let g=!1;i?g=h||f||p||_:g=h||x||f||p||_,a[l]=g?1:0}return il(t,e,a,n,0)??[]}triggerPathReveal(t,e,i){if(this.pathRevealInterval||this.pathfinderBlockedUntil&&Date.now()<this.pathfinderBlockedUntil)return;if(this.pathfindersRemaining<=0){this.ui.showInfoBanner(Ot("msgNoPathfindersRemaining"));return}this.pathRevealInterval&&(clearInterval(this.pathRevealInterval),this.pathRevealInterval=null),this.revealedPathSet.clear();const n=this.maze.get(t,e,i)===this.mazeGen.TYPES.EXIT;if(n&&!this.exitPathfinderUnlocked){this.ui.showInfoBanner(Ot("msgExitNotFoundYet"));return}let a=i;i%2===0&&(a=this.player.z<i?i+1:i-1,a<1&&(a=1),a>=this.mazeGen.size&&(a=this.mazeGen.size-2));const o={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},r={x:t,y:e,z:a},c=this.findShortestPath(o,r,n);!c||c.length===0||(this.pathfindersRemaining--,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),ia(this),this.activePathReveal=c,this.revealedPathProgress=0,this.revealedPathSet.add(`${t},${e},${i}`),this.pathRevealInterval=setInterval(()=>{if(this.revealedPathProgress<this.activePathReveal.length){const l=this.activePathReveal[this.revealedPathProgress],u=`${l.x},${l.y},${l.z}`;if(this.revealedPathSet.add(u),this.revealedPathProgress>0){const f=this.activePathReveal[this.revealedPathProgress-1];if(Math.abs(l.z-f.z)===2){const p=(l.z+f.z)/2,_=`${l.x},${l.y},${p}`;if(this.revealedPathSet.add(_),this.isMap3DActive&&this.gridMeshes){const v=this.mazeGen.size,m=this.gridMeshes[l.x*v*v+l.y*v+p];m&&(m.material=new ne({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.95*(this.isTeleportMode?.2:1)}))}}}if(this.staticMapCacheDirty=!0,this.isMap3DActive&&this.gridMeshes){const f=this.mazeGen.size,p=this.gridMeshes[l.x*f*f+l.y*f+l.z];p&&(p.material=new ne({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.95*(this.isTeleportMode?.2:1)}))}this.revealedPathProgress++}else clearInterval(this.pathRevealInterval),this.pathRevealInterval=null,this.pathfinderBlockedUntil=Date.now()+600},120))}teleportTo(t,e,i){if(this.skipCellAnimations=!0,this.player.x=t+j.PLAYER_START_X,this.player.y=e+j.PLAYER_START_Y%1,this.player.z=i,this.staticMapCacheDirty=!0,this.toggleTeleportMap(!1),this.maze.get(t,e,i)===this.mazeGen.TYPES.PATH&&this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),!this.isSafeMode){const n=Math.floor(this.degree*1.5)+3;this.teleportCooldownTicks=n,this.inactiveTeleportPos={x:t,y:e,z:i},this.ui.showInfoBanner(Ot("msgOopsNoisyShit"));for(const a of this.hunters){a.state="TELEPORT_TRACKING";const o=a.findPathToTarget({x:t,y:e,z:i},this.maze,this.mazeGen.TYPES);o?a.pathToTarget=o:a.pathToTarget=[]}}this.updateFloorUI(),this.draw2DMap(),this.input.keys={}}initIsometricCanvas(){this.isometricCanvas=document.createElement("canvas"),this.isometricCanvas.id="isometric-map-canvas",this.isometricCanvas.style.position="absolute",this.isometricCanvas.style.top="0",this.isometricCanvas.style.left="0",this.isometricCanvas.style.width="100%",this.isometricCanvas.style.height="100%",this.isometricCanvas.style.zIndex="101",this.isometricCtx=this.isometricCanvas.getContext("2d"),this.ui.uiMap3dContainer.appendChild(this.isometricCanvas),this.isometricCanvas.addEventListener("click",m=>this.handleIsometricClick(m));const t=()=>{this.isMouseOrTouchDetected||(this.isMouseOrTouchDetected=!0)};this.isometricCanvas.addEventListener("mousemove",t),this.isometricCanvas.addEventListener("pointerdown",t);let e=null,i=null,n=0,a=0,o=0,r=0,c=!1,l=!1,u=!1,f=0;this.isometricCanvas.addEventListener("touchstart",m=>{if(!(!this.isMap3DActive||this.isIntroPlaying)){if(f=0,u=!1,m.touches.length===1){const d=m.touches[0];n=d.clientX,a=d.clientY,o=this.mapPanOffsetX,r=this.mapPanOffsetY,l=!0,c=!1}else if(m.touches.length===2){c=!0,l=!1;const d=m.touches[0],h=m.touches[1];e=Math.hypot(d.clientX-h.clientX,d.clientY-h.clientY),i=this.mapZoom}}},{passive:!1}),this.isometricCanvas.addEventListener("touchmove",m=>{if(!(!this.isMap3DActive||this.isIntroPlaying)){if(c&&m.touches.length===2){m.preventDefault();const d=m.touches[0],h=m.touches[1],x=Math.hypot(d.clientX-h.clientX,d.clientY-h.clientY);if(e>0){const g=this.isometricCanvas.getBoundingClientRect(),y=(d.clientX+h.clientX)/2-g.left,E=(d.clientY+h.clientY)/2-g.top,A=this.mapZoom;let b=i*(x/e);b=Math.max(.5,Math.min(4,b));const D=b/A;this.mapPanOffsetX=y-(y-(g.width/2+this.mapPanOffsetX))*D-g.width/2,this.mapPanOffsetY=E-(E-(g.height/2+this.mapPanOffsetY))*D-g.height/2,this.mapZoom=b,f=100}}else if(l&&m.touches.length===1){const d=m.touches[0],h=d.clientX-n,x=d.clientY-a,g=Math.hypot(h,x);if(f=Math.max(f,g),!u&&Math.abs(x)>40&&Math.abs(x)>Math.abs(h)*1.5){const y=this.mazeGen.size;x<-40?this.activeMapFloor-2>=1&&(this.activeMapFloor-=2,u=!0):x>40&&this.activeMapFloor+2<=y-2&&(this.activeMapFloor+=2,u=!0)}u||(this.mapPanOffsetX=o+h,this.mapPanOffsetY=r+x),m.preventDefault()}}},{passive:!1}),this.isometricCanvas.addEventListener("touchend",m=>{if(c=!1,l=!1,f<8&&!u){const d=m.changedTouches[0];if(d){const h={clientX:d.clientX,clientY:d.clientY};this.handleIsometricClick(h)}}}),this.isometricCanvas.addEventListener("wheel",m=>{if(!this.isMap3DActive||this.isIntroPlaying)return;m.preventDefault();const d=this.isometricCanvas.getBoundingClientRect(),h=m.clientX-d.left,x=m.clientY-d.top,g=this.mapZoom,y=1.15;let E=m.deltaY<0?g*y:g/y;E=Math.max(.5,Math.min(4,E));const A=d.width,b=d.height,D=E/g;this.mapPanOffsetX=h-(h-(A/2+this.mapPanOffsetX))*D-A/2,this.mapPanOffsetY=x-(x-(b/2+this.mapPanOffsetY))*D-b/2,this.mapZoom=E},{passive:!1});let p=!1,_=0,v=0;this.isometricCanvas.addEventListener("mousedown",m=>{if(!this.isMap3DActive||this.isIntroPlaying)return;const d=this.isometricCanvas.getBoundingClientRect(),h=m.clientX-d.left,x=m.clientY-d.top;if(!(this.floorClickRects&&this.floorClickRects.some(g=>h>=g.x&&h<=g.x+g.w&&x>=g.y&&x<=g.y+g.h))){if(this.isTeleportMode){if(this.teleportConfirmModalActive&&this.teleportModalClickRects&&this.teleportModalClickRects.some(g=>h>=g.x&&h<=g.x+g.w&&x>=g.y&&x<=g.y+g.h)||!this.teleportConfirmModalActive&&this.teleportDotsClickRects&&this.teleportDotsClickRects.some(g=>h>=g.x&&h<=g.x+g.w&&x>=g.y&&x<=g.y+g.h))return;if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const g=this.teleportGoBtnClickRect;if(h>=g.x&&h<=g.x+g.w&&x>=g.y&&x<=g.y+g.h)return}}p=!0,_=m.clientX,v=m.clientY}}),window.addEventListener("mousemove",m=>{if(p){const d=m.clientX-_,h=m.clientY-v;this.mapPanOffsetX+=d,this.mapPanOffsetY+=h,_=m.clientX,v=m.clientY}}),window.addEventListener("mouseup",()=>{p=!1}),this.isometricCanvas.addEventListener("mousemove",m=>{if(!this.isMap3DActive||this.isIntroPlaying)return;const d=this.isometricCanvas.getBoundingClientRect(),h=m.clientX-d.left,x=m.clientY-d.top;if(this.isometricCanvas.style.cursor="default",this.isTeleportMode){if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const g=this.teleportGoBtnClickRect;if(h>=g.x&&h<=g.x+g.w&&x>=g.y&&x<=g.y+g.h){this.isometricCanvas.style.cursor="pointer";return}}if(this.teleportConfirmModalActive&&this.teleportModalClickRects){for(const g of this.teleportModalClickRects)if(h>=g.x&&h<=g.x+g.w&&x>=g.y&&x<=g.y+g.h){this.teleportModalSelection=g.selection,this.isometricCanvas.style.cursor="pointer";return}}else if(this.teleportDotsClickRects){const g=this.getSelectableTeleportIndices();for(const y of this.teleportDotsClickRects)if(h>=y.x&&h<=y.x+y.w&&x>=y.y&&x<=y.y+y.h&&g.includes(y.index)){this.selectedTeleportIndex=y.index;const E=this.allTeleports[y.index];this.activeMapFloor=E.z,this.mapCursor={x:E.x,y:E.y,z:E.z},this.isometricCanvas.style.cursor="pointer";return}}}if(!this.isTeleportMode){const g=this.mazeGen.size,y=this.activeMapFloor;let E=d.width*.7/g;E=Math.max(20,Math.min(48,E));const A=E*this.mapZoom,b=A/2,D=A/4,M=b*5,S=d.width/2+this.mapPanOffsetX,N=d.height/2+this.mapPanOffsetY,I=[];y+2<=g-2&&I.push(y+2),y+1<g&&I.push(y+1),I.push(y),y-1>=0&&I.push(y-1),y-2>=1&&I.push(y-2);for(const V of I){const L=N-(V-y)*M,z=(h-S)/b,G=(x-L)/D,W=Math.round((z+G)/2),$=Math.round((G-z)/2);if(W>=0&&W<g&&$>=0&&$<g&&this.getInteractiveElements(y).some(it=>it.x===W&&it.y===$&&it.z===V)){this.mapCursor={x:W,y:$,z:V},this.isometricCanvas.style.cursor="pointer";return}}}})}handleIsometricClick(t){if(!this.isMap3DActive||this.isIntroPlaying)return;const e=this.isometricCanvas.getBoundingClientRect(),i=t.clientX-e.left,n=t.clientY-e.top;if(this.isTeleportMode){if(this.teleportConfirmModalActive){if(this.teleportModalClickRects){for(const g of this.teleportModalClickRects)if(i>=g.x&&i<=g.x+g.w&&n>=g.y&&n<=g.y+g.h){if(g.selection==="go"){const y=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(y.x,y.y,y.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;return}}this.teleportConfirmModalActive=!1;return}if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const g=this.teleportGoBtnClickRect;if(i>=g.x&&i<=g.x+g.w&&n>=g.y&&n<=g.y+g.h){const y=this.allTeleports[this.selectedTeleportIndex],E=Math.floor(this.player.x),A=Math.floor(this.player.y),b=this.player.z,D=y&&y.x===E&&y.y===A&&y.z===b;y&&!D&&(this.teleportTo(y.x,y.y,y.z),this.toggleTeleportMap(!1));return}}if(this.teleportDotsClickRects){const g=this.teleportDotsClickRects.find(y=>i>=y.x&&i<=y.x+y.w&&n>=y.y&&n<=y.y+y.h);if(g){if(this.getSelectableTeleportIndices().includes(g.index)){this.selectedTeleportIndex=g.index;const E=this.allTeleports[g.index];this.activeMapFloor=E.z,this.mapCursor={x:E.x,y:E.y,z:E.z}}return}}}if(this.floorClickRects){for(const g of this.floorClickRects)if(i>=g.x&&i<=g.x+g.w&&n>=g.y&&n<=g.y+g.h){this.activeMapFloor=g.floor;return}}const a=this.mazeGen.size,o=this.activeMapFloor;let r=e.width*.7/a;r=Math.max(20,Math.min(48,r));const c=r*this.mapZoom,l=c/2,u=c/4,f=l*5,p=e.width/2+this.mapPanOffsetX,_=e.height/2+this.mapPanOffsetY,v=(g,y,E)=>{const A=(g-y)*l+p,b=(g+y)*u-(E-o)*f+_;return{x:A,y:b}};if(this.isTeleportMode){const g=this.getInteractiveElements(o);let y=null,E=1/0;const A=this.isTouchDevice?52:35;for(const b of g){if(b.type!=="teleport")continue;const D=v(b.x,b.y,b.z),M=i-D.x,S=n-D.y,N=Math.sqrt(M*M+S*S);N<E&&(E=N,y=b)}if(y&&E<=A){const{x:b,y:D,z:M}=y,S=this.allTeleports.findIndex(I=>I.x===b&&I.y===D&&I.z===M),N=this.getSelectableTeleportIndices();S!==-1&&N.includes(S)&&(this.selectedTeleportIndex=S,this.mapCursor={x:b,y:D,z:M})}return}const m=this.getInteractiveElements(o);let d=null,h=1/0;const x=this.isTouchDevice?52:35;for(const g of m){const y=v(g.x,g.y,g.z),E=i-y.x,A=n-y.y,b=Math.sqrt(E*E+A*A);b<h&&(h=b,d=g)}if(d&&h<=x){this.mapCursor={x:d.x,y:d.y,z:d.z},this.triggerPathReveal(d.x,d.y,d.z);return}}navigateCursor(t){const e=this.activeMapFloor,i=this.getInteractiveElements(e);if(i.length===0)return;const n=this.mapCursor.x,a=this.mapCursor.y,o=this.mapCursor.z,r=this.mazeGen.size;if(t==="left"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e+1&&o===e-1)){this.mapCursor={x:n,y:a,z:e+1};return}for(let l=n-1;l>=0;l--){const u=i.filter(f=>f.x===l&&f.y===a);if(u.length>0){const f=u.find(_=>_.z===e-1),p=u.find(_=>_.z===e+1);f&&p?this.mapCursor={x:l,y:a,z:e-1}:this.mapCursor={x:l,y:a,z:u[0].z};return}}}else if(t==="right"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e-1&&o===e+1)){this.mapCursor={x:n,y:a,z:e-1};return}for(let l=n+1;l<r;l++){const u=i.filter(f=>f.x===l&&f.y===a);if(u.length>0){const f=u.find(_=>_.z===e-1),p=u.find(_=>_.z===e+1);f&&p?this.mapCursor={x:l,y:a,z:e+1}:this.mapCursor={x:l,y:a,z:u[0].z};return}}}else if(t==="up"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e-1&&o===e+1)){this.mapCursor={x:n,y:a,z:e-1};return}for(let l=a-1;l>=0;l--){const u=i.filter(f=>f.y===l);if(u.length>0){let f=-1,p=1/0;for(const d of u){const h=Math.abs(d.x-n);h<p?(p=h,f=d.x):h===p&&d.x<f&&(f=d.x)}const _=u.filter(d=>d.x===f),v=_.find(d=>d.z===e-1),m=_.find(d=>d.z===e+1);v&&m?this.mapCursor={x:f,y:l,z:e+1}:this.mapCursor={x:f,y:l,z:_[0].z};return}}}else if(t==="down"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e+1&&o===e-1)){this.mapCursor={x:n,y:a,z:e+1};return}for(let l=a+1;l<r;l++){const u=i.filter(f=>f.y===l);if(u.length>0){let f=-1,p=1/0;for(const d of u){const h=Math.abs(d.x-n);h<p?(p=h,f=d.x):h===p&&d.x<f&&(f=d.x)}const _=u.filter(d=>d.x===f),v=_.find(d=>d.z===e-1),m=_.find(d=>d.z===e+1);v&&m?this.mapCursor={x:f,y:l,z:e-1}:this.mapCursor={x:f,y:l,z:_[0].z};return}}}}getInteractiveElements(t){const e=[],i=this.mazeGen.size,n=this.mazeGen.TYPES,a=(o,r,c)=>{if(c<0||c>=i)return!1;const l=this.maze.get(o,r,c);return l===n.VISITED||l===n.START||l===n.ELEVATOR_VISITED||l===n.TELEPORT&&this.discoveredTeleports.has(`${o},${r},${c}`)};for(let o=0;o<i;o++)for(let r=0;r<i;r++){const c=this.maze.get(o,r,t);if(c===n.WALL)continue;const l=c===n.TELEPORT,u=l&&this.discoveredTeleports.has(`${o},${r},${t}`);if(u){e.push({x:o,y:r,z:t,type:"teleport"});continue}if(c===n.START){e.push({x:o,y:r,z:t,type:"start"});continue}if(c===n.EXIT){this.keysCollected===this.totalKeys&&this.exitPathfinderUnlocked&&e.push({x:o,y:r,z:t,type:"exit"});continue}(c===n.PATH||l&&!u)&&this.isNearVisited(o,r,t)&&e.push({x:o,y:r,z:t,type:"known"})}for(const o of[t-1,t+1])if(!(o<0||o>=i||o-1<1||o+1>=i))for(let r=0;r<i;r++)for(let c=0;c<i;c++){const l=this.maze.get(r,c,o);if(l===n.WALL)continue;const u=l===n.ELEVATOR_VISITED;l===1&&(a(r,c,o-1)||a(r,c,o+1))&&!u&&a(r,c,t)&&e.push({x:r,y:c,z:o,type:"shaft"})}return e}drawIsometricMap(){if(!this.isMap3DActive||this.isIntroPlaying)return;const t=this.isometricCanvas,e=this.isometricCtx,i=t.width=window.innerWidth,n=t.height=window.innerHeight;e.clearRect(0,0,i,n),e.fillStyle="#000000",e.fillRect(0,0,i,n);const a=this.mazeGen.size,o=this.activeMapFloor,r=this.visualActiveFloor;let c=i*.7/a;c=Math.max(20,Math.min(48,c));const l=c*this.mapZoom,u=l/2,f=l/2,p=l/4,_=f*5,v=i/2+this.mapPanOffsetX,m=n/2+this.mapPanOffsetY,d=(C,F,q)=>{const U=C,X=F,lt=(U-X)*f+v,ht=(U+X)*p-(q-r)*_+m;return{x:lt,y:ht}},h=C=>{e.strokeStyle=`rgba(0, 255, 0, ${.15*C})`,e.lineWidth=1;for(let F=0;F<a;F++)for(let q=0;q<a;q++){const U=d(q,F,o);e.beginPath(),e.moveTo(U.x,U.y-p),e.lineTo(U.x+f,U.y),e.lineTo(U.x,U.y+p),e.lineTo(U.x-f,U.y),e.closePath(),e.stroke()}},x=(C,F,q,U,X,lt,ht=1)=>{e.save(),e.globalAlpha=ht,e.beginPath(),e.moveTo(C-q,F),e.lineTo(C,F+U),e.lineTo(C,F+U-X),e.lineTo(C-q,F-X),e.closePath(),e.fillStyle=lt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(C,F+U),e.lineTo(C+q,F),e.lineTo(C+q,F-X),e.lineTo(C,F+U-X),e.closePath(),e.fillStyle=lt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.beginPath(),e.moveTo(C-q,F-X),e.lineTo(C,F+U-X),e.lineTo(C+q,F-X),e.lineTo(C,F-U-X),e.closePath(),e.fillStyle=lt,e.fill(),e.restore()},g=(C,F,q)=>{if(q<0||q>=a)return!1;const U=this.maze.get(C,F,q);return U===this.mazeGen.TYPES.VISITED||U===this.mazeGen.TYPES.START||U===this.mazeGen.TYPES.ELEVATOR_VISITED||U===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${C},${F},${q}`)},y=(C,F,q,U,X,lt,ht,wt,H,Lt)=>{e.save(),e.globalAlpha=Lt;const mt=H?"#ffffff":wt?j.COLORS.NEON_UP:j.COLORS.NEON_UP_UNUSED,yt=H?"#ffffff":wt?j.COLORS.NEON_DOWN:j.COLORS.NEON_DOWN_UNUSED;if(lt&&ht)e.beginPath(),e.moveTo(C,F-X-U),e.lineTo(C-q,F-X),e.lineTo(C,F-X+U),e.lineTo(C,F-X),e.closePath(),e.fillStyle=yt,e.fill(),e.beginPath(),e.moveTo(C,F-X-U),e.lineTo(C,F-X),e.lineTo(C,F-X+U),e.lineTo(C+q,F-X),e.closePath(),e.fillStyle=mt,e.fill(),e.beginPath(),e.moveTo(C-q,F),e.lineTo(C,F+U),e.lineTo(C,F+U-X),e.lineTo(C-q,F-X),e.closePath(),e.fillStyle=yt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(C,F+U),e.lineTo(C+q,F),e.lineTo(C+q,F-X),e.lineTo(C,F+U-X),e.closePath(),e.fillStyle=mt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill();else{const pt=lt?mt:yt;e.beginPath(),e.moveTo(C-q,F-X),e.lineTo(C,F+U-X),e.lineTo(C+q,F-X),e.lineTo(C,F-U-X),e.closePath(),e.fillStyle=pt,e.fill(),e.beginPath(),e.moveTo(C-q,F),e.lineTo(C,F+U),e.lineTo(C,F+U-X),e.lineTo(C-q,F-X),e.closePath(),e.fillStyle=pt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(C,F+U),e.lineTo(C+q,F),e.lineTo(C+q,F-X),e.lineTo(C,F+U-X),e.closePath(),e.fillStyle=pt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill()}e.restore()},E=(C,F)=>{const q=this.mazeGen.TYPES;for(let U=0;U<a;U++)for(let X=0;X<a;X++){const lt=this.maze.get(X,U,C),ht=d(X,U,C),wt=lt===q.TELEPORT,H=wt&&this.discoveredTeleports.has(`${X},${U},${C}`),Lt=lt===q.VISITED||lt===q.START||lt===q.ELEVATOR_VISITED||H,mt=(lt===q.PATH||wt&&!H)&&this.isNearVisited(X,U,C),yt=this.revealedPathSet.has(`${X},${U},${C}`),pt=lt===q.KEY,Ht=lt===q.EXIT;if(lt===q.WALL||lt===q.STATUE){if(this.isNearVisited(X,U,C)){const w=f*.45,T=p*.45,B=u*.25,rt="rgba(0, 255, 0, 0.7)",st=[{dx:-.23,dy:-.23},{dx:.23,dy:-.23},{dx:-.23,dy:.23},{dx:.23,dy:.23}];for(const at of st){const gt=d(X+at.dx,U+at.dy,C);x(gt.x,gt.y,w,T,B,rt,F)}}continue}for(const w of this.hunters){if(w.state==="SLEEP")continue;const T=Math.round((w.visualZ-1)/2)*2+1,B=Math.max(0,Math.min(a-1,Math.floor(w.visualX))),rt=Math.max(0,Math.min(a-1,Math.floor(w.visualY)));if(X===B&&U===rt&&C===T){const st=d(w.visualX,w.visualY,w.visualZ);S(w,st.x,st.y-1.5,F)}}if(Lt||mt||yt||pt||Ht){const T=C<a-1&&this.maze.get(X,U,C+1)!==q.WALL&&this.maze.get(X,U,C+1)!==q.STATUE,B=C>0&&this.maze.get(X,U,C-1)!==q.WALL&&this.maze.get(X,U,C-1)!==q.STATUE,rt=this.mapCursor.x===X&&this.mapCursor.y===U&&this.mapCursor.z===C;if((Lt||yt)&&(T||B))y(ht.x,ht.y,f,p,1.5,T,B,Lt,yt,F);else{let gt="#222222";if(yt)gt="#ffffff";else if(Ht)gt=this.keysCollected===this.totalKeys?j.COLORS.EXIT:"#ff3300";else if(H)gt="#ffd700";else if(Lt)lt===q.START?gt=j.COLORS.START:gt="#444444";else if(mt)if(rt){const dt=.5+.5*Math.sin(performance.now()/120);gt=`rgb(${Math.floor(31+224*dt)}, ${Math.floor(58+197*dt)}, ${Math.floor(82+173*dt)})`}else gt="#1f3a52";else pt&&(gt="#111111");x(ht.x,ht.y,f,p,1.5,gt,F)}if(pt&&b(ht.x,ht.y-1.5,F),H){const gt=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===X&&this.inactiveTeleportPos.y===U&&this.inactiveTeleportPos.z===C;let dt=j.COLORS.TELEPORT;gt&&(dt=j.COLORS.TELEPORT_INACTIVE),D(ht.x,ht.y-1.5,dt,F,rt)}X===Math.floor(this.player.x)&&U===Math.floor(this.player.y)&&C===this.player.z&&M(ht.x,ht.y-1.5,F)}}},A=(C,F)=>{const q=this.mazeGen.TYPES;for(let U=0;U<a;U++)for(let X=0;X<a;X++){const lt=this.maze.get(X,U,C);if(lt===q.WALL)continue;const ht=this.revealedPathSet.has(`${X},${U},${C}`),wt=lt===q.ELEVATOR_VISITED;if(lt===1&&(g(X,U,C-1)||g(X,U,C+1)),ht||g(X,U,o)){const H=d(X,U,C-1);H.y-=1.5;const Lt=d(X,U,C+1);let mt=j.COLORS.PATH_KNOWN;ht?mt="#ffffff":wt&&(mt=j.COLORS.PATH_VISITED);const yt=this.mapCursor.x===X&&this.mapCursor.y===U&&this.mapCursor.z===C;let pt=mt,Ht=F;yt&&(Ht=.4+.6*(.5+.5*Math.sin(performance.now()/120)),pt="#ffffff");const w=(rt=>{const st=rt.replace("#",""),at=parseInt(st,16),gt=at>>16&255,dt=at>>8&255,Mt=at&255;return`${gt}, ${dt}, ${Mt}`})(pt),T=f*.25;e.save(),e.globalAlpha=Ht;const B=e.createLinearGradient(0,H.y,0,Lt.y);B.addColorStop(0,`rgba(${w}, 0.15)`),B.addColorStop(.2,`rgba(${w}, 0.65)`),B.addColorStop(.5,`rgba(${w}, 0.95)`),B.addColorStop(.8,`rgba(${w}, 0.65)`),B.addColorStop(1,`rgba(${w}, 0.15)`),e.beginPath(),e.moveTo(H.x-T,H.y),e.lineTo(H.x,H.y+T/2),e.lineTo(Lt.x,Lt.y+T/2),e.lineTo(Lt.x-T,Lt.y),e.closePath(),e.fillStyle=B,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(H.x,H.y+T/2),e.lineTo(H.x+T,H.y),e.lineTo(Lt.x+T,Lt.y),e.lineTo(Lt.x,Lt.y+T/2),e.closePath(),e.fillStyle=B,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.restore()}}},b=(C,F,q)=>{e.save(),e.globalAlpha=q;const U=Math.sin(performance.now()/200)*3-6,X=F+U;e.beginPath(),e.moveTo(C,X-5),e.lineTo(C+4,X),e.lineTo(C,X+5),e.lineTo(C-4,X),e.closePath(),e.fillStyle="#ffd700",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke(),e.restore()},D=(C,F,q,U,X)=>{e.save(),e.globalAlpha=U;const lt=Math.sin(performance.now()/250)*2-4,ht=F+lt;if(X){e.save();const wt=1+.35*(.5+.5*Math.sin(performance.now()/100));e.beginPath(),e.arc(C,ht,7*wt,0,Math.PI*2),e.fillStyle="rgba(255, 255, 255, 0.4)",e.fill(),e.restore()}e.beginPath(),e.arc(C,ht,5,0,Math.PI*2),e.fillStyle=X?"#ffffff":q,e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.2,e.stroke(),e.restore()},M=(C,F,q)=>{const U=`${this.playerVertical}_${this.playerSide}`,X=this.mageImages[U],lt=f*.55,ht=p*.55,wt=C-f*.12,H=F-p*.12;if(e.save(),e.beginPath(),e.ellipse(wt,H,lt,ht,0,0,Math.PI*2),e.fillStyle="rgba(0, 0, 0, 0.45)",e.fill(),e.restore(),X&&X.complete){e.save(),e.globalAlpha=q;const Lt=l*.7,mt=Lt,yt=Lt*(X.height/X.width),pt=F-yt;e.drawImage(X,C-mt/2,pt,mt,yt),e.restore()}else e.save(),e.globalAlpha=q,e.beginPath(),e.arc(C,F-3,5,0,Math.PI*2),e.fillStyle=j.COLORS.PLAYER,e.fill(),e.strokeStyle=j.COLORS.PLAYER_OUTLINE,e.lineWidth=1.5,e.stroke(),e.restore();if(j.SHOW_COLLISION_DEBUG){e.save();const Lt=j.PLAYER_COLLISION_OFFSET_X||0,mt=j.PLAYER_COLLISION_OFFSET_Y||0,yt=(Lt-mt)*f,pt=(Lt+mt)*p,Ht=C+yt,xt=F+pt;e.beginPath(),e.moveTo(Ht,xt-j.PLAYER_COLLISION_RADIUS*u),e.lineTo(Ht+j.PLAYER_COLLISION_RADIUS*l,xt),e.lineTo(Ht,xt+j.PLAYER_COLLISION_RADIUS*u),e.lineTo(Ht-j.PLAYER_COLLISION_RADIUS*l,xt),e.closePath(),e.strokeStyle="#ff0000",e.lineWidth=1.5,e.stroke(),e.restore()}},S=(C,F,q,U)=>{if(C&&C.lowCanvas){e.save(),e.globalAlpha=U;const X=l*.9;e.save(),e.beginPath();const lt=f*.6,ht=p*.6;e.ellipse(F,q,lt,ht,0,0,Math.PI*2),e.fillStyle="rgba(0, 0, 0, 0.35)",e.fill(),e.restore();const wt=Math.sin(C.jellyTime*3)*(l*.06),H=l*.38+wt,Lt=q-H,mt=C.jellyTime,yt=Math.sin(mt)*6,pt=Math.cos(mt*.7)*4,Ht=1+Math.sin(mt*1.2)*.06,xt=1+Math.cos(mt*.8)*.06,w=yt*Math.PI/180,T=pt*Math.PI/180;e.save(),e.translate(F,Lt),e.transform(Ht,Math.tan(T),Math.tan(w),xt,0,0),e.imageSmoothingEnabled=!1,e.drawImage(C.lowCanvas,-X/2,-X/2,X,X),e.restore(),e.restore()}else{e.save(),e.globalAlpha=U;const X=4+Math.sin(performance.now()/100)*1.5;e.beginPath(),e.arc(F,q-3,X,0,Math.PI*2),e.fillStyle=j.COLORS.HUNTER||"#ff00ff",e.fill(),e.strokeStyle="#ff0000",e.lineWidth=1,e.stroke(),e.restore()}},N=C=>{const F=Math.abs(C-r);return F<=2?1-F/2*(1-.35):F<4?.35*(1-(F-2)/2):0};for(let C=1;C<a;C+=2){if(C-1>=0&&(C-1===o-1||C-1===o+1)){const q=N(C-2),U=N(C),X=Math.max(q,U)*.8;X>.01&&A(C-1,X)}const F=N(C);F>.01&&(C===o&&h(F),E(C,F))}const I=this.getInteractiveElements(o);if(I.forEach(C=>{if(C.type==="shaft"){const F=d(C.x,C.y,C.z),q=this.mapCursor.x===C.x&&this.mapCursor.y===C.y&&this.mapCursor.z===C.z;e.save();const U=.5+.5*Math.sin(performance.now()/150);e.beginPath(),e.arc(F.x,F.y,7.5+U*2.5,0,Math.PI*2),e.fillStyle=q?"#ffffff":"#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke(),e.restore()}}),this.mapCursor.x===Math.floor(this.player.x)&&this.mapCursor.y===Math.floor(this.player.y)&&this.mapCursor.z===this.player.z||I.some(C=>C.x===this.mapCursor.x&&C.y===this.mapCursor.y&&C.z===this.mapCursor.z)){const C=d(this.mapCursor.x,this.mapCursor.y,this.mapCursor.z),F=Math.sin(performance.now()/150)*4;e.save();const q=1-F/16,U=d(this.mapCursor.x,this.mapCursor.y,o);e.translate(U.x,U.y),e.scale(1,.5),e.beginPath(),e.arc(0,0,8*q,0,Math.PI*2),e.fillStyle=`rgba(0, 0, 0, ${.55*q})`,e.fill(),e.restore(),e.save();const X=C.x,lt=C.y-u-12+F;e.beginPath(),e.moveTo(X,lt),e.lineTo(X-6,lt-8),e.lineTo(X-3,lt-8),e.lineTo(X-3,lt-16),e.lineTo(X+3,lt-16),e.lineTo(X+3,lt-8),e.lineTo(X+6,lt-8),e.closePath(),e.fillStyle="#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke(),e.restore()}const z=45,G=n/3,W=n/3*2,$=i-z;e.save(),e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=4,e.lineCap="round",e.beginPath(),e.moveTo($,G),e.lineTo($,W),e.stroke(),e.strokeStyle="rgba(0, 255, 255, 0.4)",e.lineWidth=1.5;for(let C=G;C<=W;C+=(W-G)/6)e.beginPath(),e.moveTo($-5,C),e.lineTo($+5,C),e.stroke();e.restore();const K=(G+W)/2,J=(W-G)/2,it=r-o,nt=K-it/2*J;if(e.save(),e.fillStyle="#00ffff",e.beginPath(),e.arc($,nt,5,0,Math.PI*2),e.fill(),e.restore(),this.floorClickRects=[],[{floor:o+2,y:G,label:`${(o+2+1)/2}F`,valid:o+2<=a-2},{floor:o,y:K,label:`${(o+1)/2}F`,valid:!0},{floor:o-2,y:W,label:`${(o-2+1)/2}F`,valid:o-2>=1}].forEach(C=>{if(!C.valid)return;const F=60,q=36,U=$-F-15,X=C.y-q/2,lt=C.floor===o;e.save(),e.beginPath(),e.moveTo(U+6,X),e.lineTo(U+F,X),e.lineTo(U+F,X+q-6),e.lineTo(U+F-6,X+q),e.lineTo(U,X+q),e.lineTo(U,X+6),e.closePath(),e.fillStyle=lt?"rgba(0, 255, 255, 0.25)":"rgba(0, 0, 0, 0.6)",e.strokeStyle=lt?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=lt?2:1,e.fill(),e.stroke(),e.restore(),e.strokeStyle=lt?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=lt?2:1,e.beginPath(),e.moveTo(U+F,C.y),e.lineTo($-2,C.y),e.stroke(),e.fillStyle=lt?"#00ffff":"rgba(255, 255, 255, 0.5)",e.font="bold 8px Courier New",e.textAlign="center",e.textBaseline="top",e.fillText("LEVEL",U+F/2,X+6),e.fillStyle="#ffffff",e.font="bold 15px Courier New",e.textBaseline="top",e.fillText(C.label,U+F/2,X+16),this.floorClickRects.push({floor:C.floor,x:U,y:X,w:F+15,h:q})}),this.isTeleportMode||(e.save(),e.beginPath(),e.moveTo(31,30),e.lineTo(145,30),e.lineTo(145,60),e.lineTo(139,66),e.lineTo(25,66),e.lineTo(25,36),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.7)",e.strokeStyle="rgba(0, 255, 255, 0.35)",e.lineWidth=1.5,e.fill(),e.stroke(),e.restore(),e.fillStyle="rgba(0, 255, 255, 0.7)",e.font="bold 8px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="top",e.fillText(Ot("hudPathfinders"),25+120/2,35),e.fillStyle="#ffffff",e.font="bold 13px 'Roboto', sans-serif",e.textBaseline="top",e.fillText(`${this.pathfindersRemaining} / ${this.totalPathfinders}`,25+120/2,46)),this.isTeleportMode){const q=i/2-90,U=30;e.save(),e.beginPath(),e.moveTo(q+8,U),e.lineTo(q+180-8,U),e.lineTo(q+180,U+8),e.lineTo(q+180,U+38-8),e.lineTo(q+180-8,U+38),e.lineTo(q+8,U+38),e.lineTo(q,U+38-8),e.lineTo(q,U+8),e.closePath(),e.fillStyle="rgba(255, 140, 0, 0.22)",e.strokeStyle="#ff8c00",e.lineWidth=2.5,e.fill(),e.stroke(),e.restore(),e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Ot("teleportWarning"),i/2,U+38/2)}if(this.isTeleportMode){const C=this.isTouchDevice?64:56,q=(this.allTeleports.length-1)*C,U=n-60,X=this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive,lt=this.isTouchDevice?82:62,ht=this.isTouchDevice?40:30,wt=this.isTouchDevice?46:36,H=X?wt+lt:0,Lt=q+60+H,mt=this.isTouchDevice?74:62,yt=i/2-Lt/2,pt=U-mt/2,Ht=yt+30;if(e.save(),e.beginPath(),e.moveTo(yt+6,pt),e.lineTo(yt+Lt-6,pt),e.lineTo(yt+Lt,pt+6),e.lineTo(yt+Lt,pt+mt-6),e.lineTo(yt+Lt-6,pt+mt),e.lineTo(yt+6,pt+mt),e.lineTo(yt,pt+mt-6),e.lineTo(yt,pt+6),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.72)",e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=1,e.fill(),e.stroke(),e.restore(),this.teleportDotsClickRects=[],this.getSelectableTeleportIndices(),this.allTeleports.forEach((xt,w)=>{const T=Ht+w*C,B=`${xt.x},${xt.y},${xt.z}`,rt=this.discoveredTeleports.has(B),st=w===this.selectedTeleportIndex,at=xt.x===Math.floor(this.player.x)&&xt.y===Math.floor(this.player.y)&&xt.z===this.player.z,gt=this.inactiveTeleportPos&&xt.x===this.inactiveTeleportPos.x&&xt.y===this.inactiveTeleportPos.y&&xt.z===this.inactiveTeleportPos.z;e.save();const dt=this.isTouchDevice?13:10,Mt=this.isTouchDevice?19:15;if(!rt)e.beginPath(),e.arc(T,U,dt,0,Math.PI*2),e.fillStyle="rgba(100, 100, 100, 0.45)",e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.15)",e.stroke();else if(gt)e.beginPath(),e.arc(T,U,dt,0,Math.PI*2),e.fillStyle="rgba(255, 45, 0, 0.2)",e.fill(),e.strokeStyle="rgba(255, 45, 0, 0.4)",e.lineWidth=1.2,e.stroke();else{if(st){const zt=1+.3*(.5+.5*Math.sin(performance.now()/120)),ot=(this.isTouchDevice?28:22)*zt;e.beginPath(),e.arc(T,U,ot,0,Math.PI*2),e.fillStyle="rgba(0, 255, 255, 0.18)",e.fill()}e.beginPath(),e.arc(T,U,st?Mt:dt,0,Math.PI*2),e.fillStyle=st?"#ffffff":"#00b3ff",e.fill(),e.strokeStyle=st?"#00ffff":"#ffffff",e.lineWidth=st?1.5:1,e.stroke(),at&&(e.beginPath(),e.arc(T,U,st?this.isTouchDevice?10:8:this.isTouchDevice?6:5,0,Math.PI*2),e.fillStyle="#39ff14",e.fill())}e.restore();const bt=this.isTouchDevice?33:25;this.teleportDotsClickRects.push({x:T-bt,y:U-bt,w:bt*2,h:bt*2,index:w})}),X){const xt=Ht+q+30,w=U-ht/2;e.save(),e.beginPath(),e.rect(xt,w,lt,ht),e.fillStyle="rgba(0, 255, 255, 0.15)",e.strokeStyle="#00ffff",e.lineWidth=1.5,e.fill(),e.stroke(),e.fillStyle="#ffffff",e.font="bold 12px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Ot("teleportGo"),xt+lt/2,w+ht/2),e.restore(),this.teleportGoBtnClickRect={x:xt,y:w,w:lt,h:ht}}else this.teleportGoBtnClickRect=null;if(this.teleportConfirmModalActive){e.fillStyle="rgba(0, 0, 0, 0.6)",e.fillRect(0,0,i,n);const xt=320,w=160,T=i/2-xt/2,B=n/2-w/2;e.save(),e.beginPath(),e.moveTo(T+10,B),e.lineTo(T+xt-10,B),e.lineTo(T+xt,B+10),e.lineTo(T+xt,B+w-10),e.lineTo(T+xt-10,B+w),e.lineTo(T+10,B+w),e.lineTo(T,B+w-10),e.lineTo(T,B+10),e.closePath(),e.fillStyle="rgba(10, 18, 30, 0.94)",e.strokeStyle="#00ffff",e.lineWidth=2,e.fill(),e.stroke(),e.restore(),e.fillStyle="#00ffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="top",e.fillText(Ot("teleportationLink"),i/2,B+16),e.strokeStyle="rgba(0, 255, 255, 0.2)",e.lineWidth=1,e.beginPath(),e.moveTo(T+15,B+34),e.lineTo(T+xt-15,B+34),e.stroke();const rt=this.allTeleports[this.selectedTeleportIndex];e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.fillText(Ot("teleportJumpSector",{floor:(rt.z+1)/2}),i/2,B+52),e.fillStyle="rgba(255, 255, 255, 0.7)",e.font="13px 'Roboto', sans-serif",e.fillText(Ot("teleportTargetGrid",{x:rt.x,y:rt.y}),i/2,B+75);const st=100,at=30,gt=i/2-st-15,dt=B+105,Mt=i/2+15,bt=B+105;this.teleportModalClickRects=[{x:gt,y:dt,w:st,h:at,selection:"go"},{x:Mt,y:bt,w:st,h:at,selection:"cancel"}];const zt=(ot,kt,Vt,Nt)=>{const At=this.teleportModalSelection===Nt;e.save(),e.beginPath(),e.moveTo(ot+4,kt),e.lineTo(ot+st-4,kt),e.lineTo(ot+st,kt+4),e.lineTo(ot+st,kt+at-4),e.lineTo(ot+st-4,kt+at),e.lineTo(ot+4,kt+at),e.lineTo(ot,kt+at-4),e.lineTo(ot,kt+4),e.closePath(),e.fillStyle=At?"rgba(0, 255, 255, 0.35)":"rgba(0, 0, 0, 0.6)",e.strokeStyle=At?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=At?2:1,e.fill(),e.stroke(),e.restore(),e.fillStyle=At?"#ffffff":"#00ffff",e.font="bold 13px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Vt,ot+st/2,kt+at/2)};zt(gt,dt,Ot("teleportGo"),"go"),zt(Mt,bt,Ot("teleportCancel"),"cancel")}}}}function am(s){let t,e,i,n,a,o,r,c,l,u,f,p,_;return{c(){t=xi("section"),t.innerHTML='<div class="menu-content"><header><h1 class="game-title" data-i18n="gameTitle">VOID ESCAPE</h1></header> <div class="menu-stats-grid"><div class="stat-container hunter"><div class="stat-label" data-i18n="activeHunters">Active Hunters</div> <div class="stat-value" id="hunter-count">-</div></div> <div class="stat-container teleport"><div class="stat-label" data-i18n="activeTeleports">Active Teleports</div> <div class="stat-value" id="teleport-count">-</div></div> <div class="stat-container keys"><div class="stat-label" data-i18n="activeKeys">Active Keys</div> <div class="stat-value" id="keys-count">-</div></div> <div class="stat-container pathfinder"><div class="stat-label" data-i18n="availablePathfinders">Available Pathfinders</div> <div class="stat-value" id="pathfinder-count">-</div></div></div> <div class="control-group"><div class="degree-full-row"><span class="degree-label" data-i18n="mazeDegree">Maze Degree</span> <span class="degree-value" id="degree-val">-</span></div> <input type="range" id="maze-degree" aria-label="Ajustar Grau do Labirinto"/> <p class="hint" data-i18n="degreeHint">Controls the grid size. Higher values create larger, more complex mazes.</p></div> <div class="control-group switch-group"><div class="switch-container"><span class="switch-label" data-i18n="safeMode">Safe Mode</span> <label class="switch" for="safe-mode"><input type="checkbox" id="safe-mode" aria-label="Safe Mode"/> <span class="slider"></span></label></div> <p class="hint" data-i18n="safeModeHint">When active, no hunters will spawn in the maze.</p></div> <div class="menu-action-btns"><button id="start-btn" data-i18n="generateMaze">NEW GAME</button> <button id="continue-btn-menu" class="continue-btn" style="display:none" data-i18n="continue">CONTINUE</button></div> <p class="game-credits" data-i18n="gameCredits">a game by Bernard Rodrigues</p></div>',e=Ni(),i=xi("section"),i.innerHTML='<div class="story-container"><div id="story-image-canvas" class="story-image-box"><div id="story-image-loader" class="story-loader hidden"><div class="spinner"></div> <span data-i18n="loading">LOADING...</span></div> <img id="story-img" src="" alt="Story Image" style="display: none; max-width: 100%; max-height: 100%;"/></div> <div id="story-dialogue" class="story-dialogue-box"><span id="story-text"></span> <span id="story-arrow" class="story-arrow hidden">▼</span></div> <div class="story-actions"><button id="story-skip-btn">SKIP</button></div></div>',n=Ni(),a=xi("section"),a.innerHTML='<div class="popup-container victory"><h1 data-i18n="victoryTitle">Mission Accomplished</h1> <p data-i18n="victoryText">You have successfully navigated the 3D void.</p> <p class="victory-stats"><span data-i18n="mapCompletion">MAP COMPLETION</span>: <span id="victory-completion-rate">0%</span></p> <div class="end-game-btns"><button id="restart-btn-victory" class="end-btn" data-i18n="playAgain">PLAY AGAIN</button> <button id="menu-btn-victory" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',o=Ni(),r=xi("section"),r.innerHTML='<div class="popup-container death"><h1 data-i18n="gameOverTitle">Terminated</h1> <p data-i18n="gameOverText">You were caught by the void hunters.</p> <div class="end-game-btns"><button id="continue-btn-death" class="end-btn continue-highlight" data-i18n="continue">CONTINUE</button> <button id="retry-btn-death" class="end-btn" data-i18n="playAgain">PLAY AGAIN</button> <button id="menu-btn-death" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',c=Ni(),l=xi("section"),l.innerHTML='<div class="popup-container pause"><h1 data-i18n="pauseTitle">PAUSED</h1> <div class="end-game-btns"><button id="resume-btn" class="end-btn continue-highlight" data-i18n="resume">RESUME</button> <button id="menu-btn-pause" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',u=Ni(),f=xi("div"),f.innerHTML='<span class="saving-icon">💾</span> <span data-i18n="saving">SAVING...</span>',p=Ni(),_=xi("main"),_.innerHTML='<button id="mobile-pause-btn" class="hidden" aria-label="Pause Game">✕</button> <button id="mobile-teleport-exit-btn" class="hidden" aria-label="Exit Teleport Map">✕</button> <div id="left-hud-panel" class="intro-hidden"><div class="hud-item-group"><div class="keys-title" data-i18n="hudKeys">KEYS</div> <div class="keys-counter"><span id="keys-collected-count">0</span> / <span id="keys-total-count">0</span></div> <div id="keys-list-container"></div></div> <div class="hud-item-group" id="pathfinder-hud-group"><div class="pathfinders-title" data-i18n="hudPathfinders">PATHFINDERS</div> <div class="pathfinders-counter"><span id="pathfinders-remaining-count">0</span> / <span id="pathfinders-total-count">0</span></div></div></div> <div id="map-area-container" class="intro-hidden"><div id="hunter-status-panel"><span class="status-label" data-i18n="statusLabel">HUNTER STATUS:</span> <div class="status-marquee-container"><span id="hunter-status-val" class="status-marquee-text status--scanning" data-i18n="statusScanning">SCANNING</span></div></div> <div style="position: relative; display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 90vw; margin-bottom: calc(var(--h-unit) * 2); margin-bottom: calc(var(--d-h-unit) * 2);"><canvas id="main-2d-canvas" aria-label="2D Navigation Map" style="margin-bottom: 0;"></canvas> <button id="mobile-zoom-btn" aria-label="Toggle Zoom"><svg id="zoom-out-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;"><circle cx="11" cy="11" r="6"></circle><line x1="21" y1="21" x2="15.5" y2="15.5"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg> <svg id="zoom-in-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;" class="hidden"><circle cx="11" cy="11" r="6"></circle><line x1="21" y1="21" x2="15.5" y2="15.5"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg></button></div> <div id="proximeter-container" class="hidden"><div class="proximeter-label" data-i18n="proximityDetector">PROXIMITY DETECTOR</div> <div class="proximeter-bar"><span class="proximeter-cell" data-index="1"></span> <span class="proximeter-cell" data-index="2"></span> <span class="proximeter-cell" data-index="3"></span> <span class="proximeter-cell" data-index="4"></span> <span class="proximeter-cell" data-index="5"></span> <span class="proximeter-cell" data-index="6"></span> <span class="proximeter-cell" data-index="7"></span> <span class="proximeter-cell" data-index="8"></span> <span class="proximeter-cell" data-index="9"></span> <span class="proximeter-cell" data-index="10"></span></div></div> <div id="bottom-hud-container" class="intro-hidden"><div id="floor-display" aria-live="polite"><span class="hud-label" data-i18n="hudFloor">Floor</span> <span id="current-floor">0</span></div> <div id="visited-display" aria-live="polite"><span class="hud-label" data-i18n="hudVisited">Visited</span> <span class="visited-value"><span id="visited-percent">0</span>%</span></div></div></div> <div id="right-hud-panel" class="intro-hidden"><aside id="map-legend"><h3 data-i18n="mapLegendTitle">MAP LEGEND</h3> <div class="legend-item"><span class="color-box color-box--visited"></span> <span data-i18n="legendVisited">Visited Path</span></div> <div class="legend-item"><span class="color-box color-box--known"></span> <span data-i18n="legendKnown">Known Path</span></div> <div class="legend-item"><span class="color-box color-box--start"></span> <span data-i18n="legendStart">Starting Point</span></div> <div class="legend-item"><span class="color-box color-box--exit"></span> <span data-i18n="legendExit">Maze Exit</span></div> <div id="legend-hunter" class="legend-item"><span class="color-box color-box--hunter"></span> <span data-i18n="legendHunter">Void Hunter</span></div> <div class="legend-item"><span class="color-box color-box--teleport"></span> <span data-i18n="legendTeleport">Teleport</span></div> <div class="legend-item"><span class="symbol-box"><svg viewBox="0 0 24 24" fill="none" style="width: 100%; height: 100%;"><path d="M12 2L5 9H9V11H15V9H19L12 2Z" fill="#00ffff"></path><path d="M12 22L19 15H15V13H9V15H5L12 22Z" fill="#ff00ff"></path></svg></span> <span data-i18n="legendElevator">Elevator</span></div></aside> <aside id="controls-hint"><h3 data-i18n="controlsHintTitle">CONTROLS HINT</h3> <div id="controls-hint-content"></div></aside></div> <nav id="mobile-controls" class="hidden"><button id="mobile-down" class="mobile-btn" disabled="" aria-label="Go Down">▼</button> <button id="mobile-map" class="mobile-btn" disabled="" aria-label="Open Map" data-i18n="map">MAP</button> <button id="mobile-up" class="mobile-btn" disabled="" aria-label="Go Up">▲</button></nav> <div id="map3d-container" class="hidden"></div>',Ne(t,"id","start-menu"),Ne(i,"id","story-screen"),Ne(i,"class","hidden"),Ne(a,"id","victory-screen"),Ne(a,"class","hidden"),Ne(r,"id","game-over-screen"),Ne(r,"class","hidden"),Ne(l,"id","pause-screen"),Ne(l,"class","hidden"),Ne(f,"id","saving-indicator"),Ne(f,"class","hidden"),Ne(_,"id","game-container")},m(v,m){Re(v,t,m),Re(v,e,m),Re(v,i,m),Re(v,n,m),Re(v,a,m),Re(v,o,m),Re(v,r,m),Re(v,c,m),Re(v,l,m),Re(v,u,m),Re(v,f,m),Re(v,p,m),Re(v,_,m)},p:an,i:an,o:an,d(v){v&&(Ae(t),Ae(e),Ae(i),Ae(n),Ae(a),Ae(o),Ae(r),Ae(c),Ae(l),Ae(u),Ae(f),Ae(p),Ae(_))}}}function rm(s){let t=null;function e(a){var o,r,c;t&&t.destroy(),sl(),(o=document.getElementById("start-menu"))==null||o.classList.add("hidden"),(r=document.getElementById("victory-screen"))==null||r.classList.add("hidden"),(c=document.getElementById("game-over-screen"))==null||c.classList.add("hidden"),t=new vo(a,j.BRANCHING_FACTOR)}function i(){var o,r,c;const a=nl();a&&(t&&t.destroy(),(o=document.getElementById("start-menu"))==null||o.classList.add("hidden"),(r=document.getElementById("victory-screen"))==null||r.classList.add("hidden"),(c=document.getElementById("game-over-screen"))==null||c.classList.add("hidden"),t=new vo(a.degree,a.branchingFactor,a))}function n(){var o,r,c;t&&t.destroy(),(o=document.getElementById("victory-screen"))==null||o.classList.add("hidden"),(r=document.getElementById("game-over-screen"))==null||r.classList.add("hidden");const a=document.getElementById("continue-btn-menu");a&&(a.style.display=go()?"":"none"),(c=document.getElementById("start-menu"))==null||c.classList.remove("hidden")}return vl(()=>{Qo();const a=document.getElementById("maze-degree"),o=document.getElementById("degree-val"),r=document.getElementById("hunter-count"),c=document.getElementById("teleport-count"),l=document.getElementById("keys-count"),u=document.getElementById("pathfinder-count"),f=document.getElementById("safe-mode"),p=I=>{const L=f&&f.checked?0:j.getHunterCount(I);r&&(r.innerText=String(L),r.style.color=L>0?"#f00":"#88ccff")};f&&a&&(f.onchange=()=>{p(parseInt(a.value))});const _=I=>{const V=j.getTeleportCount(I);c&&(c.innerText=String(V))},v=I=>{const V=j.getHunterCount(I)*2;l&&(l.innerText=String(V))},m=I=>{const V=j.getPathfinderCount(I);u&&(u.innerText=String(V))};if(a){j.MIN_MAZE_DEGREE!==void 0&&(a.min=String(j.MIN_MAZE_DEGREE)),j.MAX_MAZE_DEGREE!==void 0&&(a.max=String(j.MAX_MAZE_DEGREE)),j.MAZE_DEGREE!==void 0&&(a.value=String(j.MAZE_DEGREE)),a.oninput=()=>{const V=parseInt(a.value);o&&(o.innerText=String(V)),p(V),_(V),v(V),m(V)};const I=parseInt(a.value);o&&(o.innerText=String(I)),p(I),_(I),v(I),m(I)}const d=document.getElementById("continue-btn-menu");d&&(d.style.display=go()?"":"none");const h=document.getElementById("mobile-pause-btn");h&&(h.onclick=I=>{I.stopPropagation(),t&&t.togglePause()});const x=document.getElementById("mobile-teleport-exit-btn");x&&(x.onclick=I=>{I.stopPropagation(),t&&t.isTeleportMode&&t.toggleTeleportMap(!1)});const g=document.getElementById("start-btn");g&&a&&(g.onclick=()=>{e(parseInt(a.value))});const y=document.getElementById("continue-btn-menu");y&&(y.onclick=()=>{i()});const E=document.getElementById("restart-btn-victory");E&&a&&(E.onclick=()=>{e(parseInt(a.value))});const A=document.getElementById("menu-btn-victory");A&&(A.onclick=()=>{n()});const b=document.getElementById("continue-btn-death");b&&(b.onclick=()=>{i()});const D=document.getElementById("retry-btn-death");D&&a&&(D.onclick=()=>{e(parseInt(a.value))});const M=document.getElementById("menu-btn-death");M&&(M.onclick=()=>{n()});const S=document.getElementById("resume-btn");S&&(S.onclick=()=>{t&&t.togglePause()});const N=document.getElementById("menu-btn-pause");N&&(N.onclick=()=>{n()})}),[]}class om extends Pl{constructor(t){super(),wl(this,t,rm,am,ul,{})}}new om({target:document.getElementById("app")});
